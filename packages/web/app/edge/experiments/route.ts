import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface Experiment {
  id: string
  name: string
  variants: {
    id: string
    name: string
    weight: number
    config: Record<string, any>
  }[]
  enabled: boolean
  targetingRules?: {
    country?: string[]
    userAgent?: string[]
    percentage?: number
  }
}

// Feature flag configuration
const FEATURE_FLAGS: Record<string, boolean> = {
  'new-editor-ui': true,
  'advanced-search': true,
  'real-time-collaboration': true,
  'ai-suggestions': false,
  'dark-mode': true,
  'mobile-app-banner': true,
  'export-pdf': true,
  'voice-notes': false,
  templates: true,
  folders: true,
}

// A/B test experiments
const EXPERIMENTS: Experiment[] = [
  {
    id: 'editor-toolbar-position',
    name: 'Editor Toolbar Position',
    enabled: true,
    variants: [
      {
        id: 'top',
        name: 'Top Toolbar',
        weight: 50,
        config: { toolbarPosition: 'top' },
      },
      {
        id: 'floating',
        name: 'Floating Toolbar',
        weight: 50,
        config: { toolbarPosition: 'floating' },
      },
    ],
  },
  {
    id: 'onboarding-flow',
    name: 'Onboarding Flow',
    enabled: true,
    variants: [
      {
        id: 'guided',
        name: 'Guided Tour',
        weight: 60,
        config: { onboardingType: 'guided', steps: 5 },
      },
      {
        id: 'minimal',
        name: 'Minimal Setup',
        weight: 40,
        config: { onboardingType: 'minimal', steps: 2 },
      },
    ],
  },
  {
    id: 'pricing-page-layout',
    name: 'Pricing Page Layout',
    enabled: true,
    targetingRules: {
      country: ['US', 'CA', 'GB', 'AU'],
      percentage: 50,
    },
    variants: [
      {
        id: 'cards',
        name: 'Card Layout',
        weight: 50,
        config: { layout: 'cards', highlightPlan: 'pro' },
      },
      {
        id: 'table',
        name: 'Table Layout',
        weight: 50,
        config: { layout: 'table', highlightPlan: 'business' },
      },
    ],
  },
]

// Hash function for consistent assignment
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Get user identifier for consistent experiment assignment
function getUserIdentifier(request: NextRequest): string {
  // Try to get user ID from session/auth
  const userId = request.headers.get('x-user-id')
  if (userId) return userId

  // Fall back to IP + User Agent for anonymous users
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0]
  const userAgent = request.headers.get('user-agent') || 'unknown'
  return `${ip}-${userAgent}`
}

// Check if user meets targeting rules
function matchesTargeting(
  request: NextRequest,
  rules?: Experiment['targetingRules'],
): boolean {
  if (!rules) return true

  // Check country targeting
  if (rules.country) {
    const userCountry = request.headers.get('x-vercel-ip-country') || 'US'
    if (!rules.country.includes(userCountry)) {
      return false
    }
  }

  // Check user agent targeting
  if (rules.userAgent) {
    const userAgent = request.headers.get('user-agent') || ''
    const matches = rules.userAgent.some((pattern) =>
      userAgent.toLowerCase().includes(pattern.toLowerCase()),
    )
    if (!matches) return false
  }

  // Check percentage targeting
  if (rules.percentage) {
    const identifier = getUserIdentifier(request)
    const hash = hashString(identifier + 'targeting')
    const percentage = (hash % 100) + 1
    if (percentage > rules.percentage) {
      return false
    }
  }

  return true
}

// Assign user to experiment variant
function assignVariant(experiment: Experiment, userIdentifier: string) {
  const hash = hashString(userIdentifier + experiment.id)
  const assignment = hash % 100

  let cumulative = 0
  for (const variant of experiment.variants) {
    cumulative += variant.weight
    if (assignment < cumulative) {
      return variant
    }
  }

  // Fallback to first variant
  return experiment.variants[0]
}

// Main endpoint for feature flags and experiments
export async function GET(request: NextRequest) {
  try {
    const userIdentifier = getUserIdentifier(request)
    const experiments: Record<string, any> = {}

    // Process A/B tests
    for (const experiment of EXPERIMENTS) {
      if (!experiment.enabled) continue

      if (!matchesTargeting(request, experiment.targetingRules)) {
        continue
      }

      const variant = assignVariant(experiment, userIdentifier)
      experiments[experiment.id] = {
        variant: variant.id,
        config: variant.config,
      }
    }

    const response = {
      featureFlags: FEATURE_FLAGS,
      experiments,
      userIdentifier: hashString(userIdentifier).toString(), // Don't expose raw identifier
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'private, max-age=300', // Cache for 5 minutes
        Vary: 'X-Forwarded-For, User-Agent',
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to get experiments' },
      { status: 500 },
    )
  }
}

// Track experiment events
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event, experimentId, variantId, properties } = body

    if (!event || !experimentId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const userIdentifier = getUserIdentifier(request)

    // In production, send to analytics service
    const eventData = {
      event,
      experimentId,
      variantId,
      properties,
      userIdentifier: hashString(userIdentifier).toString(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      country: request.headers.get('x-vercel-ip-country'),
    }

    // Log for debugging (in production, send to analytics)
    console.log('Experiment event:', eventData)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 },
    )
  }
}
