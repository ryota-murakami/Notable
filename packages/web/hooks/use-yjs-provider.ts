/**
 * React Hook for Yjs Supabase Provider Integration
 * 
 * This hook provides a React-friendly interface for using Yjs with Supabase Realtime
 * for collaborative editing. It handles provider lifecycle, connection state, and
 * provides utilities for editor integration.
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { Doc } from 'yjs'
import { SupabaseYjsProvider, SupabaseYjsProviderOptions } from '@/lib/yjs/provider'
import { useSupabase } from '@/hooks/use-supabase'

export interface UseYjsProviderOptions {
  noteId: string
  userId: string
  enabled?: boolean
  debug?: boolean
}

export interface UseYjsProviderReturn {
  provider: SupabaseYjsProvider | null
  doc: Doc | null
  isConnected: boolean
  activeUsers: string[]
  error: string | null
  reconnect: () => Promise<void>
  disconnect: () => Promise<void>
}

/**
 * Hook for managing Yjs collaborative editing with Supabase Realtime
 */
export function useYjsProvider({
  noteId,
  userId,
  enabled = true,
  debug = false
}: UseYjsProviderOptions): UseYjsProviderReturn {
  const { supabase } = useSupabase()
  const [provider, setProvider] = useState<SupabaseYjsProvider | null>(null)
  const [doc, setDoc] = useState<Doc | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [activeUsers, setActiveUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const providerRef = useRef<SupabaseYjsProvider | null>(null)

  // Connection status polling
  useEffect(() => {
    if (!provider) return

    const interval = setInterval(() => {
      const connected = provider.isConnectedToChannel()
      const users = provider.getActiveUsers()
      
      setIsConnected(connected)
      setActiveUsers(users)
    }, 1000) // Check every second

    return () => clearInterval(interval)
  }, [provider])

  // Initialize provider
  useEffect(() => {
    if (!enabled || !noteId || !userId || !supabase) {
      return
    }

    const initProvider = async () => {
      try {
        setError(null)
        
        // Clean up existing provider
        if (providerRef.current) {
          await providerRef.current.disconnect()
          providerRef.current = null
        }

        // Create new provider
        const newProvider = new SupabaseYjsProvider({
          noteId,
          userId,
          supabaseClient: supabase,
          debug
        })

        providerRef.current = newProvider
        setProvider(newProvider)
        setDoc(newProvider.getDoc())

        if (debug) {
          console.log('[useYjsProvider] Provider initialized', { noteId, userId })
        }

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Yjs provider'
        setError(errorMessage)
        console.error('[useYjsProvider] Initialization error:', err)
      }
    }

    initProvider()

    // Cleanup on unmount or dependency change
    return () => {
      if (providerRef.current) {
        providerRef.current.disconnect()
        providerRef.current = null
      }
      setProvider(null)
      setDoc(null)
      setIsConnected(false)
      setActiveUsers([])
    }
  }, [noteId, userId, enabled, supabase, debug])

  // Reconnect function
  const reconnect = useCallback(async () => {
    if (!enabled || !noteId || !userId || !supabase) return

    try {
      setError(null)
      
      // Disconnect current provider
      if (providerRef.current) {
        await providerRef.current.disconnect()
      }

      // Create new provider
      const newProvider = new SupabaseYjsProvider({
        noteId,
        userId,
        supabaseClient: supabase,
        doc: doc || undefined, // Reuse existing doc if available
        debug
      })

      providerRef.current = newProvider
      setProvider(newProvider)
      setDoc(newProvider.getDoc())

      if (debug) {
        console.log('[useYjsProvider] Reconnected', { noteId, userId })
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to reconnect'
      setError(errorMessage)
      console.error('[useYjsProvider] Reconnection error:', err)
    }
  }, [noteId, userId, enabled, supabase, doc, debug])

  // Disconnect function
  const disconnect = useCallback(async () => {
    if (providerRef.current) {
      await providerRef.current.disconnect()
      providerRef.current = null
    }
    setProvider(null)
    setIsConnected(false)
    setActiveUsers([])
  }, [])

  return {
    provider,
    doc,
    isConnected,
    activeUsers,
    error,
    reconnect,
    disconnect
  }
}

/**
 * Hook for getting the collaborative editor state
 */
export function useCollaborativeEditor(noteId: string, userId: string) {
  const {
    provider,
    doc,
    isConnected,
    activeUsers,
    error,
    reconnect
  } = useYjsProvider({
    noteId,
    userId,
    enabled: true,
    debug: process.env.NODE_ENV === 'development'
  })

  // Get editor text shared type
  const getText = useCallback(() => {
    if (!doc) return null
    return doc.getText('content') // 'content' is the shared text field for the editor
  }, [doc])

  // Collaboration status
  const collaborationStatus = {
    isConnected,
    activeUsers,
    userCount: activeUsers.length,
    isCollaborating: activeUsers.length > 1
  }

  return {
    provider,
    doc,
    getText,
    collaborationStatus,
    error,
    reconnect
  }
}