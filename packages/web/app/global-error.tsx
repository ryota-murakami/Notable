'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  _reset,
}: {
  error: Error & { digest?: string }
  _reset: () => void
}) {
  useEffect(() => {
    // Only import and use Sentry on the client side
    if (typeof window !== 'undefined') {
      import('@sentry/nextjs')
        .then((Sentry) => {
          Sentry.captureException(error, {
            tags: {
              component: 'root-error-boundary',
              critical: true,
            },
          })
        })
        .catch(console.error)
    }
  }, [error])

  return (
    <html>
      <body>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '32rem' }}>
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              Critical Application Error
            </h1>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              A critical error occurred. The application needs to restart.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Reload Application
            </button>
            {process.env.NODE_ENV === 'development' && (
              <pre
                style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '0.375rem',
                  textAlign: 'left',
                  fontSize: '0.875rem',
                  overflow: 'auto',
                }}
              >
                {error.message}
              </pre>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
