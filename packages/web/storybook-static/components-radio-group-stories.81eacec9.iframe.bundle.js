'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [2151],
  {
    './design-system/components/radio-group.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Controlled: () => Controlled,
          Default: () => Default,
          DisabledOptions: () => DisabledOptions,
          FormValidation: () => FormValidation,
          HorizontalLayout: () => HorizontalLayout,
          NotificationPreferences: () => NotificationPreferences,
          PaymentMethod: () => PaymentMethod,
          SurveyQuestion: () => SurveyQuestion,
          ThemeSelector: () => ThemeSelector,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./components/ui/radio-group.tsx'),
        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/label.tsx'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Forms/RadioGroup',
          component: _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
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
              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
              {
                defaultValue: 'option-one',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'option-one', id: 'option-one' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'option-one', children: 'Option One' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'option-two', id: 'option-two' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'option-two', children: 'Option Two' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'option-three', id: 'option-three' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'option-three', children: 'Option Three' }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
        },
        NotificationPreferences = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h3',
                        {
                          className: 'text-lg font-medium',
                          children: 'Email Notifications',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground',
                          children:
                            'Choose how often you want to receive email notifications',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                  {
                    defaultValue: 'daily',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'all', id: 'all' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              { htmlFor: 'all', children: 'All new messages' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'daily', id: 'daily' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              { htmlFor: 'daily', children: 'Daily digest' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'weekly', id: 'weekly' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              { htmlFor: 'weekly', children: 'Weekly summary' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'none', id: 'none' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              { htmlFor: 'none', children: 'No emails' }
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
        PaymentMethod = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Payment Method',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                  {
                    defaultValue: 'card',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className:
                            'flex items-center space-x-2 rounded-lg border p-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'card', id: 'card' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              {
                                htmlFor: 'card',
                                className: 'flex-1 cursor-pointer',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className: 'font-medium',
                                      children: 'Credit Card',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className:
                                        'text-sm text-muted-foreground',
                                      children:
                                        'Pay with Visa, Mastercard, or American Express',
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
                          className:
                            'flex items-center space-x-2 rounded-lg border p-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'paypal', id: 'paypal' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              {
                                htmlFor: 'paypal',
                                className: 'flex-1 cursor-pointer',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className: 'font-medium',
                                      children: 'PayPal',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className:
                                        'text-sm text-muted-foreground',
                                      children: 'Pay with your PayPal account',
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
                          className:
                            'flex items-center space-x-2 rounded-lg border p-4',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                              { value: 'bank', id: 'bank' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                              {
                                htmlFor: 'bank',
                                className: 'flex-1 cursor-pointer',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className: 'font-medium',
                                      children: 'Bank Transfer',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'div',
                                    {
                                      className:
                                        'text-sm text-muted-foreground',
                                      children: 'Direct bank account transfer',
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
              ],
            }),
        },
        Controlled = {
          args: { children: null },
          render: () => {
            const [value, setValue] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState('option-one')
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                    {
                      value,
                      onValueChange: setValue,
                      children: [
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                { value: 'option-one', id: 'c-option-one' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                {
                                  htmlFor: 'c-option-one',
                                  children: 'Option One',
                                }
                              ),
                            ],
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                { value: 'option-two', id: 'c-option-two' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                {
                                  htmlFor: 'c-option-two',
                                  children: 'Option Two',
                                }
                              ),
                            ],
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                { value: 'option-three', id: 'c-option-three' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                {
                                  htmlFor: 'c-option-three',
                                  children: 'Option Three',
                                }
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
                      children: ['Selected value: ', value],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'button',
                    {
                      onClick: () => setValue('option-two'),
                      className:
                        'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                      children: 'Set to Option Two',
                    }
                  ),
                ],
              }
            )
          },
        },
        DisabledOptions = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
              {
                defaultValue: 'active',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'active', id: 'active' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'active', children: 'Active Plan' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'premium', id: 'premium', disabled: !0 }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          {
                            htmlFor: 'premium',
                            className: 'opacity-50 cursor-not-allowed',
                            children: 'Premium Plan (Coming Soon)',
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          {
                            value: 'enterprise',
                            id: 'enterprise',
                            disabled: !0,
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          {
                            htmlFor: 'enterprise',
                            className: 'opacity-50 cursor-not-allowed',
                            children: 'Enterprise Plan (Contact Sales)',
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
        },
        HorizontalLayout = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
              {
                defaultValue: 'left',
                className: 'flex flex-row gap-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'left', id: 'left' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'left', children: 'Left' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'center', id: 'center' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'center', children: 'Center' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                          { value: 'right', id: 'right' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'right', children: 'Right' }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
        },
        ThemeSelector = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Choose Theme',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                  {
                    defaultValue: 'system',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'grid grid-cols-3 gap-4',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                  {
                                    value: 'light',
                                    id: 'light',
                                    className: 'peer sr-only',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                  {
                                    htmlFor: 'light',
                                    className:
                                      'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                        'svg',
                                        {
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          stroke: 'currentColor',
                                          strokeLinecap: 'round',
                                          strokeLinejoin: 'round',
                                          strokeWidth: '2',
                                          className: 'mb-3 h-6 w-6',
                                          children: [
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'circle',
                                              { cx: '12', cy: '12', r: '4' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'M12 2v2' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'M12 20v2' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'm4.93 4.93 1.41 1.41' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'm17.66 17.66 1.41 1.41' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'M2 12h2' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'M20 12h2' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'm19.07 4.93-1.41 1.41' }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'path',
                                              { d: 'm6.34 17.66-1.41 1.41' }
                                            ),
                                          ],
                                        }
                                      ),
                                      'Light',
                                    ],
                                  }
                                ),
                              ],
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                  {
                                    value: 'dark',
                                    id: 'dark',
                                    className: 'peer sr-only',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                  {
                                    htmlFor: 'dark',
                                    className:
                                      'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'svg',
                                        {
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          stroke: 'currentColor',
                                          strokeLinecap: 'round',
                                          strokeLinejoin: 'round',
                                          strokeWidth: '2',
                                          className: 'mb-3 h-6 w-6',
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'path',
                                            {
                                              d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z',
                                            }
                                          ),
                                        }
                                      ),
                                      'Dark',
                                    ],
                                  }
                                ),
                              ],
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                  {
                                    value: 'system',
                                    id: 'system',
                                    className: 'peer sr-only',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                  {
                                    htmlFor: 'system',
                                    className:
                                      'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                        'svg',
                                        {
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          stroke: 'currentColor',
                                          strokeLinecap: 'round',
                                          strokeLinejoin: 'round',
                                          strokeWidth: '2',
                                          className: 'mb-3 h-6 w-6',
                                          children: [
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'rect',
                                              {
                                                width: '20',
                                                height: '14',
                                                x: '2',
                                                y: '3',
                                                rx: '2',
                                              }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'line',
                                              {
                                                x1: '8',
                                                x2: '16',
                                                y1: '21',
                                                y2: '21',
                                              }
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              'line',
                                              {
                                                x1: '12',
                                                x2: '12',
                                                y1: '17',
                                                y2: '21',
                                              }
                                            ),
                                          ],
                                        }
                                      ),
                                      'System',
                                    ],
                                  }
                                ),
                              ],
                            }
                          ),
                        ],
                      }
                    ),
                  }
                ),
              ],
            }),
        },
        SurveyQuestion = {
          args: { children: null },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
              className: 'space-y-6',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h3',
                        {
                          className: 'text-lg font-medium',
                          children: 'How satisfied are you with our service?',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                        {
                          defaultValue: 'satisfied',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                    {
                                      value: 'very-satisfied',
                                      id: 'very-satisfied',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'very-satisfied',
                                      children: 'Very Satisfied',
                                    }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                    { value: 'satisfied', id: 'satisfied' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'satisfied',
                                      children: 'Satisfied',
                                    }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                    { value: 'neutral', id: 'neutral' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    { htmlFor: 'neutral', children: 'Neutral' }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                    {
                                      value: 'dissatisfied',
                                      id: 'dissatisfied',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'dissatisfied',
                                      children: 'Dissatisfied',
                                    }
                                  ),
                                ],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                    {
                                      value: 'very-dissatisfied',
                                      id: 'very-dissatisfied',
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'very-dissatisfied',
                                      children: 'Very Dissatisfied',
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
                  'button',
                  {
                    type: 'submit',
                    className:
                      'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90',
                    children: 'Submit Feedback',
                  }
                ),
              ],
            }),
        },
        FormValidation = {
          args: { children: null },
          render: () => {
            const [value, setValue] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
              [error, setError] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'form',
              {
                onSubmit: (e) => {
                  ;(e.preventDefault(),
                    value
                      ? (setError(!1), console.info(`Selected: ${value}`))
                      : setError(!0))
                },
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'space-y-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          {
                            className: error ? 'text-destructive' : '',
                            children: 'Select your preferred contact method *',
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.z,
                          {
                            value,
                            onValueChange: (v) => {
                              ;(setValue(v), setError(!1))
                            },
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                      { value: 'email', id: 'contact-email' }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                      {
                                        htmlFor: 'contact-email',
                                        children: 'Email',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                      { value: 'phone', id: 'contact-phone' }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                      {
                                        htmlFor: 'contact-phone',
                                        children: 'Phone',
                                      }
                                    ),
                                  ],
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_2__.C,
                                      { value: 'sms', id: 'contact-sms' }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                      {
                                        htmlFor: 'contact-sms',
                                        children: 'SMS',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            ],
                          }
                        ),
                        error &&
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'p',
                            {
                              className: 'text-sm text-destructive',
                              children: 'Please select a contact method',
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
              }
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'NotificationPreferences',
          'PaymentMethod',
          'Controlled',
          'DisabledOptions',
          'HorizontalLayout',
          'ThemeSelector',
          'SurveyQuestion',
          'FormValidation',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: null\n  },\n  render: () => <RadioGroup defaultValue='option-one'>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-one' id='option-one' />\n        <Label htmlFor='option-one'>Option One</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-two' id='option-two' />\n        <Label htmlFor='option-two'>Option Two</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-three' id='option-three' />\n        <Label htmlFor='option-three'>Option Three</Label>\n      </div>\n    </RadioGroup>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (NotificationPreferences.parameters = {
          ...NotificationPreferences.parameters,
          docs: {
            ...NotificationPreferences.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-4'>\n      <div className='space-y-2'>\n        <h3 className='text-lg font-medium'>Email Notifications</h3>\n        <p className='text-sm text-muted-foreground'>\n          Choose how often you want to receive email notifications\n        </p>\n      </div>\n      <RadioGroup defaultValue='daily'>\n        <div className='flex items-center space-x-2'>\n          <RadioGroupItem value='all' id='all' />\n          <Label htmlFor='all'>All new messages</Label>\n        </div>\n        <div className='flex items-center space-x-2'>\n          <RadioGroupItem value='daily' id='daily' />\n          <Label htmlFor='daily'>Daily digest</Label>\n        </div>\n        <div className='flex items-center space-x-2'>\n          <RadioGroupItem value='weekly' id='weekly' />\n          <Label htmlFor='weekly'>Weekly summary</Label>\n        </div>\n        <div className='flex items-center space-x-2'>\n          <RadioGroupItem value='none' id='none' />\n          <Label htmlFor='none'>No emails</Label>\n        </div>\n      </RadioGroup>\n    </div>\n}",
              ...NotificationPreferences.parameters?.docs?.source,
            },
          },
        }),
        (PaymentMethod.parameters = {
          ...PaymentMethod.parameters,
          docs: {
            ...PaymentMethod.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-4'>\n      <h3 className='text-lg font-medium'>Payment Method</h3>\n      <RadioGroup defaultValue='card'>\n        <div className='flex items-center space-x-2 rounded-lg border p-4'>\n          <RadioGroupItem value='card' id='card' />\n          <Label htmlFor='card' className='flex-1 cursor-pointer'>\n            <div className='font-medium'>Credit Card</div>\n            <div className='text-sm text-muted-foreground'>\n              Pay with Visa, Mastercard, or American Express\n            </div>\n          </Label>\n        </div>\n        <div className='flex items-center space-x-2 rounded-lg border p-4'>\n          <RadioGroupItem value='paypal' id='paypal' />\n          <Label htmlFor='paypal' className='flex-1 cursor-pointer'>\n            <div className='font-medium'>PayPal</div>\n            <div className='text-sm text-muted-foreground'>\n              Pay with your PayPal account\n            </div>\n          </Label>\n        </div>\n        <div className='flex items-center space-x-2 rounded-lg border p-4'>\n          <RadioGroupItem value='bank' id='bank' />\n          <Label htmlFor='bank' className='flex-1 cursor-pointer'>\n            <div className='font-medium'>Bank Transfer</div>\n            <div className='text-sm text-muted-foreground'>\n              Direct bank account transfer\n            </div>\n          </Label>\n        </div>\n      </RadioGroup>\n    </div>\n}",
              ...PaymentMethod.parameters?.docs?.source,
            },
          },
        }),
        (Controlled.parameters = {
          ...Controlled.parameters,
          docs: {
            ...Controlled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => {\n    const [value, setValue] = React.useState('option-one');\n    return <div className='space-y-4'>\n        <RadioGroup value={value} onValueChange={setValue}>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='option-one' id='c-option-one' />\n            <Label htmlFor='c-option-one'>Option One</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='option-two' id='c-option-two' />\n            <Label htmlFor='c-option-two'>Option Two</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='option-three' id='c-option-three' />\n            <Label htmlFor='c-option-three'>Option Three</Label>\n          </div>\n        </RadioGroup>\n        <p className='text-sm text-muted-foreground'>Selected value: {value}</p>\n        <button onClick={() => setValue('option-two')} className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n          Set to Option Two\n        </button>\n      </div>;\n  }\n}",
              ...Controlled.parameters?.docs?.source,
            },
          },
        }),
        (DisabledOptions.parameters = {
          ...DisabledOptions.parameters,
          docs: {
            ...DisabledOptions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <RadioGroup defaultValue='active'>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='active' id='active' />\n        <Label htmlFor='active'>Active Plan</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='premium' id='premium' disabled />\n        <Label htmlFor='premium' className='opacity-50 cursor-not-allowed'>\n          Premium Plan (Coming Soon)\n        </Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='enterprise' id='enterprise' disabled />\n        <Label htmlFor='enterprise' className='opacity-50 cursor-not-allowed'>\n          Enterprise Plan (Contact Sales)\n        </Label>\n      </div>\n    </RadioGroup>\n}",
              ...DisabledOptions.parameters?.docs?.source,
            },
          },
        }),
        (HorizontalLayout.parameters = {
          ...HorizontalLayout.parameters,
          docs: {
            ...HorizontalLayout.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <RadioGroup defaultValue='left' className='flex flex-row gap-4'>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='left' id='left' />\n        <Label htmlFor='left'>Left</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='center' id='center' />\n        <Label htmlFor='center'>Center</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='right' id='right' />\n        <Label htmlFor='right'>Right</Label>\n      </div>\n    </RadioGroup>\n}",
              ...HorizontalLayout.parameters?.docs?.source,
            },
          },
        }),
        (ThemeSelector.parameters = {
          ...ThemeSelector.parameters,
          docs: {
            ...ThemeSelector.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <div className='space-y-4'>\n      <h3 className='text-lg font-medium'>Choose Theme</h3>\n      <RadioGroup defaultValue='system'>\n        <div className='grid grid-cols-3 gap-4'>\n          <div>\n            <RadioGroupItem value='light' id='light' className='peer sr-only' />\n            <Label htmlFor='light' className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'>\n              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='mb-3 h-6 w-6'>\n                <circle cx='12' cy='12' r='4' />\n                <path d='M12 2v2' />\n                <path d='M12 20v2' />\n                <path d='m4.93 4.93 1.41 1.41' />\n                <path d='m17.66 17.66 1.41 1.41' />\n                <path d='M2 12h2' />\n                <path d='M20 12h2' />\n                <path d='m19.07 4.93-1.41 1.41' />\n                <path d='m6.34 17.66-1.41 1.41' />\n              </svg>\n              Light\n            </Label>\n          </div>\n          <div>\n            <RadioGroupItem value='dark' id='dark' className='peer sr-only' />\n            <Label htmlFor='dark' className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'>\n              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='mb-3 h-6 w-6'>\n                <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />\n              </svg>\n              Dark\n            </Label>\n          </div>\n          <div>\n            <RadioGroupItem value='system' id='system' className='peer sr-only' />\n            <Label htmlFor='system' className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'>\n              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='mb-3 h-6 w-6'>\n                <rect width='20' height='14' x='2' y='3' rx='2' />\n                <line x1='8' x2='16' y1='21' y2='21' />\n                <line x1='12' x2='12' y1='17' y2='21' />\n              </svg>\n              System\n            </Label>\n          </div>\n        </div>\n      </RadioGroup>\n    </div>\n}",
              ...ThemeSelector.parameters?.docs?.source,
            },
          },
        }),
        (SurveyQuestion.parameters = {
          ...SurveyQuestion.parameters,
          docs: {
            ...SurveyQuestion.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => <form className='space-y-6'>\n      <div className='space-y-4'>\n        <h3 className='text-lg font-medium'>\n          How satisfied are you with our service?\n        </h3>\n        <RadioGroup defaultValue='satisfied'>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='very-satisfied' id='very-satisfied' />\n            <Label htmlFor='very-satisfied'>Very Satisfied</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='satisfied' id='satisfied' />\n            <Label htmlFor='satisfied'>Satisfied</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='neutral' id='neutral' />\n            <Label htmlFor='neutral'>Neutral</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='dissatisfied' id='dissatisfied' />\n            <Label htmlFor='dissatisfied'>Dissatisfied</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <RadioGroupItem value='very-dissatisfied' id='very-dissatisfied' />\n            <Label htmlFor='very-dissatisfied'>Very Dissatisfied</Label>\n          </div>\n        </RadioGroup>\n      </div>\n      <button type='submit' className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n        Submit Feedback\n      </button>\n    </form>\n}",
              ...SurveyQuestion.parameters?.docs?.source,
            },
          },
        }),
        (FormValidation.parameters = {
          ...FormValidation.parameters,
          docs: {
            ...FormValidation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: null\n  },\n  render: () => {\n    const [value, setValue] = React.useState('');\n    const [error, setError] = React.useState(false);\n    const handleSubmit = (e: React.FormEvent) => {\n      e.preventDefault();\n      if (!value) {\n        setError(true);\n      } else {\n        setError(false);\n        console.info(`Selected: ${value}`);\n      }\n    };\n    return <form onSubmit={handleSubmit} className='space-y-4'>\n        <div className='space-y-2'>\n          <Label className={error ? 'text-destructive' : ''}>\n            Select your preferred contact method *\n          </Label>\n          <RadioGroup value={value} onValueChange={v => {\n          setValue(v);\n          setError(false);\n        }}>\n            <div className='flex items-center space-x-2'>\n              <RadioGroupItem value='email' id='contact-email' />\n              <Label htmlFor='contact-email'>Email</Label>\n            </div>\n            <div className='flex items-center space-x-2'>\n              <RadioGroupItem value='phone' id='contact-phone' />\n              <Label htmlFor='contact-phone'>Phone</Label>\n            </div>\n            <div className='flex items-center space-x-2'>\n              <RadioGroupItem value='sms' id='contact-sms' />\n              <Label htmlFor='contact-sms'>SMS</Label>\n            </div>\n          </RadioGroup>\n          {error && <p className='text-sm text-destructive'>\n              Please select a contact method\n            </p>}\n        </div>\n        <button type='submit' className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'>\n          Submit\n        </button>\n      </form>;\n  }\n}",
              ...FormValidation.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
