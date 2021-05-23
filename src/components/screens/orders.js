import React, { useEffect, useState } from 'react';
import { ScrollView, View ,StyleSheet} from 'react-native';
import { ListItem } from "react-native-elements";
import manager from '../../../service/baseservice';

function Orders({ navigation }) {

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <ScrollView>
            {
            orders.map((item)=> (

                <ListItem>
                    <ListItem.Content style={styles.orders}>
                        <ListItem.Title style={{color:"white"}}>Order ID: {item.id}</ListItem.Title>
                        <ListItem.Subtitle style={{color:"white"}}>Costumer ID: {item.customerId}</ListItem.Subtitle>
                        <ListItem.Subtitle style={{color:"white"}}>Order Date: {item.orderDate}</ListItem.Subtitle> 
                      </ListItem.Content>
                </ListItem>
    
            ))
        }
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    
    orders:{
      flex:5,
      padding:5,
      borderRadius:10,
      backgroundColor:"blue"
    },
   
  });


  export default Orders;
