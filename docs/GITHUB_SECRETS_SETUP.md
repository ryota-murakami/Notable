# GitHub Repository Secrets Setup Guide

## Critical Security Notice

⚠️ **IMPORTANT**: Sensitive environment variables are currently exposed in the repository. These should be immediately moved to GitHub Secrets and removed from version control.

## Required GitHub Secrets

Add the following secrets to your GitHub repository settings under Settings → Secrets and variables → Actions:

### Core Application Variables
- `NEXT_PUBLIC_APP_URL`: Production URL (e.g., `https://notable-web.vercel.app/`)
- `NEXT_PUBLIC_APP_NAME`: `Notable`
- `NEXT_PUBLIC_APP_DESCRIPTION`: `Notable is just a note-taking app`

### Supabase Configuration
- `NEXT_PUBLIC_SUPABASE_URL`: `https://enavkqxciqspqpziocom.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key (safe for frontend)
- `SUPABASE_SERVICE_ROLE_KEY`: **CRITICAL - Never expose to frontend**
- `SUPABASE_JWT_SECRET`: JWT secret for token verification
- `DATABASE_URL`: PostgreSQL connection string

### Third-Party Services
- `NEXT_PUBLIC_SENTRY_DSN`: Sentry error tracking DSN
- `SENTRY_ORG`: `laststance`
- `SENTRY_PROJECT`: `notable`
- `SENTRY_AUTH_TOKEN`: For source map uploads
- `RESEND_API_KEY`: Email service API key
- `SLACK_WEBHOOK_URL`: Slack notifications webhook
- `UPLOADTHING_APP_ID`: File upload service ID
- `UPLOADTHING_SECRET`: File upload service secret

### Authentication
- `JWT_SECRET`: Custom JWT secret for auth

## Setup Instructions

1. **Via GitHub UI**:
   ```
   1. Go to your repository on GitHub
   2. Click Settings → Secrets and variables → Actions
   3. Click "New repository secret"
   4. Add each secret with its name and value
   ```

2. **Via GitHub CLI**:
   ```bash
   # Example for each secret
   gh secret set NEXT_PUBLIC_SUPABASE_URL --body "https://enavkqxciqspqpziocom.supabase.co"
   gh secret set SUPABASE_SERVICE_ROLE_KEY --body "your-service-role-key"
   # Continue for all secrets...
   ```

3. **For Vercel Deployment**:
   ```bash
   # Use Vercel CLI to add environment variables
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   vercel env add SUPABASE_SERVICE_ROLE_KEY production
   # Continue for all secrets...
   ```

## Environment-Specific Configuration

### Development (Local)
- Use `.env.local` (never commit this file)
- Add `.env.local` to `.gitignore`

### Production
- Use GitHub Secrets for CI/CD
- Use Vercel Environment Variables for deployment
- Never commit production secrets

## Security Best Practices

1. **Rotate Secrets Regularly**: Update secrets every 90 days
2. **Use Different Keys Per Environment**: Never share keys between dev/staging/prod
3. **Principle of Least Privilege**: Only expose what's needed
4. **Audit Access**: Regularly review who has access to secrets
5. **Monitor Usage**: Set up alerts for unusual API usage

## Immediate Actions Required

1. **Remove all .env files from git history**:
   ```bash
   # Remove files from current commit
   git rm --cached .env .env.local
   
   # Add to .gitignore
   echo ".env" >> .gitignore
   echo ".env.local" >> .gitignore
   echo ".env.production" >> .gitignore
   
   # Commit changes
   git commit -m "security: remove sensitive environment files"
   ```

2. **Rotate all exposed secrets**:
   - Generate new Supabase service role key
   - Update JWT secrets
   - Regenerate API keys for all services
   - Update Slack webhook URL

3. **Update GitHub Actions workflows** to use secrets:
   ```yaml
   env:
     NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
     SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
   ```

## Verification

After setup, verify secrets are properly configured:

1. Check GitHub Actions can access secrets
2. Verify Vercel deployment has all required env vars
3. Test application functionality in production
4. Ensure no secrets are exposed in client-side code

## Emergency Contact

If any secrets are compromised:
1. Immediately rotate the affected secret
2. Review access logs
3. Update all deployments
4. Notify the security team

---

**Note**: This is a critical security issue. Complete these steps immediately to secure the application.