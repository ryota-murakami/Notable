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
      return null
    }

    try {
      return createClient()
    } catch (error) {
      console.warn('Failed to create Supabase client:', error)
      return null
    }
  }, [])

  useEffect(() => {
    if (!supabase) {
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
        setLoading(false)
      }
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
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
        setLoading(false)
      }
    })

    return () => {
      subscription.unsubscribe()
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
  return context
}
