/*! For license information please see components-loading-stories.46db795e.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [904],
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
    './design-system/components/loading.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllLoadingTypes: () => AllLoadingTypes,
          BarsColors: () => BarsColors,
          BarsDefault: () => BarsDefault,
          BarsSizes: () => BarsSizes,
          CircularProgressAnimated: () => CircularProgressAnimated,
          CircularProgressColors: () => CircularProgressColors,
          CircularProgressDefault: () => CircularProgressDefault,
          CircularProgressSizes: () => CircularProgressSizes,
          CircularProgressWithoutLabel: () => CircularProgressWithoutLabel,
          DotsColors: () => DotsColors,
          DotsDefault: () => DotsDefault,
          DotsSizes: () => DotsSizes,
          LoadingOverlayExample: () => LoadingOverlayExample,
          LoadingOverlayNoBlur: () => LoadingOverlayNoBlur,
          LoadingOverlaySpinners: () => LoadingOverlaySpinners,
          ProgressAnimated: () => ProgressAnimated,
          ProgressColors: () => ProgressColors,
          ProgressDefault: () => ProgressDefault,
          ProgressSizes: () => ProgressSizes,
          ProgressWithLabel: () => ProgressWithLabel,
          PulseColors: () => PulseColors,
          PulseDefault: () => PulseDefault,
          PulseSizes: () => PulseSizes,
          RealWorldExample: () => RealWorldExample,
          SkeletonAnimations: () => SkeletonAnimations,
          SkeletonCardExample: () => SkeletonCardExample,
          SkeletonDefault: () => SkeletonDefault,
          SkeletonVariants: () => SkeletonVariants,
          SpinnerColors: () => SpinnerColors,
          SpinnerDefault: () => SpinnerDefault,
          SpinnerSizes: () => SpinnerSizes,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => loading_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        theme = __webpack_require__('./design-system/utils/theme.ts'),
        proxy = __webpack_require__(
          '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        )
      function cov_1r58q3u4a3() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/loading.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/loading.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 24 },
                end: { line: 12, column: 5 },
              },
              1: {
                start: { line: 13, column: 25 },
                end: { line: 17, column: 5 },
              },
              2: {
                start: { line: 18, column: 4 },
                end: { line: 38, column: 7 },
              },
              3: {
                start: { line: 41, column: 24 },
                end: { line: 45, column: 5 },
              },
              4: {
                start: { line: 46, column: 25 },
                end: { line: 50, column: 5 },
              },
              5: {
                start: { line: 51, column: 24 },
                end: { line: 58, column: 5 },
              },
              6: {
                start: { line: 59, column: 4 },
                end: { line: 78, column: 7 },
              },
              7: {
                start: { line: 65, column: 37 },
                end: { line: 77, column: 21 },
              },
              8: {
                start: { line: 81, column: 24 },
                end: { line: 86, column: 5 },
              },
              9: {
                start: { line: 87, column: 25 },
                end: { line: 90, column: 5 },
              },
              10: {
                start: { line: 91, column: 4 },
                end: { line: 136, column: 7 },
              },
              11: {
                start: { line: 139, column: 24 },
                end: { line: 143, column: 5 },
              },
              12: {
                start: { line: 144, column: 25 },
                end: { line: 147, column: 5 },
              },
              13: {
                start: { line: 148, column: 4 },
                end: { line: 172, column: 7 },
              },
              14: {
                start: { line: 156, column: 37 },
                end: { line: 171, column: 21 },
              },
              15: {
                start: { line: 175, column: 27 },
                end: { line: 180, column: 5 },
              },
              16: {
                start: { line: 181, column: 29 },
                end: { line: 185, column: 5 },
              },
              17: {
                start: { line: 186, column: 18 },
                end: { line: 189, column: 5 },
              },
              18: {
                start: { line: 190, column: 4 },
                end: { line: 196, column: 7 },
              },
              19: {
                start: { line: 199, column: 24 },
                end: { line: 203, column: 5 },
              },
              20: {
                start: { line: 204, column: 25 },
                end: { line: 210, column: 5 },
              },
              21: {
                start: { line: 211, column: 4 },
                end: { line: 238, column: 7 },
              },
              22: {
                start: { line: 241, column: 4 },
                end: { line: 241, column: 30 },
              },
              23: {
                start: { line: 241, column: 18 },
                end: { line: 241, column: 30 },
              },
              24: {
                start: { line: 242, column: 29 },
                end: { line: 247, column: 14 },
              },
              25: {
                start: { line: 248, column: 4 },
                end: { line: 284, column: 7 },
              },
              26: {
                start: { line: 287, column: 19 },
                end: { line: 287, column: 43 },
              },
              27: {
                start: { line: 288, column: 26 },
                end: { line: 288, column: 46 },
              },
              28: {
                start: { line: 289, column: 19 },
                end: { line: 289, column: 62 },
              },
              29: {
                start: { line: 290, column: 25 },
                end: { line: 296, column: 5 },
              },
              30: {
                start: { line: 297, column: 4 },
                end: { line: 352, column: 7 },
              },
              31: {
                start: { line: 354, column: 0 },
                end: { line: 423, column: 2 },
              },
              32: {
                start: { line: 424, column: 0 },
                end: { line: 489, column: 2 },
              },
              33: {
                start: { line: 490, column: 0 },
                end: { line: 555, column: 2 },
              },
              34: {
                start: { line: 556, column: 0 },
                end: { line: 617, column: 2 },
              },
              35: {
                start: { line: 618, column: 0 },
                end: { line: 719, column: 2 },
              },
              36: {
                start: { line: 720, column: 0 },
                end: { line: 811, column: 2 },
              },
              37: {
                start: { line: 812, column: 0 },
                end: { line: 892, column: 2 },
              },
              38: {
                start: { line: 893, column: 0 },
                end: { line: 980, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Spinner',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 23 },
                },
                loc: {
                  start: { line: 6, column: 71 },
                  end: { line: 39, column: 1 },
                },
                line: 6,
              },
              1: {
                name: 'Dots',
                decl: {
                  start: { line: 40, column: 16 },
                  end: { line: 40, column: 20 },
                },
                loc: {
                  start: { line: 40, column: 68 },
                  end: { line: 79, column: 1 },
                },
                line: 40,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 65, column: 14 },
                  end: { line: 65, column: 15 },
                },
                loc: {
                  start: { line: 65, column: 37 },
                  end: { line: 77, column: 21 },
                },
                line: 65,
              },
              3: {
                name: 'Pulse',
                decl: {
                  start: { line: 80, column: 16 },
                  end: { line: 80, column: 21 },
                },
                loc: {
                  start: { line: 80, column: 69 },
                  end: { line: 137, column: 1 },
                },
                line: 80,
              },
              4: {
                name: 'Bars',
                decl: {
                  start: { line: 138, column: 16 },
                  end: { line: 138, column: 20 },
                },
                loc: {
                  start: { line: 138, column: 68 },
                  end: { line: 173, column: 1 },
                },
                line: 138,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 156, column: 14 },
                  end: { line: 156, column: 15 },
                },
                loc: {
                  start: { line: 156, column: 37 },
                  end: { line: 171, column: 21 },
                },
                line: 156,
              },
              6: {
                name: 'Skeleton',
                decl: {
                  start: { line: 174, column: 16 },
                  end: { line: 174, column: 24 },
                },
                loc: {
                  start: { line: 174, column: 94 },
                  end: { line: 197, column: 1 },
                },
                line: 174,
              },
              7: {
                name: 'Progress',
                decl: {
                  start: { line: 198, column: 16 },
                  end: { line: 198, column: 24 },
                },
                loc: {
                  start: { line: 198, column: 98 },
                  end: { line: 239, column: 1 },
                },
                line: 198,
              },
              8: {
                name: 'LoadingOverlay',
                decl: {
                  start: { line: 240, column: 16 },
                  end: { line: 240, column: 30 },
                },
                loc: {
                  start: { line: 240, column: 119 },
                  end: { line: 285, column: 1 },
                },
                line: 240,
              },
              9: {
                name: 'CircularProgress',
                decl: {
                  start: { line: 286, column: 16 },
                  end: { line: 286, column: 32 },
                },
                loc: {
                  start: { line: 286, column: 121 },
                  end: { line: 353, column: 1 },
                },
                line: 286,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 6, column: 26 },
                  end: { line: 6, column: 37 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 6, column: 33 },
                    end: { line: 6, column: 37 },
                  },
                ],
                line: 6,
              },
              1: {
                loc: {
                  start: { line: 6, column: 39 },
                  end: { line: 6, column: 56 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 6, column: 47 },
                    end: { line: 6, column: 56 },
                  },
                ],
                line: 6,
              },
              2: {
                loc: {
                  start: { line: 40, column: 23 },
                  end: { line: 40, column: 34 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 40, column: 30 },
                    end: { line: 40, column: 34 },
                  },
                ],
                line: 40,
              },
              3: {
                loc: {
                  start: { line: 40, column: 36 },
                  end: { line: 40, column: 53 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 40, column: 44 },
                    end: { line: 40, column: 53 },
                  },
                ],
                line: 40,
              },
              4: {
                loc: {
                  start: { line: 80, column: 24 },
                  end: { line: 80, column: 35 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 80, column: 31 },
                    end: { line: 80, column: 35 },
                  },
                ],
                line: 80,
              },
              5: {
                loc: {
                  start: { line: 80, column: 37 },
                  end: { line: 80, column: 54 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 80, column: 45 },
                    end: { line: 80, column: 54 },
                  },
                ],
                line: 80,
              },
              6: {
                loc: {
                  start: { line: 138, column: 23 },
                  end: { line: 138, column: 34 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 138, column: 30 },
                    end: { line: 138, column: 34 },
                  },
                ],
                line: 138,
              },
              7: {
                loc: {
                  start: { line: 138, column: 36 },
                  end: { line: 138, column: 53 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 138, column: 44 },
                    end: { line: 138, column: 53 },
                  },
                ],
                line: 138,
              },
              8: {
                loc: {
                  start: { line: 174, column: 38 },
                  end: { line: 174, column: 54 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 174, column: 48 },
                    end: { line: 174, column: 54 },
                  },
                ],
                line: 174,
              },
              9: {
                loc: {
                  start: { line: 174, column: 71 },
                  end: { line: 174, column: 90 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 174, column: 83 },
                    end: { line: 174, column: 90 },
                  },
                ],
                line: 174,
              },
              10: {
                loc: {
                  start: { line: 187, column: 15 },
                  end: { line: 187, column: 66 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 187, column: 15 },
                    end: { line: 187, column: 20 },
                  },
                  {
                    start: { line: 187, column: 25 },
                    end: { line: 187, column: 65 },
                  },
                ],
                line: 187,
              },
              11: {
                loc: {
                  start: { line: 187, column: 25 },
                  end: { line: 187, column: 65 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 187, column: 50 },
                    end: { line: 187, column: 56 },
                  },
                  {
                    start: { line: 187, column: 59 },
                    end: { line: 187, column: 65 },
                  },
                ],
                line: 187,
              },
              12: {
                loc: {
                  start: { line: 188, column: 16 },
                  end: { line: 188, column: 99 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 188, column: 16 },
                    end: { line: 188, column: 22 },
                  },
                  {
                    start: { line: 188, column: 27 },
                    end: { line: 188, column: 98 },
                  },
                ],
                line: 188,
              },
              13: {
                loc: {
                  start: { line: 188, column: 27 },
                  end: { line: 188, column: 98 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 188, column: 52 },
                    end: { line: 188, column: 58 },
                  },
                  {
                    start: { line: 188, column: 61 },
                    end: { line: 188, column: 98 },
                  },
                ],
                line: 188,
              },
              14: {
                loc: {
                  start: { line: 188, column: 61 },
                  end: { line: 188, column: 98 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 188, column: 82 },
                    end: { line: 188, column: 88 },
                  },
                  {
                    start: { line: 188, column: 91 },
                    end: { line: 188, column: 98 },
                  },
                ],
                line: 188,
              },
              15: {
                loc: {
                  start: { line: 193, column: 18 },
                  end: { line: 195, column: 10 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 193, column: 18 },
                    end: { line: 193, column: 38 },
                  },
                  {
                    start: { line: 193, column: 56 },
                    end: { line: 195, column: 10 },
                  },
                ],
                line: 193,
              },
              16: {
                loc: {
                  start: { line: 198, column: 34 },
                  end: { line: 198, column: 45 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 198, column: 41 },
                    end: { line: 198, column: 45 },
                  },
                ],
                line: 198,
              },
              17: {
                loc: {
                  start: { line: 198, column: 47 },
                  end: { line: 198, column: 64 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 198, column: 55 },
                    end: { line: 198, column: 64 },
                  },
                ],
                line: 198,
              },
              18: {
                loc: {
                  start: { line: 198, column: 66 },
                  end: { line: 198, column: 83 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 198, column: 78 },
                    end: { line: 198, column: 83 },
                  },
                ],
                line: 198,
              },
              19: {
                loc: {
                  start: { line: 230, column: 12 },
                  end: { line: 236, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 230, column: 12 },
                    end: { line: 230, column: 21 },
                  },
                  {
                    start: { line: 230, column: 39 },
                    end: { line: 236, column: 14 },
                  },
                ],
                line: 230,
              },
              20: {
                loc: {
                  start: { line: 240, column: 52 },
                  end: { line: 240, column: 71 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 240, column: 62 },
                    end: { line: 240, column: 71 },
                  },
                ],
                line: 240,
              },
              21: {
                loc: {
                  start: { line: 240, column: 73 },
                  end: { line: 240, column: 84 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 240, column: 80 },
                    end: { line: 240, column: 84 },
                  },
                ],
                line: 240,
              },
              22: {
                loc: {
                  start: { line: 240, column: 86 },
                  end: { line: 240, column: 104 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 240, column: 99 },
                    end: { line: 240, column: 104 },
                  },
                ],
                line: 240,
              },
              23: {
                loc: {
                  start: { line: 241, column: 4 },
                  end: { line: 241, column: 30 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 241, column: 4 },
                    end: { line: 241, column: 30 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 241,
              },
              24: {
                loc: {
                  start: { line: 249, column: 80 },
                  end: { line: 249, column: 106 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 249, column: 80 },
                    end: { line: 249, column: 84 },
                  },
                  {
                    start: { line: 249, column: 88 },
                    end: { line: 249, column: 106 },
                  },
                ],
                line: 249,
              },
              25: {
                loc: {
                  start: { line: 249, column: 108 },
                  end: { line: 249, column: 129 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 249, column: 108 },
                    end: { line: 249, column: 118 },
                  },
                  {
                    start: { line: 249, column: 122 },
                    end: { line: 249, column: 129 },
                  },
                ],
                line: 249,
              },
              26: {
                loc: {
                  start: { line: 268, column: 16 },
                  end: { line: 281, column: 18 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 268, column: 16 },
                    end: { line: 268, column: 24 },
                  },
                  {
                    start: { line: 268, column: 42 },
                    end: { line: 281, column: 18 },
                  },
                ],
                line: 268,
              },
              27: {
                loc: {
                  start: { line: 286, column: 42 },
                  end: { line: 286, column: 52 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 286, column: 49 },
                    end: { line: 286, column: 52 },
                  },
                ],
                line: 286,
              },
              28: {
                loc: {
                  start: { line: 286, column: 54 },
                  end: { line: 286, column: 69 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 286, column: 68 },
                    end: { line: 286, column: 69 },
                  },
                ],
                line: 286,
              },
              29: {
                loc: {
                  start: { line: 286, column: 71 },
                  end: { line: 286, column: 88 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 286, column: 79 },
                    end: { line: 286, column: 88 },
                  },
                ],
                line: 286,
              },
              30: {
                loc: {
                  start: { line: 286, column: 90 },
                  end: { line: 286, column: 106 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 286, column: 102 },
                    end: { line: 286, column: 106 },
                  },
                ],
                line: 286,
              },
              31: {
                loc: {
                  start: { line: 341, column: 12 },
                  end: { line: 350, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 341, column: 12 },
                    end: { line: 341, column: 21 },
                  },
                  {
                    start: { line: 341, column: 39 },
                    end: { line: 350, column: 14 },
                  },
                ],
                line: 341,
              },
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 0,
              28: 0,
              29: 0,
              30: 0,
              31: 0,
              32: 0,
              33: 0,
              34: 0,
              35: 0,
              36: 0,
              37: 0,
              38: 0,
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
            b: {
              0: [0],
              1: [0],
              2: [0],
              3: [0],
              4: [0],
              5: [0],
              6: [0],
              7: [0],
              8: [0],
              9: [0],
              10: [0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0],
              15: [0, 0],
              16: [0],
              17: [0],
              18: [0],
              19: [0, 0],
              20: [0],
              21: [0],
              22: [0],
              23: [0, 0],
              24: [0, 0],
              25: [0, 0],
              26: [0, 0],
              27: [0],
              28: [0],
              29: [0],
              30: [0],
              31: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/loading.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { cn } from '../utils/theme'\nimport { motion } from 'framer-motion'\n\n// Spinner Loading\ninterface SpinnerProps {\n  size?: 'sm' | 'md' | 'lg' | 'xl'\n  color?: 'primary' | 'secondary' | 'white'\n  className?: string\n}\n\nexport function Spinner({\n  size = 'md',\n  color = 'primary',\n  className,\n}: SpinnerProps) {\n  const sizeClasses = {\n    sm: 'h-4 w-4',\n    md: 'h-8 w-8',\n    lg: 'h-12 w-12',\n    xl: 'h-16 w-16',\n  }\n\n  const colorClasses = {\n    primary: 'text-primary',\n    secondary: 'text-secondary',\n    white: 'text-white',\n  }\n\n  return (\n    <svg\n      className={cn(\n        'animate-spin',\n        sizeClasses[size],\n        colorClasses[color],\n        className\n      )}\n      xmlns='http://www.w3.org/2000/svg'\n      fill='none'\n      viewBox='0 0 24 24'\n    >\n      <circle\n        className='opacity-25'\n        cx='12'\n        cy='12'\n        r='10'\n        stroke='currentColor'\n        strokeWidth='4'\n      />\n      <path\n        className='opacity-75'\n        fill='currentColor'\n        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'\n      />\n    </svg>\n  )\n}\n\n// Dots Loading\ninterface DotsProps {\n  size?: 'sm' | 'md' | 'lg'\n  color?: 'primary' | 'secondary' | 'white'\n  className?: string\n}\n\nexport function Dots({ size = 'md', color = 'primary', className }: DotsProps) {\n  const sizeClasses = {\n    sm: 'h-2 w-2',\n    md: 'h-3 w-3',\n    lg: 'h-4 w-4',\n  }\n\n  const colorClasses = {\n    primary: 'bg-primary',\n    secondary: 'bg-secondary',\n    white: 'bg-white',\n  }\n\n  const dotVariants = {\n    initial: { y: 0 },\n    animate: { y: -10 },\n  }\n\n  return (\n    <div className={cn('flex space-x-2', className)}>\n      {[0, 1, 2].map((index) => (\n        <motion.div\n          key={index}\n          className={cn('rounded-full', sizeClasses[size], colorClasses[color])}\n          variants={dotVariants}\n          initial='initial'\n          animate='animate'\n          transition={{\n            duration: 0.5,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            ease: 'easeInOut',\n            delay: index * 0.15,\n          }}\n        />\n      ))}\n    </div>\n  )\n}\n\n// Pulse Loading\ninterface PulseProps {\n  size?: 'sm' | 'md' | 'lg' | 'xl'\n  color?: 'primary' | 'secondary'\n  className?: string\n}\n\nexport function Pulse({\n  size = 'md',\n  color = 'primary',\n  className,\n}: PulseProps) {\n  const sizeClasses = {\n    sm: 'h-8 w-8',\n    md: 'h-12 w-12',\n    lg: 'h-16 w-16',\n    xl: 'h-20 w-20',\n  }\n\n  const colorClasses = {\n    primary: 'bg-primary',\n    secondary: 'bg-secondary',\n  }\n\n  return (\n    <div className={cn('relative', sizeClasses[size], className)}>\n      <motion.div\n        className={cn(\n          'absolute inset-0 rounded-full opacity-75',\n          colorClasses[color]\n        )}\n        animate={{\n          scale: [1, 1.2, 1],\n          opacity: [0.7, 0.3, 0.7],\n        }}\n        transition={{\n          duration: 1.5,\n          repeat: Infinity,\n          ease: 'easeInOut',\n        }}\n      />\n      <motion.div\n        className={cn(\n          'absolute inset-0 rounded-full opacity-75',\n          colorClasses[color]\n        )}\n        animate={{\n          scale: [1, 1.3, 1],\n          opacity: [0.5, 0.2, 0.5],\n        }}\n        transition={{\n          duration: 1.5,\n          repeat: Infinity,\n          ease: 'easeInOut',\n          delay: 0.5,\n        }}\n      />\n    </div>\n  )\n}\n\n// Bar Loading\ninterface BarsProps {\n  size?: 'sm' | 'md' | 'lg'\n  color?: 'primary' | 'secondary'\n  className?: string\n}\n\nexport function Bars({ size = 'md', color = 'primary', className }: BarsProps) {\n  const sizeClasses = {\n    sm: 'h-4 w-1',\n    md: 'h-8 w-1.5',\n    lg: 'h-12 w-2',\n  }\n\n  const colorClasses = {\n    primary: 'bg-primary',\n    secondary: 'bg-secondary',\n  }\n\n  return (\n    <div className={cn('flex space-x-1', className)}>\n      {[0, 1, 2, 3, 4].map((index) => (\n        <motion.div\n          key={index}\n          className={cn('rounded-full', sizeClasses[size], colorClasses[color])}\n          animate={{\n            scaleY: [1, 1.5, 1],\n          }}\n          transition={{\n            duration: 0.6,\n            repeat: Infinity,\n            ease: 'easeInOut',\n            delay: index * 0.1,\n          }}\n        />\n      ))}\n    </div>\n  )\n}\n\n// Skeleton Loading\ninterface SkeletonProps {\n  className?: string\n  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'\n  width?: string | number\n  height?: string | number\n  animation?: 'pulse' | 'wave' | 'none'\n}\n\nexport function Skeleton({\n  className,\n  variant = 'text',\n  width,\n  height,\n  animation = 'pulse',\n}: SkeletonProps) {\n  const variantClasses = {\n    text: 'h-4 w-full rounded',\n    circular: 'rounded-full',\n    rectangular: 'rounded-none',\n    rounded: 'rounded-lg',\n  }\n\n  const animationClasses = {\n    pulse: 'animate-pulse',\n    wave: 'animate-shimmer',\n    none: '',\n  }\n\n  const style: React.CSSProperties = {\n    width: width || (variant === 'circular' ? '40px' : '100%'),\n    height:\n      height ||\n      (variant === 'circular' ? '40px' : variant === 'text' ? '16px' : '100px'),\n  }\n\n  return (\n    <div\n      className={cn(\n        'bg-muted relative overflow-hidden',\n        variantClasses[variant],\n        animationClasses[animation],\n        className\n      )}\n      style={style}\n    >\n      {animation === 'wave' && (\n        <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent' />\n      )}\n    </div>\n  )\n}\n\n// Progress Loading\ninterface ProgressProps {\n  value: number\n  size?: 'sm' | 'md' | 'lg'\n  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'\n  showLabel?: boolean\n  className?: string\n}\n\nexport function Progress({\n  value,\n  size = 'md',\n  color = 'primary',\n  showLabel = false,\n  className,\n}: ProgressProps) {\n  const sizeClasses = {\n    sm: 'h-1',\n    md: 'h-2',\n    lg: 'h-3',\n  }\n\n  const colorClasses = {\n    primary: 'bg-primary',\n    secondary: 'bg-secondary',\n    success: 'bg-success',\n    warning: 'bg-warning',\n    error: 'bg-destructive',\n  }\n\n  return (\n    <div className={cn('w-full', className)}>\n      <div\n        className={cn(\n          'w-full bg-muted rounded-full overflow-hidden',\n          sizeClasses[size]\n        )}\n      >\n        <motion.div\n          className={cn('h-full rounded-full', colorClasses[color])}\n          initial={{ width: 0 }}\n          animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}\n          transition={{ duration: 0.5, ease: 'easeOut' }}\n        />\n      </div>\n      {showLabel && (\n        <p className='mt-2 text-sm text-muted-foreground text-center'>\n          {Math.round(value)}%\n        </p>\n      )}\n    </div>\n  )\n}\n\n// Loading Overlay\ninterface LoadingOverlayProps {\n  visible: boolean\n  children?: React.ReactNode\n  spinner?: 'spinner' | 'dots' | 'pulse' | 'bars'\n  blur?: boolean\n  fullScreen?: boolean\n  className?: string\n}\n\nexport function LoadingOverlay({\n  visible,\n  children,\n  spinner = 'spinner',\n  blur = true,\n  fullScreen = false,\n  className,\n}: LoadingOverlayProps) {\n  if (!visible) return null\n\n  const LoadingComponent = {\n    spinner: Spinner,\n    dots: Dots,\n    pulse: Pulse,\n    bars: Bars,\n  }[spinner]\n\n  return (\n    <motion.div\n      className={cn(\n        'absolute inset-0 z-50 flex items-center justify-center',\n        blur && 'backdrop-blur-sm',\n        fullScreen && 'fixed',\n        'bg-background/80',\n        className\n      )}\n      initial={{ opacity: 0 }}\n      animate={{ opacity: 1 }}\n      exit={{ opacity: 0 }}\n      transition={{ duration: 0.2 }}\n    >\n      <div className='flex flex-col items-center space-y-4'>\n        <LoadingComponent size='lg' />\n        {children && (\n          <motion.div\n            initial={{ opacity: 0, y: 10 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.2 }}\n          >\n            {children}\n          </motion.div>\n        )}\n      </div>\n    </motion.div>\n  )\n}\n\n// Circular Progress\ninterface CircularProgressProps {\n  value: number\n  size?: number\n  strokeWidth?: number\n  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'\n  showLabel?: boolean\n  className?: string\n}\n\nexport function CircularProgress({\n  value,\n  size = 120,\n  strokeWidth = 8,\n  color = 'primary',\n  showLabel = true,\n  className,\n}: CircularProgressProps) {\n  const radius = (size - strokeWidth) / 2\n  const circumference = radius * 2 * Math.PI\n  const offset = circumference - (value / 100) * circumference\n\n  const colorClasses = {\n    primary: 'text-primary',\n    secondary: 'text-secondary',\n    success: 'text-success',\n    warning: 'text-warning',\n    error: 'text-destructive',\n  }\n\n  return (\n    <div\n      className={cn('relative', className)}\n      style={{ width: size, height: size }}\n    >\n      <svg className='transform -rotate-90' width={size} height={size}>\n        <circle\n          cx={size / 2}\n          cy={size / 2}\n          r={radius}\n          stroke='currentColor'\n          strokeWidth={strokeWidth}\n          fill='none'\n          className='text-muted'\n        />\n        <motion.circle\n          cx={size / 2}\n          cy={size / 2}\n          r={radius}\n          stroke='currentColor'\n          strokeWidth={strokeWidth}\n          fill='none'\n          strokeDasharray={circumference}\n          className={colorClasses[color]}\n          initial={{ strokeDashoffset: circumference }}\n          animate={{ strokeDashoffset: offset }}\n          transition={{ duration: 0.5, ease: 'easeOut' }}\n          strokeLinecap='round'\n        />\n      </svg>\n      {showLabel && (\n        <div className='absolute inset-0 flex items-center justify-center'>\n          <span className='text-2xl font-semibold'>{Math.round(value)}%</span>\n        </div>\n      )}\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '9fca01588cb72c9245149773ef236464db677bf0',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '9fca01588cb72c9245149773ef236464db677bf0' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_1r58q3u4a3 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function Spinner({
        size = (cov_1r58q3u4a3().b[0][0]++, 'md'),
        color = (cov_1r58q3u4a3().b[1][0]++, 'primary'),
        className,
      }) {
        cov_1r58q3u4a3().f[0]++
        const sizeClasses =
            (cov_1r58q3u4a3().s[0]++,
            { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12', xl: 'h-16 w-16' }),
          colorClasses =
            (cov_1r58q3u4a3().s[1]++,
            {
              primary: 'text-primary',
              secondary: 'text-secondary',
              white: 'text-white',
            })
        return (
          cov_1r58q3u4a3().s[2]++,
          (0, jsx_runtime.jsxs)('svg', {
            className: (0, theme.cn)(
              'animate-spin',
              sizeClasses[size],
              colorClasses[color],
              className
            ),
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
              (0, jsx_runtime.jsx)('circle', {
                className: 'opacity-25',
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '4',
              }),
              (0, jsx_runtime.jsx)('path', {
                className: 'opacity-75',
                fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
              }),
            ],
          })
        )
      }
      function Dots({
        size = (cov_1r58q3u4a3().b[2][0]++, 'md'),
        color = (cov_1r58q3u4a3().b[3][0]++, 'primary'),
        className,
      }) {
        cov_1r58q3u4a3().f[1]++
        const sizeClasses =
            (cov_1r58q3u4a3().s[3]++,
            { sm: 'h-2 w-2', md: 'h-3 w-3', lg: 'h-4 w-4' }),
          colorClasses =
            (cov_1r58q3u4a3().s[4]++,
            {
              primary: 'bg-primary',
              secondary: 'bg-secondary',
              white: 'bg-white',
            }),
          dotVariants =
            (cov_1r58q3u4a3().s[5]++,
            { initial: { y: 0 }, animate: { y: -10 } })
        return (
          cov_1r58q3u4a3().s[6]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, theme.cn)('flex space-x-2', className),
            children: [0, 1, 2].map(
              (index) => (
                cov_1r58q3u4a3().f[2]++,
                cov_1r58q3u4a3().s[7]++,
                (0, jsx_runtime.jsx)(
                  proxy.P.div,
                  {
                    className: (0, theme.cn)(
                      'rounded-full',
                      sizeClasses[size],
                      colorClasses[color]
                    ),
                    variants: dotVariants,
                    initial: 'initial',
                    animate: 'animate',
                    transition: {
                      duration: 0.5,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.15 * index,
                    },
                  },
                  index
                )
              )
            ),
          })
        )
      }
      function Pulse({
        size = (cov_1r58q3u4a3().b[4][0]++, 'md'),
        color = (cov_1r58q3u4a3().b[5][0]++, 'primary'),
        className,
      }) {
        cov_1r58q3u4a3().f[3]++
        const sizeClasses =
            (cov_1r58q3u4a3().s[8]++,
            {
              sm: 'h-8 w-8',
              md: 'h-12 w-12',
              lg: 'h-16 w-16',
              xl: 'h-20 w-20',
            }),
          colorClasses =
            (cov_1r58q3u4a3().s[9]++,
            { primary: 'bg-primary', secondary: 'bg-secondary' })
        return (
          cov_1r58q3u4a3().s[10]++,
          (0, jsx_runtime.jsxs)('div', {
            className: (0, theme.cn)('relative', sizeClasses[size], className),
            children: [
              (0, jsx_runtime.jsx)(proxy.P.div, {
                className: (0, theme.cn)(
                  'absolute inset-0 rounded-full opacity-75',
                  colorClasses[color]
                ),
                animate: { scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] },
                transition: { duration: 1.5, repeat: 1 / 0, ease: 'easeInOut' },
              }),
              (0, jsx_runtime.jsx)(proxy.P.div, {
                className: (0, theme.cn)(
                  'absolute inset-0 rounded-full opacity-75',
                  colorClasses[color]
                ),
                animate: { scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] },
                transition: {
                  duration: 1.5,
                  repeat: 1 / 0,
                  ease: 'easeInOut',
                  delay: 0.5,
                },
              }),
            ],
          })
        )
      }
      function Bars({
        size = (cov_1r58q3u4a3().b[6][0]++, 'md'),
        color = (cov_1r58q3u4a3().b[7][0]++, 'primary'),
        className,
      }) {
        cov_1r58q3u4a3().f[4]++
        const sizeClasses =
            (cov_1r58q3u4a3().s[11]++,
            { sm: 'h-4 w-1', md: 'h-8 w-1.5', lg: 'h-12 w-2' }),
          colorClasses =
            (cov_1r58q3u4a3().s[12]++,
            { primary: 'bg-primary', secondary: 'bg-secondary' })
        return (
          cov_1r58q3u4a3().s[13]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, theme.cn)('flex space-x-1', className),
            children: [0, 1, 2, 3, 4].map(
              (index) => (
                cov_1r58q3u4a3().f[5]++,
                cov_1r58q3u4a3().s[14]++,
                (0, jsx_runtime.jsx)(
                  proxy.P.div,
                  {
                    className: (0, theme.cn)(
                      'rounded-full',
                      sizeClasses[size],
                      colorClasses[color]
                    ),
                    animate: { scaleY: [1, 1.5, 1] },
                    transition: {
                      duration: 0.6,
                      repeat: 1 / 0,
                      ease: 'easeInOut',
                      delay: 0.1 * index,
                    },
                  },
                  index
                )
              )
            ),
          })
        )
      }
      function Skeleton({
        className,
        variant = (cov_1r58q3u4a3().b[8][0]++, 'text'),
        width,
        height,
        animation = (cov_1r58q3u4a3().b[9][0]++, 'pulse'),
      }) {
        cov_1r58q3u4a3().f[6]++
        const variantClasses =
            (cov_1r58q3u4a3().s[15]++,
            {
              text: 'h-4 w-full rounded',
              circular: 'rounded-full',
              rectangular: 'rounded-none',
              rounded: 'rounded-lg',
            }),
          animationClasses =
            (cov_1r58q3u4a3().s[16]++,
            { pulse: 'animate-pulse', wave: 'animate-shimmer', none: '' }),
          style =
            (cov_1r58q3u4a3().s[17]++,
            {
              width:
                (cov_1r58q3u4a3().b[10][0]++,
                width ||
                  (cov_1r58q3u4a3().b[10][1]++,
                  'circular' === variant
                    ? (cov_1r58q3u4a3().b[11][0]++, '40px')
                    : (cov_1r58q3u4a3().b[11][1]++, '100%'))),
              height:
                (cov_1r58q3u4a3().b[12][0]++,
                height ||
                  (cov_1r58q3u4a3().b[12][1]++,
                  'circular' === variant
                    ? (cov_1r58q3u4a3().b[13][0]++, '40px')
                    : (cov_1r58q3u4a3().b[13][1]++,
                      'text' === variant
                        ? (cov_1r58q3u4a3().b[14][0]++, '16px')
                        : (cov_1r58q3u4a3().b[14][1]++, '100px')))),
            })
        return (
          cov_1r58q3u4a3().s[18]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, theme.cn)(
              'bg-muted relative overflow-hidden',
              variantClasses[variant],
              animationClasses[animation],
              className
            ),
            style,
            children:
              (cov_1r58q3u4a3().b[15][0]++,
              'wave' === animation &&
                (cov_1r58q3u4a3().b[15][1]++,
                (0, jsx_runtime.jsx)('div', {
                  className:
                    'absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent',
                }))),
          })
        )
      }
      function Progress({
        value,
        size = (cov_1r58q3u4a3().b[16][0]++, 'md'),
        color = (cov_1r58q3u4a3().b[17][0]++, 'primary'),
        showLabel = (cov_1r58q3u4a3().b[18][0]++, !1),
        className,
      }) {
        cov_1r58q3u4a3().f[7]++
        const sizeClasses =
            (cov_1r58q3u4a3().s[19]++, { sm: 'h-1', md: 'h-2', lg: 'h-3' }),
          colorClasses =
            (cov_1r58q3u4a3().s[20]++,
            {
              primary: 'bg-primary',
              secondary: 'bg-secondary',
              success: 'bg-success',
              warning: 'bg-warning',
              error: 'bg-destructive',
            })
        return (
          cov_1r58q3u4a3().s[21]++,
          (0, jsx_runtime.jsxs)('div', {
            className: (0, theme.cn)('w-full', className),
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: (0, theme.cn)(
                  'w-full bg-muted rounded-full overflow-hidden',
                  sizeClasses[size]
                ),
                children: (0, jsx_runtime.jsx)(proxy.P.div, {
                  className: (0, theme.cn)(
                    'h-full rounded-full',
                    colorClasses[color]
                  ),
                  initial: { width: 0 },
                  animate: { width: `${Math.min(100, Math.max(0, value))}%` },
                  transition: { duration: 0.5, ease: 'easeOut' },
                }),
              }),
              (cov_1r58q3u4a3().b[19][0]++,
              showLabel &&
                (cov_1r58q3u4a3().b[19][1]++,
                (0, jsx_runtime.jsxs)('p', {
                  className: 'mt-2 text-sm text-muted-foreground text-center',
                  children: [Math.round(value), '%'],
                }))),
            ],
          })
        )
      }
      function LoadingOverlay({
        visible,
        children,
        spinner = (cov_1r58q3u4a3().b[20][0]++, 'spinner'),
        blur = (cov_1r58q3u4a3().b[21][0]++, !0),
        fullScreen = (cov_1r58q3u4a3().b[22][0]++, !1),
        className,
      }) {
        if ((cov_1r58q3u4a3().f[8]++, cov_1r58q3u4a3().s[22]++, !visible))
          return (cov_1r58q3u4a3().b[23][0]++, cov_1r58q3u4a3().s[23]++, null)
        cov_1r58q3u4a3().b[23][1]++
        const LoadingComponent =
          (cov_1r58q3u4a3().s[24]++,
          { spinner: Spinner, dots: Dots, pulse: Pulse, bars: Bars }[spinner])
        return (
          cov_1r58q3u4a3().s[25]++,
          (0, jsx_runtime.jsx)(proxy.P.div, {
            className: (0, theme.cn)(
              'absolute inset-0 z-50 flex items-center justify-center',
              (cov_1r58q3u4a3().b[24][0]++,
              blur && (cov_1r58q3u4a3().b[24][1]++, 'backdrop-blur-sm')),
              (cov_1r58q3u4a3().b[25][0]++,
              fullScreen && (cov_1r58q3u4a3().b[25][1]++, 'fixed')),
              'bg-background/80',
              className
            ),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            children: (0, jsx_runtime.jsxs)('div', {
              className: 'flex flex-col items-center space-y-4',
              children: [
                (0, jsx_runtime.jsx)(LoadingComponent, { size: 'lg' }),
                (cov_1r58q3u4a3().b[26][0]++,
                children &&
                  (cov_1r58q3u4a3().b[26][1]++,
                  (0, jsx_runtime.jsx)(proxy.P.div, {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    children,
                  }))),
              ],
            }),
          })
        )
      }
      function CircularProgress({
        value,
        size = (cov_1r58q3u4a3().b[27][0]++, 120),
        strokeWidth = (cov_1r58q3u4a3().b[28][0]++, 8),
        color = (cov_1r58q3u4a3().b[29][0]++, 'primary'),
        showLabel = (cov_1r58q3u4a3().b[30][0]++, !0),
        className,
      }) {
        cov_1r58q3u4a3().f[9]++
        const radius = (cov_1r58q3u4a3().s[26]++, (size - strokeWidth) / 2),
          circumference = (cov_1r58q3u4a3().s[27]++, 2 * radius * Math.PI),
          offset =
            (cov_1r58q3u4a3().s[28]++,
            circumference - (value / 100) * circumference),
          colorClasses =
            (cov_1r58q3u4a3().s[29]++,
            {
              primary: 'text-primary',
              secondary: 'text-secondary',
              success: 'text-success',
              warning: 'text-warning',
              error: 'text-destructive',
            })
        return (
          cov_1r58q3u4a3().s[30]++,
          (0, jsx_runtime.jsxs)('div', {
            className: (0, theme.cn)('relative', className),
            style: { width: size, height: size },
            children: [
              (0, jsx_runtime.jsxs)('svg', {
                className: 'transform -rotate-90',
                width: size,
                height: size,
                children: [
                  (0, jsx_runtime.jsx)('circle', {
                    cx: size / 2,
                    cy: size / 2,
                    r: radius,
                    stroke: 'currentColor',
                    strokeWidth,
                    fill: 'none',
                    className: 'text-muted',
                  }),
                  (0, jsx_runtime.jsx)(proxy.P.circle, {
                    cx: size / 2,
                    cy: size / 2,
                    r: radius,
                    stroke: 'currentColor',
                    strokeWidth,
                    fill: 'none',
                    strokeDasharray: circumference,
                    className: colorClasses[color],
                    initial: { strokeDashoffset: circumference },
                    animate: { strokeDashoffset: offset },
                    transition: { duration: 0.5, ease: 'easeOut' },
                    strokeLinecap: 'round',
                  }),
                ],
              }),
              (cov_1r58q3u4a3().b[31][0]++,
              showLabel &&
                (cov_1r58q3u4a3().b[31][1]++,
                (0, jsx_runtime.jsx)('div', {
                  className:
                    'absolute inset-0 flex items-center justify-center',
                  children: (0, jsx_runtime.jsxs)('span', {
                    className: 'text-2xl font-semibold',
                    children: [Math.round(value), '%'],
                  }),
                }))),
            ],
          })
        )
      }
      ;(cov_1r58q3u4a3(),
        cov_1r58q3u4a3().s[31]++,
        (Spinner.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Spinner',
          props: {
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg' | 'xl'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                  { name: 'literal', value: "'xl'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary' | 'white'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'white'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[32]++,
        (Dots.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Dots',
          props: {
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary' | 'white'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'white'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[33]++,
        (Pulse.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Pulse',
          props: {
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg' | 'xl'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                  { name: 'literal', value: "'xl'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[34]++,
        (Bars.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Bars',
          props: {
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[35]++,
        (Skeleton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Skeleton',
          props: {
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'text' | 'circular' | 'rectangular' | 'rounded'",
                elements: [
                  { name: 'literal', value: "'text'" },
                  { name: 'literal', value: "'circular'" },
                  { name: 'literal', value: "'rectangular'" },
                  { name: 'literal', value: "'rounded'" },
                ],
              },
              description: '',
              defaultValue: { value: "'text'", computed: !1 },
            },
            width: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: '',
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: '',
            },
            animation: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'pulse' | 'wave' | 'none'",
                elements: [
                  { name: 'literal', value: "'pulse'" },
                  { name: 'literal', value: "'wave'" },
                  { name: 'literal', value: "'none'" },
                ],
              },
              description: '',
              defaultValue: { value: "'pulse'", computed: !1 },
            },
          },
        }),
        cov_1r58q3u4a3().s[36]++,
        (Progress.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Progress',
          props: {
            value: {
              required: !0,
              tsType: { name: 'number' },
              description: '',
            },
            size: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'sm' | 'md' | 'lg'",
                elements: [
                  { name: 'literal', value: "'sm'" },
                  { name: 'literal', value: "'md'" },
                  { name: 'literal', value: "'lg'" },
                ],
              },
              description: '',
              defaultValue: { value: "'md'", computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary' | 'success' | 'warning' | 'error'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'success'" },
                  { name: 'literal', value: "'warning'" },
                  { name: 'literal', value: "'error'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            showLabel: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[37]++,
        (LoadingOverlay.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'LoadingOverlay',
          props: {
            visible: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            children: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            spinner: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'spinner' | 'dots' | 'pulse' | 'bars'",
                elements: [
                  { name: 'literal', value: "'spinner'" },
                  { name: 'literal', value: "'dots'" },
                  { name: 'literal', value: "'pulse'" },
                  { name: 'literal', value: "'bars'" },
                ],
              },
              description: '',
              defaultValue: { value: "'spinner'", computed: !1 },
            },
            blur: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'true', computed: !1 },
            },
            fullScreen: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_1r58q3u4a3().s[38]++,
        (CircularProgress.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CircularProgress',
          props: {
            value: {
              required: !0,
              tsType: { name: 'number' },
              description: '',
            },
            size: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '120', computed: !1 },
            },
            strokeWidth: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '8', computed: !1 },
            },
            color: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'primary' | 'secondary' | 'success' | 'warning' | 'error'",
                elements: [
                  { name: 'literal', value: "'primary'" },
                  { name: 'literal', value: "'secondary'" },
                  { name: 'literal', value: "'success'" },
                  { name: 'literal', value: "'warning'" },
                  { name: 'literal', value: "'error'" },
                ],
              },
              description: '',
              defaultValue: { value: "'primary'", computed: !1 },
            },
            showLabel: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'true', computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }))
      var dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        components_button = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        card = __webpack_require__('./design-system/components/card.tsx')
      const loading_stories = {
          title: 'Design System/Components/Loading',
          component: Spinner,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        SpinnerDefault = {
          args: { size: 'md', color: 'primary' },
          play: async ({ canvasElement }) => {
            const spinner = (0, dist.ux)(canvasElement).getByRole('img', {
              hidden: !0,
            })
            ;(await (0, dist.E3)(spinner).toBeVisible(),
              await (0, dist.E3)(spinner).toHaveClass('animate-spin'))
          },
        },
        SpinnerSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Spinner, { size: 'sm' }),
                (0, jsx_runtime.jsx)(Spinner, { size: 'md' }),
                (0, jsx_runtime.jsx)(Spinner, { size: 'lg' }),
                (0, jsx_runtime.jsx)(Spinner, { size: 'xl' }),
              ],
            }),
        },
        SpinnerColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Spinner, { color: 'primary' }),
                (0, jsx_runtime.jsx)(Spinner, { color: 'secondary' }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'bg-gray-800 p-4 rounded',
                  children: (0, jsx_runtime.jsx)(Spinner, { color: 'white' }),
                }),
              ],
            }),
        },
        DotsDefault = { render: () => (0, jsx_runtime.jsx)(Dots, {}) },
        DotsSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Dots, { size: 'sm' }),
                (0, jsx_runtime.jsx)(Dots, { size: 'md' }),
                (0, jsx_runtime.jsx)(Dots, { size: 'lg' }),
              ],
            }),
        },
        DotsColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Dots, { color: 'primary' }),
                (0, jsx_runtime.jsx)(Dots, { color: 'secondary' }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'bg-gray-800 p-4 rounded',
                  children: (0, jsx_runtime.jsx)(Dots, { color: 'white' }),
                }),
              ],
            }),
        },
        PulseDefault = { render: () => (0, jsx_runtime.jsx)(Pulse, {}) },
        PulseSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Pulse, { size: 'sm' }),
                (0, jsx_runtime.jsx)(Pulse, { size: 'md' }),
                (0, jsx_runtime.jsx)(Pulse, { size: 'lg' }),
                (0, jsx_runtime.jsx)(Pulse, { size: 'xl' }),
              ],
            }),
        },
        PulseColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Pulse, { color: 'primary' }),
                (0, jsx_runtime.jsx)(Pulse, { color: 'secondary' }),
              ],
            }),
        },
        BarsDefault = { render: () => (0, jsx_runtime.jsx)(Bars, {}) },
        BarsSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Bars, { size: 'sm' }),
                (0, jsx_runtime.jsx)(Bars, { size: 'md' }),
                (0, jsx_runtime.jsx)(Bars, { size: 'lg' }),
              ],
            }),
        },
        BarsColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(Bars, { color: 'primary' }),
                (0, jsx_runtime.jsx)(Bars, { color: 'secondary' }),
              ],
            }),
        },
        SkeletonDefault = { render: () => (0, jsx_runtime.jsx)(Skeleton, {}) },
        SkeletonVariants = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium',
                      children: 'Text',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, { variant: 'text' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'text',
                      width: '80%',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'text',
                      width: '60%',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium',
                      children: 'Circular',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex gap-2',
                      children: [
                        (0, jsx_runtime.jsx)(Skeleton, {
                          variant: 'circular',
                          width: 40,
                          height: 40,
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          variant: 'circular',
                          width: 60,
                          height: 60,
                        }),
                        (0, jsx_runtime.jsx)(Skeleton, {
                          variant: 'circular',
                          width: 80,
                          height: 80,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium',
                      children: 'Rectangular',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'rectangular',
                      width: 200,
                      height: 100,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium',
                      children: 'Rounded',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'rounded',
                      width: 200,
                      height: 40,
                    }),
                  ],
                }),
              ],
            }),
        },
        SkeletonAnimations = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Pulse',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      animation: 'pulse',
                      width: 200,
                      height: 40,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'Wave',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      animation: 'wave',
                      width: 200,
                      height: 40,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h3', {
                      className: 'text-sm font-medium mb-2',
                      children: 'None',
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      animation: 'none',
                      width: 200,
                      height: 40,
                    }),
                  ],
                }),
              ],
            }),
        },
        SkeletonCardExample = {
          render: () =>
            (0, jsx_runtime.jsxs)(card.Zp, {
              className: 'w-[300px]',
              children: [
                (0, jsx_runtime.jsx)(card.aR, {
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'flex items-center gap-3',
                    children: [
                      (0, jsx_runtime.jsx)(Skeleton, {
                        variant: 'circular',
                        width: 40,
                        height: 40,
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-2 flex-1',
                        children: [
                          (0, jsx_runtime.jsx)(Skeleton, {
                            variant: 'text',
                            width: '60%',
                          }),
                          (0, jsx_runtime.jsx)(Skeleton, {
                            variant: 'text',
                            width: '40%',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsxs)(card.Wu, {
                  className: 'space-y-3',
                  children: [
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'rounded',
                      height: 120,
                    }),
                    (0, jsx_runtime.jsx)(Skeleton, { variant: 'text' }),
                    (0, jsx_runtime.jsx)(Skeleton, { variant: 'text' }),
                    (0, jsx_runtime.jsx)(Skeleton, {
                      variant: 'text',
                      width: '80%',
                    }),
                  ],
                }),
              ],
            }),
        },
        ProgressDefault = {
          render: () => (0, jsx_runtime.jsx)(Progress, { value: 60 }),
        },
        ProgressSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4 w-64',
              children: [
                (0, jsx_runtime.jsx)(Progress, { value: 30, size: 'sm' }),
                (0, jsx_runtime.jsx)(Progress, { value: 50, size: 'md' }),
                (0, jsx_runtime.jsx)(Progress, { value: 70, size: 'lg' }),
              ],
            }),
        },
        ProgressColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4 w-64',
              children: [
                (0, jsx_runtime.jsx)(Progress, { value: 60, color: 'primary' }),
                (0, jsx_runtime.jsx)(Progress, {
                  value: 60,
                  color: 'secondary',
                }),
                (0, jsx_runtime.jsx)(Progress, { value: 60, color: 'success' }),
                (0, jsx_runtime.jsx)(Progress, { value: 60, color: 'warning' }),
                (0, jsx_runtime.jsx)(Progress, { value: 60, color: 'error' }),
              ],
            }),
        },
        ProgressWithLabel = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-4 w-64',
              children: [
                (0, jsx_runtime.jsx)(Progress, { value: 25, showLabel: !0 }),
                (0, jsx_runtime.jsx)(Progress, { value: 50, showLabel: !0 }),
                (0, jsx_runtime.jsx)(Progress, { value: 75, showLabel: !0 }),
                (0, jsx_runtime.jsx)(Progress, { value: 100, showLabel: !0 }),
              ],
            }),
        },
        ProgressAnimated = {
          render: () => {
            const [value, setValue] = react.useState(0)
            return (
              react.useEffect(() => {
                const timer = setInterval(() => {
                  setValue((prev) => (prev >= 100 ? 0 : prev + 10))
                }, 500)
                return () => clearInterval(timer)
              }, []),
              (0, jsx_runtime.jsx)(Progress, { value, showLabel: !0 })
            )
          },
        },
        CircularProgressDefault = {
          render: () => (0, jsx_runtime.jsx)(CircularProgress, { value: 75 }),
        },
        CircularProgressSizes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 60,
                  size: 60,
                  strokeWidth: 4,
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 60,
                  size: 80,
                  strokeWidth: 6,
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 60,
                  size: 120,
                  strokeWidth: 8,
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 60,
                  size: 160,
                  strokeWidth: 10,
                }),
              ],
            }),
        },
        CircularProgressColors = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 75,
                  color: 'primary',
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 75,
                  color: 'secondary',
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 75,
                  color: 'success',
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 75,
                  color: 'warning',
                }),
                (0, jsx_runtime.jsx)(CircularProgress, {
                  value: 75,
                  color: 'error',
                }),
              ],
            }),
        },
        CircularProgressWithoutLabel = {
          render: () =>
            (0, jsx_runtime.jsx)(CircularProgress, {
              value: 60,
              showLabel: !1,
            }),
        },
        CircularProgressAnimated = {
          render: () => {
            const [value, setValue] = react.useState(0)
            return (
              react.useEffect(() => {
                const timer = setInterval(() => {
                  setValue((prev) => (prev >= 100 ? 0 : prev + 10))
                }, 500)
                return () => clearInterval(timer)
              }, []),
              (0, jsx_runtime.jsx)(CircularProgress, { value })
            )
          },
        },
        LoadingOverlayExample = {
          render: () => {
            const [loading, setLoading] = react.useState(!1)
            return (0, jsx_runtime.jsxs)('div', {
              className: 'relative',
              children: [
                (0, jsx_runtime.jsxs)(card.Zp, {
                  className: 'w-[400px]',
                  children: [
                    (0, jsx_runtime.jsx)(card.aR, {
                      children: (0, jsx_runtime.jsx)(card.ZB, {
                        children: 'Card with Loading Overlay',
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(card.Wu, {
                      className: 'space-y-4',
                      children: [
                        (0, jsx_runtime.jsx)('p', {
                          children: 'Click the button to show loading overlay',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setLoading(!loading),
                          children: 'Toggle Loading',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(LoadingOverlay, {
                  visible: loading,
                  spinner: 'spinner',
                  children: (0, jsx_runtime.jsx)('p', {
                    className: 'text-sm text-muted-foreground',
                    children: 'Loading content...',
                  }),
                }),
              ],
            })
          },
        },
        LoadingOverlaySpinners = {
          render: () => {
            const [spinner, setSpinner] = react.useState('spinner')
            return (0, jsx_runtime.jsxs)('div', {
              className: 'relative',
              children: [
                (0, jsx_runtime.jsxs)(card.Zp, {
                  className: 'w-[400px]',
                  children: [
                    (0, jsx_runtime.jsx)(card.aR, {
                      children: (0, jsx_runtime.jsx)(card.ZB, {
                        children: 'Different Loading Spinners',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(card.Wu, {
                      className: 'space-y-4',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'flex gap-2',
                        children: [
                          (0, jsx_runtime.jsx)(components_button.$, {
                            size: 'sm',
                            onClick: () => setSpinner('spinner'),
                            children: 'Spinner',
                          }),
                          (0, jsx_runtime.jsx)(components_button.$, {
                            size: 'sm',
                            onClick: () => setSpinner('dots'),
                            children: 'Dots',
                          }),
                          (0, jsx_runtime.jsx)(components_button.$, {
                            size: 'sm',
                            onClick: () => setSpinner('pulse'),
                            children: 'Pulse',
                          }),
                          (0, jsx_runtime.jsx)(components_button.$, {
                            size: 'sm',
                            onClick: () => setSpinner('bars'),
                            children: 'Bars',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(LoadingOverlay, { visible: !0, spinner }),
              ],
            })
          },
        },
        LoadingOverlayNoBlur = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'relative',
              children: [
                (0, jsx_runtime.jsxs)(card.Zp, {
                  className: 'w-[400px]',
                  children: [
                    (0, jsx_runtime.jsx)(card.aR, {
                      children: (0, jsx_runtime.jsx)(card.ZB, {
                        children: 'No Blur Effect',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(card.Wu, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children: 'The overlay has no blur effect',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(LoadingOverlay, { visible: !0, blur: !1 }),
              ],
            }),
        },
        AllLoadingTypes = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'grid grid-cols-4 gap-8',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Spinner, {}),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: 'Spinner',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Dots, {}),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: 'Dots',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Pulse, {}),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: 'Pulse',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'text-center space-y-2',
                  children: [
                    (0, jsx_runtime.jsx)(Bars, {}),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm text-muted-foreground',
                      children: 'Bars',
                    }),
                  ],
                }),
              ],
            }),
        },
        RealWorldExample = {
          render: () => {
            const [loading, setLoading] = react.useState(!1),
              [progress, setProgress] = react.useState(0)
            return (0, jsx_runtime.jsxs)(card.Zp, {
              className: 'w-[400px]',
              children: [
                (0, jsx_runtime.jsx)(card.aR, {
                  children: (0, jsx_runtime.jsx)(card.ZB, {
                    children: 'Form Submission Example',
                  }),
                }),
                (0, jsx_runtime.jsxs)(card.Wu, {
                  className: 'space-y-4',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          className: 'text-sm font-medium',
                          children: 'Name',
                        }),
                        (0, jsx_runtime.jsx)('input', {
                          className: 'w-full px-3 py-2 border rounded-md',
                          placeholder: 'Enter your name',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, jsx_runtime.jsx)('label', {
                          className: 'text-sm font-medium',
                          children: 'Email',
                        }),
                        (0, jsx_runtime.jsx)('input', {
                          className: 'w-full px-3 py-2 border rounded-md',
                          placeholder: 'Enter your email',
                        }),
                      ],
                    }),
                    loading &&
                      (0, jsx_runtime.jsx)(Progress, {
                        value: progress,
                        showLabel: !0,
                      }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      onClick: () => {
                        ;(setLoading(!0), setProgress(0))
                        const interval = setInterval(() => {
                          setProgress((prev) =>
                            prev >= 100
                              ? (clearInterval(interval),
                                setTimeout(() => setLoading(!1), 500),
                                100)
                              : prev + 10
                          )
                        }, 300)
                      },
                      disabled: loading,
                      fullWidth: !0,
                      children: loading
                        ? (0, jsx_runtime.jsx)(Spinner, {
                            size: 'sm',
                            color: 'white',
                          })
                        : 'Submit',
                    }),
                  ],
                }),
              ],
            })
          },
        },
        __namedExportsOrder = [
          'SpinnerDefault',
          'SpinnerSizes',
          'SpinnerColors',
          'DotsDefault',
          'DotsSizes',
          'DotsColors',
          'PulseDefault',
          'PulseSizes',
          'PulseColors',
          'BarsDefault',
          'BarsSizes',
          'BarsColors',
          'SkeletonDefault',
          'SkeletonVariants',
          'SkeletonAnimations',
          'SkeletonCardExample',
          'ProgressDefault',
          'ProgressSizes',
          'ProgressColors',
          'ProgressWithLabel',
          'ProgressAnimated',
          'CircularProgressDefault',
          'CircularProgressSizes',
          'CircularProgressColors',
          'CircularProgressWithoutLabel',
          'CircularProgressAnimated',
          'LoadingOverlayExample',
          'LoadingOverlaySpinners',
          'LoadingOverlayNoBlur',
          'AllLoadingTypes',
          'RealWorldExample',
        ]
      ;((SpinnerDefault.parameters = {
        ...SpinnerDefault.parameters,
        docs: {
          ...SpinnerDefault.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    size: 'md',\n    color: 'primary'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const spinner = canvas.getByRole('img', {\n      hidden: true\n    });\n\n    // Test spinner is visible\n    await expect(spinner).toBeVisible();\n\n    // Test spinner has animation class\n    await expect(spinner).toHaveClass('animate-spin');\n  }\n}",
            ...SpinnerDefault.parameters?.docs?.source,
          },
        },
      }),
        (SpinnerSizes.parameters = {
          ...SpinnerSizes.parameters,
          docs: {
            ...SpinnerSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Spinner size='sm' />\n      <Spinner size='md' />\n      <Spinner size='lg' />\n      <Spinner size='xl' />\n    </div>\n}",
              ...SpinnerSizes.parameters?.docs?.source,
            },
          },
        }),
        (SpinnerColors.parameters = {
          ...SpinnerColors.parameters,
          docs: {
            ...SpinnerColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Spinner color='primary' />\n      <Spinner color='secondary' />\n      <div className='bg-gray-800 p-4 rounded'>\n        <Spinner color='white' />\n      </div>\n    </div>\n}",
              ...SpinnerColors.parameters?.docs?.source,
            },
          },
        }),
        (DotsDefault.parameters = {
          ...DotsDefault.parameters,
          docs: {
            ...DotsDefault.parameters?.docs,
            source: {
              originalSource: '{\n  render: () => <Dots />\n}',
              ...DotsDefault.parameters?.docs?.source,
            },
          },
        }),
        (DotsSizes.parameters = {
          ...DotsSizes.parameters,
          docs: {
            ...DotsSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Dots size='sm' />\n      <Dots size='md' />\n      <Dots size='lg' />\n    </div>\n}",
              ...DotsSizes.parameters?.docs?.source,
            },
          },
        }),
        (DotsColors.parameters = {
          ...DotsColors.parameters,
          docs: {
            ...DotsColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Dots color='primary' />\n      <Dots color='secondary' />\n      <div className='bg-gray-800 p-4 rounded'>\n        <Dots color='white' />\n      </div>\n    </div>\n}",
              ...DotsColors.parameters?.docs?.source,
            },
          },
        }),
        (PulseDefault.parameters = {
          ...PulseDefault.parameters,
          docs: {
            ...PulseDefault.parameters?.docs,
            source: {
              originalSource: '{\n  render: () => <Pulse />\n}',
              ...PulseDefault.parameters?.docs?.source,
            },
          },
        }),
        (PulseSizes.parameters = {
          ...PulseSizes.parameters,
          docs: {
            ...PulseSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Pulse size='sm' />\n      <Pulse size='md' />\n      <Pulse size='lg' />\n      <Pulse size='xl' />\n    </div>\n}",
              ...PulseSizes.parameters?.docs?.source,
            },
          },
        }),
        (PulseColors.parameters = {
          ...PulseColors.parameters,
          docs: {
            ...PulseColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Pulse color='primary' />\n      <Pulse color='secondary' />\n    </div>\n}",
              ...PulseColors.parameters?.docs?.source,
            },
          },
        }),
        (BarsDefault.parameters = {
          ...BarsDefault.parameters,
          docs: {
            ...BarsDefault.parameters?.docs,
            source: {
              originalSource: '{\n  render: () => <Bars />\n}',
              ...BarsDefault.parameters?.docs?.source,
            },
          },
        }),
        (BarsSizes.parameters = {
          ...BarsSizes.parameters,
          docs: {
            ...BarsSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Bars size='sm' />\n      <Bars size='md' />\n      <Bars size='lg' />\n    </div>\n}",
              ...BarsSizes.parameters?.docs?.source,
            },
          },
        }),
        (BarsColors.parameters = {
          ...BarsColors.parameters,
          docs: {
            ...BarsColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <Bars color='primary' />\n      <Bars color='secondary' />\n    </div>\n}",
              ...BarsColors.parameters?.docs?.source,
            },
          },
        }),
        (SkeletonDefault.parameters = {
          ...SkeletonDefault.parameters,
          docs: {
            ...SkeletonDefault.parameters?.docs,
            source: {
              originalSource: '{\n  render: () => <Skeleton />\n}',
              ...SkeletonDefault.parameters?.docs?.source,
            },
          },
        }),
        (SkeletonVariants.parameters = {
          ...SkeletonVariants.parameters,
          docs: {
            ...SkeletonVariants.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div className='space-y-2'>\n        <h3 className='text-sm font-medium'>Text</h3>\n        <Skeleton variant='text' />\n        <Skeleton variant='text' width='80%' />\n        <Skeleton variant='text' width='60%' />\n      </div>\n\n      <div className='space-y-2'>\n        <h3 className='text-sm font-medium'>Circular</h3>\n        <div className='flex gap-2'>\n          <Skeleton variant='circular' width={40} height={40} />\n          <Skeleton variant='circular' width={60} height={60} />\n          <Skeleton variant='circular' width={80} height={80} />\n        </div>\n      </div>\n\n      <div className='space-y-2'>\n        <h3 className='text-sm font-medium'>Rectangular</h3>\n        <Skeleton variant='rectangular' width={200} height={100} />\n      </div>\n\n      <div className='space-y-2'>\n        <h3 className='text-sm font-medium'>Rounded</h3>\n        <Skeleton variant='rounded' width={200} height={40} />\n      </div>\n    </div>\n}",
              ...SkeletonVariants.parameters?.docs?.source,
            },
          },
        }),
        (SkeletonAnimations.parameters = {
          ...SkeletonAnimations.parameters,
          docs: {
            ...SkeletonAnimations.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4'>\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Pulse</h3>\n        <Skeleton animation='pulse' width={200} height={40} />\n      </div>\n\n      <div>\n        <h3 className='text-sm font-medium mb-2'>Wave</h3>\n        <Skeleton animation='wave' width={200} height={40} />\n      </div>\n\n      <div>\n        <h3 className='text-sm font-medium mb-2'>None</h3>\n        <Skeleton animation='none' width={200} height={40} />\n      </div>\n    </div>\n}",
              ...SkeletonAnimations.parameters?.docs?.source,
            },
          },
        }),
        (SkeletonCardExample.parameters = {
          ...SkeletonCardExample.parameters,
          docs: {
            ...SkeletonCardExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Card className='w-[300px]'>\n      <CardHeader>\n        <div className='flex items-center gap-3'>\n          <Skeleton variant='circular' width={40} height={40} />\n          <div className='space-y-2 flex-1'>\n            <Skeleton variant='text' width='60%' />\n            <Skeleton variant='text' width='40%' />\n          </div>\n        </div>\n      </CardHeader>\n      <CardContent className='space-y-3'>\n        <Skeleton variant='rounded' height={120} />\n        <Skeleton variant='text' />\n        <Skeleton variant='text' />\n        <Skeleton variant='text' width='80%' />\n      </CardContent>\n    </Card>\n}",
              ...SkeletonCardExample.parameters?.docs?.source,
            },
          },
        }),
        (ProgressDefault.parameters = {
          ...ProgressDefault.parameters,
          docs: {
            ...ProgressDefault.parameters?.docs,
            source: {
              originalSource: '{\n  render: () => <Progress value={60} />\n}',
              ...ProgressDefault.parameters?.docs?.source,
            },
          },
        }),
        (ProgressSizes.parameters = {
          ...ProgressSizes.parameters,
          docs: {
            ...ProgressSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4 w-64'>\n      <Progress value={30} size='sm' />\n      <Progress value={50} size='md' />\n      <Progress value={70} size='lg' />\n    </div>\n}",
              ...ProgressSizes.parameters?.docs?.source,
            },
          },
        }),
        (ProgressColors.parameters = {
          ...ProgressColors.parameters,
          docs: {
            ...ProgressColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4 w-64'>\n      <Progress value={60} color='primary' />\n      <Progress value={60} color='secondary' />\n      <Progress value={60} color='success' />\n      <Progress value={60} color='warning' />\n      <Progress value={60} color='error' />\n    </div>\n}",
              ...ProgressColors.parameters?.docs?.source,
            },
          },
        }),
        (ProgressWithLabel.parameters = {
          ...ProgressWithLabel.parameters,
          docs: {
            ...ProgressWithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='space-y-4 w-64'>\n      <Progress value={25} showLabel />\n      <Progress value={50} showLabel />\n      <Progress value={75} showLabel />\n      <Progress value={100} showLabel />\n    </div>\n}",
              ...ProgressWithLabel.parameters?.docs?.source,
            },
          },
        }),
        (ProgressAnimated.parameters = {
          ...ProgressAnimated.parameters,
          docs: {
            ...ProgressAnimated.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const [value, setValue] = React.useState(0);\n    React.useEffect(() => {\n      const timer = setInterval(() => {\n        setValue(prev => {\n          if (prev >= 100) return 0;\n          return prev + 10;\n        });\n      }, 500);\n      return () => clearInterval(timer);\n    }, []);\n    return <Progress value={value} showLabel />;\n  }\n}',
              ...ProgressAnimated.parameters?.docs?.source,
            },
          },
        }),
        (CircularProgressDefault.parameters = {
          ...CircularProgressDefault.parameters,
          docs: {
            ...CircularProgressDefault.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <CircularProgress value={75} />\n}',
              ...CircularProgressDefault.parameters?.docs?.source,
            },
          },
        }),
        (CircularProgressSizes.parameters = {
          ...CircularProgressSizes.parameters,
          docs: {
            ...CircularProgressSizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <CircularProgress value={60} size={60} strokeWidth={4} />\n      <CircularProgress value={60} size={80} strokeWidth={6} />\n      <CircularProgress value={60} size={120} strokeWidth={8} />\n      <CircularProgress value={60} size={160} strokeWidth={10} />\n    </div>\n}",
              ...CircularProgressSizes.parameters?.docs?.source,
            },
          },
        }),
        (CircularProgressColors.parameters = {
          ...CircularProgressColors.parameters,
          docs: {
            ...CircularProgressColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='flex items-center gap-4'>\n      <CircularProgress value={75} color='primary' />\n      <CircularProgress value={75} color='secondary' />\n      <CircularProgress value={75} color='success' />\n      <CircularProgress value={75} color='warning' />\n      <CircularProgress value={75} color='error' />\n    </div>\n}",
              ...CircularProgressColors.parameters?.docs?.source,
            },
          },
        }),
        (CircularProgressWithoutLabel.parameters = {
          ...CircularProgressWithoutLabel.parameters,
          docs: {
            ...CircularProgressWithoutLabel.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <CircularProgress value={60} showLabel={false} />\n}',
              ...CircularProgressWithoutLabel.parameters?.docs?.source,
            },
          },
        }),
        (CircularProgressAnimated.parameters = {
          ...CircularProgressAnimated.parameters,
          docs: {
            ...CircularProgressAnimated.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const [value, setValue] = React.useState(0);\n    React.useEffect(() => {\n      const timer = setInterval(() => {\n        setValue(prev => {\n          if (prev >= 100) return 0;\n          return prev + 10;\n        });\n      }, 500);\n      return () => clearInterval(timer);\n    }, []);\n    return <CircularProgress value={value} />;\n  }\n}',
              ...CircularProgressAnimated.parameters?.docs?.source,
            },
          },
        }),
        (LoadingOverlayExample.parameters = {
          ...LoadingOverlayExample.parameters,
          docs: {
            ...LoadingOverlayExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [loading, setLoading] = React.useState(false);\n    return <div className='relative'>\n        <Card className='w-[400px]'>\n          <CardHeader>\n            <CardTitle>Card with Loading Overlay</CardTitle>\n          </CardHeader>\n          <CardContent className='space-y-4'>\n            <p>Click the button to show loading overlay</p>\n            <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>\n          </CardContent>\n        </Card>\n\n        <LoadingOverlay visible={loading} spinner='spinner'>\n          <p className='text-sm text-muted-foreground'>Loading content...</p>\n        </LoadingOverlay>\n      </div>;\n  }\n}",
              ...LoadingOverlayExample.parameters?.docs?.source,
            },
          },
        }),
        (LoadingOverlaySpinners.parameters = {
          ...LoadingOverlaySpinners.parameters,
          docs: {
            ...LoadingOverlaySpinners.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [spinner, setSpinner] = React.useState<'spinner' | 'dots' | 'pulse' | 'bars'>('spinner');\n    return <div className='relative'>\n        <Card className='w-[400px]'>\n          <CardHeader>\n            <CardTitle>Different Loading Spinners</CardTitle>\n          </CardHeader>\n          <CardContent className='space-y-4'>\n            <div className='flex gap-2'>\n              <Button size='sm' onClick={() => setSpinner('spinner')}>\n                Spinner\n              </Button>\n              <Button size='sm' onClick={() => setSpinner('dots')}>\n                Dots\n              </Button>\n              <Button size='sm' onClick={() => setSpinner('pulse')}>\n                Pulse\n              </Button>\n              <Button size='sm' onClick={() => setSpinner('bars')}>\n                Bars\n              </Button>\n            </div>\n          </CardContent>\n        </Card>\n\n        <LoadingOverlay visible={true} spinner={spinner} />\n      </div>;\n  }\n}",
              ...LoadingOverlaySpinners.parameters?.docs?.source,
            },
          },
        }),
        (LoadingOverlayNoBlur.parameters = {
          ...LoadingOverlayNoBlur.parameters,
          docs: {
            ...LoadingOverlayNoBlur.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='relative'>\n      <Card className='w-[400px]'>\n        <CardHeader>\n          <CardTitle>No Blur Effect</CardTitle>\n        </CardHeader>\n        <CardContent>\n          <p>The overlay has no blur effect</p>\n        </CardContent>\n      </Card>\n\n      <LoadingOverlay visible={true} blur={false} />\n    </div>\n}",
              ...LoadingOverlayNoBlur.parameters?.docs?.source,
            },
          },
        }),
        (AllLoadingTypes.parameters = {
          ...AllLoadingTypes.parameters,
          docs: {
            ...AllLoadingTypes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div className='grid grid-cols-4 gap-8'>\n      <div className='text-center space-y-2'>\n        <Spinner />\n        <p className='text-sm text-muted-foreground'>Spinner</p>\n      </div>\n\n      <div className='text-center space-y-2'>\n        <Dots />\n        <p className='text-sm text-muted-foreground'>Dots</p>\n      </div>\n\n      <div className='text-center space-y-2'>\n        <Pulse />\n        <p className='text-sm text-muted-foreground'>Pulse</p>\n      </div>\n\n      <div className='text-center space-y-2'>\n        <Bars />\n        <p className='text-sm text-muted-foreground'>Bars</p>\n      </div>\n    </div>\n}",
              ...AllLoadingTypes.parameters?.docs?.source,
            },
          },
        }),
        (RealWorldExample.parameters = {
          ...RealWorldExample.parameters,
          docs: {
            ...RealWorldExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [loading, setLoading] = React.useState(false);\n    const [progress, setProgress] = React.useState(0);\n    const handleSubmit = () => {\n      setLoading(true);\n      setProgress(0);\n      const interval = setInterval(() => {\n        setProgress(prev => {\n          if (prev >= 100) {\n            clearInterval(interval);\n            setTimeout(() => setLoading(false), 500);\n            return 100;\n          }\n          return prev + 10;\n        });\n      }, 300);\n    };\n    return <Card className='w-[400px]'>\n        <CardHeader>\n          <CardTitle>Form Submission Example</CardTitle>\n        </CardHeader>\n        <CardContent className='space-y-4'>\n          <div className='space-y-2'>\n            <label className='text-sm font-medium'>Name</label>\n            <input className='w-full px-3 py-2 border rounded-md' placeholder='Enter your name' />\n          </div>\n\n          <div className='space-y-2'>\n            <label className='text-sm font-medium'>Email</label>\n            <input className='w-full px-3 py-2 border rounded-md' placeholder='Enter your email' />\n          </div>\n\n          {loading && <Progress value={progress} showLabel />}\n\n          <Button onClick={handleSubmit} disabled={loading} fullWidth>\n            {loading ? <Spinner size='sm' color='white' /> : 'Submit'}\n          </Button>\n        </CardContent>\n      </Card>;\n  }\n}",
              ...RealWorldExample.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
