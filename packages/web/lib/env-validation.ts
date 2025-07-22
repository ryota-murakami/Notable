// Environment variable validation utility

export function validateEnvVar(
  name: string,
  required: boolean = true
): string | undefined {
  const value = process.env[name]

  if (required && !value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function validateOpenAIKey(): string {
  const key = validateEnvVar('OPENAI_API_KEY', false)
  if (!key) {
    throw new Error('OpenAI API key is required for AI features')
  }
  return key
}

export function validateMetricsAuthToken(): string | undefined {
  return validateEnvVar('METRICS_AUTH_TOKEN', false)
}

export function validateAlertmanagerWebhookSecret(): string | undefined {
  return validateEnvVar('ALERTMANAGER_WEBHOOK_SECRET', false)
}

export function validateSupabaseConfig() {
  const url = validateEnvVar('NEXT_PUBLIC_SUPABASE_URL')
  const anonKey = validateEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY')
  const serviceRoleKey = validateEnvVar('SUPABASE_SERVICE_ROLE_KEY', false)

  return { url, anonKey, serviceRoleKey }
}
