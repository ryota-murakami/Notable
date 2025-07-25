module.exports = {
  extends: ['../../../packages/configs/eslint-config'],
  env: {
    jest: true,
    node: true,
  },
  globals: {
    device: 'readonly',
    element: 'readonly',
    by: 'readonly',
    waitFor: 'readonly',
    expect: 'readonly',
  },
  rules: {
    // Detox tests often use console for debugging
    'no-console': 'off',
    // Allow long test names
    'max-len': 'off',
    // Allow any type for Detox matchers
    '@typescript-eslint/no-explicit-any': 'off',
    // Allow require for Detox setup
    '@typescript-eslint/no-require-imports': 'off',
    // Allow import() type annotations in type definitions
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}
