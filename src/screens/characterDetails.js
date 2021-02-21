import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { Divider } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DURATION = 500;
const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.2;
const TOP_HEADER_HEIGHT = height * 0.3;
const DiVIDERCOLOR = "grey";
const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);
const CharacterDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, padding: 25 }}>
      <SharedElement
        id={`item.${item.id}.bg`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: item.color ? item.color : "#f9a8",
              height: TOP_HEADER_HEIGHT + 100,
            },
          ]}
        />
      </SharedElement>

      <MaterialCommunityIcons
        name="close"
        size={28}
        color="#fff"
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text style={styles.name}>{item.name}</Text>

      <SharedElement id={`item.${item.id}.image`}>
        <Image
          rounded
          source={item.img}
          style={{
            width: width,
            height:
              Image.resolveAssetSource(item.img).height === 1516
                ? height - 310
                : height - 50,
            position: "absolute",
            top:
              Image.resolveAssetSource(item.img).height >= 1023
                ? TOP_HEADER_HEIGHT - ITEM_HEIGHT * 2
                : TOP_HEADER_HEIGHT - ITEM_HEIGHT * 2.5,
            right: -100,
            resizeMode: "contain",
          }}
        />
      </SharedElement>

      <SharedElement
        id="general.bg"
        style={{
          position: "absolute",
        }}
      >
        <View style={styles.bg}>
          <Animatable.View
            animation="bounceIn"
            delay={DURATION}
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View
              style={{
                backgroundColor: "#81c784",
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
                backgroundColor: "#00b0ff",
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
                backgroundColor: "#98AFC7",
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
            animation="bounceIn"
            delay={DURATION}
            style={{
              padding: 10,
              marginTop: 10,
            }}
          >
            {/**Vallage */}
            <ScrollView>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textDetails}>Village:</Text>

                <Image
                  source={item.Village_Icon}
                  style={{ width: 26, height: 26 }}
                  resizeMode="contain"
                />
                <Text style={styles.text}>{item.Village} </Text>
              </View>
              <Divider style={{ backgroundColor: DiVIDERCOLOR }} />

              {/**Clan */}

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textDetails}>Clan:</Text>
                <Image
                  source={item.clan_Icon}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
                <Text style={styles.text}> {item.clan} </Text>
              </View>

              <Divider style={{ backgroundColor: DiVIDERCOLOR }} />

              {/**Afiliation */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textDetails}>Afiliation:</Text>
                <Image
                  source={item.Afiliation_Icon}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
                <Text style={styles.text}>{item.Afiliation}</Text>
              </View>

              <Divider style={{ backgroundColor: DiVIDERCOLOR }} />

              {/**GenderText */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textDetails}>Sexo:</Text>
                <Text style={styles.text}>{item.Gender}</Text>
              </View>

              <Divider style={{ backgroundColor: DiVIDERCOLOR }} />
              {/**Classification */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textDetails}>Classification:</Text>
                <Image
                  source={item.Ninja_Level_Icon}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
                <Text style={styles.text}>{item.Ninja_Level}</Text>
              </View>

              <Divider style={{ backgroundColor: DiVIDERCOLOR }} />

              <View style={{ marginRight: 10 }}>
                <Text style={styles.textDetails}>
                  {item.Kekkei_Genkais ? "Kekkei Genkai:" : null}
                </Text>

                {item.Kekkei_Genkais
                  ? item.Kekkei_Genkais.map((Kekkei_Genkai) => (
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 30,
                          alignItems: "center",
                          padding: 5,
                        }}
                        key={Kekkei_Genkai.id}
                      >
                        <Image
                          source={Kekkei_Genkai.icon}
                          style={{ width: 25, height: 25, marginRight: 10 }}
                        />
                        <Text>{Kekkei_Genkai.name}</Text>
                      </View>
                    ))
                  : null}
              </View>
              {item.Kekkei_Genkais ? (
                <Divider
                  style={{ backgroundColor: DiVIDERCOLOR, marginTop: 5 }}
                />
              ) : null}

              <View style={{ marginRight: 10 }}>
                <Text style={styles.textDetails}>Nature Transformation:</Text>

                {item.nature_Transformations
                  ? item.nature_Transformations.map((nature) => (
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 30,
                          padding: 5,
                          alignItems: "center",
                        }}
                        key={nature.id}
                      >
                        <Image
                          source={nature.icon}
                          style={{ width: 25, height: 25, marginRight: 10 }}
                        />
                        <Text>{nature.name}</Text>
                      </View>
                    ))
                  : null}
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      </SharedElement>

      <AnimatableTouchableOpacity
       onPress={() => navigation.navigate("Gallery", { item })}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 10,
          width: 60,
          height: 60,
          margin: 10,
          backgroundColor: "#d32f2f",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
       
          <MaterialCommunityIcons
            name="image-multiple-outline"
            size={25}
            color="#fff"
           
          />
      </AnimatableTouchableOpacity>
    </View>
  );
};

CharacterDetails.sharedElements = (route, otherNavigation, showing) => {
  const { item } = route.params;
  return [
    { id: "general.bg" },
    { id: `item.${item.id}.bg` },
    { id: `item.${item.id}.image` },
  ];
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    padding: 10,
    letterSpacing: 1.5,
  },
  textDetails: {
    fontSize: 17,
    fontWeight: "400",
    padding: 10,
    letterSpacing: 3,
  },
  name: {
    fontSize: 38,
    color: "white",
    letterSpacing: 1.2,
    position: "absolute",
    top: TOP_HEADER_HEIGHT - 25 * 3,
    left: 10,
    zIndex: 10,
    textTransform: "capitalize",
  },
  Village: {
    fontSize: 14,
    opacity: 0.7,
  },
  androidSafearea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : null,
  },
  bg: {
    position: "absolute",
    width,
    height,
    padding: 10,
    paddingTop: 32,
    backgroundColor: "white",
    transform: [{ translateY: TOP_HEADER_HEIGHT + 20 }],
    borderRadius: 15,
  },
  scrollView: {
    height: "20%",
    width: "80%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "lightblue",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingBottom: 50,
  },
});

export default CharacterDetails;
