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
  const deleted = (id) => {
    manager.delete("api/products/",id)
      .then((data)=> {
        fillData();
      })

  }
  


  return (
  <View style={styles.container}>

  <ScrollView >
        {
          products.map((item) => (

    <ListItem containerStyle={{ backgroundColor: "#6fa3f7",flex:1,flexDirection:"row"}}>
      <View style={{flex:1,flexDirection:"row"}}>
        <View style={{flex:1}}>
              <ListItem.Content style={styles.products} >
                <ListItem.Title style={{ color: "white" }}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{ color: "white" }}>Quantity Per Unit: {item.quantityPerUnit}</ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: "white" }}>Unit Price: {item.unitPrice}$</ListItem.Subtitle>
              </ListItem.Content>
        </View>
        <View>
              <ListItem.Content>
                <ListItem.Content  >
                  <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { id: item.id })} style={styles.detailButton}>
                    <Text style={{ color: "#367ff5",fontWeight: "bold" }}>Detail</Text>
                  </TouchableOpacity>

                </ListItem.Content>
                <ListItem.Content style={{ flex: 1 }} >

                  <TouchableOpacity onPress={() => deleted(item.id)} style={styles.deleteButton}>
                    <Text style={{ color: "#367ff5" ,fontWeight: "bold"}}>Delete</Text>
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
    backgroundColor: "#bae0ff",
  
    paddingRight: 9.0,
  
    borderTopRightRadius: 10,
    borderColor:"#367ff5",
    borderWidth:2,


  },
  deleteButton: {

    flex: 1,
    
    padding: 5,
   
    backgroundColor: "#bae0ff",
    borderBottomRightRadius: 10,
    borderColor:"#367ff5",
    borderWidth:2,

  }
});


export default Products;