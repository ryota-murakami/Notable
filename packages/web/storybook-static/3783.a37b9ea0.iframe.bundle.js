'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3783],
  {
    '../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.10_@types+react-dom@19.1.6_@types+react@19.1.8__@_a1d343a3b3ef56a897be7e3ac188901b/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          qW: () => DismissableLayer,
        })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
          ),
          react_primitive_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          react_use_callback_ref_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs'
          )
        var originalBodyPointerEvents,
          jsx_runtime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          DismissableLayerContext = react.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          DismissableLayer = react.forwardRef((props, forwardedRef) => {
            const {
                disableOutsidePointerEvents = !1,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                ...layerProps
              } = props,
              context = react.useContext(DismissableLayerContext),
              [node, setNode] = react.useState(null),
              ownerDocument = node?.ownerDocument ?? globalThis?.document,
              [, force] = react.useState({}),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node2) => setNode(node2)
              ),
              layers = Array.from(context.layers),
              [highestLayerWithOutsidePointerEventsDisabled] = [
                ...context.layersWithOutsidePointerEventsDisabled,
              ].slice(-1),
              highestLayerWithOutsidePointerEventsDisabledIndex =
                layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),
              index = node ? layers.indexOf(node) : -1,
              isBodyPointerEventsDisabled =
                context.layersWithOutsidePointerEventsDisabled.size > 0,
              isPointerEventsEnabled =
                index >= highestLayerWithOutsidePointerEventsDisabledIndex,
              pointerDownOutside = (function usePointerDownOutside(
                onPointerDownOutside,
                ownerDocument = globalThis?.document
              ) {
                const handlePointerDownOutside = (0,
                  react_use_callback_ref_dist.c)(onPointerDownOutside),
                  isPointerInsideReactTreeRef = react.useRef(!1),
                  handleClickRef = react.useRef(() => {})
                return (
                  react.useEffect(() => {
                    const handlePointerDown = (event) => {
                        if (
                          event.target &&
                          !isPointerInsideReactTreeRef.current
                        ) {
                          let handleAndDispatchPointerDownOutsideEvent2 =
                            function () {
                              handleAndDispatchCustomEvent(
                                'dismissableLayer.pointerDownOutside',
                                handlePointerDownOutside,
                                eventDetail,
                                { discrete: !0 }
                              )
                            }
                          const eventDetail = { originalEvent: event }
                          'touch' === event.pointerType
                            ? (ownerDocument.removeEventListener(
                                'click',
                                handleClickRef.current
                              ),
                              (handleClickRef.current =
                                handleAndDispatchPointerDownOutsideEvent2),
                              ownerDocument.addEventListener(
                                'click',
                                handleClickRef.current,
                                { once: !0 }
                              ))
                            : handleAndDispatchPointerDownOutsideEvent2()
                        } else
                          ownerDocument.removeEventListener(
                            'click',
                            handleClickRef.current
                          )
                        isPointerInsideReactTreeRef.current = !1
                      },
                      timerId = window.setTimeout(() => {
                        ownerDocument.addEventListener(
                          'pointerdown',
                          handlePointerDown
                        )
                      }, 0)
                    return () => {
                      ;(window.clearTimeout(timerId),
                        ownerDocument.removeEventListener(
                          'pointerdown',
                          handlePointerDown
                        ),
                        ownerDocument.removeEventListener(
                          'click',
                          handleClickRef.current
                        ))
                    }
                  }, [ownerDocument, handlePointerDownOutside]),
                  {
                    onPointerDownCapture: () =>
                      (isPointerInsideReactTreeRef.current = !0),
                  }
                )
              })((event) => {
                const target = event.target,
                  isPointerDownOnBranch = [...context.branches].some((branch) =>
                    branch.contains(target)
                  )
                isPointerEventsEnabled &&
                  !isPointerDownOnBranch &&
                  (onPointerDownOutside?.(event),
                  onInteractOutside?.(event),
                  event.defaultPrevented || onDismiss?.())
              }, ownerDocument),
              focusOutside = (function useFocusOutside(
                onFocusOutside,
                ownerDocument = globalThis?.document
              ) {
                const handleFocusOutside = (0, react_use_callback_ref_dist.c)(
                    onFocusOutside
                  ),
                  isFocusInsideReactTreeRef = react.useRef(!1)
                return (
                  react.useEffect(() => {
                    const handleFocus = (event) => {
                      if (event.target && !isFocusInsideReactTreeRef.current) {
                        handleAndDispatchCustomEvent(
                          'dismissableLayer.focusOutside',
                          handleFocusOutside,
                          { originalEvent: event },
                          { discrete: !1 }
                        )
                      }
                    }
                    return (
                      ownerDocument.addEventListener('focusin', handleFocus),
                      () =>
                        ownerDocument.removeEventListener(
                          'focusin',
                          handleFocus
                        )
                    )
                  }, [ownerDocument, handleFocusOutside]),
                  {
                    onFocusCapture: () =>
                      (isFocusInsideReactTreeRef.current = !0),
                    onBlurCapture: () =>
                      (isFocusInsideReactTreeRef.current = !1),
                  }
                )
              })((event) => {
                const target = event.target
                ;[...context.branches].some((branch) =>
                  branch.contains(target)
                ) ||
                  (onFocusOutside?.(event),
                  onInteractOutside?.(event),
                  event.defaultPrevented || onDismiss?.())
              }, ownerDocument)
            return (
              (function useEscapeKeydown(
                onEscapeKeyDownProp,
                ownerDocument = globalThis?.document
              ) {
                const onEscapeKeyDown = (0, react_use_callback_ref_dist.c)(
                  onEscapeKeyDownProp
                )
                react.useEffect(() => {
                  const handleKeyDown = (event) => {
                    'Escape' === event.key && onEscapeKeyDown(event)
                  }
                  return (
                    ownerDocument.addEventListener('keydown', handleKeyDown, {
                      capture: !0,
                    }),
                    () =>
                      ownerDocument.removeEventListener(
                        'keydown',
                        handleKeyDown,
                        { capture: !0 }
                      )
                  )
                }, [onEscapeKeyDown, ownerDocument])
              })((event) => {
                index === context.layers.size - 1 &&
                  (onEscapeKeyDown?.(event),
                  !event.defaultPrevented &&
                    onDismiss &&
                    (event.preventDefault(), onDismiss()))
              }, ownerDocument),
              react.useEffect(() => {
                if (node)
                  return (
                    disableOutsidePointerEvents &&
                      (0 ===
                        context.layersWithOutsidePointerEventsDisabled.size &&
                        ((originalBodyPointerEvents =
                          ownerDocument.body.style.pointerEvents),
                        (ownerDocument.body.style.pointerEvents = 'none')),
                      context.layersWithOutsidePointerEventsDisabled.add(node)),
                    context.layers.add(node),
                    dispatchUpdate(),
                    () => {
                      disableOutsidePointerEvents &&
                        1 ===
                          context.layersWithOutsidePointerEventsDisabled.size &&
                        (ownerDocument.body.style.pointerEvents =
                          originalBodyPointerEvents)
                    }
                  )
              }, [node, ownerDocument, disableOutsidePointerEvents, context]),
              react.useEffect(
                () => () => {
                  node &&
                    (context.layers.delete(node),
                    context.layersWithOutsidePointerEventsDisabled.delete(node),
                    dispatchUpdate())
                },
                [node, context]
              ),
              react.useEffect(() => {
                const handleUpdate = () => force({})
                return (
                  document.addEventListener(
                    'dismissableLayer.update',
                    handleUpdate
                  ),
                  () =>
                    document.removeEventListener(
                      'dismissableLayer.update',
                      handleUpdate
                    )
                )
              }, []),
              (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
                ...layerProps,
                ref: composedRefs,
                style: {
                  pointerEvents: isBodyPointerEventsDisabled
                    ? isPointerEventsEnabled
                      ? 'auto'
                      : 'none'
                    : void 0,
                  ...props.style,
                },
                onFocusCapture: (0, dist.m)(
                  props.onFocusCapture,
                  focusOutside.onFocusCapture
                ),
                onBlurCapture: (0, dist.m)(
                  props.onBlurCapture,
                  focusOutside.onBlurCapture
                ),
                onPointerDownCapture: (0, dist.m)(
                  props.onPointerDownCapture,
                  pointerDownOutside.onPointerDownCapture
                ),
              })
            )
          })
        DismissableLayer.displayName = 'DismissableLayer'
        var DismissableLayerBranch = react.forwardRef((props, forwardedRef) => {
          const context = react.useContext(DismissableLayerContext),
            ref = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref)
          return (
            react.useEffect(() => {
              const node = ref.current
              if (node)
                return (
                  context.branches.add(node),
                  () => {
                    context.branches.delete(node)
                  }
                )
            }, [context.branches]),
            (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
              ...props,
              ref: composedRefs,
            })
          )
        })
        function dispatchUpdate() {
          const event = new CustomEvent('dismissableLayer.update')
          document.dispatchEvent(event)
        }
        function handleAndDispatchCustomEvent(
          name,
          handler,
          detail,
          { discrete }
        ) {
          const target = detail.originalEvent.target,
            event = new CustomEvent(name, {
              bubbles: !1,
              cancelable: !0,
              detail,
            })
          ;(handler && target.addEventListener(name, handler, { once: !0 }),
            discrete
              ? (0, react_primitive_dist.hO)(target, event)
              : target.dispatchEvent(event))
        }
        DismissableLayerBranch.displayName = 'DismissableLayerBranch'
      },
    '../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Oh: () => useFocusGuards })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          count = 0
        function useFocusGuards() {
          react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
            const edgeGuards = document.querySelectorAll(
              '[data-radix-focus-guard]'
            )
            return (
              document.body.insertAdjacentElement(
                'afterbegin',
                edgeGuards[0] ?? createFocusGuard()
              ),
              document.body.insertAdjacentElement(
                'beforeend',
                edgeGuards[1] ?? createFocusGuard()
              ),
              count++,
              () => {
                ;(1 === count &&
                  document
                    .querySelectorAll('[data-radix-focus-guard]')
                    .forEach((node) => node.remove()),
                  count--)
              }
            )
          }, [])
        }
        function createFocusGuard() {
          const element = document.createElement('span')
          return (
            element.setAttribute('data-radix-focus-guard', ''),
            (element.tabIndex = 0),
            (element.style.outline = 'none'),
            (element.style.opacity = '0'),
            (element.style.position = 'fixed'),
            (element.style.pointerEvents = 'none'),
            element
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+r_0bdc87f04c4d759e2025cd48d0340f12/node_modules/@radix-ui/react-focus-scope/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { n: () => FocusScope })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          EVENT_OPTIONS = { bubbles: !1, cancelable: !0 },
          FocusScope = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  loop = !1,
                  trapped = !1,
                  onMountAutoFocus: onMountAutoFocusProp,
                  onUnmountAutoFocus: onUnmountAutoFocusProp,
                  ...scopeProps
                } = props,
                [container, setContainer] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                onMountAutoFocus = (0,
                _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__.c)(
                  onMountAutoFocusProp
                ),
                onUnmountAutoFocus = (0,
                _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__.c)(
                  onUnmountAutoFocusProp
                ),
                lastFocusedElementRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                  forwardedRef,
                  (node) => setContainer(node)
                ),
                focusScope = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
                  paused: !1,
                  pause() {
                    this.paused = !0
                  },
                  resume() {
                    this.paused = !1
                  },
                }).current
              ;(react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                if (trapped) {
                  let handleFocusIn2 = function (event) {
                      if (focusScope.paused || !container) return
                      const target = event.target
                      container.contains(target)
                        ? (lastFocusedElementRef.current = target)
                        : focus(lastFocusedElementRef.current, { select: !0 })
                    },
                    handleFocusOut2 = function (event) {
                      if (focusScope.paused || !container) return
                      const relatedTarget = event.relatedTarget
                      null !== relatedTarget &&
                        (container.contains(relatedTarget) ||
                          focus(lastFocusedElementRef.current, { select: !0 }))
                    },
                    handleMutations2 = function (mutations) {
                      if (document.activeElement === document.body)
                        for (const mutation of mutations)
                          mutation.removedNodes.length > 0 && focus(container)
                    }
                  ;(document.addEventListener('focusin', handleFocusIn2),
                    document.addEventListener('focusout', handleFocusOut2))
                  const mutationObserver = new MutationObserver(
                    handleMutations2
                  )
                  return (
                    container &&
                      mutationObserver.observe(container, {
                        childList: !0,
                        subtree: !0,
                      }),
                    () => {
                      ;(document.removeEventListener('focusin', handleFocusIn2),
                        document.removeEventListener(
                          'focusout',
                          handleFocusOut2
                        ),
                        mutationObserver.disconnect())
                    }
                  )
                }
              }, [trapped, container, focusScope.paused]),
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  if (container) {
                    focusScopesStack.add(focusScope)
                    const previouslyFocusedElement = document.activeElement
                    if (!container.contains(previouslyFocusedElement)) {
                      const mountEvent = new CustomEvent(
                        'focusScope.autoFocusOnMount',
                        EVENT_OPTIONS
                      )
                      ;(container.addEventListener(
                        'focusScope.autoFocusOnMount',
                        onMountAutoFocus
                      ),
                        container.dispatchEvent(mountEvent),
                        mountEvent.defaultPrevented ||
                          (!(function focusFirst(
                            candidates,
                            { select = !1 } = {}
                          ) {
                            const previouslyFocusedElement =
                              document.activeElement
                            for (const candidate of candidates)
                              if (
                                (focus(candidate, { select }),
                                document.activeElement !==
                                  previouslyFocusedElement)
                              )
                                return
                          })(
                            (function removeLinks(items) {
                              return items.filter(
                                (item) => 'A' !== item.tagName
                              )
                            })(getTabbableCandidates(container)),
                            { select: !0 }
                          ),
                          document.activeElement === previouslyFocusedElement &&
                            focus(container)))
                    }
                    return () => {
                      ;(container.removeEventListener(
                        'focusScope.autoFocusOnMount',
                        onMountAutoFocus
                      ),
                        setTimeout(() => {
                          const unmountEvent = new CustomEvent(
                            'focusScope.autoFocusOnUnmount',
                            EVENT_OPTIONS
                          )
                          ;(container.addEventListener(
                            'focusScope.autoFocusOnUnmount',
                            onUnmountAutoFocus
                          ),
                            container.dispatchEvent(unmountEvent),
                            unmountEvent.defaultPrevented ||
                              focus(previouslyFocusedElement ?? document.body, {
                                select: !0,
                              }),
                            container.removeEventListener(
                              'focusScope.autoFocusOnUnmount',
                              onUnmountAutoFocus
                            ),
                            focusScopesStack.remove(focusScope))
                        }, 0))
                    }
                  }
                }, [
                  container,
                  onMountAutoFocus,
                  onUnmountAutoFocus,
                  focusScope,
                ]))
              const handleKeyDown =
                react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                  (event) => {
                    if (!loop && !trapped) return
                    if (focusScope.paused) return
                    const isTabKey =
                        'Tab' === event.key &&
                        !event.altKey &&
                        !event.ctrlKey &&
                        !event.metaKey,
                      focusedElement = document.activeElement
                    if (isTabKey && focusedElement) {
                      const container2 = event.currentTarget,
                        [first, last] = (function getTabbableEdges(container) {
                          const candidates = getTabbableCandidates(container),
                            first = findVisible(candidates, container),
                            last = findVisible(candidates.reverse(), container)
                          return [first, last]
                        })(container2)
                      first && last
                        ? event.shiftKey || focusedElement !== last
                          ? event.shiftKey &&
                            focusedElement === first &&
                            (event.preventDefault(),
                            loop && focus(last, { select: !0 }))
                          : (event.preventDefault(),
                            loop && focus(first, { select: !0 }))
                        : focusedElement === container2 &&
                          event.preventDefault()
                    }
                  },
                  [loop, trapped, focusScope.paused]
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.div,
                {
                  tabIndex: -1,
                  ...scopeProps,
                  ref: composedRefs,
                  onKeyDown: handleKeyDown,
                }
              )
            }
          )
        function getTabbableCandidates(container) {
          const nodes = [],
            walker = document.createTreeWalker(
              container,
              NodeFilter.SHOW_ELEMENT,
              {
                acceptNode: (node) => {
                  const isHiddenInput =
                    'INPUT' === node.tagName && 'hidden' === node.type
                  return node.disabled || node.hidden || isHiddenInput
                    ? NodeFilter.FILTER_SKIP
                    : node.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP
                },
              }
            )
          for (; walker.nextNode(); ) nodes.push(walker.currentNode)
          return nodes
        }
        function findVisible(elements, container) {
          for (const element of elements)
            if (!isHidden(element, { upTo: container })) return element
        }
        function isHidden(node, { upTo }) {
          if ('hidden' === getComputedStyle(node).visibility) return !0
          for (; node; ) {
            if (void 0 !== upTo && node === upTo) return !1
            if ('none' === getComputedStyle(node).display) return !0
            node = node.parentElement
          }
          return !1
        }
        function focus(element, { select = !1 } = {}) {
          if (element && element.focus) {
            const previouslyFocusedElement = document.activeElement
            ;(element.focus({ preventScroll: !0 }),
              element !== previouslyFocusedElement &&
                (function isSelectableInput(element) {
                  return (
                    element instanceof HTMLInputElement && 'select' in element
                  )
                })(element) &&
                select &&
                element.select())
          }
        }
        FocusScope.displayName = 'FocusScope'
        var focusScopesStack = (function createFocusScopesStack() {
          let stack = []
          return {
            add(focusScope) {
              const activeFocusScope = stack[0]
              ;(focusScope !== activeFocusScope && activeFocusScope?.pause(),
                (stack = arrayRemove(stack, focusScope)),
                stack.unshift(focusScope))
            },
            remove(focusScope) {
              ;((stack = arrayRemove(stack, focusScope)), stack[0]?.resume())
            },
          }
        })()
        function arrayRemove(array, item) {
          const updatedArray = [...array],
            index = updatedArray.indexOf(item)
          return (-1 !== index && updatedArray.splice(index, 1), updatedArray)
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
        __webpack_require__.d(__webpack_exports__, { B: () => useId })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            ),
          useReactId =
            (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
              (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
                __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[
              ' useId '.trim().toString()
            ] || (() => {}),
          count = 0
        function useId(deterministicId) {
          const [id, setId] =
            react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId())
          return (
            (0,
            _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)(() => {
              deterministicId || setId((reactId) => reactId ?? String(count++))
            }, [deterministicId]),
            deterministicId || (id ? `radix-${id}` : '')
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_daa6284eb61b5d92679ce5e11f38cd01/node_modules/@radix-ui/react-portal/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => Portal })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
          ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Portal = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { container: containerProp, ...portalProps } = props,
                [mounted, setMounted] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(!1)
              ;(0,
              _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)(
                () => setMounted(!0),
                []
              )
              const container =
                containerProp || (mounted && globalThis?.document?.body)
              return container
                ? react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG
                        .div,
                      { ...portalProps, ref: forwardedRef }
                    ),
                    container
                  )
                : null
            }
          )
        Portal.displayName = 'Portal'
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs':
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
  },
])
