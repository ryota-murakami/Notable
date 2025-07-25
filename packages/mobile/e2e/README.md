# Mobile E2E Testing with Detox

This directory contains end-to-end tests for the Notable mobile application using Detox.

## Overview

The E2E test suite provides comprehensive testing for:

- Authentication flows
- Note management (CRUD operations)
- Search functionality
- Offline capabilities
- Performance benchmarks
- Cross-platform compatibility

## Prerequisites

### iOS Testing

- macOS with Xcode installed
- iOS Simulator
- React Native CLI

### Android Testing

- Android SDK
- Android Studio
- Android Emulator or physical device

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set up Detox CLI globally (optional):

```bash
npm install -g detox-cli
```

3. Build the application for testing:

```bash
# iOS
pnpm e2e:build:ios

# Android
pnpm e2e:build:android
```

## Running Tests

### Local Development

#### iOS Tests

```bash
# Run all iOS tests
pnpm e2e:test:ios

# Run specific test file
pnpm e2e:test:ios e2e/auth.test.js

# Run with verbose output
pnpm e2e:test:ios --loglevel verbose
```

#### Android Tests

```bash
# Run all Android tests
pnpm e2e:test:android

# Run specific test file
pnpm e2e:test:android e2e/notes.test.js

# Run with verbose output
pnpm e2e:test:android --loglevel verbose
```

### CI/CD

Tests are automatically run in GitHub Actions on:

- Push to main/develop branches
- Pull requests targeting main/develop
- Changes to mobile package files

## Test Structure

### Test Files

- `auth.test.js` - Authentication flow testing
- `notes.test.js` - Note management functionality
- `search.test.js` - Search and filtering capabilities
- `offline.test.js` - Offline functionality and sync
- `performance.test.js` - Performance benchmarks

### Configuration Files

- `.detoxrc.js` - Main Detox configuration
- `jest.config.cjs` - Jest configuration for E2E tests
- `jest.setup.js` - Test setup and global hooks

## Writing Tests

### Basic Test Structure

```javascript
describe('Feature Name', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should do something', async () => {
    await expect(element(by.id('element-id'))).toBeVisible()
    await element(by.id('button-id')).tap()
    await expect(element(by.text('Expected Text'))).toBeVisible()
  })
})
```

### Element Matchers

- `by.id('testID')` - Match by testID prop
- `by.text('text')` - Match by text content
- `by.label('label')` - Match by accessibility label
- `by.type('RCTImageView')` - Match by component type

### Actions

- `tap()` - Tap element
- `longPress()` - Long press element
- `typeText('text')` - Type text into input
- `clearText()` - Clear text from input
- `scroll(pixels, direction)` - Scroll element

### Expectations

- `toBeVisible()` - Element is visible
- `toBeNotVisible()` - Element is not visible
- `toExist()` - Element exists in hierarchy
- `toHaveText('text')` - Element has specific text

## Debugging

### Enable Verbose Logging

```bash
pnpm e2e:test:ios --loglevel verbose
```

### Take Screenshots

```javascript
await device.takeScreenshot('test-screenshot')
```

### Debug Mode

```javascript
await device.launchApp({ newInstance: true, debug: true })
```

## Performance Testing

Performance tests measure:

- App launch time (< 5 seconds)
- Navigation speed (< 500ms)
- Search response time (< 1 second)
- Sync operations (< 3 seconds)
- Memory usage during extended sessions

## Troubleshooting

### Common Issues

1. **App not building**: Check React Native and Expo setup
2. **Simulator not responding**: Restart simulator or create new AVD
3. **Tests timing out**: Increase timeout values or check app performance
4. **Element not found**: Verify testID props are set correctly

### Logs and Artifacts

Test artifacts are saved to:

- Screenshots: `artifacts/screenshots/`
- Device logs: `artifacts/logs/`
- Performance reports: `performance-reports/`

## Best Practices

1. **Use testID props** for reliable element selection
2. **Wait for elements** using `waitFor()` instead of `sleep()`
3. **Reset app state** between tests with `device.reloadReactNative()`
4. **Group related tests** in describe blocks
5. **Use meaningful test names** describing the expected behavior
6. **Clean up after tests** (restore network, clear data)
7. **Keep tests independent** - each test should work in isolation

## Continuous Integration

The mobile E2E tests run automatically in GitHub Actions with:

- Parallel execution for iOS and Android
- Artifact upload on test failures
- Integration with CodeRabbit for automated review
- Performance regression detection

For more details, see `.github/workflows/mobile-e2e.yml`.
