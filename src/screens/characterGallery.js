import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const ChacterGallery = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
       
      >
        {/*  <MaterialCommunityIcons
        name="close"
        size={28}
        color="red"
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}
    />*/}
        <SharedElement
          id="general.bg"
          style={{
            position: "absolute",
          }}
        >
          <View style={styles.bg}>
            <Animatable.View animation="bounceInUp" delay={600}>
              <View style={styles.container}>
                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img1.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img2.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/sasuke.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img3.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img4.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img5.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img6.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Image
                      source={require("../../assets/img/img7.jpg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>
              </View>
            </Animatable.View>
          </View>
        </SharedElement>
      </ScrollView>
    </View>
  );
};
ChacterGallery.sharedElements = () => {
  return [{ id: "general.bg" }];
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },

  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    width,
    height,
    backgroundColor: "white",
  },
});
export default ChacterGallery;
