# Notable Deployment Guide

This guide covers the complete deployment process for Notable, a premium note-taking application built with Next.js, Supabase, and Electron.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Database Setup](#database-setup)
4. [Application Deployment](#application-deployment)
5. [Mobile App Deployment](#mobile-app-deployment)
6. [Desktop App Distribution](#desktop-app-distribution)
7. [Monitoring & Observability](#monitoring--observability)
8. [CI/CD Pipeline](#cicd-pipeline)
9. [Production Checklist](#production-checklist)
10. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Accounts and Services

- **Vercel Account**: For web application hosting
- **Supabase Account**: For database and authentication
- **Sentry Account**: For error tracking
- **Resend Account**: For email services
- **Apple Developer Account**: For iOS app distribution
- **Google Play Console**: For Android app distribution
- **Domain**: For custom domain (optional)

### Development Environment

- Node.js 18+
- pnpm (recommended package manager)
- Git
- Docker (for local database)

## Environment Setup

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/your-org/notable.git
cd notable
pnpm install
```

### 2. Environment Variables

Copy environment files and configure:

```bash
# Web application
cp .env.example .env.local
cp .env.production.example .env.production

# Mobile application
cp mobile/.env.example mobile/.env.local
```

### Required Environment Variables

#### Core Application

```env
# Next.js
NEXT_PUBLIC_APP_URL=https://notable.com
NEXT_PUBLIC_APP_NAME="Notable"
NEXT_PUBLIC_SITE_URL=https://notable.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# Authentication
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@notable.com

# Storage
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
```

#### Monitoring & Analytics

```env
# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_ORG=your-org
SENTRY_PROJECT=notable
SENTRY_AUTH_TOKEN=your-auth-token

# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key

# Monitoring
REDIS_URL=redis://your-redis-url
OTEL_SERVICE_NAME=notable-production
```

## Database Setup

### 1. Supabase Project Setup

1. Create a new Supabase project
2. Configure authentication providers
3. Set up RLS policies
4. Run database migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### 2. Database Migrations

Apply all migrations in order:

```bash
# Core schema
supabase migration up --file 20240101_initial_schema.sql
supabase migration up --file 20240102_auth_schema.sql
supabase migration up --file 20240103_notes_schema.sql
supabase migration up --file 20240120_create_monitoring_tables.sql

# Verify migrations
supabase db diff
```

### 3. Seed Data (Optional)

```bash
# Run seed script
pnpm db:seed
```

## Application Deployment

### Vercel Deployment

#### 1. Vercel Project Setup

```bash
# Install Vercel CLI
npm install -g vercel

# Login and link project
vercel login
vercel link

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# ... add all required environment variables
```

#### 2. Deployment Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    },
    "app/edge/**/*.ts": {
      "runtime": "edge"
    }
  },
  "regions": ["iad1", "fra1", "sin1"],
  "rewrites": [
    {
      "source": "/healthz",
      "destination": "/api/health"
    }
  ]
}
```

#### 3. Deploy

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Add domain in Vercel dashboard
2. Configure DNS records
3. Enable SSL certificate

```bash
# Add domain via CLI
vercel domains add notable.com
vercel domains add www.notable.com

# Verify domain
vercel domains verify notable.com
```

## Mobile App Deployment

### Prerequisites

```bash
cd mobile
npx expo install --fix
```

### Development Build

```bash
# Create development build
npx eas build --profile development --platform all

# Install on device
npx eas device:create
```

### Production Build

#### iOS

```bash
# Build for iOS
npx eas build --profile production --platform ios

# Submit to App Store
npx eas submit --platform ios
```

#### Android

```bash
# Build for Android
npx eas build --profile production --platform android

# Submit to Google Play
npx eas submit --platform android
```

### App Store Configuration

#### iOS App Store Connect

1. Create app record
2. Configure app information
3. Set up app review information
4. Configure pricing and availability
5. Submit for review

#### Google Play Console

1. Create app in Play Console
2. Configure store listing
3. Set up content rating
4. Configure pricing and distribution
5. Upload APK/AAB and submit

## Desktop App Distribution

### Prerequisites

```bash
# Install Electron dependencies
pnpm install:desktop
```

### Build for Distribution

```bash
# Build for current platform
pnpm electron:build

# Build for all platforms
pnpm electron:build:all

# Build for specific platform
pnpm electron:build:mac
pnpm electron:build:win
pnpm electron:build:linux
```

### Code Signing

#### macOS

```bash
# Install certificate
security import certificate.p12 -k ~/Library/Keychains/login.keychain

# Sign app
codesign --force --deep --sign "Developer ID Application: Your Name" dist/Notable.app
```

#### Windows

```bash
# Sign with SignTool
signtool sign /f certificate.pfx /p password /t http://timestamp.digicert.com dist/Notable.exe
```

### Distribution

#### macOS

```bash
# Notarize app
xcrun notarytool submit Notable.dmg --keychain-profile "Notable" --wait

# Create installer
pnpm electron:dist:mac
```

#### Windows

```bash
# Create installer
pnpm electron:dist:win
```

#### Auto-updater Setup

Configure `app-update.yml`:

```yaml
provider: github
owner: your-org
repo: notable
updaterCacheDirName: notable-updater
```

## Monitoring & Observability

### Sentry Setup

1. Create Sentry project
2. Configure error tracking
3. Set up performance monitoring
4. Configure alerts

### Prometheus Metrics

Access metrics endpoint: `https://notable.com/api/monitoring/metrics?format=prometheus`

### Health Checks

- **Liveness**: `https://notable.com/api/health`
- **Readiness**: `https://notable.com/api/health?check=ready`

### Monitoring Dashboard

Access at: `https://notable.com/dashboard/monitoring`

## CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline automatically:

1. **Quality Checks**
   - ESLint and TypeScript checks
   - Unit and integration tests
   - E2E tests with Playwright
   - Security scanning

2. **Build and Deploy**
   - Build Next.js application
   - Deploy to Vercel
   - Build mobile apps (on release)
   - Build desktop apps (on release)

3. **Post-deployment**
   - Health checks
   - Smoke tests
   - Slack notifications

### Manual Deployment

```bash
# Run deployment script
./scripts/deploy.sh production

# Or use npm script
pnpm deploy:production
```

### Rollback Process

```bash
# Rollback to previous version
vercel rollback

# Or use deployment script
./scripts/deploy.sh rollback
```

## Production Checklist

### Pre-deployment

- [ ] All environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates valid
- [ ] Domain configuration complete
- [ ] Error tracking configured
- [ ] Analytics setup complete
- [ ] Performance monitoring enabled
- [ ] Backup strategy in place

### Security

- [ ] RLS policies enabled
- [ ] API rate limiting configured
- [ ] CORS policies set
- [ ] Security headers enabled
- [ ] Secrets rotation schedule
- [ ] Access controls reviewed

### Performance

- [ ] CDN configuration optimized
- [ ] Image optimization enabled
- [ ] Bundle analysis completed
- [ ] Database query optimization
- [ ] Caching strategy implemented
- [ ] Edge functions deployed

### Monitoring

- [ ] Health checks configured
- [ ] Alerts set up
- [ ] Logging configured
- [ ] Uptime monitoring enabled
- [ ] Performance monitoring active
- [ ] Error rate thresholds set

## Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear Next.js cache
rm -rf .next
pnpm build

# Clear node_modules
rm -rf node_modules
pnpm install
```

#### Database Connection Issues

```bash
# Test database connection
pnpm db:test

# Check Supabase status
supabase status
```

#### Environment Variable Issues

```bash
# Verify environment variables
vercel env ls

# Pull latest environment
vercel env pull .env.production
```

### Performance Issues

#### Slow Page Load

1. Check bundle size: `pnpm analyze`
2. Review Core Web Vitals in Vercel Analytics
3. Optimize images and assets
4. Review database queries

#### High Memory Usage

1. Check memory leaks: `pnpm test:memory`
2. Review service worker cache
3. Optimize state management
4. Check for circular references

### Deployment Issues

#### Failed Vercel Deploy

```bash
# Check build logs
vercel logs

# Redeploy with verbose output
vercel --debug
```

#### Database Migration Failures

```bash
# Check migration status
supabase migration list

# Fix and rerun migration
supabase migration repair --status 20240101000000
supabase migration up
```

### Monitoring Issues

#### Missing Metrics

1. Verify API endpoints are accessible
2. Check database permissions
3. Review monitoring configuration
4. Test metrics collection

#### Alert Fatigue

1. Review alert thresholds
2. Implement alert grouping
3. Set up escalation policies
4. Configure maintenance windows

## Support

### Documentation

- [API Documentation](./API.md)
- [Architecture Guide](./ARCHITECTURE.md)
- [Contributing Guide](./CONTRIBUTING.md)

### Contact

- **Technical Issues**: Create GitHub issue
- **Security Issues**: security@notable.com
- **General Support**: support@notable.com

### Emergency Contacts

- **On-call Engineer**: +1-xxx-xxx-xxxx
- **DevOps Lead**: devops@notable.com
- **CTO**: cto@notable.com

---

_Last updated: 2025-01-18_
