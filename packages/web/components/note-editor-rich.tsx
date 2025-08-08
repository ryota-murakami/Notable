'use client'

import React, { useState } from 'react'
import { useNote } from '@/hooks/use-note'
import { RichTextEditorClient } from '@/components/rich-text-editor-client'

import { Spinner } from '@/components/ui/spinner'
import { markdownToPlate } from '@/lib/plate/markdown-to-plate'
import { plateToMarkdown } from '@/lib/plate/plate-to-markdown'
import { updateNoteLinks } from '@/lib/note-links'
import type { Value } from 'platejs'

interface NoteEditorRichProps {
  noteId: string
}

const NoteEditorRich = React.memo(({ noteId }: NoteEditorRichProps) => {
  const { note, loading, updateNote } = useNote(noteId)
  const [_isInitialized, _setIsInitialized] = useState(false)

  const handleTitleChange = (newTitle: string) => {
    updateNote({ title: newTitle })
  }

  const handleContentChange = async (newContent: Value | string) => {
    // Convert Plate content to markdown for storage
    const markdown =
      typeof newContent === 'string' ? newContent : plateToMarkdown(newContent)
    updateNote({ content: markdown })

    // Update note links based on wiki links in content
    await updateNoteLinks(noteId, markdown)
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
            The note you&apos;re looking for doesn&apos;t exist or has been
            deleted.
          </p>
        </div>
      </div>
    )
  }

  // Convert markdown content to Plate format
  let initialContent: Value = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]

  if (note.content && typeof note.content === 'string') {
    try {
      initialContent = markdownToPlate(note.content)
    } catch (error) {
      console.error('Failed to parse note content:', error)
    }
  }

  return (
    <div className='flex-1 flex flex-col' data-testid='note-editor-container'>
      <RichTextEditorClient
        noteId={noteId}
        initialTitle={note.title}
        initialContent={initialContent}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
      />
    </div>
  )
})

NoteEditorRich.displayName = 'NoteEditorRich'

export { NoteEditorRich }
