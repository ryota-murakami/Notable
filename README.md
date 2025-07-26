# Notable - Premium Notion Clone

[![Build](https://github.com/ryota-murakami/Notable/workflows/Build/badge.svg)](https://github.com/ryota-murakami/Notable/actions/workflows/build.yml)
[![Test](https://github.com/ryota-murakami/Notable/workflows/Test/badge.svg)](https://github.com/ryota-murakami/Notable/actions/workflows/test.yml)
[![Lint](https://github.com/ryota-murakami/Notable/workflows/Lint/badge.svg)](https://github.com/ryota-murakami/Notable/actions/workflows/lint.yml)
[![TypeCheck](https://github.com/ryota-murakami/Notable/workflows/TypeCheck/badge.svg)](https://github.com/ryota-murakami/Notable/actions/workflows/typecheck.yml)

A top-tier freemium note-taking and knowledge management application built with modern technologies, offering a superior writing experience with Plate.js, real-time synchronization, and cross-platform support.

<!-- Deployment trigger commit -->

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Editor**: Plate.js (migrating from TipTap)
- **Styling**: Tailwind CSS v4.1
- **State Management**: Zustand
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.io + Y.js for CRDT
- **Authentication**: NextAuth.js
- **Cache**: Redis
- **Desktop**: Electron
- **Mobile**: React Native with Expo

## 📋 Features

### Core Features

- 🔐 **Authentication**: Email/Password and Google OAuth
- 📝 **Rich Text Editor**: Powered by Plate.js with Notion-like experience
- 📁 **Note Management**: Hierarchical folders, tags, and favorites
- 🔍 **Full-Text Search**: Instant search with advanced filters
- 🔄 **Real-time Sync**: Cross-platform synchronization with conflict resolution
- 📤 **Export Options**: Markdown, PDF, HTML, and React components
- 🌓 **View Modes**: Edit and read-only modes
- 🎨 **Themes**: Light/dark mode support

### Editor Features

- Block-based editing (paragraphs, headings, lists, code blocks, etc.)
- Slash commands (/)
- Markdown shortcuts
- Drag-and-drop blocks
- Image uploads
- Math equations (LaTeX)
- Tables
- @mentions

## 🛠️ Development Setup

### Prerequisites

- Node.js 22.15.0 (managed by Volta)
- PostgreSQL
- Redis

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ryota-murakami/Notable.git
cd Notable
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database:

```bash
npm run prisma:generate
npm run prisma:migrate
```

### Running the Application

**Development mode:**

```bash
# Start the API server
npm run api:dev

# In another terminal, start Next.js
npm run dev

# For Electron development
npm run electron:dev
```

**Production build:**

```bash
npm run build
npm run electron:build
```

## 📁 Project Structure

```
Notable/
├── app/              # Next.js app directory
├── components/       # React components
├── server/          # Express API server
├── store/           # Zustand state management
├── prisma/          # Database schema
├── electron/        # Electron main process
├── e2e/            # Playwright E2E tests
├── types/          # TypeScript type definitions
└── lib/            # Utility functions
```

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 🚢 Deployment

The application supports deployment to:

- **Web**: Vercel (frontend) + AWS (backend)
- **Desktop**: Electron builds for Windows, macOS, Linux
- **Mobile**: iOS App Store and Google Play Store

## 📖 Documentation

- [Product Requirements Document](./PRD.md)
- [API Documentation](./docs/api.md) (coming soon)
- [Contributing Guide](./CONTRIBUTING.md) (coming soon)

## 🤝 Contributing

Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.
