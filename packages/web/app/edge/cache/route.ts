import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface CacheEntry {
  key: string
  value: unknown
  ttl: number
  createdAt: number
  tags: string[]
  region?: string
}

interface CacheStats {
  totalEntries: number
  hitRate: number
  missRate: number
  memoryUsage: number
  oldestEntry: number
  newestEntry: number
}

interface PurgeRequest {
  keys?: string[]
  tags?: string[]
  patterns?: string[]
  region?: string
  force?: boolean
}

// Edge cache storage (in production, this would use Vercel Edge Config or similar)
const edgeCache = new Map<string, CacheEntry>()
const cacheStats = {
  hits: 0,
  misses: 0,
  sets: 0,
  deletes: 0,
}

// Cache configuration
const CACHE_CONFIG = {
  maxEntries: 10000,
  defaultTTL: 3600000, // 1 hour
  maxKeyLength: 250,
  maxValueSize: 1024 * 1024, // 1MB
  cleanupInterval: 300000, // 5 minutes
}

// Common cache key patterns
const CACHE_PATTERNS = {
  user: 'user:{userId}',
  note: 'note:{noteId}',
  search: 'search:{query}:{filters}',
  export: 'export:{noteId}:{format}',
  image: 'image:{url}:{transform}',
  api: 'api:{endpoint}:{params}',
  static: 'static:{path}',
}

// Generate cache key with pattern
// Uncomment when needed
// function generateCacheKey(
//   pattern: string,
//   params: Record<string, string>,
// ): string {
//   let key = pattern
//   for (const [param, value] of Object.entries(params)) {
//     key = key.replace(`{${param}}`, value)
//   }
//   return key
// }

// Check if key matches pattern
function matchesPattern(key: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/\{[^}]+\}/g, '[^:]+') + '$')
  return regex.test(key)
}

// Validate cache key
function isValidCacheKey(key: string): boolean {
  return (
    key.length <= CACHE_CONFIG.maxKeyLength && /^[a-zA-Z0-9:_-]+$/.test(key)
  )
}

// Calculate memory usage estimate
function calculateMemoryUsage(): number {
  let totalSize = 0
  for (const entry of edgeCache.values()) {
    totalSize += JSON.stringify(entry).length
  }
  return totalSize
}

// Clean up expired entries
function cleanupExpiredEntries(): number {
  const now = Date.now()
  let cleanedCount = 0

  for (const [key, entry] of edgeCache.entries()) {
    if (now > entry.createdAt + entry.ttl) {
      edgeCache.delete(key)
      cleanedCount++
    }
  }

  return cleanedCount
}

// Get cache entry
function getCacheEntry(key: string): CacheEntry | null {
  const entry = edgeCache.get(key)

  if (!entry) {
    cacheStats.misses++
    return null
  }

  // Check if expired
  const now = Date.now()
  if (now > entry.createdAt + entry.ttl) {
    edgeCache.delete(key)
    cacheStats.misses++
    return null
  }

  cacheStats.hits++
  return entry
}

// Set cache entry
function setCacheEntry(
  key: string,
  value: unknown,
  ttl: number = CACHE_CONFIG.defaultTTL,
  tags: string[] = [],
  region?: string
): boolean {
  if (!isValidCacheKey(key)) {
    return false
  }

  const serializedValue = JSON.stringify(value)
  if (serializedValue.length > CACHE_CONFIG.maxValueSize) {
    return false
  }

  // Check if we need to make space
  if (edgeCache.size >= CACHE_CONFIG.maxEntries) {
    // Remove oldest entry
    const entries = Array.from(edgeCache.entries())
    entries.sort((a, b) => a[1].createdAt - b[1].createdAt)
    if (entries.length > 0 && entries[0]) {
      edgeCache.delete(entries[0][0])
    }
  }

  const entry: CacheEntry = {
    key,
    value,
    ttl,
    createdAt: Date.now(),
    tags,
    ...(region && { region }),
  }

  edgeCache.set(key, entry)
  cacheStats.sets++

  return true
}

// Delete cache entries by key
function deleteCacheKeys(keys: string[]): number {
  let deletedCount = 0

  for (const key of keys) {
    if (edgeCache.delete(key)) {
      deletedCount++
      cacheStats.deletes++
    }
  }

  return deletedCount
}

// Delete cache entries by tag
function deleteCacheByTags(tags: string[]): number {
  let deletedCount = 0

  for (const [key, entry] of edgeCache.entries()) {
    if (entry.tags.some((tag) => tags.includes(tag))) {
      edgeCache.delete(key)
      deletedCount++
      cacheStats.deletes++
    }
  }

  return deletedCount
}

// Delete cache entries by pattern
function deleteCacheByPatterns(patterns: string[]): number {
  let deletedCount = 0

  for (const [key] of edgeCache.entries()) {
    if (patterns.some((pattern) => matchesPattern(key, pattern))) {
      edgeCache.delete(key)
      deletedCount++
      cacheStats.deletes++
    }
  }

  return deletedCount
}

// Get cache statistics
function getCacheStats(): CacheStats {
  const entries = Array.from(edgeCache.values())
  const totalRequests = cacheStats.hits + cacheStats.misses

  return {
    totalEntries: edgeCache.size,
    hitRate: totalRequests > 0 ? cacheStats.hits / totalRequests : 0,
    missRate: totalRequests > 0 ? cacheStats.misses / totalRequests : 0,
    memoryUsage: calculateMemoryUsage(),
    oldestEntry:
      entries.length > 0 ? Math.min(...entries.map((e) => e.createdAt)) : 0,
    newestEntry:
      entries.length > 0 ? Math.max(...entries.map((e) => e.createdAt)) : 0,
  }
}

// GET: Retrieve cache entry
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    const pattern = searchParams.get('pattern')
    const tags = searchParams.get('tags')?.split(',')
    const stats = searchParams.get('stats') === 'true'

    // Return cache statistics
    if (stats) {
      const cacheStats = getCacheStats()
      return NextResponse.json({
        stats: cacheStats,
        config: CACHE_CONFIG,
        patterns: CACHE_PATTERNS,
      })
    }

    // Get specific cache entry
    if (key) {
      const entry = getCacheEntry(key)

      if (!entry) {
        return NextResponse.json(
          { error: 'Cache entry not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        {
          key: entry.key,
          value: entry.value,
          ttl: entry.ttl,
          remainingTTL: Math.max(0, entry.createdAt + entry.ttl - Date.now()),
          tags: entry.tags,
          region: entry.region,
        },
        {
          headers: {
            'X-Cache-Hit': 'true',
            'X-Cache-TTL': entry.ttl.toString(),
          },
        }
      )
    }

    // Search by pattern or tags
    const matchingEntries = []

    for (const [entryKey, entry] of edgeCache.entries()) {
      let matches = true

      if (pattern && !matchesPattern(entryKey, pattern)) {
        matches = false
      }

      if (tags && !entry.tags.some((tag) => tags.includes(tag))) {
        matches = false
      }

      if (matches) {
        matchingEntries.push({
          key: entry.key,
          tags: entry.tags,
          ttl: entry.ttl,
          remainingTTL: Math.max(0, entry.createdAt + entry.ttl - Date.now()),
          region: entry.region,
        })
      }
    }

    return NextResponse.json({
      entries: matchingEntries,
      total: matchingEntries.length,
    })
  } catch (error) {
    console.error('Cache get error:', error)

    return NextResponse.json(
      { error: 'Failed to get cache entry' },
      { status: 500 }
    )
  }
}

// POST: Set cache entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { key, value, ttl, tags = [], region } = body

    if (!key) {
      return NextResponse.json(
        { error: 'Missing key parameter' },
        { status: 400 }
      )
    }

    if (value === undefined) {
      return NextResponse.json(
        { error: 'Missing value parameter' },
        { status: 400 }
      )
    }

    const success = setCacheEntry(
      key,
      value,
      ttl || CACHE_CONFIG.defaultTTL,
      tags,
      region
    )

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to set cache entry' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message: 'Cache entry set successfully',
      key,
      ttl: ttl || CACHE_CONFIG.defaultTTL,
      tags,
    })
  } catch (error) {
    console.error('Cache set error:', error)

    return NextResponse.json(
      { error: 'Failed to set cache entry' },
      { status: 500 }
    )
  }
}

// DELETE: Purge cache entries
export async function DELETE(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')

    // Basic admin authentication
    if (!adminKey || adminKey !== process.env.CACHE_ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as PurgeRequest
    const { keys, tags, patterns, region, force } = body

    let deletedCount = 0

    // Delete by specific keys
    if (keys && keys.length > 0) {
      deletedCount += deleteCacheKeys(keys)
    }

    // Delete by tags
    if (tags && tags.length > 0) {
      deletedCount += deleteCacheByTags(tags)
    }

    // Delete by patterns
    if (patterns && patterns.length > 0) {
      deletedCount += deleteCacheByPatterns(patterns)
    }

    // Force cleanup of expired entries
    if (force) {
      deletedCount += cleanupExpiredEntries()
    }

    // Clear entire cache if no specific criteria provided
    if (!keys && !tags && !patterns && force) {
      deletedCount = edgeCache.size
      edgeCache.clear()
    }

    return NextResponse.json({
      message: 'Cache purge completed',
      deletedCount,
      remainingEntries: edgeCache.size,
      purgeRequest: { keys, tags, patterns, region, force },
    })
  } catch (error) {
    console.error('Cache purge error:', error)

    return NextResponse.json(
      { error: 'Failed to purge cache' },
      { status: 500 }
    )
  }
}

// PUT: Bulk cache operations
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { operation, entries } = body

    if (operation === 'bulkSet') {
      let successCount = 0

      for (const entry of entries) {
        const { key, value, ttl, tags, region } = entry

        if (setCacheEntry(key, value, ttl, tags, region)) {
          successCount++
        }
      }

      return NextResponse.json({
        message: 'Bulk set completed',
        successCount,
        totalEntries: entries.length,
        failedCount: entries.length - successCount,
      })
    }

    if (operation === 'cleanup') {
      const deletedCount = cleanupExpiredEntries()

      return NextResponse.json({
        message: 'Cache cleanup completed',
        deletedCount,
        remainingEntries: edgeCache.size,
      })
    }

    return NextResponse.json({ error: 'Invalid operation' }, { status: 400 })
  } catch (error) {
    console.error('Cache bulk operation error:', error)

    return NextResponse.json(
      { error: 'Failed to perform bulk operation' },
      { status: 500 }
    )
  }
}

// Periodic cleanup (called by cron job)
setInterval(() => {
  cleanupExpiredEntries()
}, CACHE_CONFIG.cleanupInterval)
