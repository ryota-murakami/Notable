'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [561],
  {
    '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function composeEventHandlers(
          originalEventHandler,
          ourEventHandler,
          { checkForDefaultPrevented = !0 } = {}
        ) {
          return function handleEvent(event) {
            if (
              (originalEventHandler?.(event),
              !1 === checkForDefaultPrevented || !event.defaultPrevented)
            )
              return ourEventHandler?.(event)
          }
        }
        __webpack_require__.d(__webpack_exports__, {
          m: () => composeEventHandlers,
        })
      },
    '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          s: () => useComposedRefs,
          t: () => composeRefs,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function setRef(ref, value) {
          if ('function' == typeof ref) return ref(value)
          null != ref && (ref.current = value)
        }
        function composeRefs(...refs) {
          return (node) => {
            let hasCleanup = !1
            const cleanups = refs.map((ref) => {
              const cleanup = setRef(ref, node)
              return (
                hasCleanup || 'function' != typeof cleanup || (hasCleanup = !0),
                cleanup
              )
            })
            if (hasCleanup)
              return () => {
                for (let i = 0; i < cleanups.length; i++) {
                  const cleanup = cleanups[i]
                  'function' == typeof cleanup
                    ? cleanup()
                    : setRef(refs[i], null)
                }
              }
          }
        }
        function useComposedRefs(...refs) {
          return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
            composeRefs(...refs),
            refs
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => createContextScope,
          q: () => createContext2,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function createContext2(rootComponentName, defaultContext) {
          const Context =
              react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),
            Provider = (props) => {
              const { children, ...context } = props,
                value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                  () => context,
                  Object.values(context)
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                Context.Provider,
                { value, children }
              )
            }
          return (
            (Provider.displayName = rootComponentName + 'Provider'),
            [
              Provider,
              function useContext2(consumerName) {
                const context =
                  react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context)
                if (context) return context
                if (void 0 !== defaultContext) return defaultContext
                throw new Error(
                  `\`${consumerName}\` must be used within \`${rootComponentName}\``
                )
              },
            ]
          )
        }
        function createContextScope(scopeName, createContextScopeDeps = []) {
          let defaultContexts = []
          const createScope = () => {
            const scopeContexts = defaultContexts.map((defaultContext) =>
              react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)
            )
            return function useScope(scope) {
              const contexts = scope?.[scopeName] || scopeContexts
              return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                () => ({
                  [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts },
                }),
                [scope, contexts]
              )
            }
          }
          return (
            (createScope.scopeName = scopeName),
            [
              function createContext3(rootComponentName, defaultContext) {
                const BaseContext =
                    react__WEBPACK_IMPORTED_MODULE_0__.createContext(
                      defaultContext
                    ),
                  index = defaultContexts.length
                defaultContexts = [...defaultContexts, defaultContext]
                const Provider = (props) => {
                  const { scope, children, ...context } = props,
                    Context = scope?.[scopeName]?.[index] || BaseContext,
                    value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                      () => context,
                      Object.values(context)
                    )
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    Context.Provider,
                    { value, children }
                  )
                }
                return (
                  (Provider.displayName = rootComponentName + 'Provider'),
                  [
                    Provider,
                    function useContext2(consumerName, scope) {
                      const Context =
                          scope?.[scopeName]?.[index] || BaseContext,
                        context =
                          react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context)
                      if (context) return context
                      if (void 0 !== defaultContext) return defaultContext
                      throw new Error(
                        `\`${consumerName}\` must be used within \`${rootComponentName}\``
                      )
                    },
                  ]
                )
              },
              composeContextScopes(createScope, ...createContextScopeDeps),
            ]
          )
        }
        function composeContextScopes(...scopes) {
          const baseScope = scopes[0]
          if (1 === scopes.length) return baseScope
          const createScope = () => {
            const scopeHooks = scopes.map((createScope2) => ({
              useScope: createScope2(),
              scopeName: createScope2.scopeName,
            }))
            return function useComposedScopes(overrideScopes) {
              const nextScopes = scopeHooks.reduce(
                (nextScopes2, { useScope, scopeName }) => ({
                  ...nextScopes2,
                  ...useScope(overrideScopes)[`__scope${scopeName}`],
                }),
                {}
              )
              return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
                [nextScopes]
              )
            }
          }
          return ((createScope.scopeName = baseScope.scopeName), createScope)
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          hO: () => dispatchDiscreteCustomEvent,
          sG: () => Primitive,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
          ),
          _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Primitive = [
            'a',
            'button',
            'div',
            'form',
            'h2',
            'h3',
            'img',
            'input',
            'label',
            'li',
            'nav',
            'ol',
            'p',
            'select',
            'span',
            'svg',
            'ul',
          ].reduce((primitive, node) => {
            const Slot = (0,
              _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.TL)(
                `Primitive.${node}`
              ),
              Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                (props, forwardedRef) => {
                  const { asChild, ...primitiveProps } = props,
                    Comp = asChild ? Slot : node
                  return (
                    'undefined' != typeof window &&
                      (window[Symbol.for('radix-ui')] = !0),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      Comp,
                      { ...primitiveProps, ref: forwardedRef }
                    )
                  )
                }
              )
            return (
              (Node.displayName = `Primitive.${node}`),
              { ...primitive, [node]: Node }
            )
          }, {})
        function dispatchDiscreteCustomEvent(target, event) {
          target &&
            react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() =>
              target.dispatchEvent(event)
            )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          DX: () => Slot,
          Dc: () => createSlottable,
          TL: () => createSlot,
          bL: () => Slot,
          xV: () => Slottable,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function createSlot(ownerName) {
          const SlotClone = createSlotClone(ownerName),
            Slot2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { children, ...slotProps } = props,
                  childrenArray =
                    react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(
                      children
                    ),
                  slottable = childrenArray.find(isSlottable)
                if (slottable) {
                  const newElement = slottable.props.children,
                    newChildren = childrenArray.map((child) =>
                      child === slottable
                        ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                            newElement
                          ) > 1
                          ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(
                              null
                            )
                          : react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                                newElement
                              )
                            ? newElement.props.children
                            : null
                        : child
                    )
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    SlotClone,
                    {
                      ...slotProps,
                      ref: forwardedRef,
                      children:
                        react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                          newElement
                        )
                          ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                              newElement,
                              void 0,
                              newChildren
                            )
                          : null,
                    }
                  )
                }
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  SlotClone,
                  { ...slotProps, ref: forwardedRef, children }
                )
              }
            )
          return ((Slot2.displayName = `${ownerName}.Slot`), Slot2)
        }
        var Slot = createSlot('Slot')
        function createSlotClone(ownerName) {
          const SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { children, ...slotProps } = props
              if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
                const childrenRef = (function getElementRef(element) {
                    let getter = Object.getOwnPropertyDescriptor(
                        element.props,
                        'ref'
                      )?.get,
                      mayWarn =
                        getter &&
                        'isReactWarning' in getter &&
                        getter.isReactWarning
                    if (mayWarn) return element.ref
                    if (
                      ((getter = Object.getOwnPropertyDescriptor(
                        element,
                        'ref'
                      )?.get),
                      (mayWarn =
                        getter &&
                        'isReactWarning' in getter &&
                        getter.isReactWarning),
                      mayWarn)
                    )
                      return element.props.ref
                    return element.props.ref || element.ref
                  })(children),
                  props2 = (function mergeProps(slotProps, childProps) {
                    const overrideProps = { ...childProps }
                    for (const propName in childProps) {
                      const slotPropValue = slotProps[propName],
                        childPropValue = childProps[propName]
                      ;/^on[A-Z]/.test(propName)
                        ? slotPropValue && childPropValue
                          ? (overrideProps[propName] = (...args) => {
                              const result = childPropValue(...args)
                              return (slotPropValue(...args), result)
                            })
                          : slotPropValue &&
                            (overrideProps[propName] = slotPropValue)
                        : 'style' === propName
                          ? (overrideProps[propName] = {
                              ...slotPropValue,
                              ...childPropValue,
                            })
                          : 'className' === propName &&
                            (overrideProps[propName] = [
                              slotPropValue,
                              childPropValue,
                            ]
                              .filter(Boolean)
                              .join(' '))
                    }
                    return { ...slotProps, ...overrideProps }
                  })(slotProps, children.props)
                return (
                  children.type !==
                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment &&
                    (props2.ref = forwardedRef
                      ? (0,
                        _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(
                          forwardedRef,
                          childrenRef
                        )
                      : childrenRef),
                  react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                    children,
                    props2
                  )
                )
              }
              return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                children
              ) > 1
                ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
                : null
            }
          )
          return ((SlotClone.displayName = `${ownerName}.SlotClone`), SlotClone)
        }
        var SLOTTABLE_IDENTIFIER = Symbol('radix.slottable')
        function createSlottable(ownerName) {
          const Slottable2 = ({ children }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
              { children }
            )
          return (
            (Slottable2.displayName = `${ownerName}.Slottable`),
            (Slottable2.__radixId = SLOTTABLE_IDENTIFIER),
            Slottable2
          )
        }
        var Slottable = createSlottable('Slottable')
        function isSlottable(child) {
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) &&
            'function' == typeof child.type &&
            '__radixId' in child.type &&
            child.type.__radixId === SLOTTABLE_IDENTIFIER
          )
        }
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
    '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
        __webpack_require__.d(__webpack_exports__, {
          i: () => useControllableState,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            ),
          console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          useInsertionEffect =
            (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
              (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
                __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[
              ' useInsertionEffect '.trim().toString()
            ] ||
            _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N
        function useControllableState({
          prop,
          defaultProp,
          onChange = () => {},
          caller,
        }) {
          const [uncontrolledProp, setUncontrolledProp, onChangeRef] =
              (function useUncontrolledState({ defaultProp, onChange }) {
                const [value, setValue] =
                    react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),
                  prevValueRef =
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),
                  onChangeRef =
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef(onChange)
                return (
                  useInsertionEffect(() => {
                    onChangeRef.current = onChange
                  }, [onChange]),
                  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                    prevValueRef.current !== value &&
                      (onChangeRef.current?.(value),
                      (prevValueRef.current = value))
                  }, [value, prevValueRef]),
                  [value, setValue, onChangeRef]
                )
              })({ defaultProp, onChange }),
            isControlled = void 0 !== prop,
            value = isControlled ? prop : uncontrolledProp
          {
            const isControlledRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(
              void 0 !== prop
            )
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              const wasControlled = isControlledRef.current
              if (wasControlled !== isControlled) {
                const from = wasControlled ? 'controlled' : 'uncontrolled',
                  to = isControlled ? 'controlled' : 'uncontrolled'
                console.warn(
                  `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                )
              }
              isControlledRef.current = isControlled
            }, [isControlled, caller])
          }
          const setValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
            (nextValue) => {
              if (isControlled) {
                const value2 = (function isFunction(value) {
                  return 'function' == typeof value
                })(nextValue)
                  ? nextValue(prop)
                  : nextValue
                value2 !== prop && onChangeRef.current?.(value2)
              } else setUncontrolledProp(nextValue)
            },
            [isControlled, prop, setUncontrolledProp, onChangeRef]
          )
          return [value, setValue]
        }
        Symbol('RADIX:SYNC_STATE')
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          N: () => useLayoutEffect2,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          useLayoutEffect2 = globalThis?.document
            ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
            : () => {}
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
  },
])
