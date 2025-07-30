/*! For license information please see ui-todo-nodes-stories.57161359.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1118],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Check })
        const Check = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
      },
    './components/ui/todo-nodes.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllChecked: () => AllChecked,
          AllUnchecked: () => AllUnchecked,
          CreateTodoItem: () => CreateTodoItem,
          DailyTasks: () => DailyTasks,
          Default: () => Default,
          InteractiveTodo: () => InteractiveTodo,
          LongTodoItems: () => LongTodoItems,
          MixedProgress: () => MixedProgress,
          ProjectChecklist: () => ProjectChecklist,
          TodoBlockComponent: () => TodoBlockComponent,
          TodoWithFormatting: () => TodoWithFormatting,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        platejs_react__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
          )),
        _todo_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/ui/todo-block.tsx'
        ),
        _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './components/editor/plugins/basic-nodes-kit.tsx'
          ),
        _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./components/ui/editor.tsx'),
        _storybook_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Nodes/TodoNodes',
          component: ({
            items = [
              { text: 'Complete project documentation', checked: !1 },
              { text: 'Review pull requests', checked: !0 },
              { text: 'Update dependencies', checked: !1 },
            ],
          }) => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                {
                  type: 'todo-list',
                  children: items.map((item, index) => ({
                    type: 'todo',
                    id: `todo-${index}`,
                    checked: item.checked,
                    children: [{ text: item.text }],
                  })),
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.KE,
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
            items: {
              control: 'object',
              description: 'Todo items with text and checked state',
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
            items: [
              { text: 'Write unit tests', checked: !1 },
              { text: 'Fix bug in production', checked: !0 },
              { text: 'Deploy to staging', checked: !1 },
            ],
          },
        },
        AllUnchecked = {
          args: {
            items: [
              { text: 'Start new feature', checked: !1 },
              { text: 'Design UI mockups', checked: !1 },
              { text: 'Get stakeholder approval', checked: !1 },
            ],
          },
        },
        AllChecked = {
          args: {
            items: [
              { text: 'Setup development environment', checked: !0 },
              { text: 'Install dependencies', checked: !0 },
              { text: 'Run initial build', checked: !0 },
            ],
          },
        },
        MixedProgress = {
          args: {
            items: [
              { text: '✅ Initial planning', checked: !0 },
              { text: '✅ Create wireframes', checked: !0 },
              { text: '🔄 Implement frontend', checked: !1 },
              { text: '⏳ Backend API', checked: !1 },
              { text: '⏳ Testing', checked: !1 },
            ],
          },
        },
        DailyTasks = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                { type: 'h2', children: [{ text: "Today's Tasks" }] },
                {
                  type: 'todo-list',
                  children: [
                    {
                      type: 'todo',
                      checked: !0,
                      children: [{ text: 'Morning standup meeting' }],
                    },
                    {
                      type: 'todo',
                      checked: !0,
                      children: [{ text: 'Code review for PR #123' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'Implement user authentication' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'Write API documentation' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'Prepare demo for client' }],
                    },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        ProjectChecklist = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                { type: 'h1', children: [{ text: 'Launch Checklist' }] },
                { type: 'h3', children: [{ text: '🚀 Pre-launch' }] },
                {
                  type: 'todo-list',
                  children: [
                    {
                      type: 'todo',
                      checked: !0,
                      children: [{ text: 'Security audit completed' }],
                    },
                    {
                      type: 'todo',
                      checked: !0,
                      children: [{ text: 'Performance testing passed' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'SSL certificates configured' }],
                    },
                  ],
                },
                { type: 'h3', children: [{ text: '📋 Documentation' }] },
                {
                  type: 'todo-list',
                  children: [
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'API documentation' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'User guide' }],
                    },
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'Admin manual' }],
                    },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        LongTodoItems = {
          args: {
            items: [
              {
                text: 'Implement comprehensive error handling system with proper logging, monitoring, and user-friendly error messages',
                checked: !1,
              },
              {
                text: 'Set up continuous integration pipeline with automated testing, code quality checks, and deployment to staging environment',
                checked: !0,
              },
              {
                text: 'Research and evaluate different authentication providers to determine the best solution for our use case',
                checked: !1,
              },
            ],
          },
        },
        InteractiveTodo = {
          args: {
            items: [
              { text: 'Click to toggle this item', checked: !1 },
              { text: 'This one is already done', checked: !0 },
              { text: 'Another task to complete', checked: !1 },
            ],
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const firstCheckbox = canvas.getAllByRole('checkbox')[0]
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.click(
              firstCheckbox
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.E3)(
                firstCheckbox
              ).toHaveAttribute('aria-checked', 'true'),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.click(
                firstCheckbox
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.E3)(
                firstCheckbox
              ).toHaveAttribute('aria-checked', 'false'))
          },
        },
        CreateTodoItem = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                {
                  type: 'todo-list',
                  children: [
                    {
                      type: 'todo',
                      checked: !1,
                      children: [{ text: 'First todo item' }],
                    },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.ux)(
              canvasElement
            )
            await new Promise((resolve) => setTimeout(resolve, 100))
            const editor = canvas.getByRole('textbox'),
              firstItem = canvas.getByText('First todo item')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.click(
              firstItem
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.keyboard(
                '{End}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_5__.Q4.type(
                editor,
                'Second todo item'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.E3)(
                editor
              ).toHaveTextContent('First todo item'),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_5__.E3)(
                editor
              ).toHaveTextContent('Second todo item'))
          },
        },
        TodoWithFormatting = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                {
                  type: 'todo-list',
                  children: [
                    {
                      type: 'todo',
                      checked: !1,
                      children: [
                        { text: 'Task with ' },
                        { text: 'bold', bold: !0 },
                        { text: ' and ' },
                        { text: 'italic', italic: !0 },
                        { text: ' text' },
                      ],
                    },
                    {
                      type: 'todo',
                      checked: !0,
                      children: [
                        { text: 'Completed task with ' },
                        { text: 'code', code: !0 },
                        { text: ' formatting' },
                      ],
                    },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.KE,
                      { variant: 'demo' }
                    ),
                  }
                ),
              }
            )
          },
        },
        TodoBlockComponent = {
          render: () => {
            const editor = (0, platejs_react__WEBPACK_IMPORTED_MODULE_6__.FI)({
              plugins:
                _components_editor_plugins_basic_nodes_kit__WEBPACK_IMPORTED_MODULE_3__.u,
              value: [
                {
                  type: 'p',
                  children: [
                    { text: 'Individual TodoBlock component demonstration:' },
                  ],
                },
              ],
            })
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              platejs_react__WEBPACK_IMPORTED_MODULE_6__.T6,
              {
                editor,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ui_editor__WEBPACK_IMPORTED_MODULE_4__.nG,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'div',
                      {
                        className: 'p-4',
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _todo_block__WEBPACK_IMPORTED_MODULE_2__.W,
                            {
                              attributes: {},
                              element: { type: 'todo', checked: !1 },
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'span',
                                { children: 'Unchecked todo item' }
                              ),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _todo_block__WEBPACK_IMPORTED_MODULE_2__.W,
                            {
                              attributes: {},
                              element: { type: 'todo', checked: !0 },
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'span',
                                { children: 'Checked todo item' }
                              ),
                            }
                          ),
                        ],
                      }
                    ),
                  }
                ),
              }
            )
          },
        },
        __namedExportsOrder = [
          'Default',
          'AllUnchecked',
          'AllChecked',
          'MixedProgress',
          'DailyTasks',
          'ProjectChecklist',
          'LongTodoItems',
          'InteractiveTodo',
          'CreateTodoItem',
          'TodoWithFormatting',
          'TodoBlockComponent',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    items: [{\n      text: 'Write unit tests',\n      checked: false\n    }, {\n      text: 'Fix bug in production',\n      checked: true\n    }, {\n      text: 'Deploy to staging',\n      checked: false\n    }]\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (AllUnchecked.parameters = {
          ...AllUnchecked.parameters,
          docs: {
            ...AllUnchecked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: [{\n      text: 'Start new feature',\n      checked: false\n    }, {\n      text: 'Design UI mockups',\n      checked: false\n    }, {\n      text: 'Get stakeholder approval',\n      checked: false\n    }]\n  }\n}",
              ...AllUnchecked.parameters?.docs?.source,
            },
          },
        }),
        (AllChecked.parameters = {
          ...AllChecked.parameters,
          docs: {
            ...AllChecked.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: [{\n      text: 'Setup development environment',\n      checked: true\n    }, {\n      text: 'Install dependencies',\n      checked: true\n    }, {\n      text: 'Run initial build',\n      checked: true\n    }]\n  }\n}",
              ...AllChecked.parameters?.docs?.source,
            },
          },
        }),
        (MixedProgress.parameters = {
          ...MixedProgress.parameters,
          docs: {
            ...MixedProgress.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: [{\n      text: '✅ Initial planning',\n      checked: true\n    }, {\n      text: '✅ Create wireframes',\n      checked: true\n    }, {\n      text: '🔄 Implement frontend',\n      checked: false\n    }, {\n      text: '⏳ Backend API',\n      checked: false\n    }, {\n      text: '⏳ Testing',\n      checked: false\n    }]\n  }\n}",
              ...MixedProgress.parameters?.docs?.source,
            },
          },
        }),
        (DailyTasks.parameters = {
          ...DailyTasks.parameters,
          docs: {
            ...DailyTasks.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h2',\n        children: [{\n          text: \"Today's Tasks\"\n        }]\n      }, {\n        type: 'todo-list',\n        children: [{\n          type: 'todo',\n          checked: true,\n          children: [{\n            text: 'Morning standup meeting'\n          }]\n        }, {\n          type: 'todo',\n          checked: true,\n          children: [{\n            text: 'Code review for PR #123'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'Implement user authentication'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'Write API documentation'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'Prepare demo for client'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...DailyTasks.parameters?.docs?.source,
            },
          },
        }),
        (ProjectChecklist.parameters = {
          ...ProjectChecklist.parameters,
          docs: {
            ...ProjectChecklist.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'h1',\n        children: [{\n          text: 'Launch Checklist'\n        }]\n      }, {\n        type: 'h3',\n        children: [{\n          text: '🚀 Pre-launch'\n        }]\n      }, {\n        type: 'todo-list',\n        children: [{\n          type: 'todo',\n          checked: true,\n          children: [{\n            text: 'Security audit completed'\n          }]\n        }, {\n          type: 'todo',\n          checked: true,\n          children: [{\n            text: 'Performance testing passed'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'SSL certificates configured'\n          }]\n        }]\n      }, {\n        type: 'h3',\n        children: [{\n          text: '📋 Documentation'\n        }]\n      }, {\n        type: 'todo-list',\n        children: [{\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'API documentation'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'User guide'\n          }]\n        }, {\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'Admin manual'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...ProjectChecklist.parameters?.docs?.source,
            },
          },
        }),
        (LongTodoItems.parameters = {
          ...LongTodoItems.parameters,
          docs: {
            ...LongTodoItems.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: [{\n      text: 'Implement comprehensive error handling system with proper logging, monitoring, and user-friendly error messages',\n      checked: false\n    }, {\n      text: 'Set up continuous integration pipeline with automated testing, code quality checks, and deployment to staging environment',\n      checked: true\n    }, {\n      text: 'Research and evaluate different authentication providers to determine the best solution for our use case',\n      checked: false\n    }]\n  }\n}",
              ...LongTodoItems.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveTodo.parameters = {
          ...InteractiveTodo.parameters,
          docs: {
            ...InteractiveTodo.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: [{\n      text: 'Click to toggle this item',\n      checked: false\n    }, {\n      text: 'This one is already done',\n      checked: true\n    }, {\n      text: 'Another task to complete',\n      checked: false\n    }]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for component to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Find the first checkbox\n    const firstCheckbox = canvas.getAllByRole('checkbox')[0];\n\n    // Click to check\n    await userEvent.click(firstCheckbox);\n\n    // Verify it's checked\n    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');\n\n    // Click again to uncheck\n    await userEvent.click(firstCheckbox);\n\n    // Verify it's unchecked\n    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false');\n  }\n}",
              ...InteractiveTodo.parameters?.docs?.source,
            },
          },
        }),
        (CreateTodoItem.parameters = {
          ...CreateTodoItem.parameters,
          docs: {
            ...CreateTodoItem.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'todo-list',\n        children: [{\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'First todo item'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for editor to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n    const editor = canvas.getByRole('textbox');\n    const firstItem = canvas.getByText('First todo item');\n\n    // Click at the end of first item\n    await userEvent.click(firstItem);\n    await userEvent.keyboard('{End}');\n\n    // Press Enter to create new todo item\n    await userEvent.keyboard('{Enter}');\n\n    // Type new todo\n    await userEvent.type(editor, 'Second todo item');\n\n    // Verify both items exist\n    await expect(editor).toHaveTextContent('First todo item');\n    await expect(editor).toHaveTextContent('Second todo item');\n  }\n}",
              ...CreateTodoItem.parameters?.docs?.source,
            },
          },
        }),
        (TodoWithFormatting.parameters = {
          ...TodoWithFormatting.parameters,
          docs: {
            ...TodoWithFormatting.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'todo-list',\n        children: [{\n          type: 'todo',\n          checked: false,\n          children: [{\n            text: 'Task with '\n          }, {\n            text: 'bold',\n            bold: true\n          }, {\n            text: ' and '\n          }, {\n            text: 'italic',\n            italic: true\n          }, {\n            text: ' text'\n          }]\n        }, {\n          type: 'todo',\n          checked: true,\n          children: [{\n            text: 'Completed task with '\n          }, {\n            text: 'code',\n            code: true\n          }, {\n            text: ' formatting'\n          }]\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <Editor variant='demo' />\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...TodoWithFormatting.parameters?.docs?.source,
            },
          },
        }),
        (TodoBlockComponent.parameters = {
          ...TodoBlockComponent.parameters,
          docs: {
            ...TodoBlockComponent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const editor = usePlateEditor({\n      plugins: BasicNodesKit,\n      value: [{\n        type: 'p',\n        children: [{\n          text: 'Individual TodoBlock component demonstration:'\n        }]\n      }]\n    });\n    return <Plate editor={editor}>\n        <EditorContainer>\n          <div className='p-4'>\n            <TodoBlock attributes={{}} element={{\n            type: 'todo',\n            checked: false\n          }}>\n              <span>Unchecked todo item</span>\n            </TodoBlock>\n            <TodoBlock attributes={{}} element={{\n            type: 'todo',\n            checked: true\n          }}>\n              <span>Checked todo item</span>\n            </TodoBlock>\n          </div>\n        </EditorContainer>\n      </Plate>;\n  }\n}",
              ...TodoBlockComponent.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
