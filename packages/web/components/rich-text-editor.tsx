'use client'

import { useEffect, useState } from 'react'
import { Plate, usePlateEditor } from 'platejs/react'
import type { Value } from 'platejs'
import { useAutoSave } from '@/hooks/use-auto-save'

import { EnhancedEditorKit } from '@/components/editor/plugins/enhanced-editor-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { MarkToolbarButton } from '@/components/ui/mark-toolbar-button'
import { Button } from '@/components/ui/button'

interface RichTextEditorProps {
  noteId: string
  initialTitle?: string
  initialContent?: Value
  onTitleChange?: (title: string) => void
  onContentChange?: (content: Value) => void
  className?: string
  readOnly?: boolean
}

const initialValue: Value = [
  {
    type: 'p',
    children: [{ text: '' }],
  },
]

export function RichTextEditor({
  noteId,
  initialTitle = '',
  initialContent = initialValue,
  onTitleChange,
  onContentChange,
  className,
  readOnly = false,
}: RichTextEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState<Value>(initialContent)

  const editor = usePlateEditor({
    plugins: EnhancedEditorKit,
    value: content,
  })

  // Auto-save functionality
  useAutoSave(noteId, {
    title,
    content: JSON.stringify(content),
  })

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle)
  }

  const handleContentChange = (newContent: Value) => {
    setContent(newContent)
  }

  return (
    <div className={`flex-1 flex flex-col ${className}`}>
      <div className='max-w-4xl mx-auto w-full flex-1'>
        {/* Title Input */}
        <input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder='Untitled'
          readOnly={readOnly}
          className='w-full text-3xl font-bold border-none outline-none bg-transparent mb-6 placeholder:text-muted-foreground'
        />

        {/* Rich Text Editor */}
        <Plate
          editor={editor}
          onChange={({ value }) => handleContentChange(value)}
        >
          {!readOnly && (
            <div className='flex justify-start gap-1 rounded-t-lg border-b p-2 bg-background'>
              {/* Text Formatting */}
              <MarkToolbarButton nodeType='bold' tooltip='Bold (⌘+B)'>
                <strong>B</strong>
              </MarkToolbarButton>
              <MarkToolbarButton nodeType='italic' tooltip='Italic (⌘+I)'>
                <em>I</em>
              </MarkToolbarButton>
              <MarkToolbarButton nodeType='underline' tooltip='Underline (⌘+U)'>
                <u>U</u>
              </MarkToolbarButton>
              <MarkToolbarButton
                nodeType='strikethrough'
                tooltip='Strikethrough (⌘+Shift+X)'
              >
                <s>S</s>
              </MarkToolbarButton>
              <MarkToolbarButton nodeType='code' tooltip='Code (⌘+E)'>
                {'</>'}
              </MarkToolbarButton>

              <div className='w-px h-6 bg-border mx-1' />

              {/* Block Elements */}
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.h1.toggle()}
                title='Heading 1 (⌘+Alt+1)'
                className='h-8 px-2'
              >
                H1
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.h2.toggle()}
                title='Heading 2 (⌘+Alt+2)'
                className='h-8 px-2'
              >
                H2
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.h3.toggle()}
                title='Heading 3 (⌘+Alt+3)'
                className='h-8 px-2'
              >
                H3
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.blockquote.toggle()}
                title='Quote (⌘+Shift+.)'
                className='h-8 px-2'
              >
                Quote
              </Button>

              <div className='w-px h-6 bg-border mx-1' />

              {/* Lists */}
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.bulletedList.toggle()}
                title='Bullet List (⌘+Shift+8)'
                className='h-8 px-2'
              >
                •List
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.numberedList.toggle()}
                title='Numbered List (⌘+Shift+7)'
                className='h-8 px-2'
              >
                1.List
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => editor.tf.todoList.toggle()}
                title='Todo List (⌘+Shift+9)'
                className='h-8 px-2'
              >
                ☐Todo
              </Button>
            </div>
          )}

          <EditorContainer>
            <Editor
              placeholder='Start writing your note...'
              readOnly={readOnly}
              className='min-h-96'
            />
          </EditorContainer>
        </Plate>
      </div>
    </div>
  )
}
