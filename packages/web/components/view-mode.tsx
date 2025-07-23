'use client'

import React from 'react'
import type { Note } from '@/types/note'

interface ViewModeProps {
  note: Note
  onToggleViewMode: () => void
  onExport: (format: string) => Promise<void>
}

export function ViewMode({ note, onToggleViewMode, onExport }: ViewModeProps) {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>{note.title || 'Untitled'}</h1>
        <div className='flex gap-2'>
          <button
            onClick={onToggleViewMode}
            className='px-3 py-1 text-sm border rounded'
          >
            Edit
          </button>
          <button
            onClick={() => onExport('markdown')}
            className='px-3 py-1 text-sm border rounded'
          >
            Export
          </button>
        </div>
      </div>
      <div className='prose max-w-none'>
        {typeof note.content === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: note.content }} />
        ) : (
          <pre>{JSON.stringify(note.content, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}
