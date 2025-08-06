# Notable Style and Conventions

## Code Style

- **TypeScript**: Strict mode, proper typing
- **React**: Functional components with hooks
- **Next.js 15**: App router, React 19 features
- **Naming**: camelCase for variables, PascalCase for components
- **File naming**: kebab-case for files, PascalCase for React components

## Component Patterns

- Use shadcn/ui components as base
- Leverage shadcn/ui Blocks for complex layouts
- Follow Notable Design System principles
- Use Tailwind CSS v4.1 for styling
- Implement proper accessibility (WCAG 2.1 AA)

## Testing Conventions

### Unit Tests (Vitest)

- Test files: `*.test.ts` or `*.spec.ts`
- Use React Testing Library for component tests
- Mock external dependencies with MSW

### E2E Tests (Playwright)

- Test files: `*.spec.ts` in `/e2e` directory
- Use `{ force: true }` on ALL click actions
- Proper test data attributes: `data-testid`
- Wait for elements properly
- Use page object pattern when applicable

## Editor Integration

- **Plate.js**: Core rich text editing
- **Plugins**: Organized in `/lib/plugins`
- **Components**: Editor components in `/components/editor`

## State Management

- React hooks for local state
- Tanstack Query for server state
- Context for shared application state

## API Patterns

- Next.js API routes in `/app/api`
- Supabase client for database operations
- Zod schemas for validation
- Type-safe API endpoints

## File Organization

```
packages/web/
├── app/                 # Next.js app router
├── components/          # React components
├── lib/                 # Utilities and plugins
├── hooks/              # Custom React hooks
├── types/              # TypeScript definitions
├── e2e/                # E2E tests
├── __tests__/          # Unit tests
└── public/             # Static assets
```

## Environment

- Node.js 22.17.1 (managed by Volta)
- pnpm for package management
- Docker for local database (Supabase)
