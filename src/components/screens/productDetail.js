import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import manager from '../../../service/baseservice';

function ProductDetail({ navigation ,route}) {
  const {id} = route.params;
  const [product, setProduct] = useState('');

  useEffect(() => {

    fillData();
   
  }, [])

  const fillData=()=>{
    
    manager.get("api/products/"+id)
    .then((data)=>{
      setProduct(data);
          
   })
  }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <Text>
        Product Name : {product.name}
        </Text>
        <Text>
        quantityPerUnit: {product.quantityPerUnit}
        </Text>
        <Text>
        unitsInStock: {product.unitsInStock}
        </Text>
        <Text>
        unitPrice: {product.unitPrice}
        </Text>
        <Text>
        unitsOnOrder: {product.unitsOnOrder}
        </Text>
      </View>
    );
  }

  
export default ProductDetail;