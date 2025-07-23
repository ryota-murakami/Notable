'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to signin page
    router.replace('/auth/signin')
  }, [router])

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <p className='text-muted-foreground'>Redirecting...</p>
    </div>
  )
}
