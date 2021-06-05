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
 const error = () => {
    if(categoryName.length < 1) {
        alert('Category name cannot be empty!');
     }
     else if (description.length < 1) {
         alert("Description cannot be empty!")
     }
     else {
         send();
     }
  }
 

return (

  <View style={{flex:1,flexDirection:"column",alignItems:"center",backgroundColor:"#6fa3f7"}}>  
    <View style={styles.container}>

        <View>
            <Text style={styles.categoryText}>Add your new category here</Text>
        </View>
      
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
        <TouchableOpacity  onPress={() => error()} style={styles.addCategoryButton} >
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
    categoryText:{
        flex:1,
        color:"white",
        marginTop:50,
        fontSize:17,
        marginBottom:20
        
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

