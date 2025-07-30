/*! For license information please see 2929.095862c1.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [2929],
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
    '../../node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/cmdk/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          uB: () => _e,
          xL: () => Ie,
          L$: () => Ee,
          G7: () => Se,
          h_: () => he,
          oI: () => Ce,
          fx: () => ye,
        })
        var u = 0.999,
          m = /[\\\/_+.#"@\[\(\{&]/,
          B = /[\\\/_+.#"@\[\(\{&]/g,
          K = /[\s-]/,
          X = /[\s-]/g
        function G(_, C, h, P, A, f, O) {
          if (f === C.length) return A === _.length ? 1 : 0.99
          var T = `${A},${f}`
          if (void 0 !== O[T]) return O[T]
          for (
            var E, N, R, M, L = P.charAt(f), c = h.indexOf(L, A), S = 0;
            c >= 0;

          )
            ((E = G(_, C, h, P, c + 1, f + 1, O)) > S &&
              (c === A
                ? (E *= 1)
                : m.test(_.charAt(c - 1))
                  ? ((E *= 0.8),
                    (R = _.slice(A, c - 1).match(B)) &&
                      A > 0 &&
                      (E *= Math.pow(u, R.length)))
                  : K.test(_.charAt(c - 1))
                    ? ((E *= 0.9),
                      (M = _.slice(A, c - 1).match(X)) &&
                        A > 0 &&
                        (E *= Math.pow(u, M.length)))
                    : ((E *= 0.17), A > 0 && (E *= Math.pow(u, c - A))),
              _.charAt(c) !== C.charAt(f) && (E *= 0.9999)),
              ((E < 0.1 && h.charAt(c - 1) === P.charAt(f + 1)) ||
                (P.charAt(f + 1) === P.charAt(f) &&
                  h.charAt(c - 1) !== P.charAt(f))) &&
                0.1 * (N = G(_, C, h, P, c + 1, f + 2, O)) > E &&
                (E = 0.1 * N),
              E > S && (S = E),
              (c = h.indexOf(L, c + 1)))
          return ((O[T] = S), S)
        }
        function D(_) {
          return _.toLowerCase().replace(X, ' ')
        }
        function W(_, C, h) {
          return G(
            (_ = h && h.length > 0 ? '' + (_ + ' ' + h.join(' ')) : _),
            C,
            D(_),
            D(C),
            0,
            0,
            {}
          )
        }
        var dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.14_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react_ebf14a846abc2fe74b19ca0ca406c133/node_modules/@radix-ui/react-dialog/dist/index.mjs'
          ),
          react = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
          ),
          react_primitive_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          react_id_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs'
          ),
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          N = '[cmdk-group=""]',
          dist_Y = '[cmdk-group-items=""]',
          le = '[cmdk-item=""]',
          ce = `${le}:not([aria-disabled="true"])`,
          Z = 'cmdk-item-select',
          T = 'data-value',
          Re = (r, o, n) => W(r, o, n),
          ue = react.createContext(void 0),
          dist_K = () => react.useContext(ue),
          de = react.createContext(void 0),
          ee = () => react.useContext(de),
          fe = react.createContext(void 0),
          me = react.forwardRef((r, o) => {
            let n = L(() => {
                var e, a
                return {
                  search: '',
                  value:
                    null != (a = null != (e = r.value) ? e : r.defaultValue)
                      ? a
                      : '',
                  selectedItemId: void 0,
                  filtered: { count: 0, items: new Map(), groups: new Set() },
                }
              }),
              u = L(() => new Set()),
              c = L(() => new Map()),
              d = L(() => new Map()),
              f = L(() => new Set()),
              p = pe(r),
              {
                label: b,
                children: m,
                value: R,
                onValueChange: x,
                filter: C,
                shouldFilter: S,
                loop: A,
                disablePointerSelection: ge = !1,
                vimBindings: j = !0,
                ...O
              } = r,
              $ = (0, react_id_dist.B)(),
              q = (0, react_id_dist.B)(),
              _ = (0, react_id_dist.B)(),
              I = react.useRef(null),
              v = ke()
            ;(dist_k(() => {
              if (void 0 !== R) {
                let e = R.trim()
                ;((n.current.value = e), E.emit())
              }
            }, [R]),
              dist_k(() => {
                v(6, ne)
              }, []))
            let E = react.useMemo(
                () => ({
                  subscribe: (e) => (
                    f.current.add(e),
                    () => f.current.delete(e)
                  ),
                  snapshot: () => n.current,
                  setState: (e, a, s) => {
                    var i, l, g, y
                    if (!Object.is(n.current[e], a)) {
                      if (((n.current[e] = a), 'search' === e))
                        (J(), z(), v(1, W))
                      else if ('value' === e) {
                        if (
                          document.activeElement.hasAttribute('cmdk-input') ||
                          document.activeElement.hasAttribute('cmdk-root')
                        ) {
                          let h = document.getElementById(_)
                          h
                            ? h.focus()
                            : null == (i = document.getElementById($)) ||
                              i.focus()
                        }
                        if (
                          (v(7, () => {
                            var h
                            ;((n.current.selectedItemId =
                              null == (h = M()) ? void 0 : h.id),
                              E.emit())
                          }),
                          s || v(5, ne),
                          void 0 !==
                            (null == (l = p.current) ? void 0 : l.value))
                        ) {
                          let h = null != a ? a : ''
                          return void (
                            null == (y = (g = p.current).onValueChange) ||
                            y.call(g, h)
                          )
                        }
                      }
                      E.emit()
                    }
                  },
                  emit: () => {
                    f.current.forEach((e) => e())
                  },
                }),
                []
              ),
              U = react.useMemo(
                () => ({
                  value: (e, a, s) => {
                    var i
                    a !== (null == (i = d.current.get(e)) ? void 0 : i.value) &&
                      (d.current.set(e, { value: a, keywords: s }),
                      n.current.filtered.items.set(e, te(a, s)),
                      v(2, () => {
                        ;(z(), E.emit())
                      }))
                  },
                  item: (e, a) => (
                    u.current.add(e),
                    a &&
                      (c.current.has(a)
                        ? c.current.get(a).add(e)
                        : c.current.set(a, new Set([e]))),
                    v(3, () => {
                      ;(J(), z(), n.current.value || W(), E.emit())
                    }),
                    () => {
                      ;(d.current.delete(e),
                        u.current.delete(e),
                        n.current.filtered.items.delete(e))
                      let s = M()
                      v(4, () => {
                        ;(J(),
                          (null == s ? void 0 : s.getAttribute('id')) === e &&
                            W(),
                          E.emit())
                      })
                    }
                  ),
                  group: (e) => (
                    c.current.has(e) || c.current.set(e, new Set()),
                    () => {
                      ;(d.current.delete(e), c.current.delete(e))
                    }
                  ),
                  filter: () => p.current.shouldFilter,
                  label: b || r['aria-label'],
                  getDisablePointerSelection: () =>
                    p.current.disablePointerSelection,
                  listId: $,
                  inputId: _,
                  labelId: q,
                  listInnerRef: I,
                }),
                []
              )
            function te(e, a) {
              var i, l
              let s =
                null != (l = null == (i = p.current) ? void 0 : i.filter)
                  ? l
                  : Re
              return e ? s(e, n.current.search, a) : 0
            }
            function z() {
              if (!n.current.search || !1 === p.current.shouldFilter) return
              let e = n.current.filtered.items,
                a = []
              n.current.filtered.groups.forEach((i) => {
                let l = c.current.get(i),
                  g = 0
                ;(l.forEach((y) => {
                  let h = e.get(y)
                  g = Math.max(h, g)
                }),
                  a.push([i, g]))
              })
              let s = I.current
              ;(V()
                .sort((i, l) => {
                  var h, F
                  let g = i.getAttribute('id'),
                    y = l.getAttribute('id')
                  return (
                    (null != (h = e.get(y)) ? h : 0) -
                    (null != (F = e.get(g)) ? F : 0)
                  )
                })
                .forEach((i) => {
                  let l = i.closest(dist_Y)
                  l
                    ? l.appendChild(
                        i.parentElement === l ? i : i.closest(`${dist_Y} > *`)
                      )
                    : s.appendChild(
                        i.parentElement === s ? i : i.closest(`${dist_Y} > *`)
                      )
                }),
                a
                  .sort((i, l) => l[1] - i[1])
                  .forEach((i) => {
                    var g
                    let l =
                      null == (g = I.current)
                        ? void 0
                        : g.querySelector(
                            `${N}[${T}="${encodeURIComponent(i[0])}"]`
                          )
                    null == l || l.parentElement.appendChild(l)
                  }))
            }
            function W() {
              let e = V().find(
                  (s) => 'true' !== s.getAttribute('aria-disabled')
                ),
                a = null == e ? void 0 : e.getAttribute(T)
              E.setState('value', a || void 0)
            }
            function J() {
              var a, s, i, l
              if (!n.current.search || !1 === p.current.shouldFilter)
                return void (n.current.filtered.count = u.current.size)
              n.current.filtered.groups = new Set()
              let e = 0
              for (let g of u.current) {
                let F = te(
                  null !=
                    (s = null == (a = d.current.get(g)) ? void 0 : a.value)
                    ? s
                    : '',
                  null !=
                    (l = null == (i = d.current.get(g)) ? void 0 : i.keywords)
                    ? l
                    : []
                )
                ;(n.current.filtered.items.set(g, F), F > 0 && e++)
              }
              for (let [g, y] of c.current)
                for (let h of y)
                  if (n.current.filtered.items.get(h) > 0) {
                    n.current.filtered.groups.add(g)
                    break
                  }
              n.current.filtered.count = e
            }
            function ne() {
              var a, s, i
              let e = M()
              e &&
                ((null == (a = e.parentElement) ? void 0 : a.firstChild) ===
                  e &&
                  (null ==
                    (i =
                      null == (s = e.closest(N))
                        ? void 0
                        : s.querySelector('[cmdk-group-heading=""]')) ||
                    i.scrollIntoView({ block: 'nearest' })),
                e.scrollIntoView({ block: 'nearest' }))
            }
            function M() {
              var e
              return null == (e = I.current)
                ? void 0
                : e.querySelector(`${le}[aria-selected="true"]`)
            }
            function V() {
              var e
              return Array.from(
                (null == (e = I.current) ? void 0 : e.querySelectorAll(ce)) ||
                  []
              )
            }
            function X(e) {
              let s = V()[e]
              s && E.setState('value', s.getAttribute(T))
            }
            function Q(e) {
              var g
              let a = M(),
                s = V(),
                i = s.findIndex((y) => y === a),
                l = s[i + e]
              ;(null != (g = p.current) &&
                g.loop &&
                (l =
                  i + e < 0
                    ? s[s.length - 1]
                    : i + e === s.length
                      ? s[0]
                      : s[i + e]),
                l && E.setState('value', l.getAttribute(T)))
            }
            function re(e) {
              let i,
                a = M(),
                s = null == a ? void 0 : a.closest(N)
              for (; s && !i; )
                ((s = e > 0 ? we(s, N) : De(s, N)),
                  (i = null == s ? void 0 : s.querySelector(ce)))
              i ? E.setState('value', i.getAttribute(T)) : Q(e)
            }
            let oe = () => X(V().length - 1),
              ie = (e) => {
                ;(e.preventDefault(),
                  e.metaKey ? oe() : e.altKey ? re(1) : Q(1))
              },
              se = (e) => {
                ;(e.preventDefault(),
                  e.metaKey ? X(0) : e.altKey ? re(-1) : Q(-1))
              }
            return react.createElement(
              react_primitive_dist.sG.div,
              {
                ref: o,
                tabIndex: -1,
                ...O,
                'cmdk-root': '',
                onKeyDown: (e) => {
                  var s
                  null == (s = O.onKeyDown) || s.call(O, e)
                  let a = e.nativeEvent.isComposing || 229 === e.keyCode
                  if (!e.defaultPrevented && !a)
                    switch (e.key) {
                      case 'n':
                      case 'j':
                        j && e.ctrlKey && ie(e)
                        break
                      case 'ArrowDown':
                        ie(e)
                        break
                      case 'p':
                      case 'k':
                        j && e.ctrlKey && se(e)
                        break
                      case 'ArrowUp':
                        se(e)
                        break
                      case 'Home':
                        ;(e.preventDefault(), X(0))
                        break
                      case 'End':
                        ;(e.preventDefault(), oe())
                        break
                      case 'Enter': {
                        e.preventDefault()
                        let i = M()
                        if (i) {
                          let l = new Event(Z)
                          i.dispatchEvent(l)
                        }
                      }
                    }
                },
              },
              react.createElement(
                'label',
                {
                  'cmdk-label': '',
                  htmlFor: U.inputId,
                  id: U.labelId,
                  style: Te,
                },
                b
              ),
              dist_B(r, (e) =>
                react.createElement(
                  de.Provider,
                  { value: E },
                  react.createElement(ue.Provider, { value: U }, e)
                )
              )
            )
          }),
          he = react.forwardRef((r, o) => {
            var _, I
            let n = (0, react_id_dist.B)(),
              u = react.useRef(null),
              c = react.useContext(fe),
              d = dist_K(),
              f = pe(r),
              p =
                null != (I = null == (_ = f.current) ? void 0 : _.forceMount)
                  ? I
                  : null == c
                    ? void 0
                    : c.forceMount
            dist_k(() => {
              if (!p) return d.item(n, null == c ? void 0 : c.id)
            }, [p])
            let b = ve(n, u, [r.value, r.children, u], r.keywords),
              m = ee(),
              R = P((v) => v.value && v.value === b.current),
              x = P(
                (v) =>
                  !(!p && !1 !== d.filter()) ||
                  !v.search ||
                  v.filtered.items.get(n) > 0
              )
            function C() {
              var v, E
              ;(S(),
                null == (E = (v = f.current).onSelect) || E.call(v, b.current))
            }
            function S() {
              m.setState('value', b.current, !0)
            }
            if (
              (react.useEffect(() => {
                let v = u.current
                if (v && !r.disabled)
                  return (
                    v.addEventListener(Z, C),
                    () => v.removeEventListener(Z, C)
                  )
              }, [x, r.onSelect, r.disabled]),
              !x)
            )
              return null
            let {
              disabled: A,
              value: ge,
              onSelect: j,
              forceMount: O,
              keywords: $,
              ...q
            } = r
            return react.createElement(
              react_primitive_dist.sG.div,
              {
                ref: (0, react_compose_refs_dist.t)(u, o),
                ...q,
                id: n,
                'cmdk-item': '',
                role: 'option',
                'aria-disabled': !!A,
                'aria-selected': !!R,
                'data-disabled': !!A,
                'data-selected': !!R,
                onPointerMove: A || d.getDisablePointerSelection() ? void 0 : S,
                onClick: A ? void 0 : C,
              },
              r.children
            )
          }),
          Ee = react.forwardRef((r, o) => {
            let { heading: n, children: u, forceMount: c, ...d } = r,
              f = (0, react_id_dist.B)(),
              p = react.useRef(null),
              b = react.useRef(null),
              m = (0, react_id_dist.B)(),
              R = dist_K(),
              x = P(
                (S) =>
                  !(!c && !1 !== R.filter()) ||
                  !S.search ||
                  S.filtered.groups.has(f)
              )
            ;(dist_k(() => R.group(f), []), ve(f, p, [r.value, r.heading, b]))
            let C = react.useMemo(() => ({ id: f, forceMount: c }), [c])
            return react.createElement(
              react_primitive_dist.sG.div,
              {
                ref: (0, react_compose_refs_dist.t)(p, o),
                ...d,
                'cmdk-group': '',
                role: 'presentation',
                hidden: !x || void 0,
              },
              n &&
                react.createElement(
                  'div',
                  {
                    ref: b,
                    'cmdk-group-heading': '',
                    'aria-hidden': !0,
                    id: m,
                  },
                  n
                ),
              dist_B(r, (S) =>
                react.createElement(
                  'div',
                  {
                    'cmdk-group-items': '',
                    role: 'group',
                    'aria-labelledby': n ? m : void 0,
                  },
                  react.createElement(fe.Provider, { value: C }, S)
                )
              )
            )
          }),
          ye = react.forwardRef((r, o) => {
            let { alwaysRender: n, ...u } = r,
              c = react.useRef(null),
              d = P((f) => !f.search)
            return n || d
              ? react.createElement(react_primitive_dist.sG.div, {
                  ref: (0, react_compose_refs_dist.t)(c, o),
                  ...u,
                  'cmdk-separator': '',
                  role: 'separator',
                })
              : null
          }),
          Se = react.forwardRef((r, o) => {
            let { onValueChange: n, ...u } = r,
              c = null != r.value,
              d = ee(),
              f = P((m) => m.search),
              p = P((m) => m.selectedItemId),
              b = dist_K()
            return (
              react.useEffect(() => {
                null != r.value && d.setState('search', r.value)
              }, [r.value]),
              react.createElement(react_primitive_dist.sG.input, {
                ref: o,
                ...u,
                'cmdk-input': '',
                autoComplete: 'off',
                autoCorrect: 'off',
                spellCheck: !1,
                'aria-autocomplete': 'list',
                role: 'combobox',
                'aria-expanded': !0,
                'aria-controls': b.listId,
                'aria-labelledby': b.labelId,
                'aria-activedescendant': p,
                id: b.inputId,
                type: 'text',
                value: c ? r.value : f,
                onChange: (m) => {
                  ;(c || d.setState('search', m.target.value),
                    null == n || n(m.target.value))
                },
              })
            )
          }),
          Ce = react.forwardRef((r, o) => {
            let { children: n, label: u = 'Suggestions', ...c } = r,
              d = react.useRef(null),
              f = react.useRef(null),
              p = P((m) => m.selectedItemId),
              b = dist_K()
            return (
              react.useEffect(() => {
                if (f.current && d.current) {
                  let x,
                    m = f.current,
                    R = d.current,
                    C = new ResizeObserver(() => {
                      x = requestAnimationFrame(() => {
                        let S = m.offsetHeight
                        R.style.setProperty(
                          '--cmdk-list-height',
                          S.toFixed(1) + 'px'
                        )
                      })
                    })
                  return (
                    C.observe(m),
                    () => {
                      ;(cancelAnimationFrame(x), C.unobserve(m))
                    }
                  )
                }
              }, []),
              react.createElement(
                react_primitive_dist.sG.div,
                {
                  ref: (0, react_compose_refs_dist.t)(d, o),
                  ...c,
                  'cmdk-list': '',
                  role: 'listbox',
                  tabIndex: -1,
                  'aria-activedescendant': p,
                  'aria-label': u,
                  id: b.listId,
                },
                dist_B(r, (m) =>
                  react.createElement(
                    'div',
                    {
                      ref: (0, react_compose_refs_dist.t)(f, b.listInnerRef),
                      'cmdk-list-sizer': '',
                    },
                    m
                  )
                )
              )
            )
          }),
          xe = react.forwardRef((r, o) => {
            let {
              open: n,
              onOpenChange: u,
              overlayClassName: c,
              contentClassName: d,
              container: f,
              ...p
            } = r
            return react.createElement(
              dist.bL,
              { open: n, onOpenChange: u },
              react.createElement(
                dist.ZL,
                { container: f },
                react.createElement(dist.hJ, {
                  'cmdk-overlay': '',
                  className: c,
                }),
                react.createElement(
                  dist.UC,
                  { 'aria-label': r.label, 'cmdk-dialog': '', className: d },
                  react.createElement(me, { ref: o, ...p })
                )
              )
            )
          }),
          Ie = react.forwardRef((r, o) =>
            P((u) => 0 === u.filtered.count)
              ? react.createElement(react_primitive_dist.sG.div, {
                  ref: o,
                  ...r,
                  'cmdk-empty': '',
                  role: 'presentation',
                })
              : null
          ),
          Pe = react.forwardRef((r, o) => {
            let { progress: n, children: u, label: c = 'Loading...', ...d } = r
            return react.createElement(
              react_primitive_dist.sG.div,
              {
                ref: o,
                ...d,
                'cmdk-loading': '',
                role: 'progressbar',
                'aria-valuenow': n,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-label': c,
              },
              dist_B(r, (f) =>
                react.createElement('div', { 'aria-hidden': !0 }, f)
              )
            )
          }),
          _e = Object.assign(me, {
            List: Ce,
            Item: he,
            Input: Se,
            Group: Ee,
            Separator: ye,
            Dialog: xe,
            Empty: Ie,
            Loading: Pe,
          })
        function we(r, o) {
          let n = r.nextElementSibling
          for (; n; ) {
            if (n.matches(o)) return n
            n = n.nextElementSibling
          }
        }
        function De(r, o) {
          let n = r.previousElementSibling
          for (; n; ) {
            if (n.matches(o)) return n
            n = n.previousElementSibling
          }
        }
        function pe(r) {
          let o = react.useRef(r)
          return (
            dist_k(() => {
              o.current = r
            }),
            o
          )
        }
        var dist_k =
          'undefined' == typeof window ? react.useEffect : react.useLayoutEffect
        function L(r) {
          let o = react.useRef()
          return (void 0 === o.current && (o.current = r()), o)
        }
        function P(r) {
          let o = ee(),
            n = () => r(o.snapshot())
          return react.useSyncExternalStore(o.subscribe, n, n)
        }
        function ve(r, o, n, u = []) {
          let c = react.useRef(),
            d = dist_K()
          return (
            dist_k(() => {
              var b
              let f = (() => {
                  var m
                  for (let R of n) {
                    if ('string' == typeof R) return R.trim()
                    if ('object' == typeof R && 'current' in R)
                      return R.current
                        ? null == (m = R.current.textContent)
                          ? void 0
                          : m.trim()
                        : c.current
                  }
                })(),
                p = u.map((m) => m.trim())
              ;(d.value(r, f, p),
                null == (b = o.current) || b.setAttribute(T, f),
                (c.current = f))
            }),
            c
          )
        }
        var ke = () => {
          let [r, o] = react.useState(),
            n = L(() => new Map())
          return (
            dist_k(() => {
              ;(n.current.forEach((u) => u()), (n.current = new Map()))
            }, [r]),
            (u, c) => {
              ;(n.current.set(u, c), o({}))
            }
          )
        }
        function dist_B({ asChild: r, children: o }, n) {
          return r && react.isValidElement(o)
            ? react.cloneElement(
                (function Me(r) {
                  let o = r.type
                  return 'function' == typeof o
                    ? o(r.props)
                    : 'render' in o
                      ? o.render(r.props)
                      : r
                })(o),
                { ref: o.ref },
                n(o.props.children)
              )
            : n(o)
        }
        var Te = {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        }
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
  },
])
