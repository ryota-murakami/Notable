/*! For license information please see components-label-stories.3dc4217f.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [8022],
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
    '../../node_modules/.pnpm/@radix-ui+react-switch@1.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_493359caf905e3ba119eff41a016151d/node_modules/@radix-ui/react-switch/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          bL: () => Root,
          dO: () => Switch,
          zi: () => Thumb,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs'
            ),
          _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          [createSwitchContext, createSwitchScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Switch'),
          [SwitchProvider, useSwitchContext] = createSwitchContext('Switch'),
          Switch = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeSwitch,
                  name,
                  checked: checkedProp,
                  defaultChecked,
                  required,
                  disabled,
                  value = 'on',
                  onCheckedChange,
                  form,
                  ...switchProps
                } = props,
                [button, setButton] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                  forwardedRef,
                  (node) => setButton(node)
                ),
                hasConsumerStoppedPropagationRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                isFormControl = !button || form || !!button.closest('form'),
                [checked, setChecked] = (0,
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.i)(
                  {
                    prop: checkedProp,
                    defaultProp: defaultChecked ?? !1,
                    onChange: onCheckedChange,
                    caller: 'Switch',
                  }
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                SwitchProvider,
                {
                  scope: __scopeSwitch,
                  checked,
                  disabled,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG
                        .button,
                      {
                        type: 'button',
                        role: 'switch',
                        'aria-checked': checked,
                        'aria-required': required,
                        'data-state': getState(checked),
                        'data-disabled': disabled ? '' : void 0,
                        disabled,
                        value,
                        ...switchProps,
                        ref: composedRefs,
                        onClick: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(
                          props.onClick,
                          (event) => {
                            ;(setChecked((prevChecked) => !prevChecked),
                              isFormControl &&
                                ((hasConsumerStoppedPropagationRef.current =
                                  event.isPropagationStopped()),
                                hasConsumerStoppedPropagationRef.current ||
                                  event.stopPropagation()))
                          }
                        ),
                      }
                    ),
                    isFormControl &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        SwitchBubbleInput,
                        {
                          control: button,
                          bubbles: !hasConsumerStoppedPropagationRef.current,
                          name,
                          value,
                          checked,
                          required,
                          disabled,
                          form,
                          style: { transform: 'translateX(-100%)' },
                        }
                      ),
                  ],
                }
              )
            }
          )
        Switch.displayName = 'Switch'
        var SwitchThumb = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeSwitch, ...thumbProps } = props,
              context = useSwitchContext('SwitchThumb', __scopeSwitch)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.span,
              {
                'data-state': getState(context.checked),
                'data-disabled': context.disabled ? '' : void 0,
                ...thumbProps,
                ref: forwardedRef,
              }
            )
          }
        )
        SwitchThumb.displayName = 'SwitchThumb'
        var SwitchBubbleInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (
            { __scopeSwitch, control, checked, bubbles = !0, ...props },
            forwardedRef
          ) => {
            const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                ref,
                forwardedRef
              ),
              prevChecked = (0,
              _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.Z)(
                checked
              ),
              controlSize = (0,
              _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.X)(control)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const input = ref.current
                if (!input) return
                const inputProto = window.HTMLInputElement.prototype,
                  setChecked = Object.getOwnPropertyDescriptor(
                    inputProto,
                    'checked'
                  ).set
                if (prevChecked !== checked && setChecked) {
                  const event = new Event('click', { bubbles })
                  ;(setChecked.call(input, checked), input.dispatchEvent(event))
                }
              }, [prevChecked, checked, bubbles]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', {
                type: 'checkbox',
                'aria-hidden': !0,
                defaultChecked: checked,
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
                },
              })
            )
          }
        )
        function getState(checked) {
          return checked ? 'checked' : 'unchecked'
        }
        SwitchBubbleInput.displayName = 'SwitchBubbleInput'
        var Root = Switch,
          Thumb = SwitchThumb
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
    './components/ui/input.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { p: () => Input })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_hfm2fwy5v() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '7d26816cc889833b2fb16d620df48c4351f7db5f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 28 },
                end: { line: 11, column: 2 },
              },
              1: {
                start: { line: 5, column: 4 },
                end: { line: 10, column: 7 },
              },
              2: {
                start: { line: 12, column: 0 },
                end: { line: 12, column: 28 },
              },
              3: {
                start: { line: 14, column: 0 },
                end: { line: 18, column: 2 },
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
                  start: { line: 4, column: 83 },
                  end: { line: 11, column: 1 },
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
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/input.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface InputProps\n  extends React.InputHTMLAttributes<HTMLInputElement> {}\n\nconst Input = React.forwardRef<HTMLInputElement, InputProps>(\n  ({ className, type, ...props }, ref) => {\n    return (\n      <input\n        type={type}\n        className={cn(\n          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nInput.displayName = 'Input'\n\nexport { Input }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAAC,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAD8B,AAC7B,CAAC,AAD6B,CAC5B,AAD6B,CAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC;QACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9V,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAE1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '7d26816cc889833b2fb16d620df48c4351f7db5f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_hfm2fwy5v = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_hfm2fwy5v()
      const Input =
        (cov_hfm2fwy5v().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, type, ...props }, ref) => (
            cov_hfm2fwy5v().f[0]++,
            cov_hfm2fwy5v().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('input', {
              type,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
              ),
              ref,
              ...props,
            })
          )
        ))
      ;(cov_hfm2fwy5v().s[2]++,
        (Input.displayName = 'Input'),
        cov_hfm2fwy5v().s[3]++,
        (Input.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Input',
        }))
    },
    './components/ui/switch.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { d: () => Switch })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-switch@1.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_493359caf905e3ba119eff41a016151d/node_modules/@radix-ui/react-switch/dist/index.mjs'
          ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_2c8z57cccj() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'a0b7f2277fc2479c060d7946fd9aaaeecfbf0668' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
            statementMap: {
              0: {
                start: { line: 6, column: 29 },
                end: { line: 13, column: 7 },
              },
              1: {
                start: { line: 6, column: 92 },
                end: { line: 13, column: 6 },
              },
              2: {
                start: { line: 14, column: 0 },
                end: { line: 14, column: 55 },
              },
              3: {
                start: { line: 16, column: 0 },
                end: { line: 19, column: 2 },
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
                  end: { line: 13, column: 6 },
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
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/switch.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as SwitchPrimitives from '@radix-ui/react-switch'\n\nimport { cn } from '@/lib/utils'\n\nconst Switch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>\n>(({ className, ...props }, ref) => (\n  <SwitchPrimitives.Root\n    className={cn(\n      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',\n      className\n    )}\n    {...props}\n    ref={ref}\n  >\n    <SwitchPrimitives.Thumb\n      className={cn(\n        'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'\n      )}\n    />\n  </SwitchPrimitives.Root>\n))\nSwitch.displayName = SwitchPrimitives.Root.displayName\n\nexport { Switch }\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAEzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC7X,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAER,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAKnL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAErD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a0b7f2277fc2479c060d7946fd9aaaeecfbf0668',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2c8z57cccj = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2c8z57cccj()
      const Switch =
        (cov_2c8z57cccj().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2c8z57cccj().f[0]++,
            cov_2c8z57cccj().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.bL,
              {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                  className
                ),
                ...props,
                ref,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.zi,
                  {
                    className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                      'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
                    ),
                  }
                ),
              }
            )
          )
        ))
      ;(cov_2c8z57cccj().s[2]++,
        (Switch.displayName =
          _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.bL.displayName),
        cov_2c8z57cccj().s[3]++,
        (Switch.__docgenInfo = { description: '', methods: [] }))
    },
    './components/ui/textarea.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => Textarea })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__('./lib/utils.ts'))
      function cov_18aq0tn5ay() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'd31dfbb54ffd0deec3e4fb586e803e42057b2e91' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
            statementMap: {
              0: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              1: {
                start: { line: 12, column: 0 },
                end: { line: 16, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Textarea',
                decl: {
                  start: { line: 4, column: 9 },
                  end: { line: 4, column: 17 },
                },
                loc: {
                  start: { line: 4, column: 43 },
                  end: { line: 10, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/textarea.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\n\nimport { cn } from '@/lib/utils'\n\nfunction Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {\n  return (\n    <textarea\n      data-slot='textarea'\n      className={cn(\n        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',\n        className\n      )}\n      {...props}\n    />\n  )\n}\n\nexport { Textarea }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAkC,CAAjC,AAAkC,CAAjC,AAAkC,CAAjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrc,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'd31dfbb54ffd0deec3e4fb586e803e42057b2e91',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_18aq0tn5ay = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function Textarea({ className, ...props }) {
        return (
          cov_18aq0tn5ay().f[0]++,
          cov_18aq0tn5ay().s[0]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('textarea', {
            'data-slot': 'textarea',
            className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
              'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              className
            ),
            ...props,
          })
        )
      }
      ;(cov_18aq0tn5ay(),
        cov_18aq0tn5ay().s[1]++,
        (Textarea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Textarea',
        }))
    },
    './design-system/components/label.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          DisabledState: () => DisabledState,
          FormExample: () => FormExample,
          RequiredField: () => RequiredField,
          Sizes: () => Sizes,
          WithCheckbox: () => WithCheckbox,
          WithHelperText: () => WithHelperText,
          WithInput: () => WithInput,
          WithRadioGroup: () => WithRadioGroup,
          WithSwitch: () => WithSwitch,
          WithTextarea: () => WithTextarea,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/ui/label.tsx'
        ),
        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/ui/input.tsx'
        ),
        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./components/ui/checkbox.tsx'),
        _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./components/ui/radio-group.tsx'),
        _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./components/ui/textarea.tsx'),
        _components_ui_switch__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./components/ui/switch.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Components/Label',
          component: _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: { htmlFor: { control: { type: 'text' } } },
        },
        Default = { args: { children: 'Label text' } },
        WithInput = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid w-full max-w-sm items-center gap-1.5',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  { htmlFor: 'email', children: 'Email' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                  { type: 'email', id: 'email', placeholder: 'Email' }
                ),
              ],
            }),
        },
        RequiredField = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid w-full max-w-sm items-center gap-1.5',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  {
                    htmlFor: 'email-required',
                    children: [
                      'Email ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'span',
                        { className: 'text-red-500', children: '*' }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                  {
                    type: 'email',
                    id: 'email-required',
                    placeholder: 'Email',
                    required: !0,
                  }
                ),
              ],
            }),
        },
        WithHelperText = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid w-full max-w-sm items-center gap-1.5',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  { htmlFor: 'username', children: 'Username' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                  { type: 'text', id: 'username', placeholder: 'Username' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  className: 'text-sm text-muted-foreground',
                  children: 'This is your public display name.',
                }),
              ],
            }),
        },
        WithCheckbox = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex items-center space-x-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                  { id: 'terms' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  {
                    htmlFor: 'terms',
                    className:
                      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                    children: 'Accept terms and conditions',
                  }
                ),
              ],
            }),
        },
        WithRadioGroup = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__.z,
              {
                defaultValue: 'option-one',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex items-center space-x-2',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__.C,
                          { value: 'option-one', id: 'option-one' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
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
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__.C,
                          { value: 'option-two', id: 'option-two' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
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
                          _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__.C,
                          { value: 'option-three', id: 'option-three' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                          { htmlFor: 'option-three', children: 'Option Three' }
                        ),
                      ],
                    }
                  ),
                ],
              }
            ),
        },
        WithTextarea = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid w-full max-w-sm items-center gap-1.5',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  { htmlFor: 'message', children: 'Your message' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.T,
                  { placeholder: 'Type your message here.', id: 'message' }
                ),
              ],
            }),
        },
        WithSwitch = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'flex items-center space-x-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_switch__WEBPACK_IMPORTED_MODULE_6__.d,
                  { id: 'airplane-mode' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                  { htmlFor: 'airplane-mode', children: 'Airplane Mode' }
                ),
              ],
            }),
        },
        DisabledState = {
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
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                        { id: 'disabled-checkbox', disabled: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          htmlFor: 'disabled-checkbox',
                          className: 'cursor-not-allowed opacity-70',
                          children: 'Disabled checkbox label',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'grid w-full max-w-sm items-center gap-1.5',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          htmlFor: 'disabled-input',
                          className: 'cursor-not-allowed opacity-70',
                          children: 'Disabled input label',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        {
                          type: 'text',
                          id: 'disabled-input',
                          placeholder: 'Disabled input',
                          disabled: !0,
                        }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        FormExample = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('form', {
              className: 'space-y-6 w-96',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          htmlFor: 'full-name',
                          children: [
                            'Full Name ',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'span',
                              { className: 'text-red-500', children: '*' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        {
                          id: 'full-name',
                          placeholder: 'John Doe',
                          required: !0,
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
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          htmlFor: 'email-form',
                          children: [
                            'Email Address ',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'span',
                              { className: 'text-red-500', children: '*' }
                            ),
                          ],
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        {
                          id: 'email-form',
                          type: 'email',
                          placeholder: 'john@example.com',
                          required: !0,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'p',
                        {
                          className: 'text-sm text-muted-foreground',
                          children:
                            "We'll never share your email with anyone else.",
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
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        { htmlFor: 'bio', children: 'Bio' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.T,
                        {
                          id: 'bio',
                          placeholder: 'Tell us a little bit about yourself',
                          className: 'min-h-[100px]',
                        }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    className: 'space-y-3',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        { children: 'Notification Preferences' }
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                                    {
                                      id: 'email-notifications',
                                      defaultChecked: !0,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                                    {
                                      htmlFor: 'email-notifications',
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                                    { id: 'sms-notifications' }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                                    {
                                      htmlFor: 'sms-notifications',
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
                                    _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                                    {
                                      id: 'push-notifications',
                                      defaultChecked: !0,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                                    {
                                      htmlFor: 'push-notifications',
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
                    className: 'flex items-center space-x-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.S,
                        { id: 'agree-terms', required: !0 }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          htmlFor: 'agree-terms',
                          children: [
                            'I agree to the',
                            ' ',
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'a',
                              {
                                href: '#',
                                className:
                                  'underline underline-offset-2 hover:text-primary',
                                children: 'terms and conditions',
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
        Sizes = {
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
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        { className: 'text-xs', children: 'Extra Small Label' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        { placeholder: 'Extra small', className: 'h-7 text-xs' }
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
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        {
                          className: 'text-sm',
                          children: 'Small Label (Default)',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        { placeholder: 'Small (default)' }
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
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        { className: 'text-base', children: 'Base Label' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        { placeholder: 'Base', className: 'h-11' }
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
                        _components_ui_label__WEBPACK_IMPORTED_MODULE_1__.J,
                        { className: 'text-lg', children: 'Large Label' }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_input__WEBPACK_IMPORTED_MODULE_2__.p,
                        { placeholder: 'Large', className: 'h-12 text-lg' }
                      ),
                    ],
                  }
                ),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'WithInput',
          'RequiredField',
          'WithHelperText',
          'WithCheckbox',
          'WithRadioGroup',
          'WithTextarea',
          'WithSwitch',
          'DisabledState',
          'FormExample',
          'Sizes',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    children: 'Label text'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithInput.parameters = {
          ...WithInput.parameters,
          docs: {
            ...WithInput.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>\n      <Label htmlFor='email'>Email</Label>\n      <Input type='email' id='email' placeholder='Email' />\n    </div>\n}",
              ...WithInput.parameters?.docs?.source,
            },
          },
        }),
        (RequiredField.parameters = {
          ...RequiredField.parameters,
          docs: {
            ...RequiredField.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>\n      <Label htmlFor='email-required'>\n        Email <span className='text-red-500'>*</span>\n      </Label>\n      <Input type='email' id='email-required' placeholder='Email' required />\n    </div>\n}",
              ...RequiredField.parameters?.docs?.source,
            },
          },
        }),
        (WithHelperText.parameters = {
          ...WithHelperText.parameters,
          docs: {
            ...WithHelperText.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>\n      <Label htmlFor='username'>Username</Label>\n      <Input type='text' id='username' placeholder='Username' />\n      <p className='text-sm text-muted-foreground'>\n        This is your public display name.\n      </p>\n    </div>\n}",
              ...WithHelperText.parameters?.docs?.source,
            },
          },
        }),
        (WithCheckbox.parameters = {
          ...WithCheckbox.parameters,
          docs: {
            ...WithCheckbox.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center space-x-2'>\n      <Checkbox id='terms' />\n      <Label htmlFor='terms' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>\n        Accept terms and conditions\n      </Label>\n    </div>\n}",
              ...WithCheckbox.parameters?.docs?.source,
            },
          },
        }),
        (WithRadioGroup.parameters = {
          ...WithRadioGroup.parameters,
          docs: {
            ...WithRadioGroup.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <RadioGroup defaultValue='option-one'>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-one' id='option-one' />\n        <Label htmlFor='option-one'>Option One</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-two' id='option-two' />\n        <Label htmlFor='option-two'>Option Two</Label>\n      </div>\n      <div className='flex items-center space-x-2'>\n        <RadioGroupItem value='option-three' id='option-three' />\n        <Label htmlFor='option-three'>Option Three</Label>\n      </div>\n    </RadioGroup>\n}",
              ...WithRadioGroup.parameters?.docs?.source,
            },
          },
        }),
        (WithTextarea.parameters = {
          ...WithTextarea.parameters,
          docs: {
            ...WithTextarea.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid w-full max-w-sm items-center gap-1.5'>\n      <Label htmlFor='message'>Your message</Label>\n      <Textarea placeholder='Type your message here.' id='message' />\n    </div>\n}",
              ...WithTextarea.parameters?.docs?.source,
            },
          },
        }),
        (WithSwitch.parameters = {
          ...WithSwitch.parameters,
          docs: {
            ...WithSwitch.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center space-x-2'>\n      <Switch id='airplane-mode' />\n      <Label htmlFor='airplane-mode'>Airplane Mode</Label>\n    </div>\n}",
              ...WithSwitch.parameters?.docs?.source,
            },
          },
        }),
        (DisabledState.parameters = {
          ...DisabledState.parameters,
          docs: {
            ...DisabledState.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='disabled-checkbox' disabled />\n        <Label htmlFor='disabled-checkbox' className='cursor-not-allowed opacity-70'>\n          Disabled checkbox label\n        </Label>\n      </div>\n      <div className='grid w-full max-w-sm items-center gap-1.5'>\n        <Label htmlFor='disabled-input' className='cursor-not-allowed opacity-70'>\n          Disabled input label\n        </Label>\n        <Input type='text' id='disabled-input' placeholder='Disabled input' disabled />\n      </div>\n    </div>\n}",
              ...DisabledState.parameters?.docs?.source,
            },
          },
        }),
        (FormExample.parameters = {
          ...FormExample.parameters,
          docs: {
            ...FormExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <form className='space-y-6 w-96'>\n      <div className='space-y-2'>\n        <Label htmlFor='full-name'>\n          Full Name <span className='text-red-500'>*</span>\n        </Label>\n        <Input id='full-name' placeholder='John Doe' required />\n      </div>\n\n      <div className='space-y-2'>\n        <Label htmlFor='email-form'>\n          Email Address <span className='text-red-500'>*</span>\n        </Label>\n        <Input id='email-form' type='email' placeholder='john@example.com' required />\n        <p className='text-sm text-muted-foreground'>\n          We'll never share your email with anyone else.\n        </p>\n      </div>\n\n      <div className='space-y-2'>\n        <Label htmlFor='bio'>Bio</Label>\n        <Textarea id='bio' placeholder='Tell us a little bit about yourself' className='min-h-[100px]' />\n      </div>\n\n      <div className='space-y-3'>\n        <Label>Notification Preferences</Label>\n        <div className='space-y-2'>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='email-notifications' defaultChecked />\n            <Label htmlFor='email-notifications'>Email notifications</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='sms-notifications' />\n            <Label htmlFor='sms-notifications'>SMS notifications</Label>\n          </div>\n          <div className='flex items-center space-x-2'>\n            <Checkbox id='push-notifications' defaultChecked />\n            <Label htmlFor='push-notifications'>Push notifications</Label>\n          </div>\n        </div>\n      </div>\n\n      <div className='flex items-center space-x-2'>\n        <Checkbox id='agree-terms' required />\n        <Label htmlFor='agree-terms'>\n          I agree to the{' '}\n          <a href='#' className='underline underline-offset-2 hover:text-primary'>\n            terms and conditions\n          </a>\n        </Label>\n      </div>\n    </form>\n}",
              ...FormExample.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='space-y-2'>\n        <Label className='text-xs'>Extra Small Label</Label>\n        <Input placeholder='Extra small' className='h-7 text-xs' />\n      </div>\n      <div className='space-y-2'>\n        <Label className='text-sm'>Small Label (Default)</Label>\n        <Input placeholder='Small (default)' />\n      </div>\n      <div className='space-y-2'>\n        <Label className='text-base'>Base Label</Label>\n        <Input placeholder='Base' className='h-11' />\n      </div>\n      <div className='space-y-2'>\n        <Label className='text-lg'>Large Label</Label>\n        <Input placeholder='Large' className='h-12 text-lg' />\n      </div>\n    </div>\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
