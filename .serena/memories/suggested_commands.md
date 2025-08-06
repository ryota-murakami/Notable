# Notable Development Commands

## Package Management
- `pnpm install` - Install all dependencies
- `pnpm build` - Build all packages
- `pnpm dev` - Start development servers
- `pnpm clean` - Clean build artifacts and node_modules

## Web Package Specific (in packages/web/)
- `pnpm dev` - Start Next.js dev server on port 4378
- `pnpm build` - Build for production
- `pnpm start` - Start production server on port 4378
- `pnpm lint` - Run ESLint with --max-warnings 0 (strict mode)
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run Vitest unit tests
- `pnpm test:watch` - Run Vitest in watch mode
- `pnpm e2e` - Run Playwright e2e tests
- `pnpm e2e:headed` - Run e2e tests with browser UI
- `pnpm clean` - Clean .next, dist, node_modules

## Database & Docker
- `docker-compose up -d` - Start Supabase local database
- `pnpm supabase:start` - Start Supabase stack
- `pnpm supabase:stop` - Stop Supabase stack

## Testing Commands
- `pnpm test` - Run unit tests (Vitest)
- `pnpm test:coverage` - Run tests with coverage
- `pnpm e2e` - Run all Playwright tests (uses pnpm start)
- `npx playwright test [file] --reporter=list` - Run specific e2e test
- `npx playwright test -g 'test name'` - Run specific test by name

## Tmux for Dev Servers (from CLAUDE.md)
```bash
# Next.js dev server
tmux new -s next-dev-server -d
tmux send-keys -t next-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm dev" Enter

# Storybook
tmux new -s storybook-dev-server -d  
tmux send-keys -t storybook-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm storybook" Enter
```

## System Commands (macOS)
- `tmux list-sessions` - Check running tmux sessions
- `tmux kill-session -t <name>` - Kill specific tmux session
- `git status` - Check git status
- `gh pr create` - Create pull request (preferred over GitHub MCP tools)