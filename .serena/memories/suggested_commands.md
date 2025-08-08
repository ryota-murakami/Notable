# Suggested Commands for Notable Development

## Core Development Commands

### Setup & Installation
```bash
# Install dependencies
pnpm install

# Setup local database (required for web development)
docker compose up -d
```

### Development Server
```bash
# Start web development server (port 4378)
pnpm --filter @notable/web dev

# Using tmux for non-blocking dev server
tmux new -s next-dev-server -d
tmux send-keys -t next-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm --filter @notable/web dev" Enter
```

### Build & Production
```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @notable/web build

# Start production server
pnpm --filter @notable/web start
```

### Testing
```bash
# Run unit tests
pnpm test
pnpm --filter @notable/web test

# Run E2E tests (Playwright)
pnpm --filter @notable/web e2e

# Run specific E2E test
pnpm --filter @notable/web playwright test foo.spec.ts

# Run E2E tests with pattern
pnpm --filter @notable/web playwright test -g 'Sidemenu'

# E2E with coverage
pnpm --filter @notable/web e2e:coverage
```

### Code Quality
```bash
# Linting
pnpm lint
pnpm --filter @notable/web lint

# Fix linting issues
pnpm lint:fix
pnpm --filter @notable/web lint:fix

# Type checking
pnpm typecheck
pnpm --filter @notable/web typecheck

# Format code
pnpm prettier
```

### Database & Supabase
```bash
# Start local Supabase
pnpm --filter @notable/web supabase:start

# Stop local Supabase
pnpm --filter @notable/web supabase:stop
```

### Storybook
```bash
# Start Storybook
pnpm --filter @notable/web storybook

# Using tmux for non-blocking storybook
tmux new -s storybook-dev-server -d
tmux send-keys -t storybook-dev-server "export PATH=\"$HOME/.volta/bin:$PATH\" && cd $(pwd) && pnpm --filter @notable/web storybook" Enter
```

### Environment Management
```bash
# Set/show production env
vercel env
```

### Git & GitHub
```bash
# Use gh CLI for GitHub operations (preferred)
gh pr create
gh pr merge
gh issue list
```

## Package Manager
- Using pnpm (version 10.14.0)
- Node.js version: 22.17.1 (managed by Volta)