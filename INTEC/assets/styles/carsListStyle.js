import { StyleSheet } from "react-native";

const carsListStyle = StyleSheet.create(
    {
        viewMain: {
            flex: 1,
            marginTop: 80,
            marginBottom: 80,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            width: '100%',
            backgroundColor: 'ghostwhite'
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
            // fontWeight: "bold",
            color: "white",
            marginBottom: 5,
            borderRadius: 5,
            backgroundColor: 'darkred',
            marginTop: 10,
        },

        viewInfo: {
            flexDirection: "row",
            marginBottom: 5,
            //backgroundColor: 'blue',
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
        }
    }
);

export default carsListStyle