/**
 * CDN Integration Configuration
 * Optimizes asset delivery and caching for better performance
 */

import { performanceMonitor } from './performance'

interface CDNConfig {
  endpoint: string
  region: string
  cacheTTL: number
  compression: boolean
  webp: boolean
}

interface AssetOptimizationOptions {
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  quality?: number
  width?: number
  height?: number
  dpr?: number
}

class CDNManager {
  private config: CDNConfig = {
    endpoint: process.env.NEXT_PUBLIC_CDN_ENDPOINT || '',
    region: process.env.NEXT_PUBLIC_CDN_REGION || 'us-east-1',
    cacheTTL: 31536000, // 1 year in seconds
    compression: true,
    webp: true,
  }

  private assetCache = new Map<string, string>()

  /**
   * Generate optimized asset URL
   */
  getAssetUrl(path: string, options: AssetOptimizationOptions = {}): string {
    const cacheKey = `${path}_${JSON.stringify(options)}`

    if (this.assetCache.has(cacheKey)) {
      return this.assetCache.get(cacheKey)!
    }

    let url = path

    // Use CDN if configured
    if (this.config.endpoint) {
      url = `${this.config.endpoint}${path}`

      // Add optimization parameters
      const params = new URLSearchParams()

      if (options.format && this.config.webp) {
        params.set('format', options.format)
      }

      if (options.quality) {
        params.set('quality', options.quality.toString())
      }

      if (options.width) {
        params.set('width', options.width.toString())
      }

      if (options.height) {
        params.set('height', options.height.toString())
      }

      if (options.dpr) {
        params.set('dpr', options.dpr.toString())
      }

      if (this.config.compression) {
        params.set('compress', 'true')
      }

      if (params.toString()) {
        url += `?${params.toString()}`
      }
    }

    this.assetCache.set(cacheKey, url)
    return url
  }

  /**
   * Preload critical assets
   */
  preloadAssets(
    assets: Array<{ url: string; type: 'image' | 'font' | 'script' | 'style' }>
  ) {
    const startTime = performance.now()

    assets.forEach((asset) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = this.getAssetUrl(asset.url)

      switch (asset.type) {
        case 'image':
          link.as = 'image'
          break
        case 'font':
          link.as = 'font'
          link.crossOrigin = 'anonymous'
          break
        case 'script':
          link.as = 'script'
          break
        case 'style':
          link.as = 'style'
          break
      }

      document.head.appendChild(link)
    })

    const duration = performance.now() - startTime
    performanceMonitor.track('cdn_preload_assets', duration, 'ms', {
      count: assets.length,
    })
  }

  /**
   * Get responsive image srcset
   */
  getResponsiveImageSrcSet(
    basePath: string,
    sizes: number[] = [320, 640, 1024, 1920],
    format: 'webp' | 'jpeg' = 'webp'
  ): string {
    return sizes
      .map(
        (size) =>
          `${this.getAssetUrl(basePath, { width: size, format })} ${size}w`
      )
      .join(', ')
  }

  /**
   * Generate picture element with multiple formats
   */
  generatePictureElement(
    basePath: string,
    alt: string,
    sizes: string = '100vw',
    className?: string
  ): string {
    const webpSrcSet = this.getResponsiveImageSrcSet(
      basePath,
      undefined,
      'webp'
    )
    const jpegSrcSet = this.getResponsiveImageSrcSet(
      basePath,
      undefined,
      'jpeg'
    )

    return `
      <picture${className ? ` class="${className}"` : ''}>
        <source srcset="${webpSrcSet}" sizes="${sizes}" type="image/webp">
        <source srcset="${jpegSrcSet}" sizes="${sizes}" type="image/jpeg">
        <img src="${this.getAssetUrl(basePath)}" alt="${alt}" loading="lazy">
      </picture>
    `
  }

  /**
   * Prefetch assets likely to be needed
   */
  prefetchAssets(urls: string[]) {
    const startTime = performance.now()

    urls.forEach((url) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = this.getAssetUrl(url)
      document.head.appendChild(link)
    })

    const duration = performance.now() - startTime
    performanceMonitor.track('cdn_prefetch_assets', duration, 'ms', {
      count: urls.length,
    })
  }

  /**
   * Monitor CDN performance
   */
  async measureCDNPerformance(assetUrl: string): Promise<{
    loadTime: number
    size: number
    cached: boolean
  }> {
    const startTime = performance.now()

    try {
      const response = await fetch(this.getAssetUrl(assetUrl))
      const loadTime = performance.now() - startTime
      const size = parseInt(response.headers.get('content-length') || '0')
      const cached = response.headers.get('x-cache')?.includes('HIT') || false

      performanceMonitor.track('cdn_asset_load', loadTime, 'ms', {
        size,
        cached,
        url: assetUrl,
      })

      return { loadTime, size, cached }
    } catch (error) {
      const loadTime = performance.now() - startTime
      performanceMonitor.track('cdn_asset_error', loadTime, 'ms', {
        url: assetUrl,
        error: error.toString(),
      })
      throw error
    }
  }

  /**
   * Clear asset cache
   */
  clearCache() {
    this.assetCache.clear()
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.assetCache.size,
      entries: Array.from(this.assetCache.keys()),
    }
  }

  /**
   * Update CDN configuration
   */
  updateConfig(newConfig: Partial<CDNConfig>) {
    this.config = { ...this.config, ...newConfig }
    this.clearCache() // Clear cache when config changes
  }

  /**
   * Get current configuration
   */
  getConfig(): CDNConfig {
    return { ...this.config }
  }
}

// Singleton instance
export const cdnManager = new CDNManager()

/**
 * React hook for CDN-optimized images
 */
export function useCDNImage(
  src: string,
  options: AssetOptimizationOptions = {}
) {
  const [optimizedSrc, setOptimizedSrc] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const optimizedUrl = cdnManager.getAssetUrl(src, options)

        // Preload the image
        const img = new Image()
        img.onload = () => {
          setOptimizedSrc(optimizedUrl)
          setIsLoading(false)
        }
        img.onerror = () => {
          setError(new Error(`Failed to load image: ${optimizedUrl}`))
          setIsLoading(false)
        }
        img.src = optimizedUrl
      } catch (err) {
        setError(err as Error)
        setIsLoading(false)
      }
    }

    loadImage()
  }, [src, JSON.stringify(options)])

  return { src: optimizedSrc, isLoading, error }
}

/**
 * Utility to automatically detect WebP support
 */
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

/**
 * Critical resource hints for faster loading
 */
export function injectResourceHints(
  resources: Array<{
    url: string
    type: 'preload' | 'prefetch' | 'preconnect'
    as?: string
    crossorigin?: boolean
  }>
) {
  resources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = resource.type
    link.href = resource.url

    if (resource.as) {
      link.as = resource.as
    }

    if (resource.crossorigin) {
      link.crossOrigin = 'anonymous'
    }

    document.head.appendChild(link)
  })
}

/**
 * Lazy loading utility with intersection observer
 */
export class LazyLoader {
  private observer: IntersectionObserver | null = null
  private loaded = new Set<Element>()

  constructor(
    private callback: (element: Element) => void,
    private options: IntersectionObserverInit = {
      rootMargin: '50px',
      threshold: 0.1,
    }
  ) {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        options
      )
    }
  }

  observe(element: Element) {
    if (this.observer && !this.loaded.has(element)) {
      this.observer.observe(element)
    }
  }

  unobserve(element: Element) {
    if (this.observer) {
      this.observer.unobserve(element)
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.loaded.has(entry.target)) {
        this.loaded.add(entry.target)
        this.callback(entry.target)
        this.unobserve(entry.target)
      }
    })
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}

// Default lazy loader for images
export const imageLazyLoader = new LazyLoader((element) => {
  const img = element as HTMLImageElement
  const src = img.dataset.src

  if (src) {
    img.src = cdnManager.getAssetUrl(src, {
      format: 'webp',
      quality: 85,
    })
    img.removeAttribute('data-src')
  }
})
