import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {Colors} from './colores.js';
import MenuDrawer from 'react-native-side-drawer'
import {Button, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Leaderboard from 'react-native-leaderboard';

export default class Home extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      participantes:5,
      open: false,
      nombre : "Ricardo Daniel Garibaldi Oliva",
      codigo: "215661844",
      centro: "CUCEI",
      foto: "https://randomuser.me/api/portraits/women/57.jpg",
      data: [
        {userName: 'Joe', scoreInt: 52, scoreStr: "52 M"},
        {userName: 'Jenny', scoreInt: 120, scoreStr: "120 M"},
        {userName: 'Jose', scoreInt: 11, scoreStr: "11 M"},
        {userName: 'Mariana', scoreInt: 510, scoreStr: "510 M"},
      ],
    };
  }
  componentDidMount(){
    this.dataU();
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  sort = (data) => {
    const sorted = data && data.sort((item1, item2) => {
        return item2.scoreInt - item1.scoreInt;
    })
    return sorted;
}

  dataU = async() => {
    const jsonValue = await AsyncStorage.getItem('DatosUsuario')
    var cod = JSON.parse(jsonValue);
    console.log("json cod parsed " + cod);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=> {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          console.log("Response: " + xhttp.responseText);
          var splitText = xhttp.responseText.split('|');
          this.setState({participantes:parseInt(splitText[0])});
          this.setState({nombre:splitText[1]});
          this.setState({centro:splitText[2]});
          this.setState({foto:splitText[3]});
          this.setState({codigo:cod});
        }
    };
    xhttp.ontimeout = () => {
      Alert.alert("¡Error!", "Sin respuesta del servidor.", [{text:"Ok",onPress:()=>console.log("code error")}]);
      navigation.navigate('login');
    };
    xhttp.open("GET", "https://gaboproginternet.000webhostapp.com/usuarios.php?codigo="+cod, true);
    xhttp.send();
  }

  drawerContent = () => {
    return (
      <View>
        <View style={styles.profile}>
          <Avatar
            size={84}
            rounded
            source={{ uri: this.state.foto }}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey' }}>
            <Avatar.Accessory size={23} />
          </Avatar>
          <Text style={styles.profileText}>{this.state.nombre}</Text>
          <Text style={styles.profileText}>{this.state.codigo}</Text>
          <Text style={styles.profileText}>{this.state.centro}</Text>
        </View>
        <Button title={'Cerrar'} onPress={this.toggleOpen}></Button>
      </View>
    );
  };

  /*
  
  */

  render() {
    const navigation = this.context;

    
    return (
      <View  style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <View style={styles.intcontainer}>
            <View style={styles.top}>
              <View style={styles.topLeft}>
                <TouchableOpacity style={[styles.button]} onPress={this.toggleOpen}>
                      <Text>Open</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.topRight}>
                <Text style={[styles.label,{fontWeight: "bold",}]}> Participantes registrados: </Text>
                <Text style={styles.label}> {this.state.participantes} </Text>
              </View>
            </View>
            <View style={styles.body}>
              <Leaderboard
                style={styles.leadContStyle}
                data={this.state.data} 
                sortBy='scoreStr' 
                labelBy='userName'
                sort= {this.sort}
                labelStyle={styles.label}
                rankStyle={styles.label}
                scoreStyle={styles.label}/>
            </View>
          </View>
        </MenuDrawer>
        
        
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    top: {
      flexDirection: "row",
      justifyContent:"space-around",
      alignItems:"center",
      marginHorizontal:0,
      backgroundColor: "white",
      borderBottomStartRadius:15,
      borderBottomEndRadius:15,
      height:65,
    },
    topLeft: {
      flex:1,
      margin:0,
    },
    topRight: {
      flex:2,
      flexDirection: "column",
      alignItems:"center",
      margin:0,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "space-around",
      zIndex: 0
    },
    profile:{
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 10,
      paddingTop: 10,
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "#38C8EC",
      padding: 10
    },
    intcontainer: {
      flex: 1,
      backgroundColor: "#38C8EC",
      flexDirection: "column",
      alignItems: 'stretch',
    },
    body: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F04812',
      width:80,
      height:35,
    },
    label: {
      color:Colors.secondary_text,
      textAlign: "left",
    },
    profileText: {
      color:Colors.primary_text,
      textAlign:'center'
    },
    leadContStyle:{
      margin:10,
      padding:50,
      backgroundColor: '#F04812',
    }
  })
  
