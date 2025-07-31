// Core data types for Notable sync system

/**
 * Vector clock for CRDT conflict resolution
 * Maps device ID to logical clock value
 */
export interface VectorClock {
  [deviceId: string]: number
}

/**
 * Basic note structure shared across platforms
 */
export interface BaseNote {
  id: string
  title: string
  content: string
  is_folder: boolean
  parent_id?: string | undefined
}

/**
 * Note with CRDT and sync metadata
 */
export interface Note extends BaseNote {
  // CRDT metadata
  version: number // Lamport timestamp
  device_id: string // Unique device identifier
  last_modified: string // ISO timestamp
  vector_clock: VectorClock // For conflict resolution

  // Sync metadata
  synced_at?: string | undefined // Last successful sync
  local_changes: boolean // Has pending local changes
  deleted: boolean // Tombstone for deleted notes

  // Timestamps
  created_at: string
  updated_at: string
}

/**
 * Change operation types
 */
export type ChangeOperation = 'create' | 'update' | 'delete'

/**
 * Individual change record for sync operations
 */
export interface ChangeSet {
  id: string
  note_id: string
  operation: ChangeOperation
  data: Partial<Note>
  timestamp: string
  device_id: string
  vector_clock: VectorClock
  applied?: boolean
}

/**
 * Device information for presence tracking
 */
export interface DeviceInfo {
  id: string
  name: string
  type: 'web' | 'electron' | 'mobile'
  user_agent?: string | undefined
  last_seen: string
  is_online: boolean
}

/**
 * User presence state
 */
export interface UserPresence {
  user_id: string
  device_id: string
  device_info: DeviceInfo
  last_active: string
  typing_note_id?: string
}

/**
 * Sync status indicators
 */
export type SyncStatus = 'idle' | 'syncing' | 'error' | 'offline'

/**
 * Sync statistics
 */
export interface SyncStats {
  last_sync: string | null
  pending_changes: number
  total_notes: number
  sync_status: SyncStatus
  last_error?: string
}

/**
 * Configuration for sync service
 */
export interface SyncConfig {
  supabaseUrl: string
  supabaseKey: string
  userId: string
  deviceId: string
  deviceInfo: DeviceInfo

  // Sync behavior settings
  syncInterval?: number // Auto-sync interval in ms (default: 30000)
  batchSize?: number // Max changes per sync batch (default: 50)
  retryAttempts?: number // Max retry attempts (default: 3)
  retryDelay?: number // Initial retry delay in ms (default: 1000)

  // Real-time settings
  enableRealtime?: boolean // Enable real-time sync (default: true)
  enablePresence?: boolean // Enable presence tracking (default: true)
  presenceHeartbeat?: number // Presence heartbeat interval in ms (default: 10000)
}

/**
 * Storage adapter interface for platform-specific implementations
 */
export interface StorageAdapter {
  // Note operations
  getAllNotes(): Promise<Note[]>
  getNote(id: string): Promise<Note | null>
  saveNote(note: Note): Promise<void>
  deleteNote(id: string): Promise<void>

  // Change tracking
  getPendingChanges(): Promise<ChangeSet[]>
  saveChange(change: ChangeSet): Promise<void>
  markChangeApplied(changeId: string): Promise<void>
  clearAppliedChanges(): Promise<void>

  // Metadata
  getLastSyncTime(): Promise<string | null>
  setLastSyncTime(timestamp: string): Promise<void>
  getDeviceId(): Promise<string>
  setDeviceId(deviceId: string): Promise<void>

  // Cleanup
  vacuum(): Promise<void>
}

/**
 * Conflict resolution strategy
 */
export type ConflictResolution = 'last-write-wins' | 'merge' | 'user-choice'

/**
 * Conflict resolution result
 */
export interface ConflictResult {
  resolved: Note
  strategy: ConflictResolution
  conflicts: {
    field: string
    local_value: unknown
    remote_value: unknown
    resolved_value: unknown
  }[]
}

/**
 * Sync service interface
 */
export interface SyncService {
  // Lifecycle
  initialize(): Promise<void>
  destroy(): Promise<void>

  // Core sync operations
  syncUp(): Promise<void>
  syncDown(): Promise<void>
  syncAll(): Promise<void>

  // Real-time operations
  subscribeToChanges(callback: (changes: ChangeSet[]) => void): () => void
  broadcastChange(change: ChangeSet): Promise<void>

  // Presence management
  trackPresence(): Promise<void>
  untrackPresence(): Promise<void>
  getOnlineDevices(): DeviceInfo[]

  // Status and stats
  getStatus(): SyncStatus
  getStats(): Promise<SyncStats>

  // Event handling
  on(
    event:
      | 'sync-start'
      | 'sync-complete'
      | 'sync-error'
      | 'status-change'
      | 'remote-changes'
      | 'presence-sync'
      | 'device-join'
      | 'device-leave',
    callback: (data?: unknown) => void,
  ): void
  off(event: string, callback: (data?: unknown) => void): void
}

/**
 * CRDT operations interface
 */
export interface CRDTOperations {
  // Vector clock operations
  incrementClock(vectorClock: VectorClock, deviceId: string): VectorClock
  compareClock(
    clock1: VectorClock,
    clock2: VectorClock,
  ): 'before' | 'after' | 'concurrent'
  mergeClock(clock1: VectorClock, clock2: VectorClock): VectorClock

  // Conflict resolution
  resolveConflict(local: Note, remote: Note): ConflictResult
  mergeChanges(
    localChanges: ChangeSet[],
    remoteChanges: ChangeSet[],
  ): ChangeSet[]

  // State operations
  applyChange(note: Note, change: ChangeSet): Note
  createTombstone(note: Note, deviceId: string): Note
}
