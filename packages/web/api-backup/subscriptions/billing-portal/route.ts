/**
 * Stripe Billing Portal API Route
 * Creates a session for customers to manage their billing
 */

import { NextRequest, NextResponse } from 'next/server'
import { createBillingPortalSession } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const { returnUrl } = await req.json()

    if (!returnUrl) {
      return NextResponse.json({ error: 'Missing return URL' }, { status: 400 })
    }

    // Get authenticated user
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'User not authenticated' },
        { status: 401 }
      )
    }

    // Get user's subscription to find customer ID
    const { data: subscription, error: subscriptionError } = await supabase
      .from('user_subscriptions')
      .select('customer_id')
      .eq('user_id', user.id)
      .single()

    if (subscriptionError || !subscription?.customer_id) {
      return NextResponse.json(
        { error: 'No customer found for user' },
        { status: 400 }
      )
    }

    // Create billing portal session
    const session = await createBillingPortalSession({
      customerId: subscription.customer_id,
      returnUrl,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating billing portal session:', error)
    return NextResponse.json(
      { error: 'Failed to create billing portal session' },
      { status: 500 }
    )
  }
}
