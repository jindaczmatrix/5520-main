import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View, Button } from "react-native";
import Header from "./components/Header";
import CatApp from "./components/CatApp";
import Cafe from "./components/Cafe";
import { useState } from "react";
import Input from "./components/Input";
import PizzaTranslator from "./components/PizzaTranslator";
import LotsOfStyles from "./components/LotsOfStyles";
import FixedDimensionsBasics from "./components/FixedDimensionsBasics";
import FlatListBasics from "./components/FlatListBasics";
import Flex from "./components/Flex";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import DirectionLayout from "./components/DirectionLayout";
import JustifyContentBasics from "./components/JustifyContentBasics";
import AlignItemsLayout from "./components/AlignItemsLayout";
import FlexDimensionsBasics from "./components/FlexDimensionsBasics";
import PercentageDimensionsBasics from "./components/PercentageDimensionsBasics";
import Btn from "./components/Btn";
import DisplayAnImage from "./components/DisplayAnImage";
import DisplayAnImageWithStyle from "./components/DisplayAnImageWithStyle";

export default function App() {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  }
  const [inputText, setInputText] = useState("");
  // when text is changed, this function will be called
  function handleChangeText(changeText) {
    setInputText(changeText);
    console.log(inputText);
    // also hide the modal
    hideModal()
  }

  let hideModal = () => {
    setModalVisible(false)
  }
 
  const name = "cool app";
  const age = 18;
  let major = "math";
  let greeting = function test() {};
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScrollView>
      <Text>L3</Text>
      <Text>L3</Text>
      <Text>L3</Text>
      <Button title="Add Goal" onPress={() => {setModalVisible(true)}}></Button>
      <Input changeTextCallBack={handleChangeText} modalVisible={modalVisible} hideModal={hideModal}/>
      <Text>{inputText}</Text>
      
      <Text>L3</Text>
      <Text>L3</Text>
      <Text>L3</Text>

      <DisplayAnImageWithStyle />
      <DisplayAnImage />  
      <Btn></Btn>
      {/* <PercentageDimensionsBasics /> */}
      <FlexDimensionsBasics />
      <AlignItemsLayout />
      <JustifyContentBasics />
      <DirectionLayout />
      <FlexDirectionBasics />
      <Flex />
      {/* <FlatListBasics /> */}
      
      <Image source={logo} />
      <Text style={{fontSize: 36}}>Scroll me plz</Text>
      <FixedDimensionsBasics />
      <LotsOfStyles></LotsOfStyles>
      <PizzaTranslator />


      <Cafe />
      <CatApp />
      <Header name={name} age={age} major={major}>
        <Text>some child</Text>
        <Text>some other child</Text>
      </Header>
      <Text>Test📔</Text>
      <Text>Start working on {greeting()} project</Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems: 'flex-end',
    // justifyContent: "center",
    // justifyContent: 'flex-end',
    justifyContent: "space-around",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
  },
});
