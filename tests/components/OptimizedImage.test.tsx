import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import {
  OptimizedImage,
  OptimizedImageGallery,
} from '@/components/optimized/OptimizedImage'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, onLoad, onError, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      data-testid="next-image"
      {...props}
    />
  ),
}))

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})
window.IntersectionObserver = mockIntersectionObserver as any

describe('OptimizedImage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset IntersectionObserver mock
    mockIntersectionObserver.mockClear()
  })

  it('should render with loading skeleton', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
      />,
    )

    expect(screen.getByTestId('next-image')).toBeInTheDocument()
    expect(screen.getByTestId('next-image')).toHaveAttribute(
      'src',
      '/test-image.jpg',
    )
    expect(screen.getByTestId('next-image')).toHaveAttribute(
      'alt',
      'Test image',
    )
  })

  it('should handle image load success', () => {
    const onLoad = jest.fn()

    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        onLoad={onLoad}
      />,
    )

    const img = screen.getByTestId('next-image')
    fireEvent.load(img)

    expect(onLoad).toHaveBeenCalled()
  })

  it('should handle image load error', () => {
    const onError = jest.fn()

    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        onError={onError}
      />,
    )

    const img = screen.getByTestId('next-image')
    fireEvent.error(img)

    expect(onError).toHaveBeenCalledWith(expect.any(Error))
    expect(screen.getByText('Failed to load image')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        className="custom-class"
      />,
    )

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('custom-class')
  })

  it('should set priority loading', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        priority
      />,
    )

    const img = screen.getByTestId('next-image')
    expect(img).toHaveAttribute('priority')
  })

  it('should use custom quality', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        quality={75}
      />,
    )

    const img = screen.getByTestId('next-image')
    expect(img).toHaveAttribute('quality', '75')
  })

  it('should use blur placeholder', () => {
    const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgAB...'

    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />,
    )

    const img = screen.getByTestId('next-image')
    expect(img).toHaveAttribute('placeholder', 'blur')
    expect(img).toHaveAttribute('blurDataURL', blurDataURL)
  })

  it('should lazy load when not priority', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
      />,
    )

    expect(mockIntersectionObserver).toHaveBeenCalled()
    const [callback, options] = mockIntersectionObserver.mock.calls[0]

    expect(options).toMatchObject({
      rootMargin: '50px',
      threshold: 0.01,
    })
  })

  it('should load immediately when in viewport', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
      />,
    )

    // Simulate intersection
    const [callback] = mockIntersectionObserver.mock.calls[0]
    callback([{ isIntersecting: true }])

    // Image should be rendered
    expect(screen.getByTestId('next-image')).toBeInTheDocument()
  })

  it('should auto-detect dimensions if not provided', async () => {
    // Mock Image constructor
    const mockImage = {
      onload: null as any,
      src: '',
      naturalWidth: 800,
      naturalHeight: 600,
    }

    global.Image = jest.fn(() => mockImage) as any

    render(<OptimizedImage src="/test-image.jpg" alt="Test image" />)

    // Trigger onload
    await waitFor(() => {
      if (mockImage.onload) {
        mockImage.onload()
      }
    })

    const img = screen.getByTestId('next-image')
    expect(img).toHaveAttribute('width', '800')
    expect(img).toHaveAttribute('height', '600')
  })

  it('should handle transition after load', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={300}
      />,
    )

    const img = screen.getByTestId('next-image')

    // Initially opacity 0
    expect(img).toHaveClass('opacity-0')

    // After load
    fireEvent.load(img)
    expect(img).toHaveClass('opacity-100')
  })
})

describe('OptimizedImageGallery', () => {
  const mockImages = [
    { src: '/image1.jpg', alt: 'Image 1', width: 400, height: 300 },
    { src: '/image2.jpg', alt: 'Image 2', width: 400, height: 300 },
    { src: '/image3.jpg', alt: 'Image 3', width: 400, height: 300 },
    { src: '/image4.jpg', alt: 'Image 4', width: 400, height: 300 },
    { src: '/image5.jpg', alt: 'Image 5', width: 400, height: 300 },
    { src: '/image6.jpg', alt: 'Image 6', width: 400, height: 300 },
  ]

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should render gallery with default columns', () => {
    render(<OptimizedImageGallery images={mockImages} />)

    const gallery = screen.getByTestId('next-image').closest('.grid')
    expect(gallery).toHaveStyle('grid-template-columns: repeat(3, 1fr)')
  })

  it('should render with custom columns', () => {
    render(<OptimizedImageGallery images={mockImages} columns={4} />)

    const gallery = screen.getByTestId('next-image').closest('.grid')
    expect(gallery).toHaveStyle('grid-template-columns: repeat(4, 1fr)')
  })

  it('should render with custom gap', () => {
    render(<OptimizedImageGallery images={mockImages} gap={24} />)

    const gallery = screen.getByTestId('next-image').closest('.grid')
    expect(gallery).toHaveStyle('gap: 24px')
  })

  it('should batch load images', () => {
    render(<OptimizedImageGallery images={mockImages} columns={3} />)

    // First batch (2 * columns = 6) should load immediately
    const images = screen.getAllByTestId('next-image')
    expect(images).toHaveLength(6)

    // Remaining images should load after delay
    jest.advanceTimersByTime(100)

    // All images should now be loaded
    const allImages = screen.getAllByTestId('next-image')
    expect(allImages).toHaveLength(6)
  })

  it('should apply custom className', () => {
    const { container } = render(
      <OptimizedImageGallery
        images={mockImages}
        className="custom-gallery-class"
      />,
    )

    const gallery = container.querySelector('.grid')
    expect(gallery).toHaveClass('custom-gallery-class')
  })

  it('should show skeletons for unloaded images', () => {
    const manyImages = Array.from({ length: 20 }, (_, i) => ({
      src: `/image${i}.jpg`,
      alt: `Image ${i}`,
      width: 400,
      height: 300,
    }))

    render(<OptimizedImageGallery images={manyImages} columns={3} />)

    // Should have some skeletons initially
    const skeletons = screen.getAllByTestId('skeleton')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('should handle images without dimensions', () => {
    const imagesWithoutDimensions = [
      { src: '/image1.jpg', alt: 'Image 1' },
      { src: '/image2.jpg', alt: 'Image 2' },
    ]

    render(<OptimizedImageGallery images={imagesWithoutDimensions} />)

    const skeletons = screen.getAllByTestId('skeleton')
    // Should use default aspect ratio
    expect(skeletons[0]).toHaveStyle('aspect-ratio: 16 / 9')
  })

  it('should handle empty image array', () => {
    const { container } = render(<OptimizedImageGallery images={[]} />)

    const gallery = container.querySelector('.grid')
    expect(gallery).toBeEmptyDOMElement()
  })

  it('should preserve aspect ratios', () => {
    const imagesWithDifferentRatios = [
      { src: '/image1.jpg', alt: 'Image 1', width: 400, height: 300 }, // 4:3
      { src: '/image2.jpg', alt: 'Image 2', width: 300, height: 300 }, // 1:1
      { src: '/image3.jpg', alt: 'Image 3', width: 400, height: 200 }, // 2:1
    ]

    render(<OptimizedImageGallery images={imagesWithDifferentRatios} />)

    const images = screen.getAllByTestId('next-image')
    expect(images[0]).toHaveAttribute('width', '400')
    expect(images[0]).toHaveAttribute('height', '300')
    expect(images[1]).toHaveAttribute('width', '300')
    expect(images[1]).toHaveAttribute('height', '300')
    expect(images[2]).toHaveAttribute('width', '400')
    expect(images[2]).toHaveAttribute('height', '200')
  })
})
