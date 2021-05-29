import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View,TouchableOpacity,Text } from 'react-native';
import { Icon, ListItem } from "react-native-elements";
import manager from '../../../service/baseservice';

function Products({ navigation }) {


  const [products,setProducts]=useState([]);
  
 

  
  useEffect(() => {
  
    fillData();
   
  }, [])

  
  
  const fillData=()=>{
    manager.get("api/products/")
    .then((data)=>{
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
                    <ListItem.Content style={{flex:1,justifyContent: 'center', alignItems: 'center'}} >
                      <ListItem.Content style={{flex:1}} >
                      <TouchableOpacity  onPress={() =>navigation.navigate("Product Detail",{id:item.id})} style={styles.detailButton}>
        <Text style={{color:"white"}}>Detail</Text>
      </TouchableOpacity>
                 
                      </ListItem.Content>
                      <ListItem.Content style={{flex:1}} >
                      <Icon name="delete"  onPress={()=>deleteProduct(item.id)}/>
                      </ListItem.Content>
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
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    products:{
  flex:5,
  padding:5,
  borderRadius:10,
      backgroundColor:"#367ff5"
    },
    detailButton:{
      textAlign:"center",
      flex:1,
      padding:5,
      backgroundColor:"#6fa3f7",
      borderRadius:10,
      borderColor:"#367ff5",
      borderWidth:5,
      
      
    }
  });


export default Products;