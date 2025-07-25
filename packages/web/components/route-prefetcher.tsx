'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Note } from '@/types/note'

interface RoutePrefetcherProps {
  notes: Note[]
  activeNoteId: string
  prefetchStrategy?: 'adjacent' | 'recent' | 'all'
  maxPrefetch?: number
}

/**
 * Intelligent route prefetching component
 * Prefetches routes based on user navigation patterns
 */
export function RoutePrefetcher({
  notes,
  activeNoteId,
  prefetchStrategy = 'adjacent',
  maxPrefetch = 5,
}: RoutePrefetcherProps) {
  const router = useRouter()
  const prefetchedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (!notes.length || !activeNoteId) return

    const currentIndex = notes.findIndex((note) => note.id === activeNoteId)
    if (currentIndex === -1) return

    const routesToPrefetch: string[] = []

    switch (prefetchStrategy) {
      case 'adjacent':
        // Prefetch next and previous notes
        for (let i = 1; i <= Math.min(maxPrefetch, notes.length - 1); i++) {
          // Next notes
          const nextIndex = (currentIndex + i) % notes.length
          if (notes[nextIndex] && !notes[nextIndex].isFolder) {
            routesToPrefetch.push(`/notes/${notes[nextIndex].id}`)
          }

          // Previous notes
          const prevIndex = (currentIndex - i + notes.length) % notes.length
          if (notes[prevIndex] && !notes[prevIndex].isFolder) {
            routesToPrefetch.push(`/notes/${notes[prevIndex].id}`)
          }
        }
        break

      case 'recent': {
        // Prefetch recently updated notes
        const sortedByDate = [...notes]
          .filter((note) => !note.isFolder && note.id !== activeNoteId)
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          )
          .slice(0, maxPrefetch)

        sortedByDate.forEach((note) => {
          routesToPrefetch.push(`/notes/${note.id}`)
        })
        break
      }

      case 'all':
        // Prefetch all notes (use with caution)
        notes
          .filter((note) => !note.isFolder && note.id !== activeNoteId)
          .slice(0, maxPrefetch)
          .forEach((note) => {
            routesToPrefetch.push(`/notes/${note.id}`)
          })
        break
    }

    // Prefetch routes that haven't been prefetched yet
    routesToPrefetch.forEach((route) => {
      if (!prefetchedRef.current.has(route)) {
        router.prefetch(route)
        prefetchedRef.current.add(route)
      }
    })

    // Clean up old prefetched routes if set gets too large
    if (prefetchedRef.current.size > maxPrefetch * 3) {
      const newSet = new Set<string>()
      routesToPrefetch.forEach((route) => newSet.add(route))
      prefetchedRef.current = newSet
    }
  }, [notes, activeNoteId, prefetchStrategy, maxPrefetch, router])

  return null // This component doesn't render anything
}
