import { StyleSheet } from "react-native";

const carsListStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'darkred',
            justifyContent: 'center',
          },
        
        viewMain: {
            flex: 1,
            
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
        },
        textTitle: {
            flex: 1,
            color: "black",
            fontSize: 42,
            lineHeight: 95,
            fontWeight: "bold",
            fontStyle: 'italic',
            textAlign: "center",
            alignItems: "center",
            marginBottom: 2
            // backgroundColor: "#2C3639"
          },
    }
);

export default carsListStyle