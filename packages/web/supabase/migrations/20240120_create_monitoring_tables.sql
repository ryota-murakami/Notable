-- Create monitoring alerts table
CREATE TABLE IF NOT EXISTS monitoring_alerts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  fingerprint TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('firing', 'resolved')),
  severity TEXT NOT NULL,
  service TEXT NOT NULL,
  alert_name TEXT NOT NULL,
  summary TEXT NOT NULL,
  description TEXT,
  labels JSONB,
  annotations JSONB,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ,
  generator_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes
CREATE INDEX idx_monitoring_alerts_status ON monitoring_alerts(status);
CREATE INDEX idx_monitoring_alerts_severity ON monitoring_alerts(severity);
CREATE INDEX idx_monitoring_alerts_service ON monitoring_alerts(service);
CREATE INDEX idx_monitoring_alerts_starts_at ON monitoring_alerts(starts_at DESC);
CREATE INDEX idx_monitoring_alerts_fingerprint ON monitoring_alerts(fingerprint);

-- Create service status tracking table
CREATE TABLE IF NOT EXISTS service_status (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('operational', 'degraded', 'outage')),
  description TEXT,
  last_checked TIMESTAMPTZ NOT NULL DEFAULT now(),
  response_time INTEGER, -- in milliseconds
  uptime_percentage NUMERIC(5,2) DEFAULT 100.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert default services
INSERT INTO service_status (service_name, status, description) VALUES
('Web Application', 'operational', 'Main web application'),
('Database', 'operational', 'Primary database'),
('Authentication', 'operational', 'User authentication service'),
('Search', 'operational', 'Full-text search service'),
('Realtime Sync', 'operational', 'Real-time synchronization'),
('File Storage', 'operational', 'File upload and storage')
ON CONFLICT (service_name) DO NOTHING;

-- Create uptime tracking table
CREATE TABLE IF NOT EXISTS uptime_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_up BOOLEAN NOT NULL,
  response_time INTEGER, -- in milliseconds
  error_message TEXT,
  metadata JSONB
);

-- Create indexes for uptime tracking
CREATE INDEX idx_uptime_records_service_timestamp ON uptime_records(service_name, timestamp DESC);
CREATE INDEX idx_uptime_records_timestamp ON uptime_records(timestamp DESC);

-- Create metrics snapshots table
CREATE TABLE IF NOT EXISTS metrics_snapshots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  metric_name TEXT NOT NULL,
  metric_value NUMERIC NOT NULL,
  labels JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for metrics
CREATE INDEX idx_metrics_snapshots_metric_timestamp ON metrics_snapshots(metric_name, timestamp DESC);
CREATE INDEX idx_metrics_snapshots_timestamp ON metrics_snapshots(timestamp DESC);

-- Create incident tracking table
CREATE TABLE IF NOT EXISTS incidents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  severity TEXT NOT NULL CHECK (severity IN ('minor', 'major', 'critical')),
  status TEXT NOT NULL CHECK (status IN ('investigating', 'identified', 'monitoring', 'resolved')),
  affected_services TEXT[],
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved_at TIMESTAMPTZ,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  resolved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  public_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for incidents
CREATE INDEX idx_incidents_status ON incidents(status);
CREATE INDEX idx_incidents_severity ON incidents(severity);
CREATE INDEX idx_incidents_started_at ON incidents(started_at DESC);

-- Create incident updates table
CREATE TABLE IF NOT EXISTS incident_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  incident_id UUID NOT NULL REFERENCES incidents(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('investigating', 'identified', 'monitoring', 'resolved')),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create index for incident updates
CREATE INDEX idx_incident_updates_incident_id ON incident_updates(incident_id, created_at DESC);

-- Enable RLS
ALTER TABLE monitoring_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE uptime_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE metrics_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE incidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE incident_updates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for monitoring alerts
CREATE POLICY "Service role can manage all monitoring alerts" ON monitoring_alerts
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Public read access to monitoring alerts" ON monitoring_alerts
  FOR SELECT USING (true);

-- RLS Policies for service status
CREATE POLICY "Service role can manage all service status" ON service_status
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Public read access to service status" ON service_status
  FOR SELECT USING (true);

-- RLS Policies for uptime records
CREATE POLICY "Service role can manage all uptime records" ON uptime_records
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Public read access to uptime records" ON uptime_records
  FOR SELECT USING (true);

-- RLS Policies for metrics snapshots
CREATE POLICY "Service role can manage all metrics snapshots" ON metrics_snapshots
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- RLS Policies for incidents (public incidents only)
CREATE POLICY "Service role can manage all incidents" ON incidents
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Public read access to incidents" ON incidents
  FOR SELECT USING (true);

-- RLS Policies for incident updates
CREATE POLICY "Service role can manage all incident updates" ON incident_updates
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Public read access to incident updates" ON incident_updates
  FOR SELECT USING (true);

-- Function to update service status
CREATE OR REPLACE FUNCTION update_service_status(
  p_service_name TEXT,
  p_status TEXT,
  p_description TEXT DEFAULT NULL,
  p_response_time INTEGER DEFAULT NULL
)
RETURNS void AS $$
BEGIN
  INSERT INTO service_status (service_name, status, description, response_time)
  VALUES (p_service_name, p_status, p_description, p_response_time)
  ON CONFLICT (service_name) 
  DO UPDATE SET
    status = EXCLUDED.status,
    description = EXCLUDED.description,
    response_time = EXCLUDED.response_time,
    last_checked = now(),
    updated_at = now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to calculate uptime percentage
CREATE OR REPLACE FUNCTION calculate_uptime_percentage(
  p_service_name TEXT,
  p_hours INTEGER DEFAULT 24
)
RETURNS NUMERIC AS $$
DECLARE
  total_checks INTEGER;
  successful_checks INTEGER;
  uptime_pct NUMERIC;
BEGIN
  SELECT 
    COUNT(*),
    COUNT(*) FILTER (WHERE is_up = true)
  INTO total_checks, successful_checks
  FROM uptime_records
  WHERE service_name = p_service_name
    AND timestamp >= now() - (p_hours || ' hours')::INTERVAL;
  
  IF total_checks = 0 THEN
    RETURN 100.00;
  END IF;
  
  uptime_pct := (successful_checks::NUMERIC / total_checks::NUMERIC) * 100;
  
  -- Update service status table
  UPDATE service_status 
  SET uptime_percentage = uptime_pct
  WHERE service_name = p_service_name;
  
  RETURN uptime_pct;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to clean up old monitoring data
CREATE OR REPLACE FUNCTION cleanup_monitoring_data()
RETURNS void AS $$
BEGIN
  -- Delete resolved alerts older than 30 days
  DELETE FROM monitoring_alerts 
  WHERE status = 'resolved' 
    AND starts_at < now() - interval '30 days';
  
  -- Delete uptime records older than 90 days
  DELETE FROM uptime_records 
  WHERE timestamp < now() - interval '90 days';
  
  -- Delete metrics snapshots older than 7 days
  DELETE FROM metrics_snapshots 
  WHERE timestamp < now() - interval '7 days';
  
  -- Delete resolved incidents older than 180 days
  DELETE FROM incidents 
  WHERE status = 'resolved' 
    AND resolved_at < now() - interval '180 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;