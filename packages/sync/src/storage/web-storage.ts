// IndexedDB storage adapter for Web platform

import type { StorageAdapter, Note, ChangeSet } from '../types'

/**
 * IndexedDB-based storage adapter for web browsers
 */
export class WebStorageAdapter implements StorageAdapter {
  private dbName = 'notable-sync'
  private dbVersion = 1
  private db: IDBDatabase | null = null

  constructor() {
    this.initialize()
  }

  /**
   * Initialize IndexedDB connection
   */
  private async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion)

      request.onerror = () => {
        reject(new Error('Failed to open IndexedDB'))
      }

      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result

        // Create notes store
        if (!db.objectStoreNames.contains('notes')) {
          const notesStore = db.createObjectStore('notes', { keyPath: 'id' })
          notesStore.createIndex('parent_id', 'parent_id', { unique: false })
          notesStore.createIndex('deleted', 'deleted', { unique: false })
          notesStore.createIndex('last_modified', 'last_modified', { unique: false })
        }

        // Create changes store
        if (!db.objectStoreNames.contains('changes')) {
          const changesStore = db.createObjectStore('changes', { keyPath: 'id' })
          changesStore.createIndex('note_id', 'note_id', { unique: false })
          changesStore.createIndex('applied', 'applied', { unique: false })
          changesStore.createIndex('timestamp', 'timestamp', { unique: false })
        }

        // Create metadata store
        if (!db.objectStoreNames.contains('metadata')) {
          db.createObjectStore('metadata', { keyPath: 'key' })
        }
      }
    })
  }

  /**
   * Ensure database is initialized
   */
  private async ensureDb(): Promise<IDBDatabase> {
    if (!this.db) {
      await this.initialize()
      if (!this.db) {
        throw new Error('Failed to initialize IndexedDB')
      }
    }
    return this.db
  }

  /**
   * Get all notes from storage
   */
  async getAllNotes(): Promise<Note[]> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['notes'], 'readonly')
      const store = transaction.objectStore('notes')
      const request = store.getAll()

      request.onerror = () => reject(new Error('Failed to get all notes'))
      request.onsuccess = () => resolve(request.result || [])
    })
  }

  /**
   * Get a specific note by ID
   */
  async getNote(id: string): Promise<Note | null> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['notes'], 'readonly')
      const store = transaction.objectStore('notes')
      const request = store.get(id)

      request.onerror = () => reject(new Error(`Failed to get note ${id}`))
      request.onsuccess = () => resolve(request.result || null)
    })
  }

  /**
   * Save a note to storage
   */
  async saveNote(note: Note): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['notes'], 'readwrite')
      const store = transaction.objectStore('notes')
      const request = store.put(note)

      request.onerror = () => reject(new Error(`Failed to save note ${note.id}`))
      request.onsuccess = () => resolve()
    })
  }

  /**
   * Delete a note from storage
   */
  async deleteNote(id: string): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['notes'], 'readwrite')
      const store = transaction.objectStore('notes')
      const request = store.delete(id)

      request.onerror = () => reject(new Error(`Failed to delete note ${id}`))
      request.onsuccess = () => resolve()
    })
  }

  /**
   * Get all pending changes
   */
  async getPendingChanges(): Promise<ChangeSet[]> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['changes'], 'readonly')
      const store = transaction.objectStore('changes')
      const index = store.index('applied')
      const request = index.getAll(IDBKeyRange.only(false)) // Get unapplied changes

      request.onerror = () => reject(new Error('Failed to get pending changes'))
      request.onsuccess = () => resolve(request.result || [])
    })
  }

  /**
   * Save a change to storage
   */
  async saveChange(change: ChangeSet): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['changes'], 'readwrite')
      const store = transaction.objectStore('changes')
      const request = store.put(change)

      request.onerror = () => reject(new Error(`Failed to save change ${change.id}`))
      request.onsuccess = () => resolve()
    })
  }

  /**
   * Mark a change as applied
   */
  async markChangeApplied(changeId: string): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['changes'], 'readwrite')
      const store = transaction.objectStore('changes')
      
      const getRequest = store.get(changeId)
      getRequest.onsuccess = () => {
        const change = getRequest.result
        if (change) {
          change.applied = true
          const putRequest = store.put(change)
          putRequest.onerror = () => reject(new Error(`Failed to mark change ${changeId} as applied`))
          putRequest.onsuccess = () => resolve()
        } else {
          resolve() // Change doesn't exist, consider it applied
        }
      }
      getRequest.onerror = () => reject(new Error(`Failed to get change ${changeId}`))
    })
  }

  /**
   * Clear all applied changes (cleanup)
   */
  async clearAppliedChanges(): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['changes'], 'readwrite')
      const store = transaction.objectStore('changes')
      const index = store.index('applied')
      const request = index.openCursor(IDBKeyRange.only(true))

      request.onerror = () => reject(new Error('Failed to clear applied changes'))
      
      request.onsuccess = () => {
        const cursor = request.result
        if (cursor) {
          cursor.delete()
          cursor.continue()
        } else {
          resolve()
        }
      }
    })
  }

  /**
   * Get last sync timestamp
   */
  async getLastSyncTime(): Promise<string | null> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['metadata'], 'readonly')
      const store = transaction.objectStore('metadata')
      const request = store.get('last_sync_time')

      request.onerror = () => reject(new Error('Failed to get last sync time'))
      request.onsuccess = () => {
        const result = request.result
        resolve(result ? result.value : null)
      }
    })
  }

  /**
   * Set last sync timestamp
   */
  async setLastSyncTime(timestamp: string): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['metadata'], 'readwrite')
      const store = transaction.objectStore('metadata')
      const request = store.put({ key: 'last_sync_time', value: timestamp })

      request.onerror = () => reject(new Error('Failed to set last sync time'))
      request.onsuccess = () => resolve()
    })
  }

  /**
   * Get device ID
   */
  async getDeviceId(): Promise<string> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['metadata'], 'readonly')
      const store = transaction.objectStore('metadata')
      const request = store.get('device_id')

      request.onerror = () => reject(new Error('Failed to get device ID'))
      request.onsuccess = () => {
        const result = request.result
        resolve(result ? result.value : '')
      }
    })
  }

  /**
   * Set device ID
   */
  async setDeviceId(deviceId: string): Promise<void> {
    const db = await this.ensureDb()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['metadata'], 'readwrite')
      const store = transaction.objectStore('metadata')
      const request = store.put({ key: 'device_id', value: deviceId })

      request.onerror = () => reject(new Error('Failed to set device ID'))
      request.onsuccess = () => resolve()
    })
  }

  /**
   * Perform database cleanup and optimization
   */
  async vacuum(): Promise<void> {
    // Clear old applied changes (older than 7 days)
    const db = await this.ensureDb()
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['changes'], 'readwrite')
      const store = transaction.objectStore('changes')
      const index = store.index('timestamp')
      const request = index.openCursor(IDBKeyRange.upperBound(sevenDaysAgo))

      request.onerror = () => reject(new Error('Failed to vacuum database'))
      
      request.onsuccess = () => {
        const cursor = request.result
        if (cursor) {
          const change = cursor.value
          if (change.applied) {
            cursor.delete()
          }
          cursor.continue()
        } else {
          resolve()
        }
      }
    })
  }
}

/**
 * Factory function to create a web storage adapter
 */
export function createWebStorageAdapter(): StorageAdapter {
  return new WebStorageAdapter()
}