import electronConfig from '../configs/eslint-config/electron.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'build/',
      'dist/',
      'node_modules/',
      'scripts/',
      '*.js.map',
      '*.d.ts',
    ],
  },
  ...electronConfig,
  // Relaxed rules for test files
  {
    files: ['e2e/**/*.test.ts', '__tests__/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'require-await': 'off',
      'no-return-await': 'off',
    },
  },
]
