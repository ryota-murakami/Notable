// Service Worker Registration with Performance Monitoring

export async function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return
  }

  try {
    // Register the service worker
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    console.log('Service Worker registered successfully:', registration.scope)

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
          console.log('New content available - refresh to update')

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
        console.log('Background sync registered')
      } catch (err) {
        console.log('Background sync registration failed:', err)
      }
    }

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SYNC_NOTES') {
        // Trigger note sync in the app
        window.dispatchEvent(
          new CustomEvent('sw-sync-notes', { detail: event.data }),
        )
      }
    })

    return registration
  } catch (error) {
    console.error('Service Worker registration failed:', error)
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
    })
  }
}
