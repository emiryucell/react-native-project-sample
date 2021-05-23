import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import config from '../../../environment/config'
import manager from '../../../service/baseservice';
import basemanager from '../../../service/baseservice';

const Fetchpostsample = () => {

    manager.get('api/products').then((data)=>{
        console.log(data);
    });    
   

const [categoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');

const send = () => {

    manager.post('api/categories',{name:categoryName, description:description})
    .then((res)=> {
        alert('Category adding done!');
    })
    

}

return (
    <View>
        <Input
            placeholder='Category name'
            onChangeText={value => setCategoryName(value)}
        />

        <Input
            placeholder='Description'
            onChangeText={value => setDescription(value)}
        />  

        <Button onPress={() => send()} title='Send'></Button>


    </View>
)
}

export default Fetchpostsample

