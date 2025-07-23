import type { LogLevel, LogMetadata } from './index'

interface LogBuffer {
  entries: Array<{
    level: LogLevel
    message: string
    metadata?: LogMetadata
    timestamp: Date
  }>
  timer: ReturnType<typeof setTimeout> | null
}

export function createClientLogger() {
  const isDevelopment = process.env.NODE_ENV === 'development'

  // Buffer for batching logs
  const buffer: LogBuffer = {
    entries: [],
    timer: null,
  }

  // Send buffered logs to server
  async function flushLogs() {
    if (buffer.entries.length === 0) return

    const entries = [...buffer.entries]
    buffer.entries = []

    try {
      await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ logs: entries }),
      })
    } catch (error) {
      // If logging fails, at least log to console
      console.error('Failed to send logs:', error)

      // Re-add entries to buffer for retry
      buffer.entries.unshift(...entries)
    }
  }

  // Schedule log flush
  function scheduleFlush() {
    if (buffer.timer) {
      clearTimeout(buffer.timer)
    }

    buffer.timer = setTimeout(() => {
      flushLogs()
      buffer.timer = null
    }, 5000) // Flush every 5 seconds
  }

  // Core log function
  function log(level: LogLevel, message: string, metadata?: LogMetadata) {
    const entry = {
      level,
      message,
      metadata: {
        ...metadata,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date(),
    }

    // Always log to console in development
    if (isDevelopment) {
      const style = {
        [LogLevel.ERROR]: 'color: red; font-weight: bold',
        [LogLevel.WARN]: 'color: orange; font-weight: bold',
        [LogLevel.INFO]: 'color: blue',
        [LogLevel.DEBUG]: 'color: gray',
        [LogLevel.VERBOSE]: 'color: lightgray',
      }

      console.log(
        `%c[${level.toUpperCase()}] ${message}`,
        style[level] || '',
        metadata || ''
      )
    }

    // In production, critical errors could be sent to error tracking service
    // For now, just ensure they're logged

    // Add to buffer for server logging (skip in development)
    if (
      !isDevelopment &&
      (level === LogLevel.ERROR ||
        level === LogLevel.WARN ||
        level === LogLevel.INFO)
    ) {
      buffer.entries.push(entry)
      scheduleFlush()

      // Immediate flush for errors
      if (level === LogLevel.ERROR) {
        flushLogs()
      }
    }
  }

  // Flush logs on page unload
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      flushLogs()
    })

    // Also flush on visibility change (mobile background)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        flushLogs()
      }
    })
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
    debug: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.DEBUG, message, metadata),
    verbose: (message: string, metadata?: LogMetadata) =>
      log(LogLevel.VERBOSE, message, metadata),
    log: (level: LogLevel, message: string, metadata?: LogMetadata) =>
      log(level, message, metadata),

    // Manual flush for critical operations
    flush: flushLogs,
  }
}

// Console override for catching unhandled errors
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const originalConsoleError = console.error
  console.error = (...args: any[]) => {
    originalConsoleError.apply(console, args)

    // Send to logging system
    const logger = createClientLogger()
    logger.error('Console error', {
      error: args[0] instanceof Error ? args[0] : new Error(args.join(' ')),
      args,
    })
  }
}
