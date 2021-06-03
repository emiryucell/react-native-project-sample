import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import BottomTabNavigator from "../react-native-project-sample/src/components/navigators/tabNavigator";


export default function App() {
  return (
  

    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  
  );

}