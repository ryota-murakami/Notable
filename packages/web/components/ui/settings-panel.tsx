'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../../design-system/components/button'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '../../design-system/components/modal'
import {
  XIcon,
  UserIcon,
  PaletteIcon,
  SettingsIcon,
  KeyboardIcon,
  ShieldIcon,
  DatabaseIcon,
  HelpCircleIcon,
  BellIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
  SmartphoneIcon,
} from 'lucide-react'

export interface SettingsSection {
  id: string
  label: string
  icon: React.ReactNode
  component: React.ReactNode
}

interface SettingsPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sections?: SettingsSection[]
  defaultSection?: string
  className?: string
}

export function SettingsPanel({
  open,
  onOpenChange,
  sections = [],
  defaultSection,
  className,
}: SettingsPanelProps) {
  const [activeSection, setActiveSection] = React.useState(
    defaultSection || sections[0]?.id || 'general'
  )

  const currentSection = sections.find(
    (section) => section.id === activeSection
  )

  return (
    <Modal open={open} onClose={() => onOpenChange(false)} size='xl'>
      <ModalHeader>
        <ModalTitle className='flex items-center gap-2'>
          <SettingsIcon className='h-5 w-5' />
          Settings
        </ModalTitle>
      </ModalHeader>

      <ModalBody className={cn('p-0', className)}>
        <div className='flex h-96'>
          {/* Sidebar */}
          <div className='w-48 border-r border-border p-4 space-y-1'>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 text-left text-sm font-medium rounded-md transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  activeSection === section.id &&
                    'bg-primary text-primary-foreground'
                )}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className='flex-1 p-6 overflow-y-auto'>
            {currentSection ? (
              currentSection.component
            ) : (
              <div className='text-center text-muted-foreground'>
                Select a settings section
              </div>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

// Settings section components
export function GeneralSettings({
  appName = 'Notable',
  version = '1.0.0',
  onReset,
}: {
  appName?: string
  version?: string
  onReset?: () => void
}) {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>General</h3>
        <div className='space-y-4'>
          <div className='flex items-center justify-between py-2'>
            <div>
              <div className='font-medium'>Application Name</div>
              <div className='text-sm text-muted-foreground'>{appName}</div>
            </div>
          </div>

          <div className='flex items-center justify-between py-2'>
            <div>
              <div className='font-medium'>Version</div>
              <div className='text-sm text-muted-foreground'>{version}</div>
            </div>
          </div>

          {onReset && (
            <div className='pt-4 border-t border-border'>
              <Button variant='destructive' onClick={onReset}>
                Reset All Settings
              </Button>
              <p className='text-xs text-muted-foreground mt-2'>
                This will reset all settings to their default values
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ThemeSettings({
  currentTheme = 'system',
  onThemeChange,
  customColors,
  onColorChange,
}: {
  currentTheme?: 'light' | 'dark' | 'system'
  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void
  customColors?: Record<string, string>
  onColorChange?: (color: string, value: string) => void
}) {
  const themes = [
    { id: 'light', label: 'Light', icon: <SunIcon className='h-4 w-4' /> },
    { id: 'dark', label: 'Dark', icon: <MoonIcon className='h-4 w-4' /> },
    {
      id: 'system',
      label: 'System',
      icon: <MonitorIcon className='h-4 w-4' />,
    },
  ]

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Appearance</h3>

        <div className='space-y-4'>
          <div>
            <label className='text-sm font-medium mb-3 block'>Theme</label>
            <div className='grid grid-cols-3 gap-3'>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange?.(theme.id as any)}
                  className={cn(
                    'flex items-center gap-2 p-3 rounded-lg border text-left transition-colors',
                    currentTheme === theme.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-accent'
                  )}
                >
                  {theme.icon}
                  <span className='text-sm font-medium'>{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          {customColors && (
            <div>
              <label className='text-sm font-medium mb-3 block'>
                Accent Color
              </label>
              <div className='grid grid-cols-6 gap-2'>
                {Object.entries(customColors).map(([name, color]) => (
                  <button
                    key={name}
                    onClick={() => onColorChange?.(name, color)}
                    className='w-8 h-8 rounded-full border-2 border-border hover:border-primary transition-colors'
                    style={{ backgroundColor: color }}
                    title={name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function KeyboardSettings({
  shortcuts = [],
  onShortcutChange,
}: {
  shortcuts?: Array<{
    id: string
    label: string
    shortcut: string
    category: string
  }>
  onShortcutChange?: (id: string, shortcut: string) => void
}) {
  const groupedShortcuts = React.useMemo(() => {
    const groups: Record<string, typeof shortcuts> = {}
    shortcuts.forEach((shortcut) => {
      if (!groups[shortcut.category]) {
        groups[shortcut.category] = []
      }
      groups[shortcut.category].push(shortcut)
    })
    return groups
  }, [shortcuts])

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Keyboard Shortcuts</h3>

        <div className='space-y-6'>
          {Object.entries(groupedShortcuts).map(
            ([category, categoryShortcuts]) => (
              <div key={category}>
                <h4 className='font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3'>
                  {category}
                </h4>
                <div className='space-y-2'>
                  {categoryShortcuts.map((shortcut) => (
                    <div
                      key={shortcut.id}
                      className='flex items-center justify-between py-2'
                    >
                      <span className='text-sm'>{shortcut.label}</span>
                      <div className='flex items-center gap-2'>
                        <kbd className='px-2 py-1 text-xs font-mono bg-muted rounded border'>
                          {shortcut.shortcut}
                        </kbd>
                        {onShortcutChange && (
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => {
                              // TODO: Implement shortcut editing logic
                              alert('Shortcut editing coming soon!')
                            }}
                            title='Coming soon: Shortcut editing'
                          >
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export function NotificationSettings({
  enableNotifications = true,
  onNotificationChange,
  notificationTypes = [],
}: {
  enableNotifications?: boolean
  onNotificationChange?: (enabled: boolean) => void
  notificationTypes?: Array<{
    id: string
    label: string
    description: string
    enabled: boolean
  }>
}) {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Notifications</h3>

        <div className='space-y-4'>
          <div className='flex items-center justify-between py-2'>
            <div>
              <div className='font-medium'>Enable Notifications</div>
              <div className='text-sm text-muted-foreground'>
                Allow Notable to send you notifications
              </div>
            </div>
            <Button
              variant={enableNotifications ? 'default' : 'secondary'}
              size='sm'
              onClick={() => onNotificationChange?.(!enableNotifications)}
            >
              {enableNotifications ? 'Enabled' : 'Disabled'}
            </Button>
          </div>

          {enableNotifications &&
            notificationTypes.map((type) => (
              <div
                key={type.id}
                className='flex items-center justify-between py-2 pl-4'
              >
                <div>
                  <div className='font-medium text-sm'>{type.label}</div>
                  <div className='text-xs text-muted-foreground'>
                    {type.description}
                  </div>
                </div>
                <Button
                  variant={type.enabled ? 'default' : 'secondary'}
                  size='sm'
                >
                  {type.enabled ? 'On' : 'Off'}
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

// Pre-built Notable settings panel
export function NotableSettingsPanel({
  open,
  onOpenChange,
  currentTheme = 'system',
  onThemeChange,
  onReset,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentTheme?: 'light' | 'dark' | 'system'
  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void
  onReset?: () => void
}) {
  const sections: SettingsSection[] = [
    {
      id: 'general',
      label: 'General',
      icon: <SettingsIcon className='h-4 w-4' />,
      component: <GeneralSettings onReset={onReset} />,
    },
    {
      id: 'appearance',
      label: 'Appearance',
      icon: <PaletteIcon className='h-4 w-4' />,
      component: (
        <ThemeSettings
          currentTheme={currentTheme}
          onThemeChange={onThemeChange}
          customColors={{
            blue: '#3b82f6',
            purple: '#8b5cf6',
            green: '#10b981',
            orange: '#f59e0b',
            red: '#ef4444',
            pink: '#ec4899',
          }}
        />
      ),
    },
    {
      id: 'keyboard',
      label: 'Shortcuts',
      icon: <KeyboardIcon className='h-4 w-4' />,
      component: (
        <KeyboardSettings
          shortcuts={[
            {
              id: 'new-note',
              label: 'New Note',
              shortcut: 'Cmd+N',
              category: 'File',
            },
            { id: 'save', label: 'Save', shortcut: 'Cmd+S', category: 'File' },
            {
              id: 'search',
              label: 'Search',
              shortcut: 'Cmd+F',
              category: 'Navigation',
            },
            {
              id: 'command-palette',
              label: 'Command Palette',
              shortcut: 'Cmd+K',
              category: 'Navigation',
            },
            {
              id: 'bold',
              label: 'Bold',
              shortcut: 'Cmd+B',
              category: 'Formatting',
            },
            {
              id: 'italic',
              label: 'Italic',
              shortcut: 'Cmd+I',
              category: 'Formatting',
            },
          ]}
        />
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <BellIcon className='h-4 w-4' />,
      component: (
        <NotificationSettings
          notificationTypes={[
            {
              id: 'sync',
              label: 'Sync Status',
              description: 'Notify when notes are synced',
              enabled: true,
            },
            {
              id: 'updates',
              label: 'App Updates',
              description: 'Notify when updates are available',
              enabled: true,
            },
          ]}
        />
      ),
    },
  ]

  return (
    <SettingsPanel
      open={open}
      onOpenChange={onOpenChange}
      sections={sections}
      defaultSection='general'
    />
  )
}
