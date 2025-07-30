/*! For license information please see 2814.e610adfc.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [2814],
  {
    '../../node_modules/.pnpm/@platejs+utils@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0___fb257a7d31367cd01f4acae344d44fb2/node_modules/@platejs/utils/dist/react/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          _K: () => useMarkToolbarButton,
          l4: () => useMarkToolbarButtonState,
        })
        var _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@platejs+core@49.1.13_@types+react@19.1.8_immer@10.1.1_react-dom@19.1.0_react@19.1.0__r_fc8440c0ba2acbec6acd6c03c7e5303e/node_modules/@platejs/core/dist/react/index.mjs'
            ),
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _platejs_core_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/slate-react@0.117.4_react-dom@19.1.0_react@19.1.0__react@19.1.0_slate-dom@0.117.4_slate@0.117.2__slate@0.117.2/node_modules/slate-react/dist/index.es.js'
            ),
          useMarkToolbarButtonState = ({ clear, nodeType }) => {
            const pressed = (0,
            _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.QR)(
              (editor) => editor.api.hasMark(nodeType),
              [nodeType]
            )
            return { clear, nodeType, pressed }
          },
          useMarkToolbarButton = (state) => {
            const editor = (0,
            _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.Q_)()
            return {
              props: {
                pressed: state.pressed,
                onClick: () => {
                  ;(editor.tf.toggleMark(state.nodeType, {
                    remove: state.clear,
                  }),
                    editor.tf.focus())
                },
                onMouseDown: (e) => {
                  e.preventDefault()
                },
              },
            }
          }
        var KEYS = {
          a: 'a',
          ai: 'ai',
          aiChat: 'aiChat',
          audio: 'audio',
          blockquote: 'blockquote',
          bold: 'bold',
          callout: 'callout',
          taskList: 'taskList',
          code: 'code',
          codeBlock: 'code_block',
          codeLine: 'code_line',
          codeSyntax: 'code_syntax',
          column: 'column',
          columnGroup: 'column_group',
          comment: 'comment',
          date: 'date',
          emojiInput: 'emoji_input',
          equation: 'equation',
          excalidraw: 'excalidraw',
          file: 'file',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          highlight: 'highlight',
          hr: 'hr',
          img: 'img',
          inlineEquation: 'inline_equation',
          italic: 'italic',
          kbd: 'kbd',
          li: 'li',
          lic: 'lic',
          link: 'a',
          listTodoClassic: 'action_item',
          mediaEmbed: 'media_embed',
          mention: 'mention',
          mentionInput: 'mention_input',
          olClassic: 'ol',
          p: 'p',
          searchHighlight: 'search_highlight',
          slashInput: 'slash_input',
          strikethrough: 'strikethrough',
          sub: 'subscript',
          suggestion: 'suggestion',
          sup: 'superscript',
          table: 'table',
          tag: 'tag',
          td: 'td',
          th: 'th',
          toc: 'toc',
          toggle: 'toggle',
          tr: 'tr',
          ulClassic: 'ul',
          underline: 'underline',
          video: 'video',
          backgroundColor: 'backgroundColor',
          color: 'color',
          fontFamily: 'fontFamily',
          fontSize: 'fontSize',
          fontWeight: 'fontWeight',
          indent: 'indent',
          lineHeight: 'lineHeight',
          listType: 'listStyleType',
          textAlign: 'textAlign',
          textIndent: 'textIndent',
          autoformat: 'autoformat',
          blockMenu: 'blockMenu',
          blockPlaceholder: 'blockPlaceholder',
          blockSelection: 'blockSelection',
          caption: 'caption',
          copilot: 'copilot',
          csv: 'csv',
          cursorOverlay: 'cursorOverlay',
          delete: 'delete',
          dnd: 'dnd',
          docx: 'docx',
          emoji: 'emoji',
          exitBreak: 'exitBreak',
          heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          html: 'html',
          juice: 'juice',
          list: 'list',
          listChecked: 'checked',
          listClassic: 'listClassic',
          listRestart: 'listRestart',
          listRestartPolite: 'listRestartPolite',
          listStart: 'listStart',
          listTodo: 'todo',
          markdown: 'markdown',
          nodeId: 'nodeId',
          normalizeTypes: 'normalizeTypes',
          ol: 'decimal',
          placeholder: 'placeholder',
          playwright: 'playwright',
          removeEmptyNodes: 'removeEmptyNodes',
          resetNode: 'resetNode',
          singleBlock: 'singleBlock',
          singleLine: 'singleLine',
          slashCommand: 'slash_command',
          softBreak: 'softBreak',
          tabbable: 'tabbable',
          trailingBlock: 'trailingBlock',
          ul: 'disc',
          yjs: 'yjs',
        }
        ;(0, _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.e3)({
          key: KEYS.blockPlaceholder,
          editOnly: !0,
          options: {
            _target: null,
            placeholders: { [KEYS.p]: 'Type something...' },
            query: ({ path }) => 1 === path.length,
          },
          useHooks: (ctx) => {
            const { editor, getOptions, setOption } = ctx,
              focused = (0,
              _platejs_core_react__WEBPACK_IMPORTED_MODULE_2__.zL)(),
              readOnly = (0,
              _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.fu)(),
              composing = (0,
              _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.iA)(),
              entry = (0, _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.QR)(
                () =>
                  readOnly ||
                  composing ||
                  !focused ||
                  !editor.selection ||
                  editor.api.isExpanded()
                    ? null
                    : editor.api.block(),
                [readOnly, composing, focused]
              )
            react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
              if (!entry) return void setOption('_target', null)
              const { placeholders, query } = getOptions(),
                [element, path] = entry,
                placeholder = Object.keys(placeholders).find(
                  (key) => editor.getType(key) === element.type
                )
              query({ ...ctx, node: element, path }) &&
              placeholder &&
              editor.api.isEmpty(element) &&
              !editor.api.isEmpty()
                ? setOption('_target', {
                    node: element,
                    placeholder: placeholders[placeholder],
                  })
                : setOption('_target', null)
            }, [editor, entry, setOption, getOptions])
          },
        })
          .extendSelectors(({ getOption }) => ({
            placeholder: (node) => {
              const target = getOption('_target')
              if (target?.node === node) return target.placeholder
            },
          }))
          .extend({
            inject: {
              isBlock: !0,
              nodeProps: {
                transformProps: (props) => {
                  const placeholder = (0,
                  _platejs_core_react__WEBPACK_IMPORTED_MODULE_0__.gO)(
                    props.plugin,
                    'placeholder',
                    props.element
                  )
                  if (placeholder)
                    return {
                      className: props.getOption('className'),
                      placeholder,
                    }
                },
              },
            },
          })
      },
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bold.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Bold })
        const Bold = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Bold', [
          [
            'path',
            {
              d: 'M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8',
              key: 'mg9rjx',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/code.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Code })
        const Code = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Code', [
          ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
          ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/highlighter.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Highlighter })
        const Highlighter = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Highlighter', [
          ['path', { d: 'm9 11-6 6v3h9l3-3', key: '1a3l36' }],
          [
            'path',
            {
              d: 'm22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4',
              key: '14a9rk',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/italic.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Italic })
        const Italic = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Italic', [
          ['line', { x1: '19', x2: '10', y1: '4', y2: '4', key: '15jd3p' }],
          ['line', { x1: '14', x2: '5', y1: '20', y2: '20', key: 'bu0au3' }],
          ['line', { x1: '15', x2: '9', y1: '4', y2: '20', key: 'uljnxc' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/strikethrough.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Strikethrough })
        const Strikethrough = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Strikethrough', [
          ['path', { d: 'M16 4H9a3 3 0 0 0-2.83 4', key: '43sutm' }],
          ['path', { d: 'M14 12a4 4 0 0 1 0 8H6', key: 'nlfj13' }],
          ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/underline.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Underline })
        const Underline = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Underline', [
          ['path', { d: 'M6 4v6a6 6 0 0 0 12 0V4', key: '9kb039' }],
          ['line', { x1: '4', x2: '20', y1: '20', y2: '20', key: 'nun2al' }],
        ])
      },
  },
])
