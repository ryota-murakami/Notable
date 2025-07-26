// AsyncStorage + SQLite storage adapter for React Native

import type { ChangeSet, Note, StorageAdapter } from '../types'

// Mock AsyncStorage interface - actual implementation would use @react-native-async-storage/async-storage
interface AsyncStorageInterface {
  getItem(key: string): Promise<string | null>
  setItem(key: string, value: string): Promise<void>
  removeItem(key: string): Promise<void>
  getAllKeys(): Promise<string[]>
  multiGet(keys: string[]): Promise<[string, string | null][]>
  multiSet(keyValuePairs: [string, string][]): Promise<void>
  clear(): Promise<void>
}

// Mock SQLite interface for React Native - would use react-native-sqlite-storage or expo-sqlite
interface MobileSqliteDatabase {
  transaction(fn: (tx: MobileSqliteTransaction) => void): Promise<void>
  readTransaction(fn: (tx: MobileSqliteTransaction) => void): Promise<void>
  close(): Promise<void>
}

interface MobileSqliteTransaction {
  executeSql(
    sqlStatement: string,
    args?: unknown[],
    successCallback?: (
      tx: MobileSqliteTransaction,
      result: MobileSqliteResultSet,
    ) => void,
    errorCallback?: (tx: MobileSqliteTransaction, error: Error) => boolean,
  ): void
}

interface MobileSqliteResultSet {
  rows: {
    length: number
    item(index: number): any
    raw(): any[]
  }
  rowsAffected: number
  insertId?: number
}

/**
 * Mobile storage adapter using AsyncStorage for metadata and SQLite for notes/changes
 */
export class MobileStorageAdapter implements StorageAdapter {
  private asyncStorage: AsyncStorageInterface
  private db: MobileSqliteDatabase | null = null
  private dbName: string

  constructor(asyncStorage?: AsyncStorageInterface, dbName?: string) {
    this.asyncStorage = asyncStorage || this.getMockAsyncStorage()
    this.dbName = dbName || 'notable-sync.db'
    this.initialize()
  }

  /**
   * Mock AsyncStorage for development - replace with real implementation
   */
  private getMockAsyncStorage(): AsyncStorageInterface {
    const storage = new Map<string, string>()

    return {
      getItem: async (key: string) => storage.get(key) || null,
      setItem: async (key: string, value: string) => {
        storage.set(key, value)
      },
      removeItem: async (key: string) => {
        storage.delete(key)
      },
      getAllKeys: async () => Array.from(storage.keys()),
      multiGet: async (keys: string[]) =>
        keys.map((key) => [key, storage.get(key) || null]),
      multiSet: async (pairs: [string, string][]) => {
        pairs.forEach(([key, value]) => storage.set(key, value))
      },
      clear: async () => {
        storage.clear()
      },
    }
  }

  /**
   * Initialize storage
   */
  private async initialize(): Promise<void> {
    try {
      this.db = await this.openDatabase(this.dbName)
      await this.createTables()
    } catch (error) {
      console.error('Failed to initialize mobile storage:', error)
      throw error
    }
  }

  /**
   * Open SQLite database - mock implementation
   */
  private async openDatabase(name: string): Promise<MobileSqliteDatabase> {
    // In real implementation: SQLite.openDatabase({ name, location: 'default' })
    console.log(`Opening mobile SQLite database: ${name}`)

    // Mock implementation
    return {
      transaction: async (fn: (tx: MobileSqliteTransaction) => void) => {
        const mockTx: MobileSqliteTransaction = {
          executeSql: (sql, args, successCb, _errorCb) => {
            console.log(`Executing SQL: ${sql}`, args)
            if (successCb) {
              successCb(mockTx, {
                rows: { length: 0, item: () => null, raw: () => [] },
                rowsAffected: 1,
              })
            }
          },
        }
        fn(mockTx)
      },
      readTransaction: async (fn: (tx: MobileSqliteTransaction) => void) => {
        const mockTx: MobileSqliteTransaction = {
          executeSql: (sql, args, successCb, _errorCb) => {
            console.log(`Read SQL: ${sql}`, args)
            if (successCb) {
              successCb(mockTx, {
                rows: { length: 0, item: () => null, raw: () => [] },
                rowsAffected: 0,
              })
            }
          },
        }
        fn(mockTx)
      },
      close: async () => console.log('Database closed'),
    }
  }

  /**
   * Create database tables
   */
  private async createTables(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    await this.db.transaction((tx) => {
      // Create notes table
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS notes (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL DEFAULT '',
          content TEXT DEFAULT '',
          is_folder INTEGER DEFAULT 0,
          parent_id TEXT,
          version INTEGER DEFAULT 1,
          device_id TEXT NOT NULL,
          last_modified TEXT NOT NULL,
          vector_clock TEXT DEFAULT '{}',
          synced_at TEXT,
          local_changes INTEGER DEFAULT 0,
          deleted INTEGER DEFAULT 0,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `)

      // Create changes table
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS changes (
          id TEXT PRIMARY KEY,
          note_id TEXT NOT NULL,
          operation TEXT NOT NULL,
          data TEXT NOT NULL,
          timestamp TEXT NOT NULL,
          device_id TEXT NOT NULL,
          vector_clock TEXT DEFAULT '{}',
          applied INTEGER DEFAULT 0
        )
      `)

      // Create indexes
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_notes_parent_id ON notes (parent_id)',
      )
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_notes_deleted ON notes (deleted)',
      )
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_notes_last_modified ON notes (last_modified)',
      )
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_changes_note_id ON changes (note_id)',
      )
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_changes_applied ON changes (applied)',
      )
      tx.executeSql(
        'CREATE INDEX IF NOT EXISTS idx_changes_timestamp ON changes (timestamp)',
      )
    })
  }

  /**
   * Convert SQLite row to Note object
   */
  private rowToNote(row: any): Note {
    return {
      id: row.id,
      title: row.title,
      content: row.content,
      is_folder: Boolean(row.is_folder),
      parent_id: row.parent_id,
      version: row.version,
      device_id: row.device_id,
      last_modified: row.last_modified,
      vector_clock: JSON.parse(row.vector_clock || '{}'),
      synced_at: row.synced_at,
      local_changes: Boolean(row.local_changes),
      deleted: Boolean(row.deleted),
      created_at: row.created_at,
      updated_at: row.updated_at,
    }
  }

  /**
   * Convert SQLite row to ChangeSet object
   */
  private rowToChange(row: any): ChangeSet {
    return {
      id: row.id,
      note_id: row.note_id,
      operation: row.operation,
      data: JSON.parse(row.data),
      timestamp: row.timestamp,
      device_id: row.device_id,
      vector_clock: JSON.parse(row.vector_clock || '{}'),
      applied: Boolean(row.applied),
    }
  }

  /**
   * Get all notes from storage
   */
  async getAllNotes(): Promise<Note[]> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.readTransaction((tx) => {
        tx.executeSql(
          'SELECT * FROM notes ORDER BY last_modified DESC',
          [],
          (_, result) => {
            const notes: Note[] = []
            for (let i = 0; i < result.rows.length; i++) {
              notes.push(this.rowToNote(result.rows.item(i)))
            }
            resolve(notes)
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Get a specific note by ID
   */
  async getNote(id: string): Promise<Note | null> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.readTransaction((tx) => {
        tx.executeSql(
          'SELECT * FROM notes WHERE id = ?',
          [id],
          (_, result) => {
            if (result.rows.length > 0) {
              resolve(this.rowToNote(result.rows.item(0)))
            } else {
              resolve(null)
            }
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Save a note to storage
   */
  async saveNote(note: Note): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          `INSERT OR REPLACE INTO notes (
            id, title, content, is_folder, parent_id, version, device_id,
            last_modified, vector_clock, synced_at, local_changes, deleted,
            created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            note.id,
            note.title,
            note.content,
            note.is_folder ? 1 : 0,
            note.parent_id,
            note.version,
            note.device_id,
            note.last_modified,
            JSON.stringify(note.vector_clock),
            note.synced_at,
            note.local_changes ? 1 : 0,
            note.deleted ? 1 : 0,
            note.created_at,
            note.updated_at,
          ],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Delete a note from storage
   */
  async deleteNote(id: string): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM notes WHERE id = ?',
          [id],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Get all pending changes
   */
  async getPendingChanges(): Promise<ChangeSet[]> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.readTransaction((tx) => {
        tx.executeSql(
          'SELECT * FROM changes WHERE applied = 0 ORDER BY timestamp ASC',
          [],
          (_, result) => {
            const changes: ChangeSet[] = []
            for (let i = 0; i < result.rows.length; i++) {
              changes.push(this.rowToChange(result.rows.item(i)))
            }
            resolve(changes)
          },
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Save a change to storage
   */
  async saveChange(change: ChangeSet): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          `INSERT OR REPLACE INTO changes (
            id, note_id, operation, data, timestamp, device_id, vector_clock, applied
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            change.id,
            change.note_id,
            change.operation,
            JSON.stringify(change.data),
            change.timestamp,
            change.device_id,
            JSON.stringify(change.vector_clock),
            change.applied ? 1 : 0,
          ],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Mark a change as applied
   */
  async markChangeApplied(changeId: string): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          'UPDATE changes SET applied = 1 WHERE id = ?',
          [changeId],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Clear all applied changes (cleanup)
   */
  async clearAppliedChanges(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM changes WHERE applied = 1',
          [],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Get last sync timestamp from AsyncStorage
   */
  async getLastSyncTime(): Promise<string | null> {
    return await this.asyncStorage.getItem('notable:last_sync_time')
  }

  /**
   * Set last sync timestamp in AsyncStorage
   */
  async setLastSyncTime(timestamp: string): Promise<void> {
    await this.asyncStorage.setItem('notable:last_sync_time', timestamp)
  }

  /**
   * Get device ID from AsyncStorage
   */
  async getDeviceId(): Promise<string> {
    const deviceId = await this.asyncStorage.getItem('notable:device_id')
    return deviceId || ''
  }

  /**
   * Set device ID in AsyncStorage
   */
  async setDeviceId(deviceId: string): Promise<void> {
    await this.asyncStorage.setItem('notable:device_id', deviceId)
  }

  /**
   * Perform database cleanup and optimization
   */
  async vacuum(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString()

    return new Promise((resolve, reject) => {
      this.db!.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM changes WHERE applied = 1 AND timestamp < ?',
          [sevenDaysAgo],
          () => resolve(),
          (_, error) => {
            reject(error)
            return false
          },
        )
      })
    })
  }

  /**
   * Close database connection
   */
  async close(): Promise<void> {
    if (this.db) {
      await this.db.close()
      this.db = null
    }
  }
}

/**
 * Factory function to create a mobile storage adapter
 */
export function createMobileStorageAdapter(
  asyncStorage?: AsyncStorageInterface,
  dbName?: string,
): StorageAdapter {
  return new MobileStorageAdapter(asyncStorage, dbName)
}
