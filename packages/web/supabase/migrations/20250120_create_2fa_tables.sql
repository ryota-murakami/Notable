-- Create Two-Factor Authentication tables

-- Table for storing TOTP secrets
CREATE TABLE IF NOT EXISTS user_totp_secrets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  secret TEXT NOT NULL,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure one TOTP secret per user
CREATE UNIQUE INDEX idx_user_totp_secrets_user_id ON user_totp_secrets(user_id);

-- Table for storing backup codes
CREATE TABLE IF NOT EXISTS user_backup_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  used BOOLEAN DEFAULT false,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for quick lookup of backup codes
CREATE INDEX idx_user_backup_codes_user_id ON user_backup_codes(user_id);
CREATE INDEX idx_user_backup_codes_code ON user_backup_codes(code);

-- Table for storing user 2FA preferences
CREATE TABLE IF NOT EXISTS user_2fa_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  totp_enabled BOOLEAN DEFAULT false,
  sms_enabled BOOLEAN DEFAULT false,
  sms_phone_number TEXT,
  sms_verified BOOLEAN DEFAULT false,
  backup_codes_generated BOOLEAN DEFAULT false,
  backup_codes_generated_at TIMESTAMPTZ,
  preferred_method TEXT CHECK (preferred_method IN ('totp', 'sms', 'backup')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure one settings row per user
CREATE UNIQUE INDEX idx_user_2fa_settings_user_id ON user_2fa_settings(user_id);

-- Table for logging 2FA verification attempts
CREATE TABLE IF NOT EXISTS user_2fa_verification_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  method TEXT NOT NULL CHECK (method IN ('totp', 'sms', 'backup')),
  success BOOLEAN NOT NULL,
  ip_address INET,
  user_agent TEXT,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for querying verification history
CREATE INDEX idx_user_2fa_verification_log_user_id ON user_2fa_verification_log(user_id);
CREATE INDEX idx_user_2fa_verification_log_created_at ON user_2fa_verification_log(created_at DESC);

-- Enable RLS
ALTER TABLE user_totp_secrets ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_backup_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_2fa_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_2fa_verification_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_totp_secrets
CREATE POLICY "Users can view own TOTP secrets" ON user_totp_secrets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own TOTP secrets" ON user_totp_secrets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own TOTP secrets" ON user_totp_secrets
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own TOTP secrets" ON user_totp_secrets
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for user_backup_codes
CREATE POLICY "Users can view own backup codes" ON user_backup_codes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own backup codes" ON user_backup_codes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own backup codes" ON user_backup_codes
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own backup codes" ON user_backup_codes
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for user_2fa_settings
CREATE POLICY "Users can view own 2FA settings" ON user_2fa_settings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own 2FA settings" ON user_2fa_settings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own 2FA settings" ON user_2fa_settings
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for user_2fa_verification_log (read-only for users)
CREATE POLICY "Users can view own verification log" ON user_2fa_verification_log
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role can insert verification log" ON user_2fa_verification_log
  FOR INSERT WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- Function to check if user has 2FA enabled
CREATE OR REPLACE FUNCTION has_2fa_enabled(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_2fa_enabled BOOLEAN;
BEGIN
  SELECT (totp_enabled OR sms_enabled) INTO v_2fa_enabled
  FROM user_2fa_settings
  WHERE user_id = p_user_id;
  
  RETURN COALESCE(v_2fa_enabled, false);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to generate backup codes
CREATE OR REPLACE FUNCTION generate_backup_codes(p_user_id UUID, p_count INTEGER DEFAULT 10)
RETURNS SETOF TEXT AS $$
DECLARE
  v_code TEXT;
  i INTEGER;
BEGIN
  -- Delete existing unused backup codes
  DELETE FROM user_backup_codes 
  WHERE user_id = p_user_id AND used = false;
  
  -- Generate new backup codes
  FOR i IN 1..p_count LOOP
    -- Generate a random 8-character alphanumeric code
    v_code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
    
    -- Insert the code
    INSERT INTO user_backup_codes (user_id, code)
    VALUES (p_user_id, v_code);
    
    RETURN NEXT v_code;
  END LOOP;
  
  -- Update settings to indicate backup codes have been generated
  UPDATE user_2fa_settings
  SET backup_codes_generated = true,
      backup_codes_generated_at = now(),
      updated_at = now()
  WHERE user_id = p_user_id;
  
  RETURN;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to verify backup code
CREATE OR REPLACE FUNCTION verify_backup_code(p_user_id UUID, p_code TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  v_valid BOOLEAN;
BEGIN
  -- Check if the code exists and hasn't been used
  SELECT EXISTS(
    SELECT 1 FROM user_backup_codes
    WHERE user_id = p_user_id 
      AND code = p_code 
      AND used = false
  ) INTO v_valid;
  
  IF v_valid THEN
    -- Mark the code as used
    UPDATE user_backup_codes
    SET used = true,
        used_at = now()
    WHERE user_id = p_user_id AND code = p_code;
  END IF;
  
  RETURN v_valid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;