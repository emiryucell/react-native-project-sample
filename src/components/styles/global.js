import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    //// GENERAL ////
    container: {
        flex: 1,
        backgroundColor: '#6fa3f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white"
    },

    inputs: {
        flex: 1,
        backgroundColor: "#6fa3f7",
        borderColor: "#367ff5",
        borderRadius: 5,
        borderWidth: 5,
        margin: 5,
    },
    addButton: {
        textAlign: "center",
        flex: 1,
        backgroundColor: "#6fa3f7",
        borderRadius: 10,
        borderColor: "#367ff5",
        borderWidth: 5
    },
    addText: {
        color: "white",
        padding: 10,
    },

    ///// PRODUCTS /////
    products: {
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "#367ff5"
    },
    productStructure: {
        flex: 1,
        flexDirection: "row"
    },
    productsButtonText: {
        color: "#367ff5",
        fontWeight: "bold"
    },
    detailButton: {
        flex: 1,
        padding: 5,
        backgroundColor: "#bae0ff",
        paddingRight: 8.65,
        borderTopRightRadius: 10,
        borderColor: "#367ff5",
        borderWidth: 2,
    },
    deleteButton: {
        flex: 1,
        padding: 5,
        backgroundColor: "#bae0ff",
        borderBottomRightRadius: 10,
        borderColor: "#367ff5",
        borderWidth: 2,
    },
    upContainer: {

        flexDirection: "column",
        backgroundColor: '#367ff5',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: "#3d86fc",
        borderWidth: 5
    },
    downContainer: {
        flex: 2,
        backgroundColor: '#367ff5',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 5,
        borderColor: "#3d86fc",
        padding: 20
    },
    imageStyle: {
        flex: 1,
        minWidth: 100,
        minHeight: 100
    },
    priceText: {
        color: "#41b502",
        fontWeight: "bold"
    },

    ///// CATEGORIES /////
    categories: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#367ff5",
        borderRadius: 10
    },
    categoryText: {
        flex: 6,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#367ff5",
    },
    categoriesIconsContainer: {
        flex: 2,
        flexDirection: "row"
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
    },
    ///// ORDERS /////
    orders: {
        flex: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#367ff5",
        borderWidth: 5,
        borderColor: "#3d86fc"
    },
});
