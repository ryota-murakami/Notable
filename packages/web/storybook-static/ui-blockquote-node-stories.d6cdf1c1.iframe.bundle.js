'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [3808],
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
    './components/ui/blockquote-node.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CreateBlockquote: () => CreateBlockquote,
          Default: () => Default,
          FormattedBlockquote: () => FormattedBlockquote,
          InContext: () => InContext,
          InteractiveBlockquote: () => InteractiveBlockquote,
          LongQuote: () => LongQuote,
          MultipleBlockquotes: () => MultipleBlockquotes,
          NestedContent: () => NestedContent,
          ShortQuote: () => ShortQuote,
          WithAuthor: () => WithAuthor,
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
          title: 'UI/Nodes/BlockquoteNode',
          component: ({
            content = 'This is a blockquote. It stands out from regular text.',
            author = '',
          }) => {
            const value = author
                ? [
                    { type: 'blockquote', children: [{ text: content }] },
                    { type: 'p', children: [{ text: `— ${author}` }] },
                  ]
                : [{ type: 'blockquote', children: [{ text: content }] }],
              editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
                plugins:
                  _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
                value,
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
            content: { control: 'text', description: 'Blockquote content' },
            author: {
              control: 'text',
              description: 'Optional author attribution',
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
        Default = {
          args: {
            content: 'The only way to do great work is to love what you do.',
          },
        },
        WithAuthor = {
          args: {
            content:
              'Innovation distinguishes between a leader and a follower.',
            author: 'Steve Jobs',
          },
        },
        LongQuote = {
          args: {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        },
        ShortQuote = { args: { content: 'Less is more.' } },
        FormattedBlockquote = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'blockquote',
                  children: [
                    { text: 'This blockquote contains ' },
                    { text: 'bold', bold: !0 },
                    { text: ', ' },
                    { text: 'italic', italic: !0 },
                    { text: ', and ' },
                    { text: 'underlined', underline: !0 },
                    { text: ' text to demonstrate formatting.' },
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
        MultipleBlockquotes = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h2', children: [{ text: 'Favorite Quotes' }] },
                {
                  type: 'blockquote',
                  children: [
                    {
                      text: 'The journey of a thousand miles begins with one step.',
                    },
                  ],
                },
                { type: 'p', children: [{ text: '— Lao Tzu' }] },
                {
                  type: 'blockquote',
                  children: [{ text: 'What we think, we become.' }],
                },
                { type: 'p', children: [{ text: '— Buddha' }] },
                {
                  type: 'blockquote',
                  children: [
                    {
                      text: 'The only impossible journey is the one you never begin.',
                    },
                  ],
                },
                { type: 'p', children: [{ text: '— Tony Robbins' }] },
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
        InContext = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h1', children: [{ text: 'Article Title' }] },
                {
                  type: 'p',
                  children: [
                    {
                      text: 'This is an introductory paragraph that sets the context for the quote below.',
                    },
                  ],
                },
                {
                  type: 'blockquote',
                  children: [
                    {
                      text: 'A well-placed quote can emphasize key points and break up long sections of text.',
                    },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    {
                      text: 'As we can see from the quote above, blockquotes serve an important purpose in content structure.',
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
        InteractiveBlockquote = {
          args: { content: 'Click to edit this quote' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox'),
              blockquote = canvas.getByText('Click to edit this quote')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.click(
              blockquote
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.keyboard(
                '{End}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.type(
                editor,
                ' - now edited!'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                editor
              ).toHaveTextContent('Click to edit this quote - now edited!'))
          },
        },
        CreateBlockquote = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    {
                      text: 'Type some text and then convert it to a blockquote using the toolbar or keyboard shortcut.',
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
                'This will become a blockquote'
              ))
            const newText = canvas.getByText('This will become a blockquote')
            await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.tripleClick(
              newText
            )
          },
        },
        NestedContent = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'blockquote',
                  children: [
                    {
                      text: 'This blockquote contains multiple paragraphs.\n\n',
                    },
                    {
                      text: 'Each paragraph within the blockquote maintains the same styling and indentation.',
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
          'Default',
          'WithAuthor',
          'LongQuote',
          'ShortQuote',
          'FormattedBlockquote',
          'MultipleBlockquotes',
          'InContext',
          'InteractiveBlockquote',
          'CreateBlockquote',
          'NestedContent',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    content: 'The only way to do great work is to love what you do.'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithAuthor.parameters = {
          ...WithAuthor.parameters,
          docs: {
            ...WithAuthor.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    content: 'Innovation distinguishes between a leader and a follower.',\n    author: 'Steve Jobs'\n  }\n}",
              ...WithAuthor.parameters?.docs?.source,
            },
          },
        }),
        (LongQuote.parameters = {
          ...LongQuote.parameters,
          docs: {
            ...LongQuote.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n  }\n}",
              ...LongQuote.parameters?.docs?.source,
            },
          },
        }),
        (ShortQuote.parameters = {
          ...ShortQuote.parameters,
          docs: {
            ...ShortQuote.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    content: 'Less is more.'\n  }\n}",
              ...ShortQuote.parameters?.docs?.source,
            },
          },
        }),
        (FormattedBlockquote.parameters = {
          ...FormattedBlockquote.parameters,
          docs: {
            ...FormattedBlockquote.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'blockquote',\n        children: [{\n          text: 'This blockquote contains '\n        }, {\n          text: 'bold',\n          bold: true\n        }, {\n          text: ', '\n        }, {\n          text: 'italic',\n          italic: true\n        }, {\n          text: ', and '\n        }, {\n          text: 'underlined',\n          underline: true\n        }, {\n          text: ' text to demonstrate formatting.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...FormattedBlockquote.parameters?.docs?.source,
            },
          },
        }),
        (MultipleBlockquotes.parameters = {
          ...MultipleBlockquotes.parameters,
          docs: {
            ...MultipleBlockquotes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h2',\n        children: [{\n          text: 'Favorite Quotes'\n        }]\n      }, {\n        type: 'blockquote',\n        children: [{\n          text: 'The journey of a thousand miles begins with one step.'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '— Lao Tzu'\n        }]\n      }, {\n        type: 'blockquote',\n        children: [{\n          text: 'What we think, we become.'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '— Buddha'\n        }]\n      }, {\n        type: 'blockquote',\n        children: [{\n          text: 'The only impossible journey is the one you never begin.'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '— Tony Robbins'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...MultipleBlockquotes.parameters?.docs?.source,
            },
          },
        }),
        (InContext.parameters = {
          ...InContext.parameters,
          docs: {
            ...InContext.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'Article Title'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'This is an introductory paragraph that sets the context for the quote below.'\n        }]\n      }, {\n        type: 'blockquote',\n        children: [{\n          text: 'A well-placed quote can emphasize key points and break up long sections of text.'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'As we can see from the quote above, blockquotes serve an important purpose in content structure.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...InContext.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveBlockquote.parameters = {
          ...InteractiveBlockquote.parameters,
          docs: {
            ...InteractiveBlockquote.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    content: 'Click to edit this quote'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n    const blockquote = canvas.getByText('Click to edit this quote');\n\n    // Click on the blockquote\n    await userEvent.click(blockquote);\n\n    // Add text at the end\n    await userEvent.keyboard('{End}');\n    await userEvent.type(editor, ' - now edited!');\n\n    // Verify the change\n    await expect(editor).toHaveTextContent('Click to edit this quote - now edited!');\n  }\n}",
              ...InteractiveBlockquote.parameters?.docs?.source,
            },
          },
        }),
        (CreateBlockquote.parameters = {
          ...CreateBlockquote.parameters,
          docs: {
            ...CreateBlockquote.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Type some text and then convert it to a blockquote using the toolbar or keyboard shortcut.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n\n    // Add a new paragraph\n    await userEvent.click(editor);\n    await userEvent.keyboard('{End}{Enter}');\n    await userEvent.type(editor, 'This will become a blockquote');\n\n    // Select the text (triple-click to select the line)\n    const newText = canvas.getByText('This will become a blockquote');\n    await userEvent.tripleClick(newText);\n\n    // Note: Actual blockquote conversion would depend on toolbar/keyboard implementation\n  }\n}",
              ...CreateBlockquote.parameters?.docs?.source,
            },
          },
        }),
        (NestedContent.parameters = {
          ...NestedContent.parameters,
          docs: {
            ...NestedContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'blockquote',\n        children: [{\n          text: 'This blockquote contains multiple paragraphs.\\n\\n'\n        }, {\n          text: 'Each paragraph within the blockquote maintains the same styling and indentation.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...NestedContent.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
