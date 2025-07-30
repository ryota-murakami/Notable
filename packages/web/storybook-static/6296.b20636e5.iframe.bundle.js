/*! For license information please see 6296.b20636e5.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [6296],
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
    '../../node_modules/.pnpm/@radix-ui+react-popper@1.2.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_598107c9f7060812e878f5f87b771bc2/node_modules/@radix-ui/react-popper/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Mz: () => Anchor,
          i3: () => dist_Arrow,
          UC: () => Content,
          bL: () => Root2,
          Bk: () => createPopperScope,
        })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          floating_ui_react_dom = __webpack_require__(
            '../../node_modules/.pnpm/@floating-ui+react-dom@2.1.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs'
          ),
          floating_ui_dom = __webpack_require__(
            '../../node_modules/.pnpm/@floating-ui+dom@1.7.2/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs'
          ),
          dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Arrow = react.forwardRef((props, forwardedRef) => {
            const { children, width = 10, height = 5, ...arrowProps } = props
            return (0, jsx_runtime.jsx)(dist.sG.svg, {
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
        var Root = Arrow,
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          react_context_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
          ),
          react_use_callback_ref_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs'
          ),
          react_use_layout_effect_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs'
          ),
          react_use_size_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
          ),
          [createPopperContext, createPopperScope] = (0, react_context_dist.A)(
            'Popper'
          ),
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
              : (0, jsx_runtime.jsx)(dist.sG.div, {
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
              arrowSize = (0, react_use_size_dist.X)(arrow),
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
                  children: (0, jsx_runtime.jsx)(dist.sG.div, {
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
                children: (0, jsx_runtime.jsx)(Root, {
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
          dist_Arrow = PopperArrow
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
    '../../node_modules/.pnpm/@radix-ui+react-tooltip@1.2.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react_577567665b1888228a51cf76b71cde18/node_modules/@radix-ui/react-tooltip/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          UC: () => Content2,
          Kq: () => Provider,
          bL: () => Root3,
          l9: () => Trigger,
        })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
          ),
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          react_context_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
          ),
          react_dismissable_layer_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.10_@types+react-dom@19.1.6_@types+react@19.1.8__@_a1d343a3b3ef56a897be7e3ac188901b/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs'
          ),
          react_id_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
          ),
          react_popper_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-popper@1.2.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_598107c9f7060812e878f5f87b771bc2/node_modules/@radix-ui/react-popper/dist/index.mjs'
          ),
          react_portal_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_daa6284eb61b5d92679ce5e11f38cd01/node_modules/@radix-ui/react-portal/dist/index.mjs'
          ),
          react_presence_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_949a0df3eae86665e086aa01aee25ebf/node_modules/@radix-ui/react-presence/dist/index.mjs'
          ),
          react_primitive_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          react_slot_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
          ),
          react_use_controllable_state_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          VISUALLY_HIDDEN_STYLES = Object.freeze({
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
          }),
          VisuallyHidden = react.forwardRef((props, forwardedRef) =>
            (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
              ...props,
              ref: forwardedRef,
              style: { ...VISUALLY_HIDDEN_STYLES, ...props.style },
            })
          )
        VisuallyHidden.displayName = 'VisuallyHidden'
        var Root = VisuallyHidden,
          [createTooltipContext, createTooltipScope] = (0,
          react_context_dist.A)('Tooltip', [react_popper_dist.Bk]),
          usePopperScope = (0, react_popper_dist.Bk)(),
          DEFAULT_DELAY_DURATION = 700,
          [TooltipProviderContextProvider, useTooltipProviderContext] =
            createTooltipContext('TooltipProvider'),
          TooltipProvider = (props) => {
            const {
                __scopeTooltip,
                delayDuration = DEFAULT_DELAY_DURATION,
                skipDelayDuration = 300,
                disableHoverableContent = !1,
                children,
              } = props,
              isOpenDelayedRef = react.useRef(!0),
              isPointerInTransitRef = react.useRef(!1),
              skipDelayTimerRef = react.useRef(0)
            return (
              react.useEffect(() => {
                const skipDelayTimer = skipDelayTimerRef.current
                return () => window.clearTimeout(skipDelayTimer)
              }, []),
              (0, jsx_runtime.jsx)(TooltipProviderContextProvider, {
                scope: __scopeTooltip,
                isOpenDelayedRef,
                delayDuration,
                onOpen: react.useCallback(() => {
                  ;(window.clearTimeout(skipDelayTimerRef.current),
                    (isOpenDelayedRef.current = !1))
                }, []),
                onClose: react.useCallback(() => {
                  ;(window.clearTimeout(skipDelayTimerRef.current),
                    (skipDelayTimerRef.current = window.setTimeout(
                      () => (isOpenDelayedRef.current = !0),
                      skipDelayDuration
                    )))
                }, [skipDelayDuration]),
                isPointerInTransitRef,
                onPointerInTransitChange: react.useCallback((inTransit) => {
                  isPointerInTransitRef.current = inTransit
                }, []),
                disableHoverableContent,
                children,
              })
            )
          }
        TooltipProvider.displayName = 'TooltipProvider'
        var [TooltipContextProvider, useTooltipContext] =
            createTooltipContext('Tooltip'),
          Tooltip = (props) => {
            const {
                __scopeTooltip,
                children,
                open: openProp,
                defaultOpen,
                onOpenChange,
                disableHoverableContent: disableHoverableContentProp,
                delayDuration: delayDurationProp,
              } = props,
              providerContext = useTooltipProviderContext(
                'Tooltip',
                props.__scopeTooltip
              ),
              popperScope = usePopperScope(__scopeTooltip),
              [trigger, setTrigger] = react.useState(null),
              contentId = (0, react_id_dist.B)(),
              openTimerRef = react.useRef(0),
              disableHoverableContent =
                disableHoverableContentProp ??
                providerContext.disableHoverableContent,
              delayDuration =
                delayDurationProp ?? providerContext.delayDuration,
              wasOpenDelayedRef = react.useRef(!1),
              [open, setOpen] = (0, react_use_controllable_state_dist.i)({
                prop: openProp,
                defaultProp: defaultOpen ?? !1,
                onChange: (open2) => {
                  ;(open2
                    ? (providerContext.onOpen(),
                      document.dispatchEvent(new CustomEvent('tooltip.open')))
                    : providerContext.onClose(),
                    onOpenChange?.(open2))
                },
                caller: 'Tooltip',
              }),
              stateAttribute = react.useMemo(
                () =>
                  open
                    ? wasOpenDelayedRef.current
                      ? 'delayed-open'
                      : 'instant-open'
                    : 'closed',
                [open]
              ),
              handleOpen = react.useCallback(() => {
                ;(window.clearTimeout(openTimerRef.current),
                  (openTimerRef.current = 0),
                  (wasOpenDelayedRef.current = !1),
                  setOpen(!0))
              }, [setOpen]),
              handleClose = react.useCallback(() => {
                ;(window.clearTimeout(openTimerRef.current),
                  (openTimerRef.current = 0),
                  setOpen(!1))
              }, [setOpen]),
              handleDelayedOpen = react.useCallback(() => {
                ;(window.clearTimeout(openTimerRef.current),
                  (openTimerRef.current = window.setTimeout(() => {
                    ;((wasOpenDelayedRef.current = !0),
                      setOpen(!0),
                      (openTimerRef.current = 0))
                  }, delayDuration)))
              }, [delayDuration, setOpen])
            return (
              react.useEffect(
                () => () => {
                  openTimerRef.current &&
                    (window.clearTimeout(openTimerRef.current),
                    (openTimerRef.current = 0))
                },
                []
              ),
              (0, jsx_runtime.jsx)(react_popper_dist.bL, {
                ...popperScope,
                children: (0, jsx_runtime.jsx)(TooltipContextProvider, {
                  scope: __scopeTooltip,
                  contentId,
                  open,
                  stateAttribute,
                  trigger,
                  onTriggerChange: setTrigger,
                  onTriggerEnter: react.useCallback(() => {
                    providerContext.isOpenDelayedRef.current
                      ? handleDelayedOpen()
                      : handleOpen()
                  }, [
                    providerContext.isOpenDelayedRef,
                    handleDelayedOpen,
                    handleOpen,
                  ]),
                  onTriggerLeave: react.useCallback(() => {
                    disableHoverableContent
                      ? handleClose()
                      : (window.clearTimeout(openTimerRef.current),
                        (openTimerRef.current = 0))
                  }, [handleClose, disableHoverableContent]),
                  onOpen: handleOpen,
                  onClose: handleClose,
                  disableHoverableContent,
                  children,
                }),
              })
            )
          }
        Tooltip.displayName = 'Tooltip'
        var TooltipTrigger = react.forwardRef((props, forwardedRef) => {
          const { __scopeTooltip, ...triggerProps } = props,
            context = useTooltipContext('TooltipTrigger', __scopeTooltip),
            providerContext = useTooltipProviderContext(
              'TooltipTrigger',
              __scopeTooltip
            ),
            popperScope = usePopperScope(__scopeTooltip),
            ref = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.s)(
              forwardedRef,
              ref,
              context.onTriggerChange
            ),
            isPointerDownRef = react.useRef(!1),
            hasPointerMoveOpenedRef = react.useRef(!1),
            handlePointerUp = react.useCallback(
              () => (isPointerDownRef.current = !1),
              []
            )
          return (
            react.useEffect(
              () => () =>
                document.removeEventListener('pointerup', handlePointerUp),
              [handlePointerUp]
            ),
            (0, jsx_runtime.jsx)(react_popper_dist.Mz, {
              asChild: !0,
              ...popperScope,
              children: (0, jsx_runtime.jsx)(react_primitive_dist.sG.button, {
                'aria-describedby': context.open ? context.contentId : void 0,
                'data-state': context.stateAttribute,
                ...triggerProps,
                ref: composedRefs,
                onPointerMove: (0, dist.m)(props.onPointerMove, (event) => {
                  'touch' !== event.pointerType &&
                    (hasPointerMoveOpenedRef.current ||
                      providerContext.isPointerInTransitRef.current ||
                      (context.onTriggerEnter(),
                      (hasPointerMoveOpenedRef.current = !0)))
                }),
                onPointerLeave: (0, dist.m)(props.onPointerLeave, () => {
                  ;(context.onTriggerLeave(),
                    (hasPointerMoveOpenedRef.current = !1))
                }),
                onPointerDown: (0, dist.m)(props.onPointerDown, () => {
                  ;(context.open && context.onClose(),
                    (isPointerDownRef.current = !0),
                    document.addEventListener('pointerup', handlePointerUp, {
                      once: !0,
                    }))
                }),
                onFocus: (0, dist.m)(props.onFocus, () => {
                  isPointerDownRef.current || context.onOpen()
                }),
                onBlur: (0, dist.m)(props.onBlur, context.onClose),
                onClick: (0, dist.m)(props.onClick, context.onClose),
              }),
            })
          )
        })
        TooltipTrigger.displayName = 'TooltipTrigger'
        var [PortalProvider, usePortalContext] = createTooltipContext(
            'TooltipPortal',
            { forceMount: void 0 }
          ),
          TooltipPortal = (props) => {
            const { __scopeTooltip, forceMount, children, container } = props,
              context = useTooltipContext('TooltipPortal', __scopeTooltip)
            return (0, jsx_runtime.jsx)(PortalProvider, {
              scope: __scopeTooltip,
              forceMount,
              children: (0, jsx_runtime.jsx)(react_presence_dist.C, {
                present: forceMount || context.open,
                children: (0, jsx_runtime.jsx)(react_portal_dist.Z, {
                  asChild: !0,
                  container,
                  children,
                }),
              }),
            })
          }
        TooltipPortal.displayName = 'TooltipPortal'
        var TooltipContent = react.forwardRef((props, forwardedRef) => {
            const portalContext = usePortalContext(
                'TooltipContent',
                props.__scopeTooltip
              ),
              {
                forceMount = portalContext.forceMount,
                side = 'top',
                ...contentProps
              } = props,
              context = useTooltipContext(
                'TooltipContent',
                props.__scopeTooltip
              )
            return (0, jsx_runtime.jsx)(react_presence_dist.C, {
              present: forceMount || context.open,
              children: context.disableHoverableContent
                ? (0, jsx_runtime.jsx)(TooltipContentImpl, {
                    side,
                    ...contentProps,
                    ref: forwardedRef,
                  })
                : (0, jsx_runtime.jsx)(TooltipContentHoverable, {
                    side,
                    ...contentProps,
                    ref: forwardedRef,
                  }),
            })
          }),
          TooltipContentHoverable = react.forwardRef((props, forwardedRef) => {
            const context = useTooltipContext(
                'TooltipContent',
                props.__scopeTooltip
              ),
              providerContext = useTooltipProviderContext(
                'TooltipContent',
                props.__scopeTooltip
              ),
              ref = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref),
              [pointerGraceArea, setPointerGraceArea] = react.useState(null),
              { trigger, onClose } = context,
              content = ref.current,
              { onPointerInTransitChange } = providerContext,
              handleRemoveGraceArea = react.useCallback(() => {
                ;(setPointerGraceArea(null), onPointerInTransitChange(!1))
              }, [onPointerInTransitChange]),
              handleCreateGraceArea = react.useCallback(
                (event, hoverTarget) => {
                  const currentTarget = event.currentTarget,
                    exitPoint = { x: event.clientX, y: event.clientY },
                    paddedExitPoints = (function getPaddedExitPoints(
                      exitPoint,
                      exitSide,
                      padding = 5
                    ) {
                      const paddedExitPoints = []
                      switch (exitSide) {
                        case 'top':
                          paddedExitPoints.push(
                            {
                              x: exitPoint.x - padding,
                              y: exitPoint.y + padding,
                            },
                            {
                              x: exitPoint.x + padding,
                              y: exitPoint.y + padding,
                            }
                          )
                          break
                        case 'bottom':
                          paddedExitPoints.push(
                            {
                              x: exitPoint.x - padding,
                              y: exitPoint.y - padding,
                            },
                            {
                              x: exitPoint.x + padding,
                              y: exitPoint.y - padding,
                            }
                          )
                          break
                        case 'left':
                          paddedExitPoints.push(
                            {
                              x: exitPoint.x + padding,
                              y: exitPoint.y - padding,
                            },
                            {
                              x: exitPoint.x + padding,
                              y: exitPoint.y + padding,
                            }
                          )
                          break
                        case 'right':
                          paddedExitPoints.push(
                            {
                              x: exitPoint.x - padding,
                              y: exitPoint.y - padding,
                            },
                            {
                              x: exitPoint.x - padding,
                              y: exitPoint.y + padding,
                            }
                          )
                      }
                      return paddedExitPoints
                    })(
                      exitPoint,
                      (function getExitSideFromRect(point, rect) {
                        const top = Math.abs(rect.top - point.y),
                          bottom = Math.abs(rect.bottom - point.y),
                          right = Math.abs(rect.right - point.x),
                          left = Math.abs(rect.left - point.x)
                        switch (Math.min(top, bottom, right, left)) {
                          case left:
                            return 'left'
                          case right:
                            return 'right'
                          case top:
                            return 'top'
                          case bottom:
                            return 'bottom'
                          default:
                            throw new Error('unreachable')
                        }
                      })(exitPoint, currentTarget.getBoundingClientRect())
                    ),
                    graceArea = (function getHull(points) {
                      const newPoints = points.slice()
                      return (
                        newPoints.sort((a, b) =>
                          a.x < b.x
                            ? -1
                            : a.x > b.x
                              ? 1
                              : a.y < b.y
                                ? -1
                                : a.y > b.y
                                  ? 1
                                  : 0
                        ),
                        (function getHullPresorted(points) {
                          if (points.length <= 1) return points.slice()
                          const upperHull = []
                          for (let i = 0; i < points.length; i++) {
                            const p = points[i]
                            for (; upperHull.length >= 2; ) {
                              const q = upperHull[upperHull.length - 1],
                                r = upperHull[upperHull.length - 2]
                              if (
                                !(
                                  (q.x - r.x) * (p.y - r.y) >=
                                  (q.y - r.y) * (p.x - r.x)
                                )
                              )
                                break
                              upperHull.pop()
                            }
                            upperHull.push(p)
                          }
                          upperHull.pop()
                          const lowerHull = []
                          for (let i = points.length - 1; i >= 0; i--) {
                            const p = points[i]
                            for (; lowerHull.length >= 2; ) {
                              const q = lowerHull[lowerHull.length - 1],
                                r = lowerHull[lowerHull.length - 2]
                              if (
                                !(
                                  (q.x - r.x) * (p.y - r.y) >=
                                  (q.y - r.y) * (p.x - r.x)
                                )
                              )
                                break
                              lowerHull.pop()
                            }
                            lowerHull.push(p)
                          }
                          return (
                            lowerHull.pop(),
                            1 === upperHull.length &&
                            1 === lowerHull.length &&
                            upperHull[0].x === lowerHull[0].x &&
                            upperHull[0].y === lowerHull[0].y
                              ? upperHull
                              : upperHull.concat(lowerHull)
                          )
                        })(newPoints)
                      )
                    })([
                      ...paddedExitPoints,
                      ...(function getPointsFromRect(rect) {
                        const { top, right, bottom, left } = rect
                        return [
                          { x: left, y: top },
                          { x: right, y: top },
                          { x: right, y: bottom },
                          { x: left, y: bottom },
                        ]
                      })(hoverTarget.getBoundingClientRect()),
                    ])
                  ;(setPointerGraceArea(graceArea),
                    onPointerInTransitChange(!0))
                },
                [onPointerInTransitChange]
              )
            return (
              react.useEffect(
                () => () => handleRemoveGraceArea(),
                [handleRemoveGraceArea]
              ),
              react.useEffect(() => {
                if (trigger && content) {
                  const handleTriggerLeave = (event) =>
                      handleCreateGraceArea(event, content),
                    handleContentLeave = (event) =>
                      handleCreateGraceArea(event, trigger)
                  return (
                    trigger.addEventListener(
                      'pointerleave',
                      handleTriggerLeave
                    ),
                    content.addEventListener(
                      'pointerleave',
                      handleContentLeave
                    ),
                    () => {
                      ;(trigger.removeEventListener(
                        'pointerleave',
                        handleTriggerLeave
                      ),
                        content.removeEventListener(
                          'pointerleave',
                          handleContentLeave
                        ))
                    }
                  )
                }
              }, [
                trigger,
                content,
                handleCreateGraceArea,
                handleRemoveGraceArea,
              ]),
              react.useEffect(() => {
                if (pointerGraceArea) {
                  const handleTrackPointerGrace = (event) => {
                    const target = event.target,
                      pointerPosition = { x: event.clientX, y: event.clientY },
                      hasEnteredTarget =
                        trigger?.contains(target) || content?.contains(target),
                      isPointerOutsideGraceArea = !(function isPointInPolygon(
                        point,
                        polygon
                      ) {
                        const { x, y } = point
                        let inside = !1
                        for (
                          let i = 0, j = polygon.length - 1;
                          i < polygon.length;
                          j = i++
                        ) {
                          const ii = polygon[i],
                            jj = polygon[j],
                            xi = ii.x,
                            yi = ii.y,
                            xj = jj.x,
                            yj = jj.y
                          yi > y != yj > y &&
                            x < ((xj - xi) * (y - yi)) / (yj - yi) + xi &&
                            (inside = !inside)
                        }
                        return inside
                      })(pointerPosition, pointerGraceArea)
                    hasEnteredTarget
                      ? handleRemoveGraceArea()
                      : isPointerOutsideGraceArea &&
                        (handleRemoveGraceArea(), onClose())
                  }
                  return (
                    document.addEventListener(
                      'pointermove',
                      handleTrackPointerGrace
                    ),
                    () =>
                      document.removeEventListener(
                        'pointermove',
                        handleTrackPointerGrace
                      )
                  )
                }
              }, [
                trigger,
                content,
                pointerGraceArea,
                onClose,
                handleRemoveGraceArea,
              ]),
              (0, jsx_runtime.jsx)(TooltipContentImpl, {
                ...props,
                ref: composedRefs,
              })
            )
          }),
          [
            VisuallyHiddenContentContextProvider,
            useVisuallyHiddenContentContext,
          ] = createTooltipContext('Tooltip', { isInside: !1 }),
          Slottable = (0, react_slot_dist.Dc)('TooltipContent'),
          TooltipContentImpl = react.forwardRef((props, forwardedRef) => {
            const {
                __scopeTooltip,
                children,
                'aria-label': ariaLabel,
                onEscapeKeyDown,
                onPointerDownOutside,
                ...contentProps
              } = props,
              context = useTooltipContext('TooltipContent', __scopeTooltip),
              popperScope = usePopperScope(__scopeTooltip),
              { onClose } = context
            return (
              react.useEffect(
                () => (
                  document.addEventListener('tooltip.open', onClose),
                  () => document.removeEventListener('tooltip.open', onClose)
                ),
                [onClose]
              ),
              react.useEffect(() => {
                if (context.trigger) {
                  const handleScroll = (event) => {
                    const target = event.target
                    target?.contains(context.trigger) && onClose()
                  }
                  return (
                    window.addEventListener('scroll', handleScroll, {
                      capture: !0,
                    }),
                    () =>
                      window.removeEventListener('scroll', handleScroll, {
                        capture: !0,
                      })
                  )
                }
              }, [context.trigger, onClose]),
              (0, jsx_runtime.jsx)(react_dismissable_layer_dist.qW, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: onClose,
                children: (0, jsx_runtime.jsxs)(react_popper_dist.UC, {
                  'data-state': context.stateAttribute,
                  ...popperScope,
                  ...contentProps,
                  ref: forwardedRef,
                  style: {
                    ...contentProps.style,
                    '--radix-tooltip-content-transform-origin':
                      'var(--radix-popper-transform-origin)',
                    '--radix-tooltip-content-available-width':
                      'var(--radix-popper-available-width)',
                    '--radix-tooltip-content-available-height':
                      'var(--radix-popper-available-height)',
                    '--radix-tooltip-trigger-width':
                      'var(--radix-popper-anchor-width)',
                    '--radix-tooltip-trigger-height':
                      'var(--radix-popper-anchor-height)',
                  },
                  children: [
                    (0, jsx_runtime.jsx)(Slottable, { children }),
                    (0, jsx_runtime.jsx)(VisuallyHiddenContentContextProvider, {
                      scope: __scopeTooltip,
                      isInside: !0,
                      children: (0, jsx_runtime.jsx)(Root, {
                        id: context.contentId,
                        role: 'tooltip',
                        children: ariaLabel || children,
                      }),
                    }),
                  ],
                }),
              })
            )
          })
        TooltipContent.displayName = 'TooltipContent'
        var TooltipArrow = react.forwardRef((props, forwardedRef) => {
          const { __scopeTooltip, ...arrowProps } = props,
            popperScope = usePopperScope(__scopeTooltip)
          return useVisuallyHiddenContentContext('TooltipArrow', __scopeTooltip)
            .isInside
            ? null
            : (0, jsx_runtime.jsx)(react_popper_dist.i3, {
                ...popperScope,
                ...arrowProps,
                ref: forwardedRef,
              })
        })
        TooltipArrow.displayName = 'TooltipArrow'
        var Provider = TooltipProvider,
          Root3 = Tooltip,
          Trigger = TooltipTrigger,
          Content2 = TooltipContent
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Bold })
        const Bold = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Bold', [
          [
            'path',
            {
              d: 'M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8',
              key: 'mg9rjx',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-help.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CircleHelp })
        const CircleHelp = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleHelp', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          [
            'path',
            { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' },
          ],
          ['path', { d: 'M12 17h.01', key: 'p32p05' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Copy })
        const Copy = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Copy', [
          [
            'rect',
            {
              width: '14',
              height: '14',
              x: '8',
              y: '8',
              rx: '2',
              ry: '2',
              key: '17jyea',
            },
          ],
          [
            'path',
            {
              d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
              key: 'zix9uf',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Info })
        const Info = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Info', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['path', { d: 'M12 16v-4', key: '1dtifu' }],
          ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Italic })
        const Italic = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Italic', [
          ['line', { x1: '19', x2: '10', y1: '4', y2: '4', key: '15jd3p' }],
          ['line', { x1: '14', x2: '5', y1: '20', y2: '20', key: 'bu0au3' }],
          ['line', { x1: '15', x2: '9', y1: '4', y2: '20', key: 'uljnxc' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Plus })
        const Plus = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Plus', [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'M12 5v14', key: 's699le' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Settings })
        const Settings = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Settings', [
          [
            'path',
            {
              d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
              key: '1qme2f',
            },
          ],
          ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Underline })
        const Underline = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Underline', [
          ['path', { d: 'M6 4v6a6 6 0 0 0 12 0V4', key: '9kb039' }],
          ['line', { x1: '4', x2: '20', y1: '20', y2: '20', key: 'nun2al' }],
        ])
      },
  },
])
