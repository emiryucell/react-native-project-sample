import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ListItem } from "react-native-elements";
import manager from '../../../service/baseservice';

function Order({ navigation }) {

  const [orders,setOrders]=useState([]);

  useEffect(() => {

    fillData();
   
  }, [])

  const fillData=()=>{
    
    manager.get("api/orders")
    .then((data)=>{
      setOrders(data);
          
   })
  }

    return (
      <View>
       
      </View>
    );
  }

  export default Order;
