'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { EyeOff, Plus } from 'lucide-react'
import type { Note } from '@/types/note'

// Dynamic import for PlateEditor to prevent SSR issues
const PlateEditor = dynamic(
  () => import('@/components/plate-editor').then((mod) => mod.PlateEditor),
  {
    ssr: false,
    loading: () => <div className='p-4'>Loading editor...</div>,
  }
)

export default function TestHiddenNotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Regular Note 1',
      content: JSON.stringify([
        {
          type: 'p',
          children: [{ text: 'This is a regular note that is visible.' }],
        },
      ]),
      userId: 'test-user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isHidden: false,
    },
    {
      id: '2',
      title: 'Hidden Note 1',
      content: JSON.stringify([
        {
          type: 'p',
          children: [
            {
              text: 'This is a hidden note that should not appear by default.',
            },
          ],
        },
      ]),
      userId: 'test-user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isHidden: true,
    },
    {
      id: '3',
      title: 'Regular Note 2',
      content: JSON.stringify([
        { type: 'p', children: [{ text: 'Another regular visible note.' }] },
      ]),
      userId: 'test-user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isHidden: false,
    },
  ])

  const [selectedNoteId, setSelectedNoteId] = useState<string>('1')
  const [showHiddenNotes, setShowHiddenNotes] = useState(false)

  const visibleNotes = showHiddenNotes
    ? notes
    : notes.filter((note) => !note.isHidden)
  const selectedNote = notes.find((note) => note.id === selectedNoteId)

  const handleUpdateNote = (updatedNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    )
  }

  const handleDeleteNote = (noteId: string) => {
    const remainingNotes = notes.filter((n) => n.id !== noteId)
    setNotes(remainingNotes)
    if (selectedNoteId === noteId && remainingNotes.length > 0) {
      setSelectedNoteId(remainingNotes[0].id)
    }
  }

  const handleExportNote = (note: Note, format: string) => {
    console.log('Export note:', note.title, 'as', format)
  }

  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: JSON.stringify([{ type: 'p', children: [{ text: '' }] }]),
      userId: 'test-user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isHidden: false,
    }
    setNotes([...notes, newNote])
    setSelectedNoteId(newNote.id)
  }

  return (
    <div className='flex h-screen bg-background'>
      {/* Sidebar */}
      <div className='w-64 border-r p-4'>
        <div className='mb-4 space-y-2'>
          <Button onClick={handleCreateNote} className='w-full justify-start'>
            <Plus className='h-4 w-4 mr-2' />
            Create Note
          </Button>

          <Button
            variant={showHiddenNotes ? 'secondary' : 'ghost'}
            onClick={() => setShowHiddenNotes(!showHiddenNotes)}
            className='w-full justify-start'
          >
            <EyeOff className='h-4 w-4 mr-2' />
            Hidden Notes ({notes.filter((n) => n.isHidden).length})
          </Button>
        </div>

        <div className='space-y-2'>
          <h3 className='text-sm font-semibold text-muted-foreground'>
            {showHiddenNotes ? 'All Notes' : 'Visible Notes'}
          </h3>
          {visibleNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => setSelectedNoteId(note.id)}
              className={`w-full text-left p-2 rounded hover:bg-accent transition-colors ${
                selectedNoteId === note.id ? 'bg-accent' : ''
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='truncate'>{note.title}</span>
                {note.isHidden && (
                  <EyeOff className='h-3 w-3 text-muted-foreground' />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className='flex-1'>
        {selectedNote ? (
          <PlateEditor
            note={selectedNote}
            onUpdateNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
            onExportNote={handleExportNote}
          />
        ) : (
          <div className='flex items-center justify-center h-full text-muted-foreground'>
            Select a note to edit
          </div>
        )}
      </div>
    </div>
  )
}
