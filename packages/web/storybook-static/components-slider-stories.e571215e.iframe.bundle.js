'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5743],
  {
    './components/ui/label.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { J: () => Label })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_avo87xxpi() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '793fd541fe3f75b2c5c7c366593aead322006f1a' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 28 },
                end: { line: 10, column: 2 },
              },
              1: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              2: {
                start: { line: 11, column: 0 },
                end: { line: 11, column: 28 },
              },
              3: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 45 },
                  end: { line: 4, column: 46 },
                },
                loc: {
                  start: { line: 4, column: 77 },
                  end: { line: 10, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/label.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface LabelProps\n  extends React.LabelHTMLAttributes<HTMLLabelElement> {}\n\nconst Label = React.forwardRef<HTMLLabelElement, LabelProps>(\n  ({ className, ...props }, ref) => {\n    return (\n      <label\n        ref={ref}\n        className={cn(\n          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',\n          className\n        )}\n        {...props}\n      />\n    )\n  }\n)\nLabel.displayName = 'Label'\n\nexport { Label }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,CAAC,CAAC,CAAC,CAAC;IAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC;QACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5F,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAE1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '793fd541fe3f75b2c5c7c366593aead322006f1a',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_avo87xxpi = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_avo87xxpi()
      const Label =
        (cov_avo87xxpi().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_avo87xxpi().f[0]++,
            cov_avo87xxpi().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('label', {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_avo87xxpi().s[2]++,
        (Label.displayName = 'Label'),
        cov_avo87xxpi().s[3]++,
        (Label.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Label',
        }))
    },
    './design-system/components/slider.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AudioControls: () => AudioControls,
          ColorPicker: () => ColorPicker,
          CustomRange: () => CustomRange,
          Default: () => Default,
          Disabled: () => Disabled,
          PriceRange: () => PriceRange,
          TimePicker: () => TimePicker,
          WithLabel: () => WithLabel,
          WithRange: () => WithRange,
          WithStep: () => WithStep,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => slider_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@radix-ui+react-slider@1.3.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_c5f6a88900af0ccede532eedc8bda40a/node_modules/@radix-ui/react-slider/dist/index.mjs'
        ),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_1yeq12vvf1() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/slider.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '05f34d81be6462bd324246b4dd51fc1487b9ccd2' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/slider.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 29 },
                end: { line: 21, column: 7 },
              },
              1: {
                start: { line: 6, column: 92 },
                end: { line: 21, column: 6 },
              },
              2: {
                start: { line: 22, column: 0 },
                end: { line: 22, column: 54 },
              },
              3: {
                start: { line: 24, column: 0 },
                end: { line: 27, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 6, column: 46 },
                  end: { line: 6, column: 47 },
                },
                loc: {
                  start: { line: 6, column: 92 },
                  end: { line: 21, column: 6 },
                },
                line: 6,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/slider.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as SliderPrimitive from '@radix-ui/react-slider'\n\nimport { cn } from '@/lib/utils'\n\nconst Slider = React.forwardRef<\n  React.ElementRef<typeof SliderPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <SliderPrimitive.Root\n    ref={ref}\n    className={cn(\n      'relative flex w-full touch-none select-none items-center',\n      className\n    )}\n    {...props}\n  >\n    <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>\n      <SliderPrimitive.Range className='absolute h-full bg-primary' />\n    </SliderPrimitive.Track>\n    <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />\n  </SliderPrimitive.Root>\n))\nSlider.displayName = SliderPrimitive.Root.displayName\n\nexport { Slider }\n",
              ],
              names: [],
              mappings:
                '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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;0BAEjE,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAGvS,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '05f34d81be6462bd324246b4dd51fc1487b9ccd2',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1yeq12vvf1 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1yeq12vvf1()
      const Slider =
        (cov_1yeq12vvf1().s[0]++,
        react.forwardRef(
          ({ className, ...props }, ref) => (
            cov_1yeq12vvf1().f[0]++,
            cov_1yeq12vvf1().s[1]++,
            (0, jsx_runtime.jsxs)(dist.bL, {
              ref,
              className: (0, utils.cn)(
                'relative flex w-full touch-none select-none items-center',
                className
              ),
              ...props,
              children: [
                (0, jsx_runtime.jsx)(dist.CC, {
                  className:
                    'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                  children: (0, jsx_runtime.jsx)(dist.Q6, {
                    className: 'absolute h-full bg-primary',
                  }),
                }),
                (0, jsx_runtime.jsx)(dist.zi, {
                  className:
                    'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                }),
              ],
            })
          )
        ))
      ;(cov_1yeq12vvf1().s[2]++,
        (Slider.displayName = dist.bL.displayName),
        cov_1yeq12vvf1().s[3]++,
        (Slider.__docgenInfo = { description: '', methods: [] }))
      var label = __webpack_require__('./components/ui/label.tsx')
      const slider_stories = {
          title: 'Design System/Forms/Slider',
          component: Slider,
          tags: ['autodocs'],
          argTypes: {
            defaultValue: {
              control: { type: 'object' },
              description: 'Default value',
            },
            value: {
              control: { type: 'object' },
              description: 'Controlled value',
            },
            min: { control: 'number', description: 'Minimum value' },
            max: { control: 'number', description: 'Maximum value' },
            step: { control: 'number', description: 'Step increment' },
            disabled: { control: 'boolean', description: 'Disabled state' },
            onValueChange: { action: 'value-changed' },
          },
        },
        Default = { args: { defaultValue: [50], max: 100 } },
        WithRange = { args: { defaultValue: [25, 75], max: 100 } },
        WithStep = { args: { defaultValue: [50], max: 100, step: 10 } },
        Disabled = { args: { defaultValue: [50], max: 100, disabled: !0 } },
        CustomRange = {
          args: { defaultValue: [5], min: 0, max: 10, step: 0.5 },
        },
        WithLabel = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState([50])
            return (0, jsx_runtime.jsx)('div', {
              className: 'space-y-4',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-2',
                children: [
                  (0, jsx_runtime.jsxs)(label.J, {
                    htmlFor: 'volume',
                    children: ['Volume: ', value[0], '%'],
                  }),
                  (0, jsx_runtime.jsx)(Slider, {
                    id: 'volume',
                    value,
                    onValueChange: setValue,
                    max: 100,
                  }),
                ],
              }),
            })
          },
        },
        PriceRange = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState([20, 80])
            return (0, jsx_runtime.jsx)('div', {
              className: 'space-y-4',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'space-y-2',
                children: [
                  (0, jsx_runtime.jsx)(label.J, { children: 'Price Range' }),
                  (0, jsx_runtime.jsxs)('div', {
                    className:
                      'flex justify-between text-sm text-muted-foreground',
                    children: [
                      (0, jsx_runtime.jsxs)('span', {
                        children: ['$', value[0]],
                      }),
                      (0, jsx_runtime.jsxs)('span', {
                        children: ['$', value[1]],
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Slider, {
                    value,
                    onValueChange: setValue,
                    max: 100,
                    step: 5,
                  }),
                ],
              }),
            })
          },
        },
        AudioControls = {
          args: {},
          render: () => {
            const [volume, setVolume] = react.useState([75]),
              [bass, setBass] = react.useState([50]),
              [treble, setTreble] = react.useState([50])
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-6 max-w-md',
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Audio Settings',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex justify-between',
                          children: [
                            (0, jsx_runtime.jsx)(label.J, {
                              children: 'Volume',
                            }),
                            (0, jsx_runtime.jsxs)('span', {
                              className: 'text-sm text-muted-foreground',
                              children: [volume[0], '%'],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: volume,
                          onValueChange: setVolume,
                          max: 100,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex justify-between',
                          children: [
                            (0, jsx_runtime.jsx)(label.J, { children: 'Bass' }),
                            (0, jsx_runtime.jsx)('span', {
                              className: 'text-sm text-muted-foreground',
                              children: bass[0] - 50,
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: bass,
                          onValueChange: setBass,
                          max: 100,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex justify-between',
                          children: [
                            (0, jsx_runtime.jsx)(label.J, {
                              children: 'Treble',
                            }),
                            (0, jsx_runtime.jsx)('span', {
                              className: 'text-sm text-muted-foreground',
                              children: treble[0] - 50,
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: treble,
                          onValueChange: setTreble,
                          max: 100,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)('button', {
                  onClick: () => {
                    ;(setVolume([75]), setBass([50]), setTreble([50]))
                  },
                  className:
                    'px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90',
                  children: 'Reset to Defaults',
                }),
              ],
            })
          },
        },
        ColorPicker = {
          args: {},
          render: () => {
            const [hue, setHue] = react.useState([180]),
              [saturation, setSaturation] = react.useState([100]),
              [lightness, setLightness] = react.useState([50]),
              color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-6 max-w-md',
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: 'h-24 rounded-lg shadow-md',
                  style: { backgroundColor: color },
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)(label.J, {
                          children: ['Hue: ', hue[0], '°'],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: hue,
                          onValueChange: setHue,
                          max: 360,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)(label.J, {
                          children: ['Saturation: ', saturation[0], '%'],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: saturation,
                          onValueChange: setSaturation,
                          max: 100,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsxs)(label.J, {
                          children: ['Lightness: ', lightness[0], '%'],
                        }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: lightness,
                          onValueChange: setLightness,
                          max: 100,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'p-3 bg-muted rounded-md',
                  children: (0, jsx_runtime.jsx)('code', {
                    className: 'text-sm',
                    children: color,
                  }),
                }),
              ],
            })
          },
        },
        TimePicker = {
          args: {},
          render: () => {
            const [hours, setHours] = react.useState([12]),
              [minutes, setMinutes] = react.useState([30])
            return (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-6 max-w-md',
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  className: 'text-lg font-medium',
                  children: 'Select Time',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-4xl font-mono text-center',
                  children: [
                    hours[0].toString().padStart(2, '0'),
                    ':',
                    minutes[0].toString().padStart(2, '0'),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsx)(label.J, { children: 'Hours' }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: hours,
                          onValueChange: setHours,
                          max: 23,
                          step: 1,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsx)(label.J, { children: 'Minutes' }),
                        (0, jsx_runtime.jsx)(Slider, {
                          value: minutes,
                          onValueChange: setMinutes,
                          max: 59,
                          step: 5,
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
          'WithRange',
          'WithStep',
          'Disabled',
          'CustomRange',
          'WithLabel',
          'PriceRange',
          'AudioControls',
          'ColorPicker',
          'TimePicker',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    defaultValue: [50],\n    max: 100\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithRange.parameters = {
          ...WithRange.parameters,
          docs: {
            ...WithRange.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    defaultValue: [25, 75],\n    max: 100\n  }\n}',
              ...WithRange.parameters?.docs?.source,
            },
          },
        }),
        (WithStep.parameters = {
          ...WithStep.parameters,
          docs: {
            ...WithStep.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    defaultValue: [50],\n    max: 100,\n    step: 10\n  }\n}',
              ...WithStep.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    defaultValue: [50],\n    max: 100,\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (CustomRange.parameters = {
          ...CustomRange.parameters,
          docs: {
            ...CustomRange.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    defaultValue: [5],\n    min: 0,\n    max: 10,\n    step: 0.5\n  }\n}',
              ...CustomRange.parameters?.docs?.source,
            },
          },
        }),
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState([50]);\n    return <div className='space-y-4'>\n        <div className='space-y-2'>\n          <Label htmlFor='volume'>Volume: {value[0]}%</Label>\n          <Slider id='volume' value={value} onValueChange={setValue} max={100} />\n        </div>\n      </div>;\n  }\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (PriceRange.parameters = {
          ...PriceRange.parameters,
          docs: {
            ...PriceRange.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState([20, 80]);\n    return <div className='space-y-4'>\n        <div className='space-y-2'>\n          <Label>Price Range</Label>\n          <div className='flex justify-between text-sm text-muted-foreground'>\n            <span>${value[0]}</span>\n            <span>${value[1]}</span>\n          </div>\n          <Slider value={value} onValueChange={setValue} max={100} step={5} />\n        </div>\n      </div>;\n  }\n}",
              ...PriceRange.parameters?.docs?.source,
            },
          },
        }),
        (AudioControls.parameters = {
          ...AudioControls.parameters,
          docs: {
            ...AudioControls.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [volume, setVolume] = React.useState([75]);\n    const [bass, setBass] = React.useState([50]);\n    const [treble, setTreble] = React.useState([50]);\n    return <div className='space-y-6 max-w-md'>\n        <h3 className='text-lg font-medium'>Audio Settings</h3>\n\n        <div className='space-y-4'>\n          <div className='space-y-2'>\n            <div className='flex justify-between'>\n              <Label>Volume</Label>\n              <span className='text-sm text-muted-foreground'>\n                {volume[0]}%\n              </span>\n            </div>\n            <Slider value={volume} onValueChange={setVolume} max={100} />\n          </div>\n\n          <div className='space-y-2'>\n            <div className='flex justify-between'>\n              <Label>Bass</Label>\n              <span className='text-sm text-muted-foreground'>\n                {bass[0] - 50}\n              </span>\n            </div>\n            <Slider value={bass} onValueChange={setBass} max={100} />\n          </div>\n\n          <div className='space-y-2'>\n            <div className='flex justify-between'>\n              <Label>Treble</Label>\n              <span className='text-sm text-muted-foreground'>\n                {treble[0] - 50}\n              </span>\n            </div>\n            <Slider value={treble} onValueChange={setTreble} max={100} />\n          </div>\n        </div>\n\n        <button onClick={() => {\n        setVolume([75]);\n        setBass([50]);\n        setTreble([50]);\n      }} className='px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90'>\n          Reset to Defaults\n        </button>\n      </div>;\n  }\n}",
              ...AudioControls.parameters?.docs?.source,
            },
          },
        }),
        (ColorPicker.parameters = {
          ...ColorPicker.parameters,
          docs: {
            ...ColorPicker.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [hue, setHue] = React.useState([180]);\n    const [saturation, setSaturation] = React.useState([100]);\n    const [lightness, setLightness] = React.useState([50]);\n    const color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`;\n    return <div className='space-y-6 max-w-md'>\n        <div className='h-24 rounded-lg shadow-md' style={{\n        backgroundColor: color\n      }} />\n\n        <div className='space-y-4'>\n          <div className='space-y-2'>\n            <Label>Hue: {hue[0]}°</Label>\n            <Slider value={hue} onValueChange={setHue} max={360} />\n          </div>\n\n          <div className='space-y-2'>\n            <Label>Saturation: {saturation[0]}%</Label>\n            <Slider value={saturation} onValueChange={setSaturation} max={100} />\n          </div>\n\n          <div className='space-y-2'>\n            <Label>Lightness: {lightness[0]}%</Label>\n            <Slider value={lightness} onValueChange={setLightness} max={100} />\n          </div>\n        </div>\n\n        <div className='p-3 bg-muted rounded-md'>\n          <code className='text-sm'>{color}</code>\n        </div>\n      </div>;\n  }\n}",
              ...ColorPicker.parameters?.docs?.source,
            },
          },
        }),
        (TimePicker.parameters = {
          ...TimePicker.parameters,
          docs: {
            ...TimePicker.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [hours, setHours] = React.useState([12]);\n    const [minutes, setMinutes] = React.useState([30]);\n    return <div className='space-y-6 max-w-md'>\n        <h3 className='text-lg font-medium'>Select Time</h3>\n\n        <div className='text-4xl font-mono text-center'>\n          {hours[0].toString().padStart(2, '0')}:\n          {minutes[0].toString().padStart(2, '0')}\n        </div>\n\n        <div className='space-y-4'>\n          <div className='space-y-2'>\n            <Label>Hours</Label>\n            <Slider value={hours} onValueChange={setHours} max={23} step={1} />\n          </div>\n\n          <div className='space-y-2'>\n            <Label>Minutes</Label>\n            <Slider value={minutes} onValueChange={setMinutes} max={59} step={5} />\n          </div>\n        </div>\n      </div>;\n  }\n}",
              ...TimePicker.parameters?.docs?.source,
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
