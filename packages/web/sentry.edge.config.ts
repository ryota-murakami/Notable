import * as Sentry from '@sentry/nextjs'

const sentryDsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    // Set context
    initialScope: {
      tags: {
        component: 'edge',
      },
    },

    // Disable in local development
    enabled: process.env.NODE_ENV === 'production',
  })
}
