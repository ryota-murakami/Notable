# Notable Code Style & Conventions

## ESLint Configuration
- **Strict Mode**: `--max-warnings 0` (NEVER remove this)
- **Config**: Uses Next.js ESLint config with custom rules
- **Key Rules**:
  - `react-hooks/exhaustive-deps: 'error'` (prevents infinite loops)
  - Unused vars: prefix with `_` (e.g., `_unusedParam`)
  - No duplicate imports
  - Require await for async functions
  - Console warnings allowed in scripts/utilities

## TypeScript Conventions
- Use TypeScript for all new files
- Prefer `interface` over `type` for object shapes
- Use proper type imports where possible
- Allow `any` type in specific contexts (tests, utilities)

## React/Next.js Conventions
- **Functional Components**: Use React hooks, avoid class components
- **File Naming**: kebab-case for files, PascalCase for components
- **Import Order**: External libs → internal libs → relative imports
- **Styling**: Tailwind CSS with cn() utility for conditional classes
- **UI Components**: Use shadcn/ui components as base

## Testing Conventions

### Unit Tests (Vitest)
- Test files: `*.test.{ts,tsx}` or `__tests__/*.{ts,tsx}`
- Use Testing Library for React component tests
- Mock external dependencies with MSW

### E2E Tests (Playwright)
- Test files: `e2e/*.spec.ts`
- **Critical**: Use `{ force: true }` for all DOM actions
- **Critical**: Replace `jsClick` with `.click({ force: true })`
- **Critical**: Remove ALL `.skip()` calls
- Use proper DB fixtures for test data
- Test comprehensive feature behavior, not just smoke tests

## Database & API
- Use Supabase client for database operations
- Implement proper error handling
- Use TypeScript types for database schemas
- Test users: test@example.com, test2@example.com (password: password123)

## File Organization
```
components/     # React components
lib/           # Utility functions and configs
hooks/         # Custom React hooks  
app/           # Next.js app router pages
e2e/           # Playwright test files
__tests__/     # Unit test files
```