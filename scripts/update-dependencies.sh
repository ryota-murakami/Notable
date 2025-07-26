#!/usr/bin/env bash
# scripts/update-dependencies.sh
# Safe dependency update strategy for Notable monorepo

set -e

echo "🔍 Checking current dependency status..."

# Check for unused dependencies
echo "\n📦 Checking for unused dependencies..."
pnpm run deps:unused || true

# Check for outdated dependencies
echo "\n📅 Checking for outdated dependencies..."
pnpm outdated || true

# Run sherif to check for synchronization issues
echo "\n🔧 Checking for dependency synchronization issues..."
pnpm run deps:check || true

# Interactive dependency updates (non-breaking)
echo "\n⬆️  Updating non-breaking dependencies..."
echo "Note: Review each update carefully and only accept safe updates"
pnpm up --latest -r --workspace-concurrency=1 --interactive || true

echo "\n🧹 Running dependency cleanup..."
pnpm run deps:cleanup

echo "\n🔬 Running tests to verify updates..."
pnpm run test

echo "\n🏗️  Verifying build still works..."
pnpm run build

echo "\n🔒 Running security audit..."
pnpm run security:audit

echo "\n✅ Dependency update process completed!"
echo "📝 Next steps:"
echo "   1. Review the changes carefully"
echo "   2. Test the applications manually"
echo "   3. Commit the changes if everything works"
echo "   4. Run 'pnpm run security:fix' if any vulnerabilities were found"