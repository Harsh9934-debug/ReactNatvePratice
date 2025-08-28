import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>HELLO THIS IS HARSH AND I LOVE CODING</Text>
      <Image
        style = {{width:200 , height:400}}
        source={{uri:"https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"}}
      />

      <Button title ='click me' onPress={()=>{alert("Button is clicked")}}></Button> 
      {/* this Button property is no that good this is haviing the prebuilt styling */}


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
