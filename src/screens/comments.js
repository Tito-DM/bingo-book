import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import TextInputComponent from "../components/textInput";
const TEXT_INPUT_COLOR = "#bdbdbd";
const TEXT_INPUT_LEFT_PO = 0;
const TEXT_INPUT_TOP_PO = 0;
const TEXT_INPUT_WIDTH = "89%";
const TEXT_INPUT_PADDING = 0;
const TEXT_INPUT_MARGIN = 0;
const TEXT_INPUT_PLACEHOLDER = "Comments..";
const TEXT_INPUT_AUTOFOCUS = true;
const TEXT_INPUT_ICON = "";
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from "react-native-vector-icons";
const Comment = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#4a148c",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.6,
          shadowRadius: 2,
          elevation: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 0,
          height: 108.5,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 21}}>
          <MaterialCommunityIcons name="keyboard-backspace" size={30}  color="white"/>
        </TouchableOpacity>

        <Text style={styles.titleCategory}>Best GenJutsu User</Text>
        <View style={{marginTop: 10,}}>
          <Avatar
            rounded
            size="small"
            source={{
              uri: "https://images4.alphacoders.com/944/944476.png",
            }}
          />
        </View>
      </View>
      <View style={{ width: width, height: height }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Avatar
            rounded
            size="small"
            source={{
              uri: "https://images4.alphacoders.com/944/944476.png",
            }}
          />
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Anonymoes</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, marginLeft: 5,opacity:0.5 }}>12h</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 60,
            width: 260,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "justify",
              padding: 10,
              lineHeight: 20,
              fontSize: 13,
              
            }}
          >
            {
              "shisui is the best 🔥 KotoAmatsukame is the ultimate genjutsu puts u under genjutsu whiout u knowing is is sick 🤢"
            }
          </Text>
         
        </View>
        <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Avatar
            rounded
            size="small"
            source={{
              uri: "https://images7.alphacoders.com/113/1133297.png",
            }}
          />
          <Text style={{ fontSize: 18, marginLeft: 10 }}>#Anbu</Text>
          <View>
            <Text style={{ fontSize: 12, marginLeft: 5,opacity:0.5 }}>1d</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 60,
            width: 190,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "justify",
              padding: 10,
              lineHeight: 20,
              fontSize: 13,
              
            }}
          >
            {
              "Itachi is the boss 😎"
            }
          </Text>
         
        </View>
        <Text>{" "}</Text>
        </View>
<View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Avatar
            rounded
            size="small"
            source={{
              uri: "https://images4.alphacoders.com/944/944476.png",
            }}
          />
          <Text style={{ fontSize: 18, marginLeft: 10 }}>Anonymoes</Text>
          <View>
            <Text style={{ fontSize: 12, marginLeft: 5,opacity:0.5 }}>5d</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 60,
            width: 100,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
             textAlign:"center",
              padding: 10,
            
              fontSize: 50,
              
            }}
          >
            {
              "🙄"
            }
          </Text>
         
        </View>
      
        </View>
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
          backgroundColor: "#4a148c",
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
          autoFocus_={TEXT_INPUT_AUTOFOCUS}
          icon_={TEXT_INPUT_ICON}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <MaterialCommunityIcons name="send-circle" size={40}  color="white"/>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  titleCategory: {
    marginTop: 10,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    opacity: 0.9,
    textTransform: "uppercase",
  },
});
export default Comment;
