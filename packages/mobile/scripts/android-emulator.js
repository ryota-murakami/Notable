#!/usr/bin/env node
/* eslint-env node */

const { exec, execSync } = require('child_process')
const { promisify } = require('util')
const path = require('path')
const os = require('os')
const execAsync = promisify(exec)

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

class AndroidEmulatorManager {
  constructor() {
    this.emulatorName = 'Notable_Pixel_7_API_34'
    this.avdPackage = 'system-images;android-34;google_apis;x86_64'
    this.deviceType = 'pixel_7'
    this.androidHome = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`)
  }

  async checkRequirements() {
    const issues = []

    // Check ANDROID_HOME
    if (!this.androidHome) {
      issues.push(
        'ANDROID_HOME or ANDROID_SDK_ROOT environment variable is not set'
      )
    }

    // Check if Android SDK tools exist
    try {
      execSync('which adb', { stdio: 'ignore' })
    } catch {
      issues.push('ADB (Android Debug Bridge) is not in PATH')
    }

    // Check emulator
    try {
      const emulatorPath = path.join(this.androidHome, 'emulator', 'emulator')
      execSync(`ls ${emulatorPath}`, { stdio: 'ignore' })
    } catch {
      issues.push('Android Emulator is not installed')
    }

    if (issues.length > 0) {
      this.log('❌ Android development environment issues:', 'red')
      issues.forEach((issue) => this.log(`  • ${issue}`, 'yellow'))
      this.log(
        '\nPlease install Android Studio and set up the Android SDK:',
        'yellow'
      )
      this.log('  https://developer.android.com/studio', 'cyan')
      return false
    }

    return true
  }

  async getAvailableAVDs() {
    try {
      const emulatorPath = path.join(this.androidHome, 'emulator', 'emulator')
      const { stdout } = await execAsync(`${emulatorPath} -list-avds`)
      return stdout
        .trim()
        .split('\n')
        .filter((avd) => avd.length > 0)
    } catch (error) {
      this.log(`Error listing AVDs: ${error.message}`, 'red')
      return []
    }
  }

  async getRunningEmulators() {
    try {
      const { stdout } = await execAsync('adb devices')
      const lines = stdout.trim().split('\n').slice(1) // Skip header
      const emulators = []

      for (const line of lines) {
        if (line.includes('emulator-') && line.includes('device')) {
          const [device] = line.split('\t')
          emulators.push(device)
        }
      }

      return emulators
    } catch {
      return []
    }
  }

  async createAVD() {
    try {
      this.log('📱 Creating Android Virtual Device...', 'yellow')

      const sdkmanager = path.join(
        this.androidHome,
        'cmdline-tools',
        'latest',
        'bin',
        'sdkmanager'
      )
      const avdmanager = path.join(
        this.androidHome,
        'cmdline-tools',
        'latest',
        'bin',
        'avdmanager'
      )

      // Install system image
      this.log('Downloading system image (this may take a while)...', 'cyan')
      await execAsync(`${sdkmanager} "${this.avdPackage}"`, {
        env: {
          ...process.env,
          JAVA_HOME: process.env.JAVA_HOME || '/usr/libexec/java_home',
        },
      })

      // Delete existing AVD if it exists
      await execAsync(`${avdmanager} delete avd -n ${this.emulatorName}`).catch(
        () => {}
      )

      // Create AVD
      this.log('Creating AVD...', 'yellow')
      await execAsync(
        `echo "no" | ${avdmanager} create avd -n ${this.emulatorName} -k "${this.avdPackage}" -d ${this.deviceType}`,
        { shell: true }
      )

      // Configure AVD for better performance
      const avdConfigPath = path.join(
        os.homedir(),
        '.android',
        'avd',
        `${this.emulatorName}.avd`,
        'config.ini'
      )

      const configUpdates = [
        'hw.keyboard=yes',
        'hw.gpu.enabled=yes',
        'hw.gpu.mode=host',
        'hw.ramSize=4096',
        'vm.heapSize=512',
        'hw.lcd.density=420',
        'hw.lcd.height=2400',
        'hw.lcd.width=1080',
      ]

      for (const config of configUpdates) {
        try {
          await execAsync(`echo "${config}" >> "${avdConfigPath}"`)
        } catch {
          // Ignore config update errors
        }
      }

      this.log('✅ AVD created successfully!', 'green')
      return true
    } catch (error) {
      this.log(`Error creating AVD: ${error.message}`, 'red')
      return false
    }
  }

  async startEmulator(avdName) {
    try {
      const emulatorPath = path.join(this.androidHome, 'emulator', 'emulator')

      this.log('🚀 Starting Android emulator...', 'yellow')
      this.log('This may take a few minutes on first boot...', 'cyan')

      // Start emulator in background
      exec(
        `${emulatorPath} -avd ${avdName} -no-snapshot-load -no-audio -no-boot-anim`,
        (error) => {
          if (error && !error.message.includes('closed')) {
            this.log(`Emulator error: ${error.message}`, 'red')
          }
        }
      )

      // Wait for emulator to boot
      this.log('Waiting for emulator to boot...', 'yellow')

      let attempts = 0
      const maxAttempts = 60 // 5 minutes max

      while (attempts < maxAttempts) {
        try {
          const { stdout } = await execAsync(
            'adb shell getprop sys.boot_completed'
          )
          if (stdout.trim() === '1') {
            this.log('✅ Emulator booted successfully!', 'green')

            // Unlock screen
            await execAsync('adb shell input keyevent 82')

            // Dismiss any system dialogs
            await execAsync('adb shell input keyevent KEYCODE_BACK')

            return true
          }
        } catch {
          // Device not ready yet
        }

        await new Promise((resolve) => setTimeout(resolve, 5000))
        attempts++

        if (attempts % 6 === 0) {
          this.log(`Still waiting... (${attempts * 5}s elapsed)`, 'cyan')
        }
      }

      throw new Error('Emulator failed to boot within 5 minutes')
    } catch (error) {
      this.log(`Error starting emulator: ${error.message}`, 'red')
      throw error
    }
  }

  async installExpoGo() {
    try {
      this.log('📦 Checking Expo Go installation...', 'yellow')

      // Check if Expo Go is installed
      const { stdout } = await execAsync(
        'adb shell pm list packages | grep host.exp.exponent || true'
      )

      if (stdout.includes('host.exp.exponent')) {
        this.log('✅ Expo Go is already installed', 'green')
        return
      }

      this.log('Installing Expo Go on emulator...', 'yellow')
      this.log('This may take a few minutes...', 'cyan')

      // Download and install Expo Go APK
      const expoGoUrl =
        'https://d1ahtucjixef4r.cloudfront.net/Exponent-2.32.11.apk'
      const tempApk = path.join(os.tmpdir(), 'expo-go.apk')

      await execAsync(`curl -L -o ${tempApk} ${expoGoUrl}`)
      await execAsync(`adb install ${tempApk}`)
      await execAsync(`rm ${tempApk}`)

      this.log('✅ Expo Go installed successfully!', 'green')
    } catch (error) {
      this.log(`Warning: Could not install Expo Go: ${error.message}`, 'yellow')
      this.log(
        'You can install it manually from the Play Store in the emulator.',
        'cyan'
      )
    }
  }

  async setupEmulator() {
    this.log(
      '🚀 Setting up Android Emulator for Notable development...',
      'bright'
    )

    // Check requirements
    if (!(await this.checkRequirements())) {
      process.exit(1)
    }

    // Check if emulator is already running
    const runningEmulators = await this.getRunningEmulators()
    if (runningEmulators.length > 0) {
      this.log(
        `✅ Using already running emulator: ${runningEmulators[0]}`,
        'green'
      )
      return
    }

    // Check for existing AVD
    const avds = await this.getAvailableAVDs()
    let targetAVD = avds.find((avd) => avd === this.emulatorName)

    if (!targetAVD && avds.length > 0) {
      // Use any existing AVD
      targetAVD = avds[0]
      this.log(`📱 Using existing AVD: ${targetAVD}`, 'blue')
    } else if (!targetAVD) {
      // Create new AVD
      const created = await this.createAVD()
      if (!created) {
        process.exit(1)
      }
      targetAVD = this.emulatorName
    }

    // Start emulator
    await this.startEmulator(targetAVD)

    // Install Expo Go
    await this.installExpoGo()
  }

  async resetEmulator() {
    try {
      this.log('🔄 Resetting Android emulator...', 'yellow')

      // Get running emulator
      const emulators = await this.getRunningEmulators()
      if (emulators.length === 0) {
        this.log('No running emulator found', 'yellow')
        return
      }

      // Clear app data
      this.log('Clearing app data...', 'yellow')
      await execAsync('adb shell pm clear host.exp.exponent').catch(() => {})

      // Wipe emulator data
      const avds = await this.getAvailableAVDs()
      if (avds.includes(this.emulatorName)) {
        this.log('Wiping emulator data...', 'yellow')
        await execAsync(`adb emu kill`).catch(() => {})

        // Wait for emulator to shut down
        await new Promise((resolve) => setTimeout(resolve, 5000))

        // Cold boot the emulator
        const emulatorPath = path.join(this.androidHome, 'emulator', 'emulator')
        await execAsync(
          `${emulatorPath} -avd ${this.emulatorName} -no-snapshot-save -no-snapshot-load -wipe-data`
        )
      }

      this.log('✅ Emulator reset complete!', 'green')
    } catch (error) {
      this.log(`Error resetting emulator: ${error.message}`, 'red')
      throw error
    }
  }
}

// CLI handling
async function main() {
  const manager = new AndroidEmulatorManager()
  const command = process.argv[2]

  try {
    switch (command) {
      case 'setup':
        await manager.setupEmulator()
        break

      case 'reset':
        await manager.resetEmulator()
        break

      case 'list': {
        const avds = await manager.getAvailableAVDs()
        const running = await manager.getRunningEmulators()

        manager.log('\n📱 Available Android AVDs:', 'bright')
        if (avds.length === 0) {
          manager.log('  No AVDs found', 'yellow')
        } else {
          avds.forEach((avd) => {
            const isRunning = running.some((r) => r.includes(avd))
            const status = isRunning ? '🟢' : '⚪'
            manager.log(`  ${status} ${avd}`, isRunning ? 'green' : 'reset')
          })
        }

        if (running.length > 0) {
          manager.log('\n🟢 Running emulators:', 'bright')
          running.forEach((emulator) => {
            manager.log(`  ${emulator}`, 'green')
          })
        }
        break
      }

      case 'install-expo': {
        const emulators = await manager.getRunningEmulators()
        if (emulators.length > 0) {
          await manager.installExpoGo()
        } else {
          manager.log('Please start an emulator first', 'yellow')
        }
        break
      }

      default:
        manager.log('Usage: node android-emulator.js [command]', 'yellow')
        manager.log('Commands:', 'bright')
        manager.log('  setup         - Create and start Android emulator')
        manager.log('  reset         - Reset emulator to clean state')
        manager.log(
          '  list          - List available AVDs and running emulators'
        )
        manager.log('  install-expo  - Install Expo Go on running emulator')
    }
  } catch (error) {
    manager.log(`\n❌ Error: ${error.message}`, 'red')
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = AndroidEmulatorManager
