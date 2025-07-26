'use client'

import { useState, useEffect } from 'react'
import { SignInForm } from '@/components/auth/sign-in-form'
import { SignUpForm } from '@/components/auth/sign-up-form'
import { PasswordResetForm } from '@/components/auth/password-reset-form'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

type AuthMode = 'signin' | 'signup' | 'reset'

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('signin')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) {
        router.push('/')
        return
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [supabase.auth, router])

  if (isLoading) {
    return (
      <div className='flex h-screen bg-background items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
      </div>
    )
  }

  return (
    <div className='flex h-screen bg-background items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {mode === 'signin' && (
          <SignInForm
            onToggleMode={() => setMode('signup')}
            onForgotPassword={() => setMode('reset')}
          />
        )}
        {mode === 'signup' && (
          <SignUpForm onToggleMode={() => setMode('signin')} />
        )}
        {mode === 'reset' && (
          <PasswordResetForm onBack={() => setMode('signin')} />
        )}
      </div>
    </div>
  )
}
