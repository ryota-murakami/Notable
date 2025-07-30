/*! For license information please see 1158.ad24e889.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1158],
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
    '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_949a0df3eae86665e086aa01aee25ebf/node_modules/@radix-ui/react-presence/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { C: () => Presence })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            )
        var Presence = (props) => {
          const { present, children } = props,
            presence = (function usePresence(present) {
              const [node, setNode] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(),
                stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
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
                      ;((stylesRef.current = node2
                        ? getComputedStyle(node2)
                        : null),
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
  },
])
