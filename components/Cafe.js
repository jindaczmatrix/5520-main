import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

let Cat = props => {
	const [isHungry, setIsHungry] = useState(true)

	return (
		<View>
			<Text>Hello, I am {props.name}!</Text>
			
			<Button 
				onPress={() => {
					setIsHungry(false)
				}}
				disabled={!isHungry}
				title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
			/>
		</View>
	)
} 

const Cafe = () => {
  return (
	<View>
	  <Cat name="maru"/>
	  <Cat name="tom"/>
	</View>
  )
}

export default Cafe