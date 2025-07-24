/**
 * Stripe Checkout Session Creation API Route
 * Creates a new checkout session for subscription upgrades
 */

import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession, createOrRetrieveCustomer } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const { priceId, successUrl, cancelUrl, trialDays } = await req.json()

    if (!priceId || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
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

    // Get or create Stripe customer
    const customer = await createOrRetrieveCustomer({
      email: user.email!,
      userId: user.id,
      name: user.user_metadata?.name,
    })

    // Check if user already has a subscription
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single()

    // If user has an active subscription, prevent creating another checkout
    if (existingSubscription && existingSubscription.status === 'active') {
      return NextResponse.json(
        { error: 'User already has an active subscription' },
        { status: 400 }
      )
    }

    // Create checkout session
    const session = await createCheckoutSession({
      customerId: customer.id,
      priceId,
      successUrl,
      cancelUrl,
      trialDays,
    })

    // Store checkout session in database for webhook processing
    await supabase.from('stripe_checkout_sessions').upsert({
      session_id: session.id,
      user_id: user.id,
      customer_id: customer.id,
      price_id: priceId,
      status: 'pending',
      created_at: new Date().toISOString(),
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
