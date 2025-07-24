/**
 * Upgrade Dialog Component
 * Modal for selecting and upgrading to premium plans
 */

'use client'

import { useState } from 'react'
import { useSubscription } from '@/hooks/use-subscription'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Crown, Check, Star, Users, Loader2, Sparkles } from 'lucide-react'
import { SUBSCRIPTION_PLANS, formatStorageSize } from '@/lib/stripe'
import type { SubscriptionPlan } from '@/lib/stripe'

interface UpgradeDialogProps {
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function UpgradeDialog({
  trigger,
  open,
  onOpenChange,
}: UpgradeDialogProps) {
  const {
    currentPlan,
    createCheckoutSession,
    isLoading: subscriptionLoading,
  } = useSubscription()

  const [isUpgrading, setIsUpgrading] = useState<string | null>(null)

  const handleUpgrade = async (planId: SubscriptionPlan) => {
    try {
      setIsUpgrading(planId)
      await createCheckoutSession(planId)
    } catch (error) {
      console.error('Failed to create checkout session:', error)
    } finally {
      setIsUpgrading(null)
    }
  }

  const getPopularBadge = (planId: string) => {
    if (planId === 'premium') {
      return (
        <Badge className='absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500'>
          <Star className='h-3 w-3 mr-1' />
          Most Popular
        </Badge>
      )
    }
    return null
  }

  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'premium':
        return <Crown className='h-6 w-6 text-purple-500' />
      case 'team':
        return <Users className='h-6 w-6 text-blue-500' />
      default:
        return <Sparkles className='h-6 w-6 text-gray-500' />
    }
  }

  const isCurrentPlan = (planId: string) => planId === currentPlan

  const canUpgrade = (planId: string) => {
    const plans = ['free', 'premium', 'team']
    const currentIndex = plans.indexOf(currentPlan)
    const planIndex = plans.indexOf(planId)
    return planIndex > currentIndex
  }

  const _DialogComponent = trigger ? Dialog : 'div'
  const _dialogProps = trigger ? { open, onOpenChange } : { className: 'block' }

  const content = (
    <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
      <DialogHeader>
        <DialogTitle className='flex items-center'>
          <Crown className='h-5 w-5 mr-2' />
          Upgrade Your Plan
        </DialogTitle>
        <DialogDescription>
          Choose a plan that fits your needs and unlock powerful features
        </DialogDescription>
      </DialogHeader>

      <div className='grid md:grid-cols-3 gap-6 mt-6'>
        {Object.values(SUBSCRIPTION_PLANS).map((plan) => (
          <Card
            key={plan.id}
            className={`relative transition-all duration-200 ${
              plan.id === 'premium'
                ? 'ring-2 ring-purple-500 shadow-lg scale-105'
                : 'hover:shadow-md'
            } ${
              isCurrentPlan(plan.id)
                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                : ''
            }`}
          >
            {getPopularBadge(plan.id)}

            <CardHeader className='text-center pb-4'>
              <div className='flex justify-center mb-2'>
                {getPlanIcon(plan.id)}
              </div>
              <CardTitle className='text-xl'>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>

              <div className='py-4'>
                {plan.price === 0 ? (
                  <div className='text-3xl font-bold'>Free</div>
                ) : (
                  <div className='flex items-baseline justify-center'>
                    <span className='text-3xl font-bold'>${plan.price}</span>
                    <span className='text-muted-foreground ml-1'>/month</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className='space-y-4'>
              {/* Features */}
              <div className='space-y-2'>
                {plan.features.map((feature, index) => (
                  <div key={index} className='flex items-center text-sm'>
                    <Check className='h-4 w-4 mr-2 text-green-500 flex-shrink-0' />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Limits Summary */}
              <div className='pt-4 border-t space-y-1 text-sm text-muted-foreground'>
                <div className='flex justify-between'>
                  <span>Notes:</span>
                  <span className='font-medium'>
                    {plan.limits.notes === -1 ? 'Unlimited' : plan.limits.notes}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span>Storage:</span>
                  <span className='font-medium'>
                    {formatStorageSize(plan.limits.storage)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span>Devices:</span>
                  <span className='font-medium'>
                    {plan.limits.devices === -1
                      ? 'Unlimited'
                      : plan.limits.devices}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className='pt-4'>
                {isCurrentPlan(plan.id) ? (
                  <Button variant='outline' className='w-full' disabled>
                    <Check className='h-4 w-4 mr-2' />
                    Current Plan
                  </Button>
                ) : canUpgrade(plan.id) ? (
                  <Button
                    onClick={() => handleUpgrade(plan.id as SubscriptionPlan)}
                    disabled={isUpgrading === plan.id || subscriptionLoading}
                    className='w-full'
                    variant={plan.id === 'premium' ? 'default' : 'outline'}
                  >
                    {isUpgrading === plan.id ? (
                      <>
                        <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                        Upgrading...
                      </>
                    ) : (
                      <>
                        <Crown className='h-4 w-4 mr-2' />
                        Upgrade to {plan.name}
                      </>
                    )}
                  </Button>
                ) : (
                  <Button variant='outline' className='w-full' disabled>
                    Downgrade not available
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Information */}
      <div className='mt-6 p-4 bg-muted rounded-lg'>
        <h4 className='font-medium mb-2'>What happens when you upgrade?</h4>
        <ul className='text-sm text-muted-foreground space-y-1'>
          <li>• Instant access to all premium features</li>
          <li>• Secure payment processing via Stripe</li>
          <li>• Cancel anytime from your billing portal</li>
          <li>• Prorated billing for plan changes</li>
        </ul>
      </div>
    </DialogContent>
  )

  if (trigger) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        {content}
      </Dialog>
    )
  }

  return content
}

// Standalone upgrade dialog trigger
export function UpgradeTrigger({
  children,
  ...props
}: UpgradeDialogProps & { children: React.ReactNode }) {
  return <UpgradeDialog trigger={children} {...props} />
}
