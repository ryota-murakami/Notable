'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthPage() {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    // Check if we just logged out
    if (typeof window !== 'undefined' && window.location.search.includes('logout=true')) {
      // Show logout success toast
      const toast = document.createElement('div')
      toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50'
      toast.textContent = 'Logged out successfully'
      document.body.appendChild(toast)
      setTimeout(() => toast.remove(), 3000)
      
      // Clean up URL
      window.history.replaceState({}, '', '/auth')
    }
    
    // Check if user is already authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/')
      }
    }

    checkAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to Notable</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to access your synced notes
          </p>
        </div>
        
        <div className="mt-8">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(59 130 246)',
                    brandAccent: 'rgb(37 99 235)',
                  },
                },
              },
            }}
            providers={['github', 'google']}
            redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`}
          />
        </div>
      </div>
    </div>
  )
}