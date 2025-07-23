'use client'

import React, { Component, ReactNode } from 'react'
import * as Sentry from '@sentry/nextjs'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: (error: Error, reset: () => void) => ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to Sentry
    Sentry.withScope((scope) => {
      scope.setContext('errorBoundary', {
        componentStack: errorInfo.componentStack,
      })
      Sentry.captureException(error)
    })

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error)
      console.error('Error info:', errorInfo)
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  override render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback(this.state.error!, this.reset)
      }

      // Default fallback UI
      return (
        <div className='flex min-h-[400px] flex-col items-center justify-center p-8'>
          <div className='text-center max-w-md'>
            <AlertCircle className='mx-auto h-12 w-12 text-destructive mb-4' />
            <h2 className='text-2xl font-semibold mb-2'>
              Something went wrong
            </h2>
            <p className='text-muted-foreground mb-6'>
              {process.env.NODE_ENV === 'development'
                ? this.state.error?.message
                : 'An unexpected error occurred. Please try refreshing the page.'}
            </p>
            <div className='flex gap-4 justify-center'>
              <Button
                onClick={() => window.location.reload()}
                variant='default'
              >
                <RefreshCw className='mr-2 h-4 w-4' />
                Refresh Page
              </Button>
              <Button onClick={this.reset} variant='outline'>
                Try Again
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className='mt-6 text-left'>
                <summary className='cursor-pointer text-sm text-muted-foreground'>
                  Error Details
                </summary>
                <pre className='mt-2 text-xs bg-muted p-4 rounded overflow-auto max-h-64'>
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for using error boundary
export function useErrorHandler() {
  return (error: Error) => {
    Sentry.captureException(error)
    throw error
  }
}

// Component-specific error boundary with custom UI
export function ComponentErrorBoundary({
  children,
  componentName,
}: {
  children: ReactNode
  componentName: string
}) {
  return (
    <ErrorBoundary
      fallback={(_error, reset) => (
        <div className='p-4 border border-destructive/20 rounded-lg bg-destructive/5'>
          <p className='text-sm text-destructive mb-2'>
            Failed to load {componentName}
          </p>
          <Button onClick={reset} variant='outline' size='sm'>
            Retry
          </Button>
        </div>
      )}
      onError={(error) => {
        Sentry.withScope((scope) => {
          scope.setTag('component', componentName)
          Sentry.captureException(error)
        })
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
