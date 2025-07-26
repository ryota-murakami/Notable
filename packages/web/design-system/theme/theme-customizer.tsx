'use client'

import * as React from 'react'
import { type ThemeConfig, themes } from './theme-config'
import { useTheme } from './theme-provider'
import { cn } from '../utils/theme'

interface ThemeCustomizerProps {
  className?: string
  onSave?: (theme: ThemeConfig) => void
}

export function ThemeCustomizer({ className, onSave }: ThemeCustomizerProps) {
  const { theme: currentTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [customTheme, setCustomTheme] = React.useState<ThemeConfig>(() => ({
    ...(themes[currentTheme as keyof typeof themes] || themes.light),
    name: 'custom',
    displayName: 'Custom Theme',
  }))

  // Color picker component
  const ColorPicker = ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: string
    onChange: (value: string) => void
  }) => {
    // Convert OKLCH to hex for color picker (simplified)
    const oklchToHex = (oklch: string): string => {
      // This is a simplified conversion - in production, use a proper color library
      return '#6366f1' // Default brand color
    }

    const hexToOklch = (hex: string): string => {
      // This is a simplified conversion - in production, use a proper color library
      return 'oklch(0.623 0.214 259.815)'
    }

    return (
      <div className='flex items-center justify-between py-2'>
        <label className='text-sm font-medium'>{label}</label>
        <div className='flex items-center gap-2'>
          <input
            type='color'
            value={oklchToHex(value)}
            onChange={(e) => onChange(hexToOklch(e.target.value))}
            className='h-8 w-8 rounded border border-input cursor-pointer'
          />
          <input
            type='text'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-40 px-2 py-1 text-xs font-mono bg-background border border-input rounded'
          />
        </div>
      </div>
    )
  }

  const updateColor = (
    colorKey: keyof ThemeConfig['colors'],
    value: string
  ) => {
    setCustomTheme((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value,
      },
    }))
  }

  const handleSave = () => {
    if (onSave) {
      onSave(customTheme)
    }
    // In a real app, you'd save this to localStorage or a database
    localStorage.setItem('notable-custom-theme', JSON.stringify(customTheme))
    setIsOpen(false)
  }

  const handleReset = () => {
    const baseTheme =
      themes[currentTheme as keyof typeof themes] || themes.light
    setCustomTheme({
      ...baseTheme,
      name: 'custom',
      displayName: 'Custom Theme',
    })
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium',
          'bg-secondary text-secondary-foreground rounded-lg',
          'hover:bg-secondary/80 transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          className
        )}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
          <path d='M19 3v4' />
          <path d='M21 5h-4' />
        </svg>
        Customize Theme
      </button>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50'>
          <div className='w-full max-w-2xl max-h-[90vh] bg-background rounded-xl shadow-lg overflow-hidden'>
            {/* Header */}
            <div className='flex items-center justify-between p-6 border-b'>
              <h2 className='text-lg font-semibold'>Theme Customizer</h2>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 hover:bg-accent rounded-lg transition-colors'
                aria-label='Close'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-180px)]'>
              <div className='space-y-6'>
                {/* Theme Name */}
                <div>
                  <label className='text-sm font-medium'>Theme Name</label>
                  <input
                    type='text'
                    value={customTheme.displayName}
                    onChange={(e) =>
                      setCustomTheme((prev) => ({
                        ...prev,
                        displayName: e.target.value,
                      }))
                    }
                    className='mt-1 w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring'
                  />
                </div>

                {/* Base Colors */}
                <div>
                  <h3 className='text-sm font-semibold mb-3'>Base Colors</h3>
                  <div className='space-y-1'>
                    <ColorPicker
                      label='Background'
                      value={customTheme.colors.background}
                      onChange={(v) => updateColor('background', v)}
                    />
                    <ColorPicker
                      label='Foreground'
                      value={customTheme.colors.foreground}
                      onChange={(v) => updateColor('foreground', v)}
                    />
                    <ColorPicker
                      label='Primary'
                      value={customTheme.colors.primary}
                      onChange={(v) => updateColor('primary', v)}
                    />
                    <ColorPicker
                      label='Secondary'
                      value={customTheme.colors.secondary}
                      onChange={(v) => updateColor('secondary', v)}
                    />
                    <ColorPicker
                      label='Accent'
                      value={customTheme.colors.accent}
                      onChange={(v) => updateColor('accent', v)}
                    />
                    <ColorPicker
                      label='Border'
                      value={customTheme.colors.border}
                      onChange={(v) => updateColor('border', v)}
                    />
                  </div>
                </div>

                {/* Semantic Colors */}
                <div>
                  <h3 className='text-sm font-semibold mb-3'>
                    Semantic Colors
                  </h3>
                  <div className='space-y-1'>
                    <ColorPicker
                      label='Success'
                      value={customTheme.colors.success}
                      onChange={(v) => updateColor('success', v)}
                    />
                    <ColorPicker
                      label='Warning'
                      value={customTheme.colors.warning}
                      onChange={(v) => updateColor('warning', v)}
                    />
                    <ColorPicker
                      label='Error'
                      value={customTheme.colors.destructive}
                      onChange={(v) => updateColor('destructive', v)}
                    />
                    <ColorPicker
                      label='Info'
                      value={customTheme.colors.info}
                      onChange={(v) => updateColor('info', v)}
                    />
                  </div>
                </div>

                {/* Preview */}
                <div>
                  <h3 className='text-sm font-semibold mb-3'>Preview</h3>
                  <div
                    className='p-4 rounded-lg border'
                    style={{
                      backgroundColor: customTheme.colors.background,
                      color: customTheme.colors.foreground,
                      borderColor: customTheme.colors.border,
                    }}
                  >
                    <h4
                      className='text-lg font-semibold mb-2'
                      style={{ color: customTheme.colors.foreground }}
                    >
                      Preview Text
                    </h4>
                    <p
                      className='mb-4'
                      style={{ color: customTheme.colors.mutedForeground }}
                    >
                      This is how your theme will look with different text
                      styles.
                    </p>
                    <div className='flex gap-2'>
                      <button
                        className='px-3 py-1.5 rounded text-sm font-medium'
                        style={{
                          backgroundColor: customTheme.colors.primary,
                          color: customTheme.colors.primaryForeground,
                        }}
                      >
                        Primary
                      </button>
                      <button
                        className='px-3 py-1.5 rounded text-sm font-medium'
                        style={{
                          backgroundColor: customTheme.colors.secondary,
                          color: customTheme.colors.secondaryForeground,
                        }}
                      >
                        Secondary
                      </button>
                      <button
                        className='px-3 py-1.5 rounded text-sm font-medium'
                        style={{
                          backgroundColor: customTheme.colors.destructive,
                          color: customTheme.colors.destructiveForeground,
                        }}
                      >
                        Destructive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between p-6 border-t'>
              <button
                onClick={handleReset}
                className='px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                Reset to Current
              </button>
              <div className='flex gap-3'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className='px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
                >
                  Save Theme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
