"use client"

import { createClient } from "@/lib/supabase/client"
import type { Note } from "@/types/note"
import type { Tables, Insertable } from "@/lib/supabase/database.types"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth/auth-context"

export type SupabaseNote = Tables<"notes">
export type SupabaseTag = Tables<"tags">

// Convert Supabase note to app note format
export const mapSupabaseNote = (note: SupabaseNote, tags: string[] = []): Note => ({
  id: note.id,
  title: note.title,
  content: note.content,
  createdAt: note.created_at,
  updatedAt: note.updated_at,
  parentId: note.parent_id,
  tags: tags,
})

// Convert app note to Supabase format
export const mapToSupabaseNote = (note: Note, userId: string): Insertable<"notes"> => ({
  id: note.id,
  user_id: userId,
  title: note.title,
  content: note.content,
  parent_id: note.parentId,
  created_at: note.createdAt,
  updated_at: note.updatedAt,
})

export const useNoteService = () => {
  const supabase = createClient()
  const { toast } = useToast()
  const { user } = useAuth()

  // Security check - ensure user is authenticated
  const ensureAuthenticated = () => {
    if (!user) {
      throw new Error("User not authenticated")
    }
    return user.id
  }

  const fetchNotes = async (): Promise<Note[]> => {
    try {
      const userId = ensureAuthenticated()

      // Fetch notes for the current user
      const { data: notes, error } = await supabase
        .from("notes")
        .select("*")
        .eq("user_id", userId)
        .eq("is_archived", false)
        .order("updated_at", { ascending: false })

      if (error) throw error

      if (!notes || notes.length === 0) {
        return []
      }

      // Fetch all tags for these notes
      const noteIds = notes.map((note) => note.id)
      const { data: noteTags, error: noteTagsError } = await supabase
        .from("note_tags")
        .select("note_id, tags(id, name)")
        .in("note_id", noteIds)

      if (noteTagsError) throw noteTagsError

      // Group tags by note_id
      const tagsByNoteId: Record<string, string[]> = {}
      noteTags?.forEach((item) => {
        const noteId = item.note_id
        const tagName = (item.tags as any)?.name

        if (tagName) {
          if (!tagsByNoteId[noteId]) {
            tagsByNoteId[noteId] = []
          }
          tagsByNoteId[noteId].push(tagName)
        }
      })

      // Map to application note format
      return notes.map((note) => mapSupabaseNote(note, tagsByNoteId[note.id] || []))
    } catch (error: any) {
      console.error("Error fetching notes:", error)

      if (error.message === "User not authenticated") {
        toast({
          title: "Authentication required",
          description: "Please sign in to access your notes.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error fetching notes",
          description: "Failed to load your notes. Please try again.",
          variant: "destructive",
        })
      }

      return []
    }
  }

  const createNote = async (note: Omit<Note, "id" | "createdAt" | "updatedAt">): Promise<Note | null> => {
    try {
      const userId = ensureAuthenticated()

      // Insert note
      const { data, error } = await supabase
        .from("notes")
        .insert({
          user_id: userId,
          title: note.title,
          content: note.content,
          parent_id: note.parentId,
        })
        .select()
        .single()

      if (error) throw error

      // Handle tags
      if (note.tags && note.tags.length > 0) {
        await handleNoteTags(data.id, note.tags)
      }

      toast({
        title: "Note created",
        description: "Your note has been created successfully.",
      })

      return mapSupabaseNote(data, note.tags)
    } catch (error: any) {
      console.error("Error creating note:", error)

      if (error.message === "User not authenticated") {
        toast({
          title: "Authentication required",
          description: "Please sign in to create notes.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error creating note",
          description: "Failed to create your note. Please try again.",
          variant: "destructive",
        })
      }

      return null
    }
  }

  const updateNote = async (note: Note): Promise<Note | null> => {
    try {
      ensureAuthenticated()

      // Verify note ownership before updating
      const { data: existingNote, error: fetchError } = await supabase
        .from("notes")
        .select("user_id")
        .eq("id", note.id)
        .single()

      if (fetchError) throw fetchError

      if (!existingNote || existingNote.user_id !== user?.id) {
        throw new Error("You don't have permission to update this note")
      }

      // Update note
      const { data, error } = await supabase
        .from("notes")
        .update({
          title: note.title,
          content: note.content,
          parent_id: note.parentId,
          updated_at: new Date().toISOString(),
        })
        .eq("id", note.id)
        .select()
        .single()

      if (error) throw error

      // Handle tags
      await handleNoteTags(note.id, note.tags)

      return mapSupabaseNote(data, note.tags)
    } catch (error: any) {
      console.error("Error updating note:", error)

      if (error.message === "User not authenticated") {
        toast({
          title: "Authentication required",
          description: "Please sign in to update notes.",
          variant: "destructive",
        })
      } else if (error.message === "You don't have permission to update this note") {
        toast({
          title: "Permission denied",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error updating note",
          description: "Failed to update your note. Please try again.",
          variant: "destructive",
        })
      }

      return null
    }
  }

  const deleteNote = async (noteId: string): Promise<boolean> => {
    try {
      ensureAuthenticated()

      // Verify note ownership before deleting
      const { data: existingNote, error: fetchError } = await supabase
        .from("notes")
        .select("user_id")
        .eq("id", noteId)
        .single()

      if (fetchError) throw fetchError

      if (!existingNote || existingNote.user_id !== user?.id) {
        throw new Error("You don't have permission to delete this note")
      }

      // Delete note (cascade will handle note_tags)
      const { error } = await supabase.from("notes").delete().eq("id", noteId)

      if (error) throw error

      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully.",
      })

      return true
    } catch (error: any) {
      console.error("Error deleting note:", error)

      if (error.message === "User not authenticated") {
        toast({
          title: "Authentication required",
          description: "Please sign in to delete notes.",
          variant: "destructive",
        })
      } else if (error.message === "You don't have permission to delete this note") {
        toast({
          title: "Permission denied",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error deleting note",
          description: "Failed to delete your note. Please try again.",
          variant: "destructive",
        })
      }

      return false
    }
  }

  // Helper function to handle tags for a note
  const handleNoteTags = async (noteId: string, tags: string[]): Promise<void> => {
    try {
      const userId = ensureAuthenticated()

      // Delete existing note_tags
      await supabase.from("note_tags").delete().eq("note_id", noteId)

      if (tags.length === 0) return

      // Get or create tags
      const tagPromises = tags.map(async (tagName) => {
        // Check if tag exists
        const { data: existingTags, error: fetchError } = await supabase
          .from("tags")
          .select("id")
          .eq("user_id", userId)
          .eq("name", tagName)
          .limit(1)

        if (fetchError) throw fetchError

        if (existingTags && existingTags.length > 0) {
          return existingTags[0].id
        }

        // Create new tag
        const { data: newTag, error: insertError } = await supabase
          .from("tags")
          .insert({
            user_id: userId,
            name: tagName,
          })
          .select("id")
          .single()

        if (insertError) throw insertError

        return newTag.id
      })

      const tagIds = await Promise.all(tagPromises)

      // Create note_tags entries
      const noteTagsData = tagIds.map((tagId) => ({
        note_id: noteId,
        tag_id: tagId,
      }))

      const { error: linkError } = await supabase.from("note_tags").insert(noteTagsData)

      if (linkError) throw linkError
    } catch (error) {
      console.error("Error handling tags:", error)
      throw error
    }
  }

  return {
    fetchNotes,
    createNote,
    updateNote,
    deleteNote,
  }
}
