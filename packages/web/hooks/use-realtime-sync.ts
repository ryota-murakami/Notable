'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logging'
import type {
  RealtimeChannel,
  RealtimePresenceState,
} from '@supabase/supabase-js'
import type { Note } from '@/types/note'
import type {
  TypingUser,
  UserPresence,
  RealtimeSyncOptions,
  RealtimeSyncState,
  BroadcastPayload,
  NoteUpdatePayload,
} from '@/types/realtime'

// Utility to generate user colors
const generateUserColor = (userId: string): string => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#DDA0DD',
    '#FFB347',
    '#87CEEB',
    '#F0E68C',
    '#FA8072',
  ]

  const hash = userId.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  return colors[Math.abs(hash) % colors.length]
}

// Throttle function for performance
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  let lastExecTime = 0

  return function (...args: unknown[]) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(
        () => {
          func.apply(this, args)
          lastExecTime = Date.now()
        },
        delay - (currentTime - lastExecTime)
      )
    }
  }
}

export function useRealtimeSync(options: RealtimeSyncOptions = {}) {
  const { noteId, onNoteUpdate, onUserTyping, onPresenceChange, user } = options

  const [isConnected, setIsConnected] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState<UserPresence[]>([])
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([])
  const [connectionError, setConnectionError] = useState<string | null>(null)

  const channelRef = useRef<RealtimeChannel | null>(null)
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize Supabase client
  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      setConnectionError('Supabase configuration missing')
      return
    }

    supabaseRef.current = createClient(supabaseUrl, supabaseKey)
  }, [])

  // Setup real-time channel
  useEffect(() => {
    if (!supabaseRef.current || !noteId) return

    const channelName = `note-${noteId}`
    const channel = supabaseRef.current.channel(channelName)

    // Setup Postgres changes listener for note updates
    if (onNoteUpdate) {
      channel.on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'notes',
          filter: `id=eq.${noteId}`,
        },
        (payload) => {
          if (payload.new) {
            onNoteUpdate(payload.new as Note)
          }
        }
      )
    }

    // Setup broadcast listener for typing indicators
    if (onUserTyping) {
      channel.on('broadcast', { event: 'typing' }, ({ payload }) => {
        const { userId, isTyping, userName, userColor } = payload

        setTypingUsers((prev) => {
          const filtered = prev.filter((u) => u.id !== userId)

          if (isTyping) {
            return [
              ...filtered,
              {
                id: userId,
                name: userName,
                color: userColor,
                isTyping: true,
                lastTyped: Date.now(),
              },
            ]
          }

          return filtered
        })
      })
    }

    // Setup presence tracking
    if (onPresenceChange && user) {
      channel.on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const users = Object.values(state)
          .flat()
          .map(
            (presence: {
              id: string
              name: string
              color: string
              avatar?: string
              joinedAt: number
              lastSeen: number
            }) => ({
              id: presence.id,
              name: presence.name,
              color: presence.color,
              avatar: presence.avatar,
              joinedAt: presence.joinedAt,
              lastSeen: presence.lastSeen,
              isActive: Date.now() - presence.lastSeen < 30000, // 30 seconds
            })
          )

        setOnlineUsers(users)
        onPresenceChange(users)
      })

      channel.on('presence', { event: 'join' }, ({ newPresences }) => {
        logger.debug('User joined real-time channel', { newPresences, noteId })
      })

      channel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
        logger.debug('User left real-time channel', { leftPresences, noteId })
      })
    }

    // Subscribe to the channel
    channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        setIsConnected(true)
        setConnectionError(null)

        // Track user presence
        if (user) {
          channel.track({
            id: user.id,
            name: user.name,
            color: user.color || generateUserColor(user.id),
            avatar: user.avatar,
            joinedAt: Date.now(),
            lastSeen: Date.now(),
          })
        }
      } else if (status === 'CHANNEL_ERROR') {
        setIsConnected(false)
        setConnectionError('Failed to connect to real-time channel')
      }
    })

    channelRef.current = channel

    return () => {
      channel.unsubscribe()
      channelRef.current = null
      setIsConnected(false)
    }
  }, [noteId, onNoteUpdate, onUserTyping, onPresenceChange, user])

  // Cleanup typing indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingUsers(
        (prev) => prev.filter((user) => Date.now() - user.lastTyped < 3000) // 3 seconds
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Update presence periodically
  useEffect(() => {
    if (!channelRef.current || !user || !isConnected) return

    const interval = setInterval(() => {
      channelRef.current?.track({
        id: user.id,
        name: user.name,
        color: user.color || generateUserColor(user.id),
        avatar: user.avatar,
        joinedAt: Date.now(),
        lastSeen: Date.now(),
      })
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [isConnected, user])

  // Throttled typing indicator
  const broadcastTyping = useCallback(
    throttle((isTyping: boolean) => {
      if (!channelRef.current || !user) return

      channelRef.current.send({
        type: 'broadcast',
        event: 'typing',
        payload: {
          userId: user.id,
          userName: user.name,
          userColor: user.color || generateUserColor(user.id),
          isTyping,
        },
      })
    }, 300), // 300ms throttle
    [user]
  )

  // Method to broadcast note updates
  const broadcastNoteUpdate = useCallback(
    (note: Note) => {
      if (!channelRef.current) return

      channelRef.current.send({
        type: 'broadcast',
        event: 'note-update',
        payload: {
          noteId: note.id,
          updatedAt: note.updatedAt,
          userId: user?.id,
        },
      })
    },
    [user]
  )

  // Method to start typing
  const startTyping = useCallback(() => {
    broadcastTyping(true)

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      broadcastTyping(false)
    }, 2000) // Stop typing after 2 seconds of inactivity
  }, [broadcastTyping])

  // Method to stop typing
  const stopTyping = useCallback(() => {
    broadcastTyping(false)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
  }, [broadcastTyping])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  return {
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
    broadcastNoteUpdate,
  }
}
