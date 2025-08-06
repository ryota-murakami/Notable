# Task Completion Rules

## When Task is Complete

1. **Run linting**: `pnpm lint:fix` to fix any style issues
2. **Run typecheck**: `pnpm typecheck` to ensure TypeScript compliance
3. **Run unit tests**: `pnpm test` to verify functionality
4. **Build project**: `pnpm build` to ensure production compatibility
5. **Run E2E tests**: `pnpm e2e` (after build) to verify integration

## E2E Testing Requirements

- NEVER skip tests with `test.skip` or comment out
- ALL click actions must use `{ force: true }`
- Run `pnpm build` before E2E tests
- Use proper wait conditions and timeouts
- Ensure tests are deterministic and not flaky

## Code Quality Rules

- Follow existing patterns and conventions
- Use TypeScript strictly
- Follow shadcn/ui component patterns
- Never remove `--max-warnings 0` from lint commands
- Maintain high test coverage

## Git Workflow

- Create feature branches for issues
- Run full CI checks before merging
- Write clear commit messages
- Self-review PRs thoroughly
- Ensure 100% issue requirement completion

## CI/CD Requirements

- All lint checks must pass
- All type checks must pass
- All unit tests must pass
- All E2E tests must pass
- Build must succeed
