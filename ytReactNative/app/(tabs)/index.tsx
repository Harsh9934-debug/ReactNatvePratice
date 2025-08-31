import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, Pressable } from "react-native";
const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>HELLO THIS IS HARSH </Text>
      <Image
        style={{ width: 200, height: 400 }}
        source={{ uri: "https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" }}
      />

      <Button title='click me' onPress={() => { alert("Button is clicked") }}></Button>
      {/* this Button property is no that good this is haviing the prebuilt styling */}

      <TouchableOpacity>
        <Text style={styles.whiteText2} onPress={() => { { Alert.alert("This is from the touchable opacity") } }}>this is from the different button</Text>
      </TouchableOpacity>

      <Pressable>
        <Text style={styles.whiteText3} onPress={() => { Alert.alert("This is a sample message") }}>Press me </Text>
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
    padding: 20,
    margin: 50,
    backgroundColor: "red"
  },
  whiteText3: {
    color: "white", // white text
    fontSize: 20,
    padding: 20,
    backgroundColor: "purple"
  },
});

export default Index;


// useColourScheme()  
// this is used for knowing the theme of the current styles

// when we pass in the percentage and just the value the % is the value is used in the  covering the complete page 
// and perffer using the percentage % rather than the value 

// flex 1 takes the complete page height and width 
// if we want to devide the page in the multiple part that time we combine all of then inside the other part in the single one eg 1+2+3 = 6

// and the 3 container will be divided in the 1/6 and 2/6 and 3/6
// this is the how the space is divide 


//  By default the flex direction is in the colums 
// but if we want to change this is the row that can be done
// that is done by the flex direction then we give the direction 

// the x dir is known as the main axis 

// justify content is the property that is used in the main axis that is in the x direction 
// also the all the property are same space between, space around ,space evenly,center 

// align item that is in the y dir 

// the property could be stretch 

// there is also the property called align self just to the single box that will take it to the top in the starting 

// this is the section lead us about the flex weap property this is done so that the new property is and the original iten is not sring 

// the flemWrap is the property to fix this 

// to achive the scroll property that time we use the ScrollView instedd of the  view

// see  in the main application to achive scrollin we use the FlatList this also make us achive the scroll view and then in this we can apply multiple auth that includes are the fillowing that are these suppse we have the 20000 data to be shown that time all the datas will be shown at once and then the oe app will become slow to remove this factor we use the extraData = {}   property to get rid of this property 


// Text input 

