import React, { useState } from 'react';
import { Button, View } from 'react-native';
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

