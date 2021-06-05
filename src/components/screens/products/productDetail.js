import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import manager from '../../../../service/baseservice';
import { globalStyles } from "../../styles/global";



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

    <View style={globalStyles.container}>
      <View>
        <View style={globalStyles.upContainer}>
          <View style={{ flex: 1 }}>
            <Image source={require("../../../../assets/box.png")}
              style={globalStyles.imageStyle} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={globalStyles.text}>
              Product Name{"\n" + product.name}
            </Text>
          </View>

        </View>
        <View style={globalStyles.downContainer}>
          <Text style={globalStyles.text}>
            Quantity Per Unit: {product.quantityPerUnit}
          </Text>
          <Text style={globalStyles.text}>
            Units In Stock: {product.unitsInStock}
          </Text>
          <Text style={globalStyles.priceText}>
            Unit Price: {product.unitPrice}$
        </Text>
          <Text style={globalStyles.text}>
            Units On Order: {product.unitsOnOrder}
          </Text>
        </View>
      </View>
    </View>
  );
}


export default ProductDetail;