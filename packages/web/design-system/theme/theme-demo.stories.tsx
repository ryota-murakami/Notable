'use client'

import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { ThemeProvider, ThemeSwitcher, useTheme } from './theme-provider'
import { type ThemeName, themes } from './theme-config'
import { Button } from '../components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/card'
import { Badge } from '../components/badge'
import { Alert, AlertDescription, AlertTitle } from '../components/alert'
import { Input } from '../components/input'
import { Label } from '../components/label'
import { Switch } from '../components/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/select'
import { Slider } from '../components/slider'
import {
  AlertCircle,
  CheckCircle2,
  Contrast,
  Info,
  Monitor,
  Moon,
  Palette,
  Sparkles,
  Sun,
  Trees,
  Waves,
  XCircle,
} from 'lucide-react'

const meta: Meta = {
  title: 'Design System/Theme Demo',
  component: ThemeSwitcher,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Interactive theme switching demonstration showcasing all 8 Notable themes',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='light'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Theme icons mapping
const themeIcons: Record<
  ThemeName,
  React.ComponentType<{ className?: string }>
> = {
  light: Sun,
  dark: Moon,
  midnight: Moon,
  sunset: Sun,
  forest: Trees,
  ocean: Waves,
  highContrastLight: Contrast,
  highContrastDark: Contrast,
}

// Interactive theme demo component
function ThemeDemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useState(() => {
    setMounted(true)
    return true
  })

  if (!mounted) {
    return null
  }

  const currentThemeConfig = themes[theme as ThemeName] || themes.light

  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='mx-auto max-w-7xl space-y-8'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-foreground'>
            Notable Theme System
          </h1>
          <p className='text-lg text-muted-foreground'>
            Explore all 8 themes with live preview
          </p>
        </div>

        {/* Theme Selector Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Select Theme</CardTitle>
            <CardDescription>
              Click on any theme to apply it instantly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {Object.entries(themes).map(([themeName, themeConfig]) => {
                const Icon = themeIcons[themeName as ThemeName] || Palette
                const isActive = theme === themeName

                return (
                  <button
                    key={themeName}
                    onClick={() => setTheme(themeName as ThemeName)}
                    className={`
                      group relative p-4 rounded-lg border-2 transition-all
                      ${
                        isActive
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50 hover:bg-accent/50'
                      }
                    `}
                  >
                    <div className='flex flex-col items-center space-y-2'>
                      <Icon
                        className={`h-8 w-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                      <div className='text-center'>
                        <div className='font-semibold'>
                          {themeConfig.displayName}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          {themeConfig.description}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <Badge
                        className='absolute -top-2 -right-2'
                        variant='default'
                      >
                        Active
                      </Badge>
                    )}
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Component Preview */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='space-y-6'>
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='default'>Primary</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='destructive'>Destructive</Button>
                  <Button variant='outline'>Outline</Button>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='link'>Link</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button size='sm'>Small</Button>
                  <Button size='default'>Default</Button>
                  <Button size='lg'>Large</Button>
                  <Button size='icon'>
                    <Sparkles className='h-4 w-4' />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Alerts</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  <Badge>Default</Badge>
                  <Badge variant='secondary'>Secondary</Badge>
                  <Badge variant='destructive'>Destructive</Badge>
                  <Badge variant='outline'>Outline</Badge>
                </div>

                <div className='space-y-2'>
                  <Alert>
                    <Info className='h-4 w-4' />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert using theme colors.
                    </AlertDescription>
                  </Alert>

                  <Alert variant='destructive'>
                    <XCircle className='h-4 w-4' />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      This is an error alert with destructive variant.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Form Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='input'>Input Field</Label>
                  <Input id='input' placeholder='Type something...' />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='select'>Select Menu</Label>
                  <Select>
                    <SelectTrigger id='select'>
                      <SelectValue placeholder='Choose an option' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='option1'>Option 1</SelectItem>
                      <SelectItem value='option2'>Option 2</SelectItem>
                      <SelectItem value='option3'>Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex items-center space-x-2'>
                  <Switch id='switch' />
                  <Label htmlFor='switch'>Enable notifications</Label>
                </div>

                <div className='space-y-2'>
                  <Label>Slider</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Tabbed Content</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='overview'>
                  <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='overview'>Overview</TabsTrigger>
                    <TabsTrigger value='details'>Details</TabsTrigger>
                    <TabsTrigger value='settings'>Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value='overview' className='space-y-4'>
                    <p className='text-sm text-muted-foreground'>
                      This theme provides a beautiful and accessible color
                      palette optimized for readability and visual hierarchy.
                    </p>
                  </TabsContent>
                  <TabsContent value='details' className='space-y-4'>
                    <p className='text-sm text-muted-foreground'>
                      Each theme includes carefully selected colors for all UI
                      states and components.
                    </p>
                  </TabsContent>
                  <TabsContent value='settings' className='space-y-4'>
                    <p className='text-sm text-muted-foreground'>
                      Theme preferences are automatically saved and persisted
                      across sessions.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Color Palette Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Current Theme Colors</CardTitle>
                <CardDescription>
                  {currentThemeConfig.displayName} -{' '}
                  {currentThemeConfig.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <h4 className='text-sm font-medium'>Primary Colors</h4>
                    <div className='space-y-1'>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-background border' />
                        <span className='text-xs'>Background</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-foreground' />
                        <span className='text-xs'>Foreground</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-primary' />
                        <span className='text-xs'>Primary</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-secondary' />
                        <span className='text-xs'>Secondary</span>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <h4 className='text-sm font-medium'>Semantic Colors</h4>
                    <div className='space-y-1'>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-destructive' />
                        <span className='text-xs'>Destructive</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-success' />
                        <span className='text-xs'>Success</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-warning' />
                        <span className='text-xs'>Warning</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded bg-info' />
                        <span className='text-xs'>Info</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme Switcher Component */}
            <Card>
              <CardHeader>
                <CardTitle>Theme Switcher Component</CardTitle>
                <CardDescription>
                  Use the built-in ThemeSwitcher component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeSwitcher showLabel={true} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center text-sm text-muted-foreground'>
          <p>Theme: {currentThemeConfig.displayName} | Total themes: 8</p>
        </div>
      </div>
    </div>
  )
}

// Main story
export const Default: Story = {
  render: () => <ThemeDemo />,
}

// Individual theme stories
export const LightTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='light'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const DarkTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='dark'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const MidnightTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='midnight'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const SunsetTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='sunset'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const ForestTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='forest'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const OceanTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='ocean'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const HighContrastLightTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='highContrastLight'>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const HighContrastDarkTheme: Story = {
  render: () => <ThemeDemo />,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme='highContrastDark'>
        <Story />
      </ThemeProvider>
    ),
  ],
}
