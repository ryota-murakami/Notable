/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./index.js'],
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  rules: {
    // Node.js specific rules
    'no-console': 'off', // Console logging is common in Electron main process
    'no-process-exit': 'warn',
    'no-sync': 'warn',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // Electron specific rules
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['electron/renderer'],
            message: 'Do not import renderer modules in main process',
          },
        ],
      },
    ],

    // Security rules for Electron
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',

    // TypeScript rules adjusted for Electron
    '@typescript-eslint/no-var-requires': 'off', // CommonJS require is common in Electron
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // Requires type information

    // Allow process and __dirname globals
    'no-undef': 'off', // TypeScript handles this better
  },
  globals: {
    __dirname: 'readonly',
    __filename: 'readonly',
    process: 'readonly',
    Buffer: 'readonly',
    global: 'readonly',
  },
}
