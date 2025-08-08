#!/bin/bash

echo "🧪 Running E2E tests with coverage..."

# Clean up previous coverage data
rm -rf .nyc_output coverage

# Set environment variables
export CI=true
export NODE_ENV=test
export COVERAGE=1
export SKIP_ENV_VALIDATION=1

# Build the application in production mode (faster than dev)
echo "📦 Building application..."
npm run build

# Run E2E tests with coverage collection
echo "🚀 Running E2E tests..."
npx playwright test --reporter=list

# Generate coverage report
echo "📊 Generating coverage report..."
npx nyc report --reporter=text --reporter=lcov

echo "✅ E2E coverage test complete!"