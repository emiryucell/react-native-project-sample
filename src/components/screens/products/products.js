import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from "react-native-elements";
import manager from '../../../../service/baseservice';


function Products({ navigation }) {


  const [products, setProducts] = useState([]);




  useEffect(() => {

    fillData();

  }, [])



  const fillData = () => {
    manager.get("api/products/")
      .then((data) => {
        setProducts(data);

      })


  }

  const deleteProduct = (id) => {
    //HTTP DELETE
    let requestoptions = {
      method: 'DELETE',
      body: JSON.stringify({ id: id })
    }
    fetch('https://northwind.vercel.app/api/products/' + id, requestoptions)
      .then((res) => res.json())
      .then((data) => {

        fillData();
      })
  }


  return (
  <View style={styles.container}>

  <ScrollView >
        {
          products.map((item) => (

    <ListItem containerStyle={{ backgroundColor: "#6fa3f7"}}>
        <View style={{flex:6}}>
              <ListItem.Content style={styles.products} >
                <ListItem.Title style={{ color: "white" }}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{ color: "white" }}>Quantity Per Unit: {item.quantityPerUnit}</ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: "white" }}>Unit Price: {item.unitPrice}$</ListItem.Subtitle>
              </ListItem.Content>
        </View>
        <View>
              <ListItem.Content>
                <ListItem.Content style={{ flex: 1 }} >
                  <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { id: item.id })} style={styles.detailButton}>
                    <Text style={{ color: "white" }}>Detail</Text>
                  </TouchableOpacity>

                </ListItem.Content>
                <ListItem.Content style={{ flex: 1 }} >

                  <TouchableOpacity onPress={() => deleteProduct(item.id)} style={styles.deleteButton}>
                    <Text style={{ color: "white" }}>Delete</Text>
                  </TouchableOpacity>
                </ListItem.Content>
              </ListItem.Content>
        </View>
    </ListItem>

          ))
        }
</ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fa3f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
  
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#367ff5"
  },
  detailButton: {
    flex: 1,
    padding: 5,
    backgroundColor: "green",
    alignSelf: 'stretch',
    paddingRight: 9.5,
    paddingTop: 10,
    borderTopRightRadius: 10,


  },
  deleteButton: {

    flex: 1,
    alignSelf: 'stretch',
    padding: 5,
    paddingBottom: 10,
    backgroundColor: "red",
    borderBottomRightRadius: 10,

  }
});


export default Products;