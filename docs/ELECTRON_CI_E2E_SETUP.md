# Electron CI E2E Testing Setup

## Overview

This document explains the Electron End-to-End (E2E) testing setup for CI environments, including GitHub Actions workflows and cross-platform testing strategies.

## Architecture

### Components

1. **GitHub Actions Workflow** (`.github/workflows/electron-e2e.yml`)
   - Cross-platform testing (Ubuntu, Windows, macOS)
   - Automated dependency management
   - Build verification
   - Test execution and reporting

2. **CI Setup Script** (`packages/electron/scripts/ci-e2e-setup.js`)
   - Web server management
   - Environment configuration
   - Test execution coordination
   - Cleanup procedures

3. **Playwright Configuration** (`packages/electron/playwright.config.ts`)
   - Electron-specific test settings
   - Timeout configurations
   - Test organization

## Features

### Cross-Platform Testing

Tests run on three platforms simultaneously:
- **Ubuntu Latest**: Linux desktop environment testing
- **Windows Latest**: Windows desktop environment testing  
- **macOS Latest**: macOS desktop environment testing

### Automated Environment Setup

- **Virtual Display**: Automatic Xvfb setup for Linux headless testing
- **Permissions**: macOS screen recording permissions for testing
- **Dependencies**: Automated Playwright browser installation
- **Caching**: Intelligent caching of dependencies and browsers

### Web Server Integration

- **Automatic Startup**: Web development server starts automatically
- **Health Checking**: Waits for server readiness before testing
- **Cleanup**: Proper server shutdown after tests complete

## Usage

### Local Development

```bash
# Run E2E tests locally with dev server
cd packages/electron
pnpm e2e:with-server

# Run E2E tests using CI script (more reliable)
pnpm e2e:ci

# Run tests in headed mode for debugging
pnpm e2e:headed

# Debug specific tests
pnpm e2e:debug
```

### CI Environment

The workflow automatically triggers on:
- **Push** to main/develop branches
- **Pull Requests** to main/develop branches
- **Manual dispatch** via GitHub UI

```yaml
# Relevant file paths that trigger the workflow:
- 'packages/electron/**'
- 'packages/web/**'
- 'packages/routing/**'
- 'packages/sync/**'
- '.github/workflows/electron-e2e.yml'
```

## Configuration

### Environment Variables

#### Required in CI
```bash
ELECTRON_DISABLE_SECURITY_WARNINGS=true
ELECTRON_START_URL=http://localhost:4378
PLAYWRIGHT_BROWSERS_PATH=/path/to/browsers
```

#### Test Environment
```bash
NODE_ENV=test
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:4378
```

### Platform-Specific Settings

#### Linux (Ubuntu)
- Uses Xvfb for virtual display (`DISPLAY=:99`)
- Installs xvfb package automatically
- Headless Electron testing

#### Windows
- Native Windows testing
- Process management via taskkill
- Windows-specific build verification

#### macOS
- Screen recording permissions setup
- Native macOS app behavior testing
- macOS-specific build verification

## Test Structure

### Test Categories

1. **App Lifecycle Tests**
   - Application startup/shutdown
   - Window management
   - Process management

2. **UI Integration Tests**
   - User interface interactions
   - Menu system functionality
   - Theme switching

3. **IPC Communication Tests**
   - Main process ↔ Renderer communication
   - File operations
   - System integration

4. **Build Verification Tests**
   - App packaging
   - Distribution build testing
   - Cross-platform compatibility

### Test Organization

```
packages/electron/e2e/
├── fixtures/           # Test fixtures and setup
├── tests/             # Test files
│   ├── app-lifecycle.test.ts
│   ├── ui-integration.test.ts
│   └── ipc-communication.test.ts
└── utils/             # Test utilities
```

## Monitoring and Debugging

### Artifacts

The workflow automatically uploads:
- **Test Results**: Playwright HTML reports
- **Screenshots**: Failure screenshots and videos
- **Build Artifacts**: Distribution packages for debugging

### Retention Policies
- Test results: 7 days
- Screenshots: 7 days  
- Build artifacts: 3 days

### Debugging Failed Tests

1. **Download Artifacts**: Get screenshots/videos from failed runs
2. **Local Reproduction**: Use `pnpm e2e:headed` to see tests visually
3. **CI Logs**: Check detailed logs in GitHub Actions
4. **Environment Issues**: Review platform-specific setup steps

## Best Practices

### Writing Tests

```typescript
import { expect, test } from '../fixtures/electron-fixtures'

test.describe('Feature Name', () => {
  test('should do something specific', async ({ electronApp, electronPage }) => {
    // Use descriptive test names
    // Test one feature per test case
    // Include proper assertions
    await expect(electronPage.locator('selector')).toBeVisible()
  })
})
```

### Performance Considerations

- **Sequential Execution**: Electron tests run sequentially (workers: 1)
- **Timeout Management**: Generous timeouts for app startup (60s)
- **Resource Cleanup**: Automatic cleanup of processes and files

### Reliability Improvements

- **Retry Logic**: 2 retries on CI failures
- **Health Checks**: Server readiness verification
- **Process Management**: Proper cleanup on exit
- **Error Handling**: Graceful failure handling

## Troubleshooting

### Common Issues

1. **Server Startup Timeout**
   ```bash
   # Check if port 4378 is in use
   lsof -i :4378
   # Kill existing processes
   pkill -f "next dev"
   ```

2. **Electron App Launch Failure**
   ```bash
   # Check Electron installation
   npx electron --version
   # Rebuild native dependencies
   pnpm rebuild
   ```

3. **Test Flakiness**
   - Increase timeouts in playwright.config.ts
   - Add explicit wait conditions
   - Use data-testid attributes for reliable selection

### Platform-Specific Issues

#### Linux
- Ensure Xvfb is running: `ps aux | grep Xvfb`
- Check DISPLAY variable: `echo $DISPLAY`

#### Windows  
- UAC prompts may interfere with automation
- Check Windows Defender exclusions

#### macOS
- Verify screen recording permissions
- Check Gatekeeper settings for unsigned apps

## Future Enhancements

1. **Parallel Testing**: Explore safe parallel execution strategies
2. **Visual Regression**: Add screenshot comparison tests
3. **Performance Testing**: App startup time measurements
4. **Integration Testing**: Cross-platform file system operations
5. **Accessibility Testing**: Automated a11y testing integration

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Electron Testing Guide](https://www.electronjs.org/docs/latest/tutorial/automated-testing)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cross-Platform CI Best Practices](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)