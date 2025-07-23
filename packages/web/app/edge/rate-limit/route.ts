import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

interface RateLimitRule {
  identifier: string
  limit: number
  windowMs: number
  skipSuccessfulRequests?: boolean
  skipFailedRequests?: boolean
}

interface RateLimitInfo {
  count: number
  resetTime: number
  remaining: number
}

// Rate limit configurations by endpoint/user type
const RATE_LIMIT_CONFIGS: Record<string, RateLimitRule> = {
  // API endpoints
  api_search: { identifier: 'search', limit: 100, windowMs: 60000 }, // 100 per minute
  api_notes: { identifier: 'notes', limit: 200, windowMs: 60000 }, // 200 per minute
  api_export: { identifier: 'export', limit: 10, windowMs: 60000 }, // 10 per minute
  api_upload: { identifier: 'upload', limit: 20, windowMs: 60000 }, // 20 per minute

  // User tiers
  user_free: { identifier: 'free', limit: 1000, windowMs: 3600000 }, // 1000 per hour
  user_pro: { identifier: 'pro', limit: 5000, windowMs: 3600000 }, // 5000 per hour
  user_business: { identifier: 'business', limit: 20000, windowMs: 3600000 }, // 20000 per hour

  // Auth endpoints (more restrictive)
  auth_login: { identifier: 'login', limit: 5, windowMs: 300000 }, // 5 per 5 minutes
  auth_register: { identifier: 'register', limit: 3, windowMs: 600000 }, // 3 per 10 minutes
  auth_password_reset: {
    identifier: 'password_reset',
    limit: 3,
    windowMs: 3600000,
  }, // 3 per hour

  // Public endpoints
  public_general: { identifier: 'public', limit: 1000, windowMs: 3600000 }, // 1000 per hour
}

// Get user identifier for rate limiting
function getUserIdentifier(request: NextRequest, rule: RateLimitRule): string {
  // Try to get user ID from auth header
  const userId = request.headers.get('x-user-id')
  if (userId) {
    return `user:${userId}:${rule.identifier}`
  }

  // Fall back to IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const firstForwarded = forwarded ? forwarded.split(',')[0] : null
  const realIp = firstForwarded
    ? firstForwarded.trim()
    : request.headers.get('x-real-ip') || 'unknown'

  return `ip:${realIp}:${rule.identifier}`
}

// Get user tier from headers or default to free
function getUserTier(request: NextRequest): string {
  const tier = request.headers.get('x-user-tier') || 'free'
  return tier.toLowerCase()
}

// Store rate limit data (using KV storage in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Get rate limit info from storage
async function getRateLimitInfo(
  key: string,
  windowMs: number
): Promise<RateLimitInfo> {
  const now = Date.now()
  const stored = rateLimitStore.get(key)

  if (!stored || now > stored.resetTime) {
    // Initialize or reset window
    const resetTime = now + windowMs
    rateLimitStore.set(key, { count: 0, resetTime })
    return { count: 0, resetTime, remaining: 0 }
  }

  return {
    count: stored.count,
    resetTime: stored.resetTime,
    remaining: Math.max(0, stored.resetTime - now),
  }
}

// Increment rate limit counter
async function incrementRateLimit(
  key: string,
  windowMs: number
): Promise<RateLimitInfo> {
  const now = Date.now()
  const stored = rateLimitStore.get(key)

  if (!stored || now > stored.resetTime) {
    // Initialize new window
    const resetTime = now + windowMs
    const newData = { count: 1, resetTime }
    rateLimitStore.set(key, newData)
    return { count: 1, resetTime, remaining: windowMs }
  }

  // Increment counter
  stored.count += 1
  rateLimitStore.set(key, stored)

  return {
    count: stored.count,
    resetTime: stored.resetTime,
    remaining: Math.max(0, stored.resetTime - now),
  }
}

// Check if request should be rate limited
async function checkRateLimit(
  request: NextRequest,
  ruleKey: string
): Promise<{ allowed: boolean; info: RateLimitInfo; rule: RateLimitRule }> {
  const rule = RATE_LIMIT_CONFIGS[ruleKey]
  if (!rule) {
    throw new Error(`Rate limit rule not found: ${ruleKey}`)
  }

  const identifier = getUserIdentifier(request, rule)
  const info = await getRateLimitInfo(identifier, rule.windowMs)

  const allowed = info.count < rule.limit

  // Only increment if we're allowing the request
  if (allowed) {
    const updatedInfo = await incrementRateLimit(identifier, rule.windowMs)
    return { allowed: true, info: updatedInfo, rule }
  }

  return { allowed: false, info, rule }
}

// Main rate limiting endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { endpoint } = body

    if (!endpoint) {
      return NextResponse.json(
        { error: 'Missing endpoint parameter' },
        { status: 400 }
      )
    }

    // Determine rate limit rule based on endpoint and user
    let ruleKey: string

    if (endpoint.startsWith('/api/auth/')) {
      if (endpoint.includes('signin') || endpoint.includes('login')) {
        ruleKey = 'auth_login'
      } else if (endpoint.includes('signup') || endpoint.includes('register')) {
        ruleKey = 'auth_register'
      } else if (endpoint.includes('reset-password')) {
        ruleKey = 'auth_password_reset'
      } else {
        ruleKey = 'public_general'
      }
    } else if (endpoint.startsWith('/api/')) {
      if (endpoint.includes('search')) {
        ruleKey = 'api_search'
      } else if (endpoint.includes('notes')) {
        ruleKey = 'api_notes'
      } else if (endpoint.includes('export')) {
        ruleKey = 'api_export'
      } else if (endpoint.includes('upload')) {
        ruleKey = 'api_upload'
      } else {
        // Check user tier for general API access
        const userTier = getUserTier(request)
        ruleKey = `user_${userTier}`
      }
    } else {
      ruleKey = 'public_general'
    }

    const { allowed, info, rule } = await checkRateLimit(request, ruleKey)

    const response = {
      allowed,
      limit: rule.limit,
      count: info.count,
      remaining: Math.max(0, rule.limit - info.count),
      resetTime: info.resetTime,
      retryAfter: allowed ? null : Math.ceil(info.remaining / 1000),
    }

    const status = allowed ? 200 : 429
    const headers: Record<string, string> = {
      'X-RateLimit-Limit': rule.limit.toString(),
      'X-RateLimit-Remaining': Math.max(0, rule.limit - info.count).toString(),
      'X-RateLimit-Reset': Math.ceil(info.resetTime / 1000).toString(),
    }

    if (!allowed) {
      headers['Retry-After'] = Math.ceil(info.remaining / 1000).toString()
    }

    return NextResponse.json(response, { status, headers })
  } catch (error) {
    console.error('Rate limit check error:', error)

    return NextResponse.json(
      { error: 'Failed to check rate limit' },
      { status: 500 }
    )
  }
}

// Get rate limit status for a user/IP
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ruleKey = searchParams.get('rule') || 'public_general'

    if (!RATE_LIMIT_CONFIGS[ruleKey]) {
      return NextResponse.json({ error: 'Invalid rule key' }, { status: 400 })
    }

    const rule = RATE_LIMIT_CONFIGS[ruleKey]
    const identifier = getUserIdentifier(request, rule)
    const info = await getRateLimitInfo(identifier, rule.windowMs)

    const response = {
      rule: ruleKey,
      limit: rule.limit,
      count: info.count,
      remaining: Math.max(0, rule.limit - info.count),
      resetTime: info.resetTime,
      windowMs: rule.windowMs,
    }

    return NextResponse.json(response, {
      headers: {
        'X-RateLimit-Limit': rule.limit.toString(),
        'X-RateLimit-Remaining': Math.max(
          0,
          rule.limit - info.count
        ).toString(),
        'X-RateLimit-Reset': Math.ceil(info.resetTime / 1000).toString(),
      },
    })
  } catch (error) {
    console.error('Rate limit status error:', error)

    return NextResponse.json(
      { error: 'Failed to get rate limit status' },
      { status: 500 }
    )
  }
}

// Reset rate limit for a user/IP (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')

    if (!adminKey || adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const ruleKey = searchParams.get('rule')
    const targetUser = searchParams.get('user')
    const targetIp = searchParams.get('ip')

    if (!ruleKey || !RATE_LIMIT_CONFIGS[ruleKey]) {
      return NextResponse.json(
        { error: 'Invalid or missing rule key' },
        { status: 400 }
      )
    }

    const rule = RATE_LIMIT_CONFIGS[ruleKey]
    let identifier: string

    if (targetUser) {
      identifier = `user:${targetUser}:${rule.identifier}`
    } else if (targetIp) {
      identifier = `ip:${targetIp}:${rule.identifier}`
    } else {
      return NextResponse.json(
        { error: 'Must specify either user or ip parameter' },
        { status: 400 }
      )
    }

    // Reset the rate limit
    rateLimitStore.delete(identifier)

    return NextResponse.json({
      message: 'Rate limit reset successfully',
      identifier,
      rule: ruleKey,
    })
  } catch (error) {
    console.error('Rate limit reset error:', error)

    return NextResponse.json(
      { error: 'Failed to reset rate limit' },
      { status: 500 }
    )
  }
}

// Cleanup old rate limit entries (called periodically)
export async function PUT(_request: NextRequest) {
  try {
    const now = Date.now()
    let cleaned = 0

    for (const [key, data] of rateLimitStore.entries()) {
      if (now > data.resetTime) {
        rateLimitStore.delete(key)
        cleaned++
      }
    }

    return NextResponse.json({
      message: 'Cleanup completed',
      entriesRemoved: cleaned,
      remainingEntries: rateLimitStore.size,
    })
  } catch (error) {
    console.error('Rate limit cleanup error:', error)

    return NextResponse.json(
      { error: 'Failed to cleanup rate limits' },
      { status: 500 }
    )
  }
}
