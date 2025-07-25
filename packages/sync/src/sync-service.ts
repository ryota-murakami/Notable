// Core sync service implementation for Notable cross-device sync

import { createClient, SupabaseClient, RealtimeChannel } from '@supabase/supabase-js'
import type { 
  SyncService, 
  SyncConfig, 
  StorageAdapter, 
  Note, 
  ChangeSet, 
  DeviceInfo, 
  SyncStatus, 
  SyncStats,
  UserPresence 
} from './types'
import { crdt } from './crdt'

/**
 * Core sync service that handles cross-device synchronization using Supabase
 */
export class SyncServiceImpl implements SyncService {
  private supabase: SupabaseClient
  private storage: StorageAdapter
  private config: SyncConfig
  private status: SyncStatus = 'idle'
  private realtimeChannel: RealtimeChannel | null = null
  private syncInterval: NodeJS.Timeout | null = null
  private eventListeners = new Map<string, Set<(data?: unknown) => void>>()
  
  constructor(config: SyncConfig, storage: StorageAdapter) {
    this.config = config
    this.storage = storage
    
    this.supabase = createClient(config.supabaseUrl, config.supabaseKey, {
      realtime: {
        params: {
          eventsPerSecond: 10, // Throttle to prevent spam
        },
      },
    })
  }

  /**
   * Initialize the sync service
   */
  async initialize(): Promise<void> {
    try {
      // Ensure device ID is set
      let deviceId = await this.storage.getDeviceId()
      if (!deviceId) {
        deviceId = this.config.deviceId || crdt.generateDeviceId()
        await this.storage.setDeviceId(deviceId)
        this.config.deviceId = deviceId
      }

      // Set up real-time subscription if enabled
      if (this.config.enableRealtime !== false) {
        await this.setupRealtimeSubscription()
      }

      // Start auto-sync if interval is set
      if (this.config.syncInterval && this.config.syncInterval > 0) {
        this.syncInterval = setInterval(() => {
          this.syncAll().catch(error => {
            console.error('Auto-sync failed:', error)
            this.setStatus('error')
          })
        }, this.config.syncInterval)
      }

      // Track presence if enabled
      if (this.config.enablePresence !== false) {
        await this.trackPresence()
      }

      this.setStatus('idle')
      console.log('Sync service initialized successfully')
    } catch (error) {
      console.error('Failed to initialize sync service:', error)
      this.setStatus('error')
      throw error
    }
  }

  /**
   * Clean up resources and stop sync service
   */
  async destroy(): Promise<void> {
    // Stop auto-sync
    if (this.syncInterval) {
      clearInterval(this.syncInterval)
      this.syncInterval = null
    }

    // Untrack presence
    await this.untrackPresence()

    // Clean up realtime subscription
    if (this.realtimeChannel) {
      await this.supabase.removeChannel(this.realtimeChannel)
      this.realtimeChannel = null
    }

    // Clear all event listeners
    this.eventListeners.clear()

    this.setStatus('idle')
    console.log('Sync service destroyed')
  }

  /**
   * Sync local changes to remote server
   */
  async syncUp(): Promise<void> {
    if (this.status === 'syncing') {
      return // Already syncing
    }

    this.setStatus('syncing')
    this.emit('sync-start', { direction: 'up' })

    try {
      const pendingChanges = await this.storage.getPendingChanges()
      
      if (pendingChanges.length === 0) {
        this.setStatus('idle')
        return
      }

      console.log(`Syncing ${pendingChanges.length} changes to server`)

      // Process changes in batches
      const batchSize = this.config.batchSize || 50
      for (let i = 0; i < pendingChanges.length; i += batchSize) {
        const batch = pendingChanges.slice(i, i + batchSize)
        await this.syncChangesBatch(batch)
      }

      // Update last sync time
      await this.storage.setLastSyncTime(new Date().toISOString())
      
      this.setStatus('idle')
      this.emit('sync-complete', { direction: 'up', changes: pendingChanges.length })
    } catch (error) {
      console.error('Sync up failed:', error)
      this.setStatus('error')
      this.emit('sync-error', { direction: 'up', error })
      throw error
    }
  }

  /**
   * Sync remote changes to local storage
   */
  async syncDown(): Promise<void> {
    if (this.status === 'syncing') {
      return // Already syncing
    }

    this.setStatus('syncing')
    this.emit('sync-start', { direction: 'down' })

    try {
      const lastSync = await this.storage.getLastSyncTime()
      const remoteChanges = await this.fetchRemoteChanges(lastSync)

      if (remoteChanges.length === 0) {
        this.setStatus('idle')
        return
      }

      console.log(`Applying ${remoteChanges.length} remote changes`)

      // Apply remote changes to local storage
      await this.applyRemoteChanges(remoteChanges)

      // Update last sync time
      await this.storage.setLastSyncTime(new Date().toISOString())
      
      this.setStatus('idle')
      this.emit('sync-complete', { direction: 'down', changes: remoteChanges.length })
    } catch (error) {
      console.error('Sync down failed:', error)
      this.setStatus('error')
      this.emit('sync-error', { direction: 'down', error })
      throw error
    }
  }

  /**
   * Perform bidirectional sync
   */
  async syncAll(): Promise<void> {
    if (this.status === 'syncing') {
      return // Already syncing
    }

    console.log('Starting full sync')
    
    // First sync down to get latest remote changes
    await this.syncDown()
    
    // Then sync up to push local changes
    await this.syncUp()

    console.log('Full sync completed')
  }

  /**
   * Subscribe to remote changes via realtime
   */
  subscribeToChanges(callback: (changes: ChangeSet[]) => void): () => void {
    const listeners = this.eventListeners.get('remote-changes') || new Set()
    listeners.add(callback as (data?: unknown) => void)
    this.eventListeners.set('remote-changes', listeners)

    // Return unsubscribe function
    return () => {
      const currentListeners = this.eventListeners.get('remote-changes')
      if (currentListeners) {
        currentListeners.delete(callback as (data?: unknown) => void)
      }
    }
  }

  /**
   * Broadcast a change to other devices
   */
  async broadcastChange(change: ChangeSet): Promise<void> {
    if (!this.realtimeChannel) {
      console.warn('Cannot broadcast change: realtime not initialized')
      return
    }

    try {
      await this.realtimeChannel.send({
        type: 'broadcast',
        event: 'note-change',
        payload: change,
      })
    } catch (error) {
      console.error('Failed to broadcast change:', error)
    }
  }

  /**
   * Track device presence
   */
  async trackPresence(): Promise<void> {
    if (!this.realtimeChannel) {
      console.warn('Cannot track presence: realtime not initialized')
      return
    }

    const presence: UserPresence = {
      user_id: this.config.userId,
      device_id: this.config.deviceId,
      device_info: this.config.deviceInfo,
      last_active: new Date().toISOString(),
    }

    try {
      await this.realtimeChannel.track(presence)
      console.log('Started tracking presence')
    } catch (error) {
      console.error('Failed to track presence:', error)
    }
  }

  /**
   * Stop tracking device presence
   */
  async untrackPresence(): Promise<void> {
    if (!this.realtimeChannel) {
      return
    }

    try {
      await this.realtimeChannel.untrack()
      console.log('Stopped tracking presence')
    } catch (error) {
      console.error('Failed to untrack presence:', error)
    }
  }

  /**
   * Get list of online devices for the user
   */
  async getOnlineDevices(): Promise<DeviceInfo[]> {
    if (!this.realtimeChannel) {
      return []
    }

    try {
      const presenceState = this.realtimeChannel.presenceState()
      const devices: DeviceInfo[] = []

      for (const presence of Object.values(presenceState)) {
        if (Array.isArray(presence)) {
          for (const p of presence) {
            if (p && typeof p === 'object' && 'device_info' in p) {
              devices.push((p as any).device_info)
            }
          }
        }
      }

      return devices.filter(device => device.id !== this.config.deviceId)
    } catch (error) {
      console.error('Failed to get online devices:', error)
      return []
    }
  }

  /**
   * Get current sync status
   */
  getStatus(): SyncStatus {
    return this.status
  }

  /**
   * Get sync statistics
   */
  async getStats(): Promise<SyncStats> {
    const lastSync = await this.storage.getLastSyncTime()
    const pendingChanges = await this.storage.getPendingChanges()
    const allNotes = await this.storage.getAllNotes()

    return {
      last_sync: lastSync,
      pending_changes: pendingChanges.length,
      total_notes: allNotes.filter(note => !note.deleted).length,
      sync_status: this.status,
    }
  }

  /**
   * Add event listener
   */
  on(event: string, callback: (data?: unknown) => void): void {
    const listeners = this.eventListeners.get(event) || new Set()
    listeners.add(callback)
    this.eventListeners.set(event, listeners)
  }

  /**
   * Remove event listener
   */
  off(event: string, callback: (data?: unknown) => void): void {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      listeners.delete(callback)
    }
  }

  /**
   * Private: Set up realtime subscription
   */
  private async setupRealtimeSubscription(): Promise<void> {
    const channelName = `user-sync:${this.config.userId}`
    
    this.realtimeChannel = this.supabase.channel(channelName)
      .on('broadcast', { event: 'note-change' }, (payload) => {
        this.handleRemoteChange(payload.payload as ChangeSet)
      })
      .on('presence', { event: 'sync' }, () => {
        this.emit('presence-sync')
      })
      .on('presence', { event: 'join' }, (payload) => {
        this.emit('device-join', payload)
      })
      .on('presence', { event: 'leave' }, (payload) => {
        this.emit('device-leave', payload)
      })

    await this.realtimeChannel.subscribe()
    console.log('Realtime subscription established')
  }

  /**
   * Private: Handle incoming remote change
   */
  private async handleRemoteChange(change: ChangeSet): Promise<void> {
    // Ignore changes from this device
    if (change.device_id === this.config.deviceId) {
      return
    }

    try {
      // Apply the change locally
      await this.applyRemoteChanges([change])
      
      // Notify listeners
      this.emit('remote-changes', [change])
    } catch (error) {
      console.error('Failed to handle remote change:', error)
    }
  }

  /**
   * Private: Sync a batch of changes to server
   */
  private async syncChangesBatch(changes: ChangeSet[]): Promise<void> {
    // Insert changes into the database
    const { error } = await this.supabase
      .from('note_changes')
      .insert(changes)

    if (error) {
      throw new Error(`Failed to sync changes: ${error.message}`)
    }

    // Mark changes as applied
    for (const change of changes) {
      await this.storage.markChangeApplied(change.id)
    }

    // Broadcast changes to other devices
    for (const change of changes) {
      await this.broadcastChange(change)
    }
  }

  /**
   * Private: Fetch remote changes since last sync
   */
  private async fetchRemoteChanges(since: string | null): Promise<ChangeSet[]> {
    let query = this.supabase
      .from('note_changes')
      .select('*')
      .eq('user_id', this.config.userId)
      .neq('device_id', this.config.deviceId) // Exclude our own changes
      .order('timestamp', { ascending: true })

    if (since) {
      query = query.gt('timestamp', since)
    }

    const { data, error } = await query

    if (error) {
      throw new Error(`Failed to fetch remote changes: ${error.message}`)
    }

    return data || []
  }

  /**
   * Private: Apply remote changes to local storage
   */
  private async applyRemoteChanges(remoteChanges: ChangeSet[]): Promise<void> {
    for (const change of remoteChanges) {
      try {
        const existingNote = await this.storage.getNote(change.note_id)
        
        if (change.operation === 'create' && !existingNote) {
          // Create new note
          const newNote: Note = {
            id: change.note_id,
            title: change.data.title || '',
            content: change.data.content || '',
            is_folder: change.data.is_folder || false,
            parent_id: change.data.parent_id || undefined,
            version: 1,
            device_id: change.device_id,
            last_modified: change.timestamp,
            vector_clock: change.vector_clock,
            synced_at: new Date().toISOString(),
            local_changes: false,
            deleted: false,
            created_at: change.timestamp,
            updated_at: change.timestamp,
          }
          await this.storage.saveNote(newNote)
        } else if (existingNote) {
          // Update existing note with conflict resolution
          const resolved = crdt.resolveConflict(existingNote, {
            ...existingNote,
            ...change.data,
            vector_clock: change.vector_clock,
            last_modified: change.timestamp,
          })

          await this.storage.saveNote(resolved.resolved)
        }
      } catch (error) {
        console.error(`Failed to apply change ${change.id}:`, error)
      }
    }
  }

  /**
   * Private: Set sync status and emit event
   */
  private setStatus(status: SyncStatus): void {
    if (this.status !== status) {
      this.status = status
      this.emit('status-change', status)
    }
  }

  /**
   * Private: Emit event to listeners
   */
  private emit(event: string, data?: unknown): void {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      for (const callback of listeners) {
        try {
          callback(data)
        } catch (error) {
          console.error(`Error in event listener for ${event}:`, error)
        }
      }
    }
  }
}

/**
 * Factory function to create a sync service instance
 */
export function createSyncService(config: SyncConfig, storage: StorageAdapter): SyncService {
  return new SyncServiceImpl(config, storage)
}