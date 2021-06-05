import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "../screens/products/products"
import Categories from "../screens/categories/categories"
import Orders from "../screens/orders/orders"
import addCategories from '../screens/categories/addCategories';
import updateCategories from "../screens/categories/updateCategories";
import ProductDetail from "../screens/products/productDetail";

import navigationOptions from "../header/header"

const Stack = createStackNavigator();


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