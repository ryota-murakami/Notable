'use client'

import React, { useState } from 'react'

interface SimpleTestEditorProps {
  note: any
  onUpdateNote: (note: any) => void
  onDeleteNote: (noteId: string) => void
  onExportNote: (note: any, format: string) => void
  onStartTyping?: () => void
  onStopTyping?: () => void
}

export function SimpleTestEditor({
  note,
  onUpdateNote,
  onDeleteNote: _onDeleteNote,
  onExportNote: _onExportNote,
  onStartTyping,
  onStopTyping,
}: SimpleTestEditorProps) {
  const [content, setContent] = useState(note.content || '')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)

    // Notify parent of changes
    if (onUpdateNote) {
      onUpdateNote({
        ...note,
        content: newContent,
        updatedAt: new Date().toISOString(),
      })
    }

    // Call typing indicators if provided
    if (onStartTyping) {
      onStartTyping()
      setTimeout(() => {
        if (onStopTyping) onStopTyping()
      }, 1000)
    }
  }

  return (
    <div className='h-full flex flex-col p-4'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>{note.title || 'Untitled'}</h1>
      </div>
      <div className='flex-1'>
        <textarea
          value={content}
          onChange={handleChange}
          placeholder='Start writing your note...'
          className='w-full h-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
    </div>
  )
}
