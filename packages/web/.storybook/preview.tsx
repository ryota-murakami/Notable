import type { Preview } from '@storybook/nextjs'
import '../app/globals.css'
import { ThemeProvider } from '../design-system/theme/theme-provider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light'
      return (
        <ThemeProvider
          defaultTheme={theme}
          storageKey='notable-storybook-theme'
        >
          <div className='min-h-screen bg-background text-foreground'>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
        showName: true,
      },
    },
  },
}

export default preview
