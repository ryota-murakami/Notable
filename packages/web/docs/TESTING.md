# Testing Documentation

This document provides comprehensive testing strategies for the Notable application across different platforms and
environments.

## Web Application Testing

### Development Environment

- **Dev Server**: `npm run dev` on `http://localhost:3000`
- **Playwright Integration**: Web app can be tested using Playwright MCP tools
- **Test Execution**: E2E tests run against development server

### Basic Playwright Test Example

```typescript
import { test, expect } from '@playwright/test'

test('should load the main application', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(/Notable/)
})
```

## Electron Application Testing

### Overview

The Notable Electron application can be tested using multiple approaches, each suited for different testing scenarios.

### 1. Playwright with Electron API

**Setup:**

```typescript
import { test, expect } from '@playwright/test'
import { _electron as electron } from 'playwright'

test('Electron app launches successfully', async () => {
  const electronApp = await electron.launch({
    args: ['./electron/main.ts'], // Path to your main process
    cwd: process.cwd(),
  })

  const window = await electronApp.firstWindow()
  await expect(window).toHaveTitle(/Notable/)

  await electronApp.close()
})
```

**Key Features:**

- Direct Electron process control via `electron.launch()`
- Access to main process APIs and IPC channels
- Window management and multiple window testing
- Native menu and dialog testing

### 2. WebdriverIO Integration

**Configuration Example:**

```javascript
// wdio.conf.js
export const config = {
  runner: 'local',
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        binary: '/path/to/electron/app', // Path to built Electron app
        args: ['--app=' + require('path').resolve('.')],
      },
    },
  ],

  specs: ['./test/specs/**/*.ts'],
  framework: 'mocha',

  services: ['electron'],
  electronVersion: 'X.X.X', // Your Electron version
}
```

**Benefits:**

- Mature testing ecosystem
- Cross-platform compatibility
- Extensive plugin support
- Detailed reporting capabilities

### 3. Selenium WebDriver with ChromeDriver

**Setup Process:**

1. **Install ChromeDriver**: Download version matching your Electron's Chromium
2. **Configure WebDriver**:

```typescript
import { Builder, By, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

const options = new chrome.Options()
options.setChromeBinaryPath('/path/to/electron/app')
options.addArguments('--app=' + path.resolve('.'))

const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
```

**Use Cases:**

- Legacy test migration
- Integration with existing Selenium infrastructure
- Cross-browser compatibility testing

### Development vs Production Testing

#### Development Mode Testing

```bash
# Start Electron in development
npm run electron:dev

# Run tests against development build
npx playwright test --config=playwright.electron.dev.config.ts
```

#### Production Build Testing

```bash
# Build Electron application
npm run electron:build

# Test against production build
npx playwright test --config=playwright.electron.prod.config.ts
```

### VSCode Debug Configuration

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Electron Tests",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/playwright",
      "args": ["test", "--config=playwright.electron.config.ts", "--debug"],
      "console": "integratedTerminal",
      "env": {
        "ELECTRON_ENABLE_LOGGING": "true",
        "ELECTRON_ENABLE_STACK_DUMPING": "true"
      }
    }
  ]
}
```

### Best Practices for Electron Testing

1. **Window Management**: Always test window creation, resizing, and closing
2. **IPC Communication**: Verify renderer-main process communication
3. **Menu Testing**: Test application menus and keyboard shortcuts
4. **File System**: Test file operations and permissions
5. **Native Integrations**: Test OS-specific features (notifications, tray, etc.)

## Mobile Application Testing

### Overview

Mobile testing for Notable involves React Native applications on iOS and Android platforms using simulators and physical
devices.

### React Native Testing Library Setup

**Installation:**

```bash
npm install --save-dev @testing-library/react-native
npm install --save-dev react-test-renderer
```

**Basic Configuration:**

```typescript
// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

### iOS Simulator Testing

#### Prerequisites

- **Xcode**: Latest version with iOS Simulator
- **iOS Simulator**: Various iOS versions (iOS 15+)
- **React Native CLI**: `npm install -g react-native-cli`

#### Setup Process

```bash
# Install iOS dependencies
cd ios && pod install

# Start Metro bundler
npx react-native start

# Run on iOS simulator
npx react-native run-ios --simulator="iPhone 15 Pro"
```

#### E2E Testing with Detox

```javascript
// detox.config.js
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  configurations: {
    'ios.sim.debug': {
      device: {
        type: 'ios.simulator',
        device: {
          type: 'iPhone 15 Pro',
          os: 'iOS 17.0',
        },
      },
      app: {
        type: 'ios.app',
        binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Notable.app',
        build:
          'xcodebuild -workspace ios/Notable.xcworkspace -scheme Notable -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      },
    },
  },
}
```

### Android Simulator Testing

#### Prerequisites

- **Android Studio**: Latest version with SDK tools
- **Android Virtual Device (AVD)**: API level 21+ recommended
- **Java Development Kit**: JDK 8 or higher

#### Setup Process

```bash
# Start Android emulator
emulator -avd Pixel_4_API_30

# Run on Android emulator
npx react-native run-android
```

#### E2E Testing Configuration

```javascript
// detox.config.js - Android configuration
'android.emu.debug': {
  device: {
    type: 'android.emulator',
    device: {
      avdName: 'Pixel_4_API_30'
    }
  },
  app: {
    type: 'android.apk',
    binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
    build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug'
  }
}
```

### Testing Strategies

#### Unit Testing Example

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NoteEditor } from '../components/NoteEditor';

describe('NoteEditor', () => {
  it('should update note content on text change', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <NoteEditor content="" onChange={mockOnChange} />
    );

    const textInput = getByTestId('note-editor-input');
    fireEvent.changeText(textInput, 'New note content');

    expect(mockOnChange).toHaveBeenCalledWith('New note content');
  });
});
```

#### Integration Testing with MSW

```typescript
// MSW (Mock Service Worker) setup for API mocking
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
  rest.get('/api/notes', (req, res, ctx) => {
    return res(ctx.json({ notes: [] }))
  }),

  rest.post('/api/notes', (req, res, ctx) => {
    return res(ctx.json({ id: 'new-note-id' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

#### E2E Testing Example

```typescript
// e2e/firstTest.e2e.js
describe('Notable App', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should create a new note', async () => {
    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('My First Note')
    await element(by.id('note-content-input')).typeText('This is the content')
    await element(by.id('save-note-button')).tap()

    await expect(element(by.text('My First Note'))).toBeVisible()
  })
})
```

### Cross-Platform Testing Strategy

#### Testing Matrix

| Platform         | Unit Tests | Integration Tests | E2E Tests | Performance Tests |
| ---------------- | ---------- | ----------------- | --------- | ----------------- |
| iOS Simulator    | ✅         | ✅                | ✅        | ✅                |
| Android Emulator | ✅         | ✅                | ✅        | ✅                |
| iOS Device       | ❌         | ✅                | ✅        | ✅                |
| Android Device   | ❌         | ✅                | ✅        | ✅                |

#### CI/CD Integration

```yaml
# .github/workflows/mobile-tests.yml
name: Mobile Tests

on: [push, pull_request]

jobs:
  ios-tests:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run iOS tests
        run: |
          cd ios && pod install
          npx detox test --configuration ios.sim.debug

  android-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Setup Android SDK
        uses: android-actions/setup-android@v2
      - name: Run Android tests
        run: npx detox test --configuration android.emu.debug
```

### Performance Testing

#### Memory Usage Monitoring

```typescript
// Memory usage tracking during tests
import { PerformanceObserver } from 'perf_hooks'

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}ms`)
  })
})

observer.observe({ entryTypes: ['measure'] })
```

#### App Launch Time Testing

```typescript
describe('Performance Tests', () => {
  it('should launch within acceptable time limits', async () => {
    const startTime = Date.now()
    await device.launchApp()
    const launchTime = Date.now() - startTime

    expect(launchTime).toBeLessThan(3000) // 3 seconds max
  })
})
```

## Test Environment Setup

### Required Tools Installation

```bash
# Playwright for web and Electron testing
npm install -D playwright @playwright/test

# React Native testing tools
npm install -D @testing-library/react-native react-test-renderer

# Detox for mobile E2E testing
npm install -D detox

# MSW for API mocking
npm install -D msw
```

### Environment Variables

```bash
# .env.test
REACT_APP_API_URL=http://localhost:3001
REACT_APP_SUPABASE_URL=your-test-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-test-supabase-key
```

### Test Execution Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:web": "playwright test",
    "test:electron": "playwright test --config=playwright.electron.config.ts",
    "test:ios": "detox test --configuration ios.sim.debug",
    "test:android": "detox test --configuration android.emu.debug",
    "test:e2e": "npm run test:web && npm run test:electron",
    "test:mobile": "npm run test:ios && npm run test:android",
    "test:all": "npm run test && npm run test:e2e && npm run test:mobile"
  }
}
```

## Continuous Integration

### Testing Pipeline

1. **Unit Tests**: Run on every commit
2. **Integration Tests**: Run on pull requests
3. **E2E Tests**: Run on main branch merges
4. **Performance Tests**: Run nightly

### Quality Gates

- **Code Coverage**: Minimum 80%
- **Test Pass Rate**: 100% for critical paths
- **Performance**: No regression in key metrics
- **Accessibility**: WCAG 2.1 AA compliance

This comprehensive testing documentation ensures robust quality assurance across all platforms where Notable operates.
