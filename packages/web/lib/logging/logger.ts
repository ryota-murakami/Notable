import { LogLevel, type LogMetadata, type Logger } from './index'

// Console-based logger that works everywhere
const createUniversalLogger = (): Logger => {
  const isDevelopment =
    typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'

  const log = (level: LogLevel, message: string, metadata?: LogMetadata) => {
    const timestamp = new Date().toISOString()

    if (isDevelopment || level === LogLevel.ERROR || level === LogLevel.WARN) {
      const logMethod =
        level === LogLevel.ERROR
          ? 'error'
          : level === LogLevel.WARN
            ? 'warn'
            : 'log'
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
      log(LogLevel.ERROR, message, metadata),
    warn: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.WARN, message, metadata),
    info: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.INFO, message, metadata),
    debug: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.DEBUG, message, metadata),
    verbose: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.VERBOSE, message, metadata),
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
