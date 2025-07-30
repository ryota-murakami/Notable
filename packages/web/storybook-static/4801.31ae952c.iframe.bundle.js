'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4801],
  {
    '../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Eq: () => hideOthers })
        var console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          getDefaultParent = function (originalTarget) {
            return 'undefined' == typeof document
              ? null
              : (Array.isArray(originalTarget)
                  ? originalTarget[0]
                  : originalTarget
                ).ownerDocument.body
          },
          counterMap = new WeakMap(),
          uncontrolledNodes = new WeakMap(),
          markerMap = {},
          lockCount = 0,
          unwrapHost = function (node) {
            return node && (node.host || unwrapHost(node.parentNode))
          },
          applyAttributeToOthers = function (
            originalTarget,
            parentNode,
            markerName,
            controlAttribute
          ) {
            var targets = (function (parent, targets) {
              return targets
                .map(function (target) {
                  if (parent.contains(target)) return target
                  var correctedTarget = unwrapHost(target)
                  return correctedTarget && parent.contains(correctedTarget)
                    ? correctedTarget
                    : (console.error(
                        'aria-hidden',
                        target,
                        'in not contained inside',
                        parent,
                        '. Doing nothing'
                      ),
                      null)
                })
                .filter(function (x) {
                  return Boolean(x)
                })
            })(
              parentNode,
              Array.isArray(originalTarget) ? originalTarget : [originalTarget]
            )
            markerMap[markerName] || (markerMap[markerName] = new WeakMap())
            var markerCounter = markerMap[markerName],
              hiddenNodes = [],
              elementsToKeep = new Set(),
              elementsToStop = new Set(targets),
              keep = function (el) {
                el &&
                  !elementsToKeep.has(el) &&
                  (elementsToKeep.add(el), keep(el.parentNode))
              }
            targets.forEach(keep)
            var deep = function (parent) {
              parent &&
                !elementsToStop.has(parent) &&
                Array.prototype.forEach.call(parent.children, function (node) {
                  if (elementsToKeep.has(node)) deep(node)
                  else
                    try {
                      var attr = node.getAttribute(controlAttribute),
                        alreadyHidden = null !== attr && 'false' !== attr,
                        counterValue = (counterMap.get(node) || 0) + 1,
                        markerValue = (markerCounter.get(node) || 0) + 1
                      ;(counterMap.set(node, counterValue),
                        markerCounter.set(node, markerValue),
                        hiddenNodes.push(node),
                        1 === counterValue &&
                          alreadyHidden &&
                          uncontrolledNodes.set(node, !0),
                        1 === markerValue &&
                          node.setAttribute(markerName, 'true'),
                        alreadyHidden ||
                          node.setAttribute(controlAttribute, 'true'))
                    } catch (e) {
                      console.error('aria-hidden: cannot operate on ', node, e)
                    }
                })
            }
            return (
              deep(parentNode),
              elementsToKeep.clear(),
              lockCount++,
              function () {
                ;(hiddenNodes.forEach(function (node) {
                  var counterValue = counterMap.get(node) - 1,
                    markerValue = markerCounter.get(node) - 1
                  ;(counterMap.set(node, counterValue),
                    markerCounter.set(node, markerValue),
                    counterValue ||
                      (uncontrolledNodes.has(node) ||
                        node.removeAttribute(controlAttribute),
                      uncontrolledNodes.delete(node)),
                    markerValue || node.removeAttribute(markerName))
                }),
                  --lockCount ||
                    ((counterMap = new WeakMap()),
                    (counterMap = new WeakMap()),
                    (uncontrolledNodes = new WeakMap()),
                    (markerMap = {})))
              }
            )
          },
          hideOthers = function (originalTarget, parentNode, markerName) {
            void 0 === markerName && (markerName = 'data-aria-hidden')
            var targets = Array.from(
                Array.isArray(originalTarget)
                  ? originalTarget
                  : [originalTarget]
              ),
              activeParentNode = parentNode || getDefaultParent(originalTarget)
            return activeParentNode
              ? (targets.push.apply(
                  targets,
                  Array.from(
                    activeParentNode.querySelectorAll('[aria-live], script')
                  )
                ),
                applyAttributeToOthers(
                  targets,
                  activeParentNode,
                  markerName,
                  'aria-hidden'
                ))
              : function () {
                  return null
                }
          }
      },
    '../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.8_react@19.1.0/node_modules/react-remove-scroll/dist/es2015/Combination.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Combination })
        var __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p])
                return t
              }),
            __assign.apply(this, arguments)
          )
        }
        function __rest(s, e) {
          var t = {}
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) &&
              e.indexOf(p) < 0 &&
              (t[p] = s[p])
          if (null != s && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                (t[p[i]] = s[p[i]])
          }
          return t
        }
        Object.create
        function __spreadArray(to, from, pack) {
          if (pack || 2 === arguments.length)
            for (var ar, i = 0, l = from.length; i < l; i++)
              (!ar && i in from) ||
                (ar || (ar = Array.prototype.slice.call(from, 0, i)),
                (ar[i] = from[i]))
          return to.concat(ar || Array.prototype.slice.call(from))
        }
        Object.create
        'function' == typeof SuppressedError && SuppressedError
        var react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function assignRef(ref, value) {
          return (
            'function' == typeof ref
              ? ref(value)
              : ref && (ref.current = value),
            ref
          )
        }
        var useIsomorphicLayoutEffect =
            'undefined' != typeof window
              ? react.useLayoutEffect
              : react.useEffect,
          currentValues = new WeakMap()
        function useMergeRefs(refs, defaultValue) {
          var callbackRef = (function useCallbackRef(initialValue, callback) {
            var ref = (0, react.useState)(function () {
              return {
                value: initialValue,
                callback,
                facade: {
                  get current() {
                    return ref.value
                  },
                  set current(value) {
                    var last = ref.value
                    last !== value &&
                      ((ref.value = value), ref.callback(value, last))
                  },
                },
              }
            })[0]
            return ((ref.callback = callback), ref.facade)
          })(defaultValue || null, function (newValue) {
            return refs.forEach(function (ref) {
              return assignRef(ref, newValue)
            })
          })
          return (
            useIsomorphicLayoutEffect(
              function () {
                var oldValue = currentValues.get(callbackRef)
                if (oldValue) {
                  var prevRefs_1 = new Set(oldValue),
                    nextRefs_1 = new Set(refs),
                    current_1 = callbackRef.current
                  ;(prevRefs_1.forEach(function (ref) {
                    nextRefs_1.has(ref) || assignRef(ref, null)
                  }),
                    nextRefs_1.forEach(function (ref) {
                      prevRefs_1.has(ref) || assignRef(ref, current_1)
                    }))
                }
                currentValues.set(callbackRef, refs)
              },
              [refs]
            ),
            callbackRef
          )
        }
        function ItoI(a) {
          return a
        }
        function innerCreateMedium(defaults, middleware) {
          void 0 === middleware && (middleware = ItoI)
          var buffer = [],
            assigned = !1
          return {
            read: function () {
              if (assigned)
                throw new Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                )
              return buffer.length ? buffer[buffer.length - 1] : defaults
            },
            useMedium: function (data) {
              var item = middleware(data, assigned)
              return (
                buffer.push(item),
                function () {
                  buffer = buffer.filter(function (x) {
                    return x !== item
                  })
                }
              )
            },
            assignSyncMedium: function (cb) {
              for (assigned = !0; buffer.length; ) {
                var cbs = buffer
                ;((buffer = []), cbs.forEach(cb))
              }
              buffer = {
                push: function (x) {
                  return cb(x)
                },
                filter: function () {
                  return buffer
                },
              }
            },
            assignMedium: function (cb) {
              assigned = !0
              var pendingQueue = []
              if (buffer.length) {
                var cbs = buffer
                ;((buffer = []), cbs.forEach(cb), (pendingQueue = buffer))
              }
              var executeQueue = function () {
                  var cbs = pendingQueue
                  ;((pendingQueue = []), cbs.forEach(cb))
                },
                cycle = function () {
                  return Promise.resolve().then(executeQueue)
                }
              ;(cycle(),
                (buffer = {
                  push: function (x) {
                    ;(pendingQueue.push(x), cycle())
                  },
                  filter: function (filter) {
                    return (
                      (pendingQueue = pendingQueue.filter(filter)),
                      buffer
                    )
                  },
                }))
            },
          }
        }
        var effectCar = (function createSidecarMedium(options) {
            void 0 === options && (options = {})
            var medium = innerCreateMedium(null)
            return (
              (medium.options = __assign({ async: !0, ssr: !1 }, options)),
              medium
            )
          })(),
          nothing = function () {},
          RemoveScroll = react.forwardRef(function (props, parentRef) {
            var ref = react.useRef(null),
              _a = react.useState({
                onScrollCapture: nothing,
                onWheelCapture: nothing,
                onTouchMoveCapture: nothing,
              }),
              callbacks = _a[0],
              setCallbacks = _a[1],
              forwardProps = props.forwardProps,
              children = props.children,
              className = props.className,
              removeScrollBar = props.removeScrollBar,
              enabled = props.enabled,
              shards = props.shards,
              sideCar = props.sideCar,
              noRelative = props.noRelative,
              noIsolation = props.noIsolation,
              inert = props.inert,
              allowPinchZoom = props.allowPinchZoom,
              _b = props.as,
              Container = void 0 === _b ? 'div' : _b,
              gapMode = props.gapMode,
              rest = __rest(props, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noRelative',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
                'gapMode',
              ]),
              SideCar = sideCar,
              containerRef = useMergeRefs([ref, parentRef]),
              containerProps = __assign(__assign({}, rest), callbacks)
            return react.createElement(
              react.Fragment,
              null,
              enabled &&
                react.createElement(SideCar, {
                  sideCar: effectCar,
                  removeScrollBar,
                  shards,
                  noRelative,
                  noIsolation,
                  inert,
                  setCallbacks,
                  allowPinchZoom: !!allowPinchZoom,
                  lockRef: ref,
                  gapMode,
                }),
              forwardProps
                ? react.cloneElement(
                    react.Children.only(children),
                    __assign(__assign({}, containerProps), {
                      ref: containerRef,
                    })
                  )
                : react.createElement(
                    Container,
                    __assign({}, containerProps, {
                      className,
                      ref: containerRef,
                    }),
                    children
                  )
            )
          })
        ;((RemoveScroll.defaultProps = {
          enabled: !0,
          removeScrollBar: !0,
          inert: !1,
        }),
          (RemoveScroll.classNames = {
            fullWidth: 'width-before-scroll-bar',
            zeroRight: 'right-scroll-bar-position',
          }))
        var currentNonce,
          SideCar = function (_a) {
            var sideCar = _a.sideCar,
              rest = __rest(_a, ['sideCar'])
            if (!sideCar)
              throw new Error(
                'Sidecar: please provide `sideCar` property to import the right car'
              )
            var Target = sideCar.read()
            if (!Target) throw new Error('Sidecar medium not found')
            return react.createElement(Target, __assign({}, rest))
          }
        SideCar.isSideCarExport = !0
        function makeStyleTag() {
          if (!document) return null
          var tag = document.createElement('style')
          tag.type = 'text/css'
          var nonce = currentNonce || __webpack_require__.nc
          return (nonce && tag.setAttribute('nonce', nonce), tag)
        }
        var stylesheetSingleton = function () {
            var counter = 0,
              stylesheet = null
            return {
              add: function (style) {
                ;(0 == counter &&
                  (stylesheet = makeStyleTag()) &&
                  (!(function injectStyles(tag, css) {
                    tag.styleSheet
                      ? (tag.styleSheet.cssText = css)
                      : tag.appendChild(document.createTextNode(css))
                  })(stylesheet, style),
                  (function insertStyleTag(tag) {
                    ;(
                      document.head || document.getElementsByTagName('head')[0]
                    ).appendChild(tag)
                  })(stylesheet)),
                  counter++)
              },
              remove: function () {
                !--counter &&
                  stylesheet &&
                  (stylesheet.parentNode &&
                    stylesheet.parentNode.removeChild(stylesheet),
                  (stylesheet = null))
              },
            }
          },
          styleSingleton = function () {
            var sheet,
              useStyle =
                ((sheet = stylesheetSingleton()),
                function (styles, isDynamic) {
                  react.useEffect(
                    function () {
                      return (
                        sheet.add(styles),
                        function () {
                          sheet.remove()
                        }
                      )
                    },
                    [styles && isDynamic]
                  )
                })
            return function (_a) {
              var styles = _a.styles,
                dynamic = _a.dynamic
              return (useStyle(styles, dynamic), null)
            }
          },
          zeroGap = { left: 0, top: 0, right: 0, gap: 0 },
          parse = function (x) {
            return parseInt(x || '', 10) || 0
          },
          getGapWidth = function (gapMode) {
            if (
              (void 0 === gapMode && (gapMode = 'margin'),
              'undefined' == typeof window)
            )
              return zeroGap
            var offsets = (function (gapMode) {
                var cs = window.getComputedStyle(document.body),
                  left =
                    cs['padding' === gapMode ? 'paddingLeft' : 'marginLeft'],
                  top = cs['padding' === gapMode ? 'paddingTop' : 'marginTop'],
                  right =
                    cs['padding' === gapMode ? 'paddingRight' : 'marginRight']
                return [parse(left), parse(top), parse(right)]
              })(gapMode),
              documentWidth = document.documentElement.clientWidth,
              windowWidth = window.innerWidth
            return {
              left: offsets[0],
              top: offsets[1],
              right: offsets[2],
              gap: Math.max(
                0,
                windowWidth - documentWidth + offsets[2] - offsets[0]
              ),
            }
          },
          Style = styleSingleton(),
          lockAttribute = 'data-scroll-locked',
          getStyles = function (_a, allowRelative, gapMode, important) {
            var left = _a.left,
              top = _a.top,
              right = _a.right,
              gap = _a.gap
            return (
              void 0 === gapMode && (gapMode = 'margin'),
              '\n  .'
                .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                .concat(important, ';\n   padding-right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  body[')
                .concat(lockAttribute, '] {\n    overflow: hidden ')
                .concat(important, ';\n    overscroll-behavior: contain;\n    ')
                .concat(
                  [
                    allowRelative &&
                      'position: relative '.concat(important, ';'),
                    'margin' === gapMode &&
                      '\n    padding-left: '
                        .concat(left, 'px;\n    padding-top: ')
                        .concat(top, 'px;\n    padding-right: ')
                        .concat(
                          right,
                          'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                        )
                        .concat(gap, 'px ')
                        .concat(important, ';\n    '),
                    'padding' === gapMode &&
                      'padding-right: '
                        .concat(gap, 'px ')
                        .concat(important, ';'),
                  ]
                    .filter(Boolean)
                    .join(''),
                  '\n  }\n  \n  .'
                )
                .concat('right-scroll-bar-position', ' {\n    right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('width-before-scroll-bar', ' {\n    margin-right: ')
                .concat(gap, 'px ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('right-scroll-bar-position', ' .')
                .concat('right-scroll-bar-position', ' {\n    right: 0 ')
                .concat(important, ';\n  }\n  \n  .')
                .concat('width-before-scroll-bar', ' .')
                .concat('width-before-scroll-bar', ' {\n    margin-right: 0 ')
                .concat(important, ';\n  }\n  \n  body[')
                .concat(lockAttribute, '] {\n    ')
                .concat('--removed-body-scroll-bar-size', ': ')
                .concat(gap, 'px;\n  }\n')
            )
          },
          getCurrentUseCounter = function () {
            var counter = parseInt(
              document.body.getAttribute(lockAttribute) || '0',
              10
            )
            return isFinite(counter) ? counter : 0
          },
          RemoveScrollBar = function (_a) {
            var noRelative = _a.noRelative,
              noImportant = _a.noImportant,
              _b = _a.gapMode,
              gapMode = void 0 === _b ? 'margin' : _b
            react.useEffect(function () {
              return (
                document.body.setAttribute(
                  lockAttribute,
                  (getCurrentUseCounter() + 1).toString()
                ),
                function () {
                  var newCounter = getCurrentUseCounter() - 1
                  newCounter <= 0
                    ? document.body.removeAttribute(lockAttribute)
                    : document.body.setAttribute(
                        lockAttribute,
                        newCounter.toString()
                      )
                }
              )
            }, [])
            var gap = react.useMemo(
              function () {
                return getGapWidth(gapMode)
              },
              [gapMode]
            )
            return react.createElement(Style, {
              styles: getStyles(
                gap,
                !noRelative,
                gapMode,
                noImportant ? '' : '!important'
              ),
            })
          },
          passiveSupported = !1
        if ('undefined' != typeof window)
          try {
            var options = Object.defineProperty({}, 'passive', {
              get: function () {
                return ((passiveSupported = !0), !0)
              },
            })
            ;(window.addEventListener('test', options, options),
              window.removeEventListener('test', options, options))
          } catch (err) {
            passiveSupported = !1
          }
        var nonPassive = !!passiveSupported && { passive: !1 },
          elementCanBeScrolled = function (node, overflow) {
            if (!(node instanceof Element)) return !1
            var styles = window.getComputedStyle(node)
            return (
              'hidden' !== styles[overflow] &&
              !(
                styles.overflowY === styles.overflowX &&
                !(function (node) {
                  return 'TEXTAREA' === node.tagName
                })(node) &&
                'visible' === styles[overflow]
              )
            )
          },
          locationCouldBeScrolled = function (axis, node) {
            var ownerDocument = node.ownerDocument,
              current = node
            do {
              if (
                ('undefined' != typeof ShadowRoot &&
                  current instanceof ShadowRoot &&
                  (current = current.host),
                elementCouldBeScrolled(axis, current))
              ) {
                var _a = getScrollVariables(axis, current)
                if (_a[1] > _a[2]) return !0
              }
              current = current.parentNode
            } while (current && current !== ownerDocument.body)
            return !1
          },
          elementCouldBeScrolled = function (axis, node) {
            return 'v' === axis
              ? (function (node) {
                  return elementCanBeScrolled(node, 'overflowY')
                })(node)
              : (function (node) {
                  return elementCanBeScrolled(node, 'overflowX')
                })(node)
          },
          getScrollVariables = function (axis, node) {
            return 'v' === axis
              ? [(_a = node).scrollTop, _a.scrollHeight, _a.clientHeight]
              : (function (_a) {
                  return [_a.scrollLeft, _a.scrollWidth, _a.clientWidth]
                })(node)
            var _a
          },
          getTouchXY = function (event) {
            return 'changedTouches' in event
              ? [
                  event.changedTouches[0].clientX,
                  event.changedTouches[0].clientY,
                ]
              : [0, 0]
          },
          getDeltaXY = function (event) {
            return [event.deltaX, event.deltaY]
          },
          extractRef = function (ref) {
            return ref && 'current' in ref ? ref.current : ref
          },
          generateStyle = function (id) {
            return '\n  .block-interactivity-'
              .concat(id, ' {pointer-events: none;}\n  .allow-interactivity-')
              .concat(id, ' {pointer-events: all;}\n')
          },
          idCounter = 0,
          lockStack = []
        function getOutermostShadowParent(node) {
          for (var shadowParent = null; null !== node; )
            (node instanceof ShadowRoot &&
              ((shadowParent = node.host), (node = node.host)),
              (node = node.parentNode))
          return shadowParent
        }
        const sidecar = (function exportSidecar(medium, exported) {
          return (medium.useMedium(exported), SideCar)
        })(effectCar, function RemoveScrollSideCar(props) {
          var shouldPreventQueue = react.useRef([]),
            touchStartRef = react.useRef([0, 0]),
            activeAxis = react.useRef(),
            id = react.useState(idCounter++)[0],
            Style = react.useState(styleSingleton)[0],
            lastProps = react.useRef(props)
          ;(react.useEffect(
            function () {
              lastProps.current = props
            },
            [props]
          ),
            react.useEffect(
              function () {
                if (props.inert) {
                  document.body.classList.add('block-interactivity-'.concat(id))
                  var allow_1 = __spreadArray(
                    [props.lockRef.current],
                    (props.shards || []).map(extractRef),
                    !0
                  ).filter(Boolean)
                  return (
                    allow_1.forEach(function (el) {
                      return el.classList.add('allow-interactivity-'.concat(id))
                    }),
                    function () {
                      ;(document.body.classList.remove(
                        'block-interactivity-'.concat(id)
                      ),
                        allow_1.forEach(function (el) {
                          return el.classList.remove(
                            'allow-interactivity-'.concat(id)
                          )
                        }))
                    }
                  )
                }
              },
              [props.inert, props.lockRef.current, props.shards]
            ))
          var shouldCancelEvent = react.useCallback(function (event, parent) {
              if (
                ('touches' in event && 2 === event.touches.length) ||
                ('wheel' === event.type && event.ctrlKey)
              )
                return !lastProps.current.allowPinchZoom
              var currentAxis,
                touch = getTouchXY(event),
                touchStart = touchStartRef.current,
                deltaX =
                  'deltaX' in event ? event.deltaX : touchStart[0] - touch[0],
                deltaY =
                  'deltaY' in event ? event.deltaY : touchStart[1] - touch[1],
                target = event.target,
                moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v'
              if (
                'touches' in event &&
                'h' === moveDirection &&
                'range' === target.type
              )
                return !1
              var canBeScrolledInMainDirection = locationCouldBeScrolled(
                moveDirection,
                target
              )
              if (!canBeScrolledInMainDirection) return !0
              if (
                (canBeScrolledInMainDirection
                  ? (currentAxis = moveDirection)
                  : ((currentAxis = 'v' === moveDirection ? 'h' : 'v'),
                    (canBeScrolledInMainDirection = locationCouldBeScrolled(
                      moveDirection,
                      target
                    ))),
                !canBeScrolledInMainDirection)
              )
                return !1
              if (
                (!activeAxis.current &&
                  'changedTouches' in event &&
                  (deltaX || deltaY) &&
                  (activeAxis.current = currentAxis),
                !currentAxis)
              )
                return !0
              var cancelingAxis = activeAxis.current || currentAxis
              return (function (
                axis,
                endTarget,
                event,
                sourceDelta,
                noOverscroll
              ) {
                var directionFactor = (function (axis, direction) {
                    return 'h' === axis && 'rtl' === direction ? -1 : 1
                  })(axis, window.getComputedStyle(endTarget).direction),
                  delta = directionFactor * sourceDelta,
                  target = event.target,
                  targetInLock = endTarget.contains(target),
                  shouldCancelScroll = !1,
                  isDeltaPositive = delta > 0,
                  availableScroll = 0,
                  availableScrollTop = 0
                do {
                  if (!target) break
                  var _a = getScrollVariables(axis, target),
                    position = _a[0],
                    elementScroll = _a[1] - _a[2] - directionFactor * position
                  ;(position || elementScroll) &&
                    elementCouldBeScrolled(axis, target) &&
                    ((availableScroll += elementScroll),
                    (availableScrollTop += position))
                  var parent_1 = target.parentNode
                  target =
                    parent_1 &&
                    parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                      ? parent_1.host
                      : parent_1
                } while (
                  (!targetInLock && target !== document.body) ||
                  (targetInLock &&
                    (endTarget.contains(target) || endTarget === target))
                )
                return (
                  ((isDeltaPositive &&
                    ((noOverscroll && Math.abs(availableScroll) < 1) ||
                      (!noOverscroll && delta > availableScroll))) ||
                    (!isDeltaPositive &&
                      ((noOverscroll && Math.abs(availableScrollTop) < 1) ||
                        (!noOverscroll && -delta > availableScrollTop)))) &&
                    (shouldCancelScroll = !0),
                  shouldCancelScroll
                )
              })(
                cancelingAxis,
                parent,
                event,
                'h' === cancelingAxis ? deltaX : deltaY,
                !0
              )
            }, []),
            shouldPrevent = react.useCallback(function (_event) {
              var event = _event
              if (
                lockStack.length &&
                lockStack[lockStack.length - 1] === Style
              ) {
                var delta =
                    'deltaY' in event ? getDeltaXY(event) : getTouchXY(event),
                  sourceEvent = shouldPreventQueue.current.filter(function (e) {
                    return (
                      e.name === event.type &&
                      (e.target === event.target ||
                        event.target === e.shadowParent) &&
                      ((x = e.delta),
                      (y = delta),
                      x[0] === y[0] && x[1] === y[1])
                    )
                    var x, y
                  })[0]
                if (sourceEvent && sourceEvent.should)
                  event.cancelable && event.preventDefault()
                else if (!sourceEvent) {
                  var shardNodes = (lastProps.current.shards || [])
                    .map(extractRef)
                    .filter(Boolean)
                    .filter(function (node) {
                      return node.contains(event.target)
                    })
                  ;(shardNodes.length > 0
                    ? shouldCancelEvent(event, shardNodes[0])
                    : !lastProps.current.noIsolation) &&
                    event.cancelable &&
                    event.preventDefault()
                }
              }
            }, []),
            shouldCancel = react.useCallback(function (
              name,
              delta,
              target,
              should
            ) {
              var event = {
                name,
                delta,
                target,
                should,
                shadowParent: getOutermostShadowParent(target),
              }
              ;(shouldPreventQueue.current.push(event),
                setTimeout(function () {
                  shouldPreventQueue.current =
                    shouldPreventQueue.current.filter(function (e) {
                      return e !== event
                    })
                }, 1))
            }, []),
            scrollTouchStart = react.useCallback(function (event) {
              ;((touchStartRef.current = getTouchXY(event)),
                (activeAxis.current = void 0))
            }, []),
            scrollWheel = react.useCallback(function (event) {
              shouldCancel(
                event.type,
                getDeltaXY(event),
                event.target,
                shouldCancelEvent(event, props.lockRef.current)
              )
            }, []),
            scrollTouchMove = react.useCallback(function (event) {
              shouldCancel(
                event.type,
                getTouchXY(event),
                event.target,
                shouldCancelEvent(event, props.lockRef.current)
              )
            }, [])
          react.useEffect(function () {
            return (
              lockStack.push(Style),
              props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove,
              }),
              document.addEventListener('wheel', shouldPrevent, nonPassive),
              document.addEventListener('touchmove', shouldPrevent, nonPassive),
              document.addEventListener(
                'touchstart',
                scrollTouchStart,
                nonPassive
              ),
              function () {
                ;((lockStack = lockStack.filter(function (inst) {
                  return inst !== Style
                })),
                  document.removeEventListener(
                    'wheel',
                    shouldPrevent,
                    nonPassive
                  ),
                  document.removeEventListener(
                    'touchmove',
                    shouldPrevent,
                    nonPassive
                  ),
                  document.removeEventListener(
                    'touchstart',
                    scrollTouchStart,
                    nonPassive
                  ))
              }
            )
          }, [])
          var removeScrollBar = props.removeScrollBar,
            inert = props.inert
          return react.createElement(
            react.Fragment,
            null,
            inert
              ? react.createElement(Style, { styles: generateStyle(id) })
              : null,
            removeScrollBar
              ? react.createElement(RemoveScrollBar, {
                  noRelative: props.noRelative,
                  gapMode: props.gapMode,
                })
              : null
          )
        })
        var ReactRemoveScroll = react.forwardRef(function (props, ref) {
          return react.createElement(
            RemoveScroll,
            __assign({}, props, { ref, sideCar: sidecar })
          )
        })
        ReactRemoveScroll.classNames = RemoveScroll.classNames
        const Combination = ReactRemoveScroll
      },
  },
])
