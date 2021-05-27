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
      //buraya ortak resim eklenebilir
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
         <View style={{ flex: 1}}/>
          <View style={{ flex: 1,marginVertical:50, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#4632a8',borderRadius:10}}>
        <Text style={{margin:5,fontSize:15, fontFamily:"sans-serif-medium"}}>
        Product Name : {product.name}
        </Text>
        <Text>
        quantityPerUnit: {product.quantityPerUnit}
        </Text>
        <Text>
        unitsInStock: {product.unitsInStock} 
        </Text>
        <Text style={{ color:"green",
    fontWeight:'bold'}}>
        unitPrice: {product.unitPrice} $
        </Text>
        <Text>
        unitsOnOrder: {product.unitsOnOrder}
        </Text>
        </View>
        <View style={{ flex: 1}}/>
      </View>
    );
  }

  
export default ProductDetail;