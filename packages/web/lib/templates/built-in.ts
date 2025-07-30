/**
 * Built-in Templates for Notable
 * Professional, production-ready templates for common use cases
 */

import type { TemplateVariable } from './engine'

export interface BuiltInTemplate {
  id: string
  name: string
  description: string
  category: string
  content: string
  variables: TemplateVariable[]
  thumbnail?: string
  tags?: string[]
}

export const BUILT_IN_TEMPLATES: BuiltInTemplate[] = [
  // ==========================================
  // MEETING TEMPLATES
  // ==========================================
  {
    id: 'meeting-notes-standard',
    name: 'Standard Meeting Notes',
    description:
      'Professional meeting notes template with agenda, attendees, and action items',
    category: 'meeting',
    tags: ['meeting', 'notes', 'professional', 'agenda'],
    content: [
      '# {{meeting_title}} - {{date}}',
      '',
      '## Meeting Details',
      '**Date:** {{date}}  ',
      '**Time:** {{meeting_time}}  ',
      '**Duration:** {{duration}}  ',
      '**Location:** {{location}}  ',
      '**Meeting Type:** {{meeting_type}}',
      '',
      '## Attendees',
      '**Organizer:** {{organizer}}  ',
      '**Required Attendees:**',
      '{{#each required_attendees}}',
      '- {{this}}',
      '{{/each}}',
      '',
      '**Optional Attendees:**',
      '{{#each optional_attendees}}',
      '- {{this}}',
      '{{/each}}',
      '',
      '## Agenda',
      '{{#each agenda_items}}',
      '### {{@index}}. {{this.title}}',
      '*Presenter:* {{this.presenter}}  ',
      '*Time Allocated:* {{this.time}}  ',
      '*Status:* {{this.status}}',
      '',
      '**Discussion Points:**',
      '{{this.notes}}',
      '',
      '---',
      '{{/each}}',
      '',
      '## Key Decisions Made',
      '{{#each decisions}}',
      '- **Decision:** {{this.decision}}',
      '  - **Rationale:** {{this.rationale}}',
      '  - **Impact:** {{this.impact}}',
      '  - **Effective Date:** {{this.date}}',
      '{{/each}}',
      '',
      '## Action Items',
      '{{#each action_items}}',
      '- [ ] **{{this.task}}**',
      '  - **Owner:** {{this.owner}}',
      '  - **Due Date:** {{this.due_date}}',
      '  - **Priority:** {{this.priority}}',
      '  - **Dependencies:** {{this.dependencies}}',
      '{{/each}}',
      '',
      '## Next Steps',
      '1. {{next_step_1}}',
      '2. {{next_step_2}}',
      '3. {{next_step_3}}',
      '',
      '## Next Meeting',
      '**Date:** {{next_meeting_date}}  ',
      '**Agenda Preview:**',
      '- Follow up on action items',
      '- {{next_meeting_topics}}',
      '',
      '---',
      '*Meeting notes prepared by {{user}} on {{datetime}}*',
    ].join('\\n'),
    variables: [
      {
        name: 'meeting_title',
        label: 'Meeting Title',
        type: 'text',
        required: true,
      },
      {
        name: 'meeting_time',
        label: 'Meeting Time',
        type: 'time',
        defaultValue: '09:00',
      },
      {
        name: 'duration',
        label: 'Duration',
        type: 'text',
        defaultValue: '1 hour',
      },
      {
        name: 'location',
        label: 'Location',
        type: 'text',
        defaultValue: 'Conference Room / Zoom',
      },
      {
        name: 'meeting_type',
        label: 'Meeting Type',
        type: 'select',
        options: [
          'Team Standup',
          'Project Review',
          'Client Meeting',
          'Planning Session',
          'Retrospective',
          'All Hands',
        ],
        defaultValue: 'Team Meeting',
      },
      {
        name: 'organizer',
        label: 'Meeting Organizer',
        type: 'text',
        required: true,
      },
      { name: 'next_meeting_date', label: 'Next Meeting Date', type: 'date' },
      {
        name: 'next_meeting_topics',
        label: 'Next Meeting Topics',
        type: 'textarea',
      },
      { name: 'next_step_1', label: 'Next Step 1', type: 'text' },
      { name: 'next_step_2', label: 'Next Step 2', type: 'text' },
      { name: 'next_step_3', label: 'Next Step 3', type: 'text' },
    ],
  },

  {
    id: 'daily-journal',
    name: 'Daily Journal',
    description: 'Structured daily journal for reflection and planning',
    category: 'personal',
    tags: ['journal', 'daily', 'reflection', 'personal'],
    content: [
      '# Daily Journal - {{date}}',
      '',
      "## Today's Overview",
      '**Date:** {{date}}  ',
      '**Day of Week:** {{dayOfWeek}}  ',
      '**Weather:** {{weather}}  ',
      '**Mood:** {{mood}}/10 ✨  ',
      '**Energy Level:** {{energy_level}}/10 ⚡',
      '',
      '## Gratitude Practice',
      "### Three Things I'm Grateful For:",
      '1. {{gratitude_1}}',
      '2. {{gratitude_2}}',
      '3. {{gratitude_3}}',
      '',
      "## Today's Highlights",
      '### 🎉 Wins & Achievements',
      '{{#each wins}}',
      '- {{this}}',
      '{{/each}}',
      '',
      '### 📚 What I Learned',
      '{{learning_today}}',
      '',
      '### 👥 Meaningful Connections',
      '{{connections_today}}',
      '',
      '## Health & Wellness',
      '**Sleep Quality:** {{sleep_quality}}/10 😴  ',
      '**Exercise:** {{exercise}}  ',
      '**Nutrition:** {{nutrition}}  ',
      '**Water Intake:** {{water_intake}} glasses 💧  ',
      '**Screen Time:** {{screen_time}} hours 📱',
      '',
      '## Evening Reflection',
      '### How did I show up today?',
      '{{how_showed_up}}',
      '',
      '### What would I do differently?',
      '{{what_differently}}',
      '',
      '### Intention for Tomorrow',
      '{{tomorrow_intention}}',
      '',
      '## Affirmation',
      '*{{daily_affirmation}}*',
      '',
      '---',
      '*Journal entry created on {{timestamp}}*',
    ].join('\\n'),
    variables: [
      { name: 'weather', label: 'Weather Today', type: 'text' },
      { name: 'mood', label: 'Mood (1-10)', type: 'number', defaultValue: '7' },
      {
        name: 'energy_level',
        label: 'Energy Level (1-10)',
        type: 'number',
        defaultValue: '7',
      },
      {
        name: 'gratitude_1',
        label: 'Gratitude 1',
        type: 'text',
        required: true,
      },
      {
        name: 'gratitude_2',
        label: 'Gratitude 2',
        type: 'text',
        required: true,
      },
      {
        name: 'gratitude_3',
        label: 'Gratitude 3',
        type: 'text',
        required: true,
      },
      {
        name: 'learning_today',
        label: 'What I Learned Today',
        type: 'textarea',
      },
      {
        name: 'connections_today',
        label: 'Meaningful Connections',
        type: 'textarea',
      },
      {
        name: 'sleep_quality',
        label: 'Sleep Quality (1-10)',
        type: 'number',
        defaultValue: '7',
      },
      { name: 'exercise', label: 'Exercise Today', type: 'text' },
      { name: 'nutrition', label: 'Nutrition Notes', type: 'text' },
      {
        name: 'water_intake',
        label: 'Water Intake (glasses)',
        type: 'number',
        defaultValue: '8',
      },
      { name: 'screen_time', label: 'Screen Time (hours)', type: 'number' },
      {
        name: 'how_showed_up',
        label: 'How Did I Show Up Today?',
        type: 'textarea',
      },
      {
        name: 'what_differently',
        label: 'What Would I Do Differently?',
        type: 'textarea',
      },
      {
        name: 'tomorrow_intention',
        label: "Tomorrow's Intention",
        type: 'text',
      },
      {
        name: 'daily_affirmation',
        label: 'Daily Affirmation',
        type: 'text',
        defaultValue:
          'I am growing, learning, and becoming the best version of myself.',
      },
    ],
  },

  {
    id: 'project-charter',
    name: 'Project Charter',
    description:
      'Comprehensive project charter with objectives, scope, and stakeholders',
    category: 'project',
    tags: ['project', 'charter', 'planning', 'scope'],
    content: [
      '# Project Charter: {{project_name}}',
      '',
      '## Executive Summary',
      '{{project_summary}}',
      '',
      '## Project Details',
      '**Project Manager:** {{project_manager}}  ',
      '**Start Date:** {{start_date}}  ',
      '**Target End Date:** {{end_date}}  ',
      '**Budget:** ${{budget}}  ',
      '**Status:** {{project_status}}  ',
      '**Priority:** {{priority}}',
      '',
      '## Project Objectives',
      '### Primary Objectives',
      '{{#each primary_objectives}}',
      '- {{this}}',
      '{{/each}}',
      '',
      '## Communication Plan',
      '**Project Updates:** {{communication_frequency}}  ',
      '**Status Reports:** {{status_report_schedule}}  ',
      '**Stakeholder Meetings:** {{stakeholder_meeting_schedule}}  ',
      '**Tools:** {{communication_tools}}',
      '',
      '## Approval',
      '**Project Sponsor:** {{project_sponsor}}  ',
      '**Approval Date:** {{approval_date}}  ',
      '**Charter Version:** {{charter_version}}',
      '',
      '---',
      '*Project Charter created by {{user}} on {{date}}*',
    ].join('\\n'),
    variables: [
      {
        name: 'project_name',
        label: 'Project Name',
        type: 'text',
        required: true,
      },
      {
        name: 'project_summary',
        label: 'Project Summary',
        type: 'textarea',
        required: true,
      },
      {
        name: 'project_manager',
        label: 'Project Manager',
        type: 'text',
        required: true,
      },
      { name: 'start_date', label: 'Start Date', type: 'date', required: true },
      { name: 'end_date', label: 'Target End Date', type: 'date' },
      { name: 'budget', label: 'Total Budget', type: 'number' },
      {
        name: 'project_status',
        label: 'Project Status',
        type: 'select',
        options: [
          'Planning',
          'In Progress',
          'On Hold',
          'Completed',
          'Cancelled',
        ],
        defaultValue: 'Planning',
      },
      {
        name: 'priority',
        label: 'Priority',
        type: 'select',
        options: ['Critical', 'High', 'Medium', 'Low'],
        defaultValue: 'Medium',
      },
      { name: 'project_sponsor', label: 'Project Sponsor', type: 'text' },
      { name: 'approval_date', label: 'Approval Date', type: 'date' },
      {
        name: 'charter_version',
        label: 'Charter Version',
        type: 'text',
        defaultValue: '1.0',
      },
      {
        name: 'communication_frequency',
        label: 'Communication Frequency',
        type: 'select',
        options: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'],
        defaultValue: 'Weekly',
      },
      {
        name: 'status_report_schedule',
        label: 'Status Report Schedule',
        type: 'text',
        defaultValue: 'Weekly',
      },
      {
        name: 'stakeholder_meeting_schedule',
        label: 'Stakeholder Meeting Schedule',
        type: 'text',
        defaultValue: 'Bi-weekly',
      },
      {
        name: 'communication_tools',
        label: 'Communication Tools',
        type: 'text',
        defaultValue: 'Slack, Email, Notable',
      },
    ],
  },
]

/**
 * Get built-in template by ID
 */
export function getBuiltInTemplate(id: string): BuiltInTemplate | undefined {
  return BUILT_IN_TEMPLATES.find((template) => template.id === id)
}

/**
 * Get built-in templates by category
 */
export function getBuiltInTemplatesByCategory(
  category: string
): BuiltInTemplate[] {
  return BUILT_IN_TEMPLATES.filter((template) => template.category === category)
}

/**
 * Get all built-in template categories
 */
export function getBuiltInTemplateCategories(): string[] {
  const categories = new Set(
    BUILT_IN_TEMPLATES.map((template) => template.category)
  )
  return Array.from(categories)
}

/**
 * Search built-in templates
 */
export function searchBuiltInTemplates(query: string): BuiltInTemplate[] {
  const searchTerm = query.toLowerCase()
  return BUILT_IN_TEMPLATES.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm) ||
      template.description.toLowerCase().includes(searchTerm) ||
      template.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  )
}
