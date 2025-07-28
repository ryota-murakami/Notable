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
  customName?: string
): DeviceInfo {
  const id = generateDeviceId()
  const timestamp = new Date().toISOString()
  
  let name: string
  let userAgent: string | undefined

  switch (type) {
    case 'web':
      name = customName || getBrowserName()
      userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined
      break
      
    case 'electron':
      name = customName || getElectronDeviceName()
      userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Electron'
      break
      
    case 'mobile':
      name = customName || getMobileDeviceName()
      userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'React Native'
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

