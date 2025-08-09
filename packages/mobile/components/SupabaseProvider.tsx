import React, { createContext, type ReactNode, useContext } from 'react'
import { type User } from '../types'

interface SignUpOptions {
  email: string
  password: string
  options?: {
    data?: Record<string, unknown>
  }
}

interface MockSupabaseAuth {
  signInWithPassword: (_credentials: {
    email: string
    password: string
  }) => Promise<{ error: { message: string } | null }>
  signInWithOAuth: (_options: {
    provider: string
  }) => Promise<{ error: { message: string } | null }>
  signUp: (
    _options: SignUpOptions
  ) => Promise<{ error: { message: string } | null }>
}

interface MockSupabase {
  auth: MockSupabaseAuth
}

interface SupabaseContextType {
  supabase: MockSupabase | null
  user: User | null
  loading: boolean
}

const SupabaseContext = createContext<SupabaseContextType>({
  supabase: null,
  user: null,
  loading: false,
})

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}

interface SupabaseProviderProps {
  children: ReactNode
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children,
}) => {
  // Mock Supabase implementation - provides no real authentication functionality.
  // All auth methods return successful responses without performing actual operations.
  // This is used after removing real Supabase integration from the mobile package.
  const mockSupabase: MockSupabase = {
    auth: {
      signInWithPassword: (_credentials: {
        email: string
        password: string
      }) => Promise.resolve({ error: null }),

      signInWithOAuth: (_options: { provider: string }) =>
        Promise.resolve({ error: null }),

      signUp: (_options: SignUpOptions) => Promise.resolve({ error: null }),
    },
  }

  const value: SupabaseContextType = {
    supabase: mockSupabase,
    user: null,
    loading: false,
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}
