/*! For license information please see 8294.f6086339.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [8294],
  {
    '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs':
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
    '../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.14_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react_ebf14a846abc2fe74b19ca0ca406c133/node_modules/@radix-ui/react-dialog/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Cf: () => DialogContent,
          L3: () => DialogTitle,
          UC: () => Content,
          VY: () => Description,
          ZL: () => Portal,
          bL: () => Root,
          bm: () => Close,
          hE: () => Title,
          hJ: () => Overlay,
          l9: () => Trigger,
          lG: () => Dialog,
          rr: () => DialogDescription,
          zM: () => DialogTrigger,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
          ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.10_@types+react-dom@19.1.6_@types+react@19.1.8__@_a1d343a3b3ef56a897be7e3ac188901b/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs'
            ),
          _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+r_0bdc87f04c4d759e2025cd48d0340f12/node_modules/@radix-ui/react-focus-scope/dist/index.mjs'
            ),
          _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_daa6284eb61b5d92679ce5e11f38cd01/node_modules/@radix-ui/react-portal/dist/index.mjs'
            ),
          _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_949a0df3eae86665e086aa01aee25ebf/node_modules/@radix-ui/react-presence/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs'
            ),
          react_remove_scroll__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              '../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.8_react@19.1.0/node_modules/react-remove-scroll/dist/es2015/Combination.js'
            ),
          aria_hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            '../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js'
          ),
          _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          [createDialogContext, createDialogScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Dialog'),
          [DialogProvider, useDialogContext] = createDialogContext('Dialog'),
          Dialog = (props) => {
            const {
                __scopeDialog,
                children,
                open: openProp,
                defaultOpen,
                onOpenChange,
                modal = !0,
              } = props,
              triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              [open, setOpen] = (0,
              _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.i)(
                {
                  prop: openProp,
                  defaultProp: defaultOpen ?? !1,
                  onChange: onOpenChange,
                  caller: 'Dialog',
                }
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              DialogProvider,
              {
                scope: __scopeDialog,
                triggerRef,
                contentRef,
                contentId: (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),
                titleId: (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),
                descriptionId: (0,
                _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),
                open,
                onOpenChange: setOpen,
                onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                  () => setOpen((prevOpen) => !prevOpen),
                  [setOpen]
                ),
                modal,
                children,
              }
            )
          }
        Dialog.displayName = 'Dialog'
        var DialogTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeDialog, ...triggerProps } = props,
              context = useDialogContext('DialogTrigger', __scopeDialog),
              composedTriggerRef = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(
                forwardedRef,
                context.triggerRef
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.button,
              {
                type: 'button',
                'aria-haspopup': 'dialog',
                'aria-expanded': context.open,
                'aria-controls': context.contentId,
                'data-state': getState(context.open),
                ...triggerProps,
                ref: composedTriggerRef,
                onClick: (0,
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(
                  props.onClick,
                  context.onOpenToggle
                ),
              }
            )
          }
        )
        DialogTrigger.displayName = 'DialogTrigger'
        var [PortalProvider, usePortalContext] = createDialogContext(
            'DialogPortal',
            { forceMount: void 0 }
          ),
          DialogPortal = (props) => {
            const { __scopeDialog, forceMount, children, container } = props,
              context = useDialogContext('DialogPortal', __scopeDialog)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              PortalProvider,
              {
                scope: __scopeDialog,
                forceMount,
                children: react__WEBPACK_IMPORTED_MODULE_0__.Children.map(
                  children,
                  (child) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,
                      {
                        present: forceMount || context.open,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.Z,
                          { asChild: !0, container, children: child }
                        ),
                      }
                    )
                ),
              }
            )
          }
        DialogPortal.displayName = 'DialogPortal'
        var DialogOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const portalContext = usePortalContext(
                'DialogOverlay',
                props.__scopeDialog
              ),
              { forceMount = portalContext.forceMount, ...overlayProps } =
                props,
              context = useDialogContext('DialogOverlay', props.__scopeDialog)
            return context.modal
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,
                  {
                    present: forceMount || context.open,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      DialogOverlayImpl,
                      { ...overlayProps, ref: forwardedRef }
                    ),
                  }
                )
              : null
          }
        )
        DialogOverlay.displayName = 'DialogOverlay'
        var Slot = (0, _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_10__.TL)(
            'DialogOverlay.RemoveScroll'
          ),
          DialogOverlayImpl = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { __scopeDialog, ...overlayProps } = props,
                context = useDialogContext('DialogOverlay', __scopeDialog)
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                react_remove_scroll__WEBPACK_IMPORTED_MODULE_11__.A,
                {
                  as: Slot,
                  allowPinchZoom: !0,
                  shards: [context.contentRef],
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG
                      .div,
                    {
                      'data-state': getState(context.open),
                      ...overlayProps,
                      ref: forwardedRef,
                      style: { pointerEvents: 'auto', ...overlayProps.style },
                    }
                  ),
                }
              )
            }
          ),
          DialogContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const portalContext = usePortalContext(
                  'DialogContent',
                  props.__scopeDialog
                ),
                { forceMount = portalContext.forceMount, ...contentProps } =
                  props,
                context = useDialogContext('DialogContent', props.__scopeDialog)
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,
                {
                  present: forceMount || context.open,
                  children: context.modal
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        DialogContentModal,
                        { ...contentProps, ref: forwardedRef }
                      )
                    : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        DialogContentNonModal,
                        { ...contentProps, ref: forwardedRef }
                      ),
                }
              )
            }
          )
        DialogContent.displayName = 'DialogContent'
        var DialogContentModal = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const context = useDialogContext(
                  'DialogContent',
                  props.__scopeDialog
                ),
                contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(
                  forwardedRef,
                  context.contentRef,
                  contentRef
                )
              return (
                react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                  const content = contentRef.current
                  if (content)
                    return (0, aria_hidden__WEBPACK_IMPORTED_MODULE_12__.Eq)(
                      content
                    )
                }, []),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  DialogContentImpl,
                  {
                    ...props,
                    ref: composedRefs,
                    trapFocus: context.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(
                      props.onCloseAutoFocus,
                      (event) => {
                        ;(event.preventDefault(),
                          context.triggerRef.current?.focus())
                      }
                    ),
                    onPointerDownOutside: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(
                      props.onPointerDownOutside,
                      (event) => {
                        const originalEvent = event.detail.originalEvent,
                          ctrlLeftClick =
                            0 === originalEvent.button &&
                            !0 === originalEvent.ctrlKey
                        ;(2 === originalEvent.button || ctrlLeftClick) &&
                          event.preventDefault()
                      }
                    ),
                    onFocusOutside: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(
                      props.onFocusOutside,
                      (event) => event.preventDefault()
                    ),
                  }
                )
              )
            }
          ),
          DialogContentNonModal = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const context = useDialogContext(
                  'DialogContent',
                  props.__scopeDialog
                ),
                hasInteractedOutsideRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                hasPointerDownOutsideRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                DialogContentImpl,
                {
                  ...props,
                  ref: forwardedRef,
                  trapFocus: !1,
                  disableOutsidePointerEvents: !1,
                  onCloseAutoFocus: (event) => {
                    ;(props.onCloseAutoFocus?.(event),
                      event.defaultPrevented ||
                        (hasInteractedOutsideRef.current ||
                          context.triggerRef.current?.focus(),
                        event.preventDefault()),
                      (hasInteractedOutsideRef.current = !1),
                      (hasPointerDownOutsideRef.current = !1))
                  },
                  onInteractOutside: (event) => {
                    ;(props.onInteractOutside?.(event),
                      event.defaultPrevented ||
                        ((hasInteractedOutsideRef.current = !0),
                        'pointerdown' === event.detail.originalEvent.type &&
                          (hasPointerDownOutsideRef.current = !0)))
                    const target = event.target,
                      targetIsTrigger =
                        context.triggerRef.current?.contains(target)
                    ;(targetIsTrigger && event.preventDefault(),
                      'focusin' === event.detail.originalEvent.type &&
                        hasPointerDownOutsideRef.current &&
                        event.preventDefault())
                  },
                }
              )
            }
          ),
          DialogContentImpl = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeDialog,
                  trapFocus,
                  onOpenAutoFocus,
                  onCloseAutoFocus,
                  ...contentProps
                } = props,
                context = useDialogContext('DialogContent', __scopeDialog),
                contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(
                  forwardedRef,
                  contentRef
                )
              return (
                (0,
                _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.Oh)(),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.n,
                        {
                          asChild: !0,
                          loop: !0,
                          trapped: trapFocus,
                          onMountAutoFocus: onOpenAutoFocus,
                          onUnmountAutoFocus: onCloseAutoFocus,
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                            _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.qW,
                            {
                              role: 'dialog',
                              id: context.contentId,
                              'aria-describedby': context.descriptionId,
                              'aria-labelledby': context.titleId,
                              'data-state': getState(context.open),
                              ...contentProps,
                              ref: composedRefs,
                              onDismiss: () => context.onOpenChange(!1),
                            }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                              TitleWarning,
                              { titleId: context.titleId }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                              DescriptionWarning,
                              {
                                contentRef,
                                descriptionId: context.descriptionId,
                              }
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                )
              )
            }
          ),
          DialogTitle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { __scopeDialog, ...titleProps } = props,
                context = useDialogContext('DialogTitle', __scopeDialog)
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.h2,
                { id: context.titleId, ...titleProps, ref: forwardedRef }
              )
            }
          )
        DialogTitle.displayName = 'DialogTitle'
        var DialogDescription = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeDialog, ...descriptionProps } = props,
              context = useDialogContext('DialogDescription', __scopeDialog)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.p,
              {
                id: context.descriptionId,
                ...descriptionProps,
                ref: forwardedRef,
              }
            )
          }
        )
        DialogDescription.displayName = 'DialogDescription'
        var DialogClose = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeDialog, ...closeProps } = props,
              context = useDialogContext('DialogClose', __scopeDialog)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.button,
              {
                type: 'button',
                ...closeProps,
                ref: forwardedRef,
                onClick: (0,
                _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(
                  props.onClick,
                  () => context.onOpenChange(!1)
                ),
              }
            )
          }
        )
        function getState(open) {
          return open ? 'open' : 'closed'
        }
        DialogClose.displayName = 'DialogClose'
        var [WarningProvider, useWarningContext] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.q)(
            'DialogTitleWarning',
            {
              contentName: 'DialogContent',
              titleName: 'DialogTitle',
              docsSlug: 'dialog',
            }
          ),
          TitleWarning = ({ titleId }) => {
            const titleWarningContext = useWarningContext('DialogTitleWarning'),
              MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                if (titleId) {
                  document.getElementById(titleId) || console.error(MESSAGE)
                }
              }, [MESSAGE, titleId]),
              null
            )
          },
          DescriptionWarning = ({ contentRef, descriptionId }) => {
            const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext('DialogDescriptionWarning').contentName}}.`
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const describedById =
                  contentRef.current?.getAttribute('aria-describedby')
                if (descriptionId && describedById) {
                  document.getElementById(descriptionId) ||
                    console.warn(MESSAGE)
                }
              }, [MESSAGE, contentRef, descriptionId]),
              null
            )
          },
          Root = Dialog,
          Trigger = DialogTrigger,
          Portal = DialogPortal,
          Overlay = DialogOverlay,
          Content = DialogContent,
          Title = DialogTitle,
          Description = DialogDescription,
          Close = DialogClose
      },
    '../../node_modules/.pnpm/@radix-ui+react-label@2.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@1_a268e9df9c8ef9f1b00a2ad699b30e62/node_modules/@radix-ui/react-label/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { J: () => Label })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_997b35f2e2aa9d3174fc03a0f79e437b/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Label = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.label,
                {
                  ...props,
                  ref: forwardedRef,
                  onMouseDown: (event) => {
                    event.target.closest('button, input, select, textarea') ||
                      (props.onMouseDown?.(event),
                      !event.defaultPrevented &&
                        event.detail > 1 &&
                        event.preventDefault())
                  },
                }
              )
          )
        Label.displayName = 'Label'
      },
    '../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_997b35f2e2aa9d3174fc03a0f79e437b/node_modules/@radix-ui/react-primitive/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          hO: () => dispatchDiscreteCustomEvent,
          sG: () => Primitive,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react-dom/index.js'
          ),
          _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Primitive = [
            'a',
            'button',
            'div',
            'form',
            'h2',
            'h3',
            'img',
            'input',
            'label',
            'li',
            'nav',
            'ol',
            'p',
            'span',
            'svg',
            'ul',
          ].reduce((primitive, node) => {
            const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              (props, forwardedRef) => {
                const { asChild, ...primitiveProps } = props,
                  Comp = asChild
                    ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX
                    : node
                return (
                  'undefined' != typeof window &&
                    (window[Symbol.for('radix-ui')] = !0),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Comp,
                    { ...primitiveProps, ref: forwardedRef }
                  )
                )
              }
            )
            return (
              (Node.displayName = `Primitive.${node}`),
              { ...primitive, [node]: Node }
            )
          }, {})
        function dispatchDiscreteCustomEvent(target, event) {
          target &&
            react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() =>
              target.dispatchEvent(event)
            )
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-radio-group@1.3.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+r_71b26ba52b90a380d291cbcc454c0e67/node_modules/@radix-ui/react-radio-group/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          CU: () => RadioGroupItem,
          z6: () => RadioGroup,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.10_@types+react-dom@19.1.6_@types+react@19.1.8__@types_7b46adce8be1bcd7dba6d0dca748f267/node_modules/@radix-ui/react-roving-focus/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs'
            ),
          _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
            ),
          _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs'
            ),
          _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_949a0df3eae86665e086aa01aee25ebf/node_modules/@radix-ui/react-presence/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          [createRadioContext, createRadioScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Radio'),
          [RadioProvider, useRadioContext] = createRadioContext('Radio'),
          Radio = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeRadio,
                  name,
                  checked = !1,
                  required,
                  disabled,
                  value = 'on',
                  onCheck,
                  form,
                  ...radioProps
                } = props,
                [button, setButton] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                  forwardedRef,
                  (node) => setButton(node)
                ),
                hasConsumerStoppedPropagationRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                isFormControl = !button || form || !!button.closest('form')
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                RadioProvider,
                {
                  scope: __scopeRadio,
                  checked,
                  disabled,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG
                        .button,
                      {
                        type: 'button',
                        role: 'radio',
                        'aria-checked': checked,
                        'data-state': getState(checked),
                        'data-disabled': disabled ? '' : void 0,
                        disabled,
                        value,
                        ...radioProps,
                        ref: composedRefs,
                        onClick: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.m)(
                          props.onClick,
                          (event) => {
                            ;(checked || onCheck?.(),
                              isFormControl &&
                                ((hasConsumerStoppedPropagationRef.current =
                                  event.isPropagationStopped()),
                                hasConsumerStoppedPropagationRef.current ||
                                  event.stopPropagation()))
                          }
                        ),
                      }
                    ),
                    isFormControl &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        RadioBubbleInput,
                        {
                          control: button,
                          bubbles: !hasConsumerStoppedPropagationRef.current,
                          name,
                          value,
                          checked,
                          required,
                          disabled,
                          form,
                          style: { transform: 'translateX(-100%)' },
                        }
                      ),
                  ],
                }
              )
            }
          )
        Radio.displayName = 'Radio'
        var RadioIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeRadio, forceMount, ...indicatorProps } = props,
              context = useRadioContext('RadioIndicator', __scopeRadio)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.C,
              {
                present: forceMount || context.checked,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG
                    .span,
                  {
                    'data-state': getState(context.checked),
                    'data-disabled': context.disabled ? '' : void 0,
                    ...indicatorProps,
                    ref: forwardedRef,
                  }
                ),
              }
            )
          }
        )
        RadioIndicator.displayName = 'RadioIndicator'
        var RadioBubbleInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (
            { __scopeRadio, control, checked, bubbles = !0, ...props },
            forwardedRef
          ) => {
            const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                ref,
                forwardedRef
              ),
              prevChecked = (0,
              _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.Z)(
                checked
              ),
              controlSize = (0,
              _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.X)(control)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const input = ref.current
                if (!input) return
                const inputProto = window.HTMLInputElement.prototype,
                  setChecked = Object.getOwnPropertyDescriptor(
                    inputProto,
                    'checked'
                  ).set
                if (prevChecked !== checked && setChecked) {
                  const event = new Event('click', { bubbles })
                  ;(setChecked.call(input, checked), input.dispatchEvent(event))
                }
              }, [prevChecked, checked, bubbles]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.input,
                {
                  type: 'radio',
                  'aria-hidden': !0,
                  defaultChecked: checked,
                  ...props,
                  tabIndex: -1,
                  ref: composedRefs,
                  style: {
                    ...props.style,
                    ...controlSize,
                    position: 'absolute',
                    pointerEvents: 'none',
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          }
        )
        function getState(checked) {
          return checked ? 'checked' : 'unchecked'
        }
        RadioBubbleInput.displayName = 'RadioBubbleInput'
        var ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
          [createRadioGroupContext, createRadioGroupScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(
            'RadioGroup',
            [
              _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.RG,
              createRadioScope,
            ]
          ),
          useRovingFocusGroupScope = (0,
          _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.RG)(),
          useRadioScope = createRadioScope(),
          [RadioGroupProvider, useRadioGroupContext] =
            createRadioGroupContext('RadioGroup'),
          RadioGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeRadioGroup,
                  name,
                  defaultValue,
                  value: valueProp,
                  required = !1,
                  disabled = !1,
                  orientation,
                  dir,
                  loop = !0,
                  onValueChange,
                  ...groupProps
                } = props,
                rovingFocusGroupScope =
                  useRovingFocusGroupScope(__scopeRadioGroup),
                direction = (0,
                _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__.jH)(
                  dir
                ),
                [value, setValue] = (0,
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__.i)(
                  {
                    prop: valueProp,
                    defaultProp: defaultValue ?? null,
                    onChange: onValueChange,
                    caller: 'RadioGroup',
                  }
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                RadioGroupProvider,
                {
                  scope: __scopeRadioGroup,
                  name,
                  required,
                  disabled,
                  value,
                  onValueChange: setValue,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.bL,
                    {
                      asChild: !0,
                      ...rovingFocusGroupScope,
                      orientation,
                      dir: direction,
                      loop,
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__
                          .sG.div,
                        {
                          role: 'radiogroup',
                          'aria-required': required,
                          'aria-orientation': orientation,
                          'data-disabled': disabled ? '' : void 0,
                          dir: direction,
                          ...groupProps,
                          ref: forwardedRef,
                        }
                      ),
                    }
                  ),
                }
              )
            }
          )
        RadioGroup.displayName = 'RadioGroup'
        var RadioGroupItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeRadioGroup, disabled, ...itemProps } = props,
              context = useRadioGroupContext(
                'RadioGroupItem',
                __scopeRadioGroup
              ),
              isDisabled = context.disabled || disabled,
              rovingFocusGroupScope =
                useRovingFocusGroupScope(__scopeRadioGroup),
              radioScope = useRadioScope(__scopeRadioGroup),
              ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                forwardedRef,
                ref
              ),
              checked = context.value === itemProps.value,
              isArrowKeyPressedRef =
                react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const handleKeyDown = (event) => {
                    ARROW_KEYS.includes(event.key) &&
                      (isArrowKeyPressedRef.current = !0)
                  },
                  handleKeyUp = () => (isArrowKeyPressedRef.current = !1)
                return (
                  document.addEventListener('keydown', handleKeyDown),
                  document.addEventListener('keyup', handleKeyUp),
                  () => {
                    ;(document.removeEventListener('keydown', handleKeyDown),
                      document.removeEventListener('keyup', handleKeyUp))
                  }
                )
              }, []),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__.q7,
                {
                  asChild: !0,
                  ...rovingFocusGroupScope,
                  focusable: !isDisabled,
                  active: checked,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Radio, {
                    disabled: isDisabled,
                    required: context.required,
                    checked,
                    ...radioScope,
                    ...itemProps,
                    name: context.name,
                    ref: composedRefs,
                    onCheck: () => context.onValueChange(itemProps.value),
                    onKeyDown: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.m)(
                      (event) => {
                        'Enter' === event.key && event.preventDefault()
                      }
                    ),
                    onFocus: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.m)(
                      itemProps.onFocus,
                      () => {
                        isArrowKeyPressedRef.current && ref.current?.click()
                      }
                    ),
                  }),
                }
              )
            )
          }
        )
        RadioGroupItem.displayName = 'RadioGroupItem'
        var RadioGroupIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeRadioGroup, ...indicatorProps } = props,
              radioScope = useRadioScope(__scopeRadioGroup)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              RadioIndicator,
              { ...radioScope, ...indicatorProps, ref: forwardedRef }
            )
          }
        )
        RadioGroupIndicator.displayName = 'RadioGroupIndicator'
      },
    '../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { DX: () => Slot })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const { children, ...slotProps } = props,
                childrenArray =
                  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),
                slottable = childrenArray.find(isSlottable)
              if (slottable) {
                const newElement = slottable.props.children,
                  newChildren = childrenArray.map((child) =>
                    child === slottable
                      ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
                          newElement
                        ) > 1
                        ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
                        : react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                              newElement
                            )
                          ? newElement.props.children
                          : null
                      : child
                  )
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  SlotClone,
                  {
                    ...slotProps,
                    ref: forwardedRef,
                    children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
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
        Slot.displayName = 'Slot'
        var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
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
              })(children)
              return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                ...mergeProps(slotProps, children.props),
                ref: forwardedRef
                  ? (0,
                    _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(
                      forwardedRef,
                      childrenRef
                    )
                  : childrenRef,
              })
            }
            return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) >
              1
              ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
              : null
          }
        )
        SlotClone.displayName = 'SlotClone'
        var Slottable = ({ children }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            { children }
          )
        function isSlottable(child) {
          return (
            react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) &&
            child.type === Slottable
          )
        }
        function mergeProps(slotProps, childProps) {
          const overrideProps = { ...childProps }
          for (const propName in childProps) {
            const slotPropValue = slotProps[propName],
              childPropValue = childProps[propName]
            ;/^on[A-Z]/.test(propName)
              ? slotPropValue && childPropValue
                ? (overrideProps[propName] = (...args) => {
                    ;(childPropValue(...args), slotPropValue(...args))
                  })
                : slotPropValue && (overrideProps[propName] = slotPropValue)
              : 'style' === propName
                ? (overrideProps[propName] = {
                    ...slotPropValue,
                    ...childPropValue,
                  })
                : 'className' === propName &&
                  (overrideProps[propName] = [slotPropValue, childPropValue]
                    .filter(Boolean)
                    .join(' '))
          }
          return { ...slotProps, ...overrideProps }
        }
      },
    '../../node_modules/.pnpm/@radix-ui+react-switch@1.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_493359caf905e3ba119eff41a016151d/node_modules/@radix-ui/react-switch/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          bL: () => Root,
          dO: () => Switch,
          zi: () => Thumb,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs'
            ),
          _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          [createSwitchContext, createSwitchScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Switch'),
          [SwitchProvider, useSwitchContext] = createSwitchContext('Switch'),
          Switch = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeSwitch,
                  name,
                  checked: checkedProp,
                  defaultChecked,
                  required,
                  disabled,
                  value = 'on',
                  onCheckedChange,
                  form,
                  ...switchProps
                } = props,
                [button, setButton] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                composedRefs = (0,
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                  forwardedRef,
                  (node) => setButton(node)
                ),
                hasConsumerStoppedPropagationRef =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                isFormControl = !button || form || !!button.closest('form'),
                [checked, setChecked] = (0,
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.i)(
                  {
                    prop: checkedProp,
                    defaultProp: defaultChecked ?? !1,
                    onChange: onCheckedChange,
                    caller: 'Switch',
                  }
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                SwitchProvider,
                {
                  scope: __scopeSwitch,
                  checked,
                  disabled,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG
                        .button,
                      {
                        type: 'button',
                        role: 'switch',
                        'aria-checked': checked,
                        'aria-required': required,
                        'data-state': getState(checked),
                        'data-disabled': disabled ? '' : void 0,
                        disabled,
                        value,
                        ...switchProps,
                        ref: composedRefs,
                        onClick: (0,
                        _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(
                          props.onClick,
                          (event) => {
                            ;(setChecked((prevChecked) => !prevChecked),
                              isFormControl &&
                                ((hasConsumerStoppedPropagationRef.current =
                                  event.isPropagationStopped()),
                                hasConsumerStoppedPropagationRef.current ||
                                  event.stopPropagation()))
                          }
                        ),
                      }
                    ),
                    isFormControl &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                        SwitchBubbleInput,
                        {
                          control: button,
                          bubbles: !hasConsumerStoppedPropagationRef.current,
                          name,
                          value,
                          checked,
                          required,
                          disabled,
                          form,
                          style: { transform: 'translateX(-100%)' },
                        }
                      ),
                  ],
                }
              )
            }
          )
        Switch.displayName = 'Switch'
        var SwitchThumb = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeSwitch, ...thumbProps } = props,
              context = useSwitchContext('SwitchThumb', __scopeSwitch)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.sG.span,
              {
                'data-state': getState(context.checked),
                'data-disabled': context.disabled ? '' : void 0,
                ...thumbProps,
                ref: forwardedRef,
              }
            )
          }
        )
        SwitchThumb.displayName = 'SwitchThumb'
        var SwitchBubbleInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (
            { __scopeSwitch, control, checked, bubbles = !0, ...props },
            forwardedRef
          ) => {
            const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
              composedRefs = (0,
              _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(
                ref,
                forwardedRef
              ),
              prevChecked = (0,
              _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.Z)(
                checked
              ),
              controlSize = (0,
              _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.X)(control)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const input = ref.current
                if (!input) return
                const inputProto = window.HTMLInputElement.prototype,
                  setChecked = Object.getOwnPropertyDescriptor(
                    inputProto,
                    'checked'
                  ).set
                if (prevChecked !== checked && setChecked) {
                  const event = new Event('click', { bubbles })
                  ;(setChecked.call(input, checked), input.dispatchEvent(event))
                }
              }, [prevChecked, checked, bubbles]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', {
                type: 'checkbox',
                'aria-hidden': !0,
                defaultChecked: checked,
                ...props,
                tabIndex: -1,
                ref: composedRefs,
                style: {
                  ...props.style,
                  ...controlSize,
                  position: 'absolute',
                  pointerEvents: 'none',
                  opacity: 0,
                  margin: 0,
                },
              })
            )
          }
        )
        function getState(checked) {
          return checked ? 'checked' : 'unchecked'
        }
        SwitchBubbleInput.displayName = 'SwitchBubbleInput'
        var Root = Switch,
          Thumb = SwitchThumb
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Download })
        const Download = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Download', [
          [
            'path',
            { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
          ],
          ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
          ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => FileText })
        const FileText = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('FileText', [
          [
            'path',
            {
              d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
              key: '1rqfz7',
            },
          ],
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
          ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
          ['path', { d: 'M16 13H8', key: 't4e002' }],
          ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => File })
        const File = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('File', [
          [
            'path',
            {
              d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
              key: '1rqfz7',
            },
          ],
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/globe.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Globe })
        const Globe = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Globe', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          [
            'path',
            {
              d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20',
              key: '13o1zl',
            },
          ],
          ['path', { d: 'M2 12h20', key: '9i4pu4' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => X })
        const X = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('X', [
          ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
          ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
        ])
      },
    '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var pako = {}
      ;((0,
      __webpack_require__(
        '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js'
      ).assign)(
        pako,
        __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js'
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js'
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js'
        )
      ),
        (module.exports = pako))
    },
    '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var zlib_deflate = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/deflate.js'
        ),
        utils = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js'
        ),
        strings = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js'
        ),
        msg = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js'
        ),
        ZStream = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js'
        ),
        toString = Object.prototype.toString
      function Deflate(options) {
        if (!(this instanceof Deflate)) return new Deflate(options)
        this.options = utils.assign(
          {
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: '',
          },
          options || {}
        )
        var opt = this.options
        ;(opt.raw && opt.windowBits > 0
          ? (opt.windowBits = -opt.windowBits)
          : opt.gzip &&
            opt.windowBits > 0 &&
            opt.windowBits < 16 &&
            (opt.windowBits += 16),
          (this.err = 0),
          (this.msg = ''),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new ZStream()),
          (this.strm.avail_out = 0))
        var status = zlib_deflate.deflateInit2(
          this.strm,
          opt.level,
          opt.method,
          opt.windowBits,
          opt.memLevel,
          opt.strategy
        )
        if (0 !== status) throw new Error(msg[status])
        if (
          (opt.header && zlib_deflate.deflateSetHeader(this.strm, opt.header),
          opt.dictionary)
        ) {
          var dict
          if (
            ((dict =
              'string' == typeof opt.dictionary
                ? strings.string2buf(opt.dictionary)
                : '[object ArrayBuffer]' === toString.call(opt.dictionary)
                  ? new Uint8Array(opt.dictionary)
                  : opt.dictionary),
            0 !== (status = zlib_deflate.deflateSetDictionary(this.strm, dict)))
          )
            throw new Error(msg[status])
          this._dict_set = !0
        }
      }
      function deflate(input, options) {
        var deflator = new Deflate(options)
        if ((deflator.push(input, !0), deflator.err))
          throw deflator.msg || msg[deflator.err]
        return deflator.result
      }
      ;((Deflate.prototype.push = function (data, mode) {
        var status,
          _mode,
          strm = this.strm,
          chunkSize = this.options.chunkSize
        if (this.ended) return !1
        ;((_mode = mode === ~~mode ? mode : !0 === mode ? 4 : 0),
          'string' == typeof data
            ? (strm.input = strings.string2buf(data))
            : '[object ArrayBuffer]' === toString.call(data)
              ? (strm.input = new Uint8Array(data))
              : (strm.input = data),
          (strm.next_in = 0),
          (strm.avail_in = strm.input.length))
        do {
          if (
            (0 === strm.avail_out &&
              ((strm.output = new utils.Buf8(chunkSize)),
              (strm.next_out = 0),
              (strm.avail_out = chunkSize)),
            1 !== (status = zlib_deflate.deflate(strm, _mode)) && 0 !== status)
          )
            return (this.onEnd(status), (this.ended = !0), !1)
          ;(0 !== strm.avail_out &&
            (0 !== strm.avail_in || (4 !== _mode && 2 !== _mode))) ||
            ('string' === this.options.to
              ? this.onData(
                  strings.buf2binstring(
                    utils.shrinkBuf(strm.output, strm.next_out)
                  )
                )
              : this.onData(utils.shrinkBuf(strm.output, strm.next_out)))
        } while ((strm.avail_in > 0 || 0 === strm.avail_out) && 1 !== status)
        return 4 === _mode
          ? ((status = zlib_deflate.deflateEnd(this.strm)),
            this.onEnd(status),
            (this.ended = !0),
            0 === status)
          : 2 !== _mode || (this.onEnd(0), (strm.avail_out = 0), !0)
      }),
        (Deflate.prototype.onData = function (chunk) {
          this.chunks.push(chunk)
        }),
        (Deflate.prototype.onEnd = function (status) {
          ;(0 === status &&
            ('string' === this.options.to
              ? (this.result = this.chunks.join(''))
              : (this.result = utils.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = status),
            (this.msg = this.strm.msg))
        }),
        (exports.Deflate = Deflate),
        (exports.deflate = deflate),
        (exports.deflateRaw = function deflateRaw(input, options) {
          return (((options = options || {}).raw = !0), deflate(input, options))
        }),
        (exports.gzip = function gzip(input, options) {
          return (
            ((options = options || {}).gzip = !0),
            deflate(input, options)
          )
        }))
    },
    '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var zlib_inflate = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inflate.js'
        ),
        utils = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js'
        ),
        strings = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js'
        ),
        c = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js'
        ),
        msg = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js'
        ),
        ZStream = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js'
        ),
        GZheader = __webpack_require__(
          '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js'
        ),
        toString = Object.prototype.toString
      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options)
        this.options = utils.assign(
          { chunkSize: 16384, windowBits: 0, to: '' },
          options || {}
        )
        var opt = this.options
        ;(opt.raw &&
          opt.windowBits >= 0 &&
          opt.windowBits < 16 &&
          ((opt.windowBits = -opt.windowBits),
          0 === opt.windowBits && (opt.windowBits = -15)),
          !(opt.windowBits >= 0 && opt.windowBits < 16) ||
            (options && options.windowBits) ||
            (opt.windowBits += 32),
          opt.windowBits > 15 &&
            opt.windowBits < 48 &&
            (15 & opt.windowBits || (opt.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ''),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new ZStream()),
          (this.strm.avail_out = 0))
        var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits)
        if (status !== c.Z_OK) throw new Error(msg[status])
        if (
          ((this.header = new GZheader()),
          zlib_inflate.inflateGetHeader(this.strm, this.header),
          opt.dictionary &&
            ('string' == typeof opt.dictionary
              ? (opt.dictionary = strings.string2buf(opt.dictionary))
              : '[object ArrayBuffer]' === toString.call(opt.dictionary) &&
                (opt.dictionary = new Uint8Array(opt.dictionary)),
            opt.raw &&
              (status = zlib_inflate.inflateSetDictionary(
                this.strm,
                opt.dictionary
              )) !== c.Z_OK))
        )
          throw new Error(msg[status])
      }
      function inflate(input, options) {
        var inflator = new Inflate(options)
        if ((inflator.push(input, !0), inflator.err))
          throw inflator.msg || msg[inflator.err]
        return inflator.result
      }
      ;((Inflate.prototype.push = function (data, mode) {
        var status,
          _mode,
          next_out_utf8,
          tail,
          utf8str,
          strm = this.strm,
          chunkSize = this.options.chunkSize,
          dictionary = this.options.dictionary,
          allowBufError = !1
        if (this.ended) return !1
        ;((_mode =
          mode === ~~mode ? mode : !0 === mode ? c.Z_FINISH : c.Z_NO_FLUSH),
          'string' == typeof data
            ? (strm.input = strings.binstring2buf(data))
            : '[object ArrayBuffer]' === toString.call(data)
              ? (strm.input = new Uint8Array(data))
              : (strm.input = data),
          (strm.next_in = 0),
          (strm.avail_in = strm.input.length))
        do {
          if (
            (0 === strm.avail_out &&
              ((strm.output = new utils.Buf8(chunkSize)),
              (strm.next_out = 0),
              (strm.avail_out = chunkSize)),
            (status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH)) ===
              c.Z_NEED_DICT &&
              dictionary &&
              (status = zlib_inflate.inflateSetDictionary(
                this.strm,
                dictionary
              )),
            status === c.Z_BUF_ERROR &&
              !0 === allowBufError &&
              ((status = c.Z_OK), (allowBufError = !1)),
            status !== c.Z_STREAM_END && status !== c.Z_OK)
          )
            return (this.onEnd(status), (this.ended = !0), !1)
          ;(strm.next_out &&
            ((0 !== strm.avail_out &&
              status !== c.Z_STREAM_END &&
              (0 !== strm.avail_in ||
                (_mode !== c.Z_FINISH && _mode !== c.Z_SYNC_FLUSH))) ||
              ('string' === this.options.to
                ? ((next_out_utf8 = strings.utf8border(
                    strm.output,
                    strm.next_out
                  )),
                  (tail = strm.next_out - next_out_utf8),
                  (utf8str = strings.buf2string(strm.output, next_out_utf8)),
                  (strm.next_out = tail),
                  (strm.avail_out = chunkSize - tail),
                  tail &&
                    utils.arraySet(
                      strm.output,
                      strm.output,
                      next_out_utf8,
                      tail,
                      0
                    ),
                  this.onData(utf8str))
                : this.onData(utils.shrinkBuf(strm.output, strm.next_out)))),
            0 === strm.avail_in && 0 === strm.avail_out && (allowBufError = !0))
        } while (
          (strm.avail_in > 0 || 0 === strm.avail_out) &&
          status !== c.Z_STREAM_END
        )
        return (
          status === c.Z_STREAM_END && (_mode = c.Z_FINISH),
          _mode === c.Z_FINISH
            ? ((status = zlib_inflate.inflateEnd(this.strm)),
              this.onEnd(status),
              (this.ended = !0),
              status === c.Z_OK)
            : _mode !== c.Z_SYNC_FLUSH ||
              (this.onEnd(c.Z_OK), (strm.avail_out = 0), !0)
        )
      }),
        (Inflate.prototype.onData = function (chunk) {
          this.chunks.push(chunk)
        }),
        (Inflate.prototype.onEnd = function (status) {
          ;(status === c.Z_OK &&
            ('string' === this.options.to
              ? (this.result = this.chunks.join(''))
              : (this.result = utils.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = status),
            (this.msg = this.strm.msg))
        }),
        (exports.Inflate = Inflate),
        (exports.inflate = inflate),
        (exports.inflateRaw = function inflateRaw(input, options) {
          return (((options = options || {}).raw = !0), inflate(input, options))
        }),
        (exports.ungzip = inflate))
    },
    '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        var utils = __webpack_require__(
            '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js'
          ),
          STR_APPLY_OK = !0,
          STR_APPLY_UIA_OK = !0
        try {
          String.fromCharCode.apply(null, [0])
        } catch (__) {
          STR_APPLY_OK = !1
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (__) {
          STR_APPLY_UIA_OK = !1
        }
        for (var _utf8len = new utils.Buf8(256), q = 0; q < 256; q++)
          _utf8len[q] =
            q >= 252
              ? 6
              : q >= 248
                ? 5
                : q >= 240
                  ? 4
                  : q >= 224
                    ? 3
                    : q >= 192
                      ? 2
                      : 1
        function buf2binstring(buf, len) {
          if (
            len < 65534 &&
            ((buf.subarray && STR_APPLY_UIA_OK) ||
              (!buf.subarray && STR_APPLY_OK))
          )
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len))
          for (var result = '', i = 0; i < len; i++)
            result += String.fromCharCode(buf[i])
          return result
        }
        ;((_utf8len[254] = _utf8len[254] = 1),
          (exports.string2buf = function (str) {
            var buf,
              c,
              c2,
              m_pos,
              i,
              str_len = str.length,
              buf_len = 0
            for (m_pos = 0; m_pos < str_len; m_pos++)
              (55296 == (64512 & (c = str.charCodeAt(m_pos))) &&
                m_pos + 1 < str_len &&
                56320 == (64512 & (c2 = str.charCodeAt(m_pos + 1))) &&
                ((c = 65536 + ((c - 55296) << 10) + (c2 - 56320)), m_pos++),
                (buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4))
            for (
              buf = new utils.Buf8(buf_len), i = 0, m_pos = 0;
              i < buf_len;
              m_pos++
            )
              (55296 == (64512 & (c = str.charCodeAt(m_pos))) &&
                m_pos + 1 < str_len &&
                56320 == (64512 & (c2 = str.charCodeAt(m_pos + 1))) &&
                ((c = 65536 + ((c - 55296) << 10) + (c2 - 56320)), m_pos++),
                c < 128
                  ? (buf[i++] = c)
                  : c < 2048
                    ? ((buf[i++] = 192 | (c >>> 6)),
                      (buf[i++] = 128 | (63 & c)))
                    : c < 65536
                      ? ((buf[i++] = 224 | (c >>> 12)),
                        (buf[i++] = 128 | ((c >>> 6) & 63)),
                        (buf[i++] = 128 | (63 & c)))
                      : ((buf[i++] = 240 | (c >>> 18)),
                        (buf[i++] = 128 | ((c >>> 12) & 63)),
                        (buf[i++] = 128 | ((c >>> 6) & 63)),
                        (buf[i++] = 128 | (63 & c))))
            return buf
          }),
          (exports.buf2binstring = function (buf) {
            return buf2binstring(buf, buf.length)
          }),
          (exports.binstring2buf = function (str) {
            for (
              var buf = new utils.Buf8(str.length), i = 0, len = buf.length;
              i < len;
              i++
            )
              buf[i] = str.charCodeAt(i)
            return buf
          }),
          (exports.buf2string = function (buf, max) {
            var i,
              out,
              c,
              c_len,
              len = max || buf.length,
              utf16buf = new Array(2 * len)
            for (out = 0, i = 0; i < len; )
              if ((c = buf[i++]) < 128) utf16buf[out++] = c
              else if ((c_len = _utf8len[c]) > 4)
                ((utf16buf[out++] = 65533), (i += c_len - 1))
              else {
                for (
                  c &= 2 === c_len ? 31 : 3 === c_len ? 15 : 7;
                  c_len > 1 && i < len;

                )
                  ((c = (c << 6) | (63 & buf[i++])), c_len--)
                c_len > 1
                  ? (utf16buf[out++] = 65533)
                  : c < 65536
                    ? (utf16buf[out++] = c)
                    : ((c -= 65536),
                      (utf16buf[out++] = 55296 | ((c >> 10) & 1023)),
                      (utf16buf[out++] = 56320 | (1023 & c)))
              }
            return buf2binstring(utf16buf, out)
          }),
          (exports.utf8border = function (buf, max) {
            var pos
            for (
              (max = max || buf.length) > buf.length && (max = buf.length),
                pos = max - 1;
              pos >= 0 && 128 == (192 & buf[pos]);

            )
              pos--
            return pos < 0 || 0 === pos
              ? max
              : pos + _utf8len[buf[pos]] > max
                ? pos
                : max
          }))
      },
    '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js':
      (module) => {
        module.exports = function GZheader() {
          ;((this.text = 0),
            (this.time = 0),
            (this.xflags = 0),
            (this.os = 0),
            (this.extra = null),
            (this.extra_len = 0),
            (this.name = ''),
            (this.comment = ''),
            (this.hcrc = 0),
            (this.done = !1))
        }
      },
    '../../node_modules/.pnpm/pdf-lib@1.17.1/node_modules/pdf-lib/es/index.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          PDFDocument: () => api_PDFDocument,
          StandardFonts: () => StandardFonts,
          rgb: () => rgb,
        })
        var extendStatics = function (d, b) {
          return (
            (extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b
                }) ||
              function (d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p])
              }),
            extendStatics(d, b)
          )
        }
        function __extends(d, b) {
          function __() {
            this.constructor = d
          }
          ;(extendStatics(d, b),
            (d.prototype =
              null === b
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __())))
        }
        var __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p])
                return t
              }),
            __assign.apply(this, arguments)
          )
        }
        function __awaiter(thisArg, _arguments, P, generator) {
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value))
              } catch (e) {
                reject(e)
              }
            }
            function rejected(value) {
              try {
                step(generator.throw(value))
              } catch (e) {
                reject(e)
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : (function adopt(value) {
                    return value instanceof P
                      ? value
                      : new P(function (resolve) {
                          resolve(value)
                        })
                  })(result.value).then(fulfilled, rejected)
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            )
          })
        }
        function __generator(thisArg, body) {
          var f,
            y,
            t,
            g,
            _ = {
              label: 0,
              sent: function () {
                if (1 & t[0]) throw t[1]
                return t[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            'function' == typeof Symbol &&
              (g[Symbol.iterator] = function () {
                return this
              }),
            g
          )
          function verb(n) {
            return function (v) {
              return (function step(op) {
                if (f) throw new TypeError('Generator is already executing.')
                for (; _; )
                  try {
                    if (
                      ((f = 1),
                      y &&
                        (t =
                          2 & op[0]
                            ? y.return
                            : op[0]
                              ? y.throw || ((t = y.return) && t.call(y), 0)
                              : y.next) &&
                        !(t = t.call(y, op[1])).done)
                    )
                      return t
                    switch (
                      ((y = 0), t && (op = [2 & op[0], t.value]), op[0])
                    ) {
                      case 0:
                      case 1:
                        t = op
                        break
                      case 4:
                        return (_.label++, { value: op[1], done: !1 })
                      case 5:
                        ;(_.label++, (y = op[1]), (op = [0]))
                        continue
                      case 7:
                        ;((op = _.ops.pop()), _.trys.pop())
                        continue
                      default:
                        if (
                          !((t = _.trys),
                          (t = t.length > 0 && t[t.length - 1]) ||
                            (6 !== op[0] && 2 !== op[0]))
                        ) {
                          _ = 0
                          continue
                        }
                        if (
                          3 === op[0] &&
                          (!t || (op[1] > t[0] && op[1] < t[3]))
                        ) {
                          _.label = op[1]
                          break
                        }
                        if (6 === op[0] && _.label < t[1]) {
                          ;((_.label = t[1]), (t = op))
                          break
                        }
                        if (t && _.label < t[2]) {
                          ;((_.label = t[2]), _.ops.push(op))
                          break
                        }
                        ;(t[2] && _.ops.pop(), _.trys.pop())
                        continue
                    }
                    op = body.call(thisArg, _)
                  } catch (e) {
                    ;((op = [6, e]), (y = 0))
                  } finally {
                    f = t = 0
                  }
                if (5 & op[0]) throw op[1]
                return { value: op[0] ? op[1] : void 0, done: !0 }
              })([n, v])
            }
          }
        }
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length
          var r = Array(s),
            k = 0
          for (i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j]
          return r
        }
        for (
          var chars =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup = new Uint8Array(256),
            i = 0;
          i < 64;
          i++
        )
          lookup[chars.charCodeAt(i)] = i
        var ByteOrder,
          decodeFromBase64 = function (base64) {
            var i,
              encoded1,
              encoded2,
              encoded3,
              encoded4,
              bufferLength = 0.75 * base64.length,
              len = base64.length,
              p = 0
            '=' === base64[base64.length - 1] &&
              (bufferLength--,
              '=' === base64[base64.length - 2] && bufferLength--)
            var bytes = new Uint8Array(bufferLength)
            for (i = 0; i < len; i += 4)
              ((encoded1 = lookup[base64.charCodeAt(i)]),
                (encoded2 = lookup[base64.charCodeAt(i + 1)]),
                (encoded3 = lookup[base64.charCodeAt(i + 2)]),
                (encoded4 = lookup[base64.charCodeAt(i + 3)]),
                (bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)),
                (bytes[p++] = ((15 & encoded2) << 4) | (encoded3 >> 2)),
                (bytes[p++] = ((3 & encoded3) << 6) | (63 & encoded4)))
            return bytes
          },
          DATA_URI_PREFIX_REGEX =
            /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
          toCharCode = function (character) {
            return character.charCodeAt(0)
          },
          toCodePoint = function (character) {
            return character.codePointAt(0)
          },
          toHexStringOfMinLength = function (num, minLength) {
            return padStart(num.toString(16), minLength, '0').toUpperCase()
          },
          strings_toHexString = function (num) {
            return toHexStringOfMinLength(num, 2)
          },
          charFromCode = function (code) {
            return String.fromCharCode(code)
          },
          padStart = function (value, length, padChar) {
            for (
              var padding = '', idx = 0, len = length - value.length;
              idx < len;
              idx++
            )
              padding += padChar
            return padding + value
          },
          copyStringIntoBuffer = function (str, buffer, offset) {
            for (var length = str.length, idx = 0; idx < length; idx++)
              buffer[offset++] = str.charCodeAt(idx)
            return length
          },
          escapeRegExp = function (str) {
            return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          },
          cleanText = function (text) {
            return text
              .replace(/\t|\u0085|\u2028|\u2029/g, '    ')
              .replace(/[\b\v]/g, '')
          },
          escapedNewlineChars = ['\\n', '\\f', '\\r', '\\u000B'],
          isNewlineChar = function (text) {
            return /^[\n\f\r\u000B]$/.test(text)
          },
          lineSplit = function (text) {
            return text.split(/[\n\f\r\u000B]/)
          },
          mergeLines = function (text) {
            return text.replace(/[\n\f\r\u000B]/g, ' ')
          },
          charAtIndex = function (text, index) {
            var cuSecond,
              cuFirst = text.charCodeAt(index),
              nextIndex = index + 1,
              length = 1
            return (
              cuFirst >= 55296 &&
                cuFirst <= 56319 &&
                text.length > nextIndex &&
                (cuSecond = text.charCodeAt(nextIndex)) >= 56320 &&
                cuSecond <= 57343 &&
                (length = 2),
              [text.slice(index, index + length), length]
            )
          },
          breakTextIntoLines = function (
            text,
            wordBreaks,
            maxWidth,
            computeWidthOfText
          ) {
            for (
              var regex = (function (wordBreaks) {
                  for (
                    var newlineCharUnion = escapedNewlineChars.join('|'),
                      escapedRules = ['$'],
                      idx = 0,
                      len = wordBreaks.length;
                    idx < len;
                    idx++
                  ) {
                    var wordBreak = wordBreaks[idx]
                    if (isNewlineChar(wordBreak))
                      throw new TypeError(
                        '`wordBreak` must not include ' + newlineCharUnion
                      )
                    escapedRules.push(
                      '' === wordBreak ? '.' : escapeRegExp(wordBreak)
                    )
                  }
                  var breakRules = escapedRules.join('|')
                  return new RegExp(
                    '(' + newlineCharUnion + ')|((.*?)(' + breakRules + '))',
                    'gm'
                  )
                })(wordBreaks),
                words = cleanText(text).match(regex),
                currLine = '',
                currWidth = 0,
                lines = [],
                pushCurrLine = function () {
                  ;('' !== currLine && lines.push(currLine),
                    (currLine = ''),
                    (currWidth = 0))
                },
                idx = 0,
                len = words.length;
              idx < len;
              idx++
            ) {
              var word = words[idx]
              if (isNewlineChar(word)) pushCurrLine()
              else {
                var width = computeWidthOfText(word)
                ;(currWidth + width > maxWidth && pushCurrLine(),
                  (currLine += word),
                  (currWidth += width))
              }
            }
            return (pushCurrLine(), lines)
          },
          dateRegex =
            /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,
          parseDate = function (dateStr) {
            var match = dateStr.match(dateRegex)
            if (match) {
              var year = match[1],
                _a = match[2],
                month = void 0 === _a ? '01' : _a,
                _b = match[3],
                day = void 0 === _b ? '01' : _b,
                _c = match[4],
                hours = void 0 === _c ? '00' : _c,
                _d = match[5],
                mins = void 0 === _d ? '00' : _d,
                _e = match[6],
                secs = void 0 === _e ? '00' : _e,
                _f = match[7],
                offsetSign = void 0 === _f ? 'Z' : _f,
                _g = match[8],
                offsetHours = void 0 === _g ? '00' : _g,
                _h = match[9]
              return new Date(
                year +
                  '-' +
                  month +
                  '-' +
                  day +
                  'T' +
                  hours +
                  ':' +
                  mins +
                  ':' +
                  secs +
                  ('Z' === offsetSign
                    ? 'Z'
                    : '' +
                      offsetSign +
                      offsetHours +
                      ':' +
                      (void 0 === _h ? '00' : _h))
              )
            }
          },
          findLastMatch = function (value, regex) {
            for (var _a, lastMatch, position = 0; position < value.length; ) {
              var match = value.substring(position).match(regex)
              if (!match) return { match: lastMatch, pos: position }
              ;((lastMatch = match),
                (position +=
                  (null !== (_a = match.index) && void 0 !== _a ? _a : 0) +
                  match[0].length))
            }
            return { match: lastMatch, pos: position }
          },
          last = function (array) {
            return array[array.length - 1]
          },
          typedArrayFor = function (value) {
            if (value instanceof Uint8Array) return value
            for (
              var length = value.length,
                typedArray = new Uint8Array(length),
                idx = 0;
              idx < length;
              idx++
            )
              typedArray[idx] = value.charCodeAt(idx)
            return typedArray
          },
          mergeIntoTypedArray = function () {
            for (var arrays = [], _i = 0; _i < arguments.length; _i++)
              arrays[_i] = arguments[_i]
            for (
              var arrayCount = arrays.length, typedArrays = [], idx = 0;
              idx < arrayCount;
              idx++
            ) {
              var element = arrays[idx]
              typedArrays[idx] =
                element instanceof Uint8Array ? element : typedArrayFor(element)
            }
            var totalSize = 0
            for (idx = 0; idx < arrayCount; idx++)
              totalSize += arrays[idx].length
            for (
              var merged = new Uint8Array(totalSize), offset = 0, arrIdx = 0;
              arrIdx < arrayCount;
              arrIdx++
            )
              for (
                var arr = typedArrays[arrIdx], byteIdx = 0, arrLen = arr.length;
                byteIdx < arrLen;
                byteIdx++
              )
                merged[offset++] = arr[byteIdx]
            return merged
          },
          arrayAsString = function (array) {
            for (var str = '', idx = 0, len = array.length; idx < len; idx++)
              str += charFromCode(array[idx])
            return str
          },
          byAscendingId = function (a, b) {
            return a.id - b.id
          },
          reverseArray = function (array) {
            for (
              var arrayLen = array.length,
                idx = 0,
                len = Math.floor(arrayLen / 2);
              idx < len;
              idx++
            ) {
              var leftIdx = idx,
                rightIdx = arrayLen - idx - 1,
                temp = array[idx]
              ;((array[leftIdx] = array[rightIdx]), (array[rightIdx] = temp))
            }
            return array
          },
          toUint8Array = function (input) {
            if ('string' == typeof input)
              return (function (dataUri) {
                var trimmedUri = dataUri.trim(),
                  res = trimmedUri
                    .substring(0, 100)
                    .match(DATA_URI_PREFIX_REGEX)
                if (!res) return decodeFromBase64(trimmedUri)
                var fullMatch = res[0],
                  data = trimmedUri.substring(fullMatch.length)
                return decodeFromBase64(data)
              })(input)
            if (input instanceof ArrayBuffer) return new Uint8Array(input)
            if (input instanceof Uint8Array) return input
            throw new TypeError(
              '`input` must be one of `string | ArrayBuffer | Uint8Array`'
            )
          },
          waitForTick = function () {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve()
              }, 0)
            })
          },
          highSurrogate = function (codePoint) {
            return Math.floor((codePoint - 65536) / 1024) + 55296
          },
          lowSurrogate = function (codePoint) {
            return ((codePoint - 65536) % 1024) + 56320
          }
        !(function (ByteOrder) {
          ;((ByteOrder.BigEndian = 'BigEndian'),
            (ByteOrder.LittleEndian = 'LittleEndian'))
        })(ByteOrder || (ByteOrder = {}))
        for (
          var REPLACEMENT = '�'.codePointAt(0),
            utf16Decode = function (input, byteOrderMark) {
              if (
                (void 0 === byteOrderMark && (byteOrderMark = !0),
                input.length <= 1)
              )
                return String.fromCodePoint(REPLACEMENT)
              for (
                var byteOrder = byteOrderMark
                    ? readBOM(input)
                    : ByteOrder.BigEndian,
                  idx = byteOrderMark ? 2 : 0,
                  codePoints = [];
                input.length - idx >= 2;

              ) {
                var first = decodeValues(input[idx++], input[idx++], byteOrder)
                if (isHighSurrogate(first))
                  if (input.length - idx < 2) codePoints.push(REPLACEMENT)
                  else {
                    var second = decodeValues(
                      input[idx++],
                      input[idx++],
                      byteOrder
                    )
                    isLowSurrogate(second)
                      ? codePoints.push(first, second)
                      : codePoints.push(REPLACEMENT)
                  }
                else
                  isLowSurrogate(first)
                    ? ((idx += 2), codePoints.push(REPLACEMENT))
                    : codePoints.push(first)
              }
              return (
                idx < input.length && codePoints.push(REPLACEMENT),
                String.fromCodePoint.apply(String, codePoints)
              )
            },
            isHighSurrogate = function (codePoint) {
              return codePoint >= 55296 && codePoint <= 56319
            },
            isLowSurrogate = function (codePoint) {
              return codePoint >= 56320 && codePoint <= 57343
            },
            decodeValues = function (first, second, byteOrder) {
              if (byteOrder === ByteOrder.LittleEndian)
                return (second << 8) | first
              if (byteOrder === ByteOrder.BigEndian)
                return (first << 8) | second
              throw new Error('Invalid byteOrder: ' + byteOrder)
            },
            readBOM = function (bytes) {
              return hasUtf16BigEndianBOM(bytes)
                ? ByteOrder.BigEndian
                : hasUtf16LittleEndianBOM(bytes)
                  ? ByteOrder.LittleEndian
                  : ByteOrder.BigEndian
            },
            hasUtf16BigEndianBOM = function (bytes) {
              return 254 === bytes[0] && 255 === bytes[1]
            },
            hasUtf16LittleEndianBOM = function (bytes) {
              return 255 === bytes[0] && 254 === bytes[1]
            },
            hasUtf16BOM = function (bytes) {
              return (
                hasUtf16BigEndianBOM(bytes) || hasUtf16LittleEndianBOM(bytes)
              )
            },
            sizeInBytes = function (n) {
              return Math.ceil(n.toString(2).length / 8)
            },
            bytesFor = function (n) {
              for (
                var bytes = new Uint8Array(sizeInBytes(n)), i = 1;
                i <= bytes.length;
                i++
              )
                bytes[i - 1] = n >> (8 * (bytes.length - i))
              return bytes
            },
            error = function (msg) {
              throw new Error(msg)
            },
            pako = __webpack_require__(
              '../../node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js'
            ),
            pako_default = __webpack_require__.n(pako),
            utils_chars =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            utils_lookup = new Uint8Array(256),
            utils_i = 0;
          utils_i < 64;
          utils_i++
        )
          utils_lookup[utils_chars.charCodeAt(utils_i)] = utils_i
        var decompressJson = function (compressedJson) {
          return (function (array) {
            for (var str = '', i = 0; i < array.length; i++)
              str += String.fromCharCode(array[i])
            return str
          })(
            pako_default().inflate(
              (function (base64) {
                var i,
                  encoded1,
                  encoded2,
                  encoded3,
                  encoded4,
                  bufferLength = 0.75 * base64.length,
                  len = base64.length,
                  p = 0
                '=' === base64[base64.length - 1] &&
                  (bufferLength--,
                  '=' === base64[base64.length - 2] && bufferLength--)
                var bytes = new Uint8Array(bufferLength)
                for (i = 0; i < len; i += 4)
                  ((encoded1 = utils_lookup[base64.charCodeAt(i)]),
                    (encoded2 = utils_lookup[base64.charCodeAt(i + 1)]),
                    (encoded3 = utils_lookup[base64.charCodeAt(i + 2)]),
                    (encoded4 = utils_lookup[base64.charCodeAt(i + 3)]),
                    (bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)),
                    (bytes[p++] = ((15 & encoded2) << 4) | (encoded3 >> 2)),
                    (bytes[p++] = ((3 & encoded3) << 6) | (63 & encoded4)))
                return bytes
              })(compressedJson)
            )
          )
        }
        var FontNames,
          compressedJsonForFontName = {
            Courier:
              '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',
            'Courier-Bold':
              'eJyFWdtyGjkQ/RVqnnar8Bb4lpg3jEnCxgEvGDtxKg9iphm01oyILrZxKv++mrGd3az6KC8UnNa0+nrUGr5lI11VVLtskF198FaU1Dns9w9OOkf7/ePDrJu90bWbiorCgpH2RpLZO9WqaCReqZ8lnReJqKTa/SwL8DXJctPs9Lxs4oSS+bAuVVjXC7/tG/lAxYV0+SYbOOOpm402wojckVlQ8+T4wVFdUDHXlaifrTs91Q/Z4PNeMLu7t3/U6746POm+7vW/dLNlWGuUrOlCW+mkrrPBXr/X+4/gciPz25qszQbhyeyKjG2XZb3ewR+9Xi/sMdVO5k+ebHemcaHzW/57p3/y+qQbPk967We//TxoP191hoVeUWexs44q25nUuTZbbYSj4o9OZ6hUZ97osZ05WTJ3AQ37jMOqQtblIt9QG7lWycKJuhCmeJGGhSOxffccyqPj/W728eXX4cFJNxvavAmRyQbH++HnGf34vdc/etXNFq54d50NXh+2X6/C137v+CnQH8gZmYdQfP6WXX8MCppQTYMlditCBL53/wfTQ65EFeNfvQ6erlQsqX21akJc1rGs0EoJE+NbMnlToZFAVEFkQ3iABW2uGH3CUK1ojUTgMWEbjfaWeUp5G6N5aCwRw5vddkOM98EVqRlPrBJ2E8OPZHSM6prJkrtnVrqNIWbtOjQrg8o7Zq2VDwxId5x3xMe0lpzBuVaa0WGpkkCkmgaON/3qBVODpaHQiIybXz3ZliTi3DO2D2PoNIZGMXQWQ+MYehNDb2PoXQxNYujPGHofQ+cx9CGGpjE0i6GLGPorhuYxtIihyxhaxtBVDF3H0McY+hRDNzG0CqfQLTmeNlZBBvr0+TnIKbmUuTS5Z1jUN6xtw8nBtEjLb7wxDOesmB5j+JfpIIYLmIZiWC6GZAz9HUMMvTItzESL6VqG9rZMKGOI4QaGXpjY+xi6i6H7GGKYdMeQPl9foBBW3GHark9Vo5OqgEd9oe+ZOPOnc3NcqmZgiUuomehYnt1xZ8daaSPZ8wBoyb0Jx3jOBLBtGyvbiRNOLXw0Sy+DpNKAAhpxq/gXYhD6NdMda6bwwyTH0kwhypI70p5wdhR7Gjia3JEhpvfDLCRKI7YcqYXJnxgv/g3vSthEhNNSEKIfCQByUkpurWQaNXjqNtqjSfHp0OdLOwSAG31E7h03uLRMvlbEtDPoq0rkhqvhlSFu40I7kfP9VoRLFrH+G7YLcypCQLkJ1delML5SwjPb6DIMmQxL54L1gyq+YIfMyKNNsQ4zHj8UnoMDdoZwfoMqkJxX7A6Cj3czWzLdqcC+GuGM9tCa4RobSp5J2gTnk0D5CVA0Pp1RAqn7hC0o5J3kqvkTsGyY6gwBHlqmHtqBh2x77UI9QimVS75PljgMAjXDEljn0QNjvMlZIAju/pF0NH95VcFshSgnB3Ug+LhMkwYoVKOAUS+T2kZIG2DVcYInLXDTQkKUYHelH6kuGcEcbPE26aRPNklKOEQpNcCQHPp6k4jc5UYbRtkM7T4HcVsAvADWLtEGnq/M9t2G9e2Aw8xEM1CCQ4QDWq28cnKrmDHTAwcvgYNh1HJSqEKumdvVDlPDFOwjU8UyTpZZ4tTBohzYUSMaRAmdggBNgKLmzVsYGLjXbyujb6lm70CGSmnB1PsWJHuSYhQfupq/ioxBTRngkEaRuQEP3ICIPb/kAq/Axo6ZUEaQFFSStxwa/eDpiARDND4kqhIE+BG1Btp7hjKCjh6UKYt2xk7MkmMJ8PCMlGNy5XiSdvc6wYjYtIp5pSGBRTo9Z45R6Asw4bQ8HgrYhEJmTFsk6pWvyPfJOj4HiXNGFFQJw1hOCVaYgChNUOGcA6tD0DZCMSdDczMBDa5TFVWDqWn5i/yB+BByqARcGhx6ziqXVD4Ii2TqZmnLi8AS3L8dGqRoBIzwkM0LmXNpOAOKTNKbKciPBvg8XdZJ6RDoHEKO5meuGdDzmOiQMTrt0d63SVfAIDBJtgIwwaUvN7ps8l1r7v0I5lKPRUEV+rcqfaHlDvJH4FSdVBVCjk8IiXp87Jv/Ib90s/dk6gshTfPv8Zfv/wDUfBK2',
            'Courier-Oblique':
              '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',
            'Courier-BoldOblique':
              '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',
            Helvetica:
              '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',
            'Helvetica-Bold':
              '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',
            'Helvetica-Oblique':
              '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',
            'Helvetica-BoldOblique':
              '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',
            'Times-Roman':
              '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',
            'Times-Bold':
              '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',
            'Times-Italic':
              'eJyNnV1320aWtf+KF6/mXcvpsWTJsnPnTtLdsdNx7ESGMb36gpZgmSNKcEhRCjNr/vsLgqhz9tlnFz03XsaziwDqVNWuDxSg/5l919/cdLd3s29n7/+5Wc+vukcnZ2fHZ49On5+dHs8ez/7W3979PL/phgS/LW669Tc/3s2Xi4udslkuUXnkyvxmsdyiNsCmW1x93l3nn93lYnMzkH36l7dXyyHdN0enfzkd2Ppviz+6y18WdxefZ9/erTbd49l3n+er+cVdt/q12/3+hz/uutvL7vJdfzO/ne7wr3/t/5h9+69vjp69ePzN8dHZ46MnR08eP3/+9N+PZ+dD4tVycdv90q8Xd4v+dnexJ09A+O3z4uL6tluvZ9+eDvx9t1qPyWZPnhz/5cmTJ8NFfu7vFhe77HzXf9mudjl59B8X/+/R0Yvnp493/56N/77Y/fviyfjv0/Hfs0cvL/uP3aNft+u77maI0e1Fv/rSr+Z33eVfHj16uVw+erc72/rRu27dre4Hug/mYv1o/uhuNb/sbuar60f9p0c/LW77u+2X7pt/dMOvXv790fz28j/71aPF8OP15uN6cbmYrxbd+i/D7f4wXOZycXv168XnbiyF8S5+vRt+Ml9dFnVI+N38yz+mgnl2+vTx7EM5Ojk5ejx7ub7YhXo1iM8H8fvOjscgz369u/xHM/v26fH43/fDf8+e7cvrn93danExBPRf/zNrPsy+Pd4F9ufhRtZf5kMc//fxHj99+nSPuz8ulvMb4yfHU/LfN/0QqY9LU06fTMrt5ubjrqCubrN22S+X85Xx5+UqX7rVxa6yF+Hs7PlemN8M0nqITr6z8Q7GEs/al/mqu112n2pS/Jnd3ny9O+P62pRnZ6fTr5abtVGL2cXQRuf5Ep+3Xz53tzn5kJVF7zk5LplcL+frz/lu/uxWfab9bZfh3YNIefd51Ym0n/rNStDFvUi7XvwhYHffibLtdExvF7eiWl30y/4243V3s4iSlcByZwOJdr9v5suMr1bd0JBFNn/fdOvRaoryolToud/7s6OjPXuZ0V8dPTvbo++82h4f79H3+Yc/ZPS3/MO/Z/SPHKYfvT2enOzRq3xfrz37p8/26Kfc9P6Zf/hzvok3+e5/yane5lTvchn8mu/rt3yu83yu9/num5zqQz59m9F/eVSH3mFEH4fO7Lq7C7ZhbfTjoMV2yr+LnnJS8jFfXywWF4vVxeYmh2KzM+310POIJjL6W7gZ96mMPuYqcSH8N6fqcl4/5R9eZfQ5/3CR0X/nK17nVMtc/iJawnSE7X0RrT4X2iqjdb4vEftNztB9bkIPOdUfGW3zTfzpqaxoh/rVUa08LbVyVUlPPdzJEdTGu8XyssuX3nf1l/2DiHPonb0nuBvHaV45jkr+P+0Ghuiz9put6js+LfvVQvB1VznLxWY1dOMXHsDjoxNoNuvFOHhNrb6MWnSzutosBuWmv9Mjh508nvgrcmVw8Wmh8i360WEoqIYDl/OrK9Wl7TkOxWjAsSu7btV52z899rHQ/Go1/wKmVn76cZhEdCKXHt6P8/WBCB9WKyGyAoj6c6uhy+Xiy3rhDXWYLnhW7z73mzBUTL1+qNtecKv5vfDf+cXmTo1cRiv/tOz+yBo1rIJv5hcrNdr5uOrUhS/7u/lFaHAuLYaCxACYssJm6Dc7TOmGEbcYom5ur+arzc1yvhGX6a+GUea1ON0c8+HFchNqrPGXPuY5PptqQL+6/DQM8sKo0IcnsYf10UfkL4p/vvELPD16Yhe4GVxus8QrmC/PRXd3uWvw67XovJaVkXkfuZ29F0PooW0O0+GhzotC+zGVp3fLsfp51x8rjXdLskT9dLHofGSU7sDG0JeL+8WlKKQ23pkPlkXL8NuOP/JRnviRd4/UBK2jHudd1EYgq/mUfr3QThynMPidU2Pw31RKaEM/8BlAuojPFwaDgAlInGBSRs+emTiteIhLkeX4mJDqgeUyxMVnAuoGvHnU6mh0VB/lq7P5NKp2tuiqEM7sk15DQjaBkyH60DVe/eRsusqy/7O7vRKXfxcv4TM4lUmvHAcbiRC9eXEvYiPZeCNQ1JRXn/vkyNllfvvcr0Su3tDVPQyVUvuVeLmry0rYzukCHrHYs4XFjfVmHOGsxP3GKuhRrPFoq2aCN5vl3eLLcivuizLolTwWR+n4hrHW3WK+vFx8+pTLaptt2JpgvI5X2EOV5YeD1exAr1OXLioFfVuzQa4x7ilzORr6kfoVXHobBgy4/mbTn1V/3d3iJMjMcdVdLdZx2OtNtDLw+lG0C5uJbIZWHeYiHmwaQFrDrESm56pu7bJSpf6LTPvkRRm4jqtccQ3McvnDnRihfFc1wKXyLW9uFZPpqr1jrRd8WRs+HKiVlQD/WWsatZt6UyuRWtdT89x17cr1Lv7NwWEJ21IZF3TLO7HYcxdM2gvpoT/giPUhzs1G5IT6cAuVHGd6W6DQ+yw1jnDOTtHHhwq8GiqyuLVf0wymKMtYI33VU/a/NsOIBffiebmN8kBHeWJ9PvZjZe74Y627/Im6vxKGIWif50tYeCttfDcziQ3ci+KQyd/GUZPXtK+UHw2DLAi17vkqeilmaCpVVah6EPqrHO5aBdYzHKtgg0uoxx09NS13Qn0Tm5j+5LRMsIdu80L57PeVsebq4Gj351g+fruV0e67w9VaXsustXLOl1WP1rOkN5WFwz8PjCd/qPX2dG1fHZZZsfFYGAj42Q42hXgLvrh78ErL/mpX3re9GMX3dS/dZKk05eFUlZZ8dXDO0N2Jhw5/Vqrv7cFufAh56iHc8mtt/IfN7kHkvx/PXner21/mi9Xu8fG/Zi93j6lnj795+uTfj6ejvXsEtL/PiCZPR/j33dGpHe1dJSDMGApvhqMTO8+bcguAoHIEbkUV6L79BxScJyhTyALbLw4FtG84iN6Go992OTqzI4sZoJh7E86Ho1M7z3nJPaCQe+CQe6Al94Ao96BY7oFN7Tqw0U6QvB+Ojp5YETbD4Qs7andJ/ciy5Ahv3SjsB8AAbYajY7vwppwNUAgQcLgK0BIgQBQgUCxAwCxAwKYAObkPWXsIR9t4lOOzzfGZEmF7NUSN1ji1XOfcfIsCbdgQNWTjsjUXFZq0IWrXxlXjNjG3cJOomRvXbd1kbvAmUKs3Tk2/8LcZgQkYIidwruygqOAJhsgYjCt3MDFbhEnkE8a1WZjMjmEC24YJ0TsKRgMpDFykoDa3APYT4/VGo5ylaGAvhshjjCujMTG7jUlkOca175jM5mMCO5AJ0YYKvs8RechoK1Al1MKfJptAfzJE/mSc/Mk5+1NRwJ8MkT8Zl/5UVPAnQ+RPxpU/mZj9ySTyJ+Pan0xmfzKB/Mk4+VPhbzMCfzJE/uRc+VNRwZ8MkT8ZV/5kYvYnk8ifjGt/Mpn9yQT2JxOiPxWM/lQY+FNBbW4B7E/G641G+VPRwJ8MkT8ZV/5kYvYnk8ifjGt/Mpn9yQT2JxOiPxV8nyPykNFWoEqohT9haNCkIieniiLZFYnsWUEG44qc3CuK0sJCEvCxyMnMoqgcLabIthZ18rYoaoOLadjlokpWF0XyuyC+rXBwvsjJ/khUHhiSgBFGTm4YRWWJMUX2xaiTOUZRO2RMwzYZVfbKqEbDDBq6ZhDAOgNvKy2UTTSKX2neyk5DAvDUyMlYo6jcNabIFht18tkoarONadhxo8q2G9XovUG7rwTyocK3NX6o1IQpO0FLRkqGjBLZcZDYjEEEK0ZKRoyStGFIACaMlCwYJWXAqGf7RZXMFyVtvZiCjRc1sl2UyHRBeispGC5SstsgKbOFBGC1SMloUVI2i3o2WVTJYlHSBosp2F5RY3NFLVorKGisgMFWgbayhbGlonSwaSo7BRnMFClZKUrKSFHPNooqmShK2kIxBRsoamyfqEXzBOVehuxB0q2m9XIRljnlHv3SEJmlcXJK52yTRQGPNEQGaVy6Y1HBGg2RLxpXpmhidkSTyA6Nay80mY3QBHJB42SBhb/NCMzPEDmfc2V7RQXPM0SGZ1y5nYnZ6kwinzOuTc5kdjgT2N5MiN5WMBpbYeBqBbW5BbCfGa83GuVkRQMbM0QeZlwZmInZvUwi6zKufctkNi0T2LFMiHZV8H2OyENGW4EqoRb+VO4VDcoZOZQLZFEgsEeZBCbljFzKBWlTJoNPOSOjckE5lavZqlwjr3JBm5Xr7FaukF25QH5lwlvBwLGckWWBoDzLZDAtZ+RaLijbcjX7lmtkXC5o53KdrcsV9i5XonkZR/cyCPZlrBUthA3MhQPNSlmYieBhzsjEXFAu5mq2MdfIx1zQRuY6O5krbGWuRC8zfi+C8yDYVrFa5IWhlRtDQ3NGhuYCGRoIbGgmgaE5I0NzQRqayWBozsjQXFCG5mo2NNfI0FzQhuY6G5orZGgukKGZ8FYwMDRnZGggKEMzGQzNGRmaC8rQXM2G5hoZmgva0FxnQ3OFDc2VaGjG0dAMgqEZa0ULYUNz4UCzUoZmIhiaMzI0F5ShuZoNzTUyNBe0obnOhuYKG5or0dCM34vgPAi2VawWeWFoq+n7JO5AhZCZFUxWZpiNbBLAxgohEytYWtgkgoEVQvZVsDKvomXrKgoZV8HatorKplU4WVbBZFgTfpsImFUhZFWGlVFNIthUIWRSBSuLKlo2qKKQPRWszamobE2FszEVHm1pomhKEwJLmkibajjbUcHVJqGsaJLAiAohGypYmVDRsgUVhQyoYG0/RWXzKZytp/BoPBO9T2F4SGSbiY6tsJupEaDfGCLDMU6O45wtpyjgOYbIdIxL1ykq2I4h8h3jynhMzM5jElmPce09JrP5mEDuY5zsp/C3GYEBGSIHcq4sqKjgQYbIhIwrFzIx25BJ5EPGtRGZzE5kAluRCdGLCkYzKgzcqKA2twD2I+P1RqMcqWhgSYbIk4wrUzIxu5JJZEvGtS+ZzMZkAjuTCdGaCr7PEXnIaCtQJdTZn/460Je7K/uRBdFR8RJAMaTOMZpOLZCOPEjOPD7OSmiclIbt6HyslHZUcgAo3C5wuF2g5XYBUZGDYhkBZhkBNmVkT76f4r733+8x7oCih3+f4g4cMgK0ZASQ3S4wu11g0+0CKXF39N689PvJBvyojUexF/me2v1EJ9PFyBii8BinGBlXgTIxR8skCplxjpsJHDwTYgQNUxgLf5/D0GTUCkShNS7iO77DGONbEMe3cI5v4TK+RRTxLRLHt/AU3yKk+BaB4lswx3fi73MYmoxagTi+haf4/m0K7dHRqR2aFwErIUUWDQoEdCjAZlHA3IkAuhUBLF4EqIQN2G6keeZHJSuASk4AhYwAh3wALdkAZLkAZpkANuUBSMmCo/0HLodMPTUUE3Q5U10Z+iHSmepkpuCF24BzXjuR107kdbGrYn5kFdJRHIw7xzrq1Ibgjnx47czuxFnvw7/x0LtaZ9TXuhA6W8fe2zpL3a1L0N86LJMAZFajnU1fMA0VYmWDofEoDp1GVCoEojAN2Auvpua/N4NX2PoBlSYDSMykXlHTBxrnT69CwwfmhedsajJA4iTp1dTon1p+5rFbeIWNHpDoDF5Rowcau4BXodEDI+N/BY0eSLT7V9Doj4108SiOcF9hm0eUR7ivqM0jhTYPOA58X4U2D4wGvq+mlgZH+Z77yg328gb7fCfcyEAR92hNDFAcib/CBuZoEwpnkyvUplJ7NrL2bHLt4fkYKKJebUS92oR69Xq2XwnZT33HoziLH5GYwI88zd1HGqftI5Iz9lGhyfrISvgBlfA76kIeuhjr11jREeXwv6aKjhQqOuBYKq9DRQdGsX89VfQTy0EfLfN1qujAkz++xooOSC4tvQ4VHVhcUHqNFd3RJh7lu95U7noj73qT75prNSjirjfk96+hVjvZxqN819t8d6Grw3ZBAjURUlVroSS54VACakOk6uZEibhlkUyNjFRqb1GFyk8CtUJSqUGyKtomJcnNlBPkFkspqPGSyu2YZG7SUe5rFYkbOqmq9VCSr1VVdgJSdfOiRNzSSCarIJVcI6qbqnAwMNJWKMnXAsNmQ+r/JTDJgkhmNyI5GlMUt1XhYGCyc/002y/tH/uRDfMAhZG8C7v1gv24fnfUhKM2pGzjsvOI0qLyjorl7J+mDD+1RJZLQNjE9xTfuT8mRJmsvHNPKmQX30cn1OYfcu7V++gkqTjga9iUR46Ieg17kmKVgOCQQCFiVQUqpoFwRaGpCW3tVBxAUnMYYwIVzNygZHw4sPUGNSWY7A4Da4hC6lwFs6gQxoKajNr8Qw6a8RyuIqlAFW2b88jBMZ7C8vNseoZyZkd2d47sGYqjOIFzjnlwahM4Rz5Nc+ZTSWflGYoTm7ntUWlSLwWivBinDBlXuTIxZ80kyp9xzqQJnFMTYnYNU57xYQMjynN62MBc5Vk9bGCJ8pwfNrDAeeaHDYw5z6GFv6wKnP+ochSiKmMRk4iIxAQcl6im6EQ5xSjKFKkoUrzKg9OXAlGMjFN0jKu4mJgjYhLFwjhHwQTOvwkx54Zjnt9M2d178BvMKaCSSUBxhuc8PXN+g7kC5HMzZ747wVnZmODEJmaGfrNR4BvsnBCFfsmFsUuyoyYcfQgp26D59gZHaUb7Bo12uttktMwp1tpoWcxRT0bLnOOfjZaFWBLJaIlDmaSxauKqdMJYNaImow/5h21OxcWmhq+TFF7nhgKMnEoxilSUUVTlGVPkQo06lWwUuXijymUc1VjQUaPSTh+eOBHR43I/9OEJleR9pVSaCv9QOU9bSc+1ov79hb0OL61CxUBK1QIlqhQoqSqBeq4QqFJ1QIkrA2pcFVCLFQEVqgb0MvxJihNXgfrL8DnBexn5RtIP8gytTMvFXntHfK+W1wChxA1RcRunsjauCtrEXMomUREb5/I1gQvXhFiyhqlY8R3fkxgGLtDKO76kvs/xbDL6kH/Y5lRcfPKV2L0U17iwCFmhkmSZCpRlVa6cJhcvp6BSZpkLm3Uuc9Zj0bNKNYBkqAisUH1IsqoWlOh9tcSaqvKhera2+huuOSznCmTvzEHVcUaVxgWqLi6oiuJqriKuUeVwgauFK1whXIlVwTlVgvDm7AlFhAu+9uYsy+9FdBvBPojftiIdF6p+wXSvldUdKE1DVJjGqSyNq6I0MZekSVSQxrkcTeBiNCGWomEqRFzNO4lh4CKsrOaR+j7Hs8noQ/5hm1Nx4akFvknCSfqUtTRJZ05lpyfpLOayS5N05lx2eZLOQiy7NEknDmWXXl1IXJUd7uuneDYZfcg/bHMqLju503+UfpmK7YUfld8CKoUFKJQTcLgC0FI6gKxggFmZAJuKA0gpCUe7zUbP/ajkAFDJAaCQA+CQA6AlB4AsB8AsB8CmHAApOXBE+yR3KCbocqbsyTUinalOZio8mAac89qJvHYir308yvfcV26wlzfY5zvhp8agiHu058OAcvB5U+LbGb7RMB7FNxpGJN5oGHl6o2Gk8Y2GEck3GkaF3mgYGb3RMLLwRsO7Gb4+Nh7F57UjEk+vR54e3o40PqcekXw4PSr0RHpk8fn8iOJD+XdTrOEo3/V55a7P5V2f57vmWIMi7vqcHp6/g1g7GV/Eel6OmnDUxiOrPY6wluxpWfiCMjREITGu4mJiDo5JFCHjOkwmc6xMoGI2TmVd+LlAlSzKojexnkWuBMYPZzFVBxO4TpgQKwYukVLBNhm1AlFlUeuhk1QeMkGNMUThNK7CaWIOp0kUTuM6nCZzOE2gGmOcakzh5wJVsihrjIn1LHKNMX44i6nGmMA1xoRYY/D9IyrYJqNWIKox6v2jIqWthOUm9FZCrcoAV7cS6gQc7INbCXWiFHi9lVCrXM+Cel4VDgZG17yY5GuBSbUwqv+XwOQaGeVUL6NMtTPtupFVqakJbVXgWlvddbNPMEy09hPMJ3YUZzkjsmmlI7HxdeRpLjTSuMV1RLRldWT00vbIwvvaI4n7VX+bmpzn502MwW+pcQGXAbFmBIiHla74sNKZvbfjyF7bMbSbmbw4tiObITqyGaKjOEN0jjNEpzZDdOQzRGc+Q3RWZohObIZo6KJfwirAnuxnXGcnhcRfdDmXNuFCFGqXc6xdQGHCBSexSufIK50zkfnP2y+fu9uQjUXIpr2rBoiWPnasD2ftc977SnH2sjj7XJw8cQNFFLRN3ADlUrWJm+d+FbK1yrmnl8n2SLxMthPW3c2i1JxnRjchzSZfYiMWsUae1q9GGpeuRsRb6V2h9ayRifLchFWsHXkIYdrGo5IHQLjLbk9xv9bkaGm/FnPyY71fi8XszGm/FnP26Lxfi4Xo1mm/FnHw7TTEZq4cXA2xWSIvrw2xWWZXT0Ns5uTvhYPJGyIfME52b1yZhInZKUwiuzDOzmACW6EJsTMwTN5ROHULjkPfULA4AfcSxqmrcC76CxNzp+FS7jlMo+7DOPchJtSix71J4YscIu5XjLMZFaHPl+NuxvihaiQ6HJMq1ajS9Zhcq2XcCRmv1Cbujgpf5Whwx2SceifnqosqquinirTJqbnHMq66LRNz32USdWDGdS9mMndlJtSqEHVqBT/kiG8Foj7OuOjo0ibd0hvoTbpa5a7vwCZdnUR0g3qTrlZTl1jZpKtl6h71Jl2pYlepVxW0KrvN6qqCTsBd6MFVBZ0odad6VUGr3LUGFTvYKLAPRpU726hKr4xJhGPGBOybUU32GOXUmUSZOuQospEGlTtnEmMXnV4FladM3bV+FbSiqq67+ipoJYHoxvWroPr3qUuvvAoqz52696AuaqFOXX1Uk1vHdzBrN5M6/6h+vVqrgUBMcLBa1wYFMdHhup8GCFE9WLvTYCGoq1o808Ahqjx8IFUOIkIaNZSIr47WfpmGFVGVg4uYRAwxYgIeaES1MtyIidKgI8qHKzMPQIL4UCvLbVXgIUn99b8xwfk0GtkvzZ7jEARQ/L7NeRpsAE+L0ec4rABEK8rnYQABLKwdn+NQwVFx7v0HSs5n6ZslZZEd85re0WBOudbvaLCY85/e0WDOkcjvaLAQY5Le0SBO0SmYQ5RehZhOo1+FkCJF7MCrEDJFjp1+FUKKHMXKqxBSjfHUr0IokSIbNA4vvU4wnU69TiAkCmz1dQKh56Cq1wmExAGVrxMILQZTvU6QJQokKBxG3KA/nSdt0GdO0dMb9FnMcUsb9JlzxPIGfRZirNIGfeIUpYI5RGIf/HSi2j74ikxxO7gPvpImR7G2D74ic0yr++AreoxwbR+8linepHLYw+7x6YR593gSKMiV3eNJzYHNu8eTwMEUu8eTEgOYd4+zQEEzzuGyv+cA4XJG4XKBwuWCCperOVyuUbhc4HC5wuFyJYbLOYXLBAqXcQ7X9DV6CFYhFKqCKVAFqzAVLQepKBSigjlAhXN4Co/BKZRCM2EKzEQpLO+nkDx7YkclHIBKKACFMACHEAAt2QdkWQdm2QY2ZRlIya6j3fLWUz8qOQAUPxnlPH23YqT26SdH/DU9V/xLUM7KHBSQfZLR0Li3+OjIDm0pDph/FdcZfRXXBVyKA+xfxXUGX8V1CF/FdWhfxXXkX8U1Fqen76H6HR2/KIh+04kM23JPYJUMhy/NAoX1HExtn5p15J+adaaiYKs0p5a/3dLMfo44HsVp44hinXOe5pAjtTrnyGuWM/8QrrE+3msvwtrXQtjrOtOLOpM+PwuSqk7++Vlgour4Tm+vKbji4RndxKMc8rigARwrilOrEI4oj6B4VXEmCqMsR+xJE+y1yfbaZHttKvbaSHttsr02wl4bYa9Nstcm22sz2eu+u2jQXgGJr642ZK9A41dXG2GvoNBXVxu0V0Dxq6vNDJf2m1laz29maRG/Sd4KPK1rNrO0Rt/M8sJ8M8ur8c2Ml+CbWVp3b5KpNmCqnib+osu5pAX0Jhkq8LRU3rCfQuK4KN7M8kp4M8vL3w266f6DU80MF7qbWVrdbmZ5SbuZ4Tp2M0uL102yPeCyOPtcnHpBupnlVehmlpaem1lab27Q7xzlBd5mhqu6zSwt5TbJ7oCnRdtmllZqG2F3oNCabDPLC7HNjFdfd2RcWTXr8OVUR2jGI21n+ES3RZcEFJ/dtsklgaentC26JCB6HtsGlwQWnry26JKOxmesp3ZkvbCj2Ak7xz7YqXXBjrgHdsU7YGfW/zqy7teQu0mbXbLNLtlWXLKVLtlml2yFS7bCJdvkkm12yTa5ZJtcsg0u2WaXbLNLthWXbKVLttol2+ySrXDJVrhkO0tPBtsZjjnbWRpzjkiMOUeexpwjjWPOEdGYs53lMWcbrLfN1ttWrLeV1ttm622r1tsK622z9bbZettsva203nayXk+zydnbVLK3kdnb5Oyx9YIisrcR9WMTGwc+oJlMKT2gYU6Wqh/QsJjNNT2gYc42mx/QsBANNz2gIQ7Wm17PY65MWL2exxLZce31PJbZmNPreczJoguf55JmszZOjm1c1VkTc8U1iWqvca6oJnBtNUFXWTZ1f+4W2iU/jqPU4gRs9MbJ7Z0fiJDwfZey+ZtGPYBx7gZMqEWPO4TCFwJR12Bc9Q8m5k7CJOopjHN3YQL3GUXoc7649zB+qDREP2JSpb5WehSTa9WZ+xbjlWrLvUzhoqsp0ian5k7H+KGoiO7HpEpUKh2RybWopC7JhNjI+StwTxKl3kl+BS5Lqo+qfQUuq9RT6a/AZY37K/UVuKxQrwUSdFxIqe9CSXVfqOceDFXqxFDS/Rim4K4MNerNUKIODaS5rCXcraFEPRtKqlmgnlsGqtQ4UOIGgBq3AdSqzYC7u/AYP9iDeMCff6PPxF0fStT7BelwFEUfGNTcDaJMPSFK3BmidiDI3CWCtNCUOkaUVN+Ieu4eUaUeEiXuJFHjfhK0XmaZe0uUvlJ6os9Etd4GKj0npjjQSrj/RKneFLgXBUl0pKBu5G+4O0XpK2ETnSqq9bBVulZMcSBsqYNFLZjL4Asz/+bMeGTPDR3FjaaTUDrtK4HoHMbliabEeCJDdCLj8kRhD9hVjdMpoyjPC9G70pTOiZI8Y9k+dCUQncu4PJFt8bhSjE7lgjyX7X+4UozO5YI817Rl4CoTOk/B8izlQ2dXAtF5jKsTfURTODHkf/L8IzZzQPHhlHN8OOXUHk45kn/Z/GNovsDo75l/hOa6Jxe7jssGRLuj66Bdx9xPgs0C/ZcFXedU+hz2TqGfo6DrnKpyjmEMsFzO6SwGr1VKfab9iGb/J0guPy7LXyE5OskyabgKcGTEd8aEugUo3oYL/gj6tKD7cPQQjrwe7Y78z6SMR3HzyYjSJpMyOONMoBufEKLsVNyYVM5Y4fcZPWQE+Sxom/PAOTaes83v8h5FDNk2RNk2LrOdXvqcMlT4fUYPGUG28d1FygNnW767OElqy/OR0DAAsruTog6F3EpdcorifYU/VDiGB/m2kuEUqCDmaIlJz1FSIFKqCxeSjJIab055Bule0gdJITpAtzJ7HBmURFx8cpUCAxJGBjGHBjUdG0iRggPavcYPGmN8AG91PlOEUMsh4n3eRxFDaNJAjbkMSdowPmWw8PuMHjKCEBS0zXngrBvP2U5bh4+IQ8bzuDIJMut5G/KUKxPuBXsQDLJvbCsywwFwIUcg7QY+Ig4RyKPhJMgI5J3FU85MuBfsQTCIgLGtyAxHwIUUgU8p7zsyNJdlt17vlkKeGfw0K+9C744Wdi/jEQ1eP+XsfqIx2X4KepWuvyNdPLJlTUe23RNQ/obryHFlEyhu9nQcP+06IvqA68joA65xtiNmOtVZzlUOVPkpx6XgTiCKkHEKk3MRKxNzwFzKUTONQmec42cCBzEvBVxVlgKuDi4FmMqB1W+dTz/Kb51rgUJdeeu8ooqw1986ryTIRVB561yrXBy1t86lfFUVqIBIlcVUeYd6X1jXoRCuc+Svc7ivKzG+loG91tG8ziG8FnG7FsHasT4e5XvuKzfYyxvs852k/dSuiHv03dSO7MmKoW08yne9zXdXazAs0MkONpikilh9rcGkBLmIDzYYVjmohxsMyX1VOBgWWUnqn0zQCQ5mq1KLap9M0DLVrconE6S6rQoHA5PrYRlC7kdbt7hSMSGcxRcUTgpCWUl01Afb67PX9TWD68vQbn+Ul8z7tEjDXJ42LMbsUWXxuz+0+N1/ffG7zxP+PZeL4r2aUQtJXomnzXual8r7ylJ5f3CpvA8zrT2it0qv6gpdiWV5QUoE1xWr9n1t1b4/vGrfx0nUnpU/7nIlEJ3duDx5UeHceU2+r6zJ9wfX5HtsZ3tU+v/aum7USRzZsvt0V/T9/8vrQviTmb/EGPEQyfmd1uIlxTlX+nf2gRellZ5PanHdO6dYmz9FXC6otHJBqZU1d62KeW1M8WV+0VVis/vJ0/yTu3hSkcLrxhDe/VuPp3YUt7qMyCqgI7HrZeRpt8tI4y6XEdHelZF5j++svO3oJG5f2aGLWXlzZTyySbqjUkKIrGAAlpnLPtqrqVJ7AqvLjuKVunzxLl88Dr+A4zICUBhoAbYNDo58Y4Mzi6qzq3hUyhcQ1SETbH/HsdWf3UjsxMrChl+A4hvaziG3QO3NbEf8QXdX/H1tZ/ZNe0f2QrYhnxV5Wf8esuojoRUaAKA4xF7F5o5QGHVxMGx+aR8xc2qIeh8xi7lJpn3EzLlx5n3ELMRmmvYRE4cGa4gajnFqPc65/aZHeFPBFn6Zk3Jzxp3LjCr3x61b71xmMbdzuXOZNWrxeecyC9z2cajMiFygMlQmlf0AdxWfxEJnZ9C7ilnMHpF2FTPXbpF3FbNAvpF2FRNPDlKE33OYwEsMkaEYJ1dxztbiivIX/GL11PzSF6uZk7/oL1azmP0lfbGaOftL/mI1C9Ff0heriYO/GKL2a5zar3P2l/SsfCr2wi9zUvYX/EY2o8r9sb/ob2SzmP1FfiObNfKX/I1sFthfcOMAI/KXysYBUtlf8EPZJ7HQ2V/0h7JZzP6SPpTNXPtL/lA2C+Qv6UPZxJO/FOH3HCbwF0PkL8bJX5yzv7gi/SWs9KDLRIG9JqrsOFGVvhOTCPeJCdiDopqcKMrJj6JMrhRF9qb4jATKMArsA1FlNyA1eZZ+MFMqVFAvaz9LLpbWp7VwMCfJ1w6sT+skwuPq69M6BftdZX1ay8n70gMdLbAPHnqgI9MkT0wL4yeqyiV/PLAwrpMIr9QL41qt+GZlYVzL7KF6YVyq2U+D/Hst3OitUWCHjSr7LKnJbUkXnjstBo2vbe03DBixW4nY7DVi8RV509BQoxK/G2+YvgVv3L0z8mKakcaPwhf8WyYWVsIxXkHc/UG2/R+tLWT3l9hOQkx3f4LtLKSxv71GGAK0V+7BWvcvjdxjddujh5ToISfaQqL9Bzy2mGhCPNElzMnF9r2s4I/+/b//H63X5Vs=',
            'Times-BoldItalic':
              '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',
            Symbol:
              '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',
            ZapfDingbats:
              'eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==',
          }
        !(function (FontNames) {
          ;((FontNames.Courier = 'Courier'),
            (FontNames.CourierBold = 'Courier-Bold'),
            (FontNames.CourierOblique = 'Courier-Oblique'),
            (FontNames.CourierBoldOblique = 'Courier-BoldOblique'),
            (FontNames.Helvetica = 'Helvetica'),
            (FontNames.HelveticaBold = 'Helvetica-Bold'),
            (FontNames.HelveticaOblique = 'Helvetica-Oblique'),
            (FontNames.HelveticaBoldOblique = 'Helvetica-BoldOblique'),
            (FontNames.TimesRoman = 'Times-Roman'),
            (FontNames.TimesRomanBold = 'Times-Bold'),
            (FontNames.TimesRomanItalic = 'Times-Italic'),
            (FontNames.TimesRomanBoldItalic = 'Times-BoldItalic'),
            (FontNames.Symbol = 'Symbol'),
            (FontNames.ZapfDingbats = 'ZapfDingbats'))
        })(FontNames || (FontNames = {}))
        var fontCache = {},
          Font = (function () {
            function Font() {
              var _this = this
              ;((this.getWidthOfGlyph = function (glyphName) {
                return _this.CharWidths[glyphName]
              }),
                (this.getXAxisKerningForPair = function (
                  leftGlyphName,
                  rightGlyphName
                ) {
                  return (_this.KernPairXAmounts[leftGlyphName] || {})[
                    rightGlyphName
                  ]
                }))
            }
            return (
              (Font.load = function (fontName) {
                var cachedFont = fontCache[fontName]
                if (cachedFont) return cachedFont
                var json = decompressJson(compressedJsonForFontName[fontName]),
                  font = Object.assign(new Font(), JSON.parse(json))
                return (
                  (font.CharWidths = font.CharMetrics.reduce(function (
                    acc,
                    metric
                  ) {
                    return ((acc[metric.N] = metric.WX), acc)
                  }, {})),
                  (font.KernPairXAmounts = font.KernPairs.reduce(function (
                    acc,
                    _a
                  ) {
                    var name1 = _a[0],
                      name2 = _a[1],
                      width = _a[2]
                    return (
                      acc[name1] || (acc[name1] = {}),
                      (acc[name1][name2] = width),
                      acc
                    )
                  }, {})),
                  (fontCache[fontName] = font),
                  font
                )
              }),
              Font
            )
          })()
        for (
          var decompressedEncodings = decompressJson(
              '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'
            ),
            allUnicodeMappings = JSON.parse(decompressedEncodings),
            Encoding = function Encoding(name, unicodeMappings) {
              var _this = this
              ;((this.canEncodeUnicodeCodePoint = function (codePoint) {
                return (codePoint in _this.unicodeMappings)
              }),
                (this.encodeUnicodeCodePoint = function (codePoint) {
                  var mapped = _this.unicodeMappings[codePoint]
                  if (!mapped) {
                    var str = String.fromCharCode(codePoint),
                      hexCode =
                        '0x' +
                        (function (value, length, padChar) {
                          for (
                            var padding = '',
                              idx = 0,
                              len = length - value.length;
                            idx < len;
                            idx++
                          )
                            padding += padChar
                          return padding + value
                        })(codePoint.toString(16), 4, '0'),
                      msg =
                        _this.name +
                        ' cannot encode "' +
                        str +
                        '" (' +
                        hexCode +
                        ')'
                    throw new Error(msg)
                  }
                  return { code: mapped[0], name: mapped[1] }
                }),
                (this.name = name),
                (this.supportedCodePoints = Object.keys(unicodeMappings)
                  .map(Number)
                  .sort(function (a, b) {
                    return a - b
                  })),
                (this.unicodeMappings = unicodeMappings))
            },
            Encodings = {
              Symbol: new Encoding('Symbol', allUnicodeMappings.symbol),
              ZapfDingbats: new Encoding(
                'ZapfDingbats',
                allUnicodeMappings.zapfdingbats
              ),
              WinAnsi: new Encoding('WinAnsi', allUnicodeMappings.win1252),
            },
            objects_values = function (obj) {
              return Object.keys(obj).map(function (k) {
                return obj[k]
              })
            },
            StandardFontValues = objects_values(FontNames),
            isStandardFont = function (input) {
              return StandardFontValues.includes(input)
            },
            rectanglesAreEqual = function (a, b) {
              return (
                a.x === b.x &&
                a.y === b.y &&
                a.width === b.width &&
                a.height === b.height
              )
            },
            backtick = function (val) {
              return '`' + val + '`'
            },
            formatValue = function (value) {
              var type = typeof value
              return 'string' === type
                ? "'" + value + "'"
                : 'undefined' === type
                  ? backtick(value)
                  : value
            },
            assertIsOneOf = function (value, valueName, allowedValues) {
              Array.isArray(allowedValues) ||
                (allowedValues = objects_values(allowedValues))
              for (var idx = 0, len = allowedValues.length; idx < len; idx++)
                if (value === allowedValues[idx]) return
              throw new TypeError(
                (function (value, valueName, values) {
                  for (
                    var allowedValues = new Array(values.length),
                      idx = 0,
                      len = values.length;
                    idx < len;
                    idx++
                  ) {
                    var v = values[idx]
                    allowedValues[idx] = formatValue(v)
                  }
                  var joinedValues = allowedValues.join(' or ')
                  return (
                    backtick(valueName) +
                    ' must be one of ' +
                    joinedValues +
                    ', but was actually ' +
                    formatValue(value)
                  )
                })(value, valueName, allowedValues)
              )
            },
            assertIsOneOfOrUndefined = function (
              value,
              valueName,
              allowedValues
            ) {
              ;(Array.isArray(allowedValues) ||
                (allowedValues = objects_values(allowedValues)),
                assertIsOneOf(value, valueName, allowedValues.concat(void 0)))
            },
            isType = function (value, type) {
              return 'null' === type
                ? null === value
                : 'undefined' === type
                  ? void 0 === value
                  : 'string' === type
                    ? 'string' == typeof value
                    : 'number' === type
                      ? 'number' == typeof value && !isNaN(value)
                      : 'boolean' === type
                        ? 'boolean' == typeof value
                        : 'symbol' === type
                          ? 'symbol' == typeof value
                          : 'bigint' === type
                            ? 'bigint' == typeof value
                            : type === Date
                              ? value instanceof Date
                              : type === Array
                                ? value instanceof Array
                                : type === Uint8Array
                                  ? value instanceof Uint8Array
                                  : type === ArrayBuffer
                                    ? value instanceof ArrayBuffer
                                    : type === Function
                                      ? value instanceof Function
                                      : value instanceof type[0]
            },
            createTypeErrorMsg = function (value, valueName, types) {
              for (
                var allowedTypes = new Array(types.length),
                  idx = 0,
                  len = types.length;
                idx < len;
                idx++
              ) {
                var type = types[idx]
                ;('null' === type && (allowedTypes[idx] = backtick('null')),
                  'undefined' === type &&
                    (allowedTypes[idx] = backtick('undefined')),
                  'string' === type
                    ? (allowedTypes[idx] = backtick('string'))
                    : 'number' === type
                      ? (allowedTypes[idx] = backtick('number'))
                      : 'boolean' === type
                        ? (allowedTypes[idx] = backtick('boolean'))
                        : 'symbol' === type
                          ? (allowedTypes[idx] = backtick('symbol'))
                          : 'bigint' === type
                            ? (allowedTypes[idx] = backtick('bigint'))
                            : type === Array
                              ? (allowedTypes[idx] = backtick('Array'))
                              : type === Uint8Array
                                ? (allowedTypes[idx] = backtick('Uint8Array'))
                                : type === ArrayBuffer
                                  ? (allowedTypes[idx] =
                                      backtick('ArrayBuffer'))
                                  : (allowedTypes[idx] = backtick(type[1])))
              }
              var val,
                joinedTypes = allowedTypes.join(' or ')
              return (
                backtick(valueName) +
                ' must be of type ' +
                joinedTypes +
                ', but was actually of type ' +
                backtick(
                  null === (val = value)
                    ? 'null'
                    : void 0 === val
                      ? 'undefined'
                      : 'string' == typeof val
                        ? 'string'
                        : isNaN(val)
                          ? 'NaN'
                          : 'number' == typeof val
                            ? 'number'
                            : 'boolean' == typeof val
                              ? 'boolean'
                              : 'symbol' == typeof val
                                ? 'symbol'
                                : 'bigint' == typeof val
                                  ? 'bigint'
                                  : val.constructor && val.constructor.name
                                    ? val.constructor.name
                                    : val.name
                                      ? val.name
                                      : val.constructor
                                        ? String(val.constructor)
                                        : String(val)
                )
              )
            },
            validators_assertIs = function (value, valueName, types) {
              for (var idx = 0, len = types.length; idx < len; idx++)
                if (isType(value, types[idx])) return
              throw new TypeError(createTypeErrorMsg(value, valueName, types))
            },
            assertOrUndefined = function (value, valueName, types) {
              validators_assertIs(value, valueName, types.concat('undefined'))
            },
            assertEachIs = function (values, valueName, types) {
              for (var idx = 0, len = values.length; idx < len; idx++)
                validators_assertIs(values[idx], valueName, types)
            },
            assertRange = function (value, valueName, min, max) {
              if (
                (validators_assertIs(value, valueName, ['number']),
                validators_assertIs(min, 'min', ['number']),
                validators_assertIs(max, 'max', ['number']),
                (max = Math.max(min, max)),
                value < min || value > max)
              )
                throw new Error(
                  backtick(valueName) +
                    ' must be at least ' +
                    min +
                    ' and at most ' +
                    max +
                    ', but was actually ' +
                    value
                )
            },
            assertRangeOrUndefined = function (value, valueName, min, max) {
              ;(validators_assertIs(value, valueName, ['number', 'undefined']),
                'number' == typeof value &&
                  assertRange(value, valueName, min, max))
            },
            assertMultiple = function (value, valueName, multiplier) {
              if (
                (validators_assertIs(value, valueName, ['number']),
                value % multiplier !== 0)
              )
                throw new Error(
                  backtick(valueName) +
                    ' must be a multiple of ' +
                    multiplier +
                    ', but was actually ' +
                    value
                )
            },
            assertPositive = function (value, valueName) {
              if (![1, 0].includes(Math.sign(value)))
                throw new Error(
                  backtick(valueName) +
                    ' must be a positive number or 0, but was actually ' +
                    value
                )
            },
            pdfDocEncodingToUnicode = new Uint16Array(256),
            idx = 0;
          idx < 256;
          idx++
        )
          pdfDocEncodingToUnicode[idx] = idx
        ;((pdfDocEncodingToUnicode[22] = toCharCode('')),
          (pdfDocEncodingToUnicode[24] = toCharCode('˘')),
          (pdfDocEncodingToUnicode[25] = toCharCode('ˇ')),
          (pdfDocEncodingToUnicode[26] = toCharCode('ˆ')),
          (pdfDocEncodingToUnicode[27] = toCharCode('˙')),
          (pdfDocEncodingToUnicode[28] = toCharCode('˝')),
          (pdfDocEncodingToUnicode[29] = toCharCode('˛')),
          (pdfDocEncodingToUnicode[30] = toCharCode('˚')),
          (pdfDocEncodingToUnicode[31] = toCharCode('˜')),
          (pdfDocEncodingToUnicode[127] = toCharCode('�')),
          (pdfDocEncodingToUnicode[128] = toCharCode('•')),
          (pdfDocEncodingToUnicode[129] = toCharCode('†')),
          (pdfDocEncodingToUnicode[130] = toCharCode('‡')),
          (pdfDocEncodingToUnicode[131] = toCharCode('…')),
          (pdfDocEncodingToUnicode[132] = toCharCode('—')),
          (pdfDocEncodingToUnicode[133] = toCharCode('–')),
          (pdfDocEncodingToUnicode[134] = toCharCode('ƒ')),
          (pdfDocEncodingToUnicode[135] = toCharCode('⁄')),
          (pdfDocEncodingToUnicode[136] = toCharCode('‹')),
          (pdfDocEncodingToUnicode[137] = toCharCode('›')),
          (pdfDocEncodingToUnicode[138] = toCharCode('−')),
          (pdfDocEncodingToUnicode[139] = toCharCode('‰')),
          (pdfDocEncodingToUnicode[140] = toCharCode('„')),
          (pdfDocEncodingToUnicode[141] = toCharCode('“')),
          (pdfDocEncodingToUnicode[142] = toCharCode('”')),
          (pdfDocEncodingToUnicode[143] = toCharCode('‘')),
          (pdfDocEncodingToUnicode[144] = toCharCode('’')),
          (pdfDocEncodingToUnicode[145] = toCharCode('‚')),
          (pdfDocEncodingToUnicode[146] = toCharCode('™')),
          (pdfDocEncodingToUnicode[147] = toCharCode('ﬁ')),
          (pdfDocEncodingToUnicode[148] = toCharCode('ﬂ')),
          (pdfDocEncodingToUnicode[149] = toCharCode('Ł')),
          (pdfDocEncodingToUnicode[150] = toCharCode('Œ')),
          (pdfDocEncodingToUnicode[151] = toCharCode('Š')),
          (pdfDocEncodingToUnicode[152] = toCharCode('Ÿ')),
          (pdfDocEncodingToUnicode[153] = toCharCode('Ž')),
          (pdfDocEncodingToUnicode[154] = toCharCode('ı')),
          (pdfDocEncodingToUnicode[155] = toCharCode('ł')),
          (pdfDocEncodingToUnicode[156] = toCharCode('œ')),
          (pdfDocEncodingToUnicode[157] = toCharCode('š')),
          (pdfDocEncodingToUnicode[158] = toCharCode('ž')),
          (pdfDocEncodingToUnicode[159] = toCharCode('�')),
          (pdfDocEncodingToUnicode[160] = toCharCode('€')),
          (pdfDocEncodingToUnicode[173] = toCharCode('�')))
        var pdfDocEncodingDecode = function (bytes) {
          for (
            var codePoints = new Array(bytes.length),
              idx = 0,
              len = bytes.length;
            idx < len;
            idx++
          )
            codePoints[idx] = pdfDocEncodingToUnicode[bytes[idx]]
          return String.fromCodePoint.apply(String, codePoints)
        }
        const utils_Cache = (function () {
          function Cache(populate) {
            ;((this.populate = populate), (this.value = void 0))
          }
          return (
            (Cache.prototype.getValue = function () {
              return this.value
            }),
            (Cache.prototype.access = function () {
              return (this.value || (this.value = this.populate()), this.value)
            }),
            (Cache.prototype.invalidate = function () {
              this.value = void 0
            }),
            (Cache.populatedBy = function (populate) {
              return new Cache(populate)
            }),
            Cache
          )
        })()
        var CharCodes,
          MethodNotImplementedError = (function (_super) {
            function MethodNotImplementedError(className, methodName) {
              var msg =
                'Method ' + className + '.' + methodName + '() not implemented'
              return _super.call(this, msg) || this
            }
            return (
              __extends(MethodNotImplementedError, _super),
              MethodNotImplementedError
            )
          })(Error),
          PrivateConstructorError = (function (_super) {
            function PrivateConstructorError(className) {
              var msg =
                'Cannot construct ' +
                className +
                ' - it has a private constructor'
              return _super.call(this, msg) || this
            }
            return (
              __extends(PrivateConstructorError, _super),
              PrivateConstructorError
            )
          })(Error),
          UnexpectedObjectTypeError = (function (_super) {
            function UnexpectedObjectTypeError(expected, actual) {
              var name = function (t) {
                  var _a, _b
                  return null !== (_a = null == t ? void 0 : t.name) &&
                    void 0 !== _a
                    ? _a
                    : null === (_b = null == t ? void 0 : t.constructor) ||
                        void 0 === _b
                      ? void 0
                      : _b.name
                },
                msg =
                  'Expected instance of ' +
                  (Array.isArray(expected)
                    ? expected.map(name)
                    : [name(expected)]
                  ).join(' or ') +
                  ', but got instance of ' +
                  (actual ? name(actual) : actual)
              return _super.call(this, msg) || this
            }
            return (
              __extends(UnexpectedObjectTypeError, _super),
              UnexpectedObjectTypeError
            )
          })(Error),
          UnsupportedEncodingError = (function (_super) {
            function UnsupportedEncodingError(encoding) {
              var msg = encoding + ' stream encoding not supported'
              return _super.call(this, msg) || this
            }
            return (
              __extends(UnsupportedEncodingError, _super),
              UnsupportedEncodingError
            )
          })(Error),
          ReparseError = (function (_super) {
            function ReparseError(className, methodName) {
              var msg =
                'Cannot call ' +
                className +
                '.' +
                methodName +
                '() more than once'
              return _super.call(this, msg) || this
            }
            return (__extends(ReparseError, _super), ReparseError)
          })(Error),
          MissingPageContentsEmbeddingError =
            ((function (_super) {
              function MissingCatalogError(ref) {
                var msg = 'Missing catalog (ref=' + ref + ')'
                return _super.call(this, msg) || this
              }
              __extends(MissingCatalogError, _super)
            })(Error),
            (function (_super) {
              function MissingPageContentsEmbeddingError() {
                return (
                  _super.call(this, "Can't embed page with missing Contents") ||
                  this
                )
              }
              return (
                __extends(MissingPageContentsEmbeddingError, _super),
                MissingPageContentsEmbeddingError
              )
            })(Error)),
          UnrecognizedStreamTypeError = (function (_super) {
            function UnrecognizedStreamTypeError(stream) {
              var _a,
                _b,
                _c,
                msg =
                  'Unrecognized stream type: ' +
                  (null !==
                    (_c =
                      null !==
                        (_b =
                          null ===
                            (_a =
                              null == stream ? void 0 : stream.contructor) ||
                          void 0 === _a
                            ? void 0
                            : _a.name) && void 0 !== _b
                        ? _b
                        : null == stream
                          ? void 0
                          : stream.name) && void 0 !== _c
                    ? _c
                    : stream)
              return _super.call(this, msg) || this
            }
            return (
              __extends(UnrecognizedStreamTypeError, _super),
              UnrecognizedStreamTypeError
            )
          })(Error),
          PageEmbeddingMismatchedContextError = (function (_super) {
            function PageEmbeddingMismatchedContextError() {
              return (
                _super.call(
                  this,
                  'Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.'
                ) || this
              )
            }
            return (
              __extends(PageEmbeddingMismatchedContextError, _super),
              PageEmbeddingMismatchedContextError
            )
          })(Error),
          PDFArrayIsNotRectangleError = (function (_super) {
            function PDFArrayIsNotRectangleError(size) {
              var msg =
                'Attempted to convert PDFArray with ' +
                size +
                ' elements to rectangle, but must have exactly 4 elements.'
              return _super.call(this, msg) || this
            }
            return (
              __extends(PDFArrayIsNotRectangleError, _super),
              PDFArrayIsNotRectangleError
            )
          })(Error),
          InvalidPDFDateStringError = (function (_super) {
            function InvalidPDFDateStringError(value) {
              var msg =
                'Attempted to convert "' +
                value +
                '" to a date, but it does not match the PDF date string format.'
              return _super.call(this, msg) || this
            }
            return (
              __extends(InvalidPDFDateStringError, _super),
              InvalidPDFDateStringError
            )
          })(Error),
          InvalidTargetIndexError = (function (_super) {
            function InvalidTargetIndexError(targetIndex, Count) {
              var msg =
                'Invalid targetIndex specified: targetIndex=' +
                targetIndex +
                ' must be less than Count=' +
                Count
              return _super.call(this, msg) || this
            }
            return (
              __extends(InvalidTargetIndexError, _super),
              InvalidTargetIndexError
            )
          })(Error),
          CorruptPageTreeError = (function (_super) {
            function CorruptPageTreeError(targetIndex, operation) {
              var msg =
                'Failed to ' +
                operation +
                ' at targetIndex=' +
                targetIndex +
                " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid"
              return _super.call(this, msg) || this
            }
            return (
              __extends(CorruptPageTreeError, _super),
              CorruptPageTreeError
            )
          })(Error),
          IndexOutOfBoundsError = (function (_super) {
            function IndexOutOfBoundsError(index, min, max) {
              var msg =
                'index should be at least ' +
                min +
                ' and at most ' +
                max +
                ', but was actually ' +
                index
              return _super.call(this, msg) || this
            }
            return (
              __extends(IndexOutOfBoundsError, _super),
              IndexOutOfBoundsError
            )
          })(Error),
          InvalidAcroFieldValueError = (function (_super) {
            function InvalidAcroFieldValueError() {
              return (
                _super.call(this, 'Attempted to set invalid field value') ||
                this
              )
            }
            return (
              __extends(InvalidAcroFieldValueError, _super),
              InvalidAcroFieldValueError
            )
          })(Error),
          MultiSelectValueError = (function (_super) {
            function MultiSelectValueError() {
              return (
                _super.call(
                  this,
                  'Attempted to select multiple values for single-select field'
                ) || this
              )
            }
            return (
              __extends(MultiSelectValueError, _super),
              MultiSelectValueError
            )
          })(Error),
          MissingDAEntryError = (function (_super) {
            function MissingDAEntryError(fieldName) {
              var msg =
                'No /DA (default appearance) entry found for field: ' +
                fieldName
              return _super.call(this, msg) || this
            }
            return (__extends(MissingDAEntryError, _super), MissingDAEntryError)
          })(Error),
          MissingTfOperatorError = (function (_super) {
            function MissingTfOperatorError(fieldName) {
              var msg = 'No Tf operator found for DA of field: ' + fieldName
              return _super.call(this, msg) || this
            }
            return (
              __extends(MissingTfOperatorError, _super),
              MissingTfOperatorError
            )
          })(Error),
          NumberParsingError = (function (_super) {
            function NumberParsingError(pos, value) {
              var msg =
                'Failed to parse number (line:' +
                pos.line +
                ' col:' +
                pos.column +
                ' offset=' +
                pos.offset +
                '): "' +
                value +
                '"'
              return _super.call(this, msg) || this
            }
            return (__extends(NumberParsingError, _super), NumberParsingError)
          })(Error),
          PDFParsingError = (function (_super) {
            function PDFParsingError(pos, details) {
              var msg =
                'Failed to parse PDF document (line:' +
                pos.line +
                ' col:' +
                pos.column +
                ' offset=' +
                pos.offset +
                '): ' +
                details
              return _super.call(this, msg) || this
            }
            return (__extends(PDFParsingError, _super), PDFParsingError)
          })(Error),
          NextByteAssertionError = (function (_super) {
            function NextByteAssertionError(pos, expectedByte, actualByte) {
              var msg =
                'Expected next byte to be ' +
                expectedByte +
                ' but it was actually ' +
                actualByte
              return _super.call(this, pos, msg) || this
            }
            return (
              __extends(NextByteAssertionError, _super),
              NextByteAssertionError
            )
          })(PDFParsingError),
          PDFObjectParsingError = (function (_super) {
            function PDFObjectParsingError(pos, byte) {
              var msg =
                'Failed to parse PDF object starting with the following byte: ' +
                byte
              return _super.call(this, pos, msg) || this
            }
            return (
              __extends(PDFObjectParsingError, _super),
              PDFObjectParsingError
            )
          })(PDFParsingError),
          PDFInvalidObjectParsingError = (function (_super) {
            function PDFInvalidObjectParsingError(pos) {
              return (
                _super.call(this, pos, 'Failed to parse invalid PDF object') ||
                this
              )
            }
            return (
              __extends(PDFInvalidObjectParsingError, _super),
              PDFInvalidObjectParsingError
            )
          })(PDFParsingError),
          PDFStreamParsingError = (function (_super) {
            function PDFStreamParsingError(pos) {
              return (
                _super.call(this, pos, 'Failed to parse PDF stream') || this
              )
            }
            return (
              __extends(PDFStreamParsingError, _super),
              PDFStreamParsingError
            )
          })(PDFParsingError),
          UnbalancedParenthesisError = (function (_super) {
            function UnbalancedParenthesisError(pos) {
              return (
                _super.call(
                  this,
                  pos,
                  'Failed to parse PDF literal string due to unbalanced parenthesis'
                ) || this
              )
            }
            return (
              __extends(UnbalancedParenthesisError, _super),
              UnbalancedParenthesisError
            )
          })(PDFParsingError),
          StalledParserError = (function (_super) {
            function StalledParserError(pos) {
              return _super.call(this, pos, 'Parser stalled') || this
            }
            return (__extends(StalledParserError, _super), StalledParserError)
          })(PDFParsingError),
          MissingPDFHeaderError = (function (_super) {
            function MissingPDFHeaderError(pos) {
              return _super.call(this, pos, 'No PDF header found') || this
            }
            return (
              __extends(MissingPDFHeaderError, _super),
              MissingPDFHeaderError
            )
          })(PDFParsingError),
          MissingKeywordError = (function (_super) {
            function MissingKeywordError(pos, keyword) {
              var msg =
                "Did not find expected keyword '" + arrayAsString(keyword) + "'"
              return _super.call(this, pos, msg) || this
            }
            return (__extends(MissingKeywordError, _super), MissingKeywordError)
          })(PDFParsingError)
        !(function (CharCodes) {
          ;((CharCodes[(CharCodes.Null = 0)] = 'Null'),
            (CharCodes[(CharCodes.Backspace = 8)] = 'Backspace'),
            (CharCodes[(CharCodes.Tab = 9)] = 'Tab'),
            (CharCodes[(CharCodes.Newline = 10)] = 'Newline'),
            (CharCodes[(CharCodes.FormFeed = 12)] = 'FormFeed'),
            (CharCodes[(CharCodes.CarriageReturn = 13)] = 'CarriageReturn'),
            (CharCodes[(CharCodes.Space = 32)] = 'Space'),
            (CharCodes[(CharCodes.ExclamationPoint = 33)] = 'ExclamationPoint'),
            (CharCodes[(CharCodes.Hash = 35)] = 'Hash'),
            (CharCodes[(CharCodes.Percent = 37)] = 'Percent'),
            (CharCodes[(CharCodes.LeftParen = 40)] = 'LeftParen'),
            (CharCodes[(CharCodes.RightParen = 41)] = 'RightParen'),
            (CharCodes[(CharCodes.Plus = 43)] = 'Plus'),
            (CharCodes[(CharCodes.Minus = 45)] = 'Minus'),
            (CharCodes[(CharCodes.Dash = 45)] = 'Dash'),
            (CharCodes[(CharCodes.Period = 46)] = 'Period'),
            (CharCodes[(CharCodes.ForwardSlash = 47)] = 'ForwardSlash'),
            (CharCodes[(CharCodes.Zero = 48)] = 'Zero'),
            (CharCodes[(CharCodes.One = 49)] = 'One'),
            (CharCodes[(CharCodes.Two = 50)] = 'Two'),
            (CharCodes[(CharCodes.Three = 51)] = 'Three'),
            (CharCodes[(CharCodes.Four = 52)] = 'Four'),
            (CharCodes[(CharCodes.Five = 53)] = 'Five'),
            (CharCodes[(CharCodes.Six = 54)] = 'Six'),
            (CharCodes[(CharCodes.Seven = 55)] = 'Seven'),
            (CharCodes[(CharCodes.Eight = 56)] = 'Eight'),
            (CharCodes[(CharCodes.Nine = 57)] = 'Nine'),
            (CharCodes[(CharCodes.LessThan = 60)] = 'LessThan'),
            (CharCodes[(CharCodes.GreaterThan = 62)] = 'GreaterThan'),
            (CharCodes[(CharCodes.A = 65)] = 'A'),
            (CharCodes[(CharCodes.D = 68)] = 'D'),
            (CharCodes[(CharCodes.E = 69)] = 'E'),
            (CharCodes[(CharCodes.F = 70)] = 'F'),
            (CharCodes[(CharCodes.O = 79)] = 'O'),
            (CharCodes[(CharCodes.P = 80)] = 'P'),
            (CharCodes[(CharCodes.R = 82)] = 'R'),
            (CharCodes[(CharCodes.LeftSquareBracket = 91)] =
              'LeftSquareBracket'),
            (CharCodes[(CharCodes.BackSlash = 92)] = 'BackSlash'),
            (CharCodes[(CharCodes.RightSquareBracket = 93)] =
              'RightSquareBracket'),
            (CharCodes[(CharCodes.a = 97)] = 'a'),
            (CharCodes[(CharCodes.b = 98)] = 'b'),
            (CharCodes[(CharCodes.d = 100)] = 'd'),
            (CharCodes[(CharCodes.e = 101)] = 'e'),
            (CharCodes[(CharCodes.f = 102)] = 'f'),
            (CharCodes[(CharCodes.i = 105)] = 'i'),
            (CharCodes[(CharCodes.j = 106)] = 'j'),
            (CharCodes[(CharCodes.l = 108)] = 'l'),
            (CharCodes[(CharCodes.m = 109)] = 'm'),
            (CharCodes[(CharCodes.n = 110)] = 'n'),
            (CharCodes[(CharCodes.o = 111)] = 'o'),
            (CharCodes[(CharCodes.r = 114)] = 'r'),
            (CharCodes[(CharCodes.s = 115)] = 's'),
            (CharCodes[(CharCodes.t = 116)] = 't'),
            (CharCodes[(CharCodes.u = 117)] = 'u'),
            (CharCodes[(CharCodes.x = 120)] = 'x'),
            (CharCodes[(CharCodes.LeftCurly = 123)] = 'LeftCurly'),
            (CharCodes[(CharCodes.RightCurly = 125)] = 'RightCurly'),
            (CharCodes[(CharCodes.Tilde = 126)] = 'Tilde'))
        })(CharCodes || (CharCodes = {}))
        const syntax_CharCodes = CharCodes
        const document_PDFHeader = (function () {
          function PDFHeader(major, minor) {
            ;((this.major = String(major)), (this.minor = String(minor)))
          }
          return (
            (PDFHeader.prototype.toString = function () {
              var bc = charFromCode(129)
              return (
                '%PDF-' +
                this.major +
                '.' +
                this.minor +
                '\n%' +
                bc +
                bc +
                bc +
                bc
              )
            }),
            (PDFHeader.prototype.sizeInBytes = function () {
              return 12 + this.major.length + this.minor.length
            }),
            (PDFHeader.prototype.copyBytesInto = function (buffer, offset) {
              var initialOffset = offset
              return (
                (buffer[offset++] = syntax_CharCodes.Percent),
                (buffer[offset++] = syntax_CharCodes.P),
                (buffer[offset++] = syntax_CharCodes.D),
                (buffer[offset++] = syntax_CharCodes.F),
                (buffer[offset++] = syntax_CharCodes.Dash),
                (offset += copyStringIntoBuffer(this.major, buffer, offset)),
                (buffer[offset++] = syntax_CharCodes.Period),
                (offset += copyStringIntoBuffer(this.minor, buffer, offset)),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (buffer[offset++] = syntax_CharCodes.Percent),
                (buffer[offset++] = 129),
                (buffer[offset++] = 129),
                (buffer[offset++] = 129),
                (buffer[offset++] = 129),
                offset - initialOffset
              )
            }),
            (PDFHeader.forVersion = function (major, minor) {
              return new PDFHeader(major, minor)
            }),
            PDFHeader
          )
        })()
        const objects_PDFObject = (function () {
          function PDFObject() {}
          return (
            (PDFObject.prototype.clone = function (_context) {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'clone'
              )
            }),
            (PDFObject.prototype.toString = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'toString'
              )
            }),
            (PDFObject.prototype.sizeInBytes = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'sizeInBytes'
              )
            }),
            (PDFObject.prototype.copyBytesInto = function (_buffer, _offset) {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'copyBytesInto'
              )
            }),
            PDFObject
          )
        })()
        const objects_PDFNumber = (function (_super) {
          function PDFNumber(value) {
            var _this = _super.call(this) || this
            return (
              (_this.numberValue = value),
              (_this.stringValue = (function (num) {
                var e,
                  numStr = String(num)
                if (Math.abs(num) < 1) {
                  if ((e = parseInt(num.toString().split('e-')[1]))) {
                    var negative = num < 0
                    ;(negative && (num *= -1),
                      (num *= Math.pow(10, e - 1)),
                      (numStr =
                        '0.' +
                        new Array(e).join('0') +
                        num.toString().substring(2)),
                      negative && (numStr = '-' + numStr))
                  }
                } else
                  (e = parseInt(num.toString().split('+')[1])) > 20 &&
                    ((e -= 20),
                    (numStr =
                      (num /= Math.pow(10, e)).toString() +
                      new Array(e + 1).join('0')))
                return numStr
              })(value)),
              _this
            )
          }
          return (
            __extends(PDFNumber, _super),
            (PDFNumber.prototype.asNumber = function () {
              return this.numberValue
            }),
            (PDFNumber.prototype.value = function () {
              return this.numberValue
            }),
            (PDFNumber.prototype.clone = function () {
              return PDFNumber.of(this.numberValue)
            }),
            (PDFNumber.prototype.toString = function () {
              return this.stringValue
            }),
            (PDFNumber.prototype.sizeInBytes = function () {
              return this.stringValue.length
            }),
            (PDFNumber.prototype.copyBytesInto = function (buffer, offset) {
              return (
                (offset += copyStringIntoBuffer(
                  this.stringValue,
                  buffer,
                  offset
                )),
                this.stringValue.length
              )
            }),
            (PDFNumber.of = function (value) {
              return new PDFNumber(value)
            }),
            PDFNumber
          )
        })(objects_PDFObject)
        var PDFArray = (function (_super) {
          function PDFArray(context) {
            var _this = _super.call(this) || this
            return ((_this.array = []), (_this.context = context), _this)
          }
          return (
            __extends(PDFArray, _super),
            (PDFArray.prototype.size = function () {
              return this.array.length
            }),
            (PDFArray.prototype.push = function (object) {
              this.array.push(object)
            }),
            (PDFArray.prototype.insert = function (index, object) {
              this.array.splice(index, 0, object)
            }),
            (PDFArray.prototype.indexOf = function (object) {
              var index = this.array.indexOf(object)
              return -1 === index ? void 0 : index
            }),
            (PDFArray.prototype.remove = function (index) {
              this.array.splice(index, 1)
            }),
            (PDFArray.prototype.set = function (idx, object) {
              this.array[idx] = object
            }),
            (PDFArray.prototype.get = function (index) {
              return this.array[index]
            }),
            (PDFArray.prototype.lookupMaybe = function (index) {
              for (var _a, types = [], _i = 1; _i < arguments.length; _i++)
                types[_i - 1] = arguments[_i]
              return (_a = this.context).lookupMaybe.apply(
                _a,
                __spreadArrays([this.get(index)], types)
              )
            }),
            (PDFArray.prototype.lookup = function (index) {
              for (var _a, types = [], _i = 1; _i < arguments.length; _i++)
                types[_i - 1] = arguments[_i]
              return (_a = this.context).lookup.apply(
                _a,
                __spreadArrays([this.get(index)], types)
              )
            }),
            (PDFArray.prototype.asRectangle = function () {
              if (4 !== this.size())
                throw new PDFArrayIsNotRectangleError(this.size())
              var lowerLeftX = this.lookup(0, objects_PDFNumber).asNumber(),
                lowerLeftY = this.lookup(1, objects_PDFNumber).asNumber()
              return {
                x: lowerLeftX,
                y: lowerLeftY,
                width:
                  this.lookup(2, objects_PDFNumber).asNumber() - lowerLeftX,
                height:
                  this.lookup(3, objects_PDFNumber).asNumber() - lowerLeftY,
              }
            }),
            (PDFArray.prototype.asArray = function () {
              return this.array.slice()
            }),
            (PDFArray.prototype.clone = function (context) {
              for (
                var clone = PDFArray.withContext(context || this.context),
                  idx = 0,
                  len = this.size();
                idx < len;
                idx++
              )
                clone.push(this.array[idx])
              return clone
            }),
            (PDFArray.prototype.toString = function () {
              for (
                var arrayString = '[ ', idx = 0, len = this.size();
                idx < len;
                idx++
              )
                ((arrayString += this.get(idx).toString()),
                  (arrayString += ' '))
              return (arrayString += ']')
            }),
            (PDFArray.prototype.sizeInBytes = function () {
              for (var size = 3, idx = 0, len = this.size(); idx < len; idx++)
                size += this.get(idx).sizeInBytes() + 1
              return size
            }),
            (PDFArray.prototype.copyBytesInto = function (buffer, offset) {
              var initialOffset = offset
              ;((buffer[offset++] = syntax_CharCodes.LeftSquareBracket),
                (buffer[offset++] = syntax_CharCodes.Space))
              for (var idx = 0, len = this.size(); idx < len; idx++)
                ((offset += this.get(idx).copyBytesInto(buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Space))
              return (
                (buffer[offset++] = syntax_CharCodes.RightSquareBracket),
                offset - initialOffset
              )
            }),
            (PDFArray.prototype.scalePDFNumbers = function (x, y) {
              for (var idx = 0, len = this.size(); idx < len; idx++) {
                var el = this.lookup(idx)
                if (el instanceof objects_PDFNumber) {
                  var factor = idx % 2 == 0 ? x : y
                  this.set(idx, objects_PDFNumber.of(el.asNumber() * factor))
                }
              }
            }),
            (PDFArray.withContext = function (context) {
              return new PDFArray(context)
            }),
            PDFArray
          )
        })(objects_PDFObject)
        const objects_PDFArray = PDFArray
        var ENFORCER = {}
        const objects_PDFBool = (function (_super) {
          function PDFBool(enforcer, value) {
            var _this = this
            if (enforcer !== ENFORCER)
              throw new PrivateConstructorError('PDFBool')
            return (((_this = _super.call(this) || this).value = value), _this)
          }
          return (
            __extends(PDFBool, _super),
            (PDFBool.prototype.asBoolean = function () {
              return this.value
            }),
            (PDFBool.prototype.clone = function () {
              return this
            }),
            (PDFBool.prototype.toString = function () {
              return String(this.value)
            }),
            (PDFBool.prototype.sizeInBytes = function () {
              return this.value ? 4 : 5
            }),
            (PDFBool.prototype.copyBytesInto = function (buffer, offset) {
              return this.value
                ? ((buffer[offset++] = syntax_CharCodes.t),
                  (buffer[offset++] = syntax_CharCodes.r),
                  (buffer[offset++] = syntax_CharCodes.u),
                  (buffer[offset++] = syntax_CharCodes.e),
                  4)
                : ((buffer[offset++] = syntax_CharCodes.f),
                  (buffer[offset++] = syntax_CharCodes.a),
                  (buffer[offset++] = syntax_CharCodes.l),
                  (buffer[offset++] = syntax_CharCodes.s),
                  (buffer[offset++] = syntax_CharCodes.e),
                  5)
            }),
            (PDFBool.True = new PDFBool(ENFORCER, !0)),
            (PDFBool.False = new PDFBool(ENFORCER, !1)),
            PDFBool
          )
        })(objects_PDFObject)
        var IsDelimiter = new Uint8Array(256)
        ;((IsDelimiter[syntax_CharCodes.LeftParen] = 1),
          (IsDelimiter[syntax_CharCodes.RightParen] = 1),
          (IsDelimiter[syntax_CharCodes.LessThan] = 1),
          (IsDelimiter[syntax_CharCodes.GreaterThan] = 1),
          (IsDelimiter[syntax_CharCodes.LeftSquareBracket] = 1),
          (IsDelimiter[syntax_CharCodes.RightSquareBracket] = 1),
          (IsDelimiter[syntax_CharCodes.LeftCurly] = 1),
          (IsDelimiter[syntax_CharCodes.RightCurly] = 1),
          (IsDelimiter[syntax_CharCodes.ForwardSlash] = 1),
          (IsDelimiter[syntax_CharCodes.Percent] = 1))
        var IsWhitespace = new Uint8Array(256)
        ;((IsWhitespace[syntax_CharCodes.Null] = 1),
          (IsWhitespace[syntax_CharCodes.Tab] = 1),
          (IsWhitespace[syntax_CharCodes.Newline] = 1),
          (IsWhitespace[syntax_CharCodes.FormFeed] = 1),
          (IsWhitespace[syntax_CharCodes.CarriageReturn] = 1),
          (IsWhitespace[syntax_CharCodes.Space] = 1))
        for (
          var IsIrregular = new Uint8Array(256), Irregular_idx = 0;
          Irregular_idx < 256;
          Irregular_idx++
        )
          IsIrregular[Irregular_idx] =
            IsWhitespace[Irregular_idx] || IsDelimiter[Irregular_idx] ? 1 : 0
        IsIrregular[syntax_CharCodes.Hash] = 1
        var decodeName = function (name) {
            return name.replace(/#([\dABCDEF]{2})/g, function (_, hex) {
              return (function (hex) {
                return charFromCode(parseInt(hex, 16))
              })(hex)
            })
          },
          isRegularChar = function (charCode) {
            return (
              charCode >= syntax_CharCodes.ExclamationPoint &&
              charCode <= syntax_CharCodes.Tilde &&
              !IsIrregular[charCode]
            )
          },
          PDFName_ENFORCER = {},
          pool = new Map(),
          PDFName = (function (_super) {
            function PDFName(enforcer, name) {
              var _this = this
              if (enforcer !== PDFName_ENFORCER)
                throw new PrivateConstructorError('PDFName')
              _this = _super.call(this) || this
              for (
                var encodedName = '/', idx = 0, len = name.length;
                idx < len;
                idx++
              ) {
                var character = name[idx],
                  code = toCharCode(character)
                encodedName += isRegularChar(code)
                  ? character
                  : '#' + strings_toHexString(code)
              }
              return ((_this.encodedName = encodedName), _this)
            }
            return (
              __extends(PDFName, _super),
              (PDFName.prototype.asBytes = function () {
                for (
                  var bytes = [],
                    hex = '',
                    escaped = !1,
                    pushByte = function (byte) {
                      ;(void 0 !== byte && bytes.push(byte), (escaped = !1))
                    },
                    idx = 1,
                    len = this.encodedName.length;
                  idx < len;
                  idx++
                ) {
                  var char = this.encodedName[idx],
                    byte = toCharCode(char),
                    nextChar = this.encodedName[idx + 1]
                  escaped
                    ? (byte >= syntax_CharCodes.Zero &&
                        byte <= syntax_CharCodes.Nine) ||
                      (byte >= syntax_CharCodes.a &&
                        byte <= syntax_CharCodes.f) ||
                      (byte >= syntax_CharCodes.A && byte <= syntax_CharCodes.F)
                      ? (2 !== (hex += char).length &&
                          ((nextChar >= '0' && nextChar <= '9') ||
                            (nextChar >= 'a' && nextChar <= 'f') ||
                            (nextChar >= 'A' && nextChar <= 'F'))) ||
                        (pushByte(parseInt(hex, 16)), (hex = ''))
                      : pushByte(byte)
                    : byte === syntax_CharCodes.Hash
                      ? (escaped = !0)
                      : pushByte(byte)
                }
                return new Uint8Array(bytes)
              }),
              (PDFName.prototype.decodeText = function () {
                var bytes = this.asBytes()
                return String.fromCharCode.apply(String, Array.from(bytes))
              }),
              (PDFName.prototype.asString = function () {
                return this.encodedName
              }),
              (PDFName.prototype.value = function () {
                return this.encodedName
              }),
              (PDFName.prototype.clone = function () {
                return this
              }),
              (PDFName.prototype.toString = function () {
                return this.encodedName
              }),
              (PDFName.prototype.sizeInBytes = function () {
                return this.encodedName.length
              }),
              (PDFName.prototype.copyBytesInto = function (buffer, offset) {
                return (
                  (offset += copyStringIntoBuffer(
                    this.encodedName,
                    buffer,
                    offset
                  )),
                  this.encodedName.length
                )
              }),
              (PDFName.of = function (name) {
                var decodedValue = decodeName(name),
                  instance = pool.get(decodedValue)
                return (
                  instance ||
                    ((instance = new PDFName(PDFName_ENFORCER, decodedValue)),
                    pool.set(decodedValue, instance)),
                  instance
                )
              }),
              (PDFName.Length = PDFName.of('Length')),
              (PDFName.FlateDecode = PDFName.of('FlateDecode')),
              (PDFName.Resources = PDFName.of('Resources')),
              (PDFName.Font = PDFName.of('Font')),
              (PDFName.XObject = PDFName.of('XObject')),
              (PDFName.ExtGState = PDFName.of('ExtGState')),
              (PDFName.Contents = PDFName.of('Contents')),
              (PDFName.Type = PDFName.of('Type')),
              (PDFName.Parent = PDFName.of('Parent')),
              (PDFName.MediaBox = PDFName.of('MediaBox')),
              (PDFName.Page = PDFName.of('Page')),
              (PDFName.Annots = PDFName.of('Annots')),
              (PDFName.TrimBox = PDFName.of('TrimBox')),
              (PDFName.ArtBox = PDFName.of('ArtBox')),
              (PDFName.BleedBox = PDFName.of('BleedBox')),
              (PDFName.CropBox = PDFName.of('CropBox')),
              (PDFName.Rotate = PDFName.of('Rotate')),
              (PDFName.Title = PDFName.of('Title')),
              (PDFName.Author = PDFName.of('Author')),
              (PDFName.Subject = PDFName.of('Subject')),
              (PDFName.Creator = PDFName.of('Creator')),
              (PDFName.Keywords = PDFName.of('Keywords')),
              (PDFName.Producer = PDFName.of('Producer')),
              (PDFName.CreationDate = PDFName.of('CreationDate')),
              (PDFName.ModDate = PDFName.of('ModDate')),
              PDFName
            )
          })(objects_PDFObject)
        const objects_PDFName = PDFName
        const objects_PDFNull = new ((function (_super) {
          function PDFNull() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFNull, _super),
            (PDFNull.prototype.asNull = function () {
              return null
            }),
            (PDFNull.prototype.clone = function () {
              return this
            }),
            (PDFNull.prototype.toString = function () {
              return 'null'
            }),
            (PDFNull.prototype.sizeInBytes = function () {
              return 4
            }),
            (PDFNull.prototype.copyBytesInto = function (buffer, offset) {
              return (
                (buffer[offset++] = syntax_CharCodes.n),
                (buffer[offset++] = syntax_CharCodes.u),
                (buffer[offset++] = syntax_CharCodes.l),
                (buffer[offset++] = syntax_CharCodes.l),
                4
              )
            }),
            PDFNull
          )
        })(objects_PDFObject))()
        var PDFDict = (function (_super) {
          function PDFDict(map, context) {
            var _this = _super.call(this) || this
            return ((_this.dict = map), (_this.context = context), _this)
          }
          return (
            __extends(PDFDict, _super),
            (PDFDict.prototype.keys = function () {
              return Array.from(this.dict.keys())
            }),
            (PDFDict.prototype.values = function () {
              return Array.from(this.dict.values())
            }),
            (PDFDict.prototype.entries = function () {
              return Array.from(this.dict.entries())
            }),
            (PDFDict.prototype.set = function (key, value) {
              this.dict.set(key, value)
            }),
            (PDFDict.prototype.get = function (key, preservePDFNull) {
              void 0 === preservePDFNull && (preservePDFNull = !1)
              var value = this.dict.get(key)
              if (value !== objects_PDFNull || preservePDFNull) return value
            }),
            (PDFDict.prototype.has = function (key) {
              var value = this.dict.get(key)
              return void 0 !== value && value !== objects_PDFNull
            }),
            (PDFDict.prototype.lookupMaybe = function (key) {
              for (var _a, types = [], _i = 1; _i < arguments.length; _i++)
                types[_i - 1] = arguments[_i]
              var preservePDFNull = types.includes(objects_PDFNull),
                value = (_a = this.context).lookupMaybe.apply(
                  _a,
                  __spreadArrays([this.get(key, preservePDFNull)], types)
                )
              if (value !== objects_PDFNull || preservePDFNull) return value
            }),
            (PDFDict.prototype.lookup = function (key) {
              for (var _a, types = [], _i = 1; _i < arguments.length; _i++)
                types[_i - 1] = arguments[_i]
              var preservePDFNull = types.includes(objects_PDFNull),
                value = (_a = this.context).lookup.apply(
                  _a,
                  __spreadArrays([this.get(key, preservePDFNull)], types)
                )
              if (value !== objects_PDFNull || preservePDFNull) return value
            }),
            (PDFDict.prototype.delete = function (key) {
              return this.dict.delete(key)
            }),
            (PDFDict.prototype.asMap = function () {
              return new Map(this.dict)
            }),
            (PDFDict.prototype.uniqueKey = function (tag) {
              void 0 === tag && (tag = '')
              for (
                var existingKeys = this.keys(),
                  key = objects_PDFName.of(
                    this.context.addRandomSuffix(tag, 10)
                  );
                existingKeys.includes(key);

              )
                key = objects_PDFName.of(this.context.addRandomSuffix(tag, 10))
              return key
            }),
            (PDFDict.prototype.clone = function (context) {
              for (
                var clone = PDFDict.withContext(context || this.context),
                  entries = this.entries(),
                  idx = 0,
                  len = entries.length;
                idx < len;
                idx++
              ) {
                var _a = entries[idx],
                  key = _a[0],
                  value = _a[1]
                clone.set(key, value)
              }
              return clone
            }),
            (PDFDict.prototype.toString = function () {
              for (
                var dictString = '<<\n',
                  entries = this.entries(),
                  idx = 0,
                  len = entries.length;
                idx < len;
                idx++
              ) {
                var _a = entries[idx],
                  key = _a[0],
                  value = _a[1]
                dictString += key.toString() + ' ' + value.toString() + '\n'
              }
              return (dictString += '>>')
            }),
            (PDFDict.prototype.sizeInBytes = function () {
              for (
                var size = 5,
                  entries = this.entries(),
                  idx = 0,
                  len = entries.length;
                idx < len;
                idx++
              ) {
                var _a = entries[idx],
                  key = _a[0],
                  value = _a[1]
                size += key.sizeInBytes() + value.sizeInBytes() + 2
              }
              return size
            }),
            (PDFDict.prototype.copyBytesInto = function (buffer, offset) {
              var initialOffset = offset
              ;((buffer[offset++] = syntax_CharCodes.LessThan),
                (buffer[offset++] = syntax_CharCodes.LessThan),
                (buffer[offset++] = syntax_CharCodes.Newline))
              for (
                var entries = this.entries(), idx = 0, len = entries.length;
                idx < len;
                idx++
              ) {
                var _a = entries[idx],
                  key = _a[0],
                  value = _a[1]
                ;((offset += key.copyBytesInto(buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Space),
                  (offset += value.copyBytesInto(buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Newline))
              }
              return (
                (buffer[offset++] = syntax_CharCodes.GreaterThan),
                (buffer[offset++] = syntax_CharCodes.GreaterThan),
                offset - initialOffset
              )
            }),
            (PDFDict.withContext = function (context) {
              return new PDFDict(new Map(), context)
            }),
            (PDFDict.fromMapWithContext = function (map, context) {
              return new PDFDict(map, context)
            }),
            PDFDict
          )
        })(objects_PDFObject)
        const objects_PDFDict = PDFDict
        var PDFStream = (function (_super) {
          function PDFStream(dict) {
            var _this = _super.call(this) || this
            return ((_this.dict = dict), _this)
          }
          return (
            __extends(PDFStream, _super),
            (PDFStream.prototype.clone = function (_context) {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'clone'
              )
            }),
            (PDFStream.prototype.getContentsString = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'getContentsString'
              )
            }),
            (PDFStream.prototype.getContents = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'getContents'
              )
            }),
            (PDFStream.prototype.getContentsSize = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'getContentsSize'
              )
            }),
            (PDFStream.prototype.updateDict = function () {
              var contentsSize = this.getContentsSize()
              this.dict.set(
                objects_PDFName.Length,
                objects_PDFNumber.of(contentsSize)
              )
            }),
            (PDFStream.prototype.sizeInBytes = function () {
              return (
                this.updateDict(),
                this.dict.sizeInBytes() + this.getContentsSize() + 18
              )
            }),
            (PDFStream.prototype.toString = function () {
              this.updateDict()
              var streamString = this.dict.toString()
              return (
                (streamString += '\nstream\n'),
                (streamString += this.getContentsString()),
                (streamString += '\nendstream')
              )
            }),
            (PDFStream.prototype.copyBytesInto = function (buffer, offset) {
              this.updateDict()
              var initialOffset = offset
              ;((offset += this.dict.copyBytesInto(buffer, offset)),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (buffer[offset++] = syntax_CharCodes.s),
                (buffer[offset++] = syntax_CharCodes.t),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.a),
                (buffer[offset++] = syntax_CharCodes.m),
                (buffer[offset++] = syntax_CharCodes.Newline))
              for (
                var contents = this.getContents(),
                  idx = 0,
                  len = contents.length;
                idx < len;
                idx++
              )
                buffer[offset++] = contents[idx]
              return (
                (buffer[offset++] = syntax_CharCodes.Newline),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.n),
                (buffer[offset++] = syntax_CharCodes.d),
                (buffer[offset++] = syntax_CharCodes.s),
                (buffer[offset++] = syntax_CharCodes.t),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.a),
                (buffer[offset++] = syntax_CharCodes.m),
                offset - initialOffset
              )
            }),
            PDFStream
          )
        })(objects_PDFObject)
        const objects_PDFStream = PDFStream
        const objects_PDFRawStream = (function (_super) {
          function PDFRawStream(dict, contents) {
            var _this = _super.call(this, dict) || this
            return ((_this.contents = contents), _this)
          }
          return (
            __extends(PDFRawStream, _super),
            (PDFRawStream.prototype.asUint8Array = function () {
              return this.contents.slice()
            }),
            (PDFRawStream.prototype.clone = function (context) {
              return PDFRawStream.of(
                this.dict.clone(context),
                this.contents.slice()
              )
            }),
            (PDFRawStream.prototype.getContentsString = function () {
              return arrayAsString(this.contents)
            }),
            (PDFRawStream.prototype.getContents = function () {
              return this.contents
            }),
            (PDFRawStream.prototype.getContentsSize = function () {
              return this.contents.length
            }),
            (PDFRawStream.of = function (dict, contents) {
              return new PDFRawStream(dict, contents)
            }),
            PDFRawStream
          )
        })(objects_PDFStream)
        var PDFRef_ENFORCER = {},
          PDFRef_pool = new Map()
        const objects_PDFRef = (function (_super) {
          function PDFRef(enforcer, objectNumber, generationNumber) {
            var _this = this
            if (enforcer !== PDFRef_ENFORCER)
              throw new PrivateConstructorError('PDFRef')
            return (
              ((_this = _super.call(this) || this).objectNumber = objectNumber),
              (_this.generationNumber = generationNumber),
              (_this.tag = objectNumber + ' ' + generationNumber + ' R'),
              _this
            )
          }
          return (
            __extends(PDFRef, _super),
            (PDFRef.prototype.clone = function () {
              return this
            }),
            (PDFRef.prototype.toString = function () {
              return this.tag
            }),
            (PDFRef.prototype.sizeInBytes = function () {
              return this.tag.length
            }),
            (PDFRef.prototype.copyBytesInto = function (buffer, offset) {
              return (
                (offset += copyStringIntoBuffer(this.tag, buffer, offset)),
                this.tag.length
              )
            }),
            (PDFRef.of = function (objectNumber, generationNumber) {
              void 0 === generationNumber && (generationNumber = 0)
              var tag = objectNumber + ' ' + generationNumber + ' R',
                instance = PDFRef_pool.get(tag)
              return (
                instance ||
                  ((instance = new PDFRef(
                    PDFRef_ENFORCER,
                    objectNumber,
                    generationNumber
                  )),
                  PDFRef_pool.set(tag, instance)),
                instance
              )
            }),
            PDFRef
          )
        })(objects_PDFObject)
        var PDFOperator_PDFOperator = (function () {
          function PDFOperator(name, args) {
            ;((this.name = name), (this.args = args || []))
          }
          return (
            (PDFOperator.prototype.clone = function (context) {
              for (
                var args = new Array(this.args.length),
                  idx = 0,
                  len = args.length;
                idx < len;
                idx++
              ) {
                var arg = this.args[idx]
                args[idx] =
                  arg instanceof objects_PDFObject ? arg.clone(context) : arg
              }
              return PDFOperator.of(this.name, args)
            }),
            (PDFOperator.prototype.toString = function () {
              for (
                var value = '', idx = 0, len = this.args.length;
                idx < len;
                idx++
              )
                value += String(this.args[idx]) + ' '
              return (value += this.name)
            }),
            (PDFOperator.prototype.sizeInBytes = function () {
              for (
                var size = 0, idx = 0, len = this.args.length;
                idx < len;
                idx++
              ) {
                var arg = this.args[idx]
                size +=
                  (arg instanceof objects_PDFObject
                    ? arg.sizeInBytes()
                    : arg.length) + 1
              }
              return (size += this.name.length)
            }),
            (PDFOperator.prototype.copyBytesInto = function (buffer, offset) {
              for (
                var initialOffset = offset, idx = 0, len = this.args.length;
                idx < len;
                idx++
              ) {
                var arg = this.args[idx]
                ;((offset +=
                  arg instanceof objects_PDFObject
                    ? arg.copyBytesInto(buffer, offset)
                    : copyStringIntoBuffer(arg, buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Space))
              }
              return (
                (offset += copyStringIntoBuffer(this.name, buffer, offset)) -
                initialOffset
              )
            }),
            (PDFOperator.of = function (name, args) {
              return new PDFOperator(name, args)
            }),
            PDFOperator
          )
        })()
        const operators_PDFOperator = PDFOperator_PDFOperator
        var PDFOperatorNames
        !(function (PDFOperatorNames) {
          ;((PDFOperatorNames.NonStrokingColor = 'sc'),
            (PDFOperatorNames.NonStrokingColorN = 'scn'),
            (PDFOperatorNames.NonStrokingColorRgb = 'rg'),
            (PDFOperatorNames.NonStrokingColorGray = 'g'),
            (PDFOperatorNames.NonStrokingColorCmyk = 'k'),
            (PDFOperatorNames.NonStrokingColorspace = 'cs'),
            (PDFOperatorNames.StrokingColor = 'SC'),
            (PDFOperatorNames.StrokingColorN = 'SCN'),
            (PDFOperatorNames.StrokingColorRgb = 'RG'),
            (PDFOperatorNames.StrokingColorGray = 'G'),
            (PDFOperatorNames.StrokingColorCmyk = 'K'),
            (PDFOperatorNames.StrokingColorspace = 'CS'),
            (PDFOperatorNames.BeginMarkedContentSequence = 'BDC'),
            (PDFOperatorNames.BeginMarkedContent = 'BMC'),
            (PDFOperatorNames.EndMarkedContent = 'EMC'),
            (PDFOperatorNames.MarkedContentPointWithProps = 'DP'),
            (PDFOperatorNames.MarkedContentPoint = 'MP'),
            (PDFOperatorNames.DrawObject = 'Do'),
            (PDFOperatorNames.ConcatTransformationMatrix = 'cm'),
            (PDFOperatorNames.PopGraphicsState = 'Q'),
            (PDFOperatorNames.PushGraphicsState = 'q'),
            (PDFOperatorNames.SetFlatness = 'i'),
            (PDFOperatorNames.SetGraphicsStateParams = 'gs'),
            (PDFOperatorNames.SetLineCapStyle = 'J'),
            (PDFOperatorNames.SetLineDashPattern = 'd'),
            (PDFOperatorNames.SetLineJoinStyle = 'j'),
            (PDFOperatorNames.SetLineMiterLimit = 'M'),
            (PDFOperatorNames.SetLineWidth = 'w'),
            (PDFOperatorNames.SetTextMatrix = 'Tm'),
            (PDFOperatorNames.SetRenderingIntent = 'ri'),
            (PDFOperatorNames.AppendRectangle = 're'),
            (PDFOperatorNames.BeginInlineImage = 'BI'),
            (PDFOperatorNames.BeginInlineImageData = 'ID'),
            (PDFOperatorNames.EndInlineImage = 'EI'),
            (PDFOperatorNames.ClipEvenOdd = 'W*'),
            (PDFOperatorNames.ClipNonZero = 'W'),
            (PDFOperatorNames.CloseAndStroke = 's'),
            (PDFOperatorNames.CloseFillEvenOddAndStroke = 'b*'),
            (PDFOperatorNames.CloseFillNonZeroAndStroke = 'b'),
            (PDFOperatorNames.ClosePath = 'h'),
            (PDFOperatorNames.AppendBezierCurve = 'c'),
            (PDFOperatorNames.CurveToReplicateFinalPoint = 'y'),
            (PDFOperatorNames.CurveToReplicateInitialPoint = 'v'),
            (PDFOperatorNames.EndPath = 'n'),
            (PDFOperatorNames.FillEvenOddAndStroke = 'B*'),
            (PDFOperatorNames.FillEvenOdd = 'f*'),
            (PDFOperatorNames.FillNonZeroAndStroke = 'B'),
            (PDFOperatorNames.FillNonZero = 'f'),
            (PDFOperatorNames.LegacyFillNonZero = 'F'),
            (PDFOperatorNames.LineTo = 'l'),
            (PDFOperatorNames.MoveTo = 'm'),
            (PDFOperatorNames.ShadingFill = 'sh'),
            (PDFOperatorNames.StrokePath = 'S'),
            (PDFOperatorNames.BeginText = 'BT'),
            (PDFOperatorNames.EndText = 'ET'),
            (PDFOperatorNames.MoveText = 'Td'),
            (PDFOperatorNames.MoveTextSetLeading = 'TD'),
            (PDFOperatorNames.NextLine = 'T*'),
            (PDFOperatorNames.SetCharacterSpacing = 'Tc'),
            (PDFOperatorNames.SetFontAndSize = 'Tf'),
            (PDFOperatorNames.SetTextHorizontalScaling = 'Tz'),
            (PDFOperatorNames.SetTextLineHeight = 'TL'),
            (PDFOperatorNames.SetTextRenderingMode = 'Tr'),
            (PDFOperatorNames.SetTextRise = 'Ts'),
            (PDFOperatorNames.SetWordSpacing = 'Tw'),
            (PDFOperatorNames.ShowText = 'Tj'),
            (PDFOperatorNames.ShowTextAdjusted = 'TJ'),
            (PDFOperatorNames.ShowTextLine = "'"),
            (PDFOperatorNames.ShowTextLineAndSpace = '"'),
            (PDFOperatorNames.Type3D0 = 'd0'),
            (PDFOperatorNames.Type3D1 = 'd1'),
            (PDFOperatorNames.BeginCompatibilitySection = 'BX'),
            (PDFOperatorNames.EndCompatibilitySection = 'EX'))
        })(PDFOperatorNames || (PDFOperatorNames = {}))
        const operators_PDFOperatorNames = PDFOperatorNames
        const structures_PDFFlateStream = (function (_super) {
          function PDFFlateStream(dict, encode) {
            var _this = _super.call(this, dict) || this
            return (
              (_this.computeContents = function () {
                var unencodedContents = _this.getUnencodedContents()
                return _this.encode
                  ? pako_default().deflate(unencodedContents)
                  : unencodedContents
              }),
              (_this.encode = encode),
              encode &&
                dict.set(
                  objects_PDFName.of('Filter'),
                  objects_PDFName.of('FlateDecode')
                ),
              (_this.contentsCache = utils_Cache.populatedBy(
                _this.computeContents
              )),
              _this
            )
          }
          return (
            __extends(PDFFlateStream, _super),
            (PDFFlateStream.prototype.getContents = function () {
              return this.contentsCache.access()
            }),
            (PDFFlateStream.prototype.getContentsSize = function () {
              return this.contentsCache.access().length
            }),
            (PDFFlateStream.prototype.getUnencodedContents = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'getUnencodedContents'
              )
            }),
            PDFFlateStream
          )
        })(objects_PDFStream)
        var PDFContentStream = (function (_super) {
          function PDFContentStream(dict, operators, encode) {
            void 0 === encode && (encode = !0)
            var _this = _super.call(this, dict, encode) || this
            return ((_this.operators = operators), _this)
          }
          return (
            __extends(PDFContentStream, _super),
            (PDFContentStream.prototype.push = function () {
              for (var _a, operators = [], _i = 0; _i < arguments.length; _i++)
                operators[_i] = arguments[_i]
              ;(_a = this.operators).push.apply(_a, operators)
            }),
            (PDFContentStream.prototype.clone = function (context) {
              for (
                var operators = new Array(this.operators.length),
                  idx = 0,
                  len = this.operators.length;
                idx < len;
                idx++
              )
                operators[idx] = this.operators[idx].clone(context)
              var dict = this.dict,
                encode = this.encode
              return PDFContentStream.of(dict.clone(context), operators, encode)
            }),
            (PDFContentStream.prototype.getContentsString = function () {
              for (
                var value = '', idx = 0, len = this.operators.length;
                idx < len;
                idx++
              )
                value += this.operators[idx] + '\n'
              return value
            }),
            (PDFContentStream.prototype.getUnencodedContents = function () {
              for (
                var buffer = new Uint8Array(this.getUnencodedContentsSize()),
                  offset = 0,
                  idx = 0,
                  len = this.operators.length;
                idx < len;
                idx++
              )
                ((offset += this.operators[idx].copyBytesInto(buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Newline))
              return buffer
            }),
            (PDFContentStream.prototype.getUnencodedContentsSize = function () {
              for (
                var size = 0, idx = 0, len = this.operators.length;
                idx < len;
                idx++
              )
                size += this.operators[idx].sizeInBytes() + 1
              return size
            }),
            (PDFContentStream.of = function (dict, operators, encode) {
              return (
                void 0 === encode && (encode = !0),
                new PDFContentStream(dict, operators, encode)
              )
            }),
            PDFContentStream
          )
        })(structures_PDFFlateStream)
        const structures_PDFContentStream = PDFContentStream
        var SimpleRNG = (function () {
            function SimpleRNG(seed) {
              this.seed = seed
            }
            return (
              (SimpleRNG.prototype.nextInt = function () {
                var x = 1e4 * Math.sin(this.seed++)
                return x - Math.floor(x)
              }),
              (SimpleRNG.withSeed = function (seed) {
                return new SimpleRNG(seed)
              }),
              SimpleRNG
            )
          })(),
          byAscendingObjectNumber = function (_a, _b) {
            var a = _a[0],
              b = _b[0]
            return a.objectNumber - b.objectNumber
          },
          PDFContext = (function () {
            function PDFContext() {
              ;((this.largestObjectNumber = 0),
                (this.header = document_PDFHeader.forVersion(1, 7)),
                (this.trailerInfo = {}),
                (this.indirectObjects = new Map()),
                (this.rng = SimpleRNG.withSeed(1)))
            }
            return (
              (PDFContext.prototype.assign = function (ref, object) {
                ;(this.indirectObjects.set(ref, object),
                  ref.objectNumber > this.largestObjectNumber &&
                    (this.largestObjectNumber = ref.objectNumber))
              }),
              (PDFContext.prototype.nextRef = function () {
                return (
                  (this.largestObjectNumber += 1),
                  objects_PDFRef.of(this.largestObjectNumber)
                )
              }),
              (PDFContext.prototype.register = function (object) {
                var ref = this.nextRef()
                return (this.assign(ref, object), ref)
              }),
              (PDFContext.prototype.delete = function (ref) {
                return this.indirectObjects.delete(ref)
              }),
              (PDFContext.prototype.lookupMaybe = function (ref) {
                for (var types = [], _i = 1; _i < arguments.length; _i++)
                  types[_i - 1] = arguments[_i]
                var preservePDFNull = types.includes(objects_PDFNull),
                  result =
                    ref instanceof objects_PDFRef
                      ? this.indirectObjects.get(ref)
                      : ref
                if (result && (result !== objects_PDFNull || preservePDFNull)) {
                  for (var idx = 0, len = types.length; idx < len; idx++) {
                    var type = types[idx]
                    if (type === objects_PDFNull) {
                      if (result === objects_PDFNull) return result
                    } else if (result instanceof type) return result
                  }
                  throw new UnexpectedObjectTypeError(types, result)
                }
              }),
              (PDFContext.prototype.lookup = function (ref) {
                for (var types = [], _i = 1; _i < arguments.length; _i++)
                  types[_i - 1] = arguments[_i]
                var result =
                  ref instanceof objects_PDFRef
                    ? this.indirectObjects.get(ref)
                    : ref
                if (0 === types.length) return result
                for (var idx = 0, len = types.length; idx < len; idx++) {
                  var type = types[idx]
                  if (type === objects_PDFNull) {
                    if (result === objects_PDFNull) return result
                  } else if (result instanceof type) return result
                }
                throw new UnexpectedObjectTypeError(types, result)
              }),
              (PDFContext.prototype.getObjectRef = function (pdfObject) {
                for (
                  var entries = Array.from(this.indirectObjects.entries()),
                    idx = 0,
                    len = entries.length;
                  idx < len;
                  idx++
                ) {
                  var _a = entries[idx],
                    ref = _a[0]
                  if (_a[1] === pdfObject) return ref
                }
              }),
              (PDFContext.prototype.enumerateIndirectObjects = function () {
                return Array.from(this.indirectObjects.entries()).sort(
                  byAscendingObjectNumber
                )
              }),
              (PDFContext.prototype.obj = function (literal) {
                if (literal instanceof objects_PDFObject) return literal
                if (null == literal) return objects_PDFNull
                if ('string' == typeof literal)
                  return objects_PDFName.of(literal)
                if ('number' == typeof literal)
                  return objects_PDFNumber.of(literal)
                if ('boolean' == typeof literal)
                  return literal ? objects_PDFBool.True : objects_PDFBool.False
                if (Array.isArray(literal)) {
                  for (
                    var array = objects_PDFArray.withContext(this),
                      idx = 0,
                      len = literal.length;
                    idx < len;
                    idx++
                  )
                    array.push(this.obj(literal[idx]))
                  return array
                }
                var dict = objects_PDFDict.withContext(this),
                  keys = Object.keys(literal)
                for (idx = 0, len = keys.length; idx < len; idx++) {
                  var key = keys[idx],
                    value = literal[key]
                  void 0 !== value &&
                    dict.set(objects_PDFName.of(key), this.obj(value))
                }
                return dict
              }),
              (PDFContext.prototype.stream = function (contents, dict) {
                return (
                  void 0 === dict && (dict = {}),
                  objects_PDFRawStream.of(
                    this.obj(dict),
                    typedArrayFor(contents)
                  )
                )
              }),
              (PDFContext.prototype.flateStream = function (contents, dict) {
                return (
                  void 0 === dict && (dict = {}),
                  this.stream(
                    pako_default().deflate(typedArrayFor(contents)),
                    __assign(__assign({}, dict), { Filter: 'FlateDecode' })
                  )
                )
              }),
              (PDFContext.prototype.contentStream = function (operators, dict) {
                return (
                  void 0 === dict && (dict = {}),
                  structures_PDFContentStream.of(this.obj(dict), operators)
                )
              }),
              (PDFContext.prototype.formXObject = function (operators, dict) {
                return (
                  void 0 === dict && (dict = {}),
                  this.contentStream(
                    operators,
                    __assign(
                      __assign(
                        {
                          BBox: this.obj([0, 0, 0, 0]),
                          Matrix: this.obj([1, 0, 0, 1, 0, 0]),
                        },
                        dict
                      ),
                      { Type: 'XObject', Subtype: 'Form' }
                    )
                  )
                )
              }),
              (PDFContext.prototype.getPushGraphicsStateContentStream =
                function () {
                  if (this.pushGraphicsStateContentStreamRef)
                    return this.pushGraphicsStateContentStreamRef
                  var dict = this.obj({}),
                    op = operators_PDFOperator.of(
                      operators_PDFOperatorNames.PushGraphicsState
                    ),
                    stream = structures_PDFContentStream.of(dict, [op])
                  return (
                    (this.pushGraphicsStateContentStreamRef =
                      this.register(stream)),
                    this.pushGraphicsStateContentStreamRef
                  )
                }),
              (PDFContext.prototype.getPopGraphicsStateContentStream =
                function () {
                  if (this.popGraphicsStateContentStreamRef)
                    return this.popGraphicsStateContentStreamRef
                  var dict = this.obj({}),
                    op = operators_PDFOperator.of(
                      operators_PDFOperatorNames.PopGraphicsState
                    ),
                    stream = structures_PDFContentStream.of(dict, [op])
                  return (
                    (this.popGraphicsStateContentStreamRef =
                      this.register(stream)),
                    this.popGraphicsStateContentStreamRef
                  )
                }),
              (PDFContext.prototype.addRandomSuffix = function (
                prefix,
                suffixLength
              ) {
                return (
                  void 0 === suffixLength && (suffixLength = 4),
                  prefix +
                    '-' +
                    Math.floor(this.rng.nextInt() * Math.pow(10, suffixLength))
                )
              }),
              (PDFContext.create = function () {
                return new PDFContext()
              }),
              PDFContext
            )
          })()
        const core_PDFContext = PDFContext
        var PDFPageLeaf = (function (_super) {
          function PDFPageLeaf(map, context, autoNormalizeCTM) {
            void 0 === autoNormalizeCTM && (autoNormalizeCTM = !0)
            var _this = _super.call(this, map, context) || this
            return (
              (_this.normalized = !1),
              (_this.autoNormalizeCTM = autoNormalizeCTM),
              _this
            )
          }
          return (
            __extends(PDFPageLeaf, _super),
            (PDFPageLeaf.prototype.clone = function (context) {
              for (
                var clone = PDFPageLeaf.fromMapWithContext(
                    new Map(),
                    context || this.context,
                    this.autoNormalizeCTM
                  ),
                  entries = this.entries(),
                  idx = 0,
                  len = entries.length;
                idx < len;
                idx++
              ) {
                var _a = entries[idx],
                  key = _a[0],
                  value = _a[1]
                clone.set(key, value)
              }
              return clone
            }),
            (PDFPageLeaf.prototype.Parent = function () {
              return this.lookupMaybe(objects_PDFName.Parent, objects_PDFDict)
            }),
            (PDFPageLeaf.prototype.Contents = function () {
              return this.lookup(objects_PDFName.of('Contents'))
            }),
            (PDFPageLeaf.prototype.Annots = function () {
              return this.lookupMaybe(objects_PDFName.Annots, objects_PDFArray)
            }),
            (PDFPageLeaf.prototype.BleedBox = function () {
              return this.lookupMaybe(
                objects_PDFName.BleedBox,
                objects_PDFArray
              )
            }),
            (PDFPageLeaf.prototype.TrimBox = function () {
              return this.lookupMaybe(objects_PDFName.TrimBox, objects_PDFArray)
            }),
            (PDFPageLeaf.prototype.ArtBox = function () {
              return this.lookupMaybe(objects_PDFName.ArtBox, objects_PDFArray)
            }),
            (PDFPageLeaf.prototype.Resources = function () {
              var dictOrRef = this.getInheritableAttribute(
                objects_PDFName.Resources
              )
              return this.context.lookupMaybe(dictOrRef, objects_PDFDict)
            }),
            (PDFPageLeaf.prototype.MediaBox = function () {
              var arrayOrRef = this.getInheritableAttribute(
                objects_PDFName.MediaBox
              )
              return this.context.lookup(arrayOrRef, objects_PDFArray)
            }),
            (PDFPageLeaf.prototype.CropBox = function () {
              var arrayOrRef = this.getInheritableAttribute(
                objects_PDFName.CropBox
              )
              return this.context.lookupMaybe(arrayOrRef, objects_PDFArray)
            }),
            (PDFPageLeaf.prototype.Rotate = function () {
              var numberOrRef = this.getInheritableAttribute(
                objects_PDFName.Rotate
              )
              return this.context.lookupMaybe(numberOrRef, objects_PDFNumber)
            }),
            (PDFPageLeaf.prototype.getInheritableAttribute = function (name) {
              var attribute
              return (
                this.ascend(function (node) {
                  attribute || (attribute = node.get(name))
                }),
                attribute
              )
            }),
            (PDFPageLeaf.prototype.setParent = function (parentRef) {
              this.set(objects_PDFName.Parent, parentRef)
            }),
            (PDFPageLeaf.prototype.addContentStream = function (
              contentStreamRef
            ) {
              var Contents =
                this.normalizedEntries().Contents || this.context.obj([])
              ;(this.set(objects_PDFName.Contents, Contents),
                Contents.push(contentStreamRef))
            }),
            (PDFPageLeaf.prototype.wrapContentStreams = function (
              startStream,
              endStream
            ) {
              var Contents = this.Contents()
              return (
                Contents instanceof objects_PDFArray &&
                (Contents.insert(0, startStream), Contents.push(endStream), !0)
              )
            }),
            (PDFPageLeaf.prototype.addAnnot = function (annotRef) {
              this.normalizedEntries().Annots.push(annotRef)
            }),
            (PDFPageLeaf.prototype.removeAnnot = function (annotRef) {
              var Annots = this.normalizedEntries().Annots,
                index = Annots.indexOf(annotRef)
              void 0 !== index && Annots.remove(index)
            }),
            (PDFPageLeaf.prototype.setFontDictionary = function (
              name,
              fontDictRef
            ) {
              this.normalizedEntries().Font.set(name, fontDictRef)
            }),
            (PDFPageLeaf.prototype.newFontDictionaryKey = function (tag) {
              return this.normalizedEntries().Font.uniqueKey(tag)
            }),
            (PDFPageLeaf.prototype.newFontDictionary = function (
              tag,
              fontDictRef
            ) {
              var key = this.newFontDictionaryKey(tag)
              return (this.setFontDictionary(key, fontDictRef), key)
            }),
            (PDFPageLeaf.prototype.setXObject = function (name, xObjectRef) {
              this.normalizedEntries().XObject.set(name, xObjectRef)
            }),
            (PDFPageLeaf.prototype.newXObjectKey = function (tag) {
              return this.normalizedEntries().XObject.uniqueKey(tag)
            }),
            (PDFPageLeaf.prototype.newXObject = function (tag, xObjectRef) {
              var key = this.newXObjectKey(tag)
              return (this.setXObject(key, xObjectRef), key)
            }),
            (PDFPageLeaf.prototype.setExtGState = function (
              name,
              extGStateRef
            ) {
              this.normalizedEntries().ExtGState.set(name, extGStateRef)
            }),
            (PDFPageLeaf.prototype.newExtGStateKey = function (tag) {
              return this.normalizedEntries().ExtGState.uniqueKey(tag)
            }),
            (PDFPageLeaf.prototype.newExtGState = function (tag, extGStateRef) {
              var key = this.newExtGStateKey(tag)
              return (this.setExtGState(key, extGStateRef), key)
            }),
            (PDFPageLeaf.prototype.ascend = function (visitor) {
              visitor(this)
              var Parent = this.Parent()
              Parent && Parent.ascend(visitor)
            }),
            (PDFPageLeaf.prototype.normalize = function () {
              if (!this.normalized) {
                var context = this.context,
                  contentsRef = this.get(objects_PDFName.Contents)
                ;(this.context.lookup(contentsRef) instanceof
                  objects_PDFStream &&
                  this.set(
                    objects_PDFName.Contents,
                    context.obj([contentsRef])
                  ),
                  this.autoNormalizeCTM &&
                    this.wrapContentStreams(
                      this.context.getPushGraphicsStateContentStream(),
                      this.context.getPopGraphicsStateContentStream()
                    ))
                var dictOrRef = this.getInheritableAttribute(
                    objects_PDFName.Resources
                  ),
                  Resources =
                    context.lookupMaybe(dictOrRef, objects_PDFDict) ||
                    context.obj({})
                this.set(objects_PDFName.Resources, Resources)
                var Font =
                  Resources.lookupMaybe(
                    objects_PDFName.Font,
                    objects_PDFDict
                  ) || context.obj({})
                Resources.set(objects_PDFName.Font, Font)
                var XObject =
                  Resources.lookupMaybe(
                    objects_PDFName.XObject,
                    objects_PDFDict
                  ) || context.obj({})
                Resources.set(objects_PDFName.XObject, XObject)
                var ExtGState =
                  Resources.lookupMaybe(
                    objects_PDFName.ExtGState,
                    objects_PDFDict
                  ) || context.obj({})
                Resources.set(objects_PDFName.ExtGState, ExtGState)
                var Annots = this.Annots() || context.obj([])
                ;(this.set(objects_PDFName.Annots, Annots),
                  (this.normalized = !0))
              }
            }),
            (PDFPageLeaf.prototype.normalizedEntries = function () {
              this.normalize()
              var Annots = this.Annots(),
                Resources = this.Resources()
              return {
                Annots,
                Resources,
                Contents: this.Contents(),
                Font: Resources.lookup(objects_PDFName.Font, objects_PDFDict),
                XObject: Resources.lookup(
                  objects_PDFName.XObject,
                  objects_PDFDict
                ),
                ExtGState: Resources.lookup(
                  objects_PDFName.ExtGState,
                  objects_PDFDict
                ),
              }
            }),
            (PDFPageLeaf.InheritableEntries = [
              'Resources',
              'MediaBox',
              'CropBox',
              'Rotate',
            ]),
            (PDFPageLeaf.withContextAndParent = function (context, parent) {
              var dict = new Map()
              return (
                dict.set(objects_PDFName.Type, objects_PDFName.Page),
                dict.set(objects_PDFName.Parent, parent),
                dict.set(objects_PDFName.Resources, context.obj({})),
                dict.set(
                  objects_PDFName.MediaBox,
                  context.obj([0, 0, 612, 792])
                ),
                new PDFPageLeaf(dict, context, !1)
              )
            }),
            (PDFPageLeaf.fromMapWithContext = function (
              map,
              context,
              autoNormalizeCTM
            ) {
              return (
                void 0 === autoNormalizeCTM && (autoNormalizeCTM = !0),
                new PDFPageLeaf(map, context, autoNormalizeCTM)
              )
            }),
            PDFPageLeaf
          )
        })(objects_PDFDict)
        const structures_PDFPageLeaf = PDFPageLeaf
        var PDFObjectCopier = (function () {
          function PDFObjectCopier(src, dest) {
            var _this = this
            ;((this.traversedObjects = new Map()),
              (this.copy = function (object) {
                return object instanceof structures_PDFPageLeaf
                  ? _this.copyPDFPage(object)
                  : object instanceof objects_PDFDict
                    ? _this.copyPDFDict(object)
                    : object instanceof objects_PDFArray
                      ? _this.copyPDFArray(object)
                      : object instanceof objects_PDFStream
                        ? _this.copyPDFStream(object)
                        : object instanceof objects_PDFRef
                          ? _this.copyPDFIndirectObject(object)
                          : object.clone()
              }),
              (this.copyPDFPage = function (originalPage) {
                for (
                  var clonedPage = originalPage.clone(),
                    InheritableEntries =
                      structures_PDFPageLeaf.InheritableEntries,
                    idx = 0,
                    len = InheritableEntries.length;
                  idx < len;
                  idx++
                ) {
                  var key = objects_PDFName.of(InheritableEntries[idx]),
                    value = clonedPage.getInheritableAttribute(key)
                  !clonedPage.get(key) && value && clonedPage.set(key, value)
                }
                return (
                  clonedPage.delete(objects_PDFName.of('Parent')),
                  _this.copyPDFDict(clonedPage)
                )
              }),
              (this.copyPDFDict = function (originalDict) {
                if (_this.traversedObjects.has(originalDict))
                  return _this.traversedObjects.get(originalDict)
                var clonedDict = originalDict.clone(_this.dest)
                _this.traversedObjects.set(originalDict, clonedDict)
                for (
                  var entries = originalDict.entries(),
                    idx = 0,
                    len = entries.length;
                  idx < len;
                  idx++
                ) {
                  var _a = entries[idx],
                    key = _a[0],
                    value = _a[1]
                  clonedDict.set(key, _this.copy(value))
                }
                return clonedDict
              }),
              (this.copyPDFArray = function (originalArray) {
                if (_this.traversedObjects.has(originalArray))
                  return _this.traversedObjects.get(originalArray)
                var clonedArray = originalArray.clone(_this.dest)
                _this.traversedObjects.set(originalArray, clonedArray)
                for (
                  var idx = 0, len = originalArray.size();
                  idx < len;
                  idx++
                ) {
                  var value = originalArray.get(idx)
                  clonedArray.set(idx, _this.copy(value))
                }
                return clonedArray
              }),
              (this.copyPDFStream = function (originalStream) {
                if (_this.traversedObjects.has(originalStream))
                  return _this.traversedObjects.get(originalStream)
                var clonedStream = originalStream.clone(_this.dest)
                _this.traversedObjects.set(originalStream, clonedStream)
                for (
                  var entries = originalStream.dict.entries(),
                    idx = 0,
                    len = entries.length;
                  idx < len;
                  idx++
                ) {
                  var _a = entries[idx],
                    key = _a[0],
                    value = _a[1]
                  clonedStream.dict.set(key, _this.copy(value))
                }
                return clonedStream
              }),
              (this.copyPDFIndirectObject = function (ref) {
                if (!_this.traversedObjects.has(ref)) {
                  var newRef = _this.dest.nextRef()
                  _this.traversedObjects.set(ref, newRef)
                  var dereferencedValue = _this.src.lookup(ref)
                  if (dereferencedValue) {
                    var cloned = _this.copy(dereferencedValue)
                    _this.dest.assign(newRef, cloned)
                  }
                }
                return _this.traversedObjects.get(ref)
              }),
              (this.src = src),
              (this.dest = dest))
          }
          return (
            (PDFObjectCopier.for = function (src, dest) {
              return new PDFObjectCopier(src, dest)
            }),
            PDFObjectCopier
          )
        })()
        const core_PDFObjectCopier = PDFObjectCopier
        var PDFCrossRefSection = (function () {
          function PDFCrossRefSection(firstEntry) {
            ;((this.subsections = firstEntry ? [[firstEntry]] : []),
              (this.chunkIdx = 0),
              (this.chunkLength = firstEntry ? 1 : 0))
          }
          return (
            (PDFCrossRefSection.prototype.addEntry = function (ref, offset) {
              this.append({ ref, offset, deleted: !1 })
            }),
            (PDFCrossRefSection.prototype.addDeletedEntry = function (
              ref,
              nextFreeObjectNumber
            ) {
              this.append({ ref, offset: nextFreeObjectNumber, deleted: !0 })
            }),
            (PDFCrossRefSection.prototype.toString = function () {
              for (
                var section = 'xref\n',
                  rangeIdx = 0,
                  rangeLen = this.subsections.length;
                rangeIdx < rangeLen;
                rangeIdx++
              ) {
                var range = this.subsections[rangeIdx]
                section += range[0].ref.objectNumber + ' ' + range.length + '\n'
                for (
                  var entryIdx = 0, entryLen = range.length;
                  entryIdx < entryLen;
                  entryIdx++
                ) {
                  var entry = range[entryIdx]
                  ;((section += padStart(String(entry.offset), 10, '0')),
                    (section += ' '),
                    (section += padStart(
                      String(entry.ref.generationNumber),
                      5,
                      '0'
                    )),
                    (section += ' '),
                    (section += entry.deleted ? 'f' : 'n'),
                    (section += ' \n'))
                }
              }
              return section
            }),
            (PDFCrossRefSection.prototype.sizeInBytes = function () {
              for (
                var size = 5, idx = 0, len = this.subsections.length;
                idx < len;
                idx++
              ) {
                var subsection = this.subsections[idx],
                  subsectionLength = subsection.length,
                  firstEntry = subsection[0]
                ;((size += 2),
                  (size += String(firstEntry.ref.objectNumber).length),
                  (size += String(subsectionLength).length),
                  (size += 20 * subsectionLength))
              }
              return size
            }),
            (PDFCrossRefSection.prototype.copyBytesInto = function (
              buffer,
              offset
            ) {
              var initialOffset = offset
              return (
                (buffer[offset++] = syntax_CharCodes.x),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.f),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (offset += this.copySubsectionsIntoBuffer(
                  this.subsections,
                  buffer,
                  offset
                )) - initialOffset
              )
            }),
            (PDFCrossRefSection.prototype.copySubsectionsIntoBuffer = function (
              subsections,
              buffer,
              offset
            ) {
              for (
                var initialOffset = offset,
                  length = subsections.length,
                  idx = 0;
                idx < length;
                idx++
              ) {
                var subsection = this.subsections[idx],
                  firstObjectNumber = String(subsection[0].ref.objectNumber)
                ;((offset += copyStringIntoBuffer(
                  firstObjectNumber,
                  buffer,
                  offset
                )),
                  (buffer[offset++] = syntax_CharCodes.Space))
                var rangeLength = String(subsection.length)
                ;((offset += copyStringIntoBuffer(rangeLength, buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Newline),
                  (offset += this.copyEntriesIntoBuffer(
                    subsection,
                    buffer,
                    offset
                  )))
              }
              return offset - initialOffset
            }),
            (PDFCrossRefSection.prototype.copyEntriesIntoBuffer = function (
              entries,
              buffer,
              offset
            ) {
              for (var length = entries.length, idx = 0; idx < length; idx++) {
                var entry = entries[idx],
                  entryOffset = padStart(String(entry.offset), 10, '0')
                ;((offset += copyStringIntoBuffer(entryOffset, buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Space))
                var entryGen = padStart(
                  String(entry.ref.generationNumber),
                  5,
                  '0'
                )
                ;((offset += copyStringIntoBuffer(entryGen, buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.Space),
                  (buffer[offset++] = entry.deleted
                    ? syntax_CharCodes.f
                    : syntax_CharCodes.n),
                  (buffer[offset++] = syntax_CharCodes.Space),
                  (buffer[offset++] = syntax_CharCodes.Newline))
              }
              return 20 * length
            }),
            (PDFCrossRefSection.prototype.append = function (currEntry) {
              if (0 === this.chunkLength)
                return (
                  this.subsections.push([currEntry]),
                  (this.chunkIdx = 0),
                  void (this.chunkLength = 1)
                )
              var chunk = this.subsections[this.chunkIdx],
                prevEntry = chunk[this.chunkLength - 1]
              currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1
                ? (this.subsections.push([currEntry]),
                  (this.chunkIdx += 1),
                  (this.chunkLength = 1))
                : (chunk.push(currEntry), (this.chunkLength += 1))
            }),
            (PDFCrossRefSection.create = function () {
              return new PDFCrossRefSection({
                ref: objects_PDFRef.of(0, 65535),
                offset: 0,
                deleted: !0,
              })
            }),
            (PDFCrossRefSection.createEmpty = function () {
              return new PDFCrossRefSection()
            }),
            PDFCrossRefSection
          )
        })()
        const document_PDFCrossRefSection = PDFCrossRefSection
        const document_PDFTrailer = (function () {
          function PDFTrailer(lastXRefOffset) {
            this.lastXRefOffset = String(lastXRefOffset)
          }
          return (
            (PDFTrailer.prototype.toString = function () {
              return 'startxref\n' + this.lastXRefOffset + '\n%%EOF'
            }),
            (PDFTrailer.prototype.sizeInBytes = function () {
              return 16 + this.lastXRefOffset.length
            }),
            (PDFTrailer.prototype.copyBytesInto = function (buffer, offset) {
              var initialOffset = offset
              return (
                (buffer[offset++] = syntax_CharCodes.s),
                (buffer[offset++] = syntax_CharCodes.t),
                (buffer[offset++] = syntax_CharCodes.a),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.t),
                (buffer[offset++] = syntax_CharCodes.x),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.f),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (offset += copyStringIntoBuffer(
                  this.lastXRefOffset,
                  buffer,
                  offset
                )),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (buffer[offset++] = syntax_CharCodes.Percent),
                (buffer[offset++] = syntax_CharCodes.Percent),
                (buffer[offset++] = syntax_CharCodes.E),
                (buffer[offset++] = syntax_CharCodes.O),
                (buffer[offset++] = syntax_CharCodes.F),
                offset - initialOffset
              )
            }),
            (PDFTrailer.forLastCrossRefSectionOffset = function (offset) {
              return new PDFTrailer(offset)
            }),
            PDFTrailer
          )
        })()
        const document_PDFTrailerDict = (function () {
          function PDFTrailerDict(dict) {
            this.dict = dict
          }
          return (
            (PDFTrailerDict.prototype.toString = function () {
              return 'trailer\n' + this.dict.toString()
            }),
            (PDFTrailerDict.prototype.sizeInBytes = function () {
              return 8 + this.dict.sizeInBytes()
            }),
            (PDFTrailerDict.prototype.copyBytesInto = function (
              buffer,
              offset
            ) {
              var initialOffset = offset
              return (
                (buffer[offset++] = syntax_CharCodes.t),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.a),
                (buffer[offset++] = syntax_CharCodes.i),
                (buffer[offset++] = syntax_CharCodes.l),
                (buffer[offset++] = syntax_CharCodes.e),
                (buffer[offset++] = syntax_CharCodes.r),
                (buffer[offset++] = syntax_CharCodes.Newline),
                (offset += this.dict.copyBytesInto(buffer, offset)) -
                  initialOffset
              )
            }),
            (PDFTrailerDict.of = function (dict) {
              return new PDFTrailerDict(dict)
            }),
            PDFTrailerDict
          )
        })()
        var PDFObjectStream = (function (_super) {
          function PDFObjectStream(context, objects, encode) {
            void 0 === encode && (encode = !0)
            var _this = _super.call(this, context.obj({}), encode) || this
            return (
              (_this.objects = objects),
              (_this.offsets = _this.computeObjectOffsets()),
              (_this.offsetsString = _this.computeOffsetsString()),
              _this.dict.set(
                objects_PDFName.of('Type'),
                objects_PDFName.of('ObjStm')
              ),
              _this.dict.set(
                objects_PDFName.of('N'),
                objects_PDFNumber.of(_this.objects.length)
              ),
              _this.dict.set(
                objects_PDFName.of('First'),
                objects_PDFNumber.of(_this.offsetsString.length)
              ),
              _this
            )
          }
          return (
            __extends(PDFObjectStream, _super),
            (PDFObjectStream.prototype.getObjectsCount = function () {
              return this.objects.length
            }),
            (PDFObjectStream.prototype.clone = function (context) {
              return PDFObjectStream.withContextAndObjects(
                context || this.dict.context,
                this.objects.slice(),
                this.encode
              )
            }),
            (PDFObjectStream.prototype.getContentsString = function () {
              for (
                var value = this.offsetsString,
                  idx = 0,
                  len = this.objects.length;
                idx < len;
                idx++
              ) {
                value += this.objects[idx][1] + '\n'
              }
              return value
            }),
            (PDFObjectStream.prototype.getUnencodedContents = function () {
              for (
                var buffer = new Uint8Array(this.getUnencodedContentsSize()),
                  offset = copyStringIntoBuffer(this.offsetsString, buffer, 0),
                  idx = 0,
                  len = this.objects.length;
                idx < len;
                idx++
              ) {
                ;((offset += this.objects[idx][1].copyBytesInto(
                  buffer,
                  offset
                )),
                  (buffer[offset++] = syntax_CharCodes.Newline))
              }
              return buffer
            }),
            (PDFObjectStream.prototype.getUnencodedContentsSize = function () {
              return (
                this.offsetsString.length +
                last(this.offsets)[1] +
                last(this.objects)[1].sizeInBytes() +
                1
              )
            }),
            (PDFObjectStream.prototype.computeOffsetsString = function () {
              for (
                var offsetsString = '', idx = 0, len = this.offsets.length;
                idx < len;
                idx++
              ) {
                var _a = this.offsets[idx]
                offsetsString += _a[0] + ' ' + _a[1] + ' '
              }
              return offsetsString
            }),
            (PDFObjectStream.prototype.computeObjectOffsets = function () {
              for (
                var offset = 0,
                  offsets = new Array(this.objects.length),
                  idx = 0,
                  len = this.objects.length;
                idx < len;
                idx++
              ) {
                var _a = this.objects[idx],
                  ref = _a[0],
                  object = _a[1]
                ;((offsets[idx] = [ref.objectNumber, offset]),
                  (offset += object.sizeInBytes() + 1))
              }
              return offsets
            }),
            (PDFObjectStream.withContextAndObjects = function (
              context,
              objects,
              encode
            ) {
              return (
                void 0 === encode && (encode = !0),
                new PDFObjectStream(context, objects, encode)
              )
            }),
            PDFObjectStream
          )
        })(structures_PDFFlateStream)
        const structures_PDFObjectStream = PDFObjectStream
        var PDFWriter = (function () {
          function PDFWriter(context, objectsPerTick) {
            var _this = this
            ;((this.parsedObjects = 0),
              (this.shouldWaitForTick = function (n) {
                return (
                  (_this.parsedObjects += n),
                  _this.parsedObjects % _this.objectsPerTick === 0
                )
              }),
              (this.context = context),
              (this.objectsPerTick = objectsPerTick))
          }
          return (
            (PDFWriter.prototype.serializeToBuffer = function () {
              return __awaiter(this, void 0, void 0, function () {
                var _a,
                  size,
                  header,
                  indirectObjects,
                  xref,
                  trailerDict,
                  trailer,
                  offset,
                  buffer,
                  idx,
                  len,
                  _b,
                  ref,
                  object,
                  objectNumber,
                  generationNumber,
                  n
                return __generator(this, function (_c) {
                  switch (_c.label) {
                    case 0:
                      return [4, this.computeBufferSize()]
                    case 1:
                      ;((_a = _c.sent()),
                        (size = _a.size),
                        (header = _a.header),
                        (indirectObjects = _a.indirectObjects),
                        (xref = _a.xref),
                        (trailerDict = _a.trailerDict),
                        (trailer = _a.trailer),
                        (offset = 0),
                        (buffer = new Uint8Array(size)),
                        (offset += header.copyBytesInto(buffer, offset)),
                        (buffer[offset++] = syntax_CharCodes.Newline),
                        (buffer[offset++] = syntax_CharCodes.Newline),
                        (idx = 0),
                        (len = indirectObjects.length),
                        (_c.label = 2))
                    case 2:
                      return idx < len
                        ? ((_b = indirectObjects[idx]),
                          (ref = _b[0]),
                          (object = _b[1]),
                          (objectNumber = String(ref.objectNumber)),
                          (offset += copyStringIntoBuffer(
                            objectNumber,
                            buffer,
                            offset
                          )),
                          (buffer[offset++] = syntax_CharCodes.Space),
                          (generationNumber = String(ref.generationNumber)),
                          (offset += copyStringIntoBuffer(
                            generationNumber,
                            buffer,
                            offset
                          )),
                          (buffer[offset++] = syntax_CharCodes.Space),
                          (buffer[offset++] = syntax_CharCodes.o),
                          (buffer[offset++] = syntax_CharCodes.b),
                          (buffer[offset++] = syntax_CharCodes.j),
                          (buffer[offset++] = syntax_CharCodes.Newline),
                          (offset += object.copyBytesInto(buffer, offset)),
                          (buffer[offset++] = syntax_CharCodes.Newline),
                          (buffer[offset++] = syntax_CharCodes.e),
                          (buffer[offset++] = syntax_CharCodes.n),
                          (buffer[offset++] = syntax_CharCodes.d),
                          (buffer[offset++] = syntax_CharCodes.o),
                          (buffer[offset++] = syntax_CharCodes.b),
                          (buffer[offset++] = syntax_CharCodes.j),
                          (buffer[offset++] = syntax_CharCodes.Newline),
                          (buffer[offset++] = syntax_CharCodes.Newline),
                          (n =
                            object instanceof structures_PDFObjectStream
                              ? object.getObjectsCount()
                              : 1),
                          this.shouldWaitForTick(n)
                            ? [4, waitForTick()]
                            : [3, 4])
                        : [3, 5]
                    case 3:
                      ;(_c.sent(), (_c.label = 4))
                    case 4:
                      return (idx++, [3, 2])
                    case 5:
                      return (
                        xref &&
                          ((offset += xref.copyBytesInto(buffer, offset)),
                          (buffer[offset++] = syntax_CharCodes.Newline)),
                        trailerDict &&
                          ((offset += trailerDict.copyBytesInto(
                            buffer,
                            offset
                          )),
                          (buffer[offset++] = syntax_CharCodes.Newline),
                          (buffer[offset++] = syntax_CharCodes.Newline)),
                        (offset += trailer.copyBytesInto(buffer, offset)),
                        [2, buffer]
                      )
                  }
                })
              })
            }),
            (PDFWriter.prototype.computeIndirectObjectSize = function (_a) {
              var ref = _a[0],
                object = _a[1]
              return ref.sizeInBytes() + 3 + (object.sizeInBytes() + 9)
            }),
            (PDFWriter.prototype.createTrailerDict = function () {
              return this.context.obj({
                Size: this.context.largestObjectNumber + 1,
                Root: this.context.trailerInfo.Root,
                Encrypt: this.context.trailerInfo.Encrypt,
                Info: this.context.trailerInfo.Info,
                ID: this.context.trailerInfo.ID,
              })
            }),
            (PDFWriter.prototype.computeBufferSize = function () {
              return __awaiter(this, void 0, void 0, function () {
                var header,
                  size,
                  xref,
                  indirectObjects,
                  idx,
                  len,
                  indirectObject,
                  ref,
                  xrefOffset,
                  trailerDict,
                  trailer
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      ;((header = document_PDFHeader.forVersion(1, 7)),
                        (size = header.sizeInBytes() + 2),
                        (xref = document_PDFCrossRefSection.create()),
                        (indirectObjects =
                          this.context.enumerateIndirectObjects()),
                        (idx = 0),
                        (len = indirectObjects.length),
                        (_a.label = 1))
                    case 1:
                      return idx < len
                        ? ((indirectObject = indirectObjects[idx]),
                          (ref = indirectObject[0]),
                          xref.addEntry(ref, size),
                          (size +=
                            this.computeIndirectObjectSize(indirectObject)),
                          this.shouldWaitForTick(1)
                            ? [4, waitForTick()]
                            : [3, 3])
                        : [3, 4]
                    case 2:
                      ;(_a.sent(), (_a.label = 3))
                    case 3:
                      return (idx++, [3, 1])
                    case 4:
                      return (
                        (xrefOffset = size),
                        (size += xref.sizeInBytes() + 1),
                        (trailerDict = document_PDFTrailerDict.of(
                          this.createTrailerDict()
                        )),
                        (size += trailerDict.sizeInBytes() + 2),
                        (trailer =
                          document_PDFTrailer.forLastCrossRefSectionOffset(
                            xrefOffset
                          )),
                        [
                          2,
                          {
                            size: (size += trailer.sizeInBytes()),
                            header,
                            indirectObjects,
                            xref,
                            trailerDict,
                            trailer,
                          },
                        ]
                      )
                  }
                })
              })
            }),
            (PDFWriter.forContext = function (context, objectsPerTick) {
              return new PDFWriter(context, objectsPerTick)
            }),
            PDFWriter
          )
        })()
        const writers_PDFWriter = PDFWriter
        var PDFInvalidObject = (function (_super) {
          function PDFInvalidObject(data) {
            var _this = _super.call(this) || this
            return ((_this.data = data), _this)
          }
          return (
            __extends(PDFInvalidObject, _super),
            (PDFInvalidObject.prototype.clone = function () {
              return PDFInvalidObject.of(this.data.slice())
            }),
            (PDFInvalidObject.prototype.toString = function () {
              return 'PDFInvalidObject(' + this.data.length + ' bytes)'
            }),
            (PDFInvalidObject.prototype.sizeInBytes = function () {
              return this.data.length
            }),
            (PDFInvalidObject.prototype.copyBytesInto = function (
              buffer,
              offset
            ) {
              for (var length = this.data.length, idx = 0; idx < length; idx++)
                buffer[offset++] = this.data[idx]
              return length
            }),
            (PDFInvalidObject.of = function (data) {
              return new PDFInvalidObject(data)
            }),
            PDFInvalidObject
          )
        })(objects_PDFObject)
        const objects_PDFInvalidObject = PDFInvalidObject
        var EntryType
        !(function (EntryType) {
          ;((EntryType[(EntryType.Deleted = 0)] = 'Deleted'),
            (EntryType[(EntryType.Uncompressed = 1)] = 'Uncompressed'),
            (EntryType[(EntryType.Compressed = 2)] = 'Compressed'))
        })(EntryType || (EntryType = {}))
        var PDFCrossRefStream = (function (_super) {
          function PDFCrossRefStream(dict, entries, encode) {
            void 0 === encode && (encode = !0)
            var _this = _super.call(this, dict, encode) || this
            return (
              (_this.computeIndex = function () {
                for (
                  var subsections = [],
                    subsectionLength = 0,
                    idx = 0,
                    len = _this.entries.length;
                  idx < len;
                  idx++
                ) {
                  var currEntry = _this.entries[idx],
                    prevEntry = _this.entries[idx - 1]
                  ;(0 === idx
                    ? subsections.push(currEntry.ref.objectNumber)
                    : currEntry.ref.objectNumber - prevEntry.ref.objectNumber >
                        1 &&
                      (subsections.push(subsectionLength),
                      subsections.push(currEntry.ref.objectNumber),
                      (subsectionLength = 0)),
                    (subsectionLength += 1))
                }
                return (subsections.push(subsectionLength), subsections)
              }),
              (_this.computeEntryTuples = function () {
                for (
                  var entryTuples = new Array(_this.entries.length),
                    idx = 0,
                    len = _this.entries.length;
                  idx < len;
                  idx++
                ) {
                  var entry = _this.entries[idx]
                  if (entry.type === EntryType.Deleted) {
                    var type = entry.type,
                      nextFreeObjectNumber = entry.nextFreeObjectNumber,
                      ref = entry.ref
                    entryTuples[idx] = [
                      type,
                      nextFreeObjectNumber,
                      ref.generationNumber,
                    ]
                  }
                  if (entry.type === EntryType.Uncompressed) {
                    type = entry.type
                    var offset = entry.offset
                    ref = entry.ref
                    entryTuples[idx] = [type, offset, ref.generationNumber]
                  }
                  if (entry.type === EntryType.Compressed) {
                    type = entry.type
                    var objectStreamRef = entry.objectStreamRef,
                      index = entry.index
                    entryTuples[idx] = [
                      type,
                      objectStreamRef.objectNumber,
                      index,
                    ]
                  }
                }
                return entryTuples
              }),
              (_this.computeMaxEntryByteWidths = function () {
                for (
                  var entryTuples = _this.entryTuplesCache.access(),
                    widths = [0, 0, 0],
                    idx = 0,
                    len = entryTuples.length;
                  idx < len;
                  idx++
                ) {
                  var _a = entryTuples[idx],
                    first = _a[0],
                    second = _a[1],
                    third = _a[2],
                    firstSize = sizeInBytes(first),
                    secondSize = sizeInBytes(second),
                    thirdSize = sizeInBytes(third)
                  ;(firstSize > widths[0] && (widths[0] = firstSize),
                    secondSize > widths[1] && (widths[1] = secondSize),
                    thirdSize > widths[2] && (widths[2] = thirdSize))
                }
                return widths
              }),
              (_this.entries = entries || []),
              (_this.entryTuplesCache = utils_Cache.populatedBy(
                _this.computeEntryTuples
              )),
              (_this.maxByteWidthsCache = utils_Cache.populatedBy(
                _this.computeMaxEntryByteWidths
              )),
              (_this.indexCache = utils_Cache.populatedBy(_this.computeIndex)),
              dict.set(objects_PDFName.of('Type'), objects_PDFName.of('XRef')),
              _this
            )
          }
          return (
            __extends(PDFCrossRefStream, _super),
            (PDFCrossRefStream.prototype.addDeletedEntry = function (
              ref,
              nextFreeObjectNumber
            ) {
              var type = EntryType.Deleted
              ;(this.entries.push({ type, ref, nextFreeObjectNumber }),
                this.entryTuplesCache.invalidate(),
                this.maxByteWidthsCache.invalidate(),
                this.indexCache.invalidate(),
                this.contentsCache.invalidate())
            }),
            (PDFCrossRefStream.prototype.addUncompressedEntry = function (
              ref,
              offset
            ) {
              var type = EntryType.Uncompressed
              ;(this.entries.push({ type, ref, offset }),
                this.entryTuplesCache.invalidate(),
                this.maxByteWidthsCache.invalidate(),
                this.indexCache.invalidate(),
                this.contentsCache.invalidate())
            }),
            (PDFCrossRefStream.prototype.addCompressedEntry = function (
              ref,
              objectStreamRef,
              index
            ) {
              var type = EntryType.Compressed
              ;(this.entries.push({ type, ref, objectStreamRef, index }),
                this.entryTuplesCache.invalidate(),
                this.maxByteWidthsCache.invalidate(),
                this.indexCache.invalidate(),
                this.contentsCache.invalidate())
            }),
            (PDFCrossRefStream.prototype.clone = function (context) {
              var dict = this.dict,
                entries = this.entries,
                encode = this.encode
              return PDFCrossRefStream.of(
                dict.clone(context),
                entries.slice(),
                encode
              )
            }),
            (PDFCrossRefStream.prototype.getContentsString = function () {
              for (
                var entryTuples = this.entryTuplesCache.access(),
                  byteWidths = this.maxByteWidthsCache.access(),
                  value = '',
                  entryIdx = 0,
                  entriesLen = entryTuples.length;
                entryIdx < entriesLen;
                entryIdx++
              ) {
                for (
                  var _a = entryTuples[entryIdx],
                    first = _a[0],
                    second = _a[1],
                    third = _a[2],
                    firstBytes = reverseArray(bytesFor(first)),
                    secondBytes = reverseArray(bytesFor(second)),
                    thirdBytes = reverseArray(bytesFor(third)),
                    idx = byteWidths[0] - 1;
                  idx >= 0;
                  idx--
                )
                  value += (firstBytes[idx] || 0).toString(2)
                for (idx = byteWidths[1] - 1; idx >= 0; idx--)
                  value += (secondBytes[idx] || 0).toString(2)
                for (idx = byteWidths[2] - 1; idx >= 0; idx--)
                  value += (thirdBytes[idx] || 0).toString(2)
              }
              return value
            }),
            (PDFCrossRefStream.prototype.getUnencodedContents = function () {
              for (
                var entryTuples = this.entryTuplesCache.access(),
                  byteWidths = this.maxByteWidthsCache.access(),
                  buffer = new Uint8Array(this.getUnencodedContentsSize()),
                  offset = 0,
                  entryIdx = 0,
                  entriesLen = entryTuples.length;
                entryIdx < entriesLen;
                entryIdx++
              ) {
                for (
                  var _a = entryTuples[entryIdx],
                    first = _a[0],
                    second = _a[1],
                    third = _a[2],
                    firstBytes = reverseArray(bytesFor(first)),
                    secondBytes = reverseArray(bytesFor(second)),
                    thirdBytes = reverseArray(bytesFor(third)),
                    idx = byteWidths[0] - 1;
                  idx >= 0;
                  idx--
                )
                  buffer[offset++] = firstBytes[idx] || 0
                for (idx = byteWidths[1] - 1; idx >= 0; idx--)
                  buffer[offset++] = secondBytes[idx] || 0
                for (idx = byteWidths[2] - 1; idx >= 0; idx--)
                  buffer[offset++] = thirdBytes[idx] || 0
              }
              return buffer
            }),
            (PDFCrossRefStream.prototype.getUnencodedContentsSize =
              function () {
                var entryWidth = (function (array) {
                  for (
                    var total = 0, idx = 0, len = array.length;
                    idx < len;
                    idx++
                  )
                    total += array[idx]
                  return total
                })(this.maxByteWidthsCache.access())
                return entryWidth * this.entries.length
              }),
            (PDFCrossRefStream.prototype.updateDict = function () {
              _super.prototype.updateDict.call(this)
              var byteWidths = this.maxByteWidthsCache.access(),
                index = this.indexCache.access(),
                context = this.dict.context
              ;(this.dict.set(objects_PDFName.of('W'), context.obj(byteWidths)),
                this.dict.set(objects_PDFName.of('Index'), context.obj(index)))
            }),
            (PDFCrossRefStream.create = function (dict, encode) {
              void 0 === encode && (encode = !0)
              var stream = new PDFCrossRefStream(dict, [], encode)
              return (
                stream.addDeletedEntry(objects_PDFRef.of(0, 65535), 0),
                stream
              )
            }),
            (PDFCrossRefStream.of = function (dict, entries, encode) {
              return (
                void 0 === encode && (encode = !0),
                new PDFCrossRefStream(dict, entries, encode)
              )
            }),
            PDFCrossRefStream
          )
        })(structures_PDFFlateStream)
        const structures_PDFCrossRefStream = PDFCrossRefStream
        var PDFStreamWriter = (function (_super) {
          function PDFStreamWriter(
            context,
            objectsPerTick,
            encodeStreams,
            objectsPerStream
          ) {
            var _this = _super.call(this, context, objectsPerTick) || this
            return (
              (_this.encodeStreams = encodeStreams),
              (_this.objectsPerStream = objectsPerStream),
              _this
            )
          }
          return (
            __extends(PDFStreamWriter, _super),
            (PDFStreamWriter.prototype.computeBufferSize = function () {
              return __awaiter(this, void 0, void 0, function () {
                var objectNumber,
                  header,
                  size,
                  xrefStream,
                  uncompressedObjects,
                  compressedObjects,
                  objectStreamRefs,
                  indirectObjects,
                  indirectObject,
                  object,
                  objectStreamRef,
                  idx,
                  len,
                  chunk,
                  ref,
                  objectStream,
                  xrefStreamRef,
                  xrefOffset,
                  trailer
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      ;((objectNumber = this.context.largestObjectNumber + 1),
                        (header = document_PDFHeader.forVersion(1, 7)),
                        (size = header.sizeInBytes() + 2),
                        (xrefStream = structures_PDFCrossRefStream.create(
                          this.createTrailerDict(),
                          this.encodeStreams
                        )),
                        (uncompressedObjects = []),
                        (compressedObjects = []),
                        (objectStreamRefs = []),
                        (indirectObjects =
                          this.context.enumerateIndirectObjects()),
                        (idx = 0),
                        (len = indirectObjects.length),
                        (_a.label = 1))
                    case 1:
                      return idx < len
                        ? ((indirectObject = indirectObjects[idx]),
                          (ref = indirectObject[0]),
                          (object = indirectObject[1]),
                          ref === this.context.trailerInfo.Encrypt ||
                          object instanceof objects_PDFStream ||
                          object instanceof objects_PDFInvalidObject ||
                          0 !== ref.generationNumber
                            ? (uncompressedObjects.push(indirectObject),
                              xrefStream.addUncompressedEntry(ref, size),
                              (size +=
                                this.computeIndirectObjectSize(indirectObject)),
                              this.shouldWaitForTick(1)
                                ? [4, waitForTick()]
                                : [3, 3])
                            : [3, 4])
                        : [3, 6]
                    case 2:
                      ;(_a.sent(), (_a.label = 3))
                    case 3:
                      return [3, 5]
                    case 4:
                      ;((chunk = last(compressedObjects)),
                        (objectStreamRef = last(objectStreamRefs)),
                        (chunk && chunk.length % this.objectsPerStream !== 0) ||
                          ((chunk = []),
                          compressedObjects.push(chunk),
                          (objectStreamRef = objects_PDFRef.of(objectNumber++)),
                          objectStreamRefs.push(objectStreamRef)),
                        xrefStream.addCompressedEntry(
                          ref,
                          objectStreamRef,
                          chunk.length
                        ),
                        chunk.push(indirectObject),
                        (_a.label = 5))
                    case 5:
                      return (idx++, [3, 1])
                    case 6:
                      ;((idx = 0),
                        (len = compressedObjects.length),
                        (_a.label = 7))
                    case 7:
                      return idx < len
                        ? ((chunk = compressedObjects[idx]),
                          (ref = objectStreamRefs[idx]),
                          (objectStream =
                            structures_PDFObjectStream.withContextAndObjects(
                              this.context,
                              chunk,
                              this.encodeStreams
                            )),
                          xrefStream.addUncompressedEntry(ref, size),
                          (size += this.computeIndirectObjectSize([
                            ref,
                            objectStream,
                          ])),
                          uncompressedObjects.push([ref, objectStream]),
                          this.shouldWaitForTick(chunk.length)
                            ? [4, waitForTick()]
                            : [3, 9])
                        : [3, 10]
                    case 8:
                      ;(_a.sent(), (_a.label = 9))
                    case 9:
                      return (idx++, [3, 7])
                    case 10:
                      return (
                        (xrefStreamRef = objects_PDFRef.of(objectNumber++)),
                        xrefStream.dict.set(
                          objects_PDFName.of('Size'),
                          objects_PDFNumber.of(objectNumber)
                        ),
                        xrefStream.addUncompressedEntry(xrefStreamRef, size),
                        (xrefOffset = size),
                        (size += this.computeIndirectObjectSize([
                          xrefStreamRef,
                          xrefStream,
                        ])),
                        uncompressedObjects.push([xrefStreamRef, xrefStream]),
                        (trailer =
                          document_PDFTrailer.forLastCrossRefSectionOffset(
                            xrefOffset
                          )),
                        [
                          2,
                          {
                            size: (size += trailer.sizeInBytes()),
                            header,
                            indirectObjects: uncompressedObjects,
                            trailer,
                          },
                        ]
                      )
                  }
                })
              })
            }),
            (PDFStreamWriter.forContext = function (
              context,
              objectsPerTick,
              encodeStreams,
              objectsPerStream
            ) {
              return (
                void 0 === encodeStreams && (encodeStreams = !0),
                void 0 === objectsPerStream && (objectsPerStream = 50),
                new PDFStreamWriter(
                  context,
                  objectsPerTick,
                  encodeStreams,
                  objectsPerStream
                )
              )
            }),
            PDFStreamWriter
          )
        })(writers_PDFWriter)
        const writers_PDFStreamWriter = PDFStreamWriter
        var PDFHexString = (function (_super) {
          function PDFHexString(value) {
            var _this = _super.call(this) || this
            return ((_this.value = value), _this)
          }
          return (
            __extends(PDFHexString, _super),
            (PDFHexString.prototype.asBytes = function () {
              for (
                var hex = this.value + (this.value.length % 2 == 1 ? '0' : ''),
                  hexLength = hex.length,
                  bytes = new Uint8Array(hex.length / 2),
                  hexOffset = 0,
                  bytesOffset = 0;
                hexOffset < hexLength;

              ) {
                var byte = parseInt(hex.substring(hexOffset, hexOffset + 2), 16)
                ;((bytes[bytesOffset] = byte),
                  (hexOffset += 2),
                  (bytesOffset += 1))
              }
              return bytes
            }),
            (PDFHexString.prototype.decodeText = function () {
              var bytes = this.asBytes()
              return hasUtf16BOM(bytes)
                ? utf16Decode(bytes)
                : pdfDocEncodingDecode(bytes)
            }),
            (PDFHexString.prototype.decodeDate = function () {
              var text = this.decodeText(),
                date = parseDate(text)
              if (!date) throw new InvalidPDFDateStringError(text)
              return date
            }),
            (PDFHexString.prototype.asString = function () {
              return this.value
            }),
            (PDFHexString.prototype.clone = function () {
              return PDFHexString.of(this.value)
            }),
            (PDFHexString.prototype.toString = function () {
              return '<' + this.value + '>'
            }),
            (PDFHexString.prototype.sizeInBytes = function () {
              return this.value.length + 2
            }),
            (PDFHexString.prototype.copyBytesInto = function (buffer, offset) {
              return (
                (buffer[offset++] = syntax_CharCodes.LessThan),
                (offset += copyStringIntoBuffer(this.value, buffer, offset)),
                (buffer[offset++] = syntax_CharCodes.GreaterThan),
                this.value.length + 2
              )
            }),
            (PDFHexString.of = function (value) {
              return new PDFHexString(value)
            }),
            (PDFHexString.fromText = function (value) {
              for (
                var encoded = (function (input, byteOrderMark) {
                    void 0 === byteOrderMark && (byteOrderMark = !0)
                    var encoded = []
                    byteOrderMark && encoded.push(65279)
                    for (var idx = 0, len = input.length; idx < len; ) {
                      var codePoint = input.codePointAt(idx)
                      if (codePoint < 65536)
                        (encoded.push(codePoint), (idx += 1))
                      else {
                        if (!(codePoint < 1114112))
                          throw new Error(
                            'Invalid code point: 0x' +
                              strings_toHexString(codePoint)
                          )
                        ;(encoded.push(
                          highSurrogate(codePoint),
                          lowSurrogate(codePoint)
                        ),
                          (idx += 2))
                      }
                    }
                    return new Uint16Array(encoded)
                  })(value),
                  hex = '',
                  idx = 0,
                  len = encoded.length;
                idx < len;
                idx++
              )
                hex += toHexStringOfMinLength(encoded[idx], 4)
              return new PDFHexString(hex)
            }),
            PDFHexString
          )
        })(objects_PDFObject)
        const objects_PDFHexString = PDFHexString
        var StandardFontEmbedder = (function () {
          function StandardFontEmbedder(fontName, customName) {
            ;((this.encoding =
              fontName === FontNames.ZapfDingbats
                ? Encodings.ZapfDingbats
                : fontName === FontNames.Symbol
                  ? Encodings.Symbol
                  : Encodings.WinAnsi),
              (this.font = Font.load(fontName)),
              (this.fontName = this.font.FontName),
              (this.customName = customName))
          }
          return (
            (StandardFontEmbedder.prototype.encodeText = function (text) {
              for (
                var glyphs = this.encodeTextAsGlyphs(text),
                  hexCodes = new Array(glyphs.length),
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              )
                hexCodes[idx] = strings_toHexString(glyphs[idx].code)
              return objects_PDFHexString.of(hexCodes.join(''))
            }),
            (StandardFontEmbedder.prototype.widthOfTextAtSize = function (
              text,
              size
            ) {
              for (
                var glyphs = this.encodeTextAsGlyphs(text),
                  totalWidth = 0,
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              ) {
                var left = glyphs[idx].name,
                  right = (glyphs[idx + 1] || {}).name,
                  kernAmount =
                    this.font.getXAxisKerningForPair(left, right) || 0
                totalWidth += this.widthOfGlyph(left) + kernAmount
              }
              return totalWidth * (size / 1e3)
            }),
            (StandardFontEmbedder.prototype.heightOfFontAtSize = function (
              size,
              options
            ) {
              void 0 === options && (options = {})
              var _a = options.descender,
                descender = void 0 === _a || _a,
                _b = this.font,
                Ascender = _b.Ascender,
                Descender = _b.Descender,
                FontBBox = _b.FontBBox,
                height = (Ascender || FontBBox[3]) - (Descender || FontBBox[1])
              return (
                descender || (height += Descender || 0),
                (height / 1e3) * size
              )
            }),
            (StandardFontEmbedder.prototype.sizeOfFontAtHeight = function (
              height
            ) {
              var _a = this.font,
                Ascender = _a.Ascender,
                Descender = _a.Descender,
                FontBBox = _a.FontBBox
              return (
                (1e3 * height) /
                ((Ascender || FontBBox[3]) - (Descender || FontBBox[1]))
              )
            }),
            (StandardFontEmbedder.prototype.embedIntoContext = function (
              context,
              ref
            ) {
              var fontDict = context.obj({
                Type: 'Font',
                Subtype: 'Type1',
                BaseFont: this.customName || this.fontName,
                Encoding:
                  this.encoding === Encodings.WinAnsi
                    ? 'WinAnsiEncoding'
                    : void 0,
              })
              return ref
                ? (context.assign(ref, fontDict), ref)
                : context.register(fontDict)
            }),
            (StandardFontEmbedder.prototype.widthOfGlyph = function (
              glyphName
            ) {
              return this.font.getWidthOfGlyph(glyphName) || 250
            }),
            (StandardFontEmbedder.prototype.encodeTextAsGlyphs = function (
              text
            ) {
              for (
                var codePoints = Array.from(text),
                  glyphs = new Array(codePoints.length),
                  idx = 0,
                  len = codePoints.length;
                idx < len;
                idx++
              ) {
                var codePoint = toCodePoint(codePoints[idx])
                glyphs[idx] = this.encoding.encodeUnicodeCodePoint(codePoint)
              }
              return glyphs
            }),
            (StandardFontEmbedder.for = function (fontName, customName) {
              return new StandardFontEmbedder(fontName, customName)
            }),
            StandardFontEmbedder
          )
        })()
        const embedders_StandardFontEmbedder = StandardFontEmbedder
        var fillCmapTemplate = function (bfChars) {
            return (
              '/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n' +
              bfChars.length +
              ' beginbfchar\n' +
              bfChars
                .map(function (_a) {
                  return _a[0] + ' ' + _a[1]
                })
                .join('\n') +
              '\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend'
            )
          },
          cmapHexFormat = function () {
            for (var values = [], _i = 0; _i < arguments.length; _i++)
              values[_i] = arguments[_i]
            return '<' + values.join('') + '>'
          },
          cmapHexString = function (value) {
            return toHexStringOfMinLength(value, 4)
          },
          cmapCodePointFormat = function (codePoint) {
            if (
              (function (codePoint) {
                return codePoint >= 0 && codePoint <= 65535
              })(codePoint)
            )
              return cmapHexString(codePoint)
            if (
              (function (codePoint) {
                return codePoint >= 65536 && codePoint <= 1114111
              })(codePoint)
            ) {
              var hs = highSurrogate(codePoint),
                ls = lowSurrogate(codePoint)
              return '' + cmapHexString(hs) + cmapHexString(ls)
            }
            var hex = strings_toHexString(codePoint)
            throw new Error(
              '0x' + hex + ' is not a valid UTF-8 or UTF-16 codepoint.'
            )
          },
          PDFString = (function (_super) {
            function PDFString(value) {
              var _this = _super.call(this) || this
              return ((_this.value = value), _this)
            }
            return (
              __extends(PDFString, _super),
              (PDFString.prototype.asBytes = function () {
                for (
                  var bytes = [],
                    octal = '',
                    escaped = !1,
                    pushByte = function (byte) {
                      ;(void 0 !== byte && bytes.push(byte), (escaped = !1))
                    },
                    idx = 0,
                    len = this.value.length;
                  idx < len;
                  idx++
                ) {
                  var char = this.value[idx],
                    byte = toCharCode(char),
                    nextChar = this.value[idx + 1]
                  escaped
                    ? byte === syntax_CharCodes.Newline ||
                      byte === syntax_CharCodes.CarriageReturn
                      ? pushByte()
                      : byte === syntax_CharCodes.n
                        ? pushByte(syntax_CharCodes.Newline)
                        : byte === syntax_CharCodes.r
                          ? pushByte(syntax_CharCodes.CarriageReturn)
                          : byte === syntax_CharCodes.t
                            ? pushByte(syntax_CharCodes.Tab)
                            : byte === syntax_CharCodes.b
                              ? pushByte(syntax_CharCodes.Backspace)
                              : byte === syntax_CharCodes.f
                                ? pushByte(syntax_CharCodes.FormFeed)
                                : byte === syntax_CharCodes.LeftParen
                                  ? pushByte(syntax_CharCodes.LeftParen)
                                  : byte === syntax_CharCodes.RightParen
                                    ? pushByte(syntax_CharCodes.RightParen)
                                    : byte === syntax_CharCodes.Backspace
                                      ? pushByte(syntax_CharCodes.BackSlash)
                                      : byte >= syntax_CharCodes.Zero &&
                                          byte <= syntax_CharCodes.Seven
                                        ? (3 !== (octal += char).length &&
                                            nextChar >= '0' &&
                                            nextChar <= '7') ||
                                          (pushByte(parseInt(octal, 8)),
                                          (octal = ''))
                                        : pushByte(byte)
                    : byte === syntax_CharCodes.BackSlash
                      ? (escaped = !0)
                      : pushByte(byte)
                }
                return new Uint8Array(bytes)
              }),
              (PDFString.prototype.decodeText = function () {
                var bytes = this.asBytes()
                return hasUtf16BOM(bytes)
                  ? utf16Decode(bytes)
                  : pdfDocEncodingDecode(bytes)
              }),
              (PDFString.prototype.decodeDate = function () {
                var text = this.decodeText(),
                  date = parseDate(text)
                if (!date) throw new InvalidPDFDateStringError(text)
                return date
              }),
              (PDFString.prototype.asString = function () {
                return this.value
              }),
              (PDFString.prototype.clone = function () {
                return PDFString.of(this.value)
              }),
              (PDFString.prototype.toString = function () {
                return '(' + this.value + ')'
              }),
              (PDFString.prototype.sizeInBytes = function () {
                return this.value.length + 2
              }),
              (PDFString.prototype.copyBytesInto = function (buffer, offset) {
                return (
                  (buffer[offset++] = syntax_CharCodes.LeftParen),
                  (offset += copyStringIntoBuffer(this.value, buffer, offset)),
                  (buffer[offset++] = syntax_CharCodes.RightParen),
                  this.value.length + 2
                )
              }),
              (PDFString.of = function (value) {
                return new PDFString(value)
              }),
              (PDFString.fromDate = function (date) {
                return new PDFString(
                  'D:' +
                    padStart(String(date.getUTCFullYear()), 4, '0') +
                    padStart(String(date.getUTCMonth() + 1), 2, '0') +
                    padStart(String(date.getUTCDate()), 2, '0') +
                    padStart(String(date.getUTCHours()), 2, '0') +
                    padStart(String(date.getUTCMinutes()), 2, '0') +
                    padStart(String(date.getUTCSeconds()), 2, '0') +
                    'Z'
                )
              }),
              PDFString
            )
          })(objects_PDFObject)
        const objects_PDFString = PDFString
        var CustomFontEmbedder = (function () {
          function CustomFontEmbedder(
            font,
            fontData,
            customName,
            fontFeatures
          ) {
            var _this = this
            ;((this.allGlyphsInFontSortedById = function () {
              for (
                var glyphs = new Array(_this.font.characterSet.length),
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              ) {
                var codePoint = _this.font.characterSet[idx]
                glyphs[idx] = _this.font.glyphForCodePoint(codePoint)
              }
              return (function (array, indexer) {
                for (
                  var uniq = [], idx = 0, len = array.length;
                  idx < len;
                  idx++
                ) {
                  var curr = array[idx],
                    prev = array[idx - 1]
                  ;(0 !== idx && indexer(curr) === indexer(prev)) ||
                    uniq.push(curr)
                }
                return uniq
              })(glyphs.sort(byAscendingId), function (g) {
                return g.id
              })
            }),
              (this.font = font),
              (this.scale = 1e3 / this.font.unitsPerEm),
              (this.fontData = fontData),
              (this.fontName = this.font.postscriptName || 'Font'),
              (this.customName = customName),
              (this.fontFeatures = fontFeatures),
              (this.baseFontName = ''),
              (this.glyphCache = utils_Cache.populatedBy(
                this.allGlyphsInFontSortedById
              )))
          }
          return (
            (CustomFontEmbedder.for = function (
              fontkit,
              fontData,
              customName,
              fontFeatures
            ) {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, fontkit.create(fontData)]
                    case 1:
                      return [
                        2,
                        new CustomFontEmbedder(
                          _a.sent(),
                          fontData,
                          customName,
                          fontFeatures
                        ),
                      ]
                  }
                })
              })
            }),
            (CustomFontEmbedder.prototype.encodeText = function (text) {
              for (
                var glyphs = this.font.layout(text, this.fontFeatures).glyphs,
                  hexCodes = new Array(glyphs.length),
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              )
                hexCodes[idx] = toHexStringOfMinLength(glyphs[idx].id, 4)
              return objects_PDFHexString.of(hexCodes.join(''))
            }),
            (CustomFontEmbedder.prototype.widthOfTextAtSize = function (
              text,
              size
            ) {
              for (
                var glyphs = this.font.layout(text, this.fontFeatures).glyphs,
                  totalWidth = 0,
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              )
                totalWidth += glyphs[idx].advanceWidth * this.scale
              return totalWidth * (size / 1e3)
            }),
            (CustomFontEmbedder.prototype.heightOfFontAtSize = function (
              size,
              options
            ) {
              void 0 === options && (options = {})
              var _a = options.descender,
                descender = void 0 === _a || _a,
                _b = this.font,
                ascent = _b.ascent,
                descent = _b.descent,
                bbox = _b.bbox,
                height =
                  (ascent || bbox.maxY) * this.scale -
                  (descent || bbox.minY) * this.scale
              return (
                descender || (height -= Math.abs(descent) || 0),
                (height / 1e3) * size
              )
            }),
            (CustomFontEmbedder.prototype.sizeOfFontAtHeight = function (
              height
            ) {
              var _a = this.font,
                ascent = _a.ascent,
                descent = _a.descent,
                bbox = _a.bbox
              return (
                (1e3 * height) /
                ((ascent || bbox.maxY) * this.scale -
                  (descent || bbox.minY) * this.scale)
              )
            }),
            (CustomFontEmbedder.prototype.embedIntoContext = function (
              context,
              ref
            ) {
              return (
                (this.baseFontName =
                  this.customName || context.addRandomSuffix(this.fontName)),
                this.embedFontDict(context, ref)
              )
            }),
            (CustomFontEmbedder.prototype.embedFontDict = function (
              context,
              ref
            ) {
              return __awaiter(this, void 0, void 0, function () {
                var cidFontDictRef, unicodeCMapRef, fontDict
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, this.embedCIDFontDict(context)]
                    case 1:
                      return (
                        (cidFontDictRef = _a.sent()),
                        (unicodeCMapRef = this.embedUnicodeCmap(context)),
                        (fontDict = context.obj({
                          Type: 'Font',
                          Subtype: 'Type0',
                          BaseFont: this.baseFontName,
                          Encoding: 'Identity-H',
                          DescendantFonts: [cidFontDictRef],
                          ToUnicode: unicodeCMapRef,
                        })),
                        ref
                          ? (context.assign(ref, fontDict), [2, ref])
                          : [2, context.register(fontDict)]
                      )
                  }
                })
              })
            }),
            (CustomFontEmbedder.prototype.isCFF = function () {
              return this.font.cff
            }),
            (CustomFontEmbedder.prototype.embedCIDFontDict = function (
              context
            ) {
              return __awaiter(this, void 0, void 0, function () {
                var fontDescriptorRef, cidFontDict
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, this.embedFontDescriptor(context)]
                    case 1:
                      return (
                        (fontDescriptorRef = _a.sent()),
                        (cidFontDict = context.obj({
                          Type: 'Font',
                          Subtype: this.isCFF()
                            ? 'CIDFontType0'
                            : 'CIDFontType2',
                          CIDToGIDMap: 'Identity',
                          BaseFont: this.baseFontName,
                          CIDSystemInfo: {
                            Registry: objects_PDFString.of('Adobe'),
                            Ordering: objects_PDFString.of('Identity'),
                            Supplement: 0,
                          },
                          FontDescriptor: fontDescriptorRef,
                          W: this.computeWidths(),
                        })),
                        [2, context.register(cidFontDict)]
                      )
                  }
                })
              })
            }),
            (CustomFontEmbedder.prototype.embedFontDescriptor = function (
              context
            ) {
              return __awaiter(this, void 0, void 0, function () {
                var fontStreamRef,
                  scale,
                  _a,
                  italicAngle,
                  ascent,
                  descent,
                  capHeight,
                  xHeight,
                  _b,
                  minX,
                  minY,
                  maxX,
                  maxY,
                  fontDescriptor,
                  _c
                return __generator(this, function (_d) {
                  switch (_d.label) {
                    case 0:
                      return [4, this.embedFontStream(context)]
                    case 1:
                      return (
                        (fontStreamRef = _d.sent()),
                        (scale = this.scale),
                        (_a = this.font),
                        (italicAngle = _a.italicAngle),
                        (ascent = _a.ascent),
                        (descent = _a.descent),
                        (capHeight = _a.capHeight),
                        (xHeight = _a.xHeight),
                        (_b = this.font.bbox),
                        (minX = _b.minX),
                        (minY = _b.minY),
                        (maxX = _b.maxX),
                        (maxY = _b.maxY),
                        (fontDescriptor = context.obj(
                          (((_c = {
                            Type: 'FontDescriptor',
                            FontName: this.baseFontName,
                            Flags:
                              ((font = this.font),
                              (familyClass = font['OS/2']
                                ? font['OS/2'].sFamilyClass
                                : 0),
                              (options = {
                                fixedPitch: font.post.isFixedPitch,
                                serif: 1 <= familyClass && familyClass <= 7,
                                symbolic: !0,
                                script: 10 === familyClass,
                                italic: font.head.macStyle.italic,
                              }),
                              (flags = 0),
                              (flipBit = function (bit) {
                                flags |= 1 << (bit - 1)
                              }),
                              options.fixedPitch && flipBit(1),
                              options.serif && flipBit(2),
                              options.symbolic && flipBit(3),
                              options.script && flipBit(4),
                              options.nonsymbolic && flipBit(6),
                              options.italic && flipBit(7),
                              options.allCap && flipBit(17),
                              options.smallCap && flipBit(18),
                              options.forceBold && flipBit(19),
                              flags),
                            FontBBox: [
                              minX * scale,
                              minY * scale,
                              maxX * scale,
                              maxY * scale,
                            ],
                            ItalicAngle: italicAngle,
                            Ascent: ascent * scale,
                            Descent: descent * scale,
                            CapHeight: (capHeight || ascent) * scale,
                            XHeight: (xHeight || 0) * scale,
                            StemV: 0,
                          })[this.isCFF() ? 'FontFile3' : 'FontFile2'] =
                            fontStreamRef),
                          _c)
                        )),
                        [2, context.register(fontDescriptor)]
                      )
                  }
                  var options, flags, flipBit, font, familyClass
                })
              })
            }),
            (CustomFontEmbedder.prototype.serializeFont = function () {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  return [2, this.fontData]
                })
              })
            }),
            (CustomFontEmbedder.prototype.embedFontStream = function (context) {
              return __awaiter(this, void 0, void 0, function () {
                var fontStream, _a, _b
                return __generator(this, function (_c) {
                  switch (_c.label) {
                    case 0:
                      return (
                        (_b = (_a = context).flateStream),
                        [4, this.serializeFont()]
                      )
                    case 1:
                      return (
                        (fontStream = _b.apply(_a, [
                          _c.sent(),
                          { Subtype: this.isCFF() ? 'CIDFontType0C' : void 0 },
                        ])),
                        [2, context.register(fontStream)]
                      )
                  }
                })
              })
            }),
            (CustomFontEmbedder.prototype.embedUnicodeCmap = function (
              context
            ) {
              var cmap = (function (glyphs, glyphId) {
                  for (
                    var bfChars = new Array(glyphs.length),
                      idx = 0,
                      len = glyphs.length;
                    idx < len;
                    idx++
                  ) {
                    var glyph = glyphs[idx],
                      id = cmapHexFormat(cmapHexString(glyphId(glyph))),
                      unicode = cmapHexFormat.apply(
                        void 0,
                        glyph.codePoints.map(cmapCodePointFormat)
                      )
                    bfChars[idx] = [id, unicode]
                  }
                  return fillCmapTemplate(bfChars)
                })(this.glyphCache.access(), this.glyphId.bind(this)),
                cmapStream = context.flateStream(cmap)
              return context.register(cmapStream)
            }),
            (CustomFontEmbedder.prototype.glyphId = function (glyph) {
              return glyph ? glyph.id : -1
            }),
            (CustomFontEmbedder.prototype.computeWidths = function () {
              for (
                var glyphs = this.glyphCache.access(),
                  widths = [],
                  currSection = [],
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              ) {
                var currGlyph = glyphs[idx],
                  prevGlyph = glyphs[idx - 1],
                  currGlyphId = this.glyphId(currGlyph),
                  prevGlyphId = this.glyphId(prevGlyph)
                ;(0 === idx
                  ? widths.push(currGlyphId)
                  : currGlyphId - prevGlyphId !== 1 &&
                    (widths.push(currSection),
                    widths.push(currGlyphId),
                    (currSection = [])),
                  currSection.push(currGlyph.advanceWidth * this.scale))
              }
              return (widths.push(currSection), widths)
            }),
            CustomFontEmbedder
          )
        })()
        const embedders_CustomFontEmbedder = CustomFontEmbedder
        var CustomFontSubsetEmbedder = (function (_super) {
          function CustomFontSubsetEmbedder(
            font,
            fontData,
            customFontName,
            fontFeatures
          ) {
            var _this =
              _super.call(this, font, fontData, customFontName, fontFeatures) ||
              this
            return (
              (_this.subset = _this.font.createSubset()),
              (_this.glyphs = []),
              (_this.glyphCache = utils_Cache.populatedBy(function () {
                return _this.glyphs
              })),
              (_this.glyphIdMap = new Map()),
              _this
            )
          }
          return (
            __extends(CustomFontSubsetEmbedder, _super),
            (CustomFontSubsetEmbedder.for = function (
              fontkit,
              fontData,
              customFontName,
              fontFeatures
            ) {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, fontkit.create(fontData)]
                    case 1:
                      return [
                        2,
                        new CustomFontSubsetEmbedder(
                          _a.sent(),
                          fontData,
                          customFontName,
                          fontFeatures
                        ),
                      ]
                  }
                })
              })
            }),
            (CustomFontSubsetEmbedder.prototype.encodeText = function (text) {
              for (
                var glyphs = this.font.layout(text, this.fontFeatures).glyphs,
                  hexCodes = new Array(glyphs.length),
                  idx = 0,
                  len = glyphs.length;
                idx < len;
                idx++
              ) {
                var glyph = glyphs[idx],
                  subsetGlyphId = this.subset.includeGlyph(glyph)
                ;((this.glyphs[subsetGlyphId - 1] = glyph),
                  this.glyphIdMap.set(glyph.id, subsetGlyphId),
                  (hexCodes[idx] = toHexStringOfMinLength(subsetGlyphId, 4)))
              }
              return (
                this.glyphCache.invalidate(),
                objects_PDFHexString.of(hexCodes.join(''))
              )
            }),
            (CustomFontSubsetEmbedder.prototype.isCFF = function () {
              return this.subset.cff
            }),
            (CustomFontSubsetEmbedder.prototype.glyphId = function (glyph) {
              return glyph ? this.glyphIdMap.get(glyph.id) : -1
            }),
            (CustomFontSubsetEmbedder.prototype.serializeFont = function () {
              var _this = this
              return new Promise(function (resolve, reject) {
                var parts = []
                _this.subset
                  .encodeStream()
                  .on('data', function (bytes) {
                    return parts.push(bytes)
                  })
                  .on('end', function () {
                    return resolve(
                      (function (arrays) {
                        for (
                          var totalSize = 0, idx = 0, len = arrays.length;
                          idx < len;
                          idx++
                        )
                          totalSize += arrays[idx].length
                        var mergedBuffer = new Uint8Array(totalSize),
                          offset = 0
                        for (idx = 0, len = arrays.length; idx < len; idx++) {
                          var array = arrays[idx]
                          ;(mergedBuffer.set(array, offset),
                            (offset += array.length))
                        }
                        return mergedBuffer
                      })(parts)
                    )
                  })
                  .on('error', function (err) {
                    return reject(err)
                  })
              })
            }),
            CustomFontSubsetEmbedder
          )
        })(embedders_CustomFontEmbedder)
        const embedders_CustomFontSubsetEmbedder = CustomFontSubsetEmbedder
        var AFRelationship
        !(function (AFRelationship) {
          ;((AFRelationship.Source = 'Source'),
            (AFRelationship.Data = 'Data'),
            (AFRelationship.Alternative = 'Alternative'),
            (AFRelationship.Supplement = 'Supplement'),
            (AFRelationship.EncryptedPayload = 'EncryptedPayload'),
            (AFRelationship.FormData = 'EncryptedPayload'),
            (AFRelationship.Schema = 'Schema'),
            (AFRelationship.Unspecified = 'Unspecified'))
        })(AFRelationship || (AFRelationship = {}))
        const embedders_FileEmbedder = (function () {
          function FileEmbedder(fileData, fileName, options) {
            ;(void 0 === options && (options = {}),
              (this.fileData = fileData),
              (this.fileName = fileName),
              (this.options = options))
          }
          return (
            (FileEmbedder.for = function (bytes, fileName, options) {
              return (
                void 0 === options && (options = {}),
                new FileEmbedder(bytes, fileName, options)
              )
            }),
            (FileEmbedder.prototype.embedIntoContext = function (context, ref) {
              return __awaiter(this, void 0, void 0, function () {
                var _a,
                  mimeType,
                  description,
                  creationDate,
                  modificationDate,
                  afRelationship,
                  embeddedFileStream,
                  embeddedFileStreamRef,
                  fileSpecDict
                return __generator(this, function (_b) {
                  return (
                    (_a = this.options),
                    (mimeType = _a.mimeType),
                    (description = _a.description),
                    (creationDate = _a.creationDate),
                    (modificationDate = _a.modificationDate),
                    (afRelationship = _a.afRelationship),
                    (embeddedFileStream = context.flateStream(this.fileData, {
                      Type: 'EmbeddedFile',
                      Subtype: null != mimeType ? mimeType : void 0,
                      Params: {
                        Size: this.fileData.length,
                        CreationDate: creationDate
                          ? objects_PDFString.fromDate(creationDate)
                          : void 0,
                        ModDate: modificationDate
                          ? objects_PDFString.fromDate(modificationDate)
                          : void 0,
                      },
                    })),
                    (embeddedFileStreamRef =
                      context.register(embeddedFileStream)),
                    (fileSpecDict = context.obj({
                      Type: 'Filespec',
                      F: objects_PDFString.of(this.fileName),
                      UF: objects_PDFHexString.fromText(this.fileName),
                      EF: { F: embeddedFileStreamRef },
                      Desc: description
                        ? objects_PDFHexString.fromText(description)
                        : void 0,
                      AFRelationship:
                        null != afRelationship ? afRelationship : void 0,
                    })),
                    ref
                      ? (context.assign(ref, fileSpecDict), [2, ref])
                      : [2, context.register(fileSpecDict)]
                  )
                })
              })
            }),
            FileEmbedder
          )
        })()
        var ColorSpace,
          MARKERS = [
            65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481,
            65482, 65483, 65484, 65485, 65486, 65487,
          ]
        !(function (ColorSpace) {
          ;((ColorSpace.DeviceGray = 'DeviceGray'),
            (ColorSpace.DeviceRGB = 'DeviceRGB'),
            (ColorSpace.DeviceCMYK = 'DeviceCMYK'))
        })(ColorSpace || (ColorSpace = {}))
        var ChannelToColorSpace = {
          1: ColorSpace.DeviceGray,
          3: ColorSpace.DeviceRGB,
          4: ColorSpace.DeviceCMYK,
        }
        const embedders_JpegEmbedder = (function () {
          function JpegEmbedder(
            imageData,
            bitsPerComponent,
            width,
            height,
            colorSpace
          ) {
            ;((this.imageData = imageData),
              (this.bitsPerComponent = bitsPerComponent),
              (this.width = width),
              (this.height = height),
              (this.colorSpace = colorSpace))
          }
          return (
            (JpegEmbedder.for = function (imageData) {
              return __awaiter(this, void 0, void 0, function () {
                var dataView,
                  pos,
                  marker,
                  bitsPerComponent,
                  height,
                  width,
                  channelByte,
                  channelName
                return __generator(this, function (_a) {
                  if (
                    ((dataView = new DataView(imageData.buffer)),
                    65496 !== dataView.getUint16(0))
                  )
                    throw new Error('SOI not found in JPEG')
                  for (
                    pos = 2;
                    pos < dataView.byteLength &&
                    ((marker = dataView.getUint16(pos)),
                    (pos += 2),
                    !MARKERS.includes(marker));

                  )
                    pos += dataView.getUint16(pos)
                  if (!MARKERS.includes(marker)) throw new Error('Invalid JPEG')
                  if (
                    ((pos += 2),
                    (bitsPerComponent = dataView.getUint8(pos++)),
                    (height = dataView.getUint16(pos)),
                    (pos += 2),
                    (width = dataView.getUint16(pos)),
                    (pos += 2),
                    (channelByte = dataView.getUint8(pos++)),
                    !(channelName = ChannelToColorSpace[channelByte]))
                  )
                    throw new Error('Unknown JPEG channel.')
                  return [
                    2,
                    new JpegEmbedder(
                      imageData,
                      bitsPerComponent,
                      width,
                      height,
                      channelName
                    ),
                  ]
                })
              })
            }),
            (JpegEmbedder.prototype.embedIntoContext = function (context, ref) {
              return __awaiter(this, void 0, void 0, function () {
                var xObject
                return __generator(this, function (_a) {
                  return (
                    (xObject = context.stream(this.imageData, {
                      Type: 'XObject',
                      Subtype: 'Image',
                      BitsPerComponent: this.bitsPerComponent,
                      Width: this.width,
                      Height: this.height,
                      ColorSpace: this.colorSpace,
                      Filter: 'DCTDecode',
                      Decode:
                        this.colorSpace === ColorSpace.DeviceCMYK
                          ? [1, 0, 1, 0, 1, 0, 1, 0]
                          : void 0,
                    })),
                    ref
                      ? (context.assign(ref, xObject), [2, ref])
                      : [2, context.register(xObject)]
                  )
                })
              })
            }),
            JpegEmbedder
          )
        })()
        var N,
          W,
          H,
          UPNG = {}
        ;((UPNG.toRGBA8 = function (out) {
          var w = out.width,
            h = out.height
          if (null == out.tabs.acTL)
            return [UPNG.toRGBA8.decodeImage(out.data, w, h, out).buffer]
          var frms = []
          null == out.frames[0].data && (out.frames[0].data = out.data)
          for (
            var len = w * h * 4,
              img = new Uint8Array(len),
              empty = new Uint8Array(len),
              prev = new Uint8Array(len),
              i = 0;
            i < out.frames.length;
            i++
          ) {
            var frm = out.frames[i],
              fx = frm.rect.x,
              fy = frm.rect.y,
              fw = frm.rect.width,
              fh = frm.rect.height,
              fdata = UPNG.toRGBA8.decodeImage(frm.data, fw, fh, out)
            if (0 != i) for (var j = 0; j < len; j++) prev[j] = img[j]
            if (
              (0 == frm.blend
                ? UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 0)
                : 1 == frm.blend &&
                  UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 1),
              frms.push(img.buffer.slice(0)),
              0 == frm.dispose)
            );
            else if (1 == frm.dispose)
              UPNG._copyTile(empty, fw, fh, img, w, h, fx, fy, 0)
            else if (2 == frm.dispose)
              for (j = 0; j < len; j++) img[j] = prev[j]
          }
          return frms
        }),
          (UPNG.toRGBA8.decodeImage = function (data, w, h, out) {
            var area = w * h,
              bpp = UPNG.decode._getBPP(out),
              bpl = Math.ceil((w * bpp) / 8),
              bf = new Uint8Array(4 * area),
              bf32 = new Uint32Array(bf.buffer),
              ctype = out.ctype,
              depth = out.depth,
              rs = UPNG._bin.readUshort
            Date.now()
            if (6 == ctype) {
              var qarea = area << 2
              if (8 == depth)
                for (var i = 0; i < qarea; i += 4)
                  ((bf[i] = data[i]),
                    (bf[i + 1] = data[i + 1]),
                    (bf[i + 2] = data[i + 2]),
                    (bf[i + 3] = data[i + 3]))
              if (16 == depth) for (i = 0; i < qarea; i++) bf[i] = data[i << 1]
            } else if (2 == ctype) {
              var ts = out.tabs.tRNS
              if (null == ts) {
                if (8 == depth)
                  for (i = 0; i < area; i++) {
                    var ti = 3 * i
                    bf32[i] =
                      (255 << 24) |
                      (data[ti + 2] << 16) |
                      (data[ti + 1] << 8) |
                      data[ti]
                  }
                if (16 == depth)
                  for (i = 0; i < area; i++) {
                    ti = 6 * i
                    bf32[i] =
                      (255 << 24) |
                      (data[ti + 4] << 16) |
                      (data[ti + 2] << 8) |
                      data[ti]
                  }
              } else {
                var tr = ts[0],
                  tg = ts[1],
                  tb = ts[2]
                if (8 == depth)
                  for (i = 0; i < area; i++) {
                    var qi = i << 2
                    ti = 3 * i
                    ;((bf32[i] =
                      (255 << 24) |
                      (data[ti + 2] << 16) |
                      (data[ti + 1] << 8) |
                      data[ti]),
                      data[ti] == tr &&
                        data[ti + 1] == tg &&
                        data[ti + 2] == tb &&
                        (bf[qi + 3] = 0))
                  }
                if (16 == depth)
                  for (i = 0; i < area; i++) {
                    ;((qi = i << 2), (ti = 6 * i))
                    ;((bf32[i] =
                      (255 << 24) |
                      (data[ti + 4] << 16) |
                      (data[ti + 2] << 8) |
                      data[ti]),
                      rs(data, ti) == tr &&
                        rs(data, ti + 2) == tg &&
                        rs(data, ti + 4) == tb &&
                        (bf[qi + 3] = 0))
                  }
              }
            } else if (3 == ctype) {
              var p = out.tabs.PLTE,
                ap = out.tabs.tRNS,
                tl = ap ? ap.length : 0
              if (1 == depth)
                for (var y = 0; y < h; y++) {
                  var s0 = y * bpl,
                    t0 = y * w
                  for (i = 0; i < w; i++) {
                    qi = (t0 + i) << 2
                    var cj =
                      3 * (j = (data[s0 + (i >> 3)] >> (7 - (7 & i))) & 1)
                    ;((bf[qi] = p[cj]),
                      (bf[qi + 1] = p[cj + 1]),
                      (bf[qi + 2] = p[cj + 2]),
                      (bf[qi + 3] = j < tl ? ap[j] : 255))
                  }
                }
              if (2 == depth)
                for (y = 0; y < h; y++)
                  for (s0 = y * bpl, t0 = y * w, i = 0; i < w; i++) {
                    ;((qi = (t0 + i) << 2),
                      (cj =
                        3 *
                        (j =
                          (data[s0 + (i >> 2)] >> (6 - ((3 & i) << 1))) & 3)))
                    ;((bf[qi] = p[cj]),
                      (bf[qi + 1] = p[cj + 1]),
                      (bf[qi + 2] = p[cj + 2]),
                      (bf[qi + 3] = j < tl ? ap[j] : 255))
                  }
              if (4 == depth)
                for (y = 0; y < h; y++)
                  for (s0 = y * bpl, t0 = y * w, i = 0; i < w; i++) {
                    ;((qi = (t0 + i) << 2),
                      (cj =
                        3 *
                        (j =
                          (data[s0 + (i >> 1)] >> (4 - ((1 & i) << 2))) & 15)))
                    ;((bf[qi] = p[cj]),
                      (bf[qi + 1] = p[cj + 1]),
                      (bf[qi + 2] = p[cj + 2]),
                      (bf[qi + 3] = j < tl ? ap[j] : 255))
                  }
              if (8 == depth)
                for (i = 0; i < area; i++) {
                  var j
                  ;((qi = i << 2), (cj = 3 * (j = data[i])))
                  ;((bf[qi] = p[cj]),
                    (bf[qi + 1] = p[cj + 1]),
                    (bf[qi + 2] = p[cj + 2]),
                    (bf[qi + 3] = j < tl ? ap[j] : 255))
                }
            } else if (4 == ctype) {
              if (8 == depth)
                for (i = 0; i < area; i++) {
                  qi = i << 2
                  var gr = data[(di = i << 1)]
                  ;((bf[qi] = gr),
                    (bf[qi + 1] = gr),
                    (bf[qi + 2] = gr),
                    (bf[qi + 3] = data[di + 1]))
                }
              if (16 == depth)
                for (i = 0; i < area; i++) {
                  var di
                  ;((qi = i << 2), (gr = data[(di = i << 2)]))
                  ;((bf[qi] = gr),
                    (bf[qi + 1] = gr),
                    (bf[qi + 2] = gr),
                    (bf[qi + 3] = data[di + 2]))
                }
            } else if (0 == ctype)
              for (tr = out.tabs.tRNS ? out.tabs.tRNS : -1, y = 0; y < h; y++) {
                var off = y * bpl,
                  to = y * w
                if (1 == depth)
                  for (var x = 0; x < w; x++) {
                    var al =
                      (gr =
                        255 *
                        ((data[off + (x >>> 3)] >>> (7 - (7 & x))) & 1)) ==
                      255 * tr
                        ? 0
                        : 255
                    bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr
                  }
                else if (2 == depth)
                  for (x = 0; x < w; x++) {
                    al =
                      (gr =
                        85 *
                        ((data[off + (x >>> 2)] >>> (6 - ((3 & x) << 1))) &
                          3)) ==
                      85 * tr
                        ? 0
                        : 255
                    bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr
                  }
                else if (4 == depth)
                  for (x = 0; x < w; x++) {
                    al =
                      (gr =
                        17 *
                        ((data[off + (x >>> 1)] >>> (4 - ((1 & x) << 2))) &
                          15)) ==
                      17 * tr
                        ? 0
                        : 255
                    bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr
                  }
                else if (8 == depth)
                  for (x = 0; x < w; x++) {
                    al = (gr = data[off + x]) == tr ? 0 : 255
                    bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr
                  }
                else if (16 == depth)
                  for (x = 0; x < w; x++) {
                    ;((gr = data[off + (x << 1)]),
                      (al = rs(data, off + (x << i)) == tr ? 0 : 255))
                    bf32[to + x] = (al << 24) | (gr << 16) | (gr << 8) | gr
                  }
              }
            return bf
          }),
          (UPNG.decode = function (buff) {
            for (
              var fd,
                data = new Uint8Array(buff),
                offset = 8,
                bin = UPNG._bin,
                rUs = bin.readUshort,
                rUi = bin.readUint,
                out = { tabs: {}, frames: [] },
                dd = new Uint8Array(data.length),
                doff = 0,
                foff = 0,
                mgck = [137, 80, 78, 71, 13, 10, 26, 10],
                i = 0;
              i < 8;
              i++
            )
              if (data[i] != mgck[i]) throw 'The input is not a PNG file!'
            for (; offset < data.length; ) {
              var len = bin.readUint(data, offset)
              offset += 4
              var type = bin.readASCII(data, offset, 4)
              if (((offset += 4), 'IHDR' == type))
                UPNG.decode._IHDR(data, offset, out)
              else if ('IDAT' == type) {
                for (i = 0; i < len; i++) dd[doff + i] = data[offset + i]
                doff += len
              } else if ('acTL' == type)
                ((out.tabs[type] = {
                  num_frames: rUi(data, offset),
                  num_plays: rUi(data, offset + 4),
                }),
                  (fd = new Uint8Array(data.length)))
              else if ('fcTL' == type) {
                var fr
                if (0 != foff)
                  (((fr = out.frames[out.frames.length - 1]).data =
                    UPNG.decode._decompress(
                      out,
                      fd.slice(0, foff),
                      fr.rect.width,
                      fr.rect.height
                    )),
                    (foff = 0))
                var rct = {
                    x: rUi(data, offset + 12),
                    y: rUi(data, offset + 16),
                    width: rUi(data, offset + 4),
                    height: rUi(data, offset + 8),
                  },
                  del = rUs(data, offset + 22)
                del = rUs(data, offset + 20) / (0 == del ? 100 : del)
                var frm = {
                  rect: rct,
                  delay: Math.round(1e3 * del),
                  dispose: data[offset + 24],
                  blend: data[offset + 25],
                }
                out.frames.push(frm)
              } else if ('fdAT' == type) {
                for (i = 0; i < len - 4; i++)
                  fd[foff + i] = data[offset + i + 4]
                foff += len - 4
              } else if ('pHYs' == type)
                out.tabs[type] = [
                  bin.readUint(data, offset),
                  bin.readUint(data, offset + 4),
                  data[offset + 8],
                ]
              else if ('cHRM' == type) {
                out.tabs[type] = []
                for (i = 0; i < 8; i++)
                  out.tabs[type].push(bin.readUint(data, offset + 4 * i))
              } else if ('tEXt' == type) {
                null == out.tabs[type] && (out.tabs[type] = {})
                var nz = bin.nextZero(data, offset),
                  keyw = bin.readASCII(data, offset, nz - offset),
                  text = bin.readASCII(data, nz + 1, offset + len - nz - 1)
                out.tabs[type][keyw] = text
              } else if ('iTXt' == type) {
                null == out.tabs[type] && (out.tabs[type] = {})
                nz = 0
                var off = offset
                nz = bin.nextZero(data, off)
                ;((keyw = bin.readASCII(data, off, nz - off)),
                  data[(off = nz + 1)],
                  data[off + 1])
                ;((off += 2), (nz = bin.nextZero(data, off)))
                bin.readASCII(data, off, nz - off)
                ;((off = nz + 1), (nz = bin.nextZero(data, off)))
                bin.readUTF8(data, off, nz - off)
                off = nz + 1
                text = bin.readUTF8(data, off, len - (off - offset))
                out.tabs[type][keyw] = text
              } else if ('PLTE' == type)
                out.tabs[type] = bin.readBytes(data, offset, len)
              else if ('hIST' == type) {
                var pl = out.tabs.PLTE.length / 3
                out.tabs[type] = []
                for (i = 0; i < pl; i++)
                  out.tabs[type].push(rUs(data, offset + 2 * i))
              } else if ('tRNS' == type)
                3 == out.ctype
                  ? (out.tabs[type] = bin.readBytes(data, offset, len))
                  : 0 == out.ctype
                    ? (out.tabs[type] = rUs(data, offset))
                    : 2 == out.ctype &&
                      (out.tabs[type] = [
                        rUs(data, offset),
                        rUs(data, offset + 2),
                        rUs(data, offset + 4),
                      ])
              else if ('gAMA' == type)
                out.tabs[type] = bin.readUint(data, offset) / 1e5
              else if ('sRGB' == type) out.tabs[type] = data[offset]
              else if ('bKGD' == type)
                0 == out.ctype || 4 == out.ctype
                  ? (out.tabs[type] = [rUs(data, offset)])
                  : 2 == out.ctype || 6 == out.ctype
                    ? (out.tabs[type] = [
                        rUs(data, offset),
                        rUs(data, offset + 2),
                        rUs(data, offset + 4),
                      ])
                    : 3 == out.ctype && (out.tabs[type] = data[offset])
              else if ('IEND' == type) break
              offset += len
              bin.readUint(data, offset)
              offset += 4
            }
            0 != foff &&
              (((fr = out.frames[out.frames.length - 1]).data =
                UPNG.decode._decompress(
                  out,
                  fd.slice(0, foff),
                  fr.rect.width,
                  fr.rect.height
                )),
              (foff = 0))
            return (
              (out.data = UPNG.decode._decompress(
                out,
                dd,
                out.width,
                out.height
              )),
              delete out.compress,
              delete out.interlace,
              delete out.filter,
              out
            )
          }),
          (UPNG.decode._decompress = function (out, dd, w, h) {
            Date.now()
            var bpp = UPNG.decode._getBPP(out),
              bpl = Math.ceil((w * bpp) / 8),
              buff = new Uint8Array((bpl + 1 + out.interlace) * h)
            dd = UPNG.decode._inflate(dd, buff)
            Date.now()
            return (
              0 == out.interlace
                ? (dd = UPNG.decode._filterZero(dd, out, 0, w, h))
                : 1 == out.interlace &&
                  (dd = UPNG.decode._readInterlace(dd, out)),
              dd
            )
          }),
          (UPNG.decode._inflate = function (data, buff) {
            return UPNG.inflateRaw(
              new Uint8Array(data.buffer, 2, data.length - 6),
              buff
            )
          }),
          (UPNG.inflateRaw =
            (((H = {}).H = {}),
            (H.H.N = function (N, W) {
              var v,
                C,
                R = Uint8Array,
                i = 0,
                m = 0,
                J = 0,
                h = 0,
                Q = 0,
                X = 0,
                u = 0,
                w = 0,
                d = 0
              if (3 == N[0] && 0 == N[1]) return W || new R(0)
              var V = H.H,
                n = V.b,
                A = V.e,
                l = V.R,
                M = V.n,
                I = V.A,
                e = V.Z,
                b = V.m,
                Z = null == W
              for (Z && (W = new R((N.length >>> 2) << 3)); 0 == i; )
                if (
                  ((i = n(N, d, 1)), (m = n(N, d + 1, 2)), (d += 3), 0 != m)
                ) {
                  if (
                    (Z && (W = H.H.W(W, w + (1 << 17))),
                    1 == m && ((v = b.J), (C = b.h), (X = 511), (u = 31)),
                    2 == m)
                  ) {
                    ;((J = A(N, d, 5) + 257),
                      (h = A(N, d + 5, 5) + 1),
                      (Q = A(N, d + 10, 4) + 4),
                      (d += 14))
                    for (var j = 1, c = 0; c < 38; c += 2)
                      ((b.Q[c] = 0), (b.Q[c + 1] = 0))
                    for (c = 0; c < Q; c++) {
                      var K = A(N, d + 3 * c, 3)
                      ;((b.Q[1 + (b.X[c] << 1)] = K), K > j && (j = K))
                    }
                    ;((d += 3 * Q),
                      M(b.Q, j),
                      I(b.Q, j, b.u),
                      (v = b.w),
                      (C = b.d),
                      (d = l(b.u, (1 << j) - 1, J + h, N, d, b.v)))
                    var r = V.V(b.v, 0, J, b.C)
                    X = (1 << r) - 1
                    var S = V.V(b.v, J, h, b.D)
                    ;((u = (1 << S) - 1),
                      M(b.C, r),
                      I(b.C, r, v),
                      M(b.D, S),
                      I(b.D, S, C))
                  }
                  for (;;) {
                    var T = v[e(N, d) & X]
                    d += 15 & T
                    var p = T >>> 4
                    if (p >>> 8 == 0) W[w++] = p
                    else {
                      if (256 == p) break
                      var z = w + p - 254
                      if (p > 264) {
                        var _ = b.q[p - 257]
                        ;((z = w + (_ >>> 3) + A(N, d, 7 & _)), (d += 7 & _))
                      }
                      var $ = C[e(N, d) & u]
                      d += 15 & $
                      var s = $ >>> 4,
                        Y = b.c[s],
                        a = (Y >>> 4) + n(N, d, 15 & Y)
                      for (d += 15 & Y; w < z; )
                        ((W[w] = W[w++ - a]),
                          (W[w] = W[w++ - a]),
                          (W[w] = W[w++ - a]),
                          (W[w] = W[w++ - a]))
                      w = z
                    }
                  }
                } else {
                  7 & d && (d += 8 - (7 & d))
                  var D = (d >>> 3) + 4,
                    q = N[D - 4] | (N[D - 3] << 8)
                  ;(Z && (W = H.H.W(W, w + q)),
                    W.set(new R(N.buffer, N.byteOffset + D, q), w),
                    (d = (D + q) << 3),
                    (w += q))
                }
              return W.length == w ? W : W.slice(0, w)
            }),
            (H.H.W = function (N, W) {
              var R = N.length
              if (W <= R) return N
              var V = new Uint8Array(R << 1)
              return (V.set(N, 0), V)
            }),
            (H.H.R = function (N, W, R, V, n, A) {
              for (var l = H.H.e, M = H.H.Z, I = 0; I < R; ) {
                var e = N[M(V, n) & W]
                n += 15 & e
                var b = e >>> 4
                if (b <= 15) ((A[I] = b), I++)
                else {
                  var Z = 0,
                    m = 0
                  16 == b
                    ? ((m = 3 + l(V, n, 2)), (n += 2), (Z = A[I - 1]))
                    : 17 == b
                      ? ((m = 3 + l(V, n, 3)), (n += 3))
                      : 18 == b && ((m = 11 + l(V, n, 7)), (n += 7))
                  for (var J = I + m; I < J; ) ((A[I] = Z), I++)
                }
              }
              return n
            }),
            (H.H.V = function (N, W, R, V) {
              for (var n = 0, A = 0, l = V.length >>> 1; A < R; ) {
                var M = N[A + W]
                ;((V[A << 1] = 0), (V[1 + (A << 1)] = M), M > n && (n = M), A++)
              }
              for (; A < l; ) ((V[A << 1] = 0), (V[1 + (A << 1)] = 0), A++)
              return n
            }),
            (H.H.n = function (N, W) {
              for (
                var n, A, l, I, R = H.H.m, V = N.length, e = R.j, M = 0;
                M <= W;
                M++
              )
                e[M] = 0
              for (M = 1; M < V; M += 2) e[N[M]]++
              var b = R.K
              for (n = 0, e[0] = 0, A = 1; A <= W; A++)
                ((n = (n + e[A - 1]) << 1), (b[A] = n))
              for (l = 0; l < V; l += 2)
                0 != (I = N[l + 1]) && ((N[l] = b[I]), b[I]++)
            }),
            (H.H.A = function (N, W, R) {
              for (var V = N.length, A = H.H.m.r, l = 0; l < V; l += 2)
                if (0 != N[l + 1])
                  for (
                    var M = l >> 1,
                      I = N[l + 1],
                      e = (M << 4) | I,
                      b = W - I,
                      Z = N[l] << b,
                      m = Z + (1 << b);
                    Z != m;

                  )
                    ((R[A[Z] >>> (15 - W)] = e), Z++)
            }),
            (H.H.l = function (N, W) {
              for (var R = H.H.m.r, V = 15 - W, n = 0; n < N.length; n += 2) {
                var A = N[n] << (W - N[n + 1])
                N[n] = R[A] >>> V
              }
            }),
            (H.H.M = function (N, W, R) {
              R <<= 7 & W
              var V = W >>> 3
              ;((N[V] |= R), (N[V + 1] |= R >>> 8))
            }),
            (H.H.I = function (N, W, R) {
              R <<= 7 & W
              var V = W >>> 3
              ;((N[V] |= R), (N[V + 1] |= R >>> 8), (N[V + 2] |= R >>> 16))
            }),
            (H.H.e = function (N, W, R) {
              return (
                ((N[W >>> 3] | (N[(W >>> 3) + 1] << 8)) >>> (7 & W)) &
                ((1 << R) - 1)
              )
            }),
            (H.H.b = function (N, W, R) {
              return (
                ((N[W >>> 3] |
                  (N[(W >>> 3) + 1] << 8) |
                  (N[(W >>> 3) + 2] << 16)) >>>
                  (7 & W)) &
                ((1 << R) - 1)
              )
            }),
            (H.H.Z = function (N, W) {
              return (
                (N[W >>> 3] |
                  (N[(W >>> 3) + 1] << 8) |
                  (N[(W >>> 3) + 2] << 16)) >>>
                (7 & W)
              )
            }),
            (H.H.i = function (N, W) {
              return (
                (N[W >>> 3] |
                  (N[(W >>> 3) + 1] << 8) |
                  (N[(W >>> 3) + 2] << 16) |
                  (N[(W >>> 3) + 3] << 24)) >>>
                (7 & W)
              )
            }),
            (H.H.m =
              ((N = Uint16Array),
              (W = Uint32Array),
              {
                K: new N(16),
                j: new N(16),
                X: [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                S: [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999,
                  999, 999,
                ],
                T: [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
                ],
                q: new N(32),
                p: [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577, 65535, 65535,
                ],
                z: [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
                ],
                c: new W(32),
                J: new N(512),
                _: [],
                h: new N(32),
                $: [],
                w: new N(32768),
                C: [],
                v: [],
                d: new N(32768),
                D: [],
                u: new N(512),
                Q: [],
                r: new N(32768),
                s: new W(286),
                Y: new W(30),
                a: new W(19),
                t: new W(15e3),
                k: new N(65536),
                g: new N(32768),
              })),
            (function () {
              for (var N = H.H.m, R = 0; R < 32768; R++) {
                var V = R
                ;((V =
                  ((4278255360 &
                    (V =
                      ((4042322160 &
                        (V =
                          ((3435973836 &
                            (V =
                              ((2863311530 & V) >>> 1) |
                              ((1431655765 & V) << 1))) >>>
                            2) |
                          ((858993459 & V) << 2))) >>>
                        4) |
                      ((252645135 & V) << 4))) >>>
                    8) |
                  ((16711935 & V) << 8)),
                  (N.r[R] = ((V >>> 16) | (V << 16)) >>> 17))
              }
              function n(A, l, M) {
                for (; 0 != l--; ) A.push(0, M)
              }
              for (R = 0; R < 32; R++)
                ((N.q[R] = (N.S[R] << 3) | N.T[R]),
                  (N.c[R] = (N.p[R] << 4) | N.z[R]))
              ;(n(N._, 144, 8),
                n(N._, 112, 9),
                n(N._, 24, 7),
                n(N._, 8, 8),
                H.H.n(N._, 9),
                H.H.A(N._, 9, N.J),
                H.H.l(N._, 9),
                n(N.$, 32, 5),
                H.H.n(N.$, 5),
                H.H.A(N.$, 5, N.h),
                H.H.l(N.$, 5),
                n(N.Q, 19, 0),
                n(N.C, 286, 0),
                n(N.D, 30, 0),
                n(N.v, 320, 0))
            })(),
            H.H.N)),
          (UPNG.decode._readInterlace = function (data, out) {
            for (
              var w = out.width,
                h = out.height,
                bpp = UPNG.decode._getBPP(out),
                cbpp = bpp >> 3,
                bpl = Math.ceil((w * bpp) / 8),
                img = new Uint8Array(h * bpl),
                di = 0,
                starting_row = [0, 0, 4, 0, 2, 0, 1],
                starting_col = [0, 4, 0, 2, 0, 1, 0],
                row_increment = [8, 8, 8, 4, 4, 2, 2],
                col_increment = [8, 8, 4, 4, 2, 2, 1],
                pass = 0;
              pass < 7;

            ) {
              for (
                var ri = row_increment[pass],
                  ci = col_increment[pass],
                  sw = 0,
                  sh = 0,
                  cr = starting_row[pass];
                cr < h;

              )
                ((cr += ri), sh++)
              for (var cc = starting_col[pass]; cc < w; ) ((cc += ci), sw++)
              var bpll = Math.ceil((sw * bpp) / 8)
              UPNG.decode._filterZero(data, out, di, sw, sh)
              for (var y = 0, row = starting_row[pass]; row < h; ) {
                for (
                  var col = starting_col[pass], cdi = (di + y * bpll) << 3;
                  col < w;

                ) {
                  var val
                  if (1 == bpp)
                    ((val = ((val = data[cdi >> 3]) >> (7 - (7 & cdi))) & 1),
                      (img[row * bpl + (col >> 3)] |= val << (7 - (7 & col))))
                  if (2 == bpp)
                    ((val = ((val = data[cdi >> 3]) >> (6 - (7 & cdi))) & 3),
                      (img[row * bpl + (col >> 2)] |=
                        val << (6 - ((3 & col) << 1))))
                  if (4 == bpp)
                    ((val = ((val = data[cdi >> 3]) >> (4 - (7 & cdi))) & 15),
                      (img[row * bpl + (col >> 1)] |=
                        val << (4 - ((1 & col) << 2))))
                  if (bpp >= 8)
                    for (var ii = row * bpl + col * cbpp, j = 0; j < cbpp; j++)
                      img[ii + j] = data[(cdi >> 3) + j]
                  ;((cdi += bpp), (col += ci))
                }
                ;(y++, (row += ri))
              }
              ;(sw * sh != 0 && (di += sh * (1 + bpll)), (pass += 1))
            }
            return img
          }),
          (UPNG.decode._getBPP = function (out) {
            return [1, null, 3, 1, 2, null, 4][out.ctype] * out.depth
          }),
          (UPNG.decode._filterZero = function (data, out, off, w, h) {
            var bpp = UPNG.decode._getBPP(out),
              bpl = Math.ceil((w * bpp) / 8),
              paeth = UPNG.decode._paeth
            bpp = Math.ceil(bpp / 8)
            var i = 0,
              di = 1,
              type = data[off],
              x = 0
            if ((type > 1 && (data[off] = [0, 0, 1][type - 2]), 3 == type))
              for (x = bpp; x < bpl; x++)
                data[x + 1] = (data[x + 1] + (data[x + 1 - bpp] >>> 1)) & 255
            for (var y = 0; y < h; y++)
              if (
                ((x = 0),
                0 == (type = data[(di = (i = off + y * bpl) + y + 1) - 1]))
              )
                for (; x < bpl; x++) data[i + x] = data[di + x]
              else if (1 == type) {
                for (; x < bpp; x++) data[i + x] = data[di + x]
                for (; x < bpl; x++)
                  data[i + x] = data[di + x] + data[i + x - bpp]
              } else if (2 == type)
                for (; x < bpl; x++)
                  data[i + x] = data[di + x] + data[i + x - bpl]
              else if (3 == type) {
                for (; x < bpp; x++)
                  data[i + x] = data[di + x] + (data[i + x - bpl] >>> 1)
                for (; x < bpl; x++)
                  data[i + x] =
                    data[di + x] +
                    ((data[i + x - bpl] + data[i + x - bpp]) >>> 1)
              } else {
                for (; x < bpp; x++)
                  data[i + x] = data[di + x] + paeth(0, data[i + x - bpl], 0)
                for (; x < bpl; x++)
                  data[i + x] =
                    data[di + x] +
                    paeth(
                      data[i + x - bpp],
                      data[i + x - bpl],
                      data[i + x - bpp - bpl]
                    )
              }
            return data
          }),
          (UPNG.decode._paeth = function (a, b, c) {
            var p = a + b - c,
              pa = p - a,
              pb = p - b,
              pc = p - c
            return pa * pa <= pb * pb && pa * pa <= pc * pc
              ? a
              : pb * pb <= pc * pc
                ? b
                : c
          }),
          (UPNG.decode._IHDR = function (data, offset, out) {
            var bin = UPNG._bin
            ;((out.width = bin.readUint(data, offset)),
              (offset += 4),
              (out.height = bin.readUint(data, offset)),
              (offset += 4),
              (out.depth = data[offset]),
              offset++,
              (out.ctype = data[offset]),
              offset++,
              (out.compress = data[offset]),
              offset++,
              (out.filter = data[offset]),
              offset++,
              (out.interlace = data[offset]),
              offset++)
          }),
          (UPNG._bin = {
            nextZero: function (data, p) {
              for (; 0 != data[p]; ) p++
              return p
            },
            readUshort: function (buff, p) {
              return (buff[p] << 8) | buff[p + 1]
            },
            writeUshort: function (buff, p, n) {
              ;((buff[p] = (n >> 8) & 255), (buff[p + 1] = 255 & n))
            },
            readUint: function (buff, p) {
              return (
                16777216 * buff[p] +
                ((buff[p + 1] << 16) | (buff[p + 2] << 8) | buff[p + 3])
              )
            },
            writeUint: function (buff, p, n) {
              ;((buff[p] = (n >> 24) & 255),
                (buff[p + 1] = (n >> 16) & 255),
                (buff[p + 2] = (n >> 8) & 255),
                (buff[p + 3] = 255 & n))
            },
            readASCII: function (buff, p, l) {
              for (var s = '', i = 0; i < l; i++)
                s += String.fromCharCode(buff[p + i])
              return s
            },
            writeASCII: function (data, p, s) {
              for (var i = 0; i < s.length; i++) data[p + i] = s.charCodeAt(i)
            },
            readBytes: function (buff, p, l) {
              for (var arr = [], i = 0; i < l; i++) arr.push(buff[p + i])
              return arr
            },
            pad: function (n) {
              return n.length < 2 ? '0' + n : n
            },
            readUTF8: function (buff, p, l) {
              for (var ns, s = '', i = 0; i < l; i++)
                s += '%' + UPNG._bin.pad(buff[p + i].toString(16))
              try {
                ns = decodeURIComponent(s)
              } catch (e) {
                return UPNG._bin.readASCII(buff, p, l)
              }
              return ns
            },
          }),
          (UPNG._copyTile = function (
            sb,
            sw,
            sh,
            tb,
            tw,
            th,
            xoff,
            yoff,
            mode
          ) {
            for (
              var w = Math.min(sw, tw),
                h = Math.min(sh, th),
                si = 0,
                ti = 0,
                y = 0;
              y < h;
              y++
            )
              for (var x = 0; x < w; x++)
                if (
                  (xoff >= 0 && yoff >= 0
                    ? ((si = (y * sw + x) << 2),
                      (ti = ((yoff + y) * tw + xoff + x) << 2))
                    : ((si = ((-yoff + y) * sw - xoff + x) << 2),
                      (ti = (y * tw + x) << 2)),
                  0 == mode)
                )
                  ((tb[ti] = sb[si]),
                    (tb[ti + 1] = sb[si + 1]),
                    (tb[ti + 2] = sb[si + 2]),
                    (tb[ti + 3] = sb[si + 3]))
                else if (1 == mode) {
                  var fa = sb[si + 3] * (1 / 255),
                    fr = sb[si] * fa,
                    fg = sb[si + 1] * fa,
                    fb = sb[si + 2] * fa,
                    ba = tb[ti + 3] * (1 / 255),
                    br = tb[ti] * ba,
                    bg = tb[ti + 1] * ba,
                    bb = tb[ti + 2] * ba,
                    ifa = 1 - fa,
                    oa = fa + ba * ifa,
                    ioa = 0 == oa ? 0 : 1 / oa
                  ;((tb[ti + 3] = 255 * oa),
                    (tb[ti + 0] = (fr + br * ifa) * ioa),
                    (tb[ti + 1] = (fg + bg * ifa) * ioa),
                    (tb[ti + 2] = (fb + bb * ifa) * ioa))
                } else if (2 == mode) {
                  ;((fa = sb[si + 3]),
                    (fr = sb[si]),
                    (fg = sb[si + 1]),
                    (fb = sb[si + 2]),
                    (ba = tb[ti + 3]),
                    (br = tb[ti]),
                    (bg = tb[ti + 1]),
                    (bb = tb[ti + 2]))
                  fa == ba && fr == br && fg == bg && fb == bb
                    ? ((tb[ti] = 0),
                      (tb[ti + 1] = 0),
                      (tb[ti + 2] = 0),
                      (tb[ti + 3] = 0))
                    : ((tb[ti] = fr),
                      (tb[ti + 1] = fg),
                      (tb[ti + 2] = fb),
                      (tb[ti + 3] = fa))
                } else if (3 == mode) {
                  ;((fa = sb[si + 3]),
                    (fr = sb[si]),
                    (fg = sb[si + 1]),
                    (fb = sb[si + 2]),
                    (ba = tb[ti + 3]),
                    (br = tb[ti]),
                    (bg = tb[ti + 1]),
                    (bb = tb[ti + 2]))
                  if (fa == ba && fr == br && fg == bg && fb == bb) continue
                  if (fa < 220 && ba > 20) return !1
                }
            return !0
          }),
          (UPNG.encode = function (bufs, w, h, ps, dels, tabs, forbidPlte) {
            ;(null == ps && (ps = 0), null == forbidPlte && (forbidPlte = !1))
            var nimg = UPNG.encode.compress(bufs, w, h, ps, [
              !1,
              !1,
              !1,
              0,
              forbidPlte,
            ])
            return (
              UPNG.encode.compressPNG(nimg, -1),
              UPNG.encode._main(nimg, w, h, dels, tabs)
            )
          }),
          (UPNG.encodeLL = function (bufs, w, h, cc, ac, depth, dels, tabs) {
            for (
              var nimg = {
                  ctype: 0 + (1 == cc ? 0 : 2) + (0 == ac ? 0 : 4),
                  depth,
                  frames: [],
                },
                bipp = (Date.now(), (cc + ac) * depth),
                bipl = bipp * w,
                i = 0;
              i < bufs.length;
              i++
            )
              nimg.frames.push({
                rect: { x: 0, y: 0, width: w, height: h },
                img: new Uint8Array(bufs[i]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(bipp / 8),
                bpl: Math.ceil(bipl / 8),
              })
            return (
              UPNG.encode.compressPNG(nimg, 0, !0),
              UPNG.encode._main(nimg, w, h, dels, tabs)
            )
          }),
          (UPNG.encode._main = function (nimg, w, h, dels, tabs) {
            null == tabs && (tabs = {})
            var crc = UPNG.crc.crc,
              wUi = UPNG._bin.writeUint,
              wUs = UPNG._bin.writeUshort,
              wAs = UPNG._bin.writeASCII,
              offset = 8,
              anim = nimg.frames.length > 1,
              pltAlpha = !1,
              leng = 33 + (anim ? 20 : 0)
            if (
              (null != tabs.sRGB && (leng += 13),
              null != tabs.pHYs && (leng += 21),
              3 == nimg.ctype)
            ) {
              for (var dl = nimg.plte.length, i = 0; i < dl; i++)
                nimg.plte[i] >>> 24 != 255 && (pltAlpha = !0)
              leng += 8 + 3 * dl + 4 + (pltAlpha ? 8 + 1 * dl + 4 : 0)
            }
            for (var j = 0; j < nimg.frames.length; j++) {
              ;(anim && (leng += 38),
                (leng += (fr = nimg.frames[j]).cimg.length + 12),
                0 != j && (leng += 4))
            }
            leng += 12
            var data = new Uint8Array(leng),
              wr = [137, 80, 78, 71, 13, 10, 26, 10]
            for (i = 0; i < 8; i++) data[i] = wr[i]
            if (
              (wUi(data, offset, 13),
              wAs(data, (offset += 4), 'IHDR'),
              wUi(data, (offset += 4), w),
              wUi(data, (offset += 4), h),
              (data[(offset += 4)] = nimg.depth),
              (data[++offset] = nimg.ctype),
              (data[++offset] = 0),
              (data[++offset] = 0),
              (data[++offset] = 0),
              wUi(data, ++offset, crc(data, offset - 17, 17)),
              (offset += 4),
              null != tabs.sRGB &&
                (wUi(data, offset, 1),
                wAs(data, (offset += 4), 'sRGB'),
                (data[(offset += 4)] = tabs.sRGB),
                wUi(data, ++offset, crc(data, offset - 5, 5)),
                (offset += 4)),
              null != tabs.pHYs &&
                (wUi(data, offset, 9),
                wAs(data, (offset += 4), 'pHYs'),
                wUi(data, (offset += 4), tabs.pHYs[0]),
                wUi(data, (offset += 4), tabs.pHYs[1]),
                (data[(offset += 4)] = tabs.pHYs[2]),
                wUi(data, ++offset, crc(data, offset - 13, 13)),
                (offset += 4)),
              anim &&
                (wUi(data, offset, 8),
                wAs(data, (offset += 4), 'acTL'),
                wUi(data, (offset += 4), nimg.frames.length),
                wUi(data, (offset += 4), null != tabs.loop ? tabs.loop : 0),
                wUi(data, (offset += 4), crc(data, offset - 12, 12)),
                (offset += 4)),
              3 == nimg.ctype)
            ) {
              ;(wUi(data, offset, 3 * (dl = nimg.plte.length)),
                wAs(data, (offset += 4), 'PLTE'),
                (offset += 4))
              for (i = 0; i < dl; i++) {
                var ti = 3 * i,
                  c = nimg.plte[i],
                  r = 255 & c,
                  g = (c >>> 8) & 255,
                  b = (c >>> 16) & 255
                ;((data[offset + ti + 0] = r),
                  (data[offset + ti + 1] = g),
                  (data[offset + ti + 2] = b))
              }
              if (
                (wUi(
                  data,
                  (offset += 3 * dl),
                  crc(data, offset - 3 * dl - 4, 3 * dl + 4)
                ),
                (offset += 4),
                pltAlpha)
              ) {
                ;(wUi(data, offset, dl),
                  wAs(data, (offset += 4), 'tRNS'),
                  (offset += 4))
                for (i = 0; i < dl; i++)
                  data[offset + i] = (nimg.plte[i] >>> 24) & 255
                ;(wUi(data, (offset += dl), crc(data, offset - dl - 4, dl + 4)),
                  (offset += 4))
              }
            }
            var fi = 0
            for (j = 0; j < nimg.frames.length; j++) {
              var fr = nimg.frames[j]
              anim &&
                (wUi(data, offset, 26),
                wAs(data, (offset += 4), 'fcTL'),
                wUi(data, (offset += 4), fi++),
                wUi(data, (offset += 4), fr.rect.width),
                wUi(data, (offset += 4), fr.rect.height),
                wUi(data, (offset += 4), fr.rect.x),
                wUi(data, (offset += 4), fr.rect.y),
                wUs(data, (offset += 4), dels[j]),
                wUs(data, (offset += 2), 1e3),
                (data[(offset += 2)] = fr.dispose),
                (data[++offset] = fr.blend),
                wUi(data, ++offset, crc(data, offset - 30, 30)),
                (offset += 4))
              var imgd = fr.cimg
              wUi(data, offset, (dl = imgd.length) + (0 == j ? 0 : 4))
              var ioff = (offset += 4)
              ;(wAs(data, offset, 0 == j ? 'IDAT' : 'fdAT'),
                (offset += 4),
                0 != j && (wUi(data, offset, fi++), (offset += 4)),
                data.set(imgd, offset),
                wUi(data, (offset += dl), crc(data, ioff, offset - ioff)),
                (offset += 4))
            }
            return (
              wUi(data, offset, 0),
              wAs(data, (offset += 4), 'IEND'),
              wUi(data, (offset += 4), crc(data, offset - 4, 4)),
              (offset += 4),
              data.buffer
            )
          }),
          (UPNG.encode.compressPNG = function (out, filter, levelZero) {
            for (var i = 0; i < out.frames.length; i++) {
              var frm = out.frames[i],
                nh = (frm.rect.width, frm.rect.height),
                fdata = new Uint8Array(nh * frm.bpl + nh)
              frm.cimg = UPNG.encode._filterZero(
                frm.img,
                nh,
                frm.bpp,
                frm.bpl,
                fdata,
                filter,
                levelZero
              )
            }
          }),
          (UPNG.encode.compress = function (bufs, w, h, ps, prms) {
            for (
              var onlyBlend = prms[0],
                evenCrd = prms[1],
                forbidPrev = prms[2],
                minBits = prms[3],
                forbidPlte = prms[4],
                ctype = 6,
                depth = 8,
                alphaAnd = 255,
                j = 0;
              j < bufs.length;
              j++
            )
              for (
                var img = new Uint8Array(bufs[j]), ilen = img.length, i = 0;
                i < ilen;
                i += 4
              )
                alphaAnd &= img[i + 3]
            var gotAlpha = 255 != alphaAnd,
              frms = UPNG.encode.framize(
                bufs,
                w,
                h,
                onlyBlend,
                evenCrd,
                forbidPrev
              ),
              cmap = {},
              plte = [],
              inds = []
            if (0 != ps) {
              var nbufs = []
              for (i = 0; i < frms.length; i++) nbufs.push(frms[i].img.buffer)
              var abuf = UPNG.encode.concatRGBA(nbufs),
                qres = UPNG.quantize(abuf, ps),
                cof = 0,
                bb = new Uint8Array(qres.abuf)
              for (i = 0; i < frms.length; i++) {
                var bln = (ti = frms[i].img).length
                inds.push(new Uint8Array(qres.inds.buffer, cof >> 2, bln >> 2))
                for (j = 0; j < bln; j += 4)
                  ((ti[j] = bb[cof + j]),
                    (ti[j + 1] = bb[cof + j + 1]),
                    (ti[j + 2] = bb[cof + j + 2]),
                    (ti[j + 3] = bb[cof + j + 3]))
                cof += bln
              }
              for (i = 0; i < qres.plte.length; i++)
                plte.push(qres.plte[i].est.rgba)
            } else
              for (j = 0; j < frms.length; j++) {
                var frm = frms[j],
                  img32 = new Uint32Array(frm.img.buffer),
                  nw = frm.rect.width,
                  ind = ((ilen = img32.length), new Uint8Array(ilen))
                inds.push(ind)
                for (i = 0; i < ilen; i++) {
                  var c = img32[i]
                  if (0 != i && c == img32[i - 1]) ind[i] = ind[i - 1]
                  else if (i > nw && c == img32[i - nw]) ind[i] = ind[i - nw]
                  else {
                    var cmc = cmap[c]
                    if (
                      null == cmc &&
                      ((cmap[c] = cmc = plte.length),
                      plte.push(c),
                      plte.length >= 300)
                    )
                      break
                    ind[i] = cmc
                  }
                }
              }
            var cc = plte.length
            cc <= 256 &&
              0 == forbidPlte &&
              ((depth = cc <= 2 ? 1 : cc <= 4 ? 2 : cc <= 16 ? 4 : 8),
              (depth = Math.max(depth, minBits)))
            for (j = 0; j < frms.length; j++) {
              ;((frm = frms[j]).rect.x, frm.rect.y, (nw = frm.rect.width))
              var nh = frm.rect.height,
                cimg = frm.img,
                bpl = (new Uint32Array(cimg.buffer), 4 * nw),
                bpp = 4
              if (cc <= 256 && 0 == forbidPlte) {
                bpl = Math.ceil((depth * nw) / 8)
                for (
                  var nimg = new Uint8Array(bpl * nh), inj = inds[j], y = 0;
                  y < nh;
                  y++
                ) {
                  i = y * bpl
                  var ii = y * nw
                  if (8 == depth)
                    for (var x = 0; x < nw; x++) nimg[i + x] = inj[ii + x]
                  else if (4 == depth)
                    for (x = 0; x < nw; x++)
                      nimg[i + (x >> 1)] |= inj[ii + x] << (4 - 4 * (1 & x))
                  else if (2 == depth)
                    for (x = 0; x < nw; x++)
                      nimg[i + (x >> 2)] |= inj[ii + x] << (6 - 2 * (3 & x))
                  else if (1 == depth)
                    for (x = 0; x < nw; x++)
                      nimg[i + (x >> 3)] |= inj[ii + x] << (7 - 1 * (7 & x))
                }
                ;((cimg = nimg), (ctype = 3), (bpp = 1))
              } else if (0 == gotAlpha && 1 == frms.length) {
                nimg = new Uint8Array(nw * nh * 3)
                var area = nw * nh
                for (i = 0; i < area; i++) {
                  var ti,
                    qi = 4 * i
                  ;((nimg[(ti = 3 * i)] = cimg[qi]),
                    (nimg[ti + 1] = cimg[qi + 1]),
                    (nimg[ti + 2] = cimg[qi + 2]))
                }
                ;((cimg = nimg), (ctype = 2), (bpp = 3), (bpl = 3 * nw))
              }
              ;((frm.img = cimg), (frm.bpl = bpl), (frm.bpp = bpp))
            }
            return { ctype, depth, plte, frames: frms }
          }),
          (UPNG.encode.framize = function (
            bufs,
            w,
            h,
            alwaysBlend,
            evenCrd,
            forbidPrev
          ) {
            for (var frms = [], j = 0; j < bufs.length; j++) {
              var nimg,
                cimg = new Uint8Array(bufs[j]),
                cimg32 = new Uint32Array(cimg.buffer),
                nx = 0,
                ny = 0,
                nw = w,
                nh = h,
                blend = alwaysBlend ? 1 : 0
              if (0 != j) {
                for (
                  var tlim =
                      forbidPrev ||
                      alwaysBlend ||
                      1 == j ||
                      0 != frms[j - 2].dispose
                        ? 1
                        : 2,
                    tstp = 0,
                    tarea = 1e9,
                    it = 0;
                  it < tlim;
                  it++
                ) {
                  for (
                    var pimg = new Uint8Array(bufs[j - 1 - it]),
                      p32 = new Uint32Array(bufs[j - 1 - it]),
                      mix = w,
                      miy = h,
                      max = -1,
                      may = -1,
                      y = 0;
                    y < h;
                    y++
                  )
                    for (var x = 0; x < w; x++) {
                      cimg32[(i = y * w + x)] != p32[i] &&
                        (x < mix && (mix = x),
                        x > max && (max = x),
                        y < miy && (miy = y),
                        y > may && (may = y))
                    }
                  ;(-1 == max && (mix = miy = max = may = 0),
                    evenCrd && (1 & ~mix || mix--, 1 & ~miy || miy--))
                  var sarea = (max - mix + 1) * (may - miy + 1)
                  sarea < tarea &&
                    ((tarea = sarea),
                    (tstp = it),
                    (nx = mix),
                    (ny = miy),
                    (nw = max - mix + 1),
                    (nh = may - miy + 1))
                }
                pimg = new Uint8Array(bufs[j - 1 - tstp])
                ;(1 == tstp && (frms[j - 1].dispose = 2),
                  (nimg = new Uint8Array(nw * nh * 4)),
                  UPNG._copyTile(pimg, w, h, nimg, nw, nh, -nx, -ny, 0),
                  1 ==
                  (blend = UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 3)
                    ? 1
                    : 0)
                    ? UPNG.encode._prepareDiff(cimg, w, h, nimg, {
                        x: nx,
                        y: ny,
                        width: nw,
                        height: nh,
                      })
                    : UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 0))
              } else nimg = cimg.slice(0)
              frms.push({
                rect: { x: nx, y: ny, width: nw, height: nh },
                img: nimg,
                blend,
                dispose: 0,
              })
            }
            if (alwaysBlend)
              for (j = 0; j < frms.length; j++) {
                if (1 != (frm = frms[j]).blend) {
                  var r0 = frm.rect,
                    r1 = frms[j - 1].rect,
                    miX = Math.min(r0.x, r1.x),
                    miY = Math.min(r0.y, r1.y),
                    r = {
                      x: miX,
                      y: miY,
                      width: Math.max(r0.x + r0.width, r1.x + r1.width) - miX,
                      height:
                        Math.max(r0.y + r0.height, r1.y + r1.height) - miY,
                    }
                  ;((frms[j - 1].dispose = 1),
                    j - 1 != 0 &&
                      UPNG.encode._updateFrame(
                        bufs,
                        w,
                        h,
                        frms,
                        j - 1,
                        r,
                        evenCrd
                      ),
                    UPNG.encode._updateFrame(bufs, w, h, frms, j, r, evenCrd))
                }
              }
            if (1 != bufs.length)
              for (var i = 0; i < frms.length; i++) {
                var frm
                ;(frm = frms[i]).rect.width * frm.rect.height
              }
            return frms
          }),
          (UPNG.encode._updateFrame = function (
            bufs,
            w,
            h,
            frms,
            i,
            r,
            evenCrd
          ) {
            for (
              var U8 = Uint8Array,
                U32 = Uint32Array,
                pimg = new U8(bufs[i - 1]),
                pimg32 = new U32(bufs[i - 1]),
                nimg = i + 1 < bufs.length ? new U8(bufs[i + 1]) : null,
                cimg = new U8(bufs[i]),
                cimg32 = new U32(cimg.buffer),
                mix = w,
                miy = h,
                max = -1,
                may = -1,
                y = 0;
              y < r.height;
              y++
            )
              for (var x = 0; x < r.width; x++) {
                var cx = r.x + x,
                  cy = r.y + y,
                  j = cy * w + cx,
                  cc = cimg32[j]
                0 == cc ||
                  (0 == frms[i - 1].dispose &&
                    pimg32[j] == cc &&
                    (null == nimg || 0 != nimg[4 * j + 3])) ||
                  (cx < mix && (mix = cx),
                  cx > max && (max = cx),
                  cy < miy && (miy = cy),
                  cy > may && (may = cy))
              }
            ;(-1 == max && (mix = miy = max = may = 0),
              evenCrd && (1 & ~mix || mix--, 1 & ~miy || miy--),
              (r = {
                x: mix,
                y: miy,
                width: max - mix + 1,
                height: may - miy + 1,
              }))
            var fr = frms[i]
            ;((fr.rect = r),
              (fr.blend = 1),
              (fr.img = new Uint8Array(r.width * r.height * 4)),
              0 == frms[i - 1].dispose
                ? (UPNG._copyTile(
                    pimg,
                    w,
                    h,
                    fr.img,
                    r.width,
                    r.height,
                    -r.x,
                    -r.y,
                    0
                  ),
                  UPNG.encode._prepareDiff(cimg, w, h, fr.img, r))
                : UPNG._copyTile(
                    cimg,
                    w,
                    h,
                    fr.img,
                    r.width,
                    r.height,
                    -r.x,
                    -r.y,
                    0
                  ))
          }),
          (UPNG.encode._prepareDiff = function (cimg, w, h, nimg, rec) {
            UPNG._copyTile(
              cimg,
              w,
              h,
              nimg,
              rec.width,
              rec.height,
              -rec.x,
              -rec.y,
              2
            )
          }),
          (UPNG.encode._filterZero = function (
            img,
            h,
            bpp,
            bpl,
            data,
            filter,
            levelZero
          ) {
            var opts,
              fls = [],
              ftry = [0, 1, 2, 3, 4]
            ;(-1 != filter
              ? (ftry = [filter])
              : (h * bpl > 5e5 || 1 == bpp) && (ftry = [0]),
              levelZero && (opts = { level: 0 }))
            for (
              var CMPR = levelZero && null != UZIP ? UZIP : pako_default(),
                i = 0;
              i < ftry.length;
              i++
            ) {
              for (var y = 0; y < h; y++)
                UPNG.encode._filterLine(data, img, y, bpl, bpp, ftry[i])
              fls.push(CMPR.deflate(data, opts))
            }
            var ti,
              tsize = 1e9
            for (i = 0; i < fls.length; i++)
              fls[i].length < tsize && ((ti = i), (tsize = fls[i].length))
            return fls[ti]
          }),
          (UPNG.encode._filterLine = function (data, img, y, bpl, bpp, type) {
            var i = y * bpl,
              di = i + y,
              paeth = UPNG.decode._paeth
            if (((data[di] = type), di++, 0 == type))
              if (bpl < 500)
                for (var x = 0; x < bpl; x++) data[di + x] = img[i + x]
              else data.set(new Uint8Array(img.buffer, i, bpl), di)
            else if (1 == type) {
              for (x = 0; x < bpp; x++) data[di + x] = img[i + x]
              for (x = bpp; x < bpl; x++)
                data[di + x] = (img[i + x] - img[i + x - bpp] + 256) & 255
            } else if (0 == y) {
              for (x = 0; x < bpp; x++) data[di + x] = img[i + x]
              if (2 == type)
                for (x = bpp; x < bpl; x++) data[di + x] = img[i + x]
              if (3 == type)
                for (x = bpp; x < bpl; x++)
                  data[di + x] =
                    (img[i + x] - (img[i + x - bpp] >> 1) + 256) & 255
              if (4 == type)
                for (x = bpp; x < bpl; x++)
                  data[di + x] =
                    (img[i + x] - paeth(img[i + x - bpp], 0, 0) + 256) & 255
            } else {
              if (2 == type)
                for (x = 0; x < bpl; x++)
                  data[di + x] = (img[i + x] + 256 - img[i + x - bpl]) & 255
              if (3 == type) {
                for (x = 0; x < bpp; x++)
                  data[di + x] =
                    (img[i + x] + 256 - (img[i + x - bpl] >> 1)) & 255
                for (x = bpp; x < bpl; x++)
                  data[di + x] =
                    (img[i + x] +
                      256 -
                      ((img[i + x - bpl] + img[i + x - bpp]) >> 1)) &
                    255
              }
              if (4 == type) {
                for (x = 0; x < bpp; x++)
                  data[di + x] =
                    (img[i + x] + 256 - paeth(0, img[i + x - bpl], 0)) & 255
                for (x = bpp; x < bpl; x++)
                  data[di + x] =
                    (img[i + x] +
                      256 -
                      paeth(
                        img[i + x - bpp],
                        img[i + x - bpl],
                        img[i + x - bpp - bpl]
                      )) &
                    255
              }
            }
          }),
          (UPNG.crc = {
            table: (function () {
              for (var tab = new Uint32Array(256), n = 0; n < 256; n++) {
                for (var c = n, k = 0; k < 8; k++)
                  1 & c ? (c = 3988292384 ^ (c >>> 1)) : (c >>>= 1)
                tab[n] = c
              }
              return tab
            })(),
            update: function (c, buf, off, len) {
              for (var i = 0; i < len; i++)
                c = UPNG.crc.table[255 & (c ^ buf[off + i])] ^ (c >>> 8)
              return c
            },
            crc: function (b, o, l) {
              return 4294967295 ^ UPNG.crc.update(4294967295, b, o, l)
            },
          }),
          (UPNG.quantize = function (abuf, ps) {
            for (
              var oimg = new Uint8Array(abuf),
                nimg = oimg.slice(0),
                nimg32 = new Uint32Array(nimg.buffer),
                KD = UPNG.quantize.getKDtree(nimg, ps),
                root = KD[0],
                leafs = KD[1],
                sb = (UPNG.quantize.planeDst, oimg),
                tb = nimg32,
                len = sb.length,
                inds = new Uint8Array(oimg.length >> 2),
                i = 0;
              i < len;
              i += 4
            ) {
              var r = sb[i] * (1 / 255),
                g = sb[i + 1] * (1 / 255),
                b = sb[i + 2] * (1 / 255),
                a = sb[i + 3] * (1 / 255),
                nd = UPNG.quantize.getNearest(root, r, g, b, a)
              ;((inds[i >> 2] = nd.ind), (tb[i >> 2] = nd.est.rgba))
            }
            return { abuf: nimg.buffer, inds, plte: leafs }
          }),
          (UPNG.quantize.getKDtree = function (nimg, ps, err) {
            null == err && (err = 1e-4)
            var nimg32 = new Uint32Array(nimg.buffer),
              root = {
                i0: 0,
                i1: nimg.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              }
            ;((root.bst = UPNG.quantize.stats(nimg, root.i0, root.i1)),
              (root.est = UPNG.quantize.estats(root.bst)))
            for (var leafs = [root]; leafs.length < ps; ) {
              for (var maxL = 0, mi = 0, i = 0; i < leafs.length; i++)
                leafs[i].est.L > maxL && ((maxL = leafs[i].est.L), (mi = i))
              if (maxL < err) break
              var node = leafs[mi],
                s0 = UPNG.quantize.splitPixels(
                  nimg,
                  nimg32,
                  node.i0,
                  node.i1,
                  node.est.e,
                  node.est.eMq255
                )
              if (node.i0 >= s0 || node.i1 <= s0) node.est.L = 0
              else {
                var ln = {
                  i0: node.i0,
                  i1: s0,
                  bst: null,
                  est: null,
                  tdst: 0,
                  left: null,
                  right: null,
                }
                ;((ln.bst = UPNG.quantize.stats(nimg, ln.i0, ln.i1)),
                  (ln.est = UPNG.quantize.estats(ln.bst)))
                var rn = {
                  i0: s0,
                  i1: node.i1,
                  bst: null,
                  est: null,
                  tdst: 0,
                  left: null,
                  right: null,
                }
                rn.bst = { R: [], m: [], N: node.bst.N - ln.bst.N }
                for (i = 0; i < 16; i++)
                  rn.bst.R[i] = node.bst.R[i] - ln.bst.R[i]
                for (i = 0; i < 4; i++)
                  rn.bst.m[i] = node.bst.m[i] - ln.bst.m[i]
                ;((rn.est = UPNG.quantize.estats(rn.bst)),
                  (node.left = ln),
                  (node.right = rn),
                  (leafs[mi] = ln),
                  leafs.push(rn))
              }
            }
            leafs.sort(function (a, b) {
              return b.bst.N - a.bst.N
            })
            for (i = 0; i < leafs.length; i++) leafs[i].ind = i
            return [root, leafs]
          }),
          (UPNG.quantize.getNearest = function (nd, r, g, b, a) {
            if (null == nd.left)
              return ((nd.tdst = UPNG.quantize.dist(nd.est.q, r, g, b, a)), nd)
            var planeDst = UPNG.quantize.planeDst(nd.est, r, g, b, a),
              node0 = nd.left,
              node1 = nd.right
            planeDst > 0 && ((node0 = nd.right), (node1 = nd.left))
            var ln = UPNG.quantize.getNearest(node0, r, g, b, a)
            if (ln.tdst <= planeDst * planeDst) return ln
            var rn = UPNG.quantize.getNearest(node1, r, g, b, a)
            return rn.tdst < ln.tdst ? rn : ln
          }),
          (UPNG.quantize.planeDst = function (est, r, g, b, a) {
            var e = est.e
            return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq
          }),
          (UPNG.quantize.dist = function (q, r, g, b, a) {
            var d0 = r - q[0],
              d1 = g - q[1],
              d2 = b - q[2],
              d3 = a - q[3]
            return d0 * d0 + d1 * d1 + d2 * d2 + d3 * d3
          }),
          (UPNG.quantize.splitPixels = function (nimg, nimg32, i0, i1, e, eMq) {
            var vecDot = UPNG.quantize.vecDot
            i1 -= 4
            for (; i0 < i1; ) {
              for (; vecDot(nimg, i0, e) <= eMq; ) i0 += 4
              for (; vecDot(nimg, i1, e) > eMq; ) i1 -= 4
              if (i0 >= i1) break
              var t = nimg32[i0 >> 2]
              ;((nimg32[i0 >> 2] = nimg32[i1 >> 2]),
                (nimg32[i1 >> 2] = t),
                (i0 += 4),
                (i1 -= 4))
            }
            for (; vecDot(nimg, i0, e) > eMq; ) i0 -= 4
            return i0 + 4
          }),
          (UPNG.quantize.vecDot = function (nimg, i, e) {
            return (
              nimg[i] * e[0] +
              nimg[i + 1] * e[1] +
              nimg[i + 2] * e[2] +
              nimg[i + 3] * e[3]
            )
          }),
          (UPNG.quantize.stats = function (nimg, i0, i1) {
            for (
              var R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                m = [0, 0, 0, 0],
                N = (i1 - i0) >> 2,
                i = i0;
              i < i1;
              i += 4
            ) {
              var r = nimg[i] * (1 / 255),
                g = nimg[i + 1] * (1 / 255),
                b = nimg[i + 2] * (1 / 255),
                a = nimg[i + 3] * (1 / 255)
              ;((m[0] += r),
                (m[1] += g),
                (m[2] += b),
                (m[3] += a),
                (R[0] += r * r),
                (R[1] += r * g),
                (R[2] += r * b),
                (R[3] += r * a),
                (R[5] += g * g),
                (R[6] += g * b),
                (R[7] += g * a),
                (R[10] += b * b),
                (R[11] += b * a),
                (R[15] += a * a))
            }
            return (
              (R[4] = R[1]),
              (R[8] = R[2]),
              (R[9] = R[6]),
              (R[12] = R[3]),
              (R[13] = R[7]),
              (R[14] = R[11]),
              { R, m, N }
            )
          }),
          (UPNG.quantize.estats = function (stats) {
            var R = stats.R,
              m = stats.m,
              N = stats.N,
              m0 = m[0],
              m1 = m[1],
              m2 = m[2],
              m3 = m[3],
              iN = 0 == N ? 0 : 1 / N,
              Rj = [
                R[0] - m0 * m0 * iN,
                R[1] - m0 * m1 * iN,
                R[2] - m0 * m2 * iN,
                R[3] - m0 * m3 * iN,
                R[4] - m1 * m0 * iN,
                R[5] - m1 * m1 * iN,
                R[6] - m1 * m2 * iN,
                R[7] - m1 * m3 * iN,
                R[8] - m2 * m0 * iN,
                R[9] - m2 * m1 * iN,
                R[10] - m2 * m2 * iN,
                R[11] - m2 * m3 * iN,
                R[12] - m3 * m0 * iN,
                R[13] - m3 * m1 * iN,
                R[14] - m3 * m2 * iN,
                R[15] - m3 * m3 * iN,
              ],
              A = Rj,
              M = UPNG.M4,
              b = [0.5, 0.5, 0.5, 0.5],
              mi = 0,
              tmi = 0
            if (0 != N)
              for (
                var i = 0;
                i < 10 &&
                ((b = M.multVec(A, b)),
                (tmi = Math.sqrt(M.dot(b, b))),
                (b = M.sml(1 / tmi, b)),
                !(Math.abs(tmi - mi) < 1e-9));
                i++
              )
                mi = tmi
            var q = [m0 * iN, m1 * iN, m2 * iN, m3 * iN]
            return {
              Cov: Rj,
              q,
              e: b,
              L: mi,
              eMq255: M.dot(M.sml(255, q), b),
              eMq: M.dot(b, q),
              rgba:
                ((Math.round(255 * q[3]) << 24) |
                  (Math.round(255 * q[2]) << 16) |
                  (Math.round(255 * q[1]) << 8) |
                  Math.round(255 * q[0])) >>>
                0,
            }
          }),
          (UPNG.M4 = {
            multVec: function (m, v) {
              return [
                m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3],
                m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3],
                m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3],
                m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3],
              ]
            },
            dot: function (x, y) {
              return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3]
            },
            sml: function (a, y) {
              return [a * y[0], a * y[1], a * y[2], a * y[3]]
            },
          }),
          (UPNG.encode.concatRGBA = function (bufs) {
            for (var tlen = 0, i = 0; i < bufs.length; i++)
              tlen += bufs[i].byteLength
            var nimg = new Uint8Array(tlen),
              noff = 0
            for (i = 0; i < bufs.length; i++) {
              for (
                var img = new Uint8Array(bufs[i]), il = img.length, j = 0;
                j < il;
                j += 4
              ) {
                var r = img[j],
                  g = img[j + 1],
                  b = img[j + 2],
                  a = img[j + 3]
                ;(0 == a && (r = g = b = 0),
                  (nimg[noff + j] = r),
                  (nimg[noff + j + 1] = g),
                  (nimg[noff + j + 2] = b),
                  (nimg[noff + j + 3] = a))
              }
              noff += il
            }
            return nimg.buffer
          }))
        const upng_UPNG = UPNG
        var PngType
        !(function (PngType) {
          ;((PngType.Greyscale = 'Greyscale'),
            (PngType.Truecolour = 'Truecolour'),
            (PngType.IndexedColour = 'IndexedColour'),
            (PngType.GreyscaleWithAlpha = 'GreyscaleWithAlpha'),
            (PngType.TruecolourWithAlpha = 'TruecolourWithAlpha'))
        })(PngType || (PngType = {}))
        var PNG = (function () {
          function PNG(pngData) {
            var upng = upng_UPNG.decode(pngData),
              frames = upng_UPNG.toRGBA8(upng)
            if (frames.length > 1)
              throw new Error('Animated PNGs are not supported')
            var _a = (function (rgbaChannel) {
                for (
                  var pixelCount = Math.floor(rgbaChannel.length / 4),
                    rgbChannel = new Uint8Array(3 * pixelCount),
                    alphaChannel = new Uint8Array(1 * pixelCount),
                    rgbaOffset = 0,
                    rgbOffset = 0,
                    alphaOffset = 0;
                  rgbaOffset < rgbaChannel.length;

                )
                  ((rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++]),
                    (rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++]),
                    (rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++]),
                    (alphaChannel[alphaOffset++] = rgbaChannel[rgbaOffset++]))
                return { rgbChannel, alphaChannel }
              })(new Uint8Array(frames[0])),
              rgbChannel = _a.rgbChannel,
              alphaChannel = _a.alphaChannel
            ;((this.rgbChannel = rgbChannel),
              alphaChannel.some(function (a) {
                return a < 255
              }) && (this.alphaChannel = alphaChannel),
              (this.type = (function (ctype) {
                if (0 === ctype) return PngType.Greyscale
                if (2 === ctype) return PngType.Truecolour
                if (3 === ctype) return PngType.IndexedColour
                if (4 === ctype) return PngType.GreyscaleWithAlpha
                if (6 === ctype) return PngType.TruecolourWithAlpha
                throw new Error('Unknown color type: ' + ctype)
              })(upng.ctype)),
              (this.width = upng.width),
              (this.height = upng.height),
              (this.bitsPerComponent = 8))
          }
          return (
            (PNG.load = function (pngData) {
              return new PNG(pngData)
            }),
            PNG
          )
        })()
        const embedders_PngEmbedder = (function () {
          function PngEmbedder(png) {
            ;((this.image = png),
              (this.bitsPerComponent = png.bitsPerComponent),
              (this.width = png.width),
              (this.height = png.height),
              (this.colorSpace = 'DeviceRGB'))
          }
          return (
            (PngEmbedder.for = function (imageData) {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  return [2, new PngEmbedder(PNG.load(imageData))]
                })
              })
            }),
            (PngEmbedder.prototype.embedIntoContext = function (context, ref) {
              return __awaiter(this, void 0, void 0, function () {
                var SMask, xObject
                return __generator(this, function (_a) {
                  return (
                    (SMask = this.embedAlphaChannel(context)),
                    (xObject = context.flateStream(this.image.rgbChannel, {
                      Type: 'XObject',
                      Subtype: 'Image',
                      BitsPerComponent: this.image.bitsPerComponent,
                      Width: this.image.width,
                      Height: this.image.height,
                      ColorSpace: this.colorSpace,
                      SMask,
                    })),
                    ref
                      ? (context.assign(ref, xObject), [2, ref])
                      : [2, context.register(xObject)]
                  )
                })
              })
            }),
            (PngEmbedder.prototype.embedAlphaChannel = function (context) {
              if (this.image.alphaChannel) {
                var xObject = context.flateStream(this.image.alphaChannel, {
                  Type: 'XObject',
                  Subtype: 'Image',
                  Height: this.image.height,
                  Width: this.image.width,
                  BitsPerComponent: this.image.bitsPerComponent,
                  ColorSpace: 'DeviceGray',
                  Decode: [0, 1],
                })
                return context.register(xObject)
              }
            }),
            PngEmbedder
          )
        })()
        const streams_Stream = (function () {
          function Stream(buffer, start, length) {
            ;((this.bytes = buffer),
              (this.start = start || 0),
              (this.pos = this.start),
              (this.end = start && length ? start + length : this.bytes.length))
          }
          return (
            Object.defineProperty(Stream.prototype, 'length', {
              get: function () {
                return this.end - this.start
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(Stream.prototype, 'isEmpty', {
              get: function () {
                return 0 === this.length
              },
              enumerable: !1,
              configurable: !0,
            }),
            (Stream.prototype.getByte = function () {
              return this.pos >= this.end ? -1 : this.bytes[this.pos++]
            }),
            (Stream.prototype.getUint16 = function () {
              var b0 = this.getByte(),
                b1 = this.getByte()
              return -1 === b0 || -1 === b1 ? -1 : (b0 << 8) + b1
            }),
            (Stream.prototype.getInt32 = function () {
              return (
                (this.getByte() << 24) +
                (this.getByte() << 16) +
                (this.getByte() << 8) +
                this.getByte()
              )
            }),
            (Stream.prototype.getBytes = function (length, forceClamped) {
              void 0 === forceClamped && (forceClamped = !1)
              var bytes = this.bytes,
                pos = this.pos,
                strEnd = this.end
              if (length) {
                var end = pos + length
                ;(end > strEnd && (end = strEnd), (this.pos = end))
                subarray = bytes.subarray(pos, end)
                return forceClamped ? new Uint8ClampedArray(subarray) : subarray
              }
              var subarray = bytes.subarray(pos, strEnd)
              return forceClamped ? new Uint8ClampedArray(subarray) : subarray
            }),
            (Stream.prototype.peekByte = function () {
              var peekedByte = this.getByte()
              return (this.pos--, peekedByte)
            }),
            (Stream.prototype.peekBytes = function (length, forceClamped) {
              void 0 === forceClamped && (forceClamped = !1)
              var bytes = this.getBytes(length, forceClamped)
              return ((this.pos -= bytes.length), bytes)
            }),
            (Stream.prototype.skip = function (n) {
              ;(n || (n = 1), (this.pos += n))
            }),
            (Stream.prototype.reset = function () {
              this.pos = this.start
            }),
            (Stream.prototype.moveStart = function () {
              this.start = this.pos
            }),
            (Stream.prototype.makeSubStream = function (start, length) {
              return new Stream(this.bytes, start, length)
            }),
            (Stream.prototype.decode = function () {
              return this.bytes
            }),
            Stream
          )
        })()
        var emptyBuffer = new Uint8Array(0)
        const streams_DecodeStream = (function () {
          function DecodeStream(maybeMinBufferLength) {
            if (
              ((this.pos = 0),
              (this.bufferLength = 0),
              (this.eof = !1),
              (this.buffer = emptyBuffer),
              (this.minBufferLength = 512),
              maybeMinBufferLength)
            )
              for (; this.minBufferLength < maybeMinBufferLength; )
                this.minBufferLength *= 2
          }
          return (
            Object.defineProperty(DecodeStream.prototype, 'isEmpty', {
              get: function () {
                for (; !this.eof && 0 === this.bufferLength; ) this.readBlock()
                return 0 === this.bufferLength
              },
              enumerable: !1,
              configurable: !0,
            }),
            (DecodeStream.prototype.getByte = function () {
              for (var pos = this.pos; this.bufferLength <= pos; ) {
                if (this.eof) return -1
                this.readBlock()
              }
              return this.buffer[this.pos++]
            }),
            (DecodeStream.prototype.getUint16 = function () {
              var b0 = this.getByte(),
                b1 = this.getByte()
              return -1 === b0 || -1 === b1 ? -1 : (b0 << 8) + b1
            }),
            (DecodeStream.prototype.getInt32 = function () {
              return (
                (this.getByte() << 24) +
                (this.getByte() << 16) +
                (this.getByte() << 8) +
                this.getByte()
              )
            }),
            (DecodeStream.prototype.getBytes = function (length, forceClamped) {
              var end
              void 0 === forceClamped && (forceClamped = !1)
              var pos = this.pos
              if (length) {
                for (
                  this.ensureBuffer(pos + length), end = pos + length;
                  !this.eof && this.bufferLength < end;

                )
                  this.readBlock()
                var bufEnd = this.bufferLength
                end > bufEnd && (end = bufEnd)
              } else {
                for (; !this.eof; ) this.readBlock()
                end = this.bufferLength
              }
              this.pos = end
              var subarray = this.buffer.subarray(pos, end)
              return !forceClamped || subarray instanceof Uint8ClampedArray
                ? subarray
                : new Uint8ClampedArray(subarray)
            }),
            (DecodeStream.prototype.peekByte = function () {
              var peekedByte = this.getByte()
              return (this.pos--, peekedByte)
            }),
            (DecodeStream.prototype.peekBytes = function (
              length,
              forceClamped
            ) {
              void 0 === forceClamped && (forceClamped = !1)
              var bytes = this.getBytes(length, forceClamped)
              return ((this.pos -= bytes.length), bytes)
            }),
            (DecodeStream.prototype.skip = function (n) {
              ;(n || (n = 1), (this.pos += n))
            }),
            (DecodeStream.prototype.reset = function () {
              this.pos = 0
            }),
            (DecodeStream.prototype.makeSubStream = function (start, length) {
              for (
                var end = start + length;
                this.bufferLength <= end && !this.eof;

              )
                this.readBlock()
              return new streams_Stream(this.buffer, start, length)
            }),
            (DecodeStream.prototype.decode = function () {
              for (; !this.eof; ) this.readBlock()
              return this.buffer.subarray(0, this.bufferLength)
            }),
            (DecodeStream.prototype.readBlock = function () {
              throw new MethodNotImplementedError(
                this.constructor.name,
                'readBlock'
              )
            }),
            (DecodeStream.prototype.ensureBuffer = function (requested) {
              var buffer = this.buffer
              if (requested <= buffer.byteLength) return buffer
              for (var size = this.minBufferLength; size < requested; )
                size *= 2
              var buffer2 = new Uint8Array(size)
              return (buffer2.set(buffer), (this.buffer = buffer2))
            }),
            DecodeStream
          )
        })()
        var isSpace = function (ch) {
            return 32 === ch || 9 === ch || 13 === ch || 10 === ch
          },
          Ascii85Stream = (function (_super) {
            function Ascii85Stream(stream, maybeLength) {
              var _this = _super.call(this, maybeLength) || this
              return (
                (_this.stream = stream),
                (_this.input = new Uint8Array(5)),
                maybeLength && (maybeLength *= 0.8),
                _this
              )
            }
            return (
              __extends(Ascii85Stream, _super),
              (Ascii85Stream.prototype.readBlock = function () {
                for (
                  var stream = this.stream, c = stream.getByte();
                  isSpace(c);

                )
                  c = stream.getByte()
                if (-1 !== c && 126 !== c) {
                  var buffer,
                    i,
                    bufferLength = this.bufferLength
                  if (122 === c) {
                    for (
                      buffer = this.ensureBuffer(bufferLength + 4), i = 0;
                      i < 4;
                      ++i
                    )
                      buffer[bufferLength + i] = 0
                    this.bufferLength += 4
                  } else {
                    var input = this.input
                    for (input[0] = c, i = 1; i < 5; ++i) {
                      for (c = stream.getByte(); isSpace(c); )
                        c = stream.getByte()
                      if (((input[i] = c), -1 === c || 126 === c)) break
                    }
                    if (
                      ((buffer = this.ensureBuffer(bufferLength + i - 1)),
                      (this.bufferLength += i - 1),
                      i < 5)
                    ) {
                      for (; i < 5; ++i) input[i] = 117
                      this.eof = !0
                    }
                    var t = 0
                    for (i = 0; i < 5; ++i) t = 85 * t + (input[i] - 33)
                    for (i = 3; i >= 0; --i)
                      ((buffer[bufferLength + i] = 255 & t), (t >>= 8))
                  }
                } else this.eof = !0
              }),
              Ascii85Stream
            )
          })(streams_DecodeStream)
        const streams_Ascii85Stream = Ascii85Stream
        var AsciiHexStream = (function (_super) {
          function AsciiHexStream(stream, maybeLength) {
            var _this = _super.call(this, maybeLength) || this
            return (
              (_this.stream = stream),
              (_this.firstDigit = -1),
              maybeLength && (maybeLength *= 0.5),
              _this
            )
          }
          return (
            __extends(AsciiHexStream, _super),
            (AsciiHexStream.prototype.readBlock = function () {
              var bytes = this.stream.getBytes(8e3)
              if (bytes.length) {
                for (
                  var maxDecodeLength = (bytes.length + 1) >> 1,
                    buffer = this.ensureBuffer(
                      this.bufferLength + maxDecodeLength
                    ),
                    bufferLength = this.bufferLength,
                    firstDigit = this.firstDigit,
                    i = 0,
                    ii = bytes.length;
                  i < ii;
                  i++
                ) {
                  var ch = bytes[i],
                    digit = void 0
                  if (ch >= 48 && ch <= 57) digit = 15 & ch
                  else {
                    if (!((ch >= 65 && ch <= 70) || (ch >= 97 && ch <= 102))) {
                      if (62 === ch) {
                        this.eof = !0
                        break
                      }
                      continue
                    }
                    digit = 9 + (15 & ch)
                  }
                  firstDigit < 0
                    ? (firstDigit = digit)
                    : ((buffer[bufferLength++] = (firstDigit << 4) | digit),
                      (firstDigit = -1))
                }
                ;(firstDigit >= 0 &&
                  this.eof &&
                  ((buffer[bufferLength++] = firstDigit << 4),
                  (firstDigit = -1)),
                  (this.firstDigit = firstDigit),
                  (this.bufferLength = bufferLength))
              } else this.eof = !0
            }),
            AsciiHexStream
          )
        })(streams_DecodeStream)
        const streams_AsciiHexStream = AsciiHexStream
        var console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          codeLenCodeMap = new Int32Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]),
          lengthDecode = new Int32Array([
            3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095,
            131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227,
            262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258,
          ]),
          distDecode = new Int32Array([
            1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177,
            262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801,
            525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625,
            798721, 868353, 876545,
          ]),
          fixedLitCodeTab = [
            new Int32Array([
              459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016,
              459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048,
              459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032,
              459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064,
              459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024,
              459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056,
              459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040,
              459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072,
              459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020,
              459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052,
              459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036,
              459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068,
              459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028,
              459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060,
              459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044,
              459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076,
              459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018,
              459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050,
              459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034,
              459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066,
              459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026,
              459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058,
              459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042,
              459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074,
              459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022,
              459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054,
              459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038,
              459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070,
              459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030,
              459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062,
              459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046,
              459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078,
              459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017,
              459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049,
              459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033,
              459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065,
              459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025,
              459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057,
              459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041,
              459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073,
              459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021,
              459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053,
              459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037,
              459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069,
              459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029,
              459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061,
              459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045,
              459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077,
              459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019,
              459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051,
              459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035,
              459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067,
              459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027,
              459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059,
              459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043,
              459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075,
              459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023,
              459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055,
              459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039,
              459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071,
              459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031,
              459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063,
              459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047,
              459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079,
            ]),
            9,
          ],
          fixedDistCodeTab = [
            new Int32Array([
              327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708,
              327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681,
              327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683,
              327699, 327691, 327707, 327687, 327703, 327695, 0,
            ]),
            5,
          ],
          FlateStream = (function (_super) {
            function FlateStream(stream, maybeLength) {
              var _this = _super.call(this, maybeLength) || this
              _this.stream = stream
              var cmf = stream.getByte(),
                flg = stream.getByte()
              if (-1 === cmf || -1 === flg)
                throw new Error(
                  'Invalid header in flate stream: ' + cmf + ', ' + flg
                )
              if (8 != (15 & cmf))
                throw new Error(
                  'Unknown compression method in flate stream: ' +
                    cmf +
                    ', ' +
                    flg
                )
              if (((cmf << 8) + flg) % 31 != 0)
                throw new Error(
                  'Bad FCHECK in flate stream: ' + cmf + ', ' + flg
                )
              if (32 & flg)
                throw new Error(
                  'FDICT bit set in flate stream: ' + cmf + ', ' + flg
                )
              return ((_this.codeSize = 0), (_this.codeBuf = 0), _this)
            }
            return (
              __extends(FlateStream, _super),
              (FlateStream.prototype.readBlock = function () {
                var buffer,
                  len,
                  str = this.stream,
                  hdr = this.getBits(3)
                if ((1 & hdr && (this.eof = !0), 0 !== (hdr >>= 1))) {
                  var litCodeTable, distCodeTable
                  if (1 === hdr)
                    ((litCodeTable = fixedLitCodeTab),
                      (distCodeTable = fixedDistCodeTab))
                  else {
                    if (2 !== hdr)
                      throw new Error('Unknown block type in flate stream')
                    var numLitCodes = this.getBits(5) + 257,
                      numDistCodes = this.getBits(5) + 1,
                      numCodeLenCodes = this.getBits(4) + 4,
                      codeLenCodeLengths = new Uint8Array(
                        codeLenCodeMap.length
                      ),
                      i = void 0
                    for (i = 0; i < numCodeLenCodes; ++i)
                      codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3)
                    var codeLenCodeTab =
                      this.generateHuffmanTable(codeLenCodeLengths)
                    ;((len = 0), (i = 0))
                    for (
                      var codes = numLitCodes + numDistCodes,
                        codeLengths = new Uint8Array(codes),
                        bitsLength = void 0,
                        bitsOffset = void 0,
                        what = void 0;
                      i < codes;

                    ) {
                      var code = this.getCode(codeLenCodeTab)
                      if (16 === code)
                        ((bitsLength = 2), (bitsOffset = 3), (what = len))
                      else if (17 === code)
                        ((bitsLength = 3), (bitsOffset = 3), (what = len = 0))
                      else {
                        if (18 !== code) {
                          codeLengths[i++] = len = code
                          continue
                        }
                        ;((bitsLength = 7), (bitsOffset = 11), (what = len = 0))
                      }
                      for (
                        var repeatLength =
                          this.getBits(bitsLength) + bitsOffset;
                        repeatLength-- > 0;

                      )
                        codeLengths[i++] = what
                    }
                    ;((litCodeTable = this.generateHuffmanTable(
                      codeLengths.subarray(0, numLitCodes)
                    )),
                      (distCodeTable = this.generateHuffmanTable(
                        codeLengths.subarray(numLitCodes, codes)
                      )))
                  }
                  for (
                    var limit = (buffer = this.buffer) ? buffer.length : 0,
                      pos = this.bufferLength;
                    ;

                  ) {
                    var code1 = this.getCode(litCodeTable)
                    if (code1 < 256)
                      (pos + 1 >= limit &&
                        (limit = (buffer = this.ensureBuffer(pos + 1)).length),
                        (buffer[pos++] = code1))
                    else {
                      if (256 === code1) return void (this.bufferLength = pos)
                      var code2 = (code1 = lengthDecode[(code1 -= 257)]) >> 16
                      ;(code2 > 0 && (code2 = this.getBits(code2)),
                        (len = (65535 & code1) + code2),
                        (code1 = this.getCode(distCodeTable)),
                        (code2 = (code1 = distDecode[code1]) >> 16) > 0 &&
                          (code2 = this.getBits(code2)))
                      var dist = (65535 & code1) + code2
                      pos + len >= limit &&
                        (limit = (buffer = this.ensureBuffer(pos + len)).length)
                      for (var k = 0; k < len; ++k, ++pos)
                        buffer[pos] = buffer[pos - dist]
                    }
                  }
                } else {
                  var b = void 0
                  if (-1 === (b = str.getByte()))
                    throw new Error('Bad block header in flate stream')
                  var blockLen = b
                  if (-1 === (b = str.getByte()))
                    throw new Error('Bad block header in flate stream')
                  if (((blockLen |= b << 8), -1 === (b = str.getByte())))
                    throw new Error('Bad block header in flate stream')
                  var check = b
                  if (-1 === (b = str.getByte()))
                    throw new Error('Bad block header in flate stream')
                  if (
                    (check |= b << 8) !== (65535 & ~blockLen) &&
                    (0 !== blockLen || 0 !== check)
                  )
                    throw new Error(
                      'Bad uncompressed block length in flate stream'
                    )
                  ;((this.codeBuf = 0), (this.codeSize = 0))
                  var bufferLength = this.bufferLength
                  buffer = this.ensureBuffer(bufferLength + blockLen)
                  var end = bufferLength + blockLen
                  if (((this.bufferLength = end), 0 === blockLen))
                    -1 === str.peekByte() && (this.eof = !0)
                  else
                    for (var n = bufferLength; n < end; ++n) {
                      if (-1 === (b = str.getByte())) {
                        this.eof = !0
                        break
                      }
                      buffer[n] = b
                    }
                }
              }),
              (FlateStream.prototype.getBits = function (bits) {
                for (
                  var b,
                    str = this.stream,
                    codeSize = this.codeSize,
                    codeBuf = this.codeBuf;
                  codeSize < bits;

                ) {
                  if (-1 === (b = str.getByte()))
                    throw new Error('Bad encoding in flate stream')
                  ;((codeBuf |= b << codeSize), (codeSize += 8))
                }
                return (
                  (b = codeBuf & ((1 << bits) - 1)),
                  (this.codeBuf = codeBuf >> bits),
                  (this.codeSize = codeSize -= bits),
                  b
                )
              }),
              (FlateStream.prototype.getCode = function (table) {
                for (
                  var b,
                    str = this.stream,
                    codes = table[0],
                    maxLen = table[1],
                    codeSize = this.codeSize,
                    codeBuf = this.codeBuf;
                  codeSize < maxLen && -1 !== (b = str.getByte());

                )
                  ((codeBuf |= b << codeSize), (codeSize += 8))
                var code = codes[codeBuf & ((1 << maxLen) - 1)]
                'number' == typeof codes && console.log('FLATE:', code)
                var codeLen = code >> 16,
                  codeVal = 65535 & code
                if (codeLen < 1 || codeSize < codeLen)
                  throw new Error('Bad encoding in flate stream')
                return (
                  (this.codeBuf = codeBuf >> codeLen),
                  (this.codeSize = codeSize - codeLen),
                  codeVal
                )
              }),
              (FlateStream.prototype.generateHuffmanTable = function (lengths) {
                var i,
                  n = lengths.length,
                  maxLen = 0
                for (i = 0; i < n; ++i)
                  lengths[i] > maxLen && (maxLen = lengths[i])
                for (
                  var size = 1 << maxLen,
                    codes = new Int32Array(size),
                    len = 1,
                    code = 0,
                    skip = 2;
                  len <= maxLen;
                  ++len, code <<= 1, skip <<= 1
                )
                  for (var val = 0; val < n; ++val)
                    if (lengths[val] === len) {
                      var code2 = 0,
                        t = code
                      for (i = 0; i < len; ++i)
                        ((code2 = (code2 << 1) | (1 & t)), (t >>= 1))
                      for (i = code2; i < size; i += skip)
                        codes[i] = (len << 16) | val
                      ++code
                    }
                return [codes, maxLen]
              }),
              FlateStream
            )
          })(streams_DecodeStream)
        const streams_FlateStream = FlateStream
        var LZWStream = (function (_super) {
          function LZWStream(stream, maybeLength, earlyChange) {
            var _this = _super.call(this, maybeLength) || this
            ;((_this.stream = stream),
              (_this.cachedData = 0),
              (_this.bitsCached = 0))
            for (
              var lzwState = {
                  earlyChange,
                  codeLength: 9,
                  nextCode: 258,
                  dictionaryValues: new Uint8Array(4096),
                  dictionaryLengths: new Uint16Array(4096),
                  dictionaryPrevCodes: new Uint16Array(4096),
                  currentSequence: new Uint8Array(4096),
                  currentSequenceLength: 0,
                },
                i = 0;
              i < 256;
              ++i
            )
              ((lzwState.dictionaryValues[i] = i),
                (lzwState.dictionaryLengths[i] = 1))
            return ((_this.lzwState = lzwState), _this)
          }
          return (
            __extends(LZWStream, _super),
            (LZWStream.prototype.readBlock = function () {
              var i,
                j,
                q,
                estimatedDecodedSize = 1024,
                lzwState = this.lzwState
              if (lzwState) {
                var earlyChange = lzwState.earlyChange,
                  nextCode = lzwState.nextCode,
                  dictionaryValues = lzwState.dictionaryValues,
                  dictionaryLengths = lzwState.dictionaryLengths,
                  dictionaryPrevCodes = lzwState.dictionaryPrevCodes,
                  codeLength = lzwState.codeLength,
                  prevCode = lzwState.prevCode,
                  currentSequence = lzwState.currentSequence,
                  currentSequenceLength = lzwState.currentSequenceLength,
                  decodedLength = 0,
                  currentBufferLength = this.bufferLength,
                  buffer = this.ensureBuffer(
                    this.bufferLength + estimatedDecodedSize
                  )
                for (i = 0; i < 512; i++) {
                  var code = this.readBits(codeLength),
                    hasPrev = currentSequenceLength > 0
                  if (!code || code < 256)
                    ((currentSequence[0] = code), (currentSequenceLength = 1))
                  else {
                    if (!(code >= 258)) {
                      if (256 === code) {
                        ;((codeLength = 9),
                          (nextCode = 258),
                          (currentSequenceLength = 0))
                        continue
                      }
                      ;((this.eof = !0), delete this.lzwState)
                      break
                    }
                    if (code < nextCode)
                      for (
                        j =
                          (currentSequenceLength = dictionaryLengths[code]) - 1,
                          q = code;
                        j >= 0;
                        j--
                      )
                        ((currentSequence[j] = dictionaryValues[q]),
                          (q = dictionaryPrevCodes[q]))
                    else
                      currentSequence[currentSequenceLength++] =
                        currentSequence[0]
                  }
                  if (
                    (hasPrev &&
                      ((dictionaryPrevCodes[nextCode] = prevCode),
                      (dictionaryLengths[nextCode] =
                        dictionaryLengths[prevCode] + 1),
                      (dictionaryValues[nextCode] = currentSequence[0]),
                      (codeLength =
                        (++nextCode + earlyChange) &
                        (nextCode + earlyChange - 1)
                          ? codeLength
                          : 0 |
                            Math.min(
                              Math.log(nextCode + earlyChange) /
                                0.6931471805599453 +
                                1,
                              12
                            ))),
                    (prevCode = code),
                    estimatedDecodedSize <
                      (decodedLength += currentSequenceLength))
                  ) {
                    do {
                      estimatedDecodedSize += 512
                    } while (estimatedDecodedSize < decodedLength)
                    buffer = this.ensureBuffer(
                      this.bufferLength + estimatedDecodedSize
                    )
                  }
                  for (j = 0; j < currentSequenceLength; j++)
                    buffer[currentBufferLength++] = currentSequence[j]
                }
                ;((lzwState.nextCode = nextCode),
                  (lzwState.codeLength = codeLength),
                  (lzwState.prevCode = prevCode),
                  (lzwState.currentSequenceLength = currentSequenceLength),
                  (this.bufferLength = currentBufferLength))
              }
            }),
            (LZWStream.prototype.readBits = function (n) {
              for (
                var bitsCached = this.bitsCached, cachedData = this.cachedData;
                bitsCached < n;

              ) {
                var c = this.stream.getByte()
                if (-1 === c) return ((this.eof = !0), null)
                ;((cachedData = (cachedData << 8) | c), (bitsCached += 8))
              }
              return (
                (this.bitsCached = bitsCached -= n),
                (this.cachedData = cachedData),
                (cachedData >>> bitsCached) & ((1 << n) - 1)
              )
            }),
            LZWStream
          )
        })(streams_DecodeStream)
        const streams_LZWStream = LZWStream
        var RunLengthStream = (function (_super) {
          function RunLengthStream(stream, maybeLength) {
            var _this = _super.call(this, maybeLength) || this
            return ((_this.stream = stream), _this)
          }
          return (
            __extends(RunLengthStream, _super),
            (RunLengthStream.prototype.readBlock = function () {
              var repeatHeader = this.stream.getBytes(2)
              if (
                !repeatHeader ||
                repeatHeader.length < 2 ||
                128 === repeatHeader[0]
              )
                this.eof = !0
              else {
                var buffer,
                  bufferLength = this.bufferLength,
                  n = repeatHeader[0]
                if (n < 128) {
                  if (
                    (((buffer = this.ensureBuffer(bufferLength + n + 1))[
                      bufferLength++
                    ] = repeatHeader[1]),
                    n > 0)
                  ) {
                    var source = this.stream.getBytes(n)
                    ;(buffer.set(source, bufferLength), (bufferLength += n))
                  }
                } else {
                  n = 257 - n
                  var b = repeatHeader[1]
                  buffer = this.ensureBuffer(bufferLength + n + 1)
                  for (var i = 0; i < n; i++) buffer[bufferLength++] = b
                }
                this.bufferLength = bufferLength
              }
            }),
            RunLengthStream
          )
        })(streams_DecodeStream)
        const streams_RunLengthStream = RunLengthStream
        var decodeStream = function (stream, encoding, params) {
            if (encoding === objects_PDFName.of('FlateDecode'))
              return new streams_FlateStream(stream)
            if (encoding === objects_PDFName.of('LZWDecode')) {
              var earlyChange = 1
              if (params instanceof objects_PDFDict) {
                var EarlyChange = params.lookup(
                  objects_PDFName.of('EarlyChange')
                )
                EarlyChange instanceof objects_PDFNumber &&
                  (earlyChange = EarlyChange.asNumber())
              }
              return new streams_LZWStream(stream, void 0, earlyChange)
            }
            if (encoding === objects_PDFName.of('ASCII85Decode'))
              return new streams_Ascii85Stream(stream)
            if (encoding === objects_PDFName.of('ASCIIHexDecode'))
              return new streams_AsciiHexStream(stream)
            if (encoding === objects_PDFName.of('RunLengthDecode'))
              return new streams_RunLengthStream(stream)
            throw new UnsupportedEncodingError(encoding.asString())
          },
          decodePDFRawStream = function (_a) {
            var dict = _a.dict,
              contents = _a.contents,
              stream = new streams_Stream(contents),
              Filter = dict.lookup(objects_PDFName.of('Filter')),
              DecodeParms = dict.lookup(objects_PDFName.of('DecodeParms'))
            if (Filter instanceof objects_PDFName)
              stream = decodeStream(stream, Filter, DecodeParms)
            else if (Filter instanceof objects_PDFArray)
              for (var idx = 0, len = Filter.size(); idx < len; idx++)
                stream = decodeStream(
                  stream,
                  Filter.lookup(idx, objects_PDFName),
                  DecodeParms && DecodeParms.lookupMaybe(idx, objects_PDFDict)
                )
            else if (Filter)
              throw new UnexpectedObjectTypeError(
                [objects_PDFName, objects_PDFArray],
                Filter
              )
            return stream
          },
          PDFPageEmbedder = (function () {
            function PDFPageEmbedder(page, boundingBox, transformationMatrix) {
              this.page = page
              var bb =
                null != boundingBox
                  ? boundingBox
                  : (function (page) {
                      var mediaBox = page.MediaBox()
                      return {
                        left: 0,
                        bottom: 0,
                        right:
                          mediaBox.lookup(2, objects_PDFNumber).asNumber() -
                          mediaBox.lookup(0, objects_PDFNumber).asNumber(),
                        top:
                          mediaBox.lookup(3, objects_PDFNumber).asNumber() -
                          mediaBox.lookup(1, objects_PDFNumber).asNumber(),
                      }
                    })(page)
              ;((this.width = bb.right - bb.left),
                (this.height = bb.top - bb.bottom),
                (this.boundingBox = bb),
                (this.transformationMatrix =
                  null != transformationMatrix
                    ? transformationMatrix
                    : (function (bb) {
                        return [1, 0, 0, 1, -bb.left, -bb.bottom]
                      })(bb)))
            }
            return (
              (PDFPageEmbedder.for = function (
                page,
                boundingBox,
                transformationMatrix
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [
                      2,
                      new PDFPageEmbedder(
                        page,
                        boundingBox,
                        transformationMatrix
                      ),
                    ]
                  })
                })
              }),
              (PDFPageEmbedder.prototype.embedIntoContext = function (
                context,
                ref
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  var _a,
                    Contents,
                    Resources,
                    decodedContents,
                    _b,
                    left,
                    bottom,
                    right,
                    top,
                    xObject
                  return __generator(this, function (_c) {
                    if (
                      ((_a = this.page.normalizedEntries()),
                      (Contents = _a.Contents),
                      (Resources = _a.Resources),
                      !Contents)
                    )
                      throw new MissingPageContentsEmbeddingError()
                    return (
                      (decodedContents = this.decodeContents(Contents)),
                      (_b = this.boundingBox),
                      (left = _b.left),
                      (bottom = _b.bottom),
                      (right = _b.right),
                      (top = _b.top),
                      (xObject = context.flateStream(decodedContents, {
                        Type: 'XObject',
                        Subtype: 'Form',
                        FormType: 1,
                        BBox: [left, bottom, right, top],
                        Matrix: this.transformationMatrix,
                        Resources,
                      })),
                      ref
                        ? (context.assign(ref, xObject), [2, ref])
                        : [2, context.register(xObject)]
                    )
                  })
                })
              }),
              (PDFPageEmbedder.prototype.decodeContents = function (contents) {
                for (
                  var newline = Uint8Array.of(syntax_CharCodes.Newline),
                    decodedContents = [],
                    idx = 0,
                    len = contents.size();
                  idx < len;
                  idx++
                ) {
                  var stream = contents.lookup(idx, objects_PDFStream),
                    content = void 0
                  if (stream instanceof objects_PDFRawStream)
                    content = decodePDFRawStream(stream).decode()
                  else {
                    if (!(stream instanceof structures_PDFContentStream))
                      throw new UnrecognizedStreamTypeError(stream)
                    content = stream.getUnencodedContents()
                  }
                  decodedContents.push(content, newline)
                }
                return mergeIntoTypedArray.apply(void 0, decodedContents)
              }),
              PDFPageEmbedder
            )
          })()
        const embedders_PDFPageEmbedder = PDFPageEmbedder
        var NonFullScreenPageMode,
          ReadingDirection,
          PrintScaling,
          Duplex,
          asEnum = function (rawValue, enumType) {
            if (void 0 !== rawValue) return enumType[rawValue]
          }
        ;(!(function (NonFullScreenPageMode) {
          ;((NonFullScreenPageMode.UseNone = 'UseNone'),
            (NonFullScreenPageMode.UseOutlines = 'UseOutlines'),
            (NonFullScreenPageMode.UseThumbs = 'UseThumbs'),
            (NonFullScreenPageMode.UseOC = 'UseOC'))
        })(NonFullScreenPageMode || (NonFullScreenPageMode = {})),
          (function (ReadingDirection) {
            ;((ReadingDirection.L2R = 'L2R'), (ReadingDirection.R2L = 'R2L'))
          })(ReadingDirection || (ReadingDirection = {})),
          (function (PrintScaling) {
            ;((PrintScaling.None = 'None'),
              (PrintScaling.AppDefault = 'AppDefault'))
          })(PrintScaling || (PrintScaling = {})),
          (function (Duplex) {
            ;((Duplex.Simplex = 'Simplex'),
              (Duplex.DuplexFlipShortEdge = 'DuplexFlipShortEdge'),
              (Duplex.DuplexFlipLongEdge = 'DuplexFlipLongEdge'))
          })(Duplex || (Duplex = {})))
        var ViewerPreferences = (function () {
          function ViewerPreferences(dict) {
            this.dict = dict
          }
          return (
            (ViewerPreferences.prototype.lookupBool = function (key) {
              var returnObj = this.dict.lookup(objects_PDFName.of(key))
              if (returnObj instanceof objects_PDFBool) return returnObj
            }),
            (ViewerPreferences.prototype.lookupName = function (key) {
              var returnObj = this.dict.lookup(objects_PDFName.of(key))
              if (returnObj instanceof objects_PDFName) return returnObj
            }),
            (ViewerPreferences.prototype.HideToolbar = function () {
              return this.lookupBool('HideToolbar')
            }),
            (ViewerPreferences.prototype.HideMenubar = function () {
              return this.lookupBool('HideMenubar')
            }),
            (ViewerPreferences.prototype.HideWindowUI = function () {
              return this.lookupBool('HideWindowUI')
            }),
            (ViewerPreferences.prototype.FitWindow = function () {
              return this.lookupBool('FitWindow')
            }),
            (ViewerPreferences.prototype.CenterWindow = function () {
              return this.lookupBool('CenterWindow')
            }),
            (ViewerPreferences.prototype.DisplayDocTitle = function () {
              return this.lookupBool('DisplayDocTitle')
            }),
            (ViewerPreferences.prototype.NonFullScreenPageMode = function () {
              return this.lookupName('NonFullScreenPageMode')
            }),
            (ViewerPreferences.prototype.Direction = function () {
              return this.lookupName('Direction')
            }),
            (ViewerPreferences.prototype.PrintScaling = function () {
              return this.lookupName('PrintScaling')
            }),
            (ViewerPreferences.prototype.Duplex = function () {
              return this.lookupName('Duplex')
            }),
            (ViewerPreferences.prototype.PickTrayByPDFSize = function () {
              return this.lookupBool('PickTrayByPDFSize')
            }),
            (ViewerPreferences.prototype.PrintPageRange = function () {
              var PrintPageRange = this.dict.lookup(
                objects_PDFName.of('PrintPageRange')
              )
              if (PrintPageRange instanceof objects_PDFArray)
                return PrintPageRange
            }),
            (ViewerPreferences.prototype.NumCopies = function () {
              var NumCopies = this.dict.lookup(objects_PDFName.of('NumCopies'))
              if (NumCopies instanceof objects_PDFNumber) return NumCopies
            }),
            (ViewerPreferences.prototype.getHideToolbar = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.HideToolbar()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getHideMenubar = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.HideMenubar()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getHideWindowUI = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.HideWindowUI()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getFitWindow = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.FitWindow()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getCenterWindow = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.CenterWindow()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getDisplayDocTitle = function () {
              var _a, _b
              return (
                null !==
                  (_b =
                    null === (_a = this.DisplayDocTitle()) || void 0 === _a
                      ? void 0
                      : _a.asBoolean()) &&
                void 0 !== _b &&
                _b
              )
            }),
            (ViewerPreferences.prototype.getNonFullScreenPageMode =
              function () {
                var _a,
                  _b,
                  mode =
                    null === (_a = this.NonFullScreenPageMode()) ||
                    void 0 === _a
                      ? void 0
                      : _a.decodeText()
                return null !== (_b = asEnum(mode, NonFullScreenPageMode)) &&
                  void 0 !== _b
                  ? _b
                  : NonFullScreenPageMode.UseNone
              }),
            (ViewerPreferences.prototype.getReadingDirection = function () {
              var _a,
                _b,
                direction =
                  null === (_a = this.Direction()) || void 0 === _a
                    ? void 0
                    : _a.decodeText()
              return null !== (_b = asEnum(direction, ReadingDirection)) &&
                void 0 !== _b
                ? _b
                : ReadingDirection.L2R
            }),
            (ViewerPreferences.prototype.getPrintScaling = function () {
              var _a,
                _b,
                scaling =
                  null === (_a = this.PrintScaling()) || void 0 === _a
                    ? void 0
                    : _a.decodeText()
              return null !== (_b = asEnum(scaling, PrintScaling)) &&
                void 0 !== _b
                ? _b
                : PrintScaling.AppDefault
            }),
            (ViewerPreferences.prototype.getDuplex = function () {
              var _a,
                duplex =
                  null === (_a = this.Duplex()) || void 0 === _a
                    ? void 0
                    : _a.decodeText()
              return asEnum(duplex, Duplex)
            }),
            (ViewerPreferences.prototype.getPickTrayByPDFSize = function () {
              var _a
              return null === (_a = this.PickTrayByPDFSize()) || void 0 === _a
                ? void 0
                : _a.asBoolean()
            }),
            (ViewerPreferences.prototype.getPrintPageRange = function () {
              var rng = this.PrintPageRange()
              if (!rng) return []
              for (var pageRanges = [], i = 0; i < rng.size(); i += 2) {
                var start = rng.lookup(i, objects_PDFNumber).asNumber(),
                  end = rng.lookup(i + 1, objects_PDFNumber).asNumber()
                pageRanges.push({ start, end })
              }
              return pageRanges
            }),
            (ViewerPreferences.prototype.getNumCopies = function () {
              var _a, _b
              return null !==
                (_b =
                  null === (_a = this.NumCopies()) || void 0 === _a
                    ? void 0
                    : _a.asNumber()) && void 0 !== _b
                ? _b
                : 1
            }),
            (ViewerPreferences.prototype.setHideToolbar = function (
              hideToolbar
            ) {
              var HideToolbar = this.dict.context.obj(hideToolbar)
              this.dict.set(objects_PDFName.of('HideToolbar'), HideToolbar)
            }),
            (ViewerPreferences.prototype.setHideMenubar = function (
              hideMenubar
            ) {
              var HideMenubar = this.dict.context.obj(hideMenubar)
              this.dict.set(objects_PDFName.of('HideMenubar'), HideMenubar)
            }),
            (ViewerPreferences.prototype.setHideWindowUI = function (
              hideWindowUI
            ) {
              var HideWindowUI = this.dict.context.obj(hideWindowUI)
              this.dict.set(objects_PDFName.of('HideWindowUI'), HideWindowUI)
            }),
            (ViewerPreferences.prototype.setFitWindow = function (fitWindow) {
              var FitWindow = this.dict.context.obj(fitWindow)
              this.dict.set(objects_PDFName.of('FitWindow'), FitWindow)
            }),
            (ViewerPreferences.prototype.setCenterWindow = function (
              centerWindow
            ) {
              var CenterWindow = this.dict.context.obj(centerWindow)
              this.dict.set(objects_PDFName.of('CenterWindow'), CenterWindow)
            }),
            (ViewerPreferences.prototype.setDisplayDocTitle = function (
              displayTitle
            ) {
              var DisplayDocTitle = this.dict.context.obj(displayTitle)
              this.dict.set(
                objects_PDFName.of('DisplayDocTitle'),
                DisplayDocTitle
              )
            }),
            (ViewerPreferences.prototype.setNonFullScreenPageMode = function (
              nonFullScreenPageMode
            ) {
              assertIsOneOf(
                nonFullScreenPageMode,
                'nonFullScreenPageMode',
                NonFullScreenPageMode
              )
              var mode = objects_PDFName.of(nonFullScreenPageMode)
              this.dict.set(objects_PDFName.of('NonFullScreenPageMode'), mode)
            }),
            (ViewerPreferences.prototype.setReadingDirection = function (
              readingDirection
            ) {
              assertIsOneOf(
                readingDirection,
                'readingDirection',
                ReadingDirection
              )
              var direction = objects_PDFName.of(readingDirection)
              this.dict.set(objects_PDFName.of('Direction'), direction)
            }),
            (ViewerPreferences.prototype.setPrintScaling = function (
              printScaling
            ) {
              assertIsOneOf(printScaling, 'printScaling', PrintScaling)
              var scaling = objects_PDFName.of(printScaling)
              this.dict.set(objects_PDFName.of('PrintScaling'), scaling)
            }),
            (ViewerPreferences.prototype.setDuplex = function (duplex) {
              assertIsOneOf(duplex, 'duplex', Duplex)
              var dup = objects_PDFName.of(duplex)
              this.dict.set(objects_PDFName.of('Duplex'), dup)
            }),
            (ViewerPreferences.prototype.setPickTrayByPDFSize = function (
              pickTrayByPDFSize
            ) {
              var PickTrayByPDFSize = this.dict.context.obj(pickTrayByPDFSize)
              this.dict.set(
                objects_PDFName.of('PickTrayByPDFSize'),
                PickTrayByPDFSize
              )
            }),
            (ViewerPreferences.prototype.setPrintPageRange = function (
              printPageRange
            ) {
              Array.isArray(printPageRange) ||
                (printPageRange = [printPageRange])
              for (
                var flatRange = [], idx = 0, len = printPageRange.length;
                idx < len;
                idx++
              )
                (flatRange.push(printPageRange[idx].start),
                  flatRange.push(printPageRange[idx].end))
              assertEachIs(flatRange, 'printPageRange', ['number'])
              var pageRanges = this.dict.context.obj(flatRange)
              this.dict.set(objects_PDFName.of('PrintPageRange'), pageRanges)
            }),
            (ViewerPreferences.prototype.setNumCopies = function (numCopies) {
              ;(assertRange(numCopies, 'numCopies', 1, Number.MAX_VALUE),
                (function (value, valueName) {
                  if (!Number.isInteger(value))
                    throw new Error(
                      backtick(valueName) +
                        ' must be an integer, but was actually ' +
                        value
                    )
                })(numCopies, 'numCopies'))
              var NumCopies = this.dict.context.obj(numCopies)
              this.dict.set(objects_PDFName.of('NumCopies'), NumCopies)
            }),
            (ViewerPreferences.fromDict = function (dict) {
              return new ViewerPreferences(dict)
            }),
            (ViewerPreferences.create = function (context) {
              return new ViewerPreferences(context.obj({}))
            }),
            ViewerPreferences
          )
        })()
        const interactive_ViewerPreferences = ViewerPreferences
        var tfRegex =
            /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,
          PDFAcroField = (function () {
            function PDFAcroField(dict, ref) {
              ;((this.dict = dict), (this.ref = ref))
            }
            return (
              (PDFAcroField.prototype.T = function () {
                return this.dict.lookupMaybe(
                  objects_PDFName.of('T'),
                  objects_PDFString,
                  objects_PDFHexString
                )
              }),
              (PDFAcroField.prototype.Ff = function () {
                var numberOrRef = this.getInheritableAttribute(
                  objects_PDFName.of('Ff')
                )
                return this.dict.context.lookupMaybe(
                  numberOrRef,
                  objects_PDFNumber
                )
              }),
              (PDFAcroField.prototype.V = function () {
                var valueOrRef = this.getInheritableAttribute(
                  objects_PDFName.of('V')
                )
                return this.dict.context.lookup(valueOrRef)
              }),
              (PDFAcroField.prototype.Kids = function () {
                return this.dict.lookupMaybe(
                  objects_PDFName.of('Kids'),
                  objects_PDFArray
                )
              }),
              (PDFAcroField.prototype.DA = function () {
                var da = this.dict.lookup(objects_PDFName.of('DA'))
                if (
                  da instanceof objects_PDFString ||
                  da instanceof objects_PDFHexString
                )
                  return da
              }),
              (PDFAcroField.prototype.setKids = function (kids) {
                this.dict.set(
                  objects_PDFName.of('Kids'),
                  this.dict.context.obj(kids)
                )
              }),
              (PDFAcroField.prototype.getParent = function () {
                var parentRef = this.dict.get(objects_PDFName.of('Parent'))
                if (parentRef instanceof objects_PDFRef)
                  return new PDFAcroField(
                    this.dict.lookup(
                      objects_PDFName.of('Parent'),
                      objects_PDFDict
                    ),
                    parentRef
                  )
              }),
              (PDFAcroField.prototype.setParent = function (parent) {
                parent
                  ? this.dict.set(objects_PDFName.of('Parent'), parent)
                  : this.dict.delete(objects_PDFName.of('Parent'))
              }),
              (PDFAcroField.prototype.getFullyQualifiedName = function () {
                var parent = this.getParent()
                return parent
                  ? parent.getFullyQualifiedName() + '.' + this.getPartialName()
                  : this.getPartialName()
              }),
              (PDFAcroField.prototype.getPartialName = function () {
                var _a
                return null === (_a = this.T()) || void 0 === _a
                  ? void 0
                  : _a.decodeText()
              }),
              (PDFAcroField.prototype.setPartialName = function (partialName) {
                partialName
                  ? this.dict.set(
                      objects_PDFName.of('T'),
                      objects_PDFHexString.fromText(partialName)
                    )
                  : this.dict.delete(objects_PDFName.of('T'))
              }),
              (PDFAcroField.prototype.setDefaultAppearance = function (
                appearance
              ) {
                this.dict.set(
                  objects_PDFName.of('DA'),
                  objects_PDFString.of(appearance)
                )
              }),
              (PDFAcroField.prototype.getDefaultAppearance = function () {
                var DA = this.DA()
                return DA instanceof objects_PDFHexString
                  ? DA.decodeText()
                  : null == DA
                    ? void 0
                    : DA.asString()
              }),
              (PDFAcroField.prototype.setFontSize = function (fontSize) {
                var _a,
                  name =
                    null !== (_a = this.getFullyQualifiedName()) &&
                    void 0 !== _a
                      ? _a
                      : '',
                  da = this.getDefaultAppearance()
                if (!da) throw new MissingDAEntryError(name)
                var daMatch = findLastMatch(da, tfRegex)
                if (!daMatch.match) throw new MissingTfOperatorError(name)
                var daStart = da.slice(
                    0,
                    daMatch.pos - daMatch.match[0].length
                  ),
                  daEnd = daMatch.pos <= da.length ? da.slice(daMatch.pos) : '',
                  modifiedDa =
                    daStart +
                    ' /' +
                    daMatch.match[1] +
                    ' ' +
                    fontSize +
                    ' Tf ' +
                    daEnd
                this.setDefaultAppearance(modifiedDa)
              }),
              (PDFAcroField.prototype.getFlags = function () {
                var _a, _b
                return null !==
                  (_b =
                    null === (_a = this.Ff()) || void 0 === _a
                      ? void 0
                      : _a.asNumber()) && void 0 !== _b
                  ? _b
                  : 0
              }),
              (PDFAcroField.prototype.setFlags = function (flags) {
                this.dict.set(
                  objects_PDFName.of('Ff'),
                  objects_PDFNumber.of(flags)
                )
              }),
              (PDFAcroField.prototype.hasFlag = function (flag) {
                return 0 !== (this.getFlags() & flag)
              }),
              (PDFAcroField.prototype.setFlag = function (flag) {
                var flags = this.getFlags()
                this.setFlags(flags | flag)
              }),
              (PDFAcroField.prototype.clearFlag = function (flag) {
                var flags = this.getFlags()
                this.setFlags(flags & ~flag)
              }),
              (PDFAcroField.prototype.setFlagTo = function (flag, enable) {
                enable ? this.setFlag(flag) : this.clearFlag(flag)
              }),
              (PDFAcroField.prototype.getInheritableAttribute = function (
                name
              ) {
                var attribute
                return (
                  this.ascend(function (node) {
                    attribute || (attribute = node.dict.get(name))
                  }),
                  attribute
                )
              }),
              (PDFAcroField.prototype.ascend = function (visitor) {
                visitor(this)
                var parent = this.getParent()
                parent && parent.ascend(visitor)
              }),
              PDFAcroField
            )
          })()
        const acroform_PDFAcroField = PDFAcroField
        var BorderStyle = (function () {
          function BorderStyle(dict) {
            this.dict = dict
          }
          return (
            (BorderStyle.prototype.W = function () {
              var W = this.dict.lookup(objects_PDFName.of('W'))
              if (W instanceof objects_PDFNumber) return W
            }),
            (BorderStyle.prototype.getWidth = function () {
              var _a, _b
              return null !==
                (_b =
                  null === (_a = this.W()) || void 0 === _a
                    ? void 0
                    : _a.asNumber()) && void 0 !== _b
                ? _b
                : 1
            }),
            (BorderStyle.prototype.setWidth = function (width) {
              var W = this.dict.context.obj(width)
              this.dict.set(objects_PDFName.of('W'), W)
            }),
            (BorderStyle.fromDict = function (dict) {
              return new BorderStyle(dict)
            }),
            BorderStyle
          )
        })()
        const annotation_BorderStyle = BorderStyle
        var PDFAnnotation = (function () {
          function PDFAnnotation(dict) {
            this.dict = dict
          }
          return (
            (PDFAnnotation.prototype.Rect = function () {
              return this.dict.lookup(
                objects_PDFName.of('Rect'),
                objects_PDFArray
              )
            }),
            (PDFAnnotation.prototype.AP = function () {
              return this.dict.lookupMaybe(
                objects_PDFName.of('AP'),
                objects_PDFDict
              )
            }),
            (PDFAnnotation.prototype.F = function () {
              var numberOrRef = this.dict.lookup(objects_PDFName.of('F'))
              return this.dict.context.lookupMaybe(
                numberOrRef,
                objects_PDFNumber
              )
            }),
            (PDFAnnotation.prototype.getRectangle = function () {
              var _a,
                Rect = this.Rect()
              return null !==
                (_a = null == Rect ? void 0 : Rect.asRectangle()) &&
                void 0 !== _a
                ? _a
                : { x: 0, y: 0, width: 0, height: 0 }
            }),
            (PDFAnnotation.prototype.setRectangle = function (rect) {
              var x = rect.x,
                y = rect.y,
                width = rect.width,
                height = rect.height,
                Rect = this.dict.context.obj([x, y, x + width, y + height])
              this.dict.set(objects_PDFName.of('Rect'), Rect)
            }),
            (PDFAnnotation.prototype.getAppearanceState = function () {
              var AS = this.dict.lookup(objects_PDFName.of('AS'))
              if (AS instanceof objects_PDFName) return AS
            }),
            (PDFAnnotation.prototype.setAppearanceState = function (state) {
              this.dict.set(objects_PDFName.of('AS'), state)
            }),
            (PDFAnnotation.prototype.setAppearances = function (appearances) {
              this.dict.set(objects_PDFName.of('AP'), appearances)
            }),
            (PDFAnnotation.prototype.ensureAP = function () {
              var AP = this.AP()
              return (
                AP ||
                  ((AP = this.dict.context.obj({})),
                  this.dict.set(objects_PDFName.of('AP'), AP)),
                AP
              )
            }),
            (PDFAnnotation.prototype.getNormalAppearance = function () {
              var N = this.ensureAP().get(objects_PDFName.of('N'))
              if (N instanceof objects_PDFRef || N instanceof objects_PDFDict)
                return N
              throw new Error(
                'Unexpected N type: ' +
                  (null == N ? void 0 : N.constructor.name)
              )
            }),
            (PDFAnnotation.prototype.setNormalAppearance = function (
              appearance
            ) {
              this.ensureAP().set(objects_PDFName.of('N'), appearance)
            }),
            (PDFAnnotation.prototype.setRolloverAppearance = function (
              appearance
            ) {
              this.ensureAP().set(objects_PDFName.of('R'), appearance)
            }),
            (PDFAnnotation.prototype.setDownAppearance = function (appearance) {
              this.ensureAP().set(objects_PDFName.of('D'), appearance)
            }),
            (PDFAnnotation.prototype.removeRolloverAppearance = function () {
              var AP = this.AP()
              null == AP || AP.delete(objects_PDFName.of('R'))
            }),
            (PDFAnnotation.prototype.removeDownAppearance = function () {
              var AP = this.AP()
              null == AP || AP.delete(objects_PDFName.of('D'))
            }),
            (PDFAnnotation.prototype.getAppearances = function () {
              var AP = this.AP()
              if (AP)
                return {
                  normal: AP.lookup(
                    objects_PDFName.of('N'),
                    objects_PDFDict,
                    objects_PDFStream
                  ),
                  rollover: AP.lookupMaybe(
                    objects_PDFName.of('R'),
                    objects_PDFDict,
                    objects_PDFStream
                  ),
                  down: AP.lookupMaybe(
                    objects_PDFName.of('D'),
                    objects_PDFDict,
                    objects_PDFStream
                  ),
                }
            }),
            (PDFAnnotation.prototype.getFlags = function () {
              var _a, _b
              return null !==
                (_b =
                  null === (_a = this.F()) || void 0 === _a
                    ? void 0
                    : _a.asNumber()) && void 0 !== _b
                ? _b
                : 0
            }),
            (PDFAnnotation.prototype.setFlags = function (flags) {
              this.dict.set(
                objects_PDFName.of('F'),
                objects_PDFNumber.of(flags)
              )
            }),
            (PDFAnnotation.prototype.hasFlag = function (flag) {
              return 0 !== (this.getFlags() & flag)
            }),
            (PDFAnnotation.prototype.setFlag = function (flag) {
              var flags = this.getFlags()
              this.setFlags(flags | flag)
            }),
            (PDFAnnotation.prototype.clearFlag = function (flag) {
              var flags = this.getFlags()
              this.setFlags(flags & ~flag)
            }),
            (PDFAnnotation.prototype.setFlagTo = function (flag, enable) {
              enable ? this.setFlag(flag) : this.clearFlag(flag)
            }),
            (PDFAnnotation.fromDict = function (dict) {
              return new PDFAnnotation(dict)
            }),
            PDFAnnotation
          )
        })()
        const annotation_PDFAnnotation = PDFAnnotation
        var AppearanceCharacteristics = (function () {
          function AppearanceCharacteristics(dict) {
            this.dict = dict
          }
          return (
            (AppearanceCharacteristics.prototype.R = function () {
              var R = this.dict.lookup(objects_PDFName.of('R'))
              if (R instanceof objects_PDFNumber) return R
            }),
            (AppearanceCharacteristics.prototype.BC = function () {
              var BC = this.dict.lookup(objects_PDFName.of('BC'))
              if (BC instanceof objects_PDFArray) return BC
            }),
            (AppearanceCharacteristics.prototype.BG = function () {
              var BG = this.dict.lookup(objects_PDFName.of('BG'))
              if (BG instanceof objects_PDFArray) return BG
            }),
            (AppearanceCharacteristics.prototype.CA = function () {
              var CA = this.dict.lookup(objects_PDFName.of('CA'))
              if (
                CA instanceof objects_PDFHexString ||
                CA instanceof objects_PDFString
              )
                return CA
            }),
            (AppearanceCharacteristics.prototype.RC = function () {
              var RC = this.dict.lookup(objects_PDFName.of('RC'))
              if (
                RC instanceof objects_PDFHexString ||
                RC instanceof objects_PDFString
              )
                return RC
            }),
            (AppearanceCharacteristics.prototype.AC = function () {
              var AC = this.dict.lookup(objects_PDFName.of('AC'))
              if (
                AC instanceof objects_PDFHexString ||
                AC instanceof objects_PDFString
              )
                return AC
            }),
            (AppearanceCharacteristics.prototype.getRotation = function () {
              var _a
              return null === (_a = this.R()) || void 0 === _a
                ? void 0
                : _a.asNumber()
            }),
            (AppearanceCharacteristics.prototype.getBorderColor = function () {
              var BC = this.BC()
              if (BC) {
                for (
                  var components = [],
                    idx = 0,
                    len = null == BC ? void 0 : BC.size();
                  idx < len;
                  idx++
                ) {
                  var component = BC.get(idx)
                  component instanceof objects_PDFNumber &&
                    components.push(component.asNumber())
                }
                return components
              }
            }),
            (AppearanceCharacteristics.prototype.getBackgroundColor =
              function () {
                var BG = this.BG()
                if (BG) {
                  for (
                    var components = [],
                      idx = 0,
                      len = null == BG ? void 0 : BG.size();
                    idx < len;
                    idx++
                  ) {
                    var component = BG.get(idx)
                    component instanceof objects_PDFNumber &&
                      components.push(component.asNumber())
                  }
                  return components
                }
              }),
            (AppearanceCharacteristics.prototype.getCaptions = function () {
              var CA = this.CA(),
                RC = this.RC(),
                AC = this.AC()
              return {
                normal: null == CA ? void 0 : CA.decodeText(),
                rollover: null == RC ? void 0 : RC.decodeText(),
                down: null == AC ? void 0 : AC.decodeText(),
              }
            }),
            (AppearanceCharacteristics.prototype.setRotation = function (
              rotation
            ) {
              var R = this.dict.context.obj(rotation)
              this.dict.set(objects_PDFName.of('R'), R)
            }),
            (AppearanceCharacteristics.prototype.setBorderColor = function (
              color
            ) {
              var BC = this.dict.context.obj(color)
              this.dict.set(objects_PDFName.of('BC'), BC)
            }),
            (AppearanceCharacteristics.prototype.setBackgroundColor = function (
              color
            ) {
              var BG = this.dict.context.obj(color)
              this.dict.set(objects_PDFName.of('BG'), BG)
            }),
            (AppearanceCharacteristics.prototype.setCaptions = function (
              captions
            ) {
              var CA = objects_PDFHexString.fromText(captions.normal)
              if (
                (this.dict.set(objects_PDFName.of('CA'), CA), captions.rollover)
              ) {
                var RC = objects_PDFHexString.fromText(captions.rollover)
                this.dict.set(objects_PDFName.of('RC'), RC)
              } else this.dict.delete(objects_PDFName.of('RC'))
              if (captions.down) {
                var AC = objects_PDFHexString.fromText(captions.down)
                this.dict.set(objects_PDFName.of('AC'), AC)
              } else this.dict.delete(objects_PDFName.of('AC'))
            }),
            (AppearanceCharacteristics.fromDict = function (dict) {
              return new AppearanceCharacteristics(dict)
            }),
            AppearanceCharacteristics
          )
        })()
        const annotation_AppearanceCharacteristics = AppearanceCharacteristics
        var PDFWidgetAnnotation = (function (_super) {
          function PDFWidgetAnnotation() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFWidgetAnnotation, _super),
            (PDFWidgetAnnotation.prototype.MK = function () {
              var MK = this.dict.lookup(objects_PDFName.of('MK'))
              if (MK instanceof objects_PDFDict) return MK
            }),
            (PDFWidgetAnnotation.prototype.BS = function () {
              var BS = this.dict.lookup(objects_PDFName.of('BS'))
              if (BS instanceof objects_PDFDict) return BS
            }),
            (PDFWidgetAnnotation.prototype.DA = function () {
              var da = this.dict.lookup(objects_PDFName.of('DA'))
              if (
                da instanceof objects_PDFString ||
                da instanceof objects_PDFHexString
              )
                return da
            }),
            (PDFWidgetAnnotation.prototype.P = function () {
              var P = this.dict.get(objects_PDFName.of('P'))
              if (P instanceof objects_PDFRef) return P
            }),
            (PDFWidgetAnnotation.prototype.setP = function (page) {
              this.dict.set(objects_PDFName.of('P'), page)
            }),
            (PDFWidgetAnnotation.prototype.setDefaultAppearance = function (
              appearance
            ) {
              this.dict.set(
                objects_PDFName.of('DA'),
                objects_PDFString.of(appearance)
              )
            }),
            (PDFWidgetAnnotation.prototype.getDefaultAppearance = function () {
              var DA = this.DA()
              return DA instanceof objects_PDFHexString
                ? DA.decodeText()
                : null == DA
                  ? void 0
                  : DA.asString()
            }),
            (PDFWidgetAnnotation.prototype.getAppearanceCharacteristics =
              function () {
                var MK = this.MK()
                if (MK) return annotation_AppearanceCharacteristics.fromDict(MK)
              }),
            (PDFWidgetAnnotation.prototype.getOrCreateAppearanceCharacteristics =
              function () {
                var MK = this.MK()
                if (MK) return annotation_AppearanceCharacteristics.fromDict(MK)
                var ac = annotation_AppearanceCharacteristics.fromDict(
                  this.dict.context.obj({})
                )
                return (this.dict.set(objects_PDFName.of('MK'), ac.dict), ac)
              }),
            (PDFWidgetAnnotation.prototype.getBorderStyle = function () {
              var BS = this.BS()
              if (BS) return annotation_BorderStyle.fromDict(BS)
            }),
            (PDFWidgetAnnotation.prototype.getOrCreateBorderStyle =
              function () {
                var BS = this.BS()
                if (BS) return annotation_BorderStyle.fromDict(BS)
                var bs = annotation_BorderStyle.fromDict(
                  this.dict.context.obj({})
                )
                return (this.dict.set(objects_PDFName.of('BS'), bs.dict), bs)
              }),
            (PDFWidgetAnnotation.prototype.getOnValue = function () {
              var _a,
                normal =
                  null === (_a = this.getAppearances()) || void 0 === _a
                    ? void 0
                    : _a.normal
              if (normal instanceof objects_PDFDict)
                for (
                  var keys = normal.keys(), idx = 0, len = keys.length;
                  idx < len;
                  idx++
                ) {
                  var key = keys[idx]
                  if (key !== objects_PDFName.of('Off')) return key
                }
            }),
            (PDFWidgetAnnotation.fromDict = function (dict) {
              return new PDFWidgetAnnotation(dict)
            }),
            (PDFWidgetAnnotation.create = function (context, parent) {
              return new PDFWidgetAnnotation(
                context.obj({
                  Type: 'Annot',
                  Subtype: 'Widget',
                  Rect: [0, 0, 0, 0],
                  Parent: parent,
                })
              )
            }),
            PDFWidgetAnnotation
          )
        })(annotation_PDFAnnotation)
        const annotation_PDFWidgetAnnotation = PDFWidgetAnnotation
        var PDFAcroTerminal = (function (_super) {
          function PDFAcroTerminal() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroTerminal, _super),
            (PDFAcroTerminal.prototype.FT = function () {
              var nameOrRef = this.getInheritableAttribute(
                objects_PDFName.of('FT')
              )
              return this.dict.context.lookup(nameOrRef, objects_PDFName)
            }),
            (PDFAcroTerminal.prototype.getWidgets = function () {
              var kidDicts = this.Kids()
              if (!kidDicts)
                return [annotation_PDFWidgetAnnotation.fromDict(this.dict)]
              for (
                var widgets = new Array(kidDicts.size()),
                  idx = 0,
                  len = kidDicts.size();
                idx < len;
                idx++
              ) {
                var dict = kidDicts.lookup(idx, objects_PDFDict)
                widgets[idx] = annotation_PDFWidgetAnnotation.fromDict(dict)
              }
              return widgets
            }),
            (PDFAcroTerminal.prototype.addWidget = function (ref) {
              this.normalizedEntries().Kids.push(ref)
            }),
            (PDFAcroTerminal.prototype.removeWidget = function (idx) {
              var kidDicts = this.Kids()
              if (kidDicts) {
                if (idx < 0 || idx > kidDicts.size())
                  throw new IndexOutOfBoundsError(idx, 0, kidDicts.size())
                kidDicts.remove(idx)
              } else {
                if (0 !== idx) throw new IndexOutOfBoundsError(idx, 0, 0)
                this.setKids([])
              }
            }),
            (PDFAcroTerminal.prototype.normalizedEntries = function () {
              var Kids = this.Kids()
              return (
                Kids ||
                  ((Kids = this.dict.context.obj([this.ref])),
                  this.dict.set(objects_PDFName.of('Kids'), Kids)),
                { Kids }
              )
            }),
            (PDFAcroTerminal.fromDict = function (dict, ref) {
              return new PDFAcroTerminal(dict, ref)
            }),
            PDFAcroTerminal
          )
        })(acroform_PDFAcroField)
        const acroform_PDFAcroTerminal = PDFAcroTerminal
        var PDFAcroButton = (function (_super) {
          function PDFAcroButton() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroButton, _super),
            (PDFAcroButton.prototype.Opt = function () {
              return this.dict.lookupMaybe(
                objects_PDFName.of('Opt'),
                objects_PDFString,
                objects_PDFHexString,
                objects_PDFArray
              )
            }),
            (PDFAcroButton.prototype.setOpt = function (opt) {
              this.dict.set(
                objects_PDFName.of('Opt'),
                this.dict.context.obj(opt)
              )
            }),
            (PDFAcroButton.prototype.getExportValues = function () {
              var opt = this.Opt()
              if (opt) {
                if (
                  opt instanceof objects_PDFString ||
                  opt instanceof objects_PDFHexString
                )
                  return [opt]
                for (
                  var values = [], idx = 0, len = opt.size();
                  idx < len;
                  idx++
                ) {
                  var value = opt.lookup(idx)
                  ;(value instanceof objects_PDFString ||
                    value instanceof objects_PDFHexString) &&
                    values.push(value)
                }
                return values
              }
            }),
            (PDFAcroButton.prototype.removeExportValue = function (idx) {
              var opt = this.Opt()
              if (opt)
                if (
                  opt instanceof objects_PDFString ||
                  opt instanceof objects_PDFHexString
                ) {
                  if (0 !== idx) throw new IndexOutOfBoundsError(idx, 0, 0)
                  this.setOpt([])
                } else {
                  if (idx < 0 || idx > opt.size())
                    throw new IndexOutOfBoundsError(idx, 0, opt.size())
                  opt.remove(idx)
                }
            }),
            (PDFAcroButton.prototype.normalizeExportValues = function () {
              for (
                var _a,
                  _b,
                  _c,
                  _d,
                  exportValues =
                    null !== (_a = this.getExportValues()) && void 0 !== _a
                      ? _a
                      : [],
                  Opt = [],
                  widgets = this.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  exportVal =
                    null !== (_b = exportValues[idx]) && void 0 !== _b
                      ? _b
                      : objects_PDFHexString.fromText(
                          null !==
                            (_d =
                              null === (_c = widget.getOnValue()) ||
                              void 0 === _c
                                ? void 0
                                : _c.decodeText()) && void 0 !== _d
                            ? _d
                            : ''
                        )
                Opt.push(exportVal)
              }
              this.setOpt(Opt)
            }),
            (PDFAcroButton.prototype.addOpt = function (
              opt,
              useExistingOptIdx
            ) {
              var _a
              this.normalizeExportValues()
              var existingIdx,
                optText = opt.decodeText()
              if (useExistingOptIdx)
                for (
                  var exportValues =
                      null !== (_a = this.getExportValues()) && void 0 !== _a
                        ? _a
                        : [],
                    idx = 0,
                    len = exportValues.length;
                  idx < len;
                  idx++
                ) {
                  exportValues[idx].decodeText() === optText &&
                    (existingIdx = idx)
                }
              var Opt = this.Opt()
              return (
                Opt.push(opt),
                null != existingIdx ? existingIdx : Opt.size() - 1
              )
            }),
            (PDFAcroButton.prototype.addWidgetWithOpt = function (
              widget,
              opt,
              useExistingOptIdx
            ) {
              var optIdx = this.addOpt(opt, useExistingOptIdx),
                apStateValue = objects_PDFName.of(String(optIdx))
              return (this.addWidget(widget), apStateValue)
            }),
            PDFAcroButton
          )
        })(acroform_PDFAcroTerminal)
        const acroform_PDFAcroButton = PDFAcroButton
        var PDFAcroCheckBox = (function (_super) {
          function PDFAcroCheckBox() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroCheckBox, _super),
            (PDFAcroCheckBox.prototype.setValue = function (value) {
              var _a
              if (
                value !==
                  (null !== (_a = this.getOnValue()) && void 0 !== _a
                    ? _a
                    : objects_PDFName.of('Yes')) &&
                value !== objects_PDFName.of('Off')
              )
                throw new InvalidAcroFieldValueError()
              this.dict.set(objects_PDFName.of('V'), value)
              for (
                var widgets = this.getWidgets(), idx = 0, len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  state =
                    widget.getOnValue() === value
                      ? value
                      : objects_PDFName.of('Off')
                widget.setAppearanceState(state)
              }
            }),
            (PDFAcroCheckBox.prototype.getValue = function () {
              var v = this.V()
              return v instanceof objects_PDFName
                ? v
                : objects_PDFName.of('Off')
            }),
            (PDFAcroCheckBox.prototype.getOnValue = function () {
              var widget = this.getWidgets()[0]
              return null == widget ? void 0 : widget.getOnValue()
            }),
            (PDFAcroCheckBox.fromDict = function (dict, ref) {
              return new PDFAcroCheckBox(dict, ref)
            }),
            (PDFAcroCheckBox.create = function (context) {
              var dict = context.obj({ FT: 'Btn', Kids: [] })
              return new PDFAcroCheckBox(dict, context.register(dict))
            }),
            PDFAcroCheckBox
          )
        })(acroform_PDFAcroButton)
        const acroform_PDFAcroCheckBox = PDFAcroCheckBox
        var AcroFieldFlags,
          AcroButtonFlags,
          AcroTextFlags,
          AcroChoiceFlags,
          flag = function (bitIndex) {
            return 1 << bitIndex
          }
        ;(!(function (AcroFieldFlags) {
          ;((AcroFieldFlags[(AcroFieldFlags.ReadOnly = flag(0))] = 'ReadOnly'),
            (AcroFieldFlags[(AcroFieldFlags.Required = flag(1))] = 'Required'),
            (AcroFieldFlags[(AcroFieldFlags.NoExport = flag(2))] = 'NoExport'))
        })(AcroFieldFlags || (AcroFieldFlags = {})),
          (function (AcroButtonFlags) {
            ;((AcroButtonFlags[(AcroButtonFlags.NoToggleToOff = flag(14))] =
              'NoToggleToOff'),
              (AcroButtonFlags[(AcroButtonFlags.Radio = flag(15))] = 'Radio'),
              (AcroButtonFlags[(AcroButtonFlags.PushButton = flag(16))] =
                'PushButton'),
              (AcroButtonFlags[(AcroButtonFlags.RadiosInUnison = flag(25))] =
                'RadiosInUnison'))
          })(AcroButtonFlags || (AcroButtonFlags = {})),
          (function (AcroTextFlags) {
            ;((AcroTextFlags[(AcroTextFlags.Multiline = flag(12))] =
              'Multiline'),
              (AcroTextFlags[(AcroTextFlags.Password = flag(13))] = 'Password'),
              (AcroTextFlags[(AcroTextFlags.FileSelect = flag(20))] =
                'FileSelect'),
              (AcroTextFlags[(AcroTextFlags.DoNotSpellCheck = flag(22))] =
                'DoNotSpellCheck'),
              (AcroTextFlags[(AcroTextFlags.DoNotScroll = flag(23))] =
                'DoNotScroll'),
              (AcroTextFlags[(AcroTextFlags.Comb = flag(24))] = 'Comb'),
              (AcroTextFlags[(AcroTextFlags.RichText = flag(25))] = 'RichText'))
          })(AcroTextFlags || (AcroTextFlags = {})),
          (function (AcroChoiceFlags) {
            ;((AcroChoiceFlags[(AcroChoiceFlags.Combo = flag(17))] = 'Combo'),
              (AcroChoiceFlags[(AcroChoiceFlags.Edit = flag(18))] = 'Edit'),
              (AcroChoiceFlags[(AcroChoiceFlags.Sort = flag(19))] = 'Sort'),
              (AcroChoiceFlags[(AcroChoiceFlags.MultiSelect = flag(21))] =
                'MultiSelect'),
              (AcroChoiceFlags[(AcroChoiceFlags.DoNotSpellCheck = flag(22))] =
                'DoNotSpellCheck'),
              (AcroChoiceFlags[(AcroChoiceFlags.CommitOnSelChange = flag(26))] =
                'CommitOnSelChange'))
          })(AcroChoiceFlags || (AcroChoiceFlags = {})))
        var PDFAcroChoice = (function (_super) {
          function PDFAcroChoice() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroChoice, _super),
            (PDFAcroChoice.prototype.setValues = function (values) {
              if (
                this.hasFlag(AcroChoiceFlags.Combo) &&
                !this.hasFlag(AcroChoiceFlags.Edit) &&
                !this.valuesAreValid(values)
              )
                throw new InvalidAcroFieldValueError()
              if (
                (0 === values.length &&
                  this.dict.delete(objects_PDFName.of('V')),
                1 === values.length &&
                  this.dict.set(objects_PDFName.of('V'), values[0]),
                values.length > 1)
              ) {
                if (!this.hasFlag(AcroChoiceFlags.MultiSelect))
                  throw new MultiSelectValueError()
                this.dict.set(
                  objects_PDFName.of('V'),
                  this.dict.context.obj(values)
                )
              }
              this.updateSelectedIndices(values)
            }),
            (PDFAcroChoice.prototype.valuesAreValid = function (values) {
              for (
                var options = this.getOptions(),
                  _loop_1 = function (idx, len) {
                    var val = values[idx].decodeText()
                    if (
                      !options.find(function (o) {
                        return val === (o.display || o.value).decodeText()
                      })
                    )
                      return { value: !1 }
                  },
                  idx = 0,
                  len = values.length;
                idx < len;
                idx++
              ) {
                var state_1 = _loop_1(idx)
                if ('object' == typeof state_1) return state_1.value
              }
              return !0
            }),
            (PDFAcroChoice.prototype.updateSelectedIndices = function (values) {
              if (values.length > 1) {
                for (
                  var indices = new Array(values.length),
                    options = this.getOptions(),
                    _loop_2 = function (idx, len) {
                      var val = values[idx].decodeText()
                      indices[idx] = options.findIndex(function (o) {
                        return val === (o.display || o.value).decodeText()
                      })
                    },
                    idx = 0,
                    len = values.length;
                  idx < len;
                  idx++
                )
                  _loop_2(idx)
                this.dict.set(
                  objects_PDFName.of('I'),
                  this.dict.context.obj(indices.sort())
                )
              } else this.dict.delete(objects_PDFName.of('I'))
            }),
            (PDFAcroChoice.prototype.getValues = function () {
              var v = this.V()
              if (
                v instanceof objects_PDFString ||
                v instanceof objects_PDFHexString
              )
                return [v]
              if (v instanceof objects_PDFArray) {
                for (
                  var values = [], idx = 0, len = v.size();
                  idx < len;
                  idx++
                ) {
                  var value = v.lookup(idx)
                  ;(value instanceof objects_PDFString ||
                    value instanceof objects_PDFHexString) &&
                    values.push(value)
                }
                return values
              }
              return []
            }),
            (PDFAcroChoice.prototype.Opt = function () {
              return this.dict.lookupMaybe(
                objects_PDFName.of('Opt'),
                objects_PDFString,
                objects_PDFHexString,
                objects_PDFArray
              )
            }),
            (PDFAcroChoice.prototype.setOptions = function (options) {
              for (
                var newOpt = new Array(options.length),
                  idx = 0,
                  len = options.length;
                idx < len;
                idx++
              ) {
                var _a = options[idx],
                  value = _a.value,
                  display = _a.display
                newOpt[idx] = this.dict.context.obj([value, display || value])
              }
              this.dict.set(
                objects_PDFName.of('Opt'),
                this.dict.context.obj(newOpt)
              )
            }),
            (PDFAcroChoice.prototype.getOptions = function () {
              var Opt = this.Opt()
              if (
                Opt instanceof objects_PDFString ||
                Opt instanceof objects_PDFHexString
              )
                return [{ value: Opt, display: Opt }]
              if (Opt instanceof objects_PDFArray) {
                for (
                  var res = [], idx = 0, len = Opt.size();
                  idx < len;
                  idx++
                ) {
                  var item = Opt.lookup(idx)
                  if (
                    ((item instanceof objects_PDFString ||
                      item instanceof objects_PDFHexString) &&
                      res.push({ value: item, display: item }),
                    item instanceof objects_PDFArray && item.size() > 0)
                  ) {
                    var first = item.lookup(
                        0,
                        objects_PDFString,
                        objects_PDFHexString
                      ),
                      second = item.lookupMaybe(
                        1,
                        objects_PDFString,
                        objects_PDFHexString
                      )
                    res.push({ value: first, display: second || first })
                  }
                }
                return res
              }
              return []
            }),
            PDFAcroChoice
          )
        })(acroform_PDFAcroTerminal)
        const acroform_PDFAcroChoice = PDFAcroChoice
        const acroform_PDFAcroComboBox = (function (_super) {
          function PDFAcroComboBox() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroComboBox, _super),
            (PDFAcroComboBox.fromDict = function (dict, ref) {
              return new PDFAcroComboBox(dict, ref)
            }),
            (PDFAcroComboBox.create = function (context) {
              var dict = context.obj({
                FT: 'Ch',
                Ff: AcroChoiceFlags.Combo,
                Kids: [],
              })
              return new PDFAcroComboBox(dict, context.register(dict))
            }),
            PDFAcroComboBox
          )
        })(acroform_PDFAcroChoice)
        const acroform_PDFAcroNonTerminal = (function (_super) {
          function PDFAcroNonTerminal() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroNonTerminal, _super),
            (PDFAcroNonTerminal.prototype.addField = function (field) {
              var Kids = this.normalizedEntries().Kids
              null == Kids || Kids.push(field)
            }),
            (PDFAcroNonTerminal.prototype.normalizedEntries = function () {
              var Kids = this.Kids()
              return (
                Kids ||
                  ((Kids = this.dict.context.obj([])),
                  this.dict.set(objects_PDFName.of('Kids'), Kids)),
                { Kids }
              )
            }),
            (PDFAcroNonTerminal.fromDict = function (dict, ref) {
              return new PDFAcroNonTerminal(dict, ref)
            }),
            (PDFAcroNonTerminal.create = function (context) {
              var dict = context.obj({})
              return new PDFAcroNonTerminal(dict, context.register(dict))
            }),
            PDFAcroNonTerminal
          )
        })(acroform_PDFAcroField)
        const acroform_PDFAcroSignature = (function (_super) {
          function PDFAcroSignature() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroSignature, _super),
            (PDFAcroSignature.fromDict = function (dict, ref) {
              return new PDFAcroSignature(dict, ref)
            }),
            PDFAcroSignature
          )
        })(acroform_PDFAcroTerminal)
        const acroform_PDFAcroText = (function (_super) {
          function PDFAcroText() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroText, _super),
            (PDFAcroText.prototype.MaxLen = function () {
              var maxLen = this.dict.lookup(objects_PDFName.of('MaxLen'))
              if (maxLen instanceof objects_PDFNumber) return maxLen
            }),
            (PDFAcroText.prototype.Q = function () {
              var q = this.dict.lookup(objects_PDFName.of('Q'))
              if (q instanceof objects_PDFNumber) return q
            }),
            (PDFAcroText.prototype.setMaxLength = function (maxLength) {
              this.dict.set(
                objects_PDFName.of('MaxLen'),
                objects_PDFNumber.of(maxLength)
              )
            }),
            (PDFAcroText.prototype.removeMaxLength = function () {
              this.dict.delete(objects_PDFName.of('MaxLen'))
            }),
            (PDFAcroText.prototype.getMaxLength = function () {
              var _a
              return null === (_a = this.MaxLen()) || void 0 === _a
                ? void 0
                : _a.asNumber()
            }),
            (PDFAcroText.prototype.setQuadding = function (quadding) {
              this.dict.set(
                objects_PDFName.of('Q'),
                objects_PDFNumber.of(quadding)
              )
            }),
            (PDFAcroText.prototype.getQuadding = function () {
              var _a
              return null === (_a = this.Q()) || void 0 === _a
                ? void 0
                : _a.asNumber()
            }),
            (PDFAcroText.prototype.setValue = function (value) {
              this.dict.set(objects_PDFName.of('V'), value)
            }),
            (PDFAcroText.prototype.removeValue = function () {
              this.dict.delete(objects_PDFName.of('V'))
            }),
            (PDFAcroText.prototype.getValue = function () {
              var v = this.V()
              if (
                v instanceof objects_PDFString ||
                v instanceof objects_PDFHexString
              )
                return v
            }),
            (PDFAcroText.fromDict = function (dict, ref) {
              return new PDFAcroText(dict, ref)
            }),
            (PDFAcroText.create = function (context) {
              var dict = context.obj({ FT: 'Tx', Kids: [] })
              return new PDFAcroText(dict, context.register(dict))
            }),
            PDFAcroText
          )
        })(acroform_PDFAcroTerminal)
        const acroform_PDFAcroPushButton = (function (_super) {
          function PDFAcroPushButton() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroPushButton, _super),
            (PDFAcroPushButton.fromDict = function (dict, ref) {
              return new PDFAcroPushButton(dict, ref)
            }),
            (PDFAcroPushButton.create = function (context) {
              var dict = context.obj({
                FT: 'Btn',
                Ff: AcroButtonFlags.PushButton,
                Kids: [],
              })
              return new PDFAcroPushButton(dict, context.register(dict))
            }),
            PDFAcroPushButton
          )
        })(acroform_PDFAcroButton)
        var PDFAcroRadioButton = (function (_super) {
          function PDFAcroRadioButton() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroRadioButton, _super),
            (PDFAcroRadioButton.prototype.setValue = function (value) {
              if (
                !this.getOnValues().includes(value) &&
                value !== objects_PDFName.of('Off')
              )
                throw new InvalidAcroFieldValueError()
              this.dict.set(objects_PDFName.of('V'), value)
              for (
                var widgets = this.getWidgets(), idx = 0, len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  state =
                    widget.getOnValue() === value
                      ? value
                      : objects_PDFName.of('Off')
                widget.setAppearanceState(state)
              }
            }),
            (PDFAcroRadioButton.prototype.getValue = function () {
              var v = this.V()
              return v instanceof objects_PDFName
                ? v
                : objects_PDFName.of('Off')
            }),
            (PDFAcroRadioButton.prototype.getOnValues = function () {
              for (
                var widgets = this.getWidgets(),
                  onValues = [],
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var onValue = widgets[idx].getOnValue()
                onValue && onValues.push(onValue)
              }
              return onValues
            }),
            (PDFAcroRadioButton.fromDict = function (dict, ref) {
              return new PDFAcroRadioButton(dict, ref)
            }),
            (PDFAcroRadioButton.create = function (context) {
              var dict = context.obj({
                FT: 'Btn',
                Ff: AcroButtonFlags.Radio,
                Kids: [],
              })
              return new PDFAcroRadioButton(dict, context.register(dict))
            }),
            PDFAcroRadioButton
          )
        })(acroform_PDFAcroButton)
        const acroform_PDFAcroRadioButton = PDFAcroRadioButton
        const acroform_PDFAcroListBox = (function (_super) {
          function PDFAcroListBox() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFAcroListBox, _super),
            (PDFAcroListBox.fromDict = function (dict, ref) {
              return new PDFAcroListBox(dict, ref)
            }),
            (PDFAcroListBox.create = function (context) {
              var dict = context.obj({ FT: 'Ch', Kids: [] })
              return new PDFAcroListBox(dict, context.register(dict))
            }),
            PDFAcroListBox
          )
        })(acroform_PDFAcroChoice)
        var createPDFAcroFields = function (kidDicts) {
            if (!kidDicts) return []
            for (
              var kids = [], idx = 0, len = kidDicts.size();
              idx < len;
              idx++
            ) {
              var ref = kidDicts.get(idx),
                dict = kidDicts.lookup(idx)
              ref instanceof objects_PDFRef &&
                dict instanceof objects_PDFDict &&
                kids.push([createPDFAcroField(dict, ref), ref])
            }
            return kids
          },
          createPDFAcroField = function (dict, ref) {
            return isNonTerminalAcroField(dict)
              ? acroform_PDFAcroNonTerminal.fromDict(dict, ref)
              : createPDFAcroTerminal(dict, ref)
          },
          isNonTerminalAcroField = function (dict) {
            var kids = dict.lookup(objects_PDFName.of('Kids'))
            if (kids instanceof objects_PDFArray)
              for (var idx = 0, len = kids.size(); idx < len; idx++) {
                var kid = kids.lookup(idx)
                if (
                  kid instanceof objects_PDFDict &&
                  kid.has(objects_PDFName.of('T'))
                )
                  return !0
              }
            return !1
          },
          createPDFAcroTerminal = function (dict, ref) {
            var ftNameOrRef = getInheritableAttribute(
                dict,
                objects_PDFName.of('FT')
              ),
              type = dict.context.lookup(ftNameOrRef, objects_PDFName)
            return type === objects_PDFName.of('Btn')
              ? createPDFAcroButton(dict, ref)
              : type === objects_PDFName.of('Ch')
                ? createPDFAcroChoice(dict, ref)
                : type === objects_PDFName.of('Tx')
                  ? acroform_PDFAcroText.fromDict(dict, ref)
                  : type === objects_PDFName.of('Sig')
                    ? acroform_PDFAcroSignature.fromDict(dict, ref)
                    : acroform_PDFAcroTerminal.fromDict(dict, ref)
          },
          createPDFAcroButton = function (dict, ref) {
            var _a,
              ffNumberOrRef = getInheritableAttribute(
                dict,
                objects_PDFName.of('Ff')
              ),
              ffNumber = dict.context.lookupMaybe(
                ffNumberOrRef,
                objects_PDFNumber
              ),
              flags =
                null !==
                  (_a = null == ffNumber ? void 0 : ffNumber.asNumber()) &&
                void 0 !== _a
                  ? _a
                  : 0
            return flagIsSet(flags, AcroButtonFlags.PushButton)
              ? acroform_PDFAcroPushButton.fromDict(dict, ref)
              : flagIsSet(flags, AcroButtonFlags.Radio)
                ? acroform_PDFAcroRadioButton.fromDict(dict, ref)
                : acroform_PDFAcroCheckBox.fromDict(dict, ref)
          },
          createPDFAcroChoice = function (dict, ref) {
            var _a,
              ffNumberOrRef = getInheritableAttribute(
                dict,
                objects_PDFName.of('Ff')
              ),
              ffNumber = dict.context.lookupMaybe(
                ffNumberOrRef,
                objects_PDFNumber
              ),
              flags =
                null !==
                  (_a = null == ffNumber ? void 0 : ffNumber.asNumber()) &&
                void 0 !== _a
                  ? _a
                  : 0
            return flagIsSet(flags, AcroChoiceFlags.Combo)
              ? acroform_PDFAcroComboBox.fromDict(dict, ref)
              : acroform_PDFAcroListBox.fromDict(dict, ref)
          },
          flagIsSet = function (flags, flag) {
            return 0 !== (flags & flag)
          },
          getInheritableAttribute = function (startNode, name) {
            var attribute
            return (
              ascend(startNode, function (node) {
                attribute || (attribute = node.get(name))
              }),
              attribute
            )
          },
          ascend = function (startNode, visitor) {
            visitor(startNode)
            var Parent = startNode.lookupMaybe(
              objects_PDFName.of('Parent'),
              objects_PDFDict
            )
            Parent && ascend(Parent, visitor)
          },
          PDFAcroForm = (function () {
            function PDFAcroForm(dict) {
              this.dict = dict
            }
            return (
              (PDFAcroForm.prototype.Fields = function () {
                var fields = this.dict.lookup(objects_PDFName.of('Fields'))
                if (fields instanceof objects_PDFArray) return fields
              }),
              (PDFAcroForm.prototype.getFields = function () {
                for (
                  var Fields = this.normalizedEntries().Fields,
                    fields = new Array(Fields.size()),
                    idx = 0,
                    len = Fields.size();
                  idx < len;
                  idx++
                ) {
                  var ref = Fields.get(idx),
                    dict = Fields.lookup(idx, objects_PDFDict)
                  fields[idx] = [createPDFAcroField(dict, ref), ref]
                }
                return fields
              }),
              (PDFAcroForm.prototype.getAllFields = function () {
                var allFields = [],
                  pushFields = function (fields) {
                    if (fields)
                      for (var idx = 0, len = fields.length; idx < len; idx++) {
                        var field = fields[idx]
                        allFields.push(field)
                        var fieldModel = field[0]
                        fieldModel instanceof acroform_PDFAcroNonTerminal &&
                          pushFields(createPDFAcroFields(fieldModel.Kids()))
                      }
                  }
                return (pushFields(this.getFields()), allFields)
              }),
              (PDFAcroForm.prototype.addField = function (field) {
                var Fields = this.normalizedEntries().Fields
                null == Fields || Fields.push(field)
              }),
              (PDFAcroForm.prototype.removeField = function (field) {
                var parent = field.getParent(),
                  fields =
                    void 0 === parent
                      ? this.normalizedEntries().Fields
                      : parent.Kids(),
                  index = null == fields ? void 0 : fields.indexOf(field.ref)
                if (void 0 === fields || void 0 === index)
                  throw new Error(
                    'Tried to remove inexistent field ' +
                      field.getFullyQualifiedName()
                  )
                ;(fields.remove(index),
                  void 0 !== parent &&
                    0 === fields.size() &&
                    this.removeField(parent))
              }),
              (PDFAcroForm.prototype.normalizedEntries = function () {
                var Fields = this.Fields()
                return (
                  Fields ||
                    ((Fields = this.dict.context.obj([])),
                    this.dict.set(objects_PDFName.of('Fields'), Fields)),
                  { Fields }
                )
              }),
              (PDFAcroForm.fromDict = function (dict) {
                return new PDFAcroForm(dict)
              }),
              (PDFAcroForm.create = function (context) {
                return new PDFAcroForm(context.obj({ Fields: [] }))
              }),
              PDFAcroForm
            )
          })()
        const acroform_PDFAcroForm = PDFAcroForm
        const structures_PDFCatalog = (function (_super) {
          function PDFCatalog() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFCatalog, _super),
            (PDFCatalog.prototype.Pages = function () {
              return this.lookup(objects_PDFName.of('Pages'), objects_PDFDict)
            }),
            (PDFCatalog.prototype.AcroForm = function () {
              return this.lookupMaybe(
                objects_PDFName.of('AcroForm'),
                objects_PDFDict
              )
            }),
            (PDFCatalog.prototype.getAcroForm = function () {
              var dict = this.AcroForm()
              if (dict) return acroform_PDFAcroForm.fromDict(dict)
            }),
            (PDFCatalog.prototype.getOrCreateAcroForm = function () {
              var acroForm = this.getAcroForm()
              if (!acroForm) {
                acroForm = acroform_PDFAcroForm.create(this.context)
                var acroFormRef = this.context.register(acroForm.dict)
                this.set(objects_PDFName.of('AcroForm'), acroFormRef)
              }
              return acroForm
            }),
            (PDFCatalog.prototype.ViewerPreferences = function () {
              return this.lookupMaybe(
                objects_PDFName.of('ViewerPreferences'),
                objects_PDFDict
              )
            }),
            (PDFCatalog.prototype.getViewerPreferences = function () {
              var dict = this.ViewerPreferences()
              if (dict) return interactive_ViewerPreferences.fromDict(dict)
            }),
            (PDFCatalog.prototype.getOrCreateViewerPreferences = function () {
              var viewerPrefs = this.getViewerPreferences()
              if (!viewerPrefs) {
                viewerPrefs = interactive_ViewerPreferences.create(this.context)
                var viewerPrefsRef = this.context.register(viewerPrefs.dict)
                this.set(
                  objects_PDFName.of('ViewerPreferences'),
                  viewerPrefsRef
                )
              }
              return viewerPrefs
            }),
            (PDFCatalog.prototype.insertLeafNode = function (leafRef, index) {
              var pagesRef = this.get(objects_PDFName.of('Pages'))
              return this.Pages().insertLeafNode(leafRef, index) || pagesRef
            }),
            (PDFCatalog.prototype.removeLeafNode = function (index) {
              this.Pages().removeLeafNode(index)
            }),
            (PDFCatalog.withContextAndPages = function (context, pages) {
              var dict = new Map()
              return (
                dict.set(
                  objects_PDFName.of('Type'),
                  objects_PDFName.of('Catalog')
                ),
                dict.set(objects_PDFName.of('Pages'), pages),
                new PDFCatalog(dict, context)
              )
            }),
            (PDFCatalog.fromMapWithContext = function (map, context) {
              return new PDFCatalog(map, context)
            }),
            PDFCatalog
          )
        })(objects_PDFDict)
        var PDFPageTree = (function (_super) {
          function PDFPageTree() {
            return (null !== _super && _super.apply(this, arguments)) || this
          }
          return (
            __extends(PDFPageTree, _super),
            (PDFPageTree.prototype.Parent = function () {
              return this.lookup(objects_PDFName.of('Parent'))
            }),
            (PDFPageTree.prototype.Kids = function () {
              return this.lookup(objects_PDFName.of('Kids'), objects_PDFArray)
            }),
            (PDFPageTree.prototype.Count = function () {
              return this.lookup(objects_PDFName.of('Count'), objects_PDFNumber)
            }),
            (PDFPageTree.prototype.pushTreeNode = function (treeRef) {
              this.Kids().push(treeRef)
            }),
            (PDFPageTree.prototype.pushLeafNode = function (leafRef) {
              var Kids = this.Kids()
              this.insertLeafKid(Kids.size(), leafRef)
            }),
            (PDFPageTree.prototype.insertLeafNode = function (
              leafRef,
              targetIndex
            ) {
              var Kids = this.Kids(),
                Count = this.Count().asNumber()
              if (targetIndex > Count)
                throw new InvalidTargetIndexError(targetIndex, Count)
              for (
                var leafsRemainingUntilTarget = targetIndex,
                  idx = 0,
                  len = Kids.size();
                idx < len;
                idx++
              ) {
                if (0 === leafsRemainingUntilTarget)
                  return void this.insertLeafKid(idx, leafRef)
                var kidRef = Kids.get(idx),
                  kid = this.context.lookup(kidRef)
                if (kid instanceof PDFPageTree) {
                  if (kid.Count().asNumber() > leafsRemainingUntilTarget)
                    return (
                      kid.insertLeafNode(leafRef, leafsRemainingUntilTarget) ||
                      kidRef
                    )
                  leafsRemainingUntilTarget -= kid.Count().asNumber()
                }
                kid instanceof structures_PDFPageLeaf &&
                  (leafsRemainingUntilTarget -= 1)
              }
              if (0 !== leafsRemainingUntilTarget)
                throw new CorruptPageTreeError(targetIndex, 'insertLeafNode')
              this.insertLeafKid(Kids.size(), leafRef)
            }),
            (PDFPageTree.prototype.removeLeafNode = function (
              targetIndex,
              prune
            ) {
              void 0 === prune && (prune = !0)
              var Kids = this.Kids(),
                Count = this.Count().asNumber()
              if (targetIndex >= Count)
                throw new InvalidTargetIndexError(targetIndex, Count)
              for (
                var leafsRemainingUntilTarget = targetIndex,
                  idx = 0,
                  len = Kids.size();
                idx < len;
                idx++
              ) {
                var kidRef = Kids.get(idx),
                  kid = this.context.lookup(kidRef)
                if (kid instanceof PDFPageTree) {
                  if (kid.Count().asNumber() > leafsRemainingUntilTarget)
                    return (
                      kid.removeLeafNode(leafsRemainingUntilTarget, prune),
                      void (
                        prune &&
                        0 === kid.Kids().size() &&
                        Kids.remove(idx)
                      )
                    )
                  leafsRemainingUntilTarget -= kid.Count().asNumber()
                }
                if (kid instanceof structures_PDFPageLeaf) {
                  if (0 === leafsRemainingUntilTarget)
                    return void this.removeKid(idx)
                  leafsRemainingUntilTarget -= 1
                }
              }
              throw new CorruptPageTreeError(targetIndex, 'removeLeafNode')
            }),
            (PDFPageTree.prototype.ascend = function (visitor) {
              visitor(this)
              var Parent = this.Parent()
              Parent && Parent.ascend(visitor)
            }),
            (PDFPageTree.prototype.traverse = function (visitor) {
              for (
                var Kids = this.Kids(), idx = 0, len = Kids.size();
                idx < len;
                idx++
              ) {
                var kidRef = Kids.get(idx),
                  kid = this.context.lookup(kidRef)
                ;(kid instanceof PDFPageTree && kid.traverse(visitor),
                  visitor(kid, kidRef))
              }
            }),
            (PDFPageTree.prototype.insertLeafKid = function (kidIdx, leafRef) {
              var Kids = this.Kids()
              ;(this.ascend(function (node) {
                var newCount = node.Count().asNumber() + 1
                node.set(
                  objects_PDFName.of('Count'),
                  objects_PDFNumber.of(newCount)
                )
              }),
                Kids.insert(kidIdx, leafRef))
            }),
            (PDFPageTree.prototype.removeKid = function (kidIdx) {
              var Kids = this.Kids()
              ;(Kids.lookup(kidIdx) instanceof structures_PDFPageLeaf &&
                this.ascend(function (node) {
                  var newCount = node.Count().asNumber() - 1
                  node.set(
                    objects_PDFName.of('Count'),
                    objects_PDFNumber.of(newCount)
                  )
                }),
                Kids.remove(kidIdx))
            }),
            (PDFPageTree.withContext = function (context, parent) {
              var dict = new Map()
              return (
                dict.set(
                  objects_PDFName.of('Type'),
                  objects_PDFName.of('Pages')
                ),
                dict.set(objects_PDFName.of('Kids'), context.obj([])),
                dict.set(objects_PDFName.of('Count'), context.obj(0)),
                parent && dict.set(objects_PDFName.of('Parent'), parent),
                new PDFPageTree(dict, context)
              )
            }),
            (PDFPageTree.fromMapWithContext = function (map, context) {
              return new PDFPageTree(map, context)
            }),
            PDFPageTree
          )
        })(objects_PDFDict)
        const structures_PDFPageTree = PDFPageTree
        var IsDigit = new Uint8Array(256)
        ;((IsDigit[syntax_CharCodes.Zero] = 1),
          (IsDigit[syntax_CharCodes.One] = 1),
          (IsDigit[syntax_CharCodes.Two] = 1),
          (IsDigit[syntax_CharCodes.Three] = 1),
          (IsDigit[syntax_CharCodes.Four] = 1),
          (IsDigit[syntax_CharCodes.Five] = 1),
          (IsDigit[syntax_CharCodes.Six] = 1),
          (IsDigit[syntax_CharCodes.Seven] = 1),
          (IsDigit[syntax_CharCodes.Eight] = 1),
          (IsDigit[syntax_CharCodes.Nine] = 1))
        var IsNumericPrefix = new Uint8Array(256)
        ;((IsNumericPrefix[syntax_CharCodes.Period] = 1),
          (IsNumericPrefix[syntax_CharCodes.Plus] = 1),
          (IsNumericPrefix[syntax_CharCodes.Minus] = 1))
        for (
          var IsNumeric = new Uint8Array(256), Numeric_idx = 0;
          Numeric_idx < 256;
          Numeric_idx++
        )
          IsNumeric[Numeric_idx] =
            IsDigit[Numeric_idx] || IsNumericPrefix[Numeric_idx] ? 1 : 0
        var BaseParser_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          Newline = syntax_CharCodes.Newline,
          CarriageReturn = syntax_CharCodes.CarriageReturn,
          BaseParser = (function () {
            function BaseParser(bytes, capNumbers) {
              ;(void 0 === capNumbers && (capNumbers = !1),
                (this.bytes = bytes),
                (this.capNumbers = capNumbers))
            }
            return (
              (BaseParser.prototype.parseRawInt = function () {
                for (var value = ''; !this.bytes.done(); ) {
                  var byte = this.bytes.peek()
                  if (!IsDigit[byte]) break
                  value += charFromCode(this.bytes.next())
                }
                var numberValue = Number(value)
                if (!value || !isFinite(numberValue))
                  throw new NumberParsingError(this.bytes.position(), value)
                return numberValue
              }),
              (BaseParser.prototype.parseRawNumber = function () {
                for (var value = ''; !this.bytes.done(); ) {
                  var byte = this.bytes.peek()
                  if (!IsNumeric[byte]) break
                  if (
                    ((value += charFromCode(this.bytes.next())),
                    byte === syntax_CharCodes.Period)
                  )
                    break
                }
                for (; !this.bytes.done(); ) {
                  byte = this.bytes.peek()
                  if (!IsDigit[byte]) break
                  value += charFromCode(this.bytes.next())
                }
                var numberValue = Number(value)
                if (!value || !isFinite(numberValue))
                  throw new NumberParsingError(this.bytes.position(), value)
                if (numberValue > Number.MAX_SAFE_INTEGER) {
                  if (this.capNumbers) {
                    var msg =
                      'Parsed number that is too large for some PDF readers: ' +
                      value +
                      ', using Number.MAX_SAFE_INTEGER instead.'
                    return (
                      BaseParser_console.warn(msg),
                      Number.MAX_SAFE_INTEGER
                    )
                  }
                  msg =
                    'Parsed number that is too large for some PDF readers: ' +
                    value +
                    ', not capping.'
                  BaseParser_console.warn(msg)
                }
                return numberValue
              }),
              (BaseParser.prototype.skipWhitespace = function () {
                for (; !this.bytes.done() && IsWhitespace[this.bytes.peek()]; )
                  this.bytes.next()
              }),
              (BaseParser.prototype.skipLine = function () {
                for (; !this.bytes.done(); ) {
                  var byte = this.bytes.peek()
                  if (byte === Newline || byte === CarriageReturn) return
                  this.bytes.next()
                }
              }),
              (BaseParser.prototype.skipComment = function () {
                if (this.bytes.peek() !== syntax_CharCodes.Percent) return !1
                for (; !this.bytes.done(); ) {
                  var byte = this.bytes.peek()
                  if (byte === Newline || byte === CarriageReturn) return !0
                  this.bytes.next()
                }
                return !0
              }),
              (BaseParser.prototype.skipWhitespaceAndComments = function () {
                for (this.skipWhitespace(); this.skipComment(); )
                  this.skipWhitespace()
              }),
              (BaseParser.prototype.matchKeyword = function (keyword) {
                for (
                  var initialOffset = this.bytes.offset(),
                    idx = 0,
                    len = keyword.length;
                  idx < len;
                  idx++
                )
                  if (this.bytes.done() || this.bytes.next() !== keyword[idx])
                    return (this.bytes.moveTo(initialOffset), !1)
                return !0
              }),
              BaseParser
            )
          })()
        const parser_BaseParser = BaseParser
        const parser_ByteStream = (function () {
          function ByteStream(bytes) {
            ;((this.idx = 0),
              (this.line = 0),
              (this.column = 0),
              (this.bytes = bytes),
              (this.length = this.bytes.length))
          }
          return (
            (ByteStream.prototype.moveTo = function (offset) {
              this.idx = offset
            }),
            (ByteStream.prototype.next = function () {
              var byte = this.bytes[this.idx++]
              return (
                byte === syntax_CharCodes.Newline
                  ? ((this.line += 1), (this.column = 0))
                  : (this.column += 1),
                byte
              )
            }),
            (ByteStream.prototype.assertNext = function (expected) {
              if (this.peek() !== expected)
                throw new NextByteAssertionError(
                  this.position(),
                  expected,
                  this.peek()
                )
              return this.next()
            }),
            (ByteStream.prototype.peek = function () {
              return this.bytes[this.idx]
            }),
            (ByteStream.prototype.peekAhead = function (steps) {
              return this.bytes[this.idx + steps]
            }),
            (ByteStream.prototype.peekAt = function (offset) {
              return this.bytes[offset]
            }),
            (ByteStream.prototype.done = function () {
              return this.idx >= this.length
            }),
            (ByteStream.prototype.offset = function () {
              return this.idx
            }),
            (ByteStream.prototype.slice = function (start, end) {
              return this.bytes.slice(start, end)
            }),
            (ByteStream.prototype.position = function () {
              return { line: this.line, column: this.column, offset: this.idx }
            }),
            (ByteStream.of = function (bytes) {
              return new ByteStream(bytes)
            }),
            (ByteStream.fromPDFRawStream = function (rawStream) {
              return ByteStream.of(decodePDFRawStream(rawStream).decode())
            }),
            ByteStream
          )
        })()
        var Space = syntax_CharCodes.Space,
          Keywords_CarriageReturn = syntax_CharCodes.CarriageReturn,
          Keywords_Newline = syntax_CharCodes.Newline,
          stream = [
            syntax_CharCodes.s,
            syntax_CharCodes.t,
            syntax_CharCodes.r,
            syntax_CharCodes.e,
            syntax_CharCodes.a,
            syntax_CharCodes.m,
          ],
          endstream = [
            syntax_CharCodes.e,
            syntax_CharCodes.n,
            syntax_CharCodes.d,
            syntax_CharCodes.s,
            syntax_CharCodes.t,
            syntax_CharCodes.r,
            syntax_CharCodes.e,
            syntax_CharCodes.a,
            syntax_CharCodes.m,
          ],
          Keywords = {
            header: [
              syntax_CharCodes.Percent,
              syntax_CharCodes.P,
              syntax_CharCodes.D,
              syntax_CharCodes.F,
              syntax_CharCodes.Dash,
            ],
            eof: [
              syntax_CharCodes.Percent,
              syntax_CharCodes.Percent,
              syntax_CharCodes.E,
              syntax_CharCodes.O,
              syntax_CharCodes.F,
            ],
            obj: [syntax_CharCodes.o, syntax_CharCodes.b, syntax_CharCodes.j],
            endobj: [
              syntax_CharCodes.e,
              syntax_CharCodes.n,
              syntax_CharCodes.d,
              syntax_CharCodes.o,
              syntax_CharCodes.b,
              syntax_CharCodes.j,
            ],
            xref: [
              syntax_CharCodes.x,
              syntax_CharCodes.r,
              syntax_CharCodes.e,
              syntax_CharCodes.f,
            ],
            trailer: [
              syntax_CharCodes.t,
              syntax_CharCodes.r,
              syntax_CharCodes.a,
              syntax_CharCodes.i,
              syntax_CharCodes.l,
              syntax_CharCodes.e,
              syntax_CharCodes.r,
            ],
            startxref: [
              syntax_CharCodes.s,
              syntax_CharCodes.t,
              syntax_CharCodes.a,
              syntax_CharCodes.r,
              syntax_CharCodes.t,
              syntax_CharCodes.x,
              syntax_CharCodes.r,
              syntax_CharCodes.e,
              syntax_CharCodes.f,
            ],
            true: [
              syntax_CharCodes.t,
              syntax_CharCodes.r,
              syntax_CharCodes.u,
              syntax_CharCodes.e,
            ],
            false: [
              syntax_CharCodes.f,
              syntax_CharCodes.a,
              syntax_CharCodes.l,
              syntax_CharCodes.s,
              syntax_CharCodes.e,
            ],
            null: [
              syntax_CharCodes.n,
              syntax_CharCodes.u,
              syntax_CharCodes.l,
              syntax_CharCodes.l,
            ],
            stream,
            streamEOF1: __spreadArrays(stream, [
              Space,
              Keywords_CarriageReturn,
              Keywords_Newline,
            ]),
            streamEOF2: __spreadArrays(stream, [
              Keywords_CarriageReturn,
              Keywords_Newline,
            ]),
            streamEOF3: __spreadArrays(stream, [Keywords_CarriageReturn]),
            streamEOF4: __spreadArrays(stream, [Keywords_Newline]),
            endstream,
            EOF1endstream: __spreadArrays(
              [Keywords_CarriageReturn, Keywords_Newline],
              endstream
            ),
            EOF2endstream: __spreadArrays([Keywords_CarriageReturn], endstream),
            EOF3endstream: __spreadArrays([Keywords_Newline], endstream),
          }
        const parser_PDFObjectParser = (function (_super) {
          function PDFObjectParser(byteStream, context, capNumbers) {
            void 0 === capNumbers && (capNumbers = !1)
            var _this = _super.call(this, byteStream, capNumbers) || this
            return ((_this.context = context), _this)
          }
          return (
            __extends(PDFObjectParser, _super),
            (PDFObjectParser.prototype.parseObject = function () {
              if (
                (this.skipWhitespaceAndComments(),
                this.matchKeyword(Keywords.true))
              )
                return objects_PDFBool.True
              if (this.matchKeyword(Keywords.false))
                return objects_PDFBool.False
              if (this.matchKeyword(Keywords.null)) return objects_PDFNull
              var byte = this.bytes.peek()
              if (
                byte === syntax_CharCodes.LessThan &&
                this.bytes.peekAhead(1) === syntax_CharCodes.LessThan
              )
                return this.parseDictOrStream()
              if (byte === syntax_CharCodes.LessThan)
                return this.parseHexString()
              if (byte === syntax_CharCodes.LeftParen) return this.parseString()
              if (byte === syntax_CharCodes.ForwardSlash)
                return this.parseName()
              if (byte === syntax_CharCodes.LeftSquareBracket)
                return this.parseArray()
              if (IsNumeric[byte]) return this.parseNumberOrRef()
              throw new PDFObjectParsingError(this.bytes.position(), byte)
            }),
            (PDFObjectParser.prototype.parseNumberOrRef = function () {
              var firstNum = this.parseRawNumber()
              this.skipWhitespaceAndComments()
              var lookaheadStart = this.bytes.offset()
              if (IsDigit[this.bytes.peek()]) {
                var secondNum = this.parseRawNumber()
                if (
                  (this.skipWhitespaceAndComments(),
                  this.bytes.peek() === syntax_CharCodes.R)
                )
                  return (
                    this.bytes.assertNext(syntax_CharCodes.R),
                    objects_PDFRef.of(firstNum, secondNum)
                  )
              }
              return (
                this.bytes.moveTo(lookaheadStart),
                objects_PDFNumber.of(firstNum)
              )
            }),
            (PDFObjectParser.prototype.parseHexString = function () {
              var value = ''
              for (
                this.bytes.assertNext(syntax_CharCodes.LessThan);
                !this.bytes.done() &&
                this.bytes.peek() !== syntax_CharCodes.GreaterThan;

              )
                value += charFromCode(this.bytes.next())
              return (
                this.bytes.assertNext(syntax_CharCodes.GreaterThan),
                objects_PDFHexString.of(value)
              )
            }),
            (PDFObjectParser.prototype.parseString = function () {
              for (
                var nestingLvl = 0, isEscaped = !1, value = '';
                !this.bytes.done();

              ) {
                var byte = this.bytes.next()
                if (
                  ((value += charFromCode(byte)),
                  isEscaped ||
                    (byte === syntax_CharCodes.LeftParen && (nestingLvl += 1),
                    byte === syntax_CharCodes.RightParen && (nestingLvl -= 1)),
                  byte === syntax_CharCodes.BackSlash
                    ? (isEscaped = !isEscaped)
                    : isEscaped && (isEscaped = !1),
                  0 === nestingLvl)
                )
                  return objects_PDFString.of(
                    value.substring(1, value.length - 1)
                  )
              }
              throw new UnbalancedParenthesisError(this.bytes.position())
            }),
            (PDFObjectParser.prototype.parseName = function () {
              this.bytes.assertNext(syntax_CharCodes.ForwardSlash)
              for (var name = ''; !this.bytes.done(); ) {
                var byte = this.bytes.peek()
                if (IsWhitespace[byte] || IsDelimiter[byte]) break
                ;((name += charFromCode(byte)), this.bytes.next())
              }
              return objects_PDFName.of(name)
            }),
            (PDFObjectParser.prototype.parseArray = function () {
              ;(this.bytes.assertNext(syntax_CharCodes.LeftSquareBracket),
                this.skipWhitespaceAndComments())
              for (
                var pdfArray = objects_PDFArray.withContext(this.context);
                this.bytes.peek() !== syntax_CharCodes.RightSquareBracket;

              ) {
                var element = this.parseObject()
                ;(pdfArray.push(element), this.skipWhitespaceAndComments())
              }
              return (
                this.bytes.assertNext(syntax_CharCodes.RightSquareBracket),
                pdfArray
              )
            }),
            (PDFObjectParser.prototype.parseDict = function () {
              ;(this.bytes.assertNext(syntax_CharCodes.LessThan),
                this.bytes.assertNext(syntax_CharCodes.LessThan),
                this.skipWhitespaceAndComments())
              for (
                var dict = new Map();
                !this.bytes.done() &&
                this.bytes.peek() !== syntax_CharCodes.GreaterThan &&
                this.bytes.peekAhead(1) !== syntax_CharCodes.GreaterThan;

              ) {
                var key = this.parseName(),
                  value = this.parseObject()
                ;(dict.set(key, value), this.skipWhitespaceAndComments())
              }
              ;(this.skipWhitespaceAndComments(),
                this.bytes.assertNext(syntax_CharCodes.GreaterThan),
                this.bytes.assertNext(syntax_CharCodes.GreaterThan))
              var Type = dict.get(objects_PDFName.of('Type'))
              return Type === objects_PDFName.of('Catalog')
                ? structures_PDFCatalog.fromMapWithContext(dict, this.context)
                : Type === objects_PDFName.of('Pages')
                  ? structures_PDFPageTree.fromMapWithContext(
                      dict,
                      this.context
                    )
                  : Type === objects_PDFName.of('Page')
                    ? structures_PDFPageLeaf.fromMapWithContext(
                        dict,
                        this.context
                      )
                    : objects_PDFDict.fromMapWithContext(dict, this.context)
            }),
            (PDFObjectParser.prototype.parseDictOrStream = function () {
              var startPos = this.bytes.position(),
                dict = this.parseDict()
              if (
                (this.skipWhitespaceAndComments(),
                !(
                  this.matchKeyword(Keywords.streamEOF1) ||
                  this.matchKeyword(Keywords.streamEOF2) ||
                  this.matchKeyword(Keywords.streamEOF3) ||
                  this.matchKeyword(Keywords.streamEOF4) ||
                  this.matchKeyword(Keywords.stream)
                ))
              )
                return dict
              var end,
                start = this.bytes.offset(),
                Length = dict.get(objects_PDFName.of('Length'))
              Length instanceof objects_PDFNumber
                ? ((end = start + Length.asNumber()),
                  this.bytes.moveTo(end),
                  this.skipWhitespaceAndComments(),
                  this.matchKeyword(Keywords.endstream) ||
                    (this.bytes.moveTo(start),
                    (end = this.findEndOfStreamFallback(startPos))))
                : (end = this.findEndOfStreamFallback(startPos))
              var contents = this.bytes.slice(start, end)
              return objects_PDFRawStream.of(dict, contents)
            }),
            (PDFObjectParser.prototype.findEndOfStreamFallback = function (
              startPos
            ) {
              for (
                var nestingLvl = 1, end = this.bytes.offset();
                !this.bytes.done() &&
                ((end = this.bytes.offset()),
                this.matchKeyword(Keywords.stream)
                  ? (nestingLvl += 1)
                  : this.matchKeyword(Keywords.EOF1endstream) ||
                      this.matchKeyword(Keywords.EOF2endstream) ||
                      this.matchKeyword(Keywords.EOF3endstream) ||
                      this.matchKeyword(Keywords.endstream)
                    ? (nestingLvl -= 1)
                    : this.bytes.next(),
                0 !== nestingLvl);

              );
              if (0 !== nestingLvl) throw new PDFStreamParsingError(startPos)
              return end
            }),
            (PDFObjectParser.forBytes = function (bytes, context, capNumbers) {
              return new PDFObjectParser(
                parser_ByteStream.of(bytes),
                context,
                capNumbers
              )
            }),
            (PDFObjectParser.forByteStream = function (
              byteStream,
              context,
              capNumbers
            ) {
              return (
                void 0 === capNumbers && (capNumbers = !1),
                new PDFObjectParser(byteStream, context, capNumbers)
              )
            }),
            PDFObjectParser
          )
        })(parser_BaseParser)
        var PDFObjectStreamParser = (function (_super) {
          function PDFObjectStreamParser(rawStream, shouldWaitForTick) {
            var _this =
                _super.call(
                  this,
                  parser_ByteStream.fromPDFRawStream(rawStream),
                  rawStream.dict.context
                ) || this,
              dict = rawStream.dict
            return (
              (_this.alreadyParsed = !1),
              (_this.shouldWaitForTick =
                shouldWaitForTick ||
                function () {
                  return !1
                }),
              (_this.firstOffset = dict
                .lookup(objects_PDFName.of('First'), objects_PDFNumber)
                .asNumber()),
              (_this.objectCount = dict
                .lookup(objects_PDFName.of('N'), objects_PDFNumber)
                .asNumber()),
              _this
            )
          }
          return (
            __extends(PDFObjectStreamParser, _super),
            (PDFObjectStreamParser.prototype.parseIntoContext = function () {
              return __awaiter(this, void 0, void 0, function () {
                var offsetsAndObjectNumbers,
                  idx,
                  len,
                  _a,
                  objectNumber,
                  offset,
                  object,
                  ref
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      if (this.alreadyParsed)
                        throw new ReparseError(
                          'PDFObjectStreamParser',
                          'parseIntoContext'
                        )
                      ;((this.alreadyParsed = !0),
                        (offsetsAndObjectNumbers =
                          this.parseOffsetsAndObjectNumbers()),
                        (idx = 0),
                        (len = offsetsAndObjectNumbers.length),
                        (_b.label = 1))
                    case 1:
                      return idx < len
                        ? ((_a = offsetsAndObjectNumbers[idx]),
                          (objectNumber = _a.objectNumber),
                          (offset = _a.offset),
                          this.bytes.moveTo(this.firstOffset + offset),
                          (object = this.parseObject()),
                          (ref = objects_PDFRef.of(objectNumber, 0)),
                          this.context.assign(ref, object),
                          this.shouldWaitForTick()
                            ? [4, waitForTick()]
                            : [3, 3])
                        : [3, 4]
                    case 2:
                      ;(_b.sent(), (_b.label = 3))
                    case 3:
                      return (idx++, [3, 1])
                    case 4:
                      return [2]
                  }
                })
              })
            }),
            (PDFObjectStreamParser.prototype.parseOffsetsAndObjectNumbers =
              function () {
                for (
                  var offsetsAndObjectNumbers = [],
                    idx = 0,
                    len = this.objectCount;
                  idx < len;
                  idx++
                ) {
                  this.skipWhitespaceAndComments()
                  var objectNumber = this.parseRawInt()
                  this.skipWhitespaceAndComments()
                  var offset = this.parseRawInt()
                  offsetsAndObjectNumbers.push({ objectNumber, offset })
                }
                return offsetsAndObjectNumbers
              }),
            (PDFObjectStreamParser.forStream = function (
              rawStream,
              shouldWaitForTick
            ) {
              return new PDFObjectStreamParser(rawStream, shouldWaitForTick)
            }),
            PDFObjectStreamParser
          )
        })(parser_PDFObjectParser)
        const parser_PDFObjectStreamParser = PDFObjectStreamParser
        var PDFXRefStreamParser = (function () {
          function PDFXRefStreamParser(rawStream) {
            ;((this.alreadyParsed = !1),
              (this.dict = rawStream.dict),
              (this.bytes = parser_ByteStream.fromPDFRawStream(rawStream)),
              (this.context = this.dict.context))
            var Size = this.dict.lookup(
                objects_PDFName.of('Size'),
                objects_PDFNumber
              ),
              Index = this.dict.lookup(objects_PDFName.of('Index'))
            if (Index instanceof objects_PDFArray) {
              this.subsections = []
              for (var idx = 0, len = Index.size(); idx < len; idx += 2) {
                var firstObjectNumber = Index.lookup(
                    idx + 0,
                    objects_PDFNumber
                  ).asNumber(),
                  length_1 = Index.lookup(idx + 1, objects_PDFNumber).asNumber()
                this.subsections.push({ firstObjectNumber, length: length_1 })
              }
            } else
              this.subsections = [
                { firstObjectNumber: 0, length: Size.asNumber() },
              ]
            var W = this.dict.lookup(objects_PDFName.of('W'), objects_PDFArray)
            this.byteWidths = [-1, -1, -1]
            for (idx = 0, len = W.size(); idx < len; idx++)
              this.byteWidths[idx] = W.lookup(idx, objects_PDFNumber).asNumber()
          }
          return (
            (PDFXRefStreamParser.prototype.parseIntoContext = function () {
              if (this.alreadyParsed)
                throw new ReparseError(
                  'PDFXRefStreamParser',
                  'parseIntoContext'
                )
              return (
                (this.alreadyParsed = !0),
                (this.context.trailerInfo = {
                  Root: this.dict.get(objects_PDFName.of('Root')),
                  Encrypt: this.dict.get(objects_PDFName.of('Encrypt')),
                  Info: this.dict.get(objects_PDFName.of('Info')),
                  ID: this.dict.get(objects_PDFName.of('ID')),
                }),
                this.parseEntries()
              )
            }),
            (PDFXRefStreamParser.prototype.parseEntries = function () {
              for (
                var entries = [],
                  _a = this.byteWidths,
                  typeFieldWidth = _a[0],
                  offsetFieldWidth = _a[1],
                  genFieldWidth = _a[2],
                  subsectionIdx = 0,
                  subsectionLen = this.subsections.length;
                subsectionIdx < subsectionLen;
                subsectionIdx++
              )
                for (
                  var _b = this.subsections[subsectionIdx],
                    firstObjectNumber = _b.firstObjectNumber,
                    length_2 = _b.length,
                    objIdx = 0;
                  objIdx < length_2;
                  objIdx++
                ) {
                  for (
                    var type = 0, idx = 0, len = typeFieldWidth;
                    idx < len;
                    idx++
                  )
                    type = (type << 8) | this.bytes.next()
                  var offset = 0
                  for (idx = 0, len = offsetFieldWidth; idx < len; idx++)
                    offset = (offset << 8) | this.bytes.next()
                  var generationNumber = 0
                  for (idx = 0, len = genFieldWidth; idx < len; idx++)
                    generationNumber =
                      (generationNumber << 8) | this.bytes.next()
                  0 === typeFieldWidth && (type = 1)
                  var objectNumber = firstObjectNumber + objIdx,
                    entry = {
                      ref: objects_PDFRef.of(objectNumber, generationNumber),
                      offset,
                      deleted: 0 === type,
                      inObjectStream: 2 === type,
                    }
                  entries.push(entry)
                }
              return entries
            }),
            (PDFXRefStreamParser.forStream = function (rawStream) {
              return new PDFXRefStreamParser(rawStream)
            }),
            PDFXRefStreamParser
          )
        })()
        const parser_PDFXRefStreamParser = PDFXRefStreamParser
        var PDFParser_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          PDFParser = (function (_super) {
            function PDFParser(
              pdfBytes,
              objectsPerTick,
              throwOnInvalidObject,
              capNumbers
            ) {
              ;(void 0 === objectsPerTick && (objectsPerTick = 1 / 0),
                void 0 === throwOnInvalidObject && (throwOnInvalidObject = !1),
                void 0 === capNumbers && (capNumbers = !1))
              var _this =
                _super.call(
                  this,
                  parser_ByteStream.of(pdfBytes),
                  core_PDFContext.create(),
                  capNumbers
                ) || this
              return (
                (_this.alreadyParsed = !1),
                (_this.parsedObjects = 0),
                (_this.shouldWaitForTick = function () {
                  return (
                    (_this.parsedObjects += 1),
                    _this.parsedObjects % _this.objectsPerTick === 0
                  )
                }),
                (_this.objectsPerTick = objectsPerTick),
                (_this.throwOnInvalidObject = throwOnInvalidObject),
                _this
              )
            }
            return (
              __extends(PDFParser, _super),
              (PDFParser.prototype.parseDocument = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var prevOffset, offset
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (this.alreadyParsed)
                          throw new ReparseError('PDFParser', 'parseDocument')
                        ;((this.alreadyParsed = !0),
                          (this.context.header = this.parseHeader()),
                          (_a.label = 1))
                      case 1:
                        return this.bytes.done()
                          ? [3, 3]
                          : [4, this.parseDocumentSection()]
                      case 2:
                        if (
                          (_a.sent(),
                          (offset = this.bytes.offset()) === prevOffset)
                        )
                          throw new StalledParserError(this.bytes.position())
                        return ((prevOffset = offset), [3, 1])
                      case 3:
                        return (
                          this.maybeRecoverRoot(),
                          this.context.lookup(objects_PDFRef.of(0)) &&
                            (PDFParser_console.warn(
                              'Removing parsed object: 0 0 R'
                            ),
                            this.context.delete(objects_PDFRef.of(0))),
                          [2, this.context]
                        )
                    }
                  })
                })
              }),
              (PDFParser.prototype.maybeRecoverRoot = function () {
                var isValidCatalog = function (obj) {
                  return (
                    obj instanceof objects_PDFDict &&
                    obj.lookup(objects_PDFName.of('Type')) ===
                      objects_PDFName.of('Catalog')
                  )
                }
                if (
                  !isValidCatalog(
                    this.context.lookup(this.context.trailerInfo.Root)
                  )
                )
                  for (
                    var indirectObjects =
                        this.context.enumerateIndirectObjects(),
                      idx = 0,
                      len = indirectObjects.length;
                    idx < len;
                    idx++
                  ) {
                    var _a = indirectObjects[idx],
                      ref = _a[0]
                    isValidCatalog(_a[1]) &&
                      (this.context.trailerInfo.Root = ref)
                  }
              }),
              (PDFParser.prototype.parseHeader = function () {
                for (; !this.bytes.done(); ) {
                  if (this.matchKeyword(Keywords.header)) {
                    var major = this.parseRawInt()
                    this.bytes.assertNext(syntax_CharCodes.Period)
                    var minor = this.parseRawInt(),
                      header = document_PDFHeader.forVersion(major, minor)
                    return (this.skipBinaryHeaderComment(), header)
                  }
                  this.bytes.next()
                }
                throw new MissingPDFHeaderError(this.bytes.position())
              }),
              (PDFParser.prototype.parseIndirectObjectHeader = function () {
                this.skipWhitespaceAndComments()
                var objectNumber = this.parseRawInt()
                this.skipWhitespaceAndComments()
                var generationNumber = this.parseRawInt()
                if (
                  (this.skipWhitespaceAndComments(),
                  !this.matchKeyword(Keywords.obj))
                )
                  throw new MissingKeywordError(
                    this.bytes.position(),
                    Keywords.obj
                  )
                return objects_PDFRef.of(objectNumber, generationNumber)
              }),
              (PDFParser.prototype.matchIndirectObjectHeader = function () {
                var initialOffset = this.bytes.offset()
                try {
                  return (this.parseIndirectObjectHeader(), !0)
                } catch (e) {
                  return (this.bytes.moveTo(initialOffset), !1)
                }
              }),
              (PDFParser.prototype.parseIndirectObject = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var ref, object
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          (ref = this.parseIndirectObjectHeader()),
                          this.skipWhitespaceAndComments(),
                          (object = this.parseObject()),
                          this.skipWhitespaceAndComments(),
                          this.matchKeyword(Keywords.endobj),
                          object instanceof objects_PDFRawStream &&
                          object.dict.lookup(objects_PDFName.of('Type')) ===
                            objects_PDFName.of('ObjStm')
                            ? [
                                4,
                                parser_PDFObjectStreamParser
                                  .forStream(object, this.shouldWaitForTick)
                                  .parseIntoContext(),
                              ]
                            : [3, 2]
                        )
                      case 1:
                        return (_a.sent(), [3, 3])
                      case 2:
                        ;(object instanceof objects_PDFRawStream &&
                        object.dict.lookup(objects_PDFName.of('Type')) ===
                          objects_PDFName.of('XRef')
                          ? parser_PDFXRefStreamParser
                              .forStream(object)
                              .parseIntoContext()
                          : this.context.assign(ref, object),
                          (_a.label = 3))
                      case 3:
                        return [2, ref]
                    }
                  })
                })
              }),
              (PDFParser.prototype.tryToParseInvalidIndirectObject =
                function () {
                  var startPos = this.bytes.position(),
                    msg =
                      'Trying to parse invalid object: ' +
                      JSON.stringify(startPos) +
                      ')'
                  if (this.throwOnInvalidObject) throw new Error(msg)
                  PDFParser_console.warn(msg)
                  var ref = this.parseIndirectObjectHeader()
                  ;(PDFParser_console.warn('Invalid object ref: ' + ref),
                    this.skipWhitespaceAndComments())
                  for (
                    var start = this.bytes.offset(), failed = !0;
                    !this.bytes.done() &&
                    (this.matchKeyword(Keywords.endobj) && (failed = !1),
                    failed);

                  )
                    this.bytes.next()
                  if (failed) throw new PDFInvalidObjectParsingError(startPos)
                  var end = this.bytes.offset() - Keywords.endobj.length,
                    object = objects_PDFInvalidObject.of(
                      this.bytes.slice(start, end)
                    )
                  return (this.context.assign(ref, object), ref)
                }),
              (PDFParser.prototype.parseIndirectObjects = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var initialOffset
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        ;(this.skipWhitespaceAndComments(), (_a.label = 1))
                      case 1:
                        if (this.bytes.done() || !IsDigit[this.bytes.peek()])
                          return [3, 8]
                        ;((initialOffset = this.bytes.offset()), (_a.label = 2))
                      case 2:
                        return (
                          _a.trys.push([2, 4, , 5]),
                          [4, this.parseIndirectObject()]
                        )
                      case 3:
                        return (_a.sent(), [3, 5])
                      case 4:
                        return (
                          _a.sent(),
                          this.bytes.moveTo(initialOffset),
                          this.tryToParseInvalidIndirectObject(),
                          [3, 5]
                        )
                      case 5:
                        return (
                          this.skipWhitespaceAndComments(),
                          this.skipJibberish(),
                          this.shouldWaitForTick() ? [4, waitForTick()] : [3, 7]
                        )
                      case 6:
                        ;(_a.sent(), (_a.label = 7))
                      case 7:
                        return [3, 1]
                      case 8:
                        return [2]
                    }
                  })
                })
              }),
              (PDFParser.prototype.maybeParseCrossRefSection = function () {
                if (
                  (this.skipWhitespaceAndComments(),
                  this.matchKeyword(Keywords.xref))
                ) {
                  this.skipWhitespaceAndComments()
                  for (
                    var objectNumber = -1,
                      xref = document_PDFCrossRefSection.createEmpty();
                    !this.bytes.done() && IsDigit[this.bytes.peek()];

                  ) {
                    var firstInt = this.parseRawInt()
                    this.skipWhitespaceAndComments()
                    var secondInt = this.parseRawInt()
                    this.skipWhitespaceAndComments()
                    var byte = this.bytes.peek()
                    if (
                      byte === syntax_CharCodes.n ||
                      byte === syntax_CharCodes.f
                    ) {
                      var ref = objects_PDFRef.of(objectNumber, secondInt)
                      ;(this.bytes.next() === syntax_CharCodes.n
                        ? xref.addEntry(ref, firstInt)
                        : xref.addDeletedEntry(ref, firstInt),
                        (objectNumber += 1))
                    } else objectNumber = firstInt
                    this.skipWhitespaceAndComments()
                  }
                  return xref
                }
              }),
              (PDFParser.prototype.maybeParseTrailerDict = function () {
                if (
                  (this.skipWhitespaceAndComments(),
                  this.matchKeyword(Keywords.trailer))
                ) {
                  this.skipWhitespaceAndComments()
                  var dict = this.parseDict(),
                    context = this.context
                  context.trailerInfo = {
                    Root:
                      dict.get(objects_PDFName.of('Root')) ||
                      context.trailerInfo.Root,
                    Encrypt:
                      dict.get(objects_PDFName.of('Encrypt')) ||
                      context.trailerInfo.Encrypt,
                    Info:
                      dict.get(objects_PDFName.of('Info')) ||
                      context.trailerInfo.Info,
                    ID:
                      dict.get(objects_PDFName.of('ID')) ||
                      context.trailerInfo.ID,
                  }
                }
              }),
              (PDFParser.prototype.maybeParseTrailer = function () {
                if (
                  (this.skipWhitespaceAndComments(),
                  this.matchKeyword(Keywords.startxref))
                ) {
                  this.skipWhitespaceAndComments()
                  var offset = this.parseRawInt()
                  return (
                    this.skipWhitespace(),
                    this.matchKeyword(Keywords.eof),
                    this.skipWhitespaceAndComments(),
                    this.matchKeyword(Keywords.eof),
                    this.skipWhitespaceAndComments(),
                    document_PDFTrailer.forLastCrossRefSectionOffset(offset)
                  )
                }
              }),
              (PDFParser.prototype.parseDocumentSection = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.parseIndirectObjects()]
                      case 1:
                        return (
                          _a.sent(),
                          this.maybeParseCrossRefSection(),
                          this.maybeParseTrailerDict(),
                          this.maybeParseTrailer(),
                          this.skipJibberish(),
                          [2]
                        )
                    }
                  })
                })
              }),
              (PDFParser.prototype.skipJibberish = function () {
                for (this.skipWhitespaceAndComments(); !this.bytes.done(); ) {
                  var initialOffset = this.bytes.offset(),
                    byte = this.bytes.peek()
                  if (
                    byte >= syntax_CharCodes.Space &&
                    byte <= syntax_CharCodes.Tilde &&
                    (this.matchKeyword(Keywords.xref) ||
                      this.matchKeyword(Keywords.trailer) ||
                      this.matchKeyword(Keywords.startxref) ||
                      this.matchIndirectObjectHeader())
                  ) {
                    this.bytes.moveTo(initialOffset)
                    break
                  }
                  this.bytes.next()
                }
              }),
              (PDFParser.prototype.skipBinaryHeaderComment = function () {
                this.skipWhitespaceAndComments()
                try {
                  var initialOffset = this.bytes.offset()
                  ;(this.parseIndirectObjectHeader(),
                    this.bytes.moveTo(initialOffset))
                } catch (e) {
                  ;(this.bytes.next(), this.skipWhitespaceAndComments())
                }
              }),
              (PDFParser.forBytesWithOptions = function (
                pdfBytes,
                objectsPerTick,
                throwOnInvalidObject,
                capNumbers
              ) {
                return new PDFParser(
                  pdfBytes,
                  objectsPerTick,
                  throwOnInvalidObject,
                  capNumbers
                )
              }),
              PDFParser
            )
          })(parser_PDFObjectParser)
        const parser_PDFParser = PDFParser
        var AnnotationFlags,
          flags_flag = function (bitIndex) {
            return 1 << bitIndex
          }
        !(function (AnnotationFlags) {
          ;((AnnotationFlags[(AnnotationFlags.Invisible = flags_flag(0))] =
            'Invisible'),
            (AnnotationFlags[(AnnotationFlags.Hidden = flags_flag(1))] =
              'Hidden'),
            (AnnotationFlags[(AnnotationFlags.Print = flags_flag(2))] =
              'Print'),
            (AnnotationFlags[(AnnotationFlags.NoZoom = flags_flag(3))] =
              'NoZoom'),
            (AnnotationFlags[(AnnotationFlags.NoRotate = flags_flag(4))] =
              'NoRotate'),
            (AnnotationFlags[(AnnotationFlags.NoView = flags_flag(5))] =
              'NoView'),
            (AnnotationFlags[(AnnotationFlags.ReadOnly = flags_flag(6))] =
              'ReadOnly'),
            (AnnotationFlags[(AnnotationFlags.Locked = flags_flag(7))] =
              'Locked'),
            (AnnotationFlags[(AnnotationFlags.ToggleNoView = flags_flag(8))] =
              'ToggleNoView'),
            (AnnotationFlags[(AnnotationFlags.LockedContents = flags_flag(9))] =
              'LockedContents'))
        })(AnnotationFlags || (AnnotationFlags = {}))
        var RotationTypes,
          asPDFName = function (name) {
            return name instanceof objects_PDFName
              ? name
              : objects_PDFName.of(name)
          },
          objects_asPDFNumber = function (num) {
            return num instanceof objects_PDFNumber
              ? num
              : objects_PDFNumber.of(num)
          },
          objects_asNumber = function (num) {
            return num instanceof objects_PDFNumber ? num.asNumber() : num
          }
        !(function (RotationTypes) {
          ;((RotationTypes.Degrees = 'degrees'),
            (RotationTypes.Radians = 'radians'))
        })(RotationTypes || (RotationTypes = {}))
        var LineCapStyle,
          degrees = function (degreeAngle) {
            return (
              validators_assertIs(degreeAngle, 'degreeAngle', ['number']),
              { type: RotationTypes.Degrees, angle: degreeAngle }
            )
          },
          Radians = RotationTypes.Radians,
          Degrees = RotationTypes.Degrees,
          rotations_degreesToRadians = function (degree) {
            return (degree * Math.PI) / 180
          },
          rotations_toRadians = function (rotation) {
            return rotation.type === Radians
              ? rotation.angle
              : rotation.type === Degrees
                ? rotations_degreesToRadians(rotation.angle)
                : error('Invalid rotation: ' + JSON.stringify(rotation))
          },
          toDegrees = function (rotation) {
            return rotation.type === Radians
              ? (180 * rotation.angle) / Math.PI
              : rotation.type === Degrees
                ? rotation.angle
                : error('Invalid rotation: ' + JSON.stringify(rotation))
          },
          reduceRotation = function (degreeAngle) {
            void 0 === degreeAngle && (degreeAngle = 0)
            var quadrants = (degreeAngle / 90) % 4
            return 0 === quadrants
              ? 0
              : 1 === quadrants
                ? 90
                : 2 === quadrants
                  ? 180
                  : 3 === quadrants
                    ? 270
                    : 0
          },
          adjustDimsForRotation = function (dims, degreeAngle) {
            void 0 === degreeAngle && (degreeAngle = 0)
            var rotation = reduceRotation(degreeAngle)
            return 90 === rotation || 270 === rotation
              ? { width: dims.height, height: dims.width }
              : { width: dims.width, height: dims.height }
          },
          clip = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.ClipNonZero
            )
          },
          cos = Math.cos,
          sin = Math.sin,
          tan = Math.tan,
          concatTransformationMatrix = function (a, b, c, d, e, f) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.ConcatTransformationMatrix,
              [
                objects_asPDFNumber(a),
                objects_asPDFNumber(b),
                objects_asPDFNumber(c),
                objects_asPDFNumber(d),
                objects_asPDFNumber(e),
                objects_asPDFNumber(f),
              ]
            )
          },
          translate = function (xPos, yPos) {
            return concatTransformationMatrix(1, 0, 0, 1, xPos, yPos)
          },
          scale = function (xPos, yPos) {
            return concatTransformationMatrix(xPos, 0, 0, yPos, 0, 0)
          },
          rotateRadians = function (angle) {
            return concatTransformationMatrix(
              cos(objects_asNumber(angle)),
              sin(objects_asNumber(angle)),
              -sin(objects_asNumber(angle)),
              cos(objects_asNumber(angle)),
              0,
              0
            )
          },
          rotateDegrees = function (angle) {
            return rotateRadians(
              rotations_degreesToRadians(objects_asNumber(angle))
            )
          },
          skewRadians = function (xSkewAngle, ySkewAngle) {
            return concatTransformationMatrix(
              1,
              tan(objects_asNumber(xSkewAngle)),
              tan(objects_asNumber(ySkewAngle)),
              1,
              0,
              0
            )
          },
          setDashPattern = function (dashArray, dashPhase) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.SetLineDashPattern,
              [
                '[' + dashArray.map(objects_asPDFNumber).join(' ') + ']',
                objects_asPDFNumber(dashPhase),
              ]
            )
          }
        !(function (LineCapStyle) {
          ;((LineCapStyle[(LineCapStyle.Butt = 0)] = 'Butt'),
            (LineCapStyle[(LineCapStyle.Round = 1)] = 'Round'),
            (LineCapStyle[(LineCapStyle.Projecting = 2)] = 'Projecting'))
        })(LineCapStyle || (LineCapStyle = {}))
        var LineJoinStyle,
          setLineCap = function (style) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.SetLineCapStyle,
              [objects_asPDFNumber(style)]
            )
          }
        !(function (LineJoinStyle) {
          ;((LineJoinStyle[(LineJoinStyle.Miter = 0)] = 'Miter'),
            (LineJoinStyle[(LineJoinStyle.Round = 1)] = 'Round'),
            (LineJoinStyle[(LineJoinStyle.Bevel = 2)] = 'Bevel'))
        })(LineJoinStyle || (LineJoinStyle = {}))
        var TextRenderingMode,
          operators_setGraphicsState = function (state) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.SetGraphicsStateParams,
              [asPDFName(state)]
            )
          },
          operators_pushGraphicsState = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.PushGraphicsState
            )
          },
          operators_popGraphicsState = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.PopGraphicsState
            )
          },
          setLineWidth = function (width) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.SetLineWidth,
              [objects_asPDFNumber(width)]
            )
          },
          appendBezierCurve = function (x1, y1, x2, y2, x3, y3) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.AppendBezierCurve,
              [
                objects_asPDFNumber(x1),
                objects_asPDFNumber(y1),
                objects_asPDFNumber(x2),
                objects_asPDFNumber(y2),
                objects_asPDFNumber(x3),
                objects_asPDFNumber(y3),
              ]
            )
          },
          appendQuadraticCurve = function (x1, y1, x2, y2) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.CurveToReplicateInitialPoint,
              [
                objects_asPDFNumber(x1),
                objects_asPDFNumber(y1),
                objects_asPDFNumber(x2),
                objects_asPDFNumber(y2),
              ]
            )
          },
          closePath = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.ClosePath
            )
          },
          moveTo = function (xPos, yPos) {
            return operators_PDFOperator.of(operators_PDFOperatorNames.MoveTo, [
              objects_asPDFNumber(xPos),
              objects_asPDFNumber(yPos),
            ])
          },
          lineTo = function (xPos, yPos) {
            return operators_PDFOperator.of(operators_PDFOperatorNames.LineTo, [
              objects_asPDFNumber(xPos),
              objects_asPDFNumber(yPos),
            ])
          },
          stroke = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.StrokePath
            )
          },
          fill = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.FillNonZero
            )
          },
          fillAndStroke = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.FillNonZeroAndStroke
            )
          },
          endPath = function () {
            return operators_PDFOperator.of(operators_PDFOperatorNames.EndPath)
          },
          nextLine = function () {
            return operators_PDFOperator.of(operators_PDFOperatorNames.NextLine)
          },
          operators_showText = function (text) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.ShowText,
              [text]
            )
          },
          operators_beginText = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.BeginText
            )
          },
          operators_endText = function () {
            return operators_PDFOperator.of(operators_PDFOperatorNames.EndText)
          },
          operators_setFontAndSize = function (name, size) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.SetFontAndSize,
              [asPDFName(name), objects_asPDFNumber(size)]
            )
          }
        !(function (TextRenderingMode) {
          ;((TextRenderingMode[(TextRenderingMode.Fill = 0)] = 'Fill'),
            (TextRenderingMode[(TextRenderingMode.Outline = 1)] = 'Outline'),
            (TextRenderingMode[(TextRenderingMode.FillAndOutline = 2)] =
              'FillAndOutline'),
            (TextRenderingMode[(TextRenderingMode.Invisible = 3)] =
              'Invisible'),
            (TextRenderingMode[(TextRenderingMode.FillAndClip = 4)] =
              'FillAndClip'),
            (TextRenderingMode[(TextRenderingMode.OutlineAndClip = 5)] =
              'OutlineAndClip'),
            (TextRenderingMode[(TextRenderingMode.FillAndOutlineAndClip = 6)] =
              'FillAndOutlineAndClip'),
            (TextRenderingMode[(TextRenderingMode.Clip = 7)] = 'Clip'))
        })(TextRenderingMode || (TextRenderingMode = {}))
        var ColorTypes,
          operators_rotateAndSkewTextRadiansAndTranslate = function (
            rotationAngle,
            xSkewAngle,
            ySkewAngle,
            x,
            y
          ) {
            return (
              (a = cos(objects_asNumber(rotationAngle))),
              (b =
                sin(objects_asNumber(rotationAngle)) +
                tan(objects_asNumber(xSkewAngle))),
              (c =
                -sin(objects_asNumber(rotationAngle)) +
                tan(objects_asNumber(ySkewAngle))),
              (d = cos(objects_asNumber(rotationAngle))),
              (e = x),
              (f = y),
              operators_PDFOperator.of(
                operators_PDFOperatorNames.SetTextMatrix,
                [
                  objects_asPDFNumber(a),
                  objects_asPDFNumber(b),
                  objects_asPDFNumber(c),
                  objects_asPDFNumber(d),
                  objects_asPDFNumber(e),
                  objects_asPDFNumber(f),
                ]
              )
            )
            var a, b, c, d, e, f
          },
          drawObject = function (name) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.DrawObject,
              [asPDFName(name)]
            )
          },
          beginMarkedContent = function (tag) {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.BeginMarkedContent,
              [asPDFName(tag)]
            )
          },
          endMarkedContent = function () {
            return operators_PDFOperator.of(
              operators_PDFOperatorNames.EndMarkedContent
            )
          }
        !(function (ColorTypes) {
          ;((ColorTypes.Grayscale = 'Grayscale'),
            (ColorTypes.RGB = 'RGB'),
            (ColorTypes.CMYK = 'CMYK'))
        })(ColorTypes || (ColorTypes = {}))
        var TextAlignment,
          grayscale = function (gray) {
            return (
              assertRange(gray, 'gray', 0, 1),
              { type: ColorTypes.Grayscale, gray }
            )
          },
          rgb = function (red, green, blue) {
            return (
              assertRange(red, 'red', 0, 1),
              assertRange(green, 'green', 0, 1),
              assertRange(blue, 'blue', 0, 1),
              { type: ColorTypes.RGB, red, green, blue }
            )
          },
          cmyk = function (cyan, magenta, yellow, key) {
            return (
              assertRange(cyan, 'cyan', 0, 1),
              assertRange(magenta, 'magenta', 0, 1),
              assertRange(yellow, 'yellow', 0, 1),
              assertRange(key, 'key', 0, 1),
              { type: ColorTypes.CMYK, cyan, magenta, yellow, key }
            )
          },
          Grayscale = ColorTypes.Grayscale,
          RGB = ColorTypes.RGB,
          CMYK = ColorTypes.CMYK,
          colors_setFillingColor = function (color) {
            return color.type === Grayscale
              ? ((gray = color.gray),
                operators_PDFOperator.of(
                  operators_PDFOperatorNames.NonStrokingColorGray,
                  [objects_asPDFNumber(gray)]
                ))
              : color.type === RGB
                ? ((red = color.red),
                  (green = color.green),
                  (blue = color.blue),
                  operators_PDFOperator.of(
                    operators_PDFOperatorNames.NonStrokingColorRgb,
                    [
                      objects_asPDFNumber(red),
                      objects_asPDFNumber(green),
                      objects_asPDFNumber(blue),
                    ]
                  ))
                : color.type === CMYK
                  ? ((cyan = color.cyan),
                    (magenta = color.magenta),
                    (yellow = color.yellow),
                    (key = color.key),
                    operators_PDFOperator.of(
                      operators_PDFOperatorNames.NonStrokingColorCmyk,
                      [
                        objects_asPDFNumber(cyan),
                        objects_asPDFNumber(magenta),
                        objects_asPDFNumber(yellow),
                        objects_asPDFNumber(key),
                      ]
                    ))
                  : error('Invalid color: ' + JSON.stringify(color))
            var cyan, magenta, yellow, key, red, green, blue, gray
          },
          setStrokingColor = function (color) {
            return color.type === Grayscale
              ? ((gray = color.gray),
                operators_PDFOperator.of(
                  operators_PDFOperatorNames.StrokingColorGray,
                  [objects_asPDFNumber(gray)]
                ))
              : color.type === RGB
                ? ((red = color.red),
                  (green = color.green),
                  (blue = color.blue),
                  operators_PDFOperator.of(
                    operators_PDFOperatorNames.StrokingColorRgb,
                    [
                      objects_asPDFNumber(red),
                      objects_asPDFNumber(green),
                      objects_asPDFNumber(blue),
                    ]
                  ))
                : color.type === CMYK
                  ? ((cyan = color.cyan),
                    (magenta = color.magenta),
                    (yellow = color.yellow),
                    (key = color.key),
                    operators_PDFOperator.of(
                      operators_PDFOperatorNames.StrokingColorCmyk,
                      [
                        objects_asPDFNumber(cyan),
                        objects_asPDFNumber(magenta),
                        objects_asPDFNumber(yellow),
                        objects_asPDFNumber(key),
                      ]
                    ))
                  : error('Invalid color: ' + JSON.stringify(color))
            var cyan, magenta, yellow, key, red, green, blue, gray
          },
          componentsToColor = function (comps, scale) {
            return (
              void 0 === scale && (scale = 1),
              1 === (null == comps ? void 0 : comps.length)
                ? grayscale(comps[0] * scale)
                : 3 === (null == comps ? void 0 : comps.length)
                  ? rgb(comps[0] * scale, comps[1] * scale, comps[2] * scale)
                  : 4 === (null == comps ? void 0 : comps.length)
                    ? cmyk(
                        comps[0] * scale,
                        comps[1] * scale,
                        comps[2] * scale,
                        comps[3] * scale
                      )
                    : void 0
            )
          },
          colorToComponents = function (color) {
            return color.type === Grayscale
              ? [color.gray]
              : color.type === RGB
                ? [color.red, color.green, color.blue]
                : color.type === CMYK
                  ? [color.cyan, color.magenta, color.yellow, color.key]
                  : error('Invalid color: ' + JSON.stringify(color))
          },
          cx = 0,
          cy = 0,
          px = 0,
          py = 0,
          sx = 0,
          sy = 0,
          parameters = new Map([
            ['A', 7],
            ['a', 7],
            ['C', 6],
            ['c', 6],
            ['H', 1],
            ['h', 1],
            ['L', 2],
            ['l', 2],
            ['M', 2],
            ['m', 2],
            ['Q', 4],
            ['q', 4],
            ['S', 4],
            ['s', 4],
            ['T', 2],
            ['t', 2],
            ['V', 1],
            ['v', 1],
            ['Z', 0],
            ['z', 0],
          ]),
          runners = {
            M: function (a) {
              return (
                (cx = a[0]),
                (cy = a[1]),
                (px = py = null),
                (sx = cx),
                (sy = cy),
                moveTo(cx, cy)
              )
            },
            m: function (a) {
              return (
                (cx += a[0]),
                (cy += a[1]),
                (px = py = null),
                (sx = cx),
                (sy = cy),
                moveTo(cx, cy)
              )
            },
            C: function (a) {
              return (
                (cx = a[4]),
                (cy = a[5]),
                (px = a[2]),
                (py = a[3]),
                appendBezierCurve(a[0], a[1], a[2], a[3], a[4], a[5])
              )
            },
            c: function (a) {
              var cmd = appendBezierCurve(
                a[0] + cx,
                a[1] + cy,
                a[2] + cx,
                a[3] + cy,
                a[4] + cx,
                a[5] + cy
              )
              return (
                (px = cx + a[2]),
                (py = cy + a[3]),
                (cx += a[4]),
                (cy += a[5]),
                cmd
              )
            },
            S: function (a) {
              ;(null !== px && null !== py) || ((px = cx), (py = cy))
              var cmd = appendBezierCurve(
                cx - (px - cx),
                cy - (py - cy),
                a[0],
                a[1],
                a[2],
                a[3]
              )
              return ((px = a[0]), (py = a[1]), (cx = a[2]), (cy = a[3]), cmd)
            },
            s: function (a) {
              ;(null !== px && null !== py) || ((px = cx), (py = cy))
              var cmd = appendBezierCurve(
                cx - (px - cx),
                cy - (py - cy),
                cx + a[0],
                cy + a[1],
                cx + a[2],
                cy + a[3]
              )
              return (
                (px = cx + a[0]),
                (py = cy + a[1]),
                (cx += a[2]),
                (cy += a[3]),
                cmd
              )
            },
            Q: function (a) {
              return (
                (px = a[0]),
                (py = a[1]),
                (cx = a[2]),
                (cy = a[3]),
                appendQuadraticCurve(a[0], a[1], cx, cy)
              )
            },
            q: function (a) {
              var cmd = appendQuadraticCurve(
                a[0] + cx,
                a[1] + cy,
                a[2] + cx,
                a[3] + cy
              )
              return (
                (px = cx + a[0]),
                (py = cy + a[1]),
                (cx += a[2]),
                (cy += a[3]),
                cmd
              )
            },
            T: function (a) {
              null === px || null === py
                ? ((px = cx), (py = cy))
                : ((px = cx - (px - cx)), (py = cy - (py - cy)))
              var cmd = appendQuadraticCurve(px, py, a[0], a[1])
              return (
                (px = cx - (px - cx)),
                (py = cy - (py - cy)),
                (cx = a[0]),
                (cy = a[1]),
                cmd
              )
            },
            t: function (a) {
              null === px || null === py
                ? ((px = cx), (py = cy))
                : ((px = cx - (px - cx)), (py = cy - (py - cy)))
              var cmd = appendQuadraticCurve(px, py, cx + a[0], cy + a[1])
              return ((cx += a[0]), (cy += a[1]), cmd)
            },
            A: function (a) {
              var cmds = solveArc(cx, cy, a)
              return ((cx = a[5]), (cy = a[6]), cmds)
            },
            a: function (a) {
              ;((a[5] += cx), (a[6] += cy))
              var cmds = solveArc(cx, cy, a)
              return ((cx = a[5]), (cy = a[6]), cmds)
            },
            L: function (a) {
              return (
                (cx = a[0]),
                (cy = a[1]),
                (px = py = null),
                lineTo(cx, cy)
              )
            },
            l: function (a) {
              return (
                (cx += a[0]),
                (cy += a[1]),
                (px = py = null),
                lineTo(cx, cy)
              )
            },
            H: function (a) {
              return ((cx = a[0]), (px = py = null), lineTo(cx, cy))
            },
            h: function (a) {
              return ((cx += a[0]), (px = py = null), lineTo(cx, cy))
            },
            V: function (a) {
              return ((cy = a[0]), (px = py = null), lineTo(cx, cy))
            },
            v: function (a) {
              return ((cy += a[0]), (px = py = null), lineTo(cx, cy))
            },
            Z: function () {
              var cmd = closePath()
              return ((cx = sx), (cy = sy), cmd)
            },
            z: function () {
              var cmd = closePath()
              return ((cx = sx), (cy = sy), cmd)
            },
          },
          solveArc = function (x, y, coords) {
            for (
              var rx = coords[0],
                ry = coords[1],
                rot = coords[2],
                large = coords[3],
                sweep = coords[4],
                ex = coords[5],
                ey = coords[6],
                cmds = [],
                _i = 0,
                segs_1 = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
              _i < segs_1.length;
              _i++
            ) {
              var seg = segs_1[_i],
                bez = segmentToBezier.apply(void 0, seg)
              cmds.push(appendBezierCurve.apply(void 0, bez))
            }
            return cmds
          },
          arcToSegments = function (
            x,
            y,
            rx,
            ry,
            large,
            sweep,
            rotateX,
            ox,
            oy
          ) {
            var th = rotateX * (Math.PI / 180),
              sinTh = Math.sin(th),
              cosTh = Math.cos(th)
            ;((rx = Math.abs(rx)), (ry = Math.abs(ry)))
            var pl =
              ((px = cosTh * (ox - x) * 0.5 + sinTh * (oy - y) * 0.5) * px) /
                (rx * rx) +
              ((py = cosTh * (oy - y) * 0.5 - sinTh * (ox - x) * 0.5) * py) /
                (ry * ry)
            pl > 1 && ((rx *= pl = Math.sqrt(pl)), (ry *= pl))
            var a00 = cosTh / rx,
              a01 = sinTh / rx,
              a10 = -sinTh / ry,
              a11 = cosTh / ry,
              x0 = a00 * ox + a01 * oy,
              y0 = a10 * ox + a11 * oy,
              x1 = a00 * x + a01 * y,
              y1 = a10 * x + a11 * y,
              sfactorSq =
                1 / ((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)) - 0.25
            sfactorSq < 0 && (sfactorSq = 0)
            var sfactor = Math.sqrt(sfactorSq)
            sweep === large && (sfactor = -sfactor)
            var xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0),
              yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0),
              th0 = Math.atan2(y0 - yc, x0 - xc),
              thArc = Math.atan2(y1 - yc, x1 - xc) - th0
            thArc < 0 && 1 === sweep
              ? (thArc += 2 * Math.PI)
              : thArc > 0 && 0 === sweep && (thArc -= 2 * Math.PI)
            for (
              var segments = Math.ceil(
                  Math.abs(thArc / (0.5 * Math.PI + 0.001))
                ),
                result = [],
                i = 0;
              i < segments;
              i++
            ) {
              var th2 = th0 + (i * thArc) / segments,
                th3 = th0 + ((i + 1) * thArc) / segments
              result[i] = [xc, yc, th2, th3, rx, ry, sinTh, cosTh]
            }
            return result
          },
          segmentToBezier = function (
            cx1,
            cy1,
            th0,
            th1,
            rx,
            ry,
            sinTh,
            cosTh
          ) {
            var a00 = cosTh * rx,
              a01 = -sinTh * ry,
              a10 = sinTh * rx,
              a11 = cosTh * ry,
              thHalf = 0.5 * (th1 - th0),
              t =
                ((8 / 3) * Math.sin(0.5 * thHalf) * Math.sin(0.5 * thHalf)) /
                Math.sin(thHalf),
              x1 = cx1 + Math.cos(th0) - t * Math.sin(th0),
              y1 = cy1 + Math.sin(th0) + t * Math.cos(th0),
              x3 = cx1 + Math.cos(th1),
              y3 = cy1 + Math.sin(th1),
              x2 = x3 + t * Math.sin(th1),
              y2 = y3 - t * Math.cos(th1)
            return [
              a00 * x1 + a01 * y1,
              a10 * x1 + a11 * y1,
              a00 * x2 + a01 * y2,
              a10 * x2 + a11 * y2,
              a00 * x3 + a01 * y3,
              a10 * x3 + a11 * y3,
            ]
          },
          svgPathToOperators = function (path) {
            return (function (commands) {
              cx = cy = px = py = sx = sy = 0
              for (var cmds = [], i = 0; i < commands.length; i++) {
                var c = commands[i]
                if (c.cmd && 'function' == typeof runners[c.cmd]) {
                  var cmd = runners[c.cmd](c.args)
                  Array.isArray(cmd)
                    ? (cmds = cmds.concat(cmd))
                    : cmds.push(cmd)
                }
              }
              return cmds
            })(
              (function (path) {
                for (
                  var cmd,
                    ret = [],
                    args = [],
                    curArg = '',
                    foundDecimal = !1,
                    params = 0,
                    _i = 0,
                    path_1 = path;
                  _i < path_1.length;
                  _i++
                ) {
                  var c = path_1[_i]
                  if (parameters.has(c))
                    ((params = parameters.get(c)),
                      cmd &&
                        (curArg.length > 0 && (args[args.length] = +curArg),
                        (ret[ret.length] = { cmd, args }),
                        (args = []),
                        (curArg = ''),
                        (foundDecimal = !1)),
                      (cmd = c))
                  else if (
                    [' ', ','].includes(c) ||
                    ('-' === c &&
                      curArg.length > 0 &&
                      'e' !== curArg[curArg.length - 1]) ||
                    ('.' === c && foundDecimal)
                  ) {
                    if (0 === curArg.length) continue
                    ;(args.length === params
                      ? ((ret[ret.length] = { cmd, args }),
                        (args = [+curArg]),
                        'M' === cmd && (cmd = 'L'),
                        'm' === cmd && (cmd = 'l'))
                      : (args[args.length] = +curArg),
                      (foundDecimal = '.' === c),
                      (curArg = ['-', '.'].includes(c) ? c : ''))
                  } else ((curArg += c), '.' === c && (foundDecimal = !0))
                }
                return (
                  curArg.length > 0 &&
                    (args.length === params
                      ? ((ret[ret.length] = { cmd, args }),
                        (args = [+curArg]),
                        'M' === cmd && (cmd = 'L'),
                        'm' === cmd && (cmd = 'l'))
                      : (args[args.length] = +curArg)),
                  (ret[ret.length] = { cmd, args }),
                  ret
                )
              })(path)
            )
          },
          drawImage = function (name, options) {
            return [
              operators_pushGraphicsState(),
              options.graphicsState &&
                operators_setGraphicsState(options.graphicsState),
              translate(options.x, options.y),
              rotateRadians(rotations_toRadians(options.rotate)),
              scale(options.width, options.height),
              skewRadians(
                rotations_toRadians(options.xSkew),
                rotations_toRadians(options.ySkew)
              ),
              drawObject(name),
              operators_popGraphicsState(),
            ].filter(Boolean)
          },
          drawRectangle = function (options) {
            var _a, _b
            return [
              operators_pushGraphicsState(),
              options.graphicsState &&
                operators_setGraphicsState(options.graphicsState),
              options.color && colors_setFillingColor(options.color),
              options.borderColor && setStrokingColor(options.borderColor),
              setLineWidth(options.borderWidth),
              options.borderLineCap && setLineCap(options.borderLineCap),
              setDashPattern(
                null !== (_a = options.borderDashArray) && void 0 !== _a
                  ? _a
                  : [],
                null !== (_b = options.borderDashPhase) && void 0 !== _b
                  ? _b
                  : 0
              ),
              translate(options.x, options.y),
              rotateRadians(rotations_toRadians(options.rotate)),
              skewRadians(
                rotations_toRadians(options.xSkew),
                rotations_toRadians(options.ySkew)
              ),
              moveTo(0, 0),
              lineTo(0, options.height),
              lineTo(options.width, options.height),
              lineTo(options.width, 0),
              closePath(),
              options.color && options.borderWidth
                ? fillAndStroke()
                : options.color
                  ? fill()
                  : options.borderColor
                    ? stroke()
                    : closePath(),
              operators_popGraphicsState(),
            ].filter(Boolean)
          },
          KAPPA = ((Math.sqrt(2) - 1) / 3) * 4,
          drawEllipse = function (options) {
            var _a, _b, _c, config, x, y, xScale, yScale, ox, oy, xe, ye, xm, ym
            return __spreadArrays(
              [
                operators_pushGraphicsState(),
                options.graphicsState &&
                  operators_setGraphicsState(options.graphicsState),
                options.color && colors_setFillingColor(options.color),
                options.borderColor && setStrokingColor(options.borderColor),
                setLineWidth(options.borderWidth),
                options.borderLineCap && setLineCap(options.borderLineCap),
                setDashPattern(
                  null !== (_a = options.borderDashArray) && void 0 !== _a
                    ? _a
                    : [],
                  null !== (_b = options.borderDashPhase) && void 0 !== _b
                    ? _b
                    : 0
                ),
              ],
              void 0 === options.rotate
                ? ((config = {
                    x: options.x,
                    y: options.y,
                    xScale: options.xScale,
                    yScale: options.yScale,
                  }),
                  (x = objects_asNumber(config.x)),
                  (y = objects_asNumber(config.y)),
                  (xScale = objects_asNumber(config.xScale)),
                  (yScale = objects_asNumber(config.yScale)),
                  (ox = xScale * KAPPA),
                  (oy = yScale * KAPPA),
                  (xe = (x -= xScale) + 2 * xScale),
                  (ye = (y -= yScale) + 2 * yScale),
                  (xm = x + xScale),
                  (ym = y + yScale),
                  [
                    operators_pushGraphicsState(),
                    moveTo(x, ym),
                    appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
                    appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
                    appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
                    appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym),
                    operators_popGraphicsState(),
                  ])
                : (function (config) {
                    var centerX = objects_asNumber(config.x),
                      centerY = objects_asNumber(config.y),
                      xScale = objects_asNumber(config.xScale),
                      yScale = objects_asNumber(config.yScale),
                      x = -xScale,
                      y = -yScale,
                      ox = xScale * KAPPA,
                      oy = yScale * KAPPA,
                      xe = x + 2 * xScale,
                      ye = y + 2 * yScale,
                      xm = x + xScale,
                      ym = y + yScale
                    return [
                      translate(centerX, centerY),
                      rotateRadians(rotations_toRadians(config.rotate)),
                      moveTo(x, ym),
                      appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
                      appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
                      appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
                      appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym),
                    ]
                  })({
                    x: options.x,
                    y: options.y,
                    xScale: options.xScale,
                    yScale: options.yScale,
                    rotate:
                      null !== (_c = options.rotate) && void 0 !== _c
                        ? _c
                        : degrees(0),
                  }),
              [
                options.color && options.borderWidth
                  ? fillAndStroke()
                  : options.color
                    ? fill()
                    : options.borderColor
                      ? stroke()
                      : closePath(),
                operators_popGraphicsState(),
              ]
            ).filter(Boolean)
          },
          rotateInPlace = function (options) {
            return 0 === options.rotation
              ? [translate(0, 0), rotateDegrees(0)]
              : 90 === options.rotation
                ? [translate(options.width, 0), rotateDegrees(90)]
                : 180 === options.rotation
                  ? [
                      translate(options.width, options.height),
                      rotateDegrees(180),
                    ]
                  : 270 === options.rotation
                    ? [translate(0, options.height), rotateDegrees(270)]
                    : []
          },
          drawCheckBox = function (options) {
            var outline = drawRectangle({
              x: options.x,
              y: options.y,
              width: options.width,
              height: options.height,
              borderWidth: options.borderWidth,
              color: options.color,
              borderColor: options.borderColor,
              rotate: degrees(0),
              xSkew: degrees(0),
              ySkew: degrees(0),
            })
            if (!options.filled) return outline
            var width = objects_asNumber(options.width),
              height = objects_asNumber(options.height),
              checkMark = (function (options) {
                var size = objects_asNumber(options.size)
                return [
                  operators_pushGraphicsState(),
                  options.color && setStrokingColor(options.color),
                  setLineWidth(options.thickness),
                  translate(options.x, options.y),
                  moveTo(-0.675 * size, -0.07601036269430045 * size),
                  lineTo(-0.25 * size, -0.49 * size),
                  lineTo(0.69 * size, 0.475 * size),
                  stroke(),
                  operators_popGraphicsState(),
                ].filter(Boolean)
              })({
                x: width / 2,
                y: height / 2,
                size: Math.min(width, height) / 2,
                thickness: options.thickness,
                color: options.markColor,
              })
            return __spreadArrays(
              [operators_pushGraphicsState()],
              outline,
              checkMark,
              [operators_popGraphicsState()]
            )
          },
          drawRadioButton = function (options) {
            var width = objects_asNumber(options.width),
              height = objects_asNumber(options.height),
              outlineScale = Math.min(width, height) / 2,
              outline = drawEllipse({
                x: options.x,
                y: options.y,
                xScale: outlineScale,
                yScale: outlineScale,
                color: options.color,
                borderColor: options.borderColor,
                borderWidth: options.borderWidth,
              })
            if (!options.filled) return outline
            var dot = drawEllipse({
              x: options.x,
              y: options.y,
              xScale: 0.45 * outlineScale,
              yScale: 0.45 * outlineScale,
              color: options.dotColor,
              borderColor: void 0,
              borderWidth: 0,
            })
            return __spreadArrays(
              [operators_pushGraphicsState()],
              outline,
              dot,
              [operators_popGraphicsState()]
            )
          },
          drawButton = function (options) {
            var x = objects_asNumber(options.x),
              y = objects_asNumber(options.y),
              width = objects_asNumber(options.width),
              height = objects_asNumber(options.height),
              background = drawRectangle({
                x,
                y,
                width,
                height,
                borderWidth: options.borderWidth,
                color: options.color,
                borderColor: options.borderColor,
                rotate: degrees(0),
                xSkew: degrees(0),
                ySkew: degrees(0),
              }),
              lines = drawTextLines(options.textLines, {
                color: options.textColor,
                font: options.font,
                size: options.fontSize,
                rotate: degrees(0),
                xSkew: degrees(0),
                ySkew: degrees(0),
              })
            return __spreadArrays(
              [operators_pushGraphicsState()],
              background,
              lines,
              [operators_popGraphicsState()]
            )
          },
          drawTextLines = function (lines, options) {
            for (
              var operators = [
                  operators_beginText(),
                  colors_setFillingColor(options.color),
                  operators_setFontAndSize(options.font, options.size),
                ],
                idx = 0,
                len = lines.length;
              idx < len;
              idx++
            ) {
              var _a = lines[idx],
                encoded = _a.encoded,
                x = _a.x,
                y = _a.y
              operators.push(
                operators_rotateAndSkewTextRadiansAndTranslate(
                  rotations_toRadians(options.rotate),
                  rotations_toRadians(options.xSkew),
                  rotations_toRadians(options.ySkew),
                  x,
                  y
                ),
                operators_showText(encoded)
              )
            }
            return (operators.push(operators_endText()), operators)
          },
          drawTextField = function (options) {
            var x = objects_asNumber(options.x),
              y = objects_asNumber(options.y),
              width = objects_asNumber(options.width),
              height = objects_asNumber(options.height),
              borderWidth = objects_asNumber(options.borderWidth),
              padding = objects_asNumber(options.padding),
              clipX = x + borderWidth / 2 + padding,
              clipY = y + borderWidth / 2 + padding,
              clipWidth = width - 2 * (borderWidth / 2 + padding),
              clipHeight = height - 2 * (borderWidth / 2 + padding),
              clippingArea = [
                moveTo(clipX, clipY),
                lineTo(clipX, clipY + clipHeight),
                lineTo(clipX + clipWidth, clipY + clipHeight),
                lineTo(clipX + clipWidth, clipY),
                closePath(),
                clip(),
                endPath(),
              ],
              background = drawRectangle({
                x,
                y,
                width,
                height,
                borderWidth: options.borderWidth,
                color: options.color,
                borderColor: options.borderColor,
                rotate: degrees(0),
                xSkew: degrees(0),
                ySkew: degrees(0),
              }),
              lines = drawTextLines(options.textLines, {
                color: options.textColor,
                font: options.font,
                size: options.fontSize,
                rotate: degrees(0),
                xSkew: degrees(0),
                ySkew: degrees(0),
              }),
              markedContent = __spreadArrays(
                [beginMarkedContent('Tx'), operators_pushGraphicsState()],
                lines,
                [operators_popGraphicsState(), endMarkedContent()]
              )
            return __spreadArrays(
              [operators_pushGraphicsState()],
              background,
              clippingArea,
              markedContent,
              [operators_popGraphicsState()]
            )
          },
          EncryptedPDFError = (function (_super) {
            function EncryptedPDFError() {
              return (
                _super.call(
                  this,
                  'Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.'
                ) || this
              )
            }
            return (__extends(EncryptedPDFError, _super), EncryptedPDFError)
          })(Error),
          FontkitNotRegisteredError = (function (_super) {
            function FontkitNotRegisteredError() {
              return (
                _super.call(
                  this,
                  'Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.'
                ) || this
              )
            }
            return (
              __extends(FontkitNotRegisteredError, _super),
              FontkitNotRegisteredError
            )
          })(Error),
          ForeignPageError = (function (_super) {
            function ForeignPageError() {
              return (
                _super.call(
                  this,
                  'A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.'
                ) || this
              )
            }
            return (__extends(ForeignPageError, _super), ForeignPageError)
          })(Error),
          RemovePageFromEmptyDocumentError = (function (_super) {
            function RemovePageFromEmptyDocumentError() {
              return (
                _super.call(
                  this,
                  'PDFDocument has no pages so `PDFDocument.removePage` cannot be called'
                ) || this
              )
            }
            return (
              __extends(RemovePageFromEmptyDocumentError, _super),
              RemovePageFromEmptyDocumentError
            )
          })(Error),
          NoSuchFieldError = (function (_super) {
            function NoSuchFieldError(name) {
              var msg =
                'PDFDocument has no form field with the name "' + name + '"'
              return _super.call(this, msg) || this
            }
            return (__extends(NoSuchFieldError, _super), NoSuchFieldError)
          })(Error),
          UnexpectedFieldTypeError = (function (_super) {
            function UnexpectedFieldTypeError(name, expected, actual) {
              var _a,
                _b,
                msg =
                  'Expected field "' +
                  name +
                  '" to be of type ' +
                  (null == expected ? void 0 : expected.name) +
                  ', but it is actually of type ' +
                  (null !==
                    (_b =
                      null ===
                        (_a = null == actual ? void 0 : actual.constructor) ||
                      void 0 === _a
                        ? void 0
                        : _a.name) && void 0 !== _b
                    ? _b
                    : actual)
              return _super.call(this, msg) || this
            }
            return (
              __extends(UnexpectedFieldTypeError, _super),
              UnexpectedFieldTypeError
            )
          })(Error),
          FieldAlreadyExistsError =
            ((function (_super) {
              function MissingOnValueCheckError(onValue) {
                var msg =
                  'Failed to select check box due to missing onValue: "' +
                  onValue +
                  '"'
                return _super.call(this, msg) || this
              }
              __extends(MissingOnValueCheckError, _super)
            })(Error),
            (function (_super) {
              function FieldAlreadyExistsError(name) {
                var msg =
                  'A field already exists with the specified name: "' +
                  name +
                  '"'
                return _super.call(this, msg) || this
              }
              return (
                __extends(FieldAlreadyExistsError, _super),
                FieldAlreadyExistsError
              )
            })(Error)),
          InvalidFieldNamePartError = (function (_super) {
            function InvalidFieldNamePartError(namePart) {
              var msg =
                'Field name contains invalid component: "' + namePart + '"'
              return _super.call(this, msg) || this
            }
            return (
              __extends(InvalidFieldNamePartError, _super),
              InvalidFieldNamePartError
            )
          })(Error),
          RichTextFieldReadError =
            ((function (_super) {
              function FieldExistsAsNonTerminalError(name) {
                var msg =
                  'A non-terminal field already exists with the specified name: "' +
                  name +
                  '"'
                return _super.call(this, msg) || this
              }
              __extends(FieldExistsAsNonTerminalError, _super)
            })(Error),
            (function (_super) {
              function RichTextFieldReadError(fieldName) {
                var msg =
                  'Reading rich text fields is not supported: Attempted to read rich text field: ' +
                  fieldName
                return _super.call(this, msg) || this
              }
              return (
                __extends(RichTextFieldReadError, _super),
                RichTextFieldReadError
              )
            })(Error)),
          CombedTextLayoutError = (function (_super) {
            function CombedTextLayoutError(lineLength, cellCount) {
              var msg =
                'Failed to layout combed text as lineLength=' +
                lineLength +
                ' is greater than cellCount=' +
                cellCount
              return _super.call(this, msg) || this
            }
            return (
              __extends(CombedTextLayoutError, _super),
              CombedTextLayoutError
            )
          })(Error),
          ExceededMaxLengthError = (function (_super) {
            function ExceededMaxLengthError(textLength, maxLength, name) {
              var msg =
                'Attempted to set text with length=' +
                textLength +
                ' for TextField with maxLength=' +
                maxLength +
                ' and name=' +
                name
              return _super.call(this, msg) || this
            }
            return (
              __extends(ExceededMaxLengthError, _super),
              ExceededMaxLengthError
            )
          })(Error),
          InvalidMaxLengthError = (function (_super) {
            function InvalidMaxLengthError(textLength, maxLength, name) {
              var msg =
                'Attempted to set maxLength=' +
                maxLength +
                ', which is less than ' +
                textLength +
                ", the length of this field's current value (name=" +
                name +
                ')'
              return _super.call(this, msg) || this
            }
            return (
              __extends(InvalidMaxLengthError, _super),
              InvalidMaxLengthError
            )
          })(Error)
        !(function (TextAlignment) {
          ;((TextAlignment[(TextAlignment.Left = 0)] = 'Left'),
            (TextAlignment[(TextAlignment.Center = 1)] = 'Center'),
            (TextAlignment[(TextAlignment.Right = 2)] = 'Right'))
        })(TextAlignment || (TextAlignment = {}))
        var computeFontSize = function (lines, font, bounds, multiline) {
            void 0 === multiline && (multiline = !1)
            for (var fontSize = 4; fontSize < 500; ) {
              for (
                var linesUsed = 0, lineIdx = 0, lineLen = lines.length;
                lineIdx < lineLen;
                lineIdx++
              ) {
                linesUsed += 1
                for (
                  var words = lines[lineIdx].split(' '),
                    spaceInLineRemaining = bounds.width,
                    idx = 0,
                    len = words.length;
                  idx < len;
                  idx++
                ) {
                  var word = idx === len - 1 ? words[idx] : words[idx] + ' ',
                    widthOfWord = font.widthOfTextAtSize(word, fontSize)
                  ;(spaceInLineRemaining -= widthOfWord) <= 0 &&
                    ((linesUsed += 1),
                    (spaceInLineRemaining = bounds.width - widthOfWord))
                }
              }
              if (!multiline && linesUsed > lines.length) return fontSize - 1
              var height = font.heightAtSize(fontSize)
              if ((height + 0.2 * height) * linesUsed > Math.abs(bounds.height))
                return fontSize - 1
              fontSize += 1
            }
            return fontSize
          },
          computeCombedFontSize = function (line, font, bounds, cellCount) {
            for (
              var cellWidth = bounds.width / cellCount,
                cellHeight = bounds.height,
                fontSize = 4,
                chars = (function (text) {
                  for (
                    var chars = [], idx = 0, len = text.length;
                    idx < len;

                  ) {
                    var _a = charAtIndex(text, idx),
                      c = _a[0],
                      cLen = _a[1]
                    ;(chars.push(c), (idx += cLen))
                  }
                  return chars
                })(line);
              fontSize < 500;

            ) {
              for (var idx = 0, len = chars.length; idx < len; idx++) {
                var c = chars[idx]
                if (font.widthOfTextAtSize(c, fontSize) > 0.75 * cellWidth)
                  return fontSize - 1
              }
              if (font.heightAtSize(fontSize, { descender: !1 }) > cellHeight)
                return fontSize - 1
              fontSize += 1
            }
            return fontSize
          },
          lastIndexOfWhitespace = function (line) {
            for (var idx = line.length; idx > 0; idx--)
              if (/\s/.test(line[idx])) return idx
          },
          splitOutLines = function (input, maxWidth, font, fontSize) {
            for (
              var _a, lastWhitespaceIdx = input.length;
              lastWhitespaceIdx > 0;

            ) {
              var line = input.substring(0, lastWhitespaceIdx),
                encoded = font.encodeText(line),
                width = font.widthOfTextAtSize(line, fontSize)
              if (width < maxWidth)
                return {
                  line,
                  encoded,
                  width,
                  remainder: input.substring(lastWhitespaceIdx) || void 0,
                }
              lastWhitespaceIdx =
                null !== (_a = lastIndexOfWhitespace(line)) && void 0 !== _a
                  ? _a
                  : 0
            }
            return {
              line: input,
              encoded: font.encodeText(input),
              width: font.widthOfTextAtSize(input, fontSize),
              remainder: void 0,
            }
          },
          layoutMultilineText = function (text, _a) {
            var alignment = _a.alignment,
              fontSize = _a.fontSize,
              font = _a.font,
              bounds = _a.bounds,
              lines = lineSplit(cleanText(text))
            ;(void 0 !== fontSize && 0 !== fontSize) ||
              (fontSize = computeFontSize(lines, font, bounds, !0))
            for (
              var height = font.heightAtSize(fontSize),
                lineHeight = height + 0.2 * height,
                textLines = [],
                minX = bounds.x,
                minY = bounds.y,
                maxX = bounds.x + bounds.width,
                maxY = bounds.y + bounds.height,
                y = bounds.y + bounds.height,
                idx = 0,
                len = lines.length;
              idx < len;
              idx++
            )
              for (var prevRemainder = lines[idx]; void 0 !== prevRemainder; ) {
                var _b = splitOutLines(
                    prevRemainder,
                    bounds.width,
                    font,
                    fontSize
                  ),
                  line = _b.line,
                  encoded = _b.encoded,
                  width = _b.width,
                  remainder = _b.remainder,
                  x =
                    alignment === TextAlignment.Left
                      ? bounds.x
                      : alignment === TextAlignment.Center
                        ? bounds.x + bounds.width / 2 - width / 2
                        : alignment === TextAlignment.Right
                          ? bounds.x + bounds.width - width
                          : bounds.x
                ;(x < minX && (minX = x),
                  (y -= lineHeight) < minY && (minY = y),
                  x + width > maxX && (maxX = x + width),
                  y + height > maxY && (maxY = y + height),
                  textLines.push({ text: line, encoded, width, height, x, y }),
                  (prevRemainder =
                    null == remainder ? void 0 : remainder.trim()))
              }
            return {
              fontSize,
              lineHeight,
              lines: textLines,
              bounds: {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY,
              },
            }
          },
          layoutSinglelineText = function (text, _a) {
            var alignment = _a.alignment,
              fontSize = _a.fontSize,
              font = _a.font,
              bounds = _a.bounds,
              line = mergeLines(cleanText(text))
            ;(void 0 !== fontSize && 0 !== fontSize) ||
              (fontSize = computeFontSize([line], font, bounds))
            var encoded = font.encodeText(line),
              width = font.widthOfTextAtSize(line, fontSize),
              height = font.heightAtSize(fontSize, { descender: !1 }),
              x =
                alignment === TextAlignment.Left
                  ? bounds.x
                  : alignment === TextAlignment.Center
                    ? bounds.x + bounds.width / 2 - width / 2
                    : alignment === TextAlignment.Right
                      ? bounds.x + bounds.width - width
                      : bounds.x,
              y = bounds.y + (bounds.height / 2 - height / 2)
            return {
              fontSize,
              line: { text: line, encoded, width, height, x, y },
              bounds: { x, y, width, height },
            }
          },
          normalizeAppearance = function (appearance) {
            return 'normal' in appearance ? appearance : { normal: appearance }
          },
          appearances_tfRegex =
            /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,
          getDefaultFontSize = function (field) {
            var _a,
              _b,
              da =
                null !== (_a = field.getDefaultAppearance()) && void 0 !== _a
                  ? _a
                  : '',
              daMatch =
                null !== (_b = findLastMatch(da, appearances_tfRegex).match) &&
                void 0 !== _b
                  ? _b
                  : [],
              defaultFontSize = Number(daMatch[2])
            return isFinite(defaultFontSize) ? defaultFontSize : void 0
          },
          colorRegex =
            /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,
          getDefaultColor = function (field) {
            var _a,
              da =
                null !== (_a = field.getDefaultAppearance()) && void 0 !== _a
                  ? _a
                  : '',
              daMatch = findLastMatch(da, colorRegex).match,
              _b = null != daMatch ? daMatch : [],
              c1 = _b[1],
              c2 = _b[2],
              c3 = _b[3],
              c4 = _b[4],
              colorSpace = _b[5]
            return 'g' === colorSpace && c1
              ? grayscale(Number(c1))
              : 'rg' === colorSpace && c1 && c2 && c3
                ? rgb(Number(c1), Number(c2), Number(c3))
                : 'k' === colorSpace && c1 && c2 && c3 && c4
                  ? cmyk(Number(c1), Number(c2), Number(c3), Number(c4))
                  : void 0
          },
          updateDefaultAppearance = function (field, color, font, fontSize) {
            var _a
            void 0 === fontSize && (fontSize = 0)
            var da = [
              colors_setFillingColor(color).toString(),
              operators_setFontAndSize(
                null !== (_a = null == font ? void 0 : font.name) &&
                  void 0 !== _a
                  ? _a
                  : 'dummy__noop',
                fontSize
              ).toString(),
            ].join('\n')
            field.setDefaultAppearance(da)
          },
          defaultCheckBoxAppearanceProvider = function (checkBox, widget) {
            var _a,
              _b,
              _c,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(checkBox.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              borderWidth =
                null !== (_a = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _a
                  ? _a
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _d = adjustDimsForRotation(rectangle, rotation),
              width = _d.width,
              height = _d.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor =
                null !==
                  (_b = componentsToColor(
                    null == ap ? void 0 : ap.getBorderColor()
                  )) && void 0 !== _b
                  ? _b
                  : black,
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              downBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor(),
                0.8
              ),
              textColor =
                null !==
                  (_c = null != widgetColor ? widgetColor : fieldColor) &&
                void 0 !== _c
                  ? _c
                  : black
            updateDefaultAppearance(
              widgetColor ? widget : checkBox.acroField,
              textColor
            )
            var options = {
              x: 0 + borderWidth / 2,
              y: 0 + borderWidth / 2,
              width: width - borderWidth,
              height: height - borderWidth,
              thickness: 1.5,
              borderWidth,
              borderColor,
              markColor: textColor,
            }
            return {
              normal: {
                on: __spreadArrays(
                  rotate,
                  drawCheckBox(
                    __assign(__assign({}, options), {
                      color: normalBackgroundColor,
                      filled: !0,
                    })
                  )
                ),
                off: __spreadArrays(
                  rotate,
                  drawCheckBox(
                    __assign(__assign({}, options), {
                      color: normalBackgroundColor,
                      filled: !1,
                    })
                  )
                ),
              },
              down: {
                on: __spreadArrays(
                  rotate,
                  drawCheckBox(
                    __assign(__assign({}, options), {
                      color: downBackgroundColor,
                      filled: !0,
                    })
                  )
                ),
                off: __spreadArrays(
                  rotate,
                  drawCheckBox(
                    __assign(__assign({}, options), {
                      color: downBackgroundColor,
                      filled: !1,
                    })
                  )
                ),
              },
            }
          },
          defaultRadioGroupAppearanceProvider = function (radioGroup, widget) {
            var _a,
              _b,
              _c,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(radioGroup.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              borderWidth =
                null !== (_a = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _a
                  ? _a
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _d = adjustDimsForRotation(rectangle, rotation),
              width = _d.width,
              height = _d.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor =
                null !==
                  (_b = componentsToColor(
                    null == ap ? void 0 : ap.getBorderColor()
                  )) && void 0 !== _b
                  ? _b
                  : black,
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              downBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor(),
                0.8
              ),
              textColor =
                null !==
                  (_c = null != widgetColor ? widgetColor : fieldColor) &&
                void 0 !== _c
                  ? _c
                  : black
            updateDefaultAppearance(
              widgetColor ? widget : radioGroup.acroField,
              textColor
            )
            var options = {
              x: width / 2,
              y: height / 2,
              width: width - borderWidth,
              height: height - borderWidth,
              borderWidth,
              borderColor,
              dotColor: textColor,
            }
            return {
              normal: {
                on: __spreadArrays(
                  rotate,
                  drawRadioButton(
                    __assign(__assign({}, options), {
                      color: normalBackgroundColor,
                      filled: !0,
                    })
                  )
                ),
                off: __spreadArrays(
                  rotate,
                  drawRadioButton(
                    __assign(__assign({}, options), {
                      color: normalBackgroundColor,
                      filled: !1,
                    })
                  )
                ),
              },
              down: {
                on: __spreadArrays(
                  rotate,
                  drawRadioButton(
                    __assign(__assign({}, options), {
                      color: downBackgroundColor,
                      filled: !0,
                    })
                  )
                ),
                off: __spreadArrays(
                  rotate,
                  drawRadioButton(
                    __assign(__assign({}, options), {
                      color: downBackgroundColor,
                      filled: !1,
                    })
                  )
                ),
              },
            }
          },
          defaultButtonAppearanceProvider = function (button, widget, font) {
            var _a,
              _b,
              _c,
              _d,
              _e,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(button.acroField),
              widgetFontSize = getDefaultFontSize(widget),
              fieldFontSize = getDefaultFontSize(button.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              captions = null == ap ? void 0 : ap.getCaptions(),
              normalText =
                null !== (_a = null == captions ? void 0 : captions.normal) &&
                void 0 !== _a
                  ? _a
                  : '',
              downText =
                null !==
                  (_c =
                    null !== (_b = null == captions ? void 0 : captions.down) &&
                    void 0 !== _b
                      ? _b
                      : normalText) && void 0 !== _c
                  ? _c
                  : '',
              borderWidth =
                null !== (_d = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _d
                  ? _d
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _f = adjustDimsForRotation(rectangle, rotation),
              width = _f.width,
              height = _f.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor = componentsToColor(
                null == ap ? void 0 : ap.getBorderColor()
              ),
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              downBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor(),
                0.8
              ),
              bounds = {
                x: borderWidth,
                y: borderWidth,
                width: width - 2 * borderWidth,
                height: height - 2 * borderWidth,
              },
              normalLayout = layoutSinglelineText(normalText, {
                alignment: TextAlignment.Center,
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
              }),
              downLayout = layoutSinglelineText(downText, {
                alignment: TextAlignment.Center,
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
              }),
              fontSize = Math.min(normalLayout.fontSize, downLayout.fontSize),
              textColor =
                null !==
                  (_e = null != widgetColor ? widgetColor : fieldColor) &&
                void 0 !== _e
                  ? _e
                  : black
            updateDefaultAppearance(
              widgetColor || void 0 !== widgetFontSize
                ? widget
                : button.acroField,
              textColor,
              font,
              fontSize
            )
            var options = {
              x: 0 + borderWidth / 2,
              y: 0 + borderWidth / 2,
              width: width - borderWidth,
              height: height - borderWidth,
              borderWidth,
              borderColor,
              textColor,
              font: font.name,
              fontSize,
            }
            return {
              normal: __spreadArrays(
                rotate,
                drawButton(
                  __assign(__assign({}, options), {
                    color: normalBackgroundColor,
                    textLines: [normalLayout.line],
                  })
                )
              ),
              down: __spreadArrays(
                rotate,
                drawButton(
                  __assign(__assign({}, options), {
                    color: downBackgroundColor,
                    textLines: [downLayout.line],
                  })
                )
              ),
            }
          },
          defaultTextFieldAppearanceProvider = function (
            textField,
            widget,
            font
          ) {
            var _a,
              _b,
              _c,
              _d,
              textLines,
              fontSize,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(textField.acroField),
              widgetFontSize = getDefaultFontSize(widget),
              fieldFontSize = getDefaultFontSize(textField.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              text =
                null !== (_a = textField.getText()) && void 0 !== _a ? _a : '',
              borderWidth =
                null !== (_b = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _b
                  ? _b
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _e = adjustDimsForRotation(rectangle, rotation),
              width = _e.width,
              height = _e.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor = componentsToColor(
                null == ap ? void 0 : ap.getBorderColor()
              ),
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              padding = textField.isCombed() ? 0 : 1,
              bounds = {
                x: borderWidth + padding,
                y: borderWidth + padding,
                width: width - 2 * (borderWidth + padding),
                height: height - 2 * (borderWidth + padding),
              }
            if (textField.isMultiline())
              ((textLines = (layout = layoutMultilineText(text, {
                alignment: textField.getAlignment(),
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
              })).lines),
                (fontSize = layout.fontSize))
            else if (textField.isCombed()) {
              var layout = (function (text, _a) {
                var fontSize = _a.fontSize,
                  font = _a.font,
                  bounds = _a.bounds,
                  cellCount = _a.cellCount,
                  line = mergeLines(cleanText(text))
                if (line.length > cellCount)
                  throw new CombedTextLayoutError(line.length, cellCount)
                ;(void 0 !== fontSize && 0 !== fontSize) ||
                  (fontSize = computeCombedFontSize(
                    line,
                    font,
                    bounds,
                    cellCount
                  ))
                for (
                  var cellWidth = bounds.width / cellCount,
                    height = font.heightAtSize(fontSize, { descender: !1 }),
                    y = bounds.y + (bounds.height / 2 - height / 2),
                    cells = [],
                    minX = bounds.x,
                    minY = bounds.y,
                    maxX = bounds.x + bounds.width,
                    maxY = bounds.y + bounds.height,
                    cellOffset = 0,
                    charOffset = 0;
                  cellOffset < cellCount;

                ) {
                  var _b = charAtIndex(line, charOffset),
                    char = _b[0],
                    charLength = _b[1],
                    encoded = font.encodeText(char),
                    width = font.widthOfTextAtSize(char, fontSize),
                    x =
                      bounds.x +
                      (cellWidth * cellOffset + cellWidth / 2) -
                      width / 2
                  ;(x < minX && (minX = x),
                    y < minY && (minY = y),
                    x + width > maxX && (maxX = x + width),
                    y + height > maxY && (maxY = y + height),
                    cells.push({ text: line, encoded, width, height, x, y }),
                    (cellOffset += 1),
                    (charOffset += charLength))
                }
                return {
                  fontSize,
                  cells,
                  bounds: {
                    x: minX,
                    y: minY,
                    width: maxX - minX,
                    height: maxY - minY,
                  },
                }
              })(text, {
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
                cellCount:
                  null !== (_c = textField.getMaxLength()) && void 0 !== _c
                    ? _c
                    : 0,
              })
              ;((textLines = layout.cells), (fontSize = layout.fontSize))
            } else {
              ;((textLines = [
                (layout = layoutSinglelineText(text, {
                  alignment: textField.getAlignment(),
                  fontSize:
                    null != widgetFontSize ? widgetFontSize : fieldFontSize,
                  font,
                  bounds,
                })).line,
              ]),
                (fontSize = layout.fontSize))
            }
            var textColor =
              null !== (_d = null != widgetColor ? widgetColor : fieldColor) &&
              void 0 !== _d
                ? _d
                : black
            updateDefaultAppearance(
              widgetColor || void 0 !== widgetFontSize
                ? widget
                : textField.acroField,
              textColor,
              font,
              fontSize
            )
            var options = {
              x: 0 + borderWidth / 2,
              y: 0 + borderWidth / 2,
              width: width - borderWidth,
              height: height - borderWidth,
              borderWidth: null != borderWidth ? borderWidth : 0,
              borderColor,
              textColor,
              font: font.name,
              fontSize,
              color: normalBackgroundColor,
              textLines,
              padding,
            }
            return __spreadArrays(rotate, drawTextField(options))
          },
          defaultDropdownAppearanceProvider = function (
            dropdown,
            widget,
            font
          ) {
            var _a,
              _b,
              _c,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(dropdown.acroField),
              widgetFontSize = getDefaultFontSize(widget),
              fieldFontSize = getDefaultFontSize(dropdown.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              text =
                null !== (_a = dropdown.getSelected()[0]) && void 0 !== _a
                  ? _a
                  : '',
              borderWidth =
                null !== (_b = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _b
                  ? _b
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _d = adjustDimsForRotation(rectangle, rotation),
              width = _d.width,
              height = _d.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor = componentsToColor(
                null == ap ? void 0 : ap.getBorderColor()
              ),
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              bounds = {
                x: borderWidth + 1,
                y: borderWidth + 1,
                width: width - 2 * (borderWidth + 1),
                height: height - 2 * (borderWidth + 1),
              },
              _e = layoutSinglelineText(text, {
                alignment: TextAlignment.Left,
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
              }),
              line = _e.line,
              fontSize = _e.fontSize,
              textColor =
                null !==
                  (_c = null != widgetColor ? widgetColor : fieldColor) &&
                void 0 !== _c
                  ? _c
                  : black
            updateDefaultAppearance(
              widgetColor || void 0 !== widgetFontSize
                ? widget
                : dropdown.acroField,
              textColor,
              font,
              fontSize
            )
            var options = {
              x: 0 + borderWidth / 2,
              y: 0 + borderWidth / 2,
              width: width - borderWidth,
              height: height - borderWidth,
              borderWidth: null != borderWidth ? borderWidth : 0,
              borderColor,
              textColor,
              font: font.name,
              fontSize,
              color: normalBackgroundColor,
              textLines: [line],
              padding: 1,
            }
            return __spreadArrays(rotate, drawTextField(options))
          },
          defaultOptionListAppearanceProvider = function (
            optionList,
            widget,
            font
          ) {
            var _a,
              _b,
              widgetColor = getDefaultColor(widget),
              fieldColor = getDefaultColor(optionList.acroField),
              widgetFontSize = getDefaultFontSize(widget),
              fieldFontSize = getDefaultFontSize(optionList.acroField),
              rectangle = widget.getRectangle(),
              ap = widget.getAppearanceCharacteristics(),
              bs = widget.getBorderStyle(),
              borderWidth =
                null !== (_a = null == bs ? void 0 : bs.getWidth()) &&
                void 0 !== _a
                  ? _a
                  : 0,
              rotation = reduceRotation(null == ap ? void 0 : ap.getRotation()),
              _c = adjustDimsForRotation(rectangle, rotation),
              width = _c.width,
              height = _c.height,
              rotate = rotateInPlace(
                __assign(__assign({}, rectangle), { rotation })
              ),
              black = rgb(0, 0, 0),
              borderColor = componentsToColor(
                null == ap ? void 0 : ap.getBorderColor()
              ),
              normalBackgroundColor = componentsToColor(
                null == ap ? void 0 : ap.getBackgroundColor()
              ),
              options = optionList.getOptions(),
              selected = optionList.getSelected()
            optionList.isSorted() && options.sort()
            for (var text = '', idx = 0, len = options.length; idx < len; idx++)
              ((text += options[idx]), idx < len - 1 && (text += '\n'))
            var bounds = {
                x: borderWidth + 1,
                y: borderWidth + 1,
                width: width - 2 * (borderWidth + 1),
                height: height - 2 * (borderWidth + 1),
              },
              _d = layoutMultilineText(text, {
                alignment: TextAlignment.Left,
                fontSize:
                  null != widgetFontSize ? widgetFontSize : fieldFontSize,
                font,
                bounds,
              }),
              lines = _d.lines,
              fontSize = _d.fontSize,
              lineHeight = _d.lineHeight,
              selectedLines = []
            for (idx = 0, len = lines.length; idx < len; idx++) {
              var line = lines[idx]
              selected.includes(line.text) && selectedLines.push(idx)
            }
            var blue = rgb(0.6, 193 / 255, 218 / 255),
              textColor =
                null !==
                  (_b = null != widgetColor ? widgetColor : fieldColor) &&
                void 0 !== _b
                  ? _b
                  : black
            return (
              updateDefaultAppearance(
                widgetColor || void 0 !== widgetFontSize
                  ? widget
                  : optionList.acroField,
                textColor,
                font,
                fontSize
              ),
              __spreadArrays(
                rotate,
                (function (options) {
                  for (
                    var x = objects_asNumber(options.x),
                      y = objects_asNumber(options.y),
                      width = objects_asNumber(options.width),
                      height = objects_asNumber(options.height),
                      lineHeight = objects_asNumber(options.lineHeight),
                      borderWidth = objects_asNumber(options.borderWidth),
                      padding = objects_asNumber(options.padding),
                      clipX = x + borderWidth / 2 + padding,
                      clipY = y + borderWidth / 2 + padding,
                      clipWidth = width - 2 * (borderWidth / 2 + padding),
                      clipHeight = height - 2 * (borderWidth / 2 + padding),
                      clippingArea = [
                        moveTo(clipX, clipY),
                        lineTo(clipX, clipY + clipHeight),
                        lineTo(clipX + clipWidth, clipY + clipHeight),
                        lineTo(clipX + clipWidth, clipY),
                        closePath(),
                        clip(),
                        endPath(),
                      ],
                      background = drawRectangle({
                        x,
                        y,
                        width,
                        height,
                        borderWidth: options.borderWidth,
                        color: options.color,
                        borderColor: options.borderColor,
                        rotate: degrees(0),
                        xSkew: degrees(0),
                        ySkew: degrees(0),
                      }),
                      highlights = [],
                      idx = 0,
                      len = options.selectedLines.length;
                    idx < len;
                    idx++
                  ) {
                    var line = options.textLines[options.selectedLines[idx]]
                    highlights.push.apply(
                      highlights,
                      drawRectangle({
                        x: line.x - padding,
                        y: line.y - (lineHeight - line.height) / 2,
                        width: width - borderWidth,
                        height: line.height + (lineHeight - line.height) / 2,
                        borderWidth: 0,
                        color: options.selectedColor,
                        borderColor: void 0,
                        rotate: degrees(0),
                        xSkew: degrees(0),
                        ySkew: degrees(0),
                      })
                    )
                  }
                  var lines = drawTextLines(options.textLines, {
                      color: options.textColor,
                      font: options.font,
                      size: options.fontSize,
                      rotate: degrees(0),
                      xSkew: degrees(0),
                      ySkew: degrees(0),
                    }),
                    markedContent = __spreadArrays(
                      [beginMarkedContent('Tx'), operators_pushGraphicsState()],
                      lines,
                      [operators_popGraphicsState(), endMarkedContent()]
                    )
                  return __spreadArrays(
                    [operators_pushGraphicsState()],
                    background,
                    highlights,
                    clippingArea,
                    markedContent,
                    [operators_popGraphicsState()]
                  )
                })({
                  x: 0 + borderWidth / 2,
                  y: 0 + borderWidth / 2,
                  width: width - borderWidth,
                  height: height - borderWidth,
                  borderWidth: null != borderWidth ? borderWidth : 0,
                  borderColor,
                  textColor,
                  font: font.name,
                  fontSize,
                  color: normalBackgroundColor,
                  textLines: lines,
                  lineHeight,
                  selectedColor: blue,
                  selectedLines,
                  padding: 1,
                })
              )
            )
          }
        const api_PDFEmbeddedPage = (function () {
          function PDFEmbeddedPage(ref, doc, embedder) {
            ;((this.alreadyEmbedded = !1),
              validators_assertIs(ref, 'ref', [[objects_PDFRef, 'PDFRef']]),
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ]),
              validators_assertIs(embedder, 'embedder', [
                [embedders_PDFPageEmbedder, 'PDFPageEmbedder'],
              ]),
              (this.ref = ref),
              (this.doc = doc),
              (this.width = embedder.width),
              (this.height = embedder.height),
              (this.embedder = embedder))
          }
          return (
            (PDFEmbeddedPage.prototype.scale = function (factor) {
              return (
                validators_assertIs(factor, 'factor', ['number']),
                { width: this.width * factor, height: this.height * factor }
              )
            }),
            (PDFEmbeddedPage.prototype.size = function () {
              return this.scale(1)
            }),
            (PDFEmbeddedPage.prototype.embed = function () {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return this.alreadyEmbedded
                        ? [3, 2]
                        : [
                            4,
                            this.embedder.embedIntoContext(
                              this.doc.context,
                              this.ref
                            ),
                          ]
                    case 1:
                      ;(_a.sent(), (this.alreadyEmbedded = !0), (_a.label = 2))
                    case 2:
                      return [2]
                  }
                })
              })
            }),
            (PDFEmbeddedPage.of = function (ref, doc, embedder) {
              return new PDFEmbeddedPage(ref, doc, embedder)
            }),
            PDFEmbeddedPage
          )
        })()
        const api_PDFFont = (function () {
          function PDFFont(ref, doc, embedder) {
            ;((this.modified = !0),
              validators_assertIs(ref, 'ref', [[objects_PDFRef, 'PDFRef']]),
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ]),
              validators_assertIs(embedder, 'embedder', [
                [embedders_CustomFontEmbedder, 'CustomFontEmbedder'],
                [embedders_StandardFontEmbedder, 'StandardFontEmbedder'],
              ]),
              (this.ref = ref),
              (this.doc = doc),
              (this.name = embedder.fontName),
              (this.embedder = embedder))
          }
          return (
            (PDFFont.prototype.encodeText = function (text) {
              return (
                validators_assertIs(text, 'text', ['string']),
                (this.modified = !0),
                this.embedder.encodeText(text)
              )
            }),
            (PDFFont.prototype.widthOfTextAtSize = function (text, size) {
              return (
                validators_assertIs(text, 'text', ['string']),
                validators_assertIs(size, 'size', ['number']),
                this.embedder.widthOfTextAtSize(text, size)
              )
            }),
            (PDFFont.prototype.heightAtSize = function (size, options) {
              var _a
              return (
                validators_assertIs(size, 'size', ['number']),
                assertOrUndefined(
                  null == options ? void 0 : options.descender,
                  'options.descender',
                  ['boolean']
                ),
                this.embedder.heightOfFontAtSize(size, {
                  descender:
                    null ===
                      (_a = null == options ? void 0 : options.descender) ||
                    void 0 === _a ||
                    _a,
                })
              )
            }),
            (PDFFont.prototype.sizeAtHeight = function (height) {
              return (
                validators_assertIs(height, 'height', ['number']),
                this.embedder.sizeOfFontAtHeight(height)
              )
            }),
            (PDFFont.prototype.getCharacterSet = function () {
              return this.embedder instanceof embedders_StandardFontEmbedder
                ? this.embedder.encoding.supportedCodePoints
                : this.embedder.font.characterSet
            }),
            (PDFFont.prototype.embed = function () {
              return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return this.modified
                        ? [
                            4,
                            this.embedder.embedIntoContext(
                              this.doc.context,
                              this.ref
                            ),
                          ]
                        : [3, 2]
                    case 1:
                      ;(_a.sent(), (this.modified = !1), (_a.label = 2))
                    case 2:
                      return [2]
                  }
                })
              })
            }),
            (PDFFont.of = function (ref, doc, embedder) {
              return new PDFFont(ref, doc, embedder)
            }),
            PDFFont
          )
        })()
        var PDFImage = (function () {
          function PDFImage(ref, doc, embedder) {
            ;(validators_assertIs(ref, 'ref', [[objects_PDFRef, 'PDFRef']]),
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ]),
              validators_assertIs(embedder, 'embedder', [
                [embedders_JpegEmbedder, 'JpegEmbedder'],
                [embedders_PngEmbedder, 'PngEmbedder'],
              ]),
              (this.ref = ref),
              (this.doc = doc),
              (this.width = embedder.width),
              (this.height = embedder.height),
              (this.embedder = embedder))
          }
          return (
            (PDFImage.prototype.scale = function (factor) {
              return (
                validators_assertIs(factor, 'factor', ['number']),
                { width: this.width * factor, height: this.height * factor }
              )
            }),
            (PDFImage.prototype.scaleToFit = function (width, height) {
              ;(validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var imgWidthScale = width / this.width,
                imgHeightScale = height / this.height,
                scale = Math.min(imgWidthScale, imgHeightScale)
              return this.scale(scale)
            }),
            (PDFImage.prototype.size = function () {
              return this.scale(1)
            }),
            (PDFImage.prototype.embed = function () {
              return __awaiter(this, void 0, void 0, function () {
                var _a, doc, ref
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      return this.embedder
                        ? (this.embedTask ||
                            ((doc = (_a = this).doc),
                            (ref = _a.ref),
                            (this.embedTask = this.embedder.embedIntoContext(
                              doc.context,
                              ref
                            ))),
                          [4, this.embedTask])
                        : [2]
                    case 1:
                      return (_b.sent(), (this.embedder = void 0), [2])
                  }
                })
              })
            }),
            (PDFImage.of = function (ref, doc, embedder) {
              return new PDFImage(ref, doc, embedder)
            }),
            PDFImage
          )
        })()
        const api_PDFImage = PDFImage
        var ImageAlignment
        !(function (ImageAlignment) {
          ;((ImageAlignment[(ImageAlignment.Left = 0)] = 'Left'),
            (ImageAlignment[(ImageAlignment.Center = 1)] = 'Center'),
            (ImageAlignment[(ImageAlignment.Right = 2)] = 'Right'))
        })(ImageAlignment || (ImageAlignment = {}))
        var assertFieldAppearanceOptions = function (options) {
            ;(assertOrUndefined(
              null == options ? void 0 : options.x,
              'options.x',
              ['number']
            ),
              assertOrUndefined(
                null == options ? void 0 : options.y,
                'options.y',
                ['number']
              ),
              assertOrUndefined(
                null == options ? void 0 : options.width,
                'options.width',
                ['number']
              ),
              assertOrUndefined(
                null == options ? void 0 : options.height,
                'options.height',
                ['number']
              ),
              assertOrUndefined(
                null == options ? void 0 : options.textColor,
                'options.textColor',
                [[Object, 'Color']]
              ),
              assertOrUndefined(
                null == options ? void 0 : options.backgroundColor,
                'options.backgroundColor',
                [[Object, 'Color']]
              ),
              assertOrUndefined(
                null == options ? void 0 : options.borderColor,
                'options.borderColor',
                [[Object, 'Color']]
              ),
              assertOrUndefined(
                null == options ? void 0 : options.borderWidth,
                'options.borderWidth',
                ['number']
              ),
              assertOrUndefined(
                null == options ? void 0 : options.rotate,
                'options.rotate',
                [[Object, 'Rotation']]
              ))
          },
          PDFField = (function () {
            function PDFField(acroField, ref, doc) {
              ;(validators_assertIs(acroField, 'acroField', [
                [acroform_PDFAcroTerminal, 'PDFAcroTerminal'],
              ]),
                validators_assertIs(ref, 'ref', [[objects_PDFRef, 'PDFRef']]),
                validators_assertIs(doc, 'doc', [
                  [api_PDFDocument, 'PDFDocument'],
                ]),
                (this.acroField = acroField),
                (this.ref = ref),
                (this.doc = doc))
            }
            return (
              (PDFField.prototype.getName = function () {
                var _a
                return null !== (_a = this.acroField.getFullyQualifiedName()) &&
                  void 0 !== _a
                  ? _a
                  : ''
              }),
              (PDFField.prototype.isReadOnly = function () {
                return this.acroField.hasFlag(AcroFieldFlags.ReadOnly)
              }),
              (PDFField.prototype.enableReadOnly = function () {
                this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, !0)
              }),
              (PDFField.prototype.disableReadOnly = function () {
                this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, !1)
              }),
              (PDFField.prototype.isRequired = function () {
                return this.acroField.hasFlag(AcroFieldFlags.Required)
              }),
              (PDFField.prototype.enableRequired = function () {
                this.acroField.setFlagTo(AcroFieldFlags.Required, !0)
              }),
              (PDFField.prototype.disableRequired = function () {
                this.acroField.setFlagTo(AcroFieldFlags.Required, !1)
              }),
              (PDFField.prototype.isExported = function () {
                return !this.acroField.hasFlag(AcroFieldFlags.NoExport)
              }),
              (PDFField.prototype.enableExporting = function () {
                this.acroField.setFlagTo(AcroFieldFlags.NoExport, !1)
              }),
              (PDFField.prototype.disableExporting = function () {
                this.acroField.setFlagTo(AcroFieldFlags.NoExport, !0)
              }),
              (PDFField.prototype.needsAppearancesUpdate = function () {
                throw new MethodNotImplementedError(
                  this.constructor.name,
                  'needsAppearancesUpdate'
                )
              }),
              (PDFField.prototype.defaultUpdateAppearances = function (_font) {
                throw new MethodNotImplementedError(
                  this.constructor.name,
                  'defaultUpdateAppearances'
                )
              }),
              (PDFField.prototype.markAsDirty = function () {
                this.doc.getForm().markFieldAsDirty(this.ref)
              }),
              (PDFField.prototype.markAsClean = function () {
                this.doc.getForm().markFieldAsClean(this.ref)
              }),
              (PDFField.prototype.isDirty = function () {
                return this.doc.getForm().fieldIsDirty(this.ref)
              }),
              (PDFField.prototype.createWidget = function (options) {
                var _a,
                  textColor = options.textColor,
                  backgroundColor = options.backgroundColor,
                  borderColor = options.borderColor,
                  borderWidth = options.borderWidth,
                  degreesAngle = toDegrees(options.rotate),
                  caption = options.caption,
                  x = options.x,
                  y = options.y,
                  width = options.width + borderWidth,
                  height = options.height + borderWidth,
                  hidden = Boolean(options.hidden),
                  pageRef = options.page
                assertMultiple(degreesAngle, 'degreesAngle', 90)
                var widget = annotation_PDFWidgetAnnotation.create(
                    this.doc.context,
                    this.ref
                  ),
                  rect = (function (rectangle, borderWidth, degreeAngle) {
                    ;(void 0 === borderWidth && (borderWidth = 0),
                      void 0 === degreeAngle && (degreeAngle = 0))
                    var x = rectangle.x,
                      y = rectangle.y,
                      w = rectangle.width,
                      h = rectangle.height,
                      r = reduceRotation(degreeAngle),
                      b = borderWidth / 2
                    return 0 === r
                      ? { x: x - b, y: y - b, width: w, height: h }
                      : 90 === r
                        ? { x: x - h + b, y: y - b, width: h, height: w }
                        : 180 === r
                          ? { x: x - w + b, y: y - h + b, width: w, height: h }
                          : 270 === r
                            ? { x: x - b, y: y - w + b, width: h, height: w }
                            : { x: x - b, y: y - b, width: w, height: h }
                  })({ x, y, width, height }, borderWidth, degreesAngle)
                ;(widget.setRectangle(rect), pageRef && widget.setP(pageRef))
                var ac = widget.getOrCreateAppearanceCharacteristics()
                ;(backgroundColor &&
                  ac.setBackgroundColor(colorToComponents(backgroundColor)),
                  ac.setRotation(degreesAngle),
                  caption && ac.setCaptions({ normal: caption }),
                  borderColor &&
                    ac.setBorderColor(colorToComponents(borderColor)))
                var bs = widget.getOrCreateBorderStyle()
                if (
                  (void 0 !== borderWidth && bs.setWidth(borderWidth),
                  widget.setFlagTo(AnnotationFlags.Print, !0),
                  widget.setFlagTo(AnnotationFlags.Hidden, hidden),
                  widget.setFlagTo(AnnotationFlags.Invisible, !1),
                  textColor)
                ) {
                  var newDa =
                    (null !== (_a = this.acroField.getDefaultAppearance()) &&
                    void 0 !== _a
                      ? _a
                      : '') +
                    '\n' +
                    colors_setFillingColor(textColor).toString()
                  this.acroField.setDefaultAppearance(newDa)
                }
                return widget
              }),
              (PDFField.prototype.updateWidgetAppearanceWithFont = function (
                widget,
                font,
                _a
              ) {
                var normal = _a.normal,
                  rollover = _a.rollover,
                  down = _a.down
                this.updateWidgetAppearances(widget, {
                  normal: this.createAppearanceStream(widget, normal, font),
                  rollover:
                    rollover &&
                    this.createAppearanceStream(widget, rollover, font),
                  down: down && this.createAppearanceStream(widget, down, font),
                })
              }),
              (PDFField.prototype.updateOnOffWidgetAppearance = function (
                widget,
                onValue,
                _a
              ) {
                var normal = _a.normal,
                  rollover = _a.rollover,
                  down = _a.down
                this.updateWidgetAppearances(widget, {
                  normal: this.createAppearanceDict(widget, normal, onValue),
                  rollover:
                    rollover &&
                    this.createAppearanceDict(widget, rollover, onValue),
                  down:
                    down && this.createAppearanceDict(widget, down, onValue),
                })
              }),
              (PDFField.prototype.updateWidgetAppearances = function (
                widget,
                _a
              ) {
                var normal = _a.normal,
                  rollover = _a.rollover,
                  down = _a.down
                ;(widget.setNormalAppearance(normal),
                  rollover
                    ? widget.setRolloverAppearance(rollover)
                    : widget.removeRolloverAppearance(),
                  down
                    ? widget.setDownAppearance(down)
                    : widget.removeDownAppearance())
              }),
              (PDFField.prototype.createAppearanceStream = function (
                widget,
                appearance,
                font
              ) {
                var _a,
                  context = this.acroField.dict.context,
                  _b = widget.getRectangle(),
                  width = _b.width,
                  height = _b.height,
                  Resources = font && {
                    Font: ((_a = {}), (_a[font.name] = font.ref), _a),
                  },
                  stream = context.formXObject(appearance, {
                    Resources,
                    BBox: context.obj([0, 0, width, height]),
                    Matrix: context.obj([1, 0, 0, 1, 0, 0]),
                  })
                return context.register(stream)
              }),
              (PDFField.prototype.createImageAppearanceStream = function (
                widget,
                image,
                alignment
              ) {
                var _a,
                  _b,
                  context = this.acroField.dict.context,
                  rectangle = widget.getRectangle(),
                  ap = widget.getAppearanceCharacteristics(),
                  bs = widget.getBorderStyle(),
                  borderWidth =
                    null !== (_b = null == bs ? void 0 : bs.getWidth()) &&
                    void 0 !== _b
                      ? _b
                      : 0,
                  rotation = reduceRotation(
                    null == ap ? void 0 : ap.getRotation()
                  ),
                  rotate = rotateInPlace(
                    __assign(__assign({}, rectangle), { rotation })
                  ),
                  adj = adjustDimsForRotation(rectangle, rotation),
                  imageDims = image.scaleToFit(
                    adj.width - 2 * borderWidth,
                    adj.height - 2 * borderWidth
                  ),
                  options = {
                    x: borderWidth,
                    y: borderWidth,
                    width: imageDims.width,
                    height: imageDims.height,
                    rotate: degrees(0),
                    xSkew: degrees(0),
                    ySkew: degrees(0),
                  }
                alignment === ImageAlignment.Center
                  ? ((options.x +=
                      (adj.width - 2 * borderWidth) / 2 - imageDims.width / 2),
                    (options.y +=
                      (adj.height - 2 * borderWidth) / 2 -
                      imageDims.height / 2))
                  : alignment === ImageAlignment.Right &&
                    ((options.x = adj.width - borderWidth - imageDims.width),
                    (options.y = adj.height - borderWidth - imageDims.height))
                var imageName = this.doc.context.addRandomSuffix('Image', 10),
                  appearance = __spreadArrays(
                    rotate,
                    drawImage(imageName, options)
                  ),
                  Resources = {
                    XObject: ((_a = {}), (_a[imageName] = image.ref), _a),
                  },
                  stream = context.formXObject(appearance, {
                    Resources,
                    BBox: context.obj([
                      0,
                      0,
                      rectangle.width,
                      rectangle.height,
                    ]),
                    Matrix: context.obj([1, 0, 0, 1, 0, 0]),
                  })
                return context.register(stream)
              }),
              (PDFField.prototype.createAppearanceDict = function (
                widget,
                appearance,
                onValue
              ) {
                var context = this.acroField.dict.context,
                  onStreamRef = this.createAppearanceStream(
                    widget,
                    appearance.on
                  ),
                  offStreamRef = this.createAppearanceStream(
                    widget,
                    appearance.off
                  ),
                  appearanceDict = context.obj({})
                return (
                  appearanceDict.set(onValue, onStreamRef),
                  appearanceDict.set(objects_PDFName.of('Off'), offStreamRef),
                  appearanceDict
                )
              }),
              PDFField
            )
          })()
        const form_PDFField = PDFField
        var PDFCheckBox = (function (_super) {
          function PDFCheckBox(acroCheckBox, ref, doc) {
            var _this = _super.call(this, acroCheckBox, ref, doc) || this
            return (
              validators_assertIs(acroCheckBox, 'acroCheckBox', [
                [acroform_PDFAcroCheckBox, 'PDFAcroCheckBox'],
              ]),
              (_this.acroField = acroCheckBox),
              _this
            )
          }
          return (
            __extends(PDFCheckBox, _super),
            (PDFCheckBox.prototype.check = function () {
              var _a,
                onValue =
                  null !== (_a = this.acroField.getOnValue()) && void 0 !== _a
                    ? _a
                    : objects_PDFName.of('Yes')
              ;(this.markAsDirty(), this.acroField.setValue(onValue))
            }),
            (PDFCheckBox.prototype.uncheck = function () {
              ;(this.markAsDirty(),
                this.acroField.setValue(objects_PDFName.of('Off')))
            }),
            (PDFCheckBox.prototype.isChecked = function () {
              var onValue = this.acroField.getOnValue()
              return !!onValue && onValue === this.acroField.getValue()
            }),
            (PDFCheckBox.prototype.addToPage = function (page, options) {
              var _a, _b, _c, _d, _e, _f
              ;(validators_assertIs(page, 'page', [[api_PDFPage, 'PDFPage']]),
                assertFieldAppearanceOptions(options),
                options || (options = {}),
                'textColor' in options || (options.textColor = rgb(0, 0, 0)),
                'backgroundColor' in options ||
                  (options.backgroundColor = rgb(1, 1, 1)),
                'borderColor' in options ||
                  (options.borderColor = rgb(0, 0, 0)),
                'borderWidth' in options || (options.borderWidth = 1))
              var widget = this.createWidget({
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : 0,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : 0,
                  width:
                    null !== (_c = options.width) && void 0 !== _c ? _c : 50,
                  height:
                    null !== (_d = options.height) && void 0 !== _d ? _d : 50,
                  textColor: options.textColor,
                  backgroundColor: options.backgroundColor,
                  borderColor: options.borderColor,
                  borderWidth:
                    null !== (_e = options.borderWidth) && void 0 !== _e
                      ? _e
                      : 0,
                  rotate:
                    null !== (_f = options.rotate) && void 0 !== _f
                      ? _f
                      : degrees(0),
                  hidden: options.hidden,
                  page: page.ref,
                }),
                widgetRef = this.doc.context.register(widget.dict)
              ;(this.acroField.addWidget(widgetRef),
                widget.setAppearanceState(objects_PDFName.of('Off')),
                this.updateWidgetAppearance(widget, objects_PDFName.of('Yes')),
                page.node.addAnnot(widgetRef))
            }),
            (PDFCheckBox.prototype.needsAppearancesUpdate = function () {
              for (
                var _a,
                  widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  state = widget.getAppearanceState(),
                  normal =
                    null === (_a = widget.getAppearances()) || void 0 === _a
                      ? void 0
                      : _a.normal
                if (!(normal instanceof objects_PDFDict)) return !0
                if (state && !normal.has(state)) return !0
              }
              return !1
            }),
            (PDFCheckBox.prototype.defaultUpdateAppearances = function () {
              this.updateAppearances()
            }),
            (PDFCheckBox.prototype.updateAppearances = function (provider) {
              var _a
              assertOrUndefined(provider, 'provider', [Function])
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  onValue =
                    null !== (_a = widget.getOnValue()) && void 0 !== _a
                      ? _a
                      : objects_PDFName.of('Yes')
                onValue &&
                  this.updateWidgetAppearance(widget, onValue, provider)
              }
              this.markAsClean()
            }),
            (PDFCheckBox.prototype.updateWidgetAppearance = function (
              widget,
              onValue,
              provider
            ) {
              var appearances = normalizeAppearance(
                (null != provider
                  ? provider
                  : defaultCheckBoxAppearanceProvider)(this, widget)
              )
              this.updateOnOffWidgetAppearance(widget, onValue, appearances)
            }),
            (PDFCheckBox.of = function (acroCheckBox, ref, doc) {
              return new PDFCheckBox(acroCheckBox, ref, doc)
            }),
            PDFCheckBox
          )
        })(form_PDFField)
        const form_PDFCheckBox = PDFCheckBox
        var PDFDropdown = (function (_super) {
          function PDFDropdown(acroComboBox, ref, doc) {
            var _this = _super.call(this, acroComboBox, ref, doc) || this
            return (
              validators_assertIs(acroComboBox, 'acroComboBox', [
                [acroform_PDFAcroComboBox, 'PDFAcroComboBox'],
              ]),
              (_this.acroField = acroComboBox),
              _this
            )
          }
          return (
            __extends(PDFDropdown, _super),
            (PDFDropdown.prototype.getOptions = function () {
              for (
                var rawOptions = this.acroField.getOptions(),
                  options = new Array(rawOptions.length),
                  idx = 0,
                  len = options.length;
                idx < len;
                idx++
              ) {
                var _a = rawOptions[idx],
                  display = _a.display,
                  value = _a.value
                options[idx] = (null != display ? display : value).decodeText()
              }
              return options
            }),
            (PDFDropdown.prototype.getSelected = function () {
              for (
                var values = this.acroField.getValues(),
                  selected = new Array(values.length),
                  idx = 0,
                  len = values.length;
                idx < len;
                idx++
              )
                selected[idx] = values[idx].decodeText()
              return selected
            }),
            (PDFDropdown.prototype.setOptions = function (options) {
              validators_assertIs(options, 'options', [Array])
              for (
                var optionObjects = new Array(options.length),
                  idx = 0,
                  len = options.length;
                idx < len;
                idx++
              )
                optionObjects[idx] = {
                  value: objects_PDFHexString.fromText(options[idx]),
                }
              this.acroField.setOptions(optionObjects)
            }),
            (PDFDropdown.prototype.addOptions = function (options) {
              validators_assertIs(options, 'options', ['string', Array])
              for (
                var optionsArr = Array.isArray(options) ? options : [options],
                  existingOptions = this.acroField.getOptions(),
                  newOptions = new Array(optionsArr.length),
                  idx = 0,
                  len = optionsArr.length;
                idx < len;
                idx++
              )
                newOptions[idx] = {
                  value: objects_PDFHexString.fromText(optionsArr[idx]),
                }
              this.acroField.setOptions(existingOptions.concat(newOptions))
            }),
            (PDFDropdown.prototype.select = function (options, merge) {
              ;(void 0 === merge && (merge = !1),
                validators_assertIs(options, 'options', ['string', Array]),
                validators_assertIs(merge, 'merge', ['boolean']))
              var optionsArr = Array.isArray(options) ? options : [options],
                validOptions = this.getOptions()
              ;(optionsArr.find(function (option) {
                return !validOptions.includes(option)
              }) && this.enableEditing(),
                this.markAsDirty(),
                (optionsArr.length > 1 || (1 === optionsArr.length && merge)) &&
                  this.enableMultiselect())
              for (
                var values = new Array(optionsArr.length),
                  idx = 0,
                  len = optionsArr.length;
                idx < len;
                idx++
              )
                values[idx] = objects_PDFHexString.fromText(optionsArr[idx])
              if (merge) {
                var existingValues = this.acroField.getValues()
                this.acroField.setValues(existingValues.concat(values))
              } else this.acroField.setValues(values)
            }),
            (PDFDropdown.prototype.clear = function () {
              ;(this.markAsDirty(), this.acroField.setValues([]))
            }),
            (PDFDropdown.prototype.setFontSize = function (fontSize) {
              ;(assertPositive(fontSize, 'fontSize'),
                this.acroField.setFontSize(fontSize),
                this.markAsDirty())
            }),
            (PDFDropdown.prototype.isEditable = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.Edit)
            }),
            (PDFDropdown.prototype.enableEditing = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Edit, !0)
            }),
            (PDFDropdown.prototype.disableEditing = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Edit, !1)
            }),
            (PDFDropdown.prototype.isSorted = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.Sort)
            }),
            (PDFDropdown.prototype.enableSorting = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Sort, !0)
            }),
            (PDFDropdown.prototype.disableSorting = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Sort, !1)
            }),
            (PDFDropdown.prototype.isMultiselect = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect)
            }),
            (PDFDropdown.prototype.enableMultiselect = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, !0)
            }),
            (PDFDropdown.prototype.disableMultiselect = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, !1)
            }),
            (PDFDropdown.prototype.isSpellChecked = function () {
              return !this.acroField.hasFlag(AcroChoiceFlags.DoNotSpellCheck)
            }),
            (PDFDropdown.prototype.enableSpellChecking = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, !1)
            }),
            (PDFDropdown.prototype.disableSpellChecking = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, !0)
            }),
            (PDFDropdown.prototype.isSelectOnClick = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange)
            }),
            (PDFDropdown.prototype.enableSelectOnClick = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, !0)
            }),
            (PDFDropdown.prototype.disableSelectOnClick = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, !1)
            }),
            (PDFDropdown.prototype.addToPage = function (page, options) {
              var _a, _b, _c, _d, _e, _f, _g
              ;(validators_assertIs(page, 'page', [[api_PDFPage, 'PDFPage']]),
                assertFieldAppearanceOptions(options),
                options || (options = {}),
                'textColor' in options || (options.textColor = rgb(0, 0, 0)),
                'backgroundColor' in options ||
                  (options.backgroundColor = rgb(1, 1, 1)),
                'borderColor' in options ||
                  (options.borderColor = rgb(0, 0, 0)),
                'borderWidth' in options || (options.borderWidth = 1))
              var widget = this.createWidget({
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : 0,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : 0,
                  width:
                    null !== (_c = options.width) && void 0 !== _c ? _c : 200,
                  height:
                    null !== (_d = options.height) && void 0 !== _d ? _d : 50,
                  textColor: options.textColor,
                  backgroundColor: options.backgroundColor,
                  borderColor: options.borderColor,
                  borderWidth:
                    null !== (_e = options.borderWidth) && void 0 !== _e
                      ? _e
                      : 0,
                  rotate:
                    null !== (_f = options.rotate) && void 0 !== _f
                      ? _f
                      : degrees(0),
                  hidden: options.hidden,
                  page: page.ref,
                }),
                widgetRef = this.doc.context.register(widget.dict)
              this.acroField.addWidget(widgetRef)
              var font =
                null !== (_g = options.font) && void 0 !== _g
                  ? _g
                  : this.doc.getForm().getDefaultFont()
              ;(this.updateWidgetAppearance(widget, font),
                page.node.addAnnot(widgetRef))
            }),
            (PDFDropdown.prototype.needsAppearancesUpdate = function () {
              var _a
              if (this.isDirty()) return !0
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                if (
                  !(
                    (null === (_a = widgets[idx].getAppearances()) ||
                    void 0 === _a
                      ? void 0
                      : _a.normal) instanceof objects_PDFStream
                  )
                )
                  return !0
              }
              return !1
            }),
            (PDFDropdown.prototype.defaultUpdateAppearances = function (font) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                this.updateAppearances(font))
            }),
            (PDFDropdown.prototype.updateAppearances = function (
              font,
              provider
            ) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                assertOrUndefined(provider, 'provider', [Function]))
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx]
                this.updateWidgetAppearance(widget, font, provider)
              }
              this.markAsClean()
            }),
            (PDFDropdown.prototype.updateWidgetAppearance = function (
              widget,
              font,
              provider
            ) {
              var appearances = normalizeAppearance(
                (null != provider
                  ? provider
                  : defaultDropdownAppearanceProvider)(this, widget, font)
              )
              this.updateWidgetAppearanceWithFont(widget, font, appearances)
            }),
            (PDFDropdown.of = function (acroComboBox, ref, doc) {
              return new PDFDropdown(acroComboBox, ref, doc)
            }),
            PDFDropdown
          )
        })(form_PDFField)
        const form_PDFDropdown = PDFDropdown
        var PDFOptionList = (function (_super) {
          function PDFOptionList(acroListBox, ref, doc) {
            var _this = _super.call(this, acroListBox, ref, doc) || this
            return (
              validators_assertIs(acroListBox, 'acroListBox', [
                [acroform_PDFAcroListBox, 'PDFAcroListBox'],
              ]),
              (_this.acroField = acroListBox),
              _this
            )
          }
          return (
            __extends(PDFOptionList, _super),
            (PDFOptionList.prototype.getOptions = function () {
              for (
                var rawOptions = this.acroField.getOptions(),
                  options = new Array(rawOptions.length),
                  idx = 0,
                  len = options.length;
                idx < len;
                idx++
              ) {
                var _a = rawOptions[idx],
                  display = _a.display,
                  value = _a.value
                options[idx] = (null != display ? display : value).decodeText()
              }
              return options
            }),
            (PDFOptionList.prototype.getSelected = function () {
              for (
                var values = this.acroField.getValues(),
                  selected = new Array(values.length),
                  idx = 0,
                  len = values.length;
                idx < len;
                idx++
              )
                selected[idx] = values[idx].decodeText()
              return selected
            }),
            (PDFOptionList.prototype.setOptions = function (options) {
              ;(validators_assertIs(options, 'options', [Array]),
                this.markAsDirty())
              for (
                var optionObjects = new Array(options.length),
                  idx = 0,
                  len = options.length;
                idx < len;
                idx++
              )
                optionObjects[idx] = {
                  value: objects_PDFHexString.fromText(options[idx]),
                }
              this.acroField.setOptions(optionObjects)
            }),
            (PDFOptionList.prototype.addOptions = function (options) {
              ;(validators_assertIs(options, 'options', ['string', Array]),
                this.markAsDirty())
              for (
                var optionsArr = Array.isArray(options) ? options : [options],
                  existingOptions = this.acroField.getOptions(),
                  newOptions = new Array(optionsArr.length),
                  idx = 0,
                  len = optionsArr.length;
                idx < len;
                idx++
              )
                newOptions[idx] = {
                  value: objects_PDFHexString.fromText(optionsArr[idx]),
                }
              this.acroField.setOptions(existingOptions.concat(newOptions))
            }),
            (PDFOptionList.prototype.select = function (options, merge) {
              ;(void 0 === merge && (merge = !1),
                validators_assertIs(options, 'options', ['string', Array]),
                validators_assertIs(merge, 'merge', ['boolean']))
              var optionsArr = Array.isArray(options) ? options : [options]
              ;(!(function (values, valueName, allowedValues) {
                Array.isArray(allowedValues) ||
                  (allowedValues = objects_values(allowedValues))
                for (var idx = 0, len = values.length; idx < len; idx++)
                  assertIsOneOf(values[idx], valueName, allowedValues)
              })(optionsArr, 'option', this.getOptions()),
                this.markAsDirty(),
                (optionsArr.length > 1 || (1 === optionsArr.length && merge)) &&
                  this.enableMultiselect())
              for (
                var values = new Array(optionsArr.length),
                  idx = 0,
                  len = optionsArr.length;
                idx < len;
                idx++
              )
                values[idx] = objects_PDFHexString.fromText(optionsArr[idx])
              if (merge) {
                var existingValues = this.acroField.getValues()
                this.acroField.setValues(existingValues.concat(values))
              } else this.acroField.setValues(values)
            }),
            (PDFOptionList.prototype.clear = function () {
              ;(this.markAsDirty(), this.acroField.setValues([]))
            }),
            (PDFOptionList.prototype.setFontSize = function (fontSize) {
              ;(assertPositive(fontSize, 'fontSize'),
                this.acroField.setFontSize(fontSize),
                this.markAsDirty())
            }),
            (PDFOptionList.prototype.isSorted = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.Sort)
            }),
            (PDFOptionList.prototype.enableSorting = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Sort, !0)
            }),
            (PDFOptionList.prototype.disableSorting = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.Sort, !1)
            }),
            (PDFOptionList.prototype.isMultiselect = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect)
            }),
            (PDFOptionList.prototype.enableMultiselect = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, !0)
            }),
            (PDFOptionList.prototype.disableMultiselect = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, !1)
            }),
            (PDFOptionList.prototype.isSelectOnClick = function () {
              return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange)
            }),
            (PDFOptionList.prototype.enableSelectOnClick = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, !0)
            }),
            (PDFOptionList.prototype.disableSelectOnClick = function () {
              this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, !1)
            }),
            (PDFOptionList.prototype.addToPage = function (page, options) {
              var _a, _b, _c, _d, _e, _f, _g
              ;(validators_assertIs(page, 'page', [[api_PDFPage, 'PDFPage']]),
                assertFieldAppearanceOptions(options),
                options || (options = {}),
                'textColor' in options || (options.textColor = rgb(0, 0, 0)),
                'backgroundColor' in options ||
                  (options.backgroundColor = rgb(1, 1, 1)),
                'borderColor' in options ||
                  (options.borderColor = rgb(0, 0, 0)),
                'borderWidth' in options || (options.borderWidth = 1))
              var widget = this.createWidget({
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : 0,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : 0,
                  width:
                    null !== (_c = options.width) && void 0 !== _c ? _c : 200,
                  height:
                    null !== (_d = options.height) && void 0 !== _d ? _d : 100,
                  textColor: options.textColor,
                  backgroundColor: options.backgroundColor,
                  borderColor: options.borderColor,
                  borderWidth:
                    null !== (_e = options.borderWidth) && void 0 !== _e
                      ? _e
                      : 0,
                  rotate:
                    null !== (_f = options.rotate) && void 0 !== _f
                      ? _f
                      : degrees(0),
                  hidden: options.hidden,
                  page: page.ref,
                }),
                widgetRef = this.doc.context.register(widget.dict)
              this.acroField.addWidget(widgetRef)
              var font =
                null !== (_g = options.font) && void 0 !== _g
                  ? _g
                  : this.doc.getForm().getDefaultFont()
              ;(this.updateWidgetAppearance(widget, font),
                page.node.addAnnot(widgetRef))
            }),
            (PDFOptionList.prototype.needsAppearancesUpdate = function () {
              var _a
              if (this.isDirty()) return !0
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                if (
                  !(
                    (null === (_a = widgets[idx].getAppearances()) ||
                    void 0 === _a
                      ? void 0
                      : _a.normal) instanceof objects_PDFStream
                  )
                )
                  return !0
              }
              return !1
            }),
            (PDFOptionList.prototype.defaultUpdateAppearances = function (
              font
            ) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                this.updateAppearances(font))
            }),
            (PDFOptionList.prototype.updateAppearances = function (
              font,
              provider
            ) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                assertOrUndefined(provider, 'provider', [Function]))
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx]
                this.updateWidgetAppearance(widget, font, provider)
              }
              this.markAsClean()
            }),
            (PDFOptionList.prototype.updateWidgetAppearance = function (
              widget,
              font,
              provider
            ) {
              var appearances = normalizeAppearance(
                (null != provider
                  ? provider
                  : defaultOptionListAppearanceProvider)(this, widget, font)
              )
              this.updateWidgetAppearanceWithFont(widget, font, appearances)
            }),
            (PDFOptionList.of = function (acroListBox, ref, doc) {
              return new PDFOptionList(acroListBox, ref, doc)
            }),
            PDFOptionList
          )
        })(form_PDFField)
        const form_PDFOptionList = PDFOptionList
        var PDFRadioGroup = (function (_super) {
          function PDFRadioGroup(acroRadioButton, ref, doc) {
            var _this = _super.call(this, acroRadioButton, ref, doc) || this
            return (
              validators_assertIs(acroRadioButton, 'acroRadioButton', [
                [acroform_PDFAcroRadioButton, 'PDFAcroRadioButton'],
              ]),
              (_this.acroField = acroRadioButton),
              _this
            )
          }
          return (
            __extends(PDFRadioGroup, _super),
            (PDFRadioGroup.prototype.getOptions = function () {
              var exportValues = this.acroField.getExportValues()
              if (exportValues) {
                for (
                  var exportOptions = new Array(exportValues.length),
                    idx = 0,
                    len = exportValues.length;
                  idx < len;
                  idx++
                )
                  exportOptions[idx] = exportValues[idx].decodeText()
                return exportOptions
              }
              var onValues = this.acroField.getOnValues(),
                onOptions = new Array(onValues.length)
              for (idx = 0, len = onOptions.length; idx < len; idx++)
                onOptions[idx] = onValues[idx].decodeText()
              return onOptions
            }),
            (PDFRadioGroup.prototype.getSelected = function () {
              var value = this.acroField.getValue()
              if (value !== objects_PDFName.of('Off')) {
                var exportValues = this.acroField.getExportValues()
                if (exportValues)
                  for (
                    var onValues = this.acroField.getOnValues(),
                      idx = 0,
                      len = onValues.length;
                    idx < len;
                    idx++
                  )
                    if (onValues[idx] === value)
                      return exportValues[idx].decodeText()
                return value.decodeText()
              }
            }),
            (PDFRadioGroup.prototype.select = function (option) {
              validators_assertIs(option, 'option', ['string'])
              var validOptions = this.getOptions()
              ;(assertIsOneOf(option, 'option', validOptions),
                this.markAsDirty())
              var onValues = this.acroField.getOnValues(),
                exportValues = this.acroField.getExportValues()
              if (exportValues)
                for (var idx = 0, len = exportValues.length; idx < len; idx++)
                  exportValues[idx].decodeText() === option &&
                    this.acroField.setValue(onValues[idx])
              else
                for (idx = 0, len = onValues.length; idx < len; idx++) {
                  var value = onValues[idx]
                  value.decodeText() === option &&
                    this.acroField.setValue(value)
                }
            }),
            (PDFRadioGroup.prototype.clear = function () {
              ;(this.markAsDirty(),
                this.acroField.setValue(objects_PDFName.of('Off')))
            }),
            (PDFRadioGroup.prototype.isOffToggleable = function () {
              return !this.acroField.hasFlag(AcroButtonFlags.NoToggleToOff)
            }),
            (PDFRadioGroup.prototype.enableOffToggling = function () {
              this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, !1)
            }),
            (PDFRadioGroup.prototype.disableOffToggling = function () {
              this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, !0)
            }),
            (PDFRadioGroup.prototype.isMutuallyExclusive = function () {
              return !this.acroField.hasFlag(AcroButtonFlags.RadiosInUnison)
            }),
            (PDFRadioGroup.prototype.enableMutualExclusion = function () {
              this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, !1)
            }),
            (PDFRadioGroup.prototype.disableMutualExclusion = function () {
              this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, !0)
            }),
            (PDFRadioGroup.prototype.addOptionToPage = function (
              option,
              page,
              options
            ) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j
              ;(validators_assertIs(option, 'option', ['string']),
                validators_assertIs(page, 'page', [[api_PDFPage, 'PDFPage']]),
                assertFieldAppearanceOptions(options))
              var widget = this.createWidget({
                  x:
                    null !== (_a = null == options ? void 0 : options.x) &&
                    void 0 !== _a
                      ? _a
                      : 0,
                  y:
                    null !== (_b = null == options ? void 0 : options.y) &&
                    void 0 !== _b
                      ? _b
                      : 0,
                  width:
                    null !== (_c = null == options ? void 0 : options.width) &&
                    void 0 !== _c
                      ? _c
                      : 50,
                  height:
                    null !== (_d = null == options ? void 0 : options.height) &&
                    void 0 !== _d
                      ? _d
                      : 50,
                  textColor:
                    null !==
                      (_e = null == options ? void 0 : options.textColor) &&
                    void 0 !== _e
                      ? _e
                      : rgb(0, 0, 0),
                  backgroundColor:
                    null !==
                      (_f =
                        null == options ? void 0 : options.backgroundColor) &&
                    void 0 !== _f
                      ? _f
                      : rgb(1, 1, 1),
                  borderColor:
                    null !==
                      (_g = null == options ? void 0 : options.borderColor) &&
                    void 0 !== _g
                      ? _g
                      : rgb(0, 0, 0),
                  borderWidth:
                    null !==
                      (_h = null == options ? void 0 : options.borderWidth) &&
                    void 0 !== _h
                      ? _h
                      : 1,
                  rotate:
                    null !== (_j = null == options ? void 0 : options.rotate) &&
                    void 0 !== _j
                      ? _j
                      : degrees(0),
                  hidden: null == options ? void 0 : options.hidden,
                  page: page.ref,
                }),
                widgetRef = this.doc.context.register(widget.dict),
                apStateValue = this.acroField.addWidgetWithOpt(
                  widgetRef,
                  objects_PDFHexString.fromText(option),
                  !this.isMutuallyExclusive()
                )
              ;(widget.setAppearanceState(objects_PDFName.of('Off')),
                this.updateWidgetAppearance(widget, apStateValue),
                page.node.addAnnot(widgetRef))
            }),
            (PDFRadioGroup.prototype.needsAppearancesUpdate = function () {
              for (
                var _a,
                  widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  state = widget.getAppearanceState(),
                  normal =
                    null === (_a = widget.getAppearances()) || void 0 === _a
                      ? void 0
                      : _a.normal
                if (!(normal instanceof objects_PDFDict)) return !0
                if (state && !normal.has(state)) return !0
              }
              return !1
            }),
            (PDFRadioGroup.prototype.defaultUpdateAppearances = function () {
              this.updateAppearances()
            }),
            (PDFRadioGroup.prototype.updateAppearances = function (provider) {
              assertOrUndefined(provider, 'provider', [Function])
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  onValue = widget.getOnValue()
                onValue &&
                  this.updateWidgetAppearance(widget, onValue, provider)
              }
            }),
            (PDFRadioGroup.prototype.updateWidgetAppearance = function (
              widget,
              onValue,
              provider
            ) {
              var appearances = normalizeAppearance(
                (null != provider
                  ? provider
                  : defaultRadioGroupAppearanceProvider)(this, widget)
              )
              this.updateOnOffWidgetAppearance(widget, onValue, appearances)
            }),
            (PDFRadioGroup.of = function (acroRadioButton, ref, doc) {
              return new PDFRadioGroup(acroRadioButton, ref, doc)
            }),
            PDFRadioGroup
          )
        })(form_PDFField)
        const form_PDFRadioGroup = PDFRadioGroup
        const form_PDFSignature = (function (_super) {
          function PDFSignature(acroSignature, ref, doc) {
            var _this = _super.call(this, acroSignature, ref, doc) || this
            return (
              validators_assertIs(acroSignature, 'acroSignature', [
                [acroform_PDFAcroSignature, 'PDFAcroSignature'],
              ]),
              (_this.acroField = acroSignature),
              _this
            )
          }
          return (
            __extends(PDFSignature, _super),
            (PDFSignature.prototype.needsAppearancesUpdate = function () {
              return !1
            }),
            (PDFSignature.of = function (acroSignature, ref, doc) {
              return new PDFSignature(acroSignature, ref, doc)
            }),
            PDFSignature
          )
        })(form_PDFField)
        var PDFTextField_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          PDFTextField = (function (_super) {
            function PDFTextField(acroText, ref, doc) {
              var _this = _super.call(this, acroText, ref, doc) || this
              return (
                validators_assertIs(acroText, 'acroText', [
                  [acroform_PDFAcroText, 'PDFAcroText'],
                ]),
                (_this.acroField = acroText),
                _this
              )
            }
            return (
              __extends(PDFTextField, _super),
              (PDFTextField.prototype.getText = function () {
                var value = this.acroField.getValue()
                if (!value && this.isRichFormatted())
                  throw new RichTextFieldReadError(this.getName())
                return null == value ? void 0 : value.decodeText()
              }),
              (PDFTextField.prototype.setText = function (text) {
                assertOrUndefined(text, 'text', ['string'])
                var maxLength = this.getMaxLength()
                if (void 0 !== maxLength && text && text.length > maxLength)
                  throw new ExceededMaxLengthError(
                    text.length,
                    maxLength,
                    this.getName()
                  )
                ;(this.markAsDirty(),
                  this.disableRichFormatting(),
                  text
                    ? this.acroField.setValue(
                        objects_PDFHexString.fromText(text)
                      )
                    : this.acroField.removeValue())
              }),
              (PDFTextField.prototype.getAlignment = function () {
                var quadding = this.acroField.getQuadding()
                return 0 === quadding
                  ? TextAlignment.Left
                  : 1 === quadding
                    ? TextAlignment.Center
                    : 2 === quadding
                      ? TextAlignment.Right
                      : TextAlignment.Left
              }),
              (PDFTextField.prototype.setAlignment = function (alignment) {
                ;(assertIsOneOf(alignment, 'alignment', TextAlignment),
                  this.markAsDirty(),
                  this.acroField.setQuadding(alignment))
              }),
              (PDFTextField.prototype.getMaxLength = function () {
                return this.acroField.getMaxLength()
              }),
              (PDFTextField.prototype.setMaxLength = function (maxLength) {
                if (
                  (assertRangeOrUndefined(
                    maxLength,
                    'maxLength',
                    0,
                    Number.MAX_SAFE_INTEGER
                  ),
                  this.markAsDirty(),
                  void 0 === maxLength)
                )
                  this.acroField.removeMaxLength()
                else {
                  var text = this.getText()
                  if (text && text.length > maxLength)
                    throw new InvalidMaxLengthError(
                      text.length,
                      maxLength,
                      this.getName()
                    )
                  this.acroField.setMaxLength(maxLength)
                }
              }),
              (PDFTextField.prototype.removeMaxLength = function () {
                ;(this.markAsDirty(), this.acroField.removeMaxLength())
              }),
              (PDFTextField.prototype.setImage = function (image) {
                for (
                  var fieldAlignment = this.getAlignment(),
                    alignment =
                      fieldAlignment === TextAlignment.Center
                        ? ImageAlignment.Center
                        : fieldAlignment === TextAlignment.Right
                          ? ImageAlignment.Right
                          : ImageAlignment.Left,
                    widgets = this.acroField.getWidgets(),
                    idx = 0,
                    len = widgets.length;
                  idx < len;
                  idx++
                ) {
                  var widget = widgets[idx],
                    streamRef = this.createImageAppearanceStream(
                      widget,
                      image,
                      alignment
                    )
                  this.updateWidgetAppearances(widget, { normal: streamRef })
                }
                this.markAsClean()
              }),
              (PDFTextField.prototype.setFontSize = function (fontSize) {
                ;(assertPositive(fontSize, 'fontSize'),
                  this.acroField.setFontSize(fontSize),
                  this.markAsDirty())
              }),
              (PDFTextField.prototype.isMultiline = function () {
                return this.acroField.hasFlag(AcroTextFlags.Multiline)
              }),
              (PDFTextField.prototype.enableMultiline = function () {
                ;(this.markAsDirty(),
                  this.acroField.setFlagTo(AcroTextFlags.Multiline, !0))
              }),
              (PDFTextField.prototype.disableMultiline = function () {
                ;(this.markAsDirty(),
                  this.acroField.setFlagTo(AcroTextFlags.Multiline, !1))
              }),
              (PDFTextField.prototype.isPassword = function () {
                return this.acroField.hasFlag(AcroTextFlags.Password)
              }),
              (PDFTextField.prototype.enablePassword = function () {
                this.acroField.setFlagTo(AcroTextFlags.Password, !0)
              }),
              (PDFTextField.prototype.disablePassword = function () {
                this.acroField.setFlagTo(AcroTextFlags.Password, !1)
              }),
              (PDFTextField.prototype.isFileSelector = function () {
                return this.acroField.hasFlag(AcroTextFlags.FileSelect)
              }),
              (PDFTextField.prototype.enableFileSelection = function () {
                this.acroField.setFlagTo(AcroTextFlags.FileSelect, !0)
              }),
              (PDFTextField.prototype.disableFileSelection = function () {
                this.acroField.setFlagTo(AcroTextFlags.FileSelect, !1)
              }),
              (PDFTextField.prototype.isSpellChecked = function () {
                return !this.acroField.hasFlag(AcroTextFlags.DoNotSpellCheck)
              }),
              (PDFTextField.prototype.enableSpellChecking = function () {
                this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, !1)
              }),
              (PDFTextField.prototype.disableSpellChecking = function () {
                this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, !0)
              }),
              (PDFTextField.prototype.isScrollable = function () {
                return !this.acroField.hasFlag(AcroTextFlags.DoNotScroll)
              }),
              (PDFTextField.prototype.enableScrolling = function () {
                this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, !1)
              }),
              (PDFTextField.prototype.disableScrolling = function () {
                this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, !0)
              }),
              (PDFTextField.prototype.isCombed = function () {
                return (
                  this.acroField.hasFlag(AcroTextFlags.Comb) &&
                  !this.isMultiline() &&
                  !this.isPassword() &&
                  !this.isFileSelector() &&
                  void 0 !== this.getMaxLength()
                )
              }),
              (PDFTextField.prototype.enableCombing = function () {
                if (void 0 === this.getMaxLength()) {
                  PDFTextField_console.warn(
                    'PDFTextFields must have a max length in order to be combed'
                  )
                }
                ;(this.markAsDirty(),
                  this.disableMultiline(),
                  this.disablePassword(),
                  this.disableFileSelection(),
                  this.acroField.setFlagTo(AcroTextFlags.Comb, !0))
              }),
              (PDFTextField.prototype.disableCombing = function () {
                ;(this.markAsDirty(),
                  this.acroField.setFlagTo(AcroTextFlags.Comb, !1))
              }),
              (PDFTextField.prototype.isRichFormatted = function () {
                return this.acroField.hasFlag(AcroTextFlags.RichText)
              }),
              (PDFTextField.prototype.enableRichFormatting = function () {
                this.acroField.setFlagTo(AcroTextFlags.RichText, !0)
              }),
              (PDFTextField.prototype.disableRichFormatting = function () {
                this.acroField.setFlagTo(AcroTextFlags.RichText, !1)
              }),
              (PDFTextField.prototype.addToPage = function (page, options) {
                var _a, _b, _c, _d, _e, _f, _g
                ;(validators_assertIs(page, 'page', [[api_PDFPage, 'PDFPage']]),
                  assertFieldAppearanceOptions(options),
                  options || (options = {}),
                  'textColor' in options || (options.textColor = rgb(0, 0, 0)),
                  'backgroundColor' in options ||
                    (options.backgroundColor = rgb(1, 1, 1)),
                  'borderColor' in options ||
                    (options.borderColor = rgb(0, 0, 0)),
                  'borderWidth' in options || (options.borderWidth = 1))
                var widget = this.createWidget({
                    x: null !== (_a = options.x) && void 0 !== _a ? _a : 0,
                    y: null !== (_b = options.y) && void 0 !== _b ? _b : 0,
                    width:
                      null !== (_c = options.width) && void 0 !== _c ? _c : 200,
                    height:
                      null !== (_d = options.height) && void 0 !== _d ? _d : 50,
                    textColor: options.textColor,
                    backgroundColor: options.backgroundColor,
                    borderColor: options.borderColor,
                    borderWidth:
                      null !== (_e = options.borderWidth) && void 0 !== _e
                        ? _e
                        : 0,
                    rotate:
                      null !== (_f = options.rotate) && void 0 !== _f
                        ? _f
                        : degrees(0),
                    hidden: options.hidden,
                    page: page.ref,
                  }),
                  widgetRef = this.doc.context.register(widget.dict)
                this.acroField.addWidget(widgetRef)
                var font =
                  null !== (_g = options.font) && void 0 !== _g
                    ? _g
                    : this.doc.getForm().getDefaultFont()
                ;(this.updateWidgetAppearance(widget, font),
                  page.node.addAnnot(widgetRef))
              }),
              (PDFTextField.prototype.needsAppearancesUpdate = function () {
                var _a
                if (this.isDirty()) return !0
                for (
                  var widgets = this.acroField.getWidgets(),
                    idx = 0,
                    len = widgets.length;
                  idx < len;
                  idx++
                ) {
                  if (
                    !(
                      (null === (_a = widgets[idx].getAppearances()) ||
                      void 0 === _a
                        ? void 0
                        : _a.normal) instanceof objects_PDFStream
                    )
                  )
                    return !0
                }
                return !1
              }),
              (PDFTextField.prototype.defaultUpdateAppearances = function (
                font
              ) {
                ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                  this.updateAppearances(font))
              }),
              (PDFTextField.prototype.updateAppearances = function (
                font,
                provider
              ) {
                ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                  assertOrUndefined(provider, 'provider', [Function]))
                for (
                  var widgets = this.acroField.getWidgets(),
                    idx = 0,
                    len = widgets.length;
                  idx < len;
                  idx++
                ) {
                  var widget = widgets[idx]
                  this.updateWidgetAppearance(widget, font, provider)
                }
                this.markAsClean()
              }),
              (PDFTextField.prototype.updateWidgetAppearance = function (
                widget,
                font,
                provider
              ) {
                var appearances = normalizeAppearance(
                  (null != provider
                    ? provider
                    : defaultTextFieldAppearanceProvider)(this, widget, font)
                )
                this.updateWidgetAppearanceWithFont(widget, font, appearances)
              }),
              (PDFTextField.of = function (acroText, ref, doc) {
                return new PDFTextField(acroText, ref, doc)
              }),
              PDFTextField
            )
          })(form_PDFField)
        const form_PDFTextField = PDFTextField
        var StandardFonts
        !(function (StandardFonts) {
          ;((StandardFonts.Courier = 'Courier'),
            (StandardFonts.CourierBold = 'Courier-Bold'),
            (StandardFonts.CourierOblique = 'Courier-Oblique'),
            (StandardFonts.CourierBoldOblique = 'Courier-BoldOblique'),
            (StandardFonts.Helvetica = 'Helvetica'),
            (StandardFonts.HelveticaBold = 'Helvetica-Bold'),
            (StandardFonts.HelveticaOblique = 'Helvetica-Oblique'),
            (StandardFonts.HelveticaBoldOblique = 'Helvetica-BoldOblique'),
            (StandardFonts.TimesRoman = 'Times-Roman'),
            (StandardFonts.TimesRomanBold = 'Times-Bold'),
            (StandardFonts.TimesRomanItalic = 'Times-Italic'),
            (StandardFonts.TimesRomanBoldItalic = 'Times-BoldItalic'),
            (StandardFonts.Symbol = 'Symbol'),
            (StandardFonts.ZapfDingbats = 'ZapfDingbats'))
        })(StandardFonts || (StandardFonts = {}))
        var PDFForm = (function () {
          function PDFForm(acroForm, doc) {
            var _this = this
            ;((this.embedDefaultFont = function () {
              return _this.doc.embedStandardFont(StandardFonts.Helvetica)
            }),
              validators_assertIs(acroForm, 'acroForm', [
                [acroform_PDFAcroForm, 'PDFAcroForm'],
              ]),
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ]),
              (this.acroForm = acroForm),
              (this.doc = doc),
              (this.dirtyFields = new Set()),
              (this.defaultFontCache = utils_Cache.populatedBy(
                this.embedDefaultFont
              )))
          }
          return (
            (PDFForm.prototype.hasXFA = function () {
              return this.acroForm.dict.has(objects_PDFName.of('XFA'))
            }),
            (PDFForm.prototype.deleteXFA = function () {
              this.acroForm.dict.delete(objects_PDFName.of('XFA'))
            }),
            (PDFForm.prototype.getFields = function () {
              for (
                var allFields = this.acroForm.getAllFields(),
                  fields = [],
                  idx = 0,
                  len = allFields.length;
                idx < len;
                idx++
              ) {
                var _a = allFields[idx],
                  acroField = _a[0],
                  ref = _a[1],
                  field = convertToPDFField(acroField, ref, this.doc)
                field && fields.push(field)
              }
              return fields
            }),
            (PDFForm.prototype.getFieldMaybe = function (name) {
              validators_assertIs(name, 'name', ['string'])
              for (
                var fields = this.getFields(), idx = 0, len = fields.length;
                idx < len;
                idx++
              ) {
                var field = fields[idx]
                if (field.getName() === name) return field
              }
            }),
            (PDFForm.prototype.getField = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getFieldMaybe(name)
              if (field) return field
              throw new NoSuchFieldError(name)
            }),
            (PDFForm.prototype.getButton = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFButton) return field
              throw new UnexpectedFieldTypeError(name, form_PDFButton, field)
            }),
            (PDFForm.prototype.getCheckBox = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFCheckBox) return field
              throw new UnexpectedFieldTypeError(name, form_PDFCheckBox, field)
            }),
            (PDFForm.prototype.getDropdown = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFDropdown) return field
              throw new UnexpectedFieldTypeError(name, form_PDFDropdown, field)
            }),
            (PDFForm.prototype.getOptionList = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFOptionList) return field
              throw new UnexpectedFieldTypeError(
                name,
                form_PDFOptionList,
                field
              )
            }),
            (PDFForm.prototype.getRadioGroup = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFRadioGroup) return field
              throw new UnexpectedFieldTypeError(
                name,
                form_PDFRadioGroup,
                field
              )
            }),
            (PDFForm.prototype.getSignature = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFSignature) return field
              throw new UnexpectedFieldTypeError(name, form_PDFSignature, field)
            }),
            (PDFForm.prototype.getTextField = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var field = this.getField(name)
              if (field instanceof form_PDFTextField) return field
              throw new UnexpectedFieldTypeError(name, form_PDFTextField, field)
            }),
            (PDFForm.prototype.createButton = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                button = acroform_PDFAcroPushButton.create(this.doc.context)
              return (
                button.setPartialName(nameParts.terminal),
                addFieldToParent(
                  parent,
                  [button, button.ref],
                  nameParts.terminal
                ),
                form_PDFButton.of(button, button.ref, this.doc)
              )
            }),
            (PDFForm.prototype.createCheckBox = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                checkBox = acroform_PDFAcroCheckBox.create(this.doc.context)
              return (
                checkBox.setPartialName(nameParts.terminal),
                addFieldToParent(
                  parent,
                  [checkBox, checkBox.ref],
                  nameParts.terminal
                ),
                form_PDFCheckBox.of(checkBox, checkBox.ref, this.doc)
              )
            }),
            (PDFForm.prototype.createDropdown = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                comboBox = acroform_PDFAcroComboBox.create(this.doc.context)
              return (
                comboBox.setPartialName(nameParts.terminal),
                addFieldToParent(
                  parent,
                  [comboBox, comboBox.ref],
                  nameParts.terminal
                ),
                form_PDFDropdown.of(comboBox, comboBox.ref, this.doc)
              )
            }),
            (PDFForm.prototype.createOptionList = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                listBox = acroform_PDFAcroListBox.create(this.doc.context)
              return (
                listBox.setPartialName(nameParts.terminal),
                addFieldToParent(
                  parent,
                  [listBox, listBox.ref],
                  nameParts.terminal
                ),
                form_PDFOptionList.of(listBox, listBox.ref, this.doc)
              )
            }),
            (PDFForm.prototype.createRadioGroup = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                radioButton = acroform_PDFAcroRadioButton.create(
                  this.doc.context
                )
              return (
                radioButton.setPartialName(nameParts.terminal),
                addFieldToParent(
                  parent,
                  [radioButton, radioButton.ref],
                  nameParts.terminal
                ),
                form_PDFRadioGroup.of(radioButton, radioButton.ref, this.doc)
              )
            }),
            (PDFForm.prototype.createTextField = function (name) {
              validators_assertIs(name, 'name', ['string'])
              var nameParts = splitFieldName(name),
                parent = this.findOrCreateNonTerminals(nameParts.nonTerminal),
                text = acroform_PDFAcroText.create(this.doc.context)
              return (
                text.setPartialName(nameParts.terminal),
                addFieldToParent(parent, [text, text.ref], nameParts.terminal),
                form_PDFTextField.of(text, text.ref, this.doc)
              )
            }),
            (PDFForm.prototype.flatten = function (options) {
              ;(void 0 === options &&
                (options = { updateFieldAppearances: !0 }),
                options.updateFieldAppearances && this.updateFieldAppearances())
              for (
                var fields = this.getFields(), i = 0, lenFields = fields.length;
                i < lenFields;
                i++
              ) {
                for (
                  var field = fields[i],
                    widgets = field.acroField.getWidgets(),
                    j = 0,
                    lenWidgets = widgets.length;
                  j < lenWidgets;
                  j++
                ) {
                  var widget = widgets[j],
                    page = this.findWidgetPage(widget),
                    widgetRef = this.findWidgetAppearanceRef(field, widget),
                    xObjectKey = page.node.newXObject('FlatWidget', widgetRef),
                    rectangle = widget.getRectangle(),
                    operators = __spreadArrays(
                      [
                        operators_pushGraphicsState(),
                        translate(rectangle.x, rectangle.y),
                      ],
                      rotateInPlace(
                        __assign(__assign({}, rectangle), { rotation: 0 })
                      ),
                      [drawObject(xObjectKey), operators_popGraphicsState()]
                    ).filter(Boolean)
                  page.pushOperators.apply(page, operators)
                }
                this.removeField(field)
              }
            }),
            (PDFForm.prototype.removeField = function (field) {
              for (
                var widgets = field.acroField.getWidgets(),
                  pages = new Set(),
                  i = 0,
                  len = widgets.length;
                i < len;
                i++
              ) {
                var widget = widgets[i],
                  widgetRef = this.findWidgetAppearanceRef(field, widget),
                  page = this.findWidgetPage(widget)
                ;(pages.add(page), page.node.removeAnnot(widgetRef))
              }
              ;(pages.forEach(function (page) {
                return page.node.removeAnnot(field.ref)
              }),
                this.acroForm.removeField(field.acroField))
              for (
                var fieldKids = field.acroField.normalizedEntries().Kids,
                  kidsCount = fieldKids.size(),
                  childIndex = 0;
                childIndex < kidsCount;
                childIndex++
              ) {
                var child = fieldKids.get(childIndex)
                child instanceof objects_PDFRef &&
                  this.doc.context.delete(child)
              }
              this.doc.context.delete(field.ref)
            }),
            (PDFForm.prototype.updateFieldAppearances = function (font) {
              ;(assertOrUndefined(font, 'font', [[api_PDFFont, 'PDFFont']]),
                (font = null != font ? font : this.getDefaultFont()))
              for (
                var fields = this.getFields(), idx = 0, len = fields.length;
                idx < len;
                idx++
              ) {
                var field = fields[idx]
                field.needsAppearancesUpdate() &&
                  field.defaultUpdateAppearances(font)
              }
            }),
            (PDFForm.prototype.markFieldAsDirty = function (fieldRef) {
              ;(assertOrUndefined(fieldRef, 'fieldRef', [
                [objects_PDFRef, 'PDFRef'],
              ]),
                this.dirtyFields.add(fieldRef))
            }),
            (PDFForm.prototype.markFieldAsClean = function (fieldRef) {
              ;(assertOrUndefined(fieldRef, 'fieldRef', [
                [objects_PDFRef, 'PDFRef'],
              ]),
                this.dirtyFields.delete(fieldRef))
            }),
            (PDFForm.prototype.fieldIsDirty = function (fieldRef) {
              return (
                assertOrUndefined(fieldRef, 'fieldRef', [
                  [objects_PDFRef, 'PDFRef'],
                ]),
                this.dirtyFields.has(fieldRef)
              )
            }),
            (PDFForm.prototype.getDefaultFont = function () {
              return this.defaultFontCache.access()
            }),
            (PDFForm.prototype.findWidgetPage = function (widget) {
              var pageRef = widget.P(),
                page = this.doc.getPages().find(function (x) {
                  return x.ref === pageRef
                })
              if (void 0 === page) {
                var widgetRef = this.doc.context.getObjectRef(widget.dict)
                if (void 0 === widgetRef)
                  throw new Error('Could not find PDFRef for PDFObject')
                if (
                  void 0 ===
                  (page = this.doc.findPageForAnnotationRef(widgetRef))
                )
                  throw new Error('Could not find page for PDFRef ' + widgetRef)
              }
              return page
            }),
            (PDFForm.prototype.findWidgetAppearanceRef = function (
              field,
              widget
            ) {
              var _a,
                refOrDict = widget.getNormalAppearance()
              if (
                refOrDict instanceof objects_PDFDict &&
                (field instanceof form_PDFCheckBox ||
                  field instanceof form_PDFRadioGroup)
              ) {
                var value = field.acroField.getValue(),
                  ref =
                    null !== (_a = refOrDict.get(value)) && void 0 !== _a
                      ? _a
                      : refOrDict.get(objects_PDFName.of('Off'))
                ref instanceof objects_PDFRef && (refOrDict = ref)
              }
              if (!(refOrDict instanceof objects_PDFRef)) {
                var name_1 = field.getName()
                throw new Error(
                  'Failed to extract appearance ref for: ' + name_1
                )
              }
              return refOrDict
            }),
            (PDFForm.prototype.findOrCreateNonTerminals = function (
              partialNames
            ) {
              for (
                var nonTerminal = [this.acroForm],
                  idx = 0,
                  len = partialNames.length;
                idx < len;
                idx++
              ) {
                var namePart = partialNames[idx]
                if (!namePart) throw new InvalidFieldNamePartError(namePart)
                var parent_1 = nonTerminal[0],
                  parentRef = nonTerminal[1],
                  res = this.findNonTerminal(namePart, parent_1)
                if (res) nonTerminal = res
                else {
                  var node = acroform_PDFAcroNonTerminal.create(
                    this.doc.context
                  )
                  ;(node.setPartialName(namePart), node.setParent(parentRef))
                  var nodeRef = this.doc.context.register(node.dict)
                  ;(parent_1.addField(nodeRef), (nonTerminal = [node, nodeRef]))
                }
              }
              return nonTerminal
            }),
            (PDFForm.prototype.findNonTerminal = function (
              partialName,
              parent
            ) {
              for (
                var fields =
                    parent instanceof acroform_PDFAcroForm
                      ? this.acroForm.getFields()
                      : createPDFAcroFields(parent.Kids()),
                  idx = 0,
                  len = fields.length;
                idx < len;
                idx++
              ) {
                var _a = fields[idx],
                  field = _a[0],
                  ref = _a[1]
                if (field.getPartialName() === partialName) {
                  if (field instanceof acroform_PDFAcroNonTerminal)
                    return [field, ref]
                  throw new FieldAlreadyExistsError(partialName)
                }
              }
            }),
            (PDFForm.of = function (acroForm, doc) {
              return new PDFForm(acroForm, doc)
            }),
            PDFForm
          )
        })()
        const form_PDFForm = PDFForm
        var ParseSpeeds,
          convertToPDFField = function (field, ref, doc) {
            return field instanceof acroform_PDFAcroPushButton
              ? form_PDFButton.of(field, ref, doc)
              : field instanceof acroform_PDFAcroCheckBox
                ? form_PDFCheckBox.of(field, ref, doc)
                : field instanceof acroform_PDFAcroComboBox
                  ? form_PDFDropdown.of(field, ref, doc)
                  : field instanceof acroform_PDFAcroListBox
                    ? form_PDFOptionList.of(field, ref, doc)
                    : field instanceof acroform_PDFAcroText
                      ? form_PDFTextField.of(field, ref, doc)
                      : field instanceof acroform_PDFAcroRadioButton
                        ? form_PDFRadioGroup.of(field, ref, doc)
                        : field instanceof acroform_PDFAcroSignature
                          ? form_PDFSignature.of(field, ref, doc)
                          : void 0
          },
          splitFieldName = function (fullyQualifiedName) {
            if (0 === fullyQualifiedName.length)
              throw new Error('PDF field names must not be empty strings')
            for (
              var parts = fullyQualifiedName.split('.'),
                idx = 0,
                len = parts.length;
              idx < len;
              idx++
            )
              if ('' === parts[idx])
                throw new Error(
                  'Periods in PDF field names must be separated by at least one character: "' +
                    fullyQualifiedName +
                    '"'
                )
            return 1 === parts.length
              ? { nonTerminal: [], terminal: parts[0] }
              : {
                  nonTerminal: parts.slice(0, parts.length - 1),
                  terminal: parts[parts.length - 1],
                }
          },
          addFieldToParent = function (_a, _b, partialName) {
            for (
              var parent = _a[0],
                parentRef = _a[1],
                field = _b[0],
                fieldRef = _b[1],
                entries = parent.normalizedEntries(),
                fields = createPDFAcroFields(
                  ('Kids' in entries) ? entries.Kids : entries.Fields
                ),
                idx = 0,
                len = fields.length;
              idx < len;
              idx++
            )
              if (fields[idx][0].getPartialName() === partialName)
                throw new FieldAlreadyExistsError(partialName)
            ;(parent.addField(fieldRef), field.setParent(parentRef))
          },
          PageSizes = {
            '4A0': [4767.87, 6740.79],
            '2A0': [3370.39, 4767.87],
            A0: [2383.94, 3370.39],
            A1: [1683.78, 2383.94],
            A2: [1190.55, 1683.78],
            A3: [841.89, 1190.55],
            A4: [595.28, 841.89],
            A5: [419.53, 595.28],
            A6: [297.64, 419.53],
            A7: [209.76, 297.64],
            A8: [147.4, 209.76],
            A9: [104.88, 147.4],
            A10: [73.7, 104.88],
            B0: [2834.65, 4008.19],
            B1: [2004.09, 2834.65],
            B2: [1417.32, 2004.09],
            B3: [1000.63, 1417.32],
            B4: [708.66, 1000.63],
            B5: [498.9, 708.66],
            B6: [354.33, 498.9],
            B7: [249.45, 354.33],
            B8: [175.75, 249.45],
            B9: [124.72, 175.75],
            B10: [87.87, 124.72],
            C0: [2599.37, 3676.54],
            C1: [1836.85, 2599.37],
            C2: [1298.27, 1836.85],
            C3: [918.43, 1298.27],
            C4: [649.13, 918.43],
            C5: [459.21, 649.13],
            C6: [323.15, 459.21],
            C7: [229.61, 323.15],
            C8: [161.57, 229.61],
            C9: [113.39, 161.57],
            C10: [79.37, 113.39],
            RA0: [2437.8, 3458.27],
            RA1: [1729.13, 2437.8],
            RA2: [1218.9, 1729.13],
            RA3: [864.57, 1218.9],
            RA4: [609.45, 864.57],
            SRA0: [2551.18, 3628.35],
            SRA1: [1814.17, 2551.18],
            SRA2: [1275.59, 1814.17],
            SRA3: [907.09, 1275.59],
            SRA4: [637.8, 907.09],
            Executive: [521.86, 756],
            Folio: [612, 936],
            Legal: [612, 1008],
            Letter: [612, 792],
            Tabloid: [792, 1224],
          }
        !(function (ParseSpeeds) {
          ;((ParseSpeeds[(ParseSpeeds.Fastest = 1 / 0)] = 'Fastest'),
            (ParseSpeeds[(ParseSpeeds.Fast = 1500)] = 'Fast'),
            (ParseSpeeds[(ParseSpeeds.Medium = 500)] = 'Medium'),
            (ParseSpeeds[(ParseSpeeds.Slow = 100)] = 'Slow'))
        })(ParseSpeeds || (ParseSpeeds = {}))
        const api_PDFEmbeddedFile = (function () {
          function PDFEmbeddedFile(ref, doc, embedder) {
            ;((this.alreadyEmbedded = !1),
              (this.ref = ref),
              (this.doc = doc),
              (this.embedder = embedder))
          }
          return (
            (PDFEmbeddedFile.prototype.embed = function () {
              return __awaiter(this, void 0, void 0, function () {
                var ref, Names, EmbeddedFiles, EFNames
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return this.alreadyEmbedded
                        ? [3, 2]
                        : [
                            4,
                            this.embedder.embedIntoContext(
                              this.doc.context,
                              this.ref
                            ),
                          ]
                    case 1:
                      ;((ref = _a.sent()),
                        this.doc.catalog.has(objects_PDFName.of('Names')) ||
                          this.doc.catalog.set(
                            objects_PDFName.of('Names'),
                            this.doc.context.obj({})
                          ),
                        (Names = this.doc.catalog.lookup(
                          objects_PDFName.of('Names'),
                          objects_PDFDict
                        )).has(objects_PDFName.of('EmbeddedFiles')) ||
                          Names.set(
                            objects_PDFName.of('EmbeddedFiles'),
                            this.doc.context.obj({})
                          ),
                        (EmbeddedFiles = Names.lookup(
                          objects_PDFName.of('EmbeddedFiles'),
                          objects_PDFDict
                        )).has(objects_PDFName.of('Names')) ||
                          EmbeddedFiles.set(
                            objects_PDFName.of('Names'),
                            this.doc.context.obj([])
                          ),
                        (EFNames = EmbeddedFiles.lookup(
                          objects_PDFName.of('Names'),
                          objects_PDFArray
                        )).push(
                          objects_PDFHexString.fromText(this.embedder.fileName)
                        ),
                        EFNames.push(ref),
                        this.doc.catalog.has(objects_PDFName.of('AF')) ||
                          this.doc.catalog.set(
                            objects_PDFName.of('AF'),
                            this.doc.context.obj([])
                          ),
                        this.doc.catalog
                          .lookup(objects_PDFName.of('AF'), objects_PDFArray)
                          .push(ref),
                        (this.alreadyEmbedded = !0),
                        (_a.label = 2))
                    case 2:
                      return [2]
                  }
                })
              })
            }),
            (PDFEmbeddedFile.of = function (ref, doc, embedder) {
              return new PDFEmbeddedFile(ref, doc, embedder)
            }),
            PDFEmbeddedFile
          )
        })()
        const api_PDFJavaScript = (function () {
          function PDFJavaScript(ref, doc, embedder) {
            ;((this.alreadyEmbedded = !1),
              (this.ref = ref),
              (this.doc = doc),
              (this.embedder = embedder))
          }
          return (
            (PDFJavaScript.prototype.embed = function () {
              return __awaiter(this, void 0, void 0, function () {
                var _a, catalog, context, ref, Names, Javascript, JSNames
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      return this.alreadyEmbedded
                        ? [3, 2]
                        : ((_a = this.doc),
                          (catalog = _a.catalog),
                          (context = _a.context),
                          [
                            4,
                            this.embedder.embedIntoContext(
                              this.doc.context,
                              this.ref
                            ),
                          ])
                    case 1:
                      ;((ref = _b.sent()),
                        catalog.has(objects_PDFName.of('Names')) ||
                          catalog.set(
                            objects_PDFName.of('Names'),
                            context.obj({})
                          ),
                        (Names = catalog.lookup(
                          objects_PDFName.of('Names'),
                          objects_PDFDict
                        )).has(objects_PDFName.of('JavaScript')) ||
                          Names.set(
                            objects_PDFName.of('JavaScript'),
                            context.obj({})
                          ),
                        (Javascript = Names.lookup(
                          objects_PDFName.of('JavaScript'),
                          objects_PDFDict
                        )).has(objects_PDFName.of('Names')) ||
                          Javascript.set(
                            objects_PDFName.of('Names'),
                            context.obj([])
                          ),
                        (JSNames = Javascript.lookup(
                          objects_PDFName.of('Names'),
                          objects_PDFArray
                        )).push(
                          objects_PDFHexString.fromText(
                            this.embedder.scriptName
                          )
                        ),
                        JSNames.push(ref),
                        (this.alreadyEmbedded = !0),
                        (_b.label = 2))
                    case 2:
                      return [2]
                  }
                })
              })
            }),
            (PDFJavaScript.of = function (ref, doc, embedder) {
              return new PDFJavaScript(ref, doc, embedder)
            }),
            PDFJavaScript
          )
        })()
        const embedders_JavaScriptEmbedder = (function () {
          function JavaScriptEmbedder(script, scriptName) {
            ;((this.script = script), (this.scriptName = scriptName))
          }
          return (
            (JavaScriptEmbedder.for = function (script, scriptName) {
              return new JavaScriptEmbedder(script, scriptName)
            }),
            (JavaScriptEmbedder.prototype.embedIntoContext = function (
              context,
              ref
            ) {
              return __awaiter(this, void 0, void 0, function () {
                var jsActionDict
                return __generator(this, function (_a) {
                  return (
                    (jsActionDict = context.obj({
                      Type: 'Action',
                      S: 'JavaScript',
                      JS: objects_PDFHexString.fromText(this.script),
                    })),
                    ref
                      ? (context.assign(ref, jsActionDict), [2, ref])
                      : [2, context.register(jsActionDict)]
                  )
                })
              })
            }),
            JavaScriptEmbedder
          )
        })()
        var PDFDocument_console = __webpack_require__(
            '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
          ),
          PDFDocument = (function () {
            function PDFDocument(context, ignoreEncryption, updateMetadata) {
              var _this = this
              if (
                ((this.defaultWordBreaks = [' ']),
                (this.computePages = function () {
                  var pages = []
                  return (
                    _this.catalog.Pages().traverse(function (node, ref) {
                      if (node instanceof structures_PDFPageLeaf) {
                        var page = _this.pageMap.get(node)
                        ;(page ||
                          ((page = api_PDFPage.of(node, ref, _this)),
                          _this.pageMap.set(node, page)),
                          pages.push(page))
                      }
                    }),
                    pages
                  )
                }),
                (this.getOrCreateForm = function () {
                  var acroForm = _this.catalog.getOrCreateAcroForm()
                  return form_PDFForm.of(acroForm, _this)
                }),
                validators_assertIs(context, 'context', [
                  [core_PDFContext, 'PDFContext'],
                ]),
                validators_assertIs(ignoreEncryption, 'ignoreEncryption', [
                  'boolean',
                ]),
                (this.context = context),
                (this.catalog = context.lookup(context.trailerInfo.Root)),
                (this.isEncrypted = !!context.lookup(
                  context.trailerInfo.Encrypt
                )),
                (this.pageCache = utils_Cache.populatedBy(this.computePages)),
                (this.pageMap = new Map()),
                (this.formCache = utils_Cache.populatedBy(
                  this.getOrCreateForm
                )),
                (this.fonts = []),
                (this.images = []),
                (this.embeddedPages = []),
                (this.embeddedFiles = []),
                (this.javaScripts = []),
                !ignoreEncryption && this.isEncrypted)
              )
                throw new EncryptedPDFError()
              updateMetadata && this.updateInfoDict()
            }
            return (
              (PDFDocument.load = function (pdf, options) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var _a,
                      ignoreEncryption,
                      _b,
                      parseSpeed,
                      _c,
                      throwOnInvalidObject,
                      _d,
                      updateMetadata,
                      _e,
                      capNumbers,
                      bytes
                    return __generator(this, function (_f) {
                      switch (_f.label) {
                        case 0:
                          return (
                            (_a = options.ignoreEncryption),
                            (ignoreEncryption = void 0 !== _a && _a),
                            (_b = options.parseSpeed),
                            (parseSpeed =
                              void 0 === _b ? ParseSpeeds.Slow : _b),
                            (_c = options.throwOnInvalidObject),
                            (throwOnInvalidObject = void 0 !== _c && _c),
                            (_d = options.updateMetadata),
                            (updateMetadata = void 0 === _d || _d),
                            (_e = options.capNumbers),
                            (capNumbers = void 0 !== _e && _e),
                            validators_assertIs(pdf, 'pdf', [
                              'string',
                              Uint8Array,
                              ArrayBuffer,
                            ]),
                            validators_assertIs(
                              ignoreEncryption,
                              'ignoreEncryption',
                              ['boolean']
                            ),
                            validators_assertIs(parseSpeed, 'parseSpeed', [
                              'number',
                            ]),
                            validators_assertIs(
                              throwOnInvalidObject,
                              'throwOnInvalidObject',
                              ['boolean']
                            ),
                            (bytes = toUint8Array(pdf)),
                            [
                              4,
                              parser_PDFParser
                                .forBytesWithOptions(
                                  bytes,
                                  parseSpeed,
                                  throwOnInvalidObject,
                                  capNumbers
                                )
                                .parseDocument(),
                            ]
                          )
                        case 1:
                          return [
                            2,
                            new PDFDocument(
                              _f.sent(),
                              ignoreEncryption,
                              updateMetadata
                            ),
                          ]
                      }
                    })
                  })
                )
              }),
              (PDFDocument.create = function (options) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var _a,
                      updateMetadata,
                      context,
                      pageTree,
                      pageTreeRef,
                      catalog
                    return __generator(this, function (_b) {
                      return (
                        (_a = options.updateMetadata),
                        (updateMetadata = void 0 === _a || _a),
                        (context = core_PDFContext.create()),
                        (pageTree =
                          structures_PDFPageTree.withContext(context)),
                        (pageTreeRef = context.register(pageTree)),
                        (catalog = structures_PDFCatalog.withContextAndPages(
                          context,
                          pageTreeRef
                        )),
                        (context.trailerInfo.Root = context.register(catalog)),
                        [2, new PDFDocument(context, !1, updateMetadata)]
                      )
                    })
                  })
                )
              }),
              (PDFDocument.prototype.registerFontkit = function (fontkit) {
                this.fontkit = fontkit
              }),
              (PDFDocument.prototype.getForm = function () {
                var form = this.formCache.access()
                return (
                  form.hasXFA() &&
                    (PDFDocument_console.warn(
                      'Removing XFA form data as pdf-lib does not support reading or writing XFA'
                    ),
                    form.deleteXFA()),
                  form
                )
              }),
              (PDFDocument.prototype.getTitle = function () {
                var title = this.getInfoDict().lookup(objects_PDFName.Title)
                if (title)
                  return (assertIsLiteralOrHexString(title), title.decodeText())
              }),
              (PDFDocument.prototype.getAuthor = function () {
                var author = this.getInfoDict().lookup(objects_PDFName.Author)
                if (author)
                  return (
                    assertIsLiteralOrHexString(author),
                    author.decodeText()
                  )
              }),
              (PDFDocument.prototype.getSubject = function () {
                var subject = this.getInfoDict().lookup(objects_PDFName.Subject)
                if (subject)
                  return (
                    assertIsLiteralOrHexString(subject),
                    subject.decodeText()
                  )
              }),
              (PDFDocument.prototype.getKeywords = function () {
                var keywords = this.getInfoDict().lookup(
                  objects_PDFName.Keywords
                )
                if (keywords)
                  return (
                    assertIsLiteralOrHexString(keywords),
                    keywords.decodeText()
                  )
              }),
              (PDFDocument.prototype.getCreator = function () {
                var creator = this.getInfoDict().lookup(objects_PDFName.Creator)
                if (creator)
                  return (
                    assertIsLiteralOrHexString(creator),
                    creator.decodeText()
                  )
              }),
              (PDFDocument.prototype.getProducer = function () {
                var producer = this.getInfoDict().lookup(
                  objects_PDFName.Producer
                )
                if (producer)
                  return (
                    assertIsLiteralOrHexString(producer),
                    producer.decodeText()
                  )
              }),
              (PDFDocument.prototype.getCreationDate = function () {
                var creationDate = this.getInfoDict().lookup(
                  objects_PDFName.CreationDate
                )
                if (creationDate)
                  return (
                    assertIsLiteralOrHexString(creationDate),
                    creationDate.decodeDate()
                  )
              }),
              (PDFDocument.prototype.getModificationDate = function () {
                var modificationDate = this.getInfoDict().lookup(
                  objects_PDFName.ModDate
                )
                if (modificationDate)
                  return (
                    assertIsLiteralOrHexString(modificationDate),
                    modificationDate.decodeDate()
                  )
              }),
              (PDFDocument.prototype.setTitle = function (title, options) {
                validators_assertIs(title, 'title', ['string'])
                var key = objects_PDFName.of('Title')
                ;(this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(title)
                ),
                null == options ? void 0 : options.showInWindowTitleBar) &&
                  this.catalog
                    .getOrCreateViewerPreferences()
                    .setDisplayDocTitle(!0)
              }),
              (PDFDocument.prototype.setAuthor = function (author) {
                validators_assertIs(author, 'author', ['string'])
                var key = objects_PDFName.of('Author')
                this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(author)
                )
              }),
              (PDFDocument.prototype.setSubject = function (subject) {
                validators_assertIs(subject, 'author', ['string'])
                var key = objects_PDFName.of('Subject')
                this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(subject)
                )
              }),
              (PDFDocument.prototype.setKeywords = function (keywords) {
                validators_assertIs(keywords, 'keywords', [Array])
                var key = objects_PDFName.of('Keywords')
                this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(keywords.join(' '))
                )
              }),
              (PDFDocument.prototype.setCreator = function (creator) {
                validators_assertIs(creator, 'creator', ['string'])
                var key = objects_PDFName.of('Creator')
                this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(creator)
                )
              }),
              (PDFDocument.prototype.setProducer = function (producer) {
                validators_assertIs(producer, 'creator', ['string'])
                var key = objects_PDFName.of('Producer')
                this.getInfoDict().set(
                  key,
                  objects_PDFHexString.fromText(producer)
                )
              }),
              (PDFDocument.prototype.setLanguage = function (language) {
                validators_assertIs(language, 'language', ['string'])
                var key = objects_PDFName.of('Lang')
                this.catalog.set(key, objects_PDFString.of(language))
              }),
              (PDFDocument.prototype.setCreationDate = function (creationDate) {
                validators_assertIs(creationDate, 'creationDate', [
                  [Date, 'Date'],
                ])
                var key = objects_PDFName.of('CreationDate')
                this.getInfoDict().set(
                  key,
                  objects_PDFString.fromDate(creationDate)
                )
              }),
              (PDFDocument.prototype.setModificationDate = function (
                modificationDate
              ) {
                validators_assertIs(modificationDate, 'modificationDate', [
                  [Date, 'Date'],
                ])
                var key = objects_PDFName.of('ModDate')
                this.getInfoDict().set(
                  key,
                  objects_PDFString.fromDate(modificationDate)
                )
              }),
              (PDFDocument.prototype.getPageCount = function () {
                return (
                  void 0 === this.pageCount &&
                    (this.pageCount = this.getPages().length),
                  this.pageCount
                )
              }),
              (PDFDocument.prototype.getPages = function () {
                return this.pageCache.access()
              }),
              (PDFDocument.prototype.getPage = function (index) {
                var pages = this.getPages()
                return (
                  assertRange(index, 'index', 0, pages.length - 1),
                  pages[index]
                )
              }),
              (PDFDocument.prototype.getPageIndices = function () {
                return (function (start, end) {
                  for (
                    var arr = new Array(end - start), idx = 0, len = arr.length;
                    idx < len;
                    idx++
                  )
                    arr[idx] = start + idx
                  return arr
                })(0, this.getPageCount())
              }),
              (PDFDocument.prototype.removePage = function (index) {
                var pageCount = this.getPageCount()
                if (0 === this.pageCount)
                  throw new RemovePageFromEmptyDocumentError()
                ;(assertRange(index, 'index', 0, pageCount - 1),
                  this.catalog.removeLeafNode(index),
                  (this.pageCount = pageCount - 1))
              }),
              (PDFDocument.prototype.addPage = function (page) {
                return (
                  validators_assertIs(page, 'page', [
                    'undefined',
                    [api_PDFPage, 'PDFPage'],
                    Array,
                  ]),
                  this.insertPage(this.getPageCount(), page)
                )
              }),
              (PDFDocument.prototype.insertPage = function (index, page) {
                var pageCount = this.getPageCount()
                if (
                  (assertRange(index, 'index', 0, pageCount),
                  validators_assertIs(page, 'page', [
                    'undefined',
                    [api_PDFPage, 'PDFPage'],
                    Array,
                  ]),
                  !page || Array.isArray(page))
                ) {
                  var dims = Array.isArray(page) ? page : PageSizes.A4
                  ;(page = api_PDFPage.create(this)).setSize.apply(page, dims)
                } else if (page.doc !== this) throw new ForeignPageError()
                var parentRef = this.catalog.insertLeafNode(page.ref, index)
                return (
                  page.node.setParent(parentRef),
                  this.pageMap.set(page.node, page),
                  this.pageCache.invalidate(),
                  (this.pageCount = pageCount + 1),
                  page
                )
              }),
              (PDFDocument.prototype.copyPages = function (srcDoc, indices) {
                return __awaiter(this, void 0, void 0, function () {
                  var copier,
                    srcPages,
                    copiedPages,
                    idx,
                    len,
                    srcPage,
                    copiedPage,
                    ref
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          validators_assertIs(srcDoc, 'srcDoc', [
                            [PDFDocument, 'PDFDocument'],
                          ]),
                          validators_assertIs(indices, 'indices', [Array]),
                          [4, srcDoc.flush()]
                        )
                      case 1:
                        for (
                          _a.sent(),
                            copier = core_PDFObjectCopier.for(
                              srcDoc.context,
                              this.context
                            ),
                            srcPages = srcDoc.getPages(),
                            copiedPages = new Array(indices.length),
                            idx = 0,
                            len = indices.length;
                          idx < len;
                          idx++
                        )
                          ((srcPage = srcPages[indices[idx]]),
                            (copiedPage = copier.copy(srcPage.node)),
                            (ref = this.context.register(copiedPage)),
                            (copiedPages[idx] = api_PDFPage.of(
                              copiedPage,
                              ref,
                              this
                            )))
                        return [2, copiedPages]
                    }
                  })
                })
              }),
              (PDFDocument.prototype.copy = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var pdfCopy, contentPages, idx, len
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, PDFDocument.create()]
                      case 1:
                        return [
                          4,
                          (pdfCopy = _a.sent()).copyPages(
                            this,
                            this.getPageIndices()
                          ),
                        ]
                      case 2:
                        for (
                          contentPages = _a.sent(),
                            idx = 0,
                            len = contentPages.length;
                          idx < len;
                          idx++
                        )
                          pdfCopy.addPage(contentPages[idx])
                        return (
                          void 0 !== this.getAuthor() &&
                            pdfCopy.setAuthor(this.getAuthor()),
                          void 0 !== this.getCreationDate() &&
                            pdfCopy.setCreationDate(this.getCreationDate()),
                          void 0 !== this.getCreator() &&
                            pdfCopy.setCreator(this.getCreator()),
                          void 0 !== this.getModificationDate() &&
                            pdfCopy.setModificationDate(
                              this.getModificationDate()
                            ),
                          void 0 !== this.getProducer() &&
                            pdfCopy.setProducer(this.getProducer()),
                          void 0 !== this.getSubject() &&
                            pdfCopy.setSubject(this.getSubject()),
                          void 0 !== this.getTitle() &&
                            pdfCopy.setTitle(this.getTitle()),
                          (pdfCopy.defaultWordBreaks = this.defaultWordBreaks),
                          [2, pdfCopy]
                        )
                    }
                  })
                })
              }),
              (PDFDocument.prototype.addJavaScript = function (name, script) {
                ;(validators_assertIs(name, 'name', ['string']),
                  validators_assertIs(script, 'script', ['string']))
                var embedder = embedders_JavaScriptEmbedder.for(script, name),
                  ref = this.context.nextRef(),
                  javaScript = api_PDFJavaScript.of(ref, this, embedder)
                this.javaScripts.push(javaScript)
              }),
              (PDFDocument.prototype.attach = function (
                attachment,
                name,
                options
              ) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var bytes, embedder, ref, embeddedFile
                    return __generator(this, function (_a) {
                      return (
                        validators_assertIs(attachment, 'attachment', [
                          'string',
                          Uint8Array,
                          ArrayBuffer,
                        ]),
                        validators_assertIs(name, 'name', ['string']),
                        assertOrUndefined(options.mimeType, 'mimeType', [
                          'string',
                        ]),
                        assertOrUndefined(options.description, 'description', [
                          'string',
                        ]),
                        assertOrUndefined(
                          options.creationDate,
                          'options.creationDate',
                          [Date]
                        ),
                        assertOrUndefined(
                          options.modificationDate,
                          'options.modificationDate',
                          [Date]
                        ),
                        assertIsOneOfOrUndefined(
                          options.afRelationship,
                          'options.afRelationship',
                          AFRelationship
                        ),
                        (bytes = toUint8Array(attachment)),
                        (embedder = embedders_FileEmbedder.for(
                          bytes,
                          name,
                          options
                        )),
                        (ref = this.context.nextRef()),
                        (embeddedFile = api_PDFEmbeddedFile.of(
                          ref,
                          this,
                          embedder
                        )),
                        this.embeddedFiles.push(embeddedFile),
                        [2]
                      )
                    })
                  })
                )
              }),
              (PDFDocument.prototype.embedFont = function (font, options) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var _a,
                      subset,
                      customName,
                      features,
                      embedder,
                      bytes,
                      fontkit,
                      _b,
                      ref,
                      pdfFont
                    return __generator(this, function (_c) {
                      switch (_c.label) {
                        case 0:
                          return (
                            (_a = options.subset),
                            (subset = void 0 !== _a && _a),
                            (customName = options.customName),
                            (features = options.features),
                            validators_assertIs(font, 'font', [
                              'string',
                              Uint8Array,
                              ArrayBuffer,
                            ]),
                            validators_assertIs(subset, 'subset', ['boolean']),
                            isStandardFont(font)
                              ? ((embedder = embedders_StandardFontEmbedder.for(
                                  font,
                                  customName
                                )),
                                [3, 7])
                              : [3, 1]
                          )
                        case 1:
                          return (input = font) instanceof Uint8Array ||
                            input instanceof ArrayBuffer ||
                            'string' == typeof input
                            ? ((bytes = toUint8Array(font)),
                              (fontkit = this.assertFontkit()),
                              subset
                                ? [
                                    4,
                                    embedders_CustomFontSubsetEmbedder.for(
                                      fontkit,
                                      bytes,
                                      customName,
                                      features
                                    ),
                                  ]
                                : [3, 3])
                            : [3, 6]
                        case 2:
                          return ((_b = _c.sent()), [3, 5])
                        case 3:
                          return [
                            4,
                            embedders_CustomFontEmbedder.for(
                              fontkit,
                              bytes,
                              customName,
                              features
                            ),
                          ]
                        case 4:
                          ;((_b = _c.sent()), (_c.label = 5))
                        case 5:
                          return ((embedder = _b), [3, 7])
                        case 6:
                          throw new TypeError(
                            '`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`'
                          )
                        case 7:
                          return (
                            (ref = this.context.nextRef()),
                            (pdfFont = api_PDFFont.of(ref, this, embedder)),
                            this.fonts.push(pdfFont),
                            [2, pdfFont]
                          )
                      }
                      var input
                    })
                  })
                )
              }),
              (PDFDocument.prototype.embedStandardFont = function (
                font,
                customName
              ) {
                if (
                  (validators_assertIs(font, 'font', ['string']),
                  !isStandardFont(font))
                )
                  throw new TypeError(
                    '`font` must be one of type `StandardFonts`'
                  )
                var embedder = embedders_StandardFontEmbedder.for(
                    font,
                    customName
                  ),
                  ref = this.context.nextRef(),
                  pdfFont = api_PDFFont.of(ref, this, embedder)
                return (this.fonts.push(pdfFont), pdfFont)
              }),
              (PDFDocument.prototype.embedJpg = function (jpg) {
                return __awaiter(this, void 0, void 0, function () {
                  var bytes, embedder, ref, pdfImage
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          validators_assertIs(jpg, 'jpg', [
                            'string',
                            Uint8Array,
                            ArrayBuffer,
                          ]),
                          (bytes = toUint8Array(jpg)),
                          [4, embedders_JpegEmbedder.for(bytes)]
                        )
                      case 1:
                        return (
                          (embedder = _a.sent()),
                          (ref = this.context.nextRef()),
                          (pdfImage = api_PDFImage.of(ref, this, embedder)),
                          this.images.push(pdfImage),
                          [2, pdfImage]
                        )
                    }
                  })
                })
              }),
              (PDFDocument.prototype.embedPng = function (png) {
                return __awaiter(this, void 0, void 0, function () {
                  var bytes, embedder, ref, pdfImage
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          validators_assertIs(png, 'png', [
                            'string',
                            Uint8Array,
                            ArrayBuffer,
                          ]),
                          (bytes = toUint8Array(png)),
                          [4, embedders_PngEmbedder.for(bytes)]
                        )
                      case 1:
                        return (
                          (embedder = _a.sent()),
                          (ref = this.context.nextRef()),
                          (pdfImage = api_PDFImage.of(ref, this, embedder)),
                          this.images.push(pdfImage),
                          [2, pdfImage]
                        )
                    }
                  })
                })
              }),
              (PDFDocument.prototype.embedPdf = function (pdf, indices) {
                return (
                  void 0 === indices && (indices = [0]),
                  __awaiter(this, void 0, void 0, function () {
                    var _a, srcPages
                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          return (
                            validators_assertIs(pdf, 'pdf', [
                              'string',
                              Uint8Array,
                              ArrayBuffer,
                              [PDFDocument, 'PDFDocument'],
                            ]),
                            validators_assertIs(indices, 'indices', [Array]),
                            pdf instanceof PDFDocument
                              ? ((_a = pdf), [3, 3])
                              : [3, 1]
                          )
                        case 1:
                          return [4, PDFDocument.load(pdf)]
                        case 2:
                          ;((_a = _b.sent()), (_b.label = 3))
                        case 3:
                          return (
                            (srcPages = (function (arr, indices) {
                              for (
                                var plucked = new Array(indices.length),
                                  idx = 0,
                                  len = indices.length;
                                idx < len;
                                idx++
                              )
                                plucked[idx] = arr[indices[idx]]
                              return plucked
                            })(_a.getPages(), indices)),
                            [2, this.embedPages(srcPages)]
                          )
                      }
                    })
                  })
                )
              }),
              (PDFDocument.prototype.embedPage = function (
                page,
                boundingBox,
                transformationMatrix
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          validators_assertIs(page, 'page', [
                            [api_PDFPage, 'PDFPage'],
                          ]),
                          [
                            4,
                            this.embedPages(
                              [page],
                              [boundingBox],
                              [transformationMatrix]
                            ),
                          ]
                        )
                      case 1:
                        return [2, _a.sent()[0]]
                    }
                  })
                })
              }),
              (PDFDocument.prototype.embedPages = function (
                pages,
                boundingBoxes,
                transformationMatrices
              ) {
                return (
                  void 0 === boundingBoxes && (boundingBoxes = []),
                  void 0 === transformationMatrices &&
                    (transformationMatrices = []),
                  __awaiter(this, void 0, void 0, function () {
                    var currPage,
                      nextPage,
                      context,
                      maybeCopyPage,
                      embeddedPages,
                      idx,
                      len,
                      page,
                      box,
                      matrix,
                      embedder,
                      ref,
                      _a
                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          if (0 === pages.length) return [2, []]
                          for (
                            idx = 0, len = pages.length - 1;
                            idx < len;
                            idx++
                          )
                            if (
                              ((currPage = pages[idx]),
                              (nextPage = pages[idx + 1]),
                              currPage.node.context !== nextPage.node.context)
                            )
                              throw new PageEmbeddingMismatchedContextError()
                          ;((context = pages[0].node.context),
                            (maybeCopyPage =
                              context === this.context
                                ? function (p) {
                                    return p
                                  }
                                : core_PDFObjectCopier.for(
                                    context,
                                    this.context
                                  ).copy),
                            (embeddedPages = new Array(pages.length)),
                            (idx = 0),
                            (len = pages.length),
                            (_b.label = 1))
                        case 1:
                          return idx < len
                            ? ((page = maybeCopyPage(pages[idx].node)),
                              (box = boundingBoxes[idx]),
                              (matrix = transformationMatrices[idx]),
                              [
                                4,
                                embedders_PDFPageEmbedder.for(
                                  page,
                                  box,
                                  matrix
                                ),
                              ])
                            : [3, 4]
                        case 2:
                          ;((embedder = _b.sent()),
                            (ref = this.context.nextRef()),
                            (embeddedPages[idx] = api_PDFEmbeddedPage.of(
                              ref,
                              this,
                              embedder
                            )),
                            (_b.label = 3))
                        case 3:
                          return (idx++, [3, 1])
                        case 4:
                          return (
                            (_a = this.embeddedPages).push.apply(
                              _a,
                              embeddedPages
                            ),
                            [2, embeddedPages]
                          )
                      }
                    })
                  })
                )
              }),
              (PDFDocument.prototype.flush = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.embedAll(this.fonts)]
                      case 1:
                        return (_a.sent(), [4, this.embedAll(this.images)])
                      case 2:
                        return (
                          _a.sent(),
                          [4, this.embedAll(this.embeddedPages)]
                        )
                      case 3:
                        return (
                          _a.sent(),
                          [4, this.embedAll(this.embeddedFiles)]
                        )
                      case 4:
                        return (_a.sent(), [4, this.embedAll(this.javaScripts)])
                      case 5:
                        return (_a.sent(), [2])
                    }
                  })
                })
              }),
              (PDFDocument.prototype.save = function (options) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var _a,
                      useObjectStreams,
                      _b,
                      addDefaultPage,
                      _c,
                      objectsPerTick,
                      _d,
                      updateFieldAppearances,
                      form
                    return __generator(this, function (_e) {
                      switch (_e.label) {
                        case 0:
                          return (
                            (_a = options.useObjectStreams),
                            (useObjectStreams = void 0 === _a || _a),
                            (_b = options.addDefaultPage),
                            (addDefaultPage = void 0 === _b || _b),
                            (_c = options.objectsPerTick),
                            (objectsPerTick = void 0 === _c ? 50 : _c),
                            (_d = options.updateFieldAppearances),
                            (updateFieldAppearances = void 0 === _d || _d),
                            validators_assertIs(
                              useObjectStreams,
                              'useObjectStreams',
                              ['boolean']
                            ),
                            validators_assertIs(
                              addDefaultPage,
                              'addDefaultPage',
                              ['boolean']
                            ),
                            validators_assertIs(
                              objectsPerTick,
                              'objectsPerTick',
                              ['number']
                            ),
                            validators_assertIs(
                              updateFieldAppearances,
                              'updateFieldAppearances',
                              ['boolean']
                            ),
                            addDefaultPage &&
                              0 === this.getPageCount() &&
                              this.addPage(),
                            updateFieldAppearances &&
                              (form = this.formCache.getValue()) &&
                              form.updateFieldAppearances(),
                            [4, this.flush()]
                          )
                        case 1:
                          return (
                            _e.sent(),
                            [
                              2,
                              (useObjectStreams
                                ? writers_PDFStreamWriter
                                : writers_PDFWriter
                              )
                                .forContext(this.context, objectsPerTick)
                                .serializeToBuffer(),
                            ]
                          )
                      }
                    })
                  })
                )
              }),
              (PDFDocument.prototype.saveAsBase64 = function (options) {
                return (
                  void 0 === options && (options = {}),
                  __awaiter(this, void 0, void 0, function () {
                    var _a, dataUri, otherOptions, bytes, base64
                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          return (
                            (_a = options.dataUri),
                            (dataUri = void 0 !== _a && _a),
                            (otherOptions = (function __rest(s, e) {
                              var t = {}
                              for (var p in s)
                                Object.prototype.hasOwnProperty.call(s, p) &&
                                  e.indexOf(p) < 0 &&
                                  (t[p] = s[p])
                              if (
                                null != s &&
                                'function' ==
                                  typeof Object.getOwnPropertySymbols
                              ) {
                                var i = 0
                                for (
                                  p = Object.getOwnPropertySymbols(s);
                                  i < p.length;
                                  i++
                                )
                                  e.indexOf(p[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                      s,
                                      p[i]
                                    ) &&
                                    (t[p[i]] = s[p[i]])
                              }
                              return t
                            })(options, ['dataUri'])),
                            validators_assertIs(dataUri, 'dataUri', [
                              'boolean',
                            ]),
                            [4, this.save(otherOptions)]
                          )
                        case 1:
                          return (
                            (bytes = _b.sent()),
                            (base64 = (function (bytes) {
                              for (
                                var base64 = '', len = bytes.length, i = 0;
                                i < len;
                                i += 3
                              )
                                ((base64 += chars[bytes[i] >> 2]),
                                  (base64 +=
                                    chars[
                                      ((3 & bytes[i]) << 4) |
                                        (bytes[i + 1] >> 4)
                                    ]),
                                  (base64 +=
                                    chars[
                                      ((15 & bytes[i + 1]) << 2) |
                                        (bytes[i + 2] >> 6)
                                    ]),
                                  (base64 += chars[63 & bytes[i + 2]]))
                              return (
                                len % 3 == 2
                                  ? (base64 =
                                      base64.substring(0, base64.length - 1) +
                                      '=')
                                  : len % 3 == 1 &&
                                    (base64 =
                                      base64.substring(0, base64.length - 2) +
                                      '=='),
                                base64
                              )
                            })(bytes)),
                            [
                              2,
                              dataUri
                                ? 'data:application/pdf;base64,' + base64
                                : base64,
                            ]
                          )
                      }
                    })
                  })
                )
              }),
              (PDFDocument.prototype.findPageForAnnotationRef = function (ref) {
                for (
                  var pages = this.getPages(), idx = 0, len = pages.length;
                  idx < len;
                  idx++
                ) {
                  var page = pages[idx],
                    annotations = page.node.Annots()
                  if (
                    void 0 !==
                    (null == annotations ? void 0 : annotations.indexOf(ref))
                  )
                    return page
                }
              }),
              (PDFDocument.prototype.embedAll = function (embeddables) {
                return __awaiter(this, void 0, void 0, function () {
                  var idx, len
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        ;((idx = 0), (len = embeddables.length), (_a.label = 1))
                      case 1:
                        return idx < len
                          ? [4, embeddables[idx].embed()]
                          : [3, 4]
                      case 2:
                        ;(_a.sent(), (_a.label = 3))
                      case 3:
                        return (idx++, [3, 1])
                      case 4:
                        return [2]
                    }
                  })
                })
              }),
              (PDFDocument.prototype.updateInfoDict = function () {
                var pdfLib = 'pdf-lib (https://github.com/Hopding/pdf-lib)',
                  now = new Date(),
                  info = this.getInfoDict()
                ;(this.setProducer(pdfLib),
                  this.setModificationDate(now),
                  info.get(objects_PDFName.of('Creator')) ||
                    this.setCreator(pdfLib),
                  info.get(objects_PDFName.of('CreationDate')) ||
                    this.setCreationDate(now))
              }),
              (PDFDocument.prototype.getInfoDict = function () {
                var existingInfo = this.context.lookup(
                  this.context.trailerInfo.Info
                )
                if (existingInfo instanceof objects_PDFDict) return existingInfo
                var newInfo = this.context.obj({})
                return (
                  (this.context.trailerInfo.Info =
                    this.context.register(newInfo)),
                  newInfo
                )
              }),
              (PDFDocument.prototype.assertFontkit = function () {
                if (!this.fontkit) throw new FontkitNotRegisteredError()
                return this.fontkit
              }),
              PDFDocument
            )
          })()
        const api_PDFDocument = PDFDocument
        function assertIsLiteralOrHexString(pdfObject) {
          if (
            !(
              pdfObject instanceof objects_PDFHexString ||
              pdfObject instanceof objects_PDFString
            )
          )
            throw new UnexpectedObjectTypeError(
              [objects_PDFHexString, objects_PDFString],
              pdfObject
            )
        }
        var BlendMode
        !(function (BlendMode) {
          ;((BlendMode.Normal = 'Normal'),
            (BlendMode.Multiply = 'Multiply'),
            (BlendMode.Screen = 'Screen'),
            (BlendMode.Overlay = 'Overlay'),
            (BlendMode.Darken = 'Darken'),
            (BlendMode.Lighten = 'Lighten'),
            (BlendMode.ColorDodge = 'ColorDodge'),
            (BlendMode.ColorBurn = 'ColorBurn'),
            (BlendMode.HardLight = 'HardLight'),
            (BlendMode.SoftLight = 'SoftLight'),
            (BlendMode.Difference = 'Difference'),
            (BlendMode.Exclusion = 'Exclusion'))
        })(BlendMode || (BlendMode = {}))
        var PDFPage = (function () {
          function PDFPage(leafNode, ref, doc) {
            ;((this.fontSize = 24),
              (this.fontColor = rgb(0, 0, 0)),
              (this.lineHeight = 24),
              (this.x = 0),
              (this.y = 0),
              validators_assertIs(leafNode, 'leafNode', [
                [structures_PDFPageLeaf, 'PDFPageLeaf'],
              ]),
              validators_assertIs(ref, 'ref', [[objects_PDFRef, 'PDFRef']]),
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ]),
              (this.node = leafNode),
              (this.ref = ref),
              (this.doc = doc))
          }
          return (
            (PDFPage.prototype.setRotation = function (angle) {
              var degreesAngle = toDegrees(angle)
              ;(assertMultiple(degreesAngle, 'degreesAngle', 90),
                this.node.set(
                  objects_PDFName.of('Rotate'),
                  this.doc.context.obj(degreesAngle)
                ))
            }),
            (PDFPage.prototype.getRotation = function () {
              var Rotate = this.node.Rotate()
              return degrees(Rotate ? Rotate.asNumber() : 0)
            }),
            (PDFPage.prototype.setSize = function (width, height) {
              ;(validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var mediaBox = this.getMediaBox()
              this.setMediaBox(mediaBox.x, mediaBox.y, width, height)
              var cropBox = this.getCropBox(),
                bleedBox = this.getBleedBox(),
                trimBox = this.getTrimBox(),
                artBox = this.getArtBox(),
                hasCropBox = this.node.CropBox(),
                hasBleedBox = this.node.BleedBox(),
                hasTrimBox = this.node.TrimBox(),
                hasArtBox = this.node.ArtBox()
              ;(hasCropBox &&
                rectanglesAreEqual(cropBox, mediaBox) &&
                this.setCropBox(mediaBox.x, mediaBox.y, width, height),
                hasBleedBox &&
                  rectanglesAreEqual(bleedBox, mediaBox) &&
                  this.setBleedBox(mediaBox.x, mediaBox.y, width, height),
                hasTrimBox &&
                  rectanglesAreEqual(trimBox, mediaBox) &&
                  this.setTrimBox(mediaBox.x, mediaBox.y, width, height),
                hasArtBox &&
                  rectanglesAreEqual(artBox, mediaBox) &&
                  this.setArtBox(mediaBox.x, mediaBox.y, width, height))
            }),
            (PDFPage.prototype.setWidth = function (width) {
              ;(validators_assertIs(width, 'width', ['number']),
                this.setSize(width, this.getSize().height))
            }),
            (PDFPage.prototype.setHeight = function (height) {
              ;(validators_assertIs(height, 'height', ['number']),
                this.setSize(this.getSize().width, height))
            }),
            (PDFPage.prototype.setMediaBox = function (x, y, width, height) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var mediaBox = this.doc.context.obj([x, y, x + width, y + height])
              this.node.set(objects_PDFName.MediaBox, mediaBox)
            }),
            (PDFPage.prototype.setCropBox = function (x, y, width, height) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var cropBox = this.doc.context.obj([x, y, x + width, y + height])
              this.node.set(objects_PDFName.CropBox, cropBox)
            }),
            (PDFPage.prototype.setBleedBox = function (x, y, width, height) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var bleedBox = this.doc.context.obj([x, y, x + width, y + height])
              this.node.set(objects_PDFName.BleedBox, bleedBox)
            }),
            (PDFPage.prototype.setTrimBox = function (x, y, width, height) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var trimBox = this.doc.context.obj([x, y, x + width, y + height])
              this.node.set(objects_PDFName.TrimBox, trimBox)
            }),
            (PDFPage.prototype.setArtBox = function (x, y, width, height) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                validators_assertIs(width, 'width', ['number']),
                validators_assertIs(height, 'height', ['number']))
              var artBox = this.doc.context.obj([x, y, x + width, y + height])
              this.node.set(objects_PDFName.ArtBox, artBox)
            }),
            (PDFPage.prototype.getSize = function () {
              var _a = this.getMediaBox()
              return { width: _a.width, height: _a.height }
            }),
            (PDFPage.prototype.getWidth = function () {
              return this.getSize().width
            }),
            (PDFPage.prototype.getHeight = function () {
              return this.getSize().height
            }),
            (PDFPage.prototype.getMediaBox = function () {
              return this.node.MediaBox().asRectangle()
            }),
            (PDFPage.prototype.getCropBox = function () {
              var _a,
                cropBox = this.node.CropBox()
              return null !==
                (_a = null == cropBox ? void 0 : cropBox.asRectangle()) &&
                void 0 !== _a
                ? _a
                : this.getMediaBox()
            }),
            (PDFPage.prototype.getBleedBox = function () {
              var _a,
                bleedBox = this.node.BleedBox()
              return null !==
                (_a = null == bleedBox ? void 0 : bleedBox.asRectangle()) &&
                void 0 !== _a
                ? _a
                : this.getCropBox()
            }),
            (PDFPage.prototype.getTrimBox = function () {
              var _a,
                trimBox = this.node.TrimBox()
              return null !==
                (_a = null == trimBox ? void 0 : trimBox.asRectangle()) &&
                void 0 !== _a
                ? _a
                : this.getCropBox()
            }),
            (PDFPage.prototype.getArtBox = function () {
              var _a,
                artBox = this.node.ArtBox()
              return null !==
                (_a = null == artBox ? void 0 : artBox.asRectangle()) &&
                void 0 !== _a
                ? _a
                : this.getCropBox()
            }),
            (PDFPage.prototype.translateContent = function (x, y) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                this.node.normalize(),
                this.getContentStream())
              var start = this.createContentStream(
                  operators_pushGraphicsState(),
                  translate(x, y)
                ),
                startRef = this.doc.context.register(start),
                end = this.createContentStream(operators_popGraphicsState()),
                endRef = this.doc.context.register(end)
              this.node.wrapContentStreams(startRef, endRef)
            }),
            (PDFPage.prototype.scale = function (x, y) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                this.setSize(this.getWidth() * x, this.getHeight() * y),
                this.scaleContent(x, y),
                this.scaleAnnotations(x, y))
            }),
            (PDFPage.prototype.scaleContent = function (x, y) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                this.node.normalize(),
                this.getContentStream())
              var start = this.createContentStream(
                  operators_pushGraphicsState(),
                  scale(x, y)
                ),
                startRef = this.doc.context.register(start),
                end = this.createContentStream(operators_popGraphicsState()),
                endRef = this.doc.context.register(end)
              this.node.wrapContentStreams(startRef, endRef)
            }),
            (PDFPage.prototype.scaleAnnotations = function (x, y) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']))
              var annots = this.node.Annots()
              if (annots)
                for (var idx = 0; idx < annots.size(); idx++) {
                  var annot = annots.lookup(idx)
                  annot instanceof objects_PDFDict &&
                    this.scaleAnnot(annot, x, y)
                }
            }),
            (PDFPage.prototype.resetPosition = function () {
              ;(this.getContentStream(!1), (this.x = 0), (this.y = 0))
            }),
            (PDFPage.prototype.setFont = function (font) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                (this.font = font),
                (this.fontKey = this.node.newFontDictionary(
                  this.font.name,
                  this.font.ref
                )))
            }),
            (PDFPage.prototype.setFontSize = function (fontSize) {
              ;(validators_assertIs(fontSize, 'fontSize', ['number']),
                (this.fontSize = fontSize))
            }),
            (PDFPage.prototype.setFontColor = function (fontColor) {
              ;(validators_assertIs(fontColor, 'fontColor', [
                [Object, 'Color'],
              ]),
                (this.fontColor = fontColor))
            }),
            (PDFPage.prototype.setLineHeight = function (lineHeight) {
              ;(validators_assertIs(lineHeight, 'lineHeight', ['number']),
                (this.lineHeight = lineHeight))
            }),
            (PDFPage.prototype.getPosition = function () {
              return { x: this.x, y: this.y }
            }),
            (PDFPage.prototype.getX = function () {
              return this.x
            }),
            (PDFPage.prototype.getY = function () {
              return this.y
            }),
            (PDFPage.prototype.moveTo = function (x, y) {
              ;(validators_assertIs(x, 'x', ['number']),
                validators_assertIs(y, 'y', ['number']),
                (this.x = x),
                (this.y = y))
            }),
            (PDFPage.prototype.moveDown = function (yDecrease) {
              ;(validators_assertIs(yDecrease, 'yDecrease', ['number']),
                (this.y -= yDecrease))
            }),
            (PDFPage.prototype.moveUp = function (yIncrease) {
              ;(validators_assertIs(yIncrease, 'yIncrease', ['number']),
                (this.y += yIncrease))
            }),
            (PDFPage.prototype.moveLeft = function (xDecrease) {
              ;(validators_assertIs(xDecrease, 'xDecrease', ['number']),
                (this.x -= xDecrease))
            }),
            (PDFPage.prototype.moveRight = function (xIncrease) {
              ;(validators_assertIs(xIncrease, 'xIncrease', ['number']),
                (this.x += xIncrease))
            }),
            (PDFPage.prototype.pushOperators = function () {
              for (var operator = [], _i = 0; _i < arguments.length; _i++)
                operator[_i] = arguments[_i]
              assertEachIs(operator, 'operator', [
                [operators_PDFOperator, 'PDFOperator'],
              ])
              var contentStream = this.getContentStream()
              contentStream.push.apply(contentStream, operator)
            }),
            (PDFPage.prototype.drawText = function (text, options) {
              var _a, _b, _c, _d, _e, _f, _g
              ;(void 0 === options && (options = {}),
                validators_assertIs(text, 'text', ['string']),
                assertOrUndefined(options.color, 'options.color', [
                  [Object, 'Color'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertOrUndefined(options.font, 'options.font', [
                  [api_PDFFont, 'PDFFont'],
                ]),
                assertOrUndefined(options.size, 'options.size', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.xSkew, 'options.xSkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.ySkew, 'options.ySkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.lineHeight, 'options.lineHeight', [
                  'number',
                ]),
                assertOrUndefined(options.maxWidth, 'options.maxWidth', [
                  'number',
                ]),
                assertOrUndefined(options.wordBreaks, 'options.wordBreaks', [
                  Array,
                ]),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              for (
                var _h = this.setOrEmbedFont(options.font),
                  oldFont = _h.oldFont,
                  newFont = _h.newFont,
                  newFontKey = _h.newFontKey,
                  fontSize = options.size || this.fontSize,
                  wordBreaks = options.wordBreaks || this.doc.defaultWordBreaks,
                  lines =
                    void 0 === options.maxWidth
                      ? lineSplit(cleanText(text))
                      : breakTextIntoLines(
                          text,
                          wordBreaks,
                          options.maxWidth,
                          function (t) {
                            return newFont.widthOfTextAtSize(t, fontSize)
                          }
                        ),
                  encodedLines = new Array(lines.length),
                  idx = 0,
                  len = lines.length;
                idx < len;
                idx++
              )
                encodedLines[idx] = newFont.encodeText(lines[idx])
              var graphicsStateKey = this.maybeEmbedGraphicsState({
                  opacity: options.opacity,
                  blendMode: options.blendMode,
                }),
                contentStream = this.getContentStream()
              ;(contentStream.push.apply(
                contentStream,
                (function (lines, options) {
                  for (
                    var lineHeight,
                      operators = [
                        operators_pushGraphicsState(),
                        options.graphicsState &&
                          operators_setGraphicsState(options.graphicsState),
                        operators_beginText(),
                        colors_setFillingColor(options.color),
                        operators_setFontAndSize(options.font, options.size),
                        ((lineHeight = options.lineHeight),
                        operators_PDFOperator.of(
                          operators_PDFOperatorNames.SetTextLineHeight,
                          [objects_asPDFNumber(lineHeight)]
                        )),
                        operators_rotateAndSkewTextRadiansAndTranslate(
                          rotations_toRadians(options.rotate),
                          rotations_toRadians(options.xSkew),
                          rotations_toRadians(options.ySkew),
                          options.x,
                          options.y
                        ),
                      ].filter(Boolean),
                      idx = 0,
                      len = lines.length;
                    idx < len;
                    idx++
                  )
                    operators.push(operators_showText(lines[idx]), nextLine())
                  return (
                    operators.push(
                      operators_endText(),
                      operators_popGraphicsState()
                    ),
                    operators
                  )
                })(encodedLines, {
                  color:
                    null !== (_a = options.color) && void 0 !== _a
                      ? _a
                      : this.fontColor,
                  font: newFontKey,
                  size: fontSize,
                  rotate:
                    null !== (_b = options.rotate) && void 0 !== _b
                      ? _b
                      : degrees(0),
                  xSkew:
                    null !== (_c = options.xSkew) && void 0 !== _c
                      ? _c
                      : degrees(0),
                  ySkew:
                    null !== (_d = options.ySkew) && void 0 !== _d
                      ? _d
                      : degrees(0),
                  x: null !== (_e = options.x) && void 0 !== _e ? _e : this.x,
                  y: null !== (_f = options.y) && void 0 !== _f ? _f : this.y,
                  lineHeight:
                    null !== (_g = options.lineHeight) && void 0 !== _g
                      ? _g
                      : this.lineHeight,
                  graphicsState: graphicsStateKey,
                })
              ),
                options.font &&
                  (oldFont ? this.setFont(oldFont) : this.resetFont()))
            }),
            (PDFPage.prototype.drawImage = function (image, options) {
              var _a, _b, _c, _d, _e, _f, _g
              ;(void 0 === options && (options = {}),
                validators_assertIs(image, 'image', [
                  [api_PDFImage, 'PDFImage'],
                ]),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.width, 'options.width', ['number']),
                assertOrUndefined(options.height, 'options.height', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.xSkew, 'options.xSkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.ySkew, 'options.ySkew', [
                  [Object, 'Rotation'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var xObjectKey = this.node.newXObject('Image', image.ref),
                graphicsStateKey = this.maybeEmbedGraphicsState({
                  opacity: options.opacity,
                  blendMode: options.blendMode,
                }),
                contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                drawImage(xObjectKey, {
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : this.x,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : this.y,
                  width:
                    null !== (_c = options.width) && void 0 !== _c
                      ? _c
                      : image.size().width,
                  height:
                    null !== (_d = options.height) && void 0 !== _d
                      ? _d
                      : image.size().height,
                  rotate:
                    null !== (_e = options.rotate) && void 0 !== _e
                      ? _e
                      : degrees(0),
                  xSkew:
                    null !== (_f = options.xSkew) && void 0 !== _f
                      ? _f
                      : degrees(0),
                  ySkew:
                    null !== (_g = options.ySkew) && void 0 !== _g
                      ? _g
                      : degrees(0),
                  graphicsState: graphicsStateKey,
                })
              )
            }),
            (PDFPage.prototype.drawPage = function (embeddedPage, options) {
              var _a, _b, _c, _d, _e
              ;(void 0 === options && (options = {}),
                validators_assertIs(embeddedPage, 'embeddedPage', [
                  [api_PDFEmbeddedPage, 'PDFEmbeddedPage'],
                ]),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.xScale, 'options.xScale', ['number']),
                assertOrUndefined(options.yScale, 'options.yScale', ['number']),
                assertOrUndefined(options.width, 'options.width', ['number']),
                assertOrUndefined(options.height, 'options.height', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.xSkew, 'options.xSkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.ySkew, 'options.ySkew', [
                  [Object, 'Rotation'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var xObjectKey = this.node.newXObject(
                  'EmbeddedPdfPage',
                  embeddedPage.ref
                ),
                graphicsStateKey = this.maybeEmbedGraphicsState({
                  opacity: options.opacity,
                  blendMode: options.blendMode,
                }),
                xScale =
                  void 0 !== options.width
                    ? options.width / embeddedPage.width
                    : void 0 !== options.xScale
                      ? options.xScale
                      : 1,
                yScale =
                  void 0 !== options.height
                    ? options.height / embeddedPage.height
                    : void 0 !== options.yScale
                      ? options.yScale
                      : 1,
                contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                (function (name, options) {
                  return [
                    operators_pushGraphicsState(),
                    options.graphicsState &&
                      operators_setGraphicsState(options.graphicsState),
                    translate(options.x, options.y),
                    rotateRadians(rotations_toRadians(options.rotate)),
                    scale(options.xScale, options.yScale),
                    skewRadians(
                      rotations_toRadians(options.xSkew),
                      rotations_toRadians(options.ySkew)
                    ),
                    drawObject(name),
                    operators_popGraphicsState(),
                  ].filter(Boolean)
                })(xObjectKey, {
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : this.x,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : this.y,
                  xScale,
                  yScale,
                  rotate:
                    null !== (_c = options.rotate) && void 0 !== _c
                      ? _c
                      : degrees(0),
                  xSkew:
                    null !== (_d = options.xSkew) && void 0 !== _d
                      ? _d
                      : degrees(0),
                  ySkew:
                    null !== (_e = options.ySkew) && void 0 !== _e
                      ? _e
                      : degrees(0),
                  graphicsState: graphicsStateKey,
                })
              )
            }),
            (PDFPage.prototype.drawSvgPath = function (path, options) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j
              ;(void 0 === options && (options = {}),
                validators_assertIs(path, 'path', ['string']),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.scale, 'options.scale', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.borderWidth, 'options.borderWidth', [
                  'number',
                ]),
                assertOrUndefined(options.color, 'options.color', [
                  [Object, 'Color'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertOrUndefined(options.borderColor, 'options.borderColor', [
                  [Object, 'Color'],
                ]),
                assertOrUndefined(
                  options.borderDashArray,
                  'options.borderDashArray',
                  [Array]
                ),
                assertOrUndefined(
                  options.borderDashPhase,
                  'options.borderDashPhase',
                  ['number']
                ),
                assertIsOneOfOrUndefined(
                  options.borderLineCap,
                  'options.borderLineCap',
                  LineCapStyle
                ),
                assertRangeOrUndefined(
                  options.borderOpacity,
                  'options.borderOpacity',
                  0,
                  1
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var graphicsStateKey = this.maybeEmbedGraphicsState({
                opacity: options.opacity,
                borderOpacity: options.borderOpacity,
                blendMode: options.blendMode,
              })
              'color' in options ||
                'borderColor' in options ||
                (options.borderColor = rgb(0, 0, 0))
              var contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                (function (path, options) {
                  var _a, _b, _c
                  return __spreadArrays(
                    [
                      operators_pushGraphicsState(),
                      options.graphicsState &&
                        operators_setGraphicsState(options.graphicsState),
                      translate(options.x, options.y),
                      rotateRadians(
                        rotations_toRadians(
                          null !== (_a = options.rotate) && void 0 !== _a
                            ? _a
                            : degrees(0)
                        )
                      ),
                      options.scale
                        ? scale(options.scale, -options.scale)
                        : scale(1, -1),
                      options.color && colors_setFillingColor(options.color),
                      options.borderColor &&
                        setStrokingColor(options.borderColor),
                      options.borderWidth && setLineWidth(options.borderWidth),
                      options.borderLineCap &&
                        setLineCap(options.borderLineCap),
                      setDashPattern(
                        null !== (_b = options.borderDashArray) && void 0 !== _b
                          ? _b
                          : [],
                        null !== (_c = options.borderDashPhase) && void 0 !== _c
                          ? _c
                          : 0
                      ),
                    ],
                    svgPathToOperators(path),
                    [
                      options.color && options.borderWidth
                        ? fillAndStroke()
                        : options.color
                          ? fill()
                          : options.borderColor
                            ? stroke()
                            : closePath(),
                      operators_popGraphicsState(),
                    ]
                  ).filter(Boolean)
                })(path, {
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : this.x,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : this.y,
                  scale: options.scale,
                  rotate:
                    null !== (_c = options.rotate) && void 0 !== _c
                      ? _c
                      : degrees(0),
                  color:
                    null !== (_d = options.color) && void 0 !== _d
                      ? _d
                      : void 0,
                  borderColor:
                    null !== (_e = options.borderColor) && void 0 !== _e
                      ? _e
                      : void 0,
                  borderWidth:
                    null !== (_f = options.borderWidth) && void 0 !== _f
                      ? _f
                      : 0,
                  borderDashArray:
                    null !== (_g = options.borderDashArray) && void 0 !== _g
                      ? _g
                      : void 0,
                  borderDashPhase:
                    null !== (_h = options.borderDashPhase) && void 0 !== _h
                      ? _h
                      : void 0,
                  borderLineCap:
                    null !== (_j = options.borderLineCap) && void 0 !== _j
                      ? _j
                      : void 0,
                  graphicsState: graphicsStateKey,
                })
              )
            }),
            (PDFPage.prototype.drawLine = function (options) {
              var _a, _b, _c, _d, _e
              ;(validators_assertIs(options.start, 'options.start', [
                [Object, '{ x: number, y: number }'],
              ]),
                validators_assertIs(options.end, 'options.end', [
                  [Object, '{ x: number, y: number }'],
                ]),
                validators_assertIs(options.start.x, 'options.start.x', [
                  'number',
                ]),
                validators_assertIs(options.start.y, 'options.start.y', [
                  'number',
                ]),
                validators_assertIs(options.end.x, 'options.end.x', ['number']),
                validators_assertIs(options.end.y, 'options.end.y', ['number']),
                assertOrUndefined(options.thickness, 'options.thickness', [
                  'number',
                ]),
                assertOrUndefined(options.color, 'options.color', [
                  [Object, 'Color'],
                ]),
                assertOrUndefined(options.dashArray, 'options.dashArray', [
                  Array,
                ]),
                assertOrUndefined(options.dashPhase, 'options.dashPhase', [
                  'number',
                ]),
                assertIsOneOfOrUndefined(
                  options.lineCap,
                  'options.lineCap',
                  LineCapStyle
                ),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var graphicsStateKey = this.maybeEmbedGraphicsState({
                borderOpacity: options.opacity,
                blendMode: options.blendMode,
              })
              'color' in options || (options.color = rgb(0, 0, 0))
              var contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                (function (options) {
                  var _a, _b
                  return [
                    operators_pushGraphicsState(),
                    options.graphicsState &&
                      operators_setGraphicsState(options.graphicsState),
                    options.color && setStrokingColor(options.color),
                    setLineWidth(options.thickness),
                    setDashPattern(
                      null !== (_a = options.dashArray) && void 0 !== _a
                        ? _a
                        : [],
                      null !== (_b = options.dashPhase) && void 0 !== _b
                        ? _b
                        : 0
                    ),
                    moveTo(options.start.x, options.start.y),
                    options.lineCap && setLineCap(options.lineCap),
                    moveTo(options.start.x, options.start.y),
                    lineTo(options.end.x, options.end.y),
                    stroke(),
                    operators_popGraphicsState(),
                  ].filter(Boolean)
                })({
                  start: options.start,
                  end: options.end,
                  thickness:
                    null !== (_a = options.thickness) && void 0 !== _a ? _a : 1,
                  color:
                    null !== (_b = options.color) && void 0 !== _b
                      ? _b
                      : void 0,
                  dashArray:
                    null !== (_c = options.dashArray) && void 0 !== _c
                      ? _c
                      : void 0,
                  dashPhase:
                    null !== (_d = options.dashPhase) && void 0 !== _d
                      ? _d
                      : void 0,
                  lineCap:
                    null !== (_e = options.lineCap) && void 0 !== _e
                      ? _e
                      : void 0,
                  graphicsState: graphicsStateKey,
                })
              )
            }),
            (PDFPage.prototype.drawRectangle = function (options) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o
              ;(void 0 === options && (options = {}),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.width, 'options.width', ['number']),
                assertOrUndefined(options.height, 'options.height', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.xSkew, 'options.xSkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.ySkew, 'options.ySkew', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.borderWidth, 'options.borderWidth', [
                  'number',
                ]),
                assertOrUndefined(options.color, 'options.color', [
                  [Object, 'Color'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertOrUndefined(options.borderColor, 'options.borderColor', [
                  [Object, 'Color'],
                ]),
                assertOrUndefined(
                  options.borderDashArray,
                  'options.borderDashArray',
                  [Array]
                ),
                assertOrUndefined(
                  options.borderDashPhase,
                  'options.borderDashPhase',
                  ['number']
                ),
                assertIsOneOfOrUndefined(
                  options.borderLineCap,
                  'options.borderLineCap',
                  LineCapStyle
                ),
                assertRangeOrUndefined(
                  options.borderOpacity,
                  'options.borderOpacity',
                  0,
                  1
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var graphicsStateKey = this.maybeEmbedGraphicsState({
                opacity: options.opacity,
                borderOpacity: options.borderOpacity,
                blendMode: options.blendMode,
              })
              'color' in options ||
                'borderColor' in options ||
                (options.color = rgb(0, 0, 0))
              var contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                drawRectangle({
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : this.x,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : this.y,
                  width:
                    null !== (_c = options.width) && void 0 !== _c ? _c : 150,
                  height:
                    null !== (_d = options.height) && void 0 !== _d ? _d : 100,
                  rotate:
                    null !== (_e = options.rotate) && void 0 !== _e
                      ? _e
                      : degrees(0),
                  xSkew:
                    null !== (_f = options.xSkew) && void 0 !== _f
                      ? _f
                      : degrees(0),
                  ySkew:
                    null !== (_g = options.ySkew) && void 0 !== _g
                      ? _g
                      : degrees(0),
                  borderWidth:
                    null !== (_h = options.borderWidth) && void 0 !== _h
                      ? _h
                      : 0,
                  color:
                    null !== (_j = options.color) && void 0 !== _j
                      ? _j
                      : void 0,
                  borderColor:
                    null !== (_k = options.borderColor) && void 0 !== _k
                      ? _k
                      : void 0,
                  borderDashArray:
                    null !== (_l = options.borderDashArray) && void 0 !== _l
                      ? _l
                      : void 0,
                  borderDashPhase:
                    null !== (_m = options.borderDashPhase) && void 0 !== _m
                      ? _m
                      : void 0,
                  graphicsState: graphicsStateKey,
                  borderLineCap:
                    null !== (_o = options.borderLineCap) && void 0 !== _o
                      ? _o
                      : void 0,
                })
              )
            }),
            (PDFPage.prototype.drawSquare = function (options) {
              void 0 === options && (options = {})
              var size = options.size
              ;(assertOrUndefined(size, 'size', ['number']),
                this.drawRectangle(
                  __assign(__assign({}, options), { width: size, height: size })
                ))
            }),
            (PDFPage.prototype.drawEllipse = function (options) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l
              ;(void 0 === options && (options = {}),
                assertOrUndefined(options.x, 'options.x', ['number']),
                assertOrUndefined(options.y, 'options.y', ['number']),
                assertOrUndefined(options.xScale, 'options.xScale', ['number']),
                assertOrUndefined(options.yScale, 'options.yScale', ['number']),
                assertOrUndefined(options.rotate, 'options.rotate', [
                  [Object, 'Rotation'],
                ]),
                assertOrUndefined(options.color, 'options.color', [
                  [Object, 'Color'],
                ]),
                assertRangeOrUndefined(
                  options.opacity,
                  'opacity.opacity',
                  0,
                  1
                ),
                assertOrUndefined(options.borderColor, 'options.borderColor', [
                  [Object, 'Color'],
                ]),
                assertRangeOrUndefined(
                  options.borderOpacity,
                  'options.borderOpacity',
                  0,
                  1
                ),
                assertOrUndefined(options.borderWidth, 'options.borderWidth', [
                  'number',
                ]),
                assertOrUndefined(
                  options.borderDashArray,
                  'options.borderDashArray',
                  [Array]
                ),
                assertOrUndefined(
                  options.borderDashPhase,
                  'options.borderDashPhase',
                  ['number']
                ),
                assertIsOneOfOrUndefined(
                  options.borderLineCap,
                  'options.borderLineCap',
                  LineCapStyle
                ),
                assertIsOneOfOrUndefined(
                  options.blendMode,
                  'options.blendMode',
                  BlendMode
                ))
              var graphicsStateKey = this.maybeEmbedGraphicsState({
                opacity: options.opacity,
                borderOpacity: options.borderOpacity,
                blendMode: options.blendMode,
              })
              'color' in options ||
                'borderColor' in options ||
                (options.color = rgb(0, 0, 0))
              var contentStream = this.getContentStream()
              contentStream.push.apply(
                contentStream,
                drawEllipse({
                  x: null !== (_a = options.x) && void 0 !== _a ? _a : this.x,
                  y: null !== (_b = options.y) && void 0 !== _b ? _b : this.y,
                  xScale:
                    null !== (_c = options.xScale) && void 0 !== _c ? _c : 100,
                  yScale:
                    null !== (_d = options.yScale) && void 0 !== _d ? _d : 100,
                  rotate:
                    null !== (_e = options.rotate) && void 0 !== _e
                      ? _e
                      : void 0,
                  color:
                    null !== (_f = options.color) && void 0 !== _f
                      ? _f
                      : void 0,
                  borderColor:
                    null !== (_g = options.borderColor) && void 0 !== _g
                      ? _g
                      : void 0,
                  borderWidth:
                    null !== (_h = options.borderWidth) && void 0 !== _h
                      ? _h
                      : 0,
                  borderDashArray:
                    null !== (_j = options.borderDashArray) && void 0 !== _j
                      ? _j
                      : void 0,
                  borderDashPhase:
                    null !== (_k = options.borderDashPhase) && void 0 !== _k
                      ? _k
                      : void 0,
                  borderLineCap:
                    null !== (_l = options.borderLineCap) && void 0 !== _l
                      ? _l
                      : void 0,
                  graphicsState: graphicsStateKey,
                })
              )
            }),
            (PDFPage.prototype.drawCircle = function (options) {
              void 0 === options && (options = {})
              var _a = options.size,
                size = void 0 === _a ? 100 : _a
              ;(assertOrUndefined(size, 'size', ['number']),
                this.drawEllipse(
                  __assign(__assign({}, options), {
                    xScale: size,
                    yScale: size,
                  })
                ))
            }),
            (PDFPage.prototype.setOrEmbedFont = function (font) {
              var oldFont = this.font,
                oldFontKey = this.fontKey
              return (
                font ? this.setFont(font) : this.getFont(),
                {
                  oldFont,
                  oldFontKey,
                  newFont: this.font,
                  newFontKey: this.fontKey,
                }
              )
            }),
            (PDFPage.prototype.getFont = function () {
              if (!this.font || !this.fontKey) {
                var font = this.doc.embedStandardFont(StandardFonts.Helvetica)
                this.setFont(font)
              }
              return [this.font, this.fontKey]
            }),
            (PDFPage.prototype.resetFont = function () {
              ;((this.font = void 0), (this.fontKey = void 0))
            }),
            (PDFPage.prototype.getContentStream = function (useExisting) {
              return (
                void 0 === useExisting && (useExisting = !0),
                (useExisting && this.contentStream) ||
                  ((this.contentStream = this.createContentStream()),
                  (this.contentStreamRef = this.doc.context.register(
                    this.contentStream
                  )),
                  this.node.addContentStream(this.contentStreamRef)),
                this.contentStream
              )
            }),
            (PDFPage.prototype.createContentStream = function () {
              for (var operators = [], _i = 0; _i < arguments.length; _i++)
                operators[_i] = arguments[_i]
              var dict = this.doc.context.obj({})
              return structures_PDFContentStream.of(dict, operators)
            }),
            (PDFPage.prototype.maybeEmbedGraphicsState = function (options) {
              var opacity = options.opacity,
                borderOpacity = options.borderOpacity,
                blendMode = options.blendMode
              if (
                void 0 !== opacity ||
                void 0 !== borderOpacity ||
                void 0 !== blendMode
              ) {
                var graphicsState = this.doc.context.obj({
                  Type: 'ExtGState',
                  ca: opacity,
                  CA: borderOpacity,
                  BM: blendMode,
                })
                return this.node.newExtGState('GS', graphicsState)
              }
            }),
            (PDFPage.prototype.scaleAnnot = function (annot, x, y) {
              for (
                var selectors = [
                    'RD',
                    'CL',
                    'Vertices',
                    'QuadPoints',
                    'L',
                    'Rect',
                  ],
                  idx = 0,
                  len = selectors.length;
                idx < len;
                idx++
              ) {
                var list = annot.lookup(objects_PDFName.of(selectors[idx]))
                list instanceof objects_PDFArray && list.scalePDFNumbers(x, y)
              }
              var inkLists = annot.lookup(objects_PDFName.of('InkList'))
              if (inkLists instanceof objects_PDFArray)
                for (idx = 0, len = inkLists.size(); idx < len; idx++) {
                  var arr = inkLists.lookup(idx)
                  arr instanceof objects_PDFArray && arr.scalePDFNumbers(x, y)
                }
            }),
            (PDFPage.of = function (leafNode, ref, doc) {
              return new PDFPage(leafNode, ref, doc)
            }),
            (PDFPage.create = function (doc) {
              validators_assertIs(doc, 'doc', [
                [api_PDFDocument, 'PDFDocument'],
              ])
              var dummyRef = objects_PDFRef.of(-1),
                pageLeaf = structures_PDFPageLeaf.withContextAndParent(
                  doc.context,
                  dummyRef
                )
              return new PDFPage(pageLeaf, doc.context.register(pageLeaf), doc)
            }),
            PDFPage
          )
        })()
        const api_PDFPage = PDFPage
        var PDFButton = (function (_super) {
          function PDFButton(acroPushButton, ref, doc) {
            var _this = _super.call(this, acroPushButton, ref, doc) || this
            return (
              validators_assertIs(acroPushButton, 'acroButton', [
                [acroform_PDFAcroPushButton, 'PDFAcroPushButton'],
              ]),
              (_this.acroField = acroPushButton),
              _this
            )
          }
          return (
            __extends(PDFButton, _super),
            (PDFButton.prototype.setImage = function (image, alignment) {
              void 0 === alignment && (alignment = ImageAlignment.Center)
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx],
                  streamRef = this.createImageAppearanceStream(
                    widget,
                    image,
                    alignment
                  )
                this.updateWidgetAppearances(widget, { normal: streamRef })
              }
              this.markAsClean()
            }),
            (PDFButton.prototype.setFontSize = function (fontSize) {
              ;(assertPositive(fontSize, 'fontSize'),
                this.acroField.setFontSize(fontSize),
                this.markAsDirty())
            }),
            (PDFButton.prototype.addToPage = function (text, page, options) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l
              ;(assertOrUndefined(text, 'text', ['string']),
                assertOrUndefined(page, 'page', [[api_PDFPage, 'PDFPage']]),
                assertFieldAppearanceOptions(options))
              var widget = this.createWidget({
                  x:
                    (null !== (_a = null == options ? void 0 : options.x) &&
                    void 0 !== _a
                      ? _a
                      : 0) -
                    (null !==
                      (_b = null == options ? void 0 : options.borderWidth) &&
                    void 0 !== _b
                      ? _b
                      : 0) /
                      2,
                  y:
                    (null !== (_c = null == options ? void 0 : options.y) &&
                    void 0 !== _c
                      ? _c
                      : 0) -
                    (null !==
                      (_d = null == options ? void 0 : options.borderWidth) &&
                    void 0 !== _d
                      ? _d
                      : 0) /
                      2,
                  width:
                    null !== (_e = null == options ? void 0 : options.width) &&
                    void 0 !== _e
                      ? _e
                      : 100,
                  height:
                    null !== (_f = null == options ? void 0 : options.height) &&
                    void 0 !== _f
                      ? _f
                      : 50,
                  textColor:
                    null !==
                      (_g = null == options ? void 0 : options.textColor) &&
                    void 0 !== _g
                      ? _g
                      : rgb(0, 0, 0),
                  backgroundColor:
                    null !==
                      (_h =
                        null == options ? void 0 : options.backgroundColor) &&
                    void 0 !== _h
                      ? _h
                      : rgb(0.75, 0.75, 0.75),
                  borderColor: null == options ? void 0 : options.borderColor,
                  borderWidth:
                    null !==
                      (_j = null == options ? void 0 : options.borderWidth) &&
                    void 0 !== _j
                      ? _j
                      : 0,
                  rotate:
                    null !== (_k = null == options ? void 0 : options.rotate) &&
                    void 0 !== _k
                      ? _k
                      : degrees(0),
                  caption: text,
                  hidden: null == options ? void 0 : options.hidden,
                  page: page.ref,
                }),
                widgetRef = this.doc.context.register(widget.dict)
              this.acroField.addWidget(widgetRef)
              var font =
                null !== (_l = null == options ? void 0 : options.font) &&
                void 0 !== _l
                  ? _l
                  : this.doc.getForm().getDefaultFont()
              ;(this.updateWidgetAppearance(widget, font),
                page.node.addAnnot(widgetRef))
            }),
            (PDFButton.prototype.needsAppearancesUpdate = function () {
              var _a
              if (this.isDirty()) return !0
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                if (
                  !(
                    (null === (_a = widgets[idx].getAppearances()) ||
                    void 0 === _a
                      ? void 0
                      : _a.normal) instanceof objects_PDFStream
                  )
                )
                  return !0
              }
              return !1
            }),
            (PDFButton.prototype.defaultUpdateAppearances = function (font) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                this.updateAppearances(font))
            }),
            (PDFButton.prototype.updateAppearances = function (font, provider) {
              ;(validators_assertIs(font, 'font', [[api_PDFFont, 'PDFFont']]),
                assertOrUndefined(provider, 'provider', [Function]))
              for (
                var widgets = this.acroField.getWidgets(),
                  idx = 0,
                  len = widgets.length;
                idx < len;
                idx++
              ) {
                var widget = widgets[idx]
                this.updateWidgetAppearance(widget, font, provider)
              }
            }),
            (PDFButton.prototype.updateWidgetAppearance = function (
              widget,
              font,
              provider
            ) {
              var appearances = normalizeAppearance(
                (null != provider ? provider : defaultButtonAppearanceProvider)(
                  this,
                  widget,
                  font
                )
              )
              this.updateWidgetAppearanceWithFont(widget, font, appearances)
            }),
            (PDFButton.of = function (acroPushButton, ref, doc) {
              return new PDFButton(acroPushButton, ref, doc)
            }),
            PDFButton
          )
        })(form_PDFField)
        const form_PDFButton = PDFButton
      },
  },
])
