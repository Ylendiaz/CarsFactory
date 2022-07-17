import React, {Component} from "react";
import {FlatList, ScrollView, StatusBar, Text, View} from "react-native";
import balancedListStyle from '../styles/balancedListStyle';

const data = [
    {id: 1, balance: 9000000, dataAdded: 20221231, isCredit: true, categoryId: 1},
    {id: 1, balance: 7000000, dataAdded: 20221232, isCredit: true, categoryId: 2},
    {id: 1, balance: 6000000, dataAdded: 20221233, isCredit: false, categoryId: 3},
    {id: 1, balance: 2000000, dataAdded: 20221234, isCredit: false, categoryId: 1},
    {id: 1, balance: 5000000, dataAdded: 20221235, isCredit: false, categoryId: 2},
    {id: 1, balance: 4000000, dataAdded: 20221235, isCredit: false, categoryId: 3},
    {id: 1, balance: 3000000, dataAdded: 20221237, isCredit: false, categoryId: 1},
    {id: 1, balance: 1000000, dataAdded: 20221238, isCredit: false, categoryId: 2},
    {id: 1, balance: 8000000, dataAdded: 20221239, isCredit: true, categoryId: 3}
]

const category = [

    {categoryId: 1, name: 'Ingresos'},
    {categoryId: 2, name : 'Egresos'},
    {categoryId: 3, name: 'Hobbies'},
]

class BalanceList extends Component{
    render(){
        return(
            <View style={balancedListStyle.viewMain}>
                <FlatList 
                    data = {data} 
                    keyExtractor = {item => item.id.toString()}
                    contentContainerStyle={{paddingHorizontal:20}}
                    renderItem={({item, index})=>{
                    return <><View style={balancedListStyle.viewList}>
                        <Text style={balancedListStyle.viewBalance}>{item.balance}</Text>
                        {item.isCredit = true ? <Text style={balancedListStyle.credit}></Text> : <Text style={balancedListStyle.debit}>Debito</Text>}
                    </View><View>
                            <Text>{item.dataAdded}</Text>
                            <Text>{category.find(x => x.categoryId == item.categoryId).name}</Text>
                        </View></>    
                }} />
            </View>
        ); 
    }    
}
export default BalanceList;