import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, StackNavigator, OrderStackNavigator } from "./stackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator

      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
         
          if (route.name === 'Orders') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'albums' : 'albums-outline';
          }


          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
        activeTintColor: '#367ff5',
        inactiveTintColor: 'gray',
      }}
      >
      <Tab.Screen name="Products" component={StackNavigator} />
      <Tab.Screen name="Categories" component={MainStackNavigator} />
      <Tab.Screen name="Orders" component={OrderStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;