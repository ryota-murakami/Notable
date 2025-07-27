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
      '.next/**/*',
      'node_modules/**/*',
      'dist/**/*',
      'coverage/**/*',
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

        // DOM globals for CDN and image handling
        Image: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverInit: 'readonly',
        IntersectionObserverEntry: 'readonly',
        HTMLImageElement: 'readonly',

        // Animation globals
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
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
  // Library/utility files configuration - allow some warnings for async patterns
  {
    files: [
      'lib/search/**/*.{ts,tsx,js,jsx}',
      'lib/export/**/*.{ts,tsx,js,jsx}',
      'lib/performance/**/*.{ts,tsx,js,jsx}',
      'lib/analytics/**/*.{ts,tsx,js,jsx}',
      'lib/cdn-config.ts',
      'lib/db-optimization.ts',
      'lib/analytics.ts',
    ],
    rules: {
      'require-await': 'off', // These functions may be async for interface consistency
      '@typescript-eslint/no-non-null-assertion': 'off', // Allow in utility functions where type safety is ensured
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused params in interface implementations
      'no-console': 'off', // Allow console in utility/debug functions
      'no-case-declarations': 'off', // Allow case declarations in export handlers
      'no-useless-escape': 'off', // Allow regex escapes for compatibility
      'no-return-await': 'off', // Allow return await for consistency
      '@typescript-eslint/consistent-type-imports': 'off', // Allow dynamic imports
    },
  },
  // Jest setup and hook files configuration
  {
    files: ['jest.setup.js', 'hooks/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        // Jest globals
        jest: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',

        // Node.js globals for Jest setup
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-empty-function': 'off', // Allow empty constructors in mocks
      'require-await': 'off', // Allow async hooks without await
    },
  },
]
