import React, { useState } from 'react'
import { View, StyleSheet, Alert, Text } from 'react-native'
import {
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  useTheme,
} from 'react-native-paper'
import { Link } from 'expo-router'
import { useSupabase } from '@/components/SupabaseProvider'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { supabase } = useSupabase()
  const theme = useTheme()

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        Alert.alert('Error', error.message)
      }
    } catch (_error) {
      Alert.alert('Error', 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })

      if (error) {
        Alert.alert('Error', error.message)
      }
    } catch (_error) {
      Alert.alert('Error', 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: theme.colors.primary }]}>
            <Text>Welcome to Notable</Text>
          </Title>
          <Paragraph
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            <Text>Sign in to access your notes</Text>
          </Paragraph>

          <TextInput
            label='Email'
            value={email}
            onChangeText={setEmail}
            mode='outlined'
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.input}
            disabled={loading}
          />

          <TextInput
            label='Password'
            value={password}
            onChangeText={setPassword}
            mode='outlined'
            secureTextEntry
            style={styles.input}
            disabled={loading}
          />

          <Button
            mode='contained'
            onPress={handleSignIn}
            loading={loading}
            disabled={loading}
            style={styles.button}
          >
            <Text>Sign In</Text>
          </Button>

          <Divider style={styles.divider} />

          <Button
            mode='outlined'
            onPress={handleGoogleSignIn}
            loading={loading}
            disabled={loading}
            style={styles.button}
            icon='google'
          >
            <Text>Continue with Google</Text>
          </Button>

          <View style={styles.footer}>
            <Paragraph style={{ color: theme.colors.onSurfaceVariant }}>
              <Text>Don't have an account? </Text>
              <Link
                href='/(auth)/sign-up'
                style={{ color: theme.colors.primary }}
              >
                <Text>Sign up</Text>
              </Link>
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  divider: {
    marginVertical: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
})
