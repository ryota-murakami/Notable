import { createClientLogger } from './client'
import type { Logger } from './index'

// This file is for client-side usage only
export const logger: Logger = createClientLogger()
