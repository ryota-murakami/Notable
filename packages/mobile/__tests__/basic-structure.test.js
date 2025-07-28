/**
 * Basic structure test for mobile package
 * This ensures the mobile package has correct configuration and can be tested
 * Full React Native component tests will be added once Jest configuration is optimized
 */

const fs = require('fs')
const path = require('path')

describe('Mobile Package Structure', () => {
  test('should have package.json with correct configuration', () => {
    const packageJsonPath = path.join(__dirname, '..', 'package.json')
    expect(fs.existsSync(packageJsonPath)).toBe(true)
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    expect(packageJson.name).toBe('@notable/mobile')
    expect(packageJson.version).toBe('1.0.0')
    expect(packageJson.main).toBe('expo-router/entry')
  })

  test('should have app directory structure', () => {
    const appDir = path.join(__dirname, '..', 'app')
    expect(fs.existsSync(appDir)).toBe(true)
    
    const tabsDir = path.join(appDir, '(tabs)')
    expect(fs.existsSync(tabsDir)).toBe(true)
  })

  test('should have components directory', () => {
    const componentsDir = path.join(__dirname, '..', 'components')
    expect(fs.existsSync(componentsDir)).toBe(true)
  })

  test('should have hooks directory', () => {
    const hooksDir = path.join(__dirname, '..', 'hooks')
    expect(fs.existsSync(hooksDir)).toBe(true)
  })

  test('should have Expo configuration', () => {
    const expoConfigPath = path.join(__dirname, '..', 'app.json')
    expect(fs.existsSync(expoConfigPath)).toBe(true)
    
    const expoConfig = JSON.parse(fs.readFileSync(expoConfigPath, 'utf8'))
    expect(expoConfig.expo).toBeDefined()
    expect(expoConfig.expo.name).toBe('Notable')
  })

  test('should have TypeScript configuration', () => {
    const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json')
    expect(fs.existsSync(tsconfigPath)).toBe(true)
  })
})