import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Platform,
  TextInput,
  Animated,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import dataBook from "../../db/data";
import { Ionicons, Octicons, AntDesign } from "react-native-vector-icons";
import Star from "../components/star";
import TextInputComponent from "../components/textInput";
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.3;
const TEXT_INPUT_COLOR = "#bdbdbd";
const TEXT_INPUT_LEFT_PO = 10;
const TEXT_INPUT_TOP_PO = 10;
const TEXT_INPUT_WIDTH = "97%";
const TEXT_INPUT_PADDING = 10;
const TEXT_INPUT_MARGIN = 10;
const TEXT_INPUT_PLACEHOLDER = "Search";
const TEXT_INPUT_AUTOFOCUS = false;
const TEXT_INPUT_ICON = "search1";
const Home = ({ navigation }) => {
  let stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(3);
  return (
    <SafeAreaView style={styles.androidSafearea}>
      <View
        style={{
          alignItems: "flex-start",
          marginLeft: 10,
          marginTop: 25,
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
          value_ = {""}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            marginTop: 10,
            letterSpacing: 1.2,
            opacity: 0.8,
            marginLeft: 5,
            color: "#880e4f",
            textTransform: "capitalize",

          }}
        >
          Bingo Book
        </Text>
      </View>

      <FlatList
        data={dataBook}
        contentContainerStyle={{ paddingHorizontal: 5, marginTop: 5 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginTop: 40,
                height: ITEM_HEIGHT,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, padding: 25 }}>
                <SharedElement
                  id={`item.${item.id}.bg`}
                  style={[StyleSheet.absoluteFillObject]}
                >
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        backgroundColor: item.color ? item.color : "#f9a825",
                        borderRadius: 16,
                        padding: 10,
                      },
                    ]}
                  />
                </SharedElement>

                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.Village}>{item.description} </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  {stars.map((i) => {
                    return (
                      <TouchableWithoutFeedback key={i}>
                        <Animated.View>
                          <Star filled={i <= rating ? true : false} />
                        </Animated.View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CharacterDetails", { item })
                    }
                    style={{
                      position: "absolute",
                      backgroundColor: "#212121",
                      borderRadius: 18,
                      width: 100,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: -65,
                      shadowColor: "#263238",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      more info...
                    </Text>
                  </TouchableOpacity>
                </View>
                <SharedElement
                  id={`item.${item.id}.image`}
                  style={styles.image}
                >
                  <Image rounded source={item.img} style={styles.image} />
                </SharedElement>
              </View>
            </View>
          );
        }}
      />
      <SharedElement id="general.bg">
        <View style={styles.bg} />
      </SharedElement>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    textTransform: "capitalize",
  },
  Village: {
    color: "white",
    fontSize: 14,
    opacity: 0.6,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
    backgroundColor: "white",
  },

  image: {
    width: width / 2 - 25,
    height: height > 812 ? height / 2 - 138: height / 2 - 98 ,
    position: "absolute",
    bottom: 0,
    right: 5,
    resizeMode: "contain",
  },
  bg: {
    position: "absolute",
    width,
    height,
    backgroundColor: "white",
    transform: [{ translateY: height }],
    borderRadius: 32,
  },
});

export default Home;
