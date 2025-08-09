# Code Style and Conventions for Notable

## General Principles

### React Development
- Use functional components with React hooks
- Wrap all React components with `React.memo()`
- Use TypeScript for all components and utilities

### Testing Conventions
- **E2E Testing**: Use Playwright with specific rules:
  - Never use `jsClick` and `jsType`
  - Never use `test.skip` or comment out tests to bypass
  - Use `{ force: true }` for all DOM actions like `.click({ force: true })`
  - Use `--reporter=list` and never use `--debug` to prevent HTML reporter launch
  - Must `pnpm build` before running Playwright tests
  - Run playwright with pattern matching: `pnpm playwright test foo.spec.ts` or `pnpm playwright test -g 'Sidemenu'`

### Environment Variables
- Use `env.NODE_ENV = (production|development)` for environment control
- Use `env.NEXT_PUBLIC_API_MOCKING = 'true' or 'false'` for API mocking control
- Never implement test-specific logic in application code

### API Mocking
- Use MSW for mocking external services like OAuth, Resend
- Use DB seed fixtures for application data
- Populate test data with single command: `pnpm db:reset`

### Linting & Code Quality
- Never remove `--max-warnings 0` option from lint
- Use ESLint with Next.js config
- Use Prettier for code formatting

## File Organization

### Web Package Structure (packages/web/)
- `app/` - Next.js 15 app directory structure
- `components/` - React components
- `hooks/` - Custom React hooks
- `lib/` - Utilities and shared logic
- `utils/` - Helper functions
- `e2e/` - Playwright E2E tests
- `mocks/` - MSW handlers and test mocks

### Naming Conventions
- Components: PascalCase (`UserMenu.tsx`)
- Hooks: camelCase with `use` prefix (`useNotes.ts`)
- Utilities: camelCase (`authHelpers.ts`)
- Constants: SCREAMING_SNAKE_CASE

## Development Server Rules

### tmux Usage for Dev Servers
Always use tmux sessions for development servers to avoid blocking:

```bash
# Next.js dev server
tmux new -s next-dev-server -d
tmux send-keys -t next-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm run dev" Enter

# Storybook
tmux new -s storybook-dev-server -d
tmux send-keys -t storybook-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm run storybook" Enter
```

### Important Rules
- Never run 'pnpm start' without tmux session
- In `playwright.config.ts` webServer config, use 'pnpm start' instead of 'pnpm dev'

## Testing Philosophy
- **Separation of Concerns**: Test infrastructure (MSW, fixtures) handles test scenarios
- **No Test Branches in App Code**: Application code should not contain test-specific conditional logic
- **Real Data Flow**: E2E tests should use actual database fixtures and API endpoints
- **External Service Mocking**: Only mock external services, not internal application logic