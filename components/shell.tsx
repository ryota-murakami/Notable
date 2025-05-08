"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Editor } from "@/components/editor"
import type { Note } from "@/types/note"
import { defaultNotes } from "@/lib/default-notes"
import { loadNotes, saveNotes } from "@/lib/electron-store"
import { SearchDialog } from "@/components/search-dialog"
import { useToast } from "@/hooks/use-toast"
import { WelcomeScreen } from "@/components/welcome-screen"

export function Shell() {
  const [notes, setNotes] = useState<Note[]>(defaultNotes)
  const [activeNoteId, setActiveNoteId] = useState<string>(notes[0]?.id || "")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { toast } = useToast()

  const activeNote = notes.find((note) => note.id === activeNoteId) || notes[0]

  // Load notes from Electron store on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      const loadedNotes = await loadNotes()
      setNotes(loadedNotes)
      setActiveNoteId(loadedNotes[0]?.id || "")
    }

    fetchNotes()
  }, [])

  // Save notes to Electron store whenever notes change
  useEffect(() => {
    const persistNotes = async () => {
      const success = await saveNotes(notes)
      if (!success) {
        console.error("Failed to save notes")
      }
    }

    if (notes.length > 0) {
      persistNotes()
    }
  }, [notes])

  // Add keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleNoteChange = (updatedNote: Note) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)))
  }

  const handleCreateNote = (parentId: string | null = null) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "Untitled",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      parentId,
      tags: [],
    }

    setNotes([...notes, newNote])
    setActiveNoteId(newNote.id)

    toast({
      title: "Note created",
      description: "Your new note has been created successfully.",
    })

    return newNote
  }

  const handleDeleteNote = (id: string) => {
    // Also delete all children
    const idsToDelete = [id]
    const findChildren = (parentId: string) => {
      notes.forEach((note) => {
        if (note.parentId === parentId) {
          idsToDelete.push(note.id)
          findChildren(note.id)
        }
      })
    }

    findChildren(id)

    const filteredNotes = notes.filter((note) => !idsToDelete.includes(note.id))
    setNotes(filteredNotes)

    if (activeNoteId === id) {
      setActiveNoteId(filteredNotes[0]?.id || "")
    }

    toast({
      title: "Note deleted",
      description: "Your note has been deleted successfully.",
      variant: "destructive",
    })
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        notes={notes}
        activeNoteId={activeNoteId}
        onSelectNote={setActiveNoteId}
        onCreateNote={handleCreateNote}
        onDeleteNote={handleDeleteNote}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      {notes.length === 0 ? (
        <WelcomeScreen onCreateNote={() => handleCreateNote(null)} />
      ) : activeNote ? (
        <Editor note={activeNote} onChange={handleNoteChange} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          Select a note or create a new one
        </div>
      )}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        notes={notes}
        onSelectNote={setActiveNoteId}
      />
    </div>
  )
}
