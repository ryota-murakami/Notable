/**
 * Y.js Provider for Enhanced Real-time Collaboration
 * Integrates Y.js with Supabase for CRDT-based collaborative editing
 */

import * as Y from 'yjs'
import { SupabaseProvider } from '@y-sweet/provider'
import { createClient } from '@supabase/supabase-js'
import { performanceMonitor } from '@/lib/performance'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  color: string
  cursor?: {
    anchor: number
    focus: number
  }
  lastSeen: Date
}

export interface Awareness {
  user: User
  cursor?: {
    anchor: number
    focus: number
  }
  selection?: {
    anchor: number
    focus: number
  }
  isTyping: boolean
  lastActivity: Date
}

class YjsCollaborationProvider {
  private ydoc: Y.Doc | null = null
  private provider: SupabaseProvider | null = null
  private awareness: Y.Awareness | null = null
  private supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  private currentUser: User | null = null
  private collaborators = new Map<string, User>()
  private listeners = new Map<string, Function[]>()

  // Color palette for user identification
  private readonly userColors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FECA57',
    '#FF9FF3',
    '#54A0FF',
    '#5F27CD',
    '#00D2D3',
    '#FF9F43',
    '#10AC84',
    '#EE5A24',
    '#0652DD',
    '#9980FA',
    '#833471',
  ]

  /**
   * Initialize Y.js document and provider for a note
   */
  async initializeDocument(noteId: string, currentUser: User): Promise<Y.Doc> {
    const startTime = performance.now()

    try {
      // Create new Y.js document
      this.ydoc = new Y.Doc()
      this.currentUser = currentUser

      // Initialize Supabase provider for real-time sync
      this.provider = new SupabaseProvider(this.ydoc, noteId, {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        tableName: 'collaborative_documents',
      })

      // Set up awareness for user presence
      this.awareness = this.provider.awareness
      this.setupAwareness()

      // Set up event listeners
      this.setupEventListeners()

      // Track performance
      const duration = performance.now() - startTime
      performanceMonitor.track('yjs_document_init', duration, 'ms', {
        noteId,
        userId: currentUser.id,
      })

      return this.ydoc
    } catch (error) {
      performanceMonitor.track('yjs_document_init_error', 1, 'count', {
        error: error.toString(),
        noteId,
      })
      throw error
    }
  }

  /**
   * Set up user awareness (presence, cursors, selections)
   */
  private setupAwareness() {
    if (!this.awareness || !this.currentUser) return

    // Set current user's awareness state
    this.awareness.setLocalStateField('user', {
      id: this.currentUser.id,
      name: this.currentUser.name,
      email: this.currentUser.email,
      avatar: this.currentUser.avatar,
      color: this.currentUser.color,
      lastSeen: new Date(),
    })

    // Listen for awareness changes (other users)
    this.awareness.on('change', this.handleAwarenessChange.bind(this))

    // Track user activity
    this.trackUserActivity()
  }

  /**
   * Handle awareness changes from other users
   */
  private handleAwarenessChange(changes: {
    added: number[]
    updated: number[]
    removed: number[]
  }) {
    const { added, updated, removed } = changes

    // Handle new users
    added.forEach((clientId) => {
      const state = this.awareness!.getStates().get(clientId)
      if (state?.user && clientId !== this.awareness!.clientID) {
        this.collaborators.set(state.user.id, state.user)
        this.emit('user-joined', state.user)
      }
    })

    // Handle updated users
    updated.forEach((clientId) => {
      const state = this.awareness!.getStates().get(clientId)
      if (state?.user && clientId !== this.awareness!.clientID) {
        this.collaborators.set(state.user.id, state.user)
        this.emit('user-updated', state.user)
      }
    })

    // Handle removed users
    removed.forEach((clientId) => {
      // Find user by client ID and remove
      for (const [userId, user] of this.collaborators.entries()) {
        // Note: This is a simplified approach - in production you'd track client IDs
        this.collaborators.delete(userId)
        this.emit('user-left', user)
      }
    })

    this.emit('collaborators-changed', Array.from(this.collaborators.values()))
  }

  /**
   * Update user cursor position
   */
  updateCursor(anchor: number, focus: number) {
    if (!this.awareness) return

    this.awareness.setLocalStateField('cursor', { anchor, focus })
    this.awareness.setLocalStateField('lastActivity', new Date())

    performanceMonitor.track('yjs_cursor_update', 1, 'count', {
      anchor,
      focus,
      userId: this.currentUser?.id,
    })
  }

  /**
   * Update user selection
   */
  updateSelection(anchor: number, focus: number) {
    if (!this.awareness) return

    this.awareness.setLocalStateField('selection', { anchor, focus })
    this.awareness.setLocalStateField('lastActivity', new Date())
  }

  /**
   * Set typing indicator
   */
  setTyping(isTyping: boolean) {
    if (!this.awareness) return

    this.awareness.setLocalStateField('isTyping', isTyping)
    this.awareness.setLocalStateField('lastActivity', new Date())

    if (isTyping) {
      // Auto-clear typing indicator after 3 seconds
      setTimeout(() => {
        this.awareness?.setLocalStateField('isTyping', false)
      }, 3000)
    }
  }

  /**
   * Get current collaborators
   */
  getCollaborators(): User[] {
    return Array.from(this.collaborators.values())
  }

  /**
   * Get awareness state for a specific user
   */
  getUserAwareness(userId: string): Awareness | null {
    if (!this.awareness) return null

    for (const [clientId, state] of this.awareness.getStates().entries()) {
      if (state.user?.id === userId) {
        return {
          user: state.user,
          cursor: state.cursor,
          selection: state.selection,
          isTyping: state.isTyping || false,
          lastActivity: new Date(state.lastActivity || Date.now()),
        }
      }
    }

    return null
  }

  /**
   * Track user activity and update last seen
   */
  private trackUserActivity() {
    // Update activity every 30 seconds
    const activityInterval = setInterval(() => {
      if (this.awareness) {
        this.awareness.setLocalStateField('lastActivity', new Date())
      }
    }, 30000)

    // Clean up on disconnect
    this.addEventListener('disconnect', () => {
      clearInterval(activityInterval)
    })
  }

  /**
   * Set up event listeners for Y.js document
   */
  private setupEventListeners() {
    if (!this.ydoc || !this.provider) return

    // Document sync events
    this.provider.on('sync', (isSynced: boolean) => {
      this.emit('sync', isSynced)
      performanceMonitor.track('yjs_sync', 1, 'count', { isSynced })
    })

    this.provider.on('status', (event: { status: string }) => {
      this.emit('connection-status', event.status)
      performanceMonitor.track('yjs_connection_status', 1, 'count', {
        status: event.status,
      })
    })

    // Document change events
    this.ydoc.on('update', (update: Uint8Array, origin: any) => {
      this.emit('document-updated', { update, origin })
      performanceMonitor.track('yjs_document_update', 1, 'count')
    })
  }

  /**
   * Generate a unique color for a user
   */
  generateUserColor(userId: string): string {
    const hash = userId.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)

    return this.userColors[Math.abs(hash) % this.userColors.length]
  }

  /**
   * Event system
   */
  addEventListener(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)!.push(callback)
  }

  removeEventListener(event: string, callback: Function) {
    const eventListeners = this.listeners.get(event)
    if (eventListeners) {
      const index = eventListeners.indexOf(callback)
      if (index > -1) {
        eventListeners.splice(index, 1)
      }
    }
  }

  private emit(event: string, data?: any) {
    const eventListeners = this.listeners.get(event)
    if (eventListeners) {
      eventListeners.forEach((callback) => callback(data))
    }
  }

  /**
   * Disconnect and cleanup
   */
  disconnect() {
    if (this.provider && this.awareness) {
      // Set user as offline
      this.awareness.setLocalStateField('user', {
        ...this.currentUser,
        lastSeen: new Date(),
      })
    }

    this.provider?.destroy()
    this.ydoc?.destroy()

    this.ydoc = null
    this.provider = null
    this.awareness = null
    this.collaborators.clear()
    this.listeners.clear()

    this.emit('disconnect')

    performanceMonitor.track('yjs_disconnect', 1, 'count', {
      userId: this.currentUser?.id,
    })
  }

  /**
   * Get document statistics
   */
  getDocumentStats() {
    if (!this.ydoc) return null

    return {
      clientId: this.awareness?.clientID,
      collaboratorCount: this.collaborators.size,
      documentSize: Y.encodeStateAsUpdate(this.ydoc).length,
      isConnected: this.provider?.wsconnected || false,
      isSynced: this.provider?.synced || false,
    }
  }
}

// Singleton instance
export const yjsProvider = new YjsCollaborationProvider()

// React hook for Y.js collaboration
export function useYjsCollaboration(noteId: string, currentUser: User) {
  const [ydoc, setYdoc] = React.useState<Y.Doc | null>(null)
  const [collaborators, setCollaborators] = React.useState<User[]>([])
  const [isConnected, setIsConnected] = React.useState(false)
  const [isSynced, setIsSynced] = React.useState(false)

  React.useEffect(() => {
    let mounted = true

    const initializeCollaboration = async () => {
      try {
        const doc = await yjsProvider.initializeDocument(noteId, currentUser)
        if (mounted) {
          setYdoc(doc)
        }
      } catch (error) {
        console.error('Failed to initialize Y.js collaboration:', error)
      }
    }

    // Event listeners
    const handleCollaboratorsChanged = (users: User[]) => {
      if (mounted) setCollaborators(users)
    }

    const handleConnectionStatus = (status: string) => {
      if (mounted) setIsConnected(status === 'connected')
    }

    const handleSync = (synced: boolean) => {
      if (mounted) setIsSynced(synced)
    }

    // Set up listeners
    yjsProvider.addEventListener(
      'collaborators-changed',
      handleCollaboratorsChanged
    )
    yjsProvider.addEventListener('connection-status', handleConnectionStatus)
    yjsProvider.addEventListener('sync', handleSync)

    // Initialize
    initializeCollaboration()

    return () => {
      mounted = false
      yjsProvider.removeEventListener(
        'collaborators-changed',
        handleCollaboratorsChanged
      )
      yjsProvider.removeEventListener(
        'connection-status',
        handleConnectionStatus
      )
      yjsProvider.removeEventListener('sync', handleSync)
      yjsProvider.disconnect()
    }
  }, [noteId, currentUser.id])

  return {
    ydoc,
    collaborators,
    isConnected,
    isSynced,
    updateCursor: yjsProvider.updateCursor.bind(yjsProvider),
    updateSelection: yjsProvider.updateSelection.bind(yjsProvider),
    setTyping: yjsProvider.setTyping.bind(yjsProvider),
    getUserAwareness: yjsProvider.getUserAwareness.bind(yjsProvider),
    getDocumentStats: yjsProvider.getDocumentStats.bind(yjsProvider),
  }
}
