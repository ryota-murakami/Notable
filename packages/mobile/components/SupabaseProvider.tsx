import { createContext, useContext, useEffect, useState } from 'react'
import {
  type Session,
  type SupabaseClient,
  type User,
} from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface SupabaseContextType {
  supabase: SupabaseClient
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const SupabaseContext = createContext<SupabaseContextType>({
  supabase,
  user: null,
  session: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
})

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}

interface SupabaseProviderProps {
  children: React.ReactNode
}

export function SupabaseProvider({ children }: SupabaseProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Get initial session
        const {
          data: { session: initialSession },
        } = await supabase.auth.getSession()
        setSession(initialSession)
        setUser(initialSession?.user ?? null)

        // Listen for auth changes
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
          setSession(session)
          setUser(session?.user ?? null)
        })

        setLoading(false)

        return subscription
      } catch (error) {
        console.error('Failed to initialize auth:', error)
        setLoading(false)
        return null
      }
    }

    const subscription = initializeAuth()

    return () => {
      subscription.then((sub) => sub?.unsubscribe())
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return { error }
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value: SupabaseContextType = {
    supabase,
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}
