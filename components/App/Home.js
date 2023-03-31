import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from "../../styles/styles"
import { TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/core"


import {
    signOut,
    auth
}from "../../firebase"

export default function Home() {

    const navigation = useNavigation()
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Logged of" )
            navigation.replace("AuthScreen")
        })
        .catch(err => alert(err))
    }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={
        handleSignOut
      }>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
