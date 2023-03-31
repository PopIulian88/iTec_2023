import {View, Text} from "react-native"
import {useEffect, useState} from "react";
import Spacer from "../Spacer";

import * as Location from 'expo-location';

export default function Geolocation() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Spacer height={300}/>
            <Text>LATITUDIE: {textLatitud}</Text>
            <Text>LONGITUDINE: {textLongitud}</Text>
            {/*<Text>{text}</Text>*/}
        </View>
    );
}