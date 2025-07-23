# Testing Strategies for Notable

This document outlines comprehensive testing strategies for all platforms and authentication methods in the Notable project.

## Table of Contents

1. [OAuth Authentication Testing](#oauth-authentication-testing)
2. [Electron Application Testing](#electron-application-testing)
3. [Mobile Application Testing](#mobile-application-testing)
4. [Web Application Testing](#web-application-testing)
5. [CI/CD Integration](#cicd-integration)

## OAuth Authentication Testing

### Problem: Testing Google OAuth Without Real Accounts

Testing OAuth flows traditionally requires real Google accounts, which creates several challenges:

- CAPTCHAs and security measures break automation
- Rate limiting and quotas
- Inconsistent UI changes from providers
- Requires real credentials in CI/CD

### Solution: Mock-Based OAuth Testing

Instead of testing against real OAuth providers, we mock the Supabase authentication methods to simulate different scenarios.

#### Implementation

```typescript
// Location: packages/web/__mocks__/supabase.ts
import {
  mockSupabaseClient,
  supabaseMockUtils,
  mockScenarios,
} from '../__mocks__/supabase'

// Test different scenarios
supabaseMockUtils.setMockScenario(mockScenarios.SUCCESS)
supabaseMockUtils.setMockScenario(mockScenarios.ERROR_USER_NOT_FOUND)
supabaseMockUtils.setMockScenario(mockScenarios.ERROR_NETWORK)
```

#### Key Features

- **Complete Supabase Auth Mock**: Covers all authentication methods
- **Scenario Testing**: Test success, failure, and edge cases
- **Realistic Data**: Mock user profiles with Google OAuth metadata
- **State Management**: Simulate auth state changes
- **No Network Calls**: Fast, reliable, offline testing

#### Usage Example

```typescript
describe('Google OAuth Authentication', () => {
  it('should handle successful Google login', async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })

    expect(error).toBeNull()
    expect(data.user?.email).toBe('test@example.com')
    expect(data.user?.user_metadata?.provider_id).toBe('mock-google-id')
  })
})
```

### Benefits of Mock-Based Testing

1. **Reliability**: No dependency on external services
2. **Speed**: No network latency
3. **Coverage**: Test error scenarios easily
4. **CI/CD Friendly**: No credentials needed
5. **Deterministic**: Consistent results across environments

## Electron Application Testing

### Development Testing

```bash
# Run Electron in development mode
cd packages/electron
npm run dev
```

### Unit Testing

```bash
# Run Jest unit tests for Electron
cd packages/electron
npm test
```

#### Example Test Structure

```typescript
// packages/electron/__tests__/main.test.ts
describe('Electron Main Process', () => {
  it('should create window when app is ready', async () => {
    expect(app.whenReady).toBeDefined()
    await expect(app.whenReady()).resolves.toBe(true)
  })

  it('should handle IPC communication', async () => {
    const mockNotes = [{ id: 1, title: 'Test Note' }]
    // Test IPC handlers for load-notes and save-notes
  })
})
```

### End-to-End Testing with Playwright

Playwright is the recommended tool for Electron E2E testing:

```typescript
// Install Playwright for Electron
npm install --save-dev @playwright/test

// Example E2E test
import { test, expect } from '@playwright/test'
import { _electron as electron } from 'playwright'

test('Electron app launches and loads notes', async () => {
  const electronApp = await electron.launch({
    args: ['packages/electron/build/main.js']
  })

  const window = await electronApp.firstWindow()
  await expect(window.locator('h1')).toContainText('Notable')

  await electronApp.close()
})
```

### Production Build Testing

```bash
# Build and test production Electron app
cd packages/electron
npm run build
npm run dist

# Test the packaged application
# On macOS: test the .app bundle
# On Windows: test the .exe installer
# On Linux: test the AppImage
```

### Testing Strategy

1. **Unit Tests**: IPC handlers, window management, file operations
2. **Integration Tests**: Renderer ↔ Main process communication
3. **E2E Tests**: Full user workflows in packaged app
4. **Platform Tests**: Windows, macOS, Linux compatibility

## Mobile Application Testing

### React Native/Expo Testing Stack

#### Recommended Testing Frameworks

1. **Detox** (Recommended for React Native)
   - Purpose-built for React Native
   - Reliable synchronization
   - Cross-platform (iOS/Android)

2. **Maestro** (Alternative)
   - Simple YAML syntax
   - Fast setup
   - Cross-platform support

3. **Appium** (For complex scenarios)
   - WebDriver-based
   - Flexible for multiple tech stacks

### Setting Up Mobile Testing

#### Android Emulator Setup

```bash
# Install Android Studio
# Create AVD (Android Virtual Device)
# Launch emulator from command line
emulator -avd <device-name>
```

#### iOS Simulator Setup

```bash
# Install Xcode (macOS required)
# Launch simulator
xcrun simctl boot <device-uuid>
```

### Detox Configuration Example

```javascript
// packages/mobile/.detoxrc.js
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  configurations: {
    'ios.sim.debug': {
      device: {
        type: 'ios.simulator',
        device: { type: 'iPhone 14' },
      },
      app: {
        type: 'ios.app',
        binaryPath:
          'ios/build/Build/Products/Debug-iphonesimulator/Notable.app',
      },
    },
    'android.emu.debug': {
      device: {
        type: 'android.emulator',
        device: { avdName: 'Pixel_4_API_30' },
      },
      app: {
        type: 'android.apk',
        binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      },
    },
  },
}
```

### Mobile Test Examples

```typescript
// e2e/auth.e2e.ts
describe('Mobile Authentication', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should authenticate with Google OAuth', async () => {
    await element(by.id('google-signin-button')).tap()
    await waitFor(element(by.id('user-profile')))
      .toBeVisible()
      .withTimeout(10000)

    await expect(element(by.id('user-email'))).toHaveText('test@example.com')
  })
})
```

### EAS Build Integration

```bash
# Build for testing with EAS
npx eas build --platform android --profile development
npx eas build --platform ios --profile development

# Install and test builds
eas device:create
eas build:run
```

### Mobile Testing Strategy

1. **Unit Tests**: Business logic, utilities, hooks
2. **Component Tests**: React Native Testing Library
3. **Integration Tests**: Navigation, state management
4. **E2E Tests**: Critical user journeys
5. **Device Testing**: Physical devices for performance

## Web Application Testing

### Current Setup

The web package already has comprehensive testing with:

- Jest for unit testing
- React Testing Library for component testing
- Playwright for E2E testing

### Enhanced OAuth Testing

With the new mock setup, you can now test:

```typescript
// Test OAuth with different providers
describe('OAuth Providers', () => {
  it.each(['google', 'github', 'apple'])(
    'should handle %s OAuth',
    async (provider) => {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider })
      expect(error).toBeNull()
      expect(data.user).toBeDefined()
    },
  )
})
```

### Testing Best Practices

1. **Test Pyramid**: More unit tests, fewer E2E tests
2. **Mock External Dependencies**: APIs, OAuth providers
3. **Test User Journeys**: Critical paths end-to-end
4. **Performance Testing**: Load times, responsiveness
5. **Accessibility Testing**: Screen readers, keyboard navigation

## CI/CD Integration

### GitHub Actions Example

```yaml
# .github/workflows/test.yml
name: Test All Platforms

on: [push, pull_request]

jobs:
  web-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:web
      - run: npm run test:e2e:web

  electron-tests:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:electron
      - run: npm run build:electron

  mobile-tests:
    runs-on: macos-latest # Required for iOS testing
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - uses: actions/setup-java@v3
      - run: npm ci
      - run: npm run test:mobile
      - name: Run Android E2E
        run: |
          $ANDROID_HOME/emulator/emulator -avd test_android_emulator &
          npm run test:e2e:android
      - name: Run iOS E2E (macOS only)
        if: runner.os == 'macOS'
        run: |
          xcrun simctl boot "iPhone 14"
          npm run test:e2e:ios
```

### Test Commands Summary

```json
{
  "scripts": {
    "test": "turbo run test",
    "test:web": "cd packages/web && npm test",
    "test:electron": "cd packages/electron && npm test",
    "test:mobile": "cd packages/mobile && npm test",
    "test:e2e:web": "cd packages/web && playwright test",
    "test:e2e:electron": "cd packages/electron && playwright test",
    "test:e2e:android": "cd packages/mobile && detox test -c android.emu.debug",
    "test:e2e:ios": "cd packages/mobile && detox test -c ios.sim.debug",
    "test:oauth": "cd packages/web && jest auth/oauth-testing.test.ts"
  }
}
```

## Conclusion

This comprehensive testing strategy ensures:

1. **Reliable OAuth Testing**: Mock-based approach eliminates external dependencies
2. **Cross-Platform Coverage**: Web, Electron, and Mobile platforms
3. **Multiple Test Types**: Unit, integration, and E2E testing
4. **CI/CD Ready**: Automated testing in GitHub Actions
5. **Maintainable**: Clear patterns and documentation

The key innovation is the OAuth mocking strategy, which solves the critical problem of testing authentication flows without requiring real Google accounts or dealing with OAuth provider limitations.

### Next Steps

1. Run the OAuth tests: `npm run test:oauth`
2. Set up Electron E2E tests with Playwright
3. Configure Detox for mobile E2E testing
4. Integrate all test suites into CI/CD pipeline
5. Document platform-specific testing procedures
