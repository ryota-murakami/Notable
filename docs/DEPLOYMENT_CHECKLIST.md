# Production Deployment Checklist

This checklist ensures all required steps are completed before deploying Notable to production.

## Pre-Deployment Setup

### 1. Supabase Setup ✓

- [ ] Create a Supabase project at [supabase.com](https://supabase.com)
- [ ] Copy the project URL and anon key
- [ ] Copy the service role key (keep secure!)
- [ ] Copy the JWT secret from project settings
- [ ] Get the database connection string
- [ ] Run all database migrations
- [ ] Enable Row Level Security (RLS) on all tables
- [ ] Configure auth providers in Supabase dashboard

### 2. Google OAuth Setup ✓

- [ ] Go to [Google Cloud Console](https://console.cloud.google.com)
- [ ] Create a new project or select existing
- [ ] Enable Google+ API
- [ ] Create OAuth 2.0 credentials
- [ ] Add authorized redirect URIs:
  - `https://your-domain.com/api/auth/callback/google`
  - `https://your-project.supabase.co/auth/v1/callback`
- [ ] Copy Client ID and Client Secret

### 3. Email Service (Resend) ✓

- [ ] Sign up at [resend.com](https://resend.com)
- [ ] Verify your domain
- [ ] Create an API key
- [ ] Configure sender email address

### 4. File Storage (Uploadthing) ✓

- [ ] Create account at [uploadthing.com](https://uploadthing.com)
- [ ] Create a new app
- [ ] Copy the secret key and app ID
- [ ] Configure upload limits if needed

### 5. OpenAI API ✓

- [ ] Get API key from [platform.openai.com](https://platform.openai.com)
- [ ] Set up billing and usage limits
- [ ] Monitor API usage

### 6. Analytics Setup (Optional)

- [ ] **PostHog**:
  - [ ] Sign up at [posthog.com](https://posthog.com)
  - [ ] Create a project
  - [ ] Copy the API key
- [ ] **Sentry**:
  - [ ] Create project at [sentry.io](https://sentry.io)
  - [ ] Copy DSN for both client and server
  - [ ] Generate auth token for source maps

### 7. Redis Setup (Optional but Recommended)

- [ ] Set up Redis instance (Upstash, Redis Cloud, etc.)
- [ ] Copy connection URL
- [ ] Configure max connections

## Environment Variables

### Required Variables ✓

```bash
# Core
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=

# Auth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
JWT_SECRET=

# Email
RESEND_API_KEY=
EMAIL_FROM=

# Storage
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# AI
OPENAI_API_KEY=
```

## Deployment Steps

### Vercel Deployment

1. **Connect Repository**
   - [ ] Import project from GitHub
   - [ ] Select the correct branch (main/production)

2. **Configure Build Settings**
   - [ ] Framework Preset: Next.js
   - [ ] Build Command: `pnpm build` or `npm run build`
   - [ ] Output Directory: `.next`
   - [ ] Install Command: `pnpm install` or `npm install`

3. **Set Environment Variables**
   - [ ] Add all required environment variables
   - [ ] Use different values for Preview/Production
   - [ ] Enable "Automatically expose System Environment Variables"

4. **Configure Domains**
   - [ ] Add custom domain
   - [ ] Configure DNS records
   - [ ] Enable HTTPS (automatic on Vercel)

5. **Configure Functions**
   - [ ] Set function regions close to your database
   - [ ] Configure function timeouts if needed

### Docker Deployment

1. **Build Image**

   ```bash
   docker build -t notable:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     --env-file .env.production \
     -p 3000:3000 \
     notable:latest
   ```

## Post-Deployment Verification

### Functionality Tests ✓

- [ ] Homepage loads correctly
- [ ] Sign up with email works
- [ ] Google OAuth login works
- [ ] Create and save notes
- [ ] Upload images/files
- [ ] AI features work
- [ ] Real-time sync works
- [ ] 2FA setup and verification works

### Performance Checks ✓

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify caching headers
- [ ] Test CDN distribution

### Security Checks ✓

- [ ] SSL certificate valid
- [ ] Security headers present
- [ ] Environment variables not exposed
- [ ] API rate limiting active
- [ ] CORS properly configured

### Monitoring Setup ✓

- [ ] Error tracking active (Sentry)
- [ ] Analytics collecting data
- [ ] Uptime monitoring configured
- [ ] Log aggregation working
- [ ] Alerts configured

## Rollback Plan

1. **Vercel Rollback**
   - Use Vercel dashboard to instantly rollback
   - Or use CLI: `vercel rollback`

2. **Database Rollback**
   - Keep database backups before migrations
   - Have rollback migrations ready

3. **Emergency Contacts**
   - DevOps team: ****\_\_\_****
   - Database admin: ****\_\_\_****
   - Security team: ****\_\_\_****

## Common Issues

### Build Failures

- Check Node.js version compatibility
- Verify all dependencies installed
- Check for TypeScript errors

### Runtime Errors

- Verify all environment variables set
- Check database connectivity
- Verify API endpoints accessible

### Performance Issues

- Enable caching (Redis)
- Optimize images
- Enable CDN
- Check database queries

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Notable GitHub Issues](https://github.com/ryota-murakami/Notable/issues)
