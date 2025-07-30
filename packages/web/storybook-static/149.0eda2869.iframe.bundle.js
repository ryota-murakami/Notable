/*! For license information please see 149.0eda2869.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [149],
  {
    '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          s: () => useComposedRefs,
          t: () => composeRefs,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function setRef(ref, value) {
          if ('function' == typeof ref) return ref(value)
          null != ref && (ref.current = value)
        }
        function composeRefs(...refs) {
          return (node) => {
            let hasCleanup = !1
            const cleanups = refs.map((ref) => {
              const cleanup = setRef(ref, node)
              return (
                hasCleanup || 'function' != typeof cleanup || (hasCleanup = !0),
                cleanup
              )
            })
            if (hasCleanup)
              return () => {
                for (let i = 0; i < cleanups.length; i++) {
                  const cleanup = cleanups[i]
                  'function' == typeof cleanup
                    ? cleanup()
                    : setRef(refs[i], null)
                }
              }
          }
        }
        function useComposedRefs(...refs) {
          return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
            composeRefs(...refs),
            refs
          )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          DX: () => Slot,
          Dc: () => createSlottable,
          TL: () => createSlot,
          bL: () => Slot,
          xV: () => Slottable,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function createSlot(ownerName) {
          const SlotClone = createSlotClone(ownerName),
            Slot2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { children, ...slotProps } = props,
                  childrenArray =
                    react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(
                      children
                    ),
                  slottable = childrenArray.find(isSlottable)
                if (slottable) {
                  const newElement = slottable.props.children,
                    newChildren = childrenArray.map((child) =>
                      child === slottable
                        ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                            newElement
                          ) > 1
                          ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(
                              null
                            )
                          : react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                                newElement
                              )
                            ? newElement.props.children
                            : null
                        : child
                    )
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    SlotClone,
                    {
                      ...slotProps,
                      ref: forwardedRef,
                      children:
                        react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                          newElement
                        )
                          ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                              newElement,
                              void 0,
                              newChildren
                            )
                          : null,
                    }
                  )
                }
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  SlotClone,
                  { ...slotProps, ref: forwardedRef, children }
                )
              }
            )
          return ((Slot2.displayName = `${ownerName}.Slot`), Slot2)
        }
        var Slot = createSlot('Slot')
        function createSlotClone(ownerName) {
          const SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { children, ...slotProps } = props
              if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
                const childrenRef = (function getElementRef(element) {
                    let getter = Object.getOwnPropertyDescriptor(
                        element.props,
                        'ref'
                      )?.get,
                      mayWarn =
                        getter &&
                        'isReactWarning' in getter &&
                        getter.isReactWarning
                    if (mayWarn) return element.ref
                    if (
                      ((getter = Object.getOwnPropertyDescriptor(
                        element,
                        'ref'
                      )?.get),
                      (mayWarn =
                        getter &&
                        'isReactWarning' in getter &&
                        getter.isReactWarning),
                      mayWarn)
                    )
                      return element.props.ref
                    return element.props.ref || element.ref
                  })(children),
                  props2 = (function mergeProps(slotProps, childProps) {
                    const overrideProps = { ...childProps }
                    for (const propName in childProps) {
                      const slotPropValue = slotProps[propName],
                        childPropValue = childProps[propName]
                      ;/^on[A-Z]/.test(propName)
                        ? slotPropValue && childPropValue
                          ? (overrideProps[propName] = (...args) => {
                              const result = childPropValue(...args)
                              return (slotPropValue(...args), result)
                            })
                          : slotPropValue &&
                            (overrideProps[propName] = slotPropValue)
                        : 'style' === propName
                          ? (overrideProps[propName] = {
                              ...slotPropValue,
                              ...childPropValue,
                            })
                          : 'className' === propName &&
                            (overrideProps[propName] = [
                              slotPropValue,
                              childPropValue,
                            ]
                              .filter(Boolean)
                              .join(' '))
                    }
                    return { ...slotProps, ...overrideProps }
                  })(slotProps, children.props)
                return (
                  children.type !==
                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment &&
                    (props2.ref = forwardedRef
                      ? (0,
                        _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(
                          forwardedRef,
                          childrenRef
                        )
                      : childrenRef),
                  react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                    children,
                    props2
                  )
                )
              }
              return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                children
              ) > 1
                ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
                : null
            }
          )
          return ((SlotClone.displayName = `${ownerName}.SlotClone`), SlotClone)
        }
        var SLOTTABLE_IDENTIFIER = Symbol('radix.slottable')
        function createSlottable(ownerName) {
          const Slottable2 = ({ children }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
              { children }
            )
          return (
            (Slottable2.displayName = `${ownerName}.Slottable`),
            (Slottable2.__radixId = SLOTTABLE_IDENTIFIER),
            Slottable2
          )
        }
        var Slottable = createSlottable('Slottable')
        function isSlottable(child) {
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) &&
            'function' == typeof child.type &&
            '__radixId' in child.type &&
            child.type.__radixId === SLOTTABLE_IDENTIFIER
          )
        }
      },
    '../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { F: () => cva })
        var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs'
        )
        const falsyToString = (value) =>
            'boolean' == typeof value ? `${value}` : 0 === value ? '0' : value,
          cx = clsx__WEBPACK_IMPORTED_MODULE_0__.$,
          cva = (base, config) => (props) => {
            var _config_compoundVariants
            if (null == (null == config ? void 0 : config.variants))
              return cx(
                base,
                null == props ? void 0 : props.class,
                null == props ? void 0 : props.className
              )
            const { variants, defaultVariants } = config,
              getVariantClassNames = Object.keys(variants).map((variant) => {
                const variantProp = null == props ? void 0 : props[variant],
                  defaultVariantProp =
                    null == defaultVariants ? void 0 : defaultVariants[variant]
                if (null === variantProp) return null
                const variantKey =
                  falsyToString(variantProp) ||
                  falsyToString(defaultVariantProp)
                return variants[variant][variantKey]
              }),
              propsWithoutUndefined =
                props &&
                Object.entries(props).reduce((acc, param) => {
                  let [key, value] = param
                  return (void 0 === value || (acc[key] = value), acc)
                }, {}),
              getCompoundVariantClassNames =
                null == config ||
                null === (_config_compoundVariants = config.compoundVariants) ||
                void 0 === _config_compoundVariants
                  ? void 0
                  : _config_compoundVariants.reduce((acc, param) => {
                      let {
                        class: cvClass,
                        className: cvClassName,
                        ...compoundVariantOptions
                      } = param
                      return Object.entries(compoundVariantOptions).every(
                        (param) => {
                          let [key, value] = param
                          return Array.isArray(value)
                            ? value.includes(
                                {
                                  ...defaultVariants,
                                  ...propsWithoutUndefined,
                                }[key]
                              )
                            : { ...defaultVariants, ...propsWithoutUndefined }[
                                key
                              ] === value
                        }
                      )
                        ? [...acc, cvClass, cvClassName]
                        : acc
                    }, [])
            return cx(
              base,
              getVariantClassNames,
              getCompoundVariantClassNames,
              null == props ? void 0 : props.class,
              null == props ? void 0 : props.className
            )
          }
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ArrowUpRight })
        const ArrowUpRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ArrowUpRight', [
          ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
          ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Check })
        const Check = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
        const ChevronDown = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronRight })
        const ChevronRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => CircleAlert })
        const CircleAlert = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleAlert', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
          [
            'line',
            { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-check-big.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => CircleCheckBig })
        const CircleCheckBig = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleCheckBig', [
          ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
          ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle-x.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => CircleX })
        const CircleX = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CircleX', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
          ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Code })
        const Code = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Code', [
          ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
          ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => FileText })
        const FileText = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('FileText', [
          [
            'path',
            {
              d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
              key: '1rqfz7',
            },
          ],
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
          ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
          ['path', { d: 'M16 13H8', key: 't4e002' }],
          ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-1.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Heading1 })
        const Heading1 = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Heading1', [
          ['path', { d: 'M4 12h8', key: '17cfdx' }],
          ['path', { d: 'M4 18V6', key: '1rz3zl' }],
          ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
          ['path', { d: 'm17 12 3-2v8', key: '1hhhft' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-2.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Heading2 })
        const Heading2 = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Heading2', [
          ['path', { d: 'M4 12h8', key: '17cfdx' }],
          ['path', { d: 'M4 18V6', key: '1rz3zl' }],
          ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
          [
            'path',
            { d: 'M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1', key: '9jr5yi' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heading-3.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Heading3 })
        const Heading3 = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Heading3', [
          ['path', { d: 'M4 12h8', key: '17cfdx' }],
          ['path', { d: 'M4 18V6', key: '1rz3zl' }],
          ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
          [
            'path',
            {
              d: 'M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2',
              key: '68ncm8',
            },
          ],
          [
            'path',
            { d: 'M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2', key: '1ejuhz' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Image })
        const Image = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Image', [
          [
            'rect',
            {
              width: '18',
              height: '18',
              x: '3',
              y: '3',
              rx: '2',
              ry: '2',
              key: '1m3agn',
            },
          ],
          ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
          [
            'path',
            { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/info.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lightbulb.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Lightbulb })
        const Lightbulb = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Lightbulb', [
          [
            'path',
            {
              d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
              key: '1gvzjb',
            },
          ],
          ['path', { d: 'M9 18h6', key: 'x1upvd' }],
          ['path', { d: 'M10 22h4', key: 'ceow96' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Link })
        const Link = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Link', [
          [
            'path',
            {
              d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
              key: '1cjeqo',
            },
          ],
          [
            'path',
            {
              d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
              key: '19qd67',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ListOrdered })
        const ListOrdered = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ListOrdered', [
          ['path', { d: 'M10 12h11', key: '6m4ad9' }],
          ['path', { d: 'M10 18h11', key: '11hvi2' }],
          ['path', { d: 'M10 6h11', key: 'c7qv1k' }],
          ['path', { d: 'M4 10h2', key: '16xx2s' }],
          ['path', { d: 'M4 6h1v4', key: 'cnovpq' }],
          ['path', { d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1', key: 'm9a95d' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => List })
        const List = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('List', [
          ['path', { d: 'M3 12h.01', key: 'nlz23k' }],
          ['path', { d: 'M3 18h.01', key: '1tta3j' }],
          ['path', { d: 'M3 6h.01', key: '1rqtza' }],
          ['path', { d: 'M8 12h13', key: '1za7za' }],
          ['path', { d: 'M8 18h13', key: '1lx6n3' }],
          ['path', { d: 'M8 6h13', key: 'ik3vkj' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/minus.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Minus })
        const Minus = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Minus', [['path', { d: 'M5 12h14', key: '1ays0h' }]])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pen-line.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => PenLine })
        const PenLine = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('PenLine', [
          ['path', { d: 'M12 20h9', key: 't2du7b' }],
          [
            'path',
            {
              d: 'M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z',
              key: '1ykcvy',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Quote })
        const Quote = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Quote', [
          [
            'path',
            {
              d: 'M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: 'rib7q0',
            },
          ],
          [
            'path',
            {
              d: 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: '1ymkrd',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => SquareCheckBig })
        const SquareCheckBig = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('SquareCheckBig', [
          [
            'path',
            {
              d: 'M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5',
              key: '1uzm8b',
            },
          ],
          ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Table })
        const Table = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Table', [
          ['path', { d: 'M12 3v18', key: '108xh3' }],
          [
            'rect',
            {
              width: '18',
              height: '18',
              x: '3',
              y: '3',
              rx: '2',
              key: 'afitv7',
            },
          ],
          ['path', { d: 'M3 9h18', key: '1pudct' }],
          ['path', { d: 'M3 15h18', key: '5xshup' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/triangle-alert.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => TriangleAlert })
        const TriangleAlert = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('TriangleAlert', [
          [
            'path',
            {
              d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
              key: 'wmoenq',
            },
          ],
          ['path', { d: 'M12 9v4', key: 'juzpu7' }],
          ['path', { d: 'M12 17h.01', key: 'p32p05' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/type.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Type })
        const Type = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Type', [
          ['polyline', { points: '4 7 4 4 20 4 20 7', key: '1nosan' }],
          ['line', { x1: '9', x2: '15', y1: '20', y2: '20', key: 'swin9y' }],
          ['line', { x1: '12', x2: '12', y1: '4', y2: '20', key: '1tx1rr' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Zap })
        const Zap = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Zap', [
          [
            'path',
            {
              d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
              key: '1xq2db',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/get-domain-locale.js':
      (module, exports, __webpack_require__) => {
        'use strict'
        var process = __webpack_require__(
          '../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js'
        )
        ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'getDomainLocale', {
            enumerable: !0,
            get: function () {
              return getDomainLocale
            },
          }))
        const _normalizetrailingslash = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/normalize-trailing-slash.js'
          ),
          basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
        function getDomainLocale(path, locale, locales, domainLocales) {
          if (process.env.__NEXT_I18N_SUPPORT) {
            const normalizeLocalePath = __webpack_require__(
                '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/normalize-locale-path.js'
              ).normalizeLocalePath,
              detectDomainLocale = __webpack_require__(
                '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/detect-domain-locale.js'
              ).detectDomainLocale,
              target =
                locale || normalizeLocalePath(path, locales).detectedLocale,
              domain = detectDomainLocale(domainLocales, void 0, target)
            if (domain) {
              const proto = 'http' + (domain.http ? '' : 's') + '://',
                finalLocale =
                  target === domain.defaultLocale ? '' : '/' + target
              return (
                '' +
                proto +
                domain.domain +
                (0, _normalizetrailingslash.normalizePathTrailingSlash)(
                  '' + basePath + finalLocale + path
                )
              )
            }
            return !1
          }
          return !1
        }
        ;('function' == typeof exports.default ||
          ('object' == typeof exports.default && null !== exports.default)) &&
          void 0 === exports.default.__esModule &&
          (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
          Object.assign(exports.default, exports),
          (module.exports = exports.default))
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/link.js':
      (module, exports, __webpack_require__) => {
        var process = __webpack_require__(
          '../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js'
        )
        ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'default', {
            enumerable: !0,
            get: function () {
              return _default
            },
          }))
        const _interop_require_default = __webpack_require__(
            '../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs'
          ),
          _jsxruntime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          _react = _interop_require_default._(
            __webpack_require__(
              '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
            )
          ),
          _resolvehref = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/resolve-href.js'
          ),
          _islocalurl = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/shared/lib/router/utils/is-local-url.js'
          ),
          _formaturl = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/shared/lib/router/utils/format-url.js'
          ),
          _utils = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/shared/lib/utils.js'
          ),
          _addlocale = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/add-locale.js'
          ),
          _routercontextsharedruntime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/shared/lib/router-context.shared-runtime.js'
          ),
          _useintersection = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/use-intersection.js'
          ),
          _getdomainlocale = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/get-domain-locale.js'
          ),
          _addbasepath = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/add-base-path.js'
          ),
          _usemergedref = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/use-merged-ref.js'
          ),
          prefetched = new Set()
        function prefetch(router, href, as, options) {
          if (
            'undefined' != typeof window &&
            (0, _islocalurl.isLocalURL)(href)
          ) {
            if (!options.bypassPrefetchedCheck) {
              const prefetchedKey =
                href +
                '%' +
                as +
                '%' +
                (void 0 !== options.locale
                  ? options.locale
                  : 'locale' in router
                    ? router.locale
                    : void 0)
              if (prefetched.has(prefetchedKey)) return
              prefetched.add(prefetchedKey)
            }
            router.prefetch(href, as, options).catch((err) => {
              0
            })
          }
        }
        function formatStringOrUrl(urlObjOrString) {
          return 'string' == typeof urlObjOrString
            ? urlObjOrString
            : (0, _formaturl.formatUrl)(urlObjOrString)
        }
        const _default = _react.default.forwardRef(
          function LinkComponent(props, forwardedRef) {
            let children
            const {
              href: hrefProp,
              as: asProp,
              children: childrenProp,
              prefetch: prefetchProp = null,
              passHref,
              replace,
              shallow,
              scroll,
              locale,
              onClick,
              onMouseEnter: onMouseEnterProp,
              onTouchStart: onTouchStartProp,
              legacyBehavior = !1,
              ...restProps
            } = props
            ;((children = childrenProp),
              !legacyBehavior ||
                ('string' != typeof children && 'number' != typeof children) ||
                (children = (0, _jsxruntime.jsx)('a', { children })))
            const router = _react.default.useContext(
                _routercontextsharedruntime.RouterContext
              ),
              prefetchEnabled = !1 !== prefetchProp
            const { href, as } = _react.default.useMemo(() => {
                if (!router) {
                  const resolvedHref = formatStringOrUrl(hrefProp)
                  return {
                    href: resolvedHref,
                    as: asProp ? formatStringOrUrl(asProp) : resolvedHref,
                  }
                }
                const [resolvedHref, resolvedAs] = (0,
                _resolvehref.resolveHref)(router, hrefProp, !0)
                return {
                  href: resolvedHref,
                  as: asProp
                    ? (0, _resolvehref.resolveHref)(router, asProp)
                    : resolvedAs || resolvedHref,
                }
              }, [router, hrefProp, asProp]),
              previousHref = _react.default.useRef(href),
              previousAs = _react.default.useRef(as)
            let child
            legacyBehavior && (child = _react.default.Children.only(children))
            const childRef = legacyBehavior
                ? child && 'object' == typeof child && child.ref
                : forwardedRef,
              [setIntersectionRef, isVisible, resetVisible] = (0,
              _useintersection.useIntersection)({ rootMargin: '200px' }),
              setIntersectionWithResetRef = _react.default.useCallback(
                (el) => {
                  ;((previousAs.current === as &&
                    previousHref.current === href) ||
                    (resetVisible(),
                    (previousAs.current = as),
                    (previousHref.current = href)),
                    setIntersectionRef(el))
                },
                [as, href, resetVisible, setIntersectionRef]
              ),
              setRef = (0, _usemergedref.useMergedRef)(
                setIntersectionWithResetRef,
                childRef
              )
            _react.default.useEffect(() => {
              router &&
                isVisible &&
                prefetchEnabled &&
                prefetch(router, href, as, { locale })
            }, [
              as,
              href,
              isVisible,
              locale,
              prefetchEnabled,
              null == router ? void 0 : router.locale,
              router,
            ])
            const childProps = {
              ref: setRef,
              onClick(e) {
                ;(legacyBehavior || 'function' != typeof onClick || onClick(e),
                  legacyBehavior &&
                    child.props &&
                    'function' == typeof child.props.onClick &&
                    child.props.onClick(e),
                  router &&
                    (e.defaultPrevented ||
                      (function linkClicked(
                        e,
                        router,
                        href,
                        as,
                        replace,
                        shallow,
                        scroll,
                        locale
                      ) {
                        const { nodeName } = e.currentTarget
                        if (
                          'A' === nodeName.toUpperCase() &&
                          ((function isModifiedEvent(event) {
                            const target =
                              event.currentTarget.getAttribute('target')
                            return (
                              (target && '_self' !== target) ||
                              event.metaKey ||
                              event.ctrlKey ||
                              event.shiftKey ||
                              event.altKey ||
                              (event.nativeEvent &&
                                2 === event.nativeEvent.which)
                            )
                          })(e) ||
                            !(0, _islocalurl.isLocalURL)(href))
                        )
                          return
                        ;(e.preventDefault(),
                          (() => {
                            const routerScroll = null == scroll || scroll
                            'beforePopState' in router
                              ? router[replace ? 'replace' : 'push'](href, as, {
                                  shallow,
                                  locale,
                                  scroll: routerScroll,
                                })
                              : router[replace ? 'replace' : 'push'](
                                  as || href,
                                  { scroll: routerScroll }
                                )
                          })())
                      })(
                        e,
                        router,
                        href,
                        as,
                        replace,
                        shallow,
                        scroll,
                        locale
                      )))
              },
              onMouseEnter(e) {
                ;(legacyBehavior ||
                  'function' != typeof onMouseEnterProp ||
                  onMouseEnterProp(e),
                  legacyBehavior &&
                    child.props &&
                    'function' == typeof child.props.onMouseEnter &&
                    child.props.onMouseEnter(e),
                  router &&
                    prefetch(router, href, as, {
                      locale,
                      priority: !0,
                      bypassPrefetchedCheck: !0,
                    }))
              },
              onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START
                ? void 0
                : function onTouchStart(e) {
                    ;(legacyBehavior ||
                      'function' != typeof onTouchStartProp ||
                      onTouchStartProp(e),
                      legacyBehavior &&
                        child.props &&
                        'function' == typeof child.props.onTouchStart &&
                        child.props.onTouchStart(e),
                      router &&
                        prefetch(router, href, as, {
                          locale,
                          priority: !0,
                          bypassPrefetchedCheck: !0,
                        }))
                  },
            }
            if ((0, _utils.isAbsoluteUrl)(as)) childProps.href = as
            else if (
              !legacyBehavior ||
              passHref ||
              ('a' === child.type && !('href' in child.props))
            ) {
              const curLocale =
                  void 0 !== locale
                    ? locale
                    : null == router
                      ? void 0
                      : router.locale,
                localeDomain =
                  (null == router ? void 0 : router.isLocaleDomain) &&
                  (0, _getdomainlocale.getDomainLocale)(
                    as,
                    curLocale,
                    null == router ? void 0 : router.locales,
                    null == router ? void 0 : router.domainLocales
                  )
              childProps.href =
                localeDomain ||
                (0, _addbasepath.addBasePath)(
                  (0, _addlocale.addLocale)(
                    as,
                    curLocale,
                    null == router ? void 0 : router.defaultLocale
                  )
                )
            }
            return legacyBehavior
              ? _react.default.cloneElement(child, childProps)
              : (0, _jsxruntime.jsx)('a', {
                  ...restProps,
                  ...childProps,
                  children,
                })
          }
        )
        ;('function' == typeof exports.default ||
          ('object' == typeof exports.default && null !== exports.default)) &&
          void 0 === exports.default.__esModule &&
          (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
          Object.assign(exports.default, exports),
          (module.exports = exports.default))
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/normalize-locale-path.js':
      (module, exports, __webpack_require__) => {
        'use strict'
        var process = __webpack_require__(
          '../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js'
        )
        ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'normalizeLocalePath', {
            enumerable: !0,
            get: function () {
              return normalizeLocalePath
            },
          }))
        const normalizeLocalePath = (pathname, locales) =>
          process.env.__NEXT_I18N_SUPPORT
            ? __webpack_require__(
                '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js'
              ).normalizeLocalePath(pathname, locales)
            : { pathname, detectedLocale: void 0 }
        ;('function' == typeof exports.default ||
          ('object' == typeof exports.default && null !== exports.default)) &&
          void 0 === exports.default.__esModule &&
          (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
          Object.assign(exports.default, exports),
          (module.exports = exports.default))
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/use-intersection.js':
      (module, exports, __webpack_require__) => {
        'use strict'
        ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'useIntersection', {
            enumerable: !0,
            get: function () {
              return useIntersection
            },
          }))
        const _react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _requestidlecallback = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/request-idle-callback.js'
          ),
          hasIntersectionObserver = 'function' == typeof IntersectionObserver,
          observers = new Map(),
          idList = []
        function observe(element, callback, options) {
          const { id, observer, elements } = (function createObserver(options) {
            const id = {
                root: options.root || null,
                margin: options.rootMargin || '',
              },
              existing = idList.find(
                (obj) => obj.root === id.root && obj.margin === id.margin
              )
            let instance
            if (existing && ((instance = observers.get(existing)), instance))
              return instance
            const elements = new Map(),
              observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  const callback = elements.get(entry.target),
                    isVisible =
                      entry.isIntersecting || entry.intersectionRatio > 0
                  callback && isVisible && callback(isVisible)
                })
              }, options)
            return (
              (instance = { id, observer, elements }),
              idList.push(id),
              observers.set(id, instance),
              instance
            )
          })(options)
          return (
            elements.set(element, callback),
            observer.observe(element),
            function unobserve() {
              if (
                (elements.delete(element),
                observer.unobserve(element),
                0 === elements.size)
              ) {
                ;(observer.disconnect(), observers.delete(id))
                const index = idList.findIndex(
                  (obj) => obj.root === id.root && obj.margin === id.margin
                )
                index > -1 && idList.splice(index, 1)
              }
            }
          )
        }
        function useIntersection(param) {
          let { rootRef, rootMargin, disabled } = param
          const isDisabled = disabled || !hasIntersectionObserver,
            [visible, setVisible] = (0, _react.useState)(!1),
            elementRef = (0, _react.useRef)(null),
            setElement = (0, _react.useCallback)((element) => {
              elementRef.current = element
            }, [])
          ;(0, _react.useEffect)(() => {
            if (hasIntersectionObserver) {
              if (isDisabled || visible) return
              const element = elementRef.current
              if (element && element.tagName) {
                return observe(
                  element,
                  (isVisible) => isVisible && setVisible(isVisible),
                  {
                    root: null == rootRef ? void 0 : rootRef.current,
                    rootMargin,
                  }
                )
              }
            } else if (!visible) {
              const idleCallback = (0,
              _requestidlecallback.requestIdleCallback)(() => setVisible(!0))
              return () =>
                (0, _requestidlecallback.cancelIdleCallback)(idleCallback)
            }
          }, [isDisabled, rootMargin, rootRef, visible, elementRef.current])
          const resetVisible = (0, _react.useCallback)(() => {
            setVisible(!1)
          }, [])
          return [setElement, visible, resetVisible]
        }
        ;('function' == typeof exports.default ||
          ('object' == typeof exports.default && null !== exports.default)) &&
          void 0 === exports.default.__esModule &&
          (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
          Object.assign(exports.default, exports),
          (module.exports = exports.default))
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/use-merged-ref.js':
      (module, exports, __webpack_require__) => {
        'use strict'
        ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'useMergedRef', {
            enumerable: !0,
            get: function () {
              return useMergedRef
            },
          }))
        const _react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function useMergedRef(refA, refB) {
          const cleanupA = (0, _react.useRef)(null),
            cleanupB = (0, _react.useRef)(null)
          return (0, _react.useCallback)(
            (current) => {
              if (null === current) {
                const cleanupFnA = cleanupA.current
                cleanupFnA && ((cleanupA.current = null), cleanupFnA())
                const cleanupFnB = cleanupB.current
                cleanupFnB && ((cleanupB.current = null), cleanupFnB())
              } else
                (refA && (cleanupA.current = applyRef(refA, current)),
                  refB && (cleanupB.current = applyRef(refB, current)))
            },
            [refA, refB]
          )
        }
        function applyRef(refA, current) {
          if ('function' == typeof refA) {
            const cleanup = refA(current)
            return 'function' == typeof cleanup ? cleanup : () => refA(null)
          }
          return (
            (refA.current = current),
            () => {
              refA.current = null
            }
          )
        }
        ;('function' == typeof exports.default ||
          ('object' == typeof exports.default && null !== exports.default)) &&
          void 0 === exports.default.__esModule &&
          (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
          Object.assign(exports.default, exports),
          (module.exports = exports.default))
      },
    '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/link.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/client/link.js'
        )
      },
  },
])
