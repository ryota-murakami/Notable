#!/bin/bash

# Run E2E tests in batches to avoid memory issues with large coverage files

echo "Running E2E tests in batches for coverage..."

# Clean up previous coverage
rm -rf coverage .nyc_output

# Define test batches
BATCHES=(
  "e2e/auth*.spec.ts e2e/app.spec.ts"
  "e2e/notes*.spec.ts e2e/note-*.spec.ts"
  "e2e/editor*.spec.ts e2e/rich-text-editor.spec.ts"
  "e2e/templates*.spec.ts e2e/tag*.spec.ts"
  "e2e/search*.spec.ts e2e/advanced-search.spec.ts"
  "e2e/ai-features.spec.ts e2e/export*.spec.ts"
  "e2e/command-palette.spec.ts e2e/keyboard-shortcuts.spec.ts"
  "e2e/bi-directional-linking.spec.ts e2e/block-editor.spec.ts"
  "e2e/enhanced-graph-view.spec.ts e2e/elite-features.spec.ts"
  "e2e/integrated-*.spec.ts e2e/smoke.spec.ts"
  "e2e/application-shell.spec.ts e2e/deployment-validation.spec.ts"
  "e2e/supabase-integration.spec.ts e2e/spinner.spec.ts e2e/user-menu.spec.ts"
  "e2e/comprehensive-*.spec.ts e2e/coverage-*.spec.ts e2e/simple-*.spec.ts"
)

# Run each batch
for i in "${!BATCHES[@]}"; do
  BATCH=${BATCHES[$i]}
  BATCH_NUM=$((i + 1))
  echo ""
  echo "Running batch $BATCH_NUM of ${#BATCHES[@]}: $BATCH"
  
  # Run tests with coverage
  COVERAGE=1 pnpm playwright test $BATCH --reporter=list
  
  if [ $? -ne 0 ]; then
    echo "Warning: Batch $BATCH_NUM had test failures, but continuing..."
  fi
  
  # Move coverage files to a batch-specific directory to prevent processing too many at once
  mkdir -p .nyc_output/v8-coverage-batch-$BATCH_NUM
  mv .nyc_output/v8-coverage/coverage-*.json .nyc_output/v8-coverage-batch-$BATCH_NUM/ 2>/dev/null || true
done

echo ""
echo "All batches completed. Aggregating coverage..."

# Merge all coverage files back
mkdir -p .nyc_output/v8-coverage
for batch_dir in .nyc_output/v8-coverage-batch-*; do
  if [ -d "$batch_dir" ]; then
    mv $batch_dir/*.json .nyc_output/v8-coverage/ 2>/dev/null || true
  fi
done

# Clean up batch directories
rm -rf .nyc_output/v8-coverage-batch-*

# Generate final coverage report
echo "Generating final coverage report..."
node scripts/generate-coverage-report.cjs

echo "E2E coverage collection complete!"