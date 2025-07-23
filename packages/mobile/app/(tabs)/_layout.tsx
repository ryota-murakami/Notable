import { Redirect, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'react-native-paper'
import { useSupabase } from '@/components/SupabaseProvider'

export default function TabLayout() {
  const { user, loading } = useSupabase()
  const theme = useTheme()

  if (loading) {
    return null // Or a loading spinner
  }

  if (!user) {
    return <Redirect href='/(auth)' />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.outline,
        },
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.onSurface,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Notes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='document-text-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
