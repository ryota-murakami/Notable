/*! For license information please see 3246.f4a8c36d.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3246],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => BookOpen })
        const BookOpen = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('BookOpen', [
          ['path', { d: 'M12 7v14', key: '1akyts' }],
          [
            'path',
            {
              d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
              key: 'ruj8y',
            },
          ],
        ])
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/palette.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trending-up.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => TrendingUp })
        const TrendingUp = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('TrendingUp', [
          [
            'polyline',
            { points: '22 7 13.5 15.5 8.5 10.5 2 17', key: '126l90' },
          ],
          ['polyline', { points: '16 7 22 7 22 13', key: 'kwv8wd' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, { A: () => Users })
        const Users = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Users', [
          [
            'path',
            { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' },
          ],
          ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
          ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
          ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75', key: '1da9ce' }],
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
  },
])
