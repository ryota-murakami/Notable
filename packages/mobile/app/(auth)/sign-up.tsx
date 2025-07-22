import { useState } from 'react'
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

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const { supabase } = useSupabase()
  const theme = useTheme()

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !name) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      })

      if (error) {
        Alert.alert('Error', error.message)
      } else {
        Alert.alert(
          'Success',
          'Please check your email for a verification link',
          [{ text: 'OK' }]
        )
      }
    } catch (_error) {
      Alert.alert('Error', 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setLoading(true)

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
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
            <Text>Create Account</Text>
          </Title>
          <Paragraph
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            <Text>Join Notable today</Text>
          </Paragraph>

          <TextInput
            label='Full Name'
            value={name}
            onChangeText={setName}
            mode='outlined'
            style={styles.input}
            disabled={loading}
          />

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

          <TextInput
            label='Confirm Password'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            mode='outlined'
            secureTextEntry
            style={styles.input}
            disabled={loading}
          />

          <Button
            mode='contained'
            onPress={handleSignUp}
            loading={loading}
            disabled={loading}
            style={styles.button}
          >
            <Text>Sign Up</Text>
          </Button>

          <Divider style={styles.divider} />

          <Button
            mode='outlined'
            onPress={handleGoogleSignUp}
            loading={loading}
            disabled={loading}
            style={styles.button}
            icon='google'
          >
            <Text>Continue with Google</Text>
          </Button>

          <View style={styles.footer}>
            <Paragraph style={{ color: theme.colors.onSurfaceVariant }}>
              <Text>Already have an account? </Text>
              <Link href='/(auth)' style={{ color: theme.colors.primary }}>
                <Text>Sign in</Text>
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
