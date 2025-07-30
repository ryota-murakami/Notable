/*! For license information please see ui-global-search-stories.7e74773c.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [7796],
  {
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Clock })
        const Clock = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Clock', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Filter })
        const Filter = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Filter', [
          [
            'polygon',
            {
              points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3',
              key: '1yg77f',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Hash })
        const Hash = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Hash', [
          ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
          ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
          ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
          ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => LoaderCircle })
        const LoaderCircle = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('LoaderCircle', [
          ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Search })
        const Search = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Search', [
          ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
          ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
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
    './components/ui/global-search.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomPlaceholder: () => CustomPlaceholder,
          DarkMode: () => DarkMode,
          Default: () => Default,
          FilterInteraction: () => FilterInteraction,
          InteractiveSearch: () => InteractiveSearch,
          MobileResponsive: () => MobileResponsive,
          NoFilters: () => NoFilters,
          NoHistory: () => NoHistory,
          WithInitialQuery: () => WithInitialQuery,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js'
          ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js'
          ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js'
          ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js'
          ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js'
          ),
        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/hash.js'
          ),
        _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/ui/input.tsx'
        ),
        _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./components/ui/button.tsx'),
        _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './components/ui/badge.tsx'
        ),
        _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./components/ui/popover.tsx')
      const mockSearchResults = [
          {
            note: {
              id: '1',
              title: 'Getting Started with React',
              content:
                'React is a JavaScript library for building user interfaces...',
              tags: ['react', 'javascript', 'frontend'],
              path: '/notes/getting-started-react',
              isFolder: !1,
              created_at: new Date('2024-01-15').toISOString(),
              updated_at: new Date('2024-01-20').toISOString(),
            },
            snippet:
              'React is a JavaScript library for building user interfaces. Learn the basics of components, props, and state.',
            score: 0.95,
            matches: [],
          },
          {
            note: {
              id: '2',
              title: 'TypeScript Best Practices',
              content: 'TypeScript adds static typing to JavaScript...',
              tags: ['typescript', 'javascript'],
              path: '/notes/typescript-best-practices',
              isFolder: !1,
              created_at: new Date('2024-01-10').toISOString(),
              updated_at: new Date('2024-01-18').toISOString(),
            },
            snippet:
              'TypeScript adds static typing to JavaScript. Use interfaces for object shapes and enums for constants.',
            score: 0.87,
            matches: [],
          },
          {
            note: {
              id: '3',
              title: 'Next.js App Router Guide',
              content:
                'The App Router is a new paradigm for building applications...',
              tags: ['nextjs', 'react', 'routing'],
              path: '/notes/nextjs-app-router-guide',
              isFolder: !1,
              created_at: new Date('2024-01-05').toISOString(),
              updated_at: new Date('2024-01-16').toISOString(),
            },
            snippet:
              "The App Router is a new paradigm for building applications using React's latest features.",
            score: 0.82,
            matches: [],
          },
        ],
        mockTags = [
          { id: '1', name: 'react', count: 15 },
          { id: '2', name: 'typescript', count: 12 },
          { id: '3', name: 'javascript', count: 20 },
          { id: '4', name: 'nextjs', count: 8 },
          { id: '5', name: 'frontend', count: 10 },
        ],
        mockSearchHistory = [
          {
            id: '1',
            query: 'react hooks',
            results_count: 12,
            timestamp: new Date('2024-01-20'),
          },
          {
            id: '2',
            query: 'typescript generics',
            results_count: 8,
            timestamp: new Date('2024-01-19'),
          },
          {
            id: '3',
            query: 'next.js routing',
            results_count: 15,
            timestamp: new Date('2024-01-18'),
          },
        ],
        __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/GlobalSearch',
          component: ({
            initialQuery = '',
            onNoteSelect,
            showFilters = !0,
            showHistory = !0,
            maxResults = 50,
            className,
            placeholder = 'Search notes, content, and tags...',
          }) => {
            const [query, setQuery] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialQuery),
              [isOpen, setIsOpen] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              [isSearching, setIsSearching] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              [results, setResults] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
              [selectedTags, setSelectedTags] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
              handleSearch = (value) => {
                ;(setQuery(value),
                  value
                    ? (setIsSearching(!0),
                      setTimeout(() => {
                        const filtered = mockSearchResults.filter(
                          (r) =>
                            r.note.title
                              .toLowerCase()
                              .includes(value.toLowerCase()) ||
                            r.note.content
                              .toLowerCase()
                              .includes(value.toLowerCase())
                        )
                        ;(setResults(filtered), setIsSearching(!1))
                      }, 500))
                    : setResults([]))
              }
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              'div',
              {
                className,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.AM,
                  {
                    open: isOpen,
                    onOpenChange: setIsOpen,
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.Wv,
                        {
                          asChild: !0,
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'div',
                            {
                              className: 'relative',
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__.A,
                                  {
                                    className:
                                      'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground',
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_ui_input__WEBPACK_IMPORTED_MODULE_3__.p,
                                  {
                                    value: query,
                                    onChange: (e) =>
                                      handleSearch(e.target.value),
                                    placeholder,
                                    className: 'pl-10 pr-10',
                                    onFocus: () => setIsOpen(!0),
                                  }
                                ),
                                query &&
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_ui_button__WEBPACK_IMPORTED_MODULE_4__.$,
                                    {
                                      variant: 'ghost',
                                      size: 'sm',
                                      className:
                                        'absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0',
                                      onClick: () => {
                                        ;(setQuery(''), setResults([]))
                                      },
                                      'aria-label': 'Clear search',
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__.A,
                                        { className: 'h-4 w-4' }
                                      ),
                                    }
                                  ),
                              ],
                            }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.hl,
                        {
                          className: 'w-[600px] p-0',
                          align: 'start',
                          children: [
                            !query &&
                              showHistory &&
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'p-4',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'h3',
                                      {
                                        className: 'mb-2 text-sm font-medium',
                                        children: 'Recent Searches',
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      'div',
                                      {
                                        className: 'space-y-1',
                                        children: mockSearchHistory.map(
                                          (item) =>
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                              'button',
                                              {
                                                className:
                                                  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent',
                                                onClick: () =>
                                                  handleSearch(item.query),
                                                children: [
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__.A,
                                                    {
                                                      className:
                                                        'h-3 w-3 text-muted-foreground',
                                                    }
                                                  ),
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    'span',
                                                    {
                                                      className:
                                                        'flex-1 text-left',
                                                      children: item.query,
                                                    }
                                                  ),
                                                  (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                    'span',
                                                    {
                                                      className:
                                                        'text-xs text-muted-foreground',
                                                      children: [
                                                        item.results_count,
                                                        ' results',
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              },
                                              item.id
                                            )
                                        ),
                                      }
                                    ),
                                  ],
                                }
                              ),
                            query &&
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'div',
                                {
                                  className: 'max-h-[400px] overflow-y-auto',
                                  children: isSearching
                                    ? (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'flex items-center justify-center p-8',
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__.A,
                                            {
                                              className:
                                                'h-6 w-6 animate-spin text-muted-foreground',
                                            }
                                          ),
                                        }
                                      )
                                    : results.length > 0
                                      ? (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'div',
                                          {
                                            className: 'p-2',
                                            children: results
                                              .slice(0, maxResults)
                                              .map((result) =>
                                                (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                  'button',
                                                  {
                                                    className:
                                                      'flex w-full items-start gap-3 rounded-sm p-3 text-left hover:bg-accent',
                                                    onClick: () => {
                                                      ;(null == onNoteSelect ||
                                                        onNoteSelect(
                                                          result.note.id
                                                        ),
                                                        setIsOpen(!1))
                                                    },
                                                    children: (0,
                                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                      'div',
                                                      {
                                                        className: 'flex-1',
                                                        children: [
                                                          (0,
                                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                            'div',
                                                            {
                                                              className:
                                                                'font-medium',
                                                              children:
                                                                result.note
                                                                  .title,
                                                            }
                                                          ),
                                                          (0,
                                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                            'div',
                                                            {
                                                              className:
                                                                'mt-1 text-xs text-muted-foreground line-clamp-2',
                                                              children:
                                                                result.snippet,
                                                            }
                                                          ),
                                                          (0,
                                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                            'div',
                                                            {
                                                              className:
                                                                'mt-2 flex items-center gap-2',
                                                              children: [
                                                                (0,
                                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                  'span',
                                                                  {
                                                                    className:
                                                                      'text-xs text-muted-foreground',
                                                                    children:
                                                                      new Date(
                                                                        result.note.updated_at
                                                                      ).toLocaleDateString(),
                                                                  }
                                                                ),
                                                                (0,
                                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                                  'div',
                                                                  {
                                                                    className:
                                                                      'flex gap-1',
                                                                    children:
                                                                      result.note.tags
                                                                        .slice(
                                                                          0,
                                                                          2
                                                                        )
                                                                        .map(
                                                                          (
                                                                            tag
                                                                          ) =>
                                                                            (0,
                                                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                                              _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.E,
                                                                              {
                                                                                variant:
                                                                                  'secondary',
                                                                                className:
                                                                                  'text-xs',
                                                                                children:
                                                                                  [
                                                                                    '#',
                                                                                    tag,
                                                                                  ],
                                                                              },
                                                                              tag
                                                                            )
                                                                        ),
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }
                                                    ),
                                                  },
                                                  result.note.id
                                                )
                                              ),
                                          }
                                        )
                                      : (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                          'div',
                                          {
                                            className:
                                              'p-8 text-center text-sm text-muted-foreground',
                                            children: [
                                              'No results found for "',
                                              query,
                                              '"',
                                            ],
                                          }
                                        ),
                                }
                              ),
                            showFilters &&
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'div',
                                {
                                  className: 'border-t p-2',
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    'div',
                                    {
                                      className: 'flex items-center gap-2',
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                          _components_ui_button__WEBPACK_IMPORTED_MODULE_4__.$,
                                          {
                                            variant: 'outline',
                                            size: 'sm',
                                            className: 'gap-1',
                                            children: [
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__.A,
                                                { className: 'h-3 w-3' }
                                              ),
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                'span',
                                                { children: 'Filters' }
                                              ),
                                            ],
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          'div',
                                          {
                                            className: 'flex flex-wrap gap-1',
                                            children: mockTags
                                              .slice(0, 3)
                                              .map((tag) =>
                                                (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                  _components_ui_button__WEBPACK_IMPORTED_MODULE_4__.$,
                                                  {
                                                    variant:
                                                      selectedTags.includes(
                                                        tag.name
                                                      )
                                                        ? 'default'
                                                        : 'outline',
                                                    size: 'sm',
                                                    className: 'h-7 gap-1 px-2',
                                                    onClick: () => {
                                                      setSelectedTags((prev) =>
                                                        prev.includes(tag.name)
                                                          ? prev.filter(
                                                              (t) =>
                                                                t !== tag.name
                                                            )
                                                          : [...prev, tag.name]
                                                      )
                                                    },
                                                    children: [
                                                      (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                        _barrel_optimize_names_Clock_Filter_Hash_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__.A,
                                                        { className: 'h-3 w-3' }
                                                      ),
                                                      (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                        'span',
                                                        { children: tag.name }
                                                      ),
                                                    ],
                                                  },
                                                  tag.id
                                                )
                                              ),
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                }
                              ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              }
            )
          },
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            placeholder: {
              control: 'text',
              description: 'Placeholder text for the search input',
            },
            showFilters: {
              control: 'boolean',
              description: 'Show filter options',
            },
            showHistory: {
              control: 'boolean',
              description: 'Show search history',
            },
            maxResults: {
              control: 'number',
              description: 'Maximum number of results to show',
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
            placeholder: 'Search notes, content, and tags...',
            showFilters: !0,
            showHistory: !0,
            maxResults: 50,
          },
        },
        WithInitialQuery = {
          args: { initialQuery: 'react', showFilters: !0, showHistory: !0 },
        },
        NoFilters = { args: { showFilters: !1, showHistory: !0 } },
        NoHistory = { args: { showFilters: !0, showHistory: !1 } },
        CustomPlaceholder = {
          args: { placeholder: 'Type to search your knowledge base...' },
        },
        InteractiveSearch = {
          args: { showFilters: !0, showHistory: !0 },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              searchInput = canvas.getByPlaceholderText(/Search notes/)
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              searchInput
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Recent Searches')
                ).toBeInTheDocument()
              }),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                searchInput,
                'react'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(
                () => {
                  ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText('Getting Started with React')
                  ).toBeInTheDocument()
                },
                { timeout: 2e3 }
              ))
            const clearButton = canvas.getByRole('button', { name: /clear/i })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              clearButton
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                searchInput
              ).toHaveValue(''))
          },
        },
        FilterInteraction = {
          args: { showFilters: !0 },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              searchInput = canvas.getByPlaceholderText(/Search notes/)
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              searchInput
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                searchInput,
                'test'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Filters')
                ).toBeInTheDocument()
              }))
            const reactTag = canvas.getByRole('button', { name: /react/i })
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              reactTag
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                reactTag
              ).toHaveClass(/default/))
          },
        },
        MobileResponsive = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: { showFilters: !0, showHistory: !0 },
        },
        DarkMode = {
          parameters: { backgrounds: { default: 'dark' } },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'dark bg-gray-900 p-8',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
          args: { showFilters: !0, showHistory: !0 },
        },
        __namedExportsOrder = [
          'Default',
          'WithInitialQuery',
          'NoFilters',
          'NoHistory',
          'CustomPlaceholder',
          'InteractiveSearch',
          'FilterInteraction',
          'MobileResponsive',
          'DarkMode',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    placeholder: 'Search notes, content, and tags...',\n    showFilters: true,\n    showHistory: true,\n    maxResults: 50\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithInitialQuery.parameters = {
          ...WithInitialQuery.parameters,
          docs: {
            ...WithInitialQuery.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    initialQuery: 'react',\n    showFilters: true,\n    showHistory: true\n  }\n}",
              ...WithInitialQuery.parameters?.docs?.source,
            },
          },
        }),
        (NoFilters.parameters = {
          ...NoFilters.parameters,
          docs: {
            ...NoFilters.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    showFilters: false,\n    showHistory: true\n  }\n}',
              ...NoFilters.parameters?.docs?.source,
            },
          },
        }),
        (NoHistory.parameters = {
          ...NoHistory.parameters,
          docs: {
            ...NoHistory.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    showFilters: true,\n    showHistory: false\n  }\n}',
              ...NoHistory.parameters?.docs?.source,
            },
          },
        }),
        (CustomPlaceholder.parameters = {
          ...CustomPlaceholder.parameters,
          docs: {
            ...CustomPlaceholder.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    placeholder: 'Type to search your knowledge base...'\n  }\n}",
              ...CustomPlaceholder.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveSearch.parameters = {
          ...InteractiveSearch.parameters,
          docs: {
            ...InteractiveSearch.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    showFilters: true,\n    showHistory: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find the search input\n    const searchInput = canvas.getByPlaceholderText(/Search notes/);\n\n    // Focus the input\n    await userEvent.click(searchInput);\n\n    // The dropdown should open showing history\n    await waitFor(() => {\n      expect(canvas.getByText('Recent Searches')).toBeInTheDocument();\n    });\n\n    // Type a search query\n    await userEvent.type(searchInput, 'react');\n\n    // Wait for search results\n    await waitFor(() => {\n      expect(canvas.getByText('Getting Started with React')).toBeInTheDocument();\n    }, {\n      timeout: 2000\n    });\n\n    // Clear the search\n    const clearButton = canvas.getByRole('button', {\n      name: /clear/i\n    });\n    await userEvent.click(clearButton);\n\n    // Input should be empty\n    await expect(searchInput).toHaveValue('');\n  }\n}",
              ...InteractiveSearch.parameters?.docs?.source,
            },
          },
        }),
        (FilterInteraction.parameters = {
          ...FilterInteraction.parameters,
          docs: {
            ...FilterInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    showFilters: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Focus to open search\n    const searchInput = canvas.getByPlaceholderText(/Search notes/);\n    await userEvent.click(searchInput);\n\n    // Type something to show results\n    await userEvent.type(searchInput, 'test');\n\n    // Wait for filters to appear\n    await waitFor(() => {\n      expect(canvas.getByText('Filters')).toBeInTheDocument();\n    });\n\n    // Click a tag filter\n    const reactTag = canvas.getByRole('button', {\n      name: /react/i\n    });\n    await userEvent.click(reactTag);\n\n    // Tag should be selected (button variant changes)\n    await expect(reactTag).toHaveClass(/default/);\n  }\n}",
              ...FilterInteraction.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    showFilters: true,\n    showHistory: true\n  }\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }),
        (DarkMode.parameters = {
          ...DarkMode.parameters,
          docs: {
            ...DarkMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  decorators: [Story => <div className='dark bg-gray-900 p-8'>\n        <Story />\n      </div>],\n  args: {\n    showFilters: true,\n    showHistory: true\n  }\n}",
              ...DarkMode.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
