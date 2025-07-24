/* eslint-env jest */
/* eslint-disable no-undef */

require('detox/runners/jest/adapter')

beforeAll(async () => {
  await device.launchApp()
})

beforeEach(async () => {
  await device.reloadReactNative()
})
