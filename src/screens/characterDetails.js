import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";

const DURATION = 400;
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.2;
const TOP_HEADER_HEIGHT = height * 0.3;

const CharacterDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, padding: 25 }}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: item.color ? item.color : "#f9a825",
            borderRadius: 0,
            padding: 10,
            height: TOP_HEADER_HEIGHT + 32,
          },
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>

        <Image rounded source={item.img} style={styles.image} />
      </View>
      <View style={styles.bg}>
        <ScrollView>
          <Animatable.View
            animation="bounceIn"
            delay={0.2}
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View
              style={{
                backgroundColor: "#03a9f4",
                borderRadius: 26,
                height: 42,
                width: 42,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.Village_Icon}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: "#795548",
                borderRadius: 26,
                height: 42,
                width: 42,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.clan_Icon}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: "#ffb74d",
                borderRadius: 26,
                height: 42,
                width: 42,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.Afiliation_Icon}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
          </Animatable.View>

          <Animatable.View
          animation = "fadeInUp"
          delay={DURATION}
            style={{
              padding: 8,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginRight: 16 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Village}>Village: {item.Village} </Text>
                <Image
                  source={item.Village_Icon}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Village}>Clan: {item.clan} </Text>
                <Image
                  source={item.clan_Icon}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Village}>
                  Afiliation: {item.Afiliation}{" "}
                </Text>
                <Image
                  source={item.Afiliation_Icon}
                  style={{ width: 30, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.Village}>Clan: {item.Gender} </Text>
              <Text style={styles.Village}>
                Classification: {item.Ninja_Level}{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Village}>Clan: {item.clan} </Text>
                <Image
                  source={item.clan_Icon}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
            </View>
            {/**  Right Side */}
            <View>
              <View style={{ marginRight: 10 }}>
                <Text style={styles.Village}>Kekkei Genkai: </Text>
                {item.Kekkei_Genkais.map((Kekkei_Genkai) => (
                  <View
                    style={{ flexDirection: "row", marginRight: 10 }}
                    key={Kekkei_Genkai.id}
                  >
                    <Image
                      source={Kekkei_Genkai.icon}
                      style={{ width: 15, height: 15, marginRight: 10 }}
                    />
                    <Text style={styles.Village}>{Kekkei_Genkai.name}</Text>
                  </View>
                ))}
              </View>

              <View style={{ marginRight: 10 }}>
                <Text style={styles.Village}>Nature Transformation: </Text>
                {item.nature_Transformations.map((nature) => (
                  <View
                    style={{ flexDirection: "row", marginRight: 10 }}
                    key={nature.id}
                  >
                    <Image
                      source={nature.icon}
                      style={{ width: 15, height: 15, marginRight: 10 }}
                    />
                    <Text style={styles.Village}>{nature.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 38,
    color: "white",
    letterSpacing: 1.2,
    position: "absolute",
    top: TOP_HEADER_HEIGHT - 25 * 3,
    left: 10,
  },
  Village: {
    fontSize: 14,
    opacity: 0.7,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
  },

  image: {
    width: width,
    height: height,
    position: "absolute",
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 1.8,
    right: -100,
    resizeMode: "contain",
  },
  bg: {
    position: "absolute",
    width,
    height,
    padding: 10,
    paddingTop: 32,
    backgroundColor: "white",
    transform: [{ translateY: TOP_HEADER_HEIGHT }],
    borderRadius: 32,
  },
});

export default CharacterDetails;
