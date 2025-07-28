import * as Sentry from '@sentry/nextjs'
import { isDevelopment, isProduction } from './lib/utils/environment'

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: sentryDsn,
  debug: isDevelopment(),
  enabled: isProduction(),
  environment: isDevelopment() ? 'development' : 'production',
  tracesSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})
