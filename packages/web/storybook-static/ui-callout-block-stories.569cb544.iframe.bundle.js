/*! For license information please see ui-callout-block-stories.569cb544.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [8622],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CircleAlert })
        const CircleAlert = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleAlert', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
          [
            'line',
            { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check-big.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CircleCheckBig })
        const CircleCheckBig = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleCheckBig', [
          ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
          ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-x.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CircleX })
        const CircleX = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleX', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
          ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Info })
        const Info = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Info', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['path', { d: 'M12 16v-4', key: '1dtifu' }],
          ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lightbulb.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Lightbulb })
        const Lightbulb = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Lightbulb', [
          [
            'path',
            {
              d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
              key: '1gvzjb',
            },
          ],
          ['path', { d: 'M9 18h6', key: 'x1upvd' }],
          ['path', { d: 'M10 22h4', key: 'ceow96' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Quote })
        const Quote = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Quote', [
          [
            'path',
            {
              d: 'M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: 'rib7q0',
            },
          ],
          [
            'path',
            {
              d: 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: '1ymkrd',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-alert.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => TriangleAlert })
        const TriangleAlert = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('TriangleAlert', [
          [
            'path',
            {
              d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
              key: 'wmoenq',
            },
          ],
          ['path', { d: 'M12 9v4', key: 'juzpu7' }],
          ['path', { d: 'M12 17h.01', key: 'p32p05' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Zap })
        const Zap = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Zap', [
          [
            'path',
            {
              d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
              key: '1xq2db',
            },
          ],
        ])
      },
    './components/ui/callout-block.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllTypes: () => AllTypes,
          CalloutElementWrapper: () => CalloutElementWrapper,
          CustomStyling: () => CustomStyling,
          Default: () => Default,
          Interactive: () => Interactive,
          NestedContent: () => NestedContent,
          Playground: () => Playground,
          WithLongContent: () => WithLongContent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _callout_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/ui/callout-block.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/UI/CalloutBlock',
          component: _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
          parameters: { layout: 'padded' },
          tags: ['autodocs'],
          argTypes: { className: { control: { type: 'text' } } },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { maxWidth: '800px', margin: '0 auto' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        MockChildren = ({ text }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
            children: text,
          }),
        Default = {
          args: {
            attributes: {},
            element: { type: 'callout', calloutType: 'info' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              MockChildren,
              {
                text: 'This is an informational callout. It provides helpful information to the reader.',
              }
            ),
          },
        },
        AllTypes = {
          args: {
            attributes: {},
            element: { type: 'callout' },
            children: null,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: { display: 'flex', flexDirection: 'column', gap: '20px' },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'info' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Info: This provides general information or tips.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'warning' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Warning: This alerts users to potential issues or important considerations.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'success' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Success: This indicates successful operations or positive outcomes.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'error' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Error: This highlights errors or critical problems that need attention.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'tip' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Tip: This provides helpful suggestions or best practices.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'note' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Note: This adds supplementary information or clarifications.',
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'important' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: "Important: This emphasizes crucial information that shouldn't be missed.",
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                  {
                    attributes: {},
                    element: { type: 'callout', calloutType: 'quote' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      MockChildren,
                      {
                        text: 'Quote: This formats content as a notable quote or excerpt.',
                      }
                    ),
                  }
                ),
              ],
            }),
        },
        WithLongContent = {
          args: {
            attributes: {},
            element: { type: 'callout', calloutType: 'tip' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'This is a tip with multiple paragraphs of content.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'You can include multiple lines and even formatted text within a callout block. This makes it perfect for providing detailed explanations or multi-step instructions.',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'The callout will expand to accommodate all the content while maintaining proper spacing and readability.',
                  }),
                ],
              }
            ),
          },
        },
        Interactive = {
          args: {
            attributes: {},
            element: { type: 'callout', calloutType: 'info' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              MockChildren,
              {
                text: 'Try changing the callout type using the dropdown, or click the icon to toggle between emoji and icon display.',
              }
            ),
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.ux)(
                canvasElement
              ),
              typeSelector = canvas.getByRole('combobox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_3__.E3)(
              typeSelector
            ).toBeVisible(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.selectOptions(
                typeSelector,
                'warning'
              ))
            const toggleButton = canvas.getByTitle(
              'Toggle between emoji and icon'
            )
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
              toggleButton
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.Q4.click(
                toggleButton
              ))
          },
        },
        CustomStyling = {
          args: {
            attributes: {},
            element: { type: 'callout', calloutType: 'note' },
            className: 'shadow-lg',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              MockChildren,
              {
                text: 'This callout has custom styling applied through the className prop.',
              }
            ),
          },
        },
        Playground = {
          args: {
            attributes: {},
            element: { type: 'callout' },
            children: null,
          },
          render: () => {
            const [selectedType, setSelectedType] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState('info'),
              [showEmoji, setShowEmoji] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState(!0)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      style: {
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f3f4f6',
                        borderRadius: '8px',
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h3',
                          {
                            style: { marginTop: 0 },
                            children: 'Callout Configuration',
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            style: {
                              display: 'flex',
                              gap: '20px',
                              alignItems: 'center',
                            },
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'label',
                                {
                                  children: [
                                    'Type:',
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                      'select',
                                      {
                                        value: selectedType,
                                        onChange: (e) =>
                                          setSelectedType(e.target.value),
                                        style: {
                                          marginLeft: '10px',
                                          padding: '5px',
                                        },
                                        children: [
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            { value: 'info', children: 'Info' }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            {
                                              value: 'warning',
                                              children: 'Warning',
                                            }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            {
                                              value: 'success',
                                              children: 'Success',
                                            }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            {
                                              value: 'error',
                                              children: 'Error',
                                            }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            { value: 'tip', children: 'Tip' }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            { value: 'note', children: 'Note' }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            {
                                              value: 'important',
                                              children: 'Important',
                                            }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'option',
                                            {
                                              value: 'quote',
                                              children: 'Quote',
                                            }
                                          ),
                                        ],
                                      }
                                    ),
                                  ],
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'label',
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'input',
                                      {
                                        type: 'checkbox',
                                        checked: showEmoji,
                                        onChange: (e) =>
                                          setShowEmoji(e.target.checked),
                                      }
                                    ),
                                    ' ',
                                    'Show Emoji (vs Icon)',
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
                    _callout_block__WEBPACK_IMPORTED_MODULE_2__.S,
                    {
                      attributes: {},
                      element: {
                        type: 'callout',
                        calloutType: selectedType,
                        emoji: showEmoji ? void 0 : '🚀',
                      },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'p',
                              {
                                style: { margin: 0 },
                                children: [
                                  'This is a ',
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'strong',
                                    { children: selectedType }
                                  ),
                                  " callout block. It's currently displaying with ",
                                  showEmoji ? 'emoji' : 'icon',
                                  '.',
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                style: { margin: '10px 0 0 0' },
                                children:
                                  'Callout blocks are great for highlighting important information, warnings, tips, or any content that needs special attention.',
                              }
                            ),
                          ],
                        }
                      ),
                    }
                  ),
                ],
              }
            )
          },
        },
        NestedContent = {
          args: {
            attributes: {},
            element: { type: 'callout', calloutType: 'important' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'h4',
                    {
                      style: { marginTop: 0 },
                      children: 'Important Information',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'ul',
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'First important point' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'li',
                          { children: 'Second important point' }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'li',
                          {
                            children: [
                              'Third important point with ',
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'code',
                                { children: 'inline code' }
                              ),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    children:
                      'Additional context can be provided below the list.',
                  }),
                ],
              }
            ),
          },
        },
        CalloutElementWrapper = {
          name: 'CalloutElement (Wrapper)',
          args: {
            attributes: {},
            element: { type: 'callout' },
            children: null,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _callout_block__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                attributes: {},
                element: { type: 'callout', calloutType: 'tip' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  MockChildren,
                  {
                    text: 'This uses the CalloutElement wrapper component, which is the same as CalloutBlock.',
                  }
                ),
              }
            ),
        },
        __namedExportsOrder = [
          'Default',
          'AllTypes',
          'WithLongContent',
          'Interactive',
          'CustomStyling',
          'Playground',
          'NestedContent',
          'CalloutElementWrapper',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout',\n      calloutType: 'info'\n    },\n    children: <MockChildren text='This is an informational callout. It provides helpful information to the reader.' />\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (AllTypes.parameters = {
          ...AllTypes.parameters,
          docs: {
            ...AllTypes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout'\n    },\n    children: null\n  },\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '20px'\n  }}>\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'info'\n    }}>\n        <MockChildren text='Info: This provides general information or tips.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'warning'\n    }}>\n        <MockChildren text='Warning: This alerts users to potential issues or important considerations.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'success'\n    }}>\n        <MockChildren text='Success: This indicates successful operations or positive outcomes.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'error'\n    }}>\n        <MockChildren text='Error: This highlights errors or critical problems that need attention.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'tip'\n    }}>\n        <MockChildren text='Tip: This provides helpful suggestions or best practices.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'note'\n    }}>\n        <MockChildren text='Note: This adds supplementary information or clarifications.' />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'important'\n    }}>\n        <MockChildren text=\"Important: This emphasizes crucial information that shouldn't be missed.\" />\n      </CalloutBlock>\n\n      <CalloutBlock attributes={{}} element={{\n      type: 'callout',\n      calloutType: 'quote'\n    }}>\n        <MockChildren text='Quote: This formats content as a notable quote or excerpt.' />\n      </CalloutBlock>\n    </div>\n}",
              ...AllTypes.parameters?.docs?.source,
            },
          },
        }),
        (WithLongContent.parameters = {
          ...WithLongContent.parameters,
          docs: {
            ...WithLongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout',\n      calloutType: 'tip'\n    },\n    children: <div>\n        <p>This is a tip with multiple paragraphs of content.</p>\n        <p>\n          You can include multiple lines and even formatted text within a\n          callout block. This makes it perfect for providing detailed\n          explanations or multi-step instructions.\n        </p>\n        <p>\n          The callout will expand to accommodate all the content while\n          maintaining proper spacing and readability.\n        </p>\n      </div>\n  }\n}",
              ...WithLongContent.parameters?.docs?.source,
            },
          },
        }),
        (Interactive.parameters = {
          ...Interactive.parameters,
          docs: {
            ...Interactive.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout',\n      calloutType: 'info'\n    },\n    children: <MockChildren text='Try changing the callout type using the dropdown, or click the icon to toggle between emoji and icon display.' />\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find the type selector dropdown\n    const typeSelector = canvas.getByRole('combobox');\n    await expect(typeSelector).toBeVisible();\n\n    // Change to warning type\n    await userEvent.selectOptions(typeSelector, 'warning');\n\n    // Toggle emoji/icon\n    const toggleButton = canvas.getByTitle('Toggle between emoji and icon');\n    await userEvent.click(toggleButton);\n\n    // Click again to toggle back\n    await userEvent.click(toggleButton);\n  }\n}",
              ...Interactive.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout',\n      calloutType: 'note'\n    },\n    className: 'shadow-lg',\n    children: <MockChildren text='This callout has custom styling applied through the className prop.' />\n  }\n}",
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
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout'\n    },\n    children: null\n  },\n  render: () => {\n    const [selectedType, setSelectedType] = React.useState<string>('info');\n    const [showEmoji, setShowEmoji] = React.useState(true);\n    return <div>\n        <div style={{\n        marginBottom: '30px',\n        padding: '20px',\n        backgroundColor: '#f3f4f6',\n        borderRadius: '8px'\n      }}>\n          <h3 style={{\n          marginTop: 0\n        }}>Callout Configuration</h3>\n          <div style={{\n          display: 'flex',\n          gap: '20px',\n          alignItems: 'center'\n        }}>\n            <label>\n              Type:\n              <select value={selectedType} onChange={e => setSelectedType(e.target.value)} style={{\n              marginLeft: '10px',\n              padding: '5px'\n            }}>\n                <option value='info'>Info</option>\n                <option value='warning'>Warning</option>\n                <option value='success'>Success</option>\n                <option value='error'>Error</option>\n                <option value='tip'>Tip</option>\n                <option value='note'>Note</option>\n                <option value='important'>Important</option>\n                <option value='quote'>Quote</option>\n              </select>\n            </label>\n\n            <label>\n              <input type='checkbox' checked={showEmoji} onChange={e => setShowEmoji(e.target.checked)} />{' '}\n              Show Emoji (vs Icon)\n            </label>\n          </div>\n        </div>\n\n        <CalloutBlock attributes={{}} element={{\n        type: 'callout',\n        calloutType: selectedType as any,\n        emoji: showEmoji ? undefined : '🚀'\n      }}>\n          <div>\n            <p style={{\n            margin: 0\n          }}>\n              This is a <strong>{selectedType}</strong> callout block. It's\n              currently displaying with {showEmoji ? 'emoji' : 'icon'}.\n            </p>\n            <p style={{\n            margin: '10px 0 0 0'\n          }}>\n              Callout blocks are great for highlighting important information,\n              warnings, tips, or any content that needs special attention.\n            </p>\n          </div>\n        </CalloutBlock>\n      </div>;\n  }\n}",
              ...Playground.parameters?.docs?.source,
            },
          },
        }),
        (NestedContent.parameters = {
          ...NestedContent.parameters,
          docs: {
            ...NestedContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout',\n      calloutType: 'important'\n    },\n    children: <div>\n        <h4 style={{\n        marginTop: 0\n      }}>Important Information</h4>\n        <ul>\n          <li>First important point</li>\n          <li>Second important point</li>\n          <li>\n            Third important point with <code>inline code</code>\n          </li>\n        </ul>\n        <p>Additional context can be provided below the list.</p>\n      </div>\n  }\n}",
              ...NestedContent.parameters?.docs?.source,
            },
          },
        }),
        (CalloutElementWrapper.parameters = {
          ...CalloutElementWrapper.parameters,
          docs: {
            ...CalloutElementWrapper.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'CalloutElement (Wrapper)',\n  args: {\n    attributes: {},\n    element: {\n      type: 'callout'\n    },\n    children: null\n  },\n  render: () => <CalloutElement attributes={{}} element={{\n    type: 'callout',\n    calloutType: 'tip'\n  }}>\n      <MockChildren text='This uses the CalloutElement wrapper component, which is the same as CalloutBlock.' />\n    </CalloutElement>\n}",
              ...CalloutElementWrapper.parameters?.docs?.source,
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
