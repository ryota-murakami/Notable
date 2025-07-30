/*! For license information please see 9342.b858ad70.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9342],
  {
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/focusManager.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { m: () => focusManager })
        var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/subscribable.js'
          ),
          _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js'
          ),
          focusManager =
            new (class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Q {
              #focused
              #cleanup
              #setup
              constructor() {
                ;(super(),
                  (this.#setup = (onFocus) => {
                    if (
                      !_utils_js__WEBPACK_IMPORTED_MODULE_1__.S$ &&
                      window.addEventListener
                    ) {
                      const listener = () => onFocus()
                      return (
                        window.addEventListener(
                          'visibilitychange',
                          listener,
                          !1
                        ),
                        () => {
                          window.removeEventListener(
                            'visibilitychange',
                            listener
                          )
                        }
                      )
                    }
                  }))
              }
              onSubscribe() {
                this.#cleanup || this.setEventListener(this.#setup)
              }
              onUnsubscribe() {
                this.hasListeners() ||
                  (this.#cleanup?.(), (this.#cleanup = void 0))
              }
              setEventListener(setup) {
                ;((this.#setup = setup),
                  this.#cleanup?.(),
                  (this.#cleanup = setup((focused) => {
                    'boolean' == typeof focused
                      ? this.setFocused(focused)
                      : this.onFocus()
                  })))
              }
              setFocused(focused) {
                this.#focused !== focused &&
                  ((this.#focused = focused), this.onFocus())
              }
              onFocus() {
                const isFocused = this.isFocused()
                this.listeners.forEach((listener) => {
                  listener(isFocused)
                })
              }
              isFocused() {
                return 'boolean' == typeof this.#focused
                  ? this.#focused
                  : 'hidden' !== globalThis.document?.visibilityState
              }
            })()
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/notifyManager.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { jG: () => notifyManager })
        var defaultScheduler = (cb) => setTimeout(cb, 0)
        var notifyManager = (function createNotifyManager() {
          let queue = [],
            transactions = 0,
            notifyFn = (callback) => {
              callback()
            },
            batchNotifyFn = (callback) => {
              callback()
            },
            scheduleFn = defaultScheduler
          const schedule = (callback) => {
            transactions
              ? queue.push(callback)
              : scheduleFn(() => {
                  notifyFn(callback)
                })
          }
          return {
            batch: (callback) => {
              let result
              transactions++
              try {
                result = callback()
              } finally {
                ;(transactions--,
                  transactions ||
                    (() => {
                      const originalQueue = queue
                      ;((queue = []),
                        originalQueue.length &&
                          scheduleFn(() => {
                            batchNotifyFn(() => {
                              originalQueue.forEach((callback) => {
                                notifyFn(callback)
                              })
                            })
                          }))
                    })())
              }
              return result
            },
            batchCalls:
              (callback) =>
              (...args) => {
                schedule(() => {
                  callback(...args)
                })
              },
            schedule,
            setNotifyFunction: (fn) => {
              notifyFn = fn
            },
            setBatchNotifyFunction: (fn) => {
              batchNotifyFn = fn
            },
            setScheduler: (fn) => {
              scheduleFn = fn
            },
          }
        })()
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/removable.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { k: () => Removable })
        var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js'
          ),
          Removable = class {
            #gcTimeout
            destroy() {
              this.clearGcTimeout()
            }
            scheduleGc() {
              ;(this.clearGcTimeout(),
                (0, _utils_js__WEBPACK_IMPORTED_MODULE_0__.gn)(this.gcTime) &&
                  (this.#gcTimeout = setTimeout(() => {
                    this.optionalRemove()
                  }, this.gcTime)))
            }
            updateGcTime(newGcTime) {
              this.gcTime = Math.max(
                this.gcTime || 0,
                newGcTime ??
                  (_utils_js__WEBPACK_IMPORTED_MODULE_0__.S$ ? 1 / 0 : 3e5)
              )
            }
            clearGcTimeout() {
              this.#gcTimeout &&
                (clearTimeout(this.#gcTimeout), (this.#gcTimeout = void 0))
            }
          }
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/retryer.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          v_: () => canFetch,
          II: () => createRetryer,
          wm: () => isCancelledError,
        })
        var focusManager = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/focusManager.js'
          ),
          subscribable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/subscribable.js'
          ),
          utils = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js'
          ),
          onlineManager = new (class extends subscribable.Q {
            #online = !0
            #cleanup
            #setup
            constructor() {
              ;(super(),
                (this.#setup = (onOnline) => {
                  if (!utils.S$ && window.addEventListener) {
                    const onlineListener = () => onOnline(!0),
                      offlineListener = () => onOnline(!1)
                    return (
                      window.addEventListener('online', onlineListener, !1),
                      window.addEventListener('offline', offlineListener, !1),
                      () => {
                        ;(window.removeEventListener('online', onlineListener),
                          window.removeEventListener(
                            'offline',
                            offlineListener
                          ))
                      }
                    )
                  }
                }))
            }
            onSubscribe() {
              this.#cleanup || this.setEventListener(this.#setup)
            }
            onUnsubscribe() {
              this.hasListeners() ||
                (this.#cleanup?.(), (this.#cleanup = void 0))
            }
            setEventListener(setup) {
              ;((this.#setup = setup),
                this.#cleanup?.(),
                (this.#cleanup = setup(this.setOnline.bind(this))))
            }
            setOnline(online) {
              this.#online !== online &&
                ((this.#online = online),
                this.listeners.forEach((listener) => {
                  listener(online)
                }))
            }
            isOnline() {
              return this.#online
            }
          })(),
          modern_thenable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/thenable.js'
          )
        function defaultRetryDelay(failureCount) {
          return Math.min(1e3 * 2 ** failureCount, 3e4)
        }
        function canFetch(networkMode) {
          return (
            'online' !== (networkMode ?? 'online') || onlineManager.isOnline()
          )
        }
        var CancelledError = class extends Error {
          constructor(options) {
            ;(super('CancelledError'),
              (this.revert = options?.revert),
              (this.silent = options?.silent))
          }
        }
        function isCancelledError(value) {
          return value instanceof CancelledError
        }
        function createRetryer(config) {
          let continueFn,
            isRetryCancelled = !1,
            failureCount = 0,
            isResolved = !1
          const thenable = (0, modern_thenable.T)(),
            canContinue = () =>
              focusManager.m.isFocused() &&
              ('always' === config.networkMode || onlineManager.isOnline()) &&
              config.canRun(),
            canStart = () => canFetch(config.networkMode) && config.canRun(),
            resolve = (value) => {
              isResolved ||
                ((isResolved = !0),
                config.onSuccess?.(value),
                continueFn?.(),
                thenable.resolve(value))
            },
            reject = (value) => {
              isResolved ||
                ((isResolved = !0),
                config.onError?.(value),
                continueFn?.(),
                thenable.reject(value))
            },
            pause = () =>
              new Promise((continueResolve) => {
                ;((continueFn = (value) => {
                  ;(isResolved || canContinue()) && continueResolve(value)
                }),
                  config.onPause?.())
              }).then(() => {
                ;((continueFn = void 0), isResolved || config.onContinue?.())
              }),
            run = () => {
              if (isResolved) return
              let promiseOrValue
              const initialPromise =
                0 === failureCount ? config.initialPromise : void 0
              try {
                promiseOrValue = initialPromise ?? config.fn()
              } catch (error) {
                promiseOrValue = Promise.reject(error)
              }
              Promise.resolve(promiseOrValue)
                .then(resolve)
                .catch((error) => {
                  if (isResolved) return
                  const retry = config.retry ?? (utils.S$ ? 0 : 3),
                    retryDelay = config.retryDelay ?? defaultRetryDelay,
                    delay =
                      'function' == typeof retryDelay
                        ? retryDelay(failureCount, error)
                        : retryDelay,
                    shouldRetry =
                      !0 === retry ||
                      ('number' == typeof retry && failureCount < retry) ||
                      ('function' == typeof retry && retry(failureCount, error))
                  !isRetryCancelled && shouldRetry
                    ? (failureCount++,
                      config.onFail?.(failureCount, error),
                      (0, utils.yy)(delay)
                        .then(() => (canContinue() ? void 0 : pause()))
                        .then(() => {
                          isRetryCancelled ? reject(error) : run()
                        }))
                    : reject(error)
                })
            }
          return {
            promise: thenable,
            cancel: (cancelOptions) => {
              isResolved ||
                (reject(new CancelledError(cancelOptions)), config.abort?.())
            },
            continue: () => (continueFn?.(), thenable),
            cancelRetry: () => {
              isRetryCancelled = !0
            },
            continueRetry: () => {
              isRetryCancelled = !1
            },
            canStart,
            start: () => (canStart() ? run() : pause().then(run), thenable),
          }
        }
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/subscribable.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Q: () => Subscribable })
        var Subscribable = class {
          constructor() {
            ;((this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this)))
          }
          subscribe(listener) {
            return (
              this.listeners.add(listener),
              this.onSubscribe(),
              () => {
                ;(this.listeners.delete(listener), this.onUnsubscribe())
              }
            )
          }
          hasListeners() {
            return this.listeners.size > 0
          }
          onSubscribe() {}
          onUnsubscribe() {}
        }
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/thenable.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function pendingThenable() {
          let resolve, reject
          const thenable = new Promise((_resolve, _reject) => {
            ;((resolve = _resolve), (reject = _reject))
          })
          function finalize(data) {
            ;(Object.assign(thenable, data),
              delete thenable.resolve,
              delete thenable.reject)
          }
          return (
            (thenable.status = 'pending'),
            thenable.catch(() => {}),
            (thenable.resolve = (value) => {
              ;(finalize({ status: 'fulfilled', value }), resolve(value))
            }),
            (thenable.reject = (reason) => {
              ;(finalize({ status: 'rejected', reason }), reject(reason))
            }),
            thenable
          )
        }
        __webpack_require__.d(__webpack_exports__, { T: () => pendingThenable })
      },
    '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          EN: () => hashKey,
          Eh: () => resolveEnabled,
          GU: () => shouldThrowError,
          S$: () => isServer,
          ZM: () => ensureQueryFn,
          d2: () => resolveStaleTime,
          f8: () => shallowEqualObjects,
          gn: () => isValidTimeout,
          hT: () => skipToken,
          j3: () => timeUntilStale,
          lQ: () => noop,
          pl: () => replaceData,
          yy: () => sleep,
        })
        var isServer = 'undefined' == typeof window || 'Deno' in globalThis
        function noop() {}
        function isValidTimeout(value) {
          return 'number' == typeof value && value >= 0 && value !== 1 / 0
        }
        function timeUntilStale(updatedAt, staleTime) {
          return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0)
        }
        function resolveStaleTime(staleTime, query) {
          return 'function' == typeof staleTime ? staleTime(query) : staleTime
        }
        function resolveEnabled(enabled, query) {
          return 'function' == typeof enabled ? enabled(query) : enabled
        }
        function hashKey(queryKey) {
          return JSON.stringify(queryKey, (_, val) =>
            isPlainObject(val)
              ? Object.keys(val)
                  .sort()
                  .reduce(
                    (result, key) => ((result[key] = val[key]), result),
                    {}
                  )
              : val
          )
        }
        function replaceEqualDeep(a, b) {
          if (a === b) return a
          const array = isPlainArray(a) && isPlainArray(b)
          if (array || (isPlainObject(a) && isPlainObject(b))) {
            const aItems = array ? a : Object.keys(a),
              aSize = aItems.length,
              bItems = array ? b : Object.keys(b),
              bSize = bItems.length,
              copy = array ? [] : {},
              aItemsSet = new Set(aItems)
            let equalItems = 0
            for (let i = 0; i < bSize; i++) {
              const key = array ? i : bItems[i]
              ;((!array && aItemsSet.has(key)) || array) &&
              void 0 === a[key] &&
              void 0 === b[key]
                ? ((copy[key] = void 0), equalItems++)
                : ((copy[key] = replaceEqualDeep(a[key], b[key])),
                  copy[key] === a[key] && void 0 !== a[key] && equalItems++)
            }
            return aSize === bSize && equalItems === aSize ? a : copy
          }
          return b
        }
        function shallowEqualObjects(a, b) {
          if (!b || Object.keys(a).length !== Object.keys(b).length) return !1
          for (const key in a) if (a[key] !== b[key]) return !1
          return !0
        }
        function isPlainArray(value) {
          return (
            Array.isArray(value) && value.length === Object.keys(value).length
          )
        }
        function isPlainObject(o) {
          if (!hasObjectPrototype(o)) return !1
          const ctor = o.constructor
          if (void 0 === ctor) return !0
          const prot = ctor.prototype
          return (
            !!hasObjectPrototype(prot) &&
            !!prot.hasOwnProperty('isPrototypeOf') &&
            Object.getPrototypeOf(o) === Object.prototype
          )
        }
        function hasObjectPrototype(o) {
          return '[object Object]' === Object.prototype.toString.call(o)
        }
        function sleep(timeout) {
          return new Promise((resolve) => {
            setTimeout(resolve, timeout)
          })
        }
        function replaceData(prevData, data, options) {
          return 'function' == typeof options.structuralSharing
            ? options.structuralSharing(prevData, data)
            : !1 !== options.structuralSharing
              ? replaceEqualDeep(prevData, data)
              : data
        }
        var skipToken = Symbol()
        function ensureQueryFn(options, fetchOptions) {
          return !options.queryFn && fetchOptions?.initialPromise
            ? () => fetchOptions.initialPromise
            : options.queryFn && options.queryFn !== skipToken
              ? options.queryFn
              : () =>
                  Promise.reject(
                    new Error(`Missing queryFn: '${options.queryHash}'`)
                  )
        }
        function shouldThrowError(throwOnError, params) {
          return 'function' == typeof throwOnError
            ? throwOnError(...params)
            : !!throwOnError
        }
      },
    '../../node_modules/.pnpm/@tanstack+react-query@5.83.0_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { jE: () => useQueryClient })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          QueryClientContext =
            (__webpack_require__(
              '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
            react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0)),
          useQueryClient = (queryClient) => {
            const client =
              react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientContext)
            if (queryClient) return queryClient
            if (!client)
              throw new Error(
                'No QueryClient set, use QueryClientProvider to set one'
              )
            return client
          }
      },
    '../../node_modules/.pnpm/@tanstack+react-query@5.83.0_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useMutation.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { n: () => useMutation })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          notifyManager = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/notifyManager.js'
          ),
          removable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/removable.js'
          ),
          retryer = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/retryer.js'
          )
        removable.k
        var subscribable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/subscribable.js'
          ),
          utils = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js'
          ),
          MutationObserver = class extends subscribable.Q {
            #client
            #currentResult = void 0
            #currentMutation
            #mutateOptions
            constructor(client, options) {
              ;(super(),
                (this.#client = client),
                this.setOptions(options),
                this.bindMethods(),
                this.#updateResult())
            }
            bindMethods() {
              ;((this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this)))
            }
            setOptions(options) {
              const prevOptions = this.options
              ;((this.options = this.#client.defaultMutationOptions(options)),
                (0, utils.f8)(this.options, prevOptions) ||
                  this.#client
                    .getMutationCache()
                    .notify({
                      type: 'observerOptionsUpdated',
                      mutation: this.#currentMutation,
                      observer: this,
                    }),
                prevOptions?.mutationKey &&
                this.options.mutationKey &&
                (0, utils.EN)(prevOptions.mutationKey) !==
                  (0, utils.EN)(this.options.mutationKey)
                  ? this.reset()
                  : 'pending' === this.#currentMutation?.state.status &&
                    this.#currentMutation.setOptions(this.options))
            }
            onUnsubscribe() {
              this.hasListeners() || this.#currentMutation?.removeObserver(this)
            }
            onMutationUpdate(action) {
              ;(this.#updateResult(), this.#notify(action))
            }
            getCurrentResult() {
              return this.#currentResult
            }
            reset() {
              ;(this.#currentMutation?.removeObserver(this),
                (this.#currentMutation = void 0),
                this.#updateResult(),
                this.#notify())
            }
            mutate(variables, options) {
              return (
                (this.#mutateOptions = options),
                this.#currentMutation?.removeObserver(this),
                (this.#currentMutation = this.#client
                  .getMutationCache()
                  .build(this.#client, this.options)),
                this.#currentMutation.addObserver(this),
                this.#currentMutation.execute(variables)
              )
            }
            #updateResult() {
              const state = this.#currentMutation?.state ?? {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: 'idle',
                variables: void 0,
                submittedAt: 0,
              }
              this.#currentResult = {
                ...state,
                isPending: 'pending' === state.status,
                isSuccess: 'success' === state.status,
                isError: 'error' === state.status,
                isIdle: 'idle' === state.status,
                mutate: this.mutate,
                reset: this.reset,
              }
            }
            #notify(action) {
              notifyManager.jG.batch(() => {
                if (this.#mutateOptions && this.hasListeners()) {
                  const variables = this.#currentResult.variables,
                    context = this.#currentResult.context
                  'success' === action?.type
                    ? (this.#mutateOptions.onSuccess?.(
                        action.data,
                        variables,
                        context
                      ),
                      this.#mutateOptions.onSettled?.(
                        action.data,
                        null,
                        variables,
                        context
                      ))
                    : 'error' === action?.type &&
                      (this.#mutateOptions.onError?.(
                        action.error,
                        variables,
                        context
                      ),
                      this.#mutateOptions.onSettled?.(
                        void 0,
                        action.error,
                        variables,
                        context
                      ))
                }
                this.listeners.forEach((listener) => {
                  listener(this.#currentResult)
                })
              })
            }
          },
          QueryClientProvider = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+react-query@5.83.0_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js'
          )
        function useMutation(options, queryClient) {
          const client = (0, QueryClientProvider.jE)(queryClient),
            [observer] = react.useState(
              () => new MutationObserver(client, options)
            )
          react.useEffect(() => {
            observer.setOptions(options)
          }, [observer, options])
          const result = react.useSyncExternalStore(
              react.useCallback(
                (onStoreChange) =>
                  observer.subscribe(
                    notifyManager.jG.batchCalls(onStoreChange)
                  ),
                [observer]
              ),
              () => observer.getCurrentResult(),
              () => observer.getCurrentResult()
            ),
            mutate = react.useCallback(
              (variables, mutateOptions) => {
                observer.mutate(variables, mutateOptions).catch(utils.lQ)
              },
              [observer]
            )
          if (
            result.error &&
            (0, utils.GU)(observer.options.throwOnError, [result.error])
          )
            throw result.error
          return { ...result, mutate, mutateAsync: result.mutate }
        }
      },
    '../../node_modules/.pnpm/@tanstack+react-query@5.83.0_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useQuery.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { I: () => useQuery })
        var focusManager = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/focusManager.js'
          ),
          notifyManager = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/notifyManager.js'
          ),
          utils = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/utils.js'
          ),
          retryer = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/retryer.js'
          ),
          removable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/removable.js'
          )
        removable.k
        function fetchState(data, options) {
          return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: (0, retryer.v_)(options.networkMode)
              ? 'fetching'
              : 'paused',
            ...(void 0 === data && { error: null, status: 'pending' }),
          }
        }
        var subscribable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/subscribable.js'
          ),
          thenable = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+query-core@5.83.0/node_modules/@tanstack/query-core/build/modern/thenable.js'
          ),
          QueryObserver = class extends subscribable.Q {
            constructor(client, options) {
              ;(super(),
                (this.options = options),
                (this.#client = client),
                (this.#selectError = null),
                (this.#currentThenable = (0, thenable.T)()),
                this.options.experimental_prefetchInRender ||
                  this.#currentThenable.reject(
                    new Error(
                      'experimental_prefetchInRender feature flag is not enabled'
                    )
                  ),
                this.bindMethods(),
                this.setOptions(options))
            }
            #client
            #currentQuery = void 0
            #currentQueryInitialState = void 0
            #currentResult = void 0
            #currentResultState
            #currentResultOptions
            #currentThenable
            #selectError
            #selectFn
            #selectResult
            #lastQueryWithDefinedData
            #staleTimeoutId
            #refetchIntervalId
            #currentRefetchInterval
            #trackedProps = new Set()
            bindMethods() {
              this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
              1 === this.listeners.size &&
                (this.#currentQuery.addObserver(this),
                shouldFetchOnMount(this.#currentQuery, this.options)
                  ? this.#executeFetch()
                  : this.updateResult(),
                this.#updateTimers())
            }
            onUnsubscribe() {
              this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
              return shouldFetchOn(
                this.#currentQuery,
                this.options,
                this.options.refetchOnReconnect
              )
            }
            shouldFetchOnWindowFocus() {
              return shouldFetchOn(
                this.#currentQuery,
                this.options,
                this.options.refetchOnWindowFocus
              )
            }
            destroy() {
              ;((this.listeners = new Set()),
                this.#clearStaleTimeout(),
                this.#clearRefetchInterval(),
                this.#currentQuery.removeObserver(this))
            }
            setOptions(options) {
              const prevOptions = this.options,
                prevQuery = this.#currentQuery
              if (
                ((this.options = this.#client.defaultQueryOptions(options)),
                void 0 !== this.options.enabled &&
                  'boolean' != typeof this.options.enabled &&
                  'function' != typeof this.options.enabled &&
                  'boolean' !=
                    typeof (0, utils.Eh)(
                      this.options.enabled,
                      this.#currentQuery
                    ))
              )
                throw new Error(
                  'Expected enabled to be a boolean or a callback that returns a boolean'
                )
              ;(this.#updateQuery(),
                this.#currentQuery.setOptions(this.options),
                prevOptions._defaulted &&
                  !(0, utils.f8)(this.options, prevOptions) &&
                  this.#client
                    .getQueryCache()
                    .notify({
                      type: 'observerOptionsUpdated',
                      query: this.#currentQuery,
                      observer: this,
                    }))
              const mounted = this.hasListeners()
              ;(mounted &&
                shouldFetchOptionally(
                  this.#currentQuery,
                  prevQuery,
                  this.options,
                  prevOptions
                ) &&
                this.#executeFetch(),
                this.updateResult(),
                !mounted ||
                  (this.#currentQuery === prevQuery &&
                    (0, utils.Eh)(this.options.enabled, this.#currentQuery) ===
                      (0, utils.Eh)(prevOptions.enabled, this.#currentQuery) &&
                    (0, utils.d2)(
                      this.options.staleTime,
                      this.#currentQuery
                    ) ===
                      (0, utils.d2)(
                        prevOptions.staleTime,
                        this.#currentQuery
                      )) ||
                  this.#updateStaleTimeout())
              const nextRefetchInterval = this.#computeRefetchInterval()
              !mounted ||
                (this.#currentQuery === prevQuery &&
                  (0, utils.Eh)(this.options.enabled, this.#currentQuery) ===
                    (0, utils.Eh)(prevOptions.enabled, this.#currentQuery) &&
                  nextRefetchInterval === this.#currentRefetchInterval) ||
                this.#updateRefetchInterval(nextRefetchInterval)
            }
            getOptimisticResult(options) {
              const query = this.#client
                  .getQueryCache()
                  .build(this.#client, options),
                result = this.createResult(query, options)
              return (
                (function shouldAssignObserverCurrentProperties(
                  observer,
                  optimisticResult
                ) {
                  if (
                    !(0, utils.f8)(
                      observer.getCurrentResult(),
                      optimisticResult
                    )
                  )
                    return !0
                  return !1
                })(this, result) &&
                  ((this.#currentResult = result),
                  (this.#currentResultOptions = this.options),
                  (this.#currentResultState = this.#currentQuery.state)),
                result
              )
            }
            getCurrentResult() {
              return this.#currentResult
            }
            trackResult(result, onPropTracked) {
              return new Proxy(result, {
                get: (target, key) => (
                  this.trackProp(key),
                  onPropTracked?.(key),
                  Reflect.get(target, key)
                ),
              })
            }
            trackProp(key) {
              this.#trackedProps.add(key)
            }
            getCurrentQuery() {
              return this.#currentQuery
            }
            refetch({ ...options } = {}) {
              return this.fetch({ ...options })
            }
            fetchOptimistic(options) {
              const defaultedOptions =
                  this.#client.defaultQueryOptions(options),
                query = this.#client
                  .getQueryCache()
                  .build(this.#client, defaultedOptions)
              return query
                .fetch()
                .then(() => this.createResult(query, defaultedOptions))
            }
            fetch(fetchOptions) {
              return this.#executeFetch({
                ...fetchOptions,
                cancelRefetch: fetchOptions.cancelRefetch ?? !0,
              }).then(() => (this.updateResult(), this.#currentResult))
            }
            #executeFetch(fetchOptions) {
              this.#updateQuery()
              let promise = this.#currentQuery.fetch(this.options, fetchOptions)
              return (
                fetchOptions?.throwOnError ||
                  (promise = promise.catch(utils.lQ)),
                promise
              )
            }
            #updateStaleTimeout() {
              this.#clearStaleTimeout()
              const staleTime = (0, utils.d2)(
                this.options.staleTime,
                this.#currentQuery
              )
              if (
                utils.S$ ||
                this.#currentResult.isStale ||
                !(0, utils.gn)(staleTime)
              )
                return
              const timeout =
                (0, utils.j3)(this.#currentResult.dataUpdatedAt, staleTime) + 1
              this.#staleTimeoutId = setTimeout(() => {
                this.#currentResult.isStale || this.updateResult()
              }, timeout)
            }
            #computeRefetchInterval() {
              return (
                ('function' == typeof this.options.refetchInterval
                  ? this.options.refetchInterval(this.#currentQuery)
                  : this.options.refetchInterval) ?? !1
              )
            }
            #updateRefetchInterval(nextInterval) {
              ;(this.#clearRefetchInterval(),
                (this.#currentRefetchInterval = nextInterval),
                !utils.S$ &&
                  !1 !==
                    (0, utils.Eh)(this.options.enabled, this.#currentQuery) &&
                  (0, utils.gn)(this.#currentRefetchInterval) &&
                  0 !== this.#currentRefetchInterval &&
                  (this.#refetchIntervalId = setInterval(() => {
                    ;(this.options.refetchIntervalInBackground ||
                      focusManager.m.isFocused()) &&
                      this.#executeFetch()
                  }, this.#currentRefetchInterval)))
            }
            #updateTimers() {
              ;(this.#updateStaleTimeout(),
                this.#updateRefetchInterval(this.#computeRefetchInterval()))
            }
            #clearStaleTimeout() {
              this.#staleTimeoutId &&
                (clearTimeout(this.#staleTimeoutId),
                (this.#staleTimeoutId = void 0))
            }
            #clearRefetchInterval() {
              this.#refetchIntervalId &&
                (clearInterval(this.#refetchIntervalId),
                (this.#refetchIntervalId = void 0))
            }
            createResult(query, options) {
              const prevQuery = this.#currentQuery,
                prevOptions = this.options,
                prevResult = this.#currentResult,
                prevResultState = this.#currentResultState,
                prevResultOptions = this.#currentResultOptions,
                queryInitialState =
                  query !== prevQuery
                    ? query.state
                    : this.#currentQueryInitialState,
                { state } = query
              let data,
                newState = { ...state },
                isPlaceholderData = !1
              if (options._optimisticResults) {
                const mounted = this.hasListeners(),
                  fetchOnMount = !mounted && shouldFetchOnMount(query, options),
                  fetchOptionally =
                    mounted &&
                    shouldFetchOptionally(
                      query,
                      prevQuery,
                      options,
                      prevOptions
                    )
                ;((fetchOnMount || fetchOptionally) &&
                  (newState = {
                    ...newState,
                    ...fetchState(state.data, query.options),
                  }),
                  'isRestoring' === options._optimisticResults &&
                    (newState.fetchStatus = 'idle'))
              }
              let { error, errorUpdatedAt, status } = newState
              data = newState.data
              let skipSelect = !1
              if (
                void 0 !== options.placeholderData &&
                void 0 === data &&
                'pending' === status
              ) {
                let placeholderData
                ;(prevResult?.isPlaceholderData &&
                options.placeholderData === prevResultOptions?.placeholderData
                  ? ((placeholderData = prevResult.data), (skipSelect = !0))
                  : (placeholderData =
                      'function' == typeof options.placeholderData
                        ? options.placeholderData(
                            this.#lastQueryWithDefinedData?.state.data,
                            this.#lastQueryWithDefinedData
                          )
                        : options.placeholderData),
                  void 0 !== placeholderData &&
                    ((status = 'success'),
                    (data = (0, utils.pl)(
                      prevResult?.data,
                      placeholderData,
                      options
                    )),
                    (isPlaceholderData = !0)))
              }
              if (options.select && void 0 !== data && !skipSelect)
                if (
                  prevResult &&
                  data === prevResultState?.data &&
                  options.select === this.#selectFn
                )
                  data = this.#selectResult
                else
                  try {
                    ;((this.#selectFn = options.select),
                      (data = options.select(data)),
                      (data = (0, utils.pl)(prevResult?.data, data, options)),
                      (this.#selectResult = data),
                      (this.#selectError = null))
                  } catch (selectError) {
                    this.#selectError = selectError
                  }
              this.#selectError &&
                ((error = this.#selectError),
                (data = this.#selectResult),
                (errorUpdatedAt = Date.now()),
                (status = 'error'))
              const isFetching = 'fetching' === newState.fetchStatus,
                isPending = 'pending' === status,
                isError = 'error' === status,
                isLoading = isPending && isFetching,
                hasData = void 0 !== data,
                nextResult = {
                  status,
                  fetchStatus: newState.fetchStatus,
                  isPending,
                  isSuccess: 'success' === status,
                  isError,
                  isInitialLoading: isLoading,
                  isLoading,
                  data,
                  dataUpdatedAt: newState.dataUpdatedAt,
                  error,
                  errorUpdatedAt,
                  failureCount: newState.fetchFailureCount,
                  failureReason: newState.fetchFailureReason,
                  errorUpdateCount: newState.errorUpdateCount,
                  isFetched:
                    newState.dataUpdateCount > 0 ||
                    newState.errorUpdateCount > 0,
                  isFetchedAfterMount:
                    newState.dataUpdateCount >
                      queryInitialState.dataUpdateCount ||
                    newState.errorUpdateCount >
                      queryInitialState.errorUpdateCount,
                  isFetching,
                  isRefetching: isFetching && !isPending,
                  isLoadingError: isError && !hasData,
                  isPaused: 'paused' === newState.fetchStatus,
                  isPlaceholderData,
                  isRefetchError: isError && hasData,
                  isStale: isStale(query, options),
                  refetch: this.refetch,
                  promise: this.#currentThenable,
                  isEnabled: !1 !== (0, utils.Eh)(options.enabled, query),
                }
              if (this.options.experimental_prefetchInRender) {
                const finalizeThenableIfPossible = (thenable) => {
                    'error' === nextResult.status
                      ? thenable.reject(nextResult.error)
                      : void 0 !== nextResult.data &&
                        thenable.resolve(nextResult.data)
                  },
                  recreateThenable = () => {
                    const pending =
                      (this.#currentThenable =
                      nextResult.promise =
                        (0, thenable.T)())
                    finalizeThenableIfPossible(pending)
                  },
                  prevThenable = this.#currentThenable
                switch (prevThenable.status) {
                  case 'pending':
                    query.queryHash === prevQuery.queryHash &&
                      finalizeThenableIfPossible(prevThenable)
                    break
                  case 'fulfilled':
                    ;('error' !== nextResult.status &&
                      nextResult.data === prevThenable.value) ||
                      recreateThenable()
                    break
                  case 'rejected':
                    ;('error' === nextResult.status &&
                      nextResult.error === prevThenable.reason) ||
                      recreateThenable()
                }
              }
              return nextResult
            }
            updateResult() {
              const prevResult = this.#currentResult,
                nextResult = this.createResult(this.#currentQuery, this.options)
              if (
                ((this.#currentResultState = this.#currentQuery.state),
                (this.#currentResultOptions = this.options),
                void 0 !== this.#currentResultState.data &&
                  (this.#lastQueryWithDefinedData = this.#currentQuery),
                (0, utils.f8)(nextResult, prevResult))
              )
                return
              this.#currentResult = nextResult
              this.#notify({
                listeners: (() => {
                  if (!prevResult) return !0
                  const { notifyOnChangeProps } = this.options,
                    notifyOnChangePropsValue =
                      'function' == typeof notifyOnChangeProps
                        ? notifyOnChangeProps()
                        : notifyOnChangeProps
                  if (
                    'all' === notifyOnChangePropsValue ||
                    (!notifyOnChangePropsValue && !this.#trackedProps.size)
                  )
                    return !0
                  const includedProps = new Set(
                    notifyOnChangePropsValue ?? this.#trackedProps
                  )
                  return (
                    this.options.throwOnError && includedProps.add('error'),
                    Object.keys(this.#currentResult).some((key) => {
                      const typedKey = key
                      return (
                        this.#currentResult[typedKey] !==
                          prevResult[typedKey] && includedProps.has(typedKey)
                      )
                    })
                  )
                })(),
              })
            }
            #updateQuery() {
              const query = this.#client
                .getQueryCache()
                .build(this.#client, this.options)
              if (query === this.#currentQuery) return
              const prevQuery = this.#currentQuery
              ;((this.#currentQuery = query),
                (this.#currentQueryInitialState = query.state),
                this.hasListeners() &&
                  (prevQuery?.removeObserver(this), query.addObserver(this)))
            }
            onQueryUpdate() {
              ;(this.updateResult(),
                this.hasListeners() && this.#updateTimers())
            }
            #notify(notifyOptions) {
              notifyManager.jG.batch(() => {
                ;(notifyOptions.listeners &&
                  this.listeners.forEach((listener) => {
                    listener(this.#currentResult)
                  }),
                  this.#client
                    .getQueryCache()
                    .notify({
                      query: this.#currentQuery,
                      type: 'observerResultsUpdated',
                    }))
              })
            }
          }
        function shouldFetchOnMount(query, options) {
          return (
            (function shouldLoadOnMount(query, options) {
              return (
                !1 !== (0, utils.Eh)(options.enabled, query) &&
                void 0 === query.state.data &&
                !('error' === query.state.status && !1 === options.retryOnMount)
              )
            })(query, options) ||
            (void 0 !== query.state.data &&
              shouldFetchOn(query, options, options.refetchOnMount))
          )
        }
        function shouldFetchOn(query, options, field) {
          if (
            !1 !== (0, utils.Eh)(options.enabled, query) &&
            'static' !== (0, utils.d2)(options.staleTime, query)
          ) {
            const value = 'function' == typeof field ? field(query) : field
            return (
              'always' === value || (!1 !== value && isStale(query, options))
            )
          }
          return !1
        }
        function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
          return (
            (query !== prevQuery ||
              !1 === (0, utils.Eh)(prevOptions.enabled, query)) &&
            (!options.suspense || 'error' !== query.state.status) &&
            isStale(query, options)
          )
        }
        function isStale(query, options) {
          return (
            !1 !== (0, utils.Eh)(options.enabled, query) &&
            query.isStaleByTime((0, utils.d2)(options.staleTime, query))
          )
        }
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          QueryClientProvider = __webpack_require__(
            '../../node_modules/.pnpm/@tanstack+react-query@5.83.0_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js'
          )
        __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        function createValue() {
          let isReset = !1
          return {
            clearReset: () => {
              isReset = !1
            },
            reset: () => {
              isReset = !0
            },
            isReset: () => isReset,
          }
        }
        var QueryErrorResetBoundaryContext = react.createContext(createValue()),
          useQueryErrorResetBoundary = () =>
            react.useContext(QueryErrorResetBoundaryContext),
          ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
            ;(options.suspense ||
              options.throwOnError ||
              options.experimental_prefetchInRender) &&
              (errorResetBoundary.isReset() || (options.retryOnMount = !1))
          },
          useClearResetErrorBoundary = (errorResetBoundary) => {
            react.useEffect(() => {
              errorResetBoundary.clearReset()
            }, [errorResetBoundary])
          },
          getHasError = ({
            result,
            errorResetBoundary,
            throwOnError,
            query,
            suspense,
          }) =>
            result.isError &&
            !errorResetBoundary.isReset() &&
            !result.isFetching &&
            query &&
            ((suspense && void 0 === result.data) ||
              (0, utils.GU)(throwOnError, [result.error, query])),
          IsRestoringContext = react.createContext(!1),
          useIsRestoring = () => react.useContext(IsRestoringContext),
          ensureSuspenseTimers =
            (IsRestoringContext.Provider,
            (defaultedOptions) => {
              if (defaultedOptions.suspense) {
                const clamp = (value) =>
                    'static' === value ? value : Math.max(value ?? 1e3, 1e3),
                  originalStaleTime = defaultedOptions.staleTime
                ;((defaultedOptions.staleTime =
                  'function' == typeof originalStaleTime
                    ? (...args) => clamp(originalStaleTime(...args))
                    : clamp(originalStaleTime)),
                  'number' == typeof defaultedOptions.gcTime &&
                    (defaultedOptions.gcTime = Math.max(
                      defaultedOptions.gcTime,
                      1e3
                    )))
              }
            }),
          willFetch = (result, isRestoring) =>
            result.isLoading && result.isFetching && !isRestoring,
          shouldSuspend = (defaultedOptions, result) =>
            defaultedOptions?.suspense && result.isPending,
          fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) =>
            observer.fetchOptimistic(defaultedOptions).catch(() => {
              errorResetBoundary.clearReset()
            })
        function useQuery(options, queryClient) {
          return (function useBaseQuery(options, Observer, queryClient) {
            const isRestoring = useIsRestoring(),
              errorResetBoundary = useQueryErrorResetBoundary(),
              client = (0, QueryClientProvider.jE)(queryClient),
              defaultedOptions = client.defaultQueryOptions(options)
            ;(client
              .getDefaultOptions()
              .queries?._experimental_beforeQuery?.(defaultedOptions),
              (defaultedOptions._optimisticResults = isRestoring
                ? 'isRestoring'
                : 'optimistic'),
              ensureSuspenseTimers(defaultedOptions),
              ensurePreventErrorBoundaryRetry(
                defaultedOptions,
                errorResetBoundary
              ),
              useClearResetErrorBoundary(errorResetBoundary))
            const isNewCacheEntry = !client
                .getQueryCache()
                .get(defaultedOptions.queryHash),
              [observer] = react.useState(
                () => new Observer(client, defaultedOptions)
              ),
              result = observer.getOptimisticResult(defaultedOptions),
              shouldSubscribe = !isRestoring && !1 !== options.subscribed
            if (
              (react.useSyncExternalStore(
                react.useCallback(
                  (onStoreChange) => {
                    const unsubscribe = shouldSubscribe
                      ? observer.subscribe(
                          notifyManager.jG.batchCalls(onStoreChange)
                        )
                      : utils.lQ
                    return (observer.updateResult(), unsubscribe)
                  },
                  [observer, shouldSubscribe]
                ),
                () => observer.getCurrentResult(),
                () => observer.getCurrentResult()
              ),
              react.useEffect(() => {
                observer.setOptions(defaultedOptions)
              }, [defaultedOptions, observer]),
              shouldSuspend(defaultedOptions, result))
            )
              throw fetchOptimistic(
                defaultedOptions,
                observer,
                errorResetBoundary
              )
            if (
              getHasError({
                result,
                errorResetBoundary,
                throwOnError: defaultedOptions.throwOnError,
                query: client.getQueryCache().get(defaultedOptions.queryHash),
                suspense: defaultedOptions.suspense,
              })
            )
              throw result.error
            if (
              (client
                .getDefaultOptions()
                .queries?._experimental_afterQuery?.(defaultedOptions, result),
              defaultedOptions.experimental_prefetchInRender &&
                !utils.S$ &&
                willFetch(result, isRestoring))
            ) {
              const promise = isNewCacheEntry
                ? fetchOptimistic(
                    defaultedOptions,
                    observer,
                    errorResetBoundary
                  )
                : client.getQueryCache().get(defaultedOptions.queryHash)
                    ?.promise
              promise?.catch(utils.lQ).finally(() => {
                observer.updateResult()
              })
            }
            return defaultedOptions.notifyOnChangeProps
              ? result
              : observer.trackResult(result)
          })(options, QueryObserver, queryClient)
        }
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Clock })
        const Clock = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Clock', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Download })
        const Download = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Download', [
          [
            'path',
            { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
          ],
          ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
          ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => File })
        const File = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('File', [
          [
            'path',
            {
              d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
              key: '1rqfz7',
            },
          ],
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Filter })
        const Filter = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Filter', [
          [
            'polygon',
            {
              points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3',
              key: '1yg77f',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Folder })
        const Folder = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Folder', [
          [
            'path',
            {
              d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
              key: '1kt360',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => House })
        const House = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('House', [
          [
            'path',
            { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' },
          ],
          [
            'path',
            {
              d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
              key: '1d0kgt',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/keyboard.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Keyboard })
        const Keyboard = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Keyboard', [
          ['path', { d: 'M10 8h.01', key: '1r9ogq' }],
          ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
          ['path', { d: 'M14 8h.01', key: '1primd' }],
          ['path', { d: 'M16 12h.01', key: '1l6xoz' }],
          ['path', { d: 'M18 8h.01', key: 'emo2bl' }],
          ['path', { d: 'M6 8h.01', key: 'x9i8wu' }],
          ['path', { d: 'M7 16h10', key: 'wp8him' }],
          ['path', { d: 'M8 12h.01', key: 'czm47f' }],
          [
            'rect',
            {
              width: '20',
              height: '16',
              x: '2',
              y: '4',
              rx: '2',
              key: '18n3k1',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Mail })
        const Mail = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Mail', [
          [
            'rect',
            {
              width: '20',
              height: '16',
              x: '2',
              y: '4',
              rx: '2',
              key: '18n3k1',
            },
          ],
          [
            'path',
            { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Monitor })
        const Monitor = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Monitor', [
          [
            'rect',
            {
              width: '20',
              height: '14',
              x: '2',
              y: '3',
              rx: '2',
              key: '48i651',
            },
          ],
          ['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
          ['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Moon })
        const Moon = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Moon', [
          ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Search })
        const Search = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Search', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => SquarePen })
        const SquarePen = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('SquarePen', [
          [
            'path',
            {
              d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
              key: '1m0v6g',
            },
          ],
          [
            'path',
            {
              d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
              key: 'ohrbg2',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Star })
        const Star = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Star', [
          [
            'path',
            {
              d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
              key: 'r04s7s',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Sun })
        const Sun = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Sun', [
          ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
          ['path', { d: 'M12 2v2', key: 'tus03m' }],
          ['path', { d: 'M12 20v2', key: '1lh1kg' }],
          ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
          ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
          ['path', { d: 'M2 12h2', key: '1t8f8n' }],
          ['path', { d: 'M20 12h2', key: '1q8mjw' }],
          ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
          ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Tag })
        const Tag = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Tag', [
          [
            'path',
            {
              d: 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z',
              key: 'vktsd0',
            },
          ],
          [
            'circle',
            {
              cx: '7.5',
              cy: '7.5',
              r: '.5',
              fill: 'currentColor',
              key: 'kqv944',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Trash })
        const Trash = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Trash', [
          ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
          [
            'path',
            { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' },
          ],
          ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => User })
        const User = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('User', [
          [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
          ],
          ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => X })
        const X = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('X', [
          ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
          ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
        ])
      },
  },
])
