import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface GeoInfo {
  country: string
  region: string
  city: string
  timezone: string
  currency: string
  language: string
  countryCode: string
}

// Get geolocation information from request headers
function getGeoInfo(request: NextRequest): GeoInfo {
  const country = request.geo?.country || 'US'
  const region = request.geo?.region || ''
  const city = request.geo?.city || ''
  const timezone = request.headers.get('x-vercel-ip-timezone') || 'UTC'

  // Map country codes to currencies and languages
  const countryData: Record<string, { currency: string; language: string }> = {
    US: { currency: 'USD', language: 'en' },
    GB: { currency: 'GBP', language: 'en' },
    CA: { currency: 'CAD', language: 'en' },
    AU: { currency: 'AUD', language: 'en' },
    DE: { currency: 'EUR', language: 'de' },
    FR: { currency: 'EUR', language: 'fr' },
    ES: { currency: 'EUR', language: 'es' },
    IT: { currency: 'EUR', language: 'it' },
    NL: { currency: 'EUR', language: 'nl' },
    JP: { currency: 'JPY', language: 'ja' },
    KR: { currency: 'KRW', language: 'ko' },
    CN: { currency: 'CNY', language: 'zh' },
    IN: { currency: 'INR', language: 'en' },
    BR: { currency: 'BRL', language: 'pt' },
    MX: { currency: 'MXN', language: 'es' },
  }

  const data = countryData[country] || { currency: 'USD', language: 'en' }

  return {
    country,
    region,
    city,
    timezone,
    currency: data.currency,
    language: data.language,
    countryCode: country,
  }
}

// Check if user is in a region with GDPR requirements
function isGDPRRegion(countryCode: string): boolean {
  const gdprCountries = [
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
    'IS',
    'LI',
    'NO',
  ]
  return gdprCountries.includes(countryCode)
}

// Get CDN region for optimal performance
function getCDNRegion(countryCode: string): string {
  const regionMap: Record<string, string> = {
    // North America
    US: 'iad1',
    CA: 'iad1',
    MX: 'iad1',
    // Europe
    GB: 'lhr1',
    DE: 'fra1',
    FR: 'cdg1',
    NL: 'ams1',
    ES: 'mad1',
    IT: 'mxp1',
    SE: 'arn1',
    NO: 'osl1',
    // Asia Pacific
    JP: 'nrt1',
    KR: 'icn1',
    SG: 'sin1',
    AU: 'syd1',
    IN: 'bom1',
    HK: 'hkg1',
    CN: 'sha1',
    // South America
    BR: 'gru1',
    AR: 'eze1',
    // Other
    ZA: 'cpt1',
  }

  return regionMap[countryCode] || 'iad1'
}

export async function GET(request: NextRequest) {
  try {
    const geoInfo = getGeoInfo(request)

    const response = {
      ...geoInfo,
      isGDPRRegion: isGDPRRegion(geoInfo.countryCode),
      cdnRegion: getCDNRegion(geoInfo.countryCode),
      timestamp: new Date().toISOString(),
      ip: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        Vary: 'X-Forwarded-For',
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to get geo information' },
      { status: 500 },
    )
  }
}

// POST endpoint for storing user preferences based on geo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const geoInfo = getGeoInfo(request)

    // In a real implementation, store user preferences in a database
    // For now, just return the combined data
    const response = {
      geoInfo,
      preferences: body,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(response)
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 400 },
    )
  }
}
