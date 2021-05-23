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
        <ScrollView >
            {
            orders.map((item)=> (

                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title >Order ID: {item.id}</ListItem.Title>
                        <ListItem.Subtitle >Costumer ID: {item.customerId}</ListItem.Subtitle>
                        <ListItem.Subtitle >Order Date: {item.orderDate}</ListItem.Subtitle> 
                      </ListItem.Content>
                </ListItem>
    
            ))
        }
        </ScrollView>
      </View>
    );
  }

  export default Order;
