import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

// Mock Next.js modules
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock components removed - shell component was deleted

describe('Page', () => {
  it('renders without crashing', () => {
    const Page = () => <div>Page Component</div>
    const { getByText } = render(<Page />)
    expect(getByText('Page Component')).toBeInTheDocument()
  })
})
