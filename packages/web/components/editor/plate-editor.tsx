'use client'

import React, { useCallback, useRef, useMemo } from 'react'
import { createEditor, Editor, Range, Point } from 'slate'
import { Slate, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import {
  Plate,
  PlateContent,
  PlateController,
  PlateElement,
  PlateLeaf,
  createPlugins,
  createPlateEditor,
  createPluginFactory,
  normalizeEditor,
  withPlate,
} from '@udecode/plate-common'
import {
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createCodePlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_CODE,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
} from '@udecode/plate-basic-marks'
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading'
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from '@udecode/plate-paragraph'
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from '@udecode/plate-block-quote'
import {
  createListPlugin,
  createTodoListPlugin,
  ELEMENT_UL,
  ELEMENT_OL,
  ELEMENT_LI,
  ELEMENT_TODO_LI,
} from '@udecode/plate-list'
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from '@udecode/plate-horizontal-rule'
import { createLinkPlugin, ELEMENT_LINK } from '@udecode/plate-link'
import { createImagePlugin, ELEMENT_IMAGE } from '@udecode/plate-media'
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TR,
  ELEMENT_TD,
  ELEMENT_TH,
} from '@udecode/plate-table'
import { createTogglePlugin, ELEMENT_TOGGLE } from '@udecode/plate-toggle'
import {
  createCodeBlockPlugin,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
} from '@udecode/plate-code-block'
import { createAutoformatPlugin } from '@udecode/plate-autoformat'
import { createBlockSelectionPlugin } from '@udecode/plate-selection'
import { createDndPlugin } from '@udecode/plate-dnd'
import { createExitBreakPlugin } from '@udecode/plate-break'
import { createSoftBreakPlugin } from '@udecode/plate-break'
import { createNodeIdPlugin } from '@udecode/plate-node-id'
import { createResetNodePlugin } from '@udecode/plate-reset-node'
import { createDeletePlugin } from '@udecode/plate-select'
import { createTabbablePlugin } from '@udecode/plate-tabbable'
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block'
import { createComboboxPlugin } from '@udecode/plate-combobox'
import { createMentionPlugin, ELEMENT_MENTION } from '@udecode/plate-mention'
import { createFindReplacePlugin } from '@udecode/plate-find-replace'
import { createHighlightPlugin } from '@udecode/plate-highlight'
import { createKbdPlugin } from '@udecode/plate-kbd'
import { createAlignPlugin } from '@udecode/plate-alignment'
import { createIndentPlugin } from '@udecode/plate-indent'
import { createIndentListPlugin } from '@udecode/plate-indent-list'
import { createLineHeightPlugin } from '@udecode/plate-line-height'
import { createEmojiPlugin } from '@udecode/plate-emoji'
import { createFontPlugin } from '@udecode/plate-font'
import { createTogglePlugin as createToggleButtonPlugin } from '@udecode/plate-toggle'
import { createSelectOnBackspacePlugin } from '@udecode/plate-select'
import { createDeserializeDocxPlugin } from '@udecode/plate-serializer-docx'
import { createDeserializeCsvPlugin } from '@udecode/plate-serializer-csv'
import { createDeserializeMdPlugin } from '@udecode/plate-serializer-md'
import { createJuicePlugin } from '@udecode/plate-juice'
import { cn } from '../../lib/utils'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { autoformatRules } from './autoformat-rules'
import { withProps } from '@udecode/cn'
import { PlateElement as PlateElementPrimitive } from '@udecode/plate-common'
import { PlateLeaf as PlateLeafPrimitive } from '@udecode/plate-common'

// Import custom components
import { TodoListElement } from './elements/todo-list-element'
import { ImageElement } from './elements/image-element'
import { LinkElement } from './elements/link-element'
import { HeadingElement } from './elements/heading-element'
import { BlockquoteElement } from './elements/blockquote-element'
import { CodeBlockElement } from './elements/code-block-element'
import { CodeLineElement } from './elements/code-line-element'
import {
  TableElement,
  TableRowElement,
  TableCellElement,
} from './elements/table-element'
import { HrElement } from './elements/hr-element'
import { MentionElement } from './elements/mention-element'
import { ParagraphElement } from './elements/paragraph-element'
import { ListElement, ListItemElement } from './elements/list-element'
import { ToggleElement } from './elements/toggle-element'

// Import toolbar components
import { EditorToolbar } from './toolbar/editor-toolbar'
import { FloatingToolbar } from './toolbar/floating-toolbar'
import { SlashCommand } from './slash-command'

// Import placeholder
import { withPlaceholders } from './plugins/placeholder'

export interface PlateEditorProps {
  initialValue?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  readOnly?: boolean
  className?: string
  autoFocus?: boolean
  onSave?: () => void
}

const plugins = createPlugins(
  [
    // Paragraph and headings
    createParagraphPlugin(),
    createHeadingPlugin(),

    // Text formatting
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createHighlightPlugin(),
    createKbdPlugin(),

    // Block formatting
    createBlockquotePlugin(),
    createListPlugin(),
    createTodoListPlugin(),
    createTogglePlugin(),

    // Media and embeds
    createImagePlugin(),
    createLinkPlugin(),

    // Advanced blocks
    createCodeBlockPlugin(),
    createTablePlugin(),
    createHorizontalRulePlugin(),

    // Functionality plugins
    createAutoformatPlugin({
      options: {
        rules: autoformatRules,
      },
    }),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
    }),
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createEmojiPlugin(),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            hotkey: 'mod+shift+enter',
            before: true,
          },
          {
            hotkey: 'enter',
            query: {
              start: true,
              end: true,
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createNodeIdPlugin(),
    createResetNodePlugin({
      options: {
        rules: [
          {
            types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
            defaultType: ELEMENT_PARAGRAPH,
            hotkey: 'Enter',
            predicate: isBlockAboveEmpty,
          },
          {
            types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
            defaultType: ELEMENT_PARAGRAPH,
            hotkey: 'Backspace',
            predicate: isSelectionAtBlockStart,
          },
        ],
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),
    createTabbablePlugin(),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createSelectOnBackspacePlugin({
      options: {
        query: {
          allow: [ELEMENT_IMAGE, ELEMENT_HR],
        },
      },
    }),

    // Slash command
    createComboboxPlugin(),
    createMentionPlugin(),

    // Alignment & indentation
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
          ],
        },
      },
    }),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
    }),
    createLineHeightPlugin({
      inject: {
        props: {
          defaultNodeValue: 1.5,
          validNodeValues: [1, 1.2, 1.5, 2, 3],
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
          ],
        },
      },
    }),

    // Deserialization
    createDeserializeDocxPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeMdPlugin(),
    createJuicePlugin(),
  ],
  {
    components: {
      [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
      [ELEMENT_CODE_BLOCK]: CodeBlockElement,
      [ELEMENT_CODE_LINE]: CodeLineElement,
      [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
      [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
      [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
      [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
      [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
      [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
      [ELEMENT_HR]: HrElement,
      [ELEMENT_IMAGE]: ImageElement,
      [ELEMENT_LINK]: LinkElement,
      [ELEMENT_TOGGLE]: ToggleElement,
      [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
      [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
      [ELEMENT_LI]: withProps(ListItemElement, { variant: 'li' }),
      [ELEMENT_MENTION]: MentionElement,
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_TABLE]: TableElement,
      [ELEMENT_TD]: TableCellElement,
      [ELEMENT_TH]: withProps(TableCellElement, { variant: 'th' }),
      [ELEMENT_TODO_LI]: TodoListElement,
      [ELEMENT_TR]: TableRowElement,
      [ELEMENT_TOGGLE]: ToggleElement,
      [MARK_BOLD]: withProps(PlateLeafPrimitive, { as: 'strong' }),
      [MARK_CODE]: withProps(PlateLeafPrimitive, {
        as: 'code',
        className:
          'rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm',
      }),
      [MARK_ITALIC]: withProps(PlateLeafPrimitive, { as: 'em' }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeafPrimitive, { as: 's' }),
      [MARK_SUBSCRIPT]: withProps(PlateLeafPrimitive, { as: 'sub' }),
      [MARK_SUPERSCRIPT]: withProps(PlateLeafPrimitive, { as: 'sup' }),
      [MARK_UNDERLINE]: withProps(PlateLeafPrimitive, { as: 'u' }),
    },
  }
)

// Helper functions
function isBlockAboveEmpty(editor: any) {
  const { selection } = editor
  if (selection) {
    const [entry] = Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
    })
    if (entry) {
      const [node] = entry
      return Editor.isEmpty(editor, node)
    }
  }
  return false
}

function isSelectionAtBlockStart(editor: any) {
  const { selection } = editor
  if (selection && Range.isCollapsed(selection)) {
    const [entry] = Editor.above(editor, {
      match: (n) => Editor.isBlock(editor, n),
    })
    if (entry) {
      const [, path] = entry
      const start = Editor.start(editor, path)
      return Point.equals(selection.anchor, start)
    }
  }
  return false
}

export function PlateEditor({
  initialValue,
  onChange,
  placeholder = 'Start writing...',
  readOnly = false,
  className,
  autoFocus = false,
  onSave,
}: PlateEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const editor = useMemo(
    () =>
      withPlaceholders(
        createPlateEditor({
          plugins,
          override: {
            components: {
              // Override with any custom components
            },
          },
        }),
        placeholder
      ),
    [placeholder]
  )

  // Initialize with value
  React.useEffect(() => {
    if (initialValue && editor.children.length === 1) {
      // Only set if editor is empty
      const isEmpty =
        editor.children[0].type === ELEMENT_PARAGRAPH &&
        !editor.children[0].children[0].text
      if (isEmpty) {
        editor.children = initialValue
        editor.onChange()
      }
    }
  }, [initialValue, editor])

  // Save handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        onSave?.()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onSave])

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        editor={editor}
        onChange={(newValue) => {
          onChange?.(newValue)
        }}
        initialValue={
          initialValue || [
            {
              type: ELEMENT_PARAGRAPH,
              children: [{ text: '' }],
            },
          ]
        }
      >
        <div
          ref={containerRef}
          className={cn(
            'relative w-full rounded-md border border-input',
            className
          )}
        >
          <EditorToolbar />
          <FloatingToolbar />
          <SlashCommand />

          <PlateContent
            className={cn(
              'relative min-h-[500px] w-full rounded-b-md bg-background px-6 py-4',
              'focus:outline-none',
              'selection:bg-primary/20',
              '[&_[data-slate-placeholder]]:text-muted-foreground',
              '[&_[data-slate-placeholder]]:!opacity-100',
              '[&_strong]:font-semibold',
              readOnly && 'cursor-text select-text'
            )}
            readOnly={readOnly}
            autoFocus={autoFocus}
            spellCheck
            aria-label='Editor content'
            aria-multiline='true'
            role='textbox'
          />
        </div>
      </Plate>
    </DndProvider>
  )
}
