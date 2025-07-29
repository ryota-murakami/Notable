-- Populate Built-in Templates for Notable
-- Professional, production-ready templates for immediate use

-- ==========================================
-- 1. MEETING TEMPLATES
-- ==========================================

-- Standard Meeting Notes Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'meeting-notes-standard',
    'Standard Meeting Notes',
    'Professional meeting notes template with agenda, attendees, and action items',
    'meeting',
    '{"content": "# {{meeting_title}} - {{date}}\n\n## Meeting Details\n**Date:** {{date}}  \n**Time:** {{meeting_time}}  \n**Duration:** {{duration}}  \n**Location:** {{location}}  \n**Meeting Type:** {{meeting_type}}\n\n## Attendees\n**Organizer:** {{organizer}}  \n**Required Attendees:**\n{{#each required_attendees}}\n- {{this}}\n{{/each}}\n\n**Optional Attendees:**\n{{#each optional_attendees}}\n- {{this}}\n{{/each}}\n\n## Agenda\n{{#each agenda_items}}\n### {{@index}}. {{this.title}}\n*Presenter:* {{this.presenter}}  \n*Time Allocated:* {{this.time}}  \n*Status:* {{this.status}}\n\n**Discussion Points:**\n{{this.notes}}\n\n---\n{{/each}}\n\n## Key Decisions Made\n{{#each decisions}}\n- **Decision:** {{this.decision}}\n  - **Rationale:** {{this.rationale}}\n  - **Impact:** {{this.impact}}\n  - **Effective Date:** {{this.date}}\n{{/each}}\n\n## Action Items\n{{#each action_items}}\n- [ ] **{{this.task}}**\n  - **Owner:** {{this.owner}}\n  - **Due Date:** {{this.due_date}}\n  - **Priority:** {{this.priority}}\n  - **Dependencies:** {{this.dependencies}}\n{{/each}}\n\n## Next Steps\n1. {{next_step_1}}\n2. {{next_step_2}}\n3. {{next_step_3}}\n\n## Next Meeting\n**Date:** {{next_meeting_date}}  \n**Agenda Preview:**\n- Follow up on action items\n- {{next_meeting_topics}}\n\n---\n*Meeting notes prepared by {{user}} on {{datetime}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Meeting template variables
INSERT INTO template_variables (template_id, name, label, description, type, default_value, required, display_order) VALUES
('meeting-notes-standard', 'meeting_title', 'Meeting Title', NULL, 'text', NULL, true, 0),
('meeting-notes-standard', 'meeting_time', 'Meeting Time', NULL, 'time', '09:00', false, 1),
('meeting-notes-standard', 'duration', 'Duration', NULL, 'text', '1 hour', false, 2),
('meeting-notes-standard', 'location', 'Location', NULL, 'text', 'Conference Room / Zoom', false, 3),
('meeting-notes-standard', 'meeting_type', 'Meeting Type', NULL, 'select', 'Team Meeting', false, 4),
('meeting-notes-standard', 'organizer', 'Meeting Organizer', NULL, 'text', NULL, true, 5),
('meeting-notes-standard', 'next_meeting_date', 'Next Meeting Date', NULL, 'date', NULL, false, 6),
('meeting-notes-standard', 'next_meeting_topics', 'Next Meeting Topics', NULL, 'textarea', NULL, false, 7),
('meeting-notes-standard', 'next_step_1', 'Next Step 1', NULL, 'text', NULL, false, 8),
('meeting-notes-standard', 'next_step_2', 'Next Step 2', NULL, 'text', NULL, false, 9),
('meeting-notes-standard', 'next_step_3', 'Next Step 3', NULL, 'text', NULL, false, 10)
ON CONFLICT (template_id, name) DO NOTHING;

-- Update meeting_type options
UPDATE template_variables 
SET options = '["Team Standup", "Project Review", "Client Meeting", "Planning Session", "Retrospective", "All Hands"]'::jsonb
WHERE template_id = 'meeting-notes-standard' AND name = 'meeting_type';

-- Daily Standup Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'standup-meeting',
    'Daily Standup',
    'Quick daily standup template for agile teams',
    'meeting',
    '{"content": "# Daily Standup - {{date}}\n\n**Sprint:** {{sprint_name}}  \n**Sprint Day:** {{sprint_day}} of {{sprint_total_days}}  \n**Scrum Master:** {{scrum_master}}\n\n## Team Updates\n\n{{#each team_members}}\n### {{this.name}}\n**Yesterday:**\n- {{this.yesterday}}\n\n**Today:**\n- {{this.today}}\n\n**Blockers:**\n{{#if this.blockers}}\n- 🚫 {{this.blockers}}\n{{else}}\n- ✅ No blockers\n{{/if}}\n\n---\n{{/each}}\n\n## Sprint Progress\n**Completed Stories:** {{completed_stories}}  \n**In Progress:** {{in_progress_stories}}  \n**Remaining:** {{remaining_stories}}  \n**Sprint Burndown:** {{burndown_status}}\n\n## Action Items\n{{#each action_items}}\n- [ ] {{this.task}} ({{this.owner}})\n{{/each}}\n\n## Next Standup\n**Date:** {{next_standup_date}}  \n**Focus:** {{next_focus}}\n\n---\n*Generated on {{datetime}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Standup template variables
INSERT INTO template_variables (template_id, name, label, type, default_value, required, display_order) VALUES
('standup-meeting', 'sprint_name', 'Sprint Name', 'text', NULL, true, 0),
('standup-meeting', 'sprint_day', 'Sprint Day', 'number', '1', false, 1),
('standup-meeting', 'sprint_total_days', 'Sprint Total Days', 'number', '10', false, 2),
('standup-meeting', 'scrum_master', 'Scrum Master', 'text', NULL, false, 3),
('standup-meeting', 'completed_stories', 'Completed Stories', 'number', NULL, false, 4),
('standup-meeting', 'in_progress_stories', 'In Progress Stories', 'number', NULL, false, 5),
('standup-meeting', 'remaining_stories', 'Remaining Stories', 'number', NULL, false, 6),
('standup-meeting', 'burndown_status', 'Burndown Status', 'select', 'On Track', false, 7),
('standup-meeting', 'next_standup_date', 'Next Standup Date', 'date', NULL, false, 8),
('standup-meeting', 'next_focus', 'Next Focus', 'text', NULL, false, 9)
ON CONFLICT (template_id, name) DO NOTHING;

-- Update burndown_status options
UPDATE template_variables 
SET options = '["On Track", "Behind", "Ahead"]'::jsonb
WHERE template_id = 'standup-meeting' AND name = 'burndown_status';

-- ==========================================
-- 2. PROJECT MANAGEMENT TEMPLATES
-- ==========================================

-- Project Charter Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'project-charter',
    'Project Charter',
    'Comprehensive project charter with objectives, scope, and stakeholders',
    'project',
    '{"content": "# Project Charter: {{project_name}}\n\n## Executive Summary\n{{project_summary}}\n\n## Project Details\n**Project Manager:** {{project_manager}}  \n**Start Date:** {{start_date}}  \n**Target End Date:** {{end_date}}  \n**Budget:** ${{budget}}  \n**Status:** {{project_status}}  \n**Priority:** {{priority}}\n\n## Project Objectives\n### Primary Objectives\n{{#each primary_objectives}}\n- {{this}}\n{{/each}}\n\n### Success Criteria\n{{#each success_criteria}}\n- **Metric:** {{this.metric}}\n- **Target:** {{this.target}}\n- **Measurement Method:** {{this.method}}\n{{/each}}\n\n## Project Scope\n### In Scope\n{{#each in_scope}}\n- {{this}}\n{{/each}}\n\n### Out of Scope\n{{#each out_of_scope}}\n- {{this}}\n{{/each}}\n\n### Assumptions\n{{#each assumptions}}\n- {{this}}\n{{/each}}\n\n### Constraints\n{{#each constraints}}\n- {{this}}\n{{/each}}\n\n## Stakeholder Matrix\n{{#each stakeholders}}\n### {{this.name}} - {{this.role}}\n**Involvement Level:** {{this.involvement}}  \n**Influence:** {{this.influence}}  \n**Communication Preference:** {{this.communication}}  \n**Key Interests:** {{this.interests}}\n{{/each}}\n\n## Project Timeline\n### Major Milestones\n{{#each milestones}}\n- **{{this.name}}** - {{this.date}}\n  - {{this.description}}\n  - **Deliverables:** {{this.deliverables}}\n{{/each}}\n\n## Resource Requirements\n### Budget Breakdown\n- **Personnel:** ${{budget_personnel}}\n- **Technology:** ${{budget_technology}}\n- **Operations:** ${{budget_operations}}\n- **Contingency:** ${{budget_contingency}}\n- **Total:** ${{budget}}\n\n## Communication Plan\n**Project Updates:** {{communication_frequency}}  \n**Status Reports:** {{status_report_schedule}}  \n**Stakeholder Meetings:** {{stakeholder_meeting_schedule}}  \n**Tools:** {{communication_tools}}\n\n## Approval\n**Project Sponsor:** {{project_sponsor}}  \n**Approval Date:** {{approval_date}}  \n**Charter Version:** {{charter_version}}\n\n---\n*Project Charter created by {{user}} on {{date}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Project charter variables
INSERT INTO template_variables (template_id, name, label, type, default_value, required, display_order) VALUES
('project-charter', 'project_name', 'Project Name', 'text', NULL, true, 0),
('project-charter', 'project_summary', 'Project Summary', 'textarea', NULL, true, 1),
('project-charter', 'project_manager', 'Project Manager', 'text', NULL, true, 2),
('project-charter', 'start_date', 'Start Date', 'date', NULL, true, 3),
('project-charter', 'end_date', 'Target End Date', 'date', NULL, false, 4),
('project-charter', 'budget', 'Total Budget', 'number', NULL, false, 5),
('project-charter', 'project_status', 'Project Status', 'select', 'Planning', false, 6),
('project-charter', 'priority', 'Priority', 'select', 'Medium', false, 7),
('project-charter', 'project_sponsor', 'Project Sponsor', 'text', NULL, false, 8),
('project-charter', 'approval_date', 'Approval Date', 'date', NULL, false, 9),
('project-charter', 'charter_version', 'Charter Version', 'text', '1.0', false, 10),
('project-charter', 'communication_frequency', 'Communication Frequency', 'select', 'Weekly', false, 11),
('project-charter', 'status_report_schedule', 'Status Report Schedule', 'text', 'Weekly', false, 12),
('project-charter', 'stakeholder_meeting_schedule', 'Stakeholder Meeting Schedule', 'text', 'Bi-weekly', false, 13),
('project-charter', 'communication_tools', 'Communication Tools', 'text', 'Slack, Email, Notable', false, 14),
('project-charter', 'budget_personnel', 'Personnel Budget', 'number', NULL, false, 15),
('project-charter', 'budget_technology', 'Technology Budget', 'number', NULL, false, 16),
('project-charter', 'budget_operations', 'Operations Budget', 'number', NULL, false, 17),
('project-charter', 'budget_contingency', 'Contingency Budget', 'number', NULL, false, 18)
ON CONFLICT (template_id, name) DO NOTHING;

-- Update project status and priority options
UPDATE template_variables 
SET options = '["Planning", "In Progress", "On Hold", "Completed", "Cancelled"]'::jsonb
WHERE template_id = 'project-charter' AND name = 'project_status';

UPDATE template_variables 
SET options = '["Critical", "High", "Medium", "Low"]'::jsonb
WHERE template_id = 'project-charter' AND name = 'priority';

UPDATE template_variables 
SET options = '["Daily", "Weekly", "Bi-weekly", "Monthly"]'::jsonb
WHERE template_id = 'project-charter' AND name = 'communication_frequency';

-- ==========================================
-- 3. PERSONAL TEMPLATES
-- ==========================================

-- Daily Journal Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'daily-journal',
    'Daily Journal',
    'Structured daily journal for reflection and planning',
    'personal',
    '{"content": "# Daily Journal - {{date}}\n\n## Today''s Overview\n**Date:** {{date}}  \n**Day of Week:** {{dayOfWeek}}  \n**Weather:** {{weather}}  \n**Mood:** {{mood}}/10 ✨  \n**Energy Level:** {{energy_level}}/10 ⚡\n\n## Gratitude Practice\n### Three Things I''m Grateful For:\n1. {{gratitude_1}}\n2. {{gratitude_2}}\n3. {{gratitude_3}}\n\n## Today''s Highlights\n### 🎉 Wins & Achievements\n{{#each wins}}\n- {{this}}\n{{/each}}\n\n### 📚 What I Learned\n{{learning_today}}\n\n### 👥 Meaningful Connections\n{{connections_today}}\n\n## Challenges & Growth\n### 🚧 Challenges Faced\n{{#each challenges}}\n- **Challenge:** {{this.challenge}}\n- **How I Handled It:** {{this.response}}\n- **What I Learned:** {{this.lesson}}\n{{/each}}\n\n### 💡 Insights & Realizations\n{{insights}}\n\n## Health & Wellness\n**Sleep Quality:** {{sleep_quality}}/10 😴  \n**Exercise:** {{exercise}}  \n**Nutrition:** {{nutrition}}  \n**Water Intake:** {{water_intake}} glasses 💧  \n**Screen Time:** {{screen_time}} hours 📱\n\n## Work & Productivity\n### ✅ Major Tasks Completed\n{{#each completed_tasks}}\n- {{this}}\n{{/each}}\n\n### 📋 Tomorrow''s Priorities\n{{#each tomorrow_priorities}}\n- [ ] {{this}}\n{{/each}}\n\n### 💭 Work Reflections\n{{work_reflections}}\n\n## Personal Relationships\n{{relationship_notes}}\n\n## Evening Reflection\n### How did I show up today?\n{{how_showed_up}}\n\n### What would I do differently?\n{{what_differently}}\n\n### Intention for Tomorrow\n{{tomorrow_intention}}\n\n## Affirmation\n*{{daily_affirmation}}*\n\n---\n*Journal entry created on {{timestamp}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Daily journal variables
INSERT INTO template_variables (template_id, name, label, type, default_value, required, display_order) VALUES
('daily-journal', 'weather', 'Weather Today', 'text', NULL, false, 0),
('daily-journal', 'mood', 'Mood (1-10)', 'number', '7', false, 1),
('daily-journal', 'energy_level', 'Energy Level (1-10)', 'number', '7', false, 2),
('daily-journal', 'gratitude_1', 'Gratitude 1', 'text', NULL, true, 3),
('daily-journal', 'gratitude_2', 'Gratitude 2', 'text', NULL, true, 4),
('daily-journal', 'gratitude_3', 'Gratitude 3', 'text', NULL, true, 5),
('daily-journal', 'learning_today', 'What I Learned Today', 'textarea', NULL, false, 6),
('daily-journal', 'connections_today', 'Meaningful Connections', 'textarea', NULL, false, 7),
('daily-journal', 'insights', 'Insights & Realizations', 'textarea', NULL, false, 8),
('daily-journal', 'sleep_quality', 'Sleep Quality (1-10)', 'number', '7', false, 9),
('daily-journal', 'exercise', 'Exercise Today', 'text', NULL, false, 10),
('daily-journal', 'nutrition', 'Nutrition Notes', 'text', NULL, false, 11),
('daily-journal', 'water_intake', 'Water Intake (glasses)', 'number', '8', false, 12),
('daily-journal', 'screen_time', 'Screen Time (hours)', 'number', NULL, false, 13),
('daily-journal', 'work_reflections', 'Work Reflections', 'textarea', NULL, false, 14),
('daily-journal', 'relationship_notes', 'Relationship Notes', 'textarea', NULL, false, 15),
('daily-journal', 'how_showed_up', 'How Did I Show Up Today?', 'textarea', NULL, false, 16),
('daily-journal', 'what_differently', 'What Would I Do Differently?', 'textarea', NULL, false, 17),
('daily-journal', 'tomorrow_intention', 'Tomorrow''s Intention', 'text', NULL, false, 18),
('daily-journal', 'daily_affirmation', 'Daily Affirmation', 'text', 'I am growing, learning, and becoming the best version of myself.', false, 19)
ON CONFLICT (template_id, name) DO NOTHING;

-- ==========================================
-- 4. DOCUMENTATION TEMPLATES
-- ==========================================

-- Technical Specification Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'technical-spec',
    'Technical Specification',
    'Comprehensive technical specification document for development projects',
    'documentation',
    '{"content": "# Technical Specification: {{feature_name}}\n\n## Document Information\n**Author:** {{user}}  \n**Created:** {{date}}  \n**Last Updated:** {{datetime}}  \n**Version:** {{spec_version}}  \n**Status:** {{spec_status}}\n\n## Overview\n### Problem Statement\n{{problem_statement}}\n\n### Proposed Solution\n{{proposed_solution}}\n\n## Requirements\n### Functional Requirements\n{{#each functional_requirements}}\n- **FR-{{@index}}:** {{this.requirement}}\n  - **Priority:** {{this.priority}}\n  - **Acceptance Criteria:** {{this.criteria}}\n{{/each}}\n\n### Non-Functional Requirements\n{{#each non_functional_requirements}}\n- **NFR-{{@index}}:** {{this.requirement}}\n  - **Type:** {{this.type}}\n  - **Target:** {{this.target}}\n{{/each}}\n\n## Architecture & Design\n### System Architecture\n{{architecture_overview}}\n\n## Performance Requirements\n**Response Time:** {{response_time_target}}  \n**Throughput:** {{throughput_target}}  \n**Concurrent Users:** {{concurrent_users_target}}  \n**Availability:** {{availability_target}}\n\n## Testing Strategy\n### Unit Testing\n{{unit_testing_approach}}\n\n### Integration Testing\n{{integration_testing_approach}}\n\n### Performance Testing\n{{performance_testing_approach}}\n\n### Security Testing\n{{security_testing_approach}}\n\n## Deployment & Operations\n### Infrastructure Requirements\n{{infrastructure_requirements}}\n\n### Deployment Strategy\n{{deployment_strategy}}\n\n### Monitoring & Alerting\n{{monitoring_strategy}}\n\n### Rollback Plan\n{{rollback_plan}}\n\n---\n*Technical specification prepared by {{user}} on {{date}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Technical spec variables
INSERT INTO template_variables (template_id, name, label, type, default_value, required, display_order) VALUES
('technical-spec', 'feature_name', 'Feature Name', 'text', NULL, true, 0),
('technical-spec', 'spec_version', 'Specification Version', 'text', '1.0', false, 1),
('technical-spec', 'spec_status', 'Specification Status', 'select', 'Draft', false, 2),
('technical-spec', 'problem_statement', 'Problem Statement', 'textarea', NULL, true, 3),
('technical-spec', 'proposed_solution', 'Proposed Solution', 'textarea', NULL, true, 4),
('technical-spec', 'architecture_overview', 'Architecture Overview', 'textarea', NULL, false, 5),
('technical-spec', 'response_time_target', 'Response Time Target', 'text', '< 200ms', false, 6),
('technical-spec', 'throughput_target', 'Throughput Target', 'text', '1000 req/sec', false, 7),
('technical-spec', 'concurrent_users_target', 'Concurrent Users Target', 'text', '10,000', false, 8),
('technical-spec', 'availability_target', 'Availability Target', 'text', '99.9%', false, 9),
('technical-spec', 'unit_testing_approach', 'Unit Testing Approach', 'textarea', NULL, false, 10),
('technical-spec', 'integration_testing_approach', 'Integration Testing Approach', 'textarea', NULL, false, 11),
('technical-spec', 'performance_testing_approach', 'Performance Testing Approach', 'textarea', NULL, false, 12),
('technical-spec', 'security_testing_approach', 'Security Testing Approach', 'textarea', NULL, false, 13),
('technical-spec', 'infrastructure_requirements', 'Infrastructure Requirements', 'textarea', NULL, false, 14),
('technical-spec', 'deployment_strategy', 'Deployment Strategy', 'textarea', NULL, false, 15),
('technical-spec', 'monitoring_strategy', 'Monitoring Strategy', 'textarea', NULL, false, 16),
('technical-spec', 'rollback_plan', 'Rollback Plan', 'textarea', NULL, false, 17)
ON CONFLICT (template_id, name) DO NOTHING;

-- Update spec status options
UPDATE template_variables 
SET options = '["Draft", "In Review", "Approved", "Implemented"]'::jsonb
WHERE template_id = 'technical-spec' AND name = 'spec_status';

-- ==========================================
-- 5. TASK MANAGEMENT TEMPLATES
-- ==========================================

-- Sprint Planning Template
INSERT INTO templates (
    id, name, description, category, content, thumbnail, is_public, is_system, created_by, created_at
) VALUES (
    'sprint-planning',
    'Sprint Planning',
    'Comprehensive sprint planning template for agile teams',
    'task',
    '{"content": "# Sprint {{sprint_number}} Planning - {{sprint_name}}\n\n## Sprint Overview\n**Sprint Goal:** {{sprint_goal}}  \n**Start Date:** {{start_date}}  \n**End Date:** {{end_date}}  \n**Sprint Duration:** {{sprint_duration}} days  \n**Team Capacity:** {{team_capacity}} story points\n\n## Team Velocity & Capacity\n**Previous Sprint Velocity:** {{previous_velocity}} points  \n\n## Sprint Backlog\n### Total Committed Points: {{total_committed_points}}\n\n## Sprint Events Schedule\n**Daily Standups:** {{standup_time}} ({{standup_duration}} min)  \n**Sprint Review:** {{review_date}} at {{review_time}}  \n**Sprint Retrospective:** {{retro_date}} at {{retro_time}}  \n**Backlog Refinement:** {{refinement_date}} at {{refinement_time}}\n\n## Technical Considerations\n### Architecture Changes\n{{architecture_changes}}\n\n### Technical Debt\n{{technical_debt_items}}\n\n### Testing Strategy\n{{testing_strategy}}\n\n## Sprint Forecast\n**Confidence Level:** {{confidence_level}}/10  \n\n---\n*Sprint planning completed by {{user}} on {{date}}*"}',
    NULL,
    true,
    true,
    NULL,
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Sprint planning variables
INSERT INTO template_variables (template_id, name, label, type, default_value, required, display_order) VALUES
('sprint-planning', 'sprint_number', 'Sprint Number', 'number', NULL, true, 0),
('sprint-planning', 'sprint_name', 'Sprint Name', 'text', NULL, true, 1),
('sprint-planning', 'sprint_goal', 'Sprint Goal', 'textarea', NULL, true, 2),
('sprint-planning', 'start_date', 'Start Date', 'date', NULL, true, 3),
('sprint-planning', 'end_date', 'End Date', 'date', NULL, true, 4),
('sprint-planning', 'sprint_duration', 'Sprint Duration (days)', 'number', '10', false, 5),
('sprint-planning', 'team_capacity', 'Team Capacity (story points)', 'number', NULL, false, 6),
('sprint-planning', 'previous_velocity', 'Previous Sprint Velocity', 'number', NULL, false, 7),
('sprint-planning', 'total_committed_points', 'Total Committed Points', 'number', NULL, false, 8),
('sprint-planning', 'confidence_level', 'Confidence Level (1-10)', 'number', '8', false, 9),
('sprint-planning', 'standup_time', 'Daily Standup Time', 'time', '09:00', false, 10),
('sprint-planning', 'standup_duration', 'Standup Duration (min)', 'number', '15', false, 11),
('sprint-planning', 'review_date', 'Sprint Review Date', 'date', NULL, false, 12),
('sprint-planning', 'review_time', 'Sprint Review Time', 'time', '14:00', false, 13),
('sprint-planning', 'retro_date', 'Retrospective Date', 'date', NULL, false, 14),
('sprint-planning', 'retro_time', 'Retrospective Time', 'time', '15:00', false, 15),
('sprint-planning', 'refinement_date', 'Backlog Refinement Date', 'date', NULL, false, 16),
('sprint-planning', 'refinement_time', 'Backlog Refinement Time', 'time', '13:00', false, 17),
('sprint-planning', 'architecture_changes', 'Architecture Changes', 'textarea', NULL, false, 18),
('sprint-planning', 'technical_debt_items', 'Technical Debt Items', 'textarea', NULL, false, 19),
('sprint-planning', 'testing_strategy', 'Testing Strategy', 'textarea', NULL, false, 20)
ON CONFLICT (template_id, name) DO NOTHING;

-- Update template usage counts for popular templates
UPDATE templates SET usage_count = 50 WHERE id = 'meeting-notes-standard';
UPDATE templates SET usage_count = 35 WHERE id = 'daily-journal';
UPDATE templates SET usage_count = 25 WHERE id = 'project-charter';
UPDATE templates SET usage_count = 40 WHERE id = 'standup-meeting';
UPDATE templates SET usage_count = 20 WHERE id = 'technical-spec';
UPDATE templates SET usage_count = 30 WHERE id = 'sprint-planning';

-- Set ratings for built-in templates
UPDATE templates SET rating = 4.8, rating_count = 15 WHERE id = 'meeting-notes-standard';
UPDATE templates SET rating = 4.6, rating_count = 12 WHERE id = 'daily-journal';
UPDATE templates SET rating = 4.5, rating_count = 8 WHERE id = 'project-charter';
UPDATE templates SET rating = 4.7, rating_count = 18 WHERE id = 'standup-meeting';
UPDATE templates SET rating = 4.4, rating_count = 6 WHERE id = 'technical-spec';
UPDATE templates SET rating = 4.5, rating_count = 10 WHERE id = 'sprint-planning';

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Built-in templates populated successfully!';
    RAISE NOTICE 'Templates created: 6 professional templates across 5 categories';
    RAISE NOTICE 'Categories: meeting, project, personal, documentation, task';
    RAISE NOTICE 'Total variables: 100+ customizable template variables';
END $$;