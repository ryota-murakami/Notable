'use client'

import { useEffect, useState } from 'react'
import { useNote } from '@/hooks/use-note'
import { Spinner } from '@/components/ui/spinner'
import { RichTextEditor } from '@/components/rich-text-editor'
import type { Value } from 'platejs'

interface NoteEditorProps {
  noteId: string
}

export function NoteEditor({ noteId }: NoteEditorProps) {
  const { note, loading, updateNote } = useNote(noteId)

  const handleTitleChange = (newTitle: string) => {
    updateNote({ title: newTitle })
  }

  const handleContentChange = (newContent: Value) => {
    // Convert Plate.js Value to JSON string for storage
    const contentString = JSON.stringify(newContent)
    updateNote({ content: contentString })
  }

  // Parse content from JSON string to Plate.js Value
  const parseContent = (content: string): Value => {
    try {
      return JSON.parse(content)
    } catch {
      // Fallback to plain text paragraph if parsing fails
      return [
        {
          type: 'p',
          children: [{ text: content }],
        },
      ]
    }
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

  return (
    <div className='flex-1 flex flex-col p-6'>
      <RichTextEditor
        noteId={noteId}
        initialTitle={note.title}
        initialContent={parseContent(note.content)}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
      />
    </div>
  )
}
