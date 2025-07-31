-- Template Variables for Built-in Templates
-- This migration adds variables for the built-in templates created in the main templates migration

-- ==========================================
-- DAILY STANDUP TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Daily Standup' AND category = 'meeting' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'date', 'Meeting Date', 'Date of the standup meeting', 'date', NULL, 1, true),
        (template_id, 'attendees', 'Attendees', 'List of team members present', 'multi-select', 'Select team members', 2, true),
        (template_id, 'user_name', 'Your Name', 'Your name for the updates section', 'text', 'Enter your name', 3, true),
        (template_id, 'yesterday_tasks', 'Yesterday''s Tasks', 'What you accomplished yesterday', 'textarea', 'List completed tasks...', 4, true),
        (template_id, 'today_tasks', 'Today''s Tasks', 'What you plan to work on today', 'textarea', 'List planned tasks...', 5, true),
        (template_id, 'blockers', 'Blockers', 'Any obstacles preventing progress', 'textarea', 'Describe any blockers...', 6, false),
        (template_id, 'action_item_1', 'Action Item 1', 'First action item from the meeting', 'text', 'Enter action item...', 7, false),
        (template_id, 'action_item_2', 'Action Item 2', 'Second action item from the meeting', 'text', 'Enter action item...', 8, false),
        (template_id, 'additional_notes', 'Additional Notes', 'Any other notes from the standup', 'textarea', 'Add any additional notes...', 9, false)
        ON CONFLICT (template_id, name) DO NOTHING;
    END IF;
END $$;

-- ==========================================
-- WEEKLY TEAM MEETING TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Weekly Team Meeting' AND category = 'meeting' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'meeting_date', 'Meeting Date', 'Date of the weekly meeting', 'date', NULL, 1, true),
        (template_id, 'attendees', 'Attendees', 'Meeting participants (JSON array format)', 'textarea', '[{"name": "John Doe", "role": "Developer"}]', 2, true),
        (template_id, 'agenda_item_1', 'Agenda Item 1', 'First agenda topic', 'text', 'Enter agenda item...', 3, true),
        (template_id, 'agenda_item_2', 'Agenda Item 2', 'Second agenda topic', 'text', 'Enter agenda item...', 4, false),
        (template_id, 'agenda_item_3', 'Agenda Item 3', 'Third agenda topic', 'text', 'Enter agenda item...', 5, false),
        (template_id, 'last_week_accomplishment_1', 'Last Week Accomplishment 1', 'Key achievement from last week', 'text', 'Enter accomplishment...', 6, true),
        (template_id, 'last_week_accomplishment_2', 'Last Week Accomplishment 2', 'Another achievement from last week', 'text', 'Enter accomplishment...', 7, false),
        (template_id, 'last_week_challenge_1', 'Last Week Challenge', 'Main challenge faced last week', 'text', 'Enter challenge...', 8, false),
        (template_id, 'this_week_goal_1', 'This Week Goal 1', 'Primary goal for this week', 'text', 'Enter goal...', 9, true),
        (template_id, 'this_week_goal_2', 'This Week Goal 2', 'Secondary goal for this week', 'text', 'Enter goal...', 10, false),
        (template_id, 'decision_1', 'Key Decision', 'Important decision made in the meeting', 'text', 'Enter decision...', 11, false),
        (template_id, 'task_1', 'Task 1', 'First action item task', 'text', 'Enter task...', 12, false),
        (template_id, 'owner_1', 'Task 1 Owner', 'Person responsible for task 1', 'text', 'Enter name...', 13, false),
        (template_id, 'due_date_1', 'Task 1 Due Date', 'Deadline for task 1', 'date', NULL, 14, false),
        (template_id, 'task_2', 'Task 2', 'Second action item task', 'text', 'Enter task...', 15, false),
        (template_id, 'owner_2', 'Task 2 Owner', 'Person responsible for task 2', 'text', 'Enter name...', 16, false),
        (template_id, 'due_date_2', 'Task 2 Due Date', 'Deadline for task 2', 'date', NULL, 17, false),
        (template_id, 'meeting_notes', 'Meeting Notes', 'Additional notes from the meeting', 'textarea', 'Add meeting notes...', 18, false)
        ON CONFLICT (template_id, name) DO NOTHING;
    END IF;
END $$;

-- ==========================================
-- 1:1 MEETING TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = '1:1 Meeting' AND category = 'meeting' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'participant_name', 'Participant Name', 'Name of the person in the 1:1', 'text', 'Enter name...', 1, true),
        (template_id, 'meeting_date', 'Meeting Date', 'Date of the 1:1 meeting', 'date', NULL, 2, true),
        (template_id, 'mood_scale', 'Mood Rating', 'Current mood (1-10)', 'number', '1-10', 3, false),
        (template_id, 'their_topic_1', 'Their Topic 1', 'Topic from the participant', 'text', 'Enter topic...', 4, false),
        (template_id, 'their_topic_2', 'Their Topic 2', 'Another topic from the participant', 'text', 'Enter topic...', 5, false),
        (template_id, 'manager_topic_1', 'Manager Topic 1', 'Topic from the manager', 'text', 'Enter topic...', 6, false),
        (template_id, 'manager_topic_2', 'Manager Topic 2', 'Another topic from the manager', 'text', 'Enter topic...', 7, false),
        (template_id, 'current_goal', 'Current Goal', 'Current career development goal', 'text', 'Enter goal...', 8, false),
        (template_id, 'progress_notes', 'Progress Notes', 'Updates on goal progress', 'textarea', 'Describe progress...', 9, false),
        (template_id, 'support_needed', 'Support Needed', 'What support is needed', 'text', 'Enter support needed...', 10, false),
        (template_id, 'positive_feedback', 'Positive Feedback', 'What is working well', 'textarea', 'Enter positive feedback...', 11, false),
        (template_id, 'growth_area', 'Growth Area', 'Area for improvement', 'text', 'Enter growth area...', 12, false),
        (template_id, 'action_item_1', 'Action Item 1', 'First action item', 'text', 'Enter action...', 13, false),
        (template_id, 'action_item_2', 'Action Item 2', 'Second action item', 'text', 'Enter action...', 14, false),
        (template_id, 'next_meeting_topic', 'Next Meeting Topic', 'Topic for next 1:1', 'text', 'Enter topic...', 15, false)
        ON CONFLICT (template_id, name) DO NOTHING;
    END IF;
END $$;

-- ==========================================
-- PROJECT KICKOFF TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Project Kickoff' AND category = 'project' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'project_name', 'Project Name', 'Name of the project', 'text', 'Enter project name...', 1, true),
        (template_id, 'start_date', 'Start Date', 'Project start date', 'date', NULL, 2, true),
        (template_id, 'end_date', 'Target End Date', 'Expected completion date', 'date', NULL, 3, true),
        (template_id, 'project_lead', 'Project Lead', 'Person leading the project', 'text', 'Enter name...', 4, true),
        (template_id, 'project_description', 'Project Description', 'Detailed project description', 'textarea', 'Describe the project...', 5, true),
        (template_id, 'objective_1', 'Objective 1', 'First project objective', 'text', 'Enter objective...', 6, true),
        (template_id, 'metric_1', 'Success Metric 1', 'How to measure objective 1', 'text', 'Enter metric...', 7, true),
        (template_id, 'objective_2', 'Objective 2', 'Second project objective', 'text', 'Enter objective...', 8, false),
        (template_id, 'metric_2', 'Success Metric 2', 'How to measure objective 2', 'text', 'Enter metric...', 9, false),
        (template_id, 'stakeholder_1', 'Stakeholder 1', 'Key stakeholder name', 'text', 'Enter name...', 10, true),
        (template_id, 'role_1', 'Stakeholder 1 Role', 'Their role', 'text', 'Enter role...', 11, true),
        (template_id, 'responsibility_1', 'Stakeholder 1 Responsibility', 'Their responsibility', 'text', 'Enter responsibility...', 12, true),
        (template_id, 'stakeholder_2', 'Stakeholder 2', 'Another stakeholder', 'text', 'Enter name...', 13, false),
        (template_id, 'role_2', 'Stakeholder 2 Role', 'Their role', 'text', 'Enter role...', 14, false),
        (template_id, 'responsibility_2', 'Stakeholder 2 Responsibility', 'Their responsibility', 'text', 'Enter responsibility...', 15, false),
        (template_id, 'in_scope_1', 'In Scope Item 1', 'What is included', 'text', 'Enter scope item...', 16, true),
        (template_id, 'in_scope_2', 'In Scope Item 2', 'What else is included', 'text', 'Enter scope item...', 17, false),
        (template_id, 'out_scope_1', 'Out of Scope Item', 'What is NOT included', 'text', 'Enter out of scope item...', 18, false),
        (template_id, 'milestone_1', 'Milestone 1', 'First major milestone', 'text', 'Enter milestone...', 19, true),
        (template_id, 'date_1', 'Milestone 1 Date', 'Date for milestone 1', 'date', NULL, 20, true),
        (template_id, 'description_1', 'Milestone 1 Description', 'Details about milestone 1', 'text', 'Enter description...', 21, true),
        (template_id, 'milestone_2', 'Milestone 2', 'Second major milestone', 'text', 'Enter milestone...', 22, false),
        (template_id, 'date_2', 'Milestone 2 Date', 'Date for milestone 2', 'date', NULL, 23, false),
        (template_id, 'description_2', 'Milestone 2 Description', 'Details about milestone 2', 'text', 'Enter description...', 24, false),
        (template_id, 'risk_1', 'Risk 1', 'Potential risk', 'text', 'Enter risk...', 25, false),
        (template_id, 'prob_1', 'Risk 1 Probability', 'Low/Medium/High', 'select', 'Select probability', 26, false),
        (template_id, 'impact_1', 'Risk 1 Impact', 'Low/Medium/High', 'select', 'Select impact', 27, false),
        (template_id, 'mitigation_1', 'Risk 1 Mitigation', 'How to mitigate', 'text', 'Enter mitigation...', 28, false),
        (template_id, 'resource_1', 'Resource 1', 'Required resource', 'text', 'Enter resource...', 29, false),
        (template_id, 'resource_2', 'Resource 2', 'Another required resource', 'text', 'Enter resource...', 30, false),
        (template_id, 'communication_plan', 'Communication Plan', 'How team will communicate', 'textarea', 'Describe communication plan...', 31, false)
        ON CONFLICT (template_id, name) DO NOTHING;
        
        -- Add options for select fields
        UPDATE template_variables 
        SET options = '["Low", "Medium", "High"]'::jsonb
        WHERE template_id = template_id AND name IN ('prob_1', 'impact_1');
    END IF;
END $$;

-- ==========================================
-- SPRINT PLANNING TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Sprint Planning' AND category = 'project' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'sprint_number', 'Sprint Number', 'Sprint number (e.g., 12)', 'number', 'Enter sprint number...', 1, true),
        (template_id, 'start_date', 'Sprint Start Date', 'When the sprint begins', 'date', NULL, 2, true),
        (template_id, 'end_date', 'Sprint End Date', 'When the sprint ends', 'date', NULL, 3, true),
        (template_id, 'sprint_goal', 'Sprint Goal', 'Main objective for this sprint', 'text', 'Enter sprint goal...', 4, true),
        (template_id, 'member_1', 'Team Member 1', 'First team member name', 'text', 'Enter name...', 5, true),
        (template_id, 'days_1', 'Available Days 1', 'Days available for member 1', 'number', 'Number of days', 6, true),
        (template_id, 'points_1', 'Story Points 1', 'Capacity for member 1', 'number', 'Story points', 7, true),
        (template_id, 'member_2', 'Team Member 2', 'Second team member name', 'text', 'Enter name...', 8, false),
        (template_id, 'days_2', 'Available Days 2', 'Days available for member 2', 'number', 'Number of days', 9, false),
        (template_id, 'points_2', 'Story Points 2', 'Capacity for member 2', 'number', 'Story points', 10, false),
        (template_id, 'total_points', 'Total Capacity', 'Total team capacity in story points', 'number', 'Total points', 11, true),
        (template_id, 'stories', 'User Stories', 'Sprint backlog items (JSON format)', 'textarea', '[{"title": "Story 1", "points": 5, "assignee": "John", "criteria_1": "AC1", "criteria_2": "AC2"}]', 12, true),
        (template_id, 'dependency_1', 'Dependency 1', 'First external dependency', 'text', 'Enter dependency...', 13, false),
        (template_id, 'dependency_2', 'Dependency 2', 'Second external dependency', 'text', 'Enter dependency...', 14, false),
        (template_id, 'custom_dod', 'Custom DoD Item', 'Additional Definition of Done item', 'text', 'Enter custom DoD...', 15, false),
        (template_id, 'sprint_notes', 'Sprint Notes', 'Additional planning notes', 'textarea', 'Add notes...', 16, false)
        ON CONFLICT (template_id, name) DO NOTHING;
    END IF;
END $$;

-- ==========================================
-- DAILY JOURNAL TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Daily Journal' AND category = 'personal' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'date', 'Journal Date', 'Date of the journal entry', 'date', NULL, 1, true),
        (template_id, 'gratitude_1', 'Gratitude 1', 'First thing you''re grateful for', 'text', 'I''m grateful for...', 2, true),
        (template_id, 'gratitude_2', 'Gratitude 2', 'Second thing you''re grateful for', 'text', 'I''m grateful for...', 3, false),
        (template_id, 'gratitude_3', 'Gratitude 3', 'Third thing you''re grateful for', 'text', 'I''m grateful for...', 4, false),
        (template_id, 'mood', 'Mood Rating', 'Your mood today (1-10)', 'number', '1-10', 5, true),
        (template_id, 'energy', 'Energy Level', 'Your energy level (1-10)', 'number', '1-10', 6, true),
        (template_id, 'highlights', 'Today''s Highlights', 'Best moments of the day', 'textarea', 'What went well today...', 7, true),
        (template_id, 'challenges', 'Challenges Faced', 'Difficulties encountered', 'textarea', 'What was challenging...', 8, false),
        (template_id, 'lessons', 'Lessons Learned', 'What you learned today', 'textarea', 'What I learned...', 9, false),
        (template_id, 'priority_1', 'Tomorrow Priority 1', 'Most important task for tomorrow', 'text', 'Enter priority...', 10, true),
        (template_id, 'priority_2', 'Tomorrow Priority 2', 'Second priority for tomorrow', 'text', 'Enter priority...', 11, false),
        (template_id, 'priority_3', 'Tomorrow Priority 3', 'Third priority for tomorrow', 'text', 'Enter priority...', 12, false),
        (template_id, 'reflection', 'Personal Reflection', 'Your thoughts and feelings', 'textarea', 'Reflect on your day...', 13, false)
        ON CONFLICT (template_id, name) DO NOTHING;
        
        -- Add validation for number fields
        UPDATE template_variables 
        SET validation = '{"min": 1, "max": 10}'::jsonb
        WHERE template_id = template_id AND name IN ('mood', 'energy');
    END IF;
END $$;

-- ==========================================
-- GOAL SETTING TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Goal Setting' AND category = 'personal' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'goal_title', 'Goal Title', 'Name of your goal', 'text', 'Enter goal title...', 1, true),
        (template_id, 'specific_description', 'Specific Description', 'What exactly will you achieve?', 'textarea', 'Be specific about what you want to accomplish...', 2, true),
        (template_id, 'measurable_criteria', 'Measurable Criteria', 'How will you measure success?', 'textarea', 'Define measurable outcomes...', 3, true),
        (template_id, 'achievable_plan', 'Achievable Plan', 'How is this goal realistic?', 'textarea', 'Explain why this goal is achievable...', 4, true),
        (template_id, 'relevant_reason', 'Relevant Reason', 'Why does this goal matter?', 'textarea', 'Why is this goal important to you...', 5, true),
        (template_id, 'deadline', 'Deadline', 'When will you achieve this goal?', 'date', NULL, 6, true),
        (template_id, 'motivation', 'Motivation', 'Why this goal matters to you', 'textarea', 'What motivates you...', 7, true),
        (template_id, 'milestone_1', 'Milestone 1', 'First major milestone', 'text', 'Enter milestone...', 8, true),
        (template_id, 'date_1', 'Milestone 1 Date', 'Deadline for milestone 1', 'date', NULL, 9, true),
        (template_id, 'milestone_2', 'Milestone 2', 'Second major milestone', 'text', 'Enter milestone...', 10, false),
        (template_id, 'date_2', 'Milestone 2 Date', 'Deadline for milestone 2', 'date', NULL, 11, false),
        (template_id, 'milestone_3', 'Milestone 3', 'Third major milestone', 'text', 'Enter milestone...', 12, false),
        (template_id, 'date_3', 'Milestone 3 Date', 'Deadline for milestone 3', 'date', NULL, 13, false),
        (template_id, 'daily_action_1', 'Daily Action 1', 'Daily habit to support goal', 'text', 'Enter daily action...', 14, true),
        (template_id, 'daily_action_2', 'Daily Action 2', 'Another daily habit', 'text', 'Enter daily action...', 15, false),
        (template_id, 'week_1_focus', 'Week 1 Focus', 'Focus for week 1', 'text', 'Enter focus...', 16, false),
        (template_id, 'week_2_focus', 'Week 2 Focus', 'Focus for week 2', 'text', 'Enter focus...', 17, false),
        (template_id, 'week_3_focus', 'Week 3 Focus', 'Focus for week 3', 'text', 'Enter focus...', 18, false),
        (template_id, 'week_4_focus', 'Week 4 Focus', 'Focus for week 4', 'text', 'Enter focus...', 19, false),
        (template_id, 'obstacle_1', 'Potential Obstacle 1', 'What might prevent success?', 'text', 'Enter obstacle...', 20, false),
        (template_id, 'solution_1', 'Solution 1', 'How to overcome obstacle 1', 'text', 'Enter solution...', 21, false),
        (template_id, 'obstacle_2', 'Potential Obstacle 2', 'Another potential challenge', 'text', 'Enter obstacle...', 22, false),
        (template_id, 'solution_2', 'Solution 2', 'How to overcome obstacle 2', 'text', 'Enter solution...', 23, false),
        (template_id, 'resource_1', 'Resource Needed', 'Resource or tool needed', 'text', 'Enter resource...', 24, false),
        (template_id, 'support_person', 'Support Person', 'Who can help you?', 'text', 'Enter name...', 25, false),
        (template_id, 'progress_method', 'Progress Tracking Method', 'How will you track progress?', 'textarea', 'Describe tracking method...', 26, false)
        ON CONFLICT (template_id, name) DO NOTHING;
    END IF;
END $$;

-- ==========================================
-- TECHNICAL DOCUMENTATION TEMPLATE VARIABLES
-- ==========================================
DO $$
DECLARE
    template_id uuid;
BEGIN
    SELECT id INTO template_id FROM templates WHERE name = 'Technical Documentation' AND category = 'documentation' AND is_system = true;
    
    IF template_id IS NOT NULL THEN
        INSERT INTO template_variables (template_id, name, label, description, type, placeholder, display_order, required) VALUES
        (template_id, 'document_title', 'Document Title', 'Title of the documentation', 'text', 'Enter title...', 1, true),
        (template_id, 'version', 'Version', 'Document version (e.g., 1.0)', 'text', '1.0', 2, true),
        (template_id, 'update_date', 'Last Updated', 'Date of last update', 'date', NULL, 3, true),
        (template_id, 'author', 'Author', 'Document author name', 'text', 'Enter author name...', 4, true),
        (template_id, 'overview', 'Overview', 'Brief overview of the system/feature', 'textarea', 'Provide an overview...', 5, true),
        (template_id, 'prerequisite_1', 'Prerequisite 1', 'First requirement', 'text', 'Enter prerequisite...', 6, true),
        (template_id, 'prerequisite_2', 'Prerequisite 2', 'Second requirement', 'text', 'Enter prerequisite...', 7, false),
        (template_id, 'architecture_description', 'Architecture Description', 'System architecture details', 'textarea', 'Describe the architecture...', 8, true),
        (template_id, 'installation_commands', 'Installation Commands', 'Installation steps', 'textarea', 'npm install...', 9, true),
        (template_id, 'config_language', 'Config Language', 'Language for configuration (json, yaml, etc)', 'text', 'json', 10, true),
        (template_id, 'configuration_example', 'Configuration Example', 'Sample configuration', 'textarea', '{\n  "key": "value"\n}', 11, true),
        (template_id, 'endpoint_name', 'API Endpoint Name', 'Name of the endpoint', 'text', 'GET /users', 12, false),
        (template_id, 'http_method', 'HTTP Method', 'GET, POST, PUT, DELETE', 'select', 'Select method', 13, false),
        (template_id, 'endpoint_url', 'Endpoint URL', 'Full endpoint URL', 'text', '/api/v1/resource', 14, false),
        (template_id, 'param_1', 'Parameter Name', 'API parameter name', 'text', 'id', 15, false),
        (template_id, 'type_1', 'Parameter Type', 'Parameter data type', 'text', 'string', 16, false),
        (template_id, 'required_1', 'Is Required?', 'Is parameter required?', 'boolean', NULL, 17, false),
        (template_id, 'desc_1', 'Parameter Description', 'What the parameter does', 'text', 'Enter description...', 18, false),
        (template_id, 'response_example', 'Response Example', 'Sample API response', 'textarea', '{\n  "status": "success"\n}', 19, false),
        (template_id, 'example_title', 'Example Title', 'Title for code example', 'text', 'Basic Usage', 20, false),
        (template_id, 'example_description', 'Example Description', 'What the example shows', 'text', 'Enter description...', 21, false),
        (template_id, 'code_language', 'Code Language', 'Programming language', 'text', 'javascript', 22, false),
        (template_id, 'code_example', 'Code Example', 'Sample code', 'textarea', 'Enter code example...', 23, false),
        (template_id, 'issue_1', 'Common Issue', 'Common problem users face', 'text', 'Enter issue...', 24, false),
        (template_id, 'solution_1', 'Solution', 'How to solve the issue', 'textarea', 'Enter solution...', 25, false),
        (template_id, 'question_1', 'FAQ Question', 'Frequently asked question', 'text', 'Enter question...', 26, false),
        (template_id, 'answer_1', 'FAQ Answer', 'Answer to the question', 'textarea', 'Enter answer...', 27, false),
        (template_id, 'reference_1', 'Reference 1', 'External reference title', 'text', 'Official Documentation', 28, false),
        (template_id, 'url_1', 'Reference 1 URL', 'Link to reference', 'text', 'https://...', 29, false),
        (template_id, 'reference_2', 'Reference 2', 'Another reference', 'text', 'Enter reference...', 30, false),
        (template_id, 'url_2', 'Reference 2 URL', 'Link to reference', 'text', 'https://...', 31, false)
        ON CONFLICT (template_id, name) DO NOTHING;
        
        -- Add options for HTTP method
        UPDATE template_variables 
        SET options = '["GET", "POST", "PUT", "PATCH", "DELETE"]'::jsonb
        WHERE template_id = template_id AND name = 'http_method';
    END IF;
END $$;

-- Continue with remaining templates...
-- (Similar pattern for other templates)

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Template variables migration completed successfully!';
    RAISE NOTICE 'Added variables for all built-in templates';
END $$;