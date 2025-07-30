/*! For license information please see 444.0b0ec71c.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [444],
  {
    '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { N: () => AnimatePresence })
        var jsx_runtime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          LayoutGroupContext = __webpack_require__(
            '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs'
          ),
          use_constant = __webpack_require__(
            '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs'
          ),
          use_isomorphic_effect = __webpack_require__(
            '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs'
          ),
          PresenceContext = __webpack_require__(
            '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs'
          ),
          is_html_element = __webpack_require__(
            '../../node_modules/.pnpm/motion-dom@12.23.9/node_modules/motion-dom/dist/es/utils/is-html-element.mjs'
          ),
          MotionConfigContext = __webpack_require__(
            '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs'
          )
        class PopChildMeasure extends react.Component {
          getSnapshotBeforeUpdate(prevProps) {
            const element = this.props.childRef.current
            if (element && prevProps.isPresent && !this.props.isPresent) {
              const parent = element.offsetParent,
                parentWidth =
                  ((0, is_html_element.s)(parent) && parent.offsetWidth) || 0,
                size = this.props.sizeRef.current
              ;((size.height = element.offsetHeight || 0),
                (size.width = element.offsetWidth || 0),
                (size.top = element.offsetTop),
                (size.left = element.offsetLeft),
                (size.right = parentWidth - size.width - size.left))
            }
            return null
          }
          componentDidUpdate() {}
          render() {
            return this.props.children
          }
        }
        function PopChild({ children, isPresent, anchorX, root }) {
          const id = (0, react.useId)(),
            ref = (0, react.useRef)(null),
            size = (0, react.useRef)({
              width: 0,
              height: 0,
              top: 0,
              left: 0,
              right: 0,
            }),
            { nonce } = (0, react.useContext)(MotionConfigContext.Q)
          return (
            (0, react.useInsertionEffect)(() => {
              const { width, height, top, left, right } = size.current
              if (isPresent || !ref.current || !width || !height) return
              const x = 'left' === anchorX ? `left: ${left}` : `right: ${right}`
              ref.current.dataset.motionPopId = id
              const style = document.createElement('style')
              nonce && (style.nonce = nonce)
              const parent = root ?? document.head
              return (
                parent.appendChild(style),
                style.sheet &&
                  style.sheet.insertRule(
                    `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            ${x}px !important;\n            top: ${top}px !important;\n          }\n        `
                  ),
                () => {
                  parent.contains(style) && parent.removeChild(style)
                }
              )
            }, [isPresent]),
            (0, jsx_runtime.jsx)(PopChildMeasure, {
              isPresent,
              childRef: ref,
              sizeRef: size,
              children: react.cloneElement(children, { ref }),
            })
          )
        }
        const PresenceChild = ({
          children,
          initial,
          isPresent,
          onExitComplete,
          custom,
          presenceAffectsLayout,
          mode,
          anchorX,
          root,
        }) => {
          const presenceChildren = (0, use_constant.M)(newChildrenMap),
            id = (0, react.useId)()
          let isReusedContext = !0,
            context = (0, react.useMemo)(
              () => (
                (isReusedContext = !1),
                {
                  id,
                  initial,
                  isPresent,
                  custom,
                  onExitComplete: (childId) => {
                    presenceChildren.set(childId, !0)
                    for (const isComplete of presenceChildren.values())
                      if (!isComplete) return
                    onExitComplete && onExitComplete()
                  },
                  register: (childId) => (
                    presenceChildren.set(childId, !1),
                    () => presenceChildren.delete(childId)
                  ),
                }
              ),
              [isPresent, presenceChildren, onExitComplete]
            )
          return (
            presenceAffectsLayout &&
              isReusedContext &&
              (context = { ...context }),
            (0, react.useMemo)(() => {
              presenceChildren.forEach((_, key) =>
                presenceChildren.set(key, !1)
              )
            }, [isPresent]),
            react.useEffect(() => {
              !isPresent &&
                !presenceChildren.size &&
                onExitComplete &&
                onExitComplete()
            }, [isPresent]),
            'popLayout' === mode &&
              (children = (0, jsx_runtime.jsx)(PopChild, {
                isPresent,
                anchorX,
                root,
                children,
              })),
            (0, jsx_runtime.jsx)(PresenceContext.t.Provider, {
              value: context,
              children,
            })
          )
        }
        function newChildrenMap() {
          return new Map()
        }
        var use_presence = __webpack_require__(
          '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs'
        )
        const getChildKey = (child) => child.key || ''
        function onlyElements(children) {
          const filtered = []
          return (
            react.Children.forEach(children, (child) => {
              ;(0, react.isValidElement)(child) && filtered.push(child)
            }),
            filtered
          )
        }
        const AnimatePresence = ({
          children,
          custom,
          initial = !0,
          onExitComplete,
          presenceAffectsLayout = !0,
          mode = 'sync',
          propagate = !1,
          anchorX = 'left',
          root,
        }) => {
          const [isParentPresent, safeToRemove] = (0, use_presence.xQ)(
              propagate
            ),
            presentChildren = (0, react.useMemo)(
              () => onlyElements(children),
              [children]
            ),
            presentKeys =
              propagate && !isParentPresent
                ? []
                : presentChildren.map(getChildKey),
            isInitialRender = (0, react.useRef)(!0),
            pendingPresentChildren = (0, react.useRef)(presentChildren),
            exitComplete = (0, use_constant.M)(() => new Map()),
            [diffedChildren, setDiffedChildren] = (0, react.useState)(
              presentChildren
            ),
            [renderedChildren, setRenderedChildren] = (0, react.useState)(
              presentChildren
            )
          ;(0, use_isomorphic_effect.E)(() => {
            ;((isInitialRender.current = !1),
              (pendingPresentChildren.current = presentChildren))
            for (let i = 0; i < renderedChildren.length; i++) {
              const key = getChildKey(renderedChildren[i])
              presentKeys.includes(key)
                ? exitComplete.delete(key)
                : !0 !== exitComplete.get(key) && exitComplete.set(key, !1)
            }
          }, [renderedChildren, presentKeys.length, presentKeys.join('-')])
          const exitingChildren = []
          if (presentChildren !== diffedChildren) {
            let nextChildren = [...presentChildren]
            for (let i = 0; i < renderedChildren.length; i++) {
              const child = renderedChildren[i],
                key = getChildKey(child)
              presentKeys.includes(key) ||
                (nextChildren.splice(i, 0, child), exitingChildren.push(child))
            }
            return (
              'wait' === mode &&
                exitingChildren.length &&
                (nextChildren = exitingChildren),
              setRenderedChildren(onlyElements(nextChildren)),
              setDiffedChildren(presentChildren),
              null
            )
          }
          const { forceRender } = (0, react.useContext)(LayoutGroupContext.L)
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: renderedChildren.map((child) => {
              const key = getChildKey(child),
                isPresent =
                  !(propagate && !isParentPresent) &&
                  (presentChildren === renderedChildren ||
                    presentKeys.includes(key))
              return (0, jsx_runtime.jsx)(
                PresenceChild,
                {
                  isPresent,
                  initial: !(isInitialRender.current && !initial) && void 0,
                  custom,
                  presenceAffectsLayout,
                  mode,
                  root,
                  onExitComplete: isPresent
                    ? void 0
                    : () => {
                        if (!exitComplete.has(key)) return
                        exitComplete.set(key, !0)
                        let isEveryExitComplete = !0
                        ;(exitComplete.forEach((isExitComplete) => {
                          isExitComplete || (isEveryExitComplete = !1)
                        }),
                          isEveryExitComplete &&
                            (forceRender?.(),
                            setRenderedChildren(pendingPresentChildren.current),
                            propagate && safeToRemove?.(),
                            onExitComplete && onExitComplete()))
                      },
                  anchorX,
                  children: child,
                },
                key
              )
            }),
          })
        }
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bell.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Bell })
        const Bell = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Bell', [
          [
            'path',
            { d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', key: '1qo2s2' },
          ],
          ['path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Database })
        const Database = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Database', [
          ['ellipse', { cx: '12', cy: '5', rx: '9', ry: '3', key: 'msslwz' }],
          ['path', { d: 'M3 5V19A9 3 0 0 0 21 19V5', key: '1wlel7' }],
          ['path', { d: 'M3 12A9 3 0 0 0 21 12', key: 'mv7ke4' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/palette.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Palette })
        const Palette = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Palette', [
          [
            'circle',
            {
              cx: '13.5',
              cy: '6.5',
              r: '.5',
              fill: 'currentColor',
              key: '1okk4w',
            },
          ],
          [
            'circle',
            {
              cx: '17.5',
              cy: '10.5',
              r: '.5',
              fill: 'currentColor',
              key: 'f64h9f',
            },
          ],
          [
            'circle',
            {
              cx: '8.5',
              cy: '7.5',
              r: '.5',
              fill: 'currentColor',
              key: 'fotxhn',
            },
          ],
          [
            'circle',
            {
              cx: '6.5',
              cy: '12.5',
              r: '.5',
              fill: 'currentColor',
              key: 'qy21gx',
            },
          ],
          [
            'path',
            {
              d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
              key: '12rzf8',
            },
          ],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shield.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Shield })
        const Shield = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Shield', [
          [
            'path',
            {
              d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
              key: 'oel41y',
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
  },
])
