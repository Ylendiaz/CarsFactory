import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import cedulaListStyle from '../styles/cedulaListStyle';

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
                   <Text>Descargando lista</Text> 
                </View>
            );
        }

        return(
            <View style={cedulaListStyle.viewMain}>
                <FlatList data={data} keyExtractor={({id_cars},index) => id_cars}
                    renderItem={({item}) => {
                        return <>
                            <View style={cedulaListStyle.viewList}>
                                <Text>Codigo: {item.codigo}</Text>
                                <Text>Tipo: {item.tipo}</Text>
                                <Text>Marca: {item.marca}</Text>
                                <Text>Modelo: {item.modelo}</Text>
                                <Text>Año: {item.año}</Text>
                                <Text>Estado: {item.estado}</Text>
                                <Text>Precio: {item.precio}</Text>
                                <Text>Imagen: {item.imagen}</Text>
                            </View>
                        </>
                    }} />
            </View>
        )

    }

}

export default CarsList;