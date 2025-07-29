# MSW (Mock Service Worker) Setup Guide

## Overview

MSW (Mock Service Worker) has been integrated into the Notable web application to provide API mocking capabilities for
both development and testing environments.

## Architecture

### Files Structure

```
packages/web/
├── mocks/
│   ├── handlers.ts    # API request handlers
│   ├── browser.ts     # Browser worker setup
│   └── node.ts        # Node.js server setup
├── app/
│   └── msw-provider.tsx  # React provider for MSW
└── public/
    └── mockServiceWorker.js  # MSW service worker (auto-generated)
```

## How It Works

### Browser Environment

- MSW intercepts network requests using a Service Worker
- Configured in `mocks/browser.ts` and initialized by `MSWProvider`
- Only active in development mode or when `NEXT_PUBLIC_ENABLE_MSW=true`

### Test Environment

- MSW uses Node.js request interception for tests
- Configured in `mocks/node.ts` and initialized in `vitest.setup.ts`
- Automatically starts before all tests and resets handlers between tests

## Usage

### Adding New Mock Handlers

Edit `mocks/handlers.ts` to add new API endpoints:

```typescript
export const handlers = [
  // Example: Mock a new endpoint
  http.get('/api/notes/:id', ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      title: 'Mocked Note',
      content: 'This is a mocked note response',
    })
  }),
]
```

### Overriding Handlers in Tests

You can override handlers for specific test cases:

```typescript
import { server } from '@/mocks/node'
import { http, HttpResponse } from 'msw'

it('should handle custom response', async () => {
  server.use(
    http.get('/api/notes', () => {
      return HttpResponse.json([{ id: '1', title: 'Custom Test Note' }])
    })
  )

  // Your test code here
})
```

### Enabling MSW in Development

MSW is automatically enabled in development mode. To control it:

1. **Enable**: Set `NEXT_PUBLIC_ENABLE_MSW=true` in `.env.local`
2. **Disable**: Set `NEXT_PUBLIC_ENABLE_MSW=false` or remove the variable

### Current Mock Endpoints

The following endpoints are currently mocked:

- **Authentication**
  - `POST /auth/v1/token` - Mock login
  - `GET /auth/v1/user` - Mock user data
  - `GET /auth/callback` - OAuth callback

- **Notes**
  - `GET /rest/v1/notes` - List notes
  - `POST /rest/v1/notes` - Create note
  - `PATCH /rest/v1/notes` - Update note
  - `DELETE /rest/v1/notes` - Delete note

- **Sync**
  - `POST /api/sync/offline-changes` - Sync offline changes
  - `GET /api/yjs/awareness/:docId` - Y.js awareness
  - `POST /api/yjs/update/:docId` - Y.js updates

- **Upload**
  - `POST /api/upload` - File upload

## Debugging

### Browser Console

- Check for MSW logs: `[MSW] Mocking enabled`
- Unhandled requests are logged as warnings

### Test Environment

- Failed assertions will show which handlers were called
- Use `server.printHandlers()` to debug available handlers

## Best Practices

1. **Keep handlers realistic**: Mock responses should match actual API structure
2. **Use appropriate status codes**: Return proper HTTP status codes
3. **Handle edge cases**: Include error responses in your mocks
4. **Reset handlers**: Always reset handlers after test-specific overrides
5. **Document mocks**: Comment complex mock logic for clarity

## Troubleshooting

### Service Worker Not Loading

- Ensure `mockServiceWorker.js` exists in the `public/` directory
- Run `npx msw init public/` if missing
- Check browser DevTools > Application > Service Workers

### Mocks Not Working in Tests

- Verify `vitest.setup.ts` imports the MSW server
- Check that handlers are exported from `mocks/handlers.ts`
- Ensure test environment is properly configured

### TypeScript Errors

- Run `pnpm typecheck` to identify type issues
- Ensure MSW types are properly imported

## References

- [MSW Documentation](https://mswjs.io/)
- [MSW with Next.js](https://mswjs.io/docs/integrations/next-js)
- [MSW Testing Guide](https://mswjs.io/docs/integrations/node)
