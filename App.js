import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import BottomTabNavigator from "./TabNavigator";


export default function App() {
  return (
  

    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  
  );

}