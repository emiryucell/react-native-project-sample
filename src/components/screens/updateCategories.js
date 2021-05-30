import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
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
            <View>
                <Input
                    placeholder='Category name'
                    onChangeText={value => setCategoryName(value)}
                    defaultValue={JSON.stringify(itemName)}

                />
        
                <Input
                    placeholder='Description'
                    onChangeText={value => setDescriptionName(value)}
                    defaultValue={JSON.stringify(itemDescription)}
                    
                />  
        
                <Button onPress={() => requestOptions, navigate} title='Update'></Button>
                
            </View>
        )

}


export default UpdateCategories;