export const metadata = {
  title: 'Notable - Capture Your Thoughts, Unleash Your Potential',
  description: 'A powerful note-taking and knowledge management application with rich text editing, smart organization, and real-time sync. Where ideas become reality and knowledge transforms into wisdom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
