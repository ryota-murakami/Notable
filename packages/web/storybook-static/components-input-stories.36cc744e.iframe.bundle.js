/*! For license information please see components-input-stories.36cc744e.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7760],
  {
    '../../node_modules/.pnpm/framer-motion@12.23.9_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Calendar })
        const Calendar = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Calendar', [
          ['path', { d: 'M8 2v4', key: '1cmpym' }],
          ['path', { d: 'M16 2v4', key: '4m81vk' }],
          [
            'rect',
            {
              width: '18',
              height: '18',
              x: '3',
              y: '4',
              rx: '2',
              key: '1hopcy',
            },
          ],
          ['path', { d: 'M3 10h18', key: '8toen8' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/credit-card.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => CreditCard })
        const CreditCard = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('CreditCard', [
          [
            'rect',
            {
              width: '20',
              height: '14',
              x: '2',
              y: '5',
              rx: '2',
              key: 'ynyp8z',
            },
          ],
          ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Mail })
        const Mail = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Mail', [
          [
            'rect',
            {
              width: '20',
              height: '16',
              x: '2',
              y: '4',
              rx: '2',
              key: '18n3k1',
            },
          ],
          [
            'path',
            { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => User })
        const User = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('User', [
          [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
          ],
          ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
        ])
      },
    './design-system/components/input.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Clearable: () => Clearable,
          CompleteFeatures: () => CompleteFeatures,
          CustomValidation: () => CustomValidation,
          DebouncedInput: () => DebouncedInput,
          Default: () => Default,
          FloatingLabel: () => FloatingLabel,
          FormExample: () => FormExample,
          IconRight: () => IconRight,
          PasswordInputExample: () => PasswordInputExample,
          SearchInputExample: () => SearchInputExample,
          Sizes: () => Sizes,
          States: () => States,
          Variants: () => Variants,
          WithCharacterCount: () => WithCharacterCount,
          WithHelperText: () => WithHelperText,
          WithIcon: () => WithIcon,
          WithLabel: () => WithLabel,
          WithSuggestions: () => WithSuggestions,
          WithValidation: () => WithValidation,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => input_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        input = __webpack_require__('./design-system/components/input.tsx'),
        mail = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js'
        ),
        user = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js'
        )
      const Phone = (0,
      __webpack_require__(
        '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
      ).A)('Phone', [
        [
          'path',
          {
            d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
            key: 'foiqr5',
          },
        ],
      ])
      var calendar = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js'
        ),
        credit_card = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/credit-card.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const input_stories = {
          title: 'Design System/Components/Input',
          component: input.pd,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            variant: {
              control: { type: 'select' },
              options: ['default', 'filled', 'flushed', 'outlined'],
            },
            inputSize: {
              control: { type: 'select' },
              options: ['sm', 'md', 'lg'],
            },
            iconPosition: {
              control: { type: 'select' },
              options: ['left', 'right'],
            },
            loading: { control: { type: 'boolean' } },
            disabled: { control: { type: 'boolean' } },
            clearable: { control: { type: 'boolean' } },
            floating: { control: { type: 'boolean' } },
            showCharacterCount: { control: { type: 'boolean' } },
            success: { control: { type: 'boolean' } },
          },
        },
        Default = {
          args: { placeholder: 'Enter text...' },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
          play: async ({ canvasElement }) => {
            const input = (0, dist.ux)(canvasElement).getByPlaceholderText(
              'Enter text...'
            )
            ;(await (0, dist.E3)(input).toBeVisible(),
              await (0, dist.E3)(input).toBeEnabled(),
              await dist.Q4.type(input, 'Hello, World!'),
              await (0, dist.E3)(input).toHaveValue('Hello, World!'),
              await dist.Q4.clear(input),
              await (0, dist.E3)(input).toHaveValue(''))
          },
        },
        WithLabel = {
          args: { label: 'Username', placeholder: 'Enter your username' },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              input = canvas.getByLabelText('Username'),
              label = canvas.getByText('Username')
            ;(await (0, dist.E3)(label).toBeVisible(),
              await (0, dist.E3)(input).toBeVisible(),
              await dist.Q4.click(label),
              await (0, dist.E3)(input).toHaveFocus())
          },
        },
        WithIcon = {
          args: {
            placeholder: 'Enter email',
            icon: (0, jsx_runtime.jsx)(mail.A, { className: 'h-4 w-4' }),
            type: 'email',
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        IconRight = {
          args: {
            placeholder: 'Enter username',
            icon: (0, jsx_runtime.jsx)(user.A, { className: 'h-4 w-4' }),
            iconPosition: 'right',
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        FloatingLabel = {
          args: { label: 'Email Address', floating: !0, type: 'email' },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        Variants = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '400px',
              },
              children: [
                (0, jsx_runtime.jsx)(input.pd, {
                  variant: 'default',
                  placeholder: 'Default variant',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  variant: 'filled',
                  placeholder: 'Filled variant',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  variant: 'flushed',
                  placeholder: 'Flushed variant',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  variant: 'outlined',
                  placeholder: 'Outlined variant',
                }),
              ],
            }),
        },
        Sizes = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '400px',
              },
              children: [
                (0, jsx_runtime.jsx)(input.pd, {
                  inputSize: 'sm',
                  placeholder: 'Small input',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  inputSize: 'md',
                  placeholder: 'Medium input (default)',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  inputSize: 'lg',
                  placeholder: 'Large input',
                }),
              ],
            }),
        },
        States = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '400px',
              },
              children: [
                (0, jsx_runtime.jsx)(input.pd, { placeholder: 'Normal state' }),
                (0, jsx_runtime.jsx)(input.pd, {
                  placeholder: 'Success state',
                  success: !0,
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  placeholder: 'Warning state',
                  warning: 'This field needs attention',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  placeholder: 'Error state',
                  error: 'This field is required',
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  placeholder: 'Disabled state',
                  disabled: !0,
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  placeholder: 'Loading state',
                  loading: !0,
                }),
              ],
            }),
        },
        WithHelperText = {
          args: {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter password',
            helper: 'Must be at least 8 characters long',
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { width: '400px' },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        WithValidation = {
          args: {},
          render: () => {
            const [email, setEmail] = react.useState('')
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                label: 'Email',
                type: 'email',
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: 'Enter email',
                validation: [
                  { type: 'required', message: 'Email is required' },
                  { type: 'email', message: 'Please enter a valid email' },
                ],
              }),
            })
          },
        },
        WithCharacterCount = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState('')
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                label: 'Bio',
                placeholder: 'Write a short bio...',
                value,
                onChange: (e) => setValue(e.target.value),
                maxLength: 100,
                showCharacterCount: !0,
                helper: 'Keep it brief and engaging',
              }),
            })
          },
        },
        Clearable = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState('Clear me!')
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                placeholder: 'Clearable input',
                value,
                onChange: (e) => setValue(e.target.value),
                clearable: !0,
                onClear: () => setValue(''),
              }),
            })
          },
        },
        WithSuggestions = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState('')
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                label: 'Country',
                placeholder: 'Start typing...',
                value,
                onChange: (e) => setValue(e.target.value),
                suggestions: [
                  'United States',
                  'United Kingdom',
                  'Canada',
                  'Australia',
                  'Germany',
                  'France',
                  'Spain',
                  'Italy',
                  'Japan',
                  'China',
                ],
                onSuggestionSelect: (suggestion) => setValue(suggestion),
              }),
            })
          },
        },
        DebouncedInput = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState(''),
              [debouncedValue, setDebouncedValue] = react.useState('')
            return (0, jsx_runtime.jsxs)('div', {
              style: { width: '400px' },
              children: [
                (0, jsx_runtime.jsx)(input.pd, {
                  label: 'Search',
                  placeholder: 'Type to search...',
                  value,
                  onChange: (e) => setValue(e.target.value),
                  onDebouncedChange: (val) => setDebouncedValue(val),
                  debounceMs: 500,
                }),
                (0, jsx_runtime.jsxs)('p', {
                  style: {
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#666',
                  },
                  children: ['Debounced value: ', debouncedValue],
                }),
              ],
            })
          },
        },
        SearchInputExample = {
          args: {},
          render: () => {
            const [searchResults, setSearchResults] = react.useState([])
            return (0, jsx_runtime.jsxs)('div', {
              style: { width: '400px' },
              children: [
                (0, jsx_runtime.jsx)(input.DO, {
                  onSearch: (query) => {
                    setSearchResults(
                      query
                        ? [
                            `Result 1 for "${query}"`,
                            `Result 2 for "${query}"`,
                            `Result 3 for "${query}"`,
                          ]
                        : []
                    )
                  },
                }),
                searchResults.length > 0 &&
                  (0, jsx_runtime.jsxs)('div', {
                    style: { marginTop: '1rem' },
                    children: [
                      (0, jsx_runtime.jsx)('p', {
                        style: {
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          marginBottom: '0.5rem',
                        },
                        children: 'Search Results:',
                      }),
                      (0, jsx_runtime.jsx)('ul', {
                        style: { fontSize: '0.875rem', paddingLeft: '1.5rem' },
                        children: searchResults.map((result, index) =>
                          (0, jsx_runtime.jsx)(
                            'li',
                            { children: result },
                            index
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            })
          },
        },
        PasswordInputExample = {
          args: {},
          render: () =>
            (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.yA, {
                label: 'Password',
                placeholder: 'Enter password',
                helper: 'Click the eye icon to show/hide password',
              }),
            }),
        },
        FormExample = {
          args: {},
          render: () => {
            const [formData, setFormData] = react.useState({
                name: '',
                email: '',
                phone: '',
                birthdate: '',
              }),
              handleChange = (field) => (e) => {
                setFormData({ ...formData, [field]: e.target.value })
              }
            return (0, jsx_runtime.jsxs)('div', {
              style: {
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              },
              children: [
                (0, jsx_runtime.jsx)(input.pd, {
                  label: 'Full Name',
                  placeholder: 'John Doe',
                  value: formData.name,
                  onChange: handleChange('name'),
                  icon: (0, jsx_runtime.jsx)(user.A, { className: 'h-4 w-4' }),
                  validation: [
                    { type: 'required', message: 'Name is required' },
                    {
                      type: 'minLength',
                      value: 3,
                      message: 'Name must be at least 3 characters',
                    },
                  ],
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  label: 'Email',
                  type: 'email',
                  placeholder: 'john@example.com',
                  value: formData.email,
                  onChange: handleChange('email'),
                  icon: (0, jsx_runtime.jsx)(mail.A, { className: 'h-4 w-4' }),
                  validation: [
                    { type: 'required', message: 'Email is required' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ],
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  label: 'Phone',
                  type: 'tel',
                  placeholder: '+1 (555) 123-4567',
                  value: formData.phone,
                  onChange: handleChange('phone'),
                  icon: (0, jsx_runtime.jsx)(Phone, { className: 'h-4 w-4' }),
                  validation: [
                    {
                      type: 'pattern',
                      value: /^\+?[\d\s()-]+$/,
                      message: 'Please enter a valid phone number',
                    },
                  ],
                }),
                (0, jsx_runtime.jsx)(input.pd, {
                  label: 'Birth Date',
                  type: 'date',
                  value: formData.birthdate,
                  onChange: handleChange('birthdate'),
                  icon: (0, jsx_runtime.jsx)(calendar.A, {
                    className: 'h-4 w-4',
                  }),
                }),
              ],
            })
          },
        },
        CustomValidation = {
          args: {},
          render: () => {
            const [username, setUsername] = react.useState('')
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                label: 'Username',
                placeholder: 'Choose a username',
                value: username,
                onChange: (e) => setUsername(e.target.value),
                validation: [
                  { type: 'required', message: 'Username is required' },
                  {
                    type: 'minLength',
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  {
                    type: 'maxLength',
                    value: 20,
                    message: 'Username must be less than 20 characters',
                  },
                  {
                    type: 'custom',
                    message:
                      'Username can only contain letters, numbers, and underscores',
                    validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
                  },
                ],
                showCharacterCount: !0,
                maxLength: 20,
              }),
            })
          },
        },
        CompleteFeatures = {
          args: {},
          render: () => {
            const [value, setValue] = react.useState(''),
              [loading, setLoading] = react.useState(!1),
              handleSearch = () => {
                ;(setLoading(!0), setTimeout(() => setLoading(!1), 2e3))
              }
            return (0, jsx_runtime.jsx)('div', {
              style: { width: '400px' },
              children: (0, jsx_runtime.jsx)(input.pd, {
                label: 'Search Products',
                placeholder: 'Search for products...',
                value,
                onChange: (e) => setValue(e.target.value),
                icon: (0, jsx_runtime.jsx)(credit_card.A, {
                  className: 'h-4 w-4',
                }),
                clearable: !0,
                onClear: () => setValue(''),
                loading,
                floating: !0,
                showCharacterCount: !0,
                maxLength: 50,
                suggestions: [
                  'iPhone 15 Pro',
                  'MacBook Pro',
                  'iPad Air',
                  'AirPods Pro',
                ],
                onSuggestionSelect: (suggestion) => {
                  ;(setValue(suggestion), handleSearch())
                },
                validation: [
                  {
                    type: 'minLength',
                    value: 3,
                    message: 'Search query must be at least 3 characters',
                  },
                ],
                helper: 'Press Enter to search',
                onKeyDown: (e) => {
                  'Enter' === e.key && value.length >= 3 && handleSearch()
                },
              }),
            })
          },
        },
        __namedExportsOrder = [
          'Default',
          'WithLabel',
          'WithIcon',
          'IconRight',
          'FloatingLabel',
          'Variants',
          'Sizes',
          'States',
          'WithHelperText',
          'WithValidation',
          'WithCharacterCount',
          'Clearable',
          'WithSuggestions',
          'DebouncedInput',
          'SearchInputExample',
          'PasswordInputExample',
          'FormExample',
          'CustomValidation',
          'CompleteFeatures',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    placeholder: 'Enter text...'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByPlaceholderText('Enter text...');\n\n    // Test input is visible and enabled\n    await expect(input).toBeVisible();\n    await expect(input).toBeEnabled();\n\n    // Test typing\n    await userEvent.type(input, 'Hello, World!');\n    await expect(input).toHaveValue('Hello, World!');\n\n    // Test clearing\n    await userEvent.clear(input);\n    await expect(input).toHaveValue('');\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithLabel.parameters = {
          ...WithLabel.parameters,
          docs: {
            ...WithLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Username',\n    placeholder: 'Enter your username'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Username');\n    const label = canvas.getByText('Username');\n\n    // Test label association\n    await expect(label).toBeVisible();\n    await expect(input).toBeVisible();\n\n    // Test focus on label click\n    await userEvent.click(label);\n    await expect(input).toHaveFocus();\n  }\n}",
              ...WithLabel.parameters?.docs?.source,
            },
          },
        }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    placeholder: 'Enter email',\n    icon: <Mail className='h-4 w-4' />,\n    type: 'email'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (IconRight.parameters = {
          ...IconRight.parameters,
          docs: {
            ...IconRight.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    placeholder: 'Enter username',\n    icon: <User className='h-4 w-4' />,\n    iconPosition: 'right'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...IconRight.parameters?.docs?.source,
            },
          },
        }),
        (FloatingLabel.parameters = {
          ...FloatingLabel.parameters,
          docs: {
            ...FloatingLabel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Email Address',\n    floating: true,\n    type: 'email'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...FloatingLabel.parameters?.docs?.source,
            },
          },
        }),
        (Variants.parameters = {
          ...Variants.parameters,
          docs: {
            ...Variants.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '400px'\n  }}>\n      <Input variant='default' placeholder='Default variant' />\n      <Input variant='filled' placeholder='Filled variant' />\n      <Input variant='flushed' placeholder='Flushed variant' />\n      <Input variant='outlined' placeholder='Outlined variant' />\n    </div>\n}",
              ...Variants.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '400px'\n  }}>\n      <Input inputSize='sm' placeholder='Small input' />\n      <Input inputSize='md' placeholder='Medium input (default)' />\n      <Input inputSize='lg' placeholder='Large input' />\n    </div>\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (States.parameters = {
          ...States.parameters,
          docs: {
            ...States.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '400px'\n  }}>\n      <Input placeholder='Normal state' />\n      <Input placeholder='Success state' success />\n      <Input placeholder='Warning state' warning='This field needs attention' />\n      <Input placeholder='Error state' error='This field is required' />\n      <Input placeholder='Disabled state' disabled />\n      <Input placeholder='Loading state' loading />\n    </div>\n}",
              ...States.parameters?.docs?.source,
            },
          },
        }),
        (WithHelperText.parameters = {
          ...WithHelperText.parameters,
          docs: {
            ...WithHelperText.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Password',\n    type: 'password',\n    placeholder: 'Enter password',\n    helper: 'Must be at least 8 characters long'\n  },\n  decorators: [Story => <div style={{\n    width: '400px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...WithHelperText.parameters?.docs?.source,
            },
          },
        }),
        (WithValidation.parameters = {
          ...WithValidation.parameters,
          docs: {
            ...WithValidation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [email, setEmail] = React.useState('');\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email' validation={[{\n        type: 'required',\n        message: 'Email is required'\n      }, {\n        type: 'email',\n        message: 'Please enter a valid email'\n      }]} />\n      </div>;\n  }\n}",
              ...WithValidation.parameters?.docs?.source,
            },
          },
        }),
        (WithCharacterCount.parameters = {
          ...WithCharacterCount.parameters,
          docs: {
            ...WithCharacterCount.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState('');\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Bio' placeholder='Write a short bio...' value={value} onChange={e => setValue(e.target.value)} maxLength={100} showCharacterCount helper='Keep it brief and engaging' />\n      </div>;\n  }\n}",
              ...WithCharacterCount.parameters?.docs?.source,
            },
          },
        }),
        (Clearable.parameters = {
          ...Clearable.parameters,
          docs: {
            ...Clearable.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState('Clear me!');\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input placeholder='Clearable input' value={value} onChange={e => setValue(e.target.value)} clearable onClear={() => setValue('')} />\n      </div>;\n  }\n}",
              ...Clearable.parameters?.docs?.source,
            },
          },
        }),
        (WithSuggestions.parameters = {
          ...WithSuggestions.parameters,
          docs: {
            ...WithSuggestions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState('');\n    const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Spain', 'Italy', 'Japan', 'China'];\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Country' placeholder='Start typing...' value={value} onChange={e => setValue(e.target.value)} suggestions={countries} onSuggestionSelect={suggestion => setValue(suggestion)} />\n      </div>;\n  }\n}",
              ...WithSuggestions.parameters?.docs?.source,
            },
          },
        }),
        (DebouncedInput.parameters = {
          ...DebouncedInput.parameters,
          docs: {
            ...DebouncedInput.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState('');\n    const [debouncedValue, setDebouncedValue] = React.useState('');\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Search' placeholder='Type to search...' value={value} onChange={e => setValue(e.target.value)} onDebouncedChange={val => setDebouncedValue(val)} debounceMs={500} />\n        <p style={{\n        marginTop: '0.5rem',\n        fontSize: '0.875rem',\n        color: '#666'\n      }}>\n          Debounced value: {debouncedValue}\n        </p>\n      </div>;\n  }\n}",
              ...DebouncedInput.parameters?.docs?.source,
            },
          },
        }),
        (SearchInputExample.parameters = {
          ...SearchInputExample.parameters,
          docs: {
            ...SearchInputExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [searchResults, setSearchResults] = React.useState<string[]>([]);\n    const handleSearch = (query: string) => {\n      if (query) {\n        setSearchResults([`Result 1 for \"${query}\"`, `Result 2 for \"${query}\"`, `Result 3 for \"${query}\"`]);\n      } else {\n        setSearchResults([]);\n      }\n    };\n    return <div style={{\n      width: '400px'\n    }}>\n        <SearchInput onSearch={handleSearch} />\n        {searchResults.length > 0 && <div style={{\n        marginTop: '1rem'\n      }}>\n            <p style={{\n          fontSize: '0.875rem',\n          fontWeight: 'bold',\n          marginBottom: '0.5rem'\n        }}>\n              Search Results:\n            </p>\n            <ul style={{\n          fontSize: '0.875rem',\n          paddingLeft: '1.5rem'\n        }}>\n              {searchResults.map((result, index) => <li key={index}>{result}</li>)}\n            </ul>\n          </div>}\n      </div>;\n  }\n}",
              ...SearchInputExample.parameters?.docs?.source,
            },
          },
        }),
        (PasswordInputExample.parameters = {
          ...PasswordInputExample.parameters,
          docs: {
            ...PasswordInputExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => <div style={{\n    width: '400px'\n  }}>\n      <PasswordInput label='Password' placeholder='Enter password' helper='Click the eye icon to show/hide password' />\n    </div>\n}",
              ...PasswordInputExample.parameters?.docs?.source,
            },
          },
        }),
        (FormExample.parameters = {
          ...FormExample.parameters,
          docs: {
            ...FormExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [formData, setFormData] = React.useState({\n      name: '',\n      email: '',\n      phone: '',\n      birthdate: ''\n    });\n    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {\n      setFormData({\n        ...formData,\n        [field]: e.target.value\n      });\n    };\n    return <div style={{\n      width: '400px',\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem'\n    }}>\n        <Input label='Full Name' placeholder='John Doe' value={formData.name} onChange={handleChange('name')} icon={<User className='h-4 w-4' />} validation={[{\n        type: 'required',\n        message: 'Name is required'\n      }, {\n        type: 'minLength',\n        value: 3,\n        message: 'Name must be at least 3 characters'\n      }]} />\n\n        <Input label='Email' type='email' placeholder='john@example.com' value={formData.email} onChange={handleChange('email')} icon={<Mail className='h-4 w-4' />} validation={[{\n        type: 'required',\n        message: 'Email is required'\n      }, {\n        type: 'email',\n        message: 'Please enter a valid email'\n      }]} />\n\n        <Input label='Phone' type='tel' placeholder='+1 (555) 123-4567' value={formData.phone} onChange={handleChange('phone')} icon={<Phone className='h-4 w-4' />} validation={[{\n        type: 'pattern',\n        value: /^\\+?[\\d\\s()-]+$/,\n        message: 'Please enter a valid phone number'\n      }]} />\n\n        <Input label='Birth Date' type='date' value={formData.birthdate} onChange={handleChange('birthdate')} icon={<Calendar className='h-4 w-4' />} />\n      </div>;\n  }\n}",
              ...FormExample.parameters?.docs?.source,
            },
          },
        }),
        (CustomValidation.parameters = {
          ...CustomValidation.parameters,
          docs: {
            ...CustomValidation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [username, setUsername] = React.useState('');\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Username' placeholder='Choose a username' value={username} onChange={e => setUsername(e.target.value)} validation={[{\n        type: 'required',\n        message: 'Username is required'\n      }, {\n        type: 'minLength',\n        value: 3,\n        message: 'Username must be at least 3 characters'\n      }, {\n        type: 'maxLength',\n        value: 20,\n        message: 'Username must be less than 20 characters'\n      }, {\n        type: 'custom',\n        message: 'Username can only contain letters, numbers, and underscores',\n        validator: value => /^[a-zA-Z0-9_]+$/.test(value)\n      }]} showCharacterCount maxLength={20} />\n      </div>;\n  }\n}",
              ...CustomValidation.parameters?.docs?.source,
            },
          },
        }),
        (CompleteFeatures.parameters = {
          ...CompleteFeatures.parameters,
          docs: {
            ...CompleteFeatures.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {},\n  render: () => {\n    const [value, setValue] = React.useState('');\n    const [loading, setLoading] = React.useState(false);\n    const handleSearch = () => {\n      setLoading(true);\n      setTimeout(() => setLoading(false), 2000);\n    };\n    return <div style={{\n      width: '400px'\n    }}>\n        <Input label='Search Products' placeholder='Search for products...' value={value} onChange={e => setValue(e.target.value)} icon={<CreditCard className='h-4 w-4' />} clearable onClear={() => setValue('')} loading={loading} floating showCharacterCount maxLength={50} suggestions={['iPhone 15 Pro', 'MacBook Pro', 'iPad Air', 'AirPods Pro']} onSuggestionSelect={suggestion => {\n        setValue(suggestion);\n        handleSearch();\n      }} validation={[{\n        type: 'minLength',\n        value: 3,\n        message: 'Search query must be at least 3 characters'\n      }]} helper='Press Enter to search' onKeyDown={e => {\n        if (e.key === 'Enter' && value.length >= 3) {\n          handleSearch();\n        }\n      }} />\n      </div>;\n  }\n}",
              ...CompleteFeatures.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
