import eslintConfig from '@notable/eslint-config'

export default [
  ...eslintConfig,
  {
    languageOptions: {
      globals: {
        // Node.js globals
        NodeJS: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',

        // Browser globals
        navigator: 'readonly',
        indexedDB: 'readonly',
        IDBDatabase: 'readonly',
        IDBOpenDBRequest: 'readonly',
        IDBKeyRange: 'readonly',
        Blob: 'readonly',

        // Console is allowed for this package
        console: 'readonly',
      },
    },
    rules: {
      // Allow console statements in sync package
      'no-console': 'off',
      // Allow non-null assertions for this package
      '@typescript-eslint/no-non-null-assertion': 'warn',
      // Allow any types for mock interfaces
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow async methods without await for mocks
      'require-await': 'warn',
      // Allow control regex for sanitization
      'no-control-regex': 'warn',
    },
  },
]
