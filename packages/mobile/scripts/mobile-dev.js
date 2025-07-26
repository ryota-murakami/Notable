#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-console */

const { spawn, exec, execSync } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const execAsync = promisify(exec);

const IOSSimulatorManager = require('./ios-simulator');
const AndroidEmulatorManager = require('./android-emulator');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

class MobileDevManager {
  constructor() {
    this.iosManager = new IOSSimulatorManager();
    this.androidManager = new AndroidEmulatorManager();
    this.projectRoot = path.join(__dirname, '..');
    this.platform = process.platform;
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async checkDependencies() {
    this.log('🔍 Checking development dependencies...', 'yellow');
    
    const checks = {
      'Node.js': { cmd: 'node --version', min: '18.0.0' },
      'pnpm': { cmd: 'pnpm --version', min: '9.0.0' },
      'Expo CLI': { cmd: 'npx expo --version', min: '0.0.0' },
      'EAS CLI': { cmd: 'npx eas --version', min: '0.0.0' }
    };
    
    let allGood = true;
    
    for (const [name, check] of Object.entries(checks)) {
      try {
        const { stdout } = await execAsync(check.cmd);
        const version = stdout.trim();
        this.log(`  ✅ ${name}: ${version}`, 'green');
      } catch (error) {
        this.log(`  ❌ ${name}: Not installed`, 'red');
        allGood = false;
      }
    }
    
    if (!allGood) {
      this.log('\nPlease install missing dependencies:', 'yellow');
      this.log('  npm install -g pnpm', 'cyan');
      this.log('  pnpm install', 'cyan');
      return false;
    }
    
    return true;
  }

  async setupEnvironment() {
    this.log('🔧 Setting up development environment...', 'yellow');
    
    // Check for .env.local
    const envPath = path.join(this.projectRoot, '.env.local');
    if (!fs.existsSync(envPath)) {
      this.log('  ⚠️  No .env.local file found', 'yellow');
      this.log('  Creating from .env.example...', 'cyan');
      
      const examplePath = path.join(this.projectRoot, '.env.example');
      if (fs.existsSync(examplePath)) {
        fs.copyFileSync(examplePath, envPath);
        this.log('  ✅ Created .env.local', 'green');
        this.log('  Please update it with your Supabase credentials', 'yellow');
      }
    } else {
      this.log('  ✅ Environment file exists', 'green');
    }
    
    // Check Metro config
    const metroConfigPath = path.join(this.projectRoot, 'metro.config.js');
    if (fs.existsSync(metroConfigPath)) {
      this.log('  ✅ Metro bundler configured', 'green');
    } else {
      this.log('  ⚠️  Metro config not found', 'yellow');
    }
    
    return true;
  }

  async clearCache() {
    this.log('🧹 Clearing caches...', 'yellow');
    
    const cacheCommands = [
      { name: 'Metro bundler cache', cmd: 'npx expo start --clear' },
      { name: 'Watchman', cmd: 'watchman watch-del-all' },
      { name: 'pnpm cache', cmd: 'pnpm store prune' }
    ];
    
    for (const cache of cacheCommands) {
      try {
        this.log(`  Clearing ${cache.name}...`, 'cyan');
        await execAsync(cache.cmd, { cwd: this.projectRoot });
        this.log(`  ✅ ${cache.name} cleared`, 'green');
      } catch (error) {
        this.log(`  ⚠️  Could not clear ${cache.name}`, 'yellow');
      }
    }
  }

  async startMetroBundler() {
    this.log('🚇 Starting Metro bundler...', 'yellow');
    
    return new Promise((resolve) => {
      const metro = spawn('npx', ['expo', 'start', '--dev-client'], {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      let metroReady = false;
      
      metro.stdout.on('data', (data) => {
        const output = data.toString();
        
        // Only show important messages
        if (output.includes('Metro waiting on') || 
            output.includes('Developer tools') ||
            output.includes('Starting Metro Bundler')) {
          process.stdout.write(`  ${colors.dim}${output.trim()}${colors.reset}\n`);
        }
        
        if (output.includes('Metro waiting on') && !metroReady) {
          metroReady = true;
          this.log('  ✅ Metro bundler ready!', 'green');
          resolve(metro);
        }
      });
      
      metro.stderr.on('data', (data) => {
        const error = data.toString().trim();
        if (error && !error.includes('warning')) {
          this.log(`  ❌ ${error}`, 'red');
        }
      });
      
      metro.on('error', (error) => {
        this.log(`  ❌ Failed to start Metro: ${error.message}`, 'red');
        process.exit(1);
      });
      
      // Timeout after 30 seconds
      setTimeout(() => {
        if (!metroReady) {
          this.log('  ⚠️  Metro bundler is taking longer than expected...', 'yellow');
          resolve(metro);
        }
      }, 30000);
    });
  }

  async startIOSDevelopment() {
    if (this.platform !== 'darwin') {
      this.log('❌ iOS development is only available on macOS', 'red');
      return;
    }
    
    this.log('\n📱 Starting iOS development environment...', 'bright');
    
    // Setup simulator
    await this.iosManager.setupSimulator();
    
    // Start Metro if not running
    const metroProcess = await this.startMetroBundler();
    
    // Wait a bit for Metro to stabilize
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Open in iOS simulator
    this.log('\n🚀 Launching Notable on iOS simulator...', 'yellow');
    const iosProcess = spawn('npx', ['expo', 'run:ios'], {
      cwd: this.projectRoot,
      stdio: 'inherit'
    });
    
    // Handle cleanup
    process.on('SIGINT', () => {
      this.log('\n🛑 Stopping development environment...', 'yellow');
      metroProcess.kill();
      iosProcess.kill();
      process.exit(0);
    });
  }

  async startAndroidDevelopment() {
    this.log('\n🤖 Starting Android development environment...', 'bright');
    
    // Setup emulator
    await this.androidManager.setupEmulator();
    
    // Start Metro if not running
    const metroProcess = await this.startMetroBundler();
    
    // Wait a bit for Metro to stabilize
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Open in Android emulator
    this.log('\n🚀 Launching Notable on Android emulator...', 'yellow');
    const androidProcess = spawn('npx', ['expo', 'run:android'], {
      cwd: this.projectRoot,
      stdio: 'inherit'
    });
    
    // Handle cleanup
    process.on('SIGINT', () => {
      this.log('\n🛑 Stopping development environment...', 'yellow');
      metroProcess.kill();
      androidProcess.kill();
      process.exit(0);
    });
  }

  async showDevMenu() {
    this.log('\n🛠️  Notable Mobile Development Tools', 'bright');
    this.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim');
    
    const menuItems = [
      { key: '1', label: 'Start iOS Development', icon: '📱', available: this.platform === 'darwin' },
      { key: '2', label: 'Start Android Development', icon: '🤖', available: true },
      { key: '3', label: 'Start Both Platforms', icon: '🚀', available: this.platform === 'darwin' },
      { key: '', label: '', icon: '', available: true },
      { key: '4', label: 'Setup iOS Simulator', icon: '📲', available: this.platform === 'darwin' },
      { key: '5', label: 'Setup Android Emulator', icon: '📲', available: true },
      { key: '6', label: 'Reset Simulators/Emulators', icon: '🔄', available: true },
      { key: '', label: '', icon: '', available: true },
      { key: '7', label: 'Clear All Caches', icon: '🧹', available: true },
      { key: '8', label: 'Check Dependencies', icon: '🔍', available: true },
      { key: '9', label: 'Run E2E Tests', icon: '🧪', available: true },
      { key: '', label: '', icon: '', available: true },
      { key: 'q', label: 'Quit', icon: '👋', available: true }
    ];
    
    menuItems.forEach(item => {
      if (!item.label) {
        console.log('');
      } else if (item.available) {
        this.log(`  ${item.icon}  [${item.key}] ${item.label}`, 'cyan');
      } else {
        this.log(`  ${item.icon}  [${item.key}] ${item.label} (unavailable)`, 'dim');
      }
    });
    
    this.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim');
    
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.question(`${colors.yellow}Select an option: ${colors.reset}`, async (answer) => {
        rl.close();
        resolve(answer.toLowerCase());
      });
    });
  }

  async runE2ETests() {
    this.log('\n🧪 Running E2E Tests...', 'bright');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    const platform = await new Promise((resolve) => {
      rl.question(`${colors.yellow}Select platform (ios/android/both): ${colors.reset}`, (answer) => {
        resolve(answer.toLowerCase());
      });
    });
    
    rl.close();
    
    const testCommands = {
      ios: 'pnpm e2e:test:ios',
      android: 'pnpm e2e:test:android',
      both: 'pnpm e2e'
    };
    
    const command = testCommands[platform] || testCommands.both;
    
    this.log(`\nRunning: ${command}`, 'cyan');
    
    const testProcess = spawn('pnpm', command.split(' ').slice(1), {
      cwd: this.projectRoot,
      stdio: 'inherit'
    });
    
    testProcess.on('close', (code) => {
      if (code === 0) {
        this.log('\n✅ Tests completed successfully!', 'green');
      } else {
        this.log('\n❌ Tests failed!', 'red');
      }
      this.run(); // Return to menu
    });
  }

  async run() {
    const command = process.argv[2];
    
    // Handle direct commands
    if (command) {
      switch (command) {
        case 'ios':
          await this.checkDependencies();
          await this.setupEnvironment();
          await this.startIOSDevelopment();
          return;
          
        case 'android':
          await this.checkDependencies();
          await this.setupEnvironment();
          await this.startAndroidDevelopment();
          return;
          
        case 'reset':
          if (this.platform === 'darwin') {
            await this.iosManager.resetSimulator();
          }
          await this.androidManager.resetEmulator();
          return;
          
        case 'clean':
          await this.clearCache();
          return;
          
        case 'debug':
          this.log('Opening React Native Debugger...', 'yellow');
          exec('open "rndebugger://set-debugger-loc?host=localhost&port=8081"');
          await this.run(); // Show menu after
          return;
          
        default:
          this.log(`Unknown command: ${command}`, 'red');
          this.log('Usage: pnpm mobile:dev [ios|android|reset|clean|debug]', 'yellow');
          return;
      }
    }
    
    // Show interactive menu
    console.clear();
    const choice = await this.showDevMenu();
    
    try {
      switch (choice) {
        case '1':
          if (this.platform === 'darwin') {
            await this.checkDependencies();
            await this.setupEnvironment();
            await this.startIOSDevelopment();
          }
          break;
          
        case '2':
          await this.checkDependencies();
          await this.setupEnvironment();
          await this.startAndroidDevelopment();
          break;
          
        case '3':
          if (this.platform === 'darwin') {
            await this.checkDependencies();
            await this.setupEnvironment();
            // Start both platforms
            this.log('\n🚀 Starting both iOS and Android...', 'bright');
            await this.iosManager.setupSimulator();
            await this.androidManager.setupEmulator();
            const metroProcess = await this.startMetroBundler();
            
            // Handle cleanup
            process.on('SIGINT', () => {
              this.log('\n🛑 Stopping development environment...', 'yellow');
              metroProcess.kill();
              process.exit(0);
            });
          }
          break;
          
        case '4':
          if (this.platform === 'darwin') {
            await this.iosManager.setupSimulator();
            await this.run(); // Return to menu
          }
          break;
          
        case '5':
          await this.androidManager.setupEmulator();
          await this.run(); // Return to menu
          break;
          
        case '6':
          this.log('\n🔄 Resetting simulators/emulators...', 'yellow');
          if (this.platform === 'darwin') {
            const bootedSim = await this.iosManager.findBootedSimulator();
            if (bootedSim) {
              await this.iosManager.resetSimulator(bootedSim.udid);
            }
          }
          await this.androidManager.resetEmulator();
          await this.run(); // Return to menu
          break;
          
        case '7':
          await this.clearCache();
          await this.run(); // Return to menu
          break;
          
        case '8':
          await this.checkDependencies();
          await this.setupEnvironment();
          this.log('\nPress any key to continue...', 'dim');
          await new Promise(resolve => {
            process.stdin.once('data', resolve);
          });
          await this.run(); // Return to menu
          break;
          
        case '9':
          await this.runE2ETests();
          break;
          
        case 'q':
          this.log('\n👋 Goodbye!', 'green');
          process.exit(0);
          break;
          
        default:
          this.log('\n❌ Invalid option', 'red');
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.run(); // Return to menu
      }
    } catch (error) {
      this.log(`\n❌ Error: ${error.message}`, 'red');
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.run(); // Return to menu
    }
  }
}

// Make scripts executable
if (process.platform !== 'win32') {
  ['ios-simulator.js', 'android-emulator.js', 'mobile-dev.js'].forEach(script => {
    const scriptPath = path.join(__dirname, script);
    try {
      fs.chmodSync(scriptPath, '755');
    } catch {
      // Ignore permission errors
    }
  });
}

// Run the manager
if (require.main === module) {
  const manager = new MobileDevManager();
  manager.run().catch(error => {
    manager.log(`\n❌ Fatal error: ${error.message}`, 'red');
    process.exit(1);
  });
}

module.exports = MobileDevManager;