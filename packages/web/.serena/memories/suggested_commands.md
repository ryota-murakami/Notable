# Suggested Commands for Notable Development

## Development Commands

- `docker compose up -d` - Start Supabase local database
- `pnpm dev` - Start Next.js development server (port 4378)
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server (port 4378)
- `pnpm db:reset` - Reset database with seed data

## Testing Commands

- `pnpm test` - Run unit tests with Vitest
- `pnpm test:watch` - Run unit tests in watch mode
- `pnpm e2e` - Run all Playwright E2E tests
- `pnpm e2e:headed` - Run E2E tests with browser visible
- `pnpm playwright test <spec-file>` - Run specific E2E test file
- `pnpm playwright test -g '<test-name>'` - Run tests matching pattern

## Quality Assurance

- `pnpm lint` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test:coverage` - Run tests with coverage report

## Database Commands

- `pnpm supabase:start` - Start local Supabase stack
- `pnpm supabase:stop` - Stop local Supabase stack
- `pnpm db:reset` - Reset and seed database

## Testing Setup

- Test users: test@example.com / test2@example.com (password: password123)
- Use `{ force: true }` for all DOM actions in E2E tests
- Use `--reporter=list` for Playwright tests
- Always `pnpm build` before running E2E tests

## Environment

- NODE_ENV: 'test', 'development', or 'production'
- NEXT_PUBLIC_API_MOCKING: 'true' or 'false' for API mocking
