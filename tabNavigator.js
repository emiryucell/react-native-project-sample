import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, StackNavigator, OrderStackNavigator } from "./StackNavigator";
import Order from "./src/components/screens/orders";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="categories" component={MainStackNavigator} />
      <Tab.Screen name="products" component={StackNavigator} />
      <Tab.Screen name="orders" component={OrderStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;