export default function (api) {
  api.cache(true)
  
  const presets = ['next/babel']
  const plugins = []
  
  // Only add istanbul plugin when COVERAGE env is set
  if (process.env.COVERAGE === '1') {
    plugins.push(['istanbul', {
      exclude: [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/__tests__/**',
        '**/node_modules/**',
        '.next/**',
        '.next_coverage/**',
        'coverage/**',
        'playwright-report/**',
        'test-results/**',
        'e2e/**',
        'tests/**',
        '**/*.d.ts',
        '**/types/**'
      ]
    }])
  }
  
  return {
    presets,
    plugins,
  }
}