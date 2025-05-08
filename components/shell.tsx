"use client"

import { useState, useEffect, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { Editor } from "@/components/editor"
import { SearchDialog } from "@/components/search-dialog"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LoginView } from "@/components/auth/login-view"
import { useAuth } from "@/components/auth/auth-context"
import { useNoteService } from "@/lib/services/note-service"
import { useToast } from "@/hooks/use-toast"
import type { Note } from "@/types/note"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNoteId, setActiveNoteId] = useState<string>("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user, status } = useAuth()
  const noteService = useNoteService()
  const { toast } = useToast()

  const activeNote = notes.find((note) => note.id === activeNoteId)

  // Load notes from Supabase when user is authenticated
  useEffect(() => {
    const loadNotes = async () => {
      if (status === "loading") return

      if (!user) {
        setNotes([])
        setActiveNoteId("")
        setIsLoading(false)
        setError(null)
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const fetchedNotes = await noteService.fetchNotes()
        setNotes(fetchedNotes)

        if (fetchedNotes.length > 0 && !activeNoteId) {
          setActiveNoteId(fetchedNotes[0].id)
        }
      } catch (err: any) {
        console.error("Failed to load notes:", err)
        setError("There was a problem loading your notes. Please try again.")
        toast({
          title: "Error loading notes",
          description: "There was a problem loading your notes. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadNotes()
  }, [user, status, noteService, toast, activeNoteId])

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

  const handleNoteChange = useCallback(
    async (updatedNote: Note) => {
      // Optimistically update UI
      setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)))

      // Update in database
      const result = await noteService.updateNote(updatedNote)

      if (!result) {
        // Revert to previous state if update failed
        const originalNote = notes.find((note) => note.id === updatedNote.id)
        if (originalNote) {
          setNotes(notes.map((note) => (note.id === updatedNote.id ? originalNote : note)))
        }
      }
    },
    [notes, noteService],
  )

  const handleCreateNote = useCallback(
    async (parentId: string | null = null) => {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to create notes.",
          variant: "destructive",
        })
        return null
      }

      const newNoteData = {
        title: "Untitled",
        content: "",
        parentId,
        tags: [],
      }

      // Create in database
      const createdNote = await noteService.createNote(newNoteData)

      if (createdNote) {
        setNotes((prevNotes) => [...prevNotes, createdNote])
        setActiveNoteId(createdNote.id)
        return createdNote
      }

      return null
    },
    [user, noteService, toast],
  )

  const handleDeleteNote = useCallback(
    async (id: string) => {
      // Find all child notes to delete
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

      // Delete from database
      const success = await noteService.deleteNote(id)

      if (success) {
        // Update UI after successful deletion
        const filteredNotes = notes.filter((note) => !idsToDelete.includes(note.id))
        setNotes(filteredNotes)

        if (activeNoteId === id) {
          setActiveNoteId(filteredNotes[0]?.id || "")
        }
      }
    },
    [notes, activeNoteId, noteService],
  )

  // If authentication is still loading, show a loading screen
  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-lg font-medium">Loading Notable...</p>
        </div>
      </div>
    )
  }

  // If user is not authenticated, show login view
  if (status === "unauthenticated") {
    return <LoginView />
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
        isLoading={isLoading}
      />

      {error ? (
        <div className="flex-1 p-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      ) : isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-sm text-muted-foreground">Loading your notes...</p>
          </div>
        </div>
      ) : notes.length === 0 ? (
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
