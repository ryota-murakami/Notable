import type { Preview } from '@storybook/nextjs'
import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '../design-system/theme/theme-provider'
import { themes } from '../design-system/theme/theme-config'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: themes.light.colors.background },
        { name: 'dark', value: themes.dark.colors.background },
        { name: 'midnight', value: themes.midnight.colors.background },
        { name: 'sunset', value: themes.sunset.colors.background },
        { name: 'forest', value: themes.forest.colors.background },
        { name: 'ocean', value: themes.ocean.colors.background },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Notable Design System Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: '🌞 Light' },
          { value: 'dark', title: '🌙 Dark' },
          { value: 'midnight', title: '🌌 Midnight' },
          { value: 'sunset', title: '🌅 Sunset' },
          { value: 'forest', title: '🌲 Forest' },
          { value: 'ocean', title: '🌊 Ocean' },
          { value: 'highContrastLight', title: '⚪ High Contrast Light' },
          { value: 'highContrastDark', title: '⚫ High Contrast Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light'

      return (
        <ThemeProvider defaultTheme={theme}>
          <div data-theme={theme} className='min-h-screen p-4'>
            <div className='max-w-4xl mx-auto'>
              <Story />
            </div>
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
