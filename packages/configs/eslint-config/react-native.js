/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./index.js'],
  plugins: ['react', 'react-hooks', 'react-native'],
  rules: {
    // React specific rules
    'react/react-in-jsx-scope': 'off', // React Native handles this
    'react/prop-types': 'off', // Using TypeScript for prop validation
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React Native specific rules
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/split-platform-components': 'warn',

    // Platform specific
    'react-native/no-raw-text': [
      'error',
      {
        skip: ['Animated.Text'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
}
