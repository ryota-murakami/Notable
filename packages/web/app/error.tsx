'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to console
    console.error('Application error:', error)
  }, [error])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4'>
      <div className='text-center max-w-md space-y-6'>
        <div className='flex justify-center'>
          <AlertCircle className='h-16 w-16 text-destructive' />
        </div>

        <div className='space-y-2'>
          <h1 className='text-3xl font-bold'>Oops! Something went wrong</h1>
          <p className='text-muted-foreground'>
            We encountered an unexpected error. Don&apos;t worry, our team has
            been notified.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className='rounded-lg bg-muted p-4 text-left'>
            <p className='font-mono text-sm text-destructive'>
              {error.message}
            </p>
            {error.digest && (
              <p className='mt-2 text-xs text-muted-foreground'>
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className='flex gap-4 justify-center'>
          <Button onClick={reset} className='gap-2'>
            <RefreshCw className='h-4 w-4' />
            Try Again
          </Button>
          <Button variant='outline' asChild>
            <Link href='/' className='gap-2'>
              <Home className='h-4 w-4' />
              Go Home
            </Link>
          </Button>
        </div>

        <p className='text-sm text-muted-foreground'>
          If this problem persists, please contact support.
        </p>
      </div>
    </div>
  )
}
