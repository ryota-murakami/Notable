import type { LogLevel, LogMetadata, Logger } from './index'

// Console-based logger that works everywhere
const createUniversalLogger = (): Logger => {
  const isDevelopment =
    typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'

  const log = (level: LogLevel, message: string, metadata?: LogMetadata) => {
    const timestamp = new Date().toISOString()

    if (isDevelopment || level === 'error' || level === 'warn') {
      const logMethod =
        level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log'
      if (metadata) {
        console[logMethod](
          // eslint-disable-line no-console
          `[${timestamp}] [${level.toUpperCase()}] ${message}`,
          metadata
        )
      } else {
        console[logMethod](`[${timestamp}] [${level.toUpperCase()}] ${message}`) // eslint-disable-line no-console
      }
    }
  }

  return {
    error: (message: string, metadata?: LogMetadata) =>
      log('error', message, metadata),
    warn: (message: string, metadata?: LogMetadata) =>
      log('warn', message, metadata),
    info: (message: string, metadata?: LogMetadata) =>
      log('info', message, metadata),
    debug: (message: string, metadata?: LogMetadata) =>
      log('debug', message, metadata),
    verbose: (message: string, metadata?: LogMetadata) =>
      log('verbose', message, metadata),
    log: (level: LogLevel, message: string, metadata?: LogMetadata) =>
      log(level, message, metadata),
  }
}

// Export a universal logger instance
export const logger = createUniversalLogger()

// Re-export helper functions
export {
  formatError,
  logPerformance,
  logApiCall,
  logUserAction,
  logSecurityEvent,
} from './index'
