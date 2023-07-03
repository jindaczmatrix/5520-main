import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test📔</Text>
      <Text>alleviate the data imbalance of the collected images, new wildfire images were generated using the CycleGAN as a data augmentation strategy. The objective of using the image-generation model is to convert non-w</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff90',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // justifyContent: 'flex-end',
  },
});
