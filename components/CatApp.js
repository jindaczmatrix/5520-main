import { View, Text, Image } from 'react-native'
import React from 'react'

const CatApp = () => {
  return (
	<View>
	  
		
	  <Image
	  	source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
	  	style={{width: 200, height: 200}}
	  />
	  
	  <Text>Hello, I am your cat</Text>
	</View>
  )
}

export default CatApp