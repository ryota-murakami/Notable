/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./index.js', 'next/core-web-vitals', 'eslint-config-next'],
  plugins: ['react', 'react-hooks'],
  rules: {
    // React specific rules
    'react/react-in-jsx-scope': 'off', // Next.js handles this
    'react/prop-types': 'off', // Using TypeScript for prop validation
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Next.js specific rules
    '@next/next/no-img-element': 'warn',
    '@next/next/no-html-link-for-pages': 'error',

    // Accessibility
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
