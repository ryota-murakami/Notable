# Production Deployment Environment Variables Guide

This document lists all environment variables and credentials required for deploying Notable to production.

## Core Application Environment Variables

### Next.js Configuration

- `NEXT_PUBLIC_APP_URL` - **Required**: The production URL of your application (e.g., https://notable.com)
- `NEXT_PUBLIC_APP_NAME` - Optional: Application name (default: "Notable")
- `NEXT_PUBLIC_APP_DESCRIPTION` - Optional: Application description for SEO
- `NEXT_PUBLIC_APP_VERSION` - Optional: Application version (automatically set during build)
- `NEXT_PUBLIC_SITE_URL` - **Required**: Same as APP_URL, used for authentication callbacks
- `NODE_ENV` - **Required**: Should be set to "production"

### Supabase (Database & Auth)

- `NEXT_PUBLIC_SUPABASE_URL` - **Required**: Your Supabase project URL (e.g., https://your-project.supabase.co)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - **Required**: Supabase anonymous/public key
- `SUPABASE_SERVICE_ROLE_KEY` - **Required**: Supabase service role key (server-side only)
- `SUPABASE_JWT_SECRET` - **Required**: JWT secret from Supabase dashboard
- `DATABASE_URL` - **Required**: PostgreSQL connection string

### Authentication Providers

- `GOOGLE_CLIENT_ID` - **Required**: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - **Required**: Google OAuth client secret
- `GITHUB_CLIENT_ID` - Optional: GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET` - Optional: GitHub OAuth client secret
- `NEXTAUTH_SECRET` - **Required**: NextAuth.js secret for session encryption
- `NEXTAUTH_URL` - **Required**: Full URL where NextAuth.js is deployed

### Email Service (Resend)

- `RESEND_API_KEY` - **Required**: Resend API key for transactional emails
- `EMAIL_FROM` - **Required**: Default "from" email address (e.g., noreply@notable.com)

### File Storage (Uploadthing)

- `UPLOADTHING_SECRET` - **Required**: Uploadthing secret key
- `UPLOADTHING_APP_ID` - **Required**: Uploadthing application ID

### OpenAI Integration

- `OPENAI_API_KEY` - **Required**: OpenAI API key for AI features

## Analytics & Monitoring

### Vercel Analytics

- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Optional: Vercel Analytics ID
- `VERCEL_SPEED_INSIGHTS_ID` - Optional: Vercel Speed Insights ID

### PostHog Analytics

- `NEXT_PUBLIC_POSTHOG_KEY` - Optional: PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` - Optional: PostHog host URL (default: https://app.posthog.com)

### Sentry Error Tracking

- `NEXT_PUBLIC_SENTRY_DSN` - **Recommended**: Sentry DSN for client-side error tracking
- `SENTRY_DSN` - **Recommended**: Sentry DSN for server-side error tracking
- `SENTRY_ORG` - **Recommended**: Sentry organization slug
- `SENTRY_PROJECT` - **Recommended**: Sentry project slug
- `SENTRY_AUTH_TOKEN` - **Recommended**: Sentry auth token for source map uploads

### OpenTelemetry

- `OTEL_SERVICE_NAME` - Optional: Service name for tracing (e.g., notable-production)
- `OTEL_EXPORTER_OTLP_ENDPOINT` - Optional: OpenTelemetry collector endpoint
- `OTEL_EXPORTER_OTLP_HEADERS` - Optional: Authorization headers for OTLP

## Infrastructure

### Redis (Caching & Rate Limiting)

- `REDIS_URL` - **Recommended**: Redis connection URL (e.g., redis://default:password@host:6379)

### API Configuration

- `API_URL` - Optional: Backend API URL (default: http://localhost:4000)
- `SOCKET_URL` - Optional: WebSocket server URL for real-time features
- `API_SECRET_KEY` - Optional: Secret key for API authentication
- `WEBHOOK_SECRET` - Optional: Secret for webhook signature verification

### Security & Rate Limiting

- `RATE_LIMIT_WINDOW` - Optional: Rate limit window in milliseconds (default: 60000)
- `RATE_LIMIT_MAX_REQUESTS` - Optional: Maximum requests per window (default: 100)
- `NEXT_PUBLIC_CSP_REPORT_URI` - Optional: Content Security Policy reporting endpoint
- `SECURITY_HEADERS_REPORT_ONLY` - Optional: Whether to use report-only mode for security headers
- `JWT_SECRET` - **Required**: JWT secret for token generation

### Monitoring & Alerts

- `METRICS_AUTH_TOKEN` - Optional: Authentication token for metrics endpoint
- `ALERTMANAGER_WEBHOOK_SECRET` - Optional: Secret for alert webhook validation
- `SLACK_WEBHOOK_URL` - Optional: Slack webhook for notifications
- `ALERT_EMAIL` - Optional: Email address for critical alerts

## Feature Flags

- `NEXT_PUBLIC_ENABLE_PWA` - Optional: Enable Progressive Web App features
- `NEXT_PUBLIC_ENABLE_OFFLINE_MODE` - Optional: Enable offline mode
- `NEXT_PUBLIC_ENABLE_AI_FEATURES` - Optional: Enable AI features (default: true)

## Deployment Platforms

### Vercel

When deploying to Vercel, set environment variables through:

1. Vercel Dashboard: Project Settings > Environment Variables
2. Vercel CLI: `vercel env add`

### Docker

For Docker deployments, create a `.env.production` file or use Docker secrets.

## Example .env.production

```bash
# Core
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://notable.com
NEXT_PUBLIC_SITE_URL=https://notable.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret
DATABASE_URL=postgresql://postgres:password@db.your-project.supabase.co:5432/postgres

# Auth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://notable.com

# Email
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@notable.com

# Storage
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id

# AI
OPENAI_API_KEY=your-openai-api-key

# Security
JWT_SECRET=your-jwt-secret

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

## Security Best Practices

1. **Never commit credentials**: Use `.env.local` for local development only
2. **Use secrets management**: Use platform-specific secrets management (Vercel Env, AWS Secrets Manager, etc.)
3. **Rotate regularly**: Implement a rotation schedule for API keys and secrets
4. **Principle of least privilege**: Only grant necessary permissions to service accounts
5. **Monitor access**: Log and monitor access to sensitive credentials

## Validation

The application validates required environment variables at startup. Missing required variables will prevent the application from starting.

## Getting Credentials

1. **Supabase**: Create a project at [supabase.com](https://supabase.com)
2. **Google OAuth**: Set up OAuth 2.0 in [Google Cloud Console](https://console.cloud.google.com)
3. **Resend**: Sign up at [resend.com](https://resend.com)
4. **Uploadthing**: Create an app at [uploadthing.com](https://uploadthing.com)
5. **OpenAI**: Get API key from [platform.openai.com](https://platform.openai.com)
6. **PostHog**: Sign up at [posthog.com](https://posthog.com)
7. **Sentry**: Create a project at [sentry.io](https://sentry.io)
