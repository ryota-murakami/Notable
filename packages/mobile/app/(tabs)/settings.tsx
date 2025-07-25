import { type FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useSupabase } from '../../components/SupabaseProvider'

const SettingsScreen: FC = () => {
  const { user } = useSupabase()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {user ? (
        <View>
          <Text style={styles.subtitle}>Signed in as: {user.email || 'Unknown'}</Text>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => console.log('Sign out clicked')}
          >
            <Text>Sign Out</Text>
          </Button>
        </View>
      ) : (
        <Text style={styles.subtitle}>Not signed in</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})

export default SettingsScreen