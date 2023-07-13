import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = (props) => {
	// console.log(props);
  return (	
	<View>
		<Text style={styles.header}>Welcome to {props.name}</Text>
	  <Text>My age is {props.age}</Text>
	  <Text>My major is {props.major}</Text>
	  {/* {props.children[0]} */}
	</View>
  )
}
const styles = StyleSheet.create({
	header: {
		color: "darkslateblue",
		borderColor: "darkslateblue",
		borderWidth: 3,
		fontSize: 30,
		fontWeight: "bold",
		padding: 5,
	}
  });
  

export default Header