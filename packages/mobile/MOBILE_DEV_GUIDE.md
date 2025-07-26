# Notable Mobile Development Guide

## 🚀 Quick Start

### First Time Setup
```bash
# Install dependencies and set up development environment
pnpm install
pnpm mobile:setup
```

### Start Development

#### Interactive Development Menu
```bash
pnpm mobile:dev
```
This opens an interactive menu with all development options.

#### Platform-Specific Development
```bash
# iOS Development (macOS only)
pnpm mobile:ios

# Android Development
pnpm mobile:android
```

## 📱 Simulator & Emulator Management

### iOS Simulator (macOS only)
```bash
# Setup and start iOS simulator
pnpm simulator:ios

# List available simulators
pnpm simulator:ios:list

# Reset simulator to clean state
pnpm simulator:ios:reset
```

### Android Emulator
```bash
# Setup and start Android emulator
pnpm emulator:android

# List available AVDs
pnpm emulator:android:list

# Reset emulator to clean state
pnpm emulator:android:reset
```

## 🛠️ Development Commands

### Clean & Reset
```bash
# Clear all caches (Metro, Watchman, etc.)
pnpm mobile:clean

# Reset both simulators/emulators
pnpm mobile:reset

# Deep clean (remove node_modules, etc.)
pnpm clean
```

### Testing
```bash
# Run unit tests
pnpm test

# Run E2E tests (both platforms)
pnpm e2e

# Platform-specific E2E tests
pnpm e2e:test:ios
pnpm e2e:test:android

# Build apps for E2E testing
pnpm e2e:build:ios
pnpm e2e:build:android
```

### Building
```bash
# Development builds
pnpm build:development

# Preview builds
pnpm build:preview

# Production builds
pnpm build:production

# Local builds
pnpm build:ios        # Creates .ipa file
pnpm build:android    # Creates .apk file
```

## 🔧 VS Code Integration

### Launch Configurations
The project includes VS Code launch configurations for:
- Debug iOS (Simulator)
- Debug Android (Emulator)
- Debug Both Platforms
- Debug E2E Tests (iOS)
- Debug E2E Tests (Android)
- Attach to Packager

Access these via the Run and Debug panel (⌘⇧D / Ctrl+Shift+D).

### Recommended Extensions
- React Native Tools
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- DotENV
- Jest
- Expo Tools

## 🏗️ Project Structure

```
packages/mobile/
├── scripts/              # Development automation scripts
│   ├── mobile-dev.js    # Main development orchestrator
│   ├── ios-simulator.js # iOS simulator management
│   ├── android-emulator.js # Android emulator management
│   └── setup-dev.js     # Initial setup script
├── .vscode/             # VS Code configuration
│   ├── launch.json      # Debug configurations
│   ├── settings.json    # Workspace settings
│   └── extensions.json  # Recommended extensions
├── e2e/                 # E2E test files
│   ├── auth.test.js     # Authentication tests
│   ├── notes.test.js    # Note operations tests
│   ├── search.test.js   # Search functionality tests
│   ├── offline.test.js  # Offline mode tests
│   └── performance.test.js # Performance tests
└── .detoxrc.cjs         # Detox configuration
```

## 🚨 Troubleshooting

### iOS Issues

**Simulator won't start:**
```bash
# Reset simulator
pnpm simulator:ios:reset

# Check Xcode installation
xcode-select -p

# Install Xcode command line tools
xcode-select --install
```

**Build fails with pod errors:**
```bash
cd ios
pod deintegrate
pod install
```

### Android Issues

**Emulator won't start:**
```bash
# Check ANDROID_HOME
echo $ANDROID_HOME

# List available AVDs
pnpm emulator:android:list

# Create new AVD
pnpm emulator:android reset
```

**ADB not found:**
```bash
# Add to your shell profile (.zshrc, .bashrc, etc.)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

### Metro Bundler Issues

**Clear all caches:**
```bash
pnpm mobile:clean
watchman watch-del-all
rm -rf $TMPDIR/metro-*
```

**Reset everything:**
```bash
pnpm clean
pnpm install
pnpm mobile:setup
```

## 🔐 Environment Variables

Create `.env.local` from `.env.example`:
```bash
cp .env.example .env.local
```

Required variables:
```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Performance Tips

1. **Use Release Builds for Performance Testing**
   ```bash
   npx react-native run-ios --configuration Release
   npx react-native run-android --variant release
   ```

2. **Enable RAM Bundles (Android)**
   Already configured in the project.

3. **Use Hermes Engine**
   Enabled by default for better performance.

4. **Profile Performance**
   - Use React DevTools Profiler
   - Enable Systrace for Android
   - Use Instruments for iOS

## 🎯 Development Workflow

1. **Start Development Environment**
   ```bash
   pnpm mobile:dev
   ```

2. **Make Changes**
   - Edit code in your IDE
   - Save files to trigger hot reload
   - Use shake gesture or Cmd+D (iOS) / Cmd+M (Android) for dev menu

3. **Test Changes**
   - Run unit tests: `pnpm test`
   - Run E2E tests: `pnpm e2e:test:ios` or `pnpm e2e:test:android`

4. **Debug Issues**
   - Use React Native Debugger
   - Check Metro bundler logs
   - Use platform-specific debugging tools

5. **Build and Deploy**
   - Create preview build: `pnpm build:preview`
   - Test on real devices via Expo Go or custom dev client
   - Submit to app stores via EAS Build

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Detox Testing Guide](https://wix.github.io/Detox/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

## 🆘 Getting Help

1. Check the troubleshooting section above
2. Run `pnpm mobile:dev` and use option 8 to check dependencies
3. Check GitHub Issues for similar problems
4. Ask in the project's Discord/Slack channel