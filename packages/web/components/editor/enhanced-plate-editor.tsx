'use client'

import React from 'react'
import { type Value } from 'platejs'
import { Plate, usePlateEditor } from 'platejs/react'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { BasicNodesKit } from './plugins/basic-nodes-kit'
import { FloatingToolbar } from './floating-toolbar'
import { cn } from '@/lib/utils'

interface EnhancedPlateEditorProps {
  value?: Value
  onChange?: (value: Value) => void
  placeholder?: string
  className?: string
  readOnly?: boolean
  autoFocus?: boolean
}

export function EnhancedPlateEditor({
  value,
  onChange,
  placeholder = 'Start typing...',
  className,
  readOnly = false,
  autoFocus = false,
}: EnhancedPlateEditorProps) {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value,
  })

  // Handle value changes
  React.useEffect(() => {
    if (onChange && editor.children !== value) {
      onChange(editor.children)
    }
  }, [editor.children, onChange, value])

  return (
    <Plate editor={editor}>
      <EditorContainer className={cn('relative', className)}>
        <FloatingToolbar />
        <Editor
          placeholder={placeholder}
          readOnly={readOnly}
          autoFocus={autoFocus}
          className='min-h-[200px] px-6 py-4'
          data-testid='plate-editor'
          variant='default'
        />
      </EditorContainer>
    </Plate>
  )
}
