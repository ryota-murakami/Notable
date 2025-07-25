/**
 * Yjs Document Persistence Utilities
 * 
 * This module handles saving and loading Yjs documents to/from the Supabase database.
 * It provides efficient storage and retrieval of collaborative document states.
 */

import { Doc, encodeStateAsUpdate, applyUpdate } from 'yjs'
import { SupabaseClient } from '@supabase/supabase-js'

export interface DocumentState {
  noteId: string
  userId: string
  state: Uint8Array
  version: number
  createdAt: Date
  updatedAt: Date
}

export interface PersistenceOptions {
  supabase: SupabaseClient
  tableName?: string
  autoSave?: boolean
  saveInterval?: number
  debug?: boolean
}

/**
 * Yjs Document Persistence Manager
 */
export class YjsDocumentPersistence {
  private supabase: SupabaseClient
  private tableName: string
  private autoSave: boolean
  private saveInterval: number
  private debug: boolean
  private saveTimer: ReturnType<typeof setInterval> | null = null
  private pendingSaves = new Map<string, Doc>()

  constructor(options: PersistenceOptions) {
    this.supabase = options.supabase
    this.tableName = options.tableName || 'yjs_documents'
    this.autoSave = options.autoSave ?? true
    this.saveInterval = options.saveInterval ?? 10000 // 10 seconds
    this.debug = options.debug ?? false

    if (this.autoSave) {
      this.startAutoSave()
    }
  }

  private log(...args: any[]) {
    if (this.debug) {
      console.log('[YjsDocumentPersistence]', ...args)
    }
  }

  /**
   * Save a Yjs document to the database
   */
  async saveDocument(noteId: string, doc: Doc, userId: string): Promise<void> {
    try {
      const state = encodeStateAsUpdate(doc)
      const version = this.getDocumentVersion(doc)

      this.log('Saving document', { noteId, stateSize: state.length, version })

      const { error } = await this.supabase
        .from(this.tableName)
        .upsert({
          note_id: noteId,
          state: state, // Store as binary data (BYTEA)
          version,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'note_id'
        })

      if (error) {
        throw new Error(`Failed to save document: ${error.message}`)
      }

      this.log('Document saved successfully', { noteId })

    } catch (error) {
      console.error('[YjsDocumentPersistence] Save error:', error)
      throw error
    }
  }

  /**
   * Load a Yjs document from the database
   */
  async loadDocument(noteId: string): Promise<Doc | null> {
    try {
      this.log('Loading document', { noteId })

      const { data, error } = await this.supabase
        .from(this.tableName)
        .select('*')
        .eq('note_id', noteId)
        .order('updated_at', { ascending: false })
        .limit(1)
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw new Error(`Failed to load document: ${error.message}`)
      }

      if (!data) {
        this.log('No saved document found, creating new one', { noteId })
        return new Doc()
      }

      // Reconstruct the document from saved state
      const doc = new Doc()
      const state = data.state // Already Uint8Array from BYTEA column
      applyUpdate(doc, state)

      this.log('Document loaded successfully', { 
        noteId, 
        stateSize: state.length,
        version: data.version 
      })

      return doc

    } catch (error) {
      console.error('[YjsDocumentPersistence] Load error:', error)
      return null
    }
  }

  /**
   * Get document version (based on state vector)
   */
  private getDocumentVersion(doc: Doc): number {
    // Simple version based on state vector length
    // In a real implementation, you might want a more sophisticated versioning system
    const stateVector = doc.getStateVector()
    return Array.from(stateVector).reduce((sum, val) => sum + val, 0)
  }

  /**
   * Queue a document for auto-save
   */
  queueSave(noteId: string, doc: Doc): void {
    if (!this.autoSave) return

    this.pendingSaves.set(noteId, doc)
    this.log('Document queued for save', { noteId, queueSize: this.pendingSaves.size })
  }

  /**
   * Start auto-save timer
   */
  private startAutoSave(): void {
    this.saveTimer = setInterval(async () => {
      if (this.pendingSaves.size === 0) return

      this.log('Processing auto-save queue', { queueSize: this.pendingSaves.size })

      for (const [noteId, doc] of this.pendingSaves.entries()) {
        try {
          // Use 'system' as userId for auto-saves
          await this.saveDocument(noteId, doc, 'system')
          this.pendingSaves.delete(noteId)
        } catch (error) {
          console.error(`[YjsDocumentPersistence] Auto-save failed for ${noteId}:`, error)
          // Keep in queue for retry
        }
      }
    }, this.saveInterval)
  }

  /**
   * Stop auto-save and clean up
   */
  destroy(): void {
    if (this.saveTimer) {
      clearInterval(this.saveTimer)
      this.saveTimer = null
    }
    this.pendingSaves.clear()
  }

  /**
   * Force save all pending documents
   */
  async flushPendingSaves(): Promise<void> {
    const saves = Array.from(this.pendingSaves.entries()).map(async ([noteId, doc]) => {
      try {
        await this.saveDocument(noteId, doc, 'system')
        this.pendingSaves.delete(noteId)
      } catch (error) {
        console.error(`[YjsDocumentPersistence] Flush save failed for ${noteId}:`, error)
      }
    })

    await Promise.allSettled(saves)
    this.log('Flushed all pending saves')
  }
}

/**
 * Create the Yjs documents table in Supabase
 */
export const createYjsDocumentsTable = `
-- Create table for storing Yjs document states
CREATE TABLE IF NOT EXISTS yjs_documents (
  id BIGSERIAL PRIMARY KEY,
  note_id TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL,
  state JSONB NOT NULL, -- Stored as JSON array of bytes
  version INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_yjs_documents_note_id ON yjs_documents(note_id);
CREATE INDEX IF NOT EXISTS idx_yjs_documents_updated_at ON yjs_documents(updated_at);

-- Enable RLS for security
ALTER TABLE yjs_documents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can read yjs documents for their notes" ON yjs_documents
  FOR SELECT USING (
    note_id IN (
      SELECT id FROM notes 
      WHERE user_id = auth.uid()::text 
      OR is_public = true
    )
  );

CREATE POLICY "Users can write yjs documents for their notes" ON yjs_documents
  FOR ALL USING (
    note_id IN (
      SELECT id FROM notes 
      WHERE user_id = auth.uid()::text
    )
  );

-- Function to update updated_at automatically
CREATE OR REPLACE FUNCTION update_yjs_documents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS trigger_update_yjs_documents_updated_at ON yjs_documents;
CREATE TRIGGER trigger_update_yjs_documents_updated_at
  BEFORE UPDATE ON yjs_documents
  FOR EACH ROW
  EXECUTE FUNCTION update_yjs_documents_updated_at();
`

/**
 * Utility function to create persistence manager
 */
export function createYjsPersistence(options: PersistenceOptions): YjsDocumentPersistence {
  return new YjsDocumentPersistence(options)
}