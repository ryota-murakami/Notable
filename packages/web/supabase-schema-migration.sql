-- Notable Freemium Subscription Schema Migration
-- Updates schema to match application requirements

-- Drop existing tables if they exist (careful in production!)
-- DROP TABLE IF EXISTS stripe_checkout_sessions CASCADE;
-- DROP TABLE IF EXISTS subscription_usage CASCADE;
-- DROP TABLE IF EXISTS user_subscriptions CASCADE;

-- Updated user_subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  subscription_id TEXT UNIQUE, -- Stripe subscription ID
  customer_id TEXT, -- Stripe customer ID
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'premium', 'team')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'canceled', 'past_due', 'incomplete', 'trialing')),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  trial_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Updated subscription_usage table to match hook expectations
CREATE TABLE IF NOT EXISTS subscription_usage (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  notes_count INTEGER DEFAULT 0,
  storage_used BIGINT DEFAULT 0, -- bytes
  devices_count INTEGER DEFAULT 1,
  exports_count INTEGER DEFAULT 0,
  collaborators_count INTEGER DEFAULT 0,
  ai_requests_count INTEGER DEFAULT 0,
  team_members_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Stripe checkout sessions for webhook processing
CREATE TABLE IF NOT EXISTS stripe_checkout_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  customer_id TEXT NOT NULL,
  price_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'expired')),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_customer_id ON user_subscriptions(customer_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscription_usage_user_id ON subscription_usage(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_checkout_sessions_user_id ON stripe_checkout_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_checkout_sessions_session_id ON stripe_checkout_sessions(session_id);

-- Updated timestamp trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
DROP TRIGGER IF EXISTS update_user_subscriptions_updated_at ON user_subscriptions;
CREATE TRIGGER update_user_subscriptions_updated_at 
  BEFORE UPDATE ON user_subscriptions 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_subscription_usage_updated_at ON subscription_usage;
CREATE TRIGGER update_subscription_usage_updated_at 
  BEFORE UPDATE ON subscription_usage 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Usage increment function
CREATE OR REPLACE FUNCTION increment_usage(
  p_user_id UUID,
  p_action TEXT,
  p_increment INTEGER DEFAULT 1
)
RETURNS VOID as $$
BEGIN
  CASE p_action
    WHEN 'notes' THEN
      UPDATE subscription_usage 
      SET notes_count = notes_count + p_increment
      WHERE user_id = p_user_id;
    WHEN 'storage' THEN
      UPDATE subscription_usage 
      SET storage_used = storage_used + p_increment
      WHERE user_id = p_user_id;
    WHEN 'devices' THEN
      UPDATE subscription_usage 
      SET devices_count = GREATEST(devices_count, p_increment)
      WHERE user_id = p_user_id;
    WHEN 'exports' THEN
      UPDATE subscription_usage 
      SET exports_count = exports_count + p_increment
      WHERE user_id = p_user_id;
    WHEN 'collaborators' THEN
      UPDATE subscription_usage 
      SET collaborators_count = GREATEST(collaborators_count, p_increment)
      WHERE user_id = p_user_id;
    WHEN 'aiRequests' THEN
      UPDATE subscription_usage 
      SET ai_requests_count = ai_requests_count + p_increment
      WHERE user_id = p_user_id;
    WHEN 'teamMembers' THEN
      UPDATE subscription_usage 
      SET team_members_count = GREATEST(team_members_count, p_increment)
      WHERE user_id = p_user_id;
  END CASE;
END;
$$ language 'plpgsql';

-- Row Level Security (RLS) policies
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE stripe_checkout_sessions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can insert their own subscription" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can view their own usage" ON subscription_usage;
DROP POLICY IF EXISTS "Users can update their own usage" ON subscription_usage;
DROP POLICY IF EXISTS "Users can insert their own usage" ON subscription_usage;
DROP POLICY IF EXISTS "Users can view their own checkout sessions" ON stripe_checkout_sessions;
DROP POLICY IF EXISTS "Users can insert their own checkout sessions" ON stripe_checkout_sessions;
DROP POLICY IF EXISTS "Service role can manage all subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Service role can manage all usage" ON subscription_usage;
DROP POLICY IF EXISTS "Service role can manage all checkout sessions" ON stripe_checkout_sessions;

-- RLS policies for user_subscriptions
CREATE POLICY "Users can view their own subscription" ON user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription" ON user_subscriptions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscription" ON user_subscriptions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage all subscriptions" ON user_subscriptions
  FOR ALL USING (auth.role() = 'service_role');

-- RLS policies for subscription_usage
CREATE POLICY "Users can view their own usage" ON subscription_usage
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own usage" ON subscription_usage
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own usage" ON subscription_usage
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage all usage" ON subscription_usage
  FOR ALL USING (auth.role() = 'service_role');

-- RLS policies for stripe_checkout_sessions
CREATE POLICY "Users can view their own checkout sessions" ON stripe_checkout_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own checkout sessions" ON stripe_checkout_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage all checkout sessions" ON stripe_checkout_sessions
  FOR ALL USING (auth.role() = 'service_role');

-- Function to create default subscription and usage records for new users
CREATE OR REPLACE FUNCTION create_default_subscription_and_usage()
RETURNS TRIGGER AS $$
BEGIN
  -- Create default free subscription
  INSERT INTO user_subscriptions (user_id, plan, status)
  VALUES (NEW.id, 'free', 'active')
  ON CONFLICT (user_id) DO NOTHING;
  
  -- Create default usage record
  INSERT INTO subscription_usage (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS create_user_subscription_trigger ON auth.users;

-- Trigger to create default subscription when user signs up
CREATE TRIGGER create_user_subscription_and_usage_trigger
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_default_subscription_and_usage();

-- Function to reset monthly usage counters (run via cron job)
CREATE OR REPLACE FUNCTION reset_monthly_usage()
RETURNS VOID AS $$
BEGIN
  UPDATE subscription_usage
  SET 
    exports_count = 0,
    ai_requests_count = 0
  WHERE updated_at < date_trunc('month', CURRENT_DATE);
END;
$$ language 'plpgsql';