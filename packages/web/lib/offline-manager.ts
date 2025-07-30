/**
 * Offline Manager
 * Handles offline operations, sync queue, and conflict resolution
 */

import type { Note } from '@/types/note'
import { match } from 'ts-pattern'

export interface SyncQueueItem {
  id: string
  type: 'create' | 'update' | 'delete'
  table: 'notes' | 'folders'
  data: Record<string, unknown>
  timestamp: number
  retries: number
  status: 'pending' | 'syncing' | 'failed' | 'conflict'
  error?: string
  conflictData?: Record<string, unknown>
}

export interface ConflictResolution {
  strategy: 'local' | 'remote' | 'merge' | 'manual'
  resolvedData?: Record<string, unknown>
}

export interface OfflineStatus {
  isOnline: boolean
  lastSync: Date | null
  pendingChanges: number
  conflicts: number
}

const DB_NAME = 'notable-offline'
const DB_VERSION = 1
const SYNC_QUEUE_STORE = 'sync_queue'
const NOTES_CACHE_STORE = 'notes_cache'
const CONFLICTS_STORE = 'conflicts'

class OfflineManager {
  private db: IDBDatabase | null = null
  private syncInProgress = false
  private onlineStatusListeners: ((status: boolean) => void)[] = []
  private syncQueueListeners: ((items: SyncQueueItem[]) => void)[] = []
  private conflictListeners: ((conflicts: SyncQueueItem[]) => void)[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.initDB()
      this.setupEventListeners()
    }
  }

  /**
   * Initialize IndexedDB
   */
  private initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result

        // Sync queue store
        if (!db.objectStoreNames.contains(SYNC_QUEUE_STORE)) {
          const syncStore = db.createObjectStore(SYNC_QUEUE_STORE, {
            keyPath: 'id',
          })
          syncStore.createIndex('status', 'status', { unique: false })
          syncStore.createIndex('timestamp', 'timestamp', { unique: false })
        }

        // Notes cache store
        if (!db.objectStoreNames.contains(NOTES_CACHE_STORE)) {
          const notesStore = db.createObjectStore(NOTES_CACHE_STORE, {
            keyPath: 'id',
          })
          notesStore.createIndex('updatedAt', 'updatedAt', { unique: false })
        }

        // Conflicts store
        if (!db.objectStoreNames.contains(CONFLICTS_STORE)) {
          const conflictsStore = db.createObjectStore(CONFLICTS_STORE, {
            keyPath: 'id',
          })
          conflictsStore.createIndex('timestamp', 'timestamp', {
            unique: false,
          })
        }
      }
    })
  }

  /**
   * Setup event listeners for online/offline status
   */
  private setupEventListeners(): void {
    window.addEventListener('online', () => {
      this.notifyOnlineStatus(true)
      this.processSyncQueue()
    })

    window.addEventListener('offline', () => {
      this.notifyOnlineStatus(false)
    })

    // Listen for storage events (cross-tab sync)
    window.addEventListener('storage', (event) => {
      if (event.key === 'notable-sync-trigger') {
        this.processSyncQueue()
      }
    })

    // Listen for service worker messages
    navigator.serviceWorker?.addEventListener('message', (event) => {
      if (event.data?.type === 'SYNC_NOTES') {
        this.processSyncQueue()
      }
    })
  }

  /**
   * Check if online
   */
  isOnline(): boolean {
    return navigator.onLine
  }

  /**
   * Get offline status
   */
  async getOfflineStatus(): Promise<OfflineStatus> {
    const pendingItems = await this.getSyncQueue()
    const conflicts = pendingItems.filter((item) => item.status === 'conflict')

    return {
      isOnline: this.isOnline(),
      lastSync: await this.getLastSyncTime(),
      pendingChanges: pendingItems.filter((item) => item.status === 'pending')
        .length,
      conflicts: conflicts.length,
    }
  }

  /**
   * Add item to sync queue
   */
  async addToSyncQueue(
    item: Omit<SyncQueueItem, 'id' | 'timestamp' | 'retries'>
  ): Promise<void> {
    if (!this.db) await this.initDB()

    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction([SYNC_QUEUE_STORE], 'readwrite')
    const store = transaction.objectStore(SYNC_QUEUE_STORE)

    const queueItem: SyncQueueItem = {
      ...item,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      retries: 0,
      status: 'pending',
    }

    await new Promise((resolve, reject) => {
      const request = store.add(queueItem)
      request.onsuccess = () => resolve(undefined)
      request.onerror = () => reject(request.error)
    })

    this.notifySyncQueueUpdate()

    // Try to sync immediately if online
    if (this.isOnline()) {
      this.processSyncQueue()
    }
  }

  /**
   * Get all items in sync queue
   */
  async getSyncQueue(): Promise<SyncQueueItem[]> {
    if (!this.db) await this.initDB()

    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction([SYNC_QUEUE_STORE], 'readonly')
    const store = transaction.objectStore(SYNC_QUEUE_STORE)

    return new Promise((resolve, reject) => {
      const request = store.getAll()
      request.onsuccess = () => resolve(request.result || [])
      request.onerror = () => reject(request.error)
    })
  }

  /**
   * Process sync queue
   */
  async processSyncQueue(): Promise<void> {
    if (!this.isOnline() || this.syncInProgress) return

    this.syncInProgress = true

    try {
      const queue = await this.getSyncQueue()
      const pendingItems = queue.filter((item) => item.status === 'pending')

      for (const item of pendingItems) {
        await this.syncItem(item)
      }

      // Store last sync time
      localStorage.setItem('notable-last-sync', new Date().toISOString())
    } finally {
      this.syncInProgress = false
    }
  }

  /**
   * Sync individual item
   */
  private async syncItem(item: SyncQueueItem): Promise<void> {
    if (!this.db) return

    const transaction = this.db.transaction([SYNC_QUEUE_STORE], 'readwrite')
    const store = transaction.objectStore(SYNC_QUEUE_STORE)

    try {
      // Update status to syncing
      item.status = 'syncing'
      await this.updateSyncItem(item)

      // Simulate API call (replace with actual Supabase call)
      // This is where you would make the actual API request
      // For now, we'll just simulate success/failure
      const success = Math.random() > 0.1 // 90% success rate for demo

      if (success) {
        // Remove from queue on success
        await new Promise((resolve, reject) => {
          const request = store.delete(item.id)
          request.onsuccess = () => resolve(undefined)
          request.onerror = () => reject(request.error)
        })
      } else {
        // Handle failure
        item.status = 'failed'
        item.retries++
        item.error = 'Network error'

        if (item.retries > 3) {
          item.status = 'conflict'
        }

        await this.updateSyncItem(item)
      }
    } catch (error) {
      item.status = 'failed'
      item.error = error instanceof Error ? error.message : 'Unknown error'
      await this.updateSyncItem(item)
    }

    this.notifySyncQueueUpdate()
  }

  /**
   * Update sync item
   */
  private async updateSyncItem(item: SyncQueueItem): Promise<void> {
    if (!this.db) return

    const transaction = this.db.transaction([SYNC_QUEUE_STORE], 'readwrite')
    const store = transaction.objectStore(SYNC_QUEUE_STORE)

    await new Promise((resolve, reject) => {
      const request = store.put(item)
      request.onsuccess = () => resolve(undefined)
      request.onerror = () => reject(request.error)
    })
  }

  /**
   * Resolve conflict
   */
  async resolveConflict(
    itemId: string,
    resolution: ConflictResolution
  ): Promise<void> {
    if (!this.db) return

    const transaction = this.db.transaction([SYNC_QUEUE_STORE], 'readwrite')
    const store = transaction.objectStore(SYNC_QUEUE_STORE)

    const item = await new Promise<SyncQueueItem>((resolve, reject) => {
      const request = store.get(itemId)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })

    if (!item || item.status !== 'conflict') return

    const shouldDelete = await match(resolution.strategy)
      .with('local', () => {
        // Keep local changes, retry sync
        item.status = 'pending'
        item.retries = 0
        return false
      })
      .with('remote', 'manual', async () => {
        // Discard local changes or manually resolved
        await new Promise((resolve, reject) => {
          const request = store.delete(itemId)
          request.onsuccess = () => resolve(undefined)
          request.onerror = () => reject(request.error)
        })
        return true
      })
      .with('merge', () => {
        // Apply merged data
        if (resolution.resolvedData) {
          item.data = resolution.resolvedData
          item.status = 'pending'
          item.retries = 0
        }
        return false
      })
      .exhaustive()

    this.notifySyncQueueUpdate()

    if (!shouldDelete) {
      await this.updateSyncItem(item)
    }

    // Try to sync again if online
    if (this.isOnline()) {
      this.processSyncQueue()
    }
  }

  /**
   * Cache note for offline access
   */
  async cacheNote(note: Note): Promise<void> {
    if (!this.db) await this.initDB()

    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction([NOTES_CACHE_STORE], 'readwrite')
    const store = transaction.objectStore(NOTES_CACHE_STORE)

    await new Promise((resolve, reject) => {
      const request = store.put(note)
      request.onsuccess = () => resolve(undefined)
      request.onerror = () => reject(request.error)
    })
  }

  /**
   * Get cached notes
   */
  async getCachedNotes(): Promise<Note[]> {
    if (!this.db) await this.initDB()

    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction([NOTES_CACHE_STORE], 'readonly')
    const store = transaction.objectStore(NOTES_CACHE_STORE)

    return new Promise((resolve, reject) => {
      const request = store.getAll()
      request.onsuccess = () => resolve(request.result || [])
      request.onerror = () => reject(request.error)
    })
  }

  /**
   * Clear all offline data
   */
  async clearOfflineData(): Promise<void> {
    if (!this.db) await this.initDB()

    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction(
      [SYNC_QUEUE_STORE, NOTES_CACHE_STORE, CONFLICTS_STORE],
      'readwrite'
    )

    const stores = [SYNC_QUEUE_STORE, NOTES_CACHE_STORE, CONFLICTS_STORE]

    await Promise.all(
      stores.map(
        (storeName) =>
          new Promise((resolve, reject) => {
            const store = transaction.objectStore(storeName)
            const request = store.clear()
            request.onsuccess = () => resolve(undefined)
            request.onerror = () => reject(request.error)
          })
      )
    )

    localStorage.removeItem('notable-last-sync')
    this.notifySyncQueueUpdate()
  }

  /**
   * Get last sync time
   */
  private getLastSyncTime(): Date | null {
    const lastSync = localStorage.getItem('notable-last-sync')
    return lastSync ? new Date(lastSync) : null
  }

  /**
   * Subscribe to online status changes
   */
  onOnlineStatusChange(callback: (status: boolean) => void): () => void {
    this.onlineStatusListeners.push(callback)
    return () => {
      this.onlineStatusListeners = this.onlineStatusListeners.filter(
        (cb) => cb !== callback
      )
    }
  }

  /**
   * Subscribe to sync queue updates
   */
  onSyncQueueUpdate(callback: (items: SyncQueueItem[]) => void): () => void {
    this.syncQueueListeners.push(callback)
    return () => {
      this.syncQueueListeners = this.syncQueueListeners.filter(
        (cb) => cb !== callback
      )
    }
  }

  /**
   * Subscribe to conflict updates
   */
  onConflictUpdate(callback: (conflicts: SyncQueueItem[]) => void): () => void {
    this.conflictListeners.push(callback)
    return () => {
      this.conflictListeners = this.conflictListeners.filter(
        (cb) => cb !== callback
      )
    }
  }

  /**
   * Notify online status listeners
   */
  private notifyOnlineStatus(status: boolean): void {
    this.onlineStatusListeners.forEach((callback) => callback(status))
  }

  /**
   * Notify sync queue listeners
   */
  private async notifySyncQueueUpdate(): Promise<void> {
    const queue = await this.getSyncQueue()
    this.syncQueueListeners.forEach((callback) => callback(queue))

    // Notify conflict listeners
    const conflicts = queue.filter((item) => item.status === 'conflict')
    this.conflictListeners.forEach((callback) => callback(conflicts))
  }
}

// Singleton instance
export const offlineManager = new OfflineManager()
