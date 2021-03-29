import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { Avatar,Divider } from "react-native-elements";
import TextInputComponent from "../components/textInput";

const TEXT_INPUT_COLOR = "#bdbdbd";
const TEXT_INPUT_LEFT_PO = 18;
const TEXT_INPUT_TOP_PO = 70;
const TEXT_INPUT_WIDTH = "97%";
const TEXT_INPUT_PADDING = 10;
const TEXT_INPUT_MARGIN = 10;
const TEXT_INPUT_PLACEHOLDER = "Search";
const TEXT_INPUT_AUTOFOCUS = false;
const TEXT_INPUT_ICON = "search1";
const Classification = () => {
  return (
    <View style={styles.container}>
          <TextInputComponent
          color_={TEXT_INPUT_COLOR}
          left_={TEXT_INPUT_LEFT_PO}
          top_={TEXT_INPUT_TOP_PO}
          width_={TEXT_INPUT_WIDTH}
          padding_={TEXT_INPUT_PADDING}
          margin_={TEXT_INPUT_MARGIN}
          placeHolder_={TEXT_INPUT_PLACEHOLDER}
          autoFocus_={TEXT_INPUT_AUTOFOCUS}
          icon_={TEXT_INPUT_ICON}
          value_ = {""}
        />
      <SectionList
        sections={[
          {
            title: "Best Genjutsu User",
            data: ["Shisui 🏆", "Iatchi", "Madara", "Obito", "Kurenai"],
          },
          {
            title: "Best Taijutsun User",
            data: ["Might Gai 🏆", "Rock Lee", "Neji", "Kakashi", "Darui"],

          },
          {
            title: "Worse Jutsu",
            data: [
              "CARTEL 🏆",
              "CASTLE OF EVIL",
              "CHANCE",
              "COP GAME",
              "CROSS FIRE",
            ],
          },
        ]}
        renderItem={({ item }) => {
          return (
              <>
            <View
              style={{
                flexDirection: "row",
                alignItems:"center",
                marginLeft: 25,
                marginBottom: 5,
                marginTop: 10,
              }}
            >
               
              <Avatar
                rounded
                size="medium"
                source={{
                  uri: "https://images4.alphacoders.com/944/944476.png",
                }}
              />
               
               <View>
               <Text style={styles.item}>{item}</Text>
               <Text style={{fontSize:12, color:"white",opacity:0.4, marginLeft:10}}>voting: 100%</Text>
               </View>
           
            </View>
             <Divider style={{ backgroundColor: "white" ,marginLeft:68}} />
             </>
          );
        }}
        renderSectionHeader={({ section }) => (
            <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.sectionHeader}>{section.title}</Text>
          <Text style={{fontSize:12, color:"white",opacity:0.4,paddingTop:10}}>48h</Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a148c",
    paddingTop: 60,
    paddingLeft:10
  },
  sectionHeader: {
    paddingTop: 5,
    paddingRight: 3,
    paddingBottom: 5,
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing:1.2,
    marginBottom:10,
    marginTop: 15
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "#fff",
  
  },
});
export default Classification;
