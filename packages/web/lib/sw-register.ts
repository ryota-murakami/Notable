// Service Worker Registration with Performance Monitoring
import { logger } from '@/lib/logging'

export async function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return
  }

  try {
    // Register the service worker
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    logger.info('Service Worker registered successfully', {
      scope: registration.scope,
    })

    // Handle service worker updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing
      if (!newWorker) return

      newWorker.addEventListener('statechange', () => {
        if (
          newWorker.state === 'installed' &&
          navigator.serviceWorker.controller
        ) {
          // New content is available
          logger.info('New content available - refresh to update')

          // Show update notification to user
          if (window.confirm('New version available! Refresh to update?')) {
            newWorker.postMessage({ type: 'SKIP_WAITING' })
            window.location.reload()
          }
        }
      })
    })

    // Handle controller change
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload()
    })

    // Enable background sync if available
    if ('sync' in registration) {
      try {
        await registration.sync.register('sync-notes')
        logger.info('Background sync registered')
      } catch (err) {
        logger.error('Background sync registration failed', { error: err })
      }
    }

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SYNC_NOTES') {
        // Trigger note sync in the app
        window.dispatchEvent(
          new CustomEvent('sw-sync-notes', { detail: event.data })
        )
      }
    })

    return registration
  } catch (error) {
    logger.error('Service Worker registration failed', { error })
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
    })
  }
}
