'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5492],
  {
    '../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@mdx-js/react/lib/index.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          R: () => useMDXComponents,
          x: () => MDXProvider,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        const emptyComponents = {},
          MDXContext =
            react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)
        function useMDXComponents(components) {
          const contextComponents =
            react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
          return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
            function () {
              return 'function' == typeof components
                ? components(contextComponents)
                : { ...contextComponents, ...components }
            },
            [contextComponents, components]
          )
        }
        function MDXProvider(properties) {
          let allComponents
          return (
            (allComponents = properties.disableParentContext
              ? 'function' == typeof properties.components
                ? properties.components(emptyComponents)
                : properties.components || emptyComponents
              : useMDXComponents(properties.components)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              MDXContext.Provider,
              { value: allComponents },
              properties.children
            )
          )
        }
      },
    '../../node_modules/.pnpm/@storybook+blocks@8.6.14_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@9.0.18_@_d80ea37df0f2db1cb6e204276b9c28f2/node_modules/@storybook/blocks/dist/chunk-2PTXLE6R.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          P$: () => __commonJS,
          Yq: () => getControlSetterButtonId,
          ZA: () => getControlId,
          f1: () => __toESM,
          ki: () => __require,
          mg: () => cloneDeep2,
          sg: () => debounce2,
        })
        var Buffer = __webpack_require__(
            '../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js'
          ).Buffer,
          __create = Object.create,
          __defProp = Object.defineProperty,
          __getOwnPropDesc = Object.getOwnPropertyDescriptor,
          __getOwnPropNames = Object.getOwnPropertyNames,
          __getProtoOf = Object.getPrototypeOf,
          __hasOwnProp = Object.prototype.hasOwnProperty,
          __require = __webpack_require__(
            '../../node_modules/.pnpm/@storybook+blocks@8.6.14_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@9.0.18_@_d80ea37df0f2db1cb6e204276b9c28f2/node_modules/@storybook/blocks/dist sync recursive'
          ),
          __commonJS = (cb, mod) =>
            function () {
              return (
                mod ||
                  (0, cb[__getOwnPropNames(cb)[0]])(
                    (mod = { exports: {} }).exports,
                    mod
                  ),
                mod.exports
              )
            },
          __toESM = (mod, isNodeMode, target) => (
            (target = null != mod ? __create(__getProtoOf(mod)) : {}),
            ((to, from, except, desc) => {
              if (
                (from && 'object' == typeof from) ||
                'function' == typeof from
              )
                for (let key of __getOwnPropNames(from))
                  !__hasOwnProp.call(to, key) &&
                    key !== except &&
                    __defProp(to, key, {
                      get: () => from[key],
                      enumerable:
                        !(desc = __getOwnPropDesc(from, key)) ||
                        desc.enumerable,
                    })
              return to
            })(
              !isNodeMode && mod && mod.__esModule
                ? target
                : __defProp(target, 'default', { value: mod, enumerable: !0 }),
              mod
            )
          )
        function debounce(func, debounceMs, { signal, edges } = {}) {
          let pendingThis,
            pendingArgs = null,
            leading = null != edges && edges.includes('leading'),
            trailing = null == edges || edges.includes('trailing'),
            invoke = () => {
              null !== pendingArgs &&
                (func.apply(pendingThis, pendingArgs),
                (pendingThis = void 0),
                (pendingArgs = null))
            },
            timeoutId = null,
            schedule = () => {
              ;(null != timeoutId && clearTimeout(timeoutId),
                (timeoutId = setTimeout(() => {
                  ;((timeoutId = null), trailing && invoke(), cancel())
                }, debounceMs)))
            },
            cancelTimer = () => {
              null !== timeoutId &&
                (clearTimeout(timeoutId), (timeoutId = null))
            },
            cancel = () => {
              ;(cancelTimer(), (pendingThis = void 0), (pendingArgs = null))
            },
            debounced = function (...args) {
              if (signal?.aborted) return
              ;((pendingThis = this), (pendingArgs = args))
              let isFirstCall = null == timeoutId
              ;(schedule(), leading && isFirstCall && invoke())
            }
          return (
            (debounced.schedule = schedule),
            (debounced.cancel = cancel),
            (debounced.flush = () => {
              ;(cancelTimer(), invoke())
            }),
            signal?.addEventListener('abort', cancel, { once: !0 }),
            debounced
          )
        }
        function debounce2(func, debounceMs = 0, options = {}) {
          'object' != typeof options && (options = {})
          let { signal, leading = !1, trailing = !0, maxWait } = options,
            edges = Array(2)
          ;(leading && (edges[0] = 'leading'),
            trailing && (edges[1] = 'trailing'))
          let result,
            pendingAt = null,
            _debounced = debounce(
              function (...args) {
                ;((result = func.apply(this, args)), (pendingAt = null))
              },
              debounceMs,
              { signal, edges }
            ),
            debounced = function (...args) {
              if (null != maxWait)
                if (null === pendingAt) pendingAt = Date.now()
                else if (Date.now() - pendingAt >= maxWait)
                  return (
                    (result = func.apply(this, args)),
                    (pendingAt = Date.now()),
                    _debounced.cancel(),
                    _debounced.schedule(),
                    result
                  )
              return (_debounced.apply(this, args), result)
            }
          return (
            (debounced.cancel = _debounced.cancel),
            (debounced.flush = () => (_debounced.flush(), result)),
            debounced
          )
        }
        function cloneDeep(obj) {
          return cloneDeepImpl(obj)
        }
        function cloneDeepImpl(obj, stack = new Map()) {
          if (
            (function isPrimitive(value) {
              return (
                null == value ||
                ('object' != typeof value && 'function' != typeof value)
              )
            })(obj)
          )
            return obj
          if (stack.has(obj)) return stack.get(obj)
          if (Array.isArray(obj)) {
            let result = new Array(obj.length)
            stack.set(obj, result)
            for (let i = 0; i < obj.length; i++)
              result[i] = cloneDeepImpl(obj[i], stack)
            return (
              Object.prototype.hasOwnProperty.call(obj, 'index') &&
                (result.index = obj.index),
              Object.prototype.hasOwnProperty.call(obj, 'input') &&
                (result.input = obj.input),
              result
            )
          }
          if (obj instanceof Date) return new Date(obj.getTime())
          if (obj instanceof RegExp) {
            let result = new RegExp(obj.source, obj.flags)
            return ((result.lastIndex = obj.lastIndex), result)
          }
          if (obj instanceof Map) {
            let result = new Map()
            stack.set(obj, result)
            for (let [key, value] of obj.entries())
              result.set(key, cloneDeepImpl(value, stack))
            return result
          }
          if (obj instanceof Set) {
            let result = new Set()
            stack.set(obj, result)
            for (let value of obj.values())
              result.add(cloneDeepImpl(value, stack))
            return result
          }
          if (typeof Buffer < 'u' && Buffer.isBuffer(obj)) return obj.subarray()
          if (
            (function isTypedArray(x) {
              return ArrayBuffer.isView(x) && !(x instanceof DataView)
            })(obj)
          ) {
            let result = new (Object.getPrototypeOf(obj).constructor)(
              obj.length
            )
            stack.set(obj, result)
            for (let i = 0; i < obj.length; i++)
              result[i] = cloneDeepImpl(obj[i], stack)
            return result
          }
          if (
            obj instanceof ArrayBuffer ||
            (typeof SharedArrayBuffer < 'u' && obj instanceof SharedArrayBuffer)
          )
            return obj.slice(0)
          if (obj instanceof DataView) {
            let result = new DataView(
              obj.buffer.slice(0),
              obj.byteOffset,
              obj.byteLength
            )
            return (
              stack.set(obj, result),
              copyProperties(result, obj, stack),
              result
            )
          }
          if (typeof File < 'u' && obj instanceof File) {
            let result = new File([obj], obj.name, { type: obj.type })
            return (
              stack.set(obj, result),
              copyProperties(result, obj, stack),
              result
            )
          }
          if (obj instanceof Blob) {
            let result = new Blob([obj], { type: obj.type })
            return (
              stack.set(obj, result),
              copyProperties(result, obj, stack),
              result
            )
          }
          if (obj instanceof Error) {
            let result = new obj.constructor()
            return (
              stack.set(obj, result),
              (result.message = obj.message),
              (result.name = obj.name),
              (result.stack = obj.stack),
              (result.cause = obj.cause),
              copyProperties(result, obj, stack),
              result
            )
          }
          if ('object' == typeof obj && null !== obj) {
            let result = {}
            return (
              stack.set(obj, result),
              copyProperties(result, obj, stack),
              result
            )
          }
          return obj
        }
        function copyProperties(target, source, stack) {
          let keys = Object.keys(source)
          for (let i = 0; i < keys.length; i++) {
            let key = keys[i],
              descriptor = Object.getOwnPropertyDescriptor(source, key)
            ;(descriptor?.writable || descriptor?.set) &&
              (target[key] = cloneDeepImpl(source[key], stack))
          }
        }
        var stringTag = '[object String]',
          numberTag = '[object Number]',
          booleanTag = '[object Boolean]',
          argumentsTag = '[object Arguments]'
        function cloneDeep2(obj) {
          if ('object' != typeof obj) return cloneDeep(obj)
          switch (Object.prototype.toString.call(obj)) {
            case numberTag:
            case stringTag:
            case booleanTag: {
              let result = new obj.constructor(obj?.valueOf())
              return (copyProperties(result, obj), result)
            }
            case argumentsTag: {
              let result = {}
              return (
                copyProperties(result, obj),
                (result.length = obj.length),
                (result[Symbol.iterator] = obj[Symbol.iterator]),
                result
              )
            }
            default:
              return cloneDeep(obj)
          }
        }
        var getControlId = (value) => `control-${value.replace(/\s+/g, '-')}`,
          getControlSetterButtonId = (value) =>
            `set-${value.replace(/\s+/g, '-')}`
      },
    '../../node_modules/.pnpm/@storybook+blocks@8.6.14_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@9.0.18_@_d80ea37df0f2db1cb6e204276b9c28f2/node_modules/@storybook/blocks/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { W8: () => Meta })
        var _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@storybook+blocks@8.6.14_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@9.0.18_@_d80ea37df0f2db1cb6e204276b9c28f2/node_modules/@storybook/blocks/dist/chunk-2PTXLE6R.mjs'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2/node_modules/storybook/dist/components/index.js'
            ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2/node_modules/storybook/dist/theming/index.js'
            ),
          _storybook_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            '../../node_modules/.pnpm/@storybook+icons@1.4.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@storybook/icons/dist/index.mjs'
          ),
          storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__('storybook/internal/client-logger'),
            __webpack_require__('storybook/preview-api')),
          storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('storybook/internal/core-events'),
          storybook_internal_channels__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('storybook/internal/channels'),
          console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          require_memoizerific = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/memoizerific/memoizerific.js'(exports, module) {
              !(function (f3) {
                if ('object' == typeof exports && typeof module < 'u')
                  module.exports = f3()
                else if (
                  'function' == typeof define &&
                  __webpack_require__.amdO
                )
                  define([], f3)
                else {
                  ;(typeof window < 'u'
                    ? window
                    : typeof __webpack_require__.g < 'u'
                      ? __webpack_require__.g
                      : typeof self < 'u'
                        ? self
                        : this
                  ).memoizerific = f3()
                }
              })(function () {
                return (function e2(t2, n2, r2) {
                  function s2(o3, u2) {
                    if (!n2[o3]) {
                      if (!t2[o3]) {
                        var a2 =
                          'function' ==
                            typeof _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.ki &&
                          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.ki
                        if (!u2 && a2) return a2(o3, !0)
                        if (i2) return i2(o3, !0)
                        var f3 = new Error("Cannot find module '" + o3 + "'")
                        throw ((f3.code = 'MODULE_NOT_FOUND'), f3)
                      }
                      var l2 = (n2[o3] = { exports: {} })
                      t2[o3][0].call(
                        l2.exports,
                        function (e3) {
                          return s2(t2[o3][1][e3] || e3)
                        },
                        l2,
                        l2.exports,
                        e2,
                        t2,
                        n2,
                        r2
                      )
                    }
                    return n2[o3].exports
                  }
                  for (
                    var i2 =
                        'function' ==
                          typeof _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.ki &&
                        _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.ki,
                      o2 = 0;
                    o2 < r2.length;
                    o2++
                  )
                    s2(r2[o2])
                  return s2
                })(
                  {
                    1: [
                      function (_dereq_, module3, exports3) {
                        module3.exports = function (forceSimilar) {
                          return 'function' != typeof Map || forceSimilar
                            ? new (_dereq_('./similar'))()
                            : new Map()
                        }
                      },
                      { './similar': 2 },
                    ],
                    2: [
                      function (_dereq_, module3, exports3) {
                        function Similar() {
                          return (
                            (this.list = []),
                            (this.lastItem = void 0),
                            (this.size = 0),
                            this
                          )
                        }
                        ;((Similar.prototype.get = function (key2) {
                          var index
                          return this.lastItem &&
                            this.isEqual(this.lastItem.key, key2)
                            ? this.lastItem.val
                            : (index = this.indexOf(key2)) >= 0
                              ? ((this.lastItem = this.list[index]),
                                this.list[index].val)
                              : void 0
                        }),
                          (Similar.prototype.set = function (key2, val) {
                            var index
                            return this.lastItem &&
                              this.isEqual(this.lastItem.key, key2)
                              ? ((this.lastItem.val = val), this)
                              : (index = this.indexOf(key2)) >= 0
                                ? ((this.lastItem = this.list[index]),
                                  (this.list[index].val = val),
                                  this)
                                : ((this.lastItem = { key: key2, val }),
                                  this.list.push(this.lastItem),
                                  this.size++,
                                  this)
                          }),
                          (Similar.prototype.delete = function (key2) {
                            var index
                            if (
                              (this.lastItem &&
                                this.isEqual(this.lastItem.key, key2) &&
                                (this.lastItem = void 0),
                              (index = this.indexOf(key2)) >= 0)
                            )
                              return (
                                this.size--,
                                this.list.splice(index, 1)[0]
                              )
                          }),
                          (Similar.prototype.has = function (key2) {
                            var index
                            return (
                              !(
                                !this.lastItem ||
                                !this.isEqual(this.lastItem.key, key2)
                              ) ||
                              ((index = this.indexOf(key2)) >= 0 &&
                                ((this.lastItem = this.list[index]), !0))
                            )
                          }),
                          (Similar.prototype.forEach = function (
                            callback,
                            thisArg
                          ) {
                            var i2
                            for (i2 = 0; i2 < this.size; i2++)
                              callback.call(
                                thisArg || this,
                                this.list[i2].val,
                                this.list[i2].key,
                                this
                              )
                          }),
                          (Similar.prototype.indexOf = function (key2) {
                            var i2
                            for (i2 = 0; i2 < this.size; i2++)
                              if (this.isEqual(this.list[i2].key, key2))
                                return i2
                            return -1
                          }),
                          (Similar.prototype.isEqual = function (val1, val2) {
                            return (
                              val1 === val2 || (val1 != val1 && val2 != val2)
                            )
                          }),
                          (module3.exports = Similar))
                      },
                      {},
                    ],
                    3: [
                      function (_dereq_, module3, exports3) {
                        var MapOrSimilar = _dereq_('map-or-similar')
                        function isEqual(val1, val2) {
                          return val1 === val2 || (val1 != val1 && val2 != val2)
                        }
                        module3.exports = function (limit) {
                          var cache = new MapOrSimilar(!1),
                            lru = []
                          return function (fn) {
                            var memoizerific = function () {
                              var newMap,
                                fnResult,
                                i2,
                                currentCache = cache,
                                argsLengthMinusOne = arguments.length - 1,
                                lruPath = Array(argsLengthMinusOne + 1),
                                isMemoized = !0
                              if (
                                (memoizerific.numArgs ||
                                  0 === memoizerific.numArgs) &&
                                memoizerific.numArgs !== argsLengthMinusOne + 1
                              )
                                throw new Error(
                                  'Memoizerific functions should always be called with the same number of arguments'
                                )
                              for (i2 = 0; i2 < argsLengthMinusOne; i2++)
                                ((lruPath[i2] = {
                                  cacheItem: currentCache,
                                  arg: arguments[i2],
                                }),
                                  currentCache.has(arguments[i2])
                                    ? (currentCache = currentCache.get(
                                        arguments[i2]
                                      ))
                                    : ((isMemoized = !1),
                                      (newMap = new MapOrSimilar(!1)),
                                      currentCache.set(arguments[i2], newMap),
                                      (currentCache = newMap)))
                              return (
                                isMemoized &&
                                  (currentCache.has(
                                    arguments[argsLengthMinusOne]
                                  )
                                    ? (fnResult = currentCache.get(
                                        arguments[argsLengthMinusOne]
                                      ))
                                    : (isMemoized = !1)),
                                isMemoized ||
                                  ((fnResult = fn.apply(null, arguments)),
                                  currentCache.set(
                                    arguments[argsLengthMinusOne],
                                    fnResult
                                  )),
                                limit > 0 &&
                                  ((lruPath[argsLengthMinusOne] = {
                                    cacheItem: currentCache,
                                    arg: arguments[argsLengthMinusOne],
                                  }),
                                  isMemoized
                                    ? (function moveToMostRecentLru(
                                        lru,
                                        lruPath
                                      ) {
                                        var isMatch,
                                          i2,
                                          ii,
                                          lruLen = lru.length,
                                          lruPathLen = lruPath.length
                                        for (i2 = 0; i2 < lruLen; i2++) {
                                          for (
                                            isMatch = !0, ii = 0;
                                            ii < lruPathLen;
                                            ii++
                                          )
                                            if (
                                              !isEqual(
                                                lru[i2][ii].arg,
                                                lruPath[ii].arg
                                              )
                                            ) {
                                              isMatch = !1
                                              break
                                            }
                                          if (isMatch) break
                                        }
                                        lru.push(lru.splice(i2, 1)[0])
                                      })(lru, lruPath)
                                    : lru.push(lruPath),
                                  lru.length > limit &&
                                    (function removeCachedResult(removedLru) {
                                      var tmp,
                                        i2,
                                        removedLruLen = removedLru.length,
                                        currentLru =
                                          removedLru[removedLruLen - 1]
                                      for (
                                        currentLru.cacheItem.delete(
                                          currentLru.arg
                                        ),
                                          i2 = removedLruLen - 2;
                                        i2 >= 0 &&
                                        ((currentLru = removedLru[i2]),
                                        !(tmp = currentLru.cacheItem.get(
                                          currentLru.arg
                                        )) || !tmp.size);
                                        i2--
                                      )
                                        currentLru.cacheItem.delete(
                                          currentLru.arg
                                        )
                                    })(lru.shift())),
                                (memoizerific.wasMemoized = isMemoized),
                                (memoizerific.numArgs = argsLengthMinusOne + 1),
                                fnResult
                              )
                            }
                            return (
                              (memoizerific.limit = limit),
                              (memoizerific.wasMemoized = !1),
                              (memoizerific.cache = cache),
                              (memoizerific.lru = lru),
                              memoizerific
                            )
                          }
                        }
                      },
                      { 'map-or-similar': 1 },
                    ],
                  },
                  {},
                  [3]
                )(3)
              })
            },
          }),
          require_default_options = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/tocbot/src/js/default-options.js'(
              exports,
              module
            ) {
              module.exports = {
                tocSelector: '.js-toc',
                contentSelector: '.js-toc-content',
                headingSelector: 'h1, h2, h3',
                ignoreSelector: '.js-toc-ignore',
                hasInnerContainers: !1,
                linkClass: 'toc-link',
                extraLinkClasses: '',
                activeLinkClass: 'is-active-link',
                listClass: 'toc-list',
                extraListClasses: '',
                isCollapsedClass: 'is-collapsed',
                collapsibleClass: 'is-collapsible',
                listItemClass: 'toc-list-item',
                activeListItemClass: 'is-active-li',
                collapseDepth: 0,
                scrollSmooth: !0,
                scrollSmoothDuration: 420,
                scrollSmoothOffset: 0,
                scrollEndCallback: function (e2) {},
                headingsOffset: 1,
                throttleTimeout: 50,
                positionFixedSelector: null,
                positionFixedClass: 'is-position-fixed',
                fixedSidebarOffset: 'auto',
                includeHtml: !1,
                includeTitleTags: !1,
                onClick: function (e2) {},
                orderedList: !0,
                scrollContainer: null,
                skipRendering: !1,
                headingLabelCallback: !1,
                ignoreHiddenElements: !1,
                headingObjectCallback: null,
                basePath: '',
                disableTocScrollSync: !1,
                tocScrollOffset: 0,
              }
            },
          }),
          require_build_html = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/tocbot/src/js/build-html.js'(exports, module) {
              module.exports = function (options2) {
                var tocElement,
                  forEach = [].forEach,
                  some = [].some,
                  body = document.body,
                  currentlyHighlighting = !0
                function createEl(d2, container) {
                  var link = container.appendChild(
                    (function createLink(data) {
                      var item = document.createElement('li'),
                        a2 = document.createElement('a')
                      return (
                        options2.listItemClass &&
                          item.setAttribute('class', options2.listItemClass),
                        options2.onClick && (a2.onclick = options2.onClick),
                        options2.includeTitleTags &&
                          a2.setAttribute('title', data.textContent),
                        options2.includeHtml && data.childNodes.length
                          ? forEach.call(data.childNodes, function (node) {
                              a2.appendChild(node.cloneNode(!0))
                            })
                          : (a2.textContent = data.textContent),
                        a2.setAttribute(
                          'href',
                          options2.basePath + '#' + data.id
                        ),
                        a2.setAttribute(
                          'class',
                          options2.linkClass +
                            ' node-name--' +
                            data.nodeName +
                            ' ' +
                            options2.extraLinkClasses
                        ),
                        item.appendChild(a2),
                        item
                      )
                    })(d2)
                  )
                  if (d2.children.length) {
                    var list = createList(d2.isCollapsed)
                    ;(d2.children.forEach(function (child) {
                      createEl(child, list)
                    }),
                      link.appendChild(list))
                  }
                }
                function createList(isCollapsed) {
                  var listElement = options2.orderedList ? 'ol' : 'ul',
                    list = document.createElement(listElement),
                    classes =
                      options2.listClass + ' ' + options2.extraListClasses
                  return (
                    isCollapsed &&
                      (classes =
                        (classes = classes + ' ' + options2.collapsibleClass) +
                        ' ' +
                        options2.isCollapsedClass),
                    list.setAttribute('class', classes),
                    list
                  )
                }
                function getHeadingTopPos(obj) {
                  var position = 0
                  return (
                    null !== obj &&
                      ((position = obj.offsetTop),
                      options2.hasInnerContainers &&
                        (position += getHeadingTopPos(obj.offsetParent))),
                    position
                  )
                }
                function updateClassname(obj, className) {
                  return (
                    obj &&
                      obj.className !== className &&
                      (obj.className = className),
                    obj
                  )
                }
                function removeCollapsedFromParents(element) {
                  return element &&
                    -1 !==
                      element.className.indexOf(options2.collapsibleClass) &&
                    -1 !== element.className.indexOf(options2.isCollapsedClass)
                    ? (updateClassname(
                        element,
                        element.className.replace(
                          ' ' + options2.isCollapsedClass,
                          ''
                        )
                      ),
                      removeCollapsedFromParents(element.parentNode.parentNode))
                    : element
                }
                return {
                  enableTocAnimation: function enableTocAnimation() {
                    currentlyHighlighting = !0
                  },
                  disableTocAnimation: function disableTocAnimation(event) {
                    var target = event.target || event.srcElement
                    'string' != typeof target.className ||
                      -1 === target.className.indexOf(options2.linkClass) ||
                      (currentlyHighlighting = !1)
                  },
                  render: function render(parent, data) {
                    var container = createList(!1)
                    if (
                      (data.forEach(function (d2) {
                        createEl(d2, container)
                      }),
                      null !== (tocElement = parent || tocElement))
                    )
                      return (
                        tocElement.firstChild &&
                          tocElement.removeChild(tocElement.firstChild),
                        0 === data.length
                          ? tocElement
                          : tocElement.appendChild(container)
                      )
                  },
                  updateToc: function updateToc(headingsArray) {
                    var top
                    ;((top =
                      options2.scrollContainer &&
                      document.querySelector(options2.scrollContainer)
                        ? document.querySelector(options2.scrollContainer)
                            .scrollTop
                        : document.documentElement.scrollTop || body.scrollTop),
                      options2.positionFixedSelector &&
                        (function updateFixedSidebarClass() {
                          var top
                          top =
                            options2.scrollContainer &&
                            document.querySelector(options2.scrollContainer)
                              ? document.querySelector(options2.scrollContainer)
                                  .scrollTop
                              : document.documentElement.scrollTop ||
                                body.scrollTop
                          var posFixedEl = document.querySelector(
                            options2.positionFixedSelector
                          )
                          ;('auto' === options2.fixedSidebarOffset &&
                            (options2.fixedSidebarOffset =
                              tocElement.offsetTop),
                            top > options2.fixedSidebarOffset
                              ? -1 ===
                                  posFixedEl.className.indexOf(
                                    options2.positionFixedClass
                                  ) &&
                                (posFixedEl.className +=
                                  ' ' + options2.positionFixedClass)
                              : (posFixedEl.className =
                                  posFixedEl.className.replace(
                                    ' ' + options2.positionFixedClass,
                                    ''
                                  )))
                        })())
                    var topHeader,
                      headings = headingsArray
                    if (
                      currentlyHighlighting &&
                      null !== tocElement &&
                      headings.length > 0
                    ) {
                      some.call(headings, function (heading, i2) {
                        return getHeadingTopPos(heading) >
                          top + options2.headingsOffset + 10
                          ? ((topHeader = headings[0 === i2 ? i2 : i2 - 1]), !0)
                          : i2 === headings.length - 1
                            ? ((topHeader = headings[headings.length - 1]), !0)
                            : void 0
                      })
                      var oldActiveTocLink = tocElement.querySelector(
                          '.' + options2.activeLinkClass
                        ),
                        activeTocLink = tocElement.querySelector(
                          '.' +
                            options2.linkClass +
                            '.node-name--' +
                            topHeader.nodeName +
                            '[href="' +
                            options2.basePath +
                            '#' +
                            topHeader.id.replace(
                              /([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,
                              '\\$1'
                            ) +
                            '"]'
                        )
                      if (oldActiveTocLink === activeTocLink) return
                      var tocLinks = tocElement.querySelectorAll(
                        '.' + options2.linkClass
                      )
                      forEach.call(tocLinks, function (tocLink) {
                        updateClassname(
                          tocLink,
                          tocLink.className.replace(
                            ' ' + options2.activeLinkClass,
                            ''
                          )
                        )
                      })
                      var tocLis = tocElement.querySelectorAll(
                        '.' + options2.listItemClass
                      )
                      ;(forEach.call(tocLis, function (tocLi) {
                        updateClassname(
                          tocLi,
                          tocLi.className.replace(
                            ' ' + options2.activeListItemClass,
                            ''
                          )
                        )
                      }),
                        activeTocLink &&
                          -1 ===
                            activeTocLink.className.indexOf(
                              options2.activeLinkClass
                            ) &&
                          (activeTocLink.className +=
                            ' ' + options2.activeLinkClass))
                      var li = activeTocLink && activeTocLink.parentNode
                      li &&
                        -1 ===
                          li.className.indexOf(options2.activeListItemClass) &&
                        (li.className += ' ' + options2.activeListItemClass)
                      var tocLists = tocElement.querySelectorAll(
                        '.' +
                          options2.listClass +
                          '.' +
                          options2.collapsibleClass
                      )
                      ;(forEach.call(tocLists, function (list) {
                        ;-1 ===
                          list.className.indexOf(options2.isCollapsedClass) &&
                          (list.className += ' ' + options2.isCollapsedClass)
                      }),
                        activeTocLink &&
                          activeTocLink.nextSibling &&
                          -1 !==
                            activeTocLink.nextSibling.className.indexOf(
                              options2.isCollapsedClass
                            ) &&
                          updateClassname(
                            activeTocLink.nextSibling,
                            activeTocLink.nextSibling.className.replace(
                              ' ' + options2.isCollapsedClass,
                              ''
                            )
                          ),
                        removeCollapsedFromParents(
                          activeTocLink && activeTocLink.parentNode.parentNode
                        ))
                    }
                  },
                }
              }
            },
          }),
          require_parse_content = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/tocbot/src/js/parse-content.js'(
              exports,
              module
            ) {
              module.exports = function (options2) {
                var reduce = [].reduce
                function getLastItem(array2) {
                  return array2[array2.length - 1]
                }
                function getHeadingLevel(heading) {
                  return +heading.nodeName.toUpperCase().replace('H', '')
                }
                function getHeadingObject(heading) {
                  if (
                    !(function isHTMLElement(maybeElement) {
                      try {
                        return (
                          maybeElement instanceof window.HTMLElement ||
                          maybeElement instanceof window.parent.HTMLElement
                        )
                      } catch {
                        return maybeElement instanceof window.HTMLElement
                      }
                    })(heading)
                  )
                    return heading
                  if (
                    options2.ignoreHiddenElements &&
                    (!heading.offsetHeight || !heading.offsetParent)
                  )
                    return null
                  let headingLabel =
                    heading.getAttribute('data-heading-label') ||
                    (options2.headingLabelCallback
                      ? String(options2.headingLabelCallback(heading.innerText))
                      : (heading.innerText || heading.textContent).trim())
                  var obj = {
                    id: heading.id,
                    children: [],
                    nodeName: heading.nodeName,
                    headingLevel: getHeadingLevel(heading),
                    textContent: headingLabel,
                  }
                  return (
                    options2.includeHtml &&
                      (obj.childNodes = heading.childNodes),
                    options2.headingObjectCallback
                      ? options2.headingObjectCallback(obj, heading)
                      : obj
                  )
                }
                return {
                  nestHeadingsArray: function nestHeadingsArray(headingsArray) {
                    return reduce.call(
                      headingsArray,
                      function (prev, curr) {
                        var currentHeading = getHeadingObject(curr)
                        return (
                          currentHeading &&
                            (function addNode(node, nest) {
                              for (
                                var obj = getHeadingObject(node),
                                  level = obj.headingLevel,
                                  array2 = nest,
                                  lastItem = getLastItem(array2),
                                  counter =
                                    level -
                                    (lastItem ? lastItem.headingLevel : 0);
                                counter > 0 &&
                                (!(lastItem = getLastItem(array2)) ||
                                  level !== lastItem.headingLevel);

                              )
                                (lastItem &&
                                  void 0 !== lastItem.children &&
                                  (array2 = lastItem.children),
                                  counter--)
                              return (
                                level >= options2.collapseDepth &&
                                  (obj.isCollapsed = !0),
                                array2.push(obj),
                                array2
                              )
                            })(currentHeading, prev.nest),
                          prev
                        )
                      },
                      { nest: [] }
                    )
                  },
                  selectHeadings: function selectHeadings(
                    contentElement,
                    headingSelector
                  ) {
                    var selectors = headingSelector
                    options2.ignoreSelector &&
                      (selectors = headingSelector
                        .split(',')
                        .map(function (selector) {
                          return (
                            selector.trim() +
                            ':not(' +
                            options2.ignoreSelector +
                            ')'
                          )
                        }))
                    try {
                      return contentElement.querySelectorAll(selectors)
                    } catch {
                      return (
                        console.warn(
                          'Headers not found with selector: ' + selectors
                        ),
                        null
                      )
                    }
                  },
                }
              }
            },
          }),
          require_update_toc_scroll = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/tocbot/src/js/update-toc-scroll.js'(
              exports,
              module
            ) {
              module.exports = function (options2) {
                var toc =
                  options2.tocElement ||
                  document.querySelector(options2.tocSelector)
                if (toc && toc.scrollHeight > toc.clientHeight) {
                  var activeItem = toc.querySelector(
                    '.' + options2.activeListItemClass
                  )
                  activeItem &&
                    (toc.scrollTop =
                      activeItem.offsetTop - options2.tocScrollOffset)
                }
              }
            },
          }),
          require_scroll_smooth = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)({
            '../../node_modules/tocbot/src/js/scroll-smooth/index.js'(exports) {
              exports.initSmoothScrolling = function initSmoothScrolling(
                options2
              ) {
                var duration = options2.duration,
                  offset = options2.offset,
                  pageUrl = location.hash
                    ? stripHash(location.href)
                    : location.href
                function stripHash(url) {
                  return url.slice(0, url.lastIndexOf('#'))
                }
                !(function delegatedLinkHijacking() {
                  document.body.addEventListener(
                    'click',
                    function onClick(e2) {
                      !(function isInPageLink(n2) {
                        return (
                          'a' === n2.tagName.toLowerCase() &&
                          (n2.hash.length > 0 ||
                            '#' === n2.href.charAt(n2.href.length - 1)) &&
                          (stripHash(n2.href) === pageUrl ||
                            stripHash(n2.href) + '#' === pageUrl)
                        )
                      })(e2.target) ||
                        e2.target.className.indexOf('no-smooth-scroll') > -1 ||
                        ('#' ===
                          e2.target.href.charAt(e2.target.href.length - 2) &&
                          '!' ===
                            e2.target.href.charAt(e2.target.href.length - 1)) ||
                        -1 ===
                          e2.target.className.indexOf(options2.linkClass) ||
                        (function jump(target, options2) {
                          var timeStart,
                            timeElapsed,
                            start = window.pageYOffset,
                            opt = {
                              duration: options2.duration,
                              offset: options2.offset || 0,
                              callback: options2.callback,
                              easing: options2.easing || easeInOutQuad,
                            },
                            tgt =
                              document.querySelector(
                                '[id="' +
                                  decodeURI(target).split('#').join('') +
                                  '"]'
                              ) ||
                              document.querySelector(
                                '[id="' + target.split('#').join('') + '"]'
                              ),
                            distance =
                              'string' == typeof target
                                ? opt.offset +
                                  (target
                                    ? (tgt &&
                                        tgt.getBoundingClientRect().top) ||
                                      0
                                    : -(
                                        document.documentElement.scrollTop ||
                                        document.body.scrollTop
                                      ))
                                : target,
                            duration =
                              'function' == typeof opt.duration
                                ? opt.duration(distance)
                                : opt.duration
                          function loop(time) {
                            ;((timeElapsed = time - timeStart),
                              window.scrollTo(
                                0,
                                opt.easing(
                                  timeElapsed,
                                  start,
                                  distance,
                                  duration
                                )
                              ),
                              timeElapsed < duration
                                ? requestAnimationFrame(loop)
                                : end())
                          }
                          function end() {
                            ;(window.scrollTo(0, start + distance),
                              'function' == typeof opt.callback &&
                                opt.callback())
                          }
                          function easeInOutQuad(t2, b2, c2, d2) {
                            return (t2 /= d2 / 2) < 1
                              ? (c2 / 2) * t2 * t2 + b2
                              : (-c2 / 2) * (--t2 * (t2 - 2) - 1) + b2
                          }
                          requestAnimationFrame(function (time) {
                            ;((timeStart = time), loop(time))
                          })
                        })(e2.target.hash, {
                          duration,
                          offset,
                          callback: function () {
                            !(function setFocus(hash) {
                              var element = document.getElementById(
                                hash.substring(1)
                              )
                              element &&
                                (/^(?:a|select|input|button|textarea)$/i.test(
                                  element.tagName
                                ) || (element.tabIndex = -1),
                                element.focus())
                            })(e2.target.hash)
                          },
                        })
                    },
                    !1
                  )
                })()
              }
            },
          }),
          require_js = (0, _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.P$)(
            {
              '../../node_modules/tocbot/src/js/index.js'(exports, module) {
                var root3, factory
                ;((root3 =
                  typeof __webpack_require__.g < 'u'
                    ? __webpack_require__.g
                    : window || __webpack_require__.g),
                  (factory = function (root3) {
                    var buildHtml,
                      parseContent,
                      defaultOptions2 = require_default_options(),
                      options2 = {},
                      tocbot2 = {},
                      BuildHtml = require_build_html(),
                      ParseContent = require_parse_content(),
                      updateTocScroll = require_update_toc_scroll(),
                      supports = !!(
                        root3 &&
                        root3.document &&
                        root3.document.querySelector &&
                        root3.addEventListener
                      )
                    if (!(typeof window > 'u') || supports) {
                      var headingsArray,
                        hasOwnProperty5 = Object.prototype.hasOwnProperty
                      return (
                        (tocbot2.destroy = function () {
                          var tocElement = getTocElement(options2)
                          null !== tocElement &&
                            (options2.skipRendering ||
                              (tocElement && (tocElement.innerHTML = '')),
                            options2.scrollContainer &&
                            document.querySelector(options2.scrollContainer)
                              ? (document
                                  .querySelector(options2.scrollContainer)
                                  .removeEventListener(
                                    'scroll',
                                    this._scrollListener,
                                    !1
                                  ),
                                document
                                  .querySelector(options2.scrollContainer)
                                  .removeEventListener(
                                    'resize',
                                    this._scrollListener,
                                    !1
                                  ),
                                buildHtml &&
                                  document
                                    .querySelector(options2.scrollContainer)
                                    .removeEventListener(
                                      'click',
                                      this._clickListener,
                                      !1
                                    ))
                              : (document.removeEventListener(
                                  'scroll',
                                  this._scrollListener,
                                  !1
                                ),
                                document.removeEventListener(
                                  'resize',
                                  this._scrollListener,
                                  !1
                                ),
                                buildHtml &&
                                  document.removeEventListener(
                                    'click',
                                    this._clickListener,
                                    !1
                                  )))
                        }),
                        (tocbot2.init = function (customOptions) {
                          if (supports) {
                            ;((options2 = (function extend() {
                              for (
                                var target = {}, i2 = 0;
                                i2 < arguments.length;
                                i2++
                              ) {
                                var source2 = arguments[i2]
                                for (var key2 in source2)
                                  hasOwnProperty5.call(source2, key2) &&
                                    (target[key2] = source2[key2])
                              }
                              return target
                            })(defaultOptions2, customOptions || {})),
                              (this.options = options2),
                              (this.state = {}),
                              options2.scrollSmooth &&
                                ((options2.duration =
                                  options2.scrollSmoothDuration),
                                (options2.offset = options2.scrollSmoothOffset),
                                (tocbot2.scrollSmooth =
                                  require_scroll_smooth().initSmoothScrolling(
                                    options2
                                  ))),
                              (buildHtml = BuildHtml(options2)),
                              (parseContent = ParseContent(options2)),
                              (this._buildHtml = buildHtml),
                              (this._parseContent = parseContent),
                              (this._headingsArray = headingsArray),
                              tocbot2.destroy())
                            var contentElement = (function getContentElement(
                              options3
                            ) {
                              try {
                                return (
                                  options3.contentElement ||
                                  document.querySelector(
                                    options3.contentSelector
                                  )
                                )
                              } catch {
                                return (
                                  console.warn(
                                    'Contents element not found: ' +
                                      options3.contentSelector
                                  ),
                                  null
                                )
                              }
                            })(options2)
                            if (null !== contentElement) {
                              var tocElement = getTocElement(options2)
                              if (
                                null !== tocElement &&
                                null !==
                                  (headingsArray = parseContent.selectHeadings(
                                    contentElement,
                                    options2.headingSelector
                                  ))
                              ) {
                                var nestedHeadings =
                                  parseContent.nestHeadingsArray(
                                    headingsArray
                                  ).nest
                                if (options2.skipRendering) return this
                                ;(buildHtml.render(tocElement, nestedHeadings),
                                  (this._scrollListener = throttle(function (
                                    e2
                                  ) {
                                    ;(buildHtml.updateToc(headingsArray),
                                      !options2.disableTocScrollSync &&
                                        updateTocScroll(options2))
                                    var isTop =
                                      e2 &&
                                      e2.target &&
                                      e2.target.scrollingElement &&
                                      0 === e2.target.scrollingElement.scrollTop
                                    ;((e2 &&
                                      (0 === e2.eventPhase ||
                                        null === e2.currentTarget)) ||
                                      isTop) &&
                                      (buildHtml.updateToc(headingsArray),
                                      options2.scrollEndCallback &&
                                        options2.scrollEndCallback(e2))
                                  }, options2.throttleTimeout)),
                                  this._scrollListener(),
                                  options2.scrollContainer &&
                                  document.querySelector(
                                    options2.scrollContainer
                                  )
                                    ? (document
                                        .querySelector(options2.scrollContainer)
                                        .addEventListener(
                                          'scroll',
                                          this._scrollListener,
                                          !1
                                        ),
                                      document
                                        .querySelector(options2.scrollContainer)
                                        .addEventListener(
                                          'resize',
                                          this._scrollListener,
                                          !1
                                        ))
                                    : (document.addEventListener(
                                        'scroll',
                                        this._scrollListener,
                                        !1
                                      ),
                                      document.addEventListener(
                                        'resize',
                                        this._scrollListener,
                                        !1
                                      )))
                                var timeout = null
                                return (
                                  (this._clickListener = throttle(function (
                                    event
                                  ) {
                                    ;(options2.scrollSmooth &&
                                      buildHtml.disableTocAnimation(event),
                                      buildHtml.updateToc(headingsArray),
                                      timeout && clearTimeout(timeout),
                                      (timeout = setTimeout(function () {
                                        buildHtml.enableTocAnimation()
                                      }, options2.scrollSmoothDuration)))
                                  }, options2.throttleTimeout)),
                                  options2.scrollContainer &&
                                  document.querySelector(
                                    options2.scrollContainer
                                  )
                                    ? document
                                        .querySelector(options2.scrollContainer)
                                        .addEventListener(
                                          'click',
                                          this._clickListener,
                                          !1
                                        )
                                    : document.addEventListener(
                                        'click',
                                        this._clickListener,
                                        !1
                                      ),
                                  this
                                )
                              }
                            }
                          }
                        }),
                        (tocbot2.refresh = function (customOptions) {
                          ;(tocbot2.destroy(),
                            tocbot2.init(customOptions || this.options))
                        }),
                        (root3.tocbot = tocbot2),
                        tocbot2
                      )
                    }
                    function throttle(fn, threshold, scope) {
                      var last, deferTimer
                      return (
                        threshold || (threshold = 250),
                        function () {
                          var context = scope || this,
                            now = +new Date(),
                            args2 = arguments
                          last && now < last + threshold
                            ? (clearTimeout(deferTimer),
                              (deferTimer = setTimeout(function () {
                                ;((last = now), fn.apply(context, args2))
                              }, threshold)))
                            : ((last = now), fn.apply(context, args2))
                        }
                      )
                    }
                    function getTocElement(options3) {
                      try {
                        return (
                          options3.tocElement ||
                          document.querySelector(options3.tocSelector)
                        )
                      } catch {
                        return (
                          console.warn(
                            'TOC element not found: ' + options3.tocSelector
                          ),
                          null
                        )
                      }
                    }
                  }),
                  'function' == typeof define && __webpack_require__.amdO
                    ? define([], factory(root3))
                    : 'object' == typeof exports
                      ? (module.exports = factory(root3))
                      : (root3.tocbot = factory(root3)))
              },
            }
          )
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (n2) {
                  for (var e2 = 1; e2 < arguments.length; e2++) {
                    var t2 = arguments[e2]
                    for (var r2 in t2)
                      ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2])
                  }
                  return n2
                }),
            _extends.apply(null, arguments)
          )
        }
        function _setPrototypeOf(t2, e2) {
          return (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t3, e3) {
                return ((t3.__proto__ = e3), t3)
              })(t2, e2)
        }
        function _getPrototypeOf(t2) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t3) {
                return t3.__proto__ || Object.getPrototypeOf(t3)
              })(t2)
        }
        function _isNativeReflectConstruct() {
          try {
            var t2 = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            )
          } catch {}
          return (_isNativeReflectConstruct = function () {
            return !!t2
          })()
        }
        function _wrapNativeSuper(t2) {
          var r2 = 'function' == typeof Map ? new Map() : void 0
          return (
            (_wrapNativeSuper = function (t3) {
              if (
                null === t3 ||
                !(function _isNativeFunction(t2) {
                  try {
                    return (
                      -1 !== Function.toString.call(t2).indexOf('[native code]')
                    )
                  } catch {
                    return 'function' == typeof t2
                  }
                })(t3)
              )
                return t3
              if ('function' != typeof t3)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              if (void 0 !== r2) {
                if (r2.has(t3)) return r2.get(t3)
                r2.set(t3, Wrapper12)
              }
              function Wrapper12() {
                return (function _construct(t2, e2, r2) {
                  if (_isNativeReflectConstruct())
                    return Reflect.construct.apply(null, arguments)
                  var o2 = [null]
                  o2.push.apply(o2, e2)
                  var p2 = new (t2.bind.apply(t2, o2))()
                  return (r2 && _setPrototypeOf(p2, r2.prototype), p2)
                })(t3, arguments, _getPrototypeOf(this).constructor)
              }
              return (
                (Wrapper12.prototype = Object.create(t3.prototype, {
                  constructor: {
                    value: Wrapper12,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                _setPrototypeOf(Wrapper12, t3)
              )
            }),
            _wrapNativeSuper(t2)
          )
        }
        var PolishedError = (function (_Error) {
          function PolishedError2(code) {
            return (function _assertThisInitialized(e2) {
              if (void 0 === e2)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e2
            })(
              _Error.call(
                this,
                'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                  code +
                  ' for more information.'
              ) || this
            )
          }
          return (
            (function _inheritsLoose(t2, o2) {
              ;((t2.prototype = Object.create(o2.prototype)),
                (t2.prototype.constructor = t2),
                _setPrototypeOf(t2, o2))
            })(PolishedError2, _Error),
            PolishedError2
          )
        })(_wrapNativeSuper(Error))
        function colorToInt(color) {
          return Math.round(255 * color)
        }
        function convertToInt(red, green, blue) {
          return (
            colorToInt(red) + ',' + colorToInt(green) + ',' + colorToInt(blue)
          )
        }
        function hslToRgb(hue, saturation, lightness, convert2) {
          if (
            (void 0 === convert2 && (convert2 = convertToInt), 0 === saturation)
          )
            return convert2(lightness, lightness, lightness)
          var huePrime = (((hue % 360) + 360) % 360) / 60,
            chroma = (1 - Math.abs(2 * lightness - 1)) * saturation,
            secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1)),
            red = 0,
            green = 0,
            blue = 0
          huePrime >= 0 && huePrime < 1
            ? ((red = chroma), (green = secondComponent))
            : huePrime >= 1 && huePrime < 2
              ? ((red = secondComponent), (green = chroma))
              : huePrime >= 2 && huePrime < 3
                ? ((green = chroma), (blue = secondComponent))
                : huePrime >= 3 && huePrime < 4
                  ? ((green = secondComponent), (blue = chroma))
                  : huePrime >= 4 && huePrime < 5
                    ? ((red = secondComponent), (blue = chroma))
                    : huePrime >= 5 &&
                      huePrime < 6 &&
                      ((red = chroma), (blue = secondComponent))
          var lightnessModification = lightness - chroma / 2
          return convert2(
            red + lightnessModification,
            green + lightnessModification,
            blue + lightnessModification
          )
        }
        var namedColorMap = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '00ffff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000',
          blanchedalmond: 'ffebcd',
          blue: '0000ff',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '00ffff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkgrey: 'a9a9a9',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkslategrey: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dimgrey: '696969',
          dodgerblue: '1e90ff',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'ff00ff',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          grey: '808080',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgray: 'd3d3d3',
          lightgreen: '90ee90',
          lightgrey: 'd3d3d3',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslategray: '789',
          lightslategrey: '789',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '0f0',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'f0f',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370db',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'db7093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '639',
          red: 'f00',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          slategrey: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          wheat: 'f5deb3',
          white: 'fff',
          whitesmoke: 'f5f5f5',
          yellow: 'ff0',
          yellowgreen: '9acd32',
        }
        var hexRegex = /^#[a-fA-F0-9]{6}$/,
          hexRgbaRegex = /^#[a-fA-F0-9]{8}$/,
          reducedHexRegex = /^#[a-fA-F0-9]{3}$/,
          reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/,
          rgbRegex =
            /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
          rgbaRegex =
            /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
          hslRegex =
            /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
          hslaRegex =
            /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
        function parseToRgb(color) {
          if ('string' != typeof color) throw new PolishedError(3)
          var normalizedColor = (function nameToHex(color) {
            if ('string' != typeof color) return color
            var normalizedColorName = color.toLowerCase()
            return namedColorMap[normalizedColorName]
              ? '#' + namedColorMap[normalizedColorName]
              : color
          })(color)
          if (normalizedColor.match(hexRegex))
            return {
              red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
              green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
              blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
            }
          if (normalizedColor.match(hexRgbaRegex)) {
            var alpha = parseFloat(
              (
                parseInt('' + normalizedColor[7] + normalizedColor[8], 16) / 255
              ).toFixed(2)
            )
            return {
              red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
              green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
              blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
              alpha,
            }
          }
          if (normalizedColor.match(reducedHexRegex))
            return {
              red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
              green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
              blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
            }
          if (normalizedColor.match(reducedRgbaHexRegex)) {
            var _alpha = parseFloat(
              (
                parseInt('' + normalizedColor[4] + normalizedColor[4], 16) / 255
              ).toFixed(2)
            )
            return {
              red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
              green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
              blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
              alpha: _alpha,
            }
          }
          var rgbMatched = rgbRegex.exec(normalizedColor)
          if (rgbMatched)
            return {
              red: parseInt('' + rgbMatched[1], 10),
              green: parseInt('' + rgbMatched[2], 10),
              blue: parseInt('' + rgbMatched[3], 10),
            }
          var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50))
          if (rgbaMatched)
            return {
              red: parseInt('' + rgbaMatched[1], 10),
              green: parseInt('' + rgbaMatched[2], 10),
              blue: parseInt('' + rgbaMatched[3], 10),
              alpha:
                parseFloat('' + rgbaMatched[4]) > 1
                  ? parseFloat('' + rgbaMatched[4]) / 100
                  : parseFloat('' + rgbaMatched[4]),
            }
          var hslMatched = hslRegex.exec(normalizedColor)
          if (hslMatched) {
            var rgbColorString =
                'rgb(' +
                hslToRgb(
                  parseInt('' + hslMatched[1], 10),
                  parseInt('' + hslMatched[2], 10) / 100,
                  parseInt('' + hslMatched[3], 10) / 100
                ) +
                ')',
              hslRgbMatched = rgbRegex.exec(rgbColorString)
            if (!hslRgbMatched)
              throw new PolishedError(4, normalizedColor, rgbColorString)
            return {
              red: parseInt('' + hslRgbMatched[1], 10),
              green: parseInt('' + hslRgbMatched[2], 10),
              blue: parseInt('' + hslRgbMatched[3], 10),
            }
          }
          var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50))
          if (hslaMatched) {
            var _rgbColorString =
                'rgb(' +
                hslToRgb(
                  parseInt('' + hslaMatched[1], 10),
                  parseInt('' + hslaMatched[2], 10) / 100,
                  parseInt('' + hslaMatched[3], 10) / 100
                ) +
                ')',
              _hslRgbMatched = rgbRegex.exec(_rgbColorString)
            if (!_hslRgbMatched)
              throw new PolishedError(4, normalizedColor, _rgbColorString)
            return {
              red: parseInt('' + _hslRgbMatched[1], 10),
              green: parseInt('' + _hslRgbMatched[2], 10),
              blue: parseInt('' + _hslRgbMatched[3], 10),
              alpha:
                parseFloat('' + hslaMatched[4]) > 1
                  ? parseFloat('' + hslaMatched[4]) / 100
                  : parseFloat('' + hslaMatched[4]),
            }
          }
          throw new PolishedError(5)
        }
        function parseToHsl(color) {
          return (function rgbToHsl(color) {
            var red = color.red / 255,
              green = color.green / 255,
              blue = color.blue / 255,
              max = Math.max(red, green, blue),
              min = Math.min(red, green, blue),
              lightness = (max + min) / 2
            if (max === min)
              return void 0 !== color.alpha
                ? { hue: 0, saturation: 0, lightness, alpha: color.alpha }
                : { hue: 0, saturation: 0, lightness }
            var hue,
              delta = max - min,
              saturation =
                lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
            switch (max) {
              case red:
                hue = (green - blue) / delta + (green < blue ? 6 : 0)
                break
              case green:
                hue = (blue - red) / delta + 2
                break
              default:
                hue = (red - green) / delta + 4
            }
            return (
              (hue *= 60),
              void 0 !== color.alpha
                ? { hue, saturation, lightness, alpha: color.alpha }
                : { hue, saturation, lightness }
            )
          })(parseToRgb(color))
        }
        var reduceHexValue$1 = function (value3) {
          return 7 === value3.length &&
            value3[1] === value3[2] &&
            value3[3] === value3[4] &&
            value3[5] === value3[6]
            ? '#' + value3[1] + value3[3] + value3[5]
            : value3
        }
        function numberToHex(value3) {
          var hex = value3.toString(16)
          return 1 === hex.length ? '0' + hex : hex
        }
        function colorToHex(color) {
          return numberToHex(Math.round(255 * color))
        }
        function convertToHex(red, green, blue) {
          return reduceHexValue$1(
            '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue)
          )
        }
        function hslToHex(hue, saturation, lightness) {
          return hslToRgb(hue, saturation, lightness, convertToHex)
        }
        function rgb(value3, green, blue) {
          if (
            'number' == typeof value3 &&
            'number' == typeof green &&
            'number' == typeof blue
          )
            return reduceHexValue$1(
              '#' + numberToHex(value3) + numberToHex(green) + numberToHex(blue)
            )
          if ('object' == typeof value3 && void 0 === green && void 0 === blue)
            return reduceHexValue$1(
              '#' +
                numberToHex(value3.red) +
                numberToHex(value3.green) +
                numberToHex(value3.blue)
            )
          throw new PolishedError(6)
        }
        function rgba(firstValue, secondValue, thirdValue, fourthValue) {
          if ('string' == typeof firstValue && 'number' == typeof secondValue) {
            var rgbValue = parseToRgb(firstValue)
            return (
              'rgba(' +
              rgbValue.red +
              ',' +
              rgbValue.green +
              ',' +
              rgbValue.blue +
              ',' +
              secondValue +
              ')'
            )
          }
          if (
            'number' == typeof firstValue &&
            'number' == typeof secondValue &&
            'number' == typeof thirdValue &&
            'number' == typeof fourthValue
          )
            return fourthValue >= 1
              ? rgb(firstValue, secondValue, thirdValue)
              : 'rgba(' +
                  firstValue +
                  ',' +
                  secondValue +
                  ',' +
                  thirdValue +
                  ',' +
                  fourthValue +
                  ')'
          if (
            'object' == typeof firstValue &&
            void 0 === secondValue &&
            void 0 === thirdValue &&
            void 0 === fourthValue
          )
            return firstValue.alpha >= 1
              ? rgb(firstValue.red, firstValue.green, firstValue.blue)
              : 'rgba(' +
                  firstValue.red +
                  ',' +
                  firstValue.green +
                  ',' +
                  firstValue.blue +
                  ',' +
                  firstValue.alpha +
                  ')'
          throw new PolishedError(7)
        }
        function toColorString(color) {
          if ('object' != typeof color) throw new PolishedError(8)
          if (
            (function (color) {
              return (
                'number' == typeof color.red &&
                'number' == typeof color.green &&
                'number' == typeof color.blue &&
                'number' == typeof color.alpha
              )
            })(color)
          )
            return rgba(color)
          if (
            (function (color) {
              return (
                'number' == typeof color.red &&
                'number' == typeof color.green &&
                'number' == typeof color.blue &&
                ('number' != typeof color.alpha || typeof color.alpha > 'u')
              )
            })(color)
          )
            return rgb(color)
          if (
            (function (color) {
              return (
                'number' == typeof color.hue &&
                'number' == typeof color.saturation &&
                'number' == typeof color.lightness &&
                'number' == typeof color.alpha
              )
            })(color)
          )
            return (function hsla(value3, saturation, lightness, alpha) {
              if (
                'number' == typeof value3 &&
                'number' == typeof saturation &&
                'number' == typeof lightness &&
                'number' == typeof alpha
              )
                return alpha >= 1
                  ? hslToHex(value3, saturation, lightness)
                  : 'rgba(' +
                      hslToRgb(value3, saturation, lightness) +
                      ',' +
                      alpha +
                      ')'
              if (
                'object' == typeof value3 &&
                void 0 === saturation &&
                void 0 === lightness &&
                void 0 === alpha
              )
                return value3.alpha >= 1
                  ? hslToHex(value3.hue, value3.saturation, value3.lightness)
                  : 'rgba(' +
                      hslToRgb(
                        value3.hue,
                        value3.saturation,
                        value3.lightness
                      ) +
                      ',' +
                      value3.alpha +
                      ')'
              throw new PolishedError(2)
            })(color)
          if (
            (function (color) {
              return (
                'number' == typeof color.hue &&
                'number' == typeof color.saturation &&
                'number' == typeof color.lightness &&
                ('number' != typeof color.alpha || typeof color.alpha > 'u')
              )
            })(color)
          )
            return (function hsl(value3, saturation, lightness) {
              if (
                'number' == typeof value3 &&
                'number' == typeof saturation &&
                'number' == typeof lightness
              )
                return hslToHex(value3, saturation, lightness)
              if (
                'object' == typeof value3 &&
                void 0 === saturation &&
                void 0 === lightness
              )
                return hslToHex(value3.hue, value3.saturation, value3.lightness)
              throw new PolishedError(1)
            })(color)
          throw new PolishedError(8)
        }
        function curried(f3, length, acc) {
          return function () {
            var combined = acc.concat(Array.prototype.slice.call(arguments))
            return combined.length >= length
              ? f3.apply(this, combined)
              : curried(f3, length, combined)
          }
        }
        function curry(f3) {
          return curried(f3, f3.length, [])
        }
        function guard(lowerBoundary, upperBoundary, value3) {
          return Math.max(lowerBoundary, Math.min(upperBoundary, value3))
        }
        var curriedDarken$1 = curry(function darken(amount, color) {
          if ('transparent' === color) return color
          var hslColor = parseToHsl(color)
          return toColorString(
            _extends({}, hslColor, {
              lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)),
            })
          )
        })
        var curriedLighten$1 = curry(function lighten(amount, color) {
          if ('transparent' === color) return color
          var hslColor = parseToHsl(color)
          return toColorString(
            _extends({}, hslColor, {
              lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)),
            })
          )
        })
        var curriedOpacify$1 = curry(function opacify(amount, color) {
          if ('transparent' === color) return color
          var parsedColor = parseToRgb(color)
          return rgba(
            _extends({}, parsedColor, {
              alpha: guard(
                0,
                1,
                (100 *
                  ('number' == typeof parsedColor.alpha
                    ? parsedColor.alpha
                    : 1) +
                  100 * parseFloat(amount)) /
                  100
              ),
            })
          )
        })
        var curriedTransparentize$1 = curry(
            function transparentize(amount, color) {
              if ('transparent' === color) return color
              var parsedColor = parseToRgb(color)
              return rgba(
                _extends({}, parsedColor, {
                  alpha: guard(
                    0,
                    1,
                    +(
                      100 *
                        ('number' == typeof parsedColor.alpha
                          ? parsedColor.alpha
                          : 1) -
                      100 * parseFloat(amount)
                    ).toFixed(2) / 100
                  ),
                })
              )
            }
          ),
          Wrapper =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.YV,
              ({ theme }) => ({
                backgroundColor:
                  'light' === theme.base
                    ? 'rgba(0,0,0,.01)'
                    : 'rgba(255,255,255,.01)',
                borderRadius: theme.appBorderRadius,
                border: `1px dashed ${theme.appBorderColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                margin: '25px 0 40px',
                color: curriedTransparentize$1(0.3, theme.color.defaultText),
                fontSize: theme.typography.size.s2,
              })
            ),
          EmptyBlock = (props) =>
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, {
              ...props,
              className: 'docblock-emptyblock sb-unstyled',
            }),
          StyledSyntaxHighlighter = (0,
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.bF
          )(({ theme }) => ({
            fontSize: theme.typography.size.s2 - 1 + 'px',
            lineHeight: '19px',
            margin: '25px 0 40px',
            borderRadius: theme.appBorderRadius,
            boxShadow:
              'light' === theme.base
                ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
                : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
            'pre.prismjs': { padding: 20, background: 'inherit' },
          })),
          SourceSkeletonWrapper =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                background: theme.background.content,
                borderRadius: theme.appBorderRadius,
                border: `1px solid ${theme.appBorderColor}`,
                boxShadow:
                  'light' === theme.base
                    ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
                    : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
                margin: '25px 0 40px',
                padding: '20px 20px 20px 22px',
              })
            ),
          SourceSkeletonPlaceholder =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
                background: theme.appBorderColor,
                height: 17,
                marginTop: 1,
                width: '60%',
                [`&:first-child${storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.v_}`]:
                  { margin: 0 },
              })
            ),
          SourceSkeleton = () =>
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              SourceSkeletonWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                SourceSkeletonPlaceholder,
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                SourceSkeletonPlaceholder,
                { style: { width: '80%' } }
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                SourceSkeletonPlaceholder,
                { style: { width: '30%' } }
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                SourceSkeletonPlaceholder,
                { style: { width: '80%' } }
              )
            ),
          Source = ({
            isLoading,
            error,
            language,
            code,
            dark,
            format: format3 = !1,
            ...rest
          }) => {
            let { typography } = (0,
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.DP)()
            if (isLoading)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                SourceSkeleton,
                null
              )
            if (error)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                EmptyBlock,
                null,
                error
              )
            let syntaxHighlighter =
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                StyledSyntaxHighlighter,
                {
                  bordered: !0,
                  copyable: !0,
                  format: format3,
                  language,
                  className: 'docblock-source sb-unstyled',
                  ...rest,
                },
                code
              )
            if (typeof dark > 'u') return syntaxHighlighter
            let overrideTheme = dark
              ? storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.Zj.dark
              : storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.Zj.light
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.NP,
              {
                theme: (0,
                storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.C6)({
                  ...overrideTheme,
                  fontCode: typography.fonts.mono,
                  fontBase: typography.fonts.base,
                }),
              },
              syntaxHighlighter
            )
          },
          toGlobalSelector = (element) =>
            `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`,
          getBlockBackgroundStyle =
            (storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.h1(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.YV,
              ({ theme }) => ({
                color: theme.color.defaultText,
                fontSize: theme.typography.size.m3,
                fontWeight: theme.typography.weight.bold,
                lineHeight: '32px',
                '@media (min-width: 600px)': {
                  fontSize: theme.typography.size.l1,
                  lineHeight: '36px',
                  marginBottom: '16px',
                },
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.h2(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.YV,
              ({ theme }) => ({
                fontWeight: theme.typography.weight.regular,
                fontSize: theme.typography.size.s3,
                lineHeight: '20px',
                borderBottom: 'none',
                marginBottom: 15,
                '@media (min-width: 600px)': {
                  fontSize: theme.typography.size.m1,
                  lineHeight: '28px',
                  marginBottom: 24,
                },
                color: curriedTransparentize$1(0.25, theme.color.defaultText),
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => {
                let reset = {
                    fontFamily: theme.typography.fonts.base,
                    fontSize: theme.typography.size.s3,
                    margin: 0,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                    WebkitOverflowScrolling: 'touch',
                  },
                  headers = {
                    margin: '20px 0 8px',
                    padding: 0,
                    cursor: 'text',
                    position: 'relative',
                    color: theme.color.defaultText,
                    '&:first-of-type': { marginTop: 0, paddingTop: 0 },
                    '&:hover a.anchor': { textDecoration: 'none' },
                    '& code': { fontSize: 'inherit' },
                  },
                  code = {
                    lineHeight: 1,
                    margin: '0 2px',
                    padding: '3px 5px',
                    whiteSpace: 'nowrap',
                    borderRadius: 3,
                    fontSize: theme.typography.size.s2 - 1,
                    border:
                      'light' === theme.base
                        ? `1px solid ${theme.color.mediumlight}`
                        : `1px solid ${theme.color.darker}`,
                    color:
                      'light' === theme.base
                        ? curriedTransparentize$1(0.1, theme.color.defaultText)
                        : curriedTransparentize$1(0.3, theme.color.defaultText),
                    backgroundColor:
                      'light' === theme.base
                        ? theme.color.lighter
                        : theme.color.border,
                  }
                return {
                  maxWidth: 1e3,
                  width: '100%',
                  [toGlobalSelector('a')]: {
                    ...reset,
                    fontSize: 'inherit',
                    lineHeight: '24px',
                    color: theme.color.secondary,
                    textDecoration: 'none',
                    '&.absent': { color: '#cc0000' },
                    '&.anchor': {
                      display: 'block',
                      paddingLeft: 30,
                      marginLeft: -30,
                      cursor: 'pointer',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                    },
                  },
                  [toGlobalSelector('blockquote')]: {
                    ...reset,
                    margin: '16px 0',
                    borderLeft: `4px solid ${theme.color.medium}`,
                    padding: '0 15px',
                    color: theme.color.dark,
                    '& > :first-of-type': { marginTop: 0 },
                    '& > :last-child': { marginBottom: 0 },
                  },
                  [toGlobalSelector('div')]: reset,
                  [toGlobalSelector('dl')]: {
                    ...reset,
                    margin: '16px 0',
                    padding: 0,
                    '& dt': {
                      fontSize: '14px',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      padding: 0,
                      margin: '16px 0 4px',
                    },
                    '& dt:first-of-type': { padding: 0 },
                    '& dt > :first-of-type': { marginTop: 0 },
                    '& dt > :last-child': { marginBottom: 0 },
                    '& dd': { margin: '0 0 16px', padding: '0 15px' },
                    '& dd > :first-of-type': { marginTop: 0 },
                    '& dd > :last-child': { marginBottom: 0 },
                  },
                  [toGlobalSelector('h1')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.l1}px`,
                    fontWeight: theme.typography.weight.bold,
                  },
                  [toGlobalSelector('h2')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.m2}px`,
                    paddingBottom: 4,
                    borderBottom: `1px solid ${theme.appBorderColor}`,
                  },
                  [toGlobalSelector('h3')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.m1}px`,
                    fontWeight: theme.typography.weight.bold,
                  },
                  [toGlobalSelector('h4')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.s3}px`,
                  },
                  [toGlobalSelector('h5')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.s2}px`,
                  },
                  [toGlobalSelector('h6')]: {
                    ...reset,
                    ...headers,
                    fontSize: `${theme.typography.size.s2}px`,
                    color: theme.color.dark,
                  },
                  [toGlobalSelector('hr')]: {
                    border: '0 none',
                    borderTop: `1px solid ${theme.appBorderColor}`,
                    height: 4,
                    padding: 0,
                  },
                  [toGlobalSelector('img')]: { maxWidth: '100%' },
                  [toGlobalSelector('li')]: {
                    ...reset,
                    fontSize: theme.typography.size.s2,
                    color: theme.color.defaultText,
                    lineHeight: '24px',
                    '& + li': { marginTop: '.25em' },
                    '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
                    '& code': code,
                  },
                  [toGlobalSelector('ol')]: {
                    ...reset,
                    margin: '16px 0',
                    paddingLeft: 30,
                    '& :first-of-type': { marginTop: 0 },
                    '& :last-child': { marginBottom: 0 },
                  },
                  [toGlobalSelector('p')]: {
                    ...reset,
                    margin: '16px 0',
                    fontSize: theme.typography.size.s2,
                    lineHeight: '24px',
                    color: theme.color.defaultText,
                    '& code': code,
                  },
                  [toGlobalSelector('pre')]: {
                    ...reset,
                    fontFamily: theme.typography.fonts.mono,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    lineHeight: '18px',
                    padding: '11px 1rem',
                    whiteSpace: 'pre-wrap',
                    color: 'inherit',
                    borderRadius: 3,
                    margin: '1rem 0',
                    '&:not(.prismjs)': {
                      background: 'transparent',
                      border: 'none',
                      borderRadius: 0,
                      padding: 0,
                      margin: 0,
                    },
                    '& pre, &.prismjs': {
                      padding: 15,
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      color: 'inherit',
                      fontSize: '13px',
                      lineHeight: '19px',
                      code: { color: 'inherit', fontSize: 'inherit' },
                    },
                    '& code': { whiteSpace: 'pre' },
                    '& code, & tt': { border: 'none' },
                  },
                  [toGlobalSelector('span')]: {
                    ...reset,
                    '&.frame': {
                      display: 'block',
                      overflow: 'hidden',
                      '& > span': {
                        border: `1px solid ${theme.color.medium}`,
                        display: 'block',
                        float: 'left',
                        overflow: 'hidden',
                        margin: '13px 0 0',
                        padding: 7,
                        width: 'auto',
                      },
                      '& span img': { display: 'block', float: 'left' },
                      '& span span': {
                        clear: 'both',
                        color: theme.color.darkest,
                        display: 'block',
                        padding: '5px 0 0',
                      },
                    },
                    '&.align-center': {
                      display: 'block',
                      overflow: 'hidden',
                      clear: 'both',
                      '& > span': {
                        display: 'block',
                        overflow: 'hidden',
                        margin: '13px auto 0',
                        textAlign: 'center',
                      },
                      '& span img': { margin: '0 auto', textAlign: 'center' },
                    },
                    '&.align-right': {
                      display: 'block',
                      overflow: 'hidden',
                      clear: 'both',
                      '& > span': {
                        display: 'block',
                        overflow: 'hidden',
                        margin: '13px 0 0',
                        textAlign: 'right',
                      },
                      '& span img': { margin: 0, textAlign: 'right' },
                    },
                    '&.float-left': {
                      display: 'block',
                      marginRight: 13,
                      overflow: 'hidden',
                      float: 'left',
                      '& span': { margin: '13px 0 0' },
                    },
                    '&.float-right': {
                      display: 'block',
                      marginLeft: 13,
                      overflow: 'hidden',
                      float: 'right',
                      '& > span': {
                        display: 'block',
                        overflow: 'hidden',
                        margin: '13px auto 0',
                        textAlign: 'right',
                      },
                    },
                  },
                  [toGlobalSelector('table')]: {
                    ...reset,
                    margin: '16px 0',
                    fontSize: theme.typography.size.s2,
                    lineHeight: '24px',
                    padding: 0,
                    borderCollapse: 'collapse',
                    '& tr': {
                      borderTop: `1px solid ${theme.appBorderColor}`,
                      backgroundColor: theme.appContentBg,
                      margin: 0,
                      padding: 0,
                    },
                    '& tr:nth-of-type(2n)': {
                      backgroundColor:
                        'dark' === theme.base
                          ? theme.color.darker
                          : theme.color.lighter,
                    },
                    '& tr th': {
                      fontWeight: 'bold',
                      color: theme.color.defaultText,
                      border: `1px solid ${theme.appBorderColor}`,
                      margin: 0,
                      padding: '6px 13px',
                    },
                    '& tr td': {
                      border: `1px solid ${theme.appBorderColor}`,
                      color: theme.color.defaultText,
                      margin: 0,
                      padding: '6px 13px',
                    },
                    '& tr th :first-of-type, & tr td :first-of-type': {
                      marginTop: 0,
                    },
                    '& tr th :last-child, & tr td :last-child': {
                      marginBottom: 0,
                    },
                  },
                  [toGlobalSelector('ul')]: {
                    ...reset,
                    margin: '16px 0',
                    paddingLeft: 30,
                    '& :first-of-type': { marginTop: 0 },
                    '& :last-child': { marginBottom: 0 },
                    listStyle: 'disc',
                  },
                }
              }
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                background: theme.background.content,
                display: 'flex',
                justifyContent: 'center',
                padding: '4rem 20px',
                minHeight: '100vh',
                boxSizing: 'border-box',
                gap: '3rem',
                '@media (min-width: 600px)': {},
              })
            ),
            (theme) => ({
              borderRadius: theme.appBorderRadius,
              background: theme.background.content,
              boxShadow:
                'light' === theme.base
                  ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
                  : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
              border: `1px solid ${theme.appBorderColor}`,
            })),
          { window: globalWindow } = globalThis,
          ZoomContext =
            (react__WEBPACK_IMPORTED_MODULE_0__.Component,
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
              scale: 1,
            })),
          { PREVIEW_URL } = globalThis,
          Bar =
            (storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.strong(
              ({ theme }) => ({ color: theme.color.orange })
            ),
            (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.px
            )({
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              transition: 'transform .2s linear',
            })),
          Wrapper2 =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }),
          IconPlaceholder =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                width: 14,
                height: 14,
                borderRadius: 2,
                margin: '0 7px',
                backgroundColor: theme.appBorderColor,
                animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
              })
            ),
          ChildrenContainer =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ isColumn, columns, layout }) => ({
                display: isColumn || !columns ? 'block' : 'flex',
                position: 'relative',
                flexWrap: 'wrap',
                overflow: 'auto',
                flexDirection: isColumn ? 'column' : 'row',
                '& .innerZoomElementWrapper > *': isColumn
                  ? {
                      width:
                        'fullscreen' !== layout ? 'calc(100% - 20px)' : '100%',
                      display: 'block',
                    }
                  : {
                      maxWidth:
                        'fullscreen' !== layout ? 'calc(100% - 20px)' : '100%',
                      display: 'inline-block',
                    },
              }),
              ({ layout = 'padded' }) =>
                'centered' === layout || 'padded' === layout
                  ? {
                      padding: '30px 20px',
                      '& .innerZoomElementWrapper > *': {
                        width: 'auto',
                        border: '10px solid transparent!important',
                      },
                    }
                  : {},
              ({ layout = 'padded' }) =>
                'centered' === layout
                  ? {
                      display: 'flex',
                      justifyContent: 'center',
                      justifyItems: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }
                  : {},
              ({ columns }) =>
                columns && columns > 1
                  ? {
                      '.innerZoomElementWrapper > *': {
                        minWidth: `calc(100% / ${columns} - 20px)`,
                      },
                    }
                  : {}
            ),
          StyledSource = (0,
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(Source)(
            ({ theme }) => ({
              margin: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: theme.appBorderRadius,
              borderBottomRightRadius: theme.appBorderRadius,
              border: 'none',
              background:
                'light' === theme.base
                  ? 'rgba(0, 0, 0, 0.85)'
                  : curriedDarken$1(0.05, theme.background.content),
              color: theme.color.lightest,
              button: {
                background:
                  'light' === theme.base
                    ? 'rgba(0, 0, 0, 0.85)'
                    : curriedDarken$1(0.05, theme.background.content),
              },
            })
          ),
          PreviewContainer =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme, withSource, isExpanded }) => ({
                position: 'relative',
                overflow: 'hidden',
                margin: '25px 0 40px',
                ...getBlockBackgroundStyle(theme),
                borderBottomLeftRadius: withSource && isExpanded && 0,
                borderBottomRightRadius: withSource && isExpanded && 0,
                borderBottomWidth: isExpanded && 0,
                'h3 + &': { marginTop: '16px' },
              }),
              ({ withToolbar }) => withToolbar && { paddingTop: 40 }
            )
        function getStoryId(children) {
          if (
            1 === react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)
          ) {
            let elt = children
            if (elt.props) return elt.props.id
          }
          return null
        }
        var PositionedToolbar = (0,
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) =>
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                Bar,
                { ...rest },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  Wrapper2,
                  { key: 'left' },
                  isLoading
                    ? [1, 2, 3].map((key2) =>
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          IconPlaceholder,
                          { key: key2 }
                        )
                      )
                    : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.K0,
                          {
                            key: 'zoomin',
                            onClick: (e2) => {
                              ;(e2.preventDefault(), zoom(0.8))
                            },
                            title: 'Zoom in',
                          },
                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.PU,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.K0,
                          {
                            key: 'zoomout',
                            onClick: (e2) => {
                              ;(e2.preventDefault(), zoom(1.25))
                            },
                            title: 'Zoom out',
                          },
                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.LoD,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.K0,
                          {
                            key: 'zoomreset',
                            onClick: (e2) => {
                              ;(e2.preventDefault(), resetZoom())
                            },
                            title: 'Reset zoom',
                          },
                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.wV5,
                            null
                          )
                        )
                      )
                )
              )
          )({ position: 'absolute', top: 0, left: 0, right: 0, height: 40 }),
          Relative =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
              overflow: 'hidden',
              position: 'relative',
            }),
          Preview = ({
            isLoading,
            isColumn,
            columns,
            children,
            withSource,
            withToolbar = !1,
            isExpanded = !1,
            additionalActions,
            className,
            layout = 'padded',
            ...props
          }) => {
            let [expanded, setExpanded] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(isExpanded),
              { source: source2, actionItem } = ((
                withSource,
                expanded,
                setExpanded
              ) => {
                switch (!0) {
                  case !(!withSource || !withSource.error):
                    return {
                      source: null,
                      actionItem: {
                        title: 'No code available',
                        className:
                          'docblock-code-toggle docblock-code-toggle--disabled',
                        disabled: !0,
                        onClick: () => setExpanded(!1),
                      },
                    }
                  case expanded:
                    return {
                      source: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        StyledSource,
                        { ...withSource, dark: !0 }
                      ),
                      actionItem: {
                        title: 'Hide code',
                        className:
                          'docblock-code-toggle docblock-code-toggle--expanded',
                        onClick: () => setExpanded(!1),
                      },
                    }
                  default:
                    return {
                      source: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        StyledSource,
                        { ...withSource, dark: !0 }
                      ),
                      actionItem: {
                        title: 'Show code',
                        className: 'docblock-code-toggle',
                        onClick: () => setExpanded(!0),
                      },
                    }
                }
              })(withSource, expanded, setExpanded),
              [scale, setScale] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
              previewClasses = [className].concat([
                'sbdocs',
                'sbdocs-preview',
                'sb-unstyled',
              ]),
              defaultActionItems = withSource ? [actionItem] : [],
              [additionalActionItems, setAdditionalActionItems] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(
                additionalActions ? [...additionalActions] : []
              ),
              actionItems = [...defaultActionItems, ...additionalActionItems],
              { window: globalWindow4 } = globalThis,
              copyToClipboard = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (text) => {
                let { createCopyToClipboardFunction } =
                  await Promise.resolve().then(
                    __webpack_require__.bind(
                      __webpack_require__,
                      '../../node_modules/.pnpm/storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2/node_modules/storybook/dist/components/index.js'
                    )
                  )
                createCopyToClipboardFunction()
              }, [])
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              PreviewContainer,
              {
                withSource,
                withToolbar,
                ...props,
                className: previewClasses.join(' '),
              },
              withToolbar &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  PositionedToolbar,
                  {
                    isLoading,
                    border: !0,
                    zoom: (z2) => setScale(scale * z2),
                    resetZoom: () => setScale(1),
                    storyId: getStoryId(children),
                    baseUrl: './iframe.html',
                  }
                ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                ZoomContext.Provider,
                { value: { scale } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  Relative,
                  {
                    className: 'docs-story',
                    onCopyCapture:
                      withSource &&
                      ((e2) => {
                        let selection = globalWindow4.getSelection()
                        ;(selection && 'Range' === selection.type) ||
                          (e2.preventDefault(),
                          0 ===
                            additionalActionItems.filter(
                              (item) => 'Copied' === item.title
                            ).length &&
                            copyToClipboard(source2.props.code).then(() => {
                              ;(setAdditionalActionItems([
                                ...additionalActionItems,
                                { title: 'Copied', onClick: () => {} },
                              ]),
                                globalWindow4.setTimeout(
                                  () =>
                                    setAdditionalActionItems(
                                      additionalActionItems.filter(
                                        (item) => 'Copied' !== item.title
                                      )
                                    ),
                                  1500
                                ))
                            }))
                      }),
                  },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    ChildrenContainer,
                    {
                      isColumn: isColumn || !Array.isArray(children),
                      columns,
                      layout,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__
                        .GP.Element,
                      { scale },
                      Array.isArray(children)
                        ? children.map((child, i2) =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                              'div',
                              { key: i2 },
                              child
                            )
                          )
                        : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            'div',
                            null,
                            children
                          )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.E7,
                    { actionItems }
                  )
                )
              ),
              withSource && expanded && source2
            )
          }
        ;(0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
          Preview
        )(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } }))
        var i, e2
        ;(((e2 = i || (i = {}))[(e2.MAX = 0)] = 'MAX'),
          (e2[(e2.HIGH = 1)] = 'HIGH'),
          (e2[(e2.MED = 2)] = 'MED'),
          (e2[(e2.LOW = 3)] = 'LOW'),
          (e2[(e2.MIN = 4)] = 'MIN'))
        ;[
          'allowFullScreen',
          'allowTransparency',
          'autoComplete',
          'autoFocus',
          'autoPlay',
          'cellPadding',
          'cellSpacing',
          'charSet',
          'classId',
          'colSpan',
          'contentEditable',
          'contextMenu',
          'crossOrigin',
          'encType',
          'formAction',
          'formEncType',
          'formMethod',
          'formNoValidate',
          'formTarget',
          'frameBorder',
          'hrefLang',
          'inputMode',
          'keyParams',
          'keyType',
          'marginHeight',
          'marginWidth',
          'maxLength',
          'mediaGroup',
          'minLength',
          'noValidate',
          'radioGroup',
          'readOnly',
          'rowSpan',
          'spellCheck',
          'srcDoc',
          'srcLang',
          'srcSet',
          'tabIndex',
          'useMap',
        ].reduce((e2, t2) => ((e2[t2.toLowerCase()] = t2), e2), {
          class: 'className',
          for: 'htmlFor',
        })
        var p = /^(\s*>[\s\S]*?)(?=\n\n|$)/,
          g =
            /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,
          y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
          w = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
          z = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
          L = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
          A =
            /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
          O = /^<!--[\s\S]*?(?:-->)/,
          M =
            /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
          j = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
          V =
            '((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)',
          oe =
            (new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`),
            new RegExp(`^([*_])${V}\\1(?!\\1|\\w)`),
            new RegExp(`^==${V}==`),
            new RegExp(`^~~${V}~~`),
            '(?:\\d+\\.)'),
          ce = '(?:[*+-])'
        function se(e2) {
          return '( *)(' + (1 === e2 ? oe : ce) + ') +'
        }
        var de = se(1),
          pe = se(2)
        function ue(e2) {
          return new RegExp('^' + (1 === e2 ? de : pe))
        }
        ;(ue(1), ue(2))
        function me(e2) {
          return new RegExp(
            '^' +
              (1 === e2 ? de : pe) +
              '[^\\n]*(?:\\n(?!\\1' +
              (1 === e2 ? oe : ce) +
              ' )[^\\n]*)*(\\n|$)',
            'gm'
          )
        }
        var ge = me(1),
          ye = me(2)
        function ke(e2) {
          let t2 = 1 === e2 ? oe : ce
          return new RegExp(
            '^( *)(' +
              t2 +
              ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
              t2 +
              ' (?!' +
              t2 +
              ' ))\\n*|\\s*\\n*$)'
          )
        }
        var xe = ke(1),
          be = ke(2)
        var $e = [p, g, y, w, L, z, O, j, ge, xe, ye, be]
        ;(storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.label(
          ({ theme }) => ({
            lineHeight: '18px',
            alignItems: 'center',
            marginBottom: 8,
            display: 'inline-block',
            position: 'relative',
            whiteSpace: 'nowrap',
            background: theme.boolean.background,
            borderRadius: '3em',
            padding: 1,
            '&[aria-disabled="true"]': {
              opacity: 0.5,
              input: { cursor: 'not-allowed' },
            },
            input: {
              appearance: 'none',
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              margin: 0,
              padding: 0,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderRadius: '3em',
              '&:focus': {
                outline: 'none',
                boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important`,
              },
            },
            span: {
              textAlign: 'center',
              fontSize: theme.typography.size.s1,
              fontWeight: theme.typography.weight.bold,
              lineHeight: '1',
              cursor: 'pointer',
              display: 'inline-block',
              padding: '7px 15px',
              transition: 'all 100ms ease-out',
              userSelect: 'none',
              borderRadius: '3em',
              color: curriedTransparentize$1(0.5, theme.color.defaultText),
              background: 'transparent',
              '&:hover': {
                boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset`,
              },
              '&:active': {
                boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`,
                color: curriedOpacify$1(1, theme.appBorderColor),
              },
              '&:first-of-type': { paddingRight: 8 },
              '&:last-of-type': { paddingLeft: 8 },
            },
            'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
              {
                background: theme.boolean.selectedBackground,
                boxShadow:
                  'light' === theme.base
                    ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px`
                    : `${theme.appBorderColor} 0 0 0 1px`,
                color: theme.color.defaultText,
                padding: '7px 15px',
              },
          })
        ),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.lV.Input
          )(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              flex: 1,
              display: 'flex',
              input: {
                marginLeft: 10,
                flex: 1,
                height: 32,
                '&::-webkit-calendar-picker-indicator': {
                  opacity: 0.5,
                  height: 12,
                  filter: 'light' === theme.base ? void 0 : 'invert(1)',
                },
              },
              'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
              'input:last-of-type': { flexGrow: 3 },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.label({
            display: 'flex',
          }),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.lV.Input
          )(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ isInline }) =>
              isInline
                ? {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    label: { display: 'inline-flex', marginRight: 15 },
                  }
                : { label: { display: 'flex' } },
            (props) => {
              if ('true' === props['aria-readonly'])
                return { input: { cursor: 'not-allowed' } }
            }
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span({
            '[aria-readonly=true] &': { opacity: 0.5 },
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.label({
            lineHeight: '20px',
            alignItems: 'center',
            marginBottom: 8,
            '&:last-child': { marginBottom: 0 },
            input: { margin: 0, marginRight: 6 },
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ isInline }) =>
              isInline
                ? {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    label: { display: 'inline-flex', marginRight: 15 },
                  }
                : { label: { display: 'flex' } },
            (props) => {
              if ('true' === props['aria-readonly'])
                return { input: { cursor: 'not-allowed' } }
            }
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span({
            '[aria-readonly=true] &': { opacity: 0.5 },
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.label({
            lineHeight: '20px',
            alignItems: 'center',
            marginBottom: 8,
            '&:last-child': { marginBottom: 0 },
            input: { margin: 0, marginRight: 6 },
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.select(
            {
              appearance: 'none',
              border: '0 none',
              boxSizing: 'inherit',
              display: ' block',
              margin: ' 0',
              background: 'transparent',
              padding: 0,
              fontSize: 'inherit',
              position: 'relative',
            },
            ({ theme }) => ({
              boxSizing: 'border-box',
              position: 'relative',
              padding: '6px 10px',
              width: '100%',
              color: theme.input.color || 'inherit',
              background: theme.input.background,
              borderRadius: theme.input.borderRadius,
              boxShadow: `${theme.input.border} 0 0 0 1px inset`,
              fontSize: theme.typography.size.s2 - 1,
              lineHeight: '20px',
              '&:focus': {
                boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
                outline: 'none',
              },
              '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
              '::placeholder': { color: theme.textMutedColor },
              '&[multiple]': {
                overflow: 'auto',
                padding: 0,
                option: {
                  display: 'block',
                  padding: '6px 10px',
                  marginLeft: 1,
                  marginRight: 1,
                },
              },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span(
            ({ theme }) => ({
              display: 'inline-block',
              lineHeight: 'normal',
              overflow: 'hidden',
              position: 'relative',
              verticalAlign: 'top',
              width: '100%',
              svg: {
                position: 'absolute',
                zIndex: 1,
                pointerEvents: 'none',
                height: '12px',
                marginTop: '-6px',
                right: '12px',
                top: '50%',
                fill: theme.textMutedColor,
                path: { fill: theme.textMutedColor },
              },
            })
          ))
        function getObjectType(obj) {
          return null === obj ||
            'object' != typeof obj ||
            Array.isArray(obj) ||
            'function' != typeof obj[Symbol.iterator]
            ? Object.prototype.toString.call(obj).slice(8, -1)
            : 'Iterable'
        }
        function isComponentWillChange(oldValue, newValue) {
          let oldType = getObjectType(oldValue),
            newType = getObjectType(newValue)
          return (
            ('Function' === oldType || 'Function' === newType) &&
            newType !== oldType
          )
        }
        var JsonAddValue = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            ;(super(props),
              (this.state = { inputRefKey: null, inputRefValue: null }),
              (this.refInputValue = this.refInputValue.bind(this)),
              (this.refInputKey = this.refInputKey.bind(this)),
              (this.onKeydown = this.onKeydown.bind(this)),
              (this.onSubmit = this.onSubmit.bind(this)))
          }
          componentDidMount() {
            let { inputRefKey, inputRefValue } = this.state,
              { onlyValue } = this.props
            ;(inputRefKey &&
              'function' == typeof inputRefKey.focus &&
              inputRefKey.focus(),
              onlyValue &&
                inputRefValue &&
                'function' == typeof inputRefValue.focus &&
                inputRefValue.focus(),
              document.addEventListener('keydown', this.onKeydown))
          }
          componentWillUnmount() {
            document.removeEventListener('keydown', this.onKeydown)
          }
          onKeydown(event) {
            event.altKey ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.repeat ||
              (('Enter' === event.code || 'Enter' === event.key) &&
                (event.preventDefault(), this.onSubmit()),
              ('Escape' === event.code || 'Escape' === event.key) &&
                (event.preventDefault(), this.props.handleCancel()))
          }
          onSubmit() {
            let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } =
                this.props,
              { inputRefKey, inputRefValue } = this.state,
              result2 = {}
            if (!onlyValue) {
              if (!inputRefKey.value) return
              result2.key = inputRefKey.value
            }
            ;((result2.newValue = onSubmitValueParser(
              !1,
              keyPath,
              deep,
              result2.key,
              inputRefValue.value
            )),
              handleAdd(result2))
          }
          refInputKey(node) {
            this.state.inputRefKey = node
          }
          refInputValue(node) {
            this.state.inputRefValue = node
          }
          render() {
            let {
                handleCancel,
                onlyValue,
                addButtonElement,
                cancelButtonElement,
                inputElementGenerator,
                keyPath,
                deep,
              } = this.props,
              addButtonElementLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                addButtonElement,
                { onClick: this.onSubmit }
              ),
              cancelButtonElementLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                cancelButtonElement,
                { onClick: handleCancel }
              ),
              inputElementValue = inputElementGenerator('value', keyPath, deep),
              inputElementValueLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                inputElementValue,
                { placeholder: 'Value', ref: this.refInputValue }
              ),
              inputElementKeyLayout = null
            if (!onlyValue) {
              let inputElementKey = inputElementGenerator('key', keyPath, deep)
              inputElementKeyLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                inputElementKey,
                { placeholder: 'Key', ref: this.refInputKey }
              )
            }
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              { className: 'rejt-add-value-node' },
              inputElementKeyLayout,
              inputElementValueLayout,
              cancelButtonElementLayout,
              addButtonElementLayout
            )
          }
        }
        JsonAddValue.defaultProps = {
          onlyValue: !1,
          addButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            '+'
          ),
          cancelButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            'c'
          ),
        }
        var JsonArray = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            super(props)
            let keyPath = [...props.keyPath, props.name]
            ;((this.state = {
              data: props.data,
              name: props.name,
              keyPath,
              deep: props.deep,
              nextDeep: props.deep + 1,
              collapsed: props.isCollapsed(keyPath, props.deep, props.data),
              addFormVisible: !1,
            }),
              (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
              (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
              (this.handleAddMode = this.handleAddMode.bind(this)),
              (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
              (this.handleAddValueCancel =
                this.handleAddValueCancel.bind(this)),
              (this.handleEditValue = this.handleEditValue.bind(this)),
              (this.onChildUpdate = this.onChildUpdate.bind(this)),
              (this.renderCollapsed = this.renderCollapsed.bind(this)),
              (this.renderNotCollapsed = this.renderNotCollapsed.bind(this)))
          }
          static getDerivedStateFromProps(props, state) {
            return props.data !== state.data ? { data: props.data } : null
          }
          onChildUpdate(childKey, childData) {
            let { data, keyPath } = this.state
            ;((data[childKey] = childData), this.setState({ data }))
            let { onUpdate } = this.props
            onUpdate(keyPath[keyPath.length - 1], data)
          }
          handleAddMode() {
            this.setState({ addFormVisible: !0 })
          }
          handleCollapseMode() {
            this.setState((state) => ({ collapsed: !state.collapsed }))
          }
          handleRemoveItem(index) {
            return () => {
              let { beforeRemoveAction, logger: logger4 } = this.props,
                { data, keyPath, nextDeep: deep } = this.state,
                oldValue = data[index]
              beforeRemoveAction(index, keyPath, deep, oldValue)
                .then(() => {
                  let deltaUpdateResult = {
                    keyPath,
                    deep,
                    key: index,
                    oldValue,
                    type: 'REMOVE_DELTA_TYPE',
                  }
                  ;(data.splice(index, 1), this.setState({ data }))
                  let { onUpdate, onDeltaUpdate } = this.props
                  ;(onUpdate(keyPath[keyPath.length - 1], data),
                    onDeltaUpdate(deltaUpdateResult))
                })
                .catch(logger4.error)
            }
          }
          handleAddValueAdd({ newValue }) {
            let { data, keyPath, nextDeep: deep } = this.state,
              { beforeAddAction, logger: logger4 } = this.props
            beforeAddAction(data.length, keyPath, deep, newValue)
              .then(() => {
                let newData = [...data, newValue]
                ;(this.setState({ data: newData }), this.handleAddValueCancel())
                let { onUpdate, onDeltaUpdate } = this.props
                ;(onUpdate(keyPath[keyPath.length - 1], newData),
                  onDeltaUpdate({
                    type: 'ADD_DELTA_TYPE',
                    keyPath,
                    deep,
                    key: newData.length - 1,
                    newValue,
                  }))
              })
              .catch(logger4.error)
          }
          handleAddValueCancel() {
            this.setState({ addFormVisible: !1 })
          }
          handleEditValue({ key: key2, value: value3 }) {
            return new Promise((resolve, reject) => {
              let { beforeUpdateAction } = this.props,
                { data, keyPath, nextDeep: deep } = this.state,
                oldValue = data[key2]
              beforeUpdateAction(key2, keyPath, deep, oldValue, value3)
                .then(() => {
                  ;((data[key2] = value3), this.setState({ data }))
                  let { onUpdate, onDeltaUpdate } = this.props
                  ;(onUpdate(keyPath[keyPath.length - 1], data),
                    onDeltaUpdate({
                      type: 'UPDATE_DELTA_TYPE',
                      keyPath,
                      deep,
                      key: key2,
                      newValue: value3,
                      oldValue,
                    }),
                    resolve(void 0))
                })
                .catch(reject)
            })
          }
          renderCollapsed() {
            let { name: name2, data, keyPath, deep } = this.state,
              { handleRemove, readOnly, getStyle, dataType, minusMenuElement } =
                this.props,
              { minus, collapsed } = getStyle(
                name2,
                data,
                keyPath,
                deep,
                dataType
              ),
              isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
              removeItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: minus,
                }
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              { className: 'rejt-collapsed' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                {
                  className: 'rejt-collapsed-text',
                  style: collapsed,
                  onClick: this.handleCollapseMode,
                },
                '[...] ',
                data.length,
                ' ',
                1 === data.length ? 'item' : 'items'
              ),
              !isReadOnly && removeItemButton
            )
          }
          renderNotCollapsed() {
            let {
                name: name2,
                data,
                keyPath,
                deep,
                addFormVisible,
                nextDeep,
              } = this.state,
              {
                isCollapsed,
                handleRemove,
                onDeltaUpdate,
                readOnly,
                getStyle,
                dataType,
                addButtonElement,
                cancelButtonElement,
                editButtonElement,
                inputElementGenerator,
                textareaElementGenerator,
                minusMenuElement,
                plusMenuElement,
                beforeRemoveAction,
                beforeAddAction,
                beforeUpdateAction,
                logger: logger4,
                onSubmitValueParser,
              } = this.props,
              { minus, plus, delimiter, ul, addForm } = getStyle(
                name2,
                data,
                keyPath,
                deep,
                dataType
              ),
              isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
              addItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                plusMenuElement,
                {
                  onClick: this.handleAddMode,
                  className: 'rejt-plus-menu',
                  style: plus,
                }
              ),
              removeItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: minus,
                }
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              { className: 'rejt-not-collapsed' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: delimiter },
                '['
              ),
              !addFormVisible && addItemButton,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'ul',
                { className: 'rejt-not-collapsed-list', style: ul },
                data.map((item, index) =>
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(JsonNode, {
                    key: index,
                    name: index.toString(),
                    data: item,
                    keyPath,
                    deep: nextDeep,
                    isCollapsed,
                    handleRemove: this.handleRemoveItem(index),
                    handleUpdateValue: this.handleEditValue,
                    onUpdate: this.onChildUpdate,
                    onDeltaUpdate,
                    readOnly,
                    getStyle,
                    addButtonElement,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    textareaElementGenerator,
                    minusMenuElement,
                    plusMenuElement,
                    beforeRemoveAction,
                    beforeAddAction,
                    beforeUpdateAction,
                    logger: logger4,
                    onSubmitValueParser,
                  })
                )
              ),
              !isReadOnly &&
                addFormVisible &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'div',
                  { className: 'rejt-add-form', style: addForm },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    JsonAddValue,
                    {
                      handleAdd: this.handleAddValueAdd,
                      handleCancel: this.handleAddValueCancel,
                      onlyValue: !0,
                      addButtonElement,
                      cancelButtonElement,
                      inputElementGenerator,
                      keyPath,
                      deep,
                      onSubmitValueParser,
                    }
                  )
                ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: delimiter },
                ']'
              ),
              !isReadOnly && removeItemButton
            )
          }
          render() {
            let { name: name2, collapsed, data, keyPath, deep } = this.state,
              { dataType, getStyle } = this.props,
              value3 = collapsed
                ? this.renderCollapsed()
                : this.renderNotCollapsed(),
              style = getStyle(name2, data, keyPath, deep, dataType)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'div',
              { className: 'rejt-array-node' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { onClick: this.handleCollapseMode },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'span',
                  { className: 'rejt-name', style: style.name },
                  name2,
                  ' :',
                  ' '
                )
              ),
              value3
            )
          }
        }
        JsonArray.defaultProps = {
          keyPath: [],
          deep: 0,
          minusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' - '
          ),
          plusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' + '
          ),
        }
        var JsonFunctionValue = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            super(props)
            let keyPath = [...props.keyPath, props.name]
            ;((this.state = {
              value: props.value,
              name: props.name,
              keyPath,
              deep: props.deep,
              editEnabled: !1,
              inputRef: null,
            }),
              (this.handleEditMode = this.handleEditMode.bind(this)),
              (this.refInput = this.refInput.bind(this)),
              (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
              (this.handleEdit = this.handleEdit.bind(this)),
              (this.onKeydown = this.onKeydown.bind(this)))
          }
          static getDerivedStateFromProps(props, state) {
            return props.value !== state.value ? { value: props.value } : null
          }
          componentDidUpdate() {
            let {
                editEnabled,
                inputRef,
                name: name2,
                value: value3,
                keyPath,
                deep,
              } = this.state,
              { readOnly, dataType } = this.props,
              readOnlyResult = readOnly(name2, value3, keyPath, deep, dataType)
            editEnabled &&
              !readOnlyResult &&
              'function' == typeof inputRef.focus &&
              inputRef.focus()
          }
          componentDidMount() {
            document.addEventListener('keydown', this.onKeydown)
          }
          componentWillUnmount() {
            document.removeEventListener('keydown', this.onKeydown)
          }
          onKeydown(event) {
            event.altKey ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.repeat ||
              (('Enter' === event.code || 'Enter' === event.key) &&
                (event.preventDefault(), this.handleEdit()),
              ('Escape' === event.code || 'Escape' === event.key) &&
                (event.preventDefault(), this.handleCancelEdit()))
          }
          handleEdit() {
            let {
                handleUpdateValue,
                originalValue,
                logger: logger4,
                onSubmitValueParser,
                keyPath,
              } = this.props,
              { inputRef, name: name2, deep } = this.state
            if (!inputRef) return
            let newValue = onSubmitValueParser(
              !0,
              keyPath,
              deep,
              name2,
              inputRef.value
            )
            handleUpdateValue({ value: newValue, key: name2 })
              .then(() => {
                isComponentWillChange(originalValue, newValue) ||
                  this.handleCancelEdit()
              })
              .catch(logger4.error)
          }
          handleEditMode() {
            this.setState({ editEnabled: !0 })
          }
          refInput(node) {
            this.state.inputRef = node
          }
          handleCancelEdit() {
            this.setState({ editEnabled: !1 })
          }
          render() {
            let {
                name: name2,
                value: value3,
                editEnabled,
                keyPath,
                deep,
              } = this.state,
              {
                handleRemove,
                originalValue,
                readOnly,
                dataType,
                getStyle,
                editButtonElement,
                cancelButtonElement,
                textareaElementGenerator,
                minusMenuElement,
                keyPath: comeFromKeyPath,
              } = this.props,
              style = getStyle(name2, originalValue, keyPath, deep, dataType),
              result2 = null,
              minusElement = null,
              resultOnlyResult = readOnly(
                name2,
                originalValue,
                keyPath,
                deep,
                dataType
              )
            if (editEnabled && !resultOnlyResult) {
              let textareaElement = textareaElementGenerator(
                  'value',
                  comeFromKeyPath,
                  deep,
                  name2,
                  originalValue,
                  dataType
                ),
                editButtonElementLayout = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                  editButtonElement,
                  { onClick: this.handleEdit }
                ),
                cancelButtonElementLayout = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                  cancelButtonElement,
                  { onClick: this.handleCancelEdit }
                ),
                textareaElementLayout = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                  textareaElement,
                  { ref: this.refInput, defaultValue: originalValue }
                )
              ;((result2 = react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-edit-form', style: style.editForm },
                textareaElementLayout,
                ' ',
                cancelButtonElementLayout,
                editButtonElementLayout
              )),
                (minusElement = null))
            } else {
              result2 = react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: style.value,
                  onClick: resultOnlyResult ? null : this.handleEditMode,
                },
                value3
              )
              let minusMenuLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: style.minus,
                }
              )
              minusElement = resultOnlyResult ? null : minusMenuLayout
            }
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'li',
              { className: 'rejt-function-value-node', style: style.li },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-name', style: style.name },
                name2,
                ' :',
                ' '
              ),
              result2,
              minusElement
            )
          }
        }
        JsonFunctionValue.defaultProps = {
          keyPath: [],
          deep: 0,
          handleUpdateValue: () => {},
          editButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            'e'
          ),
          cancelButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            'c'
          ),
          minusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' - '
          ),
        }
        var JsonNode = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            ;(super(props),
              (this.state = {
                data: props.data,
                name: props.name,
                keyPath: props.keyPath,
                deep: props.deep,
              }))
          }
          static getDerivedStateFromProps(props, state) {
            return props.data !== state.data ? { data: props.data } : null
          }
          render() {
            let { data, name: name2, keyPath, deep } = this.state,
              {
                isCollapsed,
                handleRemove,
                handleUpdateValue,
                onUpdate,
                onDeltaUpdate,
                readOnly,
                getStyle,
                addButtonElement,
                cancelButtonElement,
                editButtonElement,
                inputElementGenerator,
                textareaElementGenerator,
                minusMenuElement,
                plusMenuElement,
                beforeRemoveAction,
                beforeAddAction,
                beforeUpdateAction,
                logger: logger4,
                onSubmitValueParser,
              } = this.props,
              readOnlyTrue = () => !0,
              dataType = getObjectType(data)
            switch (dataType) {
              case 'Error':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonObject,
                  {
                    data,
                    name: name2,
                    isCollapsed,
                    keyPath,
                    deep,
                    handleRemove,
                    onUpdate,
                    onDeltaUpdate,
                    readOnly: readOnlyTrue,
                    dataType,
                    getStyle,
                    addButtonElement,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    textareaElementGenerator,
                    minusMenuElement,
                    plusMenuElement,
                    beforeRemoveAction,
                    beforeAddAction,
                    beforeUpdateAction,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Object':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonObject,
                  {
                    data,
                    name: name2,
                    isCollapsed,
                    keyPath,
                    deep,
                    handleRemove,
                    onUpdate,
                    onDeltaUpdate,
                    readOnly,
                    dataType,
                    getStyle,
                    addButtonElement,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    textareaElementGenerator,
                    minusMenuElement,
                    plusMenuElement,
                    beforeRemoveAction,
                    beforeAddAction,
                    beforeUpdateAction,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Array':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonArray,
                  {
                    data,
                    name: name2,
                    isCollapsed,
                    keyPath,
                    deep,
                    handleRemove,
                    onUpdate,
                    onDeltaUpdate,
                    readOnly,
                    dataType,
                    getStyle,
                    addButtonElement,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    textareaElementGenerator,
                    minusMenuElement,
                    plusMenuElement,
                    beforeRemoveAction,
                    beforeAddAction,
                    beforeUpdateAction,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'String':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: `"${data}"`,
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Number':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: data,
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Boolean':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: data ? 'true' : 'false',
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Date':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: data.toISOString(),
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly: readOnlyTrue,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Null':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: 'null',
                    originalValue: 'null',
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Undefined':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: 'undefined',
                    originalValue: 'undefined',
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Function':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonFunctionValue,
                  {
                    name: name2,
                    value: data.toString(),
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    textareaElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              case 'Symbol':
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  JsonValue,
                  {
                    name: name2,
                    value: data.toString(),
                    originalValue: data,
                    keyPath,
                    deep,
                    handleRemove,
                    handleUpdateValue,
                    readOnly: readOnlyTrue,
                    dataType,
                    getStyle,
                    cancelButtonElement,
                    editButtonElement,
                    inputElementGenerator,
                    minusMenuElement,
                    logger: logger4,
                    onSubmitValueParser,
                  }
                )
              default:
                return null
            }
          }
        }
        JsonNode.defaultProps = { keyPath: [], deep: 0 }
        var JsonObject = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            super(props)
            let keyPath =
              -1 === props.deep ? [] : [...props.keyPath, props.name]
            ;((this.state = {
              name: props.name,
              data: props.data,
              keyPath,
              deep: props.deep,
              nextDeep: props.deep + 1,
              collapsed: props.isCollapsed(keyPath, props.deep, props.data),
              addFormVisible: !1,
            }),
              (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
              (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
              (this.handleAddMode = this.handleAddMode.bind(this)),
              (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
              (this.handleAddValueCancel =
                this.handleAddValueCancel.bind(this)),
              (this.handleEditValue = this.handleEditValue.bind(this)),
              (this.onChildUpdate = this.onChildUpdate.bind(this)),
              (this.renderCollapsed = this.renderCollapsed.bind(this)),
              (this.renderNotCollapsed = this.renderNotCollapsed.bind(this)))
          }
          static getDerivedStateFromProps(props, state) {
            return props.data !== state.data ? { data: props.data } : null
          }
          onChildUpdate(childKey, childData) {
            let { data, keyPath } = this.state
            ;((data[childKey] = childData), this.setState({ data }))
            let { onUpdate } = this.props
            onUpdate(keyPath[keyPath.length - 1], data)
          }
          handleAddMode() {
            this.setState({ addFormVisible: !0 })
          }
          handleAddValueCancel() {
            this.setState({ addFormVisible: !1 })
          }
          handleAddValueAdd({ key: key2, newValue }) {
            let { data, keyPath, nextDeep: deep } = this.state,
              { beforeAddAction, logger: logger4 } = this.props
            beforeAddAction(key2, keyPath, deep, newValue)
              .then(() => {
                ;((data[key2] = newValue),
                  this.setState({ data }),
                  this.handleAddValueCancel())
                let { onUpdate, onDeltaUpdate } = this.props
                ;(onUpdate(keyPath[keyPath.length - 1], data),
                  onDeltaUpdate({
                    type: 'ADD_DELTA_TYPE',
                    keyPath,
                    deep,
                    key: key2,
                    newValue,
                  }))
              })
              .catch(logger4.error)
          }
          handleRemoveValue(key2) {
            return () => {
              let { beforeRemoveAction, logger: logger4 } = this.props,
                { data, keyPath, nextDeep: deep } = this.state,
                oldValue = data[key2]
              beforeRemoveAction(key2, keyPath, deep, oldValue)
                .then(() => {
                  let deltaUpdateResult = {
                    keyPath,
                    deep,
                    key: key2,
                    oldValue,
                    type: 'REMOVE_DELTA_TYPE',
                  }
                  ;(delete data[key2], this.setState({ data }))
                  let { onUpdate, onDeltaUpdate } = this.props
                  ;(onUpdate(keyPath[keyPath.length - 1], data),
                    onDeltaUpdate(deltaUpdateResult))
                })
                .catch(logger4.error)
            }
          }
          handleCollapseMode() {
            this.setState((state) => ({ collapsed: !state.collapsed }))
          }
          handleEditValue({ key: key2, value: value3 }) {
            return new Promise((resolve, reject) => {
              let { beforeUpdateAction } = this.props,
                { data, keyPath, nextDeep: deep } = this.state,
                oldValue = data[key2]
              beforeUpdateAction(key2, keyPath, deep, oldValue, value3)
                .then(() => {
                  ;((data[key2] = value3), this.setState({ data }))
                  let { onUpdate, onDeltaUpdate } = this.props
                  ;(onUpdate(keyPath[keyPath.length - 1], data),
                    onDeltaUpdate({
                      type: 'UPDATE_DELTA_TYPE',
                      keyPath,
                      deep,
                      key: key2,
                      newValue: value3,
                      oldValue,
                    }),
                    resolve())
                })
                .catch(reject)
            })
          }
          renderCollapsed() {
            let { name: name2, keyPath, deep, data } = this.state,
              { handleRemove, readOnly, dataType, getStyle, minusMenuElement } =
                this.props,
              { minus, collapsed } = getStyle(
                name2,
                data,
                keyPath,
                deep,
                dataType
              ),
              keyList = Object.getOwnPropertyNames(data),
              isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
              removeItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: minus,
                }
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              { className: 'rejt-collapsed' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                {
                  className: 'rejt-collapsed-text',
                  style: collapsed,
                  onClick: this.handleCollapseMode,
                },
                '{...}',
                ' ',
                keyList.length,
                ' ',
                1 === keyList.length ? 'key' : 'keys'
              ),
              !isReadOnly && removeItemButton
            )
          }
          renderNotCollapsed() {
            let {
                name: name2,
                data,
                keyPath,
                deep,
                nextDeep,
                addFormVisible,
              } = this.state,
              {
                isCollapsed,
                handleRemove,
                onDeltaUpdate,
                readOnly,
                getStyle,
                dataType,
                addButtonElement,
                cancelButtonElement,
                editButtonElement,
                inputElementGenerator,
                textareaElementGenerator,
                minusMenuElement,
                plusMenuElement,
                beforeRemoveAction,
                beforeAddAction,
                beforeUpdateAction,
                logger: logger4,
                onSubmitValueParser,
              } = this.props,
              { minus, plus, addForm, ul, delimiter } = getStyle(
                name2,
                data,
                keyPath,
                deep,
                dataType
              ),
              keyList = Object.getOwnPropertyNames(data),
              isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
              addItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                plusMenuElement,
                {
                  onClick: this.handleAddMode,
                  className: 'rejt-plus-menu',
                  style: plus,
                }
              ),
              removeItemButton = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: minus,
                }
              ),
              list = keyList.map((key2) =>
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(JsonNode, {
                  key: key2,
                  name: key2,
                  data: data[key2],
                  keyPath,
                  deep: nextDeep,
                  isCollapsed,
                  handleRemove: this.handleRemoveValue(key2),
                  handleUpdateValue: this.handleEditValue,
                  onUpdate: this.onChildUpdate,
                  onDeltaUpdate,
                  readOnly,
                  getStyle,
                  addButtonElement,
                  cancelButtonElement,
                  editButtonElement,
                  inputElementGenerator,
                  textareaElementGenerator,
                  minusMenuElement,
                  plusMenuElement,
                  beforeRemoveAction,
                  beforeAddAction,
                  beforeUpdateAction,
                  logger: logger4,
                  onSubmitValueParser,
                })
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              { className: 'rejt-not-collapsed' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: delimiter },
                '{'
              ),
              !isReadOnly && addItemButton,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'ul',
                { className: 'rejt-not-collapsed-list', style: ul },
                list
              ),
              !isReadOnly &&
                addFormVisible &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'div',
                  { className: 'rejt-add-form', style: addForm },
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    JsonAddValue,
                    {
                      handleAdd: this.handleAddValueAdd,
                      handleCancel: this.handleAddValueCancel,
                      addButtonElement,
                      cancelButtonElement,
                      inputElementGenerator,
                      keyPath,
                      deep,
                      onSubmitValueParser,
                    }
                  )
                ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: delimiter },
                '}'
              ),
              !isReadOnly && removeItemButton
            )
          }
          render() {
            let { name: name2, collapsed, data, keyPath, deep } = this.state,
              { getStyle, dataType } = this.props,
              value3 = collapsed
                ? this.renderCollapsed()
                : this.renderNotCollapsed(),
              style = getStyle(name2, data, keyPath, deep, dataType)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'div',
              { className: 'rejt-object-node' },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { onClick: this.handleCollapseMode },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'span',
                  { className: 'rejt-name', style: style.name },
                  name2,
                  ' :',
                  ' '
                )
              ),
              value3
            )
          }
        }
        JsonObject.defaultProps = {
          keyPath: [],
          deep: 0,
          minusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' - '
          ),
          plusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' + '
          ),
        }
        var JsonValue = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor(props) {
            super(props)
            let keyPath = [...props.keyPath, props.name]
            ;((this.state = {
              value: props.value,
              name: props.name,
              keyPath,
              deep: props.deep,
              editEnabled: !1,
              inputRef: null,
            }),
              (this.handleEditMode = this.handleEditMode.bind(this)),
              (this.refInput = this.refInput.bind(this)),
              (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
              (this.handleEdit = this.handleEdit.bind(this)),
              (this.onKeydown = this.onKeydown.bind(this)))
          }
          static getDerivedStateFromProps(props, state) {
            return props.value !== state.value ? { value: props.value } : null
          }
          componentDidUpdate() {
            let {
                editEnabled,
                inputRef,
                name: name2,
                value: value3,
                keyPath,
                deep,
              } = this.state,
              { readOnly, dataType } = this.props,
              isReadOnly = readOnly(name2, value3, keyPath, deep, dataType)
            editEnabled &&
              !isReadOnly &&
              'function' == typeof inputRef.focus &&
              inputRef.focus()
          }
          componentDidMount() {
            document.addEventListener('keydown', this.onKeydown)
          }
          componentWillUnmount() {
            document.removeEventListener('keydown', this.onKeydown)
          }
          onKeydown(event) {
            event.altKey ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.repeat ||
              (('Enter' === event.code || 'Enter' === event.key) &&
                (event.preventDefault(), this.handleEdit()),
              ('Escape' === event.code || 'Escape' === event.key) &&
                (event.preventDefault(), this.handleCancelEdit()))
          }
          handleEdit() {
            let {
                handleUpdateValue,
                originalValue,
                logger: logger4,
                onSubmitValueParser,
                keyPath,
              } = this.props,
              { inputRef, name: name2, deep } = this.state
            if (!inputRef) return
            let newValue = onSubmitValueParser(
              !0,
              keyPath,
              deep,
              name2,
              inputRef.value
            )
            handleUpdateValue({ value: newValue, key: name2 })
              .then(() => {
                isComponentWillChange(originalValue, newValue) ||
                  this.handleCancelEdit()
              })
              .catch(logger4.error)
          }
          handleEditMode() {
            this.setState({ editEnabled: !0 })
          }
          refInput(node) {
            this.state.inputRef = node
          }
          handleCancelEdit() {
            this.setState({ editEnabled: !1 })
          }
          render() {
            let {
                name: name2,
                value: value3,
                editEnabled,
                keyPath,
                deep,
              } = this.state,
              {
                handleRemove,
                originalValue,
                readOnly,
                dataType,
                getStyle,
                editButtonElement,
                cancelButtonElement,
                inputElementGenerator,
                minusMenuElement,
                keyPath: comeFromKeyPath,
              } = this.props,
              style = getStyle(name2, originalValue, keyPath, deep, dataType),
              isReadOnly = readOnly(
                name2,
                originalValue,
                keyPath,
                deep,
                dataType
              ),
              isEditing = editEnabled && !isReadOnly,
              inputElement = inputElementGenerator(
                'value',
                comeFromKeyPath,
                deep,
                name2,
                originalValue,
                dataType
              ),
              editButtonElementLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                editButtonElement,
                { onClick: this.handleEdit }
              ),
              cancelButtonElementLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                cancelButtonElement,
                { onClick: this.handleCancelEdit }
              ),
              inputElementLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(inputElement, {
                ref: this.refInput,
                defaultValue: JSON.stringify(originalValue),
              }),
              minusMenuLayout = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
                minusMenuElement,
                {
                  onClick: handleRemove,
                  className: 'rejt-minus-menu',
                  style: style.minus,
                }
              )
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'li',
              { className: 'rejt-value-node', style: style.li },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'span',
                { className: 'rejt-name', style: style.name },
                name2,
                ' : '
              ),
              isEditing
                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'span',
                    { className: 'rejt-edit-form', style: style.editForm },
                    inputElementLayout,
                    ' ',
                    cancelButtonElementLayout,
                    editButtonElementLayout
                  )
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'span',
                    {
                      className: 'rejt-value',
                      style: style.value,
                      onClick: isReadOnly ? null : this.handleEditMode,
                    },
                    String(value3)
                  ),
              !isReadOnly && !isEditing && minusMenuLayout
            )
          }
        }
        JsonValue.defaultProps = {
          keyPath: [],
          deep: 0,
          handleUpdateValue: () => Promise.resolve(),
          editButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            'e'
          ),
          cancelButtonElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'button',
            null,
            'c'
          ),
          minusMenuElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'span',
            null,
            ' - '
          ),
        }
        var object = {
            minus: { color: 'red' },
            plus: { color: 'green' },
            collapsed: { color: 'grey' },
            delimiter: {},
            ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
            name: { color: '#2287CD' },
            addForm: {},
          },
          array = {
            minus: { color: 'red' },
            plus: { color: 'green' },
            collapsed: { color: 'grey' },
            delimiter: {},
            ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
            name: { color: '#2287CD' },
            addForm: {},
          },
          value2 = {
            minus: { color: 'red' },
            editForm: {},
            value: { color: '#7bba3d' },
            li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
            name: { color: '#2287CD' },
          },
          JsonTree = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
            constructor(props) {
              ;(super(props),
                (this.state = { data: props.data, rootName: props.rootName }),
                (this.onUpdate = this.onUpdate.bind(this)),
                (this.removeRoot = this.removeRoot.bind(this)))
            }
            static getDerivedStateFromProps(props, state) {
              return props.data !== state.data ||
                props.rootName !== state.rootName
                ? { data: props.data, rootName: props.rootName }
                : null
            }
            onUpdate(key2, data) {
              ;(this.setState({ data }), this.props.onFullyUpdate(data))
            }
            removeRoot() {
              this.onUpdate(null, null)
            }
            render() {
              let { data, rootName } = this.state,
                {
                  isCollapsed,
                  onDeltaUpdate,
                  readOnly,
                  getStyle,
                  addButtonElement,
                  cancelButtonElement,
                  editButtonElement,
                  inputElement,
                  textareaElement,
                  minusMenuElement,
                  plusMenuElement,
                  beforeRemoveAction,
                  beforeAddAction,
                  beforeUpdateAction,
                  logger: logger4,
                  onSubmitValueParser,
                  fallback = null,
                } = this.props,
                dataType = getObjectType(data),
                readOnlyFunction = readOnly
              'Boolean' === getObjectType(readOnly) &&
                (readOnlyFunction = () => readOnly)
              let inputElementFunction = inputElement
              inputElement &&
                'Function' !== getObjectType(inputElement) &&
                (inputElementFunction = () => inputElement)
              let textareaElementFunction = textareaElement
              return (
                textareaElement &&
                  'Function' !== getObjectType(textareaElement) &&
                  (textareaElementFunction = () => textareaElement),
                'Object' === dataType || 'Array' === dataType
                  ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'div',
                      { className: 'rejt-tree' },
                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        JsonNode,
                        {
                          data,
                          name: rootName,
                          deep: -1,
                          isCollapsed,
                          onUpdate: this.onUpdate,
                          onDeltaUpdate,
                          readOnly: readOnlyFunction,
                          getStyle,
                          addButtonElement,
                          cancelButtonElement,
                          editButtonElement,
                          inputElementGenerator: inputElementFunction,
                          textareaElementGenerator: textareaElementFunction,
                          minusMenuElement,
                          plusMenuElement,
                          handleRemove: this.removeRoot,
                          beforeRemoveAction,
                          beforeAddAction,
                          beforeUpdateAction,
                          logger: logger4,
                          onSubmitValueParser,
                        }
                      )
                    )
                  : fallback
              )
            }
          }
        JsonTree.defaultProps = {
          rootName: 'root',
          isCollapsed: (keyPath, deep) => -1 !== deep,
          getStyle: (keyName, data, keyPath, deep, dataType) => {
            switch (dataType) {
              case 'Object':
              case 'Error':
                return object
              case 'Array':
                return array
              default:
                return value2
            }
          },
          readOnly: () => !1,
          onFullyUpdate: () => {},
          onDeltaUpdate: () => {},
          beforeRemoveAction: () => Promise.resolve(),
          beforeAddAction: () => Promise.resolve(),
          beforeUpdateAction: () => Promise.resolve(),
          logger: { error: () => {} },
          onSubmitValueParser: (isEditMode, keyPath, deep, name2, rawValue) =>
            (function parse3(string) {
              let result2 = string
              if (0 === result2.indexOf('function'))
                return (0, eval)(`(${result2})`)
              try {
                result2 = JSON.parse(string)
              } catch {}
              return result2
            })(rawValue),
          inputElement: () =>
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('input', null),
          textareaElement: () =>
            react__WEBPACK_IMPORTED_MODULE_0__.createElement('textarea', null),
          fallback: null,
        }
        var { window: globalWindow2 } = globalThis,
          RangeLabel =
            (storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                position: 'relative',
                display: 'flex',
                '&[aria-readonly="true"]': { opacity: 0.5 },
                '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
                '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
                  { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
                '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
                  { '& > svg': { opacity: 1 } },
                '.rejt-edit-form button': { display: 'none' },
                '.rejt-add-form': { marginLeft: 10 },
                '.rejt-add-value-node': {
                  display: 'inline-flex',
                  alignItems: 'center',
                },
                '.rejt-name': { lineHeight: '22px' },
                '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
                '.rejt-plus-menu': { marginLeft: 5 },
                '.rejt-object-node > span > *, .rejt-array-node > span > *': {
                  position: 'relative',
                  zIndex: 2,
                },
                '.rejt-object-node, .rejt-array-node': { position: 'relative' },
                '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
                  {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    display: 'block',
                    width: '100%',
                    marginLeft: '-1rem',
                    padding: '0 4px 0 1rem',
                    height: 22,
                  },
                '.rejt-collapsed::before, .rejt-not-collapsed::before': {
                  zIndex: 1,
                  background: 'transparent',
                  borderRadius: 4,
                  transition: 'background 0.2s',
                  pointerEvents: 'none',
                  opacity: 0.1,
                },
                '.rejt-object-node:hover, .rejt-array-node:hover': {
                  '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before':
                    { background: theme.color.secondary },
                },
                '.rejt-collapsed::after, .rejt-not-collapsed::after': {
                  content: '""',
                  position: 'absolute',
                  display: 'inline-block',
                  pointerEvents: 'none',
                  width: 0,
                  height: 0,
                },
                '.rejt-collapsed::after': {
                  left: -8,
                  top: 8,
                  borderTop: '3px solid transparent',
                  borderBottom: '3px solid transparent',
                  borderLeft: '3px solid rgba(153,153,153,0.6)',
                },
                '.rejt-not-collapsed::after': {
                  left: -10,
                  top: 10,
                  borderTop: '3px solid rgba(153,153,153,0.6)',
                  borderLeft: '3px solid transparent',
                  borderRight: '3px solid transparent',
                },
                '.rejt-value': {
                  display: 'inline-block',
                  border: '1px solid transparent',
                  borderRadius: 4,
                  margin: '1px 0',
                  padding: '0 4px',
                  cursor: 'text',
                  color: theme.color.defaultText,
                },
                '.rejt-value-node:hover > .rejt-value': {
                  background: theme.color.lighter,
                  borderColor: theme.appBorderColor,
                },
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.button(
              ({ theme, primary }) => ({
                border: 0,
                height: 20,
                margin: 1,
                borderRadius: 4,
                background: primary ? theme.color.secondary : 'transparent',
                color: primary ? theme.color.lightest : theme.color.dark,
                fontWeight: primary ? 'bold' : 'normal',
                cursor: 'pointer',
                order: primary ? 'initial' : 9,
              })
            ),
            (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
              _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.REV
            )(({ theme, disabled }) => ({
              display: 'inline-block',
              verticalAlign: 'middle',
              width: 15,
              height: 15,
              padding: 3,
              marginLeft: 5,
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: theme.textMutedColor,
              '&:hover': disabled ? {} : { color: theme.color.ancillary },
              'svg + &': { marginLeft: 0 },
            })),
            (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
              _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.Qpb
            )(({ theme, disabled }) => ({
              display: 'inline-block',
              verticalAlign: 'middle',
              width: 15,
              height: 15,
              padding: 3,
              marginLeft: 5,
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: theme.textMutedColor,
              '&:hover': disabled ? {} : { color: theme.color.negative },
              'svg + &': { marginLeft: 0 },
            })),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.input(
              ({ theme, placeholder }) => ({
                outline: 0,
                margin: placeholder ? 1 : '1px 0',
                padding: '3px 4px',
                color: theme.color.defaultText,
                background: theme.background.app,
                border: `1px solid ${theme.appBorderColor}`,
                borderRadius: 4,
                lineHeight: '14px',
                width: 'Key' === placeholder ? 80 : 120,
                '&:focus': { border: `1px solid ${theme.color.secondary}` },
              })
            ),
            (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.K0
            )(({ theme }) => ({
              position: 'absolute',
              zIndex: 2,
              top: 2,
              right: 2,
              height: 21,
              padding: '0 3px',
              background: theme.background.bar,
              border: `1px solid ${theme.appBorderColor}`,
              borderRadius: 3,
              color: theme.textMutedColor,
              fontSize: '9px',
              fontWeight: 'bold',
              textDecoration: 'none',
              span: { marginLeft: 3, marginTop: 1 },
            })),
            (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
              storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.lV
                .Textarea
            )(({ theme }) => ({
              flex: 1,
              padding: '7px 6px',
              fontFamily: theme.typography.fonts.mono,
              fontSize: '12px',
              lineHeight: '18px',
              '&::placeholder': {
                fontFamily: theme.typography.fonts.base,
                fontSize: '13px',
              },
              '&:placeholder-shown': { padding: '7px 10px' },
            })),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.input(
              ({ theme, min, max, value: value3, disabled }) => ({
                '&': {
                  width: '100%',
                  backgroundColor: 'transparent',
                  appearance: 'none',
                },
                '&::-webkit-slider-runnable-track': {
                  background:
                    'light' === theme.base
                      ? `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
                      : `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
                  boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
                  borderRadius: 6,
                  width: '100%',
                  height: 6,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                },
                '&::-webkit-slider-thumb': {
                  marginTop: '-6px',
                  width: 16,
                  height: 16,
                  border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
                  borderRadius: '50px',
                  boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`,
                  cursor: disabled ? 'not-allowed' : 'grab',
                  appearance: 'none',
                  background: `${theme.input.background}`,
                  transition: 'all 150ms ease-out',
                  '&:hover': {
                    background: `${curriedDarken$1(0.05, theme.input.background)}`,
                    transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
                    transition: 'all 50ms ease-out',
                  },
                  '&:active': {
                    background: `${theme.input.background}`,
                    transform: 'scale3d(1, 1, 1) translateY(0px)',
                    cursor: disabled ? 'not-allowed' : 'grab',
                  },
                },
                '&:focus': {
                  outline: 'none',
                  '&::-webkit-slider-runnable-track': {
                    borderColor: rgba(theme.color.secondary, 0.4),
                  },
                  '&::-webkit-slider-thumb': {
                    borderColor: theme.color.secondary,
                    boxShadow: `0 0px 5px 0px ${theme.color.secondary}`,
                  },
                },
                '&::-moz-range-track': {
                  background:
                    'light' === theme.base
                      ? `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
                      : `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
                  boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
                  borderRadius: 6,
                  width: '100%',
                  height: 6,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  outline: 'none',
                },
                '&::-moz-range-thumb': {
                  width: 16,
                  height: 16,
                  border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
                  borderRadius: '50px',
                  boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`,
                  cursor: disabled ? 'not-allowed' : 'grap',
                  background: `${theme.input.background}`,
                  transition: 'all 150ms ease-out',
                  '&:hover': {
                    background: `${curriedDarken$1(0.05, theme.input.background)}`,
                    transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
                    transition: 'all 50ms ease-out',
                  },
                  '&:active': {
                    background: `${theme.input.background}`,
                    transform: 'scale3d(1, 1, 1) translateY(0px)',
                    cursor: 'grabbing',
                  },
                },
                '&::-ms-track': {
                  background:
                    'light' === theme.base
                      ? `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
                      : `linear-gradient(to right, \n            ${theme.color.green} 0%, ${theme.color.green} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} ${((value3 - min) / (max - min)) * 100}%, \n            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
                  boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
                  color: 'transparent',
                  width: '100%',
                  height: '6px',
                  cursor: 'pointer',
                },
                '&::-ms-fill-lower': { borderRadius: 6 },
                '&::-ms-fill-upper': { borderRadius: 6 },
                '&::-ms-thumb': {
                  width: 16,
                  height: 16,
                  background: `${theme.input.background}`,
                  border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
                  borderRadius: 50,
                  cursor: 'grab',
                  marginTop: 0,
                },
                '@supports (-ms-ime-align:auto)': {
                  'input[type=range]': { margin: '0' },
                },
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span({
              paddingLeft: 5,
              paddingRight: 5,
              fontSize: 12,
              whiteSpace: 'nowrap',
              fontFeatureSettings: 'tnum',
              fontVariantNumeric: 'tabular-nums',
              '[aria-readonly=true] &': { opacity: 0.5 },
            }))
        ;((0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
          RangeLabel
        )(({ numberOFDecimalsPlaces, max }) => ({
          width: `${numberOFDecimalsPlaces + 2 * max.toString().length + 3}ch`,
          textAlign: 'right',
          flexShrink: 0,
        })),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }))
        ;(storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.label({
          display: 'flex',
        }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ isMaxed }) => ({
              marginLeft: '0.75rem',
              paddingTop: '0.35rem',
              color: isMaxed ? 'red' : void 0,
            })
          ),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.lV.Input
          )({ padding: 10 }))
        ;((0, react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() =>
          __webpack_require__
            .e(4337)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                '../../node_modules/.pnpm/@storybook+blocks@8.6.14_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@9.0.18_@_d80ea37df0f2db1cb6e204276b9c28f2/node_modules/@storybook/blocks/dist/Color-YHDXOIA2.mjs'
              )
            )
        ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.table(
            ({ theme }) => ({
              '&&': {
                borderCollapse: 'collapse',
                borderSpacing: 0,
                border: 'none',
                tr: { border: 'none !important', background: 'none' },
                'td, th': {
                  padding: 0,
                  border: 'none',
                  width: 'auto!important',
                },
                marginTop: 0,
                marginBottom: 0,
                'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
                'th:last-of-type, td:last-of-type': { paddingRight: 0 },
                td: {
                  paddingTop: 0,
                  paddingBottom: 4,
                  '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
                },
                tbody: { boxShadow: 'none', border: 'none' },
                code: (0,
                storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.zb)({
                  theme,
                }),
                div: { span: { fontWeight: 'bold' } },
                '& code': {
                  margin: 0,
                  display: 'inline-block',
                  fontSize: theme.typography.size.s1,
                },
              },
            })
          ))
        var import_memoizerific = (0,
        _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.f1)(
          require_memoizerific()
        )
        ;(storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
          ({ isExpanded }) => ({
            display: 'flex',
            flexDirection: isExpanded ? 'column' : 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            marginBottom: '-4px',
            minWidth: 100,
          })
        ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.zb,
            ({ theme, simple = !1 }) => ({
              flex: '0 0 auto',
              fontFamily: theme.typography.fonts.mono,
              fontSize: theme.typography.size.s1,
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%',
              margin: 0,
              marginRight: '4px',
              marginBottom: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              lineHeight: '13px',
              ...(simple && {
                background: 'transparent',
                border: '0 none',
                paddingLeft: 0,
              }),
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.button(
            ({ theme }) => ({
              fontFamily: theme.typography.fonts.mono,
              color: theme.color.secondary,
              marginBottom: '4px',
              background: 'none',
              border: 'none',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.zb,
            ({ theme }) => ({
              fontFamily: theme.typography.fonts.mono,
              color: theme.color.secondary,
              fontSize: theme.typography.size.s1,
              margin: 0,
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme, width }) => ({
              width,
              minWidth: 200,
              maxWidth: 800,
              padding: 15,
              fontFamily: theme.typography.fonts.mono,
              fontSize: theme.typography.size.s1,
              boxSizing: 'content-box',
              '& code': { padding: '0 !important' },
            })
          ),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.tN5
          )({ marginLeft: 4 }),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.abt
          )({ marginLeft: 4 }),
          (0, import_memoizerific.default)(1e3)((detail) => {
            let lines = detail.split(/\r?\n/)
            return `${Math.max(...lines.map((x2) => x2.length))}ch`
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span({
            fontWeight: 'bold',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span(
            ({ theme }) => ({
              color: theme.color.negative,
              fontFamily: theme.typography.fonts.mono,
              cursor: 'help',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              '&&': {
                p: { margin: '0 0 10px 0' },
                a: { color: theme.color.secondary },
              },
              code: {
                ...(0,
                storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.zb)({
                  theme,
                }),
                fontSize: 12,
                fontFamily: theme.typography.fonts.mono,
              },
              '& code': { margin: 0, display: 'inline-block' },
              '& pre > code': { whiteSpace: 'pre-wrap' },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme, hasDescription }) => ({
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.1, theme.color.defaultText)
                  : curriedTransparentize$1(0.2, theme.color.defaultText),
              marginTop: hasDescription ? 4 : 0,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme, hasDescription }) => ({
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.1, theme.color.defaultText)
                  : curriedTransparentize$1(0.2, theme.color.defaultText),
              marginTop: hasDescription ? 12 : 0,
              marginBottom: 12,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.td(
            ({ theme, expandable }) => ({
              paddingLeft: expandable ? '40px !important' : '20px !important',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ inAddonPanel, theme }) => ({
              height: inAddonPanel ? '100%' : 'auto',
              display: 'flex',
              border: inAddonPanel
                ? 'none'
                : `1px solid ${theme.appBorderColor}`,
              borderRadius: inAddonPanel ? 0 : theme.appBorderRadius,
              padding: inAddonPanel ? 0 : 40,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 15,
              background: theme.background.content,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              display: 'flex',
              fontSize: theme.typography.size.s2 - 1,
              gap: 25,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              width: 1,
              height: 16,
              backgroundColor: theme.appBorderColor,
            })
          ),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.D3D
          )(({ theme }) => ({
            marginRight: 8,
            marginLeft: -10,
            marginTop: -2,
            height: 12,
            width: 12,
            color:
              'light' === theme.base
                ? curriedTransparentize$1(0.25, theme.color.defaultText)
                : curriedTransparentize$1(0.3, theme.color.defaultText),
            border: 'none',
            display: 'inline-block',
          })),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.vKP
          )(({ theme }) => ({
            marginRight: 8,
            marginLeft: -10,
            marginTop: -2,
            height: 12,
            width: 12,
            color:
              'light' === theme.base
                ? curriedTransparentize$1(0.25, theme.color.defaultText)
                : curriedTransparentize$1(0.3, theme.color.defaultText),
            border: 'none',
            display: 'inline-block',
          })),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span(
            ({ theme }) => ({
              display: 'flex',
              lineHeight: '20px',
              alignItems: 'center',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.td(
            ({ theme }) => ({
              position: 'relative',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontWeight: theme.typography.weight.bold,
              fontSize: theme.typography.size.s1 - 1,
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.4, theme.color.defaultText)
                  : curriedTransparentize$1(0.6, theme.color.defaultText),
              background: `${theme.background.app} !important`,
              '& ~ td': { background: `${theme.background.app} !important` },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.td(
            ({ theme }) => ({
              position: 'relative',
              fontWeight: theme.typography.weight.bold,
              fontSize: theme.typography.size.s2 - 1,
              background: theme.background.app,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.td({
            position: 'relative',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.tr(
            ({ theme }) => ({
              '&:hover > td': {
                backgroundColor: `${curriedLighten$1(0.005, theme.background.app)} !important`,
                boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`,
                cursor: 'row-resize',
              },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.button({
            background: 'none',
            border: 'none',
            padding: '0',
            font: 'inherit',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            color: 'transparent',
            cursor: 'row-resize !important',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              display: 'flex',
              gap: 16,
              borderBottom: `1px solid ${theme.appBorderColor}`,
              '&:last-child': { borderBottom: 0 },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ numColumn }) => ({
              display: 'flex',
              flexDirection: 'column',
              flex: numColumn || 1,
              gap: 5,
              padding: '12px 20px',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme, width, height }) => ({
              animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
              background: theme.appBorderColor,
              width: width || '100%',
              height: height || 16,
              borderRadius: 3,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.table(
            ({ theme, compact, inAddonPanel }) => ({
              '&&': {
                borderSpacing: 0,
                color: theme.color.defaultText,
                'td, th': {
                  padding: 0,
                  border: 'none',
                  verticalAlign: 'top',
                  textOverflow: 'ellipsis',
                },
                fontSize: theme.typography.size.s2 - 1,
                lineHeight: '20px',
                textAlign: 'left',
                width: '100%',
                marginTop: inAddonPanel ? 0 : 25,
                marginBottom: inAddonPanel ? 0 : 40,
                'thead th:first-of-type, td:first-of-type': { width: '25%' },
                'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
                'th:nth-of-type(2), td:nth-of-type(2)': {
                  ...(compact ? null : { width: '35%' }),
                },
                'td:nth-of-type(3)': { ...(compact ? null : { width: '15%' }) },
                'th:last-of-type, td:last-of-type': {
                  paddingRight: 20,
                  ...(compact ? null : { width: '25%' }),
                },
                th: {
                  color:
                    'light' === theme.base
                      ? curriedTransparentize$1(0.25, theme.color.defaultText)
                      : curriedTransparentize$1(0.45, theme.color.defaultText),
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                },
                td: {
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  '&:not(:first-of-type)': {
                    paddingLeft: 15,
                    paddingRight: 15,
                  },
                  '&:last-of-type': { paddingRight: 20 },
                },
                marginLeft: inAddonPanel ? 0 : 1,
                marginRight: inAddonPanel ? 0 : 1,
                tbody: {
                  ...(inAddonPanel
                    ? null
                    : {
                        filter:
                          'light' === theme.base
                            ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                            : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                      }),
                  '> tr > *': {
                    background: theme.background.content,
                    borderTop: `1px solid ${theme.appBorderColor}`,
                  },
                  ...(inAddonPanel
                    ? null
                    : {
                        '> tr:first-of-type > *': {
                          borderBlockStart: `1px solid ${theme.appBorderColor}`,
                        },
                        '> tr:last-of-type > *': {
                          borderBlockEnd: `1px solid ${theme.appBorderColor}`,
                        },
                        '> tr > *:first-of-type': {
                          borderInlineStart: `1px solid ${theme.appBorderColor}`,
                        },
                        '> tr > *:last-of-type': {
                          borderInlineEnd: `1px solid ${theme.appBorderColor}`,
                        },
                        '> tr:first-of-type > td:first-of-type': {
                          borderTopLeftRadius: theme.appBorderRadius,
                        },
                        '> tr:first-of-type > td:last-of-type': {
                          borderTopRightRadius: theme.appBorderRadius,
                        },
                        '> tr:last-of-type > td:first-of-type': {
                          borderBottomLeftRadius: theme.appBorderRadius,
                        },
                        '> tr:last-of-type > td:last-of-type': {
                          borderBottomRightRadius: theme.appBorderRadius,
                        },
                      }),
                },
              },
            })
          ),
          (0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.K0
          )(({ theme }) => ({ margin: '-4px -12px -4px 0' })),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.span({
            display: 'flex',
            justifyContent: 'space-between',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              marginRight: 30,
              fontSize: `${theme.typography.size.s1}px`,
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.4, theme.color.defaultText)
                  : curriedTransparentize$1(0.6, theme.color.defaultText),
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            '&:not(:last-child)': { marginBottom: '1rem' },
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.YV,
            ({ theme }) => ({
              ...getBlockBackgroundStyle(theme),
              margin: '25px 0 40px',
              padding: '30px 20px',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              fontWeight: theme.typography.weight.bold,
              color: theme.color.defaultText,
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.2, theme.color.defaultText)
                  : curriedTransparentize$1(0.6, theme.color.defaultText),
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            flex: '0 0 30%',
            lineHeight: '20px',
            marginTop: 5,
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              flex: 1,
              textAlign: 'center',
              fontFamily: theme.typography.fonts.mono,
              fontSize: theme.typography.size.s1,
              lineHeight: 1,
              overflow: 'hidden',
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.4, theme.color.defaultText)
                  : curriedTransparentize$1(0.6, theme.color.defaultText),
              '> div': {
                display: 'inline-block',
                overflow: 'hidden',
                maxWidth: '100%',
                textOverflow: 'ellipsis',
              },
              span: { display: 'block', marginTop: 2 },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            flexDirection: 'row',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ background }) => ({
              position: 'relative',
              flex: 1,
              '&::before': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background,
                content: '""',
              },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              ...getBlockBackgroundStyle(theme),
              display: 'flex',
              flexDirection: 'row',
              height: 50,
              marginBottom: 5,
              overflow: 'hidden',
              backgroundColor: 'white',
              backgroundImage:
                'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
              backgroundClip: 'padding-box',
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: 'relative',
            marginBottom: 30,
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            alignItems: 'flex-start',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            flex: '0 0 30%',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            flex: 1,
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
              fontWeight: theme.typography.weight.bold,
              color:
                'light' === theme.base
                  ? curriedTransparentize$1(0.4, theme.color.defaultText)
                  : curriedTransparentize$1(0.6, theme.color.defaultText),
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              fontSize: theme.typography.size.s2,
              lineHeight: '20px',
              display: 'flex',
              flexDirection: 'column',
            })
          ))
        ;(storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
          ({ theme }) => ({
            fontFamily: theme.typography.fonts.base,
            fontSize: theme.typography.size.s2,
            color: theme.color.defaultText,
            marginLeft: 10,
            lineHeight: 1.2,
          })
        ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
            ({ theme }) => ({
              ...getBlockBackgroundStyle(theme),
              overflow: 'hidden',
              height: 40,
              width: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              '> img, > svg': { width: 20, height: 20 },
            })
          ),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: '0 1 calc(20% - 10px)',
            minWidth: 120,
            margin: '0px 10px 30px 0',
          }),
          storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div({
            display: 'flex',
            flexFlow: 'row wrap',
          }))
        var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`,
          Anchor = ({ storyId, children }) =>
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'div',
              { id: anchorBlockIdFromId(storyId), className: 'sb-anchor' },
              children
            )
        globalThis &&
          void 0 === globalThis.__DOCS_CONTEXT__ &&
          ((globalThis.__DOCS_CONTEXT__ = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null)),
          (globalThis.__DOCS_CONTEXT__.displayName = 'DocsContext'))
        var DocsContext = globalThis
          ? globalThis.__DOCS_CONTEXT__
          : (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null)
        var __create = Object.create,
          __defProp = Object.defineProperty,
          __getOwnPropDesc = Object.getOwnPropertyDescriptor,
          __getOwnPropNames = Object.getOwnPropertyNames,
          __getProtoOf = Object.getPrototypeOf,
          __hasOwnProp = Object.prototype.hasOwnProperty,
          __commonJS2 = (cb, mod) =>
            function () {
              return (
                mod ||
                  (0, cb[__getOwnPropNames(cb)[0]])(
                    (mod = { exports: {} }).exports,
                    mod
                  ),
                mod.exports
              )
            },
          __toESM2 = (mod, isNodeMode, target) => (
            (target = null != mod ? __create(__getProtoOf(mod)) : {}),
            ((to, from, except, desc) => {
              if (
                (from && 'object' == typeof from) ||
                'function' == typeof from
              )
                for (let key2 of __getOwnPropNames(from))
                  !__hasOwnProp.call(to, key2) &&
                    key2 !== except &&
                    __defProp(to, key2, {
                      get: () => from[key2],
                      enumerable:
                        !(desc = __getOwnPropDesc(from, key2)) ||
                        desc.enumerable,
                    })
              return to
            })(
              !isNodeMode && mod && mod.__esModule
                ? target
                : __defProp(target, 'default', { value: mod, enumerable: !0 }),
              mod
            )
          )
        var import_memoizerific2 = (0,
          _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.f1)(
            require_memoizerific(),
            1
          ),
          require_shams = __commonJS2({
            'node_modules/has-symbols/shams.js'(exports, module) {
              module.exports = function () {
                if (
                  'function' != typeof Symbol ||
                  'function' != typeof Object.getOwnPropertySymbols
                )
                  return !1
                if ('symbol' == typeof Symbol.iterator) return !0
                var obj = {},
                  sym = Symbol('test'),
                  symObj = Object(sym)
                if (
                  'string' == typeof sym ||
                  '[object Symbol]' !== Object.prototype.toString.call(sym) ||
                  '[object Symbol]' !== Object.prototype.toString.call(symObj)
                )
                  return !1
                for (sym in ((obj[sym] = 42), obj)) return !1
                if (
                  ('function' == typeof Object.keys &&
                    0 !== Object.keys(obj).length) ||
                  ('function' == typeof Object.getOwnPropertyNames &&
                    0 !== Object.getOwnPropertyNames(obj).length)
                )
                  return !1
                var syms = Object.getOwnPropertySymbols(obj)
                if (
                  1 !== syms.length ||
                  syms[0] !== sym ||
                  !Object.prototype.propertyIsEnumerable.call(obj, sym)
                )
                  return !1
                if ('function' == typeof Object.getOwnPropertyDescriptor) {
                  var descriptor = Object.getOwnPropertyDescriptor(obj, sym)
                  if (42 !== descriptor.value || !0 !== descriptor.enumerable)
                    return !1
                }
                return !0
              }
            },
          }),
          require_has_symbols = __commonJS2({
            'node_modules/has-symbols/index.js'(exports, module) {
              var origSymbol = typeof Symbol < 'u' && Symbol,
                hasSymbolSham = require_shams()
              module.exports = function () {
                return (
                  'function' == typeof origSymbol &&
                  'function' == typeof Symbol &&
                  'symbol' == typeof origSymbol('foo') &&
                  'symbol' == typeof Symbol('bar') &&
                  hasSymbolSham()
                )
              }
            },
          }),
          require_implementation = __commonJS2({
            'node_modules/function-bind/implementation.js'(exports, module) {
              var slice = Array.prototype.slice,
                toStr = Object.prototype.toString
              module.exports = function (that) {
                var target = this
                if (
                  'function' != typeof target ||
                  '[object Function]' !== toStr.call(target)
                )
                  throw new TypeError(
                    'Function.prototype.bind called on incompatible ' + target
                  )
                for (
                  var bound,
                    args2 = slice.call(arguments, 1),
                    boundLength = Math.max(0, target.length - args2.length),
                    boundArgs = [],
                    i2 = 0;
                  i2 < boundLength;
                  i2++
                )
                  boundArgs.push('$' + i2)
                if (
                  ((bound = Function(
                    'binder',
                    'return function (' +
                      boundArgs.join(',') +
                      '){ return binder.apply(this,arguments); }'
                  )(function () {
                    if (this instanceof bound) {
                      var result2 = target.apply(
                        this,
                        args2.concat(slice.call(arguments))
                      )
                      return Object(result2) === result2 ? result2 : this
                    }
                    return target.apply(
                      that,
                      args2.concat(slice.call(arguments))
                    )
                  })),
                  target.prototype)
                ) {
                  var Empty2 = function () {}
                  ;((Empty2.prototype = target.prototype),
                    (bound.prototype = new Empty2()),
                    (Empty2.prototype = null))
                }
                return bound
              }
            },
          }),
          require_function_bind = __commonJS2({
            'node_modules/function-bind/index.js'(exports, module) {
              var implementation = require_implementation()
              module.exports = Function.prototype.bind || implementation
            },
          }),
          require_src = __commonJS2({
            'node_modules/has/src/index.js'(exports, module) {
              var bind = require_function_bind()
              module.exports = bind.call(
                Function.call,
                Object.prototype.hasOwnProperty
              )
            },
          }),
          require_get_intrinsic = __commonJS2({
            'node_modules/get-intrinsic/index.js'(exports, module) {
              var $SyntaxError = SyntaxError,
                $Function = Function,
                $TypeError = TypeError,
                getEvalledConstructor = function (expressionSyntax) {
                  try {
                    return $Function(
                      '"use strict"; return (' +
                        expressionSyntax +
                        ').constructor;'
                    )()
                  } catch {}
                },
                $gOPD = Object.getOwnPropertyDescriptor
              if ($gOPD)
                try {
                  $gOPD({}, '')
                } catch {
                  $gOPD = null
                }
              var throwTypeError = function () {
                  throw new $TypeError()
                },
                ThrowTypeError = $gOPD
                  ? (function () {
                      try {
                        return throwTypeError
                      } catch {
                        try {
                          return $gOPD(arguments, 'callee').get
                        } catch {
                          return throwTypeError
                        }
                      }
                    })()
                  : throwTypeError,
                hasSymbols = require_has_symbols()(),
                getProto =
                  Object.getPrototypeOf ||
                  function (x2) {
                    return x2.__proto__
                  },
                needsEval = {},
                TypedArray =
                  typeof Uint8Array > 'u' ? undefined : getProto(Uint8Array),
                INTRINSICS = {
                  '%AggregateError%':
                    typeof AggregateError > 'u' ? undefined : AggregateError,
                  '%Array%': Array,
                  '%ArrayBuffer%':
                    typeof ArrayBuffer > 'u' ? undefined : ArrayBuffer,
                  '%ArrayIteratorPrototype%': hasSymbols
                    ? getProto([][Symbol.iterator]())
                    : undefined,
                  '%AsyncFromSyncIteratorPrototype%': undefined,
                  '%AsyncFunction%': needsEval,
                  '%AsyncGenerator%': needsEval,
                  '%AsyncGeneratorFunction%': needsEval,
                  '%AsyncIteratorPrototype%': needsEval,
                  '%Atomics%': typeof Atomics > 'u' ? undefined : Atomics,
                  '%BigInt%': typeof BigInt > 'u' ? undefined : BigInt,
                  '%Boolean%': Boolean,
                  '%DataView%': typeof DataView > 'u' ? undefined : DataView,
                  '%Date%': Date,
                  '%decodeURI%': decodeURI,
                  '%decodeURIComponent%': decodeURIComponent,
                  '%encodeURI%': encodeURI,
                  '%encodeURIComponent%': encodeURIComponent,
                  '%Error%': Error,
                  '%eval%': eval,
                  '%EvalError%': EvalError,
                  '%Float32Array%':
                    typeof Float32Array > 'u' ? undefined : Float32Array,
                  '%Float64Array%':
                    typeof Float64Array > 'u' ? undefined : Float64Array,
                  '%FinalizationRegistry%':
                    typeof FinalizationRegistry > 'u'
                      ? undefined
                      : FinalizationRegistry,
                  '%Function%': $Function,
                  '%GeneratorFunction%': needsEval,
                  '%Int8Array%': typeof Int8Array > 'u' ? undefined : Int8Array,
                  '%Int16Array%':
                    typeof Int16Array > 'u' ? undefined : Int16Array,
                  '%Int32Array%':
                    typeof Int32Array > 'u' ? undefined : Int32Array,
                  '%isFinite%': isFinite,
                  '%isNaN%': isNaN,
                  '%IteratorPrototype%': hasSymbols
                    ? getProto(getProto([][Symbol.iterator]()))
                    : undefined,
                  '%JSON%': 'object' == typeof JSON ? JSON : undefined,
                  '%Map%': typeof Map > 'u' ? undefined : Map,
                  '%MapIteratorPrototype%':
                    typeof Map > 'u' || !hasSymbols
                      ? undefined
                      : getProto(new Map()[Symbol.iterator]()),
                  '%Math%': Math,
                  '%Number%': Number,
                  '%Object%': Object,
                  '%parseFloat%': parseFloat,
                  '%parseInt%': parseInt,
                  '%Promise%': typeof Promise > 'u' ? undefined : Promise,
                  '%Proxy%': typeof Proxy > 'u' ? undefined : Proxy,
                  '%RangeError%': RangeError,
                  '%ReferenceError%': ReferenceError,
                  '%Reflect%': typeof Reflect > 'u' ? undefined : Reflect,
                  '%RegExp%': RegExp,
                  '%Set%': typeof Set > 'u' ? undefined : Set,
                  '%SetIteratorPrototype%':
                    typeof Set > 'u' || !hasSymbols
                      ? undefined
                      : getProto(new Set()[Symbol.iterator]()),
                  '%SharedArrayBuffer%':
                    typeof SharedArrayBuffer > 'u'
                      ? undefined
                      : SharedArrayBuffer,
                  '%String%': String,
                  '%StringIteratorPrototype%': hasSymbols
                    ? getProto(''[Symbol.iterator]())
                    : undefined,
                  '%Symbol%': hasSymbols ? Symbol : undefined,
                  '%SyntaxError%': $SyntaxError,
                  '%ThrowTypeError%': ThrowTypeError,
                  '%TypedArray%': TypedArray,
                  '%TypeError%': $TypeError,
                  '%Uint8Array%':
                    typeof Uint8Array > 'u' ? undefined : Uint8Array,
                  '%Uint8ClampedArray%':
                    typeof Uint8ClampedArray > 'u'
                      ? undefined
                      : Uint8ClampedArray,
                  '%Uint16Array%':
                    typeof Uint16Array > 'u' ? undefined : Uint16Array,
                  '%Uint32Array%':
                    typeof Uint32Array > 'u' ? undefined : Uint32Array,
                  '%URIError%': URIError,
                  '%WeakMap%': typeof WeakMap > 'u' ? undefined : WeakMap,
                  '%WeakRef%': typeof WeakRef > 'u' ? undefined : WeakRef,
                  '%WeakSet%': typeof WeakSet > 'u' ? undefined : WeakSet,
                },
                doEval = function doEval2(name2) {
                  var value22
                  if ('%AsyncFunction%' === name2)
                    value22 = getEvalledConstructor('async function () {}')
                  else if ('%GeneratorFunction%' === name2)
                    value22 = getEvalledConstructor('function* () {}')
                  else if ('%AsyncGeneratorFunction%' === name2)
                    value22 = getEvalledConstructor('async function* () {}')
                  else if ('%AsyncGenerator%' === name2) {
                    var fn = doEval2('%AsyncGeneratorFunction%')
                    fn && (value22 = fn.prototype)
                  } else if ('%AsyncIteratorPrototype%' === name2) {
                    var gen = doEval2('%AsyncGenerator%')
                    gen && (value22 = getProto(gen.prototype))
                  }
                  return ((INTRINSICS[name2] = value22), value22)
                },
                LEGACY_ALIASES = {
                  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
                  '%ArrayPrototype%': ['Array', 'prototype'],
                  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
                  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
                  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
                  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
                  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
                  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
                  '%AsyncGeneratorPrototype%': [
                    'AsyncGeneratorFunction',
                    'prototype',
                    'prototype',
                  ],
                  '%BooleanPrototype%': ['Boolean', 'prototype'],
                  '%DataViewPrototype%': ['DataView', 'prototype'],
                  '%DatePrototype%': ['Date', 'prototype'],
                  '%ErrorPrototype%': ['Error', 'prototype'],
                  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
                  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
                  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
                  '%FunctionPrototype%': ['Function', 'prototype'],
                  '%Generator%': ['GeneratorFunction', 'prototype'],
                  '%GeneratorPrototype%': [
                    'GeneratorFunction',
                    'prototype',
                    'prototype',
                  ],
                  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
                  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
                  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
                  '%JSONParse%': ['JSON', 'parse'],
                  '%JSONStringify%': ['JSON', 'stringify'],
                  '%MapPrototype%': ['Map', 'prototype'],
                  '%NumberPrototype%': ['Number', 'prototype'],
                  '%ObjectPrototype%': ['Object', 'prototype'],
                  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
                  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
                  '%PromisePrototype%': ['Promise', 'prototype'],
                  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
                  '%Promise_all%': ['Promise', 'all'],
                  '%Promise_reject%': ['Promise', 'reject'],
                  '%Promise_resolve%': ['Promise', 'resolve'],
                  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
                  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
                  '%RegExpPrototype%': ['RegExp', 'prototype'],
                  '%SetPrototype%': ['Set', 'prototype'],
                  '%SharedArrayBufferPrototype%': [
                    'SharedArrayBuffer',
                    'prototype',
                  ],
                  '%StringPrototype%': ['String', 'prototype'],
                  '%SymbolPrototype%': ['Symbol', 'prototype'],
                  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
                  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
                  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
                  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
                  '%Uint8ClampedArrayPrototype%': [
                    'Uint8ClampedArray',
                    'prototype',
                  ],
                  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
                  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
                  '%URIErrorPrototype%': ['URIError', 'prototype'],
                  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
                  '%WeakSetPrototype%': ['WeakSet', 'prototype'],
                },
                bind = require_function_bind(),
                hasOwn = require_src(),
                $concat = bind.call(Function.call, Array.prototype.concat),
                $spliceApply = bind.call(
                  Function.apply,
                  Array.prototype.splice
                ),
                $replace = bind.call(Function.call, String.prototype.replace),
                $strSlice = bind.call(Function.call, String.prototype.slice),
                $exec = bind.call(Function.call, RegExp.prototype.exec),
                rePropName2 =
                  /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                reEscapeChar2 = /\\(\\)?/g,
                getBaseIntrinsic = function (name2, allowMissing) {
                  var alias,
                    intrinsicName = name2
                  if (
                    (hasOwn(LEGACY_ALIASES, intrinsicName) &&
                      (intrinsicName =
                        '%' + (alias = LEGACY_ALIASES[intrinsicName])[0] + '%'),
                    hasOwn(INTRINSICS, intrinsicName))
                  ) {
                    var value22 = INTRINSICS[intrinsicName]
                    if (
                      (value22 === needsEval &&
                        (value22 = doEval(intrinsicName)),
                      typeof value22 > 'u' && !allowMissing)
                    )
                      throw new $TypeError(
                        'intrinsic ' +
                          name2 +
                          ' exists, but is not available. Please file an issue!'
                      )
                    return { alias, name: intrinsicName, value: value22 }
                  }
                  throw new $SyntaxError(
                    'intrinsic ' + name2 + ' does not exist!'
                  )
                }
              module.exports = function (name2, allowMissing) {
                if ('string' != typeof name2 || 0 === name2.length)
                  throw new $TypeError(
                    'intrinsic name must be a non-empty string'
                  )
                if (arguments.length > 1 && 'boolean' != typeof allowMissing)
                  throw new $TypeError(
                    '"allowMissing" argument must be a boolean'
                  )
                if (null === $exec(/^%?[^%]*%?$/, name2))
                  throw new $SyntaxError(
                    '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
                  )
                var parts = (function (string) {
                    var first = $strSlice(string, 0, 1),
                      last = $strSlice(string, -1)
                    if ('%' === first && '%' !== last)
                      throw new $SyntaxError(
                        'invalid intrinsic syntax, expected closing `%`'
                      )
                    if ('%' === last && '%' !== first)
                      throw new $SyntaxError(
                        'invalid intrinsic syntax, expected opening `%`'
                      )
                    var result2 = []
                    return (
                      $replace(
                        string,
                        rePropName2,
                        function (match, number, quote, subString) {
                          result2[result2.length] = quote
                            ? $replace(subString, reEscapeChar2, '$1')
                            : number || match
                        }
                      ),
                      result2
                    )
                  })(name2),
                  intrinsicBaseName = parts.length > 0 ? parts[0] : '',
                  intrinsic = getBaseIntrinsic(
                    '%' + intrinsicBaseName + '%',
                    allowMissing
                  ),
                  intrinsicRealName = intrinsic.name,
                  value22 = intrinsic.value,
                  skipFurtherCaching = !1,
                  alias = intrinsic.alias
                alias &&
                  ((intrinsicBaseName = alias[0]),
                  $spliceApply(parts, $concat([0, 1], alias)))
                for (var i2 = 1, isOwn = !0; i2 < parts.length; i2 += 1) {
                  var part = parts[i2],
                    first = $strSlice(part, 0, 1),
                    last = $strSlice(part, -1)
                  if (
                    ('"' === first ||
                      "'" === first ||
                      '`' === first ||
                      '"' === last ||
                      "'" === last ||
                      '`' === last) &&
                    first !== last
                  )
                    throw new $SyntaxError(
                      'property names with quotes must have matching quotes'
                    )
                  if (
                    (('constructor' === part || !isOwn) &&
                      (skipFurtherCaching = !0),
                    hasOwn(
                      INTRINSICS,
                      (intrinsicRealName =
                        '%' + (intrinsicBaseName += '.' + part) + '%')
                    ))
                  )
                    value22 = INTRINSICS[intrinsicRealName]
                  else if (null != value22) {
                    if (!(part in value22)) {
                      if (!allowMissing)
                        throw new $TypeError(
                          'base intrinsic for ' +
                            name2 +
                            ' exists, but the property is not available.'
                        )
                      return
                    }
                    if ($gOPD && i2 + 1 >= parts.length) {
                      var desc = $gOPD(value22, part)
                      value22 =
                        (isOwn = !!desc) &&
                        'get' in desc &&
                        !('originalValue' in desc.get)
                          ? desc.get
                          : value22[part]
                    } else
                      ((isOwn = hasOwn(value22, part)),
                        (value22 = value22[part]))
                    isOwn &&
                      !skipFurtherCaching &&
                      (INTRINSICS[intrinsicRealName] = value22)
                  }
                }
                return value22
              }
            },
          }),
          require_call_bind = __commonJS2({
            'node_modules/call-bind/index.js'(exports, module) {
              var bind = require_function_bind(),
                GetIntrinsic = require_get_intrinsic(),
                $apply = GetIntrinsic('%Function.prototype.apply%'),
                $call = GetIntrinsic('%Function.prototype.call%'),
                $reflectApply =
                  GetIntrinsic('%Reflect.apply%', !0) ||
                  bind.call($call, $apply),
                $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', !0),
                $defineProperty = GetIntrinsic('%Object.defineProperty%', !0),
                $max = GetIntrinsic('%Math.max%')
              if ($defineProperty)
                try {
                  $defineProperty({}, 'a', { value: 1 })
                } catch {
                  $defineProperty = null
                }
              module.exports = function (originalFunction) {
                var func = $reflectApply(bind, $call, arguments)
                $gOPD &&
                  $defineProperty &&
                  $gOPD(func, 'length').configurable &&
                  $defineProperty(func, 'length', {
                    value:
                      1 +
                      $max(0, originalFunction.length - (arguments.length - 1)),
                  })
                return func
              }
              var applyBind = function () {
                return $reflectApply(bind, $apply, arguments)
              }
              $defineProperty
                ? $defineProperty(module.exports, 'apply', { value: applyBind })
                : (module.exports.apply = applyBind)
            },
          }),
          require_callBound = __commonJS2({
            'node_modules/call-bind/callBound.js'(exports, module) {
              var GetIntrinsic = require_get_intrinsic(),
                callBind = require_call_bind(),
                $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'))
              module.exports = function (name2, allowMissing) {
                var intrinsic = GetIntrinsic(name2, !!allowMissing)
                return 'function' == typeof intrinsic &&
                  $indexOf(name2, '.prototype.') > -1
                  ? callBind(intrinsic)
                  : intrinsic
              }
            },
          }),
          require_shams2 = __commonJS2({
            'node_modules/has-tostringtag/shams.js'(exports, module) {
              var hasSymbols = require_shams()
              module.exports = function () {
                return hasSymbols() && !!Symbol.toStringTag
              }
            },
          }),
          require_is_regex = __commonJS2({
            'node_modules/is-regex/index.js'(exports, module) {
              var has,
                $exec,
                isRegexMarker,
                badStringifier,
                callBound = require_callBound(),
                hasToStringTag = require_shams2()()
              hasToStringTag &&
                ((has = callBound('Object.prototype.hasOwnProperty')),
                ($exec = callBound('RegExp.prototype.exec')),
                (isRegexMarker = {}),
                (badStringifier = {
                  toString: (throwRegexMarker = function () {
                    throw isRegexMarker
                  }),
                  valueOf: throwRegexMarker,
                }),
                'symbol' == typeof Symbol.toPrimitive &&
                  (badStringifier[Symbol.toPrimitive] = throwRegexMarker))
              var throwRegexMarker,
                $toString = callBound('Object.prototype.toString'),
                gOPD = Object.getOwnPropertyDescriptor
              module.exports = hasToStringTag
                ? function (value22) {
                    if (!value22 || 'object' != typeof value22) return !1
                    var descriptor = gOPD(value22, 'lastIndex')
                    if (!(descriptor && has(descriptor, 'value'))) return !1
                    try {
                      $exec(value22, badStringifier)
                    } catch (e2) {
                      return e2 === isRegexMarker
                    }
                  }
                : function (value22) {
                    return (
                      !(
                        !value22 ||
                        ('object' != typeof value22 &&
                          'function' != typeof value22)
                      ) && '[object RegExp]' === $toString(value22)
                    )
                  }
            },
          }),
          require_is_function = __commonJS2({
            'node_modules/is-function/index.js'(exports, module) {
              module.exports = function isFunction3(fn) {
                if (!fn) return !1
                var string = toString2.call(fn)
                return (
                  '[object Function]' === string ||
                  ('function' == typeof fn && '[object RegExp]' !== string) ||
                  (typeof window < 'u' &&
                    (fn === window.setTimeout ||
                      fn === window.alert ||
                      fn === window.confirm ||
                      fn === window.prompt))
                )
              }
              var toString2 = Object.prototype.toString
            },
          }),
          require_is_symbol = __commonJS2({
            'node_modules/is-symbol/index.js'(exports, module) {
              var symToStr,
                symStringRegex,
                isSymbolObject,
                toStr = Object.prototype.toString
              require_has_symbols()()
                ? ((symToStr = Symbol.prototype.toString),
                  (symStringRegex = /^Symbol\(.*\)$/),
                  (isSymbolObject = function (value22) {
                    return (
                      'symbol' == typeof value22.valueOf() &&
                      symStringRegex.test(symToStr.call(value22))
                    )
                  }),
                  (module.exports = function (value22) {
                    if ('symbol' == typeof value22) return !0
                    if ('[object Symbol]' !== toStr.call(value22)) return !1
                    try {
                      return isSymbolObject(value22)
                    } catch {
                      return !1
                    }
                  }))
                : (module.exports = function (value22) {
                    return !1
                  })
            },
          })
        ;(__toESM2(require_is_regex()),
          __toESM2(require_is_function()),
          __toESM2(require_is_symbol()))
        var freeGlobal_default =
            'object' == typeof __webpack_require__.g &&
            __webpack_require__.g &&
            __webpack_require__.g.Object === Object &&
            __webpack_require__.g,
          freeSelf =
            'object' == typeof self && self && self.Object === Object && self,
          root_default =
            freeGlobal_default || freeSelf || Function('return this')(),
          Symbol_default = root_default.Symbol,
          objectProto = Object.prototype,
          hasOwnProperty = objectProto.hasOwnProperty,
          nativeObjectToString = objectProto.toString,
          symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0
        var getRawTag_default = function getRawTag(value22) {
            var isOwn = hasOwnProperty.call(value22, symToStringTag),
              tag = value22[symToStringTag]
            try {
              value22[symToStringTag] = void 0
              var unmasked = !0
            } catch {}
            var result2 = nativeObjectToString.call(value22)
            return (
              unmasked &&
                (isOwn
                  ? (value22[symToStringTag] = tag)
                  : delete value22[symToStringTag]),
              result2
            )
          },
          nativeObjectToString2 = Object.prototype.toString
        var objectToString_default = function objectToString(value22) {
            return nativeObjectToString2.call(value22)
          },
          symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0
        var baseGetTag_default = function baseGetTag(value22) {
            return null == value22
              ? void 0 === value22
                ? '[object Undefined]'
                : '[object Null]'
              : symToStringTag2 && symToStringTag2 in Object(value22)
                ? getRawTag_default(value22)
                : objectToString_default(value22)
          },
          symbolProto = Symbol_default ? Symbol_default.prototype : void 0
        symbolProto && symbolProto.toString
        var isObject_default = function isObject2(value22) {
          var type = typeof value22
          return null != value22 && ('object' == type || 'function' == type)
        }
        var uid,
          isFunction_default = function isFunction(value22) {
            if (!isObject_default(value22)) return !1
            var tag = baseGetTag_default(value22)
            return (
              '[object Function]' == tag ||
              '[object GeneratorFunction]' == tag ||
              '[object AsyncFunction]' == tag ||
              '[object Proxy]' == tag
            )
          },
          coreJsData_default = root_default['__core-js_shared__'],
          maskSrcKey = (uid = /[^.]+$/.exec(
            (coreJsData_default &&
              coreJsData_default.keys &&
              coreJsData_default.keys.IE_PROTO) ||
              ''
          ))
            ? 'Symbol(src)_1.' + uid
            : ''
        var isMasked_default = function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func
          },
          funcToString = Function.prototype.toString
        var toSource_default = function toSource(func) {
            if (null != func) {
              try {
                return funcToString.call(func)
              } catch {}
              try {
                return func + ''
              } catch {}
            }
            return ''
          },
          reIsHostCtor = /^\[object .+?Constructor\]$/,
          funcProto2 = Function.prototype,
          objectProto3 = Object.prototype,
          funcToString2 = funcProto2.toString,
          hasOwnProperty2 = objectProto3.hasOwnProperty,
          reIsNative = RegExp(
            '^' +
              funcToString2
                .call(hasOwnProperty2)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          )
        var baseIsNative_default = function baseIsNative(value22) {
          return (
            !(!isObject_default(value22) || isMasked_default(value22)) &&
            (isFunction_default(value22) ? reIsNative : reIsHostCtor).test(
              toSource_default(value22)
            )
          )
        }
        var getValue_default = function getValue(object2, key2) {
          return object2?.[key2]
        }
        var getNative_default = function getNative(object2, key2) {
          var value22 = getValue_default(object2, key2)
          return baseIsNative_default(value22) ? value22 : void 0
        }
        var eq_default = function eq(value22, other) {
            return value22 === other || (value22 != value22 && other != other)
          },
          nativeCreate_default = getNative_default(Object, 'create')
        var hashClear_default = function hashClear() {
          ;((this.__data__ = nativeCreate_default
            ? nativeCreate_default(null)
            : {}),
            (this.size = 0))
        }
        var hashDelete_default = function hashDelete(key2) {
            var result2 = this.has(key2) && delete this.__data__[key2]
            return ((this.size -= result2 ? 1 : 0), result2)
          },
          hasOwnProperty3 = Object.prototype.hasOwnProperty
        var hashGet_default = function hashGet(key2) {
            var data = this.__data__
            if (nativeCreate_default) {
              var result2 = data[key2]
              return '__lodash_hash_undefined__' === result2 ? void 0 : result2
            }
            return hasOwnProperty3.call(data, key2) ? data[key2] : void 0
          },
          hasOwnProperty4 = Object.prototype.hasOwnProperty
        var hashHas_default = function hashHas(key2) {
          var data = this.__data__
          return nativeCreate_default
            ? void 0 !== data[key2]
            : hasOwnProperty4.call(data, key2)
        }
        var hashSet_default = function hashSet(key2, value22) {
          var data = this.__data__
          return (
            (this.size += this.has(key2) ? 0 : 1),
            (data[key2] =
              nativeCreate_default && void 0 === value22
                ? '__lodash_hash_undefined__'
                : value22),
            this
          )
        }
        function Hash(entries) {
          var index = -1,
            length = null == entries ? 0 : entries.length
          for (this.clear(); ++index < length; ) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }
        ;((Hash.prototype.clear = hashClear_default),
          (Hash.prototype.delete = hashDelete_default),
          (Hash.prototype.get = hashGet_default),
          (Hash.prototype.has = hashHas_default),
          (Hash.prototype.set = hashSet_default))
        var Hash_default = Hash
        var listCacheClear_default = function listCacheClear() {
          ;((this.__data__ = []), (this.size = 0))
        }
        var assocIndexOf_default = function assocIndexOf(array2, key2) {
            for (var length = array2.length; length--; )
              if (eq_default(array2[length][0], key2)) return length
            return -1
          },
          splice = Array.prototype.splice
        var listCacheDelete_default = function listCacheDelete(key2) {
          var data = this.__data__,
            index = assocIndexOf_default(data, key2)
          return (
            !(index < 0) &&
            (index == data.length - 1
              ? data.pop()
              : splice.call(data, index, 1),
            --this.size,
            !0)
          )
        }
        var listCacheGet_default = function listCacheGet(key2) {
          var data = this.__data__,
            index = assocIndexOf_default(data, key2)
          return index < 0 ? void 0 : data[index][1]
        }
        var listCacheHas_default = function listCacheHas(key2) {
          return assocIndexOf_default(this.__data__, key2) > -1
        }
        var listCacheSet_default = function listCacheSet(key2, value22) {
          var data = this.__data__,
            index = assocIndexOf_default(data, key2)
          return (
            index < 0
              ? (++this.size, data.push([key2, value22]))
              : (data[index][1] = value22),
            this
          )
        }
        function ListCache(entries) {
          var index = -1,
            length = null == entries ? 0 : entries.length
          for (this.clear(); ++index < length; ) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }
        ;((ListCache.prototype.clear = listCacheClear_default),
          (ListCache.prototype.delete = listCacheDelete_default),
          (ListCache.prototype.get = listCacheGet_default),
          (ListCache.prototype.has = listCacheHas_default),
          (ListCache.prototype.set = listCacheSet_default))
        var ListCache_default = ListCache,
          Map_default = getNative_default(root_default, 'Map')
        var mapCacheClear_default = function mapCacheClear() {
          ;((this.size = 0),
            (this.__data__ = {
              hash: new Hash_default(),
              map: new (Map_default || ListCache_default)(),
              string: new Hash_default(),
            }))
        }
        var isKeyable_default = function isKeyable(value22) {
          var type = typeof value22
          return 'string' == type ||
            'number' == type ||
            'symbol' == type ||
            'boolean' == type
            ? '__proto__' !== value22
            : null === value22
        }
        var getMapData_default = function getMapData(map, key2) {
          var data = map.__data__
          return isKeyable_default(key2)
            ? data['string' == typeof key2 ? 'string' : 'hash']
            : data.map
        }
        var mapCacheDelete_default = function mapCacheDelete(key2) {
          var result2 = getMapData_default(this, key2).delete(key2)
          return ((this.size -= result2 ? 1 : 0), result2)
        }
        var mapCacheGet_default = function mapCacheGet(key2) {
          return getMapData_default(this, key2).get(key2)
        }
        var mapCacheHas_default = function mapCacheHas(key2) {
          return getMapData_default(this, key2).has(key2)
        }
        var mapCacheSet_default = function mapCacheSet(key2, value22) {
          var data = getMapData_default(this, key2),
            size = data.size
          return (
            data.set(key2, value22),
            (this.size += data.size == size ? 0 : 1),
            this
          )
        }
        function MapCache(entries) {
          var index = -1,
            length = null == entries ? 0 : entries.length
          for (this.clear(); ++index < length; ) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }
        ;((MapCache.prototype.clear = mapCacheClear_default),
          (MapCache.prototype.delete = mapCacheDelete_default),
          (MapCache.prototype.get = mapCacheGet_default),
          (MapCache.prototype.has = mapCacheHas_default),
          (MapCache.prototype.set = mapCacheSet_default))
        var MapCache_default = MapCache
        function memoize3(func, resolver) {
          if (
            'function' != typeof func ||
            (null != resolver && 'function' != typeof resolver)
          )
            throw new TypeError('Expected a function')
          var memoized = function () {
            var args2 = arguments,
              key2 = resolver ? resolver.apply(this, args2) : args2[0],
              cache = memoized.cache
            if (cache.has(key2)) return cache.get(key2)
            var result2 = func.apply(this, args2)
            return (
              (memoized.cache = cache.set(key2, result2) || cache),
              result2
            )
          }
          return (
            (memoized.cache = new (memoize3.Cache || MapCache_default)()),
            memoized
          )
        }
        memoize3.Cache = MapCache_default
        var memoize_default = memoize3
        var rePropName =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          reEscapeChar = /\\(\\)?/g
        ;(function memoizeCapped(func) {
          var result2 = memoize_default(func, function (key2) {
              return (500 === cache.size && cache.clear(), key2)
            }),
            cache = result2.cache
          return result2
        })(function (string) {
          var result2 = []
          return (
            46 === string.charCodeAt(0) && result2.push(''),
            string.replace(
              rePropName,
              function (match, number, quote, subString) {
                result2.push(
                  quote
                    ? subString.replace(reEscapeChar, '$1')
                    : number || match
                )
              }
            ),
            result2
          )
        })
        ;(0, import_memoizerific2.default)(1e4)((code) =>
          ((code) => {
            let inQuoteChar = null,
              inBlockComment = !1,
              inLineComment = !1,
              inRegexLiteral = !1,
              newCode = ''
            if (code.indexOf('//') >= 0 || code.indexOf('/*') >= 0)
              for (let i2 = 0; i2 < code.length; i2 += 1)
                (inQuoteChar ||
                inBlockComment ||
                inLineComment ||
                inRegexLiteral
                  ? (inQuoteChar &&
                      ((code[i2] === inQuoteChar && '\\' !== code[i2 - 1]) ||
                        ('\n' === code[i2] && '`' !== inQuoteChar)) &&
                      (inQuoteChar = null),
                    inRegexLiteral &&
                      (('/' === code[i2] && '\\' !== code[i2 - 1]) ||
                        '\n' === code[i2]) &&
                      (inRegexLiteral = !1),
                    inBlockComment &&
                      '/' === code[i2 - 1] &&
                      '*' === code[i2 - 2] &&
                      (inBlockComment = !1),
                    inLineComment && '\n' === code[i2] && (inLineComment = !1))
                  : '"' === code[i2] || "'" === code[i2] || '`' === code[i2]
                    ? (inQuoteChar = code[i2])
                    : '/' === code[i2] && '*' === code[i2 + 1]
                      ? (inBlockComment = !0)
                      : '/' === code[i2] && '/' === code[i2 + 1]
                        ? (inLineComment = !0)
                        : '/' === code[i2] &&
                          '/' !== code[i2 + 1] &&
                          (inRegexLiteral = !0),
                  !inBlockComment && !inLineComment && (newCode += code[i2]))
            else newCode = code
            return newCode
          })(code)
            .replace(/\n\s*/g, '')
            .trim()
        )
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ sources: {} })
        var { document: document2 } = globalThis
        function navigate(context, url) {
          context.channel.emit(
            storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_3__.NAVIGATE_URL,
            url
          )
        }
        storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.dK.a
        var DescriptionType2,
          SUPPORTED_MDX_HEADERS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(
            (acc, headerType) => ({
              ...acc,
              [headerType]: (0,
              storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
                headerType
              )({
                '& svg': {
                  position: 'relative',
                  top: '-0.1em',
                  visibility: 'hidden',
                },
                '&:hover svg': { visibility: 'visible' },
              }),
            }),
            {}
          ),
          OcticonAnchor =
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.a(
              () => ({
                float: 'left',
                lineHeight: 'inherit',
                paddingRight: '10px',
                marginLeft: '-24px',
                color: 'inherit',
              })
            ),
          HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
            let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                DocsContext
              ),
              OcticonHeader = OcticonHeaders[as],
              hash = `#${id}`
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              OcticonHeader,
              { id, ...rest },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                OcticonAnchor,
                {
                  'aria-hidden': 'true',
                  href: hash,
                  tabIndex: -1,
                  target: '_self',
                  onClick: (event) => {
                    document2.getElementById(id) && navigate(context, hash)
                  },
                },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _storybook_icons__WEBPACK_IMPORTED_MODULE_8__.qYV,
                  null
                )
              ),
              children
            )
          },
          HeaderMdx = (props) => {
            let { as, id, children, ...rest } = props
            if (id)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                HeaderWithOcticonAnchor,
                { as, id, ...rest },
                children
              )
            let Component4 = as,
              { as: omittedAs, ...withoutAs } = props
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              Component4,
              {
                ...(0,
                storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.mc)(
                  withoutAs,
                  as
                ),
              }
            )
          },
          DescriptionType =
            (SUPPORTED_MDX_HEADERS.reduce(
              (acc, headerType) => ({
                ...acc,
                [headerType]: (props) =>
                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderMdx, {
                    as: headerType,
                    ...props,
                  }),
              }),
              {}
            ),
            ((DescriptionType2 = DescriptionType || {}).INFO = 'info'),
            (DescriptionType2.NOTES = 'notes'),
            (DescriptionType2.DOCGEN = 'docgen'),
            (DescriptionType2.AUTO = 'auto'),
            DescriptionType2),
          { document: document3, window: globalWindow3 } =
            ((0, _chunk_2PTXLE6R_mjs__WEBPACK_IMPORTED_MODULE_5__.f1)(
              require_js()
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                width: '10rem',
                '@media (max-width: 768px)': { display: 'none' },
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.div(
              ({ theme }) => ({
                position: 'fixed',
                bottom: 0,
                top: 0,
                width: '10rem',
                paddingTop: '4rem',
                paddingBottom: '2rem',
                overflowY: 'auto',
                fontFamily: theme.typography.fonts.base,
                fontSize: theme.typography.size.s2,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                WebkitOverflowScrolling: 'touch',
                '& *': { boxSizing: 'border-box' },
                '& > .toc-wrapper > .toc-list': {
                  paddingLeft: 0,
                  borderLeft: `solid 2px ${theme.color.mediumlight}`,
                  '.toc-list': {
                    paddingLeft: 0,
                    borderLeft: `solid 2px ${theme.color.mediumlight}`,
                    '.toc-list': {
                      paddingLeft: 0,
                      borderLeft: `solid 2px ${theme.color.mediumlight}`,
                    },
                  },
                },
                '& .toc-list-item': {
                  position: 'relative',
                  listStyleType: 'none',
                  marginLeft: 20,
                  paddingTop: 3,
                  paddingBottom: 3,
                },
                '& .toc-list-item::before': {
                  content: '""',
                  position: 'absolute',
                  height: '100%',
                  top: 0,
                  left: 0,
                  transform: 'translateX(calc(-2px - 20px))',
                  borderLeft: `solid 2px ${theme.color.mediumdark}`,
                  opacity: 0,
                  transition: 'opacity 0.2s',
                },
                '& .toc-list-item.is-active-li::before': { opacity: 1 },
                '& .toc-list-item > a': {
                  color: theme.color.defaultText,
                  textDecoration: 'none',
                },
                '& .toc-list-item.is-active-li > a': {
                  fontWeight: 600,
                  color: theme.color.secondary,
                  textDecoration: 'none',
                },
              })
            ),
            storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4.p(
              ({ theme }) => ({
                fontWeight: 600,
                fontSize: '0.875em',
                color: theme.textColor,
                textTransform: 'uppercase',
                marginBottom: 10,
              })
            ),
            globalThis),
          regex =
            /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
          own = Object.hasOwnProperty
        var slugs = new (class {
          constructor() {
            ;(this.occurrences, this.reset())
          }
          slug(value3, maintainCase) {
            let self2 = this,
              result2 = (function slug(value3, maintainCase) {
                return 'string' != typeof value3
                  ? ''
                  : (maintainCase || (value3 = value3.toLowerCase()),
                    value3.replace(regex, '').replace(/ /g, '-'))
              })(value3, !0 === maintainCase),
              originalSlug = result2
            for (; own.call(self2.occurrences, result2); )
              (self2.occurrences[originalSlug]++,
                (result2 =
                  originalSlug + '-' + self2.occurrences[originalSlug]))
            return ((self2.occurrences[result2] = 0), result2)
          }
          reset() {
            this.occurrences = Object.create(null)
          }
        })()
        ;(0, storybook_internal_theming__WEBPACK_IMPORTED_MODULE_6__.I4)(
          ({ children, disableAnchor, ...props }) => {
            if (disableAnchor || 'string' != typeof children)
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                storybook_internal_components__WEBPACK_IMPORTED_MODULE_7__.H2,
                null,
                children
              )
            let tagID = slugs.slug(children.toLowerCase())
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              HeaderMdx,
              { as: 'h2', id: tagID, ...props },
              children
            )
          }
        )(({ theme }) => ({
          fontSize: theme.typography.size.s2 - 1 + 'px',
          fontWeight: theme.typography.weight.bold,
          lineHeight: '16px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: theme.textMutedColor,
          border: 0,
          marginBottom: '12px',
          '&:first-of-type': { marginTop: '56px' },
        }))
        var ExternalDocsContext = class extends storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_2__.DocsContext {
            constructor(
              channel,
              store,
              renderStoryToElement,
              processMetaExports
            ) {
              ;(super(channel, store, renderStoryToElement, []),
                (this.channel = channel),
                (this.store = store),
                (this.renderStoryToElement = renderStoryToElement),
                (this.processMetaExports = processMetaExports),
                (this.referenceMeta = (metaExports, attach) => {
                  let csfFile = this.processMetaExports(metaExports)
                  ;(this.referenceCSFFile(csfFile),
                    super.referenceMeta(metaExports, attach))
                }))
            }
          },
          ConstantMap = class {
            constructor(prefix) {
              ;((this.prefix = prefix), (this.entries = new Map()))
            }
            get(key2) {
              return (
                this.entries.has(key2) ||
                  this.entries.set(key2, `${this.prefix}${this.entries.size}`),
                this.entries.get(key2)
              )
            }
          }
        storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_2__.Preview
        var Meta = ({ of }) => {
          let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            DocsContext
          )
          of && context.referenceMeta(of, !0)
          try {
            let primary = context.storyById()
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Anchor, {
              storyId: primary.id,
            })
          } catch {
            return null
          }
        }
      },
  },
])
