/*! For license information please see 4704.b8a16e3b.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4704],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bookmark.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Bookmark })
        const Bookmark = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Bookmark', [
          [
            'path',
            {
              d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z',
              key: '1fy3hk',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clipboard.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Clipboard })
        const Clipboard = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Clipboard', [
          [
            'rect',
            {
              width: '8',
              height: '4',
              x: '8',
              y: '2',
              rx: '1',
              ry: '1',
              key: 'tgr4d6',
            },
          ],
          [
            'path',
            {
              d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
              key: '116196',
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Copy })
        const Copy = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Copy', [
          [
            'rect',
            {
              width: '14',
              height: '14',
              x: '8',
              y: '8',
              rx: '2',
              ry: '2',
              key: '17jyea',
            },
          ],
          [
            'path',
            {
              d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
              key: 'zix9uf',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/divide.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Divide })
        const Divide = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Divide', [
          ['circle', { cx: '12', cy: '6', r: '1', key: '1bh7o1' }],
          ['line', { x1: '5', x2: '19', y1: '12', y2: '12', key: '13b5wn' }],
          ['circle', { cx: '12', cy: '18', r: '1', key: 'lqb9t5' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Eye })
        const Eye = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Eye', [
          [
            'path',
            {
              d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
              key: '1nclc0',
            },
          ],
          ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Heart })
        const Heart = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Heart', [
          [
            'path',
            {
              d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
              key: 'c3ymky',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/image.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Image })
        const Image = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Image', [
          [
            'rect',
            {
              width: '18',
              height: '18',
              x: '3',
              y: '3',
              rx: '2',
              ry: '2',
              key: '1m3agn',
            },
          ],
          ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
          [
            'path',
            { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' },
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/link.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Link })
        const Link = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Link', [
          [
            'path',
            {
              d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
              key: '1cjeqo',
            },
          ],
          [
            'path',
            {
              d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
              key: '19qd67',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list-ordered.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ListOrdered })
        const ListOrdered = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('ListOrdered', [
          ['path', { d: 'M10 12h11', key: '6m4ad9' }],
          ['path', { d: 'M10 18h11', key: '11hvi2' }],
          ['path', { d: 'M10 6h11', key: 'c7qv1k' }],
          ['path', { d: 'M4 10h2', key: '16xx2s' }],
          ['path', { d: 'M4 6h1v4', key: 'cnovpq' }],
          ['path', { d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1', key: 'm9a95d' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/list.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => List })
        const List = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('List', [
          ['path', { d: 'M3 12h.01', key: 'nlz23k' }],
          ['path', { d: 'M3 18h.01', key: '1tta3j' }],
          ['path', { d: 'M3 6h.01', key: '1rqtza' }],
          ['path', { d: 'M8 12h13', key: '1za7za' }],
          ['path', { d: 'M8 18h13', key: '1lx6n3' }],
          ['path', { d: 'M8 6h13', key: 'ik3vkj' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/maximize.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Maximize })
        const Maximize = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Maximize', [
          ['path', { d: 'M8 3H5a2 2 0 0 0-2 2v3', key: '1dcmit' }],
          ['path', { d: 'M21 8V5a2 2 0 0 0-2-2h-3', key: '1e4gt3' }],
          ['path', { d: 'M3 16v3a2 2 0 0 0 2 2h3', key: 'wsl5sc' }],
          ['path', { d: 'M16 21h3a2 2 0 0 0 2-2v-3', key: '18trek' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/printer.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Printer })
        const Printer = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Printer', [
          [
            'path',
            {
              d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
              key: '143wyd',
            },
          ],
          [
            'path',
            { d: 'M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6', key: '1itne7' },
          ],
          [
            'rect',
            {
              x: '6',
              y: '14',
              width: '12',
              height: '8',
              rx: '1',
              key: '1ue0tg',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/quote.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Quote })
        const Quote = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Quote', [
          [
            'path',
            {
              d: 'M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: 'rib7q0',
            },
          ],
          [
            'path',
            {
              d: 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
              key: '1ymkrd',
            },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/redo.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Redo })
        const Redo = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Redo', [
          ['path', { d: 'M21 7v6h-6', key: '3ptur4' }],
          [
            'path',
            { d: 'M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7', key: '1kgawr' },
          ],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/save.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Save })
        const Save = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Save', [
          [
            'path',
            {
              d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
              key: '1c8476',
            },
          ],
          [
            'path',
            { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' },
          ],
          ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/scissors.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Scissors })
        const Scissors = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Scissors', [
          ['circle', { cx: '6', cy: '6', r: '3', key: '1lh9wr' }],
          ['path', { d: 'M8.12 8.12 12 12', key: '1alkpv' }],
          ['path', { d: 'M20 4 8.12 15.88', key: 'xgtan2' }],
          ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
          ['path', { d: 'M14.8 14.8 20 20', key: 'ptml3r' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Share })
        const Share = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Share', [
          [
            'path',
            { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', key: '1b2hhj' },
          ],
          ['polyline', { points: '16 6 12 2 8 6', key: 'm901s6' }],
          ['line', { x1: '12', x2: '12', y1: '2', y2: '15', key: '1p0rca' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-check-big.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => SquareCheckBig })
        const SquareCheckBig = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('SquareCheckBig', [
          [
            'path',
            {
              d: 'M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5',
              key: '1uzm8b',
            },
          ],
          ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
        ])
      },
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/square-pen.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => SquarePen })
        const SquarePen = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('SquarePen', [
          [
            'path',
            {
              d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
              key: '1m0v6g',
            },
          ],
          [
            'path',
            {
              d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
              key: 'ohrbg2',
            },
          ],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/table.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Table })
        const Table = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Table', [
          ['path', { d: 'M12 3v18', key: '108xh3' }],
          [
            'rect',
            {
              width: '18',
              height: '18',
              x: '3',
              y: '3',
              rx: '2',
              key: 'afitv7',
            },
          ],
          ['path', { d: 'M3 9h18', key: '1pudct' }],
          ['path', { d: 'M3 15h18', key: '5xshup' }],
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
    '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/undo.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Undo })
        const Undo = (0,
        __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js'
        ).A)('Undo', [
          ['path', { d: 'M3 7v6h6', key: '1v2h90' }],
          [
            'path',
            { d: 'M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13', key: '1r6uu6' },
          ],
        ])
      },
  },
])
