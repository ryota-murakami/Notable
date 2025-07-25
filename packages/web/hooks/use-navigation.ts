'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

export interface NavigationOptions {
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean
}

/**
 * Unified navigation hook for cross-platform routing
 * Provides consistent navigation API across Web, Electron, and Mobile
 */
export function useNavigation() {
  const router = useRouter()
  const { toast } = useToast()

  // Navigate to a specific note
  const navigateToNote = useCallback(
    (noteId: string, options: NavigationOptions = {}) => {
      const { replace = false, scroll = true } = options

      if (!noteId) {
        router.push('/', { scroll })
        return
      }

      const url = `/notes/${noteId}`

      if (replace) {
        router.replace(url, { scroll })
      } else {
        router.push(url, { scroll })
      }
    },
    [router]
  )

  // Navigate to dashboard/home
  const navigateToHome = useCallback(
    (options: NavigationOptions = {}) => {
      const { replace = false, scroll = true } = options

      if (replace) {
        router.replace('/', { scroll })
      } else {
        router.push('/', { scroll })
      }
    },
    [router]
  )

  // Navigate to authentication page
  const navigateToAuth = useCallback(
    (options: NavigationOptions = {}) => {
      const { replace = false, scroll = true } = options

      if (replace) {
        router.replace('/auth', { scroll })
      } else {
        router.push('/auth', { scroll })
      }
    },
    [router]
  )

  // Navigate to billing page
  const navigateToBilling = useCallback(
    (options: NavigationOptions = {}) => {
      const { replace = false, scroll = true } = options

      if (replace) {
        router.replace('/dashboard/billing', { scroll })
      } else {
        router.push('/dashboard/billing', { scroll })
      }
    },
    [router]
  )

  // Navigate back
  const navigateBack = useCallback(() => {
    router.back()
  }, [router])

  // Navigate forward
  const navigateForward = useCallback(() => {
    router.forward()
  }, [router])

  // Prefetch a route for faster navigation
  const prefetchRoute = useCallback(
    (href: string) => {
      router.prefetch(href)
    },
    [router]
  )

  // Handle deep link navigation
  const handleDeepLink = useCallback(
    (url: string) => {
      try {
        const urlObj = new URL(url)

        // Handle custom protocol for desktop
        if (urlObj.protocol === 'notable:') {
          const path = urlObj.pathname
          const noteId = path.replace('/notes/', '')

          if (noteId) {
            navigateToNote(noteId)
          } else {
            navigateToHome()
          }
        }
        // Handle regular HTTP(S) links
        else if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
          const path = urlObj.pathname

          if (path.startsWith('/notes/')) {
            const noteId = path.replace('/notes/', '')
            navigateToNote(noteId)
          } else {
            router.push(path)
          }
        }
      } catch (error) {
        toast({
          title: 'Invalid link',
          description: 'The link you tried to open is invalid.',
          variant: 'destructive',
        })
      }
    },
    [navigateToNote, navigateToHome, router, toast]
  )

  return {
    navigateToNote,
    navigateToHome,
    navigateToAuth,
    navigateToBilling,
    navigateBack,
    navigateForward,
    prefetchRoute,
    handleDeepLink,
  }
}
