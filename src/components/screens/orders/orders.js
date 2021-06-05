import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ListItem } from "react-native-elements";
import manager from '../../../../service/baseservice';
import {globalStyles} from "../../styles/global";

function Orders({ navigation }) {

  const [orders,setOrders]=useState([]);

  useEffect(() => {

    fillData();
   
  }, [])

  const fillData=()=>{
    
    manager.get("api/orders")
    .then((data)=>{
     data= data.sort(function(a,b){
      return new Date(b.orderDate) - new Date(a.orderDate);
    });
      setOrders(data);
          
   })
  }
    return (
      <View style={globalStyles.container}>
        <ScrollView>
            {
            orders.map((item)=> (

                <ListItem containerStyle={globalStyles.container}>
                    <ListItem.Content style={globalStyles.orders}>
                        <ListItem.Title style={globalStyles.text}>Order ID: {item.id}</ListItem.Title>
                        <ListItem.Subtitle style={globalStyles.text}>Costumer ID: {item.customerId}</ListItem.Subtitle>
                        <ListItem.Subtitle style={globalStyles.text}>Order Ship Name: {item.shipName}</ListItem.Subtitle> 
                        <ListItem.Subtitle style={globalStyles.text}>Order Date: {item.orderDate}</ListItem.Subtitle> 
                      </ListItem.Content>
                </ListItem>
    
            ))
        }
        </ScrollView>
      </View>
    );
  }
  export default Orders;
