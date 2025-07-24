'use client'

import React, { useMemo } from 'react'
import { Plate, usePlateEditor } from 'platejs/react'
import { PlateElement } from 'platejs/react'

// Import base editor configuration
import { BaseEditorKit } from './editor-stubs'

// Import toolbar components
import { FixedToolbarButtons } from '@/components/ui/fixed-toolbar-buttons'
import { FixedToolbar } from '@/components/ui/fixed-toolbar'
import { FloatingToolbar } from '@/components/ui/floating-toolbar'
import { FloatingToolbarButtons } from '@/components/ui/floating-toolbar-buttons'

// Import proper component mappings
import { Editor } from '@/components/ui/editor'
import { ParagraphElement } from '@/components/ui/paragraph-node'
import { HeadingElement } from '@/components/ui/heading-node'
import { BlockquoteElement } from '@/components/ui/blockquote-node'
import { CodeBlockElement } from '@/components/ui/code-block-node'
import { HrElement } from '@/components/ui/hr-node'
import { LinkElement } from '@/components/ui/link-node'
import { BlockList } from '@/components/ui/block-list'

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
        // Use proper Plate UI components - disable for now to avoid type issues
        // p: ParagraphElement,
        // h1: HeadingElement,
        // h2: HeadingElement,
        // h3: HeadingElement,
        // h4: HeadingElement,
        // h5: HeadingElement,
        // h6: HeadingElement,
        // blockquote: BlockquoteElement,
        // hr: HrElement,
        // a: LinkElement,
        // ul: BlockList,
        // ol: BlockList,
        // li: PlateElement,
        // code_block: CodeBlockElement,
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

        <Editor
          className={cn(
            'relative overflow-x-auto',
            'min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
            'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
            'prose prose-sm max-w-none dark:prose-invert',
            '[&_.slate-editor]:min-h-[400px] [&_.slate-editor]:outline-none',
            '[&_.slate-editor]:px-0 [&_.slate-editor]:py-2'
          )}
        />

        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </div>
  )
}
