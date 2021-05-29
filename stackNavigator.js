import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./src/components/screens/products"
import Categories from "./src/components/screens/categories"
import Orders from "./src/components/screens/orders"
import addCategories from './src/components/screens/addCategories';
import updateCategories from "./src/components/screens/updateCategories";
import ProductDetail from "./src/components/screens/productDetail";

const Stack = createStackNavigator();

const navigationOptions = {
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: { backgroundColor: "#9AC4F8" },
  headerTintColor: "white",
  headerBackTitle: "Back",
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Add Categories" component={addCategories} />
      <Stack.Screen name="Update Categories" component={updateCategories} />
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const OrderStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator, StackNavigator, OrderStackNavigator };