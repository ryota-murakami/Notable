'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7573],
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
    './components/ui/heading-node.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllHeadings: () => AllHeadings,
          H1: () => H1,
          H2: () => H2,
          H3: () => H3,
          H4: () => H4,
          H5: () => H5,
          H6: () => H6,
          HeadingStyles: () => HeadingStyles,
          LongContent: () => LongContent,
          MixedContent: () => MixedContent,
          TestHeadingRendering: () => TestHeadingRendering,
          WithEmoji: () => WithEmoji,
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
          title: 'UI/Nodes/HeadingNode',
          component: ({ variant, content = 'Sample Heading Text' }) => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [{ type: variant, children: [{ text: content }] }],
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
            variant: {
              control: 'select',
              options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
              description: 'Heading level variant',
            },
            content: { control: 'text', description: 'Heading text content' },
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
        H1 = { args: { variant: 'h1', content: 'Heading Level 1' } },
        H2 = { args: { variant: 'h2', content: 'Heading Level 2' } },
        H3 = { args: { variant: 'h3', content: 'Heading Level 3' } },
        H4 = { args: { variant: 'h4', content: 'Heading Level 4' } },
        H5 = { args: { variant: 'h5', content: 'Heading Level 5' } },
        H6 = { args: { variant: 'h6', content: 'Heading Level 6' } },
        AllHeadings = {
          args: { variant: 'h1', content: 'All Headings' },
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h1', children: [{ text: 'Heading 1 - Largest' }] },
                { type: 'h2', children: [{ text: 'Heading 2 - Large' }] },
                {
                  type: 'h3',
                  children: [{ text: 'Heading 3 - Medium Large' }],
                },
                { type: 'h4', children: [{ text: 'Heading 4 - Medium' }] },
                { type: 'h5', children: [{ text: 'Heading 5 - Small' }] },
                { type: 'h6', children: [{ text: 'Heading 6 - Smallest' }] },
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
        LongContent = {
          args: {
            variant: 'h1',
            content:
              'This is a Very Long Heading That Might Wrap to Multiple Lines on Smaller Screens',
          },
        },
        WithEmoji = {
          args: { variant: 'h2', content: '🚀 Heading with Emoji 🎉' },
        },
        MixedContent = {
          args: { variant: 'h1', content: 'Mixed Content Document' },
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h1', children: [{ text: 'Document Title' }] },
                {
                  type: 'p',
                  children: [
                    { text: 'This is a paragraph under the main heading.' },
                  ],
                },
                { type: 'h2', children: [{ text: 'Section 1' }] },
                { type: 'p', children: [{ text: 'Content for section 1.' }] },
                { type: 'h3', children: [{ text: 'Subsection 1.1' }] },
                {
                  type: 'p',
                  children: [{ text: 'Content for subsection 1.1.' }],
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
        HeadingStyles = {
          args: { variant: 'h1', content: 'Heading Styles Example' },
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'h1',
                  children: [
                    { text: 'H1: ' },
                    { text: 'Bold', bold: !0 },
                    { text: ' and ' },
                    { text: 'Italic', italic: !0 },
                    { text: ' Text' },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    { text: 'H2: With ' },
                    { text: 'Underlined', underline: !0 },
                    { text: ' Text' },
                  ],
                },
                {
                  type: 'h3',
                  children: [
                    { text: 'H3: With ' },
                    { text: 'Code', code: !0 },
                    { text: ' Formatting' },
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
        TestHeadingRendering = {
          args: { variant: 'h1', content: 'Test Heading' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const heading = canvas.getByText('Test Heading')
            ;(await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
              heading
            ).toBeInTheDocument(),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                heading.tagName.toLowerCase()
              ).toBe('h1'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                heading
              ).toHaveClass('font-heading'))
          },
        },
        __namedExportsOrder = [
          'H1',
          'H2',
          'H3',
          'H4',
          'H5',
          'H6',
          'AllHeadings',
          'LongContent',
          'WithEmoji',
          'MixedContent',
          'HeadingStyles',
          'TestHeadingRendering',
        ]
      ;((H1.parameters = {
        ...H1.parameters,
        docs: {
          ...H1.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    variant: 'h1',\n    content: 'Heading Level 1'\n  }\n}",
            ...H1.parameters?.docs?.source,
          },
        },
      }),
        (H2.parameters = {
          ...H2.parameters,
          docs: {
            ...H2.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h2',\n    content: 'Heading Level 2'\n  }\n}",
              ...H2.parameters?.docs?.source,
            },
          },
        }),
        (H3.parameters = {
          ...H3.parameters,
          docs: {
            ...H3.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h3',\n    content: 'Heading Level 3'\n  }\n}",
              ...H3.parameters?.docs?.source,
            },
          },
        }),
        (H4.parameters = {
          ...H4.parameters,
          docs: {
            ...H4.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h4',\n    content: 'Heading Level 4'\n  }\n}",
              ...H4.parameters?.docs?.source,
            },
          },
        }),
        (H5.parameters = {
          ...H5.parameters,
          docs: {
            ...H5.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h5',\n    content: 'Heading Level 5'\n  }\n}",
              ...H5.parameters?.docs?.source,
            },
          },
        }),
        (H6.parameters = {
          ...H6.parameters,
          docs: {
            ...H6.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h6',\n    content: 'Heading Level 6'\n  }\n}",
              ...H6.parameters?.docs?.source,
            },
          },
        }),
        (AllHeadings.parameters = {
          ...AllHeadings.parameters,
          docs: {
            ...AllHeadings.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h1',\n    content: 'All Headings'\n  },\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'Heading 1 - Largest'\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'Heading 2 - Large'\n        }]\n      }, {\n        type: 'h3',\n        children: [{\n          text: 'Heading 3 - Medium Large'\n        }]\n      }, {\n        type: 'h4',\n        children: [{\n          text: 'Heading 4 - Medium'\n        }]\n      }, {\n        type: 'h5',\n        children: [{\n          text: 'Heading 5 - Small'\n        }]\n      }, {\n        type: 'h6',\n        children: [{\n          text: 'Heading 6 - Smallest'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...AllHeadings.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h1',\n    content: 'This is a Very Long Heading That Might Wrap to Multiple Lines on Smaller Screens'\n  }\n}",
              ...LongContent.parameters?.docs?.source,
            },
          },
        }),
        (WithEmoji.parameters = {
          ...WithEmoji.parameters,
          docs: {
            ...WithEmoji.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h2',\n    content: '🚀 Heading with Emoji 🎉'\n  }\n}",
              ...WithEmoji.parameters?.docs?.source,
            },
          },
        }),
        (MixedContent.parameters = {
          ...MixedContent.parameters,
          docs: {
            ...MixedContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h1',\n    content: 'Mixed Content Document'\n  },\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'Document Title'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'This is a paragraph under the main heading.'\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'Section 1'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Content for section 1.'\n        }]\n      }, {\n        type: 'h3',\n        children: [{\n          text: 'Subsection 1.1'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'Content for subsection 1.1.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...MixedContent.parameters?.docs?.source,
            },
          },
        }),
        (HeadingStyles.parameters = {
          ...HeadingStyles.parameters,
          docs: {
            ...HeadingStyles.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h1',\n    content: 'Heading Styles Example'\n  },\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'H1: '\n        }, {\n          text: 'Bold',\n          bold: true\n        }, {\n          text: ' and '\n        }, {\n          text: 'Italic',\n          italic: true\n        }, {\n          text: ' Text'\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'H2: With '\n        }, {\n          text: 'Underlined',\n          underline: true\n        }, {\n          text: ' Text'\n        }]\n      }, {\n        type: 'h3',\n        children: [{\n          text: 'H3: With '\n        }, {\n          text: 'Code',\n          code: true\n        }, {\n          text: ' Formatting'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...HeadingStyles.parameters?.docs?.source,
            },
          },
        }),
        (TestHeadingRendering.parameters = {
          ...TestHeadingRendering.parameters,
          docs: {
            ...TestHeadingRendering.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'h1',\n    content: 'Test Heading'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Check that the heading is rendered\n    const heading = canvas.getByText('Test Heading');\n    await expect(heading).toBeInTheDocument();\n\n    // Check that it's an h1 element\n    await expect(heading.tagName.toLowerCase()).toBe('h1');\n\n    // Check that it has the correct classes\n    await expect(heading).toHaveClass('font-heading');\n  }\n}",
              ...TestHeadingRendering.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
