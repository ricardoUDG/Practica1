import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';


export default class NLogin extends Component {
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
            <ImageBackground style={styles.bg} source={require("./Imagenes/backLogin.jpg")}>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="darkgray"
                        //onChangeText={(email) => setEmail(email)}
                    />
                    </View>
                    
                    <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="darkgray"
                        //onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       },
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
    },
    inputView: {
        backgroundColor: "black",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
            color: "white",
            height: 50,
            flex: 1,
            padding: 10,
            textAlign: "center"
      }
    })
    
