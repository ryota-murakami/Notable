'use client'

import { useEffect, useState } from 'react'
import { useNote } from '@/hooks/use-note'
import { Spinner } from '@/components/ui/spinner'

interface NoteEditorProps {
  noteId: string
}

export function NoteEditor({ noteId }: NoteEditorProps) {
  const { note, loading, updateNote } = useNote(noteId)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note])

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle)
    updateNote({ title: newTitle })
  }

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    updateNote({ content: newContent })
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
      <div className='max-w-4xl mx-auto w-full flex-1'>
        <input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder='Untitled'
          className='w-full text-3xl font-bold border-none outline-none bg-transparent mb-6 placeholder:text-muted-foreground'
        />
        <textarea
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
          placeholder='Start writing...'
          className='w-full min-h-96 border-none outline-none bg-transparent resize-none placeholder:text-muted-foreground text-base leading-relaxed'
        />
      </div>
    </div>
  )
}
