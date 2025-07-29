# MSW Setup Improvements for Next.js 15

Based on best practices research, here are recommended improvements for the Notable MSW setup:

## 1. Add MSW to transpilePackages (Required)

Update `next.config.mjs` to include MSW in transpilePackages:

```javascript
transpilePackages: ['@notable/sync', 'msw'],
```

This ensures MSW is properly transpiled for Next.js 15 and prevents potential issues with Turbopack.

## 2. Current Implementation Strengths ✅

The following are already implemented correctly:

- **Client/Server Separation**: Proper separation between browser.ts and node.ts
- **Environment Configuration**: Using `NEXT_PUBLIC_ENABLE_MSW` for conditional initialization
- **React 19 Integration**: Using the `use` hook with Suspense boundary in MSWProvider
- **Test Setup**: MSW server properly initialized in vitest.setup.ts
- **Handler Organization**: Centralized handlers in handlers.ts

## 3. Optional Enhancements

### Dynamic Import Pattern

Consider using dynamic imports to prevent MSW from being bundled in production:

```typescript
// lib/msw/setup/index.ts
async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start()
  }
}
```

### Handler Structure by Feature

For better maintainability as the app grows:

```
mocks/
├── handlers/
│   ├── auth.handlers.ts
│   ├── notes.handlers.ts
│   ├── sync.handlers.ts
│   └── index.ts
```

## 4. Server Components Support

The current setup already supports server components through the Node.js server setup. MSW will intercept fetch requests
made during:

- Server-side rendering
- React Server Components
- API route handlers

## Summary

The Notable MSW implementation is already very well-structured and follows most best practices. The only required change
is adding 'msw' to transpilePackages in the Next.js configuration to ensure full compatibility with Next.js 15.
