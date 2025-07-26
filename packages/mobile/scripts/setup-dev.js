#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-console */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function setupDevEnvironment() {
  log('🚀 Setting up Notable Mobile Development Environment', 'bright');
  log('==================================================\n', 'dim');
  
  const platform = os.platform();
  const projectRoot = path.join(__dirname, '..');
  
  // Check Node version
  log('Checking Node.js version...', 'yellow');
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
  if (majorVersion < 18) {
    log(`❌ Node.js ${nodeVersion} is too old. Please install Node.js 18 or later.`, 'red');
    process.exit(1);
  }
  log(`✅ Node.js ${nodeVersion}`, 'green');
  
  // Install dependencies
  log('\nInstalling dependencies...', 'yellow');
  try {
    execSync('pnpm install', { cwd: projectRoot, stdio: 'inherit' });
    log('✅ Dependencies installed', 'green');
  } catch {
    log('❌ Failed to install dependencies', 'red');
    process.exit(1);
  }
  
  // Setup environment file
  log('\nSetting up environment...', 'yellow');
  const envPath = path.join(projectRoot, '.env.local');
  const envExamplePath = path.join(projectRoot, '.env.example');
  
  if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    log('✅ Created .env.local from .env.example', 'green');
    log('⚠️  Please update .env.local with your Supabase credentials', 'yellow');
  } else if (fs.existsSync(envPath)) {
    log('✅ .env.local already exists', 'green');
  } else {
    log('⚠️  No .env.example found, please create .env.local manually', 'yellow');
  }
  
  // Platform-specific setup
  if (platform === 'darwin') {
    log('\n🍎 macOS Development Setup', 'bright');
    
    // Check Xcode
    log('\nChecking Xcode installation...', 'yellow');
    try {
      execSync('xcode-select -p', { stdio: 'ignore' });
      log('✅ Xcode Command Line Tools installed', 'green');
    } catch {
      log('❌ Xcode Command Line Tools not found', 'red');
      log('Installing Xcode Command Line Tools...', 'yellow');
      try {
        execSync('xcode-select --install');
      } catch {
        log('Please install Xcode from the App Store', 'cyan');
      }
    }
    
    // Check CocoaPods
    log('\nChecking CocoaPods...', 'yellow');
    try {
      execSync('which pod', { stdio: 'ignore' });
      log('✅ CocoaPods installed', 'green');
    } catch {
      log('📦 Installing CocoaPods...', 'yellow');
      try {
        execSync('sudo gem install cocoapods');
        log('✅ CocoaPods installed', 'green');
      } catch {
        log('⚠️  Could not install CocoaPods automatically', 'yellow');
        log('Please run: sudo gem install cocoapods', 'cyan');
      }
    }
    
    // Setup iOS
    if (fs.existsSync(path.join(projectRoot, 'ios'))) {
      log('\n📱 Setting up iOS project...', 'yellow');
      try {
        execSync('pod install', { cwd: path.join(projectRoot, 'ios'), stdio: 'inherit' });
        log('✅ iOS pods installed', 'green');
      } catch {
        log('⚠️  Could not install iOS pods', 'yellow');
      }
    }
  }
  
  // Check Android setup
  log('\n🤖 Android Development Setup', 'bright');
  
  const androidHome = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
  if (!androidHome) {
    log('❌ ANDROID_HOME not set', 'red');
    log('Please install Android Studio and set up the Android SDK:', 'yellow');
    log('https://developer.android.com/studio', 'cyan');
  } else {
    log(`✅ Android SDK: ${androidHome}`, 'green');
    
    // Check for required Android components
    log('\nChecking Android components...', 'yellow');
    const requiredComponents = [
      'platform-tools',
      'emulator',
      'platforms;android-34',
      'system-images;android-34;google_apis;x86_64'
    ];
    
    const sdkmanager = path.join(androidHome, 'cmdline-tools', 'latest', 'bin', 'sdkmanager');
    if (fs.existsSync(sdkmanager)) {
      log('Installing required Android components...', 'yellow');
      try {
        execSync(`${sdkmanager} "${requiredComponents.join('" "')}"`, {
          stdio: 'inherit',
          env: { ...process.env, JAVA_HOME: process.env.JAVA_HOME || '/usr/libexec/java_home' }
        });
        log('✅ Android components installed', 'green');
      } catch {
        log('⚠️  Some Android components may need manual installation', 'yellow');
      }
    }
  }
  
  // Install global tools
  log('\n📦 Installing development tools...', 'yellow');
  
  const tools = [
    { name: 'eas-cli', check: 'eas --version', install: 'npm install -g eas-cli' },
    { name: 'react-native-debugger', check: 'which react-native-debugger', install: 'brew install --cask react-native-debugger', platform: 'darwin' }
  ];
  
  for (const tool of tools) {
    if (tool.platform && tool.platform !== platform) continue;
    
    try {
      execSync(tool.check, { stdio: 'ignore' });
      log(`✅ ${tool.name} already installed`, 'green');
    } catch {
      log(`📦 Installing ${tool.name}...`, 'yellow');
      try {
        execSync(tool.install, { stdio: 'inherit' });
        log(`✅ ${tool.name} installed`, 'green');
      } catch {
        log(`⚠️  Could not install ${tool.name} automatically`, 'yellow');
        log(`Please run: ${tool.install}`, 'cyan');
      }
    }
  }
  
  // Create VS Code workspace settings
  log('\n⚙️  Setting up VS Code...', 'yellow');
  const vscodeDir = path.join(projectRoot, '.vscode');
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }
  
  const settings = {
    "react-native-tools.projectRoot": "${workspaceFolder}",
    "react-native-tools.packager.port": 8081,
    "files.watcherExclude": {
      "**/.git/objects/**": true,
      "**/.git/subtree-cache/**": true,
      "**/node_modules/**": true,
      "**/.hg/store/**": true,
      "**/ios/build/**": true,
      "**/ios/Pods/**": true,
      "**/android/.gradle/**": true,
      "**/android/build/**": true,
      "**/android/app/build/**": true
    },
    "search.exclude": {
      "**/node_modules": true,
      "**/ios/build": true,
      "**/ios/Pods": true,
      "**/android/.gradle": true,
      "**/android/build": true,
      "**/android/app/build": true,
      "**/.expo": true,
      "**/dist": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
    "eslint.workingDirectories": [
      { "mode": "auto" }
    ]
  };
  
  const settingsPath = path.join(vscodeDir, 'settings.json');
  if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    log('✅ VS Code settings created', 'green');
  }
  
  // VS Code extensions recommendations
  const extensions = {
    "recommendations": [
      "msjsdiag.vscode-react-native",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "bradlc.vscode-tailwindcss",
      "mikestead.dotenv",
      "orta.vscode-jest",
      "expo.vscode-expo-tools"
    ]
  };
  
  const extensionsPath = path.join(vscodeDir, 'extensions.json');
  if (!fs.existsSync(extensionsPath)) {
    fs.writeFileSync(extensionsPath, JSON.stringify(extensions, null, 2));
    log('✅ VS Code extension recommendations added', 'green');
  }
  
  // Final instructions
  log('\n✨ Setup Complete!', 'bright');
  log('================\n', 'dim');
  
  log('📱 To start iOS development:', 'cyan');
  log('   pnpm mobile:ios\n', 'yellow');
  
  log('🤖 To start Android development:', 'cyan');
  log('   pnpm mobile:android\n', 'yellow');
  
  log('🚀 To open the development menu:', 'cyan');
  log('   pnpm mobile:dev\n', 'yellow');
  
  log('📖 For more commands, see the README or run:', 'cyan');
  log('   pnpm mobile:dev --help\n', 'yellow');
  
  if (!fs.existsSync(envPath) || !androidHome) {
    log('⚠️  Important:', 'bright');
    if (!fs.existsSync(envPath)) {
      log('   - Update .env.local with your Supabase credentials', 'yellow');
    }
    if (!androidHome) {
      log('   - Set up Android Studio and ANDROID_HOME', 'yellow');
    }
  }
}

// Run setup
if (require.main === module) {
  setupDevEnvironment();
}

module.exports = { setupDevEnvironment };