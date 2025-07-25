// SQLite storage adapter for Electron platform

import type { ChangeSet, Note, StorageAdapter } from '../types'

// Mock SQLite interface - actual implementation would use electron-sqlite or similar
interface SqliteDatabase {
  prepare(sql: string): SqliteStatement
  exec(sql: string): void
  close(): void
}

interface SqliteStatement {
  run(...params: unknown[]): { changes: number; lastInsertRowid: number }
  get(...params: unknown[]): unknown
  all(...params: unknown[]): unknown[]
  finalize(): void
}

/**
 * SQLite-based storage adapter for Electron
 */
export class ElectronStorageAdapter implements StorageAdapter {
  private db: SqliteDatabase | null = null
  private dbPath: string

  constructor(dbPath?: string) {
    this.dbPath = dbPath || 'notable-sync.db'
    this.initialize()
  }

  /**
   * Initialize SQLite database
   */
  private async initialize(): Promise<void> {
    try {
      // Note: In actual implementation, this would use a real SQLite library
      // For now, we'll use a mock interface for typing purposes
      this.db = await this.openDatabase(this.dbPath)
      await this.createTables()
    } catch (error) {
      console.error('Failed to initialize SQLite database:', error)
      throw error
    }
  }

  /**
   * Mock database opening - replace with actual SQLite implementation
   */
  private async openDatabase(path: string): Promise<SqliteDatabase> {
    // In real implementation: const Database = require('better-sqlite3')
    // return new Database(path)

    // Mock implementation for typing
    console.log(`Opening SQLite database at: ${path}`)
    return {
      prepare: (_sql: string) => ({
        run: (..._params: unknown[]) => ({ changes: 1, lastInsertRowid: 1 }),
        get: (..._params: unknown[]) => null,
        all: (..._params: unknown[]) => [],
        finalize: () => {},
      }),
      exec: (sql: string) => console.log(`Executing: ${sql}`),
      close: () => console.log('Database closed'),
    }
  }

  /**
   * Create database tables
   */
  private async createTables(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    // Create notes table
    this.db.exec(`
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
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (parent_id) REFERENCES notes (id)
      )
    `)

    // Create changes table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS changes (
        id TEXT PRIMARY KEY,
        note_id TEXT NOT NULL,
        operation TEXT NOT NULL CHECK (operation IN ('create', 'update', 'delete')),
        data TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        device_id TEXT NOT NULL,
        vector_clock TEXT DEFAULT '{}',
        applied INTEGER DEFAULT 0,
        FOREIGN KEY (note_id) REFERENCES notes (id)
      )
    `)

    // Create metadata table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS metadata (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `)

    // Create indexes for better performance
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_notes_parent_id ON notes (parent_id)',
    )
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_notes_deleted ON notes (deleted)',
    )
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_notes_last_modified ON notes (last_modified)',
    )
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_changes_note_id ON changes (note_id)',
    )
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_changes_applied ON changes (applied)',
    )
    this.db.exec(
      'CREATE INDEX IF NOT EXISTS idx_changes_timestamp ON changes (timestamp)',
    )
  }

  /**
   * Ensure database is initialized
   */
  private ensureDb(): SqliteDatabase {
    if (!this.db) {
      throw new Error('Database not initialized')
    }
    return this.db
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
   * Convert Note object to SQLite row data
   */
  private noteToRow(note: Note): any {
    return {
      id: note.id,
      title: note.title,
      content: note.content,
      is_folder: note.is_folder ? 1 : 0,
      parent_id: note.parent_id,
      version: note.version,
      device_id: note.device_id,
      last_modified: note.last_modified,
      vector_clock: JSON.stringify(note.vector_clock),
      synced_at: note.synced_at,
      local_changes: note.local_changes ? 1 : 0,
      deleted: note.deleted ? 1 : 0,
      created_at: note.created_at,
      updated_at: note.updated_at,
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
    const db = this.ensureDb()
    const stmt = db.prepare('SELECT * FROM notes ORDER BY last_modified DESC')
    const rows = stmt.all() as any[]
    stmt.finalize()

    return rows.map((row) => this.rowToNote(row))
  }

  /**
   * Get a specific note by ID
   */
  async getNote(id: string): Promise<Note | null> {
    const db = this.ensureDb()
    const stmt = db.prepare('SELECT * FROM notes WHERE id = ?')
    const row = stmt.get(id) as any
    stmt.finalize()

    return row ? this.rowToNote(row) : null
  }

  /**
   * Save a note to storage
   */
  async saveNote(note: Note): Promise<void> {
    const db = this.ensureDb()
    const row = this.noteToRow(note)

    const stmt = db.prepare(`
      INSERT OR REPLACE INTO notes (
        id, title, content, is_folder, parent_id, version, device_id,
        last_modified, vector_clock, synced_at, local_changes, deleted,
        created_at, updated_at
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `)

    stmt.run(
      row.id,
      row.title,
      row.content,
      row.is_folder,
      row.parent_id,
      row.version,
      row.device_id,
      row.last_modified,
      row.vector_clock,
      row.synced_at,
      row.local_changes,
      row.deleted,
      row.created_at,
      row.updated_at,
    )

    stmt.finalize()
  }

  /**
   * Delete a note from storage
   */
  async deleteNote(id: string): Promise<void> {
    const db = this.ensureDb()
    const stmt = db.prepare('DELETE FROM notes WHERE id = ?')
    stmt.run(id)
    stmt.finalize()
  }

  /**
   * Get all pending changes
   */
  async getPendingChanges(): Promise<ChangeSet[]> {
    const db = this.ensureDb()
    const stmt = db.prepare(
      'SELECT * FROM changes WHERE applied = 0 ORDER BY timestamp ASC',
    )
    const rows = stmt.all() as any[]
    stmt.finalize()

    return rows.map((row) => this.rowToChange(row))
  }

  /**
   * Save a change to storage
   */
  async saveChange(change: ChangeSet): Promise<void> {
    const db = this.ensureDb()

    const stmt = db.prepare(`
      INSERT OR REPLACE INTO changes (
        id, note_id, operation, data, timestamp, device_id, vector_clock, applied
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `)

    stmt.run(
      change.id,
      change.note_id,
      change.operation,
      JSON.stringify(change.data),
      change.timestamp,
      change.device_id,
      JSON.stringify(change.vector_clock),
      change.applied ? 1 : 0,
    )

    stmt.finalize()
  }

  /**
   * Mark a change as applied
   */
  async markChangeApplied(changeId: string): Promise<void> {
    const db = this.ensureDb()
    const stmt = db.prepare('UPDATE changes SET applied = 1 WHERE id = ?')
    stmt.run(changeId)
    stmt.finalize()
  }

  /**
   * Clear all applied changes (cleanup)
   */
  async clearAppliedChanges(): Promise<void> {
    const db = this.ensureDb()
    const stmt = db.prepare('DELETE FROM changes WHERE applied = 1')
    stmt.run()
    stmt.finalize()
  }

  /**
   * Get last sync timestamp
   */
  async getLastSyncTime(): Promise<string | null> {
    const db = this.ensureDb()
    const stmt = db.prepare('SELECT value FROM metadata WHERE key = ?')
    const row = stmt.get('last_sync_time') as any
    stmt.finalize()

    return row ? row.value : null
  }

  /**
   * Set last sync timestamp
   */
  async setLastSyncTime(timestamp: string): Promise<void> {
    const db = this.ensureDb()
    const stmt = db.prepare(
      'INSERT OR REPLACE INTO metadata (key, value) VALUES (?, ?)',
    )
    stmt.run('last_sync_time', timestamp)
    stmt.finalize()
  }

  /**
   * Get device ID
   */
  async getDeviceId(): Promise<string> {
    const db = this.ensureDb()
    const stmt = db.prepare('SELECT value FROM metadata WHERE key = ?')
    const row = stmt.get('device_id') as any
    stmt.finalize()

    return row ? row.value : ''
  }

  /**
   * Set device ID
   */
  async setDeviceId(deviceId: string): Promise<void> {
    const db = this.ensureDb()
    const stmt = db.prepare(
      'INSERT OR REPLACE INTO metadata (key, value) VALUES (?, ?)',
    )
    stmt.run('device_id', deviceId)
    stmt.finalize()
  }

  /**
   * Perform database cleanup and optimization
   */
  async vacuum(): Promise<void> {
    const db = this.ensureDb()

    // Clear old applied changes (older than 7 days)
    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString()
    const stmt = db.prepare(
      'DELETE FROM changes WHERE applied = 1 AND timestamp < ?',
    )
    stmt.run(sevenDaysAgo)
    stmt.finalize()

    // Vacuum the database to reclaim space
    db.exec('VACUUM')
  }

  /**
   * Close database connection
   */
  async close(): Promise<void> {
    if (this.db) {
      this.db.close()
      this.db = null
    }
  }
}

/**
 * Factory function to create an Electron storage adapter
 */
export function createElectronStorageAdapter(dbPath?: string): StorageAdapter {
  return new ElectronStorageAdapter(dbPath)
}
