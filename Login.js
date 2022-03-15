import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Button, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';
import {NetworkVars} from './AppConstants';

export default class Login extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      codigo:"",
      password: "",
      isLoading: false,
    };
  }

  render() {
    const navigation = this.context;
    
    const register = () => {
        console.log("Diste click");
        navigation.navigate('registro');
    }
    const login = () => {

      this.setState({isLoading:true});

      console.log("attempting connection");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = ()=> {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log("response: " + xhttp.responseText);
            if(xhttp.responseText=="1"){
              console.log("Usuario Autenticado");
              navigation.navigate('home');
            }
            if(xhttp.responseText=="2"){
              Alert.alert("¡Error!", "Contraseña incorrecta", [{text:"Ok",onPress:()=>console.log("pass error")}]);
            }
            if(xhttp.responseText=="3"){
              Alert.alert("¡Error!", "No existe usuario", [{text:"Ok",onPress:()=>console.log("pass error")}]);
            }
          }
          this.setState({isLoading:false});
      };
      xhttp.ontimeout = () => {
        Alert.alert("¡Error!", "Sin respuesta del servidor.", [{text:"Ok",onPress:()=>console.log("code error")}]);
        this.setState({isLoading:false});
      };
      xhttp.open("GET", "https://gaboproginternet.000webhostapp.com/login.php?codigo="+this.state.codigo+"&password="+this.state.password, true);
      xhttp.send();
  }

    return (
      <View style={styles.container} pointerEvents={this.state.isLoading ? 'none' : 'auto'}>
            <ImageBackground style={styles.bg} source={require("./Imagenes/backLogin.jpg")}>
            <View style={styles.container}>
                <View style={styles.logContainer}>
                  <TextInput
                      style={styles.inputLogin}
                      placeholder="Codigo de Estudiante"
                      keyboardType="number-pad"
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
            {this.state.isLoading && <View style={styles.loading}>
          <ActivityIndicator color={"#fff"} />
          </View>}
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
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }

      
    })
    
