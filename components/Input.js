import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

// how to pass from child to parent?
// receive call back when its pressed
const Input = ({ changeTextCallBack, modalVisible, hideModal }) => {
  const [text, setText] = useState("");

  let checkButton = () => {
    console.log("works");
  };

  let storeText = (changedText) => {
    console.log(changedText);
    // store changetext in text variable
    setText(changedText);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View>
        <Text>Text input</Text>
        <Image
          style={styles.logo}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        ></Image>

        <Image
          style={styles.logo}
          source={require("../assets/icon.png")}
        ></Image>

        <TextInput
          style={styles.input}
          // its an event handler
          onChangeText={storeText}
        />
        <View style={styles.buttonContainer}>
          {text && (
            <Button
              title="Confirm"
              //   disabled={text.length === 0}
              disabled={!text}
              onPress={() => {
                changeTextCallBack(text);
              }}
            />
          )}
          {/* <Button
          title="Cancel"
          onPress={() => {
            changeTextCallBack("");
          }}
        /> */}
          <Button
            title="CancelWithSetText"
            onPress={() => {
              setText("");
              hideModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

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
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  // make button in a row each with 50% width
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Input;
