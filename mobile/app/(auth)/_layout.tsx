import { Redirect, Stack } from 'expo-router'
import { useSupabase } from '@/components/SupabaseProvider'

export default function AuthLayout() {
  const { user, loading } = useSupabase()

  if (loading) {
    return null // Or a loading spinner
  }

  if (user) {
    return <Redirect href="/(tabs)" />
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  )
}
