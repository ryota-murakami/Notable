'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5974],
  {
    './components/editor/block-editor.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AutoFocus: () => AutoFocus,
          ComplexDocument: () => ComplexDocument,
          CustomStyling: () => CustomStyling,
          Default: () => Default,
          Playground: () => Playground,
          ReadOnly: () => ReadOnly,
          SlashCommands: () => SlashCommands,
          WithChangeHandler: () => WithChangeHandler,
          WithInitialContent: () => WithInitialContent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => block_editor_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        dist_react = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        DndProvider = __webpack_require__(
          '../../node_modules/.pnpm/react-dnd@16.0.1_@types+node@24.1.0_@types+react@19.1.8_react@19.1.0/node_modules/react-dnd/dist/core/DndProvider.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/index.js'
        ),
        basic_blocks_kit = __webpack_require__(
          './components/editor/plugins/basic-blocks-kit.tsx'
        ),
        basic_marks_kit = __webpack_require__(
          './components/editor/plugins/basic-marks-kit.tsx'
        )
      function cov_bjvazrbmm() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/advanced-blocks-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'd8104665fddcb1f4578425de722d7aad82a37807' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/advanced-blocks-kit.tsx',
            statementMap: {
              0: {
                start: { line: 5, column: 27 },
                end: { line: 11, column: 2 },
              },
              1: {
                start: { line: 12, column: 27 },
                end: { line: 18, column: 2 },
              },
              2: {
                start: { line: 19, column: 23 },
                end: { line: 25, column: 2 },
              },
              3: {
                start: { line: 27, column: 24 },
                end: { line: 33, column: 2 },
              },
              4: {
                start: { line: 35, column: 19 },
                end: { line: 41, column: 2 },
              },
              5: {
                start: { line: 43, column: 21 },
                end: { line: 49, column: 2 },
              },
              6: {
                start: { line: 51, column: 22 },
                end: { line: 57, column: 2 },
              },
              7: {
                start: { line: 59, column: 20 },
                end: { line: 65, column: 2 },
              },
              8: {
                start: { line: 66, column: 23 },
                end: { line: 72, column: 2 },
              },
              9: {
                start: { line: 73, column: 24 },
                end: { line: 79, column: 2 },
              },
              10: {
                start: { line: 80, column: 30 },
                end: { line: 86, column: 2 },
              },
              11: {
                start: { line: 88, column: 20 },
                end: { line: 95, column: 2 },
              },
              12: {
                start: { line: 96, column: 25 },
                end: { line: 103, column: 2 },
              },
              13: {
                start: { line: 105, column: 22 },
                end: { line: 112, column: 2 },
              },
              14: {
                start: { line: 113, column: 33 },
                end: { line: 134, column: 1 },
              },
            },
            fnMap: {},
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
              13: 0,
              14: 0,
            },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/advanced-blocks-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\n\n// Advanced Block Plugins for Notion-like experience\n\n// List Plugins\nconst BulletedListPlugin = createPlatePlugin({\n  key: 'ul',\n  node: {\n    isElement: true,\n    type: 'ul',\n  },\n})\n\nconst NumberedListPlugin = createPlatePlugin({\n  key: 'ol',\n  node: {\n    isElement: true,\n    type: 'ol',\n  },\n})\n\nconst ListItemPlugin = createPlatePlugin({\n  key: 'li',\n  node: {\n    isElement: true,\n    type: 'li',\n  },\n})\n\n// Code Block Plugin\nconst CodeBlockPlugin = createPlatePlugin({\n  key: 'code_block',\n  node: {\n    isElement: true,\n    type: 'code_block',\n  },\n})\n\n// Todo Plugin (Checkbox List)\nconst TodoPlugin = createPlatePlugin({\n  key: 'action_item',\n  node: {\n    isElement: true,\n    type: 'action_item',\n  },\n})\n\n// Toggle Plugin (Collapsible Block)\nconst TogglePlugin = createPlatePlugin({\n  key: 'toggle',\n  node: {\n    isElement: true,\n    type: 'toggle',\n  },\n})\n\n// Callout Plugin (Info Box)\nconst CalloutPlugin = createPlatePlugin({\n  key: 'callout',\n  node: {\n    isElement: true,\n    type: 'callout',\n  },\n})\n\n// Table Plugins\nconst TablePlugin = createPlatePlugin({\n  key: 'table',\n  node: {\n    isElement: true,\n    type: 'table',\n  },\n})\n\nconst TableRowPlugin = createPlatePlugin({\n  key: 'tr',\n  node: {\n    isElement: true,\n    type: 'tr',\n  },\n})\n\nconst TableCellPlugin = createPlatePlugin({\n  key: 'td',\n  node: {\n    isElement: true,\n    type: 'td',\n  },\n})\n\nconst TableHeaderCellPlugin = createPlatePlugin({\n  key: 'th',\n  node: {\n    isElement: true,\n    type: 'th',\n  },\n})\n\n// Media Plugins\nconst ImagePlugin = createPlatePlugin({\n  key: 'img',\n  node: {\n    isElement: true,\n    type: 'img',\n    isVoid: true,\n  },\n})\n\nconst MediaEmbedPlugin = createPlatePlugin({\n  key: 'media_embed',\n  node: {\n    isElement: true,\n    type: 'media_embed',\n    isVoid: true,\n  },\n})\n\n// Divider Plugin\nconst DividerPlugin = createPlatePlugin({\n  key: 'thematic_break',\n  node: {\n    isElement: true,\n    type: 'thematic_break',\n    isVoid: true,\n  },\n})\n\nexport const AdvancedBlocksKit = [\n  // Lists\n  BulletedListPlugin,\n  NumberedListPlugin,\n  ListItemPlugin,\n\n  // Code\n  CodeBlockPlugin,\n\n  // Interactive Blocks\n  TodoPlugin,\n  TogglePlugin,\n  CalloutPlugin,\n\n  // Tables\n  TablePlugin,\n  TableRowPlugin,\n  TableCellPlugin,\n  TableHeaderCellPlugin,\n\n  // Media\n  ImagePlugin,\n  MediaEmbedPlugin,\n\n  // Layout\n  DividerPlugin,\n]\n",
              ],
              names: [
                'createPlatePlugin',
                'BulletedListPlugin',
                'key',
                'node',
                'isElement',
                'type',
                'NumberedListPlugin',
                'ListItemPlugin',
                'CodeBlockPlugin',
                'TodoPlugin',
                'TogglePlugin',
                'CalloutPlugin',
                'TablePlugin',
                'TableRowPlugin',
                'TableCellPlugin',
                'TableHeaderCellPlugin',
                'ImagePlugin',
                'isVoid',
                'MediaEmbedPlugin',
                'DividerPlugin',
                'AdvancedBlocksKit',
              ],
              mappings:
                'AAAA;AAEA,SAASA,iBAAiB,QAAQ,gBAAe;AAEjD,oDAAoD;AAEpD,eAAe;AACf,MAAMC,qBAAqBD,kBAAkB;IAC3CE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,MAAMC,qBAAqBN,kBAAkB;IAC3CE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,MAAME,iBAAiBP,kBAAkB;IACvCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,oBAAoB;AACpB,MAAMG,kBAAkBR,kBAAkB;IACxCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,8BAA8B;AAC9B,MAAMI,aAAaT,kBAAkB;IACnCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,oCAAoC;AACpC,MAAMK,eAAeV,kBAAkB;IACrCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,4BAA4B;AAC5B,MAAMM,gBAAgBX,kBAAkB;IACtCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,gBAAgB;AAChB,MAAMO,cAAcZ,kBAAkB;IACpCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,MAAMQ,iBAAiBb,kBAAkB;IACvCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,MAAMS,kBAAkBd,kBAAkB;IACxCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,MAAMU,wBAAwBf,kBAAkB;IAC9CE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;IACR;AACF;AAEA,gBAAgB;AAChB,MAAMW,cAAchB,kBAAkB;IACpCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNY,QAAQ;IACV;AACF;AAEA,MAAMC,mBAAmBlB,kBAAkB;IACzCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNY,QAAQ;IACV;AACF;AAEA,iBAAiB;AACjB,MAAME,gBAAgBnB,kBAAkB;IACtCE,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNY,QAAQ;IACV;AACF;AAEA,OAAO,MAAMG,oBAAoB;IAC/B,QAAQ;IACRnB;IACAK;IACAC;IAEA,OAAO;IACPC;IAEA,qBAAqB;IACrBC;IACAC;IACAC;IAEA,SAAS;IACTC;IACAC;IACAC;IACAC;IAEA,QAAQ;IACRC;IACAE;IAEA,SAAS;IACTC;CACD,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'd8104665fddcb1f4578425de722d7aad82a37807',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_bjvazrbmm = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_bjvazrbmm()
      const BulletedListPlugin =
          (cov_bjvazrbmm().s[0]++,
          (0, dist_react.SU)({
            key: 'ul',
            node: { isElement: !0, type: 'ul' },
          })),
        NumberedListPlugin =
          (cov_bjvazrbmm().s[1]++,
          (0, dist_react.SU)({
            key: 'ol',
            node: { isElement: !0, type: 'ol' },
          })),
        ListItemPlugin =
          (cov_bjvazrbmm().s[2]++,
          (0, dist_react.SU)({
            key: 'li',
            node: { isElement: !0, type: 'li' },
          })),
        CodeBlockPlugin =
          (cov_bjvazrbmm().s[3]++,
          (0, dist_react.SU)({
            key: 'code_block',
            node: { isElement: !0, type: 'code_block' },
          })),
        TodoPlugin =
          (cov_bjvazrbmm().s[4]++,
          (0, dist_react.SU)({
            key: 'action_item',
            node: { isElement: !0, type: 'action_item' },
          })),
        TogglePlugin =
          (cov_bjvazrbmm().s[5]++,
          (0, dist_react.SU)({
            key: 'toggle',
            node: { isElement: !0, type: 'toggle' },
          })),
        CalloutPlugin =
          (cov_bjvazrbmm().s[6]++,
          (0, dist_react.SU)({
            key: 'callout',
            node: { isElement: !0, type: 'callout' },
          })),
        TablePlugin =
          (cov_bjvazrbmm().s[7]++,
          (0, dist_react.SU)({
            key: 'table',
            node: { isElement: !0, type: 'table' },
          })),
        TableRowPlugin =
          (cov_bjvazrbmm().s[8]++,
          (0, dist_react.SU)({
            key: 'tr',
            node: { isElement: !0, type: 'tr' },
          })),
        TableCellPlugin =
          (cov_bjvazrbmm().s[9]++,
          (0, dist_react.SU)({
            key: 'td',
            node: { isElement: !0, type: 'td' },
          })),
        TableHeaderCellPlugin =
          (cov_bjvazrbmm().s[10]++,
          (0, dist_react.SU)({
            key: 'th',
            node: { isElement: !0, type: 'th' },
          })),
        ImagePlugin =
          (cov_bjvazrbmm().s[11]++,
          (0, dist_react.SU)({
            key: 'img',
            node: { isElement: !0, type: 'img', isVoid: !0 },
          })),
        MediaEmbedPlugin =
          (cov_bjvazrbmm().s[12]++,
          (0, dist_react.SU)({
            key: 'media_embed',
            node: { isElement: !0, type: 'media_embed', isVoid: !0 },
          })),
        DividerPlugin =
          (cov_bjvazrbmm().s[13]++,
          (0, dist_react.SU)({
            key: 'thematic_break',
            node: { isElement: !0, type: 'thematic_break', isVoid: !0 },
          })),
        AdvancedBlocksKit =
          (cov_bjvazrbmm().s[14]++,
          [
            BulletedListPlugin,
            NumberedListPlugin,
            ListItemPlugin,
            CodeBlockPlugin,
            TodoPlugin,
            TogglePlugin,
            CalloutPlugin,
            TablePlugin,
            TableRowPlugin,
            TableCellPlugin,
            TableHeaderCellPlugin,
            ImagePlugin,
            MediaEmbedPlugin,
            DividerPlugin,
          ])
      var slash_command_kit = __webpack_require__(
          './components/editor/plugins/slash-command-kit.tsx'
        ),
        slash_command_menu = __webpack_require__(
          './components/editor/slash-command-menu.tsx'
        ),
        ui_editor = __webpack_require__('./components/ui/editor.tsx'),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_2l316e3c8d() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/block-editor.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/block-editor.tsx',
            statementMap: {
              0: {
                start: { line: 15, column: 21 },
                end: { line: 24, column: 1 },
              },
              1: {
                start: { line: 26, column: 29 },
                end: { line: 34, column: 2 },
              },
              2: {
                start: { line: 31, column: 12 },
                end: { line: 31, column: 19 },
              },
              3: {
                start: { line: 36, column: 28 },
                end: { line: 38, column: 2 },
              },
              4: {
                start: { line: 40, column: 33 },
                end: { line: 47, column: 5 },
              },
              5: {
                start: { line: 40, column: 37 },
                end: { line: 47, column: 5 },
              },
              6: {
                start: { line: 49, column: 23 },
                end: { line: 49, column: 35 },
              },
              7: {
                start: { line: 50, column: 30 },
                end: { line: 50, column: 52 },
              },
              8: {
                start: { line: 52, column: 19 },
                end: { line: 55, column: 6 },
              },
              9: {
                start: { line: 57, column: 75 },
                end: { line: 57, column: 98 },
              },
              10: {
                start: { line: 59, column: 26 },
                end: { line: 78, column: 6 },
              },
              11: {
                start: { line: 60, column: 8 },
                end: { line: 74, column: 9 },
              },
              12: {
                start: { line: 62, column: 30 },
                end: { line: 62, column: 51 },
              },
              13: {
                start: { line: 63, column: 12 },
                end: { line: 73, column: 13 },
              },
              14: {
                start: { line: 64, column: 30 },
                end: { line: 64, column: 53 },
              },
              15: {
                start: { line: 65, column: 29 },
                end: { line: 65, column: 58 },
              },
              16: {
                start: { line: 67, column: 16 },
                end: { line: 72, column: 22 },
              },
              17: {
                start: { line: 68, column: 20 },
                end: { line: 71, column: 23 },
              },
              18: {
                start: { line: 80, column: 29 },
                end: { line: 93, column: 6 },
              },
              19: {
                start: { line: 81, column: 23 },
                end: { line: 81, column: 35 },
              },
              20: {
                start: { line: 82, column: 29 },
                end: { line: 82, column: 74 },
              },
              21: {
                start: { line: 83, column: 8 },
                end: { line: 90, column: 9 },
              },
              22: {
                start: { line: 84, column: 12 },
                end: { line: 84, column: 54 },
              },
              23: {
                start: { line: 86, column: 31 },
                end: { line: 86, column: 79 },
              },
              24: {
                start: { line: 87, column: 12 },
                end: { line: 89, column: 13 },
              },
              25: {
                start: { line: 88, column: 16 },
                end: { line: 88, column: 47 },
              },
              26: {
                start: { line: 94, column: 29 },
                end: { line: 105, column: 10 },
              },
              27: {
                start: { line: 95, column: 23 },
                end: { line: 95, column: 35 },
              },
              28: {
                start: { line: 96, column: 29 },
                end: { line: 96, column: 74 },
              },
              29: {
                start: { line: 97, column: 8 },
                end: { line: 104, column: 9 },
              },
              30: {
                start: { line: 98, column: 12 },
                end: { line: 98, column: 57 },
              },
              31: {
                start: { line: 100, column: 31 },
                end: { line: 100, column: 79 },
              },
              32: {
                start: { line: 101, column: 12 },
                end: { line: 103, column: 13 },
              },
              33: {
                start: { line: 102, column: 16 },
                end: { line: 102, column: 47 },
              },
              34: {
                start: { line: 107, column: 32 },
                end: { line: 134, column: 6 },
              },
              35: {
                start: { line: 108, column: 8 },
                end: { line: 108, column: 29 },
              },
              36: {
                start: { line: 108, column: 22 },
                end: { line: 108, column: 29 },
              },
              37: {
                start: { line: 110, column: 8 },
                end: { line: 114, column: 9 },
              },
              38: {
                start: { line: 111, column: 12 },
                end: { line: 111, column: 35 },
              },
              39: {
                start: { line: 116, column: 8 },
                end: { line: 121, column: 9 },
              },
              40: {
                start: { line: 117, column: 12 },
                end: { line: 117, column: 35 },
              },
              41: {
                start: { line: 123, column: 8 },
                end: { line: 126, column: 9 },
              },
              42: {
                start: { line: 124, column: 12 },
                end: { line: 124, column: 35 },
              },
              43: {
                start: { line: 128, column: 8 },
                end: { line: 131, column: 9 },
              },
              44: {
                start: { line: 129, column: 12 },
                end: { line: 129, column: 35 },
              },
              45: {
                start: { line: 135, column: 4 },
                end: { line: 325, column: 7 },
              },
              46: {
                start: { line: 146, column: 28 },
                end: { line: 146, column: 44 },
              },
              47: {
                start: { line: 147, column: 28 },
                end: { line: 147, column: 96 },
              },
              48: {
                start: { line: 159, column: 36 },
                end: { line: 159, column: 57 },
              },
              49: {
                start: { line: 160, column: 36 },
                end: { line: 160, column: 63 },
              },
              50: {
                start: { line: 327, column: 0 },
                end: { line: 418, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 29, column: 17 },
                  end: { line: 29, column: 18 },
                },
                loc: {
                  start: { line: 29, column: 21 },
                  end: { line: 32, column: 9 },
                },
                line: 29,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 40, column: 33 },
                  end: { line: 40, column: 34 },
                },
                loc: {
                  start: { line: 40, column: 37 },
                  end: { line: 47, column: 5 },
                },
                line: 40,
              },
              2: {
                name: 'BlockEditor',
                decl: {
                  start: { line: 48, column: 16 },
                  end: { line: 48, column: 27 },
                },
                loc: {
                  start: { line: 48, column: 160 },
                  end: { line: 326, column: 1 },
                },
                line: 48,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 59, column: 38 },
                  end: { line: 59, column: 39 },
                },
                loc: {
                  start: { line: 59, column: 47 },
                  end: { line: 75, column: 5 },
                },
                line: 59,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 67, column: 27 },
                  end: { line: 67, column: 28 },
                },
                loc: {
                  start: { line: 67, column: 31 },
                  end: { line: 72, column: 17 },
                },
                line: 67,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 80, column: 41 },
                  end: { line: 80, column: 42 },
                },
                loc: {
                  start: { line: 80, column: 50 },
                  end: { line: 91, column: 5 },
                },
                line: 80,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 94, column: 41 },
                  end: { line: 94, column: 42 },
                },
                loc: {
                  start: { line: 94, column: 50 },
                  end: { line: 105, column: 5 },
                },
                line: 94,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 107, column: 44 },
                  end: { line: 107, column: 45 },
                },
                loc: {
                  start: { line: 107, column: 53 },
                  end: { line: 132, column: 5 },
                },
                line: 107,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 145, column: 34 },
                  end: { line: 145, column: 35 },
                },
                loc: {
                  start: { line: 145, column: 47 },
                  end: { line: 148, column: 25 },
                },
                line: 145,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 158, column: 43 },
                  end: { line: 158, column: 44 },
                },
                loc: {
                  start: { line: 158, column: 52 },
                  end: { line: 161, column: 33 },
                },
                line: 158,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 48, column: 30 },
                  end: { line: 48, column: 57 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 48, column: 45 },
                    end: { line: 48, column: 57 },
                  },
                ],
                line: 48,
              },
              1: {
                loc: {
                  start: { line: 48, column: 69 },
                  end: { line: 48, column: 108 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 48, column: 83 },
                    end: { line: 48, column: 108 },
                  },
                ],
                line: 48,
              },
              2: {
                loc: {
                  start: { line: 48, column: 121 },
                  end: { line: 48, column: 137 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 48, column: 132 },
                    end: { line: 48, column: 137 },
                  },
                ],
                line: 48,
              },
              3: {
                loc: {
                  start: { line: 48, column: 139 },
                  end: { line: 48, column: 156 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 48, column: 151 },
                    end: { line: 48, column: 156 },
                  },
                ],
                line: 48,
              },
              4: {
                loc: {
                  start: { line: 60, column: 8 },
                  end: { line: 74, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 60, column: 8 },
                    end: { line: 74, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 60,
              },
              5: {
                loc: {
                  start: { line: 60, column: 12 },
                  end: { line: 60, column: 40 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 60, column: 12 },
                    end: { line: 60, column: 29 },
                  },
                  {
                    start: { line: 60, column: 33 },
                    end: { line: 60, column: 40 },
                  },
                ],
                line: 60,
              },
              6: {
                loc: {
                  start: { line: 63, column: 12 },
                  end: { line: 73, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 63, column: 12 },
                    end: { line: 73, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 63,
              },
              7: {
                loc: {
                  start: { line: 63, column: 16 },
                  end: { line: 63, column: 53 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 63, column: 16 },
                    end: { line: 63, column: 25 },
                  },
                  {
                    start: { line: 63, column: 29 },
                    end: { line: 63, column: 53 },
                  },
                ],
                line: 63,
              },
              8: {
                loc: {
                  start: { line: 83, column: 8 },
                  end: { line: 90, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 83, column: 8 },
                    end: { line: 90, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 83,
              },
              9: {
                loc: {
                  start: { line: 83, column: 12 },
                  end: { line: 83, column: 37 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 83, column: 12 },
                    end: { line: 83, column: 24 },
                  },
                  {
                    start: { line: 83, column: 28 },
                    end: { line: 83, column: 37 },
                  },
                ],
                line: 83,
              },
              10: {
                loc: {
                  start: { line: 87, column: 12 },
                  end: { line: 89, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 87, column: 12 },
                    end: { line: 89, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 87,
              },
              11: {
                loc: {
                  start: { line: 97, column: 8 },
                  end: { line: 104, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 97, column: 8 },
                    end: { line: 104, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 97,
              },
              12: {
                loc: {
                  start: { line: 101, column: 12 },
                  end: { line: 103, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 101, column: 12 },
                    end: { line: 103, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 101,
              },
              13: {
                loc: {
                  start: { line: 108, column: 8 },
                  end: { line: 108, column: 29 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 108, column: 8 },
                    end: { line: 108, column: 29 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 108,
              },
              14: {
                loc: {
                  start: { line: 110, column: 8 },
                  end: { line: 114, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 110, column: 8 },
                    end: { line: 114, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 110,
              },
              15: {
                loc: {
                  start: { line: 110, column: 12 },
                  end: { line: 110, column: 69 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 110, column: 13 },
                    end: { line: 110, column: 26 },
                  },
                  {
                    start: { line: 110, column: 30 },
                    end: { line: 110, column: 43 },
                  },
                  {
                    start: { line: 110, column: 48 },
                    end: { line: 110, column: 69 },
                  },
                ],
                line: 110,
              },
              16: {
                loc: {
                  start: { line: 116, column: 8 },
                  end: { line: 121, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 116, column: 8 },
                    end: { line: 121, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 116,
              },
              17: {
                loc: {
                  start: { line: 116, column: 12 },
                  end: { line: 116, column: 87 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 116, column: 13 },
                    end: { line: 116, column: 26 },
                  },
                  {
                    start: { line: 116, column: 30 },
                    end: { line: 116, column: 43 },
                  },
                  {
                    start: { line: 116, column: 48 },
                    end: { line: 116, column: 62 },
                  },
                  {
                    start: { line: 116, column: 66 },
                    end: { line: 116, column: 87 },
                  },
                ],
                line: 116,
              },
              18: {
                loc: {
                  start: { line: 123, column: 8 },
                  end: { line: 126, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 123, column: 8 },
                    end: { line: 126, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 123,
              },
              19: {
                loc: {
                  start: { line: 123, column: 12 },
                  end: { line: 123, column: 65 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 123, column: 13 },
                    end: { line: 123, column: 26 },
                  },
                  {
                    start: { line: 123, column: 30 },
                    end: { line: 123, column: 43 },
                  },
                  {
                    start: { line: 123, column: 48 },
                    end: { line: 123, column: 65 },
                  },
                ],
                line: 123,
              },
              20: {
                loc: {
                  start: { line: 128, column: 8 },
                  end: { line: 131, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 128, column: 8 },
                    end: { line: 131, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 128,
              },
              21: {
                loc: {
                  start: { line: 128, column: 12 },
                  end: { line: 128, column: 83 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 128, column: 13 },
                    end: { line: 128, column: 26 },
                  },
                  {
                    start: { line: 128, column: 30 },
                    end: { line: 128, column: 43 },
                  },
                  {
                    start: { line: 128, column: 48 },
                    end: { line: 128, column: 62 },
                  },
                  {
                    start: { line: 128, column: 66 },
                    end: { line: 128, column: 83 },
                  },
                ],
                line: 128,
              },
              22: {
                loc: {
                  start: { line: 147, column: 28 },
                  end: { line: 147, column: 95 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 147, column: 71 },
                    end: { line: 147, column: 77 },
                  },
                  {
                    start: { line: 147, column: 80 },
                    end: { line: 147, column: 95 },
                  },
                ],
                line: 147,
              },
              23: {
                loc: {
                  start: { line: 147, column: 28 },
                  end: { line: 147, column: 68 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 147, column: 28 },
                    end: { line: 147, column: 45 },
                  },
                  {
                    start: { line: 147, column: 49 },
                    end: { line: 147, column: 68 },
                  },
                ],
                line: 147,
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
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
            b: {
              0: [0],
              1: [0],
              2: [0],
              3: [0],
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
              15: [0, 0, 0],
              16: [0, 0],
              17: [0, 0, 0, 0],
              18: [0, 0],
              19: [0, 0, 0],
              20: [0, 0],
              21: [0, 0, 0, 0],
              22: [0, 0],
              23: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/block-editor.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { useCallback, useRef, useState } from 'react'\nimport { createPlatePlugin, Plate, usePlateEditor } from 'platejs/react'\nimport { DndProvider } from 'react-dnd'\nimport { HTML5Backend } from 'react-dnd-html5-backend'\n\nimport { BasicBlocksKit } from './plugins/basic-blocks-kit'\nimport { BasicMarksKit } from './plugins/basic-marks-kit'\nimport { AdvancedBlocksKit } from './plugins/advanced-blocks-kit'\nimport { SlashCommandPlugin } from './plugins/slash-command-kit'\nimport { SlashCommandMenu, useSlashCommand } from './slash-command-menu'\nimport { Editor, EditorContainer } from '@/components/ui/editor'\nimport { cn } from '@/lib/utils'\n\ninterface BlockEditorProps {\n  initialValue?: any[]\n  onChange?: (value: any[]) => void\n  placeholder?: string\n  className?: string\n  readOnly?: boolean\n  autoFocus?: boolean\n}\n\nconst defaultValue = [\n  {\n    type: 'p',\n    children: [{ text: '' }],\n  },\n]\n\n// Block Selection Plugin for drag handles and hover states\nconst BlockSelectionPlugin = createPlatePlugin({\n  key: 'block_selection',\n  handlers: {\n    onClick: () => {\n      // Handle block selection logic\n      return\n    },\n  },\n})\n\n// Block Drag and Drop Plugin\nconst BlockDragDropPlugin = createPlatePlugin({\n  key: 'block_dnd',\n  // This would integrate with react-dnd for drag and drop functionality\n})\n\n// Create complete plugin configuration\nconst createBlockEditorPlugins = () => [\n  ...BasicBlocksKit,\n  ...BasicMarksKit,\n  ...AdvancedBlocksKit,\n  SlashCommandPlugin,\n  BlockSelectionPlugin,\n  BlockDragDropPlugin,\n]\n\nexport function BlockEditor({\n  initialValue = defaultValue,\n  onChange,\n  placeholder = 'Press / for commands...',\n  className,\n  readOnly = false,\n  autoFocus = false,\n}: BlockEditorProps) {\n  const _editorRef = useRef<HTMLDivElement>(null)\n  const [value, setValue] = useState(initialValue)\n\n  // Create the Plate editor with all plugins\n  const editor = usePlateEditor({\n    plugins: createBlockEditorPlugins(),\n    value,\n  })\n\n  // Slash command management\n  const { isOpen, position, openMenu, closeMenu, handleCommandSelect } =\n    useSlashCommand(editor)\n\n  // Handle slash command trigger\n  const handleKeyDown = useCallback(\n    (event: React.KeyboardEvent) => {\n      if (event.key === '/' && !isOpen) {\n        // Get cursor position for menu placement\n        const selection = window.getSelection()\n        if (selection && selection.rangeCount > 0) {\n          const range = selection.getRangeAt(0)\n          const rect = range.getBoundingClientRect()\n\n          // Open menu at cursor position\n          setTimeout(() => {\n            openMenu({\n              x: rect.left,\n              y: rect.bottom + 8,\n            })\n          }, 0)\n        }\n      }\n    },\n    [isOpen, openMenu]\n  )\n\n  // Block hover effects\n  const handleMouseEnter = useCallback(\n    (event: React.MouseEvent) => {\n      const target = event.target as HTMLElement\n      const blockElement = target.closest(\n        '[data-slate-node=\"element\"]'\n      ) as HTMLElement\n\n      if (blockElement && !readOnly) {\n        blockElement.classList.add('block-hover')\n\n        // Show drag handle (implement this UI element)\n        const dragHandle = blockElement.querySelector('.block-drag-handle')\n        if (dragHandle) {\n          (dragHandle as HTMLElement).style.opacity = '1'\n        }\n      }\n    },\n    [readOnly]\n  )\n\n  const handleMouseLeave = useCallback((event: React.MouseEvent) => {\n    const target = event.target as HTMLElement\n    const blockElement = target.closest(\n      '[data-slate-node=\"element\"]'\n    ) as HTMLElement\n\n    if (blockElement) {\n      blockElement.classList.remove('block-hover')\n\n      // Hide drag handle\n      const dragHandle = blockElement.querySelector('.block-drag-handle')\n      if (dragHandle) {\n        (dragHandle as HTMLElement).style.opacity = '0'\n      }\n    }\n  }, [])\n\n  // Keyboard shortcuts for block operations\n  const handleKeyDownGlobal = useCallback(\n    (event: React.KeyboardEvent) => {\n      if (readOnly) return\n\n      // Cmd/Ctrl + Enter: Insert new block below\n      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {\n        event.preventDefault()\n        // Insert new paragraph block\n        // TODO: Implement with proper Plate API\n      }\n\n      // Cmd/Ctrl + Shift + Enter: Insert new block above\n      if (\n        (event.metaKey || event.ctrlKey) &&\n        event.shiftKey &&\n        event.key === 'Enter'\n      ) {\n        event.preventDefault()\n        // Insert block above current selection\n        // Insert new paragraph block\n        // TODO: Implement with proper Plate API\n      }\n\n      // Cmd/Ctrl + D: Duplicate current block\n      if ((event.metaKey || event.ctrlKey) && event.key === 'd') {\n        event.preventDefault()\n        // Duplicate current block logic\n      }\n\n      // Cmd/Ctrl + Shift + D: Delete current block\n      if (\n        (event.metaKey || event.ctrlKey) &&\n        event.shiftKey &&\n        event.key === 'd'\n      ) {\n        event.preventDefault()\n        // Delete current block logic\n      }\n    },\n    [readOnly]\n  )\n\n  return (\n    <DndProvider backend={HTML5Backend}>\n      <div\n        className={cn('block-editor-container', className)}\n        ref={_editorRef}\n        data-testid='block-editor'\n      >\n        <Plate\n          editor={editor}\n          onChange={({ value }) => {\n            setValue(value)\n            onChange?.(value)\n          }}\n        >\n          <EditorContainer\n            className='block-editor-content'\n            onMouseEnter={handleMouseEnter}\n            onMouseLeave={handleMouseLeave}\n          >\n            <Editor\n              placeholder={placeholder}\n              readOnly={readOnly}\n              autoFocus={autoFocus}\n              className={cn(\n                'block-editor-inner',\n                'prose prose-neutral dark:prose-invert max-w-none',\n                '[&_.slate-selected]:bg-blue-100 dark:[&_.slate-selected]:bg-blue-900/30',\n                '[&_.block-hover]:bg-gray-50 dark:[&_.block-hover]:bg-gray-900/30',\n                '[&_.block-selected]:ring-2 [&_.block-selected]:ring-blue-500'\n              )}\n              onKeyDown={(event) => {\n                handleKeyDown(event)\n                handleKeyDownGlobal(event)\n              }}\n            />\n          </EditorContainer>\n        </Plate>\n\n        {/* Slash Command Menu */}\n        <SlashCommandMenu\n          isOpen={isOpen}\n          onClose={closeMenu}\n          onSelect={handleCommandSelect}\n          position={position}\n        />\n      </div>\n\n      <style\n        dangerouslySetInnerHTML={{\n          __html: `\n        .block-editor-container {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .block-editor-content {\n          width: 100%;\n          height: 100%;\n        }\n\n        .block-editor-inner {\n          width: 100%;\n          min-height: 100%;\n          padding: 1rem;\n          outline: none;\n        }\n\n        /* Block styling */\n        .block-editor-inner [data-slate-node='element'] {\n          position: relative;\n          margin: 0.125rem 0;\n          border-radius: 0.25rem;\n          transition: all 0.2s ease;\n        }\n\n        /* Block hover and selection states */\n        .block-hover {\n          background-color: rgba(0, 0, 0, 0.02);\n        }\n\n        .dark .block-hover {\n          background-color: rgba(255, 255, 255, 0.02);\n        }\n\n        .block-selected {\n          background-color: rgba(59, 130, 246, 0.1);\n          ring: 2px solid rgb(59, 130, 246);\n        }\n\n        /* Drag handle styling */\n        .block-drag-handle {\n          position: absolute;\n          left: -2rem;\n          top: 50%;\n          transform: translateY(-50%);\n          opacity: 0;\n          transition: opacity 0.2s ease;\n          cursor: grab;\n          width: 1rem;\n          height: 1rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: #6b7280;\n        }\n\n        .block-drag-handle:hover {\n          color: #374151;\n        }\n\n        .block-drag-handle:active {\n          cursor: grabbing;\n        }\n\n        /* Typography for different block types */\n        .block-editor-inner h1 {\n          font-size: 2rem;\n          font-weight: 700;\n          line-height: 1.2;\n          margin: 1rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner h2 {\n          font-size: 1.5rem;\n          font-weight: 600;\n          line-height: 1.3;\n          margin: 0.875rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner h3 {\n          font-size: 1.25rem;\n          font-weight: 600;\n          line-height: 1.4;\n          margin: 0.75rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner blockquote {\n          border-left: 4px solid #e5e7eb;\n          padding-left: 1rem;\n          margin: 0.5rem 0;\n          font-style: italic;\n          color: #6b7280;\n        }\n\n        .block-editor-inner pre {\n          background-color: #f3f4f6;\n          border-radius: 0.5rem;\n          padding: 1rem;\n          overflow-x: auto;\n          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n          font-size: 0.875rem;\n        }\n\n        .dark .block-editor-inner pre {\n          background-color: #1f2937;\n        }\n\n        .block-editor-inner ul,\n        .block-editor-inner ol {\n          padding-left: 1.5rem;\n          margin: 0.5rem 0;\n        }\n\n        .block-editor-inner li {\n          margin: 0.25rem 0;\n        }\n\n        /* Custom block components will need additional styling */\n        .toggle-block {\n          border: 1px solid #e5e7eb;\n          border-radius: 0.5rem;\n          padding: 0.75rem;\n          margin: 0.5rem 0;\n        }\n\n        .callout-block {\n          background-color: #f0f9ff;\n          border: 1px solid #0ea5e9;\n          border-radius: 0.5rem;\n          padding: 1rem;\n          margin: 0.5rem 0;\n        }\n\n        .todo-block {\n          display: flex;\n          align-items: flex-start;\n          gap: 0.5rem;\n          margin: 0.25rem 0;\n        }\n\n        .todo-checkbox {\n          margin-top: 0.125rem;\n          cursor: pointer;\n        }\n      `,\n        }}\n      />\n    </DndProvider>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACvE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAErD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC/D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACvE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC/D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAW/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACnB;QACE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,C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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAExB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAA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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACzE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAClE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAE/D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oCACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oCACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAC3B,CAAC;;;;kCAMP,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wBAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wBAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;0BAItB,KAAC,CAAC,CAAC,CAAC,CAAC;gBACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkJZ,CAAC;gBACC,CAAC;;;;AAIT',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '9ba39a40de187a90cd044ed07aecf252ee130e2b',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '9ba39a40de187a90cd044ed07aecf252ee130e2b' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_2l316e3c8d = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2l316e3c8d()
      const defaultValue =
          (cov_2l316e3c8d().s[0]++, [{ type: 'p', children: [{ text: '' }] }]),
        BlockSelectionPlugin =
          (cov_2l316e3c8d().s[1]++,
          (0, dist_react.SU)({
            key: 'block_selection',
            handlers: {
              onClick: () => {
                ;(cov_2l316e3c8d().f[0]++, cov_2l316e3c8d().s[2]++)
              },
            },
          })),
        BlockDragDropPlugin =
          (cov_2l316e3c8d().s[3]++, (0, dist_react.SU)({ key: 'block_dnd' }))
      cov_2l316e3c8d().s[4]++
      function BlockEditor({
        initialValue = (cov_2l316e3c8d().b[0][0]++, defaultValue),
        onChange,
        placeholder = (cov_2l316e3c8d().b[1][0]++, 'Press / for commands...'),
        className,
        readOnly = (cov_2l316e3c8d().b[2][0]++, !1),
        autoFocus = (cov_2l316e3c8d().b[3][0]++, !1),
      }) {
        cov_2l316e3c8d().f[2]++
        const _editorRef = (cov_2l316e3c8d().s[6]++, (0, react.useRef)(null)),
          [value, setValue] =
            (cov_2l316e3c8d().s[7]++, (0, react.useState)(initialValue)),
          editor =
            (cov_2l316e3c8d().s[8]++,
            (0, dist_react.FI)({
              plugins:
                (cov_2l316e3c8d().f[1]++,
                cov_2l316e3c8d().s[5]++,
                [
                  ...basic_blocks_kit.h,
                  ...basic_marks_kit.N,
                  ...AdvancedBlocksKit,
                  slash_command_kit.kr,
                  BlockSelectionPlugin,
                  BlockDragDropPlugin,
                ]),
              value,
            })),
          { isOpen, position, openMenu, closeMenu, handleCommandSelect } =
            (cov_2l316e3c8d().s[9]++, (0, slash_command_menu.C)(editor)),
          handleKeyDown =
            (cov_2l316e3c8d().s[10]++,
            (0, react.useCallback)(
              (event) => {
                if (
                  (cov_2l316e3c8d().f[3]++,
                  cov_2l316e3c8d().s[11]++,
                  cov_2l316e3c8d().b[5][0]++,
                  '/' !== event.key || (cov_2l316e3c8d().b[5][1]++, isOpen))
                )
                  cov_2l316e3c8d().b[4][1]++
                else {
                  cov_2l316e3c8d().b[4][0]++
                  const selection =
                    (cov_2l316e3c8d().s[12]++, window.getSelection())
                  if (
                    (cov_2l316e3c8d().s[13]++,
                    cov_2l316e3c8d().b[7][0]++,
                    selection &&
                      (cov_2l316e3c8d().b[7][1]++, selection.rangeCount > 0))
                  ) {
                    cov_2l316e3c8d().b[6][0]++
                    const range =
                        (cov_2l316e3c8d().s[14]++, selection.getRangeAt(0)),
                      rect =
                        (cov_2l316e3c8d().s[15]++,
                        range.getBoundingClientRect())
                    ;(cov_2l316e3c8d().s[16]++,
                      setTimeout(() => {
                        ;(cov_2l316e3c8d().f[4]++,
                          cov_2l316e3c8d().s[17]++,
                          openMenu({ x: rect.left, y: rect.bottom + 8 }))
                      }, 0))
                  } else cov_2l316e3c8d().b[6][1]++
                }
              },
              [isOpen, openMenu]
            )),
          handleMouseEnter =
            (cov_2l316e3c8d().s[18]++,
            (0, react.useCallback)(
              (event) => {
                cov_2l316e3c8d().f[5]++
                const target = (cov_2l316e3c8d().s[19]++, event.target),
                  blockElement =
                    (cov_2l316e3c8d().s[20]++,
                    target.closest('[data-slate-node="element"]'))
                if (
                  (cov_2l316e3c8d().s[21]++,
                  cov_2l316e3c8d().b[9][0]++,
                  blockElement && (cov_2l316e3c8d().b[9][1]++, !readOnly))
                ) {
                  ;(cov_2l316e3c8d().b[8][0]++,
                    cov_2l316e3c8d().s[22]++,
                    blockElement.classList.add('block-hover'))
                  const dragHandle =
                    (cov_2l316e3c8d().s[23]++,
                    blockElement.querySelector('.block-drag-handle'))
                  ;(cov_2l316e3c8d().s[24]++,
                    dragHandle
                      ? (cov_2l316e3c8d().b[10][0]++,
                        cov_2l316e3c8d().s[25]++,
                        (dragHandle.style.opacity = '1'))
                      : cov_2l316e3c8d().b[10][1]++)
                } else cov_2l316e3c8d().b[8][1]++
              },
              [readOnly]
            )),
          handleMouseLeave =
            (cov_2l316e3c8d().s[26]++,
            (0, react.useCallback)((event) => {
              cov_2l316e3c8d().f[6]++
              const target = (cov_2l316e3c8d().s[27]++, event.target),
                blockElement =
                  (cov_2l316e3c8d().s[28]++,
                  target.closest('[data-slate-node="element"]'))
              if ((cov_2l316e3c8d().s[29]++, blockElement)) {
                ;(cov_2l316e3c8d().b[11][0]++,
                  cov_2l316e3c8d().s[30]++,
                  blockElement.classList.remove('block-hover'))
                const dragHandle =
                  (cov_2l316e3c8d().s[31]++,
                  blockElement.querySelector('.block-drag-handle'))
                ;(cov_2l316e3c8d().s[32]++,
                  dragHandle
                    ? (cov_2l316e3c8d().b[12][0]++,
                      cov_2l316e3c8d().s[33]++,
                      (dragHandle.style.opacity = '0'))
                    : cov_2l316e3c8d().b[12][1]++)
              } else cov_2l316e3c8d().b[11][1]++
            }, [])),
          handleKeyDownGlobal =
            (cov_2l316e3c8d().s[34]++,
            (0, react.useCallback)(
              (event) => {
                if (
                  (cov_2l316e3c8d().f[7]++, cov_2l316e3c8d().s[35]++, readOnly)
                )
                  return (
                    cov_2l316e3c8d().b[13][0]++,
                    void cov_2l316e3c8d().s[36]++
                  )
                ;(cov_2l316e3c8d().b[13][1]++,
                  cov_2l316e3c8d().s[37]++,
                  cov_2l316e3c8d().b[15][0]++,
                  (event.metaKey ||
                    (cov_2l316e3c8d().b[15][1]++, event.ctrlKey)) &&
                  (cov_2l316e3c8d().b[15][2]++, 'Enter' === event.key)
                    ? (cov_2l316e3c8d().b[14][0]++,
                      cov_2l316e3c8d().s[38]++,
                      event.preventDefault())
                    : cov_2l316e3c8d().b[14][1]++,
                  cov_2l316e3c8d().s[39]++,
                  cov_2l316e3c8d().b[17][0]++,
                  (event.metaKey ||
                    (cov_2l316e3c8d().b[17][1]++, event.ctrlKey)) &&
                  (cov_2l316e3c8d().b[17][2]++, event.shiftKey) &&
                  (cov_2l316e3c8d().b[17][3]++, 'Enter' === event.key)
                    ? (cov_2l316e3c8d().b[16][0]++,
                      cov_2l316e3c8d().s[40]++,
                      event.preventDefault())
                    : cov_2l316e3c8d().b[16][1]++,
                  cov_2l316e3c8d().s[41]++,
                  cov_2l316e3c8d().b[19][0]++,
                  (event.metaKey ||
                    (cov_2l316e3c8d().b[19][1]++, event.ctrlKey)) &&
                  (cov_2l316e3c8d().b[19][2]++, 'd' === event.key)
                    ? (cov_2l316e3c8d().b[18][0]++,
                      cov_2l316e3c8d().s[42]++,
                      event.preventDefault())
                    : cov_2l316e3c8d().b[18][1]++,
                  cov_2l316e3c8d().s[43]++,
                  cov_2l316e3c8d().b[21][0]++,
                  (event.metaKey ||
                    (cov_2l316e3c8d().b[21][1]++, event.ctrlKey)) &&
                  (cov_2l316e3c8d().b[21][2]++, event.shiftKey) &&
                  (cov_2l316e3c8d().b[21][3]++, 'd' === event.key)
                    ? (cov_2l316e3c8d().b[20][0]++,
                      cov_2l316e3c8d().s[44]++,
                      event.preventDefault())
                    : cov_2l316e3c8d().b[20][1]++)
              },
              [readOnly]
            ))
        return (
          cov_2l316e3c8d().s[45]++,
          (0, jsx_runtime.jsxs)(DndProvider.Q, {
            backend: dist.t2,
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className: (0, utils.cn)('block-editor-container', className),
                ref: _editorRef,
                'data-testid': 'block-editor',
                children: [
                  (0, jsx_runtime.jsx)(dist_react.T6, {
                    editor,
                    onChange: ({ value }) => {
                      ;(cov_2l316e3c8d().f[8]++,
                        cov_2l316e3c8d().s[46]++,
                        setValue(value),
                        cov_2l316e3c8d().s[47]++,
                        cov_2l316e3c8d().b[23][0]++,
                        null === onChange ||
                        (cov_2l316e3c8d().b[23][1]++, void 0 === onChange)
                          ? cov_2l316e3c8d().b[22][0]++
                          : (cov_2l316e3c8d().b[22][1]++, onChange(value)))
                    },
                    children: (0, jsx_runtime.jsx)(ui_editor.nG, {
                      className: 'block-editor-content',
                      onMouseEnter: handleMouseEnter,
                      onMouseLeave: handleMouseLeave,
                      children: (0, jsx_runtime.jsx)(ui_editor.KE, {
                        placeholder,
                        readOnly,
                        autoFocus,
                        className: (0, utils.cn)(
                          'block-editor-inner',
                          'prose prose-neutral dark:prose-invert max-w-none',
                          '[&_.slate-selected]:bg-blue-100 dark:[&_.slate-selected]:bg-blue-900/30',
                          '[&_.block-hover]:bg-gray-50 dark:[&_.block-hover]:bg-gray-900/30',
                          '[&_.block-selected]:ring-2 [&_.block-selected]:ring-blue-500'
                        ),
                        onKeyDown: (event) => {
                          ;(cov_2l316e3c8d().f[9]++,
                            cov_2l316e3c8d().s[48]++,
                            handleKeyDown(event),
                            cov_2l316e3c8d().s[49]++,
                            handleKeyDownGlobal(event))
                        },
                      }),
                    }),
                  }),
                  (0, jsx_runtime.jsx)(slash_command_menu.U, {
                    isOpen,
                    onClose: closeMenu,
                    onSelect: handleCommandSelect,
                    position,
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    "\n        .block-editor-container {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .block-editor-content {\n          width: 100%;\n          height: 100%;\n        }\n\n        .block-editor-inner {\n          width: 100%;\n          min-height: 100%;\n          padding: 1rem;\n          outline: none;\n        }\n\n        /* Block styling */\n        .block-editor-inner [data-slate-node='element'] {\n          position: relative;\n          margin: 0.125rem 0;\n          border-radius: 0.25rem;\n          transition: all 0.2s ease;\n        }\n\n        /* Block hover and selection states */\n        .block-hover {\n          background-color: rgba(0, 0, 0, 0.02);\n        }\n\n        .dark .block-hover {\n          background-color: rgba(255, 255, 255, 0.02);\n        }\n\n        .block-selected {\n          background-color: rgba(59, 130, 246, 0.1);\n          ring: 2px solid rgb(59, 130, 246);\n        }\n\n        /* Drag handle styling */\n        .block-drag-handle {\n          position: absolute;\n          left: -2rem;\n          top: 50%;\n          transform: translateY(-50%);\n          opacity: 0;\n          transition: opacity 0.2s ease;\n          cursor: grab;\n          width: 1rem;\n          height: 1rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: #6b7280;\n        }\n\n        .block-drag-handle:hover {\n          color: #374151;\n        }\n\n        .block-drag-handle:active {\n          cursor: grabbing;\n        }\n\n        /* Typography for different block types */\n        .block-editor-inner h1 {\n          font-size: 2rem;\n          font-weight: 700;\n          line-height: 1.2;\n          margin: 1rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner h2 {\n          font-size: 1.5rem;\n          font-weight: 600;\n          line-height: 1.3;\n          margin: 0.875rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner h3 {\n          font-size: 1.25rem;\n          font-weight: 600;\n          line-height: 1.4;\n          margin: 0.75rem 0 0.5rem 0;\n        }\n\n        .block-editor-inner blockquote {\n          border-left: 4px solid #e5e7eb;\n          padding-left: 1rem;\n          margin: 0.5rem 0;\n          font-style: italic;\n          color: #6b7280;\n        }\n\n        .block-editor-inner pre {\n          background-color: #f3f4f6;\n          border-radius: 0.5rem;\n          padding: 1rem;\n          overflow-x: auto;\n          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n          font-size: 0.875rem;\n        }\n\n        .dark .block-editor-inner pre {\n          background-color: #1f2937;\n        }\n\n        .block-editor-inner ul,\n        .block-editor-inner ol {\n          padding-left: 1.5rem;\n          margin: 0.5rem 0;\n        }\n\n        .block-editor-inner li {\n          margin: 0.25rem 0;\n        }\n\n        /* Custom block components will need additional styling */\n        .toggle-block {\n          border: 1px solid #e5e7eb;\n          border-radius: 0.5rem;\n          padding: 0.75rem;\n          margin: 0.5rem 0;\n        }\n\n        .callout-block {\n          background-color: #f0f9ff;\n          border: 1px solid #0ea5e9;\n          border-radius: 0.5rem;\n          padding: 1rem;\n          margin: 0.5rem 0;\n        }\n\n        .todo-block {\n          display: flex;\n          align-items: flex-start;\n          gap: 0.5rem;\n          margin: 0.25rem 0;\n        }\n\n        .todo-checkbox {\n          margin-top: 0.125rem;\n          cursor: pointer;\n        }\n      ",
                },
              }),
            ],
          })
        )
      }
      ;(cov_2l316e3c8d().s[50]++,
        (BlockEditor.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'BlockEditor',
          props: {
            initialValue: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'any' }],
                raw: 'any[]',
              },
              description: '',
              defaultValue: {
                value:
                  "[\n  {\n    type: 'p',\n    children: [{ text: '' }],\n  },\n]",
                computed: !1,
              },
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: any[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'any' }],
                        raw: 'any[]',
                      },
                      name: 'value',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: {
                value: "'Press / for commands...'",
                computed: !1,
              },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            readOnly: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            autoFocus: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
          },
        }))
      var test_dist = __webpack_require__(
        '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
      )
      const block_editor_stories = {
          title: 'Components/Editor/BlockEditor',
          component: BlockEditor,
          parameters: { layout: 'padded' },
          tags: ['autodocs'],
          argTypes: {
            placeholder: { control: { type: 'text' } },
            readOnly: { control: { type: 'boolean' } },
            autoFocus: { control: { type: 'boolean' } },
            className: { control: { type: 'text' } },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { minHeight: '500px', padding: '20px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Default = {
          args: { placeholder: 'Press / for commands...', autoFocus: !1 },
          play: async ({ canvasElement }) => {
            const canvas = (0, test_dist.ux)(canvasElement),
              editor = canvas.getByTestId('block-editor')
            await (0, test_dist.E3)(editor).toBeVisible()
            const placeholder = canvas.getByText('Press / for commands...')
            await (0, test_dist.E3)(placeholder).toBeVisible()
          },
        },
        WithInitialContent = {
          args: {
            initialValue: [
              { type: 'h1', children: [{ text: 'Welcome to Block Editor' }] },
              {
                type: 'p',
                children: [
                  { text: 'This is a paragraph with some ' },
                  { text: 'bold text', bold: !0 },
                  { text: ' and ' },
                  { text: 'italic text', italic: !0 },
                  { text: '.' },
                ],
              },
              {
                type: 'blockquote',
                children: [
                  {
                    text: 'This is a blockquote. It should have special styling.',
                  },
                ],
              },
              {
                type: 'ul',
                children: [
                  { type: 'li', children: [{ text: 'First bullet point' }] },
                  { type: 'li', children: [{ text: 'Second bullet point' }] },
                  { type: 'li', children: [{ text: 'Third bullet point' }] },
                ],
              },
            ],
          },
        },
        ReadOnly = {
          args: {
            readOnly: !0,
            initialValue: [
              { type: 'h2', children: [{ text: 'Read-Only Mode' }] },
              {
                type: 'p',
                children: [
                  {
                    text: 'This editor is in read-only mode. You cannot edit this content.',
                  },
                ],
              },
              {
                type: 'ol',
                children: [
                  { type: 'li', children: [{ text: 'You cannot type' }] },
                  {
                    type: 'li',
                    children: [{ text: 'You cannot use slash commands' }],
                  },
                  {
                    type: 'li',
                    children: [{ text: 'You cannot select and modify text' }],
                  },
                ],
              },
            ],
          },
        },
        AutoFocus = {
          args: {
            autoFocus: !0,
            placeholder: 'This editor will auto-focus...',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, test_dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editableContent = canvas
              .getByTestId('block-editor')
              .querySelector('[contenteditable="true"]')
            editableContent &&
              (await (0, test_dist.E3)(document.activeElement).toBe(
                editableContent
              ))
          },
        },
        SlashCommands = {
          args: { placeholder: 'Type / to see available commands' },
          play: async ({ canvasElement }) => {
            const editableContent = (0, test_dist.ux)(canvasElement)
              .getByTestId('block-editor')
              .querySelector('[contenteditable="true"]')
            editableContent &&
              (await test_dist.Q4.click(editableContent),
              await test_dist.Q4.type(editableContent, '/'))
          },
        },
        ComplexDocument = {
          args: {
            initialValue: [
              { type: 'h1', children: [{ text: 'Project Documentation' }] },
              {
                type: 'p',
                children: [
                  {
                    text: 'This is a comprehensive example showing various block types available in the editor.',
                  },
                ],
              },
              { type: 'h2', children: [{ text: 'Text Formatting' }] },
              {
                type: 'p',
                children: [
                  { text: 'You can use ' },
                  { text: 'bold', bold: !0 },
                  { text: ', ' },
                  { text: 'italic', italic: !0 },
                  { text: ', ' },
                  { text: 'underline', underline: !0 },
                  { text: ', ' },
                  { text: 'strikethrough', strikethrough: !0 },
                  { text: ', and ' },
                  { text: 'inline code', code: !0 },
                  { text: ' formatting.' },
                ],
              },
              { type: 'h2', children: [{ text: 'Lists' }] },
              { type: 'h3', children: [{ text: 'Unordered List' }] },
              {
                type: 'ul',
                children: [
                  { type: 'li', children: [{ text: 'First item' }] },
                  {
                    type: 'li',
                    children: [
                      { text: 'Second item with ' },
                      { text: 'bold text', bold: !0 },
                    ],
                  },
                  { type: 'li', children: [{ text: 'Third item' }] },
                ],
              },
              { type: 'h3', children: [{ text: 'Ordered List' }] },
              {
                type: 'ol',
                children: [
                  { type: 'li', children: [{ text: 'Step one' }] },
                  { type: 'li', children: [{ text: 'Step two' }] },
                  { type: 'li', children: [{ text: 'Step three' }] },
                ],
              },
              { type: 'h2', children: [{ text: 'Quotes and Code' }] },
              {
                type: 'blockquote',
                children: [
                  {
                    text: 'The best way to predict the future is to invent it. - Alan Kay',
                  },
                ],
              },
              {
                type: 'code_block',
                children: [
                  {
                    text: 'function hello() {\n  console.log("Hello, World!");\n}',
                  },
                ],
              },
            ],
          },
        },
        WithChangeHandler = {
          render: () => {
            const [content, setContent] = react.useState([
              {
                type: 'p',
                children: [
                  {
                    text: 'Type something and watch the console for changes...',
                  },
                ],
              },
            ])
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)(BlockEditor, {
                  initialValue: content,
                  onChange: (value) => {
                    setContent(value)
                  },
                  placeholder: 'Start typing...',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  style: {
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '4px',
                  },
                  children: [
                    (0, jsx_runtime.jsx)('strong', {
                      children: 'Current Content (JSON):',
                    }),
                    (0, jsx_runtime.jsx)('pre', {
                      style: { marginTop: '10px', fontSize: '12px' },
                      children: JSON.stringify(content, null, 2),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        CustomStyling = {
          args: {
            className: 'custom-block-editor',
            initialValue: [
              { type: 'h1', children: [{ text: 'Custom Styled Editor' }] },
              {
                type: 'p',
                children: [
                  {
                    text: 'This editor has custom styling applied through className prop.',
                  },
                ],
              },
            ],
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)('style', {
                    children:
                      "\n            .custom-block-editor {\n              border: 2px solid #e5e7eb;\n              border-radius: 8px;\n              background-color: #fafafa;\n            }\n            \n            .custom-block-editor .block-editor-inner {\n              font-family: 'Georgia', serif;\n              line-height: 1.8;\n            }\n            \n            .custom-block-editor h1 {\n              color: #1e40af;\n            }\n          ",
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    style: { minHeight: '500px', padding: '20px' },
                    children: (0, jsx_runtime.jsx)(Story, {}),
                  }),
                ],
              }),
          ],
        },
        Playground = {
          render: () => {
            const [readOnly, setReadOnly] = react.useState(!1),
              [autoFocus, setAutoFocus] = react.useState(!1),
              [placeholder, setPlaceholder] = react.useState(
                'Press / for commands...'
              )
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  style: {
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '4px',
                  },
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      style: { marginTop: 0 },
                      children: 'Editor Options',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      style: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
                      children: [
                        (0, jsx_runtime.jsxs)('label', {
                          children: [
                            (0, jsx_runtime.jsx)('input', {
                              type: 'checkbox',
                              checked: readOnly,
                              onChange: (e) => setReadOnly(e.target.checked),
                            }),
                            ' ',
                            'Read Only',
                          ],
                        }),
                        (0, jsx_runtime.jsxs)('label', {
                          children: [
                            (0, jsx_runtime.jsx)('input', {
                              type: 'checkbox',
                              checked: autoFocus,
                              onChange: (e) => setAutoFocus(e.target.checked),
                            }),
                            ' ',
                            'Auto Focus',
                          ],
                        }),
                        (0, jsx_runtime.jsxs)('label', {
                          children: [
                            'Placeholder:',
                            ' ',
                            (0, jsx_runtime.jsx)('input', {
                              type: 'text',
                              value: placeholder,
                              onChange: (e) => setPlaceholder(e.target.value),
                              style: { marginLeft: '5px' },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(BlockEditor, {
                  readOnly,
                  autoFocus,
                  placeholder,
                  onChange: () => {},
                }),
              ],
            })
          },
        },
        __namedExportsOrder = [
          'Default',
          'WithInitialContent',
          'ReadOnly',
          'AutoFocus',
          'SlashCommands',
          'ComplexDocument',
          'WithChangeHandler',
          'CustomStyling',
          'Playground',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    placeholder: 'Press / for commands...',\n    autoFocus: false\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check editor is rendered\n    const editor = canvas.getByTestId('block-editor');\n    await expect(editor).toBeVisible();\n\n    // Check placeholder is visible\n    const placeholder = canvas.getByText('Press / for commands...');\n    await expect(placeholder).toBeVisible();\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithInitialContent.parameters = {
          ...WithInitialContent.parameters,
          docs: {
            ...WithInitialContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    initialValue: [{\n      type: 'h1',\n      children: [{\n        text: 'Welcome to Block Editor'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'This is a paragraph with some '\n      }, {\n        text: 'bold text',\n        bold: true\n      }, {\n        text: ' and '\n      }, {\n        text: 'italic text',\n        italic: true\n      }, {\n        text: '.'\n      }]\n    }, {\n      type: 'blockquote',\n      children: [{\n        text: 'This is a blockquote. It should have special styling.'\n      }]\n    }, {\n      type: 'ul',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'First bullet point'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Second bullet point'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Third bullet point'\n        }]\n      }]\n    }]\n  }\n}",
              ...WithInitialContent.parameters?.docs?.source,
            },
          },
        }),
        (ReadOnly.parameters = {
          ...ReadOnly.parameters,
          docs: {
            ...ReadOnly.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    readOnly: true,\n    initialValue: [{\n      type: 'h2',\n      children: [{\n        text: 'Read-Only Mode'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'This editor is in read-only mode. You cannot edit this content.'\n      }]\n    }, {\n      type: 'ol',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'You cannot type'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'You cannot use slash commands'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'You cannot select and modify text'\n        }]\n      }]\n    }]\n  }\n}",
              ...ReadOnly.parameters?.docs?.source,
            },
          },
        }),
        (AutoFocus.parameters = {
          ...AutoFocus.parameters,
          docs: {
            ...AutoFocus.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    autoFocus: true,\n    placeholder: 'This editor will auto-focus...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait a bit for auto-focus to happen\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Check that the editor content is focused\n    const editor = canvas.getByTestId('block-editor');\n    const editableContent = editor.querySelector('[contenteditable=\"true\"]');\n    if (editableContent) {\n      await expect(document.activeElement).toBe(editableContent);\n    }\n  }\n}",
              ...AutoFocus.parameters?.docs?.source,
            },
          },
        }),
        (SlashCommands.parameters = {
          ...SlashCommands.parameters,
          docs: {
            ...SlashCommands.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    placeholder: 'Type / to see available commands'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find the editor\n    const editor = canvas.getByTestId('block-editor');\n    const editableContent = editor.querySelector('[contenteditable=\"true\"]');\n    if (editableContent) {\n      // Click to focus\n      await userEvent.click(editableContent);\n\n      // Type slash to trigger command menu\n      await userEvent.type(editableContent, '/');\n\n      // Note: The slash command menu implementation is not complete,\n      // so we can't test the menu appearance yet\n    }\n  }\n}",
              ...SlashCommands.parameters?.docs?.source,
            },
          },
        }),
        (ComplexDocument.parameters = {
          ...ComplexDocument.parameters,
          docs: {
            ...ComplexDocument.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    initialValue: [{\n      type: 'h1',\n      children: [{\n        text: 'Project Documentation'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'This is a comprehensive example showing various block types available in the editor.'\n      }]\n    }, {\n      type: 'h2',\n      children: [{\n        text: 'Text Formatting'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'You can use '\n      }, {\n        text: 'bold',\n        bold: true\n      }, {\n        text: ', '\n      }, {\n        text: 'italic',\n        italic: true\n      }, {\n        text: ', '\n      }, {\n        text: 'underline',\n        underline: true\n      }, {\n        text: ', '\n      }, {\n        text: 'strikethrough',\n        strikethrough: true\n      }, {\n        text: ', and '\n      }, {\n        text: 'inline code',\n        code: true\n      }, {\n        text: ' formatting.'\n      }]\n    }, {\n      type: 'h2',\n      children: [{\n        text: 'Lists'\n      }]\n    }, {\n      type: 'h3',\n      children: [{\n        text: 'Unordered List'\n      }]\n    }, {\n      type: 'ul',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'First item'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Second item with '\n        }, {\n          text: 'bold text',\n          bold: true\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Third item'\n        }]\n      }]\n    }, {\n      type: 'h3',\n      children: [{\n        text: 'Ordered List'\n      }]\n    }, {\n      type: 'ol',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'Step one'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Step two'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Step three'\n        }]\n      }]\n    }, {\n      type: 'h2',\n      children: [{\n        text: 'Quotes and Code'\n      }]\n    }, {\n      type: 'blockquote',\n      children: [{\n        text: 'The best way to predict the future is to invent it. - Alan Kay'\n      }]\n    }, {\n      type: 'code_block',\n      children: [{\n        text: 'function hello() {\\n  console.log(\"Hello, World!\");\\n}'\n      }]\n    }]\n  }\n}",
              ...ComplexDocument.parameters?.docs?.source,
            },
          },
        }),
        (WithChangeHandler.parameters = {
          ...WithChangeHandler.parameters,
          docs: {
            ...WithChangeHandler.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [content, setContent] = React.useState<any[]>([{\n      type: 'p',\n      children: [{\n        text: 'Type something and watch the console for changes...'\n      }]\n    }]);\n    const handleChange = (value: any[]) => {\n      setContent(value);\n    };\n    return <div>\n        <BlockEditor initialValue={content} onChange={handleChange} placeholder='Start typing...' />\n        <div style={{\n        marginTop: '20px',\n        padding: '10px',\n        backgroundColor: '#f3f4f6',\n        borderRadius: '4px'\n      }}>\n          <strong>Current Content (JSON):</strong>\n          <pre style={{\n          marginTop: '10px',\n          fontSize: '12px'\n        }}>\n            {JSON.stringify(content, null, 2)}\n          </pre>\n        </div>\n      </div>;\n  }\n}",
              ...WithChangeHandler.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    className: 'custom-block-editor',\n    initialValue: [{\n      type: 'h1',\n      children: [{\n        text: 'Custom Styled Editor'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'This editor has custom styling applied through className prop.'\n      }]\n    }]\n  },\n  decorators: [Story => <>\n        <style>\n          {`\n            .custom-block-editor {\n              border: 2px solid #e5e7eb;\n              border-radius: 8px;\n              background-color: #fafafa;\n            }\n            \n            .custom-block-editor .block-editor-inner {\n              font-family: 'Georgia', serif;\n              line-height: 1.8;\n            }\n            \n            .custom-block-editor h1 {\n              color: #1e40af;\n            }\n          `}\n        </style>\n        <div style={{\n      minHeight: '500px',\n      padding: '20px'\n    }}>\n          <Story />\n        </div>\n      </>]\n}",
              ...CustomStyling.parameters?.docs?.source,
            },
          },
        }),
        (Playground.parameters = {
          ...Playground.parameters,
          docs: {
            ...Playground.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [readOnly, setReadOnly] = React.useState(false);\n    const [autoFocus, setAutoFocus] = React.useState(false);\n    const [placeholder, setPlaceholder] = React.useState('Press / for commands...');\n    return <div>\n        <div style={{\n        marginBottom: '20px',\n        padding: '15px',\n        backgroundColor: '#f3f4f6',\n        borderRadius: '4px'\n      }}>\n          <h3 style={{\n          marginTop: 0\n        }}>Editor Options</h3>\n          <div style={{\n          display: 'flex',\n          gap: '20px',\n          flexWrap: 'wrap'\n        }}>\n            <label>\n              <input type='checkbox' checked={readOnly} onChange={e => setReadOnly(e.target.checked)} />{' '}\n              Read Only\n            </label>\n            <label>\n              <input type='checkbox' checked={autoFocus} onChange={e => setAutoFocus(e.target.checked)} />{' '}\n              Auto Focus\n            </label>\n            <label>\n              Placeholder:{' '}\n              <input type='text' value={placeholder} onChange={e => setPlaceholder(e.target.value)} style={{\n              marginLeft: '5px'\n            }} />\n            </label>\n          </div>\n        </div>\n\n        <BlockEditor readOnly={readOnly} autoFocus={autoFocus} placeholder={placeholder} onChange={() => {}} />\n      </div>;\n  }\n}",
              ...Playground.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
