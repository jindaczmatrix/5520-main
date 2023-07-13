import { View, Text, TextInput } from 'react-native'
import React from 'react'

const MultilineTextInputExample = () => {
	const [value, onChangeText] = React.useState('Useless Multiline Placeholder')

  return (
	<View style={{
		backgroundColor: value,
		borderBottomColor: '#000000',
		borderBottomWidth: 1,
	}}>
	  <TextInput
	  	editable
		multiline
		numberOfLines={4}
		maxLength={40}
		onChangeText={text=>onChangeText(text)}
		value={value}
		style={{padding:10}}
	  />
	</View>
  )
}

export default MultilineTextInputExample