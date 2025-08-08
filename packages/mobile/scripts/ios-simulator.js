#!/usr/bin/env node
/* eslint-env node */

const { exec, execSync } = require('child_process')
const { promisify } = require('util')
const path = require('path')
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

class IOSSimulatorManager {
  constructor() {
    this.preferredDevice = 'iPhone 15'
    this.fallbackDevice = 'iPhone 14'
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`)
  }

  checkRequirements() {
    try {
      execSync('which xcrun', { stdio: 'ignore' })
      return true
    } catch {
      this.log('❌ Xcode command line tools are not installed.', 'red')
      this.log('Please install Xcode from the App Store and run:', 'yellow')
      this.log('  xcode-select --install', 'cyan')
      return false
    }
  }

  async getAvailableSimulators() {
    try {
      const { stdout } = await execAsync(
        'xcrun simctl list devices available -j'
      )
      const data = JSON.parse(stdout)
      const devices = []

      Object.entries(data.devices).forEach(([runtime, deviceList]) => {
        if (runtime.includes('iOS')) {
          deviceList.forEach((device) => {
            if (device.isAvailable) {
              devices.push({
                name: device.name,
                udid: device.udid,
                state: device.state,
                runtime: runtime.split('.').pop(),
              })
            }
          })
        }
      })

      return devices
    } catch (error) {
      this.log(`Error listing simulators: ${error.message}`, 'red')
      return []
    }
  }

  async findBootedSimulator() {
    const devices = await this.getAvailableSimulators()
    return devices.find((device) => device.state === 'Booted')
  }

  async findPreferredSimulator() {
    const devices = await this.getAvailableSimulators()

    // Try to find preferred device
    let simulator = devices.find(
      (device) =>
        device.name === this.preferredDevice && device.state !== 'Booted'
    )

    // Fallback to secondary device
    if (!simulator) {
      simulator = devices.find(
        (device) =>
          device.name === this.fallbackDevice && device.state !== 'Booted'
      )
    }

    // Use any available iPhone
    if (!simulator) {
      simulator = devices.find(
        (device) => device.name.includes('iPhone') && device.state !== 'Booted'
      )
    }

    return simulator
  }

  async bootSimulator(udid) {
    try {
      this.log(`Booting simulator...`, 'yellow')
      await execAsync(`xcrun simctl boot ${udid}`)

      // Wait for boot to complete
      let attempts = 0
      while (attempts < 30) {
        const { stdout } = await execAsync(
          `xcrun simctl list devices | grep "${udid}"`
        )
        if (stdout.includes('Booted')) {
          this.log('✅ Simulator booted successfully!', 'green')
          return true
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))
        attempts++
      }

      throw new Error('Simulator failed to boot within 30 seconds')
    } catch (error) {
      if (
        error.message.includes('Unable to boot device in current state: Booted')
      ) {
        this.log('Simulator is already booted', 'yellow')
        return true
      }
      throw error
    }
  }

  async openSimulator(udid) {
    try {
      this.log('Opening Simulator app...', 'yellow')
      await execAsync('open -a Simulator')

      // Focus on the specific device
      await execAsync(`xcrun simctl ui ${udid} appearance light`)

      this.log('✅ Simulator app opened!', 'green')
    } catch (error) {
      this.log(
        `Warning: Could not open Simulator app: ${error.message}`,
        'yellow'
      )
    }
  }

  async setupSimulator() {
    this.log('🚀 Setting up iOS Simulator for Notable development...', 'bright')

    // Check requirements
    if (!(await this.checkRequirements())) {
      process.exit(1)
    }

    // Check if a simulator is already booted
    const bootedSim = await this.findBootedSimulator()
    if (bootedSim) {
      this.log(`✅ Using already booted simulator: ${bootedSim.name}`, 'green')
      await this.openSimulator(bootedSim.udid)
      return bootedSim.udid
    }

    // Find and boot a simulator
    const simulator = await this.findPreferredSimulator()
    if (!simulator) {
      this.log('❌ No available iOS simulators found!', 'red')
      this.log('Please open Xcode and download a simulator runtime.', 'yellow')
      process.exit(1)
    }

    this.log(`📱 Selected simulator: ${simulator.name}`, 'blue')

    // Boot the simulator
    await this.bootSimulator(simulator.udid)
    await this.openSimulator(simulator.udid)

    return simulator.udid
  }

  async installExpoGo(udid) {
    try {
      this.log('📦 Checking Expo Go installation...', 'yellow')

      // Check if Expo Go is installed
      const { stdout } = await execAsync(
        `xcrun simctl listapps ${udid} | grep -i expo || true`
      )

      if (stdout.includes('host.exp.Exponent')) {
        this.log('✅ Expo Go is already installed', 'green')
        return
      }

      this.log('Installing Expo Go on simulator...', 'yellow')
      this.log('This may take a few minutes on first run...', 'cyan')

      // Let Expo CLI handle the installation
      await execAsync('npx expo install:ios', {
        cwd: path.join(__dirname, '..'),
      })

      this.log('✅ Expo Go installed successfully!', 'green')
    } catch (error) {
      this.log(
        `Warning: Could not verify Expo Go installation: ${error.message}`,
        'yellow'
      )
      this.log('Expo CLI will handle installation if needed.', 'cyan')
    }
  }

  async resetSimulator(udid) {
    try {
      this.log('🔄 Resetting simulator...', 'yellow')

      // Shutdown if running
      await execAsync(`xcrun simctl shutdown ${udid}`).catch(() => {})

      // Erase the simulator
      await execAsync(`xcrun simctl erase ${udid}`)

      this.log('✅ Simulator reset complete!', 'green')
    } catch (error) {
      this.log(`Error resetting simulator: ${error.message}`, 'red')
      throw error
    }
  }
}

// CLI handling
async function main() {
  const manager = new IOSSimulatorManager()
  const command = process.argv[2]

  try {
    switch (command) {
      case 'setup':
        await manager.setupSimulator()
        break

      case 'reset': {
        const bootedSim = await manager.findBootedSimulator()
        if (bootedSim) {
          await manager.resetSimulator(bootedSim.udid)
        } else {
          manager.log('No booted simulator found to reset', 'yellow')
        }
        break
      }

      case 'list': {
        const devices = await manager.getAvailableSimulators()
        manager.log('\n📱 Available iOS Simulators:', 'bright')
        devices.forEach((device) => {
          const status = device.state === 'Booted' ? '🟢' : '⚪'
          manager.log(
            `  ${status} ${device.name} (${device.runtime})`,
            device.state === 'Booted' ? 'green' : 'reset'
          )
        })
        break
      }

      case 'install-expo': {
        const sim = await manager.findBootedSimulator()
        if (sim) {
          await manager.installExpoGo(sim.udid)
        } else {
          manager.log('Please boot a simulator first', 'yellow')
        }
        break
      }

      default:
        manager.log('Usage: node ios-simulator.js [command]', 'yellow')
        manager.log('Commands:', 'bright')
        manager.log('  setup         - Boot and configure iOS simulator')
        manager.log('  reset         - Reset simulator to clean state')
        manager.log('  list          - List available simulators')
        manager.log('  install-expo  - Install Expo Go on booted simulator')
    }
  } catch (error) {
    manager.log(`\n❌ Error: ${error.message}`, 'red')
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = IOSSimulatorManager
