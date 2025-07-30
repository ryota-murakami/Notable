/*! For license information please see ui-toggle-block-stories.5b2829b0.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7902],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
        const ChevronDown = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronRight })
        const ChevronRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
      },
    './components/ui/toggle-block.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AnimatedTransition: () => AnimatedTransition,
          CustomStyling: () => CustomStyling,
          Default: () => Default,
          EditableTitle: () => EditableTitle,
          EmptyTitle: () => EmptyTitle,
          FAQ: () => FAQ,
          InteractiveToggle: () => InteractiveToggle,
          KeyboardAccessible: () => KeyboardAccessible,
          MultipleToggles: () => MultipleToggles,
          NestedContent: () => NestedContent,
          OpenByDefault: () => OpenByDefault,
          ResponsiveDesign: () => ResponsiveDesign,
          WithLongContent: () => WithLongContent,
          WithoutTitle: () => WithoutTitle,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _toggle_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/ui/toggle-block.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Blocks/ToggleBlock',
          component: _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            element: {
              control: 'object',
              description: 'Element properties including open state and title',
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'min-w-[600px] p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Default = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1, title: 'Click to expand' },
            children: 'This is the hidden content inside the toggle block.',
          },
        },
        OpenByDefault = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !0, title: 'Expanded toggle' },
            children: 'This content is visible by default.',
          },
        },
        WithoutTitle = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1 },
            children: 'Toggle block without initial title.',
          },
        },
        WithLongContent = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !0, title: 'Documentation' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h3',
                    { children: 'Getting Started' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'This toggle block contains extensive documentation. Toggle blocks are perfect for organizing large amounts of content in a collapsible format.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Features' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'ul',
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Collapsible content sections' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Customizable titles' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Smooth expand/collapse animations' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Keyboard accessible' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Mobile friendly' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Usage' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'Click the chevron icon or press Enter when focused on the toggle button to expand or collapse the content. The title can be edited inline.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Best Practices' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'ol',
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          {
                            children:
                              'Use descriptive titles that indicate the content',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Keep related content together' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          {
                            children:
                              'Consider the default state (open/closed)',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: "Don't nest toggle blocks too deeply" }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
          },
        },
        MultipleToggles = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1, title: 'Toggle Block' },
            children: 'Toggle content',
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'Introduction',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      children:
                        'Welcome to our comprehensive guide. This section covers the basic concepts and getting started information.',
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !0,
                      title: 'Installation',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('pre', {
                      className: 'bg-gray-100 p-3 rounded',
                      children:
                        'npm install @notable/toggle-block\n# or\nyarn add @notable/toggle-block',
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'API Reference',
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h4',
                        { children: 'Props' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'ul',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'li',
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'code',
                                    { children: 'open' }
                                  ),
                                  ': Initial open state',
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'li',
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'code',
                                    { children: 'title' }
                                  ),
                                  ': Toggle block title',
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'li',
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'code',
                                    { children: 'children' }
                                  ),
                                  ': Content to display when expanded',
                                ],
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: { type: 'toggle', open: !1, title: 'Examples' },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          children:
                            'Here are some practical examples of using toggle blocks:',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'ul',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'li',
                              { children: 'FAQ sections' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'li',
                              { children: 'Documentation chapters' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'li',
                              { children: 'Code examples' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'li',
                              { children: 'Troubleshooting guides' }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        NestedContent = {
          args: {
            attributes: {},
            element: {
              type: 'toggle',
              open: !0,
              title: 'Complex nested content',
            },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h3',
                    { children: 'Main Section' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children: 'This toggle contains various types of content:',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Code Example' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'pre',
                    {
                      className:
                        'bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'code',
                        {
                          children:
                            'function calculateSum(numbers) {\n  return numbers.reduce((sum, num) => sum + num, 0);\n}\n\nconst result = calculateSum([1, 2, 3, 4, 5]);\nconsole.log(result); // 15',
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Table Data' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'table',
                    {
                      className: 'w-full border-collapse',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'thead',
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'tr',
                              {
                                className: 'border-b',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'th',
                                    {
                                      className: 'text-left p-2',
                                      children: 'Feature',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'th',
                                    {
                                      className: 'text-left p-2',
                                      children: 'Status',
                                    }
                                  ),
                                ],
                              }
                            ),
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'tbody',
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'tr',
                                {
                                  className: 'border-b',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2',
                                        children: 'Collapse/Expand',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2 text-green-600',
                                        children: '✓ Supported',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'tr',
                                {
                                  className: 'border-b',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2',
                                        children: 'Custom Title',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2 text-green-600',
                                        children: '✓ Supported',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'tr',
                                {
                                  className: 'border-b',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2',
                                        children: 'Nested Content',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'td',
                                      {
                                        className: 'p-2 text-green-600',
                                        children: '✓ Supported',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    { children: 'Image Example' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'div',
                    {
                      className:
                        'bg-gray-200 p-8 rounded text-center text-gray-500',
                      children: '[Image placeholder]',
                    }
                  ),
                ],
              }
            ),
          },
        },
        FAQ = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1, title: 'FAQ Item' },
            children: 'FAQ answer',
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-3',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                  className: 'text-xl font-bold mb-4',
                  children: 'Frequently Asked Questions',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'What is a toggle block?',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      children:
                        "A toggle block is a UI component that allows you to show or hide content with a click. It's useful for organizing information and reducing visual clutter.",
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'How do I customize the appearance?',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      children:
                        "You can customize the toggle block by passing a className prop or by modifying the component's CSS. The component uses Tailwind classes that can be overridden.",
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'Is it accessible?',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      children:
                        'Yes! The toggle block includes proper ARIA attributes, keyboard navigation support, and follows accessibility best practices.',
                    }),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                  {
                    attributes: {},
                    element: {
                      type: 'toggle',
                      open: !1,
                      title: 'Can I nest toggle blocks?',
                    },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      children:
                        'While technically possible, we recommend avoiding deeply nested toggle blocks as they can create a confusing user experience. Keep your content hierarchy simple.',
                    }),
                  }
                ),
              ],
            }),
        },
        InteractiveToggle = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1, title: 'Click to toggle' },
            children: 'This content will be shown when you click the toggle.',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
                canvasElement
              ),
              toggleButton = canvas.getByRole('button')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
              toggleButton
            ).toHaveAttribute('aria-expanded', 'false'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
                toggleButton
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                toggleButton
              ).toHaveAttribute('aria-expanded', 'true'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                canvas.getByText(
                  'This content will be shown when you click the toggle.'
                )
              ).toBeInTheDocument(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
                toggleButton
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                toggleButton
              ).toHaveAttribute('aria-expanded', 'false'))
          },
        },
        EditableTitle = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !0, title: 'Edit this title' },
            children: 'The title above is editable. Click on it to change.',
          },
          play: async ({ canvasElement }) => {
            const titleInput = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
              canvasElement
            ).getByDisplayValue('Edit this title')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.clear(
              titleInput
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.type(
                titleInput,
                'My Custom Title'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                titleInput
              ).toHaveValue('My Custom Title'))
          },
        },
        EmptyTitle = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1 },
            children: 'Toggle with empty title',
          },
          play: async ({ canvasElement }) => {
            const titleInput = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
              canvasElement
            ).getByPlaceholderText('Toggle title...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.type(
              titleInput,
              'New Section Title'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                titleInput
              ).toHaveValue('New Section Title'))
          },
        },
        KeyboardAccessible = {
          args: {
            attributes: {},
            element: {
              type: 'toggle',
              open: !1,
              title: 'Keyboard accessible toggle',
            },
            children: 'Use Tab to focus and Enter/Space to toggle.',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
              canvasElement
            )
            await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.tab()
            const toggleButton = canvas.getByRole('button')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
              toggleButton
            ).toHaveFocus(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.keyboard(
                '{Enter}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                toggleButton
              ).toHaveAttribute('aria-expanded', 'true'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.keyboard(
                ' '
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
                toggleButton
              ).toHaveAttribute('aria-expanded', 'false'))
          },
        },
        ResponsiveDesign = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: {
            attributes: {},
            element: {
              type: 'toggle',
              open: !0,
              title: 'Mobile responsive toggle',
            },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'This toggle block is optimized for mobile devices.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'The content reflows properly and all interactive elements remain easily tappable on touch devices.',
                  }),
                ],
              }
            ),
          },
        },
        CustomStyling = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !0, title: 'Styled toggle block' },
            children: 'This toggle has custom styling applied.',
            className: 'border-2 border-blue-500 shadow-lg',
          },
        },
        AnimatedTransition = {
          args: {
            attributes: {},
            element: { type: 'toggle', open: !1, title: 'Animated Toggle' },
            children: 'Toggle content',
          },
          render: () => {
            const [isOpen, setIsOpen] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'mb-4 text-sm text-gray-600',
                    children: 'Click the toggle to see the smooth transition',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'div',
                    {
                      className: 'transition-all duration-300 ease-in-out',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _toggle_block__WEBPACK_IMPORTED_MODULE_2__.I,
                        {
                          attributes: {},
                          element: {
                            type: 'toggle',
                            open: isOpen,
                            title: 'Smooth animation example',
                          },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: 'transition-all duration-300',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'p',
                                  {
                                    children:
                                      'This content appears with a smooth animation.',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'p',
                                  {
                                    children:
                                      'The transition makes the UI feel more polished.',
                                  }
                                ),
                              ],
                            }
                          ),
                        }
                      ),
                    }
                  ),
                ],
              }
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'OpenByDefault',
          'WithoutTitle',
          'WithLongContent',
          'MultipleToggles',
          'NestedContent',
          'FAQ',
          'InteractiveToggle',
          'EditableTitle',
          'EmptyTitle',
          'KeyboardAccessible',
          'ResponsiveDesign',
          'CustomStyling',
          'AnimatedTransition',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'Click to expand'\n    },\n    children: 'This is the hidden content inside the toggle block.'\n  }\n}",
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
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Expanded toggle'\n    },\n    children: 'This content is visible by default.'\n  }\n}",
              ...OpenByDefault.parameters?.docs?.source,
            },
          },
        }),
        (WithoutTitle.parameters = {
          ...WithoutTitle.parameters,
          docs: {
            ...WithoutTitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false\n    },\n    children: 'Toggle block without initial title.'\n  }\n}",
              ...WithoutTitle.parameters?.docs?.source,
            },
          },
        }),
        (WithLongContent.parameters = {
          ...WithLongContent.parameters,
          docs: {
            ...WithLongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Documentation'\n    },\n    children: <div>\n        <h3>Getting Started</h3>\n        <p>\n          This toggle block contains extensive documentation. Toggle blocks are\n          perfect for organizing large amounts of content in a collapsible\n          format.\n        </p>\n        <h4>Features</h4>\n        <ul>\n          <li>Collapsible content sections</li>\n          <li>Customizable titles</li>\n          <li>Smooth expand/collapse animations</li>\n          <li>Keyboard accessible</li>\n          <li>Mobile friendly</li>\n        </ul>\n        <h4>Usage</h4>\n        <p>\n          Click the chevron icon or press Enter when focused on the toggle\n          button to expand or collapse the content. The title can be edited\n          inline.\n        </p>\n        <h4>Best Practices</h4>\n        <ol>\n          <li>Use descriptive titles that indicate the content</li>\n          <li>Keep related content together</li>\n          <li>Consider the default state (open/closed)</li>\n          <li>Don't nest toggle blocks too deeply</li>\n        </ol>\n      </div>\n  }\n}",
              ...WithLongContent.parameters?.docs?.source,
            },
          },
        }),
        (MultipleToggles.parameters = {
          ...MultipleToggles.parameters,
          docs: {
            ...MultipleToggles.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'Toggle Block'\n    },\n    children: 'Toggle content'\n  },\n  render: () => <div className='space-y-4'>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'Introduction'\n    }}>\n        <p>\n          Welcome to our comprehensive guide. This section covers the basic\n          concepts and getting started information.\n        </p>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: true,\n      title: 'Installation'\n    }}>\n        <pre className='bg-gray-100 p-3 rounded'>\n          {`npm install @notable/toggle-block\n# or\nyarn add @notable/toggle-block`}\n        </pre>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'API Reference'\n    }}>\n        <h4>Props</h4>\n        <ul>\n          <li>\n            <code>open</code>: Initial open state\n          </li>\n          <li>\n            <code>title</code>: Toggle block title\n          </li>\n          <li>\n            <code>children</code>: Content to display when expanded\n          </li>\n        </ul>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'Examples'\n    }}>\n        <p>Here are some practical examples of using toggle blocks:</p>\n        <ul>\n          <li>FAQ sections</li>\n          <li>Documentation chapters</li>\n          <li>Code examples</li>\n          <li>Troubleshooting guides</li>\n        </ul>\n      </ToggleBlock>\n    </div>\n}",
              ...MultipleToggles.parameters?.docs?.source,
            },
          },
        }),
        (NestedContent.parameters = {
          ...NestedContent.parameters,
          docs: {
            ...NestedContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Complex nested content'\n    },\n    children: <div>\n        <h3>Main Section</h3>\n        <p>This toggle contains various types of content:</p>\n\n        <h4>Code Example</h4>\n        <pre className='bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto'>\n          <code>{`function calculateSum(numbers) {\n  return numbers.reduce((sum, num) => sum + num, 0);\n}\n\nconst result = calculateSum([1, 2, 3, 4, 5]);\nconsole.log(result); // 15`}</code>\n        </pre>\n\n        <h4>Table Data</h4>\n        <table className='w-full border-collapse'>\n          <thead>\n            <tr className='border-b'>\n              <th className='text-left p-2'>Feature</th>\n              <th className='text-left p-2'>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr className='border-b'>\n              <td className='p-2'>Collapse/Expand</td>\n              <td className='p-2 text-green-600'>✓ Supported</td>\n            </tr>\n            <tr className='border-b'>\n              <td className='p-2'>Custom Title</td>\n              <td className='p-2 text-green-600'>✓ Supported</td>\n            </tr>\n            <tr className='border-b'>\n              <td className='p-2'>Nested Content</td>\n              <td className='p-2 text-green-600'>✓ Supported</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h4>Image Example</h4>\n        <div className='bg-gray-200 p-8 rounded text-center text-gray-500'>\n          [Image placeholder]\n        </div>\n      </div>\n  }\n}",
              ...NestedContent.parameters?.docs?.source,
            },
          },
        }),
        (FAQ.parameters = {
          ...FAQ.parameters,
          docs: {
            ...FAQ.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'FAQ Item'\n    },\n    children: 'FAQ answer'\n  },\n  render: () => <div className='space-y-3'>\n      <h2 className='text-xl font-bold mb-4'>Frequently Asked Questions</h2>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'What is a toggle block?'\n    }}>\n        <p>\n          A toggle block is a UI component that allows you to show or hide\n          content with a click. It's useful for organizing information and\n          reducing visual clutter.\n        </p>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'How do I customize the appearance?'\n    }}>\n        <p>\n          You can customize the toggle block by passing a className prop or by\n          modifying the component's CSS. The component uses Tailwind classes\n          that can be overridden.\n        </p>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'Is it accessible?'\n    }}>\n        <p>\n          Yes! The toggle block includes proper ARIA attributes, keyboard\n          navigation support, and follows accessibility best practices.\n        </p>\n      </ToggleBlock>\n      <ToggleBlock attributes={{}} element={{\n      type: 'toggle',\n      open: false,\n      title: 'Can I nest toggle blocks?'\n    }}>\n        <p>\n          While technically possible, we recommend avoiding deeply nested toggle\n          blocks as they can create a confusing user experience. Keep your\n          content hierarchy simple.\n        </p>\n      </ToggleBlock>\n    </div>\n}",
              ...FAQ.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveToggle.parameters = {
          ...InteractiveToggle.parameters,
          docs: {
            ...InteractiveToggle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'Click to toggle'\n    },\n    children: 'This content will be shown when you click the toggle.'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find toggle button\n    const toggleButton = canvas.getByRole('button');\n\n    // Should be closed initially\n    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');\n\n    // Click to open\n    await userEvent.click(toggleButton);\n\n    // Should be open\n    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');\n\n    // Content should be visible\n    await expect(canvas.getByText('This content will be shown when you click the toggle.')).toBeInTheDocument();\n\n    // Click to close\n    await userEvent.click(toggleButton);\n\n    // Should be closed\n    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');\n  }\n}",
              ...InteractiveToggle.parameters?.docs?.source,
            },
          },
        }),
        (EditableTitle.parameters = {
          ...EditableTitle.parameters,
          docs: {
            ...EditableTitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Edit this title'\n    },\n    children: 'The title above is editable. Click on it to change.'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find title input\n    const titleInput = canvas.getByDisplayValue('Edit this title');\n\n    // Clear and type new title\n    await userEvent.clear(titleInput);\n    await userEvent.type(titleInput, 'My Custom Title');\n\n    // Should show new title\n    await expect(titleInput).toHaveValue('My Custom Title');\n  }\n}",
              ...EditableTitle.parameters?.docs?.source,
            },
          },
        }),
        (EmptyTitle.parameters = {
          ...EmptyTitle.parameters,
          docs: {
            ...EmptyTitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false\n    },\n    children: 'Toggle with empty title'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find title input by placeholder\n    const titleInput = canvas.getByPlaceholderText('Toggle title...');\n\n    // Type a title\n    await userEvent.type(titleInput, 'New Section Title');\n\n    // Should show typed title\n    await expect(titleInput).toHaveValue('New Section Title');\n  }\n}",
              ...EmptyTitle.parameters?.docs?.source,
            },
          },
        }),
        (KeyboardAccessible.parameters = {
          ...KeyboardAccessible.parameters,
          docs: {
            ...KeyboardAccessible.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'Keyboard accessible toggle'\n    },\n    children: 'Use Tab to focus and Enter/Space to toggle.'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Tab to focus on toggle button\n    await userEvent.tab();\n\n    // The toggle button should be focused\n    const toggleButton = canvas.getByRole('button');\n    await expect(toggleButton).toHaveFocus();\n\n    // Press Enter to toggle\n    await userEvent.keyboard('{Enter}');\n\n    // Should be open\n    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');\n\n    // Press Space to toggle\n    await userEvent.keyboard(' ');\n\n    // Should be closed\n    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');\n  }\n}",
              ...KeyboardAccessible.parameters?.docs?.source,
            },
          },
        }),
        (ResponsiveDesign.parameters = {
          ...ResponsiveDesign.parameters,
          docs: {
            ...ResponsiveDesign.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Mobile responsive toggle'\n    },\n    children: <div>\n        <p>This toggle block is optimized for mobile devices.</p>\n        <p>\n          The content reflows properly and all interactive elements remain\n          easily tappable on touch devices.\n        </p>\n      </div>\n  }\n}",
              ...ResponsiveDesign.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: true,\n      title: 'Styled toggle block'\n    },\n    children: 'This toggle has custom styling applied.',\n    className: 'border-2 border-blue-500 shadow-lg'\n  }\n}",
              ...CustomStyling.parameters?.docs?.source,
            },
          },
        }),
        (AnimatedTransition.parameters = {
          ...AnimatedTransition.parameters,
          docs: {
            ...AnimatedTransition.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'toggle',\n      open: false,\n      title: 'Animated Toggle'\n    },\n    children: 'Toggle content'\n  },\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\n        <p className='mb-4 text-sm text-gray-600'>\n          Click the toggle to see the smooth transition\n        </p>\n        <div className='transition-all duration-300 ease-in-out'>\n          <ToggleBlock attributes={{}} element={{\n          type: 'toggle',\n          open: isOpen,\n          title: 'Smooth animation example'\n        }}>\n            <div className='transition-all duration-300'>\n              <p>This content appears with a smooth animation.</p>\n              <p>The transition makes the UI feel more polished.</p>\n            </div>\n          </ToggleBlock>\n        </div>\n      </div>;\n  }\n}",
              ...AnimatedTransition.parameters?.docs?.source,
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
