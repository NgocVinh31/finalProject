import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Buy from "./screen/buy"
import Store from "./screen/store"
import Home from "./screen/home"
import Diffirent from './screen/diffirent';
import Login from "./screen/login"
import Tab from "./screen/tab"
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  )
}
