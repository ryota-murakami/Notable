/*! For license information please see 4924.75ef9a45.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4924],
  {
    '../../node_modules/.pnpm/direction@1.0.4/node_modules/direction/index.js':
      (module) => {
        'use strict'
        module.exports = function direction(value) {
          if (((value = String(value || '')), rtl.test(value))) return 'rtl'
          if (ltr.test(value)) return 'ltr'
          return 'neutral'
        }
        var LTR = 'A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿',
          rtl = new RegExp('^[^' + LTR + ']*[֑-߿יִ-﷽ﹰ-ﻼ]'),
          ltr = new RegExp('^[^֑-߿יִ-﷽ﹰ-ﻼ]*[' + LTR + ']')
      },
    '../../node_modules/.pnpm/is-hotkey@0.2.0/node_modules/is-hotkey/lib/index.js':
      (__unused_webpack_module, exports) => {
        'use strict'
        for (
          var IS_MAC =
              'undefined' != typeof window &&
              /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
            MODIFIERS = {
              alt: 'altKey',
              control: 'ctrlKey',
              meta: 'metaKey',
              shift: 'shiftKey',
            },
            ALIASES = {
              add: '+',
              break: 'pause',
              cmd: 'meta',
              command: 'meta',
              ctl: 'control',
              ctrl: 'control',
              del: 'delete',
              down: 'arrowdown',
              esc: 'escape',
              ins: 'insert',
              left: 'arrowleft',
              mod: IS_MAC ? 'meta' : 'control',
              opt: 'alt',
              option: 'alt',
              return: 'enter',
              right: 'arrowright',
              space: ' ',
              spacebar: ' ',
              up: 'arrowup',
              win: 'meta',
              windows: 'meta',
            },
            CODES = {
              backspace: 8,
              tab: 9,
              enter: 13,
              shift: 16,
              control: 17,
              alt: 18,
              pause: 19,
              capslock: 20,
              escape: 27,
              ' ': 32,
              pageup: 33,
              pagedown: 34,
              end: 35,
              home: 36,
              arrowleft: 37,
              arrowup: 38,
              arrowright: 39,
              arrowdown: 40,
              insert: 45,
              delete: 46,
              meta: 91,
              numlock: 144,
              scrolllock: 145,
              ';': 186,
              '=': 187,
              ',': 188,
              '-': 189,
              '.': 190,
              '/': 191,
              '`': 192,
              '[': 219,
              '\\': 220,
              ']': 221,
              "'": 222,
            },
            f = 1;
          f < 20;
          f++
        )
          CODES['f' + f] = 111 + f
        function isHotkey(hotkey, options, event) {
          ;(options &&
            !('byKey' in options) &&
            ((event = options), (options = null)),
            Array.isArray(hotkey) || (hotkey = [hotkey]))
          var array = hotkey.map(function (string) {
              return parseHotkey(string, options)
            }),
            check = function check(e) {
              return array.some(function (object) {
                return compareHotkey(object, e)
              })
            }
          return null == event ? check : check(event)
        }
        function parseHotkey(hotkey, options) {
          var byKey = options && options.byKey,
            ret = {},
            values = (hotkey = hotkey.replace('++', '+add')).split('+'),
            length = values.length
          for (var k in MODIFIERS) ret[MODIFIERS[k]] = !1
          var _iteratorNormalCompletion = !0,
            _didIteratorError = !1,
            _iteratorError = void 0
          try {
            for (
              var _step, _iterator = values[Symbol.iterator]();
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = !0
            ) {
              var value = _step.value,
                optional = value.endsWith('?') && value.length > 1
              optional && (value = value.slice(0, -1))
              var name = toKeyName(value),
                modifier = MODIFIERS[name]
              if (
                value.length > 1 &&
                !modifier &&
                !ALIASES[value] &&
                !CODES[name]
              )
                throw new TypeError('Unknown modifier: "' + value + '"')
              ;((1 !== length && modifier) ||
                (byKey ? (ret.key = name) : (ret.which = toKeyCode(value))),
                modifier && (ret[modifier] = !optional || null))
            }
          } catch (err) {
            ;((_didIteratorError = !0), (_iteratorError = err))
          } finally {
            try {
              !_iteratorNormalCompletion &&
                _iterator.return &&
                _iterator.return()
            } finally {
              if (_didIteratorError) throw _iteratorError
            }
          }
          return ret
        }
        function compareHotkey(object, event) {
          for (var key in object) {
            var expected = object[key],
              actual = void 0
            if (
              null != expected &&
              (null !=
                (actual =
                  'key' === key && null != event.key
                    ? event.key.toLowerCase()
                    : 'which' === key
                      ? 91 === expected && 93 === event.which
                        ? 91
                        : event.which
                      : event[key]) ||
                !1 !== expected) &&
              actual !== expected
            )
              return !1
          }
          return !0
        }
        function toKeyCode(name) {
          return (
            (name = toKeyName(name)),
            CODES[name] || name.toUpperCase().charCodeAt(0)
          )
        }
        function toKeyName(name) {
          return ((name = name.toLowerCase()), (name = ALIASES[name] || name))
        }
        ;((exports.v_ = isHotkey),
          (exports.Sn = function isKeyHotkey(hotkey, event) {
            return isHotkey(hotkey, { byKey: !0 }, event)
          }))
      },
    '../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        function isObject(o) {
          return '[object Object]' === Object.prototype.toString.call(o)
        }
        function isPlainObject(o) {
          var ctor, prot
          return (
            !1 !== isObject(o) &&
            (void 0 === (ctor = o.constructor) ||
              (!1 !== isObject((prot = ctor.prototype)) &&
                !1 !== prot.hasOwnProperty('isPrototypeOf')))
          )
        }
        __webpack_require__.d(__webpack_exports__, { Q: () => isPlainObject })
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Symbol = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
      ).Symbol
      module.exports = Symbol
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          getRawTag = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js'
          ),
          objectToString = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js'
          ),
          symToStringTag = Symbol ? Symbol.toStringTag : void 0
        module.exports = function baseGetTag(value) {
          return null == value
            ? void 0 === value
              ? '[object Undefined]'
              : '[object Null]'
            : symToStringTag && symToStringTag in Object(value)
              ? getRawTag(value)
              : objectToString(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var trimmedEndIndex = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js'
          ),
          reTrimStart = /^\s+/
        module.exports = function baseTrim(string) {
          return string
            ? string
                .slice(0, trimmedEndIndex(string) + 1)
                .replace(reTrimStart, '')
            : string
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var freeGlobal =
          'object' == typeof __webpack_require__.g &&
          __webpack_require__.g &&
          __webpack_require__.g.Object === Object &&
          __webpack_require__.g
        module.exports = freeGlobal
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var Symbol = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js'
          ),
          objectProto = Object.prototype,
          hasOwnProperty = objectProto.hasOwnProperty,
          nativeObjectToString = objectProto.toString,
          symToStringTag = Symbol ? Symbol.toStringTag : void 0
        module.exports = function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag]
          try {
            value[symToStringTag] = void 0
            var unmasked = !0
          } catch (e) {}
          var result = nativeObjectToString.call(value)
          return (
            unmasked &&
              (isOwn
                ? (value[symToStringTag] = tag)
                : delete value[symToStringTag]),
            result
          )
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js':
      (module) => {
        var nativeObjectToString = Object.prototype.toString
        module.exports = function objectToString(value) {
          return nativeObjectToString.call(value)
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var freeGlobal = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js'
        ),
        freeSelf =
          'object' == typeof self && self && self.Object === Object && self,
        root = freeGlobal || freeSelf || Function('return this')()
      module.exports = root
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js':
      (module) => {
        var reWhitespace = /\s/
        module.exports = function trimmedEndIndex(string) {
          for (
            var index = string.length;
            index-- && reWhitespace.test(string.charAt(index));

          );
          return index
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var isObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
        ),
        now = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js'
        ),
        toNumber = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js'
        ),
        nativeMax = Math.max,
        nativeMin = Math.min
      module.exports = function debounce(func, wait, options) {
        var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = !1,
          maxing = !1,
          trailing = !0
        if ('function' != typeof func)
          throw new TypeError('Expected a function')
        function invokeFunc(time) {
          var args = lastArgs,
            thisArg = lastThis
          return (
            (lastArgs = lastThis = void 0),
            (lastInvokeTime = time),
            (result = func.apply(thisArg, args))
          )
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime
          return (
            void 0 === lastCallTime ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && time - lastInvokeTime >= maxWait)
          )
        }
        function timerExpired() {
          var time = now()
          if (shouldInvoke(time)) return trailingEdge(time)
          timerId = setTimeout(
            timerExpired,
            (function remainingWait(time) {
              var timeWaiting = wait - (time - lastCallTime)
              return maxing
                ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime))
                : timeWaiting
            })(time)
          )
        }
        function trailingEdge(time) {
          return (
            (timerId = void 0),
            trailing && lastArgs
              ? invokeFunc(time)
              : ((lastArgs = lastThis = void 0), result)
          )
        }
        function debounced() {
          var time = now(),
            isInvoking = shouldInvoke(time)
          if (
            ((lastArgs = arguments),
            (lastThis = this),
            (lastCallTime = time),
            isInvoking)
          ) {
            if (void 0 === timerId)
              return (function leadingEdge(time) {
                return (
                  (lastInvokeTime = time),
                  (timerId = setTimeout(timerExpired, wait)),
                  leading ? invokeFunc(time) : result
                )
              })(lastCallTime)
            if (maxing)
              return (
                clearTimeout(timerId),
                (timerId = setTimeout(timerExpired, wait)),
                invokeFunc(lastCallTime)
              )
          }
          return (
            void 0 === timerId && (timerId = setTimeout(timerExpired, wait)),
            result
          )
        }
        return (
          (wait = toNumber(wait) || 0),
          isObject(options) &&
            ((leading = !!options.leading),
            (maxWait = (maxing = 'maxWait' in options)
              ? nativeMax(toNumber(options.maxWait) || 0, wait)
              : maxWait),
            (trailing = 'trailing' in options ? !!options.trailing : trailing)),
          (debounced.cancel = function cancel() {
            ;(void 0 !== timerId && clearTimeout(timerId),
              (lastInvokeTime = 0),
              (lastArgs = lastCallTime = lastThis = timerId = void 0))
          }),
          (debounced.flush = function flush() {
            return void 0 === timerId ? result : trailingEdge(now())
          }),
          debounced
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js': (
      module
    ) => {
      module.exports = function isObject(value) {
        var type = typeof value
        return null != value && ('object' == type || 'function' == type)
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js':
      (module) => {
        module.exports = function isObjectLike(value) {
          return null != value && 'object' == typeof value
        }
      },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseGetTag = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js'
        ),
        isObjectLike = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js'
        )
      module.exports = function isSymbol(value) {
        return (
          'symbol' == typeof value ||
          (isObjectLike(value) && '[object Symbol]' == baseGetTag(value))
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var root = __webpack_require__(
        '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js'
      )
      module.exports = function () {
        return root.Date.now()
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var debounce = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js'
        ),
        isObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
        )
      module.exports = function throttle(func, wait, options) {
        var leading = !0,
          trailing = !0
        if ('function' != typeof func)
          throw new TypeError('Expected a function')
        return (
          isObject(options) &&
            ((leading = 'leading' in options ? !!options.leading : leading),
            (trailing = 'trailing' in options ? !!options.trailing : trailing)),
          debounce(func, wait, { leading, maxWait: wait, trailing })
        )
      }
    },
    '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseTrim = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js'
        ),
        isObject = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js'
        ),
        isSymbol = __webpack_require__(
          '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js'
        ),
        reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
        reIsBinary = /^0b[01]+$/i,
        reIsOctal = /^0o[0-7]+$/i,
        freeParseInt = parseInt
      module.exports = function toNumber(value) {
        if ('number' == typeof value) return value
        if (isSymbol(value)) return NaN
        if (isObject(value)) {
          var other =
            'function' == typeof value.valueOf ? value.valueOf() : value
          value = isObject(other) ? other + '' : other
        }
        if ('string' != typeof value) return 0 === value ? value : +value
        value = baseTrim(value)
        var isBinary = reIsBinary.test(value)
        return isBinary || reIsOctal.test(value)
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : reIsBadHex.test(value)
            ? NaN
            : +value
      }
    },
    '../../node_modules/.pnpm/slate-react@0.117.4_react-dom@19.1.0_react@19.1.0__react@19.1.0_slate-dom@0.117.4_slate@0.117.2__slate@0.117.2/node_modules/slate-react/dist/index.es.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Fo: () => Editable,
          A: () => Slate,
          nY: () => useComposing,
          zL: () => useFocused,
          cQ: () => useReadOnly,
          f7: () => useSelected,
          o$: () => withReact,
        })
        var direction = __webpack_require__(
            '../../node_modules/.pnpm/direction@1.0.4/node_modules/direction/index.js'
          ),
          direction_default = __webpack_require__.n(direction),
          debounce = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js'
          ),
          debounce_default = __webpack_require__.n(debounce),
          throttle = __webpack_require__(
            '../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js'
          ),
          throttle_default = __webpack_require__.n(throttle),
          react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          )
        const t = (t) => 'object' == typeof t && null != t && 1 === t.nodeType,
          e = (t, e) =>
            (!e || 'hidden' !== t) && 'visible' !== t && 'clip' !== t,
          n = (t, n) => {
            if (
              t.clientHeight < t.scrollHeight ||
              t.clientWidth < t.scrollWidth
            ) {
              const o = getComputedStyle(t, null)
              return (
                e(o.overflowY, n) ||
                e(o.overflowX, n) ||
                ((t) => {
                  const e = ((t) => {
                    if (!t.ownerDocument || !t.ownerDocument.defaultView)
                      return null
                    try {
                      return t.ownerDocument.defaultView.frameElement
                    } catch (t) {
                      return null
                    }
                  })(t)
                  return (
                    !!e &&
                    (e.clientHeight < t.scrollHeight ||
                      e.clientWidth < t.scrollWidth)
                  )
                })(t)
              )
            }
            return !1
          },
          o = (t, e, n, o, l, r, i, s) =>
            (r < t && i > e) || (r > t && i < e)
              ? 0
              : (r <= t && s <= n) || (i >= e && s >= n)
                ? r - t - o
                : (i > e && s < n) || (r < t && s > n)
                  ? i - e + l
                  : 0,
          l = (t) => {
            const e = t.parentElement
            return null == e ? t.getRootNode().host || null : e
          },
          dist_r = (e, r) => {
            var i, s, d, h
            if ('undefined' == typeof document) return []
            const {
                scrollMode: c,
                block: f,
                inline: u,
                boundary: a,
                skipOverflowHiddenElements: g,
              } = r,
              p = 'function' == typeof a ? a : (t) => t !== a
            if (!t(e)) throw new TypeError('Invalid target')
            const m = document.scrollingElement || document.documentElement,
              w = []
            let W = e
            for (; t(W) && p(W); ) {
              if (((W = l(W)), W === m)) {
                w.push(W)
                break
              }
              ;(null != W &&
                W === document.body &&
                n(W) &&
                !n(document.documentElement)) ||
                (null != W && n(W, g) && w.push(W))
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
              } = e.getBoundingClientRect(),
              {
                top: T,
                right: B,
                bottom: F,
                left: V,
              } = ((t) => {
                const e = window.getComputedStyle(t)
                return {
                  top: parseFloat(e.scrollMarginTop) || 0,
                  right: parseFloat(e.scrollMarginRight) || 0,
                  bottom: parseFloat(e.scrollMarginBottom) || 0,
                  left: parseFloat(e.scrollMarginLeft) || 0,
                }
              })(e)
            let k =
                'start' === f || 'nearest' === f
                  ? x - T
                  : 'end' === f
                    ? I + F
                    : x + v / 2 - T + F,
              D =
                'center' === u ? R + E / 2 - V + B : 'end' === u ? C + B : R - V
            const L = []
            for (let t = 0; t < w.length; t++) {
              const e = w[t],
                {
                  height: l,
                  width: r,
                  top: i,
                  right: s,
                  bottom: d,
                  left: h,
                } = e.getBoundingClientRect()
              if (
                'if-needed' === c &&
                x >= 0 &&
                R >= 0 &&
                I <= H &&
                C <= b &&
                ((e === m && !n(e)) || (x >= i && I <= d && R >= h && C <= s))
              )
                return L
              const a = getComputedStyle(e),
                g = parseInt(a.borderLeftWidth, 10),
                p = parseInt(a.borderTopWidth, 10),
                W = parseInt(a.borderRightWidth, 10),
                T = parseInt(a.borderBottomWidth, 10)
              let B = 0,
                F = 0
              const V =
                  'offsetWidth' in e
                    ? e.offsetWidth - e.clientWidth - g - W
                    : 0,
                S =
                  'offsetHeight' in e
                    ? e.offsetHeight - e.clientHeight - p - T
                    : 0,
                X =
                  'offsetWidth' in e
                    ? 0 === e.offsetWidth
                      ? 0
                      : r / e.offsetWidth
                    : 0,
                Y =
                  'offsetHeight' in e
                    ? 0 === e.offsetHeight
                      ? 0
                      : l / e.offsetHeight
                    : 0
              if (m === e)
                ((B =
                  'start' === f
                    ? k
                    : 'end' === f
                      ? k - H
                      : 'nearest' === f
                        ? o(M, M + H, H, p, T, M + k, M + k + v, v)
                        : k - H / 2),
                  (F =
                    'start' === u
                      ? D
                      : 'center' === u
                        ? D - b / 2
                        : 'end' === u
                          ? D - b
                          : o(y, y + b, b, g, W, y + D, y + D + E, E)),
                  (B = Math.max(0, B + M)),
                  (F = Math.max(0, F + y)))
              else {
                ;((B =
                  'start' === f
                    ? k - i - p
                    : 'end' === f
                      ? k - d + T + S
                      : 'nearest' === f
                        ? o(i, d, l, p, T + S, k, k + v, v)
                        : k - (i + l / 2) + S / 2),
                  (F =
                    'start' === u
                      ? D - h - g
                      : 'center' === u
                        ? D - (h + r / 2) + V / 2
                        : 'end' === u
                          ? D - s + W + V
                          : o(h, s, r, g, W + V, D, D + E, E)))
                const { scrollLeft: t, scrollTop: n } = e
                ;((B =
                  0 === Y
                    ? 0
                    : Math.max(
                        0,
                        Math.min(n + B / Y, e.scrollHeight - l / Y + S)
                      )),
                  (F =
                    0 === X
                      ? 0
                      : Math.max(
                          0,
                          Math.min(t + F / X, e.scrollWidth - r / X + V)
                        )),
                  (k += n - B),
                  (D += t - F))
              }
              L.push({ el: e, top: B, left: F })
            }
            return L
          }
        function dist_e(e, r) {
          if (
            !e.isConnected ||
            !((t) => {
              let o = t
              for (; o && o.parentNode; ) {
                if (o.parentNode === document) return !0
                o =
                  o.parentNode instanceof ShadowRoot
                    ? o.parentNode.host
                    : o.parentNode
              }
              return !1
            })(e)
          )
            return
          const n = ((t) => {
            const o = window.getComputedStyle(t)
            return {
              top: parseFloat(o.scrollMarginTop) || 0,
              right: parseFloat(o.scrollMarginRight) || 0,
              bottom: parseFloat(o.scrollMarginBottom) || 0,
              left: parseFloat(o.scrollMarginLeft) || 0,
            }
          })(e)
          if (
            ((t) => 'object' == typeof t && 'function' == typeof t.behavior)(r)
          )
            return r.behavior(dist_r(e, r))
          const l = 'boolean' == typeof r || null == r ? void 0 : r.behavior
          for (const { el: a, top: i, left: s } of dist_r(
            e,
            ((t) =>
              !1 === t
                ? { block: 'end', inline: 'nearest' }
                : ((t) => t === Object(t) && 0 !== Object.keys(t).length)(t)
                  ? t
                  : { block: 'start', inline: 'nearest' })(r)
          )) {
            const t = i - n.top + n.bottom,
              o = s - n.left + n.right
            a.scroll({ top: t, left: o, behavior: l })
          }
        }
        var _navigator$userAgent$,
          _navigator$userAgent$2,
          index_es = __webpack_require__(
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
          isDOMText = (value) => isDOMNode(value) && 3 === value.nodeType,
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
          getPlainText = (domNode) => {
            var text = ''
            if (isDOMText(domNode) && domNode.nodeValue)
              return domNode.nodeValue
            if (isDOMElement(domNode)) {
              for (var childNode of Array.from(domNode.childNodes))
                text += getPlainText(childNode)
              var display =
                getComputedStyle(domNode).getPropertyValue('display')
              ;('block' !== display &&
                'list' !== display &&
                'BR' !== domNode.tagName) ||
                (text += '\n')
            }
            return text
          },
          catchSlateFragment = /data-slate-fragment="(.+?)"/m,
          getSelection = (root) =>
            null != root.getSelection
              ? root.getSelection()
              : document.getSelection(),
          isTrackedMutation = (editor, mutation, batch) => {
            var { target } = mutation
            if (
              isDOMElement(target) &&
              target.matches('[contentEditable="false"]')
            )
              return !1
            var { document } = DOMEditor.getWindow(editor)
            if (document.contains(target))
              return DOMEditor.hasDOMNode(editor, target, { editable: !0 })
            var parentMutation = batch.find((_ref) => {
              var { addedNodes, removedNodes } = _ref
              for (var node of addedNodes)
                if (node === target || node.contains(target)) return !0
              for (var _node of removedNodes)
                if (_node === target || _node.contains(target)) return !0
            })
            return (
              !(!parentMutation || parentMutation === mutation) &&
              isTrackedMutation(editor, parentMutation, batch)
            )
          },
          isBefore = (node, otherNode) =>
            Boolean(
              node.compareDocumentPosition(otherNode) &
                DOMNode.DOCUMENT_POSITION_PRECEDING
            ),
          IS_IOS =
            'undefined' != typeof navigator &&
            'undefined' != typeof window &&
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !window.MSStream,
          IS_APPLE =
            'undefined' != typeof navigator &&
            /Mac OS X/.test(navigator.userAgent),
          IS_ANDROID =
            'undefined' != typeof navigator &&
            /Android/.test(navigator.userAgent),
          IS_FIREFOX =
            'undefined' != typeof navigator &&
            /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
          IS_WEBKIT =
            'undefined' != typeof navigator &&
            /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent),
          IS_EDGE_LEGACY =
            'undefined' != typeof navigator &&
            /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
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
            /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
          IS_FIREFOX_LEGACY =
            'undefined' != typeof navigator &&
            /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
              navigator.userAgent
            ),
          IS_UC_MOBILE =
            'undefined' != typeof navigator &&
            /.*UCBrowser/.test(navigator.userAgent),
          IS_WECHATBROWSER =
            'undefined' != typeof navigator &&
            /.*Wechat/.test(navigator.userAgent) &&
            !/.*MacWechat/.test(navigator.userAgent) &&
            (!IS_CHROME || IS_CHROME_LEGACY),
          CAN_USE_DOM = !(
            'undefined' == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          )
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
        var HAS_BEFORE_INPUT_SUPPORT =
          (!IS_CHROME_LEGACY || !IS_ANDROID_CHROME_LEGACY) &&
          !IS_EDGE_LEGACY &&
          'undefined' != typeof globalThis &&
          globalThis.InputEvent &&
          'function' == typeof globalThis.InputEvent.prototype.getTargetRanges
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
        var index_es_n = 0
        class Key {
          constructor() {
            ;(_defineProperty(this, 'id', void 0),
              (this.id = ''.concat(index_es_n++)))
          }
        }
        var IS_NODE_MAP_DIRTY = new WeakMap(),
          NODE_TO_INDEX = new WeakMap(),
          NODE_TO_PARENT = new WeakMap(),
          EDITOR_TO_WINDOW = new WeakMap(),
          EDITOR_TO_ELEMENT = new WeakMap(),
          EDITOR_TO_PLACEHOLDER_ELEMENT = new WeakMap(),
          ELEMENT_TO_NODE = new WeakMap(),
          NODE_TO_ELEMENT = new WeakMap(),
          NODE_TO_KEY = new WeakMap(),
          EDITOR_TO_KEY_TO_ELEMENT = new WeakMap(),
          IS_READ_ONLY = new WeakMap(),
          IS_FOCUSED = new WeakMap(),
          IS_COMPOSING = new WeakMap(),
          EDITOR_TO_USER_SELECTION = new WeakMap(),
          EDITOR_TO_ON_CHANGE = new WeakMap(),
          EDITOR_TO_SCHEDULE_FLUSH = new WeakMap(),
          EDITOR_TO_PENDING_INSERTION_MARKS = new WeakMap(),
          EDITOR_TO_USER_MARKS = new WeakMap(),
          EDITOR_TO_PENDING_DIFFS = new WeakMap(),
          EDITOR_TO_PENDING_ACTION = new WeakMap(),
          EDITOR_TO_PENDING_SELECTION = new WeakMap(),
          EDITOR_TO_FORCE_RENDER = new WeakMap(),
          PLACEHOLDER_SYMBOL = Symbol('placeholder'),
          MARK_PLACEHOLDER_SYMBOL = Symbol('mark-placeholder'),
          DOMEditor = {
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
                selection && index_es.gB.deselect(editor))
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
                index_es.Hg.isElement(node) &&
                index_es.KE.isVoid(editor, node)
              ) {
                var rect = target.getBoundingClientRect(),
                  isPrev = editor.isInline(node)
                    ? x - rect.left < rect.left + rect.width - x
                    : y - rect.top < rect.top + rect.height - y,
                  edge = index_es.KE.point(editor, path, {
                    edge: isPrev ? 'start' : 'end',
                  }),
                  point = isPrev
                    ? index_es.KE.before(editor, edge)
                    : index_es.KE.after(editor, edge)
                if (point) return index_es.KE.range(editor, point)
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
                key || ((key = new Key()), NODE_TO_KEY.set(node, key)),
                key
              )
            },
            findPath: (editor, node) => {
              for (var path = [], child = node; ; ) {
                var parent = NODE_TO_PARENT.get(child)
                if (null == parent) {
                  if (index_es.KE.isEditor(child)) return path
                  break
                }
                var i = NODE_TO_INDEX.get(child)
                if (null == i) break
                ;(path.unshift(i), (child = parent))
              }
              throw new Error(
                'Unable to find the path for Slate node: '.concat(
                  index_es.h6.stringify(node)
                )
              )
            },
            focus: function focus(editor) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { retries: 5 }
              if (!IS_FOCUSED.get(editor) && EDITOR_TO_ELEMENT.get(editor)) {
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
                      ;(null == domSelection || domSelection.removeAllRanges(),
                        null == domSelection || domSelection.addRange(domRange))
                    }
                    ;(editor.selection ||
                      index_es.gB.select(editor, index_es.KE.start(editor, [])),
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
                targetEl = isDOMElement(target) ? target : target.parentElement
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
                index_es.KE.hasPath(editor, anchor.path) &&
                index_es.KE.hasPath(editor, focus.path)
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
                index_es.Hg.isElement(slateNode) &&
                index_es.KE.isVoid(editor, slateNode)
              )
            },
            setFragmentData: (editor, data, originEvent) =>
              editor.setFragmentData(data, originEvent),
            toDOMNode: (editor, node) => {
              var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor),
                domNode = index_es.KE.isEditor(node)
                  ? EDITOR_TO_ELEMENT.get(editor)
                  : null == KEY_TO_ELEMENT
                    ? void 0
                    : KEY_TO_ELEMENT.get(DOMEditor.findKey(editor, node))
              if (!domNode)
                throw new Error(
                  'Cannot resolve a DOM node from Slate node: '.concat(
                    index_es.h6.stringify(node)
                  )
                )
              return domNode
            },
            toDOMPoint: (editor, point) => {
              var domPoint,
                [node] = index_es.KE.node(editor, point.path),
                el = DOMEditor.toDOMNode(editor, node)
              index_es.KE.void(editor, { at: point }) &&
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
                    end = start + (null == attr ? length : parseInt(attr, 10)),
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
                      null !== (_nextText$textContent = nextText.textContent) &&
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
                    index_es.h6.stringify(point)
                  )
                )
              return domPoint
            },
            toDOMRange: (editor, range) => {
              var { anchor, focus } = range,
                isBackward = index_es.Q6.isBackward(range),
                domAnchor = DOMEditor.toDOMPoint(editor, anchor),
                domFocus = index_es.Q6.isCollapsed(range)
                  ? domAnchor
                  : DOMEditor.toDOMPoint(editor, focus),
                domRange = DOMEditor.getWindow(editor).document.createRange(),
                [startNode, startOffset] = isBackward ? domFocus : domAnchor,
                [endNode, endOffset] = isBackward ? domAnchor : domFocus,
                isStartAtZeroWidth = !!(
                  isDOMElement(startNode) ? startNode : startNode.parentElement
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
                    ((textNode = leafNode.closest('[data-slate-node="text"]')),
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
                      null !== (_domNode$textContent2 = domNode.textContent) &&
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
                    { path: _path, offset: _offset } = index_es.KE.start(
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
                index_es.Q6.isExpanded(range) &&
                  index_es.Q6.isForward(range) &&
                  isDOMElement(focusNode) &&
                  index_es.KE.void(editor, {
                    at: range.focus,
                    mode: 'highest',
                  }) &&
                  (range = index_es.KE.unhangRange(editor, range, {
                    voids: !0,
                  })),
                range
              )
            },
          }
        function verifyDiffState(editor, textDiff) {
          var { path, diff } = textDiff
          if (!index_es.KE.hasPath(editor, path)) return !1
          var node = index_es.bP.get(editor, path)
          if (!index_es.EY.isText(node)) return !1
          if (diff.start !== node.text.length || 0 === diff.text.length)
            return (
              node.text.slice(diff.start, diff.start + diff.text.length) ===
              diff.text
            )
          var nextPath = index_es.wA.next(path)
          if (!index_es.KE.hasPath(editor, nextPath)) return !1
          var nextNode = index_es.bP.get(editor, nextPath)
          return (
            index_es.EY.isText(nextNode) && nextNode.text.startsWith(diff.text)
          )
        }
        function applyStringDiff(text) {
          for (
            var _len = arguments.length,
              diffs = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            diffs[_key - 1] = arguments[_key]
          return diffs.reduce(
            (text, diff) =>
              text.slice(0, diff.start) + diff.text + text.slice(diff.end),
            text
          )
        }
        function normalizeStringDiff(targetText, diff) {
          var { start, end, text } = diff,
            removedText = targetText.slice(start, end),
            prefixLength = (function longestCommonPrefixLength(str, another) {
              for (
                var length = Math.min(str.length, another.length), i = 0;
                i < length;
                i++
              )
                if (str.charAt(i) !== another.charAt(i)) return i
              return length
            })(removedText, text),
            suffixLength = (function longestCommonSuffixLength(
              str,
              another,
              max
            ) {
              for (
                var length = Math.min(str.length, another.length, max), i = 0;
                i < length;
                i++
              )
                if (
                  str.charAt(str.length - i - 1) !==
                  another.charAt(another.length - i - 1)
                )
                  return i
              return length
            })(
              removedText,
              text,
              Math.min(
                removedText.length - prefixLength,
                text.length - prefixLength
              )
            ),
            normalized = {
              start: start + prefixLength,
              end: end - suffixLength,
              text: text.slice(prefixLength, text.length - suffixLength),
            }
          return normalized.start === normalized.end &&
            0 === normalized.text.length
            ? null
            : normalized
        }
        function targetRange(textDiff) {
          var { path, diff } = textDiff
          return {
            anchor: { path, offset: diff.start },
            focus: { path, offset: diff.end },
          }
        }
        function normalizePoint(editor, point) {
          var { path, offset } = point
          if (!index_es.KE.hasPath(editor, path)) return null
          var leaf = index_es.bP.get(editor, path)
          if (!index_es.EY.isText(leaf)) return null
          var parentBlock = index_es.KE.above(editor, {
            match: (n) =>
              index_es.Hg.isElement(n) && index_es.KE.isBlock(editor, n),
            at: path,
          })
          if (!parentBlock) return null
          for (; offset > leaf.text.length; ) {
            var entry = index_es.KE.next(editor, {
              at: path,
              match: index_es.EY.isText,
            })
            if (!entry || !index_es.wA.isDescendant(entry[1], parentBlock[1]))
              return null
            ;((offset -= leaf.text.length),
              (leaf = entry[0]),
              (path = entry[1]))
          }
          return { path, offset }
        }
        function normalizeRange(editor, range) {
          var anchor = normalizePoint(editor, range.anchor)
          if (!anchor) return null
          if (index_es.Q6.isCollapsed(range)) return { anchor, focus: anchor }
          var focus = normalizePoint(editor, range.focus)
          return focus ? { anchor, focus } : null
        }
        function transformPendingPoint(editor, point, op) {
          var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor),
            textDiff =
              null == pendingDiffs
                ? void 0
                : pendingDiffs.find((_ref) => {
                    var { path } = _ref
                    return index_es.wA.equals(path, point.path)
                  })
          if (!textDiff || point.offset <= textDiff.diff.start)
            return index_es.bR.transform(point, op, { affinity: 'backward' })
          var { diff } = textDiff
          if (point.offset <= diff.start + diff.text.length) {
            var _anchor = { path: point.path, offset: diff.start },
              _transformed = index_es.bR.transform(_anchor, op, {
                affinity: 'backward',
              })
            return _transformed
              ? {
                  path: _transformed.path,
                  offset: _transformed.offset + point.offset - diff.start,
                }
              : null
          }
          var anchor = {
              path: point.path,
              offset: point.offset - diff.text.length + diff.end - diff.start,
            },
            transformed = index_es.bR.transform(anchor, op, {
              affinity: 'backward',
            })
          return transformed
            ? 'split_node' === op.type &&
              index_es.wA.equals(op.path, point.path) &&
              anchor.offset < op.position &&
              diff.start < op.position
              ? transformed
              : {
                  path: transformed.path,
                  offset:
                    transformed.offset +
                    diff.text.length -
                    diff.end +
                    diff.start,
                }
            : null
        }
        function transformPendingRange(editor, range, op) {
          var anchor = transformPendingPoint(editor, range.anchor, op)
          if (!anchor) return null
          if (index_es.Q6.isCollapsed(range)) return { anchor, focus: anchor }
          var focus = transformPendingPoint(editor, range.focus, op)
          return focus ? { anchor, focus } : null
        }
        var doRectsIntersect = (rect, compareRect) => {
            var middle = (compareRect.top + compareRect.bottom) / 2
            return rect.top <= middle && rect.bottom >= middle
          },
          areRangesSameLine = (editor, range1, range2) => {
            var rect1 = DOMEditor.toDOMRange(
                editor,
                range1
              ).getBoundingClientRect(),
              rect2 = DOMEditor.toDOMRange(
                editor,
                range2
              ).getBoundingClientRect()
            return (
              doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1)
            )
          }
        function ownKeys$1(e, r) {
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
        function _objectSpread$1(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$1(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$1(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var withDOM = function withDOM(editor) {
            var clipboardFormatKey =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'x-slate-fragment',
              e = editor,
              { apply, onChange, deleteBackward, addMark, removeMark } = e
            return (
              EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap()),
              (e.addMark = (key, value) => {
                var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI
                ;(null ===
                  (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) ||
                  void 0 === _EDITOR_TO_SCHEDULE_F ||
                  _EDITOR_TO_SCHEDULE_F(),
                  !EDITOR_TO_PENDING_INSERTION_MARKS.get(e) &&
                    null !==
                      (_EDITOR_TO_PENDING_DI =
                        EDITOR_TO_PENDING_DIFFS.get(e)) &&
                    void 0 !== _EDITOR_TO_PENDING_DI &&
                    _EDITOR_TO_PENDING_DI.length &&
                    EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null),
                  EDITOR_TO_USER_MARKS.delete(e),
                  addMark(key, value))
              }),
              (e.removeMark = (key) => {
                var _EDITOR_TO_PENDING_DI2
                ;(!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) &&
                  null !==
                    (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) &&
                  void 0 !== _EDITOR_TO_PENDING_DI2 &&
                  _EDITOR_TO_PENDING_DI2.length &&
                  EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null),
                  EDITOR_TO_USER_MARKS.delete(e),
                  removeMark(key))
              }),
              (e.deleteBackward = (unit) => {
                if ('line' !== unit) return deleteBackward(unit)
                if (e.selection && index_es.Q6.isCollapsed(e.selection)) {
                  var parentBlockEntry = index_es.KE.above(e, {
                    match: (n) =>
                      index_es.Hg.isElement(n) && index_es.KE.isBlock(e, n),
                    at: e.selection,
                  })
                  if (parentBlockEntry) {
                    var [, parentBlockPath] = parentBlockEntry,
                      parentElementRange = index_es.KE.range(
                        e,
                        parentBlockPath,
                        e.selection.anchor
                      ),
                      currentLineRange = ((editor, parentRange) => {
                        var parentRangeBoundary = index_es.KE.range(
                            editor,
                            index_es.Q6.end(parentRange)
                          ),
                          positions = Array.from(
                            index_es.KE.positions(editor, { at: parentRange })
                          ),
                          left = 0,
                          right = positions.length,
                          middle = Math.floor(right / 2)
                        if (
                          areRangesSameLine(
                            editor,
                            index_es.KE.range(editor, positions[left]),
                            parentRangeBoundary
                          )
                        )
                          return index_es.KE.range(
                            editor,
                            positions[left],
                            parentRangeBoundary
                          )
                        if (positions.length < 2)
                          return index_es.KE.range(
                            editor,
                            positions[positions.length - 1],
                            parentRangeBoundary
                          )
                        for (; middle !== positions.length && middle !== left; )
                          (areRangesSameLine(
                            editor,
                            index_es.KE.range(editor, positions[middle]),
                            parentRangeBoundary
                          )
                            ? (right = middle)
                            : (left = middle),
                            (middle = Math.floor((left + right) / 2)))
                        return index_es.KE.range(
                          editor,
                          positions[left],
                          parentRangeBoundary
                        )
                      })(e, parentElementRange)
                    index_es.Q6.isCollapsed(currentLineRange) ||
                      index_es.gB.delete(e, { at: currentLineRange })
                  }
                }
              }),
              (e.apply = (op) => {
                var matches = [],
                  pathRefMatches = [],
                  pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e)
                if (null != pendingDiffs && pendingDiffs.length) {
                  var transformed = pendingDiffs
                    .map((textDiff) =>
                      (function transformTextDiff(textDiff, op) {
                        var { path, diff, id } = textDiff
                        switch (op.type) {
                          case 'insert_text':
                            return !index_es.wA.equals(op.path, path) ||
                              op.offset >= diff.end
                              ? textDiff
                              : op.offset <= diff.start
                                ? {
                                    diff: {
                                      start: op.text.length + diff.start,
                                      end: op.text.length + diff.end,
                                      text: diff.text,
                                    },
                                    id,
                                    path,
                                  }
                                : {
                                    diff: {
                                      start: diff.start,
                                      end: diff.end + op.text.length,
                                      text: diff.text,
                                    },
                                    id,
                                    path,
                                  }
                          case 'remove_text':
                            return !index_es.wA.equals(op.path, path) ||
                              op.offset >= diff.end
                              ? textDiff
                              : op.offset + op.text.length <= diff.start
                                ? {
                                    diff: {
                                      start: diff.start - op.text.length,
                                      end: diff.end - op.text.length,
                                      text: diff.text,
                                    },
                                    id,
                                    path,
                                  }
                                : {
                                    diff: {
                                      start: diff.start,
                                      end: diff.end - op.text.length,
                                      text: diff.text,
                                    },
                                    id,
                                    path,
                                  }
                          case 'split_node':
                            return !index_es.wA.equals(op.path, path) ||
                              op.position >= diff.end
                              ? {
                                  diff,
                                  id,
                                  path: index_es.wA.transform(path, op, {
                                    affinity: 'backward',
                                  }),
                                }
                              : op.position > diff.start
                                ? {
                                    diff: {
                                      start: diff.start,
                                      end: Math.min(op.position, diff.end),
                                      text: diff.text,
                                    },
                                    id,
                                    path,
                                  }
                                : {
                                    diff: {
                                      start: diff.start - op.position,
                                      end: diff.end - op.position,
                                      text: diff.text,
                                    },
                                    id,
                                    path: index_es.wA.transform(path, op, {
                                      affinity: 'forward',
                                    }),
                                  }
                          case 'merge_node':
                            return index_es.wA.equals(op.path, path)
                              ? {
                                  diff: {
                                    start: diff.start + op.position,
                                    end: diff.end + op.position,
                                    text: diff.text,
                                  },
                                  id,
                                  path: index_es.wA.transform(path, op),
                                }
                              : {
                                  diff,
                                  id,
                                  path: index_es.wA.transform(path, op),
                                }
                        }
                        var newPath = index_es.wA.transform(path, op)
                        return newPath ? { diff, path: newPath, id } : null
                      })(textDiff, op)
                    )
                    .filter(Boolean)
                  EDITOR_TO_PENDING_DIFFS.set(e, transformed)
                }
                var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e)
                pendingSelection &&
                  EDITOR_TO_PENDING_SELECTION.set(
                    e,
                    transformPendingRange(e, pendingSelection, op)
                  )
                var pendingAction = EDITOR_TO_PENDING_ACTION.get(e)
                if (null != pendingAction && pendingAction.at) {
                  var at = index_es.bR.isPoint(
                    null == pendingAction ? void 0 : pendingAction.at
                  )
                    ? transformPendingPoint(e, pendingAction.at, op)
                    : transformPendingRange(e, pendingAction.at, op)
                  EDITOR_TO_PENDING_ACTION.set(
                    e,
                    at
                      ? _objectSpread$1(
                          _objectSpread$1({}, pendingAction),
                          {},
                          { at }
                        )
                      : null
                  )
                }
                switch (op.type) {
                  case 'insert_text':
                  case 'remove_text':
                  case 'set_node':
                  case 'split_node':
                    matches.push(...getMatches(e, op.path))
                    break
                  case 'set_selection':
                    var _EDITOR_TO_USER_SELEC
                    ;(null ===
                      (_EDITOR_TO_USER_SELEC =
                        EDITOR_TO_USER_SELECTION.get(e)) ||
                      void 0 === _EDITOR_TO_USER_SELEC ||
                      _EDITOR_TO_USER_SELEC.unref(),
                      EDITOR_TO_USER_SELECTION.delete(e))
                    break
                  case 'insert_node':
                  case 'remove_node':
                    matches.push(...getMatches(e, index_es.wA.parent(op.path)))
                    break
                  case 'merge_node':
                    var prevPath = index_es.wA.previous(op.path)
                    matches.push(...getMatches(e, prevPath))
                    break
                  case 'move_node':
                    var changedPath,
                      commonPath = index_es.wA.common(
                        index_es.wA.parent(op.path),
                        index_es.wA.parent(op.newPath)
                      )
                    ;(matches.push(...getMatches(e, commonPath)),
                      index_es.wA.isBefore(op.path, op.newPath)
                        ? (matches.push(
                            ...getMatches(e, index_es.wA.parent(op.path))
                          ),
                          (changedPath = op.newPath))
                        : (matches.push(
                            ...getMatches(e, index_es.wA.parent(op.newPath))
                          ),
                          (changedPath = op.path)))
                    var changedNode = index_es.bP.get(
                        editor,
                        index_es.wA.parent(changedPath)
                      ),
                      changedNodeKey = DOMEditor.findKey(e, changedNode),
                      changedPathRef = index_es.KE.pathRef(
                        e,
                        index_es.wA.parent(changedPath)
                      )
                    pathRefMatches.push([changedPathRef, changedNodeKey])
                }
                switch ((apply(op), op.type)) {
                  case 'insert_node':
                  case 'remove_node':
                  case 'merge_node':
                  case 'move_node':
                  case 'split_node':
                  case 'insert_text':
                  case 'remove_text':
                  case 'set_selection':
                    IS_NODE_MAP_DIRTY.set(e, !0)
                }
                for (var [path, key] of matches) {
                  var [node] = index_es.KE.node(e, path)
                  NODE_TO_KEY.set(node, key)
                }
                for (var [pathRef, _key] of pathRefMatches) {
                  if (pathRef.current) {
                    var [_node] = index_es.KE.node(e, pathRef.current)
                    NODE_TO_KEY.set(_node, _key)
                  }
                  pathRef.unref()
                }
              }),
              (e.setFragmentData = (data) => {
                var { selection } = e
                if (selection) {
                  var [start, end] = index_es.Q6.edges(selection),
                    startVoid = index_es.KE.void(e, { at: start.path }),
                    endVoid = index_es.KE.void(e, { at: end.path })
                  if (!index_es.Q6.isCollapsed(selection) || startVoid) {
                    var domRange = DOMEditor.toDOMRange(e, selection),
                      contents = domRange.cloneContents(),
                      attach = contents.childNodes[0]
                    if (
                      (contents.childNodes.forEach((node) => {
                        node.textContent &&
                          '' !== node.textContent.trim() &&
                          (attach = node)
                      }),
                      endVoid)
                    ) {
                      var [voidNode] = endVoid,
                        r = domRange.cloneRange(),
                        domNode = DOMEditor.toDOMNode(e, voidNode)
                      ;(r.setEndAfter(domNode), (contents = r.cloneContents()))
                    }
                    if (
                      (startVoid &&
                        (attach = contents.querySelector(
                          '[data-slate-spacer]'
                        )),
                      Array.from(
                        contents.querySelectorAll('[data-slate-zero-width]')
                      ).forEach((zw) => {
                        var isNewline =
                          'n' === zw.getAttribute('data-slate-zero-width')
                        zw.textContent = isNewline ? '\n' : ''
                      }),
                      isDOMText(attach))
                    ) {
                      var span = attach.ownerDocument.createElement('span')
                      ;((span.style.whiteSpace = 'pre'),
                        span.appendChild(attach),
                        contents.appendChild(span),
                        (attach = span))
                    }
                    var fragment = e.getFragment(),
                      string = JSON.stringify(fragment),
                      encoded = window.btoa(encodeURIComponent(string))
                    ;(attach.setAttribute('data-slate-fragment', encoded),
                      data.setData(
                        'application/'.concat(clipboardFormatKey),
                        encoded
                      ))
                    var div = contents.ownerDocument.createElement('div')
                    return (
                      div.appendChild(contents),
                      div.setAttribute('hidden', 'true'),
                      contents.ownerDocument.body.appendChild(div),
                      data.setData('text/html', div.innerHTML),
                      data.setData('text/plain', getPlainText(div)),
                      contents.ownerDocument.body.removeChild(div),
                      data
                    )
                  }
                }
              }),
              (e.insertData = (data) => {
                e.insertFragmentData(data) || e.insertTextData(data)
              }),
              (e.insertFragmentData = (data) => {
                var fragment =
                  data.getData('application/'.concat(clipboardFormatKey)) ||
                  ((dataTransfer) => {
                    var htmlData = dataTransfer.getData('text/html'),
                      [, fragment] = htmlData.match(catchSlateFragment) || []
                    return fragment
                  })(data)
                if (fragment) {
                  var decoded = decodeURIComponent(window.atob(fragment)),
                    parsed = JSON.parse(decoded)
                  return (e.insertFragment(parsed), !0)
                }
                return !1
              }),
              (e.insertTextData = (data) => {
                var text = data.getData('text/plain')
                if (text) {
                  var lines = text.split(/\r\n|\r|\n/),
                    split = !1
                  for (var line of lines)
                    (split && index_es.gB.splitNodes(e, { always: !0 }),
                      e.insertText(line),
                      (split = !0))
                  return !0
                }
                return !1
              }),
              (e.onChange = (options) => {
                var onContextChange = EDITOR_TO_ON_CHANGE.get(e)
                ;(onContextChange && onContextChange(options),
                  onChange(options))
              }),
              e
            )
          },
          getMatches = (e, path) => {
            var matches = []
            for (var [n, p] of index_es.KE.levels(e, { at: path })) {
              var key = DOMEditor.findKey(e, n)
              matches.push([p, key])
            }
            return matches
          },
          HOTKEYS = {
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
              !!(IS_APPLE && isApple && isApple(event)) ||
              !(IS_APPLE || !isWindows || !isWindows(event))
          },
          hotkeys = {
            isBold: create('bold'),
            isCompose: create('compose'),
            isMoveBackward: create('moveBackward'),
            isMoveForward: create('moveForward'),
            isDeleteBackward: create('deleteBackward'),
            isDeleteForward: create('deleteForward'),
            isDeleteLineBackward: create('deleteLineBackward'),
            isDeleteLineForward: create('deleteLineForward'),
            isDeleteWordBackward: create('deleteWordBackward'),
            isDeleteWordForward: create('deleteWordForward'),
            isExtendBackward: create('extendBackward'),
            isExtendForward: create('extendForward'),
            isExtendLineBackward: create('extendLineBackward'),
            isExtendLineForward: create('extendLineForward'),
            isItalic: create('italic'),
            isMoveLineBackward: create('moveLineBackward'),
            isMoveLineForward: create('moveLineForward'),
            isMoveWordBackward: create('moveWordBackward'),
            isMoveWordForward: create('moveWordForward'),
            isRedo: create('redo'),
            isSoftBreak: create('insertSoftBreak'),
            isSplitBlock: create('splitBlock'),
            isTransposeCharacter: create('transposeCharacter'),
            isUndo: create('undo'),
          }
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
        function ownKeys(e, r) {
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
        function _objectSpread(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var ResizeObserverBoxOptions,
          isDecorationFlagsEqual = (range, other) => {
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
          isElementDecorationsEqual = (list, another) => {
            if (list === another) return !0
            if (!list || !another) return !1
            if (list.length !== another.length) return !1
            for (var i = 0; i < list.length; i++) {
              var range = list[i],
                other = another[i]
              if (
                !index_es.Q6.equals(range, other) ||
                !isDecorationFlagsEqual(range, other)
              )
                return !1
            }
            return !0
          },
          isTextDecorationsEqual = (list, another) => {
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
          },
          resizeObservers = [],
          hasActiveObservations = function () {
            return resizeObservers.some(function (ro) {
              return ro.activeTargets.length > 0
            })
          },
          msg = 'ResizeObserver loop completed with undelivered notifications.'
        !(function (ResizeObserverBoxOptions) {
          ;((ResizeObserverBoxOptions.BORDER_BOX = 'border-box'),
            (ResizeObserverBoxOptions.CONTENT_BOX = 'content-box'),
            (ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX =
              'device-pixel-content-box'))
        })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}))
        var trigger,
          freeze = function (obj) {
            return Object.freeze(obj)
          },
          ResizeObserverSize = function ResizeObserverSize(
            inlineSize,
            blockSize
          ) {
            ;((this.inlineSize = inlineSize),
              (this.blockSize = blockSize),
              freeze(this))
          },
          DOMRectReadOnly = (function () {
            function DOMRectReadOnly(x, y, width, height) {
              return (
                (this.x = x),
                (this.y = y),
                (this.width = width),
                (this.height = height),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                freeze(this)
              )
            }
            return (
              (DOMRectReadOnly.prototype.toJSON = function () {
                var _a = this
                return {
                  x: _a.x,
                  y: _a.y,
                  top: _a.top,
                  right: _a.right,
                  bottom: _a.bottom,
                  left: _a.left,
                  width: _a.width,
                  height: _a.height,
                }
              }),
              (DOMRectReadOnly.fromRect = function (rectangle) {
                return new DOMRectReadOnly(
                  rectangle.x,
                  rectangle.y,
                  rectangle.width,
                  rectangle.height
                )
              }),
              DOMRectReadOnly
            )
          })(),
          isSVG = function (target) {
            return target instanceof SVGElement && 'getBBox' in target
          },
          isHidden = function (target) {
            if (isSVG(target)) {
              var _a = target.getBBox(),
                width = _a.width,
                height = _a.height
              return !width && !height
            }
            var _b = target,
              offsetWidth = _b.offsetWidth,
              offsetHeight = _b.offsetHeight
            return !(
              offsetWidth ||
              offsetHeight ||
              target.getClientRects().length
            )
          },
          isElement = function (obj) {
            var _a
            if (obj instanceof Element) return !0
            var scope =
              null === (_a = null == obj ? void 0 : obj.ownerDocument) ||
              void 0 === _a
                ? void 0
                : _a.defaultView
            return !!(scope && obj instanceof scope.Element)
          },
          global = 'undefined' != typeof window ? window : {},
          cache = new WeakMap(),
          scrollRegexp = /auto|scroll/,
          verticalRegexp = /^tb|vertical/,
          IE = /msie|trident/i.test(
            global.navigator && global.navigator.userAgent
          ),
          parseDimension = function (pixel) {
            return parseFloat(pixel || '0')
          },
          size = function (inlineSize, blockSize, switchSizes) {
            return (
              void 0 === inlineSize && (inlineSize = 0),
              void 0 === blockSize && (blockSize = 0),
              void 0 === switchSizes && (switchSizes = !1),
              new ResizeObserverSize(
                (switchSizes ? blockSize : inlineSize) || 0,
                (switchSizes ? inlineSize : blockSize) || 0
              )
            )
          },
          zeroBoxes = freeze({
            devicePixelContentBoxSize: size(),
            borderBoxSize: size(),
            contentBoxSize: size(),
            contentRect: new DOMRectReadOnly(0, 0, 0, 0),
          }),
          calculateBoxSizes = function (target, forceRecalculation) {
            if (
              (void 0 === forceRecalculation && (forceRecalculation = !1),
              cache.has(target) && !forceRecalculation)
            )
              return cache.get(target)
            if (isHidden(target))
              return (cache.set(target, zeroBoxes), zeroBoxes)
            var cs = getComputedStyle(target),
              svg = isSVG(target) && target.ownerSVGElement && target.getBBox(),
              removePadding = !IE && 'border-box' === cs.boxSizing,
              switchSizes = verticalRegexp.test(cs.writingMode || ''),
              canScrollVertically =
                !svg && scrollRegexp.test(cs.overflowY || ''),
              canScrollHorizontally =
                !svg && scrollRegexp.test(cs.overflowX || ''),
              paddingTop = svg ? 0 : parseDimension(cs.paddingTop),
              paddingRight = svg ? 0 : parseDimension(cs.paddingRight),
              paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom),
              paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft),
              borderTop = svg ? 0 : parseDimension(cs.borderTopWidth),
              borderRight = svg ? 0 : parseDimension(cs.borderRightWidth),
              borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth),
              horizontalPadding = paddingLeft + paddingRight,
              verticalPadding = paddingTop + paddingBottom,
              horizontalBorderArea =
                (svg ? 0 : parseDimension(cs.borderLeftWidth)) + borderRight,
              verticalBorderArea = borderTop + borderBottom,
              horizontalScrollbarThickness = canScrollHorizontally
                ? target.offsetHeight - verticalBorderArea - target.clientHeight
                : 0,
              verticalScrollbarThickness = canScrollVertically
                ? target.offsetWidth - horizontalBorderArea - target.clientWidth
                : 0,
              widthReduction = removePadding
                ? horizontalPadding + horizontalBorderArea
                : 0,
              heightReduction = removePadding
                ? verticalPadding + verticalBorderArea
                : 0,
              contentWidth = svg
                ? svg.width
                : parseDimension(cs.width) -
                  widthReduction -
                  verticalScrollbarThickness,
              contentHeight = svg
                ? svg.height
                : parseDimension(cs.height) -
                  heightReduction -
                  horizontalScrollbarThickness,
              borderBoxWidth =
                contentWidth +
                horizontalPadding +
                verticalScrollbarThickness +
                horizontalBorderArea,
              borderBoxHeight =
                contentHeight +
                verticalPadding +
                horizontalScrollbarThickness +
                verticalBorderArea,
              boxes = freeze({
                devicePixelContentBoxSize: size(
                  Math.round(contentWidth * devicePixelRatio),
                  Math.round(contentHeight * devicePixelRatio),
                  switchSizes
                ),
                borderBoxSize: size(
                  borderBoxWidth,
                  borderBoxHeight,
                  switchSizes
                ),
                contentBoxSize: size(contentWidth, contentHeight, switchSizes),
                contentRect: new DOMRectReadOnly(
                  paddingLeft,
                  paddingTop,
                  contentWidth,
                  contentHeight
                ),
              })
            return (cache.set(target, boxes), boxes)
          },
          calculateBoxSize = function (
            target,
            observedBox,
            forceRecalculation
          ) {
            var _a = calculateBoxSizes(target, forceRecalculation),
              borderBoxSize = _a.borderBoxSize,
              contentBoxSize = _a.contentBoxSize,
              devicePixelContentBoxSize = _a.devicePixelContentBoxSize
            switch (observedBox) {
              case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                return devicePixelContentBoxSize
              case ResizeObserverBoxOptions.BORDER_BOX:
                return borderBoxSize
              default:
                return contentBoxSize
            }
          },
          ResizeObserverEntry = function ResizeObserverEntry(target) {
            var boxes = calculateBoxSizes(target)
            ;((this.target = target),
              (this.contentRect = boxes.contentRect),
              (this.borderBoxSize = freeze([boxes.borderBoxSize])),
              (this.contentBoxSize = freeze([boxes.contentBoxSize])),
              (this.devicePixelContentBoxSize = freeze([
                boxes.devicePixelContentBoxSize,
              ])))
          },
          calculateDepthForNode = function (node) {
            if (isHidden(node)) return 1 / 0
            for (var depth = 0, parent = node.parentNode; parent; )
              ((depth += 1), (parent = parent.parentNode))
            return depth
          },
          broadcastActiveObservations = function () {
            var shallowestDepth = 1 / 0,
              callbacks = []
            resizeObservers.forEach(function processObserver(ro) {
              if (0 !== ro.activeTargets.length) {
                var entries = []
                ;(ro.activeTargets.forEach(function processTarget(ot) {
                  var entry = new ResizeObserverEntry(ot.target),
                    targetDepth = calculateDepthForNode(ot.target)
                  ;(entries.push(entry),
                    (ot.lastReportedSize = calculateBoxSize(
                      ot.target,
                      ot.observedBox
                    )),
                    targetDepth < shallowestDepth &&
                      (shallowestDepth = targetDepth))
                }),
                  callbacks.push(function resizeObserverCallback() {
                    ro.callback.call(ro.observer, entries, ro.observer)
                  }),
                  ro.activeTargets.splice(0, ro.activeTargets.length))
              }
            })
            for (
              var _i = 0, callbacks_1 = callbacks;
              _i < callbacks_1.length;
              _i++
            ) {
              ;(0, callbacks_1[_i])()
            }
            return shallowestDepth
          },
          gatherActiveObservationsAtDepth = function (depth) {
            resizeObservers.forEach(function processObserver(ro) {
              ;(ro.activeTargets.splice(0, ro.activeTargets.length),
                ro.skippedTargets.splice(0, ro.skippedTargets.length),
                ro.observationTargets.forEach(function processTarget(ot) {
                  ot.isActive() &&
                    (calculateDepthForNode(ot.target) > depth
                      ? ro.activeTargets.push(ot)
                      : ro.skippedTargets.push(ot))
                }))
            })
          },
          process = function () {
            var event,
              depth = 0
            for (
              gatherActiveObservationsAtDepth(depth);
              hasActiveObservations();

            )
              ((depth = broadcastActiveObservations()),
                gatherActiveObservationsAtDepth(depth))
            return (
              resizeObservers.some(function (ro) {
                return ro.skippedTargets.length > 0
              }) &&
                ('function' == typeof ErrorEvent
                  ? (event = new ErrorEvent('error', { message: msg }))
                  : ((event = document.createEvent('Event')).initEvent(
                      'error',
                      !1,
                      !1
                    ),
                    (event.message = msg)),
                window.dispatchEvent(event)),
              depth > 0
            )
          },
          callbacks = [],
          queueMicroTask = function (callback) {
            if (!trigger) {
              var toggle_1 = 0,
                el_1 = document.createTextNode('')
              ;(new MutationObserver(function () {
                return callbacks.splice(0).forEach(function (cb) {
                  return cb()
                })
              }).observe(el_1, { characterData: !0 }),
                (trigger = function () {
                  el_1.textContent = ''.concat(
                    toggle_1 ? toggle_1-- : toggle_1++
                  )
                }))
            }
            ;(callbacks.push(callback), trigger())
          },
          watching = 0,
          observerConfig = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          events = [
            'resize',
            'load',
            'transitionend',
            'animationend',
            'animationstart',
            'animationiteration',
            'keyup',
            'keydown',
            'mouseup',
            'mousedown',
            'mouseover',
            'mouseout',
            'blur',
            'focus',
          ],
          time = function (timeout) {
            return (void 0 === timeout && (timeout = 0), Date.now() + timeout)
          },
          scheduled = !1,
          scheduler = new ((function () {
            function Scheduler() {
              var _this = this
              ;((this.stopped = !0),
                (this.listener = function () {
                  return _this.schedule()
                }))
            }
            return (
              (Scheduler.prototype.run = function (timeout) {
                var _this = this
                if ((void 0 === timeout && (timeout = 250), !scheduled)) {
                  scheduled = !0
                  var cb,
                    until = time(timeout)
                  ;((cb = function () {
                    var elementsHaveResized = !1
                    try {
                      elementsHaveResized = process()
                    } finally {
                      if (
                        ((scheduled = !1),
                        (timeout = until - time()),
                        !watching)
                      )
                        return
                      elementsHaveResized
                        ? _this.run(1e3)
                        : timeout > 0
                          ? _this.run(timeout)
                          : _this.start()
                    }
                  }),
                    queueMicroTask(function ResizeObserver() {
                      requestAnimationFrame(cb)
                    }))
                }
              }),
              (Scheduler.prototype.schedule = function () {
                ;(this.stop(), this.run())
              }),
              (Scheduler.prototype.observe = function () {
                var _this = this,
                  cb = function () {
                    return (
                      _this.observer &&
                      _this.observer.observe(document.body, observerConfig)
                    )
                  }
                document.body
                  ? cb()
                  : global.addEventListener('DOMContentLoaded', cb)
              }),
              (Scheduler.prototype.start = function () {
                var _this = this
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  events.forEach(function (name) {
                    return global.addEventListener(name, _this.listener, !0)
                  }))
              }),
              (Scheduler.prototype.stop = function () {
                var _this = this
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  events.forEach(function (name) {
                    return global.removeEventListener(name, _this.listener, !0)
                  }),
                  (this.stopped = !0))
              }),
              Scheduler
            )
          })())(),
          updateCount = function (n) {
            ;(!watching && n > 0 && scheduler.start(),
              !(watching += n) && scheduler.stop())
          },
          ResizeObservation = (function () {
            function ResizeObservation(target, observedBox) {
              ;((this.target = target),
                (this.observedBox =
                  observedBox || ResizeObserverBoxOptions.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }))
            }
            return (
              (ResizeObservation.prototype.isActive = function () {
                var target,
                  size = calculateBoxSize(this.target, this.observedBox, !0)
                return (
                  (target = this.target),
                  isSVG(target) ||
                    (function (target) {
                      switch (target.tagName) {
                        case 'INPUT':
                          if ('image' !== target.type) break
                        case 'VIDEO':
                        case 'AUDIO':
                        case 'EMBED':
                        case 'OBJECT':
                        case 'CANVAS':
                        case 'IFRAME':
                        case 'IMG':
                          return !0
                      }
                      return !1
                    })(target) ||
                    'inline' !== getComputedStyle(target).display ||
                    (this.lastReportedSize = size),
                  this.lastReportedSize.inlineSize !== size.inlineSize ||
                    this.lastReportedSize.blockSize !== size.blockSize
                )
              }),
              ResizeObservation
            )
          })(),
          ResizeObserverDetail = function ResizeObserverDetail(
            resizeObserver,
            callback
          ) {
            ;((this.activeTargets = []),
              (this.skippedTargets = []),
              (this.observationTargets = []),
              (this.observer = resizeObserver),
              (this.callback = callback))
          },
          observerMap = new WeakMap(),
          getObservationIndex = function (observationTargets, target) {
            for (var i = 0; i < observationTargets.length; i += 1)
              if (observationTargets[i].target === target) return i
            return -1
          },
          ResizeObserverController = (function () {
            function ResizeObserverController() {}
            return (
              (ResizeObserverController.connect = function (
                resizeObserver,
                callback
              ) {
                var detail = new ResizeObserverDetail(resizeObserver, callback)
                observerMap.set(resizeObserver, detail)
              }),
              (ResizeObserverController.observe = function (
                resizeObserver,
                target,
                options
              ) {
                var detail = observerMap.get(resizeObserver),
                  firstObservation = 0 === detail.observationTargets.length
                getObservationIndex(detail.observationTargets, target) < 0 &&
                  (firstObservation && resizeObservers.push(detail),
                  detail.observationTargets.push(
                    new ResizeObservation(target, options && options.box)
                  ),
                  updateCount(1),
                  scheduler.schedule())
              }),
              (ResizeObserverController.unobserve = function (
                resizeObserver,
                target
              ) {
                var detail = observerMap.get(resizeObserver),
                  index = getObservationIndex(
                    detail.observationTargets,
                    target
                  ),
                  lastObservation = 1 === detail.observationTargets.length
                index >= 0 &&
                  (lastObservation &&
                    resizeObservers.splice(resizeObservers.indexOf(detail), 1),
                  detail.observationTargets.splice(index, 1),
                  updateCount(-1))
              }),
              (ResizeObserverController.disconnect = function (resizeObserver) {
                var _this = this,
                  detail = observerMap.get(resizeObserver)
                ;(detail.observationTargets.slice().forEach(function (ot) {
                  return _this.unobserve(resizeObserver, ot.target)
                }),
                  detail.activeTargets.splice(0, detail.activeTargets.length))
              }),
              ResizeObserverController
            )
          })(),
          ResizeObserver = (function () {
            function ResizeObserver(callback) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                )
              if ('function' != typeof callback)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                )
              ResizeObserverController.connect(this, callback)
            }
            return (
              (ResizeObserver.prototype.observe = function (target, options) {
                if (0 === arguments.length)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  )
                if (!isElement(target))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  )
                ResizeObserverController.observe(this, target, options)
              }),
              (ResizeObserver.prototype.unobserve = function (target) {
                if (0 === arguments.length)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  )
                if (!isElement(target))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  )
                ResizeObserverController.unobserve(this, target)
              }),
              (ResizeObserver.prototype.disconnect = function () {
                ResizeObserverController.disconnect(this)
              }),
              (ResizeObserver.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }'
              }),
              ResizeObserver
            )
          })(),
          react_dom = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
          )
        function index_es_objectWithoutProperties(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = (function index_es_objectWithoutPropertiesLoose(
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
        var EditorContext = (0, react.createContext)(null),
          useSlateStatic = () => {
            var editor = (0, react.useContext)(EditorContext)
            if (!editor)
              throw new Error(
                "The `useSlateStatic` hook must be used inside the <Slate> component's context."
              )
            return editor
          },
          ReactEditor = DOMEditor
        function ownKeys$7(e, r) {
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
        function _objectSpread$7(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$7(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$7(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        function createAndroidInputManager(_ref) {
          var { editor, scheduleOnDOMSelectionChange, onDOMSelectionChange } =
              _ref,
            flushing = !1,
            compositionEndTimeoutId = null,
            flushTimeoutId = null,
            actionTimeoutId = null,
            idCounter = 0,
            insertPositionHint = !1,
            applyPendingSelection = () => {
              var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor)
              if (
                (EDITOR_TO_PENDING_SELECTION.delete(editor), pendingSelection)
              ) {
                var { selection } = editor,
                  normalized = normalizeRange(editor, pendingSelection)
                !normalized ||
                  (selection && index_es.Q6.equals(normalized, selection)) ||
                  index_es.gB.select(editor, normalized)
              }
            },
            flush = () => {
              if (
                (flushTimeoutId &&
                  (clearTimeout(flushTimeoutId), (flushTimeoutId = null)),
                actionTimeoutId &&
                  (clearTimeout(actionTimeoutId), (actionTimeoutId = null)),
                hasPendingDiffs() || hasPendingAction())
              ) {
                ;(flushing ||
                  ((flushing = !0), setTimeout(() => (flushing = !1))),
                  hasPendingAction() && (flushing = 'action'))
                var selectionRef =
                  editor.selection &&
                  index_es.KE.rangeRef(editor, editor.selection, {
                    affinity: 'forward',
                  })
                ;(EDITOR_TO_USER_MARKS.set(editor, editor.marks),
                  EDITOR_TO_PENDING_ACTION.get(editor),
                  EDITOR_TO_PENDING_DIFFS.get(editor))
                for (
                  var diff, scheduleSelectionChange = hasPendingDiffs();
                  (diff =
                    null ===
                      (_EDITOR_TO_PENDING_DI =
                        EDITOR_TO_PENDING_DIFFS.get(editor)) ||
                    void 0 === _EDITOR_TO_PENDING_DI
                      ? void 0
                      : _EDITOR_TO_PENDING_DI[0]);

                ) {
                  var _EDITOR_TO_PENDING_DI,
                    _EDITOR_TO_PENDING_DI2,
                    pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)
                  ;(void 0 !== pendingMarks &&
                    (EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor),
                    (editor.marks = pendingMarks)),
                    pendingMarks &&
                      !1 === insertPositionHint &&
                      (insertPositionHint = null))
                  var range = targetRange(diff)
                  ;((editor.selection &&
                    index_es.Q6.equals(editor.selection, range)) ||
                    index_es.gB.select(editor, range),
                    diff.diff.text
                      ? index_es.KE.insertText(editor, diff.diff.text)
                      : index_es.KE.deleteFragment(editor),
                    EDITOR_TO_PENDING_DIFFS.set(
                      editor,
                      null ===
                        (_EDITOR_TO_PENDING_DI2 =
                          EDITOR_TO_PENDING_DIFFS.get(editor)) ||
                        void 0 === _EDITOR_TO_PENDING_DI2
                        ? void 0
                        : _EDITOR_TO_PENDING_DI2.filter((_ref2) => {
                            var { id } = _ref2
                            return id !== diff.id
                          })
                    ),
                    verifyDiffState(editor, diff) ||
                      ((scheduleSelectionChange = !1),
                      EDITOR_TO_PENDING_ACTION.delete(editor),
                      EDITOR_TO_USER_MARKS.delete(editor),
                      (flushing = 'action'),
                      EDITOR_TO_PENDING_SELECTION.delete(editor),
                      scheduleOnDOMSelectionChange.cancel(),
                      onDOMSelectionChange.cancel(),
                      null == selectionRef || selectionRef.unref()))
                }
                var selection =
                  null == selectionRef ? void 0 : selectionRef.unref()
                if (
                  (!selection ||
                    EDITOR_TO_PENDING_SELECTION.get(editor) ||
                    (editor.selection &&
                      index_es.Q6.equals(selection, editor.selection)) ||
                    index_es.gB.select(editor, selection),
                  hasPendingAction())
                )
                  (() => {
                    var action = EDITOR_TO_PENDING_ACTION.get(editor)
                    if ((EDITOR_TO_PENDING_ACTION.delete(editor), action)) {
                      if (action.at) {
                        var target = index_es.bR.isPoint(action.at)
                          ? normalizePoint(editor, action.at)
                          : normalizeRange(editor, action.at)
                        if (!target) return
                        var _targetRange = index_es.KE.range(editor, target)
                        ;(editor.selection &&
                          index_es.Q6.equals(editor.selection, _targetRange)) ||
                          index_es.gB.select(editor, target)
                      }
                      action.run()
                    }
                  })()
                else {
                  ;(scheduleSelectionChange && scheduleOnDOMSelectionChange(),
                    scheduleOnDOMSelectionChange.flush(),
                    onDOMSelectionChange.flush(),
                    applyPendingSelection())
                  var userMarks = EDITOR_TO_USER_MARKS.get(editor)
                  ;(EDITOR_TO_USER_MARKS.delete(editor),
                    void 0 !== userMarks &&
                      ((editor.marks = userMarks), editor.onChange()))
                }
              } else applyPendingSelection()
            },
            updatePlaceholderVisibility =
              function updatePlaceholderVisibility() {
                var forceHide =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor)
                placeholderElement &&
                  (hasPendingDiffs() || forceHide
                    ? (placeholderElement.style.display = 'none')
                    : placeholderElement.style.removeProperty('display'))
              },
            storeDiff = (path, diff) => {
              var _EDITOR_TO_PENDING_DI3,
                pendingDiffs =
                  null !==
                    (_EDITOR_TO_PENDING_DI3 =
                      EDITOR_TO_PENDING_DIFFS.get(editor)) &&
                  void 0 !== _EDITOR_TO_PENDING_DI3
                    ? _EDITOR_TO_PENDING_DI3
                    : []
              EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs)
              var target = index_es.bP.leaf(editor, path),
                idx = pendingDiffs.findIndex((change) =>
                  index_es.wA.equals(change.path, path)
                )
              if (idx < 0)
                return (
                  normalizeStringDiff(target.text, diff) &&
                    pendingDiffs.push({ path, diff, id: idCounter++ }),
                  void updatePlaceholderVisibility()
                )
              var merged = (function mergeStringDiffs(targetText, a, b) {
                var start = Math.min(a.start, b.start),
                  overlap = Math.max(
                    0,
                    Math.min(a.start + a.text.length, b.end) - b.start
                  ),
                  applied = applyStringDiff(targetText, a, b),
                  sliceEnd = Math.max(
                    b.start + b.text.length,
                    a.start +
                      a.text.length +
                      (a.start + a.text.length > b.start ? b.text.length : 0) -
                      overlap
                  ),
                  text = applied.slice(start, sliceEnd)
                return normalizeStringDiff(targetText, {
                  start,
                  end: Math.max(
                    a.end,
                    b.end - a.text.length + (a.end - a.start)
                  ),
                  text,
                })
              })(target.text, pendingDiffs[idx].diff, diff)
              if (!merged)
                return (
                  pendingDiffs.splice(idx, 1),
                  void updatePlaceholderVisibility()
                )
              pendingDiffs[idx] = _objectSpread$7(
                _objectSpread$7({}, pendingDiffs[idx]),
                {},
                { diff: merged }
              )
            },
            scheduleAction = function scheduleAction(run) {
              var { at } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              ;((insertPositionHint = !1),
                EDITOR_TO_PENDING_SELECTION.delete(editor),
                scheduleOnDOMSelectionChange.cancel(),
                onDOMSelectionChange.cancel(),
                hasPendingAction() && flush(),
                EDITOR_TO_PENDING_ACTION.set(editor, { at, run }),
                (actionTimeoutId = setTimeout(flush)))
            },
            hasPendingAction = () => !!EDITOR_TO_PENDING_ACTION.get(editor),
            hasPendingDiffs = () => {
              var _EDITOR_TO_PENDING_DI4
              return !(
                null ===
                  (_EDITOR_TO_PENDING_DI4 =
                    EDITOR_TO_PENDING_DIFFS.get(editor)) ||
                void 0 === _EDITOR_TO_PENDING_DI4 ||
                !_EDITOR_TO_PENDING_DI4.length
              )
            },
            handleUserSelect = (range) => {
              ;(EDITOR_TO_PENDING_SELECTION.set(editor, range),
                flushTimeoutId &&
                  (clearTimeout(flushTimeoutId), (flushTimeoutId = null)))
              var { selection } = editor
              if (range) {
                var pathChanged =
                    !selection ||
                    !index_es.wA.equals(
                      selection.anchor.path,
                      range.anchor.path
                    ),
                  parentPathChanged =
                    !selection ||
                    !index_es.wA.equals(
                      selection.anchor.path.slice(0, -1),
                      range.anchor.path.slice(0, -1)
                    )
                ;(((pathChanged && insertPositionHint) || parentPathChanged) &&
                  (insertPositionHint = !1),
                  (pathChanged || hasPendingDiffs()) &&
                    (flushTimeoutId = setTimeout(flush, 200)))
              }
            },
            scheduleFlush = () => {
              hasPendingAction() || (actionTimeoutId = setTimeout(flush))
            }
          return {
            flush,
            scheduleFlush,
            hasPendingDiffs,
            hasPendingAction,
            hasPendingChanges: () => hasPendingAction() || hasPendingDiffs(),
            isFlushing: () => flushing,
            handleUserSelect,
            handleCompositionEnd: (_event) => {
              ;(compositionEndTimeoutId &&
                clearTimeout(compositionEndTimeoutId),
                (compositionEndTimeoutId = setTimeout(() => {
                  ;(IS_COMPOSING.set(editor, !1), flush())
                }, 25)))
            },
            handleCompositionStart: (_event) => {
              ;(IS_COMPOSING.set(editor, !0),
                compositionEndTimeoutId &&
                  (clearTimeout(compositionEndTimeoutId),
                  (compositionEndTimeoutId = null)))
            },
            handleDOMBeforeInput: (event) => {
              var _targetRange2
              if (
                (flushTimeoutId &&
                  (clearTimeout(flushTimeoutId), (flushTimeoutId = null)),
                !IS_NODE_MAP_DIRTY.get(editor))
              ) {
                var { inputType: type } = event,
                  targetRange = null,
                  data = event.dataTransfer || event.data || void 0
                !1 !== insertPositionHint &&
                  'insertText' !== type &&
                  'insertCompositionText' !== type &&
                  (insertPositionHint = !1)
                var [nativeTargetRange] = event.getTargetRanges()
                nativeTargetRange &&
                  (targetRange = ReactEditor.toSlateRange(
                    editor,
                    nativeTargetRange,
                    { exactMatch: !1, suppressThrow: !0 }
                  ))
                var domSelection = ReactEditor.getWindow(editor).getSelection()
                if (
                  (!targetRange &&
                    domSelection &&
                    ((nativeTargetRange = domSelection),
                    (targetRange = ReactEditor.toSlateRange(
                      editor,
                      domSelection,
                      { exactMatch: !1, suppressThrow: !0 }
                    ))),
                  (targetRange =
                    null !== (_targetRange2 = targetRange) &&
                    void 0 !== _targetRange2
                      ? _targetRange2
                      : editor.selection))
                ) {
                  var value,
                    canStoreDiff = !0
                  if (type.startsWith('delete')) {
                    var direction = type.endsWith('Backward')
                        ? 'backward'
                        : 'forward',
                      [start, end] = index_es.Q6.edges(targetRange),
                      [leaf, path] = index_es.KE.leaf(editor, start.path)
                    if (
                      index_es.Q6.isExpanded(targetRange) &&
                      leaf.text.length === start.offset &&
                      0 === end.offset
                    ) {
                      var next = index_es.KE.next(editor, {
                        at: start.path,
                        match: index_es.EY.isText,
                      })
                      next &&
                        index_es.wA.equals(next[1], end.path) &&
                        ('backward' === direction
                          ? ((targetRange = { anchor: end, focus: end }),
                            (start = end),
                            ([leaf, path] = next))
                          : ((targetRange = { anchor: start, focus: start }),
                            (end = start)))
                    }
                    var diff = {
                        text: '',
                        start: start.offset,
                        end: end.offset,
                      },
                      pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor),
                      relevantPendingDiffs =
                        null == pendingDiffs
                          ? void 0
                          : pendingDiffs.find((change) =>
                              index_es.wA.equals(change.path, path)
                            ),
                      diffs = relevantPendingDiffs
                        ? [relevantPendingDiffs.diff, diff]
                        : [diff]
                    if (
                      (0 === applyStringDiff(leaf.text, ...diffs).length &&
                        (canStoreDiff = !1),
                      index_es.Q6.isExpanded(targetRange))
                    ) {
                      if (
                        canStoreDiff &&
                        index_es.wA.equals(
                          targetRange.anchor.path,
                          targetRange.focus.path
                        )
                      ) {
                        var point = {
                            path: targetRange.anchor.path,
                            offset: start.offset,
                          },
                          range = index_es.KE.range(editor, point, point)
                        return (
                          handleUserSelect(range),
                          storeDiff(targetRange.anchor.path, {
                            text: '',
                            end: end.offset,
                            start: start.offset,
                          })
                        )
                      }
                      return scheduleAction(
                        () => index_es.KE.deleteFragment(editor, { direction }),
                        { at: targetRange }
                      )
                    }
                  }
                  switch (type) {
                    case 'deleteByComposition':
                    case 'deleteByCut':
                    case 'deleteByDrag':
                      return scheduleAction(
                        () => index_es.KE.deleteFragment(editor),
                        { at: targetRange }
                      )
                    case 'deleteContent':
                    case 'deleteContentForward':
                      var { anchor } = targetRange
                      if (
                        canStoreDiff &&
                        index_es.Q6.isCollapsed(targetRange)
                      ) {
                        var targetNode = index_es.bP.leaf(editor, anchor.path)
                        if (anchor.offset < targetNode.text.length)
                          return storeDiff(anchor.path, {
                            text: '',
                            start: anchor.offset,
                            end: anchor.offset + 1,
                          })
                      }
                      return scheduleAction(
                        () => index_es.KE.deleteForward(editor),
                        { at: targetRange }
                      )
                    case 'deleteContentBackward':
                      var _nativeTargetRange,
                        { anchor: _anchor } = targetRange,
                        nativeCollapsed = isDOMSelection(nativeTargetRange)
                          ? nativeTargetRange.isCollapsed
                          : !(
                              null ===
                                (_nativeTargetRange = nativeTargetRange) ||
                              void 0 === _nativeTargetRange ||
                              !_nativeTargetRange.collapsed
                            )
                      return canStoreDiff &&
                        nativeCollapsed &&
                        index_es.Q6.isCollapsed(targetRange) &&
                        _anchor.offset > 0
                        ? storeDiff(_anchor.path, {
                            text: '',
                            start: _anchor.offset - 1,
                            end: _anchor.offset,
                          })
                        : scheduleAction(
                            () => index_es.KE.deleteBackward(editor),
                            { at: targetRange }
                          )
                    case 'deleteEntireSoftLine':
                      return scheduleAction(
                        () => {
                          ;(index_es.KE.deleteBackward(editor, {
                            unit: 'line',
                          }),
                            index_es.KE.deleteForward(editor, { unit: 'line' }))
                        },
                        { at: targetRange }
                      )
                    case 'deleteHardLineBackward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteBackward(editor, { unit: 'block' }),
                        { at: targetRange }
                      )
                    case 'deleteSoftLineBackward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteBackward(editor, { unit: 'line' }),
                        { at: targetRange }
                      )
                    case 'deleteHardLineForward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteForward(editor, { unit: 'block' }),
                        { at: targetRange }
                      )
                    case 'deleteSoftLineForward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteForward(editor, { unit: 'line' }),
                        { at: targetRange }
                      )
                    case 'deleteWordBackward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteBackward(editor, { unit: 'word' }),
                        { at: targetRange }
                      )
                    case 'deleteWordForward':
                      return scheduleAction(
                        () =>
                          index_es.KE.deleteForward(editor, { unit: 'word' }),
                        { at: targetRange }
                      )
                    case 'insertLineBreak':
                      return scheduleAction(
                        () => index_es.KE.insertSoftBreak(editor),
                        { at: targetRange }
                      )
                    case 'insertParagraph':
                      return scheduleAction(
                        () => index_es.KE.insertBreak(editor),
                        { at: targetRange }
                      )
                    case 'insertCompositionText':
                    case 'deleteCompositionText':
                    case 'insertFromComposition':
                    case 'insertFromDrop':
                    case 'insertFromPaste':
                    case 'insertFromYank':
                    case 'insertReplacementText':
                    case 'insertText':
                      if (
                        'DataTransfer' ===
                        (null == (value = data)
                          ? void 0
                          : value.constructor.name)
                      )
                        return scheduleAction(
                          () => ReactEditor.insertData(editor, data),
                          { at: targetRange }
                        )
                      var _text = null != data ? data : ''
                      if (
                        (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor) &&
                          (_text = _text.replace('\ufeff', '')),
                        'insertText' === type &&
                          /.*\n.*\n$/.test(_text) &&
                          (_text = _text.slice(0, -1)),
                        _text.includes('\n'))
                      )
                        return scheduleAction(
                          () => {
                            var parts = _text.split('\n')
                            parts.forEach((line, i) => {
                              ;(line && index_es.KE.insertText(editor, line),
                                i !== parts.length - 1 &&
                                  index_es.KE.insertSoftBreak(editor))
                            })
                          },
                          { at: targetRange }
                        )
                      if (
                        index_es.wA.equals(
                          targetRange.anchor.path,
                          targetRange.focus.path
                        )
                      ) {
                        var [_start, _end] = index_es.Q6.edges(targetRange),
                          _diff = {
                            start: _start.offset,
                            end: _end.offset,
                            text: _text,
                          }
                        if (
                          _text &&
                          insertPositionHint &&
                          'insertCompositionText' === type
                        ) {
                          var hintPosition =
                            insertPositionHint.start +
                            insertPositionHint.text.search(/\S|$/)
                          _diff.start + _diff.text.search(/\S|$/) ===
                            hintPosition + 1 &&
                          _diff.end ===
                            insertPositionHint.start +
                              insertPositionHint.text.length
                            ? ((_diff.start -= 1),
                              (insertPositionHint = null),
                              scheduleFlush())
                            : (insertPositionHint = !1)
                        } else
                          insertPositionHint =
                            'insertText' === type &&
                            (null === insertPositionHint
                              ? _diff
                              : !(
                                  !insertPositionHint ||
                                  !index_es.Q6.isCollapsed(targetRange) ||
                                  insertPositionHint.end +
                                    insertPositionHint.text.length !==
                                    _start.offset
                                ) &&
                                _objectSpread$7(
                                  _objectSpread$7({}, insertPositionHint),
                                  {},
                                  { text: insertPositionHint.text + _text }
                                ))
                        if (canStoreDiff) {
                          var currentSelection = editor.selection
                          if (
                            (storeDiff(_start.path, _diff), currentSelection)
                          ) {
                            var newPoint = {
                              path: _start.path,
                              offset: _start.offset + _text.length,
                            }
                            scheduleAction(
                              () => {
                                index_es.gB.select(editor, {
                                  anchor: newPoint,
                                  focus: newPoint,
                                })
                              },
                              { at: newPoint }
                            )
                          }
                          return
                        }
                      }
                      return scheduleAction(
                        () => index_es.KE.insertText(editor, _text),
                        { at: targetRange }
                      )
                  }
                }
              }
            },
            handleKeyDown: (_) => {
              hasPendingDiffs() ||
                (updatePlaceholderVisibility(!0),
                setTimeout(updatePlaceholderVisibility))
            },
            handleDomMutations: (mutations) => {
              var _EDITOR_TO_FORCE_REND
              hasPendingDiffs() ||
                hasPendingAction() ||
                (mutations.some((mutation) =>
                  isTrackedMutation(editor, mutation, mutations)
                ) &&
                  (null ===
                    (_EDITOR_TO_FORCE_REND =
                      EDITOR_TO_FORCE_RENDER.get(editor)) ||
                    void 0 === _EDITOR_TO_FORCE_REND ||
                    _EDITOR_TO_FORCE_REND()))
            },
            handleInput: () => {
              ;(!hasPendingAction() && hasPendingDiffs()) || flush()
            },
          }
        }
        var useIsomorphicLayoutEffect = CAN_USE_DOM
          ? react.useLayoutEffect
          : react.useEffect
        var _excluded$2 = ['node']
        function ownKeys$6(e, r) {
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
        var MUTATION_OBSERVER_CONFIG$1 = {
            subtree: !0,
            childList: !0,
            characterData: !0,
          },
          useAndroidInputManager = IS_ANDROID
            ? (_ref) => {
                var { node } = _ref,
                  options = index_es_objectWithoutProperties(_ref, _excluded$2)
                if (!IS_ANDROID) return null
                var editor = useSlateStatic(),
                  isMounted = (function useIsMounted() {
                    var isMountedRef = (0, react.useRef)(!1)
                    return (
                      (0, react.useEffect)(
                        () => (
                          (isMountedRef.current = !0),
                          () => {
                            isMountedRef.current = !1
                          }
                        ),
                        []
                      ),
                      isMountedRef.current
                    )
                  })(),
                  [inputManager] = (0, react.useState)(() =>
                    createAndroidInputManager(
                      (function _objectSpread$6(e) {
                        for (var r = 1; r < arguments.length; r++) {
                          var t = null != arguments[r] ? arguments[r] : {}
                          r % 2
                            ? ownKeys$6(Object(t), !0).forEach(function (r) {
                                index_es_defineProperty(e, r, t[r])
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(t)
                                )
                              : ownKeys$6(Object(t)).forEach(function (r) {
                                  Object.defineProperty(
                                    e,
                                    r,
                                    Object.getOwnPropertyDescriptor(t, r)
                                  )
                                })
                        }
                        return e
                      })({ editor }, options)
                    )
                  )
                return (
                  (function useMutationObserver(node, callback, options) {
                    var [mutationObserver] = (0, react.useState)(
                      () => new MutationObserver(callback)
                    )
                    ;(useIsomorphicLayoutEffect(() => {
                      mutationObserver.takeRecords()
                    }),
                      (0, react.useEffect)(() => {
                        if (!node.current)
                          throw new Error(
                            'Failed to attach MutationObserver, `node` is undefined'
                          )
                        return (
                          mutationObserver.observe(node.current, options),
                          () => mutationObserver.disconnect()
                        )
                      }, [mutationObserver, node, options]))
                  })(
                    node,
                    inputManager.handleDomMutations,
                    MUTATION_OBSERVER_CONFIG$1
                  ),
                  EDITOR_TO_SCHEDULE_FLUSH.set(
                    editor,
                    inputManager.scheduleFlush
                  ),
                  isMounted && inputManager.flush(),
                  inputManager
                )
              }
            : () => null
        function ownKeys$5(e, r) {
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
        var String$1 = (props) => {
            var { isLast, leaf, parent, text } = props,
              editor = useSlateStatic(),
              path = ReactEditor.findPath(editor, text),
              parentPath = index_es.wA.parent(path),
              isMarkPlaceholder = Boolean(leaf[MARK_PLACEHOLDER_SYMBOL])
            return editor.isVoid(parent)
              ? react.createElement(ZeroWidthString, {
                  length: index_es.bP.string(parent).length,
                })
              : '' !== leaf.text ||
                  parent.children[parent.children.length - 1] !== text ||
                  editor.isInline(parent) ||
                  '' !== index_es.KE.string(editor, parentPath)
                ? '' === leaf.text
                  ? react.createElement(ZeroWidthString, { isMarkPlaceholder })
                  : isLast && '\n' === leaf.text.slice(-1)
                    ? react.createElement(TextString, {
                        isTrailing: !0,
                        text: leaf.text,
                      })
                    : react.createElement(TextString, { text: leaf.text })
                : react.createElement(ZeroWidthString, {
                    isLineBreak: !0,
                    isMarkPlaceholder,
                  })
          },
          TextString = (props) => {
            var { text, isTrailing = !1 } = props,
              ref = (0, react.useRef)(null),
              getTextContent = () =>
                ''
                  .concat(null != text ? text : '')
                  .concat(isTrailing ? '\n' : ''),
              [initialText] = (0, react.useState)(getTextContent)
            return (
              useIsomorphicLayoutEffect(() => {
                var textWithTrailing = getTextContent()
                ref.current &&
                  ref.current.textContent !== textWithTrailing &&
                  (ref.current.textContent = textWithTrailing)
              }),
              react.createElement(MemoizedText$1, { ref }, initialText)
            )
          },
          MemoizedText$1 = (0, react.memo)(
            (0, react.forwardRef)((props, ref) =>
              react.createElement(
                'span',
                { 'data-slate-string': !0, ref },
                props.children
              )
            )
          ),
          ZeroWidthString = (props) => {
            var {
                length = 0,
                isLineBreak = !1,
                isMarkPlaceholder = !1,
              } = props,
              attributes = {
                'data-slate-zero-width': isLineBreak ? 'n' : 'z',
                'data-slate-length': length,
              }
            return (
              isMarkPlaceholder &&
                (attributes['data-slate-mark-placeholder'] = !0),
              react.createElement(
                'span',
                (function _objectSpread$5(e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                      ? ownKeys$5(Object(t), !0).forEach(function (r) {
                          index_es_defineProperty(e, r, t[r])
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : ownKeys$5(Object(t)).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r)
                            )
                          })
                  }
                  return e
                })({}, attributes),
                IS_ANDROID && isLineBreak ? null : '\ufeff',
                isLineBreak ? react.createElement('br', null) : null
              )
            )
          }
        function ownKeys$4(e, r) {
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
        function _objectSpread$4(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$4(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$4(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var PLACEHOLDER_DELAY = IS_ANDROID ? 300 : 0
        function clearTimeoutRef(timeoutRef) {
          timeoutRef.current &&
            (clearTimeout(timeoutRef.current), (timeoutRef.current = null))
        }
        var defaultRenderLeaf = (props) =>
            react.createElement(DefaultLeaf, _objectSpread$4({}, props)),
          Leaf = (props) => {
            var {
                leaf,
                isLast,
                text,
                parent,
                renderPlaceholder,
                renderLeaf = defaultRenderLeaf,
                leafPosition,
              } = props,
              editor = useSlateStatic(),
              placeholderResizeObserver = (0, react.useRef)(null),
              placeholderRef = (0, react.useRef)(null),
              [showPlaceholder, setShowPlaceholder] = (0, react.useState)(!1),
              showPlaceholderTimeoutRef = (0, react.useRef)(null),
              callbackPlaceholderRef = (0, react.useCallback)(
                (placeholderEl) => {
                  if (
                    ((function disconnectPlaceholderResizeObserver(
                      placeholderResizeObserver,
                      releaseObserver
                    ) {
                      placeholderResizeObserver.current &&
                        (placeholderResizeObserver.current.disconnect(),
                        releaseObserver &&
                          (placeholderResizeObserver.current = null))
                    })(placeholderResizeObserver, null == placeholderEl),
                    null == placeholderEl)
                  ) {
                    var _leaf$onPlaceholderRe
                    ;(EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor),
                      null ===
                        (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) ||
                        void 0 === _leaf$onPlaceholderRe ||
                        _leaf$onPlaceholderRe.call(leaf, null))
                  } else {
                    if (
                      (EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl),
                      !placeholderResizeObserver.current)
                    ) {
                      var ResizeObserver$1 =
                        window.ResizeObserver || ResizeObserver
                      placeholderResizeObserver.current = new ResizeObserver$1(
                        () => {
                          var _leaf$onPlaceholderRe2
                          null ===
                            (_leaf$onPlaceholderRe2 =
                              leaf.onPlaceholderResize) ||
                            void 0 === _leaf$onPlaceholderRe2 ||
                            _leaf$onPlaceholderRe2.call(leaf, placeholderEl)
                        }
                      )
                    }
                    ;(placeholderResizeObserver.current.observe(placeholderEl),
                      (placeholderRef.current = placeholderEl))
                  }
                },
                [placeholderRef, leaf, editor]
              ),
              children = react.createElement(String$1, {
                isLast,
                leaf,
                parent,
                text,
              }),
              leafIsPlaceholder = Boolean(leaf[PLACEHOLDER_SYMBOL])
            if (
              ((0, react.useEffect)(
                () => (
                  leafIsPlaceholder
                    ? showPlaceholderTimeoutRef.current ||
                      (showPlaceholderTimeoutRef.current = setTimeout(() => {
                        ;(setShowPlaceholder(!0),
                          (showPlaceholderTimeoutRef.current = null))
                      }, PLACEHOLDER_DELAY))
                    : (clearTimeoutRef(showPlaceholderTimeoutRef),
                      setShowPlaceholder(!1)),
                  () => clearTimeoutRef(showPlaceholderTimeoutRef)
                ),
                [leafIsPlaceholder, setShowPlaceholder]
              ),
              leafIsPlaceholder && showPlaceholder)
            ) {
              var placeholderProps = {
                children: leaf.placeholder,
                attributes: {
                  'data-slate-placeholder': !0,
                  style: {
                    position: 'absolute',
                    top: 0,
                    pointerEvents: 'none',
                    width: '100%',
                    maxWidth: '100%',
                    display: 'block',
                    opacity: '0.333',
                    userSelect: 'none',
                    textDecoration: 'none',
                    WebkitUserModify: IS_WEBKIT ? 'inherit' : void 0,
                  },
                  contentEditable: !1,
                  ref: callbackPlaceholderRef,
                },
              }
              children = react.createElement(
                react.Fragment,
                null,
                children,
                renderPlaceholder(placeholderProps)
              )
            }
            return renderLeaf({
              attributes: { 'data-slate-leaf': !0 },
              children,
              leaf,
              text,
              leafPosition,
            })
          },
          MemoizedLeaf = react.memo(
            Leaf,
            (prev, next) =>
              next.parent === prev.parent &&
              next.isLast === prev.isLast &&
              next.renderLeaf === prev.renderLeaf &&
              next.renderPlaceholder === prev.renderPlaceholder &&
              next.text === prev.text &&
              index_es.EY.equals(next.leaf, prev.leaf) &&
              next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL]
          ),
          DefaultLeaf = (props) => {
            var { attributes, children } = props
            return react.createElement(
              'span',
              _objectSpread$4({}, attributes),
              children
            )
          }
        function useGenericSelector(selector, equalityFn) {
          var selectedState,
            [, forceRender] = (0, react.useReducer)((s) => s + 1, 0),
            latestSubscriptionCallbackError = (0, react.useRef)(),
            latestSelector = (0, react.useRef)(() => null),
            latestSelectedState = (0, react.useRef)(null)
          try {
            if (
              selector !== latestSelector.current ||
              latestSubscriptionCallbackError.current
            ) {
              var selectorResult = selector()
              selectedState = equalityFn(
                latestSelectedState.current,
                selectorResult
              )
                ? latestSelectedState.current
                : selectorResult
            } else selectedState = latestSelectedState.current
          } catch (err) {
            throw (
              latestSubscriptionCallbackError.current &&
                (function isError(error) {
                  return error instanceof Error
                })(err) &&
                (err.message +=
                  '\nThe error may be correlated with this previous error:\n'.concat(
                    latestSubscriptionCallbackError.current.stack,
                    '\n\n'
                  )),
              err
            )
          }
          return (
            (latestSelector.current = selector),
            (latestSelectedState.current = selectedState),
            (latestSubscriptionCallbackError.current = void 0),
            [
              selectedState,
              (0, react.useCallback)(() => {
                try {
                  var newSelectedState = latestSelector.current()
                  if (equalityFn(latestSelectedState.current, newSelectedState))
                    return
                  latestSelectedState.current = newSelectedState
                } catch (err) {
                  err instanceof Error
                    ? (latestSubscriptionCallbackError.current = err)
                    : (latestSubscriptionCallbackError.current = new Error(
                        String(err)
                      ))
                }
                forceRender()
              }, []),
            ]
          )
        }
        var DecorateContext = (0, react.createContext)({}),
          useDecorations = (node, parentDecorations) => {
            var editor = useSlateStatic(),
              { decorate, addEventListener } = (0, react.useContext)(
                DecorateContext
              ),
              equalityFn = index_es.EY.isText(node)
                ? isTextDecorationsEqual
                : isElementDecorationsEqual,
              [decorations, update] = useGenericSelector(() => {
                var path = ReactEditor.findPath(editor, node)
                return decorate([node, path])
              }, equalityFn)
            return (
              useIsomorphicLayoutEffect(() => {
                var unsubscribe = addEventListener(update)
                return (update(), unsubscribe)
              }, [addEventListener, update]),
              (0, react.useMemo)(
                () => [...decorations, ...parentDecorations],
                [decorations, parentDecorations]
              )
            )
          }
        function ownKeys$3(e, r) {
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
        function _objectSpread$3(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$3(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$3(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var defaultRenderText = (props) =>
            react.createElement(DefaultText, _objectSpread$3({}, props)),
          Text = (props) => {
            for (
              var {
                  decorations: parentDecorations,
                  isLast,
                  parent,
                  renderPlaceholder,
                  renderLeaf,
                  renderText = defaultRenderText,
                  text,
                } = props,
                editor = useSlateStatic(),
                ref = (0, react.useRef)(null),
                decorations = useDecorations(text, parentDecorations),
                decoratedLeaves = index_es.EY.decorations(text, decorations),
                key = ReactEditor.findKey(editor, text),
                children = [],
                i = 0;
              i < decoratedLeaves.length;
              i++
            ) {
              var { leaf, position } = decoratedLeaves[i]
              children.push(
                react.createElement(MemoizedLeaf, {
                  isLast: isLast && i === decoratedLeaves.length - 1,
                  key: ''.concat(key.id, '-').concat(i),
                  renderPlaceholder,
                  leaf,
                  leafPosition: position,
                  text,
                  parent,
                  renderLeaf,
                })
              )
            }
            var callbackRef = (0, react.useCallback)(
              (span) => {
                var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor)
                ;(span
                  ? (null == KEY_TO_ELEMENT || KEY_TO_ELEMENT.set(key, span),
                    NODE_TO_ELEMENT.set(text, span),
                    ELEMENT_TO_NODE.set(span, text))
                  : (null == KEY_TO_ELEMENT || KEY_TO_ELEMENT.delete(key),
                    NODE_TO_ELEMENT.delete(text),
                    ref.current && ELEMENT_TO_NODE.delete(ref.current)),
                  (ref.current = span))
              },
              [ref, editor, key, text]
            )
            return renderText({
              text,
              children,
              attributes: { 'data-slate-node': 'text', ref: callbackRef },
            })
          },
          MemoizedText = react.memo(
            Text,
            (prev, next) =>
              next.parent === prev.parent &&
              next.isLast === prev.isLast &&
              next.renderText === prev.renderText &&
              next.renderLeaf === prev.renderLeaf &&
              next.renderPlaceholder === prev.renderPlaceholder &&
              next.text === prev.text &&
              isTextDecorationsEqual(next.decorations, prev.decorations)
          ),
          DefaultText = (props) => {
            var { attributes, children } = props
            return react.createElement(
              'span',
              _objectSpread$3({}, attributes),
              children
            )
          }
        function ownKeys$2(e, r) {
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
        function _objectSpread$2(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$2(Object(t), !0).forEach(function (r) {
                  index_es_defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$2(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var defaultRenderElement = (props) =>
            react.createElement(DefaultElement, _objectSpread$2({}, props)),
          index_es_Element = (props) => {
            var {
                decorations: parentDecorations,
                element,
                renderElement = defaultRenderElement,
                renderChunk,
                renderPlaceholder,
                renderLeaf,
                renderText,
              } = props,
              editor = useSlateStatic(),
              readOnly = useReadOnly(),
              isInline = editor.isInline(element),
              decorations = useDecorations(element, parentDecorations),
              key = ReactEditor.findKey(editor, element),
              ref = (0, react.useCallback)(
                (ref) => {
                  var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor)
                  ref
                    ? (null == KEY_TO_ELEMENT || KEY_TO_ELEMENT.set(key, ref),
                      NODE_TO_ELEMENT.set(element, ref),
                      ELEMENT_TO_NODE.set(ref, element))
                    : (null == KEY_TO_ELEMENT || KEY_TO_ELEMENT.delete(key),
                      NODE_TO_ELEMENT.delete(element))
                },
                [editor, key, element]
              ),
              children = useChildren({
                decorations,
                node: element,
                renderElement,
                renderChunk,
                renderPlaceholder,
                renderLeaf,
                renderText,
              }),
              attributes = { 'data-slate-node': 'element', ref }
            if (
              (isInline && (attributes['data-slate-inline'] = !0),
              !isInline && index_es.KE.hasInlines(editor, element))
            ) {
              var text = index_es.bP.string(element),
                dir = direction_default()(text)
              'rtl' === dir && (attributes.dir = dir)
            }
            if (index_es.KE.isVoid(editor, element)) {
              ;((attributes['data-slate-void'] = !0),
                !readOnly && isInline && (attributes.contentEditable = !1))
              var Tag = isInline ? 'span' : 'div',
                [[_text]] = index_es.bP.texts(element)
              ;((children = react.createElement(
                Tag,
                {
                  'data-slate-spacer': !0,
                  style: {
                    height: '0',
                    color: 'transparent',
                    outline: 'none',
                    position: 'absolute',
                  },
                },
                react.createElement(MemoizedText, {
                  renderPlaceholder,
                  decorations: [],
                  isLast: !1,
                  parent: element,
                  text: _text,
                })
              )),
                NODE_TO_INDEX.set(_text, 0),
                NODE_TO_PARENT.set(_text, element))
            }
            return renderElement({ attributes, children, element })
          },
          MemoizedElement = react.memo(
            index_es_Element,
            (prev, next) =>
              prev.element === next.element &&
              prev.renderElement === next.renderElement &&
              prev.renderChunk === next.renderChunk &&
              prev.renderText === next.renderText &&
              prev.renderLeaf === next.renderLeaf &&
              prev.renderPlaceholder === next.renderPlaceholder &&
              isElementDecorationsEqual(prev.decorations, next.decorations)
          ),
          DefaultElement = (props) => {
            var { attributes, children, element } = props,
              Tag = useSlateStatic().isInline(element) ? 'span' : 'div'
            return react.createElement(
              Tag,
              _objectSpread$2(
                _objectSpread$2({}, attributes),
                {},
                { style: { position: 'relative' } }
              ),
              children
            )
          }
        class ChunkTreeHelper {
          constructor(chunkTree, _ref) {
            var { chunkSize, debug } = _ref
            ;(index_es_defineProperty(this, 'root', void 0),
              index_es_defineProperty(this, 'chunkSize', void 0),
              index_es_defineProperty(this, 'debug', void 0),
              index_es_defineProperty(this, 'reachedEnd', void 0),
              index_es_defineProperty(this, 'pointerChunk', void 0),
              index_es_defineProperty(this, 'pointerIndex', void 0),
              index_es_defineProperty(this, 'pointerIndexStack', void 0),
              index_es_defineProperty(this, 'cachedPointerNode', void 0),
              (this.root = chunkTree),
              (this.chunkSize = chunkSize),
              (this.debug = null != debug && debug),
              (this.pointerChunk = chunkTree),
              (this.pointerIndex = -1),
              (this.pointerIndexStack = []),
              (this.reachedEnd = !1),
              this.validateState())
          }
          readLeaf() {
            if (this.reachedEnd) return null
            for (;;) {
              if (this.pointerIndex + 1 < this.pointerSiblings.length) {
                ;(this.pointerIndex++, (this.cachedPointerNode = void 0))
                break
              }
              if ('root' === this.pointerChunk.type)
                return ((this.reachedEnd = !0), null)
              this.exitChunk()
            }
            return (
              this.validateState(),
              this.enterChunkUntilLeaf(!1),
              this.pointerNode
            )
          }
          returnToPreviousLeaf() {
            if (this.reachedEnd)
              return ((this.reachedEnd = !1), void this.enterChunkUntilLeaf(!0))
            for (;;) {
              if (this.pointerIndex >= 1) {
                ;(this.pointerIndex--, (this.cachedPointerNode = void 0))
                break
              }
              if ('root' === this.pointerChunk.type)
                return void (this.pointerIndex = -1)
              this.exitChunk()
            }
            ;(this.validateState(), this.enterChunkUntilLeaf(!0))
          }
          insertBefore(leaves) {
            ;(this.returnToPreviousLeaf(),
              this.insertAfter(leaves),
              this.readLeaf())
          }
          insertAfter(leaves) {
            if (0 !== leaves.length) {
              for (
                var beforeDepth = 0, afterDepth = 0;
                'chunk' === this.pointerChunk.type &&
                this.pointerIndex === this.pointerSiblings.length - 1;

              ) {
                var remainingCapacity =
                    this.chunkSize - this.pointerSiblings.length,
                  toInsertCount = Math.min(remainingCapacity, leaves.length)
                if (toInsertCount > 0) {
                  var leavesToInsert = leaves.splice(0, toInsertCount)
                  this.rawInsertAfter(leavesToInsert, beforeDepth)
                }
                ;(this.exitChunk(), beforeDepth++)
              }
              if (0 !== leaves.length) {
                var rawInsertPointer = this.savePointer(),
                  finalPointer = null
                if (this.readLeaf())
                  for (
                    ;
                    'chunk' === this.pointerChunk.type &&
                    0 === this.pointerIndex;

                  ) {
                    var _remainingCapacity =
                        this.chunkSize - this.pointerSiblings.length,
                      _toInsertCount = Math.min(
                        _remainingCapacity,
                        leaves.length
                      )
                    if (_toInsertCount > 0) {
                      var _leavesToInsert = leaves.splice(
                        -_toInsertCount,
                        _toInsertCount
                      )
                      ;((this.pointerIndex = -1),
                        (this.cachedPointerNode = void 0),
                        this.rawInsertAfter(_leavesToInsert, afterDepth),
                        finalPointer || (finalPointer = this.savePointer()))
                    }
                    ;(this.exitChunk(), afterDepth++)
                  }
                this.restorePointer(rawInsertPointer)
                var minDepth = Math.max(beforeDepth, afterDepth)
                ;(this.rawInsertAfter(leaves, minDepth),
                  finalPointer && this.restorePointer(finalPointer),
                  this.validateState())
              }
            }
          }
          remove() {
            ;(this.pointerSiblings.splice(this.pointerIndex--, 1),
              (this.cachedPointerNode = void 0),
              0 === this.pointerSiblings.length &&
              'chunk' === this.pointerChunk.type
                ? (this.exitChunk(), this.remove())
                : this.invalidateChunk(),
              this.validateState())
          }
          invalidateChunk() {
            for (var c = this.pointerChunk; 'chunk' === c.type; c = c.parent)
              this.root.modifiedChunks.add(c)
          }
          get atStart() {
            return 'root' === this.pointerChunk.type && -1 === this.pointerIndex
          }
          get pointerSiblings() {
            return this.pointerChunk.children
          }
          getPointerNode() {
            return this.reachedEnd || -1 === this.pointerIndex
              ? null
              : this.pointerSiblings[this.pointerIndex]
          }
          get pointerNode() {
            if (void 0 !== this.cachedPointerNode) return this.cachedPointerNode
            var pointerNode = this.getPointerNode()
            return ((this.cachedPointerNode = pointerNode), pointerNode)
          }
          getChunkPath(chunk) {
            for (var path = [], c = chunk; 'chunk' === c.type; c = c.parent) {
              var index = c.parent.children.indexOf(c)
              if (-1 === index) return null
              path.unshift(index)
            }
            return path
          }
          savePointer() {
            if (this.atStart) return 'start'
            if (!this.pointerNode)
              throw new Error('Cannot save pointer when pointerNode is null')
            return { chunk: this.pointerChunk, node: this.pointerNode }
          }
          restorePointer(savedPointer) {
            if ('start' === savedPointer)
              return (
                (this.pointerChunk = this.root),
                (this.pointerIndex = -1),
                (this.pointerIndexStack = []),
                (this.reachedEnd = !1),
                void (this.cachedPointerNode = void 0)
              )
            var { chunk, node } = savedPointer,
              index = chunk.children.indexOf(node)
            if (-1 === index)
              throw new Error(
                'Cannot restore point because saved node is no longer in saved chunk'
              )
            var indexStack = this.getChunkPath(chunk)
            if (!indexStack)
              throw new Error(
                'Cannot restore point because saved chunk is no longer connected to root'
              )
            ;((this.pointerChunk = chunk),
              (this.pointerIndex = index),
              (this.pointerIndexStack = indexStack),
              (this.reachedEnd = !1),
              (this.cachedPointerNode = node),
              this.validateState())
          }
          enterChunk(end) {
            var _this$pointerNode
            if (
              'chunk' !==
              (null === (_this$pointerNode = this.pointerNode) ||
              void 0 === _this$pointerNode
                ? void 0
                : _this$pointerNode.type)
            )
              throw new Error('Cannot enter non-chunk')
            if (
              (this.pointerIndexStack.push(this.pointerIndex),
              (this.pointerChunk = this.pointerNode),
              (this.pointerIndex = end ? this.pointerSiblings.length - 1 : 0),
              (this.cachedPointerNode = void 0),
              this.validateState(),
              0 === this.pointerChunk.children.length)
            )
              throw new Error('Cannot enter empty chunk')
          }
          enterChunkUntilLeaf(end) {
            for (
              ;
              'chunk' ===
              (null === (_this$pointerNode2 = this.pointerNode) ||
              void 0 === _this$pointerNode2
                ? void 0
                : _this$pointerNode2.type);

            ) {
              var _this$pointerNode2
              this.enterChunk(end)
            }
          }
          exitChunk() {
            if ('root' === this.pointerChunk.type)
              throw new Error('Cannot exit root')
            var previousPointerChunk = this.pointerChunk
            ;((this.pointerChunk = previousPointerChunk.parent),
              (this.pointerIndex = this.pointerIndexStack.pop()),
              (this.cachedPointerNode = void 0),
              this.validateState())
          }
          rawInsertAfter(leaves, minDepth) {
            if (0 !== leaves.length) {
              for (
                var groupIntoChunks = (leaves, parent, perChunk) => {
                    if (1 === perChunk) return leaves
                    for (var chunks = [], i = 0; i < this.chunkSize; i++) {
                      var chunkNodes = leaves.slice(
                        i * perChunk,
                        (i + 1) * perChunk
                      )
                      if (0 === chunkNodes.length) break
                      var chunk = {
                        type: 'chunk',
                        key: new Key(),
                        parent,
                        children: [],
                      }
                      ;((chunk.children = groupIntoChunks(
                        chunkNodes,
                        chunk,
                        perChunk / this.chunkSize
                      )),
                        chunks.push(chunk))
                    }
                    return chunks
                  },
                  newTotal = this.pointerSiblings.length + leaves.length,
                  depthForTotal = 0,
                  i = this.chunkSize;
                i < newTotal;
                i *= this.chunkSize
              )
                depthForTotal++
              var depth = Math.max(depthForTotal, minDepth),
                perTopLevelChunk = Math.pow(this.chunkSize, depth),
                chunks = groupIntoChunks(
                  leaves,
                  this.pointerChunk,
                  perTopLevelChunk
                )
              ;(this.pointerSiblings.splice(
                this.pointerIndex + 1,
                0,
                ...chunks
              ),
                (this.pointerIndex += chunks.length),
                (this.cachedPointerNode = void 0),
                this.invalidateChunk(),
                this.validateState())
            }
          }
          validateState() {
            if (this.debug) {
              var validateDescendant = (node) => {
                if ('chunk' === node.type) {
                  var { parent, children } = node
                  if (!parent.children.includes(node))
                    throw new Error(
                      'Debug: Chunk '.concat(
                        node.key.id,
                        ' has an incorrect parent property'
                      )
                    )
                  children.forEach(validateDescendant)
                }
              }
              if (
                (this.root.children.forEach(validateDescendant),
                void 0 !== this.cachedPointerNode &&
                  this.cachedPointerNode !== this.getPointerNode())
              )
                throw new Error(
                  'Debug: The cached pointer is incorrect and has not been invalidated'
                )
              var actualIndexStack = this.getChunkPath(this.pointerChunk)
              if (!actualIndexStack)
                throw new Error(
                  'Debug: The pointer chunk is not connected to the root'
                )
              if (!index_es.wA.equals(this.pointerIndexStack, actualIndexStack))
                throw new Error(
                  'Debug: The cached index stack ['
                    .concat(
                      this.pointerIndexStack.join(', '),
                      '] does not match the path of the pointer chunk ['
                    )
                    .concat(actualIndexStack.join(', '), ']')
                )
            }
          }
        }
        class ChildrenHelper {
          constructor(editor, children) {
            ;(index_es_defineProperty(this, 'editor', void 0),
              index_es_defineProperty(this, 'children', void 0),
              index_es_defineProperty(this, 'cachedKeys', void 0),
              index_es_defineProperty(this, 'pointerIndex', void 0),
              (this.editor = editor),
              (this.children = children),
              (this.cachedKeys = new Array(children.length)),
              (this.pointerIndex = 0))
          }
          read(n) {
            if (1 === n) return [this.children[this.pointerIndex++]]
            var slicedChildren = this.remaining(n)
            return ((this.pointerIndex += n), slicedChildren)
          }
          remaining(maxChildren) {
            return void 0 === maxChildren
              ? this.children.slice(this.pointerIndex)
              : this.children.slice(
                  this.pointerIndex,
                  this.pointerIndex + maxChildren
                )
          }
          get reachedEnd() {
            return this.pointerIndex >= this.children.length
          }
          lookAhead(node, key) {
            var elementResult = this.children.indexOf(node, this.pointerIndex)
            if (elementResult > -1) return elementResult - this.pointerIndex
            for (var i = this.pointerIndex; i < this.children.length; i++) {
              var candidateNode = this.children[i]
              if (this.findKey(candidateNode, i) === key)
                return i - this.pointerIndex
            }
            return -1
          }
          toChunkLeaves(nodes, startIndex) {
            return nodes.map((node, i) => ({
              type: 'leaf',
              node,
              key: this.findKey(node, startIndex + i),
              index: startIndex + i,
            }))
          }
          findKey(node, index) {
            var cachedKey = this.cachedKeys[index]
            if (cachedKey) return cachedKey
            var key = ReactEditor.findKey(this.editor, node)
            return ((this.cachedKeys[index] = key), key)
          }
        }
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
        var KEY_TO_CHUNK_TREE = new WeakMap(),
          getChunkTreeForNode = function getChunkTreeForNode(editor, node) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              key = ReactEditor.findKey(editor, node),
              chunkTree = KEY_TO_CHUNK_TREE.get(key)
            return (
              chunkTree ||
                ((chunkTree = {
                  type: 'root',
                  movedNodeKeys: new Set(),
                  modifiedChunks: new Set(),
                  children: [],
                }),
                KEY_TO_CHUNK_TREE.set(key, chunkTree)),
              options.reconcile &&
                ((editor, _ref) => {
                  var {
                    chunkTree,
                    children,
                    chunkSize,
                    rerenderChildren = [],
                    onInsert,
                    onUpdate,
                    onIndexChange,
                    debug,
                  } = _ref
                  chunkTree.modifiedChunks.clear()
                  for (
                    var treeLeaf,
                      chunkTreeHelper = new ChunkTreeHelper(chunkTree, {
                        chunkSize,
                        debug,
                      }),
                      childrenHelper = new ChildrenHelper(editor, children),
                      _loop = function _loop() {
                        var lookAhead = childrenHelper.lookAhead(
                            treeLeaf.node,
                            treeLeaf.key
                          ),
                          wasMoved =
                            lookAhead > 0 &&
                            chunkTree.movedNodeKeys.has(treeLeaf.key)
                        if (-1 === lookAhead || wasMoved)
                          return (chunkTreeHelper.remove(), 1)
                        var insertedChildrenStartIndex =
                            childrenHelper.pointerIndex,
                          insertedChildren = childrenHelper.read(lookAhead + 1),
                          matchingChild = insertedChildren.pop()
                        if (insertedChildren.length) {
                          var _leavesToInsert = childrenHelper.toChunkLeaves(
                            insertedChildren,
                            insertedChildrenStartIndex
                          )
                          ;(chunkTreeHelper.insertBefore(_leavesToInsert),
                            insertedChildren.forEach((node, relativeIndex) => {
                              null == onInsert ||
                                onInsert(
                                  node,
                                  insertedChildrenStartIndex + relativeIndex
                                )
                            }))
                        }
                        var matchingChildIndex = childrenHelper.pointerIndex - 1
                        ;(treeLeaf.node !== matchingChild &&
                          ((treeLeaf.node = matchingChild),
                          chunkTreeHelper.invalidateChunk(),
                          null == onUpdate ||
                            onUpdate(matchingChild, matchingChildIndex)),
                          treeLeaf.index !== matchingChildIndex &&
                            ((treeLeaf.index = matchingChildIndex),
                            null == onIndexChange ||
                              onIndexChange(matchingChild, matchingChildIndex)),
                          rerenderChildren.includes(matchingChildIndex) &&
                            chunkTreeHelper.invalidateChunk())
                      };
                    (treeLeaf = chunkTreeHelper.readLeaf());

                  )
                    _loop()
                  if (!childrenHelper.reachedEnd) {
                    var remainingChildren = childrenHelper.remaining(),
                      leavesToInsert = childrenHelper.toChunkLeaves(
                        remainingChildren,
                        childrenHelper.pointerIndex
                      )
                    ;(chunkTreeHelper.returnToPreviousLeaf(),
                      chunkTreeHelper.insertAfter(leavesToInsert),
                      remainingChildren.forEach((node, relativeIndex) => {
                        null == onInsert ||
                          onInsert(
                            node,
                            childrenHelper.pointerIndex + relativeIndex
                          )
                      }))
                  }
                  chunkTree.movedNodeKeys.clear()
                })(
                  editor,
                  (function index_es_objectSpread$1(e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {}
                      r % 2
                        ? index_es_ownKeys$1(Object(t), !0).forEach(
                            function (r) {
                              index_es_defineProperty(e, r, t[r])
                            }
                          )
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
                  })({ chunkTree, children: node.children }, options.reconcile)
                ),
              chunkTree
            )
          },
          defaultRenderChunk = (_ref) => {
            var { children } = _ref
            return children
          },
          ChunkAncestor = (props) => {
            var {
              root,
              ancestor,
              renderElement,
              renderChunk = defaultRenderChunk,
            } = props
            return ancestor.children.map((chunkNode) => {
              if ('chunk' === chunkNode.type) {
                var key = chunkNode.key.id,
                  renderedChunk = renderChunk({
                    highest: ancestor === root,
                    lowest: chunkNode.children.some((c) => 'leaf' === c.type),
                    attributes: { 'data-slate-chunk': !0 },
                    children: react.createElement(MemoizedChunk, {
                      root,
                      ancestor: chunkNode,
                      renderElement,
                      renderChunk,
                    }),
                  })
                return react.createElement(
                  react.Fragment,
                  { key },
                  renderedChunk
                )
              }
              var element = chunkNode.node
              return renderElement(element, chunkNode.index, chunkNode.key)
            })
          },
          ChunkTree = ChunkAncestor,
          MemoizedChunk = react.memo(
            ChunkAncestor,
            (prev, next) =>
              prev.root === next.root &&
              prev.renderElement === next.renderElement &&
              prev.renderChunk === next.renderChunk &&
              !next.root.modifiedChunks.has(next.ancestor)
          ),
          ElementContext = (0, react.createContext)(null),
          useChildren = (props) => {
            var {
                decorations,
                node,
                renderElement,
                renderChunk,
                renderPlaceholder,
                renderText,
                renderLeaf,
              } = props,
              editor = useSlateStatic()
            IS_NODE_MAP_DIRTY.set(editor, !1)
            var chunkSize =
                !index_es.KE.isEditor(node) &&
                index_es.Hg.isElement(node) &&
                !editor.isInline(node) &&
                index_es.KE.hasInlines(editor, node)
                  ? null
                  : editor.getChunkSize(node),
              chunking = !!chunkSize,
              { decorationsByChild, childrenToRedecorate } =
                useDecorationsByChild(editor, node, decorations)
            chunking ||
              node.children.forEach((n, i) => {
                ;(NODE_TO_INDEX.set(n, i), NODE_TO_PARENT.set(n, node))
              })
            var renderElementComponent = (0, react.useCallback)(
              (n, i, cachedKey) => {
                var key =
                  null != cachedKey ? cachedKey : ReactEditor.findKey(editor, n)
                return react.createElement(
                  ElementContext.Provider,
                  { key: 'provider-'.concat(key.id), value: n },
                  react.createElement(MemoizedElement, {
                    decorations: decorationsByChild[i],
                    element: n,
                    key: key.id,
                    renderElement,
                    renderChunk,
                    renderPlaceholder,
                    renderLeaf,
                    renderText,
                  })
                )
              },
              [
                editor,
                decorationsByChild,
                renderElement,
                renderChunk,
                renderPlaceholder,
                renderLeaf,
                renderText,
              ]
            )
            if (!chunking)
              return node.children.map((n, i) =>
                index_es.EY.isText(n)
                  ? ((n, i) => {
                      var key = ReactEditor.findKey(editor, n)
                      return react.createElement(MemoizedText, {
                        decorations: decorationsByChild[i],
                        key: key.id,
                        isLast: i === node.children.length - 1,
                        parent: node,
                        renderPlaceholder,
                        renderLeaf,
                        renderText,
                        text: n,
                      })
                    })(n, i)
                  : renderElementComponent(n, i)
              )
            var chunkTree = getChunkTreeForNode(editor, node, {
              reconcile: {
                chunkSize,
                rerenderChildren: childrenToRedecorate,
                onInsert: (n, i) => {
                  ;(NODE_TO_INDEX.set(n, i), NODE_TO_PARENT.set(n, node))
                },
                onUpdate: (n, i) => {
                  ;(NODE_TO_INDEX.set(n, i), NODE_TO_PARENT.set(n, node))
                },
                onIndexChange: (n, i) => {
                  NODE_TO_INDEX.set(n, i)
                },
              },
            })
            return react.createElement(ChunkTree, {
              root: chunkTree,
              ancestor: chunkTree,
              renderElement: renderElementComponent,
              renderChunk,
            })
          },
          useDecorationsByChild = (editor, node, decorations) => {
            var decorationsByChild = ((editor, node, decorations) => {
                var decorationsByChild = Array.from(node.children, () => [])
                if (0 === decorations.length) return decorationsByChild
                var path = DOMEditor.findPath(editor, node),
                  level = path.length,
                  ancestorRange = index_es.KE.range(editor, path),
                  cachedChildRanges = new Array(node.children.length),
                  getChildRange = (index) => {
                    var cachedRange = cachedChildRanges[index]
                    if (cachedRange) return cachedRange
                    var childRange = index_es.KE.range(editor, [...path, index])
                    return ((cachedChildRanges[index] = childRange), childRange)
                  }
                for (var decoration of decorations) {
                  var decorationRange = index_es.Q6.intersection(
                    ancestorRange,
                    decoration
                  )
                  if (decorationRange)
                    for (
                      var [startPoint, endPoint] =
                          index_es.Q6.edges(decorationRange),
                        startIndex = startPoint.path[level],
                        endIndex = endPoint.path[level],
                        i = startIndex;
                      i <= endIndex;
                      i++
                    ) {
                      var ds = decorationsByChild[i]
                      if (ds) {
                        var childRange = getChildRange(i),
                          childDecorationRange = index_es.Q6.intersection(
                            childRange,
                            decoration
                          )
                        childDecorationRange &&
                          ds.push(
                            _objectSpread(
                              _objectSpread({}, decoration),
                              childDecorationRange
                            )
                          )
                      }
                    }
                }
                return decorationsByChild
              })(editor, node, decorations),
              mutableDecorationsByChild = (0, react.useRef)(
                decorationsByChild
              ).current,
              childrenToRedecorate = []
            mutableDecorationsByChild.length = decorationsByChild.length
            for (var i = 0; i < decorationsByChild.length; i++) {
              var _mutableDecorationsBy,
                _decorations = decorationsByChild[i],
                previousDecorations =
                  null !==
                    (_mutableDecorationsBy = mutableDecorationsByChild[i]) &&
                  void 0 !== _mutableDecorationsBy
                    ? _mutableDecorationsBy
                    : null
              isElementDecorationsEqual(previousDecorations, _decorations) ||
                ((mutableDecorationsByChild[i] = _decorations),
                childrenToRedecorate.push(i))
            }
            return {
              decorationsByChild: mutableDecorationsByChild,
              childrenToRedecorate,
            }
          },
          ReadOnlyContext = (0, react.createContext)(!1),
          useReadOnly = () => (0, react.useContext)(ReadOnlyContext),
          SlateSelectorContext = (0, react.createContext)({}),
          refEquality = (a, b) => a === b
        function useSlateSelector(selector) {
          var equalityFn =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : refEquality,
            { deferred } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            context = (0, react.useContext)(SlateSelectorContext)
          if (!context)
            throw new Error(
              "The `useSlateSelector` hook must be used inside the <Slate> component's context."
            )
          var { addEventListener } = context,
            editor = useSlateStatic(),
            genericSelector = (0, react.useCallback)(
              () => selector(editor),
              [editor, selector]
            ),
            [selectedState, update] = useGenericSelector(
              genericSelector,
              equalityFn
            )
          return (
            useIsomorphicLayoutEffect(() => {
              var unsubscribe = addEventListener(update, { deferred })
              return (update(), unsubscribe)
            }, [addEventListener, update, deferred]),
            selectedState
          )
        }
        var useSlate = () => {
          var { addEventListener } = (0, react.useContext)(
              SlateSelectorContext
            ),
            [, forceRender] = (0, react.useReducer)((s) => s + 1, 0)
          if (!addEventListener)
            throw new Error(
              "The `useSlate` hook must be used inside the <Slate> component's context."
            )
          return (
            useIsomorphicLayoutEffect(
              () => addEventListener(forceRender),
              [addEventListener]
            ),
            useSlateStatic()
          )
        }
        new WeakMap()
        var MUTATION_OBSERVER_CONFIG = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        }
        class RestoreDOMComponent extends react.Component {
          constructor() {
            ;(super(...arguments),
              index_es_defineProperty(this, 'context', null),
              index_es_defineProperty(this, 'manager', null),
              index_es_defineProperty(this, 'mutationObserver', null))
          }
          observe() {
            var _this$mutationObserve,
              { node } = this.props
            if (!node.current)
              throw new Error(
                'Failed to attach MutationObserver, `node` is undefined'
              )
            null === (_this$mutationObserve = this.mutationObserver) ||
              void 0 === _this$mutationObserve ||
              _this$mutationObserve.observe(
                node.current,
                MUTATION_OBSERVER_CONFIG
              )
          }
          componentDidMount() {
            var { receivedUserInput } = this.props,
              editor = this.context
            ;((this.manager = ((editor, receivedUserInput) => {
              var bufferedMutations = [],
                clear = () => {
                  bufferedMutations = []
                }
              return {
                registerMutations: (mutations) => {
                  if (receivedUserInput.current) {
                    var trackedMutations = mutations.filter((mutation) =>
                      isTrackedMutation(editor, mutation, mutations)
                    )
                    bufferedMutations.push(...trackedMutations)
                  }
                },
                restoreDOM: function restoreDOM() {
                  bufferedMutations.length > 0 &&
                    (bufferedMutations.reverse().forEach((mutation) => {
                      'characterData' !== mutation.type &&
                        (mutation.removedNodes.forEach((node) => {
                          mutation.target.insertBefore(
                            node,
                            mutation.nextSibling
                          )
                        }),
                        mutation.addedNodes.forEach((node) => {
                          mutation.target.removeChild(node)
                        }))
                    }),
                    clear())
                },
                clear,
              }
            })(editor, receivedUserInput)),
              (this.mutationObserver = new MutationObserver(
                this.manager.registerMutations
              )),
              this.observe())
          }
          getSnapshotBeforeUpdate() {
            var _this$mutationObserve2,
              _this$mutationObserve3,
              _this$manager2,
              _this$manager,
              pendingMutations =
                null === (_this$mutationObserve2 = this.mutationObserver) ||
                void 0 === _this$mutationObserve2
                  ? void 0
                  : _this$mutationObserve2.takeRecords()
            null != pendingMutations &&
              pendingMutations.length &&
              (null === (_this$manager = this.manager) ||
                void 0 === _this$manager ||
                _this$manager.registerMutations(pendingMutations))
            return (
              null === (_this$mutationObserve3 = this.mutationObserver) ||
                void 0 === _this$mutationObserve3 ||
                _this$mutationObserve3.disconnect(),
              null === (_this$manager2 = this.manager) ||
                void 0 === _this$manager2 ||
                _this$manager2.restoreDOM(),
              null
            )
          }
          componentDidUpdate() {
            var _this$manager3
            ;(null === (_this$manager3 = this.manager) ||
              void 0 === _this$manager3 ||
              _this$manager3.clear(),
              this.observe())
          }
          componentWillUnmount() {
            var _this$mutationObserve4
            null === (_this$mutationObserve4 = this.mutationObserver) ||
              void 0 === _this$mutationObserve4 ||
              _this$mutationObserve4.disconnect()
          }
          render() {
            return this.props.children
          }
        }
        index_es_defineProperty(
          RestoreDOMComponent,
          'contextType',
          EditorContext
        )
        var RestoreDOM = IS_ANDROID
            ? RestoreDOMComponent
            : (_ref) => {
                var { children } = _ref
                return react.createElement(react.Fragment, null, children)
              },
          ComposingContext = (0, react.createContext)(!1),
          useComposing = () => (0, react.useContext)(ComposingContext),
          _excluded$1 = [
            'autoFocus',
            'decorate',
            'onDOMBeforeInput',
            'placeholder',
            'readOnly',
            'renderElement',
            'renderChunk',
            'renderLeaf',
            'renderText',
            'renderPlaceholder',
            'scrollSelectionIntoView',
            'style',
            'as',
            'disableDefaultStyles',
          ],
          index_es_excluded2 = ['text']
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
        var Children = (props) =>
            react.createElement(react.Fragment, null, useChildren(props)),
          Editable = (0, react.forwardRef)((props, forwardedRef) => {
            var defaultRenderPlaceholder = (0, react.useCallback)(
                (props) =>
                  react.createElement(
                    DefaultPlaceholder,
                    index_es_objectSpread({}, props)
                  ),
                []
              ),
              {
                autoFocus,
                decorate = defaultDecorate,
                onDOMBeforeInput: propsOnDOMBeforeInput,
                placeholder,
                readOnly = !1,
                renderElement,
                renderChunk,
                renderLeaf,
                renderText,
                renderPlaceholder = defaultRenderPlaceholder,
                scrollSelectionIntoView = defaultScrollSelectionIntoView,
                style: userStyle = {},
                as: Component = 'div',
                disableDefaultStyles = !1,
              } = props,
              attributes = index_es_objectWithoutProperties(props, _excluded$1),
              editor = useSlate(),
              [isComposing, setIsComposing] = (0, react.useState)(!1),
              ref = (0, react.useRef)(null),
              deferredOperations = (0, react.useRef)([]),
              [placeholderHeight, setPlaceholderHeight] = (0, react.useState)(),
              processing = (0, react.useRef)(!1),
              { onUserInput, receivedUserInput } =
                (function useTrackUserInput() {
                  var editor = useSlateStatic(),
                    receivedUserInput = (0, react.useRef)(!1),
                    animationFrameIdRef = (0, react.useRef)(0),
                    onUserInput = (0, react.useCallback)(() => {
                      if (!receivedUserInput.current) {
                        receivedUserInput.current = !0
                        var window = ReactEditor.getWindow(editor)
                        ;(window.cancelAnimationFrame(
                          animationFrameIdRef.current
                        ),
                          (animationFrameIdRef.current =
                            window.requestAnimationFrame(() => {
                              receivedUserInput.current = !1
                            })))
                      }
                    }, [editor])
                  return (
                    (0, react.useEffect)(
                      () => () =>
                        cancelAnimationFrame(animationFrameIdRef.current),
                      []
                    ),
                    { receivedUserInput, onUserInput }
                  )
                })(),
              [, forceRender] = (0, react.useReducer)((s) => s + 1, 0)
            ;(EDITOR_TO_FORCE_RENDER.set(editor, forceRender),
              IS_READ_ONLY.set(editor, readOnly))
            var state = (0, react.useMemo)(
              () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1,
              }),
              []
            )
            ;(0, react.useEffect)(() => {
              ref.current && autoFocus && ref.current.focus()
            }, [autoFocus])
            var androidInputManagerRef = (0, react.useRef)(),
              onDOMSelectionChange = (0, react.useMemo)(
                () =>
                  throttle_default()(() => {
                    if (IS_NODE_MAP_DIRTY.get(editor)) onDOMSelectionChange()
                    else {
                      var root = ReactEditor.toDOMNode(
                        editor,
                        editor
                      ).getRootNode()
                      if (
                        !processing.current &&
                        IS_WEBKIT &&
                        root instanceof ShadowRoot
                      ) {
                        processing.current = !0
                        var active = (() => {
                          for (
                            var activeElement = document.activeElement;
                            null !== (_activeElement = activeElement) &&
                            void 0 !== _activeElement &&
                            _activeElement.shadowRoot &&
                            null !==
                              (_activeElement$shadow =
                                activeElement.shadowRoot) &&
                            void 0 !== _activeElement$shadow &&
                            _activeElement$shadow.activeElement;

                          ) {
                            var _activeElement,
                              _activeElement$shadow,
                              _activeElement2
                            activeElement =
                              null === (_activeElement2 = activeElement) ||
                              void 0 === _activeElement2 ||
                              null ===
                                (_activeElement2 =
                                  _activeElement2.shadowRoot) ||
                              void 0 === _activeElement2
                                ? void 0
                                : _activeElement2.activeElement
                          }
                          return activeElement
                        })()
                        return (
                          active
                            ? document.execCommand('indent')
                            : index_es.gB.deselect(editor),
                          void (processing.current = !1)
                        )
                      }
                      var androidInputManager = androidInputManagerRef.current
                      if (
                        (IS_ANDROID || !ReactEditor.isComposing(editor)) &&
                        (!state.isUpdatingSelection ||
                          (null != androidInputManager &&
                            androidInputManager.isFlushing())) &&
                        !state.isDraggingInternally
                      ) {
                        var _root =
                            ReactEditor.findDocumentOrShadowRoot(editor),
                          { activeElement } = _root,
                          _el = ReactEditor.toDOMNode(editor, editor),
                          domSelection = getSelection(_root)
                        if (
                          (activeElement === _el
                            ? ((state.latestElement = activeElement),
                              IS_FOCUSED.set(editor, !0))
                            : IS_FOCUSED.delete(editor),
                          !domSelection)
                        )
                          return index_es.gB.deselect(editor)
                        var { anchorNode, focusNode } = domSelection,
                          anchorNodeSelectable =
                            ReactEditor.hasEditableTarget(editor, anchorNode) ||
                            ReactEditor.isTargetInsideNonReadonlyVoid(
                              editor,
                              anchorNode
                            ),
                          focusNodeInEditor = ReactEditor.hasTarget(
                            editor,
                            focusNode
                          )
                        if (anchorNodeSelectable && focusNodeInEditor) {
                          var range = ReactEditor.toSlateRange(
                            editor,
                            domSelection,
                            { exactMatch: !1, suppressThrow: !0 }
                          )
                          range &&
                            (ReactEditor.isComposing(editor) ||
                            (null != androidInputManager &&
                              androidInputManager.hasPendingChanges()) ||
                            (null != androidInputManager &&
                              androidInputManager.isFlushing())
                              ? null == androidInputManager ||
                                androidInputManager.handleUserSelect(range)
                              : index_es.gB.select(editor, range))
                        }
                        !readOnly ||
                          (anchorNodeSelectable && focusNodeInEditor) ||
                          index_es.gB.deselect(editor)
                      }
                    }
                  }, 100),
                [editor, readOnly, state]
              ),
              scheduleOnDOMSelectionChange = (0, react.useMemo)(
                () => debounce_default()(onDOMSelectionChange, 0),
                [onDOMSelectionChange]
              )
            ;((androidInputManagerRef.current = useAndroidInputManager({
              node: ref,
              onDOMSelectionChange,
              scheduleOnDOMSelectionChange,
            })),
              useIsomorphicLayoutEffect(() => {
                var _androidInputManagerR, _androidInputManagerR2, window
                ref.current && (window = getDefaultView(ref.current))
                  ? (EDITOR_TO_WINDOW.set(editor, window),
                    EDITOR_TO_ELEMENT.set(editor, ref.current),
                    NODE_TO_ELEMENT.set(editor, ref.current),
                    ELEMENT_TO_NODE.set(ref.current, editor))
                  : NODE_TO_ELEMENT.delete(editor)
                var { selection } = editor,
                  root = ReactEditor.findDocumentOrShadowRoot(editor),
                  domSelection = getSelection(root)
                if (
                  domSelection &&
                  ReactEditor.isFocused(editor) &&
                  (null ===
                    (_androidInputManagerR = androidInputManagerRef.current) ||
                    void 0 === _androidInputManagerR ||
                    !_androidInputManagerR.hasPendingAction())
                ) {
                  var setDomSelection = (forceChange) => {
                    var hasDomSelection = 'None' !== domSelection.type
                    if (selection || hasDomSelection) {
                      var anchorNode,
                        focusNode = domSelection.focusNode
                      if (IS_FIREFOX && domSelection.rangeCount > 1) {
                        var firstRange = domSelection.getRangeAt(0),
                          lastRange = domSelection.getRangeAt(
                            domSelection.rangeCount - 1
                          )
                        anchorNode =
                          firstRange.startContainer === focusNode
                            ? lastRange.endContainer
                            : firstRange.startContainer
                      } else anchorNode = domSelection.anchorNode
                      var editorElement = EDITOR_TO_ELEMENT.get(editor),
                        hasDomSelectionInEditor = !1
                      if (
                        (editorElement.contains(anchorNode) &&
                          editorElement.contains(focusNode) &&
                          (hasDomSelectionInEditor = !0),
                        hasDomSelection &&
                          hasDomSelectionInEditor &&
                          selection &&
                          !forceChange)
                      ) {
                        var slateRange = ReactEditor.toSlateRange(
                          editor,
                          domSelection,
                          { exactMatch: !0, suppressThrow: !0 }
                        )
                        if (
                          slateRange &&
                          index_es.Q6.equals(slateRange, selection)
                        ) {
                          var _anchorNode
                          if (!state.hasMarkPlaceholder) return
                          if (
                            null !== (_anchorNode = anchorNode) &&
                            void 0 !== _anchorNode &&
                            null !==
                              (_anchorNode = _anchorNode.parentElement) &&
                            void 0 !== _anchorNode &&
                            _anchorNode.hasAttribute(
                              'data-slate-mark-placeholder'
                            )
                          )
                            return
                        }
                      }
                      if (
                        !selection ||
                        ReactEditor.hasRange(editor, selection)
                      ) {
                        state.isUpdatingSelection = !0
                        var newDomRange = null
                        try {
                          newDomRange =
                            selection &&
                            ReactEditor.toDOMRange(editor, selection)
                        } catch (e) {}
                        return (
                          newDomRange
                            ? (ReactEditor.isComposing(editor) && !IS_ANDROID
                                ? domSelection.collapseToEnd()
                                : index_es.Q6.isBackward(selection)
                                  ? domSelection.setBaseAndExtent(
                                      newDomRange.endContainer,
                                      newDomRange.endOffset,
                                      newDomRange.startContainer,
                                      newDomRange.startOffset
                                    )
                                  : domSelection.setBaseAndExtent(
                                      newDomRange.startContainer,
                                      newDomRange.startOffset,
                                      newDomRange.endContainer,
                                      newDomRange.endOffset
                                    ),
                              scrollSelectionIntoView(editor, newDomRange))
                            : domSelection.removeAllRanges(),
                          newDomRange
                        )
                      }
                      editor.selection = ReactEditor.toSlateRange(
                        editor,
                        domSelection,
                        { exactMatch: !1, suppressThrow: !0 }
                      )
                    }
                  }
                  domSelection.rangeCount <= 1 && setDomSelection()
                  var ensureSelection =
                    'action' ===
                    (null ===
                      (_androidInputManagerR2 =
                        androidInputManagerRef.current) ||
                    void 0 === _androidInputManagerR2
                      ? void 0
                      : _androidInputManagerR2.isFlushing())
                  if (IS_ANDROID && ensureSelection) {
                    var timeoutId = null,
                      animationFrameId = requestAnimationFrame(() => {
                        if (ensureSelection) {
                          var ensureDomSelection = (forceChange) => {
                            try {
                              ;(ReactEditor.toDOMNode(editor, editor).focus(),
                                setDomSelection(forceChange))
                            } catch (e) {}
                          }
                          ;(ensureDomSelection(),
                            (timeoutId = setTimeout(() => {
                              ;(ensureDomSelection(!0),
                                (state.isUpdatingSelection = !1))
                            })))
                        }
                      })
                    return () => {
                      ;(cancelAnimationFrame(animationFrameId),
                        timeoutId && clearTimeout(timeoutId))
                    }
                  }
                  setTimeout(() => {
                    state.isUpdatingSelection = !1
                  })
                }
              }))
            var onDOMBeforeInput = (0, react.useCallback)(
                (event) => {
                  handleNativeHistoryEvents(editor, event)
                  var root = ReactEditor.toDOMNode(editor, editor).getRootNode()
                  if (
                    null != processing &&
                    processing.current &&
                    IS_WEBKIT &&
                    root instanceof ShadowRoot
                  ) {
                    var range = event.getTargetRanges()[0],
                      newRange = new window.Range()
                    ;(newRange.setStart(
                      range.startContainer,
                      range.startOffset
                    ),
                      newRange.setEnd(range.endContainer, range.endOffset))
                    var slateRange = ReactEditor.toSlateRange(
                      editor,
                      newRange,
                      { exactMatch: !1, suppressThrow: !1 }
                    )
                    return (
                      index_es.gB.select(editor, slateRange),
                      event.preventDefault(),
                      void event.stopImmediatePropagation()
                    )
                  }
                  if (
                    (onUserInput(),
                    !readOnly &&
                      ReactEditor.hasEditableTarget(editor, event.target) &&
                      !isDOMEventHandled(event, propsOnDOMBeforeInput))
                  ) {
                    var _EDITOR_TO_USER_SELEC
                    if (androidInputManagerRef.current)
                      return androidInputManagerRef.current.handleDOMBeforeInput(
                        event
                      )
                    ;(scheduleOnDOMSelectionChange.flush(),
                      onDOMSelectionChange.flush())
                    var { selection } = editor,
                      { inputType: type } = event,
                      data = event.dataTransfer || event.data || void 0,
                      isCompositionChange =
                        'insertCompositionText' === type ||
                        'deleteCompositionText' === type
                    if (isCompositionChange && ReactEditor.isComposing(editor))
                      return
                    var native = !1
                    if (
                      'insertText' === type &&
                      selection &&
                      index_es.Q6.isCollapsed(selection) &&
                      event.data &&
                      1 === event.data.length &&
                      /[a-z ]/i.test(event.data) &&
                      0 !== selection.anchor.offset &&
                      ((native = !0),
                      editor.marks && (native = !1),
                      !IS_NODE_MAP_DIRTY.get(editor))
                    ) {
                      var _node$parentElement,
                        _window$getComputedSt,
                        { anchor } = selection,
                        [node, offset] = ReactEditor.toDOMPoint(editor, anchor),
                        anchorNode =
                          null === (_node$parentElement = node.parentElement) ||
                          void 0 === _node$parentElement
                            ? void 0
                            : _node$parentElement.closest('a'),
                        _window = ReactEditor.getWindow(editor)
                      if (
                        native &&
                        anchorNode &&
                        ReactEditor.hasDOMNode(editor, anchorNode)
                      ) {
                        var _lastText$textContent,
                          lastText =
                            null == _window
                              ? void 0
                              : _window.document
                                  .createTreeWalker(
                                    anchorNode,
                                    NodeFilter.SHOW_TEXT
                                  )
                                  .lastChild()
                        lastText === node &&
                          (null ===
                            (_lastText$textContent = lastText.textContent) ||
                          void 0 === _lastText$textContent
                            ? void 0
                            : _lastText$textContent.length) === offset &&
                          (native = !1)
                      }
                      if (
                        native &&
                        node.parentElement &&
                        'pre' ===
                          (null == _window ||
                          null ===
                            (_window$getComputedSt = _window.getComputedStyle(
                              node.parentElement
                            )) ||
                          void 0 === _window$getComputedSt
                            ? void 0
                            : _window$getComputedSt.whiteSpace)
                      ) {
                        var block = index_es.KE.above(editor, {
                          at: anchor.path,
                          match: (n) =>
                            index_es.Hg.isElement(n) &&
                            index_es.KE.isBlock(editor, n),
                        })
                        block &&
                          index_es.bP.string(block[0]).includes('\t') &&
                          (native = !1)
                      }
                    }
                    if (
                      (!type.startsWith('delete') ||
                        type.startsWith('deleteBy')) &&
                      !IS_NODE_MAP_DIRTY.get(editor)
                    ) {
                      var [targetRange] = event.getTargetRanges()
                      if (targetRange) {
                        var _range = ReactEditor.toSlateRange(
                          editor,
                          targetRange,
                          { exactMatch: !1, suppressThrow: !1 }
                        )
                        if (
                          !selection ||
                          !index_es.Q6.equals(selection, _range)
                        ) {
                          native = !1
                          var selectionRef =
                            !isCompositionChange &&
                            editor.selection &&
                            index_es.KE.rangeRef(editor, editor.selection)
                          ;(index_es.gB.select(editor, _range),
                            selectionRef &&
                              EDITOR_TO_USER_SELECTION.set(
                                editor,
                                selectionRef
                              ))
                        }
                      }
                    }
                    if (isCompositionChange) return
                    if (
                      (native || event.preventDefault(),
                      selection &&
                        index_es.Q6.isExpanded(selection) &&
                        type.startsWith('delete'))
                    ) {
                      var direction = type.endsWith('Backward')
                        ? 'backward'
                        : 'forward'
                      return void index_es.KE.deleteFragment(editor, {
                        direction,
                      })
                    }
                    switch (type) {
                      case 'deleteByComposition':
                      case 'deleteByCut':
                      case 'deleteByDrag':
                        index_es.KE.deleteFragment(editor)
                        break
                      case 'deleteContent':
                      case 'deleteContentForward':
                        index_es.KE.deleteForward(editor)
                        break
                      case 'deleteContentBackward':
                        index_es.KE.deleteBackward(editor)
                        break
                      case 'deleteEntireSoftLine':
                        ;(index_es.KE.deleteBackward(editor, { unit: 'line' }),
                          index_es.KE.deleteForward(editor, { unit: 'line' }))
                        break
                      case 'deleteHardLineBackward':
                        index_es.KE.deleteBackward(editor, { unit: 'block' })
                        break
                      case 'deleteSoftLineBackward':
                        index_es.KE.deleteBackward(editor, { unit: 'line' })
                        break
                      case 'deleteHardLineForward':
                        index_es.KE.deleteForward(editor, { unit: 'block' })
                        break
                      case 'deleteSoftLineForward':
                        index_es.KE.deleteForward(editor, { unit: 'line' })
                        break
                      case 'deleteWordBackward':
                        index_es.KE.deleteBackward(editor, { unit: 'word' })
                        break
                      case 'deleteWordForward':
                        index_es.KE.deleteForward(editor, { unit: 'word' })
                        break
                      case 'insertLineBreak':
                        index_es.KE.insertSoftBreak(editor)
                        break
                      case 'insertParagraph':
                        index_es.KE.insertBreak(editor)
                        break
                      case 'insertFromComposition':
                      case 'insertFromDrop':
                      case 'insertFromPaste':
                      case 'insertFromYank':
                      case 'insertReplacementText':
                      case 'insertText':
                        ;('insertFromComposition' === type &&
                          ReactEditor.isComposing(editor) &&
                          (setIsComposing(!1), IS_COMPOSING.set(editor, !1)),
                          'DataTransfer' ===
                          (null == data ? void 0 : data.constructor.name)
                            ? ReactEditor.insertData(editor, data)
                            : 'string' == typeof data &&
                              (native
                                ? deferredOperations.current.push(() =>
                                    index_es.KE.insertText(editor, data)
                                  )
                                : index_es.KE.insertText(editor, data)))
                    }
                    var toRestore =
                      null ===
                        (_EDITOR_TO_USER_SELEC =
                          EDITOR_TO_USER_SELECTION.get(editor)) ||
                      void 0 === _EDITOR_TO_USER_SELEC
                        ? void 0
                        : _EDITOR_TO_USER_SELEC.unref()
                    ;(EDITOR_TO_USER_SELECTION.delete(editor),
                      !toRestore ||
                        (editor.selection &&
                          index_es.Q6.equals(editor.selection, toRestore)) ||
                        index_es.gB.select(editor, toRestore))
                  }
                },
                [
                  editor,
                  onDOMSelectionChange,
                  onUserInput,
                  propsOnDOMBeforeInput,
                  readOnly,
                  scheduleOnDOMSelectionChange,
                ]
              ),
              callbackRef = (0, react.useCallback)(
                (node) => {
                  ;(null == node
                    ? (onDOMSelectionChange.cancel(),
                      scheduleOnDOMSelectionChange.cancel(),
                      EDITOR_TO_ELEMENT.delete(editor),
                      NODE_TO_ELEMENT.delete(editor),
                      ref.current &&
                        HAS_BEFORE_INPUT_SUPPORT &&
                        ref.current.removeEventListener(
                          'beforeinput',
                          onDOMBeforeInput
                        ))
                    : HAS_BEFORE_INPUT_SUPPORT &&
                      node.addEventListener('beforeinput', onDOMBeforeInput),
                    (ref.current = node),
                    'function' == typeof forwardedRef
                      ? forwardedRef(node)
                      : forwardedRef && (forwardedRef.current = node))
                },
                [
                  onDOMSelectionChange,
                  scheduleOnDOMSelectionChange,
                  editor,
                  onDOMBeforeInput,
                  forwardedRef,
                ]
              )
            useIsomorphicLayoutEffect(() => {
              var window = ReactEditor.getWindow(editor),
                onSelectionChange = (_ref) => {
                  var { target } = _ref,
                    targetElement =
                      target instanceof HTMLElement ? target : null,
                    targetTagName =
                      null == targetElement ? void 0 : targetElement.tagName
                  'INPUT' !== targetTagName &&
                    'TEXTAREA' !== targetTagName &&
                    scheduleOnDOMSelectionChange()
                }
              window.document.addEventListener(
                'selectionchange',
                onSelectionChange
              )
              var stoppedDragging = () => {
                state.isDraggingInternally = !1
              }
              return (
                window.document.addEventListener('dragend', stoppedDragging),
                window.document.addEventListener('drop', stoppedDragging),
                () => {
                  ;(window.document.removeEventListener(
                    'selectionchange',
                    onSelectionChange
                  ),
                    window.document.removeEventListener(
                      'dragend',
                      stoppedDragging
                    ),
                    window.document.removeEventListener(
                      'drop',
                      stoppedDragging
                    ))
                }
              )
            }, [scheduleOnDOMSelectionChange, state])
            var decorations = decorate([editor, []]),
              decorateContext = ((decorateProp) => {
                var eventListeners = (0, react.useRef)(new Set()),
                  latestDecorate = (0, react.useRef)(decorateProp)
                useIsomorphicLayoutEffect(() => {
                  ;((latestDecorate.current = decorateProp),
                    eventListeners.current.forEach((listener) => listener()))
                }, [decorateProp])
                var decorate = (0, react.useCallback)(
                    (entry) => latestDecorate.current(entry),
                    []
                  ),
                  addEventListener = (0, react.useCallback)(
                    (callback) => (
                      eventListeners.current.add(callback),
                      () => {
                        eventListeners.current.delete(callback)
                      }
                    ),
                    []
                  )
                return (0, react.useMemo)(
                  () => ({ decorate, addEventListener }),
                  [decorate, addEventListener]
                )
              })(decorate),
              showPlaceholder =
                placeholder &&
                1 === editor.children.length &&
                1 === Array.from(index_es.bP.texts(editor)).length &&
                '' === index_es.bP.string(editor) &&
                !isComposing,
              placeHolderResizeHandler = (0, react.useCallback)(
                (placeholderEl) => {
                  var _placeholderEl$getBou
                  placeholderEl && showPlaceholder
                    ? setPlaceholderHeight(
                        null ===
                          (_placeholderEl$getBou =
                            placeholderEl.getBoundingClientRect()) ||
                          void 0 === _placeholderEl$getBou
                          ? void 0
                          : _placeholderEl$getBou.height
                      )
                    : setPlaceholderHeight(void 0)
                },
                [showPlaceholder]
              )
            if (showPlaceholder) {
              var start = index_es.KE.start(editor, [])
              decorations.push({
                [PLACEHOLDER_SYMBOL]: !0,
                placeholder,
                onPlaceholderResize: placeHolderResizeHandler,
                anchor: start,
                focus: start,
              })
            }
            var { marks } = editor
            if (
              ((state.hasMarkPlaceholder = !1),
              editor.selection &&
                index_es.Q6.isCollapsed(editor.selection) &&
                marks)
            ) {
              var { anchor } = editor.selection,
                leaf = index_es.bP.leaf(editor, anchor.path),
                rest = index_es_objectWithoutProperties(
                  leaf,
                  index_es_excluded2
                )
              if (!index_es.EY.equals(leaf, marks, { loose: !0 })) {
                state.hasMarkPlaceholder = !0
                var unset = Object.fromEntries(
                  Object.keys(rest).map((mark) => [mark, null])
                )
                decorations.push(
                  index_es_objectSpread(
                    index_es_objectSpread(
                      index_es_objectSpread(
                        { [MARK_PLACEHOLDER_SYMBOL]: !0 },
                        unset
                      ),
                      marks
                    ),
                    {},
                    { anchor, focus: anchor }
                  )
                )
              }
            }
            return (
              (0, react.useEffect)(() => {
                setTimeout(() => {
                  var { selection } = editor
                  if (selection) {
                    var { anchor: _anchor } = selection,
                      _text = index_es.bP.leaf(editor, _anchor.path)
                    if (
                      marks &&
                      !index_es.EY.equals(_text, marks, { loose: !0 })
                    )
                      return void EDITOR_TO_PENDING_INSERTION_MARKS.set(
                        editor,
                        marks
                      )
                  }
                  EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor)
                })
              }),
              (function useFlushDeferredSelectorsOnRender() {
                var { flushDeferred } = (0, react.useContext)(
                  SlateSelectorContext
                )
                useIsomorphicLayoutEffect(flushDeferred)
              })(),
              react.createElement(
                ReadOnlyContext.Provider,
                { value: readOnly },
                react.createElement(
                  ComposingContext.Provider,
                  { value: isComposing },
                  react.createElement(
                    DecorateContext.Provider,
                    { value: decorateContext },
                    react.createElement(
                      RestoreDOM,
                      { node: ref, receivedUserInput },
                      react.createElement(
                        Component,
                        index_es_objectSpread(
                          index_es_objectSpread(
                            {
                              role: readOnly ? void 0 : 'textbox',
                              'aria-multiline': !readOnly || void 0,
                            },
                            attributes
                          ),
                          {},
                          {
                            spellCheck:
                              !(!HAS_BEFORE_INPUT_SUPPORT && CAN_USE_DOM) &&
                              attributes.spellCheck,
                            autoCorrect:
                              HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM
                                ? attributes.autoCorrect
                                : 'false',
                            autoCapitalize:
                              HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM
                                ? attributes.autoCapitalize
                                : 'false',
                            'data-slate-editor': !0,
                            'data-slate-node': 'value',
                            contentEditable: !readOnly,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: callbackRef,
                            style: index_es_objectSpread(
                              index_es_objectSpread(
                                {},
                                disableDefaultStyles
                                  ? {}
                                  : index_es_objectSpread(
                                      {
                                        position: 'relative',
                                        whiteSpace: 'pre-wrap',
                                        wordWrap: 'break-word',
                                      },
                                      placeholderHeight
                                        ? { minHeight: placeholderHeight }
                                        : {}
                                    )
                              ),
                              userStyle
                            ),
                            onBeforeInput: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !HAS_BEFORE_INPUT_SUPPORT &&
                                  !readOnly &&
                                  !isEventHandled(
                                    event,
                                    attributes.onBeforeInput
                                  ) &&
                                  ReactEditor.hasSelectableTarget(
                                    editor,
                                    event.target
                                  ) &&
                                  (event.preventDefault(),
                                  !ReactEditor.isComposing(editor))
                                ) {
                                  var _text2 = event.data
                                  index_es.KE.insertText(editor, _text2)
                                }
                              },
                              [attributes.onBeforeInput, editor, readOnly]
                            ),
                            onInput: (0, react.useCallback)(
                              (event) => {
                                if (!isEventHandled(event, attributes.onInput))
                                  if (androidInputManagerRef.current)
                                    androidInputManagerRef.current.handleInput()
                                  else {
                                    for (var op of deferredOperations.current)
                                      op()
                                    ;((deferredOperations.current = []),
                                      ReactEditor.isFocused(editor) ||
                                        handleNativeHistoryEvents(
                                          editor,
                                          event.nativeEvent
                                        ))
                                  }
                              },
                              [attributes.onInput, editor]
                            ),
                            onBlur: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  !state.isUpdatingSelection &&
                                  ReactEditor.hasSelectableTarget(
                                    editor,
                                    event.target
                                  ) &&
                                  !isEventHandled(event, attributes.onBlur)
                                ) {
                                  var root =
                                    ReactEditor.findDocumentOrShadowRoot(editor)
                                  if (
                                    state.latestElement !== root.activeElement
                                  ) {
                                    var { relatedTarget } = event
                                    if (
                                      !(
                                        relatedTarget ===
                                          ReactEditor.toDOMNode(
                                            editor,
                                            editor
                                          ) ||
                                        (isDOMElement(relatedTarget) &&
                                          relatedTarget.hasAttribute(
                                            'data-slate-spacer'
                                          ))
                                      )
                                    ) {
                                      if (
                                        null != relatedTarget &&
                                        isDOMNode(relatedTarget) &&
                                        ReactEditor.hasDOMNode(
                                          editor,
                                          relatedTarget
                                        )
                                      ) {
                                        var node = ReactEditor.toSlateNode(
                                          editor,
                                          relatedTarget
                                        )
                                        if (
                                          index_es.Hg.isElement(node) &&
                                          !editor.isVoid(node)
                                        )
                                          return
                                      }
                                      if (IS_WEBKIT) {
                                        var domSelection = getSelection(root)
                                        null == domSelection ||
                                          domSelection.removeAllRanges()
                                      }
                                      IS_FOCUSED.delete(editor)
                                    }
                                  }
                                }
                              },
                              [
                                readOnly,
                                state.isUpdatingSelection,
                                state.latestElement,
                                editor,
                                attributes.onBlur,
                              ]
                            ),
                            onClick: (0, react.useCallback)(
                              (event) => {
                                if (
                                  ReactEditor.hasTarget(editor, event.target) &&
                                  !isEventHandled(event, attributes.onClick) &&
                                  isDOMNode(event.target)
                                ) {
                                  var node = ReactEditor.toSlateNode(
                                      editor,
                                      event.target
                                    ),
                                    path = ReactEditor.findPath(editor, node)
                                  if (
                                    !index_es.KE.hasPath(editor, path) ||
                                    index_es.bP.get(editor, path) !== node
                                  )
                                    return
                                  if (3 === event.detail && path.length >= 1) {
                                    var blockPath = path
                                    if (
                                      !index_es.Hg.isElement(node) ||
                                      !index_es.KE.isBlock(editor, node)
                                    ) {
                                      var _block$,
                                        block = index_es.KE.above(editor, {
                                          match: (n) =>
                                            index_es.Hg.isElement(n) &&
                                            index_es.KE.isBlock(editor, n),
                                          at: path,
                                        })
                                      blockPath =
                                        null !==
                                          (_block$ =
                                            null == block
                                              ? void 0
                                              : block[1]) && void 0 !== _block$
                                          ? _block$
                                          : path.slice(0, 1)
                                    }
                                    var range = index_es.KE.range(
                                      editor,
                                      blockPath
                                    )
                                    return void index_es.gB.select(
                                      editor,
                                      range
                                    )
                                  }
                                  if (readOnly) return
                                  var _start = index_es.KE.start(editor, path),
                                    end = index_es.KE.end(editor, path),
                                    startVoid = index_es.KE.void(editor, {
                                      at: _start,
                                    }),
                                    endVoid = index_es.KE.void(editor, {
                                      at: end,
                                    })
                                  if (
                                    startVoid &&
                                    endVoid &&
                                    index_es.wA.equals(startVoid[1], endVoid[1])
                                  ) {
                                    var _range2 = index_es.KE.range(
                                      editor,
                                      _start
                                    )
                                    index_es.gB.select(editor, _range2)
                                  }
                                }
                              },
                              [editor, attributes.onClick, readOnly]
                            ),
                            onCompositionEnd: (0, react.useCallback)(
                              (event) => {
                                if (
                                  ReactEditor.hasSelectableTarget(
                                    editor,
                                    event.target
                                  )
                                ) {
                                  var _androidInputManagerR3
                                  if (
                                    (ReactEditor.isComposing(editor) &&
                                      Promise.resolve().then(() => {
                                        ;(setIsComposing(!1),
                                          IS_COMPOSING.set(editor, !1))
                                      }),
                                    null ===
                                      (_androidInputManagerR3 =
                                        androidInputManagerRef.current) ||
                                      void 0 === _androidInputManagerR3 ||
                                      _androidInputManagerR3.handleCompositionEnd(
                                        event
                                      ),
                                    isEventHandled(
                                      event,
                                      attributes.onCompositionEnd
                                    ) || IS_ANDROID)
                                  )
                                    return
                                  if (
                                    !IS_WEBKIT &&
                                    !IS_FIREFOX_LEGACY &&
                                    !IS_IOS &&
                                    !IS_WECHATBROWSER &&
                                    !IS_UC_MOBILE &&
                                    event.data
                                  ) {
                                    var placeholderMarks =
                                      EDITOR_TO_PENDING_INSERTION_MARKS.get(
                                        editor
                                      )
                                    ;(EDITOR_TO_PENDING_INSERTION_MARKS.delete(
                                      editor
                                    ),
                                      void 0 !== placeholderMarks &&
                                        (EDITOR_TO_USER_MARKS.set(
                                          editor,
                                          editor.marks
                                        ),
                                        (editor.marks = placeholderMarks)),
                                      index_es.KE.insertText(
                                        editor,
                                        event.data
                                      ))
                                    var userMarks =
                                      EDITOR_TO_USER_MARKS.get(editor)
                                    ;(EDITOR_TO_USER_MARKS.delete(editor),
                                      void 0 !== userMarks &&
                                        (editor.marks = userMarks))
                                  }
                                }
                              },
                              [attributes.onCompositionEnd, editor]
                            ),
                            onCompositionUpdate: (0, react.useCallback)(
                              (event) => {
                                ReactEditor.hasSelectableTarget(
                                  editor,
                                  event.target
                                ) &&
                                  !isEventHandled(
                                    event,
                                    attributes.onCompositionUpdate
                                  ) &&
                                  (ReactEditor.isComposing(editor) ||
                                    (setIsComposing(!0),
                                    IS_COMPOSING.set(editor, !0)))
                              },
                              [attributes.onCompositionUpdate, editor]
                            ),
                            onCompositionStart: (0, react.useCallback)(
                              (event) => {
                                if (
                                  ReactEditor.hasSelectableTarget(
                                    editor,
                                    event.target
                                  )
                                ) {
                                  var _androidInputManagerR4
                                  if (
                                    (null ===
                                      (_androidInputManagerR4 =
                                        androidInputManagerRef.current) ||
                                      void 0 === _androidInputManagerR4 ||
                                      _androidInputManagerR4.handleCompositionStart(
                                        event
                                      ),
                                    isEventHandled(
                                      event,
                                      attributes.onCompositionStart
                                    ) || IS_ANDROID)
                                  )
                                    return
                                  setIsComposing(!0)
                                  var { selection } = editor
                                  if (
                                    selection &&
                                    index_es.Q6.isExpanded(selection)
                                  )
                                    return void index_es.KE.deleteFragment(
                                      editor
                                    )
                                }
                              },
                              [attributes.onCompositionStart, editor]
                            ),
                            onCopy: (0, react.useCallback)(
                              (event) => {
                                !ReactEditor.hasSelectableTarget(
                                  editor,
                                  event.target
                                ) ||
                                  isEventHandled(event, attributes.onCopy) ||
                                  isDOMEventTargetInput(event) ||
                                  (event.preventDefault(),
                                  ReactEditor.setFragmentData(
                                    editor,
                                    event.clipboardData,
                                    'copy'
                                  ))
                              },
                              [attributes.onCopy, editor]
                            ),
                            onCut: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  ReactEditor.hasSelectableTarget(
                                    editor,
                                    event.target
                                  ) &&
                                  !isEventHandled(event, attributes.onCut) &&
                                  !isDOMEventTargetInput(event)
                                ) {
                                  ;(event.preventDefault(),
                                    ReactEditor.setFragmentData(
                                      editor,
                                      event.clipboardData,
                                      'cut'
                                    ))
                                  var { selection } = editor
                                  if (selection)
                                    if (index_es.Q6.isExpanded(selection))
                                      index_es.KE.deleteFragment(editor)
                                    else {
                                      var node = index_es.bP.parent(
                                        editor,
                                        selection.anchor.path
                                      )
                                      index_es.KE.isVoid(editor, node) &&
                                        index_es.gB.delete(editor)
                                    }
                                }
                              },
                              [readOnly, editor, attributes.onCut]
                            ),
                            onDragOver: (0, react.useCallback)(
                              (event) => {
                                if (
                                  ReactEditor.hasTarget(editor, event.target) &&
                                  !isEventHandled(event, attributes.onDragOver)
                                ) {
                                  var node = ReactEditor.toSlateNode(
                                    editor,
                                    event.target
                                  )
                                  index_es.Hg.isElement(node) &&
                                    index_es.KE.isVoid(editor, node) &&
                                    event.preventDefault()
                                }
                              },
                              [attributes.onDragOver, editor]
                            ),
                            onDragStart: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  ReactEditor.hasTarget(editor, event.target) &&
                                  !isEventHandled(event, attributes.onDragStart)
                                ) {
                                  var node = ReactEditor.toSlateNode(
                                      editor,
                                      event.target
                                    ),
                                    path = ReactEditor.findPath(editor, node)
                                  if (
                                    (index_es.Hg.isElement(node) &&
                                      index_es.KE.isVoid(editor, node)) ||
                                    index_es.KE.void(editor, {
                                      at: path,
                                      voids: !0,
                                    })
                                  ) {
                                    var range = index_es.KE.range(editor, path)
                                    index_es.gB.select(editor, range)
                                  }
                                  ;((state.isDraggingInternally = !0),
                                    ReactEditor.setFragmentData(
                                      editor,
                                      event.dataTransfer,
                                      'drag'
                                    ))
                                }
                              },
                              [readOnly, editor, attributes.onDragStart, state]
                            ),
                            onDrop: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  ReactEditor.hasTarget(editor, event.target) &&
                                  !isEventHandled(event, attributes.onDrop)
                                ) {
                                  event.preventDefault()
                                  var draggedRange = editor.selection,
                                    range = ReactEditor.findEventRange(
                                      editor,
                                      event
                                    ),
                                    data = event.dataTransfer
                                  ;(index_es.gB.select(editor, range),
                                    state.isDraggingInternally &&
                                      (!draggedRange ||
                                        index_es.Q6.equals(
                                          draggedRange,
                                          range
                                        ) ||
                                        index_es.KE.void(editor, {
                                          at: range,
                                          voids: !0,
                                        }) ||
                                        index_es.gB.delete(editor, {
                                          at: draggedRange,
                                        })),
                                    ReactEditor.insertData(editor, data),
                                    ReactEditor.isFocused(editor) ||
                                      ReactEditor.focus(editor))
                                }
                              },
                              [readOnly, editor, attributes.onDrop, state]
                            ),
                            onDragEnd: (0, react.useCallback)(
                              (event) => {
                                !readOnly &&
                                  state.isDraggingInternally &&
                                  attributes.onDragEnd &&
                                  ReactEditor.hasTarget(editor, event.target) &&
                                  attributes.onDragEnd(event)
                              },
                              [readOnly, state, attributes, editor]
                            ),
                            onFocus: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  !state.isUpdatingSelection &&
                                  ReactEditor.hasEditableTarget(
                                    editor,
                                    event.target
                                  ) &&
                                  !isEventHandled(event, attributes.onFocus)
                                ) {
                                  var el = ReactEditor.toDOMNode(
                                      editor,
                                      editor
                                    ),
                                    root =
                                      ReactEditor.findDocumentOrShadowRoot(
                                        editor
                                      )
                                  if (
                                    ((state.latestElement = root.activeElement),
                                    IS_FIREFOX && event.target !== el)
                                  )
                                    return void el.focus()
                                  IS_FOCUSED.set(editor, !0)
                                }
                              },
                              [readOnly, state, editor, attributes.onFocus]
                            ),
                            onKeyDown: (0, react.useCallback)(
                              (event) => {
                                if (
                                  !readOnly &&
                                  ReactEditor.hasEditableTarget(
                                    editor,
                                    event.target
                                  )
                                ) {
                                  var _androidInputManagerR5
                                  null ===
                                    (_androidInputManagerR5 =
                                      androidInputManagerRef.current) ||
                                    void 0 === _androidInputManagerR5 ||
                                    _androidInputManagerR5.handleKeyDown(event)
                                  var { nativeEvent } = event
                                  if (
                                    (ReactEditor.isComposing(editor) &&
                                      !1 === nativeEvent.isComposing &&
                                      (IS_COMPOSING.set(editor, !1),
                                      setIsComposing(!1)),
                                    isEventHandled(
                                      event,
                                      attributes.onKeyDown
                                    ) || ReactEditor.isComposing(editor))
                                  )
                                    return
                                  var { selection } = editor,
                                    element =
                                      editor.children[
                                        null !== selection
                                          ? selection.focus.path[0]
                                          : 0
                                      ],
                                    isRTL =
                                      'rtl' ===
                                      direction_default()(
                                        index_es.bP.string(element)
                                      )
                                  if (hotkeys.isRedo(nativeEvent)) {
                                    event.preventDefault()
                                    var maybeHistoryEditor = editor
                                    return void (
                                      'function' ==
                                        typeof maybeHistoryEditor.redo &&
                                      maybeHistoryEditor.redo()
                                    )
                                  }
                                  if (hotkeys.isUndo(nativeEvent)) {
                                    event.preventDefault()
                                    var _maybeHistoryEditor = editor
                                    return void (
                                      'function' ==
                                        typeof _maybeHistoryEditor.undo &&
                                      _maybeHistoryEditor.undo()
                                    )
                                  }
                                  if (hotkeys.isMoveLineBackward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void index_es.gB.move(editor, {
                                        unit: 'line',
                                        reverse: !0,
                                      })
                                    )
                                  if (hotkeys.isMoveLineForward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void index_es.gB.move(editor, {
                                        unit: 'line',
                                      })
                                    )
                                  if (hotkeys.isExtendLineBackward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void index_es.gB.move(editor, {
                                        unit: 'line',
                                        edge: 'focus',
                                        reverse: !0,
                                      })
                                    )
                                  if (hotkeys.isExtendLineForward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void index_es.gB.move(editor, {
                                        unit: 'line',
                                        edge: 'focus',
                                      })
                                    )
                                  if (hotkeys.isMoveBackward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void (selection &&
                                      index_es.Q6.isCollapsed(selection)
                                        ? index_es.gB.move(editor, {
                                            reverse: !isRTL,
                                          })
                                        : index_es.gB.collapse(editor, {
                                            edge: isRTL ? 'end' : 'start',
                                          }))
                                    )
                                  if (hotkeys.isMoveForward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      void (selection &&
                                      index_es.Q6.isCollapsed(selection)
                                        ? index_es.gB.move(editor, {
                                            reverse: isRTL,
                                          })
                                        : index_es.gB.collapse(editor, {
                                            edge: isRTL ? 'start' : 'end',
                                          }))
                                    )
                                  if (hotkeys.isMoveWordBackward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      selection &&
                                        index_es.Q6.isExpanded(selection) &&
                                        index_es.gB.collapse(editor, {
                                          edge: 'focus',
                                        }),
                                      void index_es.gB.move(editor, {
                                        unit: 'word',
                                        reverse: !isRTL,
                                      })
                                    )
                                  if (hotkeys.isMoveWordForward(nativeEvent))
                                    return (
                                      event.preventDefault(),
                                      selection &&
                                        index_es.Q6.isExpanded(selection) &&
                                        index_es.gB.collapse(editor, {
                                          edge: 'focus',
                                        }),
                                      void index_es.gB.move(editor, {
                                        unit: 'word',
                                        reverse: isRTL,
                                      })
                                    )
                                  if (HAS_BEFORE_INPUT_SUPPORT) {
                                    if (
                                      (IS_CHROME || IS_WEBKIT) &&
                                      selection &&
                                      (hotkeys.isDeleteBackward(nativeEvent) ||
                                        hotkeys.isDeleteForward(nativeEvent)) &&
                                      index_es.Q6.isCollapsed(selection)
                                    ) {
                                      var currentNode = index_es.bP.parent(
                                        editor,
                                        selection.anchor.path
                                      )
                                      if (
                                        index_es.Hg.isElement(currentNode) &&
                                        index_es.KE.isVoid(
                                          editor,
                                          currentNode
                                        ) &&
                                        (index_es.KE.isInline(
                                          editor,
                                          currentNode
                                        ) ||
                                          index_es.KE.isBlock(
                                            editor,
                                            currentNode
                                          ))
                                      )
                                        return (
                                          event.preventDefault(),
                                          void index_es.KE.deleteBackward(
                                            editor,
                                            { unit: 'block' }
                                          )
                                        )
                                    }
                                  } else {
                                    if (
                                      hotkeys.isBold(nativeEvent) ||
                                      hotkeys.isItalic(nativeEvent) ||
                                      hotkeys.isTransposeCharacter(nativeEvent)
                                    )
                                      return void event.preventDefault()
                                    if (hotkeys.isSoftBreak(nativeEvent))
                                      return (
                                        event.preventDefault(),
                                        void index_es.KE.insertSoftBreak(editor)
                                      )
                                    if (hotkeys.isSplitBlock(nativeEvent))
                                      return (
                                        event.preventDefault(),
                                        void index_es.KE.insertBreak(editor)
                                      )
                                    if (hotkeys.isDeleteBackward(nativeEvent))
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'backward',
                                            })
                                          : index_es.KE.deleteBackward(editor))
                                      )
                                    if (hotkeys.isDeleteForward(nativeEvent))
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'forward',
                                            })
                                          : index_es.KE.deleteForward(editor))
                                      )
                                    if (
                                      hotkeys.isDeleteLineBackward(nativeEvent)
                                    )
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'backward',
                                            })
                                          : index_es.KE.deleteBackward(editor, {
                                              unit: 'line',
                                            }))
                                      )
                                    if (
                                      hotkeys.isDeleteLineForward(nativeEvent)
                                    )
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'forward',
                                            })
                                          : index_es.KE.deleteForward(editor, {
                                              unit: 'line',
                                            }))
                                      )
                                    if (
                                      hotkeys.isDeleteWordBackward(nativeEvent)
                                    )
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'backward',
                                            })
                                          : index_es.KE.deleteBackward(editor, {
                                              unit: 'word',
                                            }))
                                      )
                                    if (
                                      hotkeys.isDeleteWordForward(nativeEvent)
                                    )
                                      return (
                                        event.preventDefault(),
                                        void (selection &&
                                        index_es.Q6.isExpanded(selection)
                                          ? index_es.KE.deleteFragment(editor, {
                                              direction: 'forward',
                                            })
                                          : index_es.KE.deleteForward(editor, {
                                              unit: 'word',
                                            }))
                                      )
                                  }
                                }
                              },
                              [readOnly, editor, attributes.onKeyDown]
                            ),
                            onPaste: (0, react.useCallback)(
                              (event) => {
                                readOnly ||
                                  !ReactEditor.hasEditableTarget(
                                    editor,
                                    event.target
                                  ) ||
                                  isEventHandled(event, attributes.onPaste) ||
                                  ((!HAS_BEFORE_INPUT_SUPPORT ||
                                    ((event) =>
                                      event.clipboardData &&
                                      '' !==
                                        event.clipboardData.getData(
                                          'text/plain'
                                        ) &&
                                      1 === event.clipboardData.types.length)(
                                      event.nativeEvent
                                    ) ||
                                    IS_WEBKIT) &&
                                    (event.preventDefault(),
                                    ReactEditor.insertData(
                                      editor,
                                      event.clipboardData
                                    )))
                              },
                              [readOnly, editor, attributes.onPaste]
                            ),
                          }
                        ),
                        react.createElement(Children, {
                          decorations,
                          node: editor,
                          renderElement,
                          renderChunk,
                          renderPlaceholder,
                          renderLeaf,
                          renderText,
                        })
                      )
                    )
                  )
                )
              )
            )
          }),
          DefaultPlaceholder = (_ref2) => {
            var { attributes, children } = _ref2
            return react.createElement(
              'span',
              index_es_objectSpread({}, attributes),
              children,
              IS_ANDROID && react.createElement('br', null)
            )
          },
          defaultDecorate = () => [],
          defaultScrollSelectionIntoView = (editor, domRange) => {
            if (
              domRange.getBoundingClientRect &&
              (!editor.selection ||
                (editor.selection && index_es.Q6.isCollapsed(editor.selection)))
            ) {
              var leafEl = domRange.startContainer.parentElement,
                domRect = domRange.getBoundingClientRect()
              if (
                0 === domRect.width &&
                0 === domRect.height &&
                0 === domRect.x &&
                0 === domRect.y
              ) {
                var leafRect = leafEl.getBoundingClientRect()
                if (leafRect.width > 0 || leafRect.height > 0) return
              }
              ;((leafEl.getBoundingClientRect =
                domRange.getBoundingClientRect.bind(domRange)),
                dist_e(leafEl, { scrollMode: 'if-needed' }),
                delete leafEl.getBoundingClientRect)
            }
          },
          isEventHandled = (event, handler) => {
            if (!handler) return !1
            var shouldTreatEventAsHandled = handler(event)
            return null != shouldTreatEventAsHandled
              ? shouldTreatEventAsHandled
              : event.isDefaultPrevented() || event.isPropagationStopped()
          },
          isDOMEventTargetInput = (event) =>
            isDOMNode(event.target) &&
            (event.target instanceof HTMLInputElement ||
              event.target instanceof HTMLTextAreaElement),
          isDOMEventHandled = (event, handler) => {
            if (!handler) return !1
            var shouldTreatEventAsHandled = handler(event)
            return null != shouldTreatEventAsHandled
              ? shouldTreatEventAsHandled
              : event.defaultPrevented
          },
          handleNativeHistoryEvents = (editor, event) => {
            var maybeHistoryEditor = editor
            'historyUndo' !== event.inputType ||
            'function' != typeof maybeHistoryEditor.undo
              ? 'historyRedo' !== event.inputType ||
                'function' != typeof maybeHistoryEditor.redo ||
                maybeHistoryEditor.redo()
              : maybeHistoryEditor.undo()
          },
          FocusedContext = (0, react.createContext)(!1),
          useFocused = () => (0, react.useContext)(FocusedContext),
          REACT_MAJOR_VERSION = parseInt(react.version.split('.')[0], 10),
          index_es_excluded = [
            'editor',
            'children',
            'onChange',
            'onSelectionChange',
            'onValueChange',
            'initialValue',
          ],
          Slate = (props) => {
            var {
                editor,
                children,
                onChange,
                onSelectionChange,
                onValueChange,
                initialValue,
              } = props,
              rest = index_es_objectWithoutProperties(props, index_es_excluded)
            react.useState(() => {
              if (!index_es.bP.isNodeList(initialValue))
                throw new Error(
                  '[Slate] initialValue is invalid! Expected a list of elements but got: '.concat(
                    index_es.h6.stringify(initialValue)
                  )
                )
              if (!index_es.KE.isEditor(editor))
                throw new Error(
                  '[Slate] editor is invalid! You passed: '.concat(
                    index_es.h6.stringify(editor)
                  )
                )
              ;((editor.children = initialValue), Object.assign(editor, rest))
            })
            var { selectorContext, onChange: handleSelectorChange } =
                (function useSelectorContext() {
                  var eventListeners = (0, react.useRef)(new Set()),
                    deferredEventListeners = (0, react.useRef)(new Set()),
                    onChange = (0, react.useCallback)(() => {
                      eventListeners.current.forEach((listener) => listener())
                    }, []),
                    flushDeferred = (0, react.useCallback)(() => {
                      ;(deferredEventListeners.current.forEach((listener) =>
                        listener()
                      ),
                        deferredEventListeners.current.clear())
                    }, []),
                    addEventListener = (0, react.useCallback)(function (
                      callbackProp
                    ) {
                      var { deferred = !1 } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        callback = deferred
                          ? () =>
                              deferredEventListeners.current.add(callbackProp)
                          : callbackProp
                      return (
                        eventListeners.current.add(callback),
                        () => {
                          eventListeners.current.delete(callback)
                        }
                      )
                    }, [])
                  return {
                    selectorContext: (0, react.useMemo)(
                      () => ({ addEventListener, flushDeferred }),
                      [addEventListener, flushDeferred]
                    ),
                    onChange,
                  }
                })(),
              onContextChange = (0, react.useCallback)(
                (options) => {
                  var _options$operation
                  if (
                    (onChange && onChange(editor.children),
                    'set_selection' ===
                      (null == options ||
                      null === (_options$operation = options.operation) ||
                      void 0 === _options$operation
                        ? void 0
                        : _options$operation.type))
                  )
                    null == onSelectionChange ||
                      onSelectionChange(editor.selection)
                  else null == onValueChange || onValueChange(editor.children)
                  handleSelectorChange()
                },
                [
                  editor,
                  handleSelectorChange,
                  onChange,
                  onSelectionChange,
                  onValueChange,
                ]
              )
            ;(0, react.useEffect)(
              () => (
                EDITOR_TO_ON_CHANGE.set(editor, onContextChange),
                () => {
                  EDITOR_TO_ON_CHANGE.set(editor, () => {})
                }
              ),
              [editor, onContextChange]
            )
            var [isFocused, setIsFocused] = (0, react.useState)(
              ReactEditor.isFocused(editor)
            )
            return (
              (0, react.useEffect)(() => {
                setIsFocused(ReactEditor.isFocused(editor))
              }, [editor]),
              useIsomorphicLayoutEffect(() => {
                var fn = () => setIsFocused(ReactEditor.isFocused(editor))
                return REACT_MAJOR_VERSION >= 17
                  ? (document.addEventListener('focusin', fn),
                    document.addEventListener('focusout', fn),
                    () => {
                      ;(document.removeEventListener('focusin', fn),
                        document.removeEventListener('focusout', fn))
                    })
                  : (document.addEventListener('focus', fn, !0),
                    document.addEventListener('blur', fn, !0),
                    () => {
                      ;(document.removeEventListener('focus', fn, !0),
                        document.removeEventListener('blur', fn, !0))
                    })
              }, []),
              react.createElement(
                SlateSelectorContext.Provider,
                { value: selectorContext },
                react.createElement(
                  EditorContext.Provider,
                  { value: editor },
                  react.createElement(
                    FocusedContext.Provider,
                    { value: isFocused },
                    children
                  )
                )
              )
            )
          },
          useSelected = () => {
            var element = (0, react.useContext)(ElementContext)
            return (
              !!element &&
              useSlateSelector(
                (0, react.useCallback)(
                  (editor) => {
                    if (!editor.selection) return !1
                    var path = ReactEditor.findPath(editor, element),
                      range = index_es.KE.range(editor, path)
                    return !!index_es.Q6.intersection(range, editor.selection)
                  },
                  [element]
                ),
                void 0,
                { deferred: !0 }
              )
            )
          },
          withReact = function withReact(editor) {
            var e = editor
            e = withDOM(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'x-slate-fragment'
            )
            var { onChange, apply, insertText } = e
            return (
              (e.getChunkSize = () => null),
              IS_ANDROID &&
                (e.insertText = (text, options) => (
                  EDITOR_TO_PENDING_SELECTION.delete(e),
                  insertText(text, options)
                )),
              (e.onChange = (options) => {
                ;(REACT_MAJOR_VERSION < 18
                  ? react_dom.unstable_batchedUpdates
                  : (callback) => callback())(() => {
                  onChange(options)
                })
              }),
              (e.apply = (operation) => {
                if ('move_node' === operation.type) {
                  var parent = index_es.bP.parent(e, operation.path)
                  if (!!e.getChunkSize(parent)) {
                    var node = index_es.bP.get(e, operation.path),
                      chunkTree = getChunkTreeForNode(e, parent),
                      key = ReactEditor.findKey(e, node)
                    chunkTree.movedNodeKeys.add(key)
                  }
                }
                apply(operation)
              }),
              e
            )
          }
      },
  },
])
