import React, { createContext, useContext, ReactNode } from 'react'

interface User {
  id: string
  email?: string
  name?: string
}

interface MockSupabaseAuth {
  signInWithPassword: (credentials: { email: string; password: string }) => Promise<{ error: null }>
  signInWithOAuth: (options: { provider: string }) => Promise<{ error: null }>
  signUp: (options: any) => Promise<{ error: null }>
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

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  // Mock implementation for build purposes
  const mockSupabase: MockSupabase = {
    auth: {
      signInWithPassword: async () => ({ error: null }),
      signInWithOAuth: async () => ({ error: null }),
      signUp: async () => ({ error: null }),
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