# Electron Testing Guide

## Development Mode Testing

### Running Electron in Development

```bash
# From the electron package directory
cd packages/electron
npm run dev
```

This runs the Electron app with hot-reloading and development tools enabled.

### Manual Testing in Development

1. Launch the app using `npm run dev`
2. Test all main features:
   - Window management
   - File operations
   - IPC communication
   - Menu items
   - Native dialogs

## Production Testing

### Building for Production

```bash
# Build the Electron app
npm run build

# The built app will be in dist/ directory
# - Windows: dist/Notable.exe
# - macOS: dist/Notable.app
# - Linux: dist/Notable.AppImage
```

### Testing Production Build

1. Run the packaged application from the dist folder
2. Verify all features work without dev tools
3. Check file paths and resource loading
4. Test auto-updater functionality

## E2E Testing with Playwright

### Setup

```bash
# Install Playwright with Electron support
npm install --save-dev @playwright/test
```

### Basic E2E Test Structure

```javascript
// tests/e2e/electron.spec.js
const { test, _electron: electron } = require('@playwright/test')
const path = require('path')

test.describe('Electron App E2E', () => {
  let electronApp

  test.beforeEach(async () => {
    // For development testing
    electronApp = await electron.launch({
      args: [path.join(__dirname, '../../main.js')],
    })

    // For production testing
    // electronApp = await electron.launch({
    //   executablePath: path.join(__dirname, '../../dist/Notable.app/Contents/MacOS/Notable')
    // });
  })

  test.afterEach(async () => {
    await electronApp.close()
  })

  test('should launch window', async () => {
    const window = await electronApp.firstWindow()
    const title = await window.title()
    expect(title).toBe('Notable')
  })

  test('should create new note', async () => {
    const window = await electronApp.firstWindow()
    // Click new note button
    await window.click('[data-testid="new-note-button"]')
    // Verify note creation
    await window.waitForSelector('[data-testid="editor"]')
  })

  test('should save and load notes', async () => {
    const window = await electronApp.firstWindow()
    // Type in editor
    await window.type('[data-testid="editor"]', 'Test note content')
    // Save note
    await window.keyboard.press('Control+S')
    // Verify save
    await window.waitForSelector('[data-testid="save-indicator"]')
  })
})
```

### Running E2E Tests

```bash
# Run all E2E tests
npx playwright test

# Run with UI mode for debugging
npx playwright test --ui

# Run specific test file
npx playwright test tests/e2e/electron.spec.js
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Electron E2E Tests

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

      - name: Build Electron app
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          CI: true
```

## Best Practices

1. **Test Both Modes**: Always test in both development and production modes
2. **Cross-Platform**: Test on all target platforms (Windows, macOS, Linux)
3. **IPC Testing**: Ensure all IPC channels work correctly
4. **File System**: Test file operations with different permissions
5. **Memory Leaks**: Monitor memory usage during long-running tests
6. **Performance**: Test app startup time and responsiveness
7. **Updates**: Test auto-update functionality in production builds

## Debugging Tips

1. **DevTools**: Use Chrome DevTools in development mode
2. **Console Logs**: Add logging for IPC communication
3. **Electron Fiddle**: Use for quick prototyping and testing
4. **Process Monitor**: Use system tools to monitor resource usage

## Common Issues

1. **Path Issues**: Production builds may have different path structures
2. **Permissions**: File system permissions differ between dev and prod
3. **Code Signing**: macOS requires code signing for distribution
4. **Native Modules**: Ensure native modules are rebuilt for Electron
