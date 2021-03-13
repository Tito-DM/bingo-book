import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Avatar, Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");
const Rating = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.androidSafearea}>
      <TextInput placeholder="Category Title" style={styles.textinput} />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.cheboxView}>
          <Text>Character Rating</Text>
          <CheckBox />
        </View>

        <View style={styles.cheboxView}>
          <Text>Other</Text>
          <CheckBox />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={styles.textinput} />
        <TouchableOpacity style={styles.btn_add}>
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
      {/** character edit and delete view */}
      <View></View>
      {/** best to worse checkbox */}

      <View style={{ flexDirection: "row" }}>
        <View style={styles.cheboxView}>
          <Text>Best</Text>
          <CheckBox />
        </View>

        <View style={styles.cheboxView}>
          <Text>Worse</Text>
          <CheckBox />
        </View>
      </View>
      <TouchableOpacity style={styles.btn_done}>
        <Text style={styles.text}>Done</Text>
      </TouchableOpacity>
 <View style={{marginBottom: 60}}></View>
      {/** card*/}

      <View style={styles.card}>
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
              uri:
              'https://images4.alphacoders.com/944/944476.png',
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
              uri:
                "https://images3.alphacoders.com/644/644161.jpg",
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
              uri:"https://images8.alphacoders.com/605/605504.png",
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
            marginBottom:10
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



      <View style={styles.card}>
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
            marginBottom:10
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
    titleCategory:{
        margin: 10,
        letterSpacing: 1.2,
        fontWeight: "600",
        fontSize: 18
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
    marginTop: 10,
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
  btn_done: {
    backgroundColor: "#2e7d32",
    width: 80,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 200,
    marginRight: 20,
   
  },
  btn_add: {
    backgroundColor: "#2e7d32",
    width: 30,
    height: 30,
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
    width: width - 100,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white",
  },
  androidSafearea: {
    flex: 1,
    width: width,
    height: height,
    padding:10,
    paddingTop: Platform.OS === "android" ? 58 : null,
    backgroundColor: "#F9F9F9"
  },
});
export default Rating;
