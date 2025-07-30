'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [6746],
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
    './components/ui/list-nodes.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BulletedList: () => BulletedList,
          FormattedListItems: () => FormattedListItems,
          InteractiveList: () => InteractiveList,
          ListItemCreation: () => ListItemCreation,
          LongItems: () => LongItems,
          MixedContent: () => MixedContent,
          NestedLists: () => NestedLists,
          NumberedList: () => NumberedList,
          SingleItem: () => SingleItem,
          TodoListStyle: () => TodoListStyle,
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
          title: 'UI/Nodes/ListNodes',
          component: ({
            type = 'ul',
            items = ['First item', 'Second item', 'Third item'],
          }) => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type,
                  children: items.map((item) => ({
                    type: 'li',
                    children: [{ text: item }],
                  })),
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
            type: {
              control: 'select',
              options: ['ul', 'ol'],
              description: 'List type (unordered or ordered)',
            },
            items: { control: 'object', description: 'List items' },
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
        BulletedList = {
          args: { type: 'ul', items: ['Apple', 'Banana', 'Orange', 'Grape'] },
        },
        NumberedList = {
          args: {
            type: 'ol',
            items: ['First step', 'Second step', 'Third step', 'Fourth step'],
          },
        },
        SingleItem = { args: { type: 'ul', items: ['Only one item'] } },
        LongItems = {
          args: {
            type: 'ul',
            items: [
              'This is a very long list item that might wrap to multiple lines depending on the container width',
              'Another long item with lots of text to demonstrate how the list handles lengthy content',
              'Short item',
            ],
          },
        },
        NestedLists = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'ul',
                  children: [
                    { type: 'li', children: [{ text: 'Parent item 1' }] },
                    { type: 'li', children: [{ text: 'Parent item 2' }] },
                    {
                      type: 'ul',
                      children: [
                        { type: 'li', children: [{ text: 'Nested item 2.1' }] },
                        { type: 'li', children: [{ text: 'Nested item 2.2' }] },
                      ],
                    },
                    { type: 'li', children: [{ text: 'Parent item 3' }] },
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
        MixedContent = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h2', children: [{ text: 'Shopping List' }] },
                {
                  type: 'ul',
                  children: [
                    { type: 'li', children: [{ text: 'Groceries' }] },
                    { type: 'li', children: [{ text: 'Household items' }] },
                    { type: 'li', children: [{ text: 'Electronics' }] },
                  ],
                },
                { type: 'h2', children: [{ text: 'Recipe Steps' }] },
                {
                  type: 'ol',
                  children: [
                    {
                      type: 'li',
                      children: [{ text: 'Preheat oven to 350°F' }],
                    },
                    { type: 'li', children: [{ text: 'Mix dry ingredients' }] },
                    { type: 'li', children: [{ text: 'Add wet ingredients' }] },
                    { type: 'li', children: [{ text: 'Bake for 25 minutes' }] },
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
        FormattedListItems = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'ul',
                  children: [
                    {
                      type: 'li',
                      children: [
                        { text: 'Item with ' },
                        { text: 'bold', bold: !0 },
                        { text: ' text' },
                      ],
                    },
                    {
                      type: 'li',
                      children: [
                        { text: 'Item with ' },
                        { text: 'italic', italic: !0 },
                        { text: ' text' },
                      ],
                    },
                    {
                      type: 'li',
                      children: [
                        { text: 'Item with ' },
                        { text: 'code', code: !0 },
                        { text: ' formatting' },
                      ],
                    },
                    {
                      type: 'li',
                      children: [
                        { text: 'Item with ' },
                        { text: 'multiple', bold: !0, italic: !0 },
                        { text: ' ' },
                        { text: 'formats', underline: !0 },
                      ],
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
        },
        InteractiveList = {
          args: { type: 'ul', items: ['Click me', 'Edit me', 'Type here'] },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox'),
              firstItem = canvas.getByText('Click me')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              firstItem
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{Control>}a{/Control}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.type(
                editor,
                'Clicked and edited!'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                editor
              ).toHaveTextContent('Clicked and edited!'))
          },
        },
        ListItemCreation = {
          args: { type: 'ul', items: ['First item'] },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox'),
              firstItem = canvas.getByText('First item')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              firstItem
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{End}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.type(
                editor,
                'Second item added'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                editor
              ).toHaveTextContent('First item'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                editor
              ).toHaveTextContent('Second item added'))
          },
        },
        TodoListStyle = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h3', children: [{ text: "Today's Tasks" }] },
                {
                  type: 'ul',
                  children: [
                    {
                      type: 'li',
                      children: [{ text: '☐ Write documentation' }],
                    },
                    {
                      type: 'li',
                      children: [{ text: '☑ Review pull requests' }],
                    },
                    {
                      type: 'li',
                      children: [{ text: '☐ Update dependencies' }],
                    },
                    {
                      type: 'li',
                      children: [{ text: '☑ Fix bug in production' }],
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
        },
        __namedExportsOrder = [
          'BulletedList',
          'NumberedList',
          'SingleItem',
          'LongItems',
          'NestedLists',
          'MixedContent',
          'FormattedListItems',
          'InteractiveList',
          'ListItemCreation',
          'TodoListStyle',
        ]
      ;((BulletedList.parameters = {
        ...BulletedList.parameters,
        docs: {
          ...BulletedList.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    type: 'ul',\n    items: ['Apple', 'Banana', 'Orange', 'Grape']\n  }\n}",
            ...BulletedList.parameters?.docs?.source,
          },
        },
      }),
        (NumberedList.parameters = {
          ...NumberedList.parameters,
          docs: {
            ...NumberedList.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'ol',\n    items: ['First step', 'Second step', 'Third step', 'Fourth step']\n  }\n}",
              ...NumberedList.parameters?.docs?.source,
            },
          },
        }),
        (SingleItem.parameters = {
          ...SingleItem.parameters,
          docs: {
            ...SingleItem.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'ul',\n    items: ['Only one item']\n  }\n}",
              ...SingleItem.parameters?.docs?.source,
            },
          },
        }),
        (LongItems.parameters = {
          ...LongItems.parameters,
          docs: {
            ...LongItems.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'ul',\n    items: ['This is a very long list item that might wrap to multiple lines depending on the container width', 'Another long item with lots of text to demonstrate how the list handles lengthy content', 'Short item']\n  }\n}",
              ...LongItems.parameters?.docs?.source,
            },
          },
        }),
        (NestedLists.parameters = {
          ...NestedLists.parameters,
          docs: {
            ...NestedLists.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'ul',\n        children: [{\n          type: 'li',\n          children: [{\n            text: 'Parent item 1'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Parent item 2'\n          }]\n        }, {\n          type: 'ul',\n          children: [{\n            type: 'li',\n            children: [{\n              text: 'Nested item 2.1'\n            }]\n          }, {\n            type: 'li',\n            children: [{\n              text: 'Nested item 2.2'\n            }]\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Parent item 3'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...NestedLists.parameters?.docs?.source,
            },
          },
        }),
        (MixedContent.parameters = {
          ...MixedContent.parameters,
          docs: {
            ...MixedContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h2',\n        children: [{\n          text: 'Shopping List'\n        }]\n      }, {\n        type: 'ul',\n        children: [{\n          type: 'li',\n          children: [{\n            text: 'Groceries'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Household items'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Electronics'\n          }]\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'Recipe Steps'\n        }]\n      }, {\n        type: 'ol',\n        children: [{\n          type: 'li',\n          children: [{\n            text: 'Preheat oven to 350°F'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Mix dry ingredients'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Add wet ingredients'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Bake for 25 minutes'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...MixedContent.parameters?.docs?.source,
            },
          },
        }),
        (FormattedListItems.parameters = {
          ...FormattedListItems.parameters,
          docs: {
            ...FormattedListItems.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'ul',\n        children: [{\n          type: 'li',\n          children: [{\n            text: 'Item with '\n          }, {\n            text: 'bold',\n            bold: true\n          }, {\n            text: ' text'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Item with '\n          }, {\n            text: 'italic',\n            italic: true\n          }, {\n            text: ' text'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Item with '\n          }, {\n            text: 'code',\n            code: true\n          }, {\n            text: ' formatting'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: 'Item with '\n          }, {\n            text: 'multiple',\n            bold: true,\n            italic: true\n          }, {\n            text: ' '\n          }, {\n            text: 'formats',\n            underline: true\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...FormattedListItems.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveList.parameters = {
          ...InteractiveList.parameters,
          docs: {
            ...InteractiveList.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'ul',\n    items: ['Click me', 'Edit me', 'Type here']\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n    const firstItem = canvas.getByText('Click me');\n\n    // Click on the first item\n    await userEvent.click(firstItem);\n\n    // Select all and replace\n    await userEvent.keyboard('{Control>}a{/Control}');\n    await userEvent.type(editor, 'Clicked and edited!');\n\n    // Verify the change\n    await expect(editor).toHaveTextContent('Clicked and edited!');\n  }\n}",
              ...InteractiveList.parameters?.docs?.source,
            },
          },
        }),
        (ListItemCreation.parameters = {
          ...ListItemCreation.parameters,
          docs: {
            ...ListItemCreation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'ul',\n    items: ['First item']\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n    const firstItem = canvas.getByText('First item');\n\n    // Click at the end of first item\n    await userEvent.click(firstItem);\n    await userEvent.keyboard('{End}');\n\n    // Press Enter to create new item\n    await userEvent.keyboard('{Enter}');\n\n    // Type new item\n    await userEvent.type(editor, 'Second item added');\n\n    // Verify both items exist\n    await expect(editor).toHaveTextContent('First item');\n    await expect(editor).toHaveTextContent('Second item added');\n  }\n}",
              ...ListItemCreation.parameters?.docs?.source,
            },
          },
        }),
        (TodoListStyle.parameters = {
          ...TodoListStyle.parameters,
          docs: {
            ...TodoListStyle.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h3',\n        children: [{\n          text: \"Today's Tasks\"\n        }]\n      }, {\n        type: 'ul',\n        children: [{\n          type: 'li',\n          children: [{\n            text: '☐ Write documentation'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: '☑ Review pull requests'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: '☐ Update dependencies'\n          }]\n        }, {\n          type: 'li',\n          children: [{\n            text: '☑ Fix bug in production'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...TodoListStyle.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
