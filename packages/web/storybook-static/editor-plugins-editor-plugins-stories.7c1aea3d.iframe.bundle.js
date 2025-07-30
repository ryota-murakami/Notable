'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9044],
  {
    './components/editor/plugins/editor-plugins.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BasicBlocks: () => BasicBlocks,
          BasicMarks: () => BasicMarks,
          BasicNodes: () => BasicNodes,
          BlockReferences: () => BlockReferences,
          ComplexDocument: () => ComplexDocument,
          EnhancedEditor: () => EnhancedEditor,
          InteractiveMarks: () => InteractiveMarks,
          SlashCommands: () => SlashCommands,
          WithLinkPlugin: () => WithLinkPlugin,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => editor_plugins_stories,
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
        ui_editor = __webpack_require__('./components/ui/editor.tsx'),
        basic_nodes_kit = __webpack_require__(
          './components/editor/plugins/basic-nodes-kit.tsx'
        ),
        basic_blocks_kit = __webpack_require__(
          './components/editor/plugins/basic-blocks-kit.tsx'
        ),
        basic_marks_kit = __webpack_require__(
          './components/editor/plugins/basic-marks-kit.tsx'
        ),
        slash_command_kit = __webpack_require__(
          './components/editor/plugins/slash-command-kit.tsx'
        ),
        next_link = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/link.js'
        ),
        link_default = __webpack_require__.n(next_link),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_273uvq5nlc() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/wiki-link-node.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '6763fdca5d319365ffcf77e2494f36e665cde057' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/wiki-link-node.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 39 },
                end: { line: 7, column: 46 },
              },
              1: {
                start: { line: 8, column: 4 },
                end: { line: 19, column: 7 },
              },
              2: {
                start: { line: 21, column: 0 },
                end: { line: 98, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'WikiLinkElement',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 31 },
                },
                loc: {
                  start: { line: 6, column: 76 },
                  end: { line: 20, column: 1 },
                },
                line: 6,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 12, column: 18 },
                  end: { line: 12, column: 51 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 12, column: 27 },
                    end: { line: 12, column: 45 },
                  },
                  {
                    start: { line: 12, column: 48 },
                    end: { line: 12, column: 51 },
                  },
                ],
                line: 12,
              },
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: { 0: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/wiki-link-node.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { PlateElement, type PlateElementProps } from 'platejs/react'\nimport Link from 'next/link'\nimport { cn } from '@/lib/utils'\n\nexport interface WikiLinkElementProps extends PlateElementProps {\n  element: {\n    type: 'wikiLink'\n    noteId?: string\n    noteTitle: string\n    url: string\n    children: Array<{ text: string }>\n  }\n}\n\nexport function WikiLinkElement({\n  className,\n  children,\n  element,\n  ...props\n}: WikiLinkElementProps) {\n  const { noteId, noteTitle, url } = element\n\n  return (\n    <PlateElement element={element} {...props}>\n      <Link\n        href={noteId ? `/notes/${noteId}` : url}\n        data-wiki-link='true'\n        data-note-id={noteId}\n        title={`Link to: ${noteTitle}`}\n        className={cn(\n          'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',\n          'underline decoration-blue-600/30 hover:decoration-blue-600/60',\n          'transition-colors duration-200',\n          className\n        )}\n      >\n        {children}\n      </Link>\n    </PlateElement>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC/E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC/D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;sBAGT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAIjB',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '6763fdca5d319365ffcf77e2494f36e665cde057',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_273uvq5nlc = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function WikiLinkElement({ className, children, element, ...props }) {
        cov_273uvq5nlc().f[0]++
        const { noteId, noteTitle, url } = (cov_273uvq5nlc().s[0]++, element)
        return (
          cov_273uvq5nlc().s[1]++,
          (0, jsx_runtime.jsx)(dist_react.tc, {
            element,
            ...props,
            children: (0, jsx_runtime.jsx)(link_default(), {
              href: noteId
                ? (cov_273uvq5nlc().b[0][0]++, `/notes/${noteId}`)
                : (cov_273uvq5nlc().b[0][1]++, url),
              'data-wiki-link': 'true',
              'data-note-id': noteId,
              title: `Link to: ${noteTitle}`,
              className: (0, utils.cn)(
                'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300',
                'underline decoration-blue-600/30 hover:decoration-blue-600/60',
                'transition-colors duration-200',
                className
              ),
              children,
            }),
          })
        )
      }
      function cov_7jugfwmo7() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/link-plugin.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'b75fb8dfbd4b2ce675bf16e7771f4539c1a79205' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/link-plugin.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 30 },
                end: { line: 14, column: 2 },
              },
              1: {
                start: { line: 16, column: 23 },
                end: { line: 18, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/link-plugin.tsx',
              ],
              sourcesContent: [
                "'use client'\n\n// TODO: Fix Plate.js imports\n// import { LinkPlugin } from '@platejs/link'\nimport { createPlatePlugin } from 'platejs/react'\n\nimport { WikiLinkElement } from '@/components/ui/wiki-link-node'\n\nexport const WikiLinkPlugin = createPlatePlugin({\n  key: 'wikiLink',\n  node: {\n    isElement: true,\n    isInline: true,\n    type: 'wikiLink',\n    component: WikiLinkElement,\n  },\n})\n\n// TODO: Re-enable LinkPlugin when import is fixed\nexport const LinkKit = [/*LinkPlugin,*/ WikiLinkPlugin]\n",
              ],
              names: [
                'createPlatePlugin',
                'WikiLinkElement',
                'WikiLinkPlugin',
                'key',
                'node',
                'isElement',
                'isInline',
                'type',
                'component',
                'LinkKit',
              ],
              mappings:
                'AAAA;AAEA,6BAA6B;AAC7B,6CAA6C;AAC7C,SAASA,iBAAiB,QAAQ,gBAAe;AAEjD,SAASC,eAAe,QAAQ,iCAAgC;AAEhE,OAAO,MAAMC,iBAAiBF,kBAAkB;IAC9CG,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,UAAU;QACVC,MAAM;QACNC,WAAWP;IACb;AACF,GAAE;AAEF,kDAAkD;AAClD,OAAO,MAAMQ,UAAU;IAAC,aAAa,GAAGP;CAAe,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'b75fb8dfbd4b2ce675bf16e7771f4539c1a79205',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_7jugfwmo7 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      ;(cov_273uvq5nlc(),
        cov_273uvq5nlc().s[2]++,
        (WikiLinkElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'WikiLinkElement',
          props: {
            element: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: "{\n  type: 'wikiLink'\n  noteId?: string\n  noteTitle: string\n  url: string\n  children: Array<{ text: string }>\n}",
                signature: {
                  properties: [
                    {
                      key: 'type',
                      value: {
                        name: 'literal',
                        value: "'wikiLink'",
                        required: !0,
                      },
                    },
                    { key: 'noteId', value: { name: 'string', required: !1 } },
                    {
                      key: 'noteTitle',
                      value: { name: 'string', required: !0 },
                    },
                    { key: 'url', value: { name: 'string', required: !0 } },
                    {
                      key: 'children',
                      value: {
                        name: 'Array',
                        elements: [
                          {
                            name: 'signature',
                            type: 'object',
                            raw: '{ text: string }',
                            signature: {
                              properties: [
                                {
                                  key: 'text',
                                  value: { name: 'string', required: !0 },
                                },
                              ],
                            },
                          },
                        ],
                        raw: 'Array<{ text: string }>',
                        required: !0,
                      },
                    },
                  ],
                },
              },
              description: '',
            },
          },
          composes: ['PlateElementProps'],
        }),
        cov_7jugfwmo7())
      const WikiLinkPlugin =
          (cov_7jugfwmo7().s[0]++,
          (0, dist_react.SU)({
            key: 'wikiLink',
            node: {
              isElement: !0,
              isInline: !0,
              type: 'wikiLink',
              component: WikiLinkElement,
            },
          })),
        LinkKit = (cov_7jugfwmo7().s[1]++, [WikiLinkPlugin])
      var todo_block = __webpack_require__('./components/ui/todo-block.tsx'),
        toggle_block = __webpack_require__('./components/ui/toggle-block.tsx'),
        callout_block = __webpack_require__(
          './components/ui/callout-block.tsx'
        ),
        code_block = __webpack_require__('./components/ui/code-block.tsx')
      function cov_2olg3462r1() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/enhanced-editor-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '31329a316227c5f4d3e397a8e68fdbe13c1c853f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/enhanced-editor-kit.tsx',
            statementMap: {
              0: {
                start: { line: 13, column: 19 },
                end: { line: 20, column: 2 },
              },
              1: {
                start: { line: 21, column: 21 },
                end: { line: 28, column: 2 },
              },
              2: {
                start: { line: 29, column: 22 },
                end: { line: 36, column: 2 },
              },
              3: {
                start: { line: 37, column: 24 },
                end: { line: 44, column: 2 },
              },
              4: {
                start: { line: 46, column: 29 },
                end: { line: 53, column: 2 },
              },
              5: {
                start: { line: 55, column: 22 },
                end: { line: 61, column: 2 },
              },
              6: {
                start: { line: 62, column: 33 },
                end: { line: 77, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/enhanced-editor-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\n\nimport { BasicNodesKit } from './basic-nodes-kit'\nimport { BasicMarksKit } from './basic-marks-kit'\nimport { AdvancedBlocksKit } from './advanced-blocks-kit'\nimport { SlashCommandPlugin } from './slash-command-kit'\nimport { LinkKit } from './link-plugin'\n\n// Component imports for advanced blocks\nimport { TodoElement } from '@/components/ui/todo-block'\nimport { ToggleElement } from '@/components/ui/toggle-block'\nimport { CalloutElement } from '@/components/ui/callout-block'\nimport { CodeBlockElement } from '@/components/ui/code-block'\n\n// Update advanced blocks with proper components\nconst TodoPlugin = createPlatePlugin({\n  key: 'action_item',\n  node: {\n    isElement: true,\n    type: 'action_item',\n    component: TodoElement,\n  },\n})\n\nconst TogglePlugin = createPlatePlugin({\n  key: 'toggle',\n  node: {\n    isElement: true,\n    type: 'toggle',\n    component: ToggleElement,\n  },\n})\n\nconst CalloutPlugin = createPlatePlugin({\n  key: 'callout',\n  node: {\n    isElement: true,\n    type: 'callout',\n    component: CalloutElement,\n  },\n})\n\nconst CodeBlockPlugin = createPlatePlugin({\n  key: 'code_block',\n  node: {\n    isElement: true,\n    type: 'code_block',\n    component: CodeBlockElement,\n  },\n})\n\n// Block Reference Plugin for linking between blocks\nconst BlockReferencePlugin = createPlatePlugin({\n  key: 'block_reference',\n  node: {\n    isElement: true,\n    type: 'block_reference',\n    isVoid: true,\n  },\n})\n\n// Mention Plugin for @-mentions\nconst MentionPlugin = createPlatePlugin({\n  key: 'mention',\n  node: {\n    isLeaf: true,\n    type: 'mention',\n  },\n})\n\nexport const EnhancedEditorKit = [\n  // Core blocks and marks\n  ...BasicNodesKit,\n  ...BasicMarksKit,\n\n  // Advanced blocks with components\n  TodoPlugin,\n  TogglePlugin,\n  CalloutPlugin,\n  CodeBlockPlugin,\n\n  // Interactive features\n  SlashCommandPlugin,\n  BlockReferencePlugin,\n  MentionPlugin,\n\n  // Links (existing)\n  ...LinkKit,\n]\n",
              ],
              names: [
                'createPlatePlugin',
                'BasicNodesKit',
                'BasicMarksKit',
                'SlashCommandPlugin',
                'LinkKit',
                'TodoElement',
                'ToggleElement',
                'CalloutElement',
                'CodeBlockElement',
                'TodoPlugin',
                'key',
                'node',
                'isElement',
                'type',
                'component',
                'TogglePlugin',
                'CalloutPlugin',
                'CodeBlockPlugin',
                'BlockReferencePlugin',
                'isVoid',
                'MentionPlugin',
                'isLeaf',
                'EnhancedEditorKit',
              ],
              mappings:
                'AAAA;AAEA,SAASA,iBAAiB,QAAQ,gBAAe;AAEjD,SAASC,aAAa,QAAQ,oBAAmB;AACjD,SAASC,aAAa,QAAQ,oBAAmB;AAEjD,SAASC,kBAAkB,QAAQ,sBAAqB;AACxD,SAASC,OAAO,QAAQ,gBAAe;AAEvC,wCAAwC;AACxC,SAASC,WAAW,QAAQ,6BAA4B;AACxD,SAASC,aAAa,QAAQ,+BAA8B;AAC5D,SAASC,cAAc,QAAQ,gCAA+B;AAC9D,SAASC,gBAAgB,QAAQ,6BAA4B;AAE7D,gDAAgD;AAChD,MAAMC,aAAaT,kBAAkB;IACnCU,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWT;IACb;AACF;AAEA,MAAMU,eAAef,kBAAkB;IACrCU,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWR;IACb;AACF;AAEA,MAAMU,gBAAgBhB,kBAAkB;IACtCU,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWP;IACb;AACF;AAEA,MAAMU,kBAAkBjB,kBAAkB;IACxCU,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNC,WAAWN;IACb;AACF;AAEA,oDAAoD;AACpD,MAAMU,uBAAuBlB,kBAAkB;IAC7CU,KAAK;IACLC,MAAM;QACJC,WAAW;QACXC,MAAM;QACNM,QAAQ;IACV;AACF;AAEA,gCAAgC;AAChC,MAAMC,gBAAgBpB,kBAAkB;IACtCU,KAAK;IACLC,MAAM;QACJU,QAAQ;QACRR,MAAM;IACR;AACF;AAEA,OAAO,MAAMS,oBAAoB;IAC/B,wBAAwB;OACrBrB;OACAC;IAEH,kCAAkC;IAClCO;IACAM;IACAC;IACAC;IAEA,uBAAuB;IACvBd;IACAe;IACAE;IAEA,mBAAmB;OAChBhB;CACJ,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '31329a316227c5f4d3e397a8e68fdbe13c1c853f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2olg3462r1 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2olg3462r1()
      const TodoPlugin =
          (cov_2olg3462r1().s[0]++,
          (0, dist_react.SU)({
            key: 'action_item',
            node: {
              isElement: !0,
              type: 'action_item',
              component: todo_block.J,
            },
          })),
        TogglePlugin =
          (cov_2olg3462r1().s[1]++,
          (0, dist_react.SU)({
            key: 'toggle',
            node: { isElement: !0, type: 'toggle', component: toggle_block.Z },
          })),
        CalloutPlugin =
          (cov_2olg3462r1().s[2]++,
          (0, dist_react.SU)({
            key: 'callout',
            node: {
              isElement: !0,
              type: 'callout',
              component: callout_block.F,
            },
          })),
        CodeBlockPlugin =
          (cov_2olg3462r1().s[3]++,
          (0, dist_react.SU)({
            key: 'code_block',
            node: {
              isElement: !0,
              type: 'code_block',
              component: code_block.L,
            },
          })),
        BlockReferencePlugin =
          (cov_2olg3462r1().s[4]++,
          (0, dist_react.SU)({
            key: 'block_reference',
            node: { isElement: !0, type: 'block_reference', isVoid: !0 },
          })),
        MentionPlugin =
          (cov_2olg3462r1().s[5]++,
          (0, dist_react.SU)({
            key: 'mention',
            node: { isLeaf: !0, type: 'mention' },
          })),
        EnhancedEditorKit =
          (cov_2olg3462r1().s[6]++,
          [
            ...basic_nodes_kit.u,
            ...basic_marks_kit.N,
            TodoPlugin,
            TogglePlugin,
            CalloutPlugin,
            CodeBlockPlugin,
            slash_command_kit.kr,
            BlockReferencePlugin,
            MentionPlugin,
            ...LinkKit,
          ])
      var icons_link = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link.js'
        ),
        arrow_up_right = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js'
        ),
        copy = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js'
        ),
        pen_line = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-line.js'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      function cov_23qn829xef() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/block-reference-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/block-reference-kit.tsx',
            statementMap: {
              0: {
                start: { line: 10, column: 38 },
                end: { line: 10, column: 53 },
              },
              1: {
                start: { line: 11, column: 38 },
                end: { line: 11, column: 52 },
              },
              2: {
                start: { line: 12, column: 42 },
                end: { line: 12, column: 57 },
              },
              3: {
                start: { line: 14, column: 27 },
                end: { line: 31, column: 6 },
              },
              4: {
                start: { line: 15, column: 8 },
                end: { line: 15, column: 37 },
              },
              5: {
                start: { line: 15, column: 30 },
                end: { line: 15, column: 37 },
              },
              6: {
                start: { line: 16, column: 8 },
                end: { line: 16, column: 27 },
              },
              7: {
                start: { line: 17, column: 8 },
                end: { line: 28, column: 9 },
              },
              8: {
                start: { line: 19, column: 29 },
                end: { line: 19, column: 74 },
              },
              9: {
                start: { line: 20, column: 12 },
                end: { line: 23, column: 13 },
              },
              10: {
                start: { line: 21, column: 29 },
                end: { line: 21, column: 50 },
              },
              11: {
                start: { line: 22, column: 16 },
                end: { line: 22, column: 35 },
              },
              12: {
                start: { line: 25, column: 12 },
                end: { line: 25, column: 64 },
              },
              13: {
                start: { line: 27, column: 12 },
                end: { line: 27, column: 32 },
              },
              14: {
                start: { line: 32, column: 4 },
                end: { line: 36, column: 7 },
              },
              15: {
                start: { line: 33, column: 8 },
                end: { line: 33, column: 25 },
              },
              16: {
                start: { line: 37, column: 27 },
                end: { line: 47, column: 6 },
              },
              17: {
                start: { line: 38, column: 8 },
                end: { line: 43, column: 9 },
              },
              18: {
                start: { line: 39, column: 29 },
                end: { line: 39, column: 80 },
              },
              19: {
                start: { line: 40, column: 12 },
                end: { line: 40, column: 83 },
              },
              20: {
                start: { line: 42, column: 12 },
                end: { line: 42, column: 57 },
              },
              21: {
                start: { line: 48, column: 4 },
                end: { line: 84, column: 5 },
              },
              22: {
                start: { line: 50, column: 8 },
                end: { line: 83, column: 11 },
              },
              23: {
                start: { line: 54, column: 30 },
                end: { line: 54, column: 50 },
              },
              24: {
                start: { line: 55, column: 30 },
                end: { line: 55, column: 51 },
              },
              25: {
                start: { line: 85, column: 4 },
                end: { line: 149, column: 5 },
              },
              26: {
                start: { line: 86, column: 8 },
                end: { line: 148, column: 11 },
              },
              27: {
                start: { line: 150, column: 4 },
                end: { line: 160, column: 5 },
              },
              28: {
                start: { line: 151, column: 8 },
                end: { line: 159, column: 11 },
              },
              29: {
                start: { line: 161, column: 4 },
                end: { line: 164, column: 7 },
              },
              30: {
                start: { line: 167, column: 36 },
                end: { line: 175, column: 2 },
              },
              31: {
                start: { line: 178, column: 28 },
                end: { line: 193, column: 6 },
              },
              32: {
                start: { line: 179, column: 8 },
                end: { line: 190, column: 11 },
              },
              33: {
                start: { line: 194, column: 23 },
                end: { line: 209, column: 6 },
              },
              34: {
                start: { line: 195, column: 8 },
                end: { line: 206, column: 11 },
              },
              35: {
                start: { line: 210, column: 25 },
                end: { line: 224, column: 6 },
              },
              36: {
                start: { line: 211, column: 8 },
                end: { line: 221, column: 11 },
              },
              37: {
                start: { line: 225, column: 4 },
                end: { line: 229, column: 6 },
              },
              38: {
                start: { line: 232, column: 32 },
                end: { line: 232, column: 44 },
              },
              39: {
                start: { line: 233, column: 34 },
                end: { line: 233, column: 46 },
              },
              40: {
                start: { line: 234, column: 38 },
                end: { line: 234, column: 53 },
              },
              41: {
                start: { line: 236, column: 4 },
                end: { line: 259, column: 7 },
              },
              42: {
                start: { line: 237, column: 8 },
                end: { line: 240, column: 9 },
              },
              43: {
                start: { line: 238, column: 12 },
                end: { line: 238, column: 27 },
              },
              44: {
                start: { line: 239, column: 12 },
                end: { line: 239, column: 19 },
              },
              45: {
                start: { line: 241, column: 29 },
                end: { line: 254, column: 9 },
              },
              46: {
                start: { line: 242, column: 12 },
                end: { line: 242, column: 31 },
              },
              47: {
                start: { line: 243, column: 12 },
                end: { line: 253, column: 13 },
              },
              48: {
                start: { line: 244, column: 33 },
                end: { line: 244, column: 98 },
              },
              49: {
                start: { line: 245, column: 16 },
                end: { line: 248, column: 17 },
              },
              50: {
                start: { line: 246, column: 33 },
                end: { line: 246, column: 54 },
              },
              51: {
                start: { line: 247, column: 20 },
                end: { line: 247, column: 50 },
              },
              52: {
                start: { line: 250, column: 16 },
                end: { line: 250, column: 61 },
              },
              53: {
                start: { line: 252, column: 16 },
                end: { line: 252, column: 36 },
              },
              54: {
                start: { line: 255, column: 30 },
                end: { line: 255, column: 59 },
              },
              55: {
                start: { line: 256, column: 8 },
                end: { line: 256, column: 47 },
              },
              56: {
                start: { line: 256, column: 19 },
                end: { line: 256, column: 46 },
              },
              57: {
                start: { line: 260, column: 4 },
                end: { line: 260, column: 29 },
              },
              58: {
                start: { line: 260, column: 17 },
                end: { line: 260, column: 29 },
              },
              59: {
                start: { line: 261, column: 4 },
                end: { line: 320, column: 7 },
              },
              60: {
                start: { line: 272, column: 35 },
                end: { line: 272, column: 60 },
              },
              61: {
                start: { line: 290, column: 24 },
                end: { line: 315, column: 37 },
              },
              62: {
                start: { line: 291, column: 41 },
                end: { line: 291, column: 56 },
              },
              63: {
                start: { line: 323, column: 38 },
                end: { line: 323, column: 50 },
              },
              64: {
                start: { line: 324, column: 38 },
                end: { line: 324, column: 53 },
              },
              65: {
                start: { line: 325, column: 4 },
                end: { line: 345, column: 7 },
              },
              66: {
                start: { line: 326, column: 31 },
                end: { line: 339, column: 9 },
              },
              67: {
                start: { line: 327, column: 12 },
                end: { line: 327, column: 31 },
              },
              68: {
                start: { line: 328, column: 12 },
                end: { line: 338, column: 13 },
              },
              69: {
                start: { line: 329, column: 33 },
                end: { line: 329, column: 80 },
              },
              70: {
                start: { line: 330, column: 16 },
                end: { line: 333, column: 17 },
              },
              71: {
                start: { line: 331, column: 33 },
                end: { line: 331, column: 54 },
              },
              72: {
                start: { line: 332, column: 20 },
                end: { line: 332, column: 55 },
              },
              73: {
                start: { line: 335, column: 16 },
                end: { line: 335, column: 67 },
              },
              74: {
                start: { line: 337, column: 16 },
                end: { line: 337, column: 36 },
              },
              75: {
                start: { line: 340, column: 8 },
                end: { line: 342, column: 9 },
              },
              76: {
                start: { line: 341, column: 12 },
                end: { line: 341, column: 29 },
              },
              77: {
                start: { line: 346, column: 4 },
                end: { line: 351, column: 5 },
              },
              78: {
                start: { line: 347, column: 8 },
                end: { line: 350, column: 11 },
              },
              79: {
                start: { line: 352, column: 4 },
                end: { line: 357, column: 5 },
              },
              80: {
                start: { line: 353, column: 8 },
                end: { line: 356, column: 11 },
              },
              81: {
                start: { line: 358, column: 4 },
                end: { line: 389, column: 7 },
              },
              82: {
                start: { line: 371, column: 16 },
                end: { line: 386, column: 32 },
              },
              83: {
                start: { line: 391, column: 0 },
                end: { line: 488, column: 2 },
              },
              84: {
                start: { line: 489, column: 0 },
                end: { line: 566, column: 2 },
              },
              85: {
                start: { line: 567, column: 0 },
                end: { line: 587, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'BlockReferenceElement',
                decl: {
                  start: { line: 9, column: 16 },
                  end: { line: 9, column: 37 },
                },
                loc: {
                  start: { line: 9, column: 84 },
                  end: { line: 165, column: 1 },
                },
                line: 9,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 14, column: 39 },
                  end: { line: 14, column: 40 },
                },
                loc: {
                  start: { line: 14, column: 49 },
                  end: { line: 29, column: 5 },
                },
                line: 14,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 32, column: 14 },
                  end: { line: 32, column: 15 },
                },
                loc: {
                  start: { line: 32, column: 18 },
                  end: { line: 34, column: 5 },
                },
                line: 32,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 37, column: 39 },
                  end: { line: 37, column: 40 },
                },
                loc: {
                  start: { line: 37, column: 49 },
                  end: { line: 44, column: 5 },
                },
                line: 37,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 54, column: 26 },
                  end: { line: 54, column: 27 },
                },
                loc: {
                  start: { line: 54, column: 30 },
                  end: { line: 54, column: 50 },
                },
                line: 54,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 55, column: 26 },
                  end: { line: 55, column: 27 },
                },
                loc: {
                  start: { line: 55, column: 30 },
                  end: { line: 55, column: 51 },
                },
                line: 55,
              },
              6: {
                name: 'useBlockReference',
                decl: {
                  start: { line: 177, column: 16 },
                  end: { line: 177, column: 33 },
                },
                loc: {
                  start: { line: 177, column: 42 },
                  end: { line: 230, column: 1 },
                },
                line: 177,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 178, column: 40 },
                  end: { line: 178, column: 41 },
                },
                loc: {
                  start: { line: 178, column: 66 },
                  end: { line: 191, column: 5 },
                },
                line: 178,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 194, column: 35 },
                  end: { line: 194, column: 36 },
                },
                loc: {
                  start: { line: 194, column: 61 },
                  end: { line: 207, column: 5 },
                },
                line: 194,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 210, column: 37 },
                  end: { line: 210, column: 38 },
                },
                loc: {
                  start: { line: 210, column: 55 },
                  end: { line: 222, column: 5 },
                },
                line: 210,
              },
              10: {
                name: 'BlockSearchMenu',
                decl: {
                  start: { line: 231, column: 16 },
                  end: { line: 231, column: 31 },
                },
                loc: {
                  start: { line: 231, column: 73 },
                  end: { line: 321, column: 1 },
                },
                line: 231,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 236, column: 14 },
                  end: { line: 236, column: 15 },
                },
                loc: {
                  start: { line: 236, column: 18 },
                  end: { line: 257, column: 5 },
                },
                line: 236,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 241, column: 29 },
                  end: { line: 241, column: 30 },
                },
                loc: {
                  start: { line: 241, column: 39 },
                  end: { line: 254, column: 9 },
                },
                line: 241,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 256, column: 15 },
                  end: { line: 256, column: 16 },
                },
                loc: {
                  start: { line: 256, column: 19 },
                  end: { line: 256, column: 46 },
                },
                line: 256,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 272, column: 30 },
                  end: { line: 272, column: 31 },
                },
                loc: {
                  start: { line: 272, column: 35 },
                  end: { line: 272, column: 60 },
                },
                line: 272,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 288, column: 42 },
                  end: { line: 288, column: 43 },
                },
                loc: {
                  start: { line: 288, column: 51 },
                  end: { line: 316, column: 21 },
                },
                line: 288,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 291, column: 37 },
                  end: { line: 291, column: 38 },
                },
                loc: {
                  start: { line: 291, column: 41 },
                  end: { line: 291, column: 56 },
                },
                line: 291,
              },
              17: {
                name: 'BacklinksPanel',
                decl: {
                  start: { line: 322, column: 16 },
                  end: { line: 322, column: 30 },
                },
                loc: {
                  start: { line: 322, column: 55 },
                  end: { line: 390, column: 1 },
                },
                line: 322,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 325, column: 14 },
                  end: { line: 325, column: 15 },
                },
                loc: {
                  start: { line: 325, column: 18 },
                  end: { line: 343, column: 5 },
                },
                line: 325,
              },
              19: {
                name: '(anonymous_19)',
                decl: {
                  start: { line: 326, column: 31 },
                  end: { line: 326, column: 32 },
                },
                loc: {
                  start: { line: 326, column: 41 },
                  end: { line: 339, column: 9 },
                },
                line: 326,
              },
              20: {
                name: '(anonymous_20)',
                decl: {
                  start: { line: 369, column: 26 },
                  end: { line: 369, column: 27 },
                },
                loc: {
                  start: { line: 369, column: 38 },
                  end: { line: 387, column: 13 },
                },
                line: 369,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 15, column: 8 },
                  end: { line: 15, column: 37 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 15, column: 8 },
                    end: { line: 15, column: 37 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 15,
              },
              1: {
                loc: {
                  start: { line: 20, column: 12 },
                  end: { line: 23, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 20, column: 12 },
                    end: { line: 23, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 20,
              },
              2: {
                loc: {
                  start: { line: 48, column: 4 },
                  end: { line: 84, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 48, column: 4 },
                    end: { line: 84, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 48,
              },
              3: {
                loc: {
                  start: { line: 61, column: 30 },
                  end: { line: 61, column: 63 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 61, column: 30 },
                    end: { line: 61, column: 43 },
                  },
                  {
                    start: { line: 61, column: 47 },
                    end: { line: 61, column: 63 },
                  },
                ],
                line: 61,
              },
              4: {
                loc: {
                  start: { line: 66, column: 16 },
                  end: { line: 81, column: 18 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 66, column: 16 },
                    end: { line: 66, column: 27 },
                  },
                  {
                    start: { line: 66, column: 31 },
                    end: { line: 66, column: 40 },
                  },
                  {
                    start: { line: 66, column: 58 },
                    end: { line: 81, column: 18 },
                  },
                ],
                line: 66,
              },
              5: {
                loc: {
                  start: { line: 76, column: 32 },
                  end: { line: 76, column: 158 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 76, column: 117 },
                    end: { line: 76, column: 123 },
                  },
                  {
                    start: { line: 76, column: 126 },
                    end: { line: 76, column: 158 },
                  },
                ],
                line: 76,
              },
              6: {
                loc: {
                  start: { line: 76, column: 32 },
                  end: { line: 76, column: 114 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 76, column: 32 },
                    end: { line: 76, column: 81 },
                  },
                  {
                    start: { line: 76, column: 85 },
                    end: { line: 76, column: 114 },
                  },
                ],
                line: 76,
              },
              7: {
                loc: {
                  start: { line: 85, column: 4 },
                  end: { line: 149, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 85, column: 4 },
                    end: { line: 149, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 85,
              },
              8: {
                loc: {
                  start: { line: 129, column: 30 },
                  end: { line: 145, column: 22 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 129, column: 56 },
                    end: { line: 139, column: 22 },
                  },
                  {
                    start: { line: 139, column: 25 },
                    end: { line: 145, column: 22 },
                  },
                ],
                line: 129,
              },
              9: {
                loc: {
                  start: { line: 139, column: 25 },
                  end: { line: 145, column: 22 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 139, column: 51 },
                    end: { line: 142, column: 22 },
                  },
                  {
                    start: { line: 142, column: 39 },
                    end: { line: 145, column: 22 },
                  },
                ],
                line: 139,
              },
              10: {
                loc: {
                  start: { line: 150, column: 4 },
                  end: { line: 160, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 150, column: 4 },
                    end: { line: 160, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 150,
              },
              11: {
                loc: {
                  start: { line: 157, column: 16 },
                  end: { line: 157, column: 40 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 157, column: 16 },
                    end: { line: 157, column: 29 },
                  },
                  {
                    start: { line: 157, column: 33 },
                    end: { line: 157, column: 40 },
                  },
                ],
                line: 157,
              },
              12: {
                loc: {
                  start: { line: 237, column: 8 },
                  end: { line: 240, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 237, column: 8 },
                    end: { line: 240, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 237,
              },
              13: {
                loc: {
                  start: { line: 245, column: 16 },
                  end: { line: 248, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 245, column: 16 },
                    end: { line: 248, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 245,
              },
              14: {
                loc: {
                  start: { line: 247, column: 31 },
                  end: { line: 247, column: 48 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 247, column: 31 },
                    end: { line: 247, column: 42 },
                  },
                  {
                    start: { line: 247, column: 46 },
                    end: { line: 247, column: 48 },
                  },
                ],
                line: 247,
              },
              15: {
                loc: {
                  start: { line: 260, column: 4 },
                  end: { line: 260, column: 29 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 260, column: 4 },
                    end: { line: 260, column: 29 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 260,
              },
              16: {
                loc: {
                  start: { line: 280, column: 26 },
                  end: { line: 317, column: 18 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 280, column: 52 },
                    end: { line: 283, column: 18 },
                  },
                  {
                    start: { line: 283, column: 21 },
                    end: { line: 317, column: 18 },
                  },
                ],
                line: 280,
              },
              17: {
                loc: {
                  start: { line: 283, column: 21 },
                  end: { line: 317, column: 18 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 283, column: 58 },
                    end: { line: 286, column: 18 },
                  },
                  {
                    start: { line: 286, column: 35 },
                    end: { line: 317, column: 18 },
                  },
                ],
                line: 283,
              },
              18: {
                loc: {
                  start: { line: 285, column: 30 },
                  end: { line: 285, column: 93 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 285, column: 46 },
                    end: { line: 285, column: 63 },
                  },
                  {
                    start: { line: 285, column: 66 },
                    end: { line: 285, column: 93 },
                  },
                ],
                line: 285,
              },
              19: {
                loc: {
                  start: { line: 296, column: 46 },
                  end: { line: 296, column: 71 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 296, column: 46 },
                    end: { line: 296, column: 57 },
                  },
                  {
                    start: { line: 296, column: 61 },
                    end: { line: 296, column: 71 },
                  },
                ],
                line: 296,
              },
              20: {
                loc: {
                  start: { line: 301, column: 40 },
                  end: { line: 301, column: 149 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 301, column: 113 },
                    end: { line: 301, column: 119 },
                  },
                  {
                    start: { line: 301, column: 122 },
                    end: { line: 301, column: 149 },
                  },
                ],
                line: 301,
              },
              21: {
                loc: {
                  start: { line: 301, column: 40 },
                  end: { line: 301, column: 110 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 301, column: 40 },
                    end: { line: 301, column: 81 },
                  },
                  {
                    start: { line: 301, column: 85 },
                    end: { line: 301, column: 110 },
                  },
                ],
                line: 301,
              },
              22: {
                loc: {
                  start: { line: 330, column: 16 },
                  end: { line: 333, column: 17 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 330, column: 16 },
                    end: { line: 333, column: 17 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 330,
              },
              23: {
                loc: {
                  start: { line: 332, column: 33 },
                  end: { line: 332, column: 53 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 332, column: 33 },
                    end: { line: 332, column: 47 },
                  },
                  {
                    start: { line: 332, column: 51 },
                    end: { line: 332, column: 53 },
                  },
                ],
                line: 332,
              },
              24: {
                loc: {
                  start: { line: 340, column: 8 },
                  end: { line: 342, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 340, column: 8 },
                    end: { line: 342, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 340,
              },
              25: {
                loc: {
                  start: { line: 346, column: 4 },
                  end: { line: 351, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 346, column: 4 },
                    end: { line: 351, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 346,
              },
              26: {
                loc: {
                  start: { line: 352, column: 4 },
                  end: { line: 357, column: 5 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 352, column: 4 },
                    end: { line: 357, column: 5 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 352,
              },
              27: {
                loc: {
                  start: { line: 381, column: 32 },
                  end: { line: 381, column: 154 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 381, column: 114 },
                    end: { line: 381, column: 120 },
                  },
                  {
                    start: { line: 381, column: 123 },
                    end: { line: 381, column: 154 },
                  },
                ],
                line: 381,
              },
              28: {
                loc: {
                  start: { line: 381, column: 32 },
                  end: { line: 381, column: 111 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 381, column: 32 },
                    end: { line: 381, column: 79 },
                  },
                  {
                    start: { line: 381, column: 83 },
                    end: { line: 381, column: 111 },
                  },
                ],
                line: 381,
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
              0: [0, 0],
              1: [0, 0],
              2: [0, 0],
              3: [0, 0],
              4: [0, 0, 0],
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
              15: [0, 0],
              16: [0, 0],
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
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/block-reference-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { createPlatePlugin } from 'platejs/react'\nimport * as React from 'react'\nimport { useCallback, useEffect, useState } from 'react'\nimport { ArrowUpRight, Copy, Edit3, Link } from 'lucide-react'\nimport { cn } from '@/lib/utils'\n\n// Types for block references\ninterface BlockReference {\n  id: string\n  blockId: string\n  referenceType: 'link' | 'embed' | 'mention'\n  title?: string\n  preview?: string\n  noteId?: string\n  createdAt?: string\n}\n\ninterface BlockReferenceProps {\n  attributes: any\n  children: any\n  element: {\n    type: string\n    blockId: string\n    referenceType: 'link' | 'embed' | 'mention'\n    title?: string\n    preview?: string\n    noteId?: string\n  }\n  className?: string\n}\n\n// Block Reference Component\nexport function BlockReferenceElement({\n  attributes,\n  children,\n  element,\n  className,\n}: BlockReferenceProps) {\n  const [isLoading, setIsLoading] = useState(false)\n  const [blockData, setBlockData] = useState<any>(null)\n  const [showPreview, setShowPreview] = useState(false)\n\n  // Fetch referenced block data\n  const fetchBlockData = useCallback(async () => {\n    if (!element.blockId) return\n\n    setIsLoading(true)\n    try {\n      // This would fetch the actual block data from your API\n      const response = await fetch(`/api/blocks/${element.blockId}`)\n      if (response.ok) {\n        const data = await response.json()\n        setBlockData(data)\n      }\n    } catch (error) {\n      console.error('Failed to fetch block data:', error)\n    } finally {\n      setIsLoading(false)\n    }\n  }, [element.blockId])\n\n  useEffect(() => {\n    fetchBlockData()\n  }, [fetchBlockData])\n\n  const handleCopyLink = useCallback(async () => {\n    try {\n      const blockUrl = `/notes/${element.noteId}#block-${element.blockId}`\n      await navigator.clipboard.writeText(window.location.origin + blockUrl)\n    } catch (error) {\n      console.error('Failed to copy link:', error)\n    }\n  }, [element.blockId, element.noteId])\n\n  if (element.referenceType === 'link') {\n    return (\n      <span\n        {...attributes}\n        className={cn(\n          'inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 cursor-pointer transition-colors text-sm',\n          className\n        )}\n        contentEditable={false}\n        onMouseEnter={() => setShowPreview(true)}\n        onMouseLeave={() => setShowPreview(false)}\n      >\n        <Link className='h-3 w-3' />\n        <span>{element.title || 'Untitled Block'}</span>\n        <ArrowUpRight className='h-3 w-3 opacity-60' />\n\n        {showPreview && blockData && (\n          <div className='absolute z-50 mt-8 p-3 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm'>\n            <div className='text-xs text-gray-500 mb-1'>Block Preview</div>\n            <div className='text-sm'>{blockData.content?.slice(0, 100)}...</div>\n          </div>\n        )}\n      </span>\n    )\n  }\n\n  if (element.referenceType === 'embed') {\n    return (\n      <div\n        {...attributes}\n        className={cn(\n          'block-embed border border-gray-200 rounded-lg p-4 my-3 bg-gray-50',\n          className\n        )}\n        contentEditable={false}\n      >\n        <div className='flex items-center justify-between mb-2'>\n          <div className='flex items-center gap-2 text-sm text-gray-600'>\n            <Link className='h-4 w-4' />\n            <span>Referenced Block</span>\n          </div>\n          <div className='flex items-center gap-1'>\n            <button\n              onClick={handleCopyLink}\n              className='p-1 hover:bg-gray-200 rounded'\n              title='Copy link'\n            >\n              <Copy className='h-3 w-3' />\n            </button>\n            <button\n              className='p-1 hover:bg-gray-200 rounded'\n              title='Edit original'\n            >\n              <Edit3 className='h-3 w-3' />\n            </button>\n          </div>\n        </div>\n\n        <div className='border-l-4 border-blue-400 pl-4'>\n          {isLoading ? (\n            <div className='animate-pulse'>\n              <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>\n              <div className='h-4 bg-gray-300 rounded w-1/2'></div>\n            </div>\n          ) : blockData ? (\n            <div className='prose prose-sm max-w-none'>{blockData.content}</div>\n          ) : (\n            <div className='text-gray-500 italic'>Block not found</div>\n          )}\n        </div>\n      </div>\n    )\n  }\n\n  if (element.referenceType === 'mention') {\n    return (\n      <span\n        {...attributes}\n        className={cn(\n          'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm cursor-pointer transition-colors',\n          className\n        )}\n        contentEditable={false}\n      >\n        @{element.title || 'block'}\n      </span>\n    )\n  }\n\n  return <span {...attributes}>{children}</span>\n}\n\n// Block Reference Plugin\nexport const BlockReferencePlugin = createPlatePlugin({\n  key: 'block_reference',\n  node: {\n    isElement: true,\n    type: 'block_reference',\n    component: BlockReferenceElement,\n    isVoid: true,\n  },\n})\n\n// Hook for creating block references\nexport function useBlockReference(editor: any) {\n  const createBlockLink = useCallback(\n    (blockId: string, title?: string, noteId?: string) => {\n      editor.insertNodes({\n        type: 'block_reference',\n        blockId,\n        referenceType: 'link',\n        title,\n        noteId,\n        children: [{ text: '' }],\n      })\n    },\n    [editor]\n  )\n\n  const embedBlock = useCallback(\n    (blockId: string, title?: string, noteId?: string) => {\n      editor.insertNodes({\n        type: 'block_reference',\n        blockId,\n        referenceType: 'embed',\n        title,\n        noteId,\n        children: [{ text: '' }],\n      })\n    },\n    [editor]\n  )\n\n  const mentionBlock = useCallback(\n    (blockId: string, title?: string) => {\n      editor.insertNodes({\n        type: 'block_reference',\n        blockId,\n        referenceType: 'mention',\n        title,\n        children: [{ text: '' }],\n      })\n    },\n    [editor]\n  )\n\n  return {\n    createBlockLink,\n    embedBlock,\n    mentionBlock,\n  }\n}\n\n// Block Search Component for finding blocks to reference\ninterface BlockSearchProps {\n  isOpen: boolean\n  onClose: () => void\n  onSelect: (block: any) => void\n  position: { x: number; y: number }\n}\n\nexport function BlockSearchMenu({\n  isOpen,\n  onClose,\n  onSelect,\n  position,\n}: BlockSearchProps) {\n  const [search, setSearch] = useState('')\n  const [results, setResults] = useState<any[]>([])\n  const [isLoading, setIsLoading] = useState(false)\n\n  // Search for blocks\n  useEffect(() => {\n    if (!search.trim()) {\n      setResults([])\n      return\n    }\n\n    const searchBlocks = async () => {\n      setIsLoading(true)\n      try {\n        const response = await fetch(\n          `/api/search/blocks?q=${encodeURIComponent(search)}`\n        )\n        if (response.ok) {\n          const data = await response.json()\n          setResults(data.blocks || [])\n        }\n      } catch (error) {\n        console.error('Block search failed:', error)\n      } finally {\n        setIsLoading(false)\n      }\n    }\n\n    const debounceTimer = setTimeout(searchBlocks, 300)\n    return () => clearTimeout(debounceTimer)\n  }, [search])\n\n  if (!isOpen) return null\n\n  return (\n    <div\n      className='fixed z-50 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-0'\n      style={{ left: position.x, top: position.y }}\n    >\n      <div className='p-3 border-b'>\n        <input\n          value={search}\n          onChange={(e) => setSearch(e.target.value)}\n          placeholder='Search for blocks to reference...'\n          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'\n          autoFocus\n        />\n      </div>\n\n      <div className='max-h-64 overflow-y-auto'>\n        {isLoading ? (\n          <div className='p-4 text-center text-gray-500'>Searching...</div>\n        ) : results.length === 0 ? (\n          <div className='p-4 text-center text-gray-500'>\n            {search.trim() ? 'No blocks found' : 'Start typing to search...'}\n          </div>\n        ) : (\n          <div className='p-2'>\n            {results.map((block) => (\n              <div\n                key={block.id}\n                onClick={() => onSelect(block)}\n                className='p-3 rounded hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0'\n              >\n                <div className='font-medium text-sm'>\n                  {block.title || 'Untitled'}\n                </div>\n                <div className='text-xs text-gray-500 mt-1 truncate'>\n                  {block.content?.slice(0, 80)}...\n                </div>\n                <div className='text-xs text-gray-400 mt-1'>\n                  {block.noteTitle} •{' '}\n                  {new Date(block.updatedAt).toLocaleDateString()}\n                </div>\n              </div>\n            ))}\n          </div>\n        )}\n      </div>\n    </div>\n  )\n}\n\n// Backlinks Component - shows where a block is referenced\ninterface BacklinksProps {\n  blockId: string\n  className?: string\n}\n\nexport function BacklinksPanel({ blockId, className }: BacklinksProps) {\n  const [backlinks, setBacklinks] = useState<any[]>([])\n  const [isLoading, setIsLoading] = useState(false)\n\n  useEffect(() => {\n    const fetchBacklinks = async () => {\n      setIsLoading(true)\n      try {\n        const response = await fetch(`/api/blocks/${blockId}/backlinks`)\n        if (response.ok) {\n          const data = await response.json()\n          setBacklinks(data.backlinks || [])\n        }\n      } catch (error) {\n        console.error('Failed to fetch backlinks:', error)\n      } finally {\n        setIsLoading(false)\n      }\n    }\n\n    if (blockId) {\n      fetchBacklinks()\n    }\n  }, [blockId])\n\n  if (isLoading) {\n    return <div className='text-sm text-gray-500'>Loading backlinks...</div>\n  }\n\n  if (backlinks.length === 0) {\n    return (\n      <div className={cn('text-sm text-gray-500', className)}>\n        No backlinks found\n      </div>\n    )\n  }\n\n  return (\n    <div className={cn('space-y-2', className)}>\n      <div className='text-sm font-medium text-gray-700'>\n        Backlinks ({backlinks.length})\n      </div>\n      {backlinks.map((backlink) => (\n        <div\n          key={backlink.id}\n          className='p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer'\n        >\n          <div className='text-sm font-medium'>{backlink.sourceTitle}</div>\n          <div className='text-xs text-gray-500 mt-1'>\n            {backlink.context?.slice(0, 100)}...\n          </div>\n        </div>\n      ))}\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACvD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,2DAAA;AAC7D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AA2B/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAC3B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACW,CAAC,CAAC;IACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAM,AAAL,CAAM,AAAL,CAAM,AAAL,CAAM,AAAL,CAAC,AAAK;IACpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAE3B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjB,CAAC,CAAC,CAAC,CAAC;YACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,C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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAO,CAAN,AAAO,CAAN,AAAO,CAAN,CAAC,CAAC,CAAC;IACjD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEhD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACjB,CAAC,CAAC,CAAC,CAAC;gBACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '63c3732bc484f4dff73776a2b80fd685e76e535d',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '63c3732bc484f4dff73776a2b80fd685e76e535d' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_23qn829xef = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function BlockReferenceElement({
        attributes,
        children,
        element,
        className,
      }) {
        cov_23qn829xef().f[0]++
        const [isLoading, setIsLoading] =
            (cov_23qn829xef().s[0]++, (0, react.useState)(!1)),
          [blockData, setBlockData] =
            (cov_23qn829xef().s[1]++, (0, react.useState)(null)),
          [showPreview, setShowPreview] =
            (cov_23qn829xef().s[2]++, (0, react.useState)(!1)),
          fetchBlockData =
            (cov_23qn829xef().s[3]++,
            (0, react.useCallback)(async () => {
              if (
                (cov_23qn829xef().f[1]++,
                cov_23qn829xef().s[4]++,
                !element.blockId)
              )
                return (
                  cov_23qn829xef().b[0][0]++,
                  void cov_23qn829xef().s[5]++
                )
              ;(cov_23qn829xef().b[0][1]++,
                cov_23qn829xef().s[6]++,
                setIsLoading(!0),
                cov_23qn829xef().s[7]++)
              try {
                const response =
                  (cov_23qn829xef().s[8]++,
                  await fetch(`/api/blocks/${element.blockId}`))
                if ((cov_23qn829xef().s[9]++, response.ok)) {
                  cov_23qn829xef().b[1][0]++
                  const data = (cov_23qn829xef().s[10]++, await response.json())
                  ;(cov_23qn829xef().s[11]++, setBlockData(data))
                } else cov_23qn829xef().b[1][1]++
              } catch (error) {
                ;(cov_23qn829xef().s[12]++,
                  console.error('Failed to fetch block data:', error))
              } finally {
                ;(cov_23qn829xef().s[13]++, setIsLoading(!1))
              }
            }, [element.blockId]))
        ;(cov_23qn829xef().s[14]++,
          (0, react.useEffect)(() => {
            ;(cov_23qn829xef().f[2]++,
              cov_23qn829xef().s[15]++,
              fetchBlockData())
          }, [fetchBlockData]))
        const handleCopyLink =
          (cov_23qn829xef().s[16]++,
          (0, react.useCallback)(async () => {
            ;(cov_23qn829xef().f[3]++, cov_23qn829xef().s[17]++)
            try {
              const blockUrl =
                (cov_23qn829xef().s[18]++,
                `/notes/${element.noteId}#block-${element.blockId}`)
              ;(cov_23qn829xef().s[19]++,
                await navigator.clipboard.writeText(
                  window.location.origin + blockUrl
                ))
            } catch (error) {
              ;(cov_23qn829xef().s[20]++,
                console.error('Failed to copy link:', error))
            }
          }, [element.blockId, element.noteId]))
        var _blockData_content
        return (
          cov_23qn829xef().s[21]++,
          'link' === element.referenceType
            ? (cov_23qn829xef().b[2][0]++,
              cov_23qn829xef().s[22]++,
              (0, jsx_runtime.jsxs)('span', {
                ...attributes,
                className: (0, utils.cn)(
                  'inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 cursor-pointer transition-colors text-sm',
                  className
                ),
                contentEditable: !1,
                onMouseEnter: () => (
                  cov_23qn829xef().f[4]++,
                  cov_23qn829xef().s[23]++,
                  setShowPreview(!0)
                ),
                onMouseLeave: () => (
                  cov_23qn829xef().f[5]++,
                  cov_23qn829xef().s[24]++,
                  setShowPreview(!1)
                ),
                children: [
                  (0, jsx_runtime.jsx)(icons_link.A, { className: 'h-3 w-3' }),
                  (0, jsx_runtime.jsx)('span', {
                    children:
                      (cov_23qn829xef().b[3][0]++,
                      element.title ||
                        (cov_23qn829xef().b[3][1]++, 'Untitled Block')),
                  }),
                  (0, jsx_runtime.jsx)(arrow_up_right.A, {
                    className: 'h-3 w-3 opacity-60',
                  }),
                  (cov_23qn829xef().b[4][0]++,
                  showPreview &&
                    (cov_23qn829xef().b[4][1]++, blockData) &&
                    (cov_23qn829xef().b[4][2]++,
                    (0, jsx_runtime.jsxs)('div', {
                      className:
                        'absolute z-50 mt-8 p-3 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm',
                      children: [
                        (0, jsx_runtime.jsx)('div', {
                          className: 'text-xs text-gray-500 mb-1',
                          children: 'Block Preview',
                        }),
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'text-sm',
                          children: [
                            (cov_23qn829xef().b[6][0]++,
                            null === (_blockData_content = blockData.content) ||
                            (cov_23qn829xef().b[6][1]++,
                            void 0 === _blockData_content)
                              ? void cov_23qn829xef().b[5][0]++
                              : (cov_23qn829xef().b[5][1]++,
                                _blockData_content.slice(0, 100))),
                            '...',
                          ],
                        }),
                      ],
                    }))),
                ],
              }))
            : (cov_23qn829xef().b[2][1]++,
              cov_23qn829xef().s[25]++,
              'embed' === element.referenceType
                ? (cov_23qn829xef().b[7][0]++,
                  cov_23qn829xef().s[26]++,
                  (0, jsx_runtime.jsxs)('div', {
                    ...attributes,
                    className: (0, utils.cn)(
                      'block-embed border border-gray-200 rounded-lg p-4 my-3 bg-gray-50',
                      className
                    ),
                    contentEditable: !1,
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center justify-between mb-2',
                        children: [
                          (0, jsx_runtime.jsxs)('div', {
                            className:
                              'flex items-center gap-2 text-sm text-gray-600',
                            children: [
                              (0, jsx_runtime.jsx)(icons_link.A, {
                                className: 'h-4 w-4',
                              }),
                              (0, jsx_runtime.jsx)('span', {
                                children: 'Referenced Block',
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'flex items-center gap-1',
                            children: [
                              (0, jsx_runtime.jsx)('button', {
                                onClick: handleCopyLink,
                                className: 'p-1 hover:bg-gray-200 rounded',
                                title: 'Copy link',
                                children: (0, jsx_runtime.jsx)(copy.A, {
                                  className: 'h-3 w-3',
                                }),
                              }),
                              (0, jsx_runtime.jsx)('button', {
                                className: 'p-1 hover:bg-gray-200 rounded',
                                title: 'Edit original',
                                children: (0, jsx_runtime.jsx)(pen_line.A, {
                                  className: 'h-3 w-3',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)('div', {
                        className: 'border-l-4 border-blue-400 pl-4',
                        children: isLoading
                          ? (cov_23qn829xef().b[8][0]++,
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'animate-pulse',
                              children: [
                                (0, jsx_runtime.jsx)('div', {
                                  className:
                                    'h-4 bg-gray-300 rounded w-3/4 mb-2',
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                  className: 'h-4 bg-gray-300 rounded w-1/2',
                                }),
                              ],
                            }))
                          : (cov_23qn829xef().b[8][1]++,
                            blockData
                              ? (cov_23qn829xef().b[9][0]++,
                                (0, jsx_runtime.jsx)('div', {
                                  className: 'prose prose-sm max-w-none',
                                  children: blockData.content,
                                }))
                              : (cov_23qn829xef().b[9][1]++,
                                (0, jsx_runtime.jsx)('div', {
                                  className: 'text-gray-500 italic',
                                  children: 'Block not found',
                                }))),
                      }),
                    ],
                  }))
                : (cov_23qn829xef().b[7][1]++,
                  cov_23qn829xef().s[27]++,
                  'mention' === element.referenceType
                    ? (cov_23qn829xef().b[10][0]++,
                      cov_23qn829xef().s[28]++,
                      (0, jsx_runtime.jsxs)('span', {
                        ...attributes,
                        className: (0, utils.cn)(
                          'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm cursor-pointer transition-colors',
                          className
                        ),
                        contentEditable: !1,
                        children: [
                          '@',
                          (cov_23qn829xef().b[11][0]++,
                          element.title ||
                            (cov_23qn829xef().b[11][1]++, 'block')),
                        ],
                      }))
                    : (cov_23qn829xef().b[10][1]++,
                      cov_23qn829xef().s[29]++,
                      (0, jsx_runtime.jsx)('span', {
                        ...attributes,
                        children,
                      }))))
        )
      }
      cov_23qn829xef()
      const block_reference_kit_BlockReferencePlugin =
        (cov_23qn829xef().s[30]++,
        (0, dist_react.SU)({
          key: 'block_reference',
          node: {
            isElement: !0,
            type: 'block_reference',
            component: BlockReferenceElement,
            isVoid: !0,
          },
        }))
      ;(cov_23qn829xef().s[83]++,
        (BlockReferenceElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'BlockReferenceElement',
          props: {
            attributes: {
              required: !0,
              tsType: { name: 'any' },
              description: '',
            },
            children: {
              required: !0,
              tsType: { name: 'any' },
              description: '',
            },
            element: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: "{\n  type: string\n  blockId: string\n  referenceType: 'link' | 'embed' | 'mention'\n  title?: string\n  preview?: string\n  noteId?: string\n}",
                signature: {
                  properties: [
                    { key: 'type', value: { name: 'string', required: !0 } },
                    { key: 'blockId', value: { name: 'string', required: !0 } },
                    {
                      key: 'referenceType',
                      value: {
                        name: 'union',
                        raw: "'link' | 'embed' | 'mention'",
                        elements: [
                          { name: 'literal', value: "'link'" },
                          { name: 'literal', value: "'embed'" },
                          { name: 'literal', value: "'mention'" },
                        ],
                        required: !0,
                      },
                    },
                    { key: 'title', value: { name: 'string', required: !1 } },
                    { key: 'preview', value: { name: 'string', required: !1 } },
                    { key: 'noteId', value: { name: 'string', required: !1 } },
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
        }),
        cov_23qn829xef().s[84]++,
        cov_23qn829xef().s[85]++)
      var dist = __webpack_require__(
        '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
      )
      const editor_plugins_stories = {
          title: 'Editor/Plugins',
          component: ({
            plugins,
            initialValue,
            placeholder = 'Type here...',
          }) => {
            const editor = (0, dist_react.FI)({ plugins, value: initialValue })
            return (0, jsx_runtime.jsx)(dist_react.T6, {
              editor,
              children: (0, jsx_runtime.jsx)(ui_editor.nG, {
                children: (0, jsx_runtime.jsx)(ui_editor.KE, {
                  variant: 'demo',
                  placeholder,
                }),
              }),
            })
          },
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'min-w-[800px] p-8',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        BasicNodes = {
          args: {
            plugins: basic_nodes_kit.u,
            initialValue: [
              { type: 'h1', children: [{ text: 'Editor Plugins Demo' }] },
              {
                type: 'p',
                children: [
                  {
                    text: 'This demonstrates various plugin configurations. Try ',
                  },
                  { text: 'bold', bold: !0 },
                  { text: ', ' },
                  { text: 'italic', italic: !0 },
                  { text: ', and other formatting options.' },
                ],
              },
            ],
            placeholder: 'Basic nodes kit includes blocks and marks...',
          },
        },
        BasicBlocks = {
          args: {
            plugins: basic_blocks_kit.h,
            initialValue: [
              { type: 'h2', children: [{ text: 'Block Types' }] },
              {
                type: 'blockquote',
                children: [{ text: 'This is a blockquote' }],
              },
              {
                type: 'code_block',
                children: [{ text: 'const greeting = "Hello, World!";' }],
              },
            ],
            placeholder: 'Basic blocks kit for headings, quotes, code...',
          },
        },
        BasicMarks = {
          args: {
            plugins: basic_marks_kit.N,
            initialValue: [
              {
                type: 'p',
                children: [
                  { text: 'Test ' },
                  { text: 'bold', bold: !0 },
                  { text: ', ' },
                  { text: 'italic', italic: !0 },
                  { text: ', ' },
                  { text: 'underline', underline: !0 },
                  { text: ', ' },
                  { text: 'strikethrough', strikethrough: !0 },
                  { text: ', and ' },
                  { text: 'code', code: !0 },
                ],
              },
            ],
            placeholder: 'Basic marks kit for text formatting...',
          },
        },
        EnhancedEditor = {
          args: {
            plugins: EnhancedEditorKit,
            placeholder: 'Enhanced editor with all features...',
          },
        },
        WithLinkPlugin = {
          args: {
            plugins: [...basic_nodes_kit.u, ...LinkKit],
            initialValue: [
              {
                type: 'p',
                children: [
                  { text: 'Visit ' },
                  {
                    type: 'a',
                    url: 'https://platejs.org',
                    children: [{ text: 'Plate.js' }],
                  },
                  { text: ' for documentation.' },
                ],
              },
            ],
            placeholder: 'Editor with link support...',
          },
        },
        SlashCommands = {
          args: {
            plugins: [...basic_nodes_kit.u, slash_command_kit.kr],
            placeholder: 'Type "/" to see slash commands...',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 500))
            const editor = canvas.getByRole('textbox')
            ;(await dist.Q4.type(editor, '/'),
              await new Promise((resolve) => setTimeout(resolve, 300)))
          },
        },
        BlockReferences = {
          args: {
            plugins: [
              ...basic_nodes_kit.u,
              block_reference_kit_BlockReferencePlugin,
            ],
            initialValue: [
              {
                type: 'p',
                id: 'block-1',
                children: [{ text: 'This is a referenceable block' }],
              },
              {
                type: 'p',
                children: [
                  { text: 'Reference to ' },
                  {
                    type: 'block_reference',
                    ref: 'block-1',
                    children: [{ text: '' }],
                  },
                ],
              },
            ],
            placeholder: 'Editor with block references...',
          },
        },
        InteractiveMarks = {
          args: {
            plugins: basic_nodes_kit.u,
            placeholder: 'Select text and use keyboard shortcuts...',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 500))
            const editor = canvas.getByRole('textbox')
            ;(await dist.Q4.type(editor, 'This text will be formatted'),
              await dist.Q4.keyboard('{Control>}a{/Control}'),
              await dist.Q4.keyboard('{Control>}b{/Control}'),
              await dist.Q4.click(editor),
              await dist.Q4.type(editor, ' and this is normal'))
          },
        },
        ComplexDocument = {
          args: {
            plugins: EnhancedEditorKit,
            initialValue: [
              { type: 'h1', children: [{ text: 'Complete Document Example' }] },
              {
                type: 'p',
                children: [
                  { text: 'This document showcases ' },
                  { text: 'all available', bold: !0, italic: !0 },
                  { text: ' formatting options.' },
                ],
              },
              { type: 'h2', children: [{ text: 'Lists' }] },
              {
                type: 'ul',
                children: [
                  { type: 'li', children: [{ text: 'Unordered list item 1' }] },
                  { type: 'li', children: [{ text: 'Unordered list item 2' }] },
                ],
              },
              {
                type: 'ol',
                children: [
                  { type: 'li', children: [{ text: 'Ordered list item 1' }] },
                  { type: 'li', children: [{ text: 'Ordered list item 2' }] },
                ],
              },
              { type: 'h2', children: [{ text: 'Code Block' }] },
              {
                type: 'code_block',
                children: [
                  {
                    text: 'function hello() {\n  console.log("Hello, World!");\n}',
                  },
                ],
              },
              {
                type: 'blockquote',
                children: [
                  { text: 'This is a blockquote with ' },
                  { text: 'formatted text', bold: !0 },
                  { text: ' inside.' },
                ],
              },
            ],
          },
        },
        __namedExportsOrder = [
          'BasicNodes',
          'BasicBlocks',
          'BasicMarks',
          'EnhancedEditor',
          'WithLinkPlugin',
          'SlashCommands',
          'BlockReferences',
          'InteractiveMarks',
          'ComplexDocument',
        ]
      ;((BasicNodes.parameters = {
        ...BasicNodes.parameters,
        docs: {
          ...BasicNodes.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    plugins: BasicNodesKit,\n    initialValue: basicValue,\n    placeholder: 'Basic nodes kit includes blocks and marks...'\n  }\n}",
            ...BasicNodes.parameters?.docs?.source,
          },
        },
      }),
        (BasicBlocks.parameters = {
          ...BasicBlocks.parameters,
          docs: {
            ...BasicBlocks.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: BasicBlocksKit,\n    initialValue: blockValue,\n    placeholder: 'Basic blocks kit for headings, quotes, code...'\n  }\n}",
              ...BasicBlocks.parameters?.docs?.source,
            },
          },
        }),
        (BasicMarks.parameters = {
          ...BasicMarks.parameters,
          docs: {
            ...BasicMarks.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: BasicMarksKit,\n    initialValue: [{\n      type: 'p',\n      children: [{\n        text: 'Test '\n      }, {\n        text: 'bold',\n        bold: true\n      }, {\n        text: ', '\n      }, {\n        text: 'italic',\n        italic: true\n      }, {\n        text: ', '\n      }, {\n        text: 'underline',\n        underline: true\n      }, {\n        text: ', '\n      }, {\n        text: 'strikethrough',\n        strikethrough: true\n      }, {\n        text: ', and '\n      }, {\n        text: 'code',\n        code: true\n      }]\n    }],\n    placeholder: 'Basic marks kit for text formatting...'\n  }\n}",
              ...BasicMarks.parameters?.docs?.source,
            },
          },
        }),
        (EnhancedEditor.parameters = {
          ...EnhancedEditor.parameters,
          docs: {
            ...EnhancedEditor.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: EnhancedEditorKit,\n    placeholder: 'Enhanced editor with all features...'\n  }\n}",
              ...EnhancedEditor.parameters?.docs?.source,
            },
          },
        }),
        (WithLinkPlugin.parameters = {
          ...WithLinkPlugin.parameters,
          docs: {
            ...WithLinkPlugin.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: [...BasicNodesKit, ...LinkKit],\n    initialValue: [{\n      type: 'p',\n      children: [{\n        text: 'Visit '\n      }, {\n        type: 'a',\n        url: 'https://platejs.org',\n        children: [{\n          text: 'Plate.js'\n        }]\n      }, {\n        text: ' for documentation.'\n      }]\n    }],\n    placeholder: 'Editor with link support...'\n  }\n}",
              ...WithLinkPlugin.parameters?.docs?.source,
            },
          },
        }),
        (SlashCommands.parameters = {
          ...SlashCommands.parameters,
          docs: {
            ...SlashCommands.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: [...BasicNodesKit, SlashCommandPlugin],\n    placeholder: 'Type \"/\" to see slash commands...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to be ready\n    await new Promise(resolve => setTimeout(resolve, 500));\n    const editor = canvas.getByRole('textbox');\n\n    // Type slash to trigger command menu\n    await userEvent.type(editor, '/');\n\n    // Wait for menu to appear\n    await new Promise(resolve => setTimeout(resolve, 300));\n\n    // The menu should be visible (implementation dependent)\n    // This is a placeholder for the actual menu test\n  }\n}",
              ...SlashCommands.parameters?.docs?.source,
            },
          },
        }),
        (BlockReferences.parameters = {
          ...BlockReferences.parameters,
          docs: {
            ...BlockReferences.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: [...BasicNodesKit, BlockReferencePlugin],\n    initialValue: [{\n      type: 'p',\n      id: 'block-1',\n      children: [{\n        text: 'This is a referenceable block'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'Reference to '\n      }, {\n        type: 'block_reference',\n        ref: 'block-1',\n        children: [{\n          text: ''\n        }]\n      }]\n    }],\n    placeholder: 'Editor with block references...'\n  }\n}",
              ...BlockReferences.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveMarks.parameters = {
          ...InteractiveMarks.parameters,
          docs: {
            ...InteractiveMarks.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: BasicNodesKit,\n    placeholder: 'Select text and use keyboard shortcuts...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to be ready\n    await new Promise(resolve => setTimeout(resolve, 500));\n    const editor = canvas.getByRole('textbox');\n\n    // Type some text\n    await userEvent.type(editor, 'This text will be formatted');\n\n    // Select all\n    await userEvent.keyboard('{Control>}a{/Control}');\n\n    // Apply bold\n    await userEvent.keyboard('{Control>}b{/Control}');\n\n    // Click to deselect\n    await userEvent.click(editor);\n\n    // Type more\n    await userEvent.type(editor, ' and this is normal');\n  }\n}",
              ...InteractiveMarks.parameters?.docs?.source,
            },
          },
        }),
        (ComplexDocument.parameters = {
          ...ComplexDocument.parameters,
          docs: {
            ...ComplexDocument.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    plugins: EnhancedEditorKit,\n    initialValue: [{\n      type: 'h1',\n      children: [{\n        text: 'Complete Document Example'\n      }]\n    }, {\n      type: 'p',\n      children: [{\n        text: 'This document showcases '\n      }, {\n        text: 'all available',\n        bold: true,\n        italic: true\n      }, {\n        text: ' formatting options.'\n      }]\n    }, {\n      type: 'h2',\n      children: [{\n        text: 'Lists'\n      }]\n    }, {\n      type: 'ul',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'Unordered list item 1'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Unordered list item 2'\n        }]\n      }]\n    }, {\n      type: 'ol',\n      children: [{\n        type: 'li',\n        children: [{\n          text: 'Ordered list item 1'\n        }]\n      }, {\n        type: 'li',\n        children: [{\n          text: 'Ordered list item 2'\n        }]\n      }]\n    }, {\n      type: 'h2',\n      children: [{\n        text: 'Code Block'\n      }]\n    }, {\n      type: 'code_block',\n      children: [{\n        text: 'function hello() {\\n  console.log(\"Hello, World!\");\\n}'\n      }]\n    }, {\n      type: 'blockquote',\n      children: [{\n        text: 'This is a blockquote with '\n      }, {\n        text: 'formatted text',\n        bold: true\n      }, {\n        text: ' inside.'\n      }]\n    }]\n  }\n}",
              ...ComplexDocument.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
