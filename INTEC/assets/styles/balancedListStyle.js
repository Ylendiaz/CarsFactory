import { StyleSheet } from "react-native";

const balancedListstyle = StyleSheet.create(
{
    viewMain: {
        flex: 1,
        marginTop: 30
    },
    ViewList : {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 15,
        shadowColor: 'Black',
        shadowOffset: {
            width: 10,
            height: 20
        },
        shadowOpacity: 1,
        shadowRadius: 20, 
        elevation: 4
    },

    viewBalance : {
        flexDirection: 'row', 
        borderWidth: 2,
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: 10
    },
        
    credit: {

        color: '#fff000'
    },

    debit: {
        color: 'green'
    }

}

);


export default balancedListstyle;