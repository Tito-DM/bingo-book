import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import dataBook from "../../db/data";
import { Avatar } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.3;
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.androidSafearea}>
      <View style={{ alignItems: "flex-start", marginLeft: 10, marginTop: 25 }}>
        <TextInput
          style={{ borderBottomWidth: 1, width: width - 100 }}
          placeholder="enter a name"
        />
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
            <TouchableOpacity
              onPress={() => navigation.navigate("CharacterDetails", { item })}
              style={{
                marginTop: 40,
                height: ITEM_HEIGHT,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, padding: 25 }}>
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
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <View style={{ flexDirection: "row", padding: 10 }}>
                    <Text style={styles.Village}>Village: {item.Village} </Text>
                    <Image
                      source={item.Village_Icon}
                      style={{ width: 15, height: 15 }}
                    />
                  </View>

                  <Image rounded source={item.img} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
   
      {/**    <View style={styles.bg} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "700",
    fontSize: 18,
    color: "white",
    letterSpacing: 1.2,
  },
  Village: {
    color: "white",
    fontSize: 11,
    opacity: 0.7,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
    backgroundColor: "white",
  },

  image: {
    width: 150,
    height: 240,
    position: "absolute",
    bottom: 0,
    right: -20,
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
