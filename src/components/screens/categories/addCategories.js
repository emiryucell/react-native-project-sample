import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import manager from '../../../../service/baseservice';
import { globalStyles } from "../../styles/global";


const Fetchpostsample = ({ navigation }) => {

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const send = () => {

        manager.post('api/categories', { name: categoryName, description: description })
            .then((res) => {
                navigation.push('Categories');
                alert('Category adding done!');
            })
    }
    return (
        <View style={globalStyles.container}>
            <View>
                <View style={globalStyles.inputs}>
                    <Input
                        placeholder='Category name'
                        placeholderTextColor="white"
                        inputContainerStyle={{ borderColor: "white" }}
                        inputStyle={{ 'color': 'white' }}
                        onChangeText={value => setCategoryName(value)}
                    />
                </View>
                <View style={globalStyles.inputs}>
                    <Input
                        placeholderTextColor="white"
                        placeholder='Description'
                        inputContainerStyle={{ borderColor: "white" }}
                        inputStyle={{ 'color': 'white' }}
                        onChangeText={value => setDescription(value)}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => send()} style={globalStyles.addButton} >
                        <Text style={globalStyles.addText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Fetchpostsample;

