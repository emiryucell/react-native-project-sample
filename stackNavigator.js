import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./src/components/screens/products"
import Categories from "./src/components/screens/categories"
import Orders from "./src/components/screens/orders"
import addCategories from './src/components/screens/addCategories';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="addCategories" component={addCategories} />
      
      
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="orders" component={Orders} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, StackNavigator };