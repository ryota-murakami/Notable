// Log levels
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

// Log metadata interface
export interface LogMetadata {
  userId?: string
  sessionId?: string
  requestId?: string
  action?: string
  component?: string
  duration?: number
  error?: Error
  [key: string]: any
}

// Structured log entry
export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: Date
  metadata?: LogMetadata
}

// Helper function to format errors for logging
export function formatError(error: unknown): {
  message: string
  stack?: string
  name?: string
  code?: string
} {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: (error as any).code,
    }
  }

  if (typeof error === 'string') {
    return { message: error }
  }

  return { message: 'Unknown error', stack: JSON.stringify(error) }
}
