import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import TextInputComponent from "../components/textInput";
const TEXT_INPUT_COLOR = "#bdbdbd";
const TEXT_INPUT_LEFT_PO = 10;
const TEXT_INPUT_TOP_PO = 18;
const TEXT_INPUT_WIDTH = "87%";
const TEXT_INPUT_PADDING = 0;
const TEXT_INPUT_MARGIN = 0;
const TEXT_INPUT_PLACEHOLDER = "Comments..";
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from "react-native-vector-icons";
const Comment = ({navigation}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.6,
          shadowRadius: 2,
          elevation: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 20,
          height: 80,
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <MaterialCommunityIcons name="keyboard-backspace" size={30} />
        </TouchableOpacity>

        <Text style={styles.titleCategory}>Best GenJutsu User</Text>
      </View>
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: width,
          height: "9%",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.6,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <TextInputComponent
          color_={TEXT_INPUT_COLOR}
          left_={TEXT_INPUT_LEFT_PO}
          top_={TEXT_INPUT_TOP_PO}
          width_={TEXT_INPUT_WIDTH}
          padding_={TEXT_INPUT_PADDING}
          margin_={TEXT_INPUT_MARGIN}
          placeHolder_={TEXT_INPUT_PLACEHOLDER}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <MaterialCommunityIcons name="send-circle" size={40} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  titleCategory: {
    marginLeft: 60,
    marginTop: 10,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "#0d47a1",
    opacity: 0.9,
    textTransform: "uppercase",
  },
});
export default Comment;
