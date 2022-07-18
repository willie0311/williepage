import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import homeRoute from './src/routes/Home';
import pageRoute from './src/routes/Page';
// import {  } from 'react-native-paper';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={homeRoute}/>
          <Stack.Screen name='Page' component={pageRoute}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}