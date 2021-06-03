import React, { useState, useEffect } from 'react'
import { View, Button,StyleSheet,TouchableOpacity,Text } from 'react-native'
import { Input } from 'react-native-elements';
import manager from '../../../service/baseservice';


function UpdateCategories ({route, navigation }) {

    const { itemName , itemDescription, itemId} = route.params;

    const [categoryName, setCategoryName] = useState();
    const [descriptionName, setDescriptionName] = useState();

    const [categories,setCategories]=useState([]);
    
    const navigate = () => {
        navigation.push("Categories")
    }

    
    useEffect(() => {

        fillData();
       setCategoryName(itemName);
       setDescriptionName(itemDescription);

      }, [])


    const fillData=()=>{
    
        manager.get("api/categories")
        .then((data)=>{
          setCategories(data);
          
              
       })
      }

      
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: categoryName ,description: descriptionName}
                              )
      };
      

      fetch('https://northwind.vercel.app/api/categories/'+itemId, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
          

          

        return (
            <View style={styles.container}>
        <View style={styles.dummy}></View>
        <View style={styles.inputs}> <Input
                    placeholder='Category name'
                    placeholderTextColor="white"
                    inputContainerStyle={{borderColor:"white"}}
                    inputStyle={{'color': 'white'}}
                    onChangeText={value => setCategoryName(value)}
                    defaultValue={JSON.stringify(itemName)}

                /></View> 
        
        <View style={styles.inputs}> <Input
                    placeholder='Description'
                    placeholderTextColor="white"
                    inputContainerStyle={{borderColor:"white"}}
                    inputStyle={{'color': 'white'}}
                    onChangeText={value => setDescriptionName(value)}
                    defaultValue={JSON.stringify(itemDescription)}
                    
                />  </View> 
         <TouchableOpacity  onPress={() => requestOptions, navigate} style={styles.updateCategoryButton} >
            <Text style={styles.updateCategoryText}>UPDATE</Text>
            </TouchableOpacity>
            
           
                <View style={styles.dummy}></View>
            </View>
        )

}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection:"column",
      backgroundColor: '#6fa3f7',
      alignItems: 'center',
      justifyContent:"space-evenly",
    },
    dummy:{flex:5},

    inputs:{
        flex: 1,
        backgroundColor:"#6fa3f7",
        borderColor:"#367ff5",
        borderRadius:5,
        borderWidth:5,
        margin:5,
        
    }
    ,
    updateCategoryButton:{
        textAlign:"center",
        flex:1,
        
        backgroundColor:"#6fa3f7",
        borderRadius:10,
        borderColor:"#367ff5",
        borderWidth:5
      
    },
    updateCategoryText:{
        color:"white",
        alignItems:"center",
        padding:10, 
      }
   
  });

export default UpdateCategories;