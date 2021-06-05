import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Input } from 'react-native-elements';
import manager from '../../../../service/baseservice';


function UpdateCategories({ route, navigation }) {

    const { itemName, itemDescription, itemId } = route.params;

    const [categoryName, setCategoryName] = useState();
    const [descriptionName, setDescriptionName] = useState();

    const [categories, setCategories] = useState([]);

    const update = () => {

        manager.put('api/categories/', itemId, { name: categoryName, description: descriptionName })
            .then((res) => {
                navigation.push('Categories');
                alert('Category update done!');
            })
    }

    const navigate = () => {
        navigation.push("Categories")
    }


    useEffect(() => {

        fillData();
        setCategoryName(itemName);
        setDescriptionName(itemDescription);

    }, [])


    const fillData = () => {

        manager.get("api/categories")
            .then((data) => {
                setCategories(data);


            })
    }

    const error = () => {
        if(categoryName.length < 1) {
            alert('Category name cannot be empty!');
         }
         else if (descriptionName.length < 1) {
             alert("Description cannot be empty!")
         }
         else {
             update();
         }
      }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.categoryText}>Update the category here</Text>
            </View>
            <View>
                <View style={styles.inputs}> 
                    <Input
                        placeholder='Category name'
                        placeholderTextColor="white"
                        inputContainerStyle={{ borderColor: "white" }}
                        inputStyle={{ 'color': 'white' }}
                        onChangeText={value => setCategoryName(value)}
                        defaultValue={JSON.parse(JSON.stringify(itemName))}
                    />
                </View>

            <View style={styles.inputs}>
                <Input
                    placeholder='Description'
                    placeholderTextColor="white"
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ 'color': 'white' }}
                    onChangeText={value => setDescriptionName(value)}
                    defaultValue={JSON.parse(JSON.stringify(itemDescription))}
                /> 
            </View>
            <TouchableOpacity onPress={() => error()} style={styles.updateCategoryButton} >
                <Text style={styles.updateCategoryText}>UPDATE</Text>
            </TouchableOpacity>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: '#6fa3f7',
        alignItems: 'center',   
    },
    categoryText:{
        flex:1,
        color:"white",
        marginTop:50,
        fontSize:18,
        marginBottom:20       
    },
    inputs: {
        flex: 1,
        backgroundColor: "#6fa3f7",
        borderColor: "#367ff5",
        borderRadius: 5,
        borderWidth: 5,
        margin: 5,
    },
    updateCategoryButton: {
        textAlign: "center",
        flex: 1,
        backgroundColor: "#6fa3f7",
        borderRadius: 10,
        borderColor: "#367ff5",
        borderWidth: 5,
        marginTop:5
    },
    updateCategoryText: {
        color: "white",
        alignItems: "center",
        padding: 10,
    }
});

export default UpdateCategories;