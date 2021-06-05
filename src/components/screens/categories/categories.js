import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, ListItem } from "react-native-elements";
import { PhoneHeight, PhoneWidth } from "../../../../environment/config";
import manager from '../../../../service/baseservice';








function Categories({ navigation }) {



  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fillData();

  }, [])

  const fillData = () => {

    manager.get("api/categories")
      .then((data) => {
        setCategories(data);

      })
  }

  const deleted = (id) => {
    manager.delete("api/categories/",id)
      .then((data)=> {
        fillData();
      })

  }


  return (
    <View style={styles.container}>

      <ScrollView  >
        <View style={{ flex: 6, flexDirection: "column", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => navigation.push('Add Categories')} style={styles.addCategoryButton}>
            <Text style={styles.addCategoryText}>Add Category</Text>
          </TouchableOpacity>
          {
            categories.map((item) => (

              <ListItem containerStyle={{ flex: 1, backgroundColor: "#6fa3f7" }}>
                <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#367ff5", borderRadius: 10 }}>
                  <ListItem.Content style={styles.categories} >

                    <ListItem.Title style={{ color: "white" }}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ color: "white" }}>Description: {item.description}</ListItem.Subtitle>

                  </ListItem.Content>
                  <View style={{ flex: 2, flexDirection: "row" }}>
                    <ListItem.Content style={{ flex: 1 }} >
                      <Icon name="delete" color="white" onPress={() => deleted(item.id)} />
                    </ListItem.Content>

                    <ListItem.Content style={{ flex: 1 }} >
                      <Icon name="update" color="white" onPress={() => navigation.push('Update Categories', {
                        itemName: item.name,
                        itemDescription: item.description,
                        itemId: item.id,
                      })} />
                    </ListItem.Content>
                  </View>
                </View>
              </ListItem>

            ))
          }
        </View>
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
  categories: {
    flex: 6,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#367ff5",
  },
  addCategoryButton: {
    textAlign: "center",
    flex: 1,
    padding: 5,
    margin: 16,
    backgroundColor: "#6fa3f7",
    borderRadius: 10,
    borderColor: "#367ff5",
    borderWidth: 5,

  },
  addCategoryText: {
    color: "white",
    alignItems: "center",
    padding: 10,
  }
});

export default Categories;