/**
 * Billing Dashboard Page
 * Comprehensive billing and subscription management interface
 */

'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SubscriptionCard } from '@/components/billing/subscription-card'
import { UsageMeter } from '@/components/billing/usage-meter'
import { UpgradeDialog } from '@/components/billing/upgrade-dialog'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  CreditCard,
  Crown,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  History,
  Receipt,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function BillingContent() {
  const searchParams = useSearchParams()
  const [alert, setAlert] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    // Handle checkout success/cancel redirects
    if (searchParams.get('success')) {
      setAlert({
        type: 'success',
        message:
          'Subscription updated successfully! It may take a few moments to reflect in your account.',
      })
      // Clear the URL parameter
      window.history.replaceState(null, '', '/dashboard/billing')
    } else if (searchParams.get('canceled')) {
      setAlert({
        type: 'error',
        message:
          'Checkout was canceled. No changes were made to your subscription.',
      })
      // Clear the URL parameter
      window.history.replaceState(null, '', '/dashboard/billing')
    }
  }, [searchParams])

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='border-b bg-card/50 backdrop-blur'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Link href='/dashboard'>
                <Button variant='ghost' size='sm'>
                  <ArrowLeft className='h-4 w-4 mr-2' />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className='text-2xl font-bold flex items-center'>
                  <CreditCard className='h-6 w-6 mr-2' />
                  Billing & Subscription
                </h1>
                <p className='text-muted-foreground'>
                  Manage your subscription and view usage metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        {/* Success/Error Alert */}
        {alert && (
          <Alert
            className={`mb-6 ${alert.type === 'success' ? 'border-green-500' : 'border-red-500'}`}
          >
            {alert.type === 'success' ? (
              <CheckCircle className='h-4 w-4 text-green-500' />
            ) : (
              <AlertTriangle className='h-4 w-4 text-red-500' />
            )}
            <AlertDescription
              className={
                alert.type === 'success'
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }
            >
              {alert.message}
            </AlertDescription>
          </Alert>
        )}

        <div className='grid gap-6'>
          {/* Current Subscription */}
          <SubscriptionCard />

          {/* Usage Overview */}
          <UsageMeter />

          {/* Quick Actions */}
          <div className='grid md:grid-cols-2 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Crown className='h-5 w-5 mr-2' />
                  Upgrade Plan
                </CardTitle>
                <CardDescription>
                  Unlock more features and higher limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  Get access to unlimited notes, advanced collaboration
                  features, and priority support.
                </p>
                <UpgradeDialog
                  trigger={
                    <Button className='w-full'>
                      <Crown className='h-4 w-4 mr-2' />
                      View Plans
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Receipt className='h-5 w-5 mr-2' />
                  Billing History
                </CardTitle>
                <CardDescription>
                  View your invoices and payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  Access your complete billing history and download invoices for
                  your records.
                </p>
                <Button variant='outline' className='w-full' disabled>
                  <History className='h-4 w-4 mr-2' />
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Security & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Shield className='h-5 w-5 mr-2' />
                Security & Privacy
              </CardTitle>
              <CardDescription>
                Your payment information is secure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-medium mb-2'>Payment Security</h4>
                  <ul className='text-sm text-muted-foreground space-y-1'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      PCI DSS compliant processing
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      256-bit SSL encryption
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      Powered by Stripe
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-medium mb-2'>Privacy</h4>
                  <ul className='text-sm text-muted-foreground space-y-1'>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      No credit card data stored
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      GDPR compliant
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='h-4 w-4 mr-2 text-green-500' />
                      Cancel anytime
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h4 className='font-medium'>Can I change my plan anytime?</h4>
                <p className='text-sm text-muted-foreground'>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes are prorated automatically.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className='font-medium'>
                  What happens if I exceed my limits?
                </h4>
                <p className='text-sm text-muted-foreground'>
                  We'll notify you when you're approaching limits. You can
                  upgrade your plan or wait for the next billing cycle to reset
                  usage.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className='font-medium'>Is there a free trial?</h4>
                <p className='text-sm text-muted-foreground'>
                  New users get a 14-day free trial of the Premium plan. No
                  credit card required.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className='font-medium'>How do refunds work?</h4>
                <p className='text-sm text-muted-foreground'>
                  We offer prorated refunds for downgrades and cancellations.
                  Contact support for assistance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default function BillingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BillingContent />
    </Suspense>
  )
}
