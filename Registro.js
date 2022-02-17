import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Crear Cuenta </Text>
        <View style={styles.registroContainer}>
          <View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Nombre</Text>
                <View style={styles.nombreContainer}>
                  <TextInput
                                style={[styles.input,styles.nameInput]}
                                placeholder="Nombre(s)"
                                placeholderTextColor={Colors.secondary_text}
                            />
                  <TextInput
                                style={[styles.input,styles.nameInput]}
                                placeholder="Apellido(s)"
                                placeholderTextColor={Colors.secondary_text}
                            />
                </View>
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Correo Electronico</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Correo Electronico"
                              placeholderTextColor={Colors.secondary_text}
                          />
              </View>
              <View style={styles.elementoContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                              style={styles.input}
                              placeholder="Contraseña"
                              secureTextEntry={true}
                              placeholderTextColor={Colors.secondary_text}
                          />
              </View>
          </View>
          <View style={styles.botonContainer}>
            <TouchableOpacity style={styles.botonRegistrar}><Text style={styles.botonTexto}>Registrarse</Text></TouchableOpacity>
          </View>
        </View>
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
  }
  })
  