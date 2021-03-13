import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar, Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
const Card = ({cardMarginTop}) => {

  return (
    <View style={ { marginTop: cardMarginTop }}>
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
            <Text>Total Voting</Text>
            <Text> 120</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart-outline" size={20} color="grey" />
            <Text> 35</Text>
          </View>

          <TouchableOpacity>
            <Text>comments</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>add Character</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.card, { marginTop: 10 }]}>
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
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
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
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
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
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
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
            <Text>Total Voting</Text>
            <Text> 120</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart-outline" size={20} color="grey" />
            <Text> 35</Text>
          </View>

          <TouchableOpacity>
            <Text>comments</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>add Character</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  },
});

export default Card;
