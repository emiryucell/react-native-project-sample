import React from 'react';
import {SafeAreaView} from 'react-native';
import RouterComp from './src/components/screens/router';

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./TabNavigator";


export default function App() {
  return (
    // <>
    //   <SafeAreaView style={{flex: 1}}>
    //   <RouterComp />
    // </SafeAreaView>
    // </>

    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  
  );

}