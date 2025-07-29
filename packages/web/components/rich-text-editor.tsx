'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { BasicEditor } from '@/components/editor/basic-editor'
import type { Descendant } from 'slate'

interface RichTextEditorProps {
  noteId: string
  initialTitle?: string
  initialContent?: Descendant[]
  onTitleChange?: (title: string) => void
  onContentChange?: (content: Descendant[]) => void
  className?: string
}

const defaultContent: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

export function RichTextEditor({
  noteId,
  initialTitle = '',
  initialContent = defaultContent,
  onTitleChange,
  onContentChange,
  className,
}: RichTextEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState<Descendant[]>(initialContent)

  // Update local state when props change
  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  // Handle title changes
  const handleTitleChange = useCallback(
    (newTitle: string) => {
      setTitle(newTitle)
      onTitleChange?.(newTitle)
    },
    [onTitleChange]
  )

  // Handle content changes
  const handleContentChange = useCallback(
    (newContent: Descendant[]) => {
      setContent(newContent)
      onContentChange?.(newContent)
    },
    [onContentChange]
  )

  return (
    <div className={`flex flex-col h-full ${className || ''}`}>
      {/* Title Editor */}
      <div className='border-b bg-background px-6 py-4'>
        <Input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder='Untitled Note'
          className='text-2xl font-bold border-none shadow-none focus-visible:ring-0 px-0 h-auto'
          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        />
      </div>

      {/* Content Editor */}
      <div className='flex-1 overflow-auto'>
        <BasicEditor
          key={noteId} // Force re-render when note changes
          initialValue={content}
          onChange={handleContentChange}
          placeholder='Start writing your note...'
          autoFocus
          className='border-0 h-full'
        />
      </div>
    </div>
  )
}
