import { Text, View } from 'react-native'
import React from 'react'
import {objectiveStyles} from "../../styles/homeStyleComp/objectiveStyles";
import Spacer from "../helpers/Spacer";
import ObjectiveComponent from "./homeComponents/objectComponent";


export default function Objective() {
    return (
        <View style={objectiveStyles.container}>
            <Spacer height={50}/>
            <ObjectiveComponent photoLink="https://reactnative.dev/img/tiny_logo.png"
                                nameObj="Piata Unirii de Vest din Timisoara"
                                score={100}/>
        </View>
    )
}
