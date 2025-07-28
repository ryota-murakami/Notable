import * as Sentry from '@sentry/nextjs'
import { isDevelopment, isProduction } from './lib/utils/environment'

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: isProduction() ? 0.1 : 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    replaysOnErrorSampleRate: 1.0,

    // This is the default value, but we're being explicit
    replaysSessionSampleRate: 0.1,

    // You can remove this option if you're not planning to use the Sentry Session Replay feature:
    integrations: [
      Sentry.replayIntegration({
        // Additional Replay configuration goes in here
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],

    // Filter local errors in development
    beforeSend(event, hint) {
      if (isDevelopment()) {
        // Log to console in development instead of sending to Sentry
        console.error('Sentry Event:', event)
        console.error('Error:', hint.originalException)
        return null
      }

      // Filter out specific errors
      const error = hint.originalException

      // Ignore network errors that are expected
      if (error instanceof Error) {
        if (
          error.message?.includes('NetworkError') ||
          error.message?.includes('Failed to fetch')
        ) {
          return null
        }
      }

      return event
    },

    // Set user context
    initialScope: {
      tags: {
        component: 'client',
      },
    },
  })
}
