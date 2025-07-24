/**
 * Stripe Client Configuration and Utilities
 * Handles Stripe integration for subscription management
 */

import Stripe from 'stripe'

// Initialize Stripe with secret key (server-side only)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-06-30.basil',
      typescript: true,
    })
  : null

// Stripe publishable key for client-side usage
export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// Subscription configuration
export const SUBSCRIPTION_PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    description: 'Perfect for personal use',
    price: 0,
    priceId: null,
    features: ['Up to 50 notes', '100MB storage', '2 devices', 'Email support'],
    limits: {
      notes: 50,
      storage: 100 * 1024 * 1024, // 100MB in bytes
      devices: 2,
      exports: 5,
      aiRequests: 10,
    },
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    description: 'For power users and teams',
    price: 9.99,
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID,
    features: [
      'Unlimited notes',
      '10GB storage',
      'Unlimited devices',
      'Priority support',
      'Advanced AI features',
      'Export to all formats',
      'Version history',
    ],
    limits: {
      notes: -1, // unlimited
      storage: 10 * 1024 * 1024 * 1024, // 10GB in bytes
      devices: -1,
      exports: -1,
      aiRequests: -1,
    },
  },
  team: {
    id: 'team',
    name: 'Team',
    description: 'For growing teams',
    price: 19.99,
    priceId: process.env.STRIPE_TEAM_PRICE_ID,
    features: [
      'Everything in Premium',
      '100GB storage',
      'Team management',
      'Advanced permissions',
      'Analytics dashboard',
      'Custom integrations',
      'Dedicated support',
    ],
    limits: {
      notes: -1,
      storage: 100 * 1024 * 1024 * 1024, // 100GB in bytes
      devices: -1,
      exports: -1,
      aiRequests: -1,
      teamMembers: 25,
    },
  },
} as const

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS
export type PlanLimits = (typeof SUBSCRIPTION_PLANS)[SubscriptionPlan]['limits']

// Stripe webhook events we handle
export const STRIPE_WEBHOOK_EVENTS = {
  SUBSCRIPTION_CREATED: 'customer.subscription.created',
  SUBSCRIPTION_UPDATED: 'customer.subscription.updated',
  SUBSCRIPTION_DELETED: 'customer.subscription.deleted',
  INVOICE_PAID: 'invoice.payment_succeeded',
  INVOICE_FAILED: 'invoice.payment_failed',
  PAYMENT_METHOD_ATTACHED: 'payment_method.attached',
} as const

/**
 * Create a Stripe checkout session for subscription
 */
export function createCheckoutSession({
  customerId,
  priceId,
  successUrl,
  cancelUrl,
  trialDays,
}: {
  customerId?: string
  priceId: string
  successUrl: string
  cancelUrl: string
  trialDays?: number
}): Promise<Stripe.Checkout.Session> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      plan: getPlanByPriceId(priceId)?.id || 'unknown',
    },
  }

  // Add customer if provided
  if (customerId) {
    sessionParams.customer = customerId
  } else {
    sessionParams.customer_creation = 'always'
  }

  // Add trial if specified
  if (trialDays && trialDays > 0) {
    sessionParams.subscription_data = {
      trial_period_days: trialDays,
    }
  }

  return stripe.checkout.sessions.create(sessionParams)
}

/**
 * Create a billing portal session for subscription management
 */
export function createBillingPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string
  returnUrl: string
}): Promise<Stripe.BillingPortal.Session> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}

/**
 * Create or retrieve a Stripe customer
 */
export async function createOrRetrieveCustomer({
  email,
  userId,
  name,
}: {
  email: string
  userId: string
  name?: string
}): Promise<Stripe.Customer> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  // Try to find existing customer by email
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  })

  if (existingCustomers.data.length > 0) {
    return existingCustomers.data[0]
  }

  // Create new customer
  return stripe.customers.create({
    email,
    name,
    metadata: {
      userId,
    },
  })
}

/**
 * Get subscription details from Stripe
 */
export async function getSubscription(
  subscriptionId: string
): Promise<Stripe.Subscription | null> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  try {
    return await stripe.subscriptions.retrieve(subscriptionId)
  } catch (error) {
    console.error('Failed to retrieve subscription:', error)
    return null
  }
}

/**
 * Cancel a subscription
 */
export function cancelSubscription(
  subscriptionId: string,
  cancelAtPeriodEnd = true
): Promise<Stripe.Subscription> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  return stripe.subscriptions.update(subscriptionId, {
    cancel_at_period_end: cancelAtPeriodEnd,
  })
}

/**
 * Update subscription
 */
export async function updateSubscription({
  subscriptionId,
  priceId,
  prorationBehavior = 'create_prorations',
}: {
  subscriptionId: string
  priceId: string
  prorationBehavior?: 'create_prorations' | 'none' | 'always_invoice'
}): Promise<Stripe.Subscription> {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  return stripe.subscriptions.update(subscriptionId, {
    items: [
      {
        id: subscription.items.data[0].id,
        price: priceId,
      },
    ],
    proration_behavior: prorationBehavior,
  })
}

/**
 * Get plan configuration by price ID
 */
export function getPlanByPriceId(priceId: string) {
  return Object.values(SUBSCRIPTION_PLANS).find(
    (plan) => plan.priceId === priceId
  )
}

/**
 * Get plan configuration by plan ID
 */
export function getPlanById(planId: SubscriptionPlan) {
  return SUBSCRIPTION_PLANS[planId]
}

/**
 * Check if a plan is premium (paid)
 */
export function isPremiumPlan(planId: SubscriptionPlan): boolean {
  return planId !== 'free'
}

/**
 * Get upgrade path for a plan
 */
export function getUpgradePath(
  currentPlan: SubscriptionPlan
): SubscriptionPlan[] {
  const plans: SubscriptionPlan[] = ['free', 'premium', 'team']
  const currentIndex = plans.indexOf(currentPlan)
  return plans.slice(currentIndex + 1)
}

/**
 * Check if usage is within plan limits
 */
export function isWithinLimits(
  usage: Partial<PlanLimits>,
  planId: SubscriptionPlan
): { isWithin: boolean; exceededLimits: string[] } {
  const limits = SUBSCRIPTION_PLANS[planId].limits
  const exceededLimits: string[] = []

  Object.entries(usage).forEach(([key, value]) => {
    const limit = limits[key as keyof PlanLimits]
    if (limit !== -1 && typeof value === 'number' && value > limit) {
      exceededLimits.push(key)
    }
  })

  return {
    isWithin: exceededLimits.length === 0,
    exceededLimits,
  }
}

/**
 * Calculate usage percentage for a specific limit
 */
export function getUsagePercentage(current: number, limit: number): number {
  if (limit === -1) return 0 // Unlimited
  return Math.min((current / limit) * 100, 100)
}

/**
 * Format storage size for display
 */
export function formatStorageSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`
}

/**
 * Get next billing date
 */
export function getNextBillingDate(currentPeriodEnd: number): Date {
  return new Date(currentPeriodEnd * 1000)
}

/**
 * Check if subscription is in trial
 */
export function isInTrial(subscription: Stripe.Subscription): boolean {
  const now = Math.floor(Date.now() / 1000)
  return !!(subscription.trial_end && subscription.trial_end > now)
}

/**
 * Get trial end date
 */
export function getTrialEndDate(
  subscription: Stripe.Subscription
): Date | null {
  return subscription.trial_end ? new Date(subscription.trial_end * 1000) : null
}
