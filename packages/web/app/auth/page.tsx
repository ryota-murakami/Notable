'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()

  useEffect(() => {
    // For development/testing purposes, bypass auth
    // In production, this would be a proper auth flow

    if (process.env.NODE_ENV === 'production') {
      console.error('Auth bypass page accessed in production!')
      router.push('/signin')
      return
    }

    // Set a mock auth cookie to bypass the auth check
    document.cookie =
      'dev-auth-bypass=true; path=/; samesite=strict' +
      (process.env.NODE_ENV === 'development' ? '' : '; secure')

    // Redirect to home
    router.push('/')
  }, [router])

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>Authenticating...</h1>
        <p className='text-muted-foreground'>
          Please wait while we sign you in.
        </p>
      </div>
    </div>
  )
}
