import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import carsListStyle from '../styles/carsListStyle';

const image = { uri: "https://i.stack.imgur.com/kOnzy.gif" };

class CarsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getCars() {
        try {
            const response = await fetch('https://localhost:7011/api/CarsTables');
            const json = await response.json();
            this.setState({ data: json });
        }
        catch (error) {
            console.log('Error API', error);
        }
        finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getCars();
    }

    render() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return (
                <View style={carsListStyle.viewLoading}>
                    <Image source={image} style={{ resizeMode: "cover", width: 50, height: 50 }}></Image>
                </View>
            );
        }

        return (
                <FlatList data={data} keyExtractor={({ id_cars }, index) => id_cars}
                    renderItem={({ item }) => {
                        var imagenurl = item.imagen;
                        return <>
                            <View style={carsListStyle.viewList}>
                                <Image style={{ resizeMode: "cover", height: 150, width: 300, borderWidth: 1 }} source={{ uri: imagenurl }} />
                                <Text style={carsListStyle.textCar}>{item.marca} {item.modelo}</Text>
                                <View style={carsListStyle.viewInfo}>
                                    <Text style={carsListStyle.textAll}>Codigo: </Text>
                                    <Text style={carsListStyle.textDB}>{item.codigo}</Text>
                                </View>
                                <View style={carsListStyle.viewInfo}>
                                    <Text style={carsListStyle.textAll}>Tipo: </Text>
                                    <Text style={carsListStyle.textDB}>{item.tipo}</Text>
                                </View>
                                <View style={carsListStyle.viewInfo}>
                                    <Text style={carsListStyle.textAll}>Año: </Text>
                                    <Text style={carsListStyle.textDB}>{item.año}</Text>
                                </View>
                                <View style={carsListStyle.viewInfo}>
                                    <Text style={carsListStyle.textAll}>Estado: </Text>
                                    <Text style={carsListStyle.textDB}>{item.estado}</Text>
                                </View>
                                <View style={carsListStyle.viewInfo}>
                                    <Text style={carsListStyle.textAll}>Precio: </Text>
                                    <Text style={carsListStyle.textDB}>RD$ {item.precio}</Text>
                                </View>
                            </View>
                        </>
                    }} />
        )

    }

}

export default CarsList;