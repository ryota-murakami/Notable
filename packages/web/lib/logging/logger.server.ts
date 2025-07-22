import type { Logger } from './index'

// Simple server logger to avoid build issues
const createSimpleServerLogger = (): Logger => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const log = (level: string, message: string, metadata?: any) => {
    const timestamp = new Date().toISOString()
    const logData = {
      timestamp,
      level,
      message,
      service: 'notable-app',
      environment: process.env.NODE_ENV,
      ...metadata,
    }

    // Format log entry
    const logEntry = isDevelopment
      ? `[${timestamp}] [${level.toUpperCase()}] ${message} ${metadata ? JSON.stringify(metadata, null, 2) : ''}`
      : JSON.stringify(logData)

    // Use appropriate console method
    switch (level) {
      case 'error':
        console.error(logEntry)
        break
      case 'warn':
        console.warn(logEntry)
        break
      default:
        console.log(logEntry)
    }
  }

  return {
    error: (message: string, metadata?: any) => {
      if (metadata?.error) {
        metadata = {
          ...metadata,
          error:
            metadata.error instanceof Error
              ? {
                  message: metadata.error.message,
                  stack: metadata.error.stack,
                  name: metadata.error.name,
                }
              : metadata.error,
        }
      }
      log('error', message, metadata)
    },
    warn: (message: string, metadata?: any) => log('warn', message, metadata),
    info: (message: string, metadata?: any) => log('info', message, metadata),
    debug: (message: string, metadata?: any) => {
      if (isDevelopment) {
        log('debug', message, metadata)
      }
    },
    verbose: (message: string, metadata?: any) => {
      if (isDevelopment) {
        log('verbose', message, metadata)
      }
    },
    log: (level: string, message: string, metadata?: any) =>
      log(level, message, metadata),
  }
}

// Use simple logger to avoid edge runtime issues
export const logger: Logger = createSimpleServerLogger()
