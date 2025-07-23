# MSW OAuth Testing Guide

This guide demonstrates how to use Mock Service Worker (MSW) for testing Google OAuth authentication in the Notable
application.

## Setup

MSW is already installed in the project. The mock handlers are located in:

- `__mocks__/msw/handlers.ts` - Contains OAuth mock handlers
- `__mocks__/msw/server.ts` - Sets up the MSW server

## Using MSW for OAuth Testing

### 1. Basic OAuth Sign-in Test

```typescript
import { createClient } from '@supabase/supabase-js'
import { server, mswUtils } from './__mocks__/msw/server'
import { http, HttpResponse } from 'msw'

describe('OAuth Authentication', () => {
  let supabase: ReturnType<typeof createClient>

  beforeEach(() => {
    // Reset MSW auth state before each test
    mswUtils.resetAuthState()

    // Create Supabase client for testing
    supabase = createClient('https://mock-project.supabase.co', 'mock-anon-key')
  })

  it('should successfully sign in with Google OAuth', async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })

    expect(error).toBeNull()
    expect(data.user).toBeDefined()
    expect(data.session).toBeDefined()
    expect(data.user?.email).toBe('test@example.com')
  })
})
```

### 2. Simulating OAuth Errors

```typescript
it('should handle OAuth authentication errors', async () => {
  // Override handler to simulate error
  server.use(
    http.post('*/auth/v1/oauth', () => {
      return HttpResponse.json({ error: 'oauth_error', message: 'OAuth provider error' }, { status: 400 })
    })
  )

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  expect(error).toBeDefined()
  expect(error?.message).toBe('OAuth provider error')
})
```

### 3. Testing OAuth Callback Flow

```typescript
it('should exchange authorization code for session', async () => {
  const mockAuthCode = 'mock-auth-code-123'

  const { data, error } = await supabase.auth.exchangeCodeForSession(mockAuthCode)

  expect(error).toBeNull()
  expect(data.user).toBeDefined()
  expect(data.session).toBeDefined()
  expect(data.session?.access_token).toBe('mock-access-token')
})
```

## MSW Utilities

The `mswUtils` object provides helpful methods for controlling authentication state:

```typescript
// Set custom auth state
mswUtils.setAuthState({
  isAuthenticated: true,
  user: customUser,
  session: customSession,
  error: null,
})

// Reset to default state
mswUtils.resetAuthState()

// Simulate specific errors
mswUtils.simulateAuthError('rate_limit_exceeded', 'Too many requests')

// Get current state
const authState = mswUtils.getAuthState()
```

## Mock Data Structure

The handlers provide realistic mock data that matches Supabase's response format:

```typescript
const mockUser = {
  id: 'mock-user-123',
  email: 'test@example.com',
  user_metadata: {
    avatar_url: 'https://lh3.googleusercontent.com/mock-avatar.jpg',
    full_name: 'Test User',
    provider_id: 'mock-google-id',
  },
  // ... other fields
}

const mockSession = {
  access_token: 'mock-access-token',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'mock-refresh-token',
  user: mockUser,
}
```

## Integration with Jest

To enable MSW in your Jest tests:

1. Import the server in your test setup file
2. Start the server before all tests
3. Reset handlers between tests
4. Close the server after all tests

```javascript
// jest.setup.js
import { server } from './__mocks__/msw/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

## Known Issues

1. **Module Resolution**: If you encounter import errors with `msw/node`, ensure your Jest configuration supports ES
   modules
2. **Polyfills**: MSW requires TextEncoder/TextDecoder polyfills in Jest environment
3. **Fetch API**: Node.js environments may need a fetch polyfill like `whatwg-fetch`

## Benefits of Using MSW

1. **Realistic Testing**: MSW intercepts actual HTTP requests, providing more realistic testing
2. **Flexible Mocking**: Easy to override handlers for specific test scenarios
3. **Type Safety**: Full TypeScript support with proper response types
4. **Debugging**: Network requests are visible in browser DevTools when using MSW
5. **Shared Mocks**: Same handlers can be used in tests and development

## Example: Complete OAuth Flow Test

```typescript
describe('Complete OAuth Flow', () => {
  it('should handle full authentication lifecycle', async () => {
    // 1. Initiate OAuth
    const { data: oauthData } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    expect(oauthData.user).toBeDefined()

    // 2. Verify session
    const { data: userData } = await supabase.auth.getUser()
    expect(userData.user?.email).toBe('test@example.com')

    // 3. Create user profile
    const { data: profileData } = await supabase.from('profiles').insert({
      user_id: oauthData.user?.id,
      email: oauthData.user?.email,
    })
    expect(profileData).toBeDefined()

    // 4. Sign out
    const { error: signOutError } = await supabase.auth.signOut()
    expect(signOutError).toBeNull()
    expect(mswUtils.getAuthState().isAuthenticated).toBe(false)
  })
})
```

This approach provides comprehensive testing coverage for OAuth authentication flows while maintaining test isolation
and predictability.
