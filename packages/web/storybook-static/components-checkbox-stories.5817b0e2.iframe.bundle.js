/*! For license information please see components-checkbox-stories.5817b0e2.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5483],
  {
    '../../node_modules/.pnpm/@radix-ui+react-checkbox@1.3.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_c5e16db2dcf884afb83d2b1801cb62c2/node_modules/@radix-ui/react-checkbox/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          C1: () => CheckboxIndicator,
          bL: () => Checkbox,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs'
            ),
          _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
            ),
          _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_949a0df3eae86665e086aa01aee25ebf/node_modules/@radix-ui/react-presence/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          [createCheckboxContext, createCheckboxScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Checkbox'),
          [CheckboxProviderImpl, useCheckboxContext] =
            createCheckboxContext('Checkbox')
        function CheckboxProvider(props) {
          const {
              __scopeCheckbox,
              checked: checkedProp,
              children,
              defaultChecked,
              disabled,
              form,
              name,
              onCheckedChange,
              required,
              value = 'on',
              internal_do_not_use_render,
            } = props,
            [checked, setChecked] = (0,
            _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.i)(
              {
                prop: checkedProp,
                defaultProp: defaultChecked ?? !1,
                onChange: onCheckedChange,
                caller: 'Checkbox',
              }
            ),
            [control, setControl] =
              react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
            [bubbleInput, setBubbleInput] =
              react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
            hasConsumerStoppedPropagationRef =
              react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
            isFormControl = !control || !!form || !!control.closest('form'),
            context = {
              checked,
              disabled,
              setChecked,
              control,
              setControl,
              name,
              form,
              value,
              hasConsumerStoppedPropagationRef,
              required,
              defaultChecked:
                !isIndeterminate(defaultChecked) && defaultChecked,
              isFormControl,
              bubbleInput,
              setBubbleInput,
            }
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            CheckboxProviderImpl,
            {
              scope: __scopeCheckbox,
              ...context,
              children: isFunction(internal_do_not_use_render)
                ? internal_do_not_use_render(context)
                : children,
            }
          )
        }
        var CheckboxTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (
            { __scopeCheckbox, onKeyDown, onClick, ...checkboxProps },
            forwardedRef
          ) => {
            const {
                control,
                value,
                disabled,
                checked,
                required,
                setControl,
                setChecked,
                hasConsumerStoppedPropagationRef,
                isFormControl,
                bubbleInput,
              } = useCheckboxContext('CheckboxTrigger', __scopeCheckbox),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(
                forwardedRef,
                setControl
              ),
              initialCheckedStateRef =
                react__WEBPACK_IMPORTED_MODULE_0__.useRef(checked)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const form = control?.form
                if (form) {
                  const reset = () => setChecked(initialCheckedStateRef.current)
                  return (
                    form.addEventListener('reset', reset),
                    () => form.removeEventListener('reset', reset)
                  )
                }
              }, [control, setChecked]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG
                  .button,
                {
                  type: 'button',
                  role: 'checkbox',
                  'aria-checked': isIndeterminate(checked) ? 'mixed' : checked,
                  'aria-required': required,
                  'data-state': getState(checked),
                  'data-disabled': disabled ? '' : void 0,
                  disabled,
                  value,
                  ...checkboxProps,
                  ref: composedRefs,
                  onKeyDown: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(
                    onKeyDown,
                    (event) => {
                      'Enter' === event.key && event.preventDefault()
                    }
                  ),
                  onClick: (0,
                  _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(
                    onClick,
                    (event) => {
                      ;(setChecked(
                        (prevChecked) =>
                          !!isIndeterminate(prevChecked) || !prevChecked
                      ),
                        bubbleInput &&
                          isFormControl &&
                          ((hasConsumerStoppedPropagationRef.current =
                            event.isPropagationStopped()),
                          hasConsumerStoppedPropagationRef.current ||
                            event.stopPropagation()))
                    }
                  ),
                }
              )
            )
          }
        )
        CheckboxTrigger.displayName = 'CheckboxTrigger'
        var Checkbox = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeCheckbox,
              name,
              checked,
              defaultChecked,
              required,
              disabled,
              value,
              onCheckedChange,
              form,
              ...checkboxProps
            } = props
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              CheckboxProvider,
              {
                __scopeCheckbox,
                checked,
                defaultChecked,
                disabled,
                required,
                onCheckedChange,
                name,
                form,
                value,
                internal_do_not_use_render: ({ isFormControl }) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          CheckboxTrigger,
                          {
                            ...checkboxProps,
                            ref: forwardedRef,
                            __scopeCheckbox,
                          }
                        ),
                        isFormControl &&
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                            CheckboxBubbleInput,
                            { __scopeCheckbox }
                          ),
                      ],
                    }
                  ),
              }
            )
          }
        )
        Checkbox.displayName = 'Checkbox'
        var CheckboxIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeCheckbox, forceMount, ...indicatorProps } = props,
              context = useCheckboxContext('CheckboxIndicator', __scopeCheckbox)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.C,
              {
                present:
                  forceMount ||
                  isIndeterminate(context.checked) ||
                  !0 === context.checked,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG
                    .span,
                  {
                    'data-state': getState(context.checked),
                    'data-disabled': context.disabled ? '' : void 0,
                    ...indicatorProps,
                    ref: forwardedRef,
                    style: { pointerEvents: 'none', ...props.style },
                  }
                ),
              }
            )
          }
        )
        CheckboxIndicator.displayName = 'CheckboxIndicator'
        var CheckboxBubbleInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          ({ __scopeCheckbox, ...props }, forwardedRef) => {
            const {
                control,
                hasConsumerStoppedPropagationRef,
                checked,
                defaultChecked,
                required,
                disabled,
                name,
                value,
                form,
                bubbleInput,
                setBubbleInput,
              } = useCheckboxContext('CheckboxBubbleInput', __scopeCheckbox),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(
                forwardedRef,
                setBubbleInput
              ),
              prevChecked = (0,
              _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__.Z)(
                checked
              ),
              controlSize = (0,
              _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__.X)(control)
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              const input = bubbleInput
              if (!input) return
              const inputProto = window.HTMLInputElement.prototype,
                setChecked = Object.getOwnPropertyDescriptor(
                  inputProto,
                  'checked'
                ).set,
                bubbles = !hasConsumerStoppedPropagationRef.current
              if (prevChecked !== checked && setChecked) {
                const event = new Event('click', { bubbles })
                ;((input.indeterminate = isIndeterminate(checked)),
                  setChecked.call(input, !isIndeterminate(checked) && checked),
                  input.dispatchEvent(event))
              }
            }, [
              bubbleInput,
              prevChecked,
              checked,
              hasConsumerStoppedPropagationRef,
            ])
            const defaultCheckedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(
              !isIndeterminate(checked) && checked
            )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.input,
              {
                type: 'checkbox',
                'aria-hidden': !0,
                defaultChecked: defaultChecked ?? defaultCheckedRef.current,
                required,
                disabled,
                name,
                value,
                form,
                ...props,
                tabIndex: -1,
                ref: composedRefs,
                style: {
                  ...props.style,
                  ...controlSize,
                  position: 'absolute',
                  pointerEvents: 'none',
                  opacity: 0,
                  margin: 0,
                  transform: 'translateX(-100%)',
                },
              }
            )
          }
        )
        function isFunction(value) {
          return 'function' == typeof value
        }
        function isIndeterminate(checked) {
          return 'indeterminate' === checked
        }
        function getState(checked) {
          return isIndeterminate(checked)
            ? 'indeterminate'
            : checked
              ? 'checked'
              : 'unchecked'
        }
        CheckboxBubbleInput.displayName = 'CheckboxBubbleInput'
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => usePrevious })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function usePrevious(value) {
          const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
            value,
            previous: value,
          })
          return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
            () => (
              ref.current.value !== value &&
                ((ref.current.previous = ref.current.value),
                (ref.current.value = value)),
              ref.current.previous
            ),
            [value]
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { X: () => useSize })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            )
        function useSize(element) {
          const [size, setSize] =
            react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0)
          return (
            (0,
            _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)(() => {
              if (element) {
                setSize({
                  width: element.offsetWidth,
                  height: element.offsetHeight,
                })
                const resizeObserver = new ResizeObserver((entries) => {
                  if (!Array.isArray(entries)) return
                  if (!entries.length) return
                  const entry = entries[0]
                  let width, height
                  if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry.borderBoxSize,
                      borderSize = Array.isArray(borderSizeEntry)
                        ? borderSizeEntry[0]
                        : borderSizeEntry
                    ;((width = borderSize.inlineSize),
                      (height = borderSize.blockSize))
                  } else
                    ((width = element.offsetWidth),
                      (height = element.offsetHeight))
                  setSize({ width, height })
                })
                return (
                  resizeObserver.observe(element, { box: 'border-box' }),
                  () => resizeObserver.unobserve(element)
                )
              }
              setSize(void 0)
            }, [element]),
            size
          )
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
    './components/ui/checkbox.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => Checkbox })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-checkbox@1.3.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_c5e16db2dcf884afb83d2b1801cb62c2/node_modules/@radix-ui/react-checkbox/dist/index.mjs'
          ),
        _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_adozgcc28() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'a5f16e58a05e30e096d17ce1cb0f522cfb35757e' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 31 },
                end: { line: 17, column: 7 },
              },
              1: {
                start: { line: 7, column: 94 },
                end: { line: 17, column: 6 },
              },
              2: {
                start: { line: 18, column: 0 },
                end: { line: 18, column: 58 },
              },
              3: {
                start: { line: 20, column: 0 },
                end: { line: 23, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 7, column: 48 },
                  end: { line: 7, column: 49 },
                },
                loc: {
                  start: { line: 7, column: 94 },
                  end: { line: 17, column: 6 },
                },
                line: 7,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/checkbox.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as CheckboxPrimitive from '@radix-ui/react-checkbox'\nimport { Check } from 'lucide-react'\nimport { cn } from '../../lib/utils'\n\nconst Checkbox = React.forwardRef<\n  React.ElementRef<typeof CheckboxPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <CheckboxPrimitive.Root\n    ref={ref}\n    className={cn(\n      'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',\n      className\n    )}\n    {...props}\n  >\n    <CheckboxPrimitive.Indicator\n      className={cn('flex items-center justify-center text-current')}\n    >\n      <Check className='h-4 w-4' />\n    </CheckboxPrimitive.Indicator>\n  </CheckboxPrimitive.Root>\n))\nCheckbox.displayName = CheckboxPrimitive.Root.displayName\n\nexport { Checkbox }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,oCAAA;AACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpQ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAET,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACzB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oCAE9D,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAIlC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAExD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a5f16e58a05e30e096d17ce1cb0f522cfb35757e',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_adozgcc28 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_adozgcc28()
      const Checkbox =
        (cov_adozgcc28().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_adozgcc28().f[0]++,
            cov_adozgcc28().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.bL,
              {
                ref,
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                  className
                ),
                ...props,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.C1,
                  {
                    className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                      'flex items-center justify-center text-current'
                    ),
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                      { className: 'h-4 w-4' }
                    ),
                  }
                ),
              }
            )
          )
        ))
      ;(cov_adozgcc28().s[2]++,
        (Checkbox.displayName =
          _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.bL.displayName),
        cov_adozgcc28().s[3]++,
        (Checkbox.__docgenInfo = { description: '', methods: [] }))
    },
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
    './design-system/components/checkbox.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: () => Checked,
          Default: () => Default,
          Disabled: () => Disabled,
          DisabledChecked: () => DisabledChecked,
          FormExample: () => FormExample,
          IndeterminateState: () => IndeterminateState,
          Interactive: () => Interactive,
          MultipleCheckboxes: () => MultipleCheckboxes,
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
        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./components/ui/checkbox.tsx'),
        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/label.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Components/Checkbox',
          component: _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            checked: { control: { type: 'boolean' } },
            disabled: { control: { type: 'boolean' } },
            onCheckedChange: { action: 'checked changed' },
          },
        },
        Default = {
          args: {},
          play: async ({ canvasElement }) => {
            const checkbox = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('checkbox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              checkbox
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeEnabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).not.toBeChecked(),
              await checkbox.focus(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                ' '
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeChecked())
          },
        },
        Checked = {
          args: { checked: !0 },
          play: async ({ canvasElement }) => {
            const checkbox = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('checkbox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              checkbox
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeEnabled())
          },
        },
        Disabled = {
          args: { disabled: !0 },
          play: async ({ canvasElement }) => {
            const checkbox = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('checkbox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              checkbox
            ).toBeDisabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).not.toBeChecked())
          },
        },
        DisabledChecked = {
          args: { disabled: !0, checked: !0 },
          play: async ({ canvasElement }) => {
            const checkbox = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            ).getByRole('checkbox')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              checkbox
            ).toBeDisabled(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeChecked())
          },
        },
        WithLabel = {
          args: {},
          render: (args) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex items-center space-x-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                  { id: 'terms', ...args }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                  {
                    htmlFor: 'terms',
                    className:
                      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                    children: 'Accept terms and conditions',
                  }
                ),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              checkbox = canvas.getByRole('checkbox'),
              label = canvas.getByText('Accept terms and conditions')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              label
            ).toBeVisible(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                label
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                label
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                checkbox
              ).not.toBeChecked())
            const labelElement = canvas.getByLabelText(
              'Accept terms and conditions'
            )
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              labelElement
            ).toBe(checkbox)
          },
        },
        MultipleCheckboxes = {
          args: {},
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'flex items-center space-x-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                        { id: 'option1' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'option1', children: 'Option 1' }
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
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                        { id: 'option2', defaultChecked: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        {
                          htmlFor: 'option2',
                          children: 'Option 2 (Default Checked)',
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
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                        { id: 'option3', disabled: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        { htmlFor: 'option3', children: 'Option 3 (Disabled)' }
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
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                        { id: 'option4', disabled: !0, checked: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                        {
                          htmlFor: 'option4',
                          children: 'Option 4 (Disabled Checked)',
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              checkboxes = canvas.getAllByRole('checkbox')
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              checkboxes
            ).toHaveLength(4)
            const option1 = canvas.getByLabelText('Option 1')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              option1
            ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option1
              ).toBeEnabled())
            const option2 = canvas.getByLabelText('Option 2 (Default Checked)')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              option2
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option2
              ).toBeEnabled())
            const option3 = canvas.getByLabelText('Option 3 (Disabled)')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              option3
            ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option3
              ).toBeDisabled())
            const option4 = canvas.getByLabelText('Option 4 (Disabled Checked)')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              option4
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option4
              ).toBeDisabled(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                option1
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option1
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                option2
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                option2
              ).not.toBeChecked())
          },
        },
        FormExample = {
          args: {},
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
              className: 'space-y-6 w-80',
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
                          children: 'Notification Preferences',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-3',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                    { id: 'emails', defaultChecked: !0 }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'emails',
                                      children: 'Email notifications',
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                    { id: 'sms' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'sms',
                                      children: 'SMS notifications',
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                    { id: 'push', defaultChecked: !0 }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'push',
                                      children: 'Push notifications',
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
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'h3',
                        {
                          className: 'text-lg font-medium',
                          children: 'Privacy Settings',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'space-y-3',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                    { id: 'analytics', defaultChecked: !0 }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'analytics',
                                      children: 'Allow analytics',
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                    { id: 'marketing' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                    {
                                      htmlFor: 'marketing',
                                      children: 'Marketing communications',
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
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              canvas.getByText('Notification Preferences')
            ).toBeVisible(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                canvas.getByText('Privacy Settings')
              ).toBeVisible())
            const emailCheckbox = canvas.getByLabelText('Email notifications'),
              smsCheckbox = canvas.getByLabelText('SMS notifications'),
              pushCheckbox = canvas.getByLabelText('Push notifications')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              emailCheckbox
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                smsCheckbox
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                pushCheckbox
              ).toBeChecked())
            const analyticsCheckbox = canvas.getByLabelText('Allow analytics'),
              marketingCheckbox = canvas.getByLabelText(
                'Marketing communications'
              )
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              analyticsCheckbox
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                marketingCheckbox
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                smsCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                smsCheckbox
              ).toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                marketingCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                marketingCheckbox
              ).toBeChecked())
            const form = canvas.getByRole('form')
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              form
            ).toBeInTheDocument()
          },
        },
        IndeterminateState = {
          args: {},
          render: () => {
            const [checked, setChecked] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState('indeterminate')
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                          {
                            id: 'parent',
                            checked,
                            onCheckedChange: (value) => {
                              setChecked('indeterminate' !== value && value)
                            },
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                          { htmlFor: 'parent', children: 'Select all' }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'ml-6 space-y-2',
                      children: [
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                { id: 'child1', defaultChecked: !0 }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                { htmlFor: 'child1', children: 'Option 1' }
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
                                _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                { id: 'child2' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                { htmlFor: 'child2', children: 'Option 2' }
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
                                _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                { id: 'child3', defaultChecked: !0 }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                { htmlFor: 'child3', children: 'Option 3' }
                              ),
                            ],
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }
            )
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              parentCheckbox = canvas.getByLabelText('Select all'),
              child1 = canvas.getByLabelText('Option 1'),
              child2 = canvas.getByLabelText('Option 2'),
              child3 = canvas.getByLabelText('Option 3')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              child1
            ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                child2
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                child3
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                parentCheckbox
              ).toHaveAttribute('data-state', 'indeterminate'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                parentCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                parentCheckbox
              ).not.toBeChecked(),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                parentCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                parentCheckbox
              ).toBeChecked())
          },
        },
        Interactive = {
          args: {},
          render: () => {
            const [checkedItems, setCheckedItems] =
                react__WEBPACK_IMPORTED_MODULE_1__.useState({
                  item1: !1,
                  item2: !0,
                  item3: !1,
                }),
              allChecked = Object.values(checkedItems).every(Boolean),
              someChecked = Object.values(checkedItems).some(Boolean)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'space-y-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'div',
                    {
                      className: 'p-4 border rounded-lg bg-muted/50',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground mb-2',
                          children: [
                            'Selected:',
                            ' ',
                            Object.entries(checkedItems)
                              .filter(([_, checked]) => checked)
                              .map(([key]) => key)
                              .join(', ') || 'None',
                          ],
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'space-y-2',
                      children: [
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'flex items-center space-x-2',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                {
                                  id: 'all',
                                  checked:
                                    !!allChecked ||
                                    (!!someChecked && 'indeterminate'),
                                  onCheckedChange: (checked) => {
                                    const newValue = !0 === checked
                                    setCheckedItems({
                                      item1: newValue,
                                      item2: newValue,
                                      item3: newValue,
                                    })
                                  },
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                {
                                  htmlFor: 'all',
                                  className: 'font-medium',
                                  children: 'Select All',
                                }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'div',
                          {
                            className: 'ml-6 space-y-2',
                            children: Object.entries(checkedItems).map(
                              ([key, checked]) =>
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.S,
                                        {
                                          id: key,
                                          checked,
                                          onCheckedChange: (value) => {
                                            setCheckedItems((prev) => ({
                                              ...prev,
                                              [key]: !0 === value,
                                            }))
                                          },
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_ui_label__WEBPACK_IMPORTED_MODULE_3__.J,
                                        { htmlFor: key, children: key }
                                      ),
                                    ],
                                  },
                                  key
                                )
                            ),
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }
            )
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
                canvasElement
              ),
              selectedText = canvas.getByText(/Selected:/)
            await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              selectedText
            ).toHaveTextContent('Selected: item2')
            const selectAllCheckbox = canvas.getByLabelText('Select All'),
              item1Checkbox = canvas.getByLabelText('item1'),
              item2Checkbox = canvas.getByLabelText('item2'),
              item3Checkbox = canvas.getByLabelText('item3')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              item1Checkbox
            ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item2Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item3Checkbox
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectAllCheckbox
              ).toHaveAttribute('data-state', 'indeterminate'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                item1Checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item1Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectedText
              ).toHaveTextContent('Selected: item1, item2'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                item3Checkbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item3Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectAllCheckbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectedText
              ).toHaveTextContent('Selected: item1, item2, item3'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                selectAllCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item1Checkbox
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item2Checkbox
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item3Checkbox
              ).not.toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectedText
              ).toHaveTextContent('Selected: None'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
                selectAllCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item1Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item2Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                item3Checkbox
              ).toBeChecked(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                selectAllCheckbox
              ).toBeChecked())
          },
        },
        __namedExportsOrder = [
          'Default',
          'Checked',
          'Disabled',
          'DisabledChecked',
          'WithLabel',
          'MultipleCheckboxes',
          'FormExample',
          'IndeterminateState',
          'Interactive',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {},\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n\n    // Test checkbox is visible and enabled\n    await expect(checkbox).toBeVisible();\n    await expect(checkbox).toBeEnabled();\n    await expect(checkbox).not.toBeChecked();\n\n    // Test clicking checkbox\n    await userEvent.click(checkbox);\n    await expect(checkbox).toBeChecked();\n\n    // Test clicking again to uncheck\n    await userEvent.click(checkbox);\n    await expect(checkbox).not.toBeChecked();\n\n    // Test keyboard interaction (space key)\n    await checkbox.focus();\n    await userEvent.keyboard(' ');\n    await expect(checkbox).toBeChecked();\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Checked.parameters = {
          ...Checked.parameters,
          docs: {
            ...Checked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    checked: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n\n    // Test checkbox is checked by default\n    await expect(checkbox).toBeChecked();\n    await expect(checkbox).toBeEnabled();\n  }\n}",
              ...Checked.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    disabled: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n\n    // Test checkbox is disabled\n    await expect(checkbox).toBeDisabled();\n    await expect(checkbox).not.toBeChecked();\n\n    // Test clicking disabled checkbox (should not change state)\n    await userEvent.click(checkbox);\n    await expect(checkbox).not.toBeChecked();\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (DisabledChecked.parameters = {
          ...DisabledChecked.parameters,
          docs: {
            ...DisabledChecked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    disabled: true,\n    checked: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n\n    // Test checkbox is disabled and checked\n    await expect(checkbox).toBeDisabled();\n    await expect(checkbox).toBeChecked();\n\n    // Test clicking disabled checkbox (should not change state)\n    await userEvent.click(checkbox);\n    await expect(checkbox).toBeChecked();\n  }\n}",
              ...DisabledChecked.parameters?.docs?.source,
            },
          },
        }),
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: args => <div className='flex items-center space-x-2'>\n      <Checkbox id='terms' {...args} />\n      <Label htmlFor='terms' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>\n        Accept terms and conditions\n      </Label>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n    const label = canvas.getByText('Accept terms and conditions');\n\n    // Test label is visible\n    await expect(label).toBeVisible();\n\n    // Test clicking label toggles checkbox\n    await userEvent.click(label);\n    await expect(checkbox).toBeChecked();\n    await userEvent.click(label);\n    await expect(checkbox).not.toBeChecked();\n\n    // Test label has correct association\n    const labelElement = canvas.getByLabelText('Accept terms and conditions');\n    await expect(labelElement).toBe(checkbox);\n  }\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (MultipleCheckboxes.parameters = {
          ...MultipleCheckboxes.parameters,
          docs: {
            ...MultipleCheckboxes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div className='space-y-4'>\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='option1' />\n        <Label htmlFor='option1'>Option 1</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='option2' defaultChecked />\n        <Label htmlFor='option2'>Option 2 (Default Checked)</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='option3' disabled />\n        <Label htmlFor='option3'>Option 3 (Disabled)</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='option4' disabled checked />\n        <Label htmlFor='option4'>Option 4 (Disabled Checked)</Label>\n      </div>\n    </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Test all checkboxes are present\n    const checkboxes = canvas.getAllByRole('checkbox');\n    await expect(checkboxes).toHaveLength(4);\n\n    // Test option 1 - unchecked and enabled\n    const option1 = canvas.getByLabelText('Option 1');\n    await expect(option1).not.toBeChecked();\n    await expect(option1).toBeEnabled();\n\n    // Test option 2 - checked by default\n    const option2 = canvas.getByLabelText('Option 2 (Default Checked)');\n    await expect(option2).toBeChecked();\n    await expect(option2).toBeEnabled();\n\n    // Test option 3 - disabled\n    const option3 = canvas.getByLabelText('Option 3 (Disabled)');\n    await expect(option3).not.toBeChecked();\n    await expect(option3).toBeDisabled();\n\n    // Test option 4 - disabled and checked\n    const option4 = canvas.getByLabelText('Option 4 (Disabled Checked)');\n    await expect(option4).toBeChecked();\n    await expect(option4).toBeDisabled();\n\n    // Test interaction with enabled checkboxes\n    await userEvent.click(option1);\n    await expect(option1).toBeChecked();\n    await userEvent.click(option2);\n    await expect(option2).not.toBeChecked();\n  }\n}",
              ...MultipleCheckboxes.parameters?.docs?.source,
            },
          },
        }),
        (FormExample.parameters = {
          ...FormExample.parameters,
          docs: {
            ...FormExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <form className='space-y-6 w-80'>\n      <div className='space-y-4'>\n        <h3 className='text-lg font-medium'>Notification Preferences</h3>\n        <div className='space-y-3'>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='emails' defaultChecked />\n            <Label htmlFor='emails'>Email notifications</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='sms' />\n            <Label htmlFor='sms'>SMS notifications</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='push' defaultChecked />\n            <Label htmlFor='push'>Push notifications</Label>\n          </div>\n        </div>\n      </div>\n      <div className='space-y-4'>\n        <h3 className='text-lg font-medium'>Privacy Settings</h3>\n        <div className='space-y-3'>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='analytics' defaultChecked />\n            <Label htmlFor='analytics'>Allow analytics</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='marketing' />\n            <Label htmlFor='marketing'>Marketing communications</Label>\n          </div>\n        </div>\n      </div>\n    </form>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Test form headings are present\n    await expect(canvas.getByText('Notification Preferences')).toBeVisible();\n    await expect(canvas.getByText('Privacy Settings')).toBeVisible();\n\n    // Test notification checkboxes\n    const emailCheckbox = canvas.getByLabelText('Email notifications');\n    const smsCheckbox = canvas.getByLabelText('SMS notifications');\n    const pushCheckbox = canvas.getByLabelText('Push notifications');\n\n    // Verify initial states\n    await expect(emailCheckbox).toBeChecked();\n    await expect(smsCheckbox).not.toBeChecked();\n    await expect(pushCheckbox).toBeChecked();\n\n    // Test privacy checkboxes\n    const analyticsCheckbox = canvas.getByLabelText('Allow analytics');\n    const marketingCheckbox = canvas.getByLabelText('Marketing communications');\n    await expect(analyticsCheckbox).toBeChecked();\n    await expect(marketingCheckbox).not.toBeChecked();\n\n    // Test form interactions\n    await userEvent.click(smsCheckbox);\n    await expect(smsCheckbox).toBeChecked();\n    await userEvent.click(marketingCheckbox);\n    await expect(marketingCheckbox).toBeChecked();\n\n    // Test form element\n    const form = canvas.getByRole('form');\n    await expect(form).toBeInTheDocument();\n  }\n}",
              ...FormExample.parameters?.docs?.source,
            },
          },
        }),
        (IndeterminateState.parameters = {
          ...IndeterminateState.parameters,
          docs: {
            ...IndeterminateState.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>('indeterminate');\n    return <div className='space-y-4'>\n        <div className='flex items-center space-x-2'>\n          <Checkbox id='parent' checked={checked} onCheckedChange={value => {\n          if (value === 'indeterminate') {\n            setChecked(false);\n          } else {\n            setChecked(value);\n          }\n        }} />\n          <Label htmlFor='parent'>Select all</Label>\n        </div>\n        <div className='ml-6 space-y-2'>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='child1' defaultChecked />\n            <Label htmlFor='child1'>Option 1</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='child2' />\n            <Label htmlFor='child2'>Option 2</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='child3' defaultChecked />\n            <Label htmlFor='child3'>Option 3</Label>\n          </div>\n        </div>\n      </div>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Get parent and child checkboxes\n    const parentCheckbox = canvas.getByLabelText('Select all');\n    const child1 = canvas.getByLabelText('Option 1');\n    const child2 = canvas.getByLabelText('Option 2');\n    const child3 = canvas.getByLabelText('Option 3');\n\n    // Verify initial states\n    await expect(child1).toBeChecked();\n    await expect(child2).not.toBeChecked();\n    await expect(child3).toBeChecked();\n\n    // Parent should be in indeterminate state (partially checked)\n    await expect(parentCheckbox).toHaveAttribute('data-state', 'indeterminate');\n\n    // Click parent checkbox - should clear all\n    await userEvent.click(parentCheckbox);\n    await expect(parentCheckbox).not.toBeChecked();\n\n    // Click parent again - should check all\n    await userEvent.click(parentCheckbox);\n    await expect(parentCheckbox).toBeChecked();\n  }\n}",
              ...IndeterminateState.parameters?.docs?.source,
            },
          },
        }),
        (Interactive.parameters = {
          ...Interactive.parameters,
          docs: {
            ...Interactive.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [checkedItems, setCheckedItems] = React.useState({\n      item1: false,\n      item2: true,\n      item3: false\n    });\n    const allChecked = Object.values(checkedItems).every(Boolean);\n    const someChecked = Object.values(checkedItems).some(Boolean);\n    return <div className='space-y-4'>\n        <div className='p-4 border rounded-lg bg-muted/50'>\n          <p className='text-sm text-muted-foreground mb-2'>\n            Selected:{' '}\n            {Object.entries(checkedItems).filter(([_, checked]) => checked).map(([key]) => key).join(', ') || 'None'}\n          </p>\n        </div>\n        <div className='space-y-2'>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='all' checked={allChecked ? true : someChecked ? 'indeterminate' : false} onCheckedChange={checked => {\n            const newValue = checked === true;\n            setCheckedItems({\n              item1: newValue,\n              item2: newValue,\n              item3: newValue\n            });\n          }} />\n            <Label htmlFor='all' className='font-medium'>\n              Select All\n            </Label>\n          </div>\n          <div className='ml-6 space-y-2'>\n            {Object.entries(checkedItems).map(([key, checked]) => <div key={key} className='flex items-center space-x-2'>\n                <Checkbox id={key} checked={checked} onCheckedChange={value => {\n              setCheckedItems(prev => ({\n                ...prev,\n                [key]: value === true\n              }));\n            }} />\n                <Label htmlFor={key}>{key}</Label>\n              </div>)}\n          </div>\n        </div>\n      </div>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Test initial state display\n    const selectedText = canvas.getByText(/Selected:/);\n    await expect(selectedText).toHaveTextContent('Selected: item2');\n\n    // Get checkboxes\n    const selectAllCheckbox = canvas.getByLabelText('Select All');\n    const item1Checkbox = canvas.getByLabelText('item1');\n    const item2Checkbox = canvas.getByLabelText('item2');\n    const item3Checkbox = canvas.getByLabelText('item3');\n\n    // Verify initial states\n    await expect(item1Checkbox).not.toBeChecked();\n    await expect(item2Checkbox).toBeChecked();\n    await expect(item3Checkbox).not.toBeChecked();\n\n    // Select All should be indeterminate\n    await expect(selectAllCheckbox).toHaveAttribute('data-state', 'indeterminate');\n\n    // Test selecting individual items\n    await userEvent.click(item1Checkbox);\n    await expect(item1Checkbox).toBeChecked();\n    await expect(selectedText).toHaveTextContent('Selected: item1, item2');\n\n    // Select the last item - should make Select All checked\n    await userEvent.click(item3Checkbox);\n    await expect(item3Checkbox).toBeChecked();\n    await expect(selectAllCheckbox).toBeChecked();\n    await expect(selectedText).toHaveTextContent('Selected: item1, item2, item3');\n\n    // Click Select All to uncheck all\n    await userEvent.click(selectAllCheckbox);\n    await expect(item1Checkbox).not.toBeChecked();\n    await expect(item2Checkbox).not.toBeChecked();\n    await expect(item3Checkbox).not.toBeChecked();\n    await expect(selectedText).toHaveTextContent('Selected: None');\n\n    // Click Select All again to check all\n    await userEvent.click(selectAllCheckbox);\n    await expect(item1Checkbox).toBeChecked();\n    await expect(item2Checkbox).toBeChecked();\n    await expect(item3Checkbox).toBeChecked();\n    await expect(selectAllCheckbox).toBeChecked();\n  }\n}",
              ...Interactive.parameters?.docs?.source,
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
