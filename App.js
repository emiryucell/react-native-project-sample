import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect}  from 'react';
import { Button, StyleSheet, Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem ,Icon } from "react-native-elements";

const Tab = createBottomTabNavigator(

);


function OrderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order!</Text>
    </View>
  );
}

function CategoryScreen({ navigation }) {

  const [categories,setCategories]=useState([]);

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      

    </View>
  );
}
function ProductScreen({ navigation }) {


const [products,setProducts]=useState([]);

useEffect(() => {

  fillData();
 
}, [])


const fillData=()=>{
  //HTTP GET
  fetch('https://northwind.vercel.app/api/products/')
 .then((res)=>res.json())
 .then((data)=> {

  
 setProducts(data);
         
 })
}


const deleteProduct=(id)=>{
  //HTTP DELETE
          let requestoptions={
      method:'DELETE',
      body:JSON.stringify({id:id})
      }
      fetch('https://northwind.vercel.app/api/products/'+id,requestoptions)
      .then((res)=>res.json())
      .then((data)=>{
          
          fillData();
      })
      }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>

      <ScrollView >
          {
                    products.map((item)=> (

                        <ListItem style={{flex:6}}>
                            <ListItem.Content style={styles.products} >
                                <ListItem.Title style={{color:"white"}}>{item.name}</ListItem.Title>
                                <ListItem.Subtitle style={{color:"white"}}>Quantity Per Unit: {item.quantityPerUnit}</ListItem.Subtitle>
                                <ListItem.Subtitle style={{color:"white"}}>Unit Price: {item.unitPrice}$</ListItem.Subtitle> 
                             </ListItem.Content>
                             <ListItem.Content style={{flex:1}} >
                             <Icon name="delete"  onPress={()=>deleteProduct(item.id)}/>
                             </ListItem.Content>
                        </ListItem>
            
                    ))
                }
                </ScrollView>
    </View>
  );
}

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Order') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
            } else if (route.name === 'Category') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Product') {
              iconName = focused ? 'albums' : 'albums-outline';
            }

    
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  products:{
flex:5,
padding:5,
borderRadius:10,
    backgroundColor:"blue"
  },
});