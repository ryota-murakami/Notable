'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1294],
  {
    './design-system/components/card.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ActionCards: () => ActionCards,
          Bordered: () => Bordered,
          CollapsibleCard: () => CollapsibleCard,
          CompleteExample: () => CompleteExample,
          Default: () => Default,
          Elevated: () => Elevated,
          FeatureCards: () => FeatureCards,
          Glass: () => Glass,
          Gradient: () => Gradient,
          InteractiveCards: () => InteractiveCards,
          LoadingCard: () => LoadingCard,
          MetricCards: () => MetricCards,
          NotificationCards: () => NotificationCards,
          Premium: () => Premium,
          ProgressCards: () => ProgressCards,
          SelectableCards: () => SelectableCards,
          StatusCards: () => StatusCards,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './design-system/components/card.tsx'
        ),
        _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/palette.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap.js'
          ),
        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js'
          ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Components/Card',
          component: _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: { type: 'select' },
              options: [
                'default',
                'elevated',
                'bordered',
                'ghost',
                'gradient',
                'glass',
                'neumorphism',
                'premium',
              ],
            },
            hover: {
              control: { type: 'select' },
              options: [
                'none',
                'lift',
                'glow',
                'scale',
                'tilt',
                'float',
                'rotate',
              ],
            },
            status: {
              control: { type: 'select' },
              options: ['default', 'success', 'warning', 'error', 'info'],
            },
            interactive: { control: { type: 'boolean' } },
            loading: { control: { type: 'boolean' } },
            blur: { control: { type: 'boolean' } },
            selectable: { control: { type: 'boolean' } },
            selected: { control: { type: 'boolean' } },
            collapsible: { control: { type: 'boolean' } },
            collapsed: { control: { type: 'boolean' } },
          },
        },
        Default = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Card Title' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          { children: 'Card description goes here' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children:
                          'This is the card content area where you can place any content.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Elevated = {
          args: {
            variant: 'elevated',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Elevated Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          { children: 'This card has a shadow elevation' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children:
                          'Elevated cards appear to float above the surface.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Bordered = {
          args: {
            variant: 'bordered',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Bordered Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          { children: 'This card has a prominent border' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children: 'Bordered cards have a more defined edge.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Gradient = {
          args: {
            variant: 'gradient',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Gradient Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          {
                            children:
                              'This card has a subtle gradient background',
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children:
                          'Gradient cards add visual interest with subtle color transitions.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Glass = {
          args: {
            variant: 'glass',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Glass Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          { children: 'This card has a glassmorphism effect' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children:
                          'Glass cards work best on colorful backgrounds.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: {
                  width: '400px',
                  background: 'linear-gradient(to br, #3b82f6, #8b5cf6)',
                  padding: '2rem',
                },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Premium = {
          args: {
            variant: 'premium',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Premium Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          {
                            children:
                              'This card has a premium, sophisticated look',
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children:
                          'Premium cards are perfect for highlighting special content.',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        InteractiveCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                width: '800px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    variant: 'elevated',
                    hover: 'lift',
                    interactive: !0,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Lift on Hover' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            { children: 'This card lifts when hovered' }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    variant: 'elevated',
                    hover: 'glow',
                    interactive: !0,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Glow on Hover' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            { children: 'This card glows when hovered' }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    variant: 'elevated',
                    hover: 'scale',
                    interactive: !0,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Scale on Hover' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            { children: 'This card scales when hovered' }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    variant: 'elevated',
                    hover: 'tilt',
                    interactive: !0,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Tilt on Hover' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            {
                              children:
                                'This card tilts based on mouse position',
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
        StatusCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '400px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    status: 'success',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Success Status' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            {
                              children: 'This operation completed successfully',
                            }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    status: 'warning',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Warning Status' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            {
                              children:
                                'Please review this important information',
                            }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    status: 'error',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Error Status' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            { children: 'An error occurred during processing' }
                          ),
                        ],
                      }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    status: 'info',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Info Status' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            { children: "Here's some helpful information" }
                          ),
                        ],
                      }
                    ),
                  }
                ),
              ],
            }),
        },
        SelectableCards = {
          render: () => {
            const [selected, setSelected] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState(null)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  width: '600px',
                },
                children: [1, 2, 3].map((i) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                    {
                      selectable: !0,
                      selected: selected === i,
                      onClick: () => setSelected(i),
                      hover: 'lift',
                      interactive: !0,
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                              { children: ['Option ', i] }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                              { children: 'Click to select' }
                            ),
                          ],
                        }
                      ),
                    },
                    i
                  )
                ),
              }
            )
          },
        },
        CollapsibleCard = {
          render: () => {
            const [collapsed, setCollapsed] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              'div',
              {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                  {
                    collapsible: !0,
                    collapsed,
                    onToggle: () => setCollapsed(!collapsed),
                    variant: 'bordered',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                              { children: 'Collapsible Card' }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                              {
                                children: [
                                  'Click to ',
                                  collapsed ? 'expand' : 'collapse',
                                ],
                              }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                children:
                                  'This content can be hidden by clicking on the card.',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                children:
                                  "It's useful for reducing visual clutter when you have many cards.",
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
          },
        },
        FeatureCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                width: '900px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.dd,
                  {
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                      { className: 'h-6 w-6' }
                    ),
                    title: 'Rich Documentation',
                    description:
                      'Comprehensive guides and API references for all components',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.dd,
                  {
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,
                      { className: 'h-6 w-6' }
                    ),
                    title: 'TypeScript Support',
                    description:
                      'Full TypeScript support with detailed type definitions',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.dd,
                  {
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
                      { className: 'h-6 w-6' }
                    ),
                    title: 'Customizable Themes',
                    description: 'Easy theme customization with CSS variables',
                  }
                ),
              ],
            }),
        },
        MetricCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                width: '900px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.fg,
                  {
                    label: 'Total Revenue',
                    value: '$45,231.89',
                    change: 20.1,
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_7__.A,
                      { className: 'h-4 w-4' }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.fg,
                  {
                    label: 'Active Users',
                    value: '2,350',
                    change: -4.3,
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_8__.A,
                      { className: 'h-4 w-4' }
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.fg,
                  {
                    label: 'Conversion Rate',
                    value: '12.5%',
                    change: 12.8,
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__.A,
                      { className: 'h-4 w-4' }
                    ),
                  }
                ),
              ],
            }),
        },
        ProgressCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '400px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.gz,
                  {
                    title: 'Project Progress',
                    description: 'Q4 Development Milestones',
                    progress: 65,
                    color: 'primary',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.gz,
                  {
                    title: 'Storage Used',
                    description: '8.2 GB of 10 GB',
                    progress: 82,
                    color: 'warning',
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.gz,
                  {
                    title: 'API Uptime',
                    description: 'Last 30 days',
                    progress: 99.9,
                    color: 'success',
                  }
                ),
              ],
            }),
        },
        NotificationCards = {
          render: () => {
            const [cards, setCards] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState([
                {
                  id: 1,
                  type: 'info',
                  title: 'System Update',
                  message: 'A new version is available',
                },
                {
                  id: 2,
                  type: 'success',
                  title: 'Upload Complete',
                  message: 'Your files have been uploaded successfully',
                },
                {
                  id: 3,
                  type: 'warning',
                  title: 'Storage Warning',
                  message: "You're running low on storage space",
                },
                {
                  id: 4,
                  type: 'error',
                  title: 'Connection Error',
                  message: 'Failed to connect to the server',
                },
              ])
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              'div',
              {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '500px',
                },
                children: cards.map((card) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Ow,
                    {
                      type: card.type,
                      title: card.title,
                      message: card.message,
                      icon: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_10__.A,
                        { className: 'h-5 w-5' }
                      ),
                      onDismiss: () =>
                        setCards(cards.filter((c) => c.id !== card.id)),
                    },
                    card.id
                  )
                ),
              }
            )
          },
        },
        ActionCards = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                width: '800px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Lz,
                  {
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                      { className: 'h-6 w-6' }
                    ),
                    title: 'Get Started',
                    description:
                      'Learn the basics with our comprehensive tutorial',
                    primaryAction: {
                      label: 'Start Tutorial',
                      onClick: () => console.info('Start tutorial'),
                    },
                    secondaryAction: {
                      label: 'Skip',
                      onClick: () => console.info('Skip'),
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _card__WEBPACK_IMPORTED_MODULE_2__.Lz,
                  {
                    icon: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AlertCircle_BookOpen_Code_Palette_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__.A,
                      { className: 'h-6 w-6' }
                    ),
                    title: 'Upgrade Plan',
                    description: 'Unlock premium features and unlimited access',
                    primaryAction: {
                      label: 'Upgrade Now',
                      onClick: () => console.info('Upgrade'),
                      loading: !1,
                    },
                    secondaryAction: {
                      label: 'Learn More',
                      onClick: () => console.info('Learn more'),
                    },
                  }
                ),
              ],
            }),
        },
        LoadingCard = {
          args: {
            loading: !0,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                          { children: 'Loading Card' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                          { children: 'This card is in a loading state' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        children: 'Content is being loaded...',
                      }),
                    }
                  ),
                ],
              }
            ),
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { width: '400px' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        CompleteExample = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: { width: '400px' },
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _card__WEBPACK_IMPORTED_MODULE_2__.Zp,
                {
                  variant: 'elevated',
                  hover: 'lift',
                  interactive: !0,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.aR,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.ZB,
                            { children: 'Complete Card Example' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _card__WEBPACK_IMPORTED_MODULE_2__.BT,
                            {
                              children:
                                'This demonstrates all card sections together',
                            }
                          ),
                        ],
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.Wu,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Cards are versatile containers that can hold various types of content including text, images, and interactive elements.',
                          }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _card__WEBPACK_IMPORTED_MODULE_2__.wL,
                      {
                        className: 'justify-between',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _button__WEBPACK_IMPORTED_MODULE_3__.$,
                            { variant: 'ghost', children: 'Cancel' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _button__WEBPACK_IMPORTED_MODULE_3__.$,
                            { variant: 'primary', children: 'Continue' }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Elevated',
          'Bordered',
          'Gradient',
          'Glass',
          'Premium',
          'InteractiveCards',
          'StatusCards',
          'SelectableCards',
          'CollapsibleCard',
          'FeatureCards',
          'MetricCards',
          'ProgressCards',
          'NotificationCards',
          'ActionCards',
          'LoadingCard',
          'CompleteExample',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: <>\n        <CardHeader>\n          <CardTitle>Card Title</CardTitle>\n          <CardDescription>Card description goes here</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>This is the card content area where you can place any content.</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Elevated.parameters = {
          ...Elevated.parameters,
          docs: {
            ...Elevated.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'elevated',\n    children: <>\n        <CardHeader>\n          <CardTitle>Elevated Card</CardTitle>\n          <CardDescription>This card has a shadow elevation</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>Elevated cards appear to float above the surface.</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...Elevated.parameters?.docs?.source,
            },
          },
        }),
        (Bordered.parameters = {
          ...Bordered.parameters,
          docs: {
            ...Bordered.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'bordered',\n    children: <>\n        <CardHeader>\n          <CardTitle>Bordered Card</CardTitle>\n          <CardDescription>This card has a prominent border</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>Bordered cards have a more defined edge.</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...Bordered.parameters?.docs?.source,
            },
          },
        }),
        (Gradient.parameters = {
          ...Gradient.parameters,
          docs: {
            ...Gradient.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'gradient',\n    children: <>\n        <CardHeader>\n          <CardTitle>Gradient Card</CardTitle>\n          <CardDescription>\n            This card has a subtle gradient background\n          </CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>\n            Gradient cards add visual interest with subtle color transitions.\n          </p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...Gradient.parameters?.docs?.source,
            },
          },
        }),
        (Glass.parameters = {
          ...Glass.parameters,
          docs: {
            ...Glass.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'glass',\n    children: <>\n        <CardHeader>\n          <CardTitle>Glass Card</CardTitle>\n          <CardDescription>\n            This card has a glassmorphism effect\n          </CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>Glass cards work best on colorful backgrounds.</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px',\n    background: 'linear-gradient(to br, #3b82f6, #8b5cf6)',\n    padding: '2rem'\n  }}>\n        <Story />\n      </div>]\n}",
              ...Glass.parameters?.docs?.source,
            },
          },
        }),
        (Premium.parameters = {
          ...Premium.parameters,
          docs: {
            ...Premium.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'premium',\n    children: <>\n        <CardHeader>\n          <CardTitle>Premium Card</CardTitle>\n          <CardDescription>\n            This card has a premium, sophisticated look\n          </CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>Premium cards are perfect for highlighting special content.</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...Premium.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveCards.parameters = {
          ...InteractiveCards.parameters,
          docs: {
            ...InteractiveCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(2, 1fr)',\n    gap: '1rem',\n    width: '800px'\n  }}>\n      <Card variant='elevated' hover='lift' interactive>\n        <CardHeader>\n          <CardTitle>Lift on Hover</CardTitle>\n          <CardDescription>This card lifts when hovered</CardDescription>\n        </CardHeader>\n      </Card>\n      <Card variant='elevated' hover='glow' interactive>\n        <CardHeader>\n          <CardTitle>Glow on Hover</CardTitle>\n          <CardDescription>This card glows when hovered</CardDescription>\n        </CardHeader>\n      </Card>\n      <Card variant='elevated' hover='scale' interactive>\n        <CardHeader>\n          <CardTitle>Scale on Hover</CardTitle>\n          <CardDescription>This card scales when hovered</CardDescription>\n        </CardHeader>\n      </Card>\n      <Card variant='elevated' hover='tilt' interactive>\n        <CardHeader>\n          <CardTitle>Tilt on Hover</CardTitle>\n          <CardDescription>\n            This card tilts based on mouse position\n          </CardDescription>\n        </CardHeader>\n      </Card>\n    </div>\n}",
              ...InteractiveCards.parameters?.docs?.source,
            },
          },
        }),
        (StatusCards.parameters = {
          ...StatusCards.parameters,
          docs: {
            ...StatusCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '400px'\n  }}>\n      <Card status='success'>\n        <CardHeader>\n          <CardTitle>Success Status</CardTitle>\n          <CardDescription>\n            This operation completed successfully\n          </CardDescription>\n        </CardHeader>\n      </Card>\n      <Card status='warning'>\n        <CardHeader>\n          <CardTitle>Warning Status</CardTitle>\n          <CardDescription>\n            Please review this important information\n          </CardDescription>\n        </CardHeader>\n      </Card>\n      <Card status='error'>\n        <CardHeader>\n          <CardTitle>Error Status</CardTitle>\n          <CardDescription>An error occurred during processing</CardDescription>\n        </CardHeader>\n      </Card>\n      <Card status='info'>\n        <CardHeader>\n          <CardTitle>Info Status</CardTitle>\n          <CardDescription>Here's some helpful information</CardDescription>\n        </CardHeader>\n      </Card>\n    </div>\n}",
              ...StatusCards.parameters?.docs?.source,
            },
          },
        }),
        (SelectableCards.parameters = {
          ...SelectableCards.parameters,
          docs: {
            ...SelectableCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [selected, setSelected] = React.useState<number | null>(null);\n    return <div style={{\n      display: 'grid',\n      gridTemplateColumns: 'repeat(3, 1fr)',\n      gap: '1rem',\n      width: '600px'\n    }}>\n        {[1, 2, 3].map(i => <Card key={i} selectable selected={selected === i} onClick={() => setSelected(i)} hover='lift' interactive>\n            <CardHeader>\n              <CardTitle>Option {i}</CardTitle>\n              <CardDescription>Click to select</CardDescription>\n            </CardHeader>\n          </Card>)}\n      </div>;\n  }\n}",
              ...SelectableCards.parameters?.docs?.source,
            },
          },
        }),
        (CollapsibleCard.parameters = {
          ...CollapsibleCard.parameters,
          docs: {
            ...CollapsibleCard.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [collapsed, setCollapsed] = React.useState(false);\n    return <div style={{\n      width: '400px'\n    }}>\n        <Card collapsible collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} variant='bordered'>\n          <CardHeader>\n            <CardTitle>Collapsible Card</CardTitle>\n            <CardDescription>\n              Click to {collapsed ? 'expand' : 'collapse'}\n            </CardDescription>\n          </CardHeader>\n          <CardContent>\n            <p>This content can be hidden by clicking on the card.</p>\n            <p>\n              It's useful for reducing visual clutter when you have many cards.\n            </p>\n          </CardContent>\n        </Card>\n      </div>;\n  }\n}",
              ...CollapsibleCard.parameters?.docs?.source,
            },
          },
        }),
        (FeatureCards.parameters = {
          ...FeatureCards.parameters,
          docs: {
            ...FeatureCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(3, 1fr)',\n    gap: '1rem',\n    width: '900px'\n  }}>\n      <FeatureCard icon={<BookOpen className='h-6 w-6' />} title='Rich Documentation' description='Comprehensive guides and API references for all components' />\n      <FeatureCard icon={<Code className='h-6 w-6' />} title='TypeScript Support' description='Full TypeScript support with detailed type definitions' />\n      <FeatureCard icon={<Palette className='h-6 w-6' />} title='Customizable Themes' description='Easy theme customization with CSS variables' />\n    </div>\n}",
              ...FeatureCards.parameters?.docs?.source,
            },
          },
        }),
        (MetricCards.parameters = {
          ...MetricCards.parameters,
          docs: {
            ...MetricCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(3, 1fr)',\n    gap: '1rem',\n    width: '900px'\n  }}>\n      <MetricCard label='Total Revenue' value='$45,231.89' change={20.1} icon={<TrendingUp className='h-4 w-4' />} />\n      <MetricCard label='Active Users' value='2,350' change={-4.3} icon={<Users className='h-4 w-4' />} />\n      <MetricCard label='Conversion Rate' value='12.5%' change={12.8} icon={<Zap className='h-4 w-4' />} />\n    </div>\n}",
              ...MetricCards.parameters?.docs?.source,
            },
          },
        }),
        (ProgressCards.parameters = {
          ...ProgressCards.parameters,
          docs: {
            ...ProgressCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '400px'\n  }}>\n      <ProgressCard title='Project Progress' description='Q4 Development Milestones' progress={65} color='primary' />\n      <ProgressCard title='Storage Used' description='8.2 GB of 10 GB' progress={82} color='warning' />\n      <ProgressCard title='API Uptime' description='Last 30 days' progress={99.9} color='success' />\n    </div>\n}",
              ...ProgressCards.parameters?.docs?.source,
            },
          },
        }),
        (NotificationCards.parameters = {
          ...NotificationCards.parameters,
          docs: {
            ...NotificationCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [cards, setCards] = React.useState([{\n      id: 1,\n      type: 'info' as const,\n      title: 'System Update',\n      message: 'A new version is available'\n    }, {\n      id: 2,\n      type: 'success' as const,\n      title: 'Upload Complete',\n      message: 'Your files have been uploaded successfully'\n    }, {\n      id: 3,\n      type: 'warning' as const,\n      title: 'Storage Warning',\n      message: \"You're running low on storage space\"\n    }, {\n      id: 4,\n      type: 'error' as const,\n      title: 'Connection Error',\n      message: 'Failed to connect to the server'\n    }]);\n    return <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem',\n      width: '500px'\n    }}>\n        {cards.map(card => <NotificationCard key={card.id} type={card.type} title={card.title} message={card.message} icon={<AlertCircle className='h-5 w-5' />} onDismiss={() => setCards(cards.filter(c => c.id !== card.id))} />)}\n      </div>;\n  }\n}",
              ...NotificationCards.parameters?.docs?.source,
            },
          },
        }),
        (ActionCards.parameters = {
          ...ActionCards.parameters,
          docs: {
            ...ActionCards.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(2, 1fr)',\n    gap: '1rem',\n    width: '800px'\n  }}>\n      <ActionCard icon={<BookOpen className='h-6 w-6' />} title='Get Started' description='Learn the basics with our comprehensive tutorial' primaryAction={{\n      label: 'Start Tutorial',\n      onClick: () => console.info('Start tutorial')\n    }} secondaryAction={{\n      label: 'Skip',\n      onClick: () => console.info('Skip')\n    }} />\n      <ActionCard icon={<Zap className='h-6 w-6' />} title='Upgrade Plan' description='Unlock premium features and unlimited access' primaryAction={{\n      label: 'Upgrade Now',\n      onClick: () => console.info('Upgrade'),\n      loading: false\n    }} secondaryAction={{\n      label: 'Learn More',\n      onClick: () => console.info('Learn more')\n    }} />\n    </div>\n}",
              ...ActionCards.parameters?.docs?.source,
            },
          },
        }),
        (LoadingCard.parameters = {
          ...LoadingCard.parameters,
          docs: {
            ...LoadingCard.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    loading: true,\n    children: <>\n        <CardHeader>\n          <CardTitle>Loading Card</CardTitle>\n          <CardDescription>This card is in a loading state</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>Content is being loaded...</p>\n        </CardContent>\n      </>\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...LoadingCard.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExample.parameters = {
          ...CompleteExample.parameters,
          docs: {
            ...CompleteExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    width: '400px'\n  }}>\n      <Card variant='elevated' hover='lift' interactive>\n        <CardHeader>\n          <CardTitle>Complete Card Example</CardTitle>\n          <CardDescription>\n            This demonstrates all card sections together\n          </CardDescription>\n        </CardHeader>\n        <CardContent>\n          <p>\n            Cards are versatile containers that can hold various types of\n            content including text, images, and interactive elements.\n          </p>\n        </CardContent>\n        <CardFooter className='justify-between'>\n          <Button variant='ghost'>Cancel</Button>\n          <Button variant='primary'>Continue</Button>\n        </CardFooter>\n      </Card>\n    </div>\n}",
              ...CompleteExample.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
