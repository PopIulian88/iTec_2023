import {View,Text,TouchableOpacity} from "react-native"
import {useNavigation} from "@react-navigation/core"
import { useEffect } from "react"

import { styles } from "../../styles/styles"

import {
    auth,
    onAuthStateChanged
} from "../../firebase.js"
import Spacer from "../helpers/Spacer"



export default function AuthScreen(){

    const navigation = useNavigation()

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                navigation.navigate("Home")
            }
        })
    })

    return(
        <View style={[styles.container,{justifyContent:"flex-start",backgroundColor:"#2e2b2a"}]}>
            <Spacer height={100}/>
            
            <TouchableOpacity
                onPress={()=>{navigation.navigate("LoginScreen")}}
                style={styles.entryPageButton}
            >
                <Text style={styles.entryPageText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate("RegisterScreen")}}
                style={[styles.entryPageButton,styles.outlineButton]}
            >
                <Text style={[styles.entryPageText,styles.outlineText]}>Register</Text>
            </TouchableOpacity>

            
        </View>
    )

}