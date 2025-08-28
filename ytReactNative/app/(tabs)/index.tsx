import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>HELLO THIS IS HARSH AND I LOVE CODING</Text>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                // take full screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // black background
  },
  whiteText: {
    color: "white", // white text
    fontSize: 20,  // bigger text
  },
});

export default Index;
