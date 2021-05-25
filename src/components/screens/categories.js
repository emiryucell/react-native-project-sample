import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, ListItem } from "react-native-elements";
import { PhoneHeight, PhoneWidth } from "../../../environment/config";
import manager from '../../../service/baseservice';

function Categories({ navigation }) {

  
  const [categories,setCategories]=useState([]);

  useEffect(() => {

    fillData();
   
  }, [])

  const fillData=()=>{
    
    manager.get("api/categories")
    .then((data)=>{
      setCategories(data);
          
   })
  }

      //DELETE METHOD
  const deleteCategories=(id)=>{
            let requestoptions={
        method:'DELETE',
        body:JSON.stringify({id:id})
        }
        fetch('https://northwind.vercel.app/api/categories/'+id,requestoptions)
        .then((res)=>res.json())
        .then((data)=>{
            
            fillData();
        })
        }
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>

      

      <ScrollView >
      <TouchableOpacity style={{flex:6} } onPress={() => navigation.navigate('Add Categories')} style={styles.addCategoryButton}>
        <Text style={styles.addCategoryText}>Add Category</Text>
      </TouchableOpacity>
          {
            categories.map((item)=> (

              <ListItem style={{flex:6}}>
               
                <ListItem.Content style={styles.categories} >
                  <TouchableOpacity onPress={() => navigation.navigate('Update Categories',{
                    itemName: item.name,
                    itemDescription: item.description,
                    itemId: item.id,
                  }) } >
                    <ListItem.Title style={{color:"white"}}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{color:"white"}}>Description: {item.description}</ListItem.Subtitle>
                  </TouchableOpacity>  
                </ListItem.Content>  

                <ListItem.Content style={{flex:1}} >
                  <Icon name="delete" onPress={()=>deleteCategories(item.id)}/>
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
  categories:{
    flex:5,
    padding:5,
    marginLeft:20,
    borderRadius:10,
    backgroundColor:"red"
  },
  addCategoryButton:{
    textAlign:"center",
    flex:5,
    marginLeft:35,
   marginRight:80,
    marginTop:10,
    backgroundColor:"red",
    borderRadius:10,
    
  },
  addCategoryText:{
    color:"white",
    alignItems:"center",
    padding:10, 
  }
});

export default Categories;