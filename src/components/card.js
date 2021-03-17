import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Divider } from "react-native-elements";
import { AntDesign } from "react-native-vector-icons";
import CharacterVotingRow from "../components/characterVotingRow";
const { width, height } = Dimensions.get("window");
const Card = ({ navigation }) => {
  return (
    <View>
      <View style={[styles.card]}>
        <Text style={styles.titleCategory}>Best GenJutsu User</Text>
        <CharacterVotingRow
          name={"Shisui"}
          percent={"80%"}
          avatar={"https://images4.alphacoders.com/944/944476.png"}
        />
        <CharacterVotingRow
          name={"Itachi"}
          percent={"50%"}
          avatar={"https://images7.alphacoders.com/113/1133297.png"}
        />
        <CharacterVotingRow
          name={"Sasuke"}
          percent={"20%"}
          avatar={"https://images8.alphacoders.com/605/605504.png"}
        />

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
              {" 120"}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={{marginRight: 3}}>
              <AntDesign name="like1" size={20} color="#e53935" />
            </TouchableOpacity>

            <Text style={{ color: "black", fontSize: 12, opacity: 0.9 }}>
              {"35"}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Comments")} style={{height: 21}}>
            <Text style={{ color: "#039be5", fontSize: 12, opacity: 0.8 }}>
              {"Comments"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  style={{height: 21}}>
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
    marginLeft: 28,
    marginTop: 10,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "#0d47a1",
    opacity: 0.9,
    textTransform: "uppercase",
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
    borderBottomLeftRadius: 40,
  },
  text: {
    color: "white",
    letterSpacing: 1.2,
  },
});

export default Card;
