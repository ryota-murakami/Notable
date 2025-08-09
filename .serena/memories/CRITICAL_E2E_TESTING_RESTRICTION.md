# CRITICAL E2E TESTING RESTRICTION

## ⚠️ IMPORTANT: DO NOT RUN FULL E2E TESTS ⚠️

**Date Created**: 2025-08-09
**Status**: ACTIVE - Issues being fixed

## Current Issues:

1. **1/3 of Playwright specs are not running** - Approximately 25 out of 76 spec files have configuration or setup issues preventing them from executing properly
2. **MSW setup needs alignment with corelive project** - Current MSW setup is incomplete and not properly configured for test environment

## Restrictions:

- **NEVER run `pnpm e2e` (full E2E suite)** until all issues are resolved
- **NEVER run playwright test without specific file targeting**
- Only run targeted tests with specific file names or grep patterns

## Safe Testing Commands:

```bash
# Run specific test file
pnpm playwright test specific-file.spec.ts

# Run tests matching pattern
pnpm playwright test -g 'specific test name'

# Run with --reporter=list to avoid HTML reporter
pnpm playwright test specific-file.spec.ts --reporter=list
```

## Issues Being Fixed:

1. MSW Provider needs to use React's `use` hook with Suspense for proper async loading
2. Build process needs to run before tests (`pnpm build && pnpm start`)
3. MSW initialization needs to be moved to the provider component
4. Environment variable consistency needs to be established

## Resolution Criteria:

- All 76 spec files must be able to run without configuration errors
- MSW setup must match corelive project structure
- Tests must pass with proper mocking enabled
- CI/CD pipeline must be validated

**DO NOT FORGET: This restriction remains in effect until explicitly lifted after all issues are resolved.**
