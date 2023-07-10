import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const LotsOfStyles = () => {
  return (
	<View>
	  <Text style={styles.red}>just red</Text>
	  <Text style={styles.bigBlue}>just bigBlue</Text>
	  <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
	  <Text style={[styles.red, styles.bigBlue]}>bigBlue, then </Text>
	</View>
  )
}

let styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	}
})

export default LotsOfStyles