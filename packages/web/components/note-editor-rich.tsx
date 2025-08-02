'use client'

import { useEffect, useState } from 'react'
import { useNote } from '@/hooks/use-note'
import { RichTextEditor } from '@/components/rich-text-editor'
import { Spinner } from '@/components/ui/spinner'
import { markdownToSlate } from '@/lib/slate/markdown-to-slate'
import { slateToMarkdown } from '@/lib/slate/slate-to-markdown'
import type { Descendant } from 'slate'

interface NoteEditorRichProps {
  noteId: string
}

export function NoteEditorRich({ noteId }: NoteEditorRichProps) {
  const { note, loading, updateNote } = useNote(noteId)
  const [isInitialized, setIsInitialized] = useState(false)

  const handleTitleChange = (newTitle: string) => {
    updateNote({ title: newTitle })
  }

  const handleContentChange = (newContent: Descendant[]) => {
    // Convert Slate content to markdown for storage
    const markdown = slateToMarkdown(newContent)
    updateNote({ content: markdown })
  }

  if (loading) {
    return (
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <Spinner size='3' />
          <p className='text-muted-foreground mt-2'>Loading note...</p>
        </div>
      </div>
    )
  }

  if (!note) {
    return (
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <h3 className='text-lg font-semibold mb-2'>Note not found</h3>
          <p className='text-muted-foreground'>
            The note you're looking for doesn't exist or has been deleted.
          </p>
        </div>
      </div>
    )
  }

  // Convert markdown content to Slate format
  let initialContent: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]

  if (note.content && typeof note.content === 'string') {
    try {
      initialContent = markdownToSlate(note.content)
    } catch (error) {
      console.error('Failed to parse note content:', error)
    }
  }

  return (
    <div className='flex-1 flex flex-col' data-testid='note-editor-container'>
      <RichTextEditor
        noteId={noteId}
        initialTitle={note.title}
        initialContent={initialContent}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
      />
    </div>
  )
}
