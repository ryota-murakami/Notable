'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import {
  createClientComponentClient,
  type Session,
  type User,
  type SupabaseClient,
} from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

type SupabaseContext = {
  supabase: SupabaseClient | null
  user: User | null
  session: Session | null
  loading: boolean
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Lazily create the Supabase client only on the client side
  const supabase = useMemo(() => {
    if (typeof window === 'undefined') {
      return null
    }

    try {
      return createClientComponentClient()
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
      const {
        data: { session },
      } = await supabase.auth.getSession()

      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
      router.refresh()
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
