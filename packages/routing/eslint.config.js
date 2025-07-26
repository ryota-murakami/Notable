import { configs } from '@notable/eslint-config'

export default [
  ...configs.node,
  {
    files: ['src/**/*.ts'],
    rules: {
      // Add any routing-specific rules here
    },
  },
]
