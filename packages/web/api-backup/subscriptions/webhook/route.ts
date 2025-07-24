/**
 * Stripe Webhook Handler
 * Processes Stripe events to update subscription status
 */

import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe, STRIPE_WEBHOOK_EVENTS, getPlanByPriceId } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  if (!stripe || !webhookSecret) {
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 500 }
    )
  }

  try {
    const body = await req.text()
    const signature = (await headers()).get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const supabase = createClient()

    switch (event.type) {
      case STRIPE_WEBHOOK_EVENTS.SUBSCRIPTION_CREATED:
      case STRIPE_WEBHOOK_EVENTS.SUBSCRIPTION_UPDATED: {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionChange(supabase, subscription)
        break
      }

      case STRIPE_WEBHOOK_EVENTS.SUBSCRIPTION_DELETED: {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(supabase, subscription)
        break
      }

      case STRIPE_WEBHOOK_EVENTS.INVOICE_PAID: {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaid(supabase, invoice)
        break
      }

      case STRIPE_WEBHOOK_EVENTS.INVOICE_FAILED: {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoiceFailed(supabase, invoice)
        break
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(supabase, session)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSubscriptionChange(
  supabase: any,
  subscription: Stripe.Subscription
) {
  try {
    const customerId = subscription.customer as string
    const priceId = subscription.items.data[0]?.price.id
    const plan = getPlanByPriceId(priceId)

    if (!plan) {
      console.error('Unknown price ID:', priceId)
      return
    }

    // Find user by customer ID
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('user_id')
      .eq('customer_id', customerId)
      .single()

    if (!existingSubscription) {
      console.error('User not found for customer:', customerId)
      return
    }

    // Update subscription
    await supabase
      .from('user_subscriptions')
      .update({
        subscription_id: subscription.id,
        plan: plan.id,
        status: subscription.status,
        current_period_start: subscription.current_period_start
          ? new Date(subscription.current_period_start * 1000).toISOString()
          : null,
        current_period_end: subscription.current_period_end
          ? new Date(subscription.current_period_end * 1000).toISOString()
          : null,
        trial_end: subscription.trial_end
          ? new Date(subscription.trial_end * 1000)
          : null,
        updated_at: new Date(),
      })
      .eq('user_id', existingSubscription.user_id)

    console.log('Subscription updated:', subscription.id)
  } catch (error) {
    console.error('Error handling subscription change:', error)
  }
}

async function handleSubscriptionDeleted(
  supabase: any,
  subscription: Stripe.Subscription
) {
  try {
    const customerId = subscription.customer as string

    // Find user by customer ID
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('user_id')
      .eq('customer_id', customerId)
      .single()

    if (!existingSubscription) {
      console.error('User not found for customer:', customerId)
      return
    }

    // Downgrade to free plan
    await supabase
      .from('user_subscriptions')
      .update({
        subscription_id: null,
        plan: 'free',
        status: 'canceled',
        current_period_start: null,
        current_period_end: null,
        trial_end: null,
        updated_at: new Date(),
      })
      .eq('user_id', existingSubscription.user_id)

    console.log('Subscription canceled, downgraded to free plan')
  } catch (error) {
    console.error('Error handling subscription deletion:', error)
  }
}

async function handleInvoicePaid(supabase: any, invoice: Stripe.Invoice) {
  try {
    const customerId = invoice.customer as string

    // Find user by customer ID
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('user_id')
      .eq('customer_id', customerId)
      .single()

    if (!existingSubscription) {
      console.error('User not found for customer:', customerId)
      return
    }

    // Update subscription status to active
    await supabase
      .from('user_subscriptions')
      .update({
        status: 'active',
        updated_at: new Date(),
      })
      .eq('user_id', existingSubscription.user_id)

    console.log('Invoice paid, subscription activated')
  } catch (error) {
    console.error('Error handling invoice payment:', error)
  }
}

async function handleInvoiceFailed(supabase: any, invoice: Stripe.Invoice) {
  try {
    const customerId = invoice.customer as string

    // Find user by customer ID
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('user_id')
      .eq('customer_id', customerId)
      .single()

    if (!existingSubscription) {
      console.error('User not found for customer:', customerId)
      return
    }

    // Update subscription status to past_due
    await supabase
      .from('user_subscriptions')
      .update({
        status: 'past_due',
        updated_at: new Date(),
      })
      .eq('user_id', existingSubscription.user_id)

    console.log('Invoice failed, subscription marked as past due')
  } catch (error) {
    console.error('Error handling invoice failure:', error)
  }
}

async function handleCheckoutCompleted(
  supabase: any,
  session: Stripe.Checkout.Session
) {
  try {
    // Update checkout session status
    await supabase
      .from('stripe_checkout_sessions')
      .update({
        status: 'completed',
        completed_at: new Date(),
      })
      .eq('session_id', session.id)

    console.log('Checkout session completed:', session.id)
  } catch (error) {
    console.error('Error handling checkout completion:', error)
  }
}
