-- E2E Test Seed Data

-- Test users
INSERT INTO users (id, email, name, avatar_url) VALUES
    ('11111111-1111-1111-1111-111111111111', 'test@example.com', 'Test User', 'https://ui-avatars.com/api/?name=Test+User'),
    ('22222222-2222-2222-2222-222222222222', 'jane@example.com', 'Jane Doe', 'https://ui-avatars.com/api/?name=Jane+Doe');

-- Test folders
INSERT INTO folders (id, name, user_id, parent_id) VALUES
    ('a1111111-1111-1111-1111-111111111111', 'Work', '11111111-1111-1111-1111-111111111111', NULL),
    ('a2222222-2222-2222-2222-222222222222', 'Personal', '11111111-1111-1111-1111-111111111111', NULL),
    ('a3333333-3333-3333-3333-333333333333', 'Projects', '11111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111');

-- Test tags
INSERT INTO tags (id, name, color, user_id) VALUES
    ('b1111111-1111-1111-1111-111111111111', 'Important', '#EF4444', '11111111-1111-1111-1111-111111111111'),
    ('b2222222-2222-2222-2222-222222222222', 'Todo', '#3B82F6', '11111111-1111-1111-1111-111111111111'),
    ('b3333333-3333-3333-3333-333333333333', 'Ideas', '#10B981', '11111111-1111-1111-1111-111111111111');

-- Test notes
INSERT INTO notes (id, title, content, user_id, folder_id) VALUES
    (
        'c1111111-1111-1111-1111-111111111111',
        'Welcome to Notable',
        '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Welcome to Notable! This is your first note."}]}]}',
        '11111111-1111-1111-1111-111111111111',
        NULL
    ),
    (
        'c2222222-2222-2222-2222-222222222222',
        'Meeting Notes',
        '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Team Meeting"}]}, {"type": "paragraph", "content": [{"type": "text", "text": "Discussed project roadmap and upcoming features."}]}]}',
        '11111111-1111-1111-1111-111111111111',
        'a1111111-1111-1111-1111-111111111111'
    ),
    (
        'c3333333-3333-3333-3333-333333333333',
        'Shopping List',
        '{"type": "doc", "content": [{"type": "bulletList", "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Milk"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Bread"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Coffee"}]}]}]}]}',
        '11111111-1111-1111-1111-111111111111',
        'a2222222-2222-2222-2222-222222222222'
    ),
    (
        'c4444444-4444-4444-4444-444444444444',
        'Code Snippet',
        '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Here is a code example:"}]}, {"type": "codeBlock", "attrs": {"language": "javascript"}, "content": [{"type": "text", "text": "function hello() {\n  console.log(''Hello, World!'');\n}"}]}]}',
        '11111111-1111-1111-1111-111111111111',
        'a3333333-3333-3333-3333-333333333333'
    );

-- Associate notes with tags
INSERT INTO note_tags (note_id, tag_id) VALUES
    ('c1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111'),
    ('c2222222-2222-2222-2222-222222222222', 'b1111111-1111-1111-1111-111111111111'),
    ('c2222222-2222-2222-2222-222222222222', 'b2222222-2222-2222-2222-222222222222'),
    ('c3333333-3333-3333-3333-333333333333', 'b2222222-2222-2222-2222-222222222222'),
    ('c4444444-4444-4444-4444-444444444444', 'b3333333-3333-3333-3333-333333333333');

-- Template categories
INSERT INTO template_categories (id, name, description, icon, display_order, is_system) VALUES
    ('personal', 'Personal', 'Personal templates', '📝', 1, true),
    ('meeting', 'Meeting Notes', 'Meeting templates', '👥', 2, true),
    ('project', 'Projects', 'Project templates', '📁', 3, true),
    ('work', 'Work', 'Work templates', '💼', 4, true);

-- Templates
INSERT INTO templates (id, name, description, category, content, is_public, is_system, created_by, usage_count, rating, rating_count) VALUES
    (
        'daily-journal',
        'Daily Journal',
        'Structured daily journal for reflection and planning',
        'personal',
        '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 1}, "content": [{"type": "text", "text": "Daily Journal - {{date}}"}]}, {"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Today''s Overview"}]}]}',
        true,
        true,
        '11111111-1111-1111-1111-111111111111',
        150,
        4.8,
        25
    ),
    (
        'daily-standup',
        'Daily Standup',
        'Quick daily standup meeting notes',
        'meeting',
        '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 1}, "content": [{"type": "text", "text": "Daily Standup - {{date}}"}]}, {"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Yesterday"}]}]}',
        true,
        true,
        '11111111-1111-1111-1111-111111111111',
        200,
        4.5,
        40
    ),
    (
        'weekly-team-meeting',
        'Weekly Team Meeting',
        'Comprehensive weekly team meeting template',
        'meeting',
        '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 1}, "content": [{"type": "text", "text": "Weekly Team Meeting - {{date}}"}]}, {"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Agenda"}]}]}',
        true,
        true,
        '11111111-1111-1111-1111-111111111111',
        175,
        4.6,
        30
    ),
    (
        'project-kickoff',
        'Project Kickoff',
        'Template for project kickoff meetings',
        'project',
        '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 1}, "content": [{"type": "text", "text": "Project Kickoff - {{project_name}}"}]}, {"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Overview"}]}]}',
        true,
        true,
        '11111111-1111-1111-1111-111111111111',
        120,
        4.7,
        20
    );

-- Template variables
INSERT INTO template_variables (template_id, name, label, type, required, display_order) VALUES
    ('daily-journal', 'date', 'Date', 'date', true, 0),
    ('daily-journal', 'mood', 'Mood', 'select', true, 1),
    ('daily-journal', 'gratitude', 'Gratitude', 'text', true, 2),
    ('daily-standup', 'date', 'Date', 'date', true, 0),
    ('daily-standup', 'yesterday', 'Yesterday', 'text', false, 1),
    ('daily-standup', 'today', 'Today', 'text', false, 2),
    ('daily-standup', 'blockers', 'Blockers', 'text', false, 3),
    ('weekly-team-meeting', 'date', 'Date', 'date', true, 0),
    ('weekly-team-meeting', 'team', 'Team', 'text', true, 1),
    ('project-kickoff', 'project_name', 'Project Name', 'text', true, 0),
    ('project-kickoff', 'start_date', 'Start Date', 'date', true, 1);

-- Update template variable options
UPDATE template_variables SET options = '["Great", "Good", "Neutral", "Bad"]' WHERE template_id = 'daily-journal' AND name = 'mood';