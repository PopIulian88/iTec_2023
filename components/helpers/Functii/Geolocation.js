import {View, Text} from "react-native"
import {useEffect, useState} from "react";
import Spacer from "../Spacer";

import * as Location from 'expo-location';

export default function Geolocation() {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
            }else{
                console.log("AI INTRAT")
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Spacer height={300}/>
            <Text>LATITUDIE: {JSON.stringify(location.coords.latitude)}</Text>
            <Text>LONGITUDINE: {JSON.stringify(location.coords.longitude)}</Text>
        </View>
    );
}