import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect}  from 'react';
import { Button, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem ,Icon } from "react-native-elements";

function Products({ navigation }) {


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
    categories:{
      flex:5,
      padding:5,
      marginLeft:20,
      borderRadius:10,
      backgroundColor:"red"
    },
    addCategoryButton:{
      height:70,
      width:258,
      marginTop:10,
      backgroundColor:"red",
      borderRadius:10,
      marginRight:43,
    },
    addCategoryText:{
      color:"white",
      alignItems:"center",
      padding:10, 
    }
  });


export default Products;