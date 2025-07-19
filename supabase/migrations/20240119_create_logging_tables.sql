-- Create application logs table
CREATE TABLE IF NOT EXISTS application_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  level TEXT NOT NULL,
  message TEXT NOT NULL,
  metadata JSONB,
  source TEXT NOT NULL DEFAULT 'server', -- 'client' or 'server'
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  url TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX idx_application_logs_timestamp ON application_logs(timestamp DESC);
CREATE INDEX idx_application_logs_level ON application_logs(level);
CREATE INDEX idx_application_logs_user_id ON application_logs(user_id);
CREATE INDEX idx_application_logs_source ON application_logs(source);
CREATE INDEX idx_application_logs_session_id ON application_logs(session_id);

-- Create analytics events table (already created in analytics setup)
-- Ensure it exists
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  properties JSONB,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create analytics page views table (already created in analytics setup)
-- Ensure it exists
CREATE TABLE IF NOT EXISTS analytics_page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  referrer TEXT,
  title TEXT,
  properties JSONB,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create error tracking table
CREATE TABLE IF NOT EXISTS error_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  error_type TEXT NOT NULL,
  error_message TEXT NOT NULL,
  error_stack TEXT,
  error_code TEXT,
  component TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  url TEXT,
  user_agent TEXT,
  metadata JSONB,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved BOOLEAN DEFAULT false,
  resolved_at TIMESTAMPTZ,
  resolved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  notes TEXT
);

-- Create indexes for error tracking
CREATE INDEX idx_error_logs_timestamp ON error_logs(timestamp DESC);
CREATE INDEX idx_error_logs_error_type ON error_logs(error_type);
CREATE INDEX idx_error_logs_user_id ON error_logs(user_id);
CREATE INDEX idx_error_logs_resolved ON error_logs(resolved);
CREATE INDEX idx_error_logs_component ON error_logs(component);

-- Create performance metrics table
CREATE TABLE IF NOT EXISTS performance_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  metric_value NUMERIC NOT NULL,
  unit TEXT NOT NULL DEFAULT 'ms',
  operation TEXT,
  component TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  metadata JSONB,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for performance metrics
CREATE INDEX idx_performance_metrics_timestamp ON performance_metrics(timestamp DESC);
CREATE INDEX idx_performance_metrics_metric_name ON performance_metrics(metric_name);
CREATE INDEX idx_performance_metrics_operation ON performance_metrics(operation);
CREATE INDEX idx_performance_metrics_user_id ON performance_metrics(user_id);

-- Create RLS policies for application logs
ALTER TABLE application_logs ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
CREATE POLICY "Service role can manage all logs" ON application_logs
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Users can only view their own logs
CREATE POLICY "Users can view own logs" ON application_logs
  FOR SELECT USING (auth.uid() = user_id);

-- Create RLS policies for error logs
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
CREATE POLICY "Service role can manage all error logs" ON error_logs
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Users can view their own errors
CREATE POLICY "Users can view own errors" ON error_logs
  FOR SELECT USING (auth.uid() = user_id);

-- Create RLS policies for performance metrics
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
CREATE POLICY "Service role can manage all metrics" ON performance_metrics
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Users can view their own metrics
CREATE POLICY "Users can view own metrics" ON performance_metrics
  FOR SELECT USING (auth.uid() = user_id);

-- Create function to clean up old logs (retention policy)
CREATE OR REPLACE FUNCTION cleanup_old_logs()
RETURNS void AS $$
BEGIN
  -- Delete application logs older than 30 days
  DELETE FROM application_logs 
  WHERE timestamp < now() - interval '30 days';
  
  -- Delete resolved error logs older than 90 days
  DELETE FROM error_logs 
  WHERE resolved = true AND timestamp < now() - interval '90 days';
  
  -- Delete unresolved error logs older than 180 days
  DELETE FROM error_logs 
  WHERE resolved = false AND timestamp < now() - interval '180 days';
  
  -- Delete performance metrics older than 7 days
  DELETE FROM performance_metrics 
  WHERE timestamp < now() - interval '7 days';
  
  -- Delete analytics events older than 90 days
  DELETE FROM analytics_events 
  WHERE timestamp < now() - interval '90 days';
  
  -- Delete page views older than 30 days
  DELETE FROM analytics_page_views 
  WHERE timestamp < now() - interval '30 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a scheduled job to run cleanup daily (requires pg_cron extension)
-- Note: This needs to be run by a superuser or configured in Supabase dashboard
-- SELECT cron.schedule('cleanup-logs', '0 2 * * *', 'SELECT cleanup_old_logs();');