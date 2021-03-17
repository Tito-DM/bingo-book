import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Card from "../components/card";
import TextInputComponent from "../components/textInput";
import { MaterialIcons } from "react-native-vector-icons";
import IosCheckBox from "../components/iosCheckBox";
const { width, height } = Dimensions.get("window");
const TEXT_INPUT_COLOR = "#bdbdbd";
const TEXT_INPUT_LEFT_PO = 18;
const TEXT_INPUT_TOP_PO = 20;
const TEXT_INPUT_WIDTH = "100%";
const TEXT_INPUT_PADDING = 10;
const TEXT_INPUT_MARGIN = 10;
const TEXT_INPUT_PLACEHOLDER = "Search";
const TEXT_INPUT_AUTOFOCUS = false;
const TEXT_INPUT_ICON = "search1";

const Rating = ({ navigation }) => {
  const [characterRatingCheckBox, setcharacterRatingCheckBox] = useState(false);
  const [hideCheckBox, sethideCheckBox] = useState(false);
  const [bestCheckBox, setBestCheckBox] = useState(false);
  const [worseCheckBox, setWorseCheckBox] = useState(false);
  const [otherCheckBox, setOther] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0);
  const [cardMarginTop, setCardMarginTop] = useState(-100);
  const [textPlaceHolder, setTextPlaceHolder] = useState("");
  const [list, setList] = useState([]);
  const [characterTextInput, setcharacterTextInput] = useState("");
  const [enableTextInput, setEnableTextInput] = useState(true);
  const [iosCheckBox, setIosCheckBox] = useState(false);

  const checkboxHideHandler = (value, list) => {
    sethideCheckBox(value);
    setcharacterRatingCheckBox(false);
    setOther(false);
    setOpacityValue(0);
    setCardMarginTop(-100);
    list.length ? setCardMarginTop(-170) : null;
  };
  const checkboxHandler = (
    name,
    value,
    checkCharacter,
    checkOther,
    placeholder
  ) => {
    if (name === "character") {
      setcharacterRatingCheckBox(value);
      setOther(checkOther);
      setTextPlaceHolder(placeholder);
    } else {
      setOther(value);
      setcharacterRatingCheckBox(checkCharacter);
      setTextPlaceHolder(placeholder);
    }

    setOpacityValue(1);
    setCardMarginTop(10);
    sethideCheckBox(false);
    setList([]);
  };

  return (
    <SafeAreaView style={styles.androidSafearea}>
      <View style={{ padding: 10 }}>
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

        <Text
          style={{
            color: "white",
            marginTop: 5,
            fontSize: 15,
            marginBottom: 5,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Create Rating
        </Text>
        <TextInput
          editable={enableTextInput}
          placeholder="Category Title"
          style={styles.textinput}
          underlineColorAndroid="transparent"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cheboxView}>
            <Text style={styles.text}>Character Rating</Text>
            <IosCheckBox
             
              value={characterRatingCheckBox}
              onValueChange={(value) =>
                checkboxHandler(
                  "character",
                  value,
                  true,
                  false,
                  "Enter a character Name"
                )
              }
            />
          </View>

          <View style={styles.cheboxView}>
            <Text style={styles.text}>Other</Text>
            <IosCheckBox
              disabled={false}
              value={otherCheckBox}
              onValueChange={(value) =>
                checkboxHandler(
                  "other",
                  value,
                  false,
                  true,
                  "Enter jutsu name or other category you want to create"
                )
              }
            />
          </View>

          <View style={styles.cheboxView}>
            <Text style={styles.text}>Hide</Text>
            <IosCheckBox
             
              value={hideCheckBox}
              onValueChange={(value) => checkboxHideHandler(value, list)}
            />
          </View>
        </View>

        <View style={{ opacity: opacityValue }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={characterTextInput}
              returnKeyType="done"
              onChangeText={(e) => {
                setcharacterTextInput(e);
              }}
              onEndEditing={() => {
                if (characterTextInput) {
                  if (
                    list.length <= 9 &&
                    !list.includes(characterTextInput.toUpperCase())
                  ) {
                    setList([...list, characterTextInput.toUpperCase()]);
                  }
                }
                setcharacterTextInput("");
              }}
              style={styles.textinput}
              placeholder={textPlaceHolder}
            />
            {/**   <TouchableOpacity style={styles.btn_add}>
            <Text style={{ color: "white" }}>+</Text>
          </TouchableOpacity> */}
          </View>
          {/** character edit and delete view */}
          <View style={{ marginLeft: 20, padding: 10 }}>
            {list.map((l, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: width,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          backgroundColor: "green",
                          width: 6,
                          height: 6,
                          borderRadius: 50,
                          marginRight: 5,
                        }}
                      ></View>
                      <Text
                        style={{
                          color: "white",
                          marginLeft: 1,
                          fontSize: 14,
                          letterSpacing: 1.2,
                          textTransform: "uppercase",
                        }}
                      >
                        {l}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity>
                      <MaterialIcons name="edit" size={20} color="#1e88e5" />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity>
                      <MaterialIcons name="delete" size={20} color="#ff1744" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>

          {/** best to worse checkbox */}

          <View style={{ flexDirection: "row" }}>
            <View style={styles.cheboxView}>
              <Text style={styles.text}>Best</Text>
              <IosCheckBox
               
                value={bestCheckBox}
                onValueChange={(value) => {
                  setBestCheckBox(value);
                  setWorseCheckBox(false);
                }}
              />
            </View>

            <View style={styles.cheboxView}>
              <Text style={styles.text}>Worse</Text>
              <IosCheckBox
            
                value={worseCheckBox}
                onValueChange={(value) => {
                  setWorseCheckBox(value);
                  setBestCheckBox(false);
                }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.btn_done}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }}></View>
        </View>
      </View>
      {/** card*/}
      <ScrollView style={{ marginTop: cardMarginTop }}>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleCategory: {
    margin: 10,
    letterSpacing: 1.2,
    fontWeight: "600",
    fontSize: 18,
  },
  btn_vote: {
    backgroundColor: "#2e7d32",
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#263238",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    color: "white",
    letterSpacing: 1.2,
  },
  btn_done: {
    backgroundColor: "#2e7d32",
    width: 80,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: "80%",
    marginRight: 20,
    borderRadius: 5,
  },
  btn_add: {
    backgroundColor: "#2e7d32",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    shadowColor: "#263238",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cheboxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
  androidSafearea: {
    flex: 1,
    width: width,
    height: height,
    paddingTop: Platform.OS === "android" ? 58 : null,
    backgroundColor: "#4a148c",
  },
});
export default Rating;
