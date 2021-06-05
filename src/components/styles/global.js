import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6fa3f7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    products: {
      padding: 5,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor: "#367ff5"
    },
    productStructure:{
        flex:1,
        flexDirection:"row"
    },
    productsButtonText:{
        color:"#367ff5",
        fontWeight:"bold"
    },
    text:{
        color: "white" 
    },
    detailButton: {
      flex: 1,
      padding: 5,
      backgroundColor: "#bae0ff",
      paddingRight: 9.0,
      borderTopRightRadius: 10,
      borderColor:"#367ff5",
      borderWidth:2,
    },
    deleteButton: {
      flex: 1,
      padding: 5,
      backgroundColor: "#bae0ff",
      borderBottomRightRadius: 10,
      borderColor:"#367ff5",
      borderWidth:2,
    },
    orders:{
        flex:5,
        padding:5,
        borderRadius:10,
        backgroundColor:"#367ff5",
        borderWidth:5,
        borderColor:"#3d86fc"
      },
  });
  