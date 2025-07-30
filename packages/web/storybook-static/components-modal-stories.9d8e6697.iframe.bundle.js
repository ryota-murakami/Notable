'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [2331],
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
    './design-system/components/modal.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Animations: () => Animations,
          ConfirmationModal: () => ConfirmationModal,
          ConfirmationModalLoading: () => ConfirmationModalLoading,
          Default: () => Default,
          DrawerExample: () => DrawerExample,
          FormModal: () => FormModal,
          ImageModal: () => ImageModal,
          NestedModals: () => NestedModals,
          NoBlur: () => NoBlur,
          NoCloseButton: () => NoCloseButton,
          NoEscapeKey: () => NoEscapeKey,
          NoOverlayClick: () => NoOverlayClick,
          Positions: () => Positions,
          ScrollableContent: () => ScrollableContent,
          Sizes: () => Sizes,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => modal_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_image = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+nextjs@9.0.18_@swc+core@1.13.3_@swc+helpers@0.5.17__esbuild@0.25.8_next@15.2_81f7dbdef00916e6db991164aa717941/node_modules/@storybook/nextjs/dist/images/next-image.mjs'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        modal = __webpack_require__('./design-system/components/modal.tsx'),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        components_button = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        input = __webpack_require__('./design-system/components/input.tsx'),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_2kzrdl0xzm() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/textarea.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'b0b2294df9264a12294c29e187b99f4e6e3929c8' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/textarea.tsx',
            statementMap: {
              0: {
                start: { line: 4, column: 31 },
                end: { line: 10, column: 2 },
              },
              1: { start: { line: 5, column: 4 }, end: { line: 9, column: 7 } },
              2: {
                start: { line: 11, column: 0 },
                end: { line: 11, column: 34 },
              },
              3: {
                start: { line: 13, column: 0 },
                end: { line: 17, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 4, column: 48 },
                  end: { line: 4, column: 49 },
                },
                loc: {
                  start: { line: 4, column: 80 },
                  end: { line: 10, column: 1 },
                },
                line: 4,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0 },
            f: { 0: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/components/textarea.tsx',
              ],
              sourcesContent: [
                "import * as React from 'react'\nimport { cn } from '@/lib/utils'\n\nexport interface TextareaProps\n  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}\n\nconst Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(\n  ({ className, ...props }, ref) => {\n    return (\n      <textarea\n        className={cn(\n          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nTextarea.displayName = 'Textarea'\n\nexport { Textarea }\n",
              ],
              names: [],
              mappings:
                ';AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAK/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAChC,CAAC,AADgC,CAC/B,AADgC,CAC/B,AADgC,CAAC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CAAC,AADgC,CAAC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CAAC,AADgC,CAAC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CADiC,AAChC,CAAC,AADgC,CAAC;IAEjE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACtS,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACP,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGf;AAEF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAEhC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'b0b2294df9264a12294c29e187b99f4e6e3929c8',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2kzrdl0xzm = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2kzrdl0xzm()
      const Textarea =
        (cov_2kzrdl0xzm().s[0]++,
        react.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2kzrdl0xzm().f[0]++,
            cov_2kzrdl0xzm().s[1]++,
            (0, jsx_runtime.jsx)('textarea', {
              className: (0, utils.cn)(
                'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
              ),
              ref,
              ...props,
            })
          )
        ))
      ;(cov_2kzrdl0xzm().s[2]++,
        (Textarea.displayName = 'Textarea'),
        cov_2kzrdl0xzm().s[3]++,
        (Textarea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Textarea',
        }))
      var console = __webpack_require__(
        '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
      )
      const modal_stories = {
          title: 'Design System/Components/Modal',
          component: modal.aF,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            size: {
              control: { type: 'select' },
              options: ['sm', 'md', 'lg', 'xl', 'full'],
            },
            position: {
              control: { type: 'select' },
              options: ['center', 'top', 'bottom'],
            },
            animation: {
              control: { type: 'select' },
              options: ['fade', 'slide', 'scale', 'drawer'],
            },
            closeOnOverlayClick: { control: { type: 'boolean' } },
            closeOnEscape: { control: { type: 'boolean' } },
            showCloseButton: { control: { type: 'boolean' } },
            preventScroll: { control: { type: 'boolean' } },
            blur: { control: { type: 'boolean' } },
          },
        },
        Default = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  children: [
                    (0, jsx_runtime.jsxs)(modal.rQ, {
                      children: [
                        (0, jsx_runtime.jsx)(modal.wt, {
                          children: 'Default Modal',
                        }),
                        (0, jsx_runtime.jsx)(modal.mw, {
                          children:
                            'This is a default modal with standard configuration',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(modal.jl, {
                      children: [
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: 'secondary',
                          onClick: () => setOpen(!1),
                          children: 'Cancel',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setOpen(!1),
                          children: 'Save',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              openButton = canvas.getByRole('button', { name: 'Open Modal' })
            ;(await dist.Q4.click(openButton),
              await (0, dist.E3)(
                canvas.getByText('Default Modal')
              ).toBeVisible())
            const closeButton = canvas.getByRole('button', { name: 'Cancel' })
            await dist.Q4.click(closeButton)
          },
        },
        Sizes = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [size, setSize] = (0, react.useState)('md'),
              [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setSize('sm'), setOpen(!0))
                      },
                      children: 'Small',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setSize('md'), setOpen(!0))
                      },
                      children: 'Medium',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setSize('lg'), setOpen(!0))
                      },
                      children: 'Large',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setSize('xl'), setOpen(!0))
                      },
                      children: 'Extra Large',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setSize('full'), setOpen(!0))
                      },
                      children: 'Full',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  size,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsxs)(modal.wt, {
                        children: [size.toUpperCase(), ' Modal'],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsxs)('p', {
                        children: [
                          'This modal is using the ',
                          size,
                          ' size variant.',
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        Positions = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [position, setPosition] = (0, react.useState)('center'),
              [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setPosition('center'), setOpen(!0))
                      },
                      children: 'Center',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setPosition('top'), setOpen(!0))
                      },
                      children: 'Top',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setPosition('bottom'), setOpen(!0))
                      },
                      children: 'Bottom',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  position,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsxs)(modal.wt, {
                        children: [
                          position.charAt(0).toUpperCase() + position.slice(1),
                          ' Position',
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsxs)('p', {
                        children: [
                          'This modal is positioned at the ',
                          position,
                          '.',
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        Animations = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [animation, setAnimation] = (0, react.useState)('scale'),
              [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setAnimation('fade'), setOpen(!0))
                      },
                      children: 'Fade',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setAnimation('slide'), setOpen(!0))
                      },
                      children: 'Slide',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setAnimation('scale'), setOpen(!0))
                      },
                      children: 'Scale',
                    }),
                    (0, jsx_runtime.jsx)(components_button.$, {
                      size: 'sm',
                      onClick: () => {
                        ;(setAnimation('drawer'), setOpen(!0))
                      },
                      children: 'Drawer',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  animation,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsxs)(modal.wt, {
                        children: [
                          animation.charAt(0).toUpperCase() +
                            animation.slice(1),
                          ' Animation',
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsxs)('p', {
                        children: [
                          'This modal uses the ',
                          animation,
                          ' animation.',
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        FormModal = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Form Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  size: 'lg',
                  children: [
                    (0, jsx_runtime.jsxs)(modal.rQ, {
                      children: [
                        (0, jsx_runtime.jsx)(modal.wt, {
                          children: 'Create New Project',
                        }),
                        (0, jsx_runtime.jsx)(modal.mw, {
                          children:
                            'Fill in the details below to create a new project',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-4',
                        children: [
                          (0, jsx_runtime.jsxs)('div', {
                            children: [
                              (0, jsx_runtime.jsx)('label', {
                                className: 'text-sm font-medium',
                                children: 'Project Name',
                              }),
                              (0, jsx_runtime.jsx)(input.pd, {
                                placeholder: 'Enter project name',
                                className: 'mt-1',
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            children: [
                              (0, jsx_runtime.jsx)('label', {
                                className: 'text-sm font-medium',
                                children: 'Description',
                              }),
                              (0, jsx_runtime.jsx)(Textarea, {
                                placeholder: 'Enter project description',
                                className: 'mt-1',
                                rows: 3,
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            children: [
                              (0, jsx_runtime.jsx)('label', {
                                className: 'text-sm font-medium',
                                children: 'Repository URL',
                              }),
                              (0, jsx_runtime.jsx)(input.pd, {
                                placeholder: 'https://github.com/...',
                                className: 'mt-1',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(modal.jl, {
                      children: [
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: 'secondary',
                          onClick: () => setOpen(!1),
                          children: 'Cancel',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setOpen(!1),
                          children: 'Create Project',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
        },
        ScrollableContent = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Scrollable Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  size: 'lg',
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'Terms of Service',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      className: 'max-h-[400px]',
                      children: Array.from({ length: 20 }, (_, i) =>
                        (0, jsx_runtime.jsx)(
                          'p',
                          {
                            className: 'mb-4',
                            children:
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                          },
                          i
                        )
                      ),
                    }),
                    (0, jsx_runtime.jsxs)(modal.jl, {
                      children: [
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: 'secondary',
                          onClick: () => setOpen(!1),
                          children: 'Decline',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setOpen(!1),
                          children: 'Accept',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
        },
        NoCloseButton = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  showCloseButton: !1,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'No Close Button',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          "This modal doesn't have a close button. Use the buttons below or press Escape.",
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        NoOverlayClick = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  closeOnOverlayClick: !1,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'Click Outside Disabled',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          "Clicking outside this modal won't close it. Use the close button or press Escape.",
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        NoEscapeKey = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  closeOnEscape: !1,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'Escape Key Disabled',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          "Pressing Escape won't close this modal. Use the close button.",
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        NoBlur = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  blur: !1,
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'No Blur Effect',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          "The overlay behind this modal doesn't have a blur effect.",
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        ConfirmationModal = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Delete Item',
                }),
                (0, jsx_runtime.jsx)(modal.uo, {
                  open,
                  onClose: () => setOpen(!1),
                  onConfirm: () => {
                    ;(console.info('Item deleted'), setOpen(!1))
                  },
                  title: 'Delete Item',
                  description:
                    'Are you sure you want to delete this item? This action cannot be undone.',
                  confirmText: 'Delete',
                  cancelText: 'Cancel',
                  variant: 'destructive',
                }),
              ],
            })
          },
        },
        ConfirmationModalLoading = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1),
              [loading, setLoading] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Save Changes',
                }),
                (0, jsx_runtime.jsx)(modal.uo, {
                  open,
                  onClose: () => !loading && setOpen(!1),
                  onConfirm: () => {
                    ;(setLoading(!0),
                      setTimeout(() => {
                        ;(setLoading(!1), setOpen(!1))
                      }, 2e3))
                  },
                  title: 'Save Changes',
                  description: 'Do you want to save your changes?',
                  confirmText: 'Save',
                  cancelText: 'Cancel',
                  loading,
                }),
              ],
            })
          },
        },
        NestedModals = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [firstOpen, setFirstOpen] = (0, react.useState)(!1),
              [secondOpen, setSecondOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setFirstOpen(!0),
                  children: 'Open First Modal',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open: firstOpen,
                  onClose: () => setFirstOpen(!1),
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'First Modal',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          'This is the first modal. Click below to open another.',
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(modal.jl, {
                      children: [
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: 'secondary',
                          onClick: () => setSecondOpen(!0),
                          children: 'Open Second Modal',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setFirstOpen(!1),
                          children: 'Close',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open: secondOpen,
                  onClose: () => setSecondOpen(!1),
                  size: 'sm',
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'Second Modal',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsx)('p', {
                        children:
                          'This modal is stacked on top of the first one.',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.jl, {
                      children: (0, jsx_runtime.jsx)(components_button.$, {
                        onClick: () => setSecondOpen(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
              ],
            })
          },
        },
        ImageModal = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'View Image',
                }),
                (0, jsx_runtime.jsx)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  size: 'xl',
                  children: (0, jsx_runtime.jsx)(modal.cw, {
                    className: 'p-0',
                    children: (0, jsx_runtime.jsx)(next_image.A, {
                      src: 'https://via.placeholder.com/800x600',
                      alt: 'Placeholder',
                      width: 800,
                      height: 600,
                      className: 'w-full h-auto',
                    }),
                  }),
                }),
              ],
            })
          },
        },
        DrawerExample = {
          args: { open: !1, onClose: () => {}, children: null },
          render: () => {
            const [open, setOpen] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_button.$, {
                  onClick: () => setOpen(!0),
                  children: 'Open Drawer',
                }),
                (0, jsx_runtime.jsxs)(modal.aF, {
                  open,
                  onClose: () => setOpen(!1),
                  animation: 'drawer',
                  size: 'sm',
                  children: [
                    (0, jsx_runtime.jsx)(modal.rQ, {
                      children: (0, jsx_runtime.jsx)(modal.wt, {
                        children: 'Settings',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(modal.cw, {
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'space-y-4',
                        children: [
                          (0, jsx_runtime.jsxs)('div', {
                            children: [
                              (0, jsx_runtime.jsx)('h3', {
                                className: 'text-sm font-medium mb-2',
                                children: 'Notifications',
                              }),
                              (0, jsx_runtime.jsxs)('label', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, jsx_runtime.jsx)('input', {
                                    type: 'checkbox',
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children: 'Email notifications',
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsxs)('label', {
                                className: 'flex items-center gap-2 mt-2',
                                children: [
                                  (0, jsx_runtime.jsx)('input', {
                                    type: 'checkbox',
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children: 'Push notifications',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            children: [
                              (0, jsx_runtime.jsx)('h3', {
                                className: 'text-sm font-medium mb-2',
                                children: 'Privacy',
                              }),
                              (0, jsx_runtime.jsxs)('label', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, jsx_runtime.jsx)('input', {
                                    type: 'checkbox',
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children: 'Make profile public',
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsxs)('label', {
                                className: 'flex items-center gap-2 mt-2',
                                children: [
                                  (0, jsx_runtime.jsx)('input', {
                                    type: 'checkbox',
                                  }),
                                  (0, jsx_runtime.jsx)('span', {
                                    children: 'Show activity status',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(modal.jl, {
                      children: [
                        (0, jsx_runtime.jsx)(components_button.$, {
                          variant: 'secondary',
                          onClick: () => setOpen(!1),
                          children: 'Cancel',
                        }),
                        (0, jsx_runtime.jsx)(components_button.$, {
                          onClick: () => setOpen(!1),
                          children: 'Save',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
        },
        __namedExportsOrder = [
          'Default',
          'Sizes',
          'Positions',
          'Animations',
          'FormModal',
          'ScrollableContent',
          'NoCloseButton',
          'NoOverlayClick',
          'NoEscapeKey',
          'NoBlur',
          'ConfirmationModal',
          'ConfirmationModalLoading',
          'NestedModals',
          'ImageModal',
          'DrawerExample',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)}>\n          <ModalHeader>\n            <ModalTitle>Default Modal</ModalTitle>\n            <ModalDescription>\n              This is a default modal with standard configuration\n            </ModalDescription>\n          </ModalHeader>\n          <ModalBody>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button variant='secondary' onClick={() => setOpen(false)}>\n              Cancel\n            </Button>\n            <Button onClick={() => setOpen(false)}>Save</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open modal\n    const openButton = canvas.getByRole('button', {\n      name: 'Open Modal'\n    });\n    await userEvent.click(openButton);\n\n    // Check modal is visible\n    await expect(canvas.getByText('Default Modal')).toBeVisible();\n\n    // Close modal\n    const closeButton = canvas.getByRole('button', {\n      name: 'Cancel'\n    });\n    await userEvent.click(closeButton);\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');\n    const [open, setOpen] = useState(false);\n    return <>\n        <div className='flex gap-2'>\n          <Button size='sm' onClick={() => {\n          setSize('sm');\n          setOpen(true);\n        }}>\n            Small\n          </Button>\n          <Button size='sm' onClick={() => {\n          setSize('md');\n          setOpen(true);\n        }}>\n            Medium\n          </Button>\n          <Button size='sm' onClick={() => {\n          setSize('lg');\n          setOpen(true);\n        }}>\n            Large\n          </Button>\n          <Button size='sm' onClick={() => {\n          setSize('xl');\n          setOpen(true);\n        }}>\n            Extra Large\n          </Button>\n          <Button size='sm' onClick={() => {\n          setSize('full');\n          setOpen(true);\n        }}>\n            Full\n          </Button>\n        </div>\n\n        <Modal open={open} onClose={() => setOpen(false)} size={size}>\n          <ModalHeader>\n            <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>This modal is using the {size} size variant.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Positions.parameters = {
          ...Positions.parameters,
          docs: {
            ...Positions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [position, setPosition] = useState<'center' | 'top' | 'bottom'>('center');\n    const [open, setOpen] = useState(false);\n    return <>\n        <div className='flex gap-2'>\n          <Button size='sm' onClick={() => {\n          setPosition('center');\n          setOpen(true);\n        }}>\n            Center\n          </Button>\n          <Button size='sm' onClick={() => {\n          setPosition('top');\n          setOpen(true);\n        }}>\n            Top\n          </Button>\n          <Button size='sm' onClick={() => {\n          setPosition('bottom');\n          setOpen(true);\n        }}>\n            Bottom\n          </Button>\n        </div>\n\n        <Modal open={open} onClose={() => setOpen(false)} position={position}>\n          <ModalHeader>\n            <ModalTitle>\n              {position.charAt(0).toUpperCase() + position.slice(1)} Position\n            </ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>This modal is positioned at the {position}.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...Positions.parameters?.docs?.source,
            },
          },
        }),
        (Animations.parameters = {
          ...Animations.parameters,
          docs: {
            ...Animations.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [animation, setAnimation] = useState<'fade' | 'slide' | 'scale' | 'drawer'>('scale');\n    const [open, setOpen] = useState(false);\n    return <>\n        <div className='flex gap-2'>\n          <Button size='sm' onClick={() => {\n          setAnimation('fade');\n          setOpen(true);\n        }}>\n            Fade\n          </Button>\n          <Button size='sm' onClick={() => {\n          setAnimation('slide');\n          setOpen(true);\n        }}>\n            Slide\n          </Button>\n          <Button size='sm' onClick={() => {\n          setAnimation('scale');\n          setOpen(true);\n        }}>\n            Scale\n          </Button>\n          <Button size='sm' onClick={() => {\n          setAnimation('drawer');\n          setOpen(true);\n        }}>\n            Drawer\n          </Button>\n        </div>\n\n        <Modal open={open} onClose={() => setOpen(false)} animation={animation}>\n          <ModalHeader>\n            <ModalTitle>\n              {animation.charAt(0).toUpperCase() + animation.slice(1)} Animation\n            </ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>This modal uses the {animation} animation.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...Animations.parameters?.docs?.source,
            },
          },
        }),
        (FormModal.parameters = {
          ...FormModal.parameters,
          docs: {
            ...FormModal.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} size='lg'>\n          <ModalHeader>\n            <ModalTitle>Create New Project</ModalTitle>\n            <ModalDescription>\n              Fill in the details below to create a new project\n            </ModalDescription>\n          </ModalHeader>\n          <ModalBody>\n            <div className='space-y-4'>\n              <div>\n                <label className='text-sm font-medium'>Project Name</label>\n                <Input placeholder='Enter project name' className='mt-1' />\n              </div>\n              <div>\n                <label className='text-sm font-medium'>Description</label>\n                <Textarea placeholder='Enter project description' className='mt-1' rows={3} />\n              </div>\n              <div>\n                <label className='text-sm font-medium'>Repository URL</label>\n                <Input placeholder='https://github.com/...' className='mt-1' />\n              </div>\n            </div>\n          </ModalBody>\n          <ModalFooter>\n            <Button variant='secondary' onClick={() => setOpen(false)}>\n              Cancel\n            </Button>\n            <Button onClick={() => setOpen(false)}>Create Project</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...FormModal.parameters?.docs?.source,
            },
          },
        }),
        (ScrollableContent.parameters = {
          ...ScrollableContent.parameters,
          docs: {
            ...ScrollableContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Scrollable Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} size='lg'>\n          <ModalHeader>\n            <ModalTitle>Terms of Service</ModalTitle>\n          </ModalHeader>\n          <ModalBody className='max-h-[400px]'>\n            {Array.from({\n            length: 20\n          }, (_, i) => <p key={i} className='mb-4'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n              </p>)}\n          </ModalBody>\n          <ModalFooter>\n            <Button variant='secondary' onClick={() => setOpen(false)}>\n              Decline\n            </Button>\n            <Button onClick={() => setOpen(false)}>Accept</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...ScrollableContent.parameters?.docs?.source,
            },
          },
        }),
        (NoCloseButton.parameters = {
          ...NoCloseButton.parameters,
          docs: {
            ...NoCloseButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} showCloseButton={false}>\n          <ModalHeader>\n            <ModalTitle>No Close Button</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>\n              This modal doesn't have a close button. Use the buttons below or\n              press Escape.\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...NoCloseButton.parameters?.docs?.source,
            },
          },
        }),
        (NoOverlayClick.parameters = {
          ...NoOverlayClick.parameters,
          docs: {
            ...NoOverlayClick.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} closeOnOverlayClick={false}>\n          <ModalHeader>\n            <ModalTitle>Click Outside Disabled</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>\n              Clicking outside this modal won't close it. Use the close button\n              or press Escape.\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...NoOverlayClick.parameters?.docs?.source,
            },
          },
        }),
        (NoEscapeKey.parameters = {
          ...NoEscapeKey.parameters,
          docs: {
            ...NoEscapeKey.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} closeOnEscape={false}>\n          <ModalHeader>\n            <ModalTitle>Escape Key Disabled</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>Pressing Escape won't close this modal. Use the close button.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...NoEscapeKey.parameters?.docs?.source,
            },
          },
        }),
        (NoBlur.parameters = {
          ...NoBlur.parameters,
          docs: {
            ...NoBlur.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} onClose={() => setOpen(false)} blur={false}>\n          <ModalHeader>\n            <ModalTitle>No Blur Effect</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>The overlay behind this modal doesn't have a blur effect.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...NoBlur.parameters?.docs?.source,
            },
          },
        }),
        (ConfirmationModal.parameters = {
          ...ConfirmationModal.parameters,
          docs: {
            ...ConfirmationModal.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Delete Item</Button>\n        <ConfirmModal open={open} onClose={() => setOpen(false)} onConfirm={() => {\n        console.info('Item deleted');\n        setOpen(false);\n      }} title='Delete Item' description='Are you sure you want to delete this item? This action cannot be undone.' confirmText='Delete' cancelText='Cancel' variant='destructive' />\n      </>;\n  }\n}",
              ...ConfirmationModal.parameters?.docs?.source,
            },
          },
        }),
        (ConfirmationModalLoading.parameters = {
          ...ConfirmationModalLoading.parameters,
          docs: {
            ...ConfirmationModalLoading.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    const [loading, setLoading] = useState(false);\n    const handleConfirm = () => {\n      setLoading(true);\n      setTimeout(() => {\n        setLoading(false);\n        setOpen(false);\n      }, 2000);\n    };\n    return <>\n        <Button onClick={() => setOpen(true)}>Save Changes</Button>\n        <ConfirmModal open={open} onClose={() => !loading && setOpen(false)} onConfirm={handleConfirm} title='Save Changes' description='Do you want to save your changes?' confirmText='Save' cancelText='Cancel' loading={loading} />\n      </>;\n  }\n}",
              ...ConfirmationModalLoading.parameters?.docs?.source,
            },
          },
        }),
        (NestedModals.parameters = {
          ...NestedModals.parameters,
          docs: {
            ...NestedModals.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [firstOpen, setFirstOpen] = useState(false);\n    const [secondOpen, setSecondOpen] = useState(false);\n    return <>\n        <Button onClick={() => setFirstOpen(true)}>Open First Modal</Button>\n\n        <Modal open={firstOpen} onClose={() => setFirstOpen(false)}>\n          <ModalHeader>\n            <ModalTitle>First Modal</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>This is the first modal. Click below to open another.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button variant='secondary' onClick={() => setSecondOpen(true)}>\n              Open Second Modal\n            </Button>\n            <Button onClick={() => setFirstOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n\n        <Modal open={secondOpen} onClose={() => setSecondOpen(false)} size='sm'>\n          <ModalHeader>\n            <ModalTitle>Second Modal</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <p>This modal is stacked on top of the first one.</p>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={() => setSecondOpen(false)}>Close</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...NestedModals.parameters?.docs?.source,
            },
          },
        }),
        (ImageModal.parameters = {
          ...ImageModal.parameters,
          docs: {
            ...ImageModal.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>View Image</Button>\n        <Modal open={open} onClose={() => setOpen(false)} size='xl'>\n          <ModalBody className='p-0'>\n            <Image src='https://via.placeholder.com/800x600' alt='Placeholder' width={800} height={600} className='w-full h-auto' />\n          </ModalBody>\n        </Modal>\n      </>;\n  }\n}",
              ...ImageModal.parameters?.docs?.source,
            },
          },
        }),
        (DrawerExample.parameters = {
          ...DrawerExample.parameters,
          docs: {
            ...DrawerExample.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    open: false,\n    onClose: () => {},\n    children: null\n  },\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Drawer</Button>\n        <Modal open={open} onClose={() => setOpen(false)} animation='drawer' size='sm'>\n          <ModalHeader>\n            <ModalTitle>Settings</ModalTitle>\n          </ModalHeader>\n          <ModalBody>\n            <div className='space-y-4'>\n              <div>\n                <h3 className='text-sm font-medium mb-2'>Notifications</h3>\n                <label className='flex items-center gap-2'>\n                  <input type='checkbox' />\n                  <span>Email notifications</span>\n                </label>\n                <label className='flex items-center gap-2 mt-2'>\n                  <input type='checkbox' />\n                  <span>Push notifications</span>\n                </label>\n              </div>\n              <div>\n                <h3 className='text-sm font-medium mb-2'>Privacy</h3>\n                <label className='flex items-center gap-2'>\n                  <input type='checkbox' />\n                  <span>Make profile public</span>\n                </label>\n                <label className='flex items-center gap-2 mt-2'>\n                  <input type='checkbox' />\n                  <span>Show activity status</span>\n                </label>\n              </div>\n            </div>\n          </ModalBody>\n          <ModalFooter>\n            <Button variant='secondary' onClick={() => setOpen(false)}>\n              Cancel\n            </Button>\n            <Button onClick={() => setOpen(false)}>Save</Button>\n          </ModalFooter>\n        </Modal>\n      </>;\n  }\n}",
              ...DrawerExample.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
