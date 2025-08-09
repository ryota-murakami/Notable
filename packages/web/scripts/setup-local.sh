#!/bin/bash

# Notable Local Development Setup Script
set -e

echo "🚀 Setting up Notable local development environment..."

# Check prerequisites
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required but not installed. Please install Docker Desktop."; exit 1; }
command -v pnpm >/dev/null 2>&1 || { echo "❌ pnpm is required but not installed. Please install pnpm."; exit 1; }

# Copy environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
else
    echo "✅ .env.local already exists"
fi

# Start Docker containers
echo "🐳 Starting Supabase Docker stack..."
docker compose up -d

# Wait for containers to be healthy
echo "⏳ Waiting for services to be healthy (30 seconds)..."
sleep 30

# Check container status
echo "📊 Checking container status..."
docker compose ps

# Apply database schema
echo "🗄️ Applying database schema..."
docker exec -i supabase-db psql -U postgres < supabase-schema.sql 2>/dev/null || true
docker exec -i supabase-db psql -U postgres < supabase.bak/migrations/20250101000000_initial_schema.sql 2>/dev/null || true

# Add daily notes columns
echo "📝 Adding daily notes columns..."
docker exec supabase-db psql -U postgres -c "
ALTER TABLE notes ADD COLUMN IF NOT EXISTS type VARCHAR(50) DEFAULT 'regular';
ALTER TABLE notes ADD COLUMN IF NOT EXISTS is_daily BOOLEAN DEFAULT FALSE;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS slug VARCHAR(255);
ALTER TABLE notes ADD COLUMN IF NOT EXISTS path VARCHAR(500);
ALTER TABLE notes ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN DEFAULT FALSE;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS is_favorite BOOLEAN DEFAULT FALSE;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS is_template BOOLEAN DEFAULT FALSE;
" 2>/dev/null || true

# Fix constraints
echo "🔧 Fixing database constraints..."
docker exec supabase-db psql -U postgres -c "
ALTER TABLE user_subscriptions ALTER COLUMN stripe_customer_id DROP NOT NULL;
ALTER TABLE user_subscriptions ADD CONSTRAINT user_subscriptions_user_id_unique UNIQUE (user_id);
" 2>/dev/null || true

# Create test users
echo "👤 Creating test users..."
docker exec supabase-db psql -U postgres -c "
-- Fix any NULL values in auth.users
UPDATE auth.users SET 
  confirmation_token = COALESCE(confirmation_token, ''),
  recovery_token = COALESCE(recovery_token, ''),
  email_change_token_new = COALESCE(email_change_token_new, ''),
  phone_change_token = COALESCE(phone_change_token, ''),
  email_change = COALESCE(email_change, ''),
  raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'),
  raw_user_meta_data = COALESCE(raw_user_meta_data, '{}')
WHERE id IN ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002');

-- Create test users if they don't exist
INSERT INTO auth.users (
  id, email, encrypted_password, email_confirmed_at, 
  created_at, updated_at, instance_id, aud, role,
  confirmation_token, recovery_token, email_change_token_new,
  phone_change_token, email_change, raw_app_meta_data, raw_user_meta_data
) VALUES 
  ('00000000-0000-0000-0000-000000000001', 'test@example.com', 
   crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW(), 
   '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
   '', '', '', '', '', '{}', '{}'),
  ('00000000-0000-0000-0000-000000000002', 'test2@example.com', 
   crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW(), 
   '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
   '', '', '', '', '', '{}', '{}')
ON CONFLICT (id) DO NOTHING;
" 2>/dev/null || true

echo "✅ Local development environment setup complete!"
echo ""
echo "📌 Next steps:"
echo "  1. Run 'pnpm dev' to start the development server"
echo "  2. Visit http://localhost:4378"
echo "  3. Login with test@example.com / password123"
echo ""
echo "🧪 Test users:"
echo "  - test@example.com (password: password123)"
echo "  - test2@example.com (password: password123)"
echo ""
echo "🛠️ Useful commands:"
echo "  - pnpm db:stop    - Stop Supabase services"
echo "  - pnpm db:reset   - Reset database (removes all data)"
echo "  - pnpm e2e        - Run E2E tests"
echo "  - pnpm build      - Build for production"