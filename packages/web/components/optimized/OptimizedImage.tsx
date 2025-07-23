import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: (error: Error) => void
}

const IMAGE_CACHE = new Map<string, string>()

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({
    width: width || 0,
    height: height || 0,
  })
  const imageRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isInView, setIsInView] = useState(false)

  // Generate blur data URL if not provided
  const getBlurDataURL = useCallback(() => {
    if (blurDataURL) return blurDataURL

    const cached = IMAGE_CACHE.get(src)
    if (cached) return cached

    // Generate a simple placeholder
    const canvas = document.createElement('canvas')
    canvas.width = 10
    canvas.height = 10
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, 10, 10)
    }
    const dataURL = canvas.toDataURL()
    IMAGE_CACHE.set(src, dataURL)
    return dataURL
  }, [src, blurDataURL])

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imageRef.current) {
      setIsInView(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    )

    observerRef.current.observe(imageRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [priority])

  // Auto-detect dimensions if not provided
  useEffect(() => {
    if (!width || !height) {
      const img = new window.Image()
      img.onload = () => {
        setDimensions({
          width: width || img.naturalWidth,
          height: height || img.naturalHeight,
        })
      }
      img.src = src
    }
  }, [src, width, height])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setError('Failed to load image')
    onError?.(new Error('Failed to load image'))
  }, [onError])

  if (error) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          className
        )}
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <span className='text-sm'>Failed to load image</span>
      </div>
    )
  }

  return (
    <div
      ref={imageRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {isLoading && (
        <Skeleton
          data-testid='skeleton'
          className='absolute inset-0'
          style={{ width: dimensions.width, height: dimensions.height }}
        />
      )}

      {isInView && dimensions.width > 0 && dimensions.height > 0 && (
        <Image
          data-testid='next-image'
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={getBlurDataURL()}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${dimensions.width}px`}
        />
      )}
    </div>
  )
}

// Batch image loading component for galleries
interface OptimizedImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
  columns?: number
  gap?: number
  className?: string
}

export const OptimizedImageGallery: React.FC<OptimizedImageGalleryProps> = ({
  images,
  columns = 3,
  gap = 16,
  className,
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  // Load images in batches
  useEffect(() => {
    const loadBatch = (startIndex: number, batchSize: number) => {
      const endIndex = Math.min(startIndex + batchSize, images.length)
      for (let i = startIndex; i < endIndex; i++) {
        setLoadedImages((prev) => new Set(prev).add(i))
      }
    }

    // Load first batch immediately
    loadBatch(0, columns * 2)

    // Load remaining images after a delay
    const timer = setTimeout(() => {
      loadBatch(columns * 2, images.length)
    }, 100)

    return () => clearTimeout(timer)
  }, [images, columns])

  return (
    <div
      ref={containerRef}
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {images.map((image, index) => (
        <div key={index} className='relative'>
          {loadedImages.has(index) ? (
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              {...(image.width !== undefined && { width: image.width })}
              {...(image.height !== undefined && { height: image.height })}
              className='w-full h-auto'
            />
          ) : (
            <Skeleton
              data-testid='skeleton'
              className='w-full'
              style={{
                aspectRatio:
                  image.width && image.height
                    ? `${image.width} / ${image.height}`
                    : '16 / 9',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
