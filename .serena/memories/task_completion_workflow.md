# Task Completion Workflow for Notable

## Core Workflow Rules

Follow the pattern that matches your current state:

### Pattern 1: Existing Branch for Issue/PR
When local current branch targets a specific Issue, or when PR exists:
1. Compare Issue requirements with current progress
2. Write current progress in PR overview (create PR if none exists)
3. Completely implement 100% of Issue requirements
4. Create E2E tests without skipping
5. Ensure all PR CI checks pass
6. Merge the PR
7. After merge: checkout main → git pull → delete branch → return to Step 1

### Pattern 2: Multiple PRs Exist
1. Check status of each PR (CI results, review status, target Issue)
2. Handle most important/urgent PR first
3. Merge them one by one in sequence
4. Manually resolve conflicts if they occur
5. After merging all: checkout main → git pull → delete local branches

### Pattern 3: Issues Exist but No PRs
1. Select highest priority Issue
2. Create branch: `git checkout -b feature/issue-<issue-number>-<short-description>`
3. Completely implement Issue requirements
4. Create all tests including E2E tests
5. Create PR and ensure CI passes
6. Merge PR
7. After merge: checkout main → git pull → delete working branch

### Pattern 4: No Issues or PRs
1. Create Issue according to creation rules below
2. Return to Step 1

## Commands to Run When Task is Completed

### Before Merging PR
1. **Build Check**: `pnpm build`
2. **Lint Check**: `pnpm lint` (ensure `--max-warnings 0`)
3. **Type Check**: `pnpm typecheck`
4. **Unit Tests**: `pnpm test`
5. **E2E Tests**: `pnpm e2e` (after building)

### Quality Gates
- **CI Must Pass**: Never merge unless all CI checks are green
- **100% Issue Completion**: PR must implement every requirement
- **E2E Coverage**: All features must have E2E tests without skipping
- **No Warnings**: Linting must pass with zero warnings

### Self-Review Checklist
Before merging, confirm:
- ✅ PR changes implement 100% of Issue requirements
- ✅ E2E tests cover all new functionality
- ✅ No `test.skip` or commented out tests
- ✅ All CI checks pass
- ✅ No deployment failures

## Issue Creation Rules

When no issues/PRs exist:
1. Read PRD.md and docs folder documents
2. Review current codebase for incomplete requirements
3. Check if implementation uses correct tech stack
4. Register all findings as Issues with:
   - Clear overview
   - Task list with checkboxes
   - Acceptance criteria

## Key Constraints
- **Create only one PR** to avoid complex conflicts
- **Never merge incomplete work** - PR must satisfy every Issue requirement
- **CI is prerequisite** - Even perfect implementation is worthless if deployment fails
- **No test cheating** - Never skip tests or use workarounds to pass CI