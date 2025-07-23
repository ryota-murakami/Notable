import type { Config } from 'tailwindcss'

// Tailwind CSS v4.1 configuration
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './store/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Additional theme extensions can go here if needed
      // Most configuration is now in app/tailwind.css
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
