import color from 'color';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import manager from '../../../../service/baseservice';



function ProductDetail({ navigation, route }) {
  const { id } = route.params;
  const [product, setProduct] = useState('');

  useEffect(() => {

    fillData();

  }, [])

  const fillData = () => {

    manager.get("api/products/" + id)
      .then((data) => {
        setProduct(data);
      })
  }


  return (
  
    <View style={{ flex: 1 }}>

      <View style={styles.container}>

      <Image source={require("../../../../assets/box.png")} 
      style={{ width: 150, height: 150 }}/>

        <Text style={{ margin: 5, fontSize: 25, color: "#FFFFFF", fontFamily: "Roboto" }}>
          Product Name :{"\n" + product.name}
        </Text>

      </View>
      <View style={{ flex: 2, backgroundColor: '#6fa3f7' }}>
        <Text style={styles.subTextStyle}>
          Quantity Per Unit: {product.quantityPerUnit}
        </Text>
        <Text style={styles.subTextStyle}>
          Units In Stock: {product.unitsInStock}
        </Text>
        <Text style={{
          margin: 5, fontSize: 20, color: "green",
          fontWeight: 'bold'
        }}>
          Unit Price: {product.unitPrice}$
        </Text>
        <Text style={styles.subTextStyle}>
          Units On Order: {product.unitsOnOrder}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#367ff5',
    justifyContent: "flex-end",
    alignItems: "flex-start",

  },
  subTextStyle: {
    margin: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    color:"white"

  }
});


export default ProductDetail;