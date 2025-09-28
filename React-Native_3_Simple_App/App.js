import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.container}>
      <StartScreen />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'30%',
    padding:16
  }
});
