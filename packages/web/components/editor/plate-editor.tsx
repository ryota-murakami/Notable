'use client'

import React, { useMemo } from 'react'
import { Plate, usePlateEditor } from 'platejs/react'
import { PlateElement } from 'platejs/react'

// Import base editor configuration
import { BaseEditorKit } from './editor-stubs'

// Import toolbar components
import { FixedToolbarButtons } from '@/components/ui/fixed-toolbar-buttons'
import { FixedToolbar } from '@/components/ui/fixed-toolbar'

// Simple className utility function
const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface PlateEditorProps {
  value?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  className?: string
  showToolbar?: boolean
}

export function PlateEditor({
  value = [{ type: 'p', children: [{ text: '' }] }],
  onChange,
  placeholder = 'Start writing...',
  className,
  showToolbar = true,
}: PlateEditorProps) {
  const editor = usePlateEditor({
    plugins: BaseEditorKit,
    value,
    override: {
      components: {
        // Use generic PlateElement for all types to prevent missing component errors
        p: PlateElement,
        h1: PlateElement,
        h2: PlateElement,
        h3: PlateElement,
        h4: PlateElement,
        h5: PlateElement,
        h6: PlateElement,
        blockquote: PlateElement,
        ul: PlateElement,
        ol: PlateElement,
        li: PlateElement,
        // Add other common elements as needed
      },
    },
  })

  return (
    <div className={cn('relative w-full', className)}>
      <Plate
        editor={editor}
        onChange={({ value }) => {
          onChange?.(value)
        }}
      >
        {showToolbar && (
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
        )}

        <div
          className={cn(
            'relative overflow-x-auto',
            'min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
            'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
            'prose prose-sm max-w-none dark:prose-invert',
            '[&_.slate-editor]:min-h-[400px] [&_.slate-editor]:outline-none',
            '[&_.slate-editor]:px-0 [&_.slate-editor]:py-2'
          )}
        >
          <div
            contentEditable
            suppressContentEditableWarning
            className='outline-none'
          />
        </div>
      </Plate>
    </div>
  )
}
