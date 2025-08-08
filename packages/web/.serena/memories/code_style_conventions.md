# Code Style and Conventions

## React Components

- All components must be wrapped with `React.memo()`
- Use functional components with hooks
- TypeScript for all components
- CSS modules or Tailwind for styling

## E2E Testing Conventions

- Never use `jsClick` and `jsType` - use standard Playwright APIs
- Never use `isTest` utils
- Use `{ force: true }` for all DOM actions: `.click({ force: true })`
- Use `data-testid` attributes for reliable selectors
- Use `waitForHydration` utility before interactions
- Set dev-auth-bypass cookie for authentication bypass

## File Organization

- Components in `/components` directory
- E2E tests in `/e2e` directory
- Utils in `/utils` directory
- Types in `/types` directory

## Test Data

- Use DB seed fixtures for application data
- Test users: test@example.com and test2@example.com (password: password123)
- Use single command `pnpm db:reset` to populate test data

## Environment Control

- Use only `env.NODE_ENV = (production|development|test)`
- Use `env.NEXT_PUBLIC_API_MOCKING = 'true' or 'false'`
- Never use custom isTest utils

## Naming Conventions

- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions
- Use UPPER_SNAKE_CASE for constants

## Linting Rules

- Never remove `--max-warnings 0` option from lint
- Fix all TypeScript errors before commit
- Use Prettier for code formatting
