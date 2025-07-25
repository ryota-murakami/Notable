/**
 * Analytics consent component
 * GDPR compliant consent management for analytics tracking
 */

'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { useAnalytics } from '@/hooks/use-analytics'
import { AnalyticsConfig } from '@/lib/analytics'

interface ConsentOption {
  key: keyof AnalyticsConfig
  label: string
  description: string
  required?: boolean
}

const CONSENT_OPTIONS: ConsentOption[] = [
  {
    key: 'performanceTracking',
    label: 'Performance Analytics',
    description:
      'Help us improve app performance by tracking loading times and technical metrics',
    required: false,
  },
  {
    key: 'errorTracking',
    label: 'Error Reporting',
    description:
      'Automatically report errors to help us fix bugs and improve stability',
    required: false,
  },
  {
    key: 'userInteractionTracking',
    label: 'Usage Analytics',
    description:
      'Track how you use the app to help us improve the user experience',
    required: false,
  },
  {
    key: 'usageStatistics',
    label: 'Feature Usage',
    description:
      'Collect statistics about which features are used most to guide development',
    required: false,
  },
]

interface AnalyticsConsentProps {
  onComplete?: (consent: boolean) => void
  className?: string
}

export function AnalyticsConsent({
  onComplete,
  className,
}: AnalyticsConsentProps) {
  const { setConsent, updateConfig } = useAnalytics()
  const [preferences, setPreferences] = useState<Partial<AnalyticsConfig>>({
    performanceTracking: true,
    errorTracking: true,
    userInteractionTracking: false,
    usageStatistics: true,
  })
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('analytics-consent')
    if (!hasConsent) {
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allEnabled = CONSENT_OPTIONS.reduce((config, option) => {
      config[option.key] = true
      return config
    }, {} as Partial<AnalyticsConfig>)

    updateConfig(allEnabled)
    setConsent(true)
    setShowConsent(false)
    onComplete?.(true)
  }

  const handleAcceptSelected = () => {
    updateConfig(preferences)
    setConsent(true)
    setShowConsent(false)
    onComplete?.(true)
  }

  const handleDeclineAll = () => {
    const allDisabled = CONSENT_OPTIONS.reduce((config, option) => {
      config[option.key] = false
      return config
    }, {} as Partial<AnalyticsConfig>)

    updateConfig(allDisabled)
    setConsent(false)
    setShowConsent(false)
    onComplete?.(false)
  }

  const handlePreferenceChange = (
    key: keyof AnalyticsConfig,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  if (!showConsent) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 ${className}`}
    >
      <Card className='max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <CardHeader>
          <CardTitle>Privacy & Analytics Settings</CardTitle>
          <CardDescription>
            We respect your privacy. Choose what data you'd like to share to
            help us improve Notable. You can change these settings anytime in
            your preferences.
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Analytics Preferences</h3>

            {CONSENT_OPTIONS.map((option) => (
              <div key={option.key} className='flex items-start space-x-3'>
                <Checkbox
                  id={option.key}
                  checked={preferences[option.key] || false}
                  onCheckedChange={(checked) =>
                    handlePreferenceChange(option.key, checked as boolean)
                  }
                  disabled={option.required}
                />
                <div className='space-y-1 text-sm'>
                  <label
                    htmlFor={option.key}
                    className='font-medium cursor-pointer'
                  >
                    {option.label}
                    {option.required && (
                      <span className='text-red-500 ml-1'>*</span>
                    )}
                  </label>
                  <p className='text-muted-foreground text-xs'>
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-muted p-4 rounded-lg text-xs text-muted-foreground space-y-2'>
            <h4 className='font-medium text-foreground'>
              Privacy Information:
            </h4>
            <ul className='space-y-1'>
              <li>• All data is anonymized and encrypted</li>
              <li>
                • No personal information is collected without explicit consent
              </li>
              <li>• You can export or delete your data at any time</li>
              <li>• We comply with GDPR and other privacy regulations</li>
              <li>• Data is only used to improve the Notable experience</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className='flex flex-col space-y-2'>
          <div className='flex space-x-2 w-full'>
            <Button
              variant='outline'
              onClick={handleDeclineAll}
              className='flex-1'
            >
              Decline All
            </Button>
            <Button
              variant='secondary'
              onClick={handleAcceptSelected}
              className='flex-1'
            >
              Accept Selected
            </Button>
            <Button onClick={handleAcceptAll} className='flex-1'>
              Accept All
            </Button>
          </div>

          <p className='text-xs text-muted-foreground text-center'>
            By continuing, you agree to our{' '}
            <a href='/privacy' className='underline hover:no-underline'>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href='/terms' className='underline hover:no-underline'>
              Terms of Service
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

/**
 * Privacy settings panel for user preferences
 */
export function AnalyticsSettings() {
  const { updateConfig, exportData, deleteUserData } = useAnalytics()
  const [preferences, setPreferences] = useState<Partial<AnalyticsConfig>>({})
  const [isExporting, setIsExporting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    // Load current preferences from localStorage or API
    const savedPreferences = localStorage.getItem('analytics-preferences')
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const handlePreferenceChange = (
    key: keyof AnalyticsConfig,
    value: boolean
  ) => {
    const newPreferences = {
      ...preferences,
      [key]: value,
    }
    setPreferences(newPreferences)
    updateConfig(newPreferences)

    // Save to localStorage
    localStorage.setItem(
      'analytics-preferences',
      JSON.stringify(newPreferences)
    )
  }

  const handleExportData = async () => {
    setIsExporting(true)
    try {
      const data = exportData()
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `notable-analytics-data-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to export analytics data:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleDeleteData = async () => {
    setIsDeleting(true)
    try {
      deleteUserData()
      setPreferences({})
      localStorage.removeItem('analytics-preferences')
      localStorage.removeItem('analytics-consent')
    } catch (error) {
      console.error('Failed to delete analytics data:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics & Privacy Settings</CardTitle>
        <CardDescription>
          Manage your analytics preferences and data privacy settings
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h3 className='text-sm font-medium'>Current Preferences</h3>

          {CONSENT_OPTIONS.map((option) => (
            <div key={option.key} className='flex items-start space-x-3'>
              <Checkbox
                id={`settings-${option.key}`}
                checked={preferences[option.key] || false}
                onCheckedChange={(checked) =>
                  handlePreferenceChange(option.key, checked as boolean)
                }
              />
              <div className='space-y-1 text-sm'>
                <label
                  htmlFor={`settings-${option.key}`}
                  className='font-medium cursor-pointer'
                >
                  {option.label}
                </label>
                <p className='text-muted-foreground text-xs'>
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium'>Data Management</h3>

          <div className='flex space-x-2'>
            <Button
              variant='outline'
              onClick={handleExportData}
              disabled={isExporting}
            >
              {isExporting ? 'Exporting...' : 'Export My Data'}
            </Button>

            <Button
              variant='destructive'
              onClick={handleDeleteData}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete All Data'}
            </Button>
          </div>

          <p className='text-xs text-muted-foreground'>
            Export: Download all analytics data associated with your account.
            <br />
            Delete: Permanently remove all analytics data and reset preferences.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
