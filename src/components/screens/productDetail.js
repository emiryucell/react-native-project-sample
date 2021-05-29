import React, { useEffect, useState } from 'react';
import { Text, View,Image } from 'react-native';
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
        <View style={{ flex: 1}}> 
        
          <View style={{ flex: 1, justifyContent:"flex-end", alignItems:"flex-start" , backgroundColor: '#4632a8'}}>
       
        <Text style={{margin:5,fontSize:25,color:"#FFFFFF", fontFamily:"Roboto"}}>
        Product Name :{"\n"+product.name}
        </Text>
    
        </View>
        <View style={{flex:2  ,backgroundColor: '#FFFFFF'}}>
        <Text style={{margin:5,fontSize:20, fontFamily:"Roboto"}}>
        Quantity Per Unit: {product.quantityPerUnit}
        </Text>
        <Text style={{margin:5,fontSize:20, fontFamily:"Roboto"}}>
        Units In Stock: {product.unitsInStock} 
        </Text>
        <Text style={{margin:5,fontSize:20, color:"green",
    fontWeight:'bold'}}>
        Unit Price: {product.unitPrice}$
        </Text>
        <Text style={{margin:5,fontSize:20, fontFamily:"Roboto"}}>
        Units On Order: {product.unitsOnOrder}
        </Text>
        </View>
      </View>
    );
  }

  
export default ProductDetail;