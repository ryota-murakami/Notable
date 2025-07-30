'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1004],
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
    './components/ui/wiki-link-node.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BrokenLinks: () => BrokenLinks,
          CreateWikiLink: () => CreateWikiLink,
          Default: () => Default,
          ExternalLinks: () => ExternalLinks,
          InlineReferences: () => InlineReferences,
          InteractiveWikiLink: () => InteractiveWikiLink,
          KnowledgeBase: () => KnowledgeBase,
          LongTitle: () => LongTitle,
          MultipleLinks: () => MultipleLinks,
          ShortLink: () => ShortLink,
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
          title: 'UI/Nodes/WikiLinkNode',
          component: ({
            noteTitle = 'Getting Started',
            noteId = '123',
            linkText = '[[Getting Started]]',
          }) => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Check out ' },
                    {
                      type: 'wikiLink',
                      noteId,
                      noteTitle,
                      url: `/notes/${noteId}`,
                      children: [{ text: linkText }],
                    },
                    { text: ' for more information.' },
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
            noteTitle: {
              control: 'text',
              description: 'Title of the linked note',
            },
            noteId: { control: 'text', description: 'ID of the linked note' },
            linkText: {
              control: 'text',
              description: 'Display text for the link',
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
            noteTitle: 'Getting Started',
            noteId: '123',
            linkText: '[[Getting Started]]',
          },
        },
        ShortLink = {
          args: { noteTitle: 'API', noteId: 'api-docs', linkText: '[[API]]' },
        },
        LongTitle = {
          args: {
            noteTitle: 'Complete Guide to Building Modern Web Applications',
            noteId: 'guide-123',
            linkText: '[[Complete Guide to Building Modern Web Applications]]',
          },
        },
        MultipleLinks = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Start with ' },
                    {
                      type: 'wikiLink',
                      noteId: '1',
                      noteTitle: 'Introduction',
                      url: '/notes/1',
                      children: [{ text: '[[Introduction]]' }],
                    },
                    { text: ', then read ' },
                    {
                      type: 'wikiLink',
                      noteId: '2',
                      noteTitle: 'Core Concepts',
                      url: '/notes/2',
                      children: [{ text: '[[Core Concepts]]' }],
                    },
                    { text: ', and finally check ' },
                    {
                      type: 'wikiLink',
                      noteId: '3',
                      noteTitle: 'Advanced Topics',
                      url: '/notes/3',
                      children: [{ text: '[[Advanced Topics]]' }],
                    },
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
        KnowledgeBase = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                { type: 'h1', children: [{ text: 'Personal Knowledge Base' }] },
                { type: 'h2', children: [{ text: 'Programming' }] },
                {
                  type: 'p',
                  children: [
                    { text: '• ' },
                    {
                      type: 'wikiLink',
                      noteId: 'js-101',
                      noteTitle: 'JavaScript Fundamentals',
                      url: '/notes/js-101',
                      children: [{ text: '[[JavaScript Fundamentals]]' }],
                    },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: '• ' },
                    {
                      type: 'wikiLink',
                      noteId: 'react-guide',
                      noteTitle: 'React Best Practices',
                      url: '/notes/react-guide',
                      children: [{ text: '[[React Best Practices]]' }],
                    },
                  ],
                },
                { type: 'h2', children: [{ text: 'Design' }] },
                {
                  type: 'p',
                  children: [
                    { text: '• ' },
                    {
                      type: 'wikiLink',
                      noteId: 'ui-principles',
                      noteTitle: 'UI Design Principles',
                      url: '/notes/ui-principles',
                      children: [{ text: '[[UI Design Principles]]' }],
                    },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: '• ' },
                    {
                      type: 'wikiLink',
                      noteId: 'color-theory',
                      noteTitle: 'Color Theory Basics',
                      url: '/notes/color-theory',
                      children: [{ text: '[[Color Theory Basics]]' }],
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
        InlineReferences = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    {
                      text: 'When implementing authentication, consider using ',
                    },
                    {
                      type: 'wikiLink',
                      noteId: 'jwt-auth',
                      noteTitle: 'JWT Authentication',
                      url: '/notes/jwt-auth',
                      children: [{ text: '[[JWT]]' }],
                    },
                    { text: ' or ' },
                    {
                      type: 'wikiLink',
                      noteId: 'oauth2',
                      noteTitle: 'OAuth 2.0 Guide',
                      url: '/notes/oauth2',
                      children: [{ text: '[[OAuth 2.0]]' }],
                    },
                    { text: '. For session management, see ' },
                    {
                      type: 'wikiLink',
                      noteId: 'sessions',
                      noteTitle: 'Session Management',
                      url: '/notes/sessions',
                      children: [{ text: '[[Session Management]]' }],
                    },
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
        ExternalLinks = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Internal link: ' },
                    {
                      type: 'wikiLink',
                      noteId: 'internal-note',
                      noteTitle: 'Internal Documentation',
                      url: '/notes/internal-note',
                      children: [{ text: '[[Internal Documentation]]' }],
                    },
                  ],
                },
                {
                  type: 'p',
                  children: [
                    { text: 'External link: ' },
                    {
                      type: 'wikiLink',
                      noteTitle: 'MDN Web Docs',
                      url: 'https://developer.mozilla.org',
                      children: [{ text: '[[MDN Web Docs]]' }],
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
        InteractiveWikiLink = {
          args: {
            noteTitle: 'Click Me',
            noteId: 'test-123',
            linkText: '[[Click Me]]',
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const link = canvas.getByText('[[Click Me]]')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.Q4.hover(link),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                link
              ).toHaveClass(/text-blue/),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                link
              ).toHaveAttribute('title', 'Link to: Click Me'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                link
              ).toHaveAttribute('data-wiki-link', 'true'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_4__.E3)(
                link
              ).toHaveAttribute('data-note-id', 'test-123'))
          },
        },
        CreateWikiLink = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Type [[Note Title]] to create a wiki link.' },
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
                'Check out [[My New Note]] for details.'
              ))
          },
        },
        BrokenLinks = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_5__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_2__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'This links to a ' },
                    {
                      type: 'wikiLink',
                      noteTitle: 'Non-existent Note',
                      url: '/notes/404',
                      children: [{ text: '[[Non-existent Note]]' }],
                    },
                    { text: ' that does not exist yet.' },
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
          'ShortLink',
          'LongTitle',
          'MultipleLinks',
          'KnowledgeBase',
          'InlineReferences',
          'ExternalLinks',
          'InteractiveWikiLink',
          'CreateWikiLink',
          'BrokenLinks',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    noteTitle: 'Getting Started',\n    noteId: '123',\n    linkText: '[[Getting Started]]'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (ShortLink.parameters = {
          ...ShortLink.parameters,
          docs: {
            ...ShortLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteTitle: 'API',\n    noteId: 'api-docs',\n    linkText: '[[API]]'\n  }\n}",
              ...ShortLink.parameters?.docs?.source,
            },
          },
        }),
        (LongTitle.parameters = {
          ...LongTitle.parameters,
          docs: {
            ...LongTitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteTitle: 'Complete Guide to Building Modern Web Applications',\n    noteId: 'guide-123',\n    linkText: '[[Complete Guide to Building Modern Web Applications]]'\n  }\n}",
              ...LongTitle.parameters?.docs?.source,
            },
          },
        }),
        (MultipleLinks.parameters = {
          ...MultipleLinks.parameters,
          docs: {
            ...MultipleLinks.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Start with '\n        }, {\n          type: 'wikiLink',\n          noteId: '1',\n          noteTitle: 'Introduction',\n          url: '/notes/1',\n          children: [{\n            text: '[[Introduction]]'\n          }]\n        }, {\n          text: ', then read '\n        }, {\n          type: 'wikiLink',\n          noteId: '2',\n          noteTitle: 'Core Concepts',\n          url: '/notes/2',\n          children: [{\n            text: '[[Core Concepts]]'\n          }]\n        }, {\n          text: ', and finally check '\n        }, {\n          type: 'wikiLink',\n          noteId: '3',\n          noteTitle: 'Advanced Topics',\n          url: '/notes/3',\n          children: [{\n            text: '[[Advanced Topics]]'\n          }]\n        }, {\n          text: '.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...MultipleLinks.parameters?.docs?.source,
            },
          },
        }),
        (KnowledgeBase.parameters = {
          ...KnowledgeBase.parameters,
          docs: {
            ...KnowledgeBase.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'Personal Knowledge Base'\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'Programming'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '• '\n        }, {\n          type: 'wikiLink',\n          noteId: 'js-101',\n          noteTitle: 'JavaScript Fundamentals',\n          url: '/notes/js-101',\n          children: [{\n            text: '[[JavaScript Fundamentals]]'\n          }]\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '• '\n        }, {\n          type: 'wikiLink',\n          noteId: 'react-guide',\n          noteTitle: 'React Best Practices',\n          url: '/notes/react-guide',\n          children: [{\n            text: '[[React Best Practices]]'\n          }]\n        }]\n      }, {\n        type: 'h2',\n        children: [{\n          text: 'Design'\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '• '\n        }, {\n          type: 'wikiLink',\n          noteId: 'ui-principles',\n          noteTitle: 'UI Design Principles',\n          url: '/notes/ui-principles',\n          children: [{\n            text: '[[UI Design Principles]]'\n          }]\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: '• '\n        }, {\n          type: 'wikiLink',\n          noteId: 'color-theory',\n          noteTitle: 'Color Theory Basics',\n          url: '/notes/color-theory',\n          children: [{\n            text: '[[Color Theory Basics]]'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...KnowledgeBase.parameters?.docs?.source,
            },
          },
        }),
        (InlineReferences.parameters = {
          ...InlineReferences.parameters,
          docs: {
            ...InlineReferences.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'When implementing authentication, consider using '\n        }, {\n          type: 'wikiLink',\n          noteId: 'jwt-auth',\n          noteTitle: 'JWT Authentication',\n          url: '/notes/jwt-auth',\n          children: [{\n            text: '[[JWT]]'\n          }]\n        }, {\n          text: ' or '\n        }, {\n          type: 'wikiLink',\n          noteId: 'oauth2',\n          noteTitle: 'OAuth 2.0 Guide',\n          url: '/notes/oauth2',\n          children: [{\n            text: '[[OAuth 2.0]]'\n          }]\n        }, {\n          text: '. For session management, see '\n        }, {\n          type: 'wikiLink',\n          noteId: 'sessions',\n          noteTitle: 'Session Management',\n          url: '/notes/sessions',\n          children: [{\n            text: '[[Session Management]]'\n          }]\n        }, {\n          text: '.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...InlineReferences.parameters?.docs?.source,
            },
          },
        }),
        (ExternalLinks.parameters = {
          ...ExternalLinks.parameters,
          docs: {
            ...ExternalLinks.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Internal link: '\n        }, {\n          type: 'wikiLink',\n          noteId: 'internal-note',\n          noteTitle: 'Internal Documentation',\n          url: '/notes/internal-note',\n          children: [{\n            text: '[[Internal Documentation]]'\n          }]\n        }]\n      }, {\n        type: 'p',\n        children: [{\n          text: 'External link: '\n        }, {\n          type: 'wikiLink',\n          noteTitle: 'MDN Web Docs',\n          url: 'https://developer.mozilla.org',\n          children: [{\n            text: '[[MDN Web Docs]]'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...ExternalLinks.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveWikiLink.parameters = {
          ...InteractiveWikiLink.parameters,
          docs: {
            ...InteractiveWikiLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteTitle: 'Click Me',\n    noteId: 'test-123',\n    linkText: '[[Click Me]]'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for component to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Find the wiki link\n    const link = canvas.getByText('[[Click Me]]');\n\n    // Hover over the link\n    await userEvent.hover(link);\n\n    // Verify the link has proper styling\n    await expect(link).toHaveClass(/text-blue/);\n\n    // Verify the title attribute\n    await expect(link).toHaveAttribute('title', 'Link to: Click Me');\n\n    // Verify the data attributes\n    await expect(link).toHaveAttribute('data-wiki-link', 'true');\n    await expect(link).toHaveAttribute('data-note-id', 'test-123');\n  }\n}",
              ...InteractiveWikiLink.parameters?.docs?.source,
            },
          },
        }),
        (CreateWikiLink.parameters = {
          ...CreateWikiLink.parameters,
          docs: {
            ...CreateWikiLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Type [[Note Title]] to create a wiki link.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n\n    // Click at the end and add new line\n    await userEvent.click(editor);\n    await userEvent.keyboard('{End}{Enter}');\n\n    // Type wiki link syntax\n    await userEvent.type(editor, 'Check out [[My New Note]] for details.');\n\n    // Note: Actual wiki link creation would depend on the editor's parsing implementation\n  }\n}",
              ...CreateWikiLink.parameters?.docs?.source,
            },
          },
        }),
        (BrokenLinks.parameters = {
          ...BrokenLinks.parameters,
          docs: {
            ...BrokenLinks.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'This links to a '\n        }, {\n          type: 'wikiLink',\n          noteTitle: 'Non-existent Note',\n          url: '/notes/404',\n          children: [{\n            text: '[[Non-existent Note]]'\n          }]\n        }, {\n          text: ' that does not exist yet.'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...BrokenLinks.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
