import {Image, View, Text, TouchableOpacity} from "react-native";
import Spacer from "../../helpers/Spacer";
import React from "react";
import {objectiveStyles} from "../../../styles/homeStyleComp/objectiveStyles";
import Objective from "../Objective";

import {useNavigation} from "@react-navigation/core";
import OneObjectiveScreen from "../OneObjectiveScreen";

export default function ObjectiveComponent({photoLink, nameObj, score, adresa, webSite, tags, lat, long}) {
    const navigator = useNavigation();

    return (

        <TouchableOpacity style={objectiveStyles.objectiveComponent}
            onPress={() => navigator.navigate('OneObjectiveScreen', {
                photoLink: photoLink,
                nameObj: nameObj,
                score: score,
                adresa: adresa,
                webSite: webSite,
                tags: tags,
                lat: lat,
                long: long,
            })}>
            <View style={{flex: 1}}>
                <Image style={objectiveStyles.photoEdit} source={{uri: photoLink}}/>
            </View>
            <View style={{flex: 2, flexDirection: "column"}}>
                <Text style={{justifyContent: "center"}}>{nameObj}</Text>
                <Text style={{fontWeight: "bold"}}>Points: {score}</Text>

            </View>

        </TouchableOpacity>

    )
}