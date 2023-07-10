import { View, Text } from 'react-native'
import React from 'react'

const FixedDimensionsBasics = () => {
  return (
	<View style={{height: 300}}>
	  <Text>FixedDimensionsBasics</Text>
	  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
	  <View style={{width: 100, height: 100,
	  backgroundColor: 'skyblue'}}/>
	  <View style={{width: 150, height: 150,
	  backgroundColor: 'steelblue'}}/>
	</View>
  )
}

export default FixedDimensionsBasics