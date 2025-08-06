# Notable Project Overview

## Purpose
Notable is a premium Notion clone - a freemium note-taking and knowledge management application with superior writing experience across web, desktop (Electron), and mobile (Expo) platforms.

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Editor**: Plate.js for rich text editing
- **Styling**: Tailwind CSS v4.1 + shadcn/ui components
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Auth (email/password + Google OAuth)
- **File Storage**: UploadThing
- **Real-time**: Y.js for CRDT, Socket.io client
- **Payment**: Stripe
- **Testing**: Vitest (unit), Playwright (e2e), MSW (API mocking)
- **Package Manager**: pnpm
- **Node Version**: v22.17.1 (via Volta)

## Monorepo Structure
```
packages/
├── web/          # Next.js web application (main focus)
├── mobile/       # React Native with Expo
├── electron/     # Desktop app
├── configs/      # Shared ESLint configs
├── routing/      # Shared routing logic
└── sync/         # Real-time sync logic
```

## Key Features
- Rich text editing with Plate.js
- Cross-platform synchronization
- Export capabilities (PDF, Markdown, HTML)
- Authentication system
- File upload and management
- Search functionality
- Tag system
- Version history
- Graph visualization
- Templates system