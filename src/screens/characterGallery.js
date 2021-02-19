import React from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const ChacterGallery = ({navigation}) => {
  return (
    <View>
      <MaterialCommunityIcons
        name="close"
        size={28}
        color="#000r4hh4"
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SharedElement
        id="general.bg"
        style={{
          position: "absolute",
        }}
      >
        <View style={styles.bg}>
          <Animatable.View
            animation="bounceIn"
            delay={0.2}
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
          
          </Animatable.View>
        </View>
      </SharedElement>
    </View>
  );
};
ChacterGallery.sharedElements = () => {

  return [
    { id: "general.bg" },
 
  ];
};

const styles = StyleSheet.create({
  bg: {
    width,
    height,
    backgroundColor: "white",
  },
});
export default ChacterGallery;
