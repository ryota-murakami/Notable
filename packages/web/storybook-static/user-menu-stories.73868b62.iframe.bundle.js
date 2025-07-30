/*! For license information please see user-menu-stories.73868b62.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [334],
  {
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/log-out.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => LogOut })
        const LogOut = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('LogOut', [
          [
            'path',
            { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' },
          ],
          ['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
          ['line', { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => User })
        const User = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('User', [
          [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
          ],
          ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
        ])
      },
    './components/user-menu.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ClickSettings: () => ClickSettings,
          CloseOnClickOutside: () => CloseOnClickOutside,
          CustomStyling: () => CustomStyling,
          DarkMode: () => DarkMode,
          Default: () => Default,
          DifferentInitials: () => DifferentInitials,
          EmailOnly: () => EmailOnly,
          KeyboardNavigation: () => KeyboardNavigation,
          Loading: () => Loading,
          Logout: () => Logout,
          MobileResponsive: () => MobileResponsive,
          MultipleInstances: () => MultipleInstances,
          NoUserData: () => NoUserData,
          OpenMenu: () => OpenMenu,
          TestMode: () => TestMode,
          WithLongName: () => WithLongName,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../node_modules/.pnpm/sonner@1.7.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/sonner/dist/index.mjs'
        ),
        _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./components/ui/dropdown-menu.tsx'),
        _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./components/ui/button.tsx'),
        _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js'
          ),
        _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
          ),
        _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/log-out.js'
          )
      const UserMenuMock = ({
          className,
          userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            initials: 'JD',
          },
        }) => {
          const [isLoading, setIsLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)
          return 'test@example.com' === userData.email
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_button__WEBPACK_IMPORTED_MODULE_5__.$,
                  {
                    variant: 'ghost',
                    size: 'icon',
                    className: 'rounded-full',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
                      { className: 'h-5 w-5' }
                    ),
                  }
                ),
              })
            : userData.name || userData.email
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.rI,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.ty,
                            {
                              asChild: !0,
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_button__WEBPACK_IMPORTED_MODULE_5__.$,
                                {
                                  variant: 'ghost',
                                  className: `relative h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:opacity-90 ${className}`,
                                  'aria-label': 'User menu',
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'span',
                                    {
                                      className: 'text-sm font-medium',
                                      children: userData.initials,
                                    }
                                  ),
                                }
                              ),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.SQ,
                            {
                              align: 'end',
                              className: 'w-56',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.lp,
                                  {
                                    className: 'font-normal',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                      'div',
                                      {
                                        className: 'flex flex-col space-y-1',
                                        children: [
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'p',
                                            {
                                              className:
                                                'text-sm font-medium leading-none',
                                              children: userData.name,
                                            }
                                          ),
                                          (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'p',
                                            {
                                              className:
                                                'text-xs leading-none text-muted-foreground',
                                              children: userData.email,
                                            }
                                          ),
                                        ],
                                      }
                                    ),
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.mB,
                                  {}
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__._2,
                                  {
                                    onClick: () => {
                                      ;(0,
                                      sonner__WEBPACK_IMPORTED_MODULE_3__.oR)(
                                        'Settings page coming soon!'
                                      )
                                    },
                                    className: 'cursor-pointer',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__.A,
                                        { className: 'mr-2 h-4 w-4' }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'span',
                                        { children: 'Settings' }
                                      ),
                                    ],
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.mB,
                                  {}
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__._2,
                                  {
                                    onClick: async () => {
                                      ;(setIsLoading(!0),
                                        await new Promise((resolve) =>
                                          setTimeout(resolve, 1e3)
                                        ),
                                        setIsLoading(!1),
                                        sonner__WEBPACK_IMPORTED_MODULE_3__.oR.success(
                                          'Logged out successfully'
                                        ))
                                    },
                                    className:
                                      'cursor-pointer text-red-600 focus:text-red-600',
                                    disabled: isLoading,
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _barrel_optimize_names_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__.A,
                                        { className: 'mr-2 h-4 w-4' }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'span',
                                        {
                                          children: isLoading
                                            ? 'Logging out...'
                                            : 'Log out',
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
                  }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'h-9 w-9 animate-pulse rounded-full bg-muted',
                  }),
                })
        },
        __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Navigation/UserMenu',
          component: UserMenuMock,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            className: {
              control: 'text',
              description: 'Additional CSS classes',
            },
            userData: {
              control: 'object',
              description: 'User data to display',
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      sonner__WEBPACK_IMPORTED_MODULE_3__.l$,
                      { position: 'top-center' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'div',
                      {
                        className:
                          'min-h-[200px] flex items-start justify-end p-4',
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          Story,
                          {}
                        ),
                      }
                    ),
                  ],
                }
              ),
          ],
        },
        Default = {},
        WithLongName = {
          args: {
            userData: {
              name: 'Alexander Christopher Johnson III',
              email: 'alexander.johnson@example.com',
              initials: 'AJ',
            },
          },
        },
        EmailOnly = {
          args: {
            userData: { name: null, email: 'user@example.com', initials: 'UE' },
          },
        },
        NoUserData = {
          args: { userData: { name: null, email: null, initials: '??' } },
        },
        Loading = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              UserMenuMock,
              { userData: { name: null, email: null, initials: '' } }
            ),
        },
        TestMode = {
          args: {
            userData: {
              name: 'Test User',
              email: 'test@example.com',
              initials: 'TU',
            },
          },
        },
        OpenMenu = {
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;((0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('John Doe')
                ).toBeInTheDocument(),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('john.doe@example.com')
                  ).toBeInTheDocument(),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('Settings')
                  ).toBeInTheDocument(),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('Log out')
                  ).toBeInTheDocument())
              }))
          },
        },
        ClickSettings = {
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            )
            const settingsItem = await canvas.findByText('Settings')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              settingsItem
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Settings page coming soon!')
                ).toBeInTheDocument()
              }))
          },
        },
        Logout = {
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            )
            const logoutItem = await canvas.findByText('Log out')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              logoutItem
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Logging out...')
                ).toBeInTheDocument()
              }),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(
                () => {
                  ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('Logged out successfully')
                  ).toBeInTheDocument()
                },
                { timeout: 2e3 }
              ))
          },
        },
        DifferentInitials = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'space-y-4',
              children: [
                { name: 'John Doe', email: 'john@example.com', initials: 'JD' },
                {
                  name: 'Alice Bob Charlie',
                  email: 'alice@example.com',
                  initials: 'AB',
                },
                {
                  name: 'SingleName',
                  email: 'single@example.com',
                  initials: 'SI',
                },
                { name: null, email: 'test@example.com', initials: 'TE' },
                { name: null, email: null, initials: '??' },
              ].map((userData, index) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center gap-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        UserMenuMock,
                        { userData }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'span',
                        {
                          className: 'text-sm text-muted-foreground',
                          children: [
                            userData.name || userData.email || 'No data',
                            ' →',
                            ' ',
                            userData.initials,
                          ],
                        }
                      ),
                    ],
                  },
                  index
                )
              ),
            }),
        },
        KeyboardNavigation = {
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{ArrowDown}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{ArrowDown}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Logging out...')
                ).toBeInTheDocument()
              }))
          },
        },
        CloseOnClickOutside = {
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('John Doe')
                ).toBeInTheDocument()
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                document.body
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.queryByText('John Doe')
                ).not.toBeInTheDocument()
              }))
          },
        },
        CustomStyling = {
          args: { className: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        },
        MultipleInstances = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  UserMenuMock,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  UserMenuMock,
                  { className: 'h-12 w-12 text-lg' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  UserMenuMock,
                  { className: 'h-6 w-6 text-xs' }
                ),
              ],
            }),
        },
        MobileResponsive = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              menuButton = await canvas.findByRole('button', {
                name: /user menu/i,
              })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              menuButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('John Doe')
                ).toBeInTheDocument()
              }))
          },
        },
        DarkMode = {
          parameters: { backgrounds: { default: 'dark' } },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'dark bg-gray-900 p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        __namedExportsOrder = [
          'Default',
          'WithLongName',
          'EmailOnly',
          'NoUserData',
          'Loading',
          'TestMode',
          'OpenMenu',
          'ClickSettings',
          'Logout',
          'DifferentInitials',
          'KeyboardNavigation',
          'CloseOnClickOutside',
          'CustomStyling',
          'MultipleInstances',
          'MobileResponsive',
          'DarkMode',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
        },
      }),
        (WithLongName.parameters = {
          ...WithLongName.parameters,
          docs: {
            ...WithLongName.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    userData: {\n      name: 'Alexander Christopher Johnson III',\n      email: 'alexander.johnson@example.com',\n      initials: 'AJ'\n    }\n  }\n}",
              ...WithLongName.parameters?.docs?.source,
            },
          },
        }),
        (EmailOnly.parameters = {
          ...EmailOnly.parameters,
          docs: {
            ...EmailOnly.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    userData: {\n      name: null,\n      email: 'user@example.com',\n      initials: 'UE'\n    }\n  }\n}",
              ...EmailOnly.parameters?.docs?.source,
            },
          },
        }),
        (NoUserData.parameters = {
          ...NoUserData.parameters,
          docs: {
            ...NoUserData.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    userData: {\n      name: null,\n      email: null,\n      initials: '??'\n    }\n  }\n}",
              ...NoUserData.parameters?.docs?.source,
            },
          },
        }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <UserMenuMock userData={{\n    name: null,\n    email: null,\n    initials: ''\n  }} />\n}",
              ...Loading.parameters?.docs?.source,
            },
          },
        }),
        (TestMode.parameters = {
          ...TestMode.parameters,
          docs: {
            ...TestMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    userData: {\n      name: 'Test User',\n      email: 'test@example.com',\n      initials: 'TU'\n    }\n  }\n}",
              ...TestMode.parameters?.docs?.source,
            },
          },
        }),
        (OpenMenu.parameters = {
          ...OpenMenu.parameters,
          docs: {
            ...OpenMenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for the menu button to appear\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n\n    // Click to open\n    await userEvent.click(menuButton);\n\n    // Check menu is open\n    await waitFor(() => {\n      expect(canvas.getByText('John Doe')).toBeInTheDocument();\n      expect(canvas.getByText('john.doe@example.com')).toBeInTheDocument();\n      expect(canvas.getByText('Settings')).toBeInTheDocument();\n      expect(canvas.getByText('Log out')).toBeInTheDocument();\n    });\n  }\n}",
              ...OpenMenu.parameters?.docs?.source,
            },
          },
        }),
        (ClickSettings.parameters = {
          ...ClickSettings.parameters,
          docs: {
            ...ClickSettings.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open menu\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n    await userEvent.click(menuButton);\n\n    // Click settings\n    const settingsItem = await canvas.findByText('Settings');\n    await userEvent.click(settingsItem);\n\n    // Should show toast\n    await waitFor(() => {\n      expect(canvas.getByText('Settings page coming soon!')).toBeInTheDocument();\n    });\n  }\n}",
              ...ClickSettings.parameters?.docs?.source,
            },
          },
        }),
        (Logout.parameters = {
          ...Logout.parameters,
          docs: {
            ...Logout.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open menu\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n    await userEvent.click(menuButton);\n\n    // Click logout\n    const logoutItem = await canvas.findByText('Log out');\n    await userEvent.click(logoutItem);\n\n    // Should show logging out state\n    await waitFor(() => {\n      expect(canvas.getByText('Logging out...')).toBeInTheDocument();\n    });\n\n    // Should show success toast\n    await waitFor(() => {\n      expect(canvas.getByText('Logged out successfully')).toBeInTheDocument();\n    }, {\n      timeout: 2000\n    });\n  }\n}",
              ...Logout.parameters?.docs?.source,
            },
          },
        }),
        (DifferentInitials.parameters = {
          ...DifferentInitials.parameters,
          docs: {
            ...DifferentInitials.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const users = [{\n      name: 'John Doe',\n      email: 'john@example.com',\n      initials: 'JD'\n    }, {\n      name: 'Alice Bob Charlie',\n      email: 'alice@example.com',\n      initials: 'AB'\n    }, {\n      name: 'SingleName',\n      email: 'single@example.com',\n      initials: 'SI'\n    }, {\n      name: null,\n      email: 'test@example.com',\n      initials: 'TE'\n    }, {\n      name: null,\n      email: null,\n      initials: '??'\n    }];\n    return <div className='space-y-4'>\n        {users.map((userData, index) => <div key={index} className='flex items-center gap-4'>\n            <UserMenuMock userData={userData} />\n            <span className='text-sm text-muted-foreground'>\n              {userData.name || userData.email || 'No data'} →{' '}\n              {userData.initials}\n            </span>\n          </div>)}\n      </div>;\n  }\n}",
              ...DifferentInitials.parameters?.docs?.source,
            },
          },
        }),
        (KeyboardNavigation.parameters = {
          ...KeyboardNavigation.parameters,
          docs: {
            ...KeyboardNavigation.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open menu\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n    await userEvent.click(menuButton);\n\n    // Navigate with arrow keys\n    await userEvent.keyboard('{ArrowDown}');\n    await userEvent.keyboard('{ArrowDown}');\n\n    // Select with Enter\n    await userEvent.keyboard('{Enter}');\n\n    // Should trigger logout\n    await waitFor(() => {\n      expect(canvas.getByText('Logging out...')).toBeInTheDocument();\n    });\n  }\n}",
              ...KeyboardNavigation.parameters?.docs?.source,
            },
          },
        }),
        (CloseOnClickOutside.parameters = {
          ...CloseOnClickOutside.parameters,
          docs: {
            ...CloseOnClickOutside.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open menu\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n    await userEvent.click(menuButton);\n\n    // Verify menu is open\n    await waitFor(() => {\n      expect(canvas.getByText('John Doe')).toBeInTheDocument();\n    });\n\n    // Click outside\n    await userEvent.click(document.body);\n\n    // Menu should close\n    await waitFor(() => {\n      expect(canvas.queryByText('John Doe')).not.toBeInTheDocument();\n    });\n  }\n}",
              ...CloseOnClickOutside.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    className: 'bg-gradient-to-r from-purple-500 to-pink-500'\n  }\n}",
              ...CustomStyling.parameters?.docs?.source,
            },
          },
        }),
        (MultipleInstances.parameters = {
          ...MultipleInstances.parameters,
          docs: {
            ...MultipleInstances.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex gap-4'>\n      <UserMenuMock />\n      <UserMenuMock className='h-12 w-12 text-lg' />\n      <UserMenuMock className='h-6 w-6 text-xs' />\n    </div>\n}",
              ...MultipleInstances.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open menu\n    const menuButton = await canvas.findByRole('button', {\n      name: /user menu/i\n    });\n    await userEvent.click(menuButton);\n\n    // Menu should be visible on mobile\n    await waitFor(() => {\n      expect(canvas.getByText('John Doe')).toBeInTheDocument();\n    });\n  }\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }),
        (DarkMode.parameters = {
          ...DarkMode.parameters,
          docs: {
            ...DarkMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  decorators: [Story => <div className='dark bg-gray-900 p-8'>\n        <Story />\n      </div>]\n}",
              ...DarkMode.parameters?.docs?.source,
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
