import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function PressableEx() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1)
        }}
        styles={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
          },
          styles.wrapperCustom
        ]}
      >
        {
          ({pressed}) => (
            <Text style={styles.text}>
              {pressed ? 'pressed!' : 'press me'}
            </Text>
          )
        }
        
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_console">
          {textLog}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
