import { useCallback, useEffect, useRef } from 'react'
import { useNote } from './use-notes'

interface UseAutoSaveOptions {
  debounceMs?: number
  enabled?: boolean
}

export function useAutoSave(
  noteId: string,
  content: { title?: string; content?: string },
  options: UseAutoSaveOptions = {}
) {
  const { debounceMs = 1000, enabled = true } = options
  const { updateNote } = useNote(noteId || '', !!noteId)

  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const lastSavedRef = useRef<{ title?: string; content?: string }>({})
  const isSavingRef = useRef(false)

  const save = useCallback(async () => {
    if (!enabled || !noteId || isSavingRef.current) return

    // Check if content has actually changed
    const hasChanged =
      content.title !== lastSavedRef.current.title ||
      content.content !== lastSavedRef.current.content

    if (!hasChanged) return

    try {
      isSavingRef.current = true
      const updateData: { title?: string; content?: string } = {}

      if (content.title !== undefined) updateData.title = content.title
      if (content.content !== undefined) updateData.content = content.content

      await updateNote(updateData)

      // Update the last saved reference
      lastSavedRef.current = { ...content }
    } catch (error) {
      console.error('Auto-save failed:', error)
    } finally {
      isSavingRef.current = false
    }
  }, [noteId, content, updateNote, enabled])

  const debouncedSave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      save()
    }, debounceMs)
  }, [save, debounceMs])

  // Trigger auto-save when content changes
  useEffect(() => {
    if (enabled && noteId) {
      debouncedSave()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [content.title, content.content, debouncedSave, enabled, noteId])

  // Save immediately when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        // Fire save immediately on unmount
        save()
      }
    }
  }, [save])

  const saveNow = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    save()
  }, [save])

  return {
    saveNow,
    isSaving: isSavingRef.current,
  }
}
