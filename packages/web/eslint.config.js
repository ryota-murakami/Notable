import nextConfig from '../configs/eslint-config/next.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextConfig,
  {
    ignores: [
      'static/**/*',
      'public/static/**/*',
      '**/*.bundle.js',
      'out/**/*',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        location: 'readonly',
        history: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        File: 'readonly',
        FormData: 'readonly',
        Headers: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        performance: 'readonly',

        // DOM types
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLLabelElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLStyleElement: 'readonly',
        Element: 'readonly',
        Node: 'readonly',
        Event: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',

        // Node.js globals
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
        NodeJS: 'readonly',

        // Service Worker globals
        self: 'readonly',
        caches: 'readonly',
        clients: 'readonly',
        AbortController: 'readonly',

        // IndexedDB globals
        IDBDatabase: 'readonly',
        indexedDB: 'readonly',
        IDBOpenDBRequest: 'readonly',
        IDBKeyRange: 'readonly',

        // Performance API globals
        PerformanceObserver: 'readonly',
        PerformanceResourceTiming: 'readonly',
        PerformanceEntry: 'readonly',

        // Crypto API globals
        crypto: 'readonly',

        // Service Worker API globals
        ServiceWorkerRegistration: 'readonly',
        ServiceWorker: 'readonly',
        CustomEvent: 'readonly',
      },
    },
    rules: {
      'react/display-name': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-unused-vars': 'off',
      'no-case-declarations': 'warn',
      'no-console': 'warn',
      'require-await': 'warn',
      'no-duplicate-imports': 'warn',
    },
  },
  // Jest test files configuration
  {
    files: [
      '__tests__/**/*.{ts,tsx,js,jsx}',
      '**/*.test.{ts,tsx,js,jsx}',
      '**/__tests__/**/*.{ts,tsx,js,jsx}',
      '**/tests/**/*.{ts,tsx,js,jsx}',
    ],
    languageOptions: {
      globals: {
        // Jest globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        test: 'readonly',

        // Browser/Node globals for tests
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'require-await': 'off',
      'no-return-await': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_?error$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // Script files configuration - allow console statements for deployment/operational scripts
  {
    files: ['scripts/**/*.{ts,tsx,js,jsx}', '**/scripts/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-console': 'off',
      'require-await': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_?error$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // Service Worker and public files configuration
  {
    files: [
      'public/**/*.{js,ts}',
      '**/sw.js',
      'lib/sw-register.ts',
      'lib/logging/**/*.{ts,tsx,js,jsx}',
    ],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-unused-expressions': 'off', // For Service Worker event listeners
    },
  },
]
