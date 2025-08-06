# Notable Development Commands

## Package Manager

- Use `pnpm` for all package management

## Development Commands

- `pnpm dev` - Start development server (web package)
- `pnpm build` - Build all packages
- `pnpm start` - Start production server
- `pnpm lint` - Run linting across all packages
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - TypeScript checking
- `pnpm test` - Run unit tests (Vitest)
- `pnpm e2e` - Run E2E tests (Playwright)

## Web Package Specific

- `cd packages/web`
- `pnpm dev` - Development server on port 4378
- `pnpm build` - Build for production
- `pnpm start` - Start production server on port 4378
- `pnpm e2e` - Run E2E tests
- `pnpm e2e:coverage` - Run E2E tests with coverage
- `pnpm test` - Run unit tests
- `pnpm storybook` - Start Storybook on port 6006

## E2E Testing Rules

- **MUST run `pnpm build` before E2E tests**
- `playwright.config.ts` uses `pnpm start` for production tests
- `playwright.dev.config.ts` uses `pnpm dev` for development tests
- Use `--reporter=list` for CI
- Never use `--debug` in CI
- All click actions should use `{ force: true }`

## Database Setup

- `docker compose up -d` - Start local Supabase database
- Test users: test@example.com / test2@example.com (password: password123)

## Tmux Sessions (for background servers)

```bash
tmux new -s next-dev-server -d
tmux send-keys -t next-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm dev" Enter
```

## System Commands (Darwin)

- Standard Unix commands: `git`, `ls`, `cd`, `grep`, `find`
- Use `pnpm` instead of npm/yarn
