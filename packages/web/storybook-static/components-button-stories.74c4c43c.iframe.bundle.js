/*! For license information please see components-button-stories.74c4c43c.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7512],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronRight })
        const ChevronRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Download })
        const Download = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Download', [
          [
            'path',
            { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
          ],
          ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
          ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Heart })
        const Heart = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Heart', [
          [
            'path',
            {
              d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
              key: 'c3ymky',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Search })
        const Search = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Search', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
        ])
      },
    './design-system/components/button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ButtonGroup: () => ButtonGroup,
          Default: () => Default,
          Destructive: () => Destructive,
          Disabled: () => Disabled,
          FullWidth: () => FullWidth,
          Ghost: () => Ghost,
          Gradient: () => Gradient,
          IconOnly: () => IconOnly,
          IconRight: () => IconRight,
          Link: () => Link,
          Loading: () => Loading,
          LoadingStates: () => LoadingStates,
          NoRipple: () => NoRipple,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Sizes: () => Sizes,
          Variants: () => Variants,
          WithIcon: () => WithIcon,
          WithRipple: () => WithRipple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => button_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        components_button =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__('./design-system/components/button.tsx'))
      const Trash2 = (0,
      __webpack_require__(
        '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
      ).A)('Trash2', [
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
        ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
        ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
      ])
      var search = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js'
        ),
        chevron_right = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js'
        ),
        heart = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js'
        ),
        download = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const button_stories = {
          title: 'Design System/Components/Button',
          component: components_button.$,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: { type: 'select' },
              options: [
                'default',
                'primary',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'gradient',
              ],
            },
            size: {
              control: { type: 'select' },
              options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
            loading: { control: { type: 'boolean' } },
            disabled: { control: { type: 'boolean' } },
            fullWidth: { control: { type: 'boolean' } },
            ripple: { control: { type: 'boolean' } },
            iconPosition: {
              control: { type: 'select' },
              options: ['left', 'right'],
            },
          },
        },
        Default = {
          args: { children: 'Button' },
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByRole('button', {
              name: 'Button',
            })
            ;(await (0, dist.E3)(button).toBeVisible(),
              await (0, dist.E3)(button).toBeEnabled(),
              await dist.Q4.click(button),
              await button.focus(),
              await dist.Q4.keyboard('{space}'))
          },
        },
        Primary = {
          args: { variant: 'primary', children: 'Primary Button' },
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByRole('button', {
              name: 'Primary Button',
            })
            ;(await (0, dist.E3)(button).toHaveClass(/primary/),
              await dist.Q4.hover(button),
              await button.focus(),
              await (0, dist.E3)(button).toHaveFocus())
          },
        },
        Secondary = {
          args: { variant: 'secondary', children: 'Secondary Button' },
        },
        Destructive = {
          args: {
            variant: 'destructive',
            children: 'Delete',
            icon: (0, jsx_runtime.jsx)(Trash2, { className: 'h-4 w-4' }),
          },
        },
        Ghost = { args: { variant: 'ghost', children: 'Ghost Button' } },
        Link = { args: { variant: 'link', children: 'Link Button' } },
        Gradient = {
          args: { variant: 'gradient', children: 'Gradient Button' },
        },
        WithIcon = {
          args: {
            variant: 'primary',
            children: 'Search',
            icon: (0, jsx_runtime.jsx)(search.A, { className: 'h-4 w-4' }),
          },
        },
        IconRight = {
          args: {
            variant: 'primary',
            children: 'Next',
            icon: (0, jsx_runtime.jsx)(chevron_right.A, {
              className: 'h-4 w-4',
            }),
            iconPosition: 'right',
          },
        },
        IconOnly = {
          args: {
            variant: 'primary',
            icon: (0, jsx_runtime.jsx)(heart.A, { className: 'h-4 w-4' }),
            size: 'md',
          },
        },
        Loading = {
          args: { variant: 'primary', children: 'Loading', loading: !0 },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              button = canvas.getByRole('button', { name: /loading/i })
            ;(await (0, dist.E3)(button).toBeDisabled(),
              await (0, dist.E3)(button).toHaveAttribute('aria-busy', 'true'))
            const spinner = canvas.getByRole('status')
            await (0, dist.E3)(spinner).toBeInTheDocument()
          },
        },
        Disabled = {
          args: { variant: 'primary', children: 'Disabled', disabled: !0 },
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByRole('button', {
              name: 'Disabled',
            })
            ;(await (0, dist.E3)(button).toBeDisabled(),
              await dist.Q4.click(button),
              await (0, dist.E3)(button).toBeDisabled())
          },
        },
        FullWidth = {
          args: {
            variant: 'primary',
            children: 'Full Width Button',
            fullWidth: !0,
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Sizes = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: { display: 'flex', gap: '1rem', alignItems: 'center' },
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  size: 'xs',
                  children: 'Extra Small',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  size: 'sm',
                  children: 'Small',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  size: 'md',
                  children: 'Medium',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  size: 'lg',
                  children: 'Large',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  size: 'xl',
                  children: 'Extra Large',
                }),
              ],
            }),
        },
        Variants = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: {
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              },
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'default',
                  children: 'Default',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'primary',
                  children: 'Primary',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'secondary',
                  children: 'Secondary',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'destructive',
                  children: 'Destructive',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'ghost',
                  children: 'Ghost',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'link',
                  children: 'Link',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'gradient',
                  children: 'Gradient',
                }),
              ],
            }),
        },
        WithRipple = {
          args: {
            variant: 'primary',
            children: 'Click for Ripple Effect',
            ripple: !0,
          },
          play: async ({ canvasElement }) => {
            const button = (0, dist.ux)(canvasElement).getByRole('button', {
              name: 'Click for Ripple Effect',
            })
            ;(await dist.Q4.click(button),
              await new Promise((resolve) => setTimeout(resolve, 100)),
              await dist.Q4.click(button),
              await new Promise((resolve) => setTimeout(resolve, 100)),
              await dist.Q4.click(button))
          },
        },
        NoRipple = {
          args: {
            variant: 'primary',
            children: 'No Ripple Effect',
            ripple: !1,
          },
        },
        ButtonGroup = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: { display: 'flex', gap: '0.5rem' },
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'secondary',
                  icon: (0, jsx_runtime.jsx)(download.A, {
                    className: 'h-4 w-4',
                  }),
                  children: 'Export',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'primary',
                  icon: (0, jsx_runtime.jsx)(heart.A, { className: 'h-4 w-4' }),
                  children: 'Save',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'destructive',
                  icon: (0, jsx_runtime.jsx)(Trash2, { className: 'h-4 w-4' }),
                  children: 'Delete',
                }),
              ],
            }),
        },
        LoadingStates = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  loading: !0,
                  children: 'Default Loading',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'primary',
                  loading: !0,
                  children: 'Primary Loading',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'secondary',
                  loading: !0,
                  icon: (0, jsx_runtime.jsx)(search.A, {
                    className: 'h-4 w-4',
                  }),
                  children: 'With Icon',
                }),
                (0, jsx_runtime.jsx)(components_button.$, {
                  variant: 'gradient',
                  loading: !0,
                  size: 'lg',
                  children: 'Large Loading',
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'Primary',
          'Secondary',
          'Destructive',
          'Ghost',
          'Link',
          'Gradient',
          'WithIcon',
          'IconRight',
          'IconOnly',
          'Loading',
          'Disabled',
          'FullWidth',
          'Sizes',
          'Variants',
          'WithRipple',
          'NoRipple',
          'ButtonGroup',
          'LoadingStates',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: 'Button'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: 'Button'\n    });\n\n    // Test button is visible and enabled\n    await expect(button).toBeVisible();\n    await expect(button).toBeEnabled();\n\n    // Test click interaction\n    await userEvent.click(button);\n\n    // Test keyboard interaction\n    await button.focus();\n    await userEvent.keyboard('{space}');\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Primary Button'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: 'Primary Button'\n    });\n\n    // Test primary variant styling\n    await expect(button).toHaveClass(/primary/);\n\n    // Test hover state\n    await userEvent.hover(button);\n\n    // Test focus state\n    await button.focus();\n    await expect(button).toHaveFocus();\n  }\n}",
              ...Primary.parameters?.docs?.source,
            },
          },
        }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'secondary',\n    children: 'Secondary Button'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'destructive',\n    children: 'Delete',\n    icon: <Trash2 className='h-4 w-4' />\n  }\n}",
              ...Destructive.parameters?.docs?.source,
            },
          },
        }),
        (Ghost.parameters = {
          ...Ghost.parameters,
          docs: {
            ...Ghost.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'ghost',\n    children: 'Ghost Button'\n  }\n}",
              ...Ghost.parameters?.docs?.source,
            },
          },
        }),
        (Link.parameters = {
          ...Link.parameters,
          docs: {
            ...Link.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'link',\n    children: 'Link Button'\n  }\n}",
              ...Link.parameters?.docs?.source,
            },
          },
        }),
        (Gradient.parameters = {
          ...Gradient.parameters,
          docs: {
            ...Gradient.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'gradient',\n    children: 'Gradient Button'\n  }\n}",
              ...Gradient.parameters?.docs?.source,
            },
          },
        }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Search',\n    icon: <Search className='h-4 w-4' />\n  }\n}",
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (IconRight.parameters = {
          ...IconRight.parameters,
          docs: {
            ...IconRight.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Next',\n    icon: <ChevronRight className='h-4 w-4' />,\n    iconPosition: 'right'\n  }\n}",
              ...IconRight.parameters?.docs?.source,
            },
          },
        }),
        (IconOnly.parameters = {
          ...IconOnly.parameters,
          docs: {
            ...IconOnly.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    icon: <Heart className='h-4 w-4' />,\n    size: 'md'\n  }\n}",
              ...IconOnly.parameters?.docs?.source,
            },
          },
        }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Loading',\n    loading: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: /loading/i\n    });\n\n    // Test loading state\n    await expect(button).toBeDisabled();\n    await expect(button).toHaveAttribute('aria-busy', 'true');\n\n    // Ensure spinner is present\n    const spinner = canvas.getByRole('status');\n    await expect(spinner).toBeInTheDocument();\n  }\n}",
              ...Loading.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Disabled',\n    disabled: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: 'Disabled'\n    });\n\n    // Test disabled state\n    await expect(button).toBeDisabled();\n\n    // Test that click doesn't work\n    await userEvent.click(button);\n    await expect(button).toBeDisabled();\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (FullWidth.parameters = {
          ...FullWidth.parameters,
          docs: {
            ...FullWidth.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Full Width Button',\n    fullWidth: true\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...FullWidth.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    gap: '1rem',\n    alignItems: 'center'\n  }}>\n      <Button size='xs'>Extra Small</Button>\n      <Button size='sm'>Small</Button>\n      <Button size='md'>Medium</Button>\n      <Button size='lg'>Large</Button>\n      <Button size='xl'>Extra Large</Button>\n    </div>\n}",
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
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    gap: '1rem',\n    flexWrap: 'wrap',\n    alignItems: 'center'\n  }}>\n      <Button variant='default'>Default</Button>\n      <Button variant='primary'>Primary</Button>\n      <Button variant='secondary'>Secondary</Button>\n      <Button variant='destructive'>Destructive</Button>\n      <Button variant='ghost'>Ghost</Button>\n      <Button variant='link'>Link</Button>\n      <Button variant='gradient'>Gradient</Button>\n    </div>\n}",
              ...Variants.parameters?.docs?.source,
            },
          },
        }),
        (WithRipple.parameters = {
          ...WithRipple.parameters,
          docs: {
            ...WithRipple.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'Click for Ripple Effect',\n    ripple: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: 'Click for Ripple Effect'\n    });\n\n    // Test multiple clicks for ripple effect\n    await userEvent.click(button);\n    await new Promise(resolve => setTimeout(resolve, 100));\n    await userEvent.click(button);\n    await new Promise(resolve => setTimeout(resolve, 100));\n    await userEvent.click(button);\n  }\n}",
              ...WithRipple.parameters?.docs?.source,
            },
          },
        }),
        (NoRipple.parameters = {
          ...NoRipple.parameters,
          docs: {
            ...NoRipple.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'primary',\n    children: 'No Ripple Effect',\n    ripple: false\n  }\n}",
              ...NoRipple.parameters?.docs?.source,
            },
          },
        }),
        (ButtonGroup.parameters = {
          ...ButtonGroup.parameters,
          docs: {
            ...ButtonGroup.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.5rem'\n  }}>\n      <Button variant='secondary' icon={<Download className='h-4 w-4' />}>\n        Export\n      </Button>\n      <Button variant='primary' icon={<Heart className='h-4 w-4' />}>\n        Save\n      </Button>\n      <Button variant='destructive' icon={<Trash2 className='h-4 w-4' />}>\n        Delete\n      </Button>\n    </div>\n}",
              ...ButtonGroup.parameters?.docs?.source,
            },
          },
        }),
        (LoadingStates.parameters = {
          ...LoadingStates.parameters,
          docs: {
            ...LoadingStates.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    gap: '1rem',\n    flexWrap: 'wrap'\n  }}>\n      <Button loading>Default Loading</Button>\n      <Button variant='primary' loading>\n        Primary Loading\n      </Button>\n      <Button variant='secondary' loading icon={<Search className='h-4 w-4' />}>\n        With Icon\n      </Button>\n      <Button variant='gradient' loading size='lg'>\n        Large Loading\n      </Button>\n    </div>\n}",
              ...LoadingStates.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
