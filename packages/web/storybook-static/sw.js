// Service Worker for Notable - Offline Support & Caching with Performance Optimization
const CACHE_VERSION = 2
const CACHE_NAME = `notable-v${CACHE_VERSION}`
const STATIC_CACHE = `notable-static-v${CACHE_VERSION}`
const RUNTIME_CACHE = `notable-runtime-v${CACHE_VERSION}`
const API_CACHE = `notable-api-v${CACHE_VERSION}`

// Performance monitoring
const performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  networkRequests: 0,
  failedRequests: 0,
}

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/dashboard',
  '/manifest.json',
  '/offline.html',
  '/_next/static/css/app.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/pages/_app.js',
]

// Cache configuration
const _CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
}

// Cache durations
const CACHE_DURATIONS = {
  STATIC: 30 * 24 * 60 * 60 * 1000, // 30 days
  DYNAMIC: 24 * 60 * 60 * 1000, // 1 day
  API: 5 * 60 * 1000, // 5 minutes
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing version:', CACHE_VERSION)

  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE)

      // Try to cache static assets, but don't fail installation if some assets are missing
      const results = await Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn(`[Service Worker] Failed to cache ${url}:`, err)
            return null
          })
        )
      )

      // Report caching results
      const cached = results.filter((r) => r.status === 'fulfilled').length
      console.log(
        `[Service Worker] Cached ${cached}/${STATIC_ASSETS.length} static assets`
      )

      // Force immediate activation
      await self.skipWaiting()
    })()
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating version:', CACHE_VERSION)

  event.waitUntil(
    (async () => {
      // Get all cache names
      const cacheNames = await caches.keys()

      // Delete old caches
      const currentCaches = [CACHE_NAME, STATIC_CACHE, RUNTIME_CACHE, API_CACHE]
      const deletedCaches = await Promise.all(
        cacheNames
          .filter((cacheName) => !currentCaches.includes(cacheName))
          .map((cacheName) => caches.delete(cacheName))
      )

      console.log(`[Service Worker] Deleted ${deletedCaches.length} old caches`)

      // Take control of all pages immediately
      await self.clients.claim()
      console.log('[Service Worker] Active and controlling all clients')
    })()
  )
})

// Utility functions
function isStaticAsset(url) {
  const staticExtensions = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot',
    '.ico',
    '.webp',
  ]
  return (
    staticExtensions.some((ext) => url.pathname.endsWith(ext)) ||
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/static/')
  )
}

function isExpired(cachedResponse, maxAge) {
  const dateHeader = cachedResponse.headers.get('date')
  if (!dateHeader) return true

  const date = new Date(dateHeader).getTime()
  return Date.now() - date > maxAge
}

async function fetchWithTimeout(request, timeout = 5000) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(request, { signal: controller.signal })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

// Advanced fetch strategies
async function cacheFirst(request, cacheName = STATIC_CACHE) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    performanceMetrics.cacheHits++

    // Update cache in background if expired
    if (isExpired(cachedResponse, CACHE_DURATIONS.STATIC)) {
      fetchAndCache(request, cacheName)
    }

    return cachedResponse
  }

  performanceMetrics.cacheMisses++
  return fetchAndCache(request, cacheName)
}

async function networkFirst(request, cacheName = RUNTIME_CACHE) {
  performanceMetrics.networkRequests++

  try {
    const networkResponse = await fetchWithTimeout(request, 3000)

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    performanceMetrics.failedRequests++
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      performanceMetrics.cacheHits++
      return cachedResponse
    }
    throw error
  }
}

async function staleWhileRevalidate(request, cacheName = RUNTIME_CACHE) {
  const cachedResponse = await caches.match(request)

  const networkResponsePromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        const cache = caches.open(cacheName)
        cache.then((c) => c.put(request, response.clone()))
      }
      return response
    })
    .catch(() => null)

  if (cachedResponse) {
    performanceMetrics.cacheHits++
    networkResponsePromise // Update cache in background
    return cachedResponse
  }

  performanceMetrics.cacheMisses++
  return (
    networkResponsePromise || Promise.reject(new Error('No cache or network'))
  )
}

async function fetchAndCache(request, cacheName) {
  try {
    const response = await fetch(request)

    if (response.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    performanceMetrics.failedRequests++
    throw error
  }
}

// Main fetch event handler
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external APIs and Supabase (always fetch fresh)
  if (url.hostname.includes('supabase') || url.hostname !== location.hostname)
    return

  // Skip Chrome extension and other protocols
  if (!url.protocol.startsWith('http')) return

  // Navigation requests (HTML pages) - Network first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      networkFirst(request, RUNTIME_CACHE).catch(async () => {
        const offlinePage = await caches.match('/offline.html')
        return offlinePage || caches.match('/')
      })
    )
    return
  }

  // Static assets - Cache first
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE))
    return
  }

  // API requests - Network first with short cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request, API_CACHE))
    return
  }

  // Default - Stale while revalidate
  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE))
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

// Performance reporting
function reportPerformanceMetrics() {
  const report = {
    ...performanceMetrics,
    cacheHitRate:
      performanceMetrics.cacheHits /
        (performanceMetrics.cacheHits + performanceMetrics.cacheMisses) || 0,
    errorRate:
      performanceMetrics.failedRequests / performanceMetrics.networkRequests ||
      0,
    timestamp: Date.now(),
  }

  // Send to all clients
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'PERFORMANCE_METRICS',
        data: report,
      })
    })
  })

  return report
}

// Report metrics every 5 minutes
setInterval(reportPerformanceMetrics, 5 * 60 * 1000)

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data?.text() || 'New update available',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  }

  event.waitUntil(self.registration.showNotification('Notable', options))
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification clicked')
  event.notification.close()

  event.waitUntil(clients.openWindow('/'))
})

// Handle messages from the main app
self.addEventListener('message', (event) => {
  const { data } = event

  if (!data) return

  switch (data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting()
      break

    case 'GET_PERFORMANCE_METRICS':
      event.ports[0]?.postMessage(reportPerformanceMetrics())
      break

    case 'CLEAR_CACHE':
      event.waitUntil(clearAllCaches())
      break

    case 'PERFORMANCE_DATA':
      // Log performance data from main thread
      console.log('[Service Worker] Performance data:', data.metrics)
      break

    default:
      console.log('[Service Worker] Unknown message type:', data.type)
  }
})

// Clear all caches
async function clearAllCaches() {
  const cacheNames = await caches.keys()
  await Promise.all(cacheNames.map((name) => caches.delete(name)))
  console.log('[Service Worker] All caches cleared')

  // Reset metrics
  performanceMetrics.cacheHits = 0
  performanceMetrics.cacheMisses = 0
  performanceMetrics.networkRequests = 0
  performanceMetrics.failedRequests = 0
}
