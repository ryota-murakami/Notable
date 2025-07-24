/**
 * Feature Gate Component
 * Controls access to premium features based on subscription plan
 */

'use client'

import type { ReactNode } from 'react'
import { useSubscription, type UsageData } from '@/hooks/use-subscription'
import type { SubscriptionPlan } from '@/lib/stripe'
import { UpgradeDialog } from '@/components/billing/upgrade-dialog'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Crown, Lock, Zap } from 'lucide-react'

interface FeatureGateProps {
  /** Required plan to access this feature */
  requiredPlan: SubscriptionPlan
  /** Content to show when user has access */
  children: ReactNode
  /** Alternative content to show when access is denied */
  fallback?: ReactNode
  /** Feature name for the upgrade prompt */
  featureName?: string
  /** Feature description for the upgrade prompt */
  featureDescription?: string
  /** Whether to show a compact upgrade prompt instead of full fallback */
  compact?: boolean
  /** Custom upgrade message */
  upgradeMessage?: string
}

export function FeatureGate({
  requiredPlan,
  children,
  fallback,
  featureName = 'Premium Feature',
  featureDescription = 'This feature requires a premium subscription.',
  compact = false,
  upgradeMessage,
}: FeatureGateProps) {
  const { currentPlan, isLoading } = useSubscription()

  // Helper to check if current plan meets requirement
  const hasAccess = () => {
    const planHierarchy: Record<SubscriptionPlan, number> = {
      free: 0,
      premium: 1,
      team: 2,
    }

    return planHierarchy[currentPlan] >= planHierarchy[requiredPlan]
  }

  // Show loading state
  if (isLoading) {
    if (compact) {
      return (
        <div className='flex items-center justify-center p-4'>
          <div className='animate-pulse bg-muted rounded w-full h-8'></div>
        </div>
      )
    }

    return (
      <Card>
        <CardContent className='p-6'>
          <div className='animate-pulse space-y-3'>
            <div className='h-6 bg-muted rounded w-3/4'></div>
            <div className='h-4 bg-muted rounded w-1/2'></div>
            <div className='h-10 bg-muted rounded w-1/3'></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // User has access - show the feature
  if (hasAccess()) {
    return <>{children}</>
  }

  // User doesn't have access - show fallback or upgrade prompt
  if (fallback) {
    return <>{fallback}</>
  }

  // Compact upgrade prompt
  if (compact) {
    return (
      <div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-dashed'>
        <div className='flex items-center space-x-2'>
          <Lock className='h-4 w-4 text-muted-foreground' />
          <span className='text-sm font-medium'>{featureName}</span>
          <Crown className='h-4 w-4 text-amber-500' />
        </div>
        <UpgradeDialog
          trigger={
            <Button size='sm' variant='outline'>
              <Crown className='h-3 w-3 mr-1' />
              Upgrade
            </Button>
          }
        />
      </div>
    )
  }

  // Full upgrade prompt
  return (
    <Card className='border-dashed border-2'>
      <CardHeader className='text-center pb-4'>
        <div className='flex justify-center mb-2'>
          <div className='p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full'>
            <Crown className='h-8 w-8 text-purple-500' />
          </div>
        </div>
        <CardTitle className='flex items-center justify-center'>
          <Lock className='h-5 w-5 mr-2' />
          {featureName}
        </CardTitle>
        <CardDescription>
          {upgradeMessage || featureDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className='text-center'>
        <UpgradeDialog
          trigger={
            <Button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>
              <Crown className='h-4 w-4 mr-2' />
              Upgrade to {requiredPlan === 'premium' ? 'Premium' : 'Team'}
            </Button>
          }
        />
        <p className='text-xs text-muted-foreground mt-3'>
          Unlock this feature and many more with a premium subscription
        </p>
      </CardContent>
    </Card>
  )
}

/**
 * Usage Gate Component
 * Prevents actions when usage limits are exceeded
 */
interface UsageGateProps {
  /** Usage type to check (e.g., 'notes', 'storage') */
  action: keyof UsageData
  /** Content to show when usage is within limits */
  children: ReactNode
  /** Alternative content when limit is exceeded */
  fallback?: ReactNode
  /** Warning threshold (0-1) to show warning before limit */
  warningThreshold?: number
  /** Custom limit exceeded message */
  limitMessage?: string
  /** Whether to show a compact warning */
  compact?: boolean
}

export function UsageGate({
  action,
  children,
  fallback,
  warningThreshold = 0.8,
  limitMessage,
  compact = false,
}: UsageGateProps) {
  const { canPerformAction, isApproachingLimit, getUsagePercent, isLoading } =
    useSubscription()

  if (isLoading) {
    return compact ? (
      <div className='animate-pulse bg-muted rounded w-full h-8'></div>
    ) : (
      <div className='animate-pulse space-y-2'>
        <div className='h-4 bg-muted rounded w-3/4'></div>
        <div className='h-8 bg-muted rounded w-full'></div>
      </div>
    )
  }

  const canPerform = canPerformAction(action)
  const isWarning = isApproachingLimit(action, warningThreshold)
  const usagePercent = getUsagePercent(action)

  // Show warning when approaching limit
  if (isWarning && canPerform) {
    if (compact) {
      return (
        <div className='space-y-2'>
          <div className='flex items-center text-xs text-amber-600'>
            <Zap className='h-3 w-3 mr-1' />
            {usagePercent.toFixed(0)}% of limit used
          </div>
          {children}
        </div>
      )
    }

    return (
      <div className='space-y-3'>
        <div className='p-2 bg-amber-50 dark:bg-amber-950 rounded border border-amber-200 dark:border-amber-800'>
          <div className='flex items-center text-sm text-amber-700 dark:text-amber-300'>
            <Zap className='h-4 w-4 mr-2' />
            You're using {usagePercent.toFixed(0)}% of your {action} limit
          </div>
        </div>
        {children}
      </div>
    )
  }

  // User can perform action
  if (canPerform) {
    return <>{children}</>
  }

  // Limit exceeded
  if (fallback) {
    return <>{fallback}</>
  }

  // Default limit exceeded message
  return (
    <div className='p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800'>
      <div className='flex items-center space-x-2 text-red-700 dark:text-red-300'>
        <Lock className='h-5 w-5' />
        <div>
          <p className='font-medium'>
            {limitMessage || `${action} limit reached`}
          </p>
          <p className='text-sm'>
            Upgrade your plan to continue using this feature
          </p>
        </div>
      </div>
      <div className='mt-3'>
        <UpgradeDialog
          trigger={
            <Button size='sm' variant='outline'>
              <Crown className='h-3 w-3 mr-1' />
              Upgrade Plan
            </Button>
          }
        />
      </div>
    </div>
  )
}

/**
 * Plan Badge Component
 * Shows the required plan for a feature
 */
interface PlanBadgeProps {
  plan: SubscriptionPlan
  className?: string
}

export function PlanBadge({ plan, className }: PlanBadgeProps) {
  const getPlanColor = (plan: SubscriptionPlan) => {
    switch (plan) {
      case 'premium':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
      case 'team':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(plan)} ${className}`}
    >
      <Crown className='h-3 w-3 mr-1' />
      {plan === 'premium' ? 'Premium' : plan === 'team' ? 'Team' : 'Free'}
    </span>
  )
}
