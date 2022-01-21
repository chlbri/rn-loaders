import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { N, SQUARE_SIZE } from './src/constants';
import ClockLoader from './src/Loaders/Clock';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <ClockLoader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
