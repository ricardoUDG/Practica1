import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';
import {NetworkVars} from './AppConstants';

export default class NLogin extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      codigo:"",
      password: "",
    };
  }

  render() {
    const navigation = this.context;
    const register = () => {
        console.log("Diste click");
        navigation.navigate('registro');
    }
    const login = () => {
      console.log("attempting connection");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log("response: " + xhttp.responseText);
            // Typical action to be performed when the document is ready:
          }
      };
      xhttp.ontimeout = function() {
        console.log("Fin de tiempo de request");
      };
      xhttp.open("GET", "https://gaboproginternet.000webhostapp.com/temporal.php?login="+this.state.codigo+"&password="+this.state.password, true);
      xhttp.send();
  }

    return (
      <View style={styles.container}>
            <ImageBackground style={styles.bg} source={require("./Imagenes/backLogin.jpg")}>
            <View style={styles.container}>
                <View style={styles.logContainer}>
                  <TextInput
                      style={styles.inputLogin}
                      placeholder="Codigo de Estudiante"
                      onChangeText={(codigo) => this.setState({codigo})}
                      placeholderTextColor={Colors.secondary_text}
                  />
                  <TextInput
                      style={styles.inputLogin}
                      placeholder="Contraseña"
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                      placeholderTextColor={Colors.secondary_text}
                  />
                  <TouchableOpacity >
                          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contBotones}>
                    <TouchableOpacity style={styles.botonesLogin} onPress={register}><Text>Registrarse</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botonesLogin} onPress={login}><Text>Entrar</Text></TouchableOpacity>
                </View>
                
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
    logContainer:{
      width: "85%",
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomEndRadius: 45,
      borderTopLeftRadius: 50,
      borderTopLeftRadius: 50,
      borderTopWidth: 50,
      borderTopColor: Colors.primary_default,
      backgroundColor: "white",
      paddingTop:15,
      paddingBottom:20,
      marginBottom:10,
    },
    forgot:{
        marginTop: 15,
        color:Colors.secondary_text,
    },
    inputLogin: {
        backgroundColor: Colors.divider,
        borderRadius: 25,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        color: Colors.primary_text,
        height: 50,
        padding: 10,
        textAlign: "center"
      },

      contBotones: {
        width: "68%",
        height: 45,
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"space-between",
      },

      botonesLogin: {
        textAlign: "center",
        width: "45%",
        backgroundColor: Colors.accent,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },


      
    })
    
