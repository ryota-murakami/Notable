import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge'

interface RoutingConfig {
  tier: string
  endpoints: {
    api: string
    database: string
    storage: string
    search: string
    ai?: string
  }
  features: string[]
  limits: {
    storage: number // in MB
    apiCalls: number // per hour
    collaborators: number
    exportFormats: string[]
  }
}

interface UserContext {
  id: string
  tier: 'free' | 'pro' | 'business' | 'enterprise'
  region: string
  features: string[]
  limits: Record<string, unknown>
}

// Routing configurations by user tier
const ROUTING_CONFIGS: Record<string, RoutingConfig> = {
  free: {
    tier: 'free',
    endpoints: {
      api: 'https://api-free.notable.com',
      database: 'https://db-shared.notable.com',
      storage: 'https://storage-basic.notable.com',
      search: 'https://search-basic.notable.com',
    },
    features: [
      'basic-editor',
      'local-storage',
      'markdown-export',
      'basic-search',
    ],
    limits: {
      storage: 100, // 100MB
      apiCalls: 1000,
      collaborators: 0,
      exportFormats: ['markdown', 'txt'],
    },
  },
  pro: {
    tier: 'pro',
    endpoints: {
      api: 'https://api-pro.notable.com',
      database: 'https://db-pro.notable.com',
      storage: 'https://storage-pro.notable.com',
      search: 'https://search-advanced.notable.com',
      ai: 'https://ai-basic.notable.com',
    },
    features: [
      'advanced-editor',
      'cloud-sync',
      'real-time-collaboration',
      'advanced-search',
      'templates',
      'folders',
      'tags',
      'ai-suggestions',
    ],
    limits: {
      storage: 5000, // 5GB
      apiCalls: 5000,
      collaborators: 5,
      exportFormats: ['markdown', 'txt', 'pdf', 'html'],
    },
  },
  business: {
    tier: 'business',
    endpoints: {
      api: 'https://api-business.notable.com',
      database: 'https://db-business.notable.com',
      storage: 'https://storage-business.notable.com',
      search: 'https://search-enterprise.notable.com',
      ai: 'https://ai-advanced.notable.com',
    },
    features: [
      'advanced-editor',
      'cloud-sync',
      'real-time-collaboration',
      'advanced-search',
      'templates',
      'folders',
      'tags',
      'ai-suggestions',
      'team-workspaces',
      'admin-dashboard',
      'custom-branding',
      'sso',
    ],
    limits: {
      storage: 50000, // 50GB
      apiCalls: 20000,
      collaborators: 50,
      exportFormats: ['markdown', 'txt', 'pdf', 'html', 'docx', 'notion'],
    },
  },
  enterprise: {
    tier: 'enterprise',
    endpoints: {
      api: 'https://api-enterprise.notable.com',
      database: 'https://db-dedicated.notable.com',
      storage: 'https://storage-dedicated.notable.com',
      search: 'https://search-dedicated.notable.com',
      ai: 'https://ai-enterprise.notable.com',
    },
    features: [
      'advanced-editor',
      'cloud-sync',
      'real-time-collaboration',
      'advanced-search',
      'templates',
      'folders',
      'tags',
      'ai-suggestions',
      'team-workspaces',
      'admin-dashboard',
      'custom-branding',
      'sso',
      'api-access',
      'custom-integrations',
      'dedicated-support',
      'on-premise-deployment',
    ],
    limits: {
      storage: -1, // unlimited
      apiCalls: -1, // unlimited
      collaborators: -1, // unlimited
      exportFormats: [
        'markdown',
        'txt',
        'pdf',
        'html',
        'docx',
        'notion',
        'json',
      ],
    },
  },
}

// Regional endpoint mappings
const REGIONAL_ENDPOINTS: Record<string, Record<string, string>> = {
  'us-east': {
    'api-free': 'https://api-free-us-east.notable.com',
    'api-pro': 'https://api-pro-us-east.notable.com',
    'api-business': 'https://api-business-us-east.notable.com',
    'api-enterprise': 'https://api-enterprise-us-east.notable.com',
  },
  'us-west': {
    'api-free': 'https://api-free-us-west.notable.com',
    'api-pro': 'https://api-pro-us-west.notable.com',
    'api-business': 'https://api-business-us-west.notable.com',
    'api-enterprise': 'https://api-enterprise-us-west.notable.com',
  },
  'eu-central': {
    'api-free': 'https://api-free-eu-central.notable.com',
    'api-pro': 'https://api-pro-eu-central.notable.com',
    'api-business': 'https://api-business-eu-central.notable.com',
    'api-enterprise': 'https://api-enterprise-eu-central.notable.com',
  },
  'asia-pacific': {
    'api-free': 'https://api-free-ap.notable.com',
    'api-pro': 'https://api-pro-ap.notable.com',
    'api-business': 'https://api-business-ap.notable.com',
    'api-enterprise': 'https://api-enterprise-ap.notable.com',
  },
}

// Get user context from request headers
function getUserContext(request: NextRequest): UserContext {
  const userId = request.headers.get('x-user-id') || 'anonymous'
  const tier = (request.headers.get('x-user-tier') ||
    'free') as UserContext['tier']
  const region =
    request.headers.get('x-user-region') || getRegionFromGeo(request)

  const config = ROUTING_CONFIGS[tier]

  const freeConfig = ROUTING_CONFIGS.free ||
    ROUTING_CONFIGS.basic || {
      features: ['basic-editor', 'local-storage'],
      limits: {
        storage: 100,
        apiCalls: 1000,
        collaborators: 0,
        exportFormats: ['markdown', 'txt'],
      },
    }
  return {
    id: userId,
    tier,
    region,
    features: config?.features || freeConfig.features,
    limits: config?.limits || freeConfig.limits,
  }
}

// Get region from geo information
function getRegionFromGeo(request: NextRequest): string {
  const country = request.headers.get('x-vercel-ip-country') || 'US'

  // Map countries to regions
  if (['US', 'CA', 'MX'].includes(country)) {
    return 'us-east'
  } else if (
    ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO'].includes(country)
  ) {
    return 'eu-central'
  } else if (['JP', 'KR', 'SG', 'AU', 'IN'].includes(country)) {
    return 'asia-pacific'
  }

  return 'us-east' // default
}

// Get optimal endpoint for service and tier
function getOptimalEndpoint(
  service: keyof RoutingConfig['endpoints'],
  tier: string,
  region: string
): string {
  const baseConfig = ROUTING_CONFIGS[tier]
  if (!baseConfig) {
    throw new Error(`Invalid tier: ${tier}`)
  }

  const baseEndpoint = baseConfig.endpoints[service]
  if (!baseEndpoint) {
    throw new Error(`Service not available for tier: ${service}`)
  }

  // Check for regional override
  const regionalKey = `${service}-${tier}`
  const regionalEndpoints = REGIONAL_ENDPOINTS[region]

  if (regionalEndpoints && regionalEndpoints[regionalKey]) {
    return regionalEndpoints[regionalKey]
  }

  return baseEndpoint
}

// Check if user has access to a feature
function hasFeatureAccess(userContext: UserContext, feature: string): boolean {
  return userContext.features.includes(feature)
}

// Check if user is within limits
function checkLimits(
  userContext: UserContext,
  limitType: keyof UserContext['limits'],
  currentUsage: number
): boolean {
  const limit = userContext.limits[limitType]

  // Type guard to ensure limit is a number
  if (typeof limit !== 'number') {
    return false // Invalid limit type, deny access
  }

  if (limit === -1) {
    return true // unlimited
  }

  return currentUsage < limit
}

// Route request to appropriate endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { service, feature, targetPath, currentUsage = {} } = body

    if (!service) {
      return NextResponse.json(
        { error: 'Missing service parameter' },
        { status: 400 }
      )
    }

    const userContext = getUserContext(request)

    // Check feature access if specified
    if (feature && !hasFeatureAccess(userContext, feature)) {
      return NextResponse.json(
        {
          error: 'Feature not available for your tier',
          feature,
          tier: userContext.tier,
          upgrade: {
            requiredTier: getMinimumTierForFeature(feature),
            upgradeUrl: `/upgrade?feature=${feature}`,
          },
        },
        { status: 403 }
      )
    }

    // Check usage limits
    for (const [limitType, usage] of Object.entries(currentUsage)) {
      if (!checkLimits(userContext, limitType, usage as number)) {
        return NextResponse.json(
          {
            error: 'Usage limit exceeded',
            limitType,
            current: usage,
            limit: userContext.limits[limitType],
            tier: userContext.tier,
            upgrade: {
              upgradeUrl: `/upgrade?limit=${limitType}`,
            },
          },
          { status: 429 }
        )
      }
    }

    // Get optimal endpoint
    const endpoint = getOptimalEndpoint(
      service as keyof RoutingConfig['endpoints'],
      userContext.tier,
      userContext.region
    )

    // Build full URL if targetPath provided
    const targetUrl = targetPath ? `${endpoint}${targetPath}` : endpoint

    const response = {
      endpoint: targetUrl,
      region: userContext.region,
      tier: userContext.tier,
      features: userContext.features,
      limits: userContext.limits,
      routing: {
        service,
        originalEndpoint:
          ROUTING_CONFIGS[userContext.tier]?.endpoints?.[
            service as keyof RoutingConfig['endpoints']
          ] || '',
        optimizedEndpoint: endpoint,
        region: userContext.region,
      },
    }

    return NextResponse.json(response, {
      headers: {
        'X-Routing-Tier': userContext.tier,
        'X-Routing-Region': userContext.region,
        'X-Routing-Endpoint': endpoint,
      },
    })
  } catch (error) {
    console.error('Routing error:', error)

    return NextResponse.json(
      { error: 'Failed to route request' },
      { status: 500 }
    )
  }
}

// Get routing configuration for user
export async function GET(request: NextRequest) {
  try {
    const userContext = getUserContext(request)
    const config = ROUTING_CONFIGS[userContext.tier]

    // Build endpoint mapping with regional optimizations
    const endpoints: Record<string, string> = {}

    for (const [service, _baseEndpoint] of Object.entries(
      config?.endpoints || {}
    )) {
      endpoints[service] = getOptimalEndpoint(
        service as keyof RoutingConfig['endpoints'],
        userContext.tier,
        userContext.region
      )
    }

    const freeConfig = ROUTING_CONFIGS.free ||
      ROUTING_CONFIGS.basic || {
        features: ['basic-editor', 'local-storage'],
        limits: {
          storage: 100,
          apiCalls: 1000,
          collaborators: 0,
          exportFormats: ['markdown', 'txt'],
        },
      }
    const response = {
      tier: userContext.tier,
      region: userContext.region,
      endpoints,
      features: config?.features || freeConfig.features,
      limits: config?.limits || freeConfig.limits,
      availableUpgrades: getAvailableUpgrades(userContext.tier),
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'private, max-age=300', // Cache for 5 minutes
        'X-User-Tier': userContext.tier,
        'X-User-Region': userContext.region,
      },
    })
  } catch (error) {
    console.error('Get routing config error:', error)

    return NextResponse.json(
      { error: 'Failed to get routing configuration' },
      { status: 500 }
    )
  }
}

// Helper function to get minimum tier for a feature
function getMinimumTierForFeature(feature: string): string {
  for (const [tier, config] of Object.entries(ROUTING_CONFIGS)) {
    if (config.features.includes(feature)) {
      return tier
    }
  }
  return 'enterprise'
}

// Helper function to get available upgrades
function getAvailableUpgrades(currentTier: string): string[] {
  const tierOrder = ['free', 'pro', 'business', 'enterprise']
  const currentIndex = tierOrder.indexOf(currentTier)

  if (currentIndex === -1 || currentIndex === tierOrder.length - 1) {
    return []
  }

  return tierOrder.slice(currentIndex + 1)
}
