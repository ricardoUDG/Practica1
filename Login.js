import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';


export default class Login extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context;
    const login = () => {
        console.log("Diste click");
        navigation.navigate('registro');
    }

    return (
      <View style={styles.container}>
            <ImageBackground style={styles.bg} source={require("./Imagenes/fondoLogin.jpg")}>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={login}>
                    <Text></Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    bg:{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height
    },
    btn:{
        /*borderWidth: 2,
        borderColor: "white",*/
        width: 160,
        height: 65,
        marginTop: 650,
        marginLeft: 185,
    }
    })
    
