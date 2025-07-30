'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [100],
  {
    '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    './components/editor/plugins/basic-nodes-kit.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { u: () => BasicNodesKit })
      var _basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './components/editor/plugins/basic-blocks-kit.tsx'
        ),
        _basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/editor/plugins/basic-marks-kit.tsx'
        )
      function cov_tfhxzc70i() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'ae7d14de3d8d54c93bd22693ad62804ad6ee1804' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 29 },
                end: { line: 7, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/editor/plugins/basic-nodes-kit.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport { BasicBlocksKit } from './basic-blocks-kit'\nimport { BasicMarksKit } from './basic-marks-kit'\n\nexport const BasicNodesKit = [...BasicBlocksKit, ...BasicMarksKit]\n",
              ],
              names: ['BasicBlocksKit', 'BasicMarksKit', 'BasicNodesKit'],
              mappings:
                'AAAA;AAEA,SAASA,cAAc,QAAQ,qBAAoB;AACnD,SAASC,aAAa,QAAQ,oBAAmB;AAEjD,OAAO,MAAMC,gBAAgB;OAAIF;OAAmBC;CAAc,CAAA',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ae7d14de3d8d54c93bd22693ad62804ad6ee1804',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_tfhxzc70i = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_tfhxzc70i()
      const BasicNodesKit =
        (cov_tfhxzc70i().s[0]++,
        [
          ..._basic_blocks_kit__WEBPACK_IMPORTED_MODULE_0__.h,
          ..._basic_marks_kit__WEBPACK_IMPORTED_MODULE_1__.N,
        ])
    },
    './components/ui/kbd-node.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CommonShortcuts: () => CommonShortcuts,
          ComplexCombinations: () => ComplexCombinations,
          CreateKbd: () => CreateKbd,
          Default: () => Default,
          FunctionKeys: () => FunctionKeys,
          InlineInstructions: () => InlineInstructions,
          InteractiveKbd: () => InteractiveKbd,
          ModifierKeys: () => ModifierKeys,
          NavigationKeys: () => NavigationKeys,
          PlatformSpecific: () => PlatformSpecific,
          SingleKey: () => SingleKey,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        platejs_react__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
          )),
        _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './components/editor/plugins/basic-nodes-kit.tsx'
          ),
        _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./components/ui/editor.tsx'),
        _storybook_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Nodes/KbdNode',
          component: ({ keys = 'Ctrl+C', description = 'to copy' }) => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Press ' },
                    { text: keys, kbd: !0 },
                    { text: ` ${description}` },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            keys: { control: 'text', description: 'Keyboard keys or shortcut' },
            description: {
              control: 'text',
              description: 'Description of the action',
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'min-w-[600px] p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Default = { args: { keys: 'Ctrl+C', description: 'to copy' } },
        SingleKey = { args: { keys: 'Enter', description: 'to submit' } },
        ModifierKeys = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Common modifier keys: ' },
                    { text: 'Ctrl', kbd: !0 },
                    { text: ', ' },
                    { text: 'Alt', kbd: !0 },
                    { text: ', ' },
                    { text: 'Shift', kbd: !0 },
                    { text: ', and ' },
                    { text: 'Cmd', kbd: !0 },
                    { text: ' (on Mac).' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        CommonShortcuts = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h3', children: [{ text: 'Keyboard Shortcuts' }] },
                {
                  type: 'p',
                  children: [{ text: 'Save: ' }, { text: 'Ctrl+S', kbd: !0 }],
                },
                {
                  type: 'p',
                  children: [{ text: 'Undo: ' }, { text: 'Ctrl+Z', kbd: !0 }],
                },
                {
                  type: 'p',
                  children: [
                    { text: 'Redo: ' },
                    { text: 'Ctrl+Y', kbd: !0 },
                    { text: ' or ' },
                    { text: 'Ctrl+Shift+Z', kbd: !0 },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: 'Select All: ' },
                    { text: 'Ctrl+A', kbd: !0 },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        NavigationKeys = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Navigate with ' },
                    { text: '↑', kbd: !0 },
                    { text: ' ' },
                    { text: '↓', kbd: !0 },
                    { text: ' ' },
                    { text: '←', kbd: !0 },
                    { text: ' ' },
                    { text: '→', kbd: !0 },
                    { text: ' arrow keys.' },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: 'Jump words with ' },
                    { text: 'Ctrl+←', kbd: !0 },
                    { text: ' and ' },
                    { text: 'Ctrl+→', kbd: !0 },
                    { text: '.' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        FunctionKeys = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Function keys: ' },
                    { text: 'F1', kbd: !0 },
                    { text: ' for help, ' },
                    { text: 'F2', kbd: !0 },
                    { text: ' to rename, ' },
                    { text: 'F3', kbd: !0 },
                    { text: ' to search, ' },
                    { text: 'F5', kbd: !0 },
                    { text: ' to refresh.' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        ComplexCombinations = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Complex shortcuts: ' },
                    { text: 'Ctrl+Shift+P', kbd: !0 },
                    { text: ' for command palette, ' },
                    { text: 'Ctrl+K Ctrl+S', kbd: !0 },
                    { text: ' for keyboard shortcuts.' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        InlineInstructions = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'To format text as bold, select it and press ' },
                    { text: 'Ctrl+B', kbd: !0 },
                    { text: '. For italic, use ' },
                    { text: 'Ctrl+I', kbd: !0 },
                    { text: ', and for underline, press ' },
                    { text: 'Ctrl+U', kbd: !0 },
                    { text: '.' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        PlatformSpecific = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h3', children: [{ text: 'Platform-Specific Keys' }] },
                {
                  type: 'p',
                  children: [
                    { text: 'Windows/Linux: ' },
                    { text: 'Ctrl', kbd: !0 },
                    { text: ' + ' },
                    { text: 'C', kbd: !0 },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: 'macOS: ' },
                    { text: '⌘', kbd: !0 },
                    { text: ' + ' },
                    { text: 'C', kbd: !0 },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        InteractiveKbd = {
          args: { keys: 'Space', description: 'to continue' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox'),
              kbdElement = canvas.getByText('Space')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              kbdElement
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                kbdElement
              ).toHaveClass(/kbd/),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{End}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.type(
                editor,
                ' or click to proceed'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                editor
              ).toHaveTextContent(
                'Press Space to continue or click to proceed'
              ))
          },
        },
        CreateKbd = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    {
                      text: 'Type keyboard shortcuts and format them to show as keys.',
                    },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_5__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_3__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              editor
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{End}{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.type(
                editor,
                'Press Ctrl+S to save'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{Home}'
              ))
            for (let i = 0; i < 6; i++)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{ArrowRight}'
              )
            await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
              '{Shift>}'
            )
            for (let i = 0; i < 6; i++)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{ArrowRight}'
              )
            await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
              '{/Shift}'
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'SingleKey',
          'ModifierKeys',
          'CommonShortcuts',
          'NavigationKeys',
          'FunctionKeys',
          'ComplexCombinations',
          'InlineInstructions',
          'PlatformSpecific',
          'InteractiveKbd',
          'CreateKbd',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    keys: 'Ctrl+C',\n    description: 'to copy'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (SingleKey.parameters = {
          ...SingleKey.parameters,
          docs: {
            ...SingleKey.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    keys: 'Enter',\n    description: 'to submit'\n  }\n}",
              ...SingleKey.parameters?.docs?.source,
            },
          },
        }),
        (ModifierKeys.parameters = {
          ...ModifierKeys.parameters,
          docs: {
            ...ModifierKeys.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Common modifier keys: '\n        }, {\n          text: 'Ctrl',\n          kbd: true\n        }, {\n          text: ', '\n        }, {\n          text: 'Alt',\n          kbd: true\n        }, {\n          text: ', '\n        }, {\n          text: 'Shift',\n          kbd: true\n        }, {\n          text: ', and '\n        }, {\n          text: 'Cmd',\n          kbd: true\n        }, {\n          text: ' (on Mac).'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...ModifierKeys.parameters?.docs?.source,
            },
          },
        }),
        (CommonShortcuts.parameters = {
          ...CommonShortcuts.parameters,
          docs: {
            ...CommonShortcuts.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h3',\n        children: [{\n          text: 'Keyboard Shortcuts'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Save: '\n        }, {\n          text: 'Ctrl+S',\n          kbd: true\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Undo: '\n        }, {\n          text: 'Ctrl+Z',\n          kbd: true\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Redo: '\n        }, {\n          text: 'Ctrl+Y',\n          kbd: true\n        }, {\n          text: ' or '\n        }, {\n          text: 'Ctrl+Shift+Z',\n          kbd: true\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Select All: '\n        }, {\n          text: 'Ctrl+A',\n          kbd: true\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...CommonShortcuts.parameters?.docs?.source,
            },
          },
        }),
        (NavigationKeys.parameters = {
          ...NavigationKeys.parameters,
          docs: {
            ...NavigationKeys.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Navigate with '\n        }, {\n          text: '↑',\n          kbd: true\n        }, {\n          text: ' '\n        }, {\n          text: '↓',\n          kbd: true\n        }, {\n          text: ' '\n        }, {\n          text: '←',\n          kbd: true\n        }, {\n          text: ' '\n        }, {\n          text: '→',\n          kbd: true\n        }, {\n          text: ' arrow keys.'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Jump words with '\n        }, {\n          text: 'Ctrl+←',\n          kbd: true\n        }, {\n          text: ' and '\n        }, {\n          text: 'Ctrl+→',\n          kbd: true\n        }, {\n          text: '.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...NavigationKeys.parameters?.docs?.source,
            },
          },
        }),
        (FunctionKeys.parameters = {
          ...FunctionKeys.parameters,
          docs: {
            ...FunctionKeys.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Function keys: '\n        }, {\n          text: 'F1',\n          kbd: true\n        }, {\n          text: ' for help, '\n        }, {\n          text: 'F2',\n          kbd: true\n        }, {\n          text: ' to rename, '\n        }, {\n          text: 'F3',\n          kbd: true\n        }, {\n          text: ' to search, '\n        }, {\n          text: 'F5',\n          kbd: true\n        }, {\n          text: ' to refresh.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...FunctionKeys.parameters?.docs?.source,
            },
          },
        }),
        (ComplexCombinations.parameters = {
          ...ComplexCombinations.parameters,
          docs: {
            ...ComplexCombinations.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Complex shortcuts: '\n        }, {\n          text: 'Ctrl+Shift+P',\n          kbd: true\n        }, {\n          text: ' for command palette, '\n        }, {\n          text: 'Ctrl+K Ctrl+S',\n          kbd: true\n        }, {\n          text: ' for keyboard shortcuts.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...ComplexCombinations.parameters?.docs?.source,
            },
          },
        }),
        (InlineInstructions.parameters = {
          ...InlineInstructions.parameters,
          docs: {
            ...InlineInstructions.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'To format text as bold, select it and press '\n        }, {\n          text: 'Ctrl+B',\n          kbd: true\n        }, {\n          text: '. For italic, use '\n        }, {\n          text: 'Ctrl+I',\n          kbd: true\n        }, {\n          text: ', and for underline, press '\n        }, {\n          text: 'Ctrl+U',\n          kbd: true\n        }, {\n          text: '.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...InlineInstructions.parameters?.docs?.source,
            },
          },
        }),
        (PlatformSpecific.parameters = {
          ...PlatformSpecific.parameters,
          docs: {
            ...PlatformSpecific.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h3',\n        children: [{\n          text: 'Platform-Specific Keys'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Windows/Linux: '\n        }, {\n          text: 'Ctrl',\n          kbd: true\n        }, {\n          text: ' + '\n        }, {\n          text: 'C',\n          kbd: true\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'macOS: '\n        }, {\n          text: '⌘',\n          kbd: true\n        }, {\n          text: ' + '\n        }, {\n          text: 'C',\n          kbd: true\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...PlatformSpecific.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveKbd.parameters = {
          ...InteractiveKbd.parameters,
          docs: {
            ...InteractiveKbd.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    keys: 'Space',\n    description: 'to continue'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n    const kbdElement = canvas.getByText('Space');\n\n    // Click on the kbd element\n    await userEvent.click(kbdElement);\n\n    // The kbd should be styled distinctively\n    await expect(kbdElement).toHaveClass(/kbd/);\n\n    // Add text after\n    await userEvent.keyboard('{End}');\n    await userEvent.type(editor, ' or click to proceed');\n\n    // Verify the addition\n    await expect(editor).toHaveTextContent('Press Space to continue or click to proceed');\n  }\n}",
              ...InteractiveKbd.parameters?.docs?.source,
            },
          },
        }),
        (CreateKbd.parameters = {
          ...CreateKbd.parameters,
          docs: {
            ...CreateKbd.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Type keyboard shortcuts and format them to show as keys.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n\n    // Add new text\n    await userEvent.click(editor);\n    await userEvent.keyboard('{End}{Enter}');\n    await userEvent.type(editor, 'Press Ctrl+S to save');\n\n    // Select \"Ctrl+S\"\n    await userEvent.keyboard('{Home}');\n    for (let i = 0; i < 6; i++) {\n      await userEvent.keyboard('{ArrowRight}');\n    }\n    await userEvent.keyboard('{Shift>}');\n    for (let i = 0; i < 6; i++) {\n      await userEvent.keyboard('{ArrowRight}');\n    }\n    await userEvent.keyboard('{/Shift}');\n\n    // Note: Actual kbd formatting would depend on toolbar/keyboard implementation\n  }\n}",
              ...CreateKbd.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
