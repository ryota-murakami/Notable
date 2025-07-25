'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import type { RealtimeChannel } from '@supabase/supabase-js'
import type { Note } from '@/types/note'
import { useSupabase } from '@/components/supabase-provider'

// Define realtime types here
interface TypingUser {
  userId: string
  userName: string
  timestamp: number
}

interface UserPresence {
  userId: string
  userName: string
  color: string
  lastSeen: number
}

interface RealtimeSyncOptions {
  noteId: string
  onNoteUpdate?: (note: Note) => void
  onUserJoin?: (user: UserPresence) => void
  onUserLeave?: (userId: string) => void
  onTypingStart?: (user: TypingUser) => void
  onTypingStop?: (userId: string) => void
  debounceMs?: number
}

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

  return colors[Math.abs(hash) % colors.length] ?? '#FF6B6B'
}

// Throttle function for performance
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  let lastExecTime = 0

  return function (this: any, ...args: any[]) {
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

export function useRealtimeSync(options: RealtimeSyncOptions) {
  const { noteId, onNoteUpdate } = options
  const { supabase, user } = useSupabase()

  const [isConnected, setIsConnected] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState<UserPresence[]>([])
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([])
  const [connectionError, setConnectionError] = useState<string | null>(null)

  const channelRef = useRef<RealtimeChannel | null>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check if we're in development mode with mock user
  const isDevelopmentMode = user?.id?.startsWith('mock-user') || !supabase

  // Check if Supabase client is available
  useEffect(() => {
    if (isDevelopmentMode) {
      // In development mode, simulate connected state
      setIsConnected(true)
      setConnectionError(null)
    } else if (!supabase) {
      setConnectionError('Supabase client not available')
    } else {
      setConnectionError(null)
    }
  }, [supabase, isDevelopmentMode])

  // Setup real-time channel
  useEffect(() => {
    if (isDevelopmentMode) {
      // Skip real-time setup in development mode
      setIsConnected(true)
      return
    }
    
    if (!supabase || !noteId) return

    const channelName = `note-${noteId}`
    const channel = supabase.channel(channelName)

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
    if (options.onTypingStart || options.onTypingStop) {
      channel.on('broadcast', { event: 'typing' }, ({ payload }) => {
        const { userId, isTyping, userName } = payload

        setTypingUsers((prev) => {
          const filtered = prev.filter((u) => u.userId !== userId)

          if (isTyping) {
            return [
              ...filtered,
              {
                userId,
                userName,
                timestamp: Date.now(),
              },
            ]
          }

          return filtered
        })
      })
    }

    // Setup presence tracking
    if (options.onUserJoin && options.onUserLeave) {
      channel.on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const users = Object.values(state)
          .flat()
          .map((presence: any) => ({
            userId: presence.id,
            userName: presence.name,
            color: presence.color,
            lastSeen: presence.lastSeen,
          }))

        setOnlineUsers(users)
        if (users.length > 0 && users[0]) {
          options.onUserJoin?.(users[0])
        }
      })

      channel.on('presence', { event: 'join' }, ({ newPresences }) => {
        console.log('User joined:', newPresences)
      })

      channel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
        console.log('User left:', leftPresences)
      })
    }

    // Subscribe to the channel
    channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        setIsConnected(true)
        setConnectionError(null)

        // Track user presence - placeholder implementation
        channel.track({
          id: 'user-id',
          name: 'User Name',
          color: generateUserColor('user-id'),
          joinedAt: Date.now(),
          lastSeen: Date.now(),
        })
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
  }, [
    noteId,
    onNoteUpdate,
    options.onUserJoin,
    options.onUserLeave,
    options.onTypingStart,
    options.onTypingStop,
    isDevelopmentMode,
    supabase,
  ])

  // Cleanup typing indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingUsers(
        (prev) => prev.filter((user) => Date.now() - user.timestamp < 3000) // 3 seconds
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Update presence periodically
  useEffect(() => {
    if (!channelRef.current || !isConnected) return

    const interval = setInterval(() => {
      channelRef.current?.track({
        id: 'user-id',
        name: 'User Name',
        color: generateUserColor('user-id'),
        joinedAt: Date.now(),
        lastSeen: Date.now(),
      })
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [isConnected])

  // Throttled typing indicator
  const broadcastTyping = useCallback(
    throttle((isTyping: boolean) => {
      if (isDevelopmentMode || !channelRef.current) return

      channelRef.current.send({
        type: 'broadcast',
        event: 'typing',
        payload: {
          userId: 'user-id',
          userName: 'User Name',
          userColor: generateUserColor('user-id'),
          isTyping,
        },
      })
    }, 300), // 300ms throttle
    [isDevelopmentMode]
  )

  // Method to broadcast note updates
  const broadcastNoteUpdate = useCallback((note: Note) => {
    if (isDevelopmentMode || !channelRef.current) return

    channelRef.current.send({
      type: 'broadcast',
      event: 'note-update',
      payload: {
        noteId: note.id,
        updatedAt: note.updatedAt,
        userId: 'user-id',
      },
    })
  }, [isDevelopmentMode])

  // Method to start typing
  const startTyping = useCallback(() => {
    if (isDevelopmentMode) return
    
    broadcastTyping(true)

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      broadcastTyping(false)
    }, 2000) // Stop typing after 2 seconds of inactivity
  }, [broadcastTyping, isDevelopmentMode])

  // Method to stop typing
  const stopTyping = useCallback(() => {  
    if (isDevelopmentMode) return
    
    broadcastTyping(false)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
  }, [broadcastTyping, isDevelopmentMode])

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
