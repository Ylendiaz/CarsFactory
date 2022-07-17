import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import cedulaListStyle from '../styles/cedulaListStyle';

const image = { uri: "https://i.stack.imgur.com/kOnzy.gif" };

class CarsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getCars(){
        try{
            const response = await fetch('https://localhost:7011/api/CarsTables');
            const json = await response.json();
            this.setState({data:json});
        }
        catch(error){
            console.log('Error API',error);
        }
        finally{
            this.setState({isLoading:false});
        }
    }

    componentDidMount(){
        this.getCars();
    }

    render(){
        const {data,isLoading} = this.state;
        if(isLoading){
            return(
                    <View>
                        <View style={{flex: 1, alignSelf: "center"}}>
                            <Image source={image} style = {{resizeMode:"cover", width: 50, height: 50}}></Image>
                        </View>
                    </View>
            );
        }

        return(
            <View style={cedulaListStyle.viewMain}>
                <FlatList data={data} keyExtractor={({id_cars},index) => id_cars}
                    renderItem={({item}) => {
                        var imagenurl = item.imagen;
                        return <>
                            <View style={cedulaListStyle.viewList}>
                                <Text>Codigo: {item.codigo}</Text>
                                <Text>Tipo: {item.tipo}</Text>
                                <Text>Marca: {item.marca}</Text>
                                <Text>Modelo: {item.modelo}</Text>
                                <Text>Año: {item.año}</Text>
                                <Text>Estado: {item.estado}</Text>
                                <Text>Precio: {item.precio}</Text>
                                <Image style={{ resizeMode: "contain", height: 100, width: 200, borderWidth: 1 }} source={{ uri: imagenurl }} />
                            </View>
                        </>
                    }} />
            </View>
        )
        
    }

}

export default CarsList;