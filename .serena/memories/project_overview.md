# Project Overview: Notable

## Purpose
Notable is a premium Notion clone built with modern technologies. It's a comprehensive note-taking and knowledge management application designed to provide a superior writing experience across web, desktop (Electron), and mobile (Expo) platforms.

## Tech Stack

### Core Architecture
- **Monorepo**: pnpm with Turborepo
- **Primary Focus**: Web package development (packages/web)

### Frontend Stack
- **Framework**: Next.js 15 with React 19
- **Editor**: Plate.js for rich text editing
- **Styling**: Tailwind CSS v4.1, Notable Design System
- **UI Components**: shadcn/ui & shadcn/ui Blocks styled by Notable Design System
- **Authentication**: Supabase Client
- **Payment**: Stripe
- **Testing**: Vitest, Playwright, MSW for API mocking

### Backend Stack
- **Database**: PostgreSQL with Supabase
- **File Storage**: Upload Things
- **Authentication**: Supabase

### Infrastructure
- **Hosting**: Vercel (web) + Supabase
- **Monitoring**: Sentry + Vercel Analytics
- **CI/CD**: GitHub Actions

## Package Structure
- `packages/web` - Main Next.js web application (current focus)
- `packages/mobile` - React Native with Expo
- `packages/electron` - Electron desktop app
- `packages/configs` - Shared configurations
- `packages/routing` - Shared routing logic
- `packages/sync` - Real-time synchronization

## Key Features
- Rich text editing with Plate.js
- Cross-platform synchronization
- Authentication (email/password + Google OAuth)
- Note organization and search
- Export capabilities
- Real-time collaboration (via Y.js + Socket.io)