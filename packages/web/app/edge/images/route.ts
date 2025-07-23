import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface ImageTransformParams {
  url: string
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png' | 'avif'
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  gravity?: 'auto' | 'center' | 'north' | 'south' | 'east' | 'west'
}

// Validate image URL to prevent SSRF attacks
function isValidImageUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url)

    // Only allow specific domains for security
    const allowedDomains = [
      'images.unsplash.com',
      'picsum.photos',
      'example.com', // Replace with your actual image domains
      'your-cdn-domain.com',
    ]

    return allowedDomains.includes(parsedUrl.hostname)
  } catch {
    return false
  }
}

// Generate cache key for image transformation
function generateCacheKey(params: ImageTransformParams): string {
  const { url, width, height, quality, format, fit, gravity } = params
  const key = `img_${url}_${width || 'auto'}_${height || 'auto'}_${quality || 80}_${format || 'webp'}_${fit || 'cover'}_${gravity || 'auto'}`
  return btoa(key).replace(/[/+=]/g, '')
}

// Get optimized image dimensions based on device
function getOptimizedDimensions(
  request: NextRequest,
  width?: number,
  height?: number
): { width?: number; height?: number } {
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /mobile|android|iphone/i.test(userAgent)
  const isTablet = /tablet|ipad/i.test(userAgent)

  // Auto-optimize for device type if no dimensions specified
  if (!width && !height) {
    if (isMobile) {
      return { width: 640 }
    } else if (isTablet) {
      return { width: 1024 }
    } else {
      return { width: 1920 }
    }
  }

  return {
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
  }
}

// Check if browser supports modern image formats
function getSupportedFormat(
  request: NextRequest,
  preferredFormat?: string
): string {
  const accept = request.headers.get('accept') || ''

  if (preferredFormat) {
    return preferredFormat
  }

  // Check for AVIF support first (best compression)
  if (accept.includes('image/avif')) {
    return 'avif'
  }

  // Check for WebP support
  if (accept.includes('image/webp')) {
    return 'webp'
  }

  // Fallback to JPEG
  return 'jpeg'
}

// Transform image using Vercel's Image Optimization API
async function transformImage(params: ImageTransformParams): Promise<Response> {
  const {
    url,
    width,
    height,
    quality = 80,
    // format = 'webp',
    // fit = 'cover',
  } = params

  // Build transformation URL (using Vercel's built-in image optimization)
  const transformUrl = new URL('/_next/image', 'https://your-domain.vercel.app')
  transformUrl.searchParams.set('url', encodeURIComponent(url))
  if (width) transformUrl.searchParams.set('w', width.toString())
  if (height) transformUrl.searchParams.set('h', height.toString())
  transformUrl.searchParams.set('q', quality.toString())

  try {
    const response = await fetch(transformUrl.toString())

    if (!response.ok) {
      throw new Error(`Image transformation failed: ${response.status}`)
    }

    return response
  } catch (error) {
    throw new Error(`Failed to transform image: ${error}`)
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const url = searchParams.get('url')
    const width = searchParams.get('w')
      ? parseInt(searchParams.get('w')!)
      : undefined
    const height = searchParams.get('h')
      ? parseInt(searchParams.get('h')!)
      : undefined
    const quality = searchParams.get('q')
      ? parseInt(searchParams.get('q')!)
      : 80
    const formatParam = searchParams.get('f')
    const format = formatParam
      ? (formatParam as ImageTransformParams['format'])
      : undefined
    const fit =
      (searchParams.get('fit') as ImageTransformParams['fit']) || 'cover'
    const gravity =
      (searchParams.get('g') as ImageTransformParams['gravity']) || 'auto'

    if (!url) {
      return NextResponse.json(
        { error: 'Missing url parameter' },
        { status: 400 }
      )
    }

    if (!isValidImageUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid or unauthorized image URL' },
        { status: 403 }
      )
    }

    // Validate dimensions
    if (width && (width < 1 || width > 3840)) {
      return NextResponse.json(
        { error: 'Width must be between 1 and 3840 pixels' },
        { status: 400 }
      )
    }

    if (height && (height < 1 || height > 2160)) {
      return NextResponse.json(
        { error: 'Height must be between 1 and 2160 pixels' },
        { status: 400 }
      )
    }

    // Get optimized dimensions and format
    const optimizedDimensions = getOptimizedDimensions(request, width, height)
    const supportedFormat = getSupportedFormat(request, format)

    const transformParams: ImageTransformParams = {
      url,
      ...optimizedDimensions,
      ...(quality !== undefined && {
        quality: Math.min(Math.max(quality, 1), 100),
      }),
      ...(fit && { fit }),
      ...(gravity && { gravity }),
    }

    // Add format only if it exists and is valid
    if (
      supportedFormat &&
      ['webp', 'jpeg', 'png', 'avif'].includes(supportedFormat)
    ) {
      transformParams.format = supportedFormat as ImageTransformParams['format']
    }

    // Generate cache key
    const cacheKey = generateCacheKey(transformParams)

    // Try to serve from cache first
    const cacheUrl = `https://edge-cache.vercel.app/${cacheKey}`

    try {
      const cachedResponse = await fetch(cacheUrl)

      if (cachedResponse.ok) {
        return new Response(cachedResponse.body, {
          headers: {
            'Content-Type': `image/${supportedFormat}`,
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Image-Cache': 'HIT',
            'X-Transform-Params': JSON.stringify(transformParams),
          },
        })
      }
    } catch {
      // Cache miss, continue to transformation
    }

    // Transform the image
    const transformedResponse = await transformImage(transformParams)

    // Stream the response with appropriate headers
    return new Response(transformedResponse.body, {
      headers: {
        'Content-Type': `image/${supportedFormat}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Image-Cache': 'MISS',
        'X-Transform-Params': JSON.stringify(transformParams),
        Vary: 'Accept',
      },
    })
  } catch (error) {
    console.error('Image transformation error:', error)

    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    )
  }
}

// Prefetch and cache popular images
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { urls, presets } = body

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'Invalid urls array' }, { status: 400 })
    }

    if (urls.length > 10) {
      return NextResponse.json(
        { error: 'Maximum 10 URLs per request' },
        { status: 400 }
      )
    }

    const defaultPresets = [
      { width: 640, format: 'webp' },
      { width: 1024, format: 'webp' },
      { width: 1920, format: 'webp' },
    ]

    const presetsToUse = presets || defaultPresets
    const results = []

    for (const url of urls) {
      if (!isValidImageUrl(url)) {
        continue
      }

      for (const preset of presetsToUse) {
        try {
          const transformParams: ImageTransformParams = {
            url,
            ...preset,
            quality: 80,
            fit: 'cover',
          }

          // Prefetch the image transformation
          await transformImage(transformParams)

          results.push({
            url,
            preset,
            status: 'cached',
          })
        } catch (error) {
          results.push({
            url,
            preset,
            status: 'failed',
            error: error instanceof Error ? error.message : 'Unknown error',
          })
        }
      }
    }

    return NextResponse.json({
      message: 'Prefetch completed',
      results,
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to prefetch images' },
      { status: 500 }
    )
  }
}
