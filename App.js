import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "cool app"
  let greeting = function test(){}
  return (
    // view is like div, a container for other components
    <View style={styles.container}>
      <Text>My App name is {name}</Text>
      <Text>Test📔</Text>
      <Text>Start working on {greeting()} project</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff90',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    justifyContent: 'space-around'
  },
});
