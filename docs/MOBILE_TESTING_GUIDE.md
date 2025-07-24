# Mobile App Testing Guide (React Native/Expo)

## Simulator/Emulator Setup

### iOS Simulator (macOS only)

1. Install Xcode from App Store
2. Open Xcode > Preferences > Components
3. Download iOS simulators
4. List available simulators:
   ```bash
   xcrun simctl list devices
   ```

### Android Emulator

1. Install Android Studio
2. Open AVD Manager
3. Create Virtual Device
4. Start emulator:
   ```bash
   emulator -avd Pixel_6_API_33
   ```

## Running the App on Simulators

### Development Mode

```bash
# Navigate to mobile package
cd packages/mobile

# Start Expo development server
npm start

# iOS Simulator (press 'i' in terminal or run directly)
npm run ios

# Android Emulator (press 'a' in terminal or run directly)
npm run android

# Specific iOS device
npm run ios -- --simulator="iPhone 14 Pro"
```

### Using Expo Go

1. Install Expo Go on simulator/emulator
2. Run `npm start`
3. Press 'i' for iOS or 'a' for Android
4. App opens in Expo Go

### Development Builds (Recommended for Testing)

```bash
# Create development build
npx eas build --profile development --platform ios
npx eas build --profile development --platform android

# Install on simulator
npx eas build:run -p ios
npx eas build:run -p android
```

## E2E Testing with Maestro

### Installation

```bash
# Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | bash

# Verify installation
maestro --version
```

### Basic Test Structure

```yaml
# .maestro/home-screen.yml
appId: com.notable.app
---
- launchApp
- assertVisible: 'Welcome to Notable'
- tapOn: 'Get Started'
- assertVisible: 'Create your first note'
```

```yaml
# .maestro/create-note.yml
appId: com.notable.app
---
- launchApp
- tapOn: 'New Note'
- assertVisible: 'Untitled'
- inputText: 'My Test Note'
- tapOn: 'Save'
- assertVisible: 'My Test Note'
```

### Running Maestro Tests

```bash
# Run single test
maestro test .maestro/home-screen.yml

# Run all tests
maestro test .maestro/

# Run with specific device
maestro test --device "iPhone 14" .maestro/
```

## E2E Testing with Detox (Bare Workflow Only)

### Setup

```bash
# Install Detox
npm install --save-dev detox @types/detox jest

# Install Detox CLI globally
npm install -g detox-cli
```

### Configuration

```javascript
// .detoxrc.js
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Notable.app',
      build:
        'xcodebuild -workspace ios/Notable.xcworkspace -scheme Notable -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_6_API_33',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
  },
}
```

### Detox Test Example

```javascript
// e2e/firstTest.e2e.js
describe('Notable App', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show welcome screen', async () => {
    await expect(element(by.text('Welcome to Notable'))).toBeVisible()
  })

  it('should create new note', async () => {
    await element(by.id('new-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Test Note')
    await element(by.id('note-content-input')).typeText('This is a test note')
    await element(by.id('save-button')).tap()
    await expect(element(by.text('Test Note'))).toBeVisible()
  })
})
```

### Running Detox Tests

```bash
# Build app for testing
detox build -c ios.sim.debug
detox build -c android.emu.debug

# Run tests
detox test -c ios.sim.debug
detox test -c android.emu.debug
```

## CI/CD Integration with EAS

### EAS Workflow Configuration

```yaml
# .eas/workflows/e2e-test.yml
build:
  name: Build for E2E tests
  steps:
    - eas/checkout
    - eas/install_node_modules
    - eas/resolve_apple_team_id_from_credentials:
        inputs:
          apple_team_id_env_var_name: APPLE_TEAM_ID
    - eas build:
        inputs:
          profile: test
          platform: ${{ inputs.platform }}

test:
  name: Run E2E tests
  steps:
    - eas/checkout
    - eas/install_node_modules
    - eas/download_build:
        inputs:
          build_id: ${{ needs.build.outputs.build_id }}
    - run:
        name: Run Maestro tests
        command: |
          curl -Ls "https://get.maestro.mobile.dev" | bash
          export PATH="$HOME/.maestro/bin:$PATH"
          maestro test .maestro/
```

## Best Practices

1. **Test on Real Devices**: Periodically test on physical devices
2. **Multiple OS Versions**: Test on different iOS/Android versions
3. **Different Screen Sizes**: Test on various device sizes
4. **Network Conditions**: Test offline mode and slow connections
5. **Permissions**: Test camera, location, notification permissions
6. **Deep Linking**: Test URL scheme handling
7. **Background/Foreground**: Test app state transitions

## Debugging Tips

1. **React Native Debugger**: Use for Redux/state debugging
2. **Flipper**: Facebook's debugging platform
3. **Chrome DevTools**: For JavaScript debugging
4. **Native Logs**:

   ```bash
   # iOS
   npx react-native log-ios

   # Android
   npx react-native log-android
   ```

## Common Issues and Solutions

1. **Metro Bundler Issues**:

   ```bash
   npx react-native start --reset-cache
   ```

2. **iOS Pod Issues**:

   ```bash
   cd ios && pod install
   ```

3. **Android Build Issues**:

   ```bash
   cd android && ./gradlew clean
   ```

4. **Simulator Not Found**:

   ```bash
   # List available simulators
   xcrun simctl list devices
   ```

5. **Expo Go Limitations**: Use development builds for testing native modules

## Performance Testing

1. **React DevTools Profiler**: Measure component render performance
2. **Systrace**: Android performance profiling
3. **Instruments**: iOS performance profiling
4. **Maestro Studio**: Visual test recording and playback
