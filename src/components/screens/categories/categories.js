import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon, ListItem } from "react-native-elements";
import manager from '../../../../service/baseservice';
import { globalStyles } from "../../styles/global";

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

    manager.delete("api/categories/", id)
      .then((data) => {
        fillData();
      })
  }
  return (
<View style={globalStyles.container}>
  <ScrollView>
    <View>
      <TouchableOpacity onPress={() => navigation.push('Add Categories')} style={globalStyles.addCategoryButton}>
            <Text style={globalStyles.addCategoryText}>Add Category</Text>
      </TouchableOpacity>
          {
            categories.map((item) => (

      <ListItem containerStyle={globalStyles.container}>
        <View style={globalStyles.categories}>
          <ListItem.Content style={globalStyles.categoryText}>
                    <ListItem.Title style={globalStyles.text}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={globalStyles.text}>Description: {item.description}</ListItem.Subtitle>

          </ListItem.Content>
          <View style={globalStyles.categoriesIconsContainer}>
                    <ListItem.Content>
                      <Icon name="delete" color="white" onPress={() => deleted(item.id)} />
                    </ListItem.Content>
                    <ListItem.Content>
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



export default Categories;