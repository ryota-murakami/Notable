import baseConfig from '../configs/eslint-config/index.js'

export default [
  ...baseConfig,
  {
    ignores: ['dist/', 'dist/**/*'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        // Web API globals needed for routing package
        URL: 'readonly',
        URLSearchParams: 'readonly',
        // Node.js globals
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      // Relax some rules for the routing package
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'prefer-template': 'warn',
      'prefer-const': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'sort-imports': 'warn',
      'no-undef': 'error',
    },
  },
]
