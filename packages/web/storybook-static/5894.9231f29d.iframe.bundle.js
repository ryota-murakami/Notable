'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5894],
  {
    './components/editor/plugins/basic-nodes-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { u: () => BasicNodesKit })
      var _basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './components/editor/plugins/basic-blocks-kit.tsx'
        ),
        _basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/editor/plugins/basic-marks-kit.tsx'
        )
      function cov_tfhxzc70i() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ae7d14de3d8d54c93bd22693ad62804ad6ee1804' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 29 },
                end: { line: 7, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { BasicBlocksKit } from './basic-blocks-kit'\nimport { BasicMarksKit } from './basic-marks-kit'\n\nexport const BasicNodesKit = [...BasicBlocksKit, ...BasicMarksKit]\n",
              ],
              names: ['BasicBlocksKit', 'BasicMarksKit', 'BasicNodesKit'],
              mappings:
                'AAAA;AAEA,SAASA,cAAc,QAAQ,qBAAoB;AACnD,SAASC,aAAa,QAAQ,oBAAmB;AAEjD,OAAO,MAAMC,gBAAgB;OAAIF;OAAmBC;CAAc,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ae7d14de3d8d54c93bd22693ad62804ad6ee1804',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_tfhxzc70i = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_tfhxzc70i()
      const BasicNodesKit =
        (cov_tfhxzc70i().s[0]++,
        [
          ..._basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__.h,
          ..._basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__.N,
        ])
    },
    './components/ui/todo-block.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        J: () => TodoElement,
        W: () => TodoBlock,
      })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_11ubgbvzk() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/todo-block.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'f16a6cee0d7d4402e5e6d6c7a73a03c948365838' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/todo-block.tsx',
            statementMap: {
              0: {
                start: { line: 8, column: 38 },
                end: { line: 8, column: 72 },
              },
              1: {
                start: { line: 9, column: 25 },
                end: { line: 13, column: 10 },
              },
              2: {
                start: { line: 10, column: 8 },
                end: { line: 10, column: 36 },
              },
              3: {
                start: { line: 10, column: 29 },
                end: { line: 10, column: 34 },
              },
              4: {
                start: { line: 14, column: 4 },
                end: { line: 34, column: 7 },
              },
              5: {
                start: { line: 37, column: 4 },
                end: { line: 39, column: 7 },
              },
              6: {
                start: { line: 41, column: 0 },
                end: { line: 102, column: 2 },
              },
              7: {
                start: { line: 103, column: 0 },
                end: { line: 107, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'TodoBlock',
                decl: {
                  start: { line: 7, column: 16 },
                  end: { line: 7, column: 25 },
                },
                loc: {
                  start: { line: 7, column: 72 },
                  end: { line: 35, column: 1 },
                },
                line: 7,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 9, column: 37 },
                  end: { line: 9, column: 38 },
                },
                loc: {
                  start: { line: 9, column: 41 },
                  end: { line: 13, column: 5 },
                },
                line: 9,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 10, column: 21 },
                  end: { line: 10, column: 22 },
                },
                loc: {
                  start: { line: 10, column: 29 },
                  end: { line: 10, column: 34 },
                },
                line: 10,
              },
              3: {
                name: 'TodoElement',
                decl: {
                  start: { line: 36, column: 16 },
                  end: { line: 36, column: 27 },
                },
                loc: {
                  start: { line: 36, column: 35 },
                  end: { line: 40, column: 1 },
                },
                line: 36,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 8, column: 47 },
                  end: { line: 8, column: 71 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 8, column: 47 },
                    end: { line: 8, column: 62 },
                  },
                  {
                    start: { line: 8, column: 66 },
                    end: { line: 8, column: 71 },
                  },
                ],
                line: 8,
              },
              1: {
                loc: {
                  start: { line: 16, column: 70 },
                  end: { line: 16, column: 95 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 16, column: 70 },
                    end: { line: 16, column: 79 },
                  },
                  {
                    start: { line: 16, column: 83 },
                    end: { line: 16, column: 95 },
                  },
                ],
                line: 16,
              },
              2: {
                loc: {
                  start: { line: 20, column: 219 },
                  end: { line: 20, column: 313 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 20, column: 231 },
                    end: { line: 20, column: 271 },
                  },
                  {
                    start: { line: 20, column: 274 },
                    end: { line: 20, column: 313 },
                  },
                ],
                line: 20,
              },
              3: {
                loc: {
                  start: { line: 25, column: 26 },
                  end: { line: 27, column: 18 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 25, column: 26 },
                    end: { line: 25, column: 35 },
                  },
                  {
                    start: { line: 25, column: 53 },
                    end: { line: 27, column: 18 },
                  },
                ],
                line: 25,
              },
              4: {
                loc: {
                  start: { line: 30, column: 63 },
                  end: { line: 30, column: 104 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 30, column: 63 },
                    end: { line: 30, column: 72 },
                  },
                  {
                    start: { line: 30, column: 76 },
                    end: { line: 30, column: 104 },
                  },
                ],
                line: 30,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
            f: { 0: 0, 1: 0, 2: 0, 3: 0 },
            b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/todo-block.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { useCallback, useState } from 'react'\nimport { Check } from 'lucide-react'\nimport { cn } from '@/lib/utils'\n\ninterface TodoBlockProps {\n  attributes: any\n  children: any\n  element: {\n    type: string\n    checked?: boolean\n    id?: string\n  }\n  className?: string\n}\n\nexport function TodoBlock({\n  attributes,\n  children,\n  element,\n  className,\n}: TodoBlockProps) {\n  const [isChecked, setIsChecked] = useState(element.checked || false)\n\n  const handleToggle = useCallback(() => {\n    setIsChecked((prev) => !prev)\n    // TODO: Update the element data in Slate\n    // This would typically be done through the editor API\n  }, [])\n\n  return (\n    <div\n      {...attributes}\n      className={cn(\n        'todo-block flex items-start gap-3 py-1 group',\n        isChecked && 'opacity-75',\n        className\n      )}\n    >\n      <button\n        contentEditable={false}\n        className={cn(\n          'todo-checkbox mt-0.5 flex h-5 w-5 items-center justify-center rounded border-2 transition-all',\n          'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',\n          isChecked\n            ? 'bg-blue-500 border-blue-500 text-white'\n            : 'border-gray-300 hover:border-gray-400'\n        )}\n        onClick={handleToggle}\n        type='button'\n        role='checkbox'\n        aria-checked={isChecked}\n      >\n        {isChecked && <Check className='h-3 w-3' />}\n      </button>\n\n      <div\n        className={cn(\n          'flex-1 min-w-0 transition-all',\n          isChecked && 'line-through text-gray-500'\n        )}\n      >\n        {children}\n      </div>\n    </div>\n  )\n}\n\nexport function TodoElement(props: any) {\n  return <TodoBlock {...props} />\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,oCAAA;AACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAa/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACM,CAAC,CAAC;IACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEnE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE,CAAC,CAAC,CAAC,CAAC;IAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IACvD,CAAC,CAAC,CAAC,CAAC,CAAC;IAEL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,MAAC,CAAC,CAAC;QACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAGV,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC/F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC1F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAE5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrB,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACZ,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAEtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;0BAG7C,KAAC,CAAC,CAAC;gBACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BAGzC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAIjB;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAK,CAAJ,AAAK,CAAJ,AAAK,CAAJ,CAAC;IACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAChC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'f16a6cee0d7d4402e5e6d6c7a73a03c948365838',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_11ubgbvzk = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function TodoBlock({ attributes, children, element, className }) {
        cov_11ubgbvzk().f[0]++
        const [isChecked, setIsChecked] =
            (cov_11ubgbvzk().s[0]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
              (cov_11ubgbvzk().b[0][0]++,
              element.checked || (cov_11ubgbvzk().b[0][1]++, !1))
            )),
          handleToggle =
            (cov_11ubgbvzk().s[1]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
              ;(cov_11ubgbvzk().f[1]++,
                cov_11ubgbvzk().s[2]++,
                setIsChecked(
                  (prev) => (
                    cov_11ubgbvzk().f[2]++,
                    cov_11ubgbvzk().s[3]++,
                    !prev
                  )
                ))
            }, []))
        return (
          cov_11ubgbvzk().s[4]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            ...attributes,
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              'todo-block flex items-start gap-3 py-1 group',
              (cov_11ubgbvzk().b[1][0]++,
              isChecked && (cov_11ubgbvzk().b[1][1]++, 'opacity-75')),
              className
            ),
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                'button',
                {
                  contentEditable: !1,
                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    'todo-checkbox mt-0.5 flex h-5 w-5 items-center justify-center rounded border-2 transition-all',
                    'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
                    isChecked
                      ? (cov_11ubgbvzk().b[2][0]++,
                        'bg-blue-500 border-blue-500 text-white')
                      : (cov_11ubgbvzk().b[2][1]++,
                        'border-gray-300 hover:border-gray-400')
                  ),
                  onClick: handleToggle,
                  type: 'button',
                  role: 'checkbox',
                  'aria-checked': isChecked,
                  children:
                    (cov_11ubgbvzk().b[3][0]++,
                    isChecked &&
                      (cov_11ubgbvzk().b[3][1]++,
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,
                        { className: 'h-3 w-3' }
                      ))),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'flex-1 min-w-0 transition-all',
                  (cov_11ubgbvzk().b[4][0]++,
                  isChecked &&
                    (cov_11ubgbvzk().b[4][1]++, 'line-through text-gray-500'))
                ),
                children,
              }),
            ],
          })
        )
      }
      function TodoElement(props) {
        return (
          cov_11ubgbvzk().f[3]++,
          cov_11ubgbvzk().s[5]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TodoBlock, {
            ...props,
          })
        )
      }
      ;(cov_11ubgbvzk(),
        cov_11ubgbvzk().s[6]++,
        (TodoBlock.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TodoBlock',
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
                raw: '{\n  type: string\n  checked?: boolean\n  id?: string\n}',
                signature: {
                  properties: [
                    { key: 'type', value: { name: 'string', required: !0 } },
                    {
                      key: 'checked',
                      value: { name: 'boolean', required: !1 },
                    },
                    { key: 'id', value: { name: 'string', required: !1 } },
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
        cov_11ubgbvzk().s[7]++,
        (TodoElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TodoElement',
        }))
    },
  },
])
