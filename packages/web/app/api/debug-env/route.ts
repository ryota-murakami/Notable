export async function GET() {
  return Response.json({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
    NEXT_PUBLIC_BYPASS_TEMPLATE_PICKER:
      process.env.NEXT_PUBLIC_BYPASS_TEMPLATE_PICKER,
    allEnvVars: Object.keys(process.env).filter((key) =>
      key.startsWith('NEXT_PUBLIC_')
    ),
  })
}
