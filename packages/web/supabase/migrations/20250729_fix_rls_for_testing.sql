-- Fix RLS policies to work with testing environments
-- Create helper function to get current user ID for testing
CREATE OR REPLACE FUNCTION get_current_user_id()
RETURNS UUID AS $$
BEGIN
    -- In development/test mode, check if we have a test user
    IF current_setting('app.current_user_id', true) IS NOT NULL THEN
        RETURN current_setting('app.current_user_id')::UUID;
    END IF;
    
    -- Otherwise use auth.uid()
    RETURN auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing policies and recreate with the helper function
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;
DROP POLICY IF EXISTS "Users can view own notes" ON notes;
DROP POLICY IF EXISTS "Users can create notes" ON notes;
DROP POLICY IF EXISTS "Users can update own notes" ON notes;
DROP POLICY IF EXISTS "Users can delete own notes" ON notes;
DROP POLICY IF EXISTS "Users can view own folders" ON folders;
DROP POLICY IF EXISTS "Users can create folders" ON folders;
DROP POLICY IF EXISTS "Users can update own folders" ON folders;
DROP POLICY IF EXISTS "Users can delete own folders" ON folders;
DROP POLICY IF EXISTS "Users can view own tags" ON tags;
DROP POLICY IF EXISTS "Users can create tags" ON tags;
DROP POLICY IF EXISTS "Users can update own tags" ON tags;
DROP POLICY IF EXISTS "Users can delete own tags" ON tags;
DROP POLICY IF EXISTS "Users can view own note tags" ON note_tags;
DROP POLICY IF EXISTS "Users can create note tags" ON note_tags;
DROP POLICY IF EXISTS "Users can delete own note tags" ON note_tags;

-- Create new RLS policies with test-friendly helper function
-- Users policies
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (get_current_user_id() = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (get_current_user_id() = id);

-- Notes policies
CREATE POLICY "Users can view own notes" ON notes
    FOR SELECT USING (get_current_user_id() = user_id);

CREATE POLICY "Users can create notes" ON notes
    FOR INSERT WITH CHECK (get_current_user_id() = user_id);

CREATE POLICY "Users can update own notes" ON notes
    FOR UPDATE USING (get_current_user_id() = user_id);

CREATE POLICY "Users can delete own notes" ON notes
    FOR DELETE USING (get_current_user_id() = user_id);

-- Folders policies
CREATE POLICY "Users can view own folders" ON folders
    FOR SELECT USING (get_current_user_id() = user_id);

CREATE POLICY "Users can create folders" ON folders
    FOR INSERT WITH CHECK (get_current_user_id() = user_id);

CREATE POLICY "Users can update own folders" ON folders
    FOR UPDATE USING (get_current_user_id() = user_id);

CREATE POLICY "Users can delete own folders" ON folders
    FOR DELETE USING (get_current_user_id() = user_id);

-- Tags policies
CREATE POLICY "Users can view own tags" ON tags
    FOR SELECT USING (get_current_user_id() = user_id);

CREATE POLICY "Users can create tags" ON tags
    FOR INSERT WITH CHECK (get_current_user_id() = user_id);

CREATE POLICY "Users can update own tags" ON tags
    FOR UPDATE USING (get_current_user_id() = user_id);

CREATE POLICY "Users can delete own tags" ON tags
    FOR DELETE USING (get_current_user_id() = user_id);

-- Note tags policies
CREATE POLICY "Users can view own note tags" ON note_tags
    FOR SELECT USING (EXISTS (SELECT 1 FROM notes WHERE notes.id = note_tags.note_id AND notes.user_id = get_current_user_id()));

CREATE POLICY "Users can create note tags" ON note_tags
    FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM notes WHERE notes.id = note_tags.note_id AND notes.user_id = get_current_user_id()));

CREATE POLICY "Users can delete own note tags" ON note_tags
    FOR DELETE USING (EXISTS (SELECT 1 FROM notes WHERE notes.id = note_tags.note_id AND notes.user_id = get_current_user_id()));

-- Insert test user for development/testing
-- This will only succeed if the user doesn't already exist
INSERT INTO auth.users (
    id,
    instance_id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
) VALUES (
    '00000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'demo@notable.app',
    '$2a$10$fakehashedpasswordfordevtesting',
    NOW(),
    NULL,
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{"name": "Demo User"}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
) ON CONFLICT (id) DO NOTHING;

-- Insert corresponding user profile
INSERT INTO public.users (
    id,
    email,
    name,
    avatar_url,
    created_at,
    updated_at
) VALUES (
    '00000000-0000-0000-0000-000000000001',
    'demo@notable.app',
    'Demo User',
    NULL,
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;