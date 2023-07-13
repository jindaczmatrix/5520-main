import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextEx = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  let bodyText = "This is not really a bird nest.";
  let onPressTitle = () => {
    setTitleText("Birds Nest [pressed]]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextEx;
