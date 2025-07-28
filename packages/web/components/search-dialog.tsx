'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/design-system/components/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Note } from '../types/note'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  notes: Note[]
  onSelectNote: (note: Note) => void
}

export function SearchDialog({
  open,
  onOpenChange,
  notes,
  onSelectNote,
}: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectNote = (note: Note) => {
    onSelectNote(note)
    onOpenChange(false)
    setSearchQuery('')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Search Notes</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4"
          autoFocus
        />
        <ScrollArea className="h-[400px]">
          <div className="space-y-2">
            {filteredNotes.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No notes found
              </p>
            ) : (
              filteredNotes.map((note) => (
                <button
                  key={note.id}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => handleSelectNote(note)}
                >
                  <h3 className="font-medium">{note.title || 'Untitled'}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {note.content || 'No content'}
                  </p>
                </button>
              ))
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}