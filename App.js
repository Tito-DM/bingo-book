import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/home";
import CharacterDetails from "./src/screens/characterDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChacterGallery from "./src/screens/characterGallery";
import Rating from "./src/screens/rating";
import Classification from "./src/screens/classification";

const stack = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Rating") {
            iconName = "star";
          } else if (route.name === "Classification") {
            iconName = "trophy";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={35} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rating" component={Rating} />
      <Tab.Screen name="Classification" component={Classification} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" headerMode="none"  >
        <stack.Screen name="Home" component={TabNavigation} />
        <stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={() => ({
            gestureEnabled: false,
            transitionSpec:{
              open:{animation: "timing",config: 1000},
              close:{animation: "timing",config: 1000}
            },
            cardStyleInterpolator: ({current: {progress}})=>{
              return {
                cardStyle:{
                  opacity: progress ,
                }
              }
            }
          })}
        />
            <stack.Screen name="Gallery" component={ChacterGallery}  />
      </stack.Navigator>
    </NavigationContainer>
  );
}
