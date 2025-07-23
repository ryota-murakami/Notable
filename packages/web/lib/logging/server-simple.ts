import { LogLevel, type LogMetadata, type Logger } from './index'

// Simple server logger that works in edge runtime
export function createSimpleServerLogger(): Logger {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const log = (level: LogLevel, message: string, metadata?: LogMetadata) => {
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
      case LogLevel.ERROR:
        console.error(logEntry)
        break
      case LogLevel.WARN:
        console.warn(logEntry)
        break
      default:
        console.log(logEntry) // eslint-disable-line no-console
    }
  }

  return {
    error: (message: string, metadata?: LogMetadata) => {
      const processedMetadata = metadata?.error
        ? {
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
        : metadata
      log(LogLevel.ERROR, message, processedMetadata)
    },
    warn: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.WARN, message, metadata),
    info: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.INFO, message, metadata),
    debug: (message: string, metadata?: LogMetadata) => {
      if (isDevelopment) {
        log(LogLevel.DEBUG, message, metadata)
      }
    },
    verbose: (message: string, metadata?: LogMetadata) => {
      if (isDevelopment) {
        log(LogLevel.VERBOSE, message, metadata)
      }
    },
    log: (level: LogLevel, message: string, metadata?: LogMetadata) =>
      log(level, message, metadata),
  }
}
