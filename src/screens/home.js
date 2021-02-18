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
import { SharedElement } from "react-native-shared-element";
import dataBook from "../../db/data";
import Ionicons from "react-native-vector-icons/Ionicons";

import Star from "../components/star";
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.3;

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
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            borderBottomWidth: 1,
            width: width - 80,
            marginRight: 10,
            borderBottomColor: "#00796b",
          }}
          placeholder="enter a name"
        />
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={30}
            style={{ marginTop: -10 }}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginTop: 30,
            letterSpacing: 1.2,
            opacity: 0.8,
            marginLeft: 5,
            color: "#880e4f",
          }}
        >
          Bing Book
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
                  id={`item.${item.key}.bg`}
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
                  >
                    <SharedElement id={`item.${item.key}.name`}>
                      <Text style={styles.name}>{item.name}</Text>
                    </SharedElement>
                    <Text style={styles.Village}>{item.description} </Text>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
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
                          bottom: -60,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 1,
                          }}
                        >
                          more info...
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <SharedElement
                      id={`item.${item.key}.image`}
                      style={styles.image}
                    >
                      <Image rounded source={item.img} style={styles.image} />
                    </SharedElement>
                  </View>
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
    letterSpacing: 1.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    textTransform: "uppercase",
  },
  Village: {
    color: "white",
    fontSize: 18,
    opacity: 0.6,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
    backgroundColor: "white",
  },

  image: {
    width: width / 2 - 25,
    height: height / 2 - 114,
    position: "absolute",
    bottom: 0,
    right: 5,
    resizeMode: "contain",
  },
  bg: {
    position: "absolute",
    width,
    height,
    backgroundColor: "red",
    transform: [{ translateY: height }],
    borderRadius: 32,
  },
});

export default Home;
