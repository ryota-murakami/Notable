'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1815],
  {
    '../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs':
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
    '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs':
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
    '../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => createContextScope,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
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
    '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { jH: () => useDirection })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          DirectionContext =
            (__webpack_require__(
              '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
            react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0))
        function useDirection(localDir) {
          const globalDir =
            react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext)
          return localDir || globalDir || 'ltr'
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_d340d9d39508cb250c25fc66451df4dd/node_modules/@radix-ui/react-presence/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { C: () => Presence })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            )
        var Presence = (props) => {
          const { present, children } = props,
            presence = (function usePresence(present) {
              const [node, setNode] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(),
                stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({}),
                prevPresentRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(present),
                prevAnimationNameRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef('none'),
                initialState = present ? 'mounted' : 'unmounted',
                [state, send] = (function useStateMachine(
                  initialState,
                  machine
                ) {
                  return react__WEBPACK_IMPORTED_MODULE_0__.useReducer(
                    (state, event) => machine[state][event] ?? state,
                    initialState
                  )
                })(initialState, {
                  mounted: {
                    UNMOUNT: 'unmounted',
                    ANIMATION_OUT: 'unmountSuspended',
                  },
                  unmountSuspended: {
                    MOUNT: 'mounted',
                    ANIMATION_END: 'unmounted',
                  },
                  unmounted: { MOUNT: 'mounted' },
                })
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  const currentAnimationName = getAnimationName(
                    stylesRef.current
                  )
                  prevAnimationNameRef.current =
                    'mounted' === state ? currentAnimationName : 'none'
                }, [state]),
                (0,
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.N)(() => {
                  const styles = stylesRef.current,
                    wasPresent = prevPresentRef.current
                  if (wasPresent !== present) {
                    const prevAnimationName = prevAnimationNameRef.current,
                      currentAnimationName = getAnimationName(styles)
                    if (present) send('MOUNT')
                    else if (
                      'none' === currentAnimationName ||
                      'none' === styles?.display
                    )
                      send('UNMOUNT')
                    else {
                      send(
                        wasPresent && prevAnimationName !== currentAnimationName
                          ? 'ANIMATION_OUT'
                          : 'UNMOUNT'
                      )
                    }
                    prevPresentRef.current = present
                  }
                }, [present, send]),
                (0,
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.N)(() => {
                  if (node) {
                    let timeoutId
                    const ownerWindow =
                        node.ownerDocument.defaultView ?? window,
                      handleAnimationEnd = (event) => {
                        const isCurrentAnimation = getAnimationName(
                          stylesRef.current
                        ).includes(event.animationName)
                        if (
                          event.target === node &&
                          isCurrentAnimation &&
                          (send('ANIMATION_END'), !prevPresentRef.current)
                        ) {
                          const currentFillMode = node.style.animationFillMode
                          ;((node.style.animationFillMode = 'forwards'),
                            (timeoutId = ownerWindow.setTimeout(() => {
                              'forwards' === node.style.animationFillMode &&
                                (node.style.animationFillMode = currentFillMode)
                            })))
                        }
                      },
                      handleAnimationStart = (event) => {
                        event.target === node &&
                          (prevAnimationNameRef.current = getAnimationName(
                            stylesRef.current
                          ))
                      }
                    return (
                      node.addEventListener(
                        'animationstart',
                        handleAnimationStart
                      ),
                      node.addEventListener(
                        'animationcancel',
                        handleAnimationEnd
                      ),
                      node.addEventListener('animationend', handleAnimationEnd),
                      () => {
                        ;(ownerWindow.clearTimeout(timeoutId),
                          node.removeEventListener(
                            'animationstart',
                            handleAnimationStart
                          ),
                          node.removeEventListener(
                            'animationcancel',
                            handleAnimationEnd
                          ),
                          node.removeEventListener(
                            'animationend',
                            handleAnimationEnd
                          ))
                      }
                    )
                  }
                  send('ANIMATION_END')
                }, [node, send]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(state),
                  ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                    (node2) => {
                      ;(node2 && (stylesRef.current = getComputedStyle(node2)),
                        setNode(node2))
                    },
                    []
                  ),
                }
              )
            })(present),
            child =
              'function' == typeof children
                ? children({ present: presence.isPresent })
                : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),
            ref = (0,
            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.s)(
              presence.ref,
              (function getElementRef(element) {
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
              })(child)
            )
          return 'function' == typeof children || presence.isPresent
            ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { ref })
            : null
        }
        function getAnimationName(styles) {
          return styles?.animationName || 'none'
        }
        Presence.displayName = 'Presence'
      },
    '../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_997b35f2e2aa9d3174fc03a0f79e437b/node_modules/@radix-ui/react-primitive/dist/index.mjs':
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
              '../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
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
            'span',
            'svg',
            'ul',
          ].reduce((primitive, node) => {
            const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { asChild, ...primitiveProps } = props,
                  Comp = asChild
                    ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX
                    : node
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
    '../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { DX: () => Slot })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { children, ...slotProps } = props,
                childrenArray =
                  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),
                slottable = childrenArray.find(isSlottable)
              if (slottable) {
                const newElement = slottable.props.children,
                  newChildren = childrenArray.map((child) =>
                    child === slottable
                      ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                          newElement
                        ) > 1
                        ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
                        : react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                              newElement
                            )
                          ? newElement.props.children
                          : null
                      : child
                  )
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  SlotClone,
                  {
                    ...slotProps,
                    ref: forwardedRef,
                    children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
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
        Slot.displayName = 'Slot'
        var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
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
              })(children)
              return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                ...mergeProps(slotProps, children.props),
                ref: forwardedRef
                  ? (0,
                    _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(
                      forwardedRef,
                      childrenRef
                    )
                  : childrenRef,
              })
            }
            return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) >
              1
              ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
              : null
          }
        )
        SlotClone.displayName = 'SlotClone'
        var Slottable = ({ children }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            { children }
          )
        function isSlottable(child) {
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) &&
            child.type === Slottable
          )
        }
        function mergeProps(slotProps, childProps) {
          const overrideProps = { ...childProps }
          for (const propName in childProps) {
            const slotPropValue = slotProps[propName],
              childPropValue = childProps[propName]
            ;/^on[A-Z]/.test(propName)
              ? slotPropValue && childPropValue
                ? (overrideProps[propName] = (...args) => {
                    ;(childPropValue(...args), slotPropValue(...args))
                  })
                : slotPropValue && (overrideProps[propName] = slotPropValue)
              : 'style' === propName
                ? (overrideProps[propName] = {
                    ...slotPropValue,
                    ...childPropValue,
                  })
                : 'className' === propName &&
                  (overrideProps[propName] = [slotPropValue, childPropValue]
                    .filter(Boolean)
                    .join(' '))
          }
          return { ...slotProps, ...overrideProps }
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { c: () => useCallbackRef })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function useCallbackRef(callback) {
          const callbackRef =
            react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback)
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
              callbackRef.current = callback
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
              () =>
                (...args) =>
                  callbackRef.current?.(...args),
              []
            )
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          N: () => useLayoutEffect2,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          useLayoutEffect2 = Boolean(globalThis?.document)
            ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
            : () => {}
      },
    './components/ui/scroll-area.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { F: () => ScrollArea })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-scroll-area@1.2.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+r_bdc66dfa9beb65f3056a81320e8a7f44/node_modules/@radix-ui/react-scroll-area/dist/index.mjs'
          )),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_npj9vkjwz() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '7d12877cfc7b2b3e02a7ec2cf0054cf3e1ce167a' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 4 },
                end: { line: 20, column: 7 },
              },
              1: {
                start: { line: 23, column: 4 },
                end: { line: 32, column: 7 },
              },
              2: {
                start: { line: 35, column: 0 },
                end: { line: 39, column: 2 },
              },
              3: {
                start: { line: 40, column: 0 },
                end: { line: 53, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'ScrollArea',
                decl: {
                  start: { line: 6, column: 9 },
                  end: { line: 6, column: 19 },
                },
                loc: {
                  start: { line: 6, column: 55 },
                  end: { line: 21, column: 1 },
                },
                line: 6,
              },
              1: {
                name: 'ScrollBar',
                decl: {
                  start: { line: 22, column: 9 },
                  end: { line: 22, column: 18 },
                },
                loc: {
                  start: { line: 22, column: 70 },
                  end: { line: 33, column: 1 },
                },
                line: 22,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 22, column: 32 },
                  end: { line: 22, column: 56 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 22, column: 46 },
                    end: { line: 22, column: 56 },
                  },
                ],
                line: 22,
              },
              1: {
                loc: {
                  start: { line: 26, column: 76 },
                  end: { line: 26, column: 150 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 26, column: 76 },
                    end: { line: 26, column: 102 },
                  },
                  {
                    start: { line: 26, column: 106 },
                    end: { line: 26, column: 150 },
                  },
                ],
                line: 26,
              },
              2: {
                loc: {
                  start: { line: 26, column: 152 },
                  end: { line: 26, column: 230 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 26, column: 152 },
                    end: { line: 26, column: 180 },
                  },
                  {
                    start: { line: 26, column: 184 },
                    end: { line: 26, column: 230 },
                  },
                ],
                line: 26,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0, 1: 0 },
            b: { 0: [0], 1: [0, 0], 2: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/scroll-area.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'\n\nimport { cn } from '@/lib/utils'\n\nfunction ScrollArea({\n  className,\n  children,\n  ...props\n}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {\n  return (\n    <ScrollAreaPrimitive.Root\n      data-slot='scroll-area'\n      className={cn('relative', className)}\n      {...props}\n    >\n      <ScrollAreaPrimitive.Viewport\n        data-slot='scroll-area-viewport'\n        className='focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1'\n      >\n        {children}\n      </ScrollAreaPrimitive.Viewport>\n      <ScrollBar />\n      <ScrollAreaPrimitive.Corner />\n    </ScrollAreaPrimitive.Root>\n  )\n}\n\nfunction ScrollBar({\n  className,\n  orientation = 'vertical',\n  ...props\n}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {\n  return (\n    <ScrollAreaPrimitive.ScrollAreaScrollbar\n      data-slot='scroll-area-scrollbar'\n      orientation={orientation}\n      className={cn(\n        'flex touch-none p-px transition-colors select-none',\n        orientation === 'vertical' &&\n          'h-full w-2.5 border-l border-l-transparent',\n        orientation === 'horizontal' &&\n          'h-2.5 flex-col border-t border-t-transparent',\n        className\n      )}\n      {...props}\n    >\n      <ScrollAreaPrimitive.ScrollAreaThumb\n        data-slot='scroll-area-thumb'\n        className='bg-border relative flex-1 rounded-full'\n      />\n    </ScrollAreaPrimitive.ScrollAreaScrollbar>\n  )\n}\n\nexport { ScrollArea, ScrollBar }\n",
              ],
              names: [],
              mappings:
                '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AAC,CAAC,CAAC,CAAC;QAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAET,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAIzD;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '7d12877cfc7b2b3e02a7ec2cf0054cf3e1ce167a',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_npj9vkjwz = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function ScrollArea({ className, children, ...props }) {
        return (
          cov_npj9vkjwz().f[0]++,
          cov_npj9vkjwz().s[0]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.bL,
            {
              'data-slot': 'scroll-area',
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'relative',
                className
              ),
              ...props,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.LM,
                  {
                    'data-slot': 'scroll-area-viewport',
                    className:
                      'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
                    children,
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ScrollBar,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.OK,
                  {}
                ),
              ],
            }
          )
        )
      }
      function ScrollBar({
        className,
        orientation = (cov_npj9vkjwz().b[0][0]++, 'vertical'),
        ...props
      }) {
        return (
          cov_npj9vkjwz().f[1]++,
          cov_npj9vkjwz().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.VM,
            {
              'data-slot': 'scroll-area-scrollbar',
              orientation,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'flex touch-none p-px transition-colors select-none',
                (cov_npj9vkjwz().b[1][0]++,
                'vertical' === orientation &&
                  (cov_npj9vkjwz().b[1][1]++,
                  'h-full w-2.5 border-l border-l-transparent')),
                (cov_npj9vkjwz().b[2][0]++,
                'horizontal' === orientation &&
                  (cov_npj9vkjwz().b[2][1]++,
                  'h-2.5 flex-col border-t border-t-transparent')),
                className
              ),
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.lr,
                {
                  'data-slot': 'scroll-area-thumb',
                  className: 'bg-border relative flex-1 rounded-full',
                }
              ),
            }
          )
        )
      }
      ;(cov_npj9vkjwz(),
        cov_npj9vkjwz().s[2]++,
        (ScrollArea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ScrollArea',
        }),
        cov_npj9vkjwz().s[3]++,
        (ScrollBar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ScrollBar',
          props: {
            orientation: {
              defaultValue: { value: "'vertical'", computed: !1 },
              required: !1,
            },
          },
        }))
    },
    './components/ui/separator.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => Separator })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/utils.ts')
      function cov_lsz184s3a() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ad53c0bf7a164bded3279daab5cb438b8ee6b452' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 32 },
                end: { line: 12, column: 2 },
              },
              1: {
                start: { line: 5, column: 4 },
                end: { line: 11, column: 7 },
              },
              2: {
                start: { line: 13, column: 0 },
                end: { line: 13, column: 36 },
              },
              3: {
                start: { line: 15, column: 0 },
                end: { line: 54, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 49 },
                  end: { line: 4, column: 50 },
                },
                loc: {
                  start: { line: 4, column: 128 },
                  end: { line: 12, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 4, column: 63 },
                  end: { line: 4, column: 89 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 77 },
                    end: { line: 4, column: 89 },
                  },
                ],
                line: 4,
              },
              1: {
                loc: {
                  start: { line: 4, column: 91 },
                  end: { line: 4, column: 108 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 4, column: 104 },
                    end: { line: 4, column: 108 },
                  },
                ],
                line: 4,
              },
              2: {
                loc: {
                  start: { line: 7, column: 14 },
                  end: { line: 7, column: 47 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 7, column: 27 },
                    end: { line: 7, column: 33 },
                  },
                  {
                    start: { line: 7, column: 36 },
                    end: { line: 7, column: 47 },
                  },
                ],
                line: 7,
              },
              3: {
                loc: {
                  start: { line: 8, column: 28 },
                  end: { line: 8, column: 64 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 8, column: 41 },
                    end: { line: 8, column: 50 },
                  },
                  {
                    start: { line: 8, column: 53 },
                    end: { line: 8, column: 64 },
                  },
                ],
                line: 8,
              },
              4: {
                loc: {
                  start: { line: 9, column: 44 },
                  end: { line: 9, column: 110 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 9, column: 75 },
                    end: { line: 9, column: 91 },
                  },
                  {
                    start: { line: 9, column: 94 },
                    end: { line: 9, column: 110 },
                  },
                ],
                line: 9,
              },
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: { 0: [0], 1: [0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/separator.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '../../lib/utils'\n\nexport interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {\n  orientation?: 'horizontal' | 'vertical'\n  decorative?: boolean\n}\n\nconst Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(\n  (\n    { className, orientation = 'horizontal', decorative = true, ...props },\n    ref\n  ) => {\n    return (\n      <div\n        ref={ref}\n        role={decorative ? 'none' : 'separator'}\n        aria-orientation={decorative ? undefined : orientation}\n        className={cn(\n          'shrink-0 bg-border',\n          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',\n          className\n        )}\n        {...props}\n      />\n    )\n  }\n)\n\nSeparator.displayName = 'Separator'\n\nexport { Separator }\n",
              ],
              names: [],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ad53c0bf7a164bded3279daab5cb438b8ee6b452',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_lsz184s3a = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_lsz184s3a()
      const Separator =
        (cov_lsz184s3a().s[0]++,
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          (
            {
              className,
              orientation = (cov_lsz184s3a().b[0][0]++, 'horizontal'),
              decorative = (cov_lsz184s3a().b[1][0]++, !0),
              ...props
            },
            ref
          ) => (
            cov_lsz184s3a().f[0]++,
            cov_lsz184s3a().s[1]++,
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              ref,
              role: decorative
                ? (cov_lsz184s3a().b[2][0]++, 'none')
                : (cov_lsz184s3a().b[2][1]++, 'separator'),
              'aria-orientation': decorative
                ? void cov_lsz184s3a().b[3][0]++
                : (cov_lsz184s3a().b[3][1]++, orientation),
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                'shrink-0 bg-border',
                'horizontal' === orientation
                  ? (cov_lsz184s3a().b[4][0]++, 'h-[1px] w-full')
                  : (cov_lsz184s3a().b[4][1]++, 'h-full w-[1px]'),
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_lsz184s3a().s[2]++,
        (Separator.displayName = 'Separator'),
        cov_lsz184s3a().s[3]++,
        (Separator.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Separator',
          props: {
            orientation: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'horizontal' | 'vertical'",
                elements: [
                  { name: 'literal', value: "'horizontal'" },
                  { name: 'literal', value: "'vertical'" },
                ],
              },
              description: '',
              defaultValue: { value: "'horizontal'", computed: !1 },
            },
            decorative: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'true', computed: !1 },
            },
          },
        }))
    },
    './design-system/components/scroll-area.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ChatMessages: () => ChatMessages,
          CodeBlock: () => CodeBlock,
          DataTable: () => DataTable,
          Default: () => Default,
          DocumentList: () => DocumentList,
          HorizontalScroll: () => HorizontalScroll,
          LongContent: () => LongContent,
          Sidebar: () => Sidebar,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./components/ui/scroll-area.tsx'),
        _components_ui_separator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./components/ui/separator.tsx'),
        _lib_utils__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./lib/utils.ts')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Layout/ScrollArea',
          component: _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
          tags: ['autodocs'],
          parameters: { layout: 'centered' },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className: 'h-72 w-48 rounded-md border',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'p-4',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'h4',
                      {
                        className: 'mb-4 text-sm font-medium leading-none',
                        children: 'Tags',
                      }
                    ),
                    Array.from({ length: 50 }).map((_, i) =>
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'text-sm',
                                children: ['Tag ', i + 1],
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_ui_separator__WEBPACK_IMPORTED_MODULE_3__.w,
                              { className: 'my-2' }
                            ),
                          ],
                        },
                        i
                      )
                    ),
                  ],
                }),
              }
            ),
        },
        HorizontalScroll = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className: 'w-96 whitespace-nowrap rounded-md border',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'flex w-max space-x-4 p-4',
                  children: Array.from({ length: 20 }).map((_, i) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'figure',
                      {
                        className: 'shrink-0',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'div',
                            {
                              className: 'overflow-hidden rounded-md',
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'div',
                                { className: 'h-32 w-32 bg-muted' }
                              ),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'figcaption',
                            {
                              className: 'pt-2 text-xs text-muted-foreground',
                              children: ['Photo ', i + 1],
                            }
                          ),
                        ],
                      },
                      i
                    )
                  ),
                }),
              }
            ),
        },
        DocumentList = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className: 'h-[350px] w-[350px] rounded-md border',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'p-4',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'h4',
                      {
                        className: 'mb-4 text-sm font-medium',
                        children: 'Recent Files',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'div',
                      {
                        className: 'space-y-1',
                        children: [
                          {
                            name: 'README.md',
                            size: '3.2 KB',
                            date: '2 hours ago',
                          },
                          {
                            name: 'package.json',
                            size: '1.8 KB',
                            date: '3 hours ago',
                          },
                          {
                            name: 'tsconfig.json',
                            size: '892 B',
                            date: 'Yesterday',
                          },
                          {
                            name: '.gitignore',
                            size: '234 B',
                            date: 'Yesterday',
                          },
                          {
                            name: 'index.tsx',
                            size: '5.6 KB',
                            date: '2 days ago',
                          },
                          {
                            name: 'styles.css',
                            size: '12.3 KB',
                            date: '2 days ago',
                          },
                          {
                            name: 'components.tsx',
                            size: '8.9 KB',
                            date: '3 days ago',
                          },
                          {
                            name: 'utils.ts',
                            size: '4.1 KB',
                            date: '3 days ago',
                          },
                          {
                            name: 'types.d.ts',
                            size: '2.7 KB',
                            date: '4 days ago',
                          },
                          {
                            name: 'constants.ts',
                            size: '1.5 KB',
                            date: '5 days ago',
                          },
                          {
                            name: 'api.ts',
                            size: '6.8 KB',
                            date: '1 week ago',
                          },
                          {
                            name: 'hooks.ts',
                            size: '3.9 KB',
                            date: '1 week ago',
                          },
                          {
                            name: 'context.tsx',
                            size: '2.3 KB',
                            date: '2 weeks ago',
                          },
                          {
                            name: 'router.tsx',
                            size: '4.5 KB',
                            date: '2 weeks ago',
                          },
                          {
                            name: 'store.ts',
                            size: '7.2 KB',
                            date: '3 weeks ago',
                          },
                        ].map((doc, i) =>
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'button',
                            {
                              className:
                                'w-full rounded-md p-3 text-left hover:bg-accent',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'div',
                                  {
                                    className:
                                      'flex items-center justify-between',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'p',
                                        {
                                          className: 'text-sm font-medium',
                                          children: doc.name,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'p',
                                        {
                                          className:
                                            'text-xs text-muted-foreground',
                                          children: doc.size,
                                        }
                                      ),
                                    ],
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'p',
                                  {
                                    className:
                                      'text-xs text-muted-foreground mt-1',
                                    children: doc.date,
                                  }
                                ),
                              ],
                            },
                            i
                          )
                        ),
                      }
                    ),
                  ],
                }),
              }
            ),
        },
        ChatMessages = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className: 'h-[400px] w-[400px] rounded-md border p-4',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'space-y-4',
                  children: [
                    {
                      user: 'Alice',
                      message: 'Hey everyone! 👋',
                      time: '10:00 AM',
                    },
                    {
                      user: 'Bob',
                      message: 'Hi Alice! How are you?',
                      time: '10:02 AM',
                    },
                    {
                      user: 'Alice',
                      message:
                        "I'm doing great, thanks! Working on the new design.",
                      time: '10:03 AM',
                    },
                    {
                      user: 'Charlie',
                      message: "Nice! Can't wait to see it",
                      time: '10:05 AM',
                    },
                    {
                      user: 'Alice',
                      message: "I'll share some mockups soon",
                      time: '10:06 AM',
                    },
                    {
                      user: 'Bob',
                      message: 'Looking forward to it!',
                      time: '10:08 AM',
                    },
                    {
                      user: 'Charlie',
                      message:
                        'Same here! Let me know if you need any feedback',
                      time: '10:10 AM',
                    },
                    {
                      user: 'Alice',
                      message: 'Will do! Thanks everyone 🙏',
                      time: '10:12 AM',
                    },
                    {
                      user: 'Bob',
                      message: 'By the way, did you see the latest updates?',
                      time: '10:15 AM',
                    },
                    {
                      user: 'Charlie',
                      message: 'Yes! The performance improvements are amazing',
                      time: '10:17 AM',
                    },
                    {
                      user: 'Alice',
                      message: 'Absolutely! The app feels so much faster now',
                      time: '10:19 AM',
                    },
                    {
                      user: 'Bob',
                      message: 'The team did a great job',
                      time: '10:20 AM',
                    },
                  ].map((msg, i) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'space-y-1',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: 'flex items-center justify-between',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'p',
                                  {
                                    className: 'text-sm font-medium',
                                    children: msg.user,
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'p',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: msg.time,
                                  }
                                ),
                              ],
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'p',
                            {
                              className: 'text-sm text-muted-foreground',
                              children: msg.message,
                            }
                          ),
                        ],
                      },
                      i
                    )
                  ),
                }),
              }
            ),
        },
        CodeBlock = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className:
                  'h-[300px] w-[500px] rounded-md border bg-slate-950 p-4',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('pre', {
                  className: 'text-sm text-white',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('code', {
                    children:
                      'import React from \'react\'\nimport { ScrollArea } from \'@/components/ui/scroll-area\'\n\nexport function Example() {\n  const items = Array.from({ length: 100 }, (_, i) => ({\n    id: i,\n    name: `Item ${i + 1}`,\n    description: `Description for item ${i + 1}`\n  }))\n\n  return (\n    <ScrollArea className="h-96 w-full">\n      <div className="space-y-4 p-4">\n        {items.map((item) => (\n          <div key={item.id} className="rounded-lg border p-4">\n            <h3 className="font-semibold">{item.name}</h3>\n            <p className="text-sm text-muted-foreground">\n              {item.description}\n            </p>\n          </div>\n        ))}\n      </div>\n    </ScrollArea>\n  )\n}\n\n// This component demonstrates how to use ScrollArea\n// for long lists of content that need to be scrollable\n// within a fixed height container.\n\nfunction AnotherExample() {\n  return (\n    <ScrollArea className="h-[200px]">\n      <div className="p-4">\n        <h2>Terms of Service</h2>\n        <p>Lorem ipsum dolor sit amet...</p>\n        {/* More content */}\n      </div>\n    </ScrollArea>\n  )\n}',
                  }),
                }),
              }
            ),
        },
        Sidebar = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'w-64 rounded-md border',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'p-4 border-b',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                    className: 'font-semibold',
                    children: 'Documentation',
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
                  {
                    className: 'h-[400px]',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'p-4 space-y-6',
                      children: [
                        {
                          title: 'Getting Started',
                          items: [
                            'Introduction',
                            'Installation',
                            'Project Structure',
                            'Configuration',
                          ],
                        },
                        {
                          title: 'Components',
                          items: [
                            'Button',
                            'Card',
                            'Dialog',
                            'Form',
                            'Input',
                            'Select',
                            'Table',
                            'Tabs',
                          ],
                        },
                        {
                          title: 'Utilities',
                          items: [
                            'Typography',
                            'Colors',
                            'Spacing',
                            'Shadows',
                            'Animations',
                          ],
                        },
                        {
                          title: 'Advanced',
                          items: [
                            'Theming',
                            'Dark Mode',
                            'Accessibility',
                            'Performance',
                            'Testing',
                          ],
                        },
                      ].map((section, i) =>
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'space-y-3',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'h4',
                                {
                                  className: 'font-medium text-sm',
                                  children: section.title,
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'div',
                                {
                                  className: 'space-y-1',
                                  children: section.items.map((item, j) =>
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'button',
                                      {
                                        className:
                                          'w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent',
                                        children: item,
                                      },
                                      j
                                    )
                                  ),
                                }
                              ),
                            ],
                          },
                          i
                        )
                      ),
                    }),
                  }
                ),
              ],
            }),
        },
        LongContent = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
              {
                className: 'h-[400px] w-[600px] rounded-md border',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'p-6',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'article',
                    {
                      className: 'prose prose-sm max-w-none',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h1',
                          { children: 'The Art of Component Design' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Creating reusable components is a fundamental skill in modern web development. It requires careful consideration of API design, flexibility, and maintainability.',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h2',
                          { children: 'Key Principles' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'When designing components, there are several principles to keep in mind:',
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'ul',
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children:
                                    'Single Responsibility: Each component should do one thing well',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children:
                                    'Composability: Components should work well together',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children:
                                    'Customizability: Allow for styling and behavior modifications',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children:
                                    'Accessibility: Ensure components are usable by everyone',
                                }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h2',
                          { children: 'Component Architecture' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'A well-architected component system forms the foundation of a scalable application. Consider the following aspects when building your component library:',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h3',
                          { children: 'Props Interface' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Define clear and consistent prop interfaces. Use TypeScript or PropTypes to document expected prop types and provide better developer experience.',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h3',
                          { children: 'Styling Strategy' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Choose a styling approach that balances flexibility with consistency. Options include CSS-in-JS, CSS Modules, or utility-first CSS frameworks like Tailwind.',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h3',
                          { children: 'State Management' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Decide whether components should manage their own state or rely on external state management. Consider using controlled and uncontrolled patterns where appropriate.',
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h2',
                          { children: 'Best Practices' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Follow these best practices to create maintainable and reusable components:',
                          }
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'ol',
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children: 'Write comprehensive documentation',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                { children: 'Include usage examples' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                { children: 'Add unit and integration tests' }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                {
                                  children: 'Consider performance implications',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'li',
                                { children: 'Plan for internationalization' }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'h2',
                          { children: 'Conclusion' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'p',
                          {
                            children:
                              'Building a robust component library is an iterative process. Start small, gather feedback, and continuously improve based on real-world usage.',
                          }
                        ),
                      ],
                    }
                  ),
                }),
              }
            ),
        },
        DataTable = {
          render: () => {
            const data = Array.from({ length: 100 }, (_, i) => ({
              id: i + 1,
              name: `User ${i + 1}`,
              email: `user${i + 1}@example.com`,
              role: ['Admin', 'Editor', 'Viewer'][i % 3],
              status: ['Active', 'Inactive', 'Pending'][i % 3],
            }))
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              'div',
              {
                className: 'w-[600px] rounded-md border',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'div',
                    {
                      className: 'border-b bg-muted/50',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'table',
                        {
                          className: 'w-full',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'thead',
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'tr',
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'th',
                                      {
                                        className:
                                          'p-2 text-left text-sm font-medium',
                                        children: 'ID',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'th',
                                      {
                                        className:
                                          'p-2 text-left text-sm font-medium',
                                        children: 'Name',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'th',
                                      {
                                        className:
                                          'p-2 text-left text-sm font-medium',
                                        children: 'Email',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'th',
                                      {
                                        className:
                                          'p-2 text-left text-sm font-medium',
                                        children: 'Role',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'th',
                                      {
                                        className:
                                          'p-2 text-left text-sm font-medium',
                                        children: 'Status',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.F,
                    {
                      className: 'h-[300px]',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'table',
                        {
                          className: 'w-full',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'tbody',
                            {
                              children: data.map((row) =>
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'tr',
                                  {
                                    className: 'border-b',
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'td',
                                        {
                                          className: 'p-2 text-sm',
                                          children: row.id,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'td',
                                        {
                                          className: 'p-2 text-sm',
                                          children: row.name,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'td',
                                        {
                                          className: 'p-2 text-sm',
                                          children: row.email,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'td',
                                        {
                                          className: 'p-2 text-sm',
                                          children: row.role,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'td',
                                        {
                                          className: 'p-2 text-sm',
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            'span',
                                            {
                                              className: (0,
                                              _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                                'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                                                'Active' === row.status &&
                                                  'bg-green-100 text-green-800',
                                                'Inactive' === row.status &&
                                                  'bg-gray-100 text-gray-800',
                                                'Pending' === row.status &&
                                                  'bg-yellow-100 text-yellow-800'
                                              ),
                                              children: row.status,
                                            }
                                          ),
                                        }
                                      ),
                                    ],
                                  },
                                  row.id
                                )
                              ),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                ],
              }
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'HorizontalScroll',
          'DocumentList',
          'ChatMessages',
          'CodeBlock',
          'Sidebar',
          'LongContent',
          'DataTable',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <ScrollArea className='h-72 w-48 rounded-md border'>\n      <div className='p-4'>\n        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>\n        {Array.from({\n        length: 50\n      }).map((_, i) => <React.Fragment key={i}>\n            <div className='text-sm'>Tag {i + 1}</div>\n            <Separator className='my-2' />\n          </React.Fragment>)}\n      </div>\n    </ScrollArea>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (HorizontalScroll.parameters = {
          ...HorizontalScroll.parameters,
          docs: {
            ...HorizontalScroll.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>\n      <div className='flex w-max space-x-4 p-4'>\n        {Array.from({\n        length: 20\n      }).map((_, i) => <figure key={i} className='shrink-0'>\n            <div className='overflow-hidden rounded-md'>\n              <div className='h-32 w-32 bg-muted' />\n            </div>\n            <figcaption className='pt-2 text-xs text-muted-foreground'>\n              Photo {i + 1}\n            </figcaption>\n          </figure>)}\n      </div>\n    </ScrollArea>\n}",
              ...HorizontalScroll.parameters?.docs?.source,
            },
          },
        }),
        (DocumentList.parameters = {
          ...DocumentList.parameters,
          docs: {
            ...DocumentList.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const documents = [{\n      name: 'README.md',\n      size: '3.2 KB',\n      date: '2 hours ago'\n    }, {\n      name: 'package.json',\n      size: '1.8 KB',\n      date: '3 hours ago'\n    }, {\n      name: 'tsconfig.json',\n      size: '892 B',\n      date: 'Yesterday'\n    }, {\n      name: '.gitignore',\n      size: '234 B',\n      date: 'Yesterday'\n    }, {\n      name: 'index.tsx',\n      size: '5.6 KB',\n      date: '2 days ago'\n    }, {\n      name: 'styles.css',\n      size: '12.3 KB',\n      date: '2 days ago'\n    }, {\n      name: 'components.tsx',\n      size: '8.9 KB',\n      date: '3 days ago'\n    }, {\n      name: 'utils.ts',\n      size: '4.1 KB',\n      date: '3 days ago'\n    }, {\n      name: 'types.d.ts',\n      size: '2.7 KB',\n      date: '4 days ago'\n    }, {\n      name: 'constants.ts',\n      size: '1.5 KB',\n      date: '5 days ago'\n    }, {\n      name: 'api.ts',\n      size: '6.8 KB',\n      date: '1 week ago'\n    }, {\n      name: 'hooks.ts',\n      size: '3.9 KB',\n      date: '1 week ago'\n    }, {\n      name: 'context.tsx',\n      size: '2.3 KB',\n      date: '2 weeks ago'\n    }, {\n      name: 'router.tsx',\n      size: '4.5 KB',\n      date: '2 weeks ago'\n    }, {\n      name: 'store.ts',\n      size: '7.2 KB',\n      date: '3 weeks ago'\n    }];\n    return <ScrollArea className='h-[350px] w-[350px] rounded-md border'>\n        <div className='p-4'>\n          <h4 className='mb-4 text-sm font-medium'>Recent Files</h4>\n          <div className='space-y-1'>\n            {documents.map((doc, i) => <button key={i} className='w-full rounded-md p-3 text-left hover:bg-accent'>\n                <div className='flex items-center justify-between'>\n                  <p className='text-sm font-medium'>{doc.name}</p>\n                  <p className='text-xs text-muted-foreground'>{doc.size}</p>\n                </div>\n                <p className='text-xs text-muted-foreground mt-1'>{doc.date}</p>\n              </button>)}\n          </div>\n        </div>\n      </ScrollArea>;\n  }\n}",
              ...DocumentList.parameters?.docs?.source,
            },
          },
        }),
        (ChatMessages.parameters = {
          ...ChatMessages.parameters,
          docs: {
            ...ChatMessages.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const messages = [{\n      user: 'Alice',\n      message: 'Hey everyone! 👋',\n      time: '10:00 AM'\n    }, {\n      user: 'Bob',\n      message: 'Hi Alice! How are you?',\n      time: '10:02 AM'\n    }, {\n      user: 'Alice',\n      message: \"I'm doing great, thanks! Working on the new design.\",\n      time: '10:03 AM'\n    }, {\n      user: 'Charlie',\n      message: \"Nice! Can't wait to see it\",\n      time: '10:05 AM'\n    }, {\n      user: 'Alice',\n      message: \"I'll share some mockups soon\",\n      time: '10:06 AM'\n    }, {\n      user: 'Bob',\n      message: 'Looking forward to it!',\n      time: '10:08 AM'\n    }, {\n      user: 'Charlie',\n      message: 'Same here! Let me know if you need any feedback',\n      time: '10:10 AM'\n    }, {\n      user: 'Alice',\n      message: 'Will do! Thanks everyone 🙏',\n      time: '10:12 AM'\n    }, {\n      user: 'Bob',\n      message: 'By the way, did you see the latest updates?',\n      time: '10:15 AM'\n    }, {\n      user: 'Charlie',\n      message: 'Yes! The performance improvements are amazing',\n      time: '10:17 AM'\n    }, {\n      user: 'Alice',\n      message: 'Absolutely! The app feels so much faster now',\n      time: '10:19 AM'\n    }, {\n      user: 'Bob',\n      message: 'The team did a great job',\n      time: '10:20 AM'\n    }];\n    return <ScrollArea className='h-[400px] w-[400px] rounded-md border p-4'>\n        <div className='space-y-4'>\n          {messages.map((msg, i) => <div key={i} className='space-y-1'>\n              <div className='flex items-center justify-between'>\n                <p className='text-sm font-medium'>{msg.user}</p>\n                <p className='text-xs text-muted-foreground'>{msg.time}</p>\n              </div>\n              <p className='text-sm text-muted-foreground'>{msg.message}</p>\n            </div>)}\n        </div>\n      </ScrollArea>;\n  }\n}",
              ...ChatMessages.parameters?.docs?.source,
            },
          },
        }),
        (CodeBlock.parameters = {
          ...CodeBlock.parameters,
          docs: {
            ...CodeBlock.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ScrollArea className=\'h-[300px] w-[500px] rounded-md border bg-slate-950 p-4\'>\n      <pre className=\'text-sm text-white\'>\n        <code>{`import React from \'react\'\nimport { ScrollArea } from \'@/components/ui/scroll-area\'\n\nexport function Example() {\n  const items = Array.from({ length: 100 }, (_, i) => ({\n    id: i,\n    name: \\`Item \\${i + 1}\\`,\n    description: \\`Description for item \\${i + 1}\\`\n  }))\n\n  return (\n    <ScrollArea className="h-96 w-full">\n      <div className="space-y-4 p-4">\n        {items.map((item) => (\n          <div key={item.id} className="rounded-lg border p-4">\n            <h3 className="font-semibold">{item.name}</h3>\n            <p className="text-sm text-muted-foreground">\n              {item.description}\n            </p>\n          </div>\n        ))}\n      </div>\n    </ScrollArea>\n  )\n}\n\n// This component demonstrates how to use ScrollArea\n// for long lists of content that need to be scrollable\n// within a fixed height container.\n\nfunction AnotherExample() {\n  return (\n    <ScrollArea className="h-[200px]">\n      <div className="p-4">\n        <h2>Terms of Service</h2>\n        <p>Lorem ipsum dolor sit amet...</p>\n        {/* More content */}\n      </div>\n    </ScrollArea>\n  )\n}`}</code>\n      </pre>\n    </ScrollArea>\n}',
              ...CodeBlock.parameters?.docs?.source,
            },
          },
        }),
        (Sidebar.parameters = {
          ...Sidebar.parameters,
          docs: {
            ...Sidebar.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const navigation = [{\n      title: 'Getting Started',\n      items: ['Introduction', 'Installation', 'Project Structure', 'Configuration']\n    }, {\n      title: 'Components',\n      items: ['Button', 'Card', 'Dialog', 'Form', 'Input', 'Select', 'Table', 'Tabs']\n    }, {\n      title: 'Utilities',\n      items: ['Typography', 'Colors', 'Spacing', 'Shadows', 'Animations']\n    }, {\n      title: 'Advanced',\n      items: ['Theming', 'Dark Mode', 'Accessibility', 'Performance', 'Testing']\n    }];\n    return <div className='w-64 rounded-md border'>\n        <div className='p-4 border-b'>\n          <h3 className='font-semibold'>Documentation</h3>\n        </div>\n        <ScrollArea className='h-[400px]'>\n          <div className='p-4 space-y-6'>\n            {navigation.map((section, i) => <div key={i} className='space-y-3'>\n                <h4 className='font-medium text-sm'>{section.title}</h4>\n                <div className='space-y-1'>\n                  {section.items.map((item, j) => <button key={j} className='w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent'>\n                      {item}\n                    </button>)}\n                </div>\n              </div>)}\n          </div>\n        </ScrollArea>\n      </div>;\n  }\n}",
              ...Sidebar.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ScrollArea className='h-[400px] w-[600px] rounded-md border'>\n      <div className='p-6'>\n        <article className='prose prose-sm max-w-none'>\n          <h1>The Art of Component Design</h1>\n          <p>\n            Creating reusable components is a fundamental skill in modern web\n            development. It requires careful consideration of API design,\n            flexibility, and maintainability.\n          </p>\n\n          <h2>Key Principles</h2>\n          <p>\n            When designing components, there are several principles to keep in\n            mind:\n          </p>\n          <ul>\n            <li>\n              Single Responsibility: Each component should do one thing well\n            </li>\n            <li>Composability: Components should work well together</li>\n            <li>\n              Customizability: Allow for styling and behavior modifications\n            </li>\n            <li>Accessibility: Ensure components are usable by everyone</li>\n          </ul>\n\n          <h2>Component Architecture</h2>\n          <p>\n            A well-architected component system forms the foundation of a\n            scalable application. Consider the following aspects when building\n            your component library:\n          </p>\n\n          <h3>Props Interface</h3>\n          <p>\n            Define clear and consistent prop interfaces. Use TypeScript or\n            PropTypes to document expected prop types and provide better\n            developer experience.\n          </p>\n\n          <h3>Styling Strategy</h3>\n          <p>\n            Choose a styling approach that balances flexibility with\n            consistency. Options include CSS-in-JS, CSS Modules, or\n            utility-first CSS frameworks like Tailwind.\n          </p>\n\n          <h3>State Management</h3>\n          <p>\n            Decide whether components should manage their own state or rely on\n            external state management. Consider using controlled and\n            uncontrolled patterns where appropriate.\n          </p>\n\n          <h2>Best Practices</h2>\n          <p>\n            Follow these best practices to create maintainable and reusable\n            components:\n          </p>\n          <ol>\n            <li>Write comprehensive documentation</li>\n            <li>Include usage examples</li>\n            <li>Add unit and integration tests</li>\n            <li>Consider performance implications</li>\n            <li>Plan for internationalization</li>\n          </ol>\n\n          <h2>Conclusion</h2>\n          <p>\n            Building a robust component library is an iterative process. Start\n            small, gather feedback, and continuously improve based on real-world\n            usage.\n          </p>\n        </article>\n      </div>\n    </ScrollArea>\n}",
              ...LongContent.parameters?.docs?.source,
            },
          },
        }),
        (DataTable.parameters = {
          ...DataTable.parameters,
          docs: {
            ...DataTable.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const data = Array.from({\n      length: 100\n    }, (_, i) => ({\n      id: i + 1,\n      name: `User ${i + 1}`,\n      email: `user${i + 1}@example.com`,\n      role: ['Admin', 'Editor', 'Viewer'][i % 3],\n      status: ['Active', 'Inactive', 'Pending'][i % 3]\n    }));\n    return <div className='w-[600px] rounded-md border'>\n        <div className='border-b bg-muted/50'>\n          <table className='w-full'>\n            <thead>\n              <tr>\n                <th className='p-2 text-left text-sm font-medium'>ID</th>\n                <th className='p-2 text-left text-sm font-medium'>Name</th>\n                <th className='p-2 text-left text-sm font-medium'>Email</th>\n                <th className='p-2 text-left text-sm font-medium'>Role</th>\n                <th className='p-2 text-left text-sm font-medium'>Status</th>\n              </tr>\n            </thead>\n          </table>\n        </div>\n        <ScrollArea className='h-[300px]'>\n          <table className='w-full'>\n            <tbody>\n              {data.map(row => <tr key={row.id} className='border-b'>\n                  <td className='p-2 text-sm'>{row.id}</td>\n                  <td className='p-2 text-sm'>{row.name}</td>\n                  <td className='p-2 text-sm'>{row.email}</td>\n                  <td className='p-2 text-sm'>{row.role}</td>\n                  <td className='p-2 text-sm'>\n                    <span className={cn('inline-flex items-center rounded-full px-2 py-1 text-xs font-medium', row.status === 'Active' && 'bg-green-100 text-green-800', row.status === 'Inactive' && 'bg-gray-100 text-gray-800', row.status === 'Pending' && 'bg-yellow-100 text-yellow-800')}>\n                      {row.status}\n                    </span>\n                  </td>\n                </tr>)}\n            </tbody>\n          </table>\n        </ScrollArea>\n      </div>;\n  }\n}",
              ...DataTable.parameters?.docs?.source,
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
