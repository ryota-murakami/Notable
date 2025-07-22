import type { Logger } from './index'
import { createSimpleServerLogger } from './server-simple'

// Use simple logger to avoid edge runtime issues
export const logger: Logger = createSimpleServerLogger()
