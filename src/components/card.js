import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Avatar, Divider } from "react-native-elements";
import { Ionicons, Octicons, AntDesign } from "react-native-vector-icons";
const { width, height } = Dimensions.get("window");
const Card = () => {
  return (
    <View>
      <View style={[styles.card]}>
        <Text style={styles.titleCategory}>Best GenJutsu User</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          <Avatar
            rounded
            size="large"
            source={{
              uri: "https://images4.alphacoders.com/944/944476.png",
            }}
          />
          <Text>Shisui</Text>
          <Text>80%</Text>
          <TouchableOpacity style={styles.btn_vote}>
            <Text style={styles.text}>Vote</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          <Avatar
            rounded
            size="large"
            source={{
              uri: "https://images3.alphacoders.com/644/644161.jpg",
            }}
          />
          <Text>Itachi</Text>
          <Text>50%</Text>
          <TouchableOpacity style={styles.btn_vote}>
            <Text style={styles.text}>Vote</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          <Avatar
            rounded
            size="large"
            source={{
              uri: "https://images8.alphacoders.com/605/605504.png",
            }}
          />
          <Text>Sasuke</Text>
          <Text>20%</Text>
          <TouchableOpacity style={styles.btn_vote}>
            <Text style={styles.text}>Vote</Text>
          </TouchableOpacity>
        </View>

        <Divider style={{ backgroundColor: "grey" }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 12, opacity: 0.8 }}>
              Total Voting
            </Text>
            <Text style={{ color: "grey", fontSize: 12, opacity: 0.8 }}>
              {" "}
              120
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="like1" size={20} color="#e53935" />
            <Text style={{ color: "black", fontSize: 12, opacity: 0.9 }}>
              {" "}
              35
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={{ color: "#039be5", fontSize: 12, opacity: 0.8 }}>
              {" "}
              Comments
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ color: "#039be5", fontSize: 12, opacity: 0.8 }}>
              Add Character
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCategory: {
    marginLeft: 25,
    marginTop: 10,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "#0d47a1",
    opacity: 0.9,
    textTransform: "uppercase",
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
    shadowColor: "#263238",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderTopLeftRadius: 50,
    width: width,
    marginBottom: 15,
    borderBottomLeftRadius: 30,
  },
  text: {
    color: "white",
  },
});

export default Card;
