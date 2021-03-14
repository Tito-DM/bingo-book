import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar } from "react-native-elements";

const CharacterVotingRow = ({name,percent, avatar}) => {
  return (
    <>
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
            uri: avatar,
          }}
        />
        <Text>{name}</Text>
        <Text>{percent}</Text>
        <TouchableOpacity style={styles.btn_vote}>
          <Text style={styles.text}>Vote</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({

    btn_vote: {
      backgroundColor: "#2e7d32",
      width: 60,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius:5
    },

    text: {
      color: "white",
      letterSpacing:1.2
    },
  });
export default CharacterVotingRow;
