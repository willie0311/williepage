import React, { Component } from 'react';
import { StyleSheet, Text, View,Drawer } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import homeRoute from './src/home';
import pageRoute from './src/page';
import {  } from 'react-native-paper';

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='home' component={homeRoute}/>
          <Drawer.Screen name='page' component={pageRoute}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}