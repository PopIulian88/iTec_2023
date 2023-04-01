import {Image, View, Text, TouchableOpacity} from "react-native";
import Spacer from "../../helpers/Spacer";
import React from "react";
import {objectiveStyles} from "../../../styles/homeStyleComp/objectiveStyles";
import Objective from "../Objective";

import {useNavigation} from "@react-navigation/core";
import OneObjectiveScreen from "../OneObjectiveScreen";

export default function ObjectiveComponent({photoLink,nameObj,score,address,lat,long,tags,website,}) {
    const navigator = useNavigation();

    return (

        <TouchableOpacity style={objectiveStyles.objectiveComponent}
            onPress={() => navigator.navigate('OneObjectiveScreen', {
                photoLink: photoLink,
                nameObj: nameObj,
                points: score,
                address: address,
                website: website,
                tags: tags,
                lat: lat,
                long: long,
            })}>
            <View style={{width:"50%"}}>
                <Image style={objectiveStyles.photoEdit} source={{uri: photoLink}}/>
            </View>
            <View style={{ flexDirection: "column",width:"50%"}}>
                <Text style={{justifyContent: "center", color: "#00235B"}}>{nameObj}</Text>
                <Text style={{fontWeight: "bold"}}>Points:
                    <Text style={{fontWeight: "bold", color: "green"}}> {score}</Text>
                </Text>
            </View>

        </TouchableOpacity>

    )
}