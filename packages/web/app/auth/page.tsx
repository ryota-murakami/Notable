'use client'

import { useEffect, useState } from 'react'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDemoLogin = async () => {
    setIsLoading(true)
    // For testing purposes, let's simulate a login by setting some demo session
    // In a real app, this would integrate with Supabase Auth

    // Simulate loading
    setTimeout(() => {
      // For now, just redirect to the home page to test the sync functionality
      window.location.href = '/'
    }, 1000)
  }

  return (
    <div className='flex h-screen bg-background items-center justify-center'>
      <div className='max-w-md w-full space-y-8 p-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Welcome to Notable</h2>
          <p className='mt-2 text-muted-foreground'>
            Sign in to access your synced notes
          </p>
        </div>

        <div className='space-y-4'>
          <button
            onClick={handleDemoLogin}
            disabled={isLoading}
            className='w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50'
          >
            {isLoading ? 'Signing in...' : 'Demo Login (Testing)'}
          </button>

          <div className='text-center text-sm text-muted-foreground'>
            <p>This is a demo auth page for testing sync functionality.</p>
            <p>In production, this would integrate with Supabase Auth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
