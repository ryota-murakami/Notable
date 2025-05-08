"use client"

import type { Note } from "@/types/note"
import { defaultNotes } from "./default-notes"

declare global {
  interface Window {
    electronAPI?: {
      loadNotes: () => Promise<Note[]>
      saveNotes: (notes: Note[]) => Promise<{ success: boolean; error?: string }>
    }
  }
}

export async function loadNotes(): Promise<Note[]> {
  if (typeof window !== "undefined" && window.electronAPI) {
    try {
      const notes = await window.electronAPI.loadNotes()
      return notes.length > 0 ? notes : defaultNotes
    } catch (error) {
      console.error("Failed to load notes:", error)
      return defaultNotes
    }
  }

  // If not running in Electron or if there's an error, return default notes
  return defaultNotes
}

export async function saveNotes(notes: Note[]): Promise<boolean> {
  if (typeof window !== "undefined" && window.electronAPI) {
    try {
      const result = await window.electronAPI.saveNotes(notes)
      return result.success
    } catch (error) {
      console.error("Failed to save notes:", error)
      return false
    }
  }

  // If not running in Electron, store in localStorage as fallback
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("notable-notes", JSON.stringify(notes))
      return true
    } catch (error) {
      console.error("Failed to save notes to localStorage:", error)
      return false
    }
  }

  return false
}
