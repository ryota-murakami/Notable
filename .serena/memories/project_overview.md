# Notable Project Overview

## Purpose

Notable is a premium Notion clone focused on superior writing experience. It's a comprehensive note-taking application built with modern architecture across web, desktop (Electron), and mobile (Expo) platforms.

## Key Features

- Rich text editing with Plate.js
- Real-time collaboration (disabled in current version)
- Templates system
- AI-powered features (summarization, content generation)
- Tag system and organization
- Graph view for note relationships
- Export functionality
- Advanced search capabilities

## Architecture

- **Monorepo**: Multiple packages (web, mobile, electron, configs, routing, sync)
- **Web Package**: Primary focus - Next.js 15 with React 19
- **Editor**: Plate.js for rich text editing
- **UI**: shadcn/ui components with Tailwind CSS v4.1
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Client
- **Testing**: Vitest (unit), Playwright (E2E), MSW (API mocking)

## Current Focus

- Web package development
- E2E test coverage and stability
- CI/CD pipeline optimization
