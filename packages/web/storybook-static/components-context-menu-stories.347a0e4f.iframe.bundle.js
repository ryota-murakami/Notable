'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9599],
  {
    './design-system/components/context-menu.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ComplexNested: () => ComplexNested,
          Default: () => Default,
          Disabled: () => Disabled,
          FileExplorer: () => FileExplorer,
          ImageContext: () => ImageContext,
          TextEditor: () => TextEditor,
          WithCheckboxItems: () => WithCheckboxItems,
          WithRadioItems: () => WithRadioItems,
          WithShortcuts: () => WithShortcuts,
          WithSubmenu: () => WithSubmenu,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => context_menu_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        dist = __webpack_require__(
          '../../node_modules/.pnpm/@radix-ui+react-context-menu@2.2.4_@types+react-dom@19.1.6_@types+react@19.1.8__@types+_959fb3f77a808f6f5c7ab1af8805d379/node_modules/@radix-ui/react-context-menu/dist/index.mjs'
        ),
        chevron_right = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js'
        ),
        check = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js'
        ),
        circle = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle.js'
        ),
        utils = __webpack_require__('./lib/utils.ts')
      function cov_2ieu6ngcdn() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/context-menu.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '7e466d63397c12d7b7c81c9684c40333f8126a6c' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/context-menu.tsx',
            statementMap: {
              0: {
                start: { line: 7, column: 20 },
                end: { line: 7, column: 45 },
              },
              1: {
                start: { line: 8, column: 27 },
                end: { line: 8, column: 55 },
              },
              2: {
                start: { line: 9, column: 25 },
                end: { line: 9, column: 51 },
              },
              3: {
                start: { line: 10, column: 26 },
                end: { line: 10, column: 53 },
              },
              4: {
                start: { line: 11, column: 23 },
                end: { line: 11, column: 47 },
              },
              5: {
                start: { line: 12, column: 30 },
                end: { line: 12, column: 61 },
              },
              6: {
                start: { line: 13, column: 44 },
                end: { line: 23, column: 7 },
              },
              7: {
                start: { line: 13, column: 124 },
                end: { line: 23, column: 6 },
              },
              8: {
                start: { line: 24, column: 0 },
                end: { line: 24, column: 80 },
              },
              9: {
                start: { line: 25, column: 44 },
                end: { line: 29, column: 7 },
              },
              10: {
                start: { line: 25, column: 107 },
                end: { line: 29, column: 6 },
              },
              11: {
                start: { line: 30, column: 0 },
                end: { line: 30, column: 80 },
              },
              12: {
                start: { line: 31, column: 41 },
                end: { line: 37, column: 7 },
              },
              13: {
                start: { line: 31, column: 104 },
                end: { line: 37, column: 6 },
              },
              14: {
                start: { line: 38, column: 0 },
                end: { line: 38, column: 74 },
              },
              15: {
                start: { line: 39, column: 38 },
                end: { line: 43, column: 7 },
              },
              16: {
                start: { line: 39, column: 108 },
                end: { line: 43, column: 6 },
              },
              17: {
                start: { line: 44, column: 0 },
                end: { line: 44, column: 68 },
              },
              18: {
                start: { line: 45, column: 46 },
                end: { line: 61, column: 7 },
              },
              19: {
                start: { line: 45, column: 128 },
                end: { line: 61, column: 6 },
              },
              20: {
                start: { line: 62, column: 0 },
                end: { line: 62, column: 84 },
              },
              21: {
                start: { line: 63, column: 43 },
                end: { line: 78, column: 7 },
              },
              22: {
                start: { line: 63, column: 116 },
                end: { line: 78, column: 6 },
              },
              23: {
                start: { line: 79, column: 0 },
                end: { line: 79, column: 78 },
              },
              24: {
                start: { line: 80, column: 39 },
                end: { line: 84, column: 7 },
              },
              25: {
                start: { line: 80, column: 109 },
                end: { line: 84, column: 6 },
              },
              26: {
                start: { line: 85, column: 0 },
                end: { line: 85, column: 70 },
              },
              27: {
                start: { line: 86, column: 43 },
                end: { line: 90, column: 7 },
              },
              28: {
                start: { line: 86, column: 106 },
                end: { line: 90, column: 6 },
              },
              29: {
                start: { line: 91, column: 0 },
                end: { line: 91, column: 78 },
              },
              30: {
                start: { line: 92, column: 28 },
                end: { line: 97, column: 1 },
              },
              31: {
                start: { line: 93, column: 4 },
                end: { line: 96, column: 7 },
              },
              32: {
                start: { line: 98, column: 0 },
                end: { line: 98, column: 56 },
              },
              33: {
                start: { line: 100, column: 0 },
                end: { line: 103, column: 2 },
              },
              34: {
                start: { line: 104, column: 0 },
                end: { line: 116, column: 2 },
              },
              35: {
                start: { line: 117, column: 0 },
                end: { line: 120, column: 2 },
              },
              36: {
                start: { line: 121, column: 0 },
                end: { line: 124, column: 2 },
              },
              37: {
                start: { line: 125, column: 0 },
                end: { line: 137, column: 2 },
              },
              38: {
                start: { line: 138, column: 0 },
                end: { line: 141, column: 2 },
              },
              39: {
                start: { line: 142, column: 0 },
                end: { line: 146, column: 2 },
              },
              40: {
                start: { line: 147, column: 0 },
                end: { line: 150, column: 2 },
              },
              41: {
                start: { line: 151, column: 0 },
                end: { line: 163, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: {
                  start: { line: 13, column: 61 },
                  end: { line: 13, column: 62 },
                },
                loc: {
                  start: { line: 13, column: 124 },
                  end: { line: 23, column: 6 },
                },
                line: 13,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 25, column: 61 },
                  end: { line: 25, column: 62 },
                },
                loc: {
                  start: { line: 25, column: 107 },
                  end: { line: 29, column: 6 },
                },
                line: 25,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 31, column: 58 },
                  end: { line: 31, column: 59 },
                },
                loc: {
                  start: { line: 31, column: 104 },
                  end: { line: 37, column: 6 },
                },
                line: 31,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 39, column: 55 },
                  end: { line: 39, column: 56 },
                },
                loc: {
                  start: { line: 39, column: 108 },
                  end: { line: 43, column: 6 },
                },
                line: 39,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 45, column: 63 },
                  end: { line: 45, column: 64 },
                },
                loc: {
                  start: { line: 45, column: 128 },
                  end: { line: 61, column: 6 },
                },
                line: 45,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 63, column: 60 },
                  end: { line: 63, column: 61 },
                },
                loc: {
                  start: { line: 63, column: 116 },
                  end: { line: 78, column: 6 },
                },
                line: 63,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 80, column: 56 },
                  end: { line: 80, column: 57 },
                },
                loc: {
                  start: { line: 80, column: 109 },
                  end: { line: 84, column: 6 },
                },
                line: 80,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 86, column: 60 },
                  end: { line: 86, column: 61 },
                },
                loc: {
                  start: { line: 86, column: 106 },
                  end: { line: 90, column: 6 },
                },
                line: 86,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 92, column: 28 },
                  end: { line: 92, column: 29 },
                },
                loc: {
                  start: { line: 92, column: 55 },
                  end: { line: 97, column: 1 },
                },
                line: 92,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 15, column: 228 },
                  end: { line: 15, column: 243 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 15, column: 228 },
                    end: { line: 15, column: 233 },
                  },
                  {
                    start: { line: 15, column: 237 },
                    end: { line: 15, column: 243 },
                  },
                ],
                line: 15,
              },
              1: {
                loc: {
                  start: { line: 41, column: 231 },
                  end: { line: 41, column: 246 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 41, column: 231 },
                    end: { line: 41, column: 236 },
                  },
                  {
                    start: { line: 41, column: 240 },
                    end: { line: 41, column: 246 },
                  },
                ],
                line: 41,
              },
              2: {
                loc: {
                  start: { line: 82, column: 75 },
                  end: { line: 82, column: 90 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 82, column: 75 },
                    end: { line: 82, column: 80 },
                  },
                  {
                    start: { line: 82, column: 84 },
                    end: { line: 82, column: 90 },
                  },
                ],
                line: 82,
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
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 0,
              28: 0,
              29: 0,
              30: 0,
              31: 0,
              32: 0,
              33: 0,
              34: 0,
              35: 0,
              36: 0,
              37: 0,
              38: 0,
              39: 0,
              40: 0,
              41: 0,
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
            b: { 0: [0, 0], 1: [0, 0], 2: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/ui/context-menu.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport * as React from 'react'\nimport * as ContextMenuPrimitive from '@radix-ui/react-context-menu'\nimport { Check, ChevronRight, Circle } from 'lucide-react'\n\nimport { cn } from '@/lib/utils'\n\nconst ContextMenu = ContextMenuPrimitive.Root\n\nconst ContextMenuTrigger = ContextMenuPrimitive.Trigger\n\nconst ContextMenuGroup = ContextMenuPrimitive.Group\n\nconst ContextMenuPortal = ContextMenuPrimitive.Portal\n\nconst ContextMenuSub = ContextMenuPrimitive.Sub\n\nconst ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup\n\nconst ContextMenuSubTrigger = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {\n    inset?: boolean\n  }\n>(({ className, inset, children, ...props }, ref) => (\n  <ContextMenuPrimitive.SubTrigger\n    ref={ref}\n    className={cn(\n      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',\n      inset && 'pl-8',\n      className\n    )}\n    {...props}\n  >\n    {children}\n    <ChevronRight className='ml-auto h-4 w-4' />\n  </ContextMenuPrimitive.SubTrigger>\n))\nContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName\n\nconst ContextMenuSubContent = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>\n>(({ className, ...props }, ref) => (\n  <ContextMenuPrimitive.SubContent\n    ref={ref}\n    className={cn(\n      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',\n      className\n    )}\n    {...props}\n  />\n))\nContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName\n\nconst ContextMenuContent = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>\n>(({ className, ...props }, ref) => (\n  <ContextMenuPrimitive.Portal>\n    <ContextMenuPrimitive.Content\n      ref={ref}\n      className={cn(\n        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',\n        className\n      )}\n      {...props}\n    />\n  </ContextMenuPrimitive.Portal>\n))\nContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName\n\nconst ContextMenuItem = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.Item>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <ContextMenuPrimitive.Item\n    ref={ref}\n    className={cn(\n      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',\n      inset && 'pl-8',\n      className\n    )}\n    {...props}\n  />\n))\nContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName\n\nconst ContextMenuCheckboxItem = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>\n>(({ className, children, checked, ...props }, ref) => (\n  <ContextMenuPrimitive.CheckboxItem\n    ref={ref}\n    className={cn(\n      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',\n      className\n    )}\n    checked={checked}\n    {...props}\n  >\n    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>\n      <ContextMenuPrimitive.ItemIndicator>\n        <Check className='h-4 w-4' />\n      </ContextMenuPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </ContextMenuPrimitive.CheckboxItem>\n))\nContextMenuCheckboxItem.displayName =\n  ContextMenuPrimitive.CheckboxItem.displayName\n\nconst ContextMenuRadioItem = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>\n>(({ className, children, ...props }, ref) => (\n  <ContextMenuPrimitive.RadioItem\n    ref={ref}\n    className={cn(\n      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',\n      className\n    )}\n    {...props}\n  >\n    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>\n      <ContextMenuPrimitive.ItemIndicator>\n        <Circle className='h-2 w-2 fill-current' />\n      </ContextMenuPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </ContextMenuPrimitive.RadioItem>\n))\nContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName\n\nconst ContextMenuLabel = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.Label>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <ContextMenuPrimitive.Label\n    ref={ref}\n    className={cn(\n      'px-2 py-1.5 text-sm font-semibold text-foreground',\n      inset && 'pl-8',\n      className\n    )}\n    {...props}\n  />\n))\nContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName\n\nconst ContextMenuSeparator = React.forwardRef<\n  React.ElementRef<typeof ContextMenuPrimitive.Separator>,\n  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>\n>(({ className, ...props }, ref) => (\n  <ContextMenuPrimitive.Separator\n    ref={ref}\n    className={cn('-mx-1 my-1 h-px bg-border', className)}\n    {...props}\n  />\n))\nContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName\n\nconst ContextMenuShortcut = ({\n  className,\n  ...props\n}: React.HTMLAttributes<globalThis.HTMLSpanElement>) => {\n  return (\n    <span\n      className={cn(\n        'ml-auto text-xs tracking-widest text-muted-foreground',\n        className\n      )}\n      {...props}\n    />\n  )\n}\nContextMenuShortcut.displayName = 'ContextMenuShortcut'\n\nexport {\n  ContextMenu,\n  ContextMenuTrigger,\n  ContextMenuContent,\n  ContextMenuItem,\n  ContextMenuCheckboxItem,\n  ContextMenuRadioItem,\n  ContextMenuLabel,\n  ContextMenuSeparator,\n  ContextMenuShortcut,\n  ContextMenuGroup,\n  ContextMenuPortal,\n  ContextMenuSub,\n  ContextMenuSubContent,\n  ContextMenuSubTrigger,\n  ContextMenuRadioGroup,\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACnE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,wDAAA;AAEzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AAE/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAElD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAEpD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAK5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YACnD,MAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5M,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;YAER,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;0BACT,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;AAG/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE9E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG5C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QAC7B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACvb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE9E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAGzC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAClC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAC1B,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACvb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAIf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAExE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAKtC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YACzC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC/M,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAET,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAGb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAElE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YACrD,MAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEV,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACf,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0BAET,KAAC,CAAC,CAAC,CAAC,CAAC;gBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wCAC5E,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;4CACjC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;YAG/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAGb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAClC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAE9C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAG3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAC5C,MAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACR,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '7e466d63397c12d7b7c81c9684c40333f8126a6c',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_2ieu6ngcdn = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_2ieu6ngcdn()
      const ContextMenu = (cov_2ieu6ngcdn().s[0]++, dist.bL),
        ContextMenuTrigger = (cov_2ieu6ngcdn().s[1]++, dist.l9),
        ContextMenuSub =
          (cov_2ieu6ngcdn().s[2]++,
          dist.YJ,
          cov_2ieu6ngcdn().s[3]++,
          dist.ZL,
          cov_2ieu6ngcdn().s[4]++,
          dist.Pb),
        ContextMenuRadioGroup = (cov_2ieu6ngcdn().s[5]++, dist.z6),
        ContextMenuSubTrigger =
          (cov_2ieu6ngcdn().s[6]++,
          react.forwardRef(
            ({ className, inset, children, ...props }, ref) => (
              cov_2ieu6ngcdn().f[0]++,
              cov_2ieu6ngcdn().s[7]++,
              (0, jsx_runtime.jsxs)(dist.ZP, {
                ref,
                className: (0, utils.cn)(
                  'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                  (cov_2ieu6ngcdn().b[0][0]++,
                  inset && (cov_2ieu6ngcdn().b[0][1]++, 'pl-8')),
                  className
                ),
                ...props,
                children: [
                  children,
                  (0, jsx_runtime.jsx)(chevron_right.A, {
                    className: 'ml-auto h-4 w-4',
                  }),
                ],
              })
            )
          ))
      ;(cov_2ieu6ngcdn().s[8]++,
        (ContextMenuSubTrigger.displayName = dist.ZP.displayName))
      const ContextMenuSubContent =
        (cov_2ieu6ngcdn().s[9]++,
        react.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2ieu6ngcdn().f[1]++,
            cov_2ieu6ngcdn().s[10]++,
            (0, jsx_runtime.jsx)(dist.G5, {
              ref,
              className: (0, utils.cn)(
                'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[11]++,
        (ContextMenuSubContent.displayName = dist.G5.displayName))
      const ContextMenuContent =
        (cov_2ieu6ngcdn().s[12]++,
        react.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2ieu6ngcdn().f[2]++,
            cov_2ieu6ngcdn().s[13]++,
            (0, jsx_runtime.jsx)(dist.ZL, {
              children: (0, jsx_runtime.jsx)(dist.UC, {
                ref,
                className: (0, utils.cn)(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  className
                ),
                ...props,
              }),
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[14]++,
        (ContextMenuContent.displayName = dist.UC.displayName))
      const ContextMenuItem =
        (cov_2ieu6ngcdn().s[15]++,
        react.forwardRef(
          ({ className, inset, ...props }, ref) => (
            cov_2ieu6ngcdn().f[3]++,
            cov_2ieu6ngcdn().s[16]++,
            (0, jsx_runtime.jsx)(dist.q7, {
              ref,
              className: (0, utils.cn)(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                (cov_2ieu6ngcdn().b[1][0]++,
                inset && (cov_2ieu6ngcdn().b[1][1]++, 'pl-8')),
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[17]++,
        (ContextMenuItem.displayName = dist.q7.displayName))
      const ContextMenuCheckboxItem =
        (cov_2ieu6ngcdn().s[18]++,
        react.forwardRef(
          ({ className, children, checked, ...props }, ref) => (
            cov_2ieu6ngcdn().f[4]++,
            cov_2ieu6ngcdn().s[19]++,
            (0, jsx_runtime.jsxs)(dist.H_, {
              ref,
              className: (0, utils.cn)(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className
              ),
              checked,
              ...props,
              children: [
                (0, jsx_runtime.jsx)('span', {
                  className:
                    'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, jsx_runtime.jsx)(dist.VF, {
                    children: (0, jsx_runtime.jsx)(check.A, {
                      className: 'h-4 w-4',
                    }),
                  }),
                }),
                children,
              ],
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[20]++,
        (ContextMenuCheckboxItem.displayName = dist.H_.displayName))
      const ContextMenuRadioItem =
        (cov_2ieu6ngcdn().s[21]++,
        react.forwardRef(
          ({ className, children, ...props }, ref) => (
            cov_2ieu6ngcdn().f[5]++,
            cov_2ieu6ngcdn().s[22]++,
            (0, jsx_runtime.jsxs)(dist.hN, {
              ref,
              className: (0, utils.cn)(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className
              ),
              ...props,
              children: [
                (0, jsx_runtime.jsx)('span', {
                  className:
                    'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, jsx_runtime.jsx)(dist.VF, {
                    children: (0, jsx_runtime.jsx)(circle.A, {
                      className: 'h-2 w-2 fill-current',
                    }),
                  }),
                }),
                children,
              ],
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[23]++,
        (ContextMenuRadioItem.displayName = dist.hN.displayName))
      const ContextMenuLabel =
        (cov_2ieu6ngcdn().s[24]++,
        react.forwardRef(
          ({ className, inset, ...props }, ref) => (
            cov_2ieu6ngcdn().f[6]++,
            cov_2ieu6ngcdn().s[25]++,
            (0, jsx_runtime.jsx)(dist.JU, {
              ref,
              className: (0, utils.cn)(
                'px-2 py-1.5 text-sm font-semibold text-foreground',
                (cov_2ieu6ngcdn().b[2][0]++,
                inset && (cov_2ieu6ngcdn().b[2][1]++, 'pl-8')),
                className
              ),
              ...props,
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[26]++,
        (ContextMenuLabel.displayName = dist.JU.displayName))
      const ContextMenuSeparator =
        (cov_2ieu6ngcdn().s[27]++,
        react.forwardRef(
          ({ className, ...props }, ref) => (
            cov_2ieu6ngcdn().f[7]++,
            cov_2ieu6ngcdn().s[28]++,
            (0, jsx_runtime.jsx)(dist.wv, {
              ref,
              className: (0, utils.cn)('-mx-1 my-1 h-px bg-border', className),
              ...props,
            })
          )
        ))
      ;(cov_2ieu6ngcdn().s[29]++,
        (ContextMenuSeparator.displayName = dist.wv.displayName),
        cov_2ieu6ngcdn().s[30]++)
      const ContextMenuShortcut = ({ className, ...props }) => (
        cov_2ieu6ngcdn().f[8]++,
        cov_2ieu6ngcdn().s[31]++,
        (0, jsx_runtime.jsx)('span', {
          className: (0, utils.cn)(
            'ml-auto text-xs tracking-widest text-muted-foreground',
            className
          ),
          ...props,
        })
      )
      ;(cov_2ieu6ngcdn().s[32]++,
        (ContextMenuShortcut.displayName = 'ContextMenuShortcut'),
        cov_2ieu6ngcdn().s[33]++,
        (ContextMenuContent.__docgenInfo = { description: '', methods: [] }),
        cov_2ieu6ngcdn().s[34]++,
        (ContextMenuItem.__docgenInfo = {
          description: '',
          methods: [],
          props: {
            inset: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }),
        cov_2ieu6ngcdn().s[35]++,
        (ContextMenuCheckboxItem.__docgenInfo = {
          description: '',
          methods: [],
        }),
        cov_2ieu6ngcdn().s[36]++,
        (ContextMenuRadioItem.__docgenInfo = { description: '', methods: [] }),
        cov_2ieu6ngcdn().s[37]++,
        (ContextMenuLabel.__docgenInfo = {
          description: '',
          methods: [],
          props: {
            inset: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }),
        cov_2ieu6ngcdn().s[38]++,
        (ContextMenuSeparator.__docgenInfo = { description: '', methods: [] }),
        cov_2ieu6ngcdn().s[39]++,
        (ContextMenuShortcut.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ContextMenuShortcut',
        }),
        cov_2ieu6ngcdn().s[40]++,
        (ContextMenuSubContent.__docgenInfo = { description: '', methods: [] }),
        cov_2ieu6ngcdn().s[41]++,
        (ContextMenuSubTrigger.__docgenInfo = {
          description: '',
          methods: [],
          props: {
            inset: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }))
      const context_menu_stories = {
          title: 'Design System/Overlay/ContextMenu',
          component: ContextMenu,
          tags: ['autodocs'],
          parameters: { layout: 'centered' },
        },
        Default = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click here',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Back' }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Forward',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Reload',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Save Page As...',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Print...',
                    }),
                  ],
                }),
              ],
            }),
        },
        WithShortcuts = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click for shortcuts',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Undo',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘Z',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Redo',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⇧⌘Z',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Cut',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘X',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Copy',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘C',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Paste',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘V',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        WithSubmenu = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click for submenu',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'New Tab',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'New Window',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'Share',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Email Link',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Messages',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Notes',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Copy Link',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Print',
                    }),
                  ],
                }),
              ],
            }),
        },
        WithCheckboxItems = {
          render: () => {
            const [showBookmarks, setShowBookmarks] = react.useState(!0),
              [showFullURLs, setShowFullURLs] = react.useState(!1)
            return (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click for options',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsxs)(ContextMenuCheckboxItem, {
                      checked: showBookmarks,
                      onCheckedChange: setShowBookmarks,
                      children: [
                        'Show Bookmarks Bar',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘⇧B',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuCheckboxItem, {
                      checked: showFullURLs,
                      onCheckedChange: setShowFullURLs,
                      children: 'Always Show Full URLs',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Reload',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Force Reload',
                    }),
                  ],
                }),
              ],
            })
          },
        },
        WithRadioItems = {
          render: () => {
            const [fontSize, setFontSize] = react.useState('medium')
            return (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click for text size',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuLabel, {
                      children: 'Text Size',
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuRadioGroup, {
                      value: fontSize,
                      onValueChange: setFontSize,
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuRadioItem, {
                          value: 'small',
                          children: 'Small',
                        }),
                        (0, jsx_runtime.jsx)(ContextMenuRadioItem, {
                          value: 'medium',
                          children: 'Medium',
                        }),
                        (0, jsx_runtime.jsx)(ContextMenuRadioItem, {
                          value: 'large',
                          children: 'Large',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Reset Zoom',
                    }),
                  ],
                }),
              ],
            })
          },
        },
        FileExplorer = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border bg-muted/50 text-sm',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'text-center',
                    children: [
                      (0, jsx_runtime.jsx)('div', {
                        className: 'mb-2 text-3xl',
                        children: '📄',
                      }),
                      (0, jsx_runtime.jsx)('div', { children: 'document.txt' }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Open' }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Open With...',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Cut' }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Copy' }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Paste',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'Send To',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Bluetooth',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Desktop (create shortcut)',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Compressed Folder',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Mail Recipient',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Rename',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      className: 'text-destructive',
                      children: 'Delete',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Properties',
                    }),
                  ],
                }),
              ],
            }),
        },
        TextEditor = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  children: (0, jsx_runtime.jsx)('div', {
                    className: 'rounded-md border p-4',
                    children: (0, jsx_runtime.jsx)('p', {
                      className: 'text-sm',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Right-click on this text to see editor options.',
                    }),
                  }),
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Cut',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘X',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Copy',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘C',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Paste',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘V',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'Format',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Bold',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Italic',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Underline',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Strikethrough',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Superscript',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Subscript',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'Insert',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Link...',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Image...',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Table',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Horizontal Rule',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Select All',
                    }),
                  ],
                }),
              ],
            }),
        },
        ImageContext = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  children: (0, jsx_runtime.jsx)('div', {
                    className: 'overflow-hidden rounded-md',
                    children: (0, jsx_runtime.jsx)('div', {
                      className:
                        'h-[200px] w-[300px] bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium',
                      children: 'Right-click Image',
                    }),
                  }),
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Open Image in New Tab',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Save Image As...',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Copy Image',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Copy Image Address',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'Search Image With',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Google Lens',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'TinEye',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuItem, {
                              children: 'Yandex',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Inspect',
                    }),
                  ],
                }),
              ],
            }),
        },
        Disabled = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click (with disabled items)',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'New File',
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      disabled: !0,
                      children: [
                        'Save',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘S',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      disabled: !0,
                      children: [
                        'Save As...',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⇧⌘S',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Exit' }),
                  ],
                }),
              ],
            }),
        },
        ComplexNested = {
          render: () =>
            (0, jsx_runtime.jsxs)(ContextMenu, {
              children: [
                (0, jsx_runtime.jsx)(ContextMenuTrigger, {
                  className:
                    'flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm',
                  children: 'Right click for complex menu',
                }),
                (0, jsx_runtime.jsxs)(ContextMenuContent, {
                  className: 'w-64',
                  children: [
                    (0, jsx_runtime.jsx)(ContextMenuLabel, {
                      children: 'Application',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'About',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, {
                      children: 'Preferences',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsx)(ContextMenuLabel, {
                      children: 'Edit',
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Undo' }),
                    (0, jsx_runtime.jsx)(ContextMenuItem, { children: 'Redo' }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuSub, {
                      children: [
                        (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                          children: 'View',
                        }),
                        (0, jsx_runtime.jsxs)(ContextMenuSubContent, {
                          className: 'w-48',
                          children: [
                            (0, jsx_runtime.jsx)(ContextMenuCheckboxItem, {
                              checked: !0,
                              children: 'Show Toolbar',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuCheckboxItem, {
                              children: 'Show Sidebar',
                            }),
                            (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                            (0, jsx_runtime.jsxs)(ContextMenuSub, {
                              children: [
                                (0, jsx_runtime.jsx)(ContextMenuSubTrigger, {
                                  children: 'Panel Position',
                                }),
                                (0, jsx_runtime.jsx)(ContextMenuSubContent, {
                                  className: 'w-48',
                                  children: (0, jsx_runtime.jsxs)(
                                    ContextMenuRadioGroup,
                                    {
                                      value: 'bottom',
                                      children: [
                                        (0, jsx_runtime.jsx)(
                                          ContextMenuRadioItem,
                                          { value: 'top', children: 'Top' }
                                        ),
                                        (0, jsx_runtime.jsx)(
                                          ContextMenuRadioItem,
                                          {
                                            value: 'bottom',
                                            children: 'Bottom',
                                          }
                                        ),
                                        (0, jsx_runtime.jsx)(
                                          ContextMenuRadioItem,
                                          { value: 'right', children: 'Right' }
                                        ),
                                      ],
                                    }
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ContextMenuSeparator, {}),
                    (0, jsx_runtime.jsxs)(ContextMenuItem, {
                      children: [
                        'Quit',
                        (0, jsx_runtime.jsx)(ContextMenuShortcut, {
                          children: '⌘Q',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'Default',
          'WithShortcuts',
          'WithSubmenu',
          'WithCheckboxItems',
          'WithRadioItems',
          'FileExplorer',
          'TextEditor',
          'ImageContext',
          'Disabled',
          'ComplexNested',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n        Right click here\n      </ContextMenuTrigger>\n      <ContextMenuContent>\n        <ContextMenuItem>Back</ContextMenuItem>\n        <ContextMenuItem>Forward</ContextMenuItem>\n        <ContextMenuItem>Reload</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Save Page As...</ContextMenuItem>\n        <ContextMenuItem>Print...</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithShortcuts.parameters = {
          ...WithShortcuts.parameters,
          docs: {
            ...WithShortcuts.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n        Right click for shortcuts\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>\n          Undo\n          <ContextMenuShortcut>⌘Z</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem>\n          Redo\n          <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>\n          Cut\n          <ContextMenuShortcut>⌘X</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem>\n          Copy\n          <ContextMenuShortcut>⌘C</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem>\n          Paste\n          <ContextMenuShortcut>⌘V</ContextMenuShortcut>\n        </ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...WithShortcuts.parameters?.docs?.source,
            },
          },
        }),
        (WithSubmenu.parameters = {
          ...WithSubmenu.parameters,
          docs: {
            ...WithSubmenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n        Right click for submenu\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>New Tab</ContextMenuItem>\n        <ContextMenuItem>New Window</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuItem>Email Link</ContextMenuItem>\n            <ContextMenuItem>Messages</ContextMenuItem>\n            <ContextMenuItem>Notes</ContextMenuItem>\n            <ContextMenuSeparator />\n            <ContextMenuItem>Copy Link</ContextMenuItem>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Print</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...WithSubmenu.parameters?.docs?.source,
            },
          },
        }),
        (WithCheckboxItems.parameters = {
          ...WithCheckboxItems.parameters,
          docs: {
            ...WithCheckboxItems.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [showBookmarks, setShowBookmarks] = React.useState(true);\n    const [showFullURLs, setShowFullURLs] = React.useState(false);\n    return <ContextMenu>\n        <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n          Right click for options\n        </ContextMenuTrigger>\n        <ContextMenuContent className='w-64'>\n          <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>\n            Show Bookmarks Bar\n            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>\n          </ContextMenuCheckboxItem>\n          <ContextMenuCheckboxItem checked={showFullURLs} onCheckedChange={setShowFullURLs}>\n            Always Show Full URLs\n          </ContextMenuCheckboxItem>\n          <ContextMenuSeparator />\n          <ContextMenuItem>Reload</ContextMenuItem>\n          <ContextMenuItem>Force Reload</ContextMenuItem>\n        </ContextMenuContent>\n      </ContextMenu>;\n  }\n}",
              ...WithCheckboxItems.parameters?.docs?.source,
            },
          },
        }),
        (WithRadioItems.parameters = {
          ...WithRadioItems.parameters,
          docs: {
            ...WithRadioItems.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => {\n    const [fontSize, setFontSize] = React.useState('medium');\n    return <ContextMenu>\n        <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n          Right click for text size\n        </ContextMenuTrigger>\n        <ContextMenuContent className='w-64'>\n          <ContextMenuLabel>Text Size</ContextMenuLabel>\n          <ContextMenuRadioGroup value={fontSize} onValueChange={setFontSize}>\n            <ContextMenuRadioItem value='small'>Small</ContextMenuRadioItem>\n            <ContextMenuRadioItem value='medium'>Medium</ContextMenuRadioItem>\n            <ContextMenuRadioItem value='large'>Large</ContextMenuRadioItem>\n          </ContextMenuRadioGroup>\n          <ContextMenuSeparator />\n          <ContextMenuItem>Reset Zoom</ContextMenuItem>\n        </ContextMenuContent>\n      </ContextMenu>;\n  }\n}",
              ...WithRadioItems.parameters?.docs?.source,
            },
          },
        }),
        (FileExplorer.parameters = {
          ...FileExplorer.parameters,
          docs: {
            ...FileExplorer.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border bg-muted/50 text-sm'>\n        <div className='text-center'>\n          <div className='mb-2 text-3xl'>📄</div>\n          <div>document.txt</div>\n        </div>\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>Open</ContextMenuItem>\n        <ContextMenuItem>Open With...</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Cut</ContextMenuItem>\n        <ContextMenuItem>Copy</ContextMenuItem>\n        <ContextMenuItem>Paste</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>Send To</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuItem>Bluetooth</ContextMenuItem>\n            <ContextMenuItem>Desktop (create shortcut)</ContextMenuItem>\n            <ContextMenuItem>Compressed Folder</ContextMenuItem>\n            <ContextMenuItem>Mail Recipient</ContextMenuItem>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Rename</ContextMenuItem>\n        <ContextMenuItem className='text-destructive'>Delete</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Properties</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...FileExplorer.parameters?.docs?.source,
            },
          },
        }),
        (TextEditor.parameters = {
          ...TextEditor.parameters,
          docs: {
            ...TextEditor.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger>\n        <div className='rounded-md border p-4'>\n          <p className='text-sm'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Right-click\n            on this text to see editor options.\n          </p>\n        </div>\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>\n          Cut\n          <ContextMenuShortcut>⌘X</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem>\n          Copy\n          <ContextMenuShortcut>⌘C</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem>\n          Paste\n          <ContextMenuShortcut>⌘V</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuItem>Bold</ContextMenuItem>\n            <ContextMenuItem>Italic</ContextMenuItem>\n            <ContextMenuItem>Underline</ContextMenuItem>\n            <ContextMenuSeparator />\n            <ContextMenuItem>Strikethrough</ContextMenuItem>\n            <ContextMenuItem>Superscript</ContextMenuItem>\n            <ContextMenuItem>Subscript</ContextMenuItem>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>Insert</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuItem>Link...</ContextMenuItem>\n            <ContextMenuItem>Image...</ContextMenuItem>\n            <ContextMenuItem>Table</ContextMenuItem>\n            <ContextMenuItem>Horizontal Rule</ContextMenuItem>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Select All</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...TextEditor.parameters?.docs?.source,
            },
          },
        }),
        (ImageContext.parameters = {
          ...ImageContext.parameters,
          docs: {
            ...ImageContext.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger>\n        <div className='overflow-hidden rounded-md'>\n          <div className='h-[200px] w-[300px] bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium'>\n            Right-click Image\n          </div>\n        </div>\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>Open Image in New Tab</ContextMenuItem>\n        <ContextMenuItem>Save Image As...</ContextMenuItem>\n        <ContextMenuItem>Copy Image</ContextMenuItem>\n        <ContextMenuItem>Copy Image Address</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>Search Image With</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuItem>Google Lens</ContextMenuItem>\n            <ContextMenuItem>TinEye</ContextMenuItem>\n            <ContextMenuItem>Yandex</ContextMenuItem>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Inspect</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...ImageContext.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n        Right click (with disabled items)\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuItem>New File</ContextMenuItem>\n        <ContextMenuItem disabled>\n          Save\n          <ContextMenuShortcut>⌘S</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuItem disabled>\n          Save As...\n          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>\n        </ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Exit</ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (ComplexNested.parameters = {
          ...ComplexNested.parameters,
          docs: {
            ...ComplexNested.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <ContextMenu>\n      <ContextMenuTrigger className='flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>\n        Right click for complex menu\n      </ContextMenuTrigger>\n      <ContextMenuContent className='w-64'>\n        <ContextMenuLabel>Application</ContextMenuLabel>\n        <ContextMenuItem>About</ContextMenuItem>\n        <ContextMenuItem>Preferences</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuLabel>Edit</ContextMenuLabel>\n        <ContextMenuItem>Undo</ContextMenuItem>\n        <ContextMenuItem>Redo</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuSub>\n          <ContextMenuSubTrigger>View</ContextMenuSubTrigger>\n          <ContextMenuSubContent className='w-48'>\n            <ContextMenuCheckboxItem checked>\n              Show Toolbar\n            </ContextMenuCheckboxItem>\n            <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>\n            <ContextMenuSeparator />\n            <ContextMenuSub>\n              <ContextMenuSubTrigger>Panel Position</ContextMenuSubTrigger>\n              <ContextMenuSubContent className='w-48'>\n                <ContextMenuRadioGroup value='bottom'>\n                  <ContextMenuRadioItem value='top'>Top</ContextMenuRadioItem>\n                  <ContextMenuRadioItem value='bottom'>\n                    Bottom\n                  </ContextMenuRadioItem>\n                  <ContextMenuRadioItem value='right'>\n                    Right\n                  </ContextMenuRadioItem>\n                </ContextMenuRadioGroup>\n              </ContextMenuSubContent>\n            </ContextMenuSub>\n          </ContextMenuSubContent>\n        </ContextMenuSub>\n        <ContextMenuSeparator />\n        <ContextMenuItem>\n          Quit\n          <ContextMenuShortcut>⌘Q</ContextMenuShortcut>\n        </ContextMenuItem>\n      </ContextMenuContent>\n    </ContextMenu>\n}",
              ...ComplexNested.parameters?.docs?.source,
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
