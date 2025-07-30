/*! For license information please see 5746.7346433b.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5746],
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
    '../../node_modules/.pnpm/@radix-ui+themes@3.2.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_b707e50bc9b6b93521347d45a2da6d2c/node_modules/@radix-ui/themes/dist/esm/components/spinner.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { y: () => spinner_s })
        var react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          classnames = __webpack_require__(
            '../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js'
          ),
          classnames_default = __webpack_require__.n(classnames)
        const prop_def_e = ['initial', 'xs', 'sm', 'md', 'lg', 'xl']
        function has_own_property_e(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r)
        }
        function i(e) {
          return (
            'object' == typeof e &&
            Object.keys(e).some((s) => prop_def_e.includes(s))
          )
        }
        function R({ className: r, customProperties: n, ...t }) {
          const p = g({ allowArbitraryValues: !0, className: r, ...t }),
            e = (function m({
              customProperties: r,
              value: n,
              propValues: t,
              parseValue: p = (e) => e,
            }) {
              let e = {}
              if (n && ('string' != typeof n || !t.includes(n))) {
                if (
                  ('string' == typeof n &&
                    (e = Object.fromEntries(r.map((s) => [s, n]))),
                  i(n))
                ) {
                  const s = n
                  for (const i in s) {
                    if (!has_own_property_e(s, i) || !prop_def_e.includes(i))
                      continue
                    const o = s[i]
                    if (!t.includes(o))
                      for (const u of r)
                        e = { ['initial' === i ? u : `${u}-${i}`]: o, ...e }
                  }
                }
                for (const s in e) {
                  const i = e[s]
                  void 0 !== i && (e[s] = p(i))
                }
                return e
              }
            })({ customProperties: n, ...t })
          return [p, e]
        }
        function g({
          allowArbitraryValues: r,
          value: n,
          className: t,
          propValues: p,
          parseValue: e = (s) => s,
        }) {
          const s = []
          if (n) {
            if ('string' == typeof n && p.includes(n)) return l(t, n, e)
            if (i(n)) {
              const i = n
              for (const o in i) {
                if (!has_own_property_e(i, o) || !prop_def_e.includes(o))
                  continue
                const u = i[o]
                if (void 0 !== u)
                  if (p.includes(u)) {
                    const f = l(t, u, e),
                      v = 'initial' === o ? f : `${o}:${f}`
                    s.push(v)
                  } else if (r) {
                    const f = 'initial' === o ? t : `${o}:${t}`
                    s.push(f)
                  }
              }
              return s.join(' ')
            }
            if (r) return t
          }
        }
        function l(r, n, t) {
          const p = r ? '-' : '',
            e = t(n),
            s = e?.startsWith('-')
          return `${s ? '-' : ''}${r}${p}${s ? e?.substring(1) : e}`
        }
        function merge_styles_l(...t) {
          let e = {}
          for (const n of t) n && (e = { ...e, ...n })
          return Object.keys(e).length ? e : void 0
        }
        function v(r, ...m) {
          let t, l
          const a = { ...r },
            f = (function N(...r) {
              return Object.assign({}, ...r)
            })(...m)
          for (const n in f) {
            let s = a[n]
            const e = f[n]
            if (
              (void 0 !== e.default && void 0 === s && (s = e.default),
              'enum' === e.type &&
                ![e.default, ...e.values].includes(s) &&
                !i(s) &&
                (s = e.default),
              (a[n] = s),
              'className' in e && e.className)
            ) {
              delete a[n]
              const u = 'responsive' in e
              if (!s || (i(s) && !u)) continue
              if (
                (i(s) &&
                  (void 0 !== e.default &&
                    void 0 === s.initial &&
                    (s.initial = e.default),
                  'enum' === e.type &&
                    ([e.default, ...e.values].includes(s.initial) ||
                      (s.initial = e.default))),
                'enum' === e.type)
              ) {
                const i = g({
                  allowArbitraryValues: !1,
                  value: s,
                  className: e.className,
                  propValues: e.values,
                  parseValue: e.parseValue,
                })
                t = classnames_default()(t, i)
                continue
              }
              if ('string' === e.type || 'enum | string' === e.type) {
                const i = 'string' === e.type ? [] : e.values,
                  [d, y] = R({
                    className: e.className,
                    customProperties: e.customProperties,
                    propValues: i,
                    parseValue: e.parseValue,
                    value: s,
                  })
                ;((l = merge_styles_l(l, y)), (t = classnames_default()(t, d)))
                continue
              }
              if ('boolean' === e.type && s) {
                t = classnames_default()(t, e.className)
                continue
              }
            }
          }
          return (
            (a.className = classnames_default()(t, r.className)),
            (a.style = merge_styles_l(l, r.style)),
            a
          )
        }
        const e = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          r = ['visible', 'hidden', 'clip', 'scroll', 'auto'],
          layout_props_e = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '-1',
            '-2',
            '-3',
            '-4',
            '-5',
            '-6',
            '-7',
            '-8',
            '-9',
          ],
          u = {
            ...{
              p: {
                type: 'enum | string',
                className: 'rt-r-p',
                customProperties: ['--p'],
                values: e,
                responsive: !0,
              },
              px: {
                type: 'enum | string',
                className: 'rt-r-px',
                customProperties: ['--pl', '--pr'],
                values: e,
                responsive: !0,
              },
              py: {
                type: 'enum | string',
                className: 'rt-r-py',
                customProperties: ['--pt', '--pb'],
                values: e,
                responsive: !0,
              },
              pt: {
                type: 'enum | string',
                className: 'rt-r-pt',
                customProperties: ['--pt'],
                values: e,
                responsive: !0,
              },
              pr: {
                type: 'enum | string',
                className: 'rt-r-pr',
                customProperties: ['--pr'],
                values: e,
                responsive: !0,
              },
              pb: {
                type: 'enum | string',
                className: 'rt-r-pb',
                customProperties: ['--pb'],
                values: e,
                responsive: !0,
              },
              pl: {
                type: 'enum | string',
                className: 'rt-r-pl',
                customProperties: ['--pl'],
                values: e,
                responsive: !0,
              },
            },
            width: {
              type: 'string',
              className: 'rt-r-w',
              customProperties: ['--width'],
              responsive: !0,
            },
            minWidth: {
              type: 'string',
              className: 'rt-r-min-w',
              customProperties: ['--min-width'],
              responsive: !0,
            },
            maxWidth: {
              type: 'string',
              className: 'rt-r-max-w',
              customProperties: ['--max-width'],
              responsive: !0,
            },
            height: {
              type: 'string',
              className: 'rt-r-h',
              customProperties: ['--height'],
              responsive: !0,
            },
            minHeight: {
              type: 'string',
              className: 'rt-r-min-h',
              customProperties: ['--min-height'],
              responsive: !0,
            },
            maxHeight: {
              type: 'string',
              className: 'rt-r-max-h',
              customProperties: ['--max-height'],
              responsive: !0,
            },
            position: {
              type: 'enum',
              className: 'rt-r-position',
              values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
              responsive: !0,
            },
            inset: {
              type: 'enum | string',
              className: 'rt-r-inset',
              customProperties: ['--inset'],
              values: layout_props_e,
              responsive: !0,
            },
            top: {
              type: 'enum | string',
              className: 'rt-r-top',
              customProperties: ['--top'],
              values: layout_props_e,
              responsive: !0,
            },
            right: {
              type: 'enum | string',
              className: 'rt-r-right',
              customProperties: ['--right'],
              values: layout_props_e,
              responsive: !0,
            },
            bottom: {
              type: 'enum | string',
              className: 'rt-r-bottom',
              customProperties: ['--bottom'],
              values: layout_props_e,
              responsive: !0,
            },
            left: {
              type: 'enum | string',
              className: 'rt-r-left',
              customProperties: ['--left'],
              values: layout_props_e,
              responsive: !0,
            },
            overflow: {
              type: 'enum',
              className: 'rt-r-overflow',
              values: r,
              responsive: !0,
            },
            overflowX: {
              type: 'enum',
              className: 'rt-r-ox',
              values: r,
              responsive: !0,
            },
            overflowY: {
              type: 'enum',
              className: 'rt-r-oy',
              values: r,
              responsive: !0,
            },
            flexBasis: {
              type: 'string',
              className: 'rt-r-fb',
              customProperties: ['--flex-basis'],
              responsive: !0,
            },
            flexShrink: {
              type: 'enum | string',
              className: 'rt-r-fs',
              customProperties: ['--flex-shrink'],
              values: ['0', '1'],
              responsive: !0,
            },
            flexGrow: {
              type: 'enum | string',
              className: 'rt-r-fg',
              customProperties: ['--flex-grow'],
              values: ['0', '1'],
              responsive: !0,
            },
            gridArea: {
              type: 'string',
              className: 'rt-r-ga',
              customProperties: ['--grid-area'],
              responsive: !0,
            },
            gridColumn: {
              type: 'string',
              className: 'rt-r-gc',
              customProperties: ['--grid-column'],
              responsive: !0,
            },
            gridColumnStart: {
              type: 'string',
              className: 'rt-r-gcs',
              customProperties: ['--grid-column-start'],
              responsive: !0,
            },
            gridColumnEnd: {
              type: 'string',
              className: 'rt-r-gce',
              customProperties: ['--grid-column-end'],
              responsive: !0,
            },
            gridRow: {
              type: 'string',
              className: 'rt-r-gr',
              customProperties: ['--grid-row'],
              responsive: !0,
            },
            gridRowStart: {
              type: 'string',
              className: 'rt-r-grs',
              customProperties: ['--grid-row-start'],
              responsive: !0,
            },
            gridRowEnd: {
              type: 'string',
              className: 'rt-r-gre',
              customProperties: ['--grid-row-end'],
              responsive: !0,
            },
          },
          margin_props_e = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '-1',
            '-2',
            '-3',
            '-4',
            '-5',
            '-6',
            '-7',
            '-8',
            '-9',
          ],
          margin_props_r = {
            m: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-m',
              customProperties: ['--m'],
            },
            mx: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-mx',
              customProperties: ['--ml', '--mr'],
            },
            my: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-my',
              customProperties: ['--mt', '--mb'],
            },
            mt: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-mt',
              customProperties: ['--mt'],
            },
            mr: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-mr',
              customProperties: ['--mr'],
            },
            mb: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-mb',
              customProperties: ['--mb'],
            },
            ml: {
              type: 'enum | string',
              values: margin_props_e,
              responsive: !0,
              className: 'rt-r-ml',
              customProperties: ['--ml'],
            },
          }
        var dist = __webpack_require__(
          '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
        )
        dist.bL
        const slot_e = dist.bL,
          gap_props_e =
            (dist.xV, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
          flex_props_u = {
            as: { type: 'enum', values: ['div', 'span'], default: 'div' },
            asChild: { type: 'boolean' },
            display: {
              type: 'enum',
              className: 'rt-r-display',
              values: ['none', 'inline-flex', 'flex'],
              responsive: !0,
            },
            direction: {
              type: 'enum',
              className: 'rt-r-fd',
              values: ['row', 'column', 'row-reverse', 'column-reverse'],
              responsive: !0,
            },
            align: {
              type: 'enum',
              className: 'rt-r-ai',
              values: ['start', 'center', 'end', 'baseline', 'stretch'],
              responsive: !0,
            },
            justify: {
              type: 'enum',
              className: 'rt-r-jc',
              values: ['start', 'center', 'end', 'between'],
              parseValue: function f(e) {
                return 'between' === e ? 'space-between' : e
              },
              responsive: !0,
            },
            wrap: {
              type: 'enum',
              className: 'rt-r-fw',
              values: ['nowrap', 'wrap', 'wrap-reverse'],
              responsive: !0,
            },
            ...{
              gap: {
                type: 'enum | string',
                className: 'rt-r-gap',
                customProperties: ['--gap'],
                values: gap_props_e,
                responsive: !0,
              },
              gapX: {
                type: 'enum | string',
                className: 'rt-r-cg',
                customProperties: ['--column-gap'],
                values: gap_props_e,
                responsive: !0,
              },
              gapY: {
                type: 'enum | string',
                className: 'rt-r-rg',
                customProperties: ['--row-gap'],
                values: gap_props_e,
                responsive: !0,
              },
            },
          }
        const flex_p = react.forwardRef((r, e) => {
          const {
            className: s,
            asChild: t,
            as: m = 'div',
            ...l
          } = v(r, flex_props_u, u, margin_props_r)
          return react.createElement(t ? slot_e : m, {
            ...l,
            ref: e,
            className: classnames_default()('rt-Flex', s),
          })
        })
        flex_p.displayName = 'Flex'
        const s = {
            size: {
              type: 'enum',
              className: 'rt-r-size',
              values: ['1', '2', '3'],
              default: '2',
              responsive: !0,
            },
            loading: { type: 'boolean', default: !0 },
          },
          spinner_s = react.forwardRef((i, o) => {
            const {
              className: a,
              children: e,
              loading: t,
              ...m
            } = v(i, s, margin_props_r)
            if (!t) return e
            const r = react.createElement(
              'span',
              {
                ...m,
                ref: o,
                className: classnames_default()('rt-Spinner', a),
              },
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' }),
              react.createElement('span', { className: 'rt-SpinnerLeaf' })
            )
            return void 0 === e
              ? r
              : react.createElement(
                  flex_p,
                  {
                    asChild: !0,
                    position: 'relative',
                    align: 'center',
                    justify: 'center',
                  },
                  react.createElement(
                    'span',
                    null,
                    react.createElement(
                      'span',
                      {
                        'aria-hidden': !0,
                        style: { display: 'contents', visibility: 'hidden' },
                        inert: void 0,
                      },
                      e
                    ),
                    react.createElement(
                      flex_p,
                      {
                        asChild: !0,
                        align: 'center',
                        justify: 'center',
                        position: 'absolute',
                        inset: '0',
                      },
                      react.createElement('span', null, r)
                    )
                  )
                )
          })
        spinner_s.displayName = 'Spinner'
      },
    '../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js':
      (module, exports) => {
        var __WEBPACK_AMD_DEFINE_RESULT__
        !(function () {
          'use strict'
          var hasOwn = {}.hasOwnProperty
          function classNames() {
            for (var classes = '', i = 0; i < arguments.length; i++) {
              var arg = arguments[i]
              arg && (classes = appendClass(classes, parseValue(arg)))
            }
            return classes
          }
          function parseValue(arg) {
            if ('string' == typeof arg || 'number' == typeof arg) return arg
            if ('object' != typeof arg) return ''
            if (Array.isArray(arg)) return classNames.apply(null, arg)
            if (
              arg.toString !== Object.prototype.toString &&
              !arg.toString.toString().includes('[native code]')
            )
              return arg.toString()
            var classes = ''
            for (var key in arg)
              hasOwn.call(arg, key) &&
                arg[key] &&
                (classes = appendClass(classes, key))
            return classes
          }
          function appendClass(value, newClass) {
            return newClass
              ? value
                ? value + ' ' + newClass
                : value + newClass
              : value
          }
          module.exports
            ? ((classNames.default = classNames), (module.exports = classNames))
            : void 0 ===
                (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return classNames
                }.apply(exports, [])) ||
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        })()
      },
    '../../node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function none() {}
      function selector(selector) {
        return null == selector
          ? none
          : function () {
              return this.querySelector(selector)
            }
      }
      function array(x) {
        return null == x ? [] : Array.isArray(x) ? x : Array.from(x)
      }
      function empty() {
        return []
      }
      function selectorAll(selector) {
        return null == selector
          ? empty
          : function () {
              return this.querySelectorAll(selector)
            }
      }
      function matcher(selector) {
        return function () {
          return this.matches(selector)
        }
      }
      function childMatcher(selector) {
        return function (node) {
          return node.matches(selector)
        }
      }
      __webpack_require__.d(__webpack_exports__, {
        $Er: () => drag,
        jTM: () => center,
        eRw: () => collide,
        kJC: () => src_link,
        xJS: () => manyBody,
        tXi: () => simulation,
        Ltv: () => src_select,
        Ubm: () => src_selectAll,
        s_O: () => zoom,
        GSI: () => transform_identity,
      })
      var find = Array.prototype.find
      function childFirst() {
        return this.firstElementChild
      }
      var filter = Array.prototype.filter
      function children() {
        return Array.from(this.children)
      }
      function sparse(update) {
        return new Array(update.length)
      }
      function EnterNode(parent, datum) {
        ;((this.ownerDocument = parent.ownerDocument),
          (this.namespaceURI = parent.namespaceURI),
          (this._next = null),
          (this._parent = parent),
          (this.__data__ = datum))
      }
      function bindIndex(parent, group, enter, update, exit, data) {
        for (
          var node, i = 0, groupLength = group.length, dataLength = data.length;
          i < dataLength;
          ++i
        )
          (node = group[i])
            ? ((node.__data__ = data[i]), (update[i] = node))
            : (enter[i] = new EnterNode(parent, data[i]))
        for (; i < groupLength; ++i) (node = group[i]) && (exit[i] = node)
      }
      function bindKey(parent, group, enter, update, exit, data, key) {
        var i,
          node,
          keyValue,
          nodeByKeyValue = new Map(),
          groupLength = group.length,
          dataLength = data.length,
          keyValues = new Array(groupLength)
        for (i = 0; i < groupLength; ++i)
          (node = group[i]) &&
            ((keyValues[i] = keyValue =
              key.call(node, node.__data__, i, group) + ''),
            nodeByKeyValue.has(keyValue)
              ? (exit[i] = node)
              : nodeByKeyValue.set(keyValue, node))
        for (i = 0; i < dataLength; ++i)
          ((keyValue = key.call(parent, data[i], i, data) + ''),
            (node = nodeByKeyValue.get(keyValue))
              ? ((update[i] = node),
                (node.__data__ = data[i]),
                nodeByKeyValue.delete(keyValue))
              : (enter[i] = new EnterNode(parent, data[i])))
        for (i = 0; i < groupLength; ++i)
          (node = group[i]) &&
            nodeByKeyValue.get(keyValues[i]) === node &&
            (exit[i] = node)
      }
      function datum(node) {
        return node.__data__
      }
      function arraylike(data) {
        return 'object' == typeof data && 'length' in data
          ? data
          : Array.from(data)
      }
      function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
      }
      EnterNode.prototype = {
        constructor: EnterNode,
        appendChild: function (child) {
          return this._parent.insertBefore(child, this._next)
        },
        insertBefore: function (child, next) {
          return this._parent.insertBefore(child, next)
        },
        querySelector: function (selector) {
          return this._parent.querySelector(selector)
        },
        querySelectorAll: function (selector) {
          return this._parent.querySelectorAll(selector)
        },
      }
      var xhtml = 'http://www.w3.org/1999/xhtml'
      const namespaces = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      }
      function namespace(name) {
        var prefix = (name += ''),
          i = prefix.indexOf(':')
        return (
          i >= 0 &&
            'xmlns' !== (prefix = name.slice(0, i)) &&
            (name = name.slice(i + 1)),
          namespaces.hasOwnProperty(prefix)
            ? { space: namespaces[prefix], local: name }
            : name
        )
      }
      function attrRemove(name) {
        return function () {
          this.removeAttribute(name)
        }
      }
      function attrRemoveNS(fullname) {
        return function () {
          this.removeAttributeNS(fullname.space, fullname.local)
        }
      }
      function attrConstant(name, value) {
        return function () {
          this.setAttribute(name, value)
        }
      }
      function attrConstantNS(fullname, value) {
        return function () {
          this.setAttributeNS(fullname.space, fullname.local, value)
        }
      }
      function attrFunction(name, value) {
        return function () {
          var v = value.apply(this, arguments)
          null == v ? this.removeAttribute(name) : this.setAttribute(name, v)
        }
      }
      function attrFunctionNS(fullname, value) {
        return function () {
          var v = value.apply(this, arguments)
          null == v
            ? this.removeAttributeNS(fullname.space, fullname.local)
            : this.setAttributeNS(fullname.space, fullname.local, v)
        }
      }
      function src_window(node) {
        return (
          (node.ownerDocument && node.ownerDocument.defaultView) ||
          (node.document && node) ||
          node.defaultView
        )
      }
      function styleRemove(name) {
        return function () {
          this.style.removeProperty(name)
        }
      }
      function styleConstant(name, value, priority) {
        return function () {
          this.style.setProperty(name, value, priority)
        }
      }
      function styleFunction(name, value, priority) {
        return function () {
          var v = value.apply(this, arguments)
          null == v
            ? this.style.removeProperty(name)
            : this.style.setProperty(name, v, priority)
        }
      }
      function styleValue(node, name) {
        return (
          node.style.getPropertyValue(name) ||
          src_window(node).getComputedStyle(node, null).getPropertyValue(name)
        )
      }
      function propertyRemove(name) {
        return function () {
          delete this[name]
        }
      }
      function propertyConstant(name, value) {
        return function () {
          this[name] = value
        }
      }
      function propertyFunction(name, value) {
        return function () {
          var v = value.apply(this, arguments)
          null == v ? delete this[name] : (this[name] = v)
        }
      }
      function classArray(string) {
        return string.trim().split(/^|\s+/)
      }
      function classList(node) {
        return node.classList || new ClassList(node)
      }
      function ClassList(node) {
        ;((this._node = node),
          (this._names = classArray(node.getAttribute('class') || '')))
      }
      function classedAdd(node, names) {
        for (var list = classList(node), i = -1, n = names.length; ++i < n; )
          list.add(names[i])
      }
      function classedRemove(node, names) {
        for (var list = classList(node), i = -1, n = names.length; ++i < n; )
          list.remove(names[i])
      }
      function classedTrue(names) {
        return function () {
          classedAdd(this, names)
        }
      }
      function classedFalse(names) {
        return function () {
          classedRemove(this, names)
        }
      }
      function classedFunction(names, value) {
        return function () {
          ;(value.apply(this, arguments) ? classedAdd : classedRemove)(
            this,
            names
          )
        }
      }
      function textRemove() {
        this.textContent = ''
      }
      function textConstant(value) {
        return function () {
          this.textContent = value
        }
      }
      function textFunction(value) {
        return function () {
          var v = value.apply(this, arguments)
          this.textContent = null == v ? '' : v
        }
      }
      function htmlRemove() {
        this.innerHTML = ''
      }
      function htmlConstant(value) {
        return function () {
          this.innerHTML = value
        }
      }
      function htmlFunction(value) {
        return function () {
          var v = value.apply(this, arguments)
          this.innerHTML = null == v ? '' : v
        }
      }
      function raise() {
        this.nextSibling && this.parentNode.appendChild(this)
      }
      function lower() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild)
      }
      function creatorInherit(name) {
        return function () {
          var document = this.ownerDocument,
            uri = this.namespaceURI
          return uri === xhtml &&
            document.documentElement.namespaceURI === xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name)
        }
      }
      function creatorFixed(fullname) {
        return function () {
          return this.ownerDocument.createElementNS(
            fullname.space,
            fullname.local
          )
        }
      }
      function creator(name) {
        var fullname = namespace(name)
        return (fullname.local ? creatorFixed : creatorInherit)(fullname)
      }
      function constantNull() {
        return null
      }
      function remove() {
        var parent = this.parentNode
        parent && parent.removeChild(this)
      }
      function selection_cloneShallow() {
        var clone = this.cloneNode(!1),
          parent = this.parentNode
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone
      }
      function selection_cloneDeep() {
        var clone = this.cloneNode(!0),
          parent = this.parentNode
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone
      }
      function onRemove(typename) {
        return function () {
          var on = this.__on
          if (on) {
            for (var o, j = 0, i = -1, m = on.length; j < m; ++j)
              ((o = on[j]),
                (typename.type && o.type !== typename.type) ||
                o.name !== typename.name
                  ? (on[++i] = o)
                  : this.removeEventListener(o.type, o.listener, o.options))
            ++i ? (on.length = i) : delete this.__on
          }
        }
      }
      function onAdd(typename, value, options) {
        return function () {
          var o,
            on = this.__on,
            listener = (function contextListener(listener) {
              return function (event) {
                listener.call(this, event, this.__data__)
              }
            })(value)
          if (on)
            for (var j = 0, m = on.length; j < m; ++j)
              if (
                (o = on[j]).type === typename.type &&
                o.name === typename.name
              )
                return (
                  this.removeEventListener(o.type, o.listener, o.options),
                  this.addEventListener(
                    o.type,
                    (o.listener = listener),
                    (o.options = options)
                  ),
                  void (o.value = value)
                )
          ;(this.addEventListener(typename.type, listener, options),
            (o = {
              type: typename.type,
              name: typename.name,
              value,
              listener,
              options,
            }),
            on ? on.push(o) : (this.__on = [o]))
        }
      }
      function dispatchEvent(node, type, params) {
        var window = src_window(node),
          event = window.CustomEvent
        ;('function' == typeof event
          ? (event = new event(type, params))
          : ((event = window.document.createEvent('Event')),
            params
              ? (event.initEvent(type, params.bubbles, params.cancelable),
                (event.detail = params.detail))
              : event.initEvent(type, !1, !1)),
          node.dispatchEvent(event))
      }
      function dispatchConstant(type, params) {
        return function () {
          return dispatchEvent(this, type, params)
        }
      }
      function dispatchFunction(type, params) {
        return function () {
          return dispatchEvent(this, type, params.apply(this, arguments))
        }
      }
      ClassList.prototype = {
        add: function (name) {
          this._names.indexOf(name) < 0 &&
            (this._names.push(name),
            this._node.setAttribute('class', this._names.join(' ')))
        },
        remove: function (name) {
          var i = this._names.indexOf(name)
          i >= 0 &&
            (this._names.splice(i, 1),
            this._node.setAttribute('class', this._names.join(' ')))
        },
        contains: function (name) {
          return this._names.indexOf(name) >= 0
        },
      }
      var root = [null]
      function Selection(groups, parents) {
        ;((this._groups = groups), (this._parents = parents))
      }
      function selection() {
        return new Selection([[document.documentElement]], root)
      }
      Selection.prototype = selection.prototype = {
        constructor: Selection,
        select: function selection_select(select) {
          'function' != typeof select && (select = selector(select))
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                subnode,
                group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = new Array(n)),
                i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                (subnode = select.call(node, node.__data__, i, group)) &&
                ('__data__' in node && (subnode.__data__ = node.__data__),
                (subgroup[i] = subnode))
          return new Selection(subgroups, this._parents)
        },
        selectAll: function selectAll(select) {
          select =
            'function' == typeof select
              ? (function arrayAll(select) {
                  return function () {
                    return array(select.apply(this, arguments))
                  }
                })(select)
              : selectorAll(select)
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = [],
              parents = [],
              j = 0;
            j < m;
            ++j
          )
            for (
              var node, group = groups[j], n = group.length, i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                (subgroups.push(select.call(node, node.__data__, i, group)),
                parents.push(node))
          return new Selection(subgroups, parents)
        },
        selectChild: function selectChild(match) {
          return this.select(
            null == match
              ? childFirst
              : (function childFind(match) {
                  return function () {
                    return find.call(this.children, match)
                  }
                })('function' == typeof match ? match : childMatcher(match))
          )
        },
        selectChildren: function selectChildren(match) {
          return this.selectAll(
            null == match
              ? children
              : (function childrenFilter(match) {
                  return function () {
                    return filter.call(this.children, match)
                  }
                })('function' == typeof match ? match : childMatcher(match))
          )
        },
        filter: function selection_filter(match) {
          'function' != typeof match && (match = matcher(match))
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = []),
                i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                match.call(node, node.__data__, i, group) &&
                subgroup.push(node)
          return new Selection(subgroups, this._parents)
        },
        data: function data(value, key) {
          if (!arguments.length) return Array.from(this, datum)
          var bind = key ? bindKey : bindIndex,
            parents = this._parents,
            groups = this._groups
          'function' != typeof value &&
            (value = (function src_constant(x) {
              return function () {
                return x
              }
            })(value))
          for (
            var m = groups.length,
              update = new Array(m),
              enter = new Array(m),
              exit = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            var parent = parents[j],
              group = groups[j],
              groupLength = group.length,
              data = arraylike(
                value.call(parent, parent && parent.__data__, j, parents)
              ),
              dataLength = data.length,
              enterGroup = (enter[j] = new Array(dataLength)),
              updateGroup = (update[j] = new Array(dataLength))
            bind(
              parent,
              group,
              enterGroup,
              updateGroup,
              (exit[j] = new Array(groupLength)),
              data,
              key
            )
            for (var previous, next, i0 = 0, i1 = 0; i0 < dataLength; ++i0)
              if ((previous = enterGroup[i0])) {
                for (
                  i0 >= i1 && (i1 = i0 + 1);
                  !(next = updateGroup[i1]) && ++i1 < dataLength;

                );
                previous._next = next || null
              }
          }
          return (
            ((update = new Selection(update, parents))._enter = enter),
            (update._exit = exit),
            update
          )
        },
        enter: function enter() {
          return new Selection(
            this._enter || this._groups.map(sparse),
            this._parents
          )
        },
        exit: function exit() {
          return new Selection(
            this._exit || this._groups.map(sparse),
            this._parents
          )
        },
        join: function join(onenter, onupdate, onexit) {
          var enter = this.enter(),
            update = this,
            exit = this.exit()
          return (
            'function' == typeof onenter
              ? (enter = onenter(enter)) && (enter = enter.selection())
              : (enter = enter.append(onenter + '')),
            null != onupdate &&
              (update = onupdate(update)) &&
              (update = update.selection()),
            null == onexit ? exit.remove() : onexit(exit),
            enter && update ? enter.merge(update).order() : update
          )
        },
        merge: function merge(context) {
          for (
            var selection = context.selection ? context.selection() : context,
              groups0 = this._groups,
              groups1 = selection._groups,
              m0 = groups0.length,
              m1 = groups1.length,
              m = Math.min(m0, m1),
              merges = new Array(m0),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                group0 = groups0[j],
                group1 = groups1[j],
                n = group0.length,
                merge = (merges[j] = new Array(n)),
                i = 0;
              i < n;
              ++i
            )
              (node = group0[i] || group1[i]) && (merge[i] = node)
          for (; j < m0; ++j) merges[j] = groups0[j]
          return new Selection(merges, this._parents)
        },
        selection: function selection_selection() {
          return this
        },
        order: function order() {
          for (var groups = this._groups, j = -1, m = groups.length; ++j < m; )
            for (
              var node,
                group = groups[j],
                i = group.length - 1,
                next = group[i];
              --i >= 0;

            )
              (node = group[i]) &&
                (next &&
                  4 ^ node.compareDocumentPosition(next) &&
                  next.parentNode.insertBefore(node, next),
                (next = node))
          return this
        },
        sort: function sort(compare) {
          function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b
          }
          compare || (compare = ascending)
          for (
            var groups = this._groups,
              m = groups.length,
              sortgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          ) {
            for (
              var node,
                group = groups[j],
                n = group.length,
                sortgroup = (sortgroups[j] = new Array(n)),
                i = 0;
              i < n;
              ++i
            )
              (node = group[i]) && (sortgroup[i] = node)
            sortgroup.sort(compareNode)
          }
          return new Selection(sortgroups, this._parents).order()
        },
        call: function call() {
          var callback = arguments[0]
          return ((arguments[0] = this), callback.apply(null, arguments), this)
        },
        nodes: function nodes() {
          return Array.from(this)
        },
        node: function node() {
          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j)
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
              var node = group[i]
              if (node) return node
            }
          return null
        },
        size: function size() {
          let size = 0
          for (const node of this) ++size
          return size
        },
        empty: function selection_empty() {
          return !this.node()
        },
        each: function each(callback) {
          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j)
            for (
              var node, group = groups[j], i = 0, n = group.length;
              i < n;
              ++i
            )
              (node = group[i]) && callback.call(node, node.__data__, i, group)
          return this
        },
        attr: function attr(name, value) {
          var fullname = namespace(name)
          if (arguments.length < 2) {
            var node = this.node()
            return fullname.local
              ? node.getAttributeNS(fullname.space, fullname.local)
              : node.getAttribute(fullname)
          }
          return this.each(
            (null == value
              ? fullname.local
                ? attrRemoveNS
                : attrRemove
              : 'function' == typeof value
                ? fullname.local
                  ? attrFunctionNS
                  : attrFunction
                : fullname.local
                  ? attrConstantNS
                  : attrConstant)(fullname, value)
          )
        },
        style: function style(name, value, priority) {
          return arguments.length > 1
            ? this.each(
                (null == value
                  ? styleRemove
                  : 'function' == typeof value
                    ? styleFunction
                    : styleConstant)(
                  name,
                  value,
                  null == priority ? '' : priority
                )
              )
            : styleValue(this.node(), name)
        },
        property: function property(name, value) {
          return arguments.length > 1
            ? this.each(
                (null == value
                  ? propertyRemove
                  : 'function' == typeof value
                    ? propertyFunction
                    : propertyConstant)(name, value)
              )
            : this.node()[name]
        },
        classed: function classed(name, value) {
          var names = classArray(name + '')
          if (arguments.length < 2) {
            for (
              var list = classList(this.node()), i = -1, n = names.length;
              ++i < n;

            )
              if (!list.contains(names[i])) return !1
            return !0
          }
          return this.each(
            ('function' == typeof value
              ? classedFunction
              : value
                ? classedTrue
                : classedFalse)(names, value)
          )
        },
        text: function selection_text(value) {
          return arguments.length
            ? this.each(
                null == value
                  ? textRemove
                  : ('function' == typeof value ? textFunction : textConstant)(
                      value
                    )
              )
            : this.node().textContent
        },
        html: function html(value) {
          return arguments.length
            ? this.each(
                null == value
                  ? htmlRemove
                  : ('function' == typeof value ? htmlFunction : htmlConstant)(
                      value
                    )
              )
            : this.node().innerHTML
        },
        raise: function selection_raise() {
          return this.each(raise)
        },
        lower: function selection_lower() {
          return this.each(lower)
        },
        append: function append(name) {
          var create = 'function' == typeof name ? name : creator(name)
          return this.select(function () {
            return this.appendChild(create.apply(this, arguments))
          })
        },
        insert: function insert(name, before) {
          var create = 'function' == typeof name ? name : creator(name),
            select =
              null == before
                ? constantNull
                : 'function' == typeof before
                  ? before
                  : selector(before)
          return this.select(function () {
            return this.insertBefore(
              create.apply(this, arguments),
              select.apply(this, arguments) || null
            )
          })
        },
        remove: function selection_remove() {
          return this.each(remove)
        },
        clone: function clone(deep) {
          return this.select(
            deep ? selection_cloneDeep : selection_cloneShallow
          )
        },
        datum: function selection_datum(value) {
          return arguments.length
            ? this.property('__data__', value)
            : this.node().__data__
        },
        on: function on(typename, value, options) {
          var i,
            t,
            typenames = (function parseTypenames(typenames) {
              return typenames
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var name = '',
                    i = t.indexOf('.')
                  return (
                    i >= 0 && ((name = t.slice(i + 1)), (t = t.slice(0, i))),
                    { type: t, name }
                  )
                })
            })(typename + ''),
            n = typenames.length
          if (!(arguments.length < 2)) {
            for (on = value ? onAdd : onRemove, i = 0; i < n; ++i)
              this.each(on(typenames[i], value, options))
            return this
          }
          var on = this.node().__on
          if (on)
            for (var o, j = 0, m = on.length; j < m; ++j)
              for (i = 0, o = on[j]; i < n; ++i)
                if ((t = typenames[i]).type === o.type && t.name === o.name)
                  return o.value
        },
        dispatch: function selection_dispatch(type, params) {
          return this.each(
            ('function' == typeof params ? dispatchFunction : dispatchConstant)(
              type,
              params
            )
          )
        },
        [Symbol.iterator]: function* iterator() {
          for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j)
            for (
              var node, group = groups[j], i = 0, n = group.length;
              i < n;
              ++i
            )
              (node = group[i]) && (yield node)
        },
      }
      const src_selection = selection
      var noop = { value: () => {} }
      function dispatch_dispatch() {
        for (var t, i = 0, n = arguments.length, _ = {}; i < n; ++i) {
          if (!(t = arguments[i] + '') || t in _ || /[\s.]/.test(t))
            throw new Error('illegal type: ' + t)
          _[t] = []
        }
        return new Dispatch(_)
      }
      function Dispatch(_) {
        this._ = _
      }
      function get(type, name) {
        for (var c, i = 0, n = type.length; i < n; ++i)
          if ((c = type[i]).name === name) return c.value
      }
      function set(type, name, callback) {
        for (var i = 0, n = type.length; i < n; ++i)
          if (type[i].name === name) {
            ;((type[i] = noop),
              (type = type.slice(0, i).concat(type.slice(i + 1))))
            break
          }
        return (null != callback && type.push({ name, value: callback }), type)
      }
      Dispatch.prototype = dispatch_dispatch.prototype = {
        constructor: Dispatch,
        on: function (typename, callback) {
          var t,
            _ = this._,
            T = (function dispatch_parseTypenames(typenames, types) {
              return typenames
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var name = '',
                    i = t.indexOf('.')
                  if (
                    (i >= 0 && ((name = t.slice(i + 1)), (t = t.slice(0, i))),
                    t && !types.hasOwnProperty(t))
                  )
                    throw new Error('unknown type: ' + t)
                  return { type: t, name }
                })
            })(typename + '', _),
            i = -1,
            n = T.length
          if (!(arguments.length < 2)) {
            if (null != callback && 'function' != typeof callback)
              throw new Error('invalid callback: ' + callback)
            for (; ++i < n; )
              if ((t = (typename = T[i]).type))
                _[t] = set(_[t], typename.name, callback)
              else if (null == callback)
                for (t in _) _[t] = set(_[t], typename.name, null)
            return this
          }
          for (; ++i < n; )
            if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
              return t
        },
        copy: function () {
          var copy = {},
            _ = this._
          for (var t in _) copy[t] = _[t].slice()
          return new Dispatch(copy)
        },
        call: function (type, that) {
          if ((n = arguments.length - 2) > 0)
            for (var n, t, args = new Array(n), i = 0; i < n; ++i)
              args[i] = arguments[i + 2]
          if (!this._.hasOwnProperty(type))
            throw new Error('unknown type: ' + type)
          for (i = 0, n = (t = this._[type]).length; i < n; ++i)
            t[i].value.apply(that, args)
        },
        apply: function (type, that, args) {
          if (!this._.hasOwnProperty(type))
            throw new Error('unknown type: ' + type)
          for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
            t[i].value.apply(that, args)
        },
      }
      const src_dispatch = dispatch_dispatch
      var taskHead,
        taskTail,
        timer_frame = 0,
        timeout = 0,
        interval = 0,
        clockLast = 0,
        clockNow = 0,
        clockSkew = 0,
        clock =
          'object' == typeof performance && performance.now
            ? performance
            : Date,
        setFrame =
          'object' == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (f) {
                setTimeout(f, 17)
              }
      function now() {
        return (
          clockNow || (setFrame(clearNow), (clockNow = clock.now() + clockSkew))
        )
      }
      function clearNow() {
        clockNow = 0
      }
      function Timer() {
        this._call = this._time = this._next = null
      }
      function timer(callback, delay, time) {
        var t = new Timer()
        return (t.restart(callback, delay, time), t)
      }
      function wake() {
        ;((clockNow = (clockLast = clock.now()) + clockSkew),
          (timer_frame = timeout = 0))
        try {
          !(function timerFlush() {
            ;(now(), ++timer_frame)
            for (var e, t = taskHead; t; )
              ((e = clockNow - t._time) >= 0 && t._call.call(void 0, e),
                (t = t._next))
            --timer_frame
          })()
        } finally {
          ;((timer_frame = 0),
            (function nap() {
              var t0,
                t2,
                t1 = taskHead,
                time = 1 / 0
              for (; t1; )
                t1._call
                  ? (time > t1._time && (time = t1._time),
                    (t0 = t1),
                    (t1 = t1._next))
                  : ((t2 = t1._next),
                    (t1._next = null),
                    (t1 = t0 ? (t0._next = t2) : (taskHead = t2)))
              ;((taskTail = t0), sleep(time))
            })(),
            (clockNow = 0))
        }
      }
      function poke() {
        var now = clock.now(),
          delay = now - clockLast
        delay > 1e3 && ((clockSkew -= delay), (clockLast = now))
      }
      function sleep(time) {
        timer_frame ||
          (timeout && (timeout = clearTimeout(timeout)),
          time - clockNow > 24
            ? (time < 1 / 0 &&
                (timeout = setTimeout(wake, time - clock.now() - clockSkew)),
              interval && (interval = clearInterval(interval)))
            : (interval ||
                ((clockLast = clock.now()),
                (interval = setInterval(poke, 1e3))),
              (timer_frame = 1),
              setFrame(wake)))
      }
      function src_timeout(callback, delay, time) {
        var t = new Timer()
        return (
          (delay = null == delay ? 0 : +delay),
          t.restart(
            (elapsed) => {
              ;(t.stop(), callback(elapsed + delay))
            },
            delay,
            time
          ),
          t
        )
      }
      Timer.prototype = timer.prototype = {
        constructor: Timer,
        restart: function (callback, delay, time) {
          if ('function' != typeof callback)
            throw new TypeError('callback is not a function')
          ;((time =
            (null == time ? now() : +time) + (null == delay ? 0 : +delay)),
            this._next ||
              taskTail === this ||
              (taskTail ? (taskTail._next = this) : (taskHead = this),
              (taskTail = this)),
            (this._call = callback),
            (this._time = time),
            sleep())
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), sleep())
        },
      }
      var emptyOn = src_dispatch('start', 'end', 'cancel', 'interrupt'),
        emptyTween = [],
        STARTING = 2,
        ENDING = 5,
        ENDED = 6
      function schedule(node, name, id, index, group, timing) {
        var schedules = node.__transition
        if (schedules) {
          if (id in schedules) return
        } else node.__transition = {}
        !(function create(node, id, self) {
          var tween,
            schedules = node.__transition
          function schedule(elapsed) {
            ;((self.state = 1),
              self.timer.restart(start, self.delay, self.time),
              self.delay <= elapsed && start(elapsed - self.delay))
          }
          function start(elapsed) {
            var i, j, n, o
            if (1 !== self.state) return stop()
            for (i in schedules)
              if ((o = schedules[i]).name === self.name) {
                if (3 === o.state) return src_timeout(start)
                4 === o.state
                  ? ((o.state = ENDED),
                    o.timer.stop(),
                    o.on.call(
                      'interrupt',
                      node,
                      node.__data__,
                      o.index,
                      o.group
                    ),
                    delete schedules[i])
                  : +i < id &&
                    ((o.state = ENDED),
                    o.timer.stop(),
                    o.on.call('cancel', node, node.__data__, o.index, o.group),
                    delete schedules[i])
              }
            if (
              (src_timeout(function () {
                3 === self.state &&
                  ((self.state = 4),
                  self.timer.restart(tick, self.delay, self.time),
                  tick(elapsed))
              }),
              (self.state = STARTING),
              self.on.call(
                'start',
                node,
                node.__data__,
                self.index,
                self.group
              ),
              self.state === STARTING)
            ) {
              for (
                self.state = 3,
                  tween = new Array((n = self.tween.length)),
                  i = 0,
                  j = -1;
                i < n;
                ++i
              )
                (o = self.tween[i].value.call(
                  node,
                  node.__data__,
                  self.index,
                  self.group
                )) && (tween[++j] = o)
              tween.length = j + 1
            }
          }
          function tick(elapsed) {
            for (
              var t =
                  elapsed < self.duration
                    ? self.ease.call(null, elapsed / self.duration)
                    : (self.timer.restart(stop), (self.state = ENDING), 1),
                i = -1,
                n = tween.length;
              ++i < n;

            )
              tween[i].call(node, t)
            self.state === ENDING &&
              (self.on.call('end', node, node.__data__, self.index, self.group),
              stop())
          }
          function stop() {
            for (var i in ((self.state = ENDED),
            self.timer.stop(),
            delete schedules[id],
            schedules))
              return
            delete node.__transition
          }
          ;((schedules[id] = self),
            (self.timer = timer(schedule, 0, self.time)))
        })(node, id, {
          name,
          index,
          group,
          on: emptyOn,
          tween: emptyTween,
          time: timing.time,
          delay: timing.delay,
          duration: timing.duration,
          ease: timing.ease,
          timer: null,
          state: 0,
        })
      }
      function init(node, id) {
        var schedule = schedule_get(node, id)
        if (schedule.state > 0) throw new Error('too late; already scheduled')
        return schedule
      }
      function schedule_set(node, id) {
        var schedule = schedule_get(node, id)
        if (schedule.state > 3) throw new Error('too late; already running')
        return schedule
      }
      function schedule_get(node, id) {
        var schedule = node.__transition
        if (!schedule || !(schedule = schedule[id]))
          throw new Error('transition not found')
        return schedule
      }
      function src_interrupt(node, name) {
        var schedule,
          active,
          i,
          schedules = node.__transition,
          empty = !0
        if (schedules) {
          for (i in ((name = null == name ? null : name + ''), schedules))
            (schedule = schedules[i]).name === name
              ? ((active =
                  schedule.state > STARTING && schedule.state < ENDING),
                (schedule.state = ENDED),
                schedule.timer.stop(),
                schedule.on.call(
                  active ? 'interrupt' : 'cancel',
                  node,
                  node.__data__,
                  schedule.index,
                  schedule.group
                ),
                delete schedules[i])
              : (empty = !1)
          empty && delete node.__transition
        }
      }
      function number(a, b) {
        return (
          (a = +a),
          (b = +b),
          function (t) {
            return a * (1 - t) + b * t
          }
        )
      }
      var svgNode,
        degrees = 180 / Math.PI,
        identity = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        }
      function decompose(a, b, c, d, e, f) {
        var scaleX, scaleY, skewX
        return (
          (scaleX = Math.sqrt(a * a + b * b)) && ((a /= scaleX), (b /= scaleX)),
          (skewX = a * c + b * d) && ((c -= a * skewX), (d -= b * skewX)),
          (scaleY = Math.sqrt(c * c + d * d)) &&
            ((c /= scaleY), (d /= scaleY), (skewX /= scaleY)),
          a * d < b * c &&
            ((a = -a), (b = -b), (skewX = -skewX), (scaleX = -scaleX)),
          {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX,
            scaleY,
          }
        )
      }
      function interpolateTransform(parse, pxComma, pxParen, degParen) {
        function pop(s) {
          return s.length ? s.pop() + ' ' : ''
        }
        return function (a, b) {
          var s = [],
            q = []
          return (
            (a = parse(a)),
            (b = parse(b)),
            (function translate(xa, ya, xb, yb, s, q) {
              if (xa !== xb || ya !== yb) {
                var i = s.push('translate(', null, pxComma, null, pxParen)
                q.push(
                  { i: i - 4, x: number(xa, xb) },
                  { i: i - 2, x: number(ya, yb) }
                )
              } else
                (xb || yb) && s.push('translate(' + xb + pxComma + yb + pxParen)
            })(a.translateX, a.translateY, b.translateX, b.translateY, s, q),
            (function rotate(a, b, s, q) {
              a !== b
                ? (a - b > 180 ? (b += 360) : b - a > 180 && (a += 360),
                  q.push({
                    i: s.push(pop(s) + 'rotate(', null, degParen) - 2,
                    x: number(a, b),
                  }))
                : b && s.push(pop(s) + 'rotate(' + b + degParen)
            })(a.rotate, b.rotate, s, q),
            (function skewX(a, b, s, q) {
              a !== b
                ? q.push({
                    i: s.push(pop(s) + 'skewX(', null, degParen) - 2,
                    x: number(a, b),
                  })
                : b && s.push(pop(s) + 'skewX(' + b + degParen)
            })(a.skewX, b.skewX, s, q),
            (function scale(xa, ya, xb, yb, s, q) {
              if (xa !== xb || ya !== yb) {
                var i = s.push(pop(s) + 'scale(', null, ',', null, ')')
                q.push(
                  { i: i - 4, x: number(xa, xb) },
                  { i: i - 2, x: number(ya, yb) }
                )
              } else
                (1 === xb && 1 === yb) ||
                  s.push(pop(s) + 'scale(' + xb + ',' + yb + ')')
            })(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q),
            (a = b = null),
            function (t) {
              for (var o, i = -1, n = q.length; ++i < n; )
                s[(o = q[i]).i] = o.x(t)
              return s.join('')
            }
          )
        }
      }
      var interpolateTransformCss = interpolateTransform(
          function parseCss(value) {
            const m = new (
              'function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(value + '')
            return m.isIdentity
              ? identity
              : decompose(m.a, m.b, m.c, m.d, m.e, m.f)
          },
          'px, ',
          'px)',
          'deg)'
        ),
        interpolateTransformSvg = interpolateTransform(
          function parseSvg(value) {
            return null == value
              ? identity
              : (svgNode ||
                  (svgNode = document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'g'
                  )),
                svgNode.setAttribute('transform', value),
                (value = svgNode.transform.baseVal.consolidate())
                  ? decompose(
                      (value = value.matrix).a,
                      value.b,
                      value.c,
                      value.d,
                      value.e,
                      value.f
                    )
                  : identity)
          },
          ', ',
          ')',
          ')'
        )
      function tweenRemove(id, name) {
        var tween0, tween1
        return function () {
          var schedule = schedule_set(this, id),
            tween = schedule.tween
          if (tween !== tween0)
            for (var i = 0, n = (tween1 = tween0 = tween).length; i < n; ++i)
              if (tween1[i].name === name) {
                ;(tween1 = tween1.slice()).splice(i, 1)
                break
              }
          schedule.tween = tween1
        }
      }
      function tweenFunction(id, name, value) {
        var tween0, tween1
        if ('function' != typeof value) throw new Error()
        return function () {
          var schedule = schedule_set(this, id),
            tween = schedule.tween
          if (tween !== tween0) {
            tween1 = (tween0 = tween).slice()
            for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i)
              if (tween1[i].name === name) {
                tween1[i] = t
                break
              }
            i === n && tween1.push(t)
          }
          schedule.tween = tween1
        }
      }
      function tweenValue(transition, name, value) {
        var id = transition._id
        return (
          transition.each(function () {
            var schedule = schedule_set(this, id)
            ;(schedule.value || (schedule.value = {}))[name] = value.apply(
              this,
              arguments
            )
          }),
          function (node) {
            return schedule_get(node, id).value[name]
          }
        )
      }
      function src_define(constructor, factory, prototype) {
        ;((constructor.prototype = factory.prototype = prototype),
          (prototype.constructor = constructor))
      }
      function extend(parent, definition) {
        var prototype = Object.create(parent.prototype)
        for (var key in definition) prototype[key] = definition[key]
        return prototype
      }
      function Color() {}
      var brighter = 1 / 0.7,
        reI = '\\s*([+-]?\\d+)\\s*',
        reN = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        reP = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        reHex = /^#([0-9a-f]{3,8})$/,
        reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
        reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
        reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
        reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
        reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
        reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),
        named = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        }
      function color_formatHex() {
        return this.rgb().formatHex()
      }
      function color_formatRgb() {
        return this.rgb().formatRgb()
      }
      function color(format) {
        var m, l
        return (
          (format = (format + '').trim().toLowerCase()),
          (m = reHex.exec(format))
            ? ((l = m[1].length),
              (m = parseInt(m[1], 16)),
              6 === l
                ? rgbn(m)
                : 3 === l
                  ? new Rgb(
                      ((m >> 8) & 15) | ((m >> 4) & 240),
                      ((m >> 4) & 15) | (240 & m),
                      ((15 & m) << 4) | (15 & m),
                      1
                    )
                  : 8 === l
                    ? rgba(
                        (m >> 24) & 255,
                        (m >> 16) & 255,
                        (m >> 8) & 255,
                        (255 & m) / 255
                      )
                    : 4 === l
                      ? rgba(
                          ((m >> 12) & 15) | ((m >> 8) & 240),
                          ((m >> 8) & 15) | ((m >> 4) & 240),
                          ((m >> 4) & 15) | (240 & m),
                          (((15 & m) << 4) | (15 & m)) / 255
                        )
                      : null)
            : (m = reRgbInteger.exec(format))
              ? new Rgb(m[1], m[2], m[3], 1)
              : (m = reRgbPercent.exec(format))
                ? new Rgb(
                    (255 * m[1]) / 100,
                    (255 * m[2]) / 100,
                    (255 * m[3]) / 100,
                    1
                  )
                : (m = reRgbaInteger.exec(format))
                  ? rgba(m[1], m[2], m[3], m[4])
                  : (m = reRgbaPercent.exec(format))
                    ? rgba(
                        (255 * m[1]) / 100,
                        (255 * m[2]) / 100,
                        (255 * m[3]) / 100,
                        m[4]
                      )
                    : (m = reHslPercent.exec(format))
                      ? hsla(m[1], m[2] / 100, m[3] / 100, 1)
                      : (m = reHslaPercent.exec(format))
                        ? hsla(m[1], m[2] / 100, m[3] / 100, m[4])
                        : named.hasOwnProperty(format)
                          ? rgbn(named[format])
                          : 'transparent' === format
                            ? new Rgb(NaN, NaN, NaN, 0)
                            : null
        )
      }
      function rgbn(n) {
        return new Rgb((n >> 16) & 255, (n >> 8) & 255, 255 & n, 1)
      }
      function rgba(r, g, b, a) {
        return (a <= 0 && (r = g = b = NaN), new Rgb(r, g, b, a))
      }
      function color_rgb(r, g, b, opacity) {
        return 1 === arguments.length
          ? (function rgbConvert(o) {
              return (
                o instanceof Color || (o = color(o)),
                o ? new Rgb((o = o.rgb()).r, o.g, o.b, o.opacity) : new Rgb()
              )
            })(r)
          : new Rgb(r, g, b, null == opacity ? 1 : opacity)
      }
      function Rgb(r, g, b, opacity) {
        ;((this.r = +r),
          (this.g = +g),
          (this.b = +b),
          (this.opacity = +opacity))
      }
      function rgb_formatHex() {
        return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`
      }
      function rgb_formatRgb() {
        const a = clampa(this.opacity)
        return `${1 === a ? 'rgb(' : 'rgba('}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1 === a ? ')' : `, ${a})`}`
      }
      function clampa(opacity) {
        return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity))
      }
      function clampi(value) {
        return Math.max(0, Math.min(255, Math.round(value) || 0))
      }
      function hex(value) {
        return ((value = clampi(value)) < 16 ? '0' : '') + value.toString(16)
      }
      function hsla(h, s, l, a) {
        return (
          a <= 0
            ? (h = s = l = NaN)
            : l <= 0 || l >= 1
              ? (h = s = NaN)
              : s <= 0 && (h = NaN),
          new Hsl(h, s, l, a)
        )
      }
      function hslConvert(o) {
        if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity)
        if ((o instanceof Color || (o = color(o)), !o)) return new Hsl()
        if (o instanceof Hsl) return o
        var r = (o = o.rgb()).r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2
        return (
          s
            ? ((h =
                r === max
                  ? (g - b) / s + 6 * (g < b)
                  : g === max
                    ? (b - r) / s + 2
                    : (r - g) / s + 4),
              (s /= l < 0.5 ? max + min : 2 - max - min),
              (h *= 60))
            : (s = l > 0 && l < 1 ? 0 : h),
          new Hsl(h, s, l, o.opacity)
        )
      }
      function Hsl(h, s, l, opacity) {
        ;((this.h = +h),
          (this.s = +s),
          (this.l = +l),
          (this.opacity = +opacity))
      }
      function clamph(value) {
        return (value = (value || 0) % 360) < 0 ? value + 360 : value
      }
      function clampt(value) {
        return Math.max(0, Math.min(1, value || 0))
      }
      function hsl2rgb(h, m1, m2) {
        return (
          255 *
          (h < 60
            ? m1 + ((m2 - m1) * h) / 60
            : h < 180
              ? m2
              : h < 240
                ? m1 + ((m2 - m1) * (240 - h)) / 60
                : m1)
        )
      }
      function basis(t1, v0, v1, v2, v3) {
        var t2 = t1 * t1,
          t3 = t2 * t1
        return (
          ((1 - 3 * t1 + 3 * t2 - t3) * v0 +
            (4 - 6 * t2 + 3 * t3) * v1 +
            (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 +
            t3 * v3) /
          6
        )
      }
      ;(src_define(Color, color, {
        copy(channels) {
          return Object.assign(new this.constructor(), this, channels)
        },
        displayable() {
          return this.rgb().displayable()
        },
        hex: color_formatHex,
        formatHex: color_formatHex,
        formatHex8: function color_formatHex8() {
          return this.rgb().formatHex8()
        },
        formatHsl: function color_formatHsl() {
          return hslConvert(this).formatHsl()
        },
        formatRgb: color_formatRgb,
        toString: color_formatRgb,
      }),
        src_define(
          Rgb,
          color_rgb,
          extend(Color, {
            brighter(k) {
              return (
                (k = null == k ? brighter : Math.pow(brighter, k)),
                new Rgb(this.r * k, this.g * k, this.b * k, this.opacity)
              )
            },
            darker(k) {
              return (
                (k = null == k ? 0.7 : Math.pow(0.7, k)),
                new Rgb(this.r * k, this.g * k, this.b * k, this.opacity)
              )
            },
            rgb() {
              return this
            },
            clamp() {
              return new Rgb(
                clampi(this.r),
                clampi(this.g),
                clampi(this.b),
                clampa(this.opacity)
              )
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
            hex: rgb_formatHex,
            formatHex: rgb_formatHex,
            formatHex8: function rgb_formatHex8() {
              return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`
            },
            formatRgb: rgb_formatRgb,
            toString: rgb_formatRgb,
          })
        ),
        src_define(
          Hsl,
          function hsl(h, s, l, opacity) {
            return 1 === arguments.length
              ? hslConvert(h)
              : new Hsl(h, s, l, null == opacity ? 1 : opacity)
          },
          extend(Color, {
            brighter(k) {
              return (
                (k = null == k ? brighter : Math.pow(brighter, k)),
                new Hsl(this.h, this.s, this.l * k, this.opacity)
              )
            },
            darker(k) {
              return (
                (k = null == k ? 0.7 : Math.pow(0.7, k)),
                new Hsl(this.h, this.s, this.l * k, this.opacity)
              )
            },
            rgb() {
              var h = (this.h % 360) + 360 * (this.h < 0),
                s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
                l = this.l,
                m2 = l + (l < 0.5 ? l : 1 - l) * s,
                m1 = 2 * l - m2
              return new Rgb(
                hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
                hsl2rgb(h, m1, m2),
                hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
                this.opacity
              )
            },
            clamp() {
              return new Hsl(
                clamph(this.h),
                clampt(this.s),
                clampt(this.l),
                clampa(this.opacity)
              )
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
            formatHsl() {
              const a = clampa(this.opacity)
              return `${1 === a ? 'hsl(' : 'hsla('}${clamph(this.h)}, ${100 * clampt(this.s)}%, ${100 * clampt(this.l)}%${1 === a ? ')' : `, ${a})`}`
            },
          })
        ))
      const d3_interpolate_src_constant = (x) => () => x
      function linear(a, d) {
        return function (t) {
          return a + t * d
        }
      }
      function gamma(y) {
        return 1 === (y = +y)
          ? nogamma
          : function (a, b) {
              return b - a
                ? (function exponential(a, b, y) {
                    return (
                      (a = Math.pow(a, y)),
                      (b = Math.pow(b, y) - a),
                      (y = 1 / y),
                      function (t) {
                        return Math.pow(a + t * b, y)
                      }
                    )
                  })(a, b, y)
                : d3_interpolate_src_constant(isNaN(a) ? b : a)
            }
      }
      function nogamma(a, b) {
        var d = b - a
        return d ? linear(a, d) : d3_interpolate_src_constant(isNaN(a) ? b : a)
      }
      const rgb = (function rgbGamma(y) {
        var color = gamma(y)
        function rgb(start, end) {
          var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity)
          return function (t) {
            return (
              (start.r = r(t)),
              (start.g = g(t)),
              (start.b = b(t)),
              (start.opacity = opacity(t)),
              start + ''
            )
          }
        }
        return ((rgb.gamma = rgbGamma), rgb)
      })(1)
      function rgbSpline(spline) {
        return function (colors) {
          var i,
            color,
            n = colors.length,
            r = new Array(n),
            g = new Array(n),
            b = new Array(n)
          for (i = 0; i < n; ++i)
            ((color = color_rgb(colors[i])),
              (r[i] = color.r || 0),
              (g[i] = color.g || 0),
              (b[i] = color.b || 0))
          return (
            (r = spline(r)),
            (g = spline(g)),
            (b = spline(b)),
            (color.opacity = 1),
            function (t) {
              return (
                (color.r = r(t)),
                (color.g = g(t)),
                (color.b = b(t)),
                color + ''
              )
            }
          )
        }
      }
      ;(rgbSpline(function src_basis(values) {
        var n = values.length - 1
        return function (t) {
          var i =
              t <= 0 ? (t = 0) : t >= 1 ? ((t = 1), n - 1) : Math.floor(t * n),
            v1 = values[i],
            v2 = values[i + 1],
            v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
            v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1
          return basis((t - i / n) * n, v0, v1, v2, v3)
        }
      }),
        rgbSpline(function basisClosed(values) {
          var n = values.length
          return function (t) {
            var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
              v0 = values[(i + n - 1) % n],
              v1 = values[i % n],
              v2 = values[(i + 1) % n],
              v3 = values[(i + 2) % n]
            return basis((t - i / n) * n, v0, v1, v2, v3)
          }
        }))
      var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        reB = new RegExp(reA.source, 'g')
      function string(a, b) {
        var am,
          bm,
          bs,
          bi = (reA.lastIndex = reB.lastIndex = 0),
          i = -1,
          s = [],
          q = []
        for (a += '', b += ''; (am = reA.exec(a)) && (bm = reB.exec(b)); )
          ((bs = bm.index) > bi &&
            ((bs = b.slice(bi, bs)), s[i] ? (s[i] += bs) : (s[++i] = bs)),
            (am = am[0]) === (bm = bm[0])
              ? s[i]
                ? (s[i] += bm)
                : (s[++i] = bm)
              : ((s[++i] = null), q.push({ i, x: number(am, bm) })),
            (bi = reB.lastIndex))
        return (
          bi < b.length &&
            ((bs = b.slice(bi)), s[i] ? (s[i] += bs) : (s[++i] = bs)),
          s.length < 2
            ? q[0]
              ? (function one(b) {
                  return function (t) {
                    return b(t) + ''
                  }
                })(q[0].x)
              : (function zero(b) {
                  return function () {
                    return b
                  }
                })(b)
            : ((b = q.length),
              function (t) {
                for (var o, i = 0; i < b; ++i) s[(o = q[i]).i] = o.x(t)
                return s.join('')
              })
        )
      }
      function transition_interpolate(a, b) {
        var c
        return (
          'number' == typeof b
            ? number
            : b instanceof color
              ? rgb
              : (c = color(b))
                ? ((b = c), rgb)
                : string
        )(a, b)
      }
      function attr_attrRemove(name) {
        return function () {
          this.removeAttribute(name)
        }
      }
      function attr_attrRemoveNS(fullname) {
        return function () {
          this.removeAttributeNS(fullname.space, fullname.local)
        }
      }
      function attr_attrConstant(name, interpolate, value1) {
        var string00,
          interpolate0,
          string1 = value1 + ''
        return function () {
          var string0 = this.getAttribute(name)
          return string0 === string1
            ? null
            : string0 === string00
              ? interpolate0
              : (interpolate0 = interpolate((string00 = string0), value1))
        }
      }
      function attr_attrConstantNS(fullname, interpolate, value1) {
        var string00,
          interpolate0,
          string1 = value1 + ''
        return function () {
          var string0 = this.getAttributeNS(fullname.space, fullname.local)
          return string0 === string1
            ? null
            : string0 === string00
              ? interpolate0
              : (interpolate0 = interpolate((string00 = string0), value1))
        }
      }
      function attr_attrFunction(name, interpolate, value) {
        var string00, string10, interpolate0
        return function () {
          var string0,
            string1,
            value1 = value(this)
          if (null != value1)
            return (string0 = this.getAttribute(name)) ===
              (string1 = value1 + '')
              ? null
              : string0 === string00 && string1 === string10
                ? interpolate0
                : ((string10 = string1),
                  (interpolate0 = interpolate((string00 = string0), value1)))
          this.removeAttribute(name)
        }
      }
      function attr_attrFunctionNS(fullname, interpolate, value) {
        var string00, string10, interpolate0
        return function () {
          var string0,
            string1,
            value1 = value(this)
          if (null != value1)
            return (string0 = this.getAttributeNS(
              fullname.space,
              fullname.local
            )) === (string1 = value1 + '')
              ? null
              : string0 === string00 && string1 === string10
                ? interpolate0
                : ((string10 = string1),
                  (interpolate0 = interpolate((string00 = string0), value1)))
          this.removeAttributeNS(fullname.space, fullname.local)
        }
      }
      function attrTweenNS(fullname, value) {
        var t0, i0
        function tween() {
          var i = value.apply(this, arguments)
          return (
            i !== i0 &&
              (t0 =
                (i0 = i) &&
                (function attrInterpolateNS(fullname, i) {
                  return function (t) {
                    this.setAttributeNS(
                      fullname.space,
                      fullname.local,
                      i.call(this, t)
                    )
                  }
                })(fullname, i)),
            t0
          )
        }
        return ((tween._value = value), tween)
      }
      function attrTween(name, value) {
        var t0, i0
        function tween() {
          var i = value.apply(this, arguments)
          return (
            i !== i0 &&
              (t0 =
                (i0 = i) &&
                (function attrInterpolate(name, i) {
                  return function (t) {
                    this.setAttribute(name, i.call(this, t))
                  }
                })(name, i)),
            t0
          )
        }
        return ((tween._value = value), tween)
      }
      function delayFunction(id, value) {
        return function () {
          init(this, id).delay = +value.apply(this, arguments)
        }
      }
      function delayConstant(id, value) {
        return (
          (value = +value),
          function () {
            init(this, id).delay = value
          }
        )
      }
      function durationFunction(id, value) {
        return function () {
          schedule_set(this, id).duration = +value.apply(this, arguments)
        }
      }
      function durationConstant(id, value) {
        return (
          (value = +value),
          function () {
            schedule_set(this, id).duration = value
          }
        )
      }
      var selection_Selection = src_selection.prototype.constructor
      function style_styleRemove(name) {
        return function () {
          this.style.removeProperty(name)
        }
      }
      var id = 0
      function Transition(groups, parents, name, id) {
        ;((this._groups = groups),
          (this._parents = parents),
          (this._name = name),
          (this._id = id))
      }
      function newId() {
        return ++id
      }
      var selection_prototype = src_selection.prototype
      Transition.prototype = function transition_transition(name) {
        return src_selection().transition(name)
      }.prototype = {
        constructor: Transition,
        select: function transition_select(select) {
          var name = this._name,
            id = this._id
          'function' != typeof select && (select = selector(select))
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                subnode,
                group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = new Array(n)),
                i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                (subnode = select.call(node, node.__data__, i, group)) &&
                ('__data__' in node && (subnode.__data__ = node.__data__),
                (subgroup[i] = subnode),
                schedule(
                  subgroup[i],
                  name,
                  id,
                  i,
                  subgroup,
                  schedule_get(node, id)
                ))
          return new Transition(subgroups, this._parents, name, id)
        },
        selectAll: function transition_selectAll(select) {
          var name = this._name,
            id = this._id
          'function' != typeof select && (select = selectorAll(select))
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = [],
              parents = [],
              j = 0;
            j < m;
            ++j
          )
            for (
              var node, group = groups[j], n = group.length, i = 0;
              i < n;
              ++i
            )
              if ((node = group[i])) {
                for (
                  var child,
                    children = select.call(node, node.__data__, i, group),
                    inherit = schedule_get(node, id),
                    k = 0,
                    l = children.length;
                  k < l;
                  ++k
                )
                  (child = children[k]) &&
                    schedule(child, name, id, k, children, inherit)
                ;(subgroups.push(children), parents.push(node))
              }
          return new Transition(subgroups, parents, name, id)
        },
        selectChild: selection_prototype.selectChild,
        selectChildren: selection_prototype.selectChildren,
        filter: function transition_filter(match) {
          'function' != typeof match && (match = matcher(match))
          for (
            var groups = this._groups,
              m = groups.length,
              subgroups = new Array(m),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                group = groups[j],
                n = group.length,
                subgroup = (subgroups[j] = []),
                i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                match.call(node, node.__data__, i, group) &&
                subgroup.push(node)
          return new Transition(subgroups, this._parents, this._name, this._id)
        },
        merge: function transition_merge(transition) {
          if (transition._id !== this._id) throw new Error()
          for (
            var groups0 = this._groups,
              groups1 = transition._groups,
              m0 = groups0.length,
              m1 = groups1.length,
              m = Math.min(m0, m1),
              merges = new Array(m0),
              j = 0;
            j < m;
            ++j
          )
            for (
              var node,
                group0 = groups0[j],
                group1 = groups1[j],
                n = group0.length,
                merge = (merges[j] = new Array(n)),
                i = 0;
              i < n;
              ++i
            )
              (node = group0[i] || group1[i]) && (merge[i] = node)
          for (; j < m0; ++j) merges[j] = groups0[j]
          return new Transition(merges, this._parents, this._name, this._id)
        },
        selection: function transition_selection() {
          return new selection_Selection(this._groups, this._parents)
        },
        transition: function transition() {
          for (
            var name = this._name,
              id0 = this._id,
              id1 = newId(),
              groups = this._groups,
              m = groups.length,
              j = 0;
            j < m;
            ++j
          )
            for (
              var node, group = groups[j], n = group.length, i = 0;
              i < n;
              ++i
            )
              if ((node = group[i])) {
                var inherit = schedule_get(node, id0)
                schedule(node, name, id1, i, group, {
                  time: inherit.time + inherit.delay + inherit.duration,
                  delay: 0,
                  duration: inherit.duration,
                  ease: inherit.ease,
                })
              }
          return new Transition(groups, this._parents, name, id1)
        },
        call: selection_prototype.call,
        nodes: selection_prototype.nodes,
        node: selection_prototype.node,
        size: selection_prototype.size,
        empty: selection_prototype.empty,
        each: selection_prototype.each,
        on: function transition_on(name, listener) {
          var id = this._id
          return arguments.length < 2
            ? schedule_get(this.node(), id).on.on(name)
            : this.each(
                (function onFunction(id, name, listener) {
                  var on0,
                    on1,
                    sit = (function start(name) {
                      return (name + '')
                        .trim()
                        .split(/^|\s+/)
                        .every(function (t) {
                          var i = t.indexOf('.')
                          return (
                            i >= 0 && (t = t.slice(0, i)),
                            !t || 'start' === t
                          )
                        })
                    })(name)
                      ? init
                      : schedule_set
                  return function () {
                    var schedule = sit(this, id),
                      on = schedule.on
                    ;(on !== on0 &&
                      (on1 = (on0 = on).copy()).on(name, listener),
                      (schedule.on = on1))
                  }
                })(id, name, listener)
              )
        },
        attr: function transition_attr(name, value) {
          var fullname = namespace(name),
            i =
              'transform' === fullname
                ? interpolateTransformSvg
                : transition_interpolate
          return this.attrTween(
            name,
            'function' == typeof value
              ? (fullname.local ? attr_attrFunctionNS : attr_attrFunction)(
                  fullname,
                  i,
                  tweenValue(this, 'attr.' + name, value)
                )
              : null == value
                ? (fullname.local ? attr_attrRemoveNS : attr_attrRemove)(
                    fullname
                  )
                : (fullname.local ? attr_attrConstantNS : attr_attrConstant)(
                    fullname,
                    i,
                    value
                  )
          )
        },
        attrTween: function transition_attrTween(name, value) {
          var key = 'attr.' + name
          if (arguments.length < 2) return (key = this.tween(key)) && key._value
          if (null == value) return this.tween(key, null)
          if ('function' != typeof value) throw new Error()
          var fullname = namespace(name)
          return this.tween(
            key,
            (fullname.local ? attrTweenNS : attrTween)(fullname, value)
          )
        },
        style: function transition_style(name, value, priority) {
          var i =
            'transform' == (name += '')
              ? interpolateTransformCss
              : transition_interpolate
          return null == value
            ? this.styleTween(
                name,
                (function styleNull(name, interpolate) {
                  var string00, string10, interpolate0
                  return function () {
                    var string0 = styleValue(this, name),
                      string1 =
                        (this.style.removeProperty(name),
                        styleValue(this, name))
                    return string0 === string1
                      ? null
                      : string0 === string00 && string1 === string10
                        ? interpolate0
                        : (interpolate0 = interpolate(
                            (string00 = string0),
                            (string10 = string1)
                          ))
                  }
                })(name, i)
              ).on('end.style.' + name, style_styleRemove(name))
            : 'function' == typeof value
              ? this.styleTween(
                  name,
                  (function style_styleFunction(name, interpolate, value) {
                    var string00, string10, interpolate0
                    return function () {
                      var string0 = styleValue(this, name),
                        value1 = value(this),
                        string1 = value1 + ''
                      return (
                        null == value1 &&
                          (this.style.removeProperty(name),
                          (string1 = value1 = styleValue(this, name))),
                        string0 === string1
                          ? null
                          : string0 === string00 && string1 === string10
                            ? interpolate0
                            : ((string10 = string1),
                              (interpolate0 = interpolate(
                                (string00 = string0),
                                value1
                              )))
                      )
                    }
                  })(name, i, tweenValue(this, 'style.' + name, value))
                ).each(
                  (function styleMaybeRemove(id, name) {
                    var on0,
                      on1,
                      listener0,
                      remove,
                      key = 'style.' + name,
                      event = 'end.' + key
                    return function () {
                      var schedule = schedule_set(this, id),
                        on = schedule.on,
                        listener =
                          null == schedule.value[key]
                            ? remove || (remove = style_styleRemove(name))
                            : void 0
                      ;((on === on0 && listener0 === listener) ||
                        (on1 = (on0 = on).copy()).on(
                          event,
                          (listener0 = listener)
                        ),
                        (schedule.on = on1))
                    }
                  })(this._id, name)
                )
              : this.styleTween(
                  name,
                  (function style_styleConstant(name, interpolate, value1) {
                    var string00,
                      interpolate0,
                      string1 = value1 + ''
                    return function () {
                      var string0 = styleValue(this, name)
                      return string0 === string1
                        ? null
                        : string0 === string00
                          ? interpolate0
                          : (interpolate0 = interpolate(
                              (string00 = string0),
                              value1
                            ))
                    }
                  })(name, i, value),
                  priority
                ).on('end.style.' + name, null)
        },
        styleTween: function transition_styleTween(name, value, priority) {
          var key = 'style.' + (name += '')
          if (arguments.length < 2) return (key = this.tween(key)) && key._value
          if (null == value) return this.tween(key, null)
          if ('function' != typeof value) throw new Error()
          return this.tween(
            key,
            (function styleTween(name, value, priority) {
              var t, i0
              function tween() {
                var i = value.apply(this, arguments)
                return (
                  i !== i0 &&
                    (t =
                      (i0 = i) &&
                      (function styleInterpolate(name, i, priority) {
                        return function (t) {
                          this.style.setProperty(
                            name,
                            i.call(this, t),
                            priority
                          )
                        }
                      })(name, i, priority)),
                  t
                )
              }
              return ((tween._value = value), tween)
            })(name, value, null == priority ? '' : priority)
          )
        },
        text: function transition_text(value) {
          return this.tween(
            'text',
            'function' == typeof value
              ? (function text_textFunction(value) {
                  return function () {
                    var value1 = value(this)
                    this.textContent = null == value1 ? '' : value1
                  }
                })(tweenValue(this, 'text', value))
              : (function text_textConstant(value) {
                  return function () {
                    this.textContent = value
                  }
                })(null == value ? '' : value + '')
          )
        },
        textTween: function transition_textTween(value) {
          var key = 'text'
          if (arguments.length < 1) return (key = this.tween(key)) && key._value
          if (null == value) return this.tween(key, null)
          if ('function' != typeof value) throw new Error()
          return this.tween(
            key,
            (function textTween(value) {
              var t0, i0
              function tween() {
                var i = value.apply(this, arguments)
                return (
                  i !== i0 &&
                    (t0 =
                      (i0 = i) &&
                      (function textInterpolate(i) {
                        return function (t) {
                          this.textContent = i.call(this, t)
                        }
                      })(i)),
                  t0
                )
              }
              return ((tween._value = value), tween)
            })(value)
          )
        },
        remove: function transition_remove() {
          return this.on(
            'end.remove',
            (function removeFunction(id) {
              return function () {
                var parent = this.parentNode
                for (var i in this.__transition) if (+i !== id) return
                parent && parent.removeChild(this)
              }
            })(this._id)
          )
        },
        tween: function tween(name, value) {
          var id = this._id
          if (((name += ''), arguments.length < 2)) {
            for (
              var t,
                tween = schedule_get(this.node(), id).tween,
                i = 0,
                n = tween.length;
              i < n;
              ++i
            )
              if ((t = tween[i]).name === name) return t.value
            return null
          }
          return this.each(
            (null == value ? tweenRemove : tweenFunction)(id, name, value)
          )
        },
        delay: function delay(value) {
          var id = this._id
          return arguments.length
            ? this.each(
                ('function' == typeof value ? delayFunction : delayConstant)(
                  id,
                  value
                )
              )
            : schedule_get(this.node(), id).delay
        },
        duration: function duration(value) {
          var id = this._id
          return arguments.length
            ? this.each(
                ('function' == typeof value
                  ? durationFunction
                  : durationConstant)(id, value)
              )
            : schedule_get(this.node(), id).duration
        },
        ease: function ease(value) {
          var id = this._id
          return arguments.length
            ? this.each(
                (function easeConstant(id, value) {
                  if ('function' != typeof value) throw new Error()
                  return function () {
                    schedule_set(this, id).ease = value
                  }
                })(id, value)
              )
            : schedule_get(this.node(), id).ease
        },
        easeVarying: function transition_easeVarying(value) {
          if ('function' != typeof value) throw new Error()
          return this.each(
            (function easeVarying(id, value) {
              return function () {
                var v = value.apply(this, arguments)
                if ('function' != typeof v) throw new Error()
                schedule_set(this, id).ease = v
              }
            })(this._id, value)
          )
        },
        end: function end() {
          var on0,
            on1,
            that = this,
            id = that._id,
            size = that.size()
          return new Promise(function (resolve, reject) {
            var cancel = { value: reject },
              end = {
                value: function () {
                  0 === --size && resolve()
                },
              }
            ;(that.each(function () {
              var schedule = schedule_set(this, id),
                on = schedule.on
              ;(on !== on0 &&
                ((on1 = (on0 = on).copy())._.cancel.push(cancel),
                on1._.interrupt.push(cancel),
                on1._.end.push(end)),
                (schedule.on = on1))
            }),
              0 === size && resolve())
          })
        },
        [Symbol.iterator]: selection_prototype[Symbol.iterator],
      }
      var defaultTiming = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function cubicInOut(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        },
      }
      function inherit(node, id) {
        for (
          var timing;
          !(timing = node.__transition) || !(timing = timing[id]);

        )
          if (!(node = node.parentNode))
            throw new Error(`transition ${id} not found`)
        return timing
      }
      ;((src_selection.prototype.interrupt = function selection_interrupt(
        name
      ) {
        return this.each(function () {
          src_interrupt(this, name)
        })
      }),
        (src_selection.prototype.transition = function selection_transition(
          name
        ) {
          var id, timing
          name instanceof Transition
            ? ((id = name._id), (name = name._name))
            : ((id = newId()),
              ((timing = defaultTiming).time = now()),
              (name = null == name ? null : name + ''))
          for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j)
            for (
              var node, group = groups[j], n = group.length, i = 0;
              i < n;
              ++i
            )
              (node = group[i]) &&
                schedule(node, name, id, i, group, timing || inherit(node, id))
          return new Transition(groups, this._parents, name, id)
        }))
      const { abs, max, min } = Math
      function number1(e) {
        return [+e[0], +e[1]]
      }
      function number2(e) {
        return [number1(e[0]), number1(e[1])]
      }
      ;(['w', 'e'].map(type),
        ['n', 's'].map(type),
        ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(type))
      function type(t) {
        return { type: t }
      }
      function src_select(selector) {
        return 'string' == typeof selector
          ? new Selection(
              [[document.querySelector(selector)]],
              [document.documentElement]
            )
          : new Selection([[selector]], root)
      }
      function src_pointer(event, node) {
        if (
          ((event = (function sourceEvent(event) {
            let sourceEvent
            for (; (sourceEvent = event.sourceEvent); ) event = sourceEvent
            return event
          })(event)),
          void 0 === node && (node = event.currentTarget),
          node)
        ) {
          var svg = node.ownerSVGElement || node
          if (svg.createSVGPoint) {
            var point = svg.createSVGPoint()
            return (
              (point.x = event.clientX),
              (point.y = event.clientY),
              [
                (point = point.matrixTransform(node.getScreenCTM().inverse()))
                  .x,
                point.y,
              ]
            )
          }
          if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect()
            return [
              event.clientX - rect.left - node.clientLeft,
              event.clientY - rect.top - node.clientTop,
            ]
          }
        }
        return [event.pageX, event.pageY]
      }
      const nonpassive = { passive: !1 },
        nonpassivecapture = { capture: !0, passive: !1 }
      function noevent_nopropagation(event) {
        event.stopImmediatePropagation()
      }
      function src_noevent(event) {
        ;(event.preventDefault(), event.stopImmediatePropagation())
      }
      function nodrag(view) {
        var root = view.document.documentElement,
          selection = src_select(view).on(
            'dragstart.drag',
            src_noevent,
            nonpassivecapture
          )
        'onselectstart' in root
          ? selection.on('selectstart.drag', src_noevent, nonpassivecapture)
          : ((root.__noselect = root.style.MozUserSelect),
            (root.style.MozUserSelect = 'none'))
      }
      function yesdrag(view, noclick) {
        var root = view.document.documentElement,
          selection = src_select(view).on('dragstart.drag', null)
        ;(noclick &&
          (selection.on('click.drag', src_noevent, nonpassivecapture),
          setTimeout(function () {
            selection.on('click.drag', null)
          }, 0)),
          'onselectstart' in root
            ? selection.on('selectstart.drag', null)
            : ((root.style.MozUserSelect = root.__noselect),
              delete root.__noselect))
      }
      const d3_drag_src_constant = (x) => () => x
      function DragEvent(
        type,
        {
          sourceEvent,
          subject,
          target,
          identifier,
          active,
          x,
          y,
          dx,
          dy,
          dispatch,
        }
      ) {
        Object.defineProperties(this, {
          type: { value: type, enumerable: !0, configurable: !0 },
          sourceEvent: { value: sourceEvent, enumerable: !0, configurable: !0 },
          subject: { value: subject, enumerable: !0, configurable: !0 },
          target: { value: target, enumerable: !0, configurable: !0 },
          identifier: { value: identifier, enumerable: !0, configurable: !0 },
          active: { value: active, enumerable: !0, configurable: !0 },
          x: { value: x, enumerable: !0, configurable: !0 },
          y: { value: y, enumerable: !0, configurable: !0 },
          dx: { value: dx, enumerable: !0, configurable: !0 },
          dy: { value: dy, enumerable: !0, configurable: !0 },
          _: { value: dispatch },
        })
      }
      function drag_defaultFilter(event) {
        return !event.ctrlKey && !event.button
      }
      function defaultContainer() {
        return this.parentNode
      }
      function defaultSubject(event, d) {
        return null == d ? { x: event.x, y: event.y } : d
      }
      function drag_defaultTouchable() {
        return navigator.maxTouchPoints || 'ontouchstart' in this
      }
      function drag() {
        var mousedownx,
          mousedowny,
          mousemoving,
          touchending,
          filter = drag_defaultFilter,
          container = defaultContainer,
          subject = defaultSubject,
          touchable = drag_defaultTouchable,
          gestures = {},
          listeners = src_dispatch('start', 'drag', 'end'),
          active = 0,
          clickDistance2 = 0
        function drag(selection) {
          selection
            .on('mousedown.drag', mousedowned)
            .filter(touchable)
            .on('touchstart.drag', touchstarted)
            .on('touchmove.drag', touchmoved, nonpassive)
            .on('touchend.drag touchcancel.drag', touchended)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
        }
        function mousedowned(event, d) {
          if (!touchending && filter.call(this, event, d)) {
            var gesture = beforestart(
              this,
              container.call(this, event, d),
              event,
              d,
              'mouse'
            )
            gesture &&
              (src_select(event.view)
                .on('mousemove.drag', mousemoved, nonpassivecapture)
                .on('mouseup.drag', mouseupped, nonpassivecapture),
              nodrag(event.view),
              noevent_nopropagation(event),
              (mousemoving = !1),
              (mousedownx = event.clientX),
              (mousedowny = event.clientY),
              gesture('start', event))
          }
        }
        function mousemoved(event) {
          if ((src_noevent(event), !mousemoving)) {
            var dx = event.clientX - mousedownx,
              dy = event.clientY - mousedowny
            mousemoving = dx * dx + dy * dy > clickDistance2
          }
          gestures.mouse('drag', event)
        }
        function mouseupped(event) {
          ;(src_select(event.view).on('mousemove.drag mouseup.drag', null),
            yesdrag(event.view, mousemoving),
            src_noevent(event),
            gestures.mouse('end', event))
        }
        function touchstarted(event, d) {
          if (filter.call(this, event, d)) {
            var i,
              gesture,
              touches = event.changedTouches,
              c = container.call(this, event, d),
              n = touches.length
            for (i = 0; i < n; ++i)
              (gesture = beforestart(
                this,
                c,
                event,
                d,
                touches[i].identifier,
                touches[i]
              )) &&
                (noevent_nopropagation(event),
                gesture('start', event, touches[i]))
          }
        }
        function touchmoved(event) {
          var i,
            gesture,
            touches = event.changedTouches,
            n = touches.length
          for (i = 0; i < n; ++i)
            (gesture = gestures[touches[i].identifier]) &&
              (src_noevent(event), gesture('drag', event, touches[i]))
        }
        function touchended(event) {
          var i,
            gesture,
            touches = event.changedTouches,
            n = touches.length
          for (
            touchending && clearTimeout(touchending),
              touchending = setTimeout(function () {
                touchending = null
              }, 500),
              i = 0;
            i < n;
            ++i
          )
            (gesture = gestures[touches[i].identifier]) &&
              (noevent_nopropagation(event), gesture('end', event, touches[i]))
        }
        function beforestart(that, container, event, d, identifier, touch) {
          var dx,
            dy,
            s,
            dispatch = listeners.copy(),
            p = src_pointer(touch || event, container)
          if (
            null !=
            (s = subject.call(
              that,
              new DragEvent('beforestart', {
                sourceEvent: event,
                target: drag,
                identifier,
                active,
                x: p[0],
                y: p[1],
                dx: 0,
                dy: 0,
                dispatch,
              }),
              d
            ))
          )
            return (
              (dx = s.x - p[0] || 0),
              (dy = s.y - p[1] || 0),
              function gesture(type, event, touch) {
                var n,
                  p0 = p
                switch (type) {
                  case 'start':
                    ;((gestures[identifier] = gesture), (n = active++))
                    break
                  case 'end':
                    ;(delete gestures[identifier], --active)
                  case 'drag':
                    ;((p = src_pointer(touch || event, container)),
                      (n = active))
                }
                dispatch.call(
                  type,
                  that,
                  new DragEvent(type, {
                    sourceEvent: event,
                    subject: s,
                    target: drag,
                    identifier,
                    active: n,
                    x: p[0] + dx,
                    y: p[1] + dy,
                    dx: p[0] - p0[0],
                    dy: p[1] - p0[1],
                    dispatch,
                  }),
                  d
                )
              }
            )
        }
        return (
          (drag.filter = function (_) {
            return arguments.length
              ? ((filter =
                  'function' == typeof _ ? _ : d3_drag_src_constant(!!_)),
                drag)
              : filter
          }),
          (drag.container = function (_) {
            return arguments.length
              ? ((container =
                  'function' == typeof _ ? _ : d3_drag_src_constant(_)),
                drag)
              : container
          }),
          (drag.subject = function (_) {
            return arguments.length
              ? ((subject =
                  'function' == typeof _ ? _ : d3_drag_src_constant(_)),
                drag)
              : subject
          }),
          (drag.touchable = function (_) {
            return arguments.length
              ? ((touchable =
                  'function' == typeof _ ? _ : d3_drag_src_constant(!!_)),
                drag)
              : touchable
          }),
          (drag.on = function () {
            var value = listeners.on.apply(listeners, arguments)
            return value === listeners ? drag : value
          }),
          (drag.clickDistance = function (_) {
            return arguments.length
              ? ((clickDistance2 = (_ = +_) * _), drag)
              : Math.sqrt(clickDistance2)
          }),
          drag
        )
      }
      function center(x, y) {
        var nodes,
          strength = 1
        function force() {
          var i,
            node,
            n = nodes.length,
            sx = 0,
            sy = 0
          for (i = 0; i < n; ++i) ((sx += (node = nodes[i]).x), (sy += node.y))
          for (
            sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0;
            i < n;
            ++i
          )
            (((node = nodes[i]).x -= sx), (node.y -= sy))
        }
        return (
          null == x && (x = 0),
          null == y && (y = 0),
          (force.initialize = function (_) {
            nodes = _
          }),
          (force.x = function (_) {
            return arguments.length ? ((x = +_), force) : x
          }),
          (force.y = function (_) {
            return arguments.length ? ((y = +_), force) : y
          }),
          (force.strength = function (_) {
            return arguments.length ? ((strength = +_), force) : strength
          }),
          force
        )
      }
      function add_add(tree, x, y, d) {
        if (isNaN(x) || isNaN(y)) return tree
        var parent,
          xm,
          ym,
          xp,
          yp,
          right,
          bottom,
          i,
          j,
          node = tree._root,
          leaf = { data: d },
          x0 = tree._x0,
          y0 = tree._y0,
          x1 = tree._x1,
          y1 = tree._y1
        if (!node) return ((tree._root = leaf), tree)
        for (; node.length; )
          if (
            ((right = x >= (xm = (x0 + x1) / 2)) ? (x0 = xm) : (x1 = xm),
            (bottom = y >= (ym = (y0 + y1) / 2)) ? (y0 = ym) : (y1 = ym),
            (parent = node),
            !(node = node[(i = (bottom << 1) | right)]))
          )
            return ((parent[i] = leaf), tree)
        if (
          ((xp = +tree._x.call(null, node.data)),
          (yp = +tree._y.call(null, node.data)),
          x === xp && y === yp)
        )
          return (
            (leaf.next = node),
            parent ? (parent[i] = leaf) : (tree._root = leaf),
            tree
          )
        do {
          ;((parent = parent
            ? (parent[i] = new Array(4))
            : (tree._root = new Array(4))),
            (right = x >= (xm = (x0 + x1) / 2)) ? (x0 = xm) : (x1 = xm),
            (bottom = y >= (ym = (y0 + y1) / 2)) ? (y0 = ym) : (y1 = ym))
        } while (
          (i = (bottom << 1) | right) == (j = ((yp >= ym) << 1) | (xp >= xm))
        )
        return ((parent[j] = node), (parent[i] = leaf), tree)
      }
      function quad(node, x0, y0, x1, y1) {
        ;((this.node = node),
          (this.x0 = x0),
          (this.y0 = y0),
          (this.x1 = x1),
          (this.y1 = y1))
      }
      function defaultX(d) {
        return d[0]
      }
      function defaultY(d) {
        return d[1]
      }
      function quadtree(nodes, x, y) {
        var tree = new Quadtree(
          null == x ? defaultX : x,
          null == y ? defaultY : y,
          NaN,
          NaN,
          NaN,
          NaN
        )
        return null == nodes ? tree : tree.addAll(nodes)
      }
      function Quadtree(x, y, x0, y0, x1, y1) {
        ;((this._x = x),
          (this._y = y),
          (this._x0 = x0),
          (this._y0 = y0),
          (this._x1 = x1),
          (this._y1 = y1),
          (this._root = void 0))
      }
      function leaf_copy(leaf) {
        for (var copy = { data: leaf.data }, next = copy; (leaf = leaf.next); )
          next = next.next = { data: leaf.data }
        return copy
      }
      DragEvent.prototype.on = function () {
        var value = this._.on.apply(this._, arguments)
        return value === this._ ? this : value
      }
      var treeProto = (quadtree.prototype = Quadtree.prototype)
      function d3_force_src_constant(x) {
        return function () {
          return x
        }
      }
      function jiggle(random) {
        return 1e-6 * (random() - 0.5)
      }
      function collide_x(d) {
        return d.x + d.vx
      }
      function collide_y(d) {
        return d.y + d.vy
      }
      function collide(radius) {
        var nodes,
          radii,
          random,
          strength = 1,
          iterations = 1
        function force() {
          for (
            var i, tree, node, xi, yi, ri, ri2, n = nodes.length, k = 0;
            k < iterations;
            ++k
          )
            for (
              tree = quadtree(nodes, collide_x, collide_y).visitAfter(prepare),
                i = 0;
              i < n;
              ++i
            )
              ((node = nodes[i]),
                (ri = radii[node.index]),
                (ri2 = ri * ri),
                (xi = node.x + node.vx),
                (yi = node.y + node.vy),
                tree.visit(apply))
          function apply(quad, x0, y0, x1, y1) {
            var data = quad.data,
              rj = quad.r,
              r = ri + rj
            if (!data)
              return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r
            if (data.index > node.index) {
              var x = xi - data.x - data.vx,
                y = yi - data.y - data.vy,
                l = x * x + y * y
              l < r * r &&
                (0 === x && (l += (x = jiggle(random)) * x),
                0 === y && (l += (y = jiggle(random)) * y),
                (l = ((r - (l = Math.sqrt(l))) / l) * strength),
                (node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj))),
                (node.vy += (y *= l) * r),
                (data.vx -= x * (r = 1 - r)),
                (data.vy -= y * r))
            }
          }
        }
        function prepare(quad) {
          if (quad.data) return (quad.r = radii[quad.data.index])
          for (var i = (quad.r = 0); i < 4; ++i)
            quad[i] && quad[i].r > quad.r && (quad.r = quad[i].r)
        }
        function initialize() {
          if (nodes) {
            var i,
              node,
              n = nodes.length
            for (radii = new Array(n), i = 0; i < n; ++i)
              ((node = nodes[i]), (radii[node.index] = +radius(node, i, nodes)))
          }
        }
        return (
          'function' != typeof radius &&
            (radius = d3_force_src_constant(null == radius ? 1 : +radius)),
          (force.initialize = function (_nodes, _random) {
            ;((nodes = _nodes), (random = _random), initialize())
          }),
          (force.iterations = function (_) {
            return arguments.length ? ((iterations = +_), force) : iterations
          }),
          (force.strength = function (_) {
            return arguments.length ? ((strength = +_), force) : strength
          }),
          (force.radius = function (_) {
            return arguments.length
              ? ((radius =
                  'function' == typeof _ ? _ : d3_force_src_constant(+_)),
                initialize(),
                force)
              : radius
          }),
          force
        )
      }
      function index(d) {
        return d.index
      }
      function link_find(nodeById, nodeId) {
        var node = nodeById.get(nodeId)
        if (!node) throw new Error('node not found: ' + nodeId)
        return node
      }
      function src_link(links) {
        var strengths,
          distances,
          nodes,
          count,
          bias,
          random,
          id = index,
          strength = function defaultStrength(link) {
            return (
              1 / Math.min(count[link.source.index], count[link.target.index])
            )
          },
          distance = d3_force_src_constant(30),
          iterations = 1
        function force(alpha) {
          for (var k = 0, n = links.length; k < iterations; ++k)
            for (var link, source, target, x, y, l, b, i = 0; i < n; ++i)
              ((source = (link = links[i]).source),
                (x =
                  (target = link.target).x + target.vx - source.x - source.vx ||
                  jiggle(random)),
                (y =
                  target.y + target.vy - source.y - source.vy ||
                  jiggle(random)),
                (x *= l =
                  (((l = Math.sqrt(x * x + y * y)) - distances[i]) / l) *
                  alpha *
                  strengths[i]),
                (y *= l),
                (target.vx -= x * (b = bias[i])),
                (target.vy -= y * b),
                (source.vx += x * (b = 1 - b)),
                (source.vy += y * b))
        }
        function initialize() {
          if (nodes) {
            var i,
              link,
              n = nodes.length,
              m = links.length,
              nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]))
            for (i = 0, count = new Array(n); i < m; ++i)
              (((link = links[i]).index = i),
                'object' != typeof link.source &&
                  (link.source = link_find(nodeById, link.source)),
                'object' != typeof link.target &&
                  (link.target = link_find(nodeById, link.target)),
                (count[link.source.index] =
                  (count[link.source.index] || 0) + 1),
                (count[link.target.index] =
                  (count[link.target.index] || 0) + 1))
            for (i = 0, bias = new Array(m); i < m; ++i)
              ((link = links[i]),
                (bias[i] =
                  count[link.source.index] /
                  (count[link.source.index] + count[link.target.index])))
            ;((strengths = new Array(m)),
              initializeStrength(),
              (distances = new Array(m)),
              initializeDistance())
          }
        }
        function initializeStrength() {
          if (nodes)
            for (var i = 0, n = links.length; i < n; ++i)
              strengths[i] = +strength(links[i], i, links)
        }
        function initializeDistance() {
          if (nodes)
            for (var i = 0, n = links.length; i < n; ++i)
              distances[i] = +distance(links[i], i, links)
        }
        return (
          null == links && (links = []),
          (force.initialize = function (_nodes, _random) {
            ;((nodes = _nodes), (random = _random), initialize())
          }),
          (force.links = function (_) {
            return arguments.length ? ((links = _), initialize(), force) : links
          }),
          (force.id = function (_) {
            return arguments.length ? ((id = _), force) : id
          }),
          (force.iterations = function (_) {
            return arguments.length ? ((iterations = +_), force) : iterations
          }),
          (force.strength = function (_) {
            return arguments.length
              ? ((strength =
                  'function' == typeof _ ? _ : d3_force_src_constant(+_)),
                initializeStrength(),
                force)
              : strength
          }),
          (force.distance = function (_) {
            return arguments.length
              ? ((distance =
                  'function' == typeof _ ? _ : d3_force_src_constant(+_)),
                initializeDistance(),
                force)
              : distance
          }),
          force
        )
      }
      ;((treeProto.copy = function () {
        var nodes,
          child,
          copy = new Quadtree(
            this._x,
            this._y,
            this._x0,
            this._y0,
            this._x1,
            this._y1
          ),
          node = this._root
        if (!node) return copy
        if (!node.length) return ((copy._root = leaf_copy(node)), copy)
        for (
          nodes = [{ source: node, target: (copy._root = new Array(4)) }];
          (node = nodes.pop());

        )
          for (var i = 0; i < 4; ++i)
            (child = node.source[i]) &&
              (child.length
                ? nodes.push({
                    source: child,
                    target: (node.target[i] = new Array(4)),
                  })
                : (node.target[i] = leaf_copy(child)))
        return copy
      }),
        (treeProto.add = function add(d) {
          const x = +this._x.call(null, d),
            y = +this._y.call(null, d)
          return add_add(this.cover(x, y), x, y, d)
        }),
        (treeProto.addAll = function addAll(data) {
          var d,
            i,
            x,
            y,
            n = data.length,
            xz = new Array(n),
            yz = new Array(n),
            x0 = 1 / 0,
            y0 = 1 / 0,
            x1 = -1 / 0,
            y1 = -1 / 0
          for (i = 0; i < n; ++i)
            isNaN((x = +this._x.call(null, (d = data[i])))) ||
              isNaN((y = +this._y.call(null, d))) ||
              ((xz[i] = x),
              (yz[i] = y),
              x < x0 && (x0 = x),
              x > x1 && (x1 = x),
              y < y0 && (y0 = y),
              y > y1 && (y1 = y))
          if (x0 > x1 || y0 > y1) return this
          for (this.cover(x0, y0).cover(x1, y1), i = 0; i < n; ++i)
            add_add(this, xz[i], yz[i], data[i])
          return this
        }),
        (treeProto.cover = function cover(x, y) {
          if (isNaN((x = +x)) || isNaN((y = +y))) return this
          var x0 = this._x0,
            y0 = this._y0,
            x1 = this._x1,
            y1 = this._y1
          if (isNaN(x0))
            ((x1 = (x0 = Math.floor(x)) + 1), (y1 = (y0 = Math.floor(y)) + 1))
          else {
            for (
              var parent, i, z = x1 - x0 || 1, node = this._root;
              x0 > x || x >= x1 || y0 > y || y >= y1;

            )
              switch (
                ((i = ((y < y0) << 1) | (x < x0)),
                ((parent = new Array(4))[i] = node),
                (node = parent),
                (z *= 2),
                i)
              ) {
                case 0:
                  ;((x1 = x0 + z), (y1 = y0 + z))
                  break
                case 1:
                  ;((x0 = x1 - z), (y1 = y0 + z))
                  break
                case 2:
                  ;((x1 = x0 + z), (y0 = y1 - z))
                  break
                case 3:
                  ;((x0 = x1 - z), (y0 = y1 - z))
              }
            this._root && this._root.length && (this._root = node)
          }
          return (
            (this._x0 = x0),
            (this._y0 = y0),
            (this._x1 = x1),
            (this._y1 = y1),
            this
          )
        }),
        (treeProto.data = function src_data() {
          var data = []
          return (
            this.visit(function (node) {
              if (!node.length)
                do {
                  data.push(node.data)
                } while ((node = node.next))
            }),
            data
          )
        }),
        (treeProto.extent = function extent(_) {
          return arguments.length
            ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
            : isNaN(this._x0)
              ? void 0
              : [
                  [this._x0, this._y0],
                  [this._x1, this._y1],
                ]
        }),
        (treeProto.find = function src_find(x, y, radius) {
          var data,
            x1,
            y1,
            x2,
            y2,
            q,
            i,
            x0 = this._x0,
            y0 = this._y0,
            x3 = this._x1,
            y3 = this._y1,
            quads = [],
            node = this._root
          for (
            node && quads.push(new quad(node, x0, y0, x3, y3)),
              null == radius
                ? (radius = 1 / 0)
                : ((x0 = x - radius),
                  (y0 = y - radius),
                  (x3 = x + radius),
                  (y3 = y + radius),
                  (radius *= radius));
            (q = quads.pop());

          )
            if (
              !(
                !(node = q.node) ||
                (x1 = q.x0) > x3 ||
                (y1 = q.y0) > y3 ||
                (x2 = q.x1) < x0 ||
                (y2 = q.y1) < y0
              )
            )
              if (node.length) {
                var xm = (x1 + x2) / 2,
                  ym = (y1 + y2) / 2
                ;(quads.push(
                  new quad(node[3], xm, ym, x2, y2),
                  new quad(node[2], x1, ym, xm, y2),
                  new quad(node[1], xm, y1, x2, ym),
                  new quad(node[0], x1, y1, xm, ym)
                ),
                  (i = ((y >= ym) << 1) | (x >= xm)) &&
                    ((q = quads[quads.length - 1]),
                    (quads[quads.length - 1] = quads[quads.length - 1 - i]),
                    (quads[quads.length - 1 - i] = q)))
              } else {
                var dx = x - +this._x.call(null, node.data),
                  dy = y - +this._y.call(null, node.data),
                  d2 = dx * dx + dy * dy
                if (d2 < radius) {
                  var d = Math.sqrt((radius = d2))
                  ;((x0 = x - d),
                    (y0 = y - d),
                    (x3 = x + d),
                    (y3 = y + d),
                    (data = node.data))
                }
              }
          return data
        }),
        (treeProto.remove = function src_remove(d) {
          if (
            isNaN((x = +this._x.call(null, d))) ||
            isNaN((y = +this._y.call(null, d)))
          )
            return this
          var parent,
            retainer,
            previous,
            next,
            x,
            y,
            xm,
            ym,
            right,
            bottom,
            i,
            j,
            node = this._root,
            x0 = this._x0,
            y0 = this._y0,
            x1 = this._x1,
            y1 = this._y1
          if (!node) return this
          if (node.length)
            for (;;) {
              if (
                ((right = x >= (xm = (x0 + x1) / 2)) ? (x0 = xm) : (x1 = xm),
                (bottom = y >= (ym = (y0 + y1) / 2)) ? (y0 = ym) : (y1 = ym),
                (parent = node),
                !(node = node[(i = (bottom << 1) | right)]))
              )
                return this
              if (!node.length) break
              ;(parent[(i + 1) & 3] ||
                parent[(i + 2) & 3] ||
                parent[(i + 3) & 3]) &&
                ((retainer = parent), (j = i))
            }
          for (; node.data !== d; )
            if (((previous = node), !(node = node.next))) return this
          return (
            (next = node.next) && delete node.next,
            previous
              ? (next ? (previous.next = next) : delete previous.next, this)
              : parent
                ? (next ? (parent[i] = next) : delete parent[i],
                  (node = parent[0] || parent[1] || parent[2] || parent[3]) &&
                    node ===
                      (parent[3] || parent[2] || parent[1] || parent[0]) &&
                    !node.length &&
                    (retainer ? (retainer[j] = node) : (this._root = node)),
                  this)
                : ((this._root = next), this)
          )
        }),
        (treeProto.removeAll = function removeAll(data) {
          for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i])
          return this
        }),
        (treeProto.root = function src_root() {
          return this._root
        }),
        (treeProto.size = function src_size() {
          var size = 0
          return (
            this.visit(function (node) {
              if (!node.length)
                do {
                  ++size
                } while ((node = node.next))
            }),
            size
          )
        }),
        (treeProto.visit = function visit(callback) {
          var q,
            child,
            x0,
            y0,
            x1,
            y1,
            quads = [],
            node = this._root
          for (
            node &&
            quads.push(new quad(node, this._x0, this._y0, this._x1, this._y1));
            (q = quads.pop());

          )
            if (
              !callback(
                (node = q.node),
                (x0 = q.x0),
                (y0 = q.y0),
                (x1 = q.x1),
                (y1 = q.y1)
              ) &&
              node.length
            ) {
              var xm = (x0 + x1) / 2,
                ym = (y0 + y1) / 2
              ;((child = node[3]) &&
                quads.push(new quad(child, xm, ym, x1, y1)),
                (child = node[2]) &&
                  quads.push(new quad(child, x0, ym, xm, y1)),
                (child = node[1]) &&
                  quads.push(new quad(child, xm, y0, x1, ym)),
                (child = node[0]) &&
                  quads.push(new quad(child, x0, y0, xm, ym)))
            }
          return this
        }),
        (treeProto.visitAfter = function visitAfter(callback) {
          var q,
            quads = [],
            next = []
          for (
            this._root &&
            quads.push(
              new quad(this._root, this._x0, this._y0, this._x1, this._y1)
            );
            (q = quads.pop());

          ) {
            var node = q.node
            if (node.length) {
              var child,
                x0 = q.x0,
                y0 = q.y0,
                x1 = q.x1,
                y1 = q.y1,
                xm = (x0 + x1) / 2,
                ym = (y0 + y1) / 2
              ;((child = node[0]) &&
                quads.push(new quad(child, x0, y0, xm, ym)),
                (child = node[1]) &&
                  quads.push(new quad(child, xm, y0, x1, ym)),
                (child = node[2]) &&
                  quads.push(new quad(child, x0, ym, xm, y1)),
                (child = node[3]) &&
                  quads.push(new quad(child, xm, ym, x1, y1)))
            }
            next.push(q)
          }
          for (; (q = next.pop()); ) callback(q.node, q.x0, q.y0, q.x1, q.y1)
          return this
        }),
        (treeProto.x = function x(_) {
          return arguments.length ? ((this._x = _), this) : this._x
        }),
        (treeProto.y = function y(_) {
          return arguments.length ? ((this._y = _), this) : this._y
        }))
      const a = 1664525,
        c = 1013904223,
        m = 4294967296
      function simulation_x(d) {
        return d.x
      }
      function simulation_y(d) {
        return d.y
      }
      var initialRadius = 10,
        initialAngle = Math.PI * (3 - Math.sqrt(5))
      function simulation(nodes) {
        var simulation,
          alpha = 1,
          alphaMin = 0.001,
          alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
          alphaTarget = 0,
          velocityDecay = 0.6,
          forces = new Map(),
          stepper = timer(step),
          event = src_dispatch('tick', 'end'),
          random = (function lcg() {
            let s = 1
            return () => (s = (a * s + c) % m) / m
          })()
        function step() {
          ;(tick(),
            event.call('tick', simulation),
            alpha < alphaMin && (stepper.stop(), event.call('end', simulation)))
        }
        function tick(iterations) {
          var i,
            node,
            n = nodes.length
          void 0 === iterations && (iterations = 1)
          for (var k = 0; k < iterations; ++k)
            for (
              alpha += (alphaTarget - alpha) * alphaDecay,
                forces.forEach(function (force) {
                  force(alpha)
                }),
                i = 0;
              i < n;
              ++i
            )
              (null == (node = nodes[i]).fx
                ? (node.x += node.vx *= velocityDecay)
                : ((node.x = node.fx), (node.vx = 0)),
                null == node.fy
                  ? (node.y += node.vy *= velocityDecay)
                  : ((node.y = node.fy), (node.vy = 0)))
          return simulation
        }
        function initializeNodes() {
          for (var node, i = 0, n = nodes.length; i < n; ++i) {
            if (
              (((node = nodes[i]).index = i),
              null != node.fx && (node.x = node.fx),
              null != node.fy && (node.y = node.fy),
              isNaN(node.x) || isNaN(node.y))
            ) {
              var radius = initialRadius * Math.sqrt(0.5 + i),
                angle = i * initialAngle
              ;((node.x = radius * Math.cos(angle)),
                (node.y = radius * Math.sin(angle)))
            }
            ;(isNaN(node.vx) || isNaN(node.vy)) && (node.vx = node.vy = 0)
          }
        }
        function initializeForce(force) {
          return (force.initialize && force.initialize(nodes, random), force)
        }
        return (
          null == nodes && (nodes = []),
          initializeNodes(),
          (simulation = {
            tick,
            restart: function () {
              return (stepper.restart(step), simulation)
            },
            stop: function () {
              return (stepper.stop(), simulation)
            },
            nodes: function (_) {
              return arguments.length
                ? ((nodes = _),
                  initializeNodes(),
                  forces.forEach(initializeForce),
                  simulation)
                : nodes
            },
            alpha: function (_) {
              return arguments.length ? ((alpha = +_), simulation) : alpha
            },
            alphaMin: function (_) {
              return arguments.length ? ((alphaMin = +_), simulation) : alphaMin
            },
            alphaDecay: function (_) {
              return arguments.length
                ? ((alphaDecay = +_), simulation)
                : +alphaDecay
            },
            alphaTarget: function (_) {
              return arguments.length
                ? ((alphaTarget = +_), simulation)
                : alphaTarget
            },
            velocityDecay: function (_) {
              return arguments.length
                ? ((velocityDecay = 1 - _), simulation)
                : 1 - velocityDecay
            },
            randomSource: function (_) {
              return arguments.length
                ? ((random = _), forces.forEach(initializeForce), simulation)
                : random
            },
            force: function (name, _) {
              return arguments.length > 1
                ? (null == _
                    ? forces.delete(name)
                    : forces.set(name, initializeForce(_)),
                  simulation)
                : forces.get(name)
            },
            find: function (x, y, radius) {
              var dx,
                dy,
                d2,
                node,
                closest,
                i = 0,
                n = nodes.length
              for (
                null == radius ? (radius = 1 / 0) : (radius *= radius), i = 0;
                i < n;
                ++i
              )
                (d2 =
                  (dx = x - (node = nodes[i]).x) * dx +
                  (dy = y - node.y) * dy) < radius &&
                  ((closest = node), (radius = d2))
              return closest
            },
            on: function (name, _) {
              return arguments.length > 1
                ? (event.on(name, _), simulation)
                : event.on(name)
            },
          })
        )
      }
      function manyBody() {
        var nodes,
          node,
          random,
          alpha,
          strengths,
          strength = d3_force_src_constant(-30),
          distanceMin2 = 1,
          distanceMax2 = 1 / 0,
          theta2 = 0.81
        function force(_) {
          var i,
            n = nodes.length,
            tree = quadtree(nodes, simulation_x, simulation_y).visitAfter(
              accumulate
            )
          for (alpha = _, i = 0; i < n; ++i)
            ((node = nodes[i]), tree.visit(apply))
        }
        function initialize() {
          if (nodes) {
            var i,
              node,
              n = nodes.length
            for (strengths = new Array(n), i = 0; i < n; ++i)
              ((node = nodes[i]),
                (strengths[node.index] = +strength(node, i, nodes)))
          }
        }
        function accumulate(quad) {
          var q,
            c,
            x,
            y,
            i,
            strength = 0,
            weight = 0
          if (quad.length) {
            for (x = y = i = 0; i < 4; ++i)
              (q = quad[i]) &&
                (c = Math.abs(q.value)) &&
                ((strength += q.value),
                (weight += c),
                (x += c * q.x),
                (y += c * q.y))
            ;((quad.x = x / weight), (quad.y = y / weight))
          } else {
            ;(((q = quad).x = q.data.x), (q.y = q.data.y))
            do {
              strength += strengths[q.data.index]
            } while ((q = q.next))
          }
          quad.value = strength
        }
        function apply(quad, x1, _, x2) {
          if (!quad.value) return !0
          var x = quad.x - node.x,
            y = quad.y - node.y,
            w = x2 - x1,
            l = x * x + y * y
          if ((w * w) / theta2 < l)
            return (
              l < distanceMax2 &&
                (0 === x && (l += (x = jiggle(random)) * x),
                0 === y && (l += (y = jiggle(random)) * y),
                l < distanceMin2 && (l = Math.sqrt(distanceMin2 * l)),
                (node.vx += (x * quad.value * alpha) / l),
                (node.vy += (y * quad.value * alpha) / l)),
              !0
            )
          if (!(quad.length || l >= distanceMax2)) {
            ;(quad.data !== node || quad.next) &&
              (0 === x && (l += (x = jiggle(random)) * x),
              0 === y && (l += (y = jiggle(random)) * y),
              l < distanceMin2 && (l = Math.sqrt(distanceMin2 * l)))
            do {
              quad.data !== node &&
                ((w = (strengths[quad.data.index] * alpha) / l),
                (node.vx += x * w),
                (node.vy += y * w))
            } while ((quad = quad.next))
          }
        }
        return (
          (force.initialize = function (_nodes, _random) {
            ;((nodes = _nodes), (random = _random), initialize())
          }),
          (force.strength = function (_) {
            return arguments.length
              ? ((strength =
                  'function' == typeof _ ? _ : d3_force_src_constant(+_)),
                initialize(),
                force)
              : strength
          }),
          (force.distanceMin = function (_) {
            return arguments.length
              ? ((distanceMin2 = _ * _), force)
              : Math.sqrt(distanceMin2)
          }),
          (force.distanceMax = function (_) {
            return arguments.length
              ? ((distanceMax2 = _ * _), force)
              : Math.sqrt(distanceMax2)
          }),
          (force.theta = function (_) {
            return arguments.length
              ? ((theta2 = _ * _), force)
              : Math.sqrt(theta2)
          }),
          force
        )
      }
      function src_selectAll(selector) {
        return 'string' == typeof selector
          ? new Selection(
              [document.querySelectorAll(selector)],
              [document.documentElement]
            )
          : new Selection([array(selector)], root)
      }
      function cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2
      }
      const src_zoom = (function zoomRho(rho, rho2, rho4) {
          function zoom(p0, p1) {
            var i,
              S,
              ux0 = p0[0],
              uy0 = p0[1],
              w0 = p0[2],
              ux1 = p1[0],
              uy1 = p1[1],
              w1 = p1[2],
              dx = ux1 - ux0,
              dy = uy1 - uy0,
              d2 = dx * dx + dy * dy
            if (d2 < 1e-12)
              ((S = Math.log(w1 / w0) / rho),
                (i = function (t) {
                  return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S),
                  ]
                }))
            else {
              var d1 = Math.sqrt(d2),
                b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
                b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
                r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
                r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1)
              ;((S = (r1 - r0) / rho),
                (i = function (t) {
                  var s = t * S,
                    coshr0 = cosh(r0),
                    u =
                      (w0 / (rho2 * d1)) *
                      (coshr0 *
                        (function tanh(x) {
                          return ((x = Math.exp(2 * x)) - 1) / (x + 1)
                        })(rho * s + r0) -
                        (function sinh(x) {
                          return ((x = Math.exp(x)) - 1 / x) / 2
                        })(r0))
                  return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    (w0 * coshr0) / cosh(rho * s + r0),
                  ]
                }))
            }
            return ((i.duration = (1e3 * S * rho) / Math.SQRT2), i)
          }
          return (
            (zoom.rho = function (_) {
              var _1 = Math.max(0.001, +_),
                _2 = _1 * _1
              return zoomRho(_1, _2, _2 * _2)
            }),
            zoom
          )
        })(Math.SQRT2, 2, 4),
        d3_zoom_src_constant = (x) => () => x
      function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
        Object.defineProperties(this, {
          type: { value: type, enumerable: !0, configurable: !0 },
          sourceEvent: { value: sourceEvent, enumerable: !0, configurable: !0 },
          target: { value: target, enumerable: !0, configurable: !0 },
          transform: { value: transform, enumerable: !0, configurable: !0 },
          _: { value: dispatch },
        })
      }
      function Transform(k, x, y) {
        ;((this.k = k), (this.x = x), (this.y = y))
      }
      Transform.prototype = {
        constructor: Transform,
        scale: function (k) {
          return 1 === k ? this : new Transform(this.k * k, this.x, this.y)
        },
        translate: function (x, y) {
          return (0 === x) & (0 === y)
            ? this
            : new Transform(this.k, this.x + this.k * x, this.y + this.k * y)
        },
        apply: function (point) {
          return [point[0] * this.k + this.x, point[1] * this.k + this.y]
        },
        applyX: function (x) {
          return x * this.k + this.x
        },
        applyY: function (y) {
          return y * this.k + this.y
        },
        invert: function (location) {
          return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k,
          ]
        },
        invertX: function (x) {
          return (x - this.x) / this.k
        },
        invertY: function (y) {
          return (y - this.y) / this.k
        },
        rescaleX: function (x) {
          return x
            .copy()
            .domain(x.range().map(this.invertX, this).map(x.invert, x))
        },
        rescaleY: function (y) {
          return y
            .copy()
            .domain(y.range().map(this.invertY, this).map(y.invert, y))
        },
        toString: function () {
          return (
            'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
          )
        },
      }
      var transform_identity = new Transform(1, 0, 0)
      function src_noevent_nopropagation(event) {
        event.stopImmediatePropagation()
      }
      function d3_zoom_src_noevent(event) {
        ;(event.preventDefault(), event.stopImmediatePropagation())
      }
      function zoom_defaultFilter(event) {
        return !((event.ctrlKey && 'wheel' !== event.type) || event.button)
      }
      function zoom_defaultExtent() {
        var e = this
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute('viewBox')
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ]
      }
      function defaultTransform() {
        return this.__zoom || transform_identity
      }
      function defaultWheelDelta(event) {
        return (
          -event.deltaY *
          (1 === event.deltaMode ? 0.05 : event.deltaMode ? 1 : 0.002) *
          (event.ctrlKey ? 10 : 1)
        )
      }
      function zoom_defaultTouchable() {
        return navigator.maxTouchPoints || 'ontouchstart' in this
      }
      function defaultConstrain(transform, extent, translateExtent) {
        var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
          dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
          dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
          dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1]
        return transform.translate(
          dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
          dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
        )
      }
      function zoom() {
        var touchstarting,
          touchfirst,
          touchending,
          filter = zoom_defaultFilter,
          extent = zoom_defaultExtent,
          constrain = defaultConstrain,
          wheelDelta = defaultWheelDelta,
          touchable = zoom_defaultTouchable,
          scaleExtent = [0, 1 / 0],
          translateExtent = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          duration = 250,
          interpolate = src_zoom,
          listeners = src_dispatch('start', 'zoom', 'end'),
          clickDistance2 = 0,
          tapDistance = 10
        function zoom(selection) {
          selection
            .property('__zoom', defaultTransform)
            .on('wheel.zoom', wheeled, { passive: !1 })
            .on('mousedown.zoom', mousedowned)
            .on('dblclick.zoom', dblclicked)
            .filter(touchable)
            .on('touchstart.zoom', touchstarted)
            .on('touchmove.zoom', touchmoved)
            .on('touchend.zoom touchcancel.zoom', touchended)
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
        }
        function scale(transform, k) {
          return (k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k))) ===
            transform.k
            ? transform
            : new Transform(k, transform.x, transform.y)
        }
        function translate(transform, p0, p1) {
          var x = p0[0] - p1[0] * transform.k,
            y = p0[1] - p1[1] * transform.k
          return x === transform.x && y === transform.y
            ? transform
            : new Transform(transform.k, x, y)
        }
        function centroid(extent) {
          return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2,
          ]
        }
        function schedule(transition, transform, point, event) {
          transition
            .on('start.zoom', function () {
              gesture(this, arguments).event(event).start()
            })
            .on('interrupt.zoom end.zoom', function () {
              gesture(this, arguments).event(event).end()
            })
            .tween('zoom', function () {
              var args = arguments,
                g = gesture(this, args).event(event),
                e = extent.apply(this, args),
                p =
                  null == point
                    ? centroid(e)
                    : 'function' == typeof point
                      ? point.apply(this, args)
                      : point,
                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                a = this.__zoom,
                b =
                  'function' == typeof transform
                    ? transform.apply(this, args)
                    : transform,
                i = interpolate(
                  a.invert(p).concat(w / a.k),
                  b.invert(p).concat(w / b.k)
                )
              return function (t) {
                if (1 === t) t = b
                else {
                  var l = i(t),
                    k = w / l[2]
                  t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k)
                }
                g.zoom(null, t)
              }
            })
        }
        function gesture(that, args, clean) {
          return (!clean && that.__zooming) || new Gesture(that, args)
        }
        function Gesture(that, args) {
          ;((this.that = that),
            (this.args = args),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = extent.apply(that, args)),
            (this.taps = 0))
        }
        function wheeled(event, ...args) {
          if (filter.apply(this, arguments)) {
            var g = gesture(this, args).event(event),
              t = this.__zoom,
              k = Math.max(
                scaleExtent[0],
                Math.min(
                  scaleExtent[1],
                  t.k * Math.pow(2, wheelDelta.apply(this, arguments))
                )
              ),
              p = src_pointer(event)
            if (g.wheel)
              ((g.mouse[0][0] === p[0] && g.mouse[0][1] === p[1]) ||
                (g.mouse[1] = t.invert((g.mouse[0] = p))),
                clearTimeout(g.wheel))
            else {
              if (t.k === k) return
              ;((g.mouse = [p, t.invert(p)]), src_interrupt(this), g.start())
            }
            ;(d3_zoom_src_noevent(event),
              (g.wheel = setTimeout(function wheelidled() {
                ;((g.wheel = null), g.end())
              }, 150)),
              g.zoom(
                'mouse',
                constrain(
                  translate(scale(t, k), g.mouse[0], g.mouse[1]),
                  g.extent,
                  translateExtent
                )
              ))
          }
        }
        function mousedowned(event, ...args) {
          if (!touchending && filter.apply(this, arguments)) {
            var currentTarget = event.currentTarget,
              g = gesture(this, args, !0).event(event),
              v = src_select(event.view)
                .on(
                  'mousemove.zoom',
                  function mousemoved(event) {
                    if ((d3_zoom_src_noevent(event), !g.moved)) {
                      var dx = event.clientX - x0,
                        dy = event.clientY - y0
                      g.moved = dx * dx + dy * dy > clickDistance2
                    }
                    g.event(event).zoom(
                      'mouse',
                      constrain(
                        translate(
                          g.that.__zoom,
                          (g.mouse[0] = src_pointer(event, currentTarget)),
                          g.mouse[1]
                        ),
                        g.extent,
                        translateExtent
                      )
                    )
                  },
                  !0
                )
                .on(
                  'mouseup.zoom',
                  function mouseupped(event) {
                    ;(v.on('mousemove.zoom mouseup.zoom', null),
                      yesdrag(event.view, g.moved),
                      d3_zoom_src_noevent(event),
                      g.event(event).end())
                  },
                  !0
                ),
              p = src_pointer(event, currentTarget),
              x0 = event.clientX,
              y0 = event.clientY
            ;(nodrag(event.view),
              src_noevent_nopropagation(event),
              (g.mouse = [p, this.__zoom.invert(p)]),
              src_interrupt(this),
              g.start())
          }
        }
        function dblclicked(event, ...args) {
          if (filter.apply(this, arguments)) {
            var t0 = this.__zoom,
              p0 = src_pointer(
                event.changedTouches ? event.changedTouches[0] : event,
                this
              ),
              p1 = t0.invert(p0),
              k1 = t0.k * (event.shiftKey ? 0.5 : 2),
              t1 = constrain(
                translate(scale(t0, k1), p0, p1),
                extent.apply(this, args),
                translateExtent
              )
            ;(d3_zoom_src_noevent(event),
              duration > 0
                ? src_select(this)
                    .transition()
                    .duration(duration)
                    .call(schedule, t1, p0, event)
                : src_select(this).call(zoom.transform, t1, p0, event))
          }
        }
        function touchstarted(event, ...args) {
          if (filter.apply(this, arguments)) {
            var started,
              i,
              t,
              p,
              touches = event.touches,
              n = touches.length,
              g = gesture(this, args, event.changedTouches.length === n).event(
                event
              )
            for (src_noevent_nopropagation(event), i = 0; i < n; ++i)
              ((p = [
                (p = src_pointer((t = touches[i]), this)),
                this.__zoom.invert(p),
                t.identifier,
              ]),
                g.touch0
                  ? g.touch1 ||
                    g.touch0[2] === p[2] ||
                    ((g.touch1 = p), (g.taps = 0))
                  : ((g.touch0 = p),
                    (started = !0),
                    (g.taps = 1 + !!touchstarting)))
            ;(touchstarting && (touchstarting = clearTimeout(touchstarting)),
              started &&
                (g.taps < 2 &&
                  ((touchfirst = p[0]),
                  (touchstarting = setTimeout(function () {
                    touchstarting = null
                  }, 500))),
                src_interrupt(this),
                g.start()))
          }
        }
        function touchmoved(event, ...args) {
          if (this.__zooming) {
            var i,
              t,
              p,
              l,
              g = gesture(this, args).event(event),
              touches = event.changedTouches,
              n = touches.length
            for (d3_zoom_src_noevent(event), i = 0; i < n; ++i)
              ((p = src_pointer((t = touches[i]), this)),
                g.touch0 && g.touch0[2] === t.identifier
                  ? (g.touch0[0] = p)
                  : g.touch1 &&
                    g.touch1[2] === t.identifier &&
                    (g.touch1[0] = p))
            if (((t = g.that.__zoom), g.touch1)) {
              var p0 = g.touch0[0],
                l0 = g.touch0[1],
                p1 = g.touch1[0],
                l1 = g.touch1[1],
                dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
                dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl
              ;((t = scale(t, Math.sqrt(dp / dl))),
                (p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2]),
                (l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2]))
            } else {
              if (!g.touch0) return
              ;((p = g.touch0[0]), (l = g.touch0[1]))
            }
            g.zoom(
              'touch',
              constrain(translate(t, p, l), g.extent, translateExtent)
            )
          }
        }
        function touchended(event, ...args) {
          if (this.__zooming) {
            var i,
              t,
              g = gesture(this, args).event(event),
              touches = event.changedTouches,
              n = touches.length
            for (
              src_noevent_nopropagation(event),
                touchending && clearTimeout(touchending),
                touchending = setTimeout(function () {
                  touchending = null
                }, 500),
                i = 0;
              i < n;
              ++i
            )
              ((t = touches[i]),
                g.touch0 && g.touch0[2] === t.identifier
                  ? delete g.touch0
                  : g.touch1 && g.touch1[2] === t.identifier && delete g.touch1)
            if (
              (g.touch1 &&
                !g.touch0 &&
                ((g.touch0 = g.touch1), delete g.touch1),
              g.touch0)
            )
              g.touch0[1] = this.__zoom.invert(g.touch0[0])
            else if (
              (g.end(),
              2 === g.taps &&
                ((t = src_pointer(t, this)),
                Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) <
                  tapDistance))
            ) {
              var p = src_select(this).on('dblclick.zoom')
              p && p.apply(this, arguments)
            }
          }
        }
        return (
          (zoom.transform = function (collection, transform, point, event) {
            var selection = collection.selection
              ? collection.selection()
              : collection
            ;(selection.property('__zoom', defaultTransform),
              collection !== selection
                ? schedule(collection, transform, point, event)
                : selection.interrupt().each(function () {
                    gesture(this, arguments)
                      .event(event)
                      .start()
                      .zoom(
                        null,
                        'function' == typeof transform
                          ? transform.apply(this, arguments)
                          : transform
                      )
                      .end()
                  }))
          }),
          (zoom.scaleBy = function (selection, k, p, event) {
            zoom.scaleTo(
              selection,
              function () {
                return (
                  this.__zoom.k *
                  ('function' == typeof k ? k.apply(this, arguments) : k)
                )
              },
              p,
              event
            )
          }),
          (zoom.scaleTo = function (selection, k, p, event) {
            zoom.transform(
              selection,
              function () {
                var e = extent.apply(this, arguments),
                  t0 = this.__zoom,
                  p0 =
                    null == p
                      ? centroid(e)
                      : 'function' == typeof p
                        ? p.apply(this, arguments)
                        : p,
                  p1 = t0.invert(p0),
                  k1 = 'function' == typeof k ? k.apply(this, arguments) : k
                return constrain(
                  translate(scale(t0, k1), p0, p1),
                  e,
                  translateExtent
                )
              },
              p,
              event
            )
          }),
          (zoom.translateBy = function (selection, x, y, event) {
            zoom.transform(
              selection,
              function () {
                return constrain(
                  this.__zoom.translate(
                    'function' == typeof x ? x.apply(this, arguments) : x,
                    'function' == typeof y ? y.apply(this, arguments) : y
                  ),
                  extent.apply(this, arguments),
                  translateExtent
                )
              },
              null,
              event
            )
          }),
          (zoom.translateTo = function (selection, x, y, p, event) {
            zoom.transform(
              selection,
              function () {
                var e = extent.apply(this, arguments),
                  t = this.__zoom,
                  p0 =
                    null == p
                      ? centroid(e)
                      : 'function' == typeof p
                        ? p.apply(this, arguments)
                        : p
                return constrain(
                  transform_identity
                    .translate(p0[0], p0[1])
                    .scale(t.k)
                    .translate(
                      'function' == typeof x ? -x.apply(this, arguments) : -x,
                      'function' == typeof y ? -y.apply(this, arguments) : -y
                    ),
                  e,
                  translateExtent
                )
              },
              p,
              event
            )
          }),
          (Gesture.prototype = {
            event: function (event) {
              return (event && (this.sourceEvent = event), this)
            },
            start: function () {
              return (
                1 === ++this.active &&
                  ((this.that.__zooming = this), this.emit('start')),
                this
              )
            },
            zoom: function (key, transform) {
              return (
                this.mouse &&
                  'mouse' !== key &&
                  (this.mouse[1] = transform.invert(this.mouse[0])),
                this.touch0 &&
                  'touch' !== key &&
                  (this.touch0[1] = transform.invert(this.touch0[0])),
                this.touch1 &&
                  'touch' !== key &&
                  (this.touch1[1] = transform.invert(this.touch1[0])),
                (this.that.__zoom = transform),
                this.emit('zoom'),
                this
              )
            },
            end: function () {
              return (
                0 === --this.active &&
                  (delete this.that.__zooming, this.emit('end')),
                this
              )
            },
            emit: function (type) {
              var d = src_select(this.that).datum()
              listeners.call(
                type,
                this.that,
                new ZoomEvent(type, {
                  sourceEvent: this.sourceEvent,
                  target: zoom,
                  type,
                  transform: this.that.__zoom,
                  dispatch: listeners,
                }),
                d
              )
            },
          }),
          (zoom.wheelDelta = function (_) {
            return arguments.length
              ? ((wheelDelta =
                  'function' == typeof _ ? _ : d3_zoom_src_constant(+_)),
                zoom)
              : wheelDelta
          }),
          (zoom.filter = function (_) {
            return arguments.length
              ? ((filter =
                  'function' == typeof _ ? _ : d3_zoom_src_constant(!!_)),
                zoom)
              : filter
          }),
          (zoom.touchable = function (_) {
            return arguments.length
              ? ((touchable =
                  'function' == typeof _ ? _ : d3_zoom_src_constant(!!_)),
                zoom)
              : touchable
          }),
          (zoom.extent = function (_) {
            return arguments.length
              ? ((extent =
                  'function' == typeof _
                    ? _
                    : d3_zoom_src_constant([
                        [+_[0][0], +_[0][1]],
                        [+_[1][0], +_[1][1]],
                      ])),
                zoom)
              : extent
          }),
          (zoom.scaleExtent = function (_) {
            return arguments.length
              ? ((scaleExtent[0] = +_[0]), (scaleExtent[1] = +_[1]), zoom)
              : [scaleExtent[0], scaleExtent[1]]
          }),
          (zoom.translateExtent = function (_) {
            return arguments.length
              ? ((translateExtent[0][0] = +_[0][0]),
                (translateExtent[1][0] = +_[1][0]),
                (translateExtent[0][1] = +_[0][1]),
                (translateExtent[1][1] = +_[1][1]),
                zoom)
              : [
                  [translateExtent[0][0], translateExtent[0][1]],
                  [translateExtent[1][0], translateExtent[1][1]],
                ]
          }),
          (zoom.constrain = function (_) {
            return arguments.length ? ((constrain = _), zoom) : constrain
          }),
          (zoom.duration = function (_) {
            return arguments.length ? ((duration = +_), zoom) : duration
          }),
          (zoom.interpolate = function (_) {
            return arguments.length ? ((interpolate = _), zoom) : interpolate
          }),
          (zoom.on = function () {
            var value = listeners.on.apply(listeners, arguments)
            return value === listeners ? zoom : value
          }),
          (zoom.clickDistance = function (_) {
            return arguments.length
              ? ((clickDistance2 = (_ = +_) * _), zoom)
              : Math.sqrt(clickDistance2)
          }),
          (zoom.tapDistance = function (_) {
            return arguments.length ? ((tapDistance = +_), zoom) : tapDistance
          }),
          zoom
        )
      }
      Transform.prototype
    },
    '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ChartColumn })
        const ChartColumn = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChartColumn', [
          ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
          ['path', { d: 'M18 17V9', key: '2bz60n' }],
          ['path', { d: 'M13 17V5', key: '1frdt8' }],
          ['path', { d: 'M8 17v-3', key: '17ska0' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => RotateCcw })
        const RotateCcw = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('RotateCcw', [
          [
            'path',
            {
              d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8',
              key: '1357e3',
            },
          ],
          ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Search })
        const Search = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Search', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-in.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ZoomIn })
        const ZoomIn = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ZoomIn', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          [
            'line',
            { x1: '21', x2: '16.65', y1: '21', y2: '16.65', key: '13gj7c' },
          ],
          ['line', { x1: '11', x2: '11', y1: '8', y2: '14', key: '1vmskp' }],
          ['line', { x1: '8', x2: '14', y1: '11', y2: '11', key: 'durymu' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-out.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => ZoomOut })
        const ZoomOut = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ZoomOut', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          [
            'line',
            { x1: '21', x2: '16.65', y1: '21', y2: '16.65', key: '13gj7c' },
          ],
          ['line', { x1: '8', x2: '14', y1: '11', y2: '11', key: 'durymu' }],
        ])
      },
  },
])
