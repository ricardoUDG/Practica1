import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Login";
import Registro from './Registro';

export default class NavPrueba extends Component {
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
          <Stack.Screen options={{headerShown: false}} name="registro" component={Registro} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
