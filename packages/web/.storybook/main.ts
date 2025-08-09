import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../design-system/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  staticDirs: ['../public'],
}

export default config
