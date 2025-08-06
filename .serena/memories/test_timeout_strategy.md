# E2E Test Timeout Optimization Strategy

## Current Issue

Many tests still use `waitForTimeout(2000-3000)` which adds unnecessary delays and can cause timeouts in slower CI environments.

## Better Alternatives

### 1. Replace Navigation Waits

```javascript
// OLD: Arbitrary wait
await page.waitForTimeout(2000)

// NEW: Wait for actual network completion
await page.waitForLoadState('networkidle', { timeout: 5000 })
```

### 2. Replace Element Interaction Waits

```javascript
// OLD: Wait before interacting
await page.waitForTimeout(2000)
await element.click({ force: true })

// NEW: Wait for element to be actionable
await element.waitFor({ state: 'visible', timeout: 5000 })
await element.click({ force: true })
```

### 3. Replace Save/Processing Waits

```javascript
// OLD: Arbitrary wait for save
await page.waitForTimeout(2000)

// NEW: Wait for specific success indicator
await page.waitForSelector('[data-testid="save-success"]', { timeout: 5000 })
// OR wait for network to settle
await page.waitForLoadState('networkidle', { timeout: 3000 })
```

### 4. Replace Content Loading Waits

```javascript
// OLD: Wait for content to load
await page.waitForTimeout(2000)

// NEW: Wait for specific content
await page.waitForSelector('[data-testid="content-loaded"]', { timeout: 5000 })
```

## Benefits

- Tests fail faster when something is actually broken
- Tests complete faster when everything works
- More reliable in different environments
- Better error messages when waits fail
