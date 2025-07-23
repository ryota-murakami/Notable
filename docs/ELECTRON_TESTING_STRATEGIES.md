# Electron Testing Strategies - 2024/2025 Research

## Overview

This document provides comprehensive research on Electron app testing strategies for 2024-2025, covering both development and production build testing approaches, tools, frameworks, and best practices.

## Executive Summary

Modern Electron testing in 2024-2025 has evolved significantly:

- **Spectron is deprecated** - migrate to Playwright or WebdriverIO
- **Playwright for Electron** is the recommended modern solution
- **WebdriverIO** remains a robust alternative with strong Electron support
- **Testing both dev and production builds** is crucial for reliability
- **CI/CD automation** is essential for comprehensive testing

## 1. Development vs Production Build Testing

### Development Builds

- Expose debugging tools and hot-reloading
- Allow direct access to DevTools
- Enable faster feedback loops
- Include developer-facing features
- May have different security settings (e.g., `nodeIntegration` enabled for testing)

### Production Builds

- Optimized and packaged versions
- Code minification and disabled dev tools
- Closer to real user environment
- Required for testing packaging, auto-updater, and distribution features
- Essential for final validation before release

### Testing Strategy

```javascript
// Example: Testing different builds with Playwright
const isPackaged = await electronApp.evaluate(async ({ app }) => app.isPackaged)
expect(isPackaged).toBe(false) // For dev builds
expect(isPackaged).toBe(true) // For production builds
```

## 2. Current E2E Testing Frameworks & Tools

### Playwright for Electron (Recommended)

**Pros:**

- Native Electron support via experimental API
- Robust API with multi-process testing
- Active development and maintenance
- Cross-platform support
- Video/screenshot capture
- Excellent debugging capabilities

**Cons:**

- Learning curve for advanced scenarios
- Experimental status (though stable in practice)

**Setup:**

```bash
npm install --save-dev @playwright/test
```

**Basic Test Example:**

```javascript
const { test, _electron: electron } = require('@playwright/test')

test('launch app', async () => {
  const electronApp = await electron.launch({ args: ['main.js'] })

  // Test app.isPackaged
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    return app.isPackaged
  })
  console.log(isPackaged) // false (development mode)

  // Get the first window
  const window = await electronApp.firstWindow()

  // Interact with the window
  await window.click('button#my-button')

  // Take screenshot
  await window.screenshot({ path: 'example.png' })

  await electronApp.close()
})
```

### WebdriverIO (Alternative)

**Pros:**

- Mature ecosystem with extensive plugins
- Strong configuration flexibility
- Official Electron service (`wdio-electron-service`)
- Good for complex test scenarios
- Supports multiple automation protocols

**Cons:**

- More complex setup
- Configuration overhead
- Browser-centric by default

**Setup:**

```bash
npm create wdio@latest ./
npm install --save-dev wdio-electron-service
```

**Configuration:**

```typescript
// wdio.conf.ts
export const config: WebdriverIO.Config = {
  services: [
    [
      'electron',
      {
        appEntryPoint: './path/to/bundled/electron/main.bundle.js',
        appArgs: [
          /** ... */
        ],
      },
    ],
  ],
}
```

### Deprecated: Spectron

- **Status:** Deprecated and unmaintained
- **Migration:** Use Playwright or WebdriverIO instead
- **Note:** Do not use for new projects in 2024+

## 3. Unit Testing: Main vs Renderer Process

### Main Process Testing

- Use Node.js test frameworks (Jest, Mocha, Vitest)
- Test modules in isolation
- Mock Electron APIs (`app`, `BrowserWindow`, etc.)
- Focus on business logic and IPC handlers

**Example:**

```javascript
// main-process.test.js
import { app } from 'electron'
jest.mock('electron', () => ({
  app: {
    quit: jest.fn(),
    getAppPath: jest.fn(() => '/fake/path'),
  },
}))
```

### Renderer Process Testing

- Treat as web frontend testing
- Use Jest with jsdom, React Testing Library, etc.
- Mock Electron APIs accessed via preload scripts
- Test UI components and user interactions

**Example:**

```javascript
// renderer.test.js
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock electron APIs
window.electronAPI = {
  saveFile: jest.fn(),
  openFile: jest.fn(),
}
```

## 4. CI/CD Best Practices

### Essential Practices

- **Automate both E2E and unit tests** on every commit/PR
- **Test against production builds** in release pipelines
- **Use containerization** for reliable environments
- **Parallelize testing** where possible
- **Store artifacts** (logs, screenshots, videos) for debugging

### GitHub Actions Example

```yaml
name: Electron Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test

      - name: Build app
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload test artifacts
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: test-artifacts
          path: |
            test-results/
            screenshots/
```

## 5. Testing Real Desktop Functionality

### File System Operations

```javascript
// E2E test for file operations
test('file save dialog', async () => {
  const electronApp = await electron.launch({ args: ['main.js'] })
  const window = await electronApp.firstWindow()

  // Trigger save dialog
  await window.click('#save-button')

  // Handle dialog (mock or real)
  // Verify file was saved
})
```

### Notifications

```javascript
// Test system notifications
test('shows notification', async () => {
  const electronApp = await electron.launch({ args: ['main.js'] })

  // Trigger notification
  await electronApp.evaluate(({ Notification }) => {
    new Notification('Test', { body: 'Test message' })
  })

  // Verify notification appeared (system-dependent)
})
```

### Auto-Updater

```javascript
// Mock update server for testing
test('auto-updater flow', async () => {
  // Setup mock update server
  const mockServer = setupMockUpdateServer()

  const electronApp = await electron.launch({
    args: ['main.js'],
    env: { UPDATE_SERVER_URL: mockServer.url },
  })

  // Test update check flow
  await electronApp.evaluate(({ autoUpdater }) => {
    autoUpdater.checkForUpdates()
  })

  // Verify update behavior
})
```

## 6. Popular Tools Comparison

| Tool            | Pros                                           | Cons                                  | Best For                               |
| --------------- | ---------------------------------------------- | ------------------------------------- | -------------------------------------- |
| **Playwright**  | Native support, active development, robust API | Learning curve, experimental status   | Modern projects, comprehensive E2E     |
| **WebdriverIO** | Mature, flexible, extensive plugins            | Complex setup, configuration overhead | Complex scenarios, existing WDIO users |
| **Jest/Vitest** | Fast, ecosystem support, mocking               | Require mocking for Electron APIs     | Unit testing, TDD                      |
| **Puppeteer**   | Direct CDP access, debugging                   | Limited Electron support              | Custom testing scenarios               |

## 7. Example Testing Setups

### Complete Playwright Setup

**Installation:**

```bash
npm install --save-dev @playwright/test
```

**Configuration (playwright.config.js):**

```javascript
module.exports = {
  testDir: './e2e',
  timeout: 30000,
  workers: 1,
  reporter: [['html'], ['junit', { outputFile: 'test-results/results.xml' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
}
```

**Test Example:**

```javascript
// e2e/app.spec.js
const { test, expect, _electron: electron } = require('@playwright/test')

test.describe('Electron App', () => {
  let electronApp
  let window

  test.beforeEach(async () => {
    electronApp = await electron.launch({
      args: ['dist/main.js'],
    })
    window = await electronApp.firstWindow()
  })

  test.afterEach(async () => {
    await electronApp.close()
  })

  test('window loads correctly', async () => {
    await expect(window).toHaveTitle('My Electron App')
    await expect(window.locator('h1')).toHaveText('Welcome')
  })

  test('menu interactions', async () => {
    // Test menu functionality
    await window.click('[data-testid="file-menu"]')
    await window.click('[data-testid="new-file"]')
    await expect(window.locator('[data-testid="editor"]')).toBeVisible()
  })
})
```

### Package.json Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:debug": "playwright test --debug",
    "build": "electron-builder",
    "test:prod": "npm run build && playwright test --config=playwright.prod.config.js"
  }
}
```

## 8. Docker Integration

**Dockerfile for Testing:**

```dockerfile
FROM node:18

# Install system dependencies for Electron
RUN apt-get update && apt-get install -y \
    xvfb \
    libnss3 \
    libatk-bridge2.0-0 \
    libdrm2 \
    libxkbcommon0 \
    libgtk-3-0

# Set display for headless mode
ENV DISPLAY=:99

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Start Xvfb and run tests
CMD ["sh", "-c", "Xvfb :99 -screen 0 1024x768x24 & npm run test:e2e"]
```

## 9. Notable-Specific Testing Setup

Based on the Notable codebase analysis, here's a recommended testing approach:

### Current Architecture

- **Electron Main:** `/electron/main.ts`
- **Next.js Renderer:** `/packages/web/`
- **Build Process:** Uses `electron-builder`

### Recommended Test Structure

```
tests/
├── unit/
│   ├── main/
│   │   ├── main-process.test.ts
│   │   └── ipc-handlers.test.ts
│   └── renderer/
│       ├── components/
│       └── hooks/
├── e2e/
│   ├── app-launch.spec.ts
│   ├── note-editing.spec.ts
│   ├── file-operations.spec.ts
│   └── settings.spec.ts
└── fixtures/
    ├── test-notes.json
    └── mock-data/
```

### Integration with Existing Setup

```javascript
// playwright.config.js for Notable
module.exports = {
  testDir: './tests/e2e',
  timeout: 30000,
  workers: 1,
  projects: [
    {
      name: 'development',
      use: {
        launchOptions: {
          args: ['dist/main.js'],
          env: { NODE_ENV: 'test' },
        },
      },
    },
    {
      name: 'production',
      use: {
        launchOptions: {
          args: ['dist-prod/Notable.app/Contents/MacOS/Notable'],
          executablePath: 'dist-prod/Notable.app/Contents/MacOS/Notable',
        },
      },
    },
  ],
}
```

## 10. Migration Path from Spectron

If migrating from Spectron to Playwright:

1. **Replace Spectron imports:**

   ```javascript
   // Old: Spectron
   const { Application } = require('spectron')

   // New: Playwright
   const { _electron: electron } = require('@playwright/test')
   ```

2. **Update app launch:**

   ```javascript
   // Old: Spectron
   const app = new Application({ path: electronPath })
   await app.start()

   // New: Playwright
   const electronApp = await electron.launch({ args: ['main.js'] })
   ```

3. **Update window access:**

   ```javascript
   // Old: Spectron
   await app.client.getTitle()

   // New: Playwright
   const window = await electronApp.firstWindow()
   await window.title()
   ```

## 11. Future Considerations

### Emerging Trends

- **WebDriver BiDi** support in testing frameworks
- **Component testing** for Electron renderer processes
- **Visual regression testing** for desktop apps
- **Accessibility testing** automation
- **Performance testing** for Electron apps

### Tool Evolution

- Playwright Electron support moving from experimental to stable
- WebdriverIO continuing evolution with better Electron integration
- New testing tools specifically designed for desktop applications

## 12. Conclusion

For Notable and similar Electron applications in 2024-2025:

1. **Use Playwright for Electron** as the primary E2E testing solution
2. **Test both development and production builds**
3. **Implement comprehensive CI/CD automation**
4. **Focus on real desktop functionality testing**
5. **Maintain good separation between unit and E2E tests**
6. **Plan for migration from deprecated tools like Spectron**

The testing landscape for Electron has matured significantly, with robust tools and best practices now available for comprehensive testing strategies.
