/*! For license information please see ui-sidebar-stories.f736f842.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [2082],
  {
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ChevronRight })
        const ChevronRight = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Folder })
        const Folder = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Folder', [
          [
            'path',
            {
              d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
              key: '1kt360',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => House })
        const House = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('House', [
          [
            'path',
            { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' },
          ],
          [
            'path',
            {
              d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
              key: '1d0kgt',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Plus })
        const Plus = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Plus', [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'M12 5v14', key: 's699le' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Settings })
        const Settings = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Settings', [
          [
            'path',
            {
              d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
              key: '1qme2f',
            },
          ],
          ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Star })
        const Star = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Star', [
          [
            'path',
            {
              d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
              key: 'r04s7s',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Tag })
        const Tag = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Tag', [
          [
            'path',
            {
              d: 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z',
              key: 'vktsd0',
            },
          ],
          [
            'circle',
            {
              cx: '7.5',
              cy: '7.5',
              r: '.5',
              fill: 'currentColor',
              key: 'kqv944',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Trash })
        const Trash = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Trash', [
          ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
          [
            'path',
            { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' },
          ],
          ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
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
    './components/ui/sidebar.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Collapsed: () => Collapsed,
          CustomStyling: () => CustomStyling,
          Default: () => Default,
          InteractiveSidebar: () => InteractiveSidebar,
          ItemInteraction: () => ItemInteraction,
          LongContent: () => LongContent,
          NotableSidebarEmpty: () => NotableSidebarEmpty,
          NotableSidebarWithNotes: () => NotableSidebarWithNotes,
          WithGroups: () => WithGroups,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => sidebar_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        utils = __webpack_require__('./lib/utils.ts'),
        components_button = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        chevron_right = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js'
        )
      const ChevronLeft = (0,
      __webpack_require__(
        '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
      ).A)('ChevronLeft', [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]])
      var plus = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js'
        ),
        search = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js'
        ),
        folder = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/folder.js'
        ),
        file_text = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js'
        ),
        settings = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js'
        )
      function cov_8hi6skz9d() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/sidebar.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '607690da4aa1fd1fcdb9bf62feec9d196ecdfc26' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/sidebar.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 37 },
                end: { line: 9, column: 2 },
              },
              1: {
                start: { line: 11, column: 4 },
                end: { line: 21, column: 7 },
              },
              2: {
                start: { line: 24, column: 26 },
                end: { line: 24, column: 58 },
              },
              3: {
                start: { line: 25, column: 4 },
                end: { line: 28, column: 7 },
              },
              4: {
                start: { line: 31, column: 4 },
                end: { line: 34, column: 7 },
              },
              5: {
                start: { line: 37, column: 4 },
                end: { line: 40, column: 7 },
              },
              6: {
                start: { line: 43, column: 26 },
                end: { line: 43, column: 58 },
              },
              7: {
                start: { line: 44, column: 4 },
                end: { line: 57, column: 7 },
              },
              8: {
                start: { line: 60, column: 26 },
                end: { line: 60, column: 58 },
              },
              9: {
                start: { line: 61, column: 4 },
                end: { line: 70, column: 7 },
              },
              10: {
                start: { line: 73, column: 36 },
                end: { line: 73, column: 68 },
              },
              11: {
                start: { line: 74, column: 4 },
                end: { line: 84, column: 7 },
              },
              12: {
                start: { line: 87, column: 4 },
                end: { line: 152, column: 7 },
              },
              13: {
                start: { line: 129, column: 61 },
                end: { line: 138, column: 39 },
              },
              14: {
                start: { line: 136, column: 45 },
                end: { line: 136, column: 126 },
              },
              15: {
                start: { line: 154, column: 0 },
                end: { line: 201, column: 2 },
              },
              16: {
                start: { line: 202, column: 0 },
                end: { line: 223, column: 2 },
              },
              17: {
                start: { line: 224, column: 0 },
                end: { line: 245, column: 2 },
              },
              18: {
                start: { line: 246, column: 0 },
                end: { line: 267, column: 2 },
              },
              19: {
                start: { line: 268, column: 0 },
                end: { line: 319, column: 2 },
              },
              20: {
                start: { line: 320, column: 0 },
                end: { line: 348, column: 2 },
              },
              21: {
                start: { line: 349, column: 0 },
                end: { line: 362, column: 2 },
              },
              22: {
                start: { line: 363, column: 0 },
                end: { line: 486, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'Sidebar',
                decl: {
                  start: { line: 10, column: 16 },
                  end: { line: 10, column: 23 },
                },
                loc: {
                  start: { line: 10, column: 78 },
                  end: { line: 22, column: 1 },
                },
                line: 10,
              },
              1: {
                name: 'SidebarHeader',
                decl: {
                  start: { line: 23, column: 16 },
                  end: { line: 23, column: 29 },
                },
                loc: {
                  start: { line: 23, column: 55 },
                  end: { line: 29, column: 1 },
                },
                line: 23,
              },
              2: {
                name: 'SidebarContent',
                decl: {
                  start: { line: 30, column: 16 },
                  end: { line: 30, column: 30 },
                },
                loc: {
                  start: { line: 30, column: 56 },
                  end: { line: 35, column: 1 },
                },
                line: 30,
              },
              3: {
                name: 'SidebarFooter',
                decl: {
                  start: { line: 36, column: 16 },
                  end: { line: 36, column: 29 },
                },
                loc: {
                  start: { line: 36, column: 55 },
                  end: { line: 41, column: 1 },
                },
                line: 36,
              },
              4: {
                name: 'SidebarItem',
                decl: {
                  start: { line: 42, column: 16 },
                  end: { line: 42, column: 27 },
                },
                loc: {
                  start: { line: 42, column: 76 },
                  end: { line: 58, column: 1 },
                },
                line: 42,
              },
              5: {
                name: 'SidebarGroup',
                decl: {
                  start: { line: 59, column: 16 },
                  end: { line: 59, column: 28 },
                },
                loc: {
                  start: { line: 59, column: 61 },
                  end: { line: 71, column: 1 },
                },
                line: 59,
              },
              6: {
                name: 'SidebarToggle',
                decl: {
                  start: { line: 72, column: 16 },
                  end: { line: 72, column: 29 },
                },
                loc: {
                  start: { line: 72, column: 45 },
                  end: { line: 85, column: 1 },
                },
                line: 72,
              },
              7: {
                name: 'NotableSidebar',
                decl: {
                  start: { line: 86, column: 16 },
                  end: { line: 86, column: 30 },
                },
                loc: {
                  start: { line: 86, column: 139 },
                  end: { line: 153, column: 1 },
                },
                line: 86,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 129, column: 39 },
                  end: { line: 129, column: 40 },
                },
                loc: {
                  start: { line: 129, column: 61 },
                  end: { line: 138, column: 39 },
                },
                line: 129,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 136, column: 41 },
                  end: { line: 136, column: 42 },
                },
                loc: {
                  start: { line: 136, column: 45 },
                  end: { line: 136, column: 126 },
                },
                line: 136,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 10, column: 47 },
                  end: { line: 10, column: 64 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 10, column: 59 },
                    end: { line: 10, column: 64 },
                  },
                ],
                line: 10,
              },
              1: {
                loc: {
                  start: { line: 17, column: 167 },
                  end: { line: 17, column: 194 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 17, column: 179 },
                    end: { line: 17, column: 185 },
                  },
                  {
                    start: { line: 17, column: 188 },
                    end: { line: 17, column: 194 },
                  },
                ],
                line: 17,
              },
              2: {
                loc: {
                  start: { line: 27, column: 18 },
                  end: { line: 27, column: 40 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 27, column: 18 },
                    end: { line: 27, column: 28 },
                  },
                  {
                    start: { line: 27, column: 32 },
                    end: { line: 27, column: 40 },
                  },
                ],
                line: 27,
              },
              3: {
                loc: {
                  start: { line: 46, column: 189 },
                  end: { line: 46, column: 251 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 46, column: 189 },
                    end: { line: 46, column: 195 },
                  },
                  {
                    start: { line: 46, column: 199 },
                    end: { line: 46, column: 251 },
                  },
                ],
                line: 46,
              },
              4: {
                loc: {
                  start: { line: 46, column: 253 },
                  end: { line: 46, column: 287 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 46, column: 253 },
                    end: { line: 46, column: 262 },
                  },
                  {
                    start: { line: 46, column: 266 },
                    end: { line: 46, column: 287 },
                  },
                ],
                line: 46,
              },
              5: {
                loc: {
                  start: { line: 48, column: 12 },
                  end: { line: 51, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 48, column: 12 },
                    end: { line: 48, column: 16 },
                  },
                  {
                    start: { line: 48, column: 34 },
                    end: { line: 51, column: 14 },
                  },
                ],
                line: 48,
              },
              6: {
                loc: {
                  start: { line: 52, column: 12 },
                  end: { line: 55, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 52, column: 12 },
                    end: { line: 52, column: 22 },
                  },
                  {
                    start: { line: 52, column: 40 },
                    end: { line: 55, column: 14 },
                  },
                ],
                line: 52,
              },
              7: {
                loc: {
                  start: { line: 64, column: 12 },
                  end: { line: 67, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 64, column: 12 },
                    end: { line: 64, column: 17 },
                  },
                  {
                    start: { line: 64, column: 21 },
                    end: { line: 64, column: 31 },
                  },
                  {
                    start: { line: 64, column: 49 },
                    end: { line: 67, column: 14 },
                  },
                ],
                line: 64,
              },
              8: {
                loc: {
                  start: { line: 79, column: 18 },
                  end: { line: 83, column: 10 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 79, column: 44 },
                    end: { line: 81, column: 10 },
                  },
                  {
                    start: { line: 81, column: 27 },
                    end: { line: 83, column: 10 },
                  },
                ],
                line: 79,
              },
              9: {
                loc: {
                  start: { line: 86, column: 33 },
                  end: { line: 86, column: 50 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 86, column: 45 },
                    end: { line: 86, column: 50 },
                  },
                ],
                line: 86,
              },
              10: {
                loc: {
                  start: { line: 86, column: 62 },
                  end: { line: 86, column: 72 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 86, column: 70 },
                    end: { line: 86, column: 72 },
                  },
                ],
                line: 86,
              },
              11: {
                loc: {
                  start: { line: 126, column: 34 },
                  end: { line: 138, column: 40 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 126, column: 69 },
                    end: { line: 129, column: 26 },
                  },
                  {
                    start: { line: 129, column: 29 },
                    end: { line: 138, column: 40 },
                  },
                ],
                line: 126,
              },
              12: {
                loc: {
                  start: { line: 130, column: 38 },
                  end: { line: 134, column: 34 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 130, column: 68 },
                    end: { line: 132, column: 34 },
                  },
                  {
                    start: { line: 132, column: 51 },
                    end: { line: 134, column: 34 },
                  },
                ],
                line: 130,
              },
              13: {
                loc: {
                  start: { line: 136, column: 45 },
                  end: { line: 136, column: 126 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 136, column: 96 },
                    end: { line: 136, column: 102 },
                  },
                  {
                    start: { line: 136, column: 105 },
                    end: { line: 136, column: 126 },
                  },
                ],
                line: 136,
              },
              14: {
                loc: {
                  start: { line: 136, column: 45 },
                  end: { line: 136, column: 93 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 136, column: 45 },
                    end: { line: 136, column: 66 },
                  },
                  {
                    start: { line: 136, column: 70 },
                    end: { line: 136, column: 93 },
                  },
                ],
                line: 136,
              },
              15: {
                loc: {
                  start: { line: 137, column: 42 },
                  end: { line: 137, column: 66 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 137, column: 42 },
                    end: { line: 137, column: 52 },
                  },
                  {
                    start: { line: 137, column: 56 },
                    end: { line: 137, column: 66 },
                  },
                ],
                line: 137,
              },
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
            b: {
              0: [0],
              1: [0, 0],
              2: [0, 0],
              3: [0, 0],
              4: [0, 0],
              5: [0, 0],
              6: [0, 0],
              7: [0, 0, 0],
              8: [0, 0],
              9: [0],
              10: [0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0],
              14: [0, 0],
              15: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/sidebar.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport { cn } from '../../lib/utils'\nimport { Button } from '../../design-system/components/button'\nimport {\n  ChevronLeftIcon,\n  ChevronRightIcon,\n  FileTextIcon,\n  FolderIcon,\n  PlusIcon,\n  SearchIcon,\n  SettingsIcon,\n} from 'lucide-react'\n\ninterface SidebarProps {\n  children?: React.ReactNode\n  className?: string\n  collapsed?: boolean\n  onToggle?: () => void\n}\n\ninterface SidebarContextValue {\n  collapsed: boolean\n  onToggle?: () => void\n}\n\nconst SidebarContext = React.createContext<SidebarContextValue>({\n  collapsed: false,\n})\n\nexport function Sidebar({\n  children,\n  className,\n  collapsed = false,\n  onToggle,\n}: SidebarProps) {\n  return (\n    <SidebarContext.Provider value={{ collapsed, onToggle }}>\n      <aside\n        className={cn(\n          'flex h-full flex-col bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out',\n          collapsed ? 'w-16' : 'w-64',\n          className\n        )}\n        data-collapsed={collapsed}\n      >\n        {children}\n      </aside>\n    </SidebarContext.Provider>\n  )\n}\n\nexport function SidebarHeader({\n  children,\n  className,\n}: {\n  children: React.ReactNode\n  className?: string\n}) {\n  const { collapsed } = React.useContext(SidebarContext)\n\n  return (\n    <header\n      className={cn(\n        'flex items-center justify-between p-4 border-b border-sidebar-border',\n        className\n      )}\n    >\n      {!collapsed && children}\n    </header>\n  )\n}\n\nexport function SidebarContent({\n  children,\n  className,\n}: {\n  children: React.ReactNode\n  className?: string\n}) {\n  return (\n    <div className={cn('flex-1 overflow-y-auto p-2', className)}>\n      {children}\n    </div>\n  )\n}\n\nexport function SidebarFooter({\n  children,\n  className,\n}: {\n  children: React.ReactNode\n  className?: string\n}) {\n  return (\n    <footer className={cn('p-4 border-t border-sidebar-border', className)}>\n      {children}\n    </footer>\n  )\n}\n\nexport interface SidebarItemProps {\n  children: React.ReactNode\n  icon?: React.ReactNode\n  active?: boolean\n  onClick?: () => void\n  className?: string\n}\n\nexport function SidebarItem({\n  children,\n  icon,\n  active,\n  onClick,\n  className,\n}: SidebarItemProps) {\n  const { collapsed } = React.useContext(SidebarContext)\n\n  return (\n    <button\n      onClick={onClick}\n      className={cn(\n        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',\n        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',\n        active && 'bg-sidebar-primary text-sidebar-primary-foreground',\n        collapsed && 'justify-center px-2',\n        className\n      )}\n    >\n      {icon && <span className='flex-shrink-0'>{icon}</span>}\n      {!collapsed && <span className='truncate'>{children}</span>}\n    </button>\n  )\n}\n\nexport function SidebarGroup({\n  children,\n  title,\n  className,\n}: {\n  children: React.ReactNode\n  title?: string\n  className?: string\n}) {\n  const { collapsed } = React.useContext(SidebarContext)\n\n  return (\n    <div className={cn('space-y-1', className)}>\n      {title && !collapsed && (\n        <div className='px-3 py-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wide'>\n          {title}\n        </div>\n      )}\n      {children}\n    </div>\n  )\n}\n\nexport function SidebarToggle({ className }: { className?: string }) {\n  const { collapsed, onToggle } = React.useContext(SidebarContext)\n\n  return (\n    <Button\n      variant='ghost'\n      size='sm'\n      onClick={onToggle}\n      className={cn('h-8 w-8 p-0 hover:bg-sidebar-accent', className)}\n    >\n      {collapsed ? (\n        <ChevronRightIcon className='h-4 w-4' />\n      ) : (\n        <ChevronLeftIcon className='h-4 w-4' />\n      )}\n    </Button>\n  )\n}\n\n// Pre-built Notable Sidebar with common structure\ninterface Note {\n  id: string\n  title: string\n  isFolder?: boolean\n  children?: Note[]\n}\n\ninterface NotableSidebarProps {\n  collapsed?: boolean\n  onToggle?: () => void\n  notes?: Note[]\n  onNewNote?: () => void\n  onNoteSelect?: (noteId: string) => void\n  selectedNoteId?: string\n  onSearch?: () => void\n  onSettings?: () => void\n}\n\nexport function NotableSidebar({\n  collapsed = false,\n  onToggle,\n  notes = [],\n  onNewNote,\n  onNoteSelect,\n  selectedNoteId,\n  onSearch,\n  onSettings,\n}: NotableSidebarProps) {\n  return (\n    <Sidebar collapsed={collapsed} onToggle={onToggle}>\n      <SidebarHeader>\n        <div className='flex items-center justify-between w-full'>\n          <h2 className='text-lg font-semibold text-sidebar-primary'>\n            Notable\n          </h2>\n          <SidebarToggle />\n        </div>\n      </SidebarHeader>\n\n      <SidebarContent>\n        {/* Quick Actions */}\n        <SidebarGroup>\n          <SidebarItem\n            icon={<PlusIcon className='h-4 w-4' />}\n            onClick={onNewNote}\n          >\n            New Note\n          </SidebarItem>\n          <SidebarItem\n            icon={<SearchIcon className='h-4 w-4' />}\n            onClick={onSearch}\n          >\n            Search\n          </SidebarItem>\n        </SidebarGroup>\n\n        {/* Notes */}\n        <SidebarGroup title='Notes' className='mt-6'>\n          {notes.length === 0 ? (\n            <div className='px-3 py-8 text-center text-sm text-sidebar-foreground/60'>\n              No notes yet. Create your first note to get started.\n            </div>\n          ) : (\n            notes.map((note) => (\n              <SidebarItem\n                key={note.id}\n                icon={\n                  note.isFolder ? (\n                    <FolderIcon className='h-4 w-4' />\n                  ) : (\n                    <FileTextIcon className='h-4 w-4' />\n                  )\n                }\n                active={selectedNoteId === note.id}\n                onClick={() => onNoteSelect?.(note.id)}\n              >\n                {note.title || 'Untitled'}\n              </SidebarItem>\n            ))\n          )}\n        </SidebarGroup>\n      </SidebarContent>\n\n      <SidebarFooter>\n        <SidebarItem\n          icon={<SettingsIcon className='h-4 w-4' />}\n          onClick={onSettings}\n        >\n          Settings\n        </SidebarItem>\n      </SidebarFooter>\n    </Sidebar>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACZ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,6IACM;AAcpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAqB,CAApB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC7D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAClB,CAAC;AAED,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACK,CAAC,CAAC;IACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAAC,CAAC,CAAC;gCACtD,KAAC,CAAC,CAAC,CAAC,CAAC;YACH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC3I,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC3B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;sBAExB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAIjB;AAEA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAA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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC9D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAClC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;YAGT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC;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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '607690da4aa1fd1fcdb9bf62feec9d196ecdfc26',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_8hi6skz9d = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_8hi6skz9d()
      const SidebarContext =
        (cov_8hi6skz9d().s[0]++, react.createContext({ collapsed: !1 }))
      function Sidebar({
        children,
        className,
        collapsed = (cov_8hi6skz9d().b[0][0]++, !1),
        onToggle,
      }) {
        return (
          cov_8hi6skz9d().f[0]++,
          cov_8hi6skz9d().s[1]++,
          (0, jsx_runtime.jsx)(SidebarContext.Provider, {
            value: { collapsed, onToggle },
            children: (0, jsx_runtime.jsx)('aside', {
              className: (0, utils.cn)(
                'flex h-full flex-col bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out',
                collapsed
                  ? (cov_8hi6skz9d().b[1][0]++, 'w-16')
                  : (cov_8hi6skz9d().b[1][1]++, 'w-64'),
                className
              ),
              'data-collapsed': collapsed,
              children,
            }),
          })
        )
      }
      function SidebarHeader({ children, className }) {
        cov_8hi6skz9d().f[1]++
        const { collapsed } =
          (cov_8hi6skz9d().s[2]++, react.useContext(SidebarContext))
        return (
          cov_8hi6skz9d().s[3]++,
          (0, jsx_runtime.jsx)('header', {
            className: (0, utils.cn)(
              'flex items-center justify-between p-4 border-b border-sidebar-border',
              className
            ),
            children:
              (cov_8hi6skz9d().b[2][0]++,
              !collapsed && (cov_8hi6skz9d().b[2][1]++, children)),
          })
        )
      }
      function SidebarContent({ children, className }) {
        return (
          cov_8hi6skz9d().f[2]++,
          cov_8hi6skz9d().s[4]++,
          (0, jsx_runtime.jsx)('div', {
            className: (0, utils.cn)('flex-1 overflow-y-auto p-2', className),
            children,
          })
        )
      }
      function SidebarFooter({ children, className }) {
        return (
          cov_8hi6skz9d().f[3]++,
          cov_8hi6skz9d().s[5]++,
          (0, jsx_runtime.jsx)('footer', {
            className: (0, utils.cn)(
              'p-4 border-t border-sidebar-border',
              className
            ),
            children,
          })
        )
      }
      function SidebarItem({ children, icon, active, onClick, className }) {
        cov_8hi6skz9d().f[4]++
        const { collapsed } =
          (cov_8hi6skz9d().s[6]++, react.useContext(SidebarContext))
        return (
          cov_8hi6skz9d().s[7]++,
          (0, jsx_runtime.jsxs)('button', {
            onClick,
            className: (0, utils.cn)(
              'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              (cov_8hi6skz9d().b[3][0]++,
              active &&
                (cov_8hi6skz9d().b[3][1]++,
                'bg-sidebar-primary text-sidebar-primary-foreground')),
              (cov_8hi6skz9d().b[4][0]++,
              collapsed && (cov_8hi6skz9d().b[4][1]++, 'justify-center px-2')),
              className
            ),
            children: [
              (cov_8hi6skz9d().b[5][0]++,
              icon &&
                (cov_8hi6skz9d().b[5][1]++,
                (0, jsx_runtime.jsx)('span', {
                  className: 'flex-shrink-0',
                  children: icon,
                }))),
              (cov_8hi6skz9d().b[6][0]++,
              !collapsed &&
                (cov_8hi6skz9d().b[6][1]++,
                (0, jsx_runtime.jsx)('span', {
                  className: 'truncate',
                  children,
                }))),
            ],
          })
        )
      }
      function SidebarGroup({ children, title, className }) {
        cov_8hi6skz9d().f[5]++
        const { collapsed } =
          (cov_8hi6skz9d().s[8]++, react.useContext(SidebarContext))
        return (
          cov_8hi6skz9d().s[9]++,
          (0, jsx_runtime.jsxs)('div', {
            className: (0, utils.cn)('space-y-1', className),
            children: [
              (cov_8hi6skz9d().b[7][0]++,
              title &&
                (cov_8hi6skz9d().b[7][1]++, !collapsed) &&
                (cov_8hi6skz9d().b[7][2]++,
                (0, jsx_runtime.jsx)('div', {
                  className:
                    'px-3 py-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wide',
                  children: title,
                }))),
              children,
            ],
          })
        )
      }
      function SidebarToggle({ className }) {
        cov_8hi6skz9d().f[6]++
        const { collapsed, onToggle } =
          (cov_8hi6skz9d().s[10]++, react.useContext(SidebarContext))
        return (
          cov_8hi6skz9d().s[11]++,
          (0, jsx_runtime.jsx)(components_button.$, {
            variant: 'ghost',
            size: 'sm',
            onClick: onToggle,
            className: (0, utils.cn)(
              'h-8 w-8 p-0 hover:bg-sidebar-accent',
              className
            ),
            children: collapsed
              ? (cov_8hi6skz9d().b[8][0]++,
                (0, jsx_runtime.jsx)(chevron_right.A, { className: 'h-4 w-4' }))
              : (cov_8hi6skz9d().b[8][1]++,
                (0, jsx_runtime.jsx)(ChevronLeft, { className: 'h-4 w-4' })),
          })
        )
      }
      function NotableSidebar({
        collapsed = (cov_8hi6skz9d().b[9][0]++, !1),
        onToggle,
        notes = (cov_8hi6skz9d().b[10][0]++, []),
        onNewNote,
        onNoteSelect,
        selectedNoteId,
        onSearch,
        onSettings,
      }) {
        return (
          cov_8hi6skz9d().f[7]++,
          cov_8hi6skz9d().s[12]++,
          (0, jsx_runtime.jsxs)(Sidebar, {
            collapsed,
            onToggle,
            children: [
              (0, jsx_runtime.jsx)(SidebarHeader, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center justify-between w-full',
                  children: [
                    (0, jsx_runtime.jsx)('h2', {
                      className: 'text-lg font-semibold text-sidebar-primary',
                      children: 'Notable',
                    }),
                    (0, jsx_runtime.jsx)(SidebarToggle, {}),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)(SidebarContent, {
                children: [
                  (0, jsx_runtime.jsxs)(SidebarGroup, {
                    children: [
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(plus.A, {
                          className: 'h-4 w-4',
                        }),
                        onClick: onNewNote,
                        children: 'New Note',
                      }),
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(search.A, {
                          className: 'h-4 w-4',
                        }),
                        onClick: onSearch,
                        children: 'Search',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(SidebarGroup, {
                    title: 'Notes',
                    className: 'mt-6',
                    children:
                      0 === notes.length
                        ? (cov_8hi6skz9d().b[11][0]++,
                          (0, jsx_runtime.jsx)('div', {
                            className:
                              'px-3 py-8 text-center text-sm text-sidebar-foreground/60',
                            children:
                              'No notes yet. Create your first note to get started.',
                          }))
                        : (cov_8hi6skz9d().b[11][1]++,
                          notes.map(
                            (note) => (
                              cov_8hi6skz9d().f[8]++,
                              cov_8hi6skz9d().s[13]++,
                              (0, jsx_runtime.jsx)(
                                SidebarItem,
                                {
                                  icon: note.isFolder
                                    ? (cov_8hi6skz9d().b[12][0]++,
                                      (0, jsx_runtime.jsx)(folder.A, {
                                        className: 'h-4 w-4',
                                      }))
                                    : (cov_8hi6skz9d().b[12][1]++,
                                      (0, jsx_runtime.jsx)(file_text.A, {
                                        className: 'h-4 w-4',
                                      })),
                                  active: selectedNoteId === note.id,
                                  onClick: () => (
                                    cov_8hi6skz9d().f[9]++,
                                    cov_8hi6skz9d().s[14]++,
                                    cov_8hi6skz9d().b[14][0]++,
                                    null === onNoteSelect ||
                                    (cov_8hi6skz9d().b[14][1]++,
                                    void 0 === onNoteSelect)
                                      ? void cov_8hi6skz9d().b[13][0]++
                                      : (cov_8hi6skz9d().b[13][1]++,
                                        onNoteSelect(note.id))
                                  ),
                                  children:
                                    (cov_8hi6skz9d().b[15][0]++,
                                    note.title ||
                                      (cov_8hi6skz9d().b[15][1]++, 'Untitled')),
                                },
                                note.id
                              )
                            )
                          )),
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(SidebarFooter, {
                children: (0, jsx_runtime.jsx)(SidebarItem, {
                  icon: (0, jsx_runtime.jsx)(settings.A, {
                    className: 'h-4 w-4',
                  }),
                  onClick: onSettings,
                  children: 'Settings',
                }),
              }),
            ],
          })
        )
      }
      ;(cov_8hi6skz9d().s[15]++,
        (Sidebar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Sidebar',
          props: {
            children: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            collapsed: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            onToggle: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[16]++,
        (SidebarHeader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarHeader',
          props: {
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[17]++,
        (SidebarContent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarContent',
          props: {
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[18]++,
        (SidebarFooter.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarFooter',
          props: {
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[19]++,
        (SidebarItem.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarItem',
          props: {
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            icon: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            active: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[20]++,
        (SidebarGroup.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarGroup',
          props: {
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[21]++,
        (SidebarToggle.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SidebarToggle',
          props: {
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }),
        cov_8hi6skz9d().s[22]++,
        (NotableSidebar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'NotableSidebar',
          props: {
            collapsed: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            onToggle: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            notes: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'Note' }],
                raw: 'Note[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            onNewNote: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onNoteSelect: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(noteId: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'noteId' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            selectedNoteId: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            onSearch: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onSettings: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }))
      var house = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js'
        ),
        star = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/star.js'
        ),
        tag = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js'
        ),
        user = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js'
        ),
        trash = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/trash.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      const sidebar_stories = {
          title: 'UI/Sidebar',
          component: Sidebar,
          parameters: { layout: 'fullscreen' },
          tags: ['autodocs'],
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsxs)('div', {
                className: 'flex h-screen bg-background',
                children: [
                  (0, jsx_runtime.jsx)(Story, {}),
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex-1 p-8',
                    children: [
                      (0, jsx_runtime.jsx)('h1', {
                        className: 'text-2xl font-bold mb-4',
                        children: 'Main Content Area',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-muted-foreground',
                        children:
                          'The sidebar is displayed on the left. Try toggling it to see the collapsed state.',
                      }),
                    ],
                  }),
                ],
              }),
          ],
        },
        StatefulSidebar = () => {
          const [collapsed, setCollapsed] = (0, react.useState)(!1),
            [activeItem, setActiveItem] = (0, react.useState)('home')
          return (0, jsx_runtime.jsxs)(Sidebar, {
            collapsed,
            onToggle: () => setCollapsed(!collapsed),
            children: [
              (0, jsx_runtime.jsx)(SidebarHeader, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'flex items-center justify-between w-full',
                  children: [
                    (0, jsx_runtime.jsx)('h2', {
                      className: 'text-lg font-semibold',
                      children: 'App Name',
                    }),
                    (0, jsx_runtime.jsx)(SidebarToggle, {}),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)(SidebarContent, {
                children: [
                  (0, jsx_runtime.jsxs)(SidebarGroup, {
                    children: [
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(house.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'home' === activeItem,
                        onClick: () => setActiveItem('home'),
                        children: 'Home',
                      }),
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(search.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'search' === activeItem,
                        onClick: () => setActiveItem('search'),
                        children: 'Search',
                      }),
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(star.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'favorites' === activeItem,
                        onClick: () => setActiveItem('favorites'),
                        children: 'Favorites',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(SidebarGroup, {
                    title: 'Content',
                    className: 'mt-6',
                    children: [
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(file_text.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'documents' === activeItem,
                        onClick: () => setActiveItem('documents'),
                        children: 'Documents',
                      }),
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(folder.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'folders' === activeItem,
                        onClick: () => setActiveItem('folders'),
                        children: 'Folders',
                      }),
                      (0, jsx_runtime.jsx)(SidebarItem, {
                        icon: (0, jsx_runtime.jsx)(tag.A, {
                          className: 'h-4 w-4',
                        }),
                        active: 'tags' === activeItem,
                        onClick: () => setActiveItem('tags'),
                        children: 'Tags',
                      }),
                    ],
                  }),
                ],
              }),
              (0, jsx_runtime.jsxs)(SidebarFooter, {
                children: [
                  (0, jsx_runtime.jsx)(SidebarItem, {
                    icon: (0, jsx_runtime.jsx)(user.A, {
                      className: 'h-4 w-4',
                    }),
                    active: 'profile' === activeItem,
                    onClick: () => setActiveItem('profile'),
                    children: 'Profile',
                  }),
                  (0, jsx_runtime.jsx)(SidebarItem, {
                    icon: (0, jsx_runtime.jsx)(settings.A, {
                      className: 'h-4 w-4',
                    }),
                    active: 'settings' === activeItem,
                    onClick: () => setActiveItem('settings'),
                    children: 'Settings',
                  }),
                ],
              }),
            ],
          })
        },
        Default = { render: () => (0, jsx_runtime.jsx)(StatefulSidebar, {}) },
        Collapsed = {
          render: () => {
            const [collapsed] = (0, react.useState)(!0)
            return (0, jsx_runtime.jsxs)(Sidebar, {
              collapsed,
              children: [
                (0, jsx_runtime.jsx)(SidebarHeader, {
                  children: (0, jsx_runtime.jsx)(SidebarToggle, {}),
                }),
                (0, jsx_runtime.jsxs)(SidebarContent, {
                  children: [
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(house.A, {
                        className: 'h-4 w-4',
                      }),
                      children: 'Home',
                    }),
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(search.A, {
                        className: 'h-4 w-4',
                      }),
                      children: 'Search',
                    }),
                  ],
                }),
              ],
            })
          },
        },
        WithGroups = {
          render: () =>
            (0, jsx_runtime.jsxs)(Sidebar, {
              children: [
                (0, jsx_runtime.jsx)(SidebarHeader, {
                  children: (0, jsx_runtime.jsx)('h2', {
                    className: 'text-lg font-semibold',
                    children: 'Grouped Items',
                  }),
                }),
                (0, jsx_runtime.jsxs)(SidebarContent, {
                  children: [
                    (0, jsx_runtime.jsxs)(SidebarGroup, {
                      title: 'Navigation',
                      children: [
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(house.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Dashboard',
                        }),
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(search.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Search',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(SidebarGroup, {
                      title: 'Management',
                      className: 'mt-6',
                      children: [
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(file_text.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Documents',
                        }),
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(folder.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Projects',
                        }),
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(tag.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Labels',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(SidebarGroup, {
                      title: 'System',
                      className: 'mt-6',
                      children: [
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(trash.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Trash',
                        }),
                        (0, jsx_runtime.jsx)(SidebarItem, {
                          icon: (0, jsx_runtime.jsx)(settings.A, {
                            className: 'h-4 w-4',
                          }),
                          children: 'Settings',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        NotableSidebarEmpty = {
          render: () => {
            const [collapsed, setCollapsed] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsx)(NotableSidebar, {
              collapsed,
              onToggle: () => setCollapsed(!collapsed),
              notes: [],
              onNewNote: () => console.info('New note clicked'),
              onSearch: () => console.info('Search clicked'),
              onSettings: () => console.info('Settings clicked'),
            })
          },
        },
        NotableSidebarWithNotes = {
          render: () => {
            const [collapsed, setCollapsed] = (0, react.useState)(!1),
              [selectedNoteId, setSelectedNoteId] = (0, react.useState)('2')
            return (0, jsx_runtime.jsx)(NotableSidebar, {
              collapsed,
              onToggle: () => setCollapsed(!collapsed),
              notes: [
                { id: '1', title: 'Meeting Notes', isFolder: !1 },
                { id: '2', title: 'Project Ideas', isFolder: !1 },
                { id: '3', title: 'Work', isFolder: !0 },
                { id: '4', title: 'Personal', isFolder: !0 },
                { id: '5', title: 'Reading List', isFolder: !1 },
                { id: '6', title: 'Quick Notes', isFolder: !1 },
              ],
              selectedNoteId,
              onNoteSelect: setSelectedNoteId,
              onNewNote: () => console.info('New note clicked'),
              onSearch: () => console.info('Search clicked'),
              onSettings: () => console.info('Settings clicked'),
            })
          },
        },
        LongContent = {
          render: () => {
            const items = Array.from({ length: 20 }, (_, i) => ({
              id: `item-${i}`,
              title: `Document ${i + 1}`,
            }))
            return (0, jsx_runtime.jsxs)(Sidebar, {
              children: [
                (0, jsx_runtime.jsx)(SidebarHeader, {
                  children: (0, jsx_runtime.jsx)('h2', {
                    className: 'text-lg font-semibold',
                    children: 'Many Items',
                  }),
                }),
                (0, jsx_runtime.jsx)(SidebarContent, {
                  children: (0, jsx_runtime.jsx)(SidebarGroup, {
                    title: 'Documents',
                    children: items.map((item) =>
                      (0, jsx_runtime.jsx)(
                        SidebarItem,
                        {
                          icon: (0, jsx_runtime.jsx)(file_text.A, {
                            className: 'h-4 w-4',
                          }),
                          children: item.title,
                        },
                        item.id
                      )
                    ),
                  }),
                }),
                (0, jsx_runtime.jsx)(SidebarFooter, {
                  children: (0, jsx_runtime.jsx)(SidebarItem, {
                    icon: (0, jsx_runtime.jsx)(settings.A, {
                      className: 'h-4 w-4',
                    }),
                    children: 'Settings',
                  }),
                }),
              ],
            })
          },
        },
        CustomStyling = {
          render: () =>
            (0, jsx_runtime.jsxs)(Sidebar, {
              className: 'bg-slate-900 text-white',
              children: [
                (0, jsx_runtime.jsx)(SidebarHeader, {
                  className: 'border-slate-700',
                  children: (0, jsx_runtime.jsx)('h2', {
                    className: 'text-lg font-semibold text-white',
                    children: 'Dark Theme',
                  }),
                }),
                (0, jsx_runtime.jsxs)(SidebarContent, {
                  children: [
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(house.A, {
                        className: 'h-4 w-4',
                      }),
                      className: 'hover:bg-slate-800 hover:text-white',
                      children: 'Home',
                    }),
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(file_text.A, {
                        className: 'h-4 w-4',
                      }),
                      className: 'hover:bg-slate-800 hover:text-white',
                      active: !0,
                      children: 'Active Item',
                    }),
                  ],
                }),
              ],
            }),
        },
        InteractiveSidebar = {
          render: () => (0, jsx_runtime.jsx)(StatefulSidebar, {}),
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const toggleButton = canvas
              .getAllByRole('button')
              .find((btn) => btn.querySelector('svg.lucide-chevron-left'))
            ;(toggleButton && (await dist.Q4.click(toggleButton)),
              await new Promise((resolve) => setTimeout(resolve, 300)))
            const sidebar = canvas.getByRole('complementary')
            await (0, dist.E3)(sidebar).toHaveAttribute(
              'data-collapsed',
              'true'
            )
            const expandButton = canvas
              .getAllByRole('button')
              .find((btn) => btn.querySelector('svg.lucide-chevron-right'))
            ;(expandButton && (await dist.Q4.click(expandButton)),
              await new Promise((resolve) => setTimeout(resolve, 300)),
              await (0, dist.E3)(sidebar).toHaveAttribute(
                'data-collapsed',
                'false'
              ))
          },
        },
        ItemInteraction = {
          render: () => {
            const [activeItem, setActiveItem] = (0, react.useState)(null),
              [clickedItems, setClickedItems] = (0, react.useState)([])
            return (0, jsx_runtime.jsxs)(Sidebar, {
              children: [
                (0, jsx_runtime.jsx)(SidebarHeader, {
                  children: (0, jsx_runtime.jsx)('h2', {
                    className: 'text-lg font-semibold',
                    children: 'Click Tracking',
                  }),
                }),
                (0, jsx_runtime.jsxs)(SidebarContent, {
                  children: [
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(house.A, {
                        className: 'h-4 w-4',
                      }),
                      active: 'home' === activeItem,
                      onClick: () => {
                        ;(setActiveItem('home'),
                          setClickedItems([...clickedItems, 'home']))
                      },
                      children: 'Home',
                    }),
                    (0, jsx_runtime.jsx)(SidebarItem, {
                      icon: (0, jsx_runtime.jsx)(search.A, {
                        className: 'h-4 w-4',
                      }),
                      active: 'search' === activeItem,
                      onClick: () => {
                        ;(setActiveItem('search'),
                          setClickedItems([...clickedItems, 'search']))
                      },
                      children: 'Search',
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'mt-4 p-3 text-xs text-muted-foreground',
                      children: [
                        'Clicked: ',
                        clickedItems.join(', ') || 'None',
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await new Promise((resolve) => setTimeout(resolve, 100))
            const homeItem = canvas.getByText('Home')
            ;(await dist.Q4.click(homeItem),
              await (0, dist.E3)(homeItem.closest('button')).toHaveClass(
                /bg-sidebar-primary/
              ))
            const searchItem = canvas.getByText('Search')
            ;(await dist.Q4.click(searchItem),
              await (0, dist.E3)(searchItem.closest('button')).toHaveClass(
                /bg-sidebar-primary/
              ),
              await (0, dist.E3)(homeItem.closest('button')).not.toHaveClass(
                /bg-sidebar-primary/
              ))
          },
        },
        __namedExportsOrder = [
          'Default',
          'Collapsed',
          'WithGroups',
          'NotableSidebarEmpty',
          'NotableSidebarWithNotes',
          'LongContent',
          'CustomStyling',
          'InteractiveSidebar',
          'ItemInteraction',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  render: () => <StatefulSidebar />\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Collapsed.parameters = {
          ...Collapsed.parameters,
          docs: {
            ...Collapsed.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [collapsed] = useState(true);\n    return <Sidebar collapsed={collapsed}>\n        <SidebarHeader>\n          <SidebarToggle />\n        </SidebarHeader>\n        <SidebarContent>\n          <SidebarItem icon={<HomeIcon className='h-4 w-4' />}>\n            Home\n          </SidebarItem>\n          <SidebarItem icon={<SearchIcon className='h-4 w-4' />}>\n            Search\n          </SidebarItem>\n        </SidebarContent>\n      </Sidebar>;\n  }\n}",
              ...Collapsed.parameters?.docs?.source,
            },
          },
        }),
        (WithGroups.parameters = {
          ...WithGroups.parameters,
          docs: {
            ...WithGroups.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Sidebar>\n      <SidebarHeader>\n        <h2 className='text-lg font-semibold'>Grouped Items</h2>\n      </SidebarHeader>\n      <SidebarContent>\n        <SidebarGroup title='Navigation'>\n          <SidebarItem icon={<HomeIcon className='h-4 w-4' />}>\n            Dashboard\n          </SidebarItem>\n          <SidebarItem icon={<SearchIcon className='h-4 w-4' />}>\n            Search\n          </SidebarItem>\n        </SidebarGroup>\n\n        <SidebarGroup title='Management' className='mt-6'>\n          <SidebarItem icon={<FileTextIcon className='h-4 w-4' />}>\n            Documents\n          </SidebarItem>\n          <SidebarItem icon={<FolderIcon className='h-4 w-4' />}>\n            Projects\n          </SidebarItem>\n          <SidebarItem icon={<TagIcon className='h-4 w-4' />}>\n            Labels\n          </SidebarItem>\n        </SidebarGroup>\n\n        <SidebarGroup title='System' className='mt-6'>\n          <SidebarItem icon={<TrashIcon className='h-4 w-4' />}>\n            Trash\n          </SidebarItem>\n          <SidebarItem icon={<SettingsIcon className='h-4 w-4' />}>\n            Settings\n          </SidebarItem>\n        </SidebarGroup>\n      </SidebarContent>\n    </Sidebar>\n}",
              ...WithGroups.parameters?.docs?.source,
            },
          },
        }),
        (NotableSidebarEmpty.parameters = {
          ...NotableSidebarEmpty.parameters,
          docs: {
            ...NotableSidebarEmpty.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [collapsed, setCollapsed] = useState(false);\n    return <NotableSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} notes={[]} onNewNote={() => console.info('New note clicked')} onSearch={() => console.info('Search clicked')} onSettings={() => console.info('Settings clicked')} />;\n  }\n}",
              ...NotableSidebarEmpty.parameters?.docs?.source,
            },
          },
        }),
        (NotableSidebarWithNotes.parameters = {
          ...NotableSidebarWithNotes.parameters,
          docs: {
            ...NotableSidebarWithNotes.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [collapsed, setCollapsed] = useState(false);\n    const [selectedNoteId, setSelectedNoteId] = useState('2');\n    const notes = [{\n      id: '1',\n      title: 'Meeting Notes',\n      isFolder: false\n    }, {\n      id: '2',\n      title: 'Project Ideas',\n      isFolder: false\n    }, {\n      id: '3',\n      title: 'Work',\n      isFolder: true\n    }, {\n      id: '4',\n      title: 'Personal',\n      isFolder: true\n    }, {\n      id: '5',\n      title: 'Reading List',\n      isFolder: false\n    }, {\n      id: '6',\n      title: 'Quick Notes',\n      isFolder: false\n    }];\n    return <NotableSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} notes={notes} selectedNoteId={selectedNoteId} onNoteSelect={setSelectedNoteId} onNewNote={() => console.info('New note clicked')} onSearch={() => console.info('Search clicked')} onSettings={() => console.info('Settings clicked')} />;\n  }\n}",
              ...NotableSidebarWithNotes.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const items = Array.from({\n      length: 20\n    }, (_, i) => ({\n      id: `item-${i}`,\n      title: `Document ${i + 1}`\n    }));\n    return <Sidebar>\n        <SidebarHeader>\n          <h2 className='text-lg font-semibold'>Many Items</h2>\n        </SidebarHeader>\n        <SidebarContent>\n          <SidebarGroup title='Documents'>\n            {items.map(item => <SidebarItem key={item.id} icon={<FileTextIcon className='h-4 w-4' />}>\n                {item.title}\n              </SidebarItem>)}\n          </SidebarGroup>\n        </SidebarContent>\n        <SidebarFooter>\n          <SidebarItem icon={<SettingsIcon className='h-4 w-4' />}>\n            Settings\n          </SidebarItem>\n        </SidebarFooter>\n      </Sidebar>;\n  }\n}",
              ...LongContent.parameters?.docs?.source,
            },
          },
        }),
        (CustomStyling.parameters = {
          ...CustomStyling.parameters,
          docs: {
            ...CustomStyling.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <Sidebar className='bg-slate-900 text-white'>\n      <SidebarHeader className='border-slate-700'>\n        <h2 className='text-lg font-semibold text-white'>Dark Theme</h2>\n      </SidebarHeader>\n      <SidebarContent>\n        <SidebarItem icon={<HomeIcon className='h-4 w-4' />} className='hover:bg-slate-800 hover:text-white'>\n          Home\n        </SidebarItem>\n        <SidebarItem icon={<FileTextIcon className='h-4 w-4' />} className='hover:bg-slate-800 hover:text-white' active>\n          Active Item\n        </SidebarItem>\n      </SidebarContent>\n    </Sidebar>\n}",
              ...CustomStyling.parameters?.docs?.source,
            },
          },
        }),
        (InteractiveSidebar.parameters = {
          ...InteractiveSidebar.parameters,
          docs: {
            ...InteractiveSidebar.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <StatefulSidebar />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for component to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Find and click the toggle button\n    const toggleButton = canvas.getAllByRole('button').find(btn => btn.querySelector('svg.lucide-chevron-left'));\n    if (toggleButton) {\n      await userEvent.click(toggleButton);\n    }\n\n    // Wait for animation\n    await new Promise(resolve => setTimeout(resolve, 300));\n\n    // Verify sidebar is collapsed\n    const sidebar = canvas.getByRole('complementary');\n    await expect(sidebar).toHaveAttribute('data-collapsed', 'true');\n\n    // Click toggle again to expand\n    const expandButton = canvas.getAllByRole('button').find(btn => btn.querySelector('svg.lucide-chevron-right'));\n    if (expandButton) {\n      await userEvent.click(expandButton);\n    }\n\n    // Wait for animation\n    await new Promise(resolve => setTimeout(resolve, 300));\n\n    // Verify sidebar is expanded\n    await expect(sidebar).toHaveAttribute('data-collapsed', 'false');\n  }\n}",
              ...InteractiveSidebar.parameters?.docs?.source,
            },
          },
        }),
        (ItemInteraction.parameters = {
          ...ItemInteraction.parameters,
          docs: {
            ...ItemInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [activeItem, setActiveItem] = useState<string | null>(null);\n    const [clickedItems, setClickedItems] = useState<string[]>([]);\n    return <Sidebar>\n        <SidebarHeader>\n          <h2 className='text-lg font-semibold'>Click Tracking</h2>\n        </SidebarHeader>\n        <SidebarContent>\n          <SidebarItem icon={<HomeIcon className='h-4 w-4' />} active={activeItem === 'home'} onClick={() => {\n          setActiveItem('home');\n          setClickedItems([...clickedItems, 'home']);\n        }}>\n            Home\n          </SidebarItem>\n          <SidebarItem icon={<SearchIcon className='h-4 w-4' />} active={activeItem === 'search'} onClick={() => {\n          setActiveItem('search');\n          setClickedItems([...clickedItems, 'search']);\n        }}>\n            Search\n          </SidebarItem>\n          <div className='mt-4 p-3 text-xs text-muted-foreground'>\n            Clicked: {clickedItems.join(', ') || 'None'}\n          </div>\n        </SidebarContent>\n      </Sidebar>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for component to render\n    await new Promise(resolve => setTimeout(resolve, 100));\n\n    // Click home item\n    const homeItem = canvas.getByText('Home');\n    await userEvent.click(homeItem);\n\n    // Verify it's active\n    await expect(homeItem.closest('button')).toHaveClass(/bg-sidebar-primary/);\n\n    // Click search item\n    const searchItem = canvas.getByText('Search');\n    await userEvent.click(searchItem);\n\n    // Verify search is now active and home is not\n    await expect(searchItem.closest('button')).toHaveClass(/bg-sidebar-primary/);\n    await expect(homeItem.closest('button')).not.toHaveClass(/bg-sidebar-primary/);\n  }\n}",
              ...ItemInteraction.parameters?.docs?.source,
            },
          },
        }))
    },
    './lib/utils.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn })
      var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs'
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs'
        )
      function cov_2q9uxw2ujq() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '1ab603e1092f59772e7f858dd62f043983f965a0' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
            statementMap: {
              0: {
                start: { line: 4, column: 4 },
                end: { line: 4, column: 33 },
              },
              1: {
                start: { line: 7, column: 17 },
                end: { line: 7, column: 37 },
              },
              2: {
                start: { line: 8, column: 4 },
                end: { line: 14, column: 20 },
              },
            },
            fnMap: {
              0: {
                name: 'cn',
                decl: {
                  start: { line: 3, column: 16 },
                  end: { line: 3, column: 18 },
                },
                loc: {
                  start: { line: 3, column: 30 },
                  end: { line: 5, column: 1 },
                },
                line: 3,
              },
              1: {
                name: 'formatDate',
                decl: {
                  start: { line: 6, column: 16 },
                  end: { line: 6, column: 26 },
                },
                loc: {
                  start: { line: 6, column: 39 },
                  end: { line: 15, column: 1 },
                },
                line: 6,
              },
            },
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0, 1: 0 },
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/lib/utils.ts',
              ],
              sourcesContent: [
                "import { type ClassValue, clsx } from 'clsx'\nimport { twMerge } from 'tailwind-merge'\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n\nexport function formatDate(dateString: string): string {\n  const date = new Date(dateString)\n  return new Intl.DateTimeFormat('en-US', {\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric',\n    hour: 'numeric',\n    minute: 'numeric',\n  }).format(date)\n}\n",
              ],
              names: [
                'clsx',
                'twMerge',
                'cn',
                'inputs',
                'formatDate',
                'dateString',
                'date',
                'Date',
                'Intl',
                'DateTimeFormat',
                'month',
                'day',
                'year',
                'hour',
                'minute',
                'format',
              ],
              mappings:
                'AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB;AAEA,OAAO,SAASC,WAAWC,UAAkB;IAC3C,MAAMC,OAAO,IAAIC,KAAKF;IACtB,OAAO,IAAIG,KAAKC,cAAc,CAAC,SAAS;QACtCC,OAAO;QACPC,KAAK;QACLC,MAAM;QACNC,MAAM;QACNC,QAAQ;IACV,GAAGC,MAAM,CAACT;AACZ',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '1ab603e1092f59772e7f858dd62f043983f965a0',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2q9uxw2ujq = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function cn(...inputs) {
        return (
          cov_2q9uxw2ujq().f[0]++,
          cov_2q9uxw2ujq().s[0]++,
          (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)(
            (0, clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs)
          )
        )
      }
      cov_2q9uxw2ujq()
    },
  },
])
