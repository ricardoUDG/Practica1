import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';

export default class Registro extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false,
      codigo:"",
      password: "",
      nombre: "",
      apellido: "",
      centro: "",
      semestre: "",
      codigo: "",
      telefono: "",
    };
  }

  render() {
    const navigation = this.context;

    const registro = () => {

      
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("¡Error!", "Correo Electronico Invalido.", [{text:"Ok",onPress:()=>console.log("email error")}]);
        return;
      }

      if(this.state.codigo.length > 10 || this.state.codigo.length <= 0){
        Alert.alert("¡Error!", "Codigo de Estudiante Invalido.", [{text:"Ok",onPress:()=>console.log("code error")}]);
        return;
      }
      
      this.setState({isLoading:true});
 

      console.log("attempting connection");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log("response: " + xhttp.responseText);
            if(xhttp.responseText=="1"){
              Alert.alert("¡Bien!", "Usuario Creado Correctamente", [{text:"Ok",onPress:()=>{
              console.log("user okay");
              navigation.navigate('login');
            }}]);
            }
            if(xhttp.responseText=="2"){
              Alert.alert("¡Error!", "Error desconocido al crear cuenta", [{text:"Ok",onPress:()=>{console.log("weird error");this.setState({isLoading:false});}}]);
            }
            if(xhttp.responseText=="3"){
              Alert.alert("¡Error!", "Un Usuario con este codigo de estudiante ya existe", [{text:"Ok",onPress:()=>{console.log("user repeat error");this.setState({isLoading:false});}}]);
            }
            if(xhttp.responseText=="4"){
              Alert.alert("¡Error!", "Error en los datos ingresados para crear Usuario", [{text:"Ok",onPress:()=>{console.log("user empty data error");this.setState({isLoading:false});}}]);
            }
          }
      };
      xhttp.ontimeout = ()=> {
        console.log("Fin de tiempo de request");
        Alert.alert("¡Error!", "Sin respuesta del servidor.", [{text:"Ok",onPress:()=>console.log("code error")}]);
        this.setState({isLoading:false});
      };
      xhttp.open("GET", "https://gaboproginternet.000webhostapp.com/registro.php?nombre="+this.state.nombre + " " + this.state.apellido+"&codigo="+this.state.codigo + "&password=" + this.state.password + "&centro=" + this.state.centro + "&semestre="+this.state.semestre + "&correo=" + this.state.email + "&telefono=" + this.state.telefono, true);
      xhttp.send();
  }








    return (
      <View style={styles.container} pointerEvents={this.state.isLoading ? 'none' : 'auto'}>
        <Text style={styles.title}> Crear Cuenta </Text>
        <View style={styles.registroContainer}>
          <ScrollView>
            <View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Nombre</Text>
                <View style={styles.nombreContainer}>
                  <TextInput
                                style={[styles.input,styles.nameInput]}
                                placeholder="Nombre(s)"
                                placeholderTextColor={Colors.secondary_text}
                                onChangeText={(nombre) => this.setState({nombre})}
                            />
                  <TextInput
                                style={[styles.input,styles.nameInput]}
                                placeholder="Apellido(s)"
                                placeholderTextColor={Colors.secondary_text}
                                onChangeText={(apellido) => this.setState({apellido})}
                            />
                </View>
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Correo Electronico</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Correo Electronico"
                              autoComplete="email"
                              keyboardType="email-address"
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(email) => this.setState({email})}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Contraseña"
                              secureTextEntry={true}
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(password) => this.setState({password})}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Centro</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Centro"
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(centro) => this.setState({centro})}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Semestre</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Semestre"
                              keyboardType="numeric"
                              maxLength={2}
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(semestre) => this.setState({semestre})}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Codigo de Estudiante</Text>
                <TextInput
                              style={styles.input}
                              placeholder="##########"
                              keyboardType="numeric"
                              maxLength={10}
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(codigo) => this.setState({codigo})}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Numero de Telefono</Text>
                <TextInput
                              style={styles.input}
                              placeholder="33--------"
                              keyboardType="number-pad"
                              maxLength={10}
                              placeholderTextColor={Colors.secondary_text}
                              onChangeText={(telefono) => this.setState({telefono})}
                          />
              </View>
            </View>
            <View style={styles.botonContainer}>
              <TouchableOpacity style={styles.botonRegistrar} onPress={registro}><Text style={styles.botonTexto}>Registrarse</Text></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      {this.state.isLoading && <View style={styles.loading}>
          <ActivityIndicator color={"#fff"} />
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.primary_default,
      color: Colors.primary_color_text,
      flex: 1,
     },
  registroContainer:{
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      paddingTop: 35,
      backgroundColor: "white",
      flex:1,
      justifyContent:"space-between"
  },
  elementoContainer:{
      paddingHorizontal: 30,
      marginBottom:10,
      paddingBottom:5,
  },
  nombreContainer:{
      flexDirection:"row",
      padding:0,
      margin:0,
      justifyContent:"flex-start",
  },
  title:{
      margin: 40,
      marginBottom: 20,
      fontSize: 26,
      textAlign: "left",
      fontWeight: "bold",
      color: Colors.primary_color_text,
  },
  input: {
    marginTop: 4,
    borderWidth: 2,
    borderBottomRightRadius :30,
    borderColor: Colors.divider,
    padding: 10,
    paddingLeft:20,
    color:Colors.primary_text,
  },
  nameInput:{
    width:"40%",
    marginRight: 15,
  },
  label: {
      color:Colors.secondary_text,
      marginBottom:0,
      textAlign: "left",
      fontWeight: "bold",
    },
  botonContainer:{
    marginTop:8,
    paddingHorizontal: 30,
    paddingBottom: 30,
    alignItems: "flex-end"
  },
  botonRegistrar: {
      textAlign: "center",
      width: "35%",
      backgroundColor: Colors.accent,
      borderRadius: 30,
      alignItems: 'center',
      color: Colors.primary_text,
      padding: 10,
    },
  botonTexto:{
      color: Colors.primary_color_text,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
  })
  