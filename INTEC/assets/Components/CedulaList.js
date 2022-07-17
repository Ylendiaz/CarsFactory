import React, { Component } from "react";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import cedulaListStyle from '../styles/cedulaListStyle';

const data = [
    {
        Cedula1: '40213335512', Nombre: 'Jonathan', Apellido: 'Diaz', FechaNacimiento: '2001-04-23', LugarNacimiento: 'Santo Domingo', Sexo: 'M',
        Sangre: 'O+', EstadoCivil: 'Soltero', Ocupacion: 'Estudiante', FechaExpiracion: '2024-04-23'
    },
    {
        Cedula1: '40256482322', Nombre: 'David', Apellido: 'Fernandez', FechaNacimiento: '2001-04-23', LugarNacimiento: 'Santiago', Sexo: 'M',
        Sangre: 'B+', EstadoCivil: 'Soltero', Ocupacion: 'Estudiante', FechaExpiracion: '2024-04-23'
    },
    {
        Cedula1: '40246823564', Nombre: 'Camila', Apellido: 'Torres', FechaNacimiento: '1998-08-24', LugarNacimiento: 'La Vega', Sexo: 'F',
        Sangre: 'B+', EstadoCivil: 'Casado', Ocupacion: 'Estudiante', FechaExpiracion: '2024-08-24'
    },
    {
        Cedula1: '40265478126', Nombre: 'Emilio', Apellido: 'Lopez', FechaNacimiento: '1987-09-13', LugarNacimiento: 'Santo Domingo', Sexo: 'M',
        Sangre: 'B+', EstadoCivil: 'Soltero', Ocupacion: 'Estudiante', FechaExpiracion: '2024-09-13'
    }
]

class CedulaList extends Component {
    render() {
        return (
            <View style={cedulaListStyle.viewMain}>
                <FlatList data={data} keyExtractor={item => item.Cedula1.toString()} contentContainerStyle={{ paddingHorizontal: 20 }}
                    renderItem={({ item, index }) => {
                        return <>
                            <View style={cedulaListStyle.viewList}>
                                <Text style={cedulaListStyle.textCedula}>{item.Cedula1}</Text>
                                <Text style={cedulaListStyle.textNombre}>{item.Nombre} {item.Apellido}</Text>
                                <Text style={cedulaListStyle.textAll}>Lugar de Nacimiento: {item.LugarNacimiento}</Text>
                                <Text style={cedulaListStyle.textAll}>Fecha de Nacimiento: {item.FechaNacimiento}</Text>
                                <Text style={cedulaListStyle.textAll}>Sexo: {item.Sexo}</Text>
                                <Text style={cedulaListStyle.textAll}>Sangre: {item.Sangre}</Text>
                                <Text style={cedulaListStyle.textAll}>Estado Civil: {item.EstadoCivil}</Text>
                                <Text style={cedulaListStyle.textAll}>Ocupacion: {item.Ocupacion}</Text>
                                <Text style={cedulaListStyle.textAll}>Fecha de Expiracion: {item.FechaExpiracion}</Text>
                            </View>
                        </>
                    }} />
            </View>
        );
    }
}

export default CedulaList;