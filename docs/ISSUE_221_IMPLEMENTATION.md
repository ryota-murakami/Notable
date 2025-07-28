# Issue #221: Add all .env.local to GitHub's Repository Secrets

## Summary

This issue addresses the critical security need to move all sensitive environment variables from local files to GitHub's repository secrets system.

## Current Status

### ✅ Completed
1. **Security Analysis**: Identified all environment variables that need to be secured
2. **Documentation Created**:
   - `GITHUB_SECRETS_SETUP.md` - Comprehensive guide for setting up secrets
   - `WORKFLOW_ENV_UPDATE.md` - Instructions for updating GitHub Actions
   - `ISSUE_221_IMPLEMENTATION.md` - This implementation guide
3. **Automation Script**: Created `scripts/setup-github-secrets.sh` to automate secret creation

### 🔄 In Progress
1. **GitHub Secrets Setup**: Need to run the setup script to add all secrets
2. **Workflow Updates**: Need to update GitHub Actions to use secrets
3. **Vercel Configuration**: Need to add secrets to Vercel for production

### ⏳ Pending
1. **Secret Rotation**: Generate new keys for all exposed services
2. **Testing**: Verify workflows and deployments work with new secrets
3. **Cleanup**: Ensure no secrets remain in repository

## Environment Variables to Add

### Core Application
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_DESCRIPTION`

### Supabase
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Critical - backend only)
- `SUPABASE_JWT_SECRET`
- `DATABASE_URL`

### Third-Party Services
- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`
- `SENTRY_AUTH_TOKEN`
- `RESEND_API_KEY`
- `SLACK_WEBHOOK_URL`
- `UPLOADTHING_APP_ID`
- `UPLOADTHING_SECRET`
- `JWT_SECRET`

## Implementation Steps

### Step 1: Add Secrets to GitHub
```bash
# Run the automated script
./scripts/setup-github-secrets.sh

# Or manually via GitHub CLI
gh secret set NEXT_PUBLIC_SUPABASE_URL --body "https://enavkqxciqspqpziocom.supabase.co"
# ... repeat for all secrets
```

### Step 2: Update GitHub Actions Workflows
Update `.github/workflows/e2e.yml` and other workflows to use secrets:
```yaml
env:
  NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
  # ... other secrets
```

### Step 3: Configure Vercel
```bash
# Add production environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# ... repeat for all variables
```

### Step 4: Rotate Compromised Secrets
1. **Supabase**: Generate new service role key and JWT secret
2. **Resend**: Generate new API key
3. **Slack**: Create new webhook URL
4. **UploadThing**: Rotate API credentials
5. **Sentry**: Generate new auth token

### Step 5: Verify Everything Works
1. Run GitHub Actions workflows
2. Deploy to Vercel
3. Test all integrations
4. Monitor error tracking

## Security Checklist

- [ ] All secrets added to GitHub repository secrets
- [ ] Workflows updated to use secrets from repository
- [ ] Vercel environment variables configured
- [ ] All exposed secrets rotated
- [ ] `.env` files remain in `.gitignore`
- [ ] No secrets in code or comments
- [ ] Documentation updated
- [ ] Team notified of changes

## Notes

- The `.env.local` file contains production secrets that should never be committed
- Always use `NEXT_PUBLIC_` prefix for client-side variables
- Service role keys must never be exposed to frontend
- Consider using different secrets per environment (dev/staging/prod)

## Related Files
- `/scripts/setup-github-secrets.sh` - Automation script
- `/docs/GITHUB_SECRETS_SETUP.md` - Setup guide
- `/docs/WORKFLOW_ENV_UPDATE.md` - Workflow update guide
- `.github/workflows/e2e.yml` - Needs updating
- `.env.example` - Template for developers