import {Image, View, Text, TouchableOpacity} from "react-native";
import Spacer from "../../helpers/Spacer";
import React from "react";
import {objectiveStyles} from "../../../styles/homeStyleComp/objectiveStyles";
import Objective from "../Objective";

export default function ObjectiveComponent({photoLink, nameObj, score}) {

    return (
        <TouchableOpacity style={objectiveStyles.objectiveComponent}>
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