/**
 * Enhanced IndexedDB Caching Layer for Notable
 * Provides instant loading through intelligent caching strategies
 */

import type { Note } from '@/types/note'
import { performanceMonitor } from '@/lib/performance'

export interface CacheItem<T = any> {
  key: string
  value: T
  timestamp: number
  expiresAt?: number
  metadata?: Record<string, unknown>
  version: string
  etag?: string
}

export interface CacheConfig {
  name: string
  version: number
  defaultTTL: number // milliseconds
  maxItems?: number
  storageQuota?: number // bytes
}

export interface CacheStatistics {
  hitRate: number
  totalRequests: number
  totalHits: number
  totalMisses: number
  storageUsed: number
  itemCount: number
}

const DB_NAME = 'notable-cache'
const DB_VERSION = 3
const NOTES_STORE = 'notes'
const SEARCH_RESULTS_STORE = 'search_results'
const METADATA_STORE = 'metadata'
const USER_PREFERENCES_STORE = 'user_preferences'

class IndexedDBCache {
  private db: IDBDatabase | null = null
  private isInitialized = false
  private initPromise: Promise<void> | null = null
  private stats: CacheStatistics = {
    hitRate: 0,
    totalRequests: 0,
    totalHits: 0,
    totalMisses: 0,
    storageUsed: 0,
    itemCount: 0,
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.initialize()
    }
  }

  /**
   * Initialize IndexedDB with optimized schema
   */
  private async initialize(): Promise<void> {
    if (this.initPromise) {
      return this.initPromise
    }

    this.initPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error)
        reject(request.error)
      }

      request.onsuccess = () => {
        this.db = request.result
        this.isInitialized = true
        this.setupPerformanceTracking()
        resolve()
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        this.createStores(db)
      }
    })

    return this.initPromise
  }

  /**
   * Create optimized object stores
   */
  private createStores(db: IDBDatabase): void {
    // Notes store with multiple indexes for fast queries
    if (!db.objectStoreNames.contains(NOTES_STORE)) {
      const notesStore = db.createObjectStore(NOTES_STORE, { keyPath: 'key' })
      notesStore.createIndex('timestamp', 'timestamp', { unique: false })
      notesStore.createIndex('expiresAt', 'expiresAt', { unique: false })
      notesStore.createIndex('noteId', 'metadata.noteId', { unique: false })
      notesStore.createIndex('userId', 'metadata.userId', { unique: false })
      notesStore.createIndex('tags', 'metadata.tags', {
        unique: false,
        multiEntry: true,
      })
    }

    // Search results store for instant search
    if (!db.objectStoreNames.contains(SEARCH_RESULTS_STORE)) {
      const searchStore = db.createObjectStore(SEARCH_RESULTS_STORE, {
        keyPath: 'key',
      })
      searchStore.createIndex('query', 'metadata.query', { unique: false })
      searchStore.createIndex('timestamp', 'timestamp', { unique: false })
    }

    // Metadata store for cache management
    if (!db.objectStoreNames.contains(METADATA_STORE)) {
      const metadataStore = db.createObjectStore(METADATA_STORE, {
        keyPath: 'key',
      })
      metadataStore.createIndex('type', 'metadata.type', { unique: false })
    }

    // User preferences for personalized caching
    if (!db.objectStoreNames.contains(USER_PREFERENCES_STORE)) {
      const prefsStore = db.createObjectStore(USER_PREFERENCES_STORE, {
        keyPath: 'key',
      })
      prefsStore.createIndex('userId', 'metadata.userId', { unique: false })
    }
  }

  /**
   * Setup performance tracking
   */
  private setupPerformanceTracking(): void {
    // Track cache statistics every 5 seconds
    setInterval(() => {
      this.updateStatistics()
      performanceMonitor.track(
        'cache_hit_rate',
        this.stats.hitRate,
        'percentage'
      )
      performanceMonitor.track(
        'cache_storage_used',
        this.stats.storageUsed,
        'bytes'
      )
      performanceMonitor.track(
        'cache_item_count',
        this.stats.itemCount,
        'count'
      )
    }, 5000)
  }

  /**
   * Get item from cache with performance tracking
   */
  async get<T>(
    key: string,
    storeName: string = NOTES_STORE
  ): Promise<CacheItem<T> | null> {
    const endTimer = performanceMonitor.startTimer('cache_get')
    this.stats.totalRequests++

    try {
      await this.ensureInitialized()
      if (!this.db) throw new Error('Database not initialized')

      const transaction = this.db.transaction([storeName], 'readonly')
      const store = transaction.objectStore(storeName)

      const item = await new Promise<CacheItem<T> | null>((resolve, reject) => {
        const request = store.get(key)
        request.onsuccess = () => resolve(request.result || null)
        request.onerror = () => reject(request.error)
      })

      if (item && !this.isExpired(item)) {
        this.stats.totalHits++
        performanceMonitor.track('cache_hit', 1, 'count')
        return item
      }

      if (item && this.isExpired(item)) {
        // Clean up expired item
        this.delete(key, storeName)
        performanceMonitor.track('cache_expired', 1, 'count')
      }

      this.stats.totalMisses++
      performanceMonitor.track('cache_miss', 1, 'count')
      return null
    } finally {
      endTimer()
    }
  }

  /**
   * Set item in cache with intelligent storage management
   */
  async set<T>(
    key: string,
    value: T,
    options: {
      storeName?: string
      ttl?: number
      metadata?: Record<string, unknown>
      etag?: string
    } = {}
  ): Promise<void> {
    const endTimer = performanceMonitor.startTimer('cache_set')

    try {
      await this.ensureInitialized()
      if (!this.db) throw new Error('Database not initialized')

      const {
        storeName = NOTES_STORE,
        ttl = 24 * 60 * 60 * 1000, // 24 hours default
        metadata = {},
        etag,
      } = options

      const item: CacheItem<T> = {
        key,
        value,
        timestamp: Date.now(),
        expiresAt: Date.now() + ttl,
        metadata,
        version: DB_VERSION.toString(),
        etag,
      }

      const transaction = this.db.transaction([storeName], 'readwrite')
      const store = transaction.objectStore(storeName)

      await new Promise<void>((resolve, reject) => {
        const request = store.put(item)
        request.onsuccess = () => resolve()
        request.onerror = () => reject(request.error)
      })

      performanceMonitor.track('cache_write', 1, 'count')

      // Trigger cleanup if needed
      this.scheduleCleanup(storeName)
    } finally {
      endTimer()
    }
  }

  /**
   * Delete item from cache
   */
  async delete(key: string, storeName: string = NOTES_STORE): Promise<void> {
    await this.ensureInitialized()
    if (!this.db) throw new Error('Database not initialized')

    const transaction = this.db.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)

    await new Promise<void>((resolve, reject) => {
      const request = store.delete(key)
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })

    performanceMonitor.track('cache_delete', 1, 'count')
  }

  /**
   * Cache multiple notes efficiently
   */
  async setNotes(notes: Note[], userId: string): Promise<void> {
    const endTimer = performanceMonitor.startTimer('cache_batch_notes')

    try {
      await this.ensureInitialized()
      if (!this.db) throw new Error('Database not initialized')

      const transaction = this.db.transaction([NOTES_STORE], 'readwrite')
      const store = transaction.objectStore(NOTES_STORE)

      const promises = notes.map((note) => {
        const item: CacheItem<Note> = {
          key: `note:${note.id}`,
          value: note,
          timestamp: Date.now(),
          expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          metadata: {
            noteId: note.id,
            userId,
            tags: note.tags || [],
            lastModified: note.updated_at,
          },
          version: DB_VERSION.toString(),
        }

        return new Promise<void>((resolve, reject) => {
          const request = store.put(item)
          request.onsuccess = () => resolve()
          request.onerror = () => reject(request.error)
        })
      })

      await Promise.all(promises)
      performanceMonitor.track('cache_batch_write', notes.length, 'count')
    } finally {
      endTimer()
    }
  }

  /**
   * Get cached notes with smart filtering
   */
  async getNotes(
    userId: string,
    options: {
      limit?: number
      tags?: string[]
      searchQuery?: string
    } = {}
  ): Promise<Note[]> {
    const endTimer = performanceMonitor.startTimer('cache_get_notes')

    try {
      await this.ensureInitialized()
      if (!this.db) throw new Error('Database not initialized')

      const transaction = this.db.transaction([NOTES_STORE], 'readonly')
      const store = transaction.objectStore(NOTES_STORE)
      const index = store.index('userId')

      const notes = await new Promise<Note[]>((resolve, reject) => {
        const request = index.getAll(userId)
        request.onsuccess = () => {
          const items = request.result as CacheItem<Note>[]
          const validNotes = items
            .filter((item) => !this.isExpired(item))
            .map((item) => item.value)
            .sort(
              (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
            )

          resolve(validNotes)
        }
        request.onerror = () => reject(request.error)
      })

      // Apply filters
      let filteredNotes = notes

      if (options.tags?.length) {
        filteredNotes = filteredNotes.filter((note) =>
          options.tags!.some((tag) => note.tags?.includes(tag))
        )
      }

      if (options.searchQuery) {
        const query = options.searchQuery.toLowerCase()
        filteredNotes = filteredNotes.filter(
          (note) =>
            note.title.toLowerCase().includes(query) ||
            (note.content && note.content.toLowerCase().includes(query))
        )
      }

      if (options.limit) {
        filteredNotes = filteredNotes.slice(0, options.limit)
      }

      this.stats.totalHits++
      return filteredNotes
    } finally {
      endTimer()
    }
  }

  /**
   * Cache search results for instant search
   */
  async setSearchResults(
    query: string,
    results: Note[],
    metadata: Record<string, unknown> = {}
  ): Promise<void> {
    const key = `search:${this.hashString(query)}`
    await this.set(key, results, {
      storeName: SEARCH_RESULTS_STORE,
      ttl: 5 * 60 * 1000, // 5 minutes for search results
      metadata: { query, timestamp: Date.now(), ...metadata },
    })
  }

  /**
   * Get cached search results
   */
  async getSearchResults(query: string): Promise<Note[] | null> {
    const key = `search:${this.hashString(query)}`
    const cached = await this.get<Note[]>(key, SEARCH_RESULTS_STORE)
    return cached?.value || null
  }

  /**
   * Preload related notes based on user behavior
   */
  async preloadRelatedNotes(
    currentNoteId: string,
    userId: string
  ): Promise<void> {
    const endTimer = performanceMonitor.startTimer('cache_preload')

    try {
      // Get current note from cache
      const currentNote = await this.get<Note>(`note:${currentNoteId}`)
      if (!currentNote) return

      // Get recently viewed notes
      const recentNotes = await this.getNotes(userId, { limit: 20 })

      // Find related notes based on tags
      const relatedNotes = recentNotes.filter((note) =>
        note.tags?.some((tag) => currentNote.value.tags?.includes(tag))
      )

      // Preload content for related notes (simulate)
      await Promise.all(
        relatedNotes.slice(0, 5).map(async (note) => {
          // In real implementation, this would fetch full content
          await new Promise((resolve) => setTimeout(resolve, 10))
        })
      )

      performanceMonitor.track(
        'cache_preload_count',
        relatedNotes.length,
        'count'
      )
    } finally {
      endTimer()
    }
  }

  /**
   * Intelligent cache cleanup
   */
  private async scheduleCleanup(storeName: string): Promise<void> {
    // Cleanup every 100 writes or when storage is getting full
    const shouldCleanup = Math.random() < 0.01 // 1% chance per write

    if (shouldCleanup) {
      setTimeout(() => this.cleanup(storeName), 0)
    }
  }

  /**
   * Clean up expired and least recently used items
   */
  async cleanup(storeName: string = NOTES_STORE): Promise<void> {
    const endTimer = performanceMonitor.startTimer('cache_cleanup')

    try {
      await this.ensureInitialized()
      if (!this.db) throw new Error('Database not initialized')

      const transaction = this.db.transaction([storeName], 'readwrite')
      const store = transaction.objectStore(storeName)
      const index = store.index('timestamp')

      // Get all items sorted by timestamp
      const items = await new Promise<CacheItem[]>((resolve, reject) => {
        const request = index.getAll()
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })

      const now = Date.now()
      let deletedCount = 0

      // Delete expired items
      for (const item of items) {
        if (this.isExpired(item)) {
          await new Promise<void>((resolve, reject) => {
            const request = store.delete(item.key)
            request.onsuccess = () => resolve()
            request.onerror = () => reject(request.error)
          })
          deletedCount++
        }
      }

      // If still too many items, delete oldest
      const remainingItems = items.filter((item) => !this.isExpired(item))
      const maxItems = 10000 // Maximum items per store

      if (remainingItems.length > maxItems) {
        const itemsToDelete = remainingItems
          .sort((a, b) => a.timestamp - b.timestamp)
          .slice(0, remainingItems.length - maxItems)

        for (const item of itemsToDelete) {
          await new Promise<void>((resolve, reject) => {
            const request = store.delete(item.key)
            request.onsuccess = () => resolve()
            request.onerror = () => reject(request.error)
          })
          deletedCount++
        }
      }

      performanceMonitor.track('cache_cleanup_deleted', deletedCount, 'count')
    } finally {
      endTimer()
    }
  }

  /**
   * Get cache statistics
   */
  getStatistics(): CacheStatistics {
    this.stats.hitRate =
      this.stats.totalRequests > 0
        ? (this.stats.totalHits / this.stats.totalRequests) * 100
        : 0

    return { ...this.stats }
  }

  /**
   * Clear all cached data
   */
  async clear(): Promise<void> {
    await this.ensureInitialized()
    if (!this.db) throw new Error('Database not initialized')

    const stores = [
      NOTES_STORE,
      SEARCH_RESULTS_STORE,
      METADATA_STORE,
      USER_PREFERENCES_STORE,
    ]
    const transaction = this.db.transaction(stores, 'readwrite')

    await Promise.all(
      stores.map(
        (storeName) =>
          new Promise<void>((resolve, reject) => {
            const store = transaction.objectStore(storeName)
            const request = store.clear()
            request.onsuccess = () => resolve()
            request.onerror = () => reject(request.error)
          })
      )
    )

    this.stats = {
      hitRate: 0,
      totalRequests: 0,
      totalHits: 0,
      totalMisses: 0,
      storageUsed: 0,
      itemCount: 0,
    }

    performanceMonitor.track('cache_cleared', 1, 'count')
  }

  /**
   * Check if cache item is expired
   */
  private isExpired(item: CacheItem): boolean {
    return item.expiresAt ? Date.now() > item.expiresAt : false
  }

  /**
   * Hash string for consistent keys
   */
  private hashString(str: string): string {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return hash.toString(36)
  }

  /**
   * Update statistics
   */
  private async updateStatistics(): Promise<void> {
    try {
      await this.ensureInitialized()
      if (!this.db) return

      // Estimate storage used (simplified)
      this.stats.storageUsed = this.stats.itemCount * 1000 // Rough estimate

      // Get actual item count
      const transaction = this.db.transaction([NOTES_STORE], 'readonly')
      const store = transaction.objectStore(NOTES_STORE)

      this.stats.itemCount = await new Promise<number>((resolve, reject) => {
        const request = store.count()
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
    } catch (error) {
      console.warn('Failed to update cache statistics:', error)
    }
  }

  /**
   * Ensure database is initialized
   */
  private async ensureInitialized(): Promise<void> {
    if (!this.isInitialized && this.initPromise) {
      await this.initPromise
    }
  }
}

// Singleton instance
export const indexedDBCache = new IndexedDBCache()

// Export types for external use
export type { CacheItem, CacheConfig, CacheStatistics }
