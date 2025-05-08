# Tailwind CSS v4.1 Migration Guide

This document outlines the steps taken to migrate from Tailwind CSS v3.x to v4.1 in the Notable application.

## 1. Package Updates

\`\`\`json
{
  "devDependencies": {
    "@tailwindcss/typography": "^0.6.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^4.1.0"
  }
}
\`\`\`

## 2. Configuration Changes

### Before (v3.x)

\`\`\`typescript
const config = {
  darkMode: ["class"],
  content: [...],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        // ...
      },
      // ...
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
\`\`\`

### After (v4.1)

\`\`\`typescript
const config = {
  darkMode: "class",
  content: [...],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        // ...
      },
      // ...
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
\`\`\`

## 3. CSS Variables Changes

### Before (v3.x)

\`\`\`css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... */
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... */
  }
}
\`\`\`

### After (v4.1)

\`\`\`css
@layer base {
  :root {
    --background: #ffffff;
    --foreground: #020817;
    /* ... */
  }
  .dark {
    --background: #020817;
    --foreground: #f8fafc;
    /* ... */
  }
}
\`\`\`

## 4. Utility Changes

Some utility classes have changed in v4. Here are the key differences:

- `space-x-*` and `space-y-*` now use gap utilities instead
- `divide-*` utilities have been removed in favor of border utilities
- Some color opacity modifiers have changed syntax

## 5. Plugin Updates

The @tailwindcss/typography plugin has been updated to v0.6.0 with the following changes:

- Better dark mode support
- Improved typography defaults
- New modifiers for typography customization

## 6. Performance Improvements

Tailwind CSS v4 includes significant performance improvements:

- Faster build times
- Smaller CSS output
- Better tree-shaking
- Improved developer experience

These improvements have resulted in faster development and production builds for the Notable application.
