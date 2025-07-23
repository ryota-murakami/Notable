import { createContext, useContext, useEffect, useState } from 'react'
import {
  createClient,
  SupabaseClient,
  User,
  Session,
} from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface SupabaseContextType {
  supabase: SupabaseClient | null
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const SupabaseContext = createContext<SupabaseContextType>({
  supabase: null,
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
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
          console.error('Missing required Supabase environment variables')
          setLoading(false)
          return
        }

        const client = createClient(supabaseUrl, supabaseKey, {
          auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
          },
        })

        setSupabase(client)

        // Get initial session
        const {
          data: { session: initialSession },
        } = await client.auth.getSession()
        setSession(initialSession)
        setUser(initialSession?.user ?? null)

        // Listen for auth changes
        const {
          data: { subscription },
        } = client.auth.onAuthStateChange(async (_event, session) => {
          setSession(session)
          setUser(session?.user ?? null)
        })

        setLoading(false)

        return subscription
      } catch (error) {
        console.error('Failed to initialize Supabase:', error)
        setLoading(false)
        return null
      }
    }

    const subscription = initializeSupabase()

    return () => {
      subscription.then((sub) => sub?.unsubscribe())
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return { error }
  }

  const signUp = async (email: string, password: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    return { error }
  }

  const signOut = async () => {
    if (!supabase) return

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
