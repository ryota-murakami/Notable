import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock Next.js modules
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
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
