
import React from 'react';
import {NavigationContainer } from "@react-navigation/native"
import {createStackNavigator } from "@react-navigation/stack"
import Home from "./src/screens/home"
import CharacterDetails from './src/screens/characterDetails';


const stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer >
     <stack.Navigator initialRouteName= "Home">
       <stack.Screen name = "Home" component={Home}  />
       <stack.Screen name = "CharacterDetails" component={CharacterDetails}  />
     </stack.Navigator>
   </NavigationContainer>
  );
}

