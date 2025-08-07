# Notable Project Overview

## Purpose

Notable is a premium Notion clone - a sophisticated note-taking application that aims to be the world's most elegant and
performant writing tool. It combines Notion's user experience with modern technical architecture.

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Editor**: Plate.js for rich text editing
- **Styling**: Tailwind CSS v4.1, Notable Design System
- **UI Components**: shadcn/ui & shadcn/ui Blocks
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Client
- **Testing**: Vitest (unit), Playwright (E2E), MSW (API mocking)
- **Payment**: Stripe
- **File Storage**: Upload Things

## Project Structure

- pnpm monorepo with turborepo
- Focus on web package development
- E2E tests in `/e2e` directory
- Components in `/components`
- App routes in `/app`
- Design system in `/design-system`

## Key Rules

- Wrap all React components with `React.memo()`
- Never remove `--max-warnings 0` from lint
- Never implement Real-time Collaboration features
- Use only `env.NODE_ENV` and `env.NEXT_PUBLIC_API_MOCKING` for environment control
- Never use `jsClick`, `jsType`, or `isTest` utils in E2E tests
- Use DB seed fixtures for test data

## Current Focus

- Achieving 100% E2E test coverage for Issue #279
- 638 total E2E tests need to pass
- AI features tests are working as proven patterns
- Scale successful patterns to all test files
