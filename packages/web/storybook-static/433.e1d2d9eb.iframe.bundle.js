/*! For license information please see 433.e1d2d9eb.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [433],
  {
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
    '../../node_modules/.pnpm/@radix-ui+react-tabs@1.1.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19_8cd52d9caa616bb781708d02d8a50cb7/node_modules/@radix-ui/react-tabs/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          B8: () => List,
          UC: () => Content,
          bL: () => Root2,
          l9: () => Trigger,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs'
            ),
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
            ),
          _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+_5bba7bb9eb588b71fd9245f49300584b/node_modules/@radix-ui/react-roving-focus/dist/index.mjs'
            ),
          _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+reac_d340d9d39508cb250c25fc66451df4dd/node_modules/@radix-ui/react-presence/dist/index.mjs'
            ),
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_997b35f2e2aa9d3174fc03a0f79e437b/node_modules/@radix-ui/react-primitive/dist/index.mjs'
            ),
          _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs'
            ),
          _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
            ),
          _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          [createTabsContext, createTabsScope] = (0,
          _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)('Tabs', [
            _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__.RG,
          ]),
          useRovingFocusGroupScope = (0,
          _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__.RG)(),
          [TabsProvider, useTabsContext] = createTabsContext('Tabs'),
          Tabs = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            (props, forwardedRef) => {
              const {
                  __scopeTabs,
                  value: valueProp,
                  onValueChange,
                  defaultValue,
                  orientation = 'horizontal',
                  dir,
                  activationMode = 'automatic',
                  ...tabsProps
                } = props,
                direction = (0,
                _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__.jH)(dir),
                [value, setValue] = (0,
                _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__.i)(
                  {
                    prop: valueProp,
                    onChange: onValueChange,
                    defaultProp: defaultValue,
                  }
                )
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                TabsProvider,
                {
                  scope: __scopeTabs,
                  baseId: (0,
                  _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_6__.B)(),
                  value,
                  onValueChange: setValue,
                  orientation,
                  dir: direction,
                  activationMode,
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG
                      .div,
                    {
                      dir: direction,
                      'data-orientation': orientation,
                      ...tabsProps,
                      ref: forwardedRef,
                    }
                  ),
                }
              )
            }
          )
        Tabs.displayName = 'Tabs'
        var TabsList = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const { __scopeTabs, loop = !0, ...listProps } = props,
              context = useTabsContext('TabsList', __scopeTabs),
              rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__.bL,
              {
                asChild: !0,
                ...rovingFocusGroupScope,
                orientation: context.orientation,
                dir: context.dir,
                loop,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.div,
                  {
                    role: 'tablist',
                    'aria-orientation': context.orientation,
                    ...listProps,
                    ref: forwardedRef,
                  }
                ),
              }
            )
          }
        )
        TabsList.displayName = 'TabsList'
        var TabsTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const {
                __scopeTabs,
                value,
                disabled = !1,
                ...triggerProps
              } = props,
              context = useTabsContext('TabsTrigger', __scopeTabs),
              rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs),
              triggerId = makeTriggerId(context.baseId, value),
              contentId = makeContentId(context.baseId, value),
              isSelected = value === context.value
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__.q7,
              {
                asChild: !0,
                ...rovingFocusGroupScope,
                focusable: !disabled,
                active: isSelected,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG
                    .button,
                  {
                    type: 'button',
                    role: 'tab',
                    'aria-selected': isSelected,
                    'aria-controls': contentId,
                    'data-state': isSelected ? 'active' : 'inactive',
                    'data-disabled': disabled ? '' : void 0,
                    disabled,
                    id: triggerId,
                    ...triggerProps,
                    ref: forwardedRef,
                    onMouseDown: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.m)(
                      props.onMouseDown,
                      (event) => {
                        disabled || 0 !== event.button || !1 !== event.ctrlKey
                          ? event.preventDefault()
                          : context.onValueChange(value)
                      }
                    ),
                    onKeyDown: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.m)(
                      props.onKeyDown,
                      (event) => {
                        ;[' ', 'Enter'].includes(event.key) &&
                          context.onValueChange(value)
                      }
                    ),
                    onFocus: (0,
                    _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.m)(
                      props.onFocus,
                      () => {
                        const isAutomaticActivation =
                          'manual' !== context.activationMode
                        isSelected ||
                          disabled ||
                          !isAutomaticActivation ||
                          context.onValueChange(value)
                      }
                    ),
                  }
                ),
              }
            )
          }
        )
        TabsTrigger.displayName = 'TabsTrigger'
        var TabsContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          (props, forwardedRef) => {
            const {
                __scopeTabs,
                value,
                forceMount,
                children,
                ...contentProps
              } = props,
              context = useTabsContext('TabsContent', __scopeTabs),
              triggerId = makeTriggerId(context.baseId, value),
              contentId = makeContentId(context.baseId, value),
              isSelected = value === context.value,
              isMountAnimationPreventedRef =
                react__WEBPACK_IMPORTED_MODULE_0__.useRef(isSelected)
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const rAF = requestAnimationFrame(
                  () => (isMountAnimationPreventedRef.current = !1)
                )
                return () => cancelAnimationFrame(rAF)
              }, []),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__.C,
                {
                  present: forceMount || isSelected,
                  children: ({ present }) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG
                        .div,
                      {
                        'data-state': isSelected ? 'active' : 'inactive',
                        'data-orientation': context.orientation,
                        role: 'tabpanel',
                        'aria-labelledby': triggerId,
                        hidden: !present,
                        id: contentId,
                        tabIndex: 0,
                        ...contentProps,
                        ref: forwardedRef,
                        style: {
                          ...props.style,
                          animationDuration:
                            isMountAnimationPreventedRef.current
                              ? '0s'
                              : void 0,
                        },
                        children: present && children,
                      }
                    ),
                }
              )
            )
          }
        )
        function makeTriggerId(baseId, value) {
          return `${baseId}-trigger-${value}`
        }
        function makeContentId(baseId, value) {
          return `${baseId}-content-${value}`
        }
        TabsContent.displayName = 'TabsContent'
        var Root2 = Tabs,
          List = TabsList,
          Trigger = TabsTrigger,
          Content = TabsContent
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
  },
])
