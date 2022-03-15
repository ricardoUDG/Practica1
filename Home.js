import React, { Component } from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';

export default class Home extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      participantes:5,
    };
  }
  componentDidMount(){
    console.log("attempting connection");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=> {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          this.setState({participantes:parseInt(xhttp.responseText)});
        }
    };
    xhttp.ontimeout = () => {
      Alert.alert("¡Error!", "Sin respuesta del servidor.", [{text:"Ok",onPress:()=>console.log("code error")}]);
      navigation.navigate('login');
    };
    xhttp.open("GET", "https://gaboproginternet.000webhostapp.com/usuarios.php", true);
    xhttp.send();
        
  }

  render() {
    const navigation = this.context;

    
    return (
      <View style={styles.container}>
        <Text style={[styles.label,{fontWeight: "bold",}]}> Participantes registrados: </Text>
        <Text style={styles.label}> {this.state.participantes} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    color:Colors.secondary_text,
    textAlign: "left",
  }
  });
  
