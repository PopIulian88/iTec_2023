import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from  '@react-navigation/native-stack';


import Register from "./RegisterScreen"
import Login from "./LoginScreen"
import AuthScreen from "./AuthScreen"
import Home from "../App/Home"
import Geolocation from "../helpers/Functii/Geolocation";

const Stack = createNativeStackNavigator();

export default function Auth () {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="AuthScreen" component={AuthScreen}/>
        <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="RegisterScreen" component={Register}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({


})