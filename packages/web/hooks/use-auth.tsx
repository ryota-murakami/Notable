'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { User, Session } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
  signOut: () => Promise<void>
  refreshSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        console.error('Error getting session:', error)
      } else {
        setSession(session)
        setUser(session?.user ?? null)
      }
      setIsLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)

      // Handle specific auth events
      if (event === 'SIGNED_IN') {
        console.log('User signed in:', session?.user?.email)
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('Session token refreshed')
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const refreshSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.refreshSession()
    if (error) {
      console.error('Error refreshing session:', error)
      throw error
    }
    setSession(session)
    setUser(session?.user ?? null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        signOut,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Hook for getting user profile data
export function useUserProfile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    if (!user) {
      setProfile(null)
      return
    }

    const fetchProfile = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) {
          setError(error.message)
        } else {
          setProfile(data)
        }
      } catch (err) {
        setError('Failed to fetch user profile')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [user, supabase])

  const updateProfile = async (updates: {
    name?: string
    avatar_url?: string
  }) => {
    if (!user) throw new Error('No user logged in')

    const { error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', user.id)

    if (error) throw error

    // Refetch profile
    const { data } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(data)
  }

  return {
    profile,
    isLoading,
    error,
    updateProfile,
  }
}
