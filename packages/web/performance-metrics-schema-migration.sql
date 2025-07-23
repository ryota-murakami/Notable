-- Performance Metrics Database Schema Migration
-- Creates tables and functions for comprehensive performance monitoring

-- Performance metrics table for storing client-side metrics
CREATE TABLE IF NOT EXISTS performance_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  metric_name VARCHAR(50) NOT NULL,
  metric_value DOUBLE PRECISION NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB DEFAULT '{}',
  session_id VARCHAR(100),
  page_url TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Indexes for performance
  INDEX idx_performance_metrics_user_id (user_id),
  INDEX idx_performance_metrics_timestamp (timestamp),
  INDEX idx_performance_metrics_metric_name (metric_name),
  INDEX idx_performance_metrics_session (session_id)
);

-- Performance alerts table for storing automated alerts
CREATE TABLE IF NOT EXISTS performance_alerts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  alert_type VARCHAR(50) NOT NULL,
  metric_name VARCHAR(50) NOT NULL,
  threshold_value DOUBLE PRECISION NOT NULL,
  actual_value DOUBLE PRECISION NOT NULL,
  severity VARCHAR(20) DEFAULT 'warning', -- 'info', 'warning', 'critical'
  message TEXT NOT NULL,
  acknowledged BOOLEAN DEFAULT FALSE,
  acknowledged_at TIMESTAMPTZ,
  acknowledged_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB DEFAULT '{}',
  
  INDEX idx_performance_alerts_user_id (user_id),
  INDEX idx_performance_alerts_created_at (created_at),
  INDEX idx_performance_alerts_severity (severity),
  INDEX idx_performance_alerts_acknowledged (acknowledged)
);

-- Server performance metrics table
CREATE TABLE IF NOT EXISTS server_performance_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name VARCHAR(50) NOT NULL,
  metric_value DOUBLE PRECISION NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  server_instance VARCHAR(100),
  metadata JSONB DEFAULT '{}',
  
  INDEX idx_server_performance_timestamp (timestamp),
  INDEX idx_server_performance_metric_name (metric_name),
  INDEX idx_server_performance_instance (server_instance)
);

-- Query performance tracking table
CREATE TABLE IF NOT EXISTS query_performance_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  query_key TEXT NOT NULL,
  duration_ms INTEGER NOT NULL,
  status VARCHAR(20) NOT NULL, -- 'success', 'error', 'loading'
  error_message TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  cache_hit BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT '{}',
  
  INDEX idx_query_performance_user_id (user_id),
  INDEX idx_query_performance_timestamp (timestamp),
  INDEX idx_query_performance_duration (duration_ms),
  INDEX idx_query_performance_status (status)
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE server_performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE query_performance_logs ENABLE ROW LEVEL SECURITY;

-- Performance metrics policies
CREATE POLICY "Users can view their own performance metrics" ON performance_metrics
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own performance metrics" ON performance_metrics
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own performance metrics" ON performance_metrics
  FOR UPDATE USING (auth.uid() = user_id);

-- Performance alerts policies
CREATE POLICY "Users can view their own performance alerts" ON performance_alerts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own performance alerts" ON performance_alerts
  FOR UPDATE USING (auth.uid() = user_id);

-- Server performance metrics (read-only for users, admin access for inserts)
CREATE POLICY "Users can view server performance metrics" ON server_performance_metrics
  FOR SELECT USING (true);

-- Query performance logs policies
CREATE POLICY "Users can view their own query performance logs" ON query_performance_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own query performance logs" ON query_performance_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Functions for performance monitoring

-- Function to calculate performance score
CREATE OR REPLACE FUNCTION calculate_performance_score(
  p_user_id UUID,
  p_time_range INTERVAL DEFAULT '24 hours'::INTERVAL
)
RETURNS JSON AS $$
DECLARE
  web_vitals_score INTEGER := 100;
  query_performance_score INTEGER := 100;
  overall_score INTEGER;
  metrics_data JSON;
BEGIN
  -- Get recent metrics for the user
  WITH recent_metrics AS (
    SELECT 
      metric_name,
      AVG(metric_value) as avg_value,
      MAX(metric_value) as max_value,
      COUNT(*) as count
    FROM performance_metrics 
    WHERE user_id = p_user_id 
      AND timestamp >= NOW() - p_time_range
    GROUP BY metric_name
  )
  SELECT json_object_agg(metric_name, json_build_object(
    'avg_value', avg_value,
    'max_value', max_value,
    'count', count
  )) INTO metrics_data
  FROM recent_metrics;
  
  -- Calculate web vitals score based on thresholds
  IF (metrics_data->>'LCP')::json->>'avg_value' IS NOT NULL THEN
    IF ((metrics_data->>'LCP')::json->>'avg_value')::FLOAT > 4000 THEN
      web_vitals_score := web_vitals_score - 30;
    ELSIF ((metrics_data->>'LCP')::json->>'avg_value')::FLOAT > 2500 THEN
      web_vitals_score := web_vitals_score - 15;
    END IF;
  END IF;
  
  IF (metrics_data->>'FID')::json->>'avg_value' IS NOT NULL THEN
    IF ((metrics_data->>'FID')::json->>'avg_value')::FLOAT > 300 THEN
      web_vitals_score := web_vitals_score - 25;
    ELSIF ((metrics_data->>'FID')::json->>'avg_value')::FLOAT > 100 THEN
      web_vitals_score := web_vitals_score - 10;
    END IF;
  END IF;
  
  IF (metrics_data->>'CLS')::json->>'avg_value' IS NOT NULL THEN
    IF ((metrics_data->>'CLS')::json->>'avg_value')::FLOAT > 0.25 THEN
      web_vitals_score := web_vitals_score - 25;
    ELSIF ((metrics_data->>'CLS')::json->>'avg_value')::FLOAT > 0.1 THEN
      web_vitals_score := web_vitals_score - 10;
    END IF;
  END IF;
  
  -- Calculate query performance score
  WITH slow_queries AS (
    SELECT COUNT(*) as slow_count
    FROM query_performance_logs
    WHERE user_id = p_user_id
      AND timestamp >= NOW() - p_time_range
      AND duration_ms > 2000
  )
  SELECT CASE 
    WHEN slow_count > 10 THEN 70
    WHEN slow_count > 5 THEN 85
    WHEN slow_count > 0 THEN 95
    ELSE 100
  END INTO query_performance_score
  FROM slow_queries;
  
  -- Calculate overall score
  overall_score := (web_vitals_score + query_performance_score) / 2;
  
  RETURN json_build_object(
    'overall_score', overall_score,
    'web_vitals_score', web_vitals_score,
    'query_performance_score', query_performance_score,
    'metrics_data', metrics_data
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get performance summary
CREATE OR REPLACE FUNCTION get_performance_summary(
  p_user_id UUID,
  p_time_range INTERVAL DEFAULT '24 hours'::INTERVAL
)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  WITH performance_stats AS (
    -- Web Vitals metrics
    SELECT 
      'web_vitals' as category,
      json_object_agg(
        metric_name,
        json_build_object(
          'avg', ROUND(AVG(metric_value)::numeric, 2),
          'min', ROUND(MIN(metric_value)::numeric, 2),
          'max', ROUND(MAX(metric_value)::numeric, 2),
          'p95', ROUND(PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY metric_value)::numeric, 2),
          'count', COUNT(*)
        )
      ) as metrics
    FROM performance_metrics
    WHERE user_id = p_user_id 
      AND timestamp >= NOW() - p_time_range
      AND metric_name IN ('LCP', 'FID', 'CLS', 'FCP', 'TTFB', 'INP')
    
    UNION ALL
    
    -- Query performance metrics
    SELECT 
      'query_performance' as category,
      json_build_object(
        'avg_duration', ROUND(AVG(duration_ms)::numeric, 2),
        'slow_queries', COUNT(*) FILTER (WHERE duration_ms > 1000),
        'error_rate', ROUND((COUNT(*) FILTER (WHERE status = 'error')::float / COUNT(*) * 100)::numeric, 2),
        'cache_hit_rate', ROUND((COUNT(*) FILTER (WHERE cache_hit = true)::float / COUNT(*) * 100)::numeric, 2),
        'total_queries', COUNT(*)
      ) as metrics
    FROM query_performance_logs
    WHERE user_id = p_user_id 
      AND timestamp >= NOW() - p_time_range
  )
  SELECT json_object_agg(category, metrics)
  INTO result
  FROM performance_stats;
  
  RETURN COALESCE(result, '{}'::json);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create performance alert
CREATE OR REPLACE FUNCTION create_performance_alert(
  p_user_id UUID,
  p_alert_type VARCHAR(50),
  p_metric_name VARCHAR(50),
  p_threshold_value DOUBLE PRECISION,
  p_actual_value DOUBLE PRECISION,
  p_severity VARCHAR(20) DEFAULT 'warning',
  p_message TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  alert_id UUID;
  generated_message TEXT;
BEGIN
  -- Generate message if not provided
  IF p_message IS NULL THEN
    generated_message := format(
      'Performance alert: %s exceeded threshold of %s with value %s',
      p_metric_name,
      p_threshold_value,
      p_actual_value
    );
  ELSE
    generated_message := p_message;
  END IF;
  
  -- Insert the alert
  INSERT INTO performance_alerts (
    user_id,
    alert_type,
    metric_name,
    threshold_value,
    actual_value,
    severity,
    message
  ) VALUES (
    p_user_id,
    p_alert_type,
    p_metric_name,
    p_threshold_value,
    p_actual_value,
    p_severity,
    generated_message
  ) RETURNING id INTO alert_id;
  
  RETURN alert_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger function to automatically create alerts for poor performance
CREATE OR REPLACE FUNCTION trigger_performance_alert()
RETURNS TRIGGER AS $$
DECLARE
  threshold_value DOUBLE PRECISION;
  should_alert BOOLEAN := FALSE;
BEGIN
  -- Define thresholds for different metrics
  CASE NEW.metric_name
    WHEN 'LCP' THEN 
      threshold_value := 4000;
      should_alert := NEW.metric_value > threshold_value;
    WHEN 'FID' THEN 
      threshold_value := 300;
      should_alert := NEW.metric_value > threshold_value;
    WHEN 'CLS' THEN 
      threshold_value := 0.25;
      should_alert := NEW.metric_value > threshold_value;
    WHEN 'FCP' THEN 
      threshold_value := 3000;
      should_alert := NEW.metric_value > threshold_value;
    WHEN 'TTFB' THEN 
      threshold_value := 1800;
      should_alert := NEW.metric_value > threshold_value;
    WHEN 'INP' THEN 
      threshold_value := 500;
      should_alert := NEW.metric_value > threshold_value;
    ELSE
      should_alert := FALSE;
  END CASE;
  
  -- Create alert if threshold exceeded
  IF should_alert THEN
    PERFORM create_performance_alert(
      NEW.user_id,
      'threshold_exceeded',
      NEW.metric_name,
      threshold_value,
      NEW.metric_value,
      CASE 
        WHEN NEW.metric_value > threshold_value * 2 THEN 'critical'
        ELSE 'warning'
      END
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic alerts
CREATE TRIGGER performance_metrics_alert_trigger
  AFTER INSERT ON performance_metrics
  FOR EACH ROW
  EXECUTE FUNCTION trigger_performance_alert();

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_performance_metrics_composite 
  ON performance_metrics (user_id, metric_name, timestamp DESC);

CREATE INDEX IF NOT EXISTS idx_query_performance_composite 
  ON query_performance_logs (user_id, timestamp DESC, duration_ms);

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE ON performance_metrics TO authenticated;
GRANT SELECT, UPDATE ON performance_alerts TO authenticated;
GRANT SELECT ON server_performance_metrics TO authenticated;
GRANT SELECT, INSERT ON query_performance_logs TO authenticated;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION calculate_performance_score(UUID, INTERVAL) TO authenticated;
GRANT EXECUTE ON FUNCTION get_performance_summary(UUID, INTERVAL) TO authenticated;

COMMENT ON TABLE performance_metrics IS 'Stores client-side performance metrics (Web Vitals, custom metrics)';
COMMENT ON TABLE performance_alerts IS 'Automated performance alerts and notifications';
COMMENT ON TABLE server_performance_metrics IS 'Server-side performance and resource usage metrics';
COMMENT ON TABLE query_performance_logs IS 'React Query and database query performance tracking';