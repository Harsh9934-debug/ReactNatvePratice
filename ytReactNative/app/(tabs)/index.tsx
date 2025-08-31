import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, Pressable } from "react-native";
const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>HELLO THIS IS HARSH </Text>
      <Image
        style = {{width:200 , height:400}}
        source={{uri:"https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"}}
      />

      <Button title ='click me' onPress={()=>{alert("Button is clicked")}}></Button> 
      {/* this Button property is no that good this is haviing the prebuilt styling */}

      <TouchableOpacity>
        <Text style= {styles.whiteText2} onPress={()=>{{Alert.alert("This is from the touchable opacity")}}}>this is from the different button</Text>
      </TouchableOpacity>

      <Pressable>
        <Text style={styles.whiteText3} onPress={()=>{Alert.alert("This is a sample message")}}>Press me </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", 
  },
  whiteText: {
    color: "white", // white text
    fontSize: 20,  // bigger text
  },
  whiteText2: {
    color: "white", // white text
    fontSize: 20,
    padding:20, 
    margin:50,  
    backgroundColor:"red"
  },
  whiteText3: {
    color: "white", // white text
    fontSize: 20,
    padding:20, 
    backgroundColor:"purple"
  },
});

export default Index;


// useColourScheme()  
// this is used for knowing the theme of the current styles

// when we pass in the percentage and just the value the % is the value is used in the  covering the complete page 
// and perffer using the percentage % rather than the value 