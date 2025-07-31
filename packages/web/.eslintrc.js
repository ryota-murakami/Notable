/* eslint-disable */
module.exports = {
  root: true,
  extends: ['../configs/eslint-config/next.js'],
  ignorePatterns: [
    '.eslintrc.js',
    '**/*.config.js',
    '**/__tests__/**',
    '**/__mocks__/**',
    'storybook-static/**',
  ],
  overrides: [
    {
      files: ['**/*.{js,cjs,mjs}'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
}
