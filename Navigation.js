import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Colors} from './colores.js';

import Login from "./Login";
import Registro from './Registro';
import Home from './Home';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
          <Stack.Screen name="registro" 
          component={Registro} 
          options={{ 
            title: 'Registro',
            headerStyle: {
              backgroundColor: Colors.primary_dark,
            },
            headerTintColor: Colors.primary_color_text,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
