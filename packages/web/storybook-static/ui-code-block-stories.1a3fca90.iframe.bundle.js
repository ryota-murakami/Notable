/*! For license information please see ui-code-block-stories.1a3fca90.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [6245],
  {
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => createLucideIcon,
        })
        var react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        const mergeClasses = (...classes) =>
          classes
            .filter(
              (className, index, array) =>
                Boolean(className) &&
                '' !== className.trim() &&
                array.indexOf(className) === index
            )
            .join(' ')
            .trim()
        var defaultAttributes = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 24,
          height: 24,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }
        const Icon = (0, react.forwardRef)(
            (
              {
                color = 'currentColor',
                size = 24,
                strokeWidth = 2,
                absoluteStrokeWidth,
                className = '',
                children,
                iconNode,
                ...rest
              },
              ref
            ) =>
              (0, react.createElement)(
                'svg',
                {
                  ref,
                  ...defaultAttributes,
                  width: size,
                  height: size,
                  stroke: color,
                  strokeWidth: absoluteStrokeWidth
                    ? (24 * Number(strokeWidth)) / Number(size)
                    : strokeWidth,
                  className: mergeClasses('lucide', className),
                  ...rest,
                },
                [
                  ...iconNode.map(([tag, attrs]) =>
                    (0, react.createElement)(tag, attrs)
                  ),
                  ...(Array.isArray(children) ? children : [children]),
                ]
              )
          ),
          createLucideIcon = (iconName, iconNode) => {
            const Component = (0, react.forwardRef)(
              ({ className, ...props }, ref) => {
                return (0, react.createElement)(Icon, {
                  ref,
                  iconNode,
                  className: mergeClasses(
                    `lucide-${((string = iconName), string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
                    className
                  ),
                  ...props,
                })
                var string
              }
            )
            return ((Component.displayName = `${iconName}`), Component)
          }
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Check })
        const Check = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Code })
        const Code = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Code', [
          ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
          ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Copy })
        const Copy = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Copy', [
          [
            'rect',
            {
              width: '14',
              height: '14',
              x: '8',
              y: '8',
              rx: '2',
              ry: '2',
              key: '17jyea',
            },
          ],
          [
            'path',
            {
              d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
              key: 'zix9uf',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Settings })
        const Settings = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Settings', [
          [
            'path',
            {
              d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
              key: '1qme2f',
            },
          ],
          ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
        ])
      },
    './components/ui/code-block.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomStyling: () => CustomStyling,
          DarkTheme: () => DarkTheme,
          Default: () => Default,
          InteractiveCopy: () => InteractiveCopy,
          InteractiveSettings: () => InteractiveSettings,
          LanguageSwitch: () => LanguageSwitch,
          LongCode: () => LongCode,
          PlaintextBlock: () => PlaintextBlock,
          ResponsiveLayout: () => ResponsiveLayout,
          SqlExample: () => SqlExample,
          WithAllFeatures: () => WithAllFeatures,
          WithCaption: () => WithCaption,
          WithLanguages: () => WithLanguages,
          WithLineNumbers: () => WithLineNumbers,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _code_block__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__('./components/ui/code-block.tsx')),
        _storybook_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Blocks/CodeBlock',
          component: _code_block__WEBPACK_IMPORTED_MODULE_2__.N,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            element: {
              control: 'object',
              description:
                'Element properties including language, caption, and settings',
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'min-w-[800px] p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        javascriptCode =
          'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// Example usage\nconsole.log(fibonacci(10)); // 55',
        Default = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children: javascriptCode,
          },
        },
        WithLanguages = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children: javascriptCode,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-6',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _code_block__WEBPACK_IMPORTED_MODULE_2__.N,
                  {
                    attributes: {},
                    element: { type: 'code-block', language: 'javascript' },
                    children: javascriptCode,
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _code_block__WEBPACK_IMPORTED_MODULE_2__.N,
                  {
                    attributes: {},
                    element: { type: 'code-block', language: 'python' },
                    children:
                      'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n# Example usage\nprint(fibonacci(10))  # 55',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _code_block__WEBPACK_IMPORTED_MODULE_2__.N,
                  {
                    attributes: {},
                    element: { type: 'code-block', language: 'html' },
                    children:
                      '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Code Block Example</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is a code block example.</p>\n</body>\n</html>',
                  }
                ),
              ],
            }),
        },
        WithLineNumbers = {
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'javascript',
              showLineNumbers: !0,
            },
            children: javascriptCode,
          },
        },
        WithCaption = {
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'javascript',
              caption: 'Fibonacci function implementation in JavaScript',
            },
            children: javascriptCode,
          },
        },
        WithAllFeatures = {
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'python',
              showLineNumbers: !0,
              caption: 'Recursive Fibonacci implementation with memoization',
            },
            children:
              '# Fibonacci with memoization\ndef fibonacci_memo(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    \n    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)\n    return memo[n]\n\n# Performance comparison\nimport time\n\ndef measure_time(func, n):\n    start = time.time()\n    result = func(n)\n    end = time.time()\n    return result, end - start\n\n# Test with n=35\nn = 35\nresult, duration = measure_time(fibonacci_memo, n)\nprint(f"fibonacci_memo({n}) = {result}")\nprint(f"Time taken: {duration:.4f} seconds")',
          },
        },
        PlaintextBlock = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'plaintext' },
            children:
              'This is plain text content.\nNo syntax highlighting applied.\nUseful for logs, output, or generic text.\n\nExample log output:\n[2024-01-15 10:30:45] INFO: Application started\n[2024-01-15 10:30:46] DEBUG: Loading configuration\n[2024-01-15 10:30:47] INFO: Server listening on port 3000',
          },
        },
        LongCode = {
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'typescript',
              showLineNumbers: !0,
              caption: 'Complete TypeScript React component',
            },
            children:
              "import React, { useState, useEffect, useCallback } from 'react'\nimport { Button } from '@/components/ui/button'\nimport { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'\nimport { Input } from '@/components/ui/input'\nimport { Label } from '@/components/ui/label'\nimport { toast } from '@/components/ui/use-toast'\n\ninterface TodoItem {\n  id: string\n  text: string\n  completed: boolean\n  createdAt: Date\n  updatedAt: Date\n}\n\ninterface TodoListProps {\n  initialItems?: TodoItem[]\n  onSave?: (items: TodoItem[]) => void\n  className?: string\n}\n\nexport function TodoList({ initialItems = [], onSave, className }: TodoListProps) {\n  const [items, setItems] = useState<TodoItem[]>(initialItems)\n  const [newItemText, setNewItemText] = useState('')\n  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')\n\n  useEffect(() => {\n    const savedItems = localStorage.getItem('todoItems')\n    if (savedItems) {\n      setItems(JSON.parse(savedItems))\n    }\n  }, [])\n\n  useEffect(() => {\n    localStorage.setItem('todoItems', JSON.stringify(items))\n    onSave?.(items)\n  }, [items, onSave])\n\n  const addItem = useCallback(() => {\n    if (!newItemText.trim()) {\n      toast({\n        title: 'Error',\n        description: 'Please enter some text for the todo item',\n        variant: 'destructive',\n      })\n      return\n    }\n\n    const newItem: TodoItem = {\n      id: Date.now().toString(),\n      text: newItemText,\n      completed: false,\n      createdAt: new Date(),\n      updatedAt: new Date(),\n    }\n\n    setItems([...items, newItem])\n    setNewItemText('')\n    \n    toast({\n      title: 'Success',\n      description: 'Todo item added successfully',\n    })\n  }, [newItemText, items])\n\n  const toggleItem = useCallback((id: string) => {\n    setItems(items.map(item => \n      item.id === id \n        ? { ...item, completed: !item.completed, updatedAt: new Date() }\n        : item\n    ))\n  }, [items])\n\n  const deleteItem = useCallback((id: string) => {\n    setItems(items.filter(item => item.id !== id))\n    toast({\n      title: 'Deleted',\n      description: 'Todo item removed',\n    })\n  }, [items])\n\n  const filteredItems = items.filter(item => {\n    if (filter === 'active') return !item.completed\n    if (filter === 'completed') return item.completed\n    return true\n  })\n\n  return (\n    <Card className={className}>\n      <CardHeader>\n        <CardTitle>Todo List</CardTitle>\n        <CardDescription>\n          Manage your tasks efficiently\n        </CardDescription>\n      </CardHeader>\n      <CardContent>\n        <div className=\"space-y-4\">\n          <div className=\"flex gap-2\">\n            <Input\n              value={newItemText}\n              onChange={(e) => setNewItemText(e.target.value)}\n              onKeyPress={(e) => e.key === 'Enter' && addItem()}\n              placeholder=\"Add a new todo...\"\n            />\n            <Button onClick={addItem}>Add</Button>\n          </div>\n          \n          <div className=\"flex gap-2\">\n            <Button\n              variant={filter === 'all' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('all')}\n            >\n              All ({items.length})\n            </Button>\n            <Button\n              variant={filter === 'active' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('active')}\n            >\n              Active ({items.filter(i => !i.completed).length})\n            </Button>\n            <Button\n              variant={filter === 'completed' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('completed')}\n            >\n              Completed ({items.filter(i => i.completed).length})\n            </Button>\n          </div>\n          \n          <div className=\"space-y-2\">\n            {filteredItems.map(item => (\n              <div key={item.id} className=\"flex items-center gap-2 p-2 border rounded\">\n                <input\n                  type=\"checkbox\"\n                  checked={item.completed}\n                  onChange={() => toggleItem(item.id)}\n                  className=\"h-4 w-4\"\n                />\n                <span className={item.completed ? 'line-through text-gray-500' : ''}>\n                  {item.text}\n                </span>\n                <Button\n                  variant=\"ghost\"\n                  size=\"sm\"\n                  onClick={() => deleteItem(item.id)}\n                  className=\"ml-auto\"\n                >\n                  Delete\n                </Button>\n              </div>\n            ))}\n          </div>\n        </div>\n      </CardContent>\n    </Card>\n  )\n}",
          },
        },
        SqlExample = {
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'sql',
              showLineNumbers: !0,
              caption: 'Complex SQL query with joins and aggregations',
            },
            children:
              "-- Get top customers by order value with product details\nWITH customer_orders AS (\n  SELECT \n    c.customer_id,\n    c.first_name,\n    c.last_name,\n    c.email,\n    COUNT(DISTINCT o.order_id) as total_orders,\n    SUM(od.quantity * p.price) as total_spent,\n    AVG(od.quantity * p.price) as avg_order_value\n  FROM customers c\n  JOIN orders o ON c.customer_id = o.customer_id\n  JOIN order_details od ON o.order_id = od.order_id\n  JOIN products p ON od.product_id = p.product_id\n  WHERE o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)\n    AND o.status = 'completed'\n  GROUP BY c.customer_id, c.first_name, c.last_name, c.email\n)\nSELECT \n  customer_id,\n  CONCAT(first_name, ' ', last_name) as full_name,\n  email,\n  total_orders,\n  ROUND(total_spent, 2) as total_spent,\n  ROUND(avg_order_value, 2) as avg_order_value,\n  CASE \n    WHEN total_spent > 10000 THEN 'Platinum'\n    WHEN total_spent > 5000 THEN 'Gold'\n    WHEN total_spent > 1000 THEN 'Silver'\n    ELSE 'Bronze'\n  END as customer_tier\nFROM customer_orders\nORDER BY total_spent DESC\nLIMIT 20;",
          },
        },
        InteractiveCopy = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children:
              'const message = "Click the copy button to copy this code!";',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const copyButton = canvas.getByTitle('Copy code')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
              copyButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.fm)(
                async () => {
                  await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                    canvas.getByTitle('Copied!')
                  ).toBeInTheDocument()
                }
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.fm)(
                async () => {
                  await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                    canvas.getByTitle('Copy code')
                  ).toBeInTheDocument()
                },
                { timeout: 3e3 }
              ))
          },
        },
        InteractiveSettings = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children: javascriptCode,
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
                canvasElement
              ),
              settingsButton = canvas.getByTitle('Settings')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
              settingsButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByLabelText('Show line numbers')
              ).toBeInTheDocument(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByPlaceholderText('Add a caption...')
              ).toBeInTheDocument())
            const lineNumbersCheckbox =
              canvas.getByLabelText('Show line numbers')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
              lineNumbersCheckbox
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByText('1')
              ).toBeInTheDocument(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByText('2')
              ).toBeInTheDocument())
            const captionInput = canvas.getByPlaceholderText('Add a caption...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.type(
              captionInput,
              'My custom caption'
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
                settingsButton
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByText('My custom caption')
              ).toBeInTheDocument())
          },
        },
        LanguageSwitch = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children: 'console.log("Hello, World!");',
          },
          play: async ({ canvasElement }) => {
            const languageSelect = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
              canvasElement
            ).getByRole('combobox')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.selectOptions(
              languageSelect,
              'python'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                languageSelect
              ).toHaveValue('python'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.selectOptions(
                languageSelect,
                'typescript'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                languageSelect
              ).toHaveValue('typescript'))
          },
        },
        ResponsiveLayout = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'css',
              showLineNumbers: !0,
              caption: 'Responsive CSS grid layout',
            },
            children:
              '.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.card {\n  padding: 2rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}',
          },
        },
        DarkTheme = {
          parameters: { backgrounds: { default: 'dark' } },
          args: {
            attributes: {},
            element: {
              type: 'code-block',
              language: 'javascript',
              showLineNumbers: !0,
            },
            children: javascriptCode,
          },
        },
        CustomStyling = {
          args: {
            attributes: {},
            element: { type: 'code-block', language: 'javascript' },
            children: 'console.log("Custom styled code block");',
            className: 'border-2 border-blue-500 shadow-lg',
          },
        },
        __namedExportsOrder = [
          'Default',
          'WithLanguages',
          'WithLineNumbers',
          'WithCaption',
          'WithAllFeatures',
          'PlaintextBlock',
          'LongCode',
          'SqlExample',
          'InteractiveCopy',
          'InteractiveSettings',
          'LanguageSwitch',
          'ResponsiveLayout',
          'DarkTheme',
          'CustomStyling',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: javascriptCode\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithLanguages.parameters = {
          ...WithLanguages.parameters,
          docs: {
            ...WithLanguages.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: javascriptCode\n  },\n  render: () => <div className='space-y-6'>\n      <CodeBlock attributes={{}} element={{\n      type: 'code-block',\n      language: 'javascript'\n    }}>\n        {javascriptCode}\n      </CodeBlock>\n      <CodeBlock attributes={{}} element={{\n      type: 'code-block',\n      language: 'python'\n    }}>\n        {pythonCode}\n      </CodeBlock>\n      <CodeBlock attributes={{}} element={{\n      type: 'code-block',\n      language: 'html'\n    }}>\n        {htmlCode}\n      </CodeBlock>\n    </div>\n}",
              ...WithLanguages.parameters?.docs?.source,
            },
          },
        }),
        (WithLineNumbers.parameters = {
          ...WithLineNumbers.parameters,
          docs: {
            ...WithLineNumbers.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript',\n      showLineNumbers: true\n    },\n    children: javascriptCode\n  }\n}",
              ...WithLineNumbers.parameters?.docs?.source,
            },
          },
        }),
        (WithCaption.parameters = {
          ...WithCaption.parameters,
          docs: {
            ...WithCaption.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript',\n      caption: 'Fibonacci function implementation in JavaScript'\n    },\n    children: javascriptCode\n  }\n}",
              ...WithCaption.parameters?.docs?.source,
            },
          },
        }),
        (WithAllFeatures.parameters = {
          ...WithAllFeatures.parameters,
          docs: {
            ...WithAllFeatures.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'python',\n      showLineNumbers: true,\n      caption: 'Recursive Fibonacci implementation with memoization'\n    },\n    children: `# Fibonacci with memoization\ndef fibonacci_memo(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    \n    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)\n    return memo[n]\n\n# Performance comparison\nimport time\n\ndef measure_time(func, n):\n    start = time.time()\n    result = func(n)\n    end = time.time()\n    return result, end - start\n\n# Test with n=35\nn = 35\nresult, duration = measure_time(fibonacci_memo, n)\nprint(f\"fibonacci_memo({n}) = {result}\")\nprint(f\"Time taken: {duration:.4f} seconds\")`\n  }\n}",
              ...WithAllFeatures.parameters?.docs?.source,
            },
          },
        }),
        (PlaintextBlock.parameters = {
          ...PlaintextBlock.parameters,
          docs: {
            ...PlaintextBlock.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'plaintext'\n    },\n    children: `This is plain text content.\nNo syntax highlighting applied.\nUseful for logs, output, or generic text.\n\nExample log output:\n[2024-01-15 10:30:45] INFO: Application started\n[2024-01-15 10:30:46] DEBUG: Loading configuration\n[2024-01-15 10:30:47] INFO: Server listening on port 3000`\n  }\n}",
              ...PlaintextBlock.parameters?.docs?.source,
            },
          },
        }),
        (LongCode.parameters = {
          ...LongCode.parameters,
          docs: {
            ...LongCode.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'typescript',\n      showLineNumbers: true,\n      caption: 'Complete TypeScript React component'\n    },\n    children: `import React, { useState, useEffect, useCallback } from 'react'\nimport { Button } from '@/components/ui/button'\nimport { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'\nimport { Input } from '@/components/ui/input'\nimport { Label } from '@/components/ui/label'\nimport { toast } from '@/components/ui/use-toast'\n\ninterface TodoItem {\n  id: string\n  text: string\n  completed: boolean\n  createdAt: Date\n  updatedAt: Date\n}\n\ninterface TodoListProps {\n  initialItems?: TodoItem[]\n  onSave?: (items: TodoItem[]) => void\n  className?: string\n}\n\nexport function TodoList({ initialItems = [], onSave, className }: TodoListProps) {\n  const [items, setItems] = useState<TodoItem[]>(initialItems)\n  const [newItemText, setNewItemText] = useState('')\n  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')\n\n  useEffect(() => {\n    const savedItems = localStorage.getItem('todoItems')\n    if (savedItems) {\n      setItems(JSON.parse(savedItems))\n    }\n  }, [])\n\n  useEffect(() => {\n    localStorage.setItem('todoItems', JSON.stringify(items))\n    onSave?.(items)\n  }, [items, onSave])\n\n  const addItem = useCallback(() => {\n    if (!newItemText.trim()) {\n      toast({\n        title: 'Error',\n        description: 'Please enter some text for the todo item',\n        variant: 'destructive',\n      })\n      return\n    }\n\n    const newItem: TodoItem = {\n      id: Date.now().toString(),\n      text: newItemText,\n      completed: false,\n      createdAt: new Date(),\n      updatedAt: new Date(),\n    }\n\n    setItems([...items, newItem])\n    setNewItemText('')\n    \n    toast({\n      title: 'Success',\n      description: 'Todo item added successfully',\n    })\n  }, [newItemText, items])\n\n  const toggleItem = useCallback((id: string) => {\n    setItems(items.map(item => \n      item.id === id \n        ? { ...item, completed: !item.completed, updatedAt: new Date() }\n        : item\n    ))\n  }, [items])\n\n  const deleteItem = useCallback((id: string) => {\n    setItems(items.filter(item => item.id !== id))\n    toast({\n      title: 'Deleted',\n      description: 'Todo item removed',\n    })\n  }, [items])\n\n  const filteredItems = items.filter(item => {\n    if (filter === 'active') return !item.completed\n    if (filter === 'completed') return item.completed\n    return true\n  })\n\n  return (\n    <Card className={className}>\n      <CardHeader>\n        <CardTitle>Todo List</CardTitle>\n        <CardDescription>\n          Manage your tasks efficiently\n        </CardDescription>\n      </CardHeader>\n      <CardContent>\n        <div className=\"space-y-4\">\n          <div className=\"flex gap-2\">\n            <Input\n              value={newItemText}\n              onChange={(e) => setNewItemText(e.target.value)}\n              onKeyPress={(e) => e.key === 'Enter' && addItem()}\n              placeholder=\"Add a new todo...\"\n            />\n            <Button onClick={addItem}>Add</Button>\n          </div>\n          \n          <div className=\"flex gap-2\">\n            <Button\n              variant={filter === 'all' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('all')}\n            >\n              All ({items.length})\n            </Button>\n            <Button\n              variant={filter === 'active' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('active')}\n            >\n              Active ({items.filter(i => !i.completed).length})\n            </Button>\n            <Button\n              variant={filter === 'completed' ? 'default' : 'outline'}\n              size=\"sm\"\n              onClick={() => setFilter('completed')}\n            >\n              Completed ({items.filter(i => i.completed).length})\n            </Button>\n          </div>\n          \n          <div className=\"space-y-2\">\n            {filteredItems.map(item => (\n              <div key={item.id} className=\"flex items-center gap-2 p-2 border rounded\">\n                <input\n                  type=\"checkbox\"\n                  checked={item.completed}\n                  onChange={() => toggleItem(item.id)}\n                  className=\"h-4 w-4\"\n                />\n                <span className={item.completed ? 'line-through text-gray-500' : ''}>\n                  {item.text}\n                </span>\n                <Button\n                  variant=\"ghost\"\n                  size=\"sm\"\n                  onClick={() => deleteItem(item.id)}\n                  className=\"ml-auto\"\n                >\n                  Delete\n                </Button>\n              </div>\n            ))}\n          </div>\n        </div>\n      </CardContent>\n    </Card>\n  )\n}`\n  }\n}",
              ...LongCode.parameters?.docs?.source,
            },
          },
        }),
        (SqlExample.parameters = {
          ...SqlExample.parameters,
          docs: {
            ...SqlExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'sql',\n      showLineNumbers: true,\n      caption: 'Complex SQL query with joins and aggregations'\n    },\n    children: `-- Get top customers by order value with product details\nWITH customer_orders AS (\n  SELECT \n    c.customer_id,\n    c.first_name,\n    c.last_name,\n    c.email,\n    COUNT(DISTINCT o.order_id) as total_orders,\n    SUM(od.quantity * p.price) as total_spent,\n    AVG(od.quantity * p.price) as avg_order_value\n  FROM customers c\n  JOIN orders o ON c.customer_id = o.customer_id\n  JOIN order_details od ON o.order_id = od.order_id\n  JOIN products p ON od.product_id = p.product_id\n  WHERE o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)\n    AND o.status = 'completed'\n  GROUP BY c.customer_id, c.first_name, c.last_name, c.email\n)\nSELECT \n  customer_id,\n  CONCAT(first_name, ' ', last_name) as full_name,\n  email,\n  total_orders,\n  ROUND(total_spent, 2) as total_spent,\n  ROUND(avg_order_value, 2) as avg_order_value,\n  CASE \n    WHEN total_spent > 10000 THEN 'Platinum'\n    WHEN total_spent > 5000 THEN 'Gold'\n    WHEN total_spent > 1000 THEN 'Silver'\n    ELSE 'Bronze'\n  END as customer_tier\nFROM customer_orders\nORDER BY total_spent DESC\nLIMIT 20;`\n  }\n}",
              ...SqlExample.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveCopy.parameters = {
          ...InteractiveCopy.parameters,
          docs: {
            ...InteractiveCopy.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: 'const message = \"Click the copy button to copy this code!\";'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Find and click copy button\n    const copyButton = canvas.getByTitle('Copy code');\n    await userEvent.click(copyButton);\n\n    // Should show check icon\n    await waitFor(async () => {\n      await expect(canvas.getByTitle('Copied!')).toBeInTheDocument();\n    });\n\n    // Should revert after 2 seconds\n    await waitFor(async () => {\n      await expect(canvas.getByTitle('Copy code')).toBeInTheDocument();\n    }, {\n      timeout: 3000\n    });\n  }\n}",
              ...InteractiveCopy.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveSettings.parameters = {
          ...InteractiveSettings.parameters,
          docs: {
            ...InteractiveSettings.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: javascriptCode\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Click settings button\n    const settingsButton = canvas.getByTitle('Settings');\n    await userEvent.click(settingsButton);\n\n    // Settings panel should appear\n    await expect(canvas.getByLabelText('Show line numbers')).toBeInTheDocument();\n    await expect(canvas.getByPlaceholderText('Add a caption...')).toBeInTheDocument();\n\n    // Toggle line numbers\n    const lineNumbersCheckbox = canvas.getByLabelText('Show line numbers');\n    await userEvent.click(lineNumbersCheckbox);\n\n    // Line numbers should appear\n    await expect(canvas.getByText('1')).toBeInTheDocument();\n    await expect(canvas.getByText('2')).toBeInTheDocument();\n\n    // Add caption\n    const captionInput = canvas.getByPlaceholderText('Add a caption...');\n    await userEvent.type(captionInput, 'My custom caption');\n\n    // Click settings again to close\n    await userEvent.click(settingsButton);\n\n    // Caption should be visible\n    await expect(canvas.getByText('My custom caption')).toBeInTheDocument();\n  }\n}",
              ...InteractiveSettings.parameters?.docs?.source,
            },
          },
        }),
        (LanguageSwitch.parameters = {
          ...LanguageSwitch.parameters,
          docs: {
            ...LanguageSwitch.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: 'console.log(\"Hello, World!\");'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find language selector\n    const languageSelect = canvas.getByRole('combobox');\n\n    // Change language to Python\n    await userEvent.selectOptions(languageSelect, 'python');\n\n    // Should show Python selected\n    await expect(languageSelect).toHaveValue('python');\n\n    // Change to TypeScript\n    await userEvent.selectOptions(languageSelect, 'typescript');\n\n    // Should show TypeScript selected\n    await expect(languageSelect).toHaveValue('typescript');\n  }\n}",
              ...LanguageSwitch.parameters?.docs?.source,
            },
          },
        }),
        (ResponsiveLayout.parameters = {
          ...ResponsiveLayout.parameters,
          docs: {
            ...ResponsiveLayout.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'css',\n      showLineNumbers: true,\n      caption: 'Responsive CSS grid layout'\n    },\n    children: cssCode\n  }\n}",
              ...ResponsiveLayout.parameters?.docs?.source,
            },
          },
        }),
        (DarkTheme.parameters = {
          ...DarkTheme.parameters,
          docs: {
            ...DarkTheme.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript',\n      showLineNumbers: true\n    },\n    children: javascriptCode\n  }\n}",
              ...DarkTheme.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'code-block',\n      language: 'javascript'\n    },\n    children: 'console.log(\"Custom styled code block\");',\n    className: 'border-2 border-blue-500 shadow-lg'\n  }\n}",
              ...CustomStyling.parameters?.docs?.source,
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
