import React, { useState } from 'react';
import { render } from 'react-dom';
import { TouchableOpacity, StyleSheet, View,Text } from 'react-native';
import { Input } from 'react-native-elements';
import manager from '../../../../service/baseservice';


const Fetchpostsample = ({navigation}) => {

const [categoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');

const send = () => {

    manager.post('api/categories',{name:categoryName, description:description})
    .then((res)=> {
        navigation.push('Categories');
        alert('Category adding done!');
    })
}


return (

  <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#6fa3f7"}}>  
    <View style={styles.container}>
      
       <View style={styles.inputs}>
           <Input 
            placeholder='Category name' 
            placeholderTextColor="white" 
            inputContainerStyle={{borderColor:"white"}}
            inputStyle={{'color': 'white'}}
            onChangeText={value => setCategoryName(value)}
            />
        </View> 
        <View style={styles.inputs}>
            <Input 
            placeholderTextColor="white" 
            placeholder='Description'
            inputContainerStyle={{borderColor:"white"}}
            inputStyle={{'color': 'white'}}
            onChangeText={value => setDescription(value)}
            />  
        </View>
     <View>
        <TouchableOpacity  onPress={() => send()} style={styles.addCategoryButton} >
            <Text style={styles.addCategoryText}>ADD</Text>
            </TouchableOpacity>
            
      </View>
     </View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flexDirection:"column",
      backgroundColor: "#6fa3f7",
      alignItems: 'center',
      justifyContent:"center",
    
      
      
    
    },
     inputs:{
        flex: 1,
        backgroundColor:"#6fa3f7",
        borderColor:"#367ff5",
        borderRadius:5,
        borderWidth:5,
        margin:5,     
    },
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

