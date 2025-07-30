/*! For license information please see components-select-stories.75efc4c1.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4380],
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
    './design-system/components/select.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ComplexForm: () => ComplexForm,
          Controlled: () => Controlled,
          Countries: () => Countries,
          Default: () => Default,
          Disabled: () => Disabled,
          FormExample: () => FormExample,
          LanguageSelector: () => LanguageSelector,
          SizingExamples: () => SizingExamples,
          TimeZoneSelector: () => TimeZoneSelector,
          WithLabel: () => WithLabel,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./components/ui/select.tsx'),
        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/label.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Forms/Select',
          component: _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
          tags: ['autodocs'],
          argTypes: {
            value: { control: 'text', description: 'Selected value' },
            onValueChange: { action: 'value-changed' },
          },
        },
        Default = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                    {
                      className: 'w-[180px]',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                        { placeholder: 'Select a fruit' }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'apple', children: 'Apple' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'banana', children: 'Banana' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'orange', children: 'Orange' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'grape', children: 'Grape' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'watermelon', children: 'Watermelon' }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              trigger = canvas.getByRole('combobox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              trigger
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                trigger
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                trigger
              ).toHaveTextContent('Select a fruit'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                trigger
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.fm)(
                async () => {
                  const appleOption = canvas.getByRole('option', {
                    name: 'Apple',
                  })
                  await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                    appleOption
                  ).toBeVisible()
                }
              ))
            const bananaOption = canvas.getByRole('option', { name: 'Banana' })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              bananaOption
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                trigger
              ).toHaveTextContent('Banana'))
          },
        },
        WithLabel = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                  { htmlFor: 'fruit-select', children: 'Choose a fruit' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                        {
                          id: 'fruit-select',
                          className: 'w-[200px]',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                            { placeholder: 'Select a fruit' }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'apple', children: 'Apple' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'banana', children: 'Banana' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'orange', children: 'Orange' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'grape', children: 'Grape' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'watermelon', children: 'Watermelon' }
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
        Countries = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                    {
                      className: 'w-[250px]',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                        { placeholder: 'Select your country' }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'us', children: 'United States' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'uk', children: 'United Kingdom' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'ca', children: 'Canada' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'au', children: 'Australia' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'de', children: 'Germany' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'fr', children: 'France' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'jp', children: 'Japan' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                          { value: 'cn', children: 'China' }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
        },
        Controlled = {
          args: { children: null },
          render: () => {
            const [value, setValue] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState('')
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                    {
                      value,
                      onValueChange: setValue,
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                          {
                            className: 'w-[200px]',
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                              { placeholder: 'Select a theme' }
                            ),
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                { value: 'light', children: 'Light' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                { value: 'dark', children: 'Dark' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                { value: 'system', children: 'System' }
                              ),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'p',
                    {
                      className: 'text-sm text-muted-foreground',
                      children: ['Selected value: ', value || 'none'],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'button',
                    {
                      onClick: () => setValue('dark'),
                      className:
                        'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                      children: 'Set to Dark',
                    }
                  ),
                ],
              }
            )
          },
        },
        FormExample = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
              className: 'space-y-6 max-w-md',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'name', children: 'Full Name' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'input',
                        {
                          id: 'name',
                          type: 'text',
                          placeholder: 'John Doe',
                          className: 'w-full px-3 py-2 border rounded-md',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'role', children: 'Role' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                id: 'role',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Select your role' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    {
                                      value: 'developer',
                                      children: 'Developer',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: 'designer', children: 'Designer' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: 'manager', children: 'Manager' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: 'sales', children: 'Sales' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    {
                                      value: 'marketing',
                                      children: 'Marketing',
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
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        {
                          htmlFor: 'experience',
                          children: 'Years of Experience',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                id: 'experience',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Select experience' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '0-1', children: '0-1 years' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '1-3', children: '1-3 years' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '3-5', children: '3-5 years' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '5-10', children: '5-10 years' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '10+', children: '10+ years' }
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
                  'button',
                  {
                    type: 'submit',
                    className:
                      'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                    children: 'Submit',
                  }
                ),
              ],
            }),
        },
        TimeZoneSelector = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                  { children: 'Time Zone' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                        {
                          className: 'w-[300px]',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                            { placeholder: 'Select your time zone' }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'pst', children: 'Pacific Time (PST)' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'mst', children: 'Mountain Time (MST)' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'cst', children: 'Central Time (CST)' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'est', children: 'Eastern Time (EST)' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              {
                                value: 'gmt',
                                children: 'Greenwich Mean Time (GMT)',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              {
                                value: 'cet',
                                children: 'Central European Time (CET)',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              {
                                value: 'jst',
                                children: 'Japan Standard Time (JST)',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              {
                                value: 'aest',
                                children: 'Australian Eastern Time (AEST)',
                              }
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
        LanguageSelector = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                  { children: 'Language' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                        {
                          className: 'w-[200px]',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                            { placeholder: 'Select language' }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'en', children: '🇺🇸 English' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'es', children: '🇪🇸 Español' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'fr', children: '🇫🇷 Français' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'de', children: '🇩🇪 Deutsch' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'it', children: '🇮🇹 Italiano' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'pt', children: '🇵🇹 Português' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'ja', children: '🇯🇵 日本語' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'ko', children: '🇰🇷 한국어' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                              { value: 'zh', children: '🇨🇳 中文' }
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
        Disabled = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'space-y-4',
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                      {
                        className: 'w-[200px]',
                        disabled: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                          { placeholder: 'Disabled select' }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                            { value: 'option1', children: 'Option 1' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                            { value: 'option2', children: 'Option 2' }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            }),
        },
        SizingExamples = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { children: 'Small (w-[150px])' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                className: 'w-[150px]',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Small' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '1', children: 'Option 1' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '2', children: 'Option 2' }
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
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { children: 'Medium (w-[250px])' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                className: 'w-[250px]',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Medium' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '1', children: 'Option 1' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '2', children: 'Option 2' }
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
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { children: 'Large (w-[350px])' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                className: 'w-[350px]',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Large' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '1', children: 'Option 1' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '2', children: 'Option 2' }
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
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { children: 'Full Width' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                              {
                                className: 'w-full',
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                  { placeholder: 'Full width' }
                                ),
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '1', children: 'Option 1' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                    { value: '2', children: 'Option 2' }
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
              ],
            }),
        },
        ComplexForm = {
          args: { children: null },
          render: () => {
            const [country, setCountry] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
              [state, setState] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
              states = {
                us: ['California', 'New York', 'Texas', 'Florida'],
                ca: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
                uk: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
              }
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'form',
              {
                className: 'space-y-4 max-w-md',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'space-y-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'country-select', children: 'Country' }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                          {
                            value: country,
                            onValueChange: setCountry,
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                                {
                                  id: 'country-select',
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                    { placeholder: 'Select country' }
                                  ),
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                      { value: 'us', children: 'United States' }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                      { value: 'ca', children: 'Canada' }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                      {
                                        value: 'uk',
                                        children: 'United Kingdom',
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
                  country &&
                    states[country] &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'space-y-2',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                            {
                              htmlFor: 'state-select',
                              children: 'State/Province',
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.l6,
                            {
                              value: state,
                              onValueChange: setState,
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.bq,
                                  {
                                    id: 'state-select',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.yv,
                                      { placeholder: 'Select state/province' }
                                    ),
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.gC,
                                  {
                                    children: states[country].map((s) =>
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_ui_select__WEBPACK_IMPORTED_MODULE_2__.eb,
                                        { value: s.toLowerCase(), children: s },
                                        s
                                      )
                                    ),
                                  }
                                ),
                              ],
                            }
                          ),
                        ],
                      }
                    ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'button',
                    {
                      type: 'submit',
                      className:
                        'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                      disabled: !country || !state,
                      children: 'Submit',
                    }
                  ),
                ],
              }
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'WithLabel',
          'Countries',
          'Controlled',
          'FormExample',
          'TimeZoneSelector',
          'LanguageSelector',
          'Disabled',
          'SizingExamples',
          'ComplexForm',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: null\n  },\n  render: () => <Select>\n      <SelectTrigger className='w-[180px]'>\n        <SelectValue placeholder='Select a fruit' />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value='apple'>Apple</SelectItem>\n        <SelectItem value='banana'>Banana</SelectItem>\n        <SelectItem value='orange'>Orange</SelectItem>\n        <SelectItem value='grape'>Grape</SelectItem>\n        <SelectItem value='watermelon'>Watermelon</SelectItem>\n      </SelectContent>\n    </Select>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('combobox');\n\n    // Test trigger is visible and enabled\n    await expect(trigger).toBeVisible();\n    await expect(trigger).toBeEnabled();\n    await expect(trigger).toHaveTextContent('Select a fruit');\n\n    // Open select dropdown\n    await userEvent.click(trigger);\n\n    // Wait for and verify dropdown content\n    await waitFor(async () => {\n      const appleOption = canvas.getByRole('option', {\n        name: 'Apple'\n      });\n      await expect(appleOption).toBeVisible();\n    });\n\n    // Select an option\n    const bananaOption = canvas.getByRole('option', {\n      name: 'Banana'\n    });\n    await userEvent.click(bananaOption);\n\n    // Verify selection\n    await expect(trigger).toHaveTextContent('Banana');\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-2'>\n      <Label htmlFor='fruit-select'>Choose a fruit</Label>\n      <Select>\n        <SelectTrigger id='fruit-select' className='w-[200px]'>\n          <SelectValue placeholder='Select a fruit' />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectItem value='apple'>Apple</SelectItem>\n          <SelectItem value='banana'>Banana</SelectItem>\n          <SelectItem value='orange'>Orange</SelectItem>\n          <SelectItem value='grape'>Grape</SelectItem>\n          <SelectItem value='watermelon'>Watermelon</SelectItem>\n        </SelectContent>\n      </Select>\n    </div>\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (Countries.parameters = {
          ...Countries.parameters,
          docs: {
            ...Countries.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <Select>\n      <SelectTrigger className='w-[250px]'>\n        <SelectValue placeholder='Select your country' />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value='us'>United States</SelectItem>\n        <SelectItem value='uk'>United Kingdom</SelectItem>\n        <SelectItem value='ca'>Canada</SelectItem>\n        <SelectItem value='au'>Australia</SelectItem>\n        <SelectItem value='de'>Germany</SelectItem>\n        <SelectItem value='fr'>France</SelectItem>\n        <SelectItem value='jp'>Japan</SelectItem>\n        <SelectItem value='cn'>China</SelectItem>\n      </SelectContent>\n    </Select>\n}",
              ...Countries.parameters?.docs?.source,
            },
          },
        }),
        (Controlled.parameters = {
          ...Controlled.parameters,
          docs: {
            ...Controlled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => {\n    const [value, setValue] = React.useState('');\n    return <div className='space-y-4'>\n        <Select value={value} onValueChange={setValue}>\n          <SelectTrigger className='w-[200px]'>\n            <SelectValue placeholder='Select a theme' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='light'>Light</SelectItem>\n            <SelectItem value='dark'>Dark</SelectItem>\n            <SelectItem value='system'>System</SelectItem>\n          </SelectContent>\n        </Select>\n        <p className='text-sm text-muted-foreground'>\n          Selected value: {value || 'none'}\n        </p>\n        <button onClick={() => setValue('dark')} className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n          Set to Dark\n        </button>\n      </div>;\n  }\n}",
              ...Controlled.parameters?.docs?.source,
            },
          },
        }),
        (FormExample.parameters = {
          ...FormExample.parameters,
          docs: {
            ...FormExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <form className='space-y-6 max-w-md'>\n      <div className='space-y-2'>\n        <Label htmlFor='name'>Full Name</Label>\n        <input id='name' type='text' placeholder='John Doe' className='w-full px-3 py-2 border rounded-md' />\n      </div>\n\n      <div className='space-y-2'>\n        <Label htmlFor='role'>Role</Label>\n        <Select>\n          <SelectTrigger id='role'>\n            <SelectValue placeholder='Select your role' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='developer'>Developer</SelectItem>\n            <SelectItem value='designer'>Designer</SelectItem>\n            <SelectItem value='manager'>Manager</SelectItem>\n            <SelectItem value='sales'>Sales</SelectItem>\n            <SelectItem value='marketing'>Marketing</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n\n      <div className='space-y-2'>\n        <Label htmlFor='experience'>Years of Experience</Label>\n        <Select>\n          <SelectTrigger id='experience'>\n            <SelectValue placeholder='Select experience' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='0-1'>0-1 years</SelectItem>\n            <SelectItem value='1-3'>1-3 years</SelectItem>\n            <SelectItem value='3-5'>3-5 years</SelectItem>\n            <SelectItem value='5-10'>5-10 years</SelectItem>\n            <SelectItem value='10+'>10+ years</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n\n      <button type='submit' className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n        Submit\n      </button>\n    </form>\n}",
              ...FormExample.parameters?.docs?.source,
            },
          },
        }),
        (TimeZoneSelector.parameters = {
          ...TimeZoneSelector.parameters,
          docs: {
            ...TimeZoneSelector.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-2'>\n      <Label>Time Zone</Label>\n      <Select>\n        <SelectTrigger className='w-[300px]'>\n          <SelectValue placeholder='Select your time zone' />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectItem value='pst'>Pacific Time (PST)</SelectItem>\n          <SelectItem value='mst'>Mountain Time (MST)</SelectItem>\n          <SelectItem value='cst'>Central Time (CST)</SelectItem>\n          <SelectItem value='est'>Eastern Time (EST)</SelectItem>\n          <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>\n          <SelectItem value='cet'>Central European Time (CET)</SelectItem>\n          <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>\n          <SelectItem value='aest'>Australian Eastern Time (AEST)</SelectItem>\n        </SelectContent>\n      </Select>\n    </div>\n}",
              ...TimeZoneSelector.parameters?.docs?.source,
            },
          },
        }),
        (LanguageSelector.parameters = {
          ...LanguageSelector.parameters,
          docs: {
            ...LanguageSelector.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-2'>\n      <Label>Language</Label>\n      <Select>\n        <SelectTrigger className='w-[200px]'>\n          <SelectValue placeholder='Select language' />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectItem value='en'>🇺🇸 English</SelectItem>\n          <SelectItem value='es'>🇪🇸 Español</SelectItem>\n          <SelectItem value='fr'>🇫🇷 Français</SelectItem>\n          <SelectItem value='de'>🇩🇪 Deutsch</SelectItem>\n          <SelectItem value='it'>🇮🇹 Italiano</SelectItem>\n          <SelectItem value='pt'>🇵🇹 Português</SelectItem>\n          <SelectItem value='ja'>🇯🇵 日本語</SelectItem>\n          <SelectItem value='ko'>🇰🇷 한국어</SelectItem>\n          <SelectItem value='zh'>🇨🇳 中文</SelectItem>\n        </SelectContent>\n      </Select>\n    </div>\n}",
              ...LanguageSelector.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-4'>\n      <Select>\n        <SelectTrigger className='w-[200px]' disabled>\n          <SelectValue placeholder='Disabled select' />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectItem value='option1'>Option 1</SelectItem>\n          <SelectItem value='option2'>Option 2</SelectItem>\n        </SelectContent>\n      </Select>\n    </div>\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (SizingExamples.parameters = {
          ...SizingExamples.parameters,
          docs: {
            ...SizingExamples.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-4'>\n      <div>\n        <Label>Small (w-[150px])</Label>\n        <Select>\n          <SelectTrigger className='w-[150px]'>\n            <SelectValue placeholder='Small' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='1'>Option 1</SelectItem>\n            <SelectItem value='2'>Option 2</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n\n      <div>\n        <Label>Medium (w-[250px])</Label>\n        <Select>\n          <SelectTrigger className='w-[250px]'>\n            <SelectValue placeholder='Medium' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='1'>Option 1</SelectItem>\n            <SelectItem value='2'>Option 2</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n\n      <div>\n        <Label>Large (w-[350px])</Label>\n        <Select>\n          <SelectTrigger className='w-[350px]'>\n            <SelectValue placeholder='Large' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='1'>Option 1</SelectItem>\n            <SelectItem value='2'>Option 2</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n\n      <div>\n        <Label>Full Width</Label>\n        <Select>\n          <SelectTrigger className='w-full'>\n            <SelectValue placeholder='Full width' />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value='1'>Option 1</SelectItem>\n            <SelectItem value='2'>Option 2</SelectItem>\n          </SelectContent>\n        </Select>\n      </div>\n    </div>\n}",
              ...SizingExamples.parameters?.docs?.source,
            },
          },
        }),
        (ComplexForm.parameters = {
          ...ComplexForm.parameters,
          docs: {
            ...ComplexForm.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => {\n    const [country, setCountry] = React.useState('');\n    const [state, setState] = React.useState('');\n    const states = {\n      us: ['California', 'New York', 'Texas', 'Florida'],\n      ca: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],\n      uk: ['England', 'Scotland', 'Wales', 'Northern Ireland']\n    };\n    return <form className='space-y-4 max-w-md'>\n        <div className='space-y-2'>\n          <Label htmlFor='country-select'>Country</Label>\n          <Select value={country} onValueChange={setCountry}>\n            <SelectTrigger id='country-select'>\n              <SelectValue placeholder='Select country' />\n            </SelectTrigger>\n            <SelectContent>\n              <SelectItem value='us'>United States</SelectItem>\n              <SelectItem value='ca'>Canada</SelectItem>\n              <SelectItem value='uk'>United Kingdom</SelectItem>\n            </SelectContent>\n          </Select>\n        </div>\n\n        {country && states[country as keyof typeof states] && <div className='space-y-2'>\n            <Label htmlFor='state-select'>State/Province</Label>\n            <Select value={state} onValueChange={setState}>\n              <SelectTrigger id='state-select'>\n                <SelectValue placeholder='Select state/province' />\n              </SelectTrigger>\n              <SelectContent>\n                {states[country as keyof typeof states].map(s => <SelectItem key={s} value={s.toLowerCase()}>\n                    {s}\n                  </SelectItem>)}\n              </SelectContent>\n            </Select>\n          </div>}\n\n        <button type='submit' className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90' disabled={!country || !state}>\n          Submit\n        </button>\n      </form>;\n  }\n}",
              ...ComplexForm.parameters?.docs?.source,
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
