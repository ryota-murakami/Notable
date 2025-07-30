'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4266],
  {
    './components/ui/code-block.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        L: () => CodeBlockElement,
        N: () => CodeBlock,
      })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js'
          ),
        _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
          ),
        _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js'
          ),
        _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts'),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      function cov_2di6rljj2b() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-block.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-block.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 28 },
                end: { line: 30, column: 1 },
              },
              1: {
                start: { line: 32, column: 36 },
                end: { line: 32, column: 77 },
              },
              2: {
                start: { line: 33, column: 34 },
                end: { line: 33, column: 65 },
              },
              3: {
                start: { line: 34, column: 50 },
                end: { line: 34, column: 92 },
              },
              4: {
                start: { line: 35, column: 32 },
                end: { line: 35, column: 47 },
              },
              5: {
                start: { line: 36, column: 44 },
                end: { line: 36, column: 59 },
              },
              6: {
                start: { line: 37, column: 20 },
                end: { line: 37, column: 32 },
              },
              7: {
                start: { line: 38, column: 23 },
                end: { line: 49, column: 10 },
              },
              8: {
                start: { line: 39, column: 8 },
                end: { line: 48, column: 9 },
              },
              9: {
                start: { line: 40, column: 25 },
                end: { line: 40, column: 58 },
              },
              10: {
                start: { line: 41, column: 12 },
                end: { line: 47, column: 13 },
              },
              11: {
                start: { line: 42, column: 16 },
                end: { line: 42, column: 58 },
              },
              12: {
                start: { line: 43, column: 16 },
                end: { line: 43, column: 32 },
              },
              13: {
                start: { line: 44, column: 16 },
                end: { line: 44, column: 55 },
              },
              14: {
                start: { line: 44, column: 31 },
                end: { line: 44, column: 47 },
              },
              15: {
                start: { line: 46, column: 16 },
                end: { line: 46, column: 60 },
              },
              16: {
                start: { line: 50, column: 33 },
                end: { line: 53, column: 5 },
              },
              17: {
                start: { line: 51, column: 8 },
                end: { line: 51, column: 33 },
              },
              18: {
                start: { line: 54, column: 32 },
                end: { line: 57, column: 5 },
              },
              19: {
                start: { line: 55, column: 8 },
                end: { line: 55, column: 39 },
              },
              20: {
                start: { line: 58, column: 30 },
                end: { line: 61, column: 5 },
              },
              21: {
                start: { line: 59, column: 8 },
                end: { line: 59, column: 42 },
              },
              22: {
                start: { line: 59, column: 35 },
                end: { line: 59, column: 40 },
              },
              23: {
                start: { line: 63, column: 32 },
                end: { line: 73, column: 5 },
              },
              24: {
                start: { line: 64, column: 8 },
                end: { line: 64, column: 62 },
              },
              25: {
                start: { line: 64, column: 50 },
                end: { line: 64, column: 62 },
              },
              26: {
                start: { line: 65, column: 21 },
                end: { line: 65, column: 54 },
              },
              27: {
                start: { line: 66, column: 22 },
                end: { line: 66, column: 38 },
              },
              28: {
                start: { line: 67, column: 8 },
                end: { line: 72, column: 11 },
              },
              29: {
                start: { line: 69, column: 58 },
                end: { line: 71, column: 25 },
              },
              30: {
                start: { line: 74, column: 4 },
                end: { line: 183, column: 7 },
              },
              31: {
                start: { line: 90, column: 47 },
                end: { line: 90, column: 83 },
              },
              32: {
                start: { line: 92, column: 88 },
                end: { line: 95, column: 44 },
              },
              33: {
                start: { line: 104, column: 45 },
                end: { line: 104, column: 75 },
              },
              34: {
                start: { line: 186, column: 4 },
                end: { line: 188, column: 7 },
              },
              35: {
                start: { line: 190, column: 0 },
                end: { line: 258, column: 2 },
              },
              36: {
                start: { line: 259, column: 0 },
                end: { line: 263, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'CodeBlock',
                decl: {
                  start: { line: 31, column: 16 },
                  end: { line: 31, column: 25 },
                },
                loc: {
                  start: { line: 31, column: 72 },
                  end: { line: 184, column: 1 },
                },
                line: 31,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 38, column: 35 },
                  end: { line: 38, column: 36 },
                },
                loc: {
                  start: { line: 38, column: 45 },
                  end: { line: 49, column: 5 },
                },
                line: 38,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 44, column: 27 },
                  end: { line: 44, column: 28 },
                },
                loc: {
                  start: { line: 44, column: 31 },
                  end: { line: 44, column: 47 },
                },
                line: 44,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 50, column: 33 },
                  end: { line: 50, column: 34 },
                },
                loc: {
                  start: { line: 50, column: 48 },
                  end: { line: 53, column: 5 },
                },
                line: 50,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 54, column: 32 },
                  end: { line: 54, column: 33 },
                },
                loc: {
                  start: { line: 54, column: 41 },
                  end: { line: 57, column: 5 },
                },
                line: 54,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 58, column: 30 },
                  end: { line: 58, column: 31 },
                },
                loc: {
                  start: { line: 58, column: 34 },
                  end: { line: 61, column: 5 },
                },
                line: 58,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 59, column: 27 },
                  end: { line: 59, column: 28 },
                },
                loc: {
                  start: { line: 59, column: 35 },
                  end: { line: 59, column: 40 },
                },
                line: 59,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 63, column: 32 },
                  end: { line: 63, column: 33 },
                },
                loc: {
                  start: { line: 63, column: 36 },
                  end: { line: 73, column: 5 },
                },
                line: 63,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 69, column: 32 },
                  end: { line: 69, column: 33 },
                },
                loc: {
                  start: { line: 69, column: 58 },
                  end: { line: 71, column: 25 },
                },
                line: 69,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 90, column: 42 },
                  end: { line: 90, column: 43 },
                },
                loc: {
                  start: { line: 90, column: 47 },
                  end: { line: 90, column: 83 },
                },
                line: 90,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 92, column: 66 },
                  end: { line: 92, column: 67 },
                },
                loc: {
                  start: { line: 92, column: 88 },
                  end: { line: 95, column: 44 },
                },
                line: 92,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 104, column: 41 },
                  end: { line: 104, column: 42 },
                },
                loc: {
                  start: { line: 104, column: 45 },
                  end: { line: 104, column: 75 },
                },
                line: 104,
              },
              12: {
                name: 'CodeBlockElement',
                decl: {
                  start: { line: 185, column: 16 },
                  end: { line: 185, column: 32 },
                },
                loc: {
                  start: { line: 185, column: 40 },
                  end: { line: 189, column: 1 },
                },
                line: 185,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 32, column: 45 },
                  end: { line: 32, column: 76 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 32, column: 45 },
                    end: { line: 32, column: 61 },
                  },
                  {
                    start: { line: 32, column: 65 },
                    end: { line: 32, column: 76 },
                  },
                ],
                line: 32,
              },
              1: {
                loc: {
                  start: { line: 33, column: 43 },
                  end: { line: 33, column: 64 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 33, column: 43 },
                    end: { line: 33, column: 58 },
                  },
                  {
                    start: { line: 33, column: 62 },
                    end: { line: 33, column: 64 },
                  },
                ],
                line: 33,
              },
              2: {
                loc: {
                  start: { line: 34, column: 59 },
                  end: { line: 34, column: 91 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 34, column: 59 },
                    end: { line: 34, column: 82 },
                  },
                  {
                    start: { line: 34, column: 86 },
                    end: { line: 34, column: 91 },
                  },
                ],
                line: 34,
              },
              3: {
                loc: {
                  start: { line: 39, column: 8 },
                  end: { line: 48, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 39, column: 8 },
                    end: { line: 48, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 39,
              },
              4: {
                loc: {
                  start: { line: 40, column: 25 },
                  end: { line: 40, column: 58 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 40, column: 25 },
                    end: { line: 40, column: 52 },
                  },
                  {
                    start: { line: 40, column: 56 },
                    end: { line: 40, column: 58 },
                  },
                ],
                line: 40,
              },
              5: {
                loc: {
                  start: { line: 64, column: 8 },
                  end: { line: 64, column: 62 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 64, column: 8 },
                    end: { line: 64, column: 62 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 64,
              },
              6: {
                loc: {
                  start: { line: 64, column: 12 },
                  end: { line: 64, column: 48 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 64, column: 12 },
                    end: { line: 64, column: 28 },
                  },
                  {
                    start: { line: 64, column: 32 },
                    end: { line: 64, column: 48 },
                  },
                ],
                line: 64,
              },
              7: {
                loc: {
                  start: { line: 65, column: 21 },
                  end: { line: 65, column: 54 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 65, column: 21 },
                    end: { line: 65, column: 48 },
                  },
                  {
                    start: { line: 65, column: 52 },
                    end: { line: 65, column: 54 },
                  },
                ],
                line: 65,
              },
              8: {
                loc: {
                  start: { line: 115, column: 39 },
                  end: { line: 115, column: 71 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 115, column: 48 },
                    end: { line: 115, column: 57 },
                  },
                  {
                    start: { line: 115, column: 60 },
                    end: { line: 115, column: 71 },
                  },
                ],
                line: 115,
              },
              9: {
                loc: {
                  start: { line: 116, column: 42 },
                  end: { line: 120, column: 34 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 116, column: 65 },
                    end: { line: 118, column: 34 },
                  },
                  {
                    start: { line: 118, column: 51 },
                    end: { line: 120, column: 34 },
                  },
                ],
                line: 116,
              },
              10: {
                loc: {
                  start: { line: 126, column: 12 },
                  end: { line: 156, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 126, column: 12 },
                    end: { line: 126, column: 24 },
                  },
                  {
                    start: { line: 126, column: 42 },
                    end: { line: 156, column: 14 },
                  },
                ],
                line: 126,
              },
              11: {
                loc: {
                  start: { line: 157, column: 12 },
                  end: { line: 160, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 157, column: 12 },
                    end: { line: 157, column: 19 },
                  },
                  {
                    start: { line: 157, column: 37 },
                    end: { line: 160, column: 14 },
                  },
                ],
                line: 157,
              },
              12: {
                loc: {
                  start: { line: 166, column: 24 },
                  end: { line: 169, column: 26 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 166, column: 24 },
                    end: { line: 166, column: 39 },
                  },
                  {
                    start: { line: 166, column: 57 },
                    end: { line: 169, column: 26 },
                  },
                ],
                line: 166,
              },
              13: {
                loc: {
                  start: { line: 172, column: 142 },
                  end: { line: 172, column: 167 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 172, column: 142 },
                    end: { line: 172, column: 157 },
                  },
                  {
                    start: { line: 172, column: 161 },
                    end: { line: 172, column: 167 },
                  },
                ],
                line: 172,
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
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/code-block.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { useCallback, useRef, useState } from 'react'\nimport { Check, Code, Copy, Settings } from 'lucide-react'\nimport { cn } from '@/lib/utils'\n\ninterface CodeBlockProps {\n  attributes: any\n  children: any\n  element: {\n    type: string\n    language?: string\n    caption?: string\n    showLineNumbers?: boolean\n  }\n  className?: string\n}\n\nconst SUPPORTED_LANGUAGES = [\n  'javascript',\n  'typescript',\n  'python',\n  'java',\n  'cpp',\n  'c',\n  'html',\n  'css',\n  'sql',\n  'bash',\n  'json',\n  'xml',\n  'markdown',\n  'yaml',\n  'go',\n  'rust',\n  'php',\n  'ruby',\n  'swift',\n  'kotlin',\n  'dart',\n  'plaintext',\n]\n\nexport function CodeBlock({\n  attributes,\n  children,\n  element,\n  className,\n}: CodeBlockProps) {\n  const [language, setLanguage] = useState(element.language || 'plaintext')\n  const [caption, setCaption] = useState(element.caption || '')\n  const [showLineNumbers, setShowLineNumbers] = useState(\n    element.showLineNumbers || false\n  )\n  const [copied, setCopied] = useState(false)\n  const [showSettings, setShowSettings] = useState(false)\n  const codeRef = useRef<HTMLPreElement>(null)\n\n  const handleCopy = useCallback(async () => {\n    if (codeRef.current) {\n      const text = codeRef.current.textContent || ''\n      try {\n        await navigator.clipboard.writeText(text)\n        setCopied(true)\n        setTimeout(() => setCopied(false), 2000)\n      } catch (err) {\n        console.error('Failed to copy text: ', err)\n      }\n    }\n  }, [])\n\n  const handleLanguageChange = (newLanguage: string) => {\n    setLanguage(newLanguage)\n    // TODO: Update the element data in Slate\n  }\n\n  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setCaption(event.target.value)\n    // TODO: Update the element data in Slate\n  }\n\n  const toggleLineNumbers = () => {\n    setShowLineNumbers((prev) => !prev)\n    // TODO: Update the element data in Slate\n  }\n\n  // Generate line numbers\n  const generateLineNumbers = () => {\n    if (!showLineNumbers || !codeRef.current) return null\n\n    const text = codeRef.current.textContent || ''\n    const lines = text.split('\\n')\n\n    return (\n      <div className='flex flex-col text-right text-gray-400 text-sm font-mono leading-6 pr-4 select-none'>\n        {lines.map((_, index) => (\n          <span key={index}>{index + 1}</span>\n        ))}\n      </div>\n    )\n  }\n\n  return (\n    <div\n      {...attributes}\n      className={cn('code-block-container my-4 group', className)}\n    >\n      {/* Header */}\n      <div className='flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-t-lg border-b'>\n        <div className='flex items-center gap-2'>\n          <Code className='h-4 w-4 text-gray-500' />\n          <select\n            contentEditable={false}\n            value={language}\n            onChange={(e) => handleLanguageChange(e.target.value)}\n            className='bg-transparent border-none text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none'\n          >\n            {SUPPORTED_LANGUAGES.map((lang) => (\n              <option key={lang} value={lang}>\n                {lang.charAt(0).toUpperCase() + lang.slice(1)}\n              </option>\n            ))}\n          </select>\n        </div>\n\n        <div className='flex items-center gap-1'>\n          <button\n            contentEditable={false}\n            onClick={() => setShowSettings(!showSettings)}\n            className='p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'\n            title='Settings'\n          >\n            <Settings className='h-4 w-4' />\n          </button>\n\n          <button\n            contentEditable={false}\n            onClick={handleCopy}\n            className='p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'\n            title={copied ? 'Copied!' : 'Copy code'}\n          >\n            {copied ? (\n              <Check className='h-4 w-4 text-green-600' />\n            ) : (\n              <Copy className='h-4 w-4' />\n            )}\n          </button>\n        </div>\n      </div>\n\n      {/* Settings Panel */}\n      {showSettings && (\n        <div className='bg-gray-50 dark:bg-gray-750 px-4 py-3 border-b space-y-2'>\n          <div className='flex items-center gap-2'>\n            <input\n              contentEditable={false}\n              type='checkbox'\n              id='show-line-numbers'\n              checked={showLineNumbers}\n              onChange={toggleLineNumbers}\n              className='rounded'\n            />\n            <label\n              htmlFor='show-line-numbers'\n              className='text-sm text-gray-700 dark:text-gray-300'\n            >\n              Show line numbers\n            </label>\n          </div>\n\n          <input\n            contentEditable={false}\n            type='text'\n            value={caption}\n            onChange={handleCaptionChange}\n            placeholder='Add a caption...'\n            className='w-full text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1'\n          />\n        </div>\n      )}\n\n      {/* Caption */}\n      {caption && (\n        <div className='bg-gray-50 dark:bg-gray-750 px-4 py-2 border-b text-sm text-gray-600 dark:text-gray-400'>\n          {caption}\n        </div>\n      )}\n\n      {/* Code Content */}\n      <div className='relative bg-gray-900 dark:bg-gray-950 rounded-b-lg overflow-x-auto'>\n        <div className='flex'>\n          {/* Line Numbers */}\n          {showLineNumbers && (\n            <div className='bg-gray-800 dark:bg-gray-900 py-4 pl-4'>\n              {generateLineNumbers()}\n            </div>\n          )}\n\n          {/* Code */}\n          <pre\n            ref={codeRef}\n            className={cn(\n              'flex-1 p-4 text-sm font-mono text-gray-100 bg-transparent overflow-visible',\n              'focus:outline-none',\n              showLineNumbers && 'pl-2'\n            )}\n            spellCheck={false}\n          >\n            <code className={`language-${language}`}>{children}</code>\n          </pre>\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport function CodeBlockElement(props: any) {\n  return <CodeBlock {...props} />\n}\n",
              ],
              names: [],
              mappings:
                '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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAEjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC1C;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC1E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;IAC1C;IAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC9B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC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,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;YAMtH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACV,KAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BACrG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAKZ,KAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'dade1056539c258f6f9fa16f958c6fa84aba6876',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'dade1056539c258f6f9fa16f958c6fa84aba6876' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_2di6rljj2b = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2di6rljj2b()
      const SUPPORTED_LANGUAGES =
        (cov_2di6rljj2b().s[0]++,
        [
          'javascript',
          'typescript',
          'python',
          'java',
          'cpp',
          'c',
          'html',
          'css',
          'sql',
          'bash',
          'json',
          'xml',
          'markdown',
          'yaml',
          'go',
          'rust',
          'php',
          'ruby',
          'swift',
          'kotlin',
          'dart',
          'plaintext',
        ])
      function CodeBlock({ attributes, children, element, className }) {
        cov_2di6rljj2b().f[0]++
        const [language, setLanguage] =
            (cov_2di6rljj2b().s[1]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
              (cov_2di6rljj2b().b[0][0]++,
              element.language || (cov_2di6rljj2b().b[0][1]++, 'plaintext'))
            )),
          [caption, setCaption] =
            (cov_2di6rljj2b().s[2]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
              (cov_2di6rljj2b().b[1][0]++,
              element.caption || (cov_2di6rljj2b().b[1][1]++, ''))
            )),
          [showLineNumbers, setShowLineNumbers] =
            (cov_2di6rljj2b().s[3]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
              (cov_2di6rljj2b().b[2][0]++,
              element.showLineNumbers || (cov_2di6rljj2b().b[2][1]++, !1))
            )),
          [copied, setCopied] =
            (cov_2di6rljj2b().s[4]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)),
          [showSettings, setShowSettings] =
            (cov_2di6rljj2b().s[5]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)),
          codeRef =
            (cov_2di6rljj2b().s[6]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)),
          handleCopy =
            (cov_2di6rljj2b().s[7]++,
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
              if (
                (cov_2di6rljj2b().f[1]++,
                cov_2di6rljj2b().s[8]++,
                codeRef.current)
              ) {
                cov_2di6rljj2b().b[3][0]++
                const text =
                  (cov_2di6rljj2b().s[9]++,
                  cov_2di6rljj2b().b[4][0]++,
                  codeRef.current.textContent ||
                    (cov_2di6rljj2b().b[4][1]++, ''))
                cov_2di6rljj2b().s[10]++
                try {
                  ;(cov_2di6rljj2b().s[11]++,
                    await navigator.clipboard.writeText(text),
                    cov_2di6rljj2b().s[12]++,
                    setCopied(!0),
                    cov_2di6rljj2b().s[13]++,
                    setTimeout(
                      () => (
                        cov_2di6rljj2b().f[2]++,
                        cov_2di6rljj2b().s[14]++,
                        setCopied(!1)
                      ),
                      2e3
                    ))
                } catch (err) {
                  ;(cov_2di6rljj2b().s[15]++,
                    console.error('Failed to copy text: ', err))
                }
              } else cov_2di6rljj2b().b[3][1]++
            }, []))
        cov_2di6rljj2b().s[16]++
        cov_2di6rljj2b().s[18]++
        cov_2di6rljj2b().s[20]++
        cov_2di6rljj2b().s[23]++
        return (
          cov_2di6rljj2b().s[30]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            ...attributes,
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              'code-block-container my-4 group',
              className
            ),
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className:
                  'flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-t-lg border-b',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center gap-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,
                          { className: 'h-4 w-4 text-gray-500' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'select',
                          {
                            contentEditable: !1,
                            value: language,
                            onChange: (e) => {
                              return (
                                cov_2di6rljj2b().f[9]++,
                                cov_2di6rljj2b().s[31]++,
                                (newLanguage = e.target.value),
                                cov_2di6rljj2b().f[3]++,
                                cov_2di6rljj2b().s[17]++,
                                void setLanguage(newLanguage)
                              )
                              var newLanguage
                            },
                            className:
                              'bg-transparent border-none text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none',
                            children: SUPPORTED_LANGUAGES.map(
                              (lang) => (
                                cov_2di6rljj2b().f[10]++,
                                cov_2di6rljj2b().s[32]++,
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'option',
                                  {
                                    value: lang,
                                    children:
                                      lang.charAt(0).toUpperCase() +
                                      lang.slice(1),
                                  },
                                  lang
                                )
                              )
                            ),
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center gap-1',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'button',
                          {
                            contentEditable: !1,
                            onClick: () => (
                              cov_2di6rljj2b().f[11]++,
                              cov_2di6rljj2b().s[33]++,
                              setShowSettings(!showSettings)
                            ),
                            className:
                              'p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors',
                            title: 'Settings',
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                              { className: 'h-4 w-4' }
                            ),
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'button',
                          {
                            contentEditable: !1,
                            onClick: handleCopy,
                            className:
                              'p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors',
                            title: copied
                              ? (cov_2di6rljj2b().b[8][0]++, 'Copied!')
                              : (cov_2di6rljj2b().b[8][1]++, 'Copy code'),
                            children: copied
                              ? (cov_2di6rljj2b().b[9][0]++,
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,
                                  { className: 'h-4 w-4 text-green-600' }
                                ))
                              : (cov_2di6rljj2b().b[9][1]++,
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Check_Code_Copy_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
                                  { className: 'h-4 w-4' }
                                )),
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }),
              (cov_2di6rljj2b().b[10][0]++,
              showSettings &&
                (cov_2di6rljj2b().b[10][1]++,
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className:
                      'bg-gray-50 dark:bg-gray-750 px-4 py-3 border-b space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center gap-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'input',
                              {
                                contentEditable: !1,
                                type: 'checkbox',
                                id: 'show-line-numbers',
                                checked: showLineNumbers,
                                onChange: () => {
                                  ;(cov_2di6rljj2b().f[5]++,
                                    cov_2di6rljj2b().s[21]++,
                                    setShowLineNumbers(
                                      (prev) => (
                                        cov_2di6rljj2b().f[6]++,
                                        cov_2di6rljj2b().s[22]++,
                                        !prev
                                      )
                                    ))
                                },
                                className: 'rounded',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'label',
                              {
                                htmlFor: 'show-line-numbers',
                                className:
                                  'text-sm text-gray-700 dark:text-gray-300',
                                children: 'Show line numbers',
                              }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'input',
                        {
                          contentEditable: !1,
                          type: 'text',
                          value: caption,
                          onChange: (event) => {
                            ;(cov_2di6rljj2b().f[4]++,
                              cov_2di6rljj2b().s[19]++,
                              setCaption(event.target.value))
                          },
                          placeholder: 'Add a caption...',
                          className:
                            'w-full text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1',
                        }
                      ),
                    ],
                  }
                ))),
              (cov_2di6rljj2b().b[11][0]++,
              caption &&
                (cov_2di6rljj2b().b[11][1]++,
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'bg-gray-50 dark:bg-gray-750 px-4 py-2 border-b text-sm text-gray-600 dark:text-gray-400',
                  children: caption,
                }))),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className:
                  'relative bg-gray-900 dark:bg-gray-950 rounded-b-lg overflow-x-auto',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex',
                  children: [
                    (cov_2di6rljj2b().b[12][0]++,
                    showLineNumbers &&
                      (cov_2di6rljj2b().b[12][1]++,
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'div',
                        {
                          className: 'bg-gray-800 dark:bg-gray-900 py-4 pl-4',
                          children: (() => {
                            if (
                              (cov_2di6rljj2b().f[7]++,
                              cov_2di6rljj2b().s[24]++,
                              cov_2di6rljj2b().b[6][0]++,
                              !showLineNumbers ||
                                (cov_2di6rljj2b().b[6][1]++, !codeRef.current))
                            )
                              return (
                                cov_2di6rljj2b().b[5][0]++,
                                cov_2di6rljj2b().s[25]++,
                                null
                              )
                            cov_2di6rljj2b().b[5][1]++
                            const text =
                                (cov_2di6rljj2b().s[26]++,
                                cov_2di6rljj2b().b[7][0]++,
                                codeRef.current.textContent ||
                                  (cov_2di6rljj2b().b[7][1]++, '')),
                              lines =
                                (cov_2di6rljj2b().s[27]++, text.split('\n'))
                            return (
                              cov_2di6rljj2b().s[28]++,
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'div',
                                {
                                  className:
                                    'flex flex-col text-right text-gray-400 text-sm font-mono leading-6 pr-4 select-none',
                                  children: lines.map(
                                    (_, index) => (
                                      cov_2di6rljj2b().f[8]++,
                                      cov_2di6rljj2b().s[29]++,
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'span',
                                        { children: index + 1 },
                                        index
                                      )
                                    )
                                  ),
                                }
                              )
                            )
                          })(),
                        }
                      ))),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'pre',
                      {
                        ref: codeRef,
                        className: (0,
                        _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                          'flex-1 p-4 text-sm font-mono text-gray-100 bg-transparent overflow-visible',
                          'focus:outline-none',
                          (cov_2di6rljj2b().b[13][0]++,
                          showLineNumbers &&
                            (cov_2di6rljj2b().b[13][1]++, 'pl-2'))
                        ),
                        spellCheck: !1,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'code',
                          { className: `language-${language}`, children }
                        ),
                      }
                    ),
                  ],
                }),
              }),
            ],
          })
        )
      }
      function CodeBlockElement(props) {
        return (
          cov_2di6rljj2b().f[12]++,
          cov_2di6rljj2b().s[34]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeBlock, {
            ...props,
          })
        )
      }
      ;(cov_2di6rljj2b().s[35]++,
        (CodeBlock.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CodeBlock',
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
                raw: '{\n  type: string\n  language?: string\n  caption?: string\n  showLineNumbers?: boolean\n}',
                signature: {
                  properties: [
                    { key: 'type', value: { name: 'string', required: !0 } },
                    {
                      key: 'language',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'caption', value: { name: 'string', required: !1 } },
                    {
                      key: 'showLineNumbers',
                      value: { name: 'boolean', required: !1 },
                    },
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
        cov_2di6rljj2b().s[36]++,
        (CodeBlockElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CodeBlockElement',
        }))
    },
  },
])
