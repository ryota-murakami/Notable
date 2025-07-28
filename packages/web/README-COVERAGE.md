# E2E Test Coverage Setup for Notable Web

This setup enables code coverage collection for Playwright E2E tests in the Notable web application.

## How It Works

1. **Code Instrumentation**: When `COVERAGE=1` is set, Next.js uses Babel with the Istanbul plugin to instrument the code
2. **Test Execution**: Playwright runs E2E tests against the instrumented code
3. **Coverage Collection**: Coverage data is collected in `.nyc_output` directory
4. **Report Generation**: NYC generates HTML and LCOV reports from the collected data

## Configuration Files

- `babel.config.js`: Configures Istanbul plugin when COVERAGE=1
- `next.config.js`: Disables SWC and uses Babel for instrumentation
- `.nycrc.json`: Configures NYC coverage reporting
- `playwright-coverage.config.ts`: Playwright config for coverage runs

## Running E2E Tests with Coverage

### Option 1: Simple Coverage (Recommended)
```bash
# Run E2E tests with coverage and generate report
npm run e2e:coverage:simple
```

### Option 2: Manual Steps
```bash
# 1. Start dev server with coverage instrumentation
COVERAGE=1 npm run dev:coverage

# 2. In another terminal, run E2E tests
npx playwright test

# 3. Generate coverage report
npm run e2e:coverage:report
```

### Option 3: Using V8 Coverage (Alternative)
```bash
# Run specific test that collects V8 coverage
npx playwright test e2e/app-v8-coverage.spec.ts

# Convert V8 to Istanbul format (requires additional setup)
npx c8 report
```

## Viewing Coverage Reports

After running tests with coverage:
```bash
# Open HTML report in browser
open coverage/e2e/index.html
```

## Coverage Metrics

The setup tracks coverage for:
- `app/**/*.{js,jsx,ts,tsx}`
- `components/**/*.{js,jsx,ts,tsx}`
- `lib/**/*.{js,jsx,ts,tsx}`
- `utils/**/*.{js,jsx,ts,tsx}`
- `hooks/**/*.{js,jsx,ts,tsx}`

## Troubleshooting

1. **"Module not found" errors**: Make sure all dependencies are installed with `pnpm install`
2. **No coverage data**: Ensure `COVERAGE=1` is set and Next.js is running with instrumentation
3. **Empty reports**: Check that tests actually navigate to pages and execute client-side code

## Integration with CI

Add to your CI pipeline:
```yaml
- name: Run E2E tests with coverage
  run: npm run e2e:coverage:simple
  
- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/e2e/lcov.info
```

## Notes

- Coverage collection adds overhead and slows down tests
- Only run coverage in CI or when specifically needed
- Client-side (browser) code coverage is collected by default
- Server-side coverage requires additional configuration