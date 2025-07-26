import baseConfig from '../configs/eslint-config/index.js'

export default [
  ...baseConfig,
  {
    files: ['src/**/*.ts'],
    rules: {
      // Add any routing-specific rules here
    },
  },
]
