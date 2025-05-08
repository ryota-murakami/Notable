/**
 * This file contains helper functions and constants for static export compatibility
 *
 * When using Next.js with `output: export`, all routes must be explicitly marked as static
 * or have a revalidation strategy defined.
 */

// Use this for routes that should be completely static (generated at build time)
export const STATIC_ROUTE = {
  dynamic: "force-static" as const,
}

// Use this for routes that should be static but revalidated periodically
// Adjust the seconds value as needed for different routes
export const REVALIDATED_ROUTE = {
  revalidate: 3600 as const, // 1 hour
}

/**
 * Helper function to get the correct static export configuration based on the route type
 * @param type The type of route ('static' or 'revalidated')
 * @param revalidateSeconds Optional custom revalidation period in seconds
 */
export function getStaticExportConfig(type: "static" | "revalidated", revalidateSeconds?: number) {
  if (type === "static") {
    return STATIC_ROUTE
  }

  return {
    revalidate: revalidateSeconds || REVALIDATED_ROUTE.revalidate,
  }
}
