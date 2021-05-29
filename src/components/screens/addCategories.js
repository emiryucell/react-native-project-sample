import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View,Text } from 'react-native';
import { Input } from 'react-native-elements';
import manager from '../../../service/baseservice';

const Fetchpostsample = () => {

const [categoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');

const send = () => {

    manager.post('api/categories',{name:categoryName, description:description})
    .then((res)=> {
        alert('Category adding done!');
    })
    

}

return (
    <View style={styles.container}>
        <View style={styles.dummy}></View>
       <View style={styles.inputs}><Input 
            placeholder='Category name' placeholderTextColor="white" 
            onChangeText={value => setCategoryName(value)}
        /></View> 
        <View style={styles.inputs}><Input placeholderTextColor="white" 
            placeholder='Description'
            onChangeText={value => setDescription(value)}
        />  </View>

        

        <TouchableOpacity  onPress={() => send()} style={styles.addCategoryButton} >
            <Text style={styles.addCategoryText}>ADD</Text>
            </TouchableOpacity>
            

            <View style={styles.dummy}></View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection:"column",
      backgroundColor: '#FFFFFF',
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
    addCategoryButton:{
        textAlign:"center",
        flex:1,
        
        backgroundColor:"#6fa3f7",
        borderRadius:10,
        borderColor:"#367ff5",
        borderWidth:5
      
    },
    addCategoryText:{
        color:"white",
        alignItems:"center",
        padding:10, 
      }
  });
export default Fetchpostsample

