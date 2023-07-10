import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
	// console.log(props);
  return (	
	<View>
	  <Text>My App name is {props.name}</Text>
	  <Text>My age is {props.age}</Text>
	  <Text>My major is {props.major}</Text>
	  {props.children[0]}
	</View>
  )
}

export default Header