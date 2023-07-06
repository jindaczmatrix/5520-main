import { View, Text } from 'react-native'
import React from 'react'

export default function test() {
  return (
	// wrap with fragments if you dont need a view
	<>
	<View>
	  <Text>test</Text>
	</View>
	</>
  )
}

// rnf