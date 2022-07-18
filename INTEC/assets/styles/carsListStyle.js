import { StyleSheet } from "react-native";

const carsListStyle = StyleSheet.create(
    {
        viewLoading:{
            flex: 1, 
            alignSelf: "center", 
            justifyContent: 'center'
        },

        viewList: {
            flexDirection: "column",
            marginTop: 15,
            alignSelf: "center",
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            width: '90%',
            borderWidth: 1,
            padding: 20,
            marginBottom: 15,
            borderRadius: 5
        },

        textCar: {
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            fontSize: 16,
            color: "white",
            marginBottom: 5,
            borderRadius: 5,
            backgroundColor: 'darkred',
            marginTop: 10,
        },

        viewInfo: {
            flexDirection: "row",
            marginBottom: 5,
            marginTop: 8,
            marginBottom: 0,
            borderBottomWidth: 1,
            borderColor: "darkgray"
        },

        textAll: {
            flexDirection: "column",
            alignItems: "center",
            fontSize: 14,
            marginBottom: 2,
            fontWeight: "bold"
        },

        textDB: {
            flexDirection: "column",
            alignItems: "center",
            fontSize: 14,
            marginBottom: 2
        },
    }
);

export default carsListStyle