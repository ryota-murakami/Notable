/*! For license information please see 472.5028402a.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [472],
  {
    '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          mv: () => ParagraphPlugin,
          T6: () => Plate,
          ww: () => PlateContainer,
          wP: () => PlateContent,
          tc: () => PlateElement,
          nK: () => PlateLeaf,
          Am: () => PlateView,
          SU: () => createPlatePlugin,
          e3: () => createTPlatePlugin,
          iA: () => useEditorComposing,
          fu: () => useEditorReadOnly,
          Q_: () => useEditorRef,
          QR: () => useEditorSelector,
          FI: () => usePlateEditor,
          gO: () => usePluginOption,
        })
        var index_es = __webpack_require__(
            '../../node_modules/.pnpm/slate-react@0.117.4_react-dom@19.1.0_react@19.1.0__react@19.1.0_slate-dom@0.117.4_slate@0.117.2__slate@0.117.2/node_modules/slate-react/dist/index.es.js'
          ),
          react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          __defProp = Object.defineProperty,
          __defProps = Object.defineProperties,
          __getOwnPropDescs = Object.getOwnPropertyDescriptors,
          __getOwnPropSymbols = Object.getOwnPropertySymbols,
          __hasOwnProp = Object.prototype.hasOwnProperty,
          __propIsEnum = Object.prototype.propertyIsEnumerable,
          __defNormalProp = (obj, key, value) =>
            key in obj
              ? __defProp(obj, key, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value,
                })
              : (obj[key] = value),
          BoundHotkeysProxyProvider = (0, react.createContext)(void 0)
        function deepEqual(x, y) {
          return x && y && 'object' == typeof x && 'object' == typeof y
            ? Object.keys(x).length === Object.keys(y).length &&
                Object.keys(x).reduce(
                  (isEqual, key) => isEqual && deepEqual(x[key], y[key]),
                  !0
                )
            : x === y
        }
        var HotkeysContext = (0, react.createContext)({
            activeScopes: [],
            disableScope: () => {},
            enableScope: () => {},
            hotkeys: [],
            toggleScope: () => {},
          }),
          reservedModifierKeywords = new Set([
            'shift',
            'alt',
            'meta',
            'mod',
            'ctrl',
            'control',
          ]),
          mappedKeys = {
            AltLeft: 'alt',
            AltRight: 'alt',
            ControlLeft: 'ctrl',
            ControlRight: 'ctrl',
            MetaLeft: 'meta',
            MetaRight: 'meta',
            OSLeft: 'meta',
            OSRight: 'meta',
            ShiftLeft: 'shift',
            ShiftRight: 'shift',
            down: 'arrowdown',
            esc: 'escape',
            left: 'arrowleft',
            return: 'enter',
            right: 'arrowright',
            up: 'arrowup',
          }
        function mapKey(key) {
          return (mappedKeys[key.trim()] || key.trim())
            .toLowerCase()
            .replace(/key|digit|numpad/, '')
        }
        function parseKeysHookInput(keys, delimiter = ',') {
          return keys.toLowerCase().split(delimiter)
        }
        function parseHotkey(hotkey, splitKey = '+', useKey = !1, description) {
          const keys = hotkey
              .toLocaleLowerCase()
              .split(splitKey)
              .map((k) => mapKey(k)),
            modifiers = {
              alt: keys.includes('alt'),
              ctrl: keys.includes('ctrl') || keys.includes('control'),
              meta: keys.includes('meta'),
              mod: keys.includes('mod'),
              shift: keys.includes('shift'),
              useKey,
            },
            singleCharKeys = keys.filter(
              (k) => !reservedModifierKeywords.has(k)
            )
          return ((a, b) => __defProps(a, __getOwnPropDescs(b)))(
            ((a, b) => {
              for (var prop in b || (b = {}))
                __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop])
              if (__getOwnPropSymbols)
                for (var prop of __getOwnPropSymbols(b))
                  __propIsEnum.call(b, prop) &&
                    __defNormalProp(a, prop, b[prop])
              return a
            })({}, modifiers),
            { description, keys: singleCharKeys }
          )
        }
        ;('undefined' != typeof document &&
          (document.addEventListener('keydown', (e) => {
            void 0 !== e.code && pushToCurrentlyPressedKeys([mapKey(e.code)])
          }),
          document.addEventListener('keyup', (e) => {
            void 0 !== e.code &&
              removeFromCurrentlyPressedKeys([mapKey(e.code)])
          })),
          'undefined' != typeof window &&
            window.addEventListener('blur', () => {
              currentlyPressedKeys.clear()
            }))
        var currentlyPressedKeys = new Set()
        function isReadonlyArray(value) {
          return Array.isArray(value)
        }
        function pushToCurrentlyPressedKeys(key) {
          const hotkeyArray = Array.isArray(key) ? key : [key]
          ;(currentlyPressedKeys.has('meta') &&
            currentlyPressedKeys.forEach(
              (key2) =>
                !(function isHotkeyModifier(key) {
                  return reservedModifierKeywords.has(key)
                })(key2) && currentlyPressedKeys.delete(key2.toLowerCase())
            ),
            hotkeyArray.forEach((hotkey) =>
              currentlyPressedKeys.add(hotkey.toLowerCase())
            ))
        }
        function removeFromCurrentlyPressedKeys(key) {
          const hotkeyArray = Array.isArray(key) ? key : [key]
          'meta' === key
            ? currentlyPressedKeys.clear()
            : hotkeyArray.forEach((hotkey) =>
                currentlyPressedKeys.delete(hotkey.toLowerCase())
              )
        }
        var Key_Alt = 'Alt',
          Key_Mod = 'Mod',
          Key_Shift = 'Shift'
        function isHotkeyEnabledOnTag({ target }, enabledOnTags = !1) {
          const targetTagName = target && target.tagName
          return isReadonlyArray(enabledOnTags)
            ? Boolean(
                targetTagName &&
                  (null == enabledOnTags
                    ? void 0
                    : enabledOnTags.some(
                        (tag) =>
                          tag.toLowerCase() === targetTagName.toLowerCase()
                      ))
              )
            : Boolean(targetTagName && enabledOnTags && enabledOnTags)
        }
        var isHotkeyMatchingKeyboardEvent = (
            e,
            hotkey,
            ignoreModifiers = !1
          ) => {
            const { alt, ctrl, keys, meta, mod, shift, useKey } = hotkey,
              {
                altKey,
                code,
                ctrlKey,
                key: producedKey,
                metaKey,
                shiftKey,
              } = e,
              mappedCode = mapKey(code)
            if (
              useKey &&
              1 === (null == keys ? void 0 : keys.length) &&
              keys.includes(producedKey)
            )
              return !0
            if (
              !(null == keys ? void 0 : keys.includes(mappedCode)) &&
              ![
                'alt',
                'control',
                'ctrl',
                'meta',
                'os',
                'shift',
                'unknown',
              ].includes(mappedCode)
            )
              return !1
            if (!ignoreModifiers) {
              if (alt !== altKey && 'alt' !== mappedCode) return !1
              if (shift !== shiftKey && 'shift' !== mappedCode) return !1
              if (mod) {
                if (!metaKey && !ctrlKey) return !1
              } else {
                if (
                  meta !== metaKey &&
                  'meta' !== mappedCode &&
                  'os' !== mappedCode
                )
                  return !1
                if (
                  ctrl !== ctrlKey &&
                  'ctrl' !== mappedCode &&
                  'control' !== mappedCode
                )
                  return !1
              }
            }
            return (
              !(!keys || 1 !== keys.length || !keys.includes(mappedCode)) ||
              (keys
                ? (function isHotkeyPressed(key, delimiter = ',') {
                    return (
                      isReadonlyArray(key) ? key : key.split(delimiter)
                    ).every((hotkey) =>
                      currentlyPressedKeys.has(hotkey.trim().toLowerCase())
                    )
                  })(keys)
                : !keys)
            )
          },
          stopPropagation = (e) => {
            ;(e.stopPropagation(),
              e.preventDefault(),
              e.stopImmediatePropagation())
          },
          useSafeLayoutEffect =
            'undefined' == typeof window
              ? react.useEffect
              : react.useLayoutEffect
        function useHotkeys(keys, callback, options, dependencies) {
          const [ref, setRef] = (0, react.useState)(null),
            hasTriggeredRef = (0, react.useRef)(!1),
            _options = Array.isArray(options)
              ? Array.isArray(dependencies)
                ? void 0
                : dependencies
              : options,
            _keys = (0, react.useMemo)(
              () =>
                Array.isArray(keys) && keys.length > 0 && Array.isArray(keys[0])
                  ? keys
                      .map((keyCombo) =>
                        keyCombo
                          .map((k) => k.toString())
                          .join(
                            (null == _options ? void 0 : _options.splitKey) ||
                              '+'
                          )
                      )
                      .join(
                        (null == _options ? void 0 : _options.delimiter) || ','
                      )
                  : Array.isArray(keys)
                    ? keys.join(
                        (null == _options ? void 0 : _options.delimiter) || ','
                      )
                    : keys,
              [
                keys,
                null == _options ? void 0 : _options.splitKey,
                null == _options ? void 0 : _options.delimiter,
              ]
            ),
            _deps = Array.isArray(options)
              ? options
              : Array.isArray(dependencies)
                ? dependencies
                : void 0,
            memoisedCB = (0, react.useCallback)(
              callback,
              null != _deps ? _deps : []
            ),
            cbRef = (0, react.useRef)(memoisedCB)
          cbRef.current = _deps ? memoisedCB : callback
          const memoisedOptions = (function useDeepEqualMemo(value) {
              const ref = (0, react.useRef)()
              return (
                deepEqual(ref.current, value) || (ref.current = value),
                ref.current
              )
            })(_options),
            { activeScopes } = (0, react.useContext)(HotkeysContext),
            proxy = (0, react.useContext)(BoundHotkeysProxyProvider)
          return (
            useSafeLayoutEffect(() => {
              if (
                !1 ===
                  (null == memoisedOptions
                    ? void 0
                    : memoisedOptions.enabled) ||
                !(function isScopeActive(activeScopes, scopes) {
                  return 0 === activeScopes.length && scopes
                    ? (console.warn(
                        'A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'
                      ),
                      !0)
                    : !scopes ||
                        activeScopes.some((scope) => scopes.includes(scope)) ||
                        activeScopes.includes('*')
                })(
                  activeScopes,
                  null == memoisedOptions ? void 0 : memoisedOptions.scopes
                )
              )
                return
              const listener = (e, isKeyUp = !1) => {
                  var _a
                  if (
                    !(function isKeyboardEventTriggeredByInput(ev) {
                      return isHotkeyEnabledOnTag(ev, [
                        'input',
                        'textarea',
                        'select',
                      ])
                    })(e) ||
                    isHotkeyEnabledOnTag(
                      e,
                      null == memoisedOptions
                        ? void 0
                        : memoisedOptions.enableOnFormTags
                    )
                  ) {
                    if (null !== ref) {
                      const rootNode = ref.getRootNode()
                      if (
                        (rootNode instanceof Document ||
                          rootNode instanceof ShadowRoot) &&
                        rootNode.activeElement !== ref &&
                        !ref.contains(rootNode.activeElement)
                      )
                        return void stopPropagation(e)
                    }
                    ;((null == (_a = e.target)
                      ? void 0
                      : _a.isContentEditable) &&
                      !(null == memoisedOptions
                        ? void 0
                        : memoisedOptions.enableOnContentEditable)) ||
                      parseKeysHookInput(
                        _keys,
                        null == memoisedOptions
                          ? void 0
                          : memoisedOptions.delimiter
                      ).forEach((key) => {
                        var _a2, _b, _c
                        const hotkey = parseHotkey(
                          key,
                          null == memoisedOptions
                            ? void 0
                            : memoisedOptions.splitKey,
                          null == memoisedOptions
                            ? void 0
                            : memoisedOptions.useKey
                        )
                        if (
                          isHotkeyMatchingKeyboardEvent(
                            e,
                            hotkey,
                            null == memoisedOptions
                              ? void 0
                              : memoisedOptions.ignoreModifiers
                          ) ||
                          (null == (_a2 = hotkey.keys)
                            ? void 0
                            : _a2.includes('*'))
                        ) {
                          if (
                            (null ==
                              (_b =
                                null == memoisedOptions
                                  ? void 0
                                  : memoisedOptions.ignoreEventWhenPrevented) ||
                              _b) &&
                            e.defaultPrevented
                          )
                            return
                          if (
                            null ==
                            (_c =
                              null == memoisedOptions
                                ? void 0
                                : memoisedOptions.ignoreEventWhen)
                              ? void 0
                              : _c.call(memoisedOptions, e)
                          )
                            return
                          if (isKeyUp && hasTriggeredRef.current) return
                          if (
                            !(function isHotkeyEnabled(e, hotkey, enabled) {
                              return 'function' == typeof enabled
                                ? enabled(e, hotkey)
                                : !0 === enabled || void 0 === enabled
                            })(
                              e,
                              hotkey,
                              null == memoisedOptions
                                ? void 0
                                : memoisedOptions.enabled
                            )
                          )
                            return void stopPropagation(e)
                          ;(cbRef.current(e, hotkey),
                            (function maybePreventDefault(
                              e,
                              hotkey,
                              preventDefault
                            ) {
                              ;(('function' == typeof preventDefault &&
                                preventDefault(e, hotkey)) ||
                                !0 === preventDefault) &&
                                e.preventDefault()
                            })(
                              e,
                              hotkey,
                              null == memoisedOptions
                                ? void 0
                                : memoisedOptions.preventDefault
                            ),
                            isKeyUp || (hasTriggeredRef.current = !0))
                        }
                      })
                  }
                },
                handleKeyDown = (event) => {
                  void 0 !== event.code &&
                    (pushToCurrentlyPressedKeys(mapKey(event.code)),
                    ((void 0 ===
                      (null == memoisedOptions
                        ? void 0
                        : memoisedOptions.keydown) &&
                      !0 !==
                        (null == memoisedOptions
                          ? void 0
                          : memoisedOptions.keyup)) ||
                      (null == memoisedOptions
                        ? void 0
                        : memoisedOptions.keydown)) &&
                      listener(event))
                },
                handleKeyUp = (event) => {
                  void 0 !== event.code &&
                    (removeFromCurrentlyPressedKeys(mapKey(event.code)),
                    (hasTriggeredRef.current = !1),
                    (null == memoisedOptions
                      ? void 0
                      : memoisedOptions.keyup) && listener(event, !0))
                },
                domNode =
                  ref ||
                  (null == _options ? void 0 : _options.document) ||
                  document
              return (
                domNode.addEventListener('keyup', handleKeyUp),
                domNode.addEventListener('keydown', handleKeyDown),
                proxy &&
                  parseKeysHookInput(
                    _keys,
                    null == memoisedOptions ? void 0 : memoisedOptions.delimiter
                  ).forEach((key) =>
                    proxy.addHotkey(
                      parseHotkey(
                        key,
                        null == memoisedOptions
                          ? void 0
                          : memoisedOptions.splitKey,
                        null == memoisedOptions
                          ? void 0
                          : memoisedOptions.useKey,
                        null == memoisedOptions
                          ? void 0
                          : memoisedOptions.description
                      )
                    )
                  ),
                () => {
                  ;(domNode.removeEventListener('keyup', handleKeyUp),
                    domNode.removeEventListener('keydown', handleKeyDown),
                    proxy &&
                      parseKeysHookInput(
                        _keys,
                        null == memoisedOptions
                          ? void 0
                          : memoisedOptions.delimiter
                      ).forEach((key) =>
                        proxy.removeHotkey(
                          parseHotkey(
                            key,
                            null == memoisedOptions
                              ? void 0
                              : memoisedOptions.splitKey,
                            null == memoisedOptions
                              ? void 0
                              : memoisedOptions.useKey,
                            null == memoisedOptions
                              ? void 0
                              : memoisedOptions.description
                          )
                        )
                      ))
                }
              )
            }, [ref, _keys, memoisedOptions, activeScopes]),
            setRef
          )
        }
        var IS_APPLE =
            'undefined' != typeof navigator &&
            navigator.userAgent.includes('Mac OS X'),
          dist_isDefined = (arg) => {
            return !(
              ((obj) => void 0 === obj)((obj = arg)) ||
              ((obj) => null === obj)(obj)
            )
            var obj
          }
        function bindFirst(fn, firstArg) {
          return (...args) => fn(firstArg, ...args)
        }
        var vanilla_console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
        let keyCount = 0
        function vanilla_atom(read, write) {
          const key = 'atom' + ++keyCount,
            config = { toString: () => key }
          return (
            'function' == typeof read
              ? (config.read = read)
              : ((config.init = read),
                (config.read = defaultRead),
                (config.write = defaultWrite)),
            write && (config.write = write),
            config
          )
        }
        function defaultRead(get) {
          return get(this)
        }
        function defaultWrite(get, set, arg) {
          return set(this, 'function' == typeof arg ? arg(get(this)) : arg)
        }
        const isSelfAtom = (atom, a) =>
            atom.unstable_is ? atom.unstable_is(a) : a === atom,
          hasInitialValue = (atom) => 'init' in atom,
          isActuallyWritableAtom = (atom) => !!atom.write,
          cancelPromiseMap = new WeakMap(),
          cancelPromise = (promise, next) => {
            const cancel = cancelPromiseMap.get(promise)
            cancel && (cancelPromiseMap.delete(promise), cancel(next))
          },
          resolvePromise = (promise, value) => {
            ;((promise.status = 'fulfilled'), (promise.value = value))
          },
          rejectPromise = (promise, e) => {
            ;((promise.status = 'rejected'), (promise.reason = e))
          },
          isEqualAtomValue = (a, b) =>
            !!a && 'v' in a && 'v' in b && Object.is(a.v, b.v),
          isEqualAtomError = (a, b) =>
            !!a && 'e' in a && 'e' in b && Object.is(a.e, b.e),
          hasPromiseAtomValue = (a) =>
            !!a && 'v' in a && a.v instanceof Promise,
          returnAtomValue = (atomState) => {
            if ('e' in atomState) throw atomState.e
            return atomState.v
          },
          createStore$1 = () => {
            const atomStateMap = new WeakMap(),
              mountedMap = new WeakMap(),
              pendingStack = [],
              pendingMap = new WeakMap()
            let devListenersRev2, mountedAtoms
            ;((devListenersRev2 = new Set()), (mountedAtoms = new Set()))
            const getAtomState = (atom) => atomStateMap.get(atom),
              addPendingDependent = (atom, atomState) => {
                atomState.d.forEach((_, a) => {
                  if (!pendingMap.has(a)) {
                    const aState = getAtomState(a)
                    ;(pendingMap.set(a, [aState, new Set()]),
                      aState && addPendingDependent(a, aState))
                  }
                  pendingMap.get(a)[1].add(atom)
                })
              },
              setAtomState = (atom, atomState) => {
                var _a
                Object.freeze(atomState)
                const prevAtomState = getAtomState(atom)
                if (
                  (atomStateMap.set(atom, atomState),
                  null == (_a = pendingStack[pendingStack.length - 1]) ||
                    _a.add(atom),
                  pendingMap.has(atom) ||
                    (pendingMap.set(atom, [prevAtomState, new Set()]),
                    addPendingDependent(atom, atomState)),
                  hasPromiseAtomValue(prevAtomState))
                ) {
                  const next =
                    'v' in atomState
                      ? atomState.v instanceof Promise
                        ? atomState.v
                        : Promise.resolve(atomState.v)
                      : Promise.reject(atomState.e)
                  prevAtomState.v !== next &&
                    cancelPromise(prevAtomState.v, next)
                }
              },
              updateDependencies = (
                atom,
                nextAtomState,
                nextDependencies,
                keepPreviousDependencies
              ) => {
                const dependencies = new Map(
                  keepPreviousDependencies ? nextAtomState.d : null
                )
                let changed = !1
                ;(nextDependencies.forEach((aState, a) => {
                  ;(!aState && isSelfAtom(atom, a) && (aState = nextAtomState),
                    aState
                      ? (dependencies.set(a, aState),
                        nextAtomState.d.get(a) !== aState && (changed = !0))
                      : vanilla_console.warn('[Bug] atom state not found'))
                }),
                  (changed || nextAtomState.d.size !== dependencies.size) &&
                    (nextAtomState.d = dependencies))
              },
              setAtomValue = (
                atom,
                value,
                nextDependencies,
                keepPreviousDependencies
              ) => {
                const prevAtomState = getAtomState(atom),
                  nextAtomState = {
                    d:
                      (null == prevAtomState ? void 0 : prevAtomState.d) ||
                      new Map(),
                    v: value,
                  }
                if (
                  (nextDependencies &&
                    updateDependencies(
                      atom,
                      nextAtomState,
                      nextDependencies,
                      keepPreviousDependencies
                    ),
                  isEqualAtomValue(prevAtomState, nextAtomState) &&
                    prevAtomState.d === nextAtomState.d)
                )
                  return prevAtomState
                if (
                  hasPromiseAtomValue(prevAtomState) &&
                  hasPromiseAtomValue(nextAtomState) &&
                  ((a, b) =>
                    'v' in a && 'v' in b && a.v.orig && a.v.orig === b.v.orig)(
                    prevAtomState,
                    nextAtomState
                  )
                ) {
                  if (prevAtomState.d === nextAtomState.d) return prevAtomState
                  nextAtomState.v = prevAtomState.v
                }
                return (setAtomState(atom, nextAtomState), nextAtomState)
              },
              setAtomValueOrPromise = (
                atom,
                valueOrPromise,
                nextDependencies,
                abortPromise
              ) => {
                if (
                  'function' ==
                  typeof (null == (x = valueOrPromise) ? void 0 : x.then)
                ) {
                  let continuePromise
                  const updatePromiseDependencies = () => {
                      const prevAtomState = getAtomState(atom)
                      if (
                        !hasPromiseAtomValue(prevAtomState) ||
                        prevAtomState.v !== promise
                      )
                        return
                      const nextAtomState = setAtomValue(
                        atom,
                        promise,
                        nextDependencies
                      )
                      mountedMap.has(atom) &&
                        prevAtomState.d !== nextAtomState.d &&
                        mountDependencies(atom, nextAtomState, prevAtomState.d)
                    },
                    promise = new Promise((resolve, reject) => {
                      let settled = !1
                      ;(valueOrPromise.then(
                        (v) => {
                          settled ||
                            ((settled = !0),
                            resolvePromise(promise, v),
                            resolve(v),
                            updatePromiseDependencies())
                        },
                        (e) => {
                          settled ||
                            ((settled = !0),
                            rejectPromise(promise, e),
                            reject(e),
                            updatePromiseDependencies())
                        }
                      ),
                        (continuePromise = (next) => {
                          settled ||
                            ((settled = !0),
                            next.then(
                              (v) => resolvePromise(promise, v),
                              (e) => rejectPromise(promise, e)
                            ),
                            resolve(next))
                        }))
                    })
                  return (
                    (promise.orig = valueOrPromise),
                    (promise.status = 'pending'),
                    ((promise, cancel) => {
                      ;(cancelPromiseMap.set(promise, cancel),
                        promise
                          .catch(() => {})
                          .finally(() => cancelPromiseMap.delete(promise)))
                    })(promise, (next) => {
                      next &&
                        (continuePromise(next),
                        null == abortPromise || abortPromise())
                    }),
                    setAtomValue(atom, promise, nextDependencies, !0)
                  )
                }
                var x
                return setAtomValue(atom, valueOrPromise, nextDependencies)
              },
              readAtomState = (atom, force) => {
                const atomState = getAtomState(atom)
                if (!(null == force ? void 0 : force(atom)) && atomState) {
                  if (mountedMap.has(atom)) return atomState
                  if (
                    Array.from(atomState.d).every(([a, s]) => {
                      if (a === atom) return !0
                      const aState = readAtomState(a, force)
                      return aState === s || isEqualAtomValue(aState, s)
                    })
                  )
                    return atomState
                }
                const nextDependencies = new Map()
                let isSync = !0
                const getter = (a) => {
                  if (isSelfAtom(atom, a)) {
                    const aState2 = getAtomState(a)
                    if (aState2)
                      return (
                        nextDependencies.set(a, aState2),
                        returnAtomValue(aState2)
                      )
                    if (hasInitialValue(a))
                      return (nextDependencies.set(a, void 0), a.init)
                    throw new Error('no atom init')
                  }
                  const aState = readAtomState(a, force)
                  return (
                    nextDependencies.set(a, aState),
                    returnAtomValue(aState)
                  )
                }
                let controller, setSelf
                const options = {
                  get signal() {
                    return (
                      controller || (controller = new AbortController()),
                      controller.signal
                    )
                  },
                  get setSelf() {
                    return (
                      isActuallyWritableAtom(atom) ||
                        vanilla_console.warn(
                          'setSelf function cannot be used with read-only atom'
                        ),
                      !setSelf &&
                        isActuallyWritableAtom(atom) &&
                        (setSelf = (...args) => {
                          if (
                            (isSync &&
                              vanilla_console.warn(
                                'setSelf function cannot be called in sync'
                              ),
                            !isSync)
                          )
                            return writeAtom(atom, ...args)
                        }),
                      setSelf
                    )
                  },
                }
                try {
                  const valueOrPromise = atom.read(getter, options)
                  return setAtomValueOrPromise(
                    atom,
                    valueOrPromise,
                    nextDependencies,
                    () => (null == controller ? void 0 : controller.abort())
                  )
                } catch (error) {
                  return ((atom, error, nextDependencies) => {
                    const prevAtomState = getAtomState(atom),
                      nextAtomState = {
                        d:
                          (null == prevAtomState ? void 0 : prevAtomState.d) ||
                          new Map(),
                        e: error,
                      }
                    return (
                      nextDependencies &&
                        updateDependencies(
                          atom,
                          nextAtomState,
                          nextDependencies
                        ),
                      isEqualAtomError(prevAtomState, nextAtomState) &&
                      prevAtomState.d === nextAtomState.d
                        ? prevAtomState
                        : (setAtomState(atom, nextAtomState), nextAtomState)
                    )
                  })(atom, error, nextDependencies)
                } finally {
                  isSync = !1
                }
              },
              readAtom = (atom) => returnAtomValue(readAtomState(atom)),
              recomputeDependents = (atom) => {
                const topsortedAtoms = new Array(),
                  markedAtoms = new Set(),
                  visit = (n) => {
                    if (!markedAtoms.has(n)) {
                      markedAtoms.add(n)
                      for (const m of ((a) => {
                        var _a, _b
                        const dependents = new Set(
                          null == (_a = mountedMap.get(a)) ? void 0 : _a.t
                        )
                        return (
                          null == (_b = pendingMap.get(a)) ||
                            _b[1].forEach((dependent) => {
                              dependents.add(dependent)
                            }),
                          dependents
                        )
                      })(n))
                        n !== m && visit(m)
                      topsortedAtoms.push(n)
                    }
                  }
                visit(atom)
                const changedAtoms = new Set([atom]),
                  isMarked = (a) => markedAtoms.has(a)
                for (let i = topsortedAtoms.length - 1; i >= 0; --i) {
                  const a = topsortedAtoms[i],
                    prevAtomState = getAtomState(a)
                  if (!prevAtomState) continue
                  let hasChangedDeps = !1
                  for (const dep of prevAtomState.d.keys())
                    if (dep !== a && changedAtoms.has(dep)) {
                      hasChangedDeps = !0
                      break
                    }
                  if (hasChangedDeps) {
                    const nextAtomState = readAtomState(a, isMarked)
                    ;(addPendingDependent(a, nextAtomState),
                      isEqualAtomValue(prevAtomState, nextAtomState) ||
                        changedAtoms.add(a))
                  }
                  markedAtoms.delete(a)
                }
              },
              writeAtomState = (atom, ...args) => {
                const result = atom.write(
                  (a) => returnAtomValue(readAtomState(a)),
                  (a, ...args2) => {
                    const isSync = pendingStack.length > 0
                    let r
                    if (
                      (isSync || pendingStack.push(new Set([a])),
                      isSelfAtom(atom, a))
                    ) {
                      if (!hasInitialValue(a))
                        throw new Error('atom not writable')
                      const prevAtomState = getAtomState(a),
                        nextAtomState = setAtomValueOrPromise(a, args2[0])
                      isEqualAtomValue(prevAtomState, nextAtomState) ||
                        recomputeDependents(a)
                    } else r = writeAtomState(a, ...args2)
                    if (!isSync) {
                      const flushed = flushPending(pendingStack.pop())
                      devListenersRev2.forEach((l) =>
                        l({ type: 'async-write', flushed })
                      )
                    }
                    return r
                  },
                  ...args
                )
                return result
              },
              writeAtom = (atom, ...args) => {
                pendingStack.push(new Set([atom]))
                const result = writeAtomState(atom, ...args),
                  flushed = flushPending(pendingStack.pop())
                return (
                  devListenersRev2.forEach((l) =>
                    l({ type: 'write', flushed })
                  ),
                  result
                )
              },
              mountAtom = (atom, initialDependent, onMountQueue) => {
                var _a
                const existingMount = mountedMap.get(atom)
                if (existingMount)
                  return (
                    initialDependent && existingMount.t.add(initialDependent),
                    existingMount
                  )
                const queue = onMountQueue || []
                ;(null == (_a = getAtomState(atom)) ||
                  _a.d.forEach((_, a) => {
                    a !== atom && mountAtom(a, atom, queue)
                  }),
                  readAtomState(atom))
                const mounted = {
                  t: new Set(initialDependent && [initialDependent]),
                  l: new Set(),
                }
                if (
                  (mountedMap.set(atom, mounted),
                  mountedAtoms.add(atom),
                  isActuallyWritableAtom(atom) && atom.onMount)
                ) {
                  const { onMount } = atom
                  queue.push(() => {
                    const onUnmount = onMount((...args) =>
                      writeAtom(atom, ...args)
                    )
                    onUnmount && (mounted.u = onUnmount)
                  })
                }
                return (onMountQueue || queue.forEach((f) => f()), mounted)
              },
              tryUnmountAtom = (atom, mounted) => {
                if (
                  !((atom, mounted) =>
                    !mounted.l.size &&
                    (!mounted.t.size ||
                      (1 === mounted.t.size && mounted.t.has(atom))))(
                    atom,
                    mounted
                  )
                )
                  return
                const onUnmount = mounted.u
                ;(onUnmount && onUnmount(),
                  mountedMap.delete(atom),
                  mountedAtoms.delete(atom))
                const atomState = getAtomState(atom)
                atomState
                  ? (hasPromiseAtomValue(atomState) &&
                      cancelPromise(atomState.v),
                    atomState.d.forEach((_, a) => {
                      if (a !== atom) {
                        const mountedDep = mountedMap.get(a)
                        mountedDep &&
                          (mountedDep.t.delete(atom),
                          tryUnmountAtom(a, mountedDep))
                      }
                    }))
                  : vanilla_console.warn(
                      '[Bug] could not find atom state to unmount',
                      atom
                    )
              },
              mountDependencies = (atom, atomState, prevDependencies) => {
                const depSet = new Set(atomState.d.keys()),
                  maybeUnmountAtomSet = new Set()
                ;(null == prevDependencies ||
                  prevDependencies.forEach((_, a) => {
                    if (depSet.has(a)) return void depSet.delete(a)
                    maybeUnmountAtomSet.add(a)
                    const mounted = mountedMap.get(a)
                    mounted && mounted.t.delete(atom)
                  }),
                  depSet.forEach((a) => {
                    mountAtom(a, atom)
                  }),
                  maybeUnmountAtomSet.forEach((a) => {
                    const mounted = mountedMap.get(a)
                    mounted && tryUnmountAtom(a, mounted)
                  }))
              },
              flushPending = (pendingAtoms) => {
                let flushed
                flushed = new Set()
                const pending = [],
                  collectPending = (pendingAtom) => {
                    var _a
                    if (!pendingMap.has(pendingAtom)) return
                    const [prevAtomState, dependents] =
                      pendingMap.get(pendingAtom)
                    ;(pendingMap.delete(pendingAtom),
                      pending.push([pendingAtom, prevAtomState]),
                      dependents.forEach(collectPending),
                      null == (_a = getAtomState(pendingAtom)) ||
                        _a.d.forEach((_, a) => collectPending(a)))
                  }
                return (
                  pendingAtoms.forEach(collectPending),
                  pending.forEach(([atom, prevAtomState]) => {
                    const atomState = getAtomState(atom)
                    if (atomState) {
                      if (atomState !== prevAtomState) {
                        const mounted = mountedMap.get(atom)
                        ;(mounted &&
                          atomState.d !==
                            (null == prevAtomState
                              ? void 0
                              : prevAtomState.d) &&
                          mountDependencies(
                            atom,
                            atomState,
                            null == prevAtomState ? void 0 : prevAtomState.d
                          ),
                          mounted &&
                            (hasPromiseAtomValue(prevAtomState) ||
                              (!isEqualAtomValue(prevAtomState, atomState) &&
                                !isEqualAtomError(prevAtomState, atomState))) &&
                            (mounted.l.forEach((listener) => listener()),
                            flushed.add(atom)))
                      }
                    } else vanilla_console.warn('[Bug] no atom state to flush')
                  }),
                  flushed
                )
              },
              subscribeAtom = (atom, listener) => {
                const mounted = mountAtom(atom),
                  flushed = flushPending([atom]),
                  listeners = mounted.l
                return (
                  listeners.add(listener),
                  devListenersRev2.forEach((l) => l({ type: 'sub', flushed })),
                  () => {
                    ;(listeners.delete(listener),
                      tryUnmountAtom(atom, mounted),
                      devListenersRev2.forEach((l) => l({ type: 'unsub' })))
                  }
                )
              }
            return {
              get: readAtom,
              set: writeAtom,
              sub: subscribeAtom,
              dev_subscribe_store: (l) => (
                devListenersRev2.add(l),
                () => {
                  devListenersRev2.delete(l)
                }
              ),
              dev_get_mounted_atoms: () => mountedAtoms.values(),
              dev_get_atom_state: (a) => atomStateMap.get(a),
              dev_get_mounted: (a) => mountedMap.get(a),
              dev_restore_atoms: (values) => {
                pendingStack.push(new Set())
                for (const [atom, valueOrPromise] of values)
                  hasInitialValue(atom) &&
                    (setAtomValueOrPromise(atom, valueOrPromise),
                    recomputeDependents(atom))
                const flushed = flushPending(pendingStack.pop())
                devListenersRev2.forEach((l) => l({ type: 'restore', flushed }))
              },
            }
          }
        let defaultStore
        Symbol('CONTINUE_PROMISE')
        const vanilla_createStore = createStore$1,
          getDefaultStore = () => (
            defaultStore ||
              ((defaultStore = createStore$1()),
              globalThis.__JOTAI_DEFAULT_STORE__ ||
                (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore),
              globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore &&
                vanilla_console.warn(
                  'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044'
                )),
            defaultStore
          ),
          StoreContext = (0, react.createContext)(void 0),
          useStore = (options) => {
            const store = (0, react.useContext)(StoreContext)
            return (
              (null == options ? void 0 : options.store) ||
              store ||
              getDefaultStore()
            )
          },
          use =
            react.use ||
            ((promise) => {
              if ('pending' === promise.status) throw promise
              if ('fulfilled' === promise.status) return promise.value
              throw 'rejected' === promise.status
                ? promise.reason
                : ((promise.status = 'pending'),
                  promise.then(
                    (v) => {
                      ;((promise.status = 'fulfilled'), (promise.value = v))
                    },
                    (e) => {
                      ;((promise.status = 'rejected'), (promise.reason = e))
                    }
                  ),
                  promise)
            })
        function useAtomValue(atom, options) {
          const store = useStore(options),
            [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] =
              (0, react.useReducer)(
                (prev) => {
                  const nextValue = store.get(atom)
                  return Object.is(prev[0], nextValue) &&
                    prev[1] === store &&
                    prev[2] === atom
                    ? prev
                    : [nextValue, store, atom]
                },
                void 0,
                () => [store.get(atom), store, atom]
              )
          let value = valueFromReducer
          ;(storeFromReducer === store && atomFromReducer === atom) ||
            (rerender(), (value = store.get(atom)))
          const delay = null == options ? void 0 : options.delay
          return (
            (0, react.useEffect)(() => {
              const unsub = store.sub(atom, () => {
                'number' != typeof delay
                  ? rerender()
                  : setTimeout(rerender, delay)
              })
              return (rerender(), unsub)
            }, [store, atom, delay]),
            (0, react.useDebugValue)(value),
            'function' == typeof (null == (x = value) ? void 0 : x.then)
              ? use(value)
              : value
          )
          var x
        }
        function react_useSetAtom(atom, options) {
          const store = useStore(options)
          return (0, react.useCallback)(
            (...args) => {
              if (!('write' in atom)) throw new Error('not writable atom')
              return store.set(atom, ...args)
            },
            [store, atom]
          )
        }
        __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
        const hydratedMap = new WeakMap()
        const getHydratedSet = (store) => {
          let hydratedSet = hydratedMap.get(store)
          return (
            hydratedSet ||
              ((hydratedSet = new WeakSet()),
              hydratedMap.set(store, hydratedSet)),
            hydratedSet
          )
        }
        var vanilla_utils_console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
        Symbol('RESET')
        const getCached$2 = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k),
          cache1$3 = new WeakMap()
        function selectAtom(anAtom, selector, equalityFn = Object.is) {
          return ((create, dep1, dep2, dep3) => {
            const cache2 = getCached$2(() => new WeakMap(), cache1$3, dep1),
              cache3 = getCached$2(() => new WeakMap(), cache2, dep2)
            return getCached$2(create, cache3, dep3)
          })(
            () => {
              const EMPTY = Symbol(),
                derivedAtom = vanilla_atom((get) => {
                  const prev = get(derivedAtom)
                  return (([value, prevSlice]) => {
                    if (prevSlice === EMPTY) return selector(value)
                    const slice = selector(value, prevSlice)
                    return equalityFn(prevSlice, slice) ? prevSlice : slice
                  })([get(anAtom), prev])
                })
              return ((derivedAtom.init = EMPTY), derivedAtom)
            },
            anAtom,
            selector,
            equalityFn
          )
        }
        const utils_isPromiseLike = (x) =>
          'function' == typeof (null == x ? void 0 : x.then)
        ;(function createJSONStorage(
          getStringStorage = () => {
            try {
              return window.localStorage
            } catch (e) {
              return void (
                'undefined' != typeof window && vanilla_utils_console.warn(e)
              )
            }
          },
          options
        ) {
          var _a
          let lastStr, lastValue
          const storage = {
            getItem: (key, initialValue) => {
              var _a2, _b
              const parse = (str2) => {
                  if (lastStr !== (str2 = str2 || '')) {
                    try {
                      lastValue = JSON.parse(
                        str2,
                        null == options ? void 0 : options.reviver
                      )
                    } catch (e) {
                      return initialValue
                    }
                    lastStr = str2
                  }
                  return lastValue
                },
                str =
                  null !=
                  (_b =
                    null == (_a2 = getStringStorage())
                      ? void 0
                      : _a2.getItem(key))
                    ? _b
                    : null
              return utils_isPromiseLike(str) ? str.then(parse) : parse(str)
            },
            setItem: (key, newValue) => {
              var _a2
              return null == (_a2 = getStringStorage())
                ? void 0
                : _a2.setItem(
                    key,
                    JSON.stringify(
                      newValue,
                      null == options ? void 0 : options.replacer
                    )
                  )
            },
            removeItem: (key) => {
              var _a2
              return null == (_a2 = getStringStorage())
                ? void 0
                : _a2.removeItem(key)
            },
          }
          let subscriber
          try {
            subscriber =
              null == (_a = getStringStorage()) ? void 0 : _a.subscribe
          } catch (e) {}
          var subscriber2
          return (
            !subscriber &&
              'undefined' != typeof window &&
              'function' == typeof window.addEventListener &&
              window.Storage &&
              (subscriber = (key, callback) => {
                if (!(getStringStorage() instanceof window.Storage))
                  return () => {}
                const storageEventCallback = (e) => {
                  e.storageArea === getStringStorage() &&
                    e.key === key &&
                    callback(e.newValue)
                }
                return (
                  window.addEventListener('storage', storageEventCallback),
                  () => {
                    window.removeEventListener('storage', storageEventCallback)
                  }
                )
              }),
            subscriber &&
              (storage.subscribe =
                ((subscriber2 = subscriber),
                (key, callback, initialValue) =>
                  subscriber2(key, (v) => {
                    let newValue
                    try {
                      newValue = JSON.parse(v || '')
                    } catch (e) {
                      newValue = initialValue
                    }
                    callback(newValue)
                  }))),
            storage
          )
        })()
        var dist_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          dist_defProp = Object.defineProperty,
          dist_getOwnPropSymbols = Object.getOwnPropertySymbols,
          dist_hasOwnProp = Object.prototype.hasOwnProperty,
          dist_propIsEnum = Object.prototype.propertyIsEnumerable,
          dist_defNormalProp = (obj, key, value) =>
            key in obj
              ? dist_defProp(obj, key, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value,
                })
              : (obj[key] = value),
          dist_spreadValues = (a, b) => {
            for (var prop in b || (b = {}))
              dist_hasOwnProp.call(b, prop) &&
                dist_defNormalProp(a, prop, b[prop])
            if (dist_getOwnPropSymbols)
              for (var prop of dist_getOwnPropSymbols(b))
                dist_propIsEnum.call(b, prop) &&
                  dist_defNormalProp(a, prop, b[prop])
            return a
          },
          __objRest = (source, exclude) => {
            var target = {}
            for (var prop in source)
              dist_hasOwnProp.call(source, prop) &&
                exclude.indexOf(prop) < 0 &&
                (target[prop] = source[prop])
            if (null != source && dist_getOwnPropSymbols)
              for (var prop of dist_getOwnPropSymbols(source))
                exclude.indexOf(prop) < 0 &&
                  dist_propIsEnum.call(source, prop) &&
                  (target[prop] = source[prop])
            return target
          },
          wrapFn = (fnOrValue) =>
            'function' == typeof fnOrValue ? { __fn: fnOrValue } : fnOrValue,
          atomWithFn = (initialValue) => {
            const baseAtom = vanilla_atom(wrapFn(initialValue))
            return vanilla_atom(
              (get) => {
                return (wrappedFnOrValue = get(baseAtom)) &&
                  'object' == typeof wrappedFnOrValue &&
                  '__fn' in wrappedFnOrValue
                  ? wrappedFnOrValue.__fn
                  : wrappedFnOrValue
                var wrappedFnOrValue
              },
              (_get, set, value) => set(baseAtom, wrapFn(value))
            )
          },
          useHydrateStore = (atoms, initialValues, options = {}) => {
            const values = []
            for (const key of Object.keys(atoms)) {
              const initialValue = initialValues[key]
              void 0 !== initialValue && values.push([atoms[key], initialValue])
            }
            !(function useHydrateAtoms(values, options) {
              const store = useStore(options),
                hydratedSet = getHydratedSet(store)
              for (const [atom, value] of values)
                (hydratedSet.has(atom) &&
                  !(null == options
                    ? void 0
                    : options.dangerouslyForceHydrate)) ||
                  (hydratedSet.add(atom), store.set(atom, value))
            })(values, options)
          },
          getFullyQualifiedScope = (storeName, scope) =>
            `${storeName}:${scope}`,
          AtomStoreContext = react.createContext(new Map()),
          HydrateAtoms = (_a) => {
            var _b = _a,
              { initialValues, children, store, atoms } = _b,
              props = __objRest(_b, [
                'initialValues',
                'children',
                'store',
                'atoms',
              ])
            return (
              useHydrateStore(
                atoms,
                dist_spreadValues(dist_spreadValues({}, initialValues), props),
                { store }
              ),
              ((atoms, values, { store } = {}) => {
                for (const key of Object.keys(atoms)) {
                  const value = values[key],
                    set = react_useSetAtom(atoms[key], { store })
                  react.useEffect(() => {
                    null != value && set(value)
                  }, [set, value])
                }
              })(atoms, props, { store }),
              react.createElement(react.Fragment, null, children)
            )
          },
          capitalizeFirstLetter = (str = '') =>
            str.length > 0 ? str[0].toUpperCase() + str.slice(1) : '',
          isAtom = (possibleAtom) =>
            !!possibleAtom &&
            'object' == typeof possibleAtom &&
            'read' in possibleAtom &&
            'function' == typeof possibleAtom.read,
          convertScopeShorthand = (optionsOrScope = {}) =>
            'string' == typeof optionsOrScope
              ? { scope: optionsOrScope }
              : optionsOrScope,
          identity = (x) => x,
          createAtomStore = (
            initialState,
            { name, delay: delayRoot, effect, extend, suppressWarnings }
          ) => {
            const atomsWithoutExtend = {},
              writableAtomsWithoutExtend = {},
              atomIsWritable = {}
            function UseStoreApiFactory(options, store) {
              ;((this.options = options), (this.store = store))
            }
            for (const [key, atomOrValue] of Object.entries(initialState)) {
              const atomConfig = isAtom(atomOrValue)
                ? atomOrValue
                : atomWithFn(atomOrValue)
              atomsWithoutExtend[key] = atomConfig
              const writable = 'write' in atomConfig
              ;((atomIsWritable[key] = writable),
                writable && (writableAtomsWithoutExtend[key] = atomConfig))
            }
            const atoms = dist_spreadValues({}, atomsWithoutExtend)
            if (extend) {
              const extendedAtoms = extend(atomsWithoutExtend)
              for (const [key, atomConfig] of Object.entries(extendedAtoms))
                ((atoms[key] = atomConfig),
                  (atomIsWritable[key] = 'write' in atomConfig))
            }
            const useStore = (optionsOrScope = {}) => {
                const {
                    scope,
                    store,
                    warnIfNoStore = !suppressWarnings,
                  } = convertScopeShorthand(optionsOrScope),
                  contextStore = ((
                    storeName,
                    scope = 'provider',
                    warnIfUndefined = !0
                  ) => {
                    var _a
                    const storeContext = react.useContext(AtomStoreContext),
                      store =
                        null !=
                        (_a = storeContext.get(
                          getFullyQualifiedScope(storeName, scope)
                        ))
                          ? _a
                          : storeContext.get(
                              getFullyQualifiedScope(storeName, 'provider')
                            )
                    return (
                      !store &&
                        warnIfUndefined &&
                        dist_console.warn(
                          `Tried to access jotai store '${storeName}' outside of a matching provider.`
                        ),
                      store
                    )
                  })(name, scope, !store && warnIfNoStore)
                return null != store ? store : contextStore
              },
              useAtomValueWithStore = (
                atomConfig,
                store,
                optionsOrScope,
                selector = identity,
                equalityFnOrDeps,
                deps
              ) => {
                var _a, _b
                const options = convertScopeShorthand(optionsOrScope),
                  equalityFn =
                    'function' == typeof equalityFnOrDeps
                      ? equalityFnOrDeps
                      : void 0
                deps =
                  null !=
                  (_a =
                    'function' == typeof equalityFnOrDeps
                      ? deps
                      : equalityFnOrDeps)
                    ? _a
                    : [selector, equalityFn]
                const [memoizedSelector, memoizedEqualityFn] = react.useMemo(
                  () => [selector, equalityFn],
                  deps
                )
                return useAtomValue(
                  selectAtom(atomConfig, memoizedSelector, memoizedEqualityFn),
                  {
                    store,
                    delay: null != (_b = options.delay) ? _b : delayRoot,
                  }
                )
              },
              getAtomWithStore = (atomConfig, store, _optionsOrScope) =>
                (null != store ? store : getDefaultStore()).get(atomConfig),
              useSetAtomWithStore = (atomConfig, store, _optionsOrScope) =>
                react_useSetAtom(atomConfig, { store }),
              setAtomWithStore =
                (atomConfig, store, _optionsOrScope) =>
                (...args) =>
                  (null != store ? store : getDefaultStore()).set(
                    atomConfig,
                    ...args
                  ),
              useAtomStateWithStore = (atomConfig, store, optionsOrScope) => {
                const { delay = delayRoot } =
                  convertScopeShorthand(optionsOrScope)
                return (function react_useAtom(atom, options) {
                  return [
                    useAtomValue(atom, options),
                    react_useSetAtom(atom, options),
                  ]
                })(atomConfig, { store, delay })
              },
              subscribeAtomWithStore =
                (atomConfig, store, _optionsOrScope) => (callback) => {
                  null != store || (store = getDefaultStore())
                  const unsubscribe = store.sub(atomConfig, () => {
                    callback(store.get(atomConfig))
                  })
                  return () => unsubscribe()
                }
            for (const key of Object.keys(atoms)) {
              const atomConfig = atoms[key],
                isWritable = atomIsWritable[key],
                capitalizedKey = capitalizeFirstLetter(key)
              ;((UseStoreApiFactory.prototype[`use${capitalizedKey}Value`] =
                function (selector, equalityFnOrDeps, deps) {
                  return useAtomValueWithStore(
                    atomConfig,
                    this.store,
                    this.options,
                    selector,
                    equalityFnOrDeps,
                    deps
                  )
                }),
                (UseStoreApiFactory.prototype[`get${capitalizedKey}`] =
                  function () {
                    return getAtomWithStore(
                      atomConfig,
                      this.store,
                      this.options
                    )
                  }),
                (UseStoreApiFactory.prototype[`subscribe${capitalizedKey}`] =
                  function (callback) {
                    return subscribeAtomWithStore(
                      atomConfig,
                      this.store,
                      this.options
                    )(callback)
                  }),
                isWritable &&
                  ((UseStoreApiFactory.prototype[`useSet${capitalizedKey}`] =
                    function () {
                      return useSetAtomWithStore(
                        atomConfig,
                        this.store,
                        this.options
                      )
                    }),
                  (UseStoreApiFactory.prototype[`set${capitalizedKey}`] =
                    function (...args) {
                      return setAtomWithStore(
                        atomConfig,
                        this.store,
                        this.options
                      )(...args)
                    }),
                  (UseStoreApiFactory.prototype[`use${capitalizedKey}State`] =
                    function () {
                      return useAtomStateWithStore(
                        atomConfig,
                        this.store,
                        this.options
                      )
                    })))
            }
            const defineUseStoreApiMethod = (
              methodNameWithKey,
              methodNameWithAtomConfig,
              fnWithKey,
              fnWithAtomConfig = fnWithKey
            ) => {
              ;((UseStoreApiFactory.prototype[methodNameWithKey] = function (
                key,
                ...args
              ) {
                const atomConfig = atoms[key]
                return fnWithKey(atomConfig, this.store, this.options, ...args)
              }),
                (UseStoreApiFactory.prototype[methodNameWithAtomConfig] =
                  function (atomConfig, ...args) {
                    return fnWithAtomConfig(
                      atomConfig,
                      this.store,
                      this.options,
                      ...args
                    )
                  }))
            }
            ;(defineUseStoreApiMethod(
              'useValue',
              'useAtomValue',
              useAtomValueWithStore
            ),
              defineUseStoreApiMethod('get', 'getAtom', getAtomWithStore),
              defineUseStoreApiMethod(
                'useSet',
                'useSetAtom',
                useSetAtomWithStore
              ),
              defineUseStoreApiMethod(
                'set',
                'setAtom',
                (atomConfig, store, options, ...args) =>
                  setAtomWithStore(atomConfig, store)(...args),
                setAtomWithStore
              ),
              defineUseStoreApiMethod(
                'useState',
                'useAtomState',
                useAtomStateWithStore
              ),
              defineUseStoreApiMethod(
                'subscribe',
                'subscribeAtom',
                (atomConfig, store, options, callback) =>
                  subscribeAtomWithStore(atomConfig, store)(callback),
                subscribeAtomWithStore
              ))
            const Provider = ((storeScope, atoms, options = {}) => {
                const Effect = options.effect
                return (_a) => {
                  var _b = _a,
                    { store, scope, children, resetKey } = _b,
                    props = __objRest(_b, [
                      'store',
                      'scope',
                      'children',
                      'resetKey',
                    ])
                  const [storeState, setStoreState] = react.useState(
                    vanilla_createStore()
                  )
                  react.useEffect(() => {
                    resetKey && setStoreState(vanilla_createStore())
                  }, [resetKey])
                  const previousStoreContext =
                      react.useContext(AtomStoreContext),
                    storeContext = react.useMemo(() => {
                      const newStoreContext = new Map(previousStoreContext)
                      return (
                        scope &&
                          newStoreContext.set(
                            getFullyQualifiedScope(storeScope, scope),
                            storeState
                          ),
                        newStoreContext.set(
                          getFullyQualifiedScope(storeScope, 'provider'),
                          storeState
                        ),
                        newStoreContext
                      )
                    }, [previousStoreContext, scope, storeState])
                  return react.createElement(
                    AtomStoreContext.Provider,
                    { value: storeContext },
                    react.createElement(
                      HydrateAtoms,
                      dist_spreadValues({ store: storeState, atoms }, props),
                      !!Effect && react.createElement(Effect, null),
                      children
                    )
                  )
                }
              })(name, writableAtomsWithoutExtend, { effect }),
              storeApi = { atom: atoms, name },
              capitalizedName = capitalizeFirstLetter(name),
              storeApiIndex = 0 === name.length ? 'store' : `${name}Store`
            return {
              [`${capitalizedName}Provider`]: Provider,
              [storeApiIndex]: storeApi,
              [`use${capitalizedName}Store`]: (options = {}) => {
                const convertedOptions = ((optionsOrScope) => {
                    const convertedOptions =
                      convertScopeShorthand(optionsOrScope)
                    return (0, react.useMemo)(
                      () => convertedOptions,
                      Object.values(convertedOptions)
                    )
                  })(options),
                  store = useStore(convertedOptions)
                return (0, react.useMemo)(
                  () => new UseStoreApiFactory(convertedOptions, store),
                  [store, convertedOptions]
                )
              },
              [`use${capitalizedName}State`]: (key, options) => {
                var _a
                const store =
                  null != (_a = useStore(options)) ? _a : getDefaultStore()
                return useAtomStateWithStore(atoms[key], store, options)
              },
              [`use${capitalizedName}Value`]: (key, _a = {}, deps) => {
                var _a2,
                  _b = _a,
                  { equalityFn, selector } = _b,
                  options = __objRest(_b, ['equalityFn', 'selector'])
                const store =
                  null != (_a2 = useStore(options)) ? _a2 : getDefaultStore()
                return useAtomValueWithStore(
                  atoms[key],
                  store,
                  options,
                  selector,
                  null != equalityFn ? equalityFn : deps,
                  equalityFn && deps
                )
              },
              [`use${capitalizedName}Set`]: (key, options) => {
                var _a
                const store =
                  null != (_a = useStore(options)) ? _a : getDefaultStore()
                return useSetAtomWithStore(atoms[key], store)
              },
              name,
            }
          }
        function useAtomStoreValue(
          store,
          key,
          selector,
          equalityFnOrDeps,
          deps
        ) {
          return store.useValue(key, selector, equalityFnOrDeps, deps)
        }
        function dist_useAtomStoreSet(store, key) {
          return store.useSet(key)
        }
        function useStoreAtomValue(
          store,
          atom2,
          selector,
          equalityFnOrDeps,
          deps
        ) {
          return store.useAtomValue(atom2, selector, equalityFnOrDeps, deps)
        }
        var _navigator$userAgent$,
          _navigator$userAgent$2,
          dist_index_es = __webpack_require__(
            '../../node_modules/.pnpm/slate@0.117.2/node_modules/slate/dist/index.es.js'
          ),
          lib = __webpack_require__(
            '../../node_modules/.pnpm/is-hotkey@0.2.0/node_modules/is-hotkey/lib/index.js'
          ),
          DOMNode = globalThis.Node,
          DOMText = (globalThis.Element, globalThis.Text),
          getDefaultView =
            (globalThis.Range,
            globalThis.Selection,
            globalThis.StaticRange,
            (value) =>
              (value &&
                value.ownerDocument &&
                value.ownerDocument.defaultView) ||
              null),
          isDOMComment = (value) => isDOMNode(value) && 8 === value.nodeType,
          isDOMElement = (value) => isDOMNode(value) && 1 === value.nodeType,
          isDOMNode = (value) => {
            var window = getDefaultView(value)
            return !!window && value instanceof window.Node
          },
          isDOMSelection = (value) => {
            var window =
              value && value.anchorNode && getDefaultView(value.anchorNode)
            return !!window && value instanceof window.Selection
          },
          getEditableChildAndIndex = (parent, index, direction) => {
            for (
              var { childNodes } = parent,
                child = childNodes[index],
                i = index,
                triedForward = !1,
                triedBackward = !1;
              (isDOMComment(child) ||
                (isDOMElement(child) && 0 === child.childNodes.length) ||
                (isDOMElement(child) &&
                  'false' === child.getAttribute('contenteditable'))) &&
              (!triedForward || !triedBackward);

            )
              i >= childNodes.length
                ? ((triedForward = !0),
                  (i = index - 1),
                  (direction = 'backward'))
                : i < 0
                  ? ((triedBackward = !0),
                    (i = index + 1),
                    (direction = 'forward'))
                  : ((child = childNodes[i]),
                    (index = i),
                    (i += 'forward' === direction ? 1 : -1))
            return [child, index]
          },
          getEditableChild = (parent, index, direction) => {
            var [child] = getEditableChildAndIndex(parent, index, direction)
            return child
          },
          getSelection = (root) =>
            null != root.getSelection
              ? root.getSelection()
              : document.getSelection(),
          isBefore = (node, otherNode) =>
            Boolean(
              node.compareDocumentPosition(otherNode) &
                DOMNode.DOCUMENT_POSITION_PRECEDING
            ),
          index_es_IS_APPLE =
            ('undefined' != typeof navigator &&
              'undefined' != typeof window &&
              /iPad|iPhone|iPod/.test(navigator.userAgent) &&
              window.MSStream,
            'undefined' != typeof navigator &&
              /Mac OS X/.test(navigator.userAgent)),
          IS_ANDROID =
            'undefined' != typeof navigator &&
            /Android/.test(navigator.userAgent),
          IS_FIREFOX =
            'undefined' != typeof navigator &&
            /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
          IS_EDGE_LEGACY =
            ('undefined' != typeof navigator &&
              /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent),
            'undefined' != typeof navigator &&
              /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(
                navigator.userAgent
              )),
          IS_CHROME =
            'undefined' != typeof navigator &&
            /Chrome/i.test(navigator.userAgent),
          IS_CHROME_LEGACY =
            'undefined' != typeof navigator &&
            /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(
              navigator.userAgent
            ),
          IS_ANDROID_CHROME_LEGACY =
            IS_ANDROID &&
            'undefined' != typeof navigator &&
            /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent)
        ;('undefined' != typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent
          ),
          'undefined' != typeof navigator &&
            /.*UCBrowser/.test(navigator.userAgent),
          'undefined' != typeof navigator &&
            /.*Wechat/.test(navigator.userAgent) &&
            /.*MacWechat/.test(navigator.userAgent),
          'undefined' == typeof window ||
            void 0 === window.document ||
            window.document.createElement)
        'undefined' != typeof navigator &&
          /Safari/.test(navigator.userAgent) &&
          /Version\/(\d+)/.test(navigator.userAgent) &&
          null !==
            (_navigator$userAgent$ =
              navigator.userAgent.match(/Version\/(\d+)/)) &&
          void 0 !== _navigator$userAgent$ &&
          _navigator$userAgent$[1] &&
          parseInt(
            null ===
              (_navigator$userAgent$2 =
                navigator.userAgent.match(/Version\/(\d+)/)) ||
              void 0 === _navigator$userAgent$2
              ? void 0
              : _navigator$userAgent$2[1],
            10
          )
        ;(!IS_CHROME_LEGACY || !IS_ANDROID_CHROME_LEGACY) &&
          !IS_EDGE_LEGACY &&
          'undefined' != typeof globalThis &&
          globalThis.InputEvent &&
          globalThis.InputEvent.prototype.getTargetRanges
        function _typeof(o) {
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o
                  }
                : function (o) {
                    return o &&
                      'function' == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o
                  }),
            _typeof(o)
          )
        }
        function _toPropertyKey(arg) {
          var key = (function _toPrimitive(input, hint) {
            if ('object' !== _typeof(input) || null === input) return input
            var prim = input[Symbol.toPrimitive]
            if (void 0 !== prim) {
              var res = prim.call(input, hint || 'default')
              if ('object' !== _typeof(res)) return res
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === hint ? String : Number)(input)
          })(arg, 'string')
          return 'symbol' === _typeof(key) ? key : String(key)
        }
        function _defineProperty(obj, key, value) {
          return (
            (key = _toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          )
        }
        var n = 0
        class index_es_Key {
          constructor() {
            ;(_defineProperty(this, 'id', void 0), (this.id = ''.concat(n++)))
          }
        }
        new WeakMap()
        var NODE_TO_INDEX = new WeakMap(),
          NODE_TO_PARENT = new WeakMap(),
          EDITOR_TO_WINDOW = new WeakMap(),
          EDITOR_TO_ELEMENT = new WeakMap(),
          ELEMENT_TO_NODE = (new WeakMap(), new WeakMap()),
          NODE_TO_KEY = (new WeakMap(), new WeakMap()),
          EDITOR_TO_KEY_TO_ELEMENT = new WeakMap(),
          IS_READ_ONLY = new WeakMap(),
          IS_FOCUSED = new WeakMap(),
          IS_COMPOSING = new WeakMap(),
          EDITOR_TO_SCHEDULE_FLUSH =
            (new WeakMap(), new WeakMap(), new WeakMap()),
          EDITOR_TO_PENDING_DIFFS =
            (new WeakMap(), new WeakMap(), new WeakMap()),
          PLACEHOLDER_SYMBOL =
            (new WeakMap(),
            new WeakMap(),
            new WeakMap(),
            Symbol('placeholder')),
          DOMEditor =
            (Symbol('mark-placeholder'),
            {
              androidPendingDiffs: (editor) =>
                EDITOR_TO_PENDING_DIFFS.get(editor),
              androidScheduleFlush: (editor) => {
                var _EDITOR_TO_SCHEDULE_F
                null ===
                  (_EDITOR_TO_SCHEDULE_F =
                    EDITOR_TO_SCHEDULE_FLUSH.get(editor)) ||
                  void 0 === _EDITOR_TO_SCHEDULE_F ||
                  _EDITOR_TO_SCHEDULE_F()
              },
              blur: (editor) => {
                var el = DOMEditor.toDOMNode(editor, editor),
                  root = DOMEditor.findDocumentOrShadowRoot(editor)
                ;(IS_FOCUSED.set(editor, !1),
                  root.activeElement === el && el.blur())
              },
              deselect: (editor) => {
                var { selection } = editor,
                  root = DOMEditor.findDocumentOrShadowRoot(editor),
                  domSelection = getSelection(root)
                ;(domSelection &&
                  domSelection.rangeCount > 0 &&
                  domSelection.removeAllRanges(),
                  selection && dist_index_es.gB.deselect(editor))
              },
              findDocumentOrShadowRoot: (editor) => {
                var el = DOMEditor.toDOMNode(editor, editor),
                  root = el.getRootNode()
                return root instanceof Document || root instanceof ShadowRoot
                  ? root
                  : el.ownerDocument
              },
              findEventRange: (editor, event) => {
                'nativeEvent' in event && (event = event.nativeEvent)
                var { clientX: x, clientY: y, target } = event
                if (null == x || null == y)
                  throw new Error(
                    'Cannot resolve a Slate range from a DOM event: '.concat(
                      event
                    )
                  )
                var domRange,
                  node = DOMEditor.toSlateNode(editor, event.target),
                  path = DOMEditor.findPath(editor, node)
                if (
                  dist_index_es.Hg.isElement(node) &&
                  dist_index_es.KE.isVoid(editor, node)
                ) {
                  var rect = target.getBoundingClientRect(),
                    isPrev = editor.isInline(node)
                      ? x - rect.left < rect.left + rect.width - x
                      : y - rect.top < rect.top + rect.height - y,
                    edge = dist_index_es.KE.point(editor, path, {
                      edge: isPrev ? 'start' : 'end',
                    }),
                    point = isPrev
                      ? dist_index_es.KE.before(editor, edge)
                      : dist_index_es.KE.after(editor, edge)
                  if (point) return dist_index_es.KE.range(editor, point)
                }
                var { document } = DOMEditor.getWindow(editor)
                if (document.caretRangeFromPoint)
                  domRange = document.caretRangeFromPoint(x, y)
                else {
                  var position = document.caretPositionFromPoint(x, y)
                  position &&
                    ((domRange = document.createRange()).setStart(
                      position.offsetNode,
                      position.offset
                    ),
                    domRange.setEnd(position.offsetNode, position.offset))
                }
                if (!domRange)
                  throw new Error(
                    'Cannot resolve a Slate range from a DOM event: '.concat(
                      event
                    )
                  )
                return DOMEditor.toSlateRange(editor, domRange, {
                  exactMatch: !1,
                  suppressThrow: !1,
                })
              },
              findKey: (editor, node) => {
                var key = NODE_TO_KEY.get(node)
                return (
                  key ||
                    ((key = new index_es_Key()), NODE_TO_KEY.set(node, key)),
                  key
                )
              },
              findPath: (editor, node) => {
                for (var path = [], child = node; ; ) {
                  var parent = NODE_TO_PARENT.get(child)
                  if (null == parent) {
                    if (dist_index_es.KE.isEditor(child)) return path
                    break
                  }
                  var i = NODE_TO_INDEX.get(child)
                  if (null == i) break
                  ;(path.unshift(i), (child = parent))
                }
                throw new Error(
                  'Unable to find the path for Slate node: '.concat(
                    dist_index_es.h6.stringify(node)
                  )
                )
              },
              focus: function focus(editor) {
                var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { retries: 5 }
                if (!IS_FOCUSED.get(editor)) {
                  if (options.retries <= 0)
                    throw new Error(
                      'Could not set focus, editor seems stuck with pending operations'
                    )
                  if (editor.operations.length > 0)
                    setTimeout(() => {
                      DOMEditor.focus(editor, { retries: options.retries - 1 })
                    }, 10)
                  else {
                    var el = DOMEditor.toDOMNode(editor, editor),
                      root = DOMEditor.findDocumentOrShadowRoot(editor)
                    if (root.activeElement !== el) {
                      if (editor.selection && root instanceof Document) {
                        var domSelection = getSelection(root),
                          domRange = DOMEditor.toDOMRange(
                            editor,
                            editor.selection
                          )
                        ;(null == domSelection ||
                          domSelection.removeAllRanges(),
                          null == domSelection ||
                            domSelection.addRange(domRange))
                      }
                      ;(editor.selection ||
                        dist_index_es.gB.select(
                          editor,
                          dist_index_es.KE.start(editor, [])
                        ),
                        IS_FOCUSED.set(editor, !0),
                        el.focus({ preventScroll: !0 }))
                    }
                  }
                }
              },
              getWindow: (editor) => {
                var window = EDITOR_TO_WINDOW.get(editor)
                if (!window)
                  throw new Error(
                    'Unable to find a host window element for this editor'
                  )
                return window
              },
              hasDOMNode: function hasDOMNode(editor, target) {
                var targetEl,
                  options =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  { editable = !1 } = options,
                  editorEl = DOMEditor.toDOMNode(editor, editor)
                try {
                  targetEl = isDOMElement(target)
                    ? target
                    : target.parentElement
                } catch (err) {
                  if (
                    err instanceof Error &&
                    !err.message.includes(
                      'Permission denied to access property "nodeType"'
                    )
                  )
                    throw err
                }
                return (
                  !!targetEl &&
                  !(
                    targetEl.closest('[data-slate-editor]') !== editorEl ||
                    (editable &&
                      !targetEl.isContentEditable &&
                      ('boolean' != typeof targetEl.isContentEditable ||
                        targetEl.closest('[contenteditable="false"]') !==
                          editorEl) &&
                      !targetEl.getAttribute('data-slate-zero-width'))
                  )
                )
              },
              hasEditableTarget: (editor, target) =>
                isDOMNode(target) &&
                DOMEditor.hasDOMNode(editor, target, { editable: !0 }),
              hasRange: (editor, range) => {
                var { anchor, focus } = range
                return (
                  dist_index_es.KE.hasPath(editor, anchor.path) &&
                  dist_index_es.KE.hasPath(editor, focus.path)
                )
              },
              hasSelectableTarget: (editor, target) =>
                DOMEditor.hasEditableTarget(editor, target) ||
                DOMEditor.isTargetInsideNonReadonlyVoid(editor, target),
              hasTarget: (editor, target) =>
                isDOMNode(target) && DOMEditor.hasDOMNode(editor, target),
              insertData: (editor, data) => {
                editor.insertData(data)
              },
              insertFragmentData: (editor, data) =>
                editor.insertFragmentData(data),
              insertTextData: (editor, data) => editor.insertTextData(data),
              isComposing: (editor) => !!IS_COMPOSING.get(editor),
              isFocused: (editor) => !!IS_FOCUSED.get(editor),
              isReadOnly: (editor) => !!IS_READ_ONLY.get(editor),
              isTargetInsideNonReadonlyVoid: (editor, target) => {
                if (IS_READ_ONLY.get(editor)) return !1
                var slateNode =
                  DOMEditor.hasTarget(editor, target) &&
                  DOMEditor.toSlateNode(editor, target)
                return (
                  dist_index_es.Hg.isElement(slateNode) &&
                  dist_index_es.KE.isVoid(editor, slateNode)
                )
              },
              setFragmentData: (editor, data, originEvent) =>
                editor.setFragmentData(data, originEvent),
              toDOMNode: (editor, node) => {
                var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor),
                  domNode = dist_index_es.KE.isEditor(node)
                    ? EDITOR_TO_ELEMENT.get(editor)
                    : null == KEY_TO_ELEMENT
                      ? void 0
                      : KEY_TO_ELEMENT.get(DOMEditor.findKey(editor, node))
                if (!domNode)
                  throw new Error(
                    'Cannot resolve a DOM node from Slate node: '.concat(
                      dist_index_es.h6.stringify(node)
                    )
                  )
                return domNode
              },
              toDOMPoint: (editor, point) => {
                var domPoint,
                  [node] = dist_index_es.KE.node(editor, point.path),
                  el = DOMEditor.toDOMNode(editor, node)
                dist_index_es.KE.void(editor, { at: point }) &&
                  (point = { path: point.path, offset: 0 })
                for (
                  var texts = Array.from(
                      el.querySelectorAll(
                        '[data-slate-string], [data-slate-zero-width]'
                      )
                    ),
                    start = 0,
                    i = 0;
                  i < texts.length;
                  i++
                ) {
                  var text = texts[i],
                    domNode = text.childNodes[0]
                  if (null != domNode && null != domNode.textContent) {
                    var { length } = domNode.textContent,
                      attr = text.getAttribute('data-slate-length'),
                      end =
                        start + (null == attr ? length : parseInt(attr, 10)),
                      nextText = texts[i + 1]
                    if (
                      point.offset === end &&
                      null != nextText &&
                      nextText.hasAttribute('data-slate-mark-placeholder')
                    ) {
                      var _nextText$textContent,
                        domText = nextText.childNodes[0]
                      domPoint = [
                        domText instanceof DOMText ? domText : nextText,
                        null !==
                          (_nextText$textContent = nextText.textContent) &&
                        void 0 !== _nextText$textContent &&
                        _nextText$textContent.startsWith('\ufeff')
                          ? 1
                          : 0,
                      ]
                      break
                    }
                    if (point.offset <= end) {
                      domPoint = [
                        domNode,
                        Math.min(length, Math.max(0, point.offset - start)),
                      ]
                      break
                    }
                    start = end
                  }
                }
                if (!domPoint)
                  throw new Error(
                    'Cannot resolve a DOM point from Slate point: '.concat(
                      dist_index_es.h6.stringify(point)
                    )
                  )
                return domPoint
              },
              toDOMRange: (editor, range) => {
                var { anchor, focus } = range,
                  isBackward = dist_index_es.Q6.isBackward(range),
                  domAnchor = DOMEditor.toDOMPoint(editor, anchor),
                  domFocus = dist_index_es.Q6.isCollapsed(range)
                    ? domAnchor
                    : DOMEditor.toDOMPoint(editor, focus),
                  domRange = DOMEditor.getWindow(editor).document.createRange(),
                  [startNode, startOffset] = isBackward ? domFocus : domAnchor,
                  [endNode, endOffset] = isBackward ? domAnchor : domFocus,
                  isStartAtZeroWidth = !!(
                    isDOMElement(startNode)
                      ? startNode
                      : startNode.parentElement
                  ).getAttribute('data-slate-zero-width'),
                  isEndAtZeroWidth = !!(
                    isDOMElement(endNode) ? endNode : endNode.parentElement
                  ).getAttribute('data-slate-zero-width')
                return (
                  domRange.setStart(
                    startNode,
                    isStartAtZeroWidth ? 1 : startOffset
                  ),
                  domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset),
                  domRange
                )
              },
              toSlateNode: (editor, domNode) => {
                var domEl = isDOMElement(domNode)
                  ? domNode
                  : domNode.parentElement
                domEl &&
                  !domEl.hasAttribute('data-slate-node') &&
                  (domEl = domEl.closest('[data-slate-node]'))
                var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null
                if (!node)
                  throw new Error(
                    'Cannot resolve a Slate node from DOM node: '.concat(domEl)
                  )
                return node
              },
              toSlatePoint: (editor, domPoint, options) => {
                var {
                    exactMatch,
                    suppressThrow,
                    searchDirection = 'backward',
                  } = options,
                  [nearestNode, nearestOffset] = exactMatch
                    ? domPoint
                    : ((domPoint) => {
                        var [node, offset] = domPoint
                        if (isDOMElement(node) && node.childNodes.length) {
                          var isLast = offset === node.childNodes.length,
                            index = isLast ? offset - 1 : offset
                          for (
                            [node, index] = getEditableChildAndIndex(
                              node,
                              index,
                              isLast ? 'backward' : 'forward'
                            ),
                              isLast = index < offset;
                            isDOMElement(node) && node.childNodes.length;

                          ) {
                            var i = isLast ? node.childNodes.length - 1 : 0
                            node = getEditableChild(
                              node,
                              i,
                              isLast ? 'backward' : 'forward'
                            )
                          }
                          offset =
                            isLast && null != node.textContent
                              ? node.textContent.length
                              : 0
                        }
                        return [node, offset]
                      })(domPoint),
                  parentNode = nearestNode.parentNode,
                  textNode = null,
                  offset = 0
                if (parentNode) {
                  var _domNode$textContent,
                    _domNode$textContent2,
                    editorEl = DOMEditor.toDOMNode(editor, editor),
                    potentialVoidNode = parentNode.closest(
                      '[data-slate-void="true"]'
                    ),
                    voidNode =
                      potentialVoidNode && editorEl.contains(potentialVoidNode)
                        ? potentialVoidNode
                        : null,
                    potentialNonEditableNode = parentNode.closest(
                      '[contenteditable="false"]'
                    ),
                    nonEditableNode =
                      potentialNonEditableNode &&
                      editorEl.contains(potentialNonEditableNode)
                        ? potentialNonEditableNode
                        : null,
                    leafNode = parentNode.closest('[data-slate-leaf]'),
                    domNode = null
                  if (leafNode) {
                    if (
                      (textNode = leafNode.closest('[data-slate-node="text"]'))
                    ) {
                      var range =
                        DOMEditor.getWindow(editor).document.createRange()
                      ;(range.setStart(textNode, 0),
                        range.setEnd(nearestNode, nearestOffset))
                      var contents = range.cloneContents()
                      ;([
                        ...Array.prototype.slice.call(
                          contents.querySelectorAll('[data-slate-zero-width]')
                        ),
                        ...Array.prototype.slice.call(
                          contents.querySelectorAll('[contenteditable=false]')
                        ),
                      ].forEach((el) => {
                        IS_ANDROID &&
                        !exactMatch &&
                        el.hasAttribute('data-slate-zero-width') &&
                        el.textContent.length > 0 &&
                        '\ufeff' !== el.textContext
                          ? el.textContent.startsWith('\ufeff') &&
                            (el.textContent = el.textContent.slice(1))
                          : el.parentNode.removeChild(el)
                      }),
                        (offset = contents.textContent.length),
                        (domNode = textNode))
                    }
                  } else if (voidNode) {
                    for (
                      var leafNodes =
                          voidNode.querySelectorAll('[data-slate-leaf]'),
                        index = 0;
                      index < leafNodes.length;
                      index++
                    ) {
                      var current = leafNodes[index]
                      if (DOMEditor.hasDOMNode(editor, current)) {
                        leafNode = current
                        break
                      }
                    }
                    leafNode
                      ? ((textNode = leafNode.closest(
                          '[data-slate-node="text"]'
                        )),
                        (offset = (domNode = leafNode).textContent.length),
                        domNode
                          .querySelectorAll('[data-slate-zero-width]')
                          .forEach((el) => {
                            offset -= el.textContent.length
                          }))
                      : (offset = 1)
                  } else if (nonEditableNode) {
                    var _leafNodes$find,
                      _leafNodes2$findLast,
                      getLeafNodes = (node) =>
                        node
                          ? node.querySelectorAll(
                              '[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])'
                            )
                          : [],
                      elementNode = nonEditableNode.closest(
                        '[data-slate-node="element"]'
                      )
                    if ('forward' === searchDirection)
                      leafNode =
                        null !==
                          (_leafNodes$find = [
                            ...getLeafNodes(elementNode),
                            ...getLeafNodes(
                              null == elementNode
                                ? void 0
                                : elementNode.nextElementSibling
                            ),
                          ].find((leaf) =>
                            ((node, otherNode) =>
                              Boolean(
                                node.compareDocumentPosition(otherNode) &
                                  DOMNode.DOCUMENT_POSITION_FOLLOWING
                              ))(nonEditableNode, leaf)
                          )) && void 0 !== _leafNodes$find
                          ? _leafNodes$find
                          : null
                    else
                      leafNode =
                        null !==
                          (_leafNodes2$findLast = [
                            ...getLeafNodes(
                              null == elementNode
                                ? void 0
                                : elementNode.previousElementSibling
                            ),
                            ...getLeafNodes(elementNode),
                          ].findLast((leaf) =>
                            isBefore(nonEditableNode, leaf)
                          )) && void 0 !== _leafNodes2$findLast
                          ? _leafNodes2$findLast
                          : null
                    leafNode &&
                      ((textNode = leafNode.closest(
                        '[data-slate-node="text"]'
                      )),
                      (domNode = leafNode),
                      'forward' === searchDirection
                        ? (offset = 0)
                        : ((offset = domNode.textContent.length),
                          domNode
                            .querySelectorAll('[data-slate-zero-width]')
                            .forEach((el) => {
                              offset -= el.textContent.length
                            })))
                  }
                  domNode &&
                    offset === domNode.textContent.length &&
                    IS_ANDROID &&
                    'z' === domNode.getAttribute('data-slate-zero-width') &&
                    null !== (_domNode$textContent = domNode.textContent) &&
                    void 0 !== _domNode$textContent &&
                    _domNode$textContent.startsWith('\ufeff') &&
                    (parentNode.hasAttribute('data-slate-zero-width') ||
                      (IS_FIREFOX &&
                        null !==
                          (_domNode$textContent2 = domNode.textContent) &&
                        void 0 !== _domNode$textContent2 &&
                        _domNode$textContent2.endsWith('\n\n'))) &&
                    offset--
                }
                if (IS_ANDROID && !textNode && !exactMatch) {
                  var node = parentNode.hasAttribute('data-slate-node')
                    ? parentNode
                    : parentNode.closest('[data-slate-node]')
                  if (
                    node &&
                    DOMEditor.hasDOMNode(editor, node, { editable: !0 })
                  ) {
                    var _slateNode = DOMEditor.toSlateNode(editor, node),
                      { path: _path, offset: _offset } = dist_index_es.KE.start(
                        editor,
                        DOMEditor.findPath(editor, _slateNode)
                      )
                    return (
                      node.querySelector('[data-slate-leaf]') ||
                        (_offset = nearestOffset),
                      { path: _path, offset: _offset }
                    )
                  }
                }
                if (!textNode) {
                  if (suppressThrow) return null
                  throw new Error(
                    'Cannot resolve a Slate point from DOM point: '.concat(
                      domPoint
                    )
                  )
                }
                var slateNode = DOMEditor.toSlateNode(editor, textNode)
                return { path: DOMEditor.findPath(editor, slateNode), offset }
              },
              toSlateRange: (editor, domRange, options) => {
                var _focusNode$textConten,
                  anchorNode,
                  anchorOffset,
                  focusNode,
                  focusOffset,
                  isCollapsed,
                  { exactMatch, suppressThrow } = options
                if (
                  isDOMSelection(domRange)
                    ? domRange.anchorNode
                    : domRange.startContainer
                )
                  if (isDOMSelection(domRange)) {
                    if (IS_FIREFOX && domRange.rangeCount > 1) {
                      focusNode = domRange.focusNode
                      var firstRange = domRange.getRangeAt(0),
                        lastRange = domRange.getRangeAt(domRange.rangeCount - 1)
                      if (
                        focusNode instanceof HTMLTableRowElement &&
                        firstRange.startContainer instanceof
                          HTMLTableRowElement &&
                        lastRange.startContainer instanceof HTMLTableRowElement
                      ) {
                        function getLastChildren(element) {
                          return element.childElementCount > 0
                            ? getLastChildren(element.children[0])
                            : element
                        }
                        var firstNodeRow = firstRange.startContainer,
                          lastNodeRow = lastRange.startContainer,
                          firstNode = getLastChildren(
                            firstNodeRow.children[firstRange.startOffset]
                          ),
                          lastNode = getLastChildren(
                            lastNodeRow.children[lastRange.startOffset]
                          )
                        ;((focusOffset = 0),
                          (anchorNode =
                            lastNode.childNodes.length > 0
                              ? lastNode.childNodes[0]
                              : lastNode),
                          (focusNode =
                            firstNode.childNodes.length > 0
                              ? firstNode.childNodes[0]
                              : firstNode),
                          (anchorOffset =
                            lastNode instanceof HTMLElement
                              ? lastNode.innerHTML.length
                              : 0))
                      } else
                        firstRange.startContainer === focusNode
                          ? ((anchorNode = lastRange.endContainer),
                            (anchorOffset = lastRange.endOffset),
                            (focusOffset = firstRange.startOffset))
                          : ((anchorNode = firstRange.startContainer),
                            (anchorOffset = firstRange.endOffset),
                            (focusOffset = lastRange.startOffset))
                    } else
                      ((anchorNode = domRange.anchorNode),
                        (anchorOffset = domRange.anchorOffset),
                        (focusNode = domRange.focusNode),
                        (focusOffset = domRange.focusOffset))
                    isCollapsed =
                      (IS_CHROME &&
                        ((node) => {
                          for (var parent = node && node.parentNode; parent; ) {
                            if ('[object ShadowRoot]' === parent.toString())
                              return !0
                            parent = parent.parentNode
                          }
                          return !1
                        })(anchorNode)) ||
                      IS_FIREFOX
                        ? domRange.anchorNode === domRange.focusNode &&
                          domRange.anchorOffset === domRange.focusOffset
                        : domRange.isCollapsed
                  } else
                    ((anchorNode = domRange.startContainer),
                      (anchorOffset = domRange.startOffset),
                      (focusNode = domRange.endContainer),
                      (focusOffset = domRange.endOffset),
                      (isCollapsed = domRange.collapsed))
                if (
                  null == anchorNode ||
                  null == focusNode ||
                  null == anchorOffset ||
                  null == focusOffset
                )
                  throw new Error(
                    'Cannot resolve a Slate range from DOM range: '.concat(
                      domRange
                    )
                  )
                IS_FIREFOX &&
                  null !== (_focusNode$textConten = focusNode.textContent) &&
                  void 0 !== _focusNode$textConten &&
                  _focusNode$textConten.endsWith('\n\n') &&
                  focusOffset === focusNode.textContent.length &&
                  focusOffset--
                var anchor = DOMEditor.toSlatePoint(
                  editor,
                  [anchorNode, anchorOffset],
                  { exactMatch, suppressThrow }
                )
                if (!anchor) return null
                var focusBeforeAnchor =
                    isBefore(anchorNode, focusNode) ||
                    (anchorNode === focusNode && focusOffset < anchorOffset),
                  focus = isCollapsed
                    ? anchor
                    : DOMEditor.toSlatePoint(editor, [focusNode, focusOffset], {
                        exactMatch,
                        suppressThrow,
                        searchDirection: focusBeforeAnchor
                          ? 'forward'
                          : 'backward',
                      })
                if (!focus) return null
                var range = { anchor, focus }
                return (
                  dist_index_es.Q6.isExpanded(range) &&
                    dist_index_es.Q6.isForward(range) &&
                    isDOMElement(focusNode) &&
                    dist_index_es.KE.void(editor, {
                      at: range.focus,
                      mode: 'highest',
                    }) &&
                    (range = dist_index_es.KE.unhangRange(editor, range, {
                      voids: !0,
                    })),
                  range
                )
              },
            })
        var HOTKEYS = {
            bold: 'mod+b',
            compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
            moveBackward: 'left',
            moveForward: 'right',
            moveWordBackward: 'ctrl+left',
            moveWordForward: 'ctrl+right',
            deleteBackward: 'shift?+backspace',
            deleteForward: 'shift?+delete',
            extendBackward: 'shift+left',
            extendForward: 'shift+right',
            italic: 'mod+i',
            insertSoftBreak: 'shift+enter',
            splitBlock: 'enter',
            undo: 'mod+z',
          },
          APPLE_HOTKEYS = {
            moveLineBackward: 'opt+up',
            moveLineForward: 'opt+down',
            moveWordBackward: 'opt+left',
            moveWordForward: 'opt+right',
            deleteBackward: ['ctrl+backspace', 'ctrl+h'],
            deleteForward: ['ctrl+delete', 'ctrl+d'],
            deleteLineBackward: 'cmd+shift?+backspace',
            deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
            deleteWordBackward: 'opt+shift?+backspace',
            deleteWordForward: 'opt+shift?+delete',
            extendLineBackward: 'opt+shift+up',
            extendLineForward: 'opt+shift+down',
            redo: 'cmd+shift+z',
            transposeCharacter: 'ctrl+t',
          },
          WINDOWS_HOTKEYS = {
            deleteWordBackward: 'ctrl+shift?+backspace',
            deleteWordForward: 'ctrl+shift?+delete',
            redo: ['ctrl+y', 'ctrl+shift+z'],
          },
          create = (key) => {
            var generic = HOTKEYS[key],
              apple = APPLE_HOTKEYS[key],
              windows = WINDOWS_HOTKEYS[key],
              isGeneric = generic && (0, lib.v_)(generic),
              isApple = apple && (0, lib.v_)(apple),
              isWindows = windows && (0, lib.v_)(windows)
            return (event) =>
              !(!isGeneric || !isGeneric(event)) ||
              !!(index_es_IS_APPLE && isApple && isApple(event)) ||
              !(index_es_IS_APPLE || !isWindows || !isWindows(event))
          }
        ;(create('bold'),
          create('compose'),
          create('moveBackward'),
          create('moveForward'),
          create('deleteBackward'),
          create('deleteForward'),
          create('deleteLineBackward'),
          create('deleteLineForward'),
          create('deleteWordBackward'),
          create('deleteWordForward'),
          create('extendBackward'),
          create('extendForward'),
          create('extendLineBackward'),
          create('extendLineForward'),
          create('italic'),
          create('moveLineBackward'),
          create('moveLineForward'),
          create('moveWordBackward'),
          create('moveWordForward'),
          create('redo'),
          create('insertSoftBreak'),
          create('splitBlock'),
          create('transposeCharacter'),
          create('undo'))
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {}
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source)
              for (i = 0; i < sourceKeys.length; i++)
                ((key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]))
              return target
            })(source, excluded)
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
            for (i = 0; i < sourceSymbolKeys.length; i++)
              ((key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key])))
          }
          return target
        }
        var _excluded = ['anchor', 'focus'],
          _excluded2 = ['anchor', 'focus']
        var isDecorationFlagsEqual = (range, other) => {
            var obj1,
              obj2,
              rangeOwnProps = _objectWithoutProperties(range, _excluded),
              otherOwnProps = _objectWithoutProperties(other, _excluded2)
            return (
              range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] &&
              ((obj1 = rangeOwnProps),
              (obj2 = otherOwnProps),
              Object.keys(obj1).length === Object.keys(obj2).length &&
                Object.keys(obj1).every(
                  (key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
                ))
            )
          },
          isPlainObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js'
          ),
          isPlainObject_default = __webpack_require__.n(isPlainObject),
          castArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/castArray.js'
          ),
          castArray_default = __webpack_require__.n(castArray),
          map = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js'
          ),
          map_default = __webpack_require__.n(map),
          is_plain_object = __webpack_require__(
            '../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs'
          ),
          slate_dist_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          ElementApi = { ...dist_index_es.Hg },
          PathApi = {
            ...dist_index_es.wA,
            child: (path2, index) => path2.concat([index]),
            firstChild: (path2) => PathApi.child(path2, 0),
            lastIndex: (path2) => path2.at(-1) ?? -1,
            next: (path2) => {
              try {
                return dist_index_es.wA.next(path2)
              } catch {
                return path2
              }
            },
            parent: (path2) => {
              try {
                return dist_index_es.wA.parent(path2)
              } catch {
                return path2
              }
            },
            previous: (path2) => {
              if (0 === path2.length) return
              const last2 = path2.at(-1)
              return last2 <= 0 ? void 0 : path2.slice(0, -1).concat(last2 - 1)
            },
          },
          NodeExtension = {
            *children(root, path2, options = {}) {
              const { from, reverse = !1, to } = options,
                ancestor = NodeApi.ancestor(root, path2)
              if (!ancestor) return
              const { children } = ancestor
              let index = reverse ? children.length - 1 : 0
              const endIndex = to ?? (reverse ? 0 : children.length)
              for (
                void 0 !== from && (index = from);
                reverse ? index >= endIndex : index < endIndex;

              ) {
                const child = NodeApi.child(ancestor, index),
                  childPath = path2.concat(index)
                ;(yield [child, childPath],
                  (index = reverse ? index - 1 : index + 1))
              }
            },
            firstChild: (root, path2) =>
              NodeApi.children(root, path2).next().value,
            firstText: (root, options) =>
              NodeApi.texts(root, options).next().value,
            isEditor: (value) => (0, dist_index_es.sb)(value),
            isLastChild(root, path2) {
              if (0 === path2.length) return !1
              const parent2 = NodeApi.parent(root, path2)
              if (!parent2) return !1
              return path2.at(-1) === parent2.children.length - 1
            },
            lastChild: (root, path2) =>
              NodeApi.children(root, path2, { reverse: !0 }).next().value,
          },
          TextApi = dist_index_es.EY,
          NodeApi = {
            ...dist_index_es.bP,
            isAncestor: ElementApi.isAncestor,
            ancestor: (...args) => {
              try {
                return dist_index_es.bP.ancestor(...args)
              } catch {}
            },
            common: (...args) => {
              try {
                return dist_index_es.bP.common(...args)
              } catch {}
            },
            descendant: (...args) => {
              try {
                return dist_index_es.bP.descendant(...args)
              } catch {}
            },
            first: (...args) => {
              try {
                return dist_index_es.bP.first(...args)
              } catch {}
            },
            fragment: (...args) => {
              try {
                return dist_index_es.bP.fragment(...args)
              } catch {
                return []
              }
            },
            get: (...args) => {
              try {
                return dist_index_es.bP.get(...args)
              } catch {}
            },
            hasSingleChild: (node2) =>
              !!TextApi.isText(node2) ||
              (1 === node2.children.length &&
                NodeApi.hasSingleChild(node2.children[0])),
            isDescendant: (node2) =>
              ElementApi.isElement(node2) || TextApi.isText(node2),
            last: (...args) => {
              try {
                return dist_index_es.bP.last(...args)
              } catch {}
            },
            leaf: (...args) => {
              try {
                return dist_index_es.bP.leaf(...args)
              } catch {}
            },
            parent: (...args) => {
              try {
                return dist_index_es.bP.parent(...args)
              } catch {}
            },
            ...NodeExtension,
          },
          LocationApi = {
            ...dist_index_es.aZ,
            isAt: (value) =>
              LocationApi.isLocation(value) || NodeApi.isNode(value),
          },
          SpanApi = dist_index_es.L9,
          OperationApi = dist_index_es.I,
          RangeApi = {
            ...dist_index_es.Q6,
            contains: (range2, target) => {
              const [targetStart, targetEnd] = RangeApi.edges(target)
              return (
                RangeApi.includes(range2, targetStart) &&
                RangeApi.includes(range2, targetEnd)
              )
            },
            isCollapsed: (range2) =>
              !!range2 && dist_index_es.Q6.isCollapsed(range2),
            isExpanded: (range2) =>
              !!range2 && dist_index_es.Q6.isExpanded(range2),
          },
          PointApi = {
            ...dist_index_es.bR,
            get: (at, { focus: focus2 } = {}) => {
              let point2
              return (
                RangeApi.isRange(at) &&
                  (point2 = focus2 ? at.focus : at.anchor),
                PointApi.isPoint(at) && (point2 = at),
                PathApi.isPath(at) && (point2 = { offset: 0, path: at }),
                point2
              )
            },
          },
          dist_blur = (editor) => DOMEditor.blur(editor),
          deselectDOM = (editor) => DOMEditor.deselect(editor),
          findDocumentOrShadowRoot = (editor) => {
            try {
              return DOMEditor.findDocumentOrShadowRoot(editor)
            } catch {}
          },
          findEventRange = (editor, event) => {
            try {
              return DOMEditor.findEventRange(editor, event)
            } catch {}
          },
          findKey = (editor, node2) => {
            try {
              return DOMEditor.findKey(editor, node2)
            } catch {}
          },
          findPath = (editor, node2, options) => {
            const findNodePath = () => {
              const nodeEntry = editor.api.node({
                ...options,
                at: [],
                match: (n2) => n2 === node2,
              })
              return nodeEntry?.[1]
            }
            if (options) return findNodePath()
            try {
              return DOMEditor.findPath(editor, node2)
            } catch {
              return findNodePath()
            }
          },
          dist_focus = (editor, { at, edge, retries = 5 } = {}) => {
            const reselect = (at2) => {
              editor.tf.withoutNormalizing(() => {
                ;(editor.tf.deselect(), editor.tf.select(at2))
              })
            }
            if (edge) {
              const target =
                'startEditor' === edge || 'endEditor' === edge
                  ? []
                  : (at ?? editor.selection)
              target &&
                reselect(
                  'start' === edge
                    ? editor.api.start(target)
                    : editor.api.end(target)
                )
            } else at && reselect(at)
            try {
              DOMEditor.focus(editor, { retries })
            } catch (error) {
              slate_dist_console.error(error)
            }
          },
          getWindow = (editor) => {
            try {
              return DOMEditor.getWindow(editor)
            } catch {}
          },
          hasDOMNode = (editor, target, options) => {
            try {
              return DOMEditor.hasDOMNode(editor, target, options)
            } catch {}
            return !1
          },
          hasEditableTarget = (editor, target) => {
            try {
              return DOMEditor.hasEditableTarget(editor, target)
            } catch {}
            return !1
          },
          hasRange = (editor, range2) => {
            try {
              return DOMEditor.hasRange(editor, range2)
            } catch {}
            return !1
          },
          hasSelectableTarget = (editor, target) => {
            try {
              return DOMEditor.hasSelectableTarget(editor, target)
            } catch {}
            return !1
          },
          hasTarget = (editor, target) => {
            try {
              return DOMEditor.hasTarget(editor, target)
            } catch {}
            return !1
          },
          isComposing = (editor) => DOMEditor.isComposing(editor),
          isFocused = (editor) => DOMEditor.isFocused(editor),
          isReadOnly = (editor) => DOMEditor.isReadOnly(editor),
          isTargetInsideNonReadonlyVoid = (editor, target) => {
            try {
              return DOMEditor.isTargetInsideNonReadonlyVoid(editor, target)
            } catch {}
            return !1
          },
          toDOMNode = (editor, node2) => {
            try {
              return DOMEditor.toDOMNode(editor, node2)
            } catch {}
          },
          toDOMPoint = (editor, point2) => {
            try {
              return DOMEditor.toDOMPoint(editor, point2)
            } catch {}
          },
          toDOMRange = (editor, range2) => {
            try {
              return DOMEditor.toDOMRange(editor, range2)
            } catch {}
          },
          toSlateNode = (editor, domNode) => {
            try {
              return DOMEditor.toSlateNode(editor, domNode)
            } catch {}
          },
          toSlatePoint = (editor, domPoint, options) => {
            try {
              return DOMEditor.toSlatePoint(editor, domPoint, options)
            } catch {}
          },
          toSlateRange = (editor, domRange, options) => {
            try {
              return DOMEditor.toSlateRange(editor, domRange, options)
            } catch {}
          },
          edgeBlocks = (editor, { at: _at, ...options } = {}) => {
            const at = _at ?? editor.selection
            if (!at) return null
            const [start2, end2] = editor.api.edges(at ?? editor.selection),
              startBlock = editor.api.block({ at: start2, ...options })
            if (!startBlock) return null
            const endBlock = editor.api.block({ at: end2, ...options })
            return endBlock ? [startBlock, endBlock] : null
          },
          block = (editor, { above: above2, highest, ...options } = {}) => {
            if (highest) {
              const target = options.at ?? editor.selection
              if (!target) return
              const index = editor.api.path(target)?.[0]
              if (void 0 === index) return
              return editor.api.node([index])
            }
            return above2
              ? editor.api.above({ ...options, block: !0 })
              : editor.api.node({ ...options, block: !0, mode: 'lowest' })
          },
          blocks = (editor, options) => [
            ...editor.api.nodes({ ...options, block: !0 }),
          ],
          LEGACY_TRANSFORMS = new Set([
            'addMark',
            'apply',
            'blur',
            'collapse',
            'delete',
            'deleteBackward',
            'deleteForward',
            'deleteFragment',
            'deselect',
            'deselectDOM',
            'focus',
            'insertBreak',
            'insertData',
            'insertFragment',
            'insertFragmentData',
            'insertNode',
            'insertNodes',
            'insertSoftBreak',
            'insertText',
            'insertTextData',
            'liftNodes',
            'mergeNodes',
            'move',
            'moveNodes',
            'normalize',
            'normalizeNode',
            'redo',
            'removeMark',
            'removeNodes',
            'select',
            'setFragmentData',
            'setNodes',
            'setPoint',
            'setSelection',
            'setSplittingOnce',
            'splitNodes',
            'undo',
            'unsetNodes',
            'unwrapNodes',
            'withMerging',
            'withNewBatch',
            'withoutMerging',
            'withoutNormalizing',
            'withoutSaving',
            'wrapNodes',
            'writeHistory',
          ]),
          LEGACY_API = new Set([
            'above',
            'after',
            'before',
            'edges',
            'elementReadOnly',
            'end',
            'findDocumentOrShadowRoot',
            'findEventRange',
            'findKey',
            'findPath',
            'first',
            'fragment',
            'getDirtyPaths',
            'getFragment',
            'getMarks',
            'getWindow',
            'hasBlocks',
            'hasDOMNode',
            'hasEditableTarget',
            'hasInlines',
            'hasPath',
            'hasRange',
            'hasSelectableTarget',
            'hasTarget',
            'hasTexts',
            'highestBlock',
            'isBlock',
            'isComposing',
            'isEdge',
            'isElementReadOnly',
            'isEmpty',
            'isEnd',
            'isFocused',
            'isInline',
            'isMerging',
            'isNormalizing',
            'isReadOnly',
            'isSaving',
            'isSelectable',
            'isSplittingOnce',
            'isStart',
            'isTargetInsideNonReadonlyVoid',
            'isVoid',
            'last',
            'leaf',
            'levels',
            'markableVoid',
            'next',
            'node',
            'nodes',
            'normalize',
            'onChange',
            'operations',
            'parent',
            'path',
            'pathRef',
            'pathRefs',
            'point',
            'pointRef',
            'pointRefs',
            'positions',
            'previous',
            'range',
            'rangeRef',
            'rangeRefs',
            'selection',
            'setNormalizing',
            'shouldMergeNodes',
            'shouldNormalize',
            'start',
            'string',
            'toDOMNode',
            'toDOMPoint',
            'toDOMRange',
            'toSlateNode',
            'toSlatePoint',
            'toSlateRange',
            'unhangRange',
            'void',
          ]),
          assignLegacyTransforms = (editor, transforms) => {
            if (!transforms) return
            const e3 = editor,
              legacyTransforms = Object.entries(transforms).reduce(
                (acc, [key, value]) => (
                  LEGACY_TRANSFORMS.has(key) && (acc[key] = value),
                  acc
                ),
                {}
              )
            Object.assign(e3, legacyTransforms)
          },
          assignLegacyApi = (editor, api) => {
            if (!api) return
            const e3 = editor,
              legacyApi = Object.entries(api).reduce(
                (acc, [key, value]) => (
                  LEGACY_API.has(key) && (acc[key] = value),
                  acc
                ),
                {}
              )
            ;(Object.assign(e3, legacyApi),
              api.marks && (e3.getMarks = api.marks))
          },
          syncLegacyMethods = (editor) => {
            const e3 = editor
            ;(LEGACY_API.forEach((key) => {
              e3[key] &&
                ('getMarks' === key
                  ? (e3.api.marks = e3.getMarks)
                  : (e3.api[key] = e3[key]))
            }),
              LEGACY_TRANSFORMS.forEach((key) => {
                e3[key] && (e3.tf[key] = e3[key])
              }))
          },
          createPathRef = (editor, at, options) =>
            (0, dist_index_es.Rx)(editor, at, options),
          createPointRef = (editor, point2, options) =>
            (0, dist_index_es.ip)(editor, point2, options),
          getAt = (editor, at) =>
            at && isPlainObject_default()(at) && NodeApi.isNode(at)
              ? editor.api.findPath(at)
              : (at ?? void 0),
          getEndPoint = (editor, at, options = {}) => {
            try {
              if (options.previous) {
                const prevEntry = editor.api.previous({ at: getAt(editor, at) })
                if (!prevEntry) return
                return (0, dist_index_es._N)(editor, prevEntry[1])
              }
              return (0, dist_index_es._N)(editor, getAt(editor, at))
            } catch {}
          },
          getLeafNode = (editor, at, options) => {
            try {
              return (0, dist_index_es.V4)(editor, getAt(editor, at), options)
            } catch {}
          },
          getPointAfter = (editor, at, options) => {
            try {
              return (0, dist_index_es.Pl)(editor, getAt(editor, at), options)
            } catch {}
          },
          getPointBefore = (editor, at, options) => {
            if (!options || (!options.match && !options.matchString)) {
              try {
                return (0, dist_index_es.gM)(editor, getAt(editor, at), options)
              } catch {}
              return
            }
            const unitOffset = !options.unit || 'offset' === options.unit,
              matchStrings = options.matchString
                ? castArray_default()(options.matchString)
                : [''],
              matchByRegex = options.matchByRegex ?? !1
            let point2
            return (
              matchStrings.some((matchString) => {
                let beforeAt = at,
                  previousBeforePoint = editor.api.point(at, { edge: 'end' })
                const stackLength = matchString.length + 1,
                  stack = Array.from({ length: stackLength })
                let count = 0
                for (;;) {
                  const beforePoint = (0, dist_index_es.gM)(
                    editor,
                    getAt(editor, beforeAt),
                    options
                  )
                  if (!beforePoint)
                    return void (
                      options.matchBlockStart && (point2 = previousBeforePoint)
                    )
                  if (
                    editor.api.isAt({
                      at: { anchor: beforePoint, focus: previousBeforePoint },
                      blocks: !0,
                    })
                  )
                    return void (
                      options.matchBlockStart && (point2 = previousBeforePoint)
                    )
                  const beforeString = editor.api.string({
                    anchor: beforePoint,
                    focus: previousBeforePoint,
                  })
                  let beforeStringToMatch = beforeString
                  unitOffset &&
                    stackLength &&
                    (stack.unshift({ point: beforePoint, text: beforeString }),
                    stack.pop(),
                    (beforeStringToMatch = map_default()(
                      stack.slice(0, -1),
                      'text'
                    ).join('')))
                  if (
                    (matchByRegex
                      ? !!matchString.match(beforeStringToMatch)
                      : beforeStringToMatch === matchString) ||
                    options.match?.({
                      at,
                      beforePoint,
                      beforeString: beforeStringToMatch,
                    })
                  )
                    return options.afterMatch
                      ? stackLength && unitOffset
                        ? ((point2 = stack.at(-1)?.point), !!point2)
                        : ((point2 = previousBeforePoint), !0)
                      : ((point2 = beforePoint), !0)
                  if (
                    ((previousBeforePoint = beforePoint),
                    (beforeAt = beforePoint),
                    (count += 1),
                    !options.skipInvalid &&
                      (!matchString || count >= matchString.length))
                  )
                    return
                }
              }),
              point2
            )
          },
          getStartPoint = (editor, at, options = {}) => {
            try {
              if (options.next) {
                const nextEntry = editor.api.next({ at: getAt(editor, at) })
                if (!nextEntry) return
                return (0, dist_index_es.ni)(editor, nextEntry[1])
              }
              return (0, dist_index_es.ni)(editor, getAt(editor, at))
            } catch {}
          },
          getVoidNode = (editor, options) =>
            (0, dist_index_es.$H)(editor, {
              ...options,
              at: getAt(editor, options?.at),
            }),
          isBlock = (editor, value) =>
            ElementApi.isElement(value) && (0, dist_index_es.WH)(editor, value)
        var match = (obj, path2, predicate) =>
            !predicate ||
            ('object' == typeof predicate
              ? Object.entries(predicate).every(([key, value]) => {
                  const values = (function castArray2(value) {
                    return Array.isArray(value) ? value : [value]
                  })(value)
                  return values.includes(obj[key])
                })
              : predicate(obj, path2)),
          getMatch = (
            editor,
            { id, block: block2, empty, match: matchObjOrFn, text } = {}
          ) => {
            let hasMatch = !1,
              matchFn = () => !0
            return (
              void 0 !== text &&
                ((hasMatch = !0),
                (matchFn = combineMatch(
                  matchFn,
                  (n2) => TextApi.isText(n2) === text
                ))),
              void 0 !== empty &&
                ((hasMatch = !0),
                (matchFn = combineMatch(matchFn, (n2) =>
                  TextApi.isText(n2)
                    ? n2.text.length > 0 == !empty
                    : editor.api.isEmpty(n2) === empty
                ))),
              void 0 !== block2 &&
                ((hasMatch = !0),
                (matchFn = combineMatch(
                  matchFn,
                  (n2) => editor.api.isBlock(n2) === block2
                ))),
              void 0 !== id &&
                ((hasMatch = !0),
                (matchFn = combineMatch(
                  matchFn,
                  (n2) => (!0 === id && !!n2.id) || n2.id === id
                ))),
              'object' == typeof matchObjOrFn
                ? ((hasMatch = !0),
                  (matchFn = combineMatch(matchFn, (n2, p) =>
                    match(n2, p, matchObjOrFn)
                  )))
                : 'function' == typeof matchObjOrFn &&
                  ((hasMatch = !0),
                  (matchFn = combineMatch(matchFn, matchObjOrFn))),
              hasMatch ? matchFn : void 0
            )
          },
          getQueryOptions = (
            editor,
            { id, empty, match: match2, text, ...options } = {}
          ) => {
            const { at, block: block2 } = options
            return {
              ...options,
              at: getAt(editor, at),
              match: getMatch(editor, {
                id,
                block: block2,
                empty,
                match: match2,
                text,
              }),
            }
          },
          combineMatch = (match1, match2) => (node2, path2) =>
            match1(node2, path2) && (!match2 || match2(node2, path2)),
          combineMatchOptions = (editor, match1, options) => (node2, path2) => {
            const match2 = getMatch(editor, options)
            return (
              (!match1 || match1(node2, path2)) &&
              (!match2 || match2(node2, path2))
            )
          }
        function* nodes(editor, options = {}) {
          options = getQueryOptions(editor, options)
          const {
              ignoreNonSelectable = !1,
              mode = 'all',
              reverse = !1,
              universal = !1,
              voids = !1,
            } = options,
            at = getAt(editor, options.at) ?? editor.selection
          let from,
            to,
            match2 = getMatch(editor, options)
          if ((match2 || (match2 = () => !0), !at)) return
          if (SpanApi.isSpan(at)) ((from = at[0]), (to = at[1]))
          else {
            const first2 = editor.api.path(at, { edge: 'start' }),
              last2 = editor.api.path(at, { edge: 'end' })
            if (
              ((from = reverse ? last2 : first2),
              (to = reverse ? first2 : last2),
              !first2 || !last2)
            )
              return
          }
          const nodeEntries = NodeApi.nodes(editor, {
              from,
              reverse,
              to,
              pass: ([node2]) =>
                !!ElementApi.isElement(node2) &&
                (!(
                  voids ||
                  (!editor.api.isVoid(node2) &&
                    !editor.api.isElementReadOnly(node2))
                ) ||
                  !(!ignoreNonSelectable || editor.api.isSelectable(node2))),
            }),
            matches = []
          let hit
          for (const [node2, path2] of nodeEntries) {
            if (
              ignoreNonSelectable &&
              ElementApi.isElement(node2) &&
              !editor.api.isSelectable(node2)
            )
              continue
            const isLower = hit && 0 === PathApi.compare(path2, hit[1])
            if ('highest' === mode && isLower) continue
            if (!match2(node2, path2)) {
              if (universal && !isLower && TextApi.isText(node2)) return
              continue
            }
            if ('lowest' === mode && isLower) {
              hit = [node2, path2]
              continue
            }
            const emit = 'lowest' === mode ? hit : [node2, path2]
            ;(emit && (universal ? matches.push(emit) : yield emit),
              (hit = [node2, path2]))
          }
          ;('lowest' === mode &&
            hit &&
            (universal ? matches.push(hit) : yield hit),
            universal && (yield* matches))
        }
        var withoutNormalizing = (editor, fn) => {
            let normalized = !1
            return (
              (0, dist_index_es.rx)(editor, () => {
                normalized = !!fn()
              }),
              normalized
            )
          },
          dist_select = (editor, target, options = {}) => {
            const {
              edge,
              focus: focus2,
              next: next2,
              previous: previous2,
            } = options
            if ((focus2 && editor.tf.focus(), next2 || previous2)) {
              const at2 = getAt(editor, target) ?? editor.selection
              if (!at2) return
              const path2 = editor.api.path(at2)
              if (!path2) return
              const point2 = previous2
                ? editor.api.end(path2, { previous: !0 })
                : editor.api.start(path2, { next: !0 })
              if (!point2) return
              return void (0, dist_index_es.Lt)(editor, point2)
            }
            if (edge) {
              const at2 = getAt(editor, target) ?? editor.selection
              if (!at2) return
              const path2 = PathApi.isPath(at2)
                ? at2
                : editor.api.node({ at: at2, block: !0 })?.[1]
              if (!path2) return
              const point2 =
                'end' === edge ? editor.api.end(path2) : editor.api.start(path2)
              if (!point2) return
              return void (0, dist_index_es.Lt)(editor, point2)
            }
            const at = getAt(editor, target)
            at && (0, dist_index_es.Lt)(editor, at)
          }
        function castArray4(value) {
          return Array.isArray(value) ? value : [value]
        }
        var queryNode = (
            entry,
            { allow, exclude, filter, level, maxLevel } = {}
          ) => {
            if (!entry) return !1
            const [node2, path2] = entry
            if (level) {
              if (!castArray4(level).includes(path2.length)) return !1
            }
            if (maxLevel && path2.length > maxLevel) return !1
            if (filter && !filter(entry)) return !1
            if (allow) {
              const allows = castArray4(allow)
              if (allows.length > 0 && !allows.includes(node2.type)) return !1
            }
            if (exclude) {
              const excludes = castArray4(exclude)
              if (excludes.length > 0 && excludes.includes(node2.type))
                return !1
            }
            return !0
          },
          descendant = (editor, options) => {
            try {
              const {
                at = editor.selection,
                match: _match,
                reverse = !1,
                voids = !1,
              } = options
              if (!at) return
              let from, to
              if (SpanApi.isSpan(at)) [from, to] = at
              else if (RangeApi.isRange(at)) {
                const first2 = editor.api.path(at, { edge: 'start' }),
                  last2 = editor.api.path(at, { edge: 'end' })
                ;((from = reverse ? last2 : first2),
                  (to = reverse ? first2 : last2))
              }
              let root = [editor, []]
              PathApi.isPath(at) && (root = editor.api.node(at))
              const nodeEntries = NodeApi.descendants(root[0], {
                from,
                reverse,
                to,
                pass: ([n2]) => !voids && editor.api.isVoid(n2),
              })
              for (const [node2, path2] of nodeEntries)
                if (match(node2, path2, _match))
                  return [node2, at.concat(path2)]
            } catch {
              return
            }
          },
          mark = (editor, key) => {
            const marks2 = editor.api.marks()
            return marks2?.[key]
          },
          hasMark = (editor, key) => !!editor.api.mark(key),
          isSelected = (editor, target, options = {}) => {
            const { contains = !1 } = options
            if (!editor.selection) return !1
            const range2 = RangeApi.isRange(target)
              ? target
              : editor.api.range(target)
            return (
              !!range2 &&
              (contains
                ? RangeApi.contains(editor.selection, range2)
                : !!RangeApi.intersection(editor.selection, range2))
            )
          },
          isAt = (
            editor,
            {
              at = editor.selection,
              block: block2,
              blocks: blocks2,
              end: end2,
              start: start2,
              text,
              word,
              ...options
            } = {}
          ) => {
            if (!at) return !1
            if (PointApi.isPoint(at)) {
              if (word && end2) {
                const after2 = editor.api.after(at)
                if (!after2) return !0
                const afterRange = editor.api.range(at, after2),
                  afterText = editor.api.string(afterRange)
                return /^(?:\s|$)/.test(afterText)
              }
              return !1
            }
            if (RangeApi.isRange(at)) {
              const [startPoint, endPoint] = RangeApi.edges(at)
              if (text) return PathApi.equals(startPoint.path, endPoint.path)
              const startBlock = editor.api.block({
                  at: startPoint,
                  ...options,
                }),
                endBlock = editor.api.block({ at: endPoint, ...options })
              if (blocks2)
                return (
                  !(!startBlock && !endBlock) &&
                  (!startBlock ||
                    !endBlock ||
                    !PathApi.equals(startBlock[1], endBlock[1]))
                )
              if (!startBlock || !endBlock) return !1
              if (block2) return PathApi.equals(startBlock[1], endBlock[1])
              if (start2)
                return (
                  editor.api.isStart(startPoint, startBlock[1]) ||
                  (RangeApi.isExpanded(at) &&
                    editor.api.isStart(endPoint, startBlock[1]))
                )
              if (end2) return editor.api.isEnd(endPoint, endBlock[1])
            }
            return !1
          },
          isEditorEnd = (editor) => {
            if (editor.selection) {
              const point2 = editor.selection.focus,
                endPoint = editor.api.end([])
              return (
                0 === endPoint.offset &&
                editor.api.isEnd(point2, point2) &&
                PathApi.equals(
                  PathApi.next(PathApi.parent(point2.path)),
                  endPoint.path
                )
              )
            }
            return !1
          },
          isText = (editor, at) => {
            const node2 = editor.api.node(at)?.[0]
            return TextApi.isText(node2)
          },
          nodesRange = (editor, nodes2) => {
            if (0 === nodes2.length) return
            const firstBlockPath = nodes2[0][1],
              lastBlockPath = nodes2.at(-1)[1]
            return editor.api.range(firstBlockPath, lastBlockPath)
          }
        function prop({
          key,
          defaultValue,
          getProp,
          mode = 'block',
          nodes: nodes2,
        }) {
          if (0 === nodes2.length) return defaultValue
          const getNodeValue = getProp ?? ((node2) => node2[key])
          let value
          for (const node2 of nodes2) {
            if ('block' === mode || 'all' === mode) {
              const nodeValue = getNodeValue(node2)
              if (void 0 !== nodeValue) {
                if (void 0 === value) value = nodeValue
                else if (value !== nodeValue) return
                if ('block' === mode) continue
              } else if ('block' === mode) return defaultValue
            }
            if ('text' === mode || 'all' === mode) {
              const textEntries = Array.from(NodeApi.texts(node2))
              for (const [text] of textEntries) {
                const textValue = getNodeValue(text)
                if (void 0 !== textValue) {
                  if (void 0 === value) value = textValue
                  else if (value !== textValue) return
                } else if ('text' === mode) return defaultValue
              }
            }
          }
          return value
        }
        var t = (t2) =>
            'object' == typeof t2 && null != t2 && 1 === t2.nodeType,
          e = (t2, e3) =>
            (!e3 || 'hidden' !== t2) && 'visible' !== t2 && 'clip' !== t2,
          dist_n = (t2, n2) => {
            if (
              t2.clientHeight < t2.scrollHeight ||
              t2.clientWidth < t2.scrollWidth
            ) {
              const o3 = getComputedStyle(t2, null)
              return (
                e(o3.overflowY, n2) ||
                e(o3.overflowX, n2) ||
                ((t3) => {
                  const e3 = ((t4) => {
                    if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
                      return null
                    try {
                      return t4.ownerDocument.defaultView.frameElement
                    } catch (t5) {
                      return null
                    }
                  })(t3)
                  return (
                    !!e3 &&
                    (e3.clientHeight < t3.scrollHeight ||
                      e3.clientWidth < t3.scrollWidth)
                  )
                })(t2)
              )
            }
            return !1
          },
          o = (t2, e3, n2, o3, l2, r2, i, s) =>
            (r2 < t2 && i > e3) || (r2 > t2 && i < e3)
              ? 0
              : (r2 <= t2 && s <= n2) || (i >= e3 && s >= n2)
                ? r2 - t2 - o3
                : (i > e3 && s < n2) || (r2 < t2 && s > n2)
                  ? i - e3 + l2
                  : 0,
          l = (t2) => {
            const e3 = t2.parentElement
            return null == e3 ? t2.getRootNode().host || null : e3
          },
          r = (e3, r2) => {
            var i, s, d, h
            if ('undefined' == typeof document) return []
            const {
                scrollMode: c,
                block: f,
                inline: u,
                boundary: a,
                skipOverflowHiddenElements: g,
              } = r2,
              p = 'function' == typeof a ? a : (t2) => t2 !== a
            if (!t(e3)) throw new TypeError('Invalid target')
            const m = document.scrollingElement || document.documentElement,
              w = []
            let W = e3
            for (; t(W) && p(W); ) {
              if (((W = l(W)), W === m)) {
                w.push(W)
                break
              }
              ;(null != W &&
                W === document.body &&
                dist_n(W) &&
                !dist_n(document.documentElement)) ||
                (null != W && dist_n(W, g) && w.push(W))
            }
            const b =
                null !=
                (s = null == (i = window.visualViewport) ? void 0 : i.width)
                  ? s
                  : innerWidth,
              H =
                null !=
                (h = null == (d = window.visualViewport) ? void 0 : d.height)
                  ? h
                  : innerHeight,
              { scrollX: y, scrollY: M } = window,
              {
                height: v,
                width: E,
                top: x,
                right: C,
                bottom: I,
                left: R,
              } = e3.getBoundingClientRect(),
              {
                top: T,
                right: B,
                bottom: F,
                left: V,
              } = ((t2) => {
                const e4 = window.getComputedStyle(t2)
                return {
                  top: parseFloat(e4.scrollMarginTop) || 0,
                  right: parseFloat(e4.scrollMarginRight) || 0,
                  bottom: parseFloat(e4.scrollMarginBottom) || 0,
                  left: parseFloat(e4.scrollMarginLeft) || 0,
                }
              })(e3)
            let k =
                'start' === f || 'nearest' === f
                  ? x - T
                  : 'end' === f
                    ? I + F
                    : x + v / 2 - T + F,
              D =
                'center' === u ? R + E / 2 - V + B : 'end' === u ? C + B : R - V
            const L = []
            for (let t2 = 0; t2 < w.length; t2++) {
              const e4 = w[t2],
                {
                  height: l2,
                  width: r3,
                  top: i2,
                  right: s2,
                  bottom: d2,
                  left: h2,
                } = e4.getBoundingClientRect()
              if (
                'if-needed' === c &&
                x >= 0 &&
                R >= 0 &&
                I <= H &&
                C <= b &&
                ((e4 === m && !dist_n(e4)) ||
                  (x >= i2 && I <= d2 && R >= h2 && C <= s2))
              )
                return L
              const a2 = getComputedStyle(e4),
                g2 = parseInt(a2.borderLeftWidth, 10),
                p2 = parseInt(a2.borderTopWidth, 10),
                W2 = parseInt(a2.borderRightWidth, 10),
                T2 = parseInt(a2.borderBottomWidth, 10)
              let B2 = 0,
                F2 = 0
              const V2 =
                  'offsetWidth' in e4
                    ? e4.offsetWidth - e4.clientWidth - g2 - W2
                    : 0,
                S =
                  'offsetHeight' in e4
                    ? e4.offsetHeight - e4.clientHeight - p2 - T2
                    : 0,
                X =
                  'offsetWidth' in e4
                    ? 0 === e4.offsetWidth
                      ? 0
                      : r3 / e4.offsetWidth
                    : 0,
                Y =
                  'offsetHeight' in e4
                    ? 0 === e4.offsetHeight
                      ? 0
                      : l2 / e4.offsetHeight
                    : 0
              if (m === e4)
                ((B2 =
                  'start' === f
                    ? k
                    : 'end' === f
                      ? k - H
                      : 'nearest' === f
                        ? o(M, M + H, H, p2, T2, M + k, M + k + v, v)
                        : k - H / 2),
                  (F2 =
                    'start' === u
                      ? D
                      : 'center' === u
                        ? D - b / 2
                        : 'end' === u
                          ? D - b
                          : o(y, y + b, b, g2, W2, y + D, y + D + E, E)),
                  (B2 = Math.max(0, B2 + M)),
                  (F2 = Math.max(0, F2 + y)))
              else {
                ;((B2 =
                  'start' === f
                    ? k - i2 - p2
                    : 'end' === f
                      ? k - d2 + T2 + S
                      : 'nearest' === f
                        ? o(i2, d2, l2, p2, T2 + S, k, k + v, v)
                        : k - (i2 + l2 / 2) + S / 2),
                  (F2 =
                    'start' === u
                      ? D - h2 - g2
                      : 'center' === u
                        ? D - (h2 + r3 / 2) + V2 / 2
                        : 'end' === u
                          ? D - s2 + W2 + V2
                          : o(h2, s2, r3, g2, W2 + V2, D, D + E, E)))
                const { scrollLeft: t3, scrollTop: n2 } = e4
                ;((B2 =
                  0 === Y
                    ? 0
                    : Math.max(
                        0,
                        Math.min(n2 + B2 / Y, e4.scrollHeight - l2 / Y + S)
                      )),
                  (F2 =
                    0 === X
                      ? 0
                      : Math.max(
                          0,
                          Math.min(t3 + F2 / X, e4.scrollWidth - r3 / X + V2)
                        )),
                  (k += n2 - B2),
                  (D += t3 - F2))
              }
              L.push({ el: e4, top: B2, left: F2 })
            }
            return L
          }
        function e2(e3, r2) {
          if (
            !e3.isConnected ||
            !((t2) => {
              let o3 = t2
              for (; o3 && o3.parentNode; ) {
                if (o3.parentNode === document) return !0
                o3 =
                  o3.parentNode instanceof ShadowRoot
                    ? o3.parentNode.host
                    : o3.parentNode
              }
              return !1
            })(e3)
          )
            return
          const n2 = ((t2) => {
            const o3 = window.getComputedStyle(t2)
            return {
              top: parseFloat(o3.scrollMarginTop) || 0,
              right: parseFloat(o3.scrollMarginRight) || 0,
              bottom: parseFloat(o3.scrollMarginBottom) || 0,
              left: parseFloat(o3.scrollMarginLeft) || 0,
            }
          })(e3)
          if ('object' == typeof (t2 = r2) && 'function' == typeof t2.behavior)
            return r2.behavior(r(e3, r2))
          var t2
          const l2 = 'boolean' == typeof r2 || null == r2 ? void 0 : r2.behavior
          for (const { el: a, top: i, left: s } of r(
            e3,
            ((t2) => {
              return !1 === t2
                ? { block: 'end', inline: 'nearest' }
                : (t3 = t2) === Object(t3) && 0 !== Object.keys(t3).length
                  ? t2
                  : { block: 'start', inline: 'nearest' }
              var t3
            })(r2)
          )) {
            const t2 = i - n2.top + n2.bottom,
              o3 = s - n2.left + n2.right
            a.scroll({ top: t2, left: o3, behavior: l2 })
          }
        }
        var defaultOptions = { scrollMode: 'if-needed' }
        function scrollIntoView(editor, target, options = defaultOptions) {
          requestAnimationFrame(() => {
            let domRange
            if (PointApi.isPoint(target)) {
              const { offset = 0, path: path2 } = target
              domRange = editor.api.toDOMRange({
                anchor: { offset, path: path2 },
                focus: { offset, path: path2 },
              })
            } else domRange = target
            if (!domRange) return
            const leafEl = domRange.startContainer.parentElement
            ;((leafEl.getBoundingClientRect =
              domRange.getBoundingClientRect.bind(domRange)),
              e2(leafEl, options),
              setTimeout(() => delete leafEl.getBoundingClientRect, 0))
          })
        }
        var some = (editor, options) => !!editor.api.node(options),
          above = (editor, options) => {
            try {
              return (0, dist_index_es.G1)(
                editor,
                getQueryOptions(editor, options)
              )
            } catch {
              return
            }
          },
          addMark = (editor, key, value) =>
            (0, dist_index_es.BY)(editor, key, value),
          createRangeRef = (editor, range2, options) =>
            (0, dist_index_es.fc)(editor, range2, options),
          deleteBackward = (editor, unit = 'character') => {
            ;(0, dist_index_es.nm)(editor, unit)
          },
          deleteForward = (editor, unit = 'character') => {
            ;(0, dist_index_es.GJ)(editor, unit)
          },
          deleteFragment = (editor, options) =>
            (0, dist_index_es.WD)(editor, options),
          node = (editor, atOrOptions, nodeOptions) => {
            try {
              if (LocationApi.isAt(atOrOptions)) {
                const at = getAt(editor, atOrOptions)
                return (0, dist_index_es.rH)(editor, at, nodeOptions)
              }
              const options = atOrOptions
              return editor.api.nodes(options).next().value
            } catch {
              return
            }
          },
          path = (editor, at, options) => {
            try {
              return (0, dist_index_es.Ae)(editor, getAt(editor, at), options)
            } catch {}
          },
          getEdgePoints = (editor, at) => {
            try {
              return (0, dist_index_es.Jo)(editor, getAt(editor, at))
            } catch {}
          },
          getEditorString = (editor, at = editor.selection, options) => {
            if (!at) return ''
            try {
              return (0, dist_index_es.Yj)(editor, getAt(editor, at), options)
            } catch {
              return ''
            }
          },
          getFirstNode = (editor, at) => {
            try {
              return (0, dist_index_es.$1)(editor, getAt(editor, at))
            } catch {}
          },
          getFragment = (editor, at, options) => {
            if (null === at) return []
            try {
              const result =
                void 0 === at
                  ? (0, dist_index_es.hn)(editor)
                  : (0, dist_index_es.aM)(editor, getAt(editor, at))
              return result.length > 0 &&
                options?.unwrap &&
                options.unwrap.length > 0
                ? ((nodes2, types) => {
                    const unwrap = (nodes3, acc = []) => (
                      nodes3.forEach((node2) => {
                        if (types?.includes(node2.type))
                          return unwrap(node2.children, acc)
                        acc.push(node2)
                      }),
                      acc
                    )
                    return unwrap(nodes2)
                  })(result, options.unwrap)
                : result
            } catch {
              return []
            }
          },
          getLevels = (editor, options) =>
            (0, dist_index_es.yr)(editor, getQueryOptions(editor, options)),
          getMarks = (editor) => (0, dist_index_es.Z8)(editor),
          getPathRefs = (editor) => (0, dist_index_es.ML)(editor),
          getPoint = (editor, at, options) => {
            try {
              return (0, dist_index_es.zx)(editor, getAt(editor, at), options)
            } catch {}
          },
          getPointRefs = (editor) => (0, dist_index_es.ZF)(editor),
          getPositions = (editor, options) =>
            (0, dist_index_es.oO)(editor, {
              ...options,
              at: getAt(editor, options?.at),
            }),
          getRangeRefs = (editor) => (0, dist_index_es.Q1)(editor),
          hasBlocks = (editor, element) =>
            (0, dist_index_es.XP)(editor, element),
          hasInlines = (editor, element) =>
            (0, dist_index_es.Xq)(editor, element),
          hasTexts = (editor, element) =>
            (0, dist_index_es.fx)(editor, element),
          insertBreak = (editor) => (0, dist_index_es.J7)(editor),
          insertNode = (editor, node2, options) =>
            editor.tf.insertNodes(node2, options),
          isEdgePoint = (editor, point2, at) =>
            (0, dist_index_es.UP)(editor, point2, at),
          isEditorNormalizing = (editor) => (0, dist_index_es.jM)(editor),
          isElementReadOnly = (editor, options) =>
            (0, dist_index_es.dQ)(editor, options),
          isEmpty = (editor, target = [], options) => {
            if (null === target) return !0
            if (
              (PathApi.isPath(target) && 0 === target.length) ||
              NodeApi.isEditor(target)
            )
              return (
                1 === editor.children.length &&
                (0, dist_index_es.Im)(editor, editor.children[0])
              )
            if (options?.after) {
              const blockAbove = editor.api.block({ above: !0, at: target })
              if (!blockAbove) return !1
              const point2 = editor.api.point(target),
                selectionParentEntry = editor.api.parent(target)
              if (!selectionParentEntry) return !1
              const [, selectionParentPath] = selectionParentEntry
              if (!editor.api.isEnd(point2, selectionParentPath)) return !1
              const siblingNodes = Array.from(
                NodeApi.children(editor, blockAbove[1], {
                  from: PathApi.lastIndex(point2.path) + 1,
                })
              ).map(([node2]) => node2)
              if (!(siblingNodes.length > 0))
                return editor.api.isEnd(point2, blockAbove[1])
              for (const siblingNode of siblingNodes)
                if (TextApi.isText(siblingNode) && siblingNode.text) return !1
              return !0
            }
            if (PathApi.isPath(target))
              return (0, dist_index_es.Im)(editor, editor.api.node(target)?.[0])
            if (options?.block) {
              const block2 = editor.api.block({ at: target })
              if (!block2) return !1
              target = block2[0]
            }
            if (!NodeApi.isNode(target)) {
              const nodes2 = editor.api.nodes({ at: target, ...options })
              for (const node2 of nodes2)
                if (!(0, dist_index_es.Im)(editor, node2[0])) return !1
              return !0
            }
            return (0, dist_index_es.Im)(editor, target)
          },
          isEndPoint = (editor, point2, at) =>
            !!point2 && (0, dist_index_es.uV)(editor, point2, at),
          isStartPoint = (editor, point2, at) =>
            !!point2 && (0, dist_index_es.n)(editor, point2, at),
          last = (editor, at, options = {}) => {
            try {
              const { level } = options,
                lastNodeEntry = (0, dist_index_es.HV)(editor, getAt(editor, at))
              if (lastNodeEntry && 'number' == typeof level) {
                if (0 === editor.children.length) return
                return ((editor, [node2, path2], level) => {
                  const levelPath = path2.slice(0, level + 1),
                    entry = editor.api.node(levelPath)
                  return entry || [node2, path2]
                })(editor, lastNodeEntry, level)
              }
              return lastNodeEntry
            } catch {}
          },
          next = (editor, options = {}) => {
            const {
              from = 'after',
              mode = 'child' === from ? 'all' : 'lowest',
              voids = !1,
            } = options
            let match2 = getMatch(editor, options)
            const at = getAt(editor, options.at) ?? editor.selection
            if (!at) return
            let start2
            if ('child' === from && PathApi.isPath(at)) {
              const path2 = PathApi.firstChild(at)
              editor.api.node(path2) &&
                ((start2 = path2),
                (match2 = combineMatch(
                  (n2, p) =>
                    !PathApi.isAncestor(p, at) && !PathApi.equals(p, at),
                  match2
                )))
            }
            if (!start2) {
              const pointAfterLocation = editor.api.after(at, { voids })
              if (!pointAfterLocation) return
              start2 = pointAfterLocation.path
            }
            const [, to] = editor.api.last([]),
              span = [start2, to]
            if (PathApi.isPath(at) && 0 === at.length) return
            if (null == match2)
              if (PathApi.isPath(at)) {
                const [parent2] = editor.api.parent(at)
                match2 = (n2) => parent2.children.includes(n2)
              } else match2 = () => !0
            const [next2] = editor.api.nodes({
              at: span,
              match: match2,
              mode,
              voids,
            })
            return next2
          },
          normalizeEditor = (editor, options) =>
            (0, dist_index_es.S8)(editor, options),
          normalizeNode = (editor, entry, options) => {
            const value = editor.meta.isNormalizing
            ;((editor.meta.isNormalizing = !0),
              (0, dist_index_es.Iz)(editor, entry, options),
              (editor.meta.isNormalizing = value))
          },
          dist_parent = (editor, at, options) => {
            try {
              return (0, dist_index_es.$t)(editor, getAt(editor, at), options)
            } catch {}
          },
          previous = (editor, options) => {
            const getPrevious = (o3) => {
              try {
                return ((editor, options) => {
                  const {
                    from = 'after',
                    mode = 'lowest',
                    voids = !1,
                  } = options
                  let match2 = getMatch(editor, options)
                  const at = getAt(editor, options.at) ?? editor.selection
                  if (!at) return
                  let start2
                  if (
                    ('parent' === from &&
                      PathApi.isPath(at) &&
                      at.length > 1 &&
                      ((start2 = at),
                      (match2 = combineMatch(
                        (n2, p) =>
                          !PathApi.isAfter(p, at) && !PathApi.equals(p, at),
                        match2
                      ))),
                    !start2)
                  ) {
                    const pointBeforeLocation = editor.api.before(at, { voids })
                    if (!pointBeforeLocation) return
                    start2 = pointBeforeLocation.path
                  }
                  const [, to] = editor.api.first([]),
                    span = [start2, to]
                  if (PathApi.isPath(at) && 0 === at.length) return
                  if (null == match2)
                    if (PathApi.isPath(at)) {
                      const [parent2] = editor.api.parent(at)
                      match2 = (n2) => parent2.children.includes(n2)
                    } else match2 = () => !0
                  const [previous2] = editor.api.nodes({
                    at: span,
                    match: match2,
                    mode,
                    reverse: !0,
                    voids,
                  })
                  return previous2
                })(editor, o3)
              } catch {}
            }
            if (options?.sibling) {
              const path2 = getQueryOptions(editor, options).at
              if (!path2) return
              const previousPath = PathApi.previous(path2)
              if (!previousPath) return
              return editor.api.node(previousPath)
            }
            if (!options?.id || !options?.block) return getPrevious(options)
            const block2 = editor.api.node({ id: options.id, at: [] })
            return block2 ? getPrevious({ at: block2[1], block: !0 }) : void 0
          },
          range = (editor, at, to, options) => {
            let from = getAt(editor, at)
            if (RangeApi.isRange(from) && !to) return from
            if ('start' === from) {
              const path2 = editor.api.block({ at: to })?.[1]
              if (!path2) return
              const anchor = editor.api.start(path2)
              if (!anchor) return
              const focus2 = PointApi.get(to)
              if (!focus2) return
              return { anchor, focus: focus2 }
            }
            if (to && 'before' === from) {
              from = editor.api.before(to, options?.before) ?? getAt(editor, to)
            }
            return (0, dist_index_es.y1)(editor, from, getAt(editor, to))
          },
          removeEditorMark = (editor, key) =>
            (0, dist_index_es.i4)(editor, key),
          shouldMergeNodes = (editor, prevNodeEntry, _) => {
            const [prevNode, prevPath] = prevNodeEntry
            return (
              !(
                (ElementApi.isElement(prevNode) &&
                  editor.api.isEmpty(prevNode)) ||
                (TextApi.isText(prevNode) &&
                  '' === prevNode.text &&
                  0 !== prevPath.at(-1))
              ) || (editor.tf.removeNodes({ at: prevPath }), !1)
            )
          },
          unhangRange = (editor, range2, options = {}) => {
            const { character, unhang = !0, voids } = options
            if (!RangeApi.isRange(range2)) return range2
            if (character) {
              let [start2, end2] = RangeApi.edges(range2)
              if (!PathApi.equals(start2.path, end2.path))
                if (0 === end2.offset) {
                  const pointAfter = editor.api.after(start2)
                  pointAfter && (end2 = pointAfter)
                } else {
                  const pointBefore = editor.api.before(end2)
                  pointBefore && (start2 = pointBefore)
                }
              return { anchor: start2, focus: end2 }
            }
            return unhang
              ? (0, dist_index_es.lR)(editor, range2, { voids })
              : range2
          },
          addMarks = (editor, marks2, { remove } = {}) => {
            editor.selection &&
              editor.tf.withoutNormalizing(() => {
                ;(editor.tf.removeMarks([
                  ...castArray_default()(remove),
                  ...Object.keys(marks2),
                ]),
                  Object.entries(marks2).forEach(([key, value]) => {
                    editor.tf.addMark(key, value)
                  }))
              })
          },
          duplicateNodes = (
            editor,
            { block: block2, nodes: nodes2, ...options } = {}
          ) => {
            const at = getAt(editor, options.at) ?? editor.selection
            if (!nodes2 || !at) return
            const entries = nodes2 ?? (block2 ? editor.api.blocks({ at }) : [])
            if (0 === entries.length) return
            const lastEntry = entries.at(-1),
              insertPath = PathApi.next(lastEntry[1]),
              nodesToInsert = entries.map(([node2]) => node2)
            editor.tf.insertNodes(nodesToInsert, { at: insertPath, ...options })
          },
          removeMarks = (
            editor,
            keys,
            { at, shouldChange = !0, ...options } = {}
          ) => {
            const selection = at ?? editor.selection
            if (!selection) return
            const match2 = (node2, path2) => {
                if (!TextApi.isText(node2)) return !1
                const [parentNode] = editor.api.parent(path2)
                return (
                  !editor.api.isVoid(parentNode) ||
                  editor.api.markableVoid(parentNode)
                )
              },
              expandedSelection = RangeApi.isExpanded(selection)
            let markAcceptingVoidSelected = !1
            if (!expandedSelection) {
              const [selectedNode, selectedPath] = editor.api.node(selection)
              if (selectedNode && match2(selectedNode, selectedPath)) {
                const [parentNode] = editor.api.parent(selectedPath)
                markAcceptingVoidSelected =
                  parentNode && editor.api.markableVoid(parentNode)
              }
            }
            if (keys && (expandedSelection || markAcceptingVoidSelected)) {
              const props = castArray_default()(keys)
              editor.tf.unsetNodes(props, {
                at: selection,
                match: match2,
                split: !0,
                voids: !0,
                ...options,
              })
            } else if (!at) {
              const marks2 = { ...editor.api.marks() }
              ;(keys
                ? (castArray_default()(keys).forEach((k) => {
                    delete marks2[k]
                  }),
                  (editor.marks = marks2))
                : (editor.marks = {}),
                shouldChange && editor.api.onChange())
            }
          },
          replaceNodes = (
            editor,
            nodes2,
            { at, children, removeNodes: removeOptions, ...options }
          ) => {
            editor.tf.withoutNormalizing(() => {
              if (children) {
                if (!at) return
                at = getAt(editor, at)
                const path2 = editor.api.path(at)
                if (!path2) return
                ;(editor.tf.removeNodes({
                  ...removeOptions,
                  at: path2,
                  children: !0,
                }),
                  editor.tf.insertNodes(nodes2, {
                    ...options,
                    at: path2.concat([0]),
                  }))
              } else
                (editor.tf.removeNodes({ ...removeOptions, at }),
                  editor.tf.insertNodes(nodes2, { ...options, at }))
            })
          },
          dist_reset = (editor, options = {}) => {
            ;(editor.tf.replaceNodes(editor.api.create.value(), {
              at: [],
              children: !0,
              ...options,
            }),
              options.children ||
                ((editor.operations = []),
                (editor.marks = null),
                editor.history?.undos &&
                  ((editor.history.undos = []), (editor.history.redos = []))))
          },
          toggleBlock = (
            editor,
            type,
            { defaultType: defaultTypeProp, someOptions, wrap, ...options } = {}
          ) => {
            const at = options.at ?? editor.selection
            if (!at) return
            const isActive = editor.api.some({
              at,
              ...someOptions,
              match: { type },
            })
            if (wrap)
              return void (isActive
                ? editor.tf.unwrapNodes({ at, match: { type } })
                : editor.tf.wrapNodes({ children: [], type }, { at }))
            const defaultType =
              defaultTypeProp ?? editor.api.create.block().type ?? 'p'
            ;(isActive && type === defaultType) ||
              editor.tf.setNodes(
                { type: isActive ? defaultType : type },
                { at, ...options }
              )
          },
          toggleMark = (editor, key, { remove } = {}) => {
            editor.selection &&
              editor.tf.withoutNormalizing(() => {
                editor.api.hasMark(key)
                  ? editor.tf.removeMark(key)
                  : (editor.tf.removeMarks([
                      ...castArray_default()(remove),
                      key,
                    ]),
                    editor.tf.addMark(key, !0))
              })
          },
          collapseSelection = (editor, options) => {
            ;(0, dist_index_es.ap)(editor, options)
          },
          deleteText = (editor, options = {}) => {
            let at = getAt(editor, options?.at) ?? editor.selection
            editor.tf.withoutNormalizing(() => {
              const {
                distance = 1,
                reverse = !1,
                unit = 'character',
                voids = !1,
              } = options
              let { hanging = !1 } = options
              if (!at) return
              let isCollapsed = !1
              if (
                (RangeApi.isRange(at) &&
                  RangeApi.isCollapsed(at) &&
                  ((isCollapsed = !0), (at = at.anchor)),
                PointApi.isPoint(at))
              ) {
                const furthestVoid = editor.api.void({ at, mode: 'highest' })
                if (!voids && furthestVoid) {
                  const [, voidPath] = furthestVoid
                  at = voidPath
                } else {
                  const opts = { distance, unit },
                    target = reverse
                      ? editor.api.before(at, opts) || editor.api.start([])
                      : editor.api.after(at, opts) || editor.api.end([])
                  ;((at = { anchor: at, focus: target }), (hanging = !0))
                }
              }
              if (PathApi.isPath(at))
                return void editor.tf.removeNodes({ at, voids })
              if (RangeApi.isCollapsed(at)) return
              if (!hanging) {
                const [, end3] = RangeApi.edges(at),
                  endOfDoc = editor.api.end([])
                PointApi.equals(end3, endOfDoc) ||
                  (at = editor.api.unhangRange(at, { voids }))
              }
              let [start2, end2] = RangeApi.edges(at)
              const startBlock = editor.api.above({
                  at: start2,
                  voids,
                  match: (n2) =>
                    ElementApi.isElement(n2) && editor.api.isBlock(n2),
                }),
                endBlock = editor.api.above({
                  at: end2,
                  voids,
                  match: (n2) =>
                    ElementApi.isElement(n2) && editor.api.isBlock(n2),
                }),
                isAcrossBlocks =
                  startBlock &&
                  endBlock &&
                  !PathApi.equals(startBlock[1], endBlock[1]),
                isSingleText = PathApi.equals(start2.path, end2.path),
                startNonEditable = voids
                  ? null
                  : (editor.api.void({ at: start2, mode: 'highest' }) ??
                    editor.api.elementReadOnly({
                      at: start2,
                      mode: 'highest',
                    })),
                endNonEditable = voids
                  ? null
                  : (editor.api.void({ at: end2, mode: 'highest' }) ??
                    editor.api.elementReadOnly({ at: end2, mode: 'highest' }))
              if (startNonEditable) {
                const before = editor.api.before(start2)
                before &&
                  startBlock &&
                  PathApi.isAncestor(startBlock[1], before.path) &&
                  (start2 = before)
              }
              if (endNonEditable) {
                const after2 = editor.api.after(end2)
                after2 &&
                  endBlock &&
                  PathApi.isAncestor(endBlock[1], after2.path) &&
                  (end2 = after2)
              }
              const matches = []
              let lastPath
              for (const entry of editor.api.nodes({ at, voids })) {
                const [node2, path2] = entry
                ;(lastPath && 0 === PathApi.compare(path2, lastPath)) ||
                  (((!voids &&
                    ElementApi.isElement(node2) &&
                    editor.api.isElementReadOnly(node2)) ||
                    (!PathApi.isCommon(path2, start2.path) &&
                      !PathApi.isCommon(path2, end2.path))) &&
                    (matches.push(entry), (lastPath = path2)))
              }
              const pathRefs2 = Array.from(matches, ([, p]) =>
                  editor.api.pathRef(p)
                ),
                startRef = editor.api.pointRef(start2),
                endRef = editor.api.pointRef(end2)
              let removedText = ''
              if (!isSingleText && !startNonEditable) {
                const point3 = startRef.current,
                  [node2] = editor.api.leaf(point3),
                  { path: path2 } = point3,
                  { offset } = start2,
                  text = node2.text.slice(offset)
                text.length > 0 &&
                  (editor.tf.apply({
                    offset,
                    path: path2,
                    text,
                    type: 'remove_text',
                  }),
                  (removedText = text))
              }
              if (
                (pathRefs2
                  .reverse()
                  .map((r2) => r2.unref())
                  .filter((r2) => null !== r2)
                  .forEach((p) => editor.tf.removeNodes({ at: p, voids })),
                !endNonEditable)
              ) {
                const point3 = endRef.current,
                  [node2] = editor.api.leaf(point3),
                  { path: path2 } = point3,
                  offset = isSingleText ? start2.offset : 0,
                  text = node2.text.slice(offset, end2.offset)
                text.length > 0 &&
                  (editor.tf.apply({
                    offset,
                    path: path2,
                    text,
                    type: 'remove_text',
                  }),
                  (removedText = text))
              }
              ;(!isSingleText &&
                isAcrossBlocks &&
                endRef.current &&
                startRef.current &&
                editor.tf.mergeNodes({
                  at: endRef.current,
                  hanging: !0,
                  reverse: !reverse,
                  voids,
                }),
                isCollapsed &&
                  reverse &&
                  'character' === unit &&
                  removedText.length > 1 &&
                  /[\u0E00-\u0E7F]+/.exec(removedText) &&
                  editor.tf.insertText(
                    removedText.slice(0, removedText.length - distance)
                  ))
              const startUnref = startRef.unref(),
                endUnref = endRef.unref(),
                point2 = reverse
                  ? startUnref || endUnref
                  : endUnref || startUnref
              null == options?.at && point2 && editor.tf.select(point2)
            })
          },
          deselect = (editor) => {
            ;(0, dist_index_es.wm)(editor)
          },
          insertFragment = (editor, fragment2, options) => {
            ;(0, dist_index_es.Cc)(editor, fragment2, {
              ...options,
              at: getAt(editor, options?.at),
            })
          },
          insertNodes = (
            editor,
            nodes2,
            { nextBlock, removeEmpty, ...options } = {}
          ) => {
            ;((options = getQueryOptions(editor, options)),
              editor.tf.withoutNormalizing(() => {
                if (removeEmpty) {
                  const blockEntry = editor.api.above({ at: options.at })
                  if (blockEntry) {
                    const queryNodeOptions =
                        !0 === removeEmpty ? { allow: ['p'] } : removeEmpty,
                      { filter } = queryNodeOptions
                    ;((queryNodeOptions.filter = ([node2, path2]) => {
                      if (NodeApi.string(node2)) return !1
                      return (
                        !node2.children.some((n2) => editor.api.isInline(n2)) &&
                        (!filter || filter([node2, path2]))
                      )
                    }),
                      queryNode(blockEntry, queryNodeOptions) &&
                        (editor.tf.removeNodes({ at: blockEntry[1] }),
                        (nextBlock = !1)))
                  }
                }
                if (nextBlock) {
                  const { at = editor.selection } = options
                  if (at) {
                    const endPoint = editor.api.end(at),
                      blockEntry = editor.api.above({ at: endPoint, block: !0 })
                    blockEntry && (options.at = PathApi.next(blockEntry[1]))
                  }
                }
                ;(0, dist_index_es.pW)(editor, nodes2, options)
              }))
          },
          insertSoftBreak = (editor) => {
            editor.tf.withoutNormalizing(() => {
              ;(editor.api.isExpanded() && editor.tf.delete(),
                editor.tf.insertText('\n'))
            })
          },
          insertText = (
            editor,
            text,
            { marks: marks2 = !0, ...options } = {}
          ) => {
            const at = getAt(editor, options.at)
            if (at)
              dist_index_es.gB.insertText(editor, text, { ...options, at })
            else if (editor.selection)
              if (marks2 && editor.marks) {
                const node2 = { text, ...editor.marks }
                ;(editor.tf.insertNodes(node2, { voids: options.voids }),
                  (editor.marks = null))
              } else dist_index_es.gB.insertText(editor, text, options)
          },
          liftNodes = (editor, options) =>
            (0, dist_index_es.fL)(editor, getQueryOptions(editor, options)),
          hasSingleChildNest = (editor, node2) => {
            if (ElementApi.isElement(node2)) {
              const element = node2
              return (
                !!editor.api.isVoid(node2) ||
                (1 === element.children.length &&
                  hasSingleChildNest(editor, element.children[0]))
              )
            }
            return !NodeApi.isEditor(node2)
          },
          mergeNodes = (editor, options = {}) => {
            ;((options = getQueryOptions(editor, options)),
              editor.tf.withoutNormalizing(() => {
                let { at = editor.selection, match: match2 } = options
                const { hanging = !1, mode = 'lowest', voids = !1 } = options
                if (!at) return
                if (null == match2)
                  if (PathApi.isPath(at)) {
                    const [parent2] = editor.api.parent(at)
                    match2 = (n2) => parent2.children.includes(n2)
                  } else
                    match2 = (n2) =>
                      ElementApi.isElement(n2) && editor.api.isBlock(n2)
                if (
                  (!hanging &&
                    RangeApi.isRange(at) &&
                    (at = editor.api.unhangRange(at)),
                  RangeApi.isRange(at))
                )
                  if (RangeApi.isCollapsed(at)) at = at.anchor
                  else {
                    const [, end2] = RangeApi.edges(at),
                      pointRef2 = editor.api.pointRef(end2)
                    ;(editor.tf.delete({ at }),
                      (at = pointRef2.unref()),
                      null == options.at && editor.tf.select(at))
                  }
                const _nodes = editor.api.nodes({
                    at,
                    match: match2,
                    mode,
                    voids,
                  }),
                  [current] = Array.from(_nodes),
                  prev = editor.api.previous({ at, match: match2, mode, voids })
                if (!current || !prev) return
                const [node2, path2] = current,
                  [prevNode, prevPath] = prev
                if (0 === path2.length || 0 === prevPath.length) return
                const newPath = PathApi.next(prevPath),
                  commonPath = PathApi.common(path2, prevPath),
                  isPreviousSibling = PathApi.isSibling(path2, prevPath),
                  _levels = editor.api.levels({ at: path2 }),
                  levels2 = new Set(
                    Array.from(_levels, ([n2]) => n2)
                      .slice(commonPath.length)
                      .slice(0, -1)
                  ),
                  emptyAncestor = editor.api.above({
                    at: path2,
                    mode: 'highest',
                    match: (n2) =>
                      levels2.has(n2) && hasSingleChildNest(editor, n2),
                  }),
                  emptyRef =
                    emptyAncestor && editor.api.pathRef(emptyAncestor[1])
                let properties, position
                if (TextApi.isText(node2) && TextApi.isText(prevNode)) {
                  const { text, ...rest } = node2
                  ;((position = prevNode.text.length), (properties = rest))
                } else {
                  if (
                    !ElementApi.isElement(node2) ||
                    !ElementApi.isElement(prevNode)
                  )
                    throw new TypeError(
                      `Cannot merge the node at path [${path2}] with the previous sibling because it is not the same kind: ${JSON.stringify(node2)} ${JSON.stringify(prevNode)}`
                    )
                  {
                    const { children, ...rest } = node2
                    ;((position = prevNode.children.length),
                      (properties = rest))
                  }
                }
                editor.api.shouldMergeNodes(prev, current, {
                  reverse: options.reverse,
                }) &&
                  (isPreviousSibling ||
                    editor.tf.moveNodes({ at: path2, to: newPath, voids }),
                  emptyRef &&
                    editor.tf.removeNodes({
                      at: emptyRef.current,
                      event: { type: 'mergeNodes' },
                      voids,
                    }),
                  emptyRef && emptyRef.unref(),
                  editor.tf.apply({
                    path: newPath,
                    position,
                    properties,
                    type: 'merge_node',
                  }))
              }))
          },
          moveNodes = (editor, { children, fromIndex = 0, ...opt }) => {
            const options = getQueryOptions(editor, opt)
            let moved = !1
            if (children) {
              if (!options.at) return moved
              const entry = editor.api.node(options.at)
              if (!entry) return moved
              const [node2, path2] = entry
              if (!editor.api.isBlock(node2)) return moved
              for (let i = node2.children.length - 1; i >= fromIndex; i--) {
                const childPath = [...path2, i],
                  childNode = NodeApi.get(editor, childPath)
                ;(!options.match ||
                  (childNode && options.match(childNode, childPath))) &&
                  ((0, dist_index_es.z7)(editor, { ...options, at: childPath }),
                  (moved = !0))
              }
              return moved
            }
            return (0, dist_index_es.z7)(editor, options)
          },
          moveSelection = (editor, options) => {
            ;(0, dist_index_es.Cy)(editor, options)
          },
          removeNodes = (
            editor,
            { children, previousEmptyBlock, ...opt } = {}
          ) => {
            const options = getQueryOptions(editor, opt)
            editor.tf.withoutNormalizing(() => {
              if (previousEmptyBlock) {
                const entry = editor.api.block({ at: options.at })
                if (!entry) return
                const prevEntry = editor.api.previous({
                  at: entry[1],
                  sibling: !0,
                })
                if (!prevEntry) return
                const [prevNode, prevPath] = prevEntry
                return void (
                  editor.api.isEmpty(prevNode) &&
                  editor.tf.removeNodes({ at: prevPath })
                )
              }
              if (!children || !options.at)
                return (0, dist_index_es.if)(
                  editor,
                  getQueryOptions(editor, options)
                )
              for (const [, childPath] of NodeApi.children(editor, options.at, {
                reverse: !0,
              }))
                editor.tf.removeNodes({ ...options, at: childPath })
            })
          },
          setNodes = (editor, props, { marks: marks2, ...options } = {}) => {
            if (marks2) {
              let at = getAt(editor, options.at) ?? editor.selection
              if (!at) return
              if (
                (PathApi.isPath(at) && (at = editor.api.range(at)),
                !RangeApi.isRange(at))
              )
                return
              const match2 = (node2, path2) => {
                  if (!TextApi.isText(node2)) return !1
                  const parentEntry = editor.api.parent(path2)
                  if (!parentEntry) return !1
                  const [parentNode] = parentEntry
                  return (
                    !editor.api.isVoid(parentNode) ||
                    editor.api.markableVoid(parentNode)
                  )
                },
                isExpandedRange = RangeApi.isExpanded(at)
              let markAcceptingVoidSelected = !1
              if (!isExpandedRange) {
                const selectedEntry = editor.api.node(at)
                if (!selectedEntry) return
                const [selectedNode, selectedPath] = selectedEntry
                if (selectedNode && match2(selectedNode, selectedPath)) {
                  const parentEntry = editor.api.parent(selectedPath)
                  if (!parentEntry) return
                  const [parentNode] = parentEntry
                  markAcceptingVoidSelected =
                    parentNode && editor.api.markableVoid(parentNode)
                }
              }
              if (isExpandedRange || markAcceptingVoidSelected)
                return (0, dist_index_es.CU)(
                  editor,
                  props,
                  getQueryOptions(editor, {
                    ...options,
                    at,
                    match: match2,
                    split: !0,
                    voids: !0,
                  })
                )
            }
            return (0, dist_index_es.CU)(
              editor,
              props,
              getQueryOptions(editor, options)
            )
          },
          setPoint = (editor, props, options) => {
            ;(0, dist_index_es.rO)(editor, props, options)
          },
          setSelection = (editor, props) => {
            ;(0, dist_index_es.td)(editor, props)
          },
          splitNodes = (editor, options) =>
            (0, dist_index_es.M$)(editor, getQueryOptions(editor, options)),
          unsetNodes = (editor, props, options) =>
            (0, dist_index_es.Xs)(
              editor,
              props,
              getQueryOptions(editor, options)
            ),
          unwrapNodes = (editor, options) => {
            ;(0, dist_index_es.F7)(editor, getQueryOptions(editor, options))
          },
          wrapNodes = (editor, element, { children, ...opt } = {}) => {
            const options = getQueryOptions(editor, opt)
            if (
              (options.at &&
                (options.at = editor.api.unhangRange(options.at, options)),
              children)
            ) {
              const path2 = editor.api.path(options.at)
              if (!path2) return
              const node2 = NodeApi.get(editor, path2)
              if (!node2?.children) return
              return void editor.tf.withoutNormalizing(() => {
                const firstChildPath = PathApi.firstChild(path2)
                ;((0, dist_index_es.UO)(editor, element, {
                  ...options,
                  at: firstChildPath,
                }),
                  node2.children.length > 1 &&
                    editor.tf.moveNodes({
                      at: path2,
                      children: !0,
                      fromIndex: 1,
                      to: PathApi.child(firstChildPath, 1),
                    }))
              })
            }
            ;(0, dist_index_es.UO)(editor, element, options)
          },
          SAVING = new WeakMap(),
          MERGING = new WeakMap(),
          SPLITTING_ONCE = new WeakMap(),
          HistoryApi = {
            isHistory: (value) =>
              (0, is_plain_object.Q)(value) &&
              Array.isArray(value.redos) &&
              Array.isArray(value.undos) &&
              (0 === value.redos.length ||
                OperationApi.isOperationList(value.redos[0].operations)) &&
              (0 === value.undos.length ||
                OperationApi.isOperationList(value.undos[0].operations)),
            isMerging: (editor) => MERGING.get(editor),
            isSaving: (editor) => SAVING.get(editor),
            isSplittingOnce: (editor) => SPLITTING_ONCE.get(editor),
            redo(editor) {
              editor.redo()
            },
            setSplittingOnce(editor, value) {
              SPLITTING_ONCE.set(editor, value)
            },
            undo(editor) {
              editor.undo()
            },
            withMerging(editor, fn) {
              const prev = editor.api.isMerging()
              ;(MERGING.set(editor, !0), fn(), MERGING.set(editor, prev))
            },
            withNewBatch(editor, fn) {
              const prev = editor.api.isMerging()
              ;(MERGING.set(editor, !0),
                SPLITTING_ONCE.set(editor, !0),
                fn(),
                MERGING.set(editor, prev),
                SPLITTING_ONCE.delete(editor))
            },
            withoutMerging(editor, fn) {
              const prev = editor.api.isMerging()
              ;(MERGING.set(editor, !1), fn(), MERGING.set(editor, prev))
            },
            withoutSaving(editor, fn) {
              const prev = editor.api.isSaving()
              ;(SAVING.set(editor, !1), fn(), SAVING.set(editor, prev))
            },
          },
          noop = (name, returnValue) => () => (
            slate_dist_console.warn(
              `[OVERRIDE_MISSING] The method editor.${name}() has not been implemented or overridden. This may cause unexpected behavior. Please ensure that all required editor methods are properly defined.`
            ),
            returnValue
          ),
          dist_createEditor = ({ children, selection } = {}) => {
            const editor = (0, dist_index_es.ie)()
            ;(children && (editor.children = children),
              selection && (editor.selection = selection),
              Object.assign(editor, {
                apply: bindFirst(dist_index_es.Bb, editor),
                isElementReadOnly: editor.isElementReadOnly,
                isInline: editor.isInline,
                isSelectable: editor.isSelectable,
                isVoid: editor.isVoid,
                markableVoid: editor.markableVoid,
                onChange: editor.onChange,
              }),
              Object.assign(editor, {
                addMark: bindFirst(addMark, editor),
                deleteBackward: bindFirst(deleteBackward, editor),
                deleteForward: bindFirst(deleteForward, editor),
                deleteFragment: bindFirst(deleteFragment, editor),
                getDirtyPaths: bindFirst(dist_index_es.PY, editor),
                getFragment: bindFirst(getFragment, editor),
                insertBreak: bindFirst(insertBreak, editor),
                insertFragment: bindFirst(insertFragment, editor),
                insertNode: bindFirst(insertNode, editor),
                insertSoftBreak: bindFirst(insertSoftBreak, editor),
                insertText: bindFirst(insertText, editor),
                normalizeNode: bindFirst(normalizeNode, editor),
                removeMark: bindFirst(removeEditorMark, editor),
                shouldNormalize: bindFirst(dist_index_es.v1, editor),
              }),
              Object.assign(editor, {
                above: bindFirst(above, editor),
                after: bindFirst(getPointAfter, editor),
                before: bindFirst(getPointBefore, editor),
                collapse: bindFirst(collapseSelection, editor),
                delete: bindFirst(deleteText, editor),
                deselect: bindFirst(deselect, editor),
                deselectDOM: bindFirst(deselectDOM, editor),
                edges: bindFirst(getEdgePoints, editor),
                elementReadOnly: bindFirst(isElementReadOnly, editor),
                end: bindFirst(getEndPoint, editor),
                first: bindFirst(getFirstNode, editor),
                fragment: bindFirst(getFragment, editor),
                getMarks: bindFirst(getMarks, editor),
                hasBlocks: bindFirst(hasBlocks, editor),
                hasInlines: bindFirst(hasInlines, editor),
                hasPath: bindFirst(dist_index_es.a6, editor),
                hasTexts: bindFirst(hasTexts, editor),
                insertNodes: bindFirst(insertNodes, editor),
                isBlock: bindFirst(isBlock, editor),
                isEdge: bindFirst(isEdgePoint, editor),
                isEmpty: bindFirst(isEmpty, editor),
                isEnd: bindFirst(isEndPoint, editor),
                isNormalizing: bindFirst(isEditorNormalizing, editor),
                isStart: bindFirst(isStartPoint, editor),
                last: bindFirst(last, editor),
                leaf: bindFirst(getLeafNode, editor),
                levels: bindFirst(getLevels, editor),
                liftNodes: bindFirst(liftNodes, editor),
                mergeNodes: bindFirst(mergeNodes, editor),
                move: bindFirst(moveSelection, editor),
                moveNodes: bindFirst(moveNodes, editor),
                next: bindFirst(next, editor),
                node: bindFirst(node, editor),
                nodes: bindFirst(nodes, editor),
                normalize: bindFirst(normalizeEditor, editor),
                parent: bindFirst(dist_parent, editor),
                path: bindFirst(path, editor),
                pathRef: bindFirst(createPathRef, editor),
                pathRefs: bindFirst(getPathRefs, editor),
                point: bindFirst(getPoint, editor),
                pointRef: bindFirst(createPointRef, editor),
                pointRefs: bindFirst(getPointRefs, editor),
                positions: bindFirst(getPositions, editor),
                previous: bindFirst(previous, editor),
                range: bindFirst(range, editor),
                rangeRef: bindFirst(createRangeRef, editor),
                rangeRefs: bindFirst(getRangeRefs, editor),
                removeNodes: bindFirst(removeNodes, editor),
                select: bindFirst(dist_select, editor),
                setNodes: bindFirst(setNodes, editor),
                setNormalizing: bindFirst(dist_index_es.b$, editor),
                setPoint: bindFirst(setPoint, editor),
                setSelection: bindFirst(setSelection, editor),
                shouldMergeNodes: bindFirst(shouldMergeNodes, editor),
                splitNodes: bindFirst(splitNodes, editor),
                start: bindFirst(getStartPoint, editor),
                string: bindFirst(getEditorString, editor),
                unhangRange: bindFirst(unhangRange, editor),
                unsetNodes: bindFirst(unsetNodes, editor),
                unwrapNodes: bindFirst(unwrapNodes, editor),
                void: bindFirst(getVoidNode, editor),
                withoutNormalizing: bindFirst(withoutNormalizing, editor),
                wrapNodes: bindFirst(wrapNodes, editor),
              }),
              Object.assign(editor, {
                history: { redos: [], undos: [] },
                meta: { isNormalizing: !1 },
                redo: noop('redo'),
                undo: noop('undo'),
                writeHistory: noop('writeHistory'),
              }),
              Object.assign(editor, {
                insertData: noop('insertData'),
                insertFragmentData: noop('insertFragmentData', !1),
                insertTextData: noop('insertTextData', !1),
                setFragmentData: noop('setFragmentData'),
              }))
            const api = {
                block: bindFirst(block, editor),
                blocks: bindFirst(blocks, editor),
                create: {
                  block: (props) => ({
                    children: [{ text: '' }],
                    type: 'p',
                    ...props,
                  }),
                  value: () => [api.create.block()],
                },
                descendant: bindFirst(descendant, editor),
                edgeBlocks: bindFirst(edgeBlocks, editor),
                findDocumentOrShadowRoot: bindFirst(
                  findDocumentOrShadowRoot,
                  editor
                ),
                findEventRange: bindFirst(findEventRange, editor),
                findKey: bindFirst(findKey, editor),
                findPath: bindFirst(findPath, editor),
                getWindow: bindFirst(getWindow, editor),
                hasDOMNode: bindFirst(hasDOMNode, editor),
                hasEditableTarget: bindFirst(hasEditableTarget, editor),
                hasMark: bindFirst(hasMark, editor),
                hasRange: bindFirst(hasRange, editor),
                hasSelectableTarget: bindFirst(hasSelectableTarget, editor),
                hasTarget: bindFirst(hasTarget, editor),
                isAt: bindFirst(isAt, editor),
                isComposing: bindFirst(isComposing, editor),
                isEditorEnd: bindFirst(isEditorEnd, editor),
                isFocused: bindFirst(isFocused, editor),
                isMerging: bindFirst(HistoryApi.isMerging, editor),
                isReadOnly: bindFirst(isReadOnly, editor),
                isSaving: bindFirst(HistoryApi.isSaving, editor),
                isSelected: bindFirst(isSelected, editor),
                isSplittingOnce: bindFirst(HistoryApi.isSplittingOnce, editor),
                isTargetInsideNonReadonlyVoid: bindFirst(
                  isTargetInsideNonReadonlyVoid,
                  editor
                ),
                isText: bindFirst(isText, editor),
                mark: bindFirst(mark, editor),
                nodesRange: bindFirst(nodesRange, editor),
                prop,
                scrollIntoView: bindFirst(scrollIntoView, editor),
                some: bindFirst(some, editor),
                toDOMNode: bindFirst(toDOMNode, editor),
                toDOMPoint: bindFirst(toDOMPoint, editor),
                toDOMRange: bindFirst(toDOMRange, editor),
                toSlateNode: bindFirst(toSlateNode, editor),
                toSlatePoint: bindFirst(toSlatePoint, editor),
                toSlateRange: bindFirst(toSlateRange, editor),
                isCollapsed: () => RangeApi.isCollapsed(editor.selection),
                isExpanded: () => RangeApi.isExpanded(editor.selection),
                shouldNormalizeNode: () => !0,
              },
              transforms = {
                addMarks: bindFirst(addMarks, editor),
                blur: bindFirst(dist_blur, editor),
                deselectDOM: bindFirst(deselectDOM, editor),
                duplicateNodes: bindFirst(duplicateNodes, editor),
                focus: bindFirst(dist_focus, editor),
                removeMarks: bindFirst(removeMarks, editor),
                replaceNodes: bindFirst(replaceNodes, editor),
                reset: bindFirst(dist_reset, editor),
                setSplittingOnce: bindFirst(
                  HistoryApi.setSplittingOnce,
                  editor
                ),
                toggleBlock: bindFirst(toggleBlock, editor),
                toggleMark: bindFirst(toggleMark, editor),
                withMerging: bindFirst(HistoryApi.withMerging, editor),
                withNewBatch: bindFirst(HistoryApi.withNewBatch, editor),
                withoutMerging: bindFirst(HistoryApi.withoutMerging, editor),
                withoutSaving: bindFirst(HistoryApi.withoutSaving, editor),
                escape: () => !1,
                moveLine: () => !1,
                selectAll: () => !1,
                tab: () => !1,
              }
            return (
              (editor.api = api),
              (editor.tf = transforms),
              (editor.transforms = transforms),
              syncLegacyMethods(editor),
              editor
            )
          },
          shouldMerge = (op, prev) =>
            !(
              !prev ||
              'insert_text' !== op.type ||
              'insert_text' !== prev.type ||
              op.offset !== prev.offset + prev.text.length ||
              !PathApi.equals(op.path, prev.path)
            ) ||
            !(
              !prev ||
              'remove_text' !== op.type ||
              'remove_text' !== prev.type ||
              op.offset + op.text.length !== prev.offset ||
              !PathApi.equals(op.path, prev.path)
            ),
          shouldSave = (op, _) => 'set_selection' !== op.type
        let nanoid = (size = 21) => {
          let id = '',
            bytes = crypto.getRandomValues(new Uint8Array((size |= 0)))
          for (; size--; )
            id +=
              'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'[
                63 & bytes[size]
              ]
          return id
        }
        var merge = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js'
          ),
          merge_default = __webpack_require__.n(merge)
        const index_modern_e = Symbol(),
          index_modern_t = Symbol()
        let index_modern_o = (e, t) => new Proxy(e, t)
        const s = Object.getPrototypeOf,
          c = new WeakMap(),
          index_modern_l = (e) =>
            e &&
            (c.has(e)
              ? c.get(e)
              : s(e) === Object.prototype || s(e) === Array.prototype),
          f = (e) => 'object' == typeof e && null !== e,
          i = (e) => {
            if (Array.isArray(e)) return Array.from(e)
            const t = Object.getOwnPropertyDescriptors(e)
            return (
              Object.values(t).forEach((e) => {
                e.configurable = !0
              }),
              Object.create(s(e), t)
            )
          },
          u = (e) => e[index_modern_t] || e,
          a = (s, c, f, p) => {
            if (!index_modern_l(s)) return s
            let g = p && p.get(s)
            if (!g) {
              const e = u(s)
              ;((g = ((e) =>
                Object.values(Object.getOwnPropertyDescriptors(e)).some(
                  (e) => !e.configurable && !e.writable
                ))(e)
                ? [e, i(e)]
                : [e]),
                null == p || p.set(s, g))
            }
            const [y, h] = g
            let w = f && f.get(y)
            return (
              (w && w[1].f === !!h) ||
                ((w = ((o, s) => {
                  const c = { f: s }
                  let l = !1
                  const f = (e, t) => {
                      if (!l) {
                        let s = c.a.get(o)
                        if ((s || ((s = {}), c.a.set(o, s)), 'w' === e))
                          s.w = !0
                        else {
                          let r = s[e]
                          ;(r || ((r = new Set()), (s[e] = r)), r.add(t))
                        }
                      }
                    },
                    i = {
                      get: (e, n) =>
                        n === index_modern_t
                          ? o
                          : (f('k', n), a(Reflect.get(e, n), c.a, c.c, c.t)),
                      has: (t, n) =>
                        n === index_modern_e
                          ? ((l = !0), c.a.delete(o), !0)
                          : (f('h', n), Reflect.has(t, n)),
                      getOwnPropertyDescriptor: (e, t) => (
                        f('o', t),
                        Reflect.getOwnPropertyDescriptor(e, t)
                      ),
                      ownKeys: (e) => (f('w'), Reflect.ownKeys(e)),
                    }
                  return (s && (i.set = i.deleteProperty = () => !1), [i, c])
                })(y, !!h)),
                (w[1].p = index_modern_o(h || y, w[0])),
                f && f.set(y, w)),
              (w[1].a = c),
              (w[1].c = f),
              (w[1].t = p),
              w[1].p
            )
          },
          p = (e, t, r, o, s = Object.is) => {
            if (s(e, t)) return !1
            if (!f(e) || !f(t)) return !0
            const c = r.get(u(e))
            if (!c) return !0
            if (o) {
              const r = o.get(e)
              if (r && r.n === t) return r.g
              o.set(e, { n: t, g: !1 })
            }
            let l = null
            try {
              for (const r of c.h || [])
                if (((l = Reflect.has(e, r) !== Reflect.has(t, r)), l)) return l
              if (!0 === c.w) {
                if (
                  ((l = ((e, t) => {
                    const r = Reflect.ownKeys(e),
                      n = Reflect.ownKeys(t)
                    return r.length !== n.length || r.some((e, t) => e !== n[t])
                  })(e, t)),
                  l)
                )
                  return l
              } else
                for (const r of c.o || [])
                  if (
                    ((l =
                      !!Reflect.getOwnPropertyDescriptor(e, r) !=
                      !!Reflect.getOwnPropertyDescriptor(t, r)),
                    l)
                  )
                    return l
              for (const n of c.k || [])
                if (((l = p(e[n], t[n], r, o, s)), l)) return l
              return (null === l && (l = !0), l)
            } finally {
              o && o.set(e, { n: t, g: l })
            }
          }
        ;(__webpack_require__(
          '../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js'
        ),
          __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ))
        const createTrackedSelector = (useSelector) => () => {
          const [, forceUpdate] = (0, react.useReducer)((c) => c + 1, 0),
            affected = new WeakMap(),
            lastAffected = (0, react.useRef)(),
            prevState = (0, react.useRef)(),
            lastState = (0, react.useRef)()
          ;(0, react.useEffect)(() => {
            ;((lastAffected.current = affected),
              prevState.current !== lastState.current &&
                p(
                  prevState.current,
                  lastState.current,
                  affected,
                  new WeakMap()
                ) &&
                ((prevState.current = lastState.current), forceUpdate()))
          })
          const selector = (0, react.useCallback)(
              (nextState) => (
                (lastState.current = nextState),
                prevState.current &&
                prevState.current !== nextState &&
                lastAffected.current &&
                !p(
                  prevState.current,
                  nextState,
                  lastAffected.current,
                  new WeakMap()
                )
                  ? prevState.current
                  : ((prevState.current = nextState), nextState)
              ),
              []
            ),
            state = useSelector(selector)
          const proxyCache = (0, react.useMemo)(() => new WeakMap(), [])
          return a(state, affected, proxyCache)
        }
        var middleware_console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
        const trackedConnections = new Map(),
          getTrackedConnectionState = (name) => {
            const api = trackedConnections.get(name)
            return api
              ? Object.fromEntries(
                  Object.entries(api.stores).map(([key, api2]) => [
                    key,
                    api2.getState(),
                  ])
                )
              : {}
          },
          findCallerName = (stack) => {
            var _a, _b
            if (!stack) return
            const traceLines = stack.split('\n'),
              apiSetStateLineIndex = traceLines.findIndex((traceLine) =>
                traceLine.includes('api.setState')
              )
            if (apiSetStateLineIndex < 0) return
            const callerLine =
              (null == (_a = traceLines[apiSetStateLineIndex + 1])
                ? void 0
                : _a.trim()) || ''
            return null == (_b = /.+ (.+) .+/.exec(callerLine)) ? void 0 : _b[1]
          },
          devtools =
            (fn, devtoolsOptions = {}) =>
            (set, get, api) => {
              const { enabled, anonymousActionType, store, ...options } =
                devtoolsOptions
              let extensionConnector
              try {
                extensionConnector =
                  (null == enabled || enabled) &&
                  window.__REDUX_DEVTOOLS_EXTENSION__
              } catch (e) {}
              if (!extensionConnector) return fn(set, get, api)
              const { connection, ...connectionInformation } = ((
                store,
                extensionConnector,
                options
              ) => {
                if (void 0 === store)
                  return {
                    type: 'untracked',
                    connection: extensionConnector.connect(options),
                  }
                const existingConnection = trackedConnections.get(options.name)
                if (existingConnection)
                  return { type: 'tracked', store, ...existingConnection }
                const newConnection = {
                  connection: extensionConnector.connect(options),
                  stores: {},
                }
                return (
                  trackedConnections.set(options.name, newConnection),
                  { type: 'tracked', store, ...newConnection }
                )
              })(store, extensionConnector, options)
              let isRecording = !0
              ;((api.setState = (state, replace, nameOrAction) => {
                const r = set(state, replace)
                if (!isRecording) return r
                const action =
                  void 0 === nameOrAction
                    ? {
                        type:
                          anonymousActionType ||
                          findCallerName(new Error().stack) ||
                          'anonymous',
                      }
                    : 'string' == typeof nameOrAction
                      ? { type: nameOrAction }
                      : nameOrAction
                return void 0 === store
                  ? (null == connection || connection.send(action, get()), r)
                  : (null == connection ||
                      connection.send(
                        { ...action, type: `${store}/${action.type}` },
                        {
                          ...getTrackedConnectionState(options.name),
                          [store]: api.getState(),
                        }
                      ),
                    r)
              }),
                (api.devtools = {
                  cleanup: () => {
                    ;(connection &&
                      'function' == typeof connection.unsubscribe &&
                      connection.unsubscribe(),
                      ((name, store) => {
                        if (void 0 === store) return
                        const connectionInfo = trackedConnections.get(name)
                        connectionInfo &&
                          (delete connectionInfo.stores[store],
                          0 === Object.keys(connectionInfo.stores).length &&
                            trackedConnections.delete(name))
                      })(options.name, store))
                  },
                }))
              const setStateFromDevtools = (...a) => {
                  const originalIsRecording = isRecording
                  ;((isRecording = !1),
                    set(...a),
                    (isRecording = originalIsRecording))
                },
                initialState = fn(api.setState, get, api)
              if (
                ('untracked' === connectionInformation.type
                  ? null == connection || connection.init(initialState)
                  : ((connectionInformation.stores[
                      connectionInformation.store
                    ] = api),
                    null == connection ||
                      connection.init(
                        Object.fromEntries(
                          Object.entries(connectionInformation.stores).map(
                            ([key, store2]) => [
                              key,
                              key === connectionInformation.store
                                ? initialState
                                : store2.getState(),
                            ]
                          )
                        )
                      )),
                api.dispatchFromDevtools && 'function' == typeof api.dispatch)
              ) {
                let didWarnAboutReservedActionType = !1
                const originalDispatch = api.dispatch
                api.dispatch = (...args) => {
                  ;('__setState' !== args[0].type ||
                    didWarnAboutReservedActionType ||
                    (middleware_console.warn(
                      '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
                    ),
                    (didWarnAboutReservedActionType = !0)),
                    originalDispatch(...args))
                }
              }
              return (
                connection.subscribe((message) => {
                  var _a
                  switch (message.type) {
                    case 'ACTION':
                      return 'string' != typeof message.payload
                        ? void middleware_console.error(
                            '[zustand devtools middleware] Unsupported action format'
                          )
                        : parseJsonThen(message.payload, (action) => {
                            if ('__setState' === action.type) {
                              if (void 0 === store)
                                return void setStateFromDevtools(action.state)
                              1 !== Object.keys(action.state).length &&
                                middleware_console.error(
                                  '\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    '
                                )
                              const stateFromDevtools = action.state[store]
                              if (null == stateFromDevtools) return
                              return void (
                                JSON.stringify(api.getState()) !==
                                  JSON.stringify(stateFromDevtools) &&
                                setStateFromDevtools(stateFromDevtools)
                              )
                            }
                            api.dispatchFromDevtools &&
                              'function' == typeof api.dispatch &&
                              api.dispatch(action)
                          })
                    case 'DISPATCH':
                      switch (message.payload.type) {
                        case 'RESET':
                          return (
                            setStateFromDevtools(initialState),
                            void 0 === store
                              ? null == connection
                                ? void 0
                                : connection.init(api.getState())
                              : null == connection
                                ? void 0
                                : connection.init(
                                    getTrackedConnectionState(options.name)
                                  )
                          )
                        case 'COMMIT':
                          return void 0 === store
                            ? void (
                                null == connection ||
                                connection.init(api.getState())
                              )
                            : null == connection
                              ? void 0
                              : connection.init(
                                  getTrackedConnectionState(options.name)
                                )
                        case 'ROLLBACK':
                          return parseJsonThen(message.state, (state) => {
                            if (void 0 === store)
                              return (
                                setStateFromDevtools(state),
                                void (
                                  null == connection ||
                                  connection.init(api.getState())
                                )
                              )
                            ;(setStateFromDevtools(state[store]),
                              null == connection ||
                                connection.init(
                                  getTrackedConnectionState(options.name)
                                ))
                          })
                        case 'JUMP_TO_STATE':
                        case 'JUMP_TO_ACTION':
                          return parseJsonThen(message.state, (state) => {
                            void 0 !== store
                              ? JSON.stringify(api.getState()) !==
                                  JSON.stringify(state[store]) &&
                                setStateFromDevtools(state[store])
                              : setStateFromDevtools(state)
                          })
                        case 'IMPORT_STATE': {
                          const { nextLiftedState } = message.payload,
                            lastComputedState =
                              null ==
                              (_a = nextLiftedState.computedStates.slice(-1)[0])
                                ? void 0
                                : _a.state
                          if (!lastComputedState) return
                          return (
                            setStateFromDevtools(
                              void 0 === store
                                ? lastComputedState
                                : lastComputedState[store]
                            ),
                            void (
                              null == connection ||
                              connection.send(null, nextLiftedState)
                            )
                          )
                        }
                        case 'PAUSE_RECORDING':
                          return (isRecording = !isRecording)
                      }
                      return
                  }
                }),
                initialState
              )
            },
          parseJsonThen = (stringified, fn) => {
            let parsed
            try {
              parsed = JSON.parse(stringified)
            } catch (e) {
              middleware_console.error(
                '[zustand devtools middleware] Could not parse the received json',
                e
              )
            }
            void 0 !== parsed && fn(parsed)
          },
          subscribeWithSelector = (fn) => (set, get, api) => {
            const origSubscribe = api.subscribe
            api.subscribe = (selector, optListener, options) => {
              let listener = selector
              if (optListener) {
                const equalityFn =
                  (null == options ? void 0 : options.equalityFn) || Object.is
                let currentSlice = selector(api.getState())
                ;((listener = (state) => {
                  const nextSlice = selector(state)
                  if (!equalityFn(currentSlice, nextSlice)) {
                    const previousSlice = currentSlice
                    optListener((currentSlice = nextSlice), previousSlice)
                  }
                }),
                  (null == options ? void 0 : options.fireImmediately) &&
                    optListener(currentSlice, currentSlice))
              }
              return origSubscribe(listener)
            }
            return fn(set, get, api)
          }
        function middleware_createJSONStorage(getStorage, options) {
          let storage
          try {
            storage = getStorage()
          } catch (e) {
            return
          }
          return {
            getItem: (name) => {
              var _a
              const parse = (str2) =>
                  null === str2
                    ? null
                    : JSON.parse(
                        str2,
                        null == options ? void 0 : options.reviver
                      ),
                str = null != (_a = storage.getItem(name)) ? _a : null
              return str instanceof Promise ? str.then(parse) : parse(str)
            },
            setItem: (name, newValue) =>
              storage.setItem(
                name,
                JSON.stringify(
                  newValue,
                  null == options ? void 0 : options.replacer
                )
              ),
            removeItem: (name) => storage.removeItem(name),
          }
        }
        const toThenable = (fn) => (input) => {
            try {
              const result = fn(input)
              return result instanceof Promise
                ? result
                : {
                    then: (onFulfilled) => toThenable(onFulfilled)(result),
                    catch(_onRejected) {
                      return this
                    },
                  }
            } catch (e) {
              return {
                then(_onFulfilled) {
                  return this
                },
                catch: (onRejected) => toThenable(onRejected)(e),
              }
            }
          },
          persist = (config, baseOptions) => (set, get, api) => {
            let options = {
                storage: middleware_createJSONStorage(() => localStorage),
                partialize: (state) => state,
                version: 0,
                merge: (persistedState, currentState) => ({
                  ...currentState,
                  ...persistedState,
                }),
                ...baseOptions,
              },
              hasHydrated = !1
            const hydrationListeners = new Set(),
              finishHydrationListeners = new Set()
            let storage = options.storage
            if (!storage)
              return config(
                (...args) => {
                  ;(middleware_console.warn(
                    `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
                  ),
                    set(...args))
                },
                get,
                api
              )
            const setItem = () => {
                const state = options.partialize({ ...get() })
                return storage.setItem(options.name, {
                  state,
                  version: options.version,
                })
              },
              savedSetState = api.setState
            api.setState = (state, replace) => {
              ;(savedSetState(state, replace), setItem())
            }
            const configResult = config(
              (...args) => {
                ;(set(...args), setItem())
              },
              get,
              api
            )
            let stateFromStorage
            api.getInitialState = () => configResult
            const hydrate = () => {
              var _a, _b
              if (!storage) return
              ;((hasHydrated = !1),
                hydrationListeners.forEach((cb) => {
                  var _a2
                  return cb(null != (_a2 = get()) ? _a2 : configResult)
                }))
              const postRehydrationCallback =
                (null == (_b = options.onRehydrateStorage)
                  ? void 0
                  : _b.call(
                      options,
                      null != (_a = get()) ? _a : configResult
                    )) || void 0
              return toThenable(storage.getItem.bind(storage))(options.name)
                .then((deserializedStorageValue) => {
                  if (deserializedStorageValue) {
                    if (
                      'number' != typeof deserializedStorageValue.version ||
                      deserializedStorageValue.version === options.version
                    )
                      return [!1, deserializedStorageValue.state]
                    if (options.migrate) {
                      const migration = options.migrate(
                        deserializedStorageValue.state,
                        deserializedStorageValue.version
                      )
                      return migration instanceof Promise
                        ? migration.then((result) => [!0, result])
                        : [!0, migration]
                    }
                    middleware_console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    )
                  }
                  return [!1, void 0]
                })
                .then((migrationResult) => {
                  var _a2
                  const [migrated, migratedState] = migrationResult
                  if (
                    ((stateFromStorage = options.merge(
                      migratedState,
                      null != (_a2 = get()) ? _a2 : configResult
                    )),
                    set(stateFromStorage, !0),
                    migrated)
                  )
                    return setItem()
                })
                .then(() => {
                  ;(null == postRehydrationCallback ||
                    postRehydrationCallback(stateFromStorage, void 0),
                    (stateFromStorage = get()),
                    (hasHydrated = !0),
                    finishHydrationListeners.forEach((cb) =>
                      cb(stateFromStorage)
                    ))
                })
                .catch((e) => {
                  null == postRehydrationCallback ||
                    postRehydrationCallback(void 0, e)
                })
            }
            return (
              (api.persist = {
                setOptions: (newOptions) => {
                  ;((options = { ...options, ...newOptions }),
                    newOptions.storage && (storage = newOptions.storage))
                },
                clearStorage: () => {
                  null == storage || storage.removeItem(options.name)
                },
                getOptions: () => options,
                rehydrate: () => hydrate(),
                hasHydrated: () => hasHydrated,
                onHydrate: (cb) => (
                  hydrationListeners.add(cb),
                  () => {
                    hydrationListeners.delete(cb)
                  }
                ),
                onFinishHydration: (cb) => (
                  finishHydrationListeners.add(cb),
                  () => {
                    finishHydrationListeners.delete(cb)
                  }
                ),
              }),
              options.skipHydration || hydrate(),
              stateFromStorage || configResult
            )
          }
        var with_selector = __webpack_require__(
          '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js'
        )
        const createStoreImpl = (createState) => {
            let state
            const listeners = new Set(),
              setState = (partial, replace) => {
                const nextState =
                  'function' == typeof partial ? partial(state) : partial
                if (!Object.is(nextState, state)) {
                  const previousState = state
                  ;((state = (
                    null != replace
                      ? replace
                      : 'object' != typeof nextState || null === nextState
                  )
                    ? nextState
                    : Object.assign({}, state, nextState)),
                    listeners.forEach((listener) =>
                      listener(state, previousState)
                    ))
                }
              },
              getState = () => state,
              api = {
                setState,
                getState,
                getInitialState: () => initialState,
                subscribe: (listener) => (
                  listeners.add(listener),
                  () => listeners.delete(listener)
                ),
              },
              initialState = (state = createState(setState, getState, api))
            return api
          },
          { useSyncExternalStoreWithSelector } = with_selector,
          traditional_identity = (arg) => arg
        const createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
          const api = ((createState) =>
              createState ? createStoreImpl(createState) : createStoreImpl)(
              createState
            ),
            useBoundStoreWithEqualityFn = (
              selector,
              equalityFn = defaultEqualityFn
            ) =>
              (function useStoreWithEqualityFn(
                api,
                selector = traditional_identity,
                equalityFn
              ) {
                const slice = useSyncExternalStoreWithSelector(
                  api.subscribe,
                  api.getState,
                  api.getInitialState,
                  selector,
                  equalityFn
                )
                return (react.useDebugValue(slice), slice)
              })(api, selector, equalityFn)
          return (
            Object.assign(useBoundStoreWithEqualityFn, api),
            useBoundStoreWithEqualityFn
          )
        }
        var immer = __webpack_require__(
            '../../node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs'
          ),
          mutative_esm_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          )
        const Operation_Remove = 'remove',
          Operation_Replace = 'replace',
          Operation_Add = 'add',
          PROXY_DRAFT = Symbol.for('__MUTATIVE_PROXY_DRAFT__'),
          RAW_RETURN_SYMBOL = Symbol('__MUTATIVE_RAW_RETURN_SYMBOL__'),
          iteratorSymbol = Symbol.iterator,
          dataTypes = { mutable: 'mutable', immutable: 'immutable' },
          internal = {}
        function has(target, key) {
          return target instanceof Map
            ? target.has(key)
            : Object.prototype.hasOwnProperty.call(target, key)
        }
        function getDescriptor(target, key) {
          if (key in target) {
            let prototype = Reflect.getPrototypeOf(target)
            for (; prototype; ) {
              const descriptor = Reflect.getOwnPropertyDescriptor(
                prototype,
                key
              )
              if (descriptor) return descriptor
              prototype = Reflect.getPrototypeOf(prototype)
            }
          }
        }
        function isBaseSetInstance(obj) {
          return Object.getPrototypeOf(obj) === Set.prototype
        }
        function isBaseMapInstance(obj) {
          return Object.getPrototypeOf(obj) === Map.prototype
        }
        function latest(proxyDraft) {
          var _a
          return null !== (_a = proxyDraft.copy) && void 0 !== _a
            ? _a
            : proxyDraft.original
        }
        function isDraft(target) {
          return !!getProxyDraft(target)
        }
        function getProxyDraft(value) {
          return 'object' != typeof value
            ? null
            : null == value
              ? void 0
              : value[PROXY_DRAFT]
        }
        function getValue(value) {
          var _a
          const proxyDraft = getProxyDraft(value)
          return proxyDraft
            ? null !== (_a = proxyDraft.copy) && void 0 !== _a
              ? _a
              : proxyDraft.original
            : value
        }
        function isDraftable(value, options) {
          if (!value || 'object' != typeof value) return !1
          let markResult
          return (
            Object.getPrototypeOf(value) === Object.prototype ||
            Array.isArray(value) ||
            value instanceof Map ||
            value instanceof Set ||
            (!!(null == options ? void 0 : options.mark) &&
              ((markResult = options.mark(value, dataTypes)) ===
                dataTypes.immutable ||
                'function' == typeof markResult))
          )
        }
        function getPath(target, path = []) {
          if (Object.hasOwnProperty.call(target, 'key')) {
            const parentCopy = target.parent.copy,
              proxyDraft = getProxyDraft(get(parentCopy, target.key))
            if (
              null !== proxyDraft &&
              (null == proxyDraft ? void 0 : proxyDraft.original) !==
                target.original
            )
              return null
            const isSet = 3 === target.parent.type,
              key = isSet
                ? Array.from(target.parent.setMap.keys()).indexOf(target.key)
                : target.key
            if (!((isSet && parentCopy.size > key) || has(parentCopy, key)))
              return null
            path.push(key)
          }
          if (target.parent) return getPath(target.parent, path)
          path.reverse()
          try {
            !(function resolvePath(base, path) {
              for (let index = 0; index < path.length - 1; index += 1) {
                const key = path[index]
                if (
                  'object' !=
                  typeof (base = get(
                    3 === getType(base) ? Array.from(base) : base,
                    key
                  ))
                )
                  throw new Error(
                    `Cannot resolve patch at '${path.join('/')}'.`
                  )
              }
              return base
            })(target.copy, path)
          } catch (e) {
            return null
          }
          return path
        }
        function getType(target) {
          return Array.isArray(target)
            ? 1
            : target instanceof Map
              ? 2
              : target instanceof Set
                ? 3
                : 0
        }
        function get(target, key) {
          return 2 === getType(target) ? target.get(key) : target[key]
        }
        function set(target, key, value) {
          2 === getType(target) ? target.set(key, value) : (target[key] = value)
        }
        function peek(target, key) {
          const state = getProxyDraft(target)
          return (state ? latest(state) : target)[key]
        }
        function isEqual(x, y) {
          return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y
        }
        function revokeProxy(proxyDraft) {
          if (proxyDraft)
            for (; proxyDraft.finalities.revoke.length > 0; ) {
              proxyDraft.finalities.revoke.pop()()
            }
        }
        function escapePath(path, pathAsArray) {
          return pathAsArray
            ? path
            : ['']
                .concat(path)
                .map((_item) => {
                  const item = `${_item}`
                  return -1 === item.indexOf('/') && -1 === item.indexOf('~')
                    ? item
                    : item.replace(/~/g, '~0').replace(/\//g, '~1')
                })
                .join('/')
        }
        const propIsEnum = Object.prototype.propertyIsEnumerable
        function shallowCopy(original, options) {
          let markResult
          if (Array.isArray(original))
            return Array.prototype.concat.call(original)
          if (original instanceof Set) {
            if (!isBaseSetInstance(original)) {
              return new (0, Object.getPrototypeOf(original).constructor)(
                original.values()
              )
            }
            return Set.prototype.difference
              ? Set.prototype.difference.call(original, new Set())
              : new Set(original.values())
          }
          if (original instanceof Map) {
            if (!isBaseMapInstance(original)) {
              return new (0, Object.getPrototypeOf(original).constructor)(
                original
              )
            }
            return new Map(original)
          }
          if (
            (null == options ? void 0 : options.mark) &&
            ((markResult = options.mark(original, dataTypes)),
            void 0 !== markResult) &&
            markResult !== dataTypes.mutable
          ) {
            if (markResult === dataTypes.immutable)
              return (function strictCopy(target) {
                const copy = Object.create(Object.getPrototypeOf(target))
                return (
                  Reflect.ownKeys(target).forEach((key) => {
                    let desc = Reflect.getOwnPropertyDescriptor(target, key)
                    desc.enumerable && desc.configurable && desc.writable
                      ? (copy[key] = target[key])
                      : (desc.writable ||
                          ((desc.writable = !0), (desc.configurable = !0)),
                        (desc.get || desc.set) &&
                          (desc = {
                            configurable: !0,
                            writable: !0,
                            enumerable: desc.enumerable,
                            value: target[key],
                          }),
                        Reflect.defineProperty(copy, key, desc))
                  }),
                  copy
                )
              })(original)
            if ('function' == typeof markResult) {
              if (options.enablePatches || options.enableAutoFreeze)
                throw new Error(
                  "You can't use mark and patches or auto freeze together."
                )
              return markResult()
            }
            throw new Error(`Unsupported mark result: ${markResult}`)
          }
          if (
            'object' == typeof original &&
            Object.getPrototypeOf(original) === Object.prototype
          ) {
            const copy = {}
            return (
              Object.keys(original).forEach((key) => {
                copy[key] = original[key]
              }),
              Object.getOwnPropertySymbols(original).forEach((key) => {
                propIsEnum.call(original, key) && (copy[key] = original[key])
              }),
              copy
            )
          }
          throw new Error(
            'Please check mark() to ensure that it is a stable marker draftable function.'
          )
        }
        function ensureShallowCopy(target) {
          target.copy ||
            (target.copy = shallowCopy(target.original, target.options))
        }
        function deepClone(target) {
          if (!isDraftable(target)) return getValue(target)
          if (Array.isArray(target)) return target.map(deepClone)
          if (target instanceof Map) {
            const iterable = Array.from(target.entries()).map(([k, v]) => [
              k,
              deepClone(v),
            ])
            if (!isBaseMapInstance(target)) {
              return new (0, Object.getPrototypeOf(target).constructor)(
                iterable
              )
            }
            return new Map(iterable)
          }
          if (target instanceof Set) {
            const iterable = Array.from(target).map(deepClone)
            if (!isBaseSetInstance(target)) {
              return new (0, Object.getPrototypeOf(target).constructor)(
                iterable
              )
            }
            return new Set(iterable)
          }
          const copy = Object.create(Object.getPrototypeOf(target))
          for (const key in target) copy[key] = deepClone(target[key])
          return copy
        }
        function cloneIfNeeded(target) {
          return isDraft(target) ? deepClone(target) : target
        }
        function markChanged(proxyDraft) {
          var _a
          ;((proxyDraft.assignedMap =
            null !== (_a = proxyDraft.assignedMap) && void 0 !== _a
              ? _a
              : new Map()),
            proxyDraft.operated ||
              ((proxyDraft.operated = !0),
              proxyDraft.parent && markChanged(proxyDraft.parent)))
        }
        function throwFrozenError() {
          throw new Error('Cannot modify frozen object')
        }
        function mutative_esm_deepFreeze(
          target,
          subKey,
          updatedValues,
          stack,
          keys
        ) {
          {
            ;((updatedValues =
              null != updatedValues ? updatedValues : new WeakMap()),
              (stack = null != stack ? stack : []),
              (keys = null != keys ? keys : []))
            const value = updatedValues.has(target)
              ? updatedValues.get(target)
              : target
            if (stack.length > 0) {
              const index = stack.indexOf(value)
              if (value && 'object' == typeof value && -1 !== index) {
                if (stack[0] === value)
                  throw new Error('Forbids circular reference')
                throw new Error(
                  `Forbids circular reference: ~/${keys
                    .slice(0, index)
                    .map((key, index) => {
                      if ('symbol' == typeof key) return `[${key.toString()}]`
                      const parent = stack[index]
                      return 'object' == typeof key &&
                        (parent instanceof Map || parent instanceof Set)
                        ? Array.from(parent.keys()).indexOf(key)
                        : key
                    })
                    .join('/')}`
                )
              }
              ;(stack.push(value), keys.push(subKey))
            } else stack.push(value)
          }
          if (Object.isFrozen(target) || isDraft(target))
            return (stack.pop(), void keys.pop())
          switch (getType(target)) {
            case 2:
              for (const [key, value] of target)
                (mutative_esm_deepFreeze(key, key, updatedValues, stack, keys),
                  mutative_esm_deepFreeze(
                    value,
                    key,
                    updatedValues,
                    stack,
                    keys
                  ))
              target.set = target.clear = target.delete = throwFrozenError
              break
            case 3:
              for (const value of target)
                mutative_esm_deepFreeze(
                  value,
                  value,
                  updatedValues,
                  stack,
                  keys
                )
              target.add = target.clear = target.delete = throwFrozenError
              break
            case 1:
              Object.freeze(target)
              let index = 0
              for (const value of target)
                (mutative_esm_deepFreeze(
                  value,
                  index,
                  updatedValues,
                  stack,
                  keys
                ),
                  (index += 1))
              break
            default:
              ;(Object.freeze(target),
                Object.keys(target).forEach((name) => {
                  mutative_esm_deepFreeze(
                    target[name],
                    name,
                    updatedValues,
                    stack,
                    keys
                  )
                }))
          }
          ;(stack.pop(), keys.pop())
        }
        function forEach(target, iter) {
          const type = getType(target)
          if (0 === type)
            Reflect.ownKeys(target).forEach((key) => {
              iter(key, target[key], target)
            })
          else if (1 === type) {
            let index = 0
            for (const entry of target)
              (iter(index, entry, target), (index += 1))
          } else target.forEach((entry, index) => iter(index, entry, target))
        }
        function handleValue(target, handledSet, options) {
          if (
            isDraft(target) ||
            !isDraftable(target, options) ||
            handledSet.has(target) ||
            Object.isFrozen(target)
          )
            return
          const isSet = target instanceof Set,
            setMap = isSet ? new Map() : void 0
          if (
            (handledSet.add(target),
            forEach(target, (key, value) => {
              var _a
              if (isDraft(value)) {
                const proxyDraft = getProxyDraft(value)
                ensureShallowCopy(proxyDraft)
                const updatedValue =
                  (null === (_a = proxyDraft.assignedMap) || void 0 === _a
                    ? void 0
                    : _a.size) || proxyDraft.operated
                    ? proxyDraft.copy
                    : proxyDraft.original
                set(isSet ? setMap : target, key, updatedValue)
              } else handleValue(value, handledSet, options)
            }),
            setMap)
          ) {
            const set = target,
              values = Array.from(set)
            ;(set.clear(),
              values.forEach((value) => {
                set.add(setMap.has(value) ? setMap.get(value) : value)
              }))
          }
        }
        function finalizeAssigned(proxyDraft, key) {
          const copy =
            3 === proxyDraft.type ? proxyDraft.setMap : proxyDraft.copy
          proxyDraft.finalities.revoke.length > 1 &&
            proxyDraft.assignedMap.get(key) &&
            copy &&
            handleValue(
              get(copy, key),
              proxyDraft.finalities.handledSet,
              proxyDraft.options
            )
        }
        function finalizeSetValue(target) {
          3 === target.type &&
            target.copy &&
            (target.copy.clear(),
            target.setMap.forEach((value) => {
              target.copy.add(getValue(value))
            }))
        }
        function finalizePatches(
          target,
          generatePatches,
          patches,
          inversePatches
        ) {
          if (
            target.operated &&
            target.assignedMap &&
            target.assignedMap.size > 0 &&
            !target.finalized
          ) {
            if (patches && inversePatches) {
              const basePath = getPath(target)
              basePath &&
                generatePatches(target, basePath, patches, inversePatches)
            }
            target.finalized = !0
          }
        }
        function markFinalization(target, key, value, generatePatches) {
          const proxyDraft = getProxyDraft(value)
          ;(proxyDraft &&
            (proxyDraft.callbacks || (proxyDraft.callbacks = []),
            proxyDraft.callbacks.push((patches, inversePatches) => {
              var _a
              const copy = 3 === target.type ? target.setMap : target.copy
              if (isEqual(get(copy, key), value)) {
                let updatedValue = proxyDraft.original
                ;(proxyDraft.copy && (updatedValue = proxyDraft.copy),
                  finalizeSetValue(target),
                  finalizePatches(
                    target,
                    generatePatches,
                    patches,
                    inversePatches
                  ),
                  target.options.enableAutoFreeze &&
                    ((target.options.updatedValues =
                      null !== (_a = target.options.updatedValues) &&
                      void 0 !== _a
                        ? _a
                        : new WeakMap()),
                    target.options.updatedValues.set(
                      updatedValue,
                      proxyDraft.original
                    )),
                  set(copy, key, updatedValue))
              }
            }),
            target.options.enableAutoFreeze &&
              proxyDraft.finalities !== target.finalities &&
              (target.options.enableAutoFreeze = !1)),
            isDraftable(value, target.options) &&
              target.finalities.draft.push(() => {
                isEqual(
                  get(3 === target.type ? target.setMap : target.copy, key),
                  value
                ) && finalizeAssigned(target, key)
              }))
        }
        function generatePatches(
          proxyState,
          basePath,
          patches,
          inversePatches
        ) {
          const { pathAsArray = !0 } = proxyState.options.enablePatches
          switch (proxyState.type) {
            case 0:
            case 2:
              return (function generatePatchesFromAssigned(
                { original, copy, assignedMap },
                basePath,
                patches,
                inversePatches,
                pathAsArray
              ) {
                assignedMap.forEach((assignedValue, key) => {
                  const originalValue = get(original, key),
                    value = cloneIfNeeded(get(copy, key)),
                    op = assignedValue
                      ? has(original, key)
                        ? Operation_Replace
                        : Operation_Add
                      : Operation_Remove
                  if (isEqual(originalValue, value) && op === Operation_Replace)
                    return
                  const path = escapePath(basePath.concat(key), pathAsArray)
                  ;(patches.push(
                    op === Operation_Remove ? { op, path } : { op, path, value }
                  ),
                    inversePatches.push(
                      op === Operation_Add
                        ? { op: Operation_Remove, path }
                        : op === Operation_Remove
                          ? { op: Operation_Add, path, value: originalValue }
                          : {
                              op: Operation_Replace,
                              path,
                              value: originalValue,
                            }
                    ))
                })
              })(proxyState, basePath, patches, inversePatches, pathAsArray)
            case 1:
              return (function generateArrayPatches(
                proxyState,
                basePath,
                patches,
                inversePatches,
                pathAsArray
              ) {
                let { original, assignedMap, options } = proxyState,
                  copy = proxyState.copy
                copy.length < original.length &&
                  (([original, copy] = [copy, original]),
                  ([patches, inversePatches] = [inversePatches, patches]))
                for (let index = 0; index < original.length; index += 1)
                  if (
                    assignedMap.get(index.toString()) &&
                    copy[index] !== original[index]
                  ) {
                    const path = escapePath(
                      basePath.concat([index]),
                      pathAsArray
                    )
                    ;(patches.push({
                      op: Operation_Replace,
                      path,
                      value: cloneIfNeeded(copy[index]),
                    }),
                      inversePatches.push({
                        op: Operation_Replace,
                        path,
                        value: cloneIfNeeded(original[index]),
                      }))
                  }
                for (
                  let index = original.length;
                  index < copy.length;
                  index += 1
                ) {
                  const path = escapePath(basePath.concat([index]), pathAsArray)
                  patches.push({
                    op: Operation_Add,
                    path,
                    value: cloneIfNeeded(copy[index]),
                  })
                }
                if (original.length < copy.length) {
                  const { arrayLengthAssignment = !0 } = options.enablePatches
                  if (arrayLengthAssignment) {
                    const path = escapePath(
                      basePath.concat(['length']),
                      pathAsArray
                    )
                    inversePatches.push({
                      op: Operation_Replace,
                      path,
                      value: original.length,
                    })
                  } else
                    for (
                      let index = copy.length;
                      original.length < index;
                      index -= 1
                    ) {
                      const path = escapePath(
                        basePath.concat([index - 1]),
                        pathAsArray
                      )
                      inversePatches.push({ op: Operation_Remove, path })
                    }
                }
              })(proxyState, basePath, patches, inversePatches, pathAsArray)
            case 3:
              return (function generateSetPatches(
                { original, copy },
                basePath,
                patches,
                inversePatches,
                pathAsArray
              ) {
                let index = 0
                ;(original.forEach((value) => {
                  if (!copy.has(value)) {
                    const path = escapePath(
                      basePath.concat([index]),
                      pathAsArray
                    )
                    ;(patches.push({ op: Operation_Remove, path, value }),
                      inversePatches.unshift({
                        op: Operation_Add,
                        path,
                        value,
                      }))
                  }
                  index += 1
                }),
                  (index = 0),
                  copy.forEach((value) => {
                    if (!original.has(value)) {
                      const path = escapePath(
                        basePath.concat([index]),
                        pathAsArray
                      )
                      ;(patches.push({ op: Operation_Add, path, value }),
                        inversePatches.unshift({
                          op: Operation_Remove,
                          path,
                          value,
                        }))
                    }
                    index += 1
                  }))
              })(proxyState, basePath, patches, inversePatches, pathAsArray)
          }
        }
        let readable = !1
        const checkReadable = (value, options, ignoreCheckDraftable = !1) => {
          if (
            'object' == typeof value &&
            null !== value &&
            (!isDraftable(value, options) || ignoreCheckDraftable) &&
            !readable
          )
            throw new Error(
              "Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap."
            )
        }
        const mapHandler = {
            get size() {
              return latest(getProxyDraft(this)).size
            },
            has(key) {
              return latest(getProxyDraft(this)).has(key)
            },
            set(key, value) {
              const target = getProxyDraft(this),
                source = latest(target)
              return (
                (source.has(key) && isEqual(source.get(key), value)) ||
                  (ensureShallowCopy(target),
                  markChanged(target),
                  target.assignedMap.set(key, !0),
                  target.copy.set(key, value),
                  markFinalization(target, key, value, generatePatches)),
                this
              )
            },
            delete(key) {
              if (!this.has(key)) return !1
              const target = getProxyDraft(this)
              return (
                ensureShallowCopy(target),
                markChanged(target),
                target.original.has(key)
                  ? target.assignedMap.set(key, !1)
                  : target.assignedMap.delete(key),
                target.copy.delete(key),
                !0
              )
            },
            clear() {
              const target = getProxyDraft(this)
              if (this.size) {
                ;(ensureShallowCopy(target),
                  markChanged(target),
                  (target.assignedMap = new Map()))
                for (const [key] of target.original)
                  target.assignedMap.set(key, !1)
                target.copy.clear()
              }
            },
            forEach(callback, thisArg) {
              latest(getProxyDraft(this)).forEach((_value, _key) => {
                callback.call(thisArg, this.get(_key), _key, this)
              })
            },
            get(key) {
              var _a, _b
              const target = getProxyDraft(this),
                value = latest(target).get(key),
                mutable =
                  (null === (_b = (_a = target.options).mark) || void 0 === _b
                    ? void 0
                    : _b.call(_a, value, dataTypes)) === dataTypes.mutable
              if (
                (target.options.strict &&
                  checkReadable(value, target.options, mutable),
                mutable)
              )
                return value
              if (target.finalized || !isDraftable(value, target.options))
                return value
              if (value !== target.original.get(key)) return value
              const draft = internal.createDraft({
                original: value,
                parentDraft: target,
                key,
                finalities: target.finalities,
                options: target.options,
              })
              return (
                ensureShallowCopy(target),
                target.copy.set(key, draft),
                draft
              )
            },
            keys() {
              return latest(getProxyDraft(this)).keys()
            },
            values() {
              const iterator = this.keys()
              return {
                [iteratorSymbol]: () => this.values(),
                next: () => {
                  const result = iterator.next()
                  if (result.done) return result
                  return { done: !1, value: this.get(result.value) }
                },
              }
            },
            entries() {
              const iterator = this.keys()
              return {
                [iteratorSymbol]: () => this.entries(),
                next: () => {
                  const result = iterator.next()
                  if (result.done) return result
                  const value = this.get(result.value)
                  return { done: !1, value: [result.value, value] }
                },
              }
            },
            [iteratorSymbol]() {
              return this.entries()
            },
          },
          mapHandlerKeys = Reflect.ownKeys(mapHandler),
          getNextIterator =
            (target, iterator, { isValuesIterator }) =>
            () => {
              var _a, _b
              const result = iterator.next()
              if (result.done) return result
              const key = result.value
              let value = target.setMap.get(key)
              const currentDraft = getProxyDraft(value),
                mutable =
                  (null === (_b = (_a = target.options).mark) || void 0 === _b
                    ? void 0
                    : _b.call(_a, value, dataTypes)) === dataTypes.mutable
              if (
                (target.options.strict &&
                  checkReadable(key, target.options, mutable),
                mutable ||
                  currentDraft ||
                  !isDraftable(key, target.options) ||
                  target.finalized ||
                  !target.original.has(key))
              )
                currentDraft && (value = currentDraft.proxy)
              else {
                const proxy = internal.createDraft({
                  original: key,
                  parentDraft: target,
                  key,
                  finalities: target.finalities,
                  options: target.options,
                })
                ;(target.setMap.set(key, proxy), (value = proxy))
              }
              return {
                done: !1,
                value: isValuesIterator ? value : [value, value],
              }
            },
          setHandler = {
            get size() {
              return getProxyDraft(this).setMap.size
            },
            has(value) {
              const target = getProxyDraft(this)
              if (target.setMap.has(value)) return !0
              ensureShallowCopy(target)
              const valueProxyDraft = getProxyDraft(value)
              return !(
                !valueProxyDraft || !target.setMap.has(valueProxyDraft.original)
              )
            },
            add(value) {
              const target = getProxyDraft(this)
              return (
                this.has(value) ||
                  (ensureShallowCopy(target),
                  markChanged(target),
                  target.assignedMap.set(value, !0),
                  target.setMap.set(value, value),
                  markFinalization(target, value, value, generatePatches)),
                this
              )
            },
            delete(value) {
              if (!this.has(value)) return !1
              const target = getProxyDraft(this)
              ;(ensureShallowCopy(target), markChanged(target))
              const valueProxyDraft = getProxyDraft(value)
              return valueProxyDraft &&
                target.setMap.has(valueProxyDraft.original)
                ? (target.assignedMap.set(valueProxyDraft.original, !1),
                  target.setMap.delete(valueProxyDraft.original))
                : (!valueProxyDraft && target.setMap.has(value)
                    ? target.assignedMap.set(value, !1)
                    : target.assignedMap.delete(value),
                  target.setMap.delete(value))
            },
            clear() {
              if (!this.size) return
              const target = getProxyDraft(this)
              ;(ensureShallowCopy(target), markChanged(target))
              for (const value of target.original)
                target.assignedMap.set(value, !1)
              target.setMap.clear()
            },
            values() {
              const target = getProxyDraft(this)
              ensureShallowCopy(target)
              const iterator = target.setMap.keys()
              return {
                [Symbol.iterator]: () => this.values(),
                next: getNextIterator(target, iterator, {
                  isValuesIterator: !0,
                }),
              }
            },
            entries() {
              const target = getProxyDraft(this)
              ensureShallowCopy(target)
              const iterator = target.setMap.keys()
              return {
                [Symbol.iterator]: () => this.entries(),
                next: getNextIterator(target, iterator, {
                  isValuesIterator: !1,
                }),
              }
            },
            keys() {
              return this.values()
            },
            [iteratorSymbol]() {
              return this.values()
            },
            forEach(callback, thisArg) {
              const iterator = this.values()
              let result = iterator.next()
              for (; !result.done; )
                (callback.call(thisArg, result.value, result.value, this),
                  (result = iterator.next()))
            },
          }
        Set.prototype.difference &&
          Object.assign(setHandler, {
            intersection(other) {
              return Set.prototype.intersection.call(
                new Set(this.values()),
                other
              )
            },
            union(other) {
              return Set.prototype.union.call(new Set(this.values()), other)
            },
            difference(other) {
              return Set.prototype.difference.call(
                new Set(this.values()),
                other
              )
            },
            symmetricDifference(other) {
              return Set.prototype.symmetricDifference.call(
                new Set(this.values()),
                other
              )
            },
            isSubsetOf(other) {
              return Set.prototype.isSubsetOf.call(
                new Set(this.values()),
                other
              )
            },
            isSupersetOf(other) {
              return Set.prototype.isSupersetOf.call(
                new Set(this.values()),
                other
              )
            },
            isDisjointFrom(other) {
              return Set.prototype.isDisjointFrom.call(
                new Set(this.values()),
                other
              )
            },
          })
        const setHandlerKeys = Reflect.ownKeys(setHandler),
          draftsCache = new WeakSet(),
          proxyHandler = {
            get(target, key, receiver) {
              var _a, _b
              const copy =
                null === (_a = target.copy) || void 0 === _a ? void 0 : _a[key]
              if (copy && draftsCache.has(copy)) return copy
              if (key === PROXY_DRAFT) return target
              let markResult
              if (target.options.mark) {
                const value =
                  'size' === key &&
                  (target.original instanceof Map ||
                    target.original instanceof Set)
                    ? Reflect.get(target.original, key)
                    : Reflect.get(target.original, key, receiver)
                if (
                  ((markResult = target.options.mark(value, dataTypes)),
                  markResult === dataTypes.mutable)
                )
                  return (
                    target.options.strict &&
                      checkReadable(value, target.options, !0),
                    value
                  )
              }
              const source = latest(target)
              if (source instanceof Map && mapHandlerKeys.includes(key)) {
                if ('size' === key)
                  return Object.getOwnPropertyDescriptor(
                    mapHandler,
                    'size'
                  ).get.call(target.proxy)
                const handle = mapHandler[key]
                if (handle) return handle.bind(target.proxy)
              }
              if (source instanceof Set && setHandlerKeys.includes(key)) {
                if ('size' === key)
                  return Object.getOwnPropertyDescriptor(
                    setHandler,
                    'size'
                  ).get.call(target.proxy)
                const handle = setHandler[key]
                if (handle) return handle.bind(target.proxy)
              }
              if (!has(source, key)) {
                const desc = getDescriptor(source, key)
                return desc
                  ? 'value' in desc
                    ? desc.value
                    : null === (_b = desc.get) || void 0 === _b
                      ? void 0
                      : _b.call(target.proxy)
                  : void 0
              }
              const value = source[key]
              if (
                (target.options.strict && checkReadable(value, target.options),
                target.finalized || !isDraftable(value, target.options))
              )
                return value
              if (value === peek(target.original, key)) {
                if (
                  (ensureShallowCopy(target),
                  (target.copy[key] = createDraft({
                    original: target.original[key],
                    parentDraft: target,
                    key: 1 === target.type ? Number(key) : key,
                    finalities: target.finalities,
                    options: target.options,
                  })),
                  'function' == typeof markResult)
                ) {
                  const subProxyDraft = getProxyDraft(target.copy[key])
                  return (
                    ensureShallowCopy(subProxyDraft),
                    markChanged(subProxyDraft),
                    subProxyDraft.copy
                  )
                }
                return target.copy[key]
              }
              return value
            },
            set(target, key, value) {
              var _a
              if (3 === target.type || 2 === target.type)
                throw new Error(
                  'Map/Set draft does not support any property assignment.'
                )
              let _key
              if (
                1 === target.type &&
                'length' !== key &&
                (!(Number.isInteger((_key = Number(key))) && _key >= 0) ||
                  (0 !== key && 0 !== _key && String(_key) !== String(key)))
              )
                throw new Error(
                  "Only supports setting array indices and the 'length' property."
                )
              const desc = getDescriptor(latest(target), key)
              if (null == desc ? void 0 : desc.set)
                return (desc.set.call(target.proxy, value), !0)
              const current = peek(latest(target), key),
                currentProxyDraft = getProxyDraft(current)
              return currentProxyDraft &&
                isEqual(currentProxyDraft.original, value)
                ? ((target.copy[key] = value),
                  (target.assignedMap =
                    null !== (_a = target.assignedMap) && void 0 !== _a
                      ? _a
                      : new Map()),
                  target.assignedMap.set(key, !1),
                  !0)
                : ((isEqual(value, current) &&
                    (void 0 !== value || has(target.original, key))) ||
                    (ensureShallowCopy(target),
                    markChanged(target),
                    has(target.original, key) &&
                    isEqual(value, target.original[key])
                      ? target.assignedMap.delete(key)
                      : target.assignedMap.set(key, !0),
                    (target.copy[key] = value),
                    markFinalization(target, key, value, generatePatches)),
                  !0)
            },
            has: (target, key) => key in latest(target),
            ownKeys: (target) => Reflect.ownKeys(latest(target)),
            getOwnPropertyDescriptor(target, key) {
              const source = latest(target),
                descriptor = Reflect.getOwnPropertyDescriptor(source, key)
              return descriptor
                ? {
                    writable: !0,
                    configurable: 1 !== target.type || 'length' !== key,
                    enumerable: descriptor.enumerable,
                    value: source[key],
                  }
                : descriptor
            },
            getPrototypeOf: (target) => Reflect.getPrototypeOf(target.original),
            setPrototypeOf() {
              throw new Error("Cannot call 'setPrototypeOf()' on drafts")
            },
            defineProperty() {
              throw new Error("Cannot call 'defineProperty()' on drafts")
            },
            deleteProperty(target, key) {
              var _a
              return 1 === target.type
                ? proxyHandler.set.call(this, target, key, void 0, target.proxy)
                : (void 0 !== peek(target.original, key) ||
                  key in target.original
                    ? (ensureShallowCopy(target),
                      markChanged(target),
                      target.assignedMap.set(key, !1))
                    : ((target.assignedMap =
                        null !== (_a = target.assignedMap) && void 0 !== _a
                          ? _a
                          : new Map()),
                      target.assignedMap.delete(key)),
                  target.copy && delete target.copy[key],
                  !0)
            },
          }
        function createDraft(createDraftOptions) {
          const { original, parentDraft, key, finalities, options } =
              createDraftOptions,
            type = getType(original),
            proxyDraft = {
              type,
              finalized: !1,
              parent: parentDraft,
              original,
              copy: null,
              proxy: null,
              finalities,
              options,
              setMap: 3 === type ? new Map(original.entries()) : void 0,
            }
          ;(key || 'key' in createDraftOptions) && (proxyDraft.key = key)
          const { proxy, revoke } = Proxy.revocable(
            1 === type ? Object.assign([], proxyDraft) : proxyDraft,
            proxyHandler
          )
          if (
            (finalities.revoke.push(revoke),
            draftsCache.add(proxy),
            (proxyDraft.proxy = proxy),
            parentDraft)
          ) {
            const target = parentDraft
            target.finalities.draft.push((patches, inversePatches) => {
              var _a, _b
              const oldProxyDraft = getProxyDraft(proxy)
              let copy = 3 === target.type ? target.setMap : target.copy
              const draft = get(copy, key),
                proxyDraft = getProxyDraft(draft)
              if (proxyDraft) {
                let updatedValue = proxyDraft.original
                ;(proxyDraft.operated && (updatedValue = getValue(draft)),
                  finalizeSetValue(proxyDraft),
                  finalizePatches(
                    proxyDraft,
                    generatePatches,
                    patches,
                    inversePatches
                  ),
                  target.options.enableAutoFreeze &&
                    ((target.options.updatedValues =
                      null !== (_a = target.options.updatedValues) &&
                      void 0 !== _a
                        ? _a
                        : new WeakMap()),
                    target.options.updatedValues.set(
                      updatedValue,
                      proxyDraft.original
                    )),
                  set(copy, key, updatedValue))
              }
              null === (_b = oldProxyDraft.callbacks) ||
                void 0 === _b ||
                _b.forEach((callback) => {
                  callback(patches, inversePatches)
                })
            })
          } else {
            const target = getProxyDraft(proxy)
            target.finalities.draft.push((patches, inversePatches) => {
              ;(finalizeSetValue(target),
                finalizePatches(
                  target,
                  generatePatches,
                  patches,
                  inversePatches
                ))
            })
          }
          return proxy
        }
        function finalizeDraft(
          result,
          returnedValue,
          patches,
          inversePatches,
          enableAutoFreeze
        ) {
          var _a
          const proxyDraft = getProxyDraft(result),
            original =
              null !==
                (_a = null == proxyDraft ? void 0 : proxyDraft.original) &&
              void 0 !== _a
                ? _a
                : result,
            hasReturnedValue = !!returnedValue.length
          if (null == proxyDraft ? void 0 : proxyDraft.operated)
            for (; proxyDraft.finalities.draft.length > 0; ) {
              proxyDraft.finalities.draft.pop()(patches, inversePatches)
            }
          const state = hasReturnedValue
            ? returnedValue[0]
            : proxyDraft
              ? proxyDraft.operated
                ? proxyDraft.copy
                : proxyDraft.original
              : result
          return (
            proxyDraft && revokeProxy(proxyDraft),
            enableAutoFreeze &&
              mutative_esm_deepFreeze(
                state,
                state,
                null == proxyDraft ? void 0 : proxyDraft.options.updatedValues
              ),
            [
              state,
              patches && hasReturnedValue
                ? [{ op: Operation_Replace, path: [], value: returnedValue[0] }]
                : patches,
              inversePatches && hasReturnedValue
                ? [{ op: Operation_Replace, path: [], value: original }]
                : inversePatches,
            ]
          )
        }
        function handleReturnValue(options) {
          const { rootDraft, value, useRawReturn = !1, isRoot = !0 } = options
          ;(forEach(value, (key, item, source) => {
            const proxyDraft = getProxyDraft(item)
            if (
              proxyDraft &&
              rootDraft &&
              proxyDraft.finalities === rootDraft.finalities
            ) {
              options.isContainDraft = !0
              const currentValue = proxyDraft.original
              if (source instanceof Set) {
                const arr = Array.from(source)
                ;(source.clear(),
                  arr.forEach((_item) =>
                    source.add(key === _item ? currentValue : _item)
                  ))
              } else set(source, key, currentValue)
            } else
              'object' == typeof item &&
                null !== item &&
                ((options.value = item),
                (options.isRoot = !1),
                handleReturnValue(options))
          }),
            isRoot &&
              (options.isContainDraft ||
                mutative_esm_console.warn(
                  "The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."
                ),
              useRawReturn &&
                mutative_esm_console.warn(
                  "The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."
                )))
        }
        function getCurrent(target) {
          var _a
          const proxyDraft = getProxyDraft(target)
          if (
            !isDraftable(
              target,
              null == proxyDraft ? void 0 : proxyDraft.options
            )
          )
            return target
          const type = getType(target)
          if (proxyDraft && !proxyDraft.operated) return proxyDraft.original
          let currentValue
          function ensureShallowCopy() {
            currentValue =
              2 === type
                ? isBaseMapInstance(target)
                  ? new Map(target)
                  : new (Object.getPrototypeOf(target).constructor)(target)
                : 3 === type
                  ? Array.from(proxyDraft.setMap.values())
                  : shallowCopy(
                      target,
                      null == proxyDraft ? void 0 : proxyDraft.options
                    )
          }
          if (proxyDraft) {
            proxyDraft.finalized = !0
            try {
              ensureShallowCopy()
            } finally {
              proxyDraft.finalized = !1
            }
          } else currentValue = target
          if (
            (forEach(currentValue, (key, value) => {
              if (proxyDraft && isEqual(get(proxyDraft.original, key), value))
                return
              const newValue = getCurrent(value)
              newValue !== value &&
                (currentValue === target && ensureShallowCopy(),
                set(currentValue, key, newValue))
            }),
            3 === type)
          ) {
            const value =
              null !==
                (_a = null == proxyDraft ? void 0 : proxyDraft.original) &&
              void 0 !== _a
                ? _a
                : currentValue
            return isBaseSetInstance(value)
              ? new Set(currentValue)
              : new (Object.getPrototypeOf(value).constructor)(currentValue)
          }
          return currentValue
        }
        function current(target) {
          if (!isDraft(target))
            throw new Error(
              `current() is only used for Draft, parameter: ${target}`
            )
          return getCurrent(target)
        }
        internal.createDraft = createDraft
        const mutative_esm_create = ((arg) => {
          if (
            void 0 !== arg &&
            '[object Object]' !== Object.prototype.toString.call(arg)
          )
            throw new Error(
              `Invalid options: ${String(arg)}, 'options' should be an object.`
            )
          return function create(arg0, arg1, arg2) {
            var _a, _b, _c
            if ('function' == typeof arg0 && 'function' != typeof arg1)
              return function (base, ...args) {
                return create(
                  base,
                  (draft) => arg0.call(this, draft, ...args),
                  arg1
                )
              }
            const base = arg0,
              mutate = arg1
            let options = arg2
            if (
              ('function' != typeof arg1 && (options = arg1),
              void 0 !== options &&
                '[object Object]' !== Object.prototype.toString.call(options))
            )
              throw new Error(
                `Invalid options: ${options}, 'options' should be an object.`
              )
            options = Object.assign(Object.assign({}, arg), options)
            const state = isDraft(base) ? current(base) : base,
              mark = Array.isArray(options.mark)
                ? (value, types) => {
                    for (const mark of options.mark) {
                      if ('function' != typeof mark)
                        throw new Error(
                          `Invalid mark: ${mark}, 'mark' should be a function.`
                        )
                      const result = mark(value, types)
                      if (result) return result
                    }
                  }
                : options.mark,
              enablePatches =
                null !== (_a = options.enablePatches) && void 0 !== _a && _a,
              strict = null !== (_b = options.strict) && void 0 !== _b && _b,
              _options = {
                enableAutoFreeze:
                  null !== (_c = options.enableAutoFreeze) &&
                  void 0 !== _c &&
                  _c,
                mark,
                strict,
                enablePatches,
              }
            if (
              !isDraftable(state, _options) &&
              'object' == typeof state &&
              null !== state
            )
              throw new Error(
                'Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.'
              )
            const [draft, finalize] = (function draftify(baseState, options) {
              var _a
              const finalities = {
                draft: [],
                revoke: [],
                handledSet: new WeakSet(),
              }
              let patches, inversePatches
              options.enablePatches && ((patches = []), (inversePatches = []))
              const draft =
                (null === (_a = options.mark) || void 0 === _a
                  ? void 0
                  : _a.call(options, baseState, dataTypes)) !==
                  dataTypes.mutable && isDraftable(baseState, options)
                  ? createDraft({
                      original: baseState,
                      parentDraft: null,
                      finalities,
                      options,
                    })
                  : baseState
              return [
                draft,
                (returnedValue = []) => {
                  const [
                    finalizedState,
                    finalizedPatches,
                    finalizedInversePatches,
                  ] = finalizeDraft(
                    draft,
                    returnedValue,
                    patches,
                    inversePatches,
                    options.enableAutoFreeze
                  )
                  return options.enablePatches
                    ? [
                        finalizedState,
                        finalizedPatches,
                        finalizedInversePatches,
                      ]
                    : finalizedState
                },
              ]
            })(state, _options)
            if ('function' != typeof arg1) {
              if (!isDraftable(state, _options))
                throw new Error(
                  'Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.'
                )
              return [draft, finalize]
            }
            let result
            try {
              result = mutate(draft)
            } catch (error) {
              throw (revokeProxy(getProxyDraft(draft)), error)
            }
            const returnValue = (value) => {
              const proxyDraft = getProxyDraft(draft)
              if (!isDraft(value)) {
                if (
                  void 0 !== value &&
                  !isEqual(value, draft) &&
                  (null == proxyDraft ? void 0 : proxyDraft.operated)
                )
                  throw new Error(
                    'Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.'
                  )
                const rawReturnValue =
                  null == value ? void 0 : value[RAW_RETURN_SYMBOL]
                if (rawReturnValue) {
                  const _value = rawReturnValue[0]
                  return (
                    _options.strict &&
                      'object' == typeof value &&
                      null !== value &&
                      handleReturnValue({
                        rootDraft: proxyDraft,
                        value,
                        useRawReturn: !0,
                      }),
                    finalize([_value])
                  )
                }
                if (void 0 !== value)
                  return (
                    'object' == typeof value &&
                      null !== value &&
                      handleReturnValue({ rootDraft: proxyDraft, value }),
                    finalize([value])
                  )
              }
              if (value === draft || void 0 === value) return finalize([])
              const returnedProxyDraft = getProxyDraft(value)
              if (_options === returnedProxyDraft.options) {
                if (returnedProxyDraft.operated)
                  throw new Error('Cannot return a modified child draft.')
                return finalize([current(value)])
              }
              return finalize([value])
            }
            return result instanceof Promise
              ? result.then(returnValue, (error) => {
                  throw (revokeProxy(getProxyDraft(draft)), error)
                })
              : returnValue(result)
          }
        })()
        Object.prototype.constructor.toString()
        var zustand_x_dist_defProp = Object.defineProperty,
          dist_defProps = Object.defineProperties,
          dist_getOwnPropDescs = Object.getOwnPropertyDescriptors,
          zustand_x_dist_getOwnPropSymbols = Object.getOwnPropertySymbols,
          zustand_x_dist_hasOwnProp = Object.prototype.hasOwnProperty,
          zustand_x_dist_propIsEnum = Object.prototype.propertyIsEnumerable,
          zustand_x_dist_defNormalProp = (obj, key, value) =>
            key in obj
              ? zustand_x_dist_defProp(obj, key, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value,
                })
              : (obj[key] = value),
          zustand_x_dist_spreadValues = (a, b) => {
            for (var prop in b || (b = {}))
              zustand_x_dist_hasOwnProp.call(b, prop) &&
                zustand_x_dist_defNormalProp(a, prop, b[prop])
            if (zustand_x_dist_getOwnPropSymbols)
              for (var prop of zustand_x_dist_getOwnPropSymbols(b))
                zustand_x_dist_propIsEnum.call(b, prop) &&
                  zustand_x_dist_defNormalProp(a, prop, b[prop])
            return a
          },
          dist_spreadProps = (a, b) =>
            dist_defProps(a, dist_getOwnPropDescs(b)),
          immerMiddleware = (initializer) => (set, get, store) => (
            (store.setState = (updater, replace, ...a) => {
              const nextState =
                'function' == typeof updater ? (0, immer.jM)(updater) : updater
              return set(
                nextState,
                'boolean' != typeof replace || replace,
                ...a
              )
            }),
            initializer(store.setState, get, store)
          ),
          mutativeMiddleware = (initializer, options) => (set, get, store) => (
            (store.setState = (updater, replace, ...a) => {
              const nextState =
                'function' == typeof updater
                  ? mutative_esm_create(
                      updater,
                      options
                        ? dist_spreadProps(
                            zustand_x_dist_spreadValues({}, options),
                            { enablePatches: !1 }
                          )
                        : options
                    )
                  : updater
              return set(
                nextState,
                'boolean' != typeof replace || replace,
                ...a
              )
            }),
            initializer(store.setState, get, store)
          ),
          getOptions = (option, fallbackEnabled = !1) => {
            const isBooleanValue = 'boolean' == typeof option,
              _a = isBooleanValue ? {} : option || {},
              { enabled } = _a,
              config = ((source, exclude) => {
                var target = {}
                for (var prop in source)
                  zustand_x_dist_hasOwnProp.call(source, prop) &&
                    exclude.indexOf(prop) < 0 &&
                    (target[prop] = source[prop])
                if (null != source && zustand_x_dist_getOwnPropSymbols)
                  for (var prop of zustand_x_dist_getOwnPropSymbols(source))
                    exclude.indexOf(prop) < 0 &&
                      zustand_x_dist_propIsEnum.call(source, prop) &&
                      (target[prop] = source[prop])
                return target
              })(_a, ['enabled']),
              isValueProvided = isBooleanValue ? option : enabled
            return zustand_x_dist_spreadValues(
              {
                enabled:
                  null != isValueProvided ? isValueProvided : fallbackEnabled,
              },
              config
            )
          },
          dist_identity = (arg) => arg,
          storeFactory = (api) =>
            dist_spreadProps(zustand_x_dist_spreadValues({}, api), {
              actions: api.actions || {},
              extendSelectors: (builder) =>
                storeFactory(
                  ((builder, api) => {
                    const newSelectors = builder(api),
                      selectors = zustand_x_dist_spreadValues(
                        zustand_x_dist_spreadValues({}, api.selectors),
                        newSelectors
                      )
                    return dist_spreadProps(
                      zustand_x_dist_spreadValues({}, api),
                      {
                        get: (key, ...args) =>
                          key in selectors
                            ? (0, selectors[key])(...args)
                            : api.get(key),
                        subscribe: (key, ...args) => {
                          if (key in selectors) {
                            let options, selector, listener
                            const lastArg1 = args.at(-1),
                              lastArg2 = args.at(-2),
                              lastArg3 = args.at(-3)
                            let argsEndIdx = -1
                            return (
                              'function' == typeof lastArg1
                                ? ((listener = lastArg1),
                                  (selector =
                                    'function' == typeof lastArg2
                                      ? lastArg2
                                      : dist_identity),
                                  (argsEndIdx =
                                    'function' == typeof lastArg2 ? -2 : -1))
                                : ((options = lastArg1),
                                  (listener = lastArg2),
                                  (selector = lastArg3),
                                  (argsEndIdx = -3)),
                              api.subscribe(
                                'state',
                                () =>
                                  selector(
                                    selectors[key](...args.slice(0, argsEndIdx))
                                  ),
                                listener,
                                options
                              )
                            )
                          }
                          return api.subscribe(key, ...args)
                        },
                        selectors,
                        useValue: (key, ...args) => {
                          if (key in selectors) {
                            const selector = selectors[key],
                              lastArg = args.at(-1),
                              equalityFn =
                                'function' == typeof lastArg ? lastArg : void 0,
                              selectorArgs = equalityFn
                                ? args.slice(0, -1)
                                : args
                            return api.useStore(
                              () => selector(...selectorArgs),
                              equalityFn
                            )
                          }
                          return api.useValue(key, args[0])
                        },
                      }
                    )
                  })(builder, api)
                ),
              extendActions: (builder) =>
                storeFactory(
                  ((builder, api) => {
                    const newActions = builder(api),
                      actions = zustand_x_dist_spreadValues(
                        zustand_x_dist_spreadValues({}, api.actions),
                        newActions
                      )
                    return dist_spreadProps(
                      zustand_x_dist_spreadValues({}, api),
                      {
                        actions,
                        set: (key, ...args) =>
                          key in actions
                            ? (0, actions[key])(...args)
                            : api.set(key, args[0]),
                      }
                    )
                  })(builder, api)
                ),
            }),
          createZustandStore = (initializer, options) => {
            const {
                name,
                devtools: devtoolsOptions,
                immer: immerOptions,
                mutative: mutativeOptions,
                persist: persistOptions,
                isMutativeState,
              } = options,
              middlewares = [],
              _devtoolsOptionsInternal = getOptions(devtoolsOptions)
            _devtoolsOptionsInternal.enabled &&
              middlewares.push((config) => {
                var _a
                return devtools(
                  config,
                  dist_spreadProps(
                    zustand_x_dist_spreadValues({}, _devtoolsOptionsInternal),
                    {
                      name:
                        null !=
                        (_a =
                          null == _devtoolsOptionsInternal
                            ? void 0
                            : _devtoolsOptionsInternal.name)
                          ? _a
                          : name,
                    }
                  )
                )
              })
            const _persistOptionsInternal = getOptions(persistOptions)
            _persistOptionsInternal.enabled &&
              middlewares.push((config) => {
                var _a
                return persist(
                  config,
                  dist_spreadProps(
                    zustand_x_dist_spreadValues({}, _persistOptionsInternal),
                    {
                      name:
                        null != (_a = _persistOptionsInternal.name) ? _a : name,
                    }
                  )
                )
              })
            const _immerOptionsInternal = getOptions(immerOptions)
            _immerOptionsInternal.enabled &&
              middlewares.push((config) =>
                immerMiddleware(config, _immerOptionsInternal)
              )
            const _mutativeOptionsInternal = getOptions(mutativeOptions)
            _mutativeOptionsInternal.enabled &&
              middlewares.push((config) =>
                mutativeMiddleware(config, _mutativeOptionsInternal)
              )
            const stateMutators = middlewares
                .reverse()
                .reduce(
                  (y, fn) => fn(y),
                  'function' == typeof initializer
                    ? initializer
                    : () => initializer
                ),
              store = (createState = subscribeWithSelector(stateMutators))
                ? createWithEqualityFnImpl(createState, defaultEqualityFn)
                : createWithEqualityFnImpl
            var createState, defaultEqualityFn
            const useTrackedStore2 = createTrackedSelector(store),
              isMutative =
                isMutativeState ||
                _immerOptionsInternal.enabled ||
                _mutativeOptionsInternal.enabled,
              setFn = (key, value) => {
                var _a
                if ('state' === key) return store.setState(value)
                const typedKey = key
                if (store.getState()[typedKey] === value) return
                const actionKey = key.replace(/^\S/, (s) => s.toUpperCase()),
                  debugLog = name ? `@@${name}/set${actionKey}` : void 0
                null == (_a = store.setState) ||
                  _a.call(
                    store,
                    isMutative
                      ? (draft) => {
                          draft[typedKey] = value
                        }
                      : { [typedKey]: value },
                    void 0,
                    debugLog
                  )
              },
              useValue = (key, equalityFn) =>
                store((state) => state[key], equalityFn)
            return storeFactory({
              get: (key) =>
                'state' === key ? store.getState() : store.getState()[key],
              name,
              set: setFn,
              subscribe: (key, selector, listener, subscribeOptions) => {
                if ('state' === key)
                  return store.subscribe(selector, listener, subscribeOptions)
                let wrappedSelector
                return (
                  listener
                    ? (wrappedSelector = (state) => selector(state[key]))
                    : ((listener = selector),
                      (wrappedSelector = (state) => state[key])),
                  store.subscribe(wrappedSelector, listener, subscribeOptions)
                )
              },
              store,
              useStore: store,
              useValue,
              useState: (key, equalityFn) => [
                useValue(key, equalityFn),
                (val) => setFn(key, val),
              ],
              useTracked: (key) => useTrackedStore2()[key],
              useTrackedStore: useTrackedStore2,
              actions: {},
              selectors: {},
            })
          }
        var mergeWith = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js'
          ),
          mergeWith_default = __webpack_require__.n(mergeWith),
          defaults = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/defaults.js'
          ),
          defaults_default = __webpack_require__.n(defaults),
          pick = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pick.js'
          ),
          pick_default = __webpack_require__.n(pick),
          dist_clsx = __webpack_require__(
            '../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs'
          ),
          kebabCase = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/kebabCase.js'
          ),
          kebabCase_default = __webpack_require__.n(kebabCase),
          lodash_isEqual = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js'
          ),
          isEqual_default = __webpack_require__.n(lodash_isEqual),
          lodash_isUndefined = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isUndefined.js'
          ),
          isUndefined_default = __webpack_require__.n(lodash_isUndefined),
          omitBy = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omitBy.js'
          ),
          omitBy_default = __webpack_require__.n(omitBy)
        function index_es_typeof(o) {
          return (
            (index_es_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o
                  }
                : function (o) {
                    return o &&
                      'function' == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o
                  }),
            index_es_typeof(o)
          )
        }
        function index_es_toPropertyKey(arg) {
          var key = (function index_es_toPrimitive(input, hint) {
            if ('object' !== index_es_typeof(input) || null === input)
              return input
            var prim = input[Symbol.toPrimitive]
            if (void 0 !== prim) {
              var res = prim.call(input, hint || 'default')
              if ('object' !== index_es_typeof(res)) return res
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === hint ? String : Number)(input)
          })(arg, 'string')
          return 'symbol' === index_es_typeof(key) ? key : String(key)
        }
        function index_es_defineProperty(obj, key, value) {
          return (
            (key = index_es_toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          )
        }
        var ANCHOR = new WeakMap(),
          FOCUS = new WeakMap()
        class Token {}
        class AnchorToken extends Token {
          constructor() {
            var props =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ;(super(),
              index_es_defineProperty(this, 'offset', void 0),
              index_es_defineProperty(this, 'path', void 0))
            var { offset, path } = props
            ;((this.offset = offset), (this.path = path))
          }
        }
        class FocusToken extends Token {
          constructor() {
            var props =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ;(super(),
              index_es_defineProperty(this, 'offset', void 0),
              index_es_defineProperty(this, 'path', void 0))
            var { offset, path } = props
            ;((this.offset = offset), (this.path = path))
          }
        }
        var getAnchorOffset = (text) => ANCHOR.get(text),
          getFocusOffset = (text) => FOCUS.get(text)
        function index_es_ownKeys$1(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function index_es_objectSpread$1(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? index_es_ownKeys$1(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : index_es_ownKeys$1(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var STRINGS = new WeakSet(),
          resolveDescendants = (children) => {
            var nodes = [],
              addChild = (child) => {
                if (null != child) {
                  var prev = nodes[nodes.length - 1]
                  if ('string' == typeof child) {
                    var text = { text: child }
                    ;(STRINGS.add(text), (child = text))
                  }
                  if (dist_index_es.EY.isText(child)) {
                    var c = child
                    dist_index_es.EY.isText(prev) &&
                    STRINGS.has(prev) &&
                    STRINGS.has(c) &&
                    dist_index_es.EY.equals(prev, c, { loose: !0 })
                      ? (prev.text += c.text)
                      : nodes.push(c)
                  } else if (dist_index_es.Hg.isElement(child))
                    nodes.push(child)
                  else {
                    if (!(child instanceof Token))
                      throw new Error(
                        'Unexpected hyperscript child object: '.concat(child)
                      )
                    var n = nodes[nodes.length - 1]
                    ;(dist_index_es.EY.isText(n) ||
                      (addChild(''), (n = nodes[nodes.length - 1])),
                      child instanceof AnchorToken
                        ? ((text, token) => {
                            var offset = text.text.length
                            ANCHOR.set(text, [offset, token])
                          })(n, child)
                        : child instanceof FocusToken &&
                          ((text, token) => {
                            var offset = text.text.length
                            FOCUS.set(text, [offset, token])
                          })(n, child))
                  }
                }
              }
            for (var child of children.flat(1 / 0)) addChild(child)
            return nodes
          }
        function index_es_createElement(tagName, attributes, children) {
          return index_es_objectSpread$1(
            index_es_objectSpread$1({}, attributes),
            {},
            { children: resolveDescendants(children) }
          )
        }
        function index_es_ownKeys(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function index_es_objectSpread(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? index_es_ownKeys(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : index_es_ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var makeEditor,
          DEFAULT_CREATORS = {
            anchor: function createAnchor(tagName, attributes, children) {
              return new AnchorToken(attributes)
            },
            cursor: function createCursor(tagName, attributes, children) {
              return [new AnchorToken(attributes), new FocusToken(attributes)]
            },
            editor:
              ((makeEditor = dist_index_es.ie),
              (tagName, attributes, children) => {
                var selectionChild,
                  otherChildren = []
                for (var child of children)
                  dist_index_es.Q6.isRange(child)
                    ? (selectionChild = child)
                    : otherChildren.push(child)
                var descendants = resolveDescendants(otherChildren),
                  selection = {},
                  editor = makeEditor()
                for (var [node, path] of (Object.assign(editor, attributes),
                (editor.children = descendants),
                dist_index_es.bP.texts(editor))) {
                  var anchor = getAnchorOffset(node),
                    focus = getFocusOffset(node)
                  if (null != anchor) {
                    var [offset] = anchor
                    selection.anchor = { path, offset }
                  }
                  if (null != focus) {
                    var [_offset] = focus
                    selection.focus = { path, offset: _offset }
                  }
                }
                if (selection.anchor && !selection.focus)
                  throw new Error(
                    'Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.'
                  )
                if (!selection.anchor && selection.focus)
                  throw new Error(
                    'Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.'
                  )
                return (
                  null != selectionChild
                    ? (editor.selection = selectionChild)
                    : dist_index_es.Q6.isRange(selection) &&
                      (editor.selection = selection),
                  editor
                )
              }),
            element: index_es_createElement,
            focus: function createFocus(tagName, attributes, children) {
              return new FocusToken(attributes)
            },
            fragment: function createFragment(tagName, attributes, children) {
              return resolveDescendants(children)
            },
            selection: function createSelection(tagName, attributes, children) {
              var anchor = children.find((c) => c instanceof AnchorToken),
                focus = children.find((c) => c instanceof FocusToken)
              if (!anchor || null == anchor.offset || null == anchor.path)
                throw new Error(
                  'The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.'
                )
              if (!focus || null == focus.offset || null == focus.path)
                throw new Error(
                  'The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.'
                )
              return index_es_objectSpread$1(
                {
                  anchor: { offset: anchor.offset, path: anchor.path },
                  focus: { offset: focus.offset, path: focus.path },
                },
                attributes
              )
            },
            text: function createText(tagName, attributes, children) {
              var nodes = resolveDescendants(children)
              if (nodes.length > 1)
                throw new Error(
                  "The <text> hyperscript tag must only contain a single node's worth of children."
                )
              var [node] = nodes
              if (
                (null == node && (node = { text: '' }),
                !dist_index_es.EY.isText(node))
              )
                throw new Error(
                  '\n    The <text> hyperscript tag can only contain text content as children.'
                )
              return (
                STRINGS.delete(node),
                Object.assign(node, attributes),
                node
              )
            },
          },
          createFactory = (creators) =>
            function jsx(tagName, attributes) {
              for (
                var _len = arguments.length,
                  children = new Array(_len > 2 ? _len - 2 : 0),
                  _key = 2;
                _key < _len;
                _key++
              )
                children[_key - 2] = arguments[_key]
              var creator = creators[tagName]
              if (!creator)
                throw new Error(
                  'No hyperscript creator found for tag: <'.concat(tagName, '>')
                )
              return (
                null == attributes && (attributes = {}),
                (0, is_plain_object.Q)(attributes) ||
                  ((children = [attributes].concat(children)),
                  (attributes = {})),
                creator(
                  tagName,
                  attributes,
                  (children = children.filter((child) => Boolean(child)).flat())
                )
              )
            },
          normalizeElements = (elements) => {
            var creators = {},
              _loop = function _loop() {
                var props = elements[tagName]
                if ('object' != typeof props)
                  throw new Error(
                    'Properties specified for a hyperscript shorthand should be an object, but for the custom element <'
                      .concat(tagName, '>  tag you passed: ')
                      .concat(props)
                  )
                creators[tagName] = (tagName, attributes, children) =>
                  index_es_createElement(
                    0,
                    index_es_objectSpread(
                      index_es_objectSpread({}, props),
                      attributes
                    ),
                    children
                  )
              }
            for (var tagName in elements) _loop()
            return creators
          },
          jsx = (function createHyperscript() {
            var options =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { elements = {} } = options,
              elementCreators = normalizeElements(elements),
              creators = index_es_objectSpread(
                index_es_objectSpread(
                  index_es_objectSpread({}, DEFAULT_CREATORS),
                  elementCreators
                ),
                options.creators
              )
            return createFactory(creators)
          })(),
          cloneDeep = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js'
          ),
          cloneDeep_default = __webpack_require__.n(cloneDeep),
          omit = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js'
          ),
          omit_default = __webpack_require__.n(omit),
          dist_has = Object.prototype.hasOwnProperty
        function find(iter, tar, key) {
          for (key of iter.keys()) if (dequal(key, tar)) return key
        }
        function dequal(foo, bar) {
          var ctor, len, tmp
          if (foo === bar) return !0
          if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
            if (ctor === Date) return foo.getTime() === bar.getTime()
            if (ctor === RegExp) return foo.toString() === bar.toString()
            if (ctor === Array) {
              if ((len = foo.length) === bar.length)
                for (; len-- && dequal(foo[len], bar[len]); );
              return -1 === len
            }
            if (ctor === Set) {
              if (foo.size !== bar.size) return !1
              for (len of foo) {
                if (
                  (tmp = len) &&
                  'object' == typeof tmp &&
                  !(tmp = find(bar, tmp))
                )
                  return !1
                if (!bar.has(tmp)) return !1
              }
              return !0
            }
            if (ctor === Map) {
              if (foo.size !== bar.size) return !1
              for (len of foo) {
                if (
                  (tmp = len[0]) &&
                  'object' == typeof tmp &&
                  !(tmp = find(bar, tmp))
                )
                  return !1
                if (!dequal(len[1], bar.get(tmp))) return !1
              }
              return !0
            }
            if (ctor === ArrayBuffer)
              ((foo = new Uint8Array(foo)), (bar = new Uint8Array(bar)))
            else if (ctor === DataView) {
              if ((len = foo.byteLength) === bar.byteLength)
                for (; len-- && foo.getInt8(len) === bar.getInt8(len); );
              return -1 === len
            }
            if (ArrayBuffer.isView(foo)) {
              if ((len = foo.byteLength) === bar.byteLength)
                for (; len-- && foo[len] === bar[len]; );
              return -1 === len
            }
            if (!ctor || 'object' == typeof foo) {
              for (ctor in ((len = 0), foo)) {
                if (
                  dist_has.call(foo, ctor) &&
                  ++len &&
                  !dist_has.call(bar, ctor)
                )
                  return !1
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return !1
              }
              return Object.keys(bar).length === len
            }
          }
          return foo != foo && bar != bar
        }
        function useDeepCompareMemoize(dependencies) {
          const dependenciesRef = react.useRef(dependencies),
            signalRef = react.useRef(0)
          return (
            dequal(dependencies, dependenciesRef.current) ||
              ((dependenciesRef.current = dependencies),
              (signalRef.current += 1)),
            react.useMemo(() => dependenciesRef.current, [signalRef.current])
          )
        }
        function useDeepCompareMemo(factory, dependencies) {
          return react.useMemo(factory, useDeepCompareMemoize(dependencies))
        }
        var dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
          ),
          createSlotComponent =
            (__webpack_require__(
              '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
            ),
            (element) =>
              react.forwardRef(({ as, asChild = !1, ...props }, ref) => {
                const Comp = asChild ? dist.DX : as || element
                return react.createElement(Comp, { ref, ...props })
              })),
          useComposedRef =
            (createSlotComponent('div'),
            react.memo(({ children }) =>
              react.createElement(react.Fragment, null, children)
            ),
            createSlotComponent('span'),
            (...refs) =>
              react.useCallback(
                (
                  (...refs) =>
                  (node) => {
                    const cleanups = []
                    if (
                      (refs.forEach((ref) => {
                        const cleanup = ((ref, value) => {
                          if ('function' == typeof ref) return ref(value)
                          null != ref && (ref.current = value)
                        })(ref, node)
                        'function' == typeof cleanup && cleanups.push(cleanup)
                      }),
                      cleanups.length > 0)
                    )
                      return () => {
                        cleanups.forEach((cleanup) => cleanup?.())
                      }
                  }
                )(...refs),
                refs
              ))
        'undefined' != typeof window &&
        void 0 !== window.document?.createElement
          ? react.useLayoutEffect
          : react.useEffect
        var useStableFn = (fn, deps = []) => {
          const fnRef = react.useRef(fn)
          return (
            (fnRef.current = fn),
            react.useCallback((...args) => fnRef.current(...args), deps)
          )
        }
        const id = (x) => x,
          Left = (value) => ({ _tag: 'Left', value }),
          Right = (value) => ({ _tag: 'Right', value }),
          profunctorFn = {
            dimap: (f, g, fn) => (x) => g(fn(f(x))),
            first:
              (f) =>
              ([x, y]) => [f(x), y],
            right: (f) => (e) => ('Left' === e._tag ? e : Right(f(e.value))),
            wander: (f) => (xs) => xs.map(f),
          },
          monoidFirst = {
            empty: () => {},
            foldMap: (f, xs) => {
              for (let i = 0; i < xs.length; i++) {
                const x = f(xs[i])
                if (null != x) return x
              }
            },
          },
          monoidArray = {
            empty: () => [],
            foldMap: (f, xs) => {
              let acc = []
              return (
                xs.forEach((x) => {
                  acc = acc.concat(f(x))
                }),
                acc
              )
            },
          },
          profunctorConst = (monoid) => ({
            dimap: (f, _g, toF) => (x) => toF(f(x)),
            first:
              (toF) =>
              ([x, _y]) =>
                toF(x),
            right: (toF) => (e) =>
              'Left' === e._tag ? monoid.empty() : toF(e.value),
            wander: (toF) => (xs) => monoid.foldMap(toF, xs),
          }),
          compositionType = {
            Equivalence: {
              Equivalence: 'Equivalence',
              Iso: 'Iso',
              Lens: 'Lens',
              Prism: 'Prism',
              Traversal: 'Traversal',
              Getter: 'Getter',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: 'Setter',
            },
            Iso: {
              Equivalence: 'Iso',
              Iso: 'Iso',
              Lens: 'Lens',
              Prism: 'Prism',
              Traversal: 'Traversal',
              Getter: 'Getter',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: 'Setter',
            },
            Lens: {
              Equivalence: 'Lens',
              Iso: 'Lens',
              Lens: 'Lens',
              Prism: 'Prism',
              Traversal: 'Traversal',
              Getter: 'Getter',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: 'Setter',
            },
            Prism: {
              Equivalence: 'Prism',
              Iso: 'Prism',
              Lens: 'Prism',
              Prism: 'Prism',
              Traversal: 'Traversal',
              Getter: 'AffineFold',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: 'Setter',
            },
            Traversal: {
              Equivalence: 'Traversal',
              Iso: 'Traversal',
              Lens: 'Traversal',
              Prism: 'Traversal',
              Traversal: 'Traversal',
              Getter: 'Fold',
              AffineFold: 'Fold',
              Fold: 'Fold',
              Setter: 'Setter',
            },
            Getter: {
              Equivalence: 'Getter',
              Iso: 'Getter',
              Lens: 'Getter',
              Prism: 'AffineFold',
              Traversal: 'Fold',
              Getter: 'Getter',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: void 0,
            },
            AffineFold: {
              Equivalence: 'AffineFold',
              Iso: 'AffineFold',
              Lens: 'AffineFold',
              Prism: 'AffineFold',
              Traversal: 'Fold',
              Getter: 'AffineFold',
              AffineFold: 'AffineFold',
              Fold: 'Fold',
              Setter: void 0,
            },
            Fold: {
              Equivalence: 'Fold',
              Iso: 'Fold',
              Lens: 'Fold',
              Prism: 'Fold',
              Traversal: 'Fold',
              Getter: 'Fold',
              AffineFold: 'Fold',
              Fold: 'Fold',
              Setter: void 0,
            },
            Setter: {
              Equivalence: void 0,
              Iso: void 0,
              Lens: void 0,
              Prism: void 0,
              Traversal: void 0,
              Getter: void 0,
              AffineFold: void 0,
              Fold: void 0,
              Setter: void 0,
            },
          },
          withTag = (tag, optic) => {
            const result = optic
            return ((result._tag = tag), result)
          },
          removable = (optic) => ((optic._removable = !0), optic)
        function compose(optic1, optic2, optic3) {
          if (2 === arguments.length) {
            const next = (P, optic) => optic1(P, optic2(P, optic))
            return (
              (next._tag = compositionType[optic1._tag][optic2._tag]),
              (next._removable = optic2._removable || !1),
              next
            )
          }
          {
            const tag1 = compositionType[optic1._tag][optic2._tag],
              next = (P, optic) => optic1(P, optic2(P, optic3(P, optic)))
            return (
              (next._tag = compositionType[tag1][optic3._tag]),
              (next._removable = optic3._removable || !1),
              next
            )
          }
        }
        const eq = withTag('Equivalence', (_P, optic) => optic),
          iso = (there, back) =>
            withTag('Iso', (P, optic) => P.dimap(there, back, optic)),
          lens = (view, update) =>
            withTag('Lens', (P, optic) =>
              P.dimap((x) => [view(x), x], update, P.first(optic))
            ),
          prism = (match, build) =>
            withTag('Prism', (P, optic) =>
              P.dimap(
                match,
                (x) =>
                  ((mapLeft, mapRight, e) =>
                    'Left' === e._tag ? mapLeft(e.value) : mapRight(e.value))(
                    id,
                    build,
                    x
                  ),
                P.right(optic)
              )
            ),
          elems = withTag('Traversal', (P, optic) =>
            P.dimap(id, id, P.wander(optic))
          ),
          modify = (optic, fn, source) => optic(profunctorFn, fn)(source),
          internals_set = (optic, value, source) =>
            optic(profunctorFn, () => value)(source),
          collect = (optic, source) =>
            optic(profunctorConst(monoidArray), (x) => [x])(source),
          indexed = iso(
            (value) => value.map((v, k) => [k, v]),
            (value) => {
              const sorted = [...value].sort((a, b) => a[0] - b[0]),
                result = []
              for (let i = 0; i < sorted.length; ++i)
                (i !== sorted.length - 1 &&
                  sorted[i][0] === sorted[i + 1][0]) ||
                  result.push(sorted[i][1])
              return result
            }
          ),
          internals_prop = (key) =>
            lens(
              (source) => source[key],
              ([value, source]) =>
                Object.assign(Object.assign({}, source), { [key]: value })
            ),
          nth = (n) =>
            lens(
              (value) => value[n],
              ([value, source]) => {
                const result = source.slice()
                return ((result[n] = value), result)
              }
            ),
          fst = nth(0),
          when = (pred) => prism((x) => (pred(x) ? Right(x) : Left(x)), id),
          noMatch = Symbol('__no_match__'),
          mustMatch = when((source) => source !== noMatch),
          removeMe = Symbol('__remove_me__'),
          at = (i) =>
            removable(
              compose(
                lens(
                  (source) =>
                    0 <= i && i < source.length ? source[i] : noMatch,
                  ([value, source]) => {
                    if (value === noMatch) return source
                    if (value === removeMe)
                      return 'string' == typeof source
                        ? source.substring(0, i) + source.substring(i + 1)
                        : [...source.slice(0, i), ...source.slice(i + 1)]
                    if ('string' == typeof source)
                      return 0 === i
                        ? value + source.substring(1)
                        : i === source.length
                          ? source.substring(0, i - 1) + value
                          : source.substring(0, i) +
                            value +
                            source.substring(i + 1)
                    {
                      const result = source.slice()
                      return ((result[i] = value), result)
                    }
                  }
                ),
                mustMatch
              )
            ),
          optional = prism(
            (source) => (void 0 === source ? Left(void 0) : Right(source)),
            id
          ),
          prependTo = lens(
            (_source) => {},
            ([value, source]) =>
              void 0 === value ? source : [value, ...source]
          ),
          appendTo = lens(
            (_source) => {},
            ([value, source]) =>
              void 0 === value ? source : [...source, value]
          ),
          chars = compose(
            iso(
              (s) => s.split(''),
              (a) => a.join('')
            ),
            elems
          ),
          words = compose(
            iso(
              (s) => s.split(/\b/),
              (a) => a.join('')
            ),
            elems,
            when((s) => !/\s+/.test(s))
          )
        class Optic {
          constructor(_ref) {
            this._ref = _ref
          }
          get _tag() {
            return this._ref._tag
          }
          get _removable() {
            return this._ref._removable
          }
          compose(other) {
            return new Optic(compose(this._ref, other._ref))
          }
          iso(there, back) {
            return new Optic(compose(this._ref, iso(there, back)))
          }
          lens(view, set) {
            return new Optic(
              compose(
                this._ref,
                lens(view, ([value, source]) => set(source, value))
              )
            )
          }
          indexed() {
            return new Optic(compose(this._ref, indexed))
          }
          prop(key) {
            return new Optic(compose(this._ref, internals_prop(key)))
          }
          path(...keys) {
            return (
              1 === keys.length && (keys = keys[0].split('.')),
              new Optic(
                keys.reduce(
                  (ref, key) => compose(ref, internals_prop(key)),
                  this._ref
                )
              )
            )
          }
          pick(keys) {
            return new Optic(
              compose(
                this._ref,
                ((keys) =>
                  lens(
                    (source) => {
                      const value = {}
                      for (const key of keys) value[key] = source[key]
                      return value
                    },
                    ([value, source]) => {
                      const result = Object.assign({}, source)
                      for (const key of keys) delete result[key]
                      return Object.assign(result, value)
                    }
                  ))(keys)
              )
            )
          }
          nth(n) {
            return new Optic(compose(this._ref, nth(n)))
          }
          filter(predicate) {
            return new Optic(
              compose(
                this._ref,
                ((predicate) =>
                  compose(
                    lens(
                      (source) => {
                        const indexes = source
                          .map((item, index) =>
                            predicate(item) ? index : null
                          )
                          .filter((index) => null != index)
                        return [indexes.map((index) => source[index]), indexes]
                      },
                      ([[values, indexes], source]) => {
                        const sn = source.length,
                          vn = values.length
                        let si = 0,
                          ii = 0,
                          vi = 0
                        const result = []
                        for (; si < sn; )
                          (indexes[ii] === si
                            ? (++ii, vi < vn && (result.push(values[vi]), ++vi))
                            : result.push(source[si]),
                            ++si)
                        for (; vi < vn; ) result.push(values[vi++])
                        return result
                      }
                    ),
                    fst
                  ))(predicate)
              )
            )
          }
          valueOr(defaultValue) {
            return new Optic(
              compose(
                this._ref,
                ((defaultValue) =>
                  lens(
                    (source) => (void 0 === source ? defaultValue : source),
                    ([value, _source]) => value
                  ))(defaultValue)
              )
            )
          }
          partsOf(traversalOrFn) {
            const traversal =
              'function' == typeof traversalOrFn
                ? traversalOrFn(optic)
                : traversalOrFn
            return new Optic(
              compose(
                this._ref,
                ((traversal) =>
                  compose(
                    lens(
                      (source) => {
                        const value = collect(traversal, source)
                        return [value, value.length]
                      },
                      ([[value, originalLength], source]) => {
                        if (value.length !== originalLength)
                          throw new Error(
                            'cannot add/remove elements through partsOf'
                          )
                        let i = 0
                        return modify(traversal, () => value[i++], source)
                      }
                    ),
                    fst
                  ))(traversal._ref)
              )
            )
          }
          reread(fn) {
            return new Optic(
              compose(
                this._ref,
                ((fn) =>
                  lens(
                    (source) => fn(source),
                    ([value, _]) => value
                  ))(fn)
              )
            )
          }
          rewrite(fn) {
            return new Optic(
              compose(
                this._ref,
                ((fn) =>
                  lens(
                    (source) => source,
                    ([value, _]) => fn(value)
                  ))(fn)
              )
            )
          }
          optional() {
            return new Optic(compose(this._ref, optional))
          }
          guard_() {
            return (fn) => this.guard(fn)
          }
          guard(fn) {
            return new Optic(
              compose(
                this._ref,
                ((fn) =>
                  prism(
                    (source) => (fn(source) ? Right(source) : Left(source)),
                    id
                  ))(fn)
              )
            )
          }
          at(i) {
            return new Optic(compose(this._ref, at(i)))
          }
          head() {
            return new Optic(compose(this._ref, at(0)))
          }
          index(i) {
            return new Optic(compose(this._ref, at(i)))
          }
          find(predicate) {
            return new Optic(
              compose(
                this._ref,
                ((predicate) =>
                  removable(
                    compose(
                      lens(
                        (source) => {
                          const index = source.findIndex(predicate)
                          return -1 === index
                            ? [noMatch, -1]
                            : [source[index], index]
                        },
                        ([[value, index], source]) => {
                          if (value === noMatch) return source
                          if (value === removeMe)
                            return [
                              ...source.slice(0, index),
                              ...source.slice(index + 1),
                            ]
                          const result = source.slice()
                          return ((result[index] = value), result)
                        }
                      ),
                      fst,
                      mustMatch
                    )
                  ))(predicate)
              )
            )
          }
          elems() {
            return new Optic(compose(this._ref, elems))
          }
          to(fn) {
            return new Optic(
              compose(
                this._ref,
                ((fn) =>
                  withTag('Getter', (P, optic) => P.dimap(fn, id, optic)))(fn)
              )
            )
          }
          when(predicate) {
            return new Optic(compose(this._ref, when(predicate)))
          }
          chars() {
            return new Optic(compose(this._ref, chars))
          }
          words() {
            return new Optic(compose(this._ref, words))
          }
          prependTo() {
            return new Optic(compose(this._ref, prependTo))
          }
          appendTo() {
            return new Optic(compose(this._ref, appendTo))
          }
        }
        const optic = new Optic(eq)
        function mjs_get(optic) {
          return (source) =>
            ((optic, source) => optic(profunctorConst({}), id)(source))(
              optic._ref,
              source
            )
        }
        function mjs_preview(optic) {
          return (source) =>
            ((optic, source) =>
              optic(profunctorConst(monoidFirst), id)(source))(
              optic._ref,
              source
            )
        }
        const focusAtom_getCached = (c, m, k) =>
            (m.has(k) ? m : m.set(k, c())).get(k),
          focusAtom_cache1 = new WeakMap()
        function focusAtom(baseAtom, callback) {
          return ((create, dep1, dep2) => {
            const cache2 = focusAtom_getCached(
              () => new WeakMap(),
              focusAtom_cache1,
              dep1
            )
            return focusAtom_getCached(create, cache2, dep2)
          })(
            () => {
              const focus = callback(
                  (function mjs_optic() {
                    return optic
                  })()
                ),
                derivedAtom = vanilla_atom(
                  (get) => {
                    const base = get(baseAtom)
                    return base instanceof Promise
                      ? base.then((v) => getValueUsingOptic(focus, v))
                      : getValueUsingOptic(focus, base)
                  },
                  (get, set, update) => {
                    const newValueProducer =
                      'function' == typeof update
                        ? (function mjs_modify(optic) {
                            return (f) => (source) =>
                              modify(optic._ref, f, source)
                          })(focus)(update)
                        : (function mjs_set(optic) {
                            return (value) => (source) =>
                              internals_set(optic._ref, value, source)
                          })(focus)(update)
                    const base = get(baseAtom)
                    return set(
                      baseAtom,
                      base instanceof Promise
                        ? base.then(newValueProducer)
                        : newValueProducer(base)
                    )
                  }
                )
              return derivedAtom
            },
            baseAtom,
            callback
          )
        }
        const getValueUsingOptic = (focus, bigValue) => {
          if ('Traversal' === focus._tag) {
            const values = (function mjs_collect(optic) {
              return (source) => collect(optic._ref, source)
            })(focus)(bigValue)
            return values
          }
          if ('Prism' === focus._tag) {
            return mjs_preview(focus)(bigValue)
          }
          return mjs_get(focus)(bigValue)
        }
        var react_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          ContentVisibilityChunk = ({ attributes, children, lowest }) =>
            lowest
              ? react.createElement(
                  'div',
                  { ...attributes, style: { contentVisibility: 'auto' } },
                  children
                )
              : children
        function react_isFunction(value) {
          return 'function' == typeof value
        }
        function mergePlugins(basePlugin, ...sourcePlugins) {
          return mergeWith_default()(
            {},
            basePlugin,
            ...sourcePlugins,
            (objValue, srcValue, key) =>
              Array.isArray(srcValue)
                ? srcValue
                : 'options' === key
                  ? { ...objValue, ...srcValue }
                  : void 0
          )
        }
        function createSlatePlugin(config = {}) {
          let baseConfig, initialExtension
          react_isFunction(config)
            ? ((baseConfig = { key: '' }),
              (initialExtension = (editor) => config(editor)))
            : (baseConfig = config)
          const key = baseConfig.key ?? '',
            plugin = mergePlugins(
              {
                key,
                __apiExtensions: [],
                __configuration: null,
                __extensions: initialExtension ? [initialExtension] : [],
                __selectorExtensions: [],
                api: {},
                dependencies: [],
                editor: {},
                handlers: {},
                inject: {},
                node: { type: key },
                options: {},
                override: {},
                parser: {},
                parsers: {},
                plugins: [],
                priority: 100,
                render: {},
                rules: {},
                shortcuts: {},
                transforms: {},
              },
              config
            )
          return (
            plugin.node.isLeaf &&
              !dist_isDefined(plugin.node.isDecoration) &&
              (plugin.node.isDecoration = !0),
            (plugin.configure = (config2) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__configuration = (ctx) =>
                  react_isFunction(config2) ? config2(ctx) : config2),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.configurePlugin = (p, config2) => {
              const newPlugin = { ...plugin },
                configureNestedPlugin = (plugins2) => {
                  let found = !1
                  const updatedPlugins = plugins2.map((nestedPlugin) => {
                    if (nestedPlugin.key === p.key)
                      return (
                        (found = !0),
                        createSlatePlugin({
                          ...nestedPlugin,
                          __configuration: (ctx) =>
                            react_isFunction(config2) ? config2(ctx) : config2,
                        })
                      )
                    if (
                      nestedPlugin.plugins &&
                      nestedPlugin.plugins.length > 0
                    ) {
                      const result2 = configureNestedPlugin(
                        nestedPlugin.plugins
                      )
                      if (result2.found)
                        return (
                          (found = !0),
                          { ...nestedPlugin, plugins: result2.plugins }
                        )
                    }
                    return nestedPlugin
                  })
                  return { found, plugins: updatedPlugins }
                },
                result = configureNestedPlugin(newPlugin.plugins)
              return (
                (newPlugin.plugins = result.plugins),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extendEditorApi = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__apiExtensions = [
                  ...newPlugin.__apiExtensions,
                  { extension, isPluginSpecific: !1 },
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extendSelectors = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__selectorExtensions = [
                  ...newPlugin.__selectorExtensions,
                  extension,
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extendApi = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__apiExtensions = [
                  ...newPlugin.__apiExtensions,
                  { extension, isPluginSpecific: !0 },
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extendEditorTransforms = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__apiExtensions = [
                  ...newPlugin.__apiExtensions,
                  { extension, isPluginSpecific: !1, isTransform: !0 },
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extendTransforms = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__apiExtensions = [
                  ...newPlugin.__apiExtensions,
                  { extension, isPluginSpecific: !0, isTransform: !0 },
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.overrideEditor = (extension) => {
              const newPlugin = { ...plugin }
              return (
                (newPlugin.__apiExtensions = [
                  ...newPlugin.__apiExtensions,
                  {
                    extension,
                    isOverride: !0,
                    isPluginSpecific: !1,
                    isTransform: !0,
                  },
                ]),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.extend = (extendConfig) => {
              let newPlugin = { ...plugin }
              return (
                react_isFunction(extendConfig)
                  ? (newPlugin.__extensions = [
                      ...newPlugin.__extensions,
                      extendConfig,
                    ])
                  : (newPlugin = mergePlugins(newPlugin, extendConfig)),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.clone = () => mergePlugins(plugin)),
            (plugin.extendPlugin = (p, extendConfig) => {
              const newPlugin = { ...plugin },
                extendNestedPlugin = (plugins2) => {
                  let found = !1
                  const updatedPlugins = plugins2.map((nestedPlugin) => {
                    if (nestedPlugin.key === p.key)
                      return (
                        (found = !0),
                        createSlatePlugin({
                          ...nestedPlugin,
                          __extensions: [
                            ...nestedPlugin.__extensions,
                            (ctx) =>
                              react_isFunction(extendConfig)
                                ? extendConfig(ctx)
                                : extendConfig,
                          ],
                        })
                      )
                    if (
                      nestedPlugin.plugins &&
                      nestedPlugin.plugins.length > 0
                    ) {
                      const result2 = extendNestedPlugin(nestedPlugin.plugins)
                      if (result2.found)
                        return (
                          (found = !0),
                          { ...nestedPlugin, plugins: result2.plugins }
                        )
                    }
                    return nestedPlugin
                  })
                  return { found, plugins: updatedPlugins }
                },
                result = extendNestedPlugin(newPlugin.plugins)
              return (
                (newPlugin.plugins = result.plugins),
                result.found ||
                  newPlugin.plugins.push(
                    createSlatePlugin({
                      key: p.key,
                      __extensions: [
                        (ctx) =>
                          react_isFunction(extendConfig)
                            ? extendConfig(ctx)
                            : extendConfig,
                      ],
                    })
                  ),
                createSlatePlugin(newPlugin)
              )
            }),
            (plugin.withComponent = (component) =>
              plugin.extend({
                node: { component },
                render: { node: component },
              })),
            plugin
          )
        }
        function createTSlatePlugin(config = {}) {
          return createSlatePlugin(config)
        }
        function getEditorPlugin(editor, p) {
          const plugin = editor.getPlugin(p)
          return {
            api: editor.api,
            editor,
            plugin,
            setOption: (keyOrOptions, value) =>
              editor.setOption(plugin, keyOrOptions, value),
            setOptions: (options) => editor.setOptions(plugin, options),
            tf: editor.transforms,
            type: plugin.node.type,
            getOption: (key, ...args) => editor.getOption(plugin, key, ...args),
            getOptions: () => editor.getOptions(plugin),
          }
        }
        var resolvePlugin = (editor, _plugin) => {
            let plugin = mergePlugins({}, _plugin)
            if (((plugin.__resolved = !0), plugin.__configuration)) {
              const configResult = plugin.__configuration(
                getEditorPlugin(editor, plugin)
              )
              ;((plugin = mergePlugins(plugin, configResult)),
                delete plugin.__configuration)
            }
            plugin.__extensions &&
              plugin.__extensions.length > 0 &&
              (plugin.__extensions.forEach((extension) => {
                plugin = mergePlugins(
                  plugin,
                  extension(getEditorPlugin(editor, plugin))
                )
              }),
              (plugin.__extensions = []))
            const targetPluginToInject = plugin.inject?.targetPluginToInject,
              targetPlugins = plugin.inject?.targetPlugins
            return (
              targetPluginToInject &&
                targetPlugins &&
                targetPlugins.length > 0 &&
                ((plugin.inject = plugin.inject || {}),
                (plugin.inject.plugins = merge_default()(
                  {},
                  plugin.inject.plugins,
                  Object.fromEntries(
                    targetPlugins.map((targetPlugin) => [
                      targetPlugin,
                      targetPluginToInject({
                        ...getEditorPlugin(editor, plugin),
                        targetPlugin,
                      }),
                    ])
                  )
                ))),
              plugin.node?.component &&
                (plugin.render.node = plugin.node.component),
              plugin.render?.node &&
                (plugin.node.component = plugin.render.node),
              validatePlugin(editor, plugin),
              plugin
            )
          },
          validatePlugin = (editor, plugin) => {
            ;(plugin.__extensions ||
              editor.api.debug.error(
                `Invalid plugin '${plugin.key}', you should use createSlatePlugin.`,
                'USE_CREATE_PLUGIN'
              ),
              plugin.node.isElement &&
                plugin.node.isLeaf &&
                editor.api.debug.error(
                  `Plugin ${plugin.key} cannot be both an element and a leaf.`,
                  'PLUGIN_NODE_TYPE'
                ))
          }
        var getPluginKey = (editor, type) =>
            editor.meta.pluginCache.node.types[type],
          getPluginByType = (editor, type) => {
            const key = getPluginKey(editor, type)
            return key ? editor.getPlugin({ key }) : null
          },
          resolvePluginStores = (editor) => {
            editor.meta.pluginList.forEach((plugin) => {
              let store = createZustandStore(plugin.options, {
                mutative: !0,
                name: plugin.key,
              })
              ;(plugin.__selectorExtensions &&
                plugin.__selectorExtensions.length > 0 &&
                plugin.__selectorExtensions.forEach((extension) => {
                  const extendedOptions = extension(
                    getEditorPlugin(editor, plugin)
                  )
                  store = store.extendSelectors(() => extendedOptions)
                }),
                (plugin.optionsStore = store))
            })
          },
          resolvePluginMethods = (editor, plugin) => {
            ;(Object.entries(plugin.api).forEach(([apiKey, apiFunction]) => {
              editor.api[apiKey] = apiFunction
            }),
              plugin.__apiExtensions &&
                plugin.__apiExtensions.length > 0 &&
                (plugin.__apiExtensions.forEach(
                  ({
                    extension,
                    isOverride,
                    isPluginSpecific,
                    isTransform,
                  }) => {
                    const newExtensions = extension(
                      getEditorPlugin(editor, plugin)
                    )
                    isOverride
                      ? (newExtensions.api &&
                          (merge_default()(editor.api, newExtensions.api),
                          merge_default()(plugin.api, newExtensions.api),
                          assignLegacyApi(editor, editor.api)),
                        newExtensions.transforms &&
                          (merge_default()(
                            editor.transforms,
                            newExtensions.transforms
                          ),
                          merge_default()(
                            plugin.transforms,
                            newExtensions.transforms
                          ),
                          assignLegacyTransforms(
                            editor,
                            newExtensions.transforms
                          )))
                      : isTransform
                        ? isPluginSpecific
                          ? (editor.transforms[plugin.key] ||
                              (editor.transforms[plugin.key] = {}),
                            plugin.transforms[plugin.key] ||
                              (plugin.transforms[plugin.key] = {}),
                            merge_default()(
                              editor.transforms[plugin.key],
                              newExtensions
                            ),
                            merge_default()(
                              plugin.transforms[plugin.key],
                              newExtensions
                            ))
                          : (merge_default()(editor.transforms, newExtensions),
                            merge_default()(plugin.transforms, newExtensions),
                            assignLegacyTransforms(editor, newExtensions))
                        : isPluginSpecific
                          ? (editor.api[plugin.key] ||
                              (editor.api[plugin.key] = {}),
                            plugin.api[plugin.key] ||
                              (plugin.api[plugin.key] = {}),
                            merge_default()(
                              editor.api[plugin.key],
                              newExtensions
                            ),
                            merge_default()(
                              plugin.api[plugin.key],
                              newExtensions
                            ))
                          : (merge_default()(editor.api, newExtensions),
                            merge_default()(plugin.api, newExtensions),
                            assignLegacyApi(editor, editor.api))
                  }
                ),
                delete plugin.__apiExtensions))
          },
          resolvePluginShortcuts = (editor) => {
            ;((editor.meta.shortcuts = {}),
              editor.meta.pluginList.forEach((plugin) => {
                Object.entries(plugin.shortcuts).forEach(
                  ([originalKey, hotkey]) => {
                    const namespacedKey = `${plugin.key}.${originalKey}`
                    if (null === hotkey)
                      delete editor.meta.shortcuts[namespacedKey]
                    else if (hotkey && 'object' == typeof hotkey) {
                      const resolvedHotkey = { ...hotkey }
                      if (!resolvedHotkey.handler) {
                        const pluginSpecificTransforms =
                            plugin.transforms?.[plugin.key],
                          pluginSpecificApi = plugin.api?.[plugin.key]
                        pluginSpecificTransforms?.[originalKey]
                          ? (resolvedHotkey.handler = () =>
                              pluginSpecificTransforms[originalKey]())
                          : pluginSpecificApi?.[originalKey] &&
                            (resolvedHotkey.handler = () =>
                              pluginSpecificApi[originalKey]())
                      }
                      ;((resolvedHotkey.priority =
                        resolvedHotkey.priority ?? plugin.priority),
                        (editor.meta.shortcuts[namespacedKey] = resolvedHotkey))
                    }
                  }
                )
              }))
          },
          resolveAndSortPlugins = (editor, plugins2) => {
            const pluginMap = ((editor, plugins2) => {
                const pluginMap = new Map(),
                  processPlugin = (plugin) => {
                    const resolvedPlugin = resolvePlugin(editor, plugin)
                    if (resolvedPlugin.key) {
                      const existingPlugin = pluginMap.get(resolvedPlugin.key)
                      existingPlugin
                        ? pluginMap.set(
                            resolvedPlugin.key,
                            mergePlugins(existingPlugin, resolvedPlugin)
                          )
                        : pluginMap.set(resolvedPlugin.key, resolvedPlugin)
                    }
                    resolvedPlugin.plugins &&
                      resolvedPlugin.plugins.length > 0 &&
                      resolvedPlugin.plugins.forEach(processPlugin)
                  }
                return (plugins2.forEach(processPlugin), pluginMap)
              })(editor, plugins2),
              enabledPlugins = Array.from(pluginMap.values()).filter(
                (plugin) => !1 !== plugin.enabled
              )
            enabledPlugins.sort((a, b) => b.priority - a.priority)
            const orderedPlugins = [],
              visited = new Set(),
              visit = (plugin) => {
                visited.has(plugin.key) ||
                  (visited.add(plugin.key),
                  plugin.dependencies?.forEach((depKey) => {
                    const depPlugin = pluginMap.get(depKey)
                    depPlugin
                      ? visit(depPlugin)
                      : editor.api.debug.warn(
                          `Plugin "${plugin.key}" depends on missing plugin "${depKey}"`,
                          'PLUGIN_DEPENDENCY_MISSING'
                        )
                  }),
                  orderedPlugins.push(plugin))
              }
            return (enabledPlugins.forEach(visit), orderedPlugins)
          },
          applyPluginsToEditor = (editor, plugins2) => {
            ;((editor.meta.pluginList = plugins2),
              (editor.plugins = Object.fromEntries(
                plugins2.map((plugin) => [plugin.key, plugin])
              )))
          },
          resolvePluginOverrides = (editor) => {
            const applyOverrides = (plugins2) => {
              let overriddenPlugins = [...plugins2]
              const enabledOverrides = {},
                componentOverrides = {},
                pluginOverrides = {}
              for (const plugin of plugins2)
                (plugin.override.enabled &&
                  Object.assign(enabledOverrides, plugin.override.enabled),
                  plugin.override.components &&
                    Object.entries(plugin.override.components).forEach(
                      ([key, component]) => {
                        ;(!componentOverrides[key] ||
                          plugin.priority > componentOverrides[key].priority) &&
                          (componentOverrides[key] = {
                            component,
                            priority: plugin.priority,
                          })
                      }
                    ),
                  plugin.override.plugins &&
                    Object.entries(plugin.override.plugins).forEach(
                      ([key, value]) => {
                        ;((pluginOverrides[key] = mergePlugins(
                          pluginOverrides[key],
                          value
                        )),
                          void 0 !== value.enabled &&
                            (enabledOverrides[key] = value.enabled))
                      }
                    ))
              return (
                (overriddenPlugins = overriddenPlugins.map((p) => {
                  let updatedPlugin = { ...p }
                  ;(pluginOverrides[p.key] &&
                    (updatedPlugin = mergePlugins(
                      updatedPlugin,
                      pluginOverrides[p.key]
                    )),
                    componentOverrides[p.key] &&
                      ((!p.render.node && !p.node.component) ||
                        componentOverrides[p.key].priority > p.priority) &&
                      ((updatedPlugin.render.node =
                        componentOverrides[p.key].component),
                      (updatedPlugin.node.component =
                        componentOverrides[p.key].component)))
                  const enabled =
                    enabledOverrides[p.key] ?? updatedPlugin.enabled
                  return (
                    dist_isDefined(enabled) &&
                      (updatedPlugin.enabled = enabled),
                    updatedPlugin
                  )
                })),
                overriddenPlugins
                  .filter((p) => !1 !== p.enabled)
                  .map((plugin) => ({
                    ...plugin,
                    plugins: applyOverrides(plugin.plugins || []),
                  }))
              )
            }
            ;((editor.meta.pluginList = applyOverrides(editor.meta.pluginList)),
              (editor.plugins = Object.fromEntries(
                editor.meta.pluginList.map((plugin) => [plugin.key, plugin])
              )))
          },
          AstPlugin = createSlatePlugin({
            key: 'ast',
            parser: {
              format: 'application/x-slate-fragment',
              deserialize: ({ data }) => {
                const decoded = decodeURIComponent(window.atob(data))
                let parsed
                try {
                  parsed = JSON.parse(decoded)
                } catch {}
                return parsed
              },
            },
          }),
          HistoryPlugin = createSlatePlugin({
            key: 'history',
            extendEditor: ({ editor }) =>
              ((editor) => {
                const e3 = editor,
                  { apply: apply2 } = e3
                return (
                  (e3.history = { redos: [], undos: [] }),
                  (e3.redo = () => {
                    const { history } = e3,
                      { redos } = history
                    if (redos.length > 0) {
                      const batch = redos.at(-1)
                      ;(batch.selectionBefore &&
                        e3.tf.setSelection(batch.selectionBefore),
                        e3.tf.withoutSaving(() => {
                          e3.tf.withoutNormalizing(() => {
                            for (const op of batch.operations) e3.apply(op)
                          })
                        }),
                        history.redos.pop(),
                        e3.writeHistory('undos', batch))
                    }
                  }),
                  (e3.undo = () => {
                    const { history } = e3,
                      { undos } = history
                    if (undos.length > 0) {
                      const batch = undos.at(-1)
                      ;(e3.tf.withoutSaving(() => {
                        e3.tf.withoutNormalizing(() => {
                          const inverseOps = batch.operations
                            .map(OperationApi.inverse)
                            .reverse()
                          for (const op of inverseOps) e3.apply(op)
                          batch.selectionBefore &&
                            e3.tf.setSelection(batch.selectionBefore)
                        })
                      }),
                        e3.writeHistory('redos', batch),
                        history.undos.pop())
                    }
                  }),
                  (e3.apply = (op) => {
                    const { history, operations } = e3,
                      { undos } = history,
                      lastBatch = undos.at(-1),
                      lastOp = lastBatch?.operations.at(-1)
                    let save = e3.api.isSaving(),
                      merge = e3.api.isMerging()
                    if (
                      (null == save && (save = shouldSave(op, lastOp)), save)
                    ) {
                      if (
                        (null == merge &&
                          (merge =
                            null != lastBatch &&
                            (operations.length > 0 || shouldMerge(op, lastOp))),
                        e3.api.isSplittingOnce() &&
                          ((merge = !1), e3.tf.setSplittingOnce(void 0)),
                        lastBatch && merge)
                      )
                        lastBatch.operations.push(op)
                      else {
                        const batch = {
                          operations: [op],
                          selectionBefore: e3.selection,
                        }
                        e3.writeHistory('undos', batch)
                      }
                      for (; undos.length > 100; ) undos.shift()
                      history.redos = []
                    }
                    apply2(op)
                  }),
                  (e3.writeHistory = (stack, batch) => {
                    e3.history[stack].push(batch)
                  }),
                  e3
                )
              })(editor),
          }),
          BaseParagraphPlugin = createSlatePlugin({
            key: 'p',
            node: { isElement: !0 },
            parsers: {
              html: {
                deserializer: {
                  rules: [{ validNodeName: 'P' }],
                  query: ({ element }) =>
                    'Consolas' !== element.style.fontFamily,
                },
              },
            },
            rules: { merge: { removeEmpty: !0 } },
          }),
          OverridePlugin = createSlatePlugin({ key: 'override' })
            .overrideEditor(
              ({
                api: { isInline, isSelectable, isVoid, markableVoid },
                editor,
              }) => ({
                api: {
                  create: {
                    block: (node) => ({
                      children: [{ text: '' }],
                      type: editor.getType(BaseParagraphPlugin.key),
                      ...node,
                    }),
                  },
                  isInline: (element) =>
                    !!getPluginByType(editor, element.type)?.node.isInline ||
                    isInline(element),
                  isSelectable: (element) =>
                    !1 !==
                      getPluginByType(editor, element.type)?.node
                        .isSelectable && isSelectable(element),
                  isVoid: (element) =>
                    !!getPluginByType(editor, element.type)?.node.isVoid ||
                    isVoid(element),
                  markableVoid: (element) =>
                    !!getPluginByType(editor, element.type)?.node
                      .isMarkableVoid || markableVoid(element),
                },
              })
            )
            .overrideEditor((ctx) => {
              const {
                  editor,
                  tf: { insertBreak },
                } = ctx,
                checkMatchRulesOverride = (rule, blockNode, blockPath) => {
                  const matchRulesKeys = editor.meta.pluginCache.rules.match
                  for (const key of matchRulesKeys) {
                    const overridePlugin = editor.getPlugin({ key })
                    if (
                      overridePlugin.rules?.break &&
                      overridePlugin.rules?.match?.({
                        ...ctx,
                        node: blockNode,
                        path: blockPath,
                        rule,
                      })
                    )
                      return overridePlugin.rules.break
                  }
                  return null
                },
                executeBreakAction = (action, blockPath) =>
                  'reset' === action
                    ? (editor.tf.resetBlock({ at: blockPath }), !0)
                    : 'exit' === action
                      ? (editor.tf.insertExitBreak(), !0)
                      : 'deleteExit' === action
                        ? (editor.tf.deleteBackward('character'),
                          editor.tf.insertExitBreak(),
                          !0)
                        : 'lineBreak' === action &&
                          (editor.tf.insertSoftBreak(), !0)
              return {
                transforms: {
                  insertBreak() {
                    if (editor.selection && editor.api.isCollapsed()) {
                      const block = editor.api.block()
                      if (block) {
                        const [blockNode, blockPath] = block,
                          plugin = getPluginByType(editor, blockNode.type),
                          breakRules = plugin?.rules.break
                        if (
                          editor.api.isEmpty(editor.selection, { block: !0 })
                        ) {
                          const effectiveBreakRules =
                              checkMatchRulesOverride(
                                'break.empty',
                                blockNode,
                                blockPath
                              ) || breakRules,
                            emptyAction = effectiveBreakRules?.empty
                          if (executeBreakAction(emptyAction, blockPath)) return
                        }
                        if (
                          !editor.api.isEmpty(editor.selection, {
                            block: !0,
                          }) &&
                          editor.api.isAt({ end: !0 })
                        ) {
                          const range = editor.api.range(
                            'before',
                            editor.selection
                          )
                          if (range) {
                            if ('\n' === editor.api.string(range)) {
                              const effectiveBreakRules =
                                  checkMatchRulesOverride(
                                    'break.emptyLineEnd',
                                    blockNode,
                                    blockPath
                                  ) || breakRules,
                                emptyLineEndAction =
                                  effectiveBreakRules?.emptyLineEnd
                              if (
                                executeBreakAction(
                                  emptyLineEndAction,
                                  blockPath
                                )
                              )
                                return
                            }
                          }
                        }
                        const overrideDefaultBreakRules =
                            checkMatchRulesOverride(
                              'break.default',
                              blockNode,
                              blockPath
                            ),
                          defaultAction = (
                            overrideDefaultBreakRules || breakRules
                          )?.default
                        if (executeBreakAction(defaultAction, blockPath)) return
                        const overrideSplitResetBreakRules =
                          checkMatchRulesOverride(
                            'break.splitReset',
                            blockNode,
                            blockPath
                          )
                        if (
                          overrideSplitResetBreakRules?.splitReset ??
                          breakRules?.splitReset
                        ) {
                          const isAtStart = editor.api.isAt({ start: !0 })
                          return (
                            insertBreak(),
                            void editor.tf.resetBlock({
                              at: isAtStart
                                ? blockPath
                                : PathApi.next(blockPath),
                            })
                          )
                        }
                      }
                    }
                    insertBreak()
                  },
                },
              }
            })
            .overrideEditor((ctx) => {
              const {
                  editor,
                  tf: { deleteBackward, deleteForward, deleteFragment },
                } = ctx,
                resetMarks = () => {
                  editor.api.isAt({ start: !0 }) && editor.tf.removeMarks()
                },
                checkMatchRulesOverride = (rule, blockNode, blockPath) => {
                  const matchRulesKeys = editor.meta.pluginCache.rules.match
                  for (const key of matchRulesKeys) {
                    const overridePlugin = editor.getPlugin({ key })
                    if (
                      overridePlugin.rules?.delete &&
                      overridePlugin.rules?.match?.({
                        ...ctx,
                        node: blockNode,
                        path: blockPath,
                        rule,
                      })
                    )
                      return overridePlugin.rules.delete
                  }
                  return null
                },
                executeDeleteAction = (action, blockPath) =>
                  'reset' === action &&
                  (editor.tf.resetBlock({ at: blockPath }), !0)
              return {
                transforms: {
                  deleteBackward(unit) {
                    if (editor.selection && editor.api.isCollapsed()) {
                      const block = editor.api.block()
                      if (block) {
                        const [blockNode, blockPath] = block,
                          plugin = getPluginByType(editor, blockNode.type),
                          deleteRules = plugin?.rules.delete
                        if (editor.api.isAt({ start: !0 })) {
                          const effectiveDeleteRules =
                              checkMatchRulesOverride(
                                'delete.start',
                                blockNode,
                                blockPath
                              ) || deleteRules,
                            startAction = effectiveDeleteRules?.start
                          if (executeDeleteAction(startAction, blockPath))
                            return
                        }
                        if (
                          editor.api.isEmpty(editor.selection, { block: !0 })
                        ) {
                          const effectiveDeleteRules =
                              checkMatchRulesOverride(
                                'delete.empty',
                                blockNode,
                                blockPath
                              ) || deleteRules,
                            emptyAction = effectiveDeleteRules?.empty
                          if (executeDeleteAction(emptyAction, blockPath))
                            return
                        }
                      }
                      if (
                        PointApi.equals(
                          editor.selection.anchor,
                          editor.api.start([])
                        )
                      )
                        return void editor.tf.resetBlock({ at: [0] })
                    }
                    ;(deleteBackward(unit), resetMarks())
                  },
                  deleteForward(unit) {
                    ;(deleteForward(unit), resetMarks())
                  },
                  deleteFragment(options) {
                    editor.selection &&
                    RangeApi.equals(editor.selection, editor.api.range([]))
                      ? editor.tf.reset({ children: !0, select: !0 })
                      : (deleteFragment(options), resetMarks())
                  },
                },
              }
            })
            .overrideEditor((ctx) => {
              const {
                  editor,
                  tf: { removeNodes },
                } = ctx,
                checkMatchRulesOverride = (rule, blockNode, blockPath) => {
                  const matchRulesKeys = editor.meta.pluginCache.rules.match
                  for (const key of matchRulesKeys) {
                    const overridePlugin = editor.getPlugin({ key })
                    if (
                      overridePlugin.rules.merge &&
                      overridePlugin.rules?.match?.({
                        ...ctx,
                        node: blockNode,
                        path: blockPath,
                        rule,
                      })
                    )
                      return overridePlugin.rules.merge
                  }
                  return null
                }
              return {
                api: {
                  shouldMergeNodes(
                    prevNodeEntry,
                    nextNodeEntry,
                    { reverse } = {}
                  ) {
                    const [prevNode, prevPath] = prevNodeEntry,
                      [, nextPath] = nextNodeEntry,
                      [curNode, curPath] = reverse
                        ? prevNodeEntry
                        : nextNodeEntry,
                      [targetNode, targetPath] = reverse
                        ? nextNodeEntry
                        : prevNodeEntry
                    if (
                      TextApi.isText(prevNode) &&
                      '' === prevNode.text &&
                      0 !== prevPath.at(-1)
                    )
                      return (editor.tf.removeNodes({ at: prevPath }), !1)
                    const shouldRemove = (node, path) => {
                      const plugin = getPluginByType(editor, node.type)
                      if (!plugin) return !0
                      const mergeRules = plugin.rules.merge
                      if (!mergeRules?.removeEmpty) return !1
                      const overrideMergeRules = checkMatchRulesOverride(
                        'merge.removeEmpty',
                        node,
                        path
                      )
                      return !1 !== overrideMergeRules?.removeEmpty
                    }
                    return ElementApi.isElement(targetNode) &&
                      editor.api.isVoid(targetNode)
                      ? (shouldRemove(targetNode, targetPath)
                          ? editor.tf.removeNodes({ at: prevPath })
                          : ElementApi.isElement(curNode) &&
                            editor.api.isEmpty(curNode) &&
                            editor.tf.removeNodes({ at: curPath }),
                        !1)
                      : !(
                          ElementApi.isElement(prevNode) &&
                          editor.api.isEmpty(prevNode) &&
                          PathApi.isSibling(prevPath, nextPath) &&
                          shouldRemove(prevNode, prevPath)
                        ) || (editor.tf.removeNodes({ at: prevPath }), !1)
                  },
                },
                transforms: {
                  removeNodes(options = {}) {
                    if ('mergeNodes' === options.event?.type && options.at) {
                      const nodeEntry = editor.api.node(options.at)
                      if (nodeEntry) {
                        const [node, path] = nodeEntry
                        if (ElementApi.isElement(node)) {
                          const plugin = getPluginByType(editor, node.type)
                          if (plugin) {
                            const mergeRules = plugin.rules.merge,
                              overrideMergeRules = checkMatchRulesOverride(
                                'merge.removeEmpty',
                                node,
                                path
                              )
                            if (
                              !1 === overrideMergeRules?.removeEmpty ||
                              !1 === mergeRules?.removeEmpty
                            )
                              return
                          }
                        }
                      }
                    }
                    removeNodes(options)
                  },
                },
              }
            })
            .overrideEditor((ctx) => {
              const {
                editor,
                tf: { normalizeNode },
              } = ctx
              return {
                transforms: {
                  normalizeNode([node, path]) {
                    if (ElementApi.isElement(node) && node.type) {
                      const plugin = getPluginByType(editor, node.type),
                        normalizeRules = plugin?.rules.normalize,
                        overridenormalizeRules = ((rule, node, path) => {
                          const matchRulesKeys =
                            editor.meta.pluginCache.rules.match
                          for (const key of matchRulesKeys) {
                            const overridePlugin = editor.getPlugin({ key })
                            if (
                              overridePlugin.rules?.normalize &&
                              overridePlugin.rules?.match?.({
                                ...ctx,
                                node,
                                path,
                                rule,
                              })
                            )
                              return overridePlugin.rules.normalize
                          }
                          return null
                        })('normalize.removeEmpty', node, path),
                        effectivenormalizeRules =
                          overridenormalizeRules || normalizeRules
                      if (
                        effectivenormalizeRules?.removeEmpty &&
                        editor.api.isEmpty(node)
                      )
                        return void editor.tf.removeNodes({ at: path })
                    }
                    normalizeNode([node, path])
                  },
                },
              }
            }),
          pipeInsertFragment = (
            editor,
            injectedPlugins,
            { fragment, ...options }
          ) => {
            editor.tf.withoutNormalizing(() => {
              ;(injectedPlugins.some(
                (p) =>
                  !0 ===
                  p.parser?.preInsert?.({
                    ...getEditorPlugin(editor, p),
                    fragment,
                    ...options,
                  })
              ),
                editor.tf.insertFragment(fragment))
            })
          },
          pipeTransformData = (editor, plugins2, { data, ...options }) => (
            plugins2.forEach((p) => {
              const transformData = p.parser?.transformData
              transformData &&
                (data = transformData({
                  ...getEditorPlugin(editor, p),
                  data,
                  ...options,
                }))
            }),
            data
          ),
          pipeTransformFragment = (
            editor,
            plugins2,
            { fragment, ...options }
          ) => (
            plugins2.forEach((p) => {
              const transformFragment = p.parser?.transformFragment
              transformFragment &&
                (fragment = transformFragment({
                  fragment,
                  ...options,
                  ...getEditorPlugin(editor, p),
                }))
            }),
            fragment
          ),
          applyDeepToNodes = ({ apply, node, path = [], query, source }) => {
            ;(queryNode([node, path], query) &&
              apply(node, 'function' == typeof source ? source() : source),
              NodeApi.isAncestor(node) &&
                node.children.forEach((child, index) => {
                  applyDeepToNodes({
                    apply,
                    node: child,
                    path: path.concat([index]),
                    query,
                    source,
                  })
                }))
          },
          getInjectMatch = (editor, plugin) => (node, path) => {
            const {
                inject: {
                  excludeBelowPlugins,
                  excludePlugins,
                  isBlock: _isBlock,
                  isElement: _isElement,
                  isLeaf,
                  maxLevel,
                  targetPlugins,
                },
              } = plugin,
              element = ElementApi.isElement(node) ? node : void 0
            if (_isElement && !element) return !1
            if (_isBlock && (!element || !editor.api.isBlock(element)))
              return !1
            if (isLeaf && element) return !1
            if (element?.type) {
              if (excludePlugins?.includes(getPluginKey(editor, element.type)))
                return !1
              if (
                targetPlugins &&
                !targetPlugins.includes(getPluginKey(editor, element.type))
              )
                return !1
            }
            if (excludeBelowPlugins || maxLevel) {
              if (maxLevel && path.length > maxLevel) return !1
              if (excludeBelowPlugins) {
                const excludeTypes = ((editor, types) =>
                    types
                      .map((type) => getPluginKey(editor, type) ?? type)
                      .filter(Boolean))(editor, excludeBelowPlugins),
                  isBelow = editor.api.above({
                    at: path,
                    match: (n) =>
                      ElementApi.isElement(n) && excludeTypes.includes(n.type),
                  })
                if (isBelow) return !1
              }
            }
            return !0
          },
          getInjectedPlugins = (editor, plugin) => {
            const injectedPlugins = []
            return (
              [...editor.meta.pluginList].reverse().forEach((p) => {
                const injectedPlugin = p.inject.plugins?.[plugin.key]
                injectedPlugin && injectedPlugins.push(injectedPlugin)
              }),
              [plugin, ...injectedPlugins]
            )
          },
          useNodeAttributes = (props, ref) => ({
            ...props.attributes,
            className:
              (0, dist_clsx.$)(props.attributes.className, props.className) ||
              void 0,
            ref,
            style: { ...props.attributes.style, ...props.style },
          }),
          SlateElement = react.forwardRef(function SlateElement2(
            { as: Tag = 'div', children, ...props },
            ref
          ) {
            const attributes = useNodeAttributes(props, ref),
              block =
                !!props.element.id && !!props.editor.api.isBlock(props.element)
            return react.createElement(
              Tag,
              {
                'data-slate-node': 'element',
                'data-slate-inline': attributes['data-slate-inline'],
                'data-block-id': block ? props.element.id : void 0,
                ...attributes,
                style: { position: 'relative', ...attributes?.style },
              },
              children
            )
          }),
          SlateText = react.forwardRef(
            ({ as: Tag = 'span', children, ...props }, ref) => {
              const attributes = useNodeAttributes(props, ref)
              return react.createElement(Tag, { ...attributes }, children)
            }
          ),
          NonBreakingSpace = () =>
            react.createElement(
              'span',
              { style: { fontSize: 0, lineHeight: 0 }, contentEditable: !1 },
              String.fromCodePoint(160)
            ),
          SlateLeaf = react.forwardRef(
            ({ as: Tag = 'span', children, inset, ...props }, ref) => {
              const attributes = useNodeAttributes(props, ref)
              return inset
                ? react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(NonBreakingSpace, null),
                    react.createElement(
                      Tag,
                      { ...attributes },
                      children,
                      react.createElement(NonBreakingSpace, null)
                    )
                  )
                : react.createElement(Tag, { ...attributes }, children)
            }
          ),
          getNodeDataAttributes = (
            editor,
            node,
            { isElement: isElement3, isLeaf, isText }
          ) =>
            Object.keys(node).reduce((acc, key) => {
              if ('object' == typeof node[key]) return acc
              if (isElement3 && 'children' === key) return acc
              if ((isLeaf || isText) && 'text' === key) return acc
              const plugin = editor.getPlugin({ key })
              if (
                isLeaf &&
                plugin?.node.isLeaf &&
                !0 !== plugin?.node.isDecoration
              )
                return acc
              if (
                isText &&
                plugin?.node.isLeaf &&
                !1 !== plugin?.node.isDecoration
              )
                return acc
              const attributeName = keyToDataAttribute(key)
              return { ...acc, [attributeName]: node[key] }
            }, {}),
          getNodeDataAttributeKeys = (node) =>
            Object.keys(node)
              .filter(
                (key) =>
                  'object' != typeof node[key] &&
                  (!TextApi.isText(node) || 'text' !== key)
              )
              .map((key) => keyToDataAttribute(key)),
          keyToDataAttribute = (key) =>
            `data-slate-${kebabCase_default()(key)}`,
          DEFAULT = {
            handlers: !0,
            inject: !0,
            normalizeInitialValue: !1,
            render: !0,
          },
          isEditOnly = (readOnly, plugin, feature) =>
            !!readOnly &&
            (!0 === plugin.editOnly
              ? DEFAULT[feature]
              : 'object' == typeof plugin.editOnly &&
                (plugin.editOnly[feature] ?? DEFAULT[feature])),
          pipeInjectNodeProps = (
            editor,
            nodeProps,
            getElementPath,
            readOnly = !1
          ) => (
            editor.meta.pluginCache.inject.nodeProps.forEach((key) => {
              const plugin = editor.getPlugin({ key }),
                newAttributes = ((
                  editor,
                  plugin,
                  nodeProps,
                  getElementPath
                ) => {
                  const {
                      key,
                      inject: { nodeProps: injectNodeProps },
                    } = plugin,
                    { element, text } = nodeProps,
                    node = element ?? text
                  if (!node) return
                  if (!injectNodeProps) return
                  const {
                    classNames,
                    defaultNodeValue,
                    nodeKey = editor.getType(key),
                    query,
                    styleKey = nodeKey,
                    transformClassName,
                    transformNodeValue,
                    transformProps,
                    transformStyle,
                    validNodeValues,
                  } = injectNodeProps
                  if (
                    !getInjectMatch(editor, plugin)(node, getElementPath(node))
                  )
                    return
                  const queryResult = query?.({
                    ...injectNodeProps,
                    ...getEditorPlugin(editor, plugin),
                    nodeProps,
                  })
                  if (query && !queryResult) return
                  const nodeValue = node[nodeKey]
                  if (
                    !transformProps &&
                    (!dist_isDefined(nodeValue) ||
                      (validNodeValues &&
                        !validNodeValues.includes(nodeValue)) ||
                      nodeValue === defaultNodeValue)
                  )
                    return
                  const transformOptions = {
                      ...nodeProps,
                      ...getEditorPlugin(editor, plugin),
                      nodeValue,
                    },
                    value = transformNodeValue?.(transformOptions) ?? nodeValue
                  transformOptions.value = value
                  let newProps = {}
                  return (
                    element &&
                      nodeKey &&
                      nodeValue &&
                      (newProps.className = `slate-${nodeKey}-${nodeValue}`),
                    (classNames?.[nodeValue] || transformClassName) &&
                      (newProps.className =
                        transformClassName?.(transformOptions) ??
                        classNames?.[value]),
                    styleKey &&
                      (newProps.style = transformStyle?.(transformOptions) ?? {
                        [styleKey]: value,
                      }),
                    transformProps &&
                      (newProps =
                        transformProps({
                          ...transformOptions,
                          props: newProps,
                        }) ?? newProps),
                    newProps
                  )
                })(editor, plugin, nodeProps, getElementPath)
              if (isEditOnly(readOnly, plugin, 'inject')) return
              if (!newAttributes) return
              const attributes = nodeProps.attributes
              nodeProps.attributes = {
                ...attributes,
                ...newAttributes,
                className:
                  (0, dist_clsx.A)(
                    attributes?.className,
                    newAttributes.className
                  ) || void 0,
                style: { ...attributes?.style, ...newAttributes.style },
              }
            }),
            nodeProps
          ),
          getRenderNodeStaticProps = ({
            attributes: nodeAttributes,
            editor,
            node,
            plugin,
            props,
          }) => {
            let newProps = {
              ...props,
              ...(plugin
                ? getEditorPlugin(editor, plugin)
                : { api: editor.api, editor, tf: editor.transforms }),
            }
            const { className } = props,
              pluginProps = getPluginNodeProps({
                attributes: nodeAttributes,
                node,
                plugin,
                props: newProps,
              })
            return (
              (newProps = {
                ...pluginProps,
                attributes: {
                  ...pluginProps.attributes,
                  className:
                    (0, dist_clsx.A)(
                      getSlateClass(plugin?.node.type),
                      className
                    ) || void 0,
                },
              }),
              (newProps = pipeInjectNodeProps(editor, newProps, (node2) =>
                editor.api.findPath(node2)
              )),
              newProps.style &&
                0 === Object.keys(newProps.style).length &&
                delete newProps.style,
              newProps
            )
          },
          getSelectedDomFragment = (editor) => {
            const selection = window.getSelection()
            if (!selection || 0 === selection.rangeCount) return []
            const _domBlocks = selection
                .getRangeAt(0)
                .cloneContents()
                .querySelectorAll('[data-slate-node="element"][data-slate-id]'),
              domBlocks = Array.from(_domBlocks)
            if (0 === domBlocks.length) return []
            const nodes = []
            return (
              domBlocks.forEach((node, index) => {
                const blockId = node.dataset.slateId,
                  block = editor.api.node({ id: blockId, at: [] })
                if (block && 1 === block[1].length)
                  if (
                    (0 !== index && index !== domBlocks.length - 1) ||
                    node.textContent?.trim() === NodeApi.string(block[0]) ||
                    !ElementApi.isElement(block[0]) ||
                    editor.api.isVoid(block[0])
                  )
                    nodes.push(block[0])
                  else {
                    const html = document.createElement('div')
                    html.append(node)
                    const results = editor.api.html.deserialize({
                      element: html,
                    })
                    nodes.push(results[0])
                  }
              }),
              nodes
            )
          },
          getSelectedDomNode = () => {
            const selection = window.getSelection()
            if (!selection || 0 === selection.rangeCount) return
            const htmlFragment = selection.getRangeAt(0).cloneContents(),
              div = document.createElement('div')
            return (div.append(htmlFragment), div)
          },
          pipeDecorate = (editor, decorateProp) => {
            if (0 !== editor.meta.pluginCache.decorate.length || decorateProp)
              return (entry) => {
                let ranges = []
                const addRanges = (newRanges) => {
                  newRanges?.length && (ranges = [...ranges, ...newRanges])
                }
                return (
                  editor.meta.pluginCache.decorate.forEach((key) => {
                    const plugin = editor.getPlugin({ key })
                    addRanges(
                      plugin.decorate({
                        ...getEditorPlugin(editor, plugin),
                        entry,
                      })
                    )
                  }),
                  decorateProp && addRanges(decorateProp({ editor, entry })),
                  ranges
                )
              }
          },
          pluginRenderElementStatic = (editor, plugin) =>
            function render(nodeProps) {
              const element = nodeProps.element,
                Component = editor.meta.components?.[plugin.key],
                Element2 = Component ?? SlateElement
              let { children } = nodeProps
              const dataAttributes = ((editor, plugin, node) => {
                const isElement3 = plugin.node.isElement,
                  isLeaf =
                    plugin.node.isLeaf && !0 === plugin.node.isDecoration,
                  isText = plugin.node.isLeaf && !1 === plugin.node.isDecoration
                return {
                  ...getNodeDataAttributes(editor, node, {
                    isElement: isElement3,
                    isLeaf,
                    isText,
                  }),
                  ...(plugin.node.toDataAttributes?.({
                    ...(plugin ? getEditorPlugin(editor, plugin) : {}),
                    node,
                  }) ?? {}),
                }
              })(editor, plugin, element)
              ;((nodeProps = getRenderNodeStaticProps({
                attributes: { ...element.attributes, ...dataAttributes },
                editor,
                node: element,
                plugin,
                props: nodeProps,
              })),
                editor.meta.pluginCache.render.belowNodes.forEach((key) => {
                  const hoc = editor
                    .getPlugin({ key })
                    .render.belowNodes({ ...nodeProps, key })
                  hoc && (children = hoc({ ...nodeProps, children }))
                }))
              const defaultProps = Component ? {} : { as: plugin.render?.as }
              let component = react.createElement(
                Element2,
                { ...defaultProps, ...nodeProps },
                children,
                editor.meta.pluginCache.render.belowRootNodes.map((key) => {
                  const Component2 = editor.getPlugin({ key }).render
                    .belowRootNodes
                  return react.createElement(Component2, {
                    key,
                    ...defaultProps,
                    ...nodeProps,
                  })
                })
              )
              return (
                editor.meta.pluginCache.render.aboveNodes.forEach((key) => {
                  const hoc = editor
                    .getPlugin({ key })
                    .render.aboveNodes({ ...nodeProps, key })
                  hoc &&
                    (component = hoc({ ...nodeProps, children: component }))
                }),
                component
              )
            },
          pipeRenderTextStatic = (
            editor,
            { renderText: renderTextProp } = {}
          ) => {
            const renderTexts = [],
              textPropsPlugins = []
            return (
              editor.meta.pluginCache.node.isText.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin &&
                  renderTexts.push(
                    ((editor, plugin) =>
                      function render(nodeProps) {
                        const { children, text } = nodeProps
                        if (text[plugin.node.type ?? plugin.key]) {
                          const Component =
                              editor.meta.components?.[plugin.key],
                            Text2 = Component ?? SlateText,
                            ctxProps = getRenderNodeStaticProps({
                              attributes: { ...text.attributes },
                              editor,
                              node: text,
                              plugin,
                              props: nodeProps,
                            }),
                            defaultProps = Component
                              ? {}
                              : { as: plugin.render?.as }
                          return react.createElement(
                            Text2,
                            { ...defaultProps, ...ctxProps },
                            children
                          )
                        }
                        return children
                      })(editor, plugin)
                  )
              }),
              editor.meta.pluginCache.node.textProps.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin && textPropsPlugins.push(plugin)
              }),
              function render({ attributes, ...props }) {
                if (
                  (renderTexts.forEach((render2) => {
                    const newChildren = render2(props)
                    void 0 !== newChildren && (props.children = newChildren)
                  }),
                  textPropsPlugins.forEach((plugin) => {
                    if (props.text[plugin.node.type ?? plugin.key]) {
                      const pluginTextProps =
                        'function' == typeof plugin.node.textProps
                          ? plugin.node.textProps(props)
                          : (plugin.node.textProps ?? {})
                      ;(pluginTextProps.className &&
                        (pluginTextProps.className = (0, dist_clsx.A)(
                          props.className,
                          pluginTextProps.className
                        )),
                        (attributes = { ...attributes, ...pluginTextProps }))
                    }
                  }),
                  renderTextProp)
                )
                  return renderTextProp({ attributes, ...props })
                const ctxProps = getRenderNodeStaticProps({
                    editor,
                    props: { attributes, ...props },
                  }),
                  text = ctxProps.text,
                  dataAttributes = getNodeDataAttributes(editor, text, {
                    isText: !0,
                  })
                return react.createElement(SlateText, {
                  ...ctxProps,
                  attributes: { ...ctxProps.attributes, ...dataAttributes },
                })
              }
            )
          }
        var ElementStatic = react.memo(
          function BaseElementStatic({
            decorate,
            decorations,
            editor,
            element = { children: [], type: '' },
          }) {
            const renderElement = ((
                editor,
                { renderElement: renderElementProp } = {}
              ) =>
                function render(props) {
                  const plugin = getPluginByType(editor, props.element.type)
                  if (plugin?.node.isElement)
                    return pluginRenderElementStatic(editor, plugin)(props)
                  if (renderElementProp) return renderElementProp(props)
                  const ctxProps = getRenderNodeStaticProps({
                    editor,
                    props: { ...props },
                  })
                  return react.createElement(
                    SlateElement,
                    { ...ctxProps },
                    props.children,
                    editor.meta.pluginCache.render.belowRootNodes.map((key) => {
                      const Component = editor.getPlugin({ key }).render
                        .belowRootNodes
                      return react.createElement(Component, {
                        key,
                        ...ctxProps,
                      })
                    })
                  )
                })(editor),
              attributes = { 'data-slate-node': 'element', ref: null }
            let children = react.createElement(
              Children,
              { decorate, decorations, editor },
              element.children
            )
            return (
              editor.api.isVoid(element) &&
                ((attributes['data-slate-void'] = !0),
                (children = react.createElement(
                  'span',
                  {
                    style: {
                      color: 'transparent',
                      height: '0',
                      outline: 'none',
                      position: 'absolute',
                    },
                    'data-slate-spacer': !0,
                  },
                  react.createElement(
                    Children,
                    { decorate, decorations, editor },
                    element.children
                  )
                ))),
              editor.api.isInline(element) &&
                (attributes['data-slate-inline'] = !0),
              react.createElement(
                react.Fragment,
                null,
                renderElement?.({ attributes, children, element })
              )
            )
          },
          (prev, next) =>
            (prev.element === next.element ||
              (void 0 !== prev.element._memo &&
                prev.element._memo === next.element._memo)) &&
            ((list, another) => {
              if (list === another) return !0
              if (!list || !another) return !1
              if (list.length !== another.length) return !1
              for (var i = 0; i < list.length; i++) {
                var range = list[i],
                  other = another[i]
                if (
                  !dist_index_es.Q6.equals(range, other) ||
                  !isDecorationFlagsEqual(range, other)
                )
                  return !1
              }
              return !0
            })(prev.decorations, next.decorations)
        )
        var LeafStatic = react.memo(
            function BaseLeafStatic({
              decorations,
              editor,
              text = { text: '' },
            }) {
              const renderLeaf = pipeRenderLeafStatic(editor)
              return pipeRenderTextStatic(editor)({
                attributes: { 'data-slate-node': 'text', ref: null },
                children: TextApi.decorations(text, decorations).map(
                  ({ leaf, position }, index) => {
                    const leafElement = renderLeaf({
                      attributes: { 'data-slate-leaf': !0 },
                      children: react.createElement(
                        'span',
                        { 'data-slate-string': !0 },
                        '' === leaf.text ? '\ufeff' : leaf.text
                      ),
                      leaf,
                      leafPosition: position,
                      text: leaf,
                    })
                    return react.createElement(
                      react.Fragment,
                      { key: index },
                      leafElement
                    )
                  }
                ),
                text,
              })
            },
            (prev, next) =>
              TextApi.equals(next.text, prev.text) &&
              ((list, another) => {
                if (list === another) return !0
                if (!list || !another) return !1
                if (list.length !== another.length) return !1
                for (var i = 0; i < list.length; i++) {
                  var range = list[i],
                    other = another[i]
                  if (
                    range.anchor.offset !== other.anchor.offset ||
                    range.focus.offset !== other.focus.offset ||
                    !isDecorationFlagsEqual(range, other)
                  )
                    return !1
                }
                return !0
              })(next.decorations, prev.decorations)
          ),
          defaultDecorate = () => []
        function Children({
          children = [],
          decorate = defaultDecorate,
          decorations = [],
          editor,
        }) {
          return react.createElement(
            react.Fragment,
            null,
            children.map((child, i) => {
              const p = editor.api.findPath(child)
              let ds = []
              if (p) {
                const range = editor.api.range(p)
                ds = decorate([child, p])
                for (const dec of decorations) {
                  const d = RangeApi.intersection(dec, range)
                  d && ds.push(d)
                }
              }
              return ElementApi.isElement(child)
                ? react.createElement(ElementStatic, {
                    key: i,
                    decorate,
                    decorations: ds,
                    editor,
                    element: child,
                  })
                : react.createElement(LeafStatic, {
                    key: i,
                    decorations: ds,
                    editor,
                    text: child,
                  })
            })
          )
        }
        function PlateStatic(props) {
          const { className, editor, value, ...rest } = props
          value && (editor.children = value)
          const decorate = pipeDecorate(editor)
          let afterEditable = null,
            beforeEditable = null
          ;(editor.meta.pluginCache.render.beforeEditable.forEach((key) => {
            const BeforeEditable = editor.getPlugin({ key }).render
              .beforeEditable
            BeforeEditable &&
              (beforeEditable = react.createElement(
                react.Fragment,
                null,
                beforeEditable,
                react.createElement(BeforeEditable, null)
              ))
          }),
            editor.meta.pluginCache.render.afterEditable.forEach((key) => {
              const AfterEditable = editor.getPlugin({ key }).render
                .afterEditable
              AfterEditable &&
                (afterEditable = react.createElement(
                  react.Fragment,
                  null,
                  afterEditable,
                  react.createElement(AfterEditable, null)
                ))
            }))
          const content = react.createElement(
            'div',
            {
              className: (0, dist_clsx.A)('slate-editor', className),
              'data-slate-editor': !0,
              'data-slate-node': 'value',
              ...rest,
            },
            react.createElement(
              Children,
              { decorate, decorations: [], editor },
              editor.children
            )
          )
          let aboveEditable = react.createElement(
            react.Fragment,
            null,
            beforeEditable,
            content,
            afterEditable
          )
          return (
            editor.meta.pluginCache.render.aboveEditable.forEach((key) => {
              const AboveEditable = editor.getPlugin({ key }).render
                .aboveEditable
              AboveEditable &&
                (aboveEditable = react.createElement(
                  AboveEditable,
                  null,
                  aboveEditable
                ))
            }),
            aboveEditable
          )
        }
        var pipeRenderLeafStatic = (
            editor,
            { renderLeaf: renderLeafProp } = {}
          ) => {
            const renderLeafs = [],
              leafPropsPlugins = []
            return (
              editor.meta.pluginCache.node.isLeaf.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin &&
                  renderLeafs.push(
                    ((editor, plugin) =>
                      function render(props) {
                        const { children, leaf } = props
                        if (leaf[plugin.node.type]) {
                          const Component =
                              plugin.render.leaf ??
                              editor.meta.components?.[plugin.key],
                            Leaf = Component ?? SlateLeaf,
                            ctxProps = getRenderNodeStaticProps({
                              attributes: { ...leaf.attributes },
                              editor,
                              node: leaf,
                              plugin,
                              props,
                            }),
                            defaultProps = Component
                              ? {}
                              : { as: plugin.render?.as }
                          return react.createElement(
                            Leaf,
                            { ...defaultProps, ...ctxProps },
                            children
                          )
                        }
                        return children
                      })(editor, plugin)
                  )
              }),
              editor.meta.pluginCache.node.leafProps.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin && leafPropsPlugins.push(plugin)
              }),
              function render({ attributes, ...props }) {
                if (
                  (renderLeafs.forEach((render2) => {
                    const newChildren = render2(props)
                    void 0 !== newChildren && (props.children = newChildren)
                  }),
                  leafPropsPlugins.forEach((plugin) => {
                    if (props.leaf[plugin.node.type]) {
                      const pluginLeafProps =
                        'function' == typeof plugin.node.leafProps
                          ? plugin.node.leafProps(props)
                          : (plugin.node.leafProps ?? {})
                      ;(pluginLeafProps.className &&
                        (pluginLeafProps.className = (0, dist_clsx.A)(
                          props.className,
                          pluginLeafProps.className
                        )),
                        (attributes = { ...attributes, ...pluginLeafProps }))
                    }
                  }),
                  renderLeafProp)
                )
                  return renderLeafProp({ attributes, ...props })
                const ctxProps = getRenderNodeStaticProps({
                    editor,
                    props: { attributes, ...props },
                  }),
                  leaf = ctxProps.leaf,
                  dataAttributes = getNodeDataAttributes(editor, leaf, {
                    isLeaf: !0,
                  })
                return react.createElement(SlateLeaf, {
                  ...ctxProps,
                  attributes: { ...ctxProps.attributes, ...dataAttributes },
                })
              }
            )
          },
          isSlateVoid = (element) => 'true' === element.dataset.slateVoid,
          isSlateLeaf = (element) => 'true' === element.dataset.slateLeaf,
          isSlateNode = (element) =>
            isSlateLeaf(element) ||
            ((element) => 'element' === element.dataset.slateNode)(element) ||
            isSlateVoid(element) ||
            ((element) => 'true' === element.dataset.slateString)(element) ||
            ((element) => 'text' === element.dataset.slateNode)(element),
          NOTHING = Symbol.for('immer-nothing'),
          DRAFTABLE = Symbol.for('immer-draftable'),
          DRAFT_STATE = Symbol.for('immer-state')
        function die(error, ...args) {
          throw new Error(
            `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
          )
        }
        var getPrototypeOf = Object.getPrototypeOf
        function react_isDraft(value) {
          return !!value && !!value[DRAFT_STATE]
        }
        function react_isDraftable(value) {
          return (
            !!value &&
            (react_isPlainObject(value) ||
              Array.isArray(value) ||
              !!value[DRAFTABLE] ||
              !!value.constructor?.[DRAFTABLE] ||
              isMap(value) ||
              isSet(value))
          )
        }
        var objectCtorString = Object.prototype.constructor.toString()
        function react_isPlainObject(value) {
          if (!value || 'object' != typeof value) return !1
          const proto = getPrototypeOf(value)
          if (null === proto) return !0
          const Ctor =
            Object.hasOwnProperty.call(proto, 'constructor') &&
            proto.constructor
          return (
            Ctor === Object ||
            ('function' == typeof Ctor &&
              Function.toString.call(Ctor) === objectCtorString)
          )
        }
        function each(obj, iter) {
          0 === getArchtype(obj)
            ? Reflect.ownKeys(obj).forEach((key) => {
                iter(key, obj[key], obj)
              })
            : obj.forEach((entry, index) => iter(index, entry, obj))
        }
        function getArchtype(thing) {
          const state = thing[DRAFT_STATE]
          return state
            ? state.type_
            : Array.isArray(thing)
              ? 1
              : isMap(thing)
                ? 2
                : isSet(thing)
                  ? 3
                  : 0
        }
        function react_has(thing, prop) {
          return 2 === getArchtype(thing)
            ? thing.has(prop)
            : Object.prototype.hasOwnProperty.call(thing, prop)
        }
        function react_set(thing, propOrOldValue, value) {
          const t = getArchtype(thing)
          2 === t
            ? thing.set(propOrOldValue, value)
            : 3 === t
              ? thing.add(value)
              : (thing[propOrOldValue] = value)
        }
        function isMap(target) {
          return target instanceof Map
        }
        function isSet(target) {
          return target instanceof Set
        }
        function react_latest(state) {
          return state.copy_ || state.base_
        }
        function react_shallowCopy(base, strict) {
          if (isMap(base)) return new Map(base)
          if (isSet(base)) return new Set(base)
          if (Array.isArray(base)) return Array.prototype.slice.call(base)
          const isPlain = react_isPlainObject(base)
          if (!0 === strict || ('class_only' === strict && !isPlain)) {
            const descriptors = Object.getOwnPropertyDescriptors(base)
            delete descriptors[DRAFT_STATE]
            let keys = Reflect.ownKeys(descriptors)
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i],
                desc = descriptors[key]
              ;(!1 === desc.writable &&
                ((desc.writable = !0), (desc.configurable = !0)),
                (desc.get || desc.set) &&
                  (descriptors[key] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: desc.enumerable,
                    value: base[key],
                  }))
            }
            return Object.create(getPrototypeOf(base), descriptors)
          }
          {
            const proto = getPrototypeOf(base)
            if (null !== proto && isPlain) return { ...base }
            const obj = Object.create(proto)
            return Object.assign(obj, base)
          }
        }
        function freeze(obj, deep = !1) {
          return (
            isFrozen(obj) ||
              react_isDraft(obj) ||
              !react_isDraftable(obj) ||
              (getArchtype(obj) > 1 &&
                (obj.set =
                  obj.add =
                  obj.clear =
                  obj.delete =
                    dontMutateFrozenCollections),
              Object.freeze(obj),
              deep &&
                Object.entries(obj).forEach(([key, value]) =>
                  freeze(value, !0)
                )),
            obj
          )
        }
        function dontMutateFrozenCollections() {
          die(2)
        }
        function isFrozen(obj) {
          return Object.isFrozen(obj)
        }
        var currentScope,
          plugins = {}
        function getPlugin(pluginKey) {
          const plugin = plugins[pluginKey]
          return (plugin || die(0), plugin)
        }
        function getCurrentScope() {
          return currentScope
        }
        function usePatchesInScope(scope, patchListener) {
          patchListener &&
            (getPlugin('Patches'),
            (scope.patches_ = []),
            (scope.inversePatches_ = []),
            (scope.patchListener_ = patchListener))
        }
        function revokeScope(scope) {
          ;(leaveScope(scope),
            scope.drafts_.forEach(revokeDraft),
            (scope.drafts_ = null))
        }
        function leaveScope(scope) {
          scope === currentScope && (currentScope = scope.parent_)
        }
        function enterScope(immer2) {
          return (currentScope = (function createScope(parent_, immer_) {
            return {
              drafts_: [],
              parent_,
              immer_,
              canAutoFreeze_: !0,
              unfinalizedDrafts_: 0,
            }
          })(currentScope, immer2))
        }
        function revokeDraft(draft) {
          const state = draft[DRAFT_STATE]
          0 === state.type_ || 1 === state.type_
            ? state.revoke_()
            : (state.revoked_ = !0)
        }
        function processResult(result, scope) {
          scope.unfinalizedDrafts_ = scope.drafts_.length
          const baseDraft = scope.drafts_[0]
          return (
            void 0 !== result && result !== baseDraft
              ? (baseDraft[DRAFT_STATE].modified_ &&
                  (revokeScope(scope), die(4)),
                react_isDraftable(result) &&
                  ((result = finalize(scope, result)),
                  scope.parent_ || maybeFreeze(scope, result)),
                scope.patches_ &&
                  getPlugin('Patches').generateReplacementPatches_(
                    baseDraft[DRAFT_STATE].base_,
                    result,
                    scope.patches_,
                    scope.inversePatches_
                  ))
              : (result = finalize(scope, baseDraft, [])),
            revokeScope(scope),
            scope.patches_ &&
              scope.patchListener_(scope.patches_, scope.inversePatches_),
            result !== NOTHING ? result : void 0
          )
        }
        function finalize(rootScope, value, path) {
          if (isFrozen(value)) return value
          const state = value[DRAFT_STATE]
          if (!state)
            return (
              each(value, (key, childValue) =>
                finalizeProperty(rootScope, state, value, key, childValue, path)
              ),
              value
            )
          if (state.scope_ !== rootScope) return value
          if (!state.modified_)
            return (maybeFreeze(rootScope, state.base_, !0), state.base_)
          if (!state.finalized_) {
            ;((state.finalized_ = !0), state.scope_.unfinalizedDrafts_--)
            const result = state.copy_
            let resultEach = result,
              isSet2 = !1
            ;(3 === state.type_ &&
              ((resultEach = new Set(result)), result.clear(), (isSet2 = !0)),
              each(resultEach, (key, childValue) =>
                finalizeProperty(
                  rootScope,
                  state,
                  result,
                  key,
                  childValue,
                  path,
                  isSet2
                )
              ),
              maybeFreeze(rootScope, result, !1),
              path &&
                rootScope.patches_ &&
                getPlugin('Patches').generatePatches_(
                  state,
                  path,
                  rootScope.patches_,
                  rootScope.inversePatches_
                ))
          }
          return state.copy_
        }
        function finalizeProperty(
          rootScope,
          parentState,
          targetObject,
          prop,
          childValue,
          rootPath,
          targetIsSet
        ) {
          if (react_isDraft(childValue)) {
            const res = finalize(
              rootScope,
              childValue,
              rootPath &&
                parentState &&
                3 !== parentState.type_ &&
                !react_has(parentState.assigned_, prop)
                ? rootPath.concat(prop)
                : void 0
            )
            if ((react_set(targetObject, prop, res), !react_isDraft(res)))
              return
            rootScope.canAutoFreeze_ = !1
          } else targetIsSet && targetObject.add(childValue)
          if (react_isDraftable(childValue) && !isFrozen(childValue)) {
            if (
              !rootScope.immer_.autoFreeze_ &&
              rootScope.unfinalizedDrafts_ < 1
            )
              return
            ;(finalize(rootScope, childValue),
              (parentState && parentState.scope_.parent_) ||
                'symbol' == typeof prop ||
                !Object.prototype.propertyIsEnumerable.call(
                  targetObject,
                  prop
                ) ||
                maybeFreeze(rootScope, childValue))
          }
        }
        function maybeFreeze(scope, value, deep = !1) {
          !scope.parent_ &&
            scope.immer_.autoFreeze_ &&
            scope.canAutoFreeze_ &&
            freeze(value, deep)
        }
        var objectTraps = {
            get(state, prop) {
              if (prop === DRAFT_STATE) return state
              const source = react_latest(state)
              if (!react_has(source, prop))
                return (function readPropFromProto(state, source, prop) {
                  const desc = getDescriptorFromProto(source, prop)
                  return desc
                    ? 'value' in desc
                      ? desc.value
                      : desc.get?.call(state.draft_)
                    : void 0
                })(state, source, prop)
              const value = source[prop]
              return state.finalized_ || !react_isDraftable(value)
                ? value
                : value === react_peek(state.base_, prop)
                  ? (prepareCopy(state),
                    (state.copy_[prop] = createProxy(value, state)))
                  : value
            },
            has: (state, prop) => prop in react_latest(state),
            ownKeys: (state) => Reflect.ownKeys(react_latest(state)),
            set(state, prop, value) {
              const desc = getDescriptorFromProto(react_latest(state), prop)
              if (desc?.set) return (desc.set.call(state.draft_, value), !0)
              if (!state.modified_) {
                const current2 = react_peek(react_latest(state), prop),
                  currentState = current2?.[DRAFT_STATE]
                if (currentState && currentState.base_ === value)
                  return (
                    (state.copy_[prop] = value),
                    (state.assigned_[prop] = !1),
                    !0
                  )
                if (
                  (function is(x, y) {
                    return x === y
                      ? 0 !== x || 1 / x == 1 / y
                      : x != x && y != y
                  })(value, current2) &&
                  (void 0 !== value || react_has(state.base_, prop))
                )
                  return !0
                ;(prepareCopy(state), react_markChanged(state))
              }
              return (
                (state.copy_[prop] === value &&
                  (void 0 !== value || prop in state.copy_)) ||
                  (Number.isNaN(value) && Number.isNaN(state.copy_[prop])) ||
                  ((state.copy_[prop] = value), (state.assigned_[prop] = !0)),
                !0
              )
            },
            deleteProperty: (state, prop) => (
              void 0 !== react_peek(state.base_, prop) || prop in state.base_
                ? ((state.assigned_[prop] = !1),
                  prepareCopy(state),
                  react_markChanged(state))
                : delete state.assigned_[prop],
              state.copy_ && delete state.copy_[prop],
              !0
            ),
            getOwnPropertyDescriptor(state, prop) {
              const owner = react_latest(state),
                desc = Reflect.getOwnPropertyDescriptor(owner, prop)
              return desc
                ? {
                    writable: !0,
                    configurable: 1 !== state.type_ || 'length' !== prop,
                    enumerable: desc.enumerable,
                    value: owner[prop],
                  }
                : desc
            },
            defineProperty() {
              die(11)
            },
            getPrototypeOf: (state) => getPrototypeOf(state.base_),
            setPrototypeOf() {
              die(12)
            },
          },
          arrayTraps = {}
        function react_peek(draft, prop) {
          const state = draft[DRAFT_STATE]
          return (state ? react_latest(state) : draft)[prop]
        }
        function getDescriptorFromProto(source, prop) {
          if (!(prop in source)) return
          let proto = getPrototypeOf(source)
          for (; proto; ) {
            const desc = Object.getOwnPropertyDescriptor(proto, prop)
            if (desc) return desc
            proto = getPrototypeOf(proto)
          }
        }
        function react_markChanged(state) {
          state.modified_ ||
            ((state.modified_ = !0),
            state.parent_ && react_markChanged(state.parent_))
        }
        function prepareCopy(state) {
          state.copy_ ||
            (state.copy_ = react_shallowCopy(
              state.base_,
              state.scope_.immer_.useStrictShallowCopy_
            ))
        }
        ;(each(objectTraps, (key, fn) => {
          arrayTraps[key] = function () {
            return ((arguments[0] = arguments[0][0]), fn.apply(this, arguments))
          }
        }),
          (arrayTraps.deleteProperty = function (state, prop) {
            return arrayTraps.set.call(this, state, prop, void 0)
          }),
          (arrayTraps.set = function (state, prop, value) {
            return objectTraps.set.call(this, state[0], prop, value, state[0])
          }))
        function createProxy(value, parent) {
          const draft = isMap(value)
            ? getPlugin('MapSet').proxyMap_(value, parent)
            : isSet(value)
              ? getPlugin('MapSet').proxySet_(value, parent)
              : (function createProxyProxy(base, parent) {
                  const isArray = Array.isArray(base),
                    state = {
                      type_: isArray ? 1 : 0,
                      scope_: parent ? parent.scope_ : getCurrentScope(),
                      modified_: !1,
                      finalized_: !1,
                      assigned_: {},
                      parent_: parent,
                      base_: base,
                      draft_: null,
                      copy_: null,
                      revoke_: null,
                      isManual_: !1,
                    }
                  let target = state,
                    traps = objectTraps
                  isArray && ((target = [state]), (traps = arrayTraps))
                  const { revoke, proxy } = Proxy.revocable(target, traps)
                  return (
                    (state.draft_ = proxy),
                    (state.revoke_ = revoke),
                    proxy
                  )
                })(value, parent)
          return (
            (parent ? parent.scope_ : getCurrentScope()).drafts_.push(draft),
            draft
          )
        }
        function currentImpl(value) {
          if (!react_isDraftable(value) || isFrozen(value)) return value
          const state = value[DRAFT_STATE]
          let copy
          if (state) {
            if (!state.modified_) return state.base_
            ;((state.finalized_ = !0),
              (copy = react_shallowCopy(
                value,
                state.scope_.immer_.useStrictShallowCopy_
              )))
          } else copy = react_shallowCopy(value, !0)
          return (
            each(copy, (key, childValue) => {
              react_set(copy, key, currentImpl(childValue))
            }),
            state && (state.finalized_ = !1),
            copy
          )
        }
        var react_immer = new (class {
            constructor(config) {
              ;((this.autoFreeze_ = !0),
                (this.useStrictShallowCopy_ = !1),
                (this.produce = (base, recipe, patchListener) => {
                  if (
                    'function' == typeof base &&
                    'function' != typeof recipe
                  ) {
                    const defaultBase = recipe
                    recipe = base
                    const self = this
                    return function curriedProduce(
                      base2 = defaultBase,
                      ...args
                    ) {
                      return self.produce(base2, (draft) =>
                        recipe.call(this, draft, ...args)
                      )
                    }
                  }
                  let result
                  if (
                    ('function' != typeof recipe && die(6),
                    void 0 !== patchListener &&
                      'function' != typeof patchListener &&
                      die(7),
                    react_isDraftable(base))
                  ) {
                    const scope = enterScope(this),
                      proxy = createProxy(base, void 0)
                    let hasError = !0
                    try {
                      ;((result = recipe(proxy)), (hasError = !1))
                    } finally {
                      hasError ? revokeScope(scope) : leaveScope(scope)
                    }
                    return (
                      usePatchesInScope(scope, patchListener),
                      processResult(result, scope)
                    )
                  }
                  if (!base || 'object' != typeof base) {
                    if (
                      ((result = recipe(base)),
                      void 0 === result && (result = base),
                      result === NOTHING && (result = void 0),
                      this.autoFreeze_ && freeze(result, !0),
                      patchListener)
                    ) {
                      const p = [],
                        ip = []
                      ;(getPlugin('Patches').generateReplacementPatches_(
                        base,
                        result,
                        p,
                        ip
                      ),
                        patchListener(p, ip))
                    }
                    return result
                  }
                  die(1)
                }),
                (this.produceWithPatches = (base, recipe) => {
                  if ('function' == typeof base)
                    return (state, ...args) =>
                      this.produceWithPatches(state, (draft) =>
                        base(draft, ...args)
                      )
                  let patches, inversePatches
                  const result = this.produce(base, recipe, (p, ip) => {
                    ;((patches = p), (inversePatches = ip))
                  })
                  return [result, patches, inversePatches]
                }),
                'boolean' == typeof config?.autoFreeze &&
                  this.setAutoFreeze(config.autoFreeze),
                'boolean' == typeof config?.useStrictShallowCopy &&
                  this.setUseStrictShallowCopy(config.useStrictShallowCopy))
            }
            createDraft(base) {
              ;(react_isDraftable(base) || die(8),
                react_isDraft(base) &&
                  (base = (function react_current(value) {
                    react_isDraft(value) || die(10)
                    return currentImpl(value)
                  })(base)))
              const scope = enterScope(this),
                proxy = createProxy(base, void 0)
              return (
                (proxy[DRAFT_STATE].isManual_ = !0),
                leaveScope(scope),
                proxy
              )
            }
            finishDraft(draft, patchListener) {
              const state = draft && draft[DRAFT_STATE]
              ;(state && state.isManual_) || die(9)
              const { scope_: scope } = state
              return (
                usePatchesInScope(scope, patchListener),
                processResult(void 0, scope)
              )
            }
            setAutoFreeze(value) {
              this.autoFreeze_ = value
            }
            setUseStrictShallowCopy(value) {
              this.useStrictShallowCopy_ = value
            }
            applyPatches(base, patches) {
              let i
              for (i = patches.length - 1; i >= 0; i--) {
                const patch = patches[i]
                if (0 === patch.path.length && 'replace' === patch.op) {
                  base = patch.value
                  break
                }
              }
              i > -1 && (patches = patches.slice(i + 1))
              const applyPatchesImpl = getPlugin('Patches').applyPatches_
              return react_isDraft(base)
                ? applyPatchesImpl(base, patches)
                : this.produce(base, (draft) =>
                    applyPatchesImpl(draft, patches)
                  )
            }
          })(),
          produce = react_immer.produce,
          react_Path =
            (react_immer.produceWithPatches.bind(react_immer),
            react_immer.setAutoFreeze.bind(react_immer),
            react_immer.setUseStrictShallowCopy.bind(react_immer),
            react_immer.applyPatches.bind(react_immer),
            react_immer.createDraft.bind(react_immer),
            react_immer.finishDraft.bind(react_immer),
            {
              ancestors(path) {
                var options =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { reverse = !1 } = options,
                  paths = react_Path.levels(path, options)
                return (paths = reverse ? paths.slice(1) : paths.slice(0, -1))
              },
              common(path, another) {
                for (
                  var common = [], i = 0;
                  i < path.length && i < another.length;
                  i++
                ) {
                  var av = path[i]
                  if (av !== another[i]) break
                  common.push(av)
                }
                return common
              },
              compare(path, another) {
                for (
                  var min = Math.min(path.length, another.length), i = 0;
                  i < min;
                  i++
                ) {
                  if (path[i] < another[i]) return -1
                  if (path[i] > another[i]) return 1
                }
                return 0
              },
              endsAfter(path, another) {
                var i = path.length - 1,
                  as = path.slice(0, i),
                  bs = another.slice(0, i),
                  av = path[i],
                  bv = another[i]
                return react_Path.equals(as, bs) && av > bv
              },
              endsAt(path, another) {
                var i = path.length,
                  as = path.slice(0, i),
                  bs = another.slice(0, i)
                return react_Path.equals(as, bs)
              },
              endsBefore(path, another) {
                var i = path.length - 1,
                  as = path.slice(0, i),
                  bs = another.slice(0, i),
                  av = path[i],
                  bv = another[i]
                return react_Path.equals(as, bs) && av < bv
              },
              equals: (path, another) =>
                path.length === another.length &&
                path.every((n, i) => n === another[i]),
              hasPrevious: (path) => path[path.length - 1] > 0,
              isAfter: (path, another) =>
                1 === react_Path.compare(path, another),
              isAncestor: (path, another) =>
                path.length < another.length &&
                0 === react_Path.compare(path, another),
              isBefore: (path, another) =>
                -1 === react_Path.compare(path, another),
              isChild: (path, another) =>
                path.length === another.length + 1 &&
                0 === react_Path.compare(path, another),
              isCommon: (path, another) =>
                path.length <= another.length &&
                0 === react_Path.compare(path, another),
              isDescendant: (path, another) =>
                path.length > another.length &&
                0 === react_Path.compare(path, another),
              isParent: (path, another) =>
                path.length + 1 === another.length &&
                0 === react_Path.compare(path, another),
              isPath: (value) =>
                Array.isArray(value) &&
                (0 === value.length || 'number' == typeof value[0]),
              isSibling(path, another) {
                if (path.length !== another.length) return !1
                var as = path.slice(0, -1),
                  bs = another.slice(0, -1)
                return (
                  path[path.length - 1] !== another[another.length - 1] &&
                  react_Path.equals(as, bs)
                )
              },
              levels(path) {
                for (
                  var options =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    { reverse = !1 } = options,
                    list = [],
                    i = 0;
                  i <= path.length;
                  i++
                )
                  list.push(path.slice(0, i))
                return (reverse && list.reverse(), list)
              },
              next(path) {
                if (0 === path.length)
                  throw new Error(
                    'Cannot get the next path of a root path ['.concat(
                      path,
                      '], because it has no next index.'
                    )
                  )
                var last = path[path.length - 1]
                return path.slice(0, -1).concat(last + 1)
              },
              operationCanTransformPath(operation) {
                switch (operation.type) {
                  case 'insert_node':
                  case 'remove_node':
                  case 'merge_node':
                  case 'split_node':
                  case 'move_node':
                    return !0
                  default:
                    return !1
                }
              },
              parent(path) {
                if (0 === path.length)
                  throw new Error(
                    'Cannot get the parent path of the root path ['.concat(
                      path,
                      '].'
                    )
                  )
                return path.slice(0, -1)
              },
              previous(path) {
                if (0 === path.length)
                  throw new Error(
                    'Cannot get the previous path of a root path ['.concat(
                      path,
                      '], because it has no previous index.'
                    )
                  )
                var last = path[path.length - 1]
                if (last <= 0)
                  throw new Error(
                    'Cannot get the previous path of a first child path ['.concat(
                      path,
                      '] because it would result in a negative index.'
                    )
                  )
                return path.slice(0, -1).concat(last - 1)
              },
              relative(path, ancestor) {
                if (
                  !react_Path.isAncestor(ancestor, path) &&
                  !react_Path.equals(path, ancestor)
                )
                  throw new Error(
                    'Cannot get the relative path of ['
                      .concat(path, '] inside ancestor [')
                      .concat(
                        ancestor,
                        '], because it is not above or equal to the path.'
                      )
                  )
                return path.slice(ancestor.length)
              },
              transform(path, operation) {
                var options =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                if (!path) return null
                var p = [...path],
                  { affinity = 'forward' } = options
                if (0 === path.length) return p
                switch (operation.type) {
                  case 'insert_node':
                    var { path: op } = operation
                    ;(react_Path.equals(op, p) ||
                      react_Path.endsBefore(op, p) ||
                      react_Path.isAncestor(op, p)) &&
                      (p[op.length - 1] += 1)
                    break
                  case 'remove_node':
                    var { path: _op } = operation
                    if (
                      react_Path.equals(_op, p) ||
                      react_Path.isAncestor(_op, p)
                    )
                      return null
                    react_Path.endsBefore(_op, p) && (p[_op.length - 1] -= 1)
                    break
                  case 'merge_node':
                    var { path: _op2, position } = operation
                    react_Path.equals(_op2, p) || react_Path.endsBefore(_op2, p)
                      ? (p[_op2.length - 1] -= 1)
                      : react_Path.isAncestor(_op2, p) &&
                        ((p[_op2.length - 1] -= 1),
                        (p[_op2.length] += position))
                    break
                  case 'split_node':
                    var { path: _op3, position: _position } = operation
                    if (react_Path.equals(_op3, p)) {
                      if ('forward' === affinity) p[p.length - 1] += 1
                      else if ('backward' !== affinity) return null
                    } else
                      react_Path.endsBefore(_op3, p)
                        ? (p[_op3.length - 1] += 1)
                        : react_Path.isAncestor(_op3, p) &&
                          path[_op3.length] >= _position &&
                          ((p[_op3.length - 1] += 1),
                          (p[_op3.length] -= _position))
                    break
                  case 'move_node':
                    var { path: _op4, newPath: onp } = operation
                    if (react_Path.equals(_op4, onp)) return p
                    if (
                      react_Path.isAncestor(_op4, p) ||
                      react_Path.equals(_op4, p)
                    ) {
                      var copy = onp.slice()
                      return (
                        react_Path.endsBefore(_op4, onp) &&
                          _op4.length < onp.length &&
                          (copy[_op4.length - 1] -= 1),
                        copy.concat(p.slice(_op4.length))
                      )
                    }
                    react_Path.isSibling(_op4, onp) &&
                    (react_Path.isAncestor(onp, p) || react_Path.equals(onp, p))
                      ? react_Path.endsBefore(_op4, p)
                        ? (p[_op4.length - 1] -= 1)
                        : (p[_op4.length - 1] += 1)
                      : react_Path.endsBefore(onp, p) ||
                          react_Path.equals(onp, p) ||
                          react_Path.isAncestor(onp, p)
                        ? (react_Path.endsBefore(_op4, p) &&
                            (p[_op4.length - 1] -= 1),
                          (p[onp.length - 1] += 1))
                        : react_Path.endsBefore(_op4, p) &&
                          (react_Path.equals(onp, p) &&
                            (p[onp.length - 1] += 1),
                          (p[_op4.length - 1] -= 1))
                }
                return p
              },
            })
        function react_typeof(o) {
          return (
            (react_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o2) {
                    return typeof o2
                  }
                : function (o2) {
                    return o2 &&
                      'function' == typeof Symbol &&
                      o2.constructor === Symbol &&
                      o2 !== Symbol.prototype
                      ? 'symbol'
                      : typeof o2
                  }),
            react_typeof(o)
          )
        }
        function react_toPropertyKey(arg) {
          var key = (function react_toPrimitive(input, hint) {
            if ('object' !== react_typeof(input) || null === input) return input
            var prim = input[Symbol.toPrimitive]
            if (void 0 !== prim) {
              var res = prim.call(input, hint || 'default')
              if ('object' !== react_typeof(res)) return res
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === hint ? String : Number)(input)
          })(arg, 'string')
          return 'symbol' === react_typeof(key) ? key : String(key)
        }
        function react_defineProperty(obj, key, value) {
          return (
            (key = react_toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          )
        }
        function ownKeys$e(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$e(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$e(Object(t), !0).forEach(function (r2) {
                  react_defineProperty(e, r2, t[r2])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$e(Object(t)).forEach(function (r2) {
                    Object.defineProperty(
                      e,
                      r2,
                      Object.getOwnPropertyDescriptor(t, r2)
                    )
                  })
          }
          return e
        }
        var insertChildren = function insertChildren2(xs, index) {
            for (
              var _len = arguments.length,
                newValues = new Array(_len > 2 ? _len - 2 : 0),
                _key = 2;
              _key < _len;
              _key++
            )
              newValues[_key - 2] = arguments[_key]
            return [...xs.slice(0, index), ...newValues, ...xs.slice(index)]
          },
          replaceChildren = function replaceChildren2(xs, index, removeCount) {
            for (
              var _len2 = arguments.length,
                newValues = new Array(_len2 > 3 ? _len2 - 3 : 0),
                _key2 = 3;
              _key2 < _len2;
              _key2++
            )
              newValues[_key2 - 3] = arguments[_key2]
            return [
              ...xs.slice(0, index),
              ...newValues,
              ...xs.slice(index + removeCount),
            ]
          },
          removeChildren = replaceChildren,
          modifyDescendant = (editor, path, f) => {
            if (0 === path.length) throw new Error('Cannot modify the editor')
            for (
              var node = Node2.get(editor, path),
                slicedPath = path.slice(),
                modifiedNode = f(node);
              slicedPath.length > 1;

            ) {
              var _index = slicedPath.pop(),
                ancestorNode = Node2.get(editor, slicedPath)
              modifiedNode = _objectSpread$e(
                _objectSpread$e({}, ancestorNode),
                {},
                {
                  children: replaceChildren(
                    ancestorNode.children,
                    _index,
                    1,
                    modifiedNode
                  ),
                }
              )
            }
            var index = slicedPath.pop()
            editor.children = replaceChildren(
              editor.children,
              index,
              1,
              modifiedNode
            )
          },
          modifyChildren = (editor, path, f) => {
            0 === path.length
              ? (editor.children = f(editor.children))
              : modifyDescendant(editor, path, (node) => {
                  if (react_Text.isText(node))
                    throw new Error(
                      'Cannot get the element at path ['
                        .concat(path, '] because it refers to a leaf node: ')
                        .concat(Scrubber.stringify(node))
                    )
                  return _objectSpread$e(
                    _objectSpread$e({}, node),
                    {},
                    { children: f(node.children) }
                  )
                })
          },
          modifyLeaf = (editor, path, f) =>
            modifyDescendant(editor, path, (node) => {
              if (!react_Text.isText(node))
                throw new Error(
                  'Cannot get the leaf node at path ['
                    .concat(path, '] because it refers to a non-leaf node: ')
                    .concat(Scrubber.stringify(node))
                )
              return f(node)
            }),
          GeneralTransforms = {
            transform(editor, op) {
              var transformSelection = !1
              switch (op.type) {
                case 'insert_node':
                  var { path, node } = op
                  ;(modifyChildren(
                    editor,
                    react_Path.parent(path),
                    (children) => {
                      var index2 = path[path.length - 1]
                      if (index2 > children.length)
                        throw new Error(
                          'Cannot apply an "insert_node" operation at path ['.concat(
                            path,
                            '] because the destination is past the end of the node.'
                          )
                        )
                      return insertChildren(children, index2, node)
                    }
                  ),
                    (transformSelection = !0))
                  break
                case 'insert_text':
                  var { path: _path, offset, text } = op
                  if (0 === text.length) break
                  ;(modifyLeaf(editor, _path, (node2) => {
                    var before = node2.text.slice(0, offset),
                      after = node2.text.slice(offset)
                    return _objectSpread$e(
                      _objectSpread$e({}, node2),
                      {},
                      { text: before + text + after }
                    )
                  }),
                    (transformSelection = !0))
                  break
                case 'merge_node':
                  var { path: _path2 } = op,
                    index = _path2[_path2.length - 1],
                    prevPath = react_Path.previous(_path2),
                    prevIndex = prevPath[prevPath.length - 1]
                  ;(modifyChildren(
                    editor,
                    react_Path.parent(_path2),
                    (children) => {
                      var newNode,
                        node2 = children[index],
                        prev2 = children[prevIndex]
                      if (react_Text.isText(node2) && react_Text.isText(prev2))
                        newNode = _objectSpread$e(
                          _objectSpread$e({}, prev2),
                          {},
                          { text: prev2.text + node2.text }
                        )
                      else {
                        if (
                          react_Text.isText(node2) ||
                          react_Text.isText(prev2)
                        )
                          throw new Error(
                            'Cannot apply a "merge_node" operation at path ['
                              .concat(
                                _path2,
                                '] to nodes of different interfaces: '
                              )
                              .concat(Scrubber.stringify(node2), ' ')
                              .concat(Scrubber.stringify(prev2))
                          )
                        newNode = _objectSpread$e(
                          _objectSpread$e({}, prev2),
                          {},
                          { children: prev2.children.concat(node2.children) }
                        )
                      }
                      return replaceChildren(children, prevIndex, 2, newNode)
                    }
                  ),
                    (transformSelection = !0))
                  break
                case 'move_node':
                  var { path: _path3, newPath } = op,
                    _index2 = _path3[_path3.length - 1]
                  if (react_Path.isAncestor(_path3, newPath))
                    throw new Error(
                      'Cannot move a path ['
                        .concat(_path3, '] to new path [')
                        .concat(
                          newPath,
                          '] because the destination is inside itself.'
                        )
                    )
                  var _node = Node2.get(editor, _path3)
                  modifyChildren(
                    editor,
                    react_Path.parent(_path3),
                    (children) => removeChildren(children, _index2, 1)
                  )
                  var truePath = react_Path.transform(_path3, op),
                    newIndex = truePath[truePath.length - 1]
                  ;(modifyChildren(
                    editor,
                    react_Path.parent(truePath),
                    (children) => insertChildren(children, newIndex, _node)
                  ),
                    (transformSelection = !0))
                  break
                case 'remove_node':
                  var { path: _path4 } = op,
                    _index3 = _path4[_path4.length - 1]
                  if (
                    (modifyChildren(
                      editor,
                      react_Path.parent(_path4),
                      (children) => removeChildren(children, _index3, 1)
                    ),
                    editor.selection)
                  ) {
                    var selection = _objectSpread$e({}, editor.selection)
                    for (var [point, key] of react_Range.points(selection)) {
                      var result = react_Point.transform(point, op)
                      if (null != selection && null != result)
                        selection[key] = result
                      else {
                        var prev = void 0,
                          next = void 0
                        for (var [n, p] of Node2.texts(editor)) {
                          if (-1 !== react_Path.compare(p, _path4)) {
                            next = [n, p]
                            break
                          }
                          prev = [n, p]
                        }
                        var preferNext = !1
                        ;(prev &&
                          next &&
                          (preferNext = react_Path.equals(next[1], _path4)
                            ? !react_Path.hasPrevious(next[1])
                            : react_Path.common(prev[1], _path4).length <
                              react_Path.common(next[1], _path4).length),
                          prev && !preferNext
                            ? (selection[key] = {
                                path: prev[1],
                                offset: prev[0].text.length,
                              })
                            : next
                              ? (selection[key] = { path: next[1], offset: 0 })
                              : (selection = null))
                      }
                    }
                    editor.selection = selection
                  }
                  break
                case 'remove_text':
                  var { path: _path5, offset: _offset, text: _text } = op
                  if (0 === _text.length) break
                  ;(modifyLeaf(editor, _path5, (node2) => {
                    var before = node2.text.slice(0, _offset),
                      after = node2.text.slice(_offset + _text.length)
                    return _objectSpread$e(
                      _objectSpread$e({}, node2),
                      {},
                      { text: before + after }
                    )
                  }),
                    (transformSelection = !0))
                  break
                case 'set_node':
                  var { path: _path6, properties, newProperties } = op
                  if (0 === _path6.length)
                    throw new Error('Cannot set properties on the root node!')
                  modifyDescendant(editor, _path6, (node2) => {
                    var newNode = _objectSpread$e({}, node2)
                    for (var _key3 in newProperties) {
                      if ('children' === _key3 || 'text' === _key3)
                        throw new Error(
                          'Cannot set the "'.concat(
                            _key3,
                            '" property of nodes!'
                          )
                        )
                      var value2 = newProperties[_key3]
                      null == value2
                        ? delete newNode[_key3]
                        : (newNode[_key3] = value2)
                    }
                    for (var _key4 in properties)
                      newProperties.hasOwnProperty(_key4) ||
                        delete newNode[_key4]
                    return newNode
                  })
                  break
                case 'set_selection':
                  var { newProperties: _newProperties } = op
                  if (null == _newProperties) {
                    editor.selection = null
                    break
                  }
                  if (null == editor.selection) {
                    if (!react_Range.isRange(_newProperties))
                      throw new Error(
                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                          Scrubber.stringify(_newProperties),
                          ' when there is no current selection.'
                        )
                      )
                    editor.selection = _objectSpread$e({}, _newProperties)
                    break
                  }
                  var _selection = _objectSpread$e({}, editor.selection)
                  for (var _key5 in _newProperties) {
                    var value = _newProperties[_key5]
                    if (null == value) {
                      if ('anchor' === _key5 || 'focus' === _key5)
                        throw new Error(
                          'Cannot remove the "'.concat(
                            _key5,
                            '" selection property'
                          )
                        )
                      delete _selection[_key5]
                    } else _selection[_key5] = value
                  }
                  editor.selection = _selection
                  break
                case 'split_node':
                  var { path: _path7, position, properties: _properties } = op,
                    _index4 = _path7[_path7.length - 1]
                  if (0 === _path7.length)
                    throw new Error(
                      'Cannot apply a "split_node" operation at path ['.concat(
                        _path7,
                        '] because the root node cannot be split.'
                      )
                    )
                  ;(modifyChildren(
                    editor,
                    react_Path.parent(_path7),
                    (children) => {
                      var newNode,
                        nextNode,
                        node2 = children[_index4]
                      if (react_Text.isText(node2)) {
                        var before = node2.text.slice(0, position),
                          after = node2.text.slice(position)
                        ;((newNode = _objectSpread$e(
                          _objectSpread$e({}, node2),
                          {},
                          { text: before }
                        )),
                          (nextNode = _objectSpread$e(
                            _objectSpread$e({}, _properties),
                            {},
                            { text: after }
                          )))
                      } else {
                        var _before = node2.children.slice(0, position),
                          _after = node2.children.slice(position)
                        ;((newNode = _objectSpread$e(
                          _objectSpread$e({}, node2),
                          {},
                          { children: _before }
                        )),
                          (nextNode = _objectSpread$e(
                            _objectSpread$e({}, _properties),
                            {},
                            { children: _after }
                          )))
                      }
                      return replaceChildren(
                        children,
                        _index4,
                        1,
                        newNode,
                        nextNode
                      )
                    }
                  ),
                    (transformSelection = !0))
              }
              if (transformSelection && editor.selection) {
                var _selection2 = _objectSpread$e({}, editor.selection)
                for (var [_point, _key6] of react_Range.points(_selection2))
                  _selection2[_key6] = react_Point.transform(_point, op)
                editor.selection = _selection2
              }
            },
          },
          NodeTransforms = {
            insertNodes(editor, nodes, options) {
              editor.insertNodes(nodes, options)
            },
            liftNodes(editor, options) {
              editor.liftNodes(options)
            },
            mergeNodes(editor, options) {
              editor.mergeNodes(options)
            },
            moveNodes(editor, options) {
              editor.moveNodes(options)
            },
            removeNodes(editor, options) {
              editor.removeNodes(options)
            },
            setNodes(editor, props, options) {
              editor.setNodes(props, options)
            },
            splitNodes(editor, options) {
              editor.splitNodes(options)
            },
            unsetNodes(editor, props, options) {
              editor.unsetNodes(props, options)
            },
            unwrapNodes(editor, options) {
              editor.unwrapNodes(options)
            },
            wrapNodes(editor, element, options) {
              editor.wrapNodes(element, options)
            },
          },
          SelectionTransforms = {
            collapse(editor, options) {
              editor.collapse(options)
            },
            deselect(editor) {
              editor.deselect()
            },
            move(editor, options) {
              editor.move(options)
            },
            select(editor, target) {
              editor.select(target)
            },
            setPoint(editor, props, options) {
              editor.setPoint(props, options)
            },
            setSelection(editor, props) {
              editor.setSelection(props)
            },
          },
          isObject = (value) => 'object' == typeof value && null !== value,
          isDeepEqual = (node, another) => {
            for (var key in node) {
              var a = node[key],
                b = another[key]
              if (Array.isArray(a) && Array.isArray(b)) {
                if (a.length !== b.length) return !1
                for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return !1
              } else if (isObject(a) && isObject(b)) {
                if (!isDeepEqual(a, b)) return !1
              } else if (a !== b) return !1
            }
            for (var _key in another)
              if (void 0 === node[_key] && void 0 !== another[_key]) return !1
            return !0
          }
        function react_objectWithoutProperties(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = (function react_objectWithoutPropertiesLoose(
              source,
              excluded
            ) {
              if (null == source) return {}
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source)
              for (i = 0; i < sourceKeys.length; i++)
                ((key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]))
              return target
            })(source, excluded)
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
            for (i = 0; i < sourceSymbolKeys.length; i++)
              ((key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key])))
          }
          return target
        }
        var _excluded$4 = ['anchor', 'focus']
        function ownKeys$d(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        var react_Range = {
            edges(range) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse = !1 } = options,
                { anchor, focus } = range
              return react_Range.isBackward(range) === reverse
                ? [anchor, focus]
                : [focus, anchor]
            },
            end(range) {
              var [, end] = react_Range.edges(range)
              return end
            },
            equals: (range, another) =>
              react_Point.equals(range.anchor, another.anchor) &&
              react_Point.equals(range.focus, another.focus),
            surrounds(range, target) {
              var intersectionRange = react_Range.intersection(range, target)
              return (
                !!intersectionRange &&
                react_Range.equals(intersectionRange, target)
              )
            },
            includes(range, target) {
              if (react_Range.isRange(target)) {
                if (
                  react_Range.includes(range, target.anchor) ||
                  react_Range.includes(range, target.focus)
                )
                  return !0
                var [rs, re] = react_Range.edges(range),
                  [ts, te] = react_Range.edges(target)
                return (
                  react_Point.isBefore(rs, ts) && react_Point.isAfter(re, te)
                )
              }
              var [start, end] = react_Range.edges(range),
                isAfterStart = !1,
                isBeforeEnd = !1
              return (
                react_Point.isPoint(target)
                  ? ((isAfterStart = react_Point.compare(target, start) >= 0),
                    (isBeforeEnd = react_Point.compare(target, end) <= 0))
                  : ((isAfterStart =
                      react_Path.compare(target, start.path) >= 0),
                    (isBeforeEnd = react_Path.compare(target, end.path) <= 0)),
                isAfterStart && isBeforeEnd
              )
            },
            intersection(range, another) {
              var rest = react_objectWithoutProperties(range, _excluded$4),
                [s1, e1] = react_Range.edges(range),
                [s2, e2] = react_Range.edges(another),
                start = react_Point.isBefore(s1, s2) ? s2 : s1,
                end = react_Point.isBefore(e1, e2) ? e1 : e2
              return react_Point.isBefore(end, start)
                ? null
                : (function _objectSpread$d(e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {}
                      r % 2
                        ? ownKeys$d(Object(t), !0).forEach(function (r2) {
                            react_defineProperty(e, r2, t[r2])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t)
                            )
                          : ownKeys$d(Object(t)).forEach(function (r2) {
                              Object.defineProperty(
                                e,
                                r2,
                                Object.getOwnPropertyDescriptor(t, r2)
                              )
                            })
                    }
                    return e
                  })({ anchor: start, focus: end }, rest)
            },
            isBackward(range) {
              var { anchor, focus } = range
              return react_Point.isAfter(anchor, focus)
            },
            isCollapsed(range) {
              var { anchor, focus } = range
              return react_Point.equals(anchor, focus)
            },
            isExpanded: (range) => !react_Range.isCollapsed(range),
            isForward: (range) => !react_Range.isBackward(range),
            isRange: (value) =>
              isObject(value) &&
              react_Point.isPoint(value.anchor) &&
              react_Point.isPoint(value.focus),
            *points(range) {
              ;(yield [range.anchor, 'anchor'], yield [range.focus, 'focus'])
            },
            start(range) {
              var [start] = react_Range.edges(range)
              return start
            },
            transform(range, op) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              if (null === range) return null
              var affinityAnchor,
                affinityFocus,
                { affinity = 'inward' } = options
              if ('inward' === affinity) {
                var isCollapsed = react_Range.isCollapsed(range)
                react_Range.isForward(range)
                  ? ((affinityAnchor = 'forward'),
                    (affinityFocus = isCollapsed ? affinityAnchor : 'backward'))
                  : ((affinityAnchor = 'backward'),
                    (affinityFocus = isCollapsed ? affinityAnchor : 'forward'))
              } else
                'outward' === affinity
                  ? react_Range.isForward(range)
                    ? ((affinityAnchor = 'backward'),
                      (affinityFocus = 'forward'))
                    : ((affinityAnchor = 'forward'),
                      (affinityFocus = 'backward'))
                  : ((affinityAnchor = affinity), (affinityFocus = affinity))
              var anchor = react_Point.transform(range.anchor, op, {
                  affinity: affinityAnchor,
                }),
                focus = react_Point.transform(range.focus, op, {
                  affinity: affinityFocus,
                })
              return anchor && focus ? { anchor, focus } : null
            },
          },
          isElement = function isElement2(value) {
            var { deep = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return (
              !!isObject(value) &&
              'function' != typeof value.apply &&
              (deep
                ? Node2.isNodeList(value.children)
                : Array.isArray(value.children))
            )
          },
          react_Element = {
            isAncestor(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                isObject(value) && Node2.isNodeList(value.children, { deep })
              )
            },
            isElement,
            isElementList(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                Array.isArray(value) &&
                value.every((val) => react_Element.isElement(val, { deep }))
              )
            },
            isElementProps: (props) => void 0 !== props.children,
            isElementType: function isElementType(value, elementVal) {
              var elementKey =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'type'
              return isElement(value) && value[elementKey] === elementVal
            },
            matches(element, props) {
              for (var key in props)
                if ('children' !== key && element[key] !== props[key]) return !1
              return !0
            },
          },
          _excluded$3 = ['children'],
          _excluded2$3 = ['text'],
          Node2 = {
            ancestor(root, path) {
              var node = Node2.get(root, path)
              if (react_Text.isText(node))
                throw new Error(
                  'Cannot get the ancestor node at path ['
                    .concat(
                      path,
                      '] because it refers to a text node instead: '
                    )
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            ancestors(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (var p of react_Path.ancestors(path, options)) {
                  var entry = [Node2.ancestor(root, p), p]
                  yield entry
                }
              })()
            },
            child(root, index) {
              if (react_Text.isText(root))
                throw new Error(
                  'Cannot get the child of a text node: '.concat(
                    Scrubber.stringify(root)
                  )
                )
              var c = root.children[index]
              if (null == c)
                throw new Error(
                  'Cannot get child at index `'
                    .concat(index, '` in node: ')
                    .concat(Scrubber.stringify(root))
                )
              return c
            },
            children(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (
                  var { reverse = !1 } = options,
                    ancestor = Node2.ancestor(root, path),
                    { children } = ancestor,
                    index = reverse ? children.length - 1 : 0;
                  reverse ? index >= 0 : index < children.length;

                ) {
                  var child = Node2.child(ancestor, index),
                    childPath = path.concat(index)
                  ;(yield [child, childPath],
                    (index = reverse ? index - 1 : index + 1))
                }
              })()
            },
            common(root, path, another) {
              var p = react_Path.common(path, another)
              return [Node2.get(root, p), p]
            },
            descendant(root, path) {
              var node = Node2.get(root, path)
              if (react_Editor.isEditor(node))
                throw new Error(
                  'Cannot get the descendant node at path ['
                    .concat(
                      path,
                      '] because it refers to the root editor node instead: '
                    )
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            descendants(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node2.nodes(root, options))
                  0 !== path.length && (yield [node, path])
              })()
            },
            elements(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node2.nodes(root, options))
                  react_Element.isElement(node) && (yield [node, path])
              })()
            },
            extractProps: (node) =>
              react_Element.isAncestor(node)
                ? react_objectWithoutProperties(node, _excluded$3)
                : react_objectWithoutProperties(node, _excluded2$3),
            first(root, path) {
              for (
                var p = path.slice(), n = Node2.get(root, p);
                n && !react_Text.isText(n) && 0 !== n.children.length;

              )
                ((n = n.children[0]), p.push(0))
              return [n, p]
            },
            fragment(root, range) {
              if (react_Text.isText(root))
                throw new Error(
                  'Cannot get a fragment starting from a root text node: '.concat(
                    Scrubber.stringify(root)
                  )
                )
              var newRoot = produce({ children: root.children }, (r) => {
                var [start, end] = react_Range.edges(range),
                  nodeEntries = Node2.nodes(r, {
                    reverse: !0,
                    pass: (_ref) => {
                      var [, path2] = _ref
                      return !react_Range.includes(range, path2)
                    },
                  })
                for (var [, path] of nodeEntries) {
                  if (!react_Range.includes(range, path)) {
                    var parent = Node2.parent(r, path),
                      index = path[path.length - 1]
                    parent.children.splice(index, 1)
                  }
                  if (react_Path.equals(path, end.path)) {
                    var leaf = Node2.leaf(r, path)
                    leaf.text = leaf.text.slice(0, end.offset)
                  }
                  if (react_Path.equals(path, start.path)) {
                    var _leaf = Node2.leaf(r, path)
                    _leaf.text = _leaf.text.slice(start.offset)
                  }
                }
                react_Editor.isEditor(r) && (r.selection = null)
              })
              return newRoot.children
            },
            get(root, path) {
              var node = Node2.getIf(root, path)
              if (void 0 === node)
                throw new Error(
                  'Cannot find a descendant at path ['
                    .concat(path, '] in node: ')
                    .concat(Scrubber.stringify(root))
                )
              return node
            },
            getIf(root, path) {
              for (var node = root, i = 0; i < path.length; i++) {
                var p = path[i]
                if (react_Text.isText(node) || !node.children[p]) return
                node = node.children[p]
              }
              return node
            },
            has(root, path) {
              for (var node = root, i = 0; i < path.length; i++) {
                var p = path[i]
                if (react_Text.isText(node) || !node.children[p]) return !1
                node = node.children[p]
              }
              return !0
            },
            isNode(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                react_Text.isText(value) ||
                react_Element.isElement(value, { deep }) ||
                react_Editor.isEditor(value, { deep })
              )
            },
            isNodeList(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                Array.isArray(value) &&
                value.every((val) => Node2.isNode(val, { deep }))
              )
            },
            last(root, path) {
              for (
                var p = path.slice(), n = Node2.get(root, p);
                n && !react_Text.isText(n) && 0 !== n.children.length;

              ) {
                var i = n.children.length - 1
                ;((n = n.children[i]), p.push(i))
              }
              return [n, p]
            },
            leaf(root, path) {
              var node = Node2.get(root, path)
              if (!react_Text.isText(node))
                throw new Error(
                  'Cannot get the leaf node at path ['
                    .concat(path, '] because it refers to a non-leaf node: ')
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            levels(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (var p of react_Path.levels(path, options)) {
                  var n = Node2.get(root, p)
                  yield [n, p]
                }
              })()
            },
            matches: (node, props) =>
              (react_Element.isElement(node) &&
                react_Element.isElementProps(props) &&
                react_Element.matches(node, props)) ||
              (react_Text.isText(node) &&
                react_Text.isTextProps(props) &&
                react_Text.matches(node, props)),
            nodes(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (
                  var { pass, reverse = !1 } = options,
                    { from = [], to } = options,
                    visited = new Set(),
                    p = [],
                    n = root;
                  !to ||
                  !(reverse
                    ? react_Path.isBefore(p, to)
                    : react_Path.isAfter(p, to));

                )
                  if (
                    (visited.has(n) || (yield [n, p]),
                    visited.has(n) ||
                      react_Text.isText(n) ||
                      0 === n.children.length ||
                      (null != pass && !1 !== pass([n, p])))
                  ) {
                    if (0 === p.length) break
                    if (!reverse) {
                      var newPath = react_Path.next(p)
                      if (Node2.has(root, newPath)) {
                        ;((p = newPath), (n = Node2.get(root, p)))
                        continue
                      }
                    }
                    if (reverse && 0 !== p[p.length - 1])
                      ((p = react_Path.previous(p)), (n = Node2.get(root, p)))
                    else
                      ((p = react_Path.parent(p)),
                        (n = Node2.get(root, p)),
                        visited.add(n))
                  } else {
                    visited.add(n)
                    var nextIndex = reverse ? n.children.length - 1 : 0
                    ;(react_Path.isAncestor(p, from) &&
                      (nextIndex = from[p.length]),
                      (p = p.concat(nextIndex)),
                      (n = Node2.get(root, p)))
                  }
              })()
            },
            parent(root, path) {
              var parentPath = react_Path.parent(path),
                p = Node2.get(root, parentPath)
              if (react_Text.isText(p))
                throw new Error(
                  'Cannot get the parent of path ['.concat(
                    path,
                    '] because it does not exist in the root.'
                  )
                )
              return p
            },
            string: (node) =>
              react_Text.isText(node)
                ? node.text
                : node.children.map(Node2.string).join(''),
            texts(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node2.nodes(root, options))
                  react_Text.isText(node) && (yield [node, path])
              })()
            },
          }
        function ownKeys$c(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$c(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$c(Object(t), !0).forEach(function (r2) {
                  react_defineProperty(e, r2, t[r2])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$c(Object(t)).forEach(function (r2) {
                    Object.defineProperty(
                      e,
                      r2,
                      Object.getOwnPropertyDescriptor(t, r2)
                    )
                  })
          }
          return e
        }
        var react_Operation = {
            isNodeOperation: (value) =>
              react_Operation.isOperation(value) &&
              value.type.endsWith('_node'),
            isOperation(value) {
              if (!isObject(value)) return !1
              switch (value.type) {
                case 'insert_node':
                case 'remove_node':
                  return (
                    react_Path.isPath(value.path) && Node2.isNode(value.node)
                  )
                case 'insert_text':
                case 'remove_text':
                  return (
                    'number' == typeof value.offset &&
                    'string' == typeof value.text &&
                    react_Path.isPath(value.path)
                  )
                case 'merge_node':
                  return (
                    'number' == typeof value.position &&
                    react_Path.isPath(value.path) &&
                    isObject(value.properties)
                  )
                case 'move_node':
                  return (
                    react_Path.isPath(value.path) &&
                    react_Path.isPath(value.newPath)
                  )
                case 'set_node':
                  return (
                    react_Path.isPath(value.path) &&
                    isObject(value.properties) &&
                    isObject(value.newProperties)
                  )
                case 'set_selection':
                  return (
                    (null === value.properties &&
                      react_Range.isRange(value.newProperties)) ||
                    (null === value.newProperties &&
                      react_Range.isRange(value.properties)) ||
                    (isObject(value.properties) &&
                      isObject(value.newProperties))
                  )
                case 'split_node':
                  return (
                    react_Path.isPath(value.path) &&
                    'number' == typeof value.position &&
                    isObject(value.properties)
                  )
                default:
                  return !1
              }
            },
            isOperationList: (value) =>
              Array.isArray(value) &&
              value.every((val) => react_Operation.isOperation(val)),
            isSelectionOperation: (value) =>
              react_Operation.isOperation(value) &&
              value.type.endsWith('_selection'),
            isTextOperation: (value) =>
              react_Operation.isOperation(value) &&
              value.type.endsWith('_text'),
            inverse(op) {
              switch (op.type) {
                case 'insert_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'remove_node' }
                  )
                case 'insert_text':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'remove_text' }
                  )
                case 'merge_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'split_node', path: react_Path.previous(op.path) }
                  )
                case 'move_node':
                  var { newPath, path } = op
                  if (react_Path.equals(newPath, path)) return op
                  if (react_Path.isSibling(path, newPath))
                    return _objectSpread$c(
                      _objectSpread$c({}, op),
                      {},
                      { path: newPath, newPath: path }
                    )
                  var inversePath = react_Path.transform(path, op),
                    inverseNewPath = react_Path.transform(
                      react_Path.next(path),
                      op
                    )
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { path: inversePath, newPath: inverseNewPath }
                  )
                case 'remove_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'insert_node' }
                  )
                case 'remove_text':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'insert_text' }
                  )
                case 'set_node':
                  var { properties, newProperties } = op
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { properties: newProperties, newProperties: properties }
                  )
                case 'set_selection':
                  var {
                    properties: _properties,
                    newProperties: _newProperties,
                  } = op
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    null == _properties
                      ? { properties: _newProperties, newProperties: null }
                      : null == _newProperties
                        ? { properties: null, newProperties: _properties }
                        : {
                            properties: _newProperties,
                            newProperties: _properties,
                          }
                  )
                case 'split_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'merge_node', path: react_Path.next(op.path) }
                  )
              }
            },
          },
          react_Editor = {
            above: (editor, options) => editor.above(options),
            addMark(editor, key, value) {
              editor.addMark(key, value)
            },
            after: (editor, at, options) => editor.after(at, options),
            before: (editor, at, options) => editor.before(at, options),
            deleteBackward(editor) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { unit = 'character' } = options
              editor.deleteBackward(unit)
            },
            deleteForward(editor) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { unit = 'character' } = options
              editor.deleteForward(unit)
            },
            deleteFragment(editor, options) {
              editor.deleteFragment(options)
            },
            edges: (editor, at) => editor.edges(at),
            elementReadOnly(editor) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return editor.elementReadOnly(options)
            },
            end: (editor, at) => editor.end(at),
            first: (editor, at) => editor.first(at),
            fragment: (editor, at) => editor.fragment(at),
            hasBlocks: (editor, element) => editor.hasBlocks(element),
            hasInlines: (editor, element) => editor.hasInlines(element),
            hasPath: (editor, path) => editor.hasPath(path),
            hasTexts: (editor, element) => editor.hasTexts(element),
            insertBreak(editor) {
              editor.insertBreak()
            },
            insertFragment(editor, fragment, options) {
              editor.insertFragment(fragment, options)
            },
            insertNode(editor, node) {
              editor.insertNode(node)
            },
            insertSoftBreak(editor) {
              editor.insertSoftBreak()
            },
            insertText(editor, text) {
              editor.insertText(text)
            },
            isBlock: (editor, value) => editor.isBlock(value),
            isEdge: (editor, point, at) => editor.isEdge(point, at),
            isEditor: (value) =>
              (function isEditor2(value) {
                var { deep = !1 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                return (
                  !!isObject(value) &&
                  'function' == typeof value.addMark &&
                  'function' == typeof value.apply &&
                  'function' == typeof value.deleteFragment &&
                  'function' == typeof value.insertBreak &&
                  'function' == typeof value.insertSoftBreak &&
                  'function' == typeof value.insertFragment &&
                  'function' == typeof value.insertNode &&
                  'function' == typeof value.insertText &&
                  'function' == typeof value.isElementReadOnly &&
                  'function' == typeof value.isInline &&
                  'function' == typeof value.isSelectable &&
                  'function' == typeof value.isVoid &&
                  'function' == typeof value.normalizeNode &&
                  'function' == typeof value.onChange &&
                  'function' == typeof value.removeMark &&
                  'function' == typeof value.getDirtyPaths &&
                  (null === value.marks || isObject(value.marks)) &&
                  (null === value.selection ||
                    react_Range.isRange(value.selection)) &&
                  (!deep || Node2.isNodeList(value.children)) &&
                  react_Operation.isOperationList(value.operations)
                )
              })(value),
            isElementReadOnly: (editor, element) =>
              editor.isElementReadOnly(element),
            isEmpty: (editor, element) => editor.isEmpty(element),
            isEnd: (editor, point, at) => editor.isEnd(point, at),
            isInline: (editor, value) => editor.isInline(value),
            isNormalizing: (editor) => editor.isNormalizing(),
            isSelectable: (editor, value) => editor.isSelectable(value),
            isStart: (editor, point, at) => editor.isStart(point, at),
            isVoid: (editor, value) => editor.isVoid(value),
            last: (editor, at) => editor.last(at),
            leaf: (editor, at, options) => editor.leaf(at, options),
            levels: (editor, options) => editor.levels(options),
            marks: (editor) => editor.getMarks(),
            next: (editor, options) => editor.next(options),
            node: (editor, at, options) => editor.node(at, options),
            nodes: (editor, options) => editor.nodes(options),
            normalize(editor, options) {
              editor.normalize(options)
            },
            parent: (editor, at, options) => editor.parent(at, options),
            path: (editor, at, options) => editor.path(at, options),
            pathRef: (editor, path, options) => editor.pathRef(path, options),
            pathRefs: (editor) => editor.pathRefs(),
            point: (editor, at, options) => editor.point(at, options),
            pointRef: (editor, point, options) =>
              editor.pointRef(point, options),
            pointRefs: (editor) => editor.pointRefs(),
            positions: (editor, options) => editor.positions(options),
            previous: (editor, options) => editor.previous(options),
            range: (editor, at, to) => editor.range(at, to),
            rangeRef: (editor, range, options) =>
              editor.rangeRef(range, options),
            rangeRefs: (editor) => editor.rangeRefs(),
            removeMark(editor, key) {
              editor.removeMark(key)
            },
            setNormalizing(editor, isNormalizing) {
              editor.setNormalizing(isNormalizing)
            },
            start: (editor, at) => editor.start(at),
            string: (editor, at, options) => editor.string(at, options),
            unhangRange: (editor, range, options) =>
              editor.unhangRange(range, options),
            void: (editor, options) => editor.void(options),
            withoutNormalizing(editor, fn) {
              editor.withoutNormalizing(fn)
            },
            shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) =>
              editor.shouldMergeNodesRemovePrevNode(prevNode, curNode),
          }
        function ownKeys$b(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$b(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$b(Object(t), !0).forEach(function (r2) {
                  react_defineProperty(e, r2, t[r2])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$b(Object(t)).forEach(function (r2) {
                    Object.defineProperty(
                      e,
                      r2,
                      Object.getOwnPropertyDescriptor(t, r2)
                    )
                  })
          }
          return e
        }
        var react_Point = {
            compare(point, another) {
              var result = react_Path.compare(point.path, another.path)
              return 0 === result
                ? point.offset < another.offset
                  ? -1
                  : point.offset > another.offset
                    ? 1
                    : 0
                : result
            },
            isAfter: (point, another) =>
              1 === react_Point.compare(point, another),
            isBefore: (point, another) =>
              -1 === react_Point.compare(point, another),
            equals: (point, another) =>
              point.offset === another.offset &&
              react_Path.equals(point.path, another.path),
            isPoint: (value) =>
              isObject(value) &&
              'number' == typeof value.offset &&
              react_Path.isPath(value.path),
            transform(point, op) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              if (null === point) return null
              var { affinity = 'forward' } = options,
                { path, offset } = point
              switch (op.type) {
                case 'insert_node':
                case 'move_node':
                  path = react_Path.transform(path, op, options)
                  break
                case 'insert_text':
                  react_Path.equals(op.path, path) &&
                    (op.offset < offset ||
                      (op.offset === offset && 'forward' === affinity)) &&
                    (offset += op.text.length)
                  break
                case 'merge_node':
                  ;(react_Path.equals(op.path, path) && (offset += op.position),
                    (path = react_Path.transform(path, op, options)))
                  break
                case 'remove_text':
                  react_Path.equals(op.path, path) &&
                    op.offset <= offset &&
                    (offset -= Math.min(offset - op.offset, op.text.length))
                  break
                case 'remove_node':
                  if (
                    react_Path.equals(op.path, path) ||
                    react_Path.isAncestor(op.path, path)
                  )
                    return null
                  path = react_Path.transform(path, op, options)
                  break
                case 'split_node':
                  if (react_Path.equals(op.path, path)) {
                    if (op.position === offset && null == affinity) return null
                    ;(op.position < offset ||
                      (op.position === offset && 'forward' === affinity)) &&
                      ((offset -= op.position),
                      (path = react_Path.transform(
                        path,
                        op,
                        _objectSpread$b(
                          _objectSpread$b({}, options),
                          {},
                          { affinity: 'forward' }
                        )
                      )))
                  } else path = react_Path.transform(path, op, options)
                  break
                default:
                  return point
              }
              return { path, offset }
            },
          },
          _scrubber = void 0,
          Scrubber = {
            setScrubber(scrubber) {
              _scrubber = scrubber
            },
            stringify: (value) => JSON.stringify(value, _scrubber),
          },
          _excluded$2 = ['text'],
          _excluded2$2 = ['anchor', 'focus', 'merge']
        function ownKeys$a(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$a(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$a(Object(t), !0).forEach(function (r2) {
                  react_defineProperty(e, r2, t[r2])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$a(Object(t)).forEach(function (r2) {
                    Object.defineProperty(
                      e,
                      r2,
                      Object.getOwnPropertyDescriptor(t, r2)
                    )
                  })
          }
          return e
        }
        var CodepointType,
          CodepointType2,
          react_Text = {
            equals(text, another) {
              var options =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { loose = !1 } = options
              function omitText(obj) {
                return react_objectWithoutProperties(obj, _excluded$2)
              }
              return isDeepEqual(
                loose ? omitText(text) : text,
                loose ? omitText(another) : another
              )
            },
            isText: (value) => isObject(value) && 'string' == typeof value.text,
            isTextList: (value) =>
              Array.isArray(value) &&
              value.every((val) => react_Text.isText(val)),
            isTextProps: (props) => void 0 !== props.text,
            matches(text, props) {
              for (var key in props)
                if (
                  'text' !== key &&
                  (!text.hasOwnProperty(key) || text[key] !== props[key])
                )
                  return !1
              return !0
            },
            decorations(node, decorations) {
              var leaves = [{ leaf: _objectSpread$a({}, node) }]
              for (var dec of decorations) {
                var { anchor, focus, merge: mergeDecoration } = dec,
                  rest = react_objectWithoutProperties(dec, _excluded2$2),
                  [start, end] = react_Range.edges(dec),
                  next = [],
                  leafEnd = 0,
                  decorationStart = start.offset,
                  decorationEnd = end.offset,
                  merge4 =
                    null != mergeDecoration ? mergeDecoration : Object.assign
                for (var { leaf } of leaves) {
                  var { length } = leaf.text,
                    leafStart = leafEnd
                  if (
                    ((leafEnd += length),
                    decorationStart <= leafStart && leafEnd <= decorationEnd)
                  )
                    (merge4(leaf, rest), next.push({ leaf }))
                  else if (
                    (decorationStart !== decorationEnd &&
                      (decorationStart === leafEnd ||
                        decorationEnd === leafStart)) ||
                    decorationStart > leafEnd ||
                    decorationEnd < leafStart ||
                    (decorationEnd === leafStart && 0 !== leafStart)
                  )
                    next.push({ leaf })
                  else {
                    var middle = leaf,
                      before = void 0,
                      after = void 0
                    if (decorationEnd < leafEnd) {
                      var off = decorationEnd - leafStart
                      ;((after = {
                        leaf: _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(off) }
                        ),
                      }),
                        (middle = _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(0, off) }
                        )))
                    }
                    if (decorationStart > leafStart) {
                      var _off = decorationStart - leafStart
                      ;((before = {
                        leaf: _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(0, _off) }
                        ),
                      }),
                        (middle = _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(_off) }
                        )))
                    }
                    ;(merge4(middle, rest),
                      before && next.push(before),
                      next.push({ leaf: middle }),
                      after && next.push(after))
                  }
                }
                leaves = next
              }
              if (leaves.length > 1) {
                var currentOffset = 0
                for (var [index, item] of leaves.entries()) {
                  var _start = currentOffset,
                    _end = _start + item.leaf.text.length,
                    position = { start: _start, end: _end }
                  ;(0 === index && (position.isFirst = !0),
                    index === leaves.length - 1 && (position.isLast = !0),
                    (item.position = position),
                    (currentOffset = _end))
                }
              }
              return leaves
            },
          },
          getDefaultInsertLocation = (editor) =>
            editor.selection
              ? editor.selection
              : editor.children.length > 0
                ? react_Editor.end(editor, [])
                : [0]
        ;(((CodepointType2 = CodepointType || (CodepointType = {}))[
          (CodepointType2.None = 0)
        ] = 'None'),
          (CodepointType2[(CodepointType2.Extend = 1)] = 'Extend'),
          (CodepointType2[(CodepointType2.ZWJ = 2)] = 'ZWJ'),
          (CodepointType2[(CodepointType2.RI = 4)] = 'RI'),
          (CodepointType2[(CodepointType2.Prepend = 8)] = 'Prepend'),
          (CodepointType2[(CodepointType2.SpacingMark = 16)] = 'SpacingMark'),
          (CodepointType2[(CodepointType2.L = 32)] = 'L'),
          (CodepointType2[(CodepointType2.V = 64)] = 'V'),
          (CodepointType2[(CodepointType2.T = 128)] = 'T'),
          (CodepointType2[(CodepointType2.LV = 256)] = 'LV'),
          (CodepointType2[(CodepointType2.LVT = 512)] = 'LVT'),
          (CodepointType2[(CodepointType2.ExtPict = 1024)] = 'ExtPict'),
          (CodepointType2[(CodepointType2.Any = 2048)] = 'Any'))
        ;(CodepointType.L,
          CodepointType.L,
          CodepointType.V,
          CodepointType.LV,
          CodepointType.LVT,
          CodepointType.LV,
          CodepointType.V,
          CodepointType.V,
          CodepointType.T,
          CodepointType.LVT,
          CodepointType.T,
          CodepointType.T,
          CodepointType.Any,
          CodepointType.Extend,
          CodepointType.ZWJ,
          CodepointType.Any,
          CodepointType.SpacingMark,
          CodepointType.Prepend,
          CodepointType.Any,
          CodepointType.ZWJ,
          CodepointType.ExtPict,
          CodepointType.RI,
          CodepointType.RI)
        var TextTransforms = {
          delete(editor, options) {
            editor.delete(options)
          },
          insertFragment(editor, fragment, options) {
            editor.insertFragment(fragment, options)
          },
          insertText(editor, text) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            react_Editor.withoutNormalizing(editor, () => {
              var { voids = !1 } = options,
                { at = getDefaultInsertLocation(editor) } = options
              if (
                (react_Path.isPath(at) && (at = react_Editor.range(editor, at)),
                react_Range.isRange(at))
              )
                if (react_Range.isCollapsed(at)) at = at.anchor
                else {
                  var end = react_Range.end(at)
                  if (!voids && react_Editor.void(editor, { at: end })) return
                  var start = react_Range.start(at),
                    startRef = react_Editor.pointRef(editor, start),
                    endRef = react_Editor.pointRef(editor, end)
                  react_Transforms.delete(editor, { at, voids })
                  var startPoint = startRef.unref(),
                    endPoint = endRef.unref()
                  ;((at = startPoint || endPoint),
                    react_Transforms.setSelection(editor, {
                      anchor: at,
                      focus: at,
                    }))
                }
              if (
                !(
                  (!voids && react_Editor.void(editor, { at })) ||
                  react_Editor.elementReadOnly(editor, { at })
                )
              ) {
                var { path, offset } = at
                text.length > 0 &&
                  editor.apply({ type: 'insert_text', path, offset, text })
              }
            })
          },
        }
        function ownKeys$9(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r2) {
                return Object.getOwnPropertyDescriptor(e, r2).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$9(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$9(Object(t), !0).forEach(function (r2) {
                  react_defineProperty(e, r2, t[r2])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$9(Object(t)).forEach(function (r2) {
                    Object.defineProperty(
                      e,
                      r2,
                      Object.getOwnPropertyDescriptor(t, r2)
                    )
                  })
          }
          return e
        }
        var react_Transforms = _objectSpread$9(
            _objectSpread$9(
              _objectSpread$9(
                _objectSpread$9({}, GeneralTransforms),
                NodeTransforms
              ),
              SelectionTransforms
            ),
            TextTransforms
          ),
          getEdgeNodes = (editor) => {
            if (!editor.api.isCollapsed()) return null
            const cursor = editor.selection.anchor,
              textRange = editor.api.range(cursor.path)
            if (!textRange) return null
            const edge = editor.api.isStart(cursor, textRange)
              ? 'start'
              : editor.api.isEnd(cursor, textRange)
                ? 'end'
                : null
            if (!edge) return null
            const parent = NodeApi.parent(editor, cursor.path) ?? null,
              isAffinityInlineElement = (() => {
                if (!parent || !ElementApi.isElement(parent)) return !1
                const parentAffinity = getPluginByType(editor, parent.type)
                  ?.rules.selection?.affinity
                return (
                  'hard' === parentAffinity || 'directional' === parentAffinity
                )
              })(),
              nodeEntry = isAffinityInlineElement
                ? [parent, PathApi.parent(cursor.path)]
                : [NodeApi.get(editor, cursor.path), cursor.path]
            if (
              'start' === edge &&
              0 === cursor.path.at(-1) &&
              !isAffinityInlineElement
            )
              return [null, nodeEntry]
            const siblingPath =
                'end' === edge
                  ? react_Path.next(nodeEntry[1])
                  : react_Path.previous(nodeEntry[1]),
              siblingNode = NodeApi.get(editor, siblingPath),
              siblingEntry = siblingNode ? [siblingNode, siblingPath] : null
            return 'end' === edge
              ? [nodeEntry, siblingEntry]
              : [siblingEntry, nodeEntry]
          },
          isNodeAffinity = (editor, node, affinity) => {
            const marks = Object.keys(NodeApi.extractProps(node))
            return (ElementApi.isElement(node) ? [node.type] : marks).some(
              (type) =>
                getPluginByType(editor, type)?.rules.selection?.affinity ===
                affinity
            )
          },
          isNodesAffinity = (editor, edgeNodes, affinity) => {
            const [backwardLeafEntry, forwardLeafEntry] = edgeNodes
            return (
              (backwardLeafEntry &&
                isNodeAffinity(editor, backwardLeafEntry[0], affinity)) ||
              (forwardLeafEntry &&
                isNodeAffinity(editor, forwardLeafEntry[0], affinity))
            )
          },
          setAffinitySelection = (editor, edgeNodes, affinity) => {
            const setMarks = (marks) => {
                ;((editor.marks = marks), editor.api.onChange())
              },
              select = (point) => {
                editor.tf.setSelection({ anchor: point, focus: point })
              },
              [before, after] = edgeNodes
            if ('backward' === affinity) {
              if (null === before) return void setMarks({})
              const beforeEnd2 = editor.api.end(before[1])
              if (
                (beforeEnd2 && select(beforeEnd2),
                ElementApi.isElement(before[0]))
              )
                return
              return void setMarks(null)
            }
            if (null === before) return void setMarks(null)
            if (null === after) return void setMarks({})
            ;(select(editor.api.end(before[1])),
              ElementApi.isElement(after[0]) ||
                setMarks(NodeApi.extractProps(after[0])))
          },
          AffinityPlugin = createTSlatePlugin({
            key: 'affinity',
          }).overrideEditor(
            ({ editor, tf: { deleteBackward, insertText, move } }) => ({
              transforms: {
                deleteBackward: (unit) => {
                  ;(() => {
                    if ('character' === unit && editor.api.isCollapsed()) {
                      const [start] = getEdgeNodes(editor) ?? [null],
                        startText =
                          start &&
                          (TextApi.isText(start[0])
                            ? start[0].text
                            : NodeApi.string(start[0]))
                      deleteBackward(unit)
                      const edgeNodes = getEdgeNodes(editor)
                      if (
                        edgeNodes &&
                        isNodesAffinity(editor, edgeNodes, 'directional') &&
                        !hasElement(edgeNodes)
                      ) {
                        const affinity =
                          startText && startText.length > 1
                            ? 'backward'
                            : 'forward'
                        setAffinitySelection(editor, edgeNodes, affinity)
                      }
                      return !0
                    }
                  })() || deleteBackward(unit)
                },
                insertText: (text, options) => (
                  (() => {
                    if (!editor.selection || editor.api.isExpanded()) return
                    const textPath = editor.selection.focus.path,
                      textNode = NodeApi.get(editor, textPath)
                    if (!textNode) return
                    const outwardMarks = Object.keys(
                      NodeApi.extractProps(textNode)
                    ).filter(
                      (type) =>
                        'outward' ===
                        getPluginByType(editor, type)?.rules.selection?.affinity
                    )
                    if (
                      !outwardMarks.length ||
                      !editor.api.isEnd(editor.selection.focus, textPath)
                    )
                      return
                    const nextPoint = editor.api.start(textPath, { next: !0 }),
                      marksToRemove = []
                    let nextTextNode = null
                    if (nextPoint) {
                      const nextTextPath = nextPoint.path
                      nextTextNode = NodeApi.get(editor, nextTextPath) || null
                    }
                    for (const markKey of outwardMarks) {
                      if (!textNode[markKey]) continue
                      const isBetweenSameMarks = nextTextNode?.[markKey]
                      isBetweenSameMarks || marksToRemove.push(markKey)
                    }
                    marksToRemove.length > 0 &&
                      editor.tf.removeMarks(marksToRemove)
                  })(),
                  insertText(text, options)
                ),
                move: (options) => {
                  ;(() => {
                    const {
                      distance = 1,
                      reverse = !1,
                      unit = 'character',
                    } = options || {}
                    if (
                      'character' === unit &&
                      1 === distance &&
                      editor.api.isCollapsed()
                    ) {
                      const preEdgeNodes = getEdgeNodes(editor)
                      if (
                        preEdgeNodes &&
                        isNodesAffinity(editor, preEdgeNodes, 'hard')
                      )
                        return preEdgeNodes &&
                          null === preEdgeNodes[reverse ? 0 : 1] &&
                          ((editor, markBoundary) => {
                            const { marks, selection } = editor
                            if (!selection) return
                            const marksMatchLeaf = (leaf) =>
                                marks &&
                                isEqual_default()(
                                  NodeApi.extractProps(leaf),
                                  marks
                                ) &&
                                Object.keys(marks).length > 1,
                              [backwardLeafEntry, forwardLeafEntry] =
                                markBoundary
                            if (!backwardLeafEntry || !forwardLeafEntry) {
                              const leafEntry =
                                backwardLeafEntry || forwardLeafEntry
                              return !marks || marksMatchLeaf(leafEntry[0])
                                ? leafEntry === backwardLeafEntry
                                  ? 'backward'
                                  : 'forward'
                                : void 0
                            }
                            const marksDirection =
                                marks &&
                                (backwardLeafEntry &&
                                marksMatchLeaf(backwardLeafEntry[0])
                                  ? 'backward'
                                  : forwardLeafEntry &&
                                      marksMatchLeaf(forwardLeafEntry[0])
                                    ? 'forward'
                                    : null),
                              selectionDirection =
                                0 === selection.anchor.offset
                                  ? 'forward'
                                  : 'backward'
                            return ('backward' === selectionDirection &&
                              'forward' === marksDirection) ||
                              (IS_FIREFOX &&
                                'forward' === selectionDirection &&
                                'backward' !== marksDirection)
                              ? 'forward'
                              : 'backward'
                          })(editor, preEdgeNodes) ===
                            (reverse ? 'forward' : 'backward')
                          ? (setAffinitySelection(
                              editor,
                              preEdgeNodes,
                              reverse ? 'backward' : 'forward'
                            ),
                            !0)
                          : (move({ ...options, unit: 'offset' }), !0)
                      move(options)
                      const postEdgeNodes = getEdgeNodes(editor)
                      return (
                        postEdgeNodes &&
                          isNodesAffinity(
                            editor,
                            postEdgeNodes,
                            'directional'
                          ) &&
                          !hasElement(postEdgeNodes) &&
                          setAffinitySelection(
                            editor,
                            postEdgeNodes,
                            reverse ? 'forward' : 'backward'
                          ),
                        !0
                      )
                    }
                  })() || move(options)
                },
              },
            })
          ),
          hasElement = (edgeNodes) => {
            const [before, after] = edgeNodes
            return (
              (before && ElementApi.isElement(before[0])) ||
              (after && ElementApi.isElement(after[0]))
            )
          },
          ChunkingPlugin = createTSlatePlugin({
            key: 'chunking',
            options: {
              chunkSize: 1e3,
              contentVisibilityAuto: !0,
              query: NodeApi.isEditor,
            },
          }).overrideEditor(({ editor, getOptions }) => {
            const { chunkSize, query } = getOptions()
            return (
              (editor.getChunkSize = (ancestor) =>
                query(ancestor) ? chunkSize : null),
              {}
            )
          }),
          DebugPlugin =
            (Error,
            createTSlatePlugin({
              key: 'debug',
              options: {
                isProduction: !0,
                logger: {
                  error: (message, type, details) =>
                    react_console.error(
                      `${type ? `[${type}] ` : ''}${message}`,
                      details
                    ),
                  info: (message, type, details) =>
                    react_console.info(
                      `${type ? `[${type}] ` : ''}${message}`,
                      details
                    ),
                  log: (message, type, details) =>
                    react_console.log(
                      `${type ? `[${type}] ` : ''}${message}`,
                      details
                    ),
                  warn: (message, type, details) =>
                    react_console.warn(
                      `${type ? `[${type}] ` : ''}${message}`,
                      details
                    ),
                },
                logLevel: 'error',
                throwErrors: !0,
              },
            }).extendEditorApi(({ getOptions }) => ({
              debug: {
                error: (message, type, details) => {},
                info: (message, type, details) => {},
                log: (message, type, details) => {},
                warn: (message, type, details) => {},
              },
            }))),
          withScrolling = (editor, fn, options) => {
            const prevOptions = editor.getOptions(DOMPlugin),
              prevAutoScroll = AUTO_SCROLL.get(editor) ?? !1
            if (options) {
              const ops = {
                ...prevOptions,
                ...omitBy_default()(options, isUndefined_default()),
              }
              editor.setOptions(DOMPlugin, ops)
            }
            ;(AUTO_SCROLL.set(editor, !0),
              fn(),
              AUTO_SCROLL.set(editor, prevAutoScroll),
              editor.setOptions(DOMPlugin, prevOptions))
          },
          AUTO_SCROLL = new WeakMap(),
          DOMPlugin = createTSlatePlugin({
            key: 'dom',
            options: {
              scrollMode: 'last',
              scrollOperations: { insert_node: !0, insert_text: !0 },
              scrollOptions: { scrollMode: 'if-needed' },
            },
          })
            .extendEditorApi(({ editor }) => ({
              isScrolling: () => AUTO_SCROLL.get(editor) ?? !1,
            }))
            .extendEditorTransforms(({ editor }) => ({
              withScrolling: bindFirst(withScrolling, editor),
            }))
            .overrideEditor(({ api, editor, getOption, tf: { apply } }) => ({
              transforms: {
                apply(operation) {
                  if (api.isScrolling()) {
                    apply(operation)
                    const scrollOperations = getOption('scrollOperations')
                    if (!scrollOperations[operation.type]) return
                    const matched = editor.operations.filter(
                      (op) => !!scrollOperations[op.type]
                    )
                    if (0 === matched.length) return
                    const targetOp =
                      'first' === getOption('scrollMode')
                        ? matched[0]
                        : matched.at(-1)
                    if (!targetOp) return
                    const { offset, path } = targetOp.path ? targetOp : {}
                    if (!path) return
                    const scrollOptions = getOption('scrollOptions'),
                      scrollTarget = { offset: offset ?? 0, path }
                    return void api.scrollIntoView(scrollTarget, scrollOptions)
                  }
                  return apply(operation)
                },
              },
            }))
            .overrideEditor(({ editor, tf: { apply } }) => ({
              transforms: {
                apply(operation) {
                  if ('set_selection' === operation.type) {
                    const { properties } = operation
                    return (
                      (editor.dom.prevSelection = properties),
                      apply(operation),
                      void (editor.dom.currentKeyboardEvent = null)
                    )
                  }
                  apply(operation)
                },
              },
            })),
          isHtmlElement = (node) => node.nodeType === Node.ELEMENT_NODE,
          isHtmlText = (node) => node.nodeType === Node.TEXT_NODE,
          inlineTagNames = new Set([
            'A',
            'ABBR',
            'ACRONYM',
            'B',
            'BDI',
            'BDO',
            'BIG',
            'BR',
            'BUTTON',
            'CANVAS',
            'CITE',
            'CODE',
            'CONTENT',
            'DATA',
            'DEL',
            'DFN',
            'EM',
            'EMBED',
            'FONT',
            'I',
            'IFRAME',
            'IMG',
            'IMG',
            'INPUT',
            'INS',
            'KBD',
            'LABEL',
            'MAP',
            'MARK',
            'MARQUEE',
            'math',
            'MENUITEM',
            'METER',
            'NOBR',
            'OBJECT',
            'OUTPUT',
            'PICTURE',
            'PORTAL',
            'PROGRESS',
            'Q',
            'S',
            'SAMP',
            'SELECT',
            'SHADOW',
            'SMALL',
            'SOURCE',
            'SPAN',
            'STRIKE',
            'STRONG',
            'SUB',
            'SUP',
            'svg',
            'TEXTAREA',
            'TIME',
            'TRACK',
            'TT',
            'U',
            'VAR',
            'VIDEO',
            'WBR',
          ]),
          isHtmlInlineElement = (node) => {
            if (!isHtmlElement(node)) return !1
            const element = node,
              tagNameIsInline = inlineTagNames.has(element.tagName),
              displayProperty = element.style.display.split(' ')[0]
            return '' === displayProperty
              ? tagNameIsInline
              : !!displayProperty.startsWith('inline') ||
                  ('inherit' === displayProperty && element.parentElement
                    ? isHtmlInlineElement(element.parentElement)
                    : !![
                        'contents',
                        'initial',
                        'none',
                        'revert',
                        'revert-layer',
                        'unset',
                      ].includes(displayProperty) && tagNameIsInline)
          },
          isHtmlBlockElement = (node) => {
            if (!isHtmlElement(node)) return !1
            return !isHtmlInlineElement(node)
          },
          normalize = (descendants, isInline, makeDefaultBlock) => (
            (descendants = ((descendants, isInline, makeDefaultBlock) => {
              const hasDifferentNodes = ((descendants, isInline) =>
                  descendants.some((descendant, index, arr) => {
                    const prevDescendant = arr[index - 1]
                    return (
                      0 !== index &&
                      isInline(descendant) !== isInline(prevDescendant)
                    )
                  }))(descendants, isInline),
                { fragment } = descendants.reduce(
                  (memo, node) => {
                    if (hasDifferentNodes && isInline(node)) {
                      let block = memo.precedingBlock
                      ;(block ||
                        ((block = makeDefaultBlock()),
                        (memo.precedingBlock = block),
                        memo.fragment.push(block)),
                        block.children.push(node))
                    } else
                      (memo.fragment.push(node), (memo.precedingBlock = null))
                    return memo
                  },
                  { fragment: [], precedingBlock: null }
                )
              return fragment
            })(
              (descendants = ((descendants) =>
                0 === descendants.length ? [{ text: '' }] : descendants)(
                descendants
              )),
              isInline,
              makeDefaultBlock
            )),
            (descendants = descendants.map((node) =>
              ElementApi.isElement(node)
                ? {
                    ...node,
                    children: normalize(
                      node.children,
                      isInline,
                      makeDefaultBlock
                    ),
                  }
                : node
            )),
            descendants
          ),
          normalizeDescendantsToDocumentFragment = (
            editor,
            { defaultElementPlugin = BaseParagraphPlugin, descendants }
          ) => {
            const isInline = (
                (editor) => (node) =>
                  TextApi.isText(node) ||
                  (ElementApi.isElement(node) && editor.api.isInline(node))
              )(editor),
              defaultType = editor.getType(defaultElementPlugin.key),
              makeDefaultBlock =
                ((type = defaultType), () => ({ children: [], type }))
            var type
            return normalize(descendants, isInline, makeDefaultBlock)
          },
          endInlineFormattingContext = (state) => {
            state.inlineFormattingContext = null
          },
          collapseWhiteSpaceText = (text, state) => {
            const textContent = text.textContent || '',
              isWhiteSpaceOnly = '' === textContent.trim()
            ;(!state.inlineFormattingContext && isWhiteSpaceOnly) ||
              ((state) => {
                state.inlineFormattingContext
                  ? (state.inlineFormattingContext.atStart = !1)
                  : (state.inlineFormattingContext = {
                      atStart: !0,
                      lastHasTrailingWhiteSpace: !1,
                    })
              })(state)
            const { whiteSpaceRule } = state,
              trimStart =
                'normal' !== whiteSpaceRule
                  ? 'collapse'
                  : !state.inlineFormattingContext ||
                      state.inlineFormattingContext.atStart ||
                      state.inlineFormattingContext.lastHasTrailingWhiteSpace
                    ? 'all'
                    : 'collapse',
              trimEnd =
                'normal' === whiteSpaceRule
                  ? 'collapse'
                  : ((initialText) => {
                        let currentNode = initialText
                        for (;;) {
                          if (currentNode.nextSibling)
                            currentNode = currentNode.nextSibling
                          else {
                            if (
                              ((currentNode = currentNode.parentElement),
                              currentNode && isHtmlBlockElement(currentNode))
                            )
                              return !0
                            currentNode = currentNode?.nextSibling || null
                          }
                          if (!currentNode) return !0
                          if (isHtmlBlockElement(currentNode)) return !0
                          if ((currentNode.textContent || '').length > 0)
                            return !1
                        }
                      })(text)
                    ? 'single-newline'
                    : 'collapse',
              shouldCollapseWhiteSpace = {
                normal: !0,
                pre: !1,
                'pre-line': !0,
              }[whiteSpaceRule],
              collapsedTextContent = ((
                text,
                {
                  shouldCollapseWhiteSpace = !0,
                  trimEnd = 'collapse',
                  trimStart = 'collapse',
                  whiteSpaceIncludesNewlines = !0,
                } = {}
              ) => (
                'all' === trimStart && (text = text.replace(/^\s+/, '')),
                'single-newline' === trimEnd &&
                  (text = text.replace(/\n$/, '')),
                shouldCollapseWhiteSpace &&
                  (text = whiteSpaceIncludesNewlines
                    ? text.replaceAll(/\s+/g, ' ')
                    : (text = (text = text.replaceAll(
                        /[^\S\n\r]+/g,
                        ' '
                      )).replaceAll(/^[^\S\n\r]+/gm, '')).replaceAll(
                        /[^\S\n\r]+$/gm,
                        ''
                      )),
                text
              ))(textContent || '', {
                shouldCollapseWhiteSpace,
                trimEnd,
                trimStart,
                whiteSpaceIncludesNewlines: 'pre-line' !== whiteSpaceRule,
              })
            ;(state.inlineFormattingContext &&
              shouldCollapseWhiteSpace &&
              (state.inlineFormattingContext.lastHasTrailingWhiteSpace =
                collapsedTextContent.endsWith(' ')),
              (text.textContent = collapsedTextContent))
          },
          collapseWhiteSpaceNode = (node, state) => {
            isHtmlElement(node)
              ? collapseWhiteSpaceElement(node, state)
              : isHtmlText(node)
                ? collapseWhiteSpaceText(node, state)
                : collapseWhiteSpaceChildren(node, state)
          },
          collapseWhiteSpaceChildren = (node, state) => {
            const childNodes = Array.from(node.childNodes)
            for (const childNode of childNodes)
              collapseWhiteSpaceNode(childNode, state)
          },
          collapseWhiteSpaceElement = (element, state) => {
            const isInlineElement = isHtmlInlineElement(element),
              previousWhiteSpaceRule = state.whiteSpaceRule,
              inferredWhiteSpaceRule = ((element) => {
                const whiteSpaceProperty = element.style.whiteSpace
                switch (whiteSpaceProperty) {
                  case 'break-spaces':
                  case 'pre':
                  case 'pre-wrap':
                    return 'pre'
                  case 'normal':
                  case 'nowrap':
                    return 'normal'
                  case 'pre-line':
                    return 'pre-line'
                }
                return 'PRE' === element.tagName
                  ? 'pre'
                  : 'initial' === whiteSpaceProperty
                    ? 'normal'
                    : null
              })(element)
            ;(inferredWhiteSpaceRule &&
              (state.whiteSpaceRule = inferredWhiteSpaceRule),
              isInlineElement || endInlineFormattingContext(state),
              collapseWhiteSpaceChildren(element, state),
              isInlineElement || endInlineFormattingContext(state),
              (state.whiteSpaceRule = previousWhiteSpaceRule))
          },
          deserializeHtmlNodeChildren = (editor, node, isSlateParent = !1) =>
            Array.from(node.childNodes).flatMap((child) =>
              1 === child.nodeType && !isSlateNode(child) && isSlateParent
                ? deserializeHtmlNodeChildren(editor, child, isSlateParent)
                : deserializeHtmlNode(editor)(child)
            ),
          getDataNodeProps = ({ editor, element, plugin }) => {
            const toNodeProps = plugin.parsers.html?.deserializer?.toNodeProps,
              defaultNodeProps =
                (plugin.parsers.html?.deserializer?.disableDefaultNodeProps ??
                !1)
                  ? {}
                  : (({ element, type }) => {
                      if (
                        !((element, pluginKey) =>
                          element.classList.contains(`slate-${pluginKey}`))(
                          element,
                          type
                        ) &&
                        !isSlateLeaf(element)
                      )
                        return
                      const dataAttributes = {}
                      return (
                        Object.entries(element.dataset).forEach(
                          ([key, value]) => {
                            if (
                              key.startsWith('slate') &&
                              value &&
                              ![
                                'slateInline',
                                'slateLeaf',
                                'slateNode',
                                'slateVoid',
                              ].includes(key)
                            ) {
                              const attributeKey =
                                key.slice(5).charAt(0).toLowerCase() +
                                key.slice(6)
                              if (void 0 === value) return
                              let parsedValue = value
                              ;('true' === value
                                ? (parsedValue = !0)
                                : 'false' === value
                                  ? (parsedValue = !1)
                                  : Number.isNaN(Number(value)) ||
                                    (parsedValue = Number(value)),
                                (dataAttributes[attributeKey] = parsedValue))
                            }
                          }
                        ),
                        Object.keys(dataAttributes).length > 0
                          ? dataAttributes
                          : void 0
                      )
                    })({ ...getEditorPlugin(editor, plugin), element })
            if (!toNodeProps) return defaultNodeProps
            const customNodeProps =
              toNodeProps({ ...getEditorPlugin(editor, plugin), element }) ?? {}
            return { ...defaultNodeProps, ...customNodeProps }
          },
          pluginDeserializeHtml = (
            editor,
            plugin,
            { deserializeLeaf, element: el }
          ) => {
            const {
                node: { isElement: isElementRoot, isLeaf: isLeafRoot },
              } = plugin,
              deserializer = ((plugin) => {
                let deserializer = plugin.parsers?.html?.deserializer
                const rules = deserializer?.rules ?? [],
                  staticRules = rules.some((rule) =>
                    rule.validClassName?.includes(`slate-${plugin.key}`)
                  )
                    ? rules
                    : [
                        {
                          validClassName: `slate-${plugin.key}`,
                          validNodeName: '*',
                        },
                        ...rules,
                      ]
                return (
                  deserializer || (deserializer = { rules: staticRules }),
                  (deserializer.rules = staticRules),
                  deserializer
                )
              })(plugin)
            if (!deserializer) return
            const {
              attributeNames,
              isElement: isElementRule,
              isLeaf: isLeafRule,
              query,
              rules,
            } = deserializer
            let { parse } = deserializer
            const isElement3 = isElementRule || isElementRoot,
              isLeaf = isLeafRule || isLeafRoot
            if (!deserializeLeaf && !isElement3) return
            if (deserializeLeaf && !isLeaf) return
            if (rules) {
              if (
                !rules.some(
                  ({
                    validAttribute,
                    validClassName,
                    validNodeName = '*',
                    validStyle,
                  }) => {
                    if (validNodeName) {
                      const validNodeNames = castArray_default()(validNodeName)
                      if (
                        validNodeNames.length > 0 &&
                        !validNodeNames.includes(el.nodeName) &&
                        '*' !== validNodeName
                      )
                        return !1
                    }
                    if (
                      validClassName &&
                      !el.classList.contains(validClassName)
                    )
                      return !1
                    if (validStyle)
                      for (const [key, value] of Object.entries(validStyle)) {
                        if (
                          !castArray_default()(value).includes(el.style[key]) &&
                          '*' !== value
                        )
                          return
                        if ('*' === value && !el.style[key]) return
                        const defaultNodeValue =
                          plugin.inject.nodeProps?.defaultNodeValue
                        if (
                          defaultNodeValue &&
                          defaultNodeValue === el.style[key]
                        )
                          return !1
                      }
                    if (validAttribute)
                      if ('string' == typeof validAttribute) {
                        if (!el.getAttributeNames().includes(validAttribute))
                          return !1
                      } else
                        for (const [
                          attributeName,
                          attributeValue,
                        ] of Object.entries(validAttribute)) {
                          const attributeValues =
                              castArray_default()(attributeValue),
                            elAttribute = el.getAttribute(attributeName)
                          if (
                            !dist_isDefined(elAttribute) ||
                            !attributeValues.includes(elAttribute)
                          )
                            return !1
                        }
                    return !0
                  }
                )
              )
                return
            }
            if (
              query &&
              !query({ ...getEditorPlugin(editor, plugin), element: el })
            )
              return
            if (!parse)
              if (isElement3) parse = ({ type }) => ({ type })
              else {
                if (!isLeaf) return
                parse = ({ type }) => ({ [type]: !0 })
              }
            let node = {
              ...(isSlateNode(el)
                ? {}
                : (parse({
                    ...getEditorPlugin(editor, plugin),
                    element: el,
                    node: {},
                  }) ?? {})),
              ...getDataNodeProps({ editor, element: el, plugin }),
            }
            if (0 === Object.keys(node).length) return
            if (
              (getInjectedPlugins(editor, plugin).forEach((injectedPlugin) => {
                const res = injectedPlugin.parsers?.html?.deserializer?.parse?.(
                  { ...getEditorPlugin(editor, plugin), element: el, node }
                )
                res && !isSlateNode(el) && (node = { ...node, ...res })
              }),
              attributeNames)
            ) {
              const elementAttributes = {},
                elementAttributeNames = el.getAttributeNames()
              for (const elementAttributeName of elementAttributeNames)
                attributeNames.includes(elementAttributeName) &&
                  (elementAttributes[elementAttributeName] =
                    el.getAttribute(elementAttributeName))
              Object.keys(elementAttributes).length > 0 &&
                (node.attributes = elementAttributes)
            }
            return { ...deserializer, node }
          },
          htmlElementToElement = (editor, element, isSlate = !1) => {
            const deserialized = ((editor, element) => {
              let result
              return (
                [...editor.meta.pluginList]
                  .reverse()
                  .some(
                    (plugin) => (
                      (result = pluginDeserializeHtml(editor, plugin, {
                        element,
                      })),
                      !!result
                    )
                  ),
                result
              )
            })(editor, element)
            if (deserialized) {
              const { node, withoutChildren } = deserialized
              let descendants =
                node.children ??
                deserializeHtmlNodeChildren(editor, element, isSlate)
              return (
                (0 === descendants.length ||
                  withoutChildren ||
                  isSlateVoid(element)) &&
                  (descendants = [{ text: '' }]),
                jsx('element', node, descendants)
              )
            }
          },
          htmlElementToLeaf = (editor, element) => {
            const node = ((editor, element) => {
              let node = {}
              return (
                [...editor.meta.pluginList].reverse().forEach((plugin) => {
                  const deserialized = pluginDeserializeHtml(editor, plugin, {
                    deserializeLeaf: !0,
                    element,
                  })
                  deserialized && (node = { ...node, ...deserialized.node })
                }),
                node
              )
            })(editor, element)
            return deserializeHtmlNodeChildren(editor, element).reduce(
              (arr, child) => {
                if (!child) return arr
                if (ElementApi.isElement(child))
                  (Object.keys(node).length > 0 &&
                    mergeDeepToNodes({
                      node: child,
                      query: { filter: ([n]) => TextApi.isText(n) },
                      source: node,
                    }),
                    arr.push(child))
                else {
                  const attributes = { ...node }
                  ;(TextApi.isText(child) &&
                    child.text &&
                    Object.keys(attributes).forEach((key) => {
                      attributes[key] &&
                        child[key] &&
                        (attributes[key] = child[key])
                    }),
                    arr.push(jsx('text', attributes, child)))
                }
                return arr
              },
              []
            )
          },
          deserializeHtmlNode = (editor) => (node) => {
            const textNode = ((node) => {
              if (isHtmlText(node))
                return node.parentElement?.dataset.platePreventDeserialization
                  ? ''
                  : node.textContent || ''
            })(node)
            if (textNode) return textNode
            if (!isHtmlElement(node)) return null
            if (
              ((node) => {
                if ('BR' !== node.nodeName) return !1
                if ('Apple-interchange-newline' === node.className) return !1
                const parent = node.parentElement
                return (
                  !!parent &&
                  'P' !== parent.tagName &&
                  'SPAN' !== parent.tagName &&
                  !(() => {
                    let sibling = node.previousSibling
                    for (; sibling; ) {
                      if (
                        sibling.nodeType === Node.TEXT_NODE &&
                        sibling.textContent?.trim()
                      )
                        return !0
                      sibling = sibling.previousSibling
                    }
                    for (sibling = node.nextSibling; sibling; ) {
                      if (
                        sibling.nodeType === Node.TEXT_NODE &&
                        sibling.textContent?.trim()
                      )
                        return !0
                      sibling = sibling.nextSibling
                    }
                    return !1
                  })()
                )
              })(node)
            )
              return { children: [{ text: '' }], type: editor.getType('p') }
            if (
              'BR' === node.nodeName &&
              'Apple-interchange-newline' === node.className
            )
              return null
            const breakLine = ((node) => {
              if ('BR' === node.nodeName) return '\n'
            })(node)
            if (breakLine) return breakLine
            const fragment = ((editor, element) => {
              if ('BODY' === element.nodeName)
                return jsx(
                  'fragment',
                  {},
                  deserializeHtmlNodeChildren(editor, element)
                )
            })(editor, node)
            if (fragment) return fragment
            const element = htmlElementToElement(
              editor,
              node,
              isSlateNode(node)
            )
            return element || htmlElementToLeaf(editor, node)
          },
          deserializeHtml = (
            editor,
            {
              collapseWhiteSpace: shouldCollapseWhiteSpace = !0,
              defaultElementPlugin,
              element,
            }
          ) => {
            ;('string' == typeof element &&
              (element = ((rawHtml) => {
                const node = document.createElement('body')
                return ((node.innerHTML = rawHtml), node)
              })(element)),
              shouldCollapseWhiteSpace &&
                (element = ((element) => {
                  const clonedElement = element.cloneNode(!0)
                  return (
                    collapseWhiteSpaceElement(clonedElement, {
                      inlineFormattingContext: null,
                      whiteSpaceRule: 'normal',
                    }),
                    clonedElement
                  )
                })(element)))
            const fragment = ((editor, element) =>
              deserializeHtmlNode(editor)(element))(editor, element)
            return normalizeDescendantsToDocumentFragment(editor, {
              defaultElementPlugin,
              descendants: fragment,
            })
          },
          HtmlPlugin = createSlatePlugin({ key: 'html' })
            .extendApi(({ editor }) => ({
              deserialize: bindFirst(deserializeHtml, editor),
            }))
            .extend({
              parser: {
                format: 'text/html',
                deserialize: ({ api, data }) => {
                  const document2 =
                    ((html = data),
                    new DOMParser().parseFromString(html, 'text/html'))
                  var html
                  return api.html.deserialize({ element: document2.body })
                },
              },
            }),
          LengthPlugin = createTSlatePlugin({ key: 'length' }).overrideEditor(
            ({ editor, getOptions, tf: { apply } }) => ({
              transforms: {
                apply(operation) {
                  editor.tf.withoutNormalizing(() => {
                    apply(operation)
                    const options = getOptions()
                    if (options.maxLength) {
                      const length = editor.api.string([]).length
                      if (length > options.maxLength) {
                        const overflowLength = length - options.maxLength
                        editor.tf.delete({
                          distance: overflowLength,
                          reverse: !0,
                          unit: 'character',
                        })
                      }
                    }
                  })
                },
              },
            })
          ),
          NodeIdPlugin = createTSlatePlugin({
            key: 'nodeId',
            options: {
              filterInline: !0,
              filterText: !0,
              idKey: 'id',
              normalizeInitialValue: !1,
              filter: () => !0,
              idCreator: () => nanoid(10),
            },
          })
            .extendTransforms(({ editor, getOptions }) => ({
              normalize() {
                const {
                    allow,
                    exclude,
                    filter,
                    filterInline,
                    filterText,
                    idKey,
                  } = getOptions(),
                  addNodeId = (entry) => {
                    const [node, path] = entry
                    if (
                      !node[idKey] &&
                      queryNode([node, path], {
                        allow,
                        exclude,
                        filter: (entry2) => {
                          const [node2] = entry2
                          return (
                            !(filterText && !ElementApi.isElement(node2)) &&
                            !(
                              filterInline &&
                              ElementApi.isElement(node2) &&
                              !editor.api.isBlock(node2)
                            ) &&
                            filter(entry2)
                          )
                        },
                      })
                    ) {
                      if (!editor.api.node(path)) return
                      editor.tf.withoutSaving(() => {
                        editor.tf.setNodes(
                          { [idKey]: getOptions().idCreator() },
                          { at: path }
                        )
                      })
                    }
                    ElementApi.isElement(node) &&
                      node.children.forEach((child, index) => {
                        addNodeId([child, [...path, index]])
                      })
                  }
                editor.children.forEach((node, index) => {
                  addNodeId([node, [index]])
                })
              },
            }))
            .extend({
              normalizeInitialValue: ({ editor, getOptions, tf }) => {
                const { normalizeInitialValue } = getOptions()
                if (!normalizeInitialValue) {
                  const firstNode = editor.children[0],
                    lastNode = editor.children.at(-1)
                  if (firstNode?.id && lastNode?.id) return
                }
                tf.nodeId.normalize()
              },
            })
            .overrideEditor(
              ({
                editor,
                getOptions,
                tf: { apply, insertNode, insertNodes },
              }) => {
                const idPropsCreator = () => ({
                    [getOptions().idKey ?? '']: getOptions().idCreator(),
                  }),
                  filterNode = (nodeEntry) => {
                    const { filter, filterText } = getOptions()
                    return (
                      filter(nodeEntry) &&
                      (!filterText || void 0 !== nodeEntry[0]?.type)
                    )
                  },
                  removeIdFromNodeIfDuplicate = (node) => {
                    const { idKey = '', reuseId } = getOptions()
                    !reuseId &&
                      editor.api.some({
                        at: [],
                        match: { [idKey]: node[idKey] },
                      }) &&
                      delete node[idKey]
                  },
                  overrideIdIfSet = (node) => {
                    const { idKey = '' } = getOptions()
                    if (dist_isDefined(node._id)) {
                      const id = node._id
                      ;(delete node._id,
                        editor.api.some({ at: [], match: { [idKey]: id } }) ||
                          (node[idKey] = id))
                    }
                  }
                return {
                  transforms: {
                    apply(operation) {
                      const {
                          allow,
                          disableInsertOverrides,
                          exclude,
                          idCreator,
                          idKey = '',
                          reuseId,
                        } = getOptions(),
                        query = { allow, exclude, filter: filterNode }
                      if ('insert_node' === operation.type) {
                        const node = cloneDeep_default()(operation.node)
                        return (
                          applyDeepToNodes({
                            apply: removeIdFromNodeIfDuplicate,
                            node,
                            query,
                            source: {},
                          }),
                          (options = {
                            node,
                            path: operation.path,
                            query,
                            source: idPropsCreator,
                          }),
                          applyDeepToNodes({
                            ...options,
                            apply: defaults_default(),
                          }),
                          disableInsertOverrides ||
                            applyDeepToNodes({
                              apply: overrideIdIfSet,
                              node,
                              query,
                              source: {},
                            }),
                          apply({ ...operation, node })
                        )
                      }
                      var options
                      if ('split_node' === operation.type) {
                        const node = operation.properties
                        let id = operation.properties[idKey]
                        if (queryNode([node, operation.path], query))
                          return (
                            (reuseId &&
                              void 0 !== id &&
                              !editor.api.some({
                                at: [],
                                match: { [idKey]: id },
                              })) ||
                              (id = idCreator()),
                            apply({
                              ...operation,
                              properties: {
                                ...operation.properties,
                                [idKey]: id,
                              },
                            })
                          )
                        id && delete operation.properties[idKey]
                      }
                      return apply(operation)
                    },
                    insertNode(node) {
                      const { disableInsertOverrides, idKey = '' } =
                        getOptions()
                      ;(!disableInsertOverrides &&
                        node[idKey] &&
                        (Object.isExtensible(node) ||
                          (node = cloneDeep_default()(node)),
                        (node._id = node[idKey])),
                        insertNode(node))
                    },
                    insertNodes(_nodes, options) {
                      const nodes = castArray_default()(_nodes).filter(
                        (node) => !!node
                      )
                      if (0 === nodes.length) return
                      const { disableInsertOverrides, idKey = '' } =
                        getOptions()
                      insertNodes(
                        nodes.map(
                          (node) => (
                            !disableInsertOverrides &&
                              node[idKey] &&
                              (Object.isExtensible(node) ||
                                (node = cloneDeep_default()(node)),
                              (node._id = node[idKey])),
                            node
                          )
                        ),
                        options
                      )
                    },
                  },
                }
              }
            ),
          init = (
            editor,
            { autoSelect, selection, shouldNormalizeEditor, value, onReady }
          ) => {
            const onValueLoaded = (isAsync = !1) => {
              if (
                ((editor.children && 0 !== editor.children?.length) ||
                  (editor.children = editor.api.create.value()),
                selection)
              )
                editor.selection = selection
              else if (autoSelect) {
                const target =
                  'start' === ('start' === autoSelect ? 'start' : 'end')
                    ? editor.api.start([])
                    : editor.api.end([])
                editor.tf.select(target)
              }
              ;(editor.children.length > 0 &&
                ((editor) => {
                  const value = editor.meta.isNormalizing
                  ;((editor.meta.isNormalizing = !0),
                    editor.meta.pluginCache.normalizeInitialValue.forEach(
                      (key) => {
                        const p = editor.getPlugin({ key })
                        isEditOnly(
                          editor.dom.readOnly,
                          p,
                          'normalizeInitialValue'
                        ) ||
                          p.normalizeInitialValue?.({
                            ...getEditorPlugin(editor, p),
                            value: editor.children,
                          })
                      }
                    ),
                    (editor.meta.isNormalizing = value))
                })(editor),
                shouldNormalizeEditor && editor.tf.normalize({ force: !0 }),
                onReady && onReady({ editor, isAsync, value: editor.children }))
            }
            if (null === value) onValueLoaded()
            else if ('string' == typeof value)
              ((editor.children = editor.api.html.deserialize({
                element: value,
              })),
                onValueLoaded())
            else if ('function' == typeof value) {
              const result = value(editor)
              result && 'function' == typeof result.then
                ? result.then((resolvedValue) => {
                    ;((editor.children = resolvedValue), onValueLoaded(!0))
                  })
                : ((editor.children = result), onValueLoaded())
            } else
              value
                ? ((editor.children = value), onValueLoaded())
                : onValueLoaded()
          },
          insertExitBreak = (editor, { match, reverse } = {}) => {
            if (!editor.selection || !editor.api.isCollapsed()) return
            const block = editor.api.block()
            if (!block) return
            const target = editor.api.above({
                at: block[1],
                match: combineMatchOptions(
                  editor,
                  (n, p) =>
                    1 === p.length ||
                    (p.length > 1 &&
                      !!n.type &&
                      !getPluginByType(editor, n.type)?.node.isStrictSiblings),
                  { match }
                ),
              }),
              ancestorPath = target?.[1] ?? block[1],
              targetPath = reverse ? ancestorPath : PathApi.next(ancestorPath)
            return targetPath
              ? (editor.tf.insertNodes(editor.api.create.block(), {
                  at: targetPath,
                  select: !0,
                }),
                !0)
              : void 0
          },
          resetBlock = (editor, { at } = {}) => {
            const entry = editor.api.block({ at })
            if (!entry?.[0]) return
            const [block, path] = entry
            return (
              editor.tf.withoutNormalizing(() => {
                const { id, type, ...otherProps } = NodeApi.extractProps(block)
                Object.keys(otherProps).forEach((key) => {
                  editor.tf.unsetNodes(key, { at: path })
                })
                const paragraphType = editor.getType(BaseParagraphPlugin.key)
                block.type !== paragraphType &&
                  editor.tf.setNodes({ type: paragraphType }, { at: path })
              }),
              !0
            )
          },
          setValue = (editor, value) => {
            let children = value
            ;('string' == typeof value
              ? (children = editor.api.html.deserialize({ element: value }))
              : (value && 0 !== value.length) ||
                (children = editor.api.create.value()),
              editor.tf.replaceNodes(children, { at: [], children: !0 }))
          },
          SlateExtensionPlugin = createSlatePlugin({
            key: 'slateExtension',
          }).extendEditorTransforms(({ editor }) => ({
            init: bindFirst(init, editor),
            insertExitBreak: bindFirst(insertExitBreak, editor),
            resetBlock: bindFirst(resetBlock, editor),
            setValue: bindFirst(setValue, editor),
          })),
          react_isDOMNode = (value) => {
            const window2 = ((value) =>
              value?.ownerDocument?.defaultView || null)(value)
            return !!window2 && value instanceof window2.Node
          },
          react_getPlainText = (domNode) => {
            let text = ''
            if (
              react_isDOMNode((value = domNode)) &&
              3 === value.nodeType &&
              domNode.nodeValue
            )
              return domNode.nodeValue
            var value
            if (
              ((value) => react_isDOMNode(value) && 1 === value.nodeType)(
                domNode
              )
            ) {
              for (const childNode of Array.from(domNode.childNodes))
                text += react_getPlainText(childNode)
              const display =
                getComputedStyle(domNode).getPropertyValue('display')
              ;('block' !== display &&
                'list' !== display &&
                'BR' !== domNode.tagName) ||
                (text += '\n')
            }
            return text
          },
          getPluginNodeProps =
            (DOMPlugin.extendEditorApi(({ editor }) => ({
              getFragment: () => getSelectedDomFragment(editor),
            })).overrideEditor(({ editor, tf: { setFragmentData } }) => ({
              transforms: {
                setFragmentData(data, originEvent) {
                  if ('copy' !== originEvent)
                    return setFragmentData(data, originEvent)
                  const fragment = getSelectedDomFragment(editor),
                    html = getSelectedDomNode()
                  if (!html || !fragment) return
                  const selectOutside = ((html) => {
                    const domNodes = html ?? getSelectedDomNode()
                    return (
                      !!domNodes &&
                      !!domNodes?.querySelector('[data-slate-editor="true"')
                    )
                  })(html)
                  if (!selectOutside && fragment.length > 0) {
                    const string = JSON.stringify(fragment),
                      encoded = window.btoa(encodeURIComponent(string))
                    ;(data.setData('application/x-slate-fragment', encoded),
                      data.setData('text/html', html.innerHTML),
                      data.setData('text/plain', react_getPlainText(html)))
                  }
                },
              },
            })),
            ({ attributes: nodeAttributes, node, plugin, props }) => {
              const newProps = { ...props, attributes: { ...props.attributes } }
              if (plugin?.node.props) {
                const pluginNodeProps =
                  ('function' == typeof plugin.node.props
                    ? plugin.node.props(newProps)
                    : plugin.node.props) ?? {}
                newProps.attributes = {
                  ...newProps.attributes,
                  ...pluginNodeProps,
                }
              }
              return (
                nodeAttributes &&
                  plugin &&
                  (newProps.attributes = {
                    ...newProps.attributes,
                    ...pick_default()(
                      nodeAttributes,
                      ...(plugin.node.dangerouslyAllowAttributes ?? []),
                      [...(node ? getNodeDataAttributeKeys(node) : [])]
                    ),
                  }),
                Object.keys(newProps.attributes).forEach((key) => {
                  void 0 === newProps.attributes?.[key] &&
                    delete newProps.attributes?.[key]
                }),
                newProps
              )
            }),
          getSlateClass = (type) => (type ? `slate-${type}` : ''),
          react_HOTKEYS = {
            bold: 'mod+b',
            compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
            deleteBackward: 'shift?+backspace',
            deleteForward: 'shift?+delete',
            escape: 'escape',
            extendBackward: 'shift+left',
            extendDownward: 'shift+down',
            extendForward: 'shift+right',
            extendUpward: 'shift+up',
            insertSoftBreak: 'shift+enter',
            italic: 'mod+i',
            moveBackward: 'left',
            moveDownward: 'down',
            moveForward: 'right',
            moveUpward: 'up',
            moveWordBackward: 'ctrl+left',
            moveWordForward: 'ctrl+right',
            selectAll: 'mod+a',
            splitBlock: 'enter',
            tab: 'tab',
            undo: 'mod+z',
            untab: 'shift+tab',
          },
          react_APPLE_HOTKEYS = {
            deleteBackward: ['ctrl+backspace', 'ctrl+h'],
            deleteForward: ['ctrl+delete', 'ctrl+d'],
            deleteLineBackward: 'cmd+shift?+backspace',
            deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
            deleteWordBackward: 'opt+shift?+backspace',
            deleteWordForward: 'opt+shift?+delete',
            extendLineBackward: 'opt+shift+up',
            extendLineForward: 'opt+shift+down',
            moveLineBackward: 'opt+up',
            moveLineForward: 'opt+down',
            moveWordBackward: 'opt+left',
            moveWordForward: 'opt+right',
            redo: 'cmd+shift+z',
            transposeCharacter: 'ctrl+t',
          },
          react_WINDOWS_HOTKEYS = {
            deleteWordBackward: 'ctrl+shift?+backspace',
            deleteWordForward: 'ctrl+shift?+delete',
            redo: ['ctrl+y', 'ctrl+shift+z'],
          },
          createHotkey = (key) => {
            const generic = react_HOTKEYS[key],
              apple = react_APPLE_HOTKEYS[key],
              windows = react_WINDOWS_HOTKEYS[key],
              isGeneric = generic && (0, lib.Sn)(generic),
              isApple = apple && (0, lib.Sn)(apple),
              isWindows = windows && (0, lib.Sn)(windows)
            return (event) =>
              !!isGeneric?.(event) ||
              !(!IS_APPLE || !isApple?.(event)) ||
              !(IS_APPLE || !isWindows?.(event))
          },
          createComposing =
            (key) =>
            (editor, event, { composing } = {}) =>
              !!createHotkey(key)(event) &&
              !!composing === editor.api.isComposing(),
          Hotkeys = {
            isBold: createHotkey('bold'),
            isCompose: createHotkey('compose'),
            isDeleteBackward: createHotkey('deleteBackward'),
            isDeleteForward: createHotkey('deleteForward'),
            isDeleteLineBackward: createHotkey('deleteLineBackward'),
            isDeleteLineForward: createHotkey('deleteLineForward'),
            isDeleteWordBackward: createHotkey('deleteWordBackward'),
            isDeleteWordForward: createHotkey('deleteWordForward'),
            isEscape: createHotkey('escape'),
            isExtendBackward: createHotkey('extendBackward'),
            isExtendDownward: createHotkey('extendDownward'),
            isExtendForward: createHotkey('extendForward'),
            isExtendLineBackward: createHotkey('extendLineBackward'),
            isExtendLineForward: createHotkey('extendLineForward'),
            isExtendUpward: createHotkey('extendUpward'),
            isItalic: createHotkey('italic'),
            isMoveBackward: createHotkey('moveBackward'),
            isMoveDownward: createHotkey('moveDownward'),
            isMoveForward: createHotkey('moveForward'),
            isMoveLineBackward: createHotkey('moveLineBackward'),
            isMoveLineForward: createHotkey('moveLineForward'),
            isMoveUpward: createHotkey('moveUpward'),
            isMoveWordBackward: createHotkey('moveWordBackward'),
            isMoveWordForward: createHotkey('moveWordForward'),
            isRedo: createHotkey('redo'),
            isSelectAll: createHotkey('selectAll'),
            isSoftBreak: createHotkey('insertSoftBreak'),
            isSplitBlock: createHotkey('splitBlock'),
            isTab: createComposing('tab'),
            isTransposeCharacter: createHotkey('transposeCharacter'),
            isUndo: createHotkey('undo'),
            isUntab: createComposing('untab'),
          },
          mergeDeepToNodes = (options) => {
            applyDeepToNodes({ ...options, apply: merge_default() })
          },
          pipeInsertDataQuery = (editor, plugins2, options) =>
            plugins2.every((p) => {
              const query = p.parser?.query
              return (
                !query || query({ ...getEditorPlugin(editor, p), ...options })
              )
            }),
          ParserPlugin = createSlatePlugin({ key: 'parser' }).overrideEditor(
            ({ editor, tf: { insertData } }) => ({
              transforms: {
                insertData(dataTransfer) {
                  ;[...editor.meta.pluginList].reverse().some((plugin) => {
                    const parser = plugin.parser
                    if (!parser) return !1
                    const injectedPlugins = getInjectedPlugins(editor, plugin),
                      { deserialize, format, mimeTypes } = parser
                    if (!format) return !1
                    const formats = Array.isArray(format) ? format : [format],
                      mimeTypeList =
                        mimeTypes ||
                        formats.map((fmt) =>
                          fmt.includes('/') ? fmt : `text/${fmt}`
                        )
                    for (const mimeType of mimeTypeList) {
                      let data = dataTransfer.getData(mimeType)
                      if (!data) continue
                      if (
                        !pipeInsertDataQuery(editor, injectedPlugins, {
                          data,
                          dataTransfer,
                          mimeType,
                        })
                      )
                        continue
                      data = pipeTransformData(editor, injectedPlugins, {
                        data,
                        dataTransfer,
                        mimeType,
                      })
                      let fragment = deserialize?.({
                        ...getEditorPlugin(editor, plugin),
                        data,
                        dataTransfer,
                        mimeType,
                      })
                      if (
                        fragment?.length &&
                        ((fragment = pipeTransformFragment(
                          editor,
                          injectedPlugins,
                          { data, dataTransfer, fragment, mimeType }
                        )),
                        0 !== fragment.length)
                      )
                        return (
                          pipeInsertFragment(editor, injectedPlugins, {
                            data,
                            dataTransfer,
                            fragment,
                            mimeType,
                          }),
                          !0
                        )
                    }
                    return !1
                  }) || insertData(dataTransfer)
                },
              },
            })
          ),
          withSlate = (
            e,
            {
              id,
              affinity = !0,
              autoSelect,
              chunking = !0,
              maxLength,
              nodeId,
              plugins: plugins2 = [],
              readOnly = !1,
              rootPlugin,
              selection,
              shouldNormalizeEditor,
              skipInitialization,
              value,
              onReady,
              ...pluginConfig
            } = {}
          ) => {
            const editor = e
            ;((editor.id = id ?? editor.id ?? nanoid()),
              (editor.meta.key = editor.meta.key ?? nanoid()),
              (editor.meta.isFallback = !1),
              (editor.dom = {
                composing: !1,
                currentKeyboardEvent: null,
                focused: !1,
                prevSelection: null,
                readOnly,
              }),
              (editor.getApi = () => editor.api),
              (editor.getTransforms = () => editor.transforms),
              (editor.getPlugin = (plugin) =>
                (function getSlatePlugin(editor, p) {
                  let plugin = p
                  const editorPlugin = editor.plugins[p.key]
                  return (
                    editorPlugin ||
                    (plugin.node || (plugin = createSlatePlugin(plugin)),
                    plugin.__resolved ? plugin : resolvePlugin(editor, plugin))
                  )
                })(editor, plugin)),
              (editor.getType = (pluginKey) =>
                (function getPluginType(editor, key) {
                  const p = editor.getPlugin({ key })
                  return p.node.type ?? p.key ?? ''
                })(editor, pluginKey)),
              (editor.getInjectProps = (plugin) => {
                const nodeProps =
                  editor.getPlugin(plugin).inject?.nodeProps ?? {}
                return (
                  (nodeProps.nodeKey =
                    nodeProps.nodeKey ?? editor.getType(plugin.key)),
                  (nodeProps.styleKey =
                    nodeProps.styleKey ?? nodeProps.nodeKey),
                  nodeProps
                )
              }),
              (editor.getOptionsStore = (plugin) =>
                editor.getPlugin(plugin).optionsStore),
              (editor.getOptions = (plugin) =>
                editor.getOptionsStore(plugin)
                  ? editor.getOptionsStore(plugin).get('state')
                  : editor.getPlugin(plugin).options),
              (editor.getOption = (plugin, key, ...args) => {
                const store = editor.getOptionsStore(plugin)
                return store
                  ? key in store.get('state') || key in store.selectors
                    ? store.get(key, ...args)
                    : void editor.api.debug.error(
                        `editor.getOption: ${key} option is not defined in plugin ${plugin.key}.`,
                        'OPTION_UNDEFINED'
                      )
                  : editor.getPlugin(plugin).options[key]
              }),
              (editor.setOption = (plugin, key, ...args) => {
                const store = editor.getOptionsStore(plugin)
                store &&
                  (key in store.get('state')
                    ? store.set(key, ...args)
                    : editor.api.debug.error(
                        `editor.setOption: ${key} option is not defined in plugin ${plugin.key}.`,
                        'OPTION_UNDEFINED'
                      ))
              }),
              (editor.setOptions = (plugin, options) => {
                const store = editor.getOptionsStore(plugin)
                store &&
                  ('object' == typeof options
                    ? store.set('state', (draft) => {
                        Object.assign(draft, options)
                      })
                    : 'function' == typeof options &&
                      store.set('state', options))
              }))
            const corePlugins = (({
              affinity,
              chunking,
              maxLength,
              nodeId,
              plugins: plugins2 = [],
            }) => {
              let resolvedNodeId = nodeId,
                corePlugins = [
                  DebugPlugin,
                  SlateExtensionPlugin,
                  DOMPlugin,
                  HistoryPlugin,
                  OverridePlugin,
                  ParserPlugin,
                  maxLength
                    ? LengthPlugin.configure({ options: { maxLength } })
                    : LengthPlugin,
                  HtmlPlugin,
                  AstPlugin,
                  NodeIdPlugin.configure({
                    enabled: !1 !== resolvedNodeId,
                    options: !1 === resolvedNodeId ? void 0 : resolvedNodeId,
                  }),
                  AffinityPlugin.configure({ enabled: affinity }),
                  BaseParagraphPlugin,
                  ChunkingPlugin.configure({
                    enabled: !1 !== chunking,
                    options: 'boolean' == typeof chunking ? void 0 : chunking,
                  }),
                ]
              const customPluginsMap = new Map(
                plugins2.map((plugin) => [plugin.key, plugin])
              )
              return (
                (corePlugins = corePlugins.map((corePlugin) => {
                  const customPlugin = customPluginsMap.get(corePlugin.key)
                  if (customPlugin) {
                    const index = plugins2.findIndex(
                      (p) => p.key === corePlugin.key
                    )
                    return (
                      -1 !== index && plugins2.splice(index, 1),
                      customPlugin
                    )
                  }
                  return corePlugin
                })),
                corePlugins
              )
            })({ affinity, chunking, maxLength, nodeId, plugins: plugins2 })
            let rootPluginInstance = createSlatePlugin({
              key: 'root',
              priority: 1e4,
              ...pluginConfig,
              override: {
                ...pluginConfig.override,
                components: {
                  ...pluginConfig.components,
                  ...pluginConfig.override?.components,
                },
              },
              plugins: [...corePlugins, ...plugins2],
            })
            ;(rootPlugin &&
              (rootPluginInstance = rootPlugin(rootPluginInstance)),
              ((editor, plugins2 = []) => {
                ;((editor.plugins = {}),
                  (editor.meta.pluginList = []),
                  (editor.meta.shortcuts = {}),
                  (editor.meta.components = {}),
                  (editor.meta.pluginCache = {
                    decorate: [],
                    handlers: { onChange: [] },
                    inject: { nodeProps: [] },
                    node: {
                      isContainer: [],
                      isLeaf: [],
                      isText: [],
                      leafProps: [],
                      textProps: [],
                      types: {},
                    },
                    normalizeInitialValue: [],
                    render: {
                      aboveEditable: [],
                      aboveNodes: [],
                      aboveSlate: [],
                      afterContainer: [],
                      afterEditable: [],
                      beforeContainer: [],
                      beforeEditable: [],
                      belowNodes: [],
                      belowRootNodes: [],
                    },
                    rules: { match: [] },
                    useHooks: [],
                  }))
                const resolvedPlugins = resolveAndSortPlugins(editor, plugins2)
                ;(applyPluginsToEditor(editor, resolvedPlugins),
                  resolvePluginOverrides(editor),
                  resolvePluginStores(editor),
                  editor.meta.pluginList.forEach((plugin) => {
                    ;(plugin.extendEditor &&
                      ((editor = plugin.extendEditor(
                        getEditorPlugin(editor, plugin)
                      )),
                      syncLegacyMethods(editor)),
                      resolvePluginMethods(editor, plugin),
                      plugin.node?.isContainer &&
                        editor.meta.pluginCache.node.isContainer.push(
                          plugin.key
                        ),
                      (editor.meta.pluginCache.node.types[plugin.node.type] =
                        plugin.key),
                      plugin.inject?.nodeProps &&
                        editor.meta.pluginCache.inject.nodeProps.push(
                          plugin.key
                        ),
                      plugin.render?.node &&
                        (editor.meta.components[plugin.key] =
                          plugin.render.node),
                      plugin.node?.isLeaf &&
                        (!0 === plugin.node?.isDecoration ||
                          plugin.render.leaf) &&
                        editor.meta.pluginCache.node.isLeaf.push(plugin.key),
                      plugin.node.isLeaf &&
                        !1 === plugin.node.isDecoration &&
                        editor.meta.pluginCache.node.isText.push(plugin.key),
                      plugin.node?.leafProps &&
                        editor.meta.pluginCache.node.leafProps.push(plugin.key),
                      plugin.node.textProps &&
                        editor.meta.pluginCache.node.textProps.push(plugin.key),
                      plugin.render.aboveEditable &&
                        editor.meta.pluginCache.render.aboveEditable.push(
                          plugin.key
                        ),
                      plugin.render.aboveSlate &&
                        editor.meta.pluginCache.render.aboveSlate.push(
                          plugin.key
                        ),
                      plugin.render.afterEditable &&
                        editor.meta.pluginCache.render.afterEditable.push(
                          plugin.key
                        ),
                      plugin.render.beforeEditable &&
                        editor.meta.pluginCache.render.beforeEditable.push(
                          plugin.key
                        ),
                      plugin.rules?.match &&
                        editor.meta.pluginCache.rules.match.push(plugin.key),
                      plugin.render.afterContainer &&
                        editor.meta.pluginCache.render.afterContainer.push(
                          plugin.key
                        ),
                      plugin.render.beforeContainer &&
                        editor.meta.pluginCache.render.beforeContainer.push(
                          plugin.key
                        ),
                      plugin.render.belowRootNodes &&
                        editor.meta.pluginCache.render.belowRootNodes.push(
                          plugin.key
                        ),
                      plugin.normalizeInitialValue &&
                        editor.meta.pluginCache.normalizeInitialValue.push(
                          plugin.key
                        ),
                      plugin.decorate &&
                        editor.meta.pluginCache.decorate.push(plugin.key),
                      plugin.render.aboveNodes &&
                        editor.meta.pluginCache.render.aboveNodes.push(
                          plugin.key
                        ),
                      plugin.render.belowNodes &&
                        editor.meta.pluginCache.render.belowNodes.push(
                          plugin.key
                        ),
                      plugin.useHooks &&
                        editor.meta.pluginCache.useHooks.push(plugin.key),
                      plugin.handlers?.onChange &&
                        editor.meta.pluginCache.handlers.onChange.push(
                          plugin.key
                        ))
                  }),
                  resolvePluginShortcuts(editor))
              })(editor, [rootPluginInstance]))
            const normalizeNode = editor.tf.normalizeNode
            return (
              (editor.tf.normalizeNode = (...args) => {
                if (editor.api.shouldNormalizeNode(args[0]))
                  return normalizeNode(...args)
              }),
              (editor.normalizeNode = editor.tf.normalizeNode),
              skipInitialization ||
                editor.tf.init({
                  autoSelect,
                  selection,
                  shouldNormalizeEditor,
                  value,
                  onReady,
                }),
              editor
            )
          },
          methodsToWrap = [
            'configure',
            'configurePlugin',
            'extendEditorApi',
            'extendSelectors',
            'extendApi',
            'extendEditorTransforms',
            'extendTransforms',
            'overrideEditor',
            'extend',
            'extendPlugin',
          ]
        function toPlatePlugin(basePlugin, extendConfig) {
          const plugin = { ...basePlugin }
          if (
            (methodsToWrap.forEach((method) => {
              const originalMethod = plugin[method]
              plugin[method] = (...args) =>
                toPlatePlugin(originalMethod(...args))
            }),
            !extendConfig)
          )
            return plugin
          return plugin.extend(extendConfig)
        }
        var createPlatePlugin = (config = {}) =>
          toPlatePlugin(createSlatePlugin(config))
        function createTPlatePlugin(config = {}) {
          return createPlatePlugin(config)
        }
        function getEditorPlugin2(editor, plugin) {
          return getEditorPlugin(editor, plugin)
        }
        function getPlugin2(editor, plugin) {
          return (
            editor.plugins[plugin.key] ?? createPlatePlugin({ key: plugin.key })
          )
        }
        var SlateReactExtensionPlugin = toPlatePlugin(SlateExtensionPlugin, {
            handlers: {
              onKeyDown: ({ editor, event }) => {
                ;(event.persist(),
                  (editor.dom.currentKeyboardEvent = event),
                  Hotkeys.isMoveUpward(event)
                    ? editor.tf.moveLine({ reverse: !0 }) &&
                      (event.preventDefault(), event.stopPropagation())
                    : Hotkeys.isMoveDownward(event)
                      ? editor.tf.moveLine({ reverse: !1 }) &&
                        (event.preventDefault(), event.stopPropagation())
                      : Hotkeys.isTab(editor, event) ||
                          Hotkeys.isUntab(editor, event)
                        ? editor.tf.tab({
                            reverse: Hotkeys.isUntab(editor, event),
                          }) &&
                          (event.preventDefault(), event.stopPropagation())
                        : Hotkeys.isSelectAll(event)
                          ? editor.tf.selectAll() &&
                            (event.preventDefault(), event.stopPropagation())
                          : Hotkeys.isEscape(event) &&
                            editor.tf.escape() &&
                            (event.preventDefault(), event.stopPropagation()))
              },
            },
          })
            .extendEditorApi(({ editor }) => ({
              redecorate: () => {
                editor.api.debug.warn(
                  'The method editor.api.redecorate() has not been overridden. This may cause unexpected behavior. Please ensure that all required editor methods are properly defined.',
                  'OVERRIDE_MISSING'
                )
              },
            }))
            .extendEditorTransforms(({ editor, tf: { reset } }) => ({
              reset(options) {
                const isFocused = editor.api.isFocused()
                ;(reset(options),
                  isFocused && editor.tf.focus({ edge: 'startEditor' }))
              },
            }))
            .overrideEditor(({ editor, tf: { normalizeNode } }) => ({
              transforms: {
                normalizeNode(entry, options) {
                  dist_isDefined(entry[0]._memo)
                    ? editor.tf.unsetNodes('_memo', { at: entry[1] })
                    : normalizeNode(entry, options)
                },
              },
            })),
          EventEditorStore = createZustandStore(
            { blur: null, focus: null, last: null },
            { mutative: !0, name: 'event-editor' }
          ),
          { useValue: useEventEditorValue } = EventEditorStore,
          EventEditorPlugin = createPlatePlugin({
            key: 'eventEditor',
            handlers: {
              onBlur: ({ editor }) => {
                ;(EventEditorStore.get('focus') === editor.id &&
                  EventEditorStore.set('focus', null),
                  EventEditorStore.set('blur', editor.id),
                  document.dispatchEvent(
                    new CustomEvent('blur-editor-event', {
                      detail: { id: editor.id },
                    })
                  ))
              },
              onFocus: ({ editor }) => {
                ;(EventEditorStore.set('focus', editor.id),
                  document.dispatchEvent(
                    new CustomEvent('focus-editor-event', {
                      detail: { id: editor.id },
                    })
                  ))
              },
            },
          }),
          ParagraphPlugin = toPlatePlugin(
            BaseParagraphPlugin,
            ({ editor, type }) => ({
              shortcuts: {
                toggleParagraph: {
                  keys: [
                    [Key_Mod, Key_Alt, '0'],
                    [Key_Mod, Key_Shift, '0'],
                  ],
                  preventDefault: !0,
                  handler: () => {
                    editor.tf.toggleBlock(type)
                  },
                },
              },
            })
          ),
          ReactPlugin = toPlatePlugin(DOMPlugin, {
            key: 'dom',
            extendEditor: ({ editor }) => (0, index_es.o$)(editor),
          }),
          createPlateEditor = ({
            editor = dist_createEditor(),
            ...options
          } = {}) =>
            ((e, { plugins: plugins2 = [], ...options } = {}) =>
              withSlate(e, {
                ...options,
                plugins: [
                  SlateReactExtensionPlugin,
                  ReactPlugin,
                  EventEditorPlugin,
                  ParagraphPlugin,
                  ...plugins2,
                ],
              }))(editor, options),
          DOM_HANDLERS = [
            'onCopy',
            'onCopyCapture',
            'onCut',
            'onCutCapture',
            'onPaste',
            'onPasteCapture',
            'onCompositionEnd',
            'onCompositionEndCapture',
            'onCompositionStart',
            'onCompositionStartCapture',
            'onCompositionUpdate',
            'onCompositionUpdateCapture',
            'onFocus',
            'onFocusCapture',
            'onBlur',
            'onBlurCapture',
            'onDOMBeforeInput',
            'onBeforeInput',
            'onBeforeInputCapture',
            'onInput',
            'onInputCapture',
            'onReset',
            'onResetCapture',
            'onSubmit',
            'onSubmitCapture',
            'onInvalid',
            'onInvalidCapture',
            'onLoad',
            'onLoadCapture',
            'onKeyDown',
            'onKeyDownCapture',
            'onKeyPress',
            'onKeyPressCapture',
            'onKeyUp',
            'onKeyUpCapture',
            'onAbort',
            'onAbortCapture',
            'onCanPlay',
            'onCanPlayCapture',
            'onCanPlayThrough',
            'onCanPlayThroughCapture',
            'onDurationChange',
            'onDurationChangeCapture',
            'onEmptied',
            'onEmptiedCapture',
            'onEncrypted',
            'onEncryptedCapture',
            'onEnded',
            'onEndedCapture',
            'onLoadedData',
            'onLoadedDataCapture',
            'onLoadedMetadata',
            'onLoadedMetadataCapture',
            'onLoadStart',
            'onLoadStartCapture',
            'onPause',
            'onPauseCapture',
            'onPlay',
            'onPlayCapture',
            'onPlaying',
            'onPlayingCapture',
            'onProgress',
            'onProgressCapture',
            'onRateChange',
            'onRateChangeCapture',
            'onSeeked',
            'onSeekedCapture',
            'onSeeking',
            'onSeekingCapture',
            'onStalled',
            'onStalledCapture',
            'onSuspend',
            'onSuspendCapture',
            'onTimeUpdate',
            'onTimeUpdateCapture',
            'onVolumeChange',
            'onVolumeChangeCapture',
            'onWaiting',
            'onWaitingCapture',
            'onAuxClick',
            'onAuxClickCapture',
            'onClick',
            'onClickCapture',
            'onContextMenu',
            'onContextMenuCapture',
            'onDoubleClick',
            'onDoubleClickCapture',
            'onDrag',
            'onDragCapture',
            'onDragEnd',
            'onDragEndCapture',
            'onDragEnter',
            'onDragEnterCapture',
            'onDragExit',
            'onDragExitCapture',
            'onDragLeave',
            'onDragLeaveCapture',
            'onDragOver',
            'onDragOverCapture',
            'onDragStart',
            'onDragStartCapture',
            'onDrop',
            'onDropCapture',
            'onMouseDown',
            'onMouseDownCapture',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseMoveCapture',
            'onMouseOut',
            'onMouseOutCapture',
            'onMouseOver',
            'onMouseOverCapture',
            'onMouseUp',
            'onMouseUpCapture',
            'onSelect',
            'onSelectCapture',
            'onTouchCancel',
            'onTouchCancelCapture',
            'onTouchEnd',
            'onTouchEndCapture',
            'onTouchMove',
            'onTouchMoveCapture',
            'onTouchStart',
            'onTouchStartCapture',
            'onPointerDown',
            'onPointerDownCapture',
            'onPointerMove',
            'onPointerUp',
            'onPointerUpCapture',
            'onPointerCancel',
            'onPointerCancelCapture',
            'onPointerEnter',
            'onPointerLeave',
            'onPointerOver',
            'onPointerOverCapture',
            'onPointerOut',
            'onPointerOutCapture',
            'onGotPointerCapture',
            'onGotPointerCaptureCapture',
            'onLostPointerCapture',
            'onLostPointerCaptureCapture',
            'onScroll',
            'onScrollCapture',
            'onWheel',
            'onWheelCapture',
            'onAnimationStart',
            'onAnimationStartCapture',
            'onAnimationEnd',
            'onAnimationEndCapture',
            'onAnimationIteration',
            'onAnimationIterationCapture',
            'onTransitionEnd',
            'onTransitionEndCapture',
          ],
          getRenderNodeProps = ({
            attributes: nodeAttributes,
            editor,
            plugin,
            props,
            readOnly,
          }) => {
            let newProps = {
              ...props,
              ...(plugin
                ? getEditorPlugin2(editor, plugin)
                : { api: editor.api, editor, tf: editor.transforms }),
            }
            const { className } = props,
              pluginProps = getPluginNodeProps({
                attributes: nodeAttributes,
                plugin,
                props: newProps,
              })
            return (
              (newProps = {
                ...pluginProps,
                attributes: {
                  ...pluginProps.attributes,
                  className:
                    (0, dist_clsx.$)(
                      getSlateClass(plugin?.node.type),
                      pluginProps.attributes?.className,
                      className
                    ) || void 0,
                },
              }),
              (newProps = pipeInjectNodeProps(
                editor,
                newProps,
                (node) => editor.api.findPath(node),
                readOnly
              )),
              newProps.attributes?.style &&
                0 === Object.keys(newProps.attributes.style).length &&
                delete newProps.attributes.style,
              newProps
            )
          },
          pipeHandler = (editor, { editableProps, handlerKey }) => {
            const propsHandler = editableProps?.[handlerKey],
              relevantPlugins = editor.meta.pluginList.filter(
                (plugin) => plugin.handlers?.[handlerKey]
              )
            if (0 !== relevantPlugins.length || propsHandler)
              return (event) => {
                const handledEvent =
                  event instanceof Event
                    ? ((domEvent) => {
                        let propagationStopped = !1
                        return {
                          ...domEvent,
                          bubbles: domEvent.bubbles,
                          cancelable: domEvent.cancelable,
                          currentTarget: domEvent.currentTarget,
                          defaultPrevented: domEvent.defaultPrevented,
                          eventPhase: domEvent.eventPhase,
                          isTrusted: domEvent.isTrusted,
                          nativeEvent: domEvent,
                          target: domEvent.target,
                          timeStamp: domEvent.timeStamp,
                          type: domEvent.type,
                          isDefaultPrevented: () => domEvent.defaultPrevented,
                          isPropagationStopped: () => propagationStopped,
                          persist: () => {
                            throw new Error(
                              'persist is not implemented for synthetic events created using convertDomEventToSyntheticEvent'
                            )
                          },
                          preventDefault: () => domEvent.preventDefault(),
                          stopPropagation: () => {
                            ;((propagationStopped = !0),
                              domEvent.stopPropagation())
                          },
                        }
                      })(event)
                    : event
                return (
                  !!relevantPlugins.some((plugin) => {
                    if (isEditOnly(editor.dom.readOnly, plugin, 'handlers'))
                      return !1
                    const shouldTreatEventAsHandled = (0,
                    plugin.handlers[handlerKey])({
                      ...getEditorPlugin2(editor, plugin),
                      event: handledEvent,
                    })
                    return (
                      null != shouldTreatEventAsHandled &&
                      shouldTreatEventAsHandled
                    )
                  }) ||
                  ((event, handler) => {
                    if (!handler) return !1
                    const shouldTreatEventAsHandled = handler(event)
                    return null != shouldTreatEventAsHandled
                      ? shouldTreatEventAsHandled
                      : event.isPropagationStopped()
                  })(handledEvent, propsHandler)
                )
              }
          },
          useNodeAttributes2 = (props, ref) => ({
            ...props.attributes,
            className:
              (0, dist_clsx.$)(props.attributes.className, props.className) ||
              void 0,
            ref: useComposedRef(ref, props.attributes.ref),
            style: { ...props.attributes.style, ...props.style },
          }),
          PlateElement = react.forwardRef(function PlateElement2(
            { as: Tag = 'div', children, insetProp, ...props },
            ref
          ) {
            const attributes = useNodeAttributes2(props, ref),
              mounted = useEditorMounted(),
              block = react.useMemo(
                () =>
                  mounted &&
                  !!props.element.id &&
                  !!props.editor.api.isBlock(props.element),
                [props.element, props.editor, mounted]
              ),
              inset =
                insetProp ??
                'directional' === props.plugin?.rules.selection?.affinity
            return react.createElement(
              react.Fragment,
              null,
              inset && react.createElement(NonBreakingSpace2, null),
              react.createElement(
                Tag,
                {
                  'data-slate-node': 'element',
                  'data-slate-inline': attributes['data-slate-inline'],
                  'data-block-id': block ? props.element.id : void 0,
                  ...attributes,
                  style: { position: 'relative', ...attributes?.style },
                },
                children,
                inset && react.createElement(NonBreakingSpace2, null)
              )
            )
          }),
          PlateText = react.forwardRef(
            ({ as: Tag = 'span', children, ...props }, ref) => {
              const attributes = useNodeAttributes2(props, ref)
              return react.createElement(Tag, { ...attributes }, children)
            }
          ),
          NonBreakingSpace2 = () =>
            react.createElement(
              'span',
              { style: { fontSize: 0, lineHeight: 0 }, contentEditable: !1 },
              String.fromCodePoint(160)
            ),
          PlateLeaf = react.forwardRef(
            (
              { as: Tag = 'span', children, inset: insetProp, ...props },
              ref
            ) => {
              const attributes = useNodeAttributes2(props, ref)
              return (insetProp ??
                'hard' === props.plugin?.rules.selection?.affinity)
                ? react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(NonBreakingSpace2, null),
                    react.createElement(
                      Tag,
                      { ...attributes },
                      children,
                      react.createElement(NonBreakingSpace2, null)
                    )
                  )
                : react.createElement(Tag, { ...attributes }, children)
            }
          ),
          pipeRenderLeaf = (editor, renderLeafProp) => {
            const renderLeafs = [],
              leafPropsPlugins = []
            return (
              editor.meta.pluginCache.node.isLeaf.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin &&
                  renderLeafs.push(
                    ((editor, plugin) =>
                      function render(props) {
                        const {
                            render: { leaf: leafComponent, node },
                          } = plugin,
                          { children, leaf } = props,
                          readOnly = (0, index_es.cQ)()
                        if (isEditOnly(readOnly, plugin, 'render'))
                          return children
                        if (leaf[plugin.node.type]) {
                          const Component = leafComponent ?? node,
                            Leaf = Component ?? PlateLeaf,
                            ctxProps = getRenderNodeProps({
                              attributes: leaf.attributes,
                              editor,
                              plugin,
                              props,
                              readOnly,
                            }),
                            defaultProps = Component
                              ? {}
                              : { as: plugin.render?.as }
                          return react.createElement(
                            Leaf,
                            { ...defaultProps, ...ctxProps },
                            children
                          )
                        }
                        return children
                      })(editor, plugin)
                  )
              }),
              editor.meta.pluginCache.node.leafProps.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                plugin && leafPropsPlugins.push(plugin)
              }),
              function render({ attributes, ...props }) {
                const readOnly = (0, index_es.cQ)()
                if (
                  (renderLeafs.forEach((renderLeaf) => {
                    const newChildren = renderLeaf(props)
                    void 0 !== newChildren && (props.children = newChildren)
                  }),
                  leafPropsPlugins.forEach((plugin) => {
                    if (props.leaf[plugin.node.type]) {
                      const pluginLeafProps =
                        'function' == typeof plugin.node.leafProps
                          ? plugin.node.leafProps(props)
                          : (plugin.node.leafProps ?? {})
                      ;(pluginLeafProps.className &&
                        (pluginLeafProps.className = (0, dist_clsx.A)(
                          props.className,
                          pluginLeafProps.className
                        )),
                        (attributes = { ...attributes, ...pluginLeafProps }))
                    }
                  }),
                  renderLeafProp)
                )
                  return renderLeafProp({ attributes, ...props })
                const ctxProps = getRenderNodeProps({
                  editor,
                  props: { attributes, ...props },
                  readOnly,
                })
                return react.createElement(
                  PlateLeaf,
                  { ...ctxProps },
                  props.children
                )
              }
            )
          },
          pipeRenderText = (editor, renderTextProp) => {
            const renderTexts = [],
              textPropsPlugins = []
            return (
              editor.meta.pluginList.forEach((plugin) => {
                ;(plugin.node.isLeaf &&
                  !1 === plugin.node.isDecoration &&
                  renderTexts.push(
                    ((editor, plugin) =>
                      function render(nodeProps) {
                        const {
                            render: { node },
                          } = plugin,
                          { children, text } = nodeProps,
                          readOnly = (0, index_es.cQ)()
                        if (isEditOnly(readOnly, plugin, 'render'))
                          return children
                        if (text[plugin.node.type ?? plugin.key]) {
                          const Text2 = node ?? PlateText,
                            ctxProps = getRenderNodeProps({
                              attributes: nodeProps.attributes,
                              editor,
                              plugin,
                              props: nodeProps,
                              readOnly,
                            }),
                            defaultProps = node ? {} : { as: plugin.render?.as }
                          return react.createElement(
                            Text2,
                            { ...defaultProps, ...ctxProps },
                            children
                          )
                        }
                        return children
                      })(editor, plugin)
                  ),
                  plugin.node.textProps && textPropsPlugins.push(plugin))
              }),
              function render({ attributes, ...props }) {
                const readOnly = (0, index_es.cQ)()
                if (
                  (renderTexts.forEach((renderText) => {
                    const newChildren = renderText(props)
                    void 0 !== newChildren && (props.children = newChildren)
                  }),
                  textPropsPlugins.forEach((plugin) => {
                    if (props.text[plugin.node.type ?? plugin.key]) {
                      const pluginTextProps =
                        'function' == typeof plugin.node.textProps
                          ? plugin.node.textProps(props)
                          : (plugin.node.textProps ?? {})
                      ;(pluginTextProps.className &&
                        (pluginTextProps.className = (0, dist_clsx.A)(
                          props.className,
                          pluginTextProps.className
                        )),
                        (attributes = { ...attributes, ...pluginTextProps }))
                    }
                  }),
                  renderTextProp)
                )
                  return renderTextProp({ attributes, ...props })
                const ctxProps = getRenderNodeProps({
                  editor,
                  props: { attributes, ...props },
                  readOnly,
                })
                return react.createElement(
                  PlateText,
                  { ...ctxProps },
                  props.children
                )
              }
            )
          },
          useNodePath = (node) => {
            const editor = useEditorRef()
            return (function useMemoizedSelector(
              selector,
              deps,
              equalityFn = (a, b) => a === b
            ) {
              const [memoizedValue, setMemoizedValue] = react.useState(() =>
                  selector()
                ),
                previousValueRef = react.useRef(memoizedValue)
              return (
                react.useEffect(() => {
                  const newValue = selector()
                  equalityFn(previousValueRef.current, newValue) ||
                    (setMemoizedValue(newValue),
                    (previousValueRef.current = newValue))
                }, deps),
                memoizedValue
              )
            })(
              () => editor.api.findPath(node),
              [editor, node],
              (a, b) => !!a && !!b && PathApi.equals(a, b)
            )
          },
          useSlateProps = ({ id }) => {
            const editor = useEditorRef(id),
              store = usePlateStore(id),
              onChangeProp = useAtomStoreValue(store, 'onChange'),
              onValueChangeProp = useAtomStoreValue(store, 'onValueChange'),
              onSelectionChangeProp = useAtomStoreValue(
                store,
                'onSelectionChange'
              ),
              updateVersionEditor = useIncrementVersion('versionEditor', id),
              updateVersionSelection = useIncrementVersion(
                'versionSelection',
                id
              ),
              updateVersionValue = useIncrementVersion('versionValue', id),
              onChange = react.useCallback(
                (newValue) => {
                  updateVersionEditor()
                  const eventIsHandled = ((editor, value) =>
                    editor.meta.pluginCache.handlers.onChange.some((key) => {
                      const plugin = getPlugin2(editor, { key })
                      if (isEditOnly(editor.dom.readOnly, plugin, 'handlers'))
                        return !1
                      const shouldTreatEventAsHandled = (0,
                      plugin.handlers.onChange)({
                        ...getEditorPlugin2(editor, plugin),
                        value,
                      })
                      return (
                        null != shouldTreatEventAsHandled &&
                        shouldTreatEventAsHandled
                      )
                    }))(editor, newValue)
                  eventIsHandled || onChangeProp?.({ editor, value: newValue })
                },
                [editor, onChangeProp, updateVersionEditor]
              ),
              onValueChange = react.useMemo(
                () => (value) => {
                  ;(updateVersionValue(),
                    onValueChangeProp?.({ editor, value }))
                },
                [editor, onValueChangeProp, updateVersionValue]
              ),
              onSelectionChange = react.useMemo(
                () => (selection) => {
                  ;(updateVersionSelection(),
                    onSelectionChangeProp?.({ editor, selection }))
                },
                [editor, onSelectionChangeProp, updateVersionSelection]
              )
            return react.useMemo(
              () => ({
                key: editor.meta.key,
                editor,
                initialValue: editor.children,
                value: editor.children,
                onChange,
                onSelectionChange,
                onValueChange,
              }),
              [editor, onChange, onSelectionChange, onValueChange]
            )
          },
          { ElementProvider, elementStore, useElementStore } = createAtomStore(
            { element: null, entry: null, path: null },
            {
              effect: function Effect() {
                const path = ((pluginKey) => {
                  const editor = useEditorRef(),
                    value = useAtomStoreValue(
                      useElementStore(pluginKey),
                      'path'
                    )
                  if (value) return value
                  editor.api.debug.warn(
                    `usePath(${pluginKey}) hook must be used inside the node component's context`,
                    'USE_ELEMENT_CONTEXT'
                  )
                })()
                if (path && PathApi.equals(path, [0]))
                  return react.createElement(FirstBlockEffect, null)
                return null
              },
              name: 'element',
              suppressWarnings: !0,
            }
          )
        function FirstBlockEffect() {
          const editor = useEditorRef(),
            store = usePlateStore(),
            composing = (0, index_es.nY)(),
            readOnly = (0, index_es.cQ)()
          return (
            (editor.dom.readOnly = readOnly),
            (editor.dom.composing = composing),
            react.useLayoutEffect(() => {
              store.set('composing', composing)
            }, [composing, store]),
            null
          )
        }
        function ElementContent({ editor, plugin, ...props }) {
          const element = useElement(),
            readOnly = (0, index_es.cQ)()
          if (isEditOnly(readOnly, plugin, 'render')) return null
          const { children: _children } = props,
            Component = plugin.render?.node,
            Element2 = Component ?? PlateElement
          props = getRenderNodeProps({
            attributes: element.attributes,
            editor,
            plugin,
            props,
            readOnly,
          })
          let children = _children
          editor.meta.pluginCache.render.belowNodes.forEach((key) => {
            const plugin2 = editor.getPlugin({ key }),
              hoc = (0, plugin2.render.belowNodes)({ ...props, key })
            hoc &&
              !isEditOnly(readOnly, plugin2, 'render') &&
              (children = hoc({ ...props, children }))
          })
          const defaultProps = Component ? {} : { as: plugin.render?.as }
          let component = react.createElement(
            Element2,
            { ...defaultProps, ...props },
            children,
            react.createElement(BelowRootNodes, { ...defaultProps, ...props })
          )
          return (
            editor.meta.pluginCache.render.aboveNodes.forEach((key) => {
              const plugin2 = editor.getPlugin({ key }),
                hoc = (0, plugin2.render.aboveNodes)({ ...props, key })
              hoc &&
                !isEditOnly(readOnly, plugin2, 'render') &&
                (component = hoc({ ...props, children: component }))
            }),
            component
          )
        }
        function BelowRootNodes(props) {
          const editor = useEditorRef(),
            readOnly = (0, index_es.cQ)()
          return react.createElement(
            react.Fragment,
            null,
            editor.meta.pluginCache.render.belowRootNodes.map((key) => {
              const plugin = editor.getPlugin({ key })
              if (isEditOnly(readOnly, plugin, 'render')) return null
              const Component = plugin.render.belowRootNodes
              return react.createElement(Component, { key, ...props })
            })
          )
        }
        var pipeRenderElement = (editor, renderElementProp) =>
            function render(props) {
              const readOnly = (0, index_es.cQ)(),
                path = useNodePath(props.element),
                plugin = getPluginByType(editor, props.element.type)
              if (plugin?.node.isElement)
                return ((editor, plugin) =>
                  function render(props) {
                    const { element, path } = props
                    return react.createElement(
                      ElementProvider,
                      {
                        element,
                        entry: [element, path],
                        path,
                        scope: plugin.key,
                      },
                      react.createElement(ElementContent, {
                        editor,
                        plugin,
                        ...props,
                      })
                    )
                  })(
                  editor,
                  plugin
                )({ ...props, path })
              if (renderElementProp)
                return renderElementProp({ ...props, path })
              const ctxProps = getRenderNodeProps({
                editor,
                props: { ...props, path },
                readOnly,
              })
              return react.createElement(
                ElementProvider,
                {
                  element: ctxProps.element,
                  entry: [ctxProps.element, path],
                  path,
                  scope: ctxProps.element.type ?? 'default',
                },
                react.createElement(
                  PlateElement,
                  { ...ctxProps },
                  props.children,
                  react.createElement(BelowRootNodes, { ...ctxProps })
                )
              )
            },
          {
            PlateControllerProvider: PlateController,
            plateControllerStore,
            usePlateControllerStore: _usePlateControllerStore,
          } = createAtomStore(
            {
              activeId: vanilla_atom(null),
              editorStores: vanilla_atom({}),
              primaryEditorIds: vanilla_atom([]),
            },
            { name: 'plateController' }
          ),
          usePlateControllerLocalStore = (options) =>
            _usePlateControllerStore({
              scope: 'string' == typeof options ? options : void 0,
              warnIfNoStore: !1,
              ...('object' == typeof options ? options : {}),
            }),
          createPlateStore =
            (Symbol('global-plate'),
            ({
              id,
              composing = !1,
              containerRef = { current: null },
              decorate = null,
              editor,
              isMounted = !1,
              primary = !0,
              readOnly = null,
              renderChunk = null,
              renderElement = null,
              renderLeaf = null,
              renderText = null,
              scrollRef = { current: null },
              versionDecorate = 1,
              versionEditor = 1,
              versionSelection = 1,
              versionValue = 1,
              onChange = null,
              onSelectionChange = null,
              onValueChange = null,
              ...state
            } = {}) =>
              createAtomStore(
                {
                  composing,
                  containerRef,
                  decorate,
                  editor,
                  isMounted,
                  primary,
                  readOnly,
                  renderChunk,
                  renderElement,
                  renderLeaf,
                  renderText,
                  scrollRef,
                  versionDecorate,
                  versionEditor,
                  versionSelection,
                  versionValue,
                  onChange,
                  onSelectionChange,
                  onValueChange,
                  ...state,
                },
                {
                  name: 'plate',
                  suppressWarnings: !0,
                  extend: (atoms) => ({
                    trackedEditor: vanilla_atom((get) => ({
                      editor: get(atoms.editor),
                      version: get(atoms.versionEditor),
                    })),
                    trackedSelection: vanilla_atom((get) => ({
                      selection: get(atoms.editor).selection,
                      version: get(atoms.versionSelection),
                    })),
                    trackedValue: vanilla_atom((get) => ({
                      value: get(atoms.editor).children,
                      version: get(atoms.versionValue),
                    })),
                  }),
                }
              )),
          {
            PlateProvider: PlateStoreProvider,
            plateStore,
            usePlateSet: usePlateLocalSet,
            usePlateState: usePlateLocalState,
            usePlateStore: usePlateLocalStore,
            usePlateValue: usePlateLocalValue,
          } = createPlateStore(),
          { usePlateStore: useFallbackPlateStore } = createPlateStore(),
          usePlateStore = (id) => {
            const localStore =
                usePlateLocalStore({ scope: id, warnIfNoStore: !1 }) ?? null,
              [localStoreExists] = react.useState(!!localStore.store),
              store = localStoreExists
                ? localStore
                : ((idProp) => {
                    const storeAtom = react.useMemo(
                      () =>
                        vanilla_atom((get) => {
                          const editorStores = get(
                              plateControllerStore.atom.editorStores
                            ),
                            forId = (id) =>
                              id ? (editorStores[id] ?? null) : null
                          if (idProp) return forId(idProp)
                          const lookupOrder = [
                            get(plateControllerStore.atom.activeId),
                            ...get(plateControllerStore.atom.primaryEditorIds),
                          ]
                          for (const id of lookupOrder) {
                            const store = forId(id)
                            if (store) return store
                          }
                          return null
                        }),
                      [idProp]
                    )
                    return useStoreAtomValue(
                      usePlateControllerLocalStore(),
                      storeAtom
                    )
                  })(id),
              plateControllerExists = !!usePlateControllerLocalStore().store,
              fallbackStore = useFallbackPlateStore()
            if (!store) {
              if (plateControllerExists) return fallbackStore
              throw new Error(
                'Plate hooks must be used inside a Plate or PlateController'
              )
            }
            return store
          },
          useEditorContainerRef = (id) =>
            useAtomStoreValue(usePlateStore(id), 'containerRef'),
          useEditorMounted = (id) =>
            !!useAtomStoreValue(usePlateStore(id), 'isMounted'),
          useEditorReadOnly = (id) =>
            !!useAtomStoreValue(usePlateStore(id), 'readOnly'),
          useEditorComposing = (id) =>
            !!useAtomStoreValue(usePlateStore(id), 'composing'),
          useEditorRef = (id) => {
            const store = usePlateStore(id),
              editor =
                useAtomStoreValue(store, 'editor') ??
                ((options = {}) => {
                  const editor = createPlateEditor(options)
                  return (
                    (editor.meta.isFallback = !0),
                    (editor.apply = () => {
                      throw new Error(
                        'Cannot apply operations on the fallback editor. The fallback editor is used when a hook that depends on the Plate store was unable to locate a valid store. If you are using PlateController, use `useEditorMounted(id?: string)` or `!editor.meta.isFallback` to ensure that a valid Plate store is available before attempting to call operations on the editor.'
                      )
                    }),
                    editor
                  )
                })()
            return ((editor.store = store), editor)
          },
          useIncrementVersion = (key, id) => {
            const previousVersionRef = react.useRef(1),
              store = usePlateStore(id),
              setVersionDecorate = dist_useAtomStoreSet(
                store,
                'versionDecorate'
              ),
              setVersionSelection = dist_useAtomStoreSet(
                store,
                'versionSelection'
              ),
              setVersionValue = dist_useAtomStoreSet(store, 'versionValue'),
              setVersionEditor = dist_useAtomStoreSet(store, 'versionEditor')
            return react.useCallback(() => {
              const nextVersion = previousVersionRef.current + 1
              switch (key) {
                case 'versionDecorate':
                  setVersionDecorate(nextVersion)
                  break
                case 'versionEditor':
                  setVersionEditor(nextVersion)
                  break
                case 'versionSelection':
                  setVersionSelection(nextVersion)
                  break
                case 'versionValue':
                  setVersionValue(nextVersion)
              }
              previousVersionRef.current = nextVersion
            }, [
              key,
              setVersionDecorate,
              setVersionEditor,
              setVersionSelection,
              setVersionValue,
            ])
          }
        var useEditorSelector = (
          selector,
          deps,
          { id, equalityFn = (a, b) => a === b } = {}
        ) => {
          const selectorAtom = react.useMemo(
            () =>
              selectAtom(
                plateStore.atom.trackedEditor,
                ({ editor }, prev) => selector(editor, prev),
                equalityFn
              ),
            deps
          )
          return useStoreAtomValue(usePlateStore(id), selectorAtom)
        }
        function usePluginOption(plugin, key, ...args) {
          return (function useEditorPluginOption(editor, plugin, key, ...args) {
            const store = editor.getOptionsStore(plugin)
            if (!store) return
            if (!(key in store.get('state')) && !(key in store.selectors))
              return void editor.api.debug.error(
                `usePluginOption: ${key} option is not defined in plugin ${plugin.key}`,
                'OPTION_UNDEFINED'
              )
            return (function useStoreValue(store, key, ...args) {
              return store.useValue(key, ...args)
            })(store, key, ...args)
          })(useEditorRef(), plugin, key, ...args)
        }
        var useElement = (pluginKey = 'element') => {
          const editor = useEditorRef(),
            value = useAtomStoreValue(useElementStore(pluginKey), 'element')
          return (
            value ||
            (editor.api.debug.warn(
              `useElement(${pluginKey}) hook must be used inside the node component's context`,
              'USE_ELEMENT_CONTEXT'
            ),
            {})
          )
        }
        function EditorHotkeysEffect({ id, editableRef }) {
          const editor = useEditorRef(id)
          return react.createElement(
            react.Fragment,
            null,
            Object.entries(editor.meta.shortcuts).map(
              ([hotkeyString, hotkeyConfig]) =>
                hotkeyConfig &&
                dist_isDefined(hotkeyConfig.keys) &&
                hotkeyConfig.handler
                  ? react.createElement(HotkeyEffect, {
                      id,
                      key: hotkeyString,
                      editableRef,
                      hotkeyConfig,
                    })
                  : null
            )
          )
        }
        function HotkeyEffect({ id, editableRef, hotkeyConfig }) {
          const editor = useEditorRef(id),
            { keys, handler, ...options } = hotkeyConfig,
            setHotkeyRef = useHotkeys(
              keys,
              (event, eventDetails) => {
                !1 === handler({ editor, event, eventDetails }) ||
                  dist_isDefined(options.preventDefault) ||
                  (event.preventDefault(), event.stopPropagation?.())
              },
              { enableOnContentEditable: !0, ...options },
              []
            )
          return (
            (0, react.useEffect)(() => {
              editableRef.current && setHotkeyRef(editableRef.current)
            }, [setHotkeyRef, editableRef]),
            null
          )
        }
        var EditorMethodsEffect = ({ id }) => {
          const editor = useEditorRef(id),
            redecorate = ((id) => {
              const updateDecorate = useIncrementVersion('versionDecorate', id)
              return react.useCallback(() => {
                updateDecorate()
              }, [updateDecorate])
            })(id)
          return (
            react.useEffect(() => {
              editor.api.redecorate = redecorate
            }, [editor, redecorate]),
            null
          )
        }
        function EditorRefPluginEffect({ id, plugin }) {
          const editor = useEditorRef(id)
          return (plugin.useHooks?.(getEditorPlugin2(editor, plugin)), null)
        }
        function EditorRefEffect({ id }) {
          const store = usePlateStore(id),
            editor = useAtomStoreValue(store, 'editor'),
            setIsMounted = dist_useAtomStoreSet(store, 'isMounted')
          return (
            react.useEffect(
              () => (
                setIsMounted(!0),
                () => {
                  setIsMounted(!1)
                }
              ),
              [setIsMounted]
            ),
            react.createElement(
              react.Fragment,
              null,
              editor.meta.pluginCache.useHooks.map((key) =>
                react.createElement(EditorRefPluginEffect, {
                  id,
                  key,
                  plugin: getPlugin2(editor, { key }),
                })
              )
            )
          )
        }
        function PlateInner({
          children,
          containerRef,
          decorate,
          editor,
          primary,
          readOnly,
          renderElement,
          renderLeaf,
          scrollRef,
          onChange,
          onSelectionChange,
          onValueChange,
        }) {
          return react.createElement(
            PlateStoreProvider,
            {
              readOnly: readOnly ?? editor?.dom.readOnly,
              onChange,
              onSelectionChange,
              onValueChange,
              containerRef,
              decorate,
              editor,
              primary,
              renderElement,
              renderLeaf,
              scope: editor.id,
              scrollRef,
            },
            children
          )
        }
        function Plate(props) {
          const id = (0, react.useId)(),
            containerRef = react.useRef(null),
            scrollRef = react.useRef(null)
          return (
            (function usePlateInstancesWarn(disabled) {
              react.useEffect(() => {
                !disabled &&
                  globalThis.__PLATE_INSTANCES__ &&
                  globalThis.__PLATE_INSTANCES__ > 1 &&
                  react_console.warn(
                    'Detected multiple @platejs/core instances!'
                  )
              }, [disabled])
            })(props.suppressInstanceWarning),
            props.editor
              ? ((props.editor.meta.uid = 'e-' + id.replaceAll(':', '')),
                react.createElement(PlateInner, {
                  key: props.editor.meta.key,
                  containerRef,
                  scrollRef,
                  ...props,
                }))
              : null
          )
        }
        !(function checkPlateInstances() {
          globalThis.__PLATE_INSTANCES__ =
            (globalThis.__PLATE_INSTANCES__ || 0) + 1
        })()
        var PlateContainer = ({ children, ...props }) => {
          const editor = useEditorRef(),
            readOnly = useEditorReadOnly(),
            containerRef = useEditorContainerRef()
          let afterContainer = null,
            beforeContainer = null
          const mainContainer = react.createElement(
            'div',
            { id: editor.meta.uid, ref: containerRef, ...props },
            children
          )
          return (
            editor.meta.pluginCache.render.beforeContainer.forEach((key) => {
              const plugin = editor.getPlugin({ key })
              if (isEditOnly(readOnly, plugin, 'render')) return
              const BeforeContainer = plugin.render.beforeContainer
              beforeContainer = react.createElement(
                react.Fragment,
                null,
                beforeContainer,
                react.createElement(BeforeContainer, { ...props })
              )
            }),
            editor.meta.pluginCache.render.afterContainer.forEach((key) => {
              const plugin = editor.getPlugin({ key })
              if (isEditOnly(readOnly, plugin, 'render')) return
              const AfterContainer = plugin.render.afterContainer
              afterContainer = react.createElement(
                react.Fragment,
                null,
                afterContainer,
                react.createElement(AfterContainer, { ...props })
              )
            }),
            react.createElement(
              react.Fragment,
              null,
              beforeContainer,
              mainContainer,
              afterContainer
            )
          )
        }
        PlateContainer.displayName = 'PlateContainer'
        var PlateControllerEffect = ({ id: idProp }) => {
          const idFromStore = useAtomStoreValue(usePlateStore(), 'editor').id,
            id = idProp ?? idFromStore,
            currentStoreAtom = react.useMemo(
              () =>
                focusAtom(plateControllerStore.atom.editorStores, (optic) =>
                  optic.prop(id)
                ),
              [id]
            ),
            setCurrentStore = useStableFn(
              usePlateControllerLocalStore().setAtom(currentStoreAtom),
              [currentStoreAtom]
            ),
            setPrimaryEditorIds = useStableFn(
              dist_useAtomStoreSet(
                usePlateControllerLocalStore(),
                'primaryEditorIds'
              )
            ),
            setActiveId = useStableFn(
              dist_useAtomStoreSet(usePlateControllerLocalStore(), 'activeId')
            ),
            store = usePlateStore(id),
            primary = useAtomStoreValue(store, 'primary'),
            focused = (0, index_es.zL)()
          return (
            react.useEffect(
              () => (
                setCurrentStore(store ?? null),
                () => {
                  ;(setCurrentStore(null),
                    setActiveId((activeId) =>
                      activeId === id ? null : activeId
                    ))
                }
              ),
              [store, setCurrentStore, setActiveId, id]
            ),
            react.useEffect(() => {
              if (primary)
                return (
                  setPrimaryEditorIds((ids) => [...ids, id]),
                  () => {
                    setPrimaryEditorIds((ids) => ids.filter((i) => i !== id))
                  }
                )
            }, [id, primary, setPrimaryEditorIds]),
            react.useEffect(() => {
              id && focused && setActiveId(id)
            }, [id, focused, setActiveId]),
            null
          )
        }
        function PlateSlate({ id, children }) {
          const slateProps = useSlateProps({ id }),
            editor = useEditorRef(id)
          let aboveSlate = react.createElement(
            index_es.A,
            { ...slateProps },
            children
          )
          return (
            editor.meta.pluginCache.render.aboveSlate.forEach((key) => {
              const AboveSlate = editor.getPlugin({ key }).render.aboveSlate
              aboveSlate = react.createElement(AboveSlate, null, aboveSlate)
            }),
            aboveSlate
          )
        }
        var PlateContent = react.forwardRef(
          (
            {
              autoFocusOnEditable,
              readOnly: readOnlyProp,
              renderEditable,
              ...props
            },
            ref
          ) => {
            const { id } = props,
              editor = useEditorRef(id),
              storeReadOnly = useEditorReadOnly(),
              readOnly = !!props.disabled || (readOnlyProp ?? storeReadOnly)
            if (((editor.dom.readOnly = readOnly), !editor))
              throw new Error(
                'Editor not found. Please ensure that PlateContent is rendered below Plate.'
              )
            const editableProps = (({
                disabled,
                readOnly,
                ...editableProps
              } = {}) => {
                const { id } = editableProps,
                  editor = useEditorRef(id),
                  store = usePlateStore(id),
                  versionDecorate = useAtomStoreValue(store, 'versionDecorate'),
                  storeDecorate = useAtomStoreValue(store, 'decorate'),
                  storeRenderChunk = useAtomStoreValue(store, 'renderChunk'),
                  storeRenderElement = useAtomStoreValue(
                    store,
                    'renderElement'
                  ),
                  storeRenderLeaf = useAtomStoreValue(store, 'renderLeaf'),
                  storeRenderText = useAtomStoreValue(store, 'renderText'),
                  decorateMemo = react.useMemo(
                    () =>
                      pipeDecorate(
                        editor,
                        storeDecorate ?? editableProps?.decorate
                      ),
                    [editableProps?.decorate, editor, storeDecorate]
                  ),
                  decorate = react.useMemo(() => {
                    if (versionDecorate && decorateMemo)
                      return (entry) => decorateMemo(entry)
                  }, [decorateMemo, versionDecorate]),
                  defaultRenderChunk = usePluginOption(
                    ChunkingPlugin,
                    'contentVisibilityAuto'
                  )
                    ? ContentVisibilityChunk
                    : void 0,
                  renderChunk =
                    storeRenderChunk ??
                    editableProps?.renderChunk ??
                    defaultRenderChunk,
                  renderElement = react.useMemo(
                    () =>
                      pipeRenderElement(
                        editor,
                        storeRenderElement ?? editableProps?.renderElement
                      ),
                    [editableProps?.renderElement, editor, storeRenderElement]
                  ),
                  renderLeaf = react.useMemo(
                    () =>
                      pipeRenderLeaf(
                        editor,
                        storeRenderLeaf ?? editableProps?.renderLeaf
                      ),
                    [editableProps?.renderLeaf, editor, storeRenderLeaf]
                  ),
                  renderText = react.useMemo(
                    () =>
                      pipeRenderText(
                        editor,
                        storeRenderText ?? editableProps?.renderText
                      ),
                    [editableProps?.renderText, editor, storeRenderText]
                  ),
                  props = useDeepCompareMemo(() => {
                    const _props = {
                      decorate,
                      renderChunk,
                      renderElement,
                      renderLeaf,
                      renderText,
                    }
                    return (
                      DOM_HANDLERS.forEach((handlerKey) => {
                        const handler = pipeHandler(editor, {
                          editableProps,
                          handlerKey,
                        })
                        handler && (_props[handlerKey] = handler)
                      }),
                      _props
                    )
                  }, [
                    decorate,
                    editableProps,
                    renderChunk,
                    renderElement,
                    renderLeaf,
                    renderText,
                  ])
                return useDeepCompareMemo(
                  () => ({
                    ...omit_default()(editableProps, [
                      ...DOM_HANDLERS,
                      'renderChunk',
                      'renderElement',
                      'renderLeaf',
                      'renderText',
                      'decorate',
                    ]),
                    ...props,
                    'aria-disabled': disabled,
                    className: (0, dist_clsx.A)(
                      'slate-editor',
                      'ignore-click-outside/toolbar',
                      editableProps.className
                    ),
                    'data-readonly': readOnly ? 'true' : void 0,
                    readOnly,
                  }),
                  [editableProps, props, readOnly]
                )
              })({ ...props, readOnly }),
              editableRef = (0, react.useRef)(null),
              combinedRef = useComposedRef(ref, editableRef)
            if (!editor.children || 0 === editor.children.length) return null
            const editable = react.createElement(index_es.Fo, {
              ref: combinedRef,
              ...editableProps,
            })
            let afterEditable = null,
              beforeEditable = null
            ;(editor.meta.pluginCache.render.beforeEditable.forEach((key) => {
              const plugin = editor.getPlugin({ key })
              if (isEditOnly(readOnly, plugin, 'render')) return
              const BeforeEditable = plugin.render.beforeEditable
              beforeEditable = react.createElement(
                react.Fragment,
                null,
                beforeEditable,
                react.createElement(BeforeEditable, { ...editableProps })
              )
            }),
              editor.meta.pluginCache.render.afterEditable.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                if (isEditOnly(readOnly, plugin, 'render')) return
                const AfterEditable = plugin.render.afterEditable
                afterEditable = react.createElement(
                  react.Fragment,
                  null,
                  afterEditable,
                  react.createElement(AfterEditable, { ...editableProps })
                )
              }))
            let aboveEditable = react.createElement(
              react.Fragment,
              null,
              renderEditable ? renderEditable(editable) : editable,
              react.createElement(EditorMethodsEffect, { id }),
              react.createElement(EditorHotkeysEffect, { id, editableRef }),
              react.createElement(EditorRefEffect, { id }),
              react.createElement(PlateControllerEffect, { id })
            )
            return (
              editor.meta.pluginCache.render.aboveEditable.forEach((key) => {
                const plugin = editor.getPlugin({ key })
                if (isEditOnly(readOnly, plugin, 'render')) return
                const AboveEditable = plugin.render.aboveEditable
                aboveEditable = react.createElement(
                  AboveEditable,
                  null,
                  aboveEditable
                )
              }),
              react.createElement(
                PlateSlate,
                { id },
                react.createElement(EditorStateEffect, {
                  id,
                  disabled: props.disabled,
                  readOnly: readOnlyProp,
                  autoFocusOnEditable,
                  editor,
                }),
                beforeEditable,
                aboveEditable,
                afterEditable
              )
            )
          }
        )
        function EditorStateEffect({
          id,
          autoFocusOnEditable,
          disabled,
          editor,
          readOnly,
        }) {
          const store = usePlateStore(id)
          react.useLayoutEffect(() => {
            disabled
              ? store.setReadOnly(!0)
              : dist_isDefined(readOnly) && store.setReadOnly(readOnly)
          }, [disabled, editor.dom, readOnly, store])
          const prevReadOnly = react.useRef(readOnly)
          return (
            react.useEffect(() => {
              ;(autoFocusOnEditable &&
                prevReadOnly.current &&
                !readOnly &&
                editor.tf.focus({ edge: 'endEditor' }),
                (prevReadOnly.current = readOnly))
            }, [autoFocusOnEditable, editor, readOnly]),
            null
          )
        }
        function usePlateEditor(options = {}, deps = []) {
          const [, forceRender] = react.useState({}),
            isMountedRef = react.useRef(!1)
          return (
            react.useEffect(
              () => (
                (isMountedRef.current = !0),
                () => {
                  isMountedRef.current = !1
                }
              ),
              []
            ),
            react.useMemo(() => {
              if (!1 === options.enabled) return null
              return createPlateEditor({
                ...options,
                onReady: (ctx) => {
                  ;(ctx.isAsync && isMountedRef.current && forceRender({}),
                    options.onReady?.(ctx))
                },
              })
            }, [options.id, options.enabled, ...deps])
          )
        }
        PlateContent.displayName = 'PlateContent'
        var PlateView = (props) =>
          react.createElement(PlateStatic, {
            onCopy: (0, react.useCallback)(
              (e) => {
                ;(props.editor.tf.setFragmentData(e.clipboardData, 'copy'),
                  e.clipboardData.getData('application/x-slate-fragment') &&
                    e.preventDefault())
              },
              [props.editor.tf]
            ),
            ...props,
          })
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var DataView = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
        )(
          __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
          ),
          'DataView'
        )
        module.exports = DataView
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var hashClear = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js'
        ),
        hashDelete = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js'
        ),
        hashGet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js'
        ),
        hashHas = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js'
        ),
        hashSet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js'
        )
      function Hash(entries) {
        var index = -1,
          length = null == entries ? 0 : entries.length
        for (this.clear(); ++index < length; ) {
          var entry = entries[index]
          this.set(entry[0], entry[1])
        }
      }
      ;((Hash.prototype.clear = hashClear),
        (Hash.prototype.delete = hashDelete),
        (Hash.prototype.get = hashGet),
        (Hash.prototype.has = hashHas),
        (Hash.prototype.set = hashSet),
        (module.exports = Hash))
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var listCacheClear = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js'
          ),
          listCacheDelete = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js'
          ),
          listCacheGet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js'
          ),
          listCacheHas = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js'
          ),
          listCacheSet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js'
          )
        function ListCache(entries) {
          var index = -1,
            length = null == entries ? 0 : entries.length
          for (this.clear(); ++index < length; ) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }
        ;((ListCache.prototype.clear = listCacheClear),
          (ListCache.prototype.delete = listCacheDelete),
          (ListCache.prototype.get = listCacheGet),
          (ListCache.prototype.has = listCacheHas),
          (ListCache.prototype.set = listCacheSet),
          (module.exports = ListCache))
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Map = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
      )(
        __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ),
        'Map'
      )
      module.exports = Map
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var mapCacheClear = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js'
          ),
          mapCacheDelete = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js'
          ),
          mapCacheGet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js'
          ),
          mapCacheHas = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js'
          ),
          mapCacheSet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js'
          )
        function MapCache(entries) {
          var index = -1,
            length = null == entries ? 0 : entries.length
          for (this.clear(); ++index < length; ) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }
        ;((MapCache.prototype.clear = mapCacheClear),
          (MapCache.prototype.delete = mapCacheDelete),
          (MapCache.prototype.get = mapCacheGet),
          (MapCache.prototype.has = mapCacheHas),
          (MapCache.prototype.set = mapCacheSet),
          (module.exports = MapCache))
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Promise = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
      )(
        __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ),
        'Promise'
      )
      module.exports = Promise
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Set = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
      )(
        __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ),
        'Set'
      )
      module.exports = Set
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var MapCache = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js'
          ),
          setCacheAdd = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js'
          ),
          setCacheHas = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js'
          )
        function SetCache(values) {
          var index = -1,
            length = null == values ? 0 : values.length
          for (this.__data__ = new MapCache(); ++index < length; )
            this.add(values[index])
        }
        ;((SetCache.prototype.add = SetCache.prototype.push = setCacheAdd),
          (SetCache.prototype.has = setCacheHas),
          (module.exports = SetCache))
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var ListCache = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js'
        ),
        stackClear = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js'
        ),
        stackDelete = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js'
        ),
        stackGet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js'
        ),
        stackHas = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js'
        ),
        stackSet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js'
        )
      function Stack(entries) {
        var data = (this.__data__ = new ListCache(entries))
        this.size = data.size
      }
      ;((Stack.prototype.clear = stackClear),
        (Stack.prototype.delete = stackDelete),
        (Stack.prototype.get = stackGet),
        (Stack.prototype.has = stackHas),
        (Stack.prototype.set = stackSet),
        (module.exports = Stack))
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Uint8Array = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ).Uint8Array
        module.exports = Uint8Array
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var WeakMap = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
      )(
        __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ),
        'WeakMap'
      )
      module.exports = WeakMap
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js': (
      module
    ) => {
      module.exports = function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg)
          case 1:
            return func.call(thisArg, args[0])
          case 2:
            return func.call(thisArg, args[0], args[1])
          case 3:
            return func.call(thisArg, args[0], args[1], args[2])
        }
        return func.apply(thisArg, args)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js':
      (module) => {
        module.exports = function arrayEach(array, iteratee) {
          for (
            var index = -1, length = null == array ? 0 : array.length;
            ++index < length && !1 !== iteratee(array[index], index, array);

          );
          return array
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js':
      (module) => {
        module.exports = function arrayFilter(array, predicate) {
          for (
            var index = -1,
              length = null == array ? 0 : array.length,
              resIndex = 0,
              result = [];
            ++index < length;

          ) {
            var value = array[index]
            predicate(value, index, array) && (result[resIndex++] = value)
          }
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseTimes = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js'
          ),
          isArguments = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js'
          ),
          isIndex = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js'
          ),
          isTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js'
          ),
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length
          for (var key in value)
            (!inherited && !hasOwnProperty.call(value, key)) ||
              (skipIndexes &&
                ('length' == key ||
                  (isBuff && ('offset' == key || 'parent' == key)) ||
                  (isType &&
                    ('buffer' == key ||
                      'byteLength' == key ||
                      'byteOffset' == key)) ||
                  isIndex(key, length))) ||
              result.push(key)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js':
      (module) => {
        module.exports = function arrayMap(array, iteratee) {
          for (
            var index = -1,
              length = null == array ? 0 : array.length,
              result = Array(length);
            ++index < length;

          )
            result[index] = iteratee(array[index], index, array)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js':
      (module) => {
        module.exports = function arrayPush(array, values) {
          for (
            var index = -1, length = values.length, offset = array.length;
            ++index < length;

          )
            array[offset + index] = values[index]
          return array
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js':
      (module) => {
        module.exports = function arrayReduce(
          array,
          iteratee,
          accumulator,
          initAccum
        ) {
          var index = -1,
            length = null == array ? 0 : array.length
          for (
            initAccum && length && (accumulator = array[++index]);
            ++index < length;

          )
            accumulator = iteratee(accumulator, array[index], index, array)
          return accumulator
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js':
      (module) => {
        module.exports = function arraySome(array, predicate) {
          for (
            var index = -1, length = null == array ? 0 : array.length;
            ++index < length;

          )
            if (predicate(array[index], index, array)) return !0
          return !1
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js':
      (module) => {
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
        module.exports = function asciiWords(string) {
          return string.match(reAsciiWord) || []
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseAssignValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js'
          ),
          eq = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
          )
        module.exports = function assignMergeValue(object, key, value) {
          ;((void 0 !== value && !eq(object[key], value)) ||
            (void 0 === value && !(key in object))) &&
            baseAssignValue(object, key, value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseAssignValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js'
          ),
          eq = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
          ),
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function assignValue(object, key, value) {
          var objValue = object[key]
          ;(hasOwnProperty.call(object, key) &&
            eq(objValue, value) &&
            (void 0 !== value || key in object)) ||
            baseAssignValue(object, key, value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var eq = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
        )
        module.exports = function assocIndexOf(array, key) {
          for (var length = array.length; length--; )
            if (eq(array[length][0], key)) return length
          return -1
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var copyObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
          ),
          keys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js'
          )
        module.exports = function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var copyObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
          ),
          keysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
          )
        module.exports = function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var defineProperty = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js'
        )
        module.exports = function baseAssignValue(object, key, value) {
          '__proto__' == key && defineProperty
            ? defineProperty(object, key, {
                configurable: !0,
                enumerable: !0,
                value,
                writable: !0,
              })
            : (object[key] = value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js'
          ),
          arrayEach = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js'
          ),
          assignValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js'
          ),
          baseAssign = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js'
          ),
          baseAssignIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js'
          ),
          cloneBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js'
          ),
          copyArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js'
          ),
          copySymbols = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js'
          ),
          copySymbolsIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js'
          ),
          getAllKeys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js'
          ),
          getAllKeysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js'
          ),
          getTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js'
          ),
          initCloneArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js'
          ),
          initCloneByTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js'
          ),
          initCloneObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js'
          ),
          isMap = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          isSet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js'
          ),
          keys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js'
          ),
          keysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
          ),
          cloneableTags = {}
        ;((cloneableTags['[object Arguments]'] =
          cloneableTags['[object Array]'] =
          cloneableTags['[object ArrayBuffer]'] =
          cloneableTags['[object DataView]'] =
          cloneableTags['[object Boolean]'] =
          cloneableTags['[object Date]'] =
          cloneableTags['[object Float32Array]'] =
          cloneableTags['[object Float64Array]'] =
          cloneableTags['[object Int8Array]'] =
          cloneableTags['[object Int16Array]'] =
          cloneableTags['[object Int32Array]'] =
          cloneableTags['[object Map]'] =
          cloneableTags['[object Number]'] =
          cloneableTags['[object Object]'] =
          cloneableTags['[object RegExp]'] =
          cloneableTags['[object Set]'] =
          cloneableTags['[object String]'] =
          cloneableTags['[object Symbol]'] =
          cloneableTags['[object Uint8Array]'] =
          cloneableTags['[object Uint8ClampedArray]'] =
          cloneableTags['[object Uint16Array]'] =
          cloneableTags['[object Uint32Array]'] =
            !0),
          (cloneableTags['[object Error]'] =
            cloneableTags['[object Function]'] =
            cloneableTags['[object WeakMap]'] =
              !1),
          (module.exports = function baseClone(
            value,
            bitmask,
            customizer,
            key,
            object,
            stack
          ) {
            var result,
              isDeep = 1 & bitmask,
              isFlat = 2 & bitmask,
              isFull = 4 & bitmask
            if (
              (customizer &&
                (result = object
                  ? customizer(value, key, object, stack)
                  : customizer(value)),
              void 0 !== result)
            )
              return result
            if (!isObject(value)) return value
            var isArr = isArray(value)
            if (isArr) {
              if (((result = initCloneArray(value)), !isDeep))
                return copyArray(value, result)
            } else {
              var tag = getTag(value),
                isFunc =
                  '[object Function]' == tag ||
                  '[object GeneratorFunction]' == tag
              if (isBuffer(value)) return cloneBuffer(value, isDeep)
              if (
                '[object Object]' == tag ||
                '[object Arguments]' == tag ||
                (isFunc && !object)
              ) {
                if (
                  ((result = isFlat || isFunc ? {} : initCloneObject(value)),
                  !isDeep)
                )
                  return isFlat
                    ? copySymbolsIn(value, baseAssignIn(result, value))
                    : copySymbols(value, baseAssign(result, value))
              } else {
                if (!cloneableTags[tag]) return object ? value : {}
                result = initCloneByTag(value, tag, isDeep)
              }
            }
            stack || (stack = new Stack())
            var stacked = stack.get(value)
            if (stacked) return stacked
            ;(stack.set(value, result),
              isSet(value)
                ? value.forEach(function (subValue) {
                    result.add(
                      baseClone(
                        subValue,
                        bitmask,
                        customizer,
                        subValue,
                        value,
                        stack
                      )
                    )
                  })
                : isMap(value) &&
                  value.forEach(function (subValue, key) {
                    result.set(
                      key,
                      baseClone(
                        subValue,
                        bitmask,
                        customizer,
                        key,
                        value,
                        stack
                      )
                    )
                  }))
            var props = isArr
              ? void 0
              : (isFull
                  ? isFlat
                    ? getAllKeysIn
                    : getAllKeys
                  : isFlat
                    ? keysIn
                    : keys)(value)
            return (
              arrayEach(props || value, function (subValue, key) {
                ;(props && (subValue = value[(key = subValue)]),
                  assignValue(
                    result,
                    key,
                    baseClone(subValue, bitmask, customizer, key, value, stack)
                  ))
              }),
              result
            )
          }))
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          objectCreate = Object.create,
          baseCreate = (function () {
            function object() {}
            return function (proto) {
              if (!isObject(proto)) return {}
              if (objectCreate) return objectCreate(proto)
              object.prototype = proto
              var result = new object()
              return ((object.prototype = void 0), result)
            }
          })()
        module.exports = baseCreate
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseEach.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseForOwn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js'
          ),
          baseEach = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseEach.js'
          )(baseForOwn)
        module.exports = baseEach
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFlatten.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayPush = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js'
          ),
          isFlattenable = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isFlattenable.js'
          )
        module.exports = function baseFlatten(
          array,
          depth,
          predicate,
          isStrict,
          result
        ) {
          var index = -1,
            length = array.length
          for (
            predicate || (predicate = isFlattenable), result || (result = []);
            ++index < length;

          ) {
            var value = array[index]
            depth > 0 && predicate(value)
              ? depth > 1
                ? baseFlatten(value, depth - 1, predicate, isStrict, result)
                : arrayPush(result, value)
              : isStrict || (result[result.length] = value)
          }
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseFor = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js'
      )()
      module.exports = baseFor
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseFor = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js'
          ),
          keys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js'
          )
        module.exports = function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var castPath = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
        ),
        toKey = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
        )
      module.exports = function baseGet(object, path) {
        for (
          var index = 0, length = (path = castPath(path, object)).length;
          null != object && index < length;

        )
          object = object[toKey(path[index++])]
        return index && index == length ? object : void 0
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayPush = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          )
        module.exports = function baseGetAllKeys(
          object,
          keysFunc,
          symbolsFunc
        ) {
          var result = keysFunc(object)
          return isArray(object)
            ? result
            : arrayPush(result, symbolsFunc(object))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js':
      (module) => {
        module.exports = function baseHasIn(object, key) {
          return null != object && key in Object(object)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          )
        module.exports = function baseIsArguments(value) {
          return (
            isObjectLike(value) && '[object Arguments]' == baseGetTag(value)
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqualDeep = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          )
        module.exports = function baseIsEqual(
          value,
          other,
          bitmask,
          customizer,
          stack
        ) {
          return (
            value === other ||
            (null == value ||
            null == other ||
            (!isObjectLike(value) && !isObjectLike(other))
              ? value != value && other != other
              : baseIsEqualDeep(
                  value,
                  other,
                  bitmask,
                  customizer,
                  baseIsEqual,
                  stack
                ))
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js'
          ),
          equalArrays = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js'
          ),
          equalByTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js'
          ),
          equalObjects = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js'
          ),
          getTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js'
          ),
          isTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js'
          ),
          objectTag = '[object Object]',
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function baseIsEqualDeep(
          object,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = objIsArr ? '[object Array]' : getTag(object),
            othTag = othIsArr ? '[object Array]' : getTag(other),
            objIsObj =
              (objTag = '[object Arguments]' == objTag ? objectTag : objTag) ==
              objectTag,
            othIsObj =
              (othTag = '[object Arguments]' == othTag ? objectTag : othTag) ==
              objectTag,
            isSameTag = objTag == othTag
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) return !1
            ;((objIsArr = !0), (objIsObj = !1))
          }
          if (isSameTag && !objIsObj)
            return (
              stack || (stack = new Stack()),
              objIsArr || isTypedArray(object)
                ? equalArrays(
                    object,
                    other,
                    bitmask,
                    customizer,
                    equalFunc,
                    stack
                  )
                : equalByTag(
                    object,
                    other,
                    objTag,
                    bitmask,
                    customizer,
                    equalFunc,
                    stack
                  )
            )
          if (!(1 & bitmask)) {
            var objIsWrapped =
                objIsObj && hasOwnProperty.call(object, '__wrapped__'),
              othIsWrapped =
                othIsObj && hasOwnProperty.call(other, '__wrapped__')
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                othUnwrapped = othIsWrapped ? other.value() : other
              return (
                stack || (stack = new Stack()),
                equalFunc(
                  objUnwrapped,
                  othUnwrapped,
                  bitmask,
                  customizer,
                  stack
                )
              )
            }
          }
          return (
            !!isSameTag &&
            (stack || (stack = new Stack()),
            equalObjects(object, other, bitmask, customizer, equalFunc, stack))
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          )
        module.exports = function baseIsMap(value) {
          return isObjectLike(value) && '[object Map]' == getTag(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js'
          ),
          baseIsEqual = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js'
          )
        module.exports = function baseIsMatch(
          object,
          source,
          matchData,
          customizer
        ) {
          var index = matchData.length,
            length = index,
            noCustomizer = !customizer
          if (null == object) return !length
          for (object = Object(object); index--; ) {
            var data = matchData[index]
            if (
              noCustomizer && data[2]
                ? data[1] !== object[data[0]]
                : !(data[0] in object)
            )
              return !1
          }
          for (; ++index < length; ) {
            var key = (data = matchData[index])[0],
              objValue = object[key],
              srcValue = data[1]
            if (noCustomizer && data[2]) {
              if (void 0 === objValue && !(key in object)) return !1
            } else {
              var stack = new Stack()
              if (customizer)
                var result = customizer(
                  objValue,
                  srcValue,
                  key,
                  object,
                  source,
                  stack
                )
              if (
                !(void 0 === result
                  ? baseIsEqual(srcValue, objValue, 3, customizer, stack)
                  : result)
              )
                return !1
            }
          }
          return !0
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isFunction = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js'
          ),
          isMasked = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          toSource = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js'
          ),
          reIsHostCtor = /^\[object .+?Constructor\]$/,
          funcProto = Function.prototype,
          objectProto = Object.prototype,
          funcToString = funcProto.toString,
          hasOwnProperty = objectProto.hasOwnProperty,
          reIsNative = RegExp(
            '^' +
              funcToString
                .call(hasOwnProperty)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          )
        module.exports = function baseIsNative(value) {
          return (
            !(!isObject(value) || isMasked(value)) &&
            (isFunction(value) ? reIsNative : reIsHostCtor).test(
              toSource(value)
            )
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          )
        module.exports = function baseIsSet(value) {
          return isObjectLike(value) && '[object Set]' == getTag(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
          ),
          isLength = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          ),
          typedArrayTags = {}
        ;((typedArrayTags['[object Float32Array]'] =
          typedArrayTags['[object Float64Array]'] =
          typedArrayTags['[object Int8Array]'] =
          typedArrayTags['[object Int16Array]'] =
          typedArrayTags['[object Int32Array]'] =
          typedArrayTags['[object Uint8Array]'] =
          typedArrayTags['[object Uint8ClampedArray]'] =
          typedArrayTags['[object Uint16Array]'] =
          typedArrayTags['[object Uint32Array]'] =
            !0),
          (typedArrayTags['[object Arguments]'] =
            typedArrayTags['[object Array]'] =
            typedArrayTags['[object ArrayBuffer]'] =
            typedArrayTags['[object Boolean]'] =
            typedArrayTags['[object DataView]'] =
            typedArrayTags['[object Date]'] =
            typedArrayTags['[object Error]'] =
            typedArrayTags['[object Function]'] =
            typedArrayTags['[object Map]'] =
            typedArrayTags['[object Number]'] =
            typedArrayTags['[object Object]'] =
            typedArrayTags['[object RegExp]'] =
            typedArrayTags['[object Set]'] =
            typedArrayTags['[object String]'] =
            typedArrayTags['[object WeakMap]'] =
              !1),
          (module.exports = function baseIsTypedArray(value) {
            return (
              isObjectLike(value) &&
              isLength(value.length) &&
              !!typedArrayTags[baseGetTag(value)]
            )
          }))
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseMatches = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js'
          ),
          baseMatchesProperty = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js'
          ),
          identity = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          property = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js'
          )
        module.exports = function baseIteratee(value) {
          return 'function' == typeof value
            ? value
            : null == value
              ? identity
              : 'object' == typeof value
                ? isArray(value)
                  ? baseMatchesProperty(value[0], value[1])
                  : baseMatches(value)
                : property(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js'
          ),
          nativeKeys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js'
          ),
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function baseKeys(object) {
          if (!isPrototype(object)) return nativeKeys(object)
          var result = []
          for (var key in Object(object))
            hasOwnProperty.call(object, key) &&
              'constructor' != key &&
              result.push(key)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          isPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js'
          ),
          nativeKeysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js'
          ),
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function baseKeysIn(object) {
          if (!isObject(object)) return nativeKeysIn(object)
          var isProto = isPrototype(object),
            result = []
          for (var key in object)
            ('constructor' != key ||
              (!isProto && hasOwnProperty.call(object, key))) &&
              result.push(key)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMap.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseEach = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseEach.js'
        ),
        isArrayLike = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
        )
      module.exports = function baseMap(collection, iteratee) {
        var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : []
        return (
          baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection)
          }),
          result
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsMatch = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js'
          ),
          getMatchData = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js'
          ),
          matchesStrictComparable = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js'
          )
        module.exports = function baseMatches(source) {
          var matchData = getMatchData(source)
          return 1 == matchData.length && matchData[0][2]
            ? matchesStrictComparable(matchData[0][0], matchData[0][1])
            : function (object) {
                return (
                  object === source || baseIsMatch(object, source, matchData)
                )
              }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqual = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js'
          ),
          get = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js'
          ),
          hasIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js'
          ),
          isKey = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js'
          ),
          isStrictComparable = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js'
          ),
          matchesStrictComparable = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js'
          ),
          toKey = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
          )
        module.exports = function baseMatchesProperty(path, srcValue) {
          return isKey(path) && isStrictComparable(srcValue)
            ? matchesStrictComparable(toKey(path), srcValue)
            : function (object) {
                var objValue = get(object, path)
                return void 0 === objValue && objValue === srcValue
                  ? hasIn(object, path)
                  : baseIsEqual(srcValue, objValue, 3)
              }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js'
          ),
          assignMergeValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js'
          ),
          baseFor = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js'
          ),
          baseMergeDeep = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          keysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
          ),
          safeGet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js'
          )
        module.exports = function baseMerge(
          object,
          source,
          srcIndex,
          customizer,
          stack
        ) {
          object !== source &&
            baseFor(
              source,
              function (srcValue, key) {
                if ((stack || (stack = new Stack()), isObject(srcValue)))
                  baseMergeDeep(
                    object,
                    source,
                    key,
                    srcIndex,
                    baseMerge,
                    customizer,
                    stack
                  )
                else {
                  var newValue = customizer
                    ? customizer(
                        safeGet(object, key),
                        srcValue,
                        key + '',
                        object,
                        source,
                        stack
                      )
                    : void 0
                  ;(void 0 === newValue && (newValue = srcValue),
                    assignMergeValue(object, key, newValue))
                }
              },
              keysIn
            )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assignMergeValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js'
          ),
          cloneBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js'
          ),
          cloneTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js'
          ),
          copyArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js'
          ),
          initCloneObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js'
          ),
          isArguments = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isArrayLikeObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js'
          ),
          isBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js'
          ),
          isFunction = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          ),
          isPlainObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js'
          ),
          isTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js'
          ),
          safeGet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js'
          ),
          toPlainObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js'
          )
        module.exports = function baseMergeDeep(
          object,
          source,
          key,
          srcIndex,
          mergeFunc,
          customizer,
          stack
        ) {
          var objValue = safeGet(object, key),
            srcValue = safeGet(source, key),
            stacked = stack.get(srcValue)
          if (stacked) assignMergeValue(object, key, stacked)
          else {
            var newValue = customizer
                ? customizer(
                    objValue,
                    srcValue,
                    key + '',
                    object,
                    source,
                    stack
                  )
                : void 0,
              isCommon = void 0 === newValue
            if (isCommon) {
              var isArr = isArray(srcValue),
                isBuff = !isArr && isBuffer(srcValue),
                isTyped = !isArr && !isBuff && isTypedArray(srcValue)
              ;((newValue = srcValue),
                isArr || isBuff || isTyped
                  ? isArray(objValue)
                    ? (newValue = objValue)
                    : isArrayLikeObject(objValue)
                      ? (newValue = copyArray(objValue))
                      : isBuff
                        ? ((isCommon = !1),
                          (newValue = cloneBuffer(srcValue, !0)))
                        : isTyped
                          ? ((isCommon = !1),
                            (newValue = cloneTypedArray(srcValue, !0)))
                          : (newValue = [])
                  : isPlainObject(srcValue) || isArguments(srcValue)
                    ? ((newValue = objValue),
                      isArguments(objValue)
                        ? (newValue = toPlainObject(objValue))
                        : (isObject(objValue) && !isFunction(objValue)) ||
                          (newValue = initCloneObject(srcValue)))
                    : (isCommon = !1))
            }
            ;(isCommon &&
              (stack.set(srcValue, newValue),
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack),
              stack.delete(srcValue)),
              assignMergeValue(object, key, newValue))
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePick.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var basePickBy = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js'
          ),
          hasIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js'
          )
        module.exports = function basePick(object, paths) {
          return basePickBy(object, paths, function (value, path) {
            return hasIn(object, path)
          })
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js'
          ),
          baseSet = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js'
          ),
          castPath = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
          )
        module.exports = function basePickBy(object, paths, predicate) {
          for (
            var index = -1, length = paths.length, result = {};
            ++index < length;

          ) {
            var path = paths[index],
              value = baseGet(object, path)
            predicate(value, path) &&
              baseSet(result, castPath(path, object), value)
          }
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js':
      (module) => {
        module.exports = function baseProperty(key) {
          return function (object) {
            return null == object ? void 0 : object[key]
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js'
        )
        module.exports = function basePropertyDeep(path) {
          return function (object) {
            return baseGet(object, path)
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js':
      (module) => {
        module.exports = function basePropertyOf(object) {
          return function (key) {
            return null == object ? void 0 : object[key]
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var identity = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js'
          ),
          overRest = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js'
          ),
          setToString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js'
          )
        module.exports = function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + '')
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var assignValue = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js'
        ),
        castPath = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
        ),
        isIndex = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js'
        ),
        isObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
        ),
        toKey = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
        )
      module.exports = function baseSet(object, path, value, customizer) {
        if (!isObject(object)) return object
        for (
          var index = -1,
            length = (path = castPath(path, object)).length,
            lastIndex = length - 1,
            nested = object;
          null != nested && ++index < length;

        ) {
          var key = toKey(path[index]),
            newValue = value
          if (
            '__proto__' === key ||
            'constructor' === key ||
            'prototype' === key
          )
            return object
          if (index != lastIndex) {
            var objValue = nested[key]
            void 0 ===
              (newValue = customizer
                ? customizer(objValue, key, nested)
                : void 0) &&
              (newValue = isObject(objValue)
                ? objValue
                : isIndex(path[index + 1])
                  ? []
                  : {})
          }
          ;(assignValue(nested, key, newValue), (nested = nested[key]))
        }
        return object
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var constant = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js'
          ),
          defineProperty = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js'
          ),
          identity = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js'
          ),
          baseSetToString = defineProperty
            ? function (func, string) {
                return defineProperty(func, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: constant(string),
                  writable: !0,
                })
              }
            : identity
        module.exports = baseSetToString
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js':
      (module) => {
        module.exports = function baseSlice(array, start, end) {
          var index = -1,
            length = array.length
          ;(start < 0 && (start = -start > length ? 0 : length + start),
            (end = end > length ? length : end) < 0 && (end += length),
            (length = start > end ? 0 : (end - start) >>> 0),
            (start >>>= 0))
          for (var result = Array(length); ++index < length; )
            result[index] = array[index + start]
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js':
      (module) => {
        module.exports = function baseTimes(n, iteratee) {
          for (var index = -1, result = Array(n); ++index < n; )
            result[index] = iteratee(index)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          arrayMap = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isSymbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js'
          ),
          symbolProto = Symbol ? Symbol.prototype : void 0,
          symbolToString = symbolProto ? symbolProto.toString : void 0
        module.exports = function baseToString(value) {
          if ('string' == typeof value) return value
          if (isArray(value)) return arrayMap(value, baseToString) + ''
          if (isSymbol(value))
            return symbolToString ? symbolToString.call(value) : ''
          var result = value + ''
          return '0' == result && 1 / value == -Infinity ? '-0' : result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js':
      (module) => {
        module.exports = function baseUnary(func) {
          return function (value) {
            return func(value)
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnset.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var castPath = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
          ),
          last = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/last.js'
          ),
          parent = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_parent.js'
          ),
          toKey = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
          )
        module.exports = function baseUnset(object, path) {
          return (
            (path = castPath(path, object)),
            null == (object = parent(object, path)) ||
              delete object[toKey(last(path))]
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js':
      (module) => {
        module.exports = function cacheHas(cache, key) {
          return cache.has(key)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          isKey = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js'
          ),
          stringToPath = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js'
          ),
          toString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js'
          )
        module.exports = function castPath(value, object) {
          return isArray(value)
            ? value
            : isKey(value, object)
              ? [value]
              : stringToPath(toString(value))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Uint8Array = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js'
        )
        module.exports = function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength)
          return (
            new Uint8Array(result).set(new Uint8Array(arrayBuffer)),
            result
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js':
      (module, exports, __webpack_require__) => {
        module = __webpack_require__.nmd(module)
        var root = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
          ),
          freeExports = exports && !exports.nodeType && exports,
          freeModule = freeExports && module && !module.nodeType && module,
          Buffer =
            freeModule && freeModule.exports === freeExports
              ? root.Buffer
              : void 0,
          allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0
        module.exports = function cloneBuffer(buffer, isDeep) {
          if (isDeep) return buffer.slice()
          var length = buffer.length,
            result = allocUnsafe
              ? allocUnsafe(length)
              : new buffer.constructor(length)
          return (buffer.copy(result), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var cloneArrayBuffer = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js'
        )
        module.exports = function cloneDataView(dataView, isDeep) {
          var buffer = isDeep
            ? cloneArrayBuffer(dataView.buffer)
            : dataView.buffer
          return new dataView.constructor(
            buffer,
            dataView.byteOffset,
            dataView.byteLength
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js':
      (module) => {
        var reFlags = /\w*$/
        module.exports = function cloneRegExp(regexp) {
          var result = new regexp.constructor(
            regexp.source,
            reFlags.exec(regexp)
          )
          return ((result.lastIndex = regexp.lastIndex), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          symbolProto = Symbol ? Symbol.prototype : void 0,
          symbolValueOf = symbolProto ? symbolProto.valueOf : void 0
        module.exports = function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var cloneArrayBuffer = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js'
        )
        module.exports = function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep
            ? cloneArrayBuffer(typedArray.buffer)
            : typedArray.buffer
          return new typedArray.constructor(
            buffer,
            typedArray.byteOffset,
            typedArray.length
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js':
      (module) => {
        module.exports = function copyArray(source, array) {
          var index = -1,
            length = source.length
          for (array || (array = Array(length)); ++index < length; )
            array[index] = source[index]
          return array
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assignValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js'
          ),
          baseAssignValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js'
          )
        module.exports = function copyObject(
          source,
          props,
          object,
          customizer
        ) {
          var isNew = !object
          object || (object = {})
          for (var index = -1, length = props.length; ++index < length; ) {
            var key = props[index],
              newValue = customizer
                ? customizer(object[key], source[key], key, object, source)
                : void 0
            ;(void 0 === newValue && (newValue = source[key]),
              isNew
                ? baseAssignValue(object, key, newValue)
                : assignValue(object, key, newValue))
          }
          return object
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var copyObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
          ),
          getSymbols = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js'
          )
        module.exports = function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var copyObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
          ),
          getSymbolsIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js'
          )
        module.exports = function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var coreJsData = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        )['__core-js_shared__']
        module.exports = coreJsData
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseRest = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js'
          ),
          isIterateeCall = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js'
          )
        module.exports = function createAssigner(assigner) {
          return baseRest(function (object, sources) {
            var index = -1,
              length = sources.length,
              customizer = length > 1 ? sources[length - 1] : void 0,
              guard = length > 2 ? sources[2] : void 0
            for (
              customizer =
                assigner.length > 3 && 'function' == typeof customizer
                  ? (length--, customizer)
                  : void 0,
                guard &&
                  isIterateeCall(sources[0], sources[1], guard) &&
                  ((customizer = length < 3 ? void 0 : customizer),
                  (length = 1)),
                object = Object(object);
              ++index < length;

            ) {
              var source = sources[index]
              source && assigner(object, source, index, customizer)
            }
            return object
          })
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseEach.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isArrayLike = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
        )
        module.exports = function createBaseEach(eachFunc, fromRight) {
          return function (collection, iteratee) {
            if (null == collection) return collection
            if (!isArrayLike(collection)) return eachFunc(collection, iteratee)
            for (
              var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
              (fromRight ? index-- : ++index < length) &&
              !1 !== iteratee(iterable[index], index, iterable);

            );
            return collection
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js':
      (module) => {
        module.exports = function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            for (
              var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
              length--;

            ) {
              var key = props[fromRight ? length : ++index]
              if (!1 === iteratee(iterable[key], key, iterable)) break
            }
            return object
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayReduce = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js'
          ),
          deburr = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js'
          ),
          words = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js'
          ),
          reApos = RegExp("['’]", 'g')
        module.exports = function createCompounder(callback) {
          return function (string) {
            return arrayReduce(
              words(deburr(string).replace(reApos, '')),
              callback,
              ''
            )
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_customOmitClone.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isPlainObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js'
        )
        module.exports = function customOmitClone(value) {
          return isPlainObject(value) ? void 0 : value
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var deburrLetter = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js'
        )({
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ã: 'A',
          Ä: 'A',
          Å: 'A',
          à: 'a',
          á: 'a',
          â: 'a',
          ã: 'a',
          ä: 'a',
          å: 'a',
          Ç: 'C',
          ç: 'c',
          Ð: 'D',
          ð: 'd',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ë: 'E',
          è: 'e',
          é: 'e',
          ê: 'e',
          ë: 'e',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ï: 'I',
          ì: 'i',
          í: 'i',
          î: 'i',
          ï: 'i',
          Ñ: 'N',
          ñ: 'n',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Õ: 'O',
          Ö: 'O',
          Ø: 'O',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          õ: 'o',
          ö: 'o',
          ø: 'o',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ü: 'U',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ü: 'u',
          Ý: 'Y',
          ý: 'y',
          ÿ: 'y',
          Æ: 'Ae',
          æ: 'ae',
          Þ: 'Th',
          þ: 'th',
          ß: 'ss',
          Ā: 'A',
          Ă: 'A',
          Ą: 'A',
          ā: 'a',
          ă: 'a',
          ą: 'a',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          Ď: 'D',
          Đ: 'D',
          ď: 'd',
          đ: 'd',
          Ē: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ę: 'E',
          Ě: 'E',
          ē: 'e',
          ĕ: 'e',
          ė: 'e',
          ę: 'e',
          ě: 'e',
          Ĝ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ģ: 'G',
          ĝ: 'g',
          ğ: 'g',
          ġ: 'g',
          ģ: 'g',
          Ĥ: 'H',
          Ħ: 'H',
          ĥ: 'h',
          ħ: 'h',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          Į: 'I',
          İ: 'I',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          į: 'i',
          ı: 'i',
          Ĵ: 'J',
          ĵ: 'j',
          Ķ: 'K',
          ķ: 'k',
          ĸ: 'k',
          Ĺ: 'L',
          Ļ: 'L',
          Ľ: 'L',
          Ŀ: 'L',
          Ł: 'L',
          ĺ: 'l',
          ļ: 'l',
          ľ: 'l',
          ŀ: 'l',
          ł: 'l',
          Ń: 'N',
          Ņ: 'N',
          Ň: 'N',
          Ŋ: 'N',
          ń: 'n',
          ņ: 'n',
          ň: 'n',
          ŋ: 'n',
          Ō: 'O',
          Ŏ: 'O',
          Ő: 'O',
          ō: 'o',
          ŏ: 'o',
          ő: 'o',
          Ŕ: 'R',
          Ŗ: 'R',
          Ř: 'R',
          ŕ: 'r',
          ŗ: 'r',
          ř: 'r',
          Ś: 'S',
          Ŝ: 'S',
          Ş: 'S',
          Š: 'S',
          ś: 's',
          ŝ: 's',
          ş: 's',
          š: 's',
          Ţ: 'T',
          Ť: 'T',
          Ŧ: 'T',
          ţ: 't',
          ť: 't',
          ŧ: 't',
          Ũ: 'U',
          Ū: 'U',
          Ŭ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ų: 'U',
          ũ: 'u',
          ū: 'u',
          ŭ: 'u',
          ů: 'u',
          ű: 'u',
          ų: 'u',
          Ŵ: 'W',
          ŵ: 'w',
          Ŷ: 'Y',
          ŷ: 'y',
          Ÿ: 'Y',
          Ź: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          ź: 'z',
          ż: 'z',
          ž: 'z',
          Ĳ: 'IJ',
          ĳ: 'ij',
          Œ: 'Oe',
          œ: 'oe',
          ŉ: "'n",
          ſ: 's',
        })
        module.exports = deburrLetter
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getNative = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
          ),
          defineProperty = (function () {
            try {
              var func = getNative(Object, 'defineProperty')
              return (func({}, '', {}), func)
            } catch (e) {}
          })()
        module.exports = defineProperty
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var SetCache = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js'
          ),
          arraySome = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js'
          ),
          cacheHas = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js'
          )
        module.exports = function equalArrays(
          array,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var isPartial = 1 & bitmask,
            arrLength = array.length,
            othLength = other.length
          if (arrLength != othLength && !(isPartial && othLength > arrLength))
            return !1
          var arrStacked = stack.get(array),
            othStacked = stack.get(other)
          if (arrStacked && othStacked)
            return arrStacked == other && othStacked == array
          var index = -1,
            result = !0,
            seen = 2 & bitmask ? new SetCache() : void 0
          for (
            stack.set(array, other), stack.set(other, array);
            ++index < arrLength;

          ) {
            var arrValue = array[index],
              othValue = other[index]
            if (customizer)
              var compared = isPartial
                ? customizer(othValue, arrValue, index, other, array, stack)
                : customizer(arrValue, othValue, index, array, other, stack)
            if (void 0 !== compared) {
              if (compared) continue
              result = !1
              break
            }
            if (seen) {
              if (
                !arraySome(other, function (othValue, othIndex) {
                  if (
                    !cacheHas(seen, othIndex) &&
                    (arrValue === othValue ||
                      equalFunc(arrValue, othValue, bitmask, customizer, stack))
                  )
                    return seen.push(othIndex)
                })
              ) {
                result = !1
                break
              }
            } else if (
              arrValue !== othValue &&
              !equalFunc(arrValue, othValue, bitmask, customizer, stack)
            ) {
              result = !1
              break
            }
          }
          return (stack.delete(array), stack.delete(other), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          Uint8Array = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js'
          ),
          eq = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
          ),
          equalArrays = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js'
          ),
          mapToArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js'
          ),
          setToArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js'
          ),
          symbolProto = Symbol ? Symbol.prototype : void 0,
          symbolValueOf = symbolProto ? symbolProto.valueOf : void 0
        module.exports = function equalByTag(
          object,
          other,
          tag,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          switch (tag) {
            case '[object DataView]':
              if (
                object.byteLength != other.byteLength ||
                object.byteOffset != other.byteOffset
              )
                return !1
              ;((object = object.buffer), (other = other.buffer))
            case '[object ArrayBuffer]':
              return !(
                object.byteLength != other.byteLength ||
                !equalFunc(new Uint8Array(object), new Uint8Array(other))
              )
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return eq(+object, +other)
            case '[object Error]':
              return (
                object.name == other.name && object.message == other.message
              )
            case '[object RegExp]':
            case '[object String]':
              return object == other + ''
            case '[object Map]':
              var convert = mapToArray
            case '[object Set]':
              var isPartial = 1 & bitmask
              if (
                (convert || (convert = setToArray),
                object.size != other.size && !isPartial)
              )
                return !1
              var stacked = stack.get(object)
              if (stacked) return stacked == other
              ;((bitmask |= 2), stack.set(object, other))
              var result = equalArrays(
                convert(object),
                convert(other),
                bitmask,
                customizer,
                equalFunc,
                stack
              )
              return (stack.delete(object), result)
            case '[object Symbol]':
              if (symbolValueOf)
                return symbolValueOf.call(object) == symbolValueOf.call(other)
          }
          return !1
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getAllKeys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js'
          ),
          hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function equalObjects(
          object,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var isPartial = 1 & bitmask,
            objProps = getAllKeys(object),
            objLength = objProps.length
          if (objLength != getAllKeys(other).length && !isPartial) return !1
          for (var index = objLength; index--; ) {
            var key = objProps[index]
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
              return !1
          }
          var objStacked = stack.get(object),
            othStacked = stack.get(other)
          if (objStacked && othStacked)
            return objStacked == other && othStacked == object
          var result = !0
          ;(stack.set(object, other), stack.set(other, object))
          for (var skipCtor = isPartial; ++index < objLength; ) {
            var objValue = object[(key = objProps[index])],
              othValue = other[key]
            if (customizer)
              var compared = isPartial
                ? customizer(othValue, objValue, key, other, object, stack)
                : customizer(objValue, othValue, key, object, other, stack)
            if (
              !(void 0 === compared
                ? objValue === othValue ||
                  equalFunc(objValue, othValue, bitmask, customizer, stack)
                : compared)
            ) {
              result = !1
              break
            }
            skipCtor || (skipCtor = 'constructor' == key)
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
              othCtor = other.constructor
            objCtor == othCtor ||
              !('constructor' in object) ||
              !('constructor' in other) ||
              ('function' == typeof objCtor &&
                objCtor instanceof objCtor &&
                'function' == typeof othCtor &&
                othCtor instanceof othCtor) ||
              (result = !1)
          }
          return (stack.delete(object), stack.delete(other), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_flatRest.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var flatten = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js'
          ),
          overRest = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js'
          ),
          setToString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js'
          )
        module.exports = function flatRest(func) {
          return setToString(overRest(func, void 0, flatten), func + '')
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetAllKeys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js'
          ),
          getSymbols = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js'
          ),
          keys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js'
          )
        module.exports = function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetAllKeys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js'
          ),
          getSymbolsIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js'
          ),
          keysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
          )
        module.exports = function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isKeyable = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js'
        )
        module.exports = function getMapData(map, key) {
          var data = map.__data__
          return isKeyable(key)
            ? data['string' == typeof key ? 'string' : 'hash']
            : data.map
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isStrictComparable = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js'
          ),
          keys = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js'
          )
        module.exports = function getMatchData(object) {
          for (var result = keys(object), length = result.length; length--; ) {
            var key = result[length],
              value = object[key]
            result[length] = [key, value, isStrictComparable(value)]
          }
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsNative = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js'
          ),
          getValue = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js'
          )
        module.exports = function getNative(object, key) {
          var value = getValue(object, key)
          return baseIsNative(value) ? value : void 0
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getPrototype = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js'
        )(Object.getPrototypeOf, Object)
        module.exports = getPrototype
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayFilter = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js'
          ),
          stubArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js'
          ),
          propertyIsEnumerable = Object.prototype.propertyIsEnumerable,
          nativeGetSymbols = Object.getOwnPropertySymbols,
          getSymbols = nativeGetSymbols
            ? function (object) {
                return null == object
                  ? []
                  : ((object = Object(object)),
                    arrayFilter(nativeGetSymbols(object), function (symbol) {
                      return propertyIsEnumerable.call(object, symbol)
                    }))
              }
            : stubArray
        module.exports = getSymbols
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayPush = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js'
          ),
          getPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js'
          ),
          getSymbols = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js'
          ),
          stubArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js'
          ),
          getSymbolsIn = Object.getOwnPropertySymbols
            ? function (object) {
                for (var result = []; object; )
                  (arrayPush(result, getSymbols(object)),
                    (object = getPrototype(object)))
                return result
              }
            : stubArray
        module.exports = getSymbolsIn
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var DataView = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js'
        ),
        Map = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js'
        ),
        Promise = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js'
        ),
        Set = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js'
        ),
        WeakMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js'
        ),
        baseGetTag = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
        ),
        toSource = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js'
        ),
        dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap),
        getTag = baseGetTag
      ;(((DataView &&
        '[object DataView]' != getTag(new DataView(new ArrayBuffer(1)))) ||
        (Map && '[object Map]' != getTag(new Map())) ||
        (Promise && '[object Promise]' != getTag(Promise.resolve())) ||
        (Set && '[object Set]' != getTag(new Set())) ||
        (WeakMap && '[object WeakMap]' != getTag(new WeakMap()))) &&
        (getTag = function (value) {
          var result = baseGetTag(value),
            Ctor = '[object Object]' == result ? value.constructor : void 0,
            ctorString = Ctor ? toSource(Ctor) : ''
          if (ctorString)
            switch (ctorString) {
              case dataViewCtorString:
                return '[object DataView]'
              case mapCtorString:
                return '[object Map]'
              case promiseCtorString:
                return '[object Promise]'
              case setCtorString:
                return '[object Set]'
              case weakMapCtorString:
                return '[object WeakMap]'
            }
          return result
        }),
        (module.exports = getTag))
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js':
      (module) => {
        module.exports = function getValue(object, key) {
          return null == object ? void 0 : object[key]
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var castPath = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
        ),
        isArguments = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js'
        ),
        isArray = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
        ),
        isIndex = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js'
        ),
        isLength = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js'
        ),
        toKey = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
        )
      module.exports = function hasPath(object, path, hasFunc) {
        for (
          var index = -1,
            length = (path = castPath(path, object)).length,
            result = !1;
          ++index < length;

        ) {
          var key = toKey(path[index])
          if (!(result = null != object && hasFunc(object, key))) break
          object = object[key]
        }
        return result || ++index != length
          ? result
          : !!(length = null == object ? 0 : object.length) &&
              isLength(length) &&
              isIndex(key, length) &&
              (isArray(object) || isArguments(object))
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js':
      (module) => {
        var reHasUnicodeWord =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
        module.exports = function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var nativeCreate = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js'
        )
        module.exports = function hashClear() {
          ;((this.__data__ = nativeCreate ? nativeCreate(null) : {}),
            (this.size = 0))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js':
      (module) => {
        module.exports = function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key]
          return ((this.size -= result ? 1 : 0), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var nativeCreate = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js'
        ),
        hasOwnProperty = Object.prototype.hasOwnProperty
      module.exports = function hashGet(key) {
        var data = this.__data__
        if (nativeCreate) {
          var result = data[key]
          return '__lodash_hash_undefined__' === result ? void 0 : result
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var nativeCreate = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js'
        ),
        hasOwnProperty = Object.prototype.hasOwnProperty
      module.exports = function hashHas(key) {
        var data = this.__data__
        return nativeCreate
          ? void 0 !== data[key]
          : hasOwnProperty.call(data, key)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var nativeCreate = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js'
      )
      module.exports = function hashSet(key, value) {
        var data = this.__data__
        return (
          (this.size += this.has(key) ? 0 : 1),
          (data[key] =
            nativeCreate && void 0 === value
              ? '__lodash_hash_undefined__'
              : value),
          this
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js':
      (module) => {
        var hasOwnProperty = Object.prototype.hasOwnProperty
        module.exports = function initCloneArray(array) {
          var length = array.length,
            result = new array.constructor(length)
          return (
            length &&
              'string' == typeof array[0] &&
              hasOwnProperty.call(array, 'index') &&
              ((result.index = array.index), (result.input = array.input)),
            result
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var cloneArrayBuffer = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js'
          ),
          cloneDataView = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js'
          ),
          cloneRegExp = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js'
          ),
          cloneSymbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js'
          ),
          cloneTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js'
          )
        module.exports = function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor
          switch (tag) {
            case '[object ArrayBuffer]':
              return cloneArrayBuffer(object)
            case '[object Boolean]':
            case '[object Date]':
              return new Ctor(+object)
            case '[object DataView]':
              return cloneDataView(object, isDeep)
            case '[object Float32Array]':
            case '[object Float64Array]':
            case '[object Int8Array]':
            case '[object Int16Array]':
            case '[object Int32Array]':
            case '[object Uint8Array]':
            case '[object Uint8ClampedArray]':
            case '[object Uint16Array]':
            case '[object Uint32Array]':
              return cloneTypedArray(object, isDeep)
            case '[object Map]':
            case '[object Set]':
              return new Ctor()
            case '[object Number]':
            case '[object String]':
              return new Ctor(object)
            case '[object RegExp]':
              return cloneRegExp(object)
            case '[object Symbol]':
              return cloneSymbol(object)
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseCreate = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js'
          ),
          getPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js'
          ),
          isPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js'
          )
        module.exports = function initCloneObject(object) {
          return 'function' != typeof object.constructor || isPrototype(object)
            ? {}
            : baseCreate(getPrototype(object))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isFlattenable.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          isArguments = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js'
          ),
          isArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
          ),
          spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0
        module.exports = function isFlattenable(value) {
          return (
            isArray(value) ||
            isArguments(value) ||
            !!(spreadableSymbol && value && value[spreadableSymbol])
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js': (
      module
    ) => {
      var reIsUint = /^(?:0|[1-9]\d*)$/
      module.exports = function isIndex(value, length) {
        var type = typeof value
        return (
          !!(length = null == length ? 9007199254740991 : length) &&
          ('number' == type || ('symbol' != type && reIsUint.test(value))) &&
          value > -1 &&
          value % 1 == 0 &&
          value < length
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var eq = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
          ),
          isArrayLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
          ),
          isIndex = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          )
        module.exports = function isIterateeCall(value, index, object) {
          if (!isObject(object)) return !1
          var type = typeof index
          return (
            !!('number' == type
              ? isArrayLike(object) && isIndex(index, object.length)
              : 'string' == type && index in object) && eq(object[index], value)
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var isArray = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
        ),
        isSymbol = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js'
        ),
        reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/
      module.exports = function isKey(value, object) {
        if (isArray(value)) return !1
        var type = typeof value
        return (
          !(
            'number' != type &&
            'symbol' != type &&
            'boolean' != type &&
            null != value &&
            !isSymbol(value)
          ) ||
          reIsPlainProp.test(value) ||
          !reIsDeepProp.test(value) ||
          (null != object && value in Object(object))
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js':
      (module) => {
        module.exports = function isKeyable(value) {
          var type = typeof value
          return 'string' == type ||
            'number' == type ||
            'symbol' == type ||
            'boolean' == type
            ? '__proto__' !== value
            : null === value
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var uid,
          coreJsData = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js'
          ),
          maskSrcKey = (uid = /[^.]+$/.exec(
            (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
          ))
            ? 'Symbol(src)_1.' + uid
            : ''
        module.exports = function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js':
      (module) => {
        var objectProto = Object.prototype
        module.exports = function isPrototype(value) {
          var Ctor = value && value.constructor
          return (
            value ===
            (('function' == typeof Ctor && Ctor.prototype) || objectProto)
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
        )
        module.exports = function isStrictComparable(value) {
          return value == value && !isObject(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js':
      (module) => {
        module.exports = function listCacheClear() {
          ;((this.__data__ = []), (this.size = 0))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js'
          ),
          splice = Array.prototype.splice
        module.exports = function listCacheDelete(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key)
          return (
            !(index < 0) &&
            (index == data.length - 1
              ? data.pop()
              : splice.call(data, index, 1),
            --this.size,
            !0)
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js'
        )
        module.exports = function listCacheGet(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key)
          return index < 0 ? void 0 : data[index][1]
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js'
        )
        module.exports = function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js'
        )
        module.exports = function listCacheSet(key, value) {
          var data = this.__data__,
            index = assocIndexOf(data, key)
          return (
            index < 0
              ? (++this.size, data.push([key, value]))
              : (data[index][1] = value),
            this
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Hash = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js'
          ),
          ListCache = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js'
          ),
          Map = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js'
          )
        module.exports = function mapCacheClear() {
          ;((this.size = 0),
            (this.__data__ = {
              hash: new Hash(),
              map: new (Map || ListCache)(),
              string: new Hash(),
            }))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getMapData = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js'
        )
        module.exports = function mapCacheDelete(key) {
          var result = getMapData(this, key).delete(key)
          return ((this.size -= result ? 1 : 0), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getMapData = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js'
        )
        module.exports = function mapCacheGet(key) {
          return getMapData(this, key).get(key)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getMapData = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js'
        )
        module.exports = function mapCacheHas(key) {
          return getMapData(this, key).has(key)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var getMapData = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js'
        )
        module.exports = function mapCacheSet(key, value) {
          var data = getMapData(this, key),
            size = data.size
          return (
            data.set(key, value),
            (this.size += data.size == size ? 0 : 1),
            this
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js':
      (module) => {
        module.exports = function mapToArray(map) {
          var index = -1,
            result = Array(map.size)
          return (
            map.forEach(function (value, key) {
              result[++index] = [key, value]
            }),
            result
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js':
      (module) => {
        module.exports = function matchesStrictComparable(key, srcValue) {
          return function (object) {
            return (
              null != object &&
              object[key] === srcValue &&
              (void 0 !== srcValue || key in Object(object))
            )
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var memoize = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js'
        )
        module.exports = function memoizeCapped(func) {
          var result = memoize(func, function (key) {
              return (500 === cache.size && cache.clear(), key)
            }),
            cache = result.cache
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var nativeCreate = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js'
        )(Object, 'create')
        module.exports = nativeCreate
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var nativeKeys = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js'
        )(Object.keys, Object)
        module.exports = nativeKeys
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js':
      (module) => {
        module.exports = function nativeKeysIn(object) {
          var result = []
          if (null != object) for (var key in Object(object)) result.push(key)
          return result
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js':
      (module, exports, __webpack_require__) => {
        module = __webpack_require__.nmd(module)
        var freeGlobal = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js'
          ),
          freeExports = exports && !exports.nodeType && exports,
          freeModule = freeExports && module && !module.nodeType && module,
          freeProcess =
            freeModule &&
            freeModule.exports === freeExports &&
            freeGlobal.process,
          nodeUtil = (function () {
            try {
              var types =
                freeModule &&
                freeModule.require &&
                freeModule.require('util').types
              return (
                types ||
                (freeProcess &&
                  freeProcess.binding &&
                  freeProcess.binding('util'))
              )
            } catch (e) {}
          })()
        module.exports = nodeUtil
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js': (
      module
    ) => {
      module.exports = function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg))
        }
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var apply = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js'
          ),
          nativeMax = Math.max
        module.exports = function overRest(func, start, transform) {
          return (
            (start = nativeMax(void 0 === start ? func.length - 1 : start, 0)),
            function () {
              for (
                var args = arguments,
                  index = -1,
                  length = nativeMax(args.length - start, 0),
                  array = Array(length);
                ++index < length;

              )
                array[index] = args[start + index]
              index = -1
              for (var otherArgs = Array(start + 1); ++index < start; )
                otherArgs[index] = args[index]
              return (
                (otherArgs[start] = transform(array)),
                apply(func, this, otherArgs)
              )
            }
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_parent.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseGet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js'
        ),
        baseSlice = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js'
        )
      module.exports = function parent(object, path) {
        return path.length < 2
          ? object
          : baseGet(object, baseSlice(path, 0, -1))
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js': (
      module
    ) => {
      module.exports = function safeGet(object, key) {
        if (
          ('constructor' !== key || 'function' != typeof object[key]) &&
          '__proto__' != key
        )
          return object[key]
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js':
      (module) => {
        module.exports = function setCacheAdd(value) {
          return (this.__data__.set(value, '__lodash_hash_undefined__'), this)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js':
      (module) => {
        module.exports = function setCacheHas(value) {
          return this.__data__.has(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js':
      (module) => {
        module.exports = function setToArray(set) {
          var index = -1,
            result = Array(set.size)
          return (
            set.forEach(function (value) {
              result[++index] = value
            }),
            result
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseSetToString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js'
          ),
          setToString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js'
          )(baseSetToString)
        module.exports = setToString
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js':
      (module) => {
        var nativeNow = Date.now
        module.exports = function shortOut(func) {
          var count = 0,
            lastCalled = 0
          return function () {
            var stamp = nativeNow(),
              remaining = 16 - (stamp - lastCalled)
            if (((lastCalled = stamp), remaining > 0)) {
              if (++count >= 800) return arguments[0]
            } else count = 0
            return func.apply(void 0, arguments)
          }
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ListCache = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js'
        )
        module.exports = function stackClear() {
          ;((this.__data__ = new ListCache()), (this.size = 0))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js':
      (module) => {
        module.exports = function stackDelete(key) {
          var data = this.__data__,
            result = data.delete(key)
          return ((this.size = data.size), result)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js':
      (module) => {
        module.exports = function stackGet(key) {
          return this.__data__.get(key)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js':
      (module) => {
        module.exports = function stackHas(key) {
          return this.__data__.has(key)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ListCache = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js'
          ),
          Map = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js'
          ),
          MapCache = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js'
          )
        module.exports = function stackSet(key, value) {
          var data = this.__data__
          if (data instanceof ListCache) {
            var pairs = data.__data__
            if (!Map || pairs.length < 199)
              return (pairs.push([key, value]), (this.size = ++data.size), this)
            data = this.__data__ = new MapCache(pairs)
          }
          return (data.set(key, value), (this.size = data.size), this)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var memoizeCapped = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js'
          ),
          rePropName =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          reEscapeChar = /\\(\\)?/g,
          stringToPath = memoizeCapped(function (string) {
            var result = []
            return (
              46 === string.charCodeAt(0) && result.push(''),
              string.replace(
                rePropName,
                function (match, number, quote, subString) {
                  result.push(
                    quote
                      ? subString.replace(reEscapeChar, '$1')
                      : number || match
                  )
                }
              ),
              result
            )
          })
        module.exports = stringToPath
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var isSymbol = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js'
      )
      module.exports = function toKey(value) {
        if ('string' == typeof value || isSymbol(value)) return value
        var result = value + ''
        return '0' == result && 1 / value == -Infinity ? '-0' : result
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js':
      (module) => {
        var funcToString = Function.prototype.toString
        module.exports = function toSource(func) {
          if (null != func) {
            try {
              return funcToString.call(func)
            } catch (e) {}
            try {
              return func + ''
            } catch (e) {}
          }
          return ''
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js':
      (module) => {
        var rsBreakRange =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsBreak = '[' + rsBreakRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[\\u2700-\\u27bf]',
          rsLower = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
          rsMisc =
            '[^\\ud800-\\udfff' +
            rsBreakRange +
            rsDigits +
            '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
          rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
          reOptMod =
            '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
          rsSeq =
            '[\\ufe0e\\ufe0f]?' +
            reOptMod +
            ('(?:\\u200d(?:' +
              ['[^\\ud800-\\udfff]', rsRegional, rsSurrPair].join('|') +
              ')[\\ufe0e\\ufe0f]?' +
              reOptMod +
              ')*'),
          rsEmoji =
            '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          reUnicodeWord = RegExp(
            [
              rsUpper +
                '?' +
                rsLower +
                "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                [rsBreak, rsUpper, '$'].join('|') +
                ')',
              rsMiscUpper +
                "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [rsBreak, rsUpper + rsMiscLower, '$'].join('|') +
                ')',
              rsUpper + '?' + rsMiscLower + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              rsUpper + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              rsDigits,
              rsEmoji,
            ].join('|'),
            'g'
          )
        module.exports = function unicodeWords(string) {
          return string.match(reUnicodeWord) || []
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/castArray.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
        )
        module.exports = function castArray() {
          if (!arguments.length) return []
          var value = arguments[0]
          return isArray(value) ? value : [value]
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseClone = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js'
        )
        module.exports = function cloneDeep(value) {
          return baseClone(value, 5)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js': (
      module
    ) => {
      module.exports = function constant(value) {
        return function () {
          return value
        }
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var deburrLetter = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js'
        ),
        toString = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js'
        ),
        reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        reComboMark = RegExp(
          '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
          'g'
        )
      module.exports = function deburr(string) {
        return (
          (string = toString(string)) &&
          string.replace(reLatin, deburrLetter).replace(reComboMark, '')
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/defaults.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseRest = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js'
        ),
        eq = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js'
        ),
        isIterateeCall = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js'
        ),
        keysIn = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
        ),
        objectProto = Object.prototype,
        hasOwnProperty = objectProto.hasOwnProperty,
        defaults = baseRest(function (object, sources) {
          object = Object(object)
          var index = -1,
            length = sources.length,
            guard = length > 2 ? sources[2] : void 0
          for (
            guard &&
            isIterateeCall(sources[0], sources[1], guard) &&
            (length = 1);
            ++index < length;

          )
            for (
              var source = sources[index],
                props = keysIn(source),
                propsIndex = -1,
                propsLength = props.length;
              ++propsIndex < propsLength;

            ) {
              var key = props[propsIndex],
                value = object[key]
              ;(void 0 === value ||
                (eq(value, objectProto[key]) &&
                  !hasOwnProperty.call(object, key))) &&
                (object[key] = source[key])
            }
          return object
        })
      module.exports = defaults
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js': (
      module
    ) => {
      module.exports = function eq(value, other) {
        return value === other || (value != value && other != other)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseFlatten = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFlatten.js'
      )
      module.exports = function flatten(array) {
        return (null == array ? 0 : array.length) ? baseFlatten(array, 1) : []
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseGet = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js'
      )
      module.exports = function get(object, path, defaultValue) {
        var result = null == object ? void 0 : baseGet(object, path)
        return void 0 === result ? defaultValue : result
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseHasIn = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js'
        ),
        hasPath = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js'
        )
      module.exports = function hasIn(object, path) {
        return null != object && hasPath(object, path, baseHasIn)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js': (
      module
    ) => {
      module.exports = function identity(value) {
        return value
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsArguments = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          ),
          objectProto = Object.prototype,
          hasOwnProperty = objectProto.hasOwnProperty,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          isArguments = baseIsArguments(
            (function () {
              return arguments
            })()
          )
            ? baseIsArguments
            : function (value) {
                return (
                  isObjectLike(value) &&
                  hasOwnProperty.call(value, 'callee') &&
                  !propertyIsEnumerable.call(value, 'callee')
                )
              }
        module.exports = isArguments
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js': (
      module
    ) => {
      var isArray = Array.isArray
      module.exports = isArray
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isFunction = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js'
          ),
          isLength = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js'
          )
        module.exports = function isArrayLike(value) {
          return null != value && isLength(value.length) && !isFunction(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var isArrayLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          )
        module.exports = function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js': (
      module,
      exports,
      __webpack_require__
    ) => {
      module = __webpack_require__.nmd(module)
      var root = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
        ),
        stubFalse = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js'
        ),
        freeExports = exports && !exports.nodeType && exports,
        freeModule = freeExports && module && !module.nodeType && module,
        Buffer =
          freeModule && freeModule.exports === freeExports
            ? root.Buffer
            : void 0,
        isBuffer = (Buffer ? Buffer.isBuffer : void 0) || stubFalse
      module.exports = isBuffer
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseIsEqual = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js'
      )
      module.exports = function isEqual(value, other) {
        return baseIsEqual(value, other)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
          ),
          isObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
          )
        module.exports = function isFunction(value) {
          if (!isObject(value)) return !1
          var tag = baseGetTag(value)
          return (
            '[object Function]' == tag ||
            '[object GeneratorFunction]' == tag ||
            '[object AsyncFunction]' == tag ||
            '[object Proxy]' == tag
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js': (
      module
    ) => {
      module.exports = function isLength(value) {
        return (
          'number' == typeof value &&
          value > -1 &&
          value % 1 == 0 &&
          value <= 9007199254740991
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseIsMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js'
        ),
        baseUnary = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js'
        ),
        nodeUtil = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js'
        ),
        nodeIsMap = nodeUtil && nodeUtil.isMap,
        isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap
      module.exports = isMap
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
          ),
          getPrototype = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js'
          ),
          isObjectLike = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
          ),
          funcProto = Function.prototype,
          objectProto = Object.prototype,
          funcToString = funcProto.toString,
          hasOwnProperty = objectProto.hasOwnProperty,
          objectCtorString = funcToString.call(Object)
        module.exports = function isPlainObject(value) {
          if (!isObjectLike(value) || '[object Object]' != baseGetTag(value))
            return !1
          var proto = getPrototype(value)
          if (null === proto) return !0
          var Ctor =
            hasOwnProperty.call(proto, 'constructor') && proto.constructor
          return (
            'function' == typeof Ctor &&
            Ctor instanceof Ctor &&
            funcToString.call(Ctor) == objectCtorString
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseIsSet = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js'
        ),
        baseUnary = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js'
        ),
        nodeUtil = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js'
        ),
        nodeIsSet = nodeUtil && nodeUtil.isSet,
        isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet
      module.exports = isSet
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsTypedArray = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js'
          ),
          baseUnary = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js'
          ),
          nodeUtil = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js'
          ),
          nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray,
          isTypedArray = nodeIsTypedArray
            ? baseUnary(nodeIsTypedArray)
            : baseIsTypedArray
        module.exports = isTypedArray
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isUndefined.js':
      (module) => {
        module.exports = function isUndefined(value) {
          return void 0 === value
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/kebabCase.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var kebabCase = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js'
        )(function (result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase()
        })
        module.exports = kebabCase
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var arrayLikeKeys = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js'
        ),
        baseKeys = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js'
        ),
        isArrayLike = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
        )
      module.exports = function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var arrayLikeKeys = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js'
        ),
        baseKeysIn = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js'
        ),
        isArrayLike = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js'
        )
      module.exports = function keysIn(object) {
        return isArrayLike(object)
          ? arrayLikeKeys(object, !0)
          : baseKeysIn(object)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/last.js': (
      module
    ) => {
      module.exports = function last(array) {
        var length = null == array ? 0 : array.length
        return length ? array[length - 1] : void 0
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var arrayMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js'
        ),
        baseIteratee = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js'
        ),
        baseMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMap.js'
        ),
        isArray = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js'
        )
      module.exports = function map(collection, iteratee) {
        return (isArray(collection) ? arrayMap : baseMap)(
          collection,
          baseIteratee(iteratee, 3)
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var MapCache = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js'
      )
      function memoize(func, resolver) {
        if (
          'function' != typeof func ||
          (null != resolver && 'function' != typeof resolver)
        )
          throw new TypeError('Expected a function')
        var memoized = function () {
          var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache
          if (cache.has(key)) return cache.get(key)
          var result = func.apply(this, args)
          return ((memoized.cache = cache.set(key, result) || cache), result)
        }
        return ((memoized.cache = new (memoize.Cache || MapCache)()), memoized)
      }
      ;((memoize.Cache = MapCache), (module.exports = memoize))
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseMerge = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js'
        ),
        merge = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js'
        )(function (object, source, srcIndex) {
          baseMerge(object, source, srcIndex)
        })
      module.exports = merge
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var baseMerge = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js'
          ),
          mergeWith = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js'
          )(function (object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer)
          })
        module.exports = mergeWith
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/negate.js': (
      module
    ) => {
      module.exports = function negate(predicate) {
        if ('function' != typeof predicate)
          throw new TypeError('Expected a function')
        return function () {
          var args = arguments
          switch (args.length) {
            case 0:
              return !predicate.call(this)
            case 1:
              return !predicate.call(this, args[0])
            case 2:
              return !predicate.call(this, args[0], args[1])
            case 3:
              return !predicate.call(this, args[0], args[1], args[2])
          }
          return !predicate.apply(this, args)
        }
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var arrayMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js'
        ),
        baseClone = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js'
        ),
        baseUnset = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnset.js'
        ),
        castPath = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js'
        ),
        copyObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
        ),
        customOmitClone = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_customOmitClone.js'
        ),
        flatRest = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_flatRest.js'
        ),
        getAllKeysIn = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js'
        ),
        omit = flatRest(function (object, paths) {
          var result = {}
          if (null == object) return result
          var isDeep = !1
          ;((paths = arrayMap(paths, function (path) {
            return (
              (path = castPath(path, object)),
              isDeep || (isDeep = path.length > 1),
              path
            )
          })),
            copyObject(object, getAllKeysIn(object), result),
            isDeep && (result = baseClone(result, 7, customOmitClone)))
          for (var length = paths.length; length--; )
            baseUnset(result, paths[length])
          return result
        })
      module.exports = omit
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omitBy.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseIteratee = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js'
        ),
        negate = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/negate.js'
        ),
        pickBy = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js'
        )
      module.exports = function omitBy(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)))
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pick.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var basePick = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePick.js'
        ),
        pick = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_flatRest.js'
        )(function (object, paths) {
          return null == object ? {} : basePick(object, paths)
        })
      module.exports = pick
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var arrayMap = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js'
        ),
        baseIteratee = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js'
        ),
        basePickBy = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js'
        ),
        getAllKeysIn = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js'
        )
      module.exports = function pickBy(object, predicate) {
        if (null == object) return {}
        var props = arrayMap(getAllKeysIn(object), function (prop) {
          return [prop]
        })
        return (
          (predicate = baseIteratee(predicate)),
          basePickBy(object, props, function (value, path) {
            return predicate(value, path[0])
          })
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseProperty = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js'
        ),
        basePropertyDeep = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js'
        ),
        isKey = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js'
        ),
        toKey = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js'
        )
      module.exports = function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js':
      (module) => {
        module.exports = function stubArray() {
          return []
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js':
      (module) => {
        module.exports = function stubFalse() {
          return !1
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var copyObject = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js'
          ),
          keysIn = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js'
          )
        module.exports = function toPlainObject(value) {
          return copyObject(value, keysIn(value))
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseToString = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js'
      )
      module.exports = function toString(value) {
        return null == value ? '' : baseToString(value)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var asciiWords = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js'
        ),
        hasUnicodeWord = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js'
        ),
        toString = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js'
        ),
        unicodeWords = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js'
        )
      module.exports = function words(string, pattern, guard) {
        return (
          (string = toString(string)),
          void 0 === (pattern = guard ? void 0 : pattern)
            ? hasUnicodeWord(string)
              ? unicodeWords(string)
              : asciiWords(string)
            : string.match(pattern) || []
        )
      }
    },
    '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict'
        var React = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        var objectIs =
            'function' == typeof Object.is
              ? Object.is
              : function is(x, y) {
                  return (
                    (x === y && (0 !== x || 1 / x == 1 / y)) ||
                    (x != x && y != y)
                  )
                },
          useState = React.useState,
          useEffect = React.useEffect,
          useLayoutEffect = React.useLayoutEffect,
          useDebugValue = React.useDebugValue
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot
          inst = inst.value
          try {
            var nextValue = latestGetSnapshot()
            return !objectIs(inst, nextValue)
          } catch (error) {
            return !0
          }
        }
        var shim =
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function useSyncExternalStore$1(subscribe, getSnapshot) {
                return getSnapshot()
              }
            : function useSyncExternalStore$2(subscribe, getSnapshot) {
                var value = getSnapshot(),
                  _useState = useState({ inst: { value, getSnapshot } }),
                  inst = _useState[0].inst,
                  forceUpdate = _useState[1]
                return (
                  useLayoutEffect(
                    function () {
                      ;((inst.value = value),
                        (inst.getSnapshot = getSnapshot),
                        checkIfSnapshotChanged(inst) && forceUpdate({ inst }))
                    },
                    [subscribe, value, getSnapshot]
                  ),
                  useEffect(
                    function () {
                      return (
                        checkIfSnapshotChanged(inst) && forceUpdate({ inst }),
                        subscribe(function () {
                          checkIfSnapshotChanged(inst) && forceUpdate({ inst })
                        })
                      )
                    },
                    [subscribe]
                  ),
                  useDebugValue(value),
                  value
                )
              }
        exports.useSyncExternalStore =
          void 0 !== React.useSyncExternalStore
            ? React.useSyncExternalStore
            : shim
      },
    '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict'
        var React = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          shim = __webpack_require__(
            '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js'
          )
        var objectIs =
            'function' == typeof Object.is
              ? Object.is
              : function is(x, y) {
                  return (
                    (x === y && (0 !== x || 1 / x == 1 / y)) ||
                    (x != x && y != y)
                  )
                },
          useSyncExternalStore = shim.useSyncExternalStore,
          useRef = React.useRef,
          useEffect = React.useEffect,
          useMemo = React.useMemo,
          useDebugValue = React.useDebugValue
        exports.useSyncExternalStoreWithSelector = function (
          subscribe,
          getSnapshot,
          getServerSnapshot,
          selector,
          isEqual
        ) {
          var instRef = useRef(null)
          if (null === instRef.current) {
            var inst = { hasValue: !1, value: null }
            instRef.current = inst
          } else inst = instRef.current
          instRef = useMemo(
            function () {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  if (
                    ((hasMemo = !0),
                    (memoizedSnapshot = nextSnapshot),
                    (nextSnapshot = selector(nextSnapshot)),
                    void 0 !== isEqual && inst.hasValue)
                  ) {
                    var currentSelection = inst.value
                    if (isEqual(currentSelection, nextSnapshot))
                      return (memoizedSelection = currentSelection)
                  }
                  return (memoizedSelection = nextSnapshot)
                }
                if (
                  ((currentSelection = memoizedSelection),
                  objectIs(memoizedSnapshot, nextSnapshot))
                )
                  return currentSelection
                var nextSelection = selector(nextSnapshot)
                return void 0 !== isEqual &&
                  isEqual(currentSelection, nextSelection)
                  ? ((memoizedSnapshot = nextSnapshot), currentSelection)
                  : ((memoizedSnapshot = nextSnapshot),
                    (memoizedSelection = nextSelection))
              }
              var memoizedSnapshot,
                memoizedSelection,
                hasMemo = !1,
                maybeGetServerSnapshot =
                  void 0 === getServerSnapshot ? null : getServerSnapshot
              return [
                function () {
                  return memoizedSelector(getSnapshot())
                },
                null === maybeGetServerSnapshot
                  ? void 0
                  : function () {
                      return memoizedSelector(maybeGetServerSnapshot())
                    },
              ]
            },
            [getSnapshot, getServerSnapshot, selector, isEqual]
          )
          var value = useSyncExternalStore(subscribe, instRef[0], instRef[1])
          return (
            useEffect(
              function () {
                ;((inst.hasValue = !0), (inst.value = value))
              },
              [value]
            ),
            useDebugValue(value),
            value
          )
        }
      },
    '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict'
        module.exports = __webpack_require__(
          '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js'
        )
      },
    '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict'
        module.exports = __webpack_require__(
          '../../node_modules/.pnpm/use-sync-external-store@1.5.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js'
        )
      },
  },
])
