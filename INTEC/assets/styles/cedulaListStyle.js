import { StyleSheet } from "react-native";

const cedulaListStyle = StyleSheet.create(
    {
        viewMain: {
            flex: 1,
            marginTop: 80,
            marginBottom: 80,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            width: '100%',
            backgroundColor: 'lightsteelblue'
        },

        viewList: {
            flexDirection: "column",
            marginTop: 20,
            alignSelf: "center",
            justifyContent: 'flex-start',
            backgroundColor: 'ghostwhite',
            width: '80%',
            borderWidth: 2,
            padding: 20,
            marginBottom: 20,
            borderRadius: 15
        },

        textCedula: {
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5
        },

        textNombre: {
            flexDirection: "row",
            alignItems: "center",
            fontSize: 16,
            marginBottom: 2
        },

        textAll: {
            flexDirection: "row",
            alignItems: "center",
            fontSize: 14,
            marginBottom: 2
        }
    }
);

export default cedulaListStyle