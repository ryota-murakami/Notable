'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3853],
  {
    './components/editor/plugins/slash-command-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        C5: () => filterSlashCommands,
        jG: () => groupSlashCommands,
        kr: () => SlashCommandPlugin,
      })
      var platejs_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
        ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/type.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-1.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-2.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-3.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/minus.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table.js'
          ),
        _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js'
          )
      function cov_1qu9lzuebl() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/slash-command-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/slash-command-kit.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 30 },
                end: { line: 282, column: 1 },
              },
              1: {
                start: { line: 19, column: 12 },
                end: { line: 21, column: 15 },
              },
              2: {
                start: { line: 37, column: 12 },
                end: { line: 39, column: 15 },
              },
              3: {
                start: { line: 54, column: 12 },
                end: { line: 56, column: 15 },
              },
              4: {
                start: { line: 71, column: 12 },
                end: { line: 73, column: 15 },
              },
              5: {
                start: { line: 90, column: 12 },
                end: { line: 92, column: 15 },
              },
              6: {
                start: { line: 108, column: 12 },
                end: { line: 110, column: 15 },
              },
              7: {
                start: { line: 126, column: 12 },
                end: { line: 128, column: 15 },
              },
              8: {
                start: { line: 144, column: 12 },
                end: { line: 146, column: 15 },
              },
              9: {
                start: { line: 161, column: 12 },
                end: { line: 163, column: 15 },
              },
              10: {
                start: { line: 180, column: 12 },
                end: { line: 182, column: 15 },
              },
              11: {
                start: { line: 198, column: 12 },
                end: { line: 200, column: 15 },
              },
              12: {
                start: { line: 216, column: 12 },
                end: { line: 218, column: 15 },
              },
              13: {
                start: { line: 236, column: 12 },
                end: { line: 238, column: 15 },
              },
              14: {
                start: { line: 254, column: 12 },
                end: { line: 254, column: 38 },
              },
              15: {
                start: { line: 272, column: 12 },
                end: { line: 279, column: 15 },
              },
              16: {
                start: { line: 284, column: 34 },
                end: { line: 292, column: 2 },
              },
              17: {
                start: { line: 289, column: 12 },
                end: { line: 289, column: 19 },
              },
              18: {
                start: { line: 295, column: 4 },
                end: { line: 295, column: 45 },
              },
              19: {
                start: { line: 295, column: 23 },
                end: { line: 295, column: 45 },
              },
              20: {
                start: { line: 296, column: 27 },
                end: { line: 296, column: 46 },
              },
              21: {
                start: { line: 297, column: 4 },
                end: { line: 297, column: 244 },
              },
              22: {
                start: { line: 297, column: 44 },
                end: { line: 297, column: 242 },
              },
              23: {
                start: { line: 297, column: 195 },
                end: { line: 297, column: 241 },
              },
              24: {
                start: { line: 301, column: 19 },
                end: { line: 306, column: 5 },
              },
              25: {
                start: { line: 302, column: 38 },
                end: { line: 302, column: 59 },
              },
              26: {
                start: { line: 303, column: 41 },
                end: { line: 303, column: 65 },
              },
              27: {
                start: { line: 304, column: 38 },
                end: { line: 304, column: 59 },
              },
              28: {
                start: { line: 305, column: 41 },
                end: { line: 305, column: 65 },
              },
              29: {
                start: { line: 307, column: 4 },
                end: { line: 307, column: 79 },
              },
              30: {
                start: { line: 307, column: 58 },
                end: { line: 307, column: 77 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 17, column: 16 },
                  end: { line: 17, column: 17 },
                },
                loc: {
                  start: { line: 17, column: 26 },
                  end: { line: 22, column: 9 },
                },
                line: 17,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 36, column: 16 },
                  end: { line: 36, column: 17 },
                },
                loc: {
                  start: { line: 36, column: 26 },
                  end: { line: 40, column: 9 },
                },
                line: 36,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 53, column: 16 },
                  end: { line: 53, column: 17 },
                },
                loc: {
                  start: { line: 53, column: 26 },
                  end: { line: 57, column: 9 },
                },
                line: 53,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 70, column: 16 },
                  end: { line: 70, column: 17 },
                },
                loc: {
                  start: { line: 70, column: 26 },
                  end: { line: 74, column: 9 },
                },
                line: 70,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 89, column: 16 },
                  end: { line: 89, column: 17 },
                },
                loc: {
                  start: { line: 89, column: 26 },
                  end: { line: 93, column: 9 },
                },
                line: 89,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 107, column: 16 },
                  end: { line: 107, column: 17 },
                },
                loc: {
                  start: { line: 107, column: 26 },
                  end: { line: 111, column: 9 },
                },
                line: 107,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 125, column: 16 },
                  end: { line: 125, column: 17 },
                },
                loc: {
                  start: { line: 125, column: 26 },
                  end: { line: 129, column: 9 },
                },
                line: 125,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 143, column: 16 },
                  end: { line: 143, column: 17 },
                },
                loc: {
                  start: { line: 143, column: 26 },
                  end: { line: 147, column: 9 },
                },
                line: 143,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 160, column: 16 },
                  end: { line: 160, column: 17 },
                },
                loc: {
                  start: { line: 160, column: 26 },
                  end: { line: 164, column: 9 },
                },
                line: 160,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 179, column: 16 },
                  end: { line: 179, column: 17 },
                },
                loc: {
                  start: { line: 179, column: 26 },
                  end: { line: 183, column: 9 },
                },
                line: 179,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 197, column: 16 },
                  end: { line: 197, column: 17 },
                },
                loc: {
                  start: { line: 197, column: 26 },
                  end: { line: 201, column: 9 },
                },
                line: 197,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 215, column: 16 },
                  end: { line: 215, column: 17 },
                },
                loc: {
                  start: { line: 215, column: 26 },
                  end: { line: 219, column: 9 },
                },
                line: 215,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 234, column: 16 },
                  end: { line: 234, column: 17 },
                },
                loc: {
                  start: { line: 234, column: 26 },
                  end: { line: 239, column: 9 },
                },
                line: 234,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 253, column: 16 },
                  end: { line: 253, column: 17 },
                },
                loc: {
                  start: { line: 253, column: 26 },
                  end: { line: 255, column: 9 },
                },
                line: 253,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 269, column: 16 },
                  end: { line: 269, column: 17 },
                },
                loc: {
                  start: { line: 269, column: 26 },
                  end: { line: 280, column: 9 },
                },
                line: 269,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 287, column: 19 },
                  end: { line: 287, column: 20 },
                },
                loc: {
                  start: { line: 287, column: 23 },
                  end: { line: 290, column: 9 },
                },
                line: 287,
              },
              16: {
                name: 'filterSlashCommands',
                decl: {
                  start: { line: 294, column: 16 },
                  end: { line: 294, column: 35 },
                },
                loc: {
                  start: { line: 294, column: 43 },
                  end: { line: 298, column: 1 },
                },
                line: 294,
              },
              17: {
                name: '(anonymous_17)',
                decl: {
                  start: { line: 297, column: 33 },
                  end: { line: 297, column: 34 },
                },
                loc: {
                  start: { line: 297, column: 44 },
                  end: { line: 297, column: 242 },
                },
                line: 297,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 297, column: 184 },
                  end: { line: 297, column: 185 },
                },
                loc: {
                  start: { line: 297, column: 195 },
                  end: { line: 297, column: 241 },
                },
                line: 297,
              },
              19: {
                name: 'groupSlashCommands',
                decl: {
                  start: { line: 300, column: 16 },
                  end: { line: 300, column: 34 },
                },
                loc: {
                  start: { line: 300, column: 45 },
                  end: { line: 308, column: 1 },
                },
                line: 300,
              },
              20: {
                name: '(anonymous_20)',
                decl: {
                  start: { line: 302, column: 31 },
                  end: { line: 302, column: 32 },
                },
                loc: {
                  start: { line: 302, column: 38 },
                  end: { line: 302, column: 59 },
                },
                line: 302,
              },
              21: {
                name: '(anonymous_21)',
                decl: {
                  start: { line: 303, column: 34 },
                  end: { line: 303, column: 35 },
                },
                loc: {
                  start: { line: 303, column: 41 },
                  end: { line: 303, column: 65 },
                },
                line: 303,
              },
              22: {
                name: '(anonymous_22)',
                decl: {
                  start: { line: 304, column: 31 },
                  end: { line: 304, column: 32 },
                },
                loc: {
                  start: { line: 304, column: 38 },
                  end: { line: 304, column: 59 },
                },
                line: 304,
              },
              23: {
                name: '(anonymous_23)',
                decl: {
                  start: { line: 305, column: 34 },
                  end: { line: 305, column: 35 },
                },
                loc: {
                  start: { line: 305, column: 41 },
                  end: { line: 305, column: 65 },
                },
                line: 305,
              },
              24: {
                name: '(anonymous_24)',
                decl: {
                  start: { line: 307, column: 41 },
                  end: { line: 307, column: 42 },
                },
                loc: {
                  start: { line: 307, column: 58 },
                  end: { line: 307, column: 77 },
                },
                line: 307,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 295, column: 4 },
                  end: { line: 295, column: 45 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 295, column: 4 },
                    end: { line: 295, column: 45 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 295,
              },
              1: {
                loc: {
                  start: { line: 297, column: 44 },
                  end: { line: 297, column: 242 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 297, column: 44 },
                    end: { line: 297, column: 96 },
                  },
                  {
                    start: { line: 297, column: 100 },
                    end: { line: 297, column: 158 },
                  },
                  {
                    start: { line: 297, column: 162 },
                    end: { line: 297, column: 242 },
                  },
                ],
                line: 297,
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
            },
            b: { 0: [0, 0], 1: [0, 0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/slash-command-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\nimport {\n  AlertCircle,\n  CheckSquare,\n  ChevronRight,\n  Code,\n  FileText,\n  Heading1,\n  Heading2,\n  Heading3,\n  Image,\n  List,\n  ListOrdered,\n  Minus,\n  Quote,\n  Table,\n  Type,\n} from 'lucide-react'\n\n// Slash Command Configuration\nexport interface SlashCommandItem {\n  key: string\n  title: string\n  description: string\n  icon: React.ComponentType<any>\n  keywords: string[]\n  group: 'basic' | 'media' | 'database' | 'advanced'\n  action: (editor: any) => void\n}\n\nexport const SLASH_COMMANDS: SlashCommandItem[] = [\n  // Basic Text Blocks\n  {\n    key: 'paragraph',\n    title: 'Text',\n    description: 'Just start writing with plain text',\n    icon: Type,\n    keywords: ['text', 'paragraph', 'p'],\n    group: 'basic',\n    action: (editor) => {\n      // Transform current block to paragraph\n      editor.api.block.setBlockType({ type: 'p' })\n    },\n  },\n  {\n    key: 'h1',\n    title: 'Heading 1',\n    description: 'Big section heading',\n    icon: Heading1,\n    keywords: ['heading', 'h1', 'title', 'big'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'h1' })\n    },\n  },\n  {\n    key: 'h2',\n    title: 'Heading 2',\n    description: 'Medium section heading',\n    icon: Heading2,\n    keywords: ['heading', 'h2', 'subtitle'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'h2' })\n    },\n  },\n  {\n    key: 'h3',\n    title: 'Heading 3',\n    description: 'Small section heading',\n    icon: Heading3,\n    keywords: ['heading', 'h3', 'subheading'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'h3' })\n    },\n  },\n\n  // Lists\n  {\n    key: 'bulleted-list',\n    title: 'Bulleted list',\n    description: 'Create a simple bulleted list',\n    icon: List,\n    keywords: ['list', 'bullet', 'ul', 'unordered'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.list.toggle({ type: 'ul' })\n    },\n  },\n  {\n    key: 'numbered-list',\n    title: 'Numbered list',\n    description: 'Create a list with numbering',\n    icon: ListOrdered,\n    keywords: ['list', 'number', 'ol', 'ordered'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.list.toggle({ type: 'ol' })\n    },\n  },\n  {\n    key: 'todo-list',\n    title: 'To-do list',\n    description: 'Track tasks with a to-do list',\n    icon: CheckSquare,\n    keywords: ['todo', 'task', 'check', 'checkbox'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'action_item' })\n    },\n  },\n\n  // Code and Quote\n  {\n    key: 'code-block',\n    title: 'Code',\n    description: 'Capture a code snippet',\n    icon: Code,\n    keywords: ['code', 'snippet', 'programming'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'code_block' })\n    },\n  },\n  {\n    key: 'quote',\n    title: 'Quote',\n    description: 'Capture a quote',\n    icon: Quote,\n    keywords: ['quote', 'blockquote', 'citation'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'blockquote' })\n    },\n  },\n\n  // Advanced Blocks\n  {\n    key: 'toggle',\n    title: 'Toggle list',\n    description: 'Toggles can hide and show content inside',\n    icon: ChevronRight,\n    keywords: ['toggle', 'collapse', 'expand', 'fold'],\n    group: 'advanced',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'toggle' })\n    },\n  },\n  {\n    key: 'callout',\n    title: 'Callout',\n    description: 'Make writing stand out',\n    icon: AlertCircle,\n    keywords: ['callout', 'note', 'alert', 'info'],\n    group: 'advanced',\n    action: (editor) => {\n      editor.api.block.setBlockType({ type: 'callout' })\n    },\n  },\n  {\n    key: 'divider',\n    title: 'Divider',\n    description: 'Visually divide blocks',\n    icon: Minus,\n    keywords: ['divider', 'separator', 'hr', 'line'],\n    group: 'basic',\n    action: (editor) => {\n      editor.api.block.insertBlock({ type: 'thematic_break' })\n    },\n  },\n\n  // Media\n  {\n    key: 'image',\n    title: 'Image',\n    description: 'Upload or embed with a link',\n    icon: Image,\n    keywords: ['image', 'photo', 'picture', 'media'],\n    group: 'media',\n    action: (editor) => {\n      // This would typically open an image upload dialog\n      editor.api.block.insertBlock({ type: 'img' })\n    },\n  },\n\n  // Database\n  {\n    key: 'table',\n    title: 'Table',\n    description: 'Add a table',\n    icon: Table,\n    keywords: ['table', 'spreadsheet', 'data'],\n    group: 'database',\n    action: (editor) => {\n      editor.api.table.insert()\n    },\n  },\n\n  // Templates\n  {\n    key: 'template',\n    title: 'Template',\n    description: 'Create from template',\n    icon: FileText,\n    keywords: ['template', 'preset', 'format'],\n    group: 'advanced',\n    action: (editor) => {\n      // This would open the template picker\n      // For now, just insert a placeholder\n      editor.api.block.insertBlock({\n        type: 'p',\n        children: [\n          {\n            text: 'Template placeholder - integrate with existing template system',\n          },\n        ],\n      })\n    },\n  },\n]\n\n// Slash Command Plugin\nexport const SlashCommandPlugin = createPlatePlugin({\n  key: 'slash_command',\n  handlers: {\n    onKeyDown: () => {\n      // Slash command handling is done in the main component\n      return\n    },\n  },\n})\n\n// Filter commands based on search query\nexport function filterSlashCommands(query: string): SlashCommandItem[] {\n  if (!query.trim()) return SLASH_COMMANDS\n\n  const lowercaseQuery = query.toLowerCase()\n\n  return SLASH_COMMANDS.filter(\n    (command) =>\n      command.title.toLowerCase().includes(lowercaseQuery) ||\n      command.description.toLowerCase().includes(lowercaseQuery) ||\n      command.keywords.some((keyword) =>\n        keyword.toLowerCase().includes(lowercaseQuery)\n      )\n  )\n}\n\n// Group filtered commands\nexport function groupSlashCommands(commands: SlashCommandItem[]) {\n  const groups = {\n    basic: commands.filter((cmd) => cmd.group === 'basic'),\n    advanced: commands.filter((cmd) => cmd.group === 'advanced'),\n    media: commands.filter((cmd) => cmd.group === 'media'),\n    database: commands.filter((cmd) => cmd.group === 'database'),\n  }\n\n  return Object.entries(groups).filter(([_, commands]) => commands.length > 0)\n}\n",
              ],
              names: [
                'createPlatePlugin',
                'AlertCircle',
                'CheckSquare',
                'ChevronRight',
                'Code',
                'FileText',
                'Heading1',
                'Heading2',
                'Heading3',
                'Image',
                'List',
                'ListOrdered',
                'Minus',
                'Quote',
                'Table',
                'Type',
                'SLASH_COMMANDS',
                'key',
                'title',
                'description',
                'icon',
                'keywords',
                'group',
                'action',
                'editor',
                'api',
                'block',
                'setBlockType',
                'type',
                'list',
                'toggle',
                'insertBlock',
                'table',
                'insert',
                'children',
                'text',
                'SlashCommandPlugin',
                'handlers',
                'onKeyDown',
                'filterSlashCommands',
                'query',
                'trim',
                'lowercaseQuery',
                'toLowerCase',
                'filter',
                'command',
                'includes',
                'some',
                'keyword',
                'groupSlashCommands',
                'commands',
                'groups',
                'basic',
                'cmd',
                'advanced',
                'media',
                'database',
                'Object',
                'entries',
                '_',
                'length',
              ],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '9c6e353289f9f103e4559ea1b91e07e6803f6060',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '9c6e353289f9f103e4559ea1b91e07e6803f6060' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_1qu9lzuebl = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1qu9lzuebl()
      const SLASH_COMMANDS =
          (cov_1qu9lzuebl().s[0]++,
          [
            {
              key: 'paragraph',
              title: 'Text',
              description: 'Just start writing with plain text',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_0__.A,
              keywords: ['text', 'paragraph', 'p'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[0]++,
                  cov_1qu9lzuebl().s[1]++,
                  editor.api.block.setBlockType({ type: 'p' }))
              },
            },
            {
              key: 'h1',
              title: 'Heading 1',
              description: 'Big section heading',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_1__.A,
              keywords: ['heading', 'h1', 'title', 'big'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[1]++,
                  cov_1qu9lzuebl().s[2]++,
                  editor.api.block.setBlockType({ type: 'h1' }))
              },
            },
            {
              key: 'h2',
              title: 'Heading 2',
              description: 'Medium section heading',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
              keywords: ['heading', 'h2', 'subtitle'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[2]++,
                  cov_1qu9lzuebl().s[3]++,
                  editor.api.block.setBlockType({ type: 'h2' }))
              },
            },
            {
              key: 'h3',
              title: 'Heading 3',
              description: 'Small section heading',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,
              keywords: ['heading', 'h3', 'subheading'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[3]++,
                  cov_1qu9lzuebl().s[4]++,
                  editor.api.block.setBlockType({ type: 'h3' }))
              },
            },
            {
              key: 'bulleted-list',
              title: 'Bulleted list',
              description: 'Create a simple bulleted list',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
              keywords: ['list', 'bullet', 'ul', 'unordered'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[4]++,
                  cov_1qu9lzuebl().s[5]++,
                  editor.api.list.toggle({ type: 'ul' }))
              },
            },
            {
              key: 'numbered-list',
              title: 'Numbered list',
              description: 'Create a list with numbering',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,
              keywords: ['list', 'number', 'ol', 'ordered'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[5]++,
                  cov_1qu9lzuebl().s[6]++,
                  editor.api.list.toggle({ type: 'ol' }))
              },
            },
            {
              key: 'todo-list',
              title: 'To-do list',
              description: 'Track tasks with a to-do list',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
              keywords: ['todo', 'task', 'check', 'checkbox'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[6]++,
                  cov_1qu9lzuebl().s[7]++,
                  editor.api.block.setBlockType({ type: 'action_item' }))
              },
            },
            {
              key: 'code-block',
              title: 'Code',
              description: 'Capture a code snippet',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_7__.A,
              keywords: ['code', 'snippet', 'programming'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[7]++,
                  cov_1qu9lzuebl().s[8]++,
                  editor.api.block.setBlockType({ type: 'code_block' }))
              },
            },
            {
              key: 'quote',
              title: 'Quote',
              description: 'Capture a quote',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_8__.A,
              keywords: ['quote', 'blockquote', 'citation'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[8]++,
                  cov_1qu9lzuebl().s[9]++,
                  editor.api.block.setBlockType({ type: 'blockquote' }))
              },
            },
            {
              key: 'toggle',
              title: 'Toggle list',
              description: 'Toggles can hide and show content inside',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_9__.A,
              keywords: ['toggle', 'collapse', 'expand', 'fold'],
              group: 'advanced',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[9]++,
                  cov_1qu9lzuebl().s[10]++,
                  editor.api.block.setBlockType({ type: 'toggle' }))
              },
            },
            {
              key: 'callout',
              title: 'Callout',
              description: 'Make writing stand out',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_10__.A,
              keywords: ['callout', 'note', 'alert', 'info'],
              group: 'advanced',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[10]++,
                  cov_1qu9lzuebl().s[11]++,
                  editor.api.block.setBlockType({ type: 'callout' }))
              },
            },
            {
              key: 'divider',
              title: 'Divider',
              description: 'Visually divide blocks',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_11__.A,
              keywords: ['divider', 'separator', 'hr', 'line'],
              group: 'basic',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[11]++,
                  cov_1qu9lzuebl().s[12]++,
                  editor.api.block.insertBlock({ type: 'thematic_break' }))
              },
            },
            {
              key: 'image',
              title: 'Image',
              description: 'Upload or embed with a link',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_12__.A,
              keywords: ['image', 'photo', 'picture', 'media'],
              group: 'media',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[12]++,
                  cov_1qu9lzuebl().s[13]++,
                  editor.api.block.insertBlock({ type: 'img' }))
              },
            },
            {
              key: 'table',
              title: 'Table',
              description: 'Add a table',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_13__.A,
              keywords: ['table', 'spreadsheet', 'data'],
              group: 'database',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[13]++,
                  cov_1qu9lzuebl().s[14]++,
                  editor.api.table.insert())
              },
            },
            {
              key: 'template',
              title: 'Template',
              description: 'Create from template',
              icon: _barrel_optimize_names_AlertCircle_CheckSquare_ChevronRight_Code_FileText_Heading1_Heading2_Heading3_Image_List_ListOrdered_Minus_Quote_Table_Type_lucide_react__WEBPACK_IMPORTED_MODULE_14__.A,
              keywords: ['template', 'preset', 'format'],
              group: 'advanced',
              action: (editor) => {
                ;(cov_1qu9lzuebl().f[14]++,
                  cov_1qu9lzuebl().s[15]++,
                  editor.api.block.insertBlock({
                    type: 'p',
                    children: [
                      {
                        text: 'Template placeholder - integrate with existing template system',
                      },
                    ],
                  }))
              },
            },
          ]),
        SlashCommandPlugin =
          (cov_1qu9lzuebl().s[16]++,
          (0, platejs_react__WEBPACK_IMPORTED_MODULE_15__.SU)({
            key: 'slash_command',
            handlers: {
              onKeyDown: () => {
                ;(cov_1qu9lzuebl().f[15]++, cov_1qu9lzuebl().s[17]++)
              },
            },
          }))
      function filterSlashCommands(query) {
        if ((cov_1qu9lzuebl().f[16]++, cov_1qu9lzuebl().s[18]++, !query.trim()))
          return (
            cov_1qu9lzuebl().b[0][0]++,
            cov_1qu9lzuebl().s[19]++,
            SLASH_COMMANDS
          )
        cov_1qu9lzuebl().b[0][1]++
        const lowercaseQuery = (cov_1qu9lzuebl().s[20]++, query.toLowerCase())
        return (
          cov_1qu9lzuebl().s[21]++,
          SLASH_COMMANDS.filter(
            (command) => (
              cov_1qu9lzuebl().f[17]++,
              cov_1qu9lzuebl().s[22]++,
              cov_1qu9lzuebl().b[1][0]++,
              command.title.toLowerCase().includes(lowercaseQuery) ||
                (cov_1qu9lzuebl().b[1][1]++,
                command.description.toLowerCase().includes(lowercaseQuery)) ||
                (cov_1qu9lzuebl().b[1][2]++,
                command.keywords.some(
                  (keyword) => (
                    cov_1qu9lzuebl().f[18]++,
                    cov_1qu9lzuebl().s[23]++,
                    keyword.toLowerCase().includes(lowercaseQuery)
                  )
                ))
            )
          )
        )
      }
      function groupSlashCommands(commands) {
        cov_1qu9lzuebl().f[19]++
        const groups =
          (cov_1qu9lzuebl().s[24]++,
          {
            basic: commands.filter(
              (cmd) => (
                cov_1qu9lzuebl().f[20]++,
                cov_1qu9lzuebl().s[25]++,
                'basic' === cmd.group
              )
            ),
            advanced: commands.filter(
              (cmd) => (
                cov_1qu9lzuebl().f[21]++,
                cov_1qu9lzuebl().s[26]++,
                'advanced' === cmd.group
              )
            ),
            media: commands.filter(
              (cmd) => (
                cov_1qu9lzuebl().f[22]++,
                cov_1qu9lzuebl().s[27]++,
                'media' === cmd.group
              )
            ),
            database: commands.filter(
              (cmd) => (
                cov_1qu9lzuebl().f[23]++,
                cov_1qu9lzuebl().s[28]++,
                'database' === cmd.group
              )
            ),
          })
        return (
          cov_1qu9lzuebl().s[29]++,
          Object.entries(groups).filter(
            ([_, commands]) => (
              cov_1qu9lzuebl().f[24]++,
              cov_1qu9lzuebl().s[30]++,
              commands.length > 0
            )
          )
        )
      }
    },
  },
])
