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
]