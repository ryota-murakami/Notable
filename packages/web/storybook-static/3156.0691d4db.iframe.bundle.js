/*! For license information please see 3156.0691d4db.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3156],
  {
    '../../node_modules/.pnpm/@radix-ui+react-context-menu@2.2.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+_959fb3f77a808f6f5c7ab1af8805d379/node_modules/@radix-ui/react-context-menu/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          H_: () => CheckboxItem2,
          UC: () => dist_Content2,
          YJ: () => Group2,
          q7: () => dist_Item2,
          VF: () => ItemIndicator2,
          JU: () => Label2,
          ZL: () => Portal2,
          z6: () => RadioGroup2,
          hN: () => RadioItem2,
          bL: () => dist_Root2,
          wv: () => Separator2,
          Pb: () => Sub2,
          G5: () => SubContent2,
          ZP: () => SubTrigger2,
          l9: () => Trigger,
        })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs'
          ),
          react_context_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
          ),
          react_primitive_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_997b35f2e2aa9d3174fc03a0f79e437b/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          react_collection_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-collection@1.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+re_5a9538d81cc9a82cfec21341eafe5f60/node_modules/@radix-ui/react-collection/dist/index.mjs'
          ),
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          react_direction_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs'
          ),
          react_use_callback_ref_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs'
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
        var count = 0
        function useFocusGuards() {
          react.useEffect(() => {
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
        var EVENT_OPTIONS = { bubbles: !1, cancelable: !0 },
          FocusScope = react.forwardRef((props, forwardedRef) => {
            const {
                loop = !1,
                trapped = !1,
                onMountAutoFocus: onMountAutoFocusProp,
                onUnmountAutoFocus: onUnmountAutoFocusProp,
                ...scopeProps
              } = props,
              [container, setContainer] = react.useState(null),
              onMountAutoFocus = (0, react_use_callback_ref_dist.c)(
                onMountAutoFocusProp
              ),
              onUnmountAutoFocus = (0, react_use_callback_ref_dist.c)(
                onUnmountAutoFocusProp
              ),
              lastFocusedElementRef = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node) => setContainer(node)
              ),
              focusScope = react.useRef({
                paused: !1,
                pause() {
                  this.paused = !0
                },
                resume() {
                  this.paused = !1
                },
              }).current
            ;(react.useEffect(() => {
              if (trapped) {
                let handleFocusIn2 = function (event) {
                    if (focusScope.paused || !container) return
                    const target = event.target
                    container.contains(target)
                      ? (lastFocusedElementRef.current = target)
                      : dist_focus(lastFocusedElementRef.current, {
                          select: !0,
                        })
                  },
                  handleFocusOut2 = function (event) {
                    if (focusScope.paused || !container) return
                    const relatedTarget = event.relatedTarget
                    null !== relatedTarget &&
                      (container.contains(relatedTarget) ||
                        dist_focus(lastFocusedElementRef.current, {
                          select: !0,
                        }))
                  },
                  handleMutations2 = function (mutations) {
                    if (document.activeElement === document.body)
                      for (const mutation of mutations)
                        mutation.removedNodes.length > 0 &&
                          dist_focus(container)
                  }
                ;(document.addEventListener('focusin', handleFocusIn2),
                  document.addEventListener('focusout', handleFocusOut2))
                const mutationObserver = new MutationObserver(handleMutations2)
                return (
                  container &&
                    mutationObserver.observe(container, {
                      childList: !0,
                      subtree: !0,
                    }),
                  () => {
                    ;(document.removeEventListener('focusin', handleFocusIn2),
                      document.removeEventListener('focusout', handleFocusOut2),
                      mutationObserver.disconnect())
                  }
                )
              }
            }, [trapped, container, focusScope.paused]),
              react.useEffect(() => {
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
                              (dist_focus(candidate, { select }),
                              document.activeElement !==
                                previouslyFocusedElement)
                            )
                              return
                        })(
                          (function removeLinks(items) {
                            return items.filter((item) => 'A' !== item.tagName)
                          })(getTabbableCandidates(container)),
                          { select: !0 }
                        ),
                        document.activeElement === previouslyFocusedElement &&
                          dist_focus(container)))
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
                            dist_focus(
                              previouslyFocusedElement ?? document.body,
                              { select: !0 }
                            ),
                          container.removeEventListener(
                            'focusScope.autoFocusOnUnmount',
                            onUnmountAutoFocus
                          ),
                          focusScopesStack.remove(focusScope))
                      }, 0))
                  }
                }
              }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]))
            const handleKeyDown = react.useCallback(
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
                        loop && dist_focus(last, { select: !0 }))
                      : (event.preventDefault(),
                        loop && dist_focus(first, { select: !0 }))
                    : focusedElement === container2 && event.preventDefault()
                }
              },
              [loop, trapped, focusScope.paused]
            )
            return (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
              tabIndex: -1,
              ...scopeProps,
              ref: composedRefs,
              onKeyDown: handleKeyDown,
            })
          })
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
        function dist_focus(element, { select = !1 } = {}) {
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
        var react_id_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
          ),
          floating_ui_react_dom = __webpack_require__(
            '../../node_modules/.pnpm/@floating-ui+react-dom@2.1.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs'
          ),
          floating_ui_dom = __webpack_require__(
            '../../node_modules/.pnpm/@floating-ui+dom@1.7.2/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs'
          ),
          Arrow = react.forwardRef((props, forwardedRef) => {
            const { children, width = 10, height = 5, ...arrowProps } = props
            return (0, jsx_runtime.jsx)(react_primitive_dist.sG.svg, {
              ...arrowProps,
              ref: forwardedRef,
              width,
              height,
              viewBox: '0 0 30 10',
              preserveAspectRatio: 'none',
              children: props.asChild
                ? children
                : (0, jsx_runtime.jsx)('polygon', { points: '0,0 30,0 15,10' }),
            })
          })
        Arrow.displayName = 'Arrow'
        var react_arrow_dist_Root = Arrow,
          react_use_layout_effect_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
          )
        var [createPopperContext, createPopperScope] = (0,
          react_context_dist.A)('Popper'),
          [PopperProvider, usePopperContext] = createPopperContext('Popper'),
          Popper = (props) => {
            const { __scopePopper, children } = props,
              [anchor, setAnchor] = react.useState(null)
            return (0, jsx_runtime.jsx)(PopperProvider, {
              scope: __scopePopper,
              anchor,
              onAnchorChange: setAnchor,
              children,
            })
          }
        Popper.displayName = 'Popper'
        var PopperAnchor = react.forwardRef((props, forwardedRef) => {
          const { __scopePopper, virtualRef, ...anchorProps } = props,
            context = usePopperContext('PopperAnchor', __scopePopper),
            ref = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref)
          return (
            react.useEffect(() => {
              context.onAnchorChange(virtualRef?.current || ref.current)
            }),
            virtualRef
              ? null
              : (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
                  ...anchorProps,
                  ref: composedRefs,
                })
          )
        })
        PopperAnchor.displayName = 'PopperAnchor'
        var [PopperContentProvider, useContentContext] =
            createPopperContext('PopperContent'),
          PopperContent = react.forwardRef((props, forwardedRef) => {
            const {
                __scopePopper,
                side = 'bottom',
                sideOffset = 0,
                align = 'center',
                alignOffset = 0,
                arrowPadding = 0,
                avoidCollisions = !0,
                collisionBoundary = [],
                collisionPadding: collisionPaddingProp = 0,
                sticky = 'partial',
                hideWhenDetached = !1,
                updatePositionStrategy = 'optimized',
                onPlaced,
                ...contentProps
              } = props,
              context = usePopperContext('PopperContent', __scopePopper),
              [content, setContent] = react.useState(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node) => setContent(node)
              ),
              [arrow, setArrow] = react.useState(null),
              arrowSize = (function useSize(element) {
                const [size, setSize] = react.useState(void 0)
                return (
                  (0, react_use_layout_effect_dist.N)(() => {
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
              })(arrow),
              arrowWidth = arrowSize?.width ?? 0,
              arrowHeight = arrowSize?.height ?? 0,
              desiredPlacement = side + ('center' !== align ? '-' + align : ''),
              collisionPadding =
                'number' == typeof collisionPaddingProp
                  ? collisionPaddingProp
                  : {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      ...collisionPaddingProp,
                    },
              boundary = Array.isArray(collisionBoundary)
                ? collisionBoundary
                : [collisionBoundary],
              hasExplicitBoundaries = boundary.length > 0,
              detectOverflowOptions = {
                padding: collisionPadding,
                boundary: boundary.filter(isNotNull),
                altBoundary: hasExplicitBoundaries,
              },
              {
                refs,
                floatingStyles,
                placement,
                isPositioned,
                middlewareData,
              } = (0, floating_ui_react_dom.we)({
                strategy: 'fixed',
                placement: desiredPlacement,
                whileElementsMounted: (...args) =>
                  (0, floating_ui_dom.ll)(...args, {
                    animationFrame: 'always' === updatePositionStrategy,
                  }),
                elements: { reference: context.anchor },
                middleware: [
                  (0, floating_ui_react_dom.cY)({
                    mainAxis: sideOffset + arrowHeight,
                    alignmentAxis: alignOffset,
                  }),
                  avoidCollisions &&
                    (0, floating_ui_react_dom.BN)({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter:
                        'partial' === sticky
                          ? (0, floating_ui_react_dom.ER)()
                          : void 0,
                      ...detectOverflowOptions,
                    }),
                  avoidCollisions &&
                    (0, floating_ui_react_dom.UU)({ ...detectOverflowOptions }),
                  (0, floating_ui_react_dom.Ej)({
                    ...detectOverflowOptions,
                    apply: ({
                      elements,
                      rects,
                      availableWidth,
                      availableHeight,
                    }) => {
                      const { width: anchorWidth, height: anchorHeight } =
                          rects.reference,
                        contentStyle = elements.floating.style
                      ;(contentStyle.setProperty(
                        '--radix-popper-available-width',
                        `${availableWidth}px`
                      ),
                        contentStyle.setProperty(
                          '--radix-popper-available-height',
                          `${availableHeight}px`
                        ),
                        contentStyle.setProperty(
                          '--radix-popper-anchor-width',
                          `${anchorWidth}px`
                        ),
                        contentStyle.setProperty(
                          '--radix-popper-anchor-height',
                          `${anchorHeight}px`
                        ))
                    },
                  }),
                  arrow &&
                    (0, floating_ui_react_dom.UE)({
                      element: arrow,
                      padding: arrowPadding,
                    }),
                  transformOrigin({ arrowWidth, arrowHeight }),
                  hideWhenDetached &&
                    (0, floating_ui_react_dom.jD)({
                      strategy: 'referenceHidden',
                      ...detectOverflowOptions,
                    }),
                ],
              }),
              [placedSide, placedAlign] =
                getSideAndAlignFromPlacement(placement),
              handlePlaced = (0, react_use_callback_ref_dist.c)(onPlaced)
            ;(0, react_use_layout_effect_dist.N)(() => {
              isPositioned && handlePlaced?.()
            }, [isPositioned, handlePlaced])
            const arrowX = middlewareData.arrow?.x,
              arrowY = middlewareData.arrow?.y,
              cannotCenterArrow = 0 !== middlewareData.arrow?.centerOffset,
              [contentZIndex, setContentZIndex] = react.useState()
            return (
              (0, react_use_layout_effect_dist.N)(() => {
                content &&
                  setContentZIndex(window.getComputedStyle(content).zIndex)
              }, [content]),
              (0, jsx_runtime.jsx)('div', {
                ref: refs.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...floatingStyles,
                  transform: isPositioned
                    ? floatingStyles.transform
                    : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: contentZIndex,
                  '--radix-popper-transform-origin': [
                    middlewareData.transformOrigin?.x,
                    middlewareData.transformOrigin?.y,
                  ].join(' '),
                  ...(middlewareData.hide?.referenceHidden && {
                    visibility: 'hidden',
                    pointerEvents: 'none',
                  }),
                },
                dir: props.dir,
                children: (0, jsx_runtime.jsx)(PopperContentProvider, {
                  scope: __scopePopper,
                  placedSide,
                  onArrowChange: setArrow,
                  arrowX,
                  arrowY,
                  shouldHideArrow: cannotCenterArrow,
                  children: (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
                    'data-side': placedSide,
                    'data-align': placedAlign,
                    ...contentProps,
                    ref: composedRefs,
                    style: {
                      ...contentProps.style,
                      animation: isPositioned ? void 0 : 'none',
                    },
                  }),
                }),
              })
            )
          })
        PopperContent.displayName = 'PopperContent'
        var OPPOSITE_SIDE = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          },
          PopperArrow = react.forwardRef(
            function PopperArrow2(props, forwardedRef) {
              const { __scopePopper, ...arrowProps } = props,
                contentContext = useContentContext(
                  'PopperArrow',
                  __scopePopper
                ),
                baseSide = OPPOSITE_SIDE[contentContext.placedSide]
              return (0, jsx_runtime.jsx)('span', {
                ref: contentContext.onArrowChange,
                style: {
                  position: 'absolute',
                  left: contentContext.arrowX,
                  top: contentContext.arrowY,
                  [baseSide]: 0,
                  transformOrigin: {
                    top: '',
                    right: '0 0',
                    bottom: 'center 0',
                    left: '100% 0',
                  }[contentContext.placedSide],
                  transform: {
                    top: 'translateY(100%)',
                    right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                    bottom: 'rotate(180deg)',
                    left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                  }[contentContext.placedSide],
                  visibility: contentContext.shouldHideArrow
                    ? 'hidden'
                    : void 0,
                },
                children: (0, jsx_runtime.jsx)(react_arrow_dist_Root, {
                  ...arrowProps,
                  ref: forwardedRef,
                  style: { ...arrowProps.style, display: 'block' },
                }),
              })
            }
          )
        function isNotNull(value) {
          return null !== value
        }
        PopperArrow.displayName = 'PopperArrow'
        var transformOrigin = (options) => ({
          name: 'transformOrigin',
          options,
          fn(data) {
            const { placement, rects, middlewareData } = data,
              isArrowHidden = 0 !== middlewareData.arrow?.centerOffset,
              arrowWidth = isArrowHidden ? 0 : options.arrowWidth,
              arrowHeight = isArrowHidden ? 0 : options.arrowHeight,
              [placedSide, placedAlign] =
                getSideAndAlignFromPlacement(placement),
              noArrowAlign = { start: '0%', center: '50%', end: '100%' }[
                placedAlign
              ],
              arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2,
              arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2
            let x = '',
              y = ''
            return (
              'bottom' === placedSide
                ? ((x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`),
                  (y = -arrowHeight + 'px'))
                : 'top' === placedSide
                  ? ((x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`),
                    (y = `${rects.floating.height + arrowHeight}px`))
                  : 'right' === placedSide
                    ? ((x = -arrowHeight + 'px'),
                      (y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`))
                    : 'left' === placedSide &&
                      ((x = `${rects.floating.width + arrowHeight}px`),
                      (y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`)),
              { data: { x, y } }
            )
          },
        })
        function getSideAndAlignFromPlacement(placement) {
          const [side, align = 'center'] = placement.split('-')
          return [side, align]
        }
        var Root2 = Popper,
          Anchor = PopperAnchor,
          Content = PopperContent,
          dist_Arrow = PopperArrow,
          react_dom = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
          ),
          Portal = react.forwardRef((props, forwardedRef) => {
            const { container: containerProp, ...portalProps } = props,
              [mounted, setMounted] = react.useState(!1)
            ;(0, react_use_layout_effect_dist.N)(() => setMounted(!0), [])
            const container =
              containerProp || (mounted && globalThis?.document?.body)
            return container
              ? react_dom.createPortal(
                  (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
                    ...portalProps,
                    ref: forwardedRef,
                  }),
                  container
                )
              : null
          })
        Portal.displayName = 'Portal'
        var react_presence_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_d340d9d39508cb250c25fc66451df4dd/node_modules/@radix-ui/react-presence/dist/index.mjs'
          ),
          react_roving_focus_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+_5bba7bb9eb588b71fd9245f49300584b/node_modules/@radix-ui/react-roving-focus/dist/index.mjs'
          ),
          react_slot_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
          ),
          es2015 = __webpack_require__(
            '../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js'
          ),
          Combination = __webpack_require__(
            '../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.8_react@19.1.0/node_modules/react-remove-scroll/dist/es2015/Combination.js'
          ),
          SELECTION_KEYS = ['Enter', ' '],
          LAST_KEYS = ['ArrowUp', 'PageDown', 'End'],
          FIRST_LAST_KEYS = ['ArrowDown', 'PageUp', 'Home', ...LAST_KEYS],
          SUB_OPEN_KEYS = {
            ltr: [...SELECTION_KEYS, 'ArrowRight'],
            rtl: [...SELECTION_KEYS, 'ArrowLeft'],
          },
          SUB_CLOSE_KEYS = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
          [Collection, useCollection, createCollectionScope] = (0,
          react_collection_dist.N)('Menu'),
          [createMenuContext, createMenuScope] = (0, react_context_dist.A)(
            'Menu',
            [
              createCollectionScope,
              createPopperScope,
              react_roving_focus_dist.RG,
            ]
          ),
          usePopperScope = createPopperScope(),
          useRovingFocusGroupScope = (0, react_roving_focus_dist.RG)(),
          [MenuProvider, useMenuContext] = createMenuContext('Menu'),
          [MenuRootProvider, useMenuRootContext] = createMenuContext('Menu'),
          Menu = (props) => {
            const {
                __scopeMenu,
                open = !1,
                children,
                dir,
                onOpenChange,
                modal = !0,
              } = props,
              popperScope = usePopperScope(__scopeMenu),
              [content, setContent] = react.useState(null),
              isUsingKeyboardRef = react.useRef(!1),
              handleOpenChange = (0, react_use_callback_ref_dist.c)(
                onOpenChange
              ),
              direction = (0, react_direction_dist.jH)(dir)
            return (
              react.useEffect(() => {
                const handleKeyDown = () => {
                    ;((isUsingKeyboardRef.current = !0),
                      document.addEventListener('pointerdown', handlePointer, {
                        capture: !0,
                        once: !0,
                      }),
                      document.addEventListener('pointermove', handlePointer, {
                        capture: !0,
                        once: !0,
                      }))
                  },
                  handlePointer = () => (isUsingKeyboardRef.current = !1)
                return (
                  document.addEventListener('keydown', handleKeyDown, {
                    capture: !0,
                  }),
                  () => {
                    ;(document.removeEventListener('keydown', handleKeyDown, {
                      capture: !0,
                    }),
                      document.removeEventListener(
                        'pointerdown',
                        handlePointer,
                        { capture: !0 }
                      ),
                      document.removeEventListener(
                        'pointermove',
                        handlePointer,
                        { capture: !0 }
                      ))
                  }
                )
              }, []),
              (0, jsx_runtime.jsx)(Root2, {
                ...popperScope,
                children: (0, jsx_runtime.jsx)(MenuProvider, {
                  scope: __scopeMenu,
                  open,
                  onOpenChange: handleOpenChange,
                  content,
                  onContentChange: setContent,
                  children: (0, jsx_runtime.jsx)(MenuRootProvider, {
                    scope: __scopeMenu,
                    onClose: react.useCallback(
                      () => handleOpenChange(!1),
                      [handleOpenChange]
                    ),
                    isUsingKeyboardRef,
                    dir: direction,
                    modal,
                    children,
                  }),
                }),
              })
            )
          }
        Menu.displayName = 'Menu'
        var MenuAnchor = react.forwardRef((props, forwardedRef) => {
          const { __scopeMenu, ...anchorProps } = props,
            popperScope = usePopperScope(__scopeMenu)
          return (0, jsx_runtime.jsx)(Anchor, {
            ...popperScope,
            ...anchorProps,
            ref: forwardedRef,
          })
        })
        MenuAnchor.displayName = 'MenuAnchor'
        var [PortalProvider, usePortalContext] = createMenuContext(
            'MenuPortal',
            { forceMount: void 0 }
          ),
          MenuPortal = (props) => {
            const { __scopeMenu, forceMount, children, container } = props,
              context = useMenuContext('MenuPortal', __scopeMenu)
            return (0, jsx_runtime.jsx)(PortalProvider, {
              scope: __scopeMenu,
              forceMount,
              children: (0, jsx_runtime.jsx)(react_presence_dist.C, {
                present: forceMount || context.open,
                children: (0, jsx_runtime.jsx)(Portal, {
                  asChild: !0,
                  container,
                  children,
                }),
              }),
            })
          }
        MenuPortal.displayName = 'MenuPortal'
        var [MenuContentProvider, useMenuContentContext] =
            createMenuContext('MenuContent'),
          MenuContent = react.forwardRef((props, forwardedRef) => {
            const portalContext = usePortalContext(
                'MenuContent',
                props.__scopeMenu
              ),
              { forceMount = portalContext.forceMount, ...contentProps } =
                props,
              context = useMenuContext('MenuContent', props.__scopeMenu),
              rootContext = useMenuRootContext('MenuContent', props.__scopeMenu)
            return (0, jsx_runtime.jsx)(Collection.Provider, {
              scope: props.__scopeMenu,
              children: (0, jsx_runtime.jsx)(react_presence_dist.C, {
                present: forceMount || context.open,
                children: (0, jsx_runtime.jsx)(Collection.Slot, {
                  scope: props.__scopeMenu,
                  children: rootContext.modal
                    ? (0, jsx_runtime.jsx)(MenuRootContentModal, {
                        ...contentProps,
                        ref: forwardedRef,
                      })
                    : (0, jsx_runtime.jsx)(MenuRootContentNonModal, {
                        ...contentProps,
                        ref: forwardedRef,
                      }),
                }),
              }),
            })
          }),
          MenuRootContentModal = react.forwardRef((props, forwardedRef) => {
            const context = useMenuContext('MenuContent', props.__scopeMenu),
              ref = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref)
            return (
              react.useEffect(() => {
                const content = ref.current
                if (content) return (0, es2015.Eq)(content)
              }, []),
              (0, jsx_runtime.jsx)(MenuContentImpl, {
                ...props,
                ref: composedRefs,
                trapFocus: context.open,
                disableOutsidePointerEvents: context.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, dist.m)(
                  props.onFocusOutside,
                  (event) => event.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
                onDismiss: () => context.onOpenChange(!1),
              })
            )
          }),
          MenuRootContentNonModal = react.forwardRef((props, forwardedRef) => {
            const context = useMenuContext('MenuContent', props.__scopeMenu)
            return (0, jsx_runtime.jsx)(MenuContentImpl, {
              ...props,
              ref: forwardedRef,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => context.onOpenChange(!1),
            })
          }),
          MenuContentImpl = react.forwardRef((props, forwardedRef) => {
            const {
                __scopeMenu,
                loop = !1,
                trapFocus,
                onOpenAutoFocus,
                onCloseAutoFocus,
                disableOutsidePointerEvents,
                onEntryFocus,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                disableOutsideScroll,
                ...contentProps
              } = props,
              context = useMenuContext('MenuContent', __scopeMenu),
              rootContext = useMenuRootContext('MenuContent', __scopeMenu),
              popperScope = usePopperScope(__scopeMenu),
              rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu),
              getItems = useCollection(__scopeMenu),
              [currentItemId, setCurrentItemId] = react.useState(null),
              contentRef = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                contentRef,
                context.onContentChange
              ),
              timerRef = react.useRef(0),
              searchRef = react.useRef(''),
              pointerGraceTimerRef = react.useRef(0),
              pointerGraceIntentRef = react.useRef(null),
              pointerDirRef = react.useRef('right'),
              lastPointerXRef = react.useRef(0),
              ScrollLockWrapper = disableOutsideScroll
                ? Combination.A
                : react.Fragment,
              scrollLockWrapperProps = disableOutsideScroll
                ? { as: react_slot_dist.DX, allowPinchZoom: !0 }
                : void 0,
              handleTypeaheadSearch = (key) => {
                const search = searchRef.current + key,
                  items = getItems().filter((item) => !item.disabled),
                  currentItem = document.activeElement,
                  currentMatch = items.find(
                    (item) => item.ref.current === currentItem
                  )?.textValue,
                  nextMatch = (function getNextMatch(
                    values,
                    search,
                    currentMatch
                  ) {
                    const isRepeated =
                        search.length > 1 &&
                        Array.from(search).every((char) => char === search[0]),
                      normalizedSearch = isRepeated ? search[0] : search,
                      currentMatchIndex = currentMatch
                        ? values.indexOf(currentMatch)
                        : -1
                    let wrappedValues = (function wrapArray(array, startIndex) {
                      return array.map(
                        (_, index) => array[(startIndex + index) % array.length]
                      )
                    })(values, Math.max(currentMatchIndex, 0))
                    1 === normalizedSearch.length &&
                      (wrappedValues = wrappedValues.filter(
                        (v) => v !== currentMatch
                      ))
                    const nextMatch = wrappedValues.find((value) =>
                      value
                        .toLowerCase()
                        .startsWith(normalizedSearch.toLowerCase())
                    )
                    return nextMatch !== currentMatch ? nextMatch : void 0
                  })(
                    items.map((item) => item.textValue),
                    search,
                    currentMatch
                  ),
                  newItem = items.find((item) => item.textValue === nextMatch)
                    ?.ref.current
                ;(!(function updateSearch(value) {
                  ;((searchRef.current = value),
                    window.clearTimeout(timerRef.current),
                    '' !== value &&
                      (timerRef.current = window.setTimeout(
                        () => updateSearch(''),
                        1e3
                      )))
                })(search),
                  newItem && setTimeout(() => newItem.focus()))
              }
            ;(react.useEffect(
              () => () => window.clearTimeout(timerRef.current),
              []
            ),
              useFocusGuards())
            const isPointerMovingToSubmenu = react.useCallback(
              (event) =>
                pointerDirRef.current === pointerGraceIntentRef.current?.side &&
                (function isPointerInGraceArea(event, area) {
                  if (!area) return !1
                  const cursorPos = { x: event.clientX, y: event.clientY }
                  return (function isPointInPolygon(point, polygon) {
                    const { x, y } = point
                    let inside = !1
                    for (
                      let i = 0, j = polygon.length - 1;
                      i < polygon.length;
                      j = i++
                    ) {
                      const xi = polygon[i].x,
                        yi = polygon[i].y,
                        xj = polygon[j].x,
                        yj = polygon[j].y
                      yi > y != yj > y &&
                        x < ((xj - xi) * (y - yi)) / (yj - yi) + xi &&
                        (inside = !inside)
                    }
                    return inside
                  })(cursorPos, area)
                })(event, pointerGraceIntentRef.current?.area),
              []
            )
            return (0, jsx_runtime.jsx)(MenuContentProvider, {
              scope: __scopeMenu,
              searchRef,
              onItemEnter: react.useCallback(
                (event) => {
                  isPointerMovingToSubmenu(event) && event.preventDefault()
                },
                [isPointerMovingToSubmenu]
              ),
              onItemLeave: react.useCallback(
                (event) => {
                  isPointerMovingToSubmenu(event) ||
                    (contentRef.current?.focus(), setCurrentItemId(null))
                },
                [isPointerMovingToSubmenu]
              ),
              onTriggerLeave: react.useCallback(
                (event) => {
                  isPointerMovingToSubmenu(event) && event.preventDefault()
                },
                [isPointerMovingToSubmenu]
              ),
              pointerGraceTimerRef,
              onPointerGraceIntentChange: react.useCallback((intent) => {
                pointerGraceIntentRef.current = intent
              }, []),
              children: (0, jsx_runtime.jsx)(ScrollLockWrapper, {
                ...scrollLockWrapperProps,
                children: (0, jsx_runtime.jsx)(FocusScope, {
                  asChild: !0,
                  trapped: trapFocus,
                  onMountAutoFocus: (0, dist.m)(onOpenAutoFocus, (event) => {
                    ;(event.preventDefault(),
                      contentRef.current?.focus({ preventScroll: !0 }))
                  }),
                  onUnmountAutoFocus: onCloseAutoFocus,
                  children: (0, jsx_runtime.jsx)(DismissableLayer, {
                    asChild: !0,
                    disableOutsidePointerEvents,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside,
                    onInteractOutside,
                    onDismiss,
                    children: (0, jsx_runtime.jsx)(react_roving_focus_dist.bL, {
                      asChild: !0,
                      ...rovingFocusGroupScope,
                      dir: rootContext.dir,
                      orientation: 'vertical',
                      loop,
                      currentTabStopId: currentItemId,
                      onCurrentTabStopIdChange: setCurrentItemId,
                      onEntryFocus: (0, dist.m)(onEntryFocus, (event) => {
                        rootContext.isUsingKeyboardRef.current ||
                          event.preventDefault()
                      }),
                      preventScrollOnEntryFocus: !0,
                      children: (0, jsx_runtime.jsx)(Content, {
                        role: 'menu',
                        'aria-orientation': 'vertical',
                        'data-state': getOpenState(context.open),
                        'data-radix-menu-content': '',
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: 'none', ...contentProps.style },
                        onKeyDown: (0, dist.m)(
                          contentProps.onKeyDown,
                          (event) => {
                            const isKeyDownInside =
                                event.target.closest(
                                  '[data-radix-menu-content]'
                                ) === event.currentTarget,
                              isModifierKey =
                                event.ctrlKey || event.altKey || event.metaKey,
                              isCharacterKey = 1 === event.key.length
                            isKeyDownInside &&
                              ('Tab' === event.key && event.preventDefault(),
                              !isModifierKey &&
                                isCharacterKey &&
                                handleTypeaheadSearch(event.key))
                            const content = contentRef.current
                            if (event.target !== content) return
                            if (!FIRST_LAST_KEYS.includes(event.key)) return
                            event.preventDefault()
                            const candidateNodes = getItems()
                              .filter((item) => !item.disabled)
                              .map((item) => item.ref.current)
                            ;(LAST_KEYS.includes(event.key) &&
                              candidateNodes.reverse(),
                              (function dist_focusFirst(candidates) {
                                const PREVIOUSLY_FOCUSED_ELEMENT =
                                  document.activeElement
                                for (const candidate of candidates) {
                                  if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
                                    return
                                  if (
                                    (candidate.focus(),
                                    document.activeElement !==
                                      PREVIOUSLY_FOCUSED_ELEMENT)
                                  )
                                    return
                                }
                              })(candidateNodes))
                          }
                        ),
                        onBlur: (0, dist.m)(props.onBlur, (event) => {
                          event.currentTarget.contains(event.target) ||
                            (window.clearTimeout(timerRef.current),
                            (searchRef.current = ''))
                        }),
                        onPointerMove: (0, dist.m)(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target,
                              pointerXHasChanged =
                                lastPointerXRef.current !== event.clientX
                            if (
                              event.currentTarget.contains(target) &&
                              pointerXHasChanged
                            ) {
                              const newDir =
                                event.clientX > lastPointerXRef.current
                                  ? 'right'
                                  : 'left'
                              ;((pointerDirRef.current = newDir),
                                (lastPointerXRef.current = event.clientX))
                            }
                          })
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            })
          })
        MenuContent.displayName = 'MenuContent'
        var MenuGroup = react.forwardRef((props, forwardedRef) => {
          const { __scopeMenu, ...groupProps } = props
          return (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
            role: 'group',
            ...groupProps,
            ref: forwardedRef,
          })
        })
        MenuGroup.displayName = 'MenuGroup'
        var MenuLabel = react.forwardRef((props, forwardedRef) => {
          const { __scopeMenu, ...labelProps } = props
          return (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
            ...labelProps,
            ref: forwardedRef,
          })
        })
        MenuLabel.displayName = 'MenuLabel'
        var MenuItem = react.forwardRef((props, forwardedRef) => {
          const { disabled = !1, onSelect, ...itemProps } = props,
            ref = react.useRef(null),
            rootContext = useMenuRootContext('MenuItem', props.__scopeMenu),
            contentContext = useMenuContentContext(
              'MenuItem',
              props.__scopeMenu
            ),
            composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref),
            isPointerDownRef = react.useRef(!1)
          return (0, jsx_runtime.jsx)(MenuItemImpl, {
            ...itemProps,
            ref: composedRefs,
            disabled,
            onClick: (0, dist.m)(props.onClick, () => {
              const menuItem = ref.current
              if (!disabled && menuItem) {
                const itemSelectEvent = new CustomEvent('menu.itemSelect', {
                  bubbles: !0,
                  cancelable: !0,
                })
                ;(menuItem.addEventListener(
                  'menu.itemSelect',
                  (event) => onSelect?.(event),
                  { once: !0 }
                ),
                  (0, react_primitive_dist.hO)(menuItem, itemSelectEvent),
                  itemSelectEvent.defaultPrevented
                    ? (isPointerDownRef.current = !1)
                    : rootContext.onClose())
              }
            }),
            onPointerDown: (event) => {
              ;(props.onPointerDown?.(event), (isPointerDownRef.current = !0))
            },
            onPointerUp: (0, dist.m)(props.onPointerUp, (event) => {
              isPointerDownRef.current || event.currentTarget?.click()
            }),
            onKeyDown: (0, dist.m)(props.onKeyDown, (event) => {
              const isTypingAhead = '' !== contentContext.searchRef.current
              disabled ||
                (isTypingAhead && ' ' === event.key) ||
                (SELECTION_KEYS.includes(event.key) &&
                  (event.currentTarget.click(), event.preventDefault()))
            }),
          })
        })
        MenuItem.displayName = 'MenuItem'
        var MenuItemImpl = react.forwardRef((props, forwardedRef) => {
            const {
                __scopeMenu,
                disabled = !1,
                textValue,
                ...itemProps
              } = props,
              contentContext = useMenuContentContext('MenuItem', __scopeMenu),
              rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu),
              ref = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref),
              [isFocused, setIsFocused] = react.useState(!1),
              [textContent, setTextContent] = react.useState('')
            return (
              react.useEffect(() => {
                const menuItem = ref.current
                menuItem && setTextContent((menuItem.textContent ?? '').trim())
              }, [itemProps.children]),
              (0, jsx_runtime.jsx)(Collection.ItemSlot, {
                scope: __scopeMenu,
                disabled,
                textValue: textValue ?? textContent,
                children: (0, jsx_runtime.jsx)(react_roving_focus_dist.q7, {
                  asChild: !0,
                  ...rovingFocusGroupScope,
                  focusable: !disabled,
                  children: (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
                    role: 'menuitem',
                    'data-highlighted': isFocused ? '' : void 0,
                    'aria-disabled': disabled || void 0,
                    'data-disabled': disabled ? '' : void 0,
                    ...itemProps,
                    ref: composedRefs,
                    onPointerMove: (0, dist.m)(
                      props.onPointerMove,
                      whenMouse((event) => {
                        if (disabled) contentContext.onItemLeave(event)
                        else if (
                          (contentContext.onItemEnter(event),
                          !event.defaultPrevented)
                        ) {
                          event.currentTarget.focus({ preventScroll: !0 })
                        }
                      })
                    ),
                    onPointerLeave: (0, dist.m)(
                      props.onPointerLeave,
                      whenMouse((event) => contentContext.onItemLeave(event))
                    ),
                    onFocus: (0, dist.m)(props.onFocus, () => setIsFocused(!0)),
                    onBlur: (0, dist.m)(props.onBlur, () => setIsFocused(!1)),
                  }),
                }),
              })
            )
          }),
          MenuCheckboxItem = react.forwardRef((props, forwardedRef) => {
            const {
              checked = !1,
              onCheckedChange,
              ...checkboxItemProps
            } = props
            return (0, jsx_runtime.jsx)(ItemIndicatorProvider, {
              scope: props.__scopeMenu,
              checked,
              children: (0, jsx_runtime.jsx)(MenuItem, {
                role: 'menuitemcheckbox',
                'aria-checked': isIndeterminate(checked) ? 'mixed' : checked,
                ...checkboxItemProps,
                ref: forwardedRef,
                'data-state': getCheckedState(checked),
                onSelect: (0, dist.m)(
                  checkboxItemProps.onSelect,
                  () =>
                    onCheckedChange?.(!!isIndeterminate(checked) || !checked),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          })
        MenuCheckboxItem.displayName = 'MenuCheckboxItem'
        var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
            'MenuRadioGroup',
            { value: void 0, onValueChange: () => {} }
          ),
          MenuRadioGroup = react.forwardRef((props, forwardedRef) => {
            const { value, onValueChange, ...groupProps } = props,
              handleValueChange = (0, react_use_callback_ref_dist.c)(
                onValueChange
              )
            return (0, jsx_runtime.jsx)(RadioGroupProvider, {
              scope: props.__scopeMenu,
              value,
              onValueChange: handleValueChange,
              children: (0, jsx_runtime.jsx)(MenuGroup, {
                ...groupProps,
                ref: forwardedRef,
              }),
            })
          })
        MenuRadioGroup.displayName = 'MenuRadioGroup'
        var MenuRadioItem = react.forwardRef((props, forwardedRef) => {
          const { value, ...radioItemProps } = props,
            context = useRadioGroupContext('MenuRadioItem', props.__scopeMenu),
            checked = value === context.value
          return (0, jsx_runtime.jsx)(ItemIndicatorProvider, {
            scope: props.__scopeMenu,
            checked,
            children: (0, jsx_runtime.jsx)(MenuItem, {
              role: 'menuitemradio',
              'aria-checked': checked,
              ...radioItemProps,
              ref: forwardedRef,
              'data-state': getCheckedState(checked),
              onSelect: (0, dist.m)(
                radioItemProps.onSelect,
                () => context.onValueChange?.(value),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          })
        })
        MenuRadioItem.displayName = 'MenuRadioItem'
        var [ItemIndicatorProvider, useItemIndicatorContext] =
            createMenuContext('MenuItemIndicator', { checked: !1 }),
          MenuItemIndicator = react.forwardRef((props, forwardedRef) => {
            const { __scopeMenu, forceMount, ...itemIndicatorProps } = props,
              indicatorContext = useItemIndicatorContext(
                'MenuItemIndicator',
                __scopeMenu
              )
            return (0, jsx_runtime.jsx)(react_presence_dist.C, {
              present:
                forceMount ||
                isIndeterminate(indicatorContext.checked) ||
                !0 === indicatorContext.checked,
              children: (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
                ...itemIndicatorProps,
                ref: forwardedRef,
                'data-state': getCheckedState(indicatorContext.checked),
              }),
            })
          })
        MenuItemIndicator.displayName = 'MenuItemIndicator'
        var MenuSeparator = react.forwardRef((props, forwardedRef) => {
          const { __scopeMenu, ...separatorProps } = props
          return (0, jsx_runtime.jsx)(react_primitive_dist.sG.div, {
            role: 'separator',
            'aria-orientation': 'horizontal',
            ...separatorProps,
            ref: forwardedRef,
          })
        })
        MenuSeparator.displayName = 'MenuSeparator'
        var MenuArrow = react.forwardRef((props, forwardedRef) => {
          const { __scopeMenu, ...arrowProps } = props,
            popperScope = usePopperScope(__scopeMenu)
          return (0, jsx_runtime.jsx)(dist_Arrow, {
            ...popperScope,
            ...arrowProps,
            ref: forwardedRef,
          })
        })
        MenuArrow.displayName = 'MenuArrow'
        var [MenuSubProvider, useMenuSubContext] = createMenuContext('MenuSub'),
          MenuSub = (props) => {
            const { __scopeMenu, children, open = !1, onOpenChange } = props,
              parentMenuContext = useMenuContext('MenuSub', __scopeMenu),
              popperScope = usePopperScope(__scopeMenu),
              [trigger, setTrigger] = react.useState(null),
              [content, setContent] = react.useState(null),
              handleOpenChange = (0, react_use_callback_ref_dist.c)(
                onOpenChange
              )
            return (
              react.useEffect(
                () => (
                  !1 === parentMenuContext.open && handleOpenChange(!1),
                  () => handleOpenChange(!1)
                ),
                [parentMenuContext.open, handleOpenChange]
              ),
              (0, jsx_runtime.jsx)(Root2, {
                ...popperScope,
                children: (0, jsx_runtime.jsx)(MenuProvider, {
                  scope: __scopeMenu,
                  open,
                  onOpenChange: handleOpenChange,
                  content,
                  onContentChange: setContent,
                  children: (0, jsx_runtime.jsx)(MenuSubProvider, {
                    scope: __scopeMenu,
                    contentId: (0, react_id_dist.B)(),
                    triggerId: (0, react_id_dist.B)(),
                    trigger,
                    onTriggerChange: setTrigger,
                    children,
                  }),
                }),
              })
            )
          }
        MenuSub.displayName = 'MenuSub'
        var MenuSubTrigger = react.forwardRef((props, forwardedRef) => {
          const context = useMenuContext('MenuSubTrigger', props.__scopeMenu),
            rootContext = useMenuRootContext(
              'MenuSubTrigger',
              props.__scopeMenu
            ),
            subContext = useMenuSubContext('MenuSubTrigger', props.__scopeMenu),
            contentContext = useMenuContentContext(
              'MenuSubTrigger',
              props.__scopeMenu
            ),
            openTimerRef = react.useRef(null),
            { pointerGraceTimerRef, onPointerGraceIntentChange } =
              contentContext,
            scope = { __scopeMenu: props.__scopeMenu },
            clearOpenTimer = react.useCallback(() => {
              ;(openTimerRef.current &&
                window.clearTimeout(openTimerRef.current),
                (openTimerRef.current = null))
            }, [])
          return (
            react.useEffect(() => clearOpenTimer, [clearOpenTimer]),
            react.useEffect(() => {
              const pointerGraceTimer = pointerGraceTimerRef.current
              return () => {
                ;(window.clearTimeout(pointerGraceTimer),
                  onPointerGraceIntentChange(null))
              }
            }, [pointerGraceTimerRef, onPointerGraceIntentChange]),
            (0, jsx_runtime.jsx)(MenuAnchor, {
              asChild: !0,
              ...scope,
              children: (0, jsx_runtime.jsx)(MenuItemImpl, {
                id: subContext.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': context.open,
                'aria-controls': subContext.contentId,
                'data-state': getOpenState(context.open),
                ...props,
                ref: (0, react_compose_refs_dist.t)(
                  forwardedRef,
                  subContext.onTriggerChange
                ),
                onClick: (event) => {
                  ;(props.onClick?.(event),
                    props.disabled ||
                      event.defaultPrevented ||
                      (event.currentTarget.focus(),
                      context.open || context.onOpenChange(!0)))
                },
                onPointerMove: (0, dist.m)(
                  props.onPointerMove,
                  whenMouse((event) => {
                    ;(contentContext.onItemEnter(event),
                      event.defaultPrevented ||
                        props.disabled ||
                        context.open ||
                        openTimerRef.current ||
                        (contentContext.onPointerGraceIntentChange(null),
                        (openTimerRef.current = window.setTimeout(() => {
                          ;(context.onOpenChange(!0), clearOpenTimer())
                        }, 100))))
                  })
                ),
                onPointerLeave: (0, dist.m)(
                  props.onPointerLeave,
                  whenMouse((event) => {
                    clearOpenTimer()
                    const contentRect = context.content?.getBoundingClientRect()
                    if (contentRect) {
                      const side = context.content?.dataset.side,
                        rightSide = 'right' === side,
                        bleed = rightSide ? -5 : 5,
                        contentNearEdge =
                          contentRect[rightSide ? 'left' : 'right'],
                        contentFarEdge =
                          contentRect[rightSide ? 'right' : 'left']
                      ;(contentContext.onPointerGraceIntentChange({
                        area: [
                          { x: event.clientX + bleed, y: event.clientY },
                          { x: contentNearEdge, y: contentRect.top },
                          { x: contentFarEdge, y: contentRect.top },
                          { x: contentFarEdge, y: contentRect.bottom },
                          { x: contentNearEdge, y: contentRect.bottom },
                        ],
                        side,
                      }),
                        window.clearTimeout(pointerGraceTimerRef.current),
                        (pointerGraceTimerRef.current = window.setTimeout(
                          () => contentContext.onPointerGraceIntentChange(null),
                          300
                        )))
                    } else {
                      if (
                        (contentContext.onTriggerLeave(event),
                        event.defaultPrevented)
                      )
                        return
                      contentContext.onPointerGraceIntentChange(null)
                    }
                  })
                ),
                onKeyDown: (0, dist.m)(props.onKeyDown, (event) => {
                  const isTypingAhead = '' !== contentContext.searchRef.current
                  props.disabled ||
                    (isTypingAhead && ' ' === event.key) ||
                    (SUB_OPEN_KEYS[rootContext.dir].includes(event.key) &&
                      (context.onOpenChange(!0),
                      context.content?.focus(),
                      event.preventDefault()))
                }),
              }),
            })
          )
        })
        MenuSubTrigger.displayName = 'MenuSubTrigger'
        var MenuSubContent = react.forwardRef((props, forwardedRef) => {
          const portalContext = usePortalContext(
              'MenuContent',
              props.__scopeMenu
            ),
            { forceMount = portalContext.forceMount, ...subContentProps } =
              props,
            context = useMenuContext('MenuContent', props.__scopeMenu),
            rootContext = useMenuRootContext('MenuContent', props.__scopeMenu),
            subContext = useMenuSubContext('MenuSubContent', props.__scopeMenu),
            ref = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref)
          return (0, jsx_runtime.jsx)(Collection.Provider, {
            scope: props.__scopeMenu,
            children: (0, jsx_runtime.jsx)(react_presence_dist.C, {
              present: forceMount || context.open,
              children: (0, jsx_runtime.jsx)(Collection.Slot, {
                scope: props.__scopeMenu,
                children: (0, jsx_runtime.jsx)(MenuContentImpl, {
                  id: subContext.contentId,
                  'aria-labelledby': subContext.triggerId,
                  ...subContentProps,
                  ref: composedRefs,
                  align: 'start',
                  side: 'rtl' === rootContext.dir ? 'left' : 'right',
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (event) => {
                    ;(rootContext.isUsingKeyboardRef.current &&
                      ref.current?.focus(),
                      event.preventDefault())
                  },
                  onCloseAutoFocus: (event) => event.preventDefault(),
                  onFocusOutside: (0, dist.m)(props.onFocusOutside, (event) => {
                    event.target !== subContext.trigger &&
                      context.onOpenChange(!1)
                  }),
                  onEscapeKeyDown: (0, dist.m)(
                    props.onEscapeKeyDown,
                    (event) => {
                      ;(rootContext.onClose(), event.preventDefault())
                    }
                  ),
                  onKeyDown: (0, dist.m)(props.onKeyDown, (event) => {
                    const isKeyDownInside = event.currentTarget.contains(
                        event.target
                      ),
                      isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(
                        event.key
                      )
                    isKeyDownInside &&
                      isCloseKey &&
                      (context.onOpenChange(!1),
                      subContext.trigger?.focus(),
                      event.preventDefault())
                  }),
                }),
              }),
            }),
          })
        })
        function getOpenState(open) {
          return open ? 'open' : 'closed'
        }
        function isIndeterminate(checked) {
          return 'indeterminate' === checked
        }
        function getCheckedState(checked) {
          return isIndeterminate(checked)
            ? 'indeterminate'
            : checked
              ? 'checked'
              : 'unchecked'
        }
        function whenMouse(handler) {
          return (event) =>
            'mouse' === event.pointerType ? handler(event) : void 0
        }
        MenuSubContent.displayName = 'MenuSubContent'
        var Root3 = Menu,
          Anchor2 = MenuAnchor,
          dist_Portal = MenuPortal,
          Content2 = MenuContent,
          Group = MenuGroup,
          Label = MenuLabel,
          Item2 = MenuItem,
          CheckboxItem = MenuCheckboxItem,
          RadioGroup = MenuRadioGroup,
          RadioItem = MenuRadioItem,
          ItemIndicator = MenuItemIndicator,
          Separator = MenuSeparator,
          Arrow2 = MenuArrow,
          Sub = MenuSub,
          SubTrigger = MenuSubTrigger,
          SubContent = MenuSubContent,
          react_use_controllable_state_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
          ),
          [createContextMenuContext, createContextMenuScope] = (0,
          react_context_dist.A)('ContextMenu', [createMenuScope]),
          useMenuScope = createMenuScope(),
          [ContextMenuProvider, useContextMenuContext] =
            createContextMenuContext('ContextMenu'),
          ContextMenu = (props) => {
            const {
                __scopeContextMenu,
                children,
                onOpenChange,
                dir,
                modal = !0,
              } = props,
              [open, setOpen] = react.useState(!1),
              menuScope = useMenuScope(__scopeContextMenu),
              handleOpenChangeProp = (0, react_use_callback_ref_dist.c)(
                onOpenChange
              ),
              handleOpenChange = react.useCallback(
                (open2) => {
                  ;(setOpen(open2), handleOpenChangeProp(open2))
                },
                [handleOpenChangeProp]
              )
            return (0, jsx_runtime.jsx)(ContextMenuProvider, {
              scope: __scopeContextMenu,
              open,
              onOpenChange: handleOpenChange,
              modal,
              children: (0, jsx_runtime.jsx)(Root3, {
                ...menuScope,
                dir,
                open,
                onOpenChange: handleOpenChange,
                modal,
                children,
              }),
            })
          }
        ContextMenu.displayName = 'ContextMenu'
        var ContextMenuTrigger = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, disabled = !1, ...triggerProps } = props,
            context = useContextMenuContext(
              'ContextMenuTrigger',
              __scopeContextMenu
            ),
            menuScope = useMenuScope(__scopeContextMenu),
            pointRef = react.useRef({ x: 0, y: 0 }),
            virtualRef = react.useRef({
              getBoundingClientRect: () =>
                DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current }),
            }),
            longPressTimerRef = react.useRef(0),
            clearLongPress = react.useCallback(
              () => window.clearTimeout(longPressTimerRef.current),
              []
            ),
            handleOpen = (event) => {
              ;((pointRef.current = { x: event.clientX, y: event.clientY }),
                context.onOpenChange(!0))
            }
          return (
            react.useEffect(() => clearLongPress, [clearLongPress]),
            react.useEffect(() => {
              disabled && clearLongPress()
            }, [disabled, clearLongPress]),
            (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(Anchor2, { ...menuScope, virtualRef }),
                (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
                  'data-state': context.open ? 'open' : 'closed',
                  'data-disabled': disabled ? '' : void 0,
                  ...triggerProps,
                  ref: forwardedRef,
                  style: { WebkitTouchCallout: 'none', ...props.style },
                  onContextMenu: disabled
                    ? props.onContextMenu
                    : (0, dist.m)(props.onContextMenu, (event) => {
                        ;(clearLongPress(),
                          handleOpen(event),
                          event.preventDefault())
                      }),
                  onPointerDown: disabled
                    ? props.onPointerDown
                    : (0, dist.m)(
                        props.onPointerDown,
                        whenTouchOrPen((event) => {
                          ;(clearLongPress(),
                            (longPressTimerRef.current = window.setTimeout(
                              () => handleOpen(event),
                              700
                            )))
                        })
                      ),
                  onPointerMove: disabled
                    ? props.onPointerMove
                    : (0, dist.m)(
                        props.onPointerMove,
                        whenTouchOrPen(clearLongPress)
                      ),
                  onPointerCancel: disabled
                    ? props.onPointerCancel
                    : (0, dist.m)(
                        props.onPointerCancel,
                        whenTouchOrPen(clearLongPress)
                      ),
                  onPointerUp: disabled
                    ? props.onPointerUp
                    : (0, dist.m)(
                        props.onPointerUp,
                        whenTouchOrPen(clearLongPress)
                      ),
                }),
              ],
            })
          )
        })
        ContextMenuTrigger.displayName = 'ContextMenuTrigger'
        var ContextMenuPortal = (props) => {
          const { __scopeContextMenu, ...portalProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(dist_Portal, {
            ...menuScope,
            ...portalProps,
          })
        }
        ContextMenuPortal.displayName = 'ContextMenuPortal'
        var ContextMenuContent = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...contentProps } = props,
            context = useContextMenuContext(
              'ContextMenuContent',
              __scopeContextMenu
            ),
            menuScope = useMenuScope(__scopeContextMenu),
            hasInteractedOutsideRef = react.useRef(!1)
          return (0, jsx_runtime.jsx)(Content2, {
            ...menuScope,
            ...contentProps,
            ref: forwardedRef,
            side: 'right',
            sideOffset: 2,
            align: 'start',
            onCloseAutoFocus: (event) => {
              ;(props.onCloseAutoFocus?.(event),
                !event.defaultPrevented &&
                  hasInteractedOutsideRef.current &&
                  event.preventDefault(),
                (hasInteractedOutsideRef.current = !1))
            },
            onInteractOutside: (event) => {
              ;(props.onInteractOutside?.(event),
                event.defaultPrevented ||
                  context.modal ||
                  (hasInteractedOutsideRef.current = !0))
            },
            style: {
              ...props.style,
              '--radix-context-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-context-menu-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-context-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-context-menu-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-context-menu-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          })
        })
        ContextMenuContent.displayName = 'ContextMenuContent'
        var ContextMenuGroup = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...groupProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(Group, {
            ...menuScope,
            ...groupProps,
            ref: forwardedRef,
          })
        })
        ContextMenuGroup.displayName = 'ContextMenuGroup'
        var ContextMenuLabel = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...labelProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(Label, {
            ...menuScope,
            ...labelProps,
            ref: forwardedRef,
          })
        })
        ContextMenuLabel.displayName = 'ContextMenuLabel'
        var ContextMenuItem = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...itemProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(Item2, {
            ...menuScope,
            ...itemProps,
            ref: forwardedRef,
          })
        })
        ContextMenuItem.displayName = 'ContextMenuItem'
        var ContextMenuCheckboxItem = react.forwardRef(
          (props, forwardedRef) => {
            const { __scopeContextMenu, ...checkboxItemProps } = props,
              menuScope = useMenuScope(__scopeContextMenu)
            return (0, jsx_runtime.jsx)(CheckboxItem, {
              ...menuScope,
              ...checkboxItemProps,
              ref: forwardedRef,
            })
          }
        )
        ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'
        var ContextMenuRadioGroup = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...radioGroupProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(RadioGroup, {
            ...menuScope,
            ...radioGroupProps,
            ref: forwardedRef,
          })
        })
        ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup'
        var ContextMenuRadioItem = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...radioItemProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(RadioItem, {
            ...menuScope,
            ...radioItemProps,
            ref: forwardedRef,
          })
        })
        ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
        var ContextMenuItemIndicator = react.forwardRef(
          (props, forwardedRef) => {
            const { __scopeContextMenu, ...itemIndicatorProps } = props,
              menuScope = useMenuScope(__scopeContextMenu)
            return (0, jsx_runtime.jsx)(ItemIndicator, {
              ...menuScope,
              ...itemIndicatorProps,
              ref: forwardedRef,
            })
          }
        )
        ContextMenuItemIndicator.displayName = 'ContextMenuItemIndicator'
        var ContextMenuSeparator = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...separatorProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(Separator, {
            ...menuScope,
            ...separatorProps,
            ref: forwardedRef,
          })
        })
        ContextMenuSeparator.displayName = 'ContextMenuSeparator'
        var ContextMenuArrow = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...arrowProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(Arrow2, {
            ...menuScope,
            ...arrowProps,
            ref: forwardedRef,
          })
        })
        ContextMenuArrow.displayName = 'ContextMenuArrow'
        var ContextMenuSub = (props) => {
          const {
              __scopeContextMenu,
              children,
              onOpenChange,
              open: openProp,
              defaultOpen,
            } = props,
            menuScope = useMenuScope(__scopeContextMenu),
            [open, setOpen] = (0, react_use_controllable_state_dist.i)({
              prop: openProp,
              defaultProp: defaultOpen,
              onChange: onOpenChange,
            })
          return (0, jsx_runtime.jsx)(Sub, {
            ...menuScope,
            open,
            onOpenChange: setOpen,
            children,
          })
        }
        ContextMenuSub.displayName = 'ContextMenuSub'
        var ContextMenuSubTrigger = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...triggerItemProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(SubTrigger, {
            ...menuScope,
            ...triggerItemProps,
            ref: forwardedRef,
          })
        })
        ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'
        var ContextMenuSubContent = react.forwardRef((props, forwardedRef) => {
          const { __scopeContextMenu, ...subContentProps } = props,
            menuScope = useMenuScope(__scopeContextMenu)
          return (0, jsx_runtime.jsx)(SubContent, {
            ...menuScope,
            ...subContentProps,
            ref: forwardedRef,
            style: {
              ...props.style,
              '--radix-context-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-context-menu-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-context-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-context-menu-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-context-menu-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          })
        })
        function whenTouchOrPen(handler) {
          return (event) =>
            'mouse' !== event.pointerType ? handler(event) : void 0
        }
        ContextMenuSubContent.displayName = 'ContextMenuSubContent'
        var dist_Root2 = ContextMenu,
          Trigger = ContextMenuTrigger,
          Portal2 = ContextMenuPortal,
          dist_Content2 = ContextMenuContent,
          Group2 = ContextMenuGroup,
          Label2 = ContextMenuLabel,
          dist_Item2 = ContextMenuItem,
          CheckboxItem2 = ContextMenuCheckboxItem,
          RadioGroup2 = ContextMenuRadioGroup,
          RadioItem2 = ContextMenuRadioItem,
          ItemIndicator2 = ContextMenuItemIndicator,
          Separator2 = ContextMenuSeparator,
          Sub2 = ContextMenuSub,
          SubTrigger2 = ContextMenuSubTrigger,
          SubContent2 = ContextMenuSubContent
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Check })
        const Check = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronRight })
        const ChevronRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Circle })
        const Circle = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Circle', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ])
      },
  },
])
