import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Router from './src/Router';


export default function App() {
  return (
    <>
      <statusbar style="light" backgroundcolor='#000' translucent={false} />
      <Router/>
    </>
  )
}
