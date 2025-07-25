import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { PropsWithChildren } from 'react'

export default async function NotesLayout({ children }: PropsWithChildren) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth')
  }

  return <>{children}</>
}
