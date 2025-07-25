/**
 * Yjs Provider for Supabase Realtime Integration
 * 
 * This provider enables real-time collaborative editing by:
 * 1. Connecting Yjs documents to Supabase Realtime channels
 * 2. Broadcasting document changes to all connected clients
 * 3. Applying remote changes to the local Yjs document
 * 4. Handling conflict resolution through Yjs CRDT algorithms
 */

import { Doc, Transaction, YEvent, encodeStateAsUpdate, applyUpdate } from 'yjs'
import { createClient, SupabaseClient, RealtimeChannel } from '@supabase/supabase-js'

export interface SupabaseYjsProviderOptions {
  noteId: string
  userId: string
  supabaseUrl?: string
  supabaseKey?: string
  supabaseClient?: SupabaseClient
  doc?: Doc
  debug?: boolean
}

export class SupabaseYjsProvider {
  private doc: Doc
  private channel: RealtimeChannel | null = null
  private supabase: SupabaseClient
  private noteId: string
  private userId: string
  private debug: boolean
  private isConnected = false
  private updateHandlers = new Set<(update: Uint8Array, origin: any) => void>()

  constructor(options: SupabaseYjsProviderOptions) {
    this.noteId = options.noteId
    this.userId = options.userId
    this.debug = options.debug ?? false
    
    // Use provided Supabase client or create new one
    if (options.supabaseClient) {
      this.supabase = options.supabaseClient
    } else if (options.supabaseUrl && options.supabaseKey) {
      this.supabase = createClient(options.supabaseUrl, options.supabaseKey)
    } else {
      throw new Error('Must provide either supabaseClient or supabaseUrl+supabaseKey')
    }

    // Use provided doc or create new one
    this.doc = options.doc ?? new Doc()

    this.setupDocumentHandlers()
    this.connect()
  }

  private log(...args: any[]) {
    if (this.debug) {
      console.log('[SupabaseYjsProvider]', ...args)
    }
  }

  private setupDocumentHandlers() {
    let updateTimeout: ReturnType<typeof setTimeout> | null = null
    let pendingUpdates: Uint8Array[] = []
    
    // Listen for local document changes and broadcast them with throttling
    const updateHandler = (update: Uint8Array, origin: any) => {
      // Don't broadcast updates that came from remote (avoid loops)
      if (origin === this) return
      
      this.log('Queueing local update', { noteId: this.noteId, updateSize: update.length })
      
      // Add to pending updates
      pendingUpdates.push(update)
      
      // Throttle updates to avoid rate limits
      if (updateTimeout) clearTimeout(updateTimeout)
      updateTimeout = setTimeout(() => {
        if (this.channel && this.isConnected && pendingUpdates.length > 0) {
          // Merge all pending updates
          const mergedUpdate = pendingUpdates.reduce((acc, curr) => {
            const merged = new Uint8Array(acc.length + curr.length)
            merged.set(acc)
            merged.set(curr, acc.length)
            return merged
          }, new Uint8Array(0))
          
          // Convert to base64 for more efficient transmission
          const base64Update = btoa(String.fromCharCode(...mergedUpdate))
          
          this.channel.send({
            type: 'broadcast',
            event: 'yjs-update',
            payload: {
              noteId: this.noteId,
              userId: this.userId,
              update: base64Update,
              timestamp: Date.now()
            }
          })
          
          this.log('Broadcasted merged update', { 
            noteId: this.noteId, 
            originalCount: pendingUpdates.length,
            mergedSize: mergedUpdate.length,
            compressedSize: base64Update.length
          })
          
          pendingUpdates = []
        }
      }, 100) // 100ms throttle
    }

    this.doc.on('update', updateHandler)
    this.updateHandlers.add(updateHandler)
  }

  private async connect() {
    try {
      // Create a channel for this specific note
      this.channel = this.supabase.channel(`note-${this.noteId}`, {
        config: {
          broadcast: { self: true }, // Allow receiving own messages for testing
          presence: { key: this.userId }
        }
      })

      // Handle incoming Yjs updates from other clients
      this.channel.on('broadcast', { event: 'yjs-update' }, (payload) => {
        const { noteId, userId, update, timestamp } = payload.payload
        
        // Ignore updates for different notes or from self
        if (noteId !== this.noteId || userId === this.userId) return
        
        this.log('Received remote update', { 
          fromUser: userId, 
          updateSize: update.length,
          timestamp 
        })

        try {
          // Convert base64 back to Uint8Array and apply to document
          const binaryString = atob(update)
          const updateArray = new Uint8Array(binaryString.length)
          for (let i = 0; i < binaryString.length; i++) {
            updateArray[i] = binaryString.charCodeAt(i)
          }
          applyUpdate(this.doc, updateArray, this) // Use 'this' as origin to prevent loops
        } catch (error) {
          console.error('[SupabaseYjsProvider] Error applying remote update:', error)
        }
      })

      // Handle presence (who's currently editing)
      this.channel.on('presence', { event: 'sync' }, () => {
        const state = this.channel?.presenceState()
        this.log('Presence sync', { 
          activeUsers: Object.keys(state || {}),
          currentUser: this.userId 
        })
      })

      // Handle new users joining
      this.channel.on('presence', { event: 'join' }, ({ key, newPresences }) => {
        this.log('User joined', { userId: key, presences: newPresences })
      })

      // Handle users leaving
      this.channel.on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
        this.log('User left', { userId: key, presences: leftPresences })
      })

      // Subscribe to the channel
      this.channel.subscribe(async (status) => {
        this.log('Channel subscription status:', status)
        
        if (status === 'SUBSCRIBED') {
          this.isConnected = true
          
          // Track presence for this user
          await this.channel?.track({
            userId: this.userId,
            timestamp: Date.now()
          })

          // Request initial state from other clients
          await this.requestInitialState()
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          this.isConnected = false
        }
      })

    } catch (error) {
      console.error('[SupabaseYjsProvider] Connection error:', error)
    }
  }

  private async requestInitialState() {
    // Request the current document state from any connected peers
    if (this.channel && this.isConnected) {
      this.channel.send({
        type: 'broadcast',
        event: 'yjs-request-state',
        payload: {
          noteId: this.noteId,
          userId: this.userId,
          timestamp: Date.now()
        }
      })

      // Listen for state responses
      this.channel.on('broadcast', { event: 'yjs-state-response' }, (payload) => {
        const { noteId, userId, state, timestamp } = payload.payload
        
        if (noteId !== this.noteId || userId === this.userId) return
        
        this.log('Received initial state', { 
          fromUser: userId, 
          stateSize: state.length,
          timestamp 
        })

        try {
          const stateArray = new Uint8Array(state)
          applyUpdate(this.doc, stateArray, this)
        } catch (error) {
          console.error('[SupabaseYjsProvider] Error applying initial state:', error)
        }
      })

      // Respond to state requests from other clients
      this.channel.on('broadcast', { event: 'yjs-request-state' }, (payload) => {
        const { noteId, userId } = payload.payload
        
        if (noteId !== this.noteId || userId === this.userId) return
        
        this.log('Responding to state request from', userId)
        
        // Send current document state
        const state = encodeStateAsUpdate(this.doc)
        this.channel?.send({
          type: 'broadcast',
          event: 'yjs-state-response',
          payload: {
            noteId: this.noteId,
            userId: this.userId,
            state: Array.from(state),
            timestamp: Date.now()
          }
        })
      })
    }
  }

  /**
   * Get the Yjs document instance
   */
  getDoc(): Doc {
    return this.doc
  }

  /**
   * Get connection status
   */
  isConnectedToChannel(): boolean {
    return this.isConnected
  }

  /**
   * Get active users in the session
   */
  getActiveUsers(): string[] {
    if (!this.channel) return []
    const state = this.channel.presenceState()
    return Object.keys(state)
  }

  /**
   * Manually sync document state (useful for debugging)
   */
  async syncState() {
    await this.requestInitialState()
  }

  /**
   * Disconnect from the Supabase channel
   */
  async disconnect() {
    this.log('Disconnecting...')
    
    this.isConnected = false
    
    if (this.channel) {
      await this.channel.unsubscribe()
      this.channel = null
    }

    // Clean up document handlers
    this.updateHandlers.forEach(handler => {
      this.doc.off('update', handler)
    })
    this.updateHandlers.clear()
  }

  /**
   * Destroy the provider and clean up resources
   */
  destroy() {
    this.disconnect()
    this.doc.destroy()
  }
}

/**
 * Create a Supabase Yjs provider for a note
 */
export function createSupabaseYjsProvider(options: SupabaseYjsProviderOptions): SupabaseYjsProvider {
  return new SupabaseYjsProvider(options)
}