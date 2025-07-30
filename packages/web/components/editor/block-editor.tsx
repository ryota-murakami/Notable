'use client'

import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Plate, PlateContent, usePlateEditor } from 'platejs/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { createPlatePlugin } from 'platejs/react'

import { BasicBlocksKit } from './plugins/basic-blocks-kit'
import { BasicMarksKit } from './plugins/basic-marks-kit'
import { AdvancedBlocksKit } from './plugins/advanced-blocks-kit'
import { SlashCommandPlugin } from './plugins/slash-command-kit'
import { SlashCommandMenu, useSlashCommand } from './slash-command-menu'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { cn } from '@/lib/utils'

interface BlockEditorProps {
  initialValue?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  className?: string
  readOnly?: boolean
  autoFocus?: boolean
}

const defaultValue = [
  {
    type: 'p',
    children: [{ text: '' }],
  },
]

// Block Selection Plugin for drag handles and hover states
const BlockSelectionPlugin = createPlatePlugin({
  key: 'block_selection',
  handlers: {
    onClick: () => (event: MouseEvent) => {
      // Handle block selection logic
      const element = event.target as HTMLElement
      const blockElement = element.closest('[data-slate-node="element"]')
      if (blockElement) {
        // Add selection styling
        blockElement.classList.add('block-selected')
      }
      return false
    },
  },
})

// Block Drag and Drop Plugin
const BlockDragDropPlugin = createPlatePlugin({
  key: 'block_dnd',
  // This would integrate with react-dnd for drag and drop functionality
})

// Create complete plugin configuration
const createBlockEditorPlugins = () => [
  ...BasicBlocksKit,
  ...BasicMarksKit,
  ...AdvancedBlocksKit,
  SlashCommandPlugin,
  BlockSelectionPlugin,
  BlockDragDropPlugin,
]

export function BlockEditor({
  initialValue = defaultValue,
  onChange,
  placeholder = 'Press / for commands...',
  className,
  readOnly = false,
  autoFocus = false,
}: BlockEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(initialValue)

  // Create the Plate editor with all plugins
  const editor = usePlateEditor({
    plugins: createBlockEditorPlugins(),
    value,
  })

  // Slash command management
  const { isOpen, position, openMenu, closeMenu, handleCommandSelect } =
    useSlashCommand(editor)

  // Handle slash command trigger
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === '/' && !isOpen) {
        // Get cursor position for menu placement
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const rect = range.getBoundingClientRect()

          // Open menu at cursor position
          setTimeout(() => {
            openMenu({
              x: rect.left,
              y: rect.bottom + 8,
            })
          }, 0)
        }
      }
    },
    [isOpen, openMenu]
  )

  // Block hover effects
  const handleMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      const target = event.target as HTMLElement
      const blockElement = target.closest(
        '[data-slate-node="element"]'
      ) as HTMLElement

      if (blockElement && !readOnly) {
        blockElement.classList.add('block-hover')

        // Show drag handle (implement this UI element)
        const dragHandle = blockElement.querySelector('.block-drag-handle')
        if (dragHandle) {
          ;(dragHandle as HTMLElement).style.opacity = '1'
        }
      }
    },
    [readOnly]
  )

  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const blockElement = target.closest(
      '[data-slate-node="element"]'
    ) as HTMLElement

    if (blockElement) {
      blockElement.classList.remove('block-hover')

      // Hide drag handle
      const dragHandle = blockElement.querySelector('.block-drag-handle')
      if (dragHandle) {
        ;(dragHandle as HTMLElement).style.opacity = '0'
      }
    }
  }, [])

  // Keyboard shortcuts for block operations
  const handleKeyDownGlobal = useCallback(
    (event: React.KeyboardEvent) => {
      if (readOnly) return

      // Cmd/Ctrl + Enter: Insert new block below
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault()
        // @ts-ignore - editor types need proper PlateEditor type
        editor.insertNodes({
          type: 'p',
          children: [{ text: '' }],
        })
      }

      // Cmd/Ctrl + Shift + Enter: Insert new block above
      if (
        (event.metaKey || event.ctrlKey) &&
        event.shiftKey &&
        event.key === 'Enter'
      ) {
        event.preventDefault()
        // Insert block above current selection
        // @ts-ignore - editor types need proper PlateEditor type
        editor.insertNodes({
          type: 'p',
          children: [{ text: '' }],
        })
      }

      // Cmd/Ctrl + D: Duplicate current block
      if ((event.metaKey || event.ctrlKey) && event.key === 'd') {
        event.preventDefault()
        // Duplicate current block logic
      }

      // Cmd/Ctrl + Shift + D: Delete current block
      if (
        (event.metaKey || event.ctrlKey) &&
        event.shiftKey &&
        event.key === 'd'
      ) {
        event.preventDefault()
        // Delete current block logic
      }
    },
    [editor, readOnly]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cn('block-editor-container', className)} ref={editorRef}>
        <Plate
          editor={editor}
          onChange={(newValue) => {
            setValue(newValue)
            onChange?.(newValue)
          }}
        >
          <EditorContainer
            className='block-editor-content'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Editor
              placeholder={placeholder}
              readOnly={readOnly}
              autoFocus={autoFocus}
              className={cn(
                'block-editor-inner',
                'prose prose-neutral dark:prose-invert max-w-none',
                '[&_.slate-selected]:bg-blue-100 dark:[&_.slate-selected]:bg-blue-900/30',
                '[&_.block-hover]:bg-gray-50 dark:[&_.block-hover]:bg-gray-900/30',
                '[&_.block-selected]:ring-2 [&_.block-selected]:ring-blue-500'
              )}
              onKeyDown={(event) => {
                handleKeyDown(event)
                handleKeyDownGlobal(event)
              }}
            />
          </EditorContainer>
        </Plate>

        {/* Slash Command Menu */}
        <SlashCommandMenu
          isOpen={isOpen}
          onClose={closeMenu}
          onSelect={handleCommandSelect}
          position={position}
        />
      </div>

      <style jsx global>{`
        .block-editor-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .block-editor-content {
          width: 100%;
          height: 100%;
        }

        .block-editor-inner {
          width: 100%;
          min-height: 100%;
          padding: 1rem;
          outline: none;
        }

        /* Block styling */
        .block-editor-inner [data-slate-node='element'] {
          position: relative;
          margin: 0.125rem 0;
          border-radius: 0.25rem;
          transition: all 0.2s ease;
        }

        /* Block hover and selection states */
        .block-hover {
          background-color: rgba(0, 0, 0, 0.02);
        }

        .dark .block-hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .block-selected {
          background-color: rgba(59, 130, 246, 0.1);
          ring: 2px solid rgb(59, 130, 246);
        }

        /* Drag handle styling */
        .block-drag-handle {
          position: absolute;
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s ease;
          cursor: grab;
          width: 1rem;
          height: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .block-drag-handle:hover {
          color: #374151;
        }

        .block-drag-handle:active {
          cursor: grabbing;
        }

        /* Typography for different block types */
        .block-editor-inner h1 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 1rem 0 0.5rem 0;
        }

        .block-editor-inner h2 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 0.875rem 0 0.5rem 0;
        }

        .block-editor-inner h3 {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0.75rem 0 0.5rem 0;
        }

        .block-editor-inner blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 0.5rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .block-editor-inner pre {
          background-color: #f3f4f6;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
        }

        .dark .block-editor-inner pre {
          background-color: #1f2937;
        }

        .block-editor-inner ul,
        .block-editor-inner ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }

        .block-editor-inner li {
          margin: 0.25rem 0;
        }

        /* Custom block components will need additional styling */
        .toggle-block {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.75rem;
          margin: 0.5rem 0;
        }

        .callout-block {
          background-color: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 0.5rem 0;
        }

        .todo-block {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin: 0.25rem 0;
        }

        .todo-checkbox {
          margin-top: 0.125rem;
          cursor: pointer;
        }
      `}</style>
    </DndProvider>
  )
}
