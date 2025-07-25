'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { type SupabaseClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import type { Database } from '@/types/database'
import { createClient } from '@/utils/supabase/client'

// Simple session type
type SimpleSession = {
  user: SimpleUser | null
  access_token?: string | undefined
}

// Simple user type
export type SimpleUser = {
  id: string
  email?: string
  user_metadata?: Record<string, unknown>
}

type SupabaseContext = {
  supabase: SupabaseClient<Database> | null
  user: SimpleUser | null
  session: SimpleSession | null
  loading: boolean
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SimpleUser | null>(null)
  const [session, setSession] = useState<SimpleSession | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Create the Supabase client using the SSR-safe utility
  const supabase = useMemo(() => {
    if (typeof window === 'undefined') {
      // During SSR, we can't create the client yet
      return null
    }

    try {
      const client = createClient()
      console.log('Supabase client created successfully')
      return client
    } catch (error) {
      console.error('Failed to create Supabase client:', error)
      // Log more details about the error for debugging
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
        })
      }
      return null
    }
  }, [])

  useEffect(() => {
    if (!supabase) {
      // For development: create a mock user when Supabase is not available
      const mockUser: SimpleUser = {
        id: 'mock-user-dev',
        email: 'dev@example.com',
        user_metadata: {},
      }
      const mockSession: SimpleSession = {
        user: mockUser,
        access_token: 'mock-token',
      }

      setSession(mockSession)
      setUser(mockUser)
      setLoading(false)
      return
    }

    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        const simpleSession: SimpleSession = {
          user: session?.user
            ? ({
                id: session.user.id,
                email: session.user.email || undefined,
                user_metadata: session.user.user_metadata,
              } as SimpleUser)
            : null,
          access_token: session?.access_token,
        }

        setSession(simpleSession)
        setUser(simpleSession.user)
        setLoading(false)
      } catch (error) {
        console.warn('Error getting session:', error)
        // For development: fallback to mock user on error
        const mockUser: SimpleUser = {
          id: 'mock-user-error',
          email: 'dev@example.com',
          user_metadata: {},
        }
        const mockSession: SimpleSession = {
          user: mockUser,
          access_token: 'mock-token',
        }

        setSession(mockSession)
        setUser(mockUser)
        setLoading(false)
      }
    }

    getSession()

    // Set up auth state change listener with error handling
    let subscription: any = null
    try {
      const result = supabase.auth.onAuthStateChange((_event, session) => {
        try {
          const simpleSession: SimpleSession = {
            user: session?.user
              ? ({
                  id: session.user.id,
                  email: session.user.email || undefined,
                  user_metadata: session.user.user_metadata,
                } as SimpleUser)
              : null,
            access_token: session?.access_token,
          }

          setSession(simpleSession)
          setUser(simpleSession.user)
          setLoading(false)
          router.refresh()
        } catch (error) {
          console.warn('Error in auth state change:', error)
          // For development: fallback to mock user on error
          const mockUser: SimpleUser = {
            id: 'mock-user-auth-error',
            email: 'dev@example.com',
            user_metadata: {},
          }
          const mockSession: SimpleSession = {
            user: mockUser,
            access_token: 'mock-token',
          }

          setSession(mockSession)
          setUser(mockUser)
          setLoading(false)
        }
      })
      subscription = result.data.subscription
    } catch (error) {
      console.warn('Error setting up auth state change listener:', error)
    }

    return () => {
      try {
        subscription?.unsubscribe()
      } catch (error) {
        console.warn('Error unsubscribing from auth state change:', error)
      }
    }
  }, [supabase, router])

  const value: SupabaseContext = {
    supabase,
    user,
    session,
    loading,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useSupabase = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }

  // Add helpful warnings when supabase client is null
  if (context.supabase === null && typeof window !== 'undefined') {
    console.warn(
      'Supabase client is null. This may cause issues with database operations.'
    )
  }

  return context
}
