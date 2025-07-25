/* eslint-env jest */
 

import adapter from 'detox/runners/jest/adapter'

// Recommended by Detox docs
beforeAll(async () => {
  await adapter.beforeAll()
  await device.launchApp({ newInstance: true })
})

beforeEach(async () => {
  await adapter.beforeEach()
  await device.reloadReactNative()
})

afterAll(async () => {
  await adapter.afterAll()
})
