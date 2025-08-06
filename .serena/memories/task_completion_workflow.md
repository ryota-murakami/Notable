# Task Completion Workflow

## Before Making Changes
1. **Run Tests**: `pnpm build && pnpm test && pnpm e2e`
2. **Check Lint**: `pnpm lint` (must pass with 0 warnings/errors)
3. **Type Check**: `pnpm typecheck`

## During Development
1. **Follow Core Workflow Rules** from CLAUDE.md:
   - Pattern 1: Fix current branch Issue completely → merge
   - Pattern 2: Handle multiple PRs by priority → merge sequentially  
   - Pattern 3: Select highest priority Issue → create branch → implement
   - Pattern 4: Create new Issue if none exist

2. **Development Server**: Always use tmux for dev servers
3. **E2E Testing**: Must run `pnpm build` before `pnpm e2e`

## After Task Completion
1. **Lint Check**: `pnpm lint` (0 warnings required)
2. **Type Check**: `pnpm typecheck` 
3. **Unit Tests**: `pnpm test`
4. **E2E Tests**: `pnpm build && pnpm e2e`
5. **Build Check**: `pnpm build` (must succeed)

## Critical Rules
- **NEVER** remove `--max-warnings 0` from lint commands
- **ALWAYS** use `{ force: true }` for DOM actions in Playwright
- **ALWAYS** implement comprehensive E2E tests (no `.skip()`)
- **ALWAYS** create/update DB fixtures for tests
- **ALWAYS** ensure CI checks pass before merging

## PR Requirements
- All CI checks must pass
- 100% of Issue requirements implemented
- Comprehensive E2E tests included
- Self-review completed
- No cheating/bypassing of checks

## Merge Process
1. Ensure all CI checks pass
2. Self-review PR changes vs Issue requirements  
3. Confirm 100% requirements met
4. Merge PR
5. Checkout main → git pull → delete feature branch