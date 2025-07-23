/**
 * Subscription Card Component
 * Displays current subscription status and plan details
 */

'use client'

import { useSubscription } from '@/hooks/use-subscription'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Crown,
  CreditCard,
  Calendar,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'
import { formatStorageSize, getNextBillingDate } from '@/lib/stripe'

export function SubscriptionCard() {
  const {
    subscription,
    currentPlan,
    planConfig,
    isPremium,
    isActive,
    isInTrial,
    isLoading,
    error,
    createBillingPortalSession,
  } = useSubscription()

  const handleManageBilling = async () => {
    try {
      await createBillingPortalSession()
    } catch (error) {
      console.error('Failed to open billing portal:', error)
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Crown className='h-5 w-5 mr-2' />
            Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='animate-pulse space-y-3'>
            <div className='h-4 bg-muted rounded w-3/4'></div>
            <div className='h-4 bg-muted rounded w-1/2'></div>
            <div className='h-8 bg-muted rounded w-full'></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-destructive'>
            <AlertTriangle className='h-5 w-5 mr-2' />
            Error Loading Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground'>{error}</p>
        </CardContent>
      </Card>
    )
  }

  const getStatusBadge = () => {
    if (!isActive) {
      return <Badge variant='destructive'>Inactive</Badge>
    }
    if (isInTrial) {
      return <Badge variant='secondary'>Trial</Badge>
    }
    return <Badge variant='default'>Active</Badge>
  }

  const getBillingInfo = () => {
    if (!subscription || !isPremium) return null

    if (subscription.current_period_end) {
      const nextBilling = getNextBillingDate(
        Math.floor(subscription.current_period_end.getTime() / 1000)
      )
      return (
        <div className='flex items-center text-sm text-muted-foreground'>
          <Calendar className='h-4 w-4 mr-2' />
          Next billing: {nextBilling.toLocaleDateString()}
        </div>
      )
    }

    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Crown className='h-5 w-5 mr-2' />
            Current Plan
          </div>
          {getStatusBadge()}
        </CardTitle>
        <CardDescription>
          Manage your subscription and billing preferences
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Plan Details */}
        <div className='border rounded-lg p-4'>
          <div className='flex items-center justify-between mb-2'>
            <h3 className='font-semibold text-lg'>{planConfig.name}</h3>
            {isPremium && (
              <div className='text-right'>
                <p className='font-semibold'>${planConfig.price}/month</p>
              </div>
            )}
          </div>
          <p className='text-sm text-muted-foreground mb-3'>
            {planConfig.description}
          </p>

          {/* Plan Features */}
          <div className='space-y-2'>
            {planConfig.features.map((feature, index) => (
              <div key={index} className='flex items-center text-sm'>
                <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                {feature}
              </div>
            ))}
          </div>

          {/* Plan Limits */}
          <div className='mt-4 pt-4 border-t'>
            <h4 className='font-medium mb-2'>Plan Limits</h4>
            <div className='grid grid-cols-2 gap-2 text-sm'>
              <div>
                <span className='text-muted-foreground'>Notes:</span>{' '}
                {planConfig.limits.notes === -1
                  ? 'Unlimited'
                  : planConfig.limits.notes}
              </div>
              <div>
                <span className='text-muted-foreground'>Storage:</span>{' '}
                {formatStorageSize(planConfig.limits.storage)}
              </div>
              <div>
                <span className='text-muted-foreground'>Devices:</span>{' '}
                {planConfig.limits.devices === -1
                  ? 'Unlimited'
                  : planConfig.limits.devices}
              </div>
              <div>
                <span className='text-muted-foreground'>Collaborators:</span>{' '}
                {planConfig.limits.collaborators === -1
                  ? 'Unlimited'
                  : planConfig.limits.collaborators}
              </div>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        {getBillingInfo()}

        {/* Trial Information */}
        {isInTrial && subscription?.trial_end && (
          <div className='flex items-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg'>
            <AlertTriangle className='h-4 w-4 mr-2 text-blue-600' />
            <div className='text-sm'>
              <p className='font-medium'>Trial Active</p>
              <p className='text-muted-foreground'>
                Trial ends on {subscription.trial_end.toLocaleDateString()}
              </p>
            </div>
          </div>
        )}

        {/* Manage Billing Button */}
        {isPremium && subscription?.customer_id && (
          <Button
            onClick={handleManageBilling}
            variant='outline'
            className='w-full'
          >
            <CreditCard className='h-4 w-4 mr-2' />
            Manage Billing
            <ExternalLink className='h-4 w-4 ml-2' />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
