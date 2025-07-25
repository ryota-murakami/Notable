import React, { createContext, useContext, ReactNode } from 'react'

interface User {
  id: string
  email?: string
  name?: string
}

interface SupabaseContextType {
  supabase: unknown
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
  const value: SupabaseContextType = {
    supabase: null,
    user: null,
    loading: false,
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}