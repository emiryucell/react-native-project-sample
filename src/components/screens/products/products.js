import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from "react-native-elements";
import manager from '../../../../service/baseservice';
import {globalStyles} from "../../styles/global";


function Products({ navigation }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fillData();
  }, [])

  const fillData = () => {
    manager.get("api/products/")
      .then((data) => {
        setProducts(data);
      })}
  const deleted = (id) => {
    manager.delete("api/products/",id)
      .then((data)=> {
        fillData();
      })}
  return (
  <View style={globalStyles.container}>

  <ScrollView >
        {
          products.map((item) => (

    <ListItem containerStyle={globalStyles.container}>
      <View style={globalStyles.productStructure}>
        <View style={{flex:1}}>
              <ListItem.Content style={globalStyles.products} >
                <ListItem.Title style={globalStyles.text}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={globalStyles.text}>Quantity Per Unit: {item.quantityPerUnit}</ListItem.Subtitle>
                <ListItem.Subtitle style={globalStyles.text}>Unit Price: {item.unitPrice}$</ListItem.Subtitle>
              </ListItem.Content>
        </View>
        <View>
              <ListItem.Content>
                <ListItem.Content>
                  <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { id: item.id })} 
                  style={globalStyles.detailButton}>
                    <Text style={globalStyles.productsButtonText}>Detail</Text>
                  </TouchableOpacity>

                </ListItem.Content>
                <ListItem.Content>

                  <TouchableOpacity onPress={() => deleted(item.id)} style={globalStyles.deleteButton}>
                    <Text style={globalStyles.productsButtonText}>Delete</Text>
                  </TouchableOpacity>
                </ListItem.Content>
              </ListItem.Content>
        </View>
        </View> 
    </ListItem>

          ))
        }
</ScrollView>
</View>
  );
}



export default Products;