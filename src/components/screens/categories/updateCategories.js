import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import manager from '../../../../service/baseservice';
import { globalStyles } from '../../styles/global';

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
        <View style={globalStyles.container}>
            <View>
                <View style={globalStyles.inputs}> <Input
                    placeholder='Category name'
                    placeholderTextColor="white"
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ 'color': 'white' }}
                    onChangeText={value => setCategoryName(value)}
                    defaultValue={JSON.parse(JSON.stringify(itemName))}
                /></View>
                <View style={globalStyles.inputs}> <Input

                    placeholder='Description'
                    placeholderTextColor="white"
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ 'color': 'white' }}
                    onChangeText={value => setDescriptionName(value)}
                    defaultValue={JSON.parse(JSON.stringify(itemDescription))}

                /></View>
                <TouchableOpacity onPress={() => error()} style={globalStyles.addButton} >
                    <Text style={globalStyles.addCategoryText}>UPDATE</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default UpdateCategories;