# Task Completion Checklist

## Before Submitting Code

1. **Build Check**: `pnpm build` - ensure no build errors
2. **Type Check**: `pnpm typecheck` - resolve all TypeScript errors
3. **Lint Check**: `pnpm lint` - fix all linting issues (keep `--max-warnings 0`)
4. **Unit Tests**: `pnpm test` - all unit tests pass
5. **E2E Tests**: `pnpm e2e` - run relevant E2E tests (or full suite)

## E2E Test Specific Checklist

- [ ] Use standard Playwright APIs (no jsClick/jsType)
- [ ] Include `{ force: true }` for all DOM actions
- [ ] Add proper `data-testid` attributes for selectors
- [ ] Use `waitForHydration` before interactions
- [ ] Set dev-auth-bypass cookie for auth bypass
- [ ] Test with seed data (test@example.com / test2@example.com)
- [ ] No `test.skip()` or test bypassing
- [ ] Verify selectors are specific (avoid multiple element matches)

## CI/CD Requirements

- All tests must pass (no failures allowed)
- No security vulnerabilities
- TypeScript compilation succeeds
- Build process completes successfully
- Deployment validation passes

## Issue #279 Specific Goals

- [ ] 100% E2E test coverage achieved
- [ ] All 638 E2E tests passing
- [ ] No test.skip() usage
- [ ] Apply proven AI features patterns to all tests
- [ ] Fix selector specificity issues
- [ ] Handle missing UI elements gracefully
- [ ] Ready to merge PR #282

## Git Workflow

1. Create feature branch: `git checkout -b feature/issue-<number>-<description>`
2. Complete implementation with tests
3. Create PR with comprehensive description
4. Ensure CI passes completely
5. Merge after self-review confirms 100% requirement satisfaction
