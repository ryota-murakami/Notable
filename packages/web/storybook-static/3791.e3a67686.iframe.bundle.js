'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3791],
  {
    '../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+re_b26c6d948d533107753195e05bbf9d47/node_modules/@radix-ui/react-collection/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          N: () => createCollection,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function createCollection(name) {
          const PROVIDER_NAME = name + 'CollectionProvider',
            [createCollectionContext, createCollectionScope] = (0,
            _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(
              PROVIDER_NAME
            ),
            [CollectionProviderImpl, useCollectionContext] =
              createCollectionContext(PROVIDER_NAME, {
                collectionRef: { current: null },
                itemMap: new Map(),
              }),
            CollectionProvider = (props) => {
              const { scope, children } = props,
                ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(
                  new Map()
                ).current
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                CollectionProviderImpl,
                { scope, itemMap, collectionRef: ref, children }
              )
            }
          CollectionProvider.displayName = PROVIDER_NAME
          const COLLECTION_SLOT_NAME = name + 'CollectionSlot',
            CollectionSlotImpl = (0,
            _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.TL)(
              COLLECTION_SLOT_NAME
            ),
            CollectionSlot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { scope, children } = props,
                  context = useCollectionContext(COLLECTION_SLOT_NAME, scope),
                  composedRefs = (0,
                  _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(
                    forwardedRef,
                    context.collectionRef
                  )
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  CollectionSlotImpl,
                  { ref: composedRefs, children }
                )
              }
            )
          CollectionSlot.displayName = COLLECTION_SLOT_NAME
          const ITEM_SLOT_NAME = name + 'CollectionItemSlot',
            ITEM_DATA_ATTR = 'data-radix-collection-item',
            CollectionItemSlotImpl = (0,
            _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.TL)(
              ITEM_SLOT_NAME
            ),
            CollectionItemSlot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { scope, children, ...itemData } = props,
                  ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                  composedRefs = (0,
                  _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(
                    forwardedRef,
                    ref
                  ),
                  context = useCollectionContext(ITEM_SLOT_NAME, scope)
                return (
                  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
                    () => (
                      context.itemMap.set(ref, { ref, ...itemData }),
                      () => {
                        context.itemMap.delete(ref)
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    CollectionItemSlotImpl,
                    { [ITEM_DATA_ATTR]: '', ref: composedRefs, children }
                  )
                )
              }
            )
          return (
            (CollectionItemSlot.displayName = ITEM_SLOT_NAME),
            [
              {
                Provider: CollectionProvider,
                Slot: CollectionSlot,
                ItemSlot: CollectionItemSlot,
              },
              function useCollection(scope) {
                const context = useCollectionContext(
                  name + 'CollectionConsumer',
                  scope
                )
                return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
                  const collectionNode = context.collectionRef.current
                  if (!collectionNode) return []
                  const orderedNodes = Array.from(
                    collectionNode.querySelectorAll(
                      '[data-radix-collection-item]'
                    )
                  )
                  return Array.from(context.itemMap.values()).sort(
                    (a, b) =>
                      orderedNodes.indexOf(a.ref.current) -
                      orderedNodes.indexOf(b.ref.current)
                  )
                }, [context.collectionRef, context.itemMap])
              },
              createCollectionScope,
            ]
          )
        }
        var __instanciated = new WeakMap()
        Map
        function at(array, index) {
          if ('at' in Array.prototype)
            return Array.prototype.at.call(array, index)
          const actualIndex = (function toSafeIndex(array, index) {
            const length = array.length,
              relativeIndex = toSafeInteger(index),
              actualIndex =
                relativeIndex >= 0 ? relativeIndex : length + relativeIndex
            return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex
          })(array, index)
          return -1 === actualIndex ? void 0 : array[actualIndex]
        }
        function toSafeInteger(number) {
          return number != number || 0 === number ? 0 : Math.trunc(number)
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs':
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
    '../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.10_@types+react-dom@19.1.6_@types+react@19.1.8__@types_7b46adce8be1bcd7dba6d0dca748f267/node_modules/@radix-ui/react-roving-focus/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          RG: () => createRovingFocusGroupScope,
          bL: () => Root,
          q7: () => Item,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+re_b26c6d948d533107753195e05bbf9d47/node_modules/@radix-ui/react-collection/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus',
          EVENT_OPTIONS = { bubbles: !1, cancelable: !0 },
          GROUP_NAME = 'RovingFocusGroup',
          [Collection, useCollection, createCollectionScope] = (0,
          _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.N)(
            GROUP_NAME
          ),
          [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.A)(GROUP_NAME, [
            createCollectionScope,
          ]),
          [RovingFocusProvider, useRovingFocusContext] =
            createRovingFocusGroupContext(GROUP_NAME),
          RovingFocusGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                Collection.Provider,
                {
                  scope: props.__scopeRovingFocusGroup,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    Collection.Slot,
                    {
                      scope: props.__scopeRovingFocusGroup,
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        RovingFocusGroupImpl,
                        { ...props, ref: forwardedRef }
                      ),
                    }
                  ),
                }
              )
          )
        RovingFocusGroup.displayName = GROUP_NAME
        var RovingFocusGroupImpl =
            react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const {
                    __scopeRovingFocusGroup,
                    orientation,
                    loop = !1,
                    dir,
                    currentTabStopId: currentTabStopIdProp,
                    defaultCurrentTabStopId,
                    onCurrentTabStopIdChange,
                    onEntryFocus,
                    preventScrollOnEntryFocus = !1,
                    ...groupProps
                  } = props,
                  ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                  composedRefs = (0,
                  _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(
                    forwardedRef,
                    ref
                  ),
                  direction = (0,
                  _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.jH)(
                    dir
                  ),
                  [currentTabStopId, setCurrentTabStopId] = (0,
                  _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.i)(
                    {
                      prop: currentTabStopIdProp,
                      defaultProp: defaultCurrentTabStopId ?? null,
                      onChange: onCurrentTabStopIdChange,
                      caller: GROUP_NAME,
                    }
                  ),
                  [isTabbingBackOut, setIsTabbingBackOut] =
                    react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),
                  handleEntryFocus = (0,
                  _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__.c)(
                    onEntryFocus
                  ),
                  getItems = useCollection(__scopeRovingFocusGroup),
                  isClickFocusRef =
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                  [focusableItemsCount, setFocusableItemsCount] =
                    react__WEBPACK_IMPORTED_MODULE_0__.useState(0)
                return (
                  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                    const node = ref.current
                    if (node)
                      return (
                        node.addEventListener(ENTRY_FOCUS, handleEntryFocus),
                        () =>
                          node.removeEventListener(
                            ENTRY_FOCUS,
                            handleEntryFocus
                          )
                      )
                  }, [handleEntryFocus]),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    RovingFocusProvider,
                    {
                      scope: __scopeRovingFocusGroup,
                      orientation,
                      dir: direction,
                      loop,
                      currentTabStopId,
                      onItemFocus:
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                          (tabStopId) => setCurrentTabStopId(tabStopId),
                          [setCurrentTabStopId]
                        ),
                      onItemShiftTab:
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                          () => setIsTabbingBackOut(!0),
                          []
                        ),
                      onFocusableItemAdd:
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                          () =>
                            setFocusableItemsCount(
                              (prevCount) => prevCount + 1
                            ),
                          []
                        ),
                      onFocusableItemRemove:
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                          () =>
                            setFocusableItemsCount(
                              (prevCount) => prevCount - 1
                            ),
                          []
                        ),
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__
                          .sG.div,
                        {
                          tabIndex:
                            isTabbingBackOut || 0 === focusableItemsCount
                              ? -1
                              : 0,
                          'data-orientation': orientation,
                          ...groupProps,
                          ref: composedRefs,
                          style: { outline: 'none', ...props.style },
                          onMouseDown: (0,
                          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                            props.onMouseDown,
                            () => {
                              isClickFocusRef.current = !0
                            }
                          ),
                          onFocus: (0,
                          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                            props.onFocus,
                            (event) => {
                              const isKeyboardFocus = !isClickFocusRef.current
                              if (
                                event.target === event.currentTarget &&
                                isKeyboardFocus &&
                                !isTabbingBackOut
                              ) {
                                const entryFocusEvent = new CustomEvent(
                                  ENTRY_FOCUS,
                                  EVENT_OPTIONS
                                )
                                if (
                                  (event.currentTarget.dispatchEvent(
                                    entryFocusEvent
                                  ),
                                  !entryFocusEvent.defaultPrevented)
                                ) {
                                  const items = getItems().filter(
                                    (item) => item.focusable
                                  )
                                  focusFirst(
                                    [
                                      items.find((item) => item.active),
                                      items.find(
                                        (item) => item.id === currentTabStopId
                                      ),
                                      ...items,
                                    ]
                                      .filter(Boolean)
                                      .map((item) => item.ref.current),
                                    preventScrollOnEntryFocus
                                  )
                                }
                              }
                              isClickFocusRef.current = !1
                            }
                          ),
                          onBlur: (0,
                          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                            props.onBlur,
                            () => setIsTabbingBackOut(!1)
                          ),
                        }
                      ),
                    }
                  )
                )
              }
            ),
          RovingFocusGroupItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeRovingFocusGroup,
                  focusable = !0,
                  active = !1,
                  tabStopId,
                  children,
                  ...itemProps
                } = props,
                autoId = (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.B)(),
                id = tabStopId || autoId,
                context = useRovingFocusContext(
                  'RovingFocusGroupItem',
                  __scopeRovingFocusGroup
                ),
                isCurrentTabStop = context.currentTabStopId === id,
                getItems = useCollection(__scopeRovingFocusGroup),
                {
                  onFocusableItemAdd,
                  onFocusableItemRemove,
                  currentTabStopId,
                } = context
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  if (focusable)
                    return (onFocusableItemAdd(), () => onFocusableItemRemove())
                }, [focusable, onFocusableItemAdd, onFocusableItemRemove]),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  Collection.ItemSlot,
                  {
                    scope: __scopeRovingFocusGroup,
                    id,
                    focusable,
                    active,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.sG
                        .span,
                      {
                        tabIndex: isCurrentTabStop ? 0 : -1,
                        'data-orientation': context.orientation,
                        ...itemProps,
                        ref: forwardedRef,
                        onMouseDown: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                          props.onMouseDown,
                          (event) => {
                            focusable
                              ? context.onItemFocus(id)
                              : event.preventDefault()
                          }
                        ),
                        onFocus: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                          props.onFocus,
                          () => context.onItemFocus(id)
                        ),
                        onKeyDown: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(
                          props.onKeyDown,
                          (event) => {
                            if ('Tab' === event.key && event.shiftKey)
                              return void context.onItemShiftTab()
                            if (event.target !== event.currentTarget) return
                            const focusIntent = (function getFocusIntent(
                              event,
                              orientation,
                              dir
                            ) {
                              const key = (function getDirectionAwareKey(
                                key,
                                dir
                              ) {
                                return 'rtl' !== dir
                                  ? key
                                  : 'ArrowLeft' === key
                                    ? 'ArrowRight'
                                    : 'ArrowRight' === key
                                      ? 'ArrowLeft'
                                      : key
                              })(event.key, dir)
                              return ('vertical' === orientation &&
                                ['ArrowLeft', 'ArrowRight'].includes(key)) ||
                                ('horizontal' === orientation &&
                                  ['ArrowUp', 'ArrowDown'].includes(key))
                                ? void 0
                                : MAP_KEY_TO_FOCUS_INTENT[key]
                            })(event, context.orientation, context.dir)
                            if (void 0 !== focusIntent) {
                              if (
                                event.metaKey ||
                                event.ctrlKey ||
                                event.altKey ||
                                event.shiftKey
                              )
                                return
                              event.preventDefault()
                              let candidateNodes = getItems()
                                .filter((item) => item.focusable)
                                .map((item) => item.ref.current)
                              if ('last' === focusIntent)
                                candidateNodes.reverse()
                              else if (
                                'prev' === focusIntent ||
                                'next' === focusIntent
                              ) {
                                'prev' === focusIntent &&
                                  candidateNodes.reverse()
                                const currentIndex = candidateNodes.indexOf(
                                  event.currentTarget
                                )
                                candidateNodes = context.loop
                                  ? (function wrapArray(array, startIndex) {
                                      return array.map(
                                        (_, index) =>
                                          array[
                                            (startIndex + index) % array.length
                                          ]
                                      )
                                    })(candidateNodes, currentIndex + 1)
                                  : candidateNodes.slice(currentIndex + 1)
                              }
                              setTimeout(() => focusFirst(candidateNodes))
                            }
                          }
                        ),
                        children:
                          'function' == typeof children
                            ? children({
                                isCurrentTabStop,
                                hasTabStop: null != currentTabStopId,
                              })
                            : children,
                      }
                    ),
                  }
                )
              )
            }
          )
        RovingFocusGroupItem.displayName = 'RovingFocusGroupItem'
        var MAP_KEY_TO_FOCUS_INTENT = {
          ArrowLeft: 'prev',
          ArrowUp: 'prev',
          ArrowRight: 'next',
          ArrowDown: 'next',
          PageUp: 'first',
          Home: 'first',
          PageDown: 'last',
          End: 'last',
        }
        function focusFirst(candidates, preventScroll = !1) {
          const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement
          for (const candidate of candidates) {
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return
            if (
              (candidate.focus({ preventScroll }),
              document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
            )
              return
          }
        }
        var Root = RovingFocusGroup,
          Item = RovingFocusGroupItem
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
