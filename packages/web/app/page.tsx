import { Shell } from '@/components/shell'

// Force dynamic rendering to avoid SSG issues with client-side code
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return <Shell />
}
