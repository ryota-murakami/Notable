// Utility functions for Notable sync

import { v4 as uuidv4 } from 'uuid'
import type { DeviceInfo } from './types'

/**
 * Generate a unique device ID
 */
export function generateDeviceId(): string {
  return `device_${uuidv4()}`
}

/**
 * Generate device information based on the platform
 */
export function generateDeviceInfo(
  type: 'web' | 'electron' | 'mobile',
  customName?: string,
): DeviceInfo {
  const id = generateDeviceId()
  const timestamp = new Date().toISOString()

  let name: string
  let userAgent: string | undefined

  switch (type) {
    case 'web':
      name = customName || getBrowserName()
      userAgent =
        typeof navigator !== 'undefined' ? navigator.userAgent : undefined
      break

    case 'electron':
      name = customName || getElectronDeviceName()
      userAgent =
        typeof navigator !== 'undefined' ? navigator.userAgent : 'Electron'
      break

    case 'mobile':
      name = customName || getMobileDeviceName()
      userAgent =
        typeof navigator !== 'undefined' ? navigator.userAgent : 'React Native'
      break

    default:
      name = customName || 'Unknown Device'
  }

  return {
    id,
    name,
    type,
    user_agent: userAgent,
    last_seen: timestamp,
    is_online: true,
  }
}

/**
 * Get browser name from user agent
 */
function getBrowserName(): string {
  if (typeof navigator === 'undefined') {
    return 'Web Browser'
  }

  const userAgent = navigator.userAgent

  if (userAgent.includes('Chrome')) {
    return 'Chrome'
  } else if (userAgent.includes('Firefox')) {
    return 'Firefox'
  } else if (userAgent.includes('Safari')) {
    return 'Safari'
  } else if (userAgent.includes('Edge')) {
    return 'Edge'
  } else {
    return 'Web Browser'
  }
}

/**
 * Get Electron device name
 */
function getElectronDeviceName(): string {
  // In Electron, we could access process information
  if (typeof process !== 'undefined' && process.platform) {
    const platform = process.platform
    switch (platform) {
      case 'darwin':
        return 'Mac Desktop'
      case 'win32':
        return 'Windows Desktop'
      case 'linux':
        return 'Linux Desktop'
      default:
        return 'Desktop'
    }
  }

  return 'Desktop'
}

/**
 * Get mobile device name
 */
function getMobileDeviceName(): string {
  if (typeof navigator === 'undefined') {
    return 'Mobile Device'
  }

  const userAgent = navigator.userAgent

  if (userAgent.includes('iPhone')) {
    return 'iPhone'
  } else if (userAgent.includes('iPad')) {
    return 'iPad'
  } else if (userAgent.includes('Android')) {
    return 'Android Device'
  } else {
    return 'Mobile Device'
  }
}

/**
 * Check if the current environment is a browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * Check if the current environment is Electron
 */
export function isElectron(): boolean {
  return (
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.electron != null
  )
}

/**
 * Check if the current environment is React Native
 */
export function isReactNative(): boolean {
  return typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
}

/**
 * Detect the current platform automatically
 */
export function detectPlatform(): 'web' | 'electron' | 'mobile' | 'unknown' {
  if (isElectron()) {
    return 'electron'
  } else if (isReactNative()) {
    return 'mobile'
  } else if (isBrowser()) {
    return 'web'
  } else {
    return 'unknown'
  }
}

/**
 * Sleep for a specified number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Debounce function to limit rapid consecutive calls
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * Throttle function to limit function calls to once per specified time period
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Retry a function with exponential backoff
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 1000,
): Promise<T> {
  let lastError: Error

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error

      if (attempt === maxAttempts) {
        break
      }

      // Exponential backoff with jitter
      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000
      await sleep(delay)
    }
  }

  if (lastError) {
    throw lastError
  }
  throw new Error('Retry failed with unknown error')
}

/**
 * Create a promise that resolves after a timeout
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutMessage: string = 'Operation timed out',
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs)
  })

  return Promise.race([promise, timeoutPromise])
}

/**
 * Check if a string is a valid UUID
 */
export function isValidUUID(str: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidRegex.test(str)
}

/**
 * Sanitize text content for safe storage
 */
export function sanitizeText(text: string): string {
  return (
    text
      // eslint-disable-next-line no-control-regex
      .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Remove control characters
      .trim()
  )
}

/**
 * Calculate the size of an object in bytes (approximate)
 */
export function getObjectSize(obj: unknown): number {
  return new Blob([JSON.stringify(obj)]).size
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Check if two objects are deeply equal
 */
export function deepEqual(obj1: unknown, obj2: unknown): boolean {
  if (obj1 === obj2) {
    return true
  }

  if (obj1 == null || obj2 == null) {
    return false
  }

  if (typeof obj1 !== typeof obj2) {
    return false
  }

  if (typeof obj1 !== 'object') {
    return obj1 === obj2
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}
