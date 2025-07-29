# MSW (Mock Service Worker) Setup Guide

## Overview

Mock Service Worker (MSW) is set up in this project to intercept network requests and provide consistent, predictable
responses during development and testing. This enables:

- Development without backend dependencies
- Reliable and fast tests
- Consistent test data
- Easy simulation of edge cases and error states

## Architecture

### File Structure

```
packages/web/
├── mocks/
│   ├── handlers.ts      # Request handler definitions
│   ├── browser.ts       # Browser-side setup
│   ├── server.ts        # Node.js/test setup
│   └── MSWProvider.tsx  # React provider component
├── public/
│   └── mockServiceWorker.js  # Service Worker script
└── __tests__/
    ├── auth/
    │   └── oauth-msw-example.test.tsx
    └── msw-integration.test.tsx
```

### Components

1. **Handlers** (`mocks/handlers.ts`): Define mock responses for API endpoints
2. **Browser Setup** (`mocks/browser.ts`): Configures MSW for browser environments
3. **Server Setup** (`mocks/server.ts`): Configures MSW for Node.js/test environments
4. **MSWProvider** (`mocks/MSWProvider.tsx`): React component that initializes MSW in the browser
5. **Service Worker** (`public/mockServiceWorker.js`): Generated script that intercepts requests

## Usage

### Development Mode

MSW automatically starts in development mode when you run the app. The `MSWProvider` component in `app/layout.tsx`
handles initialization.

To enable/disable MSW in development:

1. Set `NEXT_PUBLIC_ENABLE_MSW=true` in your `.env.local` file
2. MSW will start automatically and log `[MSW] Mock Service Worker started` in the console

### Testing

MSW is automatically configured for all tests via `vitest.setup.ts`. The setup:

- Starts the MSW server before all tests
- Resets handlers after each test
- Stops the server after all tests

### Adding New Handlers

To add new mock endpoints, edit `mocks/handlers.ts`:

```typescript
export const handlers = [
  // Add your new handler
  http.get('/api/new-endpoint', () => {
    return HttpResponse.json({
      data: 'mock response',
    })
  }),
  // ... existing handlers
]
```

### Overriding Handlers in Tests

You can override handlers for specific test cases:

```typescript
import { server } from '../mocks/server'
import { http, HttpResponse } from 'msw'

it('should handle error state', async () => {
  // Override for this test only
  server.use(
    http.get('/api/endpoint', () => {
      return HttpResponse.json({ error: 'Something went wrong' }, { status: 500 })
    })
  )

  // Your test code here
})
```

## Available Mock Endpoints

### Authentication

- `GET /auth/v1/user` - Get current user
- `POST /auth/v1/token` - OAuth token exchange
- `POST /auth/v1/signup` - User registration
- `POST /auth/v1/logout` - User logout

### Notes

- `GET /rest/v1/notes` - List notes
- `POST /rest/v1/notes` - Create note
- `PATCH /rest/v1/notes` - Update note
- `DELETE /rest/v1/notes` - Delete note

### Sync Service

- `POST /rest/v1/sync` - Sync data
- `GET /rest/v1/sync/status` - Get sync status

### Storage

- `POST /storage/v1/object/notes-attachments/*` - File upload

### Utilities

- `GET /rest/v1/health` - Health check
- `GET /realtime/v1/websocket` - WebSocket mock

## Examples

### Basic Component Test with MSW

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import { MyComponent } from './MyComponent'

it('should display data from API', async () => {
  render(<MyComponent />)

  // MSW will intercept the API call automatically
  await waitFor(() => {
    expect(screen.getByText('Mock Data')).toBeInTheDocument()
  })
})
```

### Testing Error States

```typescript
it('should handle API errors', async () => {
  server.use(
    http.get('/api/data', () => {
      return HttpResponse.json(
        { error: 'Not found' },
        { status: 404 }
      )
    })
  )

  render(<MyComponent />)

  await waitFor(() => {
    expect(screen.getByText('Error: Not found')).toBeInTheDocument()
  })
})
```

## Debugging

### Check if MSW is Running

Look for `[MSW] Mock Service Worker started` in the browser console.

### View Intercepted Requests

MSW logs unhandled requests by default. To see all requests:

```typescript
// In browser.ts
await worker.start({
  onUnhandledRequest: 'warn', // or 'error'
})
```

### Common Issues

1. **Service Worker not found**: Ensure `mockServiceWorker.js` exists in the `public` directory
2. **Requests not intercepted**: Check that handlers match the exact URL pattern
3. **CORS issues**: MSW handles CORS automatically, but ensure your handlers return appropriate headers if needed

## Best Practices

1. **Keep handlers realistic**: Mock responses should match actual API responses
2. **Use TypeScript**: Type your mock responses to catch mismatches early
3. **Reset handlers in tests**: Always reset handlers between tests to avoid test pollution
4. **Document custom handlers**: Add comments explaining non-obvious mock behaviors
5. **Test edge cases**: Use MSW to test error states, slow responses, and edge cases

## Further Reading

- [MSW Documentation](https://mswjs.io/docs/)
- [Testing React Components with MSW](https://mswjs.io/docs/frameworks/react)
- [MSW Best Practices](https://mswjs.io/docs/best-practices)
