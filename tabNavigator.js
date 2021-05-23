import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, StackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="categories" component={MainStackNavigator} />
      <Tab.Screen name="products" component={StackNavigator} />
      <Tab.Screen name="orders" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;