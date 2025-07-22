import * as Sentry from '@sentry/nextjs'

const sentryDsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    // Filter out certain errors
    beforeSend(event, hint) {
      if (process.env.NODE_ENV === 'development') {
        // Log to console in development instead of sending to Sentry
        console.error('Sentry Server Event:', event)
        console.error('Error:', hint.originalException)
        return null
      }

      return event
    },

    // Set context
    initialScope: {
      tags: {
        component: 'server',
      },
    },

    // Disable in local development
    enabled: process.env.NODE_ENV === 'production',
  })
}
