# Notable - Next.js 15 with Tailwind CSS v4.1

## Recent Upgrades

### 1. Next.js 15 Upgrade
- Next.js upgraded from 14.0.4 to 15.0.0
- React upgraded from 18.x to 19.0.0
- React DOM upgraded from 18.x to 19.0.0
- TypeScript types updated for React 19
- Electron upgraded from 28.0.0 to 29.0.0
- Various other dependencies updated for compatibility

### 2. Tailwind CSS v4.1 Upgrade
- Tailwind CSS upgraded from v3.x to v4.1.0
- Updated configuration format in tailwind.config.ts
- Switched from HSL color format to direct CSS variables
- Updated @tailwindcss/typography plugin to v0.6.0
- Adjusted CSS variables in globals.css

## Running the Application

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run in development mode:
\`\`\`bash
npm run electron:dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run electron:build
\`\`\`

## Features

- Rich text editing with TipTap
- Hierarchical note organization
- Tag management
- Dark mode support
- Export functionality (Markdown, HTML, Plain text)
- Image support
- Full-text search
- Electron desktop integration

## Tailwind CSS v4 Changes

Tailwind CSS v4 introduces several changes from v3:

1. **Direct CSS Variables**: Uses CSS variables directly without hsl() function
2. **Simplified Configuration**: More streamlined config structure
3. **Improved Performance**: Faster build times and smaller CSS output
4. **Better Dark Mode Support**: Enhanced dark mode implementation
5. **Updated Plugin API**: Changes to how plugins are defined and used

These changes have been implemented throughout the application to ensure compatibility and take advantage of the new features.
\`\`\`

Let's create a migration guide document to help with future upgrades:
