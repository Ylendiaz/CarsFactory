import React, { Component } from "react";
import { ImageBackground, StyleSheet, Button, Text, View } from 'react-native';


const image = {uri: "https://resource.playmods.net/prd/image/2a14d76f-89db-4c48-8cd4-52d844b6fa81.jpg-subjectDetailwebp"}


const Home = ({navigation}) => {
    return<>
        <ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
            <Text style={styles.text}>Cars Factory</Text>
            <Button title="Go" onPress={() => navigation.navigate('CarsList')}/>
        </ImageBackground>
        
    </>
}

export default Home;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    justifyContent: 'center',
  },
  bgimage:{
    flex: 1,
    justifyContent: "center",
    with: "100%",
    height: "100%",
  },
  text: {
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
  buttonView:{
    Color: "black"
  }

});