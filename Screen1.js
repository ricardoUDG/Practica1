import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
//  Importacion de objetos

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Leones:2,
        CruzAzul: "0",
        input1:"",
        input2:"",
        GolesTotal:"",
        //Aqui van todas las variables locales y globales
    };
  }

  render() {
      //Codigo para que funcionen los elementos graficos

      const Cmarcador = () =>{
        var Gtotal = parseInt(this.state.input1) + parseInt(this.state.input2);
        this.setState({GolesTotal:Gtotal});
        this.setState({Leones:this.state.input1});
        this.setState({CruzAzul:this.state.input2});
      }

    return (
      <View>
        <Text style={styles.Texto}> Partido </Text>
        <Image style={styles.Logo} source={require("./Imagenes/logoLeones.png")} />
        <Text style={styles.VS}> VS </Text>
        <Image style={styles.Logo} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_Deportivo_Cruz_Azul.png"}} />
        <Text style={styles.VS}>Marcador:</Text>
        <Text style={styles.VS}>Leones: {this.state.Leones}</Text>
        <Text style={styles.VS}>Cruz Azul: {this.state.CruzAzul}</Text>
        <Text style={styles.VS}>Goles Totales: {this.state.GolesTotal}</Text>
        <View>
          <TextInput placeholder='Goles Equipo 1'
          onChangeText={(input1) => this.setState({input1})}></TextInput>
        </View>
        <View>
          <TextInput placeholder='Goles Equipo 2'
          onChangeText={(input2) => this.setState({input2})}></TextInput>
        </View>
        <View style={styles.btn}>
          <Button title='Cambia Marcador' onPress={Cmarcador}></Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
Texto:{
    fontSize:30,
    color: "red",
    textAlign: "center",
    marginTop: 30,
},
Logo:{
    width: 160,
    height: 160,
    marginLeft: 100,
},
VS:{
    fontSize: 20,
    marginTop:5,
    marginBottom:5,
    textAlign: "center",
    color: "white",
},
btn:{
  width:200,
  height: 50,
  marginLeft:100,
},
})
