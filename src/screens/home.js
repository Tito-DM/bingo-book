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
} from "react-native";
import dataBook from "../../db/data";
import { Avatar } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.2;
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.androidSafearea}>
      <FlatList
        data={dataBook}
        contentContainerStyle={{ padding: 15 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("CharacterDetails", { item })}
              style={{ marginBottom: 10, height: ITEM_HEIGHT }}
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
                  <View style={styles.image}>
                    <Avatar rounded source={item.img} size={115} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.bg} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 1.2,
  },
  Village: {
    fontSize: 11,
    opacity: 0.7,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
  },

  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    position: "absolute",
    bottom: 20,
    right: 25,
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
