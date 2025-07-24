'use client'

import * as React from 'react'

import { useAIChatEditor } from '@platejs/ai/react'
import { Plate, usePlateEditor } from 'platejs/react'

import { BaseEditorKit } from '@/components/editor/editor-stubs'
import { Editor } from '@/components/ui/editor'

export const AIChatEditor = React.memo(function AIChatEditor({
  content,
}: {
  content: string
}) {
  const aiEditor = usePlateEditor({
    plugins: BaseEditorKit,
  })

  useAIChatEditor(aiEditor, content)

  return (
    <Plate editor={aiEditor}>
      <Editor variant='minimal' />
    </Plate>
  )
})
