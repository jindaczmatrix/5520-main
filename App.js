import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";
import Header from "./components/Header";
import CatApp from "./components/CatApp";
import Cafe from "./components/Cafe";
import { useState } from "react";
import Input from "./components/Input";
// import PizzaTranslator from "./components/PizzaTranslator";
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
import SectionListBasics from "./components/SectionListBasics";
import ActivityIndicators from "./components/ActivityIndicators";
import Flatlistsimple from "./components/Flatlistsimple";
import Flatlistselectable from "./components/Flatlistselectable";
import ImgBackground from "./components/ImgBackground";
import ModalEx from "./components/ModalEx";
import PressableEx from "./components/PressableEx";
import ScrollViewEx from "./components/ScrollViewEx";
import TextEx from "./components/TextEx";
import BoldAndBeautiful from "./components/BoldAndBeautiful";
import TextInputExample from "./components/TextInputExample";
import MultilineTextInputExample from "./components/MultilineTextInputExample";

export default function App() {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64,
  };
  const [inputText, setInputText] = useState("");
  // when text is changed, this function will be called
  function handleChangeText(changeText) {
    setInputText(changeText);
    console.log(inputText);
    // also hide the modal
    // try adding this new object to goals array
    const newGoal = {text: changeText, id: Math.random()};
    
    // use updater function to set updated goals
    setGoals(prevGoals => [...prevGoals, newGoal])
    
    // react useState is async
    hideModal();
  }

  let hideModal = () => {
    setModalVisible(false);
  };

  const name = "cool app";
  const age = 18;
  let major = "math";
  let greeting = function test() {};
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>


        <Header name={name} age={age} major={major}></Header>
          <Button
            title="Add Goal"
            onPress={() => {
              setModalVisible(true);
            }}
          ></Button>
          <Input
            changeTextCallBack={handleChangeText}
            modalVisible={modalVisible}
            hideModal={hideModal}
          />
          <Text styles={styles.text}>{inputText}</Text>
          {/* <Text styles={styles.text}>{goals}</Text> */}
          
          
          <Text>L5</Text>
          <Text>L5</Text>
          <Text>L5</Text>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(200, 255, 200)" : "red",
                borderRadius: 8,
              },
              styles.wrapper,
            ]}
          >
            <Text>Press me</Text>
          </Pressable>
          <Text>L4</Text>
          <Text>L4</Text>
          <Text>L4</Text>

          <MultilineTextInputExample/>
      <TextInputExample/>

      <BoldAndBeautiful/>
      <TextEx/>
      <ScrollViewEx/>
      <PressableEx/>
      <ModalEx></ModalEx>
      <ImgBackground/>
      <Flatlistselectable/>
      <Flatlistsimple/>
      <ActivityIndicators></ActivityIndicators>
      <SectionListBasics></SectionListBasics>

          <Text>L3</Text>
          <Text>L3</Text>
          <Text>L3</Text>


          <Text>L2</Text>
          <Text>L2</Text>
          <Text>L2</Text>
        </View>

        <View style={styles.bottomContainer}>
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
          <FlatListBasics />

          <Image source={logo} />
          <Text style={{ fontSize: 36 }}>Scroll me plz</Text>
          <FixedDimensionsBasics />
          <LotsOfStyles></LotsOfStyles>
          {/* <PizzaTranslator /> */}

          <Cafe />
          <CatApp />
          <Header name={name} age={age} major={major}>
            <Text>some child</Text>
            <Text>some other child</Text>
          </Header>
          <Text>Test📔</Text>
          <Text>Start working on {greeting()} project</Text>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // justifyContent: 'flex-end',
    // justifyContent: "space-around",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
  },
  text: {
    color: "red",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "white",
    alignItems: "flex-start",
    width: "100%",
  },

  wrapper: {
    padding: 6,
  },
});
