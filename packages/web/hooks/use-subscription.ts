/**
 * Subscription Management Hook
 * Handles user subscription state and operations
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import { useUser } from './use-user'
import { createClient } from '@/utils/supabase/client'
import {
  SUBSCRIPTION_PLANS,
  SubscriptionPlan,
  getPlanById,
  isWithinLimits,
  getUsagePercentage,
} from '@/lib/stripe'

export interface UserSubscription {
  id: string
  user_id: string
  subscription_id?: string
  customer_id?: string
  plan: SubscriptionPlan
  status: 'active' | 'canceled' | 'past_due' | 'incomplete' | 'trialing'
  current_period_start?: Date
  current_period_end?: Date
  trial_end?: Date
  created_at: Date
  updated_at: Date
}

export interface UsageData {
  notes: number
  storage: number
  devices: number
  exports: number
  aiRequests: number
  teamMembers?: number
}

interface SubscriptionState {
  subscription: UserSubscription | null
  usage: UsageData | null
  isLoading: boolean
  error: string | null
}

export function useSubscription() {
  const { user } = useUser()
  const [state, setState] = useState<SubscriptionState>({
    subscription: null,
    usage: null,
    isLoading: true,
    error: null,
  })

  const supabase = createClient()

  // Fetch subscription data
  const fetchSubscription = useCallback(async () => {
    if (!user) {
      setState((prev) => ({ ...prev, isLoading: false, subscription: null }))
      return
    }

    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))

      // Fetch subscription
      const { data: subscription, error: subscriptionError } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (subscriptionError) {
        // If no subscription exists, create a free one
        if (subscriptionError.code === 'PGRST116') {
          const { data: newSubscription, error: createError } = await supabase
            .from('user_subscriptions')
            .insert({
              user_id: user.id,
              plan: 'free',
              status: 'active',
            })
            .select()
            .single()

          if (createError) throw createError

          setState((prev) => ({
            ...prev,
            subscription: {
              ...newSubscription,
              current_period_start: newSubscription.current_period_start
                ? new Date(newSubscription.current_period_start)
                : undefined,
              current_period_end: newSubscription.current_period_end
                ? new Date(newSubscription.current_period_end)
                : undefined,
              trial_end: newSubscription.trial_end
                ? new Date(newSubscription.trial_end)
                : undefined,
              created_at: new Date(newSubscription.created_at),
              updated_at: new Date(newSubscription.updated_at),
            },
            isLoading: false,
          }))
          return
        }
        throw subscriptionError
      }

      setState((prev) => ({
        ...prev,
        subscription: {
          ...subscription,
          current_period_start: subscription.current_period_start
            ? new Date(subscription.current_period_start)
            : undefined,
          current_period_end: subscription.current_period_end
            ? new Date(subscription.current_period_end)
            : undefined,
          trial_end: subscription.trial_end
            ? new Date(subscription.trial_end)
            : undefined,
          created_at: new Date(subscription.created_at),
          updated_at: new Date(subscription.updated_at),
        },
        isLoading: false,
      }))
    } catch (error) {
      console.error('Failed to fetch subscription:', error)
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }))
    }
  }, [user, supabase])

  // Fetch usage stats
  const fetchUsage = useCallback(async () => {
    if (!user) {
      setState((prev) => ({ ...prev, usage: null }))
      return
    }

    try {
      // Get current usage from subscription_usage table
      const { data: usageData, error: usageError } = await supabase
        .from('subscription_usage')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (usageError && usageError.code !== 'PGRST116') {
        throw usageError
      }

      // If no usage record exists, create one with default values
      if (!usageData) {
        const defaultUsage = {
          user_id: user.id,
          notes_count: 0,
          storage_used: 0,
          devices_count: 1,
          exports_count: 0,
          ai_requests_count: 0,
        }

        const { data: newUsage, error: createError } = await supabase
          .from('subscription_usage')
          .insert(defaultUsage)
          .select()
          .single()

        if (createError) throw createError

        setState((prev) => ({
          ...prev,
          usage: {
            notes: newUsage.notes_count,
            storage: newUsage.storage_used,
            devices: newUsage.devices_count,
            exports: newUsage.exports_count,
            aiRequests: newUsage.ai_requests_count,
          },
        }))
        return
      }

      setState((prev) => ({
        ...prev,
        usage: {
          notes: usageData.notes_count,
          storage: usageData.storage_used,
          devices: usageData.devices_count,
          exports: usageData.exports_count,
          aiRequests: usageData.ai_requests_count,
          teamMembers: usageData.team_members_count,
        },
      }))
    } catch (error) {
      console.error('Failed to fetch usage:', error)
    }
  }, [user, supabase])

  // Initialize data on user change
  useEffect(() => {
    if (user) {
      Promise.all([fetchSubscription(), fetchUsage()])
    } else {
      setState({
        subscription: null,
        usage: null,
        isLoading: false,
        error: null,
      })
    }
  }, [user, fetchSubscription, fetchUsage])

  // Subscribe to real-time updates
  useEffect(() => {
    if (!user) return

    const subscriptionChannel = supabase
      .channel('user_subscription_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_subscriptions',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchSubscription()
        }
      )
      .subscribe()

    const usageChannel = supabase
      .channel('usage_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'subscription_usage',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchUsage()
        }
      )
      .subscribe()

    return () => {
      subscriptionChannel.unsubscribe()
      usageChannel.unsubscribe()
    }
  }, [user, supabase, fetchSubscription, fetchUsage])

  // Helper functions
  const currentPlan = state.subscription?.plan || 'free'
  const planConfig = getPlanById(currentPlan)

  const isLoading = state.isLoading
  const error = state.error

  // Check if user can perform an action
  const canPerformAction = useCallback(
    (action: keyof UsageData): boolean => {
      if (!state.usage || !state.subscription) return false

      const limits = planConfig.limits
      const currentUsage = state.usage[action]
      const limit = limits[action]

      // -1 means unlimited
      if (limit === -1) return true

      return typeof currentUsage === 'number' && currentUsage < limit
    },
    [state.usage, state.subscription, planConfig]
  )

  // Check if approaching limit
  const isApproachingLimit = useCallback(
    (action: keyof UsageData, threshold = 0.8): boolean => {
      if (!state.usage || !state.subscription) return false

      const limits = planConfig.limits
      const currentUsage = state.usage[action]
      const limit = limits[action]

      // -1 means unlimited
      if (limit === -1) return false

      return (
        typeof currentUsage === 'number' && currentUsage / limit >= threshold
      )
    },
    [state.usage, state.subscription, planConfig]
  )

  // Get usage percentage
  const getUsagePercent = useCallback(
    (action: keyof UsageData): number => {
      if (!state.usage || !state.subscription) return 0

      const currentUsage = state.usage[action]
      const limit = planConfig.limits[action]

      return getUsagePercentage(
        typeof currentUsage === 'number' ? currentUsage : 0,
        limit
      )
    },
    [state.usage, state.subscription, planConfig]
  )

  // Check if within all limits
  const isWithinAllLimits = useCallback((): {
    isWithin: boolean
    exceededLimits: string[]
  } => {
    if (!state.usage || !state.subscription) {
      return { isWithin: true, exceededLimits: [] }
    }

    return isWithinLimits(state.usage, currentPlan)
  }, [state.usage, state.subscription, currentPlan])

  // Track usage
  const trackUsage = useCallback(
    async (action: keyof UsageData, increment = 1) => {
      if (!user) return false

      try {
        const { error } = await supabase.rpc('increment_usage', {
          p_user_id: user.id,
          p_action: action,
          p_increment: increment,
        })

        if (error) throw error

        // Refresh usage data
        await fetchUsage()
        return true
      } catch (error) {
        console.error('Failed to track usage:', error)
        return false
      }
    },
    [user, supabase, fetchUsage]
  )

  // Create checkout session
  const createCheckoutSession = useCallback(
    async (planId: SubscriptionPlan) => {
      if (!user) throw new Error('User not authenticated')

      const plan = getPlanById(planId)
      if (!plan.priceId) throw new Error('Invalid plan')

      const response = await fetch('/api/subscriptions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.priceId,
          successUrl: `${window.location.origin}/dashboard/billing?success=true`,
          cancelUrl: `${window.location.origin}/dashboard/billing?canceled=true`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { url } = await response.json()
      window.location.href = url
    },
    [user]
  )

  // Create billing portal session
  const createBillingPortalSession = useCallback(async () => {
    if (!user || !state.subscription?.customer_id) {
      throw new Error('No customer ID found')
    }

    const response = await fetch('/api/subscriptions/billing-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        returnUrl: `${window.location.origin}/dashboard/billing`,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create billing portal session')
    }

    const { url } = await response.json()
    window.location.href = url
  }, [user, state.subscription])

  // Check if subscription is premium
  const isPremium = currentPlan !== 'free'

  // Check if subscription is active
  const isActive = state.subscription?.status === 'active'

  // Check if in trial
  const isInTrial = !!(
    state.subscription?.trial_end && new Date() < state.subscription.trial_end
  )

  return {
    // Data
    subscription: state.subscription,
    usage: state.usage,
    currentPlan,
    planConfig,

    // Status
    isLoading,
    error,
    isPremium,
    isActive,
    isInTrial,

    // Functions
    canPerformAction,
    isApproachingLimit,
    getUsagePercent,
    isWithinAllLimits,
    trackUsage,
    createCheckoutSession,
    createBillingPortalSession,

    // Refresh functions
    refreshSubscription: fetchSubscription,
    refreshUsage: fetchUsage,
  }
}
