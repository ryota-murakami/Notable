#!/bin/bash

# Script to set up GitHub repository secrets from .env.local file
# Usage: ./scripts/setup-github-secrets.sh

set -e

echo "🔐 Setting up GitHub Repository Secrets..."
echo "⚠️  WARNING: This will add sensitive data to your GitHub repository secrets."
echo "Make sure you trust the repository and have the necessary permissions."
echo ""
read -p "Continue? (y/N) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Aborted."
    exit 1
fi

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed. Please install it first:"
    echo "   brew install gh"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub. Please run:"
    echo "   gh auth login"
    exit 1
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local file not found. Please create it first."
    exit 1
fi

echo "📋 Reading environment variables from .env.local..."

# Function to add secret
add_secret() {
    local key=$1
    local value=$2
    
    if [ -z "$value" ]; then
        echo "⏭️  Skipping $key (empty value)"
        return
    fi
    
    echo -n "   Adding $key... "
    if gh secret set "$key" --body "$value" 2>/dev/null; then
        echo "✅"
    else
        echo "❌ Failed"
    fi
}

# Read .env.local and add secrets
while IFS='=' read -r key value; do
    # Skip empty lines and comments
    if [[ -z "$key" || "$key" =~ ^[[:space:]]*# ]]; then
        continue
    fi
    
    # Remove quotes from value
    value="${value%\"}"
    value="${value#\"}"
    value="${value%\'}"
    value="${value#\'}"
    
    # Add the secret
    add_secret "$key" "$value"
done < .env.local

echo ""
echo "✅ GitHub secrets setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Go to your repository settings on GitHub"
echo "2. Navigate to Settings → Secrets and variables → Actions"
echo "3. Verify all secrets were added correctly"
echo "4. Update your GitHub Actions workflows to use these secrets"
echo "5. Set up the same secrets in Vercel for production deployment"
echo ""
echo "🔒 Security reminders:"
echo "- Rotate all exposed secrets immediately"
echo "- Never commit .env files to the repository"
echo "- Use different secrets for each environment"
echo "- Review and audit secret access regularly"