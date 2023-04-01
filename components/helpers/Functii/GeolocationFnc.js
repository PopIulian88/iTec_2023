import {View, Text,TouchableOpacity, Alert} from "react-native"
import {useEffect, useState} from "react";
import Spacer from "../Spacer";
import { useNavigation } from "@react-navigation/core";

import * as Location from 'expo-location';
import{
    updateVerified,
    auth,
    getUser,
    updatePoints
} from "../../../firebase" 

import {styles} from "../../../styles/homeStyleComp/collectRewardStyle"

export function verifyLocation(latOb,longOb,latOm, longOm){
    console.log(latOb,latOb)
    console.log(longOb,longOm)
    if(latOm >=latOb-0.01 && latOm <=latOb+0.01  && longOm>=longOb-0.01  && longOm<=longOb+0.01 ){
        return true;
    }
    return false
}

export default function Geolocation({latOb, longOb, title, points}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [trigger, setTrigger] = useState(true)
    const [userId, setUserId] = useState("")

    const navigator = useNavigation()

    if(trigger){
        getUser(auth.currentUser?.email).then(res=>{
            setUserId(res.id)
        })
        console.log(userId)
        setTrigger(false)
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }else{
                console.log("AI INTRAT")
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let textLatitud = 'WaitingForLatitud..';
    let textLongitud = 'WaitingForLongitud..';
    if (errorMsg) {
        textLatitud = errorMsg;
        textLongitud = errorMsg;
    } else if (location) {
        textLatitud = JSON.stringify(location.coords.latitude);
        textLongitud = JSON.stringify(location.coords.longitude);
    }

    return (
        <TouchableOpacity style={styles.checkinBtn} onPress={()=>{
            if(textLatitud == 'WaitingForLatitud..' && textLongitud == 'WaitingForLongitud..'){
                Alert.alert("Nu s-a conectat cu reteaua! Incercati din nou!")
            }else{
                if(verifyLocation(latOb, longOb,textLatitud,textLongitud)){
                    updateVerified(userId,title)
                    updatePoints(userId,points)
                    Alert.alert("Felicitari! Ai castigat recompensa!")
                    navigator.pop()
                }else{
                    Alert.alert("Nu trisa!")
                }
            }
          }}>
            <Text>Check in!</Text>
          </TouchableOpacity>
    );
}