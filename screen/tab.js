import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Buy from "./buy"
import Store from "./store"
import Home from "./home"
import Diffirent from './diffirent';
import Login from "./login"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const color1="red";
const color2="black";
export default function tab() {
    return (
        <Tab.Navigator

        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 10,
                left: 20,
                right: 20,
                backgroundColor: "white",
                borderRadius: 10,
                height: 60,
            }
        }}
        >
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={style.itemTab}>
                <Icon style={{color: focused? color1:color2}} name="home" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? color1:color2}]}>Home</Text>
                </View>
            )
        }} name="Home" component={Home} />
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={style.itemTab}>
                <Icon style={{color: focused? color1:color2}} name="cart" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? color1:color2}]}>Buy</Text>
                </View>
            )
        }} name="Buy" component={Buy} />
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={[style.itemTab, style.itemTab2]}>
                <Icon1 style={{color: focused? "white":color2}} name="shop" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? "white":color2}]}>Cửa hàng</Text>
                </View>
            )
        }} name="Store" component={Store} />
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={style.itemTab}>
                <Icon style={{color: focused? color1:color2}} name="document" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? color1:color2}]}>Khác</Text>
                </View>
            )
        }} name="Diffirent" component={Diffirent} />
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={style.itemTab}>
                <Icon2 style={{color: focused? color1:color2}} name="user" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? color1:color2}]}>Login</Text>
                </View>
            )
        }} name="Login" component={Login} />
      </Tab.Navigator>
    )
}

const style =StyleSheet.create({
    itemTab: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemTab2: {
        width: 90,
        height: 90,
        borderWidth: 1,
        position: "absolute",
        bottom: 7,
        backgroundColor: "red",
        borderColor: "white",
        borderRadius: 50,
    },
    itemTab_text: {
        fontSize: 15,
    }
})