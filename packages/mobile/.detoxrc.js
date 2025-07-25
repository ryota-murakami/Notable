/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 240000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      name: 'Notable',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Notable.app',
      build:
        'npx expo prebuild --platform ios --clean && npx expo run:ios --configuration Debug --device simulator --no-install --no-bundler',
    },
    'android.debug': {
      type: 'android.apk',
      name: 'Notable',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'npx expo run:android --variant debug --no-install --no-bundler',
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
        avdName: 'test_avd',
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
