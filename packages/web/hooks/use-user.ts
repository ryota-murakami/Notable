'use client'

import { useUser as useSupabaseUser } from '@supabase/auth-helpers-react'
import type { User } from '@supabase/auth-helpers-react'

export function useUser(): User | null {
  const user = useSupabaseUser()
  return user
}
