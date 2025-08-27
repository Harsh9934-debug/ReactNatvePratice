import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // take full screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // optional: black background to see white text
  },
  whiteText: {
    color: "#fff", // white color
    fontSize: 20,  // optional: increase size
  },
});

export default Index;
