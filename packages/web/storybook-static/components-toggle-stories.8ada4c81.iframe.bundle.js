/*! For license information please see components-toggle-stories.8ada4c81.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5144],
  {
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Moon })
        const Moon = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Moon', [
          ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Sun })
        const Sun = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Sun', [
          ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
          ['path', { d: 'M12 2v2', key: 'tus03m' }],
          ['path', { d: 'M12 20v2', key: '1lh1kg' }],
          ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
          ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
          ['path', { d: 'M2 12h2', key: '1t8f8n' }],
          ['path', { d: 'M20 12h2', key: '1q8mjw' }],
          ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
          ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
        ])
      },
    './design-system/components/toggle.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ComplexExample: () => ComplexExample,
          Default: () => Default,
          Disabled: () => Disabled,
          MicrophoneToggle: () => MicrophoneToggle,
          Pressed: () => Pressed,
          Sizes: () => Sizes,
          SoundToggle: () => SoundToggle,
          TextAlignment: () => TextAlignment,
          TextFormatting: () => TextFormatting,
          ThemeToggle: () => ThemeToggle,
          Variants: () => Variants,
          WithIcon: () => WithIcon,
          WithTooltip: () => WithTooltip,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => toggle_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        toggle = __webpack_require__('./components/ui/toggle.tsx'),
        icons_bold = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js'
        ),
        icons_italic = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js'
        ),
        icons_underline = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js'
        ),
        createLucideIcon = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        )
      const AlignLeft = (0, createLucideIcon.A)('AlignLeft', [
          ['path', { d: 'M15 12H3', key: '6jk70r' }],
          ['path', { d: 'M17 18H3', key: '1amg6g' }],
          ['path', { d: 'M21 6H3', key: '1jwq7v' }],
        ]),
        AlignCenter = (0, createLucideIcon.A)('AlignCenter', [
          ['path', { d: 'M17 12H7', key: '16if0g' }],
          ['path', { d: 'M19 18H5', key: '18s9l3' }],
          ['path', { d: 'M21 6H3', key: '1jwq7v' }],
        ]),
        AlignRight = (0, createLucideIcon.A)('AlignRight', [
          ['path', { d: 'M21 12H9', key: 'dn1m92' }],
          ['path', { d: 'M21 18H7', key: '1ygte8' }],
          ['path', { d: 'M21 6H3', key: '1jwq7v' }],
        ])
      var moon = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js'
        ),
        sun = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js'
        )
      const MicOff = (0, createLucideIcon.A)('MicOff', [
          ['line', { x1: '2', x2: '22', y1: '2', y2: '22', key: 'a6p6uj' }],
          [
            'path',
            { d: 'M18.89 13.23A7.12 7.12 0 0 0 19 12v-2', key: '80xlxr' },
          ],
          ['path', { d: 'M5 10v2a7 7 0 0 0 12 5', key: 'p2k8kg' }],
          ['path', { d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33', key: '1gzdoj' }],
          ['path', { d: 'M9 9v3a3 3 0 0 0 5.12 2.12', key: 'r2i35w' }],
          ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
        ]),
        Mic = (0, createLucideIcon.A)('Mic', [
          [
            'path',
            {
              d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z',
              key: '131961',
            },
          ],
          ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
          ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
        ]),
        VolumeX = (0, createLucideIcon.A)('VolumeX', [
          [
            'path',
            {
              d: 'M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z',
              key: 'uqj9uw',
            },
          ],
          ['line', { x1: '22', x2: '16', y1: '9', y2: '15', key: '1ewh16' }],
          ['line', { x1: '16', x2: '22', y1: '9', y2: '15', key: '5ykzw1' }],
        ]),
        Volume2 = (0, createLucideIcon.A)('Volume2', [
          [
            'path',
            {
              d: 'M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z',
              key: 'uqj9uw',
            },
          ],
          ['path', { d: 'M16 9a5 5 0 0 1 0 6', key: '1q6k2b' }],
          ['path', { d: 'M19.364 18.364a9 9 0 0 0 0-12.728', key: 'ijwkga' }],
        ]),
        toggle_stories = {
          title: 'Design System/Forms/Toggle',
          component: toggle.l,
          tags: ['autodocs'],
          argTypes: {
            pressed: {
              control: 'boolean',
              description: 'Toggle pressed state',
            },
            size: {
              control: 'select',
              options: ['default', 'sm', 'lg'],
              description: 'Toggle size',
            },
            variant: {
              control: 'select',
              options: ['default', 'outline'],
              description: 'Toggle variant',
            },
            disabled: { control: 'boolean', description: 'Disabled state' },
            onPressedChange: { action: 'pressed-changed' },
          },
        },
        Default = { args: { children: 'Toggle' } },
        Pressed = { args: { pressed: !0, children: 'Toggle' } },
        WithIcon = {
          args: {
            children: (0, jsx_runtime.jsx)(icons_bold.A, {
              className: 'h-4 w-4',
            }),
            'aria-label': 'Toggle bold',
          },
        },
        Sizes = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(toggle.l, {
                  size: 'sm',
                  children: (0, jsx_runtime.jsx)(icons_bold.A, {
                    className: 'h-3 w-3',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  size: 'default',
                  children: (0, jsx_runtime.jsx)(icons_bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  size: 'lg',
                  children: (0, jsx_runtime.jsx)(icons_bold.A, {
                    className: 'h-5 w-5',
                  }),
                }),
              ],
            }),
        },
        Variants = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, jsx_runtime.jsx)(toggle.l, {
                  variant: 'default',
                  children: 'Default',
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  variant: 'outline',
                  children: 'Outline',
                }),
              ],
            }),
        },
        Disabled = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, jsx_runtime.jsx)(toggle.l, {
                  disabled: !0,
                  children: 'Disabled',
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  disabled: !0,
                  pressed: !0,
                  children: 'Disabled Pressed',
                }),
              ],
            }),
        },
        TextFormatting = {
          args: {},
          render: () => {
            const [bold, setBold] = react.useState(!1),
              [italic, setItalic] = react.useState(!1),
              [underline, setUnderline] = react.useState(!1)
            return (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-1',
              children: [
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: bold,
                  onPressedChange: setBold,
                  'aria-label': 'Toggle bold',
                  children: (0, jsx_runtime.jsx)(icons_bold.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: italic,
                  onPressedChange: setItalic,
                  'aria-label': 'Toggle italic',
                  children: (0, jsx_runtime.jsx)(icons_italic.A, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: underline,
                  onPressedChange: setUnderline,
                  'aria-label': 'Toggle underline',
                  children: (0, jsx_runtime.jsx)(icons_underline.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            })
          },
        },
        TextAlignment = {
          args: {},
          render: () => {
            const [alignment, setAlignment] = react.useState('left')
            return (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-1',
              children: [
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: 'left' === alignment,
                  onPressedChange: () => setAlignment('left'),
                  'aria-label': 'Align left',
                  children: (0, jsx_runtime.jsx)(AlignLeft, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: 'center' === alignment,
                  onPressedChange: () => setAlignment('center'),
                  'aria-label': 'Align center',
                  children: (0, jsx_runtime.jsx)(AlignCenter, {
                    className: 'h-4 w-4',
                  }),
                }),
                (0, jsx_runtime.jsx)(toggle.l, {
                  pressed: 'right' === alignment,
                  onPressedChange: () => setAlignment('right'),
                  'aria-label': 'Align right',
                  children: (0, jsx_runtime.jsx)(AlignRight, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            })
          },
        },
        ThemeToggle = {
          args: {},
          render: () => {
            const [isDark, setIsDark] = react.useState(!1)
            return (0, jsx_runtime.jsx)(toggle.l, {
              pressed: isDark,
              onPressedChange: setIsDark,
              'aria-label': 'Toggle theme',
              children: isDark
                ? (0, jsx_runtime.jsx)(moon.A, { className: 'h-4 w-4' })
                : (0, jsx_runtime.jsx)(sun.A, { className: 'h-4 w-4' }),
            })
          },
        },
        MicrophoneToggle = {
          args: {},
          render: () => {
            const [isMuted, setIsMuted] = react.useState(!1)
            return (0, jsx_runtime.jsx)('div', {
              className: 'flex items-center gap-4',
              children: (0, jsx_runtime.jsxs)(toggle.l, {
                pressed: isMuted,
                onPressedChange: setIsMuted,
                variant: 'outline',
                className: isMuted ? 'text-destructive' : '',
                children: [
                  isMuted
                    ? (0, jsx_runtime.jsx)(MicOff, { className: 'h-4 w-4' })
                    : (0, jsx_runtime.jsx)(Mic, { className: 'h-4 w-4' }),
                  (0, jsx_runtime.jsx)('span', {
                    className: 'ml-2',
                    children: isMuted ? 'Unmute' : 'Mute',
                  }),
                ],
              }),
            })
          },
        },
        SoundToggle = {
          args: {},
          render: () => {
            const [isMuted, setIsMuted] = react.useState(!1)
            return (0, jsx_runtime.jsx)(toggle.l, {
              pressed: isMuted,
              onPressedChange: setIsMuted,
              size: 'lg',
              variant: isMuted ? 'default' : 'outline',
              children: isMuted
                ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(VolumeX, {
                        className: 'h-4 w-4 mr-2',
                      }),
                      'Sound Off',
                    ],
                  })
                : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(Volume2, {
                        className: 'h-4 w-4 mr-2',
                      }),
                      'Sound On',
                    ],
                  }),
            })
          },
        },
        WithTooltip = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              className: 'flex gap-4',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'relative group',
                children: [
                  (0, jsx_runtime.jsx)(toggle.l, {
                    'aria-label': 'Toggle bold',
                    children: (0, jsx_runtime.jsx)(icons_bold.A, {
                      className: 'h-4 w-4',
                    }),
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    className:
                      'absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded',
                    children: 'Bold (⌘B)',
                  }),
                ],
              }),
            }),
        },
        ComplexExample = {
          args: {},
          render: () => {
            const [settings, setSettings] = react.useState({
                notifications: !0,
                darkMode: !1,
                autoSave: !0,
                compactView: !1,
              }),
              updateSetting = (key) => {
                setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
              }
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4 p-4 border rounded-lg',
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: 'Editor Settings',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-3',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          htmlFor: 'notifications',
                          className: 'text-sm',
                          children: 'Enable notifications',
                        }),
                        (0, jsx_runtime.jsx)(toggle.l, {
                          id: 'notifications',
                          pressed: settings.notifications,
                          onPressedChange: () => updateSetting('notifications'),
                          size: 'sm',
                          children: settings.notifications ? 'On' : 'Off',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          htmlFor: 'dark-mode',
                          className: 'text-sm',
                          children: 'Dark mode',
                        }),
                        (0, jsx_runtime.jsx)(toggle.l, {
                          id: 'dark-mode',
                          pressed: settings.darkMode,
                          onPressedChange: () => updateSetting('darkMode'),
                          size: 'sm',
                          children: settings.darkMode
                            ? (0, jsx_runtime.jsx)(moon.A, {
                                className: 'h-3 w-3',
                              })
                            : (0, jsx_runtime.jsx)(sun.A, {
                                className: 'h-3 w-3',
                              }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          htmlFor: 'auto-save',
                          className: 'text-sm',
                          children: 'Auto-save',
                        }),
                        (0, jsx_runtime.jsx)(toggle.l, {
                          id: 'auto-save',
                          pressed: settings.autoSave,
                          onPressedChange: () => updateSetting('autoSave'),
                          size: 'sm',
                          children: settings.autoSave ? 'On' : 'Off',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          htmlFor: 'compact-view',
                          className: 'text-sm',
                          children: 'Compact view',
                        }),
                        (0, jsx_runtime.jsx)(toggle.l, {
                          id: 'compact-view',
                          pressed: settings.compactView,
                          onPressedChange: () => updateSetting('compactView'),
                          size: 'sm',
                          children: settings.compactView ? 'On' : 'Off',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
        },
        __namedExportsOrder = [
          'Default',
          'Pressed',
          'WithIcon',
          'Sizes',
          'Variants',
          'Disabled',
          'TextFormatting',
          'TextAlignment',
          'ThemeToggle',
          'MicrophoneToggle',
          'SoundToggle',
          'WithTooltip',
          'ComplexExample',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    children: 'Toggle'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Pressed.parameters = {
          ...Pressed.parameters,
          docs: {
            ...Pressed.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    pressed: true,\n    children: 'Toggle'\n  }\n}",
              ...Pressed.parameters?.docs?.source,
            },
          },
        }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: <Bold className='h-4 w-4' />,\n    'aria-label': 'Toggle bold'\n  }\n}",
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div className='flex items-center gap-4'>\n      <Toggle size='sm'>\n        <Bold className='h-3 w-3' />\n      </Toggle>\n      <Toggle size='default'>\n        <Bold className='h-4 w-4' />\n      </Toggle>\n      <Toggle size='lg'>\n        <Bold className='h-5 w-5' />\n      </Toggle>\n    </div>\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Variants.parameters = {
          ...Variants.parameters,
          docs: {
            ...Variants.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div className='flex gap-4'>\n      <Toggle variant='default'>Default</Toggle>\n      <Toggle variant='outline'>Outline</Toggle>\n    </div>\n}",
              ...Variants.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div className='flex gap-4'>\n      <Toggle disabled>Disabled</Toggle>\n      <Toggle disabled pressed>\n        Disabled Pressed\n      </Toggle>\n    </div>\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (TextFormatting.parameters = {
          ...TextFormatting.parameters,
          docs: {
            ...TextFormatting.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [bold, setBold] = React.useState(false);\n    const [italic, setItalic] = React.useState(false);\n    const [underline, setUnderline] = React.useState(false);\n    return <div className='flex gap-1'>\n        <Toggle pressed={bold} onPressedChange={setBold} aria-label='Toggle bold'>\n          <Bold className='h-4 w-4' />\n        </Toggle>\n        <Toggle pressed={italic} onPressedChange={setItalic} aria-label='Toggle italic'>\n          <Italic className='h-4 w-4' />\n        </Toggle>\n        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label='Toggle underline'>\n          <Underline className='h-4 w-4' />\n        </Toggle>\n      </div>;\n  }\n}",
              ...TextFormatting.parameters?.docs?.source,
            },
          },
        }),
        (TextAlignment.parameters = {
          ...TextAlignment.parameters,
          docs: {
            ...TextAlignment.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [alignment, setAlignment] = React.useState('left');\n    return <div className='flex gap-1'>\n        <Toggle pressed={alignment === 'left'} onPressedChange={() => setAlignment('left')} aria-label='Align left'>\n          <AlignLeft className='h-4 w-4' />\n        </Toggle>\n        <Toggle pressed={alignment === 'center'} onPressedChange={() => setAlignment('center')} aria-label='Align center'>\n          <AlignCenter className='h-4 w-4' />\n        </Toggle>\n        <Toggle pressed={alignment === 'right'} onPressedChange={() => setAlignment('right')} aria-label='Align right'>\n          <AlignRight className='h-4 w-4' />\n        </Toggle>\n      </div>;\n  }\n}",
              ...TextAlignment.parameters?.docs?.source,
            },
          },
        }),
        (ThemeToggle.parameters = {
          ...ThemeToggle.parameters,
          docs: {
            ...ThemeToggle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [isDark, setIsDark] = React.useState(false);\n    return <Toggle pressed={isDark} onPressedChange={setIsDark} aria-label='Toggle theme'>\n        {isDark ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}\n      </Toggle>;\n  }\n}",
              ...ThemeToggle.parameters?.docs?.source,
            },
          },
        }),
        (MicrophoneToggle.parameters = {
          ...MicrophoneToggle.parameters,
          docs: {
            ...MicrophoneToggle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [isMuted, setIsMuted] = React.useState(false);\n    return <div className='flex items-center gap-4'>\n        <Toggle pressed={isMuted} onPressedChange={setIsMuted} variant='outline' className={isMuted ? 'text-destructive' : ''}>\n          {isMuted ? <MicOff className='h-4 w-4' /> : <Mic className='h-4 w-4' />}\n          <span className='ml-2'>{isMuted ? 'Unmute' : 'Mute'}</span>\n        </Toggle>\n      </div>;\n  }\n}",
              ...MicrophoneToggle.parameters?.docs?.source,
            },
          },
        }),
        (SoundToggle.parameters = {
          ...SoundToggle.parameters,
          docs: {
            ...SoundToggle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [isMuted, setIsMuted] = React.useState(false);\n    return <Toggle pressed={isMuted} onPressedChange={setIsMuted} size='lg' variant={isMuted ? 'default' : 'outline'}>\n        {isMuted ? <>\n            <VolumeX className='h-4 w-4 mr-2' />\n            Sound Off\n          </> : <>\n            <Volume2 className='h-4 w-4 mr-2' />\n            Sound On\n          </>}\n      </Toggle>;\n  }\n}",
              ...SoundToggle.parameters?.docs?.source,
            },
          },
        }),
        (WithTooltip.parameters = {
          ...WithTooltip.parameters,
          docs: {
            ...WithTooltip.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div className='flex gap-4'>\n      <div className='relative group'>\n        <Toggle aria-label='Toggle bold'>\n          <Bold className='h-4 w-4' />\n        </Toggle>\n        <div className='absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded'>\n          Bold (⌘B)\n        </div>\n      </div>\n    </div>\n}",
              ...WithTooltip.parameters?.docs?.source,
            },
          },
        }),
        (ComplexExample.parameters = {
          ...ComplexExample.parameters,
          docs: {
            ...ComplexExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [settings, setSettings] = React.useState({\n      notifications: true,\n      darkMode: false,\n      autoSave: true,\n      compactView: false\n    });\n    const updateSetting = (key: keyof typeof settings) => {\n      setSettings(prev => ({\n        ...prev,\n        [key]: !prev[key]\n      }));\n    };\n    return <div className='space-y-4 p-4 border rounded-lg'>\n        <h3 className='text-lg font-semibold mb-4'>Editor Settings</h3>\n\n        <div className='space-y-3'>\n          <div className='flex items-center justify-between'>\n            <label htmlFor='notifications' className='text-sm'>\n              Enable notifications\n            </label>\n            <Toggle id='notifications' pressed={settings.notifications} onPressedChange={() => updateSetting('notifications')} size='sm'>\n              {settings.notifications ? 'On' : 'Off'}\n            </Toggle>\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <label htmlFor='dark-mode' className='text-sm'>\n              Dark mode\n            </label>\n            <Toggle id='dark-mode' pressed={settings.darkMode} onPressedChange={() => updateSetting('darkMode')} size='sm'>\n              {settings.darkMode ? <Moon className='h-3 w-3' /> : <Sun className='h-3 w-3' />}\n            </Toggle>\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <label htmlFor='auto-save' className='text-sm'>\n              Auto-save\n            </label>\n            <Toggle id='auto-save' pressed={settings.autoSave} onPressedChange={() => updateSetting('autoSave')} size='sm'>\n              {settings.autoSave ? 'On' : 'Off'}\n            </Toggle>\n          </div>\n\n          <div className='flex items-center justify-between'>\n            <label htmlFor='compact-view' className='text-sm'>\n              Compact view\n            </label>\n            <Toggle id='compact-view' pressed={settings.compactView} onPressedChange={() => updateSetting('compactView')} size='sm'>\n              {settings.compactView ? 'On' : 'Off'}\n            </Toggle>\n          </div>\n        </div>\n      </div>;\n  }\n}",
              ...ComplexExample.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
