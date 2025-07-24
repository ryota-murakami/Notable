import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
// Conditionally import Sentry to avoid build issues
let Sentry: any = null
if (typeof window === 'undefined' && process.env.VERCEL) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Sentry = require('@sentry/nextjs')
}
import { formatError, type LogLevel, type LogMetadata } from './index'
import { Transform } from 'stream'

// Custom Sentry transport using winston's Transform base class
class SentryTransport extends Transform {
  constructor(options?: Record<string, unknown>) {
    super(options)
  }

  override _write(
    chunk: Buffer | string,
    _encoding: string,
    callback: (error?: Error | null) => void
  ) {
    try {
      const info = JSON.parse(chunk.toString())
      const { level, message, ...metadata } = info

      // Only send errors and warnings to Sentry if available
      if (Sentry && level === 'error') {
        if (metadata.error instanceof Error) {
          Sentry.captureException(metadata.error, {
            extra: metadata,
          })
        } else {
          Sentry.captureMessage(message, 'error')
        }
      } else if (Sentry && level === 'warn') {
        Sentry.captureMessage(message, 'warning')
      }

      callback()
    } catch (error) {
      callback(error as Error)
    }
  }
}

export function createServerLogger() {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const logDir = process.env.LOG_DIR || './logs'

  // Console format for development
  const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, ...metadata }) => {
      let msg = `${timestamp} [${level}]: ${message}`
      if (Object.keys(metadata).length > 0) {
        msg += ` ${JSON.stringify(metadata, null, 2)}`
      }
      return msg
    })
  )

  // JSON format for production
  const jsonFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  )

  // Create transports array
  const transports: winston.transport[] = []

  // Console transport
  transports.push(
    new winston.transports.Console({
      format: isDevelopment ? consoleFormat : jsonFormat,
      level: isDevelopment ? 'debug' : 'info',
    })
  )

  // File transports for production
  if (!isDevelopment) {
    // Error log file
    transports.push(
      new DailyRotateFile({
        filename: `${logDir}/error-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        level: 'error',
        maxSize: '20m',
        maxFiles: '14d',
        format: jsonFormat,
      })
    )

    // Combined log file
    transports.push(
      new DailyRotateFile({
        filename: `${logDir}/combined-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        maxFiles: '7d',
        format: jsonFormat,
      })
    )

    // Sentry transport - only add if Sentry is available
    if (Sentry) {
      transports.push(new SentryTransport())
    }
  }

  // Create logger instance
  const logger = winston.createLogger({
    level: isDevelopment ? 'debug' : 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.metadata({
        fillExcept: ['message', 'level', 'timestamp'],
      })
    ),
    defaultMeta: {
      service: 'notable-app',
      environment: process.env.NODE_ENV,
    },
    transports,
    exitOnError: false,
  })

  // Add request ID if available
  if (process.env.VERCEL_REQUEST_ID) {
    logger.defaultMeta.requestId = process.env.VERCEL_REQUEST_ID
  }

  // Wrapper to match our interface
  return {
    error: (message: string, metadata?: LogMetadata) => {
      if (metadata?.error) {
        metadata = { ...metadata, error: formatError(metadata.error) }
      }
      logger.error(message, metadata)
    },
    warn: (message: string, metadata?: LogMetadata) =>
      logger.warn(message, metadata),
    info: (message: string, metadata?: LogMetadata) =>
      logger.info(message, metadata),
    debug: (message: string, metadata?: LogMetadata) =>
      logger.debug(message, metadata),
    verbose: (message: string, metadata?: LogMetadata) =>
      logger.verbose(message, metadata),
    log: (level: LogLevel, message: string, metadata?: LogMetadata) => {
      logger.log(level, message, metadata)
    },
  }
}
