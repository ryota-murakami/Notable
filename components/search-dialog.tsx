"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Note } from "@/types/note"
import { NoteCard } from "@/components/note-card"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
  notes: Note[]
  onSelectNote: (id: string) => void
}

export function SearchDialog({ isOpen, onClose, notes, onSelectNote }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredNotes([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query) ||
        note.tags.some((tag) => tag.toLowerCase().includes(query)),
    )

    setFilteredNotes(results)
  }, [searchQuery, notes])

  const handleSelectNote = (id: string) => {
    onSelectNote(id)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Notes</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col flex-1 overflow-hidden">
          <Input
            placeholder="Search by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
            autoFocus
          />
          <ScrollArea className="flex-1">
            <div className="grid gap-4">
              {filteredNotes.length > 0
                ? filteredNotes.map((note) => (
                    <NoteCard key={note.id} note={note} onClick={() => handleSelectNote(note.id)} />
                  ))
                : searchQuery.trim() !== "" && (
                    <div className="text-center py-4 text-muted-foreground">
                      No notes found matching "{searchQuery}"
                    </div>
                  )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
