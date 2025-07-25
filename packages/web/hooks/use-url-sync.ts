'use client'

import { useCallback, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface UseUrlSyncOptions {
  activeNoteId: string
  onNavigateToNote: (noteId: string) => void
}

/**
 * Hook to synchronize note navigation with URL state
 * Provides deep linking support and URL state management
 */
export function useUrlSync({
  activeNoteId,
  onNavigateToNote,
}: UseUrlSyncOptions) {
  const router = useRouter()
  const pathname = usePathname()

  // Navigate to note with URL update
  const navigateToNote = useCallback(
    (noteId: string, options: { replace?: boolean } = {}) => {
      const { replace = false } = options

      if (!noteId) {
        // Navigate to dashboard root
        if (replace) {
          router.replace('/')
        } else {
          router.push('/')
        }
        return
      }

      const noteUrl = `/notes/${noteId}`

      // Update URL without full page reload
      if (replace) {
        router.replace(noteUrl)
      } else {
        router.push(noteUrl)
      }

      // Update local state
      onNavigateToNote(noteId)
    },
    [router, onNavigateToNote]
  )

  // Navigate to dashboard root
  const navigateToDashboard = useCallback(() => {
    router.push('/')
  }, [router])

  // Check if current path is a note page
  const isNotePage = pathname?.startsWith('/notes/')
  const urlNoteId = isNotePage ? pathname.replace('/notes/', '') : null

  // Sync URL with active note when activeNoteId changes
  useEffect(() => {
    if (!activeNoteId) return

    const currentUrlNoteId = urlNoteId

    // If we're on a note page but the URL doesn't match the active note, update URL
    if (currentUrlNoteId !== activeNoteId) {
      // Use replace to avoid adding to history when syncing state
      navigateToNote(activeNoteId, { replace: true })
    }
  }, [activeNoteId, urlNoteId, navigateToNote])

  // Sync active note with URL when URL changes
  useEffect(() => {
    if (urlNoteId && urlNoteId !== activeNoteId) {
      onNavigateToNote(urlNoteId)
    }
  }, [urlNoteId, activeNoteId, onNavigateToNote])

  return {
    navigateToNote,
    navigateToDashboard,
    isNotePage,
    urlNoteId,
  }
}
