import {View, Text, ScrollView, Image, TextComponent, Linking, TouchableOpacity} from "react-native";
import {oneObjectiveStyles} from "../../styles/homeStyleComp/oneObjectStyle";
import Spacer from "../helpers/Spacer";
import {MaterialIcons} from "@expo/vector-icons";

export default function OneObjectiveScreen({route}) {
    console.log(route.params.webSite);

    return (
        <ScrollView style={oneObjectiveStyles.container}>
            <Spacer height={50}/>
            <Image style={oneObjectiveStyles.photoEdit} source={{uri: route.params.photoLink}}/>
            <Text style={oneObjectiveStyles.titleText}>{route.params.nameObj}</Text>

            <Spacer height={20}/>

            <MaterialIcons onPress={() => Linking.openURL(route.params.webSite)}
                name="info" size={100} color="#7149C6" style={{alignSelf: "center"}} />

            <TouchableOpacity style={oneObjectiveStyles.locationEdit}
                                onPress={() => Linking.openURL('google.navigation:q=45.757477290386504+21.2293639974171')}
            >
                <Text style={{alignSelf: "center", color: "white"}}>LOCATION</Text>
            </TouchableOpacity>

            <Spacer height={20}/>

            <Text style={{color: "green", fontWeight: "bold", fontSize: 18}}>Reward: {route.params.score}</Text>

            <Spacer height={30}/>

            <TouchableOpacity style={oneObjectiveStyles.confirmLocEdit}
                              onPress={() => alert("NU E FACUT NIMIC")}
            >
                <Text style={{alignSelf: "center", color: "white"}}>CONFIRM LOCATION</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}