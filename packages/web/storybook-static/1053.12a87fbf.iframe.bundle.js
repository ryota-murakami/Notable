'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [1053],
  {
    '../../node_modules/.pnpm/@radix-ui+react-slider@1.3.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_c5f6a88900af0ccede532eedc8bda40a/node_modules/@radix-ui/react-slider/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Q6: () => Range,
          bL: () => Root,
          zi: () => Thumb,
          CC: () => Track,
        })
        var react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function clamp(value, [min, max]) {
          return Math.min(max, Math.max(min, value))
        }
        var dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+primitive@1.1.2/node_modules/@radix-ui/primitive/dist/index.mjs'
          ),
          react_compose_refs_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs'
          ),
          react_context_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-context/dist/index.mjs'
          ),
          react_use_controllable_state_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs'
          ),
          react_direction_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-direction/dist/index.mjs'
          ),
          react_use_previous_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs'
          ),
          react_use_size_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-size/dist/index.mjs'
          ),
          react_primitive_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.1.6_@types+react@19.1.8__@types+rea_6e0f845fa0b5165e723599b67dc13bbf/node_modules/@radix-ui/react-primitive/dist/index.mjs'
          ),
          react_collection_dist = __webpack_require__(
            '../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.1.6_@types+react@19.1.8__@types+re_b26c6d948d533107753195e05bbf9d47/node_modules/@radix-ui/react-collection/dist/index.mjs'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          PAGE_KEYS = ['PageUp', 'PageDown'],
          ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
          BACK_KEYS = {
            'from-left': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
            'from-right': ['Home', 'PageDown', 'ArrowDown', 'ArrowRight'],
            'from-bottom': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
            'from-top': ['Home', 'PageDown', 'ArrowUp', 'ArrowLeft'],
          },
          [Collection, useCollection, createCollectionScope] = (0,
          react_collection_dist.N)('Slider'),
          [createSliderContext, createSliderScope] = (0, react_context_dist.A)(
            'Slider',
            [createCollectionScope]
          ),
          [SliderProvider, useSliderContext] = createSliderContext('Slider'),
          Slider = react.forwardRef((props, forwardedRef) => {
            const {
                name,
                min = 0,
                max = 100,
                step = 1,
                orientation = 'horizontal',
                disabled = !1,
                minStepsBetweenThumbs = 0,
                defaultValue = [min],
                value,
                onValueChange = () => {},
                onValueCommit = () => {},
                inverted = !1,
                form,
                ...sliderProps
              } = props,
              thumbRefs = react.useRef(new Set()),
              valueIndexToChangeRef = react.useRef(0),
              SliderOrientation =
                'horizontal' === orientation
                  ? SliderHorizontal
                  : SliderVertical,
              [values = [], setValues] = (0,
              react_use_controllable_state_dist.i)({
                prop: value,
                defaultProp: defaultValue,
                onChange: (value2) => {
                  const thumbs = [...thumbRefs.current]
                  ;(thumbs[valueIndexToChangeRef.current]?.focus(),
                    onValueChange(value2))
                },
              }),
              valuesBeforeSlideStartRef = react.useRef(values)
            function updateValues(
              value2,
              atIndex,
              { commit } = { commit: !1 }
            ) {
              const decimalCount = (function getDecimalCount(value) {
                  return (String(value).split('.')[1] || '').length
                })(step),
                snapToStep = (function roundValue(value, decimalCount) {
                  const rounder = Math.pow(10, decimalCount)
                  return Math.round(value * rounder) / rounder
                })(
                  Math.round((value2 - min) / step) * step + min,
                  decimalCount
                ),
                nextValue = clamp(snapToStep, [min, max])
              setValues((prevValues = []) => {
                const nextValues = (function getNextSortedValues(
                  prevValues = [],
                  nextValue,
                  atIndex
                ) {
                  const nextValues = [...prevValues]
                  return (
                    (nextValues[atIndex] = nextValue),
                    nextValues.sort((a, b) => a - b)
                  )
                })(prevValues, nextValue, atIndex)
                if (
                  (function hasMinStepsBetweenValues(
                    values,
                    minStepsBetweenValues
                  ) {
                    if (minStepsBetweenValues > 0) {
                      const stepsBetweenValues =
                        (function getStepsBetweenValues(values) {
                          return values
                            .slice(0, -1)
                            .map((value, index) => values[index + 1] - value)
                        })(values)
                      return (
                        Math.min(...stepsBetweenValues) >= minStepsBetweenValues
                      )
                    }
                    return !0
                  })(nextValues, minStepsBetweenThumbs * step)
                ) {
                  valueIndexToChangeRef.current = nextValues.indexOf(nextValue)
                  const hasChanged = String(nextValues) !== String(prevValues)
                  return (
                    hasChanged && commit && onValueCommit(nextValues),
                    hasChanged ? nextValues : prevValues
                  )
                }
                return prevValues
              })
            }
            return (0, jsx_runtime.jsx)(SliderProvider, {
              scope: props.__scopeSlider,
              name,
              disabled,
              min,
              max,
              valueIndexToChangeRef,
              thumbs: thumbRefs.current,
              values,
              orientation,
              form,
              children: (0, jsx_runtime.jsx)(Collection.Provider, {
                scope: props.__scopeSlider,
                children: (0, jsx_runtime.jsx)(Collection.Slot, {
                  scope: props.__scopeSlider,
                  children: (0, jsx_runtime.jsx)(SliderOrientation, {
                    'aria-disabled': disabled,
                    'data-disabled': disabled ? '' : void 0,
                    ...sliderProps,
                    ref: forwardedRef,
                    onPointerDown: (0, dist.m)(
                      sliderProps.onPointerDown,
                      () => {
                        disabled || (valuesBeforeSlideStartRef.current = values)
                      }
                    ),
                    min,
                    max,
                    inverted,
                    onSlideStart: disabled
                      ? void 0
                      : function handleSlideStart(value2) {
                          const closestIndex = (function getClosestValueIndex(
                            values,
                            nextValue
                          ) {
                            if (1 === values.length) return 0
                            const distances = values.map((value) =>
                                Math.abs(value - nextValue)
                              ),
                              closestDistance = Math.min(...distances)
                            return distances.indexOf(closestDistance)
                          })(values, value2)
                          updateValues(value2, closestIndex)
                        },
                    onSlideMove: disabled
                      ? void 0
                      : function handleSlideMove(value2) {
                          updateValues(value2, valueIndexToChangeRef.current)
                        },
                    onSlideEnd: disabled
                      ? void 0
                      : function handleSlideEnd() {
                          const prevValue =
                            valuesBeforeSlideStartRef.current[
                              valueIndexToChangeRef.current
                            ]
                          values[valueIndexToChangeRef.current] !== prevValue &&
                            onValueCommit(values)
                        },
                    onHomeKeyDown: () =>
                      !disabled && updateValues(min, 0, { commit: !0 }),
                    onEndKeyDown: () =>
                      !disabled &&
                      updateValues(max, values.length - 1, { commit: !0 }),
                    onStepKeyDown: ({ event, direction: stepDirection }) => {
                      if (!disabled) {
                        const multiplier =
                            PAGE_KEYS.includes(event.key) ||
                            (event.shiftKey && ARROW_KEYS.includes(event.key))
                              ? 10
                              : 1,
                          atIndex = valueIndexToChangeRef.current
                        updateValues(
                          values[atIndex] + step * multiplier * stepDirection,
                          atIndex,
                          { commit: !0 }
                        )
                      }
                    },
                  }),
                }),
              }),
            })
          })
        Slider.displayName = 'Slider'
        var [SliderOrientationProvider, useSliderOrientationContext] =
            createSliderContext('Slider', {
              startEdge: 'left',
              endEdge: 'right',
              size: 'width',
              direction: 1,
            }),
          SliderHorizontal = react.forwardRef((props, forwardedRef) => {
            const {
                min,
                max,
                dir,
                inverted,
                onSlideStart,
                onSlideMove,
                onSlideEnd,
                onStepKeyDown,
                ...sliderProps
              } = props,
              [slider, setSlider] = react.useState(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node) => setSlider(node)
              ),
              rectRef = react.useRef(void 0),
              direction = (0, react_direction_dist.jH)(dir),
              isDirectionLTR = 'ltr' === direction,
              isSlidingFromLeft =
                (isDirectionLTR && !inverted) || (!isDirectionLTR && inverted)
            function getValueFromPointer(pointerPosition) {
              const rect = rectRef.current || slider.getBoundingClientRect(),
                value = linearScale(
                  [0, rect.width],
                  isSlidingFromLeft ? [min, max] : [max, min]
                )
              return (
                (rectRef.current = rect),
                value(pointerPosition - rect.left)
              )
            }
            return (0, jsx_runtime.jsx)(SliderOrientationProvider, {
              scope: props.__scopeSlider,
              startEdge: isSlidingFromLeft ? 'left' : 'right',
              endEdge: isSlidingFromLeft ? 'right' : 'left',
              direction: isSlidingFromLeft ? 1 : -1,
              size: 'width',
              children: (0, jsx_runtime.jsx)(SliderImpl, {
                dir: direction,
                'data-orientation': 'horizontal',
                ...sliderProps,
                ref: composedRefs,
                style: {
                  ...sliderProps.style,
                  '--radix-slider-thumb-transform': 'translateX(-50%)',
                },
                onSlideStart: (event) => {
                  const value = getValueFromPointer(event.clientX)
                  onSlideStart?.(value)
                },
                onSlideMove: (event) => {
                  const value = getValueFromPointer(event.clientX)
                  onSlideMove?.(value)
                },
                onSlideEnd: () => {
                  ;((rectRef.current = void 0), onSlideEnd?.())
                },
                onStepKeyDown: (event) => {
                  const isBackKey = BACK_KEYS[
                    isSlidingFromLeft ? 'from-left' : 'from-right'
                  ].includes(event.key)
                  onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 })
                },
              }),
            })
          }),
          SliderVertical = react.forwardRef((props, forwardedRef) => {
            const {
                min,
                max,
                inverted,
                onSlideStart,
                onSlideMove,
                onSlideEnd,
                onStepKeyDown,
                ...sliderProps
              } = props,
              sliderRef = react.useRef(null),
              ref = (0, react_compose_refs_dist.s)(forwardedRef, sliderRef),
              rectRef = react.useRef(void 0),
              isSlidingFromBottom = !inverted
            function getValueFromPointer(pointerPosition) {
              const rect =
                  rectRef.current || sliderRef.current.getBoundingClientRect(),
                value = linearScale(
                  [0, rect.height],
                  isSlidingFromBottom ? [max, min] : [min, max]
                )
              return (
                (rectRef.current = rect),
                value(pointerPosition - rect.top)
              )
            }
            return (0, jsx_runtime.jsx)(SliderOrientationProvider, {
              scope: props.__scopeSlider,
              startEdge: isSlidingFromBottom ? 'bottom' : 'top',
              endEdge: isSlidingFromBottom ? 'top' : 'bottom',
              size: 'height',
              direction: isSlidingFromBottom ? 1 : -1,
              children: (0, jsx_runtime.jsx)(SliderImpl, {
                'data-orientation': 'vertical',
                ...sliderProps,
                ref,
                style: {
                  ...sliderProps.style,
                  '--radix-slider-thumb-transform': 'translateY(50%)',
                },
                onSlideStart: (event) => {
                  const value = getValueFromPointer(event.clientY)
                  onSlideStart?.(value)
                },
                onSlideMove: (event) => {
                  const value = getValueFromPointer(event.clientY)
                  onSlideMove?.(value)
                },
                onSlideEnd: () => {
                  ;((rectRef.current = void 0), onSlideEnd?.())
                },
                onStepKeyDown: (event) => {
                  const isBackKey = BACK_KEYS[
                    isSlidingFromBottom ? 'from-bottom' : 'from-top'
                  ].includes(event.key)
                  onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 })
                },
              }),
            })
          }),
          SliderImpl = react.forwardRef((props, forwardedRef) => {
            const {
                __scopeSlider,
                onSlideStart,
                onSlideMove,
                onSlideEnd,
                onHomeKeyDown,
                onEndKeyDown,
                onStepKeyDown,
                ...sliderProps
              } = props,
              context = useSliderContext('Slider', __scopeSlider)
            return (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
              ...sliderProps,
              ref: forwardedRef,
              onKeyDown: (0, dist.m)(props.onKeyDown, (event) => {
                'Home' === event.key
                  ? (onHomeKeyDown(event), event.preventDefault())
                  : 'End' === event.key
                    ? (onEndKeyDown(event), event.preventDefault())
                    : PAGE_KEYS.concat(ARROW_KEYS).includes(event.key) &&
                      (onStepKeyDown(event), event.preventDefault())
              }),
              onPointerDown: (0, dist.m)(props.onPointerDown, (event) => {
                const target = event.target
                ;(target.setPointerCapture(event.pointerId),
                  event.preventDefault(),
                  context.thumbs.has(target)
                    ? target.focus()
                    : onSlideStart(event))
              }),
              onPointerMove: (0, dist.m)(props.onPointerMove, (event) => {
                event.target.hasPointerCapture(event.pointerId) &&
                  onSlideMove(event)
              }),
              onPointerUp: (0, dist.m)(props.onPointerUp, (event) => {
                const target = event.target
                target.hasPointerCapture(event.pointerId) &&
                  (target.releasePointerCapture(event.pointerId),
                  onSlideEnd(event))
              }),
            })
          }),
          SliderTrack = react.forwardRef((props, forwardedRef) => {
            const { __scopeSlider, ...trackProps } = props,
              context = useSliderContext('SliderTrack', __scopeSlider)
            return (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
              'data-disabled': context.disabled ? '' : void 0,
              'data-orientation': context.orientation,
              ...trackProps,
              ref: forwardedRef,
            })
          })
        SliderTrack.displayName = 'SliderTrack'
        var SliderRange = react.forwardRef((props, forwardedRef) => {
          const { __scopeSlider, ...rangeProps } = props,
            context = useSliderContext('SliderRange', __scopeSlider),
            orientation = useSliderOrientationContext(
              'SliderRange',
              __scopeSlider
            ),
            ref = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.s)(forwardedRef, ref),
            valuesCount = context.values.length,
            percentages = context.values.map((value) =>
              convertValueToPercentage(value, context.min, context.max)
            ),
            offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0,
            offsetEnd = 100 - Math.max(...percentages)
          return (0, jsx_runtime.jsx)(react_primitive_dist.sG.span, {
            'data-orientation': context.orientation,
            'data-disabled': context.disabled ? '' : void 0,
            ...rangeProps,
            ref: composedRefs,
            style: {
              ...props.style,
              [orientation.startEdge]: offsetStart + '%',
              [orientation.endEdge]: offsetEnd + '%',
            },
          })
        })
        SliderRange.displayName = 'SliderRange'
        var SliderThumb = react.forwardRef((props, forwardedRef) => {
            const getItems = useCollection(props.__scopeSlider),
              [thumb, setThumb] = react.useState(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node) => setThumb(node)
              ),
              index = react.useMemo(
                () =>
                  thumb
                    ? getItems().findIndex((item) => item.ref.current === thumb)
                    : -1,
                [getItems, thumb]
              )
            return (0, jsx_runtime.jsx)(SliderThumbImpl, {
              ...props,
              ref: composedRefs,
              index,
            })
          }),
          SliderThumbImpl = react.forwardRef((props, forwardedRef) => {
            const { __scopeSlider, index, name, ...thumbProps } = props,
              context = useSliderContext('SliderThumb', __scopeSlider),
              orientation = useSliderOrientationContext(
                'SliderThumb',
                __scopeSlider
              ),
              [thumb, setThumb] = react.useState(null),
              composedRefs = (0, react_compose_refs_dist.s)(
                forwardedRef,
                (node) => setThumb(node)
              ),
              isFormControl = !thumb || context.form || !!thumb.closest('form'),
              size = (0, react_use_size_dist.X)(thumb),
              value = context.values[index],
              percent =
                void 0 === value
                  ? 0
                  : convertValueToPercentage(value, context.min, context.max),
              label = (function getLabel(index, totalValues) {
                return totalValues > 2
                  ? `Value ${index + 1} of ${totalValues}`
                  : 2 === totalValues
                    ? ['Minimum', 'Maximum'][index]
                    : void 0
              })(index, context.values.length),
              orientationSize = size?.[orientation.size],
              thumbInBoundsOffset = orientationSize
                ? (function getThumbInBoundsOffset(width, left, direction) {
                    const halfWidth = width / 2,
                      offset = linearScale([0, 50], [0, halfWidth])
                    return (halfWidth - offset(left) * direction) * direction
                  })(orientationSize, percent, orientation.direction)
                : 0
            return (
              react.useEffect(() => {
                if (thumb)
                  return (
                    context.thumbs.add(thumb),
                    () => {
                      context.thumbs.delete(thumb)
                    }
                  )
              }, [thumb, context.thumbs]),
              (0, jsx_runtime.jsxs)('span', {
                style: {
                  transform: 'var(--radix-slider-thumb-transform)',
                  position: 'absolute',
                  [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`,
                },
                children: [
                  (0, jsx_runtime.jsx)(Collection.ItemSlot, {
                    scope: props.__scopeSlider,
                    children: (0, jsx_runtime.jsx)(
                      react_primitive_dist.sG.span,
                      {
                        role: 'slider',
                        'aria-label': props['aria-label'] || label,
                        'aria-valuemin': context.min,
                        'aria-valuenow': value,
                        'aria-valuemax': context.max,
                        'aria-orientation': context.orientation,
                        'data-orientation': context.orientation,
                        'data-disabled': context.disabled ? '' : void 0,
                        tabIndex: context.disabled ? void 0 : 0,
                        ...thumbProps,
                        ref: composedRefs,
                        style:
                          void 0 === value ? { display: 'none' } : props.style,
                        onFocus: (0, dist.m)(props.onFocus, () => {
                          context.valueIndexToChangeRef.current = index
                        }),
                      }
                    ),
                  }),
                  isFormControl &&
                    (0, jsx_runtime.jsx)(
                      SliderBubbleInput,
                      {
                        name:
                          name ??
                          (context.name
                            ? context.name +
                              (context.values.length > 1 ? '[]' : '')
                            : void 0),
                        form: context.form,
                        value,
                      },
                      index
                    ),
                ],
              })
            )
          })
        SliderThumb.displayName = 'SliderThumb'
        var SliderBubbleInput = react.forwardRef(
          ({ __scopeSlider, value, ...props }, forwardedRef) => {
            const ref = react.useRef(null),
              composedRefs = (0, react_compose_refs_dist.s)(ref, forwardedRef),
              prevValue = (0, react_use_previous_dist.Z)(value)
            return (
              react.useEffect(() => {
                const input = ref.current
                if (!input) return
                const inputProto = window.HTMLInputElement.prototype,
                  setValue = Object.getOwnPropertyDescriptor(
                    inputProto,
                    'value'
                  ).set
                if (prevValue !== value && setValue) {
                  const event = new Event('input', { bubbles: !0 })
                  ;(setValue.call(input, value), input.dispatchEvent(event))
                }
              }, [prevValue, value]),
              (0, jsx_runtime.jsx)(react_primitive_dist.sG.input, {
                style: { display: 'none' },
                ...props,
                ref: composedRefs,
                defaultValue: value,
              })
            )
          }
        )
        function convertValueToPercentage(value, min, max) {
          return clamp((100 / (max - min)) * (value - min), [0, 100])
        }
        function linearScale(input, output) {
          return (value) => {
            if (input[0] === input[1] || output[0] === output[1])
              return output[0]
            const ratio = (output[1] - output[0]) / (input[1] - input[0])
            return output[0] + ratio * (value - input[0])
          }
        }
        SliderBubbleInput.displayName = 'RadioBubbleInput'
        var Root = Slider,
          Track = SliderTrack,
          Range = SliderRange,
          Thumb = SliderThumb
      },
    '../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.1.8_react@19.1.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => usePrevious })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        )
        function usePrevious(value) {
          const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
            value,
            previous: value,
          })
          return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
            () => (
              ref.current.value !== value &&
                ((ref.current.previous = ref.current.value),
                (ref.current.value = value)),
              ref.current.previous
            ),
            [value]
          )
        }
      },
  },
])
