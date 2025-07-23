/**
 * Usage Meter Component
 * Displays current usage metrics with progress bars
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
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  HardDrive,
  Smartphone,
  Download,
  Users,
  Zap,
  AlertTriangle,
  Crown,
  TrendingUp,
} from 'lucide-react'
import { formatStorageSize } from '@/lib/stripe'
import { UpgradeDialog } from './upgrade-dialog'
import { useState } from 'react'

interface UsageItemProps {
  icon: React.ReactNode
  label: string
  current: number
  limit: number
  unit?: string
  formatValue?: (value: number) => string
  isApproachingLimit?: boolean
  isOverLimit?: boolean
}

function UsageItem({
  icon,
  label,
  current,
  limit,
  unit = '',
  formatValue,
  isApproachingLimit = false,
  isOverLimit = false,
}: UsageItemProps) {
  const percentage = limit === -1 ? 0 : Math.min((current / limit) * 100, 100)
  const displayCurrent = formatValue ? formatValue(current) : current.toString()
  const displayLimit =
    limit === -1
      ? 'Unlimited'
      : formatValue
        ? formatValue(limit)
        : limit.toString()

  const getProgressColor = () => {
    if (isOverLimit) return 'bg-red-500'
    if (isApproachingLimit) return 'bg-yellow-500'
    return 'bg-primary'
  }

  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          {icon}
          <span className='text-sm font-medium'>{label}</span>
          {isApproachingLimit && (
            <Badge variant='secondary' className='text-xs'>
              <AlertTriangle className='h-3 w-3 mr-1' />
              Near limit
            </Badge>
          )}
          {isOverLimit && (
            <Badge variant='destructive' className='text-xs'>
              <AlertTriangle className='h-3 w-3 mr-1' />
              Over limit
            </Badge>
          )}
        </div>
        <div className='text-sm text-muted-foreground'>
          {displayCurrent} / {displayLimit} {unit}
        </div>
      </div>

      {limit !== -1 && (
        <div className='space-y-1'>
          <Progress
            value={percentage}
            className='h-2'
            indicatorClassName={getProgressColor()}
          />
          <div className='text-xs text-muted-foreground text-right'>
            {percentage.toFixed(1)}% used
          </div>
        </div>
      )}

      {limit === -1 && (
        <div className='text-xs text-green-600 dark:text-green-400 flex items-center'>
          <Crown className='h-3 w-3 mr-1' />
          Unlimited usage
        </div>
      )}
    </div>
  )
}

export function UsageMeter() {
  const {
    usage,
    planConfig,
    currentPlan,
    isLoading,
    error,
    getUsagePercent,
    isApproachingLimit,
    canPerformAction,
  } = useSubscription()

  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false)

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <TrendingUp className='h-5 w-5 mr-2' />
            Usage Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='animate-pulse space-y-4'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className='space-y-2'>
                <div className='h-4 bg-muted rounded w-3/4'></div>
                <div className='h-2 bg-muted rounded w-full'></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !usage) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center text-destructive'>
            <AlertTriangle className='h-5 w-5 mr-2' />
            Error Loading Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground'>
            {error || 'Unable to load usage data'}
          </p>
        </CardContent>
      </Card>
    )
  }

  const usageItems = [
    {
      icon: <FileText className='h-4 w-4 text-blue-500' />,
      label: 'Notes',
      current: usage.notes,
      limit: planConfig.limits.notes,
      key: 'notes' as keyof typeof usage,
    },
    {
      icon: <HardDrive className='h-4 w-4 text-purple-500' />,
      label: 'Storage',
      current: usage.storage,
      limit: planConfig.limits.storage,
      formatValue: formatStorageSize,
      key: 'storage' as keyof typeof usage,
    },
    {
      icon: <Smartphone className='h-4 w-4 text-green-500' />,
      label: 'Devices',
      current: usage.devices,
      limit: planConfig.limits.devices,
      key: 'devices' as keyof typeof usage,
    },
    {
      icon: <Download className='h-4 w-4 text-orange-500' />,
      label: 'Exports',
      current: usage.exports,
      limit: planConfig.limits.exports,
      unit: 'this month',
      key: 'exports' as keyof typeof usage,
    },
    {
      icon: <Users className='h-4 w-4 text-cyan-500' />,
      label: 'Collaborators',
      current: usage.collaborators,
      limit: planConfig.limits.collaborators,
      key: 'collaborators' as keyof typeof usage,
    },
    {
      icon: <Zap className='h-4 w-4 text-yellow-500' />,
      label: 'AI Requests',
      current: usage.aiRequests,
      limit: planConfig.limits.aiRequests,
      unit: 'this month',
      key: 'aiRequests' as keyof typeof usage,
    },
  ]

  // Filter out team members for non-team plans
  const visibleItems = usageItems.filter(
    (item) => item.key !== 'teamMembers' || currentPlan === 'team'
  )

  // Check if any limits are being approached or exceeded
  const hasWarnings = visibleItems.some(
    (item) => isApproachingLimit(item.key, 0.8) || !canPerformAction(item.key)
  )

  return (
    <>
      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle className='flex items-center'>
                <TrendingUp className='h-5 w-5 mr-2' />
                Usage Overview
              </CardTitle>
              <CardDescription>
                Track your usage across all plan limits
              </CardDescription>
            </div>
            {hasWarnings && currentPlan === 'free' && (
              <Button
                onClick={() => setShowUpgradeDialog(true)}
                size='sm'
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              >
                <Crown className='h-4 w-4 mr-2' />
                Upgrade
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className='space-y-6'>
          {visibleItems.map((item) => (
            <UsageItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              current={item.current}
              limit={item.limit}
              unit={item.unit}
              formatValue={item.formatValue}
              isApproachingLimit={isApproachingLimit(item.key, 0.8)}
              isOverLimit={!canPerformAction(item.key)}
            />
          ))}

          {/* Current Plan Badge */}
          <div className='pt-4 border-t'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Badge variant='outline' className='capitalize'>
                  {planConfig.name} Plan
                </Badge>
                {currentPlan === 'free' && (
                  <span className='text-xs text-muted-foreground'>
                    Limited features
                  </span>
                )}
              </div>
              {currentPlan === 'free' && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setShowUpgradeDialog(true)}
                  className='text-purple-600 hover:text-purple-700'
                >
                  <Crown className='h-4 w-4 mr-1' />
                  See plans
                </Button>
              )}
            </div>
          </div>

          {/* Usage Warnings */}
          {hasWarnings && (
            <div className='p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800'>
              <div className='flex items-start space-x-2'>
                <AlertTriangle className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                <div className='text-sm'>
                  <p className='font-medium text-yellow-800 dark:text-yellow-200 mb-1'>
                    Approaching Usage Limits
                  </p>
                  <p className='text-yellow-700 dark:text-yellow-300'>
                    You're near or over some plan limits. Consider upgrading to
                    avoid interruptions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <UpgradeDialog
        open={showUpgradeDialog}
        onOpenChange={setShowUpgradeDialog}
      />
    </>
  )
}
