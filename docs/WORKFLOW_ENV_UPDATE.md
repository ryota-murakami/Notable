# GitHub Actions Workflow Environment Variables Update

## Overview

The GitHub Actions workflows need to be updated to use repository secrets instead of placeholder values.

## Required Updates

### 1. E2E Tests Workflow (`.github/workflows/e2e.yml`)

Update lines 100-104 to use GitHub secrets:

```yaml
env:
  CI: true
  PLAYWRIGHT_BROWSERS_PATH: ${{ env.PLAYWRIGHT_BROWSERS_PATH }}
  # Use actual secrets from repository settings
  NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
  NEXT_PUBLIC_APP_URL: ${{ secrets.NEXT_PUBLIC_APP_URL }}
  NEXT_PUBLIC_APP_NAME: ${{ secrets.NEXT_PUBLIC_APP_NAME }}
  NEXT_PUBLIC_APP_DESCRIPTION: ${{ secrets.NEXT_PUBLIC_APP_DESCRIPTION }}
  NEXT_PUBLIC_SENTRY_DSN: ${{ secrets.NEXT_PUBLIC_SENTRY_DSN }}
  NODE_ENV: 'test'
```

### 2. Build Workflow (if needed)

Check if the build workflow needs any environment variables for production builds.

### 3. Release Workflow (if needed)

The release workflow might need additional secrets like:
- `SENTRY_AUTH_TOKEN` for source map uploads
- `VERCEL_TOKEN` for deployments

## Implementation Steps

1. **Add all secrets to GitHub repository**:
   ```bash
   ./scripts/setup-github-secrets.sh
   ```

2. **Update workflow files** to reference secrets:
   - Replace placeholder values with `${{ secrets.SECRET_NAME }}`
   - Add any missing environment variables needed

3. **Test the workflows**:
   - Create a test PR to verify workflows run correctly
   - Check that all tests pass with real environment variables

## Security Considerations

- Only use `NEXT_PUBLIC_*` variables in frontend code
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side
- Use environment-specific secrets when possible
- Rotate secrets regularly

## Vercel Deployment

For Vercel deployments, also add the same environment variables:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# Continue for all variables...
```

## Monitoring

After implementation:
1. Monitor GitHub Actions runs for any failures
2. Check Sentry for proper error tracking
3. Verify Supabase connections work correctly
4. Test authentication flows