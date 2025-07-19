// Service Worker for Notable - Offline Support & Caching
const CACHE_NAME = 'notable-v1'
const RUNTIME_CACHE = 'notable-runtime'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/dashboard',
  '/manifest.json',
  '/_next/static/css/app.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/pages/_app.js',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Try to cache static assets, but don't fail installation if some assets are missing
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache
            .add(url)
            .catch((err) => console.log(`Failed to cache ${url}:`, err)),
        ),
      )
    }),
  )
  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(
            (cacheName) =>
              cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE,
          )
          .map((cacheName) => caches.delete(cacheName)),
      )
    }),
  )
  // Take control of all pages immediately
  self.clients.claim()
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip Supabase API requests (always fetch fresh)
  if (url.hostname.includes('supabase')) return

  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') return

  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response before caching
          const responseToCache = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache)
          })
          return response
        })
        .catch(() => {
          // If offline, try to serve from cache
          return caches.match(request).then((response) => {
            return response || caches.match('/')
          })
        }),
    )
    return
  }

  // Handle static assets with cache-first strategy
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/static/') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.ttf')
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) return response

        return fetch(request).then((response) => {
          // Don't cache non-ok responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response
          }

          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache)
          })
          return response
        })
      }),
    )
    return
  }

  // Handle API requests with network-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response before caching
          const responseToCache = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache)
          })
          return response
        })
        .catch(() => {
          // If offline, try to serve from cache
          return caches.match(request)
        }),
    )
    return
  }

  // Default strategy: network first, cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Don't cache non-ok responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        const responseToCache = response.clone()
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(request, responseToCache)
        })
        return response
      })
      .catch(() => {
        return caches.match(request)
      }),
  )
})

// Background sync for offline note updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-notes') {
    event.waitUntil(syncNotes())
  }
})

async function syncNotes() {
  try {
    // Get all clients
    const clients = await self.clients.matchAll()

    // Send message to all clients to sync
    clients.forEach((client) => {
      client.postMessage({
        type: 'SYNC_NOTES',
        timestamp: new Date().toISOString(),
      })
    })
  } catch (error) {
    console.error('Sync failed:', error)
  }
}

// Handle messages from the main app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
