import reactNativeConfig from '../configs/eslint-config/react-native.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist/',
      '.expo/',
      '.expo-shared/',
      '*.bundle',
      '*.map',
      'node_modules/',
      '.turbo/',
      '.next/',
      '.DS_Store',
      'Thumbs.db',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.env',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      'coverage/',
      '.vscode/',
      '.idea/',
      '*.swp',
      '*.swo',
      '*~',
      '*.generated.*',
    ],
  },
  ...reactNativeConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'react/display-name': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['jest.setup.js', '**/__tests__/**/*', '**/*.test.*', '**/*.spec.*'],
    languageOptions: {
      globals: {
        // Jest globals
        jest: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        // CommonJS globals for jest.setup.js
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        // Timer functions
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // Testing library globals
        getByText: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: [
      '**/*.config.js',
      '**/babel.config.cjs',
      '**/.prettierrc.js',
      '**/jest.config.cjs',
      '**/.detoxrc.cjs',
    ],
    languageOptions: {
      globals: {
        // Node.js/CommonJS globals for config files
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        exports: 'readonly',
        global: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['e2e/**/*.js'],
    languageOptions: {
      globals: {
        // Node.js/CommonJS globals for e2e tests
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        // Detox globals
        detox: 'readonly',
        device: 'readonly',
        element: 'readonly',
        by: 'readonly',
        waitFor: 'readonly',
        expect: 'readonly',
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Allow console in e2e tests for debugging
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        // Node.js/CommonJS globals for scripts
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        global: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        Buffer: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Allow console in scripts
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off', // Node.js globals
    },
  },
]
